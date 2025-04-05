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
    "4Vh4R44D31SDYDKKJKZkpKHePfdsN3CKcqcm8iTfuSE9Z7WnqxhwiGjYY9Poq9pwZY7cyJtdLVBwYxCMUouMsWXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UDo5iXSGwLKikCRRL3T47oTDqjG1Efprb9kQ21LAYgCxrYpVwSTr9SwAjec9XwguppoUJqdVYaUJ2f3Faxv1Sxi",
  "key1": "3x4rG2XEEDmmw83NdFz76PQiB93xXz65mtsvM7i1TNUtAwsXQU6BX3QcaVKoV2tiYhfh3981bDuoYMo5b2FVt84G",
  "key2": "57YcUGkKWz46YDdVhQibqyJaWyKSNR6XuwiAnF6t9WqmRuFVMpMYkEmyfBt7LrGganmVRuRkZcUPG4ZdJM3sDrFi",
  "key3": "L1kU4PwQ4JLKfTkex67qkK1gRDhjLMzREGoYJnMQkT5Dsi9AuKroizuUGTDW1GQyBrcuyGEBHnRA8D21FSzgwPX",
  "key4": "a1TCHFgpm7xS7vUBjeLocwkMdmmct292FPbmwMYZGA4sUHL6pW9o5PeMwFMEP1WFhNwDL8E7Fo22DKTYUgaEBbk",
  "key5": "4P2eUYJAG6JpyfdvuMM9zumpi5s4riiTzpdvXveHZnndzNPmxXhQRcVh7yi3XbDq8QboAKR9cJLXXX2HhgtzGWYX",
  "key6": "2aSPkwp7juGXHvimMQztS8cQ3omQ7iEh7XC9eHVT6w1nuYfvwMNbSWYaCfEEmH5ZLarkKx3N5o1FyeaFZ9sfq2eq",
  "key7": "3bawQGuyMKAw2RNrX9gQ1KykqqojGi7EsxB9AsHAajesPeKdxRvSWNHkRu7548tnXMfbhRUUCksmnGNT1Uj5ZEoo",
  "key8": "3mcL9nL1hpT4SEKW7hR9Kxris2Mj5AzVJewpcu3We14FUmirpMHaz2MqwighyjNBmDL9xuj9BMhgiQohGjsW9FAw",
  "key9": "4sFKWmdgTe67hkJ4Ea24yGvzZNNYy7qi8GuU1jLpR3UogfkMNKk71Va7PrvSmwxnczbRkUo6m541zgsscncCKVmA",
  "key10": "2jVYyhgLGeBhAExK4qNuSKdrKMrM8BivbM57eFTg6mnfyxmmA3QEQJHsx6k4jYx7k9f8AfBf7iLiBEs64nBZ2ANC",
  "key11": "sbVsoewuXNBVQPqtgH6w7CAwLTxswWd19i26Vzq1SxZgJSEpdzvyjPVnhiN463WMnyFZzD3ju4FWzs3YgsTBnN1",
  "key12": "4tgrJGayN72WKvuiRMHsdXkhjJYKx8gniYkt2vxNaEVqeXWRYCXCymo8cxLMT7bbkYSSUcrNdXbpSmxua6XjeFj7",
  "key13": "33RTkA4FUiWhpbLy4VXbG2T4zmq1AQFhfu4WsDy8ECGgJeaXiXezSH2CLCbyaNk2XvwXSd4EcCA6rZ5L7QPfHAnF",
  "key14": "5tZYgeSzw2imsmqZrXuSNpuCEMwX4FTvNRfwhzaMLERxnEoNmDDCoxrUk7PirDAeALQ82ZQQ2UFVM1qSxHvmVt1d",
  "key15": "3wVikxPuatgN5sQg9Mp9iPRsXPRzyLdw5YxUf95m9NrTqiocQPMv6iTCpEbADEBfAWGPWN7pekHMqabKkJF7EMrT",
  "key16": "4L37WsVcdyYBd1HP39YdZNUtuW9n2HCtQgsyzt12TtwrXpRjxBCpXDBeqdEWh7ZZBam44XVmnee3g4F1b6VbpLs2",
  "key17": "x4BExNcRjdHsCc7MZQyWEzWXSNjAyE7Ttu8KvkjSAbEaCJgjPzxdzozcUFJ1tWjkEUXSC2rtf1i6KdV5bqUsmN9",
  "key18": "2pfMzg2zKcG1kvuvbzZM5BWTeut1ctzZLbLEDXkypKCQ9SdUUP59U3gTRQXZeGth3L126Zn52kVwwJEKp9KCg3ao",
  "key19": "3wFdN8qPoTAJ7LtytyPUsHT6Zw1zPLQjdkG4bC6oJHg8PoF13ECmrYeQT5kdzsrFjaiYYZLjTDpPE8gMn4k4JySt",
  "key20": "2yT5RRsbrVzqrr9Bos35j7ntxgJysT12m8xYfzyC1HidbXcsRuiBHV9jowWYZokjvRs893JLxYAMENmH8eurtGbC",
  "key21": "3C1m5Uw9hs6wc3t4DER7LsaAXd3sLmHwr9feCLxhASEUaNYqPZ1tTqj7BrnRgn8X9szKGfr362Mrzos1VebY4UgK",
  "key22": "3eUScmQvFxPT7y9NgPcC5ZYUbX5y9n9dPZj4aq3xc6Gh5xggDrfgNxCg7gYoc38kBnLzbFprpKTeKuTp8gY2qz7S",
  "key23": "2D2HZoHB25T9npVF2udqASBrsHvdcPjxE6CioeMcZ9uDBV3HXFLf7JTsu98ZQSHaQFdkoMDxNwDAugwMUDnMr75Q",
  "key24": "4avCnSbs6J8aSnLxjo8WeNYiT77AVVvc7ZjUN5CHTzEBQiZRqVZ3UqgjzASK9q2wXYJA1eccuCVXcQMQ5BCm2mrK",
  "key25": "2Q2epqeKPkUkaojENW3qaMX7FWKa9fiPr9VSwVGLky5GMuuYiKHspyatjMfR4YYj65gtmbcZ7oAv7RQeiiMu6Z63",
  "key26": "4H9qQLwTM4xKBEkT8ZoHFHZncNGvcD7PGNFzW4dnhF4tTzpSpvCsABAe8uwQcR9JSrNcE6DYLjVJmtydgBFSwKSC",
  "key27": "3CKExYC6kAKSNmUEhTSDT8eLCLsduyvFYG35sq27eCsFL5Nfeq7i9PwDFxahjq9qn8ih28XjPFb5uUJ8PNxoQL4a",
  "key28": "5p7rfGU3GxHLKDqKxFwZVCisFNAdo9V4wkk9uPHRUFSGKU7LVSfMEny8kfRMJ6k6bkSMZxmxxyQe6txnhtr9ESbG",
  "key29": "531GwGK37AgqegDr2n2KYS83kzxxmdS4ztac9afVzqFeTGy2MrGFLypAvxRzc2wt2GbTYJNypzjHxV6udtGTqPJg",
  "key30": "2qYYYvmEWoTVhZah5YNmUebhbJktgzxxNksHGZnKXQwHkEVToxfFuBhogNApyQVEnn9S6etng1ZEjyorYh2Dx3Ly",
  "key31": "5VGYcqJUpLrMEpLvLLrM2QXKSZZVBpDHRH5XCAz25h5j2oLF4WKdbeQcbEQJu4YCmYR6Rf5B41YUKYrfc5v9RBVL",
  "key32": "2DUHF6FXbXbJZTiG5LwvGh573PR4JC9yd2cYPF8gHXMHusp8fuMTMRybZ36xKFrcKzR8nXBKHzxxf9gdWiwY4YDX",
  "key33": "2YEWcXfqQtimRWwdBiJqRpRugz3YQza6n7X4668rNR5ko5Fg9DrJU11ds51QzW9VPQSkmtDHTNv9hPwf6qBmxBVK",
  "key34": "9ak47J7dUyvTLAL4mcAn7NU9BYtoacMWEJcxRkdfv2Qv6vSAr7aJ1rpi3X8J4EWU74S9fGuWMGF7z6vcZUR7KL3",
  "key35": "583pvgKxkcAroPyR1d1GFC2XUMUTjX4MndazR17jpAfCxAY4kAWJ7oqqQovx9HndKDPk7xnJeno8UYRjtiXtrzCQ",
  "key36": "553SqBgf51KRJ4xnZW7JL2zz6sfQZqJDd5fYCVpaxLM2fmNGVKCGRxH8Mp3FWhDr7XLPoUsiZ9YAbRXsHdnLfA5P",
  "key37": "3tF6aKHqqzSWNRf2ZV4zMRfw3dZMDnJcBo1fNM9xnpRHJmesx5gNzNgkgMsKGkUcVPeRJ6FGWQWuP14J8LNmfVax",
  "key38": "oCtR14jdAFPWDZXchCP3X7xjNAeSWLxpuKuWVrB9roH7vFzQmkwfr4GkhTMZoucsCBmHA5NMQAQ2hEYUbVQHUpA",
  "key39": "28VZSTnnXbd5NeB7eB6nA2VTzAtZFMYjL4TAXreZ3rumnMSU7HQ9E6A82CgxdrKnnpgKyZkHV7kTZXzzphhosmE3",
  "key40": "DFvrz8sRyB1yGkMyyceKmMWxk2ALDWBB5YNpVFXr9fm4g2y8aJdsiT54wUBTT1RasNcrq8fhhJDByucLZ8Kr6gG",
  "key41": "h12XuBatW8u9HiqobdZ8SSiJvs9KUWHrURi1tcaxsdiZbdc9gKzGFz6x8yNdLmEr6Q3kSpntgCHKHm55ZvoABbb",
  "key42": "i6pj4CVMMVHcb6krdcMw1jNNa1tp7Zhy76L68vtetpzwRuDvuF2hYZgTDCKD26Wqmb8DdqEocmMY4LpaEJjFgvh",
  "key43": "ky8usjycsfeHwWK27M1E9uZU9LNHCtLVAUPd8HZyN8ysvxprBc2Br9YXsJ8Hj6LtxeRuSrk6zwgvPRiQycQQP7S",
  "key44": "5Hg6RKwwx76v5W37Wdsbk2pwnKRKzAfTNuTU5wdKUGe6onvrkVpFoL5ASrEAtCp7f3nrF1srmLbyDdzP2tgsGgre",
  "key45": "4bdDMU9mKJZuiwkoyaipM8GzFU4TArGGCP7g2QxJpSGfaZSYPGR8i18fw1FYN6R5agRKXHahPAb6egB5K3F5mewx",
  "key46": "jYh5jeZaxeftkmr47hDD9HFPKSRd9Zy7zX4czcFigf6VkdqrzDLMbP7RqLcGCBcQMpDspdX57SHqHS3aRwEWzhh",
  "key47": "4CMDLUugWz1YMGdczc3M7LkR6NyFRWLQ9PM6RwLDa4dYAMzBnkYoPe2uHeMnHm5EfH9PMGtjv6DJHz18vV3oxv8s"
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
