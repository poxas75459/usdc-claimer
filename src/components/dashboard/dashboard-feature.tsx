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
    "4WXE8fQQBt68VdsYmfs4VMkRFWKyCNBdSMQfJ2jnsuB4h4whfvQHF935xq6p2FGZ12wP1xHvX4A39EQEmt9HrsRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BoggmNtaX1tcrHyU1vC8ePfkropeqYw58vyk8Z7JLA4Vo7rwJGsUWiL3PGGLL97xzdA1rrfA6EvwTFDnz3kPdA5",
  "key1": "3GvYQfPTvU4VRekkqG8DmJGYrhtwCMqTGjFAAwwRBpoZ2Fs82YoFJiZen6m2xCw62xZEk4o6dnNXYQZME4aH6Fbo",
  "key2": "2RJAuLoS6BKPaTGgsX9UMaHTUtSsvgZDTXeN7Gt2J1c2Xnb9pgr1KfPfR9d7hGiMMAavQsvjuSh3vBthQh6ZbZCT",
  "key3": "3p9p4FuasQtnbR4mfMSZFNVgXJiuEwHmQXmZCMVNrLGjG5jVm5JvcJ47oEDxd7f99yTE4Fivoy8xubqRkMHDsMxA",
  "key4": "5wcgz7Vcqwo96VATnZH9wcyKPkFgybn4xSxzqmMAhdLquu5PK9SSJC1fUAgVpqVp54Yi9dksN5eibrBSUBSHVAyR",
  "key5": "2bqJdfNmNTadJomY3btzq7VefEuJ1hkoe283M83rrtin1CuKXx8VtGqf5RZfeoAgDPdkhxq9xkVC2nFzrNGQ4kPN",
  "key6": "5YvrVUSmEig135BWZFBJPKMjBwspPvxZ4KnTSrhSQ6q8938bAYgXm6URJZdvbzZuvvffjwdyWi13ETWXEL4EAQev",
  "key7": "2QqaudkmLas3ub9Hx9fwTRCKpUCfRNNVHBTXUH66PiafiJKQe9iUNZyyQpgvZ1sJraYLkAXvHd33C7aVQtfDXffG",
  "key8": "LyNKZvbkjPMthRahuEHzr134NJDXrx2WaX5KZ8JwodnWMxMcqk6eQ9bgZ3nfhwi97jgRJg1DvpFU3g1CKZ46DCj",
  "key9": "dLHZv7W3pg4eCu71XH5SPc7HRnibKA6EiF2ng85FfhjFxx4PTBYJ52PzPJRdZprsUvptEuho2YCkRqjYvjb1VV3",
  "key10": "64H4iRmjW5xiCLuQgV7QKmNtJte4p7gbw6gsLPA83kBkYxKxqLwL2hgxBkgUKirrKQJCsepoqHCK4EGrzLiW2fR7",
  "key11": "4SiBbrpY3XhvArrc5MecWEys8z9sWU6FuJmmp915tkYbHYos2FVxq1sk77khraL1wf1uZMChnWoKTQv9HtTFS5Dp",
  "key12": "4cdX1rG7w4mv7XzDbnkh2VkAdFULB21KTWV1TTRATfFP3rGVqCibKmvMXQEgzAXxRTrULZrhqPgvguyJXL663qEQ",
  "key13": "46r6fQADoM7w1pgQwkju1xhhRhC26NY8mYzMKDo5aMBHs5gQSwJ56amgg19iqMod8MXcsGHmkF73ZywNVd5itupk",
  "key14": "31sVM4WsLY6m8pr4hKfjnfNNECteQqPwTU98R2MJTeL3HXvZq7f2urgy2SJx7ZWrRzqf26ne6QivDQcGkMrJto2N",
  "key15": "3uCH5FBZC7eXst2VEdp8WidV1nmyJE8KijMBMGNYy9xbpcJ8e4izvT5wc65hLv8pVA1XVXnkgVAPpFMrKs3TA1LJ",
  "key16": "2cfxZ81GormyCafkzGtsq5GC8DQ3GipcGRg4Z77LUqidtYUy1Nhvtbj4734Ua8D8Ssk8FG3paoapDM79FBaWoksG",
  "key17": "H8vgDeSnZgyrCPWxZJKxyMn7WzffjPkVfPjgWaPp4nK2WRM3hdiF28oFtwdXzy7jbdgzdnWpvfa2VjXDYzWd7bg",
  "key18": "4t1gAMJL4TJ6HWnpy3DUAWHZYDZAg8rrairkPwyZD5WS1M1xUaCc1QETvAZSD52X7Ld5sbnwyohv2FQidYZZnseg",
  "key19": "5Xqb5gomwJaAZvg4Q7eYyWkAXNtkyDRc6vQBvu7QRnYzEqDeptzC7m57KNSxmQNuJeQUNg9A5iHyvw9paJoap2kg",
  "key20": "2itsdeP6DneNpgU2TMRsjQFYWvYfhSa8KDJGmwEtABvk9rW9GF4TMgVhGXTRKRjyjWEYbZgJNq1yszuuHDPVUMPk",
  "key21": "LjLQgaWQx7P9WCSC5hirzE7Dxz5eoWCdGdRNi5F85q48NJ8hhBvq45K11NJNMBvpSP1c8U5bFa8awQ1WSVYnHFN",
  "key22": "WDdh1dZTrenYWLWxs4zBsz8zTKQQmKCeS3iGVSEA7Y9FMPfcFexnThz7Mxrduy6teAoFhvsYdkEizzeTdJ1iBPp",
  "key23": "4XPqqYZKWtLrED4MTh94bhxQoE9HaZTQ5LsjPXR7duTvcu6RgvkdNY6g8i8nb2P6dpRDkNyuMshEoeXUqbgiidT5",
  "key24": "5VCYAf8DnLBrB6eu5WBn4YHEUy8UVfn8SVMFATEw7grVNweGBEy8CKbGA5fx5GEgHHBwtDpqum56PfciY25DQCxc",
  "key25": "5kkzhowx8iapTZqQngS8dEtiwNQkE3xH84zNyDa2aFHc4MDU188xLPinzLZVf2EWtWfJ9qFGHNvv4LW8dAVNPuSP",
  "key26": "4b5E1kdwmR3KUsYLUdJa8DvmvFAZVRE3NCC54jKbxiSrVWMYymZemSz1zbfaYSqUsNXnEYpURp3np8QiMMZ4JRoJ",
  "key27": "62t92pveaiqNaT4Rxt2t3ufEVaDC1FEnje8jhEDhx5kPNCGyW67tbHmynPmuXjWQGtrvdJfyK6qQZgiBctCWSbMX",
  "key28": "3ksUxJEToZRaHtyrxz5kSixziu8yf675Fk7AKfoLYqtPDRMGnBoTezk2wP1yBX5vFBaEMB2w3RTSv1ZzQwCGFoUx",
  "key29": "4wXDDeMYFNZ13zXHfTx1f2yvFusyhMmxLw4ZC3FXKfoSe41w1wnNv2h6779G8fBhS7KZ7i3pmajahR9GcN87beG3",
  "key30": "bMuVxEhsSfEeeGycECLfJduUjEsp7HgxBcmV1HCDgh5KzFJfrgw6g3nFPYWbTrFgPqK5NxjKKf2P49MZEQ9wg6G",
  "key31": "5uBLgjzdcQwDo71UfWpdHp9DxBSJJs19HVz5s78A2occSrRKGGmrh7wjUAiVJEW8w5J1v2vetSrj47znhEjnx9Sv",
  "key32": "4R1nEeJe5ie38MaSzZULMVfhGx6yfnVF3hd1udFZeBfB9MsJEhrfq1otPGcnZU1tAjANyAquSx6YPeXXRVaAm3D1",
  "key33": "5ST9GtCQN5CyZ1A8oe9CUsAJssi5ykcxXAGG6enQz1D7GPTzSTautrHMNtPW6MvFN77vkbGfyHofkRANzMP39AiZ",
  "key34": "5ogiG2V4DwZ2oVUd9Se2jGAurMetEN2Za9fdaZVQ47uvcQijpoLejyXYA5MCGfkHcSyLppQ4suQi3phiYacXxJM6",
  "key35": "sUfMqVLEsTm2ghhiua7btKXYVYUnmwCRmpXsz8kHWzbddYv9TNYR2ALz1jygKNwD3mBhTXy1qSgBxtBcB3oJZkY",
  "key36": "1wzUcKcrz3g4EaD4mNVCoFRff2CXWSxBiweB2S98iu3oQq9sW47WuBinzDJNXswFh1k2aYs9KU9ds6dDDUSpY4u",
  "key37": "5FETNtMyYczM25gX8kp5yBrgV8hJ3JshFGYahmJ3Zjzyk33jCLruVgM1qrMFFNgQ7eKBq2EmSz1FAS1Wpo8pcumB",
  "key38": "26uapbJyNMqSRwx1a9J28AD4qc8hMgew2vCKoQSbb9zr5TFe2nR4sC34xKvKjvsdxF6YjSxakJsbvVYLH2xCQxAa",
  "key39": "b3cF1wJHPtnK6yeGy6VxrxKhmXLNPUTPD9n4M224JZ8xrbKZxdJiex8bEN4DMCWz9vKcqYJgT8dUXnfV1WfAinA",
  "key40": "3HbhUeV1GMcP7RoRUJG14hYSMVBCthvxVJA4ExKH7pgjizmDgaukvu83atC89apPDFh6TzrPsi11UvAQUCPgAptU",
  "key41": "2Zh2Yr6v2KBEpkGJhA3zqC3WKoVkD7sJ3LHHUY3RyVya5ca1jUSdmRCLjGm7NBziuGGwR6Q8SrPwVX2S6dMaX7N1"
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
