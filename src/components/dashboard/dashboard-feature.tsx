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
    "2v8NWbyQ8ZG4vBgGCU3W4Lk69rXj58mqf9gm8StH2t7ueCx1oyPGmEpYc1YGJ9FonNJegit7oGvj7VAFT24hyAGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31PKUzB5f7nbWs2aG6bzeUACx6jgSJGo8WCXHXk68HKLvNnicxcsxEJmTxXT9cF9uYQ6K9zgqVFBnpLqDyYShkYs",
  "key1": "2F5hLFeDfiG42FeomaVcyrab1JnmKui6uF4dpXxXwiEeUWxzFb6EN5HnuTYDXAyKYZm3VWiwqEQvwuyaGS1jKWvv",
  "key2": "3CaQMTVtb9FbX5v2LVXHZx6xXkijtQB6kjr7xAcxTkhDZXMRcP29w55Sx5EcGsg6PnZAKFTcDCcgSqu55SgBPUUh",
  "key3": "qVA23PyDzdiKXpBLnoErAP4k6b65K4TixrhTaHRrqznrUj7qYxk3zsTepFJcZFPJWGV9BAubS57KM31QPGHByWW",
  "key4": "2Zh2SycnyG3a9abMqKvbm67DJCLKiE8iP3vqp8FdHQ6EQw6w9W5iv1FT5qHWRfpuh9ECtpvjkCKCfWVKrE2zHWiK",
  "key5": "2BKjckcHvaD8eYjRsA7d72Q6NArt2kU6YQMRdPnnDfohuoRtPiEkG3YbT2aw2bVMMgqQh8SaaDRK7ubqxYaAKKTF",
  "key6": "2MyQRX48MWiJaJ6qQVnuUgNfqNKXxpi6jBG9pDe7Xq7ywLULhnAd4mi3nq8XL2oamSXvykGo4P8K7EQ6D3vs2TXa",
  "key7": "Ev6XDUNgw1iZmf9cS6jwSh3kFQuUBmUqc4qfC7jv2cQRoSkXbGizziCkDTe25RH8xwrCjfjfzMWQKegVRLAZW6u",
  "key8": "2m88KNije2u7etFV2foM9kpDcqFDbMsicfy8Wb5jcJqRVAt3d1z7igEiW8N4cvSory11D2bZFNH5YUgrwBWoRjB9",
  "key9": "3Qstv4TUwCqafZ8crNM91xkKGoBWabsLHnrSYLvWNG2y1WXmM266upaKYAHWcVe1znUos83JRk6UFkyvr7xqWnTM",
  "key10": "5Fqn3RHXkEseejLmr7heZvgnbXZinv8uHRT4rDiFxYdmXFAL2JBRGeU9E6q8Jpc3ui5hgJ2M57JawSia2DuJdReE",
  "key11": "5FD6zuo4fhCaCVM8M1kJFSdXbeju5mCnUiKkjjYaixK25aH8R97LMgJL6bVrRQ5gQoy2E7Yb6d5w4YyHGEGw3CWf",
  "key12": "4qB56qYn8zmeHogpbJgDU4ZCKGGtEnzDVcfz1TF7K5iadimiwA9chcBFyhXXUBARVvREjAvNdozuATT3qnCt6EUb",
  "key13": "S5kyWHcAagVbuwJedLHZ4br8HhP1js56rPvQYbjEuVijKcXMKDhRDC3X3k6k1R4ZKLWwd8bXLSbG422kLMhd4Ch",
  "key14": "2QWfrhuQhxX1aJwAUeqJtQ4MJVnce5Be6L7soTJD9fJ25E8XRWauFbPGLtb6y1e5NHj28rSj3ue3BpVsyGrSGA9z",
  "key15": "3S7NougiRbYqer2u3AAHf4W5Eh8nesjCtpVH3XmYVKKMf3KDVBHc1i6qJay8bxwpKWV4T1vP6xgSb46B87ku12WK",
  "key16": "2Jb8ihBMgj9ixsTzM44wpX9QXbky7uPVzWixFmYWxURjcHWUn55tzNgKG46sUZbBMS36pfw2SrNfJJToZvizk56X",
  "key17": "2x4ytG5ivcpF7mA9GXkKre9nTQcDtXzggvf1Yxp9tcHrgLbv2r4FDWkNACjVDuYXqYE4NhBz8V187zKMyC7wggEU",
  "key18": "34idjTinyU2SraCrc1PSQno3U1wsqy4F86YMfWnG1ZghdPu2NahKYp2Y528ehqXkACNwm3otmWaZv3ZNpKBesZbn",
  "key19": "5MpY495P6kwpuTB7XFmBiLpAQS4ekQidbuiNeweGvWhS3LJTQsw5kjhUN8uAr2FnsZfqnV8UrA6TG1RPufHHZpvc",
  "key20": "2Rp3XovPEf8nPiZEuLFLmkp2crKHykHzaj8rgT9iy74gJ641VsqkD1Tw9sNmNhbPhChjWgiM6EJFCgb3ifrZGRdE",
  "key21": "4ALK7KDikFQHPH523uta7gDMjTSmVezNtEfetqmxW9r8KyLnKwkRXcnDy6bjveEVCXMDksvn49ikynPZwVCrPYzS",
  "key22": "41CPr6KoWEATmZamrAcTRcDAFJLsaBa1YJepPufaKhak62wtyy8vBdf4S6xKdCwAh4Y5hdGrunT3i9t9QzKN5RSv",
  "key23": "3EPQ6QaCFh6JFScDfYXECLU3wk9Wx5tWydX8GTH3XahexHwecBAcTMzxGdy829rUMMhSkRWycdktBfJcuPithjpW",
  "key24": "4J1JHhw6WWWYBtQPFMvemzmcTddQpd3wTvqp1MiLMg9dwTo1C19mpQHakvjA11ofH8YceB1J3BjMBdtPCK689sqA",
  "key25": "3j4v3zT78caUP7P9afhncsVGSPmhU6MDD9mvum9FX6mVa7Sa4hFwvk5ushJNmimcj4DBQDoBJaRnoYYeayiwnxdx",
  "key26": "3rSRYLGHdxT4UBWJ6UkbUFNPeL6pb772CNK1DFEmjGPKgDVt34sAu2E1w77bWUtmebESWU2n7LEoNswfzZH1shJx",
  "key27": "3M2siEwSEndtP21fy2wH4RAQxAYkLkuX2G7hqyeTXPpyNYTRx63feA5mmckAz7u8K6YCKN9WLm6RBff6FFDPJ6xo",
  "key28": "2iEPLyub3ntfhxWMzEBjMKgVs7RuQFC2pVS6YabNbuwvibgfg1fyuvV31WYdhxnzFahEWDNsJvgcbEFNCgvTKMoT",
  "key29": "e5wKX9UdnH2yWfjQiTXp1KqRNB7NKuaNTmJmjV81p2gnwFXQHnwVWXQ2FoYkUoYCvSzaBe4zURhkko1JkpX7WRc",
  "key30": "365fsaUNDjFLnDnjZmionCDW2ypmBtBbeUD8NJVpYhc4gwSZQ4BNUkWty26eynPq2ykkKuPu8gX7L1jaygssRFHK",
  "key31": "cSB1hMiY6BFckby1QYRodbni8DrPxtTp2Kk93Bx3BymTTNhh449gqVxCvmD6J51wprDM78xH18282PGW5PLVRVr",
  "key32": "2SP1AsKqGhbR81gby5RVhNkBihvCrqHXAFBoTQj5Qdwy3TuSh23edg7z8E8kGe7W4MKsdrBDtKxsPAc5a7W6CMqg",
  "key33": "23BtcHMxRbXQvygLt5es12LQu75c76WW592DmchcwtAqN7GZzmfWXjaSDH3DtgBZgcfc7Nn67oVZJTVTDLBAKxbq",
  "key34": "5dzspWNX5yqLLJMrFsDJ9j98PaVH63Ex8PbGUZ7e14PdnzdUE8PAU1sNwdPGwVBsbzWWCfFSkfXcmgUEZAA1kitf"
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
