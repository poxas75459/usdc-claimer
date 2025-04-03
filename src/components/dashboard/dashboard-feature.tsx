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
    "49vekoM2tUwrnTgRSnZdGk9p1muCEGuhzM3EYBXEF5BgRFhmLURvcUbdtJXzZqwSR6SjrbHUCcn53ioZzW1LdwmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZNG56JZjubHuk92jtzV2BxPdFNvYmHemEfMuCFhWaH16drm8pUJdDuY7tH1zwjA6MtHChS7iQMaUQddD6BTvxHu",
  "key1": "2d9vrUqDFaMwsGT8heFT3Pf6gNFEZEoQCniDnrgLstMCH1DyMWSUbyCdiLU46fEjLhJKynxftdV29qtGSbbbV6Bs",
  "key2": "2PurctT5wXSksuPAsAHk1PXendfweiwGKziP7uQ1nagb4S2QCQNpVKFEyhP9kKhy4BKFoJtTEJgXkQLihnNURfXB",
  "key3": "PRdeP7KydQF5WRwuqbUUA1Ncyk3qvpucMnAqUz8xUnfyUh9g824sWE3rEMePGEGVLPqzeB5XqLBq6TKuBPetGvE",
  "key4": "3ZF56Yo6JwoqzfNDCfy7PbX6XRY53KhoEVeJYuNFTdbGfpqmZnSwUqSdvEbVwLXYxeQCQsU4PpUiSeeTAWA7R9uS",
  "key5": "3wXAtZSupwC1qKxNPzw3XnUeRM7KNZA1fnwybqKL5amPP6GwTeLaFcxFSoXMCULG1Z2ve5k2Z5gqhdFj1JAjmFgm",
  "key6": "5a8tukuy1AsXG7hDrFaKf6ry5vMz91ZsuvLrBf7SdReeJTrWJKRrh7AYjBMBQ16RqgmxCQQx7kdutS2aPgNCsk9r",
  "key7": "vu62kPPhxiQMhXWg3A3xLDimngJNCf3u4fgw6cr22DMba91qwZnxWd8eWXcuHaRweauDFFvFzitDxMuJEJV6dS3",
  "key8": "41BT5PZhM1VsYDUhPeZHYU7F7TFyCubhRj46vK3SUgbcmT3EE6WfjJBoD793ThKY4XavjdF2tsTyFDXALamvYu3M",
  "key9": "FfMjJMCVqGC4gwwe9BFX4yHYfJNeJx9eU7WzoY5oczEiNLqJsRnibLNbQS5nv3QNHKy2GiBafFV5yCbGMPGshgk",
  "key10": "4th5ifAuYquKUDkgerptwKCUD8BA3WBbyy7wq3vvLhma5TtdvZQpKz9d52fGQ9VdAtE6LUhnwLxHpKeArMLkmfCc",
  "key11": "553TgmdXEMC2ZmWSACPiAAqEfUoUddQwciHmQkXa7bLFvdPJk2uekL546bMgkiNbaU6ra5ftJB2kahdXw69dbzkv",
  "key12": "3V83U4E2KjqwF8aiZsgfM19ZcobxvpaKiCs6nUtjDyZrTnHyeu1dZPuuQqhVe3Ajr8FmaSDTCkHQBENensJDerbi",
  "key13": "5Pya3or8CmwU38BgvTfJ4DgjiCrbPCB4se5yC8wxVwYFC2b898Xomk72NGDpHnnCMZwws9nrXaz6yKGEVie9uTTM",
  "key14": "3PRpjiTE74t5Y5WPNADtEhQ3eQacuGweNM6Hdnp3s6pcqxeztNJV72KP1KnBSGn4v7UeBQj8LDU5Ku5Ruu5kvzJ",
  "key15": "2ZrmZQFRcb6GFUz6Ga8bAkB1CSN44Rf3uk4L2di7zL8ftJLLQu9Si2ZSeaae1fmbYY9dD5UHdWEFmMHBnuwzhr9",
  "key16": "MnWXhga9HiCsuL4tHiaLV2H7ae3GELa9bb2smustwRLT8FaXdnLnzrhbAEFpg5CfScRdVDuntvvbBH4FeSH8zsq",
  "key17": "bd61XYncK21MyUH6Y4DBZLZafBhJ7BnRisqft1i5qy9GySc4bNGjxYA5x8ad5TkX2KopQE3gDVh9hW2VHqRAyYj",
  "key18": "3QtGP7Msp9EoX1N6MVkgbSQbezyCytGVafFAFEF3qweodgEtmQHMrGbbzVUu4VrXMctBj9ZFcGuJwqePnJaNULYn",
  "key19": "2a9g4up6nx9WEJExFHz8AjrbGohpWDhjhHN5A49wppBMNQy2SZjdf87APLwJkqtmQqRgjtJ47NjfsZZK4cKKNVSf",
  "key20": "ubiHEv3P7CeoreMgXQiG5YtPvrz8TaE1N31GkSeCt93TXRvPb2vSfgbe2KcTb7ykyJXcrztrRAtbmmwSxyMtyTK",
  "key21": "2AbtrCjLepivbEF1nxSRDsVmWghjjNmEGjTz5QGDfKkqNqDJyv22daMoX57YgYqNF2KDsmgtnehcv6qszndU2Shm",
  "key22": "2G3niFYy3cFbMqt1joAiT9XJpoq5ptmpyVj4x2KuzFWtgcxu1K44zqo86Z7B6Ve9NwvBP8M5vs3mrrrgBJZxsEV1",
  "key23": "3FR3MyJuXFRjxLZVNQ93sEbaPsxBffxb4ZC43uCJ9L3rX7kyjDJiKZDJeQ1LykHiNd3ysp1c8hKfJQQ4ut8DKKzH",
  "key24": "3daaE3jgnB6VzKpFz1PUGcWXMZfaoLJ3VchMt2eLCJeufZ8Q9niirCPHNzVzP1gSfPrkNs36MJ7FZCjTtuJP3Bi6",
  "key25": "61mU7Nb5MyinNF621W6rYRXEH5G2R7tp425JCQueqzdLur9cv1drNmRjFxqxkbvTbb7Cn8EgQ8NyZhryKzhugex",
  "key26": "2f1qFcD1qsGSKLXexrpvNfSSd5hfeRXGomDiHzjiBR8KPngk3ZqnvnYDaiCf9SPyxnqap3Tqq26gU2TBHnjRnRHY",
  "key27": "63viqdJJ6XLyhgTszSMuwR6nnSgFKyeg3LdirjkJRo6Azja3JzN8rD2BBph9wbz6kPshdC7iDnQdDyggyW2yBz15",
  "key28": "3TdcjcLnH7Kdpxgy4yC88kBiiVsBY3KQKPzwwBzcS1aLjfBChrPmUM36cG15kfWSvovx6SMoR97c1tzmsaQrtjK2",
  "key29": "5ue9LutELpUmB3bRi4DPSXVhdhJUgJLaLeabC5gwXjxB3LGwxcAcg3Yfq2ftuggsMo1MmfZQgwgmp4n7hYbV6HD4",
  "key30": "3Ddeg8eEZTYinWZQzVxa5SZtPydMJERQJYCjUFDnxdpaz58CHQZvYHiGenbm2YtREPZ29DQLscs994h2tgdYhQid",
  "key31": "5tH8qjFZEdX53MwHRDLH3huLLA8yGiQ2fXJ4metxiWX91txHCovyFo4bwLhWJ1MC2TLzYUuM2de1cY4CcFroKokb",
  "key32": "2mbbALDGsopk64DdpxTYjpDvsZDFe6DB2uZqwhgUsup96fJKtdtjPrXw2gTEtkAvmHZAZ3pKUYFkk5ReWrWwEyW5",
  "key33": "58CxfhMETtFpWsfa9zTNscVUJegCjf7H1K7Sv6No2c1nkfS1aYhq99qk8KmFpMwSzxDxiFLTNhQagFk2ZqfyMgQ4",
  "key34": "58rmZugko8QdsW8yCVPdy9A6ocn4Lv5HDxb3hqi12zuw6jzkiiWnNCgLUSVbz5nocT5VX1LV9fmDFcjV9PQbHvLW",
  "key35": "3vYmBbVWVkpvfJUSmY51LoL4m2k6zZ4p8Px2gzoFXpBvriowf25fePXxYNYA6ZRWopSfLcNm39FcaW9iJrXapD2b",
  "key36": "3aeQFQVaAikQBUBzafoXYc27tnLZz9mbgNejBSqE9CTSZ5SdxtUiDcRKguqecRBfv78eBgrJVAss3awuNBDUovAq",
  "key37": "4GtpPcBZAbjvoNoMzvMMrF5LdtKxF6KRnUenZjv8DvXLy56e149dA2tzxM4rhgduQXUw2EW1dEDhMCo7YLuEtPrP",
  "key38": "3dpGcKB44bywbLyLt9DjoTmwWTjDL8jXwAZGUYZt3oPrx768PmhC66mCRLNZz2d97mFTjx1BMcSjk91B9ygd7ApX",
  "key39": "2CQcaYNDRFCqfVt7yCw4c7qDvVnPp2MCZbH78JDCcdNCjpBrWi9CwuYU5AKAoHkGWPgwoNHGu268bv5Uth79P5HW",
  "key40": "48nuLFJq1iiZ4YHgBqg3VLLcUas6LNrNNVdK9AMM6Nwm9bPdxbBvbwWcdZhJ1aCHvEcMFzv6VPseNqyU6KnxYFYz",
  "key41": "4Su9DiHpz3WnCNBh8HfzmFDgwDyXJ4ZT7h79s4heG5F7t9iF3NfbRFudLcFfEmJJ2YGigNv7HjvveNPwLFvD6oDy",
  "key42": "4Xj2bDGu6SdjGk8zigF8KXySeidDjZftkwKQhQRtwxqCNqVXRmnAZnh5fLLKWJ1ADy1xL9ENyZZCGYqnP7McAWKH",
  "key43": "2tXLv8nq8ZYXfeiMRwT42bu89jxxNeyybywyqQ5Rqk19yKGcSz712yKWY8XKxgx1vTe4PoNBdPBVmJZCjASmU94w",
  "key44": "4Xsi9uPKPYbTdhwMfEkwWJecYUQrKLjBEyQn9qc1Hg4nfZ5uFNHeYUuGiysgkbYfWtHBz3fmY2FhtTeYM8fMbKhb",
  "key45": "2nxVh81TtzxHoozwb1WsJNsASYTiDFAUNb29kfkNammUkwSGBnNdbuqfuCN2wpEeej11k4g5uknFY8oCzPDHEuK5",
  "key46": "2vwqhwYEt6D6U5repaFHt1opzMGgHnJGXsEgA8LhL8GWEonzY7gJWfJ3Dm9DW1FsCvzzaDjvq9JMGeL7gCxcqnF9",
  "key47": "5BRaZ3L5QFSizRdZJ4Zr2RftXp9Wdj2635YEoBxU7HVwJjCvnmH1WgkMHHzrtQBTaGEff4aUTwaZU3qaTt3MtQQk",
  "key48": "56erhGbHDXX2mjRt1FE8sH6CT6HmHRvGwTNsHfvNab9yo5vab2i3fBsJwiD6QkmKY7eXewzRdftxGbYzDrMjR6KJ",
  "key49": "5WkQeDN1N1zKufRyduUUykJXNj56dbdvE96d3Gb9iPN4oJMXqy5NdAYsi2jnYjFmttKQd4iqVYdq4ibUk9SjcAHR"
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
