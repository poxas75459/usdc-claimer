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
    "3pB1G15gLULFYkw7CvXKXtZhHwBuE8mHxW5kb6SDCLokMHfPFxaEDcTjBSGB8op1LNvBCnauw9LPKUMBRT8V8NcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jea6PKubg3sCEGeJLTWtkHFNvRaUuhj4UJZVaBaAMUJwjYZw3sDTY8QYHTE1Xo8R9CPVFp6wVgYXYszdKLYhQaZ",
  "key1": "na24VDjCHx7nXZcWgoysLPnZnakX8ityZF34CJD756uqLeeFNm3V6rePqgXxMYQNazQrn4QSUwKr4R65JQFad79",
  "key2": "4YsUhqyLmVrqZs4bunTfT4dEGQftuMtg3rkZWQnrwUkgmWXud7RqmiwLxDppjQ2gPpc2gJjCpvcp183miDAWstWC",
  "key3": "2iJzFaGgkU2NkYwH7XtHXWr59G7TdZrGmJcZZGq4Ugz5DevUm7QRc2wazNduVgSib88YMRyNefpng5hHDDsVGS3n",
  "key4": "LQe5XtVuMxT19QwaaHZphDdTnHYUC3WfVTX1nKdQGYeoTyapoVBNaBDu6jfhMMUg2ekVx8LmNiAanYtTkxTJ78F",
  "key5": "5bxduiRXghd57hBm6yVESxEmjvsVq8wmRQmxWMm1fx7fMuHJD2yi82MSZQZH6hBmeMa2hoAPsCoeT8iDJdQbnVRR",
  "key6": "3Hfc64WSndUvg98S3UxerE6eFTmdvUpfw7BdpAFWwE3nBRhbao72whWXZJe53dD1JbYaEsEstXmNVNDhN3Rw3vs5",
  "key7": "4R1RcMQgdViXMaZe4VpJKVfoXrmLwSCdQ5JDD1U1kQ2gpLJR3FfPSMrh4w3w797HTmuz2MzugQ6gAeiai6GaiqQu",
  "key8": "44yK354YqahKRY5xsiCHeLWHJLSA9yniFeNt4YrxjJSBXx1XmoTzLNzL6xophjRcMZp282M1Wr9W6mzRWWVxpZ5z",
  "key9": "3WV8xVbVBu5tWU4G8jE4pPabETWNDP83iqJcDiZxhveEjr1JyWnx4EeCqQH8i4cdNSYYvzmgiLQRadiUVQ1EXrES",
  "key10": "4APHWBSjCsJ3gXb28nHurqBhMNa5MhbDuE7DZKvSb8A894nHiH917QS3qk7W2CsKRmPdzW4tFWK48pdTeyW46Znf",
  "key11": "FjPa17c53BpaEMKSeKR14Sja4gXFtVx6zfjG2E8KociNujFKcTzWDcGX2GgVf7pcMntin7vNE7LHCd65rTksKzS",
  "key12": "KWjaWQZUD9YwWQ8n9NDgn87mhSUMteFTyZhHJ9ACE6qv5atyfAwmGGb61LYkNb66JBAgx6T5GxVx8GD88sEJro3",
  "key13": "kNZMYEpGU1k4HRGPtEGHNhjr1cqEP9jmbMYPoskLpDj4Rs56kMbzoEYhrF2LZysugj87Vz9QYqaHRvGMhgPdCPS",
  "key14": "7LT5cdtxqQ52iDmsQXc8PpSNYwiMmrEa6JTGP38vjzBRuYEhhnyrTrUGxAbvTrbkb3HQawJPg6M1QYAV5qnZUiS",
  "key15": "35XCEviXdKA8Rr1fcZZrS3cgzY9GwwsX9zrYXbi4J4ikoaRoNrLuowiCEzTdjdy75sZGoYn3q2xLgAoR3fWP2gcz",
  "key16": "56D9ehGRJoce97QSLdk2J6yJbYNxPUUCi1NSkTth3h2YWzW8QGQEfxRLuqHfwGFgQ3PCwCtKKebJwdWt4zzY2cZM",
  "key17": "5r13iUimMUa7Mspk1mWJWucAHkLgFEATfdf1wnduExbJB7yfwSYPbk1E1M38133diBT5jyZKuTBrVDsA1irnb3pV",
  "key18": "gxKRvcPgoLX1nPZDGFcZiqZxWWrXqYLtdbcjDRL1dEkLjTwhumQPCpuZi4CniRFUoSf5bHRzaJhcXy6ReEnnkMU",
  "key19": "44p88nAbE7eWrYKTpzXC54gNLcT25Y2Gs54oShwAAiEW4rFEGqgADy2ydG6UhyWUhWwNY4GNQTRRVMQESPVYfyyS",
  "key20": "3nvsQoSkJMze2ZEzvzwzAHgRV4cyM5JoGxgoRsDsN5meQmzjrf3RWjJ6NA5XRd4pk2No6aWwhvQwQcFSdeA37MVZ",
  "key21": "4xxBeADVeNn34PMz1C8WydzMhgHqHriigJGz7rfJeLm8RJ99Vhsv3TSewMp1MxwzijDRKYFSXLz8ZJnYw1825zTc",
  "key22": "aU1kggAFdGXSFGxF5yZcwbrsj54Vxa4ZxEDGzefZBBvAMBfFT2tdi41nW5S5FBDTudjbkFG3v467LcfMGxAfu8L",
  "key23": "37Z5HVnqCoU3CW5qqiuqjPc1VGM7PxTK2c2r6ys5nNdcKPZWuq9hyBN7xtcc5PfZmhk3pTEgrhX9QaWewwoS1cd5",
  "key24": "2TuAvAuWNTmY6cBeWf7XsEcrGYxroeEDeiJnBRExyZL4BM1nowDuu48XSXJYuPMuSVBPkK6RYmDai7LSqxB2T3es"
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
