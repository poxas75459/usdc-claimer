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
    "4QrP1FjtLGQtzoLcgrcVuERU89Cn4qiGPiv1AzKuMaD1LSxEWmrr94eqagiYgRiEZnZQey71hP9nQneuk1EjJtHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "emvjeUcZavfDK83LkQ6mS6BnSykWZxiSc2zexExTYxoanPQXJRUfgJgCNVKLNLJHq1LSuvLzqiESgjyHQPaCiTZ",
  "key1": "4kq7qAwWSaYVFn1MFX9Pio2X38W4TD6p3umbJN2ZessXmXTwBbbGh3X8tuKKFT7QyYH4S1T2vpww7a1zGedj1Khw",
  "key2": "5nqf4YXCt2k2DD3GjnGbaboBn77oPxRJSkxWGNnE4GpAkVgSPLQRmd226XMuiNPBny2KZyMBtgFKPeguRVQLn1UR",
  "key3": "2ZH91ppAzUaYxC1UKZejk69Z4Stqg4W4zKU2jS6HPSgLQbdbmsDQ4zHPZBYk5RsJyHAc4L2u8edxyAv3H1TEmABm",
  "key4": "5rrhKbE3sVEVhYaVJT8REW9uoq85KuvpQnRk4TZrRuEUeGc19e48t1FbuFbUndzzXLkvpUoCHV74sL9kMF2NsHxt",
  "key5": "2kMehHkL3huzjAB33yocoevmoA6rj1SNRshtpGKv11GxnVEThgVeNa7bSFYxC3hHWnEBYK2msvN3tcu9UTg6qBrj",
  "key6": "2u8A7WnuLV1mpBE6y3jmwJ3dRRY8D12Cyf8ZLJ1DRD9t2fEsw7pPZ2CXNQbRbJjmjCjWQf7zh2YZQ69yrNwRN9Az",
  "key7": "5To2z4YCngEiq2e3JWrXM4CBQWEhb6JE3YsmbNy6Yr9BhLhTgMXS2Q9hmcd9rYQ3ZATXMAih26nM5ffzgamUpYep",
  "key8": "4Yqg2C8jmBdwmeWtTa3zQVkV7gypBRGmSmzL6ABFqwnd8R42fzMRq9MvEaj3h86iR628zxDAbahn6EUH31R6Jo4B",
  "key9": "4BXQoHjLGZxzBiypTEUGuvvwZsCuZTtvSpmFhyc3DqDWQ3UfyR6Pvz2KeyRYx5PgWgtC28Pf9FAPpCJK7DzGBjsv",
  "key10": "5jz8rZAKWxdVtqvart1rUVq1FoqWj6kyGtYBcYG8jbUuo5uKefCztmB9HnGHJFTeydjQ9ZkF6sbJWQn9VjJQG8NA",
  "key11": "36RDpcTy65vVuPyh3fPE7adMnD6E3V6PoWLByW9o9QTXNQYF3eAhx6iYJkqhvRU36VruqxAGwbuEzoCd1Wv8YqL9",
  "key12": "QX5xdMeaNxHyG4BwhCCXrTVe94CgLJhNDUegfbh9cqn6DgmhCaMKWdAbHY2zDt79H4bhySLjn7g8CdL4W1MU75M",
  "key13": "PjrnDGicEEp1MfkiyU511WWx6qUfRMkiCYaxVPC6dwKGQumAXZLTT3boZRwS8Somq69kXfDZUtFMKxdy2cj8VnW",
  "key14": "mhxokGxWEyjHR5uHfQW1pqDeDghFQStq8aFyG95b3E2h8UvWezrCbaVPzYPF5Q4MEwgBs4KehURfJJDsJqqyDX8",
  "key15": "3u2PFUbtttNuGn5dY1NtFRFLiXaqSBmNxxjkGqn5Rc63zvwVsYkEVunfkFonUsivLZPM9PDesoQ1ptgdGsQ1VYDF",
  "key16": "wuF4hC4pj2KgxCt6recWNWbNRckTFKYEvPtRkxaJ9LEm2oLD7qrs1UgjBCry6G34zPLXK2NZTW9kDhybRBhf1gB",
  "key17": "4KxV75MX9NxjS6NHAUDHtysUHJiC9MG2KtbQDEck2D5SffUJTF4oSMUShensGmw9eG91bkgncNoBAiGFs1M9hWpn",
  "key18": "4Fq3fEndfG9aD7YrbP1DrB9Kq9uGd4keYQ85248zWF3RKrLF4dSkYcdwHp39nSvpEb16TfjiAmoCzYP4ELXWJsHR",
  "key19": "gp51NBNvaHeVqv1xexHZH13bSrmdtuVHbWJ5CtvGmrLLEhjrVu23x1sFTgfx5oQyUWJuk9P6ScTzqrtDFfsm2He",
  "key20": "3fhfqEu9y5DSWchhQ9rmcEJAnz8ipDyThXkHKAU43oUjfKPB5AozEdeL2i5F4jmyJYzPZBtH9cnvypaP2Cxyqv7i",
  "key21": "nrKTdMgTi66MCHSM1aCvADMJjSXS8ZPwh6xDbyBtCMG2byjwEaXEehP4ZSSBDjJJC6bybTDcmviZBoDKThXwD4o",
  "key22": "4S5sZy6tYAHi4fReHm6en4KzHfPj9fkBygarSWzFA7FdyxLd81iu7YHybqypyqJDZvHxyGuuVcRHTSk8YgiWQSP9",
  "key23": "5aa6Ewn76d23gh1iSV5ZdLKE75JituPqXiSYxNBrxcr1ApNjNPtBaJV69fxXMdSrZab8R7VieGsm1KZijKNJZprt",
  "key24": "AwALuyKr8spmeDM9vwo27QBJhF5XpbHSmWSLJsJ42vZ11j1GzsJdhK4wLKnM2iM2Mjev3BygaXBxwDDP2haTrG2",
  "key25": "5TLxnWcBLLonyefPmsz7bSaXqxs4x1vnrt2evsBjUicdkgfwPAKUVxtXPuEMADV433rZbR9CHCyoZD5wuAqongPk",
  "key26": "5QDin6oQTT32kjDDt6mE8HzqgTZKpKYUDsMnons7zdPszx2R7TjNwBux1dSxpKyWxcq8ryS9T3jWeRdgagpaMYoQ",
  "key27": "aUkmNw82MvirrJbLAL158Y1yZ7EqzG2pk54DsVz2yNFqfdekM5vXwVCyzJmHQiCAWny39qFRaAv8YDsxFGg6KLa",
  "key28": "5BwrMLeoZgcfi4PgMUfkhXEA2y5pKS3DmjsaEyh7EYFN7b6EyzZjhhDqMEoAjeopuHc5qVgoojyFh91FVVzpMi4",
  "key29": "TLhFYinywqtV3wW9gZmo6gKQTKay43MBX7AnPDyoB7y2ewnYtZCE2Ke3BFiYyEBXYrEkKS96nFDizVM3c6y99QJ",
  "key30": "3mgyMfwffuhWkb97ntfT2khQaygTSsdWkWPBeofG5FckwcZKnEHNkneN9waMDgDn14Dj9iZY6NC5isLehMYTN7Hd",
  "key31": "5HRrijGj3Xho7iuQ3Yt1bnBmqMrip6kzJvdMJqJRkDD2VvAEoyhqKrzU7GHYQpLUKiLdGtBpZcDgLSw3Vhakrfd",
  "key32": "3rKkriCRfKELwecwGhAUwkqYxfp8QxaBbMMbw7zFHJ1FAR4g9BZszqLjCWuqCMPEyTjW4Gfmg3b8PKRfEYcCNs5q",
  "key33": "43wrxEJexhiDtui2NGCsap52mucu7DaKsaMbQSW5xDtDuUS76drNfHPc4yzmtmDCm9wEcC53RxsaiNUdSvLqZj2Z",
  "key34": "66aKihAdReVX9FLWpHcCvRekZUWCC9UMVVRmRnnwr4Q5NR2wzQ7tDvPKaa6amDYugJHJZveUkKWcHbViRLNJSoYm",
  "key35": "ydpWYAJXgK9uxjboZuyRRnjiYqj22PF2nN5zpJhipQ3NkAMGX6EZHnCv4Bujibk15Ao3ziufJHN3Qj1m5mR6WLe",
  "key36": "3nU8v2Hy7jnt67Rwvy4GbhPAx4B595jpLji7b6G6gTaF1frheBNR9p7Wpmcv9wiBAAEr8TFTB1H9fPeAWHYoAr2G",
  "key37": "5XRugpxnxgwcM5ZQ5XmuzdrWkFR8UPdmFrPquFi6w9hArwbt1M8vHkHaqNjmV8bFjfDCzrfh7H4WrZAwjyW19eak",
  "key38": "42TGNomsTwowzmLsuB5UWoSWVvj3GM12nRRXPMVuTefeALFcLaLtT8bTtsAa5GW2WhqaDczqw9gCYxdjcxNjhYpy",
  "key39": "4mvk9G4EH7qBL7MioeNd1uwkahZCikBpSpNtn7D7Z74vcP1ydEokmFk4ZHqWaucQ1va5ZyWu1AMgXhiTWsouiZsm",
  "key40": "8f5iFANzR3bHgzUFqU7CKPL2kcuLNCyXxQyAe1X52mC2ZfEScZv8DkwbgFG7E1uNw3c6i9F7VaTL51jCqRKEWSS",
  "key41": "nguFKU43t5dxe56pTjBo6x9m44SLsi76MXFrFgKCDyZcsvD1mi28XNdk6aeYkxW9KWi7X91gSaDF9yVZ32vwJca",
  "key42": "2LP9Jasf7mt6N4Lt7gjutqTgikjzZWCTgDzEPrgaobBd5P8zryqRuy8UFs6cEUr2MPWoT1Kbdd3v7kC94tjLomNZ",
  "key43": "2TH5FcMVn4kt77DAaBcg1Z3PXS5tC45Nsyg9Pkv9fuZZ8c9Hyfdk9pqc3p29R8PZ86MDax7t29ZuwF3nPfRR4ZAZ",
  "key44": "5sm1GgwgJNUSAESWCmf1jTsJEEMDpj6jVEj28qsoHPXgWyNt39pXi4uxH2rbipwTKRs8J4EC5meSninoQebsBcLv",
  "key45": "3D2etzD2aTdN5b2NCi1U5J6jjCzzjeMzX6ifAtjacHsyEpuLEEimLZsbCXbozLW8XrSzMc6ZgosdqtjV6wdW2hXz",
  "key46": "Yr6MtFN4SuKBaNweuX19jMmJzdFvanKupcEksKRE9cM9HTaFTPD52qsKko7PFcBoTBkQDaM4rdnGJmYWWRriwGJ",
  "key47": "3AcK6URYNFamyoeoSjbuEFk6hRzQhAcXmDpJA5uSCkYWXLVceAsFcd4hFXARZts8NPv7TLHUpa4mBkppizoQvwsi",
  "key48": "4gMJjxzf1G8sDTnUAmmxBoQWg6XwgCPuLJsszUCM3PXNEXG8cpofwy331zbCBNm2Rcc9158rqX2FrD5qvfP8TadH",
  "key49": "2Qo9kqwryyhTj5x2iCuDGzvgeWU8Pqrg9BQbMjXxUmJmrrciDhPn2DrhdkFxvrj6qY3EAKbXQjham4LwM7NrWyca"
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
