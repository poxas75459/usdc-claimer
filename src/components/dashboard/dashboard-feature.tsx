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
    "46kkEb2k8G4KPtQwVWdsCNnJqWvhKK1JmttnqsJr48q3FTgoRwfLD27bAWLEbdnWH4DEzfceHCbVboMK2zESWFKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QDFbQHRFVJgsYhSSNSgusSV2tFijxKLKNT1tCfTu5p1qHpTV2T2goVmxYXBxKVDC4shDNSjyXcwp3bSWd6MpNVB",
  "key1": "4gDa2fhVvEtdBBmvKAmiabPYWvsw9SG6efNvbqfqpv7b7dmoDq5TfUaWxqJZVpNrmpAVJ8nPQpif9jj3P6v7mdqR",
  "key2": "2mzhgw5RpUdcLj8XHJDDvnoR39b3fGyNAkQZWfgjgPrC2zvTsJUyvf9EWScMReksv3A4uHJBBa2k3isfRbLtTqTy",
  "key3": "2bqyhQuR3L6u57ov6MSR3SUhpJuzF3tcJYrKwe1LDtv6AiQ4wftwChRQxdVB24XWBd6tLXq9B24cutjJVodP7mVW",
  "key4": "AUvPspqV6HttarJEjvwhwS6xm8UkC1MX4HxjLGKcWhKQx9rwfVychfY2TQGiLiCD9scNtpZobfmtMuyJuZGX2AU",
  "key5": "2cjZsAgpHMuV4RZFTkVeFE8FkC5Z2pGba56xFtJxNDmdfLoXh98rLyRPJ8XjHwtxHukdD4qWasj68sSPDuzQndfK",
  "key6": "wS4iedeZrK5erz1v2vd9bUkhS8dzWpTjRGe7w32Ww9tUju2uNk1difteyjbvHQxz2SN7X8RD5dNWFvoAs5UYgrm",
  "key7": "3GC7j9Gne3EuRLAV8HHZWUpcVdKxXrQHUjk3jskbsuwm8NuiD5fXsqaAaZdZDMCXAGTbqR5jbhDT9uKvpA6cYa28",
  "key8": "4KxR58svX431Htc6b5VwuHuAexKRbRKwfMqs1n9zY6721JH9AcRD7S7Ueumpa1Y2raVzVDb58bftcpFCFscaPBQE",
  "key9": "33FwQutdvSDUFBp2MsjMuvH87dezW6MB7bcU5MzPLQxdyUvCjmLFUc9osTKTQGZZktiS8oyfEArVWY7wANauJ2pr",
  "key10": "2k3FoPU2pLvLZTn6wX3BdZn3Lx6CfhUVVggm5PCihgLzAwCSEsQgR573zdXoHHa1y9umVYJ6uXwVMov7kiYMcWbb",
  "key11": "4vRKmGRX3QVm7QRE4GezKP4FKtFA3HZua1UguzWTvGvg6bSj7c8N8YknYB8Zg1QdisHmf3i1Y8vqR2FTr6wJWa9H",
  "key12": "57y2WEPhcUvDUMf5WFhKkptz34V1bcgBHzppMEZqoCre7TM5rQV6qjS3SuwrcaXTxaDSm7BmZSNGADW29GeZP27L",
  "key13": "fxqyCMANQ6eAwizhptwNmodpSX1usgK6VkSda4657zDqTtBfYEMaUF4LkNZoPRuoGqNwx87oieRefeQyGBqWzx1",
  "key14": "2aactiaVxyDUXn6cKDw5no7Hzy8pf93RmrLP7H9wQdSYPUBTD9vXh585r79ed3JhBzDpzRsFMDmn4zjXP83qoNBf",
  "key15": "3y5PoaHH8hN897We5eQFP8hXYLTvKtaEyBsXTQFTmajWBp2A98dNBx3TFoe916ovoqU9Md8orcaejqx4Baj7iZNs",
  "key16": "3N9mmSLE4ThePcE4fMU5ECJ4DLuafe2BNmXFUafNpKo5HvGdfNrEzP45dVPGsLG6Un9ALXNc1kfyZfCMdrmmd3CJ",
  "key17": "4SpRdvaTM4TbJVUWjqP3T3xpVbTR1sribxezAYMnTZ7cJagwiLbdEKSCNQLBHoNwxs87Q6KTnsxWZCSVRH8zRsAu",
  "key18": "5h1qRfKZ2p8fjpztpLojuiEwQJYkheCFhQaQTi7WWgVYMpWU8UP2gvx2oC2BFti4Wo2rDaPnrZHkfBKYoxBsTG8",
  "key19": "4SMEpZjKfhjvNYPUdinDqjpAP6ue49CfZcEn8HT8Phsfey9W8TvFEahTo49KSaabDith9be8axxddRo3rMSvxarr",
  "key20": "SukbcrJ9Vmii5uAjrGm1z5xQTsBQzxhmmykCDq6gcdpyKmQ1CHnx4LPSNjQo8KwqWiKp8hjWLqaHKBn552Lnsws",
  "key21": "4EbxwjVuuZDR9hXtNEBF2MEy6jzvhnGvUXdVctLybh5pKRvtRsKTX6ehLrBHM7oEDJPN3KkrtQMo14NsRWbTdzrd",
  "key22": "KbMAEjz1BF3xY4zwMCffWbM1Zin8jApLSPE8v1UuSyxvxVY7rucLSZAsQ2wEqNq6tUGyy1xgLssUdbFP2pjBibe",
  "key23": "rcvwdSqVT5U4NCQFRPDBYFKgvhVVFj5BCxoayjGKGhKeX2vAyrJPafyNnsZG49beGhRNAcnLhhd3pF5CaMbshfq",
  "key24": "4r5bF7DGv7uybC3DJfYSt9m8vDZt71CjEyrJUJsdmetGdjGaXRqj4LkCSpBraXd4tZmf9NWJFhthtjGyHdV2G5n4"
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
