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
    "3TMhjaEfgcM4Sskc4ZnXwUD57Q1HEbSWEqukTogVTEVj3VLFVnXGvRot4mvMVJGLEvC8EeNBmCXBcQmtSmrjQFFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BnAzjBw2USag7EAXitVpn3hFpyRLiRqQq35gdtdKepe8ZmpbNNDfW1c3GJ2w1tjDnw2PpxemeGeqNjZaG13bjHX",
  "key1": "242VcEZcNzDu7C2EBVotvqPUskrqXmDnwzpp6mz3LkASQ34aC7JKexEScuT6uMWX1Q7Q3doyTAL91B7qMMXHp4Jh",
  "key2": "3zks72XLt4BxSKKvYiznCFXJfS5vDmZk1tkgB1vQkskUXeS82a4hweXQNpRVJGLE4C33rprsQXUkPKbMzSDjMdfo",
  "key3": "4eFeNHQxEVNmiCqWGakjYPKGPfrZiaw5Ps86LeL9KUFbyPNPYKUvTbscPZyTMajZ3TqZtAZMGCZ7C3gJvjtjnJDi",
  "key4": "4ogT2mtEV59EQi2gBiwFaBUR8wRfgFpHhNpYb8MriJ433FcqiG72Sfu8ZZ7urECYEV9KuH2YfEUN6eUVsstJpwh6",
  "key5": "4T81NYKnBVNLciAbRExoWu3fXDzuX4ek1Zx5k98GwvwmRf4iSLt1XAPg15aabXKifAygxNH2yhptnDZyjpDte7x5",
  "key6": "2tZpMP9pRxpjJwDcuGPZV9n3ko6au8Q3FJZLeU22QeeR3BjUT6sdWecpM5VuuxHMzRoG4gEZfiqMQPRKzRkQ1i7V",
  "key7": "2Q45dqxRQkahJwg6VRa3StqygAgd1tShZPvFZWeCDgEkg6d7U6atd4Kgg5DVyXExVpbj1KHY6xaRJJr9af3zmGc1",
  "key8": "35sq4FrD8puqhbyzAiK196DhdBjjJW1x8DjzZfPFNxBckJkHJzcSE3eUXoXAQ9BJDLEWbpHgrYm2DV9vyu5AdMBx",
  "key9": "5P3B5u3HQtV7rzt5XqjnV1CYfneX4w6yfoPYEqeJj9BmaRdqZdA9Q4bYdrpX7Zd266fGa5gH66uM5p9Wb8ANcsY9",
  "key10": "3hTUXWAsVF9uGa75ZegtCAEQc5xZRKKkaJN9oyuK1xXLgPHPezuwoXDmjvbQGPUouxAwapWyR2RvDHLUFpa7VdCf",
  "key11": "39WYsVoP1EgLhLNUYwgVHHM9Cp5ARgerkRkJUBwmACdAkXmvZZQKPhg3w8dWgrneAvViyTQUffUQbpXYTT4WePyr",
  "key12": "334msq2rrUfokWgV5ZrySxo8zAckJ6z1wyYJxXLsqe6ifPMgBCjbCGh2V2hifcCYWW2tVPst3xxPQ5Aj2e892Vey",
  "key13": "2fZaCNFsXKXRo11QZGMbhUhaagtcQftSWd86oQZt68XajDv8Vs9SQY4PzAUwG8s13JM6K2E343jK3ts9qojPfkEZ",
  "key14": "3ukgSzd9ghVfVz6buvaTtuh7yd9T1s8c1sJs4UAbiJfVd7TYwJQEgGPe6UnJ4MmKV6d9BBNnHhUeLXk6WzBZdhnn",
  "key15": "2WmYaTZc3Mf6YMETV1qVG9khpnXSYUq2eon17Yogxf5pUWia2oZTQesgCgk1i4DZ1duuh1ddLTHNKKEB1gPrM3P5",
  "key16": "66PXaohLkuQup86oxbM11nqJqUmZkT2V6hoJztrVTZxzvQ7wariBcjKgn9JkdxR4dtr4DjYKJXaUjqm62NhXCzMr",
  "key17": "v6uX24RngKNHq5v8Ysofv85SLuE7LCbkZyexxYbNKt7booiBSGren8gEzXiNqURgQtpes7Lr6mQTni7Nqh4rPWq",
  "key18": "5Tcb5TC8eUYLYEHeJgKYHEfGPfC3GkZCphBsZf9A5QLLXJxyAawaN3hobBvgWaU5B3RJKYaHVZf8gL679JYeqzpN",
  "key19": "3TURzghsoRDRsBmZn1vp6s165SXD9LCUkXL7wC6z6pDWeZ8TeV2Jise5UUQeqGLMxqmamuvdsZ8MdM1QBAiigKX3",
  "key20": "2XVp8Yvp17LrHx1YwZLqWoa3eH1AU7DYtzTqD84ThxfgzVcE27kXqQhqc3NUTY37QLaohQfo2dwVExSqcZaYFMFv",
  "key21": "5khKbFFvMkrpdwzBzQA3Yj3oLMrZ6r7RjghCuhzT5PRayG1JCmzg7xUrJdpkTi7sSJWWzKt9GvxSrs5C2VSiqR2N",
  "key22": "52yANsVfSUntpNcZRfvtxuaLaEPctyjXUT3WuTNDAZF31XxZoSa8hPuibzch6aKQ3oTZxpVESxabhHFAFh4es3Dn",
  "key23": "354mcUMEsijqRafY1NMhhB8tYqxnkpawKaPQaCmkM8ZfLa5vDDHBYs7Tx3rUszzNJePMLgimr5ark9mYeY2GqPkF",
  "key24": "Sz4LQHJYpXfJdq84kJZtA1H4qCdvKiNNLYazc4EiBKfvTPBbResx497ku41aRDyqtCJan2jLUMnuL35GzKgNN4W",
  "key25": "4N5yPRg6cjTigTyY5U1f6skz7ML8au6Fw3RXsKJE4DZx118Uzf9QKqG2vtEtUmraqdEAop5XRn1YDVZF7FezAY2H"
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
