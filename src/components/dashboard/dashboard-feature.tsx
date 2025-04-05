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
    "5yzj51rqjy2U7knQww6eW9Pq9Kq5UqLUFn1kYnY9fkSrTzF6nirKTjUcVH33fURBeuiCabyBQCmFLbc5saJeE2eF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z9ZRX877hkUFnY5B57FdvoQMwHg1vMoRCZwYEKPoWk4yhgeTex2jsfSnzdWfGYz8PSMFgavSY7RxWVTpYHHWDKp",
  "key1": "3gBquk4iN3hsj1aG5dEorz6W8nicHmMrqHfRG1F9dHL9Z2hGFK4aGTMUiUzH2VJY53dzWvE2rfX1TMgLQdoz5qeM",
  "key2": "4pGfTMaAu7mkcE5MkPaNHxEpA3Vy267t3K17xQpmyYBmvv7Kk8GhDqv5qN2JqYXTT9hCRsXP4p7d3DcUjEE4fHpC",
  "key3": "5MHVH2EVsPciCY89sR1S49fezc5xvfEUKgA61NEPmcfd4wNVrM3sct7oAiLAKcKQp4LqEvdGRPW1xnFFe8WpwKTC",
  "key4": "5UePUN99GDEsayEvM3PsrpE9RnmQ3KYiaKDJS6b3LhUQFSMEM44LiHvK4QDcyvx2mTh9EAgxQPuvt4vrp155LTzB",
  "key5": "3kXN4ro7Qi8ygRy1FfA5HypbEJasj5jH1seNc4Ui3Ri8uP4QXpP84tiefyS5fG8TsELPGwPPkoJTnu6XUK4hbx1M",
  "key6": "L821pL5zJpLqcrrkKWi81xCmJDXHnJoyr6Lm3sW2n8KVzzYTiSdod7VSyYT5YQZDBAq1UAYx43zxxLzfwE5pYZs",
  "key7": "5GmB46RyPmVr1dCu9hinzY2Fq3hVDQT9wRbdGGjXhbL6dgz22qHRfPB7J6ZaszPLjEfDBPifQwUfy8Amu6LUzwzF",
  "key8": "5AVczwov17LhJPDV4tQnsEa2Aqe4ZVe3KFRJq6CBWPxRLJr1iMbVkSREL9z2dsVZNkAsyD5zCp3MeKVFH7oCvxws",
  "key9": "3PPw8Skv957P5GwrDGu7ZwZp9pxrCvJf7eKAUmxMcEXEjH4hKBoWgdBcuMjpM2zV5UnZsrSC4ctf9bDbaxJADQzt",
  "key10": "5rhWvNqtEKVL6ee8ReoVZLLrx2rqwQ1bwpHgUUhZ6VRUvq9wR3Nqn3WBEw8Dw41N3awfBvuPAdNizHU8MTJoDWdG",
  "key11": "2hg8h6kGjtJNZTGaaZB6ZmmNxtbvVN3hK7Cd4tamh7JNr5h8U66YifxPutnyVByfFCZmXUY3BLBKtbzzbGz32KH2",
  "key12": "33vFmcPeBGMPTHKat7kjxLHYiQoeLFSR868jfhpGbBGdW2mFcPgc9sPUTefWLFGBasDyekqHaXnf9cabzgu4PAhk",
  "key13": "4kWUgk8q3qdTkdYhBbDtF476T4oDaKwzfbYt6hho5XQmHZHmVZYWUnixt1gUFHyP289iGfPqCQLjgTf2vHNPvB3o",
  "key14": "NGSGdFJaz78fFsZtdkiQ1tTKVqfivW5kNw1YukQPwTQiKyZ59fddKXQi3JyBeU75XSnzoawjDFJdDeuimN31wwk",
  "key15": "2qifug8sjau8SXR3Ahhnhmxeq6rda2gBWdq9asLHsXqk9nH2Yn8j87u4B5ThJfZnwqctr3EkEbPmUvUXNyEi3swo",
  "key16": "5Y419dZ1e1Dc2SQcrTGDX8FGKLdVsZtJapGMvru4gBS6nzHuNDdN5239AxGfveqNGk8EX6NH1RaEDNN4XsV2FXXV",
  "key17": "3zid25surTqF4AXPH8G54shgqr3jJg826wH5Sdswf9bhzNeugbM2rQgs5QozQRUvj7fsAPhigXtazTjCqRGFDfq7",
  "key18": "4Bxe7ZM1kxfxxQUHBHNoQGMoAKPvdfTZvAoSbPSBiRTw8VwbxfbNkNarpzbdjMfCoJkZLksJsWfBHGdsTz379i6R",
  "key19": "RLSvDCA6AUQNb4RZa4murQvGCSiJsQN2Eyi6Pc7kK9FPKiQncj2wqBmYqxFYqos9Qjugzpp2st4R935o2Tv5hUb",
  "key20": "5L3KJpHxKDnwaZvtfopwUYA9tfwm47ZZZVZjo7fbVUgm9ozXTtEVfysCRJzk3v8N6JNHQeeLPaCpRv4tDCgXvLv3",
  "key21": "3SkMkadXR8Fw88f1DgJd6T9uaXEfC9CUGPfKafJbhPzeWNECDSyFgX6qXJTgrgUVXx5qtmQrvpURURioqi9xVAkh",
  "key22": "5LiSKirgbCMtHQN6XnkGR6Jfx2aGojC9ckY8ijDo3wRhQCjL5YuHCcxXRdW6hMe3jtFNy5UZq1xTqsTnjkoQpcsg",
  "key23": "5zTYnDfKpJx6aKYA5H2Q3pKyVw4XRgWZu2MjeVwbKdLy1LHKYpazRJM3QA6UnbkoxgK13hyeYSZvifhECuz2geec",
  "key24": "5xaHJpqRBUP6wmGawZkEHjqZEgjA4KE7KiPWs7QJkJTdFskyo6qvXquQHudf19awHedTTRyi143GfKWqv1QKcMTd"
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
