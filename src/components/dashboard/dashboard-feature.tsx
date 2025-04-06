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
    "2wpudjTvi9yQYGp64FLC4x4Dwdi6S8Lee7kyMhV9ZV3v6tfMKqaZQkphPoSf7zBPKxtxbTPGa3ws6Bfe27sdMUNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ff6T1jfaeiqcHDU8SzFvsetxU7emhqSsy467jW3uoD89zoREhrNWhAGH32xURjynqEmvLKM8SQDFYZSZ7k7JTnu",
  "key1": "3TzEZ5YFNxGgVkzxvgToANdUxQpXNydchJPrk25iUCi7wgWT367mVnq28ojZChXbYW2LqmSMbErk9TWSvvCEHNC",
  "key2": "4fT1TbAETLdYzhzZFVhnLJKWYWVswFLhyFXRCAMPLa6bKZRnmc5fbCy3idd4XU3JpsmMoKGWTdmnjeM2G3zCPeut",
  "key3": "3Ms9v5sFLZUyn7HQM1ZKVcTcRDDhsdF4ZYdhH6z3gufWY4ENPVC8T9ngsmkRe8dkv7K75XPc4RrrSshuz9pP1sQU",
  "key4": "2i4LXvRwjacxr8fFC9W38V7S41RWE1hc75V5cJrihuyVJM34J3fesof2X5Jo3qR43sk3g4c8TrVDcxuvrAkBKRGJ",
  "key5": "TwKMn2LwocPduqpeSrtPUgdGk6vDVLwPi6jUKe6bFxhfEKe8DrqHZexWRY9mXS5ABUX75rfrwqAiVVgrSWHbm2C",
  "key6": "45xc1z8i3XDjC8bcrqVFYLjHWKp13H1QfRbwcaMTYnVGoBf57yuTwPrQSb3Tca7hdfdZx7ndQb27YoBL8echpEhJ",
  "key7": "u1DaKLbjCRM72qv4GCjWXrhfjLNYHNm6ToC5Ghy6RKyxYebbKM44s9cduPfVt7oPd81fuXv3nVzd59z5hocbNWd",
  "key8": "26WtdknU6iRbACmWUqYfTxxssywr4hjWpUaPhYkyemExCGouUud29CEgimPvRgn54KsR3sy1t8Lesz8AwyWDxEod",
  "key9": "2aKLkZr2ynpz9JW1pNG3k6cAvVvvjjwVJ9DsMSkXiMbKJ3CB6Zwag89YzVmbHtg5uLAvcNNgmfmaiPvyobnvTZLa",
  "key10": "HkanqFNAsTa5wUm4QTby6f94Qi3C6jx1WwgjUTc6qSXYrwd6yjE9nZWzzg3USrbioavwEVTjuVmzqPQMDtqBLod",
  "key11": "2NJVvynomAb845JsasvzLxasCwx2DmsJAQuswPaXr15HPMkV4ebPTs8UpGPqowQVhudzTsX8idreZfpV9PdWRzHL",
  "key12": "2HVUZSjimZhxy7ShrU6XoGyt3JwH6TmRKaanEmPfbnxvTg7T8RJ2Q1dGTNsS9cvjUKf7ZnPu1CBwKCKUMgURppKC",
  "key13": "4vTirr4RjCVsLsRvGCKDEd956m1E2HyzGNre8UsEn85NuTkMsRModpJJrpc8UsmvyCxLi5xYfzKJ6GkphYEGe3ge",
  "key14": "3WNudKmn8dRqrwx88QBswDfWV63XWFoTSEdSe9CHgur7kAeoLT8Ns1K4E28E3FABEicLXtHf4a5Bc5LF5vBRwgr1",
  "key15": "3ZjBGWNSJyXXSytGDi5ef3DcwbDUvetxfVmt5AchEZLoxY5GzymKp9k8TgeesSDM7cJVefRwKB7suExLfqtS5YB4",
  "key16": "LZjNF5QTNMyPa1RSUAECuCNm4EM3LkMgwhkvp5LvfntWjdsk949tLAQjnaP4jowDijooPcAtNRYUx4Pdu5PemcN",
  "key17": "2ouCv82cNf2nQKCWUPwzaw7psM8kKDGkZ44GYBVNz2PD7togsMCmgn9JgtfCYggCDRjuD95vSiKHtaxgsfkiXffA",
  "key18": "2tYd1ooo5JkMXsvs5LaaF8zFqRTF3oX2mX4nJcJ4UBhhpRPeMBwPRsTCFoZnPEjcfBpNXKvPzCmx9hwmFK3MwvFp",
  "key19": "p78Qa79SRdP4GRAsXpqKa8fxtcyQ3E34cXXJMmsm8Q5vhQ1UnoeRKuEfVr893Pi6GFcxf6od3dysrEv59xEnx23",
  "key20": "kiiaNm9UetFPD9VnvTwBfeATHUMS5XZhUPo48Qe53Y3twtd4bJ7uf9u733HSTqxxV2jQLARrw8GfwiVG1j4SChy",
  "key21": "2WXpjUqppN2eSJrgE75ksfZoSHWQtWRBGvGztaGC4PFPAfQsscKXqtfmCcQsQgSaXNKUG6k5XoQ6GrEdgpsKiE1a",
  "key22": "5SAABk9kEgVKcLoNFtA2v3HqtiVPHsyCcqU1zBtfKV1nrp4bqQ3XJFvyrMu4sAmuDv1dAEesdYDCaHeP3X1DYi9H",
  "key23": "4rnHXox5GvuCX23HJvRUYKwEEBDECBpPHheLXtVronyeSjfbDzipcEP7TXZERsPs3dZauGUqFxrfxBm9ZSU2jAWW",
  "key24": "2SmVZPRddFsqxZA6NCmsFPDKqP1Rr5W5VWr6UCsGSPxtN7S6ZgmYHLLq2wpUBAvxzgYYTH2LhZsUbFiQSR145rKN",
  "key25": "2rKAkFeYLwxcdFW4dAHg4RDnAbjS8tjswnLjSYrdbsMTNbrYAsHmcPyj7KxrweDMgXQW9okhEBLziS2kUUo6nXx7",
  "key26": "5ySUYx9UzZuvLm1WUEtc47VLeeRwNnYDpb38FAiHAMg45QoHNFNfAfgTJBgfT8iYNgvYpPFkonwY5u9fLGtRYKTh",
  "key27": "2kFZexVqqsdRB253ML9v1M4aekWFvVKEYnQeFPnDgbmLPav4ajc37QFTaZ5BpZoQ5w3QU7yooKP7M6qkKtPimTDq",
  "key28": "2ao4ZjkfoDyAAQrJhq4HnvRJAYKZSDVeWxs6FF1ADxXyqUPmgnyECNwTe5ncgcCk13PW6C9TRz7yivZZv3DkaMyu",
  "key29": "ooGWCbRHtEfVf6xsjP671jDkLF3f1DDm3d6iVL4nFJpKzxwzMeuLyd9vSDcjtmmYxqhLQHUEcdeAnQXCiBm1jyy",
  "key30": "51DftcgDAz9L5eq8pRgCmJ7SWhc8itGDENE2GVzWDuNkbDaAYnT3c6m5EM3Zcv1rqQXQe1mB2EiC1vwEy4BRBJGd",
  "key31": "35mqGGYzkjZBEY7fnZ51qjPd4AKTagyvT24W3fENCsK16aBfu4seLXzGraMTQcsth8DxGHBDgqdjCed6Bqjkwoqz",
  "key32": "2iFVjjUMGL2mzBYdZrMjdFKnCcJpEsY2Jomh3eU8pgSnbbVqvM5XZYNW9D7pLbf9qqP9ausvLW1h5oVgjGyJSdNr",
  "key33": "2hmfGxfuEB3AfnDQMXbvU7ujd2erzb6RsP7BJufWukb79mujCpKg9SBeHmurRqTnRkyorYpyHncqoVD3Rq1iR7pk",
  "key34": "2GgJnMRyA85jkDmh1VcKTy6aQmoEyCqZFtNGm8ULaDsFetUJJ9vBVYut2RxXiFqWBTpGCPve5s2ifLfLd1L7cWmB",
  "key35": "2wjKkSioejH1dXDRgUpBaUn5Z3D77NRfjEv68VnDLGCRd8fi2BtkxW8faZ5X4L23DFa66573XwZbitThbtEyyG4K"
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
