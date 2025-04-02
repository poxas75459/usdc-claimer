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
    "5g132VGsbmT3BKA6Lq5CmQBEuKcnLcyp7cAFtv58B9CZ8J39AriC45w8AwyoK49MK6NFLyvFaa9CR2GGhARpgpoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ae7LVvHpvFUjTkH3CTq7sD12yWKxUrGyZGH6SR7CozPSyhtVVmR5WNDnQqdyCUJzgHLacHBwqsfoq1kWuRHryNx",
  "key1": "4hA4WhgnUzWd7iszLpcXC5yNwWQwUftpm2XeAKfCTY4HR2TP9Afb7ZB5BPySSJFaRZ3gPnnLp6L5P8ypEERxZ9wE",
  "key2": "5KnxYys8jtizNLNWjNo4spDkhA6pR2M98yKVdLtwFYh4BWWz53k84iFuvbuMpWGGEmpc3YPpTiSjo8GQVGaQFr6L",
  "key3": "VZsEqAwa1u8RQVbnkHbxCtEemngoVppgHZjwwNBd7Dxgcd6scD7r9Zcts2xXxDJNgKZ4RD6p5QhCpQcUKbNgTHM",
  "key4": "5X7RGBbYrrt3DoQ4HTujwbB9NhhsrrGsB5xXrKCAEMUbqspzzLPXQzXCgpPRtgaZTN6moJBBUs6Pe3KGfRcBgB4P",
  "key5": "4ef12FF5dCQuSW2fqwYadiaTfdDYcAiMnPY8kSRq4VXdaaQ8JqXmbR3k7snFxsp1Xgu7vzXfCM863YbJ8PGsVRqu",
  "key6": "2d68ndD1j5LvYzzU8xCsmRWtcg6C81mNDSBrNRKb9rs2XrJ965Q8zhjSmfxUhZiKMLXHojnWyBqqQz7ZkFj25qvN",
  "key7": "2Brr9HU7hg6Up5E5LeH4Nj9w8Kc8xYcCTphGhoxbAr9djiLMmx8xHyCxMNpzhyWaNbnk7WwTg7tkYNyPe7N1pL8J",
  "key8": "5FYWUFS5su5KF8wrAZcGyDmsBVqnDCaKzbfnJCyCSapNxEiQ4tch721DcTJwqPoSpz1zvozTVCDgmyD4BwzFbgVb",
  "key9": "47Zh2DN3Ab85dNA5ATG81KPeWoc38nVE4ettSqWjDPvHLHdpobxjr9GDWpeVfSpbxtbChBw2JxgLtJE1F1RCRaPt",
  "key10": "4Fdh6XmztETYN5Qa3mrhPCkXtpfdneR24tg3ZVuV9VSnNSwZEdbUNeJQUXsae7UfU7yVaJU6AR55eAQvvJWivWcM",
  "key11": "4emPZCoy6ZHJ9tr2wPnNqWpdfS38baVt2kGUhJtkQvyV1Hisk8skDsdVpTC4fUPMPaYpfShWBpp2H2HtQxZ2qYp4",
  "key12": "wSZJSik4bmNnH2AWZoqP3DBpGbHhP9QJaSn5ndW6Fv5R7mzarjpKT1rXGmVVgV16MTA3ygDcFbxRpfPPiviAZDp",
  "key13": "241XWFmvxiHamBUXsdGwGEC8p6Fvf2bhbrq61xyyKb53QtscDmjeqLA7uL5C8TkwrQQw4iSv7C58NxjVcaLndhUB",
  "key14": "nAzfBdqPqG9QkVTBsfZ1AzDu2gNZyThf57ZagACuXKpKatxii94JPTo8GdtCbyNncjfv51afHrXTywUoaAfwRDN",
  "key15": "39NJWgK8m886m1yvVcpRthnwe7J1ZXq9ykM8QmPyqH75VdscxV4ZMs16dNsBeZpv1igFfsNPqH81ezthYW6iUEHz",
  "key16": "3YdqJbocNqiqvVpNY96zTGReD58jkZnbMF45DN5nrXVj3TS1yPGcB1x57BauVrbiJxfWiHFw7JMwS4PiRrd59wD1",
  "key17": "Qiregsx7Wrz4CpUZC4dWXn2i63CHcCp8X8qstdT9AQ8fbvPL33ixtkVU5AFrt3n1D1dEAcj9dHGxWxDkVTNCwfD",
  "key18": "5WHSFmYNg1XX99n9k8cM6QTPffABXa2p9mAp4QBoombLe7BNCpcaaUqBKGmEJWTaSuxpZVTKGH1chVYqP9xMUt1N",
  "key19": "jMAamg9yY5Zip7BmYb7UvyaykuiGt2x5m8i66CcnoFyURK985e4exV1ZKMkvCURyekZr7XX36buH8oLBuwhkwN5",
  "key20": "97YrG1FbgW6aMCbhNGyk5S9HWhpoxqh5MMaxcyf8syHuwSTGhtVEZw5qSEkm4uJ2wdQYxjeykEFgZvCa4t2LEKD",
  "key21": "9JwTiCKmrZNjXuo5EgZvsWSdgY7J8JrtCCzVWDHjskUz87KPxSYuDH2N3rGn3osymJ6cDdKe5unyjgqweUqyEoF",
  "key22": "eJyjj5PwuBAQuNY3sh4Mm8sCJyR4ruQJ78bbjjXiWCh1c4NrnmbvMAfWhRnWkzuS9Xnmk3K3Bp5UCEqUf2CYjx3",
  "key23": "3xmjYpr3NLSb7bhsN6GFNhFzTrW46AxRogyKrkiEf8JjdH33qzEyL1oazx8rPN8JEqLSMicRH3hgY7N1j37A2anz",
  "key24": "kyUTuALJ4NY8Zn47ktT9oxnbqsB4YqdQhbZSXhNMew6wBetQFdFaeBxFE72Y1Aa9oofeRkL1DKgMgxfjdJYcj12",
  "key25": "63XMR6yPCQEemvWrvbo3HAAuz6PHcu6kAJRo71XGFrVPLYjJg39Lupo3mnJCFKLNXLCHPpZeerhzhLEEdcEQ1BUj",
  "key26": "TbrMSD8hcxyf1LSMVSJ6kkXUKvPbBvtg5yNdhb5CV5f8sursKZtG7RyTXSJPyn3qSpUaeFqhSUrNTG49ZJ4zSun",
  "key27": "4UFYQAuXAJgntmtphYb2LiyMCdskmtHtC9ffdZibx7cq1R7mEpr5PGjb3632bhVjCqvhEB6krBSG9vpByN8PgZjk",
  "key28": "2pXk64f82ymLPSVJPauAagdjk8F4KKUDvFY2MHxgCySeUMsLHgSpVbxZaWhr246LE6TYWgMxXeztYRiPAZwZrQDr",
  "key29": "261tfJrkVUXV7apBqGHeg6ptXRvbPKeXDEra6Ukh57bnmPHv2nMZviwAZUVy4Fj1tC6z5gv7VXxo9t8LAHJi5fuv",
  "key30": "iVGwr4nykEunkz62a4XvKP616ZzoPCAvt5iCVJQhX2casyfNXAtARFnjsEsS2bRex2Z5vkR5dLa1DrMAPvRn8ST",
  "key31": "5szyeWp6Mh1zE7g5YXoXTmjHvum8eejf3Tx2vudkZ48LcEQjc9KCasWhu72mrgBpHucifhzt6KFy2nmFE2UnkqUL",
  "key32": "VesNBvpMPA7yk1a2Pbzwbwz4CSv1iJeFczvKwVqFdTaGmRVNMdyRvLNMFaE2ttE1ZmmQ67vaDix85T9YXQE5tN3",
  "key33": "5pY7rY5bNJ8om9DawZbDsBzuAAFzDbNDqq8mcQA7MNQ1t8CRnmxozm4hkL9S31JGNNW6Z164vBPdXSU4tNs1YUgx",
  "key34": "453PHofQDZAKxxTkw7e6fMz4L4TbzzLUdTE2bK6KgGNP5d8vLnRcBB5f3Xp37oZWWqrvFYEtSoCTxQvFte6LnnT7",
  "key35": "5NicbsaETkuLJjwXJMzKFT6yW9KFeGvZBUstJ8DhgHmU1Y4FwHxXptTihVFW7TvwPAiyAas86QN945yHCLV98Uv8",
  "key36": "5jvMtXNus4NVQwgZ31gpyaZn24iycXy7eGnTUTLBWqsR1pn1gcZHpmWTtnqsnh7xDpJBMcvyRmJmJTvw1xkpL9kR",
  "key37": "4AacR7VHyoicUrdReFCF8Ms1Qz8NARLPXh9wqagWW8kMuXwV9HqQsnTuq8q2Pt8tvGdjPqZ1wik4fwqiDeFUfpNV",
  "key38": "3qcpeAqLRP4jy5XMCzi34uWahViUWwKAmd9rzRNN1ZFmnBYkDgAs9dakYeTkoHDm5m8eSRKyKsV8R3wCySCLpYeR",
  "key39": "2anQjbY9bzYTK1MTPuyAM8vLoPnWaAfqucTkHiayNzAX7U2AwATbBBPBrLurCSG4hUfwr56Ua8xPyCB3uD7uoU3N",
  "key40": "36KEFJhfKuCDEtbyx3cCxEn5QJi743JJDJQ7EPqzhjWpDoo2PKYnAgTdbsFqN7yfdDcH8bcnjnBJwNfpvza119RX",
  "key41": "4da1sWq1q47e5dncBR1myaaSjVveJxk44Q45y8tqnLpiCmojWHSScrh5QdMvLKZFFNguxMoFizawimpGXf1GAu48",
  "key42": "492sRv6M7vheFTtkxstZqCxVTa9EwMvE2VyJt1QPaBxSShWYRqhARiwxHABK9CkzHnhPo7YiQJ6XUPrHdiYG3F4z",
  "key43": "5wxW4KoW6LCN4BjzuqH5obg5MUrXggcWuuuaekyXXRCtKQh7Ts2j6f4BiYL1f8X6m5Ga9WNtb39cxwgfFUvinePL",
  "key44": "5FYU81Jc7c32t8hhQ45T5CwdSEFTbCMfc1Bfabiv6mpGGNcyfmTFK4xPhw89CQvBxy21FvHDpZAiAPvdLsNsbjTb",
  "key45": "2xrRXDNWHTtDbVhSaZj3JigoCGcwwBo3kDVT3fqjJSfnE49h1rDypC9fZ3NXWJG995HNJ7c73HVepyBRT1Vhyfp",
  "key46": "3rrSQZjqiaqMp5ZKrhvbP4acXjdPLcLz4crmh2Bp5FCLLGLq9uj3dfCMxUT6jRvUiTWAxWwmc7EeDGASqF8Pzq8N",
  "key47": "3RdEiKj7D8Ev5or9VVZuSmRWg9xi5k8M27z6hfgWQYPvkmgineKCr4AeVgmYapF25LeAaFuTaAMpqNfZRotL66yd"
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
