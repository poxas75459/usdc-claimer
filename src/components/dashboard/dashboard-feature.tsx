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
    "3mKWciyXpvyULMMi1z1CBA4tn3WgPi9inh7FwGW8zz1gozqjf6e8HstBnrbRkctxraTFJ6fmUSZaxg62mGLB7R6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qAZCaMR2U2hnNVcrhPy34jUCCNLzMZbh8Smy7Ay93ZEc58JdNSas9fT3zArjSnfYZF9DW1HhM92cHuYCbAWr6rN",
  "key1": "2BaYRqKy4Lu6VJAaoMAUqnGPoWL9WhNXo1dbZtkQktSCyxQdnmycrXGdMZ5PxpD5vdfTujLY8bfiuor5AbNuBm2V",
  "key2": "FQY49t5ChV2r2kks5erbiyPZ8TV8RzKiX94FYEEH8sTM8kHPpTeJzu2k3J7yqsYrwcGkBKZBMFpcWJBmMyFH2zo",
  "key3": "2Gp8uShv1knNprHz8wZYpXWSEFhGV9zBNQ9hR2GKkGC8WXBRe9e8hQCSfJwqrMCdepMJBV2ZnK9XnrGrCfcjha5B",
  "key4": "2gZbXrTgUTJ6mX2jbV1PJ3TC5EEGBWryBqUFh5YMrEbSZACYTYbFB2JFgBFgBz4oiuttXGPv537D2z2zdqua81XN",
  "key5": "62odNKzmjvM4FZ1e6oFoKFMuqMM6Pfnpc1jX4MCu1CgWHYpYWX9Hrn7t3L7uTwKfKgV51Dqe4X1xu1WwM2QgfoH8",
  "key6": "3cZKH6X4DvDYRK4T4gavKEsef13PCQryussUaaV531wh45aEFiCSASuRKeJnP9KK31Zbbwfzh5rPic3QeyCbRzRk",
  "key7": "5it6kuPXpda8Cz6HCRpcUx7WjXwNTe6HXR2Cydxs5TLHA9GVs8baJ38LXEa1MpcaagAB1WYdrVW4tQGK6Gbgzqhr",
  "key8": "4rYj6uG5pTYq9ovb6mVDHZCGSraGXHcaqeCAv4SxR11XvPAVfrLPLEHzUynfVGHvsTZPqWZt7dAmqbqQmh2EgMGs",
  "key9": "47Fu9fE1jazqBVtcTDNLb6roGQiyTsLT73KHNPWMwmKWzDi7z9Nxne8vUw8mSuph5RxsJnHRPccS76xdEVaUPFej",
  "key10": "5RWAg5hGb6SM6xYDzBnfrooeo2Q7m6xFWJH54AtV8acQsN2Q5S1gKG1XSDSWKvXhcT4kJMyyxDFgp8f1PYWyFUqf",
  "key11": "2DBPumxd3KhVMuSdSpyhuHV6quxXQsivQfzgVt9uSKsjAbpKDXAmMgmhP5M74UoHcYQSpevDRu6WhTrxbr9Y28jF",
  "key12": "43h9amnbinphqopTJ4cZXyL5D7matGbq2qhMRXKMXqEjLwKy7qJoAmoPYJBxRXBA99BbNQm7iAL9kMN8mAm21px7",
  "key13": "4qk9dP4YgHhw6au4GVEK7eqAyQdShfk84tcTZTPnhoxukzc4Jevauje47LtiXfTwYz7KbTZuSB2KAvQjJtMDWpXV",
  "key14": "8Spc57nPf47ahP9G8QN5aRkNkdjP31HCuuqQEWsSExTcxHzYCx4HC9GEZRhHFKgd9uTAo38E5HHeDZee55tZ8Mf",
  "key15": "3a8fr7oWxGsBZACGdxxLMbFmpfEEgHYz5MV24r4qDtTm6MEMLS4ugiJ4opuQ2CF8iAZYzdrPXi9kHrPuuRmu58d5",
  "key16": "tbyX842KiGoYESd319tBHWztgc2BzdH36FKDVHeS9WxNXZfrDiBk7G6WCsiGSNTsiLEAbXf9P3vxzbdxvCVKp9D",
  "key17": "3w4jJsnNvmgaqDJrfqt65o2GYQKWUBDfnqdajVSxZwjcaFk32pZAvzpHz6JpHWJjTyqg6pe2hibG3cebLKUedgwW",
  "key18": "4h1VxUk4iDQmrvaaWeom8qPfiwVR8sWF1TTR1fgoaXEZpxMmpzjiHLvXL1kXdU9tCMBgKBkfMd3gr3hqmEpKgpZ3",
  "key19": "2v8egMtEZamKqSfc2reLqjEA7QmSTUuHsq9z69bEB6ozZcJBofvXEZfH1ttqtZAZMrPH1McGT75F7Ef6npQP13R8",
  "key20": "D2g9Z4i98VCKUytAsfTBrjubXjm7ugSStavcVDmKTfo9pUNGmPSNiJmru3ZfDGNq6pnbnVdZFssKUSqZCrMmKJ1",
  "key21": "2KeBip9fTPZVyNbxyztXmaXRiAWRk7xMgH68kZG8GEC2NLWzPr6ffFeVnmASgwURtVzUWccqdB3uKAN2CtfWac2M",
  "key22": "5tnD2GNqvhyS7LShzGQciyCDKHV4z1D1jxyrkT6zkzSVSNFsc6FreKPK37Bi7xYNnXBXTEE6zY6wXGsUHSrtDAnV",
  "key23": "pg5VYrZwFUVPTb89mozyL343Tam7giJobk372AM7fo5ZcEdv1fcP2srSCropfMoxYarscvcC7SFicSt2ggkPphy",
  "key24": "xmKac1q4LoZfVi8ra1W3se1U613rkjbh4WVK4eUohtyg51YpUdGq6XGV1ahp4JE5JYWw3k53PUwyGMDpHTQGV47",
  "key25": "4rANbKWntpM7rhCmkgzDZ6JxfFHPVowoxUYbG4qP7vvHUKw76c9Xj2nbrR5ELjPJudQgbkSkn7zEpc8sdi2Fpbzf",
  "key26": "GpA8o1whicGuuUxnA3TJpqXVnztjtWMDsB5bZzNtcoLjoTE3JazHbRxgmgEZSXkHnKHrrr76UFZ2if8Tc71RQ2n",
  "key27": "6bm92cLA2wTh27i8kznEB1vdYyjhQw6p9sttDJqEvLCJL8htei4imX8dipLashFrwkuBh3z96QfWwNHETUBYdbm",
  "key28": "5N1c9cfzL35wFGdMdJWNYo9cdDGJ3MS1TJuDoDLES7djkUK8SkmH3imtuHNFueTLWkcK41a7ABgEm7yd3GnRLuP9",
  "key29": "5jZXVvWQCRThSQah96vUxL7Tvagv4uNySi1kBZPYatL8MiaFKjJ4FA74mpqqq2C8HaoB8wqgLySnXzWS2AAEAsSJ"
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
