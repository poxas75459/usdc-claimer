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
    "62sWftYtCX6Cq23ycad4KZo9Da9cYoZ4hyKJS9rRN9yBnrAXr6AerZcbQVXxX5rUBmBrebAWLPZdxwAwxGzyNrPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iGdkdR9DyzdTGS6Ciwf6hMKavhMTJa3tgjX3MjdLRyTX8G9kyWtiaEp9JTD2SF2D7KoRiAoUpZU38riRG8cdgYn",
  "key1": "47JHZxGqGiSQFC52Tk1rShRWBTsNbM9QaXEtZzP4r32NjjMGYcVnhSoSoaXTPRSik5et48rZF5qGG51n4KPQrKYi",
  "key2": "2sPxthqgKQZtAHhK3XAni5KjcLtpRHFbCEDuH9ugQgiTqs2yEeNzLkGCfYWv49WYzwZrmmNSsuw2BxfT2cumftZE",
  "key3": "fWVfJo2nsDkL8gEvNqrsK3cFy8Wx2Ms3mFvMEkQm6MUwUuyUQwA7PGtwxmeZojifQ7ADrH1j8i2DzLnSMzpJDeN",
  "key4": "3Dkrh6vnfhrzmNHeXbJp9k6eo9A2VC9qFLYzNtoD6meDGMo8spJhcJj2fz2Q5CbqmhBApzsA23G3jHDgJVS2KnFk",
  "key5": "31a2wxnWDrjpf41JLvSYSFXzrzrq7YanHKjDnjNAnD1hv5uYupwtF7VaUtktYLVrmAuMZjX6JdmTn8ZCQuXG76hZ",
  "key6": "R15wZSqS7CfNpnSGoEDQBfQ58MDx84rt57QWym2eneKUcFmkJScnEgbPP7M3DHiyxux7UPyuiEckNbGKEHz58qQ",
  "key7": "5Z415Hx1TzN7Huz2tqX5zovYTMRLG7FYR6ZjahWZw87vonTZz7suGrLyAcUHJhSugF6ZRWwh11sckBTaS4S3qXE4",
  "key8": "2gFkR31NFHs5DvvyCCCevTb7AQjdBAmZuh29GtWyj3Z5SXYJNVbsLUmiGKMbEbg6pUzTLDkvNa8RXDCiF22AgNwF",
  "key9": "4oZRHBhwo8dipLY3GvFFKTSxCYpnNjAPFJkrW9xjsUbmXuX1gusp7K9Mn4dbZjPa4L29KVrCeNBCbMfLe1h5BgJP",
  "key10": "67j4fBriA7osk9DXdgWpPv2zFvnz1r7D3AvuHvPpgYJopdPmFdBLCBW3mZvtqGNJB6bQixpghUPkHsercGHcmcov",
  "key11": "2edb13mFdpGMhg9fqAsvhvAXrk4NqdAnJqhuxpibfCTsYu6VUyWPmnnvhWXv5A81tf7TrUpuEZT1jdf4kZwib5VW",
  "key12": "bbqCvXr1i2b8bxxnK16wmDLGupTrQLdFapRRLCNAuS4gAL1bTVVwjYMPvBa2oVAkTdwA41K481MN435fcR2VY6D",
  "key13": "4rk39mWEJnRaTQWtGdA7NXeDjcAmkJECXjof8UQCW5afBrqyw8CnzgfjhU9UYQ8UWytVgfSDudzSj55dMQNp3p2G",
  "key14": "344HvkdyPnZwpwojzgWo4FN9MhuuZXD46eyLeZJeYzD6L8YHEow8L92X3DTFMjGYB9PjtwSf6h5bzuaPykizr4dc",
  "key15": "3ftSGnUejpiqRvJrK8K8jj8P3RC36kGTx5waBBpMj1WgbKjhqRpjwG7VEeVrpJL46Lmo8Fj5fzM4zScKGdknrEC",
  "key16": "9QbTNag7vLxuv1Z57b3XJa941k9uQ5jGYCJZTGiRrMAR3tqeDH4cSL1vCpTqQ1qrUwDGfn21LhsxGiGXfbn7hUu",
  "key17": "5cbBrF3hug6iRRD8EBnc6axbhP74rzFGZPc9zRF9iNdjFrqbsfuyvFAnQjhJMvctaAZh6s4WhtvYbNGtcdHz6wNi",
  "key18": "4E4ffmbAL1Wto8TxVHUXjfbSbdBPuq2wxQhYURLUZzBRDSpW4xhW2j6T24wae4bA8Xn9E6THYwLe4Jo4L3aWVWh5",
  "key19": "kTCw7EZ9QHL9ZgC26NkAbt5WiXhFGbSNZg5omE9JvqiYNMtaviEz1cGht2sKFFgJYz2kfHKsHf6ugAo9d3kLKVi",
  "key20": "326JfZ1fFh3q5S4AhwTFjE7DEDmv5W6xiAd59uBTMabM8Ma328zXrBiM9BDLjvJUXkCmBVSi4bjrFgnnJZrZtUZo",
  "key21": "2rR5HtFXzaRcQJLLc9AxkytbBCmHTtSgbkqeNrFWPYFuetFNGhCummNsfjMH7UHxaUUQwGQPZYG5Bzjp17yCp7rM",
  "key22": "23TkkFjnTEneQ5kyMcvaDqsTHZHM4SwYsqcpZiiSVbZExzoQqxv1RDcBrUP1wvXcs7sTwJk7yU9zdYVrMHyjKvbs",
  "key23": "5FMAkyEsYVdgBX6sx6wSn4JQTYtH1kWrPfQhymetcZycHGippoyFSXPJDkYp4sEnoQfuNgssZSzUt1imwyirCig4",
  "key24": "3ooPCKoshh8q1XVR3jwm1Es1ufdetGeLrN5UQZzinsciRDxNRrNiTn8tNtMC9TtffCeirV284raXfUutmN7iFKUu",
  "key25": "3P7v4PVCYFb4jULh91Fj614kfnGA7FNtBtzs2RfhXPEJ9Cm7oT6w3nqH64eS27KxNAsdCGeejb5dXTqGin4fGvaP",
  "key26": "S5bHvasQgGUbwqtaRqoeWCSc3aSK6CmhHCJ5FFrix19GvnLZvs2AQjVPmVmTXC3jMbrL1CEjmRnUGCGH9nD1Wun",
  "key27": "2hea8rwKG6qctU3BA2B8BFfif9JbTSza5koztKQCZ7VWjJauv9TpdS9UJuj3sR1Mknve8J6GHCTEgczUmaRoW6ZC",
  "key28": "2TaiXwghtxdFmvCkf1EKTAVZGvisk4ZYtpwY8jFYGrDoRMXyr6kwCcBRS2JYtedbTWVkNhEamy8pGiZceyPFMhDb",
  "key29": "5gDNCtMHz8vmM2wYeF73N6V5WfcmXLcHb39JHoV3TWzRgHjS24koXbm2FmRdqy4d7cKWTudvu7xTF23kWoFYrw9v",
  "key30": "3joBZyTLyqjgJhUdt963XVGUqV9G49q7gj37mUuwWPMC8h7XcJqUB15TVDNnt9qEipqM8SNWdtmrPhWLcC2Lxi7A",
  "key31": "547wnXrJDGsnCL4J4qFBKxiJMeDqN5dvnrShbTMvHfNWEsGZPDUYVmpXn8kFGJFoiq6uN2TGkPzfRePUr4fsMntF",
  "key32": "KpGUvBTUbz6UfGeWbC78qkoEcMTqbvaA3nAnREYFUmMHnx7xBA4djj4azbymqYF3jEJADLbJFqWrChkiD4mG2Ra",
  "key33": "39LeNR1szko2P3HJTNQnydKwehQSSKsVfoACEAhhhqRizTx4eUTbpfEQC5iaZ3XzLrwiaS1FVsJhrDnrYp2D42Pr",
  "key34": "2ya6R8RxJs8M5gT1LjbCBUw2guQmNc5JN6kGsrfhwfd5dwKsvRgCrtYSnboJw6w5TYvBfhMFeGw7CS589fu8hmvJ",
  "key35": "366uRBm963KT7dd7vt8DhZYCVXrmBtTX38Sv6PFQCBMnrNMJUHKwZCEREE8ncMH1UKK8gCwCvDLehf94JGkYD1m7",
  "key36": "4e3TAhjsdMUgW4f4vo7gLmB2jVpiubeGUZHNYXEmJkLdg81DqhHVTKa1BK92FVUfLdukMK2wDqHMgML5K6ie1xKc",
  "key37": "4FoigPKdG49b6GrqbCkVfo5A4qEEYGH3ch11iJ7hjhxoRWqwrN8PR4L4y7rFicYbszMHBcxeiB2MJzUZ9fGxifQD",
  "key38": "2LXYPNfJcsmCGWWLPdHdSz419gmafh2jyHR4rQi8ncD3iphZgSRz8uJmcDVgpoRsWAjD3zwzxW2PeMi9nWfTFVmF",
  "key39": "4QJ8idDkhZZYeGEQXY9RACuGYmVEmD6pW5qk3mYu2cj38zP2fcrVNooA4jDebAs4JKLoUtnjvZ7Jkyk8UTayLvvt",
  "key40": "3ysD34VbXEwepFQgS5zrVkmUK3SeQCPiXvHGi9u8ByBhSbPSqWHR3usZdwyxvKCK7EfTYE6Mcc8o5tKhjt7GRA2c",
  "key41": "53Bh2VpRRYpxhZdo71QwcACw8Ve8e2qGVqByHsGA4LvxBbwSRjAusQUG4geBMjPDd5hGB5su5fTLb7U9XWi3KUHi",
  "key42": "3cwTRzCuNLMkDt1DHwbJWhuKdPQdQtDjMEH9okUwLFA5RAUpEPBziUZJrXzGJD4EDL9yunpkHSu5Hfccc2rSua4",
  "key43": "3ECXyrUXPoUjcTuUJwNWCsSJxqtqiSxWq38PDWhiA42nekphniVgz3ghSFXmGwjGwt8uNfWXPCLi3F6NJzZ1ApDi",
  "key44": "2Gw72ksz4g9oe6b8RNz6nLJ2Xi4wD2FwByrjm317jKKc24AtQVEK2oJh7KLVuKVZDUuUeYqicUxQtGVMWbGmmX9R"
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
