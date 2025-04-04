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
    "4EZ7iJ7jK3c3LJQnqqyhiD7bcEyVXQva3MoGE14ob1LZgtNPYfTfcVLb4ygsQKn4NNkGXeMNPiWKpuvynULYMANG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LVZAVsyNopX2xqrNGCNrDstqvayShh8ijx3RbunRVtEGfZnF4BNKwNqudFmBZAFcArvhBTwERWk7a1bFR6guRp4",
  "key1": "5i96ABDVC8cYGZP91KzedGLV14JRLNqTmUxT5uDdvjbk9HQ1upVjTvGheoKJkZEFbiuE8qnFqLe1L5CYKs6QjTD8",
  "key2": "5SUyjhauP7nHGS8i5GAAa3Nw2W41gSaDn7K7dT246vnVUtjRVFR1Pbj4TR7cWgrm4ttMQrrDEtZgofgg94SaJAyv",
  "key3": "33ifCkdKaKJpw6bns1twXXK1V8BjeUpUx2Fa8mPMFxvmXf4XimhMXPZz6FTmZdq7FV1CZVnyHT3wMqKhEwh3gNE2",
  "key4": "3ox7zGaLJL2JjFb1mckTrN1hkXtGvKFAMLTzRwtDHFvGKfnAvhQu43FPinWscdDLXZM2dPMRF1fG7BQWrdz9Jx2t",
  "key5": "25aUaKcpkzcdcPcucM1dJMtJGRyonMuYpgPcfhbWTcns4QWnZmrakXmuGpK739efLU4Dv3fuCtL9u2n7ERMhqWcK",
  "key6": "3ax4a7g9MibmPxnL9TQYpdyuRchd5PsmBPqmfM5XcqxQerXiPQTFv4B1QiorTLcKnhpwxfcwupDsFKRZPmzAuYXy",
  "key7": "2DxWizHDwM2oQnQSQ5MLgcKsAgLhCfvnkijtiz8hXk5FjLo8y9qxH6fbvtfJzXJAbXtWn2XKpWYEttN9JPbMapQB",
  "key8": "5Zygt7DThuML2ksqVkniwj41oiLkYLU3xvipgxhKch12FsdhWP7c6Wm7N3K8jBRuuoM18siYxQLUbwc2JtqDpTWB",
  "key9": "5WZG1eZqinSdVsnqeU2wyBkmMT7xPUz24b5ugRFqQN5AUEXpWFoCxghjCaFoSasTmHywVvxsgn8HF3fNPgHNTuyK",
  "key10": "8roGtCuDSe2FX7kJcyzsRuoERGBe3CLDJZLYjBypvzXYpQBsZMouy8ymAXiQnzJx1GY9XgrXg6zrXWEGDQxF294",
  "key11": "QHbzJNBKLnq13rFGBV1QXg6vRbpuvxQTwPSXjRww55LvCykrmuHBKDVnkt4JmamgHobCDLaw4UfDFSWcpRJM2zA",
  "key12": "7Fia2KuYRWXnxVHGzv3tRJEk6qSNUAkLYtUHr9Wg34RwkqMfwfNSNyswqL8jdaWhvUdNqofRjsqK4fyejAEeWKm",
  "key13": "2AhpHJt9ApUrp2sVXFNoJcDC3HeRDbLsNDTweiT4pmKumMrcBXXfQ6zNcvzWfg2A2cTr6nWwa6JvfuhzKz4ihJ5Q",
  "key14": "2x9nteoNYuW6HAoiNwgK6dmpH5L9G4RJaaCifxB2GGubETskEeAiTaD4qatGKiR2WQ9iXJzLJMgn3rBw5PnGu2AW",
  "key15": "inq4D8q3ucoPHFX8ec39V7rUApJRwFwvRjaPJSVWKoSWYnSLEwpndzcE9Q9v3yDTsyXrV32GNWf22bQiJkPBj76",
  "key16": "3Vh2Rqndiju66hc3E34ZJKsXg2AUrYDJNGztVaX9JuBhZe9JZpQcU1ggV1AXhX9hY94mpSC3VBkVuyhJYpNC27T7",
  "key17": "3xbjRKvsdaTyJUFhSCcHojgE3ibmW1xQtAxNkJc7ffHpHGWPvZCSwpWMUN5jh7yNT2QYMZyRXF8WB2Prz9MTRD66",
  "key18": "2C4U2qFE7M7MVMerc4gtPKnMYwir6VEB81ytZ57CaHme7S3MhQ8TQbwqr4uBMtzjuUUQVHsLG8j1JfTq83wrCjBj",
  "key19": "3fgF7tiopXKdcJpY3vjNQYNHQt9ZAxXJ2zTAUfDMR8j38urZuqPu23gUSzNBimDP2FwMQmmhLxAWLq7UBHJZyoou",
  "key20": "2ZSpjijza5aQXpSWgVKFzR8nHT6bQatthanAu6aCzPw1DgNL5xJ8QAHhyfLsnqVK47sqxCaVVcekEX81RuMA5d4n",
  "key21": "R488ZWoXxaP2pxPJZ8cQauMMLNHqqx3zV1qaeXneRbLDcuFJ2sxYBiPWyvVqjF823JAjdMG8NYbgEMYvTnmMDea",
  "key22": "4o252NBzz6ACMZnHpHY9GHM6aGbMu2EQudFgSgFc3tbV1mVTqZgRXRnDrXXF1VRqp4zAgMY8MBaWUGonh3BaKjNR",
  "key23": "2w7b6crYhAuTnLWZMER5mwUqGwEJXQqFZgFApVAV2W3ozqydXjiV4yUfLo23nRpEbykPWhHGkPiyP28jgtkCQSWF",
  "key24": "2Vp98839mob1jkrsPUxmDkdhTD3BbK6VQFKsX1vH6YHW77VsgCoCNy6fLrkg2vjivS1LGp4tcrQeG37D9WnhdsA4",
  "key25": "Dmx7u9m3EnViqRZP2ob7UFK8oz5sCpoMysS5zkUbAGx7zwEDhx51tQdCDEmyjxejW5STbbzNFkzsqEDTZBf5duR",
  "key26": "4d41FQ4CyrU8dCaayWX74s7JTANSrFinqgLRVmCBvkZx5uXVK7dhsqPjua4du1JYQCVGFQ6NC2wm4EQVKLpnQoNA",
  "key27": "A421jTAJ1uFFqM9CzjtgiRWdHGqHw3d4kQNsBR9D1krfh1o2uycaZWMKm4ryi8oWbNnBz5fEF771YW5p1EQChcp",
  "key28": "CxFpo68qpgvm4REWQmUvmi5GTZfsa1odBMLPG7w3z9Ltv5JjLsaTBhMFj5dm4XcjgxmnvWWfGVrqEGJRQswDNJ8"
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
