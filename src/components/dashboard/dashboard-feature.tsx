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
    "3a6EcEbzysHUWCQjovn3G1tbpRoENKJvLp57GWXn4UMwRRm44DuQBY6fGjKARg2JgvyUYgue78jcx2WsPDVBtxCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qFvgr5uwyhtQ2qMgCys7pwiXQEMnYPAzQU5BrAx7LmoZCa98jz9vnaQqfwpzwBvno7AuU4ZXrvM8ZL6TRMqhKG2",
  "key1": "4wpkqT9kQGn4gVWA7qUJzrVQifCRSuZ3fxijs2vYKmrGKoWrannL6mrtauKrzpy68JYXFTGrSiYhxgn2pNakLsYe",
  "key2": "4D62peqX4PDcKNd5CgH8u1EGocr2te8z1XMAdRYPukKjH5vW2KtNpYM1WBkibaVQg4ZiEVBzrDcZN5TFau8n3KP1",
  "key3": "toyWDn5S1JwyubhHt2d8HH3b2PpnpZyegAn4rZVwmtcYs9628vjqEaTpap9w4NMwFUL3Ggo8rMGJkhPsZA6yQdo",
  "key4": "35Daxfn1Fv7dNVr4vU7esnYj7duyzxvpnjcKaxi7RQN7joMZoCqjdFf2fH19b7BP4jgoHQ7qUNAqT55cns4qfzQm",
  "key5": "2vTJTUNRjeXEHAjeKzpDXnEhTCGMVR576NimravBAFVV4bZ3YPPmgCtm8JeSBmMvn8bEZj8mncJG4GNkjVecQk3",
  "key6": "3bRcKCXiC5fayazG5mVXjP9PKnMA8P2c5Vs9JM6rBZgFY9Ykf1Yp7RGpwdXnyzjnDQAC7XLcm9wGu7z9ETpeW94y",
  "key7": "5KYucDuuazned8WQTyjN3AT2s6KFUdcmJrPFzg4ZnC49MZ5v1Yj7y3jKLtk5DpVgVBPestP7X6riGgJRRJXPHtPy",
  "key8": "52HJyy4KcyS671iQsP5rCWfpYus8LSgAGwfebmJYJ2GVRY8ayrgQbPMBuTnVxmrKDCCwjJVQMHu1u2te1wwWGY42",
  "key9": "2NaCkvTjv5BzTCWgnduDNeHWtTgdTd6jibkKCEyeH9uWHoRmRWbZ51Gb82t9ExXWxCn8zv87xtdTMZP137AXTtTJ",
  "key10": "5hLF7hRKXBgoTuowRYPuCo8U2ZAWpT3tJoGKJ2mYbuj3984aurGBFkDFV12vuPQRYUNWmxtPG6pFtqCnHLgJ59SY",
  "key11": "62tQDWT12PzyirdbgoW8u2D59kGfr9FPqqK9693EQDwQdt3rTRmckAKHtzdzLnDj1zhcNHGmhkhUHQDw6Egndczh",
  "key12": "joLYhrm3o4csQ4XYD6YTf1wHd3ZxS9hGuUAJJSF5UFRFGFnpHFwaqas8dVSWctTRzHi4fupgzrq5b7B6tMutayE",
  "key13": "3YuZMNQqTRyS65RTqLHFBBLDjEgKKxgWAFA3XvueG1TuLRy37pmqt2NpwxPqAeANpFyZx758jWMUB6v9vT9FgQtY",
  "key14": "675KxtoVnkkNekwLpWhxF4hPQ224BreNbV5KLzhPA3Y2ckY84bdCtwnraqABks2udfgWqzcJXxMKjK71p1d5eLHz",
  "key15": "5mznvLxiJsFG7u7KYpyQcRpUNeJkjji745Uku16NWQMeF669UYskMi8fC73JdBzHpECxkHvNKRmj91NCSqQTfiCe",
  "key16": "CbcwFdocouf2bWykjZPF9Xyo6i3Cb6TnhHkmMkvz7jwEnQ3CYmgMhi5BrgcgB739W1iCcx64pNZHmZ5wwzLYEBc",
  "key17": "3GpV3X4e58Nx26WotD3oF5LxiPMRKnx28gcEJuJTF1ER7iBKPsN63LoaXRjDbuSPaCpu4KMhTxaAkFuikNeyAEME",
  "key18": "4f73D4LUNZvyHjzfoc4hMarYqr9ffxw9KsnzpyCTrtdE5cKedBuXwrRUYHvdiZ6tmY94GzKTu6re9jHLu3b3mYWY",
  "key19": "4FmLXBX8inW3XQQLHCNSBuukqg7jvpS61Cgd9tTWCZmrXtwoAkxLZV5MLbVFZaBAWUaXd6K5E7YmJfsbVsu6EFre",
  "key20": "5aFAYbq1ZNj6XSZcyvMiqCRXwKvoMbmuFwWU5iRL5GZfED2PcvGX4CoGdZeaVzWqasyU9LpyFJWx9UopH3vcXvSj",
  "key21": "T4N9Yt3mUxoKTgnaLVC8rEMoTpKU3G1Sw4Jt6sz3fbUjkfcpfSUPAE34yroVtzaQuacAaXRCMJKMSEyxWosMhZB",
  "key22": "2odPtd7Q9eWBhcTCuLwFNu6shhiCPKNhddiicoU7ebTDA4JxMNpM2iEykcSMbtTbCoHGN2vBDSdJB4aeSF3UKBzi",
  "key23": "3F6UskxmaL9w1jggqsfqERJ9cjH7fTf8M1Vyxg7KRmjk1wbgSfLSjB6s8YjwxM7vBoUEc94KPL4yd7E6KnzzdjvU",
  "key24": "4vh1oobJRKMWzLe32gsKvPQrmayXtRhXnZPXMaQjZpKox4iB9bAEHznPHGr9EUksVUVFjNES1W82PGKJERmunjYP",
  "key25": "3BJ2KydrrxuDyjtmkVF62DBoQNQ7z8KdSQBg5aqkwGdkuX4HCsYoVZRzoKSgwMjKCcmWEc5Q2Qkvmcx9de6znsNL",
  "key26": "5oLp9vwmFq4nqoei7VTgzbMt2JZ3MZXBRTmtNvvAUct1Mwh38DZpKVP3yadw4k8pfgurCzDfTBQGYqG8TBD6jQUr",
  "key27": "2p4aLy4rA11mQ2ZfPbydsnJNGiGVycVQvoRYCo5cqqfJe1RGqA2R3CPXz8Mo5QFMhLFhtFRN9SjqL15fahfYU6Zm",
  "key28": "4NW6c81t8CPPSUUJxj6tjyK9Eax5PnwEfCyiyxtmmSecABEyUMepzFhumLgqiGCpCJ1hjksA5DRv2VkkQR2CCm2j",
  "key29": "5mz1XhX2Mp9H86yyuzRP8g92qMfQg62RgKRouZ2UDAM9asziSZk7WKPWdpLjyC81rfK6jnrgurXSuwQMuX77n3WG",
  "key30": "ZJbcd5jKjpERHEWsyFqQbewJt9JworJR176a7sSYJ7dLdmramJHWeDFj5awoX1La2VeAfFSgKjW827DrwWf3uw4",
  "key31": "zR724bNy7NgQ3MDi1MXtapUTG67jBHXqhgb7iRErsxVF3iRxxGood1BorY8UomNxUVKhyCRYdimZxoEKUmDBjpZ",
  "key32": "RGitcp98iKjg448vEabwxbUQHqSSGu376B1FGKzMEETRQdsqUB3cgYYZhQpFycUA5ovKKSaK3UeLa7TqQUor2dH",
  "key33": "5DFNbUoZwr61Fp58UAzGspxhArMKBXwXFwMTeQXWpPmZLjnejqKf5GEpcB4TgFv4iXfxxwVNqsjSP5HdfoUcnMCc",
  "key34": "58sLLsXzMbbrLp9QAPEhFqocwaXMCM64ro9VpR2bVi6BPLmcRkwKUwufzD5b7YG7zniQRJA22FmtnaQ8F16z7Y4J",
  "key35": "29GMjnwf7MgsPpshdyGv5unXyGMwP9sHffVuzSGjgRAq6ui5s8zWFMA3KwPkiym6oGqHxWASnfX5BTP9tUmGMLsc",
  "key36": "2h9mQduYC54PuLYXWRnCtMKGaEWFPLg9rpQjHREqdbwB5qrzivJHMrFxCHWBf3JAR2t55q4QBYEmf5wb5azanyU2",
  "key37": "4nH6ijQkYK4Wrt3ikH7J1KiWQE1XptnDbbL95hhR664deDxALupkv2BscH3mkKUgNuj6RL4fN3iJToW2FLDF7JM2",
  "key38": "2q8wSGGNyN3Xq5TeUpzrWSBUJnYavABU8fU3bDpNAUoTDa8EapFH7K9V75VWXfdCDRTnVNMZAWQPaDT278XWCNjZ",
  "key39": "p9VygQjPhKWYR8KdekyLUC67dQdtHHUT3xu5hLkcz4kgX5Xiop1v6D44rJsSeqJcPF942pUsvTLBHjC89DZgDJ9",
  "key40": "95GXHmCkaPmo6hPE25xDSUi3bToB9K6YV9S3MnGoANQJrLg36qKX8X6icdu3ArGx5HjN1vGQBM3YEBxX256vTFR",
  "key41": "3Mwav7DVyzBFHwRf2SPbPHXegf7KVvUmdmMfeT3ycpgps4Y4vqCy4B52ySfRcvkxkjhYxABMBJ7LZamay6pBrQyX",
  "key42": "5rFWCYzv5FJHPtndAG8GuE3N517VyqM56DfL8GXLp3TQRnSUCFCt8rjGyQqoffief6iBMCFjZcgCmsVZdKStbNFK",
  "key43": "2JYK65vKXzafkauT1LZCwoFgZ4NcPrnoDriU8kVjFEMSD8NcH2FpL5yG1Nrnj7kMZi8zSz83RxTpyM5aMnnYmrg8",
  "key44": "3W7WCjNNGBFHGy44D5EGvMuxbu5KiPHxMTqfqNwoeqTYf9ZnYnZqutmRUa4jPoip7r8A61f98jXNgK9PCasxgSbX",
  "key45": "4RvaqP8H9o41di2KBDveWeGdHdFGWbhyk2gR1hXgPf8tU5rjT34X7brxWiu2PrHHJSCQNPN8NtqyhjRDsY7twGJ2",
  "key46": "sLY68Vhnv4DVwpFo1epLY5YDBBYB5SLbeFAp5y26Af8xPX1f8TAp2N1gtxSky5cEkupqtoV4HrBJRTASrYTi8fW",
  "key47": "2r8LQJfGEk1psJpcJEjuhvVp2vbKwCdQUB4zaC1ihaEbfaZKXeqv8pp2DBZDHsjLt31ZxmvxRz9gWLaNvxCs9hFb"
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
