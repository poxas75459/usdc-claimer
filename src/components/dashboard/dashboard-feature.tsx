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
    "3ZdXW3cPxuf1vzTGSNXkKz6ozdMuNViicDhMgE3CBbwwDmjjBkoa8ixMCzH3ZDtRRxqwkbYR5AVKRQVPjA3VyW5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mv4ivbW1GFiTeSqsTyPvBhMehuCFDJdBKPiJ7ncEcCJ7xzM1YNgrTKiiHurwD1pxFkE6deeK57vPkPNpy3qKRYC",
  "key1": "37LZJEhtDqdriupxt9LJ6TrBTyuiFiAGKGkaFdfXpeT1RVZ8HEGAatpLpf9nz1bmgxQ95LMW5Uo9GaxvTZQndkWL",
  "key2": "5nWkDZ1eMr5MNR8UACS33vshC9pekAFm9hN7DBTQQciecLrYNofse3coriPTqAdDQzA7JknX1udVTro3XpAJkPRe",
  "key3": "yseWRfyDjYaAQRLnUFeuuF2ChDhwewiZnJE8XjL9YJzZZsSPJC3txERC6BErmLFVj1jQPRFrRZnroBZV1qFzgyW",
  "key4": "3iLz2meiLiE5UDpjAxnJhG4dzTy1pnMPoqn82DvfAGJzErPPeFYSVptz4YfeUAWs8x2ytio3JRwCiXz9y4SPJchB",
  "key5": "5sL5LYPZCC3RXpvhQieU5N9RQyexgkDHdMjthH6fy6Gg62gKLQUmcLsaHD8SyRicDeUDsirXWcLDwpLabwEWsezv",
  "key6": "4V7MehY7sVxYVvcEDH64knDUBBqcbu32e5RXV69YBDMrwE5NAzgTEdbBjtP2HUjgb6GqAUoN9P1eCpfMonN46pCu",
  "key7": "31Ligraj2tkbhz97SND8afog6ChJR1Wi16Ltxr7NyRoN88Lv9aa8edPV8VS3pUu166hVMsLCCR7hbsUanx87yMhm",
  "key8": "42wNzxnRvgUsaUNeS7z78jwRz9uMscgMhF3wqP4yK5BtVEjtxKzAB8udZWA3VZFVcP9pyxkoLcyHFZvF2gmffpWv",
  "key9": "2d2c7v1cBatD1C8GRxe2EkEf55fV2wjGHvgYG7tSyrL9L8nrooJ6yrruyhroviZKU2VGFSm44XsXH3QuM8okqtdw",
  "key10": "553knqcQjRq9LFz4S7DcKNUmeUpSKc1whestP1R6RNhtGgLGU2VyVjSd8uGybrp5B5UAnkbQX4WKMnwz1DuCLPcn",
  "key11": "2z6GUsUmd2hWE5C1LD9NDFbhPv6rx9nRiaemgyyLruNdtCPFpx6wXSMGad5DKKD4eR6UhVbC14ApYg8EQVcS1sqt",
  "key12": "5dCA3Nqvide94sEiW4kQy9Xm5mKX9yKwJDYrM1KFuQ2Sf93iNHsSppkoatTga9dzXm9cjqceeY2RHmHthU2cEZxZ",
  "key13": "4PgruYJMsy8Do3MDPG8bVmjJzqoZia7bSM5JUhGVLXA7G5RcDDUvEk787mfsFhy892iTDLdj6zMurriVQ3ntR28W",
  "key14": "4YhH3LTujsGAdhggugLCREfdgtARpeT39jRETfSU3CVGDeTdgq1hGsMWbJjPAv1DSoAkcr4EnfAf1xkEcvoNpPiQ",
  "key15": "3o5opRi2M5J5Zm6kGdT5DTwZKighZvMS8Jwu8WPx3QSpxKnK4UvmhAqd13qX2gwcMnxPEWrAPm9oCsVDPp3u9Kr5",
  "key16": "5CvPVwa1Ecsp4iZx3hBxGzuEqR14QnoXbKDLzNWREdZNTk6y6JAbExmjWmxhpaPadRkPSQZwtwBSLCcJxmoZCckh",
  "key17": "2vzABqWB25axkGhE2yQH1upPPsxD7XT3yUkFw741sWQGRivUW8kg9tSBLhaXrkC1B2N19YnavJjemXzQzpBmzbsZ",
  "key18": "128z17XsdHoUXhrXReo2oT6FW9JqihtMte2yS19bAaHM5tnrQf4fFMN6YDLZgdcoZwQ8CCEa6zY6ArninesTemWU",
  "key19": "jjAeCbPJAbHbJyaJK3817xUm35KxkBHgr24MhbdynsANsJ7Q1kqLxowgYinqfpYXtLFVeA2hGLd8bAykwdiJwKx",
  "key20": "3G1uwnvMZh51HJ7Hpjqc4TZ5ik1uXfFydpJ7QRgo1ekT9n3e347tXVkNXFquFCkViAo197rkW1C8Dt3dWZQHQMEs",
  "key21": "p5QubXeniGiixKYXjinHs4MzfcouAYn24T827u8UbE2zADbkScZXrnZYdekahmn9ZVvNubnWpkezPWJmC6STauN",
  "key22": "5S7eEqNAiYgosE2gWHQL8cLBo1rq3P4ioHzhTYVfDVpSM74W5R27vtf9FKVsQ29GEEb5wBTDdVrjarjzb2WGtnJg",
  "key23": "5UrKDzLPXEY5Qq8JMF62o58osNroz1FdQHNH7Np66dJdsMmvsamAHK6KhHT8vGYzwyuGQKLMybZ4S6bGoihP8U7d",
  "key24": "2xhrEoMuqYPbfL4vmnWFoNDAv862mWwBj7DGzoEc7ELcMJituKJiUKhmRMoPBznqh4pACzv1eXvxvk2LcDq1wnWU",
  "key25": "4U8tSMyRns22S7PcwxigpFfYByzFeCyiKqJYHkyzLEjXxyiKRCZPET19jtQMT6iQwHWZtTAbCfRim7X2XLM23Exo",
  "key26": "28q1hLt1q9YrTQ52Ze4BkRV4gWQtWDHH9wrHpmdo7wzTiBRLQWZTbdHAuYx5VGJCgbhAAms1t3CeWGz2nJAKsuu9",
  "key27": "3otFkKUK3FsHhEQqx1ZQdNaxL43te5rKftfxVs5kvzQh3E4a5tkY75hfCRRXsWPLSrotuoqHnPgv6ixWASfZJ3oJ",
  "key28": "3gDacFPyUrVxrSZdhejG8bqpbYE6qh2AxKsm57o1weseZxgFNb1Sdqm2AzvLaxRZ7Dae2RSb4wVbmvKtgHZpHpau",
  "key29": "4N3NsPURWdfbKr3xWHbF9tMDxukQkjTVzXRfX7wDAeB8hxQg8DdsYxrbQHZpNec6QnDEgwwSMrycfW6EnECRQGT1",
  "key30": "4frNmTJA1URhY1yGUauer5DWCCZ4h4pDfACLNy2jwVApKqek8a67VFVibkV3a51szW9fSebFxyZ7BfgK9H8igVco",
  "key31": "BT2NCt5C1w9wU6vzjjwK4hochGq4hhWpMUkoTmshCYFLuviTn2J7WYfg26uT9WWhnB6N22vFgGxv2LT6buxJB3q",
  "key32": "bm9FQ25n8yKGexqxJNDDmnhUit9iTdVf3kXveAzCUpeVcot8rTRxCbJs9txuLbrVPnm8g8Mn4GBNnPhTgWUc1fp",
  "key33": "3UefDqtDjmAMuFkv8KpFurvXvE5GoNectBzwspZpokbe18ZitMAfKA46fXQszQxeg1emqvReDRWiFqw11MhPcVhs",
  "key34": "4FCJqYSTwQH38CjVi4kediEW1BV4wCEB3N5Tw424i5FsvhGmJFNyYPQBWJTpoWjGC3yriiuPYNwRHMvpKwCqW18v",
  "key35": "4WEFjWhZzzBJQchfeTa6wD1vExxptvRUYmvHRgAsA1GoQhR4y7NqsqmUsyiRGUvxpsH93b2ZCVvpUEUt7mLVEgCw",
  "key36": "5Es76ys5ZeWutCGHBDj4qJjdm5t3sr37c4BZP8d9YXPbWR4Kb1AtStQFnzewnqakDLGBXBsSXymdY9Vjmw13AuyG",
  "key37": "cXHaKS5dmSBuXPcsaKfhbQGB67sSw56NFyXzzc93kA3d73BxY2Ac8gmiGaheriAeB6PwrJ7X7urkH5iuK4vVmqR",
  "key38": "esQnQMTXaaqzJdcS8dMqndRd4MXBPG3PBrWuskdW6R4LpjzKKCfVk2grm9PG55xqdAL6enTbJb2G1rX1cu52QUY",
  "key39": "35y4EFw8MUiteQp78EKfRxvmFfoyDxFdHhCmsix7chBed3YgyQoKmgpCM6WCYQfjCLuvRunW15qEWS25v7Xh56ZW",
  "key40": "3Ku4Lh9NGndrrP4UxbxSfmwUijM95cy1cAqsLJqr9WWs64CPr93N2pCYXp7jZXkxhuVY5L9GiDzWJzEs67RKinE7",
  "key41": "2t55vjuiMka8Eg9bHXsxXnvD2TWxpkhnmDUb149L6jc56iKecRFWNvhHrKQtKUcGzyebwaAuwhrW1yHWWnDiFRN4",
  "key42": "5f2MaxFAu5eDqiTC9udXtbGKKqL7nwm8pEg9t18E4pi9AQj6VJgkbPKjm2V9fjrMG3gwjS9pxaxc9ic6JFuiRfcP",
  "key43": "3gN7YUWQHaB26DoXfTt5MMWq3PR95ec5u3Sp3xT5xJzmNaXHR5nRvjmDc3A2NQozysiFyrzDgfPLZdQdrGpLhRLH",
  "key44": "2SHeHWpT1CWFuTLQseqcJr6KpQaV1VRoJETH5LAj6MfUQW8eUVuNp8nwJ5oq3YfaJ98WcdQeUvBiAeqdkEwXhacf",
  "key45": "5EbCMKg3EDycqZxYbPML87S6njQAyweMLu9obZ8fQHEsp3CpSze9jDvtqWrFn1HdoPiJKVKG96LoJEdEKmDWzzWD",
  "key46": "5DwRJTQoomJTwAYVu9Hfh7xMdD9zYB6NLvDt7vi3JxGxNkp8zmimjwKSx5yxGR3otR54in92Jzy2WtQti4NC43LR",
  "key47": "4CVM8Rn65VbT46JkhTeD16ieyU2CNdtJNBsbwHjRntekQinDCC62rU1yjfEHrvM3SsefVXCkBNJfLk6EiV9iPDFv"
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
