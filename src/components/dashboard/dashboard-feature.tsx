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
    "2vQ5mZYJQT3fcEqHHPtA7pwseheKhgcT5n3HPDFJtC4EVLzpBYLzzpT3DwUmUtU5N1gsWT9WW4BwfyJESj8oxYEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yreTAcvDMq8rebXE7xbPR4H5TMsf4vtpHZmcbcrA39J2UFC2ZPn1tr5EhTEUVwt7DSnf4Xs9213nGauCpR8amCS",
  "key1": "4CGoorHCwXBHecENwW4Chy86xMXWwvLm4oxXfyfMgMnGEFWnkTdKweWwsXfiVHgTpobBhLNyga9n4nT9Ng4tG38n",
  "key2": "sCCAM2SWxwjkpdYXZs2e7dJFJc83MV7wCtLLevqn6AnQq3vnCqEDA1ctTunePpYkcTAxL7bBTeR7Vq2wrjdVbnz",
  "key3": "83896f9mGHPVE92nmDsTGFCYcYYo4EDxfS1C2tuwBYe75RuYUdYfXaQSTiyJDV4wetwCNcpm1WVH8Cw67NW9oy6",
  "key4": "45UzREhM7RDBmfDaBkALkUw6FVrniauvETdc8zy5i8MuG332wuNnGTNNmJ1is5xJvWabvom7DeWJjQRzwvLbttY7",
  "key5": "4VT6GWdzhDpVv88E2FvMqt9y8G85AkcSzpQMUZo65xzcdndKTC9v8KmrEU2A2Gc7tWrtobCz6Qhrt82xFgizKy79",
  "key6": "64a1sXB3oEVmS522yfdmALWQtiHMGn3LUXmaB6J9frGPaJnvFFg4ju7uieEML6Z7uK8BvSmkLJCS5CfXiDqRPeyQ",
  "key7": "5axDL7cLsb8WDvZmHpLA4pCjjZuUKwZD2wVFqg6QfW6dZnT1nh7hGnJCgDCMdk9sHJdThps5h1K9J4scDbKYYjW6",
  "key8": "5MY4ns4Htb1X5NLFPeqx1gUAkw4oxp4ANodEES2uN9eM3qDgpTJ5AKiFDDUv1FVWLT9L7Vjy7rwM8HqPkiKXnNr4",
  "key9": "56yBEMiHEtnaDoYAhcFgD74Ujjz2vUNX3662bRpoHQfNVgFFP2Xai9FECDN3RnMvzNikfp5T7FcUDg4rHCR8k8T6",
  "key10": "3BYRtVYxDFCfiuyXB3hZT89ZveLXv1ZvRYnBpVRbbp6p9WPhsosYybwKFLzi8nah3amthar3svQPUxPUefhXdjuj",
  "key11": "3AEYaK47BJUnNDKSDQM6ykNM4uxS7YHAtX7nQM7PmFnQ3risSfRK2FuLoBqmYAEtW7YVoenLALnicyMZiwkckqcn",
  "key12": "29w42nHvdKkXJtYCBmrsfx3UbMB7iEf8wvbDct1vw99repSGiZ8cZe8sum7HVqC1ggvL2DatjAAhCyujyF8Q4pJc",
  "key13": "4Vos4CLUZZujxshFMPJgP3PyNv23gr1mj61VT7JrFANqvmhTzXG776CGPtMEqS4iKkDPH9DWLsz8rV6HY43uVJgn",
  "key14": "2iWW1NgMLfJ7SnQe3R6EKX9sQR4FgTPZivZRaqtJxgcYWw9UZu38YCgx4rehqKtSppQHcqXbeRxjcsyy2t2a5uV8",
  "key15": "3bthrabeVoMnzWb1BKqM1WV3NhPZ7QdP98A2vuthLxP2WPjXKTY69fHtMHbSXRsNityzzdWNP9HjsaW9dXsHQYnS",
  "key16": "sLaYpexE7ChjNY3eKRurqQJKG2FkPqzqmWUYy63m8VAV4wNhG2a1HTBQQZLQyqNXLcNND3JmEmjMVzniQeD1Mba",
  "key17": "2AqnQb1PnpsTxijEks1ZHVUEgqgK6v1FrTNsjxpSe2x8EjvNaFAKr16jwptVwuZxQuHQySBVZM9npYjR4zQhcxho",
  "key18": "3axLDRAnBRcufQbCmTtWEayzGGkPr4bJRxGQorkp37iPd9pKwDm25BnaJ9CtoZrTtTRZ1u4UbmBprJXxP1eiYaNe",
  "key19": "4ziczZNZ1xTumDvSQxGkqBFTfxLhTEhkmDT6UMwoSJxYYpjpWe24TTHZMdKdYxxg3FbgWn2AVoeTythobKuFTXob",
  "key20": "5D3Wgo13JT3vKZx53ii2qvLcUquaNokbznimAsN8HDoQRwJfTiftK2rAFzDbU1LkgVYSyAeegw5vDyuTuUBejY3p",
  "key21": "2fHAiK6hUzp5ABhCbopvUfssfaXK8R88TCRfd68vVgcUs6ko4STykna51XhbixrcLvTfHtJNmAT9mfKpJBaBvfaY",
  "key22": "45f2XdtpgATvgD9Ma8h1hUwiTaxsYcjpu5k34RrJV7wF9tut2A3HMhjZrmVaDub8GbMKqzSucRNoHhZB6d7uDSQt",
  "key23": "LfhuG2zAqzSBDmJLSXMLB72H1Ja3UNoDr7jRigL6kPYosYff4tYBKH9yFB2JETJo2FxhzH3kENAtduvLi3wjd8V",
  "key24": "5Nmcirjd47ZLGA6WM2NyiZyzh4LNCJxC9B7mhGGGuyYmGdoRjKbqBcaC2baGeykF5jVQpvrg8y2DttADTrNhHzcG",
  "key25": "4KBmB7o6Y79qs3Pf7B74DKAUx2W4ou9a3JUWrmqK56Xezkp7RW4pWw7hCDhvLzeVNLXC8tTYSxDMa9QfbaoEa2mr",
  "key26": "4ajVqHy2sKbvXyBrRRXjf88Fr9HUELxcdD7j8ghjjZS4JiBgir8E8cqfMXBE9TehAaExmJphCJZDv87HNpARLGsg",
  "key27": "h1G9qGo2ejnegT31awTobCXgRudPSannRh2mfFtthoNkCMMUphVYDd5BF3hBWND6KQaC76EBQR4Ph5qWUdA8Eqt",
  "key28": "5RjuxY3sg6YUKCzBmeBB9vab71y9z31jyCmtMCJMoTandpUyEDM29FDD7CerSUUB3AoK2uTrJiPSZCtfz94Rrowd",
  "key29": "4AvCfTahXkxCfWq449PQH61WE61kHeP71wAQ2ubgiGbuXMKNDmvGVtLnRVvKEYdh49TWN2gGn52Zji7185Mdm5JF",
  "key30": "3FXFivMSyKDPC3eRGDTjWMe8K2xERyE5h6ivpovxo1DVYTyTpRbB8DcHxNQ2dG7nD7oXgfoNzbxtj7DXRT1aBg9a",
  "key31": "3yTffGCccGmQUX1BmEaqVucbZ65cVv7HdNkr1bd9QZJRWYvVYgtmzgtUWSVPNKSucB9nWejfdbC1EC95GsAvALgs",
  "key32": "2BtrWKS13yWFupuMakkSmfKfXWZzfADrByUnsPQKwg9sZfuHqKqYoWWmrsSjUPTLfoXzL8jqFf38yREueKu2yt6p",
  "key33": "5YQxsh7adJKUYXiUsY9ERaRvj3dc7vjRycqGiFb3UUWLb5LFnDFUqfXgyAubbnyCkgQcVNq3ZZiaqGqY21jPnvix",
  "key34": "kZArZWYcSjrvMCCd4Lajb2inca2v1Erqg7nDBYWARBxAtYehgXBS9RfmRUst5ZfFK2dpMJs52fDA4iRhxGhgfmZ",
  "key35": "5C3S3YERnoVMYjo5XSFNadLFjgvWCk5KzHPzsLjwUaZMrhie758akeGGM4wXhzWmZkFnWL9R9MzqebziNhRTuhqb",
  "key36": "4kmsxu6Mt29UrYoaa8WNdikYVVE4NhjB5zPrDCcbJaWLBD4SNErw4PysK7ZwZEqXwwJFahqwkmBXpijrBw2ncweY",
  "key37": "2eWxBDRNcme9tvje8EKXqMB5oH5Rwtp695ikYhv9p8R3nmYTcXoc6o5XtUP4GhnQfD7z8HSFaC3kPjfQ8xDCG5nr",
  "key38": "3Cpw2yNmYy5FtemFaU7cgGhPNPALjJeCDBk1ViKzwerEYodNjjzXfq99t3fbUHLF2HtAZ3C5QQSmcvhLbAbGjnoo",
  "key39": "vmc1H5pV4M6NiqCxzyaPRcvzUigaNkVVV12eHCUxYHwHGzRaeM5bdiwKzL7ELEkwDyXs8qJ1kNE8Rq1bwL5rbnW",
  "key40": "3FefaqYsm9Qv3PHxFgDGJWini2KKvwqoAyphtJeCNds6P2w7qBQZqyY4GUf36kiFkrWUxRXEvaTjCYhYNNwPVV2D",
  "key41": "4majnFH48DScT3tzbuMHKuWu3Ty4ubcD7BAv7jBJoUeDbyGgcRWsCFL8Ug9EHskSvmdMG8aWviuHxfPM2wrR5Mg2",
  "key42": "2hsViPWNKzvetmfiuzaWMHghVhtUGsRyFh2kSirZ8YmYsc9uhxxBi8HvAugMoDF9pN7jL5FFqX8KUvw94r4yvhTe",
  "key43": "5RWA7x8va8c2DVCTQmD77Ct5rqE45e87EBcbiVJ2JDUZcF4stYvZdGeUXcYL1Ba5Bn94zpxvHtDpETtdruAzkctg",
  "key44": "3grJxa9oALnpEPb8EqUvivDA6j5LanHq8wgXd41YsXpwfiJpcnzzR9xfpYdaqYLZh1kqkswetZDyZAxmG721Py5y",
  "key45": "5wSo517Sza5pBVmoTJq9sNPgzcEKxNKFwy2z9rxwRKkJwHwFN5CVEr2H3QmUxnxYiNHiYbUWs2LMctkLhdyG9qxc",
  "key46": "2keykux7EBbm36c9VAVJbGQMuwWqTAa5HpTq4bKEKuC8aho3BEfTGdmw7fjTUoptnKNFGXE3jnhjWYDCAjAgWtkM",
  "key47": "4aq8bshEjL5Yn2JpxPz1kcnA769XSXKbaPMrpvxuTZ2CP1AsrvLm2LadQR8Wg4o14ZdKnopc5ADQZwMVEsNNMjUB",
  "key48": "4dnBd2WcTwPG42vjzyzLY34KrJHj98WHVUGEnhtfsQ4q31rQ1GYaNWNi3gEgkbBfxV4n23aoXh5JMU8FjMPDCZSv"
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
