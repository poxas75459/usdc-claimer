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
    "2C4QnddtTUofUeAspaqofNVpRxynKg4Rd83n3jVvLvvwFoDesppD7NzyZAvL2u4m2NQL4Cv88mYSHUUXx2CBT423"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ksjvWCxj8wgbFSTWMDi2KthmZvopJAyb1ZptABVnYtYGf4hRgxYTmLrGRKLJRzkDFgY7zXVcwP3XjWVe54K6ks",
  "key1": "qJuU9m1FbhgdVaHun434PkAdHhUfzJotc6TXeShLZixPYtY5JLVgLtubXfEb8FDAMCgMbwcec9xg4gYQcHB3gWh",
  "key2": "65V53eguixDjrriSgapyFKrbfkg2e3y9FV1PVUmJHhNrE7pF9XtEAebGT7z1ua3gydx5mmmvZTezRhdtA84WYQM4",
  "key3": "5dCfEEppb5TebuCE9HBkYsVo3mXmjiiniKSHKu1Xqy6QavQGeqCap6RhCP8JPXoG2CRzmDN6t2dSw9D3a6BxHuKd",
  "key4": "2JE5eJ1sNWzWwdsbHw6ct573x5fLXTzUd5Nno7vmiQXfCJT5ci8ynCMUJ6qEr8afNUShdTkZ2WLzP9iewBZUey9W",
  "key5": "38oXDWXMqQ9nEdThvDB9uX1srcRc9S5jpaRDNJmWVa2jGR2tqE4QgLKovQbMi6HJH93g1BWSQ9UWRToi9Scb9vrd",
  "key6": "4Nf4PN7f9NjqZShyB2LLNmRsdXSvjr5q6h3VjZMbwcXu5W5CqQUpGpr2XBNnMZy8Jhfytr94nCGQvprT87sYaTSD",
  "key7": "5L537FHdz7GANxVkL4rXyggWPHF91PYxvL8DPfAtEA8pZvnzLKvpL9741gnEcRV4Y7c6vJYmEeYi8wjtCtQb2eX5",
  "key8": "Cfxq9kCHaYAtLdBWs4WnkMyZuqqYBFCgsbpZPGSCwLozoihizuW2L8zdTUugmNMLpU7ntVLiCcTw5E9xxQstzG5",
  "key9": "4aiCFo76egYwuRRszH27tFS2Mjtz2YfpHyee3tjkQkmK2U3CqGNbGDjHqbKPEnGUpCDYMZLSzd5T48w7jawVWWa8",
  "key10": "4gtyuCasn14cANxPK4sDC455WzRTH1T1pQbNfdcoF4AYZC6ET7kG9AGEuu9BG6ZcmoT72WzMxA8eSsyYwzgwpQan",
  "key11": "5p34PDeVkgNcXcCavJDFV4enEk3iTrbyZJDx7ZxigQyz7icycvz8ahRv2vqFySUorL9PAqMyqJ84YRPMPqne9Cve",
  "key12": "Sp5vsuExzrPDMHT6Z4Mf42huHGkn6zwZi1r4x2Bx449XSqzWUtwqPdj3rdSiX3i7uPaAkAWzHz4ceVUCMNT8PVS",
  "key13": "4RuLHsoH7mPyfHuhPt6Z3x4MEcFwzRQCQRreBCJ9cH6uNCkWBtrnWf13UmsssX7rchP5DgXsMhUpPuABA7SXyWyE",
  "key14": "ygDdGBibaYekWN7kbSoTe5GThSWVxJpZ81K5w3MQ9BttZgGufkuGxcD495qrr3YXfpG6yC4hXCpPbtd6PJfa4TF",
  "key15": "2zVK37Ya7Jck9f425iuf81Y7CNMJ7XVhmqDDSP2dq3eerhQa5LtLzBqunGHz4V4fkdDS5xy9znPinLUmtJrmArD1",
  "key16": "3q1j8UQWaw45QQNvVq8toytE9H7KFs2JoVuwzhJjHwZ1ZYdTM8nRWLaCFo5zX9ETYGTpDoURGhyrDfSxfZ1MCQHc",
  "key17": "9PbWBTBRjJMZfSaz52dgfNxZYuyxpSbPGRT7wjLmMWUwFrx3hKXZuZBMLQxNsb3QbBRjMM9uX9th8WGNFPtJyKf",
  "key18": "2JKtrE7pC9mcSE4T9m6AG2cZ9n3UGZgd81yRFNx4n1zxm8h8491KT7gD5DcosBpEtj22X4YoTKCtsCYKe9DePpR1",
  "key19": "3rAeunRW1oWesgbF4YRjqCv8mJ3n4k134zNZWyd27RRVjrw7KbnaCU3U6EcYT5tJaq13XBmQjcaRFNf3tgsACan8",
  "key20": "5Nm74uQT78We9UcFVWJr4KNAZZB8XU6dVJmHpXpTgg2cVuHWe2DLEp5DEzK1H5va8Mw2ifV6SPg7nLaDMzEgmazY",
  "key21": "64vC6FNsKe1VGELZmBtqLR8QziCLgqw7NdWT68ncHjXtmaGhR81VPQTFDjs2tAGzyUfWpxTY3w87QrebZ2SBt18s",
  "key22": "3HRhcBwPUvH9DjwGCMWWvBshjr7evw1tqaqYUg8iuoVC8DFSUpSXQ5suLs5pnGDRG1npLtWiSXEeiGGdjxjzunUX",
  "key23": "4CM6KQfk7w7oon9p4AYEebSegajEGSXPCa7273PAvZwvANdTUfuyDPfwgrNf3k2cHLczEmQwoH8EMXVb652hV3BL",
  "key24": "3Bfq5swzXSzGuDXEc4Q68GZ8ov27m7mTPUVF4CDa9P6XBLMPzGgesEnbCaKyHDP9cqbNj8obJ7XsND3Nk9J8gg3y",
  "key25": "DfQBEzq3yYVk4wXZ1rXw53zkoSdyFirPTvMuRG6Tnbv28jnHZxTe59coyqRnR2TX83KT3xuJXuVRV9JqZiBFQmv",
  "key26": "ksDRefGhkgEmWogfM4JBYkRh2Czp1krK7vi8w55xbPDR3wsQ96iX46oizJuvMsqNjv89VXJZMcWKigK8jZMPqYa",
  "key27": "GBrDQmoQfQQKJLMwYVQ4N8GTA1yaaktR8PJGFVZV4MQwfeX8XGQRHqpe4xJ47zVLCbDouys8j69fgRETqnypcib",
  "key28": "622pLnR5RvZnZHfebskfNC75CLojGtaG2knKhzHJQKd2xETvyuf8eCbq2rSwavPCnGHfXmebffQUeWsF3efkHdke",
  "key29": "2gUW6ZWAKwkUFEGgGdsD3x1E4ib5DgkC5prHVniYvJ3KHdKMoNDRskbTLddh33PeU6m78ku71m2vjKgucKnbQi6X",
  "key30": "3FrzbV9x9UTVZ1humMWya19SLDPiepD2VXp373q5aX7pqH2n6VCWZU1ES4YZTXQu1ALvTYKdByXScpv3cpUjchaN"
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
