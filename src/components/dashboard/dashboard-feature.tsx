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
    "MFtskugGWTjFZdBhV56FZmZjYixZXcPbpFdb5TGG1aXS8FYzQSLf9jZD1ffn7hQ5Tp9TTeGsj39scyQWEjxPmry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eLupjKRTQDN5Cin46BhDtkAPX8Fwdt4QBoRfmjDkHaomFZULEwFnEFBHV8LYitZ6qREon5D4pKxpoq77aqLQ9e3",
  "key1": "4uGFBomHBZwTcAd34soTo4C64cU14UkDEKYoyHdtVHZfxBJ1MmDrpVowzADHWRfwP4RwbXXuUdSmPCES7i2iNuyh",
  "key2": "gk78MCQCEv4iNVx9DeYoyJgE1kVWh7AzjJysDJ8LY3KAjahRpV9RyXqwiKVVpzxsBWeE1mLdueBBWpACFEKMPeH",
  "key3": "2rNXMjiFBLvz5REV77Qcp2gs4cfiv46jkxRnF7pPYQqmBaQAr4MfLz5yLuy9STdQNWxxj8Yg2t76MxvjmnoUmSBW",
  "key4": "678rAqvGbFYGz7JAAQHDeFEajdENq3wNuj6kcjLqNo8eLzEn2NcdVE62ChaX7FcDd6WActCiewkzc6C1dhRWmi5b",
  "key5": "3gW5X2qf5xTnDP5DK1HKxiTgS5ZPZM43L2Rxz3pHmgrcamRjik1bsLmcwoy9boNtW5iBQWvwRQ8Vzn9okWRdTjap",
  "key6": "5hvJBkA9KbSvDaXk9PSn4pZPXJYH3xJ9UXmeSfAByus6Dc1NsRrXsz5Cgq3W59SXg8WPJ7KnAczW7tUGh3mVcKuJ",
  "key7": "5wWKuj8FbGb1seKsHqq6VMAwvaCxqpa1gVNKzLf5Hhv3rpQPoWQubi5hcu9gck9nsutTbh6bYDFQYejfyExFw1oM",
  "key8": "22a44FNyyLZaHv9GpG5DRPY2gX99DEnjvicqmuod8JMkLjJ7u5GAiWYcFf2EyKtaYwNbzYsqNodoNxfiRvCzptRo",
  "key9": "3iPVSH1KWXVE648JZCLwdeGBUxicMdNfbiZusMXd1RhrPohvm2MiveSDTjR6SmVP3BTvsrP73qM9mEkVtf3UFjAr",
  "key10": "dxmEeQyfWGqKVZBV8hoJikKVvPTULXLfu6ScCXJEnobTMqgNikWeRin8wziNST3aQTqr7hqE98m7vdqWNSBYmXF",
  "key11": "5wP1JQiWumnYjtVRswAHW5o6cHihoJAKJVGu5n6bYiFrvYK9HwyRUwRCE11hVw38NYNhbQXTugbc5gQkAvJCGYpF",
  "key12": "4nrfVg3xknMuut6CaLvRDSMgVPwxU9z212zW3eLpq2rwa9gGiewuKG6izSH9Gv3TSBH6jMKeLWD9QBgFsb7AahoL",
  "key13": "24hLdRJpnLAUeSocB8pBaBV5Y8SKZDt6zsExC8S4bSGid2WW6TMtf7Wj1tVSYXHttbbLtNQ4tkTmHirSnR5X9pyz",
  "key14": "58DiJk3jUt944QZfxqMmBkhRz7CPUpMqgxtxnX6hy69xgdwepkaDApJWtDYU5DQx2DJG2R4MwM1QYTxj1VBpb7R7",
  "key15": "6nf7Qye9EQVAF3VeYf3HGkiDNNT2PbwGrzFpvALrH4Tt9j48LB27tKcoPphz2rWnujrVJmnsPP2iRA2HB94zk4h",
  "key16": "3yjXb5sQwmfWaqkCNcaEE7n37ewm5W3Ao77nGg7jSpib4XtivvJJatt3AqetNjjm2Thryy4mxotnDYNi6XUngXZu",
  "key17": "4UF2Cahqr4NSjk7LSRedxkbV96vQQhecevFKRErbsr5f439fB2pBDTo4JbQm47qMbEmudYbJupMgu9Fq9pSnX9TN",
  "key18": "rur4bwiwTtADjQ8GRLGdXDLXe1iEqNEYfVe17c9Xr2PzyvqkNcpJvFHx7bDXBHuopY2oGo34cCmXuBKPK2p57qk",
  "key19": "bw5jBoNyCAJ7RU3ZiZQaxmrYpVT3bWVpfN3zAftBAMJR99dRuKLjbeE3eNXTwsqi5g59mCMC7Nv4KhthYYQwjgs",
  "key20": "4vRwimamKg4Abt2HGtjeVpsFrqQ64Q1x92KNymuiStg1zDWpoUCkMatKb1eZfJSwpYvK7PYLEFebCrwvX4wepn39",
  "key21": "3QUPdSFfHtWTSaPwZgaeRtVdh7YAyQZd9Zk2Vbe3RanxheQBiPcX2H4uQapi6N35FsjmcES8Aq64EXQmCzAkoYUg",
  "key22": "4UQ2SmzqHYSUSsD5f8YV1YVBPGe1nRm3nZwPomtuBmTe36xb3FVmFrSoRHAGvBJEZjLRMXnuyo5sXqKLeDAJeiwA",
  "key23": "2ukGVPb7dYXTPsvnmsfD3d8gENt5Mo6R7SPGBftgrrkZ46xCiWnpFKYm1zRDsB4Uhemt98mZ4rohdnCSHXxqJyDJ",
  "key24": "4jhXB13dg3dkzwPPMhLtRzBghGtZkY1fak1twmjye7Sq74VudS9kSyvu1t61cnc7xuyGqPcnbc5wPiXF9q3sejMY"
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
