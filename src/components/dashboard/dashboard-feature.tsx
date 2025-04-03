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
    "4tRm5UZyBANV45qXFqgf9jhRma3LLdsQCxkLSUKdJigLC8hY2jLFARBDAA3Q7wHQnXCTKnJNNehHsfQMoGfPEdqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ECJbf2S5MUDggyXDW9CKvbpVEmXEC9S8WrM1cB1TyecoyGrBNmvdxKbME2tqsjCxjJttcsBaYMXxHU37gCfix8",
  "key1": "3HmnNhhWeLJP4Yekxy2nSFHF1UJtnAad4YTcp6wAmnsS3bhEAXAqEihBuVzRqNZuBk8mDaDT6PGoLHp7cBpa9SHK",
  "key2": "4wgQo2AAWgCakjTzAFffrKHa6o78bVCGCKoBB6pFFDLLiScL9pfauDxLs1GQiJjA1xbXextUMbtfJxuQZ5M9RNAm",
  "key3": "22Ad8xxVjFKQ6aitXtxZ4b5yGFEAtqUX7WM7xFE1MFUkiCQNtV7SoDQfzWX5jL6BiwqiDTrkSYJjHVQPnbhWYVHT",
  "key4": "3Xc1YpVRcJ7WGxm9tGkXeT6rb6XcgbPRAVhrqr2uKjBUcAjvYWMeAFATe49CsNqUXFXfzEv55hQJJMyHTw9eqmxc",
  "key5": "2ZSo7cK5vsqE13yPGDks1MMPjNkDxBNR3B9Ke18CmCpwPmyGraBo1EDQbyvk5s9RFoVGmz6kMERTGbU9kAAF8Nr9",
  "key6": "2h2gomS7deGbEuZNw72gArNJJcxU6bRD4wLxGUdF43kUYtQjfq9jax9dJVjKYwt7bnDmnSgyBCuDqdvcB8VQiB6T",
  "key7": "32FnS4UYSSofrPKDSHhqt977op1zXVjXnW6BJHmzRSZGq2orzz5im7ZxP1NRUHZSunpAzzykQAiu2XkMAh2cVR6S",
  "key8": "3MqBfCkuGFvnNC3g65XkDycUnxT22b6xeFEz4ME5CmPcMY3oMC4WDjLoEswp7TKV3wJxiHeHKY5ZbBeyyUq3FGgV",
  "key9": "2xMh5ciD7MVZeJeQ8jCLzAS5ks4SS4Ji6SvpgrZoTT5pi8oBnR7sPscJa5JqmS7ypa1rthrDp8CX8DFbhsaKHMCF",
  "key10": "5srrzPfRKUpZHFsqHWPhZc558RrWjETsn68GpmLGR8UGrKRrm7Vuyr9AJNJWNbMcEHuBQPtXtJWdA1JhfTmKuivH",
  "key11": "4eDXt7HMUau5PS26q2Cm3WLUKdxrv1ufueLp72pgCNZ9NAfvy2SYHN83dJ1mZwFdsKsGzUi6GhKsuNsBuyb9wM7t",
  "key12": "5neabcj73CJDK9fzvPK8FeLCZqWAWcPwb4KtKkr61jfupnd7CRA2h4BS4MiHQpxX4jHgDz1hdrLAsa69CDR6GKnZ",
  "key13": "5j6Z1JTunpvemWzJjXbRyQUq2BVgc9iEj4wn6BsFWLhdYhnjTYrYEvjPsdFgEgVnwAEH38cxP4wpMNMopGBzCjWu",
  "key14": "3D11rbQA6XthmAvAZXP2EGRjS2h3BibQiar7Ym1hBHsz759adNDPfYFbPEsU9bfxvsC4tMyyQVjPwtdzRqkyhP9V",
  "key15": "4SvNhwidLCTcumeU3yn8CXAaHjHwg1YWuDNjDrXMdoPZrQrBo72YtydZKfLzLvYckrp9UMjCajEw2HttcB5V79vd",
  "key16": "4rYGGpje4SYJhwgAaM4GGFKWyoCdMCaRzhMU2hgNoNssTj5rRjsXSXCBfnbZaHtFvamTLTpnrKXCcm1S141XRmJ1",
  "key17": "56QRXY1BEr6byGn6U48VQQ7CwDWPwoNBdYoZzxQ8X66pAtmVxZrW1ScEytKobPbMKacwBzHvQ7vsoHcs5Uub4Cm2",
  "key18": "43yKs5Tr46ce289g3NhmupGCorTcW5cc5wCHjwUNLmnDvYmuHY7bi8GQNJEKbwgpCjJ29ozr6teJwXU5JWq7JT46",
  "key19": "37YmByfbRHc5B5mxoR3yoByxzB7m72hLxpLtN43v5r6zgjLxVaD9aLEioNerL9HdpA22Peuk8191iM5D1xMoLffg",
  "key20": "3uptW2upuq64L2o3bzFvXh1yBKm1bKkNaAGFABX51Ppoy4DQ9NUtaNU63z2Lj4ano7wSwZ1EzdXtXxduTVme3axh",
  "key21": "4pHMpREv5Jk7CNbwtDjY95H4Nuv6TLHyekC3gEwxm4Y1PMsqvsoX9MU1jchw5yC6qdtS8VLb6JHLDc7By2xhrdTF",
  "key22": "3W88SG1jC3G4ZQJLC8rmY3bmBTMZLBPvXiEa6nJGvoqEaWymDDGCirog97kZc2bs7H86cx1AJPiiKpBnd9FJMMTu",
  "key23": "pV537hF2s5ZPYY4gjqMGnrvmHPwHBLzQzDVJYx8FBdZTSG8ye6pn6k4gjyz9TGEoT38647kbqMtHsqRxEnqrn7Y",
  "key24": "4y9v3oUTvUEiKZWijpg9HshwhjxmtTZcvszwv9ZgpmnR6YD8U8mjzsyeU8hrdxEuYoiLwNx3pbo7tCPvo1krgU6W",
  "key25": "YmSsodEv9YqUwUU8PEcs2bTx6pW75ziQQaDKcPFgHvqMQMJSUdiLrLUVLn2Kv7JpXktMT8mi6wGCxqUFXUaByjd",
  "key26": "5GYVjXUTdiJLLWzAZr1FRxBEz7DPVfQrM42APrNMFVS9fm7c17485dRXRViCAf2GrQMun16Lbawrx1yKcPmArmbz",
  "key27": "61zYpSKU4mWipTCdSMsejfJb19yN6Yypbe9v5zpyXU4zaPiWu3wkuBzCRXGpJCqSyu5vhY89aeJFYVLdupoX6BJ6",
  "key28": "2i9BAYMoUzLrEmDVvrMPn3ehGQaty1aSkWWAa5zMB9vJeBH4ErWTbaoxGXaZ1znkxRMttJT4rX6F1uiwMr4Wibwr",
  "key29": "5MvdHubJmkGB2habVj73pQenKGj5jZ9EfNJuhRd8vQvwbZdzNBDeNxVmqYAADeev1RQ5SEDudnXJ81rDVTpGqjjT",
  "key30": "41BCYDYnvHyJ8i93hpovCrY7jf3VMuKU9k9RurMdFJEyyNiUaaBaTzJRuiUxTdhVXxE5X58LyQfLfvoHynPNKnD8",
  "key31": "osoPkEUKAzUF15vBCey6Qxec29veqjuckf49RbLRH8khbaW78SgRNhyFQwzCo9NVTKApghGKzzfFWjLRZq1gk4C",
  "key32": "2Pg9LnYwGL4cu5Zk4SjzZQ4yVx2g15ySErodHDHvSZvMo9y7Zd8cNH7kmjVJAkutZwu94gT24P5FWdnL1HhLrJwW",
  "key33": "5zT4qon3bTuA4FpNZwhHaAa6MKhCNRH7Y3Wn3hq4SGJMeAtzbfUVMGSCqmveZ4QLVwPZTwHJK1myRRV4ygNdPueZ"
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
