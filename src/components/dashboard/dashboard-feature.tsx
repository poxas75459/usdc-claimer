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
    "3smSr2rxbmF2yLuPLZFL846R3xxahGrDjwWz92KYhhbETUviZEJ1DCBFcx5iRDX6xnGpzuViFtvyJYjfiyEAS9gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bLuKsDVTka4HyKBvkdsrGjDtTfpQRoCSvTx3uV86vSivb1x9M7qtyr7ihqEWjcxGCGhubRpoKD3V2BGk7Y6dDdh",
  "key1": "6JJUnPN2cxJn8cCFh9ASGjKLbJvYn4tgo2BzSS2a32HKCdBT278WPneDBy3E2K8PFYYxNBNkh8z4fcLbxDL9YD4",
  "key2": "3dvm8AvpPNY8w1Rqiv17yAdT85SjrDb1s3sMUWHGg7dvhXJAuNUwSSudDSi1D3REizY3B4nbaxzxc92y9dSJvCV",
  "key3": "5p6WkYNT1bD2tdfNJP5J8pYYHhCGbXrCFDZJH6VS36ZdvHBdoVocdQSuRJTzPHRkY72r2HuaAxv3PoxbfxztbAxM",
  "key4": "2XAkM44Lvbmdro3kfk1EHx3ZVejQVyowxM8U1Ry9tzs44vaE5KBerHPq757XgCA69T6zujib4pKHWoNZvNAu5m1u",
  "key5": "65PFhej1SZdp7yVNHBmbXbRVb4bwAYEDX7h6NQa2zA2nRQD9Tx1BQ345FKzCk4njyXMcqPmtutLHUtccv5Hy2Y2u",
  "key6": "4ofCyR6Q4Ck3xLCNvLWWyJtQos6KKfpdZZeesQ7Q1iLEDqWwGfmiVW1ufrrMGNzZKpBSrNKvXie4zQPB38GN3hg9",
  "key7": "2WsT9MS1wRKquXnMv4E8NFS1GSfR69qyGTp2gPcRF5NUpbktssCcq25NZCjjexmPE8x9EPCCfd1zVXAXZbptnWzi",
  "key8": "24TDMC68FqZpCeHyQjuAQfG4u16yWFfMLXpXBgebyXW4Ca6XtiMbya3fou3ezXVSNk9M97BmwY9xaEMDuEnEvh2v",
  "key9": "4i89khjd7N8Pp2zCxwhQZqjDj9RP5GCyw3oWL1DVntLfQcCvFeAtHpZ5Wpkq3tkKBsEVLXwZ33VUfGqnyT3cEqUd",
  "key10": "5HZGg9vz9zsXPHVh7EM2rr3cgm8teNEBCvCE1BjYRspy9oASYZWZdexSc2TTNjCS7ZTiJETiWfstDLeHHtW2QVj8",
  "key11": "5miYPcF6ZLvvdNcjW9KHbTBbz2o4BRShAZykYwpK3xr91rpAfvMK5FhBFeMmcWigXQ4JozqQCqcDnNcM25Upq5EK",
  "key12": "5ZULC3rzokJEiG7Y8oqLVuCWwafPu2jkUnXyL1zozJ3ceKf4FNB63LPc4dXDbCQwPHZN42zrX5VUgW6XxFsYaSMS",
  "key13": "3qhUXQegzbEo9YVn3suZmicycRpcuHrD4f2xYUBwGiMWX36u4oNUZVj1nsfvrFJZ7jUUvVNfGCjkxvgQZffWZKeZ",
  "key14": "9f3UJWBvsUQkQcB6QpJ8QDYpxxPbajzm3372ZFoZC3AstZgBSNBrbKJFzucuYrTdZjx2T98uNbK3xRjhEGYHiyH",
  "key15": "3JuJQRD6QEtFsMLMo4tpjwTfMmemR1LdynaknmNwrqs4fTyp72jjiNvhg3icy72kdjcafwXNjP5LR83WyrzxFHg6",
  "key16": "5Bc7xGPPUxEZF65THuZBarzZFoNpRJ92gEq3FP1GGhsySnKDq5uXCiSRaU5VU4eBsoJ2gBGB8Rquvh8GuZBZk6Wz",
  "key17": "29952aNkt6mQdsGQNzbTtecn49WwazVatD4PH6wFiqoim3yYUc1PS4Yce758Pp6aEPxkYYo9K7KoU6zJPT3g66QA",
  "key18": "3yWdVBL99SX14W4SQouMaseiLZCryxhbKDWas7wRohgfgGCHzrx8iKZ2vGyGCEU1nTi8YCJ3z6deDPTJJq5r4eGZ",
  "key19": "5mJRdWsiYZSDxEHgCN2obWXJUTJppSdjSTVc2ufwktwkYWWayFR1ZQbAx4ovgRxmLremH4yqHG4ZCEJ2M33vEt7e",
  "key20": "5u8CryM9j31shRuSQDo5MeA8J1QvQME2DwuxokDvPB6MFy48GfvHBvZhsdYUqCiHqF6VDfdQrqrGzD8hioure1bV",
  "key21": "FNLC5QduwqXttJ1pmqPoQ1Dws7823aowmhwSRumKfJ7UQpsmbt75bYqrTAF3SXYiYeViWvCwXh8kjxhAcaPPuX6",
  "key22": "65XKRMtUYoD8ZoJCic9xUfK6EFnCuwVuyi2aYyoi7YmdGKzotWx5YNnDewySDBgySiG11JQuhDr8zePyFe4oK8UX",
  "key23": "4hUwMqTm1VuqVfVxqphZi26eRtQYedEtsJXDKNw7mqUA4XEgYGkypgBP5ZDsjqeYWJzq7QUJ6Agw1isVrT5D2qz6",
  "key24": "2iQDCBdhSETesRJheGsFka9CWDZLNZ6XXNKtod6MtYky93LpnskfigN6t5PqWvEZu2XPzf4ZPRYtjvb9vzpyaPrg"
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
