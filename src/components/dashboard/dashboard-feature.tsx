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
    "2FULLD41FSJ2hDz2hXxNWGdQsqQLSyZNUi6gKcytw17faTyjJECyKrqmEw9Hezgd8LKyWuSTrXmLX8D65esN5JNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZrBJSbjP4x1VNqJU1Cz46ZEQUvT89A2fE82JrKDQf2miJ8SowNtjHL8wz7BvcbLGtVaQ3j3iaY4zM8stVDUTVK",
  "key1": "4BU7Lj379C6kTZkGVhdHN7N6wxEkDcpMxCUFCwdVzVcu5SXSzQ7QCdtYkwrm3nA4HvmNaemWsFeco4QzoPEuSeia",
  "key2": "4TV9LPVWkHHG51T4TNimLjpoVFphH5MaUg7nDsoSHaAjMfJLCqpFRVd13Ct8iPcVqoMuyYVLFMTbxwCJRoGQZP6F",
  "key3": "34VCu7QvQiNg3PVf33v13hh4NmEv2XyNGhJBmBkx9R1UG2Mob9d4vwbUJw9pQDtcckqKBFwxLkNJrbYvH52PDerY",
  "key4": "5wQtq2dpW5wn5GqyjWL9YwnYp8fTw1MS9rN6KDzYfZ6mjp1kCjydRYD3CesYVuezfWS4CeYTdhpVBrskvoERdAV9",
  "key5": "niEqn6QrWpDmpYX1A6gicXi38VH42FFkd1dscuXFq9dzbSLDAcFyugXabxm3fPM3H3Dhh5Hqz8aMT1Fq5GTjCfK",
  "key6": "2YT7aNpiruzVpPDq3ViiAxrg4LcDtApG9siADnv1X1L7xSzTjgL1dzWskMk4LEA7P2WsMredMZc6HsiPzFzfmx5s",
  "key7": "2qNqEXsrWSydq2MdX4y6Jy6ZrcktdnKe4jFERbrFd2YBPB5AJrW81y4sX4rCeHi8bTL32LchZofso5sDTdVvpnkg",
  "key8": "kyu2gRgQd8QA7HEQsjHL5a9jWK5AGmbbX2pdqdpXQzzVgMWnJmNVyUHZBrsDLucShcHJB1XkeT35AoLtCCjzk92",
  "key9": "4DDXwwyBnc6kgCAHHgRz3Q55aNGYcAJdT15BLgFinRfuaRaZa8nC1ZbaZCKaEomDXneMrvLPUSnQYpGqbJGAzfdJ",
  "key10": "3LrdS8jwTkKdFcj7jMuJsBNFaMp1RFQ8ELkMrnRmwpSQUoQowdGWmNRyMqAiQN4QxfRrBJY79NcaejUjBy69UM6n",
  "key11": "4em2rmQ5xFwfX5pr87gFNbCkGX3ACnQBzC8AjXCHKcho3HpK5SAMdmUCMWf1857tL63ggJs1qmiMVgpPxNHnpnaW",
  "key12": "23a56RENJ8KtYvKWq9ZZJno5Yc1NjmVr6YWrvXNyNKjvCJCURwyZtZq725sW8FaojHKBmxgpTLCpejYidiEffUin",
  "key13": "2m82BEWdoLrCbJPYgk4JGB8fqxZMD88MzCdWZZC1gBwadSatXXmtcdwXdVSvruo9M4pDeHNGpV3XJMH5ZAPu4zbB",
  "key14": "3cpmVeLyAHEeyzzN3kwzWTJUmMyWKbQaRM73veSUZd8cNYhvsiKZtp6psZ6sx7i9vZjFEPs8nK8xenv4KGaccNLk",
  "key15": "3N3xAfjqP9rZCyvNQDUchJLBknccBjeKxqVsMjTCFQ5pm2yT6RCpnxiD8465f6o7t4qjPZExr6mXs6UeEfHsJrKu",
  "key16": "5GKaf5UTd1ZWJazA7frhkLWy1kb9okBQdZd2s6QPGDTMiouqaPhc6QcQdP2MhJtyrJT6GQRgGGzN2JLqMCmKBgB7",
  "key17": "4fwTjY2acYhMyWbwDcvZmiXR9PTm3mdkgaucrQUrZUv9w5NycdUsbYiRjqU6eYXuWqp3KTUiAFEuJJhVJCE77mGF",
  "key18": "51iYJ6eL44sWmZnLnrrQLSznSrZ3Fn1rPYjm5CT3neJnk8ab8DnM6y7bcU7nQkUSfGWWb19RsZpFGTuwgFTMAC1v",
  "key19": "4fHSW8XLgLdTsymfQxE2Toj7suhbDFQKVimGpPfKKHup8Ff54p6AX18PMPnq4nETEqCNTHsLQsiU5NUVrrFiMc4m",
  "key20": "4fkffpwt5AcSaGgHTkscAWB6rRhBHZeCWhGem5yPdramDACcLrKCfNnq4AjsbCXXUhpYwb5LCPUypmFe2ayNYhHB",
  "key21": "5CuSxnk3LKKbYzpPdCJZkNUg7hySxQxwujRu28KzgPPBM2B1dYJb1yudZk6VXvfAeDQgkzS7FgHxFnQULVuwrS5J",
  "key22": "3KkKzM3Rc94CihnXw79aBWi3WLCNC9zAYVfq8QXsKj2gfs5fckRYLkw62G24dViqn4RL1zmb3L4L1eLPYJgxxnP9",
  "key23": "8U9tmmoEs4KaiGayxBzCX79akJWPB6GigwaMYE9GR7a2NYXSUPJif3WjAw2gNGMKNdnRLToWCh7uDdoiNBiySBZ",
  "key24": "3e5cNBxCwGMREzcfyexD7cV2n2oqi8v79sb8vegWwGsihphbmMVzZ2uYPx46W8rZEbM1mqVD8LFK8yY63wisaPkn",
  "key25": "2Tp8ue9c7JPBaP2MWixLcGmQr4yebQ84mvspeJKnhG6XCDUgjJ7rDe1A3aaNEd3Qsg2K4wDkPHYqujM9UpDZNE2V",
  "key26": "232TYdPqkzbLuf8PDWJZfaEEawT2srmebQ91QknEDQhBJqLKviv3if3fxou7LUfmaJoVEdamiySHweZRXgVwZdMF",
  "key27": "cPa8PCN9XgUZLnRZTPMQ9bC8vGnhsNqLhi2RfWajs5d5GSEwDbH3AKgezzCS49KHpryKrqoytdgT8BzC59nvdoJ",
  "key28": "5A61Aq8bSKdrGTMyR7qyVvhVQzsHCY8EAEUQW86TbmKQBSHoQeHY7VWXbFCHdKULm8wocsGS8sCATunfNMk5Egmv",
  "key29": "3KhUWytSW8m2EDzgj9dQ99Gdua8o1EC6ih8wNxCVrHxQcD5SQQmopVXsLK9GoXL2UUtzh9QN6epVVwGBCVxEEq4b",
  "key30": "5vryHhT2GniAWYyKY8mTRMCj5fuo2ZSkH6o5CwLDpA1JX5idRWtuw5ptcGbW6HqVqu5APgzrnHDfbp3Xd65W8tjd",
  "key31": "3BdhAEGsBMcKqty3uKAL2HMFxjYXsAtZ58ySQVPYr8vswAYQHJyoJF4MHJNxvnaNhb2RnuobnVWXXQiDyxYaLGZH"
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
