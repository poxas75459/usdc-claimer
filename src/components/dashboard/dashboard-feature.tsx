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
    "Kz513F3RhrZxTXsY22bcBLAEaScVFS42twu5qsW7MJv3cb2nD1MAU94nnEKrgpuVkZLA895Z5sPaS6KKpTp6gfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KeJJgzZf3XnsTwQgcApDDwSKSjShMctyK9UK4Xwue5AS8iVnM2nroPztBy2oCCHxgWeb4XmxdtsK1X7KgFc3Hoe",
  "key1": "4XUMD9Cr1drkXAkk7LooLq67Wr6NwEzpzJMyujTf1LzVG1iQ6AmUdNLbfwjnbmv55jbrzpuTPNB5PTZLfgqqAfcH",
  "key2": "eUxWLwTh2ujCcq5jLTH6ENSQA65vn1zeB3CNsyEo7JutG5fsYvbKMVjaKP8TWzK9uqH7BhiHEhfeCc4jq36K25f",
  "key3": "2ffG4CUfgt8khtkDErzdY8NvEcetMNAQMFvDSDDYBptBHH9pSfmF2MmkeJhpjTyDBXPHMm62N8359pufDA9111WE",
  "key4": "3GF2AnSfDWLTRRgzF6KqqjBYyqkyHiLqG3QtuXssBDyP6pKBuu5jAbdhHS1ET5bTNoVbX8DFCQb5VdZ8A4XmHAiH",
  "key5": "gfy4EwMotq94oGq44qa863KYeHuq4rGMW1nf1Kg2LAMmtuQXvtJSUmab3Gozp2ibCMaLZvBRsims9aksMkSac1E",
  "key6": "XWhbZTTd25JMc5xGMZT3hJBn4nQqevgt35ukgsX788wjHWD7YyF8MJM5uWqAuwcd5zzorH34ixqgmLfnRWgTNn3",
  "key7": "278FYZbt9jEKMZDm2sVt4HM45zLjXoTWRY31zSVkitSSvvdHHpxRQh4VrV5wP2Ckt2t58GnCwuqJHhaM9BdtNTUK",
  "key8": "599SdQDgcvMceNbBQ8m2kBDfnt6bqVMDmuE7VvmRPDzH5YGea9oT75FbeD2i9V6665XX5VS7vLGGfEhUghcpWZVs",
  "key9": "vhffzm8n3SqELYQvNS6zXK2wA5phwdgT6P373foYLiNaJDTZxM6wzauNziACq5Z6fxQb2t9dBQWcLSPE33CgRuU",
  "key10": "eowExWNATpdikLANtqot94QvnPijZpzc9Gqd5NUPnse7d3tD68ibwwMx2xVPuZQwF6U5sY9H39vHhKzQvsGjqhY",
  "key11": "3z7vqHqmz4FhPi93nuoBkMFK23WbYMCkz81evuVvvgb9prWsh3dExDXuKCkBggqHb7wstrxGZc1j7jWjwH6cvXSH",
  "key12": "vMP1KJbKac2itsNoSFu35TKYuhBYUDgVdqyYn9vYhanQ4Q4RuSAqMfPznaVkSsPNNij9BE4k742gZdcs32ySi8R",
  "key13": "2X723Zsw4ReHZnbcmToh29dmRGM2p6uRi8qDrhdJfpDMtp4hWT28GwkQwz8vZy3G8F7noeRt4zFqHQBfD2ktVpCa",
  "key14": "2VnVLBFs5cWU1sCqQyzWqF4wy4dwRCFUP17zzvJUUYvbJn5g9FtMFFWkjiqsYDB65YmN5Zj5BdosPtcenotQEACR",
  "key15": "2nwdURMPQkWLaiLuqg9NsCk2c7eQqhjBzk7TLTHkDv4DbsV5wNx27hTdUcHcgM3qBi5LUHyJfPYwgXD5e5Z7vWFm",
  "key16": "3CXCfcXXMLANbwAmjttWNs5mhkFN6knE8DgdgUuYTUZEWaY65tTpgx45qcsu92nAD5cYMckbBtVKqiQsZw9i2QA8",
  "key17": "2AttmpnyyaB8LW4ZitsS1QrXcuBjFnoHfg7YfRXk6mPYpvWFCoxLcFpMJanAWLrCPA7ZdNPZCTLhjZWcnCjeEogc",
  "key18": "5Xo4TGUsGiZDiU33UrpmkoduHCfsVyo8xdMGbMBwTXRu91mmi4o3S4MQJZDVDGGQiz1Hyo7TLmyy3PXopQzvjubz",
  "key19": "HMeMJKhneo9aDv3CdUTTQ2neFCgwTXJYsSt1brU15uB8KBidXFUJaHE5xzQVgc26ZB7FSoDUuereZuYpPgYPVSt",
  "key20": "2a8fX53CqywFpg8kBG6bicVyf7dp69VJ18cn94tBHf3US1DaAmTAztvpxnaAmBsYBpNF4LgBi9urc556hVndJmDx",
  "key21": "3naHHR5jcUVVuVuJVauVuLpHUpi1ieaazkafBbySvx7YasFfxGxw4ssrUzFfVJkt22Ybq8x8TF8E3BJVrfR7s4qo",
  "key22": "2Q9EegmqobDdUmURWiYKM7T9XdvkPkHgDzAvcWmzmXf8tn3TtsmVGwGMdbnY7xxDxCdxhP7fwYwaxQC5iEp6qoYr",
  "key23": "2c6NfEvMSZD7Wk7TckhU8rByUCuyrPjZD1N7EFBhbNuWGeUB9jEYtwuiz4z2JPJt5pCydZR7rigAqQBbEs8bGqyV",
  "key24": "3nBFBGajaNJPtgmQBUcUEYwNTShS4BwHGhmgZqeEX7YdazXpZLJeNWWgNJC3gDrDKt959ABrhXikn5ySxcHYckNo",
  "key25": "27YYkkENNNRFufyYkzLh696nUmgAYhaHu2T4ujznLtLfX7hFWJNUmKrVxURp67ykxn1Nm6syE5etiQJ9AwAgL8Dr"
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
