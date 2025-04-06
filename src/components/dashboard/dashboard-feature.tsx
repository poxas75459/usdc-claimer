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
    "5R2mA8BY49QTvmCY7JpvHMhWJThYmzyWNZoUj2t6vCQ6FJqKJT33DvSeqWNthFYTAN8wvs5usbsm7C3Q8PE83YJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hx55kjdB6xxWC3d1JJamyZ7X1LuFQYDSpFsw8MPf2afCQb1mmYvHvJKeqFRJMpoX6zzu5yFwg2iafxvjcWdtmL6",
  "key1": "2synn6KL3ehV3ad6c6FvtiwM8RZjy7JAqYh4Rrj35xPxB69TF5kiNeJ7DgM1iyxrZ5wUjvkk2uvYobMMkcdechwo",
  "key2": "44LbMUGztFSzG98SZznWtJTYS9kNeJApj2ak92Qx3LeSsbrNWdLTsUupbPji4Fvkkvdgj9jeD9Uy2Vz6CjDBQqPf",
  "key3": "3bhxEdrhvYajMrfYraT8RJiwf53vBLD4kGKD5drX862X519M8X7m2Rr8Qwy3d1uCVpCSLHS9NYVPWxwUBfMYbChT",
  "key4": "2PBewU2YnAvjd2FeDtgA23pABPfVc5yg3k3HddeGnxp3s14YAsMsywdHPhocvmsNhBgwHs1H5vP1iA2AaWirjLqn",
  "key5": "66HnbJheHvd1wRye9VmUnvR75kXCcjpVbyNjgTSNxxb8FpxtqnsTWJrW48HSmVennqvpu7Huz5zgA4QJziDipFWj",
  "key6": "4Szsf16swFQGVNJNNYDkQ7xdkwbpC1aJ4Aw1F8Ctonkn9eYfMGEebDT4AKqGNPj64SukNgGPX2HYQrAahZDVwXxR",
  "key7": "26JgWPb3kwbco62G2X5GCNqvkrWHicwkEp3CauuaJFYc9rSEpjK5B13RhVR3p6oJ63pXSU4nntQsE5ZUmSEeua3j",
  "key8": "43Fa1tTBA87KhszqhcCnBTiR3ycjSDMNMSobckQpegNpVc843sSxV7DveTtpTBSZRSTapSZ1z64mvV46AVEPNiYm",
  "key9": "pqGcExNVZMtnAki43CcXaorVbBNMhbk3awVLKXisNnw2UDgst9u3FKxnyU3JBjGCCwXzZCwKM1dFoUssdAESnxX",
  "key10": "5BRZQdF7zcouEPggf6TKcrQESTHp4YH6mCtUAHwQJdSY15HcPrGBXxYim2RJ5rN7GQHypQjMB1EdTcYq6G6z23ti",
  "key11": "2Rgd19C7JG6WeGSp7S7Lp8Y9cHqn8PY6sPovW8AiwfEKD567ofgn3wSCbynrUZeBHc9inJmQYdzgLuzF2bb2SPf8",
  "key12": "3ooYYrYdmwqwmQzKM7CGEf8t9Ln4z19e9Ab29X1cAfo4R1qLhks6accAZKrQnqWAH78CapePRwjZPB68Smj377bn",
  "key13": "3Z52ScmGvCs6HmoSEJoFuJtC18x2vNEXWN8Ne5nLxxcLUj4tpfpLX3hviWPh51nZFyVPdtGJzdSSwctcFMFNsnPs",
  "key14": "2LdtnWwnew5S4ui7aKsBmBNxm9fAVBaehP8QMJpAwwD9PjUdEjqVFf91nFf5WwPTrBbntbpinRQuEjeQA34gc8Kn",
  "key15": "auyNUhzmmRvz2zMS7xiYCUJPPWyPHoLqKpjAXWpNSDn8QEjSK4DYBCCxhgHbCDaMVRWghyebXJWWLikSX2NnALs",
  "key16": "23mTZNZDTvNa2MwdhUtFHooCSsZK3Ary3XZWwPBZin79UqpMNDx78QgCaomT62bPtu4hHu74tBXv1HPKSNG2UJQc",
  "key17": "2Mu7ByTAHpLg9xnnhuba9hXGnW3cr7tVe1wnTKPCBJrSTDqa4DF2u4xiND7nQ88HFtFRVVMz4Rmqj5B27SZyxm8o",
  "key18": "3thoXRLYgUssmgBkEM8cjy6yME5EnR7FxyoEUVhR9gPaTPSQNsXiijS9kooTAuvZRjz56t6tGfdPjhezVbPrxwGN",
  "key19": "2HfezW1pFASfNjupzCXRa3h53quZfFfgL9FV3RDfAWMLzCkKZKGhZNZx1SRLNjxsEvsEFRF3AgcpoBJXX7Sy4SdX",
  "key20": "3x8ZHjNKHJ2KNwtCjEujFzDqXhwrE1di6JhF7g63uUDTaqT58AQDpbbUkP2ZUU4NcBhEHWkp7ucGv8J5xS8eWFH8",
  "key21": "4pvTUhXQEkwjJ1xNdKbjtRiQ6byeu9fahxZFNKmun61pNThBtA5jSJo46Pbk5a7kq1xQnGxbF2gTwYqqeX8xekvs",
  "key22": "3LWiL6UnPT84FcNMkuZiWAjoXBiWtpcrMkug2gRbnxpNf9sz9GzGKXBxXZc9z11E4zEbMPCXJhh6jANFVAVzD6XQ",
  "key23": "4MRfGdudMn6jBFLMHb1JsiGUFDwSFxCAUiVcg6yD6qwNjb6XTmoLiCDCZ8RP1aDSpd27PqZ7D49TdtqLT5XMehqe",
  "key24": "4XH2x5SDExUSxHUBPYPzixncm6oK5oscKfuztqg8NBc1CnzmW5mYcLFmg9MM3pXyLPkV1CitNuo3WX6oV4xGsKaL",
  "key25": "4LuqfpqGeWZGDJZbXyikBiVJHo8PXDhiwN5mMYcQ5vBd5R1yY5hbtuzayCSYhDJGbfpz2FgN5gGD9s4ayFEbvM6z"
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
