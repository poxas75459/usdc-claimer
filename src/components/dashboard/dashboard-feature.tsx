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
    "gsTicx6Phim2WnHH4qEwsnWFm5Npu4nVQoiyhJ9LtsTDWnGaXfpk8cL2dnGYccSHXtCinNFLi2qdrd4ceHgaBk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FLd4jH9WGGKAkau6MD6ReYfpBTnP7syrxb8kHAyhHtpcTZGxePLabbrkBUXfVmHS18Jjkwwomk7i5f9Sg1eBj4S",
  "key1": "2p8drDVYU1JhatBFjBE2penxZzJVvp195vbc65Vj81LXBuPDWPbZ9GtfH7CmxQzMu6okd3V7sbGiWY3ZPfmMs2Xk",
  "key2": "64cNATkutHcJqCTtMG2yvvexh4RB9RDAXYPjc6cgmNUTxbwfUUVZ8HXADSF7SD1WcKwAa299FuUyyEZSUmiMj43k",
  "key3": "3ot1XwFWJ8oVGUZa4XdF6svEysfGNVy4d4KovrMoEUwXxNZtTY5VHDBy5Ji5bmTUrR5Sz3vNqyaan5SP56shQ3i2",
  "key4": "4tc339rCadQhUJztWLWk64NtrEoDC9qdazt7ZJbnXDZ8bYkKtpiUQDicD9uaZ4wzSkvAnhTfqzwfGatjFyzCbXgx",
  "key5": "5AJNaoi2PQTXtwGgNRJ3rSGK4ERJBNnqLf2xhYM7FEzhjJmbf4UskvJquwmkpsVmQaLWCM112K5x8pVozaLwvAzv",
  "key6": "4iUtU5eBoYyZQmqpPL8VYJTbrQhRg4SNCNCFRQYKUFfhqwv7R9AE9DawkQxoigFWzsxWKMEGaRFRWEgLCGLcWREt",
  "key7": "3MGyJB5v66yFnNvz178g4rSKJ2ECL8jz5BtqbWFLo1B83ZGeayxNEEuQ3BpSMZ5nu9rMZLWhZDqP9bpaZQDrzaSA",
  "key8": "kUUZvqbwRQ6NRk2XXr8qVcvZsL4i4Mpe1Fe4TtCBKEDWntFD2Hay6RoQW7SNZj7r2UJqJPvtbZ1pKuZqyg1dtJn",
  "key9": "gREaTDSUfk7dbLr1QEr2ugXuhVYasVwxPmx9TRmrqdVn1AiJLZRoMxuF5zDfTd87YFz6bq7NzzeFURFoSMA5gat",
  "key10": "4ZzkL4JvaPzvvWPybD6WGXK5uShJDGszrQaRijzawHdMXEbzrXEow57L7zaxEQ8oz6fcpxmSXF2DELX7WgzK4GyN",
  "key11": "c3nS6eUdyVtcf2xUinNqRKSz9st6WBS8yx9QKRC8WiR9RtebgCckxVhqrazLFcrkhSqwU9Av6hV8DW26t7AP6qi",
  "key12": "z1daBjMXbSxLCu9Ebj2UjAzGrxMMpwRgFg4PQa15ye6JATDNfdphUQiqmqH5bE2YXRV9M74LN7uhwKiyjdLBh1N",
  "key13": "AJficK8MgRVxpqiBnrheJFbHnv6fz5UwX3L12AhknMtF8PmmfvAKNNEYSzmCM1c6E3CB4Pp8zgXPvqi1AsvWqbv",
  "key14": "yWu6ukVnJQ4FCAjhDoWhXA2z95RXrbFXrhcbpEYoE3vwBtUoW9oEfBTFHjE382idRw7jVpSBginU6WiTFuJL55h",
  "key15": "4y6eK1tFTyuCA9d3ybMgKFw4WYwQ68VCVNAbMPG86xHkeoB4crMUqBPWaYmgFqS5YQyNpoQH1vabKy1BmWCCQZbP",
  "key16": "3PBtvATziRPZdSzJspA4T676ykJdA7svMfYJf7YCec6WnYf9P4AGyd2xdpKKds5rUgKb5GdghL5VeVCZT8k8ME2B",
  "key17": "3yo1SkYLnFiaT96c3C7oBbhZVXJheKHFv7PyDCZQ4vJLLrMHaDLdmPWvuDN1VJG2RTqxpRp6f9mhKsxpRzjMMWtX",
  "key18": "2ZBBTPV6HAwmoEAv18vNCyDPjrFCDVJDrtkdtAuLBAoasLKRvsLzydZmWsR6VkCPq2fCcigGW1PWu3uRyiSwH9iu",
  "key19": "5nVvaFLf7NL9Nydqpm7jyPCN4Sjn1Wt1AFfu5bq89URijX2eYiLU4fdKCYPacgR3mLnnSeNctNzkUgvkgLoW6HsR",
  "key20": "56sqkP3c3ypBiUYJud2mqSxu8xHDVBNThhtXQrvMQBJWCM8iKuE6MbdZstu8f3nhiKnM15jJf9GACUnXphXkYVRY",
  "key21": "5YjSmZrwsdQPPDUcTcL6YP1Kc6guHquwQX3AKsEwwToCqkQ2jpcrSCmQN2XeiB4faX79EWLc6EUAVuqV4hzagKNz",
  "key22": "2ogb6ymWwxJyA6CLWAVp7tSUSkdkYuJbAC3Gf7smXVgaa1ZimeMF6Hgu9pK6acpmwZp3WiHBYC7pXfExHo9D1XX2",
  "key23": "2GSxu3EShPdGDmp3bJZGcLohzuyQ6DuNs6JJxNfMUerRFRcxF9CvdWSNgXB5KbYzjmg9USPbehXzq5AqR7i4HK3r",
  "key24": "2jMGrzphrpLJg1T4zeVkPVv7s37nFEp9zfExuWALgH3944hen5j4Cy36ZT67onrRk6VZEnFYCP52HXDKvo7znG9K",
  "key25": "DuzXEpR1hPGCxMu7gjMWXJXEqw4C4sWCFYsuPvAVjcXRvGJcoDJAzaP5ZYQSEFvpEi5amPmRpsMERWfret4UHUF",
  "key26": "25iojaXEi5idDwqGgZe1ZQFckGyc1UKkXju7Y57aPKrEP369k4HcSmR61c5yaLWGXLbRNcaKi2tvNtvVr31sQR5c",
  "key27": "zAkKKgvRBpcJcUZLHxB2eFumWf6JfHXqXPrG9eASW1uic669Kedaw2MpXzxg11Vvo5hwPK5MaDHKaWyGtXwRUxP",
  "key28": "cv3us45vgp3q3KX1Bz9Vowhv37SaqKCpD17ofhRNRLnuvQZov3XERdKMt76NmgiUkf4kWVUaAFUfhx4vadfwSeo",
  "key29": "4aqRQuXoCxpo663ZZ5hoeH2q4fFVJEG5sKJtG65Kwv42ctpESwkc5ymsbR2oV4d85XEpr5jYYtgc2Lcav6RkUMcF",
  "key30": "5NRb7NbUv4CLKRC4ULsxJ4mwkCALMEej2335mrgzMDFGGBmiykaF2msv4yREvVvYCMyGgWLPEvk4EZvApzh3CyJW",
  "key31": "N2pdwoy5AtYuWwZL16sLCjduB31SqWgbKSuVx2G4YWz19LxiVHAfmpVgoxBhXho7s7MM1vb6SViHo18yvrt1UzH",
  "key32": "2gCDeFKpJXpbuaQ23JkbJPny1G61bEdhji5BeBVGMtf6iqK1vAccBEU7UNtDRaKejpnX5xgRdQeXgGPnmmSBnWcD",
  "key33": "5fFMRmgZxVgq6uw7cFZV8PYVGre4ziABaJCwdirvA7zXoxykeYCvDGRSUKtUnGYg5eSDY19XCQVvMPhVBx41nxf",
  "key34": "2D8rzDutVXTYdW1sZ5nugHA4JRTX4jNcVEFHUF2jBfBYM1LtKXMBpKc7njdBVRf9YJ5TaZrZpVXT1c7DTw6HRTgx",
  "key35": "3aPMdMANiEZ48Kh7HkNC4f9Kv1dNucMHP9RLBp9RWKitBG5nAG6KhiXXMQVS7erTkvkrbaaubSuYqEdConHBk87W",
  "key36": "66wbvWcES4mN8mjwEMubk9zfj611We3ugbPQSdGsZzdibAj81uEKFnWLyZdZz5dtYx1bj6c31bCHGVB3wDtAbhEC",
  "key37": "3g6gFZQRchK7kWtt79off5ktLnqRbBGg3pUJ3tgZENQjAwyVwQvvQKvK1bcVhCaWzT1PnchQmgmSPwCbVah437jd",
  "key38": "4RmXB1dK2AbZfkDuog1G5BGGE8cbKuzq62R9mj9cBFghRwiAz43QxHZWQzvxiiZAZuu69x27VDHVe1s4u7eN3Nx2",
  "key39": "5qCpvPYvao5BNPWWMZJfbg1jAKcUoqAkVbfyp635ddCBPmKmwZghTj4HEkLWykXHWQgQ71ZDMZgxxoWZKzXoiH1W",
  "key40": "531WZRPzRPr2U4bqHSYDUau5vpbkeER9TkzDkQC8g6eRPruKtQT5AWmL8wErHxFMEGuLng3WXsTKyNCbxYHr6DZC"
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
