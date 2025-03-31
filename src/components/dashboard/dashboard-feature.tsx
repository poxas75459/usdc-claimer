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
    "42V5X9tj6DudYiX9Ug2XNS1gpthhX94V1ZDmusQ4Tx6HkdNvufq1LFnu4Sw9KeVxTq6uaGAgHEVVGjCy2rCSejgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G7ZVee1sU6Jmm9n6225g8n9mVB53pxks9d2zfAuVBxj5PvSFLM1TG35XhWjuXJodL5efZFGNA1tMSe2BfA4Ncdc",
  "key1": "2V8ESBn4wStMcTE2Te5jhkitK1uYTv2qWiTA1F9UJgURbFTLGEwLjU5WRafiQa7roZT8zoPLUXEjJ5tjZbQEXjqx",
  "key2": "5eMixbMKx9hHMzoXHRDBRNona8KkUVPkfSkfx3aPvs8k6Z9YEAQTNYc6uSbFkvrjfzAsjiGQf5vpDvsXf35H5n5B",
  "key3": "59G9G8fPFQMAH1JjdDJ79K2xL1okPaTGP6arcb24hwcuPmRN6BHXJJDmYuBpL5bcwQZwB24EphiXnFra8oce7AfU",
  "key4": "3gdUPgqJv87swk72jPpoonMp31rtq2PehydGX1MgjQ9ENzVra8uKFocjdLm7iuXxuQmY744H6b2H9oAE85yozBR5",
  "key5": "48fs39AY6wNP6VmUQMJreCAnDtPWtA7iPGrzY5HezdGugpDEwzETcLTGzRCcHZgzJGmnHHfNgNLeQr5ppfEPcXL7",
  "key6": "22VVSFytb79E5QfMKJw73MDg5pbPY3W9zhYVsHozNxEvT3ZanvmyosFxrTbxfz7tdo1qU3DXcm2v8aQDWuLDAH2K",
  "key7": "soz5YLHBMgB5QP7uK9RxZSRvHGAWi7U9tpVvp4Sms2maXrizvu6KPJeGPHXigGsB5J1ZCanALjEC5t1s5DwNWwC",
  "key8": "4m5cYgCwEwNkUPSgCjU4YwxqPJAaA9PUn3pWwoYsiKddev5RiRBR4Nqydbah3mWEEyLdX9Gc5FWcFswTaTg7SwiC",
  "key9": "kT8ojfBHaZDFcA8Xw2G1E9wu7q2cKjMMv821nTL3grZs5ZiAvJXJWWrWbYfMqTtwf3uhTDCy8ddqqe4ALpVZJDz",
  "key10": "2tQdbRGFVAL11BLckq5PRHLHPRHfpfySv2Hb1Kn1X2k3mrN89BfqfD7yqDNS9xfiKexwVWpjjhsboKcLBEFZyMDt",
  "key11": "hbTBdDgWXZcqFcK4E332xpxoFASBro7Fs3HbcPUcYuxk2LVyaqC1iD7ozh3LQgi4yDq7hxZ3Fprg77LuiMpBzwB",
  "key12": "3Tr4wWxkXD7CTfhr9VMaUZ7vGzRS9kWddhCdXKSsdArxdcjnVfrgngwNbZQhy46h3uCASdfG2gHoGEDQP7Zgd7Qw",
  "key13": "32kwmifZbrssAHamN76ndmrLop52vN3qLmFWgHbhS5YLuRnpvx4Rc1TJfZKuwQ7H5MuJdedP6CkqdYoG1umuzTRy",
  "key14": "5rPj5Pd38Sb9AR2Bu6My5zGmx24iThbKyfnR93ckXp5iFcZ8ziiEmsXnefLKm4dW8FW8HEaAjikK72RaWAiHCWrv",
  "key15": "29tE6smrocp4fhzJ3RZErNXD62QcKkyhfsxszeRcQHRP22yFcL6MpGeFpZVGuG6N22d2uT2Nb6QPMcPR56URyJji",
  "key16": "3UtFpcGfVZDipX8MvF7Jm6pJtTjBGrBjSHTHMdgpXuJxRqqAE2BenNbPfjSo6MTQkUQNWLdGtN8Jr7qf1YQ5FkEY",
  "key17": "27CxP41VNqovVwSSwFPA6aDUhEYbKrskL2wHZNP4xee7e5W7dEtE2uhH5Xn6v3QW16u7Tt9zHgUGtVnGt25w7Z8X",
  "key18": "2NQjt9Mfw8MJMuC34A39AG2FRSuyCNFi168yg4gGCqg5HvSKX3Wwhn8zc79UVzfjZM5MxLQmTiuUWxyoFEENLsn5",
  "key19": "52xRJRBprqvQcAciMey8metAuvqcWqXyENupS27VY23wZaSCU4yd211Yf7jZ7NkFH3S2SzridXTNSLnj7tyyaD1U",
  "key20": "Xh1xugVTeo5ChDzoWwrwe8ZxxUS8qHVBGWMVKjyDMgSygC2wLJbBNyaooJfyAumGkw3NTT9dkLEEqhMneACJmWB",
  "key21": "3F6gxT9wqXXc3cBzGnDBhJWdsEXPpbKEdwyySNgCmnHjEMMn3GoABU7qEafwQz7r4gfeUfYAhLh5ranjxGyc9Lgs",
  "key22": "M7sfcnS9NucbK7wzACzKxZ5WHd3jcnGHid12ExcMZ3HfzsLY9xaBFWu6YWSgwTajgBjjEmPcdtwHSHa7MR3LsbS",
  "key23": "4a8sEmBdTy5nErwa5G71LwPNMeuTsQqtKLoHYSb9dKkkmTXKV8J4MMBXp5bzwzSWTCC2cHdCfmevwHT94PoeSTjQ",
  "key24": "3rNP7zFmTdDD3G8LPFiCEEtRpoFgQf14kvKtJaQGpTbtCnVjkpC7df7uQN7wH2ULnpvDpGgx73noK4ja3ZtHJvYq",
  "key25": "5HjmVBtMR5yT2Bq4Xzu1qfvGYj81it6KCdo7k4kfYwS2ywdMijPj2xb6ARLypt3kgc3iaUHLhQHZmvgUhMjztUsh",
  "key26": "4BCJPF3CKXUut9yWkgzExhLtMTw8ngesM37DXyxJPADkSDaK7GNybMPm1hvzZaKQgPBiZKQ8dgvcaWbyhuBsDPsy",
  "key27": "5wXDEQ3qrcuV77TbCBjPGAVfJbuGXc2FJ7XGJFeFp9Zy6uDMvSvXAkqbhE5MkoMHaPwWdWdFUzxZ1C1fqAYnfkvy",
  "key28": "z8meiWMiP4H57wL2yUhjpgfsQ3iPRLbNPW8BubRyxYxuxb1a2wo8WVAKBn1HZkBeQYHyhoZpkKiQGnJ39Lj26Bc"
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
