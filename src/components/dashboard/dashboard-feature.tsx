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
    "5YGBVP33XGf9HD3RWU3NwLTLHMAjkPudcnyKTpHW1dWPs2qVoQ72pwWNBi7yspAXRABH2nPW36cWWrHP8SVxaZCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VFaG9ac87Wpitj7Bqx3UUQGJ5KXS1frwRURMjYNk5dR1EG5Yh78g5CNtZtqxiTaGLdbJjryfqrCXbhKDJnSzbB2",
  "key1": "61vwehWZH41o8NuabQg49XGXHX9cRBG7Uve69njzfzZGybxCMtG4EiRnUbuQwn6yf3utaRtxF9BavxB7cWHxxcL4",
  "key2": "64SuAKrwpqd4PfRun5yMsCc8UYvhugFW8ngdXGFHYYY7hhUd9DM99kPg1ySkVDrQH1f1ymmFfCu5ANXK1rfiRCWq",
  "key3": "2aEzoEevM42Ub3h1mzVFsFVDYKfB9wHzCrzPrFJBZDZUpPqWmsepgJ41CFiaEK9qfHNSmDDJu8amphHgvn5wXGXy",
  "key4": "61nVCTD45iyPhqtWTQQ3Sg7fLXEeerfEnag5rVYeop5DqNQ5ozHhvQ6giHGTPfrFXP1NknQHzCjm5vKqN7MTKe14",
  "key5": "GxKa2XQMu4AZXY8WV5FNJk4x6yTDhBepNhdLfqtZPLwYVbGqwxdbbBakEQMBTuzharmxCcAZ1ZabqTPeQXeJbAo",
  "key6": "5jULEHwEQHLQvvTC6p6nAEXZnKP8Pdb5jCoj4fTPG8ckpQS5jQ6MPh2nWL8khGU8YjLynxWRLtUiBzmBhq6Mrjzw",
  "key7": "2Pv4bgF8K5FgdwzSZ6ar6sXCy1BonydnbpzPjqWNTgk6aDrv7FtPmrB2r5RqRX4abmB6hY5xxarfPk4AtrMjU5zs",
  "key8": "5Ye5ojgx6V3JraTF23X8742kvzBQz3Rve9KPVaRhGuxq7VSMeGnTWjwXgEQZJdyfktgthN4HBruVbX5GiNJ2TPZT",
  "key9": "2Pd6coHoTRYxK4PiHZ1LjHoovaZgodktNmiPsQb5K7SAizT476fpL59KSXku1x6RqyTWYmfU2CLan4YLMZSAhEC8",
  "key10": "EhRtTZSfCTakJsqCwQz3nySFKCmYEyPExBzoTwNp39abv96yf8gxgFu4ZrmoLUsZo5GwXBU88kdizfY5Tty67TR",
  "key11": "5xGGQzW84fyvpghDk5kP58pkaCeBPtrqrU4BfuPLN3buQTbVtfboxC7bFCHuoaJkzQem29Hm5MdD5znvvmb7b6jT",
  "key12": "3bJP1SCfm3h2Gdn4rotgXgdL1pyhQffeBc9v1aT15mD4X4zEEZtYRmrt67MsJaJasYixdV3pqQN7tNnmqpSkQaBs",
  "key13": "2dS2TRYR1qqvuYR8UioW3Ti8F9BDJsfmCFmNxBDLGnpyLhAtPgfTFVUogBhC7ntu55MEcKgmvdrXpjjf8riz32Pz",
  "key14": "2escTF13kVvFhpJ2KzYvHkqgwSSg4WEByj6wvMrLPxkZ4Jxsuj3KPD3YASoCm8WTRxeRvMDn9x2dBWT47sDxFDDR",
  "key15": "2bCk5zgrFjsggJCYoXUEfa1utViaV4RozgFfsnJSowPEkFsYfpegMqyjdJKtaH11bWTFYwWk83p1T8vhoxQ21byf",
  "key16": "2bWS7pHW3WcPKVMWfJKAULcTPpFeVNqX6chYGQ13QXVShnF5hoCzPn9Do8xa7eN81k6ytXh12XHDPFSjzMJ6o1xH",
  "key17": "4c6w1fEUBm9FW8XBXJSXD2rdnAeCRmGPgeCxmVrL8esrBjrtYMMT3DF7tXNzRyEcJaFU5Jodq5y4TJSwEHnZm6kV",
  "key18": "5HGTpWWE9LusxffYJ3eRvQv6y64vQ7su1Ti5MpQMurKaHueBn43psb7AXY73RWVbwXb9AJDfCX9NjNQGE4HjJCRW",
  "key19": "4MAPGCZXfmHRDqSCT61aRScYstYmhQQYeygP9SctYcxiU1XcbvPpiwtPP9e6dP1v17UBw2VuPoWx5wckFChXY2eN",
  "key20": "4QsRTuGrE5mwtX7m8WsEySo2L9urqaTghS5JTehdmSLQJ2Kiaa6n4y9dFFASsoPSpqwRuD9J141xhNZbyHqiqWtY",
  "key21": "LscXQKCzvzg6kaDNjgWoaawYnUr7B8rruGpMsyLQdFkvLNyz92y5DJbpHUVMMvQyvL6BGQ1h3Lbavt9w9gBpVhn",
  "key22": "4UPVWstZeofbVzA7sWBs6BnA53yRoa2haD9XbFcBzJRYqReXcNDk77wfT69F36SuXU31JfujGhLwWkkx52RGTJpy",
  "key23": "3YRbw2ijJeQrBuiCcXGErNRVxhuPUEceHrUHzPqTZEtf7ajfHNXLQC5hYZMURUKhpQytbCjJKbCvGqNMFhirTWwq",
  "key24": "KPgZi2dstiCSsQt3ALyTT6YNsU9ciZHYLW2Qh2tzpDwmV1LaUkJqiFeMRrEcNgN92rkdzG5pbgQ1E9WPyuebu9a",
  "key25": "2x4HpXXFjdGMKWvGpN3Doug5Jwx9qN4rB1WFyrjVMJNypLzy6pEwKoELdvKbCKyATd94tQc5KXbVgMdMLtFJeMk6",
  "key26": "4XSoLhzy2p6sHBJBu175LXbZFEYMibpyhW8GqCfjnXKEQHWdaveCV4QZ6RFhEtKNLoL52RuSdT5mwT9Wm6vovP45",
  "key27": "qzRkKTAA7Yn51szfyfwqYvcartmBTXmnFGNFiH52YGjoM45K3CXfZMfA4grioKKYExaoZyKNcZrUzPHkuJNW1np",
  "key28": "3QzGNBtoPWUr1ZGTwtvasfeWEqePVX45Cxa5eCgDH5rebqpjpQQWmjDZYf8wForDhk1fy1h5t7jFShjyrAzdcDtr",
  "key29": "4brF1TiBmRhQ5sWFF32e2h4Q5Dy23LUP3PWBtZ8W5ydRhNwCPyQFAooGiKE9thLhQL9Zfmfu9uenhJrtGRC868Tr",
  "key30": "5FGMmS27586vZRjYCSLatrozFny3eGEtHTmcUKdS9Yn7F5USKiEQEdi7RsiS9ctkLRrTEERh17XGA2L2LeoRxyW2",
  "key31": "3BmgM687XGDgcWLZ9aYG2kvRZiUdroYY2qBw1cEkEiVNb35BMvtp6CPq6Prot4rq82p3CPGfyNdhF5gsjiyLLneP",
  "key32": "HKY8h72UdDQsRa9XrAL8CmKk4RYkYZe6gAgLnMdZJ6iQRyUJbckfN9fwcDGjx9NLN6ue2S8m7KrLUCsUABveCyJ",
  "key33": "JrcZsdBHD9q4RprKmCChc6BkhRPeg8jt5DNQrGNH5oUmW5h78hpwfyaGnpDPdUxPhAbF1S8wAFfiJz5FTWoCkMq",
  "key34": "63yHAi9Y7wgxWHy2yrzzZuashyFdQgLRwzkcZGLkqBLpFqd4TSHBQ1ZkHToSWEFHFFZBytkVy14ruDYAYQGWrH8h",
  "key35": "2vsa3mfokLh7DxLuRvb22ga8UY3LwXmNrcr9DQENwjg3tdFJAmgSVJGxVgmoe1ene7LQdHk8izaNuuuZJHPH8HYw",
  "key36": "5PS7vdCW2pVGWApaduGPkKiBvwor5KYHcUizJuioAjjmQ1L1vubqYG26hJCcVg8kh2uuEeVd5kT8M5H8PVWR1fGD",
  "key37": "5y9V5rx7pC7jZHXvHLf9EyQCfckY62BeYA8KXaQVdXBC5XWHob7S2RS1Z8za4a1dFCNQVmhrQLKMFbXfFkRggjLD",
  "key38": "4cqyeQeFQTLFkAkV1JvBdRverPfATdiHcaP14DP3EuHzvAzqkrumJ5Jf3FKviXywEpWXBBWNhWEQ4fSiuNh8sjJ5",
  "key39": "62HXJjefk66x37VQtY8jRG1RaCCcedtm564zqvxf8tQdSC53A71Pj11MZA67TkTbA3LHfo48XMZ9GpcnroFTruD8",
  "key40": "3bEWDVpxRzrUkzokriy4CtYaCDf8vwPDMLdL6kDm6uCFKwiZ9fzgxuK83yT3AU97Xhch6a5wSb8ntMQuDbM1hGRy",
  "key41": "2g7xjPRbkcvhibw3VtdPALyHMW1yqZTjfWRiBVGbFxcUGHj32U6X8pgvG1xzB2r3bQCyHv85xv2Jam4biJofUeAR"
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
