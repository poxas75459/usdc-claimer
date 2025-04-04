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
    "2pMYM7hyQMqdLqCSA3sjUoL5VodaGResjGsuYY29vdV1BvKK8pDLiougCkBSff6kqw7UzGGQwpDjmnAAdAgCx5An"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KaJhjgdkkggmtLzAz3Nst36K2kjrLGtik7eVUSgsT89qYGd2TdVP3nPSDSpD2Cuk9yZnihcVjqWwuUL2cyZmARf",
  "key1": "3Qdte4XShXUr4osgxjnLb2rA31ST7bbDeMGMJoobV6cwUA5mdc1247WTbX5uLjWu3o2s7M8TTmB2z8opc6yAEKvM",
  "key2": "3Cu2oFvWknS4AXmLL2VE8P86KdFepoRmquVPt8FWktPp2hYRvhwqCqL74efA1igoo92fC2F5o21nqQgf5vd49dso",
  "key3": "2ViQV8owWqZuKZDtBTfJWao2u4Rj82Bn5aiTVtWep8GupETYEg6TmtdGAjkP2HbLZ2Net3fAtTHje8ui1zEtHDiC",
  "key4": "3VYy4PC8XCe8yEorbu9rqRK7uAPbbdAZfkxqGoZXi8SJFP5Fkj3tvZiKWnyV27oSi8L9HusWGndHXkVRNhEWjDX8",
  "key5": "45kMKQYp1XYKYZ6cPgii4NoEn5ADUX8Fc53RaAduwP1g4mVfM6JqR6MRdAcP6fnAhkRMtrNK52hu4Gd3DH6KchSW",
  "key6": "XpVpm8sbN8HEaMtmscVU76e7pK8oWwkmXX3YBcCLcSAiFDrstprTGAGY91g648DANroadPJMDyQC4hfmRMXL1yA",
  "key7": "4rQcyJ3WUszVNDsTYfYyiQzZ6fmAwEuirDXvbEs9abtT6JkQrijk4bTd9S5sGVbCMSRJC1ef5TMRVmiShYGvs2db",
  "key8": "37T613ft1gnw22Ny6F5JudECKtYCMVMkCyBVbaYLHBtD2nC5jZXhT1rqnmzrZAzfjUN61FVrvFpEPRd5WJcSjnQr",
  "key9": "3ov4T2AH6uxPo4kgsPUfdPSGhHa21yguVLYcoVqxYXQHuEXdmSp5n46tVrhGVBJv1JAsXwc4wv6X6erN5YAGdV2N",
  "key10": "4c7d2KKtUK5Nyzpiwz5B4LqkoufMSrNhNAuJ3FPJeVitBSmB7odfw2KNh7k5LXthWfYtpXxhaR3HH2KWntAS1cUE",
  "key11": "48mEJ9QsJdKGToCQW8C8PP7qPnUL1McmfqguFXC9yGFWNvzhGcT15X7pU9yVgyr3LcCN45w1jULZGUvHQH5ohR3D",
  "key12": "2fdLj6M7H6tifAipx6LH4QPFSpNkLYK4pLJvomH8zbH9mbiATNScwJXc9d23GmAmwwRwF7rN1rwqhJvPoQDz1EaN",
  "key13": "2h8Hb4V4NNRpWWB1cgnEcdAUtR3CsD1wk3XWo4Xm4wByiMkYfLyXotL3V5UBCrPg6JMo5AqX3VvGoTe7YncxjPJY",
  "key14": "5WbQtQy3uLMzBvrPCpsRsVZdF3FZz5qujwt1hb3K9LKDXaU6pCfETGUfo2zN8EEYfAbtgt29btRzkZNC9b2MUv8H",
  "key15": "5gawjca23vMyQdv3Wjxt2BJZJRuA7NyMShE9SzPyV4F15rQWv769TVLTFkGGmyJUMTcuNdkUSrdoiwFqmpj12uKi",
  "key16": "bVaMw2NKz3RhrxoizNGnBn9ZWcJPYD4s4rgtRVcFxAkp8Mfm2XXKaky9T7hKbvRRnQg5Tm5yfdeYXSdnQSKyEum",
  "key17": "5M4ZgjRX2FiPX34mbVSiLhuzWffGF9WJA8M1NuoxnZj8iKiDcTqiRMPstv3Vhqajf8WPa3BkGLWv2jKQiGR5anZw",
  "key18": "2BQ8qGhF6xcwej7VGfPkdP5n7dwrPWC62vRWc718nkv2F7wThQSqdtwFogyYWX1rASsmmcfdJpuWDCx6CcTmYNhU",
  "key19": "2nbp2MjQa2NpqxXKYg3Fcqk2PuuzPH29Lw7tQoykz8pxmD6KKgiU9KEkZhho2mjzKSp7FVYWF35RXXeur3XztoeF",
  "key20": "3WhgoZ8NpgzF4gGwpMaWn3E5vdNhZLKLoGXN8nf1L7FUx1c9Am5gTyi8gLGBegHGvtYXfhfuVVfruA47AD6LRwS5",
  "key21": "5uaeRH4voc3354hPDn8CLATSca83Ug1zTMeLT6tWv2898aS7XQ6wAZ7ymHgRidiY3HNQFeDGMkDhNCkGNziUiNvU",
  "key22": "5EbTBAppBxB2i8LtGeMk7swCNzaHFfYMUofJnEPaksSCWj7mrW4uN4UZjYzgmsdJqpeGDGc5CzJ5wKsAWiXD8nxc",
  "key23": "pf7JFcW3jSK7PYXYaUzQip6G61pAeBkKqd7KvoCUUnPgaJSR2L84XdRxTmLcET5G5E28KdMv2WKPcNVPGpBv9H7",
  "key24": "4LUXSfT9FhavHxAB1fD9gRcLvXX9YFv92HHvmtmXjSxz6PstY1iCRMq8DXYk7jjmNE1TtiJSaDprzgdRENLrM5xF",
  "key25": "4i3emv8iuHKefbLz952V6mUSMj2eg7xwtmdkzjWDqwPSFB8Yqtc7nU43nkTACKjxcFmKs8Z1rSvS6XCQ7XzMySoU",
  "key26": "5RH7oY5QBZrv9dmtqUf5xZ3UQZqzi3EWD68uBi75oq3onpBQDXhkuppTgwsKMVRf4xNZDDXj5x29CqfuWuBmbqih",
  "key27": "3eKAMYx4cfpwrV4hw6BAhaMRi2s4nh8owxiYNo7xGNymMptiiLyNJ7j8R8b876DgHb55cx84sLjF8KrjE1MSjoSu",
  "key28": "5dfudukep8mMaqBsXjKjAF1R6GbGPuBFFKiGiSX6rVcpJrmGezztfP1gsNhaxmtbe6j6yR4G3Qqw1SMBZ6kR7ntS",
  "key29": "35BRLDq2Xe5WXCzuu5naDPwcJ3FkM2RihjLggtQVvqN4pDHsr8yLCPg9HRT84sQLEgKp5VkcawvQnZNDSYZcu7LX",
  "key30": "2vyi8DESDHynnFZ9KTxNbcudEFkEah6rW4aPXTM3TKwDezcAC5kja9yPXz2H8bVfwCLsgWKFdfF2f8fTQFCuoWWF",
  "key31": "5XZG29q1L3cZeUAAHEqyHwVpD2PEMgwMJbmNjwHV5eHdmrWSn4nCJXaynM61aKaittWUwf4HX4mueXGdtjT6wkAw",
  "key32": "2Ku4soW9MAw96x6vQ9Cmn8e23PfnUsfShHFg1str6kAEHGu3vc1qRoNxqVi3LUnjUpzBCbiYDVMpJKw3gmnGpgui",
  "key33": "31Yn8xY43k999m4bMTt1jDF2cHrQPR3SnzY3jHq6My2Us1eZ6yWUPFjWGurrrwNVYzfTcgBus5ShDaNv37x6CtfW"
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
