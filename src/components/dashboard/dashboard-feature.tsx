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
    "5xekub1w5PsWciu5EC9LmWxjueUrFbdeHHdaKF1Rs6iacpRqgzjioixq6wpx9BeQYXP8v28GibF2B7Aqizfmy1DZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vTYN7mHUD1fs9KSsMK72EJQkzqWwbPcDbFEmKkPPhcjVfxmZjH3KRmwNiBtCycf6GTfz2uheiFe2Du6mPRj7WED",
  "key1": "gaimnC8HWgYJr5PZSUZ4GJsmTikYQnS74F7ecjKUbRLsSn2J4iqZkrEiD2mSWaVuQDqrEujwrLaZfYVdD4kVsad",
  "key2": "5xQWaK2niJMpicidf1SuhDiYU4TiznYY3hqsn6YMYQWhMNPtQg7JUEyBZZ1SZXzDx8fHV9ji1FG4q65DHCtoEuDi",
  "key3": "3bwK7TVMQpWRgvtnmPfvUS2AWL1N6A3oYEjGZ34SSJUku1CLm5SR6sJq2g6yDUAM54FzVG32SUaeCGXtnTDYUf6V",
  "key4": "e5uVcZv3bwHFEuHkDswgmLTch7N6afiXSTwU3U6jookYudCwNLo592LNyvf4BePekKLjiNxRfxhN3Fce83XN9Ar",
  "key5": "3KRd5ssYR55SsV7rdgiiKiSP3UEZeeH9ZQbAht7iLJmHwgWfy3GDkX7tENT41e5qYVDDkkJfiTS2s91qT9ULEBqM",
  "key6": "44PMxpAD2J312mv2mNUus8X7tuhp7JxDWbhho6WT5Jmq9mwHu8PEqE8CG7hasjLG7WpWSAqBS8K4ACChqm98nJdT",
  "key7": "3emTuDE3soNXXfJqV1TSRA7JcvRyGq9fbrXa6YrnETWGdV5totZ22BknK1ve5RQTUG6CH2bfcdRRYngzpPxSY5gD",
  "key8": "4sWdMLRW9tJRpBCjufaACTvuY2WiKxNYadfJLszWuqchm2LLEdQYrH5VEVLkqQw8jMzdJVQjLrdauaeTEVXpZFx4",
  "key9": "4RPESkfKGXtqUtNVYy8PhDThcDC6XxkmTceGVbHM5GSZugHK75B79BnGnfo5TRYBzdzm48H8WTTmtqiyMecnq43K",
  "key10": "3GjPea38uFvGYeZ8NAZbhc1rFAPNhRqs3t5GbTzTd3W4QPWoNAjcXAgPQbHcHpasTwhJJEzu9heXT7aPixd8tZaz",
  "key11": "3w1cnZA8nyYn8c4YwxojRwgSiomGz4exJx96yM2Xep1AavCERYRSZ1XZbZH6bimtpkSGr3VyopB4YKRXujkMWj6r",
  "key12": "4Fy5Vr8XRAP2gii8D5JNf3jm5BrGZ4WG7GHQWwNrJdrwFGdL312wo964hGVDqB35HdT3feznY9aZm1A8jhMjcSMF",
  "key13": "2xi3aWafdDV6z6ftFK2iLhmLFFkeHn8JHR4eRawBW7h7dBRGZq8thBfrDJPbQLbebLqN8B87cZGgkYxVneSmQaQE",
  "key14": "2VdzyHXcFw7QdTk6ZZE3DLuEZBuw776cTiNR2NYCTcsutFYES8Eqckz53qR6Niww3BxjrHh4NgqB9wtD3XbdTxeu",
  "key15": "5MLA6a2V41oDSnAz53ZBZuzWYaTTbwEz3mVTmtUVN4sjUJaba7cVFr56praV519ahnS4WswkHmzQNq8VANmcXNFH",
  "key16": "1N2zT5KEXK4p3HoQtsn9DdfW8J1BD51Tyva8GSkrbN5rgcCwHybLqehMcyDCRQTFFB9x56x4Hxvfmjz2kdarM1i",
  "key17": "52v4Q4QJdjAgtJwHx4gC8bPt6hJkQoDDBhGfvpVMqmNn7d3jZVMwHG8i8Duk2RTqqkWgJW6fVERxzQtUdR6H5NHj",
  "key18": "5cwoNhTjMkcJ9m2heNHiTR5fGUo8rMCwv9bgZckxGktFqFuA6r9rX3g1KyAPmcCPNLDDDMsEiCdzc1x5UUV5F4SW",
  "key19": "4qJffjYwjfLeJVcFFWugb8r3sJz2yAAYvekSPqHfQ6f9ULpHPxMBiVumQYrGpUe8H5V4Nv1usZZkpn9XRvmUkZUj",
  "key20": "23TFnVkWebF2okJETrq2fsvhaD8ADk1RM8By6HiTgUVvKqyveZyPRfT4WZMzcJG9rEHF7V2X3rQBrZG11vEFB2se",
  "key21": "5t5tmpYVJiif1NaRu6nHgsmxF6tLj2zYZc1xokHLs43vb9eZdthnKtga2MQAMVWqZDHt9CDQt9EH2g3VyuCZAemD",
  "key22": "5KCpRzvetxbXGxWTk3wAa2bb9pqcw4kSYes5Coh7S6Gcbvr1BfXPzktRCHMYWJkRkgfPCdxAmbwdx8bEXNZrWwm2",
  "key23": "4S61jWJ2XYUBy9fN8qfXJAzsgcAbg2Tjb1sLsLAk4nTCjYZspQKhymZEk1hAqVszUUdi76WposYQYS5QKjif8uRZ",
  "key24": "4srxmqC6bw6Q6b2bv7E69fQEs6krUQqXqJkLcqBkzodRVCuxhTmsMXmRRQMmgvLPE5uj1wCuQyVEAb7WvT5JyKCs",
  "key25": "3DG7ybdQRusZdDASYZiDr7uj28QYBcw2RNBYaMiSxr37D7V5jWUvTNPRQ4irupaXapePLRcMbMBvK5vtfX874HHk",
  "key26": "4V26LfuUpF1Adkagh4aAxzfUtmLYY1f2mkMtnozWg9TkA2AH2dtn9U478BUvDS3yNRvDAxMChJng74PpiBmmJaVP",
  "key27": "4cbDZe8Bj6bCqRGnvGioWbTYVryzUETFeobk6kLMDf6JMp93y8Q4YTkEWwtm8nsRfR2zPmorzY6pDKESQALw7Zdo",
  "key28": "3tY9tTMcBLsVRWFNPDKHQxSW3zxAkqYbmCn5T5TExdA4Cy3kMUStVUsWrf6gPvxFKY4p5UiN42ho3TKjruQh3SXG",
  "key29": "3djtVCxvt1oJx3HrRfkbogQx9K7qYSn6wuRDhkKGNVBn3m9NtFMXw5e8hrnXTx8BE36cV1LW7NJwDMo3vN2eyPzn",
  "key30": "38EYYWxzrVg9Z7rZh3eN6GKP2gD7zRSBK5vwYX9osbiNQKpfWxfer2X5HUsDjrmtwrAFxJpJEaE7iGFeBkMouZZ9"
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
