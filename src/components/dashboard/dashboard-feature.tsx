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
    "52h8pmUdjYDzL8hKc4SEEMyQpX1KzBVZdsktrbuNPytxzkXFDqEYmM8HTLDCEfQmB4q9L1ZiEz3GVm5GcqUdTBoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CEQNpD5NG9LEAAfjLEw4nVvZZWezdEocmPZ2kcvZCmoYJP1DdwzLcj8NcSTE1hbcQ97vJxd9za57YZecqppvnye",
  "key1": "49R4jynXCTeoQZUaYyWyr1rvjzP1QvkQD4a2Dq54YxGy5m3i4r9YyLo1SfpTytq1rNVLHH4azqhWBf3My7jEdqP",
  "key2": "4Mm9rYhUJvFS8BbNHU1a9EaDmWDn1uzyj7SMGjCCiPiVNzQPjd3dYcBURDVzEH9RSSxHXNyK1skw8cpY8Mr6Fxan",
  "key3": "4qfAh2GNEm8519aYvqLTfYEW6sYvs5c4ngJToNKVRzMCGohKLHwAUQSgH37x6wPvJ1zLEqSwYxwMvA8Wj7Soq8yY",
  "key4": "3rFXwTQZK6mGs8F64nLLPPtAUJCJua8dLE3mA3E1Cb4Te3ok36iCbJHroooq5Z8AFe7MrNmaA9VckMqd5Qr3pk4W",
  "key5": "pa2RAz4crpse2nkrbD3HN8Y89fi7PggQgYe2U2rU59gudd8wbSwCzPD9Ud4JY3B3dT3QWiZJFusVkN9h9kEGZ3C",
  "key6": "5BqxLDDeoTfiDHhbtHB8E9hkNUix9JDaLaEAcBWNX1XsMNvxbadY9GBVExVdG3qxQbNa6mrxDe1tiGwosnqUdwK5",
  "key7": "xFAR1V9Kpt268VP95YddbdfDtuC1srxndEf8yY6RnHQ5QgSuVE9vQ4pJEAbKxCN6r6XGVMBMBZB8kUt3ajxNSyq",
  "key8": "2FE2KiMjerNwsQgxt1fjES3kZC3Ds9aLB8vrcunKPhDwWKFyPRXDLLEhCyYQYHv56RPtFxZKKw2rJsjbqGtmcH3L",
  "key9": "5vFdALDVo7Xv2wsLT1cwPvLuvhBuzDM5BzAEr1TdC1fLNx2KPS5zjvMtNn9JFPrvuynhSmirHwwwG7v4ZBMUcCXc",
  "key10": "4TYY6ZpQSduhAK9R46bFRuLARvXJ3n1nMdfRqpNBJMUeeXA5ySUkEtqM7L8BBNkjpQaL37KLUTg56kwz5FBVTp1E",
  "key11": "4nzobD1WdJ2JiEnsvokhCsSJnxxfMuzsXhfM3cEtWAqLSaZUssQZVPU33ELRxj7kPTpq6oKHRtG5e83nhikxpn3W",
  "key12": "4ya9qT19D4ge5o3tMroLG8rpbohexSk4JoBBjq31WUfTv1hAnYoP9pfhVaFHKCpa56NtWBUVShhYH5p1koLJym3x",
  "key13": "5YJBNZxWPwEvDRdudHqTC3qj6BAWwZU1VsM1eFaSj9bfKpqSgq6psrhczjcT7eZHV42XPACWNhpJaovPvacyzDVK",
  "key14": "3EfQPnnMDQ4Yhg9i4hyyoXibXWgGj1kTm3C5CurYTqTjF3LwC4SPCR7YTXYZmpJVjRyGhxjVmzswEeJ1fD585xKD",
  "key15": "2M18pntbh3f2YQLvYdHWUf17YvwpCmkV2ELLUpaPKNJwiuWnrP9KqRh7Gjv5xgGTrr78y41bVeKdLmVAcZM38unA",
  "key16": "4TTvuka52RDzxJqXQkBDn3rpubiy7sm18pWnBYKoEtjTbcNwLCKjgQygjSMiVUYeiyYXW1xgMnV77hL4qwqpydTM",
  "key17": "5YTHU9qHCbxpq4Vzn5S1EgKqUE9JAZtMEjcM6UWxTytVKjFuMWoRNnDhtEEUSettMyE1xAa8swYYqCLURBafru62",
  "key18": "4niWS6uLNS3qVe4FPqTSGA2v2BtxehNdUnNEFECb368Q32jpTD8nYDwmcjTkevGTFgvdK7UDYtSZghW1dTqsDAdN",
  "key19": "3AxmCDJAJ7R87rB34HyobzWgtd6q98UrgUxcv5JVPQDDAs8ce596U79k8cEMJzGK9YyRxdKXA3Vzd7yGzWiYNsCT",
  "key20": "3SopTtFyGqB3TAMyycyRMvD7pghajXjkDoGMNMuagvDAtjRscRXouS2UdZrHkWSw4CEAjeZd6A3y1tu1rUWcQTt9",
  "key21": "3wTisv5z1rRLeYVqYwBTeuspBpv4YRGXX3xcW4bhDrFK6B2vjnWf52v1FrhKBEXfpcFxfprEkn4Bz1dnU7b2rKp1",
  "key22": "5ZQkH2eGDQYfTFxXPy2auAr2sdAWX6RGi2JC21VPHkSKE9evXo8UAsG81v1CLT9vSLZi2bR3MNBFzvmUv9EiBsmy",
  "key23": "21rTu8JiyRCkefWxAz6wjg7TM6fPwdrk5d7XoAhLZrvNpp6dTGMM35ctuUr68gchKB6MAA2StvC5eEJh4225meXJ",
  "key24": "3FJiBLQwfFuPeuTGGcf4gLLPqZBi9UKVxvNxPkPPXia5PfAZcbKMGi8VZGtwhBUcFMnidKNsSsFcWWHvLrucGYJq",
  "key25": "3rxEwFcy8tuGdyG1ZAq9tb3oLYB2dZLg8pbtRf7VGc8crhnmHn92kgXs32zaHB68y2BZPeZpTxxHigJxyqhg8e13",
  "key26": "FP62a4JLnBsH2hieUAkhBcCoXS6fYxwJM966vaGGXsHfuT8EpgtEjyD1RYzHo2i4PkhXCtR5qAwE3TfiNDsFYTS",
  "key27": "3LiuuJBfCtX4HbomNnt4PUjV1BmjVpeTVZ6vNGNRVQQbGU5LyyZqhow2qMPSBsnr1rWu75Mi4YBd4bH4acPkeyqR",
  "key28": "3o8x564EyWBNotpXU82QV11D7mwfTTtniVnSUmSwBRki588ASDWGxwA9sVnfVNZ6irwe7qSkRvwJipTd8FopYh9u",
  "key29": "2WqcePTogUQhBx3PQNwJqvCXDEsoW9yuKGwkYNUY9BXXMVD9N2ww32MHPxJzqfcrYWzVfCNHm1Jv3ndDqbWZnFhj",
  "key30": "32R6LwWzuLe5ZyFzaDPNuzu1PpzKdQbrKFnDLG1jDJ7TCcMS5cZwyS1GknHdUPbHfv8r2W5WsGWW1kiifiKr2ZxF",
  "key31": "4TB762tMsaYAe75L2inq5vhyTWyceTtqaoakqhF9aPtHL62MnSH3idjrVrSvLQQq3bCRxhRNt5B94KXGg32geiAS",
  "key32": "44xkoyCfzUWETiMs7vqL9vV1ccEjNzHkhc2rYsAjcXkeqKTFPLAHQajWhKSy1cEdi8dVQSTYeNLVUaVzXFzskamb",
  "key33": "2LXxnTRptKfb4XAjNwfdyqMgB745BXAS7S3yUt9VVq8sUPxc86uMS9eoKHc1EqMLU8DatJwhW8Jtdsq26eq5VbsY",
  "key34": "5t3oQgmYJxEhhwGVAB4QyyiTvoBuXgAQ9BVrTtJ9imG1K55jcSzuPfnb8mbmTPUevFvgpeGhPZSX2Sx4m5gqUPXo",
  "key35": "4uUFfQ6nJoHZsHB1LjbgHPeUz7kjwktM2m86iCjRgwgsYHy1GjCyd3BXy1utoQEZAFpmnzP918g34BFqQPb3FXQW",
  "key36": "52PwZnpetFXkCdtn43U2xEoSRReJCh6fzbP7xP5gx3gkJyBgu43rC1ZMkNHFJWGkKYe7wSyUc3rLtjKiEKaunZoL",
  "key37": "EaNFKWpiDuyYzCy7gexCEoNHThLyXxK3VfM8K5VSW8pWVsGGZYKwyyQJEFG3ViwxJigJ7HV41JwqoKb1ciEk3en"
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
