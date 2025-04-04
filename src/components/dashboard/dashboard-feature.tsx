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
    "4bprQDjrCnc6o1GH3hj5TixJBTMN4uxsoxRyC54CzKaijf1x2fGJN7HWM3ho7HpEqhAgYaTF8xfBvaSNY5XdAqdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kPM1MT5EGdvLVyC2z9VFHCqU973nMZ6Ej9AMhehZgseUZ21bWEwQxi3DEo9uv4Hjp7rDQmMDd9hjCCQ3pwaNnpR",
  "key1": "4He4M7GpjUpRELgpU4fTiV1QVEApJnaAUSn2y5bT7iZuHbxPEAWEbgVw6ZNKkpcoevtLKv2vqtveGSPxcWfsY93o",
  "key2": "2Y8amwLvSmxnb6C5FJNVmM68a7MaA7a6c7NMUiVqpL7TYwgdG9XGrqfzjAHK7iUawnrxM3N9RkUDXdB3ugw4zDbu",
  "key3": "4xN7h7nChGV6NXJyUXybXuiU3ngj9EVaiy6F8kPqSM7j39gSd7TNqjf5pKwY2d1kSjgWeRTWQ2KUZJF1GPYhyhU4",
  "key4": "2WYjEqphUQSKwEcYm6FuyFgeKpz69S2nKJ7hwMo4vA2sT41hj3DskBtynqAPQ9aCmd2TL6rCphyAMhZAmCncnAJG",
  "key5": "3CfRKBDB5k2A5GjULHjt2zE9vNLG7LaV5pPBv1P9QTM9yU37BFhBy8MDZHoYpopbP7AdE7u8GqrA3EQQ4aRWQzQ2",
  "key6": "4WY8fW86z1apf7HV1GRjn4qx6R5LD75Dw2ByXdyeya8grKQhiaW5T28KjrgYejnjndGxjLpLr6YCbJ5Rr3Sya4rG",
  "key7": "GtQSbRDbxKnR1aU4PDwTYmVzrhxZxWu759tXG5MxhfFTjGoMy3WV1hhq9J4cKpaCFE5tKdmg4x6VeYzFon7nmoG",
  "key8": "5KZJxHVqi7fgasHg3LsJNxHyAuoKvHjBmi5zTNRACoBJNudUbshvt3tuuyveYBD7rZe8XJ5uFpKbZmej1pJRq5Tk",
  "key9": "wpB166ZLNMfRCt2qCQYR1XrQe4g7zsQwYutB65WdBxBqwsknG4vBbNHK7xM6VmvzT3QT1WyCMP61BgXcUksRMjh",
  "key10": "3ddyKUPfmm4onvotr2zCjwDciCDcaRMEQyoxPkuD57wrCFgB9ocMBVd2bG6Usy99TizeZykAWKocjCKFz5DXm3Jo",
  "key11": "5hjwfA1Grphwa77MkAFHbPNDKfpqNqzPNu9gesdSicBkosg4h5ZDEpLMBGN96Ze7CXLdBpMSqMpf1PxomoiQyLuV",
  "key12": "4Wvzbdh6LW7v4P4W8f6ukdMsmSHRpmpf1Ngn6DzpMbwzLfQTbsRjrq2wDjVARzi6pF9UT8iSKU3HTCJPPd8gesKp",
  "key13": "2dojh8ZkeuReCnJrbYSPRL8p44qkdtxaqoMJos76VtcNXMHHMaJjukY3PkUaDw31REGJjBViZSh1BY9bEgNmxNe1",
  "key14": "4qz7t2iNLzjtaxnrzhB4VkbpWzNKrNRSjLaJqr3bD9DEao35uMyZxkCVzwEiEwAePRZ5hZg9dTBjJB4yaXz19MWS",
  "key15": "3fHXVYJewaeSKLiSmfHDy1FzBsPJfPzQofRVdMofXGj7vq4m5WdhEy1Wj5PdCpYghDunSqNQu7D4MUaR2yY6hJjs",
  "key16": "2oSMaQoJLFYnmtgejgZtC3xhCiNxNdaD1kmvq5YECXCs23vqE59UV9yxqpTp6XdHokhRMJbDGTUq11ZM5RHAyq71",
  "key17": "3WshTcCYrPrechrRsQxB2fBmbpicCV6DJZnzojfKSJULmsn9MHPjcHmRvBzzjSJjk4t76iqRhWTtL83zBXR9wTnY",
  "key18": "38qnrBwRtnQ53aXKb2aLuv8ZoNn7EKqDLSi7pcg4kX4U7yRdSbm1itHDRMQcJH9bxBmCPE6bjMYximYtEAgtfQFC",
  "key19": "6542SR7bda3awAHyBKjAMFnRVN1mYvGizoMVpdxprDbugupxbLq2WAL3fK2nkqa6PPdnA2fqbvd5a5z3HsreyQBc",
  "key20": "5vzm3Km5p6X1MLLJi3z1ZxRFJatj56Gt9AGJw2vG9erH2CEJkLCEMKuaztBozSHsRvQKsHCgJerTbY8yvUu7mLdY",
  "key21": "5Qgv9srkzCqMpZ29p8h86WBywYzbWqnJn9bAVn69hPpYDgmZmdEBRL1MLQkXder5ZkUh2FofhPqrSWSD7npuytZt",
  "key22": "Pas27V4FUo8n2oW1VKNX4wj1mDdmbvX7JE5qzpdzwrjGk6CzYEi69rQ3afdY6tMn51KXeSTATZ8BEXXpmxPSL3Q",
  "key23": "DbbJDFH3uu4HocpUjb7RCF5RxvCSxUWXTerjL7gHJgDaLSixhhzyHkCZdShXVvVQhqMX41Jjd5Ku8fQyQLHsdzs",
  "key24": "5hZXxvNNJXXtAajDXJpdbJmiF5padJhhSS3Du1UoEi23ac96JSoajNTr3RwzLoUKxJd8JfT2rLw6v7peR8qMPiAf",
  "key25": "5AeKyyNgvU9YJVebhRtMzDEnxZthcNPB7Nne1ZWvuQdUoyCF8tDNDeMku9dRNBNzo6K9oPbXLv4ZY2rPpNBtf7R",
  "key26": "2bCP1NnPF9ro4YUoSF9bEBKf5LPVXQs5cA9PFoQvNFFqjPo3VV176AezUQ5wLvTEiGNqHCc1Y1yJNqTyS1o83z55",
  "key27": "515hi6kbQEcPbnzf47WL5FiXobrevj7uQe5AsTyf89gJSFEgoimLnVP9yFB4bJoNdCouCbntYh2Y7L5mN7UCF23K"
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
