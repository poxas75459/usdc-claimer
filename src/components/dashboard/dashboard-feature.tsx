/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5bf7diedMLCKLojusPUjuw1t1w3D1CBzPmCs7mxsL9iu8jJ7aTBRbxSaUXUt2oVBVZfqtpvVsWTXc1Uk9SKkNxhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wu7JzYMJQqNqFGWH5mqtoTzcGnjUh4ESGDRhuaW4vvZCF7wNcWXHswJUEdgRhXbXR8LmPt6xUe8Pj9SCAvPFuWG",
  "key1": "4XTVU9vNMATCwLwPJfqw7QCbST6cQoq6Lrs3ezmCx7wfhUuwYMKLqNT6JdqZBoFCfMATXPccvSYsjyG5Laf2ymza",
  "key2": "42Yt4PGvqZcsyoRfUMLKcy5a4SPjda6Gzk9Y5BKtfesR8kAYRQTUvAzhc9sfDz6RZLEnR2KwzCqAJx65KDZTEQf2",
  "key3": "oexVWjZEqdv7D7BjxzNVN6cW5bXxCVDWH9tKohe8FEbiXAQJm2CKJvNt5k6U2zGycPh2AfsdxLpujNYjLR6G1N3",
  "key4": "3ruAt9WNhqXDxBTsZti87d9AQ9HweqQr1WfP8KmVkmMAWq8r7hdmy9St2hiRkh99sURP2D6xLCKyeF5JDcV6JNRU",
  "key5": "3CRZGaHD29NQsE6xM1k6x6N6XJofuB37a6RyXYRftYjV61wYBvSuq5irwURtx7QZbvaetggvpwwzxp91gaPLS6y7",
  "key6": "tA3eomb79JzQ4PK8ewY38bEpwqzpdDuz8XW5gDGvPeWzjVr7ZzGV4xmaFcfbv5Ky9PSTFWjVYhTdWUXeND9Bkf8",
  "key7": "PSUReGPYefKvdaA1Cy7Bq1eTxEaCAWt6txFBVAVDikyc8hFuCsVz7wgincqQFqMwnCamiFKfbUrfD6qibfFESnX",
  "key8": "4yTBrmRSgu8zv9gvTwkwMbW1ZqeeQUgfr4Me9meqgYGLAY7ih9neLp1pWCD66GZgiJRT4ELpjccphdnTZXBQhza",
  "key9": "5U4VHvc4gUdr2xifou5V95WLbaegAs8junZpadHPCZXKQiCvKimAGYX9dqixjD7VSw1BrjF7LRFyCiwbNQQvJ1mj",
  "key10": "2LCJGVHN2Jibv13ThkTeksEJHrw6zsT1t4mUuMY728yxvYXL7KQxsE5ehC84r6oBBrEdscY6pHfb2Di3Cd7wroia",
  "key11": "4nezGsbRVcFDZuEtrFvjJFQsQVUkTnFFgXupjUgidwSACjwkUZ3AMeteJhuAMaWctQyFrMQfxVVRGCnJNDwHB9u8",
  "key12": "k6WoX9f53bfCvruU9pYZotWqJv1U7YdFbwLrSgxWYVbKRJpZCEVpYV992ojYZ2prnhHcdf9yKtFY81yRST5shMk",
  "key13": "3SLJ5ZiyC8xNXsZRrPXyS61zBsQWzhx27LEqxsmUhogCdZhsPWa4QbHggMHJcp9T1tcSXJJL13DDWdfdtQoR3E2b",
  "key14": "5Hdqkv3fVatvrANnBBuAaSX6sD7RNud9GLaCruBfKkUnssykLGRNfkabV4RYKKF25GCD1RvpBuv1SJpdKAUX8dEr",
  "key15": "2WmZHRaLhnYurciTaGB3WBseGeZizEX9dtqypfjbsGUZ1VQnUUFkjJ1e2hcv2VDiPHeMW7NeRAJWxqb5FLSWCRRC",
  "key16": "3woGeMr3v4vU3QWGJFFGDtk8rguYM8e3CwLGEMY8NtWHcHkKqbp2NP6iNewmm9bcdEsducDaBLpU9h9e83QSMxHi",
  "key17": "4ZehgYrUkZ9XF2XxiTGoAzyokSXB2r421vxDXeA1ApCtV13Jri6nCKMZXa7K1vJ1o9EDCpyKGDHt3ENSe76hLhDX",
  "key18": "W3E2Aq36ZGSR9mWapXrQaK3SFMNnCiyM1fES9h8pXKE4eAkS2zWVbhW2GvNgMC6jvj3qW73wC9pGfsG4mC4YvUy",
  "key19": "48c4hwDGp7a6v41ygagZ4wyHz6REZ9VghgxV4sfamCiGZfseQguspuGpb5wvWVfi4YcchZffdAQSd39zDDLELaso",
  "key20": "2QXwdjkuNATKL4odsWmAutqwG3H42ywPhCkpKXPYE5ArupPsTMpU1eXVavyqcR1Nqpkx7EFi3DSXLvq4uHZBU6VF",
  "key21": "51hGP5mepFf6pdQGQWGJpVp2GVJV8VvZuhwo8dor2b1ekFe3AYax9vpTEXL5qDyZy9qYCrD26vzMtKBgfjo2m6kT",
  "key22": "35zyMQVEzU925RwPAowTuUQ8U3tgU847bkp91int4woJeE5P35roMAtn21Uqg8usqaAiTfxHhYrYvykDRJg4FzLE",
  "key23": "2CN35hXHEggQhz48QrWYStq5L7MrgAyP1VkT2nQwe41wXG3PdUDAgpUb2h8Pyo9Y2sL8ByDy4iQFU898D2idgvfW",
  "key24": "4EFamcBUrXyk2f5M6hJ8uQ4HuZ592JKabgbnrgnmfpqAKyFcJ5HeZ8LfS3MqLjmVkLRbJCbfUBjRUcaJ99dcLPp5",
  "key25": "3XLr3s6N1xMtgWRF8bgAbQuTuPYqB8BxJv6rMjyT61vJX7268bkRQwUqFRfSwVzfr4kEWGM8noFimqv8R3nkbEsb",
  "key26": "JMEb3SJEGGVRqb5YcfjDpBShhAMvjhow2QATrAV5P9pvjVny41swp1mfkJGP6yTbtcBzb7TcTUYyz5daGxssqHm",
  "key27": "5p7eajLN96mQ7qSoJU1zNs9AqgoKxwi5r4HEGw5bN14JYErJVqzbQW4iKkS7LRiZcpBbaRGhTABGHf1QFrFa8VvH",
  "key28": "2h5CNgaB1N3iq6ZwvbJ5KREnqvzWNbjbpKk7dmPSh342mxuGt73mNG3Cs37VEH1DT2tx3VBj6YNBVTtd5QyEbArE",
  "key29": "FtGpRxXvUnFm4XxUyYvuCDxLvbBKGDm5QqXMCQ3Jut6UB9NTkiaaSy3GrxCgV1s3R9zvB8MgUtdSTEhBPNrepiV",
  "key30": "53pY9BB2qZFmLh85PAM8VcKq35WZFWAJ7djWfbpaUGXM6iNFBqvDVef4FbbzRhEsC8aQ497Bf72VgyK3msxf92f9",
  "key31": "2YvXm8Wf17HCRan1bU2LTroN8FMswzLZQx9RuMwfoZnP2EjGnJaLQTqDeJAvGE68VzDe2FfbWUiZmLcJgdnUNjf1",
  "key32": "4GonTvQiZpX51rTyCmX84aSCpL541wghRPcAMdf3vmNnimvXaWDTRKv4qDGudpSDErp5nLXXYKzbTCUgTAphrACF",
  "key33": "3XwKnoeaXfPtp65xGBrp6x451srPF2GNwaeCw9B4hKUL3ZUQsFJruE1fmSeo35YWPKaqVSYLrkAGgxRV5B4YR7bL",
  "key34": "2N4y9gQBjj47w9jVt8hWzo6bHwy69otTBfHbZ4vc7347KBBYcEfCSfZp2QvxPcc515Bn9oRoWcLTU3tvQaTnN7rv",
  "key35": "31Xyyaf4bYUUu9zXS1WtM1cXGHHsJ3KsU2azJN4vXRqHrUMZTeUXwqp9sNsXRfXp7B8jv6gwtw8KCPgtBETax6Uv",
  "key36": "5zD23B5ENzJ8rQ4dbcZmSEa8VpMVsQEfGXgwk77fywtxGSs5uSW7uHeRBAwqFkTAbnF2fzpGciLYcpdyL8ADy7vy",
  "key37": "4KBgWh4BfysUnHmqxFmDUxtTLGZknf3uULmRALqoUiVFgMAmjZvgWj1wLRhqiafsq1AoVnYfGjy8JFxErM94MDdn",
  "key38": "2q3HchgrxeCVqo41XwPF5yzDhx1n9PuDMk5UgQdcFrGgJSBApU5QnZwwiMB1dpyJoePcx1yzuvTqqYUPwGX7SUEY",
  "key39": "4AkEgaqS5bpdweLS6xzBaGvALcdto9G7rHGS1A17KAkWbEw97Pu2g7hWSVjhqQ6DM2JovoHyMTyGHByxRZf5kWGm",
  "key40": "2St7yeWBuWXiBpm11FrDhEKxvQGjGtMAAqL2Wdk9e3CcG1sVHwq8tyjrJ3ejmcyunHMBtYcvsrVsBgJoUJjAEF1A",
  "key41": "3xAJWHDsYaik64SRZ5fhJ7hcNhFXt5GeGk628b8WT3gL5pqmf6igub6jeMyZ9mSSw87TbYEFckjyFN1YcVa9Kkmr",
  "key42": "5g9Y2c71GbxvsH3wwSJiPCKpknyV1zNnctngDN9zCk7SggbCb8SFhZ9RpDN8wtbRsHxaavsBUSGG9dpmVyJ8oZUL",
  "key43": "R56Ek32SXNhb8YYAwFasqHCA7mn8Fn3qTPYXbuQPBXWxkYMNF6YFMQf5112jcXSHppmMQHhqKWhmhn5WyP977re",
  "key44": "2gaMa1b1c76yy8jL64QCHRZk7RvB9trxz3oN4Jh8yCxwzRjyJqsNY7xhTn9AYfUGhRtvUoLfWtpCbwyj3iapP99S",
  "key45": "2zbWY9hRmN81X5wa4zomVbd8dAmsW5NSkamJ2qMRqPN2tGtfePNsNeWvSvLTq1BFNKPYEoDEYMju4Mx5jbmPMj9S",
  "key46": "5mdTPpAEY8dLeDT35UMAHGFTfdL161sMtEtbKXGWq7uHQ4xuzGnFvg7PnYRtfj3dtE4z9ciDraQtRNDEti8NbPVh",
  "key47": "d6Q73eayNuoPDqHH8ySKPtJzH6CREexyrWz9Wp7fYWmQj4Le1E4yRxYLvB11sbHfKuzQrSgcvYc8s33Z5gFg9Vu",
  "key48": "2YJFR17rpVjQr4Smo6DdbnJFWL2eBbLMoiddb3PaMwZXmS8cidittJQpBJzvfA2n6GtiNx2R2XEuJzePRmTWX3Vh",
  "key49": "rkponvooogQzQBjxEsEz8YEjCtjwpE7m9UXvNgYAm9U3rrVsMdDNiaLDBhaAPKp63i6yDtufMM2MVJrzFHXh1n4"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
