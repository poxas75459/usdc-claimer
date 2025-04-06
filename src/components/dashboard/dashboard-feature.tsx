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
    "5Hdifd5cgeGi9stAQFeknZgXWpkXUJKDQAtqQ42dqQ1SxsDWqKrfpYvy2jpNEi2naKWWMnu8w2oLNiWfnQsQHEPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sDZDWLXWvvyhh1foeKtqrcoMD176f9qNRw4Ltmt853coyyDHaExoEFRGXhSpHPXYbpdzGsQvNkg5xe8gwo29kdb",
  "key1": "4DjyWj1oifMJN7puiE4kpmHBP1GLipZjtodDHHGqc22e24T68y5LMPz1cpC78n4x74NKtMpZcnZX3i8SLNPgFQFy",
  "key2": "2ap3sAVHhExcLn7qyQDpdu3QN7NrtMQmVzJAMSURzhsc8zkH17aRbbrbBHS8EALQymSBAcyZnz6w7xcfM3VmNU3t",
  "key3": "2ZJq5bZWqFyfQutPzKKWtq6WPxvBQwfXA2kQZjjoWyrDnyaGoBjGYn3NkC2Y5oKNy1ag5oRY2UDDrsMkGYVfHuzC",
  "key4": "2FnxLKP6qJJQ86b6V3bqZqi5VYRrpeXaUUhJUt9WSr9VT3x43Xxqc2RqJnWNSZZCCqeUvvmF2F5NTUQdU7PUJzhe",
  "key5": "3bkh97opxRkNYDNq5DKuC2TAaKspqqyKXi1NtkRKTR5TBnQhLXXRXjgb6Fwmp9LnZ51C91N7muy2AhvhT2WgzZti",
  "key6": "4JVm8chP1MFrnytAbSYqC7n3AsgZKiYmX4PZ9gdjjkVskhd1ZMt3CjcJvSg5TjqZmwpBu1LxvVY4R8pMXbARXVJC",
  "key7": "2QMgFyDH5CpUE4ZagkEMzuPKwS3piCBQUG1eSke7eKuawM6FKB8AADaBjENC18U1mBVYMDuhySnHTUAzxvV98FWE",
  "key8": "4qX4mwSiZbjkVrNZbNz1a3j167qq7dow2CxH6UkeK6Fx2hfFf8wp2VWvggjX2j3XS2Kewr7XPrSbQ63BaHECdcwS",
  "key9": "4owwGJ4PrY5drU1PJd9H4KfDtRpzt4J7SxTNsK34mGRfLgv1qqGi2ncPz7R6rLMQbFkRXcPfsFCfQui9DReBqaqv",
  "key10": "3p3ubLvtkBHYDkbUzQ9qcF7UvjoX6wQYoow9J7iUgZD7AFk57Pxf4Ay73bvXwKXt2UUzwL86mXewD78BLDRQc1Ag",
  "key11": "35MnQ9G3eq1ZiMqxTcLdzyF2iMjn9VhYgLU3o2yCsEpZhFdSnb2cyKq7eiZce69PVmHqRWYdVXUyTfrepisYZb7s",
  "key12": "47rFsumxhQ1eL47yRpi3kmjfUYdkk39uHEGR9eRnDt3V8aXdaTDFdY7pd52bfzthUdhw3WVGTsk626GMXdQ49Ru7",
  "key13": "sFTYYp3UuBjju4axP6XU4TA7LeWeF3oy5X9i9C1HGpkV6mMnSvYqiM2ivZrjHBdYGQhj8xBZ9mv8osCN8kwgxU5",
  "key14": "2o2T4cHR6U9FRiy3zNgGjbVEbRjp19ab4yKAbH39uKPiVJZ3wJpienhZoT1zN6aSNryAWpBor9VLdQRMW2D94M4c",
  "key15": "58UrWEyXzuvsRnNA3tpdZtriPXjt1CHXV9vd3BxnggfEdiCbkvq5JvKHxdGX6xKmWkQkVEfqRxAQcmrQ23Kf85oL",
  "key16": "2xkzJU43E3exJbaPwDhPJm8cbR7Jf4HY6xrMVnZ54VKUgvFgFQBzrKDBRQDWyCy5QisbR8UPfUYtj3ixphcKVX4z",
  "key17": "37RUd5AENXsveUdbsDeJHUDAawiAn2AYLoK2SBbRH2HxbrvFGBK7ihjs4yBygdmycXsSZSvsmbahb9AVj9UEJmkD",
  "key18": "HJMf5Dp2GRaJmNAtZnAJ5nT7DacHwhaQyLJS6xiXPGB2Hes7WkVYUkr8WRtrNznDM2x1AomNYtQQcdnrWpBRTqp",
  "key19": "4iMRVAzzHxCCh8GQ5DTYyf72vRnw6Gcf4eweRd8kEpcHhQbneNEMUnZd2gYCHZBcXBJxkr9QhbkLsTb8wGRSAU3p",
  "key20": "4eH8ktNyRMRyNJXfmQrxSxZ2hYKnJcK2j63AimYTKEm4ktF7d16VBwvLLLzmWDDLLjxkkuEWJLZBXokQVw9qFyV9",
  "key21": "5syVYQkpqSsszUMhsSdgt96g3HRcTogUh6D6qFuKiDH6k66sAbeg77mfw1KwXuVh9mu55Gso4JRTjnKZUUEQJwhP",
  "key22": "3Ab6MwXdyfGHNSa4wqexdq6Tv3AzWUdKwQy1WGA1BbTAeo8BuFJzG9S3JAEeycWuhoeMMFGzS1F2XZDwddssCWfq",
  "key23": "24MkjEs7i31gUHT31DKDGtv4ctYVXfSncppcVSavotipYJSMWp7RKhQhntSH8n3R7S8SfEUVkAg5fARPFYAKqTod",
  "key24": "5nKW1YuFFbDqpxiNiBPiNqUNkTZQYnYDgiFqkYcjAsQaQSdVZ8UQSZgWUh4g3opbnwxJ8Za4zRZwY9xaLZ5X4DMK",
  "key25": "4sW2iCVMqeSMLcnGEzWonzzwXuBkJecXsffjcFDcWFxebmAwJaTi5GX7y4Mh7BP8dhCC3fsSdopPudT8CEB53ntd",
  "key26": "3xUpFpNxkuzAEvFP2A1Qx2YEQojaowWZFjqFVtjboScr3wDVkGUXVc5stPuNaEuTY3nMEh78DGspwp1FGWvgamtL",
  "key27": "4YVynV341NjteQvhR6472WG9qXKDMyXFHoUsZeMg1dJrDkwPiy3cAhBt9U8KuEprzdtrPLQ32R5hcoUqkcsx6PvT",
  "key28": "5i2i8kKFxqggQQzhQesJop4xYBD6sMatf3zzMA6Ptk5ijbFRqB85GN5M8itR1E5zHFqo7Xpf66LAeacPGatsFg5q",
  "key29": "2HJFwtAnN4rbDgctJud4e452MaB2AHyN6DYcAYojSHWBU3NRiTNuLXbibgrgzpKirFaJksWx3VjDcDkYJwMkFnMq",
  "key30": "4RnBp4VXmnfyTQp5WxZxPQdoNzySfvNrqTuGg6RiGG12iqiQdcoUeyHuM3mpwPV4i6KbT9wc2ajrVxSvFxswkdhE",
  "key31": "26G6zBsC7LYVWDxTitQcJdAXZPynw6v4CokuNo2Div7SEq8YZudDkcoRwLFR7vRtLkiiKabyjy2pEYavBW4hKG9E"
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
