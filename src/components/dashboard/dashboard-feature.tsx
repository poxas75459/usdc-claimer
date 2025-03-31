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
    "3omPYbymYUP8j5h3TZv57tBz1n55NMehrrULp4dcfRwV8BLtkte9t28TKFYZhXMqsRNdQ7P5yPnvLB89FcwBPsWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dnHJVcDTXDiRkdhecZyQp2AUrvmPsUjK3hbEo9DZ8tq56F8XoQxgWfjG6wFmzTM9v7aCM8x48ScV3PhnnphDFxj",
  "key1": "3WWcPSYhvUrNTsFsnZFA3NM48LDNbd4YrnCnsUBDFXay41M2up7J4y6WkuLVVyZBgCqdEw5W1UuD1cMMFauFvnbt",
  "key2": "29sCFho8aoyb6dpHJbmTNaDEkGSGaMuixJVfspj5VUptJtm6UsU8zQZ2whdvR9XcxJtZGt1g5AVcWs8gXsJyWqnP",
  "key3": "4Mwt5meQQC3MJkx7URfsBhFpkY4zp1B36Ne7EyFaBETMUDHMVCBCpt34Fnmo8A1Q9T7P6Q1bw8UitJysKHSBm3z3",
  "key4": "57mxEAeUibgycThAjLsTFGyJ76yRVqYqMjUsdG3X4BWE12EPErQvSvDxeAh3ofSFhtp1hyS4Rjox12xjntDx7dEG",
  "key5": "2kdkBpvJm79tsCxDUrx8CUtKf4Nvv9vT5bhSbvR2zZbYyu1UJ9fVpwsiAu4UewtqQMzXkH15QQcjKiEmpu7VGDbp",
  "key6": "3UhBNcfC3Cns9JQ8xHLw8bxtpRAyLR4hMjHVZ35nNBzp6S134F1s1KUjKgEPsLKQtndW73mV6wACLy2gVLDqAxmr",
  "key7": "61GMCumFdJULN3NgJXDXQJZys1YLjXG5VmEE3445zeuQog9TwrLSDh4Xyhx288aiU6AJHvzjsn3njPJypeFQ527p",
  "key8": "2c6zYjbjXyqTXciufTF7HYW75oXG92fDAdQq5zM9FrWGjLXFmDFF4z74V33TVhykx85EuZgtasVexC5AJYrWQQLH",
  "key9": "niH4WuyNoVcQKR1k81uPef6dvwkHmqxzfmXwrPTMUs6PKpARPfQs3hrWkvcpwMkmt2UEUGvxyWdEr1FUFHDxjiF",
  "key10": "2YiS35QXeEGcz4DXsimUDZfULNLoMgRy9RTS1YSJ1ZAGNcHtrGQeRsh9FtEMmVubqzGJHjyE9TMzWAjrpVHUumY5",
  "key11": "2AThiTM6DyV2H8LCG8Ntz3RedQqVMQi9uyBL999ornXfihs2mdAQrKDvG4NzivsBK6YVFVddtzNg7RLM2MPzqNWP",
  "key12": "2dK9XT6Mt4icZqXrqdPpXKD49FemPRtBuBTpX6JzL8LjgZSGWxL9hPNZ6nFk2jnCD3pstPWxrx5MvzxyMis7kDEu",
  "key13": "4ei8gFgVP6Kaw9PGjWmWCHk6wy8uga2DLvSCpXNshux5d3t49p6RVXT3eQF9vzyyexYunRd3rYBDyQ358swpmX6D",
  "key14": "8s9p3KX9WoBdjwMjCnVUJQA6Sw2tAPaEdKX1L7kESMLWXFJ6pZzRmMADV5aw6KuKpbNHFqwXujWeZfx3vCoRzC8",
  "key15": "5zumJeDTozDvHvwkFPFzaX51vxeQ3FSs1wUfnLnQu6gczFSDuNmBa5hBJTt2eKLUCacdigb343UTNjW8i5jrj8Pu",
  "key16": "42sRccHLdQzs9zVa5wLeG1HUhUHWPcqZgEpMhWwRcXTbyL39qWD2M7VPVWeQPrWrRGuq5BHhDDKaKQSyrkQmRiaq",
  "key17": "2Um9ZyWwTosvZEUTci7DYXa6qdEyneZbMgiz5B3gfGaYPNyzSJ9NEGmnKzfrUNJgTbS4BpzUmLN3Us5CLHPGi1y4",
  "key18": "3cbhQxvzgoSYCVQE4tgedQQCsLrzE8d4dsBFqiFKW98gGoDqF87JjyKcjgbwg4z8KC5cBYs7qxMbPzrsdwq1Z7sm",
  "key19": "3PLGbArKSwkNLGs6BX93EjrLkyqSpVWKEaHeJUYSUSqgbXVkGjC541NVn2ZUj3QCYLhSeVgThgN5ZnBFfUwKC3H6",
  "key20": "VcvXNKWAxKA9ZacJYP2ZdMH6dDEQcsugN9EH6RebiMcurXrNdGsu2Qm2QKykpB3H5U4nUWX7bYRq8Csn73emJ1Q",
  "key21": "3Akpo2eqSyJNi9ykC4hHmHFP9rYXMEHxqrmPNThphGmNmyv27G1jktxtZHd39rGtYJx7rM8FUzg8N7xAA9oV7m4s",
  "key22": "2VS6hK1LbdqZNdZKeZXhmKhSdxE5Xa31Mv5ohZL31147dam7xPCFozUC2fhipr9GjnYSQU5ziLJ3hvbiSLvLtsg7",
  "key23": "GtyzUi6Xuan6NUUFtNiSEDADTP6NCxs7Q7iJJ7rvKfLS5razU91nJPwYcVPb9Un41XtGAuxyGBks9mXdTMxhsS7",
  "key24": "1gEARjQmS6AvM4jswhbEQCxephsfYJktYdsLZuwWqaK3QWVwUo4MxVE9e1CmRycVeSmakY2JLTwCDAwXcy6YsPJ",
  "key25": "2HTGzuVoWVQLYPobXEuSHkrvNXaUjTmQ1sCs17zLmAsXDwMNYRHLPnjWTrvKSLcrWW63ov7dPz193EbvSvqqgT3h",
  "key26": "5JTjmmrWfHW7YG8B34ZuEA3wHTbEmKdvfN5sr1KFtC8cCtAdjK3B6e9jge4yuRjyicoLeQxaQesmNe2WAiXHkkUD",
  "key27": "2jqJ1oFW7zFxGKeZL25N4MCh8xtWAxSutq499sp3TpnV6yMw6QHNnkUdp4rYbJVGmGHeYYN1HZ6TouiwuZamjEjM"
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
