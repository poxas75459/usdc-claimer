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
    "2dqptBSnnTQpdTsFEwBamz1tFUFJYoQCVWjBQZj3rgW2qjgDmxzc4w32KaoSRuVsaeMK7LqB7hCgU2asCSzaYbEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t3SkJ5epPqc69CXuhQYBYV9Qxi5rQkhD2roYAoZ8Q9D8QMEUHoBMxbJJpKj5jZVdTL9o7dJCLxjMumpeUTNXzXr",
  "key1": "5TXNWpNd5kQfaQ771KuBornePyPZGGtQVTtBJXWynJLcCxe7xAftJ78KAQ2aUS6NEkCLdy6SnUwXMkPCdMpdBC68",
  "key2": "5rY8pUh9mBLqqvt9F6Z3X4Ac7KghqnHvHDsZBJkRib9rtqG9RBhB6nFvk4wnfSogxdQE7fSMUu7r7C7Q62GmjXFd",
  "key3": "3Hn7a3r1EM35Ty7dHBQfPE63JXFSSb7PcbKqhMHHWEW1Q2UkEJiko1e2LthAja3arC654opfUQRqeB7eTDQS1WFC",
  "key4": "4nrA1p8g6AmqiBQDB6P3hE9DuWmG8RCRiBL2NrNuhqwJPPjBoYNLRYt8SX55vPafHX72BmeN1RBKE3g1hN1jM6io",
  "key5": "58RDkKN6wBdaFD8V2K8QydXkvgFya4i88smicZyPHXHHQNSVUe6jbXFSp4bJUrVUCMTGYpTc6ZzZqpJwhth89sTW",
  "key6": "2uVjMU8f6LbZeJfNSSkr3buh63b8o3XvFCgcz83MtPTKSkhmjiRZjPCE5F4dp9QQiigPB3eM96uHCcaqXdH1G4aU",
  "key7": "2VZX1DEXes8s3AYHRrWR2hmrj1ntY9ANidL85eDKbS5uz4eT7g7kcFewdrWhMvEiadtr2dnqZjMCb1rDDN9MaqxM",
  "key8": "4xb7PoohPoyLtqJpApiBWMmyHyxpYJTAXNfY2LnTDv9469zoo5A54vEXZf1VgifQZADPtotbDQMW2GwhyKZhzfNj",
  "key9": "3E7cwr374GyDi5ABcDWnDzC92Fw4GLDVczDZ4sDcwHLNDuN3aoSuwhkd2D33gz8BbeDbxo9XwQjSVXtHAwXxmijA",
  "key10": "4j83dLTGTFfe4rcJABNakrr45vWhxMRW6cGe2HJpofZY5eUMdQN2aGLQX95vsjHRBDFVNPh7stG9kL9bePQeNJXe",
  "key11": "5zZ1WpMm1MvMDait67o9Zuv6Ek9iidBDyHGngpESGdL496QVnN1s6T78cX7AxJizJWdoX8NVcun6KziZkiMMAZcU",
  "key12": "2BP9WRNJvY4EqrPGnTgbhSKo6HSraoyKR8JHaSuibgrnwpe3LqQTTyX7mmubkdKM3Gr4wBJb59zU1fXVosZMMuf9",
  "key13": "3KEtJ3on2UEHo5dQZ1bJf9eTPsjm342h1GryjtZKW5p5RuX4DrC1wCibWMTCYnyAv4LfoF6TP7VYFwPJUBX7jPug",
  "key14": "3rM7FHNL5DN2tz5bbKDgZuZYeL1UMhcedN5Ews7Aoa3gtB5LhwSyTBcPfMvv7ydXdYVS7pnNcH193Km5LnJCTYnH",
  "key15": "2aVW2Hycm89i5Q7Nya61GQdMShrB128a2Vf1NyUCEpYKRskc3FbSHMGZh5a7f6K4f4LVwEG379qpsscEnsdsCNh7",
  "key16": "5oMdgWFAeQKeXRoLJ61GK4Ctjj8kYVH8ZEUCGdow2M2UAb8JGYvPosrcQkSBgDqufBxdjyue2H3sbQcdeG9m628M",
  "key17": "2rHfRwtT9VvtRxcMdNrfFPtFkdugh9KVDz8GQs45kC88FXNb3wtbuDd9BumPGPC3SbShxtgcc18GP8GHhuhEyppj",
  "key18": "AuEtDk2eYm56LWShtbqrXEE1LSUD6DL2NLWT1EJacrc6kQKd3ypijzV2Y6eHeuc8MGLQwoVTTuxvtyBzsujmg1f",
  "key19": "2y2sUj75GhEp9EJJCMfUhuBLJxRgfY3RxHyK1at8wz7N5rCa6jsDdVYYt4K6ha74MFJQAeQZxt5vRgrrHDpTf8rU",
  "key20": "5MEJhZMBXgatcs4QSXNbNEPY4eVAbjs7EwRVcp4vykwtQX7UTYQKgtC59wPNV2HVCAZsfPQDzB795hGjBZ5WYC47",
  "key21": "1HyfansG3D33y3GXiDMk5zmDypsdqJiozWm223Uf92PBNX5TX68upSjrPXpA2QMc9x5GFGbgk1135YBLq65zvpw",
  "key22": "eaMTTpr789j9ZroKxnBEHNc2XCiRTVBnLndqFEj33h5tekrHgrBQix8XwnoBENW9UPWtMuMh6tG8Q6bbWLcsy1u",
  "key23": "4aRX6kCBFReKAxA4cE6MUf9GLCbNC7azg65TRLLZX2KBQQBMSVFEbvj3MdzGtGpHa2BqvzGfyMfemmPtPPbQjGkc",
  "key24": "2EQgdeRUnzSc11gr4hLsxZnHYJWgV2hT8xuBXtAyvQ2MpMyVg9AqeSM7bEs1NENB83aLaRRT7wuqmtgGQCrgdDDM",
  "key25": "5tjtqYcFAKimsyiV82eUmcwq5jtRmHcknHxENoZgGQN4vVtdsiomYihXYbD84KttKemRojkgXUPUu4ea67HBUNdi",
  "key26": "61ZJDvmi6Z5WThhxcsCi1bikxcDSphsk4YShCgj5Nvp62zweK3XCmHW6XdQ57gdPtTdAKbZKGvtAW6hBUkMAdcCk",
  "key27": "4gExmQgi8pkFJ2Bp7pTCTEfMPeUpu7ZPJP6xkJWo68Ay6DeAsJn4qyEcN7CbTMPtamtufVK8pVjfZa34wTuE536C",
  "key28": "2ebfydf7six6jP5ZHaUmy6sumx3ybCPUuiwASUL8KBKbnD26zx4TiG5BnvC9MoXfpdUTW4Kd1QreLWoqHrweh4so",
  "key29": "3R3bHPwLVvKUJdFRgwyyX2KibrpbMa8dXV6MyBH7uwbvmzNrziZ4Lzniwkyzk3r3yZW7FEhywixr7kPLaDSBoBK3",
  "key30": "yb2wFzrcrmG93gxUwa1TUUfwdyWrc48SHdJpFcMJSEvKPzkaZLXgbLoptrWpQqSfqy5zLuDosmfpoa5eHeDq4rB",
  "key31": "A2VDKb5ZLgjEfRJmA6AS1M6xbLToFvMZu6fdFAfUMAAhFd28N2KptDiJN6Ray6vjkJq7QJZfpdJY74gidK2E1Uv",
  "key32": "47YVYtfS3MF99hMWZGjryZcswiAzmuWXK6bKmvNAL9yZ6TaLhx3PGrdhSVXqP1sMGyVbHThceqU47oNEKEud7b2f",
  "key33": "4Zac6Kj9xwWfqh8PERGQqotR2rKKRMcuaxQRWz6r3kSghbw75tRKgEYSvvVSDGoXnn8C1mzREbtqbriUYA3KNeur",
  "key34": "5xV1r3TCaCtmA33F6BgGm7ejYtqTyXeNhqcZekAXvBqy9Wt7WQ1iGFekHaPMjyUKHiuz194sLWga9V5JwUYFnVxx",
  "key35": "3pP6qoAwjG7avdehpZCBeUSnEa2aEyKCN1MRmxL2zgNRyDFm4nkM17vhQSUFkmuRQ9WWxY9v8dRuvngaf813yyGi",
  "key36": "582zzgADgLWgBwM8hMbKqcAutZ1fwrRvcAXGZXEBu2FgdyN22FdWdMz8y5yKEpw9eEQUJEQKejo7okRh1qz9DHzp",
  "key37": "5CRPYkfd9yTzWni3PyR2wgYEm9VGWAf4Dpp4p2Jqo3ukH3r9AwUBMcKCHL9XZtXVeVFX6bfgVx7wZLSX3krvUR5W",
  "key38": "26Z2mf8KYccqebJYbApzKTcKf2vqf2MHigt6HuuedebZW5UsxrrPq8vKVGdNQpMS9oL3BbbTELSpbTUL2qeWCWz9",
  "key39": "2KD7L7WYSJg4dRHYXA4dCzocjj39bAcZYJtB2NrkupbPmG2QvMf3DewXsM3XQgZGUtUB498vCDsMZMwRBdTtUGey",
  "key40": "46otLhWL7A7pJg41UTdkg5bHTLYRh8xoWz2hsr5VLXRS1WEgCHQzkLjgzMkwyhTUunXT8msmrjKTSJM282kSsyzA",
  "key41": "2xiGDGhGDwxHUwumWzNxNXHy6dAYqQTD1cTLu8miKk51JxTgTXis7mEh1FVbJU3Vp9TFrP4MuuBtWHjpS8Lh9ALy",
  "key42": "52BD3kg3LdUWFA3qPY9En2ZDg9YXvT929x5yUJGJXPYHiEJY32mkP3mgCjLqQRDkJE546sjpaTbUNKD5nwCKFcsJ",
  "key43": "3dMTcuvVzKwbyD4NnbYdEET8syCgGXAEYGZzjxx56Jse3vZs6RrXAF9WNw7hSWEeU6QZJaanZBDbFjboEcWdhZNT",
  "key44": "7xHo4Ytw9ChyHGM5eVL3i8RKY1JYWSVgiickDcaZfuaw4aW1ZKaCJkHLczQEvXtM913LpV3NGtpgpRVLX66vR1P",
  "key45": "Nf3GG1RRCBBqGGvfzyY62BZFePQHVb1bgKHPgVDvfyLEeSYrSwLGGbsZP86RBEC5GD4253UTbE1a9JZERfYAFVn",
  "key46": "EJhtpkHhsznEzQsNHv5QEz6SSkoZgeHLHC6Frh3zmkN6aWz6TfLMRbxpdYJPXfkFBMCSh1oZgMKfBWpzejKQHCU",
  "key47": "3bjf1hzQn1QR47vDYjpxEahuTz8Te9ehF2dNRxkSPxhiCZ9jrxfEF6PTj6S1VMBzcYHkJNrNqJwhuit8tuTQ9PGP"
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
