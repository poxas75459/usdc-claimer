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
    "4hssV8m7Vtg2eVxs19ir9NNVtrb3oS1bd93sE4cGWNN7g26sKHP1hXjYrwqXKikiz3XpvZbpSHVwUULufbcKXz9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y8aBd1xM1qej92Np2uhj8vkfJz8L4xBbhoayEMGiy5WJpPFzpUsHN78cFKJLMi79HcdPnZ1WJHPTatWdj2qALAS",
  "key1": "5REYfYjfvn7GAj2eoC7eQh6wLoMcHf2M6sWPdeMnLA6g1ZSkQ8v1SrZs9xQdHiV8T38MaT2DYt7VF29stgd6Tc48",
  "key2": "3QDX4ywRJW4dqYYYGubxsKHBu99egDSy3WAjvweRHs8c5JQPgJpC3EKSmiJ1AEq4Wf6P3Gv4RxsQL5NABbPq1CrY",
  "key3": "3yZBwaLvAZYpJqiEVVVE3Tc8UPt7Ygj2WFptfUFq9WgxLE4yVmFnPVxwT5G1yaPgc3FHmcG63YxEmfTmoomSBLP6",
  "key4": "32wrbkdKVxUEdwmHHMdMfjiGgtJyobx1PbiTwBDZNuRxgdgvtfgLYx5xLYxdhvLpyhTfsBs9VggqksVA9zyV6HC",
  "key5": "3eKWe2cTXkSfwNJpg3C8cvNhguEsmqZ8uVY6N3MvnCUTdjuYtyNM8TKHTT3QbXbmG2y19bi1dXQKniTeCwwrx72B",
  "key6": "5gzBzgMXkYmBjU5BnLF55NJPbFa98k1Q7wutdtPEQHDmHBybN1NxGPBNQNU4sEUpuY1a1MLoqBsgeeoqLf9g6K71",
  "key7": "2RFEjfQWEkMR8wwchPbuFCQ6eg2GJimpqKAT5gVJduB3xgJbpa6TYhGvMhfg9ntTVb5MsRK4PZq39kGiNRx7zstR",
  "key8": "Wi2RWE3FhXXT6Q35W72BUGdtonPxKfzqWaqiU5jrnmuAXB4oQHLNbAsvGUMZfvHJxfEFFMCuZfAyDHBzQAmSZCc",
  "key9": "5D7PeGsH3dh58sQvuxsnkMpYwU6u99tvQbdyCdiGnK5RP7mSxaEiFDfL2AdpL8aYuK4XfejHGANiZMfBvBM46emq",
  "key10": "yWBp1TgAfGzTG6GjSDNshE6gQFSY2AzVARjmD5ZiT8nDYnCjAudzTEJnLgBpmtBTe8HjHUhowx887NbRG6WTVCX",
  "key11": "3VcJXHpkjmUz39bJq7FvvPJi5NSJ93vKQ3v4tp7tzBiC4sBhC3zVAg12tqCWD387nHgS5EjbhtKPg7x49w8Swa4K",
  "key12": "23TgE2SUXxwqTpdFR9BvvxqPT3EFTja2BLNoFRJFdwyAHKurstf9zSan2Eo9mL8WHVwiqjpeXqkQf1xoih9cShmM",
  "key13": "fJweupkyT3rovcz2NvirotiFKxNyLxYxMJFYCMSe5oZMWk4thhBdjnyc2t9mMxv7gurt31K3urwoqbNSgdYx1Hv",
  "key14": "1WtezQcLFeCgLniqGf6HKicZJJ1vZzTxf7ARyHtP5en9zsPaiwyiafwaBLVJTyzcgVbRvea8SbPaamDzHPgQT1C",
  "key15": "4pyREqiWVexBWVRKsbewEyJ9Z3tmz7u5KLWN1jXJAPkz8Nxn1gMVYGRnCp573VAagf8We2kXftnnLmVWPopz6AYA",
  "key16": "3SKrC2yypUwm8JJSWMTUULKW6KDdBBuKEqC1Z35JDM1a6hsxxa9jEWdCTAqHhnDg8CqZfWvE6akH3jfiFphscgBz",
  "key17": "4oajfkwczu6PLtmaVU47Lsa4WspZTZvMG6JdszcL5zpqeFAsM381U7o9vYHZ1Yswv3V7NvgkSqeFSTS5PiZmuQbw",
  "key18": "4ZNjaZ5iQRE7mspo5kJHBTGiQVSSP6XsiqUstxwGkgSz6beEu92r7YcWtfqMnT9n4Wp91qMihLqGsk6ke8oFDrje",
  "key19": "4sTM92tgy3vsYeEv4fRFiJzosDhygQ82VR2Nvwi2U2YBMc2wMnTTdPGQ7eimvzFvFcGbPWLjQGFMFMMHU4JqTvZL",
  "key20": "2ukoD7d6SQZZX3QS9BxqcUXKSA9c6No4RJMHcvd7pb8g1CGESocEz8wgSwk4L9xDootVmhAmMMQYnD3P7ZMATtZa",
  "key21": "2UPxgtRmHVpNJmHXcavLwDhzjjwcLnAtoKhpHPme2Fwy3dqSpsbaQmVCfyZkW1t5HfvYPM4ema5TZVDsBN9ohdvb",
  "key22": "38j1Zu6yRSfx3ucWsf2Jc845dWh6b3eKrfaTdThaNMhGeCqAnWwEpWJNGW6yg3ZANfETpVjZ62B2vCGH8A175m6j",
  "key23": "3i9CjwyBjk4gffPSzkYHUkxV13RJuhqK5qkb27sn6ic1D4EszFuD7PoJ65C8NgUVGgRBv9ytYSdZU89rPUZ4C871",
  "key24": "57TyjbUQE4P2fFxanPz2AgVX7UP5Ho1Jqn78gDdynn6WH8DZi5X69zPxTphoxJtCnZJrVkvXNuBaPSRPT1pXXJiN",
  "key25": "5qDSw73Fvgs6VnLxbLzkjkH7vvCkhjTLY5VKCxSnryENgBUTJB6vwkopq5LSPb1m7CZHBsgX9x3KzDeQ8ZwGfFxa",
  "key26": "27TT6mYRkuZPCkuSzTYCFgnr3WjDj3iX4i2exqAL3xAUCnG5puXzkd2wSwsUpbQgtK9NbBbFZPvVuLoqvsdhBvbt",
  "key27": "4GNcMCowq59sz1s2Vo6b7Y3YiEmU8eva4PUQx5xPT31cMHpgPEHozAh6gkeFg6iMSffnZrNQZVD6TR3xVssAnvXH",
  "key28": "52KBYbHbwVbZLx7z2WB3KUhajiv32L7i7eyjkn3R1ipiVdVAEcM4qbqXGJH7nM2FmiKgMJWdkd8yx6uBvjW4K51E",
  "key29": "23vPvqzfBaB7oKCvARV48VmymLdrEhfKEKDXY8UVvuSgZ8XbepcfMgPYSBGYcwExphP3L8rX2kpUDwBfuJpauR9N",
  "key30": "3FNN5fodVym5cSAmmzaYNTi6r8as6nEfLWgJU1sxxkoBwEvkqXPRSYgn8RCY5FkZq6oKLyqZ5TwEc7NJhiRGNvMp",
  "key31": "PpSv8qguxiEHUM1cnSXWwmjDw9aFafEfLMCt3v76xZLWwb7FHQNBtCTjLRSUxE3Ti2JJRryswo4wZdjBTnnyEvR",
  "key32": "5PvDRhXzBzNDsvJiia5cjsqZAPvxKmnRiiacoTBudd2W5wRrRFcdCiXK2Uqp4ifCjmPia51Jyh35dgSvBMZFhA4X",
  "key33": "5gd7a51zJQxkCj7x2TVkEDyR6cFP9J1Mb5EMUPGGgpS8ZbQGzAhQpcQm5aXRS8vN1a4R6wbHpYF1QRV2AtLPYE5m",
  "key34": "24FDZ2CarL3DdJViVZSeU3jzt9vyupGDycNBbeLrEVEXHedZxByM15yQ2VXGRuFYSUSY45QR7yxVfnHmGGkRRHdK",
  "key35": "3wyDooN71w8G7MAYtdKcuezFsfiXQevhfPQ8wvXxJZoLzHVpUq76PFePtDKHreRJeCmyBpcDdAWkAVeSgHm3qL6Q",
  "key36": "4mVj1ZYjPNXe62vjH8VumB4DrfyUUtW7vKUwdDxu5v8LFTTwWLmXn83oxBuJyrsBdvFnZ1ZgUnBvk1CwoPpHRgN9",
  "key37": "25Ba45Bxe3kvDtPSyqMQ5McKbRvDsBLV6D1KozmHnssZDuax3acWb8KEJZmNkYBdwGCjjySe55hciqY6nKEQCGh7",
  "key38": "m95RCJEMtvdCG4iyWyBdTcyAR3wgydkUVAiDGBoJib8TmCGtZu7r8nHUhKXNK1auLhtCVq411qaGWHH8G7v1EAm",
  "key39": "3WtbEXVbeYDgUcqLLaaswqwKjWkp8ZNoV1N3LaHUWjPu2vMgxLF4L9X2Qiy6iVDXAP3mao6t1hEwEHgJWPn8kG3e",
  "key40": "2bKdWAwax2h4ttH7oDRrtVWui3hEizm91zZQ4XmBy4KJgw6NY3Li7V2k4URScrZkNgDM5j9SdgJw2Yw4w5ycer97",
  "key41": "3wEr4onf8iJXSLuw6Mm25yGCrufJUKM5PCoh5fiQYw5fEtzDf23UMJ1DeaQQD6pCfxaRjHgd1ZgbL8ez1z7TKgmS",
  "key42": "4v2mBXX26KMkMsZpJf465UQuY7HyyNF4ebKXghugBNeWGmYafaL645jyNa5ZnSMuXaeYJHDTN4xn1xqdPSBXLMKb"
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
