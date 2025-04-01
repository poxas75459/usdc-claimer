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
    "3HTEzNwM6oXiCyNfy3H6Bm9xVQJaMqxJ4EtJbz4eSC4HiM8MR3VFfQjKqF6rNbu3bLaNTqg3HYzKY81EfyRbC8d5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61VsWkgGrGpry8mouvKBDQDsDWoQEQmMw5N8bD2bTq5WxrhV4fXvSoo6wWSMqNjK344qfyNb5JdyTQUNfaCTWKnE",
  "key1": "xnhkk9EmubuUmriCLvUFtk6JeS5vi5J1UoZRU3TNmqUhkwQ8kTtF8o63XKGNZcsZCerwmUuTHLfYAjCRmCa6vSU",
  "key2": "YRagwjsYzEvBjQpMG69YhePVc59sNtPpxBNDrQHF2dJox2X4WAF8gdWyLhwWWHyQwXxg7bGvwKn6iXCh8ixiiJd",
  "key3": "5TMi9S4nNHpFEnf2FLwEeUUyJwAiYp5DMfzaq4X8QXQKUA3AfCGm7ZR1HkGtciPuLHTbmKKB1upjMbXouNC8zdK5",
  "key4": "3HtMoxkNKfiESVz7nJmz7Z75gEyJE3zCCRTysVAM9rRAB5S14D6v9XNP4K7neYGk1mFcGPmqPJaubgjL2izEpsr8",
  "key5": "bqH3rr6gC18LGa2jvxQfYJr1vWevWpCAy1YUoRb2v4huN7fFGryEUqCTZqqCvEQtbp4zpRdtTkGAW88dZPq5Frv",
  "key6": "5WPrebvFS2idjh1HfriRxCnKjKYcUExaCwKuXLuNq1CSSvLW99WMXHuGXCHAVczk7tHqWU2dXT7qsmh75ZooF6zn",
  "key7": "4w5s2KyoWcDp4ULLVbCATLvA3eVDKL4cCT6CjwQzVBkGmudY99VRx1b3zZzU6fCRNcQZc17sF1PgySTRRpbNCkNx",
  "key8": "3WbbAJLVhqBYo8D6462w33dcJY7iLWUaEFM6YDYHDF5rQbDhhoN6TRHCpP9uTfZpTWtKGWn3eRQQjXKns7g9YuWB",
  "key9": "45yFo6GWQXd5n4Aa2AW2aP8gdpUaeXBJA2qJR9AJMfQrH8bkJoFqYGR2xrRY9xnLrw4nJmjjV5qyHJUyGAXDhhqv",
  "key10": "2Yeo3adK98LrX1hnSMyAHARcv2pBXSAGsCCwukHWu2nNKLmHDMSNfSpiDdQTenMZDp7u8zAeAeJjp63ncdx6THCq",
  "key11": "5PXjdFUiyhAQMdQ9q2vRe3anT45KpbdoMCyPM5wx1cZeQZKrqe9mSdabaTifi2KX3jJWGT3Enzwz2v7REQXiuoeM",
  "key12": "4LcsLUXNiM84yh9hbREeePLHTvupbRssHD99tiLyiH7d1gKWJHP9pBwvsNT8LRaWx55YBezmSXqGDS47qBhhxStj",
  "key13": "5fRoN47TYkPkKHZ9hv6eu2mWSFSz8uBztTk5qdvjam451V1f25kZiYFhLAmycBna3wJYr9iogDZ1Ctw5djjfg2mq",
  "key14": "5UySJC89TMz6U7JWhpgUbEwEDymUmcC5CpFyFPE5epg9P35dWKBC5ioFuM1CnZpFn8ci414zV622nzFrv2p6Fbs3",
  "key15": "t5waaLZXCVuUMRBCwjRPneTEiiEZpu271fsfpp4qGbKxrekS9bKigA7aHuwpRCqfxrYjAU1Wsc5ouq1p2ge4jhB",
  "key16": "3M8nqpFBdx7UiRe2BBWEMKBKMDVtuTQR65SFdrKykRnuRJYVuFCa2SdVXHAkxX2ZgscfHpVtWtcTyrpqPxquX5wK",
  "key17": "51NBzJhvgcnqHBBAcWtuQh1Lr4yV2zmPDH8E5RLSX9gsK3Sp3XnYcLvCizHh4n7axFRZE5As7UCfY3a74wHR2HWe",
  "key18": "5ucutHzxuhxTehkuuJcWfDdPwSAveZY23NRGCWbBiqHhXNpJuPTdbXJGzMTZCtuPQkZ6HUs1ZLCp4p1KsBYR9E4r",
  "key19": "295hH2QiaVnadCjur2fHP9vB58cFwP8bpqUD6nGKBdqNFeqSXisgSSCHKi3FKDNyqgmPAPT1AtbM3f342ySbq1hx",
  "key20": "67CRfWzUaZnCQ5Jmrx89JcvX69buBRZGUfv5URjc3A4Y2yN8pCAsBZ2iUDVbfQbDkv2nQt6774RFwgoqoxVs7aSv",
  "key21": "2nEr8BBqqeCw7QjuMBihunijTvx4yZksXdFYctbVD5P8F2BJQzNqewXJy7H2r9VY63xGLmAegWm9ij1T8b8Bo27b",
  "key22": "1SaDRxr49EyFHiAgBVRkRrTmqXymWfmkvAbWwUL1gqTGsC5LX3aXR2m8NkpsRE9DT1R8wsTg4qxccgrQyCygNn",
  "key23": "2JEkfFUbTRAXcJ3cq1UZF5WaQARVd83ieZF56mh3vR34Fri9ikGGrSxG2dhnUz9CKzWC7NSqmnNiuNRk2cq48z1y",
  "key24": "QPtCHijynkQrwQJk24sEi2enJL6Z53KQnJoQganaH4NJVkdcrK46ZfhjscfkawKWFzb1kTFupziaCBjy5LUoWjk",
  "key25": "3ytWLUiKucPgrM4nJhDhLXgNUvKcSeC15jscVaDH2eyW6iEymKbu33u6RHSbswGArVeGa7dmaAuRPiv43icPxKZ9",
  "key26": "4bzSs3y9Fshyd9LHubz1CrW9qo7t8zywW3iyuP8i6hd2thQBpWu1WMQwPkg2tMAyvhFNRrSBQ9MjHNL4eUBMCwuQ",
  "key27": "8aa6iTvrsn7pPqVk5Wvvn3ZUDj2UXmpdn3XXPBWCw9tbP6m9pMvwZwv7P6Eznw52pQt9AZqPUJ9FFTbT82Jgxpu",
  "key28": "TZuWH9Je7oH75FQPdujDiQZEK9c11krHNkdUf6XB343mAyTPxM1cEwHPvAHdf644Pwge9NJT7LMVtbWnqtziLzh",
  "key29": "7514NYU595GyWpK9xEmmGSuFqUorbx7nPevJRPU51oinxTFXcWffdjcxsKoeXaCcw88ayHDU7XCdggen8su543H",
  "key30": "F9ipwVBkFqBZouiLa5DtJTQ6Xj3qZZLQH2jK1a1i6WiepWXJs2uEYHqfdrN8CNMNgn9qDAhSwJc1aLhV9tV6vQi",
  "key31": "Nt6gueAKcXGLb7AFtXcD7RNpoJvja9884id2TqKhny5rb5Z95Q3HANYXFe4U8Kn16pDndbXap96Vn9iYscPhEYG",
  "key32": "2dHA39yK1siP6jC8nzqjnH1RAsU7b15R5Przr6wt7JLvPcRam27mikyiArdZsXCBwPRShikQsq3yj1K3JHBc5joH",
  "key33": "4REL8GzyTZH4Mcbx8HWADbR3MsixR2Qxd5TcxihBh8bEU5L1rK9or5u6q9zgyuBjeCxJqdTZJ6g8T3HsD4WhtNWj",
  "key34": "UqNrsAMcQhhaGsA4KXdBRZvrQBRNWCnpYtB5Xp1KJnrGFUVcA7TbwELpgaHAybnEMGoxyWopPGepuvdssbbDb2Z",
  "key35": "evxNy3ZoNZhYaNy6KBXEpDB1gmLsKvYtig99G1WLny9YxA1jaVYh1CNP3cfjQXjRijAbBK8f7yPMQHqM57oNZJZ",
  "key36": "54MSP3ujyEirUgxr8E8gdgUbLV26jNFSswArRkCZ2coPsQHnJkFn7djfDmsomFaaMFsjE7FMfKgB1oCCxB9Bd3zv",
  "key37": "2m2qwMB3qseJBy64MaRyZv4KeuZfcuB25NkrFYTJ2v5GdEWcCWJkBoX6zYXzs6KYJkBKieFnHTwXCYdnCwAmxSaP",
  "key38": "4XLBfvutQDb7aG8kxHmkAK2HxHoXHReHY9zQZP8y54P11uAAnHcBFGwTLdpF5ke7V9LRrDWA4mGWccMKBA4Wpvip",
  "key39": "oqxeA6x5gUdeEVZqKZFxs861nU8JyGQ831jcVNYqBcDWmCPGgSAtZNXkK3UAWf88L2dZzAjSaBqz6ipDTMwPcRJ"
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
