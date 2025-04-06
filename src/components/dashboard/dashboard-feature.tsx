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
    "5rQdejJDFor8cHQUgM1QhRPGNmQDaVXHvJgEyX4W4KronxUeTgoFMYSESr64q7nv4JSgwbbrk4x1rcoztyMeiebC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVgYbdNZ1wj9jCwGBe626ursrMaohkL81TBS9dPojeNvtrWk5JEsDGZiAD54BBEhZ8Z8PoRguk9ALshjhFrYqVT",
  "key1": "eWgtA7NMzTwS3Hn17t3a9j1HhtPEKeaywVfwsMz17FmLxHqxh1ZSFEBw7f5wwxe3UB8Pa9UuB3cdLDJe1m4mw1i",
  "key2": "2ngSr9gHZxF2xPmbvKLLY3HUPFi2QoVafLvTiBCNLDBG3Munz53vutukyvAU75ftbjJGDNL46EBw7ETSkZqQgq9o",
  "key3": "3kiv4sJowjVxGmgf858AomYDqA8M6WCKqT4gGeHbXMUq9c3GS6H5fT66PQB9sFQGGDS6ZDd2txvknmZVNKc8g6VE",
  "key4": "2LaSC4vr7F6f2EURA5nnQNrLRNNJCVfqLgm6TCZxWWxu7ZisYx4vtnWdRrJCnfZkrUmx556Tzp7zSZ4n9KXJ6PpT",
  "key5": "52nsmmYtDrS2apg9PtMwvwsoFuywFBbyPvNhtqS1aZ9fFnBAETKApABh1BP9WD65fodVSjzDNFTy2QVoZtPDY48Q",
  "key6": "MLpGP53yDQyQX8pZo8o2rNs6c7QxYdg2Ja5cWbNPu586gy8MA5kuJu1ev9P6Rq1UJBwFnQSnS7P1Z7MrRWz45zM",
  "key7": "23R9iaiu3M8NNfNWg9RdVCj5vg2tDpNDo9fjbwJkJX8S5vKQA7NrUrTtR9DnPWYi1AxWEAv69xRLSn5fyZevcDge",
  "key8": "5fxemSJsC4T7vE575cQHS7NLKmhm1ETjceBZBkShYe8hT5ZmJ3aGkp3jJp4uEkkDYioAowypD1Aggs3VvTsfY3o5",
  "key9": "4capZ1epbnwRdrWbcUhyUGakTDDcWSafimovMpMCaPCnYQgoKq7L2hj22egKaKwnJfgrbw7A1XaSLob4x1y28aLF",
  "key10": "5zBzQpMNbEtgQR5BvWS1iuSo6ikruyMx3MVBeyoPQrzwrMMFtAwj8kjr1k6AfbHnthDveAPZnQypDrqHfhs167FQ",
  "key11": "5vGETNHXSKQx1Mkczt9zs2n4wPmrTcvFyAPntPefajQJGuunyXfFS8x5SQVSVHf9u6RCN4LUMYxw2ZpqDTLK4J3S",
  "key12": "44ujwZxd4RoXDRF9FP6KB8bhMuUhojxvCP8Rj8Xe1xJYarTef8HKsP3h7p2XpDwraX8JYtGP8CutuCE5uz8Wfwg7",
  "key13": "2c5af6SMhZrYPRWeUbtX2V5GdKEGZNY3Wg6nFq5aRUc5B9xVeMikVAALh8MJsMghUVuZZRyQRvW5rSwt9AhpN8XR",
  "key14": "3hqWwiEFQ28LqvBV425eHQYJBBPc2UAJ5YLvmsMbMZZMpg81N8BtFRbTN7ctDm6XM3n6Z6sYZ5oQ3g5JVun135FZ",
  "key15": "5LJexZkjGjKvMWzWrRuTFP4HwSdtNGsB6NzCAjiz9jpB7GJvEqTRr5kxSEnKWqqyLMZsbPkELJm2K3TAAKHtS6iz",
  "key16": "4ZHNCycm2mxWnF3t4ETC5pR51LwFQAxh5FuC7264YwHhL8PtLdB5E85fSX3gAU9ZsoBzwaE8tokqzpmzCEpx1WsL",
  "key17": "TfhFR4qRWYL3wtxK9w82FvW9uQ4zfN9pPmMajhLAGgdDbxQG3fmwvKnP9hsjizVkBNiNSWc6zRfYqSS23rzdNPc",
  "key18": "5VAW9hpP8XnwsCo2aWfBtJkkVXm4vZTSz7Jj1Ptni5BX8BN1zvNcurDMLvhK5nWriWDs9GhLFd4MbhsWmQrd5tuj",
  "key19": "26HQtohGfAxtuuSgGfVJti8FmCj5gh3bR6ZB41JeLZMtVEw7toUZS3JH9SeJrZZMPEq6qV3G72ywpQFLseRp7MoV",
  "key20": "55GU2Ef3nEvqSvSpwN2jKsKHvLu1KXwVbfuTBcDYKA7833VxwQbHwiFAPYMAb6yTSTcpfzkE7hx6cPCUhYy5LPzK",
  "key21": "yLL2UqrmjLC5ESDprRTs5TwJRhu3FJ3Fe27gEDdma1Vz5oJ4Ns9ewy1vHpjPcsek2p6fuXAo3whBvB5umvx4BG2",
  "key22": "3UrsHLytKBbBYLtFvNN3F7zCYcM9CCQ3vSd46M1Pdxd1E1C9gxZUw7D9koB37ENQAkMZ3aHA9U4jMPhkbugEg4F8",
  "key23": "2kKnEjQ3gsdXXs8DmSfoyiEQFbmCygBF6EzyK4S2ovCcuPJ9zdpMcH3v2VsYoSFCD1GTCK213TpwWoGcydjyb8pU",
  "key24": "xrSzPcB15q1Cik2zuyaXoWvLHwiatapF6zwENWNt9RtxJtzx7Rt8KAYWKMJijkBsXSaiPjuXWJVWhtLLQ1WYiTY",
  "key25": "4hS6F4Rt9tEAdDFs4sT31aFyCCA8QzdcsBXj9XWpE3Kh2Gnfxdsu9Qm3XMCmTr69iHTnjNNLwCy1Z8BurzYS5RZt",
  "key26": "3CkVEg2AcjJdT1poq9ch9KFxp1JhtNhcqtNMjDFioJUHZAnNa9dh5Fg3M4yHX6g8hgmzr5h3bXrwqtwAD3Sqbdut",
  "key27": "5s19Q4VTytkg36wFiVfn9mEgN2CaV37atZu4iPjeQGjVfVYM6LkEbX7kWsVRMjFZveraAPWJkUeDaGL6V8CxbJgM",
  "key28": "4qAcfD8jEcNzdaPtPy5kgdMYSYtYPJd51G6ERFMNbm9vwjt4icrgiVpqXzk2bMUaWfJiQSb5Y8umPAPz1SAeA7zw",
  "key29": "4rBco2NHLLJxytDTBNz4DabnGS4pDUXFqYFW9iEak3GfzTJ9SFfVTDfVS1QebpiqcNYsrHHZV7VAjrtR9hK8PaMg",
  "key30": "23igPnazUHqc8QgeuQxfconSYT8Q4wbYEcq1fmviSFfctiEbNVUDZkGgrrq8KwRVNHcsqHTqhtJLi3vpLvmfFPVR",
  "key31": "3YBpFFCnymHdsCTE4F9kUfSNmgEbHEuxHbKG625ZBNi8i5iQr3xj7FFw3bm5XmXZbN8UFxVkmnHMSf5SccFKWAE7",
  "key32": "3vZyE2s9uzGnJHsd3eJGLQuPAe9rt96z9AspMNLyMCieKYpZMSWAe3N8S3e9PgCiK79YtvJr6rSgNbsdFwxifPqC",
  "key33": "Fs8uBTsEFfnbHy5z7qg3KLJy7hms41BBkgBD4mDgFqn2zFQGXhpMGKqK4R5B2GaSSUwBBiCRqmfuUd5DxT3RXhz",
  "key34": "3p9irjfDnTFsABZdd73rXW7DR9tLZjzLGsaUXASnKtb1F519y65VUH1nhtrzkQe4kduKwoxkHhVs5fxDFFmWE7Tu",
  "key35": "5XoHprvhFN4NUckuj8DocFzpaLCcPnDQBaGbEymJEsyKLHXd2YBn1oM7MZsYLqmPoSH8xZ4GEy7xpD8uqvSiNcYm",
  "key36": "Ar6Vrohkcyoqrp7kNvQtbZ9MvKqiDr1jsz8h8bb6YvnWHrEdFLCmEjC3qaz1jK6F6vRPzGERP28aQSHY9eNFxWp",
  "key37": "333bbagFUimUBSb4sSzYRuJKopAk6HTvrPhDMB2d3MxJpVGbxM1TKdc9A3ctPt4Vdd5owjvtiBBigAibnp3G6qV2",
  "key38": "2Tyk3sHxgETWjArdKKjdk7q87TQnz89sYe18QfznjdNdouuQPMva7PSQKn4zQA3BowGVGr6BNEZLuQqktN7ev2vw",
  "key39": "5D9tcL7gcmP6zMYRR38v5zD1ufGEDhwiqHzpzWzGWUG1H8fqwJDWcA2xqCjeokfDJv7NFNXzG1mV8nJdkB4ScQ9F",
  "key40": "WT6FA7eTD8eFs4A3YofTpXUYw2xh2vzUaoAx3xzpVSUCePqja8Y4XurMDRFrirHf8rmuLBqrkZtePTCkhi1kfeW",
  "key41": "2jd87DqEURSQ9MSor4t48knnoiE9Fu23htP1TunywjzzxY74dCb11DN7a1VaboDZZqhqq1orojL2TSBUezuBKtGQ",
  "key42": "62a3NYT6esLhgZCWXC5Zt7zqvvYHXorRSkAgKqtD4G2sat2A38NGc63UWzj3KwBax4QJKcHZLR35nxGy7aQjs8gS",
  "key43": "4QSDuuKXTV6ydnYuQ32zfwoyKLguZjAkt9Je8MkZw25AiPRo3Dzw69cJASznAHRP19faHEjhZjDDfPYtxofDt7Qn",
  "key44": "5u1MowaVHengHkDv1Z8ouW22PKgWiKPvVeAAcnscBz4wRzxGZPzEXRND6atfY2cUp159kWBoeUb6KEsXpB9FGCo8",
  "key45": "4hacAEvjC2heqzFcVuJqgW17oAXbJYnjanSqdSzKXNJuxAGwcVQp77mz1nvKAkQLgM1198YGHWZqb8EpzWVdbyv7",
  "key46": "2Aiuc9HNLhAKoayHkj9VAGGx3rB11fEfRHyt51uQYeKpQhdf7g8BRMHK5TELr5Ws6tdEfL4DtYvH1gz5zqK5A7cK",
  "key47": "4k6g7psNKxfybybJayky4HATqojv9T9rCFvPmEgQRB6s33teyQ3YzY9sn8rwpsPacuTYTkdtzhAB2HmZcs7SqQ2W"
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
