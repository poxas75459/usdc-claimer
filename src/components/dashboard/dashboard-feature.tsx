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
    "5cSzgeRTP3gEj9iSjHqcALyywZsQiEn8Y9DRKeQ69APzpTybU7rmgv1JyRqY1LT7YuppWSsiXrVLpZjK9NKhmHBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LpgTtA3xzSARadcBxHBR8rWSfh4ihxcveieXBr3KykWW3VNLDw1A14b1ZxLjDScL3iB9vj6nVJpHCe7dzc1Rmm7",
  "key1": "2FmBVe3uDJPv65VtRGZtgT53aNaCQV6Hq1uwoxPoF8S4bEAdoFXJUGTnztcxXchnDTsiobzBsWrC3fwNLnuUHaXX",
  "key2": "4pM75c4kXJCJrH8YeW4z2pvPGsvnzyN2PWy66htDJPeAE3Q2h5sc8b2TJ9PM5RSwDqNcMvHCs64wzCPP2v9xb9Ye",
  "key3": "2zkPcFNBMGEnc9YH4ZRCkLAqyMwoHSuXxUYjPxjC6jhnxCE8LydiMkUUMB5NwKsTggv8g7p9JnSpyMbQCxjRUv6H",
  "key4": "BMv7ZNdW4snQYguff6DnSZGKBSrqBUEAivbVtvrZLiypqcRty4gdHiXodxP7mjxAJzRvBzEUxJEBb5qXivYHQEh",
  "key5": "32wLxWtaheJBN6PWgHY2jXQHPLAZWYA2BoTwFoQ2wjSNzyu4n9NiB86ErvtbLcYE6C4BYhTpgnQxk2JpDrTX1ic3",
  "key6": "3tRhGKJ8rzPenEfsZgZGB7QJtXuaJRYADdmKnADSwUtGPDMZuEiDmZkwEvqXw9qY3Ha6YZizUS8sGVz3zbqjHu2T",
  "key7": "2mSfRZ1iJmmHcKPLfUbkoGJ5gLmJWGCTgGx4hn4fNNKqJuLNuN7nUirixjwGb5YW5uxz6YggqjDTLfBAT7guUXkr",
  "key8": "4LMFgtZ1iV8fNdibU5UPCRLgWkznBUH396TK24merj9J4XT55AbmSPDYdyzg9TknsskCT5sPqdnivoMNs9deNYda",
  "key9": "38rA9SGHcVPm7naPVrtgPK9fHSmcft85SQK3t9DZFsfkH4MAYMZkn4ghJeKs234boxsK6zWpngc3tfwHYTkvqfTd",
  "key10": "PwZV7XAg8qBPs566nM5YGwz6bWL8WKCH7rhMubiDEHzPcyC6KFH9g1Vshe9tqVLX8RiVRpeGaPknPfZU4ywYHq7",
  "key11": "8MU9itMBRYVQEipMbXKjC6S8mpzwjqtaQBx5wvq7uju2eVSc5YRSzWBLGmUY882hgrWGBUmC6DwMJcWB7p9MUKH",
  "key12": "67Uj57RuDTUuzRpVj2s5pn8HMdfjPBQApZPi4yrRo8PZQntzfxo5gjxnebjufijnh1TqHKgHCLtGJ9eoE4joNGQH",
  "key13": "4b5yLykPcuEVFCLE9vrqE6JrZ6Y74q5BvG6nJLxpzp2EaiXTD7Se7yssWCQzqSz1DfGZX2E5Ga1ojkKhHcBeaPfc",
  "key14": "2rHnTuhagjYM5Rbk243TpwMz2kPpQ858cW5SgvXwzfg6WUYfvkeAKLbzCpgRbXBCmVvM946h8QWPRm8SdKUkXDDS",
  "key15": "5YUt4XUwhRwfhEE9R7M2UwPWEsFvJVW9mKhqs2aNdc5jHwez4g9PHhYKYcWhMyHpJeZ6mBKP95Fyk2etf5D4tHiG",
  "key16": "chKAaMpTt8nXyfjmHCc69LJwyXRgQHod37E1p1QaiQZXWXrzBvUPGWXg47G1SycfY47TQxN2KJDWPTAgAzqBCcZ",
  "key17": "3j8NqdzdSwiZrAg8Bi9W6Sw4Hv4wcNgSZeh5U7TU9CVSAJ2j43EHgdGUkinVBYXB24cUrnHuq6X8icHn22msY3Gj",
  "key18": "41hNgrHiD6k2uxpiS9Td21UyJBCvNy6z6p7aV8xAM8ScnGnNK7ktmoePZh2uaTazaM5XUetz8QbJEtaPRxhw9rS6",
  "key19": "4HVbottBAykmTz8ZT1bwfBBpvFAcSXFsRfAU3YZ5mFjMycaxPSucynYkTVrykdE4KyXXKfcqSGz2WThUyb8CayCu",
  "key20": "2cLXtxDAYuQMWHdvduZvUgZcwqMu4icNUj6wLAF8yLnsgiamZ2KtFhJEXDxX7mZ7vVYHFJjNFq1STBrGTfwiZotv",
  "key21": "5s1LD7jgj2uq9qeyujSHPJPP6GZ5AEjW6xkdN16BYJPLPkkmTkKxgTKqTvULXSfVu9tD4JG62fPeaR2ZiwAi5zkG",
  "key22": "3MvYUMXdovPNnaXSD8nfHMwgYL92UCSG8FDWBbSMJiV4rsFaYSrZRSpqJQhxE25NXYEQqCKNp5e4jS8xg8XB6iBg",
  "key23": "3QgHcSyLgtYxgHjfaK2vkj3a8TYaPWNrWzFz69FMtzU1prxPeEM7ANbQtoASRinuaX6dRCwNCHgirbySUcUYmxi7",
  "key24": "4tv7EdQEukcFQH942RF9XM9inMsSGTuku494xt38Fu5cBp6vqZypaWpR6JRu8U4CuvbcCiSdm5XJxJsV7phYEX4e",
  "key25": "4H9ZABacnjCjKDpdtprGpctD9maNp1s29RKYEWQCPix5Arx1i6SHhAuFB54CMetHe7cVmgZPFgLvX14oToeHPDTM",
  "key26": "5MdqGD8Y5j9RxaKvenS3zd6ZE6yi1q2SNraGuFMMM6xqVj66AvjPQuoNMKDVmnbbbkdiDYc2RD2XeLbcABmGDDgz",
  "key27": "2Rqk4Rmn8KxwcwLtsrifeJx7MV29VDqq8AWcZTnhkjr2Ru24k9BQwX6fhyTzXm8qZtXGYNqfeLsEvsYkpPwe6VGB",
  "key28": "4QsezWGQdZPLQBKjyQ7cwEFA7wzdycipCWSBmC8H743dnCh4nNubo1PnL4Ty2ZjT5VJVZi4tQk8D5ZjQSwCigBf3",
  "key29": "5bvMYtzvv8pZAije8EEw5hnn1XUbkytRHctYRAd7vSnb16pttS6HSHfAu4mqJQLuVchCfCdg8yuaH9hvjS1ifrkS",
  "key30": "5MBnspmKEuNyFHwtAAT5q8rNvjeWngJxKimWbxw7iUujXHjoCf3xtgxNHcfSthn4QRm29QAvqVDbWakgvNv7swXV",
  "key31": "46uqYFhEkKXKiGKQC2YKKQUZEQdfwgxGdxwoVc5jJCQADk4HPSKLPmXbBECKLQ4ZdUBNXcY8b5YxwhCpV8CjACSJ",
  "key32": "5Ne38fh9HpAgT1WLRESAWBGypse1xRvLKQprmkgdetmK3b1sFGMf5JHR71Dd1L9XuyPDyTEAGNFn6P3rXU1ySchf",
  "key33": "eQh4KdG4QZXo1gZVUSXj625yHSDykyVgB6Pza1od5AhVQVJDun8Bb4sRV3iTqXdtNPkopbLARVFkqRjAyyjfVzy",
  "key34": "AEk8cTJ9HJ2U8LKTBFKxx6uswwDGvGoiDrof8XqUiZuA2dxEkfRBH9Bf5X1ZapD7TVibdmxNErFm3aMYjReL3ap",
  "key35": "J2cbLaE9ozfSQySZsGk8JwsmzVpVeYcfLTHiqA5bkhwspru5qdkpEXprHHsCFy6CE3PTWeUT3AJRekHRVHbdsu4",
  "key36": "3tJXib5CztcS7qzGmafbigbvodopsrgmyxhSrNRj4GbSNR5NMgUGExcWJY7LX7bsZeQiYB5ygpCzoeNfGNV86sTg",
  "key37": "3mHN6UaRfeGazpenKqW7xSwwgHNsznyVkRdC2vYfT8U4nFusWHTydoT2q6D6cw7oC4NpaZQibPua98hyQYqLYP7V",
  "key38": "mEb2KELHcgWTWbPnthTosskG81uMjsNrRLV95Va625YZkfixUVLhbEbrMYfDN23dv1xMBRtJSoPriRwGY7dfXAm",
  "key39": "3s13UQAtHJTB7HaAV2abTZpWDxjaM8hDr3dDg5eFdgv3gtFU5mjzTBQFwpWhVRSMKzksibjz4azPEF72ptDw1ChC",
  "key40": "2cdDrmwx7vBYxAMgMaLo8mVB7xNCeYA2UtaG4HvvT1wNQJReKY19k4mjfc9WVDZYzioTPoAfZ7HWFz5v8PDCqT5M",
  "key41": "2qEpUT33abSY3uZP5kGKse1yEJQWAA22Bm6EJsYz3TMJnRuXW553c81tL9DxQTZcGki7PSfis24Uv14pMbeHzNjc",
  "key42": "tXv7qqoGqywuYvT8URgFBSpgVCbWvFSUYvdqXy2oYHpJVN4S2QbGEwQXTXQFVM79FduynofVYWrRK728erregmM",
  "key43": "22z38d9WH6wdZrcWTajHNQnDV6kbMgGWQc4BvzXxS7Cv1rZPW8DmBwA8Zd7pQv3XhfkPR5aiQr6n7aGJsyC5nsyC"
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
