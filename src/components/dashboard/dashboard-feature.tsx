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
    "FALGCJ4huaVL6sYdLph9m8b8j9QX5MrjRfzMK2MW5SKk2ixb8GK2VK1p9ZJQF8RHDR45mqRsztYp1qtBSeo6meP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZ3V5ur8KZ3RLNfUw4goWFEps5S7cyeX5UKNNm1vw2aPBxQSQweAqxS3bEXf2XgeyrSoud1dq46p1WrndJsDsGX",
  "key1": "3FSiGHmPaSyRUXiDc5p4YoQF8QhRt9GMsZphdqSDpmCzSqqbrbYjti3GnrmWjrBg5TWvRpfjwqyFjC672mUwfhLG",
  "key2": "5MgPYG5F2wTL5QXZpn6ToSjBXztkZGXnpXi5XHpwz7Ma5ktwN4PeRrcRfaBgK8nstVBhyK7Y68cY9GCvqqtvSP8h",
  "key3": "3UaJqmwF5fLqpr2F8rq9MDbDm937Y5dCK69uMYjmY9QPHsMMwhv1y7iCWH8dgxCUUDKWN9Q13TcjpkXG8QWsGGhG",
  "key4": "5r1fsmLYygL11aPgVPrTuRSE4X8pyQJyxeeQn5AmhW6zcr624YX887T3jJN6Y5fLHgYdkouPp9m3VzYqUibQFavW",
  "key5": "qqFiRZtPqrQfGadgMAn2fvTow5WqPsvrCLUZ8XHfrHEFTxH1EcYS33tyWTm9o1XNi5QiLFTKfH55DBsgDa4yEkE",
  "key6": "2e9YmkaRuw1sicLUbjjmNU4PPym2VpSKDyL14RQDaVoHzwsb4JmoCvmhoi2vWGDVWddPDdXKNYPnczJUDkzmBbtj",
  "key7": "37AYLQhSgGPJ2oF6dHB8DnHgkCE3LZAZ8RX1MegdAc422VReMUu4poFEwiJhNm8N5W8ivyErzhSZbvsmPya6PhZR",
  "key8": "3hqPQjrNMB63FFPKZ7CqKaTt8SMzQAwn6d5z5zkotX281dHV63whQHvraePjLbq54vFa9JFUtmsYo7uMTRTWiQjV",
  "key9": "32Uhv1WqtB5QSwAD3Ng9emwxcXnPCdkCPH97en52ehP3ukPg8v7KSDcji8VcURQCCkDkbJGYHzPEuGTX6GU77CXg",
  "key10": "3YEyXBekxj2UADG3UFJ6zBHqDcX7YFNf5yhQEMqdCYMHtXzwTMxGqNUqgwiLRna2wqZ3afUR5kozqHkL8Ept53mX",
  "key11": "uLtdZURPUb4tpkYFgLXM3rNvtoUeLgcpShA3iuaWGoZhmMy2bDMn99EVDWseXTFRUByc6ic7JjXRbjjWCA1GKfA",
  "key12": "zVmP7F76GbrYTP7B8ATgaaBreSKQeyuQUutL3vkGdzn3EYmDSJ6jwatDPnbLWc7fs4PztEqc1e59DSMSXkaHCB2",
  "key13": "4HYEMWGYAVtJWUP4phwDBGS5pVR6Ad5kRdEMpMc5a3WSiFaPbcfRei6zuM5QbiYdy1FnU9wXfySX4qLwEvZH5b1J",
  "key14": "2FzFzVonWYWuTuS5YWEEhBm6XvcHR4kkdVMr9PqvbDZThH2xLBn788shcAUwiMkYsbdZWNkgbPAq1zNy9stm9TEZ",
  "key15": "4i1JenKG94AhHZQueq9sVRszUv79dZhpPLgjZFQBJeXje6mrDngwkbRxTi83gA3PUFNDDGVRZpCFCdjv36yxS4KA",
  "key16": "3uYsLzWvTVKDowZjE1W7BpEmKrruwBDYqRe9QqN7mz7SxKhv9PHH5mJWqX3BpuxRHa64JxSVyxj89Wm2z1RHKrmn",
  "key17": "2dVjShAqYBNX2kUgEJcHPdRXyS691Jjh5VWeLTk12Q9AVQABGQTt2kwkkZnTzw9SMbHjnpL4qfx87qeUvgF4PGew",
  "key18": "25bjtimTwgWqxjgEHEcA35RdVqwvPoYzd82g1gQCBjbWMYWkB5bQCVyNCqpzrRTucJwA4pa5zDhpoUgYPVstEz4n",
  "key19": "r8rFQEvjuxz4JGfQRPKCzKEzTmKApdX8JYgk6Qdg45Eon3XNvgL6VnPv9kdZsK9P3YaFmVf2suMKKx5QTTaQAXn",
  "key20": "5tZRmSFowG1UpWe5LpvD67v9xKxy8CAZSKxKq38Xtv3aZAvj3Q1YyadZcoXxhnuo3ZWLjzPTsZBYvLZCjoKMici5",
  "key21": "62Gi9VTFSHVFqB4wD6UyFAdM5ZLMrQg9RN2MctrS1PK5dFTH3EM9VYku8DjBQ1swUNHym3kpRBGjfd9yYpXdNkfG",
  "key22": "4UoccfU9vFQU88F5rksuVQvRuRReGm86sowv5B1xW1tm4osXZF8L59NKZPHcX3AZAPzf4uazC4pNZEGaupqE9DKb",
  "key23": "H8pzLApmpVJPCqkaq1jRXsvi33hD4srFnS8izApTP9DaCGJq9EaKHKfBUKaueibMdsJrmj9kEszEHU4DrDv8TKZ",
  "key24": "3NCv8xb272DeK8FLfmWFsUkVFFPtUhmapknj1aYxVr2zd5rCBTHbV3gXFow3QxRCbtduntGqz5auByUZ8yHr5zhS",
  "key25": "2NrUHdpHpgvEWmziNpTmmYNkYpargCwYqkjvdAgX825qEYBLdwyoFH1USqT8Gz9rDQvCapa5keAQmrmX2CQZRU4U",
  "key26": "2HZ5v3afMfrPctuhVVMNQ4YVzio4BGnyjiFzhsSEF8Q8xfRCWW785g6uBq6eqnTeBHxc7GrshDQN48MYfNTRMw1e",
  "key27": "5L4ysYXtmUkJwKo4DuGVVJamW2tydKwQ9qM9LX4QzaphVkgGM4gvyDaQrUQZzU7Awh44Rku4Xg9ckU2XG8niEs6w",
  "key28": "pegCpDpV9ibfezZUkiHp8FtRehgEBeNE3ShAgE2m1gJFhDDaT7Atmty3wsvUhKTsGRkW53u3VYTXbcnzhDmd29N",
  "key29": "3VhWPcCHxuEphQaYCVtWJcmiimR5KtzYE7SjPrjv5jWpffX5EdMbZp2YeSGo8ffVDnzc6Ks8CaDy9Df7ZR3crnm9"
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
