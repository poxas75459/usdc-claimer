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
    "5uGDSy92ipX5aef9Y9FjLk6jhske1TGtwykLsB8V2CzrVTJsCndR8CmALgGv7GPFGUn19izKrSiFgTHSdfAN7su7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzw4ncaodvT7DhyJavhRBKCkZhtS1dieRg3PKpwHkCqMd27sHAbMM1J3iECsxAahFosTt7LgiNsm4pDNfgpRX2q",
  "key1": "2qvGu5MdLEqFwcWGeV8B41b3KNkbtjKuH7y5D61viWDMNVoi3Jv6zvXtJesSAEVhbeCDTSCBDAUdDtULc1zXj8U3",
  "key2": "3b5Yb5fkcgQc5uEkktarYmj8C7LMXfjkVcBzjdMgn4zYJHMFNooVQDY8nxe6326US9YceGCrFR7nsDpWksE7Jvrz",
  "key3": "8dgngwMaTwqncxro693qNTeNXaWJkoyWP9h8yQNSMYWkBGBNboGvdJy9DoTPWP2uZfnHVukAC3QHMiM7vEfU2oU",
  "key4": "RS3VnEgukwiDmiPvtm5MjHHiy6WYfqo5JG5bBzVDWA3ef14ehxEm3b5jFnxEdwp5fQqWv11zTmJvm8g4spfphwf",
  "key5": "5ATWdWLavAxCv31tQNxU1PggRgJgPUg9ktxnSamHtuiVWknRj1iRodRuk8L2DusNmuv3QzMcjP1d9qXhrWHcehnc",
  "key6": "4CfePb25DFcHsJXsEPqYLVd8fYfj5fWk79ZMaqnBNmfD9j84JDUXmAvW8NcHx9zBeySpfE36iHm11En9jeVfcbr9",
  "key7": "2udHXqHSMvDUL3ejPpUmkzvjoEaQyTttFEiYnXhSBij6qxmt8YR1bmPznBqMseFRkJH9JiA14Bmd57xKKXoic1B4",
  "key8": "4ZA3f4ADwTSN1fAnVRcb1igSvYwxsSZVSA7bUp5AWxyfa3EiZwaHWUEbowAnNfS6TJpXVtdqYgYXwkdXWFyZTvTH",
  "key9": "2pKZ5cohCGL9jb1kSwyvYckQBw9aaeLubHUbv2u1AwtBkauVu1qgYi6QXSyjUbtcsg1e5tSRu71ca93Hv8ndmQk",
  "key10": "o5A6S8Pq1uBYcNcGYEowv4D7pCL9mLQf83C7RieUK2HEqUY7BnmcfeBZzmsSqx5xGQk4buSMyW25AkX9o1uJZ8U",
  "key11": "1W4N7Evki42bRPr8XN3VUnDW8X5N6FUdpKxjNFYv3g6G5GYjXfcnfxTvVobVUiWojJGoeezxU7zChA7ggTDTKSW",
  "key12": "5DAhsio7ttDedT7o6TViqjmBoohcCWxDQz16tR8Kbh1vqyedCXHgt6DH5wWNZbQMKSggri2XVe9wDJvSJabHvAby",
  "key13": "5ayBVNWr8oFjrcBzxwmZvSivAXrA3FDy72bTeAK3yWnCGpLWb1jKAqDJ22sT45B3UUrg7ELns6xzXdoffhs7cEFY",
  "key14": "5rSVcDEefXWftNcyeodwg9g3J5gsK1CfkCGhN1ykdRmPDeXtCrWoFdEQ6G8bUSrcVbJhq9QZLZo55hVsqQAyT7fk",
  "key15": "4UC6UjM1qMz2SD54BirCHRRnUJRVvmBT6mfnipDFgwPsuNA7CmVcAr6vK3Y7a4snjGU7kTRrkLLpMVUUcyLjHBWx",
  "key16": "4TLSHVYh2zok73hnZQ8N5dfuhMUFyw2b46tPkgKyTBsTnpoxaB2YDs6ovFYaHN6pxFyTB2VkSyB8FPdJrbvFzxdT",
  "key17": "25EfL5J4Qgr9zM4vdFBKKJrtEoFfrer2PB16yJMseRJ3pXffNLqEQAhauyAYLeGkkpG4v744KwdDeqeScXc4Rw7E",
  "key18": "3Wzxx5eyRVY1gmh3sJaT3gzvM1aQxpoz8bSSxbfFfe7KmjP2RseUmifnzcTA23eV59xuyj4wMFPy36yazv4GLX4L",
  "key19": "29p8dApw4fXELiuDob23CgKRTozhr4SAB5tK4ioMFN8kqPqNng2CyUkwoRuX5JeNMm2TggB9Ci8ymbCiUt1Z1m8t",
  "key20": "Pt4t6VECbuo3psJqNKVK466oJrxHtRUemgNUXoj4kkJd5RGEhgBvZfXnbW9K1BwxMwtPyZgG63KboU9TkmdxQ9p",
  "key21": "5eXcyKCPp7CBi4GSgFd1FxUQVkJJpbu7kYKiY9R7eodkJNzDKRjoMH5LgSobL7tv6S6mJFfzAmKZ5uuV3VK2UQwM",
  "key22": "4p6T8pHtCoCGTQ7ggw3HANy4ibiqGcRvsEV1Vooppn3LjJF7U1HqtTJcRseUD2XSUtU1eWYymM2fqQeyYmvfoEem",
  "key23": "4GK4nFxEkQ8NCRJpZE8bdukrqUjAeKyowNcAHnH8TAFkxt1kjThV94y9aMMbEYMtqwQj8ybwgjRh7kRz2QVy5ajq",
  "key24": "64pQQXLRNuAcHhf5CiPSNtfG1CAtdpzGxSm2uWx1hkdZymRwkp6uMnRzMZ2iHS7Dr6BJZjMnsnPHxrWWgKB9V3dJ"
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
