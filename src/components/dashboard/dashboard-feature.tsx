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
    "4RqYt6iGqpEK5hYbrozFEbrVFye9XSjkHGdZ3GtaTKB5hawMEGN4gnmFGn7ezV3c9GgVfgwonxpuvCrxg1YKtPrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BMjNA4cnPKrXAFmAjep3aWNcn9VF6eXSjiSN7dmb9hs9eSYTv7v9uQ1usjBy1MNHcguhspfFxRspL14nNPJbaLw",
  "key1": "dkjbmJFVJ97HhBJKE3h7fXsNNigU5vu7Nzd1x8gQUKtaRMAF2zrSZaV3S6fKpBBgdXmqphCQEKt6MaxP6Rv8S2i",
  "key2": "3VKiWWhKRFDQoaRekqNeYeUYxDMKubsJrMom8nyeCmpaz2AepAvSxNAWH1Pq2AxbM6VRedBQhaaCSx7V859Ck1bB",
  "key3": "Ro4meMkVp8bmCZmYumVHBfCyGnhdXveGogaaY2P3C6g1eNdhG14YLcfbLuruVVqPHcxATfxHyR3aNw7CK15vqkN",
  "key4": "4RNxYFMv68kSSdzAJuHM9d8P5mSd6wgkXZjjaRTWqMfRPHm8RTa4rsZVzG5oVAJoNU9GwGHq5EmE9eVqU9n5FcoY",
  "key5": "1uShYf6h5hbufrRH9pMpkTezXPyF6KRLgormSCE5rnrreHBivg4WjsUngswrGtquDDy77TYaZ7HcEkRPUq9ddUM",
  "key6": "61nPGsvd6HG5ppJdP6ciKhJppvi7RnAs6q1XCkPbqUxm6YTDeTjqvKZAGWwMBzpXyjqBzF5GSCwr848x9JpjD7BA",
  "key7": "SqSQaE7KSRjs2ue6CFVX6iLZfVs7jEwfyrc9W4ieMw5XDQRvnMWkT5CuuY2Ni1M7AUnRsCrftzRz6sRDJFRx7RU",
  "key8": "4SWJdqS61oM3ypkWAFgkg4YvNE7W7XTX9LRF7MxCxQJFKvfP1vyoPpRhXvUc1H2WJ66FeBndjGwrZKMdeHjjqd1Q",
  "key9": "2Pj2br9qpWiHa6r8W11VstZNkQzvW5YxdHkLsaJcTEqZeqtTywL94gophTNVofRq8mqBkPbj78X3n4aH6Rg6iUEv",
  "key10": "3X7juRxLLHePJzCoAFuRCrJLZm9JEA2dpffQx99etQoJeasqtZ67VLBHdZp8u4G5gRTL1WYNCk4cKcjRo7Tdznwq",
  "key11": "dRvJtJgq1K3nYaNZXBMzFD4CTN114BwCNsXKhvVdhDzGSt6tMeZgj6dJoFVFALxcmu5Aiu9pBexjnEYydKsMwE9",
  "key12": "44Wywauuq9akzEwZ6Sb8TJzRKG3p81EH61XMoHD2h1yi2gLS3tfFgBQxBhWPVJVJ2uh1mYYoFxBkzFGd7GN5fbj",
  "key13": "3To8ZFGTcbjM8GUDnRpHEbgCkyWWg6jNrcgQyx87mrm6FvYoEDqcuBS4QcZF2fF8nTUS1VXbDKxqGfbfS7LM6adt",
  "key14": "5xXvsN4Hrs3BYbcHFXsSCD8wziCnX7M2GzNn4wpzqKh938DztLuu7LkCKr3VRiJR4H9wpwp94wnSzudSpTSX2ixE",
  "key15": "5rvFNQpcKCMYiV6avhbGwdz7SQqtF2yESNPnj7FodCWUNrYVqv6X5Kqec5njvHaxgrR92Xhya8CeNUypY4Lsc9Yu",
  "key16": "4hR5pD8pgi4n3YyzGecyazgEKzENZW6JkaGNSbB9HA6yexm8ZouAnBnRhSaSPK1DoMZvfb328edMT8XBXynMHR5h",
  "key17": "2mrK6uB5waXy4GbkdUpmMkwFuFpExrVXjMmLGUAdBBXNWG67YGDsAtM4rKkkFwwcS7wJ7dr9qvL7cZB3oyu9u5Gq",
  "key18": "5c2LPoFnBk99iiwp6iCCa77ePs3GCQoyocG4CwXG1oeeio4sWTctVJERMQ8KjvvsBBcCFY8UjHa1ATzZvhrKAfe7",
  "key19": "Z4pQVYRuuMPc9XpvxeZVwMqxHQ8Z6RVB6HAn1htnp5tVcfzZj31XbbttQuZeB2CDuFSSJwinfq8bXwF81fPA75P",
  "key20": "4TgrFMH53Hi3RLwooaiSBzwhVqiokqViBuyPEgNjkvPzB8irWfzQJsHx9RZacnqYMXZjauCANiagfrudLmbix4gd",
  "key21": "3TyGixreKfhurzxvqGutZqbx9xzsdHd49mu3QCsmACq8sATpzaUKXPJ5gFF5hNYztpSERJhgfvkEj15LEr2zzomt",
  "key22": "3VVSf16HZgqSoztLgaqNR8txRSfbHPo9wC7S3TvD5HgqDwGNG5fFFDpPxhms9on1D6nPWK4PJHxiazW9ihQYh2ws",
  "key23": "2YC4bsjYXoV6jfiVEBR4CraWkLU7HioGABmqQ8ceDVxRN6SBE49P8PeZ6ChjuXghbo4cowPNVMNZh8scJ22STjzu",
  "key24": "3omkr7PCf2MdTJqGEHaiS7otj3SqYYcnrvfbUqWoRzhweWpNLosXVRu3K8ssLfqHfP41d79StJvma5PqQpneNsCv",
  "key25": "4s24QC1Pdf7uCQ1n1NsVNta97WYZ6WN1gQcDaTJPMaC8o3n7b7Be4qx9VsKDytKzpkZwTpXm9CQ1NLsKdPdBRPSP",
  "key26": "4yUcKkNekFAnBa4KtfXqR3HaurkxTpGdnAV3cruJJx8v3j5mAMXhRKgzyeikZjo9XcZG71sfjE5g3YTYTfbB383C",
  "key27": "43w7WWGFa4BB3oyx7YhFKJCU9thdn9D6BsSYquikpdZae22zC1SV9SzMXmpT2k6tkJFpSn2bgDRu36b9b1d1nUxt",
  "key28": "z6BT5DDKBKGUMmDgbPuNwXHpa4p8uihJC9NHaZvtRC91kVkyNQ84eeu1gXCNxWt4Q9XG9MA9pnpRwr9bFksED9y",
  "key29": "5WSkSpQU3pLee8YLPmHqjSiN1KbJDq1xYXhL8TvUdozNzkNz8vgBmrt1apckcg51SGzfqtQEwn9Y4aeCDEBQUmKX",
  "key30": "5fJDLEWn9RMzQkKCh5FThh47iTcQapcrzAtpxubEY3pZQZAPTQc4bQYSubZ5SjSDG1LM8yVg3DPUo8pcbdtPgu5d",
  "key31": "2CDcC5rheMbkT7Cv1Hp8pDuRju8XvkM9dCy5RzaprLnDop8VHA41nxCw58WzkTMmpasB1d9Q9eBMcxUrpKBvREoU",
  "key32": "24a715Z8ijhBSvMdW6gYXczC5t5SbE1vpsSr5QZcam1bdCDXfESGDZckZ2mtWfymbimzDp3qyh3yNicVFhUxEbSU",
  "key33": "4ErrWUZDJpHXhH24w9fWSuxfDRbUVyhcjwmmuBGnJPeNq8VcpcXM3tJ2SW4AnTzxWTsXzibCqYSNQSSyJaMjMep",
  "key34": "5xEwmUuxnyLWDVdCabFq3ej9Pcd1n3LaTMSCo4kLbPsL9JR9qqoi5dXLDDoB6B8Rof6cXfCovq9m1GhKTpmaWKjJ",
  "key35": "4WVFaB3dacGRnewn7yWBMM7YJLPNM9ErKGQuox1FAEPNfQgjMKh1ArcZ9Z63nXEJBLDeVbkYZYqh2BSjQXGgVfqM",
  "key36": "3QdyuaJ4k75aXFJAHYwPnixm2BvSoH6CcmLDhxvPZAAPUdEpP7MUYJ24jKHFSJwpHRhMCF1V9chJbXkMjzjT6kyZ",
  "key37": "39a2AgnMHaa9KBD43P6WKrY3gYGzHrgDUqKEdqz2uMBBwP5o3gDDBnMabjTa5CBX2os3XLRYrvHBPDtWEPZvQEJe",
  "key38": "KUC8v8d9dJR3fQwXRMqx3mqzvAwMsopya2JjFQvHguXjwRAPrA32U7AyRrFm8RxzDxpN5a7VME8vVb6RKGZ81s5",
  "key39": "4euSoVeNQuXuK335Qo5b4Y1n3MnWu8p3CUKQUMEo8c2k98BJ2mPh4f3pH8YFW1xPfjGopamgnHGvmLJUkr5Ruyzh",
  "key40": "4RLUDHZKzfkTk6uHvYJouP3hFT7cgCNGce9f9d8pVzPr8cS2TRuWHzXBzK7B1LTj87KJYdA6wJZm31JmqBHVfAY8",
  "key41": "2gCvep13F68U3nPi4umgJU7ACLXYqLX6k6mP6j4k9JrP4DDbpAqot4uK5nAU9EXQvYRDGbnNTEokTzfaz2pH1pUY",
  "key42": "3vKxksPM49jri5C6rFrKqqeyWFbgBZb4QGWQhGsE3SLrYxa3nCWJxfLSUSi2rM8RmevM6tZYbXs7JUCCUchfZNHq"
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
