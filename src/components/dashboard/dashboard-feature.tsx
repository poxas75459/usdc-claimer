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
    "53DxhhPDRscUzPcNiWnnKrDb4DLiZM2pPuenGv4WTYcshLiCU53EnCiEbjMQ2ixAGc44SCaZ1iEeR5ixNS6R9P2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o888jvakubKTVZc7RhDGwvKesEfMFye3v7tArjFhceZg6w9Kb8GkCtVW67PQ8mtgHHPUbSnS3ZqbwNgNWmooTVb",
  "key1": "65nS4ysdGX3fQ3bQQNrsQok5qq7ySGSChVchCKsaFwi5NJC59nZE3jewwcdjaoSzHFTEcFTTVTHJpE7ZpgpSnbbU",
  "key2": "2CFjkLgviYZe7Wq1sKBEKDGp543oW2PGpAhwhd4Ee6bR8eEFLN4pFC2sdZaHv3oXtjnsHCpHXLMQCnyGEeAXs9Vr",
  "key3": "3sE33oTDcFVogxCTwvLobpG7PS9ML7FizNPFWSDtpVPBGhydKLo2SpAaShbAcGQkJobQMQFxqVAtPdP3LuMZ3jym",
  "key4": "56GX8k8q37LsessEf3rwxFQDWjwAuttzJRN5xJqFVeGLhWphU5RpsJ9CWjVvKzxuGizEefsbEy5NbyDJy2MEQcZx",
  "key5": "29qMreU5WhXPveg7JL7izUjmvWRP5Rj7eWEjF5rgNreKU2jWY6M9FyDr7P2WqsKSYXBBmQ4XAAS8AsECMQ3T3EbY",
  "key6": "22oSXDXLwYJF6hEcweaGLSBBy9nS68J5iNK8CYpoo4stWNgkoGECef5PHXSD3CnEpBuvXP861SVXgXPDTyoZakSP",
  "key7": "3RatrnoAyTWai13mNqgcu1CVUaXyw7TCCoR8UBLu7EkdBT2pwv3r3xSNnTAfVELkoUt8AZG4Lobp4djLqc1dVpoz",
  "key8": "5Fq5Niimf7e67J3cEHqZ12tEdsdcfrrNUWYJ2Z2bbbVSbimCZ5HRKm347jqjdvE5qqreCW9YhsYTQYpt326mDSEf",
  "key9": "4gjfNdCVWwQMVwRYefnaGhXb8Uw4LRMvYhCwGq3rfuA4CkL9qZArA3KawtVA4e3cWqxJBG5noAZiqX769KebKrXX",
  "key10": "5qtCGpGKZu5LvPMjqy1ZJUQNgmPaZuCSj8k98jyfZTVpdCYKXTq7JSTAzd6JnXdxhbFTUBGK7vzwGQcJdhcBwqqP",
  "key11": "4gVmSRTytuffFzRWvDc7SQDuQ8h7aWU4GAo48QiCrdXc6RP5KnqDMtAPLgajYfSZ1nw1eFqvbKGtJpbmMdeQCJ3D",
  "key12": "3Ttmzrs3LxfRkTAN3aXYFuiTuxRGvnnfQkvKsdCaenD2VkAVqhN1JwTBzrqCcD1mtpk9CLZikfrm9HuAJA6155oi",
  "key13": "3bDj1p72weoDEZceEakNhJSEFzZtcCx6uQygHQy2Ud6NrUjrx4B7d7xCR5YeqJFSMg9dyXPdVBsWLdLjdwt3161G",
  "key14": "3eHsZCQDr12mvfJ8sbVa98vkK7PGHrqnKWBA9dRNcGem3AnabtWLgb6EqEkJaUmjFayTi7FNFrZKuAk8Z2pjwr9E",
  "key15": "2Gos4TxU1WQNJeuCJjRLXKWRpwCU7KKHuRoj1qCbdX5SxtM9Ck1KcpeDV8tp8A9KUgymW9HxpfakRpKstKcm8WA4",
  "key16": "5SQggGtd5NcYrh63vVhegWNLtzHeDw2zaGXkLW8KEF4kyr9JgtY325arifsAeuBGXeyo6Xj3ZVpqjjd27684G2nn",
  "key17": "oCXFsbqjLWoGGqRRNmb7Woe8BKvAEXeA6w1w1auvBeWtUsBJnNnHoQv6VEmVhLQFTVywg54qmiDQcA37MW3dPJL",
  "key18": "3MwujEByF3u8v8WSV77F7M6vZmRHoz3kNNhQcNbd1TXW1CRxGj5n1g2HH8jDwyv57VHZZVxEaNZF83JRjEDAoM6c",
  "key19": "2zwzWjqEesWfWgSUqFCNPsEfbM9hNNu6x4BneBQJC6oXXV7J8ATYdaZPKCTWtK4RpsL3kaTjqnms7XkTpsQYN3uT",
  "key20": "5bXT9CZe4JgRCA1dHxRh9eDYYMT4gUzn4M6Nryzy4hLp9bh88XoxfqaAtE97tR7o4WpwFreN2x74ZafciRGtjZ5i",
  "key21": "4BkJrEiycUTeah2Q8mkagDYpJnG24rL4reZTcw775oazwZKGVQr3X1LE8CrH8n3DczQb3xbZEN43LoDMjVDfHByc",
  "key22": "uYgZzwGYb2oypdXBXUj3oTeUEiw9QxYLG8ongiPqYNcTnwZ1QSQEFdfnFGw8Ya3yjrqiRB5uUUg1t2L6wfnFegc",
  "key23": "hqZ8tjVT6Lgifs9k9zNEzKecdsSGfq9z5MnkJzN3SDaRCAbZ3SKte36NeyQ2NFY1nkYdh8htJ8nQno9zhfYceqd",
  "key24": "4QZTqv7FiD3rJm2134i82eRNBCAURDZMGTFgoQw9PQvtTpBs3nN2fZBwWNbSKy7SZU2yyeMkF9Hm4WEytikmsrFT",
  "key25": "62mGP77gZZdFuQefqGXCjaZ18na6Pmk9r5bP8cqhsRVa11guKGXQJqiAGQrP5EzpfxgyhTXhYQ1dsqDppVMGFUXH",
  "key26": "2QxGwV2UueCJHGT9Rt8XNcQHgQxx9DERnPxXgyibfDgxk1cGKvqMWttQELaj9S9xLzLM3dEk9x6NKwXQA5TjQ5iE",
  "key27": "2v1ydPg3NqNdDQ19i5rHPrk2b3dzJCWC7mNbzYRuAy1uRGC9Zq9erAU1uUx7NtGuJ69bWbQ78TQ4JuhGX7FN4S3p",
  "key28": "2QemkSkE6QkbGEwy4fCqrYBwRHygh4jENGFqzFiav2ouaSxE4gPx9G1AaJnqFxrc7n5e8C1WfRuEoSd2L1fAjEAi",
  "key29": "2qV9t4g55dNAbkwGwU1otnLMYkZFvLFfYepHs1DDDxZyUuiJmV3Q3TUFX3ViB6cBnJVLk3din53tQeMUStmwiJw1"
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
