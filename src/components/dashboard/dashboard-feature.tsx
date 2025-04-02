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
    "2YeEah5twaE9WXx3jC2VimZxcNkkK2xu9JkfHbPDmnaW3Y26dBSd3HMGZ2YT19y6ejdy2xinnern4yHe1tmGLW2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mqJiVcueYp76RPohMk3CiJRS28kMqpv2Uj2sg1p5TKA2AZ5rHNrtVCvqp8DnF7W9G773Pb7Ep86TftvVZTPr1Xe",
  "key1": "3w8sKAsq1mjt4ZgrHDCjKrxocCSzXndf4Dm2nQX1bfbxrebpwnGc5vzCGgjoMJZWefyymWb9fLWNcdw3e8AZTuZk",
  "key2": "3U6eBQHBKCqjQ9XDgvtpX8CV727ENC7iTMnwJBp7cLeaawPegKEV5mLzSsuEJfe8Rmrk9e9JXctbMw2cyr6fkYxU",
  "key3": "2z5nN5PB6YyqEgtQP4B6PJsxff3znH6YKuxZPdoHEZqYd5A6NcVim5y6JiSNoYRDAS1FYXEg3zEzXqqT8rtX3P4N",
  "key4": "4LZUfBmDXNs7Gkk7YeJwfr6Hwj812831afVvd1beGbMDtbzpuQJPb1dhkH6Tf4ovNoq4cwM2Z5LgQqfMfU9Mhavp",
  "key5": "35NY9eYoeXxxc69zUsNhtxAewDZ9csqA7ikbZhojarc7TdFW4fyJdVQQDmQJADozfQWrsAbvDZb66Y8MYWSta3iK",
  "key6": "sxzxmJJraFCcdWCKP9RT9bJtXCmjdvpGgNAa1U2YG7aUoeQQwC3eKPWWN6VMxzKa8ATHj17toSFJtFduegRLsR4",
  "key7": "e25xtexfy49gPGHByNLZ67n1X7t8HWtGQUNx974D2WGnSfbYEDpi8SSqM5hZrdLhR8N4qmTc18WAzPdt72ej81F",
  "key8": "5Ckb3vUYFjozAgmH1aANczQDjhfKdqBQpBTuXrJS26C2p984H4SRxLTYWxuJPKUF7GqWAYarhMBnXanMCQFiFsE2",
  "key9": "5XMKMCp8N7UE4ej6UCkJsynczWefNBZgWZ4yNiCRrsxuRAfS2fiLvwacUom2RqvT7no6CFsK1DEKFxqeQTQ6UXu9",
  "key10": "3YtgJHvVQUxCD48mnFGvvYTASNbHPuLQkGRuCSdvZR8HYEKy51Pz2LVh4RS91CauVpMUtum4PhFeSgRcLs5WSepz",
  "key11": "5JCkeMKTjK16iej9LptWKneQsMuSnNef7BtNvhbfVwbxfau5CwUdoQhmDf46n6F2KHe2Cz6GjaWuApQYyubSSrR8",
  "key12": "582exm1xHeQAvS1fsNWpxDxxXaWYqBbKUKN8K7iSFr36qwFkVh2KcV3hQkHiy68Gm1KRUKTeJLVp5ZPTW8S7hFKX",
  "key13": "3VWir7J6GS2tE5YztcUt5XMPeZQJLXmsRRdcnWhzNzN8NDaf8C8dXjDzwhtvt3j4tKvCgRqDBnXfQzzRa2vdFsNX",
  "key14": "4YQ15gdfBkYh8QxejDQ269VWP96oqy9YEFTB3ESqCf2NPtDmWUQXpcjY9cAAD4EEVakDFuQgmMoSFVQDZNRzKRkD",
  "key15": "3xy5ujsTGesJxREPXr8yNWMdBGPtsRy2MJs5vRWxjNABuXcvPKURbh5qUmxRk7Ly5tp92Q84g7rR7wwTrcduZATW",
  "key16": "53LnyoPw1tMq7yMHNEqed8CwH23xDSC7PbvicDLPjiSfgjoNsyfLVTR3MmBFHV5bMBFW4sF1KmZiDpKBrwcARkAk",
  "key17": "2hp3PogxPZuFp8t9dgCw59LRFHEMcckp6p5dPRH3YT697JKbRtc18ZyFvFSAuUktbFiEL7k2zB2hhwCt1MtJUt93",
  "key18": "49XJwB6Zczprnz8VUgSkdqikgu41woqJYx1jmdDHgiPorVxnDLUwKC6iide5qBngDLKEBnrD9KXTUEYtLyXYoaWs",
  "key19": "uTYM8y2pW94MuKeVX3dAZMWBiFUy5GCBtuZwr9jicBmVeHf1CoUmZfPuMMjXEsS58fnhUVmHhsN6CuyKTQJ1vZJ",
  "key20": "2DXoGxdsMExpumT8HYhHXZ1aJJEWHgLpa41iaaf6WsHZRtgUSmdQDhnUjECHvDeSqyiJpb6HQuDNuSQP7hc8ANKj",
  "key21": "48em9cLATCkusSDpRPZ77N2VZ9DZnexNEX2Gzey8KpRUaKrrxMaXye6qFRmguvgHqRmb5B23MoMhCn9v942hN7xP",
  "key22": "21t5eoPR1Xttnfhn7GahFKmh1rFCWq9j4xWXx2Bt21LGL32mqHaTXuM4Z9u9XLjg6Tg9ztQkUirBAZGMjfX6y2RW",
  "key23": "2mCJw725vd875CPboozf55e3BSVZKUsU3ZeWGRn1FvQzqsQRjCpXqFjZnrCPtz2Nx5hgxLuNG9rBGfVJCHrzZT5i",
  "key24": "Rp2MrRt5qep1F5ewKqBqQ1vWztM6rrkrbdWsBTEmMcFgtxqSS9pA7S7GzWG3NMmjiYbW3Y9jQgozqYxvojpxerd",
  "key25": "5M3CsTSSYPirofuwg99Zhefjd8eeQiCQzVgPv1zd3NYuxHqjTWnCYX6Uw7dcwC8GXz6HLV375M9AQbSF2bVedX8Y",
  "key26": "3iUTXHup8JTeaU7LDLQ69erpMwu1Qjmv2QkievidQQkAKKwXwv5EzsRvDgnvZxoQuSSL89rJU6AeTqKeG7oJQ474",
  "key27": "SeS23B6cTBoGJsifnXWunjJGeWzfLCpJjkAhSw1MC3vaBzTfWsK6utHQELHWisXzq1fq9sPgDHvmYQL3VofSABy",
  "key28": "3qiq1sSgHs3f32s2zTgZXGTT6HN2eGmaKFnFy6FT6jg6CWAhqyNmqQX2zjUwmVJoa14bLNc2NtP9sqxtKh84SGNT",
  "key29": "5vYRV81NxeEAnrQ5dZtmbtP6LUjMCuCrg1cr6nVZtzgCU2rHXdamC6VJEaqJSMBw9eYVHtphZkaijwJBPKppGUkx",
  "key30": "ijFK5KdC4y47zFrbGfSTxbT1tXTqwbiAHDz3jsmFXPsGpHz4KRRDXcJqbTPcsAZRzzx2LjR2rRkCFaYzFkQo6sJ",
  "key31": "3gJCFuMBadNhrbNfLnauA1pJEg9XamgEwQJerHQ7mBi2zPL7Wz5ZXAzbfZFtTDpqZqbAwr1HZJ2MTzfgq8HdTh9w",
  "key32": "5tzqiQScabFfT6pRXGbFegSiThAnPAbEufHrZXaPrP2LHpNau1YLJFRCRwCMCbQgYCgvYpPnyodTwTmAdbdqv7Qx",
  "key33": "3E1YuWoXirbE6JS6nWifK3yzaru18W3UD1GLZVY2g4FBTCmu4Ex3aTLoWyU5gUez1fnqbk1jtw55XqYr3gM3oBni",
  "key34": "4AzCiLeAhTHxTVSVK9cNYZ3Cxj8RdiDx3Ko5QRyyfy9MNrciKpsNrC58n4aY3Z3XRGfd4B1p5Trt1tSdUPShmDF4"
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
