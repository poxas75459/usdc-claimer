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
    "2uMsT7onPJ4J6tyzEQpusJNDtCypayvkavoy6Yejcg9exWedmj2qkoYVtefGH3HpN6sDF99ya6W5LXdqyGmr4thB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "446aifpRrVFCuQgU4NSAv1sAHYrLZyVXPahNvW8JHXFzKydKRUn9LVfjbnNTQZ4whSfReLKqHhpBoe49dKhNiivt",
  "key1": "4BVReuEhwsKxMgNiaFzppimonavcgbXEMdusZ4JikaLjADZECBZbC5D1zPpaAUPE2WZYY1Gj7MF428JQLbfVbKUS",
  "key2": "4thP2k2JkpKspmwz3z4piyX93J2r6fpAb8bPM3hLmxkd3XveyDmxbGuGZ5ftcfbvYmiPgoNyXSQ3FDdU7CNJaU5V",
  "key3": "2YCrktSZH4kBqoG8UA7NPHuFHyUXCfUaQShyzG6o8XdaThwQGSFuGkAZww4XRKXS4rcYBaKHyLj39UbUZFjLpoNY",
  "key4": "2ZemFDv6vgNeJfKxcE8yTtkkNVDQ7r64ghX6BFdZqT8anu1oHN452rejYJ4rLCte3bYbHrDu5eVUMbyAKMdSwkTu",
  "key5": "4f59zpfP51pPxbsMw1h8sUohfQnXfxGamwAvSRFxzx3rzk88Mehwq3arPe4bwr3XaZaNjLpLND4uvLioTaWPTB3t",
  "key6": "54i13QEzht2fXyQ9mbwrCn5W2HURBKLfMG5zeLrYbE3rb46KLwDPfjQgZVRm1QjmLQXxtGrVQHWpA3JUGEryqpkG",
  "key7": "4AWe2tFs6o1vwXViz5e2zmNmfdZBGPsGXMTrwg1rqWPWTkWwxeKndXfw2yFwTSWvHQ8yugc2R798Nah25ypmedY2",
  "key8": "xofJ2b769L6wiXC9WbcRb2n86Ho56toCSQhVuXivLp1rnrs5mkfVdLwzqYLnpiSvqaPMp8iokQCcN1iq347UGG3",
  "key9": "5hwPyoE5apGF8mU4NA6mJuSFejWbjCCLxxsMXc37VSJrff9XrqTTXtdvifPL48DNwGZtcwsFT8WfRoM3HoYYyuxy",
  "key10": "5kFhA8yBczWXa2Y6t6qBqsyDNZicBW4FhYtqbnAvXnH1ECfF8m7XBwMj3NkxpLE7aDZeJ4BdNnrX6PCZ5CM8hRTx",
  "key11": "2Dmezs69NzXEq7ej2Sq4d7MpCNVXbeMGyXjSeiceLAEWfKTocZmYpszpfXrS87Yf7hZd7xVsVv6zgrDDTNV45sJu",
  "key12": "2p98nJGUWga8jEsC5AZDt5H73Lbw1KfSfWANZtuZNiZddvVPP13MBC7Qw4VmC1AwEbuprYCEG3nzMfwsZxwy4Z4x",
  "key13": "5zY2UveGugkbpDHZ91uMD1XnYoWpkAKUpPAnGhmcUks73YdF2yCWQjTuYReG6wsutKjEHLNYm4NacQ4iijjufFYn",
  "key14": "4mNxnsGtoXcon5hbRJtfPeXKPiLdwn65E1nVje7T5B8fAKaHnq8WQVhA1WLkpTNaVD2W23HVNW2W5qixH1J9N37t",
  "key15": "21A4KpoFpYPVGUPmmBqZDA3HkUPA7CqGjNKjXWmnj8fpqgU9cWuYzq1zuWP1pZrDtde7i4mrbhc5c84zr6AwEwc4",
  "key16": "4jh4HLXE2Ngb4awjsH9kUeKnL5UnfKBq4GQdpoz3CPzvMqdzT9VEauWRGoMHNJuMq2D2fWpSTsnUwmaJ5cmYd4JW",
  "key17": "M8ewUxzBmX8iHrCAKeBXowtZyzYvUoHZoudn3EsXY19piA8o6VeEhePNJHTv3NTmUjAonfCm666EpvKwukjmU7i",
  "key18": "4XKCdLVBqTDQ1CDc9WAp9Kgu3XeVNDKv56bAfKdpJ4jK57eq6s9stojwYuAdP7KkHSk12dzfmFfGec2rNS51kVBk",
  "key19": "4FAhWXVfe3eg4sN7zakektFvqiQCWcGfoUkjC3Np2ECs3iH6yUULR2febkjaRpnP4wVHTkEG4EYg8bQogFhd6DVc",
  "key20": "2UCAaxsQT956b5JZLzQpHhRJ5nc7mHrv6svdYeHcRf3ZRwwvf4RF4gUswYSVnhYGHY6cJKTyAfQUtuLftWLpsqQJ",
  "key21": "2DJ3QYgKcKK7maTQ64mJbZ7Y5tKVrwKtEuMvy1KHuQr3jgcH3LK7hBZp47CNd7oa43Ghr79ABHQNM3hBCQUnjpcL",
  "key22": "36jVTFhDhqaxzGbD6GiXy9Kd4fFzkkmkqhDGNRmB9kon6H9ReaipfURRM8hqBNoZkotazNYZ5njHxCPbvzs8Z2Pa",
  "key23": "5KoamK45vCfKCRq4p3ibc7gFke6MrDWxTM1Hsb4HpgJQbFyxzmiTKvEC9haXsYihKvRAUo3x4aAGf3MYCVVvcwmx",
  "key24": "3kTVVAW2CoxBStMZVXskBkYgiobycKkzcnztmki4CEWz8YoFEpWXKKtAqUcJkjZ1gvgSFpyaT9htbXwyviNZ9dij",
  "key25": "zdv8XFBThTbgEXAg27NpMEwzfVcERn4E4LKbPR6dsT7u2TrQfBbZmuUBUDVmn6DFpoKH22FUJ3XHgps18fY5AZH",
  "key26": "39xp3Rydj1XN6Hta1Hvx2uRiAbxdWxrf5LXRTnpcv2p79Dbgqki8sBP6xeeDyUkSjxGWPqYAP1YGafxarfp3wyFc",
  "key27": "3Hmon9ZznxE6huw5eYdBAjW1t1xaXyyQtjFjjZvQ7P2gjhDhgBLfDmnoky8wFqcCJzgQWA8xvdR2egqh2n1HJYca",
  "key28": "2xGzM2eKGmvr1ciFjehmaUFidyb7dmRnGBoYmFQLtk6HZhPFLJbviwYnGUcSZ7ezADn52hpJ6jqufR7GoAuhgmCG",
  "key29": "3JU3WiwXWDU2gRY9wYefaiuWSYBbA9uZremfDXLemimmWddtDKyst2HcLXPkfMG4asukzy1EGnCkpZ4Kjk2kXxE2",
  "key30": "cm2yT8EHGoYVCZM7yq14Av3YJ9SMT1Agc6MxSCv9EF6trFctW2orgmRQ27TLLPUnHj8g2Yib9jfizebmZ8wqGKh",
  "key31": "59t9GTKqHqmhKUKVENFkSzatZVunPwF7iDjHnrnBNA1UrY9MS1ChpzKmkZbQ8sBSBWmDN2BP6Q5iz2y7Kzd9dqkE",
  "key32": "CVhpTd3MqjcEMcNEqzRK1TWxyJ5zWnGfFiW3HnKxnEyUTG3rUUTCfp1Umv93MdkQnYSJLcHMi41QXDp5WDJty1r",
  "key33": "2hxPcPkDU8o4sLxyaZcsGgmWCcBfY5RLHcQ2eJBasrfpPZRdPHQDKigWZcsSpjXuSzfvrGQrqmHXA6vCV7NMghWh",
  "key34": "3vEahsi3NkSQVBnLDPF7ktGmdSXPz1CrtGGKt3bTsTtBgNk9a7haePXACX2xoxQSghkmihka9dTax6yCmw8tB9Bt",
  "key35": "2UNtzGgSwaqudELQ2TkQ1LTifE4YeZk5N9ww4rzRijgGr8BUFkpXYEjymARdUnhgZtDx7XVJrPZvKgbtjfMwc6cE",
  "key36": "4fvCTaCJMy3QcXeXezFWhWrDfKP6UoURjjQFWzXPEZ5VXPprHutVtWz24fycKX4jF49J3uMkBBa5sRjgVkP9d7vF",
  "key37": "5cxfNRfWUCwm9nr3roHgoconS6unKS7r4MdQKa5WfvsSa2ZFLZFyJAU1Wgr8C41nyabUFz3xnQFRvzErdXHuPLuo",
  "key38": "5ViXt9zYZygnmi3gy2TDwSRscWaEdB8xEqwoUDD5wTxrjiKgbPkt8TsN7voFdV3z4Yb8Na1BMoJC64F89SVXy87b",
  "key39": "3xSMHeiFwgG4QMTtB8RRHStbeYVstfVevN2xQALp6BUPFpYmFMd52Q9tNr6FTCsnMV5qYHTka17s7UjCefycxKz6",
  "key40": "23pjdpxbBKfoF7ijQgAgbfFzAceYFQr48yRzmfBedcGqkLHJVxvN6w3mduNAh8vmhTBjDDwfYgXYM9FHSQyu2NBW",
  "key41": "2QvDmmXuicLx6b3qRYADAYG3iD1VsWiEEEsRwjdPCnwC8brkXJ6bBEUbRMFthYD4Eh73z1LniNxcXyPw8Cr8cdP",
  "key42": "654UkqYzF9rZGFn8UKcoSkEqrLMvcNbfh2oeDVoi9ovGSQBZMvKbCTd3BaUsUKNdU5JbN3TQuJhqj9tTCZouuzgP"
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
