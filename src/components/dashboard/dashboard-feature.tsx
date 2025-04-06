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
    "54SUusbZPtUDr1kULBFEmCY5W7CeTwA9zCR6adSAMNrbV78Hmr4ZrXd4vGX2U1BDDPLQNRumuDcEGpZX75n2xdPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SNw74VF5pbsha3Drh8u9a95Rs7jK6G9NfNrWtk124x93GYsgScEBWGiRQCXvY3vFW6YX55zUGCEmhethSLJhAkf",
  "key1": "3AWDPSxvV92T3myKDrLCFLQQ5ALPvi28r2dRhipCW7Yyve2vQXekrKufg3hxEZopfybxuq7eCK3pFK3FxJNJA63V",
  "key2": "2n2QCRXsqjnE4GEPc4MyhZsuPZucxWZVt8WTXkWxB4mqDcXJC1kFHdpi1tsAeaNUdoUx7frWUTZWgoUM7TySL4ir",
  "key3": "2tmpvp7L2on9qotgGM3KWNm336Z3bcMHRZgo8FrHkxtw3DR1HjsdKgckuvxojQGeL38dgwfKLxzr3Asg6jJB6iXm",
  "key4": "4FmZ1ZHMqn8VnTZUGJCi8fHsKX8sctqXwC1ALQBvpwJonzNVm3M456azzBP1kgTciP35565D1DKBXZ8aaJ3F1j1X",
  "key5": "4qvBqZyKoyQYhqntXU9WULWo6SJitYxuMCebaGHLqxiLyDVtZNJ92UAUbH8TndyawSmnk7KLcg6e1qiXsRjQG6QC",
  "key6": "3ZXYwn2r67P3yFYgPaLjhosC6hh3D12FC6PqJuNk3tSCz1tT1sop4miUtUKKieA7MJkzf4ZSaNPLgfzosb67mF63",
  "key7": "akcpdNZuHyvZNVXWT9jxmpNkwSjPViYUmovykdcekUAVRYsNdcMCxNn6yzsdfX5q8B9btuV8KW5TQ4KcTisffzR",
  "key8": "3Vi25Nuso1febVz4U19SC7HtTEMy9QGrMLTzzY8c7HvREdW74B3tDTtYpkaQGfUwtGec2bwX8Ttfr1FW8YCiuF5X",
  "key9": "43Y3osioLgsAtq3spuCji16CWuhTyZWBahQtDYDNVVLNqRPFnbhxWvZN4RaztMT39wTTyue7bmDUHeWYKRwcewRT",
  "key10": "4CbkJUndhyXHEf4mU6McAcmMRBXBhGQKcVyseYt66q7CMRhzhwp35zbVmPQFLDhQeucUTPHLTugmZEuoiMMpAgqJ",
  "key11": "2HmajUEU14b4ksaBZgyPNfoqT8Lp9e8NYGVXxbj7kWaq39JGv2nCa5TgoK99EsCi7KPhHQqM9BQzeKyHvffHHDmU",
  "key12": "2V25VfsUArvhskCrYbkXchZTxRRjF9ogdY8d6u1cwTRfyPgDRo6psuhX7a71kdWTcYcMrquFWXLPQrGZESYjS8S8",
  "key13": "522e89ssk6zdsEDj7K9U6tLCVFaU1vwE2T2YhsQWdD456oaxsjUYLNEbP1jWgXYGCEEBWrLSKQGMDa2ma1uVeCwM",
  "key14": "3eRXx2FHNG1coviMPcKZ9Ps3E9t1mFW2uX63hqenf7EBsag8S9tEmHBs1cnvjjjV56q1PhB8N8eZHpu24Rx3i3DA",
  "key15": "5GSrUxcBynhKgJxxmumFhYprhunimdSHj7YtA1aWsHVgUmPT5uQDnTnjhcbKaX9v9oPzVqRkgfznaRfQZomvQwvT",
  "key16": "cYPNWbjsZX8dD7qarRAUQ9yoaANrRB7h4z5TdPvHBBF76YE5YLDJ6KJnKq4VwDMEFDM3rSbbQU3BYuWQdBhn5Vv",
  "key17": "2SR9rDmo39hJyHK4ndfxUWwU6U9jyGMvDDNXw6xWsvYpj78nwqtJ2SgQxZe2xtXRHfSYD5yQn4fk4FPxwwSKD4r3",
  "key18": "46TUCEmpjNLNmcmEYfffV8FvmrT1nokKPFa3npwrvcEy1KLJoXPGeq5se7HZFfr6AGLzGNZe1LrFQU4J11kYhyCv",
  "key19": "4WmmdVVC1EJVadoK7v9g7S5Y62Ne64a96dqytQXxsoaPboXBeUJigsiP4mS85UHNCY3JfjWNYLrQw5jGKngjZdzC",
  "key20": "m5hFy8GLi9T6SFqdDDg5mdydEj4pUbw8rvyydXv2bASnccwqnmRKeNJbkXB42LH5K3ppK3YtT8Bjd8836WuHHwy",
  "key21": "2S4f767jSe9VSafe9xC1aWFqCGpy5MnkwXk92srV16rJyYUsSoCeGw4Zg4a4qBCh4FkvYww842BS1NUK1CMZFvwm",
  "key22": "5jCx7LdRMSbSaJcPdvwPH7KfH7UtvrQTxSjwRgsnA4skNJ5n7B9MY2TJgNcx6LymA5iTEc4yDTjMzwbDWJ8EFK19",
  "key23": "4jp1iZXoLTEB1G7um7gJZ9GnfkAjeSSWJQ8QBBAJyCMANZoADavPZMXZDD26aQSiEEZ3MU1Sngco534AzgV32fht",
  "key24": "3DJG6bCx46CVj7RNUE9m7BTNJRJss1AGLLm8LLFgiNW1uT2JeBM9RA74KGtsnUWhWxabEmCoCvtssCCwhCPcnRZa",
  "key25": "2RfWB4KjSRYg7pW9drb8SBpFk6qnWYVQHYENMmaFMrHW5xPnjBapCsJJgg2gfkBVjzW3Tp5ob6WtBfgtDCctN7aU",
  "key26": "2bzdXPusytiPsdKPniLPYLz6vMp1E5zJNFwxkAnPpYvu6QvA8c7eEPbsfxxLxQwqx64NYYbDd6uSn2LTniSxogd5",
  "key27": "3PrcdFwVoYFcyPNhdKJsKtLcUPkkoRjfNqw7wDwD1j7YC8Cb7Twg3LiWU1amHiq6q7sXAhs96GsdZXRXas4gQ8jT",
  "key28": "3iptGuFhqkLUKeY6c9A4nMGMLM5Msv6oS6kdPwzd1fYG3scprtbVdxmceiE9W5tikbd5B1aLAeJQ8czVuvPjg1TB",
  "key29": "rK442hXBCoGe9RvKR7bzSdhgUQvemPFYALzrku5bzaCmtEtkBXBtAMQxrucB1BDXEFn8ZNuYHBv5eyxdbSGyUT9",
  "key30": "5fjA1eG4rcrQVKwqP19WjCV4tDYc48BbY1H6PwgaypR1456EATAv7ZRNHLHQMMFapqWZgxLrnpS1JXQ591N8QbB7",
  "key31": "e7HVYuKxkxdbKPQnHftzi55yfLotqi4y3AjEvuFNWQFgvSNgmifNLjm4SYuZXQvMw6zRHdVT3BBJLkajUGLaVFo",
  "key32": "1P6YDktz8wBqTQPVDyBZFcsxzetbiKY6UNbzbUFsEcJuH1NXb9kiCvyKUYC4bgJ7sdpP962mEVWtM7WVpYVDRdT",
  "key33": "4436bBRX9jneEHu8JB4porn72tmkcUyZqXDQkoTRtWdwaAWv1EWnp2LKxPcQcGNHbbudLC5NYoEPCEGPtn8Tqufz",
  "key34": "3ePA7HzT7T1ng7Fu2zg9qDVyuw63GQMgD2i3g4CvsFEVu1Ts3yGgT4uups1FVdNg6rciB2afdSnwLCgFLCChL9Zf",
  "key35": "23XACWfnakCSh46AAFHgEgEDb1r2xUxF3vAZXKRSsKEy4LEefyMnMwh7kUKPJzgYH8n4rDfd6chHVkdNMqRipowR",
  "key36": "3i8KKkqpMDpsoEcH4JPAJCaVDGYLA5tTfHBJEy1o8i7qzPEWQog5ax4M3N7V8zHbuk2GcsRNWVH6fqjz7HAKjpuQ",
  "key37": "5m9yWJGo4Nf9b5RJHXy2urCGwrtUw1zhcLyo8ucmPgKD1vrGgD7HZSD5qdzvox3kz4HBSkuLH3pEGoqXV1ARUTR",
  "key38": "fThm54wju1V6SwnEifiaKAPq7PXjNjw5qb1vE35YyuR7KoRfbrwWx6skM3uhVavhswckX8z9RLFztuWAzfeLuMT",
  "key39": "2KKFRZUcNXA1E5hYkMC5f4aUSmM5v7ckZqM1gzvumTrQqsDsMjWtfs2en4KnsRFjkt94xmngpGk3e5M2H1qyJnAr",
  "key40": "2m8UJbNmesDdyTFpAXwZp9LPhYGvH52DSY6YkwhCEamsYYcgNS5iGz6G8qRTXi1jZj3wPB5oczEjoNhFYcCp6gVo"
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
