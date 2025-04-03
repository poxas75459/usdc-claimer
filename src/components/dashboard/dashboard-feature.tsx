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
    "3LnTeYuA9ok4tRA91ycizNLuBFhZ9pFu9cUXLVmkCUJpDcFhQGeNoqYacatNNpqXvt7hF3hoHsrdSJaCSSiR7Xbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DzxYzbTN34oyNPnAWVpgJSgGCcZBwQAGtyzqQju9qVJ7W4yZBJ59prSwrhBc8aoi4gaHUuzfrjNcjpteh1uZPb",
  "key1": "2yQoZKDzB5XS5DPKdEKzxqnJvd4GxgEtQma4AYF5nM5Wr8EhYrJcMrqz4WzYvHr78AkKs1KBnTKKRyd1gjRkXWrt",
  "key2": "4wY7xQeNAa2qUzZsRBMZRSmS4TaPgBLAi2eKqE4YwA3Ziv9pesSkFQjfNBtJdfz9p2msSRo323TeZ8EfkL4QFVVC",
  "key3": "2C679EQe1c4B4wXBfDzaykYC4GB3GAhnASUCWDs3dwtgTqHjTy5ecYtfmVc5ytTM2TkkrwfZJXqErpjnhBWjh2w2",
  "key4": "Rdy9dt3A8hyo2Kfsyz2GYsMpG4KE21JYTgU1nuVWHmzoch4of82ePAUeYrkwK385V4hgijS7CTNcCNY4EkpLVRV",
  "key5": "w42Pce2pga2w8Pzh7aMWziZmpw9x1kXdgPvkRWT8Np4KGnyffLFZod8KJC7FtDQ5EBzJsDFucsiUD1bByXSbvoi",
  "key6": "5foz7y3tuo2cDUBXTKYsqGgiyDqKT3eBeDKKevoBupasRYwQgxqMnEa64d8EPWiThGZ8ANg48nWUhDdx57vPwJgD",
  "key7": "3zQumoJ7nGeiRMm7FC2KLUQqwZGkj3WHsb6J8TVtEcYWcunk9TdYK1KsESfcG1TaUAAjn7siVCo2hg4R5KNQfUa5",
  "key8": "DVhPzPTqqnYVcqphp7qQ7fYyucj9ScmJZBJeEDr2EPRCxidrLzMnjpk9P8X46h5hvWriU86KmeFGjV1VCBoMSRk",
  "key9": "2hrH9bRibDQuYUzAwzPhwwaMV6H2fE4VEzcpyikAA5CBwCVufccZ3E9fgJkp5HrCgDdoZUY49QhDysMwZVyFP1PH",
  "key10": "4P4qNwVsfrM9f2PKWWgD9vBcwYwbebVqoLmYYaqvmBuRKbqaBWCAEycaRNEkvRHgvJXwVJ44iDCh5HKi9yfHW5nc",
  "key11": "3jhyYDShEkK6QHVyz1rC2qspeLNLtvHpeVodJZb584pMjHghcKqJgRQKAUrShsMkSAgsCNkd7sRp73DjC94CyFF",
  "key12": "4qMf4rWq5eezDF9bGa38KrHyjRbMVKPUnzQB3StGkokqdJc8NevesbCnp1W9aKLFbi8VJeWc5Ayx6ry2URsUKM7k",
  "key13": "62PLpHGQPjwZtGte5atGcihRJzr4pk1RpnTusWwf2Kh2PVYLQob4dMCQZEKRWMzaM7eKiUMTxEG7JvkXNTgQH2Hp",
  "key14": "3aLEG3Z9qSFiN27AXU8vpW2M1E7Z9yRKnZXTPLPDxiXf1MDHnAhr5FPEKGftCXBtAmWfZYq63naiZLv8F74YFonL",
  "key15": "5Hcnvb8c6ZWEmoDjM6ZKUiDdxct5QppFeaMXxzoVM6vZwGiswV1xKGtqHSZtaGHpxwPzWepUYFjAFZZnAgDdK4hp",
  "key16": "2YESHu5mDbByE9mDn3rwxAQFN56mCC2Ek5Gvch98MQFD9mFYBxDK9LrqMg7wQt37Eu3p9YDDavQp97aVzTxpahBm",
  "key17": "4cs6TedkdCmCpAf9SpkgZP4Nn9QZvLP8UeS6aQNwSSmWDWMSZYtbi1qqniqt5JR8Gdy6MkwR1KhEMQ3h5N6uvy5E",
  "key18": "tpg7aRXCdcnhWt2k4yyMhWKJ9paG2y24KdRJCFtbA1CZ6Z4scK5gL4W8aiykQkthTfwidaA72DfRnio8npB2UiK",
  "key19": "HiVqmNRTPrtLreuMXfvKEk6vSFYbDYF6ZiNaQTqjf6XvLM8NcP8d3R8XYjmE2NZsXx7YuWrVqQzgij35djYFqTf",
  "key20": "4eGEXFGzj3sNefdr4G4QsvsjZrV7QXXoRGToWTy4K7sv2WG3t8GpNNhZfJGSinNriwBT1fDUbCk9daUbqUkg45X6",
  "key21": "4VxdunMPv9GNV2LuA6WVyAorhQj4z5YWQ6pZnmffvpzftL7xbafWSzFZPmTUf4Qsas1rvfCth7MqewzHx9F3rc2C",
  "key22": "2DCWEmJxnWMBqeqmELFUTinJHHBnKWM9TR6jLNvGjuAVnxgXRsag7ULFU3CUjzCkXQKQJXGhXCmC9nXDReisGYe1",
  "key23": "E111HMvDESRqh4i2YK2nccn5LCoJAoLRh3EZfr9LJ6aSk4wsVrXZBByVPtkrMQhWteHvLMMUg1o7nJTbo5y497n",
  "key24": "61jtZTZ2z59gzHniZyG2uHazNn6TyejyAj2Qd1Y7RpzJgTNBUsnCtBCFNvGQfs7GkZu7GGmzd1fd1TKtrnmr3A9K",
  "key25": "42o4vi4Sowmkyn3cUqoh2ZqvrwDSyi2iJDKspCP8jbPFa5JHLHEH4pTWZ4YVKPQGqcT2Hm3gFSGgVuPqXnXnjaHf",
  "key26": "4cuL1ufcyXa9mrbZkR5KR2pfDyLKTmUVkF7WuErEHfLcy6ix3kkTAVtzLM94YCGXxBEw49pFx7eUqYzPmP8aD8Si",
  "key27": "3wNFPCTrCkmyXbzHbdxRJk4nZ1rxEhZ2nxKacMUXEobUpDQkBfnyBNiSbhruMrTsvLgP2FpebFNMasYuBSKu9M4B",
  "key28": "3AX8GQ2cLEDXJhtz71pP8AWwsiai11F924uCVFZJzQZ96kVqfDBLDTSEmK3Epmp79gdN2FGp3BgQyyEzZQUz261r",
  "key29": "3BGd6dV5jFC26XarLJ14C42KmTkhLfCS9MfWQE2uHgQuzYgrakDm3pbAo45eqiWupp79k5v1RGhL6p9z5aAXTEUd"
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
