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
    "KsLcK44Hzy5kMighKeDHbVvvkXiSKQHfCnXtgpsup2AzyWEhDzymbYN38r2tdbajdV6rXBpYyJU4nwKWKWHpYqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qZ76JinXgh7azPRWsEjG1YhnqC3H6twfvLj3sjmLYwmppZ7Dvjf3xLobF8kC5kGZWLUFwvvw6pQcJEDdKn5JbE",
  "key1": "5NVvSG8MvDYUmEyai4kTMKLsrgEuQYHKYoNpRiwXksaDs8Vfu3RGWbZgnAK4WzzuujdE26KiGnq2TpFPpvYwi6nY",
  "key2": "4HYFkXxNMN1CZgQEHHw5N8R6NEePddrEqokKnK9ANyFrh3fXUGQQEzMGeMqJVGCp5cbAejxZ61aHNRmKCzT18DTh",
  "key3": "4LDMuGM5tJyx1x6Zt5iDCQbRUsMgyKrh2DyxV6Nejw8G6xZtALYv7sf6PYnQrBNnQc7vLQF5osRhrHnoXrPF6Lts",
  "key4": "5xomJ9R6UCFCXtvAr9WEkAbFw3Y7N5N14P83yoaouh9bh3h2QifBrd1Wz4iDLEMpSpiQQy3gnyi3YdRX8xB7vVYU",
  "key5": "34wMXGJVU5d9Djy9sf56ScAA1sv9XwWyWsuZQmvbN9RQB6TTFyLjwGX4s9vy49E4PQKn3EZkETHsv3yJcWjMd4Mi",
  "key6": "zLZbLffMnpP4k1JZwqS6jkr8zjoEjmUpyZsWB5rLFPV5EkQUZ8cph5Jvc5hXCgTnmnMRkBFiipmZyFoNoEZm2hy",
  "key7": "5rFXUtNj4osjeWjgrdnZCMVhZhSQ7RZeSh7hYtCgcExvnRiY4cNoZjUYBzE7LJgZaMUDG9P7QPP7uk1Bww57jKcg",
  "key8": "e9aKW7L6x5bpjsb3xgT7LaYwgT6dkmYJtATF5FSXri5vpF8C5zczGBTuVB8VZdd4UBWNavAK13WrQPPQH5AsDYj",
  "key9": "3ib4p3farN2EmaepiwdpKNwNpFuPqubyMsGcZyhmjjBQdStooYqmhUycFKt4qxD4Ht7xc7mqGAwimKcVbfz5Wbnn",
  "key10": "4EuMsTvqHxmjEFfu8wLRauoqZSjwy3KUXe4ieKiYoTzVRJDXyw4X8fvrUKSLTFP9oQVcY94aGXgi651pKBass8Gx",
  "key11": "mxhaX5A1jdHkKbvFNoaj8rBPNgAQh5YMNJR95XYUdKfTXcLsZ99ms1LgKYqLvaGB9V9obUesxset18qhxWfN1ov",
  "key12": "5VPfQCMVd6AyG63jun9maY4eYvFbxHpZqGJrLd5MFPxDAzpFwU9oWTyQfGeDwggdT24VZqjU6yfeaZfXNkFUhPZQ",
  "key13": "2aZTRu93XuaHe5os5pZRAbzjFLu4hUcriqMJdPYywUQBAKGLF2oQRc1853xxfVKVruZaU1AMw9noxL752ipUTCc4",
  "key14": "6511MPUh8A1yJfKM3zM9bn1Nhp78kEfrTcxxjv1QRRDKU7Bx3pPBGmgqvLfWNcfvvMEhN8rMgpbuke9gUz145cEB",
  "key15": "54ag7MNJZGbejWWvvmSmmd2eqEHJbobDtMEtVzR6t9kQ8qA8VPFggPaxBdGx5axnZtppct4q8uHqDkziyDKH4wyU",
  "key16": "2bV9akTnGWmPkAndtqNFX6bnikYYdKBotqWY6XXaVYikAafrMhEgK7aAmg9RFUdVFEeFaMMC9yjajYdHmJvBygvo",
  "key17": "4JUPY3bAq3rhdUzTsibsUnfuWKYURuzRfqXNyujEdiTZPTivn4Na1GGXHTZzDn4aU7LAHSUCAq3skhywjT5pxutJ",
  "key18": "3BnED8CoSVHnDgrB4fbNg1VzaQeKFD3PWcKVg3bw3JJU6NFWHmdKr6MhrMoZztPYoDAfLbkRPMCwNn2T1nWysb3v",
  "key19": "41MWCmDnCm2Q5h4RHbcAY43E3e9UrSE9QhHczA7vYPBzEm1gSj3osPDBkYW6vcbuPk8UaepzFVqi4unN6R29wFN4",
  "key20": "2ZnZYHCEmqgLhusQP7dD7i7HVaGZjBCg5hwmk4NT89scXaNp5BevPVkLyJpxGUWpWjDq7i3zuF7GhE8gkpnGEFHE",
  "key21": "5Yrths4tXUR8FGMdqVdQks5rQQZrDD4CEz6XGCBtpL7TGgU1vVQVzGZsjBjChNDtqFy3XteTuTqgStb7GiuH1Afo",
  "key22": "3dWWPM6JDcuK1Pk8uq1Gn5AoYSQCMTw3JzTKs5PpSQp7xXuPBjoJTF2LTx2biwxnMAkT5raP2FqX5cmWQARdUESi",
  "key23": "2vtQZcPFHn4uaeuKvsgNNBioxHaSTjSGsbjGKtRd8jU9MS2VbukzKrmEMeNzjNw9LiVDBSeiGWhBdrhGJa1txKEE",
  "key24": "24TjV23wNWXCx6xPwGQGPmZPkRdXoydg4RkAQyJgQCNg27GjHae2YH8k3tJ4ukMAoaHHoShZRG1ivFNZorScgsvA",
  "key25": "5NUFYJbb9Zq7GnLPteX4ehEZHNnetJzWiXFaNDQjexMogHGpjYNcqrVCjP3jR6czn1eLBb9hNhjfb6u5Eb5brhoa",
  "key26": "TyPXKATNbduYqjgkmfUpPwJAVD4ZyNxBWSzB2BHcEUj7ZxaSnta37ZGQwFwCapgCrRANB3WEVV7wq4Vmr5DbwMi",
  "key27": "3Q6wwcU4xDmJu6yapAN9WTpKGQsoKw92QT9Xiaqu3S2E5Zjj8zk2fNCpaij9xGFfLAThyfE35C63jX4hzr3xR51R",
  "key28": "2AaGtX1p4NhZyiojHX48WN5vgM5kvRbKtchvA4hJwkNTSETki9qGpVb5Ln4r79aJVF4sLvRWqzt5GwuCu1r5jDQh",
  "key29": "2akvd8gpFbz99nySQzVVAxfmvGgPU9JW577tfzSXUefb1Sf6pj2oKkZaYRRErXvBS9Co9JHXJbD7yKSGrgejBMfV",
  "key30": "2QYyiF4kLFdjq2zJS47hhAhwvJyWVyqfrQvn4W8ibL5kgTUykBcbhkvnQWiAJh7NZ2J5iGakuQFcAFUnJ9dHbnkD",
  "key31": "551aiYyyrCeef6EDCfpcmGQmeNt4cSf5vwKeaTRR5Duzi9BRvGVzk1Sx1qqgEBfGRxkedoojt3xcZiH8Jq98iAE",
  "key32": "oLqyf6jjGJjNMf1ERp6qJYk9jxfnVnYWDbg6A9Gf2saZvSDkY5bpz5oL3ubAqBKCngPPY7BSPQM2dKeJjaBmsav",
  "key33": "2v9CoKG8vjQhKVyS4hAVQjTjnMkkDYvD6XTR8dFMpZH17jm9n3p8XRfY7GqmYFrREPBJmN6gvJMo7xXabyyimjEG",
  "key34": "2Zp3w56knkPVGoYAqBzMw138oH7j4tjGcY6WjxofJuUmHeEqF9jytyXeXL3bQ9JfkLGyiGiJ4ddPkHEtGTZYdN86",
  "key35": "48agiCkDLLTqPvamj2hMHgmJs7fH78oraevecezyM4kBU1XWsa7i7QQcEaYeURhbjdGUee9CEZ1mpgqeZCkMMU8z",
  "key36": "3D2Fm737kR2ngkowoD1DPsrtBMuFd75mpgB99KqL431ZUhdfqprfwbch1jdFQ95BPEwbEguB1USArtR6ebL3Doug",
  "key37": "2rQEPBq98oc6RgKtgNJaTFKhwnHGpBYiGGZG7qjpTvFGg6BeXc5rmabkvMqoyQf5CdWNuJCGJmuX5eowVk4nF1tu",
  "key38": "2fjuEozMV4a9DCexfTX4Z3ax6EGQYRr5dqy7of6m7dYLXHNXxyFDcczDvNN8K9Ahcv8HnnLaUouqSKusV4gBK5ow",
  "key39": "3mqGHA4kWfDBz3arAZZXFqPhHaU3Y3mnQc5FWs81gSHAmDWH8ksavMC8R58UbPEVGScNzxE8cynufK8mcJpvQVSW",
  "key40": "4cce4bwSeC4CudwJjSbGu9ndSpXK4QtwonSUdsswcZkS3J3MsZzzNg41RBJjVofcR5hNSpNycEXugS7ngmmMX96Z",
  "key41": "4G439m482XhJ78JbmEi2rkw1N3f5F6YBntC5Hp8hMW61QXK1UGBcsWPWKNmf1y13jUDLmF4NGk5tY9P2q3YSNqRq",
  "key42": "5mrqNwFC8JpuV9KgVC71VCrv1oJKtRsRHGcuy4n9twqTn3nwxU84Ayh8crNNLAFR8iL9kcueaPCKzGP8zkcTyzja",
  "key43": "5NxuredxFuEbrxoTFdyqGo3GPY4vChzeLNMCfsVPahZJcTd8Hu595rR8h4ZNY9ULhHijDcW1iZjrbCoj1C5jDuTJ",
  "key44": "2UwxXHDvNwrtcHcw5TDDm1aHAVkQjwUXgR7hZeFe9rMNWSht5F4Pw3aawdSBZ3fmYSPAKV7Sjcrhme8iA2L8EmC9",
  "key45": "4zZfBbD73L5vGmxHpjLgvqTRiR7hxZk8oFBY6sN1fy5BH8voM6AULPeB3HRmcY1nVrAhfWhSvQw7vgyZBBcDjaBY",
  "key46": "2z9saBcqXosNqHAe7VtcTuain3MsxnMh1dEpUav8zUAnpahgk7fEnTYxEEruRUqDGQEVEBHna5vTewXfpdP2Ez3H",
  "key47": "2ZNW4QXK1aKWSZ89xKCHRVWVU2cAjjCaJFLS2wHN8M2nPDQZjPq14xBTWuU2JGsuUy8MYhS8ZiEmNdVeHQhYHKCF"
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
