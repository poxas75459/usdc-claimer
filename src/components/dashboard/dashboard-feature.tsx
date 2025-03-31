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
    "9UVmSaRY9vHSCwfJNyqDYcVj5BVNU3tP1MPkJN5P9dLH1wJv1UX1vwnBPoUGiP4cftbSikMyptMhfsTywuBK8x2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NN8DKtb62yuZDRhvXz2NZWm3bAYE7k14qEXTg3EF7KKC7JZwCUnB3oKZJ3kC2gFcnTHhWwVN6PJuUzHGDUTvySf",
  "key1": "4bLfkP3C1zmK59mHbUVEfe1sjdEsZDE8b79aaVeZN994DKfED5HG7JTsSRHKEY7p8oyJV1z8UYH51JetNiRcrfnt",
  "key2": "UHGu4uHvT5dnNydLTVhdTWSAWUUAgpNor5RQj7Q8eX77YBu7B7jacJYzfdgnCYZWAMPwZzeM2HxbeG1XcNYLVcr",
  "key3": "4gbXbKJuExJLPZUzBc87QRbqP8pWNeVjACuVPb7U3ryr44Q3NTSxmCkVhUvBxkUnCPUjF6hMHMSAJGnS7CroAKQY",
  "key4": "4a2CsMmxQipTWfHVgeQVdDteDQxq1YhNDvHsfuCPZTGfo3eRWKZg7y2RHKmLfznMZFnqrtudetSDo9TsPVSe5m3r",
  "key5": "5cTAT9ARzKTwQVxL22GLvWxYunMvJsvrsAjmnPoPziV6sSa2ze7oeJnqQBJwT6Xr83EEoMVqnWh18F4ECd6HhKzu",
  "key6": "35bBQsVworc3Xg5DXZwKCJiqyXzEmPYxpBq4RWZA4rPqFT1q6qdAiJVCgTNHeCxQR9N2sunEYTnFuphYYEsuJBcC",
  "key7": "37AiBF56o7nJ8qeWoQZo7tEdPTAeATvUeHRMn3yJaDJj7v38JgYGPPjiReVBPeUvFiidk9LAhapvgkxDeEQ8gZ3U",
  "key8": "3vDLCau3urTQkC1GRNjERCsAkHLN744xL8jSw4rM25DiwPFBr8AeV7YyYLjyVeMZ5RKuiKCsx2kSv1kkGvMeg6KN",
  "key9": "4L6xkJDU3YshzEQ2XnY2bPyUFA4FQg8c33DhyQAHWjHB3hLkDwah9e1mNGbv3defuBpQNJMjue6WUWB65FPNKLid",
  "key10": "3WmrASqWXEHheWDAv5Gs6Z8ZmPkgsjK5u1YLYoeK1cEje7iK2j9FQm398QcT2TZu8ymQekVXsypjtoRrZJL4DVpE",
  "key11": "5vFtUh7imSaoJkgFDHHgkCfVCHnjRGxmPjkmsXFy1ZYEjhPTna3pg5DawQEtgV9y7G6KkqJR8mZaGjUYinhuhgcU",
  "key12": "XgPpX32t1fDZE4ReqeEgTrLQNdPAPbrMEGUMDScK9gaK1qDmhHdxKqJH5Wqdi6JV4LFD5SLjP7dRcz41eTVicaw",
  "key13": "52ynAt6R6AgaT6gceDpM4NxDEeY7kGupYUcxqqWmxfWp9hpQa4oCEkHusFdcPe8CombjXni1YiBPEupxaWFEq8Uv",
  "key14": "76Zda4ysKCFijag2mA9BNiL2yxPdXpBzMAKc89v2vEnC3hSvoGiV11XjyFvHRqU9mjHHB8vcVTimGVZaf8npGnw",
  "key15": "2Whpda5Hok7YHXfFqeSoVkJAQs8bYVFXScXhZApBR9G2nBKDqMW7MZCvuZQnrjYgFzWwTNAdW8QW4u5McufJxzn",
  "key16": "NTvVBkghwsyuQJSPVyYL5fCegWkE8NF3GkothFNTLr2GvopTfMWnYmP7dgeGdAvqabFoGJjoBmDW2MM2onmsmRB",
  "key17": "uuB4ePC6jzVAXtVpPN82jYcMtCef8yHBtDYF9fK1Fekbz3d8Fcuk7qiEK8sVeVv8TcyPwdk6tvks62xDuryXUw7",
  "key18": "5MvriFdMjcGhg1EBy6jpsbe8UhDjNCPU7qf7vWQH19ucqgscrnmkGgvzw9JticAuPRRGki21VGwnv5vwJX7Q4SE5",
  "key19": "4XDs7FHNWBPQ4uKe5MHtvAr4KuyRFDANPrktnAvBNtNC7BMSU9xnecC6QyoKmEBErGPNqrXPR1Ki557rhpjqa4uY",
  "key20": "3Nvd7V9sZ7UCHvD347M1HMcPLcB7zaRrWWiyFy28F79Z8CMvQ5L5THbM8yggJcT2YtXabp3FoDAcQ5JDK8maupD5",
  "key21": "2b887aLM8ViN1mpRiJBsVsfk7uizXJ9pNTyWHYtddZB6GE5hkRe5aGQegnVFwM14am32V8AA9TLCTsn4GQoPa6SW",
  "key22": "486yrTFGhrqxGvzunrQLNGxcidDutgGcHrRjTRqGvTCS2eLUaaXKigo9mn9jhVK85U8RMxeByy75NMhwtUSGcuA6",
  "key23": "xRnTzBZ7JWbNR745sw7C92JAGJ7vJdstVDQqNz6KobAW9gmU8u39jPyS8Cn1ciaRbpqXZPwk361mAhJBKbNZA8v",
  "key24": "4ofMWZ5a54BWA15QYRnKcsvgmUA2wWXYHM5YYYCtGkFrvT9PrjdbMFnh8abBeuM45F2ztuKcQd7xT4rnfzAAb8g2",
  "key25": "2XcfNcPEwJux9omaERxW2eML5s8jjeupvdCdLmcFwYPuSY9CjxHsfNEdN7tbNubxqQGxk4WbVEgJxLwgsAjppi4L",
  "key26": "zySNtZTX7Rm2tV8tyKNEkLDGsVXYY4tJNy6WoBgLEnSHYodunUy1j4LdK9QJcKXM6kYkEWPv3yjwKUuje8xzt7v",
  "key27": "5Sa6rukjzUsb34aBRpGFiTcZBCgM656zH7nmvCqER34xkAP3MMDPQvNJ9GUvbfhwcWm3bom6Sow6r9Wz5AXZCApG",
  "key28": "611XfeSeuzUqQzkKGbEHtHGcphKtKMZ9HYAdizx4uBa66qGWA7W8295RaUqBSfwy5nnsEyAHPEZ9uz965JSQkjHG",
  "key29": "5txm6rBGJWKj6twqqjYRgQUXraCLksS5QU9t5K6LJPZCXpnzZwTVVDDpbRY53L1as2WvUSsP5SPrvSKcAv3ximuW",
  "key30": "4GJ8NTwXxs61KNt3PWFGe3UgNtWhkvh1fEGmTPeyCZbySSJrAoxqyo1StgpKvsyjn8XPmBcrEMdRD6ZV8M8yyW3j",
  "key31": "5YRMi13XYxppTpXkuxJYj1wjzHsgymWkNX1PFhAT9y1Rcx6Zxrb3Fhc3vegYt9qDnwyySDudrMU2N8LPneDHFJw1",
  "key32": "623ucUWJ2vUYrQDQAPfe35M1upB6TdiVnDCwDRi9B1h4NBgxA218fL3GAVYQWPiD9fZ54zVufTj6CX3Egy2EQXy8",
  "key33": "4iJPPTu36Z6bCYR1Gv84PS9A5YfVcfyFCkCfDYvJd6bLshFnto5Nibr2HiNen3anV5oZHJRRycMzK39qELw2sjaK"
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
