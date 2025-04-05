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
    "2Zf6m2EcS4XtXjZxgtUbVJjJoC6HyigXCiETi4sd9nfsUiCWVzpmy4ZxWCb9GA12DtpvM2dauKEdSR3eMj3bBnrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kVaoiwCaiX8gw8F1dc48YTxetKMN9omtHLQJFpaK5itcWodi1zG4y7vvsHt9RM6f4dTxztNAPRZDyoUqNBVt2Qe",
  "key1": "3Yh7Ltmw5QZEsCAe1XzAJ5YVG5TTiz9Ujomp2ZYNHWV58oBVzSJKWACJY6vED1eZnZ7k5C9JUKBsCFSPZiazz4dN",
  "key2": "3TVpGUmgjRRMzW4jG5cgeb94CxuobZkwvDQBBTq1vfy6hPHnKfkNVcnrSNWxGJNDH1BbgZufVcrza5iQPjNu5JMp",
  "key3": "3jB1jzqtfhmK5gx8FmhGTQkdBAhLfupbXnCgpzfcRxn4hCmyGybic9Mpg9vX8i2UjC3wqajPvq1NBU18g4Zt1CYL",
  "key4": "5apXiGBFHDbHVv98AxDe6oHsNoV7ZNDUXaSKhPhmHPHY7xQZQQgMpyQF7TEgkYnQk9NGpQygxMKtRhKQxo1A1h97",
  "key5": "xejuWonsMCCGYBFViJxaHS9CAHzv6bZ9Zvp2rRLmHYwrEwXp8cGVB4kx3ByDYY9TD3oiyyQUkXsgdW1ZxBhPmjG",
  "key6": "3HaByM5WNtTYeuJWZsFRmVx8ZkEPwXP8omfaEV4q61iNZFMRqodrwoc9ERHdXiKD4eFy3TfwcmoFjAaEkfHxqJwJ",
  "key7": "5cJMVYbdRQtMh3KKhxNRCYmVciWtKEoWTLzK93WATtjTESEtHg5FF55VfJ4zbEtDXMRJ56qjw95zVUZzPtazMQNK",
  "key8": "3Sd49WomwFe3B1UHNbJDEsbTKirxDXsV8TXMzXzUGai39kVEZ7Ttp8Dd2gSQdAQtGWw4vzdgtQndSpivQpQ6X7a2",
  "key9": "31bxPciv5CZTrWLhbe1w5XVwQEcAh88oaTrzkBAHLUZUyCyMNPBqD81ceDWjXXTyw2saA2RTS3uwLjNJtu56YqdE",
  "key10": "QPGSm2ywyYz1eR54t1d1MrSJnFcXRJPXrwrGPiA8UuMaVFcsmDh9rrsHCgeU4fuZQMTBhvM2HM8AJaoR8BVpzdW",
  "key11": "3pb3r2etP1FLzaKx4uduaCo8aLkbtSsCUAgxqRXMHRPyHrgwuMo7tAqcQmeLbi9ZFaDF9QRJ3Hf7ey83GkM7K96N",
  "key12": "478J9aNs81AHTefpEpkvGfWekFhAwGWoS24HscFym9W35JEcAbXyjZxcif7oDabHe1pcGXJfjR5KGfQMEQY1jQga",
  "key13": "QyjUrJvudtyyD5HoKqvhvszRLuUsGsv8n9hpLtUUFB2X1t6s6LRS5i39yEBHRCUqNpK4pUDFdGSfWRgkybCu7bu",
  "key14": "3Vs1hTgEQKgJsW1cq5fzTHQ9VEspLfbcd2rYp1R8SmAgu585e6oayjy5zScLHkjiJvCQrdQgwvKL7EtHxZy5otS9",
  "key15": "i6dc269FJkLMGXeCBuKRkYxTJUYUGcYPbzjxCJigZY9n9E6oX8ph5W8UUMvNDLp4NJcvArBuGgm1fUwR39SXNf7",
  "key16": "2n7xw246VEPhjPs6vyouSbWZTzWEeDZyaWm54CYhoiEoW836XndeXZwWSkoFnbGf7q7qhrpb7ZLo16oGPgbxH66S",
  "key17": "5gT8oKTt45E9FZ5SziyeTWob9kdFpteXhZCXUsYvxVtsz59cxm64eNhXB5uQoB1W3m4GFH6rPzakiNh7PbRq3Hw1",
  "key18": "28AUesPhazv5gkUwe4GgGuGamu82Wi1DeraMVvUiyryTfgh3BbXxS6c6WAjYXfmEjcL8iZVSCBHQZGnAQq8kjUV3",
  "key19": "3ZBQ5PhrUJ8gJwb17yfy9CQqv3iv3J54NdLybk9x5v34HY7n7YNKMwayXFpNBzZbkAFNpdgQJ2aNPTXq1QXDGDN4",
  "key20": "3VYB92hM6ERf5MWEWTHaWRfGofmixE6ckLMyAoDbBDNsrrpsxupSfAD9Nbr6Ect7AzFnZMjGbeJj6izmzpLPyz75",
  "key21": "5dWQ5TDHbQp7gVpQJZv3DDruW8VHpujSA6ffD5oeQoiGCvCSCNzEk3SFSF92kRZkcZAyVCncjd6TCpJ1jYENPgCU",
  "key22": "36qNg8ESNev6B4TysLzo8ELA8iDriHhSYWwCEYE1uKqmftTqdV1edCTYrSLfUPxNBETxHWo5K9BAUP826b1N3VyG",
  "key23": "2pkEnU3Xeev89Q2iGPwwidMTivtsWx17FirFJvxrwtzMxrGBDe21KoxH66zE9hsXadm2yunQaQsTyWCEKBHCHbnE",
  "key24": "4JNcNHuYiMGuNTpucTqKUaEJiWPg6CPZFiBNxgT8rZ8D6WMZiJeLeZPrHtrwCwLzmqyqutGcbbN712P7R25rMw6G",
  "key25": "5QTYZP2TJEt4w6FRrwdVs34dTLs65eBnnocDMBCJzBtkK8kpKrzhMrEtmhpqosZb8v1U7zUswajgqgbGHp1DpetY",
  "key26": "4WrPFMYQH1rK9qVFhPtetn4jq4hn2CukHs2JupwhuRRiqZdHohK7zpqvvqFDWESMge5CWy4qPAf7fN7KFe4zw3vu",
  "key27": "PFd37HvNgZdChvsyZ8VqxFvrDvedrhGocwXEcDtZuHoycxR4DPQh8VjfCvw9J3s37xs6xHfcnHgYU8FaXj3ZNKu",
  "key28": "2NPgaX3EP9bRoMNZwrujavbUNNYzXFBvro4djE7Wq67qwrZbGYVBcV5SQ5PCyrupFn6XeUw2JLegD9DSXCUBgPan",
  "key29": "25gXx7p6MytVAwLQpyZiCB2512hiFZtvFev1tmH12VHzmpNFgtPgjBrjFfA6WQHNMFqSEU8B53KyeaVWfumd3noY",
  "key30": "3AsYyRJFNtLEX9afUqQF7wd1bmkGRe5jVBsBBFjKTJRwSVybduZ617MXt4ZkuFHkKfPLcfBXnB9w9CiCT3S1rs4w",
  "key31": "crjZ2zqvG9EzJbt6Fd5DzSL88ecbQi6UjFTdn1Fcs7p45HuxJsJjd6ZwFAf5f335nnX7SxkK9c2AhDXYGyScvPh",
  "key32": "9J9w9qD1V6A5kR39Lbm835RWVDxykWy4emKBBNzXt4zDTYet9FmpmKQqv8dxNdhfpBgN2cW9TeiST3VKePDwesE",
  "key33": "2Y9UsfoveQS41pyVhfiLQF6ZWa33AqZw8gmtJDwrgpJbfa3ZVa76UFH5Vwc8ajCzmrDao1yPoNKm3eo3BdRxjh68",
  "key34": "622tJgmrHUYXBpsJ9Y833SsdeLQSNQ2G6MJjuQeQoXt6TrMnaU6Bv5sNeAoz57wRpsJcG5s3ATvu7ehDe7gMkZh3",
  "key35": "2rnWr6z6UAkjcQLYTk2n8KzkP5mV8qZZdiuY6e3goVtvuJqgiBTerZBDCEFg2Df5jNq6E3z8ta3jkgU9MiX9rFwq",
  "key36": "27XydDKwxG9XkKYPfWgNvRH7fSv6BN11QDxNTLbFkpjrpJ6Vw6qED4C45quvzrPgsAeYHuLdXxXbyKqcVQ8vkXfH",
  "key37": "37defoHg8MhY5QULvmvASy8U1tLPKYQZM2spC5sCjjaKowUQygEb3BPK2oJWWhY3pXd684WPPJffjPN8m358xupc",
  "key38": "55X8FnLNhLzropRbVBpVQiuBBu8dSr8XxDtM1fjGAzz72dR9TUmizTTTpHrXfrBbPUaqMAqPcewwkhVGqTbv6QQH",
  "key39": "3Qq8PEoG3XCeLcoD2BYcD8MiBG7DmQRmwmJ6ityw5TYBFpsXZxf1aKYJyTRNGTtBZ6caNaWxE9preQguF3RP11mk",
  "key40": "58eyMUTFr7PwqpbtswukzrGSs6DunYGaEE5qiJ1cp8aHKwShKP5LfHsDusvAb2zpVkbPBKtoC3RQmYcFJDvBkbV2",
  "key41": "4K2CJuQChZJxAHN6RKwCvzjhosSRjT5HKiJfmajzGtQHAd2M8P6axQRLNgApzDgNG54M7HMfzG4Thf3Mf3a2mfTt",
  "key42": "4HJHHgPpErB763nmwd7kikdVNZnE4ye6FQLD1d7d5b9XL2vuhzkRAdutip9kuJbbWTj36zgteLn6ufighvjYoA63",
  "key43": "5fPKrZoSm43BUyTosGKdrAmA5txm6jHU6e4JEv9BkAndmEqrcnvYqWcb3Kw4tJatJQ7Jsxn5TgyegVk2QDzneDcp",
  "key44": "3s2CShrA5ud6xSRxRAe6cvC8HvsDiRp6wfRGhH7idmoPgoSygBtETjLswPtc8GjGLYeaddBZVvDjLzH6xv5meM7R",
  "key45": "5rkBjQ9KQdcKGduVkerQntfoUMV6kdS8imVVrrG7tUniUrL93JdjwSUQkEwcMWLgNDUrqEYz7bJm75rx62E232Qs",
  "key46": "2cFW5oGdL5RV1zB2s2wkGcpa9cic4XymW996xjg95aidJSBLSsUAXMMhFZ7GAe2cefKP9Yhco19P7ERiySBRWLYA"
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
