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
    "Ac1n86t9x8MNdoocXR7toRVckk4MCEnEsZTWtYECZx2rvbCu3xM5pzP1NmdmbkD8JYUCuvGKrBrXEPFC8wRmDrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eN6FFKDiV2TM7e395DBbbkZREc2xgrdhUtRwLtbDBEXz4NZ4cxCfjAUzpF9KkpMmc9rDCjGtJ8PQgvW52djJjAz",
  "key1": "2WFucQvGMDArAmdEBpFo7XqobwJwjzsTfuSHa7BwBYAFFFZww45UyfjSaouF5uwE7ZAigjTkV7CiAwkud7gXnDJJ",
  "key2": "2hBhim3VqakmBZJhQcYydmZZaTBJB7HDtaG2FgSYqcJnT16q2SfMyWsBZy5eV6SDWHcimXR4xi32RTQvDx1qhzXi",
  "key3": "4AYSPFrSiyoZqJewAxCC94QZKLriQaJXgi6r3eVniMua2Wi4U2NMxvJRVxEkpcrQy1fXc2hhTnN3HGgeo1FiZLBY",
  "key4": "3MewuLZWhxMhW2ySHhFy1JVU7X1VqnHEi1gK34no36oCw68ZYSwefNkgx6rXKWvJF3Zk2h5e2pF6epaMcuxuysLH",
  "key5": "5fcwJNJ7L1TDx6zo17HCX8bokwZpadLvMdxLvuaHNEHNquy6iCtzfX43ji5urLyqr2PvU8CrMhQzHrFMiViJtfnx",
  "key6": "4x6sdcCFnV3mDgriqCWv512eTCGDXHxadRifEi5pb44LC7qufZTVyuPAVHuHVrtCXxcuREU3bHDncLsGf4eQFaSo",
  "key7": "4PbGaETBAXbBw48cjGuoR7SjFUXpv4K6W1NeJDoBirp4w4WqPEAjN7qRNVyLUVHD7UJJZaCF7Lgrmb7KTb4bTaPq",
  "key8": "24sYJmA2gTQkLNXjBgNuqAJq5wtAUQjKXmUJpajbcH3QQxAfoXnZMkQqAV72b3ZrSbpnikqGqaBbtzwa7q1NrUdL",
  "key9": "qRUELFXNEG5KfksDJaJdPUUxgsbYBjC8szoPn9tWt7MwBHgQtvQwuRTqf1TCNozMMryVCS4PNXeq7heUBo2wTKF",
  "key10": "2JPDEhRo6UHP98TriVdoJggGK4z8LiJoTgvGjDRUoriiJwUbWKFovfDY1GcCh5daYnhKXtqwohCZo8PmncSTP6Zx",
  "key11": "dpXnzvQgCSPzBG8e5w37YFR77BZU1kqxVJeoikozqwUe64JjQQvqUo5D3e3m8DFpCwsC9KyVqvkSbY1LK1Uz8bX",
  "key12": "3YVozVGogqVC4zNhmQnjoZwVNzGqKxMF4iFGdTWWFNo2dV53iWwnKonkLkpLWpao3dcAePcKagvSaLZP7tCRGBSX",
  "key13": "KiNAip6tPewVdbu1x1YNv93pLFZz5LWma8mgFUw9oBg2aCFFqhqMArttRTu9BwTkZ8v4XHMxrokoLPbMXjHGxZa",
  "key14": "4sS5KtZuFxeCkK5817YbbwnfyH7Z8ZvhJS3Th4H1QuEXsSE3j8Zt34TvyZweTdzbA4zSHCAhJasatTyHJVTxsUzM",
  "key15": "2D7qjCh4Z9HeyDmemJhdGcjm6gwc45c1xTpX5jGYPNKB6tNQKeCQ3ZQv5YtWuNFSymgMJCztA5tL2YhBoHazgW66",
  "key16": "tpijPosSEL2yFmBtBT1K12BYQ1QprQaxKkCzRPBzCRCQGvmZVa6WzuTWgUBvJCAjR4JaMehg6imgF3pdM4aAELK",
  "key17": "5iPG137WxT1tEWeYEfrEisRPmgQaQGZHr4skos5FKe2hc3Qog48guFkzMQ22DR7UPPTRJcXAhFo9TRAXVAt26rb4",
  "key18": "5Bpvjtq1CxTwKNK73KEtN7cmwhT5itDXAWvWps7gKZebfjyH81GcJ7mcKTCJssP75ZMtQEk7CjSPanMnVvp2tjiP",
  "key19": "5HnSVD9fqeiQ9evomKAfQAj21zs4iAaPAkAVbubgd8Ain89ueNRu7AZU9RCEtG4km3qmwLjwxJ2QGyRGzS9DR1TW",
  "key20": "3AFRYe7ZsihtKWZpMX4TkMHnRmmKyZAm2whDCjkoQLBJ8Qx4Yf4pbtjaim3NPnTHjSQK2am6LtZgCfscwPEYnXjJ",
  "key21": "38Dp6hYAXvuMemXPXseeo4gPNMC82gzXwBbc6pUgr1GjowsszNrpWfyma472N1i4BBAe8mFXo3UazkFjQhe4q7kj",
  "key22": "64qqgtxNyrRc4BD9CSQ5cgkgZez1FT43hBdeKcobhBKnNZy3wCcXrRCQkU6Eifd92Hs2mfSyXJ6yc89oMbhNwggs",
  "key23": "5fo42uNcT9iJQokMFrKQUk83EL7NwBwsKW4oNGuwqYQD3EfDbYMh9Gn7SQaGjSzy87LN3DKhNmqaadp2JJYSQQji",
  "key24": "3TYbaYVRhdarNahnNFXiUb9tN75jPfNUp42JoRRsPBW6ajkmVJjYjgADa36uM5XZUgzV9nmKHbJhDWgzTtRHAUYj",
  "key25": "62KYS8qAwRBerLeiBR7iA4hkZsdibzjY74YuHrW513PwtcnHKWpZh7BQR54c4sUkfpeekx1XvVtTtQwkqqSDALXX",
  "key26": "5K58sQZxBvibzQCuVHwFWMcaHvZawiqFsazHXRzPZEj8NnvSUj4v92oKnhhPRQ8Ug5oSStb1P8TiUNJjEJxnDm3B"
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
