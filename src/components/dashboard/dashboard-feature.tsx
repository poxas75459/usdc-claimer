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
    "5bTciGzdxGxAgdskQEk6iSeDZVq4HE4j4ZRE9ygF7awNCcqBQP5v7JcQshfBsV9RCWsmhn1FJbhGMWVpdwowLWmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQBCcb5sWgHPthbbXHPY8aG8pRhZ36t3t81hVTXBZWoNzUYywJaR91Q2pHFBxMyrWQkMMNJdwYeqnMSBf1CdpEb",
  "key1": "Q8GvQUMq9KKMNrYSoZuHRkFzDvGRz9y15TbibRusryk4ZV4xVeU6Z1z7tR6JqB7XJKHQqvKFxZTM4kKtuEhY71M",
  "key2": "4vZ9AvadRE3yBCNMEdbeVevooNNsXUS4vaTuknv5DRiukZri47sb7cnRG6V377c6WjpWbbxrF8FsBMFyCyGCAzL4",
  "key3": "3xAR6eWz4gvHnBgK99ytEJjQ38uN8xdpi7BKpQWZhY1ZYxS4RxP6EW7WuGrsHzSc4tmyxAJ3VSLei4rE5dAj2WQv",
  "key4": "3CYCbaE6Lnp3zB2ZnqADLg5UrN343nqNUV4jchUmLR5Tjgx4Wq4dQdtMbvFvf35SCh8MdVxfwjduinvijyvGPSHG",
  "key5": "5UuNSsydyXD11aawjhkM9qdeWCx3XrJ2J1WUehzdveaM6zT43usru8R2Lty32R9WJSSZAm7ehfXNkP1X5c1ANwaA",
  "key6": "35qPrSLXiUfgMUBLc9k9cyoUUiJ2zNgCwN1xLEhuhuEyezjek9hSLDTyAAGhbccA5GQsLfz3BoUcRFrdoLFU264U",
  "key7": "vyVA6sCbQkFnJoT4jo7H993eXBUexF8GLeEBdJBh29BMyzQpKbPY1AztdkKRYEN4NaYuxMzu36FsH8KhLV2Ntbs",
  "key8": "4ZBkMsJFetnTK2TykA3KTUeV6WFSJ687jiP6PpSaRRTKRLzWGaZTVgGUgeQ2Js3ToVE69a4UyQVd1TaKwUb5KS5",
  "key9": "52AVvYD3yARWovheHLkXtPvfHizM1bke6DUJqUct8xhBodLKQgtBGsnTTuxGpjXtxnzKiZq7ygD1WzWoG6Jgyt9s",
  "key10": "7XE8BjtCsHnq5W1UpvTZ4ntSNKnYPNXfqPJs6wfG2QgaWYgD1FVwXXYxfeKJA9kUZSwRxJWXaCJmDrL9G7fZp3m",
  "key11": "4Z253wsprgWvZJZhGx6SH4JrMeyg1JrxtcjCkZsaGfk6qErMu9ifPxh159bzLSqkjYBjNjU7DjtR1xZrVYy8fi8x",
  "key12": "5Mxbftx5Zo32vjwx99LR5TwugvTfE2tF3SMbw5sgMxodtUukpJa8dMtKicMMXb521BvQyGMQvZPM5Y4ke8vbisy",
  "key13": "5LER2XNAFs7ieud7dhQSegqk9BXr8wKLftCD7owessD7ZykDPpSxsR673RdQr6YP1wPnvpUKEkCG2thzChxdKXwk",
  "key14": "3TxLXUw8QCiGupLVkaFRzCW8RnaRqJR9vKFrZ1YufieF6BZJ6CZzE3KAHxRo6Ajx6Rh1VAZzncdtAKAZypArVTqS",
  "key15": "xH7Ceo5L9j1KpaFWujsTdK7YMMhnxbE8N9mLDuyzhD9RxNThWFfDtUaNFAtQeAx8LD32KMStYw9bfaviRNzjv9h",
  "key16": "fdiKwcajrc78zSMckgeiqMx71t38sbpr9WnTH67uYU2FXZY67Wv3DbEBi4Gxy5tp6L2HkTNi9CGGZ94SsgLkHMY",
  "key17": "5EA1P7bepw8WCRBcRuHEgcjRjUQju843TCDayqY4TK3sA3KUpbY3nTqetGJ1WhafwYvWHzJDSdvhCuKMBCfHXm3p",
  "key18": "5oJZVvFXdqN7ehdovyB65v5yPoUrXBBhGQNU2Zckt5HtT5gpt2Lass1NWNuFoivoAKdndFZPoGFLmsx51ttDpF4K",
  "key19": "3pxEx3RE3iL7BbshMyp3BtC3Vqnz6z5TC5Cq5FkNcQ8Bc6skLXnYW5X8mQsnJ4NptfHmwQZN1Xyu49Nuki5dTvUq",
  "key20": "585bD4c2thqHybJjMDVvyiohojEFxTbzatVnhGUVxDzRN9b5n8cicNjFf8WQLTVGoAguiHQjgYPr13bMX4Ab3gwS",
  "key21": "cYxhe6m2HMVA9YopXtsjK5tYkbuubdd99a5cVnYpkMWMCPfuNjU4gxrArQdZiq1SFofsHbhwG5HDikGepRCdn35",
  "key22": "4U2BYq8DCfA4bm3cEqKkxMLczt6hGxQMUXh5tgafR1gHJUjWpeAH2zZfJHm78Na1uCf6VRBMHeW43zL6UqxCmNgV",
  "key23": "5Ch8qGaWXGtkowxCN1BZXMQSUxTvsn3pLrgLWpBpDK13J7cCBByswbjp4J8GKUSLwtFet6N3ov394zuXXG2kQk2X",
  "key24": "4ZL3R7kXq4CFJEBveVTsrjSXoiPnLGh17E1x2wqTmMAyPuV9wEWb5RcFVVH8iK8wgru3tDuV8ePHg2SQYY5tAuMH",
  "key25": "5uNZzg2urL5AVx21p9oS2w8YYBKHJDmSdh7JGVRmYXRn7ySHCBsXftnnrjX1XZ9QagKVza1cgjKayc3TVHbbqBqj",
  "key26": "22o1DGEX2SadAbw1FAsDvZ3sSJ6QPwiacWAjLn1aFcrUz81u1n6UfFgca9Qj5UqqjJ8E6g3DVud2EgWg5DZg6xtE",
  "key27": "3kMB9MNeyFnBefCULLSzcUCRTuQTm9asza553U3ZgvVxvZeCc84RgW5BqEeeXFwcqhcWsSumBmynUVx7NtkYFHEM",
  "key28": "3oX2w8qotgzA43bmq4zLwGpqn5WpJwru2TwoAqTzTUd8bwBTSKGw1FvX7JkhAQEXAdmYR3geKCvoYtn8mNMfYYfy",
  "key29": "3FjQoEYfRn5mZx8QQfCTuEp7xZaAHAB1d4g13FexD6VDfDT3pTPQoUezXcovTgzj6DM6KQiA1DrTTKwWNpYFKh3J",
  "key30": "PeEYzq284C4x9AjTH9htwmTRhUuREqCCHj1Tkj25yDCE4s4xasrwckDY8yDU2iuYVrRrpxRZquMp1fmE6fwabK4",
  "key31": "3CE2hBYshbDUUrp63KLEQyZC2oZt9Sqb1BXU9ZAtDrrvgjGiezkD4p4wgy5SmPwLi8dPiUiL5RywoSxVyiE6xPDJ",
  "key32": "4hWwm9xr4CtzxE9JyBGbvrDjgeuBTxxfxNftUSMYfxsgxFhnWWhpQjND7pJm3JFKX5fFX7fVxrRPJrZjXms5SALm",
  "key33": "4atQ2x5yeskqkr422pKtrxscDnMuBXiHSH9snDYK7Ztj3YF3TmiWLTfPDct1xUdD5QkV9NdcrCz128tY6JSgKPj5",
  "key34": "5HN2cEjbJv2nDdo6Fyz9J6FHfDRG1UTbRQavvyNwjB8sRQSxBaXvgxUfeopsKzAiqCBXc3hQCNBz9ABm9EMpKT3C",
  "key35": "4nWSwF4vV5gLZ27MgwJAwQeXnkmfrdQv3vB2nuYrEgFmpWEbmx5fsBpaw2dc7Kw9xejPb9fhwBAJhQNpqNYMkFiE",
  "key36": "4f1NATNvCziGorcWWjeZNGwWcW5gGRPb9XGTtdjs4RZfoRxwhhRm8igLXJZXaKj6fJuKFDG2nmYW66azdW6Pch7f",
  "key37": "mW7Ep7Fh3Ye5r2PjXkSTFKT5Wi5qJ9yACuA2ksz8i3fD5zFopb7yFbRMpEgrT7TtvEnpCtKvB4qrZGDiJr43HF6",
  "key38": "DkJs9WBWykejNvkUjHVzRTqEvC6id4zN6Gh673aJCKFRtZCaeXdE4LwY6GB2GX1ifvhuyWnZFpKw1gvmGVAPQ2c"
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
