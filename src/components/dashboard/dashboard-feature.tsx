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
    "621wmvRPg3PzqPA6FmcsVSJq8AU22U9Td9YAJg2pbbYN9TMnQpRA67gaUJzrWEgoZZTuBSTVuzx4xnCWd39AymjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M5aqpjamKXx5jpNnMos5ZtT6sMy5cKFo1He5hx92E84QP1NNrXJqy5fy2yvrWLtrobTZYKcccfMsXAQAar8sih9",
  "key1": "39A811QssoDzw53pu1Eb2aypMd659zrtx9G3BhSDMbZyeDDTmUrTuvwFA24Xdy5SDiHp78CYhETi3UTRnDvbyKnv",
  "key2": "RbHuqxGakkJRcbccLb2zrzDg1TtLwLDSjxqZGNSnREYXSmSWKULH8BnqJAoatPKrXT3uUcth1nfGfm98WnFZhDz",
  "key3": "cTKiGcyuXbLbtRjUXJA8Vx1FSrK1sPhEfKcp3rvXHwtEhEDi5zm7uKSi2yJKaHJNaVMc1M28VUykvb9cNefMK8z",
  "key4": "2TcSXDpmtx1BseYYJpQbRwE6hec5PzZRFS7tLqvU11nC3aDJY3x9H1niY3mQy94Q3AnSem3Vx96zK59dV2UbGHtM",
  "key5": "f9wiVXifLk1e7msamTrdK5aptDDZ5hiBg1EWj6ZNu7SAWiJrc4QDbScEEu62dQPiq4s9rbJ8kpbi2wVWgJn4fZ8",
  "key6": "5JuTBdCMjmNKS1zvpqSq3EzmnNRk3BFXLyDhCEwyeyzDs4uhAFPFbNM9puBkmC4F4LA2muEUR6CPy7Zf2V5FLiSF",
  "key7": "56uf9bjSewQbhPHJS3KbgNSmXk3cZp8GDLFMV64QmQYxcBf4pgBQKXKpTdyFLnmQL9WJgagBgAr4fMeRefhYHg94",
  "key8": "2GmAyPVtEPMjf2pwa5kHrRDzxG4C91LithkT3N4q128uVHdyUTPjJAZQmdp4PEBvStjnJ4Gd9xsaE6GZkD7CdGZ4",
  "key9": "4oHcxXq5Gmm36fP3wFfgVrtoYEgyr17HroW8yR7ZrVcujFzSrdkUWyHCw6cGVDn7h6qDyvxDND7XFATNCozpfmWc",
  "key10": "5V3seFfydgmFQ9ifdSvWeYiq8HMuMNgdGw3eXYeVG6kNMuxfUnsfiBX4DECD9MARBezuugXoY68YhzvYsfnWbS2p",
  "key11": "3nxajPGAkKZrE5w51Kn2RXBjJSC22cGKisuieQeTNQ4cKdPMBaXtFmjHu1mT7BU1xNXjMpxyQctUzdcFkgoJeftm",
  "key12": "49NNaKSVMh8kVhToJQM9oyax5fgAmKmEv2cqWtEXuTdGysjkoMV3nFsrJoRKFCtNCRSL8Y9kAccvdp6ERufG2Q8Q",
  "key13": "4m8Z31fBbZtDHmHNQfD7Wao5K7nVW3FrRK3QdNUdtASH3Zt9xQFVeRnvZpfi7cpSrhBF6Ekb92Ldzi47xR8a3DKy",
  "key14": "E84YZbiq99CdiQiFTTCpT1E44EYzz21fYeHuqF1DdFx6YW6bB7y9HCS7qEvJBkXURVV48gfXY7dEjqvZEs5T4PN",
  "key15": "5wzG6BpCWtwzxWd9NuNwrvzyDgemzJN4AWWcQiRjeeL1F2WPqbQMPxrtq4CQ3kQVgVM7aexhpzbruHyTapgknZCN",
  "key16": "4cYUFgAGs384dDnnVRyEGKgVptGjt6AmDQh6KwY5xCT4Mmz8DgbpsXwCnA6yEwaKY6Nf8iBLxVvsCxupe9cHB9zv",
  "key17": "3imwgJdiRCiDvAE1R331iBpAgBKV6KmbjjmMpAbAJxZSQzCxtF56i4ybdCSBhNFcxhm9s8dkRkx6XzmuzexzjQz1",
  "key18": "NefjWK3oFRZjEzbXJTCTxWuHp16Sah45SDuAuZLYJVhpWSm27PTgNBs1RaccMLqGJWFpGkp5E8apkfcRWeHZbkm",
  "key19": "3avBRgK5LHdgQ6YW6VpePjzUFEcVSRWR5invHMZeH6VUbw9Ey15CHBXEEqDjk3SrHwxsqUknaXMXJSADB7q97sLs",
  "key20": "22NYp9VZEaRu3HMKqUDTLyDC8VbzAcMHcxoftpWHqe4mHZSm7qmUsfbZ911tHUwVgA2V7Ka81kGWLjJ2MQj46o8J",
  "key21": "57V5Qq4yJpEURZKN9gBZfPrRkhjsv88czP92qwE3EqDCyFqGxNEQBtSnmfbjWJjTJkcLAs6ztRA8V7gHJC8jMKUc",
  "key22": "5FdCt52k5MeyujNb6teVTcgNmipgH7EuDuMMN67cEpw8VGYpmuQsdRmkuQ313EvxLfoVgdkP8BtVfwQbSVtiegZc",
  "key23": "4ynodqsVLqoEEFRDXQbbNX7ozq6AVZVtvYt4NThEwdkWcYyiaeyYwJsPTjaNCW6HBUKF1SZzTVDn4B8qFGYp5HZM",
  "key24": "5WjTpMoqKVwgB8i7tx2N3cSSVpEH4GwvLTLf36PYtAPHAezoSfGSmK4CLogBDfNAiWM8WMK4MSQ4z3jyThbokfam",
  "key25": "53pu6LhoHkBED2EbEumNpzUrhBgoGU1GPLtJsX2yfRK3zUYvHu6gz2twPfwodpaSpEnfqvkkxWxCTvJtvSkKfZSL",
  "key26": "655BDeHsuVo4iJR4P8sAwgKpCP6Xx4m6bi2tgJj9m76eg4vAxsk65YnsKZgoyANw2A5CpnYNhv4E2aaQjQXWRXWE",
  "key27": "5MCz69neB1XbkAGm16SQNjSKVv1WVQzk3kQ464qazUHjbS3wsdttSky57JPRECro48t4p66Hb3QCrgrMaA9TnVqZ",
  "key28": "5SWYsAA2k8GaBRytL1VVLgSSvcGP1qzu1V11mDNTABunHUrdBkjT5SWpJ9U1B4c9S9BCyaeDFwfF97tUyB2jq7XJ",
  "key29": "2C6EJnUXXNdAbdfDm7oewA8dSmqGGsSPAj75RWmSSWizeuiwSRPwPKgJdYnWibxD5cn9hoY3db35xG19JvSmDDx5",
  "key30": "2Efo35bBD2hofajWWKDtP19tSeQM4yqjXBo98zAqnhEbEYJka1gc6g8wAErQ7ME9Gk6r5iFZA6rGSpAT9DKuFiW",
  "key31": "5fhuUR1ZxPrTCvDcQmGYqfgNqEGeYmYHKssXmuXxYsQ5nUHKoEAw5Zc1mwNEVnMKWthWvyQgkEeViFBRQvakCJK8",
  "key32": "3otxTDxsDn28mUoyuhJPqH5StEAnmcHDE429vQ5DTqPiV4TMoW1drBVx8LvBzpVsqJkvzajeKLVKfoQp9bM4yiiU",
  "key33": "3kEWUZmsHKHfRSqU5ZDx9QszNGD6xoC3Y37N9Uem69AYGgEYW9yGTFePkWW7payeZwCpaH77dkS3TXCjfR4wxHPg",
  "key34": "2qKtsZwtZGtdSFCmHLxvJX7fp8A7f9585yCfMiecVFmQbPjdGpzQwW2KdCgFKhpWApwBpAz5fdLDY8AMipsFV62Y",
  "key35": "47XBAmcqn3oh6RDJ7KjeAoqRaT194PGhwGEXYUhfu9tHmM6ABGzgQzxiVCWX4RGe8cKR8Fd1y1MZSTHCQrVQ6SiV",
  "key36": "5DUoCdNjoY32Pvc3Mjree9Gs5FAgFtYV32GEE2pK6yVWbcL4ggE7GLscFinLttyU8EFL83RTC94ebJR5FJTcAK7j",
  "key37": "3rqqq1ssckbLk5en5FRzVaaMuiqJKsYbTQKtfCCwNzgtwZ8Cq8qGjCWRuruRSBGeRWkQ1zNinEeWvZvQhFdKRMcU",
  "key38": "2L3VNasqKESsaajMYTcBtkdbjpAqkJRh23o5xgivpspgG5q12kyrCKDcUEDJUvS3DXT48Bhi1J6BFTfTAuzXw2b7",
  "key39": "2x6ivXxVa1NxSNA1HBbcHFQ9KSQ4YS9Svra7i6PbFRM3CpwgMGipyTCSWkF2jbY2XMFodyjTE1PYcHM5UxKcpdtT",
  "key40": "5qrywSt91JP1NRkWEmvBA65JdMp9mrXNP1V1DcQQo4Cs6516AqxuH57vqg2exB6i8qi6SUb3jrtd45c6iSEKbqJT",
  "key41": "3cp1DWeE5HYVADDCdtnzseckW7Ns378qa68KSQDm6557yxQTFwtfnf673FGWiETuPhycWMTdH3LEy3pEDUZswukR",
  "key42": "2EBUjCBpY3W6ckBJNhL9xzJSXpAYM1MoLAEbUtR5jJAedqAGQ4LSeZU9fPfV58upjTXWUptUiExxF1VoViTceWQ3",
  "key43": "2oNuH34WLCLXaxQJ2iCmrd3s6wp3VMcTVm7oJZs7A432wB9QPfDJCG4kEE1vXTSsec24GuS5u2crUB81tMEtxaGV",
  "key44": "3rDG13DZbLi6eKGr7ajwRitDU9GA4AEg3QAfTeN5ooT5ySDyJdCuPkP3RD8rqsCBgkJaHni5JQf5TsqsrRGRHuEM",
  "key45": "32MbyXdWcSU8AULrwdiY7XuJgbwuuzaQEpoizhDNvtfKdResPTY8kWsx1L4GAw8xiWxK8UMCkcYHytvEbASQheS5",
  "key46": "3BMPP4o9rGxdCLLfR8an2QnJ678Av7bxkpiRTpCosrmRBQzqViQrJc2dr7cXUpx6WdBaDNVvGXBcZwbQ4taXf5dA"
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
