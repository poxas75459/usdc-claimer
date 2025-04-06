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
    "ZP3DyxomGQ4t7uM9cf6C5t4qqJE8iWhXTTDkaFZfkfHBhnR2G3kw5GmDDovoC5FYwdBDdnrPq3BzRKghnDsmLLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZRm4BcFVGt6qSMYvP8xKmhToiMzKMumXHzRxUvkcijtGkyhteoUWb8tNnSabE6bk16KDBDma7diUZE2MzjzmKwb",
  "key1": "3UFYBxiQsVqQwHih318ZYewuYL1v2t6qfkFi4T4od7UxgxgULf4G1T6RWCnZkDVUugQ3zUDZkiwjtbR6LtTZJ57L",
  "key2": "xBe3X9jY2AnYSgXed91VcKPGZVxU2GBMGtJTMZeZjgGadPENiKEcUkVebo6aqnUmYJNmAx6KvzSYdErBLKDMz5P",
  "key3": "2X6VSUi2FsNSDVoDYauQhAcx5RG4rQKCg1F4N12nqPN16GW96rzW7p3znhVjxoaSsmmjszhmnWkA5xhy2Sfw6tay",
  "key4": "4rRiJYFzJSQbQbrQdQtnif3C7vf9KfsaKTEA7Bi9zZrDJEMtAUmPU9bRfgEUGwkw3Yj4TdJ5mkdMUdF8Yttr291K",
  "key5": "3BCsQGtCwBtNQuhvzrk3BYXGgM5D5kFbf5RihU4p29dNj1nZBy3etMPwrY8tJ4C6cfN5vApairiCtiDhqeg5XMNi",
  "key6": "2d8xyDro3FTWKuszfHPNtxLJFdCDHhGAyQ1zArV4XobY9pL8JWMCxcPFQG9DXR3EmbAjg8QAMjkfppgToXbBeCPs",
  "key7": "3fqtqqDWvbFvN9QUaGN6Y9TiCTQY2pdziD1D1ggE5Ni2GsWthVg7AbiABK6LBK1gwD6NB6L56EEZX5BRGz2TpqBg",
  "key8": "4V6qvgAV5mcTrMoXvCL22pLgb3w4YceSge2cHUNVauAHDEaqy8CTowKXZEurqZYvxVuQxZXAdDEpvUzQDNA8c7sF",
  "key9": "4i9Vy8MZmnC16kFS9MP7bjVViNCBp5cgRnZ7f2MKy6Jc7eS7kny6pyCFZRoaRh183Npz1QJ2Tjtbx7mm2xUmCzb",
  "key10": "4q6HT8sxwjtkPhL1Rzg13mGggTZaNvHR7bLyuCbWiBECCLsSeQkooCtdReumNMzUpkGz6zRanBM9WGJA32jBvbxb",
  "key11": "32EW29GEjjrFsbkMQbvXmP1Vyyozg6mE1SpLjJCrWobJFx25CG5rXMkqHNjSe8QwWAngMUTUbUugJX1R8fKWJa9y",
  "key12": "jrNd2zb4ggFTwK1cbzE1UWjWnUbH2Pu4p1VK4GTKXHK3q4GkuZoYzbinEiKsqe4FrWVvchSh4n4HNDeQ8V1EcpB",
  "key13": "fZrxQzjoeDsgCFW1kxpaN8bprpHwhseg5V2Pxbm1wkfdcsqPR3G3muNtQd7GzDMVhD5dfPDM16iSG5TZGens19B",
  "key14": "e6zfNMq8wbpgPyGJ3kVkGg8X1XoZion2tPrED364Wh8fxuWKcSCHK2GoGz4r2arapBBM14CGo5DBKTS5JmuU1gL",
  "key15": "39TFEBcJvYQJQqdqA7bR4yJAcSJnUj2rGm2RdYfTXb7zF38NxaN2GGcbLTUWdxp3zsjyqBruKgiincUZAzrhj15k",
  "key16": "44yfxxzMvpNL2UvSvUMboGEvK3RsL5XULT4qekeXuMQqZ29p1fdjd36w2uHHuX1fhYy9D9rtSXSS89SDLBFMVifp",
  "key17": "3X6aUUrsUKiTS7wczjGuuwV8hvSA2DThueTXnxsC8yraV8Df7KErhK6rgYbcPvs2SVwFa6HaAwbnJHSfn5L7AEJJ",
  "key18": "4JbFLMzcYUbjjvui2BHFonHEgWRXPQkDCk9bZnybB412xvGPF5s2e2iHwtFrt6sbs7JVZ9tcZs7QfJFC3wxJj2yD",
  "key19": "495FVQ77PW3R5vJiRpuzoft1WyUizvPq5ifbJcwPDFStwXTt124MqkmSLJE1uBg1P3azK1guPLreszNFTunxAJbE",
  "key20": "2c6K4vNFXn37tCmAkG7o3SACNqVDnYLxdNqhaTm7o8tCfPjG8qGp9FPtrBCqA3GebGsFsvDtSKD5XNFZmNvohei4",
  "key21": "3CFYHAfkhVmXE4duHio23Ny2o1vQfp4TieHwJ4jgqi7rL3sUtRX1UWfojJEfTa49anCnKx51boPschXsCZtiRcHa",
  "key22": "WHzpPiUrcaK8bWg8mLzoUt3BFFQ8rcnjEEPJFaErFi1vvfgz399GDvEeeLARkoHiwCrV3Hv5Q1dvRUBc5b8Q6eh",
  "key23": "5RQuVRbFjghVcdfjmmqg3v2jajNWWauRfsEsfa3gBibLVLg71jaTKJ7oU1UauRuAmDwqSMDvdvzU1cbWNGhaFk8e",
  "key24": "4aH1mgB67nmewm7Xw5KtKjnz1GmeECtL8LzdxrNQGW9x1tqAaZSbnor3hr1RnSqbyX6m5NaYBXfRi6paim93VVMR",
  "key25": "2aRDwCz8tnYgKMBEazhLVgWjyEuQq2pstJNrAgRgyXCqs5BvfYNCUuNUpfvHe6TUyAUrpWnGfScwmeoPq596KTPM",
  "key26": "2g6wxQWgAmZzd8uyzPVHisAu1ipFzzXDaQxFSKK5dSHh9ZGr3EPubHNqGzRyKry5DNNadSZb52wigcWW7tFonkjz",
  "key27": "pKQEq8HcdyffzhUHpZt1AWNpbuFUk548WrULYj7x2P9WaqaUonWxvUf7orfutwHMKP77rtf8i2xXZifw3eyV6yy",
  "key28": "3unsjp8rLR2352PHEah166LE7PXJxoJc7KPGJ2FK73kMZhMuQB9uDr2Ugmr5a5X54QiSErZ1jQj7kDTTnvNb3kRc"
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
