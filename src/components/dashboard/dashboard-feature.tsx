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
    "4rLx1itC2gua328F7Jmcwy9HLhJYBAkj5TnYRqMv7HUgKcqHwrRcTu6teMybhxEGE8vam2cMVjzVDkocb48vMp1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLGg1ypw69D6HBqLmnuHxRvYcZ3qQnHc54VoKAb6FMDNncqfQt2Gd95ty3sErduiPdGB9LZBra7jmxDnXzmbYNM",
  "key1": "45TH5jiXhXC1KvzujJKngjjnXqwoRXTGnrYKdyxK9xZ9cxTuWT4EEzRKDJUVaFgx2eXJFibBRbp23hZri3auaY78",
  "key2": "4pf96ayrv2MHRdKRxq2XsQMRRCTVUNWtde5GdxCJXmaqay7j3HEkjfGdkNs3odc8LfHNozrQ6na2V7tLVHrGmQLU",
  "key3": "5EU2Az4STQKgzj8dtnpTT9iNh1XEpthXELgNA7PE85giwdwgxDzbztmTjefSRbpzqZnsHzQtZrSm3wk35FpLjdxL",
  "key4": "3T4gzFZrSwLZ4pz4VvikHDKAnSRqgDYAAH1yDZaDFj3C4eWYLLGZW9ms4zeV5WUn4LsQjv6jSbeiKAKXgVDRdvw",
  "key5": "4uvsL4aUvi1kSLpusqQchdfNbtiP9AyK2wtGdFuWwF7avUCeS9h9WoqEbUnKP7ZHGFKU5MNQ6whFGgQHVLwp3QPp",
  "key6": "5ejjkGPCgpMqeVgsxrPyDaYppLt8GUM8FAmYJrbgHtNFZYpgPNt4yFrMLinmfkwyM5WAT1yEQHGMsYVbY7E5qsZM",
  "key7": "5hkWw4uDFArS2aaoXKC7hpCZBXZeDSiSST7pdTwWoH8z3tinYC8HvyBpHwFes99o96oeDQDkRXRBV33NW9QVZ2C8",
  "key8": "24cDwpM5bwxRX7rRP5NKhyeKQM7MU2EEi1iuyCuVt5Ff6enMBMb3vMQ6BZGktprx17RENQefS3jij6vgh7JQuCcR",
  "key9": "48DdQkbEwd45mgMstEeWEi8e6QwpNsz3aZbF7NZJEPmZaa2WBQz9da89MLVShfEFXdMLA1Te9g2e8N83k8SVtXVs",
  "key10": "63kLcS46tkZ7ebHTxcpdNPpgPqXSAXeJNyr2KBetpSebe5SBfsU6gTWeddRxrvR4Kn7k3phRdtRyxJT7PWxTBBAj",
  "key11": "FqF9inMpGsb9WaWgViAmWXgbae2o5w2fwSDLprJy7dDqWeFjZQZoh6FmP5SDdWqLbfa9BzjrpMDLSx31AgwGdAw",
  "key12": "52qgtDRibUYLMydu4K941EqF9cRZSdSq4GbRQMybQhHSg3xoHAcEQ4xHxiyEhZ3i8KPQ9GBep2yqJNAbSUPsBazR",
  "key13": "5DMzkTKvRqrZCKt9972uSrY3acmkd1CeqfP5QwqDTkYrvVTVCWzw3ebvFPCqQid3arj22VgM3sMUpmRQvPgwDxoE",
  "key14": "4Gk8fN56cKXjZ9CTd7RWno9bM1rNKcEw9irm9k4xLHjonVz2JPhkfqKafATRzNCbZft2Eu26by2HCR7yaNf8p1C4",
  "key15": "2P7pj8pVsHWrgSePqbq2XraV48vgra9WXx9cCskafeg4tg7bU8mrwzAVfXGy6KyMbfN5Lmd2bfGZgW3mgUJW5Mes",
  "key16": "3RxNUowFp4aFLrr7DJziiPRwNmyXmbKbvmsPkAqzdwMQva2YhjAUXEjTujv3oAc38rjwebZu4eUniEMUnSs1XUEm",
  "key17": "MadDjUCkDD9j1tLDNUzuye71XLEP2cDmF1XHcYayVdcHwprvXTwS75PmuEanWyK8xfPmRxmDCZ6dKqnU8BXqBCV",
  "key18": "3mWYGgwwPFx5aY9YXASY1KpbGj9P6LMxw578WeU8L1UpVgZmzB5brQpzutuFoPZ5mvqvao8QFrfGShGKcZdemFXX",
  "key19": "4REVPTxP5VoMRA8WpeEDQz82BF6KKpjetxSnTHknCrqGWJySoTechXVz4ePpGj4FQCn67DD9sD3iTVfCTG42oHUi",
  "key20": "3T7dwFaW44kmTvzR5hu6xCx5qQb8hr82oSDKoZfspMGC2WjxxiQMRkSo4DkcsnCsaAE5ZNKmbdDUxJj2UJujERJe",
  "key21": "4NU6o9FtQJG9avn1chmwPJzFLa1XFuRN1dsP5KKn9SjWwmNiZ7TPCA4w6nEuYrTQacEcxPEg5JUswUupUHQQsJiK",
  "key22": "2arA7ZXxmzzwiyVCWWK4KkvV2ZqM4YMdg4TK5B9p5NgMLFZ9Fn6sprFfh82b2Pph9EvpTMCQNR8unQqrXrSafemA",
  "key23": "3fkTd7phh55c8yg8AAacpcJ5zqLUuFViTPRJzycJewDQgGNdrxqPW6GnEd7ChdMbEYazbzxL7aFW7aUvVRffuM4k",
  "key24": "4txK8zQnV64VwikcvpcaXAQd9LP8VLQKtYn6MXQXmuMG2ZuMVQuuSkcYF219to7PzVwQg3N7ECWm8f5DNKRe3tcs",
  "key25": "25shH9vZpxz95xJwRFRSPzuGkmvBd4Dgmy5N2fa8moEeytkddBhckxmqRH92ngkGxz83K6wbfFFEby1J3JrLBWEn",
  "key26": "3g9qdtYPZGfpa4dkEfwn8aeSNFPhCXBQfESZAZXCrs1iaW8fcr2nN2ZVJNiuVdg7JJexdqVxaSAvhqiGwyuh8ZJF",
  "key27": "3kRqSLXrq64DxRfroLbwzFM3VdgsfMZw5UVitmWyD1j2AALvavJA2J8SLZnwTJWVZ9waqF45cSRVVnc1tYN7ZTXj",
  "key28": "4PAjLA56rExdLtnojdStMdqwYjjJD8T4ScCtZAPvxRY1vBJkTgYUBYKQRJA19S2a1ExrwtGUbWoKSpKnLrahxYX4",
  "key29": "2maRLGdsESgAByNttNxMtPb8559wabTUXZxdkeDeUz6EBum5m26nR84sFR5ZmUVoqnyhbzGSUvAjQ1FUTBL4szXN",
  "key30": "2sqjzpxeCvQzdC4Dc66oNKTFFpXHWawXCuo4cCWLetg7hGARRhskqHBSJCgrNjWL5n2UQnXrovWY6zJjWufh77e3"
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
