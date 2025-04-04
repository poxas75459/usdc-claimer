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
    "YNoJYfrhkuLZ4covDRrvMpUx59Ss2wfX6mXtb6HuVLK28g1d2hPpAgaiZFjX5zBHs5FKZBAKx5nnXCQBmfeGYRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8bsRBJy7wza4XmyPyW3MfYdYmY9A7gDdgB8z8cCTiKRfmwjsXvgA6CR8UoFbFKMo9zJJWZj5UUwNTbEy2ZLrfz",
  "key1": "31BJouURGuJkKFBXFXu4C4ikmiy6eyx4xDsvETka7Sp9PgfKyUrFkyuA5eJeubue4s1SbsqdprXzBCCLgaPEvs3j",
  "key2": "2oKXrbusjz4DPz2yhwDsMUyskgYckx92UYfsZ1zcr8B7XUYYtmMJPKnhw9bsJRTjwNKxWGSNLcQB3oAAq6Lz482p",
  "key3": "g3thPFugAjHFfCCW2yKJuuapJ1SPzSpkkVWQ7HVNtHeP81UiUV9YGFPRfFJhuyZNEUH8d9oVNyYL9XgFd6TWDdd",
  "key4": "46xWeoy1KnBJUxAAuL92pRCaGwyQsAK5RgbGMzzzSmPrQqMMEcqshZ5zF73xPT1LWKs3MXuD6oZqiZQDR1Zgj1KB",
  "key5": "2wufMTBLHghZkJwr9fNSyW6gwNibUxoKcDUH4iVyQZeAPf6uRZUGbMmiy2AWi7xnXDMAFVrnNjxPuPtvpEdhDmU3",
  "key6": "5WAyyc35VpWeFDtfF9x1pr9SHFnnzegN4uonMYGcsRGmEzi6iQaNciWmiPmfN9aX5KCzXdA3yLtbmNTpU7zWpB4g",
  "key7": "4FoFyTngiyenKgySRRZ6wahHRgfdrUwVTxMokPUrCfd64MDziffnY82RtT5Fz5RvoNXsVUFs88Ld8yNoqm5iLxbo",
  "key8": "4qjeXZW2Wv8HC7bKwaGEvoxACHBG43BH5AG6bwCBQq2Gf25hz8h8BF5YM1nT9VqwPqZFUzGC9qmjkcJUpLwaxro9",
  "key9": "2XvpkTkbFfSFRkRXDTJKRYGmq9YXJcJP8b2PngecVLXXsf8AU5A9egJou3wz1AqeZo1fGqsQyxvWMAFwdLrS8QrT",
  "key10": "52HrTVksszd1GdR9xavLGw7hTw25VG6X663Mb65Yz8VYHmtQGYqUQK21zRXuMfW9usfFjUhjjPgAM5ag5DjNqBRL",
  "key11": "5bmqvTho9UnCf6qzHpLjfwW6S7KuH4NfUVc9bcwp3zYNNn5WPdiTqp25Ne7GodzuNUWcH2RH6Eiq15hpasRtQNpf",
  "key12": "5JbAMzNeFWvbDNWEjY6S92F79azjaTM3hKrEA3S1zPR5HTYHLbGpR4whf5ogRxvPyuh6jbNPhh6PKkEfQg9eh5Uy",
  "key13": "58uc9WoZt68CRWqEqGvAUdYAsz9e6a2ahJdw3VjHKTpfPkWMKUofRbLR48dttHxoc8PyQzVtEkwnbvmh6NpRyqYQ",
  "key14": "6rLWkrqdY4nqnNgSTMFwCAKeJrCu46cRjaq3j6tHEBFg52RrzzBUBgmaPuxNdGWsDf1WWD5EwM4Ti8EMoBiMKxS",
  "key15": "VjqvH8Kn9SvMqCZFZ1cqXbjgw5PxEez9KJiFqx6kQiUwptusE9gLa21D3VsTyZESmqbtRGn6b77sGMLTa67b19S",
  "key16": "5rMiWqhivz745j6192n25dwH7b2EDg1eyoejJFb5g16GwxViD8Tksx8QkioG7krCph5wQfjr9TCQuS1sFsAMf16w",
  "key17": "5hFCKbxnffacX4Wfi8cxG7ACRgBzeCnrh7uoUM1Pv83LHRk7UWcDdjvB93CsLyY7wyzGoejyvSHipz4zyKxNPp8H",
  "key18": "4ev5eRUimVmo2mqSberhBTkezdeLuDKUDMuDb4VCBRWP3qmkXA6sGwtquDGUxeWgUD2VysnZ8cEQ4CsNNdLwcWdp",
  "key19": "4jtSPvjQ2dmk2Kmu9N9S3nPEcBu5qTd3ZMrDgz4G5V6n7Med6ed2oo6DT7p6ZwNth3Wuydpt4L8GmQ7aoxPSUEBA",
  "key20": "4LtVBFet65tvuwpAvChqyzqAPvg1cqRZkhkvAy9qR8n139Z1Zjg2AqAdkPe8KnwU8wQ8mTircFv4HLKKrzbHeVwh",
  "key21": "4tVe4B1y71EwF1L5HobsxK9uh1GmhqAnwMEnMzpXKgQeSnPzDSGL69QTdTx7hsZtiQpJDFBXKDyhCFazzEzPXfct",
  "key22": "s6R7gh78Kmpfr7anXfccsFVX6FLCLSYq1ZQFQZLVP5hHvDyEGeG8vT76g7D9CvyAzXViUuVTAmPB4TvPuYRwyJt",
  "key23": "3nmYiyP8Y41FRLpeBuMpXi623ABgETvi2f4vmK56537SKQkv2BhRLVcwd9duKh6wiwqKC1J75NnohTvX4ZZXptmG",
  "key24": "3bbrUgzsHLGjr29H9u7DAU5NFzCJYpGHrkSPjGsMjJetVzCPk3NYuaZBGquoqKB5kVVZNfhhbxSqhxF8CFpPNWmu",
  "key25": "4LnnMS5TEGzreP8FNq8XWWMrqhXU22SgCWtT416tsjv82mfHpnNdTjkJRNQCcGjz6LuotrCmhQVbb6YZt39yAxyL",
  "key26": "RR92by1PfJ8N9fw6GnMDQ7aQMTzrYxUVpMgmLi4cmhWEK8JwfUhAyjxqSj4jcAJ1XUUqbTT4Fdbcd7FJgQseLP4",
  "key27": "4FpPNB3LgmFRucfvh1LydRrqwQsy5tdrVEu6cXvUgHt3L5uuAdXsja4uDqnfndyj3TAm2iJPXe1PVHBiDLTJLFJM",
  "key28": "C2B9nF3KWKFYa27vcdUJ8t5oVayvECXhr2ek6CQ8Q1fePeCZyjHW2tPdt8BciFVGAE3zcS7mhvPDMsw9qdLjosa",
  "key29": "4JnPfvcwMH3BuQuNGheaHxiszjNrkWVfaiKZAYaPVyyRGKUTVefZymrsXjxZw8dVDSfkmHsBwZCFqR6AeVBDNgXR",
  "key30": "3qYsULYDoy9RGNaRkyiGqB6vpVwMGxEadaC6MWYVP5NjbFPTvjjD1UJDAgGS537W9emzjaCQDiyFgrqLjS6Zyghk",
  "key31": "4uK3pVtgPBJop93hHAdAWjA7tU93LmUUrYd7iEcDC4XfWsxr4niZSZrBTti68pjC1gRWqFyfzjyQC3zqUAKEd7eL",
  "key32": "2puZzbWF82F3WUh5ywWeif8mn9FZVbCqKbhVT1ZrvBwFwLmVG2UU8XefbkRfLgntbGE2TJuUd7Wa5PKac9fGVi3K",
  "key33": "5EjbY4B916m8eKsaToVm2XQSpVqzA4Z1cagvAJj28GfupZD1kihYuAjkGvtEQwThZs5o6QufwGU8f9QhzdEZtUBd",
  "key34": "2eWU8Xzrn2f8zzKaMv5RRLiyggm1ZeTe2bGYJwteQvsgwWEUbw9MB7uNYjH1EjCXj2ZLyBYvq33VBxLs1MvNBLZz",
  "key35": "2X7tRLxz82oRYEGs2MpVi1qpkh2F5h3sQdaTWbeU8C7fiWnF5w7ghK34j2m3SwU4LieYStEUT8KUX9UVijXQLoeR",
  "key36": "62HA8RQ5PTFpawBGxibMWqcguDdRUWvVyMbVESRAbd7H5FzvBAaBhhU437C7wBWqRwZc1HcaKuMQca42dTwKWxmb",
  "key37": "2UC21GzmuX249BLSG5vLJGfEESYzWexEYqqFDBPLRzxCoenXcre2AdorW3m31sDuJTHzvXsHA6AhUXdTX751N4LL",
  "key38": "dEAS6xfZuLM27FnAA2x4MknMkSads3xVYvrJgepz7upaWWTBcja3FkEZS88U78oqdzqQwZ1BoMn4tFDb1X2eYXv",
  "key39": "2NqxW2s6CAkNVLY39MbJ5bBLyv34K1bNdffa2yBdnu9kAU9WFQeX4tnLBGAzqWq1uWf8h7eFRtb4eNcEPSLqbbri",
  "key40": "2MWKQhJNRLDso5mzMeAGJfSnsugPGSogkx1AGCwirFudPhRHuYjD36oC5NND4ptX44PDXcKTLMne8KAqTwvRZpCf",
  "key41": "3Gp72RxLKwhTMBzuSHvoTCNUubFYoRjB7U27FJqbG41ZontPehcpTTSTBdmuTSS3kx1ux5WkmrKieqHjbaCWajEc",
  "key42": "5WTXxWDzR9UQVjLJMA2Lh8Hdja1bVHmaVEiAng1HT1Ywmzz4gCfzn2ywg53SPdks2Azf9vgseGaKdpFHH7JrjWdp",
  "key43": "3nqyLpS8wt2ctfupCsS4NR7d2rhoytq3UHeYD3Qy64ZfWosdSKeLHBjVJCUGTqztEbhHnYVF6vGM1pDhLjzzdbX1",
  "key44": "4YtLok1SMdp7JnxNvdvTFTRcSKUym1jdCqoghnL6sDhWaVWTM2PQg3SjipGtXJDCEq6fzno5qGsxwRuHUWnswGjd",
  "key45": "44vKxVFu7YTJWw4rytyhJKLm3tBBys1ue6BmUAYaQP3NRPa3RmmkWZ7PSFJRLwZpV4Th2swFTp94oW7BnpUdRWZo",
  "key46": "61zARqZn6zc8Z57W3cHGasYN3A2qr8fxoHuE9UYjxYMPA63dRTgUuTnoWqAj3a36g3DVeuCrTWDbWtmf38aU5DVW",
  "key47": "4KSQ69Va5KDoYwpiFvcFjgQkF21Ewu65CJRqs38QjfcCemQg83FF4VBcdDeHPnHz3ZCDuYiX59kU7DV3WBeAY7SY",
  "key48": "3FCrXQswyKe1JSWFx8eBec8RP8H1nZK43DHx5N8PpP3R4PvqW7r5KcqRb6naLj6wbcirzJqpMDtAuexPaHhUx3rY",
  "key49": "5aCT7kWHVYTL7MRwY7iwyijvvMeMmbaaaaAgBQLMvNVdHwY1XkSUR6BGQnyM8a1mS9dxZEDQgRmZnxaXx2qvVzCk"
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
