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
    "5ZTzDyHVf83w1HUSatffeC6tLgkqUevNGz2ctz8rhqE54XLmCoBinFNYkce9moJguSjjAByJewz7DyqXrf5mWZj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVsTYEUEyMhk4zap19j3xG9oKu8WuL9fy9D4tttb3e1D7XYutoQ6ZJ152dDDsSVKbnSKYfdwCyXouAYMGQfrdKS",
  "key1": "cYowyHefn2a9V5NdC1u7Fj78diWd1NaHnxJP6P6DxgrAXdUjYpi7xMfKRjs6ZrQj4TyVpvjFBLxE7bqcwsZmre7",
  "key2": "3ucWCFtYQULbBpdPZ2nvUSCqq6fM8C6zPYf8edPVgUhj5JY7NiHDAhcbpTkfXmqgqmbYwpqwdurtrNupDEYyvBT8",
  "key3": "3wKLpjdi92KBdkYXcaGkEUHUEiPxZG79tdQCCd9kCk9Tdob89vYxTGLdD1oSxAhdzPWsyCoSpiFUigcANj9UBfEc",
  "key4": "2bSbLQJmVNQ7iHsxdCbvvPbSkcKdREWTu8oVkN1VQNnquUd6gMg5y7S43LJhvpeXVgJ18JTN945Y7CF8SLBqTEys",
  "key5": "3QMN7dzv8fFwEPvG154RoJqYXpZZaKsCnMkjHc69vVsmXW8BdfNkAktuNN57EGYp4a5yJC6F2vDGVG3fXUM1Tq4P",
  "key6": "MYkQDiMqPMzWbo6f9FnfjXdW4oPaKG7maEo4DFpKQRzCqpMvgz8RLFL2ugnSVBdHKtmsZJaSvgnfzHg28FGpKoB",
  "key7": "2yVQU8PGRs68ufdX5SY3Yk1AqLVsTrJUYXkEiLKgtjrYEBajvDdeCsqJCM6LU5VANmcmMpRQsWzTz4UyLaFy3Nsj",
  "key8": "WuyQKXVtZuqtBcNTrsRaU8u4VDav45MPoYrq4ffyvQSZ1w2JNVRtdHUcQooXvqwmMEbDqjbnxNbzwRVZ3NVugTN",
  "key9": "3WytJdFydQjBFKGDTcEEtr689cFbSbbpeBRRYc1upKSMmuj3gqRCgaD2RWKYjE2DV8nwQ5be254Tqy6JUFeAcpM5",
  "key10": "5gopDDG9MyFfAAruZXnxuPeFuLEHZ3eZLHpwdjvAbMjzBAoj2XvZH94pGVJdm9yqEmFzntaHSc1YMER42wiZDEYm",
  "key11": "36fXngAsmJAjbaWKsz7Bb9fHo2DkVtgKjN26Mw45fgrMi68jkzJG757PmrYsEfXz5wCy2QmPU6FZWUXKvTKH6Zkp",
  "key12": "qoNXPybac45A3bwTkGNzpSB4qPDV1ZwENsy4Pk6yoz3yqkAHTXX1emtsQGUfJ6oDwpm9C7a8uoutJs1wvTpNSGr",
  "key13": "5N8r3EfiBQshGZv9jcdrLJZawtNboqkA3UGJJ3i2Sp3ioBd9tF4fZ8Cxm1DAPHrdczwJcStLqzMFQDYai5tAc5SY",
  "key14": "34pCBHEQkcbZuSwNtQKtGsLK9G8BAdMEfKJMyST4RKaGvnUFd6HVtv5wdrvJDioEeqskoyN72W7fNnusukRyvQfc",
  "key15": "3T4x7nhr8uotjcTjgQSkkfBgnTe5ZfPvCE3AhsMsq6TpSprRnJP1ARH1T2wmbNgmHMeq7sEPWvaRUN3UTS5KaYr1",
  "key16": "3a1ww8m52Pq2wvSUhYQLLU7LJ3pgik4xkZHQEKzpkqwGyfekWFGVCH5WmHARK6qvjHsuhEzXeqLQnJ9xvp7SkJrV",
  "key17": "29sGcCACdtsaA53TYTFWytA2ssZ2ZoZqTW5AbxcR58d4Y9Mh1Fw1b38MXZk9Ry6a3kSdhmy1vBtAoM5wdu86w3pH",
  "key18": "65fwWyBRGST3hajm39YZiu6AMjeRMCf6bj4TtEo8PxVFdoQdx5wsz8bS4fF4eHTbgfs4e2JC4Mz4ZfeYgQ2GY7i5",
  "key19": "3Rjcw3FPEQXRgm5iscBuKxZoKnZ5JJQNH2UEeJ6GVzVmvXCKNyfjwFypWhweEjMeT6uuc94Sr6DtYvL9jXV34HPd",
  "key20": "36BWxtWvc2Pg6ZWDHET9ZExNSHFQYTx6zeggSSVVV4ZPPUNcX5o3nUWgU18zsfhLEWoN6QmS8je64FJFUG3bvLfW",
  "key21": "2SDeWsFvnngtJ2F6NsYkQJrJjTyhnjNcRErCxPopBsjdXYULeqtPSsq3TT4Bt2rdFj797nbZvUxMArHkpQ6cV7Qz",
  "key22": "51M7TvYXEpaKqWDuqqe6N4LkBSjJ6qoj2zXToQsU3h2exgE8XAXQ37FUbomuGZ2FM9554eneR5wfqrUHejfzAMfD",
  "key23": "67GinRjB29drzKFgyZstyUpxEeusMQgzfvpPtJugZMjE9XAabU99BZcwbGB6vdc1Fsy9iNWGtXt24fSTZq9BgvLf",
  "key24": "3s36jhxGAYewGyXLEapfJHaZGQZz2oPBAoeC5zmxeT86zeVzAerTZT6R5j61SMsrQWtxViRbUZYCuvahphpyoC2y"
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
