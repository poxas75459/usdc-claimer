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
    "8Ri37e9Z3pZLNYweKnHckGCra44Wg3fMeZ2LHG8bKsbe8cJBDo2siS7y25PTYUFc1SHW5mXFrnnJPwMkBLpjCWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "db634FsdB7xcgKSwNBtfCF3DshFRRy4eQtNWMNksrrW1jrpPH5dvNRrqc5qCvSafZYWy3xqn2NVeM7BiRkNgZsV",
  "key1": "3BFe7oJEuME3kamkkpat3q6UbjbphngBNkxey6rXt46n2uaZURJ5kyZUyN2vzbN3rjszkH3fieoFdJetT8fuVUQz",
  "key2": "3SMTNEzqGi5ubdUnwmhcvF7jQnDgWHJ4EvMJd83iZG6Z3SUX89xUBPhoSHKJ4ifaRtxYJQM6wvLP4eKMpPoqNhYg",
  "key3": "2H982UeAGpLbNp1YUvJdMCEZUmDzxBba3HKgEktm2GeGTXmRFH1Zt8ezcnYtRREuBsgQjAYePE8ur9LcKfT2nRuh",
  "key4": "3GzsJSPzxwcu7ckJ2dcpPCop5DeQs8niRk8TkAxqnk5c1h3TMmZhGuLmeCqGjVpQ5fdbh8jKzuFr22YX62kKtTrh",
  "key5": "3f6yLixCMAjsqNyhC4pngnBG8e7yJb8B7JsGHqkKajoqPShUQPMSbdcoBhMTH3mSsxhpynLYup15DVaSYBPH1Sj1",
  "key6": "2729PApq7jsJ7EzLyksHGy7UFqfaEeKB7eGL66AUGVEuhhaNxFwRFxBzHnu2nwVBgDdkQg6sEiJ1ka4SPxgDqAoS",
  "key7": "M6CeLcA5JCTKccpntTd5CyxRLPWAYBmoV8XwnVxETz5XAtoyz5VvGKzWh2HfCQTKVrTXz896bmuiUUkJ66jdCtB",
  "key8": "5vdhL4v5trR3KFbfWN4o57XSPNecjiuccuH5ryPD5pEdztfnJ3am9VCtCZTwfnqRTRq9u4mxQ8tGnvoUFSdktZ97",
  "key9": "5F3SZh6Xk4WMu5oDqGv44ugHTNqAcXriJV6novvthPH5jUX8ZxmDsuH1s7pgAMbEEdTWCKKgahTPqK76ys2rVLvy",
  "key10": "4BpH3fwgdLpSXN7vP55AikAGbDwgnxUZDvh3ENSN8QDmM3CiYxFpw1A8HPYn6R1EUBQ86Yc2rWB2VMuAZ93TnJZ6",
  "key11": "4oGYQkfhMX47eFRgTEajtw32scaNqzgdMvLxEHeFgZ5uyaXfobvgv3nQk1FHM4AGYkjJqBLSh8RKBkJ5nGBLJ1Mo",
  "key12": "5Dkjh1pa4gNNdebEBnnRcPt8oNUSizYmTzZQ1Tpp4wfGmCe3sveB3NB5VZAdSbYZKEUCiqGgJFiij1rKoMjRWwK9",
  "key13": "65JK19SxZVEDggHuckbPL6YHgf1AQA8zmqfCR3gzE1XKBR15AoTJwVc2EP4joxs1dH7Pizgmiynh1CSpfYorvLad",
  "key14": "2TEV8PN3xPJL3TZhrhKQsKKm3vwBLCSPdqjz14cJozQDiTeV6AyW6GDPgkZoRwJkyPVT6yztj94Gn9fDEbwVfTDy",
  "key15": "5wqZebKTKU82VuBqH4jQQreq4L4moQM9fLBci7zg16ccn3EzG1dgc3EEhFg4mFx4AUXffHaxSvouSmNPNCjjh6vV",
  "key16": "2yv251ZzTL8gnjrVWfeADht5UtTeJDGdi2d9jVt4g6se5cvHD8pGBSwbSmoAjizhJK2hKLmPUpzNNtbF72p8UFXt",
  "key17": "cgcTNtGC8XjzLhC3YuckgEBpzGy86qq6fswijGZyypyR9kevB5JLdkaudJHTZAxUUV4j9fC3P3q3a8JYCdjvyXZ",
  "key18": "5Gg1CaMgv7QaTD4SMxJ9F9ahZse2xrKyih7VpA4gEvp8Xb3QdaJEFV3vdY6e49rvr6Wwfb2VWDSNDbdRfB7CxqgV",
  "key19": "5VEnLswbneY1k8n3JRpioKXph3bDGZU4v7S5HW4BktWaq7UCfh91nZe5ygRkrcWM9NXGF4n5gm5oVXEgr6jcPewT",
  "key20": "u5D6ekv3g9Rf3n3rwYjexuZzwKWjNESbmWcrEmXuVgCUmE3uUeJouMtYVHwssbGJuLwKPxDtcHA5cC4V2uSP1w6",
  "key21": "2iNfqnYQNEBPnzs4ybX5gbvZyUwgg8nUqAyXMa1q2zkFetwmz4QnkSGyeYiLNKynY4SvqoXV9W6CD6DYwPnuf6WZ",
  "key22": "5N3L4SeWXUfo2vtKTRCxE6EpxTgziP5ofd5qmymmTjYvRgmicmi9nZSrd5v7iCzLRNRRSugB73PMT7EbjXypHmbk",
  "key23": "4fBsDrfuYMFJ4a3xEUiQ9F7AF67M131gGyEgXTgFpwhUD5ksPUsyAQBGGEacgyVUbyHBdtUW5EMQu7XCPCEBU2JT",
  "key24": "1rVhuP5waj2E6bffuzjfAEqky3xJ3bv47Z1AgaFoALGSWKRhhwpvUTDe5VAouJ7VzeuXGeDQvWHEzDYDjnMdkAX"
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
