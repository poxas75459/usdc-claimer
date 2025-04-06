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
    "2UnvSY1Ba7v3gBXNepLyMZhptr1z5gevEScTvDWyGnWNFkgxRWGUKfXrz4fAZJUu9wSTd3h7ourfyuHjRVbghDGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44sbfvx1nV7Mu2wnqRde8BuQpU7k4sSm318NrKja3pdVPPBmB3pe3hBDjr8VB9S9Rh4dxxWUTWbLjGWaTSfjCTwf",
  "key1": "XovvjEvhWnjkHhDCwscas46Y9Xb26qHQpsnjEpzHfp6h9KbhKB2UjHh8ZZ2xn29WRJcQbojF7QZGzCiWHYjbwTn",
  "key2": "4gefKWeazikdWSWbf3Edw7DrZpsb8ar26nTf1Y1TjteCiNxv5ftmtcfKP8HPQE6pNeyyTJJMsfY2LANvmiiLxLqs",
  "key3": "5AjZkEUofpSBuuKsPdXHq7t62eAxkATGyrXpzJtt3cwPFJb9qfFnDB7UYyy7U7wXbu1AaCm5qNS1zJTkKZWK9fJm",
  "key4": "3ZRJPLw31i38cAwfeYW8tXgoGF1MELmfyz4fckVZBiFi7dKj5ARU6XhwVFZG2Mif2vUgkFmRYxSmk6wKq7crn4Ti",
  "key5": "56WgXKZGQ85K1CkKKDNxkgQaqAmEjy32r6dcStTpicAjsrGZ1FZfPCNEVJdTyhHLUzidGRSqEmtwU2F4EQy1J2yv",
  "key6": "3iceKYZSj65enyzujgrNqj1UB3dqcermFP38Wwb3FZWupxq7xi8WJHSr8FX1i1D1zTDRkuusBUJeoLf2KMovS6Gy",
  "key7": "47bbmAsW6Edd5Ni5XReHdqtV2ZQxuHKZK8C8i1twwNNiGUGXKwKfW4XTVFL8qByErKcnZiFE7n1mCkjVbwjoRAGZ",
  "key8": "2d58prf81dXrCh3yxL31tFSXEavWgfztowt2LAjQ6ccG5bZPkMHLJLQ99Ym5a3x9XETndABcEAZfXKqVajKDsHMr",
  "key9": "5ZHvpUWsZoSCND31ZNN4cWwCrhVkEq6nZ86LVDg8CmX3b3eZTP2vALkQe11rrNTzoWrk6aV2t6RDArpNnJejnFjo",
  "key10": "245g6DQqU7RY3LVg6K4PZ67zQufasPMQzYYKubKxXuTBMLofoaj1mzYyhK65MgGoMzp3bWeDD4J2fF2vHrgdDepQ",
  "key11": "55ycBn4XH1bkD6wxtjz6L7sZxyJsfx1DzTHrs4NXKyCU462732fTPDxMVgwLar3d63xwC6sPJS1KiseZNpjfHE39",
  "key12": "nK1Ffm4RgyHxKtwXFHPkiN1UnDjCw7p66vGwHfTd3i3A55T9xsdR4aEHrb3wVGgARuVZqHPc3TjBRv6FhVJyYsS",
  "key13": "3471unkoh6yyTTxN5ozYS4WvNTe2Ly4Y99Q5y5dBLFNn9oSzxSHzMncawfnHpf3x1r1vQqZbSY3mG4FGHnqWuD3N",
  "key14": "3Xi8Yesn2DJXkvniBHoZJBTyC3mR1jjHNJ9oHcJYKJTxdVaNSUS1ZF8z96HwuRRZv7KLk5FVSsjUwLg68WJcN7qk",
  "key15": "5sBhAgcUCkQF1oyV3GAybCa8f3hbADN3YMAPWQnmXL1q3rWYEPbYhBfYoWcUMsgAuiQJsqemb8dwjVVZiLe9isUH",
  "key16": "2x8NWAJ5EpMgLFEi1dgfbUyJdoNPCSBXSefCFvmUeebvGZXJfDckkeh4soV95VLSUWC1ZXT3Q9ax5f81ioJrKkeZ",
  "key17": "3BLTFiXkk69V9Sp1kdBsvvvih39NxhsQ5TDqw2bPRC9xraMrq1tV61e2sVJ8yjArPgqNMLCTw7YPDvjeYtR51sU5",
  "key18": "5Mm8esQw5hHCZzvYEcmPH4HFnzh3P6wraENNLVMT7bnqFvdmxdxzbDtna86UFPtLn2au6FnXo57wet4cWoapgeeV",
  "key19": "5N1F3J4HaBFH9tXvyM2N5sJp6K8UXgHg5GqRrmMw2u3swTPuKkix1TygbYyQUvA2d7my799ydsE6EqJBsUN87NNy",
  "key20": "3Q1Q9W1mXRumxpzt4x6LjQzogT2yDT5jGe7PpXqc7oHLcddzFisgRTykDrj3K6sAFog7Uu9rrggG2sSFKL92H5PG",
  "key21": "4MjYbTu17QtWbVwGNQhrgXZDeTeKBB2J7RVNHLFrawV9cxdmZsMn1a4N7akKUvvhWezznqB8C5PU3qJ8YjhL2D7S",
  "key22": "66CRMvwz4zbVW7X6vejuAhioXFNkU7geutqQiGo6oEtCXv3iUYC2hUHMz1wmSPLDtFDNBxn81S8TRiBvvz3KCYUS",
  "key23": "3x87STJ5Ky9d6v8vHj2VFedFD4UUxKB5GaSmqpDXGEeEr3cVLLG3be85RqJWbYePYAPyrxzhLtGQLWKD6L8c7e5g",
  "key24": "21wrYUsFUEAZvCKKy1qjkM8rexckDoXTTYkN37RuWNPd6w11g8UgVHh9dPg4wE29mbVscVBhAPcqq8asEC6yirFC",
  "key25": "ce4ZuFsK5df3WhvaKYYFvhghm7LmmfRouZnoC8WZiGrsipZNE8dcikxo8d7Gr4EtP2rBPAYpprQQ4w9NeebGx6L",
  "key26": "5P96UKrM8znhgJAUbgWX3ScCyR5H265kxjqnNwzkBqbup57RD3wnHVfyRCN3RNwNLgV5LWRTCHaJCRc3q9unce9E",
  "key27": "2nyLjSa8sgrH5dsEwejcUsmvv2rFCKtw7H1CSUgyNGvB5D37AS2ziV7pPAFapJjuFpzxH8m27mnExH7Dvref2N3i",
  "key28": "42DB4LiRTZSEDW6FJPcu3FkMbWLPy1RkG4zineCm3VBdXPsTWhpfSiNqjbiLE9romUkPfsq6bcjXVjFQhqoLBWH9",
  "key29": "hvvsD17UxF7qVxj9GbdhByJGLZqVK2ih9vCyJaCE3NvXfchJg5CMwjDU9CiuahJSavGxfh3H9fNiba1pgfdFUQs",
  "key30": "4kQLBTogW9bSDnVGcXrEpGDASAeCenCu2oNej5AxrekTsH6mcdd3gqJanWqNrVwmevoC29QJiJ5xAm4ajiE43p1U"
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
