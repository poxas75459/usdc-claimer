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
    "4v2WGzoUjnh5XpBs3xGxp9uCKV4UTNTXx2kSJYBoAbBC91xbj49ouVNZvpk2foEq7nYExTg3Wn2WJGdxgwzSudpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yvwr26tHkhCysfTtuKib1bYm46sWQJHM32iLKP8pBFq1PncPcrp3KjP4biySc8GeLf9TRTchNphD6Qgh2iT9LZY",
  "key1": "4xrmMtfgR2522D8QxcPhph2F2AjENT52KLCadVjNoCxaot8Meeo5nr7CwGuvoEfoqBZUcpWaXasiGjzWbS9jgmkY",
  "key2": "3sTojVPvnw61Ke8FBuUJ8R2gcvrTf5WyLgrD3UWnBteCpLeh6fCMkKQhtRchjJTrXQK1Kv3HhnKnqm4jCHsb1L3j",
  "key3": "4qzapXwZDMH4LmgxN8HnCEQ9SjUzBExvndezE5PstEApbKRuPiyfm9pJChMrsJVWgdcJkjCxHVtvXcwRe7DVekUw",
  "key4": "3WjixXVP3c3sg8f2rsEDwe9LngNxVNtm4zKxnHqHBMrVGRXt2xcYiTMJ5C1dh9xnpi9BG6GYkw3iX17BM2tLzHkp",
  "key5": "2swb2PD9MM3SCFa7D8ezCadjpcdeNaEFcuzzGdphSd1NWxuq3YBmCrxw5DmfkCHaUpnN3uvtRNbda3GG7K1TTzYi",
  "key6": "ht5nmFx1hvRsF7J45SV7GWfS4aYit12tZrMo39onGLhCZGALjRD8aJ4MMRdfJaNzHfEtwuVhMaZpzEnbu3woE1m",
  "key7": "4Et3rKxG4r2s3x22p9FqTYVUaBLXELUqcVyQhVEDZ9JxewxuD9zXNsrDXUZshbQhDySobAwQdody2qZtkKz4jqrX",
  "key8": "3iGn4ZiJL7XZgAdZib8sBed4bLEH4LbCuwHwNk2cTS53hrkDWMGZFdY396VzAiV8n9XcEjgc4chRbK4gQwXqjcRK",
  "key9": "5JQsUMCwtnuscHzzft1dyZKx5PoDuUhZWpCEu3tFuu2oeMC8vvUtML24bpizotTSX28xw261ATKFC4frmzk5xArJ",
  "key10": "2AV68NE3haaJjq9vEdC5By5AvGL9JQmFeypdY6Tp6VeVf6U8P4hG42XmUPeH9Ezcv9JCmQH3yZUnc3fH8fs8UNLm",
  "key11": "45yYxQYQ8eE7NmbdG1cBgsKVP4yNoZcnGppnTxN3SrhpDu66PN6q38UMeXXKHxvZsKQX47iivzqNnNCkQMLNL2Ky",
  "key12": "43hFfNYGfAUJytv44zpioTqG8ivTAnz6YGiUJWA9zxMDTZVWPbnif57kozV6XxY86deQt7CvVxctKV3ma6xNwNor",
  "key13": "46rbUokrg3TsRYeMPHgDf2AqQ2SYoK5rnhJbkFSair1tGQodzQg8cKYS1H24TdbDphVRARHnn9JNJBP7ubgKBrL2",
  "key14": "4TyZD9DBTo6Y1BhE7wciuewPNztJKhvT4xxR6kmKBGEG5sky6dTwNfLEtCkQtKTPWaoVFAmPiRa9FWZuA6a3iFLn",
  "key15": "2GJq4r2ZUdiW87pkdnDfT1rtGMyavxbczUVMD66EQvpJDYiMbq2T2aq9gmTDQ2NCRxkHvT5Afe6MTzug9sjhkuuJ",
  "key16": "2gggManT2KFfbwyrdsqxxSsdKpnk5kD1HaJNa81oiutmcSJK5xohN2ZJyRKyaBUhSNUjE5fPm6QrbLnKtmu927tW",
  "key17": "2HGTBkNjiQ5WpngaiywLeCaQ6WKULEZjbSpnVXc8VSJLynYbcwqpxkwQX2rwUJkFsCi7ZRcziiw5f9cXe2TC9zA9",
  "key18": "5SUww9FeY6ioAEcQqVi8pMFtWQdKLcvjCGp9oMtkjJmzTMvZz4Vx4h5Zw3EfNsmAtFckSFg4M4Ha3fUMRdq4BZsp",
  "key19": "39wWzh6WJdeiaahRb6JUmWpZXSe7evJXopE3ahbiAA4jzdbmRvWDuRvr9navU4mSiAyigJvqXMXxb7N4iFAPiNUh",
  "key20": "XZPESBbtEf2qiM24p3oyk4Skvstmaq4j54eKj3JpK8kQEMi4cmddidfv89gnb2nt43MryHZ7ow9HYCC9Yd2pV71",
  "key21": "3Du8uKUkW4HYHBACFQ7jhoGEhKMKsMLdDyvChn1aeN9mzGvgG7HgpgQHSmKx8GactRQt3aC2oMiogydaU1ZbZXrQ",
  "key22": "5s82w4GR8Kkn2Z5yUhSMYfEY2FbPuCoKfkx54CK4ErNbBPhBfUCMvF78BsprTZ6a3XoKWMZPVWzQrTNdBPwk78Eh",
  "key23": "57Umqcd5Ad7k6HSp8x1xCJ9b6ThrHjUcHM4iqX24awYpJC26BWKHMABWPEg4eZt71DSLTXtJyH5oJpQBsqTvA9WE",
  "key24": "3fYT7mrq5mic2vgrva4QeWGtngRd1cZMSoQNW2oeqhJtmXy3moECVyDAsW3uVmbksKfenmZM73SAGtN5mktquGp9",
  "key25": "Ppnt6b4Fv1vWC8d1gZSZ2ZW2Wuvk9HhtbBpdFFZFab1CmGrJ4BpXHrCftiLCsPUfPeUM3VtG8G4KRqRqQJEaXwV",
  "key26": "2a7JzNsH5TtCDd41EEGFF1BGJKVcVvnRH6L6tsZq3SaGo4yYGg88mnLYcqpLBgjtrPU1mV3hWwFvSirb3hPD3AHo",
  "key27": "4yiAJgTxYrGmj47Uoyse7o5vHBqqTpcp5w5rpDn9xZYV1dx5baVckRrGZ8m5Kk2vjAm72bjLyftWT3jysL4mF5XK",
  "key28": "3B8DpRwNZgyyG6817bcPf26AdZ8L5ABPigN5UALVZAB6SNbVMto49brkFwSvuuSHiHuUHkhTvz81AvRBq3dNzD3n",
  "key29": "2Th8afhhBxd81BNfV5iDigHf6grmHUFWV3XJ5Eypacov9TU6fhgmw9dU1H2v296m4VpJuNx8BSrf229n6KYRVELf",
  "key30": "2GTuuWqkckAQs8BAujnjwbXho1hV41AB7PSwFj1pqJnjdJcJZrtZ7NQBbTcVZ2eTzF3KVv9zCJT7u4PRDkJdxTke",
  "key31": "41RXokpYeWtFv2dNRzCzFBUQtXiKD8G36ThkAzwGhWZehUoHBAjSNbnFF5jByWA8eoWBpDSsovMDCWbwdjpcoo6j",
  "key32": "5aLp7fNj8Hxrr8xXqYyauKibQ4YWLXnvQoiQHCThK8D7XSNTZpwyCDWCQqd3HVSxN6xP4WiMw7b6hwF8ytXWgRQ8",
  "key33": "42CEbQyF6ZSzfzbX9ecxp54fCmowDURHrrrvCbRXiEUaLZkouK1Y5LMZvDFwcu5fYoqMV4pziMCxqYQwpeTVchCx",
  "key34": "5du68guYgDW4Y3w5HPCZeUDDXkuyZQoNhs7UdPguW45AXhFQtHEuWMdpZb8agc4wTSKMUMb2mbiWn4rQXDHrt1Yb",
  "key35": "4yQHZf279aALRTh5Kz813mySZzNst2N8BiZrGme42Esw91ZzV4ZJxfz8eotAqnre4WfL8SaY1DtEJrC82Ru8ETKg",
  "key36": "Y7XCPHn3d89HCCuDFR3qzMSdmdwCcek8d3JuSp5vSH3ZB7HWdhVyCooPjB3QgB2TygRFUnKCmV4etCAVUExinJj",
  "key37": "2MmGzxVW91b1vrh4MXxChASvPwSBnaCYk53YH6nLLR8r9GBNhnTzMaaNrH17KU45hMaLmXXfa5fku7VG1EGnsiht",
  "key38": "4FiBAvibn3TjaHbpgaiGvJwKZcuWwutMZk1wHmTs3Apdk1DkysB7JpJDKZUBWKQqP6yFxs4aRyKGoDW8FjHoPCfp",
  "key39": "3QJMDvJf71ZN2odPjjHGm1K1St9hShauf5LguXzKYDw44ktHvzbiYHrimqZP1zVozCosyQTic8iyTaxJFRGrKWju",
  "key40": "3rCHbhuQwpxbTyszrNudzjk5ZwDtZZue2nYnHcsoBBBRqRhGkBWVFPCNh61BB6ioJRM11xiW8H2gqhe5NdibWBxL"
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
