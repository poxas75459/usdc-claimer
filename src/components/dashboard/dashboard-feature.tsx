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
    "3A6FN1qErJRKhFvcpJrFLKHM595qTLy8EJEDukb8kPpjhCyPwoquxbAFYU7y367RCJ1S1kyGCGEs3bQrrisnH6Gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BaEua4AL9nSH5Ptt9eDt7ckpSnn9grW9J6un7Y611HXR6QpEedBM6Zcm4sVXoNqQewSp8VyTgnhxH4aAb2Kydaz",
  "key1": "3bbySyMELGMDxiwoJP5TUdhfHrVtnMZK5zmmhkW8HA4bvbzKkNVpfxGHMWmwFXAGfhswgda6mEcGKwneLMrEJb2R",
  "key2": "2BTK5Mdz4TH4DPiTzF38QbK877Eac4USknXgUMjcfphnQ74tUvGAuW8CNzs7FgBbFztdJWsNfAmcHyf5srnaZw8p",
  "key3": "3yY8FJgehyiFUAJmoBgmvmFxLzVB72PzfN9iQ1UW1UHHCgXpkpRu9nYtcQKYpzG6CotnjCWjVzDxb4NX2876G2dP",
  "key4": "53D9oqJruEFYR6U2ioGec2fwYkSqcFNSotkT2SZWeDwMmiBnrTTUadGWZ8uKVGZ3Lp5AC68vh3A7r2gaGMiEgbFb",
  "key5": "5vpNUGxmV23qiJ9QMLskxMxnQLVbKiuxkKpTF3Nj5LaGWSQ1SuEr1QvkbPhcFHVAbFiK576RDS6LQN3p7gVNAQQz",
  "key6": "5QLtocZ6WW74iPBGjY4c6W6sUZUPyB1jYPG58d4HrJPNhw29Eswy2HNfEeAmrDY3kTxt7BWgUHByafvhSyYBL3kP",
  "key7": "5kviR8ZekpXWjVFFjRJzN1mDyNgbRheFGAZt5aw3tt4D1fng626C2EJA4AJfaZxLwz4PUs4YYgnP6SjR3vSg4Y2A",
  "key8": "96Y2Gm9RvT6Z5M9U8H1Bmk2hw454wc3D4ryLa31CNUuRLj9BrD5fAoWcQfnssBsn2aQZ3L5R9G2Gd5hoFkeyYca",
  "key9": "wegAcJUuvbFnjwwYgxh5ErgbCpo8eaBxY5UiL8PkoifpBTRrxtfE7ovChS6YjjTvea7cSc8JYmAfkGJk6beLkn1",
  "key10": "4VWpQTFnhzapUvAJ86sv8kcrpwUT4aEBDEjHYgfiFY7ZJxr8cHQJppAaNKND3pM6dHf86K91cssTS8ErwwULCPrF",
  "key11": "3jsZ2CUnMGsrPijFe5WEA2UFzL7UGpvf94CfYtL8piYXYewwU3T1JFCon5EJiR8BjQTbfyixfbxsm9ZiAdygsLTL",
  "key12": "3fQMX4CRm8hiHtfP1hn8bB7iU8YHZSYjmPH8aZwTimpqdqTk1zkNGoezChPekT1YZA3TjRH1Te4oazvMWQ7YeoRQ",
  "key13": "4Hyz34jC3hcchm9ceUZW8pW31JeDz8pSWVoFU52AsNNrh3FoUCXLB9MdQ983SdgV7GGZQrcHwXndDqHXK1Zem6JJ",
  "key14": "4JiL7DhdbC8TJyw6fdps74GKZSWMRJanDBtLuJQaVBt9C4KUWown9MXVvzLb5jD9UCPvzgTcyK3FNEyuRZijgV3P",
  "key15": "2M48qvSim24Rxmp7wyERuW46zhbUAZC3Fa8DG9NYwAzpBp8z57gcmEn7FsP92sQYreYeBoxypV98UFhUjyFWAh5q",
  "key16": "3YW7CYiUkiDeck2guhgej8JVoTiinXcaquCbKi1o9M9VYScyC15zrgVgcJ9r4C8xHUp8ubekdX88FJEKgjz9ghZ9",
  "key17": "3sTuEUdYQAzJXgaLcVQoWiceaMeoFE5AcHzt5JQSTg4UFP8FsNiyLuNhfKNqiBWk3SNjVAEivw34vBfAfJe4j8cx",
  "key18": "5xPJs6U7ytTatLUFk3AGhWmffaNcvtWDaZXuyxmiF433da7KJ33FjqC4aejYn1XiDxJqebATt2JfxeNnpsFzHHfg",
  "key19": "W4zGwQv7Yeb6wpqde9U6tLcjSUe3Znh7fU2KiQhW8aLTJx1BSTEdKLbQdXKiGANkRwRTa4K95Einu7QjBeXmZuV",
  "key20": "5ysdz69sQdQMdVuSuXz8zur6TPkvCyUwisy76sCU54ump6P9Pdo4QL4XZoDXMH6iBt3wwC3oR4xb6zRJKuv84Xva",
  "key21": "4SXr1CDxQZZEginejzSwAgWFTdgvkyNWiXttZTMFWbD8MeyAr8keZQogKVcEFVzsFryjMqF1p54gWX1q4KFpA5pC",
  "key22": "3aZJ6xuwzQTVJ9tqKuQjKBbZKQr5Z5fgHBmaYueAinfaBjAzXUuy6FWSSno6T5d88jDnAZeU9HwbBbk4K4bAUJo6",
  "key23": "Duj4WmzpJt38JWphWDr9jQA9MLmnBnEDRafrUY59bnLQY5bzDJ2u2SzBZsKNWKk5f4ztDQqzK6kYB7es7T8ZsPn",
  "key24": "5b4DSx8Ao5ASixwrHUKwyfbcYrkrdBHiz5wNHiQzK24z9viVwMgXicmzaAk1pBMVKoBAnHVEdFZnsswnz98PvdzS",
  "key25": "5JA7awBKo316ebjNptN4qXiXpDiMnHzEbQbv92Z4E2coxr2MENv1J4GJosVjUBLjQuqVpeC9y55MHxed45Dhimqw",
  "key26": "3umd9W9uRddC9xWWcbmwowJiSJW2TqRUUpfKyoeE1CzrwUmCeo8u6BTqiGL7kiQ4Z4whYkSdNgRk7RokkNbrzEim",
  "key27": "5VPy7WnVfYDxJGT5j7kMY7VFWPHwWtLUiQd9HrXY8yx9iMS4SFM9THipiw5vgvTRQiVy29eDyswSP8JcLHvVAvGA",
  "key28": "2bZqNrjouWNkNZFznihDVwPvQpvQMqCRnA3pEA7NZrWcurWPh9uxLPrsVBX1hMJX1t1rAjdZbpPTqwSgLGFNhJKx",
  "key29": "5Z4QDHYw1Frki3SUUe2u6DFcba1WxyS3eZZTMVi4rdv7YrVREGR7NsQVmhyjva9XMq442nC1g4BXmkPXTNawrdFR",
  "key30": "36PS75cLFziZaV8JHT9yEnr4zppqin7z1t14NAJvnXpZTibXRJnmHqahuSvkLxh1Gm7vzeJCw5Aez6rARVUKv9RC",
  "key31": "3wJ4K97VAkkb4TyPf3bcYXA5DWRMzqS7SYNdUiVc4wEWudpij5U9hsRw4HtFoP87tsvRQdr7EgwsTvEXf2LrGCbv",
  "key32": "2PDp1W2hxX4W6VVBWUnzA86mxT36gfzsSpeFk8DrLacYhUP8UncU2HbkUnQBESeeBjXhB4vPHumZ9z2XCeFm3gGW",
  "key33": "3BWquuPyYJ3jZVasdZdAiNF1fHvQrRg1JmUTHo4Zh9v3fYys9sxUCc5HVSkhdhFVai5QBALTxheMPGzwAZExdcqZ",
  "key34": "3PJJfpUH4CsFMaRWobY99Me9AVYwHuEXQGu2fzre4WoJFdNijD2KJDyVG9gGBsGjkR1cey1bULnQ6DJVf5HNDMsT",
  "key35": "4e7KBoa1j9NXBUbTeKsTAs6i7XaViCAUD82UfKevfMtBioFjsjgTMZJr8GX4PJZs6ZPj3eFrzGXeSXT6KYrTCoWn",
  "key36": "8LW3rr5ngJAZjMS9HRCceFAukNR7W5h1M83rELhMikaMhAtbAjHtB1SWByetwuoJREZ8KLvdgKo3mLmae8unZPo",
  "key37": "tAaVoQ5cvKXBKGHFmmSYZHbo4e74FzrimJ33fnWWGkS9jjxihTPZ8xhieNbNbFr5XuiqGi2UDyBBouVAC52vxWk",
  "key38": "4riZapZYSQ6STq5mk2eJ3nbdckhXo5xE3ZdccbW18noFHzonvBLgCJ2Fpr9JBV7vMaEi1BwXkNyMsHf21ckTcCdT",
  "key39": "5fBBMnkcDGAurTrTmJXnZKSZPhXPDsxfN3uAgERqaKzbFtTcD6hePuRy5vVggB4iTt7DwnxwQBcvaA2zJYDpovxM",
  "key40": "2cXJo7JRukMx6yzX6x8o9E3HHx12949kUjgmirncCCck99EfbRrnahqjzF49icqPD4dksEJsfncQkbqFm4JZbp4M",
  "key41": "2sR5Bf2g93HgYqovrJweVWcmv3QjTAWE7kt2rTmC9g7pKoERKjHtLh7gYi2ys9vwRQviGGSXSGgYv9AqtZy5Bz3L",
  "key42": "4yjouCJvYktQZaR7Hyjzsd7bhmgVcJX1b9f4Jfbj6XGxaRALciduzcTLmwRzEFKp3YUFih6rqVEKiHpVm61NV2h3",
  "key43": "4UqLRboCS6UhUd6eubFidm3XB4B6SmuwFMJStiiru87zRAhZM8q6Nft1RaTY1JbggkyW2Eu8EUp7rxSHujVtnf59",
  "key44": "294mdfA2VXQ8tyn3kxjybzWVy3Wj736zP3VMmFgnHwgBYi2gQncv6FWDBkKn1JCUSUkpgHqGPBNAGDDFScVufrmG",
  "key45": "3WUWh2Qj4jcxM2gxNU57SNXXuSiuNUcmUcbk2ZvyQLEZJw98b19P8cyRZtRSGzZ9MgbZ9DAvrnHTrAAVByZY7E8L"
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
