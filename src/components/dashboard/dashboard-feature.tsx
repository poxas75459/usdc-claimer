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
    "4xmXuK1CfhXwmWDDVjEdyLS6sa5kyF12LLBwqEmgeU3sjmNYp1rrPpgGGC8tPio6sWxmiWBW7aV6QNX5zpTfbyQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KAaqAv3iJntCwBsyNB1NB5PJfRChUg7ACtci5WvUbK1UeS2J658MMYTVtQ68qURH1KB9znA9BbAGJqgEvGbKp7n",
  "key1": "4inay8QEyJDjMXs2s5kpAzwnjX47ZG7LEdCSvcYhnRsxsCbykJjJYrLRCZyGLm5D5Pd64MGPxCiU6C7Bs9mb9kZn",
  "key2": "3DKfBt17S4gPfZVszobPEEFQZPgqoEw2cc4nYWDpHnQ7M535g6kw9W1xh4eaCDoWqYoTUWCsLTEC6xJnMWm4PV3w",
  "key3": "4L7SG8udkCbm14hkFRd24KnR4RCn77CFt3Q28y4W6g5b9kwrh1tK76NV6YC8XeeTsEfK44Muy8rqZyujGga4JTTe",
  "key4": "3Kh9GwoTV2cSvzr3iiHyAGYGLhCb16WChBWgDGCMgn7cB17yGEXdJV8uEXrh9P1RBQunbXUgqHSWfg8eNzfFvy3e",
  "key5": "2HcjH4ncbTsgwpSQzJ6TSpbBG8bpkk1cpuut81dRDZki7ncKcWAuAvtT7BaeLQs61F7FVcJJhXbdy3vWBwHkozLH",
  "key6": "4cvAhadmVB78gEfhcCgwJk6WkCQofmBsQeLTZxfXKieKgPrXGthLitJbxA6daZfy5xJwqDVmVKhUcKEcEL26LhHp",
  "key7": "4NBzfWGvSdqj5NffzmnBao9bfgSVyUsJZ6btZb77CTeQUbbh8sRbcMSSJEyu2YTQ5XWVPKg79YcdxuA7eqepS7E7",
  "key8": "3bRtNEbGPPmtZ68a1aUZAYGcVqJGCpZE485hECjQNRkzjm5ubns5VZscMi1mtdE5sVwhboVcRo91LcSpmfzA5TCj",
  "key9": "xVi1igYfC7WpiQdQr2vK6hVbiCxJwduqAXXwrcKcwfk8gNFkxv5h18QS2ekeRvvnLwMEFZeSqzsH2eJh1xQwoq6",
  "key10": "wtBVyN3kyeiX9doVm71HmtKHeoNJQdi7X9E8QF8xdDfoDg5ke22um2wqqKpQBu1f4m1Wje8seHr4u7wezyWcBXJ",
  "key11": "3tsKKfVjtz73EVqHxAr9oyzotZGYJos4Wv52kTPiaUzrEvKxR2DFHNvzFUxjHnnyR5sssmvfTPEPedPesmPmEwqV",
  "key12": "3XWYmeVuHHYbxqUDZL9UiX5QRhaWodwoDyfkc5pVpZ7uFhscEM54WVX6DbUwwqnmBrHSGFbte7HpkW6DV4pGQJy8",
  "key13": "5xR8RmBLMLR7NxRTnvaYwcSEYeVN9fa2by7hh9R1hCx6Yvd1MMPZBqF4AGuCKG52fxfd1pBHfLmKBXdqhG8viQMk",
  "key14": "2xP1DmVnGnkY5NvXnoELPPiYzsJjjFatRzCKag6KCAWg3GNYWt9rLDWXatBBfLMRka2PLudkco3Vi68W7gH5u5jt",
  "key15": "GjRroUj7tTrFhagMzc5WxRiXABEJhk6bwd4P4AH3AAc6716iD4i5SfrJg1n4y4YKDmtRhm8nW63Qhcg7nKqx8w3",
  "key16": "3QBJF5YUq3P68VJ1k6n9MoL9uZmRGaAzg97VK2a5RHVHqZ75dNX5Pe4xy2JQRhHRLt1qKsCtphCHqvwAJ9BoN8kR",
  "key17": "4dayYxcPd4FgwV2Qxwwr6fXeAYeQBi1HfUGcENSsKx5FAjp9ruuJxYdg8vqeLGHifTF9hTWPPKhUkAao1d6CMQPZ",
  "key18": "13mfTqdRjyYJCyw8oMQkcjjjAFArprnnNA6YBd71fmWLouypqou7MmzH7XvgapKd2A3rEbaeRNFK3zjSEmaYoWY",
  "key19": "3p9EnXR8pYeLm2Xbeu5cQ6HGGsp9MqgCPJjL1fao4h174r8WjDwqcorjAmScqW68YKuJgPopQ2rRQWe6Ro6bmnbn",
  "key20": "H7qFiN5v9NdHDSF12ZeyP86NXd9J2y9cH9berBEa7SFbUXZhAvbK66uiwXfRQdFomJQWSZZoxxo6Ro9gHLDUg9Q",
  "key21": "4YKdZH9Tbo1UAJPfhR96ffkYQvifVSJhXC6ZFpcFZi92DUukdJ9ZbmBwKG1CYcbcT5ausNy2NTBTGocyYvFqCgS3",
  "key22": "3prTFf6BYwTL4jLZFSbXjcfj1Tpe43epWUCgaXzXJj16teJPKBE4Yjq1WF6GDKNezyw89YUgVf6E7aPs3a95uaGf",
  "key23": "5W9gsZSL17rPcSZdumqt9gvKcvz7bwKc17mUWCFrLXVLnNitSBGxDpCff75k172uvQ72NUfNpw7yThHrcADqiJH4",
  "key24": "3dsyxHR62yfGZxmyjpxNSQTDmRftHHB5h3UJuSkR6P55t2TkYL13BqY9rsZ8HNmjRPSHL2Kx6CeicLfk5GiXATWm"
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
