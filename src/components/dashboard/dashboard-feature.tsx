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
    "4GnskPmE715vFzqgLSA7VR6FXanH1v7g1K5SLDU5ovhQSsyhyrJRD7vJ54v2Hjxr53i7MvjZGBSBLRzRKoDZ3E6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5peuTzaYu8URjyGcGRtqVvuZkndEh5rYimEuDkyr89kWLmy64yPzTRVbv4oBmHvgETasCr6HGNQy3WypACbtW12p",
  "key1": "4Uk5iqcDCrqJ2xYyDnAYedSGNLz7fnjvAd5SMJhHXoUyVSQWmY41n8C9hXj9bixx19ZxNyTmU4dTUYgC9WCVxT85",
  "key2": "3K5yhPwL9xhmf1yguF82xDeCgSwcCgRSM2wa85rsf4uuMMbV2W2mbziQDrzfs5ZhJorpjJdztWpb5N7F4vGinaTT",
  "key3": "4dijmrbx17NVhK6MSi186Kcpz3xfSRssN1qA6yWoWf5dR1Y35ziGjx7dPpwbLgcpgdjsiJpn6N9vncLzEJ7yD2AP",
  "key4": "5FRLETbEfQ4NsFXVpoKdg2XaAiJQPyJ9AJgwCxzYfGAgyoz2f7aeKwwSy5mPTms3QTJxQ2ZBYpFLQu5W8t7YcUp5",
  "key5": "62vNBh7Zoej7qr2pgZjnW2cveqG9Qwu8SpGvQoFWNB4Muj9MvGuTc3dYo6Rw3DwkeMrEs3LcxzQP1LLVbynztFxv",
  "key6": "5ZSG2WGLxHs2ZCoH9gRy4x1C5KD2SiXe9JYUjx3RDoqAd1dZnsMTMXSRsqHS91RZwmjM6Qy1SUdwizEnZ9DEWrh",
  "key7": "4R6xx3kZuFyY9kXxo9s8LKEFop5egEuDdALGBwpUdiPFG5JpVfKhuGFzUeJVeUjGVKUcK3SpsjSy3eD7Zs2GuxWo",
  "key8": "XXbYd6CXsjC25UbNWDkgNAWKD42KkF8A4txrpsz77fqaQeQ94iivH4aWJEZ5UNEhxHR4h6dioQ2f95TusbwwSqZ",
  "key9": "478ScAr5Kz6kbs8W4RSn7H29kyFM3zkaiKpUmYjHjSRL7m6sNJX3GD1teK6qyj3Cr81Fo1Ek2tdGqkwCK18KvQ4D",
  "key10": "2mAs7Ns1rSbh9ztfYbeHRf48dXJm6hNHc1gEHjGThCty67JuuWEnW7BuEaLvht5GUeEvqWufhyupoHo3bHPGoUAa",
  "key11": "2WWKUPLj4SbJZykmVDL9FXZxFfm9wLFEASwkCcCBdYwFnvg8FHn1MEB69z6JgdZ7HM3YdowrNaMC7APR4zndgt1Y",
  "key12": "2CiUT5mxTtVeMufpm83uJiaSNsjGc63V8FYZrhf35n14Loncw7jTuyxsuuc6KwxGNtRDsNfp19V4X4YG8KYKoUGS",
  "key13": "suiyt7HHNYYJ7JJUHdV7f6sLnQ7QHYRPx5YSuDX3WNjesN629uXU6pqUX2Xfbw9ffPGDHACN2AosDEyw5NNERX3",
  "key14": "3EVDjrUf9cNhx7qtYqL9zF4kPLB2UD4f5qi1CXE1cg8C1dTCQDqW9GrZ1D5D2c6e9kqPVgGSTcMoS8wBeqf3LvkN",
  "key15": "5mFrzTbPcpGF8r4XVqfuPS6A7r4jcN7UmbRnM1t3V28TSCARiQjpCyzsFK2gdRXY7E7mFXGfStyYxw8cBAxvwjtF",
  "key16": "P6EPpqAWLoeEihLUCXErXxJotSG9zMP8zjoTw54iF61anMS8wfTK4txUfa3Grwq9DzsxejRav1njr7Nd9XEebRP",
  "key17": "2VrpEbK6c1vddattD5jYmvzGFGpNDny4LvbUMUjjviEryLcRcBApVzyYJMrKadJX33PZZ9GKRfxrWP1x46XkoMhT",
  "key18": "5X5NAP9Et5XT1bEDKHTZ44L9WDGAntUx1iHUru6egTLhEZVVnDh4c3YGQQapZV5Ldqhzx4Qk4DQXFGoR5DzAJpxp",
  "key19": "3bnXeSi9Uwu4wWqvhXnFoMQaVDBwDGAWWdakeFVvaVDCWLf2EdorWzTLa2PQVGzWcXDfTjcSUexRGxtG7PpMUbSe",
  "key20": "5ZVkJ98fx5ZS8W4CV3oKFuwgePLk1V8BG7wFFe6tfW2BSMuvLYrd7cmm5HTKNAUBYA3kRHAsBDw49ZD2b3fSo3r7",
  "key21": "51qtpvaED9g5XWfsVRvoBju8Hv6uYCE6maZgK83MdZpR9iHnrRSGGpzgbVUpgYQia9x9MXbYMCkLr9UJ8aBBSMVJ",
  "key22": "2ntHzodZVbax8Nj6TzcBEcynuk6m7UCFNMsznfXQeuwYYEFBkGTkaBbrj9p9zjdALprrR5dwQ9tvxnwqvCFPf1K1",
  "key23": "4WC9D6637TT7q6mKQwErqbyrdajZRR5pdKcX2FuNfeDzQMvnsgcFsPLf7nfxhLm4bxThjgje1qkCzjHVuBrmREGx",
  "key24": "2cjK1a6YoRNktnDM9qcdXodrQP8L1813zgLoXHthkgXx1Bjp2u3GXyXrLt9HZVLUUt9NrKpHcLXfFAzRxe1gqvZi",
  "key25": "4bpaFXRKgqi8FbXqWiMtFijeptkXCgR9iJeBddCxxpYMu7RaTuS3VsW5MnEDANQR8rg6iYccGXwDpWgG3na37AbH",
  "key26": "3wwDwkdS42MRHPXHwxxWvd2nk4VGa4Whjg49KAsw3FSRRvgf2evjf1ddETWqhkrDuuNaNB2hntG8Lbn5iRRTTjkb",
  "key27": "3SosyxTuwUuUdSMu4cwiBirAv9UADxicwJRBa1dHwhGM9gJkWLnR2Hc2W3p7468qzWbTRHPKQPsNgxdwFTZ7y9ss",
  "key28": "3H9DFEMowTdzaFVBt8PbfRTPnCeMKeEGXTUeqbb2WBfSUtabkLLukWyXxhP7XPi6tctMYJkJi6oLhhXUhWUAJZEe",
  "key29": "3iHL8HEo3iquRq3L5pGPjSqecqabPDT9FubM3Ge5Hw6QU9feyRRtLKuikkHWCJYCwVrjoy5rgmBcJ3vdRJBv5GAT",
  "key30": "9UvzMQec2hcGRwa2iScE9qRTJ6YamP345yZyTbz3zx1ZhM56XSGJsUR1JqfDVo7idzpFxDidEiA9LcVqQ3vrjis",
  "key31": "2NGx6QAD1xYKM9SiqFgcczWbvjjkqRKncsFrH4gsWY5NmAjhK45pvepD8gsgbyhAKFsRVFN4gmwWnNrBeNAPrtXA",
  "key32": "24kn1ESMnkn6hnYPmYZWey9tsMgBWXXQsjjvj8DMwnEHc7GuG93UhbwQKAH7L9HkpLurDdiTuzeCa7YvD1iFuszq",
  "key33": "5xQSQAZj5oBwc36eXru2WQ4eCnvunKgmwXru4hTSk7BpNcF3ZeBUjf9U97zTdRCEbbiVev9X8xT4fw8gfK5Vb2Ap",
  "key34": "9MBSc5HCZQJBi8N76K2kBiLTs9M4ZGEfmoqNPYGLjdsD9MTsVetQhcN93Uh6VYaG3rfxhZLrStkakSohYzUh3GM",
  "key35": "65x6NqPaXWnB9onK84TbTnmDj4i9FCU6kVq8VgDni32gzDcSf3F478wF4LhNHisw5mfThkxi8GQJkrJ2zEsZThN3",
  "key36": "znTjsKwudp1Ub6s3uqFkF4nypT8okb5n8bDHTeqjrpZPDs9JTNLSNzmH4L2xXF4oBM1SfzX333LL4PGXLdPYKe5",
  "key37": "53F5TDJhEeTtH3gYbsQLVsfQjSBvMc9sN1y7MHqjifvDHUxWbuSJk9PNEhEi7R1nFLuv4VwfzB5VFBeFptD3mK8K",
  "key38": "4FTVxg9MzpiwCPpi4buZwNxC9MG81eTVRu7XY8c2QVNjK5WhP9hmT7n3HzQigst3hGUp2ZjU4UBhw17UzrfETWa8",
  "key39": "5ZzeS9spVWPL2cPfXFkpHz1fJCbufVxTEDxGNtx2ASbBPNMtGS3ntF4FvaDemar8BUYoH13AH4e5riRamCNfKThj",
  "key40": "5Wa1xGDjPK6MZqx6oNA45Yo4jhcNhb91mAw1KjxHv5xGTKhcYE8qLPVcP4C8ZiP2vXWfaoQBZnJL2RcMqtqU4jZv",
  "key41": "5P3Tu7ZMd146oFLQ85CcLpbE3h9CFszNiz5NGBfTn8qJaL2bRiPNPAFheR4mY9oDF2iMkXbKvRjmjB5TjGjEHWgv",
  "key42": "5Mf9ijQBQUsr4nNd5LNY6rLeeJw782vDqWgfdigUcnP2Ru4vKhyYuDBqNHa1j9SXCtzSFU1rZNmTzB2CR55gjwvw",
  "key43": "5xVT3tH89sqbkXcoCm2FqkGJgF5kpRtWQjBqXaCNYtSioE5FQqSi2ymtrWv2xEPcqAmEbf6xqSdCrjzMKf3dvseg",
  "key44": "5zv9irQ7stoTJ7YohviKtGZ9Qd5vFSbtvk1LHbBhvassqZguPHjnS6rkYHCwBfz4na2eBmgqLQiDiYhUoaummXkD",
  "key45": "3ndXEq45kZ9hCm7cqm1yMdKRS9pELeWEnacBJsqtgs8SzuFrHpaQ9XxuikDbXVihWCg2icRkGLpC8FdXMuMXf16A",
  "key46": "33ZyvbGLoL91qH9oUJkkGHEx1xkdK7ar9cLDJZqJvjMSTGnGTJjACxprnb8PgUSBWhdy3aG95x65dYd3STCZxWaB",
  "key47": "4DsrhzJPKFT5g5EVpchr6Jk8RZa1ptg4Sir36HRPg3WRuQAYMpLf8oTMuAPd84FXpbQ3uh1h2g6PAhDG1ZodY6qM",
  "key48": "2PvgwDZjg21d3AmMQ4oBx4ZRkh9wEThhDpmTwzo4NFGw5Mkw5Uy7oXX9EsDCvyoejEhtrLcUCZu6ToBbA9a9c4aV",
  "key49": "292z7nUjVMMtAzGxhNoihUeVngKvBTc3E9Y8LwCdR7FaFx1vAEyGdFoD5XFpdeG8YbSs7yfgmZ6S1vo2MnGe1GYm"
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
