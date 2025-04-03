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
    "2g36Y8atveVfxJV5GKL4HznNoh5vAQwGxeAH58iFyFhu3ii6ms61xzQeCNkcrgCihNAtYRT9Sm1Q9HZiCNmrD6u1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vz9Yj89ysHNTpPgr6io9pPm58DVj6f8UQGeF5WXWtm4mxSbK2db1CAAMjKBo7vxDQ7qSb1EPF8hKTXJT8YyCo1w",
  "key1": "WxXvw14ah2SMAdS2hVBDPq8DJxzjHv3Gj5dza18UYdTYHWDiAPXLPmXTquvXig6Qx1j7LruuNVgt6SWZU1Cgjky",
  "key2": "36UXf1rSUGqg1DVyuAL7hAmtRbCDFQSeqy5DyDJQH2HUbVEjzefnCoGXnqbGqWbcLTsTQNeSyWq7TofUj7EBbDnQ",
  "key3": "5PXLC2X4e85trGw2cf9cz7YNYERcKiuY1uKp2xmGUHKDfqiSydQGTeQW6oy2ZrwsZxNSMqxYN8TLT8JkQFpoCtyZ",
  "key4": "4cz24gFCewemkGhc1ZgVCpLEnwYe1jJa8YQB5EQnqZRKLkb2E5V3STAuJArxSqor7fwApJqkt3sh4ArfUdVXZ6Ti",
  "key5": "3fS2N1iickifVchPWHb3dJxRT5vD2Zj2d8rUAia7E89wPHEY3AeQ5oPD3pJaH33pKNAoxdXp6cmUHMoiHwgjWXUL",
  "key6": "3ddNutmr6yn7wvHJw33pmpYhnhSPM7Kabx8dG9w7FpEQ3iJP8DF3Rsv1tYrMtEk6j9P1LCBdFsHj9uZmYkJgBQjW",
  "key7": "2eS9Zrs6XDQph5j9ShS55cBLWSrkN1MfCqvam7n7DFraAQ1VpGCv8pTqirP6P5L1btvXYEik1u5iTSbXcv2YWRkz",
  "key8": "3j9mfXEuzgQDWuepAp8xqZfgwxExmXWm71A36NP1WEdzVPuCyXQjHwn9E5MxuRB6hgutef5HhdRVPhayBGdAZknT",
  "key9": "3XGDXSHUsPKUHmGRSSew4aXEBJujw7zwk83PWhzFKHNqpLLCj8mujJvBCuHE1kEqQy3LozWRwBDEZQxkHC45FMxR",
  "key10": "31YcC5W59BgkKRp5jT4p5z7gsFVryBcKFr3gyXtnG6FmqrDUXuoWjdfZJCqBko7mn6AtiFd7ja6zrgm4cL7m436n",
  "key11": "4DN5FxvykQf3Xq72hmptvssLTpvZvFSKz5kjvT9tzTdTzWdBUEPqoNz1mGJUL4Te555f2wutwAQuHn3PQHxnp2GQ",
  "key12": "5TcsQHPYFPk3G38kvejuab435wkK7snCNrdzrPXK8qyTog32Mnfm3Vme7QwCDyGiF4EpEqej3fwMH44mfSwzXFg3",
  "key13": "5bSviKgLi7Af6QTxd1fLneTx2nWnRxTzr3KDUHTeTBWE2BhpmMNhtkXU8vXB4nXs3bkTTSy8WNupXzf7R1fkKcsc",
  "key14": "2BGZMSXCXBUBvuA13FtQHwnDmh6qWKwSjRsDQ3eYzAUY4PVCF5nsz9usDJfVbqas1AjqxHAL4ytwBQM1f1vAekmp",
  "key15": "3kwCBHh3jPzWNxjud7cqiWFcp795yasEMzAAiVJRKpCt6PWc6g14vKHH3yuoWGVDJDegCBw68sQp4ZfKS2pb6Nb9",
  "key16": "44Ch8JWfcRYJvG41r7Vfc5e6qsQVizsCnq9dDxQYcQsz2qyStvGn6NsWcxdfXQ984xf9C3YuCpThd4h5WLHAbmHT",
  "key17": "xoBrZjGZJECMgoYX6rLF6FoFhqhFCEGASNT9qZKemg8LmCkoiMSfJytJsxSC4pxCMaWukpWkWdKqXHAmV17WTv4",
  "key18": "Zo2DThN7rMYZxY7CcrfQLiat5vxtCrRv2owRwUDREy6poNMdxntFN3se8MCYYkdqNJQXJn8cVVTVGuBHgzkMNEE",
  "key19": "gRrBJU7q1X8UFEhq9anGECTKaYZPoxsdKbTN4mGLQ4c7ScKF9SAqmr7WmPC4gBkc63VDTFPHAfKGVUAbS2SPQar",
  "key20": "U7mp4hodjFg7KSS9kyw96zQ9yxdrkkfwY4USGz3pj5mMGR9gvhvvLX48MeS9iqmNnktB562dCagt7kxnzZoukJm",
  "key21": "GazCA8pGCirZSoohxSEEuVEBW84vTaBDUJPdcLzENSq1Ha77m96siorga81Hy11e8RhoetwuZRictuEauxfCprX",
  "key22": "3CbA253Hs2FaBJB9NwC3E8Uf3GpjnTufAGyUuehePzacxwzzdh5Rqsa5sWaXFpHWwbSyp3UU6eeBenvsRFPu715V",
  "key23": "2u9fXfhTbvndYcniczTvktQN6eUcEsJtANUDtNyPWGCagTjjooxK9QGpcXAA63vLqXsNDVATRzYi8CXvweoqyrpQ",
  "key24": "njj4zw1pafPgwG8d4jYXJgpWsoTssBnoBvJjo1AnzM2jfWt9G5SaKEhZRZQqgwFTsHwAyjpE73CTaYVPNeKGPNy",
  "key25": "4k1W17ETXf37Kye6ysqF7W9oB3eybkpiNbhLXWY3dgVjMH19HapEDUVCPqA4JmrqsaMHPFqnBEBfqaJYrJYxwWHp",
  "key26": "46TAMQPYm9jQoc8t9gVryoeqRhJm47f7KqcfKCd7gg49dsuudgXm7xiVujNPcKkWepHXPG894iJLhefx8fMvTp8a",
  "key27": "2bVNmhpNF8Tvz4btF72RAsNZczDQPYNTCf67H37vYdFrqL5UnTdpqPKpidtYJvXj74fnK22UV7a5gZG1kioDxNtS",
  "key28": "awjLtQarxcynvErSeWuRPzNifh6UPfNsqf5wo58wRCZm3SWH2igVrXrE9L2NWPpJTb6Z9997srVKdEVaci5V55o",
  "key29": "3Yhqa2JPjdo76Yz1xZHRSXDTHDFr9N1pV4PdH6jucB7b9U6QkqR7QdymmS1npC8gbsmcyG64WLNeKXuGWQZtVEZ1",
  "key30": "5DhnGUX3GrkAudXr6fUjvkv85WMCxU4A4XiVRgjkT5i6BN3XH2vWXJCkeWX1XZBezgDLFU6hQhfREshwfPjY2yKe"
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
