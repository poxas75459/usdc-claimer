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
    "5WioLKC2dwg2Rfwrfuw3QiwYqNsasubz2Bpe2FDGHgzdq9BcsDuYsmCNhwNf98cxknEYAEyZK7mDPhYx8pCF4NN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rdgL4drxPcxSKNfJC7LqM598okxpgfj9LJycfamet8zgRcjbpABPaAyFNrSdv722WDzgPmhHuo2GMX1ESbyDHWj",
  "key1": "3MrviAEDmcbfn6PJFdSKrPa72f41eJLKJ4tm4MAsPrv6Ez9EZb3VK2ZN2c568T2Rxsdw6e7GeUpTkpGF1TWG9jrS",
  "key2": "27CX5Nxj45wJ871KmvZzKy3u6VX7mosKrLmqkd7yeYFNrJhsbtvYR9q8RbXyL8Z6T5Tpub8VvSousN2K2bNSh1hC",
  "key3": "2aYf5caNMvv8ybS81EoniEfsG9DHnbnmFAtSxkXkfbcfvfbYFiRAkoP7Qr1o8rLektAuAqg7i5nZiiaKSyGBNaNY",
  "key4": "7kh1TsyVpekJXvu6t9VS1sWUKwpckceBn34K3ygteUaBUeV4PrJvvmthAnrjVQvk7MmpL3quVMWAzdE169rkSCL",
  "key5": "5DWgiEaEbGMQoeYpSNiq1vFM1v1cWU9YFsdJNCxnVcUaaErwVdmQs2jR9vVQAzrtVLZBqTciv8tkXEtXXLJxBgz9",
  "key6": "4WJ69sbAiFkNhV9P7djkazbQCY4wZc2wJbYWg5VCisDQCMZRfHGqWndH1kdiNDm4uJeZe89N4R9hocriWetb43vA",
  "key7": "21ifK7umQmGXKUkZ9LLF4MKqDzfnxSGrLsyLc9hJCQPZWDboXgzQdq1GV7S97MCrc75cjmSEx7r6w3iNJDSTWKNz",
  "key8": "qiVzgGYQ8zTjsT3qCPk9VJLp3eHVMGMcmfYwUUZER56DWcXJiCev4SBFa2EmdebdkiPoaiKF5WmC4DXWV72zqzh",
  "key9": "647pVNiaiYsBaVfcpwJJnNYNucYbSBodjHEgBcmfGDpJF9KQ78MRLPVFZiLuZpAdAgT3XnnGaxgdNm6GMaLJjkyG",
  "key10": "3vZiLCSjTZEE6hC5cj8sySgasHJJUKH88MSEws6amKWKCibxGgqzAT7aBxYG5oUGyH9CCzAsMqunb7LmuxEdsRCz",
  "key11": "4FWbyV7LGKaSzwB4RZtey3soZUbqMkkgwpFK49FwAC3U9CUtJznGiuM5Y5aAQmwNiohNVeCDQnEFKq5oXBDeJgQq",
  "key12": "3PgWeRb3QpkuFtB76BZbrgjb1BixLAoKLeobdcAGofVLmovkURGa2xEwV1cCQ8zw6NjRSJLLGzaJnumjLiSXVjob",
  "key13": "3RR3sngs4cAFATwfh63TRMxZcPZ26hC3H5pukPkzjphfB3Bstp9CV4CdvkcmGvFimU45965zwbKZzLvjLBGAJjYN",
  "key14": "kcTZnwunjgHvYT6xVbQoHgexovXmuqGYT3Vv3NsRi4pjStzVg6Kta6YrscXW1vzNpvK3Frd9gxvpmUBP6YWUfCB",
  "key15": "2PM1CuWPTKcKYhiSjE6QB1a5UToxRNbUp7pEnU8accKCgFH8DzRaZKsWxt2U7sFmqsASCu4Yed5fT2UVEw1RRHrM",
  "key16": "3eZ1dPuPUAxVbxx2ncaYnnBy2yH3Wr42M3L4V4Ztm4594V9pKXgnbZ2ThsBb1o2EqmXLWWpuw9LXVHRUd6nXLvxy",
  "key17": "4pGmKW6bzAkgtuj8qEkszTqnKAwREs6JJGbZdSGCqL3agSRfycSgHYSYujHBKUK9UkKH1Psf9fT3CDzLaWSFQsAa",
  "key18": "39voVvnHm2f1RcgzXTA9sZDdsm5tjqpdxykFrBaQY3qF62vhMgsHAaUdeZd8i2TNxwpUvnA5fWcbbqzSEG1hSTyc",
  "key19": "ipoJH5fUgivaCY1KYwi1Pq2oir3AUJtVavRTA737Hw6tM3H2fE7qbxnxDUvSien4pG22SAEStFPmkRgG5bAbNGf",
  "key20": "5apoz4sCykvZ9yQ1c1ptyHsTCcuBZYeREEqXVvumy8mCy5FoFD9P1LEAhFfGEQz1poomPiAkS934LgexXAnH2iwK",
  "key21": "5PLkEaENsHE62WvBAbEeqaxh9ieuh9RfpncZdan6JtQSsuAE4ENAqU1JmrdFwqA87AfR3zBuknZscKXTZ3GN3p5o",
  "key22": "5L8SVRSZTBaxTV7eDqeF2KFt8i8HngvNyPJNLJxhj4ZE7WniiWMRjWYMkammX1UGd9hn4vfPNvyUhVwbMPUzs4e1",
  "key23": "Z2mfSAzobUwUrs6M6MfCgSt5SPH1QwAKNPzuxFT9TCUXWn87mvgdMxfJ3Fy7AcSNgxd5zZ4HX8JmhHxJZJMv6dq",
  "key24": "Ue5xz2xzYbdyXQ7zmMVpn6ZVDMcJUgtAfkCf27V9D4NyQDwwDb3n8gpEFRDHjrY1AB8T8WcTc9nZ5At4BLyxkH1",
  "key25": "4jFhRK5svKfktXowtoDCdXfnqsHkurAoaoQWQDrqREJ8fdQeGhJoLfhR64bYWUiwLfZ9NdoAmAvPC2Vy57osAGgS",
  "key26": "4s4oVvTaavX2SuB81ZscAyH2q8rdWMhbpiwPP27eh8T6SMFGS6rY3SZxkchsdR6cAZFQYcRCBK7zojDgXYFyftT5",
  "key27": "4SAFqRDqd4S2Ch1rLckwcpiF1N7enbPd7tdrc4cJny5wLkoFdaBHu5QQtMVmMonLHkDdHHyEouMaUkmRBQntMzUS",
  "key28": "51QfwdfYYUXSibSjVbGS5AdY11twr2ZWKpkrhBd6yQWwmJyAErKrjS2BdhHj2S1sMVxambWg1zL8UJXFiyCyD1Bh",
  "key29": "TeEhnX2XGHXX4pFZifXKNpzCRhvmsqWD6fJLuhde2uEpQaML2m1pwZcXgRBgJKeNMCBw1ZD9Lkxhy5UWm5PW6cZ",
  "key30": "KHzzHJeE8wRg6U2S6GVfvPMhzUsWQZC6ss8bc8cpykm5tGQgZ7ShspTwzzj7vEdNz7Zpi73FoTKSzJmMSu2G9ue",
  "key31": "5dAXVfY5EujJD2cTpWCiuaWyRaN9Rre8nrvAtw9YB1h6TudRAfLHY7ZtUSJFjUvY2HuBGt9HeK5Tixdmj7Erg6bf",
  "key32": "3qVKojbPHYFpx2zyPgvQWq1J8AABfXggXSRgiqEsCxetvV7UqRsdP3P5f1GgLeNK8QoKeTvP8TwgHx3jaS8dqxd1",
  "key33": "2DqXVTjcoj4Yk6cBkcGX3AnF6n93fFz7XLHdbsQmdj7Xe8tNr4kzXdfbHLeqDEjWRBVcvKbwX4xhnK8ybRJZPBE1",
  "key34": "5yxKuyaWUDbCkmTYqnF4BhMrRVdo8YiAnPEzzvyqMNnBEoy9s61vZs9ADgXLk7k3LVgUzdgco5oLaFE3TyCkdni9",
  "key35": "3aAwTUfykXYN1YNGYe2H944q3znyjf1TrHeoHfgbi3VfYZgNoi5QZ9Es3tMxR9Kz22FJ21NK4rw5ruFkiHXCuqZ8",
  "key36": "2qM5Kdn2NAEoLYREJvTpwURmvRYnM1hv82KdmYVzHERbyUDDSDRPsGjSqVzs6Y1uMLnbP3PjeeYh7sj8jZJpbyh3",
  "key37": "nMnWFKqjy9v1zxnGEpU5MtTq4Ee9cC6EsJbf82cRHtg6xUXoZ1ujoDAPne9YF7AqvzYiPVdK4SmW8uGWeeqt1RF",
  "key38": "2DA8LBohErgtggv8z3hXUKh6WcTp1N52UwdCAydz7CdZ2HUBtqbroiTAhZR9cWUUK9CP8n2mt97ZPGHvzjise6oU",
  "key39": "4AKW675JGwhsRC5jhPbgmb7p93YtMiem9NPNgpTKbB4XuSfQjbyYoSDnMF6Uhp6oJ8qmBbkuZNEfwK2LVk1V7GcK",
  "key40": "5M6FFtDcVTvub81rjrJstAfGrPsuQ3Syy2SKFfdwnM3i3Q2GKvqVTA1V1ywKiVwcN4h7MGzpJdNKpZyTuxzWnRZH",
  "key41": "diYGneD8o19L4NRxoj48n4FQERcmGNWjjTVxgizYUp1bDfeC3uHCbNxLm1j9YJgwW5vVrtUUW8xTe9KjSohwPy8",
  "key42": "4sAnLiD9s1SGVXMtpUGnZ5BZEWmjEQEtke9vmfeXtUMw7j3FVowCesKwpRt4fwMpLaF4UKyrEKBX9AS7r3BaxChj",
  "key43": "t9XARAhaW6nLYpjXimUKgVGJv3Kdpn5VwsVYiNVcfJ5Hvn3aUCcXbudkeo6VE37wJeehWtJwvYN8KoNWehwSvqf"
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
