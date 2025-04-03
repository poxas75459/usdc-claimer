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
    "3kGieoCruMdJjoTKjocJiQDfLo44KU5eDSeDXPxQdwAbuMgRVTvNSoLCTYcjherCiSdCLbKKh6d2xRFxaMv6zK8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WgctuytWg8B5B3Bfkk7P3ThQBU56vxv69VCfCVP1X4Qdk1aC2XS1A4a5ygVfTX99waC7d2viqvGyGzm29hdfE8X",
  "key1": "2f3G4zWmF2eSnw2UAARmWhgYU3WYWxCmkmwRCjLzWPtpiCT2feuHWZFUShmKxxQnB46oJ3pwxRDnv9rvE1d8Vb2H",
  "key2": "2zni1EHnWEE59sbcSncqRkCU7qsRW1zTj5JNX4TM2s3aNywqPHAKTbwM8xf1pEM8tx8pb6Ni3nmQ6c4CAtP2r2bE",
  "key3": "55zgayCp1NqGodZUkhK2v8qhrAzhX7nd475JcopnqGsKGvtAXhMVw51sRdvT5Y453QWAABqohNtqJab6RZJFQn84",
  "key4": "95oZwRb2JSj5zWUYC6XbiVxyr2qwT7TZAKAZqPMi3mgpkkixgpzd8rp9gMWrZkYNAmwpp7PrB44Km1CSMNww3BX",
  "key5": "2WfhBnEDQsdktPHVr4fCyg66aeKLfHFB6iDbM4GQCMuaSoQmJWEjRasVG6cenRUGYaJekAzNbdUwp8rmmcpc7cZ6",
  "key6": "3gFJDdyZCgnaLjPHDRrKJ2YhrfxqdqWFQSvE8vDgSuECCKsBMpPg2S6V4mhLEVELAj5fDx7easp3iPWDXSZ3dUxm",
  "key7": "3FapUXCCPvTiSBYHdqyereRpTvZ2pesYBswEdF9QvamwFnF91C39MGwzKsKkVhodq2NCkfRQVxv2MezTHBJ6VcXa",
  "key8": "3BobuAwkpTgP4Keqno7vLduWAXKEqTugauHXXBRqeF7vP8BcQmFKvsQUfPvoWPUqHUZcDk3QExe32nAkzyAXQuTa",
  "key9": "op8Y72BVXHTEHo9cbWgDruKEC2RimnipExZuJxuDPLFMVQQoKHRz3FeYx18nKoEPicdJYRBfyeBT4cvVYTBjo9x",
  "key10": "byiig5dZacZbVXz73DnchuiKAoS1mxVoRsbFQjuLkoEfPMvi1fuq3AApzMx59aatRbrnVUDNsnsPbQ6knpqhw5E",
  "key11": "618vFaBoNxuutwjtbzwb9ZTp7X1Q5ho2nj7aCm4mKn8htBxj7tRgK5DfpSZVneUabAuC3Z4J19HzEW3pw2JigF71",
  "key12": "5sXPKRQKtgGmDbqFmZabvofBEEzPtK2AEbHai74BB5GB2wqWfkaBCerCwrUMrPsXZjeQ5ycykemZ4f9dcMW4rD7b",
  "key13": "CYbHZeGqSpb4Gw7Un4vzgchJT4Nn3oTT1hDV4MakcRQ5HWRrk424Bi9wL89dBAcPVUNyfqJue7wjxiuHPkGEgF4",
  "key14": "59qaujigKiL7a9eSZVHfJQtNg1jqTCJCD8ju5bDNg15kXF9pmFgytjzWLNcCm2xULTf2W34JeMiYHsqD5aneejFf",
  "key15": "5Yy9gmxiK3E3XGXNSBt1FDrXFQpGw1QgRw3YaY92fex4So8PuXdUM3RzXdxXbK2tX6NRUNhugkVxebtDaYhHCBu1",
  "key16": "4sD1HshTyZCV1bbKhmG8ASD2uKBz9HG83oNeaqZNpyfpLUnZFavzpAmZ1Xjnv68kcW8kfh3Ed8J1PyXMrM96ChVQ",
  "key17": "5pxcNwvtDnUwVtiAauWW2i1NP8evnWe4CjzTjnJDR7iQahVw9rYrXQkEVi6u3QBiwJH1nJ2Cw65yW3eaBxR3F5Hk",
  "key18": "XYm8p6hVuyAbheB2CBC75ZGKDDYodmnkcEqf9PtgtgiXAfspsynLFtrEqVjZH5CjFcFUaJ1AQpuPgbfGsea9FP8",
  "key19": "4mnY7yY9uNJjqEb9ucdtQASDd8svHwHQwW6keeL2qo2fp3EgLfRNPifXpLocDgrXaGBJ9pRpxG9C979yiRWJeTSP",
  "key20": "RTw5EUciD1RbhZTm5s36kJ9ynGKLKSHX1gzmt8fahkxpETwwW37HnDmianFMSTmt6JUrWHT3a6WLwCc99U2ttkr",
  "key21": "52o9X8DLgE5k8edWCZTijWkviUSScLyTM48qEMWiyBZKaoe8Gg6nfxZLrDuZTR1FiUXakeerMWGvebPfQm3yc6nD",
  "key22": "61VKYwQF1aTYFxhfEZsRwTV3YwWaMXUwG7tStyZqQ98Uj1dT4AaVN186UYw2eJXN8tYS21bqZwGkawMPpczik4Ja",
  "key23": "2B4W3AR1jh4UR53tFCppsW3eeX16eC4gYGi1czzjTnHqapEtDFG3UCjjVZhPmAHogEdvAnh79SpaRR1xUDmq3NEo",
  "key24": "5C8a9eadmDDPk5uUBUmXCA9g9PFgr6s1PoWr1TgCd45Gh3pH8Upt5jtXrCUqC5gY41SXWQbiApRwUYxX8Dykq6sg",
  "key25": "2d5vRTTkv9XkYhsp2rJKG4x5pRV4XAfKY6hPBtQLxFGXyazfPg3NTrj6qDW78SnAotiuGpZHCTdDf1DtGeqEBnkJ",
  "key26": "4hbNTcFFoxrAzwb3hnbk2gKzfbRfTD8TsFYLf5cXgVuBHxmyD65BNam7LkDGTyPR3Q6XSPYG6FUwMiwNqmnb5ZGC",
  "key27": "4ZBCYnUA6QcFZ4bAiA9NdqWEncvPM1SF75u5LfMbocf6TrDqoYZHcUsH4VvYyvAxG29h53sfZpz67eKVr436XSc3",
  "key28": "5Ck8TbTnBNpqCPeEJ2QUyLm4Y1yLqtqijkLiVxN99Jk4PTHWGeKeXWdsEThyg6dLAervBACVp1T5vJs4qHXymSZ9"
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
