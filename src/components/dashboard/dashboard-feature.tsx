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
    "3ZEca6jdABPRFeawdRJF5NJZx29mbV24cJhAEisx6JPzEDCv2xx5n1vvx66j5scBKPVyFMDpb21Lkz8XR5fiMrCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TN2xGm4r6zw2jxESbXLHZHPABznQcJYBjm1ywo1nKyTnbFFp3uaK9kJA8zWtXYAkEKVPR8wqLq97becSkXT9Gxk",
  "key1": "4Kq4YU9U767Hgrz9tDjLWM4NRu6Aq5gSKaYLppgqzyKKqvx4vkrgEKg6MAZVdwp699HJPwfGvLS7d45YqRsp1Vp6",
  "key2": "3wvx4Rx6TNRFxShxDh8u1aMpVCVuxpNCUVi2MgvgQ6QAzKwQxcbvq6GqqqHsUTdFvoNDnrEm1VhSqkNRM8WP6ULE",
  "key3": "26BLAvPrruSHDtmRLWHo1GKxpKzZt28UZcojzry1Qxo7K32ZvqaGfV7sLsbPxo1vcGSUZ8tJVQiEFBPDiBt6iLgx",
  "key4": "5Z3fsjB6td4onkwEY4DbkTRdvSj2kxkLTYhbBhFPdjNE9wPP6n4Gid1TBj5Cq2wgbhAZKFiuxNMZhmttpARhUYsf",
  "key5": "4WAw94ZZqEgUi4Bw6hBrDY1PQTJxoTVzFknExBkixZd1UdSEbgZ8nhwYsepYsghZfmda1fs3s7jfMnSVAkQSsQin",
  "key6": "4va3i37V7EHYnn38T5vQGLghi27wnRAiW46yCBsFwRYACvWL7MswzGDFmNPZxJ7neDy8C7ZK56AFwZgiwmuXpfgY",
  "key7": "4ofZW51Ks61RJJ6ot1vqGqd6NqVUkHFBrY8yBVFXvyFtV6272znQJjWs1E9bKzQ9kQMG8CanhGwPkytgP5tvX2fU",
  "key8": "36H1tqDzCBmLV5c9jh9RMRswEXgx2nwTPzDEzww4JcDk5FfUF7o8eV4NwjD6NYhxWjziBGD2y4s1TQfh9B1z1fV7",
  "key9": "4TRRgYkr12kRfK2nhGGqcRn9CPRG2MBFfBsSQSpL4h4KNwFkAnDh6CDSwn48SjaHaiQNmcSbvgc2P1JzZeRrJx4B",
  "key10": "5DYmzAfNQ1MTCYENf7u6H9heCUpXMNcp8cR6dtgSi18wTVmcZxmzxmSdWNxe4bvtzaBaBqk5zBtGtJ4mT3mtFyaj",
  "key11": "3RMkpyw41ueDSowuKsVmbUjnGSKkKTu2jLtUYkabEFnWwdoc3vjFs4bHjPDNao4czoG2c2mpEPBtkkGRyyM61DSL",
  "key12": "2vmSW8hptqtnes6bq8GQVoA9CWCED73ZbMC9PNU5Dz3U9xWJXivzSit8hm3jBHgFK3aacCTYR29TxbpS8xcqTLrt",
  "key13": "MPDmaAoKSkNKQg3Bos8sLgopKGc2oVdcWNEiomAkkU7GmkD1PPLnTRuFiT7o2dggsbekzKALbP3ryZJ4eZY96zo",
  "key14": "AqjZBCjZvzJSZ2JAenru6T8GXPGa36EgD7dwoC23meDRgkaaz5k8Q8sm2vp6gTsgxcJsBanRdRk4gCtz3LdZU4Q",
  "key15": "4Mb5F7rQdA2VhkvgiNQkjNPtCWNzuPy33NaqN3FzjzMQ6EgVLr97i5YWotoMkgNBPsakcUqMAZJQPDfobE8ZSxcL",
  "key16": "kFbEo6PwgLKuZqwDzfKhLD3h3cXUiWJLFuGC8EGQ9Tf1u9Zba3D4KZLFV7V6KKEVXkwRYk6pMsHbtXxUDHY79A3",
  "key17": "2QuLGm7p4TK9hoCfg8GE5Zayok3PkstWqH3HKsjjFEyQya46MwhAGs1mZFLJdLejV6YmVDpFewTakhBGvmh9HhDi",
  "key18": "5Es1SVRJyPkSzisSZLHdqJARYP47cxk8nW8gHrafc7pAM4rdaTZAVZ2fno4k185BzqaQg9iEecS8kFFjujwDypMP",
  "key19": "3MhyBwtQHUQKASaJUTPNStBYLtWXqodHWdgL5hpKw4PYuSHVbpB8mkRgPy1BidmdsH87nfydXE8wjrBeAkjrk67N",
  "key20": "zReefHeiGGCrRMbJYuvsB6QYv5hYA5UANGrhrpkPgwRxu47NbWS6GTYCeQ4YKYmZP3jZ4zbfhLV2n7dk7KG2cqw",
  "key21": "2Ej7FZSEv2xKZe79uhLgdJL7BgX8gHJppVEAWw7bA1U6Przt5TAxM16gi1DaUZjfcPLL8Z26isXLpSF4yd68c28j",
  "key22": "3ejxEYrioxe4cLm1U8USmP6BKriap4VfLw6ezeiYnGqcMhLg6PrhGSWyKdzwUzrP7q2sQ7mqG9pMCGCqVAw4b8fJ",
  "key23": "5obpDiGfMYBbz84czUdHCMawxwNLhawBvdA14ERo2yQ8zthS25d8Go9vkPRVtGYtyX2wDg9eq2DkimxwcWLUNJsh",
  "key24": "6or3bMUvpwA4p8LZsTEsvgoRnvaLHqjTnuuTaiRLu7Rfxr2R7p8rp8XQkB8TxhkLsafBPDDQET41aRuganfqAe4",
  "key25": "251hhGJqwZ2d3Wph9p5yeuktAJZW1ycWM1KqeJNMCBwCBgYaeSgnoM7oJUdVNv1XU6csGyoaMUNpV4JhTc4MU57G",
  "key26": "VrviCAoGQJ8bPfpzbKE5eduTZ1rVg1uzxx3SvpdpsenuHUrD8foksTRDXBxT9bHpfpTMv4mDyKFUUQWjG2Stnmo",
  "key27": "2eYanUGvZs28fhr5cUEHr38fLjtxXGoaijL1wBwY7qjtN1v5RY1nrSWE5Aqrxpy4ePUboY4Jfsjnzr1MsbUPqB1q",
  "key28": "5h4DwTutWb45CAESxFsh9RryQqjTchNV2u83TLcwc2caAcYAb28mcPntEgu8vPK22bEVCR2xKduSsMRTRFLFiosi",
  "key29": "bCAvrhhbgkBCqLw43HqDhW5xrvYrEj6GKkEe7GbAT7Pn32pJZui1xWCTgQ6dh7iN47cU54gWxQPkGmiii6E42XG",
  "key30": "HvvMoeEUAkhTFzahCGjZ6WzZsDAqpZp6VkFy1JzPUzFeRquD1ZNh8hLx2omPo6iBS3DphmdXZwWLkjZMgF7gKwz"
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
