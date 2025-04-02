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
    "4L6iybx7UVLxXWwwYR2A1DVMgJxFtbTw8L5XuCVLKfXmEoEPqCyWTpxSPTzJgCRKGsbPSvmXpViH9kBZzadXkDhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217ZWUaY8fo3mLndp5TK4gUp9aubnLxvUc6S5pxfdnoUWjmSNgVnhT4b3K9qgyT59ME7qvdjoD6UHb3j9b2E696m",
  "key1": "3BAomMRQp29z7onUC4kUHeLVj3XCBP9VpDxDkxagwuQtW1gzFVKyzCYqoLBRmvhypyZJSZo6UcZRYUwZcveSnu6v",
  "key2": "FxmwUFtnA2QrVjDqaPtmMsgc3QYH6AEaYRQUCihGW36fQqUZMFn3sgtrGaAMUuS9QNPjuhXKUD44N9stAqJzZmP",
  "key3": "3yQFQe6DVe6zpG39i97kQmWM7i5V6sHLNcu52BkCWQggnNMqKXRkyZrLuUJcxKfHdHJncG9nXM1J6eTTTc9inn9u",
  "key4": "4BWAACb21B1uvqbBZ5pestE9ugFWXd8J1XfLNQNxRDDNwLtbyhWu34GeFa6KkLcbUDPWCSdL7W7SSh5kXkUjfYPJ",
  "key5": "3KR2yRj9xCfMAzhiJo2KKXFHEsGRPsY3nfen3piSFn6usXAEdMthknb4KVknrBFGS6kg3cyPnBuSyeV6Sst6MLtu",
  "key6": "2dmf5PBEfVzkPS9MUbY6yUNRGB5DZPUT7XooE8UvRUQVLdfEgwYoRRqPDcwKLqhgCg5emnz66rduMNjdk7pEeU6j",
  "key7": "2WWhms4uAPj4go2kzJ77f7HdZSQqv1m22TAwcZWv7qeNR7RUNwMVnqSVWQd6JgKeZcTmukrQitEtN4Agtxk89nT5",
  "key8": "2SjtBTb6ynKRUxgZWcRDgG7BSWVqjUUiUwNU3dtBFLX5rQXZr3hG4thGe7FZcX4dQWHjRuRmaqzSirqaNzN4tbgk",
  "key9": "3J1JGkvEWT4LZMqgv7wviL6zCPbPYJztiwpgcn7fXsHWWAZaZyi6wAMgpPD6rHdi8nWVQDaKEgoapXZNitScC6qk",
  "key10": "4aK4SzyrM1kaJf5Ffde1tkNchafXWpMds5BVNiaGQFetUystFcBXxKoPGHEdWvGA7RUmLiTZNMaYDuJjFB4UYf82",
  "key11": "59ckr5yW5Vz1BCLpo2k6e4iNbAztma27b1dHBcUyoTwZEyCemw1M8n9fnfR6uP65FDhYSVKYVeFhzmwjJVV8FUVs",
  "key12": "4Ho53hRTHLd9y7msw4jp61EoGXJ6wzHnCTVkcUdCb8nXeDbF4vHWDvUWYYZQvy686JQxK9mZX6sNok9PRJHXPBW3",
  "key13": "51PBhZp3P1VW7FN6GwncfUsZi8ywVYBMzHbbngQTjkAqf3J9bZMSoaSqjpt1ELoyh26YmK62u8rYCAa3aYCpg1r",
  "key14": "y8RG8i1CjjznY6hCBuiJcmGcAR22BngHo1DgDCxZsNxSACp72PizKsFSjxAMr9okFvGC35GNN1sTgCvEgCGi6i2",
  "key15": "etRWLRDbrX6DQMTTgybtsPQM88v7deC3Qg4miJQfEAEDnLcrXfrjt8dJRHHUp21tF8oueuS8dG4mrGpKFoSuErQ",
  "key16": "2e1gdc2DcDd2oXQxC5VBnNfa3wfQyqcvoFNoZaJvgM2FQFHjRdK7pMxq4Hh5NdhLqvEjcX9fgfw2pz7FmoGLM8j4",
  "key17": "3ejSzqxGudXR7D3gZqXpL312cgfy58ejoBomsauDvN3gzewXjYpaM2uuhA64XvpuRPSumoMPzfM3vQWq5QkqKaHo",
  "key18": "4ZWD58aaDP3uvuA9QHAGu3P3CBo2vBnGDLuy93PupBQ7p49s2o25eZsacw3Hju9d5Zqe2ZZoUWTcb9ALRp9ZfFxS",
  "key19": "4wBg4HQZsPgS5AAz1MiErVY1hYNXM2mEV3EmzFPpQv5XE4PxYS52VFmv2wT1JmsdncCWi4acbi3RBiHCgV292gLy",
  "key20": "exZM8Jzac4mtxeEENgaMKfhtgjxBXKFgWtTe6RDRL9sn96ytvopnVtjroem4K8qWYicms3q7n7rBFeXnbgQXUQV",
  "key21": "7u3LRsWtUjiCRrAW424DJt3ei6NyyjcXh8bBdi1HugWmrBQE4DVpU7spEjdDGgoV8A28NeUbK7XySNfr3a3benL",
  "key22": "4HUrEeKYDNaNSULNnEL7mjSysrazRvugUmVXoLu9oBD6WtK1n28ua8rxVDuW3KN4wf4ArKqemV5egVkBcUJ9BXwG",
  "key23": "3grMaw6AwaLbF98DBgYPvAopXmZUqDYHuVzkW39DgU4DiZjGTW3TKUQnET9VdVDejsdWhpBBj8cLUKAMiximrYMh",
  "key24": "2VernvGuC7xd3zZPFhfmRTbKJArV5Yz4uDPitVcqWPYBGKuEq4735E4pz7cavw2YTU6AL6qgwcYS47xz5gRTLETP",
  "key25": "4DHHccFzy9YZyXnTASnP2jZsHNk3kusjwSvs7oiRzwNRwp8CzinyvkkkQtWPuPMXbhojrAXhLyUYTmJnewx6Gsdq",
  "key26": "3nD2Kt54NnxZnXQQoaijEZSp8zg7kyW1QJFe1ZJMirFazMZnYqGN6TGFsddHGG5VEPihJwchVbgm2ZoTQUJxYpy2",
  "key27": "5YJpNsUeEN3oRZRxnVVAZ9u4VPfpVKHctwT1JPaN4rf6jRgr3m6hTWcwgkrKYcMotWvJTKVZptjvForFaKb1eVXr",
  "key28": "LgGahA2hR9EX3kPxMFCNHdPSM8URffELqF3yoEJTga1GWoCqmSiEyPAQmygQH5LmeSAdyrbjfTv6wFANCdSvtEZ",
  "key29": "33fzSsPdHsVWXturCW1iqGxV3R5V6TrZ7KDGtJNYTsZV6Rqvxy2L8LoSpDzY2Y9ptU4kpDjWveybyt82EzJtpj5x",
  "key30": "uz6HP5nMuzm1sHb2rRbDvihBC9gSK4yEX4AyBXYhMDQWygxufnRCymF5bQpdAKNvNaJNzQPpBsmpH4Zgi8Y1XcA",
  "key31": "2x4TCZ8dnVpQKXP3AKjs582N6P6MWsA8d5xva3RxBHih2i4bqhZZv1rJpSeMKjLEGrKVXHdmJS3dSWbg6Ano6bTh",
  "key32": "3pzLjqEhgBdtMsCHSsLZJty3psKJHxmcectjWeJL4iBC4CZ6tZJqGoKf3mot1YxQ16kCmH9TAcsqe4uEsAmo8Wy7",
  "key33": "4oZCXpqw9UZav6it611CvTLWrEWR9yAZGtU9xosg2QbkKsH6oWm7xSV1Jxc5ZuHZzZf5phVDmRtewSYSmnr81wnw",
  "key34": "23PKJXbxeViZk7APwkKisjMW59gTABPnh7quuZRvPMmqdgLahpg4WMkcRt6dSVbddoqaNxFMHwKEkFsKhZ2oUhBN",
  "key35": "2BLCjURXPDB68t7hr2qbvzZqwcm74KJZw4mQ5fmJkBNE7BAbRydo3p8PMpyMy5CRn8Rb9nAhueLRKaTdzT98eP6c",
  "key36": "4vJVeGTbpfvLcb4q5SwPrTLpdSi1hYJ1xJisSnkYVnL8HzQMFrAB3U1Qtr7jH97LqwwHyXydbWG5qkWogmGHd3tX",
  "key37": "5mGxMu4adBnDf1qbVmMQoYYVMpMVPycE3FqFYVfge2xGbo63fAAo1K3QRevLRzNvHBs48LYZuszH9cVxqFbWcrvz",
  "key38": "5to8rgmhVrU3ie9M4RQmecJvPjWzRt8DJidHZiyj8ufv2ErbogoVTQWw6YTgA9wR6vUpfhA2kYw17gd5DNSsRcqY",
  "key39": "2AJ2oSvc2ndNapKqeH4woN39ocLB48TrUQ9BdkeXFwwCW1QpKXoeoU4BoVojTJu9VpVbjrR8zjVNPNXHTgwjEsve"
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
