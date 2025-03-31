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
    "5MZR8MEQ1uPECvDXuD6a582c9jjxXLT9AS5C1Wc1pYpKsKq4jGJHh9bpifvUsHP5DEQRaKgcTGHzswy81MdYrNAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oVKPVeqxoK8NuQi58QqFFM454AFKa5TjzkqAb8NqrqC1yiRjFHzdH9k2sMzNGLYE9icy1t7v85P41SnW9juzgWF",
  "key1": "5NS9BDNvNRwAUHEVg67X3RkjUmjvcgn1bPLUCtUrvQ6JXr6YpPMfvJwVw2iUnjnKjvL82fSFFFA4Ufnt3cXFYwMa",
  "key2": "XPsQqaPwYKtFdxex7V18pYRYKvDpSLJwYi5k1bysanLXS4Ly2191k6r6sdhnG1Rj9GWzJtM2GE2tEcnb2Bm4aoG",
  "key3": "232EFfy15hfPQczjVRzxetTtbFcksETjLpkZjyGHnLVvbZTsq1beTPMh4AFyTARaX2UqRHLxF5A6SEkbYHMvaS9t",
  "key4": "oxLeQ4aXMXwSSBrJ4dbjrERBMAm9xuqkm2Vza7NZacx8CPWjame8JR782xFPzckwMqmQWPEBieRyL4pYNdz4tf5",
  "key5": "5PRM6W3RW1pZdLEfjdy5YefCYSNMUBv68r9PTHYPxduEEkWYGE4N7nX6bwd1jQEJ33bj3JrnGf3tM1J1k7FL5Ges",
  "key6": "2Yus39hWDjEcxdHfDvq2ZWxBQ4HY6eRq7cwQwNDTnUWtkXjjNJGcvTuVu8juRYKzQFzR8ocY7VW5umZFnM4YNQQF",
  "key7": "FQKyk7zb9AtNFcCR12rmkFkGDqJ8oWs3qU6Km7YivHFuzYD8UJjHxKxEce7XgY6TFXhZGmZJR6sb2W7ca4n4JTJ",
  "key8": "3dVfSFygyumbgnMxZXJtBv3z9n1kzzwqCYRtiwYnK1VxTtynWDFxDULKqsEspogsLrB5G6qv3X52n3ggHnwXjizC",
  "key9": "2U3kzfwj21peYGYEZanq3KqBDTiDfxxaLBswVWsvt7AAZdvmBMnfT5XX9UwgeQAUK2eZXrcBHHcRPScNTZCkPmDD",
  "key10": "3arQt3bq5m2jNZ9jkwZX9pXxVHRuBByYiNaGrDDV1Qvc7Y1h6HFawSuP2rc2Q7ijrV5BeNsXnKEFMvRD9ccrE7ax",
  "key11": "4KadxswkVZPRkZsGdgpwe9vKuzvb66KnJkfevE9iL3NP95CHs4iGmzMEhYKexw8ct5ET98B5qAaMnGFxwZtEGA2G",
  "key12": "3QTu9931nFXP8KpFTjNG7PrxSmKHK9aT13YJUTQPSXkPypoiBgVa1txykd2rnTkgMDYnym1xwKomhTBamRRN3Md4",
  "key13": "2xEzM7NaEKBKYjjsGKURyCyzbYJWyXc1mSw16dZci3TAqX9m2cG4QgkbkLK1QVgpaNfT9YAWmmpweW4vdcHagNBC",
  "key14": "4DmhrAeg2MmRtn39e94ougrBxXMnHpY6k245SFssWeVzz71Nga5FWhNyRtv1z57QZ9DqmFby4sBVqXkXxbrQXd7Q",
  "key15": "5r3G3EGzkFu9LCYsPE98Dd5LjjSDdP3Q97LKf8JePRRKYyTpcxcXvnD7gaFn96rwDAnwtnU82K5NnmhHVRoqTkpu",
  "key16": "3JUj2eiYiQNQuRnKcyrodWH3NGZtQ2mdAup8n9j6nrA9wRYfMoHNZzr5vwSHEKj1uesLCaFsBSw89SWwwV5dE1Kd",
  "key17": "2cx63Lp2pXj8WEWRtFLQGDvdVdZwKJa5qDMo9d6MeHoWqbNS46rw5hMcfStbBkaxE98NM1Q5Gq8tegAgsbvMFSuf",
  "key18": "4Gkw1sXSkViYDGe8ZkVNVJtM2mgasui3MecQq5bmxjfp8En5d3vK9yNhs6EteTsfPHT5doQa6KzEBuYudwRETsdr",
  "key19": "52EGMzfyQd2SSY7Tu1VyA5HZFfZi4RapgPmsVARC4pMKz8fqy118Tmfwcbp9b5qSGBLZt3QhQBryFTrHVT8B8Bfc",
  "key20": "iV4WHTcsG8wgtYBAJxPEnFuUzxgxwsyp86bR7DqaAufXsaSn1iNu1kYe5e6iNjHyYmvevGbqMNqASS5oJvVj2YS",
  "key21": "2gZQ5Sp88eybqR3g8poEqPpUV6uULP8XRnCRoDnLkTqDXzKpgbXk36tep6E42Zi1bdXvQ8UtZ6akomCnjdyrGfue",
  "key22": "2BoXrBedBLxHcXmEamq8TvSEuJ6HBQ5KTpT6AJurzeRS8nVUq51zVsGqUuCfGA7df91rneNWXjFngHSZ3g8QkYQD",
  "key23": "62Ps1a1SD2mqebQCr8XqkTk2czRkyZioNQufSHLb36fAnYHPzStD9abHJ8vh7Gd2CQTd9JK3ErADzPaF2GwwDPua",
  "key24": "3SqbL6oXEpfTa5gMCZbbSVsr95W3FKNCbqfKCT8jFKbBzVqjLL1bidZQ41yUE5MRERT7wNrrktYMLM3QbYfNEJT1",
  "key25": "3eMXKa628oVfH1VbJH3JdvEVrD7eGCHU5G7szRm1GViKRFEJBR4N1fL5wLJGnAybwyTkJsoab9zcfHR4aJu8mmRV",
  "key26": "3ePyc77GqKW2gwYRNK7RMz9mpYA6t7E9M5iFsdMvzRN7UfqhDYYj6vcUdawPsWQ7ArthNXPs4qCWygGSCsrA75mA",
  "key27": "34sHH5RTrdAvita67ZbJtEeDnRpJTkh6MT7z1dEiPk3RGgAeC1F9Pe1rLRygWmNtd4SArfKBez8FwVXwy4ZCgVcn",
  "key28": "675J5XzH8eenvoMLWd2nbWKosHerefxVATZZfspobtVczJfAAy1cWgEAHAqF2BK8KHeS8v6cTPfJyP3W3H9rg54q",
  "key29": "EFdDZScV9CAg5Jwscc8fTb7sF7qYL2kWvF3nEKUSJ8iZCkGTVhXrdPCoJfJ6AYKiq6ZAqfnQ3fn7PTMh1wiK6sa",
  "key30": "3D25TvvK3SHhFhe6uMqEWq3x2YdgS6VgnrrDNXSurzTFwGGSxYfA5DZRfjWjRNquGzEAU3BsbrydnELhrwXwX99a",
  "key31": "3GdvFjnZzsTr93tPJFLxRVP9iXUNPzhnZ43UGrbMv2Twn9zkcrTrETcpRigDZP7nUEJnevjyQ3zGtgbgoVDnwnR2",
  "key32": "2Cntg1x5Q3WTPRWPGevcZngUZA1YMMLopZ3vyyU6Lzx2RLKQV1K3UDfofZQAKenybSkveNmUCXyVQW4j7YL9jSuw",
  "key33": "S4PhszZreEsMNsEF1amD8bnhoGiWBxd3anqoks99Wmeutt5GGoHh9qo4H11iVHSpeFuTKnjBNzsVE8KHRxpWe2B",
  "key34": "HJQ95dRxbR8mXrw7SQn6YMpo9BaH5DAgXVk9zp2um6ypBSu9n83YHxPeQgdyZUoXWvqu7bH3RvTZvVhqmX3RgWE",
  "key35": "YRYjdr3VhrYatKQcknaVVJcZauxMGimJ12TV8KzggaTrx1VEnenHvUAebGV6EVU6JFmiDKDGdgv3rxV3bt73Uv8",
  "key36": "4ruzJ2MPqSE9agrxEJ7juuWzy1GDKJprLYbj36LMeeduqpNhTXxyBKQixj59s1BsjAWuygumF4drHvH8J1rHCRZ8",
  "key37": "Caom56MwtfXpxVbHHE3EbEt8Fiu4xVgoUKZ3KdN1QuWfKjyPH1Muq6H7PrMdrrtS89dheZxovLXGWaX84WSqpn9",
  "key38": "5YDGMuNPZWBtfch5tSzktsu7ZtivjTRzebQTYTbFKfFD6mZ8vNBneVCeMRmr24zyGQWpyzu15YX1CDSgSynhTuW6",
  "key39": "2rCdVFDF87tdEXXx7U2NdVKG8EFjndUrd4qootSWg8qTVF16HUHT2xGW8F2qusbakmQiRMTHn9yEqYr2Ry1BMuYm"
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
