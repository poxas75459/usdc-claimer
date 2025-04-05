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
    "5srza9P7KzC1bp826YYBR8buGCYrwzXDafPoRWDzSYwYsaLBryYp5FziACavd5V136k7dbMYcKPbhdD25s6zajdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hkwhBev3erT2Uskc2XQ4iQq7m17ZktrMSvzHksD3nKzA6BzHZ7GX4qaoRvunzd66Beo8aCu5FkP5ouHLEMoREFt",
  "key1": "pXkpn9cCCjTHSLxvkBaeYuFd9zyCMDTqt4B2XDnouroKTHp5kwW3ajm8oBac5UfpGXJuUSWPfD3iKhkbwg1dQZd",
  "key2": "2cX35NSwPrbeenJPWhFHHsa7G2UsfxQyts4oiEFUdpXm9EV4KNGVeLQ2baZ35oEX6STH1CCttbqr3BCsFJpPAJaM",
  "key3": "w97cyhS26bgUeftEbmyJJbG7qfwA6k9LzwgL3fEinpnNKiXHU7HQpBru7FpWTm6kDaQvi1Aov2YpN2vF2zkHhzS",
  "key4": "5fQcKei8vU1TEycRemPPgUtQTG3DsZXbFDXzgd8srZpHuzjbXZjpPMHXnTe15jD3NPgSSjo8Tuh3hJn1rHzHaSyd",
  "key5": "Sxt2Ns2ch6rGxamzza9nvBGZRDsgqxsQ7Hr3iEBPX1LdH1cJ7PeWSMHzF4hKTnAkxgTUAJSu69PhBNgDuZ29Z51",
  "key6": "2AUiaEZWxdXHHk95YjLuofzXETjR9vWMebZA2QHnoA4sBH2fsh8mRdRhZn2ktXMhdH232TMNPwtGdtYaXrFHE511",
  "key7": "5q5JaDuX3x9QLMsoFKkVQibS1tV6JfXqZReMYvpBgVDdfWrQDQ3x71K5uYYdmGzZV39dTJeYDf83gpdoaSRUMq3s",
  "key8": "2VYZpGTmQcFJQiQaTFi7WhAPAGgF3qEkvy1A3gKCZF6YfGE6n34g62Wbo5EnpBvfp6pVEGMRu5beBPpwBj8KonRw",
  "key9": "4tqhSCq9FssK8EV93Du2hTZ7ZoZ1sCmSdCPkKRZQb3dqrz3noVoJqyE9pVWxe2FDd6ng3XpzaMXTamQuYZNufLca",
  "key10": "2WqeUh8KJ4WWg2ZzvHHGUq4q3uuUfyEMM35W5CGgToCagoNXKLad9oNt5fsurH5LDF75N1LM9XxudenPKbwSZbPN",
  "key11": "3iYezkDRCei2qTn3bQcJU3WrfQnEPg8gc4pMiDA1mK6FAU5KARSwLWT4X4cvy3Vrxtt64UiDRswRfJikBuMH5BJj",
  "key12": "3G9yii628FCvbAL8HtGSG2QXvG7ykLEPoen3yJf2LjmgKjnzerWdckWanF3Sty8h8m3jkUufhmY4oyANsfoeaNUH",
  "key13": "2kc83VVCLBZSxWbsyMgpNcVWo8TRNieFkGeZRnq3Fs9wHbFzKUveZzwLYptaSAhSN9dWFK6cZkUStxGxzgWyek3g",
  "key14": "3UAz4YE7WstvC3Sbd34Mknzd1KJj3ybBaNWNJ416TAqjqMPToydNFoyP9u4MKj9FdheXfB2YfSyud4vzsd4hrrV5",
  "key15": "5n263WzwQ5QEv2WDr5G2sNhzEdzdiSEdWPRsP6FDvcvjAuDSvhNJdxviGZP5DWCsvQehyUozmz1Tmh6FhkdY2vNp",
  "key16": "45XdeG9SUGpKZRNWeseCMS6d4ASsdakyDGg571WumPQEfNVtj1wB8UQjPjJxEnmqxzctUTD3CJPTgqEvBFE1X2Nh",
  "key17": "3NWAd6XjbGU3q51EGeiGtQPYLfxjsh5TFd5Nr1tkCsJVJNpncDHaFKTAcosrx9XLoHU8NAwpNJvBmPFLAzPuVnEW",
  "key18": "27kiU871Mfuc8Us97HCrHe7st7zPUtdwbU7sTK2vaHgL7yds6kEM1DsPs7GPP1vtn9EoBDEf4DCBbxfhcwBhNbDf",
  "key19": "LCYM3ohLKgKAVCmvqHS2jP2GRdBGtR8X9hTXdYfkki5fKDHJGbQZazWg3WFBsvRVTeyUecsehWcRsXvZFrrVpPX",
  "key20": "4t1vYk1BKT4cyEa6erTDCmNgoFMYKXR7dRCdxVkqs5VGF6Rc26GdyscS9rphBMQn21b5obrN3imz1NLRejZnCbpb",
  "key21": "2AiTQSnR7cpAfKqoM7oNHw5Pbzkz2zHELG7aUAYK3eXd8HBu3RmfsEwyCESki8Xb8Y8gin9CwjLNK7soHZYMcY3V",
  "key22": "Uwij8PvvZwn3ucWTeGX2YZS525fXkC5hMSqUuMFQaxexZY3C1pK1SpXm5UQujNxbt3cq1sAhqav1wNfwU4qWd8w",
  "key23": "7sSgHjiiuUhnKP1MG7fwHL83aA5hjucRZbawH47g4EecDCWGEgaGkBfpbjoFXEvespt2xRx2UtFXnjSNZg2datC",
  "key24": "wukrv7vQnGPP34qgbeY4bEDXDnVxS989JSBEQEqKU14hwkSjM7KcEMoV7sT5uan44u1kJMP7k4ibFJjCeqtnSX6",
  "key25": "4sLs93rPJgf6on76wVLrLmJSbkAaxC3ULbP1QCQWteVDmSgyXTDJ8RyY6r6WChnp6PJHAq7k6BotMSDFdDbMinh",
  "key26": "4QDTs4PdPusvEHdU1cgPD5PS9FecnWuKjyJmNA7oEXSMgMvgDaaYbRJMvdh9Q6mFYdPiSucmKpD757eBntYo6FvC",
  "key27": "24UBTn55pfBSYLMYYTDRMp71vLrWNWcBw1s8Q9f161qfgZJfiznQqiJ9LPdUuQ6KhtspZhvxXP4rVPmQS6YMjX91",
  "key28": "3rzwsR6cs6rJjLEW1ukt3EWL4NQ5RpiJrTZPtVibVc62ubTeJHkqH4Sy6azsXK7q2EpC7gA3HhRrcX6FbpHLiZVU",
  "key29": "4xMytHQ4cBHmBGqozR3YaMQs4tgVt6ZfqYTGndwh3gXeFa9Cp5kKkXRkAu9SPZ3fwzSApnyhY5v5oBJRXDAmNuox",
  "key30": "5ErCnwi9wqmu5tkZHtLYrDrm7FkGcWrCzs7pHo6zuDzyPUtVBgrcB4XYNXU79znU64hVm7kSQTLARpLN376Ab9tU",
  "key31": "3WP1DkbyUgHmXbA3GHWgEWB5PbbBwBQq59jzybJEFPLi9qbxYZcefAoee58biYJoweSRRYueY61ua8r6TjCBFptZ"
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
