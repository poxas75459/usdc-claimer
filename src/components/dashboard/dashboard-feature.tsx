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
    "2bzxEDgK4NZk5z69KX2xBUkCo2bYArzWqPfTJsr1YkRr1aTKCkQ6P4zJeABVvPH8uD8mYDFjavEYVZZbNx6jiP4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HxrdDNTJxtDWYyk631ZSNbc5wjAeETfiAzUGWW2PnVKSPJnt2byNF6NYEzH31QEC6c1ZArwJdShHZDC3NbtwJHW",
  "key1": "TBFu8cPhSTRGHLgy8VJxRzkVCEGxBeim1u96s6BKTE3RptCp7RkF1Nnamowp3oJAvvBPscRts3vSzZe6ZWUDGYY",
  "key2": "4fEYdKQGv1oRtSC8kS8RPgLDvfGtEQp28QCm3Yo8JQtZHmLMuw1yD8sKuYeJx7FDg6v2chH1QNKpEpxSNcztdXu5",
  "key3": "4X931THNbG3aB2QgdgFNwu9Voj5Cm3nb6jjN9oK6oA7hMmQW3JZPjgiC9xQwazCZbeUFTdVMaB5bZ66gSkPr6m5F",
  "key4": "4u2RvZzRkQYRzA3TxPC2ttaUj31qJqu5AH7vH787RR2kJmCwqiKhuAve6P7GaFhB1N7jjrnrj1XQ9C8XyMEupjdp",
  "key5": "5UYc6T4T3yrHF65LdPE1gYdpVyv1WeWwJggapKPGYAGmQNEE9GEGbtpAEQ2eGLmkmvxHLp89rnbe56iq5W5p8ru3",
  "key6": "5KANeVC35Tz1i3po3Z2KxXNLEijpUv6waLeHYYfXaLQo5p26q8fYZgLZLm4JZCHWJ14dtN5Z8yjJY96nX6aHL9aU",
  "key7": "5WbrJg9yMBxV93ptWYYB3U9Fuvj5HZrkKyGsQDfRRuZTBHKjiufsQHBgaXMrwFh2v1bbTPTT5uKpk2HGLmkFitdd",
  "key8": "5jP87wkhULJS4JCZRGMYvX1zP3LZzsTCVc77dQvDnpNE91oPToEXD2tZiYfZrNjuaz9rHYcetV4bSLmTtZwvAc8o",
  "key9": "2tALUqEJvqxFT4ytTKSp6ByG54oqLy7hhZQNjxbYRACQTze5MtE4frd2nNqww6nvowecuvC8S9fGmQycRH6fWU5K",
  "key10": "46ezRTxCJBYDTe1A7JXdSoZ4J6SqGmuMPffGnboJjsNVCtStCPo36pi6tLyiDp64H69SjbnEDb7DVkvtYxDfBrwk",
  "key11": "4iDKVDqFCgQR7anR4xaZXBSqGh898fqNm58WAtsfyaCLJcvhMq4bLFXn1MBvBsguagnNg2XM44zP4mPr99GrXu82",
  "key12": "54qTNKvxstrphwH47HCqHJA62vMa6UfVpHaCnRwN1i9PCvS7VnrgHz6ERSuQ3ztRxoUKRxhJMwjUmnpCTWTQ4s3b",
  "key13": "3EtitBNtJbk8S7N1pRTQA6PT1PhpUyjcB6ruB2qSpwSpESPwpyvYMjAeXp9zhtwR6csXWyTZK1uHzUUCXBCm2kUF",
  "key14": "5RWupdkUgfaEiwXo6momne4e2oRYdXUTQNiJSY8Gq9g71kQ65YaTVDvpZrv7oTuSnyedoWR2q6tiaCniWdNyzs1h",
  "key15": "3gqYHNiFXpYAVtaJNTrMyUhoz5XfJXfp1d5rkQnJc2NbyFiWEh7nBgpAWvDUxUUdH3HUqbJwq3s67uB563NufTbY",
  "key16": "4i6XyB3gyjBVUpfqgohgiLecC5PnTNVkTMtycamW4AwQRHiW2GVfxzhPsppbPHBrJSHxdxNuV3zxdRvvD8sn2FLT",
  "key17": "ok75nrgnR5PuVtvmQCnsGgiNqpWmn4miGdnpdiGRfmEMFRyPwmMfAaDx1zUC68erSdKeVjZHFQQWdbNBD2uyJ2x",
  "key18": "Wjve5TrUy4c86rgWPevciRqZLvZVGetevoL8msfE5uG9hd5DDVCeS82LatiBSTKC1fCRZzkynKoFHq4gedCuiHw",
  "key19": "5cKLaRc4upibB1XEZCXpjRwN8bWyGK1cjmsizCXgxZqm56VGseTfDzkNbFg7YpZEVfJpa7sWJCv5Wnk9kwhNB5zT",
  "key20": "4yUyo19rx8Qx9zvEcagZsuRyH2LTC6ptsuXKKVg3qTfWtfXeMqEhZinMKXJ1Do9HGs9HUPSkvuakmr6Gmz4diPsu",
  "key21": "2fS8ZkRjfMiaws5kqtjJvcr1rYhkNCHtzVkrmUYxs6amDcfTSXerAeKGnm5HGRwyvZ6HCQrVaQQSvStne8jnFtVY",
  "key22": "23YfJKnfbRgahKvg5ZAKqUhSfoHFWXtP8HyrZmGrueNS3emQ1coQgGZBxR7z2u5JVd9yPHyAvmRJU5TSKBtV7gzn",
  "key23": "2eVGZeGeQfmv95ebnZrFyU71ngEqyqNhJH8MFiG37fPavhuJzCNvpo57XwVRBNnozM1qH7T31QE16KMJQMgPwuBX",
  "key24": "1BVwzDkdbFXFfzWqVCEEc3CTraUH1n2WYDsQjFzZuwyfHV9kme23ZuMti2E7pW8oRCrwFtJAG5zqJmBe3gYT3Gj",
  "key25": "4Mg3LwdhsCWKmW3FmKg7nC2vtue9aurVkeGNHGoUF2gZTfcz4qAkxyeRdkKgapwALAMXjmP5yovXtKbQohpNZYWu",
  "key26": "5MciRBLh54UbwCY7R1g3Pn8JGjUTYrSxPgps993XaxyeDc9hYprRsAk6KUTTBYU49k62tYzg7GQ826SQuocM4CR8",
  "key27": "2qRUsc2eFEacMNMyRagxEtzGgjWMpkcuJNyHapmYhz1upnKsr2KP6NjfSMZrb2SKAUeZX15tZodZUZfTfMRPcsfz",
  "key28": "HZoPXUkhF4irTpX1MALhoFuPv7kWhcQTNDbG8zgi4gK6uNddV81pL1fCe8hgjmhxCHMGxhy1m4sQrtssHpJyqU6",
  "key29": "3Rorka3cE4rNKU2e4eSWpc7tgPYNXQqefYK8Jx4G9NXs9tqMx58BY9xSfxexc2WCuNB6Va4ccCr35Btn4Kex3c4H",
  "key30": "M8B1exQWwAsGULon4AmCdyD2DQkxMdVtMVkL3NZ82z5gy8MSbMmVqZiFmRhbD9kq8G8x23x85VUYsNgEG16nX27",
  "key31": "X2wHD5Tp8vvfUKemYZ12MZqHGpsBb6FzVzUPbu3F8rKxnozu26pjffN1nJcV61EcdgcbUpkaHh9yYVScWmJ6w4B",
  "key32": "5hWCfRs7qRDxJy2x7FkvYEaHHuSv5Pad8cGxZAzm6HcyLquBC9ivfiDrGR5HQVKFUnPeTkJwyZLKgjf4r6Cxjfk2",
  "key33": "52SGyz86XCCkTaUyFTpdHf3o5an8MwUQg1pYBDSLHT1qbKrn5gJUrJgXz5GJpZSMAQAAd8Fev8bf6EM8YRDv7CuV",
  "key34": "5mR1CWmGzHJwwG4kHZJKRSF56i6FLGYNjxPY9aBWgquC2nDLUHdL6hnK11eRXDCdEXjzsbYQQqG8wRhgY618a5aH",
  "key35": "3TPH1YR82wVFS8RdyjP1EuWn2xypbbtyoGq4WfRqp85mitJrs9JSm5iyZxUGXwBF5wHxcaghvLzUGxvQbgZ3GHr2",
  "key36": "gbBH6rwRQZoBX6cM3Uqhwk7jFyo14dTxuGhsUXDPZt3EFgkEpVVHCcVbLVDqYYDdP7RPGg6b1E3khjeuDLkigjt",
  "key37": "2oiqAm67Hjj1Xe6mJU5EyLrrEPN7sZm2Qnqh9qdnBXPHLYQXwDa1n8ynuW2F17cxsmRDazYdb5WLcSJLKeftH1gr",
  "key38": "gvbtkFAVkV1qKUVUehHeyGMv4zAHXBPrhkUX84mwuvMxaozozXXqjjUPewUvG6ouyLE76u7Si96kFr7VT7qqiWP",
  "key39": "34dD33NmmWs7HTkGDSJudTsS9KKp1SphYTcCwcoJokuCn16nvetSAfLpEVx9rb1F5pUG97HFDDANHeHTWEh3nU3W",
  "key40": "462otcJCiXLCs4EYwHDQ9gZjMb1D9t5mqx3m5sedBAc5JeuM7etd9KJak78Pno6Dv8XQp6QRZtosFzwqoUgYsKKj",
  "key41": "42SvYw2mErCGEv42acJBm65UJyNKiDFte35SFmfohDnKRKwRwiNi49ZhUtzvKudTUKVmpBpVdJWmxyV8aFgaiFWj"
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
