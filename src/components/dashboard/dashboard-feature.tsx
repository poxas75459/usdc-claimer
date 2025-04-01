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
    "3XtgjFMtKgYqgZja1WqXCneKE3CQWPzJciuPry6nkUeJKW6yQATZTL7Gi8qbEog5Tqe2R4XmeVxaSpSNhgTSjgYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uWwHur13CPw4FKmw75g5CYrQz4HUf6HfkcvbUcuC6dCBKSkHbkhWMkA7WJNfDtyr3BL56TeGT51HnaJ3qPpHhxq",
  "key1": "2i4jBiwiPukUzaaNXk71rEALyrBk4M6eKsiAncEbmDJCSeu9KZjhUe6fBTu2CEJtbCqx7WSwGtkmqB2c7AFXQMMX",
  "key2": "xkyx1KaACni24SHS9bRiF9arE3AWR7ABKWQ9aarqgnoSMZbsnQVywbmPRSBmMnAECxZUJC6zYxVfPmD95xtCckm",
  "key3": "Ypihsz4vwK1Q7ZR4iV24y5ha5qovxYH3rhgkVYNCJeD35T8wtEjkyrMnMPNGqow9qzaAq6ewbFxu3fpQrv2UTf8",
  "key4": "qPSZPDNR8FehW2yURXD4axH5Tupci7KVFbzpjZdrK5MwZh2cjD3iSWy1SreCEW4aUuBVDH7s3Wf8UCEkmgiUSfZ",
  "key5": "4eK6Pi3mbb6tsDAoiRV4kSUhT3affUoq1FhXiRBemQnyPUresWohWUd7WCjYtYFMRbF3vhdHXQr72fqkFhAwEgY5",
  "key6": "amY3jDjJE1FrT5NSF3H8Gf8x5ZgybQqgH6mtn1KiDXrqHjhZeorkPasVmtkgUtP59AEJ37cq9kYmipepMLpLceq",
  "key7": "4KVckBEfY6WjvktrZ4vQt4XF8d57PtRLDumC3gkP5AQj4fasWjzmDZkDe52sEVktiqFwMgjmDJ6ENaw2sUmMA9kv",
  "key8": "3L7YGfW5RQJcMt9dXkPj1gxgYrYXdHLGNs9QEQCt7ZpxQ4vX82swew4Nj9dgh3tJwQiezQ47LdLmZFNSuYdoXmQh",
  "key9": "2fvewTvtinSy5NFxT7YZfXrCPsnZSyDsohWouKgdru4jnnr2edCRvbYnyxswEKmWeVvVBYJ8nWv6ebU5i65ge1KD",
  "key10": "4ZnUQWUFq5XB4imvACZdjh4zJjbB6GnQyhttqZWGBSYLNGV61LqDGQdfLw3CAE3Wr1xnBuNFJwjMtYFWKe3FkNF4",
  "key11": "4zVdK2LniohTjk73Bk2s9xMkrgznojV4v5Vq7FkaS4BrbVCEKDFyXrhdCPG1fqdhZ3dmx2cnqroQZ7yiDtBQQumJ",
  "key12": "fraUYuo5hgKtWXCpe6f2QdEWf4HnReFF388iLxbEqnL2coSYa9xUvbugz5RXEdahHGR8iUiyQaMuNtwx5c3Rr8a",
  "key13": "3SbK7aXcooCctgdPm19pG8B1cAUsxLab2m6pwmhNUC18qokCFNyqPNhXDrKXu82L4ej11FRK11SNkpvHFh24hmy8",
  "key14": "5MDfbQtZ4YejDqpjgRti6q6V6WJeyZ58aiGkY6SEsYz2iXDFQYB7VeoEr8A53eURLVwW8sB3G4kHonEwNp4JMxc",
  "key15": "5N2T6V239vmnxFkNCEjYDEmihYcZUJmfYNid51N7DDKFxc4yBRa4fpRmEsY3xW3iwJb6674rYorjjbPnEMNe87Lx",
  "key16": "2VJ3kwvrtBUwVVyVJXxutsM74RJYwUe4sJPbk3zA8DZN9z2UQvsLzG3D1yjMRCUdY89VmN28KgDWyAqaJJodUQHz",
  "key17": "2damwNu47m8CM8XNPQvAk2BaFSF5nUmLkM2uHzs1rQeb1pnPv9kNNsgghidhJ62KR52owbXKAaFa1x36EAx6jhXd",
  "key18": "qemb9PEuaRa2F5GnEYk7ZTt3pGHkb2BTNAiKH9FTVV8BF2smWfGepjCz1ot8Qfki9JU9TU6fycPitcg1gxMQvVa",
  "key19": "wYwHc3Kee72E2yqBVFDLVbxnFF3mx8cGtpC49LnLmXpHYNr7Bmd3BUXdvQm6ZChr92LuQEdij5VwYDtGFCb8GTh",
  "key20": "4ViqHEn92iFAHUvEa8T6Nu8oWbHZ1NA3BXt8tM9RE4CAqwU162HpAxsTCukRCeg4EQZHuYJ9sNuwmgCZarytCvAx",
  "key21": "4N4ejgfuEuH5YRBhw5kj1M3eNYrHpmhPWdZBxfeLSV4tTowtNfi6WTGoxof25Y431wbRwRMWDdWxuQU5NjmZcXu4",
  "key22": "5DaVE8U93yXpGoCf8sf54NphM7quKfDRm4qM3cSxECVSEaddiXhxF5yxcwfoKF6AZ7DZ5RsRtaq57g5iTS95qvYT",
  "key23": "3LctV5GTMWij8KANzG1U4VYGs3waw1hTqQpuJs41e1XwXwBePC4UTkMR1f4aNDFVG7TVAf7gu6KjfvhPnknPAVNM",
  "key24": "5UFQ7C6JZoamb68g2NrMyYoicj1NGkugawft2cJNdY4ESyTekD4iwxzCCisiAi2YNbLLqQvsGEaNtCQ6DU6APsXR",
  "key25": "5DW8hHriKavJLTwk4dMxjC6mfmtJKcqpGYFSp22Y767PgBnn79Xg1eptx51DsnVAakEpGLwgmuZxVrt8jiTHptMn",
  "key26": "GCTzyEBC1aNs6x9hN2YF7A2pToRoVm46BeF7CKJ6hfEcBiRnRcY7BuHq6r1PBuupwrtW4WeTTv8frynQNgm6Yg7",
  "key27": "2kYqhFeCMjDJ5mmrBAU7Yu1htnTjoRQSgXhFKc71H1vw913h1cKtiig84LNaigxFuaqj51LMqep3AQHGK3mVH9CX",
  "key28": "4s4JBmr2f9gh1QMnEkUinZbJDYKKdoMkKx2tCzYjSW8RanaLZLTjrc3VDrnYsHN17oxgwKN5Nuuy69JLiqduLRe3",
  "key29": "2Vxcr4KAxoCcMSXrKwhP9JY5ELd8We4He9D5Km5d24z8qJjuRyT2QfGjxZKTXPFms7NqCg67QDwBhvuy284X2p4W",
  "key30": "4vy7x4eXAL1BHYd9FcgwNsaPvr3KfAuVx4VQAjHdhhRrWuU9fVzCpDCPzVaeEi3cfVhFRgpqN9Yeejag3tAJ8qQ7",
  "key31": "22qj9RvgWpVVhbw125vyD26Jcwfcecov67yJNiUquY7UUqby8LpwSypnG7b6sgAjsSRTYgBq8Wq5QfTEnkHMDU5L",
  "key32": "yXXWSLVPJXRDo1xBSJ5oeD9ZZozPSPgqZpcTJTQrRL9JL7zSW1ht4nyFJzrzAQsM8ReTZanPvmaYKL5q8u8Bp4e",
  "key33": "25i8QP7eDtNWusbeEvaXC6nrdsPK8xteAhWHSybRbNWb4ytdLjBh2PBPTcb2MLpSBHDt6VCPjMTydqWyvBrC3Jkx",
  "key34": "d6N2RTX31CgBBX46x3uTU2UnDYdTQVMQWLLGFrXe8iv61TEgN2xFkmPKBfDx5mJG9bHdvfstjsqRS7pt4DtduTt",
  "key35": "5WDjDGqrNphBQ3v7te9F6BeXj8rSrPQiZkNkcNeNJcpzj2m1VwLGznqCmJGX9Uwkizd7FuDKLdtRGezvLdxcdGcj",
  "key36": "RhgERQEoGUC1wxYLRp4W1Q2dBa8AZRN8YCucsQuHpcgmGC3Xn8bddj41GPg49AjNKD8cBWwwLPjGubN7T8NSgdk",
  "key37": "3QoSweZGxxtaH9TH5G3G1jDJnxtcT7RNyrwy5sveqH3DapXk3kCwwQHZRLvVqzZWm7qPbUpmB8kr9oNfMKfKHqDp"
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
