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
    "2aL96BSFk9H3DuU9CJow7Cd6r7wbNAomSezoz1wCqG9d7dJhDKXRfuyUkihQQwzkhcVsCXQ2QD8cTPfWhzq3y48f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gRjtk58NhfEZGjwcQsKmT4LUNqGEgnytFeWAbA3BPdaEVzRKkgmgQiuB9R7fCq1ArbLU8gG9kZQjeio9MvgnRqj",
  "key1": "335m8UbbKwioUJULbvGnH4mtotUKmf9iKi8wra8FiZYa4hBSReZf8kJV3pnopugnwfWC5aDLzxTmwVBwbDvrQNXx",
  "key2": "2wPd4resM6wPNMSLJ8wZB3M7KTWC7HMnMBJPLFiBYJPZfVXejcianN6XAcuet35BjPB2ms6yMzQJFgjPFR19PEhw",
  "key3": "B2DRpDqq7c4sWt945ZbycuqaEneEwQqcgKx9rVSR3c3eXXegqjDz38mBt37cTyXX4mh1VqzoDNe9iVQ9zWoE2ym",
  "key4": "2szkPE2iLczkXobwiD4rvQfeZTrBbLGiHpaDBiYj3UzjjXXVxBm1PwJ4ruBCTbiQAh43XcLFD3LmjCprRRT9XaPy",
  "key5": "5iJv2BNhHfTpxA8q9UERW8VQy8rv2BcZDrCKS62ckTRhSPREf5BQonnMgSpKSE5Pvt8mdPVZKJKT9R9j8tW67x8P",
  "key6": "K2WLgymkx1bfjwKhQNTFoAeeEembnf2sNrjgYwjqUVA7D6WJnZqiyhmuw1GTdGL97f4Ndj5fDUxtTYPeRXuQfv1",
  "key7": "5hdtTFZRU5yPKSfYVSxd7ptp3wUv8bmaxrZ2b8P6EEUMdnqfJmmexZUErrQ8P1WeVv3X6x4gtJWx7aUzRU8YwaPb",
  "key8": "5aSxVU9Q3JXZa5SZ2tdUiqBRTNqNZ35gXGYkpYvaULu21c1EBoBdgSWNtDyvcKdA42dPbw4181Vao9quaFTFJVxP",
  "key9": "21CwospfSox3UDhxZXLYvvjbAFyPWjZPYFWKYFYmjMQjR5McKni38q9jTcB1pm8MVSNnrJWR3GEm69scAzVUHJvM",
  "key10": "4PZshb5jWvJbQwppEkdzjzrCvph2YL2kGd5WnK8KNLjZB9XQPkRTr1eSpGvjGE43MQ11Cgxtnm24hiJkijHTDSi6",
  "key11": "4QBZfZxgsWgeTcYWyWVe1mUyKV6mTQggghfD66ULagWxYmquazPzp4V7Ff9PbLTfE7raFtbbZAFEcBF56hBFHvKn",
  "key12": "36YjytLmNQGNUv2ZJ9rWviLYJcqGjRinsD6Ntkt1uDV3CfioZELi4w5HUuCdyWEHMMdmw61mQrPeG8tEpfmffptP",
  "key13": "22eAYhdcMY5UaXVUzaVtoatdqCB265vAYhQ4ZRK2Q5UXnFBn3SEYqD4uLBZkAdYbK64gqF5DbW5o8FQZqEmVu4ZE",
  "key14": "5pCB6v2gQYEYdQbQECfdk8T3LU3m2oAAdp91YNkxJDm8hN8UyDxqFMZZKcw8pLfQEsQirFzQ87gtBg9Yz25Z186T",
  "key15": "2FqgmkZLtb6Sjn3abzA81Wg2Ejv8pZ32vWrEPzQk7E9QyCWG8G66WzJqHdhkthfibecTtXv32PmyhH4qduvvHv8S",
  "key16": "ThkwP3aXLyPVXeERf1sUawJygKWSse4iaGqZh1xvxpM9s6sjXSCKEzu7MHqkvFdTBvDDkHTxdWe8qRTKwzMAxGX",
  "key17": "3JvG3xtjDJZkY8F672orhNsRgsaPQkXoNBH6tU5h1bYsEVH7ift8jXE6MLb5T4E8DqeWkFzzmx43NErjGc1ktNnX",
  "key18": "4UtA3vqL41JEr23Bhc7iNK4NuxpXxyzjUBJ9Ax3KWrk3dYjVToebmHZqYCNUEfkpg38FTvC21K2XrYx9sdPij89H",
  "key19": "3Pzg1jsJnnqdHQAHJ7bPchxc8aJCkKEZ3PmuUffPvA3a7NTQ7ScMugBWUZhGwwCvXhQoK4nfriz8dtowqUQFxFnW",
  "key20": "cXJo6Cdc5ZVcWaksnnrUHyHppsNphWkEFMM8QSetYaviWYQW1VFvvaxcbczLRG5ZtCtm646XoDdw3Z4HbTRos9h",
  "key21": "2SxxbF3k3m11gc8VJNjr69x4e4ApTePkNoX7GdsMZck4UHUexYj1iEeJoFWuQVLi47M5DF9NCg2d6yZXJ2aaGhb8",
  "key22": "2sFrBEi84tztbpSUsSMtuMfdcebQjmC1ZpFbEuYSLuoRDQG9YSAPLZtfBAD4X9JkNTB2bQoXsWt2RWVj4Zibh5d5",
  "key23": "37GNy8BS4PUeodZXoubiQUEjqiCZetpNzCAMa3pyFg6fT5P516hGEfVgQNaraWHSTBV1ciY3q57eNT6RhqS31qB7",
  "key24": "3AEkzhJu5zcromqeRDbmAKo4PpaQSyMQmvyfyKo3rnd7MZmgPo1q4cfPtqtwSe18p2pM2HXXwUMG6u4nCABFeCxU",
  "key25": "5F6yuZstSfpXFvyE4wvSUeAQarCNqUoXuut279c5QMXNPa6sASbdbfz5cVmA2rHrFCK2PLsNZ5npySCPxhu6BpoH",
  "key26": "5A5AmLrhr8S4YYssm1bZPLkGaYHoiNidWSrJQmu8kewb56rEchRJY92EpisNb5SKTo8mfJHx7bDHEW7r4sAjfnPv",
  "key27": "3tXybojfgmp2FpERyMYYKp5HMRFUC4819UnoU4pLp3HqEFpaRMSbmeJ2MBArNXjGDUx9BPtruhYBr5wsEfuv7Frc",
  "key28": "3Fk91JUnEE3YpTB2xYNhF7KsPtQ5ppNPCRc1S9Surf7h22iY7WbDoiSyTMUnNjjz2YxW3ZsmhF7MFRUTEUGaB7KU",
  "key29": "4VJrqAQGqBGFhGzF7Nfpx9SXJJztjnJXxPzwmzbP8gMePiYNDDCUBM96o7vHVsEvw4rFmRJX43SpjitXt2bxtfTc",
  "key30": "2Zy1bDD55UjWp8Hvi7ZMSz2tFaPQsLQcJEWeJEc3ohRpgh8aXGgdVTWJMqjUbmJvzCYiZpfkqsfMgRxiXuXSnspW",
  "key31": "4iCUWRR41YDZeYnQEDoshnJSPJ7erc4DkyHdxoM7e1EtG5oMCtDW8mFNkHNdgX7sRePsFTjNXTHCYjQ7upTDPdAn",
  "key32": "4PmRmg8sv2zBwcpQRbDH2MQcU66guGrJbXAetWixK6Vn5PWWzCxXzCzfCKr6iSzTubsuCoLNKmKM6giKaTDF9WrG",
  "key33": "2PxGj8U38nRqAsE9zRs1eFE7YHq3r11chKKUyd3USubETdo5nFHvreTvf5KDSFajv21Bdhw6S1a1DM8gKEpzEo2M"
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
