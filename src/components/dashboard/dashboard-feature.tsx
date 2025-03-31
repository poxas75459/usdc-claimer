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
    "2nYjvmRbcFv1YQWT3ny5JUnw6uXvB5vTNbzA83VsNnr89Xp363FzhcXm3cjXXaKMgQzCTGWr3YcS8faC9Zx9f5EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nh8Rkj17smtxGHr1iKtPo3chbwUxPSQXQkVeL6W2TpURUHMpuxr5bCydsrCESFw5D5jLkT38rPxJTgsVaFsFH2W",
  "key1": "4Rpd4esvDQ98rd2gUtjDzmz4vpTE7veqLueyc2AHkXq8mS3XQanWKfgXj9PvhyEaNqdLUsPyrWvGyXm5fbxt3TGF",
  "key2": "ejEFWQsZmd5zGBEpve6AEWJ9akh2SkkDGBKYJs3QyyFf62aJeU9zisFRexK5GkL6cy5gm2pNmaKEJRxPLZDwVYU",
  "key3": "5deMqz3qfSspgmL3RNbkAHivwn49bbCfy3kvw7p97hKynrRtT3atHZyxkz7vECpXwtMGnUZnTHWyEi244ZgSyJnj",
  "key4": "3QXkZqdJaKYE34PTiNrsYNn4DyMrqvZaBX49wWh6X5krgQ1Qrv9jdPimzEmcjt5UKst9rMyVajNA6wY76XjHFp9o",
  "key5": "2fikqMTuiVbzfe1jY4k3TsJ6SLAnxSRqULZw9sRJRXX31AkdFTo5BzERtDibcUchoo9wnkY6oprxEie63vkLvTtj",
  "key6": "w5yytkTvWkW6hcSn6cb4xUVZpAoHaN214UbwRQ4LqWQAmd4xknYp4tuUvyo9q9kSiDc7isNLqzBNgj1q9mZEzQw",
  "key7": "5SzXse54xsYS8n4P8XpHacdfVcveYZvy26zDdFUkQrLCwU6LhwaNEjHRumMWynLvTMk9JJrwdSkz4WqgRX4eUYP5",
  "key8": "3kXEnddM2bTBsUmdQpKeATkNikBLp5EeXwoDWqqt3Ux3MbSysW6JkMfzjBRh6GkW22AVWvJ1ueV9Nh4SJwsw8uiK",
  "key9": "3gyMWHdhGs3vkiogfPms7TCAJwifKBq7PttLddPjJ4DZ7YkcpELCcmeAqFYJMPvPF5vgd4TcAEhUhSn6S9WFindc",
  "key10": "zQcPiv6yAxk4GrfUpCvnyZ8h3N2Cf8u7mpWyvvZWmSZNFQK8bJiKWTcBij4yJ9T51LBDkkENbGKBmZ2sLqvECzu",
  "key11": "3E9wBGvJ9Zk3jmehc4vSuqvxFj75m1FvSCwWn3uPhEeaYBoxau2VgtQ96iqEsi6Vv3Ajr75joZYCLDhkipw9HNoF",
  "key12": "3KuunB77Li8ytHxSNmiJ7uvEoUZND2xbuMq1UkC5yAvMwsFSmdj5ieuzczGZXvreQjYZogMSoQvrzKjmHsJRMgSr",
  "key13": "2Pxa576ecszqwVht2ZXo4wwcsbBv1JSJ3HobR2JYxSdGozvCFjMzRbFuJj95P2hk9FeaQVX5pA47MqJZz9bUm46B",
  "key14": "odJ2HJFTwsxdoCu9Q4mWFDjHaGmJEWv2o2hKx45bGfFY9RQk5GKEXjp9iNxD6RPWXT9FpgmW2TdBrPjSDYB8duo",
  "key15": "3tTdohDvn55yuaGTtqYSNTqe6mmrbvZQgpjtZKfBM32R73amNnkXVrdQxM2k5JpgXoppnKzUJ3ygwuZYFpHL2HpF",
  "key16": "3JZmDroHpmhjGy9vPJghxuD29AxrMScsrJ8Hnd8szhujPxqPobXyXjVXuKXfsSksa4e1ces583X8RzBoEY5XKMBH",
  "key17": "36u38ymwy9igpKiwHVX9Xd6K7MRQiA2BRNUe5D8RbMGwbWApAwz8uuBGZXA14CNsQdD7CaA9G9LnVBnkhLHrxj6i",
  "key18": "5XcP5EK982CAoioFvmDhWXH89jDrSv3oDy25Y15aNY7ZRjRwyECFN72YbfGiuj5czNikZzyDr5QXGyb8RC8LQ6g1",
  "key19": "jPUW2bpDjcbmHKQ5UxHefu5Ux9w9KPqmgh96QPkYKhhEqmYMgHZb3ERutaHGRCimjzG9QC2tKaJnUyPvAApP1U3",
  "key20": "4Ui1QA4YshaYenobhAcMMrb6HbJcvDMzjPd3QxQvVeqMbFsJ7WoE6qE6jdfsYMfGSokeqcen89L8WhVaMNhbKNqj",
  "key21": "4KBxNZDPkJFjQbGeiiL5rKCsfhAfaprXKqiDUDVxRSdpBWWfwLT3svnzFtGCPFcWYnd2f1rvqWKBXWSWosXJHHLR",
  "key22": "5R83k8ZQYaMrAxnxDd7Vk3xcERGTjtsVes1qoLZamip3RFQ38M4E1AGmLJ5xwaU6Q9MaBGgKecdLHZXfLmxAkxwG",
  "key23": "PNzFC69ra6XYvar4BYURyS85pcgyTd3taYf8A81Lz7kpxFu1pa5ScxGvXZ3kpXSgdVfHFKkGybq5VV8qyNUHopT",
  "key24": "5QNdaUAaxMNj5eiD31DWvbCw6hNyxuM8kpRyvjn1ppYBAbaS4K4tvJr7CSRYh9EkvQX7dPBduz8GBVTFTQVdtoVW",
  "key25": "5gCW2MDTE1XgCqpiWze8Ph2E2vZFxJv6eX4pZwh2QM5PCNbMXscMPMZxqwpY2h3cA74SxZsMehYabMZvohJgpMyk",
  "key26": "3P9m1AbcMrr6th3zw9eTGEARjNCvCdVnE2joBmNUxbwUQYjQr5bp7UMS3PtaZtf5Uo3EzqGaGbubVyJPgpg6jN1K",
  "key27": "yaNq7VLw3QNjqgT2e39tbmPNzEPqtPkfcZSqubvzTzqVz5d4M6Fz1CtFponPkRcyTh5DhpjdMrciLWs5s7dzQDc",
  "key28": "P5Xe1q8AeEDtBXmPp31YXrTdzyVPVRg7t5JzWJ531EMxPFN4Fpxx42K1Zj11zxoFFWxY3LsZLbdiqCez15H6F16",
  "key29": "5YBimvDkBNcdHZbbJfeRnye7oCAHfA5syuc4wbqPVZbY7DkYuqvd4Y5kJyAfRhZi2h8GCBA1KKQmm13yvmNezX2D",
  "key30": "hkgrW44j3ho2NmyuEy75p3zFpFjeqQvRbFxV8LH8PrWMC1zuHsAC3chtYkK4eMxuFwPT23Edg7MprW89TUWCiii"
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
