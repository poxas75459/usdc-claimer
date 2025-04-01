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
    "454EU1t5MQr9XNqU8sFjg84pmSarvCbiNEzfkDqhzFmcxfspnh3XKsMC8krJ1EaR5jGD1sDnQV5Nsn62T9tPQh2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bo8QaWLN5dgen9jLXhi2zHkubCfBdjhwmNJjZy2zNTdqvPbgJKB26AqZL9FKEMyjYYm58WhUmeui3FYCLj9xFBW",
  "key1": "57KXdgp7GBrBjn5Amx8eLzspzUozrFunMBq1pPbL7395Xrz9BSPVHVXX6784Hz91bDYCTkPLx1eghEXdiSZ63H5y",
  "key2": "4wG315xyXVhRHejx7UPQWYwzVAPeQXDny9n1wTtP9h1MMSxjotbvpM2Usrug36o4seWHcsKWXW7eUjdCtPagAd7D",
  "key3": "sDWuRX78Nge8bQfgzTd3i7LoaBoVEJQByeqdVctS9K1n7iCBQpfbB73SscR4aMSLT4t5GGCXBz1845ocP9MMb2x",
  "key4": "3UUyqjDjxGLjhakUWotgrie9FStuT4Zx96aTU19UJZ8vzfxq8ZL5exXTWrZuKHQNkjC1oMpx5hpQbXxNVP858jqG",
  "key5": "NccvWEfp9GK1aJM2W2d4vDGnmEkqDV6LK8nP5YCU5nY2NFkTVkZvA4viL5Woda5tS7etweKip5CvW5pEZokr551",
  "key6": "5KS9iwRqXfNyQMEUteVVmY4AWMymFEpwcyyt7je6TCAoFv1DLiAKi3KyGoiNWKaT6z3RtrauEwbuTWn6NxmL6r6y",
  "key7": "4vHf9vt9NVFqD3HuQZXdiNhFN4ygoF65nLMfXtCJwHHiZkPUx3jvRbmg8o39dNWwXxFqHnURx3kkXaGpb7as9RTc",
  "key8": "2xMy7zKhv1mdAiyHBzrsfhBL36fwxyUdqJnbpn1c4mqRYTmEumTFfdPHoRm4Nzp5BgykWpaV4bPH4TCkBctsmJhA",
  "key9": "4rkB2pH8v5CNUsuRv36UZCsHutrvr6D8MrB2X463q5EfChckBwXgfkFrx7RJodkGqvCMW2LPmqMXNmLpYW7enrCp",
  "key10": "5Btqs1itFfHLj5MFXEtEe748CVSm3tcoxq9kqGZzKPsCPHP8GoSNT2pheXssHxPMraVzxveLPGUYEHaGsw3WvURo",
  "key11": "4ri44XHMcdq7SYBiApknoSK94DEuNs5Zd2QwnsDE4cBzrSjq6hBHFkTzpBKabZdyfXBYm5ZZ7yxggRAChpvRGH8f",
  "key12": "EjW9Sy83XugPPAhGAsq7BATYVXmT8LnFXWHvFLJd5P69CMvRfbnK2Dv8TJFnxkc7M2o7D8viePvEQyazo96w5Ux",
  "key13": "4uQYBE1zwe4YRPpEjDEVwKixn2oKt61KNdMHiySn43skzC6hvWvrpVWw5BH4KMhXVGdYV2zn4a1RiHttCyW3pg9c",
  "key14": "5FbQ99fhrZXBJj4ZRFZDzL25iMnpBwCVDKzY6WuxvT3tYnqXJcbu4apikArwyHoTA8rdnsKXE3p1bViJR8GX458p",
  "key15": "4HZHBDYQ9jLwtQyn8v2mcw5j8dM67Mjo9Q4JGonYGxdbPgKtCAt3R8ZQTR8hBALMi4tF41LJxvroiVhzEov9BQhg",
  "key16": "3CEHJ1Btrgg9KifajbS635bZmy3wEsirvMMMjxxyCW7mPCT6QnVBU9HUVbezHoB53i2APMDbvdbdgwpcSgZMEJ55",
  "key17": "4cZYwV19ZTpQggaxs8Q6pA5V98GsACgANoCRxfgjg9dFdQCjNiudubFjhp4bJ4SGtD925dET2kzcGTC3aMUB6xzE",
  "key18": "42AAd8ppVSdDpvywHWTq1TatiLsDRqoUXaBRN8FDtf5RP5EGLD6tCgicQmQrhhZMCSmRQ3xqz8MkKjWNsfdFBP3s",
  "key19": "537wUfhkzMt3aLx7RannMGHxJYWx8RS8iBBsD8Mn2cjti816vjFQqvnkqLB6rDg8pzfdGC71SmNoQdXktur17RyF",
  "key20": "5QjAkpaesJvs86m1k6hErCjpA5FpDphbp5u9R5woFjfuWk1stvjVPFvRnD7WkDiwcmD4Nm3SwAau15c5oJg5e3ni",
  "key21": "3DCZJpyvnxe4nGDjwA5QUEJWuMsWkTFRbop32wahVggjZdDZjTkqPAQ7zPBGBWnMjYfDeh9nhDL96DmVeuZKErwL",
  "key22": "236k8QQ8KL926cm7voP7NmoeeoQijEaNWkWtqkmFL6oPesFET6mewSbBHnaJhZXovffRbpC2nCmENXxZqsAYnpuc",
  "key23": "2SggwJotSLESjoKt84HLbrKxFvRqyWppeGToUQXEkiuhmLsVRsxERKnqG55vswWvQdW3zgF6nJRbQWnv5kKmtvyu",
  "key24": "1AUiPTa7MUTs16Gnj8E2y2YjaiAe4tisGcr1SXKfHP2s5oaihpC2LqM9r8CZYpCQvtKcadDUEx6dKM56yaJsfHC",
  "key25": "4px6Sp95vMAzLVUFnTHZYF1mTGLxXrXtxfmscoJSBJwrSdfHG7urfCXuZuwgYRjimzPXBDCjLL2oK6PAJHe3SxUZ",
  "key26": "3XZxnvDaAkPZyCtFPQVXxNZYZSgchq1V33WwKVEeBDntzNnTPAMJFMRHgBbAf57BL5CwMqqPTjeCmTUJHid64cUZ",
  "key27": "2hxNHuDG41VFtgonwjmfZVbnSuo9QZRUjxXGvQADddobNwJvcvooMhz7BskEejRdLEunUd1ySD13E3uHdQF9kbCn",
  "key28": "648Dq3cE2JULi4PibjwAjiiKKvq12kX3yfZzzaNZUwXEtzmoGsZBmiZBaNihhqmV4J98ATYn2tzeX9BBsfphTSAF",
  "key29": "coU3uTWRuozGCQrfBnyZDuCm7rJJYEDGPhVYDAhWhrMvGTEkT7Qpq4jaxRKwtDtagWGtYsFp3L2Z3RHGAE1KzBP",
  "key30": "52tpYWyXdKtimGPr2FwHowkPyNH47VvNgW2UomNsTmS9sZNR79woNp99RDjbzvzXoEvieJwSprduSPC967Kvhqx4",
  "key31": "3vQXTtSvsz4jAS5XNAXxp74BDumv4zwShJ5aaUCDzVsmSGgdTWhtxKVqqTEgBXTuXjHmp5edj6yhduFXeNRKSP7J"
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
