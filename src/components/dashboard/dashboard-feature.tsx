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
    "5cBcvhLy7nHxguNhkoooSaPr3Y24fx8MX5vPycWTDbugVTLxXS3mC3HEvFwX5US5CJ8jLmhp8qkAwSAJ8QnoU9SN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ftDSjQ4z5uyqf4NjYmqsFK4SFKE1Td9Q1xJMKFtAQYqW62BVyp2aEiugxt2xLMXuRfsUMSL2BFzVAmsLGT5SDrQ",
  "key1": "2zi5UmzKsiChieVcRJBgHidqkQKAMp7QEruKoiV5YQPHHy2mMNk2a6VFPKGtmfwkFod1QcEpxUG5kJVRWm6ZJA2f",
  "key2": "yT7otEBfvHKSyYfpvQ4DAFwWTQYEwQSiU4V14LUmfjSAUjr6BEN35b65nqdsZGgemAvPm1vQRgHMDG5hpjxeosA",
  "key3": "QPY8o1avNk7Euzdu8TSzxvKNx38XDRuPtuJosrP63pksngQXtErvn9sNK1N9UeGaNZ7ZAJLVZdiHNK9rmNTCrju",
  "key4": "5jAoWEmQxCRkL4mVfJt7wKy1hohS9dr4X1swvR4SbqPCVBb2Q9gM5qAWDMKHq69KrwGDStidpxfhmFEgUGL2acTA",
  "key5": "4uxRCFcDszGD4mtewsj5oD8JmgQ8EQfffJFkHRW6q83fJ9mFm5FEfQ2T8G8DAecd2GAsudxcWrWAnS7yVEZGEyk4",
  "key6": "5TzLi9dz3EanTFXSe1fkEgB7Gf1SQEEwjdLmjcUXKNvoKcM3jv49SdrnibRM1WgHYuX3JZnBtxWgUiNr4R2RveFE",
  "key7": "5fXcJ8c8hBtsSd9RZmPAC2e3bWM2WnMUYL7dgvpASdirZzv8mTxCEe3FkeimtcQx2xJpNKp1aXothuLRxCSvdZf5",
  "key8": "41mHZNKzJkZWsRF3aoKVHoZsWhSPeUspZnG2kkFgqNPzmUJmYRHhLXkC3z5dZcCVaQmEoiMXHgnotrSRepZFhQih",
  "key9": "5xS47hs4gp1U4E1JR17TUdBWiQrA3MpD2Y6QYx8pttiGuAneofgwfjYoyiKYiuepbf2pj3Mmvve3GzWNtdMoEq9e",
  "key10": "2MrSHFUYPUWbiMZS9sYNbEQWoR5YPaKbZ4X1jwFKn3fffR1Mt76WJv9mDaoe1DWMqVWzGgEZ7TNMQRFTGNg5NTfW",
  "key11": "3ZAqduwi17gRQaoHczRypBmaajH17nc6AyxnFE29xotLvtWzkVymwb3qgwjhe5qvEfgSTSsXEpvHZUogUKTA49Nr",
  "key12": "3AU1HQRosW1NobdjgGGGc2bXVitaAbfxZn1iHJJWCYcF9uQb94QroQxi4CkAT3G9sEFn3v7TYEJEPvqJmxG6XFta",
  "key13": "3TfdCmsdZpSRjWLnBMdWa62PGvvyVD9bS9938VB3rN3QegagFzbrgEU4VoUmM68YQS6WUdgv4UanSwEEvbrXSBKn",
  "key14": "2AvcddM3SeQwn52xJXq1htarffFg5kzobCuevoHMJTCRWAHexNjwy6osixgSvHixHNtdNVpEMcAfEYyZL5nS1CyP",
  "key15": "3tvn2YxyrPyyRyXNx7eNVRAfxyUiiDRZuPARByojo6SVELktJz1hL7ekyBZK6yFtFsxxR4BtY2Jb345MxAXMokxu",
  "key16": "5Ni2MnNegs2w3Qfc7qh93cYt5XvGj3d8Cfvm7HnP9WodsW2M888ib1txvExLKSiXQnCNPJKfnkzTUj1JNc417u7J",
  "key17": "22VJGvgMkMyWv5RJs5KCeR48ozgEnZP8jiT414ufVte1zen8eBpGb2kobLpsJaHiUkqsq5xM4qDoZ4Zh4rAUxszE",
  "key18": "422N1Z8dNbw9vUfRTBhruNaUCMWbNAnEyqTeME52eJYMAvBCB8ZUnRk47qvjwvYcYgHKqH6rx6LFWv7tA9Cj4kjm",
  "key19": "5oLemPFua4dYHvwN7A9g5uNRXDzTZNahqmtiRcs5ns5Be3eysZKTZKuV13MF6TNcu975FU8zybWkZFLGk1K6sZWb",
  "key20": "2F9k9JbFC6tqgPBTBE7R2qWjRiTvBz4u7CXpPLTmfNMznXQRVZ5YD77z8ocTP8BcY3HnPK6WDKMtsVp3VuZKY6EY",
  "key21": "4VzpDG3AUvU4k6mmrauPaw4XcSG5c6viPySELnoT1XrJicjMapoRaxuivaRyQKmJb7PQtKJQHuRWWiLBgvYiA7A6",
  "key22": "3tjnnRzmpGLUu5ecQGPr7d5AwmFgCVsHw9RiMfaH6yxBsT7e4vWdMF4bnLXGe4peSbwLSu4J4roEDPs6opkWs1sW",
  "key23": "49tsFC2YWFBHAX71k7Ekq2UqYFrw6oKkBx6UKE4gTKPVPHBgvQcStQX27aWf4YYRuh1JY44TWGeyUQgT163nk52V",
  "key24": "3dDYKF78fpVa532Rkkr2t3nS4gxkTeLKno43jTfWmTkU2PXP29mhHa8wask5vET8Ng2t4ZiaqisNWhMLZ6txUEHQ",
  "key25": "2DTqtkEtTM2ykwxqbv1ZWiHi7Vzk2Wb9QCn9AjTHSfZv6CqRf3i3R3Bhdz9RWDmyTpFnDMmRaWjXmEsjk6a7X3H9",
  "key26": "pXEjXXn4BbpQciNnE4hiNHGLA2QSurvftYKcGFGHvB6P6HDPpeJB34p2mGZxTAsTmd6VSXQ9ZHwg1Le7Vw4CEmJ",
  "key27": "3zuR3v8CKVj6NWhPCv8x1g9Zf8epZ5gP89r8dNV6Kv3yqxXYfj6nnVaBWHqVMd4ESHXdJyjriX86M1AU1a1TsZ95",
  "key28": "4XJCUM31i7T2hcizwjpcpgn5eYPgViqoCePg6bSfD5wiBJ6m3Jee7yXbwG1mN277p4L2EywxJB6ZrnNydK1gL6Dd",
  "key29": "5QGYzrfeXZ67Qcbo8PBhnzty7Q5LTYU8sw5oCFfngGx3GrPuwgXuH2vLz6F4EVAv8Z8KhFLf4c57NrHNK8YC8dSs",
  "key30": "51yFuwzfk76JSrByEgQUWnBGhf2zwfiMLCnXZ8XH4diKb2F28WPRkNhmm7MQ1huMpae32Lm9cRfxLxF7mm794Yxo",
  "key31": "FFSY2QotSAQG1nk3WnDs85ZLHtMHwjJwGUGr1JEVwab37sfuExV1rb1NQJu5asmJMDB1vGjSoarWq5mVuDBTFrQ",
  "key32": "BuzRvUn4Q4bCAwdaoBURhnia4Ed4eaktEJXe7K8rNUvXv4KwDaWJSYKWHC9uVVhLyxL7bWPV3xgeFivUrJiafaZ",
  "key33": "32zbwV5rHS8CfGEFsdtoTeB6QMEPCpw3sP931xWWvWxfpEBLGVpjNqcP42QjcwUwEvuaxAvQAf6dDgxhx97ZDnbb",
  "key34": "VB4ssuYmHiodUv22xgnVpZg7TppQmgxpQFVsVCy2cP1AZtQBvVauif6JvQACNEiENy8wJfSDfZqVo6SZoC3vzNE",
  "key35": "3hSxoAxc51UorWGBjj7WBjt2EJ58PYRwtxPUEdpAWs9DYT9S9jJh7o2Ti5TE2PRWC6gBFmjgVfqaEDjfYXK7KGZk",
  "key36": "4UBpDtg9McQfwWW222FuiDqwHMhktqQdXY6gzXZ1zmcjEnz6XyRzn3KHehWyxh3nw7jzFRQSG52Gdos5n6dyb9Zp",
  "key37": "3NTLMsAcZx7Tvwb2zqbZze8PWhWAmoTpn3JRHC4cRj3kc7reeFg1pRYoeobQGZ95wmYw9jfUbFLLpPC279LnEgfX",
  "key38": "5sPqKYJbKKrUQiCEx73eQVcQf7s8zjTpxwJScDPfP3JNucEWTKEVs4y3LJ8akCzbNQvn3mhqdQ9znmiJQPqBX12c"
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
