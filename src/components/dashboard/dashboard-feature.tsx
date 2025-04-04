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
    "67YijJ11ne7stwjazaBxPnbRPZ8h745bdywVvfNFmsKnwgWTmbipKcq6VsPJv4NG7cUNZRC99oZJgavXsg1ePpkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PTraQjNtojoaPmit4mzFV3wV9sju1H9j7zYUpBiJMaMRsExHTXMMz7tqdvWhxFvUBfBLQi5K2cgjXmv7iwU2kDA",
  "key1": "CUD3BGrfej2nWtpVo44AUQBLmUfq397tqkNBqYXpVaDftZTGq9LkQD6cpmxMrv8ghQbiJXyG6iEu3KeLej3eqAH",
  "key2": "2bRmXgue1GAZawY4oxDnsiz2DzeKyoX5Hsb3rZukn7ELWWgaJv7CiT5gYMyvUJnZZUxLfqH7oknf2TBkAgTAD7Ms",
  "key3": "3wAd1bmGi9s91KRewxaBPq6hU988BnqFqZvrTiC5ziT1pcKAVajYjQTdz3p8bqPB4egECw4FaYBFKDTSBszUkp23",
  "key4": "HvsRqiHFwtjDsWiuq9QUnZRuRqgvcwWyKttzuNCB6uA2ZebdYv4sS3rETGn6X6bKHDHnuCpFAVeaAs7tZ6MKS3X",
  "key5": "3n4vJ8uAY3KS6VesKcKMbZX9cmgQBuQcMFSotMy5JCytK1XUPvXx26DTa9nERN5VgGUUuuKST24rQsAnkqLXqTUk",
  "key6": "5nASHPCFCTqV2Ffy944GZhdGQPTZ6xKqsQDfx5qH38GreUggfiMBwGRqxeGGFyyqctounTxuqmadM12bMtapNK56",
  "key7": "3pqBbxUo9qohuEc7ZyMaRrpBuBPArj23ZyF1RhMrGiK9hhYuA59Kp4LAZfPGMpL2ch1YbPQbY68irVPvYv7mcuYM",
  "key8": "2ce3mVPhwkVuE8MbpZqVf8jgYKhjAWeaT3bZMPmJ7tK66ZTNu2yJnAmxA5ECe1B4yEbyf2ghd19jKy82a97iWrYh",
  "key9": "2suTegrjFiZMGMZ917PchzJmA8HCTRYcSZKxMxX8ov5oY5ruaUfZ1mS1ejwE68hAx3Lg2BVUaqPV1ucbt9gBxvpa",
  "key10": "5y8up3XoAv89kazx1M3bczAhtajb93UiVMjcbcjtrLUeZVd5c4ck27aLe5gyMwnFxWAGhRfpFe1wMq98GKbnp7ir",
  "key11": "8o3CZH7sM53v1cHxgkwdcdQp5RfX2BoJXyeeyX7V5xVhoezKEPwvhP4DP5TiuQPG7vB4reofihSyudZbsBnqmef",
  "key12": "5Ny4JUxsG5pBBfwL1VoyFnFXv5b7K4oqWRPQsCMPKxFJ5d4kdv4hE9BjE2WqoqNJtqJ5dhLWGSzS6nTDdazfVXkq",
  "key13": "f67YnCJ82wH3UY6HcopSz32PCXxVEXuq9JpnfeoSf5Nr85RJoyP2XBX6Mb6BzM51S3Si17CGqmRp61gbm3bFzbL",
  "key14": "5p3t7ufK9wvvAahKdP9SjuShU8ZLimRB6aQwn6kjXS3JVDE98f89Qex6D4PdDSfQxBXNBvsWPKp9nzzGsu6PEe4c",
  "key15": "5tdUA8ABJPnGjHSSfqqYuW1ncYHvQrUKo3r59NtgdxYfbY9UFXdDcSg3HLRvZkaHM9oUQwTqththpHez8gdRDftw",
  "key16": "5SgwRyThSShUgwxsZY5NeNsdwBAjQJ6SKM3zVB6tf6b9Cw4FE9J9m9pAjfkn4sfxEyypc7yA1B2xsxzR2kk6azug",
  "key17": "2Yt3K89QhH1SjFQJ7qkWkFTNXiLHuZNWE9AY6MpcjuG1wC3ANWQ92RZGai9jfuM3xEzPGPx4fwEaR6Gf5pTacZ1x",
  "key18": "LARdu7VyVcHpQDsRELit6s3NNt6sgeiyThiL4XCsuT5XivpCmLFjocwnTPxtBYjfYXQhvewvRHsuVBVDvXy3Qur",
  "key19": "3s6wHjBp3oHy7oZVvgRjW7c5HBL9Qg1cn6XkhhMc8hb62htVNTuQRwJ5uc1b4qPGjfnr8pEUavVndigyzooU8Cy",
  "key20": "3Gu9HNqBNXFa7wsQkFAUyTvYe5rfWGAr8GRqMHCMsW4tJQKJmZQTnwtXPugDRkoP5QGmLtNiRSfE6JmV9XNTp5Ng",
  "key21": "3yhEr5U7p6HmppFTxYQyDaz4A6DZ2uLeqcHyFhaowQDNr1TP8BmhSHSa3uRAu7kU2YhkamweXXXPBdAv23ZrkbnT",
  "key22": "2T7us3oKgMunZiWitmBYzYFFWhb2GzzKyXbap2uhW2pdX5cbfEaqPAYD5AQjmQnkAhuavrGr5XaWP7dnianSvh38",
  "key23": "3FK71MAuR2BHZ7tU3GnjoUmNYThGdd1zsgNwBCahXFD9THGgEyAVtyXcZHrK4DvY3772p8eZB3LdbaW2vdbJRuHa",
  "key24": "62u6J8FAguhWHZWN333jkNLZDiwtJZP4ixLSoNiw9yMZYFJ7kzwyRuPCr2RBtufk7bRDyE66j6nvyEs213NXRCKq",
  "key25": "5WakWa29quydbat9Sv5Qa1Qee4ysen8t1iK9RuWBACfLduX3p4s5aaZC2KJCrHFNhr2nLBKozbdeiDSpRdQU6QQz",
  "key26": "4CyKdpFpmgKnpYPqHc1jmgxznJppLCpiw8DcAdFHDG5HyZtXLwjz8hvuDF8Ur6QNZYsZHDfGMPdQdecauQUnh4qT",
  "key27": "3JH4yEAA2kwYX6FBdCkDrm7xWJZ3B84Woew1bbb7NMyPQ4LfEEJTmqKpsEyb9hRnAmN6Ki51QVLSiq1S6RiSiEJY",
  "key28": "52gkeBq1kCobZNAdS84c2irNRN8oa7xVbT7eEgoaFDGMHVr1cTknUjWevBBd85uKQxTRYwhvyHYUify8VkMptNUU",
  "key29": "63Zp3e8nFmufLtt4SXGE9pcSKssSnAjmkcHBT1XHL3qXNwtE4X7nfyMxyopGas8F4EbVZU8jxrbJ46tNMks1ryjy",
  "key30": "DZZDCN7XB1HdJi47UEaRGJNbLeZKp2ZKGYUaQr4iPkdbsV7CDCS4GJ262VZRLGzVzm3y4b6pR957pbTzrUM7zcD",
  "key31": "4RA5AtKES7DPZmnbETUJB3gskmNk8WqyiE228c9kjfscGAsbxmXaDnsZ9ebS7qgRGdXqhrSrhEoPGTvVbwdex8ub",
  "key32": "3USyzMzfAdJqZqSkPd5PRUZb2e6VVjzxQ6WAySPDuRCknfoGgzyB4r2bSgyMqaANj5s65AdWRCfx45xAXhnFFpc",
  "key33": "3DvMGTwtxJTucnuSUMFE1aVtdiyqmkKMvQ9PaoeGQ4ks2s5N9uCZxEzXTnA9AYUhEBePM4Z4aivUYDnDvoNc611j",
  "key34": "4EWn2wgVAAS5LwYUsn9HbhZmix1BHXbseeg2BHN7si2LMvriWfgrJdzJNYM7QnAxDdAZzgYtJQG8BbkAQWxyx9g1",
  "key35": "JA6YxERyTk5Zfm4aqt8vNefT1kWeg6RXaiuoPvnbW7oz9dbx1Kt1fF9SA2UPvCQAdBfQkqSB7phfpXYvQG9WE3o",
  "key36": "2DPkEVmVPfizPcn4z93NAmgNAxpsRceXXwhodhn3jJWQsoQDeiZ9mj3UUv9ecYgCAL4s8jvuoHBZyiiXAxfXQoTG",
  "key37": "2fh2Si7GWMS2yYhKee4ggjRhZy3yMxqbPfrspvYjWtp2jcYibZcBqQ9CcsejDvnLiWAGZSPJ6iRzNT4E3ABG4ikq",
  "key38": "3iMSY3NDgdevwTrnrBf29EwDDX7YJVRTuj2q8S6Ged8PMCbqdh98eXYeoRDQuitVYpe9RCNWmBb5kpZ5CESkg4pD"
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
