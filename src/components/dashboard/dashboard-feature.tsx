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
    "4efg7dvj899ihVdLDzybDiwhBXz9AtP1XK5aN71HZborvYrfitsBnohWhJ2tNBwWtH2zH72szaTQKmtA2dqKYmm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XCDqeyWKBMny9gb3qKoEhXiRF9i8NbbHBZSxEmryey3rkp6V8U8nDpXSy7eZ6aAQcfemADP9j9gHti21TRWwjAx",
  "key1": "4AAEMMjjrnyHrAXJChZsheBZumCSF1mwzyKodf5JQNQ9MKNd1i412Nm9QVJG9CUc36ZFLBEM94BGMrxHYTKfZEtB",
  "key2": "2pTM68S1VTKLDSdYVMLZXTGfzKEKZ2hZ9LCYT2RQhXvayJgVSCzdD8XrMjmDRKCTnrNkDdvmcHgFGM9sku6QZxrD",
  "key3": "52PqggELqwJezEmainUQDfZBqKwywdubaA7fsVw9Zp9RzfxMrTsNtJdPNATkxaQxsBVQ2TgKHzm6Rys1NMqFyYFM",
  "key4": "5zzTVhxMyaA4qYxdJzs9RnEuyjA6EnWH4wyUNomsNquZFkdYrauXeadeqzhrR3V8r2gH7gRuQxKZeeHpPXGNZq2x",
  "key5": "35jyZ7W1qwDBCUMB226NydNcjsVTcweunW67Y9iBGDVe6ATavtzUqLmCQQ15m19ma4EAjWeQGfJnyZwNVqJ9xj5i",
  "key6": "WjDWoQVwypaG7b1ABBk8yVAr9FMn8R4c9P581UiTyd3hMLuXnRMksUSY4UFTzxpFQwN2j619Vz7noeTS3sDZ9sC",
  "key7": "5qe8XrtQcNgBWhgFxR46hUEjMieSJXwGAoQ1oGER1A7F1FuM5rQ5x5bC6CoAF1VSR3j1AzcfZrzZLRqDaZyV8L22",
  "key8": "5gnoRKm21ZNKEb9Z5qVnUttPfmjMt2UbofvJF51pH19BnNYoymkdHdnvUVQcVRv66UajXvDrPGB2HwEzLqdz4iuv",
  "key9": "4bFSgTguSeRZi2ZS357ycMW4hmKk6PJ7gYidd4NUExvX7Vs6JHNb1FUoqwPVatMbjkiC2y6ZzonpuvPwUQztF9v9",
  "key10": "4p74Y1mfn3DVM82w1qpzhuUMFfE5cXMskVCBGcQYkJCadN51nU8Ngvy34YBiabFCxTixcMKc6RpLhX4sLKko2XY5",
  "key11": "3ajV3E6ZNKvqdsK3dQt9NfvyV9AfAEyqSNmwjdeFf5bZeCNMUT9JkvVXtb8dsHZ3Uzo6zmDR1pj8xvhoCemsSFc8",
  "key12": "3DExPapspdDm4Lj3UZBr5BBM9ZZ7AmG9KcUaWe2vfUCY3dy5dG9k5auwdHyWZtUnJ1ED42mDug3VZmN9UXbNL1PG",
  "key13": "5kHhhWkohTDFHPEDkGdrfYHaaDE5vrrM6u1wkmL5AJF4m5BZaNn9wNcDnv48XiEnzA72DduUHi2A82VG3RMknGKj",
  "key14": "CgZC7SjqHfxka7MwQ9S5dojuvGcFRMhy6v3grduTeoCYoGQMHmXCH8JQB68KXf56WR5pcyBNgZCY23GE6mTGeQD",
  "key15": "2g9Pzf3dC2WocrXmvGXeDejjUu7mQCu7TNuRZGqyct8Kd2qinNqFpJLG6tXoxA6eJ83mtVpqJMdtQbXvDG7xP9M4",
  "key16": "5mx1QA6fErGXht1tQaov4mEWbJXf554WEHKqYuXRvrkMs7aMtp8TtdLE1zHZygXWzm3zXdJeKbAnurmHTjbHxiYy",
  "key17": "4eYuckHSDXFT8zCLxfu18EHJxnfkBY33Ly6JiaFzjxcdN6GqVnbcEHbQavpVgCBAkPod3F79TNLraUMDwqzv7N3H",
  "key18": "mm7hZisbRyP2RZmYoe8SabLe2gbwNvgnMrwVDXkyGgJuNZY6muN2rAMtyu2Z11Y1tXyCBziRNYt1GxQn8gwCH1R",
  "key19": "3Pnek9P7WDPQryiB3Jiabi33PAZ3WFs6NDjHvcwV7twJvSGPTTa2SidR384s9JgRkbRhujZ8zkerk9GwGERsG6hY",
  "key20": "jP4Ex5bcqU84EywcVfpPURJL7p65YSHYPujsWYxF3tABLKxktvS1LefKCLyokTaxtni2CSVUw13f8jD3BEgwzMN",
  "key21": "3KJYtgmqN96dRezkQaQHDSstRXjh58UzFgkabh2tFyDPsQWAAHJSg8arnjoi7GQRvfANXgiKKD5YNLiaV754nJ83",
  "key22": "2MuZqSHFPQ5y3D6v2R59zyUqDrVdnZ5qC4XoLLC6z978N7KwBSULX4Ytdtdff8ZU9S32TKm3Z3FAZzGqtTa5xVTT",
  "key23": "5M7q4p6ZAoL1Fh8FLeXz2o9AEMrs4B5zCrRWh11cJ8arbFKKphydZj3x2wp9Pt6757WZXGRcWungJxFjByj2WcYy",
  "key24": "5KaSjjsVCnXFXp6P4T7tUPCDjyBmBhQacJbrR4PjtkHksaCqerYuWkmsLFNpGcPGWY4biPt9bB3KvQrh9yM2nmzW",
  "key25": "wQzhpdk8nsGm65NgQQovneyurUBdkuzpotJmuU4DpzLHxRSp3MebhfqkRN8Mn9oQqFBvbGj8y7L8k6mMXnstc2q",
  "key26": "5cP7mCpNTsmKYoXGK5K947kKXpjZ23StRt7bNxadrfLU2y6iLrxvXAEyDWjohyxijsk3qo87McftCG1veqHKuMKT",
  "key27": "3Fmn9p9N4HhifrffjDDrR9Kqkv8xNzc35MxV8hnjvXxtcdp9dFP7CqvRNt2fWDsiaDa2PW8Y5teBzihXtZ6MgXU9",
  "key28": "2ghVsJhZfTFbjFxXVqresRYoTu29FA6ukVjmGivYqC8Fspk2Uf6LMH57MJ1xgdv4R6yFPdobf6W45Q8vErrCBa93",
  "key29": "fQse9QeqrnZqz5gLAdDqZKDe9WBPWY8dZGK59v9b8Xykd6GWv8wht4M7DknZcrqnDVoX5j4PSGo137Q8Y6UP9QD",
  "key30": "5R9PuUt96vMdvqW2r4JwLmopkYde46tBvFaRqJkGVUvY3mFi5cqXZvNaw7efhfQukvpsZsa5xFQybYhLs52Zq1Dz",
  "key31": "qZaaoYo19x5Go2ifiJVLaLMR7GxRhZt6qN7zD2umttyue5qs72axSch7sEH9FEae7DaFX6P95FRNinNY76goK7W",
  "key32": "44jYs5PFpXTeB2zppbvgzQQNk6uDcQE8Xa5pr71VheiZAUp8r7fZsRWrEC2hbyApBi8vvHtwVvdr424wqUtHbmKv",
  "key33": "26WydJqPWb8GuPKCio3Khj8sq6UsMTPEAjM1azFmofTrUHY5Y7TxGU21aenTsSqu6ptAzJmZbqHYuHCiDPq9dDbZ",
  "key34": "3AXFXZZVdkrRR3KMxY8y6YfE5kW5tHXEx6SiATbdPiRW7rikMDjKm8m312f9wK6sMwThsz25NfYQ1MAVYV8ZSHoP",
  "key35": "2y4HfBRdXRBj2gZQCXnT4N7fvCZZNJ7RM2bENi8Wsyh58C5Yebj3f2B3GfEynr6CAqLDJz8pc8SGijkJEEBT7XHv",
  "key36": "3YQPa83NapaJxYe3hmrtWyaFrV9mjTb96Tq7iH6BgV2Mf87CwUxUMzTT1KtTnskFmL3aydMxzLcPG5xevgX3P1BB",
  "key37": "31dvvEq4ZAb6zvYm9Wszz7HP8rYH2og9aLRwyaNFmPewgMed7B1bpWSz6XUHkVSCXW2yq2qWeRZ5t4EgHe5Xt6fz",
  "key38": "3BbXKYTRsZFu11WLNrW7MWYM4JtWqb5oEzzY9qHuf4R6WebrzUbzVCiTonwXJohxcX3Tqw2f6UcDNg772UFJgTzb",
  "key39": "2GY9cm9tGrPbfKeSnUzqMKNspEDkFxJjdhQJKtHacFs75NNmcY9pNztkfspAH1Nwjpx4qwThpbXA1CMTuknmPvJk",
  "key40": "36KJDVvFYipvUbsfKumbQrSSRrAPcjyr5Y2CEDkH8z89so7TQ7xcdWC3NGvToGsN9bhHRvQnmGerxNsdjdNt6kbz",
  "key41": "28mDQ9um73KS7UFf8DPjJfJGPsN7nqJvaCA3onKwkRCjVwLkRvBCKPDLd8kVvGd4mXXJy89Jmh33mzfMbVNB4GDz",
  "key42": "4BHFQ4Uw2wbnuD6tdGMqQjqwQEce47hiBmqUdL9fF3Gk1PVSjBvGpefPZ23vgVFoiG25VEGYfiTU72bMHj9jG8bc"
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
