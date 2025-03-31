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
    "5ix8zdxptNitHrtRL23UcC4GDj9B6K5cLTH4tEuxHtzoutqrhqw7oEfgDmkYgwmekCpKKVYVV2mhg7BiUiaRgLwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2pniAVJATryFuV8t5fNKwtaYuhW5bDd37NBiA8XPYjmDXxpTJ4H9t6bszyCEzxQT849qJ8Lpa2NwXvXN9JCmja",
  "key1": "4uV5rswifzxWzUcjW1EfnLgF1fxohdb3VBDh1eYMQ4q1A9UssNtJXSAnNzXDuQSpLoscirasA57YSi3PNutmSEtf",
  "key2": "3qCki4FfePfFXqZUhMkbX4wANsexhDa1hkQxK4PadDApqwHHMrUdxLB46MWxtTxftZE4yYz7kAXTtr8eHrewoTFj",
  "key3": "232xT8WikqZitm9TPv7boscHsVADzLpYrmLbZpLo7kiRfbpvSx5qDsM3x2T8jNmgveeLmd6ZFRCun52gepyaRkq3",
  "key4": "4wPfCYNPktSBH6DYX7aN6g6KQbGLTttaHncibw4wkYrkPdYasa9npJ1fRUGSoQBrQZFc41tbrXptRxBGD61qSt5S",
  "key5": "3kpjWh6gcjAEb2ToWJbMAR19UcTe7kuVUJ6J7Df3UfwLBVdY8bTcKSsMnLjSFK8HGEtxCqqqcK56bGHHV6gBD1p1",
  "key6": "3j9CzPxwbQnvwF64qMHrJtpbHub1Zb1cMEqBzTfSsVZNeD6n1put8HFZC4KQpbCgKtGF6PGd7acnubmaKbRkU4hA",
  "key7": "2g5YJD8UBqfoqn3hihytNRzhgiTcocCXpKsF5bNg3CxjvtJpJsmCexAK2qH9NY8aPrfnk5XVDDFXXyPssEc5JztW",
  "key8": "2V2dC8bwy6gqGPNutVwq3uvpUT2Cr621tDBrCKneiQ3mEbSTaqLyXQJ8Sj9ymXd3YvAZj2Hi9HSaAquewGmSt9C3",
  "key9": "XHcxtsCwzSRbiMtz6FrJJhTPGkvPEXkFPNEhccEoKGKgnRT4nHekJfUo1t47SvUzVjR9RTfh3zXQyzQ1nbfXBQm",
  "key10": "45vkS81pGTcHjUBEXbnRU3hcXwUEQNwpzMaHjRx69C4s2141UyUm3dDnttVLhT7BSJ2qs8EsQ8YVqQ696KACXBpk",
  "key11": "4T6xAgBg9eqdkRJ6tnFuMTxBRVBDe16rDkS53f1qQ1s4b8LmCPGZG72Ws7znV1MUxkzGuYnucM5Ydigjrnzws4TE",
  "key12": "3WLGUfkoYmHMDKB81nDn1xWd2zgcc9aFmxC8LZM4BD6USd6E23LgeNq9jcpkA8Vzka1uPEaSv6qVK93R1irVW65g",
  "key13": "4NTvr8QCiBXahLTiCyzME9rQ3k9SE4Qr1pNFc2mRPHugWsj7SMFKzhqCvkskukrKSRk1aCuYow2U4yEqV3pdJy8r",
  "key14": "5bUdUf8BxsupL4om8scrzXAEwU7bwswGJJ7HpQGTGZAYopZ9Td67uj1CaVgqjFzQzyqxbP48T1wiQAFLauR7oBcC",
  "key15": "2UamcmMW6D2tZ2hEJzigqtsK7Ux3ziVvHK7J2YXVSi5jr8ChPJy2y7aTdvvaiCPhRPvbSnSa8n1D1p8jrTg3s1E2",
  "key16": "2hrVGppwJDR7AbDjKmLRNuonqkPN95wtEfnRiNkVGZikP5HLVsKQFQGfhQNjpoKoTH3Q6zkPrFfmVBGP4szY4RXB",
  "key17": "4i6DtgewVd63RfscawZWeMjpr52cdneisq9DLMUqQa5YPYTd2HFwk8mCCBAuvJAzhB8vgodvxMzbmbwMo2SGzMCH",
  "key18": "2W9arKyfjxB2iPQv5LAByCS1qr9pFXCFLiQAPif3yXf6qdzentzXfrbuHSWLbtXYFfVehrMJnPkNBuLSfV17NBP4",
  "key19": "4U5kYRDWEBEwFGvEEa3x2E3cN53p7s92A3uoZy3mPMsCzdnqMUzhg6t7nxwdxZ1jUfiXm8yLH6QRpdhkgr1jYPUB",
  "key20": "5heeBYHmaiD2T2WL5iUcnNDrCLjLPeigxX1gkkUgpCFDFSjX3jPrV2PFwCg8okMGHDVMLpTmUXb9GL22XqHuAvpk",
  "key21": "3nwASyJaWULwDDu9i2NnC5sF51eLxNeqbgik4qiBcjvBWEoDRDLdw91dBtudCCaGsf9SU5H6PvrvBiSn24hQBQzd",
  "key22": "4oVaXeUbKocWwFVu9c64wA3kueeAcCvhXz1aXuAk1JGdXsWN3gxR8764MxPiRZjCNEoSAseyHDyyuAd7KALjv4dU",
  "key23": "4Ypv3P1TCLAyP7GZvU2LvakpYXVQPFzh9tUkiRk98f6eBCzeasaQGgETVdprDxQFsNcDQHX2J2nFauMVAaZLNE6b",
  "key24": "59DZTJbpPtW4KCehNWsK1wDvQ6T76wtiNUY5j45UqwobRPXcbnLHsb4S7ZFDFhCn3esPDsTrYxHKfd2PTahsqudz",
  "key25": "5xgnY8FTu1e4NvEA6nvzkfaCsCemiVGhFjqa1SoSMmEkSZwLw7U91A7BiKhTJE3zykjiDcVd4TVQQZrw95Jn2yLB",
  "key26": "A7LShqek4cHw1H63tCUmxLAe5AnoBVokssJ42H1HRD2UkZwEwMBx38vP1v1r24pVkjuuHJYKk1kHPPg43zuCe5f",
  "key27": "4zHRRBYznk2C7nm3nuFjpRrU7ubWMZJVQCRAor3tJ39LB2VSshZBbekPTTTheDsMrD5vWSzFnPnE1hAoqHZ4QY17",
  "key28": "3jC8U9eChRGSUNWHjqstmf9m9ad2AWk4tV8oAPWi7DDNCGU825hcDj87Qfr1EP6N3qnA6nSHBy1yfnQEUXxKLH7N",
  "key29": "56f1NxyYUGGMH565cP6u7eBfPuFf5oznnXfjhEYCDBUZ5Z2QVXmn5Ayg5yJHuBsJ7pkhMUBvpkABSYFcergFUHzb",
  "key30": "31fUeiXtP9iF4cJxrH9GNGcmoaiXvSVXxi6gaVNa969ohtengXYUgng6dCTCX6JR9WN97cTiMfw4NHZW2dwAD2nA",
  "key31": "64nib6UNATRk2SCQswj1aCX7Q9KH8UGCtpyPR8XMmCeonmMbun4wRoAsG4pZnkdWpAQq7TpU1nmtzPx4zmVxVFih",
  "key32": "XH5jxbgCqLSvAE1UZR9VuWzB935uy1ifqf1km99JuD2PCRPQKLGuA3mLLHYPKjvgPUM1NcNmSey2Rmt2adPeEvc",
  "key33": "5Lci8PKhnaSnnwVupqeQVYXckFeqXTfsCW19HJ7Acv4gWHeBK41SVxokZjCXwEmZBznt2NMQMLfmFYRaN4DLA5fx",
  "key34": "45UDwUJiZZbjUbiSPuirrzc7pDxEkiZYjThG1hC1y9BQbzLfsdXMrZMBeGDizwLZkz7sGyF3B44th32rF69cbfQF",
  "key35": "4crLSodpZuc4VEaUmPm7A4Wycor4LcPkJeMCA8MHUhZwGiY6F5UbHCAuuBvdT5UdKmmbj7FWUvg2eAqHRyQY5UFi",
  "key36": "2x6yPiEW9NZaKb5r35hohXAic7ti47MEwiA1u17tEcnb4fEiMqNbWcFeYarW2XKKYFh9fFyZLj3CbvPvUHx1Xzv3",
  "key37": "FFs1Li5p4dbxdiiMhpKhwyCUswquE58qTD2LaJPGsentVVrneikEGYePvnafmyofMyKErmogeGFo9jsCBCr9wHa",
  "key38": "NsCmnbtfS6NuAwaF3mKpzGPE9ToCygYMUGzKucL1tA7SfNSrySvdxipgCHmu1QySRR3aC9HuREp5Z5EpGffN9wa",
  "key39": "bh9TGNG8kcZBb8bFkiiCguqD7gChPc9sVBUyFSrxo3FQo4UZz59XNcTxt2BRz4rnd4HR2XJU9PWyuisQ51c9CFP",
  "key40": "4XJ9RPsytx8k2YvPadMtQ2uv1KiNtj5sniGTuhi9LU6V4TnRNBCZfQ5BAHJdGhQ2jnBF88fGVVrzhgco7Qp5a54q"
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
