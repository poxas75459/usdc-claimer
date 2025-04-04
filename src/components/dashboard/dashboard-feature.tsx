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
    "Y3EPbjGHPUJYAbsLGi2yeKaJmGwQB5BV4gtsUDkw59KWqZ5rc5AcU4Er2e1sVCYcycEEdy6cJgEjdpWKZJKm6Fr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pYpMzHCUSHMAq4skoC4fDhJEq8FmKVEkXehG69CpEtQubEsdMHe6kp9SuMQeJXz9A7mX9NJB91H4NfRKC982jGj",
  "key1": "55yE1Qko1qmK9x9rg7VMoQr9XPw7GrobAatmUsweSnaLYZzrjkVs4fM96ioqjJM8NQkDf9mH5cPLjUikyCitPM78",
  "key2": "3aYqy5rmH1hxRAR6S4yMEYBut5uh4fk3zu9qAhmq1CHB9FiQjwdiGTPbhU4bBu4QFuWW7tafngPEpCnaBvNdLL77",
  "key3": "KrrnZNTKkJcFUjWNXCfyqRHqGnZjCCdwuDkvRj6QvXBkui3P1qjtwVKzqTpDUQgLSdhZ7BY8G5moN5tJVN9rGez",
  "key4": "2TEutQoVWmen3jBGBGbSpcT2VGX9gY6egosg9ggCueBLuZgXmWb8HwFgcLyNqMcxyhQhahRL1Q7pmomghNvfJs21",
  "key5": "2A2u98D1sEPupg4VSKRogsaSDru8Rg51ZReLR3u2vmcP8cHDB1xLJSHLKnWYdUViqxx4A2uMuPtmqSYvqhidgd4s",
  "key6": "2EvXV1eeF3SHFWzKctDZ5eAE6AQBZRrvNDTNE7JWiST7Etbz1AsoF7NvbGPaDaSMtkihDiGKp2LyvAo9EVFX2RwJ",
  "key7": "3bEDrqQBJwiA5UE5Hf95NTqFfW5ztoZB6Cx6QAb2Zby949SpEicFHHmh6YqH1PdSDmnH8JA2kKV6kB6WM3in6ZCX",
  "key8": "4vTpu5zcJytsHjJ1a8dWhjeosEHq1tMCzKHF7s9P25w67io8K3PjZfTPqt1CEm8sKL1Lco2aLupkH5S2GmirBsir",
  "key9": "4nivsdcaPtUGEETVfDSfj8hnEXCDcKgRgbsmLX8agfHUrqx6BcXdbRRniUbZqVN71tUKYTn4HJHrVPQwhQEyDsC",
  "key10": "2Lq2sksvTYcK1qm8ciid6pMWgqkgET359HfW7dZAeGKMso6VEEpxZsrD5Z4vBibFkUpL7DaLJBkXbqHCabi2FzRE",
  "key11": "4UdUq2CKjJHXn6AULzjm4fmJqThZ9nzuAkB11ooQv2tuh5CTAX28FtZYnHmyvy2cS17VyqgMgURupo2c8nUAkFAU",
  "key12": "3Y5Q3gbwNysxJtDkDKZVKQ99urEPMz3At8MqVdY42ASni9xFckEq2USxzYvJEJQW6jHq1QmsaSHww5Mb5KD3NAwN",
  "key13": "59KT7r1AfdYzjgaZNUeAoF4X2hGZc6HXdNkxwRNgMwy71yGaHCuKdPYYz9VvSsrcr2ynuzqs53VyhBsYY4tMuqYH",
  "key14": "GotkfSsr8Pa5oG4SkgAFv7Sp1tgHfiwXUpHED8Vx2zjP8rJ27DbLUTA8xvLE9cthGDFTRLgDXbm6NagMqCs9ewS",
  "key15": "2FmZosfXtE1kZ6XbKfxQMKaKeDh4sPCC3dqr1d4HQJC8XofVGr9GFi3YU4M4ePb4y5FHtwWHaR8BJM2FgQGmEqDu",
  "key16": "3xnNnpPEbzzDqrCwf5hJweUkA7XYZJ1kFk8fAHgNhzubf28PU2fByZgk9755Crzcqj7fDDGAh4Euq5T8MFCUjbda",
  "key17": "242nimCeo5ZKFyzUss73v51b1jqYtuJdLwSRJXYtGM6VCuhMqsSgw9GhDL7rtUwKfTHymjFNj3z4bYff7BmAsSJB",
  "key18": "2sSFzMjbUp2qwPpN3HPFSBe5ssRZbRcj5pcddHqZcRNQL4XKP5nYSkFv4c49NJNuMSYwfjKftZJKfyZbtnfCPYoc",
  "key19": "4EiGGzNzTxWcnrYdDGL9H3A2BqNY2viKgihEb3R4kgz4y7jMbEZQeFUAMZi7TsciKDiwjmYoXbfGqALYkoMGwqBo",
  "key20": "36F47Yfd9Dooizm9WHbi3zk521XNh2e1ECR9EV6rNDerRmWSaN6sqEPo5TDRQP36TNhC4sdd2tj58UXL2gt5o4hq",
  "key21": "4Lw8kVvqa7oQqybBMru2TN9iKC8vQ46ATPWQy23ZfJVRoGfyacdAoyjogWj3websfiAvx8ug3hoxNK2c6NwiumLf",
  "key22": "49bitjeQ7WxEsF6vwbxWRGARjfb4qa6EyxwMJwXYznF1pCywBj7Qjqiho7nxNBq8Y7sdBseFqPNe9rkqaGuMwTaM",
  "key23": "5xVewyQ8ZkUESafXFjSh33V6n5vK6ruj8DCQ5EjhepDEbi9fqEQUtrqK8zVmsPcXyRzJCHgovzKrWeVHFZmn568G",
  "key24": "4GBTua4cNFKdewYWNM4T6d2XbwxKToN9MM8yMgg1h1gCVq1jLxNAgKBNEcVVV4zwoc8t8Nd64ekwZxBFBokq9FoM",
  "key25": "PgxaMxHm1CxCB1sbQYx8PdcxgKtxiFQt7UAEbqSXsrH8WiPHivobE1Lff4dTVn2yYDaiJuBmLx5UgYpBa7xExaS",
  "key26": "2Lir6kKmk5oWiw7Kyzz8pEdD1LxHtpvyqyyWSR2WNiU65MWk86A81XxtnbUksAc1GtggohGG23YGxaof4msK39io",
  "key27": "319QqunTHwSpk5pHwVHH5pHEZuqXFFUpkBEktLE4dUpCXA5AtBbzbcgXtKvXMHxadVYoB8C64CJ1ntA9r7YdinU7"
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
