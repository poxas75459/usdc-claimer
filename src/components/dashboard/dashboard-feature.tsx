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
    "2Us1GQQ2TjYCKj655NVv8c8UEaWv3CWi6TcoFvW8ycNJbd9ZHWuAEkHni7hNbx4vzfcYiBtABoqSbyiDfdMXfn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tS9V3FbH1pheXtnXJziBcSnkt8N2oSoFyktwW4xj1aXCh78XWbXR799JWrPiWs3w2XARicyCjFM4pnDXw3zew5V",
  "key1": "AXKxrDiV5qDuQYWivqwttBv3uMMbdoRWqYZ9NKLzXieDhRoHXnsiYmzHCt8e9WLa1oysjj2tfJqWhxdxTCYVXbv",
  "key2": "3t2swwe3K45dsT4CYtt2RPdxpRERuzucJkdmG2nxC8jME2xYokDyGLvkXw5omsXaCZgLn5Gq8XD8p4Jh4i2Ui1NZ",
  "key3": "1yxzyuUNoSbkfvjdd1uFzsrxjckxGHhJpxWPk4UXyiGbj7KUGaUL7Fa47nQoKxhkpbXkWEvaoBVC4Yjx8FDS8Ft",
  "key4": "52jCnb64dLqD8EgZRU1UFicGHPgMFs2N3nqQhzPByTFa3Nmp774jrwGLWbgZ4fvtPJAj6ePBazJ3132R4bewPJkp",
  "key5": "2Mf8dwBCQRK2N7i5QwkPgdMYocAtNs7QXQ9oqhsSmmpH5syEMcN9v2Zz8vNsp7iDCc3QzpTuUpGQAcwmndewGYJL",
  "key6": "2xZUU3VUH23v9u5YSyJnMQiEaK89C4soJYsFs8oYbGc6feEYc4VjUeGe2pQm9cRpaCAwp6WtM2ohwyTJSu8W4pc4",
  "key7": "2hwSUJ8JZdoVQYBFGbDQpWYq1oLcphBYcBnt6YevkJXH43RLfiF7it5SJYTBVJGJ6QmK3H2DDSdPMUsipMJ8ceMY",
  "key8": "4ioGJUjgentPmytoT4ReHrwGWwxJt7Vzq9tibsecavNmnLrERnJc3bE8pva5s39zn6fyqZGeYCtKrThZKmzNwjT2",
  "key9": "SxHQ6SbaBmpQ7wtxGfJcAaS9eQFb4aVpMngH3QgkUi6NjFjB8h6GaFJxEEJ5hwP4U7n64FPtMy8FDd3Hwj5GA2c",
  "key10": "2anqHtCcTK5CAC4qDZy5EauyT6YFUdQwy9ZgocYqUUxPqQh6VNLtA6cAsWjv6HzKsnkfUfZnNUeT7N23DSxa5i2M",
  "key11": "58A54pQSjq4CDtZrbBnKVcxppAMaGwEyJgzR5Nqqp2M8bpLQhnDfjcFD4mYRAVe3GgZin7U5qLypjvtCFVjMnPNK",
  "key12": "rnkPZ1CJFUfRdomrJDDAvGqzcSpTRHMztoR8vXc5JkRyRLFBJFkMufj3HwTneQssqodMzxk5Yurb1Eszguk5jMZ",
  "key13": "5bdhZnLHGwXKkbvwh8dFtZm2CiG9xwpTp7DgJ6NHYdS42QXYgnS9yESwVP5NspSLAdA2oJXWfbSVXxZEjJGG4RYG",
  "key14": "2dqMHLTPR88hYrBoyV1Auv1nKnjxUUp1xHbstYfNRChzA1Vc48Fem6mPA61HEK2Q4peoQhwjCtKGD1pbsh4PsQX6",
  "key15": "xEwuxecsqTL1ghZkNV1NiugMwEgJBC8QxTUTVzu4MhJKVfBDx1h2SJKzm5dZ2ah9xyMyz6s8yPjyYiXyN5qycpN",
  "key16": "fYDodJsbuHLro4QXnaUwjCZWpbAfNFwhEw79Bm7pB8Yt69Pismkp2roj54VecCP3os4aBqE4989gJE3Dk7G4rTm",
  "key17": "67Q4mGiwwdfZWFX8MGmadVkhLg5NoacGDF2fi7Qw66t8hwCniKWB2V1cghfdVGLdWfnspw5Lj9vkVcwhStJTihWq",
  "key18": "3METyJYCfgr5wiqXSbx4hvAq4kWqC7riMqYBHNS85gAtqtE7Dhh6UQJYdhSE2FdYcXtBRHJGvnaZGJiWKbnarqU5",
  "key19": "3Xm8dhkReuvVoG3yEtkhTi31gmr8GQYyxMKdVJQDyybEMhVWpKLakbZy7WQFpcd9MBAc4iixHAxrseoZ5xWHNAaA",
  "key20": "5jAkiexWxVudALvXo9wuXAbNuMaZT1uJQKfSVqx4qqD4c81aitxax1ya93tyx5Z215zfJus5yrdtdGAin2j7UPz3",
  "key21": "4RvqDLpcsQZb6dWppdakMM4gWYs5JGBMZZT6tjfadww8ViFyPJPtt8V8d2Su4GGkzKzrLGeecNyFm7qNxvwhbWuT",
  "key22": "5GbECwKhFrAqzrFTYQGFxpJtFCHpMemxbomjK3eZLrZjtrVKrSerpN11BEcpoMWDxq5cv6QcTV4DBx5XGMRQptgT",
  "key23": "2tmM5n2zjVRY7yqqsPzPtdn7mCw5Qz5TAu9MCCsxfuK5C2nGS29jjhaNgmz4aUbV8bc9dMb9BhjnpLwuACAEm1Hw",
  "key24": "3UZYY9rLwcDfJ32o2cNHTcCPzCn66tihexc5YDK4gxGGvFvK4dN2ixZz3vhm3QaQuGeiWYC6smVJq3AbMJ4jZyJH",
  "key25": "5QNUwBJjoDSkJXw94cyuZXgtCbnQh4o5KfpnANTxZHyYdRWE1Y8Aba4hqykBigkuBEVinbhBhUzBwmWMJFv5UoK7",
  "key26": "3vmET1qDFopHRUZKzdgN9c4J7WvRrn4zF5YVMyro6tcURg7mFdrdNmekP6L36abPNmCwy7VEWTHL529DkoKVbbjH",
  "key27": "4dTnqdE7HWjZn3aj2daUqLc9bm6qam3DW3Bb623RVNuqvK8ZGaHBQ3Mn8udUNfFTkDHNGXqqkEKTBb4xQrDZnMoV",
  "key28": "2HWVqry7cBwVNgF2Ug9mbkad5zrYSeWoFBXQZGg4yVTepgkrjZt5ase12hHbKC2e9sc3QeifEddXwJgqi9jTB5jJ",
  "key29": "4nGwBrDxzhvEVcJAK1jhdivmDiCoLsZUy4CGxD82WwPdj53KaGbVLuzbR8qwhh4TuHPEXYdw3cEe8bHDV8t3tk5A",
  "key30": "xJJQTbd9TUsQ5nPNE2pr9TSTjKimeorRi2hpRuxQa49FnyNSHTnf6kzGeqn6FYCGgdpAFQfjcKb5uzGrsCwsBTW",
  "key31": "4ukrmpF3ADynLVJQ8CGWD1bWvLFbCPDRYav6znT7LgcNgWb3NfwS9EnbNDbxJNH3ATXiowekhv6gqiJqMKgaxobH",
  "key32": "FpMteX3Y2CA1VxVDoobTxfGYCxa8RipYmVoLyoxMq3tcQreaCwxTkbEC2GrjhPKQ2u1eBYBfRQhxWo8vGsoMdHX",
  "key33": "7XLFBZzYj7FMqb5qkb74ajF3UbhTH5wTLwbN8Ut9auHfTzdQjSzeJ4SGCHnmzdA2j1paLUj5Yk7DPkUZNjuQeCj"
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
