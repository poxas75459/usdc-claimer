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
    "31vSuYuRda9Cbtp2jQHwEMHUfmxHBd37W6ges14bfyarGokYKZkDKauAFqg3rZyVafXNGKN1PoTVm3V2r9h2JnMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SMa8ciPWcQwMdTkxueSSVUdtp6r2wKuPBDutsc9oFyCQW9bkz5xpCtakhwRwZj4iHUBFv6gLuaJGgfESPQASwgG",
  "key1": "2cgoWAYP8EBXUp5EsSss8wbDfefM39gkNMwaRTfR4aSRW3erysrqcVHdUmgcAZeJX9grfoftAWcFucARnWFkFtrR",
  "key2": "5tk3Dm7XJ5dY3F2AkUSn8kfY7DwckDcFrDkc8sYg2NskNSFoxyw6F22nkcWJwqi47qzCopVEtfhUdLfMQkH3zB2L",
  "key3": "2GuKLht5daGnVqbxFHtxohfUprgpnz7r3jdhCJ856JbKu5tS8U32h4uB78TrbafQRR1NbeibkGHbEtkLg3WH7okD",
  "key4": "5weCDfGJVKRT8vyJd3wtp7djXqENtuUB1ecq6pBa3XCLkuWCstgzgsFE37dGqrxcFgAREDEnRrFXnFgu6NeGJ3tj",
  "key5": "3LC5BWTWADRdkzNaEXEv9t1jXyMTSnRqVag5HFwF7DhWtqbmftppwQ2xFSUCT9CDGf9qTN3ni36yLXiXCu3UnwPY",
  "key6": "2Zu6L7PDcgHJPiVjjiGw1SRuEc6aZuXsyNFMd8FWU3yCzqXmWNUGipJ1j3w4L4bN5CN8EaSGc6eUfCfPfMKwzG8g",
  "key7": "5EAsUpvYSzQrLnTpXsut3kYNz7wtwz9eT8J7t4MyCnskFotrpFw2QoxXcGJrLSRytiqt1T7FfkBrJDAkPkH3CTNn",
  "key8": "5iCSBwWJGi5uJinahfsMEwm8CZjR6mMUrFrFeS8SwgsKHTXmCRsLeMPFDj7JCQu4LFK9sLHKGqj8kvbMmQx2MVPZ",
  "key9": "5iUFdLrztdUv5zqpDHzAFTJDXznwAkQqGBHaAuMkZa3nEab7NM51Q1g58dUWhuttKB3hqWVQ7kmTR8CJ7RqJJuvQ",
  "key10": "22gwy7hMTfDbDVARUBmsE19Lp3M4qejwXbuwMC6AhQCxky3kHcdjx7WXVWZU4v2tJ5UusF6eERr37AzHooSxd2Hj",
  "key11": "3bXudxYN3DnJPg2WG3fABhjpYoZqZnsrdJ8w41hz2ykT4idqArZk6aQUjMYvu1zKAt1zuymSDT93aeTGUNVQyFQp",
  "key12": "5aw44AGHqExiGuN7nxcmDMHKvsi3xGNr2LWCRU8bXa7chrc4ULBmg3HuyQmgBMjYMYqNQyuazu1AfVYtRxHNidoP",
  "key13": "5NkUtBBgCXiVbr3FJzRx5nR3UXA2vAsbQAWg17ADYKRLd97hvTVxCvY4dxrBqkMC639bW81eCJFPFaJDa1ZqRiGG",
  "key14": "5n3cEGCfuP6Z3EbKWhTh6d31x4cPaBAZaNTwUxFog42Nw7F4NBHXMDAEDp9gZp9WyDsEn2X7mDEZ4kBbbQWw6ZY1",
  "key15": "o1UKecVQVmkzP2Q78YVkv5RLntBtHyTMFekePCaUAGZmVZKiZnce7jSyziRetLomvSs2BLJohXF71r74kmRJS59",
  "key16": "3vxj5dMtsVWeSkTkqUFFXk1BX8eFuZC6FykEaoTPyfKqempBwLPKVAxB7hF5jdbmHQDjguF8jJxZVR9wB8MmVUJH",
  "key17": "4aYA5a3n2tzPsVcyNtiEmTvEH2Msi4V2hLXpy7SYfmCN8Jvg5oQvkJzfRFkxRx8NUGdzQhWqz2CGW3dfUdpsXxTG",
  "key18": "475xdPncNT1ReKKU2T7NmSn55mFCvAjfkVhktyL74N46EgPmwJrduRUJXP4NtvdjaPwhCCNn834upKEs5aYdkZHS",
  "key19": "2r14f4mRQoPEnJqTwZ5DDTUJzviMsUjiuw2fhqH9GeSPexZ2u9NHNvBANqLPs43pcM7pfANihSdapfZdwjqJwagD",
  "key20": "3iipVVtMagKoPeA2au4LWJ6B4hxHQ9j43AsGNGcvUPqk1S3fYb99J5tjT7kSTM6MsvvLtUci743C9pVLU2hYa5pj",
  "key21": "hvfoBQP9yJVc7Drv8sT5pp4xVhGVwSc4GjMrjAQJ6zzbqaiqXwHxHiicteXgajbMtoiEyhsEot7cmW6hZfQcoai",
  "key22": "4fCnB4JbKbTvpYNvNzZQdojS6zmBHiu8eAJJxNWSDYiAPT8TBEMM5cc1EsRu1DFk29G6Tpxm9ZZLzdoCPEj5vBh7",
  "key23": "gY6mL8aSeHNrQ1zn4jAWxioMCBgF2qLc34x4bvyGwKpwX4xuKfhmQd1fKbbcMQMPbm6twgNofvNiaCUNCL68XoL",
  "key24": "64RNgvT9zpWu75CNoNeD5heqhiGjWSzuEAz7nnNyRWdD5QLveVQxgBwgBAwo9KqN5VCjxaJWFqC3NeeotA5CsC7E"
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
