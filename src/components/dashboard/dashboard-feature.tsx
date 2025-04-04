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
    "2wGTkhozQ1vfn7aMiVDsYtZTmZB6cpt4HvTb6MUT41LtGCzbitjiq4j2M7F3AxYCKgxYDkQTsEg62UVGmPsCDc9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X5fDsf14QaCVgBNNVh2dvcEExnFhbR4PRyjjfXaqs45c3PP7kq9mtJvvcGWFB5Y82y46xVh8D29U2HnziJ5Enqa",
  "key1": "547gFChpUB2yeQYztSgsuNP6PLGnDM9qnbgHp5hu6gyRR56Qx982Zn6VqwdYgpDqD4SFEPe7akSipa3bQmExtY5u",
  "key2": "2SUDcDCSjdsp19iak1L78dLbpKbqG2mB98mUQNzy3ZLamyfgWzfU2VoJnBhKNqXSVvLq7XXM8Xf4BkBU8ZBtxsTQ",
  "key3": "3287tpPVhhuCqcxDzeCQrZsGtKAhcdvuu9c1cBA8T3bidqPjFQ7fks68vKAad7jVTq6YXG6hNrjqKVU4gnWuv132",
  "key4": "2d5CV7CwH89fKcc48MMiuZNZ2pp2QuzFvc3V4BZASzH7bXdU8ym4ViQN34h8rTxWp7QRi3M6uEzBmG2bE5SqtcVm",
  "key5": "2My48upk2qXxJPwvmQrMAws1xSrjC3rgKp12KkDoETCvDgVJozWA3c573Z6AHtYWMH1agtgzVbZkKyvvSoBx3uxU",
  "key6": "4c62jWR7hUVu6BYKACWkoWqw2xWiWnPxcnk2tEXKUzVLNFY4xaAt5QGTQkprG4Cmz7khBJ9VzfbBCJfnC7ExvQnc",
  "key7": "2EAGbyXxu9k8mqFVX8SFLNxwqqcQr2jYENiLJ2pRU1RUQmF5QM11zQdaEiTpV9UuYukbRvcm25Sj9xN3Uad652Fd",
  "key8": "5xdoR4irJHC1dVh836Sr6EyTgU6QeHuVnhTMaTGAvDCieziQrduFVLwU658ppVCT6PtEFhGLQ34uhbVUcpfHre5U",
  "key9": "3xZiRgQwf5hzHLy3JJzE37H7t9LrtTwekG2fSYKM8VMUvZ586Mh1sotuxRJVuanwMk7NQVnVqBnBVabqqVNHyHT2",
  "key10": "3LMJ1nJCiz89F2iQ44dgTBNBbQovF41VgzYhteuNjdZrZvr7zZWcA9i1ztYbBVffTRRT4scLYFfygeQgocmdvogz",
  "key11": "5C58wXTbx4KsZocwJV7YkN6B9PVL2k9fMzpgp37eSJ1t1b49dpqNyCFkBfi1wz5m7QvYL8jeQF3gEKzTAs2p8FnM",
  "key12": "5abF3u6523xLRW6yG1kKQEpqGo5A4kedyEH4djX5rDSWWzrMBysXBkLtmmjy9ExwiCizjuaou39dtxJQgDykmF6e",
  "key13": "4JTgymytnTty7SPyAzpLNJ6CDtn2CFELzGAn75xvKBRKmfR57LCX7gQAB4J6skwyBxYsxS71DS3SpJPqhN5wRcWb",
  "key14": "2DocDyaMVFEvuvZoKLJD6zxn9SQVkYUrSrHajr9xUTAJbaio4RQjTKWD2wWSjBi3czdJbaSEo2moArKK25teVwTL",
  "key15": "5CoMTMwxET3SaFMwJk266TTYLHR5bRmazQviiptrUy3AfBdmWJyhAtQgWcqcFqBYaBFjKWdFWrDdnHenUt2cKwTz",
  "key16": "wcbK6Ybbc9yRjpPZVL86GYL7BwMbmSGbm12U7VMLN8ydhqRT4hncFX7zhaPjAFr762LoCjz6jsPggvqqUfai27r",
  "key17": "5ZMvpeVDvTppNvPXZPcCYYFBoCuqedPWirH2J2NMLqooAxzGNDcbpq8GsL21BNdXyZC7RBXDQVmsocYSvXGJvHjB",
  "key18": "3x2tJZASUMRyjmCNhZeJFBSie9kDGxAfCBtFyTV5drPUYLvMpHb4z1o2D5cRjnHJoMSD5FUEFaaLy7iDdCxD5JCZ",
  "key19": "4X7XxbE242jk5b6Gv9Tctt3jYPmYwN7tAbEAmeK5DcRCEZrFnR8hK6EAXcqCPsc4Bah8sWakBMHPXLen8dqWmeGo",
  "key20": "4VkewEaMckYZzqxteetwxB6oPwh5kK2RAxwg34QJz5hp7anb7XFz3eWZZbZ5DGXD619qcSXseAfefc7rMbeYBNM2",
  "key21": "3uYq2hH6kmtgJAwkLimBd5RcmyHsWmkfVdT2cjevnhV1qy5E3Gx8DgnnKugwuZ1eSjeDFp5wsYiQpEgZ2MyvcaKU",
  "key22": "3x4CVXW47b43qbEo9KcHCgnAj5H6vWfHYnPA3EkkWEVspBTBhPSj5iZoet8eb1qrZDhSoZ9FGb2pH5AzhUuXT4L8",
  "key23": "5hA3NzgSPcmZBYEfRGHEiNVnSvfxKV4XNBnU2cuGuKx4VkNwSj7SUCiRGEKdVHwbfuAUWP2jUUeAfM88kCyu937p",
  "key24": "4QurvtMWXJre7PxqAPExaC3j3sYeFHH5zLgDohYTziBdRntNfHQDX1DYwpkAfffDEixwxbG4p6H1dE2Je9FJdncF",
  "key25": "2ViZuBYQs76D1ngYzFCg6VCzE4X99PXXtXUr1ZXmUNZDiUd7HE6qbxsBWT2VxscRw9rkocx4WBhvQAJGVvvugPrJ",
  "key26": "xHWVx9kL4DGVQsMjzwBmhx3QmcL6VtsvhK2cZKHKBPh9w6RL987N7C8KqeDLW8Xejs54fDhMAJ12qYzBUtN13s4",
  "key27": "23DssA5Wv19gby5PugAp3X7UakGQQNvYG2fudoux2pzBBgTyTRaXbEUJgsn6KkWuCtimrRfQ4fSzNXRndypPthEz"
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
