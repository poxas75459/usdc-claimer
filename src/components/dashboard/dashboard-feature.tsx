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
    "W38tu9RhYbTckpdVcRDQWKFxbM7Rn5VW2F4mDpeSu5TRbMabHyCDcsoK3MPJXXjkHbf1KEbwDTSvqrU5KAPVRU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fxxpurL4XJgHHBG8tjWHvkr9GmY6aaURXV121SMwB2c7DDXZQ7YLZc1ZdSkmJo2RCWyovNXMo2UxACH4DAYzNTT",
  "key1": "2V8NsSG1oYvQci6HgDjGox8EcW8g2SVY11zNrizgRXzStVBRxHxben3Yt8nbtCTMR3hk1ATvahMjQ3rqAG2BPPRB",
  "key2": "3HjEg9p1wmGJfaw2QRHHumHi2MA5ZkQiL2gfDHQ8z4M9YJfvzAeyX3aRcmr1chbjoVt4e7oFGiLqwVRfWuuzBjw9",
  "key3": "L5pqfFPUVWsqCF9i6QVSwxfcHDcfy3oPoChuMgoKLKJWL9bzEFHiLrTZDYZd9ov7bTryskiYC5HKKTiDin5mNMg",
  "key4": "4AxHUa2Evu3o892gfay8rp9r2RAEgEeKcV51gJ4WgbunnePWeBuGxK87ZfZeJZvzosR4x5CiAxELgTkY7t1ov7j6",
  "key5": "5MQGeWwajagMyuLcWd2cSHpQsr81v4NJJREdE6gCjkwDQwFbPZu94HiYNPBa2e1CWU5Z3Wt7kANPTapdsapyHEMv",
  "key6": "247pqdWJqxuN91BJQTcLzqRLGXaXnMAnmYne1LzT2cGqsBXsXwBJVpZsnYHPaDDDoRA8iNLD5VAxoRRxYzwkTLXZ",
  "key7": "5foW5VeaLyEmCoCuq4My9YcycvnwCajUihYKPrPdTwwdWUqKqbAYT2PwZXjk4v9DMdndmp6VGRa7cEuFWe9PNEJj",
  "key8": "hLFespAYM5Vn7u9dkdBVntEZ4uHddrJEaZYXwB6HvcjPijqA3PVqNwYDJTgvvU7XL7ny2ZXo1uteuxzYYzarEju",
  "key9": "4NCbhfZcLFpNjG9MydzV7mS8UYaBZCJ9XgvcubPrEHkB9Ro76ETCyQC7pcaSE5JFvhL6ZeQWn6nMe7Jx1xmjfbPd",
  "key10": "keLRQwptt2F3e1n2C8ytg6pePZE6ofpjmBoPfSRc4vxE9XTs8cYmtSNJUvQ5oYGH6n1Q1iidEcX9kQpbJMe7dho",
  "key11": "3H2Np8RD1pVjJ33bTNjWqWCe3uyn2A1YfuNTU8abPzqLrACA6q6CMaaFMn7fPhEW9tBzq9Euz78XSR59iDEUP7iH",
  "key12": "4nyzg4GfbtzR34HMXyE5jQ9Pz6aFXYyzNxmK9EPMLC6m5jZndKCjXvDZZA5G77rz5cAdpY7STPLq88T3us9Gg8BA",
  "key13": "2KuEYR4eV1CxhKbmLepV9JumQNNf9sZFdSfExqoncX4SQsYebzphVKPdRh4oW2kEXJWtL7eMCsZLADZY8LtLY7ZU",
  "key14": "q9cEq4oyZm1tCKKUAeUWH373sjbaqw7SCM2k1nysjkYFaHjAmxd9eZeTzm7vxRNYZheHBh5Anp1VMcM6i32AbGB",
  "key15": "LVVduByQuQn3tUxiyuVsDdr6csoshate9R9DgyJmBukZZrXM56nJ1EsSkW5oEZjDtgg94CTmXGRcaKF1zft63w1",
  "key16": "3KVHLySMU6AUt4x41bsBALj5aXayxzRAsTgxnveM8gCrnvYhJattf8prkkjzh4paoQqvRATNGJHFpzvByznbGS4D",
  "key17": "3GJ35jMo5dh8NfFCXYXJr7mCaR9pD9ufz8Cj8ZH5HuXJuwiaDxcxusq7Vwb7mY9PAmLfYfpahEHbqfyBkcg1Qbb1",
  "key18": "3pS6modTe8NhRpSrUekCbk5EmpjM9QhmeaPLEGAZGNHVPjH73eTnE9RDeqRHH8RePeJ13wPqXjWwTpjNH2ojrENr",
  "key19": "4r4STvDkqieuQ6BhQD2vhYVg5c4SYzzGDuaUUZGj1TucbZHvYdsXJFoNayReaL6rpKk833Moy71bgtNZ1yQaAPAn",
  "key20": "2iuica5jy7KrmQoAv47F218piiGJoeYSyFotGx1g7SxmhhL5ZC9EGMCXMHsfxV5uXeJ9NjRokgo9UkU8DshKnDRt",
  "key21": "6CMrTMfBSwFqT3b6TBnoPEZqCLbHX8M4Xburv6Ueuwp2HNqvr4CjaCib1B8MywrfwAUHFEecbHcb6absEUmrqk3",
  "key22": "5Nnj4oE4bwYvKBPWyXu66RC2VFMxzGMGfKXKp5heiR5LkC7z2EnVcbPuGK8BDzQijTzPmvWU1HSvjJzP3J5iN6D6",
  "key23": "5w9gyWSkfcJJ3d1rJgPSJwBijD4DtMFcPvARD5FKo8SY5oAFaGk8MYMSDDbegrp7dqyv5KMDyVSWt6LdLBaYt6Tz",
  "key24": "4nf5dPhAz9ggQD9KUeAqoGvBrhkTpANbF4kMK3Evg1BZuKpn6f2KrGNSv1n3dajis4rpkmrKKGkazGDmygLcuUFv",
  "key25": "rgC7bJcmVSR8QzPQBrpfLU1NBSkceem3j62okqEGjTqhhEZuwtBV9GumQGy3KYFtt36WjPiJvTFrmLpYSVkLN1U"
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
