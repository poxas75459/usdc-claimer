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
    "4zkTS2Ey3AQkNxi2TB1vRLZqhDf7QEpMCFTSXZK3DjzoPTQgfmkg4LYWsbHGifMSSXW8EiDCVooXoW3yTPzb7mx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QtpBqsQmg3BcCZMcagQRXgYdZDNzXFg7kr4qFCxv3hX2jpe9chYMJ4FyzwcKzJbXm3eHjDYTGcB8ZA5fGp7GPck",
  "key1": "3Hw1ah6wTCNrYprbFzYhQEPbtGz5Mj4ZF9TBqMKohKNa2ZF3J7sGWtMkbqGYAojiEDkZCDa66mKLvB5hqHDjqgjy",
  "key2": "2bVpnRVS6HPVp5XL5sNNuQC6JnAZ7XwHVKdoVVcbJGn2J2112smSbQCYVEVZhMNnWkn4JtKFdyBcihzrzhaoyh13",
  "key3": "2hKhYyQkC1WzDh8orYU51ZfYDMPdgNfsPg5PBk1eyyeXS6q2tx6tbn5mJ9EL5WD4e6TgyFKLbByKDtdAYdpnSxkm",
  "key4": "Ugyzn5JXvYKZijLe5xvqCh9n9qobkCyQyaon8Xk55EMAJDXJUZho835ypJAmEeh442oHWN6ArGf4CzFkDvX2sTE",
  "key5": "e2qow4xkuDmaKAp8p7Y4c3BpbaEr3bBRERbRz7HRT1ydW34N1g8G9Hp4dcUBCbd5NgNDSUisVLHC62sbJgwzTkM",
  "key6": "5Ag2WuNBvF2VgBEe2Rv7H5MYP5YxrUrC7hx94WN76XwnHWuDQX9uAtPDzYoc7yX9nDXb3r3cVGS6GaMsNaeGF7Bb",
  "key7": "3y3EzwUerQxCJBPHtTWTpUK5mB45xRELWs7nacdRv3wr4iXuNNTiWWLv4AwKEpESkKwfxzdF65Rv48LPYpH1AnwP",
  "key8": "3gPog1Kz7cWvUKudfJuH21417EcniHK2QtEq1vEBBvCxGJqinpuQByn5JkbdUXkBExQb7Bmc47DDdikHdTbot7Na",
  "key9": "w3LCL2PkFUGdnhD3hbZ9XeygDoXpdXiNkFNbtXgvcfEGVjatrwBZ3djzrQ64Tgbq76N1NtbexGBtrMGgmVrNnDQ",
  "key10": "448N68oprzDZy7Q8PTTExJnY846yKjupqgjamqaUni6zcz165EQ7TopMNjSpGpZwyUN1z2nbEQgr6Huw3aPnW7kp",
  "key11": "52BMCoDu59TfwjdFGN4dcitV4p3jP4MEjLDPxzuiGREGKzpW1QTrNEkncVEhZPV4DaMsBCyHkz62QBLXS2omVskL",
  "key12": "3DLNpqZDc5RdBrEpj9Psbx6DCK3g35V1PBahioxwcr4cphZLbvV2SUp4sTVx9wPX9XnTb5B2cagC65GDr2nJzpgL",
  "key13": "9EVMM67ZFgoJ56T6gc4yEi2d3GmLwaqFg74g2eSXwR4KMRXMr2SMZDZ7iYwh82vFCAeu2jAUqFeRNHJgfaSn1vP",
  "key14": "653HVW1yqPo9AXK44nQMywnai2PCfDyXaFbGGFj8Bjpz2HVFByZZSame71Re8zEr3JM55UjLm17arshenK5KtR78",
  "key15": "2UqpN9VvMq6S4Y75d397x76Bi3ZYdZr5WfJHdNKE6v93Wx3H2BgrqqLUvesKioUYPJ7oYmgi29Xn6RoVRVuMhBNJ",
  "key16": "4xHnKuqZVhR8dtAHesUK4wQxd6zYtReUitMiJEpN7KnzSUGx7Eoa6EEYpHtT3KzFFeTUheauwtd2zRxSrGjaXCyk",
  "key17": "4z9cf36c4x7dsEiuzHETfg2SXV245MaWRJTQWufQ7k61zGwSmYQF3z9F9MaZkVR89vtkshDUrrv5DpZ7eMysFFBj",
  "key18": "66coZubjv6evQDZaMu9mEVDGczAaPu9aU83ASG5tKga85yyLqvoLCz42J2ZcuAvkBx7c49ZizcTMHBfsCwieNfCi",
  "key19": "2YPxJ6kYhq4FdkaBFmeHRGv6c1RunZxusm8ARDziZmZinymk3oCcxGQHQGmtfR32vAWo4rfNppgXUST3KArKQuPv",
  "key20": "49rDQpDRBsPG9vbkXScBozRfs8v9hgc5Ba58xAQKamdXgKJ5Q9j4qCQp38ydYvpDmRCMFyw8CQWadiNnvpUCsjge",
  "key21": "3ZsZo1Lry1eHaawT6e66C69QMY99t6CcCih21BBYjbCgCAYQNTQSQTDVph4hZAZxRskoxppxcZ7Z6X6qBqqjismk",
  "key22": "2XJb5NQsVRpXESrbi6RGQ9tCnX1ECQ1opw2GLzC7sy9fKFCzzC4RAptrT5Eccbhmuddjq8eF6VabLBbUn2QUiA9f",
  "key23": "2ZwgxCLUFAQQ9RNA1TCLNq3pHkPSTipHBtbXwVH9McRziEJTo49jgjeePtSUGSDnp7BPTjK5g8hMhPVQL8nh3t2J",
  "key24": "5ayADaHQ3Ez5wCmz9QBcDdAheE3W96HAkSRpyVSwcFisvHct3EHKY2ZfV1J5xxoNHAwZmjV6C8TJb2q85Jp7TRSo",
  "key25": "NoyEJrz1S4hPvj2VNjLWMbmzaGnaBZd53xdXXge7mQT2duBN2BFi5ZUFaJFWfCLsKfVXbVfrp4xLqWhcEoJ6L18",
  "key26": "5Fp9kC1XKz37ZLGyvb3aMbjVME7ErWGgAhqtgNUwjd9rwrFJep19ohf5jvmzgW9D2KeAiC81TMK2Hq27UDtyVFV8",
  "key27": "bKZBbPqEiw1emmL6Jd6d3mY7BtCbuVHBE2YeaNMrVWhVdm6qFMc9Jdnm9QgErGgE6dCPTVQz9WRNHRihWHaiMP6",
  "key28": "41UuGQkfxaZU1oHiRnXUhAXAuXqx2e3r5HKpDa54yEa4gsJ4GTT7phRYLLYw8oyaaQqzX99xk1mhkzNtTdew1uKu",
  "key29": "5ds4g3uvVbxTTi5CKsrdyn9xnsdhAPYp8RZH45gJXHJZU485AuoA94f8tag57RDTE3bfoUQinSR6YUuC4h8itkXB",
  "key30": "HxMc1tYBg6pLadjZLWG8XUxE4fFfnmTXXZDjExEYkMSbzJJnt2nt6W1XuH4qHgYDhD2nxtFvx2fwQ3ETdFetRcz",
  "key31": "5xacnsm2hLKWrqHGiNj2TgKzaovuKyVmYAcaNLQtCm8AxAGNkmpvSMatB6Rhz9DX8KfxbpqVN7FPbiogLFpei2R5",
  "key32": "3iUne5zVxnWXFMkAMCZQdAE7mnNQanpBfdYvPEMra4a4aRSsc1YVQWzaMGsAZGTQJ5WfsCkEkJybBBoCQuDr25ak",
  "key33": "RgPiSomZFmoS9HcovBapJXUiBhvrcDVZBBuWzwgCiCzcJ9gZGpysVmTv9A6z7KiTCM71w1wTKutQHPmjSxNYEo2",
  "key34": "4ZoJ5dvLRXvzHgBtyVCfSak5X6SJS3UEVDFWnxv5LMNmiXnNngpSvQ5zWPs5viFHCKezQEgGWhatL7Sowygug6he",
  "key35": "5SCVxiYWeKRQ6iLnaTwDRd3DWFoueUC97SFmNcVWef4o7koUy76vptaNkbdJACbLivMpA91QUgtnYAWtg1Ym3yxk",
  "key36": "4to3ZmKGQpzT4EvJQ15xMhyN3GuUk9TeJRoM8drVYvZY8aTPrZC6VrKEQ9s6vdGBj7N6VZC4LkNg1r8dRbjmnbg8",
  "key37": "5W6qvWFhcJ2pGyxi7TcHCZZkk9HVpqeXvh9hRAbomhgTAQMjRae6VenbPmPhY6vhs4WvKYQg8haZE5uqAUg1JLWo",
  "key38": "zeNwhL88SGaX2ZPaHNRvXcPNi6EduxMK3KxoJ93KuCuX6dEPVueLqqeH43YQMbMxNzuSkqG3NWQ9Cgia9NVmrE9",
  "key39": "4DKMSodLmwtA7BRDy6kew3X5LwHrsBH6jhrDkUV4ocEk2m4R3GmiWbTXbFzBksZpKayRP1G7QUbZX6qcijiwhNve",
  "key40": "3tQLs191bRbhngW4RKqNGuApJM8HqZzGQorMq6oTy6Z5vmYy8NstXp1CsTaXJKv1AC1maQVrSNSDMosjvynDco3w",
  "key41": "4BKB7gimHHBKR271jPLGDr6Q6Ug7Ya9KTuVrDMBoNUMtriAmydt9L8KTZV2PAzpQZGKV4cX7BwpXfCb1ZMxB5sDC",
  "key42": "YcgPnFL8AtHHfeHsaC6LwwoEzqN4Vm1FWy7cpGbkuRTYTkq3jA2J9hVNaUERWcVf9RbwzzeTHeuzz9AVkGJ7NDj"
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
