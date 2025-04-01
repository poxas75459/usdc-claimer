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
    "k3Sw1wqbLy9Zkt17rUNPi5o4yrbrRw7Lu31KjNdMiev3M5HzmztLDd6UaXY2DR3mzBq9k1NmeueFAL6vHApRzEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xxc9spZ9xqFndmCKqBbMGCJuPSDRdY42CjzuqDsbe9DX6C4GhNFteNqeg4H2DcXQMHSBrva8tdDeFCc37cgcC4y",
  "key1": "587GVWqtcLfsD3wQsbBvepz5hMUVDBhBWkkbGvJYeXCtfoh47AXHsdSc3WUUn6umjrAuPRQsTa6J9s8xaarMN4eq",
  "key2": "g9UbJ4meo6MRX46q8zQhF1AsMhk4QiHLUXQmYKPXXhw6gUcnS3kLnmAnCP2zJLbRrf8BvEWJD2djRMi4TMmfQ97",
  "key3": "1xJhVy14wNK97dweySdiv8RvP7HTaWSykzHuoWh9EYvrBchyBH7VBfTotN7DuDq7GxiWVarFGp9MaECxFeXeh9U",
  "key4": "5BZw2LFiCvDFjg1q1MezTmBRYEiQb3LRgSk2KwiE8mK5nFn1uLnfDfbNmo4QZ99kSGJPtj6FZGHKYJjWrzLnQSEN",
  "key5": "47DnVeCEyHttZPZnjhvEuw3LWroRBMoH3sFGxjZZMbkmD7NCtqtkwtbKq38TqJFGVaAv1Ff4y1TEDK11abeNu7iR",
  "key6": "3ZUpAeBhWT42iU9XLYP1z7u7uxKBxRenfnbLwkVygDjAQCCHDZpKCw2F3yJY7RX1qhKy7onXN874nuDzrriiidkG",
  "key7": "5SWoceLt2n6ZuZ3U5PSEqvheFxozwPyfBLTUCKFxrudYWsTDZaUrGMv3hozXezj3hTbtvB81aALoAz7DQG24no4",
  "key8": "2QuqDN7MBTFYHTh5ZmXBPUqtT7isY99DUwvZr6HpJbAXJA86M2tXGjYrHje9hCch1UPybrm58LhxLxXnbWu2LeDU",
  "key9": "4Vxg7KuXcKWN2AzSvrfvXuZwW7NNeDfq3q1NHDwkygYDnuegWdRzrpzzgYh2C9azyzNz4E3jPgr6SXnNCxy95hvY",
  "key10": "cgvjK5Bk8oBHe61CUG84DYsdrgJqaH6gxr3vGyY1n4YQiFmwWuPs24h8uwFyCR3k9nE2snt5MYaxJY4EzSoMSN3",
  "key11": "43acKQzqCfqPgY8vpnNbeus8qUzmw52Esd54WkoDpixdup7UYRjEe6HdaWHhWG2T4fZ1nvQQrWCHV1EiGpCEGQv3",
  "key12": "EnjdsjYaZmmtpRzdZkp1ETZX4oH7QukBJYaJfLGxpZ4LanZ1T5QR3as2ZSWkUeDnUUP3FA4BwDyvzfvFmfL8aWj",
  "key13": "4MCutjrwcRVhC6rJfYUE9Hiq6rVmdGdq8QwVAxLdJrds1kb7t48wrr2DULPymUJb3e3qNUUDanwjUcZyPcPN7XKW",
  "key14": "51ofRs7MymeUpEkt3WVZGpzXz5Tt1hbPLThdb6Meo6JnXJEcT9o9QiSnPgkUVEZ78CRs6hfYtf1rjbGs13fM9XBz",
  "key15": "5yg4UykQJatocqmLr6V2dxcHtRGcsxdUvwhRcsQTB7VtFKFLVqmFUfPnQ5tFhgymNopKxtsNHbcd8GofzkhAA94K",
  "key16": "5AkvNiLWwb3dKxYjW78qLaRX2LmpQ9hJyK2yZCGRteStPt3bEPbXU22n6g5ZcDhdfAdZH1AgunmdYPzyF3g4URHL",
  "key17": "5GupKbSC9EwQ4Q49WiomnKU1fCHx4QCbSG7dPZaRs6TtonvBADMoXbPcnL2Ea4Nd9k9bTsFdreqc1uPdaLoMTwBz",
  "key18": "2zw3S7AvphSvMdoiqFTX4japE9PauTnEy5tKgDn2qaX5cP7AAa4ucMu3SsryKaB6RkuhQRkfqaMbp9a6BseBdGKo",
  "key19": "2zyFUTUcDS3Bu6Ww1sU2ESQqvKyqZP7HvoFQrsNTshWkgmYqdPEkbUujeKpoBF9UiZ7MadN3bnHbVGpdWoheET6S",
  "key20": "43BBoSJRCtELgZQPtsvitJCxpApktHVxmmrBTMRMBKpwoRdXxuk9x3CgQs4JzEV64XvPLHWKWtXqtjqj6oyxQm7a",
  "key21": "5diNzBjyDvZ4SXRSuswGY53B33xPFh8PQHMjNGqcAzexMCfteH4M8YVfALbqXXYJbQ8er2KiaXBPLfyB1LdzN3Q6",
  "key22": "35zFDKm3kw2kexwT8XSnK6BVQZcUkthWekLSybriTeX3P5Xtmb89pH4Sw1fnknYxL4fmuuuC5JhwFMGWSScywvTr",
  "key23": "4jvcAevdFhtm8Ef4w8rjP8m5v6CTcEiconGuuudEszN6ZFjfHRVWVTuQVPLMfoyFGK4t18yDW8t1o15FSF72GUu5",
  "key24": "65UEyegGW9H4SN4icdRWggLR57EqpPpjgzwsw59n3qix7r6PTWKpW9jpDU1T2vbSj9VCVon8TnA9UCitPQuqmC5G",
  "key25": "qurHfu6ZhzKqgzbdUBAUpnFGCnWcdr9NbjQRFPDMqwVL3M5qfUVMAiHGS1KojYtumF8gpVjWJ9BiJDM9RXtkEui",
  "key26": "2bnNW5c2NxTZDz5fHQeNDgMouiXdT4JnZhuvpnd2mibh5X4Et2ip1vMZ7G3nFkxWyU3HarNQ1PhrTUd3qomxkW5n",
  "key27": "3Lxm3y24x98QZoBzCqmYxjPekKNkFEDjFqoe9jEe8K5E9mcZAqJQ6wuPGBMVjNfqnQRezV7QrDz1MJ4UaEZe25D5",
  "key28": "hS1zHZAScFbu7de4vJp31f7tjKd1Mm5zx8PpLWsFaFfpc6uk34pRyyjfbr8KnELC5GD9C7drYQZaD5UTcBwZSwd",
  "key29": "4PVZzUQNVPb6uSP62CUKjaM38upz5GbUPTNPVMv8PXSM28zBx6Rj6RytZHB3aC9xtcsASzWJuyEbSck55YCQxBi8",
  "key30": "4F166d3FQQw3u7oPUX89EarX1Ho9n7qZKYq75UMtMqLJw71EoW3xz7RDUieiCFZV3hvcD4SZ7fEzDMBoiGApidRG"
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
