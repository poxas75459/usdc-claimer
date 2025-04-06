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
    "22XBSFDJpHKJZp133q1cuRtCasaxLSa3cktnaZX8HsevKvnRvtv14t5jLdRCpCQNZQNmyvom3C8a7Ww4NQdVMgeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yps1X2QfY5d1tSQD26rU3DPqaEDZ2YiuUEo7GGvRjrx5RB9ZQFNvc5BZTvq62ujjma4WTXgVVVZmLcVDf4SWFrG",
  "key1": "4aDkze4ey5kZjv3J8KmqpqU5osKD5ZZKhAiA3K2LEP8E4156a7ACnxKsbCxf3x5MvAdhbWGnkhiZx6mnnw5pNKyG",
  "key2": "2AhYShf8MnmoacVDuSZyiq1eFNxAdzDYhoQLBRVBR4dC3bic7brCpvGy6eJeXhHR1qLkXVyPkV7BEhzSMHCrp2pg",
  "key3": "4KZutpNnikSZccXrEs4x7S8NRabY3omQ5vdJmEU8eTFkNXMuR7YueDna2tvj7PUHJMWCCiUhq3txAZzdpTQYFEsp",
  "key4": "531maTrnR8TTSZEbEAiFFXmkWZj7pukLLWMzis1YkP8NzKc8eB5WYENAh66apM6MPQFNKvyCUSUESeuXtHbMD5Qk",
  "key5": "2GCxgNfPrNA7wDdQUkL1wN7ykFdVboThXnRhyDXTTrcLY5Zi2pQwM13TvzrHRtdDJgfhBdjMCZzqK9UvMzg49MWN",
  "key6": "2SaFobTHvXpnvwkt9CFfncbW2N7P6GKAmDGfpQC4CAinZ6wfnP3k2Y9bMjAaW6nQbbPwrJovYYKUJdffMPns4qhy",
  "key7": "4bvRWvjpJvYCsC4y7nAAdpnHZzY6HYZm25CiARLZxEZf4svB1mz2rtKqT9Kggndgzd8c3FF23MZpFzYYdn1tdztp",
  "key8": "65r3eExP7ce52XBEaZJwyrb2uxMAmevPCjcqrtVQhTBp5VcaZTFJYrBvAijC5P2bErswYosfEHKu7S3MqQnBiSBH",
  "key9": "2skSKdgV7c5XmY9vPum6PaiopG25Kjb6M1pMibH6hmtbRJ58aiP2P8me7gYHx7EPc4bAAVkEiz9H5EqzJgVoSLsz",
  "key10": "3EzH6wRe9TKiokCuzmLutjHjJWy8HQWXDj4WZdWUBE3ufR7XsqkhJ2JPBp98qiok5uAQkUWiFbmvKJdG5UbBm46o",
  "key11": "4KY7KbMvDUSnh2yMWkMWFnXAnYJDMerrgbrpfb62bPg6jQ5h6eQ3UFxs5eEKyYCbsnAkaHepcUeXDRZsQorPtnDD",
  "key12": "4CLAihFpFwycqE7uDn5PonCAykvY1aNVAtyGTNn3tx41P4k8WSyWTsRVrFeegyGxzwMj2bTeFM3RtH3Lj42V7S9B",
  "key13": "5xMbV6p4mtKTZHB5mUNwEEb4HHrd2B9nFJ5fg8FDGv4FL3HLvYiZVYh5ZobCTXaRYVqYTeGnpDf7bDVDKGeyGvSs",
  "key14": "4MxorBUcpJCbGUEudy7yMFtQZki2UtC8jGc2UAWatRFZFq8mqGUc64qXTYr5baWGdsFSU4gWFVWSUSUCP3dYzRmL",
  "key15": "2JfLimKRpZGWpCjHBq4sHLVgbNJ4fEi2rBfPLL7AcZdCkAANwhEXPBDWX63PF8PQZb2LSrHLUnKyxChKWPJTwnmQ",
  "key16": "59MVumvCMm6BfaLRmAmA1o7B1WwSXwGZdN5DHVuNQMdMLtdSxGQwyuAUhcFoacA2eoJ94kDrEsKeA8Bo3jMwxiB2",
  "key17": "2htPAfd43LhXYnaN6rxi777g9VsnGzQMLR27zrQNQRWTetoD5Zh4CUyCQhH88qYXQHtFmkvw4JM3izS3GrG5LACA",
  "key18": "5uofk4eQs6fvhaF19Dbit6EY5pSGM9aBZeMhr6YBAiMgi2GHVbvrG729fnDud8T9FCPvNPmuEh4eq6QPivW444Cb",
  "key19": "62ParH2REtna2f4yriLNJjFrp8PHfGfmUECDU2dZdbetz2prQUpgbcgv12WHKbgfTeEnmYvpFzfhbLLRFMZZLUwb",
  "key20": "4LYvARsbQzvUZQof7uiUDgZkf7oJWSai28gUuLRNPGQqpqdhugwjpMMyJxa4fhpBYSrHayHLzxo31kyrgdBraooK",
  "key21": "4KWvUf6m2f3L75EVfad4ZnJri7jrNKBywihpXp9Prs1FkM891KYU2fro3Em2ndZJMSbDkLsz44CJELu1siU1o31Q",
  "key22": "5M6LvzHUWRJYPGsavYvGnuqkujEiVKKLLr8CKG9hajL8oUnXocoHHVKYdg3qKhejUbwAi8aLJaUFZk9YkP5LBtxi",
  "key23": "4PgDtACx38gpTy3oDuVGwrFseTfjUtA13XcKWwKMqAKGAD6TttoyCaJ8nx34qmJzG8iFKd8EzpKDMQe3v7PkzyWU",
  "key24": "3BnyxK1QiLfiHdkC4iaDUBSdH2i3wufHX5u6c86QLqCqc3Hfp4dqNZyBoQKYpL1oZoRpUsLMYEekjDUFU7Pnjrhb",
  "key25": "5PSNQVyABw1BbRD9SVBc6EeKBSqbXbR5H89uusyMuzUwFDor22DCEayr1Q5yN5LbHL1rbRA9EpRDp8oTakYpWgSB",
  "key26": "2ma84KDFemw3PFT8tPL54Q77CuQiyBAYAVR8qBSUT9kzGiAX4GAunNWnwPgTizuYbnJD1B7hK1GcyvK4KBZApKBr",
  "key27": "5regh8q3tCYGnGnDJK8VbwwJGUVxjETd8FE5dRXHVtvKUC35kmKuBCMRcq44ABzd5LRFKiKwpWfEeMT3DVMXMTL4",
  "key28": "2mHBigcdLVRRyctsuWuvuzdWPZRXE8oT8JHJjzXWPt9DJW5cpm5cj6uRRmamoxVzTwvZ7tor8d85Nr9yk8vcaxdS",
  "key29": "4rSDGJVz96utFv1ePmzuxGYHG2RbiLgu1t8qcFueKihprcJjFTtSScNR3Mqn34nezzL5BAH6W1TMG3pLRHovGxEE",
  "key30": "49Eh915vjL5GN2BEYBiz5wrvp1xP8PTMh12ZPdGnR5bW1n55NVfuhpHbeaWVN4EiXfwRsvE6MLLdQDoDVGJ7Gqj9",
  "key31": "FDt7G8BeCTHH2rtKAxwxcXhg6JfmjbanQczEESRtNYEdBZGdhVVmjm4ktKKJ8wrNVzWDcPyANce1eifKH5RKsLK",
  "key32": "2F39CfcfJU8mccU3pTKNXZHwbqSgbQFJiw2Li9DbvmpzAZ59Kr6wgs7SGYszc8r1sp5uioJRX8pK1QvC952mT11g",
  "key33": "2J5ZS65ZyuMzJ9QHuJzrzPFshsEuyEivtVvxLRq5hw3eJWCEz1fiQ3AyTKfT7Kg5pE4o1viSKFVcjbVq5CfTQL7m",
  "key34": "3SQACYr5j7hBes1mT8PuMQxRerPzq1j7F9qFqGXv5PUKGrGrUN2BruMjyWBrtcNqr7Yffac2TwSoxommpQxi5XHu",
  "key35": "4x1jXnER9nUirPxK81NPM9idL1r2b8thoPBwaQ625SFHqgEBFFAchm4NudUvzMaocgirbkkYbEumM2Gp9p4qpXHs",
  "key36": "5K78i5c5GZaF95uDheWpRaz8DmjMsb4dwPheo6BoByQcmUpdAx59JdZxPUrAAmKG1gbsNXzH6HBFWWuRW267p5jr"
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
