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
    "3tbohDBnnYn2HSkGd5ALGc6Ck7HAG2UX88rLtMSAZXr5Fh7MDYwrTtChcSgr17zVHiPuiyG9k1Z4hbUdUKze92ZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52eyKqhuUBDYS3LNS2yDv8dNpiWyvJ8Yu34anURXgMNqRV5TVYMDaewArZUmL6CRNvwbkSxY6incghPLUJN3UVii",
  "key1": "28TDdGyeq6sgRjiTkFET3coqcwkNxnaA6jSofmAwTPFnGPPB22KPHRhziRJbxtmu12nPYJCXr1XiJy7UW7DNhmHB",
  "key2": "5WzkYKjSPG6cUmqLLb5Gur3pYzrdKXAVhfUavztkgavW7rww9x9y8VyFkZ1Tk69wg8UEn7kFbs7gvjq2bCrAHY8T",
  "key3": "3Ki7FiTeHGAk683sFWEza7KpYeAx37cnnkL9qo1HvrFGpH3MFRCnokxifA5a1ib4h3FVvLqcffWvFftLmG7YHn4X",
  "key4": "4D9XPt22LJsqpkbTGvqkZfFB9eRcVvUa68PkYssDwS5gZdGKQrfNjeDzFYHZnFkCHSJo7yPiWDh7gEqoKuWpS6wU",
  "key5": "3eYqYN6qxREbNW7n3cZuHQFKm3Z94n2YamWxEu9GEHqxNpPPhaCR55NgM4EJ9cvWFRJZwxKrEXmPB3BaWDAiQQ7",
  "key6": "z4ZanS1TgM2Rgi97q3JDzG1bvaG8iUK3BcFfm5z97pGN2gqQzkVncfuN64TCYS3Z9ztYt7VP8nXUogPJJZrdD9e",
  "key7": "5WPbFtUE6M5BWBxDbf5eXaH1Rzvk7ayRbgm2GnNEAZUNTUfQmTjQE6vhPiC7C6caLnoRnja4Cagx6R4U2kegtT4A",
  "key8": "2Qk3CQCHnujKQcXU2pkp8dxnba4dHxvSR6x2hubcL1U49Ht6EgUgYMjyXXpn4BWapcJsF2T6uNDzfx7gudmq3ej9",
  "key9": "5sPqREmrZQeQmoF2HMWV3bdPM92HkaHTUm3XGi9Rwd2iBxjm1pcn1NjHFppNwC7AbrXdttJifT2J8r9tTWwg7TGd",
  "key10": "4DzeZDnbhzguXNeCa27ZvQUnSY5NgqepwJdgv9hXeWLknoBnd6oX57r1YLjCWoXqyM7BLWGAmmXGfZy12nnjUMSN",
  "key11": "4YzM9QfPCcmFg4wzJVnd4riNzF5wBPgndvQfu6Ne83ZwJ8XkG4gpM4HJe6kg2f8Fy8vFrFZWBidEFL2qmQVhM3qW",
  "key12": "5adsg86yAYhqwUaR1e88mtmmNMYMag7gFC8rPQMJcUrjkgWH5NRAxLFNc9U1uQmHTydb8Lme8ZdMBQD8NrmjmMWG",
  "key13": "2M4mfrkHRQDe5JcvMM3rPGacvBt1PbmvrJZCBewiaB3Kp5i3YSGFvdbjmCPnm3tzdnruiDs17tAVtSukRDW1wfRk",
  "key14": "haHQxfmpsezb36QAzpkwGuYEddoQYiNvECku5FePNpWozfvZMsC4o6BaY7gAhG325EBMAdtu7aonj92UFW3ySB1",
  "key15": "2eZATxyycWMEwtKMwrYBge3p4mR1Eow4LekQaRADCcdyNygSLsmYjr5q5JSshVkPupUR82oHEL54VcmaMaY6d1RU",
  "key16": "3d3Gs11jMuuPZt9k3uvsvmi2YxX7Y8H5Fm3SbLVazAqMb8qXmKYx2fJkan4bCZxe2oSbDiJJ2NgSPnPBotnzVrjS",
  "key17": "3UZdFgx7srzEKQg7VbV7eT5JraLqtMcett6nHpdFEPSR2q1HWseEqzT67tvHRPjci1tUizuL3trUgjs7xv8gKxqS",
  "key18": "Zrq6Roi8uPH94DzjPJEmS8ocNqQk5ScwXoZwvetx3Q9XyXi6CZGoZfAVmnzwC7vTyFsybHRqgGuHxPJ23Cx8cS9",
  "key19": "2e2TedPay3kvfDU4XyG4x1oLQH7J8C3nn12UYGE2VNEPzRV1GhJQ74UWt1TjsJuTqK5sgbLRsoaGpvvkZhayDDnc",
  "key20": "2KcnWUPxEq4tCJQiwzxrEGnBTuhLutxcgyhGJWpFtwruzrxPvenDF4sSHpaFKkB3oYsztQkyFhjZpmMp5KMGYeXt",
  "key21": "3f2N7tR5Va5z9aEqvT4waQGx8wgz6djTnZ8GKq38xPxdxdCkrqTBvfT5VcebQxeEyJLvqaU6LnJ5cao8Wp5QdPDM",
  "key22": "4gi6c8CMxqWBqAPEyqJPdhkn4GSUrhTe3qCqps89uNdbi52ZfvSSSA64DxhbWydRZPH1PDNtev6hfMk9yXP6rW5v",
  "key23": "2RunidBxvvsfsgJme9YCgPqKTDoNRsFzBnmqA8yBthms1ntyzFcHdqsQsdpurfWCuZWATUHGeySK7qNQq2EKJGaN",
  "key24": "4scvniSWoUVgKmhiT8HgbjUpnxmT58aYDtTQNR2YidJtX8YSRMdThMVVMFbxKTXEQU6PmdJFR9HgLBhkkUGX8684",
  "key25": "5xFjvdZPQ4GxcQWLF2SDYnF8SP9uVamw324vwj9NV1w2KzWnxeXPR7w1F4U98N3wKw1gSwcha19L4XSk5haUrhF7",
  "key26": "3XWkjh3og7Aw8psjNv3EPn5C9u5wGdPKTirJJowwfYQKHvuJd4vt1scdqjZVkNjYsUDHywacsK1omMbdeWVdsGTg",
  "key27": "3sVX6E7sMc8Codxku3R6MtmmNXJ4QSkmXDCrXsUrAy524ci3AYA65Fr9dezix1PXsjtiFbE2icari6Tnzw8GK24X",
  "key28": "5opcoJKiGnK7KkSjDanzp5HUPXUym7bPYapPKUkPXRS9ovbNcy1kyMqynYXWLfgsK5amLFz7xv7c4vADwJhuxdmP",
  "key29": "29vpfQPDFa43YUJokN2UU7G9PJue3PszmChZYGVgbEdd4iM5gnceb7v3ctfK4pmFJz2PzxWxQXRVAXVHJps92etL",
  "key30": "5DWg7ZDC1fsnJZBRNrd2gXfw2rYdV6AL2WGWzLorW7sAKbdTskiUno33yY6m6njsLRNTDFNJo62KEVvFugKkvcpw",
  "key31": "ExtL9urnKVMKtp9G9dikLESKkSzGAvjHDdcSKHxjiVcTXc8kPtMAbcXi6XF3JrZL4NJYDPXgjXq7Wf3gQsTP3ZS",
  "key32": "63AakVqCbhS5AMuqZPjpk8somdawr9qRdcVtu67LVZgCg31QWAiYscSWTzcW1Ebfh4fSwN7f75U3D7zm2b1z7Tnc",
  "key33": "66rKSSCgaRkWXXFoxJCVyT23w9zjVvxcrX7Mirxd8zfPn92ENAKjLwMMdUQ3gV4wD6muNQ3kqiRnWfTP3iYG1Rhs",
  "key34": "3KwMp2zRbfQjA1naHMVdfpejVwNHCh8PRGEKBehGT1bMsmYByVitepyiTPXzsDkzWFRgtkovQwwovwLqDE21kmNf",
  "key35": "29caxyAjRNg9b5NkWzexbdSXAf6AzxTPsHeno1QwjYe5AypUAnqfBfDT3kMdp77ZNxuXNt7Lr6NoGrtDA94WUSt3",
  "key36": "gToq2ZnEZ1RNnVgXTv9QuF6yJrb4TrwaQWQv4DmWAiN8SJgeM9KYfRxaQFnD9itqdzugyRYqPXiQJ1NkB335zX4",
  "key37": "3a48faChqcdF4wjkdcLQkazNCUbyrefQpvFWY7CTTufQr4q57if33p8D9HeuKNcXMqwccxGJLapTg2kv1Ti2ASPm",
  "key38": "5Qcu8kaHuyCekTfu4xewZyqBqrHpK6wj7jgw7MM8f7EpFo8zrwbHreQAvJWpbn7LSrUf7b6brf6msV86WqSULgQZ",
  "key39": "4dJbJokQMWz9AjB9oLTVNrx89arwYdzpKStFNHhUMKiL5XGpvGR1yJvDcwjoBGK9PxLXSaJeFntuaM5PmgaQSj25"
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
