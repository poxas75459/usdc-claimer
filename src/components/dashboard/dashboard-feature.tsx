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
    "27xaEuUMQuXphHmS6iu1o8X2yfhT2ZEaKmhpzrxwLqQZaxVniasqXF5cvojPPr81Njxv8nvPRCNVh1ibBPJ7CUcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39E6Fv5vmATfQSJcy7gX3T3wfo4HbTxvJ6huLdgTd8MAw5kxwNnm6mvJ6DnNT3NYnRsqB65YavMRSzyKSdCiF2Vf",
  "key1": "3hadbq11KSmsGoXeqPKrWbp8ekVo5x8CELiZZ45y8BJ4bUtnfv4MNHm2BkHfZvB5oRWMJ8Y9JtRNozfpRJyX616Z",
  "key2": "eMt37he1WcpmKRYof8MBqp93SQ96f3kVYeUwunBLk7gtQiYfsh7GtkX6ZqjVHMV9fwKkLQHPWF23ZfERmufypxq",
  "key3": "4WT5x9KnnSKSfipap83D6Nrm6px5GsZE7zfpHfMtjG4qMrfRT3UJCnARv2x6EAfwdK8XQFy39SZnuTohTittFq8M",
  "key4": "2Zs28NCi79q9Qsqsa97ytZDGfxAnAsYsE5YgHg8Tbg7J1cNYj2tnXkP4i9rCXe4DgjQHVCUD58egcdvMeyxngPCM",
  "key5": "2x3RrTwHDMWuHWnUqqYvk5fvAnVtk27cmfPp2zjMxRNKGP6VtQeu63hmjACNGG17nyqHNS31HYxNVsGMHyjy63sz",
  "key6": "FLq7GS1cX8Z488K2eVb5iBzAGcPobu1m1FhPUqnPcPYpzY211N5moHR6yXG5BvZwN6189Khp4xWRJ7H7augEGwG",
  "key7": "5sHMo9YbdfKYcu3w5VgiP6yBx75RFMSxoyQbQY2qn26pts1aecNWTonQP6pUe6xeVHTqYKR39fEvocAnpGuQ4TNz",
  "key8": "4XM1qbcPhYhg9gHK7UrFsQsfPUsXBSUwzs1mpqgSk5sfaXicFDHEygnnJuQvnfFiAvjy6rNq3uHxHLBoNrXp9Ne7",
  "key9": "1oz88uB4J5rq3p2ZyzLBie8MatzaPCLjGkZfYw6wMZfG6rgnfEskKzhbQki9hidJddyhxEzbs6C8WcUzpZnBSHJ",
  "key10": "55ZciCG62LaV6VohCt8B9t18rX4tDL8JVZRB2FYVJLVMGsxbFWGQWSqsPVEMmX7TjbdU2jmyvGY193B2gqhDdSvQ",
  "key11": "xP511gU9JAHC9iLGjePWxwgJfe8BdPwas4hQBaQ9WXtpEGMUbPShvJ4S8TruKRzKQfHEJKxtkXkbPgF5guje4Qv",
  "key12": "44g4pg24VMJquVowfsZzLtEvnPACNDpZ3mdU1AKXc4jaq8GtGZZYZfMmEfuBG7GzybyVTTXufhh8F2qgaePwSyh8",
  "key13": "3WqnATMnYUgUPrHvzcJ51Nsj13BKiQAkc61jLn5JZX18MG4saifxhQsMK2J2vJQfx1eGCdUaTmxn8Qim2F1uq3CV",
  "key14": "4d94ZH8S2Qrg2X4SdbhZEsSY1UcwtGchgAKoTR15WoNQcEWAi8Wp3CVo61VrJ6rUY2f59VDAxgfTqQRdoTfWASz2",
  "key15": "26BJHxiix1PSqCbrCrcqa5ijFTXdttTY85Zx2Q8gk8itcbzDvefpMJQHnkLGM9FQ57KGowvhb4vNCxmBwomVASx4",
  "key16": "2GkA6dzgjYPL9s3fSGPQLEpxDjiTL3D3MHrFyXPj4Gi8LjiEkS1opU3kULDUtApYWze7SctADwvhecXCh8f7mEj",
  "key17": "3rg4DtxmWD3QrtLFnk4VNx3YKo9RBDXS38N7RXQoERT3JomptrwiKh7tFFtuFhK1zPkyH3BrzDuBGTRKLHQisXJv",
  "key18": "5ijxGTb7WRmCKFZv5WLVWLz1MszgDwXnKTb4CkFGWCW2XAaB4iJ2j1KBERRrBiruUc3A562DFtJ7DtWg9Sm4fzBb",
  "key19": "4pfnY5f6T2SWGWngqLocSUkW3iTQva9ksNf4mK5Ry1BnWj933dZ1D5aTJx8dsZfHjAfLePgHR89fckk8vdRzMxCD",
  "key20": "xRzwKDoVei6HVf3oADvc1ZJ6MLsSswaj2fWUfaLQict9DZuefcyxNGWwgHEZ1v2547hZ2dB7fRHsB3vhQRte17r",
  "key21": "248SPAj7CHDwmzXLE3J2kj26ZReRzaeMqHtsrvQd3N84EX8B57U3qG3UiXDmVfn9dyvUksa9FsSb9x2HrzUKtFbU",
  "key22": "5MXQ7L2ApyVL2KHVxADmMmpx5zsJq8MMkxUE9L6sDqJZSGcSAYCpmS6cQ2i4KxJ8TmqCwse1KcuSSmkQbzr3Qqvt",
  "key23": "rv4RHuG5YwgVR99U5cRUXqy93B8rb5XDu7ZdiagHVEQEqTWTbxwKhEjNHUHSCxeRTUfbi5i1VFf6N54Kr2Hs2Lm",
  "key24": "4nq5Wxu98enwb5wBoC9hohdv5NYGB94YRKApdZVvAK2GhRfFGTTq6fBuxmGQqa2S9XqC6ijhT3ZrQVFku4mGvVwS",
  "key25": "5eQGgAEkeC7kG1mtAYUesg6Bqocjbig1fVsjhCWPv3MDjHnJEXF12YmJCrfMxUMscP3ErHym3YWRK1AvN1fxPCSs",
  "key26": "49fmFwsETmhNHNtctiiekLMeD4vGzsnx1bK91MkbfWWHQeUnwZC7eEEtmhBbrAjtPPre5X1iGqPVAdXZyJk8ZbEp",
  "key27": "2tNJmQ5tq3TYj3Zro2oD492ugnKn5Y31eUkx4xv4ueq73PZ4F4PNEzrBA93DE7gQhiie61feyresQKCBXnQv2M41",
  "key28": "444SmsfZorQjTdCYm41dCdnigbGQ3Sx3CrttZqvyAwP4e8DUt1zreZXcAWCmL7yZzN7NTD2CT6CsEx7rjAvm7Gqy",
  "key29": "4QgVad7GueZu3X1p1E42WTsKGJGeb9eNesBtNAAUGpS8PP9e6WCHZ4eD38ELidXR859d68VdAzA8Q2ehxhPGcFjn",
  "key30": "3bgQTydX5fe7XNac51GEQxVaRTQuiq9sRfbnbtLv5DYTJyKbxxoB8Rn8yXkxZZJ3y6jv9B3dLAFeYYm8iv7YwEw5",
  "key31": "3NQZ9Hti3WT2KFsHWff6TaCX9cmhMtHmr1hroJ5G9ftL4xWZk6fcHnpV5fBjf6BttTrxVXpxVadEqURVM2mbw86e",
  "key32": "49JBa2qJdmeA3SKBJHwJqQjJZPQ3ojP4Edt6GRTpUXR9pw3hYmNmwRZH4GKnS5b1EkdAzHgSEcbu1yFRmHVdVBYb",
  "key33": "3tJQhwpWzKN8ogAfZE6ANZZjfjhUdgCnTvsFPZhbyJUCaV6QQz1NdNXDQGmD5rJKq8gPMr2sP62gQGkVfnH3pr8k",
  "key34": "Mj6mHEcmcaZFYTDa26DpnsXSvyVugJTAr6Ufm965VALM6VG8P8CJi536BYkB53fNsRGRZ3bUEQcHZ9tExWf1xXs",
  "key35": "4W1KrXqCExym45qu7g7okJwRyKvujGPoNGJjopcKHVxqbibuB3baemf8pNMwXq5ydrjgTG1K1icux52tHqLUPofU",
  "key36": "4ZFZ3StT7pCxNVSQpq4JgysypPujpz5EhqGCcrRqnyg6dwQHCq9dmB1j7FzBok8jy8DYfNU15t8g8yo7G2QGAJZ1",
  "key37": "3jD5sPuQpxUwYb8H9nnjwtP6kbPp1z7GVA5zFCdzwsgWVwFwv3ypVbgupMT4F5hPGWJQz3YxzvKNTbaEAMMCF6n7",
  "key38": "2MF2MU45snxrmk5FyWKWDagzCq6Udw4GdhCjaTV8gXDohqqqyFN6wvg4ZZK6JjhPjVRjNRtneRbepkVUQa9BnLYu",
  "key39": "5LsxoBeumyz2sFkvoB6ZkM6Rsd6fFwuXudEy2kHES4EeouDGKL5cL3mqNjVPY84ckpDf8LLeKaFnZEogfQujuM6P",
  "key40": "43h4wRmbKgVLJx3i1rxVkHQkvCnWo39PYJM22MMys5ihUK5m4x6hLb7WYPdQ4boNRwtciZQxRt3bZw1fb9maRxhe",
  "key41": "3rxnVDqX2is2wDs5o9F6YREsKm3GR1LRqzpCERWFNiK3QDbwbnk76mAFbrfoRs6YVRYoE1FnNn8rSZ1HzzByBvfK"
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
