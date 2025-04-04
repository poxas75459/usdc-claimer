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
    "2qdm19ihpNycyfTDgwPffrKoCdsgzzF55EgczbrZUkfxc5Uma1yB2tC3P77muhSTJeXmBwggCrsE2aVDH9zqtpTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ycpqdrCckfybHzH2m98ixjEmXfSHDo9kgY12MuzjD1sHcq7HiMT7F9EjhH5rmJF5DCh7NVjp58ZdbySjBdVYwns",
  "key1": "tuvd6NjQXBGc66itehpaqh7RkrjbgtX8g2dchPTqGhrQWvyieEjTpAx7L3BiZKPsGK4gFyW6d1zbBpceu5Rm5Mq",
  "key2": "4Tz83BJiMyLrXdXA877HbMvNiTWdZNJw5a25FYQ5qxphm2tf4ntpWj66ghgqEnshhjfFF8LHxsw2vZ7mPFkbxhZM",
  "key3": "4U65vGcmYhjntUfh6P23rbxh936zbDBma7oArMo32PjZn5XVY5g9WsoyK65YAbzmGjL8LhxxVkQgt4Zf7UU2ye1e",
  "key4": "3Sj6WCakADC1MUF1Zd8EzU1icJ4gzE6cm2Qep3DFE4PRmfc9JBYFt55ZkzW4RQEHsy3FYnNeHrn884USbn3hnRKD",
  "key5": "32ZnbEWb1QTynbTqJrNF8zTVXawRudcHtKVz4678gXPoFRzaHSDesn7WzwXBwebTruZpkxXPA7L79hKEpJREPkm8",
  "key6": "3cbkLayDji97QdHZ2Myu8541WEXduAZVkHjxNyqyF9quENgUdRBn6gGboqhTTxMzMFoggy9EV9EDgd9XqZpL59Ns",
  "key7": "cfUqN11C2FKk3hyNJMZakoX5iJUAEQVh3v2JpwAoS9zFDQWiojBtSx9n8uL9vGeNdKxj9MjSSWFpadqkXBHboPz",
  "key8": "2rxc7t3qsTtiBLcsco6SwWREG1QX5yn3AySnnb9LVhAi4f2nLMbbnSzqBgpdFXERhpim7fZ2SyzrXwnVMWXuz29T",
  "key9": "3ysodVYYUoczC4gPRhj4DD2CUEDY6vkAbJhLdtoopeAFHBUQxntZsNpgyJh7TeYGU9nLu1puxdmhN6hSZ12fwZ2A",
  "key10": "128GN3sfJTm3P2fqfBrg54mogeuhMqTV9i11VM8EXhwEZq4PwXsBdFgW9EwZg5RmHYDe38YbFZXnG5L2iDWbcBgs",
  "key11": "4QRwcJtko4RVpJh9d5ErAnsQ5QGhD2ebgfKcWfXo58bhE4nn7roz1Un1FDE75GEe697kDxZZF6uLvjbkszQtf6bT",
  "key12": "5FHmncFHsC5XqhQLq1uBZcNZyvcW5kJMPqDrwiFWzCVe6LBQX2zz4GceUg99w819L5Nm46VWRATff6oY6QRwxS6Z",
  "key13": "4WiD8syNyFDkKgRowbF4FgschoGucaMrERCJADN9bGnuCC3gJcsdgcoSXyf9AMBXqTCkQevBcqArNpAmoJ6g2yen",
  "key14": "ePQUV7AbuaTcEP9zdh2LptgiaMVqhAaqLArbCQyuhNXESW1EQPSgMeuhtv6kefTs6YMvfxQdyJG2vsV79hS6zoo",
  "key15": "5N5B4d6BAAu5JzmeYvKcnB2dLq4qPxZMNXsdc4gf652YCemYTdDSXCvUaUB52aJBM5LCwQWhpfzAMgfYAQTQDMzB",
  "key16": "5F6Qd5NsSHK1PGNL1DmnNsbbfSeydgDSnPAkieJX1BsT1NRHukEKe2EAtsUy62mirs1sT5GWzKEnvPW1kjb7YX5Q",
  "key17": "1UmGhXs9RYGRWXK8cqhzK3NKboiejqC8o9znguSiF5jWD7qcoynbX6xSsziPJBXu1DZDCCeJxoCCzPiTT2BxFC7",
  "key18": "3Ss9AQwMYYdFnZNc2M44CkXrVs7dJUEzxb4FBJeyMfze1LsNrMX7Xrhxhof1SfqbYBdEnXszaD6VXwxQvb2mx6yK",
  "key19": "jFpZ5gNqXcb8R1Yz3e3ALGmtyQkRMk69SiorWyL3L8KvmyamXVXPkoQPtcdAwrkxQdDi4fo4Hq2wyuShowyPzKt",
  "key20": "3bW1iKmcLNxUob5f6CLxnsvCGp4yj6nRzhoGWXLcbsRLQijMTRRs16WMo6nAbDw1YioQQ5QkKdSeStEmKfgxWJRJ",
  "key21": "3ka4gXs2dxq5ePWYQXjA8N3nkpNPNvLnfQAMs4B21dCH86swwGLcK76usBB6MqXSbGoJarEY2uXmBaCXy2ZY2sYn",
  "key22": "4TxmieqSqNXgUBxSR7Sf7u4eZ1YojeVNCSQsz7R5ue5NJgwjypzMCPM4swTz87Y1SQ81wQob8dY9K7e61x5jFbxb",
  "key23": "3X8rxgwWTqTNyLdY2EWiD1FqewzmotgGHYEz1m2SxRKcFAw6xMZRcdEeLi1E3yYcYPYKKtvb2Kgy5cgm6YV5AkQN",
  "key24": "3v1GDSmdGgmtKwxkKLBf4JSQF8R7qD8oNKCGuV2pbLq9BfxeRd91M4q8gsRKTiUfBALLLtt48iZmbLXBdusapY35",
  "key25": "oFYJ85ryR1ytmLYMpoUDr8vSdWWenNbEKzozGh27PsE5Fb1FfTuhZqdBbZ7Q91Fq8tkVzCGU3iAEtGDdazgJDTe",
  "key26": "5TqJuT6u9KDDnL4NtWfvTNLA132ic1zaCcuKnpJTjUNLPtxi4hqkDbBFaVCfZzFGVNzGJYnehUViAsKCxJiZHLkr"
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
