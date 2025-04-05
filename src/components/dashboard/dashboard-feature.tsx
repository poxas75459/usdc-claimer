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
    "2Q6gzZkbig3GxdJb8hrEn7n3YroP8mQ3Be5ES9QodD4B93UDd3HJ6UcEZe1PJXwve92qmoEutJwNGg7mHQSK9m5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mz3xigkoqGxNQ8k8PJMLQV9vpYUxAQMvYbyH8JuCi7HYfdnUUk4Po7V7AT3Zj3H72sS7Md4ERoFycrFzZww3Ywo",
  "key1": "FDCHFNVdzM2hM9imK3LwEryZ9MwRPoiWpNjui4Fn4YuTgi8f9yN4YuUQW1EDqVCJF8Gs1PTrNWNNwcpKCbr8wzG",
  "key2": "4X2aUrZhP8JFw8MygbhgngXZTkX6FdiwU52dewDJjPpDjxZyUZuZbSYTmiXGWWdZ112yrEBFuN5ZXdXxSGYSQBXr",
  "key3": "4DGnHydV7a37sHg2bpynXaTutpj71fvEdfYpc2wrYp759p83g5sjLUHLQqj7eghKu4VHiD1YpTMWDr4t6VMaMJDk",
  "key4": "5RvaoNoGLUJtuER7wwGaN32rS7YpgL1nW7XPZMxVDbCAch8iFGU9ijV5T2d2uzX6fNQmsb468UPdAeGEtbuw7BcV",
  "key5": "31mYNntDfbZguF772DgFTPVV6oCwcHkidnQAkGEnNfknx2QvXiMDeRsSRhf72kb1DQfoeBSxT384jZkD4iGfBVNu",
  "key6": "3M1B6mV3nHphD4bKMpsYk8PwXh9ez4FXdxRVzNaHeShLxgZr9p6poZcaMJMuLst3k4LLxEnLtnv4fwwwQHg7UqBp",
  "key7": "2utMiuGFP8wFrPNGBdp6wTxB7vRmAhuNUuy59YLi3nyXu9wYB7AEvt22ErH4w1jGWQH1UvVMx3kh6uiTmeumQtzE",
  "key8": "M9zAUcFUem1P6YfRWazRXDFrdy478CdtpUqRJrfQufAvmwzsKdyCGsxPGbce2LEg3ybXDuCJjNYaNwLth5Tg8Hr",
  "key9": "3Dyx47VteqQ3mBsqa6cExyn7ZhRvsYCGhZCn42GKN8mhdXpEBT9DNfVuj3ABK11yvwBj35NhJbAkzNLZxpnVFZhc",
  "key10": "3bCaD5vJ3uHiCqJTUfpHBvUYEQZDqwqcETvKg5kaHvgDr4k4PWUQEmNzxA1kfd5Nmv5egTKFEZGkWJUhbqBQ41jo",
  "key11": "2w8jAzvWj2SkrsLVBHoGL3wPMoc6RDxPF84SS4UKxoksifNP3Sxfrxmg8EGAhTNk4inRujSPzCumHeLRRBEFT728",
  "key12": "3inazHUhXi9W8YEWstMg8JkcZkYvanJnAo2fbqS1PCBLcZ9UxxGcp5XKcD6LbiwJiZJy7qZ4u9Q2M5y2GMbTiwfk",
  "key13": "RLJR9uH8sbhdtdoD1SZtKCWPZiLpKbGQwuFaYv2zDEhh2FCPPH4SkDQcq3fZs4tk2VtEYS9vs7TiyGrYEWFowSW",
  "key14": "Mi48qh72rfZ3NEKPQ3yaEsTnbB8Hd3vkuL76NWCyUyzG11TXZQ7TjWbpoP4ZSKFLNdRaUQfVRX7bUP3qx6RrJ4u",
  "key15": "3dsdW8tqq3Q5CLCT3jufHvfF23pAD9ULbUjbw3Uqh4BXQuZKn9kCUrc8WxzrUHLZGYLfDEuRV8AfXVYpkA7Cb3RW",
  "key16": "3u753CoDtDDdQNAmkrrZexgbpjbGXN64BD5NwAnfhUvV3k7hoJpjw7fqHc9cU2pggpqRbtjaicHAmxPDPpUxaUJz",
  "key17": "44YS9jbKjZUhAKS97uH6KJJs32VaiJt1JfVyqmbK3ZzHBqU4dX2Qg2G1eZyggBJKKhWTaF1cV5YPXtCVcjaoqu4B",
  "key18": "3Jh5mHrYWd3nhmTDhNJV6KVKnQY5KQKicVRrQQ3Vpcf58kVqeVpsShBRwLzRH11Ffgfd5AQiDwe7XP4oaAhdntmX",
  "key19": "5Uhk1gSU78XBW8yufJEgAr4c1SexEDnncGL5ghg9u9ybrCHL3UaXwJ5wQFG2Gb8DFyXbQeEmey6E4ucutCS7PF1k",
  "key20": "5E99f22sGrtZnr3f7a1n72etK33JLvjb4XbJcmkeePLwDbokjPj7oSxMSViJeWwZwvg2BEJ2QnQYyv8RWkcqvF6X",
  "key21": "5JaMWGdJXEr73K3Ac8EuXwWbjpWbr5A9EzXMLdNU34pL76RZsypkQdtReztCFmBpuVdqLFggBtyx1vAP21Pm5SHe",
  "key22": "4J3nM1crhAmy2zDcU6Hzmpz7S6Nrod1PNPBaLVUNG8vKZwMBDzmgkY7DRVkiEmNggcRauawqidy19onoR3W96kry",
  "key23": "5pkjJpXN8x1KCEn8bW2M1BXqwJbwPUuthQbuzUq3WULt15ZrLryWrv1jtKmL19uAfp251yRgngcgi3HtyEaVuoFg",
  "key24": "5uVZVmj25YBaFYx4ULuWHyh2yBB7AwtGjxyw3NYDjuV2aRSVYJU2zcSxDbvn5djuo2WKkGcGSFYnGKi1gdLsrZm9",
  "key25": "3bAmXWAyt2qWif5Yxp5VRWQS1w51CrxZsYPETLFEnpt8tbTfvC9FQqkt1FmsnBLkPh8nx7vJB61wuxFRrjEGgWs5",
  "key26": "65FXwN1AXJ5p6MtdYQDFzxByb6b1nyJe5kXGcYskAo3NsahjbK76wbqkoX9z5sC9roEk3c4zygJDrYytJsJ8HDTe"
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
