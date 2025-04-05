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
    "5V6XcAg4eastf64DcBW6wnWeHArhRamG5SHakfpF2QmPXWuWKjjDz6Xvfp7mpmbG7GVecarCMVS6gCQzd3PqbkFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XCgCkWP4RYHRbovejEt4zs5HrH4QMWeXiyJcc95eD3D4HChG5bhWjzzUBrMVkHdjkgQNfw5FCLkD5HEst2XaxYn",
  "key1": "5HTscSseNgZUwwF6SsrhkXPdaQQpaas3SUpBA7ew6BovvfX5i8k6vDU8zATPt9k2KpwceEPtoeTvATFtit3pue8t",
  "key2": "fRHVhizQo5PEvUTeCqvDXRfZu5hJdvWEMAQheuDX9e68vchCR6R2AJGL4sQngNZCktGAV21rZcqgPwsQMffUYVQ",
  "key3": "3GZ77uR8AtosNYbxtSdD9fcgV9CtCNyt4WYwNeskooAVoXsjAxkv5ptSDRC7tS6ZJd1fwCykR3q1tHueyW9JW7j5",
  "key4": "23SpyeEwu81xSbDUSzeoTonwuSrHJCpbfSmSeCVKBQQzB2eXhjUPw88kJctkvpQq72bcCgnkGrtn1YFjKRp97cu1",
  "key5": "3afYmaXDWeYniQXsyk893Qcjg4UTeq2fFKrmiRLw9QKVKiiCrq8X7GtUUDsixpdfFxtqr2jNErt9iPDpms7osyE1",
  "key6": "CLPWBzXRH7Vms7VMzmybCTHy51c2HDMJPYBVycXsnPAt9REYxWLstNycFyw85R4xejXjkrnsh2Y9SsCRC5xE7mu",
  "key7": "3jmXVA137WARnRAShLxPdzDyi5NB9kpRMbsbvPjPH5BQaU6SSxBgSwL4b9BJTYKYq95i5T1GCbLMGPPYBVnyVYF4",
  "key8": "4wS5J52QTsCndeuUiyuCCAML8vRpXuCQPB6H1542K2y48QUsDATwz9MW6FVXCoq3PmVcqcs9E6Pma8QMP9pMuL3U",
  "key9": "3yUfE33h7HzziRFd5Tpqd9x86q8hVtqxf4bBFH4iqvJEaBpupdytsCxTRED7uDRMquvU1f6o1L5f1rM3DR5p9ufo",
  "key10": "3VvpQ8WUE6nbyBzxPZr2Xrmdt5tvbtVygpTXzdZogLsZ8bHzUzr7LtyEqwd8idXLe4Fg722UmF9KPegTE2PzYSjk",
  "key11": "3FKhrbLLwu7hgpBoAnKta889BCT7NjHwsn7qT6XgHGbWzD8vLhp1sHaBjQYCLDqDxn6CMhpzy6979fxG7ZCS1NfJ",
  "key12": "3J1iMMdFTFHifTZc8sGEJ5BYmBjLXsSN5gfLXCXEuXWnQEg4d79gffWRtSAsUWKtuopaYLKPLoPrwLhAEia3rBnj",
  "key13": "3JGDPL7idwN5gV9K7PRQjDAFwLXsWUxXqbek3VgMQWCT2Nj5q1Xrq6DyeZ8qEzu1EKvgyZ6Cq5wX3yNaWvFZogxU",
  "key14": "4fDzXs9BhDCSDTnKU5vASvA2KoLzj8qxo256h2F3g63ru5UoTy9oax3BsNQ2MoH4WEq9ovxMtc2e3bkCFAdmHEyw",
  "key15": "46EoWKxoWqQ33zSTWpnYPAxMtCmJi6TygmuCXqm4FRwF3gif2hnDAFaJ9J1dvJfv8Nmo5PWuqoFjVYFPiH45HYxH",
  "key16": "5q8J6Bv4mFru1CBrKg91bnaKmq3KtRmYNZAE5RJtxqcgx59fmkBrfWXPE99pWZEwJ1AUM8KeHu1nE6SK4yejaQFH",
  "key17": "4hUpKy7kjs5eX7mwbQbEca5wJx5ZmQjwR1pTCotpGgtGqoXq7bpmnEyf75nX6LS9VSeTuGB1MqDLWuaWatcth17k",
  "key18": "2rJGP5EijX5v21LhxEKkTH4sG1i8VwnUQxFvzMSpdzoDa5YrCwknnBKXCMgG6VDmuaQXH8BBAY5hqRPQfo8vEw1P",
  "key19": "3Y7aioAGcGRFNK34aSWL1iCxbGywxCvdxhrFjpXv51bmc7UmNqfu9nZjhvz8BcHEqC41CVQpfkhXzoBjcZYEYwuW",
  "key20": "neYT5HWckFV2xJBMZvHH5We6mu5qPPvff6C1Df21ZC8TDcBwP69R3C1mtm3ifh1ywd3XV6UWcatHXTwrzdY2kWn",
  "key21": "4stwqzVCyDwjPcsBM8DYTFssPHzDieEUVRhYY3CrJseLxWd5qwmwsB2ipopG2R9o1t2h793s5q4yuwqrUFApWe8u",
  "key22": "3KinMKM3ZLbz5zSQ7Xw8CVWXP1WW9XLYrALhJoGGQ6xWs2Su526B5CAvEGRy2jWujYhAvRTqnhiCTnX67wXknUSF",
  "key23": "22wEqjeiEVKvTknkcssoqKk8s33xfCbMk1Rt3QLpbzdTakUaMf4sJPEVhiqghMcATQefEUkZxdmV1SzrKqBwPPGC",
  "key24": "5MSTU8PNJrEcgjqXKeBkVBnnei73snhybhNGASKRCG1AHEAHi75ZYoeHen1o9BmWepBk7c4pta7hBUxeb2pmpYr8",
  "key25": "2HRxChEDDhJfPNfcPV4VdJ9Xqt2TVcXnmR3Cajf4HG2HhdUHBEyrvcPz1qyzWYwJabVTQksxzFKrqPJRhJquUXGs",
  "key26": "3Zn2h1gkt2d4PSW2dpPRTC2gBEbqWUth8P3Cy9yHHR7BAb97UXjdP5r9PtjJ25uJ7BX2dP6yVv1X2kaHCtAi2FWM",
  "key27": "321Ykqj42SD75o2EypgPnobxUdtZepYLsmdAbvnUSYuGxuExqCo7N4LczUpgj5j4YYYvbWVHt8ayKrpYGkuSUUdB",
  "key28": "C97b47qiUmTFQfdtzNHK3Bdiv1tYEcMtBLtjhshgjaACg2ZtyatZjqvcBWDVvdTGCWy8kojacqQCE9oW6mC9mrX",
  "key29": "4qTQXWAkcqXHmEKcnDTQrRNCrmEkM8ssygGexKR7WLrGN2coW6fSCBCy8ubtGnyo4BSciNBETJHPjhvbY1dvCGA9",
  "key30": "4XUiYUA39R3dDYZb9ZKYVctff2cFH5No3s6iaD6dytkDdfvNfwYAZ2J34qTVZW16FpB4BgMwd3evATXHFRtjVFDp",
  "key31": "46zK3sYqXEVASjkZpp6TRDRfP3fJwdRZtWTLnQ3pUNT1V9bjjYQDAJYaruphgGya3jmhrHZHPNX5fVTWzVZq9PXX",
  "key32": "3tQtMZbttJYqSFQTrVoX8gQC2cXWdBbgSc81Pf7SYrX9AKHquoUr78jMwtcmkX2ubLih2zX36oQEbpVFgwY6gCpw"
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
