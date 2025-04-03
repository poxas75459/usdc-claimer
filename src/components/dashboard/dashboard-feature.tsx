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
    "56CPUm5iHvH55Cd5AcfMZGAwe8nQmK1pnftjXwQG7tGDkCvmvGXFqYupXCGo6G4DFj6pXp1UfvAzb6ko3sMX4tqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cgUVaQrVPg8gVyn6RrNQwWjYshUXNxV6TYgibuLQo3wndFXS3dMGLN656E89FLiUn4yUDU9mK8UWfwiSPsNwmAu",
  "key1": "53oq9nrqQACMD5mUR4ioKsCwD4LpAoBU5PRyPivTDhzKeoxbHG86qE6Fv4Fnii6B99AwRFL99SKSP6AbnkkrqRxC",
  "key2": "2Zw3vMHM1NWtM9mY273XbPviwN8EwejYgC18JsCuXWryWVMY9GyPgaXr6ckoXemSV88TrDL3P4uaWzVEPJD3fVQh",
  "key3": "5ePpzyghUfDPSbfzZPdK66kvXbXdXk1ukrexWqzJuDahf5GUNJ93Dz9kJZAfuTEfNAQzqz6q9RLzwLgXPjbS2TiR",
  "key4": "4NeaGWWLYqasU8zNijCgfkwXeW52Pgr5QF9re6GqHx5vJdTnZ42kSj5GJmfZALpakacbye8d4FHv4aHJkW7PjeHc",
  "key5": "56JWEomudw18boiUSfqtNwc8dG4mPsPQBVA6x8Kf68fpVqs8yPMBxrPNJDPpvCnbtMu1CG8m9fo6Mm6mQrhEJHEs",
  "key6": "4FhaMELCrfJuAkCDhAcMYkrfkGKrj2n8ZDQExoutWN1ZGRwupn7ng5hqWgM6RLgSaHbsY8JSvUAQAq4trsahUxwG",
  "key7": "SyrA57bfTCayR3XB65yydwE3RaCaQX6mm5Wi75nqTN7NPCyZXLo4pMpaVyCsST29V5T5JKg5z4iR6cdE6GrRhLz",
  "key8": "4wupmT3MBNZLueX1rV9wWgQy97qwLdL9SPrdKFvawQDMrwgcRkZK2uUdu9kj3bQK68KqV7Rnh5pVWPhrmW9g6Ycj",
  "key9": "4zQkcjfPiNTEVNtGnc4Eoy9KJ5ENa7kKwLpBo3wvjEJ3a5UGsPMzPkTWisywczjywtwA9Ek7JguoPJGSPeZNCNX5",
  "key10": "2FF5DF54EfjXUfhjwrRoYfvt5ZKhemD63Q2JE8ACXnCuuyY9mT39N9BRDiF4SUGbx9Cokv2MaJP3xjanKnfkC9uL",
  "key11": "2vqBwK5kJ5animHURYzb69UQLbgu4ktP2bqbF6Z38vrkmR2qvSPRB9VffuW3AJ9YsqDCNtxkL1wUGN5hcJxkh67c",
  "key12": "3mVEPMQKHFdcWXmHrUVpbAfekBGrfU65WFvQFgctTCd3NaBhBPVNpHRBi2Bv9JvWDGpvZ9mLuuzc7szYtFsUJMQ2",
  "key13": "nezovPtzZA92WFRPdctsXBB6mb5CWQeshwdYVNyxHVXNDgUVWxfVWGaPUHgUqL53Ghm6WmgadVuUyomS3iqCfms",
  "key14": "5dpP2JgykZBzNudhKYv7LiPMu8FYtLC5qfrnQp4fW6dswJ3MEgdKNHF59zay3t8XBJaggFC7QL54DZ744Vd1fsiU",
  "key15": "2CvP3Ur5ZqwuY3VmbuTTqtoZYB1rKqxGq6N635u4JewkyXLnDUwGipwge5ouUetA8PFf1rdQ2g4K8fP5DPE4DDJn",
  "key16": "25i8mBaezFXwU1P4HEc9piis3ENFtZ9FG9m8wk69XWgkBRtBEzvvMo1rxcQp4wxQUACpNgA7pPVstqXG6BPzYWRT",
  "key17": "3gyS9Y769iuEXw8HVKynp4bQHHajpn21517BcUuskfmAFDGiHJpaoNnPokjeNVN7m2Kngf8eEiqH9xhZe3QoKaiB",
  "key18": "4aQLUHYSjyHQ9dRXuJUjQTv4qemptGAfycfEKiLfyKgpcee5kMhXWhm6QFiJx9j2Wwr7uFE5DQZWrCYrKwpQtyzP",
  "key19": "49hpTFDZMMkFUTRakoRVLhpC7WKHGs6Cbn9gXpGXMAbgdoRG8DHu1dUkPMehUpWkH5saVhBBmPzxnh5wRLz24g2u",
  "key20": "3hzK93kXfjxE1ALDuXQFCeBT1DF83Ds84PaAebXx8qUZGvUjyMS5ZqSwqMyN3RYDrPZaATeS8h17Grphhux8eJh",
  "key21": "4jDnUHFewGTmDJyN4Fni81nsMVjiQgSwJmgWE7RjFoBnYjL8o6a8BuoycDU3Kar9sadXCSrHaoxnz8wX8EndUu3a",
  "key22": "iDf7LJ4KxP9nAAjHYPxCBcjzAWxnFafjKcMSVVTUbHEB26BNb9S73cJPnrz3Yab92XJcbTT9mMwjKwwx7P5ysAd",
  "key23": "3Q2V6GCQy8AMo2AWf5byEQ1Hgna2AUFoxqWhS9qwsu3b2HN55WuY6G6N2UeL8FvXwY2suew13nYbPRsMCkxSqjsi",
  "key24": "4ML1z5vEcxqjPktD2MiWoXJCYTuyx8D2FRuGnNaGqcHz5vLeHRm6erKGhW6jNqvvFDNWd85tYTy7SVrTfHmFR3cQ",
  "key25": "5agxoeSzRRkTn8CNsWDBZrW43AgnLiaBzKVPQe2BNLS3u2TzAX7RYKvhDDuBRcZQn1494KZ95FxuBvagjJtTF5gC",
  "key26": "RyFhXt3BvGVF6iWts6wbLAwFqbvoSmbWiAZPLxbgi9cGDmsbrDMJ3wBXW5U5iJGh67FJECLEnAb3NdeCuHrqJE3",
  "key27": "57c1bD7wNTc3tBMcuJ7aUrr9b3XWsQkkYE7Vznf86qU8Knf5FnKp2FJ7BJwG8Njqoa25WqPygB1qBjfFitADc4vK",
  "key28": "7qmCwRWYeDuNQoXWkPr7L5vvN5Lznx8JJbhxwyuMd7NMUkzzWmfMRfJBDWUrtxF97SSDNXQfX8SuWJ5q99FpEtP",
  "key29": "3XEwf8FBnmMbJcTg68HokLfmuVt1Td44qa8U1yBWYyTNhsZmjorH7Za7Amxp4kzo7Kzrh7n6e75u2DhrnRcjGubM",
  "key30": "34CmTYnNBqKbJwZ82AamWcFsgTqeT7Z5426Uw9YNvgsGaLnMZ9mA93ytdrywhSqeGcEC15xuVVT71TH3iPW7hokV",
  "key31": "4oLRR93H9odW8nqq8SB92qTGSwFYvfFMzYeJ4ibmCy5LpceZGUT7zbM4EJgjuLc17UJbgWf8GnuC4gXLm1fGNXHD",
  "key32": "43NTCp8QHu3UegpCZry4x7TXf5vs4mMbymbhx6BRj1gdrtUG8b4rnjN8m9CwkCSDcRhsheudLsUMcb4R6a5EwvPS",
  "key33": "5JZDtqnCZgc9suuJdzWHd4dK5HsRpSukaUeaaoYfn6JfReyENcKa7QFusaMMuEkrFT2iM3BoAepsWz6JigoR2fSm",
  "key34": "3yp45yLcXBojNjkxdCynpvfYvhKEW4fLAA1P9mMcvsuf8iQMsaTRr4Z8HWD86wmcbUCbEhhPaL4mZzWoqYdVv8Z7",
  "key35": "53he7C7hJhEzkDrihGDv13skujqogRobBt9rT7qVVJWsBWv1isdkjmYG76QGp6nrokV6AHKQ6kEgMZQiubVpcUy5",
  "key36": "ujUsme2hUk7X6PVt4DLjTzuY4mrGs9LVtJ6FgJuEF7BrQanVhFmnAiHLeudMwtmX8BPn3MErcw7DgT9omDHdQE5",
  "key37": "wmAcKXjurQKuwQwMfUxC6UmZNcFyymt9yUtGhNeSJ8SHZZ3ywWEtqtde6fArztJAtq2KaKEYyz1nJakCqLJ9rpD",
  "key38": "3jMzU3XXY7pwG2U4bRZDFxFZBbgk7Y4zwR1i5eSD6YL6Kkd1DfJfvMhTGUiNd6M4jK8Q89TpYFTDPSdESSSDui4y",
  "key39": "6771LBCGnfTZhSN1F6EHceN6fZAv7R7d8SH8naroXUJ8dY7Aeyzv6qSn1bxEDBqdjc2s1aeVACyBR9tykGHw6ePC"
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
