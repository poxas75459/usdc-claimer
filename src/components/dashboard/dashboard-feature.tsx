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
    "286gEu6gFBYrw2u6RLhGgRv4CEW1Tq5v9BXwto1LB3joRjHYPMsf3gH2E1SBCxkcc8RDEKXyD8CNS5FhhgWZWvom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33NXU4aMiUxeV8dbR3z3q4UB3ds9Wkn6UcUPGheWAtzoEPw9XPZfjpuznn3yKe3YH16zRS4hNowVtj9jD1tE9dxz",
  "key1": "3B7S14cFSK7Ft1tj467PAfGRjyudoFqqZjEkUFnH79wiEtiMf5JhnCHrmL7HYgZYhfJxXoAECG6ecKbMHuzvho26",
  "key2": "37DgGvEVrmq6D8ENeUhpHDu9Xk7rvErtZzitUTfwYN5mTER9Pu1Vwm33hWvjzzjveF5ow8kaAybTrk6D5ArBmjys",
  "key3": "5p2wZTuhUnhao1iMR62STbY2FihjBsYgstPnPY6ES5Q5YLbG4ZwjhojMfpedq56CfPs2Axt2FknK7NHrmLMFjZ2F",
  "key4": "65b3RHqGhc6oCwmUvyszXHFrMPPFXN23ZFbsab7oU18H2Vtnb4QomgBEzXjRinGyEwVmuJVFc2gVrMR88F5w7Gck",
  "key5": "36fosLQyLNfn29enELSJ8oEJ4iMFe6B1ucHGteZGCWHgtQmLaDkzfcBZvBNoWc4p8gmrh4wnUJYof7NEvNiZ1pXY",
  "key6": "4nZdpxURnZZjFxKV8twktSUbibwcJD1aSq5s5jMuL7ZwqGmnowPSUmLdXbeA2C92AVXxDFbB9r8ib3xr9LZUdFZV",
  "key7": "3qZPHu4zueMyAcKkZNCjTg1KN3Jcx6EErq7dqKJ9PfjeWyYxr1zN5vrfvJ4HTUeymq7Gt2ws3Y1A6DoPTNZcTcDC",
  "key8": "5DjKGDCck6PqpiCkG3G5WBJfgrERVxPSNfYzwWPKe21eVdoMYZpK4T5k2BwYUJobUNwB8A9eECnKkzsjuNe9JvAc",
  "key9": "479WEtJdzwLdGZAqxJ8nhQhwQASk1pH2rck5BuQdWMU3ParLZw7aeJVsJX8g3faPcCd73XXBg9K9Qgw94vMaBFF9",
  "key10": "3RmBkqzt8UeMaiJ2dcsh7VxQrVGbvxZeTGDTYDawV6KTbcBuB6XWLKAxBewMsikBY1Xsy7uX81upxppQzpaP8CzC",
  "key11": "71PCBR8DUgDN1EFDL4jMaY4Qfz7GZdXW2yePx4xJCGAJcByuiTXHs5ViRDSwcm4cuhCPymUjsWNzMoPfxrXSX9L",
  "key12": "2JPirCHJYb8NoMDfYHcKmqvsrUjeqjawLBsruGCKpgu73AKc2KpnfzNr4jSHSM9HP5vkLvm59iNExLpx29inRbZp",
  "key13": "57D889DMoGe894m1txMAys6qzoegyzH8DGx1jQ6KWDdcwtEJ8VQd5TjohWyBZk8Ld8zPhVupzqV9RRVrKHKfN4pL",
  "key14": "3PKJoVByP7q41fNYqDrio4PGZqGAf1MYAjiWVSYxNJq5UcfzKvn34vHX69wmJhY3BKdBXpfR83e9zX33evZGj66X",
  "key15": "3nCM29GGPK6fkqYHuTnMC3fNKaJzAoTCb21c8xUDothN1FZuYL4u2i4d5U8ABt6pGP5bM2DLL9WKceoNsKnCmfsi",
  "key16": "46JWGmqFaFZopsXw3YGW6k7irU8EihiVRfnQavAubxXjLPTwuQyhVTxVSLNdyg1yFhWHAbAjVqR6R75jNj7aBBg7",
  "key17": "54HvBcMwd4KFURJWU6B96b7Z653Xios2miZgvuqBHX7usmK2uBvwHK3e91EjuEZw2MJr8g2BAeYEJHFU5Lk6LvHU",
  "key18": "39UeiMEopjryvbuPqpapqwJGUdF5g3ZY8frwfBMh9h7vAZDeMkfmKTjRiG3caFnvxaQS6bEuxXMtCpCDpAkiCw1V",
  "key19": "26Qvg4qderRSNNcJXKzmnhvGBg4kuCv5MXN8ypLnFX1sE4e5hXvEHNApnMbogDhyZMqpFRV3KXfmXbdqmWsLvyVj",
  "key20": "5YGgsA1UGd2eyLMaw87Ky7fzwap5tAQG9pqS7ZAnikPhaMFnLFsxVrV4bV1Dzw7yDLUuLokKRfW5ZVNz3GGydXCR",
  "key21": "5gWZkxz8wrnLkFAQJS155c3fu4yJa7yxPAwGVMfM4Leap6HRuyCkPf6gZRShW3WGNehyQ7TTM5FW94kNDjQ8ePRG",
  "key22": "41XKsnsDuFu1miSMt2UpiYRor9Mox7mXpEjKSduhJmwbEZ5XEJmgNRE8wUpKVBKgErFqD3gSFQfrhAp2cZq61NoJ",
  "key23": "4cGBmmwc4Xt5jhBivTcp46uz9S7yjj6eeyXzEwAWv692RjCNdvDQnhkAEP1oEqa43zwibs1Gktv7p1fQbVVSULnZ",
  "key24": "4MpexVMCEKazMbNyA2GKopnuMqiHvNxsgQdp2BbZrkPvBhkBspucfM9FhLs1Tge4StSSzX6yWs4VpFGr9UUeBV4R",
  "key25": "4aCiLeTK8tQkqbrypYjo8FKEHAeAGSFhuNtpNHxZxrGXZ7nZ9jxkX7dsnbQ1KbsGGK6hgbPW2RiTFnAF3ZguZ9vF",
  "key26": "35Sp3abgyftV4mjHoe1gUDzx1W7f3JhGrsSqABZJfG9WVGY1YWQR79WXF3WyGjjseQLNnmSA6VuTxTbv5sFJYcrM",
  "key27": "55oYxNBXbCfKYrnfiErBFPvbzmJFCm52prXnESEs8GrfRTNKLEW8LZ3SaNtNHWZWk7Vg1jAhwP7qmorKBhw3p6GP",
  "key28": "2dpqwMjSwS59JXY3bhTPke1ZjZCGS4b1VQwkRvTUCeEiXz77jTr7z1gfJecQ8QYFoE6FLugapxYYVFnuFeW3h5m7",
  "key29": "394hZGSy2C2c3vNhNUjxBEPdPqFvpQdftLjwB6L9qM5tnBCv1sBiqe9cvQJPnCrk9Xd8RnC6JRCM9wLWQ9Zw3Gpm",
  "key30": "4D1v6FYJQg9QzHWPu4M5yQytmGCmadEdwUhBaECpxjKQst6zWU53cYeQeTjZxerrh3oC87MNUghYhJa1qGdzap3m",
  "key31": "fZp664p3Bmj5smfUXasGSnsqM8z842NbnB3iQ6PDgAa5m2tCQfyozBnLqfAEpWHhnEGTMUM6RY2XnxiFeArtDYd",
  "key32": "3mcENvFs4ECqnbMSc2XAK5wTUQiJgPCmmYyve856ejtfSHbh1FyvHoBBEVyUUnruma4xDuybdUhoQVyrtFq8xcZB",
  "key33": "iLbKRbFHdeDB5hdBKLJR8dca43rLMt72bheqjWePDPMi4jKwqerYFEBGMuyG3gAqsg1vDwkvgLbnjkbeMwonqaL",
  "key34": "3NVcec6mNfnAE7RN7GX6AcdjCTg1DEEPaKy6ptySSwfd1Qf9Q2aqCDErwKQWimNRBHP8PGWQeL1iBpYrMDJGQbzg",
  "key35": "n5U87r4N11LNjuCWiJxgRWZ835yBBrSg9TMbcUgVoKz3wGroTzWbLgk6XwcxoWia8MtYUgZKzpLgQnGQQm4TQri",
  "key36": "5otbQpfYWo7CVjaZKmvab5CuTHV8gk68drfGjWnqxKgHxAi8SDM1RWdYHno981BXj9aotQ49Ynj2tta6YNaRN83B",
  "key37": "5MYuF38TCJCnujaUhXeA4PQtRj57ygCknQuj6a1vqBQ696GUTZWfBtwH64p9GyrrYL3qsmzmBgb7NvLUs8vFo2Jc",
  "key38": "2P7Yu8XwiYA298dSPjxBvphsR9gCqCxtBAcbsPYmm2xjSiGUcR1LVF8d4x9Q1ad56Q2hjHNWF7DYf9jfjAn9YLnt",
  "key39": "2ANYPr4JqtHYsNdkAQcGARXEC2Q2FM3LE8HeBpeAu22P82583Z36VWELE4keeUkZK2XHUiTLJCsg8Z6TzmHcjiyj",
  "key40": "2ZfjWvfkR7QqYrAyozabXqsaWaLeUnwZP6uX7KaZFyDngLYyxenL1CWwAmNXniLoeagQiiTf2CKRZtugL42tLDUj",
  "key41": "62QsAniWCDk79Hj1PhoBZqjvktXtZ3jZWQJH791UbBwwx5HK8hUS2fTnWstq9aDpruveH95CkZQkWLHpAj2BKoh8"
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
