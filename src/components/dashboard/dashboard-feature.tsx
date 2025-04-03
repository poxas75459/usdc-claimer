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
    "4tn3D7JNG8L3kFamMb4wtn6rFa6kEUW1P28wqwZXna1uqevYcoGq7Se3cGSKxNp75DAPQ9bSuw4Fn1adQTQUHnrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLJXZVwvudPngCbf4RogDdyUxNQYsc48SDRETJDfRh4n9nGqhj2y7EUx2VW7McM8G2ktrXRWPt7m42vM4gRr1Qg",
  "key1": "b4qpxQ8aa5eqMGoPtTejXDKWV2JWa9mtKJiMdQyuheY7opJXtQ7XvxcAs3R71JACTnLQJYxrzR11oc9FLFmHWpr",
  "key2": "3PCs1zWB2id9TQENULNiB7SySUtVjEuKB7DzGtCUNVhwRd8SxtSuPQCvuDmBtXhMK4FmWPJ4Z1T8wQqjw5ZhPu26",
  "key3": "4FzpyEsk6UDxdoxeH6kdsgG3Ev5q37aUCaPEQzEMTvhCoCGoPyRKetH5oYQh2npUspgPFDUeM6R98LsMekESVXBk",
  "key4": "2Ld9po7oVWCA7j5FtBSeGATgY5RQbjMCmepFwJcUnbyrsagX8yS85RnzKCiUMHD6oTidYXR9gky5FfRApYfZVuWa",
  "key5": "4xXdhgZdfW6bWUxPXpiR2n2RxFqeks8PDPFpC1hPhx3x33UQZuun5UWBqX8ziSRHnFQBdqLQhTerLNoQUf8AJLjv",
  "key6": "2QPdQD8YkGcRG5uKgES8r4jS1qBTxhzGrtsSFHt7mAkK4287U8TatarrR7Tt4xEWeBQeHR8csCaqm1fdkhNEc8EX",
  "key7": "2qYNkpsc5xXMuXQQzfCTUeX46afPwdf5mcnKTGwEmmYZywPbnPpCogCGjgV6UhcmJGY6eHeYviDNBgPbkx5pJ4Rm",
  "key8": "2PXWCfU8ehmCDRcCPcxcRrFT4qFZWCsiEhQpTSmKZQiDDqc3efzAMzdV2i9oGPA8qEcPdShRtsZmqshxkwdbPuL2",
  "key9": "5CHbwGd5z7SR188Lmb9nEFz6dvUyE6fdQjqT9NkmoyaJjbc47LbpLxuYdubkUbxLhV9SYRvmkdqR2GN6Sa2PApaa",
  "key10": "5UmjzPeg3zXFRDzskyFKWsS8yk6DRpUutv7LiwaRNG6bxftzg7jaaFwRi8w9WiVSSjYXVYfkbapdbi6g2uG7XZim",
  "key11": "25xjkccAywbmp7qtf7YQZus11PNQHUrDb8byfAKsZDbVYX2yRU3o5VNfM4jkkUFduDWFshjKGSWRe3ZzD1rLSBLD",
  "key12": "3usWA4zQG528Xp2i9PALbL57guby8iHqsV6x5PgKmeDRisf6p6zQCevwKpvvUYyvnhV6MDHF6Uo4DpMXrRuyyG45",
  "key13": "5X2tovW2CNVLpBPs9EU7PSUu24nJK1EPeq8BBQZAptoYeGsRT9iBr8VCYkGBQZ4QDNRpFoagifPHwpsaXdgB8QUM",
  "key14": "2NQv8Kmz8howhWWEGA9WBL459UPfdafqktMqmpkKqQq1FrooyKHda2Cj2edgr8oPeYoJe1tHfZcLDLUbE87mH5LN",
  "key15": "56q5zZW18K9XP5EUads5Dr2Y8fHTJggvtgm8KJwZfwqaHmFL7k2dfQg3uEQGeLyTuCEMcQvcBTGGjX4bY9wNCy74",
  "key16": "57bAkNC8YVaxTVHd3eStKbcSWe9H7DzdbsWgzGbinNgm7DkUny12Mpn6A9LTV2fRJwGnPaLiKuRkggJukEXZUXRv",
  "key17": "Z5PJVzPVu2LhqmbjZqvTfoycPniwwDMBM4ZiKUxX7Wr7zaDVMfjA9afUzzSwZVp8xg4XoXDLXrxwkAGMZAjbscF",
  "key18": "5t7zUAzYTAQ5Vdg4hNgcrHD5vg6UXfCoYBdR1ieuuxgJ2fxErCtNkxbCj3JB7BsVrRDzuAioUzb6L8Pux1mZCuYN",
  "key19": "6vzjmLkirBLJSsrKxCztDhuXG6ENR7GaMrLbA2HuhX9z53ho5AaaPaozrnmdKmxQpbnbSXo2SqM2gX4TB24F3bX",
  "key20": "5uHQgnovNAU4UzixJX9mCQrQvxEUFdSo26LPYtKTewYDDhffK6z5DdRSxKZdKum9oXKeqXLhikHc6bBVi3qEhRNj",
  "key21": "4qHZXnpVp5za7LKKuCQwTfC9f9vkrdhkRU2W7pVDb2gm129SorVZaXMYh2yg99kga3er6QrC1JuAzM6jbFZ2XQeX",
  "key22": "4sUQ9VuEAqMDikgAjPnqZPTDnYzsH9Ug433h45dagHCdpvFYWwyGRw3Y5WYXT4oqaRjX3EWa5VxbK4p8VLxKiiS4",
  "key23": "3d8E1BwV6wgm8xVMDkYvKgNdjgVjYPPsCZJkbGrdj5tHTKGh2Uej2z7bFGQX48XNYj4a6uMjWufKwA7BgL9PVkaX",
  "key24": "4zeaqSwS2r9Y99wTXNqFgjaKny4vJHDMM1VLe6i3PzWqFS2UCe9Q5f8bHsMLD7NFgTySmLAsHuJ9TBjx7mcQ22hK",
  "key25": "i5ohwvJGunTmLazVA6tSuTaVo3uMEzvPooqFJzxmNTXkbQaWWkigrgHDy9kWWWo5CRPGp3qNDoJE9oRvxxwg1de",
  "key26": "2LKSwSRV9eqfYBbEH2okwQwGDAxN5uPWhZYyVnJBT8LrkP8tMmCMdJeG6nhXePgbac9XbyvUXrPfXA3pmFWjBsnJ",
  "key27": "6UQwhYotjeWA9RMCoH43piuBQRbrDMp3yriw9WwgeqZHCCRuVxKxSjP71vnC9kzA6gD9fRoad9jVe3S2zp4x4eC",
  "key28": "5m5GPcpqRJvu3Efyz4Rx4mR3r6rwRgAKkkR8aUHVztbPqGLh94SbSUUPHnnKkgvb9BH7GSeXS36ixQvEV7mmi6ue",
  "key29": "23ZMD8socmnXPn6Qyvwz2XxbrhBY5VbJZK2sW9qhrwqopDEcexzeoQx8qedHf7t4uWn4KwJm1xeQUCWeK4Rquqd1",
  "key30": "44zntQzojtpiGUmppuiRkRrEiRkDdBCjKEafgiyhBUahgKyomB5L62W8f6SezdxuRFpmPGDAh8X9GHCJxM1KqxkP",
  "key31": "62XECXGwJDzApGjXHD6VTgQAbX8ZxsvrEy7tDyF53RNDMfnYryR1EWH3bnM1LRJFdYDrJ2Z2nokRjmUA3FKzu2ze",
  "key32": "5ZFmUzXE8XbeMW93KzA2nKUyvX4KhQKJmC3SGjJ7YsGQ1Nvg9YbnWTbeTdczM4GiSYhUER4gnP55TFoGEiuP9gwg",
  "key33": "3LV9VZ6xEMdkyx54gMv66izCmMQVNSNreqP94TUQFkMM88dFLevT1gECVzZQp3E2mZ5efpZwk21jofZ3Fyy4EkYT",
  "key34": "2V27LFEiksM8QUwxdrwfbQiR1tgDKJs5ag4yxYPH9qvoCE61mYThwuqYjDpzeBx7NJGk37aa47bpa4u857g2VyYh",
  "key35": "5CPK14kmYEEno2yxpQikrKAVRTpamsLF9HXHTopYLV6JrUp6592EqQExf959JxzfCGbadjChhBfSGxutzyFNUgcK",
  "key36": "2EnBNokkzf6DTAAaZhgGeU8SSK343zFqKZWdAWNRfjMBAN2dEoMETrVb3UH8W9VsR3pKE9Ntwr7ho1zfGCyCef4Y",
  "key37": "H5BPG89zQjPcxJYSLEhy8yhkjTtp1ZyyrAJEp7BjBU8YzZdkXs6Qj8RBbdg8BecunVPFhoReaay7PCMz9uLwBvq",
  "key38": "mSQB1TiyDJCYSfCL5baJyqnVfsNGhoYDqb3fWPCUfbBC8sZrLgRRzuKuBmhgn7nDBpc7uSmizTYhhzKUXcn3Fuu",
  "key39": "2UP26Pr8Eghs8PJjs3rnUhAijhrQc1xKJaAhtzRP6pAkoyG6V6fv8ZPFGMdhj5o3BckZ5ad8W5hCYteAfCBGq77v",
  "key40": "3Q6fceZmJcjNnhKiqSZhE3xuyubg4J9khtrXq1iuNH7CvWWhCFLagYYMKxupjRF6ZXe1hJ4kMuvHRgviemMLifE6",
  "key41": "5VT4Gy6ZGLrLs5ETPLdvUxPc2QUGqEmwt3p765UkLP5ttKxnj13EoroGsBwtbsztXEbt2dB1tT7efnJZKRbZZi1G",
  "key42": "5xryDW1NmToLqqCjzQP7AsTyY5cJzHhk43ztvcGJZCFrkM933uGytvWpEWj2qgWtVxDUY7nNNJUnTBgVcJL7avSg",
  "key43": "2ETDeDr8DdxL7reeRaaqK1BTB7AR73Xpai29HsBPe2ejqpDrp4uYa8CiRuuEHUsoiqLnafbYovQr8jUrkGnZqAFm",
  "key44": "PnSTfJoNBN5zpfBLGaEeLtwDZt2Ug2KqqgUKPEtB7HL76vDbwqvc2EKDvSfP8sdJaGAE9vHtahtSXsqPk9KhHpH"
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
