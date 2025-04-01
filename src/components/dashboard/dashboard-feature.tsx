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
    "GtNSZ6BDgjtWv9tHo638zcMK3CRERC3nFuPTdhmcSw5NEgCNfQ7UR2bJgDck9opBi91zEvP6uPxUA1kDvxzZXAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DrTete618UtwMaiJQ5CzTZ1BCDRbRCiGZwcBXjLPz1zote5v4Ns31TRHRtcxWvzBbpg4fmX49hJ5SLYmqUFrrRD",
  "key1": "63TPzu82TkDd3z86LzeD73rLuT27kmhg3cWj5G25tA846PyYA7GACLB73wmJ4AznfK4aPx2rYrABj8TPxJFuXSXi",
  "key2": "28UupiDAbMUaWVRG3RfjDCy4Ybx7wB3x3Ru13Rar1GBweGuuBQVBaboMd1F4VYQRWDB31Qd4mMgg27nnxUDFzRJS",
  "key3": "GEhANmPcWG28tYgykyKE7jwVAvdpMwVY3dvxGAYLYR7fajdGzQ5dGVVH5P59XvoeZwG4K4o5JEBW2RdcreUGPwh",
  "key4": "C7YbQ1CgNCNTdHQW3fyyrSqW536nnxwv5TA2AzQV3KgFi2wB4VYDEAXhPv277GTwJjjaXqRU1YcZZFSN1NfnQoc",
  "key5": "4V5a8GfYSmTkKaJ7TkHWSCV2F3Y19kRGKyDVpT9H5HK6RRvigmfqr5zuLF2k63CYcii5xo73bFdX1G9uvg8vkkk8",
  "key6": "hXpH4wKH2ziYVKFgwhvRmKUpYyda7LsHZCtUXyx8n4GAiohmdKtefzy3zvqW5ekZ5zuw1jgkvgzo5ceynkbuQGs",
  "key7": "4A9C57FF8zYtrbG8sEqnEBG7i7Nni1mE7JoFcxs8qMhe8ajNoaMxUM2EpUvArcfPxaM2UJo5YUnVPmDmQwAfC7Qi",
  "key8": "66Ao7hJCFq5XHLAPQPcEEg72bVkk825122X1Q7ewCQwHQmswkgdTFovFFBjc4G2mkyNjCoN6VCR1jqNJyCW14pou",
  "key9": "5R5TAJtKBDNYWLWP9PFpDx4v4XkcZJuXLzxT5WzYR9HbrquTdfoBKfRi7fksDtduo7nC5yFm43BRwy2o8x1J423T",
  "key10": "595iSjPuN7nR3EhzV5bWrFzFUBpxaHvBhpa6fefRevVqib5Q3KLqSjUv179qE3tNbtjxrhoQCexwU6LcHBF1p8Po",
  "key11": "24s6pnFeybtGLzXGecszhdo96WbtmgUz3VzZEmmxNfamqSL7XrsSvkGJzRoELstjEbnU6ZScSbDxikVqBo1nr9AL",
  "key12": "qkT4yLzu36ieUFC2VJCPYiezL5dwiXun7jGoGArFf7T8AqzYGt6TSto2DnmvR1w6oJcH2ArvhmCTBpH4nAxBhd2",
  "key13": "5UvWGya8asaFfhhD4qF1UABuQjWvJYcg1yJRyVW9n9EPqBpGVAYedHPMcXKNMkisj48tJJfW9YnHjtMUmwZCFGF6",
  "key14": "32RxTuXcrtmABPBaXKjqjHLjedMo6TNJoz2M5vFjzKrbGHKW4DtY1G1szFeqA4pubKewCaYnF4cGRS77AqXAvWoW",
  "key15": "4G7LSnZRAHZ1BapY2Dzteoe4yDu599DsMiBErjMXBiwbtW1AoKdAx6kLpuswhznGrM2S3q6nK8NdCUfhp15LY5vB",
  "key16": "59zEsPkkqxqLA7yY5nzNajXFscHcraqFvGic4DAUgYG2hsC5K2A3WdQAkXKdUuTnyuy28qDt4WN7CPwxBn5vtrhL",
  "key17": "4XoCFtacqnadvB1PkkZjjLN8Fxhm17PQwYhh5ncyhBuregUAbmgXJNFj6YLSQAgNpAC3PjL3rFWZusZzMmxB57gD",
  "key18": "3SjahwV5s5oHehWbiH5yGXNv3dEmhTD2ax8ahYfREqYvrBBmriDknZNiLZSDmpF7mX7L71FN2pT5cfB8wY8vWWzC",
  "key19": "9bBmvvt2Bk62JrDNk7huWriRYL7YoZ6KJzdfq5p516EwpxkMxnFNrewr5TfoPwCUo3w1vxSB9jbneUrPyE2SkrQ",
  "key20": "2uwmjUW27RYFPtioWDszga7VuckNwKw167A2Zo9gWkEfKx3kujSbr1fF7NvxQ2DrYbkKMy78fpksk6xNByM1RuwJ",
  "key21": "3KCRHYmgGDbVyackWwPxwNsWFkAnkZwVi77oVTfyrW4hSrPLMv8gAbWcCuZWr1MJ8DYv6CnQNT1kHXYzYceg74MN",
  "key22": "31DZjGQZt5UiGxE43vN6JVuJNkXaXEPzRebmsTXQh5WLG42qFvkwhkAvDRP75CYTyc6ofh82myKsPsQza6YUD4Vu",
  "key23": "4VrozEhZfCjmsrKxgiHrc8FQW6TeZEspiMbQyNrisXXsqpPnrL7k1eTRhcZd6j8gEY2LXS4PS92R8RTDqkvnoy9r",
  "key24": "h7Kn82xhCXh8NB7BGySZ1p4wfnmCfT8gKokseAt2t19MxUq3etTH7qUHkmDT35vH2nsvizXFxpjPFzZ1X3Nymxo",
  "key25": "3UfLgeAaci1NjkMiKb9ax4gpsFJSuNnhJXAKZodkX46xtcZz7i66UbyFLfTdHSxc9xYS2aHqDFWbVsnb8mBedMah"
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
