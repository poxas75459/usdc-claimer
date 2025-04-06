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
    "ieKsko56BYm28VA9Y9XKjKPqm5t6Vt3VHLjamhGLmbii9FobasmVPhJF4MfdCEH8Sw11UhzAYBjTvSgDMBTn64U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VEzMLA35RW7Cgofc6GnUNuCUqEeVjeRKo1ZxZiPCjYbJRpR7YcDgGN4tTDy8khAQoXkTMcZAgUAzy3pWotUJsLH",
  "key1": "39iAtbZktHbEzF1pqG59dzMh4G2rqWX4aLvbKbDZBZgruNDmuQVf6ejfxeZBf5No8QKjxdVyhvSpcJGw3hr6LewC",
  "key2": "2Y1AD5s6RgD8xyaRu8KLYJcdhFNPPh4HUk6uVjEFgvfMqGLb1UwD8r9cxK8xrFxngn6NjvAfdw8iqeQ3k7iLFxso",
  "key3": "3KALf5zkGWL4KrSC39qbzt7KGRCYeRCfANJAGFoRNNHiPK6LGtimLgZmmWcNHbnarVR6e9Pr5oKZ8VDHWNcJSNmh",
  "key4": "27FF8cJdSPAVjAPJHBJk1vNrPdKva7J8PanN2Yur6vjLW8cF2zeU6GZeoEzSj1MRPGWUJiy1qkyQ9gEcDo99Ha9s",
  "key5": "4UBGqiBdwbx1AiKsLhNKDdTePhLHsQGX4TcYSwUrfx9QFjGN4GcEyYxhkT1vJk5CZ2yFj4mbhLT27wSQtXE2sCyD",
  "key6": "2fxsWXJKPB2sAo7dvJxudzt9KRxdyLZUJVpuUHeiHTm4GcTJGEeP5UQAHHUWfTJHbgBo43jndpbUraxRJTdCHbqD",
  "key7": "5BMZcYXeMRkniawwVe7Z1JwB4njPJp9QCqpPxA1ZfPrHWQZZSiEKsudXyH8hHstpUGLbt5DfjyS4w3HWWz4g5vJQ",
  "key8": "2BrnySPBqFpbZMY7HrC7NspmSgtJszndfVrntJPJzFG36mqctNt5gf9J1X4uDKEgmc1eKGK1Mc6rDfcPC4ZzEqDc",
  "key9": "5cjLqk2gaNVKUVXahidQUjBUkss8i8YsCj1AzQNjEMG2dcgRctQvPD52jQNP8NPeiCx7ZeuyoWBovNJ1MH1Sj4on",
  "key10": "3aJG2akXtppa87qWz8eB9Ez8fTzF6p8fGpmebdssk7BAPkrGorK9cMiUsw1gD1Cidn3Ve4A11Dq82pY6nuBZXMqU",
  "key11": "4LRXberGy4WUqjshpdLRRTVvfNSQGLdQ3aBC65WS94zvSSBKrH66fAdfz8PiCKvxpvMZELaFf1csJC5LFfnFc8Ge",
  "key12": "hPcmJNNjv8cGvm6FBnaHk1hvtB9kEShT5F8Ynjg5JkUedzQGfMbC8PS7DjzwD7Ajj2LRWFN7adrvnW7xGyQPaqd",
  "key13": "3xwX92K8XaGzU4tqfemhivZVK2L1FqLsgQsGS3vKkEo9sXemy8NJ8iqN5RJDBYjvHjvBicgkMAYNowfxZofM1Zav",
  "key14": "5jmfYm6w9QLU3b6K24sozTELES9Nqrr4buqujoorUYWYAnrQWLyiHpV7kK7reUaVUBbSDd3P4BW4b8UQxWbE6dud",
  "key15": "66ET3tYEppQz3QhQYfpniiET4pivXh6pgCASJWspHrq9VPwaALeNd3QoCiBX5ACfVpmCQuE2Yc42ajt1fegL7nqL",
  "key16": "5ZwiGTz9TM1mLMytjjfH2ofdtjReS3TLnE9w7z1UUVJYFc7uqUBCmKo4RxqMoSZWJKjwvHeScTnTCAMRKtPGGnFx",
  "key17": "HivgGvNXwLpQziSCP3gfNFM7x94qfDWGb3XqhiymNQuQXFsrbSsprBxhjLMamtstMz6LfVPiBtenaTtcH5T9f5n",
  "key18": "2BdQjForVUqY7K9yyhSiRxFznmrfkmrogEqsbrqye7Hz77QKNKRHj4ZcUXRaMeDMNvpmdpFxFZ9C9mE2866FZkEt",
  "key19": "3BTi1LPR5Ba2bsNCanrFQZr7RLGoiXLJ2GpuH1AnaaLeBgSbpvvNHD2tb6KYug21xmGyeqXkyRiw22KVo3DDd4u1",
  "key20": "tqcScVgEkQ6BiVPQyFN18QTVD4aHcCFJ7DDWV9EFouAdy8FoQidqF4VmGAFn1gPwhqmEizvSut3rGCiX6QcStoy",
  "key21": "qa2iS82qYprW3jLxzUDszPpd9UHzmXJF5RdChqzP32cbMyNxQVtssBErJ5VjcoUJ8s11TGUynp2uCrEg4BNzjq5",
  "key22": "qmiGoCatfZafFtJNXuxHZQePfyx59tecL3GeMqKm4C4jU7ant6ZRx2vCV6yVzemb5q1cncNE44mnrwQE5FYxZpF",
  "key23": "kSMHF1Q1tXdGk1rL79ijkf9dtqiaZQ6iSJqaNDBuvnjAK3461ncQ535W7gWyZrfnWdQEjL9vze5n1wb3ySQQCV6",
  "key24": "46DQu2qVcPnDQG5xm8yiVwSE9J79HGRWHhj4oKYQRrkppUgaVZiikUVrm7EaHxBnzMMxdXKn9TeFsVh79ojn3SXJ",
  "key25": "36o1yq444Lh84HdJCHrFU9Javmi3GDTm1TuxSPf5io6PkCS9534mY55d2pmBwxYidPEQeokgrLZiU8FAJPmu1MVt",
  "key26": "5rJoERMJYewm466Zh55M7ze3zrt1v3q8ZHkQT7QzceybnhXQaxT92oPXArdNw7PCkVwZKKUx2Dx6ZxRd9vaJ8jEz",
  "key27": "3JGA9H97mucLENT234UbTRyf3G1tc7795Mkq4QoEd21TwnWLsszvrz9J5ytxZpEc3Ahew97cjRmknTkUgvGM9CJy",
  "key28": "2P1HdXSvxsRNffUDAT7L4veNSxctUsmojVNbcchZAqC5JyuWJs8ikb8J4ohXpdm9fKALRyvXgi7ruHD6ZfuSVPZq",
  "key29": "2sagHE7FqGW7ViZgqMNuZDvKQ1oZAk3KzhmHEMJBM1RSerfd7npgH3wBGZUZr1V47JLQU6RR6jaHYUReA74HkKfm",
  "key30": "2omBBhc25UJLM7QzyyC23B8QRcyhspTHmh6osGYgEms9n3NErUe1QT3w5Kx3fq9DRuCJcF59R8Kh263o2W4VsXUe",
  "key31": "5vNiqMX1f9Bcx32REwfmHXGiNA1Vu4xrTWb7fRktRYbC3uDXutrFKNNiNGfcTS39q1xkswd9GXzkar2tEeYvqjDx",
  "key32": "QR9cN4D8RngKuT2U3moehzzKtE1QKDvqrb9CCupUmuQKQedz3r4jFpNonUQnzNCMtFCs7gsvzH8vdXReDSBXEUv",
  "key33": "55wjuw8WbWkYW7R2sK1SpvfiABFn7oxJVcerYcyVN8rpF7nQXin9DzyXAaFNH9ssHjShvU11phAXsfo3SUBMmAdL",
  "key34": "3qpPjKZt1vpcTXWgYDogSRXpngheBpdgdUgHZV86RB5J8qz93iMqzQD59rptApuTHembE9EEtZvjmay7Et1YSrY4"
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
