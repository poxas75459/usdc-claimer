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
    "2TU5fqxQxupsodVyoVzm9GKkUVECiXv9DnsiMqKxgLDaz3mvvFf2ECQQUPivAhFRFyQH2PeGSA3gu2ojQXfzqQmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EKTSomgiHuc3FS3Gx6EH6ow9szvKPzY5UHVRqKdYLZxRrY9ctiGRpQ7LFnX27aCBXcnNiGK3cSuvWAWrwNTJBLX",
  "key1": "2XgFa7qNzmwZjFbqonH98vGzAJR84Z1iqbeJ1H4RXnavPnvNqzkd975K9Lspp5TTcYx5F2gL7VhrCs2Mj5QwdfYw",
  "key2": "4ssGmqE6Y3konuu6dvHHpi82wLZQwS4mnS5UVcHpeSVDLWrApuVrEN2uf5qyGKzSiW8yMNfD1pnSvJuGAW7DboPT",
  "key3": "63ckTZL2Jgn12D2A83bi96Z6wEsqT1hdvdEgAjSdMb1JHMkJm3KhAfsnxz4PEHaR9gdXbhFXaZ3aw53RGy8n5tGe",
  "key4": "4Y6Qj7E2MdMXhfi5LBGJ85A2c7ETCXVPxBzVPL2fCa3c33KzgQuCnyC254xKNYyABUhdDZYXYvxPWDbdkPFRyANV",
  "key5": "4xpX436svkFxD33jpfvu6TLhBzsBrpLJJ6tRhGykqndd9BntscfW8m1zjQujsh8CSf2pA4RgwRWH6RHZV6GG7tUh",
  "key6": "4TFhWvKnacP9RUJmd3qisDriAJeJzCiA6WmEPpR9fEBHi4zAfSdmhw7VqyA6qjEXseQ4J9CjdzCUCFCEA4uLcc9u",
  "key7": "apSjwkHPr9uB7si6bYSDZXQQNdnRNqVPvX3FgZCNeoyw5k3fr5GfNoRDkn4BWMXX6ogeXTczfkNU7QDRWMM7Xtb",
  "key8": "44rjPKdgDNMg75xLwgH8mL9t4TSJugFSDdYnYmfct73duHwD3U31AGQyowsbq7wQ5LRYVut323Gp5veQjuPvYrWx",
  "key9": "4DYh6WH6WxYWoCVY2o3akarww2ZzjctuafLwbTaKQXUydMttSr2ZPjaSrSAjyfG2wjDUqXd5UaFJJFrMZYPZAqte",
  "key10": "kHtpEcz5V4oorEBypqVR2koyXEVP4c3xH5JtK2vRBC7cXjsZPdXuULCrizE61t8PhnZSgXutGrqhhmkmjUPVj3B",
  "key11": "42Ay3XJ9asfZBjHunjDkMhRcV8G2uxwvG1LSEVuPRj6iHvWRzbb3PiXhcFM9xss1483tjK6bVQTfGkVPgw2QbP38",
  "key12": "3PpNcFVtP7yh9ZniuLZU5Rjd5YxkYTpDect1jz4WpYkErQYUnFXKLDwLFQcjddmPL65UEhCjydk69CPbmV2ZjTew",
  "key13": "smLUEvSD88gZv2juD3sPKdUkyEEG8JLrgPTd5vgSX7uBXCRPc2pitG4cWoPURUdj2HuSah2zoAXsxJFwubxzCKm",
  "key14": "4rZqybov2ikb9SZrrQkst3UrjcD7MJCHQAogDLrtCVFcHPaYVHiNUcz5uxMX9ERZnSXENKze6neckRwTt6qcbjNJ",
  "key15": "5NZ6uHaxDkaVsh4g8dNt2NYKcuJHaAR81iogNg2fEzUeUQZokM91qEJbsnoRE1EP8rdD6cocCNu4d8dSR4jZ2jKr",
  "key16": "2puKe7UDEtizPujVZybK26uBzfUQMYXsqpJx3PFt5bk7iEJ6cv8CkeKKnsfQNH4FKQiLYy8YjuiURprrGDVADXTL",
  "key17": "35XLQtkctWih6NwVGzmQQEP8e8iEahCpJUftkK4K7skZMyRL8r9DNNZSRzf2ZUwhQ8yxjTasik46Y8BXzGjJgUCD",
  "key18": "4tKgXZoTgtCScvZoaGFFWV7xz6KXkD3RHvkY9NwAHmcHhBJQcmhFhHkXujvhobwJNnJwFXroeCN6G5q4UwXEMQGN",
  "key19": "2MAqrxyv4cr4H648e648bTDonBWYf2rZmNzaN8VS3T9xp3XH3iGbfYV5zdpDQZa2Ei9SA9hgNU8x6QyjahtynqSP",
  "key20": "35Qk1izCuMw59QbeC77Cpih8odmz5CjxBZp4QiyVUhNX9zB9Vtxv5wntKktxPmDnYd36T6n1a9qv36znKJSzdFKF",
  "key21": "ZTb8ptk58Cx7X3Xysp9hvfVGF7fdksoHfXfRkWEoUPgAAzwkaS7GHrKJBfbepW55EBxxUp5qZBGWTJaUrC7bNuz",
  "key22": "Y9yxWVhX5ri36iJJQsduEqBPdVHHVBMaEeCzNtBDr6cgTBkMsUTjRb7X8AfmNaEg44kb9JiSE1CUv8Q3kKHs4GJ",
  "key23": "53ywMttSGETka34PJkHBPurtVBiiMpqQGmLSHN61uoth3vwnh8dwVHW1W1oMgHns5wuYuFofQmLD7aeuk5nSj7eL",
  "key24": "41MUYrzAP1YvswR9Awkctx5gXfsgE9NchVqZ9EXGxczcfQwTq9fA8yhm7k9sQh1CGgy8r7cJ2feCFUtEDYSrgLc7",
  "key25": "twArpWeJfATkUokD3bx9UaXpqyNYygw3qhhgXXPf7H5HzATH94pkY7hDGevFQpYbAjKUwG2ATdXwtsCpXQjZe9d",
  "key26": "4kpp9kZcKFENdkgY945x8pQKef1AadMmfSUn82mDkk3UhkGa632baRPbazagAyjotKq4ZSE89R3LqZC2NM1dxnYe",
  "key27": "4eCtBRR5nM3rmh2YcdxXUQr27ZCzx9S19WTY3xyL73EPrg1m9rdWb82AzvhXqnCupgDXS5pV6CntnnHKoLBicY39",
  "key28": "2wuRbDsGmdtNQDDjmD4VPPJEZmqAGYYKT2GA1GypyBmb3xeq83XbeRZbakNCYJvqHzmzmN4vJSeVimD9kfkw8urB",
  "key29": "34uVp7o279ePFHkPq8dv7stZ8GZwwVVrwvp62tM1tjduUbedPriyhDG6j5ZhFkdgoUiXFaxgPxQWMLMirC5v4bUi",
  "key30": "3LfnvpDDkcfRM1RUQjY5GFq6apo5sLowdewCgE66wwGqo2sLh7FvjzJWTv1czqn3vxe1cyHdMqu2ZNegXR37tWtv",
  "key31": "3rchdVSwGttEgw3oFRLpNTe6VKZBSEoJo5dLVdSTRBVRRhH96agZ8sB9mLxcjxvCx9PUUttgRyVnBwJxPVdXHzWy",
  "key32": "3ebkkjD8dDkh7yqEgfBj6EpTE74MM4XztSFaLfy5QAwbGRNZj94V7VusZWbAcbyRmCFRanswnnwYLF5iFRbUvXHA",
  "key33": "3wdzRmRcnjHPkPKfkSpQAi9QPcYzmraANVLouSH3yzGG2DEAP1RpmKJbJkvfhN1nkg1eWw7eXgu5Gfr1QdT1n1Xq",
  "key34": "3xBbJ1fQHKcv996kZc9nKq79tstqu7xdk9AWySeMzQf9KEdXBsQDfintP6SPzPNKpttuWjQB5d38RzXTFxp4F5XP"
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
