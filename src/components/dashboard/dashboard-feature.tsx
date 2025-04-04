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
    "5BjQUwAXktorNDLvVgjDsk7C6NwW4GTV43Y2iaTTgWcy7Kdrpf5R9MMrai3wc7uPHJ5SQCreQUp4KVFWSfKmN1pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32RTBLCJsEf1M9wf16kXcypHFJmjKHSkWEzEmcTVgtsv6wjDtobVc6d1TJeDpNvPp9kgHD48gqNLdfP64MbSwBHV",
  "key1": "5PVFYdTPZ6g3iBTWCDACYTysqEzWqXJKLtVQmugPc2BMQ8aMxn9hrvWtnaaVXJE2czXtCyeyBL3ZBod7QKu25eWX",
  "key2": "is3JxoZVUGDQfrRkpox1J91X5Ag6sDiysqXQQVoz1g9FjA2Qm7BnLq3f9pNXVmJvqCDXVRLC75AJbKZZdQChreL",
  "key3": "UHYSWU4Xrc7bzp5qAhB6be5vejKjSXbgiAAVD46PEtxzGqwQ6aXwahYiTEbrifRTtmzMrcxuKQQYbJt51bWngox",
  "key4": "2F7tWyuramf1MqPrwY7kbBoz6ptHybv1Cu9WnaqS6ebzSX8DRSZnA4Erc39c8KavczYrr9RSzEKJUFTAYh7ypsga",
  "key5": "fU1VLGhsPWX6Avoy2D4nrJzyUBKvBWqjhL3KGGFiVmc5pWWWrZwYpiiKQfdCcLjdqcDWcNKqHNX7zmV1CgqhRuP",
  "key6": "4NeF5aDT3PFNG8FN1KZ3NiQyaaLJjjRJ7v6fzHCVq1gkKvmmJJ7fq5nko38jJkF1HNdTCv4himTAWp3rasJkEdDW",
  "key7": "EDCntD9ax1kuKXuDTXNne8CwgU7uKsaNbgQD7qdy2b55miNModF2kdyCU9zFB2Evf1LNnZZj8TcTsqVzhykMesz",
  "key8": "32Z8GXBPd7vsNAjobs6ngTRtdS1UbtoGwVhcmRNc3EKg2hz8F4UusHysP9zKsxvctNLra2c6VMkXWgdLFqHzN32n",
  "key9": "zAXfuTrQKTSabyc1Z8RyoRC6mgGPjgmJM5J7zZki7a6yL9Xs6rhL7vvYqqPGKDzkxMpY596eFWtwCtwsTM7KtsV",
  "key10": "7F7bHLFzNft4p8DnMwH1sZtu4Uy7i32LiAzmxSkWiJXt5566CQiQhQQg5xaectKSsvhhhbfSwWv7uowVRQHLkhV",
  "key11": "2CcHqtrdaUSNsB5gVgQsD2ntzYeERfYS3WDJytdQztZPn93sxLXMjmBKjSytA5e4fvsicA6PZ7hHgbZ37bnRDK42",
  "key12": "2f6eZ64MgmbAJTzSzWHZxMP2mBPWcyeJD277roSQtAGjdgGhZyW3EXH7svHyfUbSV13ayhxgoritMCvFVgUyMy3H",
  "key13": "2wZz4VCaDrai2QEXQZYfzoUEfREyaDns4CCZ4QYzKV41jRBwJeVWPcLvqYsGTp8LF26uMyfy1YJVx7G6mS57ovMr",
  "key14": "3VifEXYq6R58u4DScpyuJx2B4bmEFg1UoeYs4TmHr7Nu8CmeGGLQq1j6fBakPkciMLiJBo1TFCbj4GVK1Z25kv5k",
  "key15": "2g1Mbm3Wga8D97MpeDnWcq5dQ3FhCtZiy9coXdsWYBkuCiXg3EcZuCS2dPTSxuxYrY4bH6DogYAYRE4PRXQx1k19",
  "key16": "5ZsbYs95ksUjBpY21KMyo3fC2XdiYoU4M9DJzhQYtC1KDy9Uy2kXnRCguccXMD3n6ErMozcVQpnwwpWkhiCRcdCf",
  "key17": "2pVc3DFjiewXeVpN28Sm2BsC6FL8KKzBRqm5k8FBAyWxHZUcmHg8ni8qsxHhnF8wp7ApvyNMhavNzUqErUPMib56",
  "key18": "4e52rtAuWyFWLYr5SDZ2KtuNQbihGvGJZY1AkY6CREpYUsoPw9QinPwWfyJen5HcYs3GtB6aJNnNHYDfFDfQFfEt",
  "key19": "2MEd9motSagSSFChECtCTmXrHKJ7pknuNsm6g1BeyZDszJSLrfJQbGZnY35zfLHugbgj5HTump7yKifL4LwQyGmd",
  "key20": "5RC6yNkZH9Pecj7UfebCwHnWLatyMJsvaRqbCJZa2grd8TU2xakryvomC6SkuFPq8yZ7sSeRhnzUHtjetj3sj5Bb",
  "key21": "4qwsXw1svWFu5o3MvtSe2c1nNVkVKQMY4N9eV6Wdqq9qxCFwMcSCCB9NTqBHe7VRSTFvYSPQCXu2VoqazaN6YxDu",
  "key22": "2chf6rKeHZARuUZ7StKPXXLnCMcttQS6AgEdCU2CFqHmxemF7T7h7FFzPVVSf95WZCV5T5WukGCQz4HqcZeXNmwE",
  "key23": "4sfBHsiUF8bx48riDWF2hnTHQqCkucwy7cCxfYdFW9jwRRreohDiCuMt8NYpCFB6JsUruc1aEcyPTkfKdo4NxyGk",
  "key24": "5bP1QB1ko7qiswCUiMfxndC215XGNiWThCUapkdA1wFJkCkGpm7SJtsgadUPvowsr8gRAHHqx86MjWbPmy9KTrNs"
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
