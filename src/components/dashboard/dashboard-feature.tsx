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
    "4aBYVVv1uvhsbsCMAWHP884pFKrBD7bpJVNzsQgnaYFh3hdm1ddmbGazuR6kKFxLZKjh2Jf38Wj7LcTDu1e1w6w8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eLyghHnwPTxVzhp3QXErBmNXcqhnicvAoZyJn5fmSNSzrpp3bznhHPEWQfcXHru6AQfCPM6XECvAJzN5HC22oMQ",
  "key1": "5Kvd9FLmogVgUzyibjNpSV1oHZ38qWnuBQcVPrQf1YGiUo5pTYURib4gFegCoDGi1xRwQDQw1xdDYDZLK2CYJmDQ",
  "key2": "5MuUWVij9Sa7APzc9SBxXhctJ9RY6tSMqsPyayVgNCG1z4XvQQtrsoGc1MK1UsZX37ShPXyeFDZ1wYqyUC3KMHTL",
  "key3": "4yiYk2gw78KoBb38RRSgTRJKfJGZjLzUnPHMju9Wwr3LfQ8c8unLAZ94D3jVUyj4aZ27rGFzhtt6L85JHkpAukP2",
  "key4": "3UcbdBXjd3MXKFdrSo1V8hbxezf7Pihk3zqwvFdUtaCuijzM9Y8iSu2DN7iEqxg4t7shV39H8BTtWU6NiUMf1MgW",
  "key5": "3pcnMYFToU9LbypD7AhZ94NPyboaayEV4ZpkPPBZXaSYZwR7CJ7tCdHHwKX376HvAABDZN5y1Myj6QZHKu3SDG8c",
  "key6": "5yiZGLmbgGVLN2wXQRyF6SQsQ3wE1PiFKhmgQvdwWf7wwHD2ZoEj6b3sp6CMYbFD3RRpSFCxdrXQsP7SAfXD7eBF",
  "key7": "4J1yWoePQng5xADUbbaazX9Srt9pbsyCB9sGEoLZPchdQJ6XHnqeCYxXZK3cPMW8nBE9eT9XKobGmDRvtMLj8Q8c",
  "key8": "4YoxLym6oTixgm2bJvsAsqYVy6XiMvdpCvrJn4FxJFP9dw5BguuZCwYNquwW3ZF7Yw9dD438C2wGFuK4QBHzxXk1",
  "key9": "5Stqrp7GB7d5aL5mHtFzxcZGRQELGzQGJYLMwRh8i89EuPWwUkQX5hmKqGJaKhZkBeaENigXgSkMDkq5F6Ug7mDf",
  "key10": "3X7XWaNDheRyvuBQQKoUJpioVe2rwD6S3vWJ4buV8hb847g9VJpE3PvLGAFKt65RvqrHWxwCYK5C57aTNeedxvSo",
  "key11": "mYeesY1SxV4GboCr7Ekc5eyBye9vFzyeckkJSGun7qnHWLrhtnSuARvxRSZLyUumSjKBqHXk1jU87ZUfxHFPVfp",
  "key12": "4jF1A8TGhcmRYzZKQpDdyFzSUrAAVc3cDJcD9WEcTGnAGfXqtXFQ5neC9zvREHL6JrP3tVG1Gbs6LXpWXFcEfx33",
  "key13": "5uMSsuYZTqDiuYbJJjhiaDrD7XUjLK4Lvmi3aMforuK1F4DXddXodSkpVr4GQxZYUqEA58RzHTT2292nzmbubgwb",
  "key14": "22UMsfCBpJDXeE3rLTWCB5ktYASBrxF6aqiTkgsspbiJJ2MGZwMi72vpxckYbTyUvx9wRueKdSqjPFZVotpPe2EL",
  "key15": "3QRhWLm4516xuGURUDtACrXyJayxmYS3MHH6CKDWvuhVKxi7EnzniJzbtofJduCJQZxwenST55mHYiPDPyhd1fYk",
  "key16": "2QNcQDzvmU2268Z5bRPvZqHEcMdXta4fM5FRYY2UVDxq6711hc7rzGU1BY3y8Gx3SbvDdDPn9PXTKeY5kj35J2Se",
  "key17": "2L9nUfBw9wsxE1fh9D5u5EzpZNQXXiqR5HCSafVwPy6WjzPKykq3ZP2yh1c3g5sq9Bo2554rWc7kwBoiCeC8NoMf",
  "key18": "ERSgaHPMfabKGZbyqn2wA9ngqkVqZYvUqymvM8H7mKDXHsS4A58wDzNMoFg8hrWYdvsm6pTYXzBxfBtTiQnAFp5",
  "key19": "fJGTsrhHcCroZ8ndts8ywQDEgBKtJd1L6wvSRtzp3Pqb5QWzXkjvdWBbcykzunnpvau17bUH1d4wC6SnpLSwC9c",
  "key20": "5RYq6G2bMV6guSTNbF5uZ41BABEUandTNMuoHVeairynHgAmZFUjdwJGBV86ku2XWBsUr8buTnfipXtKUT3hSJ92",
  "key21": "5bEkM16Tbe46pTwXGabRiMuFCnAtRVNmAgBv7KUvJVT3AM1Z5hQhCRWWrFBRGAH73g4vqYrpNKYtibeeGEdntUgG",
  "key22": "5quMQ66dAtrGCK3maLXHi5vwFoST5VYU2C9MY2wdtt16Nt4nwv9mjyRAQqYVvgsFW3rVgzDnTeFZEP8YyhuxKWyG",
  "key23": "47d62BKtPng2Dyq3PzJyohHJ4X9F45zDckfaacqybJ2B3QRuej6v1VjoVS12oR9LxS1EZPDSBSiVWQgX2XiBcocd",
  "key24": "2M2whVBnk9UBLj1tPvbswGgFsvk93WG7sUNnot8MfEMkSwuz29q3KvUMp71UruumrLEVkxXW6tAshqgE5oBcBwRo",
  "key25": "4zEytEWQDnGg172tMvC45dFtwmMzByXL7p3MvufFUAYdfm2rYDk22zdHJnf8p1GytfkJZuQYVC65CSUMszPKGShZ",
  "key26": "3FGirQkqhKVur7mcMUrLtsD9AhtDTLz5RMcpZiZrDJYRYNiMHKtJguZRhLa1rF4D9yuCdoR5WXQKL7vTrABQvQRY",
  "key27": "4YFMy1sPVFHCf69FiCvhaWX8BPbxtMwuGNDPKaEVQ34bm2BiTkLvBCE8wypdQG6FUjXtB4f9NfGVaai62gpUMtcf",
  "key28": "2suGXP9jG7DfrUtQYM9U2yPnkiA5ThfzW4LRSPFLvgDpm6tGhqQytDLVpXrY5ZjDDj56VuUFA5yK7xC3Gdmfdvt5",
  "key29": "kEFQDb3B5HTUvya2U2z9hKfShSP89SoM6Vf4PvJR8JVf12L4h7B6W2UPU1ANb42xnbzHCrVifsGUmabkMbEa1rA",
  "key30": "ApyKxxr3Mo6pXmVCoL2JbZ318USLB6z1PtgoPUo1QJzBdY477JZ1q9RMh7v9Cc2VF2bUEEF2XRw47RTStKFy8N4",
  "key31": "23V5pWQF5X6EfgS8V6DDP8ry5KMJyrzFgaMcsfzezscdrcTrik3h6zFJfGopu6vKiyncrfd6qkNnyAWQJeDkRRLj",
  "key32": "NkJo8kMag8UcJK7b43b9AoLY1mPVUNeJMnv1C1SR5gNbCetfTvX4THfAFRgp2k5GskN1umAaWVdFkS2vYqgkYwW",
  "key33": "wuw2HcsWLGGfKq6v9Rxovow9KjcV92mB1Ps7TAPoxjWfPSEJ5iY4o15FSHBT3D17egrwp1uFTvkc2Bb1BzTsoza"
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
