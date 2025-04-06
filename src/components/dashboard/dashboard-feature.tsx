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
    "4Jw4WsvSfAfbBi2Nr7Fh493yP1CTVheRz7MULDocUi2Kis5ZBqitBShD8k25sk6CNGRYyuxC5eAByqURDvQ2JWrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Biiyrc8w6zwgQT4u45v5vdEzGBhPN3RG1p38R7f7FZxYQ1f7hgM1H8dEubnwHR3nUkMKCE5yeBA55vNg12ifLmk",
  "key1": "538uWz363ocC31CAR39X2Wq6HJ4EStwT8vaPF5GRRmcWzBxmZTu9wmchkuFmHxL6D8uxmLqArqeBVJ3grnUPiW9K",
  "key2": "4rod9b3SSMMBC9bMFZV9N2Ykx2vKLEcfjoK4k3rqmdNDt2p5iVXiMjNZmAr38kmWDXjkENWKsZVmDeMVSmYF3StM",
  "key3": "P6HBoJHbtmNNBVCuDhbqbW5qrPRyuiJKeNuVjvWzymPMsicVtgHfdCXgPYsKuTcdqYM794LoM9TrLA6w8nTgZcq",
  "key4": "5ib7oxiKvj4xTKvLiwmzxUhndQPmdV2VAhPYjqwn2Yh4WDyx7dmZETzzzm3fE2dhJNoay4xdSgUtENXExf4yUHUV",
  "key5": "4fn2HTLE2pQAGHbnq8heKnCdG2vejA3W3x9uSaSBXrPCtqxw9LbGGcLtHjFD17NpHkQWL2zFVFqgyNWeu3xV9nky",
  "key6": "2HhMbkmE7zbCnta3oDGRFJRVorekiQoG5YBxSSWdT5Jpa4ohNzoWdX1hXyFbdT6hk1Nr5nLPSE46Mfxe5X2bEgbr",
  "key7": "4FZU2QJJYkPah9wiAGRZv3eFLmHxTksqNvK5ps5o5gcExAwJnhFXP61HUbV2aj7en2hAuTmYPKA8ACqFKwmhgXbC",
  "key8": "3cuvouhuW58D7wNqiyfGqL9UgqwRDFFDrxvTHG4RXX55m7TkXZxoiZhjHStecfqes9qC8RU9Md5ZZmmzv4tyD8dz",
  "key9": "5h6nrFzBzFaLvqZgZy1o6hua7q4xQ8coaavPskpNoZSJfq3jTqYuxZZ1vRqgapMYbxA29wndEfDmi6pQ99kPQXPP",
  "key10": "4bEDdJLmvgSKtynzGHK1gPWnsvqZWaSWwMjRmVWsgGMxKEL1jtAntpjYaciB7G2mUwCesJCQzj85n697ASqHPJv2",
  "key11": "35ZwNQqGZgyXnHLYoscMQmAz24ZHUsrkBLb9Mzsdegwo54FBbYSwM51i8tkpxQzxA37zXN65tVf6FGyT7DwHZoo8",
  "key12": "5ab3rnXFtmrLGJwYHdtYLkp1e31FCHvnEmMmXqg2Vkgn4cV8U1NQd2NLSVNfj9s4ewfmR75p54RfgRPLeotfyeMg",
  "key13": "4N2bcSsQCza8whebYv7j2otYMd9vr2h4hHLrUmF7ZwWdGVCb8f3wmrfAeCntUx8RVRGqFAThYktk74x8qiRQ2ZDb",
  "key14": "2ZG7VSUSuj255XNk3e25m28M7XbJGw82bMPH7yMX9zpy8u7NvjHxT7hzPabhKJhqzdPfaLkYVqCBxoAVxizb38QQ",
  "key15": "4pv7644c5btC31mPUEBkdSR1Fc6hDUyXu4VZSyyLZ3dsX83WmjN9MRa4FbmtUCww72fbGZFxiN4ovhZSkubMPxrk",
  "key16": "zWtn2t2fuDVichaXogoAYziLytMBMawtctCcfZJvgjQP1FcD1bxHXJhbAuz1x4WKmWqv7LHA2ADzQEqVNAMRQJm",
  "key17": "3mudXraJW3CHXHmPNz87fXAp8AXZemqUNsBereLa52HJftw8QyxxYAYd6VQ41HQrB5s638d1rAtCGENqen6279L2",
  "key18": "4iQVU43HVYiEX49YuEVNs1X8yRVB1jzmAgoV1Vd2UbfPRSRwKFivHMLo7ignmWfh7TPZJcw1aFctAYVWg3LQ1Y7R",
  "key19": "3PyyWPnYkgFnu5DyEhrdqmbv6GH7hRun9S1wFsTHxsjLnyscKCmsRxKBB51HL6WkXurM538WYBbfqRV62JHcE8po",
  "key20": "5TYFn5R6ykr2rXYCQqcbgFrrzRCJPJtJkWChvGtmFymuFg2maBzjzhSQyBLHBgW5wjEe19VtoycoZkycNUgJGn8C",
  "key21": "2qdkyvLb22TyRyQ5BLUNFDGWearbJkMj8xXqqaLiWpGJ7e82g7nGvPHKYTjCkBtY9SQbxZqWJK4rCEg9zi41CPc2",
  "key22": "2TTpLKGWYEMwpJ4xn7iK3YUrFEcjVeCoRx5czmvxUPhhpd2qxPpvZhNFcuL9mCkWHsJXXbG8ASp7ufAPXnpGZNhU",
  "key23": "MUi6Sr64S3WJsZWmkgunJYRzRpFX2yBkeq8E7hkHqfpNeWy4bzouVGEBbMkneAWn2SP9XPgp2N4jrknHBoGxMvk",
  "key24": "5HBQes9AgpKU75y2zzfKRcKH6yrJrhWM43DaVeKGmAoF33EyGvQXDtFVMn1ZcqDDyAJ8diEFJtHktrQmwmnCY9N4"
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
