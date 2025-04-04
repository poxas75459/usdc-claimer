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
    "5R6RkeHRvt5bswak7W94zrob1ZtJMmUAZAXfGLpS55jQwUVSATx4gkS1UMH2FHdydc1QnBJDiRnLdXdUGwodFrZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hzjCkYyfRvyGDog51JHSWUFEfVX4EsXNqmLnp9pXth8x8E1FrsF5yuNYphSJxv4RYP9xTDbGJCsBib2krB3HMCi",
  "key1": "2ejCujJzzWetRCyWhSjJjCZkZ795Ww5bPt66Uy4aaXKYEjPNnemu1pnX9YnVB5Te1cumg3qqCZ3pwpX1LCrYKEXd",
  "key2": "3Jjv8pdfHeqAfrQM4buFHZHez8u6zi8dGPGpbHzTJNyCGo4uqArnLQ5ba1StXUHMqBq41hfCSUMZxm4JiUmtyGF8",
  "key3": "5bxtLdy7YJM9NUMv5whSbUxYaEnyMmwjdz2DiTm7FZoyBWf4BiRiuKjRaittkWMw31Af16HWRbsCFTz1DvC797dk",
  "key4": "53h3QEJqKUid9H8gX7t59mDEuM4vBQKn5nk21Lb5DdfLadvcTF1aK6B9Yk2aiYtPTFtCz64ZTW5qERMeSrNNVZ7D",
  "key5": "29npp2bseS2S43y6umTymcSYfMcFsgXgHSkvxiBfzDsA1M575qbvWvCCgUdYhshHsQRZKMyryRnZ3dE1VbJLKHfk",
  "key6": "3gb6o7KBM1LgMtfQ8yxUDMNnec8JHouCAK7qUiamaGbxF3AWY2HGm9N1LKvvdZGAocXgHVCAQLcLiVYQk1PVakcN",
  "key7": "3V3krGN16DchBnD3kT4VT78s7SJqEoqScvkoh7jgaXhivk1mqea3sii5DGpAVwKiCic2t4rtZkgLUCRAzY7z9Lng",
  "key8": "27otds4NwcjkJ1SvcP2XegFmdNRkPEKRsfoAgybHweYbCisZKup4mLxFhFSG9r9cyQXMwLgdnkeiKJztRj48GAq1",
  "key9": "R1UrciEXMhXsD7TEeG93CFX1oX5beHZB9uDZ8LzaoFUiJEHopPTxbK9NTKBKMoVcrgqK8RKNKsKNibsPMN5Gv7u",
  "key10": "3RRovvoZpK5BHu1YZitt1cqjr95yo8SVvYVTWNHr4QQQc3oZbs9xQKydomrrUZvL3Q6Fi7YpwpGVAM499Dw15K58",
  "key11": "57xvkTinDnG3apTSJp1UhviPZGQ7RQD7UunZLUXcABYG7rvDm8sEkq7HCEo5MQzK2pEjbLMJJZYELYdnRVypuuuB",
  "key12": "5dDhtu9K7jsfa3YtVXeantg5ERCeDjJ97HFDCy5mCKn8N2ifd2nEDW8pY3xrmUL8xEki2FYhrph8rppwYgxtFqkd",
  "key13": "3A29FoUemkbiz8K8AyKhBStAPcBaAkvxGyVCMZYPPh6WhW893S7W8SWqJVZm5mZbQwLygVSP5MUg1qiBrGon8vTq",
  "key14": "7nQxtd8PDreb7yvJVXBR3pri9CGBYmWQmQdzQBiG8gUkZNTijXMxdJcsjnQXdgpBqvzdzv8b7gkGBKRV6bDq42n",
  "key15": "54BJxhfeoTs8U3W3spB13iyFLA86b99rSt7voA8pcBmH8CFJ2GxPMSWBjqbfPCxjhpwhiU4Pv8jJpjY7GjAfa7aC",
  "key16": "5a5oh2sLznNgRF3cMRQDA5EgnArBpBQDw38XjGEJBzUwJGdd97h2sPpJa1fDfAJoLaW6H9QV5Et3ZusGB8ftFDs5",
  "key17": "5mjhSm5AwZ7CoDkEmxEnri2TcrarxWNwNJ1AqKtm4J2znLRnsVMZVS9Nmgx4pdxxP6yVHgSKftBU555iCbj96Q2Z",
  "key18": "4CHSwBtoxrvAop6M812ACJncwP5rgnjXiD2tc12sTmr7ZQLGjCfyDqvZKbXsLGdiqLh7DdWkJGhrPm6ak2cYp1Y6",
  "key19": "ugm89PDhCiSFR5H9pZt7raBr33yWtQFvh1yEjAhVRBiYvRZAXEnC2kbV6xXexXmFdkzBWzVLTMNCQ92qb2meQu2",
  "key20": "Hkkt9aqLy9G3iAQHzvPcc3NDrCuFxWMx6b2DVJGvd9wZk2oXs3MkacfS8kR7wmwYaUWVtC1rdAZ5z4nB9mJjbXi",
  "key21": "rPbKhSF1Ax4xeo4DoJMoc6nxMqoD1A3GEkbWGon8sNEsciSoS7y3DnCaFAaUFg9nbx8nqwECYDk2rGhSA1X18mC",
  "key22": "4VGym6194bzFk5Kba16jBXFH22ERzjzYf2voVuwWSRfcBVAdb62iy88QTx28arunUJezoqoZY8aGnbQ64BzXw54M",
  "key23": "5YxyUe5eW5sFFagD2eSWf99N6EZZFa3WyauLLTaJctxxN6m8aowsmPU8dir3kXugVUTc7fPyzhCdatCYqziVQPnF",
  "key24": "4aMbe7wCTq4gnrx1z5WqkMjb669Hi59UVsYLUQyncL7raij6cZW6MkmQDWbLfNWrv9CqtwuKcibWCzaUHVd5vksg",
  "key25": "59gjuVprXJR25o2gfQiuhZETYyipwRvRLfiLpeaRcBbLGpLkBFBdPDcgiaFFRDFiuykxiNmhVThKLxBquHFzaoLA",
  "key26": "3biEKY1tvUFXRo9Z2m6dsoPg3BJCe276vqCEPMALqyZE3DW3961pr5WuKKNKHhbHpLZtT8eDC6XRJfm37dczXynA",
  "key27": "5kWS8MP5HVM5ZuSKi6fSKvBLZWU4YLZGovY9987RhLGjxJ9dF63uuoGD7ERHy7oTRinuiDRQTY2MSFf9ys5Fe7xu",
  "key28": "5S5XpTPb9wHWsSLzaQJkVCQbpRnBPi4Zgkk7B7mHs8ewD2SqQGEg7pFL3Si8iJckAJoMTTwDZjHv69GY3BD95Rmh",
  "key29": "43c1ghHnfQ24KzCMxSUfpEbZt8BfomaSQqGdZwee8NmjSLzcGJffGmFZsyQ4RpuErMuN8tP84o2wXo2EAWSBRg7",
  "key30": "2TQFos3E6YxuVDsZLQwyhhsyUsSaCP2H5gKgQoJYUHYjFjyRxd2VYU9rMbQtYjCPnxnbADzAoDYD9oecVv1UwBZZ",
  "key31": "2Ym5A17FTHYFSEtjnAN7CXo4ANiAwMvRZezkg2tk4vEmNgsA9cKEK9Q97V2Ki61puYMVKEazazAbtMhHbo2phxYq",
  "key32": "5CzWxxaHnTz2tuFb6Nsd2r9iC3dG7kUrQv4aZ1fGtd1pfShM6eaLWNpWpCnX2ExL71w1MtA6sQr5yy6ZUDWBVHwh"
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
