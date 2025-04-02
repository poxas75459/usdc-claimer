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
    "38KKg44gbjCf1CHjAuHJjUK2wb9spphnz723PojRu4bSA5iUtD1akrmRPV6freuS5P33Y3v41ZNMNNvXv4jzbJMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2izUALbW1owCovVpnQJqnyqrRWhxmXGcWZB6GFRy8e1i8jtpp7qZ9GNEsB6AcAWLuTtB63dqi88xUqfM4qf5FXPB",
  "key1": "PGaAn8RH9aK55wWgEE8QBj3nC3nGmSa9mQhAoVEBTXNnu5CQwSRUxuEswSJioyAHNRqY3ZgXFqDbbJjU3U6b56F",
  "key2": "Sc1yac29Vp8Z2vRBovc1p3YJanZE5WXZG76QNWXQ2Ch9jy6HjAGmuEgQNyoT5K5zeD9zMX1yVvSzNQDT85Vmsfq",
  "key3": "v9m5Y9k6BsNHGW7xGKWPAtH5DP7WN94rGgdAfEf3ERBzQn2gX8Qnwg9vb31nV1mda7AKJ9AA9nbeMNWmoYYJdo5",
  "key4": "415msgkRRzWn34Q4pMWmFA6VJzt8MKqgK3jXGDDCtiTAYjM3y7cGUNbard7PNcufnjCzraCsj3owyd4iyVLdqY7A",
  "key5": "3hzRFvh1uZQjtpqQ9AAnbsdfrMYzgsKWfP4VSfKTNCAkRufFhjA7DdDhBJa9VayMBzWYsjHsR4QNpyuVbHDRZoqt",
  "key6": "5mNaKSQUwnfjSuhdypTubLNELGaXMmGhkNgjWQqsDE1K84xrbWowwWhYoS1FaYChsunGAa61de7rUmoUXuYgmosc",
  "key7": "2vxWmthbkyz781U2sVaDeFrSoBZEU9sNnxe2acNGEYCax2SjNcsgRzrDWDcjrTCEmMyTBDtEgbJKDaEk2ouYdVqQ",
  "key8": "56E69Efqwni4G9Ls58ektPigSp3gJhkpRoS9fRzsKACEk7iQkHZMdC6shWhohyFmVBQXZmEX3BQxx4mytg1Ev8dr",
  "key9": "qo3qjeVTE1pJVcTFf5dDuo3E7CxMiSgSih1mCMLwKexXzodBUP8s9nRA79AunzhgQ5Xresi1h8SkjsvHji4yE7N",
  "key10": "4M6JPSvUtzwMbRWasS1YTxcfm2K3vfLGASwKt5G2S8EnYzcdKeVCN7PyH4Fxy3byr8neEmUn5xeMtuWQcMEq2f2E",
  "key11": "2Lxfc4Yti6rha34ejVMriCCP5nUUu3ytx76gpJrfzagdxE52YKZAMqTVpijUqgcG59ydHq7UkKG7vn68ckgxfDTz",
  "key12": "4szmr6kgL31n5kH62iR3w1KiijcWcEkecx1uy5hunW5zfJKa8H1dEK2xAxU5njRB47rmiM6CyJiidSi944g28ARm",
  "key13": "4Chki3Un6mUzmNPW9W9fcKmMAaZx16yeLAzDEEVPGPqyGrgynaQE7d5ut1nhGqm2YicLPSjsfAJ8YYbwa6W3phtv",
  "key14": "3TyYy6RyuP776j1HTfNk1o2oCRHg8Vq5aKgUo5h5mmUPXYjbNByJcFfjJC82atUxNkvcB3LHkUtQeAipccSD4y2Q",
  "key15": "31ojbH1ShSbLakVi3evxyx9eCV9qnUPWUeEG6DSwRM5KCrU87duWt7HABGR47XVXEtZzNccqdFFfyTR4aLVRxJ2s",
  "key16": "2RY9RnRJRNGAstNC7Q4QQiJNGruMNirKBaj7UqAEs6FEqfNc11bEJu93dpGN86cyTbT61h2YqrNQF3APmcWSZdFb",
  "key17": "o5nRnV3CmTt99oNPDWAeHWfcw3HcbqifnR6CzEStNZK8KaGTmBYGQdAzB13N1FE8JAkZEXxBZkFcNBYeQ6NNvN3",
  "key18": "4xAZHkAyyPsdFrRLG5WTWMYCmAmeP2su79Rpg7BC6GAK6MgJTjmXfeP8BEunR5tZzA82JJjMsHTPpHEodpvGkqD4",
  "key19": "57QExjgx7TCaU3CVRsTnhNzNoFPXYLT1oFXbb9aDcMn4cYqKRCFHJtTRT7NVyiQ3XaisRijbLccEJdrUbmkkL6on",
  "key20": "2F3VvkpKpcmcbbfj61dJLyGBk3HbaqEwirfewPDjTkZCbcjGby8MQoaSUpC2kvnWJUvwRqPweDYH3UPRJmQZaedp",
  "key21": "4Uf2pLpCPeDSjge3kaoA1tx4vbP7tscPtio4tUPT6zywBXdrRiXFBF8A6BMFqDnCmvZdambZ7HuPMGWKpoxjiXWk",
  "key22": "2RnHxd1ewS8RJHfXfvytKizPJNizpEVpCmEbxCcMf84ehJ4zV6CJz1KHskJn2zDYCLS492LXncqZoXk3eVp8Ldtp",
  "key23": "4Wf8rF9xPRaXMeQa5NKwUAhShtRTZfbRRCP7kp6Zjsa3xNNtDaukDMzZS5UnE8ksNjnNtN8XxRxTLJfywCaFecqk",
  "key24": "5AE7DkA39jcUXYdYypxSEdVxfZuLs6fD9TFAgwsqpRj2SxGNkh2DvLDxYwaELAZqrHTPeUCbgJLjA4XrZdAT2KzM",
  "key25": "DhTcWtHm5hWazbfc9PbDdfrVfDK8kwmsAtQsJxMWQiTMFBNZLeomy1FTvGiaWr5k49pVi8NqD2XzikhYRFnzepr",
  "key26": "3N242cn8zi7VSuMXcJBj1AKXWpmmRUdyXnud8o6xy7RBMm42x7cTehAxXVs1JPmG61YwTLG534rhUqXGBi72b9kS",
  "key27": "2a35ik8nQzv8YyLPCzHKtSta6z32Hyp1FZsK5y4j5kFRDmsiJZvAuSAGePTGK2cgu4iCDNxFB9i691M5b6169noJ",
  "key28": "55xVAhtstb8SaGDyghBThppWMS72Addu2N62UXfEADEDRXckBat5cH2fmNFDWH3G6sYKUeQU3PJxaQKq38cio4Y4",
  "key29": "5a5nqJZYWeWieLQVu7oZczZq9nbaS89apJERbiFDMLqfhXWeUJPscP4MPmbjGUpK6UXBtgtwwuwpbgH8U3vY2suD",
  "key30": "2arWUwyTbstPZ8sG8iVGV2VcipH3SM1roh3TCLJpsnxMxMNV2DZ5YeFM7gAY1dabrUTAZL9YX7wGWkWd276kGfTK",
  "key31": "38aNqAZqUM1nAfxnqUkRbmn62nnueMX6qGY6dtwD15uHVjFUMYm4gC5nFhTTRfbdYeF8FkUHyyVpjQHEybxq9hSf",
  "key32": "4dqJouPRnwmYYpq3VubnVhy5FxgEsqyyQJsZ87QNU7gtvRV1X7gNhRpwMdJgan2VGUyRc2KrNXGtkHwvx4AH6ShV",
  "key33": "fjLRKW41zoCZnTbSPZcZLujhnWNJBHgDz7AmXiBMask2EtW9DZHk4Ja5QVysaVtojK5RQU1xyVYZ2wwUwJNUUWX",
  "key34": "34nFdgq898Uz1tVuDnrYVmv6e3oJTou2CsWSmPwoykqpUPnD64XHcop4oFE44emHHfYgRiF2ck5fEQAMF34DgyMy",
  "key35": "4gnLwMNtPPiRZjczS2F1Vo8gnDopSjmXBtZDwcYib5mt2gcLtMRQ1qJbAdtZXmQNXnm9foa89TH9HiNfx1rykS5W",
  "key36": "3Eqd6oeVkNaUhJLtSJaywcbmzqnjk3ZprV88bYziNh7PbDn9KuA8zc5BP7devzR3UcWGcDfBKrCLGijiN3NQea42",
  "key37": "5Za9AW83q6pJaerfwm45tViymtaV8xRjXkbRAHq5GwwcB3aRMhNQbsX2af1f1bCFMVJknTmDUN8s1A8dTrUv9A6D",
  "key38": "EiC7fGekd7jCVJcoRaT3VohWgFz2fGDdbsag5S7mTJ1tM1iA2uXcAj1CgNeYSNdvS6wh6rnWkyAGH4iRTUumXBR",
  "key39": "FYtFLsvSNvX65hQCRQeWbSNJsDpmf524kFNaqnyJJNcrfvTLj1GhTcExMRMyEYQZEK6kZvSw66dZnYfzyzkBnmA",
  "key40": "3X8PZAmWi5JUh2aNjTqujBxzAGFPX1nvpVvCu3mtmx4GkQdVn7JqbiExYRGPDVDRRzxUih11xZTkqDWzyWf1DdQ8",
  "key41": "5HySPJmXGV9qJ7fD611rA5ozfywBFCF6KSD4UxZpBNW2xF988Lot3D1pU8vX5yg6ssgaeEybp1w9xVV71oEiZLTM"
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
