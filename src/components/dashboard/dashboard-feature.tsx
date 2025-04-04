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
    "PE71CajUXdrKB23P16KNQP81pptk5BYUF2WbdwXAf3ko2zNbcwUjmK98WggnS4LDziF9uBewaRKmDbphnBHcqqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwoQ8Z7tJjSv8trpMu5WV5MFY5eGnDGAQC3HY8rkfpmJB7pLbM2u7bf5tgvrCzbvRvftNY9EVRcV8MBhh4ggJV",
  "key1": "dZmrANsWGZrwBowVnY48JoeScVMt2cbbu7tETyrEjZLhKrLMmcPC9Khet9f4njzqqTJDU8t12a3v6bXUoTMJewt",
  "key2": "3cYEXbSKfvFGhBDp1eBjpmQtzEwf8GpXZ6GfdjDZYHyuLN3RxTKv9buuwU4RNXuzXa3yZtBQ8VVtBo8UZRvrkH5R",
  "key3": "2qTZH876LPJptrrT52XDqUou8Ytswa2baUag62Mf9niY2SbCUiYzG1p3NeQH5u2phRwZ3PPWQxFbWweGheqP41zo",
  "key4": "BvC7UdRMNmTLzGLUGKRGadCqdYr4vFXoNDij3qBLmD9zWkcBpdPef6P8BfeQgLko3NLQ6hTFfj3SCWFUH3r5twv",
  "key5": "3VEqRguyuPxBQghx4tnRURnqZgbNupUmbpLf8GV37jJ4FzDDVbn1uSVz6BaVzSAy9XpcYGGwuyEZZgHfGzajWG7U",
  "key6": "bQhkDhpENr6tnBPDmTvSDBtM1nLemQ8HiiQSWamNZKXDBgZbcp8duWnfoksdY1F1SikfQyRYPQdavc2cfPEU6Cc",
  "key7": "4aqpewNcruFaFEhEjVxZVzMTfSBCFDz4Fy7cBSfQzHf9Ea1ttRYGmVS3s3FwVmCp9mM3GFGANfURAatV2Weykfg8",
  "key8": "38mcVMsKsNecRwLQMSJyBe8qjXagkMAXeyDpaSExAmcgbYa7AxXwNCffsdG9uytwti1XVSm3Y5Yuqn1hzUbJA353",
  "key9": "2hCdVGyrv37tkPhjp1yAG7R3VRJttNMTvXbm4ENBifCFJeJPq8ok2qAkAuLwWhq7wdVnHjmHKg1sEhzd3seBVD6v",
  "key10": "xnSXc53tAzF6h1LF4Db9MEmmWy8oazgpx6T3L7717m2HH6HXnv2f3uACjXXembAPdhsC8Sv5iY5CGHmMjivWqh7",
  "key11": "2qDCGmkeL7G8KsAZu73QmJVvThBoTuHqmuAVmBTycVq69yJKr8g3eUCdHyKuF2DvaDg7uC9cuR93V3bZgwbEWahP",
  "key12": "2RmnoCv9ijhaRkdmbiU86zUVFWJdEWVXFykYNQF2xQGPqWUZ5vWZnjYPtCrF54MPHg7kGAoKxwfaGw1AZPk7LXWG",
  "key13": "DuA7zuXXnBgoFfykWDuC4NM3ADunTFiEb8uLNwvUvP82ArHbqte5zJpysiyvHmnSrTuTHzxbrawufGwdDJr4edt",
  "key14": "5vHRSrKYtzvK4VtvJonhd1TdgRcLAGtaoCWGsRDfQMAujzZzjHtqCFJP9N4t11ewRccvfCLRDukVsCUcHjSvPB9i",
  "key15": "3JXv8WNQPiCtwViwujVLGFJ5GRnqAEH9N52K2KJeN2pDNi4rtZdbvjLposmfknTcPWeFmrwUyDETuxMVoq1KkwUG",
  "key16": "KqDphEtcuW7buqdKPXUcXz7Qd4RiLNBVmfCMywLu25G4E4LpygnUUftJizCsXnM2rdkNqApZC48G4oThG5smRK4",
  "key17": "Cim8Pm75xoHDvkYEZVfFq2Bhz5v4d6VXCVRNQiYD5QDxBu1jebFeueAf5VdVf1fd3Um38ZeyxMNSgVzKFAaLDQe",
  "key18": "RptBV12dba63mdYFxY54961MZ2QTRK6wvBQjH3F9opGCsZ34s11XJ6Wdb8ijvwJ7n1fENu4Nc9k6XKstF9JNe5t",
  "key19": "5EqDqtR2BqoCMufaYCPPXv3yVoKPmRFCie1giTa9FjtK5EcedhCi8rwRoumZySr6tvNQz3v342v4zaShYfTDDUSs",
  "key20": "4k28gZC6X14TPJ4FMvKNe2KzvKM9QJTKigJ3u6HzRfVTr9riVoWrVN4dxYNUHMpDMsb8VBjipiWUPT7AKURcQqqp",
  "key21": "2RkV7aMtJ5QwjG8mpj4jVDTZ3oKRpdHhEsK7xmCQzFGBKUQ3DKN6hQTKEY4axHY5SgkXP2qRGnk6jrQx5XRLJygj",
  "key22": "3nX7T6LevkMigFMKRShcsf2SJ7otGMpZRvobf7xDTSoezAqQDZbZsL5K2A9CnUPTf8JY52XgsBiLEvU11RFVMryP",
  "key23": "3iuGDFZc3EqYbPsbS7KobsuZ4mn7XiMjUYxrj9tv9fa24K7Vi1kAXvpaK9U4mF8PT4oKBGUuxJRWxXtjgw719FQE",
  "key24": "5u3BxhoEZ1yHx5jgZYgmmvsHf2XBC2MSvCMz4d9SNF5QMmeowpH84KMSDrcGpHqzHgEFdGBjCEDc6v6bfVpULoa8",
  "key25": "5vd43eyE99tiq1QGsEy5R4iwQEdbGuCeeiJssCWZiGjaz3ZPGXPYmyRJ95gNYMnU9oxgFjbd5szHMDbDNNK92MXu",
  "key26": "29zQvi7MB1pxh4orzZUcgdPdSvArfFfAkdnxWomBzV7nZW7dkJ5mU5pAyZTiJKZZasa8hhKeDeG8jkq9DqhuUPXv",
  "key27": "4Xh1TeC2crGVZk1j52V82E7UNufdgYvh8S3zYy2pZyeiQmBNowHfCFFehk8x87fXmCDWcXyeZXTMePExhUMRKcB3"
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
