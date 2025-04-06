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
    "3inimWuWdTu5KBSdpfiAZVC2kcdCpSqCd5qpmhvPL6brNanCJqtsWE3y2Ea23aePWx4NvMFmeGY9VTfpJFagMorA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FxqPmGxuLNhYLnEHRLY2xjadrmCivDg3i5VQ49MtZCfZMwtNr84dzQefEUxAtd8iHB22dErswJiKAYjuS9jm3LU",
  "key1": "cnMBgAXcLdXLkS2NC819eaNtAF1yNDyh4Dqmhn8KXhoh9yMHC9BgYCyxYz5HnRq5ViBcyQeujN2k2eBsZzRWBaZ",
  "key2": "61Wub1w7joYAKFrkdShMhehFzMpqDoDggTLfaNn4GzbfNQsbXtEn8EybhqRAMFRC3tob4ySPXf9QDL6ng9wCR23X",
  "key3": "2RSZwozGKyBgJbdDmqCozZzYusrXKW9Mnm6LKVyNC2d5jki27KLmZrSokTKrioVjTu1HVsXEwKn2P8GwLwoLpo9a",
  "key4": "52CCSrrMRYJo4Gmxpca4YNvARhpx2ieaKHsoAgQC6vjTSbqmhTwKsyvkTZYaxy2MbS54ZCpc6qMKGUWSZ4RjgpMv",
  "key5": "iGn4PKaKw242o8vnimr3sv4G8dqhk2fyurX7J6GGVtgMiDxNiJu7w1YKbHbDerMzKz24NgPb7Sx478AkJnJT8Br",
  "key6": "3mCF1bQX7UawhMBKECtsmwyWX5Ro2aFppDGyLeBR43fkh9mTZhwPAjjPofkFnGXVSnkfskL7KXLHcB76GXBy8tfW",
  "key7": "59mFkQTtzXT5iN2zi3MmeM97nrLtQNnTeA1GxV5dMnXdkAfkrYh5Z863CizEPqHNCBmTAWvBfd5bR9TwvyXXFU7s",
  "key8": "26SEzTdLsPytR4z5aLDmg65QZ7sJhwxjnEGxAE9ggHxxiuHKjK95SLp31ixRjk1eQmm1n7e9BP2osQWSieacnjpS",
  "key9": "3mjp4hsV5QRtnpwG52WNdasSxq1i7UD1uUM1C1dMauLGGS9ZxU2uD99m6Gd8pNM8akm7SVnZQsiB7wShSakCxjow",
  "key10": "VcVL8KQ87EsoHWnn8sWCRBvaMUJJCM1RmuMivGQgeeZN5m9czSDdgSdbn28oNS8mbWMUEkQ7KnSjjwRNDifTD3b",
  "key11": "3n4WzKFKopKKEMoJmtdHXFUrJBfcPeoGDwNPpoyEaUxSvt8mLrxH6p759D7iupnnDxS5JFLJyvznDUTjwfpGzXiE",
  "key12": "2eid8GS2xw3NU4db8SWtaHDSFy5VWFkss6AWrDSVowBqWocFUoZzdkqjNRe1qqMPq6nmQF4JsnC1m4zEe4ihqhwC",
  "key13": "2N2qEL5cHh4NrUjb7X4XGQNGymW2Y41HxJDde3ZE3S3gmCGsvnZ5AgYGb9Ms4eCNkNNvWzDJDZkTHmsHfUrhtNm1",
  "key14": "3cuwdJAMxTzzC2jjWVUPVFg4yKiyxLvunZNtaQEq3w8uiWao36xwE5bL8jzKyEtHY7pF8ihi497TWeczDztnLVbb",
  "key15": "QCFoXZpKVvuxLT2hMwDE4KARVZHYSbprMbBL3pkdEwgtgv8PSGrEKJ8mgn76bb5zzJh6S4pGSYe3ZFwociffP8h",
  "key16": "4oi2ep7DGnpBVm57yanZ16LvzCmw3Q9ifceqNggigYwmifuYt2CVE5RC8WUxdgPbfZ3EStpXMPMmGU4zuZmi2Jn3",
  "key17": "2enZij78hR1pMm3Bzt67GK6JyEphUpFe2c9gooT41rvdPizEccGiKq2nBU8MEfb5ReLBudXz8RWPXRYhXE1X1EKZ",
  "key18": "3yR55fEQLEQAexUbnRsjxRTCd9Es3DQ8ixdsjSikEfwyvhPQenUhspvxxh2pjeqHB9AU4c1i9oKf6wCj4HR7i4zv",
  "key19": "3eKVYHiLf7vFvMJUhkbdqgFU2Spa7mrV2RvubsoDkddAusAoLb4ADK7K2rkGSwi4s8VSAJquxzxnb5JSavLNqLd2",
  "key20": "58WDwwV1DC6DMuZK37qesE5iPVi7SS21N5kMaZGHHz8D4AoeAYKG5rPAyUkVUtkQz9AtsDXQGm41LD68Uoy39FmA",
  "key21": "2BEULY74yTzmGjJ3ATStnXcty2WeJ9YihjFG2VonfTpybMdx5NURHaMyvPzaP4qmHr5iD4LMM7mzV2zBe8SuZnq7",
  "key22": "tATfevFR7nnPP29MQJWaSUzuVnU8W1UVNhZQwsBoBgmbxuFd8FCG97ywA6grB7znvhXsGoYUUmhkHyMskNRNyWQ",
  "key23": "48umzLQxRbqHpABHuwjWS1JKMTeSBhuDBsMWWqvqmoH2zyLCzffFkCDutby7dFw3rq6SeGYZHsX4HxzpvfZ6P4dc",
  "key24": "38qaRrk1yjHwbfigMQLLUBRV2oAkmNZN7AbqTdv1i5oMSJUq1s1xuHmtEtf4jumz1tj7kKdSFGTVCfED6AtUAHi5",
  "key25": "5qESP6LBNYKtiUpdWrCFw2dvpQp1Fv8TbX2DRnTyGGk4ntjXoD5hVUpQfK9Z16GB3kW9wqfQBrv5qid5wLBq9g9e",
  "key26": "2obqLoJFz3scnVysutW3V2GuictExyUdqyD4NRN6hmT6FcNbFms1fgioXpkbYrRs1gZukSNDouRUTRGzPuhFPTR5",
  "key27": "gF7qT553Hr6hjvgPVApxPxUaLzUUGLmMBsZ2FJL5XZDpjufYchpbUH9KirB5f2F7JQsRUBgpssXDFjAHCp13QzJ",
  "key28": "qLxT7GwgW9yacMiZ8RmcH1XfiMRc4KFGsTxcLqg9E2CZguRKZoSmkNLhFWkmg1bwwbCGFBcSVQr2zmQPzb3qdMd",
  "key29": "qdx3kBF2rpxY6pvZWnivk5uzXojSWj8X8AUSMb2ej4V7cKdcQpL2du747GMwgP6g7yw7bzrrsrLsqLhjzY5zAn4",
  "key30": "4rt1C5jkUeLaa1HY6uP9c7iT4u6DV6MRH98zAu61hZiABL5Ah2Bqxme354d6RHevCmsUHPokK8pwbT6aWLd9HEGa",
  "key31": "5ifcgA1EmbbhNCkgn4SYnjLCkbY7nePR5otiZhHkdJXJiHZUF9An8hYFUMmgG8QvzLX86hMMmQujqkjepNLEfxLx",
  "key32": "44Vp8w9GM5nHPAQ4BnYfeMNg3GJN96heJCMoTSHa6fUZDkPQiSgvxvwzNmSXiMqcB6xtUL7pEpDi2xrBjprFrwkt"
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
