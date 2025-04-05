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
    "2K54NuKqJSBhfyQmDNxAc3WhDui8WDhVizUyPbpZwRbmpKxBT1WvsuZXFXeP77HHmA8fJoPkqkENW3wjXmRRRnV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fz8ortVZcU4wKvX3yFz6xGicqbTgAt4B2TfvVbhsj5hZnbEaz3r9SCGAZdju5kUcQZ6iykYxa6U6jvCKe3MQ1ps",
  "key1": "4DYkQWpnSzT26KKVr3sXZokE51QTuErXvApQmPHgS4bpbX2Dqb77o3AGzuNy98wF1oJ27ivueQwm33bvwNk7c2FA",
  "key2": "5zucYQCDkJCuByBD96aip48Pm9QBDWFuEQ3Jj3WvFUy8j5GiVrDj58kjuxoA9yQeTFEJGiF1Ua8XcNHmAmg3U6Mv",
  "key3": "5jj9VoCDCs16iPYjsgkmV1vMKBQURQtPZQxXM7z3Hoc3GiRtUU3RXxeBBTqnRPVfWMYyJ92K1mQ2d2oTLoNTbiHi",
  "key4": "24ccimiPFGMRytQVNTeS8CgW1Vs3pqHhDpT81HzWLgSyQbaJVX9ZwLBgMjJwDxwN9WQiyVoaXGYFLuKzku6ii3jX",
  "key5": "4dPAD3Fxnxh4NTMiRzVwdV2dkLgkqY2Z9mDQNVJnJmbVKo13XYGBmw2mzc5PtX7ZK3zWWhfGHQbh8vZB3RwzpWrw",
  "key6": "2A6pJRE2aBKjeuzej7VM5dbVcJorRUYt2FjDPXQ7K2HkGXwvPjXbPzEnkp6bT2tFGjkNQkvnZpvy6cmRQJwtexBL",
  "key7": "4g3eHA8unxA3y66cj3zKWvg3wBEQv5gs2zDhuPt93PpUbySPHXMpz13Hfxr21nPYii9qq6VHBCVdUEWCniZSY7uZ",
  "key8": "2fM9Q65gr4WLp9vRGo25U4dyaFwKwG7uEpxsBWwv3eJvg7WrBwFYvZaxd8ryWb8FVooXfnxNxDp5CNjNiJFQKkEw",
  "key9": "2UH28zEMnejzNEnF3rAhLjQSBKMH3WDqDYFZxEArTT3e7NeuRhBFZx19eumsWCYpMFdriUSBrntVBW7dGeHLjSCb",
  "key10": "oUU7cQN1ixukt8wCYB6Na3WLoE1a4RnV2V1PjYJbJ2evQmnWCBo4AnX37tDMFSrC7s3LCPbJBxcj2QVEDGKtMa3",
  "key11": "2LDWSrh6kxok8ai7CWpYnNzwYhdqegNMw4re5n2bcbdn2xpSKubbLnx88cHxj6dprr1jPpYBzk77F6mnGLQ9uYAx",
  "key12": "61nqiBWUuJv8m3BkhTq1MQepTbQ4GiFPzVKtt2iK6R6EJjb7EwANA61kTSZ8viA43hrt2pCuhpkew3Q7q82CEpNe",
  "key13": "2QM8pHGyVDq3twK6NHseBeuZCDfwTR3XnCZUmrZSpsWcpvhW8BVFZiT8UVSP6dXiQgnscsNT1vER55y4b9PGeCyj",
  "key14": "4KVCvsDBiNnTdtSNsJacBuMNy5XBfRLzHtXCVCuMjQrRYgm8KybcTmVf6KEmUMVCTMMssje7j9HzjAeQ5BB1eAHu",
  "key15": "23dYsvdhPWjTHwnexkpSS4xgxTu2rojeLzD7ez6frM9JcQaLrvxhKrAtFzQiKJqx7dABYDQYqzEmv11DrVRUL3oJ",
  "key16": "5ozdyeyvqZpEh4DH8hzWkS2BXReZZq8PNSVsYKGDgzRK8MUvVGfJ8BAFaMQhvSjexW2fGQFJar8jysUSub9VQdke",
  "key17": "5Gc4xMqB6nSJfw9bZLdRHJhgqeCXuwfZjk9yrjEkMGCHkotrSad7b2Aw4QJZT4QX8g5KTy8rLSEmY7A6MiX16S2g",
  "key18": "2juk39fQ7Q3pByVFgK2HBgw5tDBNRT9pFXsSPR91FZGJ9pLXvvzxDDhdCbUZpKZYnUXNYr2aVyLfGwwYvuAGz6J2",
  "key19": "5cvUaKLAa3TMwZEFqLu9yDy2mCwTcicvrVzcQdCu9YrEounMManTnDcAkTsRWtZZaNDv77bNAyKsbbMaXberknB",
  "key20": "2Qo94n42PmrDwRVmxKuWaEQ5AKoceC4Kt92XJmxMhVubmSuWEApg6XST3kCunbTGiSVnwyFPd9jeRfqbws8537Yo",
  "key21": "3GGp88A1NvJ1fDTwcTUgTa8sz3p5tsZjeXKpKYdJK6zRXhC38UmfUT8FWMwe12YhXsxGs5ApZtC9PEkKvs1KjkwU",
  "key22": "5vsfa5m9y6JcLaWjfa7DdqzRFvuATzDyWia8QvwFxhNhi5UpUoTysEWffPFQ4Gj8cU63WdG5ms3r4zgWY4VZ8aep",
  "key23": "BfDhAtJy6NowSSxADA545MwZBPFu7FB2ytWndx99L9RgNdYAjafztrwmY9SBdCUfY8Xe75VEPP34i4aVCaiPxWv",
  "key24": "2cT2DW3TENBgvR5upQfvejU77CfzuzV1gpg3b3uWWvFn5RWzZz7nUWTxWW2URwTP12Vf3BqSLTSVo9TrRqwvoudT"
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
