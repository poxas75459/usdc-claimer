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
    "2w5hZjdFwkjWGGsscD67iG2aob9DRimnJTsQjgLzMRQPJLN5EFSS1A91pDbgyF7gsSbpddtKY4rWrA3bvbStT7iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjUqkoNayx4RBFaCgHU8fBxLdDJ4JUV3NUCVYYHkXXrjRmKMf598VWPVv8uxLcq49BLSgZ9t2B7ThdgnqHfGLBj",
  "key1": "3JP4G28uAYKYEkW7mDBnchDLmZgg8vd17yAW3FtbTjWzarjaX6Y2V2feXX2eUoKmkZEGvviap6iHGQmDd3h8D73k",
  "key2": "5nEmmnW9Wi57oDBXfY9yP4f8j31WX7J8yYzUanZf2WcsRXJR9MJneChiGTJeZPxtR3KVWHfs3vDgeeZqXFWnwnhA",
  "key3": "4MghBDxFWaYAWY6BfP7Exrkx2uKbupvEMoGa8ECjUYKDH3Vduzh54x32mKiHvkDXY5ctA9iC5xYDBtaoNEsGKGFB",
  "key4": "3YViRLa2LV2vTaoTvDXWT8vHWixCXdfA9DZYzKCsB2oFAoNzmE5399tAeyeuZUfXwKB2BYo4SmpsW75UpGmgYjE5",
  "key5": "3o2f3FS4mi1Tz5itAe3WkoRkCGhr4VhyorQhxgeBzyXxffjJy5EAJEUXTzGQQobGScaMoqLBjrG8tdyRjjXRpJNc",
  "key6": "3GapjTHfpS9jcPti2Y25hi6FjvSJLGHfFyqgPYNphd8GptFoWJkpYVqRjfgnwPgXTFwdoH1LiP2qajwF6Hgtj51H",
  "key7": "2Nf6vkN76xJXvStD2vTrejtNBmN16U2PAdEYvQCcK7TSGwmDRVUghFJeZ2sZaUn3Bev9jbt5DosYKXtouJ7MbrCX",
  "key8": "bNwnRppCotFENBGbmS3GJTEoByrjoSgMEtZfTbaiNWSi8Utqi9cAYLyqnvSsAFGrQmEoRcVeDQqVjyWAGkZxcpr",
  "key9": "5TopyYX245AqDSrJrfjm1GVrjZuR1RSaRAXYaReA7nC6NKmmyMQpeTKaGZ26hVN36NVVsj9eLChEuaTSFFvMEKuq",
  "key10": "2CcZwBLAsk1aDACWgfgRfjggFFvJQafT4bJ2X6LjKf6WCqfa9YEuj6rN5XZmv8rXcEosetJ3L9NoGPdGKX1VoRQd",
  "key11": "5tZMZ22a2o44LUcT5oM8buiHvRNLbiHSpuQ7gj2QouSbCiq3NGuyQRMrvB81tEePXjTBg6xSgMqnpkj2AHE1DJ58",
  "key12": "3i7Bb8CgXQpBraU9fkzKC9787doCBrjN7UDBBWiarp9cXsxrBkzVFC5358QKzz4J6NHB6TgPg5q2StoAEuDsKEfZ",
  "key13": "5xNbtCcXzLCW67uVewVgdpsB4DqUmdePZWdKDoS2GQj2sBuXXoq1Vp62raW7mcXQEHZTo2HX32xe77nv4CVhA5Sn",
  "key14": "4WLEw7zYShXCPG1qo7cG7T8nmSvHocJPU5A9ZNbKYywKDryGqRZ9pppud35wsHJT6NjtPkup2BuLDbNkTboqmMMc",
  "key15": "53gGwX1jQaS3tmzHFMXERrPtBWFpoCzpBvwa4M4GckCRgrZtpntFnL9nuE66asCorXhk7QeF3nMDfNhANT1TXYok",
  "key16": "4iJm7KkyxrZxPinyVWtawssvnvHvZgodmDPkqJ1aHAod24APqaEnG8N6xeaVUSD8cjxEApx5UELj6t8VN3UPzZ7m",
  "key17": "3tYSUZ2jot7fUhEFqLHDpzT4Ac9vXD159ELWqLgKYXWQA7JVGUDbcrsDmkC5NoH46SDaUFMwKtTJLqz53D9crmF3",
  "key18": "45BNa5V1hBwFF9SKbam74KmVJxirsXX759NZevqY2MG4Qa5CMSnxycnDHstrGyfjRwb2ChVYCoKRM4Ce3AK4ZK5Y",
  "key19": "4qB5aPZq3PMF7RHiqoqXsRpgquu3xmYjFnGNpfbeojztogd48bLrVCrkULyktSLFsjpSyY4tNdWNFa4L5xM7BeME",
  "key20": "4ZfvmTmc4ifDcVzJYtnGpgW7eAAZq9PkteYoxuM9vygvbZpzFzNxega3gG7gS6fntfxgxKFtgXBmFGCP7yjVDNr9",
  "key21": "s9sveVZi5JLBLE7uKibuCdWbjPhEFGjs8DxTiHBFLuYUZf5tZZ3fPepR7xbXNg6ApUFrWrzdy7Z7nFqSX2piWxr",
  "key22": "57nDWbsZk1xS23nurahsDQ6Q4R1FrmLvGWD9JjEsfwnGVUnawboF2FmgfqUbpvrfU3Hm3aU8VBu9V2EaENmS1viz",
  "key23": "3USb389LaiDLUDqHRcbb66mzWvpjtxtoa7vDuFifv7w357YuumWyk2nRiZqx37xmSHSwPoVSzqx7F7UxWFu1jK3S",
  "key24": "5s3SDWpfWFSrDryXZqQinEa7iM7PwnP97S52GPMZynWB4UCmW5HPresrwNBE5ypnN9s4mzU3bRkcrcvXEjWBMLGW",
  "key25": "2AvkJhCqqm5eMN2ncbsxuyWJ9CuN2WAstZgUx4HmX8p1c1CXYropmPQNXW7yLHUPXSKFwpRghTBFmSF4CRz1xqZH",
  "key26": "3nb8J8ztDEPz6zZxu2cYuxPnhK1Pj7uwrxc6n3qzNZ6AXCEHHKmt9d48BbevdgdCQYw5UuDTLNk87CRNEHhCwDMf",
  "key27": "Vc7F1w4B75qvGmMLriozDQBTCQLYmHvAmK72vqdXcS5cY4Z2gQyyfkS3yscAa786kcP61RjVD4iBLCH2EDTFUos",
  "key28": "Vm7xR3gWTAtZ1XJcsN5JuCZjbtQ8GoFjMeT6Mts8tWPHF8R4wrk3Empk5YR7FX4QifJag1TjZc93UyV1AcfzpNR",
  "key29": "5N8fyK89sAYuS1DvRL8JnJaZMp3NS5uwwmshjeCE4chmzfrJM7KeDM4QAJGbPGGMtnV3tQErB2tJ8UABTud9x5Dw",
  "key30": "2BiMdgFKX6Q2xroWsjKSgDZfajggVwZBrq6qc415HcWKQXGj5Q6MyLtBcrJjEQa9FjTS4Jt9ch6ZjTAPh1fxu2jM",
  "key31": "3QpyKFZreiF5FKHJSEVMY9zUhKYkhekEZzFsVj8L1zj2MWSMEwnhnSDkeZPZA7KRH3LCMQhreTkwNTdmPaDaaYoX",
  "key32": "45bypFYgwBAEnP3pmMLYbVXTn4gsHkgiNMWrPFSSdLtekZ76MULNdEFPCx1P1UiLweDi21HN1ZNRf71kakTLCz8j",
  "key33": "5ELcG2y9m3ooGaM9qjN6p5Yrm6Rn4A8RtaXjGFubPc5ohgFWriQ3kFgSZYSR3XZiCmRb4pptozvLijE4rhFFcALV",
  "key34": "3MSm2gN2iH1gGC59NfD8bjmXc73yg3hev4j1qaBLHrxiYR1WJ1aVwJDN19weDoEHZ8p96nkcpoNwWhuY4V3JJJ3q",
  "key35": "5wqrb4StKzgiQmJGunY8rK1CZR2zpjAQM86Svs4cnWHzMJtpdEjY7yipBvKiLAGpGowXiqQ2TqnRfykU7p8An2Nn",
  "key36": "35Cq4WC2gAr6aKSBPU9HEV7A1CMCkoE5zJGs51btkdvXo5RvSRJYcCFu64r2UU5sQQwk1mJMCo7ZWgFtHuAsffEk",
  "key37": "aEYgXHyvgsuZE7qPJXC5YrNyj8tgVB4wq3DR1NjLqyZf1Ho9HS9shqP22syVBGq2F4WyAHkCsUXPqNxGLDE5MYH",
  "key38": "2btbqDJutsfQFJrofUd1QpgRhCpo8koqwVP4a65g86ophEwNE6LfdSECh9xCaJCHbdm9U7myRTgrd1Z9vXdtQ2Cf",
  "key39": "4bEx89XMbiofWx4JKVYJoRdecWw8pm9YgKuEwniSs2v7xVkWT4XtKgUVpjTzFmeR6t5aDAKg8VABsu1cL1xDVMNf",
  "key40": "3CmBQkU3Joo4hj2TcCJc7HYDU853SVM3w3XxumwXcQeMhgy4Fsw7UHEPu4CE2tmhtwQt7xsEhn4vKLnUyjznPVhm",
  "key41": "2Y93mpXsTeWRdoneYASyMtH8gfGMjtQ9q4W8hLnZeqHrnwGpD6PLE8RmxHDUCNTLfpmMNnQWbSisXWpC2LRhSx4k",
  "key42": "5CR3RDycSPJDX6fJromVLRaa4pPYnve7WzXkabPkeSn6Wc4S3tV8JNHhzRp6ywQSpYLdj2zEo6zuU7ajjafspZKP",
  "key43": "4BWor1nPoJAGHraQJT2TTeaN9Aien773MEQZRFvryx4JHeRBAYhRUCZaNhK95vy35HXsSM89oEq7RJH9N3PFy8tG",
  "key44": "22Y98vMTyUrHojz5bFPnqJ2QQJDpQw9AGHe7YJ2ciuohPCHgnG8JBbQJJN4x6KxmFembftaRZfKk3aQoYHWmMWrV",
  "key45": "5z2d1Z2bjCXcHyAznzx1eAn8XetAuSi1CQPmGkEP7Xy5aUZSnonek7SM59FWtwcgWvfi2GHP8BXf6PsnpoJs5EAx"
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
