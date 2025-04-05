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
    "2A8i58yE5DzofNnfQRTtrpkRPtCvm3bKFaG53akd6s6vGTWNaRJyuJ3hbUX8fBjasUziticgrNXiReaWAFPsVsRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WsMWu3ZCYihCVtcJfZbwkS5NMjsFFh8HpbF2xR7n9ZNofhrgadV4CENT8UqUyK8STGRqgTXDk7qAsDUnGU2xCCG",
  "key1": "3J1iHnvx2dsmKSRzcK2hez7CMeMt6S2j9gHVKuUsgMbtmFB5WKBUTDjfGCuRCWtXRT1y6vwuo1fzDnwKAS1orgum",
  "key2": "2Nk6otYQAFcrXNarcbqBz75edEqtPqB7V6ekyE8s6rUmSMCrqPNsy9E7roS79FLmNrUog81yTzRyxM8thvCK3Gh8",
  "key3": "Kc3afPTfxUCfkdsP1i3FW7SwRBWsjUPeHtxpPH2aucqGqYxka6kKnHCFqMecam7ZFCFkWgfg3NKhebXt3DPKEZL",
  "key4": "2Buo5CVKRnvtfuSMmNVdLxKnKviNfrpfgei8jtELZK4RTDhsSSwQN13J82Wmikn957WPjZSdEs2Fkf4CqV1zVnA",
  "key5": "53gJ2wpYhFG6xr6oy3pPhNvwQjoiGYNa5SsNzVzmZA5NgbdBQcTfgWRpNTkVzpkVpyXnFR12UmnBdxeqA64RTCfA",
  "key6": "2YC2yDTYPsm4iBMBknFQKqJFXPi8VHaJeecyBoYDw1oszBMbQUffGHGmG6XvYQWBPrvC7eGK5tkrqkKYgb7gdXTw",
  "key7": "4TRtTuBRwwhKbE7mraUWcXV6aNiKvNFoQrGRwjy5AjKxcsuNTNzuWDT5WwFikY72Rh1ufbuFDgguoRnY7qUmmkyG",
  "key8": "5nZqZEPhyEN5gpkDh6jvWRXdEnAuScs6MnGwSVQPBYoQW9ieEr5Dinz38c8gNMWeL48RBPxn9a1PnQhvurCQ9wiw",
  "key9": "4Gm8ntgue8VtF6GHE8ESyaKpfEUvcKsW3iyqVzrqkkYqBLWk52KEuqndygAgUq329QGkj2ZeFcx49xB57VNWJ4GS",
  "key10": "25ZxoQnu46qd1DYuGDkgYKzNGotQkLnBVD9hP1uA7rKAGZeg5R8XcB4e2essh5oCPSCbTmcDCW9pqxGmyynGAaQb",
  "key11": "n6pt1UAR3kxZMUutKHGg5qgNnCeycb8uronL1h4Qgmy8aK1x4VJ2YiwWvGLC7hZkBVNzWkMnzmpvv4WH3UYakfB",
  "key12": "LB9wpBpZTMtkJFcZc9cdEewsfhXETTc72gp7Sg2rXnV24ijR3EHQYkkhFnRiQeNMm44fEMZmrc2vi38j8axvxJM",
  "key13": "3RRzCyJaQBzFjxdyyt1hZDZDafYws7CeTHV2MwHg4FJjRpfAwanpEXuxj5qfUPdcVNtu6SxiZyXGrJyF6Me4Z6f3",
  "key14": "57gSqbwgnsSgkNSfvYDt2oc2mwHWmS767MUYn7HuDwjn91WNxMmPMVYoYxTjgmLHrceAESfrd7WJB5jZEr6gHSqq",
  "key15": "2DaC2ZqS7gYUkMpHxGvrsoAGehs9iDd75DSXhy7PgSLgXNfQtzAadayiabNXGncHK2g91m2vCm7aRJEBx9BinYJh",
  "key16": "4T3UcE1qmAcRuVaU9M6eMCgAmAQi4Qu2mme11G1pB4vsPrRSkKw7V45zKtZ5KeEJsF15Ry9KXnjLzEBn51ZvAazB",
  "key17": "4FRXbZapQoU9WXcrAzUAepwj8zRgDCMiFYoLberLJoNmkSt3BtZKZHf62jiXGxpyw4GfvNrqHTQ7zgfv37qA1s4n",
  "key18": "2bzaBtGh7hn2a1C7vNjrsvjndTfQeBoqEeyQNFzRnTeAQNwtt53Mw2WrE52seNM99dj6p6LFp7XENnWfh2PDbiRF",
  "key19": "3BV8M57Q4hYdZm2SF1jHpiaEztKMUsFSppsqhb3edVordZpp5ki7eTqy8KLdzmxodBmKDYU73PbyW9aoQr7WCEZ9",
  "key20": "4mejbB2H34TL1QZDQsibMdKKxxnpkXv4eeduKW14FGjk9UBZdEb1UKAtnHxE95ReFc9PHgSXwagG9fmifsZoFepv",
  "key21": "3TbyYUeukMYYSMS9n3oPBhRzKq1f58kDtctTFJHPL7KejJcYUgg4BJ3VdaxZTcFgUyv6nqBpQF28QtcxXfZMkyWE",
  "key22": "4JEaYZDizBnpQFjfbSahwX1Rbn2iUv5UKeLUdY7ev2oubUCRhKQGfCZar2uU9Adc2vcB5f688Q6cF4xouFPGqsSg",
  "key23": "XCm43R9WPMvbhtiZoE8StzKBr7cJejx7VvGxV7RsZVKmpPZtj9g2w4GLo83vZzuf5pjigLUpaP6beZFjWWtDDAv",
  "key24": "4YvoYj5wg6TFzwc47TYSsErL6G1Ztn9P4GuCp59YHHEdM1B9s7LsBP5taALe5ueR514F3S5aBURGAj29Cf8P4NVv"
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
