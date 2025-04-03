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
    "5RhGagZ8CyGPBhKu4C661LAyBkEgG99qNbBfT69TKbwsAVMgUCo7q5kMr7AiQancbjukv2LvnEDG6M2vR2NpHjCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bdW8Gv8owZ9J1MXJSCVgRC4soebSiF5qdWfytjWhKYBAu4z6rYGAkt8p4BLYKSr1AKCVfqtAPKmJNWgJR7Zg4ev",
  "key1": "4EQ3cofXPyPWANSrZwfmjRtegycavtKyxMzaEhVyjVCQqugX6da7cyq1qazEci2R4SJbKie54BswJq8eM67HJ4ut",
  "key2": "2ZZi2vr7eDAW1kpAAd8JiAqo8DtrxDxFM2V16g5ubLU6WGJa4voVMuizGJi5apS9T17ZXixTCc7zFgdcvvD7SXx6",
  "key3": "3RfFTepSoaZKTwMxkWbqHmgfbG54PGXque679krs2CQVMxneYjG8gqm68u7qsXKoqpqdPWnwMMt116U5HfQLbfw1",
  "key4": "55xQmyKAYUj5TkBhACuHV1H4Ko6CaMsdxpuPTJVa5jPh3K6BKDxWkenPXytkTuMHPHju5jecQEjW6qAYK5bbYnaz",
  "key5": "H2WB9pFQbt5UmAGeReTiHQ1Zqn7VoW6kSyLBPah31ankuheGnNqyrzrxGccFiyhhNx8K1x5mXPWGQ6B4JFdHPYH",
  "key6": "2yv4YXyGyunhvMTBbDrEU6TXzepW5ySQfM4cocHcsyJokTbvXtQgt8MnLqqSe8UvMjNCaw3rE6ASxgVpd7QRdsQe",
  "key7": "5BztBFNrzLmBaBaZ67AqrBDoZLbZ5EDZF38Lpq7TRe2o1t9gBcN4qKnim9BQQ7hxdfnvocTiFrYFJ3HqaNuba85Q",
  "key8": "5oqW4XCwzPkZBVjRAHsLMHRAk3DNgcjf9P1yYvBcKhYHUsrYQhbDi71PZn225U6cQuBQzuXAbcbDzRHEb8iL5hbC",
  "key9": "brYmqbPMVneCAS5mcv9XMpLfMBJxCnPE72H3dmfuLbZCVgEYpx9KEcb11X9QXhvbHEZCEHhGeY9VprL9qz9HRt2",
  "key10": "5PfVs7kyuooS9GDgKRFTXcCYcWCGebdq2R1knhbvPJe22DDyd6YYSBjK81c4BZeSnzwFBKqc8pCXicb8eWiAbwQh",
  "key11": "5Hw2n88n163qgWXVVzA5GHzBvrhh3niDHq6Zqe79DT1JwNhyRjDu2RioMQMidaTVf9ME4ZECmEpYEtgCzNhWAA1Y",
  "key12": "3gB4o9C3SB7y2veiyHCDNhJmUsnN635jaLHngZzcdBgTWjhNXMgMQjAhwt5WdioTg1dsNuDf7a3sxkeUJnoiP6C8",
  "key13": "2mTycoPj9QZPNNsksxdNZfJynGL9jyA8y9sxj2FfkyZCpV5WjzDS4LV4MFTE9wfevRd3MgwxyGnqV8DmeMq2xcLi",
  "key14": "611LKtoQon5Msdb9AQsbg7sgL2wTBSiF2ppHW3ap9pZ9ygGrBqBuGTi4Dub7NKZC9ukg9hzQJTjvqhyF5bF7WhJ5",
  "key15": "4ZEWJ54oCtZgh7kGAkN2DLg7LL97yD9Q2B1WKu9Gjaac1kBxPFS9U9bkUyno8jS4eyxSgrZmMWvWtLpPH7gMJFeo",
  "key16": "5i2b4pmkamccUsZEwHHzV1y7UXpTQPLfWGU9f4aAYXAzrst3xsnfMJgDodkEmScHctKtjVQYSpHAhLqC1UzSVQG8",
  "key17": "5QSNCZoczasjKq5KBaHrabXfobUwHGmL5WkVgaG6U5DCE5UveCTcuWaP6RweMuhDfKDZVFGgxA4SDyAshDuDidch",
  "key18": "4X7praD5aE7EPWMcsWjasyXAyBcYPg87CTR3YEWEYDDqdeBa7v2NkdLus5F5eKDardLpCE6Y2dZvWCARSLeiN4uw",
  "key19": "5fqnnmaYsSpfQPLmMTYtfvDPsFCmVanLL3LnMiUJhqguwEeoG7xE1xAAPgTyrrp9sHqTC1TFXvrXXNDMaghka1iF",
  "key20": "5LWWgwu7XbcPzDQ2pExYBj69cMAxJc1CzdB9NHLviubpQDAgzWrzemi9d6oEmNkDDvkJxjnw965RBHvKMBEXRp3w",
  "key21": "5ngaQkqMBgPfercC5vB3zhui9xJZ5dWmhYQfEn6gEzSEDngfFn8xrAzjjT8eeAhp2ujWW3UVJcjchqTRpawvSweQ",
  "key22": "2F1ButzF36qqv3RLvpYB2G422D594AgubtmqUgNptTz3MZbcVgcZxMPgr5ydonDRbaR6naAe6k3VDzsy3LEM1h5C",
  "key23": "5cYVMFSHGmRw2V1MBfE9U9vJbFHanSab9zHvm4kJwaqgLd58LkbPidVhQNPKfdmcXUezoFPGXduRbfHeE3aLPv5k",
  "key24": "4sFUuBDBFNKVwvAY52iBYxSVj675zkoZ1LXbXW87BZMQ59ikcV47PRg5tqmBqrVncv1h6CjamSpQpjPBtBP7pHfh"
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
