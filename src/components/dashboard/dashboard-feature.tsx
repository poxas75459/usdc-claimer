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
    "iz9Miobw3EYGSms86SmfcgB78J7jhX9x5jAagNXMd5mx2tCzGUWeHJfWzJ3qjmTYQSAxvCs5AwWbCB2os9ZLMVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKRY1DbndxpHwGvJDYFUvK1jaNb5eWdhAGeES8x7WTJQDMT5ikftYBdpFAjJkjBy8hRfZ94QJuTNqhzsgNrx6Sj",
  "key1": "3kuWxsPsDnGudZdiZHMNkJdBrdRjXg2Rufg7KWK134R6eVuGJvvE4yr8gWoc1p4vFpEp9J7j74RmEfQn8jZiMPPg",
  "key2": "4nE3ftGBhY7QnHFqMqSPWAt96hPSN1JqjtUQciEQifs7FMBXY6jQBsznAyCuEFKTVo8sLF9Cnx4214nNggbn4rTx",
  "key3": "4TEJdvy1MoNB8Nk4YdM9cxpc1cenpDLmFDDgojgebvDcMfnrSstb3SF7QLRXzxyVRJS44k9rhyvPF9M1npSq8RkY",
  "key4": "3KvXYCmb8N69mTZzpaim8DL1Dsc3J3rwNYyMonJuUGY4RZZhcJKaLqnZHDiWmVgszasaHmeibdvDN62NhvVD8zWd",
  "key5": "5QTeU1kMThZ383ctVhDRL4R6pC4XA6pj67K8qjUpsVqP51JHFG1VjqRt3ee4gZb3SF6dE8SbxCHwo9AkLLxYXyCz",
  "key6": "3RF2q65QRYq9hQ6XhWX81az9Nn4NBTx1ecsV1btyzcZdwSK3hZXWax916LCcCv2UAXbRLHjUXDn4vpox2MNrDVpf",
  "key7": "2BE1JNHwV6kX4a4LMLSzw9DW1hyn73iv9NQBdC7NavzZoqk34ojsmGHdkEGdeN4Fm4ZrSR73LA7Cqgk6iHW3wY9J",
  "key8": "5Whv9VZoENA6yupY1moZkDBSxBGSfDozxZQNUiEgkszCGeemzWWYKzHCkukztMBrUdVBs1d36vfj1tWnxmcWUci",
  "key9": "538fwrThiZc6eL1M7o1Gs1QaSNecWt3oS8SAwdAGHe7yz2VvamCVLWdWUvhfbHiYQ76aL3DWgEdsQ2pMhHCVnCAJ",
  "key10": "5XBSJV3DS2HZko8ctJn5igjFSZGTSzpAw4aY6wRsDXwS1NNeRhBkZuTXxAmVzPWY4HRAWs2ANhJFRyadh1wjC81S",
  "key11": "2T54RCz7BmtUtytghjnfURCukKNunyTLG3PxAWiLbxfakxuXwV9rG8qH2E2ea5mAamCx2CHCSSqg1nRCtdNVc1pX",
  "key12": "3af3LdcCYWUGCqKwERxytxV1Cm3b3Fgywj73acvFguZ8WNPnNNExvgAoFhWA7zyFsqhXUcVBVSd82CUtLcieFrx3",
  "key13": "3jYNbN8ZJZKuFHwYDC4dZufWky6SztmHVK4MmZq3yFra1dsvGSUad2ctVXrcnbsrxqo3F7sZoyKkVjwyiD8xrMEm",
  "key14": "3f6MaboyD46GwvAiczMmCDJQsPBqWiEstcwUMW5NDkgNcFedgJwjckHsqfAjgXgTjexUmoUxHQ36W2qBeuCQcVmF",
  "key15": "4JaaYV8zEZGvNBBoHFQMJB4AhjgZhjSkL5nVwDiNRYdyR8TWBd5YMWajhuoZJDvYH2DNwC2aUghczTQezjYB2Uaa",
  "key16": "KErkiZdbDdHByQfxv2jWPkDaEzX5Ukhu12h13RECXEsiM4kgRx6UR5VEgKzhBaKn2NDTdKrDPsXBjTELYe7xynr",
  "key17": "JoxrSxVcKWmTf6Sq5ctVoapz39ru192vbndqdiJKrrGnixXgE4Dxi6cPQm3vk84wJYFiTwEtZNHaMcMvDs9x8Ua",
  "key18": "4y6uMn53vKhso1T3vsXzMFSXqRoFqXcHZiSSo9s2GNdDVRMYMbnr1jGahkKE26eQizn3eVMnFyGdqopPK7LhSSDA",
  "key19": "3hMDrjx8jDibFwWfHENWJJ7AeTzNnztNyinNh93PYPZ7i5ReFc83XGAmqPiFRvua6Z2pWPcV2MKYHmYbnUJDsZ46",
  "key20": "MR1MzrMv9JELoM6bgfA6i1vDrqik2YJRhvWaEqFUCd8cbx5zRYt6m6vx99fPiqpUWSPPpSgd1htuG5aLH1cp6M5",
  "key21": "4KqRo1eMY67b9py6ojhMGCwhz9feLxE2FzDbG6HhxZTGYThwQucSHyzDJTLDYZFGgDo4hvzMPr5wABHk1caYAqgj",
  "key22": "64LuaVunNYn9otn85UooTARriSwQT6j4ybEaSg2GxHMbogFVF7nzEbNtTemAJ1WtfYePS38JEHfR64ah5Sx4Bfwj",
  "key23": "rZfPHWgbv3oK6XRwrPgVkrR9NigtzdA5tvzmV6kDbJgzyj65HAzXUjuP8ypWxdxWWbuFMCLfyHtMYpfjsfaD4Jn",
  "key24": "5XmxeV16Xx5Yngf5qTxJfvNfsLYpXBgsjjCPkKF4Ha17FurwpbxFBZigcWL8jYMC9u7d9TVT1peE8xxyoZYZdSmk",
  "key25": "5WvdsBGnDKqEWMZEHozrRURh1Ge6ksUSkv5qT3zBuCy5RwXtvLvkJatuM32dZ7QCnutGCqznpBkbvHtdzXVqhj25",
  "key26": "5xH9eE8s8nAaYFhWBT4vGvnSTpZkDQ2C8WkDePSdQUmLw4bkNdSFuokkGHqzScXN5oQNWqhGUiQ2eWwTn1zBzk1L",
  "key27": "3jsrRJ7gNSHZAd6k8wkoUzwr6Pqadz2tnm7EEgtM4mVAHMzw7APcDsgC2cPsLmNnPXPs9Euufm5PNEtp7vnuQHqa",
  "key28": "42f3J5hUwJbkFfH9cPQrLX4t3ocKSuxaVHvBcrVkVpmYvdpzcAnERwFyP58zahu36Zo9EzaZaYM46SCdGCZQTYeb",
  "key29": "3RJLi7Boh8GHZZug9DNHkgADZ56XuucurW3DHM9kfz4pxrwykmnK8jbK6rprWqdb7GRhMvhbd3JoQig5d9iPzRV6",
  "key30": "2bUkUMB1gQD59G7UHbdWHGRCbPgRqbHMJJS2UCjMmtTAEZLDP2DJmJ1Acfauu7HSuGrDHzAHV4RpPCtWGwn3MVxK",
  "key31": "4VvXDF7rtjqkWbKLiwhUTgZmYGjVVaZdwuxQJ4p8SJ3A1pfDLg95E5znvTRzQ32dyjU1PDZdb6DAREmSyABX2oyt",
  "key32": "vU4QPCewyigseRCmBLfNZR59ZZ6dKEbpRs6M8aJP9RQkam2URrcAduUd9PRDgeXiatiRj2A2fHzfPz3spnnbsnP",
  "key33": "4cEoWXiQVRR2VbbJhwaFJSS2WHHmYyjJLufHA8FHNwhVappSYNyQN3JLNUcuQ6msxMRdxuU4abZJhAwmLs7NfvLG",
  "key34": "3kKnt8SYKUdj6sSfNrs5hv4rMkg49UHSFGx6tBPFvHDpf2csyEC5ZyBsps8eLmuZRRcxf79PSTZZQ8ZPdAhsnJga",
  "key35": "4gabQtW4kikCMgoQc8VhjHosFwrr8ncA5WC7tZw7reHuKdXgGYef7aTWLJM2mjaBgi5jXCu37zTfQ7FX3WguzCEL",
  "key36": "3AAFw3zkZZ8izAhxugqN4DP8ZvNHoeMHgBrK8ZePornyqLYDdd8xHymh1qsVpg3kPQkeRKr7HUVgHQUpgnPmX4vH",
  "key37": "cwM53bYAsUYmeoz22dgvRERynXfZ7oQCe2AvRQNmNbGkSzPGAKts4qe2snhEs3zAm7smwXHA3Yiwb2L1gS4uk4d",
  "key38": "4Up75tqjoHcqrui3twqrQR3beYsHeAvLJ9VUdDgzcdkmkMkM3pKgsTSYJ7e6brGdw1ngPSiy9e2gkzFY7qARsPr3"
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
