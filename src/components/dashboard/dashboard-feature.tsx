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
    "2vZeHsJaVCkJYkgaQwBhgUEaHDpZH5VY5ajigdy2zKAfmxTjvhocfkJmmDHCUa7mnPcEtgVUqdrdun19yT1eCLLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xN2TzsWvgsTdCY7Juo8MP3MvPZjDJCU5wJZmzexYhfpWuuVTBD2G2QDGL4nz97gyJypsLEw1PFXwF38fZajpL7J",
  "key1": "3g8uY7XMxqBDEfAq1kYCHpjiRJ7qcgmsQPSyjxC83wGM4gyK1T4QMDkEuDMqTeB7eDnMDiEvPGJzVg2gPQDLrFxo",
  "key2": "4JYFEPUXtvbZCqQA7kdvMBCfHgRzhifAUDMaDrRWeitEaQVUTmaiMVW2FufqBjZaR4d4bnSZ2bQgDWZwnZ9nFe29",
  "key3": "3B8FaGpM3i95YgBzu4dbHWMvtuLAncmckHt3j6UEdAgsg3YPsfAcozSnzxRdzz95jZJJKb4VtrKCa9Z2n8tMdNTG",
  "key4": "5g2VrxKndKTkvpkWBNWmtFfSWcyaafhpcSxzXNtcD8noAvtn7P2VKKdcrJUgNppkfC2CQAZyjW9zRTdH1H6XHoNe",
  "key5": "tDxbYh4Zioy5mrZE5rwaTn3njtYx6XXNjT2MzkosvRriCtQnjBsheGGioctjDkZ7sYdfXeT4QFBknk7TSjAw3Kb",
  "key6": "37Jj46iwK2KaNoUQBjwJx5n9Y5GLRBBq33xPfr92zDomM1YcCHEGypVxhuV9xHN5CH8ooMuKoHPXMP2254PJjfjF",
  "key7": "McUV7GVWGgMynamznm1xb3LQXeNwpMatdXLByK4PvVHeh89LvAM9buTFH79F6fYL1T59ZQqEr7mZZjHT8jiGGw7",
  "key8": "3HB2yzbjba4SLVDGNWzcnsDgNiFdZtsZL3YJg8hj8NgfYLnNpktUcEH7YVNVhnov4NGr6FbYD8ppgVRZ8KJPKLei",
  "key9": "3QpXBdzc75wnNwDbNdXfT8z2E9u1YcsLy3Mc7NnftQWHYrnYEUpu19tHY5k5hLjPjvdtMkdizWMmXVJDxwygzbVP",
  "key10": "5B89QJUPnvp4mim38abhSDZpWyHzb7cxTq2cgd1N15s9RfU8jrAd85yhFLj7sDAgxz8JRnTLjgQnxCSsbXD6h54n",
  "key11": "3EZMRniLkWZQ9b6p39hYctR1Wi2TPypAXg1SEZDJzrAhoGezwkECdReR7w7AWytnp7g3tb76x4UvkSmohzc5gn4m",
  "key12": "3WsRVgM3S7j6BQ1kPi1Y3MjJjtm7V6zb2ksLsEJRkHS4vuhua6PhkZkFCSsFBcAD5ckZniuSpr9PLXcUjvJymvT4",
  "key13": "NDFBp4WFSzncfdpLzpyrN2SuNFiyTkLP577B3k9Gh44WbEH6SJmctBMgTSGoTGUgSK2Zy4vW81aAtWPLH7dHnj4",
  "key14": "2zipzMzv6n3WMifwn3unbV2B6XMsL1hTAEAtuunXkiseULToD8a5bFWevpkdLQsHRhFugsxWdqbLJoCN4HmwA2RB",
  "key15": "3sVvk7wDJGxLr8m3UHUm5N3tJhGxKMaZhmjkDGWrJFJ1a3BUPsLRbWLDDwwPxLutdq2CWzYGvKu2R1BfBrgmjVxF",
  "key16": "5Qdpgn1bDsenSbuL7Jse7YKdGr6jhU4Edwvygr4n6zX45147vTfk5kQh1gC44EwdCJUDJit1a8FVni89po5n7Dqe",
  "key17": "2DZMvg2V3pbovtW8Bwwcvy1Sygwhy6nJXZtXveCJfcpcgzUoN9wz6Jib24QiZfVZmxM9XQ5C73hLRrqCj9e9tXLS",
  "key18": "4AK9kirvmRq3g4y45dHbFobxYUJCHz3ALBbgKJhNwxeQfNjACh2sybwDwtDNLEyQrRc63VSUNh2FAC6HmzXDtL4X",
  "key19": "5j5nhMCeh7MHwZ45vvt7FkAjmDvwfPN2B1q5tbPpaav7xBPWwWvsLnYVDEBt9PUmX5SsMi7mmBi2ovfuALt4fsky",
  "key20": "2HFaV16cZRmB2wuQx1co9f9oNtD1LGuqZHY73jiGaD7YBFctPNqCdh9N6Uv14d3Loby9gb4ZmTjCTv4EZZcResnX",
  "key21": "2TiHFmuKh78HG657sqJjjHWtZqiC5rGvZxPkohNA1znYDu3qdrxw7CMQHUvVscenKpsRoaj45nuaEtw24ZbsDUW1",
  "key22": "45jtGzj6SotkBEVi3pNF5yZhoD3KXiK3vwCZZKwj7ATbSGqjNYbqCzT7buArAU9htavgxEWd3K1D9BGKrwCXxigL",
  "key23": "3wFTo9yJ6eiLo6vjqQYMgXTULQZNfBA8qhz8wTmfdvhf3a5FM69VPEu43jraYDD91Pe2AGtNP6p1amkmL78Qyy6c",
  "key24": "fFbq1Na49QojgcuFHVKV49EoRc5CpcPyLpksNPYDXpCb7h5Hez2XKsETnbEXPqUi2EPb4B6dn4Zy2uff8L4bNNd",
  "key25": "5Qr9R5JL5E4N7j1oeu8wv1FQgdx5Jhb5iiMninM2bxZM2tkDH6xbeA2W3B1QvP9SQA2gPiF8c6oVtAxFu2QwBzr4",
  "key26": "2nxPESEPiT9TqqvH7PYBPwzHnDhEvdHQVxUu5gX7VgD8CH61avgN1kR2N51Ath1ENR5LAZKuvMw8KCEMZGyzpdK",
  "key27": "36VGbsroWiuo5jzwKmKf3aZxVZZoW1XBN57YBn2Ho5KDdDiLLPJducz2XCnc6rdBYoCogrnzH629J8GDXtDUFxDL"
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
