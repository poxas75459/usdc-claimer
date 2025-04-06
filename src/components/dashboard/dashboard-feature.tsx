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
    "2X4EH4emKqYkh9ri3PPPWLt1XxH6guNRFX7jTDTrkJTo1gXc7jQA9QkdpdmPfWggCTQAysJA5EHH32Pxx9RRLTKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DSbq731tsDhCzNqWsm7jVN1JbQWJL4DuFaXsP1YBCcxMDVZBZrAVkLCdu8cMNfMU5aKoRzCr2wiZvKgkfVv4JfS",
  "key1": "Lxv2Kj3fM3dWL8bjqUhyXcqQmWNdNPEXWKwSbAQ9aesCGct8GdN9iCrofGYRe3HPhDnskjiEASUsi9YFdSZKyyK",
  "key2": "2rg4mNXmZUnMuDMhbzC7L4QXYNyNigyFj41EQGgVEWovSvkosSyDg9M34ixJgKaoBNd7TgvC4rpdRjQKysAirwc5",
  "key3": "4oW2RArzLikZ6YwJrpBnoHAN9K7L1gNzgAFJ4CBZgFjWDacL8EijwPoYLmLLaChNtkxdqHpiweNF9yu1bJf5xKBB",
  "key4": "57GPqtbHG4xwMenKNt2axRxhcrDXevXScRKhoARskL1ASYSrqPDAefV4MB1tgCXYefakgUAZxfXrq3e5TuWJC3C4",
  "key5": "kY5U1CqrEV9TrQhieeqgDdjUuZJo3pjshuSLAfWxYs9N8XRLJbrVxL7BJRVKrpERqyDMgXp3MT7FTkYLnvjMELL",
  "key6": "4TVTBk4i2zFLhYRRto7r1br1Bwdh5qg4ZxRS9rP5YczTDmTzKFamuZgHyNUbeE6ag2q43YZgYwKmn1AVcZWiEAtk",
  "key7": "fDWhNEmqmZuNZTa5ScDSnLgQFUb3ZptHQSb74i3SPNSU7z6VbDeCF1YkS4wymDUk9PrkXGT9rX4FmUPymSkCzFs",
  "key8": "3scCHZuGRmRyK9EvwyocWWtEUQ3ahq8rJszfm8zwptbQgJ26xBUKfw1emiFpjaHuCWM9iK5cUhnUrbe9rSsBzpUf",
  "key9": "2Ebq3wUNX9s5BcqGaaDbdMNN8LrGJpUA3iM8w4qucqGvxHUZjgtw9ujH47xJqHCL4XhKUWS4rcCDDsbCZZNx812p",
  "key10": "5eCko4aVEWV9VrkwEry7gb6BSZ2DgXAKWvnj94EP6cZV1caPeXhLZp6Pb6t1TKeerg2HxEQmLrX7Z2U5tzhXuvWv",
  "key11": "3gaxfFzZP6cvr3EeeedEFdm1k9Vntxjbq8dcjEksgBdERMTWJt5uzHToperKuB8aE51BJPU721N1DwNc2eRiiKAf",
  "key12": "3WGR1YSx3CejvSVhox9v7nbKnLgJenmJYF7NV5Nxv2EYwH2RPQ1EVZWx4Jk6XSfy4k7qWCjcTfUQTqxY3wdTqXoZ",
  "key13": "5Lk3Dc7AUpuYA9AHCftn1xjeZHQ3zpGfkfYtiHa8pw8ux1DDwAdARJDApxWSHWjwqJcTvVnFt154ku6Kr6P9HA6y",
  "key14": "5D3PWKPGMaTkXC4RmwGuDZBAUZhedNy3zitFnq1zjYNXraoeiY1R1HDmAqSFr7bGynTMaziJ1tv1VhZwUaw3oU7v",
  "key15": "5kQWBfubNP3MwQoDgGo3hkDhtorZk3nS1pYHF65KdgyVv6fGmPoYBeCD6aQUVCeKTKxrpiUYdfsp8PZxUEhcsKJ4",
  "key16": "5VbvmequFXUppWMx92BUT15FFxnEzV9HzWyok5KLitkxHTdyZUBr2yxEZ1dkraUAqc9DY9x655t1xhGdEGEDNss9",
  "key17": "3CmRouRzpcoHfUAm87GTR5BFMGe2YMxVsJe4442hseduXaUM3ukMBhHESB6ZriwsXoMxWVLR3hugH2T2C4tjWvNc",
  "key18": "4ySde3LnjriY7QugNTxArm9gmBJQGHfTYY2mHqB236ydgb9iKUNmS5m11BVcw8Tg7XvCY4nykHSFEbtc4BBEtVSs",
  "key19": "39EPwLC81XewGkUV1ZghTS5k8cW9RFhtoE7xCkKxyEQGntwyN2h7y4xJZXbzoKrxi87vwf5cMPje13bM2NpRDyg1",
  "key20": "4jSdAKLp6iqjDRmYjCFfbwbLHgcdzbUiJrcpnLZxSUJcV1CmAtkTYu3ZML9VaKb3JYpHvxCWeRtCQ1k18PLkzei7",
  "key21": "2NiRSDPdqtdGA5DX9gSiJMXcDtpkdhER7y9pdCQ3GaDa9Uy9j5f8i4KBBvmsyRim5HsntVSvmPNFA3VqbHGngnx7",
  "key22": "3NKDbrf1FRoDp2nhUjC4LWaZ7ivWgoCzu3JjE6ABuW5P8Na7W5fpEczUZmBQBieao1N9LD3MK9KYWSpPWuuawTA6",
  "key23": "5jP8XGqdQTihCCD96qj2xZepjZza6UBeoHpXFBryQsNW8C3nsrr9e3FWjo7W3bTCYqEd1F7Z6o8DPFyhKdGArtzj",
  "key24": "RdqMdSZgnVtLS86Uy5pPRhAEiczRcuiz6TahAsiubpVTzLXtwLZCzkq6kJDkYvfkACfmB5dWJZ9hVd7pah7Y3KG",
  "key25": "62nR5iAFcFGPPfjEsH61bfMCfgsEJ8BDq9zjGMcATdcfBwsH5AbMZvhF6jvXzm4Sj2P4YYn1UAVfCCGfNfR9CUBK",
  "key26": "3yQaQ37zdSxTyibUs5K7obd3LgqbiRQC7GqhZCPhsBUtBBertj9DPanxAib2S6NKFb4QYwNwvoVr85C21CAJnnaV",
  "key27": "21WRoJQDCj8L4sv86uU2WL7cFXP1YfJ7W8vCUGHFkqrvmasUfc5JnNdacGF5Yy6yjeTL259NfGtcPp3RuVzvToV9",
  "key28": "477QFyUmMaDqBjVqXiibwaA5yvqr6B8wRTmorCqWLDk4ddixPBksWZdijpXh4hX4KMEFcQPe1QqAYHZyqsNcEot1",
  "key29": "3weYJCnGu8VdFnWhHxkkRq2hg9vxgj6yDwkjrqjdAR6QUdgutywb9MRkQSdXLs3WZeggwpykvpqWBAqfQf7uxyaJ",
  "key30": "2bGfpYGvDdXD1Lh8Eq6Cq47FW3gsWwhxwYnETV653nnEQDc8Fc8mCSLskTKUY9iAoFhF3JVJEsQeVb2QpVkpEpW3",
  "key31": "24suBoePr41wrZKPrhgVXZiqArvv4yzUT3PZGDcA13txRQ77KmJ2CJZZj6gSvgMJnvZDmfGvKVcWwjm1o1Xnnaju",
  "key32": "LVbNU6p2YcHABit58PSkW6kGJixFz7ETpuXLScAbk57K9JGb1UeZ4GsycyyfTgWst4LC1JRLN3hfoUeEzVhCCFK",
  "key33": "4Vv6eM9JmeR4oZBF6wfZ92MJWMiq1xKWCHdeK9C7yYo4WJDcXnx28tJY8fCdY4cghyL8YGD21XsQsMQVBrmeiswr",
  "key34": "4v3vjABc8po5THD5pDWHubMsqkkqpEBnrSQsFdhhNMDTnLgG6Da4aiGfxU31fNSNMsmLdnMgbaZvD24zPDTLqLnP",
  "key35": "MdtCz9RUVJtWUe2ASnHWBiNsvegJeg913kX27Cvqko3XRwaJHLAck7DRsUsVNgXAVSDQyA8qot53fbGYDsrJCig",
  "key36": "4SfYsQgk6H2SWk8eB6tiUejbCuZm2zgKWoBs8NJL8MXgEuBiW7pemYaxdpM1RfuFgiozXy67zgsugY7Xp13QzfTM",
  "key37": "ngz5rn2f5xH4sxxby1ggBNtdEgifAnGkkntHsEZXSENf5ZATdnwtJcnrYvRoQ3R486jwrjwRUCA3ZwHhux5aFYW",
  "key38": "t6CSaBEKFCLPa9VJrJFbiuzdQdvBNdServvp8zJJnN6KLXSmfPbvmV9abAMYmDbP72euTQDPR2KVW8WZVLdeyHc",
  "key39": "2cjPMWGuM86VYFq3Mnbe63qJJs3QYhMdQyNe15EGKik72whPZm1rZKp3JWYRTxKsKndLLLNkBvW5Y32S1ppxo2YB",
  "key40": "2HvRjTmnGodYPmmS2gyGKaXfmfv5Wn3YUe2q2Wudc8FyfKYY4LewhhAaUGH9L8UCAi6Y67qyY5erCU6JLC4EjXcg",
  "key41": "2iRiBoTuvyAa7XHSWwqsPxjMLJx5foTF6HxGk51iJcngUpmoMzsHojPuuMpdAzp9XZc21G15H1GTxDFPZKohn5Ae",
  "key42": "38jbt82PT5hgwGyc7FPbZYFi9CViKt1grY885f84WNVUy4VVGDSr27xwtdo6YdW489Lw9XbMjkhS4rzZqDvbrcLk"
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
