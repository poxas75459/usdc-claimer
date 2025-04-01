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
    "49SivHkb3U1mq7ifjDaVfx1NtAu17N9JkTRiaRgk3ZVB9amoNykEfXC7b3W69PzVxjSQP6sSN7GDbQufakmVyiW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TRSWhgt9KGgUfnzaTvMoHobfyfgVYf397jPwUUN8MEFiL1CRGZonvvHLVJe56FnmynShVWJhZVFjwpWtPs3Bpwp",
  "key1": "ksx3UMkyLWNQceMryMqmqYS42NyEMSNCATR8KiSgtSQTkg6gEp1oK1KExQhyUGEG8Kh81Prbo6sGkLx8DratgMf",
  "key2": "23A6dM7ZhenzyPkqnzWtNQFKccedDw5jWdFdDa1fdMtqzfRqVESZX69UDNSeXFrHZPLmofMakXdV3VqadRiAUGFW",
  "key3": "4eNGzZ7Epfa46xnQ8yi6ztERCqe9WBz1tT79YYstCuieVpDQnCcwSjPfJPzBehWYY9YjNFhkqcnxpqi3FP5iskXa",
  "key4": "3Yu1St5PDSK3XercU4L3rWJVn6Zx16Tb3nAKamf8aYS9ABhM8CvSfipdFb4HzGYWD5BDxnfNvrrZuzQQkx5cpATa",
  "key5": "2aQpX8MUNjdoxm1dXp2dwgCexML4H53wP8tiswTomwPq5xx4xoh6gdxvVbUQuQ25ADWyGfh1dJU12sREjSM8DAjE",
  "key6": "xS5ERfPnzn1ZZM3HzAmyeiPerd9cDthufTztRV6Qt8SNZ2ykquYQGfmxnYAwgqQGtjrPBrTJHteMNztb8NYpsfc",
  "key7": "4qHe9NxBsGCGzAaSwT794ueVfBmhJcQ1MNVN2J4J98reLqYs7p5gHBPPUEFyDn5kBpRkaYB5QyoPDZLLijToFhgr",
  "key8": "2jygb41zSHZYkhAueBENQSAD79E5jvqDouy2mtq5HPWxQTGJXp5NHRR6CyGkvPvACMQxXhxr3fGrQHazKFQbWWHB",
  "key9": "5xD2bKcYNJRtiCXLLeEtYa2vaNJRNGT1aShfqN9ihwUGr3AEUgvss6DKmQMYBiBZiiT67nbqFuokz7ekV4u8DhJa",
  "key10": "2Y9GLf1pe1qs499qjfbXMADZQ3Qucven3H7Ckkhh3bNxzDGvhMQsPyY7EdRn1jXRq5Je5VqXKFhAHuq3BHTBahGY",
  "key11": "5zb8c4MYpodm8D5893BL2oLNfF4qMvm7Erhu2KRATHr3gUcGQDPGdjqps8V5hh3iBNQtCHbjJ3dmVKPYYkFRvpx1",
  "key12": "F92Kxs7K6jUqhzZi6ZvX9N3UNZ6H5tgBjthXrtsSUBkJEzFXaAqkLf2SopQBtRXP6unXT2viyzuyQqBRddA12nL",
  "key13": "5hZU6qTgGnfaHsaFhRbyQBdixg1jrFGt46LP6GmGmQ2Tr3eWpkD3kGrm1gbNHHpeQw8SSy1MMgEhpnntuiTRyaeu",
  "key14": "5Y8n2rUGALU84akNUVBLCqkApNt44ZngS15CAguT7EDjB8AnCre3QVgBHtuZ2PBhNvRQPWh6bgeNVDxCE5B4AjDm",
  "key15": "4Pb6csEFhgGMwvYF2MFHuYzHUMV59CRpRQo7WBbRykj8UN8hjH2as1pXdrFJFSQLEP9hs1GSH1dcBFk2FEPShu7o",
  "key16": "4W4wMas1aPTWfX9V3XQGmc6K52Ggs6cnJuqJryL3YjWHWGtoqjeLRL9EUXV9sS7dmRVaA6jFSzJmZfGSRKE5t1SU",
  "key17": "48qLGpBXK9uzdVPRY6ijWKtANMToqxJNN1Z4wTpUmQePmjkxAR9qcWULzNQ6jbqWh24LTrXjAoY6LVPmitw26i94",
  "key18": "4UdCF3xCXg7CKRWcp629J5LkJcY36XGMoNT5eZ5Ui29jhydih3XoQtViui2tcNSTW57NEit9Rs9g5FyXi6ZefZJG",
  "key19": "5XUwy8mrzN2hmyaFE5bqDeRtJKcoWkzU1trAySShUxa2GYZg4w6WScB7sLumVC7PUYFb9hD9ajg5qeyL2bEwrcnE",
  "key20": "98wDWZVDSvbvuBBCBJkDAbW53s9mGtAADhdxHGp4bhKpMtGos5raM38chMiBfV6mAAzWTCqoh6ezZXLbhRdnHLu",
  "key21": "3MaWZ7kPf9U5Tju1aG5d4ShuHApsD7MpBgBfiwfucFHZrb7KyMyhcM81eUdfgsyEAtSgSoWJ7pJtepqVS5Ur37Z6",
  "key22": "8Mr3yemfkNMW356SwshonXoMs9fWc8TiGQuFZAoNDUhed5PVR2ehHtEyriA3anL8bb9bvaxzcsVo3dahMMaWrW3",
  "key23": "2XoALJYb1AYwQmTru3Xf9PoeXmd2exWVsxhc6TZLGdyZeQtwE2L8VxFy7sSuFuucmPiiEY1Fjbi9jRXyeTnCfNd9",
  "key24": "4APjBoKRFHwkD449c3zxrVfVkozQ8mQUwpdJVGc7MqqvWzzmmVRGR7YZbERBX2fCjKWWWtVvmFctzYWSxdhaV7e9",
  "key25": "2agSseEoYBMDFTm6ow2KhCm5ggEvcihfcVjq1ofBdfEFiyuh9N5cwa3UF92foK6SgZU8eGFVzBnXDgE9capPoLmX",
  "key26": "3yavfX7erY1KsyiuU7x6Rs5t6RsvsSdSMpAxtGr8h5ortLqNwaatZeziVTXNtQcBtWCFATSUMtoQXjYjRQirXWzB",
  "key27": "5qp1471Teyv126tNQEcJMNi6VBvArP4P6CyXyPhJPyzRcZWEN8ghup5496rYD7tU4T8Q7z2tXqHDYCpQ8dEdJytq",
  "key28": "49573h1qDjgtT8EEbeybXxHPjbwHPcA5aDoizvJyBBLExbsLFNXKZyJHfzsnwuHhsUud6g86YbPSuGD21woNd5BC",
  "key29": "5SraXsGo8uyF9qH8FxveqKDK7fKAqRgzFTQJ6Ynti4r8frxNbtAvuYcf2LKe12CXxycHWSPV3zmaDkDJR2eGuKMr",
  "key30": "5xkTXGhhPE5san3wABg4MQyMEEssY9mLhwd3vfXBSsM4qE6TVpvqmrAw15inpnAVgBfekkJjzCos6C44g1syZr3d",
  "key31": "31R8QYdwAcHRjjLBZcVDP9hdgFTjSVbyvypYMs2Zujq5CDNXMWBtnt6wctWB84paEfN87DVjwLCD3muPqxuKWZWV",
  "key32": "4dWMyY4yC1Ub4WbMwQBDRNbBy9dV8kDx4CPKzqxeZSRjhhcU7NmwYs35utCB1o1mJacQ9hHhSLxb2BwryfKS1dva",
  "key33": "4gReQ7EXSKi4pjW8mb8rKLSrU61E5v4Ema25MSy1omJKrQtyvcWqPwVjUefoZWwXs8Nw6DnYmU1XbveXjheqYb8i"
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
