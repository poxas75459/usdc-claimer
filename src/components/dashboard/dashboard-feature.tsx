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
    "mAtbcHFUMobf4ZESpGBfHXVubC1byHcPSAqnhXvzg9B9nLYpT4V4osY4dUW6pi1yPWJbqPHJ5hCS6n76J7oQYWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zyhV4SeWB1cuBUW4hEg9F7TeErrCnCi2PTQqhH8mCVAKPsKPQBCyTJ7neFwsBDJvixwwMDcKwkxxcBWJxNowazm",
  "key1": "4pTT6rm2v3UcMRAdSnQcPMthMSiLZ6rMFakWV3iyfpUfR66fMbXUyzzKdCioaxgv9dfF6YPQBEJUzqQuGK2wMP4",
  "key2": "31EXqEpLMcb9eaaeGioVizAR9kK9yhaXXn1UuZgAQAeb746apZQAYeTR7HzNDBhmrv29umptrB54KzH67gcyFGJQ",
  "key3": "4FsioJCMw6wUdUScoJEwKepVU6yMwaTxQzW7BWk8Rhz79XFdSQtpCjz93idhutsXEFgnseFmKAYSuBcsKtv2Jp2U",
  "key4": "38UT5cSkHDLB93skEibFJdTJDngbpMcjjRDRdK1kJVtryxM9dQMs2UC58R8YxF3gPH4BHxHYwDehSQYKERvn572z",
  "key5": "Ze2X88pJxbSCN4RkbQjopJZgPm2PbLiB2jcuECvhxTA6kZFNnBjxZeMtYm2EVk4dtZsPkfnfPYYnznm3KrWjDRY",
  "key6": "5oVVHNAS95jRWgRHq8bVUNDtdd8GMKthD9iSUKa2Fx8pN7br9jLxuqUiA5kuDmWvV2sn3Uoz5Q6EoNTfBx8Ugri6",
  "key7": "2TtxRaWhPtRqrAQSNSLV43kJBjLXSafchT4Xi6efG9h3Mu6scM5P9PKNi5Px2883J12kyVZyzE2kvJxKSSTKhmGW",
  "key8": "2EzEckiXzk3Jz94c75yNkANEaJGT6WhyHrvJBRadSXdYi1dW2iNH2ydxKnBP8XMWKjiefyNWJ4wbxhUTGPCdQQkv",
  "key9": "5fsnvquTvvbumG4e2heqEizxdH34zCTffpYCmFxTsD9aByPbhBcD3ATFZWi9jf7U1p7WiG9zdx7vz61tvkhZk7YG",
  "key10": "ahab9Nd8xRkBTZ8n24ciYXZazkwV2DJ8G4NBchsdB7udiyKGAQJy9JxsUwusmE96QkS7wGEkCZNxk6VtrftQLiv",
  "key11": "PKJjsKSzjnyk4qqprnPndsFPiYTpvUh4PAbrteomLnhPiC5Hqb7jFrjMy3BSxADfKTY1dmg5GvrqxdCbndgiTpH",
  "key12": "WNuH54PmAuUT9EEgF3DuQoBtNEZvSE3BvJzKWNV3xjH6bM9DzS95XkMpvgWcHTrQSdfnDKSkScL5VYMhk1FaJxj",
  "key13": "51NnF33VyFPEE754D87nNuMeXSbLsWhnugCd1VipUo8QmSFCtQwiMiTdt73vpSNnVNvfNfmEG6FUKGafedvfR2ra",
  "key14": "5dT4JW9jnr61g1fTvzvVKLWLovFbeYwJmGB8FSy5mMQymBW5cXx4JGTnr6giXvac2Sy56NqPvMhk3XAoHgfLsHxL",
  "key15": "4TBDN6rKVQCxqDMWJ1rWHQz9B6E8o5R89FAP9Ajpku9xr2PybqQSYboMooPdFGrkK9KoyxC73TqiFNBzrMPAD4ms",
  "key16": "5k6X28MpstVRfbDQxQFzwo6eLac95nqtDrj1E2bvPbc4XrenpCt4dovZTjCYbzJk7Qh2h9ktyXgv6nvu1qLR8uMD",
  "key17": "31AiayDwgtVoM3YFoobGAMssFXRGNNSS5VYWbDErfJA7vhvNHm14bTADqEiTMVqD4TEky89eGePiAXAkXhrJJbVV",
  "key18": "42znTxMpgubgcXt1g7qBbajpVgdb3UA35H7C2ahzyYjN6yDkYwvTs3y5h6AQbZ8veDn8Xq3iRh48CrAfCR5yx19N",
  "key19": "3xF9VZTkMraXUrzWWhAYxa3jwirz3b91umAMb6WYRpUMCULMq9pqdR7FPbsjuxmbAKFFBm95Z7TczNbv2G2wXvsq",
  "key20": "VendE6qrPjT1fEFQDEpdQPqNnqtLJ1MFJ3Sh8n4s8qTdUKd8UThUJ1hybTVwhhDKMvJif9492oKDT2c5xECdZdD",
  "key21": "2KqXBTb5FMnvziAoD7tdNvhNkXZ9WZzYTzXTLmuz7ZB38SM47XkuToJXuoTtaEHZ87fN5Jji741ewJkW5UwZstQE",
  "key22": "yRDMVN4d4YhoSRiEUd4JkA1GmX69p8wUTw6ti99vd2J4jZhrgHHTuvef8X6hRTtJrqX9xtFWehm3ycsDdZmP5vm",
  "key23": "3b2csKFYu4hrBNyZ2m8VpjMdQHnkFMiLYspvG46qnSAK36P6UtpFJ2KGTgFpY5YsMLruTrv8onDTgXhsxNfF6RMx",
  "key24": "2d855jD9WAtSJxtH3yVAT5L8FrgGgkypeK8U6CfgiwPCEFAfdWK5an9arbx9dWLafDLYg6Swbf5qohxFnA2v5VSB",
  "key25": "4gMKkscurnX79JXPo82fVsemVAwJi4Sp1vsgWXy41MPHo4HjJwEHNRH7iWTnFFcneSMX84LxxRUU4aExpSrGtkTw",
  "key26": "48FYVKxamb2HAUvLVQPTY5c7x8yJWyFv5XmRzMfetGaw4VBAyU8A6gtD33hekoRjW4fh1Cg3PoPsiyBkstoNoUC9"
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
