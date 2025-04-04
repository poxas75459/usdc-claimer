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
    "269d4jWYnD2GfWXEuhLeM5e5PKmUvbx2HuCzyiCNEuv9soSLw9t5e7FeTF9Bqh8F2VHDDJ5RSaRjan7HKQPwQehZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GZhXsM41FrabgXmwDQQwk5wBvqdWXzrhMfQxoroCNJpgEJLi1CDYP1GsCvp3TPAfZRk7GGbJPsvbhYvs9hRuasx",
  "key1": "2KrRaK3wN9NFeFpAgD6wW8BLeEH7JA7KWwYdVLY81GVi4rk7dQ8XoUcxeR1qttJNJrUawtKoGsd9k8hSVWFnYcvP",
  "key2": "2EJTsxnAgXXsqGuwqYwUd8um4FuEZ7jxfDJdnvjQjRemyo6UVrjcboCchB1tkDw7udMv1rkY8kexd72zA2XEDyxX",
  "key3": "2bZYWoms8ztnikJ9fi4bn3JoWYfzd63pRC1UBPKMbu1oqvWE12LSmM9mcHYLo7swTdiHmMmDXQdj1prreFMnuxeK",
  "key4": "B2nvt7hpt9bxz75DwEvLcMHxur7gRNJARNNPH5ntixBSTLnsmTBUNmp5FTeMxMSa2mBzjEeNtKQQR4bDJWPr1tV",
  "key5": "hPtx7juMTQxdbqtLNYRgxKmCAN5ktmM5tPLxjnS27w6DuGUwtVYjzttJRfEZKxNVMWnUBDXbwZTVUbBYzB5psHY",
  "key6": "ZuRCxGJDBEooAn95ZpwjRynzdS2mFUj7W6CYS8ADg9yE9JzyuSC3xYn1R5v1mNhR2bxLCCarNFyZWRVyVrkAqMt",
  "key7": "2GExDssDCefwzPD62gg22vAhCuen6FatacLvBjQhJtx51cg9q7QijmHDkemnQBHXYg8tChmcVM47fdieGpY2pSRd",
  "key8": "2GzkFSMeTQxhE5sFejKfQwvKkeMcUfugvMShbFxjBJwt5J4Ei4G3TzVUmL3g9THudhnsRpgZUQf89frCbZ6viRVT",
  "key9": "3rdrYXJA9m1zYkaa5WGKL94LmtfLduccXEaix4xCoCa67v9cQ833bjwJk3e2ssEPWjfttaFVMsvWpq9viL8kJpAC",
  "key10": "4N7DhRvicU4HgeuTvhNPGbwivCwt3C5R4YkpJGe9EnbKCgBwo3cVDhknSD64DYjcBiqXDPcZJh8bJf2QCCg4MVVQ",
  "key11": "5ABfL7Ya8FcZfsSKTWLrEDNBaU98YcXiE7KyWAY27qzTVyRgQ5B9oEXHAt4i8KMeaTRRwyvxKvSvZwGGXRpzM2nB",
  "key12": "2Kt6ZbTFNmuKasn82ne7pEmaSnx9iEvm85nhTeeGk5qBhwxkcC5QPbYfuAKgHXks7P1GGfEdWp6Umkv485v4Ty6L",
  "key13": "voezxsVNWFXpNiEti9gFFEAu3v1rLq53w7wC2Exe32VujFGMoQBVwb1VjrJu9DseP9nQrHJsYEezqzUdaqL3tZx",
  "key14": "ceLwMgPBz33PrQja2D2eroZVnwaGGsbrgkh1DomcdkUkE7RUWtqqYzRESQLzBkqYMMWXzbGDTwrBB5Sye8La79D",
  "key15": "5FSeY4QP2inYfLK3vaFcVXFydd4oFKjaHJYXV8vpW4oLrDWjAWrZCutknWfPy6ZqLLzL8FZC51PiEgoEh89vrySA",
  "key16": "3Pp6966xPyJ6PZSBDiT6F7AHhpengjoDTwrTafL9sQz7o2BzxmgSAse9z7raxNJF63Kv5yAb4irCqECEBXM8yH1i",
  "key17": "sczSa7ZFD9Yg6M9kGLuuVx4rh3sGBFqVJnpmfdPV6gsaxMatjMNULoSTJjh6CQ2JZxwLcoSXSow7xTCGdsha95k",
  "key18": "5tRzBe1QxKSPKz2Yh7uiAAoXfcw7Xe9ZNyFZ2LcMXcvhzRRMSejPvGnRWpWVNcP11rjkntVF4h38q1aopqN9DKHY",
  "key19": "FB4fykEyRi456eYn13cREKhBB38vs3vzGrLbmXXhFb2WbPcT7Ui2y2CMLPD48RFtKwUFb5PKH2RuioPByEq4n7A",
  "key20": "4gny6Y4aCNdwhzbAxt3YRKFCyshEbf33mLJvdk73McLfY2eGXF2AKoKKeYueWTipDcBd1mzWvVgDijDU8XdH9tRj",
  "key21": "3VgfZjP27nFtZPZNWykM2D3XpEoR5GKC1xzBPdwNxpKaBRrMthUXQjh53P8xoD6UVdvPtmmvRjeEJxfrFaFLLwan",
  "key22": "4GxnCrQ75gtMvfKHmxe842k4hiFLdbmUjbCoVb5y85a2UsBCLCQNNJE9bUgXCNhpWpwtNN18bmKb4pCqCwVYS2Ry",
  "key23": "5xQy5rv6gpBxwp9DgUi1XRDstTqvT68aEZ7pzSEXrzR7oa8oysprT9v274H6bSgePUbvMgao1yoGL19pt8wUdHsS",
  "key24": "2CD8EZE9T5i9sMsZtPKGbTs2PkZvq3VfSRxRDynTgnTXCur3aZNiUCRyWgob9snLjyAS1ENGbZz5VSgF9uSZMffJ",
  "key25": "4SPc9ZQTTxifSF88LJFqG68wYekB6PVAJXwRh47vqeL45BK3uQ4WneJkxj2yT4zEZeqTtGiHhVcFMD8Q7EpiTTzG",
  "key26": "WJ5Pr2fiq8RrGTw1oxKovC8gRNjct4nFBHWxypE6mp8gFAVMo2sJd8qFGSFBd9n54wgYReptihovaBhXQULYJiz",
  "key27": "5oZ7stXmVcLhzwUCQ3CPKL8gkW77uTWQuuaBKtr4s3m7hTmyHMxL6dnJX1qHHB6nVyxW6PsaUW6S2b8XYFtwpGH2",
  "key28": "2foqQSYWConavhRmWjxwhUQQv85qG2Q6ZP5bEybZBzYMCHckvcWPYDTehFyxe7JzDpLiZdrKY3KtmamqCuXvf2Vu",
  "key29": "4TQnpsL4xdcjURWkEjhW2CMisgjTjLKR7gD3x1YAPV1sYg9dEri7YnRkYN96nJx3LviZ4TiHTYYUYPydaxWfJBEF"
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
