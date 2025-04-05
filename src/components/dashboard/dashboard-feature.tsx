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
    "31BN1A5Kwr8YA6tra8wcnNPTwCESZj5a23NoiPWuCGqznGZHQCZLQQvHTvohCqwjzAvKUDo1RrszcSsnZG2kTJy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XXLExkUGwx7tDJfocUjJvFsExnFJKNZVpEGvi7bqHsaamuXwvyYnTqvAZ89NJiobjuDB1XndG2SFBSTvn9UrHWg",
  "key1": "5NxT7unsvQxwATqXVYzsgqkH4KdjKh7oDGRkxHh3jxFUYXdNbJcRJU3x6LWbyuNAQJEFksDs9R4GFRNuSzAFY2NJ",
  "key2": "4vkuVjXvg9oRsc3zpRGBGjWjNAEmk6F5PQvXyQGP3MAThrU2rFLXzqgrmVLwrfzMreGCaMnMn8gca2XfgAHMvSmr",
  "key3": "3mqX6ZEjwi7ABqr5Q5VRqB6nqjGxwMuK2ueqffzBAPyjLKzdyyB6MsnZxRAkBzKZt1jgNxj897wjqcpFHPzNjVTW",
  "key4": "4gsYJvErksdtpYtwyCtEbGsu3qu2xVKCUiaSVQ7JHeXZaUmcQHCsP4fXSuiQ78dpwzLWv2gJx5zC2hzfM8sDdRLg",
  "key5": "Qg96QHRDJkSSDE7AEEWf6tNxXAaB5eBRWqt5JeMw7wtEGRsQr66M5gzUt1eCcxy3zuUMRzKCehXJpgCp316ZB8Y",
  "key6": "1U2Wh8NWyk7SRQD2q5dP6WvbaxsZufSiXCwaGyBcbXAA5p6oUW9LGMc5GwWrML7hRZ1VoAvXTPXS6g5uU1gbhqK",
  "key7": "348CRFKgGeV23UFw2i5SqwqRhwmFyQ7yjHTDvX5X62E76GurHV2fUH9A6cwZKKQtxZsFrPjXqsCuztmXcV1puZdR",
  "key8": "iwjWwmCRimZzU2WbgwyBL18TLaNuUqU7X79ZMf1qhwVv9Z4LrWGnLedrrqf3MWUUw2zG1QHvSWD9tHevxbyrs72",
  "key9": "2rZU9FCY1DZELwoDxj97fMfmC77a7eaLMgYmsKLvpbMsLUjDCL1ZhoKzx14oSnsq2iEwxhY1fV6bBaRexUFhvkZp",
  "key10": "644w7CDVyeEeF36kATbPX4MJU3nvs6qn9gGduQ83MS41TWh7snhicX92qURQZfoWaK9Peg3Ar9ZkV4s9t9TNYcgf",
  "key11": "oPrAme9CMgvnNEsRr2eUAsLEwm5HJB4J9Whw1UgkUzgK1hDQkjVviaQQi9jL6SAgmciqG5vLd2rP6FUCr6nM4cE",
  "key12": "32k2mezJvitDGLvE45XZYhEqwjwVXA3wV5yV4mmPj9dWxYFN48eja6ZvVGWyy6hg9fmYcb3g8BwJNNHaWPvpRpRL",
  "key13": "AhPxBp7RR6RcyUd3whTn7xSrAVx8BSksgfz5QX7MUc1Dk7wLfQwxBzm2GyTQwD8NWtvwCgEintpmoFsyvcMUmPX",
  "key14": "2C1bceb1MmFScG1urVsJmDiBe4JCaun4THZaNf6u8D4E2nd7kGLYoqfZ71Qq4L4kNMahuCz67UCHS1iMQFecR7PR",
  "key15": "65yVaDtwRXyK5yS8dVqMVe736kp54CZG332jmbJCAUv1rDyxgNPxXB9D6uNRFSa2xrcgipP7Ymu65zTv75bjui6r",
  "key16": "57EsBLL6steGZXFBTciACUjiGRDdJEdgYxLLvP8TbrECydSQpj6ST3fjhSo5Fiu55aVYkUuaK8FZnHM84bXPFxLL",
  "key17": "Dq7BHdC4Gaapnr6KLaEmVddj6cQwHdJpnri3jFh73b5B4QTQ3uBFACQt1cfqUT5NDYPRAQFBc8x2fVLGZ1iKA7E",
  "key18": "QvECR67UQSRdzeRbktCtHJy4yNJ1CuiRVyC39qCVJpm4P8K13CfR1irkZEo1iAwp17iuHJ3NVvEYdXK2anN6L9y",
  "key19": "5nAzeTawMkLJFXAH2MECD64z3cEPcJegV4gfWmFm5Vx4eRMRa5wj16mwxhyX1QXuphzUfL2VydYKwvoWi5rrSrBU",
  "key20": "4VUYEdLnhdGzAv7p7i8orozkxQNkmr2i6FpCib5RGrymt6RovmuvhWKoWiLWJmmcsJvgBnkWhz562QuuQanaHCFC",
  "key21": "3nJv9irWA3jhZswDtaZ5JL42Qu39UXTBbXWZPuFh2DpmcoXyuV1AeLFwrpMScJ8KS7wCTDYNcBhi4H6tqx8Zz3zi",
  "key22": "5MeuMK9U8xfvCioDAN5PTkpyTKj1zdgtHof2ND1453SJgTXLSMygoKVJSN4ZAHSuMbot6V3ah2mQ6t8pfPwENFef",
  "key23": "3PMn2t4WKP1ubvQqdACT2PbVVHXbCJcv69j8pwcjzYaV578FCquSwtYtz18bZ6jrrBLg9F5a3B8bFyBjP7Sj2mkb",
  "key24": "5pPAmNoHdb5WyKQo48kfikGyhEJowL8i39JHoMfrJmC5ytkvm7TGFVpWSRukCppbPCEtCNn2mUr3nbsAUBFNJfzp",
  "key25": "3BLVsdkVXDiXQEomCarc7xTCFW9vhH6jCrpuKDJVAne7PF1QyoKqQALrt5TMTLAEYHVdtzkMMCx7m2WtjwzMZp5U",
  "key26": "sMuoUyA7cDQtyNBiYyDrF8C2m1xaE162oKbunn1htMrt4yR4xfFEXgGMrGQiA1q64kHWMF9ztoCfMDqc3JNbQmv",
  "key27": "4XD31AM3sqgNjC9GaQzyKopT2aNrwuYVByHBghKM3bRFHW4znuunQmEb6FCuzGCiLHMRiN1zKLF7dsMNJPzVgUbf",
  "key28": "6pAnY2TR5F9NvX2NBkyyZ1gQAUQDg5AbA1ikZixsr23MXSoE3TLeE9kgkcywGs1KWMprHccckFjwtwwVwtZHae1",
  "key29": "2tf3v1G4xnHy2gKrMvPH43kCkppZEg3Gv9tYxgfbbxs6LXLeAUGsbm5Q4vS1ESntudA8EKG6LoTxzkC4quL28VKC",
  "key30": "5RTkS9yV3c1GvvhwMMhrFjyzQRuup6Gq3TwQeYqqmcSQwwfjS2RZ3YagnMXWfFiuYWdgfYc6JxesWxZjNRaN3YE7",
  "key31": "2cw4UkALGgaQqhJMhbRAh74GZeqYxKE4juR33LDJ6RwEXLCEk1PQJbkLkXRbsA6vZ6pPdYsz1BsdWkzVx9BHz5Mw",
  "key32": "3cbCGmUNkAXfWWjHXHD6vbYfaQgGWz8TmpCwzudGhgHh6hhbVn663windjuPQAbeoTnCh5qXgauUy8KAMP5R1AxE",
  "key33": "429Q5iTcBwee9vnEzv5SPAQJ5e4dB6KjqBKMHSDJc54We43XZbcXpRz4qitbXG5uBSSMuNXoVXwRUK6ejsPUEcHy",
  "key34": "5tBU2pxCT85CSN9anxpgeoDraDze8vCyktvNDQJBQstE8k4p8VTmqC7NnR8HEj4GZdAUjzEinFiCQafSEschsr8S",
  "key35": "sWq83tsnxECtFJH5R1qnqFgnHazUjEcJuLeLLcmKc7Mfok2M9oToPyLPvw9y7YBuKEPgcbKRofvLfgjCrRq82sz",
  "key36": "2KVPzHE3eEDBCihpNaJ637V1hUee7HA65hrucchgVMfrsPbW3njSuL8oy1wnyJbXotYsKhVEFDjfAXb2SLtsyFVY"
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
