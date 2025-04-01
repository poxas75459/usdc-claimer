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
    "3L7SKf5pFJaZnyb5cWsT6JMA4Adzsv1ZkqZ5jhLPr7ejm8zNG66LNAXPcJQtwQqpKyQFHg4LwrzUN2WmwDNAnvFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tpaitu6uQmWRUoneB3dxm5EYAJ2FUSBhKfauXeFg6TqVZrTi5bjwNUgfwGS6sY5T9AACW4p8HHDPjqDAcqxCKbW",
  "key1": "2ZjcKJNLpP5ghgehR1cGeaqbdpKnw5vnhw1iJmqTjyyQZ7PsbCBp9dKnhjMSRFEQHJoAGfQaoK3rQ1RCsmwrMYwx",
  "key2": "2HrtmqFe9mYu2i8UH4trpYZd5YH4KA3tnwpAsjiG7hMxHWzXY4yeVAUFFmMPnMKczCfBbWMdj6XGoqa7tmHppUjL",
  "key3": "4R2DerGmpi7Y36cARZaKuYPh6gFjPpEFEjp74smWhZrmL297xWfBKzf3ybEUf1pKymamCpRWfZJn8Jr8K3DjrxNW",
  "key4": "3CZz2hNuh5N1vT42oTjNRmoPhUF7whsANkxASxwwpJiLHLHEdeqvbHY8Pw3Ryvg7KFXkECB2TFuHPXbJz3zA39JM",
  "key5": "2tEKuPeiCsjB97n9SM3NffLgTaeeWPXrP1SDc5TUGmR8eP21Yvcb9EjHtJLZXuo7WLRJJU24ZWd3DR3HVyUNni8U",
  "key6": "5SfKq4oxvDpCLQhiXHKAHgokayDxCeYNkvRuBN18UJFKDXzvHhwiobGLoDWKysGUiGwxrVveBVV79cZVwASEMTRh",
  "key7": "4ZaTY9RpmkEieFPyXmSa1UJPGiUoqY65UHtjeiLVurxxxGHGh7T3oGRFUnuVLRQqWT8rQTBnPBEobo5w2CMj6Kzb",
  "key8": "3CzcFkYMxvkLEDhdJaKbeYuCSTYMgGg6humhSuEkag8ji37jQSXDZP4YBjTBiPgfv4W5TKLnxLVUr7iND75baDZc",
  "key9": "5uiR3CYfnTswiCWMSg3KmQxjPf3JuaYsoQVR8WvY4FErHKhnYqRajqE8Wptenb6rXsbtX5KmC6ursfvtmgp5RVXr",
  "key10": "2fhXiRUzTaZKZk1Mf4D1BPaJmat9FEwKVXGx2DYTehvgRFydQj1f49VwFs7ynwTYj4PWPyRw6DzuVEpP6etnUuof",
  "key11": "5faQ7eMafEe4Uw5hZ8aidZNNnFXHnZbuUqVMMWv2Nmy7JXgFqmjbQkaZ6PASPtTnWUimonqaD2RHWv9FRDmB2LVa",
  "key12": "62Gq7qxXAS1S44y2M97XErUgQfcH254wF1sNWhCSVCcFAtRYSnzm35TcDjmjQw4zjKdGzFPLnVovVqghPusMhqim",
  "key13": "3MV6jqt4XVeghGbd5rceu6XL5QAwwgYKLaG2rSrCEStbKWgB4LyWiLCupK8iNUSFiR8yXQFwpmJd1ChbvfbHQwwp",
  "key14": "Gq8mnt9YaYuG6SU78rGqxaf5nRAoWJrdMUPPxZJEFG7xR8ujDQJ4dX1LSKngK3QcLU1WrUXFcJvb3dytMS6PiAZ",
  "key15": "3xMkcALE7Fg5eoZL8wpnYUVaZBVtm3DbDxCVgs4ch9uD76v13C4tWyi4efkyKELkDr8ik3UaXgmFavHNEkTg9joe",
  "key16": "46n5qKKjX6wdkyQ9n6SKLDhpUfr6kiCJrJNdkprTQYDXaagCjxBJESsAmCrwfhBoUW3TF5eBAQoGNi9zXB6W8hiS",
  "key17": "3pZAXi8Cea15CBxeZMi6fwo6QQ2ygsbDibsL8fWm8adBQNLEDw3pKB3AQNuPpNxxuhXJvGSNig9uJ9BKsAMuoFS4",
  "key18": "34CXJmVTzsHC5GibcW769WQDJaDcrxy33T4Jbh2M5v4hTyHnC4GbtY2LHfrDj1woRRzRSbzvxHC8ih34FwcsxH5W",
  "key19": "37yxkzosbaAg6g533kHdk7yu89KqHu4zNzCPbswgKsvp7WCFYnJHwbZmZgBAKiW8FSrcLUD3aikspgDmQUfgvih8",
  "key20": "5eDfHYJo8ci9ySonEzqHKN2HTSxZkziFvX3dCQtvwWd71CiiMW5TWMPUEwCiDutZT9BrTvN11VkbCiUDR4V7Nx7f",
  "key21": "EfhhU98zYeyPV8QPxapULVd4hPo36n6TMWTThEPQyUGjseNMcfkwSaGH6yT2RKjA1yn9bEbCe8aPAi49oZ9rGpS",
  "key22": "61CZnoQhfpvbrroGApgfJeA6byfPykC141SnXJrL247UgWyFeUgscCXSWhHLzPk7pVM5Rs5xKd7n8fVCD9JyJe7A",
  "key23": "35HSsGfUjb4AcoWrmwd3TyGCD2SgpGdz6t52MWhxRDF6jFXEBS68kzrb8MFwFqrQ7ssy5VCtVaY6DR4MPiLut3yh",
  "key24": "5PGTan4g7V7e6s5vjdUMD4SC52s8nRaeFYHSPn85uKu4BzoFLn4aVaZ2YGc7wankS46SPDULpGtQ22P2VzF4S1x6",
  "key25": "5AvhfLKukTHRzwWcCczu3NrvyeZLw8HPK2HtFyBUzytAufzY57QMqyxE9ReDJtVtKdgZN8hGrxToebzmjFf1JXzR",
  "key26": "3KJHnAW46yCjx6Ke7UkpyK184xvzRzBcuWhzbHUbQhufLT9SEQBnFeoFdySCFaMF8Nz7GJcqyrgBuNnBdAjsronK",
  "key27": "3rArMVB1embgTQt2f7B65PHDkjBvY5N9zRoYiyGRwS4H5Pa9DyNhVgeg2KNoxdiuKtBt4g3bp3aXtZWFvLoaVB17",
  "key28": "4ECf2Gm34ryKAMDknz8huQuGMqedyMu3ZxCrvBg8KuK6rgRcJmtn359hL2ZWMEXbrVFaFvhCqLoKiJBC4iysYC4P",
  "key29": "4sAAqhdBa1UX6DH9edugAUWZbc9o9evpCfi16pzavP473SUgdUrVDeZQ7FC3JXn9Ds1mxYXbLA7jM9fnfteSG9wa",
  "key30": "msSqQNaEKDbvVDNkZscjqEELzR3ZiGfJk3T3v5AxKDujGPrX253XgxDqTHgCfx1rWBd9ppPQ4U8Ayv7xRiqQmhv",
  "key31": "5tsvmzDsHEsy5CbF88vvCYqrTZh8mESwSttaeVgMHUxVgsjAkV4WtLYHDa1oM18VweEULfmvtnMNU5BebDXTtbnK",
  "key32": "4ctcj4tAeTA7hNY5cT2EQWeZi9BhhbY8N3HYA4ZVmYp4qKF4GDPFcMws5AHjCV9fFipXwT3kJhp5dtM2iVWNgK7D",
  "key33": "41nJDV8j8BxaaAPSH6qXmbWqjJ34pENrywRg1x7aEUX9L4Qnr7byYnt69Yp8i7oG2b4fCRdAJmqFsprvrDqZyVJh",
  "key34": "23GVuKLLzH5RzcfQQowSpKwqRDeXxbEXHjFarUisdTzrR123pQLEqTFPiZULWfrEwf1tLnC5ER8tv8cz9W7GkCwZ",
  "key35": "Sg9pxcHq8zDFSEYwBjh3d7MPoMYj4oHnDVmcaFEaN9SvJP869c7J5YL96GEaiY86fKSg9TfRnnY3BYdQeDU7VR9",
  "key36": "RFRWH7Sm8WKBcnYmigiCHbizCh5iiWnHWSyzxFCSWdJj9FN2icn4ZNjBZiZbpjvvdN4YshwCzFhkbX9G8npSvrF",
  "key37": "5mZn36QNSnqpbNLp5MZiNxteLVUqoizHVgEifUzEPKh6udfi5BaLGvS3R7hGztr61HyjWX4oy1amm7uigLTBuwu6"
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
