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
    "2uYLrLVXiGhDErQz4ZQydo5t3zcHCQDwEDnkP2LXMebPnTqVxwEYTE5G51op6u9KSLxk19cejvrmkjgE7ZUZyErx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DsZ8d1NGPsqbU7dT3opNEmmAFEApndS9MSb1ikaRwSWV77K2WHZj7VgkjbVBEFSatSPRwpw6Ydg3F2vjVL5tL15",
  "key1": "2D3SfonitEApo8eVxmEe3xgvoQXwVLrmCrf7DDPGxkRpJrHWVedmWbjV24CG2qpSETo31fRXPQnDjMoimC9YKYXP",
  "key2": "2QtqMfUGGAhkZcUsszNXsqCafqdLz2GCBJeb7UfqD9sQkuPcKrE39b4oYdc7F4sJaMbs8GxTMUvJHYiSkGyFsW3X",
  "key3": "2HrZDiJBX8BAb5XbwVdvuUBo6fkKDaQhvXYQA5uFuXnFXfkMSpbPAqrRCVVhJBkFNWX1hakpsgMdwiJ3sHVa7ctD",
  "key4": "4UZRY3rkdjCK7C6dFn5e1hU5NtdAWRUhjbCUbv69kcuM8meLEdpg6dj82tY9XbFXBkqqbDSrmbnA4bYDFpyxcjGd",
  "key5": "2cPaASavHhS8BPnzeg5AH6KdMaRMZz4VBk7RrSn2UBMmfNCnQ6SzKBK9Wd6H77cFBSpH2NWbhpN9LTWYnwpH5orN",
  "key6": "3vJQewj2sLkqvAzZH7UzYDFyQ1hELdYzH2uRt8dKrSQYT1QsPoeXr1RtyhBgHfN3GwxsQMPnV5i4EwfdN5N2eZ9X",
  "key7": "LmsUxyKwsEXHECjSXqbYn8sqVdGA6Ed4zzhxF2iXU6MpEz7wCwzsNiMfXzefekXdyEFN9kVHCZusDosfSikftir",
  "key8": "2sqe4uWM7oD3LQ8kXNNCAukDf2GtbJ7Fe9mLK8pyioANX5A4KR1cf47xfsWbZ1wjZm5CRJ1XWur2wmAtXmp8KgrT",
  "key9": "5YbH5darAztsazyb7MarFFTCAyZsCobTbhHzME9TfQUGXQ3DZxpKKAa5E5exCpErhTmnkQRWAMvaRaizTAzLptGg",
  "key10": "2ZiPbTiQyq5fRY9hXCroR8gAtyfMTWxL4PwwpKap3sPuJuFJKnh47Gqo1QC27fQhsJugDxG4SPKTiiorndxpvsUX",
  "key11": "KzfuKLCCqQsy9akSBiT5B8wwuNPgjKDZXHj79Y7dLs9uBvZkQ1rmWGLM9pqJ1DweQX2EG5gQmXTMvsde6kWUQei",
  "key12": "5AiZZ89fe9Yb1uc7U5WeKkwSZ8Qkzf2qBGhH2r5J6cP2g9eaJ3qkSQ5qrGX8KaANecqfsVSsd6YHXycupoq7GEMr",
  "key13": "4hQnwwsQsxo679P2QeKx8cc5EdMwAfizbuHWdmomjBpGaUA1hNG4P9GkM9NKKfus486Krx8yQuPBpoPMrJYk5BGM",
  "key14": "YhgX7bYHDwn4dTfpbHMof5VHZzXUECXNPmSqwsA1Cgtq4khqzcvM6a68UVzckLbSDyNcKVXMjuKCoEKMFiz7QK6",
  "key15": "4fdQfQaE2DnccccQ2YfsVVkYdrKs6jL2H8kew5SUGs3htZwyQXaSjuz68zfzKueCQNVnU8vpuSJDWb53m7G1RF2P",
  "key16": "65PiAvjhEukkZNV9dNqeuKSPkxF3tvm3YFK7VNEYsFasibA1WwhK3ud9rSndSFvUiLtogMGn1wKWAAPbY9nNn9fD",
  "key17": "4WfsNr3U7ZbD1JJNT2UG3kMZSwwRYgrayjJg6JSmqgP4phTTwS6U8W18MMhDeVuL1hxMttfSSWvmU8mWC8Mk8ExT",
  "key18": "2WDXkbZXtLubGwTswTSSvtHRVVPqovGk7ABVZbikJWtGXCTUrA1zfPWeop9PHDi6j3cHsw1aC581XR2SRQccGFnX",
  "key19": "3yWz9o8bWKTni4K7q1chM5s54SixysnWYVu119Nho5GPHnDQfBktCFb48N9nddqKFQnDYxwsFSLc8JTo3oNTQCwy",
  "key20": "4v7zhWy2KcJVp1Rt9Rh2WCRSGawD9VYZhgGXmCMXWUyjFcABwBGZuJcVWXjGwhf93mhZXdpi4Kir1DfvWaxANmRw",
  "key21": "581VL2PEpoSVVAY5J4PWunP1JF2fW5vZ6v3u62QJJVo2vvppb9fnqYw29nQUDf4TcNPXRg39KuMSW8iCNWBy2AVx",
  "key22": "yZZXsNeqtduPyqmtDDUe65gZBeEdQScSoVrnTYEaoseHPumz5giTF8SkSusikUtZnxuuFU2H81ywVzmku9MRzju",
  "key23": "494vDWMyLTvPxmKETBZHKsCLSBCitVLWerWxRCeQfrP5SkTqfsL4KiUdcPEcZjw9VBwJn1eu75MHnWNouxCiJLuJ",
  "key24": "2M2UHSxG2eZf5jRcW1gaG1w2qbUQ91MhLNQ7rtRTab3tYBq7MSBapRdYLmKHfDAiCHEbCfbe9QsE3KNg7wAoh2gL"
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
