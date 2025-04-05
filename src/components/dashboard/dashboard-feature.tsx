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
    "fJWuVEaHgTc6nWRm1cdhiM8QnCWsiAQQuERJsqEWCYrpApCPeP3rPxoYD44XHu3s5TD2ftCnHycvNF57vQd6kFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q294D4jk3ckwezLfBYTnW4oGTSQFJWBqfNF6W76PQ88pCWXsiGJhfV5uRH1TYsnwhY3Z5jfoGu1gZrQzvrBafC",
  "key1": "49fNesUdNKaApu5T8qDQPKC4JZvVB6p7rjjTVEmazVgEciYM7GnqctDfGn47hiZdoM47APrLocQtxdtjCL9VKuxp",
  "key2": "4uCGryxzeki59GA9UhkdbX83qc6DDo7cgMRVLCpiTE15DVQY7YdnPxdGFjPR6cczzDhA81NFp5w9PeFizEi83Yjk",
  "key3": "4dLK1s4qBTAM4MLPnhbDpkS1jQdVfiAG4ybscqG7hQeMxUhT5YXMtmm4iuD5rXcgKPXHj47tJz581VLTFipKFvV1",
  "key4": "3K4uTq2LCePkB9wxFXevrTnJFKyqnqjQEApcE99Q9ARsCmc18vvaT1MMt99dREkYq33Aa6sBKXhTciQvCyx54KRC",
  "key5": "2CBNkJTTTFRkrNXKNVn3QMgNBAi7wLLqYiWfu7R1x2Lt3U6e8h9fPuysBtcydeB3TZ9SnScCxof6DmhzK8yE9wGc",
  "key6": "2B7eLDggCu3igSB7SQNwdzyU5Feuy3PqhEpjPPJw4eBzHEzo23mRZGyGfteLV57b2iXQbyv1Z2Xu4ABWiSWabqUH",
  "key7": "3DPqKtUVKY6wENTbhTmD2DBUdN2MKP5E48kPhgM9Bn17uE4TsoWU6Ln7dDRFRBmUaxHUJk7wMXiYz2gQmmXCGpd4",
  "key8": "5ruai9kEhB5567FyJV12uDV6SCaCiFf9yAeaQm56bZxVHYKez7n7PATxtGzXPE2jCnmH3TLRRkKupbYFDjvy4iTo",
  "key9": "3gcqvaWXvsXMrZiQzGbRVS7w3FEv36LyJ21S6dD5G9esHT7nHHVLydhwGVTVEHVa9c1bHxy9bSjZG5zEzuFLRSKk",
  "key10": "U88zKYcrdb7ZiAHbDjvXC5zZPfv1MfgFoUQ6wqC4UnqUuJ1cMd454bEKdaJ2mX5EaFwEfWY6mMxWiQFs9TBxGqV",
  "key11": "3PhfkiP2qs7viTQbwiNWg38tg8iqCJ3JxfbDe8CyxKCzSmRADu2ynq2qWQBUMtrPobdbSQGG2wdPwSoJ9nBmjnND",
  "key12": "5QchUpLRqDcwtTdf169MzjqtkruLw8BscbpP252FYtGGfhZjBf3tyAAFtmZN7BiWvLghMMzL4ipxShRNSNtLqydG",
  "key13": "2MRzeWbP7434tt6bgJ3EKJHUMa2SRxj3QQwcTr5PZhP9ETkoV4oKWAEww71SRXrLSaugibjENsby3Xfo83uc7U8W",
  "key14": "19ncV4TwW2tZLZ2WM4eJXU77y6MbFQrn5ezgnXM98147PArvwtuRRgGFU2GGwriKY15Wkt4zVRDtvUqJhuYA6Sy",
  "key15": "35nP3KGNZfdEaCFTLhyqTnbKeacqELTDgHoXD8BnWoMLxP8ud1Pua4G7CrS3HRCBfUN7azjMqewdUU7aMoNh2Leo",
  "key16": "2yh435F4GF4ovsUtqXneLFNSg5Sy5dCCs3QyHG7uPH2cdAaxYRfYa733hDknMGQd3x8CRmwwLs95PeBsB9xVnrZH",
  "key17": "fz2tLXDwJG198kpjPVmLsYoJyZHBiTdmA25EKYk6TVRzRaL3J3EUJ8kU5bKxQLojMQCY3sWyoEE54HQnF7YMBje",
  "key18": "2yN5HztftVYqzF2e2F9uSVxrA3WWpKr8GpWTwSRXcMGGGF2YqcdMpUESCLPEC9wWoVCf5sUJDebbi2vxkq7m6DSW",
  "key19": "8dWhUBegqQWkuYbjLpViEs8VdrnMSgctC7Hf31KtLTsqKPyCkaQoLPNTVxtUo7i1dFW3XaFYdVkXzu2x7RY7Ahn",
  "key20": "2duFzFNBBkWkg4JZrbwQdqr4cfnVZQRzxm54nzxEAX7sB4kRS6fhTESyHVTuFyYaRVNaMy1KbJMUdSoRSowKQPdN",
  "key21": "5ebT5rTE67w41Xb4S44jjJzrZxLZvoFA3hLFVmBqnKLJDf5kmPEvj3iUXVcQxJENZDjVqHVDRBr1vndFy7FJqbDp",
  "key22": "5iLY1E1n4xbN6a1bNL4C85GMm2hVLDwdvjbSUKpVbbPFsaBEJXttQG6kxtPvjt5UB2MZeLTs7jbDaetJmuLB3RR5",
  "key23": "keRQZK8sc2er4jdnMQiHuxyRsQTJA3KvkDggDgdFWUKn9Pe99xba7suQgjucqwNH7MSQycquqUJesZrJEGaKUgX",
  "key24": "3Ceq8KDUvszFPFN8nRqFMyyyoLz1sfZqPaga4rSaZvYYi4pKfw4yCA8HoSxxRPKbjJbYz41VZeW31uhA9NDhmbVZ",
  "key25": "67amrEUdVVYBJWaYikcT3BerefwnCvoLziwUkraxxmMLxwxDB2wBBwh8aVT4Cmt6p9XjhUG6s46JZR7VRQEpnkyH",
  "key26": "X6CXRfiu5RLqXg66Enxjx8ng5k9pshe4twSWjNVaCjTyeRdSKALG5Y2gsr7PGyn5tKAuwTz6ppPp27AcocaMhwf",
  "key27": "3rSWGS6evXJCt47ZkgkR5VvfBzvEQeam5i8c8VvxugchJWd1szB7sE9GkeF2uLoeW95dVF9ZTK2E8hvz1DV6V5So",
  "key28": "3ECJu5xLrfT6BKjZ8QoV2W6xV9MGze89XKGg1UtyizwAupgUK8E4hSrouVutSyACZK4RZbiQJbuRLwff8TBaxAt5",
  "key29": "2iU11r8RjtZYYrgfwZUzdAj69R6Z2Cc5oPf7RSa5pyc76QhjhtqVhd2xKZSj6dwHKLB1m7PS8NCGG1ze6yPkLX5E",
  "key30": "3m1UzKHEcP3j9hVKaTFrpdF4rKemDv1CUHQ3e4PG51gTRtG53QfsL9dJNdbaRf8ANm9M7iACZ6ZFyeESnkAx93nX",
  "key31": "22ce4raiAqT1Zh1G4QgecD7gQpU6h3wrPvuQGhsZAJch7BAhZevot9XHis9vReQtw7c4CfU4n9wQCEkoyVXZj7n6",
  "key32": "4QD9ptagzCPVHdhVNWFePYwpHPQKWSDE3stdT1qsBGHo51UyZ2efzPpaic1xj7a51ubQyNXwX6JQMAaee6uJxPpa",
  "key33": "59dQBJV2p7CGcfE2mi9832KyxBfhS5vQWpKE2LdNKVaRGi2iqdmHUnapTbLb1HtM32Cbp3vC7NBnf7DAJT9wUbqH",
  "key34": "MbWVnDTbXJsntujTvNzYoJLz2jXrVXuqx5f3kzyFTBnC6PRqDtcJ8ansuEGAHzgEUguEi9KH5a84Zwxz24ANzoq",
  "key35": "4zsxEh7htcoceSXsbXQ6FhTwC9uQV14tjRXx2m2c7YuebBfEsKK6j96yPfzdhAKwscEvDheM6MJPZmeyffuyLntq",
  "key36": "2qcHW9Zp8tNZMXVKsFWZBy51FsfWs7ejMVpt1ozqda4JVbLHUyyv8ME4BEx6QuxucPzkaNbY98EbQGQ66E6Sgu2m",
  "key37": "5gbG94ptWQmeaLgoWqpVrPiuNmVSg5mbqeZXRwzEoK7nuYWRhf131sjjwgsaUq49rR2DF5qPy9wnpZFU29TDMdfV",
  "key38": "2FriWhWuVv3Nh45cX2nHyBC3QzfgpmgH6NdCC2D5uD17jHY5o8AiyDvh4aUxeAcVztpgpA5M6W2pY31hkSEyTJQs",
  "key39": "gnqUcNbGaoCYUrM3P9vYj7T7mbpXvcq6VTavXr6PLBCfLfgdmQDTQ9KMWwZmvpRE5UoHdTtiJNr54HcqvW8cUAd"
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
