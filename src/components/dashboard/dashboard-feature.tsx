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
    "3jjw3t3qVhYP1oWk6F9WzXusKo1Tjexy1MzE89kcvH5PaaWpnWwq1EqwgBXceB1GQrdnB4nfdUCT7EDVn3yMHHzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKfB5sXyjge4sGYi2DKvKBZn3MysThgHeRWertje94XzkvVXeznULfSSUW8oSDvP6qZtHVR5G8cszYKvEtBLUxS",
  "key1": "2BtNLV88FGKUjy3fPvMqGSY8VKKs67ECJyFbj3Q4QxCJ7Nmjy3QV1SaGHdL78ojC3Xq4uEB13paHvqkaoeZ3aFPX",
  "key2": "4CNiAMMQPtR6MdWA414JADXeVwifDMte1nLVd5A4WcquuhonXxnLSyySdumwKDWWHn2jXHbWrQWLTGce68PtvwvX",
  "key3": "5KWAJLWSsdR9TxQz95D7xQTBXWnvjXJyujhRDj7U6vE4s6qUi8NKgPQowqCwLcHWZBtWSsAxPsKdEJk6d4L382H1",
  "key4": "34AK8yED1Pdu5PsHhL1hruMavp38WMefeFwXB3UpssDkq3PTpZ4QVjCCFMUo8zJvGiWro1heAmfYH1Xu1YZxB1U8",
  "key5": "yCXUdmfQ3T9CgcjK3v9STGnyNCXu1rbNFe6LoJfFCRxH8QoGCve2nho2YB3qB2C8bzw4cxKMi7ztV7qrXyqwEua",
  "key6": "4yE8zWr3Mfruig2uGq1uwbqcpWx1d2fDCUUbR1h4mBW3qRJumpUBfzaqyXB5T3pKC5yFxHvnUVNwynF8xPurmaun",
  "key7": "5nPG83Rt2JRexyu9yU7gJWUi5H4zdcEQQwcu6AwYTU8uAXjJZA2pbA8ygYuZP3izGd9CFmNVuKj5zFg9YtTzoQ6j",
  "key8": "5KZ7Y5aCib5WiMKnK3khbipF3N6B365McBtRi7UvpKVWEkxd3Jx19ksh4KUKesC3Hu4UKNSqg17jBZ6UsVKEVWsZ",
  "key9": "4zW9PXLJa6AmeG94zjamsNZXF2KfPUeZxWuQhxLHFYBNqkomYThwMRCKXfPwmZ4vKbqtHyJCyLAyRrW61d3xtTTT",
  "key10": "4C1rs12SuSgMrnimG5pLjJhMVeCi16Hgdad77SjS54ZQd4GeNCFVT4vkDD74z2o9pzaANRhHh5J2hshjyxj3BkBu",
  "key11": "s1uG7EsAeDscFhwSjQiDdGAUv9381sgiqrEkeRmewHRfHM83mZZD16UzxXXWQzEjTXPQCZ1EeUeM7qU6oVkaSjC",
  "key12": "57iuSjvLXS2t8m2WD6rqMfczzPXisehTt4GJ7wcMaHBe5bEf8CnUK2MBA7xwRK7fFigpJE2cVJvXbpQccLs6Cu9Y",
  "key13": "MmT4H79gfkaE7BXFwCgAf8F93darrgbpZhdn3nM9GFik2AxeR9ykw5qexje7HAkP41onrYe4MiApuoKggSLAcT1",
  "key14": "65EcUQQgbBpBmtewurcFZS9TGNzKb2EywwtrNPHBQfu29daGZL7y7EfW4pGh2YEN4Xvpnf2eEEbB3QDfm1mvgVhR",
  "key15": "4fYouovy5cfMXscrXKDp6v7rxyW22V7xjSVPUNUWhW1PgddD9VNZGeMEvR4kUCBQuKZM82S328bwbUM5Hz4FpxC3",
  "key16": "4xso2rbjnWaErBdARMfFeFQ4dMJqpQkxEcxevqqMrFEWcVo8x2MXkYnA6WCJmuHi7mg1g8XtXk58EzCPNYW18kKQ",
  "key17": "3yGK9XSnWpjvjZjFK5xq6jZYJsiKU5GewBYMBzg5nuByM8pS3gS1dUVAkSCksnmtEtUKJZ7fXKWbm4joNqAou2Vj",
  "key18": "3HEEW3HpoXZaThLfVhV7NyxH4qgvuXJp4qBLM3nFvfLC3Tta9EZSaQZ4GAXE89ueHb3taaEVYCGvt1UX1x1EUfGx",
  "key19": "5166PzjKd22zaagSqREcCxxe9e4mhZQ5p7xLReTuMS2sbCD6qqRH5e9wCjq2U5s3uFruWLwcViksEtPnH3EzWLUS",
  "key20": "56HxKPS5xmu3cWbCof2hAk2DpN1H4n62VpUCK9rGcDJsQWXpvfM47BpRqZkDLQgkVTeNnAb1xxp36JAz3HqpWeBL",
  "key21": "352ipvuC6ithuByMdspgM5dvZ2716M3cRdBot69GAVvWrQstqoCRat3KKCbqzgPU6HiyqB8DXVJq6DhzoX5XdRFF",
  "key22": "3wtmxbi7bAeXZ9AwEgMn1EDjQ2db7mx6crzhHgrUEw5EvPpr46pvjDhwoyBZjixAUjPorCH1BUQuWCJ9EqMDX99i",
  "key23": "DWQQTrYog2m1SuGWY3G1qH5znkfz77qqTCRRs7MprqTZJBhKiKFAH8VLcwuFbPYABM15J8JfmAe59Bbpw2JNTEK",
  "key24": "52NaXmamYbjSy7ZJ97X8fBzFrZU5bqZ2Mgs8JtV6EJofdWnwaFWioNGMRUL7DpR1sx2QZFsJVxhccg2CkmumD8Rx",
  "key25": "2YkPHLvRavBEh6Q8xTfzQz5dtah7W6HT89L1ceWfVbWQpAs8BJGm9meyNup5YHWGarRGKw8L7eusxRdseRpw56De",
  "key26": "5kbA2oxYryYBefWtYLXasPJDtRAZu7gcHeUX5u91suSHdQGhVjCHNiEj8Yoz2APTp9F8GnXuxDsZR6THcyno7spc",
  "key27": "5zPfSakdCzio88UZ5LP2f5vbRLebFZUNB4jNNNb74eobvnWWeMfYZDVBb4MXtLKszEeDHfGn6wrY8T18y1c2zpyp",
  "key28": "4UXYszpuUEwafkHUCgkL91kcU2XTp28X8HAxf2xqdexhLSd2cGroo1Kf1RPrNWL2kJBMvtHhp1zXCHreicWaWz1y",
  "key29": "568Nm445vzBJkUJjikPZ4xzQdu5JWPuMZHJnDknskdNprwjrHq7ToGVNu2ydaotsVyRK1WtjtqkqZDMhxC8pV7D4"
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
