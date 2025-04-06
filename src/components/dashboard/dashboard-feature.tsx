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
    "2qGgjDRhbnMv18LqJL6twqB8URcw1msdyGVJpyxRQSpQFuP9zBi9rktt3ysV33BwkAcRCzCrKi7PSFk3hBpXDtE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V1ZdVnbGfq5GvdfBgPvTLwp67fnxDm2k7d7xAKLZGnJEydi3AAzUahcn3je9Qk6Yk4hesuUeXUyhyCWdVgxMs9m",
  "key1": "5st2MKLyeYoK6qWVqDBNJnCxAKzhCNF9HRfPm5PiqX2eiZW2G5NoKho9nrj4rgSaJSEdak1pYeX6wdtp2m2sGQvh",
  "key2": "3y2SzgnbLfasT3GhNoU8op5pn5ADRE9WsXpEQmzP2AusLgn1Mes7haoDVTXedBiVhoWc5VRvfFKvqCqLnU5iKdso",
  "key3": "3DjNsdqsCZNQuYZGgev4mkJtoqWgKCF7vetJjXY81neFf6c8p34tBDxQxcJ4TiBKBwFwtsj3vxut4BLm5BxkZ6ou",
  "key4": "4uk8rK33GHcdaQQTL33M4HEtsmGfhZ6phSRnuLs9AGxKDtWs3JCKVwkPwBx66dxnMRSc5LbMy8qqCRvgpwGwDsJC",
  "key5": "2RfbW62QPkXS54v8XBgZBzpAvuHiU3sYY9sqzu9RmQSH2goYSDbFiEuuEdYGAMrN47rJnf5xHZtWdMa3HkaGme5H",
  "key6": "2rVTLJMM4fN7QS2nzScbBh8MHhYUvbrZBsc8Y74JAKiXeGSFWi59WRzMbAQjWPR8CvUrqDUhSfZZL37d2PkxKjUw",
  "key7": "665zHnY2pr5F6RfLem2ArFbjBsEvmo8vcYkzq7aKKoRUkfnaUwVTJdgRHCVtJQpq5nZJp6SK9Brr4fdx43pM8nCV",
  "key8": "2oRWQMa1F3j26gtbrCeZZ6UuB1Li8npqrUbn8Q21Kt6z5CGFb1EzPy7k6hRgcJPrfr82dq9xJn7VsA8Tjjvv7S2Z",
  "key9": "5HukBryoE2VrBepSZPNx1Bna233pWBQr5x4Z1RkjeXQLpB81DYSj94k9zQU8cnys9JTgZG9oVSSZtBY2C3R2eP4L",
  "key10": "AuSND51Ko97wtAy7kmGUySxz61Gx1zNFJtPyTPuWc6egehWCSqSZ8SDvJd9x86Xd2ofGS7pXsQLsVc7BUp1fNEf",
  "key11": "xt83tH7S6M5X2ArmDyZSXzKDirXBvnkXJD7xCWJfoUP3UHVYL87eytLqKDSL58kNZKCRWVQTW43Yvf6fjLeHGqL",
  "key12": "33NvhxAteNQJDdQ28eAWTSTr9kbctAAdWotrFGzjRZWh7ynYLzKSfSViLT9evRijnFSM1CFSBXBsAyPJY2zX6JH7",
  "key13": "2NQgVvHQmmakiaSGEXrsr2zdv3TQ5YgyW92r9pRgjASVcr9yEYaKqxJ9ddGvhJgfbmcNrqznvizzcA66i4eAJ5be",
  "key14": "613zTWqYN58afUes9x49Q9XptHVqoNrmyFBzWjbabHoSpy6iNuAJ6AnH3yVMDwVZYYSE7ZqG7T2e5DqEbmK9KREq",
  "key15": "F9GvGDyAHmGcL3FqugJt53rDut3hjAf8TqMQH6xBBUTPJDjno2zRmiKxJsXcTBcKUcxXAcaBADzHhEMkNs3p3w9",
  "key16": "EbX8h5tKhVbHKS3H2B9m9rNqxxvQ8AzHMVWuLtEtYWUUsWYFoRGMWT3xH6EPuq4EUCJ1NR8YmL3vFkRnkD7aJSH",
  "key17": "5ovgRBhwG84ah3eEevfAXGYVDcsmGHLcNZW6CqJ8z5DZ8cDpv1E4jKYQq7MSS9aLDdiD18HExikehW829vnmTPRc",
  "key18": "yduFdFjbNghbKCZSks98QebHvd5QAkHSnanCCBPce6hSWY5YVutae1SEFWEoCNorbcQTb4mebcdAsYRtz52s33C",
  "key19": "3Du4Ez3eV1tAVXVdo9LbiuRKPkcWKDTDa6nu38rc3y4R27K9SdGK5Gt2hTmHHVauL2HWKCafEvkdTi1NHvFPreZt",
  "key20": "4oeThgkiLre9AAvKAQaZEV6EHNz7GhPg1N2FYGE5U1oqY9HsGNA8nnnwxZVutNy7yggxvRenGb57HheK2wBnPrWS",
  "key21": "4ufqHodFkq1MSDyMFoqRVxfoHKxuKM7T2z6yYfQYPFR6cEkLQ5ZB1qTrj4wLaiHbCWCNdgngtELs9T5LhfaBFKCd",
  "key22": "2u4yVgXX7zB785LfJgprqCqokQDJ4vXvE5Z5CYKr1PmYQTTVE7eSZaHNK6TEMGqpu1u7ZHqn4zugteqdrx8yDtVv",
  "key23": "mzhBw3brkWbwkxjNcZ15BM2sZPGKifs4J7N7TMSivAgVjNFYMaZXu7nyB5oGxRoPQW8dyVd94rSJ7q9FXGB8DT8",
  "key24": "4SKpZ7aryWtMr4SaTu7PZRUm5jpePFeir2AUAtpQEnh9DRJ75tfM3iEdQCECX1tG4QAEn7zrRcG2pZHhV5qyGU6Q",
  "key25": "2KMwJViyL13SFq29Yu7TsYmd8jbM5DMN4XhUzcSP1WVTanR23ossgoDXcnRVdDpCgm5kjSTj9A4kJNcewTXJnu7K",
  "key26": "eTvairo4ePJriD3fdi3DXR95WfD1u767SWzs7sraQ9B4YN8WTTfsAK78qLHrui3vi2RerYV7RU3AtMApeKnx7jw"
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
