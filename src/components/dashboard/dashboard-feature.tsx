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
    "Tk1qJwMt8H9Hg33UnNpBc1gNrKhCCrdXHcYtU4nH6Ke2DgLG2s1qRy7N5SNHMu8VAnPAoPmPc9wgwQSTNc7Nzc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32hFdx3sBaevB4zR563n5XHnqjXoPNazx527YPRQcLeBTRDgyqphSVNbdZDqnQ6zU7xrtZfLqMpg48B4gAC4S9rw",
  "key1": "48bvDnf4PKuDMawBf2gBJrXNE5WGxQyxCEh35MHb7XfkmaYePW9ymibtnE7ML2GtXWkoM2EWNqDUijtZXGuDQvLX",
  "key2": "tYskFFxUhznkrdJ3SHVjCERVZXYUMCAsgd4LfLG7DgFdWxKBDUycnJoJb8aJzbH6BANPKfcPcpamjwVD5E6qVaB",
  "key3": "5PUKtuM5TQAjtnLbwrRJq97H9LJn8vQMMFpdtGWPq2BdmxrzQeQ5bUaWx6WRQ52APkZcJivp2yaigycWCtpyiSmw",
  "key4": "2Htz7s9PxcGqnoqE2h9CCb2oMwE3TVo5BBct1XiAuVaHsdmQ6LCj5AZnLC4N9LmQze38G9cUeMj5qJqyJ4K1zpXF",
  "key5": "2spxwwi2r4k1HKnSYLMSUJTH18YTUoCeB9PTsUw3R2VQBtCYwKhg9qpSzWVWxcjoj1iWrw6fEguu9UXcFkWkXEkY",
  "key6": "fFFRpmL5yhkPyZDUKfYhds6TPEMCPCJePQWsxJ5dMhVGGtAD8y5ES5xqF1sVutiuhERFvL4AxWNGzva8avRNc2Z",
  "key7": "3hnK1jDwuLfMT43FhLnMePsiqP9HfAzoZHkb8UVvgy6Ri2SYjV9pSx5nfqjS1ss7bvpgNjQLFEidDgN6bEZA4R5",
  "key8": "2YF2Yt7J1jYVaENdhfhyyES85R8iadboGN5FUa5ScqnAdtw1WsF598hHvSPWmg9J8gYUuyTutqi4AwwDxsazNg44",
  "key9": "2hhHQek7se4q1aJWY3PMmCL6rXPWckF6oQB44uyo3PXKHEtzHwxkyqYXYgsboCAxETPaozDS9AC5ZotfS66r4sV8",
  "key10": "5Y9CKh63968DHDcVvYcbQkJD7CtuEfTTWj1Asa7eRng5mmrQjaRBjRBNyaAoncnenDSwvwTLgRqB2GVYexzoc182",
  "key11": "512EZT4dFz3JYfHV8ATdFEVUM1kp9Hf5voEDYACfodxx7WAEDJKpT3sdFyf1scan5fUXXyKC8bPGVZ74TbYyHKss",
  "key12": "5dud4EqC4XLgUpjTVXXL63rVwScYaC4KBnWHV6FKyeogMuHJ6AeybDHmctwU1Kz233RaxunBBUzCBDPA5hQVTqhT",
  "key13": "5TTPHviebWoSTWMdSDryqeDqR7e9UGw5kKkAVPvJntUHu6runRUTpQ85d9AvQpGHST851pfqRTWEAUA5Jeo5y6ZH",
  "key14": "2cU56pxbeYWTXzwFfqdRjkkMFtKKbW4nBJqkgR7pG9MWc1XamopkTJvCCsxb3E1enJddyVE7AMLYFsNaqdCPvhUr",
  "key15": "4Hb3rLeqUQmgriXYoEvKhXH4AYNVbhrvrGvMNGZK1NdCFvt2gw1FBfENFTgMzvJoUQXphzWgXeDcUoK5uRJkL7FA",
  "key16": "3p4bEApknaXCjkPxpVw2m9BHRZFAzabdTBq4Uv57vMatUgzc6oYvkZKEcTFW6hWetz7RP2R9VCi6u1c3wx4PomNB",
  "key17": "2ML1mwQwnYd3KE5xgLsQKWsd9FvnnwZLbUwA8AMGkPnR1x8gybrUGSuMDLzM1jwEbgcGkmTExUhNwhe3Db72Yv2e",
  "key18": "zFuu13nQjxUgcQpPXKmsZuzWdBjsBqv97fVnzypVwvJ3DYSe1wWN7gnQhyGCH72hwiA7ss6RL5G4ePfFTsH8pdE",
  "key19": "s9g87RmYVxUP8jHmMT4prFTbkYs6TnnnSNpUBqYibWBmRKL8kSouW6RvDGnrpkrdNYqGAHHh6w6FqZt6FRRsF3V",
  "key20": "28caKXFpB7A17j7phjd1nhgs1xb7xeHS6DNHNQhgAujzRjueUXHbQhcDCJUVRNfSGtRDz14uNutRYwNAgWrt3666",
  "key21": "4U33yigd1UP6CwkpsAYCgQkdBm9REhbsF86Me4jGdFLxcuGhGciKSub1VgoDLmKsMpXtLFwbzELkxBz9ESjGgXyN",
  "key22": "3qA1H7SAooZv5ZoBCys8WYudhdS8MoU81B5jk1NjuTipsGebzV8MdifVKhj3QW8t4wQFzM9zKjG93tVXxfdbxMiG",
  "key23": "1hVBz64jx7pq49eyFsspoiEoh2cnkikVPEVwgzCnPcxTUyaZqMP3e6nmbxMC5oeBbFKRze1sDqXpHCR4E9dugfh",
  "key24": "3ASNw7W1awVy4fu45RKkEM5Lwo2MuRkUeAv2Y8G5gCRbFNbigq4BZwxDPgbgtNRFpJmP4uhmryqpRXug4BT9Bm2J",
  "key25": "27pjdhSCTCyV5GuLhsVcjoyqv7EWMKrZpkt8CNxoaaK8dV2M7FUY776zTyL8Qn3FfHfZCeUJ5pJriTSaDB2Xyws2",
  "key26": "43dqegpGFwfuKWGjFevTMNfTCjfPF3PKzqJhipoeUJfbigG6c97yTEGXYzwp5x2oegUMd1DLc7abVZPSHXLEDsLQ",
  "key27": "5qosdPPuNMaB2z3Dk7Q1Gm5kbrEKs5y8oZU3guGDbvjAKgyWRySY2FA1L9uAgP5Dd59s7pwRMAZ4JX1sNeKnHNVy",
  "key28": "3ZtWDCWBZNZusYyLbqgV1VvCz6MAnnFk3daXJMMCgxQ2qA5j3RGfnybmBc8LJHUko8ZfLASWWAnQidadwyWXbrxm",
  "key29": "2sYyboSTtpbLKmgH8saJVuqCHqmw6ENNPpFH3yZbA6g9V35mJA3Rmbr1nbXoNto5d5cF3zbmyESiq1DJRg7xHuMb",
  "key30": "5w5UHcRrhgeKFkWmHBUXc286d6HU8T7ojEZ4tUWeYW13CrJk9X83Lp2D36N1Ttr4uZThpr5zeGrVFjSihMNTtWwN",
  "key31": "gkQEnhvd243hZpExV7BA1Wj7HzAFnVAcJ7dnDeDExTj2LowzGW2d2PeH4dK5oHGpMjYQCPYTPMzfZVJX55eG2mU",
  "key32": "2Gac3bFQjmSN4fDdkVFAPZ6hjyPu21QELBcYSaf1A1MthBYEpu3DGqHCnPqmfgQ4riP7MHhrNRSU4t7ZqvVQfwSd",
  "key33": "2DiJACxivNyaogYE8dViTNKJBk3LLiwqzGi7qo7DgEL7cKW4wcSunTkELTgZghU2Te4nPCVxfXHTiEtdJJtEUJjc",
  "key34": "412p6jnSWDKq4hxZDfq6nbnKR1JgPTU5qHTr41LnniYp93rVJqFaJD9fXdvQJnYVYYGVpuT4uNqYHoXjydFXsPEM",
  "key35": "4qL6zwYm6iESVVSFcKsJGzg9698AFyB9JAFE29hhb9a8gbdEQov38iCKboD2PjFsZW5BEAkXSELX3i9wBiRXgGcP",
  "key36": "XJ1RcXuEy3DvMNw2ws6UxwL1yMXs5JpdkCf2uCPyUhH1WHTJeYvipUmGApy3qrhQsabohYHZvofhAi9MzykaQEV",
  "key37": "5pCHqsBg9kUiwPQWRbjNpE1jYimNAgfBbWnwjTwRBASrkozTdayCBTsKoAUZjk2SUGHhLWZRCqn9CeeWS3KGFWsm",
  "key38": "4gpsb7WmRrU27sVdphQsGWwZEXwecrurYmEh3qXKhunjnH1iYYpk7zco8nXjGYjoyv11Rb1YQfAng6VKkv1bsnRG",
  "key39": "22BR8ru8mbn9q7azeCZVAYGAf4UjSd6pjhegMAxgyysNSM9ER8ZCsnuGTYsSdZEbBmNLNDNqmA6K35Ycc7cCtCrf",
  "key40": "zeff2djmrCP27nRMyqvKdi3DgWUwo8HfEmapTbmk2i3DVRaoukWqFDtBP1keRYq5d1wQxsDqibC58nLtm3CtDNh",
  "key41": "3HZgjdZ6m8LPXyKJYJU7dBN5vaVYuEeekVTESXggJZbP876hEfUPDN9AdX55HRswH3vXq8QcpUUkugAjNaNcVi6m",
  "key42": "5UFkRKRZaoM4oq9Ebu1Gx9JoVaSNpkrtzQFDGmH2P9pKFt8xS9uYguH8gMRNUybWngMLwU72uvbxvBShPCDzNpjq",
  "key43": "2DxBrMYR3vVqqFr7dbrcpmPZCYzNBzhyA2mqaTTkGs2WbSCL5bivCja5cKjXjCRW8YPabJaJ1EzTinWbcY6iJoWz",
  "key44": "53mwz3g1BW4CjqEcs3HfesKNbDB8f7nn1qWmxXJh4tKs8VNPMQnimjHEYD1MLX15xVAiMZhUhQq1cKfJmQEUtzcT",
  "key45": "5Cw9BTR7nqcabA1YewQYq4Ed2c54dK3d9P6zTCi1LZC7D4Udns3dHVu57gdc9koPtgNud8YpEJn8FFsQ1wUZ2fTm",
  "key46": "2hyMH5We1ChK8XKhEA24VHV4487wHvHyqKCBg66YZ2C9wsVn8HEPz8jnKoS94RU8fxBym57SX87iFYxFWNgQ8vYR",
  "key47": "4pmvY34EWuLxpYMTtSXPBFPExozYtH4e9Mg7zpb1UwufLfhM9nJ1dtWQV2Ki9jNaghBBWN9rMJPE5erLZWvEybpf",
  "key48": "5nrfziQF4Fvu2fFLJ1ri5TkrsEZQcEdAsUEeHxZAYPHRDCEM4RPuA33L59Ab7x5biWVw1ZXFGyGAcHTGUiHbJGWC"
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
