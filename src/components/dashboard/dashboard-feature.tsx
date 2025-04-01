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
    "2dBdfVZ2zxAWkGxbe1iLnzwNETPmCEg7gMovfzZPDhW69xwq2yyABfHLivY8sRdyks27B6Zt9KKAv93jvB4PebGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBL4KdZqetkac9rz8QAnqEbYqRtTjdCthXqKu7Pbwz26e6o3MnbY3PFmqp3EEGBTbXz16K4NF27MbJgwfVMUv5",
  "key1": "5FL2XySpB2C5qNcmyzMZysrEHnPHZjSkV2BpmBXbKRTrXF7gp7YVhMrDfwpv2CuT763k6cwxn2mZhB5rVvbg5cGU",
  "key2": "5ZySbXswJMCdGswzZfXqQyXqeu6W7hpY2cAKrp6tUsdMqHXGnxkuxJHrxkNejfhQx5WJjDKMymPss2z8XjGNbduk",
  "key3": "Qwmuk3MGWpzwy3KJVyazZjRjahhGDpi9XY6ij7QZLFEotq128LzPWFNSn5NmnTkmiNcJWwNnZceLAcAQZ49opAR",
  "key4": "2HXTqZHbmMGfsP5He9gHhShe2qSSqa4efRKbffFYRmP2xEiMmySUQhCwoD53r1v8uWfxjmHzJzFgJj3UcAWhKe3v",
  "key5": "5JoWhwEpeHc4x8HUeNJeugVcF1ibNU1SCXLSxnjntfxjJbFAsQzdeLNiV4v62Mpzq9MiRz5k4a3i6JZGU8Wf3kvv",
  "key6": "ZuHtz6Erc3Kryygv5QUV6sDkj1sMBpK6RYCVL2tDHGSi3JtG6ZiA9BX2U6a7bV7cvsAdxvZ1C7ySk3nJ8uEEsFv",
  "key7": "4g4zmymZ6WHnKWa4xVtZdbpBydcXUe2vS5A2zYvrYr8FnA8mnwvVk8GftHQRgmgTpo3Hg2wMmX4DB89aD8bbnVW7",
  "key8": "2eMhoRGKx2t5jUTyvryYwfNtCWsMbbtsQvknWfzohebgMZYNAHg9iJBF5hMXaHHRdA6oSMeTSbgXQ2oT28uXGFDZ",
  "key9": "5T9wacaoJ8dUNaGAWVLk6vmw2v2p6QCsfZKiepZ8EhfSsU9SG9ZvGYfWp862yce5oqgRk6Wn1XWJ5VntmSJjzHTe",
  "key10": "oGfZvEFurSDtk8cjmRSKV4GWtpyZcRqQGvLtUsxiFdE6R3yPL4213M52MthpBEyNNJhgzmCpKQqDm8zJiBA4sFG",
  "key11": "62oS5enih8oUCuF5nbB2sCfxEmZunTkERHgzrTRXEFXY7DByviYoqKHXxR3mvwrXgrCf6zBrBAC2ZGtYDFM9oqBE",
  "key12": "2Vq3kLimruquamKgkKfrDYnizWDgsucJ7dEDX4XfYhavZP37eb7Y7vW7okXzkj2oNAokE3Yac3sQkmxDoRSSU7bq",
  "key13": "4UVdQKAnriry5ptuRppaLp65ypVqxew1BAxuJZ9zDXYJqDTqPS2tgu3K1n7y9HKjSe4NpvgTeMgxtYADmUiDxGFu",
  "key14": "3DhFJCDKHwbReBZ9A4pHccMZhz8G9NjPMxSx4C8QaXPY1QFBM9ULwjoesXgbSbUn2YDDQjQy31uAieTVFY9WH7ss",
  "key15": "NDpxrqUDNU9TMJetW9HshbtTRqK1iG2ckDutAMdBEF2orE344RvjhSqWtZLwet2ztV9eFyULMa3ox2wvKNmstmt",
  "key16": "2TB4vMbzNNrSQaYk8sP6eEmPAeEchyFmjAybbirFhHBgyUS9qxcX9GDpy3MQoiyz8ofAhR94cgBiwcuUC1j6LcJp",
  "key17": "4hKtLKLN6YPr9GNYyn5chXNjuv33zjqM5vH9Nmk5kDCPVNY7tHK8YscuVVa93Xb4pfLVkWncK51YVv7fQm82MJjm",
  "key18": "4ewTUdGSNx6nn5oL68EnDEBTQFWnshYS4BioSLXMwcgjcMCz79hxti94WJuUrvNtsDYi788YixLXyqgsMoiDjhBj",
  "key19": "NiJtkatzvvG4BDzKwDzVe3guCFKw28i8xm3hH2dWxbabufBqvhi2XeNwv1v96seWQnJc3jMhUSARD824Ma8zvtC",
  "key20": "5EPQidMyLSBa1SdQ2LiovpjA7v1qQpGb9DZ6nZoDvuVbSzpFEqdQwGvQjZWQJbJ5cobGAPBunMU45fnwf9N2Pk9k",
  "key21": "61j1A8C3kvbmztD5tvvwSAUyQkH3GQNiApSqXRLHPUTaTBBqfZ46X2V8pE2Tqx8q14famQMnsWm5ZnY2LFQAUqR3",
  "key22": "35G3qQihCzN8WDKF1sfEHAr927UVaSpxnCowqZNBcrtsoBGMUoFHNEXCTw934kbpCEA3Pjk29rMAv7qVP8hyuscm",
  "key23": "4NQG6HGMwQHErCFaGgrHKp8b6v8T7N7ShxPJWR3p7M1M8zM2rz67j3udujTopdG5NfNNV5PXH9CbwBE3ZV5xSh7g",
  "key24": "4xak6Qw6cvvYyWj12KMn62h2xm9Ahdo8urQiqYouiyqjRZuM3oqu5reFji6MstxaRSXykV9FDfwMwU9gUz4ffhU8",
  "key25": "4HFTWgVA1nZyjFgomqHDCZjfF22hMCbykDZidM1yx9je4qrzFer74kmSFDywhnELXKMcj9Z4oX8r5XYbgSGgnC45",
  "key26": "56aKKfGJUchpeRLQEAcACQVHNQzXSS9uxs7wQme1aeXvjX7aCyMcz1QhfSpJvUUArT4FpaSXXMEWwmXuNQP3XwAU",
  "key27": "24YCQca1SLPNWe5TvfQYPjbjipzpZsxjoYKXjWt1yqSw9wtZDCouxPbvQVy2oLv438H2FniqxBLJ7Zx6YijUKG8a",
  "key28": "3LXja5grgxdahfEbjru8riauD6i16GBJVKwmcj5KiPsQ4d52sr369Mo3abHQYJ2wEWn99YMC1QewxGu5KDkqyk1A",
  "key29": "RHPAiDfEgwt3LaSc3vVHG43LuMrCCEo8aGMkim3gGsiEqyXoFSGi8tm9tfuUC6isEV3nRR66yKaWrpMDXMj57TG",
  "key30": "2khAjdVPFQt4uLLG5EE3RBEeFXaVvhoJpnW27rfhPpCLYXvVMQZGRoqMnfgidPt1UMg47wbUG49iLjULrw2uGvAv",
  "key31": "2kx2GamendmgtqMvFi6VMAwjiQPvJYFFxKW94eQBb3orSqtGQjzck4FrVX9LmhDMSfrkMTAbD9gXxgf9nNHuQ68D",
  "key32": "5L7Gq19rhwcr7kKcHtuTvLHasbCJmiGgPfGhsnsX5Aq7Ajt75rnE1VHUuGYBvBkbLU4QsUMbMVZYc5ae3qnDvrtg",
  "key33": "5XsnLgRRCDon9TnNyQMohBNAP51wMQ8dMc83fDdBj8r9tEsa1o82KbjesyFJJk8F76AMqyUL9NrSCuxziwr4ZPAp",
  "key34": "5m2rA7qwfjWTRqfUEzM3M9uRTbEyHDD48pFTDXdQS14vJnojtM1et3QmcMEz7VRFTGAdXyWVjcvukzRZANeepAQ6",
  "key35": "3cfeh819BikuFgVUiQ3a5EA6ohzZsJeT9iQoecxFhAEXEXysu52fL4JXJ8qBtYwJgcfKzygQvrfHDLdLdiAF2Xxj",
  "key36": "2ZBmNR5x1TZF8dQLLyBdL239TZn24yaMvCAvG9y5LHT49sTKFtbm9ud8Z4Xs4HVQru7oGwzZLtB9gDUM7TZGCsot",
  "key37": "4s7uvCYPf7xkaxqeSei6b4wFLAz5UVwL4ZwFGNPfpsbgatpKRRokvCAbmt4XghpGaDZQ7ssPizdUMLJq4nnNCr3S",
  "key38": "3tJ6nwJBQbLnz5UfNpi9uBPTcDv7AC5EgUgiPsoyRLYfWu1PTSBgLfnyik7rkJgH8QSayBH4ECCwNcdQN5uc9jU1",
  "key39": "38kfMjeSnGMjjvxDN6hkJHTjK41bERbr6hC3664nN8NCvaEcwqRgrmUr4F9Unba8vPXMwyoxuVKjebLTopXUwHrq",
  "key40": "24CNLVuD2Psf9GSXGRX3vDnoftVVf8LUwNyQczt9Z6SJnuCC39FPUAQbLm6oV2awjp6YAsxFBh8EamEpCGmrpDge",
  "key41": "4cAXvwf8bWMh9FUK2qHbS4LFfbEL5nviQHpcyXmwC8h4eCwTV4TjozPRTRvsTdwdvpamr6xTHwNCFH8wnGK2Muk5",
  "key42": "3LaVZQaNWUXANG2Xr62aEmjc6kppStdSdUNV5A3XYLHPHGxEZqoKKJRmELsG8Z1wg7vhpnBSDw5efBTXGxT6SBtz",
  "key43": "4RK6eHAfz8p5e7eMDdpabWDkew7Bmea5Lx25aPKUsDQP7MAyKGbrGznkPKWmZzmAheStNgy73GB28cgjjrhS3MTY",
  "key44": "41vZLjPML2rauzrYr1eRRov4dvNcy5HcWmiZ6pnVrCDQs8TyFyJwhydHEbi9qmcQ51oPehVNuihXua9TUAPodb2d",
  "key45": "4BusLeHqPmJ2pSDWtFPEfdbbCLgF92VMuE4h3ihu18MdzdbSGGZQwVpKUY7iFHtRDLYAw91AgLFeMLgKBAS9n6VR"
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
