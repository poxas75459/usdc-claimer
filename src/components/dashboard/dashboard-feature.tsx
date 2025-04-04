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
    "szKsT41GwV1DDVt6rAzoZ3Nx99QJYxsrfpjTyphmTSichdUCLSwFSNtZXXBxuYTmUcwAYGBPocqkcyL1Wgmo6Yc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JcC1QJZLGM6h4ULeGsqnoxoPHnS5nUKVWCzAVAxvHzfVQqSk2uLqnum6aMWFv4GZYT3JpP7TQjU85MT8kgskTBY",
  "key1": "3R99XV4TAcDrvKJfjQj8GMPHiF4YB34FXqNRxbN1D6iKk7iAdiAUbLXnckW1SzU1ht5i9qhKSjN3jmQbYs6yrSus",
  "key2": "2shb4cZQkzMjKHBD8ZBccCo8Am61aetj7cEVWGqQtREkQ1EEtJypBsW5txzLWXvJMf4C3UAcdAs9eLbACwYyvJp9",
  "key3": "42JoZHAV4irMjEKypxCuyjmEcUN7MTwTN8KLZ8CHdbkVvu24ruB5MUvvoZSdAWAC9QAuvQtiH5AfbiK4NnArgUSX",
  "key4": "3sTgNHPKW6fogJ2DN7dUpDcKJki6aUExGoVXZ6Vcfr6U7S1xr48hjMPi1bEc5kteJSGUAhGFcq5ektHLytzcjd2o",
  "key5": "4Cso5ySdCcH5Vp4jDojf1G8EXM5h4f6TCnb4K4Kgu554RvBZX7d1b4VDsn8TXAh8xZ7mfWsdiKMQKFdTmYq8jZuq",
  "key6": "3b4Jej86oVb29F7tVZtVMdtTU9H5byxW4EJ9vCgWZyDy99ymQGHeKADd59KkarqJt9ZxnR2GvguVANchsEyvqcLy",
  "key7": "5YN61X1b1D2HXph3uUVEJMAr8xE3HHbbvGKDLxxXFGVTUVXNxZmWZCbZQCfjJCg2ujP79oxAPuhm9AdLd73Xbnxx",
  "key8": "4TSmGpvFGFtDy4peBA625EkRiRKheAq4fGKGfWeGAT5hjQZ2xsKZwf1tPHKYCioPNyz4KfyRhCavzbyiXfTvDLaw",
  "key9": "3f5BYxQYMs1paAvp1mKperrcopwGAw8hU4sCByTuDaAkK38SiGAciThva2TioKQQFLXpNHJbYhicLPGA7htqkAFb",
  "key10": "39Bzt3EPrQGtjkHtt2ZRbLW69pmKjW9PNSukDAn2EfysrBTEN24o6VAD6Cvps3xf6t8NhXNS4peB5sdUhtCWJagZ",
  "key11": "38R42qAnCiPcnw3SURwQe88YpV5YP9qHre32VQ8vdskq6PdYUSjJrcnsi3c6ijW3Eg4bCQzwffFDPcxX3VU1GgdT",
  "key12": "2CYp3Cg9VH1GiVamysHvr7ASuYPTBC6biuiezMveWyPT4uWAda7v71TdW5NEnGjYBf6mHBagJMqzhysGVnJyX39",
  "key13": "4U2HBfK3uGJeMCGLtZe1Wj8p9zobwPFmymHoXXm6GqwycQaz4eWZ9Q6Paz3ohJHhYgZ4higbA68RGkYrUAddc6kp",
  "key14": "Xa12uEnxNWhkwgPgndsyERbM9qgQdPFGe6J95YN1eFDJpoTfe9cMa7bQamHB3At63xVkxggP1khTBPJdfmkxoqX",
  "key15": "2buhH5ApJhhShGbqxi9dxUumdXa8ZBoZXnWWjwhfJt8YuN4G5TP98cymYbSbiFoGxrWPtdSLxN5pfnDN58kCQZqo",
  "key16": "5QiczoYMtLurLBFuUUDwom7WzUYwv6sXoCji9AhzipeR6PE883xs7dJd9wSsYFyjXUEn9Mbh96SYos3X2XPuJTQD",
  "key17": "4NdURKXbyKzvyivy1Fxs9pLHKHXk8Kh96vJiR7xAFPGZJcCSehqWQNfQvMd144hNaNKbVq4hDrszFCNU7PCfA8bJ",
  "key18": "61uqcKtRzLujdZBMWHPAFeCvPkTrTnpF5zrNqiRJcSqdpaqAfPf2EutJDZSGHu7HCLTSWcHss1vEeNcrJVLbUwmq",
  "key19": "T9YVFrTiuUm2eUhz2a6WYLDp1o8idh1PM4MpYUpt9b6tjkgQ1wmByUmLwKxwWao1zkTPeGKFwf6UYbgAECDMVno",
  "key20": "3Bni11oKGZfjdkn6T1ueFMqJwXejpvFTSzr6YxzbjqVNrYfMc5GxFYbxzLpyFZmQ3tB9pnUB4oK2ca3BbKtnX4mB",
  "key21": "SuDtnnzjeHgBq4YtJxM3oUTSNbpBuhFpAoWW2Be2vdwQE9wNkZooZaoeZUMbEUKVySc9nr1QJh4p6ogUFfCx83i",
  "key22": "3R4goP9Hwa485rMAHY9GVDxZV61MmwYiN5sJ3uambrhttLYZX3SrcboRsLKLLfhwgyuKJ3zCNordmaJg9Qgr7D5z",
  "key23": "2hKvyJZH4eUG8z8KV5RSrYoD5kgeriS4XWyR6sU6qu1wQeEdjZXKVFA8ioXeiPH1Auyk3dv2CqbZnFiRzcHzG6rw",
  "key24": "4AJWNtU9JrURHFZkfJaXVFzj3MxYWKrBkmQWVbzbzzkrTzTQeCXT7LdEs3P7hdkH6oUpzKbLvujdCFFGbooBRctD",
  "key25": "5TQF8ixtS1uht7jWxi2A5FfbQzeXSFFUXafm3sros7znbMzETQyzTxxwTpkBxvpX1i13HVvNVX2A2rtKSDdr1qty",
  "key26": "5TtGfHKFbkdBtqj5EqgKYk5DUPeALsWaTwvLJ4TAYT2ekw9kjocCCq12FdoS5o8AdwNqNP7gz1FajffjqCmhBiRG",
  "key27": "489uvjXJebmCB8auyner6fMUjnSM2Nsa4XQPr4xTnKvaMUpLvxHQmFAUaexpMoKfob2gPL6gb8GEukNoJbdmW9ga",
  "key28": "QKRLk4ubPxg2Qbbcq3JDwk3YSDfBewumS8K7jWnJA8qPL1HDG7uy2kxLTFau8M5vByUbQ8i1eGja35wsdv1YtZS",
  "key29": "4e2eRGby8oFrsMLovCYEBSfYzhBBfeFN7C1WPjUZEmReVx8N7LdPYmxbQFwq49QFZStMLvqM5XXwbsbmRimaBEwt",
  "key30": "v6nenfdHgs4xUNeZXcX8RbDHt89RXoE7pCizUfgv1V72QY9h23S7uMHZhc72bYpmzU6iujirn6eYNcpZr9KC3hB",
  "key31": "4AM7jVhenVoBKbuvqx2CSoLwA8zdXguVJDEUNVpJStGKidnWExZ7PFBRXBCFPMGDZDivY8H8bd2NYPsCFJZiXEox",
  "key32": "3FZAvSo2mKu1biM6C3AeYhHSxeFN9uzTJwhJAyNtNqkRWt9fzMkHtNnukP2iyaUXMyQWSW6UDwsfpW7xgJAKY2nV",
  "key33": "4LDGjegZXF3kwz2War89ZhkyrHrtsFvKAqSQC1Qy6QCF8XHw5263kQUn2fcQSdgg9maWQxiXpxA277sagrRtJaqX",
  "key34": "5fwpmakY1Yn1kSapSkSRj7F3xx8n6hRNVquwKxg4rXq4cHi6t9ys4XNWPk1HQTdvMeubE4b4TeX6ZifoCXbB6K7R",
  "key35": "48BFfjY5bLfp1TvuYXRSCKPzbKjwKB3FUTBt4pScpCZrKY7AMKK3fqgAyQX5JaCdkqJx8trxm7kj9E1W94vxYHeY",
  "key36": "3o5GgthacMfvkZDGEZvnXks78bkkSNrs6JCaxymzm69YbxHBYUP4iRZ8pXedKMMXeHNx9eWsR9ph1aXkess5Efb1",
  "key37": "4MCkdHmbmthCPkLsqegep2vinfgJJz7iSAsF1MwohB8tTLd9NDU8jjsq2ZhFKxvE98kJeEb8PiMBZCtXkz4vPAHP",
  "key38": "ZyfJAvZymBsLrNZZjQxXPY5n4rtyFzPn9DKj2JbKfxcudFweDvrbMw5vwUqsMDom6n8ySJFNbTXTwiAGizJE9DY",
  "key39": "3qUL96hRZe1rC41QNoWjd5xyv3BzH9PfQWMtUrDCaJJmq1NDi5bC2jUkadyS85hZPPspcwg4mvcmsJGzH8iv7U4A"
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
