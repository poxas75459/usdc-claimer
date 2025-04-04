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
    "iqUz8PCwdTz8xMDKnuPtfauEdt6QQbGdjMiYnWWvF3amjhGaSLCRMapRcJCnMNMwVs26n5arR5UWQ5JCHqd74jS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ertXZkitj6u24Gz7MenojzZBZKH4PbsgEAFDJresVdksPdQ8HcyuUNS9TDkigyVE6GYH6852TthydsXWAd6w4KM",
  "key1": "3ALzfqmuG18h2qhAobmjzoEqUhWFuSEVUHDedc4CxsKTfaiTySV1GH8qvLooBhkNfeyzAHGUoGvxmJYRhdtGizS7",
  "key2": "39t5zzfgG2b3QYDXZt52MzAstbrJAXZE852nmQwL1zMR51pjBFPFgTnd7vt1vxa1NDoMKfVoFjWRjGCr8Y9varmf",
  "key3": "3oBxVSwo2U4V81gHJAQsJjRC7bCAkhQmuTwh69qGL49aSZSBuhTtQGp3cvpzf1S5dSi1cUa7GqxKQGXKy6ZsMmL9",
  "key4": "3ULBVfkU9h21St7dzyCTBLADYNKcy8KTW9MqjRwrpMGw4zkULCKSqQD7VdnBFM3JDpGWXH2cQRH7cQuH5MkJhvDq",
  "key5": "5pLV6KCjizd847PRTrSQTwqyYTk7LUYiR6X1YfcJGGGVzEuSH6GmBzZydRfJWNpXdxgoLgdC4T66XMHGSx8aXqYd",
  "key6": "5JzfEzcyjQv7wynEfQ2iPpt7dqwGqzU5VMrXipPYoVMtEhySg1vC4kNGCHoEsasLukoEHVJrAYvGfWpycC5oZEJV",
  "key7": "4CyWNat5X1CkfFScvCJaVyZFaxtAcKpKgCxk9RFm98ZLDxBY36xi8nb3S1rkdu2GtPGsZwba65jWeZPQyreyV97i",
  "key8": "MmgRPoiVpcE1GqWu6cxczET3iJYbGUF9MneB48Jwf47GVxT3aS7HEjZpyUSKbHZPHanSgsbWJwY8qG51jN3ZVFU",
  "key9": "433fS3gqkKrEz7LQYK2T2mX9cRbMHdg8Wwou5BEAGS42JGQidNhfUCGLH7qttEwevvmF6KabJb9z4VtEu2wCQUoL",
  "key10": "kLVDi6NiaU4FEiUQpLjXpc62zGs3yPFVK7eq1K4rxKrEtmsuagxvgzYrULRao874nVygytgB6m6nMM2YFiaShaY",
  "key11": "5mHFUcKhMTAjUJGYvr2mdoAUguTS3Ee8GuZxKNw7ngYSUFFytgrzD9W9tmRb1Bc6SQ8pdeNhxcJrKuFmwjc3yT2Q",
  "key12": "3nF7qWfbX26dxDzCcB48agUtHQASSDZiWUMbWHFQjrNuX4gH1Bauowc4QU1ELw6aWL3cZQPJABhqvjc6oR4P7pzp",
  "key13": "2Q7Kr4trxQZQkDh9zhaFb5vAMXCTtLetsxXnZaBCmcfQCykshEeGwGu2hmDuZKSDZMMRqT7fg26w4U5JfciY1tE6",
  "key14": "5nUSZ1XdbnqRoYoWdeyik8k2NZ4vkYe55NYYpcPVC4EUoAiFiwqYTL5C8asuZdAJLw5mLLnjAMp7Dvt8rQmJwFvB",
  "key15": "3Y1oNLspxRTW4zXULNfYvMuzDMGVQQ2kFAeuzpRkfTpz1Dxx1jKT7YRdsFWPdWUiK2S9DMYGwShqa8HDPbzaW8fD",
  "key16": "5bk14877N3utM4azyKmpFGLCiBdngpt1KsJ6Z3ZBar77N64BpUe9QdyxQDwaZf9L3osrvznaTnPr1JnTbPNX29jX",
  "key17": "3fabrfoGW8hEEMkU9hZezo7pae2WttJDQY4BHznyfhscmMmUPsMypWcVCzN8YoANyRt34VvB9Sik1jnSChXJhRM3",
  "key18": "5jsfXJKazj1hwAq7q2T9BNHE9jdYkFN5YVZptQBEekYW9EEqHhCQGRCU4zYyYeMet5NKMNWn16kCEsV6EXk5EGgj",
  "key19": "4nunRb7rJeVU4RhVs8kbs3n2XuKbpPumhNCiXZWfKkf9qpR4wFbN2mAxTus8DaiqEwp85zqb7X3kvqjBDHeKhsuE",
  "key20": "2Ybvei2kjUSYZgCUDzh6VWU5JYmSTWDsr6j94XCMSKStWrcrjxi4ZAfEwL5RU9geWDYUXKnYHuxnHq778SUW44Y1",
  "key21": "2RCMubGLxX34xdAno1qpuccaAYZYNzWHR4Mbz4iNEaBwtFYA38v8X4iWVCLibBdYcS4RxY5vBdeXoRoFNc8a8dum",
  "key22": "29r8oZxfZAVx8MpSADrTNoYWp9PuZztg2PqG29cRhASdaqJHAiaU4T9XcFpfYP9DcGQzDHoxVL59pRbGfQ1m1DPR",
  "key23": "5VfjuARvgknkbfvT4HkqfJEjx28Yc5E5yfEaXSQSpLsgu9f8U8zcmFUkvzJjeuRsUcoWcG7JRXhd92tvWSWPRrrV",
  "key24": "2bHto9QMRftMzQMGCfPLVTspQM34CW9h4U7TEuBmFazq7m41zdPN2tNU9K1G9Gq2c96UM2Q3hn5DkPqkWeZuYE1b",
  "key25": "9ZfnAZbCyuPtEHMbu6XKnxpRRMZUutuouh7gyNmfxAwWY7xMgjgN1dXdpQaxhD17QAdRQzq6u7YLRiFeP2uZ9Tt",
  "key26": "4Bvt9G2fZpo7PTAxoAR8dpikzY3GYYBkbAepks6hNkR3j4sr7uffs9KCjBmnGX2XxMkYAhTnJwuzSVhi7YbAF4NT",
  "key27": "55p8nGm4sitwgcG7VpKTccHYubkPK2N3KETn52ADkFcYbrJ2bCyHKXABYZAz5rKHxoyZVvmdH8WCcPvPCbtpfk1D",
  "key28": "8HzuVRG9LRgqJjCCyhjLUvfgfdVetoom8m8QuNX3oudXGuh6TLbAQR7Qw4PNbKVV3U92uWPE13KAHSbehYyX2kM"
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
