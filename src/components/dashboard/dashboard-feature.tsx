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
    "2BVYp5kTzYvRjn9DULEvgSuU7nBDaHVdqJSgAzFUXaNwYkGGgz1UxassEPApZJEjNeULJZFus4TuX3Pkbex1scdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43yp298EqaYd4hKe1kQtwQmCBoJaeMKyNcJ3bhY3j1AjfWe42R6d6WnZZ5xMaxbKHzCjPdSRKmho5nPdg45RxJnW",
  "key1": "2M8RHnb2zRS46KEEpQEPAgorc1UZe19Cxncoc8Eu1tVH7dmkkFoaRme3XSq4qPf5DM8ggpEjg2Pb57tfd4fQNCZH",
  "key2": "3rbrUvqCw9AvpaUDTBmYVVXmB8SVjytXvpr1jUaQAJr58otnHYhFtDcHsEBH7ZMgCQ7tCjwJW5vJqRMPefbBRbk6",
  "key3": "5xtWv7VMkvnvngsZfZbihcDJXZekTAweGmPN1M3SQc6UkmCMnNmmu5Hbyq4y3bJBfPySHnwa55VxwUnT8eLiHks",
  "key4": "3QJkahmmtSPipD2vinWqPER2g6otizK68bMY9vJRb3GLkcRkZfh8iiSYhcZvdgv7zpkYYemkeGWs8vj2CWHsZKw3",
  "key5": "Mw4LJVW2saxYhaL6qkJMn17esjuHiUmU839z5D1HQjJJ4GVN45ZZB6Nkt6isjihLc54shSjVRphg7Fx5yxV13Jr",
  "key6": "2jV328JHcYtHyuqrUFAbV5ubMmwxBtPyYBnVTuMaa6DCTgKcPmrCrK5xBJX5mXX7ZXwiwL9Gfnch5SxWLnsYUpVS",
  "key7": "5SuHdERm7y6WRc6t7Qgf6px1gXYiFR2q5UoiKFXqAcYNAKPg7KDUEjbVNzfodveBVwEuydFJqJmjRF1LxdwgDbsQ",
  "key8": "4pdSvjaZ5X2as2Xc6dVPFDZcDhkXX4EebVyBWPTfHjKnaWGs4ngmPvwP6qG7vs1vJ6phUPBb4oMcXtNTkjvN6Vtx",
  "key9": "5nANrB9kKd3c21rG1pQ4iKic6faFJrRTJw9HFBEcm78TuzUr1GFxrRZsfQ2SCZYx85QxEcHXYwCVZuSKjUr4r5Ei",
  "key10": "5kKGwzM1HcaZLaTEBGyzEkEn6j35mck8fSPjmZZq8AjeWEnA6e9UG12LFdMTh81ght5tcjXQeZfNBN188WqW869k",
  "key11": "Bn9WL6cpw1BFbdWWHNd7rn5f6t1QnEXUT6nQE9rhTTCVzofqhEqpKpdBNHMZxhHf31PEh6z7YaLtb73VYPWQ7wL",
  "key12": "351vFB4JRrh3WpP8mHkfQn1LzadCiKs8KbgShvUoAqv7mNZtVdRaB8UsWvcf837z2Agm41cQ48ZzN3sGAGLefWdQ",
  "key13": "56WCrNymNXwJhFh5aCNewDL3D24cURRZhHqK3nVc5pP54KgFcHYxVb9YFZdFRvRTTpenZyXkKkCwea7rzV6FbU3V",
  "key14": "2ZtvRhpDjVSr25gMXTWkad8Ag5jyPkiQjrVmeamYcYvB3SDC22dZuG7gkfGfLJMCnRLtHrya3s9Uho2ziFFbu19L",
  "key15": "5t1BEWbxsqjjbD2AEagfisycg7cFSst9gvztjKeTBM77w6U18WyWn5b36riRDfwGLHUBgU4DFYeWXLPhhgMfftZY",
  "key16": "mS9UwosbARr731hjiytvz9G5fhuUrNWQ8Na3sDusTHs8A9uZxDS54MTv1vWHG4gCrnvZDN4xnGo3YZoDrTdvRBv",
  "key17": "2KF1aKYuvX6wyki54TFjS75N1enbocfeuyXHfoMGWCoHzCoXmgcBnooACjJ3oUDncBQcmSJeXaVFLApPTky2QJPy",
  "key18": "2ssrf5SHCzgDcMxH8FV3YSMzcHGg7guwxqspXgndGP3w26GADJbdtNH1ShffSLTtWxtDsY48hfHV6coHsoNiErjh",
  "key19": "5nndz5QaJdBg8r75cgcYe3hqckuVP9yf6ai5kHaX4qXHnfwhuYLz3okQE1Wgh5vGnku7UoMwB6BA9Vra3t9pKoJC",
  "key20": "3gVxebkpmkqUKyCM9a5t6CgPiMPUsPF73nKJJapXzPQ8tzKMQsiKmNhfqeyS7rTjRpiyzr8BXmGtKnh8UxtYQ1qR",
  "key21": "2UNSdBGJVLBJCuxfZBTNexJZ3LE25EikjdtCqPqtTgP7vpemswREs1bdTh49UKxpRXUt78PNXREauAC6CEnSt8xb",
  "key22": "37bwsswmFEUaMmdwqYd3U7y2YPzssg2fJsDirY2JxRpguMPEj9Fix9kBYA67UbcTVyw8qdygoaH9atQQGzSpB6ZP",
  "key23": "3ZJ8rRnCaHJj2LXzgTo4UEdDAMuate8ndv6GTkx97k9Uk9FvMY7YgNejasfFKKZjC2AuaFawkEAheLkZHrDcJSj6",
  "key24": "B6j2rC3xJ6hJuetoNrmcHqy23SAzuybc1zYGXaBAYFtp6TcueRdWFMiFxGRjVgqAkK6uufRmNLATNLJtAXZDuCC",
  "key25": "5Ntqv8cioaUyWJosHk83KYNvMsUABQXvkRdMDQHAaaLbf1oeM56XwSZUYsXM6KfKhyDSFBNoaBfKQiSUESEkwqaM",
  "key26": "jKkuztEJrp2utCAobBgEyNk6v7vq4UewqPeibCECe8kG2EnGSA5LoLY5WqxQ9Wzd4jQz5HZpheqm5VYiX5biHUz",
  "key27": "2sWCwt2DDkz4puFhZ2whJTo5TaUSpV5MgvdEF4z6BWqztFpanmALVYRmRtcY31ZggchTmEzEmrqSRDicd2NysZFD",
  "key28": "5hhzK2uHWu4CbWJR7cMndc3viUtSYUnAjJ1tptBPkyzwv8NB4eRTW7BaE66ZzpsZafrp1JuyFzNognfxZG7aD225",
  "key29": "4kgyT5pWxBc66viwEDxksA9UWQYi3reCKwqP7shSmFoLavXoE6SmtrXQZcUJgGgmDUqNF9Q3GveZMMqYJHScxhjx",
  "key30": "5KEpEFQ7knSd3ygYb5LY52hncgEfoNxwoqoshuHTLPtRBb6zaEtrUnvhKh2YbDuP9HvtWrWjSSNRSEGofiBaLFpz",
  "key31": "PYuTPPwVsVcmo4aJ7M1uJ3E9TDJb3e41YLtS1RdJ4i7H7erJNWR3ia4WpHS3BwCnWhopLV28XrvecWbCZ7Zpg5G",
  "key32": "4m9KFHDKWMMjRV1sZ1oYLxd2NvdSU7ywd31CUWX2DXidb5m6qszhKhQKdA3ST3knH9yLAF9L3yEbxM9nuCybyXqx",
  "key33": "3ueVzfDR1mnP5X4gvw4CzomfTvKd1KZ6N4KaKKC7oHf5xbpFk6sUj1iYd7ZDpKWYjpyNtGKZDx4gB28GD14vBAvC",
  "key34": "59m78Zn1K87bC6NVuVFHbzBHZiNpaR4ZjaoPRP29odoxiFg6QrjdtZR965TpF8BPcvz8iCM63bNoYvpaF3xK1TTY",
  "key35": "4TULoBHHEsToiZtdmSb9jn3hURS9Bf8EKZpfoHz7Awm5HHZfuv9NWJpgg4UiRQq6eG8XVg2hgQYcQY8GtSXDVThy",
  "key36": "dfgwkm6d7TtTJAZ2K6CCjuU4Afd1zdDR1q7Aa77EvWwpgbpqYPRh7XRnfKwANQ1XWyzLNQmdimwqvJpD57cYMzw",
  "key37": "24JjnpU9auCo9em9Bc54Hi2EGk3ujgCdEEG5Qy9FYRPxoWXztyZJKUMNAhH3iqxgVhb9E9kVj6ZKNfk8PsnrXL9W",
  "key38": "21ohwwvpZgWUEPoNTfbtKXdY9rcjAZiuuMLV3Ku5ZoCAwDuEmufMnJsHZLTiBu2wQ9yitha1nVp7HFBBQALshWSY",
  "key39": "7785Qg4Ry3TyPWUeXPXS793WGUwn2MTB9Wu2UNxLEdh5dvdkSXxmw6pNomvzP3man9pgAvPw6V6v9JYAZhwJCBz",
  "key40": "ZrQp24WEAci2fBjk5b2kCRH5TxMKVkNGnEeYo73ZkcBqJqbEoCV3rCsgh19Vx69NGY2onyzUaTCG3yYhsEUwoPj",
  "key41": "wBrup563YaRmjr7ah3vWLHvnUp8fAH7P3FXW7R5uMCkFXp3LXz2kMNno2VRhHiagmARKFXaYDinLnbxpgQczwEL",
  "key42": "JwcoCzEmr8LJxEt6WAVgVhi2ix2r3nDNw4EA1gEV1q9nXJ3D4GRiUMmCWneopPx2TNa5Cy1Qix5vjWNM1g9o1B1",
  "key43": "64yix36UejkySqyHpp6SB3vfpApHWp9RzLhRE3LWJA9Do8bVm4ZcszqXTL9d9mkiwAfBqehntW98jc9cDLVCSUDN",
  "key44": "2ahmy3gGJk5nupBW3hjJzsV8oagnzdCLACas26RYrvgqPEDT2cm8ABnymPHoASSKNuEWCmCQziGkifXXJ3iBjHGU",
  "key45": "2rDmrsjQphzwNuBB7i1VXeZYU8JyWrKix65WTAPvLP2gUTFedmxfD23Z7gZxc7zDKqJiLp2bnD9uwTRKsmLaS3A",
  "key46": "2FQHzzxRZnCJ8HyhiVRbx1CbHxge4E6K4WgMzRAXfAc2zDr8zvokAZbtsh4x4SLfS7bGaR8izsKohVemsXRD5gZA",
  "key47": "5X1raE5HqVwxQukVe8KEJY7BkzZ87qddaVRiQAtNuXFV6ZPv7xdX7TVNJqJPTPCX48VWrbLrt31Kr2bBJrdp7EBz"
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
