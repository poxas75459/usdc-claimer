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
    "5R5ijToi1ZKK1k2uqBxYjqAiFqCR1dihng3yEiEiW6DwYzstE4m3ygDHFJ3zoTsR58qJD6wwKMkXtRQxVqvqEbHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aSsUQ7aLhXC1wQq7bURF7qpU4asCm5CQet11X3ECzPtmxirMjTF7VTeaYNVAPd24Z5UmuXpffiACNdjboCsTPbS",
  "key1": "5Gd76mMMQMH5RgbJ5d5rYggTLdcgD9WJsNq58macNDmbKXnsY5LZiVquE6ih3QHyCvDCFHvBxrmNJ5iULa3G5Vwt",
  "key2": "4Yx8bLuG1rj6mY78t2qrmvqEkx47RLgTsDngno6ruTnmRTpSZTf18noZNpuB2PqJriAt3g4nmXQcuHqULKnQsr3J",
  "key3": "48yKmCCFTGFHRF76myZjHn5ZBvLC1fxXYpK5idpDeg2dqUFkVwzWgRtTEMW4uCKShpEjkbQBFsEXqMECeW5Xd2Wa",
  "key4": "Xpo812R1RVPUNfRuBKDMd4kW78ChT2F7xz6Lu1Dwx4D89wXV6eeyvNVefM45QryAJDbFRipAx99nj4f5uB1TjW1",
  "key5": "2RntF8UCET3gW1XjU31mjSA7B7Sz6NBgRddsHaVQ8Qcm6oDsvsskBZMjnehA4akucTFdkDDMM1S7ZqTHwMfnpstj",
  "key6": "45E7UBH2wR8zUesMWkxd8vX9EmVDmxLe24HK246bgZjMhmw9p5tddqYQGgUg6mxBGQ8FwFmQZymp8YVwjRZDmkMK",
  "key7": "5ihTNRSj1B9ftLSnnx1faS68B68gL1jfwUzesRawszjWNaPFzmEcrGho4roPEdiH6Qe5tENjUu7xRk3pcea15t2E",
  "key8": "3npxYrDi2GgzFJdQTJ4iL8aZDaVVtW9wSHZgzJFEcg5eWmTxQ7DcFnYHYFyYMmFiFZzALEH5Rqp9b1FERtCUao7S",
  "key9": "5p6JrW2dkQc6Xrwd3mpMKAtbEQWA23AQTaspvjobp4479tMJ985Tn4p1gH9DHRxZUktJVTcR61cxyUaW4qFHo1wX",
  "key10": "4cKBRijuevBH9GREGLyrcdwusJDGVbgrUBB2LpkTq7TBe6ShfjhyyMbuHJzjK1KYPQrfzBw5ndktARoqRsZrWDTe",
  "key11": "bajcqpB4ue2ZsqBrHxbDQK3VmH6Ft3bwRcRX5PsmQBAra33Mua72wCZ8RDfSd2yReLxJD5KyLPHs5XWt9MW4Akr",
  "key12": "4CYa73EJDpfxCKFJEbYBjuMaHrfUtEdQT6KyeYAdkn9BmjCHTmwKTEQdX9MSQTWjiqEfScQMXqeJnk1XKog274qo",
  "key13": "VmrU9vhWTGasspbhnveRRfYBqW57XJBmnbmzzcp7rfp1sX7YK5ZdPbXTxtAidjbpvrzVK3DSi8Byznj1J5VKJWX",
  "key14": "5Bxwod9Ab87fBced4Y66vRRbTk99CYHyY1Y45hEvq6cDXdYxeDRtWvzytL65ZAcZrUcPcsjnuqdKnwbHpw7Z9kg3",
  "key15": "XR3f8sdpsGbrwcU52G1igzJeW4Q2TsChxqwxFfi98N39145Y1HgmyYozyQfKkZsG2i2R3ez1eN8WKQeZu8XSHNi",
  "key16": "38jeir8fRtfWmdZqo8efDCYkjvT3dDXEAfSJ4YWo9BPSwaszjo8Jgb5QLYivPLjsorZUmEn9qa7Az5g2ghRDFPEy",
  "key17": "32b97FVqY72DPKLdbY84PFJpewQCpAjoxPJ9fN4aQ8F6d1jm1v3YaejnqK5HnU56c4SHmNwZfXCr1oV4Pz5YwJZ3",
  "key18": "A9VCacYySbih4EPYY3WPn36Sq1ErnXjLmXk1CgyTCciT3G7nG9xdt26bsHAQoQePWrNb86bSEBGnUsucgDcBt1W",
  "key19": "2GV5sExa515Vepb4XWK5C4M84mwDp98NLSPnKurQQF1jq1KrmtTo1LMXn2UdJ1UPXuqi4gFap6G8YanMX4umtDPq",
  "key20": "3WkAUJyHMQv3VJmZxEowgAofXKVqz4ZZcazhqBxVP6uKiEMZ4e8CWYT9DbAvoLaMjSYTcVuHdm21FAaxsZBDasMU",
  "key21": "4g1ZV7G1UXQQCkzfvAEJmQfsS3oNkfGefi7ScFgzs5DfSY5UPcmABcqVAu9FqzyxByaVmAYLyxdUNrbJ52KVWcF3",
  "key22": "271q9mFecMZ4eJBvsM1rqWz9xb58QzgY8MPhVpG8Sea2NyBzUFKbXAbC2aN824i9H1aUCaAJeMr7tTLfQvZFm9Ws",
  "key23": "5JTxSxPomFcLhPyX4EE8H5ZtmHb6ArD1WfiWR3EiXuwmk6zZxdcpYDECoEzNThG7J36xzpRLGuZFaV8fpN28zfrQ",
  "key24": "4SuDSYpXaG3S4xSsmYRSGXsmwydrp86Vb77xsYpvvEwRFMZyWtUbaY6jtBzRAVpYtRW19JH1rhLGZdr7yRaxeGq7",
  "key25": "4iLeuQuHa1Zp4t88RacKtCVYY99xXkRvQLuEsdFdnj6uQ7tJNh3k6SVrV2ehSTY7VPf3tQjP7ktLdA9ZVxckV3DP",
  "key26": "5WuRXCa1idqnRqsvX3fvYexEJ8YWHkRAkNQ8wRK6aBxgCnLkYLUR4vsFnJzowAvAwDw4z2pmsceXaHeZnkBSW7AM",
  "key27": "3JxkceW4tsw8z2Yo3vKdfaLD25RuMfi7YWBsQsMAForeGZbc71S5b5PPKF5q7Dfnh5Z9K9bnmUK7v15UkzruVpSN",
  "key28": "hQNwWBgLzFA2JcvGcYY7AicGrcGUcmhMXDFwyo6FcMFpCEdn5wwi6FA6qM8ibWJJ6XmNKBNHzLsxuoMWVsk2xm3"
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
