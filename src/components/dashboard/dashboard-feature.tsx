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
    "4sNzq6GipkC5nD2fRBLKYAzjRSFf8uEPTDhMehaNXtFoHi4M2NxT6A5wE1xMuHrWxMcCgcpQ5aPFYUnx4r2CJaHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUVhf8TxEDmjzxi6aQYw67CLSnmgPQzzQx7YtYvrdHaTTDhFyYfz9YcKf9WbRpo7R2EKnuaz4RvPrFo7ypxaAms",
  "key1": "41AiXdxp6Y4YhG8cjF9JeXo8PBZA7f2qTCuaH5fQ6KeWDbqHp4NbzzeiLCDiYKozBbjqJwUAz51jV85gfzzoSRFV",
  "key2": "36b9d6ioqwNbNSu8bynU1W6w8oR35UhxUiM6oEsfRLD1ywCJ75aVPsdio9XZ1my7xKr9uQW1zzrv6wcuJmGyz6CX",
  "key3": "2Pa3JP7FqhwHabttLmwoD7XWbjLQfRuJhyzyY65UeQ2PHdegQJc8FrA2BBM7WEjFDWUYuVFGXidmGtrw2rbbquES",
  "key4": "38iJ8SA7SVyDtGouuzkzkrv3N9Dj3UEXKYCabpMbdi6WG51oH3WXqnJoBHVWmmRWpPLst6y3iK6WLKB6fVgjTM8G",
  "key5": "4QWtWK7ySbGbWdQjAJqswsNjBicDHoaJ7fQM5opTkZAwtdcvxJEwVxcgK6FHoswbLZVyRH1tZ1uMKjheSAggK6fc",
  "key6": "2BDKfyukLA4WoyqNdQYCs6wJ1hgSxEYYpKofgRchkRjNcgLJx1yPVzBnVZPphj9Hxo3DWyU6shqjJGH3ZpJevhgW",
  "key7": "38SuirCF7AGMtsyiAS2BjSPqjAFmsZGFdaAGzF5xEgttxxxeZ3e21U558rRDoYNoPCv3tGUULG9h9Jbq83Gr9yt3",
  "key8": "3jepBgezDdocW37gshchc62ChuWd76fUW7VR8CXCcFpGscPpJd8yyMJtMgMsbWV3oJL5jfu87KMMhkoD5Xa5APCN",
  "key9": "4whyEsZXKs6wQjuHa4qpzDjuHjj1qxxuSpuaQF9yAUV5zaHXZ3y3pxxS6riSWq6HpW2AWEKGdRvythQ6tMrvj7f3",
  "key10": "2jKWnbRttofvaydDAoFmbFd1WEJRcfuatJCfQnHpdWaNcTxJUBj1inDbmkBewQ8GTdjPM17NsNWN83jio9LEjHiA",
  "key11": "61csPYxTnWbZz91un4opkzxuKD87VZ55fK6yXiWsV8uEcPwYBNHGUmag5a733QkBFU2LBgY76gBKtjyGwtjJfXG",
  "key12": "4TFMXbxNmAsjhtBwPKL5bdGL35cnMu4FRS9927N9FkWmSVw4qsLQzg7K5smuVxtERDHpF37gMcmvdFE7JARWkAmx",
  "key13": "4qPrZhTDRzkGaboeEUj7MFJVwLji3AboWyMjmG6LemqxBZ1CYngMnPcTstoeNdnot87NXUTwR311yBpf3HSa6hDv",
  "key14": "63hL3LwyFkL73FFkkbVGMVfsBHt1Q2SSJpDfZr4B85Si93Ph15qBELcU9xcsCwvgrTvQS9EGkGAq4siUiqaAkwmX",
  "key15": "5sZxaZ6zWfqPYcYpx7rNhUzBsrnG965Xi4W4NCHrXdrreKRHGTA7rQ6gbDPkz2P1xSL2ZWxgQMQ1Qai8SVsF5Skb",
  "key16": "29TCRu2QdwAe2dxZqASGB5r76nhCmDmrsF7Ekhrtc2uZKfo1p1MrZJtmumXDNtxa1zs8WSy1LDerEXbEr7rYWY1Y",
  "key17": "VBoeVoZwrjr8wRmDufwyFoUcA9y8kXbFcSne7WkLBz9u5R6cTL6kgyh7HeSVto798agtPuXhAnzZCRKvP1sS5Mr",
  "key18": "4cSAER897MjasLVCL3tNWx729Y5NAiG3G37pcDyV8LsFVvjt9LmJhZJKMGH72nPiJ9i1JttEjXfZQXpmbPPQjyrq",
  "key19": "3XexeNR5g8iXnZktvciZp6m3V1dgRDTc3SsTkwxTFHsqVnAcs52Ev2Gn8NhkeJgFWsDSnuYvkjp93Mcv326Am3y9",
  "key20": "5NX7UxoBjvJo1uyVmNNrosD4GcQCPihtXADaUcMCUJSToofmARgkMy2fixDmkK2cPfESFH2vpZ8CYSA3MEj4XUAw",
  "key21": "ka3CD4RvXpkyQ9ghtX7EbhCWacZVVKFB6JXYj2QR7kLzaNaMviNSkpK7DLL7g7V2AVVPVJetsxLMv7pYr2LP3t3",
  "key22": "AKQK6LaQGvnTNWKTTpX3W4ToihkRHZuyuLG5gTSmGVBD5n6qSngAv5Zo7CfbuGBiWbn8f4Ba6LyWhnee8BNXgNh",
  "key23": "3XQfe1kjG2UrQ2uY7d1wqv6U69wh7u2XYE5uoB7WkhoASpVvdEXLe3Zn2dB53EHiQHZoAFg3KPfZe2YAdzY9iwsU",
  "key24": "Pv5C1LoxUT5jB9xbgeGC5Cfj7dBo8emnbBjSMUyZYtf511qGmde8nWwTgeBNrtFjqxw9xkuDoYiSnwo1qDrfhef",
  "key25": "2CgnMZkjJaJzEfDQpmkrhdL7A91395xkF2VgUt7ZgSGuUXG7g9WUS2K5NisHoa5Lb6kDVoHo28zWeEwFutQPrH4m",
  "key26": "5bTY1hXVXojrAfUrbwFqrNPveaaGYGnYPFAacBjFsrFdZBaWUfHxPmm4bYf9maGkuqBTsR3gTZdd5kaAvDdjPByn",
  "key27": "5NV9wu3C1j2jGvRd6fZChL3dAoRcn6tTp8Ty1abKTchGweZmDNQqxhGZYvoTuzWkczqN8AHo95QE4p9Lv1eNXxUd",
  "key28": "675ow6B5jARzuF5sbg4MJpXX1eeSYggQbAkhV9biUhLn9BCKZLsoFXWETrTW8Hy4Ra2aTvrX5KtzvRn4Yj2SZDvP",
  "key29": "4xTGchm38VwgfhA1GX5uZ74HnyGVFzqPQdTZ2FAHUjpj4uHF8XhqHRChVfSwnZPRpfPm6hyPYri5UBgN1nSzVZ6v",
  "key30": "4opRvisxsUCcNprQHsZnJyQ4eFkRYgXGEh5wip4YCbt99WwStaR3yNZoZE9aBVhQEYiAG1zDKMMa9BzTXzv71hY7",
  "key31": "5FiW9EXtmFfwQBQ3G7L7iDC1r7beEofg4DVY815qibd9m7iXRyAD97ga69aBYq9mn4A8DrLPsPZaExzC92er19Ef",
  "key32": "55YEupaK5o7K5pGXcS6vB1j7XjdgAL7E9zTAHC7j3d8fKsSFv25vQF7kgzRG7HqCREi9iBtLRjbYXo7xzkuWkmx7",
  "key33": "5dXXENimaaMywNAHTGBeb7Koh6R292ubqCpersvNjowsxtrEYaggHiq8Pz6jN2TUuuoJMS2syKQ4ZVfs8FDbs6sL",
  "key34": "UtuFrZ2sNiNubVLkYCfSCcrjCNGFWtPcmAk1TzWSEUDciUiG1uoUMe87MBNUF2zYReWdKS8ZXdUfranH5VU3zhp",
  "key35": "63ooXuzfcd5D9Tf2X9qAUhmVcR94L5rNXDwhBKFF1yqJgcHjC78d7C6fvJAS4xahqb6cHjM4Z8SLEvLfR84xT7UR",
  "key36": "52UCVbxfzF1xZRirbCcSVuYAnkng3HUKe6euFob9Jum6QCEc6A3SXsCuSzvpERgvaJ9Lu7NDqE5DJUKhLwu1ohCW",
  "key37": "48ATiXoKwnk23cUg6mowGGgrcfuD3ZUfSMrKxbY127V65brepXPNdb6A5SxH8Z5DSw3zfEWQRjSNxisZwy74go7q",
  "key38": "5azQ8r4pFPrXa44BJkvQg8gQ7Tx4gMVkhHbswnmeQQpygBrkDErwe2QkzGNUG8KpTYrnMbzXX5qPa1BdEZVwi6eo",
  "key39": "4xdygSeYK8w3ou1qaUtS4bbZdZkuT2EnkxWs4y12G9q3NWEmxrc9MVuYVq7tEekatdBA1rpfZRw8pAGHcZzhBPHY",
  "key40": "KWhDAp1FeQhoLpsXRPRGhzZAcXSxXLo7cTHwEfctwdwSkJrs7ScmTZ5sSgE47LkpYDPpitkz2wznqeRiHyND7pM",
  "key41": "Xe8vwY4D8JrM3FdCUrWwqzjqqukC2squxuqUQZHLxZurFWfzTPQQhxoccvtr38W8Kin1JsUUV7hfYtKpmrw5A1r",
  "key42": "2xKc99fjLBoGk7yEmYd1myJLer8phn9MRf5NomCdJyk2QzzNejFbbPLtssBS1YyZY5a8GWSSaQVYME67HkSmEpxG",
  "key43": "5VEahU31NLoxbUU51oV3VxjR84c6aU6NhjZeGBNYdKve5CUtLfQQnRbiQcXC29B8BpeR7F5kjRjuMNqbwiV4sKiq",
  "key44": "2uuE1oyN35mYoSq7J5jgPDFaxRSoqLjESSx3w5S86TuJSyYnRwRJ5uLhKdj1joreW8Qy6BtJ1jY5FY3sxBjeXZaU",
  "key45": "3CsESAyKST5qTuFyEuGRfEkv3h5EUVHcokcAuNcFzJxG3kMKj1zkEZNz5hP2De3Skhurbzy8n6SC6nikpWWtHKTP",
  "key46": "4GrN9bAuG51AHjvpbdKArWfXiSgzsyqYuunAEoSZSsqVGNUkXJoB9Vb8ZPvhL1mWvKRtZzmGvttzoCRgNm8owqfK",
  "key47": "48tZ7aJfch2qbSzWX8ghJxhH8QZFsZDewHXpWd8fDYJK9f84CiZ6F6jiiZ55BAzhropMzjzAP2o24QG8nZ4cHrGs"
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
