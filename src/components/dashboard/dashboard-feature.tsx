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
    "5BUne3apoTkpcMLXTTWovK1o1tZ3Rg6jroDGYFNZH2VjBkK7511fNBo9VKNts36BYA3jUeNXNXzkKkYMQ5VKrG2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yAYsTmZFCBhCtZddWJukbvXUii4HD4w1FUHKxXKVuT6RgYBSc3veeoQHsdz1DED1DaP8tW2cYSVv9pD5j61nU39",
  "key1": "59qufoKoiitvepXvRLWELgaqUhpCav4LruD1q96dR6AFk2aRq1uR3Bip9ZNcwaDgfPhbtjtMh3dBDMkFnf3u3xE9",
  "key2": "4u3eYgZyZRQU7g2vYKU36wxazZiB4gDLAPQYX77hoadeYgDaHCfSeaAqaDM3YY2d7EySQ6MR6dKhoLrppLZNysw9",
  "key3": "4djEBZmkQoqY6e2MfpuhAJsxb6KCLje8TGFmjWixiGkbHHDygdnuHxCVP9hRcW4p4krfwXyyEkmMwNwq3bcZ8DvK",
  "key4": "5E7HH5s4aYJYF1rBP2ADPkMaa78d2R8WDU5KyPX7JCTzNwzX5SaPebiMGgW7qaxMuiNpbUAbru8uRcJfr5UtmCtD",
  "key5": "31NpVLVXLzWTsfU8KJzzFCHVHHz24Pz92pWot369DuZncP4i76rLGscrLYiJfLa91eQ8UfGTdJV7MupWL3BkeoAK",
  "key6": "2MiatkQfqeGTV6JNpprh884WmxTuugofGJyDimWp6kuBT8zPmruHsWnBFtGuhyXvHeP3QZtuyQWDnzQh731Cx1wp",
  "key7": "49TgiqeAauoqnRPhFNW9rznhMAL24jXybDEpvkwPhNnm3i2FFEsSLouSRuMW6TjAXpnxUiGiTSE3X1CtYEJrTHYF",
  "key8": "3XzyuvSSyaBe53rPB62wdE2fWzDc4sttXQSwPBJHnVBrxdDC6KCckaU7LFnLwuSGuooYaFWHQ4oqg8H3iaJt92U2",
  "key9": "5sqdsdp5L6c8gXTuM1rUG2UDH8CPh17LjaRENiuKon6VsJhLWLM7EeWGgtUd86uRtgK7nwA3wCFrgCwCDXXzhkBN",
  "key10": "4AsgVvY813RVYpgdzQaAtGmxoLkozVJFGa96v3hfgastuezmDXiXwtYvFZvPNDir7M7EtGKiYnPsMjvSMxSLT7EC",
  "key11": "64oqH2HXQrC8yoZq9L5mM8x9ZPV832aqT3jnea8J9mJpRLts3uSt12CXQEkWt99jhq4XjMCoRmQra27xZhS1fDsS",
  "key12": "57M34qmQxoBPzvj1BTKpNZLnon69v8rrcx6yMgfQaMjwTLRBEfqhbPLpb9aCcpduUbXfScrZhwdj22dZjbrdESRc",
  "key13": "429vG8nzTtejew1kjqgyz9ttQhx7dxCwoqjw66fhW2ARuHmfBoGKMB5Md2c86pVYwD52eM4Az9dxGXmWs8MV7ZiT",
  "key14": "5wi7J3ms1fDB7RP38Fs2ygAW4Far17RTC8LQzeetYXHs4XJh8MG3kMcrmBWhiGqWCTRKbxVz81hCFYV2wRkwG7J5",
  "key15": "4ktmW5LKw4PfAK7MD3mjVGqhMzjwBJJGZJWfuyoCUYDK3aFXFiKbru1qQ8ei2TeBXB9PLmTnot3VGoiNgRS4zYgr",
  "key16": "2aV8HgRE8fMVkGZzX7Ng6L2EFsbQgHRNNNRhFWuvaoXpU1rnCq5ttX5dH8jqRMoBLfK96geDGmsYaMyJNGNU3V9G",
  "key17": "4JC39P2GLLjUN7ypGb2kn1qkCt8fhuUXUg5Fd156dgAkzP5yuht4KWmX6M26XMv4djPeFkPurTSJesCnuvfzphxC",
  "key18": "5J8Zg1VrPGS8cYvwB2h1Bu3s7DBzy7CjmLWwTsedBZgP8Z7t1HTehGoUWgQ8JwVNYcGKe2ubnHsztsbYwg4B7yCK",
  "key19": "4McDj2D6WpYbnNshQYBxm4zvQj3fyq27iJwGtDSNLYeGqpwLXLYpwLfuu6kUiuuHTkLhUCYxzspSpKwbxu9k8z1S",
  "key20": "3wY4UxUwcMBqNfMrTHngyw16c1bhhbC4oeVGvoVKtcWTdMiDTRNmmtRa7j69MftL4KteGHmUYzP86Mv7GM24osbA",
  "key21": "28oe1ytBqCSe7twqsoanqZrDqBBXo3mXBfH4GeqDhTPJKcuZ9h7fpLxfNoZvwwbcFa7wTiJpVARPyPs9e1fcnN7q",
  "key22": "4aqShz3b3EsJMz3VK6krbsqmNjAoEGo2unBY87eA8WhzKQ74hA7qmdmT5jkqjrv1GnPtU1HXHJoZh3QMPgT7mfJA",
  "key23": "3RFTNhfnWTXwya7T7k1PwCk3D3zzRDqJqPc4jm1ZasiGSP1BpVYjUZeVY8dEq2ZDYSinNiNDDwKZHXQGui9AyfCr",
  "key24": "2FcPk9dnsek78fndXHa66Wh2osN92518eLCTNHhYbTgsa2g9QshsidLK1GK4Whoz7AKSLzP7ngwHPWXV5jmXnjnx",
  "key25": "5upK2sMz5S8ipvZsyCoUgGdDyoejDLFx7wdmGhKbnjQUcgeiVnkenDtVaNFNvhsRX4Fdjs9Px2ag2YM6tZq98vYA",
  "key26": "fvHbY6TM9qYWTZebKPdZsuxiZmhVwCS6xASZ2hB5LWd8C4RVEvUC1MXyur9TWbNeFD8KRdcMXuwzV65no6qbZgy",
  "key27": "4EwyAVH6Nmfv7pJatnCf5ZA4sEigmueiRQ7QLSA2kqXEhY3FHPYUeug2woUnnWKpxEADckxLD7QKYf8QPqFSAr9b",
  "key28": "5492V2dJ3J1E3Am1Qw9nsbF5W7JTeLy3CKEr4gKLS7KyGxHhBRgvaBUuQmwBcqFHh3ntUecvMcBZdLamhZ4KkT3w",
  "key29": "4RcQgqB3hhkxVkGPemyVYSZ9rkvoVNx9nj2Uztd7bDgvKWDLLstsDB5wVDxhNR9dUihccukv2pRkBcfcP2QJV9Ef",
  "key30": "4Rij4z3npDxj6ptEWew6jDoMuBTv6zAwutWXVNaY6rAtQkHVLrdp5UjgfuMMEzU1FF1zwutVpGgpFoETYRqvyGho",
  "key31": "35ENacEVage3vfQxaNs59R8q8Fe84HjT6pFQZEktgMZtFGdkDk64jtFGtaVvHuAdtp4MJ3phZSNrRdrYxkub93NV"
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
