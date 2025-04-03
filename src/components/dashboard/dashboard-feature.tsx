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
    "3GLqzUcuzvhLFbTqEW7SUB36LKmSD1ou8BHLPwiW8GgG2PbncRvN2tCZ6vKQ6aWwx9FrTjTtZTsCFTx6D9yzqXJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXJpYCmZ44haq8jiYHS6qzBMwHZ9XG4Z1w147NqjjaEUEH9f6femMC8nk9sG3pvSx4ZGPheJ8LLnLa5mhJDe7WU",
  "key1": "jVqwuRecC5s2xMSNL5hyRT8JE3eAsVmbJ7ukEbZ6u4guWY2aogLF8vAnXxXi6yK9VtaRyvoSWR744r59SzD5CGN",
  "key2": "3nfhr2XtzS6uQ2HJP51CRGUyed2ZZm4krnGSrr8bxp25KTdANhotZ5dm5gsC9VaoNMoxjDVF7Y4ipvBLRanDsM1t",
  "key3": "4JSFWuMuH6JSvnU5N1GuJjFiiXry3sPsoPGNbWQVGp6Asx5RDnP1969eQnEPw5ZKgqXqTPrjCicRZDMYz72XWu7y",
  "key4": "5zD1gQsDJBaJsZhPCZXkhYYnBxH3rwVYKko7gq4SEWRYg6kssjUGeh6sFsRSwzj841Pz9codZr5qdVcDoS2VCX5K",
  "key5": "3bLjxKVwStchvnMDR7Da48qHBXya9jryPpvtbXQ1tsAu4tazpWDc2wctDerFhUVCpkuAEEozgUPAZBhkhZ1kSP9F",
  "key6": "48enEuSk32Gj3CZgkMkdYsrwMEE7nKYKVETFkiAeJ3f4VCR6a3NBjB6asiHrPGn3S8wTZKZJ9P19m9nnLbYhCwNp",
  "key7": "5QX7Eahv4Edu7ZNaTbq6AmvA6gx1Rk3whG9swYV7eeQSDUinKnSFGqPrEFRvgayTc8XHCMvDQBuPqCNyv4dHYfRa",
  "key8": "3e4wr5WauMASyLNcv4zNf2GFfVpcRqcMAaGyGr32Y3Q9eMZm3U2xUGq8vCy3MHk2Rc5pbQ6HVYidRSVo1m3kcYWN",
  "key9": "3D5HtTqUspz42tLYXVH4ij6eNBZLi3qTGLUqPy9yait1WGbZiu6pUcumizhzUSppMR6ysphgoXQMCKxPuSDiLnCe",
  "key10": "35dC88D9xQPfFuhNfD3wNJq9xJM818Mh1vayRRQvHgJpSPvNYksaFJ3MrN2EJRgBCmXbqPtPwYfBtxx7YfM7aphT",
  "key11": "ozu8RHUHARjary3zeKJqYmQxm1rv3EnRyhvbAoqKeDR9PyrthzLSVFF15LxSKQi176kJpbQSgS46onLX39TX1Dj",
  "key12": "4Gye6stRks7qiFMghLmPJaCq5t9L9Y226FMiKUzdwSRwzh3Ngde69Uq3Lq5s2Yzdy2tZevxr3DHBbbTiT2Qx6tFP",
  "key13": "2SfGbjpdsLHsGjbXhcdN5Yxx5fKZA2WhENzAMLQj2U1gTPS6P4PVdReyhppXcYDnL9FTjZ6v26rszRreFvc1reYv",
  "key14": "2CxGmDSTN2KZDoJix5R4wzgK4aLMoGfY5yN8WZyHgqzqfqH31AqkCHp4xrg9DWxDFzhwQ6FV4GmXLkRoRYnZDZSH",
  "key15": "HwKhzDzcrMdWYQX7XdvtjJ9SBcwphGEHZcSZZSSTUu7eBURd9NbbozYzwTjhA9Ww1sjXVYwsXMVxcaPt9yTNV7v",
  "key16": "3T82AfiCDyZzcNWoaNSFXADCRTnyoSPNWa3PjiC6e6p4EzRjL52UqNEcQhkqtrSu9anqfG6VLTFL3Bq3KQ8hvYiJ",
  "key17": "5o4wr6cQAawHjwVJRVGZSSfmaoo87GgfgVfHNdHa7QQujzhFe4eJHnAa1B77r5kVTz9XhLJX9dE281zYRgCbgDJq",
  "key18": "UbKCNSSJPBgKp68iwv7BpgQTaCdHEvQsV5mkvoycoJBbViWFWcFTx6LCnDT8WNSz1GNEYUbYeAYzF5RZqMXsaaQ",
  "key19": "35rw2CpcddRRyrQHfCbpkmwYgS18GMKa58NigrPbQ6NtXPuLTcNoCjR1912rSTTqgiMuWeY15M3m6Ge4xYbgSk7u",
  "key20": "3RdKv1QbBotKwBehob3SqfZZ4PsC1z23uZrxe7eyZPQriZWUxsE4q2k4fijmruxXQuszEC5ra3ERY2L8Ho7A9Ttg",
  "key21": "5kma4ZFovPsJbenAH4evJWwCSU2jp4hNj2i7KpJyG6uBEp9EbJ3kkGQvYy7CrQsprj5q2x1S3fMwkBoPZaRZywEq",
  "key22": "4hi2aykcDjeQwFAStiM96uoscAWkp2LHPbSbxw3nQBUbYHTCNFK4LpivH6jbxfsKRFKKHYr9nMFu4QrLn55GckwF",
  "key23": "2LtCaJkdDKMQdp2GJKEix3bcBrvnCEHfwh3qmS1z6q3XgHt7FgEHKimTxPhgxsh2fhcTyjgJZ1696oMrCtxWwReR",
  "key24": "EW9Q1U9ZZVTBNPmx5JH3jWuwkwxsgCi8DXEXqijXgpgdXBeLxbEDJfu4uVZuT3QkH9C4xFaoJedv548Uk1RTtyS",
  "key25": "54e3haUJ7d8cy5AmPbNKwbcubgBtGNNknMfsokdm1jomLmanpJeFWogkB1NQdNFZj5RdxteiENPrdAMTTCZLuQY5",
  "key26": "4qXyPsBXTVtqUrK7Pg8Rm2jFPb6mJ1eV9JzDkk8taV3LwsFhQGxjFfDiMsnGGacgieLV8LrCLBX6MBEBcCTWvTCn",
  "key27": "5qy4ufBALCeDcEA1dFFob4FCVvCaKQJyPxLaLrmtGjURCdw6xp5DQVyyMNHfp3SUkVXRB4NM41SoFd4QQTqk6mGo",
  "key28": "4AU64KdynkHewzb1FP26zXFTEd6oHKitAJzj7NzjNnTZaVu6hYEZBiUeHMRDFg358YfZB6ni74nufm8Ax39hUKCJ",
  "key29": "57jGdvXKVyR4USzfUHhSPyKRTCV1YbtYnQS3tcf4ahYQtaHpY4axiZ9gEQkLRJFpBYGskTycxrcLurAaxtCmG4Ga",
  "key30": "2ADBijY4BJZrDMAFFdQYYPBifbtWHiq1qKL7d3RsG7b73GF7G9XxvNJaokQBsQfv85TyWfjReLGwGMFdCyocch66",
  "key31": "55BfqSydhc82szeyFkd528WDvQhxuxx5GTVXxHXhcG19r1gZhDjoaYA8AVE5nWEB4WRwsvfTRUAyxPj4rReWeNbL"
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
