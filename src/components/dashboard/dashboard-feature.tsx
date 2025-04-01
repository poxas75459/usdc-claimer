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
    "2dntseUxCCFcC59Jr8sb6B2FkyX5NYUfU9mgvUAudGRkhrL9Rz3DHvAQtr3AX1mz72ZVXM9bxvq6nc8gaordMMpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "izGeTAJnD8PS6M2pwgkBDdc7RBp2R8KJ8uxcJ3geUQSCAcC2gEEtEWg73mD22MYfvbXSbsdexu1TnxkoSE5rsvN",
  "key1": "3xuQkwok28CqaiUzoAxZSU5rkrsTKrGthYLCsiyFVrUFiMmCjFTf4qwdwgczDWgK9ZWAkdrWHGwdcjMiuR81AvF1",
  "key2": "7zbnEyYv9oeMJmiwDaFrTpgPaJD6kMdLeTrHNFjdbNyurmHuKtnDAFRTLZjfK3gpo3pKgkCs4oNWbqirUVHUzRC",
  "key3": "4o1KgzFrVQW6gKDpBc8Gy9R8feDtWCyTevxAdYPrhc7mNKmHH5y7vnrR8APyC5cH1mCQgy4qVcGS419JauDfA8g3",
  "key4": "NZ32XTwU2Sg6tZbaVVYVuEFexjSKkcfh7Av7W6D59DSE2oP5wm8bmkzL5zjaNCkeLSVUoJ37jWHWAppyodUhZez",
  "key5": "3x5xxKfxXuRMjBYRuCdnppBuqWKy856T2944uj9KF2zoshG8qjCBu8yo23uFJ22cfvxJ3DWnPCzSuPRourJ6vmiN",
  "key6": "2qx5ChUSuMxkTLoMddVZQaD1bWZMT9uZaJn6YmTqnaudbaDPqYgmDSP2wMMRevtNDvZPXWXV7pbpj52sL5SXg2aF",
  "key7": "PuUnobQ3RBDW3MbtagWoYcV5uxUxn4WZrMXi9pqe9X2msZdQuiVd3Ub2Acuufby5yeSpSh74XmqC8wx5XZ6nZjD",
  "key8": "4LQ45zRwaoifFAcg3rEq12Tu8hmnSyYyFt4BBb56XdcJ8eRp1mQn9xfatStLRiromL4FBmrMuuHtfyBe9szESdFD",
  "key9": "2CLaUe7upzNUTyZLFHjXLZ9C3rNddVDRVoEgp1vHq6wgq3XiH98XM1K9SNjjQAJB7cquTPmqBndHENgFJ1y4Fi4y",
  "key10": "37SrD8AWJJqQfqKKXfsKC791S6mBQpDSmvcVrBENHpPeAW4ZQsmQfL2BMnJuAh8QKDwdRUiJd314PXzTtBRHmKZ9",
  "key11": "5eLHA2ureVhi5yy4tMXpR1a51oWNDhxGeEmUpSVuAQfbjEeWHQeSFo7oTAwkTuaAHpgGReZJ76SZpAWfWC77SkDs",
  "key12": "364dg1UBqjbdk3RgNoF3SgMHrNHXk491z81sq8BrntwmEgC4JYzUw2sjwhMMxm326N4fzzDGpQguwKtk4PeVx8hD",
  "key13": "3wpSHf6L7nVSg5P2WefVEKUdfyDMjKA47JNhknsQDFqTmY9LSU7PZCNJkRv9SJHkGCNvaXfSHCZ9nAX4xQqBC2Mr",
  "key14": "4Y2PxALVJ44ULa57xo5ep6FZMjrAwg8bb5yihd1zHB9L2EVh6YfcnFnVW7CBnkxemcgvKp8eBrTV183sgvwtkb23",
  "key15": "5U1Rj6waoPy4HYacsTMTjLozTr67798XFRqGrG7hQeMCZJ8oaYbxd3bKF6WiYGeov8kg2v3o9NuwYSy11hV9kh7F",
  "key16": "k4Ps58EDSbxmEUtw66K3NK8ak5o8tbArrWVY4TfaYHysG66rkZ6SQHV6rqgtYHh1QjYhAPfkD8XKvb8cJv4Gsjh",
  "key17": "33zBZu9xeZ1ckMPMSKKW42CEcsU2MmM62DyvjCD2wV3sYfCwsF7VTnXnRGxEGbvcF2cVmxcuEpHGi6fb2oiWGg9y",
  "key18": "2ybe3pUtywkCzUPEbhT6HBm2VPX2NfJik2KcDdExdJzHywn3E3N6sGnFy5vo5LVnYWRU2y4sW6reWUkJxBGie949",
  "key19": "3FUKun5wWrDESaFf6u3NTeMW9VdmP252tujZZqK1nRFf5RRxXqVVnnqqBM3MbiGxUzhBFR6ALUWc7SfPSQ29gpXz",
  "key20": "4JKJ5qCWxZZbFNSNmcrXPU6THkKji2KS2itwgH7qX27LHpGdPvG2ThphjXt84mNmQvSed7dnFbrkwyhVFzkb3ofx",
  "key21": "64tSdjLibTpDYwHkzFCfiS5ui9eHC6swvDB72Ay2CCkE7zpnFWMjVq7saXBLmHuJJi5uLdtsrxAt8o6bYYzHu9MK",
  "key22": "2Kbus5ToW8Adcwiq4tbpwCw91X7vFGEQNgM77ktKeCTqQRCRZshCa9HhwAfSFEgQkzZRdJikmCMDGSijNs5XDzCK",
  "key23": "2RKyKs1Ygg7WXnBCfPTZspAeLxfK7rfnATDYKCgYwXoBT9V4Ktkxxn3b8q962cr4ifntRq8xiH9NKu61FmYC9QVM",
  "key24": "4Akge4NaVW322kPxHbgVKByGEvNS7CrJWndMyv3MV5RzTBT7DUoWaWGoH9LjKZHDXCar9HERHxqHDaptkCrBqv7a",
  "key25": "QEYvuzqjd9E7pQtPbQ6WEKmrZzocFZvmUDFUWAKt1FrS7tKmSnLsnFKNhi8Cg18FDZiswfB3DEk8B64aG9ykjZR",
  "key26": "4RjakabBtCQLgajHseDjoyV7AKJXjc7QMGUGC76aipS87HPn5vwSwwq8hEszf8MsUQtoFQyy64XmUBDFc49nGe5A",
  "key27": "4xYdVcVHie29Eocguwq8UWeXpqiSKNAdwpYD4ac6WEy7GfsE772VTC9ohh23mBRo4KBKLAVkYHWT6GiSdHoRjsWY",
  "key28": "4FjwvKfBvfqYmwb9AqSDMJBkBrf1TrtaBs6amZP8szMYkt3JuXBZd9PwDxnSX9jX9wZpuWmTXZKyn6ofcHV8oPzr",
  "key29": "5RUcEm4Uj4myvM35QV4FTznSUVsGnr9eeCGqB2Y87BuTaPGMZgLRY4PsurTsjTMoNK5mAKCwo3cZJzyXEzwh6Wnc",
  "key30": "5Tiib2eHudpREb9tfX77j48kcmLf5T1kpbVhbPXBrsrT7iWZ3ubYLMPFcumZH2jojZvpnQx2grmdUAYFBfZrgD2z"
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
