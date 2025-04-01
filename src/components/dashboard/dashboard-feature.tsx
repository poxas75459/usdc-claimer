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
    "25fxcK8tHeHXJdFqpLX3oPVjWJmNJswc1KBSfrWNKu4HN2rDLrUhrDVn2KJnKmAC2SbB8WcZmBQxcWnZqgMXaLBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3euDRdyGdudW8wtK4JEU9F1hBHttLL3DTi4f1zcPeabfpPaxa5gEtKSiRMpqHdyDUKTLyNsqwi6E5k75xXXicvNY",
  "key1": "4UPFSFQmK3DEDwcwPi2RrwpbvHzJjioQ96CHP83LaARACEMc5Lrv9t5wS3RLTCsu98J9EbLq1iN58dceS4iuJ4uQ",
  "key2": "2S4y2KEUUGz6ydi3MhVUNnUCYVngPT2t2xJUMVv4xseVr8sBXM1wmuu4goKSW7Bb5StXxfpf3vpA8JobHHKdC72t",
  "key3": "3s6HUdGVsVKF9o9ELpbGwTG6XF7onQjLRe5dE8uMZkdWC8w5mSLoUwwAFyxzWZ1RavqYHcsnJTzfLvCqfaPCMwQf",
  "key4": "2Se7nYX7wbupxrBMBHY3mSpDr1RVf9nc1RMqaM7CQ8AKhBeA63ksVzYWt4HoEjf1kMDnm5jbcNE12TZAwcaCZSBg",
  "key5": "5T9RHaT73C2PTxGjYADJF5WE3wsPXHvJpUZcYbULkKZjR7XffXoVdy7AoFR6pAdzh73RAg6nkJffh5eiYR7pDbbf",
  "key6": "yNmAyEokGNzm55rtBLKpu5gkzFZGm5e2paej8pjTKJCW1QUEfqHPzXkCDqRAf56Cu1uPS9CFhj7fMhcvWjNrzd1",
  "key7": "5xDNe8SMSFMVr7AKLkgV6jy5aFz4dRhAP2eisqDS4pPu43v1Josbe3ph53yQdAsoiw4cVKQFKRPrQUNu9tKaL5Zx",
  "key8": "3i9F4XZPka7oq9MKuUSxHJR4KGJkJUnNvUFR2ytpTPbGnCd6uboqS5wWvvPzkavfVBs7pBj2bo8URsoaHRZVVoaf",
  "key9": "VTSDGKGUUBkpUzktRdukPfssZJSP5Jfgm1z1Ap7VPZQfa7FUspUAgYYFieR13sT2aPKocFD9Xjy6wV3uRK3A5CL",
  "key10": "5wEhMTivm2hJ9KZLBTjMch6qCWLwLCJKu2DPzACNviadr5jVht2MsH7fxJBvDw1eQQKy93zXrXJZpAzFsLqNyRrz",
  "key11": "AERAnCgtAEZpor86Bt7nGUBBynZgWK8WL173qXnWDthcqartDBRbmyyxPdQt4aUnh3HtRivhpx98CVcGAPFpUin",
  "key12": "2CXVKFoKrz6mDNGz5va6hyBMxA4b9dshLMFE3gjsCmXBxuTRvQz468Ua6i13iGfhugZ5Bdq8Qiyhre1sD5QDBHbY",
  "key13": "2QudfMR1v6mogqBFjitqbbHKyHu44xiAYNDBWqotzbnBcZe5jjxyLNuJQ6xRk8GEHv5D2Kcf1P7Ug9q7ypEr9EeX",
  "key14": "3A3VTi1Ci2v3q3tzAuWTTf4b7V2rDJjhmmXAwfXRLmHzkoiQu58uv1WWXnXCAc5txUwX5B8ejmMqx7JNTdgsozJy",
  "key15": "4oEmGfXRPoKvwv9FDW8fTwTLbXACfEyZHsYWGxN2743K3pwk95qCcX4jFaB3GUvftS6oPxD1KDtujtqB1TKXADs9",
  "key16": "4onXxqb9N6KJkhJH9VXzxLh8RZwoaRseSKyisEL1dekrRZ32Dt94xFaeJAQmKXnju4PYSMA7ZnMx9MHQ1YrgHeXy",
  "key17": "4Axozyz2urebk5xqhipU2K3c4LSN5X7bC1FKxiekdP9AG27zKhSGQQPuSYTrP7tB4nhNyRQpKaVDAwDg7Jsgd8K4",
  "key18": "2NksMMoPkboHNoBx7tFsPkBJMtQDCrHusT1UnGK7dxXjBSzASXUk5EEr4AuTZhXWjBMC6VKJxB38adiGXx1Nz6fE",
  "key19": "38kP2hkvedQCTit1gJxe9AfGcdyszcr6H8jst2zF8cWiarc1P9TcoTaqyFEYEpUQLYRgMmf7Hf7fPrbT96DQ4xtN",
  "key20": "3CWVqUeKwAGsFDAciPNfUbMZygvfhMvfqZiuVHCeUMQJQVud6acvDg6WGw5k5ntdWTEXuWnLxFxokBM1WtVgHpwZ",
  "key21": "4qAoNtc23wnwAaFFcPjRA4fsvaXsr9UkgndBDdnfj4egreMvgt9dFjUvXoGQKRFenrV7d2dv7uw9sZq6Sj4PScsQ",
  "key22": "3g6UMYzESrv2eznsGTkx8jYyzb7L9NbLn7AacADCtiqZsBmBf9DV8b1aFyuZrg1T8A8oShNkRtdtMdrLXgNudN9N",
  "key23": "3QBY4M3gZd6E3SK1n3Le8En9T3VUuxXJnodn3Z172PLZ3X631QNJHbEvWTULvqRKLrifTUzRibx6b7WgKzaxzEPX",
  "key24": "5hsZp5uMyUGqRoc9XxYq7h5cPdSAqcJDLjBL7gLMfLgHbWmJzWk5is4xTs3yhgBNX56ByqFuf2NUYAUNLs3ucTkp",
  "key25": "4dLvxGhQmidiE8sbBto7P5fkEcotEv1zNdPjgEN6BzhWFbuekAGBMHVQtteVXNc8gMGVxeP4XL6pZgNdoQWNxW1Q",
  "key26": "5bfKaRiKb5WYyhULfsJweUwyB4bCHR5EZH345o3DLGwDk1ZaE4f6YeU2UVyGNB5vkFZUe8arp7qQZwvm5NKwCw4q",
  "key27": "VhG9PMPvveWHHNA6mCrPEHue4ehvaBFSzvEzNk2Dr9ZFa6bxVdiGnS36va4Jcn1aLCAB7NMNQ4ot5dQo1v6B4SM",
  "key28": "3q5gTGAH5hGZw5VWcAEzA31LEwiWzmxNJm54kkzLLzwdFgbc76PipPB4rP8kfkkWXkYUvgP4gDztsRDCtCKfo85a",
  "key29": "Lk8ZZMVYC3EtYH6ZU5kTn6QA9BgUkFKzPFFncQ2ougut3aQsd7myaXp6r5ycLZF1duhTDVtnnj6CCqMidLqdEqb",
  "key30": "5AndhgCLWCXLFkisR2ESWGj1SoPDH12Kz3dnXRqLauR6wGgsnH2osogzyTzSbFtEeyqxRQr7H6V6rkvUEEeGCiCR",
  "key31": "X3gN5jwpwhLHvTVLVWDpyCGk1Dhvz92N2u2baGwB83CmRCSR473LuVxL2mzpqrJm51CK3HX7mjAtEQ18JMaJbRs",
  "key32": "4q3Z6nbRgGQcWNShdKwe6DA17nMZ3mq3741U92NjCbDA4uNgQoSrEcpZDcy64xgQYs4cu7UguJhwEde7GkpWqt5r"
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
