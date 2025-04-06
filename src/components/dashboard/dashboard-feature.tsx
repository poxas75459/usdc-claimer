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
    "5fSL9yLTUbDTkWszV41FhaEKYPcKrkGkkGLhib3b3rxPpWtN1LezMc1xRnEoh1pH4Q2Ym5ZqnVEhe19oeQzMcPSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3we7aAEnfLBdNsvm2Dr7G9W5pfyYuC84WpD5oKcN3mcg5YUCf6YTfWfmU3tm31EanZm9pLVg6fv6FsFCh2pNJtyx",
  "key1": "64ZuZY6xMVdgbwiXnNxzPFC2Yh39rX67vugTPE1ZQdhcwyTw3hgasnFzwQRZe89Lssf4Z3U1C9DjrvbiZzZJN6Ub",
  "key2": "3NbS58zfbQdftrQ9VXZQ25ctkKMSkPLDeaS5YJaXqFpYhXqBEHMNxaPCZfJBehFPDchGCUMVQmnMkdK8v839dD5N",
  "key3": "47bqdUXHvpoCCXkbfJZTiJ3qcJVBDp4uSPxYiwfSdPoGYNxEUCZvPZJWmevEUFVhDHmZeFoAwTf8vfDQJqY3T6y3",
  "key4": "47gsHxjSuwWZbpX2FspycCMTshNFGdG72QACQLYFeqLxeX6ykxWycfJtKq3tYy4ESm7jTNgDCcmqH9DXNbJCmYoV",
  "key5": "4FY1fADzYfiQjQtsuE9aEv4vbyP1fBjwgUiHs8epfEc8xNZx11PiXQaeaY8yRHPSWW25GJc3yhAyuhZjjFEFpnLt",
  "key6": "2HtdNHMiurtfyeG9pMC4UqykFceq26Qu6WEzbSCNET6VJyB2B6L44TNgbCXQQF59bSmxchPf7tP7sEB9DtzaTidY",
  "key7": "g5kF1PGDxuQZgr1KB1ycncTS936W3tzKzcz6neVeGJiHxffsAouDggjYgjrboavdvzoedg7eNuq3kXXNN7sKKei",
  "key8": "26sGd9BfozMQXoSNrQyRNTNDwDivYTH7ghGymfppAuN12F16vfSbHrHpB7tNJrr4hYtj1PXmyF8dDUX9Fgt5unXE",
  "key9": "64fGpDmpf2KmiSB6A9eNqMSxvNHaJCJ83oiNUSUApekS1B1WYG3zuxUEy6ZTh5kqQbuZDwBGhYk5EPuFpUiohYH8",
  "key10": "47tPP1RWypRfKjitSQZVat2Z5K2fjCF9rHPgbnX39XqynRHJULVLL4csFFpmAodgCTZqqSzNxV2gvMw7tm8ijDHN",
  "key11": "Hc1kPVig7Cr1X8aSGtAG22wn2NgtUuDRfhjkhYFsy8PDLFqaw2b8T1Be8Kppccig6HrCVEqjm7K4K2FrvrqYv8B",
  "key12": "3Sb4CbxwHaYXmduPpnwBwQD19ncnnY4hh9HUhzzm8uTFB1DfDUuXyu3o6U5yM7cwpTnNzz7YBNeqPFjRiEyTX2oy",
  "key13": "2QD2S2wbYwX1aGVPGXdWXCHYMK6Zb5ihmNaCHbTYpo9vcdBbwkN8SczazaisuS5VSV9iaJsYPLoB8kvhzD4acY1A",
  "key14": "62ZeQ2vRPokfgDmdJsFW5gWSR737AteytcobTjQ2paAufHKEu3DWssUpQe7aDUB3hAqvcHVvLSoWoVzC1igydk3o",
  "key15": "5a8x5PzrGM6rg1pMJJiYx7WsQYcSji83kdjLiAwGt7y53pgWpxpuba4p5UGhdn9TAB6VRNjdgg5ZanKeq3PZYWVp",
  "key16": "2rYbsKCwNCwMoMWgUspXeKsZV7EhbB79idLVt8cavExLcLn2TF2VbqSE1CCwbTZB92zKPqLr7hGgtW5Me3xUHiUy",
  "key17": "66MH1Qgb5UJh4RY68Ha12RCVGLPjLoqS9UPW4pQGJhdEcTQW2kTtHQ3ryemBWGhD9tVnR5iA8phcK1b2LJQo6yzb",
  "key18": "38TH95YtmMfGTxSmoHGFBmRfkEMThMDha619bbpDVXQDz17DBz5Xu5u1LZgizDnUZgUr7y6Y9JzBwLGFZeoFoENh",
  "key19": "5PaV1eP8CWsXWjmDq55uLY9cyKC7DwQxbhXmiKQTdyZ1Tgz1PvszTnjqJyiL7UP4z3fN3qAUryAZgcAv2L38Wioc",
  "key20": "pMqojZpSuT5RMzepkpSk5NbsL1xCaA45Cg4CZDmy48KZsCsRLHAwFGXcmPJxGsccBb7dT8rDagkKQUQcAX3Eryx",
  "key21": "56VbqBVMmL9svE3TcZiZBXy5tPXjLRGxdxLwdViJHayypZATBCgzgJPKpHjQMNpqSxR2LBmPq277zFsJUbhLcSUz",
  "key22": "5RQ5u1jNrkDs5dmacKtDN34vVCHsfMPnScGi8a1nivgk5dSAaYjcxCfqAb4Bjs7ckAE7DKQNM4GDPDxyS7ea8gZk",
  "key23": "6ZQYBaLxW5Sp5Sa3zHgDmt52CrBtGjbmeFhU15uSAezdLw18dkTC5F1dw2ep64HCJ1AYHdXAkcez9HdHvcxYgri",
  "key24": "2VberQUnAZ3AGWrWTYByqT6oLzQcmm3N6M3brLbJJJPoywqNe6FcWtRx5xoBUZSWH8XeSeAUEpyYj9UfdoZnw88U",
  "key25": "4fcPzvdbhqg3wgBJmURfGBRQ51QK2TSh4PYHHWvJGJzXD9KjBwbSwruCrMC7GPjPRMnDKMzUajwoET7RcU7ybCpY"
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
