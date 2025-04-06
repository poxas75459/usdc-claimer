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
    "5DzxrUtL4B6VfWdwT1bXDKga3JHJBB8peKir7StdP3RHZhPLaewJ4EKyyXrYctw4yANgiNC1LB3F9f2oj9X9GWKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AiQs4BxoCYNJpJxNhzD752xrs9FYG2saBNTVFx1EVSx2rhykavw6Kqag4HMhNLvK9pDkunXHnZE5VPBTLEpm3za",
  "key1": "48EtekqMVchMGAiZxizRhwdVrQbc6dc8pRKy148Zi5qnGSxdj2kZ95GXXFYUY6Hbh3P2GswQGmVzxVN4K5s1pXaB",
  "key2": "4D2CndzkCEGVDe1Nwq734VCS6ryqZuVt7aCsay8haidWXzSeEuG3EJNW5EyEJjF2JVGJXmcDbwvLGw5Qs8VoFt8K",
  "key3": "MXH8CtjTQqWgnWaCJBDtJDAYXx4EZRgciRKj4jq8V5KvweW93xhHrCEVPme93624CgVW7pFbxYU6PNvjDsXcnwc",
  "key4": "97WBm5JHacWTGxA7RUdjjHiSVAEsbCsqqieTbBv5wRaCCv46ZJZvWgdkY5mHxoKVU4AHjR4KZL34zaDC7Aig4Kb",
  "key5": "675vh6BTMg7Ctp9ULvdVUbMYhfno5FXHVgaRomxCBpSDVgDjZShxycUVsNp4S9aoQhb2Ur7t74eAnuryq9xRm7tg",
  "key6": "kLaMqJ1K22VguVq85xA638Te4t8ueA8b6rALmFJ21UbfR3nDh5guoop1jMSAsPxp8nRR3pspRRkGYm9T8vTYui5",
  "key7": "2WPNAoL24tdwnaoWw19QMTNvB1722JVmA465FMSaricuTVWtHWGsXfZFAhdNfXkhTtwxu9rPWPQMU48cZRhhTsSa",
  "key8": "2Mts3zEmpooAtL7hnuNdXFvhC84bzXT8EiTnk15GCJyBkMuqzug6grsVZjYX2JG8yL39MUCYYFpLptdqZB7DPo4w",
  "key9": "5UtVRNNBE1RNR3LAhCEtaY5r7qyh6t6kGXwjR3M3J1e4ggitAwfj6sNgdm8ShERAa9QxsqBtMnzqTt31TcE6c4Lv",
  "key10": "5HSj3viZrNwtwj4d5BRjsg5UnsFVBu3uo26EuPy5nrjvEHwZY6TCL8uirz5RFpGcqsTvdxZpRf5Fe8V7MRUZbfRk",
  "key11": "4xS2EP7HGiR9k53fPbpSjtwMCbmGFSDKkhLKTGj2qnuSpNDkqZq6o8ZwfFULdo3yE6hGcU84mHAXVAm7Gi7PivHv",
  "key12": "LC5YDMQYLMhkJDozq56EFMDVjWcb6Wa89x9F67u6zxAzHaUcp23V3W4E3yGGxjAgViVQgsYNyvqH4UkurDciuFL",
  "key13": "3PdAPWoWauk9b8Zr3atjV53sMjHUeyFwQTHUaA22V38VUJpgume1DRkc7Ngf8RRX2LChANv4GJxRCFaNhCpg1abN",
  "key14": "5erovcsZc4guAg1rh1dcr1uiaqwNmj6CYj7CeyMuA3375WGNZAxq9ymDJuBMnELKDbmWReVhDUPZbU7WVsAVeHw2",
  "key15": "4SBCsEmmfEN8qujjvuYtJWFcgh624cVzJjZgdV2ouGQ8Suib2GAjyfoPpGpqjZoP6urWcTF5yK2UR7yjeWnRWJG2",
  "key16": "3VjXJY5QbtDn8PQbbeunUxFtqEER3b7Fj8Aurezw3TFyKbio19FPo24bCF8uDe45gWBhM7Jtfd1rz9VAJNF21KD3",
  "key17": "2c81VaE3V7EUSyvTiKXnperp6FjRyQ9yDL7GHjSRPr7EWoBAZdidq45Caxj94aBL9vPpcVJbj54KVzqRHGMYdDYf",
  "key18": "Y5Q3i6b8KzLPgSuuMpeSnsYjEBmqJDc6q9EjT7126JJQKmCE3f7wXY25b8fgCQ4pLLBo2paFh6dhew8SzAXoiud",
  "key19": "3mGF7jAfapSP8CqRw7KieoCS5LGy4pyXn6nsfjSV2fAug4z3fj3u8zzRTKFgpXETwghYkcFmdzMDePJPaMhUqA1B",
  "key20": "5SFeyfduNG1xkJC2i2HNShdDtXBWnxBCa6KAnh8pj4NHC4fPNTv2j92Q4N1xjc3nMs3VWUJT997rmYLR2c8vev1e",
  "key21": "5BZ3r4pPYY2xs1AqEgrZiXKMWvJNaUYGn2zr847XbmHSQtAZSVFRc9CToCN5pCqBFt4q8mEHuXUaZD8xV3W83j2m",
  "key22": "22jQMVX1EJLZEVFMBLowVxAbjR3o6cLqX3P4sMZrUGCcjEBQ1VCATVKEpwB86ExTWVStSmJNKUfS5Vp89UgUtN8g",
  "key23": "KRLy5KyDU1CDNpQKGxau3WHtfAKNASFX6gxtEBRW5SCBvCAo4PHChhtXcGrzrnYZUUN73ZTRvgGsZU8uxmVUx3T",
  "key24": "556pZ6zZwyywZBSRUFBjWowK8w42GMW6EJPXfaSbRp8soe2aQuk3htgGYDsdJbQeVUZmUjJhim4QLbWpgLwENfrG",
  "key25": "5VxT1VF8mp3ymWTFPPupuHT6eabrngDzesM1z19fgb6StSPmH87rNQsrbKBJZgPru5oi5e5uGyxcoLVeSG2HzSta",
  "key26": "4423uoWpz4VUvdaRe1oHc6CHgdMHjbiZyYUnaMXSq8Tu6jocASy4VWPYovNkMki47ytphReygJRJrFNDbRQpPEsu",
  "key27": "39zoQyPJWHPkodes4jqwnBj7nrz2o6TVSVNxpz3jFnJwmZtuXPf6JCPvtVi4PQJ4j7bBXu9cXhM86PD73ckYRso"
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
