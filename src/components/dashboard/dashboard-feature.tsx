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
    "3fKrtcvmaA8grJgAUoYuAoW7T7r78SfkzZteGf5EoJqUKFSN6nuJTnftfC7CqCSxJBvtk7zyKcMzoNF8nPXF3imC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22CzzzuVCY9cfgw65CABnAygcU4DovaiKWVwmsnYyVhBFYYy8NjE6Qy3UUpQ5F71GAHjHusFdwgFzvMrriNnjwPn",
  "key1": "3CqKkJPR47CPNQKBEaS4e6yT6YkT1NrLYQhbsaiAZtKfmEi57yuRJo1BHhpq7rYwC8CBaEa15PVHuKM96C9Mcubt",
  "key2": "3hn9L7tQTtqB5EuQiXmiapjSgj2oL6udkztajaPQd5E47sF2Pds1eEN7atBd3i3vPET8B2aU1KLLZrH5QK8p9ztr",
  "key3": "3Nq24FQcUf5auREPwQmQGu7aJu67dLCWdcKfTikJHpxorUk8ZxNhzAcdJ98rcLArXeK3hsMwV6seUVmE98ZUDkKP",
  "key4": "4V5AWpgNyep6XFREHU6ev38a7iKbpGHd5L59D2KZkUvRwNfwBjvKthQt6cAK4tHfPsHo7j1fRV5Ggdv7Jweh2dJ5",
  "key5": "Lg5ab4XiepHhnSX2Wo1rV924SVFRc2KcM4t6K5YQHFj52Df4eBzf93FM8LpriTeaC5kGHW2Yx8aZKhh5iEoYEct",
  "key6": "2fCkP5QRzMGGmhzXWhooXkfEBZir3MFi8m4w7PeFqFvjqs9dyZm4rduPzuk7RUSgPD1Nk8tHcy1EBaZCy1Dp6okS",
  "key7": "56egg9DsRViwMQRq2KmZRsDCFowGYt9mK5ttGfYfzG3ZAn49Urd7ghnSNymJbR6F7uYLMzLs9JK8MjbVegwV1cyW",
  "key8": "h7J453Aps5efZ72gKtnuN1hDbX5TGbRqTksfHN3WSCj3RJ1ErYa1NQQiYX3rEVM6Ucp9fgXjqDnK1EwVdBKW6E5",
  "key9": "3eWLJNsBRbzX8H5tgrKTj4WzZW2zUtV5u2pWtC3U4ygTNAnhkFHCZssMkx1pguQGRqRCfUbdxQK93YBhX2CERTVK",
  "key10": "5TatE7iGScPKVewRgUTq1pGqkZ4LLAGALSMVbczMgt8djTgQAoe3X1wGjX71tnTXbCLrN5WY8zcHahpBW2iWQhsd",
  "key11": "3Dmx6G7YGKHm4k9yYERpZu2QaxqYbiuPEpbH1GcMwKYRo1dhA85dpngogKUZispRZxyYYC35tBs2uc5r5Bv1moE5",
  "key12": "tCXZbYCbfsJMqNh65sxvWTPEPxcikh9cH2rA4YqckMfaiLdJmZVwHD4ShzgLY9PSqunMBMVUJVteVCP5rvTndBL",
  "key13": "247s8HtCS1zAHJFoWptc8A8rF3BUGNPU3Amcfu4otka95VwFqbwf8bW8sA2zmg7k241Rh7ciLckC3uqwXrJBGHbb",
  "key14": "4BjGk6SP2HNx9Qr1xxQR8o3N7e4jC8wG8HbEFWNPAZy2wHrjGNLtbcS22vqXehMqNMXwCHDxFqvsiL6jwDnoHswZ",
  "key15": "4GQMPHJpz8YFoEQ7jsKSdpM8TF2N23LR7b4jyqPQsXWWkuVnToEV5nv8EbHcDgBdSGZirSw9DvHUdWMRZGeENYHY",
  "key16": "dcoRBYDmMVj28urE9buJS7oMo8iEEwo3RUWiinGKfKy4WGyZwssXhuH5frD6YN5fWEWrYq2zxSjX5b7T5ogQYY6",
  "key17": "inGYKqHxeeUqN31pXWo75yzHReQu9A5T3uR9HybRajh3WuXk6KLY9kXDrsNywnCUgMBirgdXe1Zn6DZHLRtPU1X",
  "key18": "Fh9zyLe4SV7eZ2C6j8a3BDzYgRamgHPSMLru15fWBdyKY5st3Z9D8GUyUpnvh9um7AQkzseCjNDmxD6vwm93ep2",
  "key19": "2dzbQuzvBbBrqj8iXzNHYvAP3E9bFNf84VGXXjZsciSnUG2uDbZuZemG3AhPUoCYHguBVuv6dHzFBoaZx1V6Zw1V",
  "key20": "3ndkMAQ9mrMnav7gqx9saL6pGTLGKiT4QrMcYSvTBhSZiLStfNMDz7chjmNrZinpXh4jnxka6dZnM6kcFPS8xxKL",
  "key21": "5woARBixgeh8638QVUcstpCtpMDvifJ2ETrmzx716fNE3bxq6PT1myUZT3KA7tSck934Ld65Gt8SiSeKAKSBVmp1",
  "key22": "fHEjy3wX1zn4G4JNB2gCEdWhjfzUV7BvK9kdrWJZe1tFAJh1WqfR4MpzQVdQW36m36XPz3MKpHk8MmrALcnXRdd",
  "key23": "2vaSJnhdFjtoLuAp77xNrFbYt6t4DHmFpUuXKfPhXQMrELK7CkxUff47ZnFdYV8Z8x51mX6gSc8VEePQsUxrJW6P",
  "key24": "2SPMrkxbE4aJRgx4kwkvexofBnkXF5Vkq83JnBgv32HsFJPpLMuqJsJ2rkt9nQVYBaNW9jcA9qdnAZGowtJwb5oG",
  "key25": "3Wb3sJTjyWwcgXch66rnDjP5tsb3eRmAFZqkcPoC647UEJbLcai1xfoQKMUFaG1xV97wZGe5HVq7Fy263cc93oJf",
  "key26": "3W4YkrRDsb9kSAc2dHJ2eNyrobVkPPAmHjixsU3skcNk3NGcFmBJ4vp3CvwkE75H15shv9MQ6eZfueBcZ3rJANiw"
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
