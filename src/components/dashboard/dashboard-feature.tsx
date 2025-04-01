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
    "5pveWfrxnVuwuNESxb35D6qZsqgPEwRev4mrgC4P7QQYhzyxjUVZEfyQQTTCC2XMhyj9fSCBayGFXS9xMG9wE6Uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KQnjxTDuwQAbkEVZSDP8tckwGue48tN5FzLt7avkNXrHwtyWbdP29QoS2XKxAjgfX5SkkQHeEkuZDZMJe4cKSsQ",
  "key1": "4ZdT9QbsE9kC1URFiYubuR1sUW4LCGYMidLz4ni9uf9ZmdxM1iP68fPt2QWHDZP7yb4bYXxcjE9kgErZMvzfhUC",
  "key2": "oPzMzwWz1YgcbTWD5nektoRi8jaLKzCPjBpEDjfvgemL5yoxztYH9AnXuNhz7E8TS26Au4rj8XZr68Cn2k8z7Kh",
  "key3": "5HuKBANeXMCZN5MhHRgnLqzEvazymkE65B797jR1avMdj1AgX56hvnvWhUWu61t9yLK5EhBfSX5tKCCqUhfcVzbM",
  "key4": "QUB8CM2KTXVkoLgkB13mQpGCLwg9Eby3DHVZuzDLrunkJXGx8Fve8pCgDGPjbrR9RPEoaWmH5HrqVuKHkhHi5eA",
  "key5": "3T1Pw3CcTzz9jrKEnUqMyZECnqnG7SS5B1FZQa4ZBTQJrc3tEddKg4F8xfTuqcTx4HLkmpzWpqh6a3CS3Bv4yzBp",
  "key6": "JZ325z7cjTyqL9J8uukNTV8fYBSvjkSf7NVedYzxSkTBkA2PSQAx3KGqjNKsnEh3rBWYV1LF4jRptNwiMq14DSR",
  "key7": "5VYTnhmBemBcLy6kG87krvmcEoade3ev997wHwWR8QqokeSBc5JNLpPLE1dwmXMNVKou7nvabuXn95p8uRaTpcta",
  "key8": "3jffLRgsaCGS8uRJXwieJ3NbK2VuLUHU66JBpecZgE355jaQ4iQpV9EQx6PTNuUM7V7F2ECXZvMt5ZFsKpxsyPvw",
  "key9": "2Rg6oy2SKDwYKCQToyyTBmMASHyAAxAekZ99aVm5dsLRM2MP4St3dgQfGXbzDyChULoL4gwd6ZApNhfPwg7Wx3ut",
  "key10": "4mpUrb79DxuJ6Qg3VCM7hmFx1q6YQP89eQihVvhRDEzUnDV2SfxFewyX8mXhSVe5h3PfTGF5VuSeeSD1cVyr8Sv",
  "key11": "4XVE6APhoSuxJwX16yQN6rvNfJPkooz8Adg2yByrGwZuHRzGZ5sGqNJwwUNCBiUXBpQrbWZp29vVFnhb2xLQQKrV",
  "key12": "4J8hxEAKioEhEFUiTvv6Rnen2HLYye9UEPsbRwHrLW8r7UDiRj83ahtfDXBtopDTs3hUkabDG3WVr45qeWy1T7yd",
  "key13": "4sKfEKA9ginJ67Euv15Y7qqMft2EaZTyr2WipJbLb8vjhnoYJzokVceJUEgb7HHRBZ1kF6HZA9tNVMZP3WK8zbcE",
  "key14": "3MA8SEmzFDXVhEHB81SafD865g1DAY9pLBGbXDyrif2yyWWdzGHfUzWPHjkXT7F9otD5drWJCyVGmvxMiqbLTTAG",
  "key15": "3GaooFNNef48NmB9Y4d6e6GjEcsjyRCaLq56EqxZxxLTt1xaTEKvadf1GF7XXdYtjZUgzZuTw7pJf48TVpMtaoaN",
  "key16": "5TPiGV7R2ZhwdoLbdrk79KfEQVnmAg1R7WjaC4NRbDq9pBwSs76S5RHpE19iqz86sZdDWhsnUzSMHMkcUdf3Y6Jv",
  "key17": "iuHtXWm9QyLny2b9ZJzAQJN1gcTne9sHSK5YobBxvPGDPXxDUELpCXMHgk2kDB5xJ7rAobCS4iqgegXmdWTGsa4",
  "key18": "4864dpTYcNrm4uMVT1BnY7jmRM9Gyr9tDHMHEYFV7TTYPrCpKgvgFUyUCLXNizimEH5cZckkNVvvrPBBhQTQck5d",
  "key19": "zDseuhnoBvi1bT1b7C3NyhCWtmCfhqLbNgGMa1qy2edTFZAybF5zCV5un2GfhYuzYdisQkoZKqidQ3gX8sXQ5ZF",
  "key20": "54FxGhzcy3nQMcLdb3vFNra7zwha9twtNqHeVyWZ6xa2NnwdBj4E4t2KXEKQrmVPgqawSgS9HCtuLf4BPMzBW3MT",
  "key21": "4c9WccsoUwGVURW2j1ZRXY6WPScRDdYNrF4PS5wJwiKjAuQcvNULqJ9pMGw1LgPLciRHyYCVrkBMjq2muaqEYBqU",
  "key22": "2pENKZf3o2JJehiL9Am6buqSyFv93He8vWqbUKQ3PLVqGHZoMwCiRZKzPcQXwPax7VHHtVvwoSGacFF9Lq5N348x",
  "key23": "4uV5yFjSZDMeAD8iN6oWi7orYV1egXWr6t5AchZfUCY2TmM9w8wNsXc5qNuSi6ZCxEHDHpdXqTKnFTNhwatboq36",
  "key24": "49hFaZ6Xgv4jZvEannaWRsUac7ZD27DSrQnrMTYZk1KRL5tJF2qwRQQhaZ4kFQpX3i5dBSY1fJ59ZiEpWu24gFKT",
  "key25": "BkMdbr76rZvKwNZWhw7KkmDjrXdBknVMhvLtUddc29pNW2nK8CJsvGBCiTPbwZgtNxKJuzK5cu2EuHkXqAMAA1d",
  "key26": "2RLEtNC2GvL5wBwbE9YHStzPJ1NgjMb7qr9PbrX2VxsDY5u7RbWKw7JhmHnyQCdSrDhWgpxQfmXHLCzUGucG3cQK",
  "key27": "3rJ9j8EPrNEV1nt3Mruwhiv8y96umwGtreQLsDPiTYduqZVBp1hLrb1sdeicaZAv1Uun3VAUsVhLDvwG2zPsXUb6",
  "key28": "5iBtgncbAuXzH7rdBGiuozZTDVcodTmMw21fdv63rtAn5SjKJNDzypApSExZZNYGtmvqdS9Jq1FQ8c7hivDNzQpo",
  "key29": "2EMQmaYVyDgHEkZyvqXmatCwGfzam114WkeWiH9W34G7VLvCRKeYQzQRsAHbuyM1ChdBhs7jXt3176Ae6ZiZVCff",
  "key30": "3X1ZNPPLRJoHHmbvbqxq9s8Zz6tCsExtdkgWoPPJzRrcJo5QMeKBfKXA5tCE6perGscGXnEN7vY1pDRNZ21avTCb",
  "key31": "spyuTx3THWNJZxamiT3jgjYJZJfFjNj9FLWYWc2e9hBaGBNNC2nJkD2sn9zXUP4qYRnkFak9LPqGX8GnwYBhvVz",
  "key32": "2Gvr5rKhssYLg2kREnU921dy3eH4QUwzKwy7zuEzechKP4tydAht2ua98MzeMi2b995cw2KYaE4fVNHqEYK3A9T8",
  "key33": "56HqHiKkN28Rgz3bGHBbFougZdkHdhLiAumZTJuNPFvfxvoFfjvkxxbqh7cF9uEk8nQwjngHU7VzyLVXmjLmY31s",
  "key34": "5N5cRSGLAAZJhiFHbCRVSyBrnuAHKCYjqZTN1pn4uy8pB6mtbpYwAbBTgLPsHMVNZrA6vS2cv6HPJoncN1g7X4xi",
  "key35": "37J1MZEVr1gTzs1fZE5PkbVoXwrFNMDRCDbPdSt6G43cKkKbx3do46A14NGoDoUE144HHkQxMvy3e2cHdZpmfTLX",
  "key36": "8zAhssHkiZPFSwESd96iZuZxTXeooa9YHikv1drTqfXH4DwkQz9pKBPEB214Mzmt7eatbrfRvWRwbg8fKYr7VyH",
  "key37": "4pTtNRxut5ToWe9uTCVRE5tjkV5ivBcUH56ki7NoGh3zxKs6Bu4BCMsYa2JjcuSNQHVkFWUyLe4cJfeCWnPaQAsA",
  "key38": "2aYx15DdkCgTsYB7BPZvri4P8u2CtizXLGmKHYpbcSXvSvhKWnndxbY2xnMniBehV2mCKG9cNGD7nqk5SSuZdcAm",
  "key39": "2Ytz1i9YEzdyzhRddFo11ZzotdK88XxGAbW5LkFzFmprjv6KaJHYEg3p6kd1irQwF2agjkHvopptPiwvwAhXm31B",
  "key40": "9BqF1QvGfReWn8tiqT31UJ7KU8KcGEUccEys5qnm3bBDzB287nAWHcV9w9Hx2Rt1r14tifxgBwsESFbcRwUX8bh",
  "key41": "5qzQaZ37xmPvvhE9JD54g2N6PVEdEyuGVYKCUcWguYoXfrVgRbWGN2keM7HUQS2qGmNfTzijQZMt351GUzpJ87Aw",
  "key42": "NzTXi74Tf3UTYsQHXNYj25LVhv7DAe4WX9X4Wy7yPuMu9FiNogkFxuUma8vN9xWbXRyvhtQi469DHq6XaaarJMy",
  "key43": "28pTzbdqxnXq6bgkBaHLJgy7cN5o9qWvWsqmN3XvDF1Dt7nqccFjgS693X6voS45e6ABbvHCC5YRt8X13BJ94CZV",
  "key44": "5naV54MqQYn3aE8MzJomjGASyiiJbRJuTs5PXuWweJE2JF6zUQR2HraHL6NuYomStBJNG4pVthjR59y8TJSKddPK",
  "key45": "5imFFSahsvJC2hT46bjGswQUnQQWSJ5defS9r3CPuCLPUga5tPVUMMVkanRGr2nJjKjCMfCdCBtAEtyoCDs5c3PN"
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
