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
    "gZ8HJdQcqju9eacQJLz21Fm2a57bM4JtJEzZ6prh79UbQe7mswYp4scUi1YCvLZoMxiqN8c2cN5Hm37kNW1MkmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3csuTpSeu2zKWG6D8EQa3BSUgLR5DvfgUts7EoyuV4ErAVVedkhrKDDx4ZoJjSJwv1PbDW3sV7B2pEtZBMpguC9g",
  "key1": "5jwppzhuBPXMGpRaoQRvm9BKC5SKB3DWFX6MNVrVPm7yXQdiF4Xwrpsq1xUfdWnRVrRMj2ybw5dUJZYBxMVnoNjM",
  "key2": "3ckD9gTtcfx1PeFjuBv7GHkuR4BiEHL8ivMDxZo9GMdqttowk2SzurwtKD2CCMRBXKHrbfchgaNpdtpsRmYQBuWV",
  "key3": "3na4TAd7JQTUUuMH3F9yF8MfryRMtg48MZpYhqEiTGKQeBNPeZZCCKSTRH5ij4rweP6UGseJJyBKoZXuRCKi8pn",
  "key4": "VmfnF63MCNJ78jBmVKy42eXexSpUgoTQMTLQyi1BhnG1gL3xS3qSchxS8ECX4EnM9iSB13bJAqFE6gymqp8wUrv",
  "key5": "3JddBZmh9fLszB5SmjFL3Sn1c6Rx8pL4w9Vr75me8Z27koX3ALxn4f963r8ubVbamBcy7NjvRJpLq1hCZTSo3A1Q",
  "key6": "3nqQKf7AJg87nhWTKX7Rv7ZHPjVhKpPvUknqfwzKg5CDBb7ma5AJwfMq2ta4zmp7dzap3DwVP9Qcj93e1YkeWHCX",
  "key7": "t9nU3p85QgpVeh85oFJNyT9A7C33WRy3rPiHLxsPVkAjJxxpo8Q8RWcpArMt13mgXwg3iVRRzqZd2b7pcG8KwFG",
  "key8": "4vwUcpn1R4M5Ubyk35HjtU1stHrVpiNaB6NqF6RkCv4GSgPokax2MyUBHAR4PSBVpcK4U6sXPGDbEHYGtsfAS1X5",
  "key9": "212zvhGUSYFyt3DN2TmaLuV1HaG7imeXkE7baFAHqDHUPnowprJpMyKDEkSqmHiU1YmnXN4hV6f86jLGBg3ws2rs",
  "key10": "66cbn8B4DF7kLYGyz3mh5D6xgcwqvsLd1qmkMTkwkmvZgHDokErYE1KwLU9icrCLyjhvGiMKKt94R6Mzp96KH7jC",
  "key11": "2tpFYNMwk8PpHYmuCbC5eHcCQvy56tr7a21xcQziCgJu96KveRpwRX6CgCwaK9rQevpq5J4gnQYaSCoSVEZp4hLb",
  "key12": "2a4BMv1NSMxTxA38RfZYGG2NrirKGBWtLHL3WzCRis79rAZUkBbWQT8q8qSF4LpWjM16Bb52pMmxbbspzGGyGwSn",
  "key13": "5xY5FNaQYTBcrrHrnwtRxkWs2CBfob4qauNdd6tk9hdiE3GkusJe39EKxscEm4Jd1bfLTFterbFKuhKjQRWuvCV6",
  "key14": "3etSqHHmimD6Rh5Z2Ro8CmKAJhNrnYS5ECXy64BYixvC4sGapggUGyfYZHKFFEqJMH7MqkyN4ncP8CUkYD5A7QZD",
  "key15": "59Fdq7HMLkL2BDSxEoG19sFeUzSjWYWeuJb3wcVrLTVcQPhUANCY8R6VHyTFddJAMqsYPjk3E2Kaek4pRM42tsiC",
  "key16": "SccuAi49hSgjCbZwM4YV9RGG6mLMFmSH6BeFaVHmGBWpBo7GBpxaNzT2rm93HfUwkHGMUhr5tLtjPodEwQV1Wjo",
  "key17": "51unTW2f7vqrK1FXN1tcCQGAEUipihAF61RhRqZcBcK9AszFnt8gsmSFMFWe6XzseZaPUbMLPv3TUS1cSuWXGzfP",
  "key18": "3ygUM6v2Pt98w2ioApUrtdN4g8ftgazf6kAbDxwT6qdAqn23hyioCerWFjXoJzJRMb5zXoF3ax6uTbourhxSAQ5Z",
  "key19": "bprd9Qg1oJPPjLj7eqjNjYvadfDDBk1KEyzYKPtLYZdySXqLTJ2oTW9FqVgz3RMxuHvwM2v29jfaW54Ujf7VUpp",
  "key20": "UqnRDLmNks4mqjPvyAJg5x6Mi27RuL5pTvSiBjAhXrmc42RsDqdkgx5JHDXBjCBMENNpao81ZhuFgqdzTbxSCgY",
  "key21": "5YnG4rELWXzEUzz74Uw66Cgx1p4d2zd5NHuLJaf41q89YrwKin48G8rq2jfqiHCw1iBzPy3tKER7Lv3nR6QZ624Q",
  "key22": "5wP5ZCLHobSupzDKDR63LeFTzsPbxGmVJpY3yANR2E5dy3jgzrc3FfpjC2XE7yzJLrK5UgtaGV6kZ9ia2PjKzcRZ",
  "key23": "5Afoi2K6giu32ySRqAfg9wo953tbFfFtgMcutX9PP3sph4q1fX294pzhX2fZPVgrkV5r2c2cwkZ4cR3YhrNSyaGo",
  "key24": "xG2Rzt5wt7HLDgeidtY7SyMSouhv9Kb9vBb6BfyX1v5E8XorHfrTUydFZCtwwyxkbsrLPv51YxbJm6V6XGgtToV",
  "key25": "53kRXZezFSGhnA36FNk7h1j5K3kFbcxCebMosagA2T4kuywpQ5yN6ka8ecYgrwJEb6Tfftf6Vdg2djfQNTGnXqk1"
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
