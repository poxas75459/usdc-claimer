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
    "3mdg4ZdD76FLKpAy9ezf6Rg4wb2Ky7qSZt6CDbn2MRH6XDTGBmoVb6NabKjHz9qi3B8YLMUULbTeerFhdfWEFYaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nEh2dkTcofcRnSpvLo3guxebtrVzgSAKjPRuFVdsM9eutcD6RkdZd747m4MvotZ6Zqp9iCZMKXP4NaCcEsGUuXW",
  "key1": "2RptmUnRAMqAnRVKjbYinc6BLa3sHv9YGRSPURBQVjW11zjmkaPvPBQ6Yy5JQULVrYVyRBT3taLZGo8NNLHcEYMF",
  "key2": "4JDwTiHyPiL6aHEpZSxgw7iwDVVkxynZabyVithqCDRLe1VR1Ehhhh6onHLPeCUwYXNcPmCj3LWAfhMgMYruEfwW",
  "key3": "34fFLnkpBEJNinLBFYiEnLAUxRVVZ3VP34zThoQbaeARrrcMjtNZKD84ybAzQHHffcwH6vSfd1RzAurmT7enie2h",
  "key4": "5bUKNp6AcYZV7mPJD93v8CgWo7vd7MCtmvod81fyTRXZ4qeHvR2fU2k41cBY9Xip99qQi1fJAaopr11CQE81x7RB",
  "key5": "AJ6s7ftski4fGYfUs6nWbibu1Xrmwsu7S351BgnueT2wUWVsnm9hvabDWWubjuuaPEvkpsB4M8X7AoeSYCvTLXn",
  "key6": "5egfU71uKnHShx26r46rt3S1jHkVUYkEfySuD3JZMkde8N6qzrnG68WAMSw7EHr79jwqaJWzFRzb6jr8TiQ6Sm3q",
  "key7": "1ToeggqTVqqg7zr1ueJMdQ4xPq4fuuUJtWdza6TBD1wivEz2EEB7o8CBLo2kUMTkeM4PutyAMoJFuUHXGiMz3Qt",
  "key8": "qjhsLDQyZzmXrabp9Ey1LWx2btwFQMPN9bi8WVSjVkCyBY6XKoKuotNH9bPDmiQetz5tCYkbDAS1x5B4ATMSAEq",
  "key9": "4ScDfiZwJFC8xQsut66Bdp9XRkCiLzFWrBH1Jg2tCztDQr2BJXy1wPaiAyXy12nA2eAmLQfYKs7gGgemksvoFJjT",
  "key10": "EC3ZNBaQyFPWrt7Yak3AqmUfQZm2phsfnCdnHQZG3P7yRHVbEisnjdMKrRucHmkoQevvRXMwgAdP9wZnCe41fkG",
  "key11": "eXnddrLawpHWogp8xPxMpJQViNuPutFGp3jKJAwHiGoPjV2ESWpxVbpnczKphy8WZHBguDNeJh6ijKnDgb3HEfS",
  "key12": "3wjAupcpmy1M5diVFPr2pbE8yuupqSmNkyaM4QBDC8JrvLwJM8XqFx5Nfy9r5NotVfAqxc4iiCBiDWqDStYeGq6g",
  "key13": "z2EQjjm2K5jf6dLodUM7wnCmbPWdYd3ktr92pyknM36VN8ur4CYJstxb6J6xWJpqdYLECAZZVCYA7NxALf9cMaa",
  "key14": "5eLctxD9eMgcNuioAQtizUZF7ZkaMgXL9bFbcVv7MAD6SumfQaNqqF4ZHyEzzcsUtDWJakd4uKiUtv4MZUNRc6Ha",
  "key15": "3AL9z8yCZsZYcmmrewWCWt5fXn1eYzkJJqAnKWw27iAWaj61EUmKUewpSnUwv2yiWe8yU6kDf61GtDRsx88XzvVb",
  "key16": "5PtzrmLE8TsNgMdmLm8MTXQSz5LNuWExDyE3kdq91vuVgsrWcB7CPdjc2nB6LQPUZMiz5c5W9XnMMjwSmwT4HP8B",
  "key17": "ZCWgkFq47VdFNKgdFAzTFGswTQSDbwzYZwcB5evPBUGP6x2zjPmgQXR4LusfLSf9EiVHuhfLbvCNV98EqUVrXma",
  "key18": "655p2DoDUM2TVMEzgXM6NT69nYbjxbH4ExRWjEU2xhTFHYv6g97q4SkrXTkLYtVi788kQWAwN1kVquCASGwENUZw",
  "key19": "46fTERfYEXx2ngb37DGCrMumrVPuxDkTQHrBdmqzvKpDrfpw83dbzCKHXbSeTp6B5cRFZaHFxU25VNcrFTQrDsU6",
  "key20": "3jjNHzTZ3T4xiuFf17dnpek8L3LyQsqpxHKonnefirq5o8Ep8bJm4gBd4gWDL88QhN8MrMJX5eUY9v4hfhffibPG",
  "key21": "3RLRCQy67cfiRFRNCU2zxAnavh51nk52kebXWV44X962twd8ty8yqSi4K2qyvrLYWi9wXvcp1h3scZgjHHLnXr3B",
  "key22": "5ezRbMmXWWiU1d7gFw7TgXSwxdZ4tLBBfrje2hUTVsdoExi7p5WW3Rb9Ubg34DyhK5VbokXYj7rj5qW7hSHHXm1D",
  "key23": "5Eu45bnxvb1bxJrPiG6hArM1nQ8CwvLQJQfV5oxHPMszTu7S6oxG2neDZVVV4FP1njMuPWX6hBvgRQJQf9f2XbEp",
  "key24": "5BHuQZfQgoHkFT3N1UEcaNHUPq7vTXwZrxycb1Fo2HGseZAJGj2HF1R4TMHPNdYaowsDnd6EnUcxRXmuv96p2Gwe",
  "key25": "3MBcfSdwaHffRXzjmrRpKmu3DGhzAsq5L8f4wyEw171aavvqak4M4UXNmMU7rr1wsXzttYUdsbsqRzaWcibjREvR",
  "key26": "TMyrQQ9thAMKb3ksoE1ANFBHJdbtZJ5rndHxDXWowUBEZmzq8HdC93eY5qeUNFrDtCYrdZZpBdkkKxsrNP9YEHT",
  "key27": "5QVKX1KrmC14Um9kXTz7mzGQaVsbUircWPwo9KjMtzddqx8MymDNutG329DZ2kbmjUKcqFunaYPhkEJYJ8y7xDTw",
  "key28": "4QxRTwfs2X2sN6r4QbKsqrfReGUYAJma4gzoaCimpbC987P3tvFCntm4eyAk7w9v6L24o8xj1d7t9aE18TC4bt2p",
  "key29": "4KyZQDy2MYZ87dDWMXvoSj6pse5L2h5bvaucVWY9GYMtqyJdoj9W3oCBAMyNHZtq9bwbFrqKKJffrnSTg3uRgCEJ",
  "key30": "32yhBe3U8pbQULYNDcceC9PzqVKZrcFY4qcho451e4euUwe9eFFYxxECoTMtGJ3Qx93NC2HzNpgUYxEPaPbsU78f",
  "key31": "2yWfrtUHgSsHnJtoioomyRkYKDjbi77nadBZuuGnWpoKGgsnhkD1CuuYNArhun41HHM6EU5xW3xHjGyZnVEBA1x7",
  "key32": "rw78NN9PootYyZ6yQ7wQjhkAhsakWAJFwKdtbe84TeDrvGsRSmYjcF75LpPca9w7rgDFbpvoMYfEnDACDFby8MR",
  "key33": "3usxMsJHXBAuYCWNwwyipTnmEV8A6wxfzc5bRH2nxhQzAH8gHUpQsdz2mjddNciAi4kYxh4joZkmLgNb8kmW5kNq",
  "key34": "2hF36s2WNMRPAtzHTSHymPxnDTKNmDiSeyLo1xU5sH66kJoERpxnRqnh1T68XgGgijQGZKg1Wu295Xb7kwdj96fi",
  "key35": "5K6pqt8y1if8sV7RAdHzUivWVoKojKPcDMow9yWb1WZPvxzisvEwb6Van46nPsKHRd7sRwKcwPqxDQV7judhSPP1",
  "key36": "2MqtihqkA8ZrV2nUpHwjYZWn1tKHs9UJzPyDvkPPrAR3aZJKtXPc9AUT3tAH4ZtbekKiTZ6hL2i4GCQrdjbbJeLF",
  "key37": "55FiZvjqbiYuRc59KRJMMn1m61cgE1pM4Sq6JQLR9DY2hd5hdeLHNTQ7nYh1yy6n6gUCFjj2woukfMLdyeHPNcqn",
  "key38": "2TNEp5xUq1QtUwTUVQWbFjsPghbFsAYwfgXHmcgfF4ZVA57XXJRT3YgvbdQbeGhjVuMCVzoHExnmJkDtAKBEFihj",
  "key39": "2s1brog3GuK7QWuRpmjWuiWHo3E1m8myMcUwchTEw1p9BSEjHqb5er1842PnESzHm96TczUAikG7NABWFUkARH57",
  "key40": "3MDERDVbuTiBEsy35iQt7w6R2JjfcBXhEDiRrEhdnC5nTbw8gvUJZqBtEGZ72iVK29L32xUEXfCN2LpZSt5UL1Sh",
  "key41": "2qnyk7paBrHaJCniC6AjhwbJ6Nop9YVeQKtba2J5qPGii7XLV3EgPqcqY5SW9zBpFmzzZmXoRkvSaKYB8qHaEmro",
  "key42": "5Exf7dVM3AaqcWG7c18dfMjb6j63zXtwbHrAsPeBNR8uL1NWGZTaR5bAidrgEhKgo3HQeNg3FdGU3Q23M69JpX4c",
  "key43": "pdq3u7T4WqkMahjzfsm6AWLRwbrtWpRCEHHREQqsZHso8xP8WDRYKAbRtxwUwigh2FAjK1V1GEcCkSTCrtf6Dtt",
  "key44": "cSaw9qu359cJFj6ZMRjTPZQ6kVHcPggf6nsjL3xsxNVA7xt1YFxqpP7nJxw7YetM9S7s3z5Y25Dk2DmBkK724Z8",
  "key45": "3dqdxf1GuCdjr7C1Z1ZtSx9JZWk74TYJwvQ5BPna13XGEYCeKjxqfCY9DoJPuJ7HGWt5JukRSnM39GartCUTMWUt"
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
