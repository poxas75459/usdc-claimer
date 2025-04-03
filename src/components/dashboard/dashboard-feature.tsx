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
    "qv4wwZq7ru4EDPfwCUK2a78Si4Gvkn8eXTJ9sGQHVVeDdSCVKVrc23ARH5T6UTgDJXwhuvzgKBmofCXnEW9FxaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SThYAVYAURPWTQcgUsqWqTaqZT51cS5SWCLZCZMcKaLnq2tgiuf2NtGH6q7TMyX1AzVRMoX4p5NY2omxXrRb918",
  "key1": "3f7e9UrY8MhBhTwwzNLjWTikLzWKPvWAZX6uSEDrhtexBFDVTm3ox9Vw7fqt3RxUC1bhofJPo36dEENFjWz9Tbd",
  "key2": "3SYggpDAWWofqGr9XJ8H49fTUrvFzw8EizJkSNsDSb4VZNidjSfyLpTUq8XoaQDM9ogoZiJUNxoRvuCQXA1wFnfc",
  "key3": "5VbPhAuvA5bK4MfZd1yaz5GeEmd3M9odrWWRanGxG5GDArdsqNkPpVXhVQs2pU8togbhQ7X15smeUSujN1BKEEd",
  "key4": "51FAAucbi9yBhD1S72qF6bqKookkvV1gviMtTqorCWnLNodBnCEgjQLdtB1dXEp36kJTPn8ax1aFgWerSRZpnWLz",
  "key5": "3RBPNe8HdrtjjsFoSz6FsaV3eYYtS2TP2GrQ7j1QX9gFYRyXwSxFgH561nKy8FVo4xFyBPmNu6KMapL2Hq11sHco",
  "key6": "5W75P3mp8UAK267gNBWfFbKvtR535X3W5ZNXuFefG6KyEAhFM7cxpz9BFuhEGoqLrvkJuWy3wiNZLMknFLNerPVD",
  "key7": "5gTdzyo8vXud5v7T1g2sNENhSfwqAwerASv5GFZgEH7NnhEdqm6KWzk7fTQgsgAdR83igU943xvdXR2rRmsdDeud",
  "key8": "2VXvGZKA39rcsKDWVkvz3zkcshxuyNxjhJTZfFniBAwm158duH3dvVwCKZ6A6QfhcTx6KA5jx53hYpzwcYAuLV9N",
  "key9": "ZdX9yd76Yv9deKdpEksMVULuBmwAsKJQdJ8XuKMnUZQcYZfKFvwni9gnsSRp5DBqTVm7AaY3PRbzFQDhhXGjq99",
  "key10": "Z1KAH71ZnjSTKB9KetSDZhvZ2UV1vbfSptgC2FtbAwWfF31Jh6b6eWoiY2z1YjfLwA9jq4qYGG9AwuJ6VzY8mMx",
  "key11": "5QP8vcwcWTgs9M4ZUHDVmiQVoFkuHwJL9t94dZww24ancQUbXCcu4QufxaZZ58jWvxtUHPg5mFKoESWvpgDinYvP",
  "key12": "43eRqLjxJevCTfqZDz5Jya5yBgR8CEtnBjES8ep1PoYk9omGPwHSx3PK4twdcpBPoRFqA6JhtRHLPSzKG3CLde8P",
  "key13": "5cqh3E2MJdYxG7RuXSUJSqE1UKTHCjitAo7h17RJ4TTqg9uiHK9DtxUEtFKzn1gxgQr55VXwV8cX8YfaYsaFH2vM",
  "key14": "5hwAmkcwgFSqcQR7QUGmCT9QqPEEkVXK8ieGN11FYXHUx53C84PYGtLxD4UMmn3YPyQxPaHwrqhcUxozb2N7Xgqb",
  "key15": "2Amxk3KaEDT5GiGsWMxQmT8o5nSDL7CULdkX5PxDJiBzAN72NK7R1ja9QSkQEW1j9vz1r2UEPEMFAVdB7NYpLHWd",
  "key16": "3bNUY4KVY82GBtLeujpmVV1M2R2tVbb7urKjxStARPGw6ZeZJUB7XGQ5G2dQAoHH1C5b18d4NaFZ9NYATSx31gvQ",
  "key17": "a9DGCRQhRuK8FiTh9QcTXSQR284aSQEjUCwMPYcyS5G7CR7r89iba497T3BLRw6frA45z7DC6V79XWda1g61TEu",
  "key18": "4dZeVqGHDJJ3SEvSo38aeZYzwPEsCuS9s7YuRKZcjYhLDTZb4sUyHfWeBURPZnSn11ySw5mX2N8dAxoYqkTM7mHc",
  "key19": "27NNLS7yWw4wrRwjN7X5agxRq5Sivc6g7BYKZEYpqHJvaXrFKJdVe28hzXr36R3tkymrSt9TKbq746QYYZ6AqhTQ",
  "key20": "4LdESWAW9teZCqqKPnT2G75uPEKFnmh4kKVUq4Tg1yZzvjomGSLiQ4jAKCutsuJ3X8oMTL8bQvSDW4rFNxxw2aAR",
  "key21": "2ksKvPp5gd9RokLkp5ixJyskdH63ZoipMDK2gdxKc7h2SYVGZATf3Sct8Dw9W59QMvUV4GdmFZK1484of7VKTxcn",
  "key22": "2TbMuxc18K9TK8KkEP3SHg1SmpAZWgqvuLbfxVEKQHzNzVz27Hwd2oYhcSmxTRcGhEbm9seJgFXqforDTmmf6XA6",
  "key23": "14chXNkhaYhBL1QLyToR6teAdVUZf2oni5TPCzTyVfqsdA7r5rLgWyLGyBx9aheC6JZGrvTru1T9BvPZFx2MddG",
  "key24": "ihqdiQiRjQvryJNeaCeXfohDo3VK5nChxmopbDZZk5P1ATy3rYAtnR91zECnVT9gai86zUDK5addpbyXNT5ePKr",
  "key25": "zeBXM5P1w2WHbsSe3wq3B4QGXgANhfvfaUKNuSNZruimZu7vXkcQexHQUYnbW8FNRfhFpH6UA2EaoWQtF5NL83h",
  "key26": "2QynoqX6yhBiBgM6AVyEusmqQeCEmwCbpFNvn3uZnXxNDuwfHC7pR8zGVaoZb9xTXpmf2GrbP2PXKswAtbbohPQH",
  "key27": "2PYCkcyyJtSRpefJ8vpfG6tfittpcZEaNpJFZLByJ7K8DctX43LDj6hzkpi7XETEZRDCctSpF8uZqmgFpCW43esD",
  "key28": "XYA2ktmGv5ZnVcynssHoyfvHfPW2io3BhauSnmBpDMBUBm85TgDxMTV2knr68wtJWVVsRsu5oG51mWkn4UkHWhq",
  "key29": "5nPHBrKLLQ3F4xWjnrWWmMjELux4BNDs6WGw1eqCG5Hpc6ALq2n8y9EMQVLDBU4fsycN1cEnNwXpeQqTs1cTfFkm",
  "key30": "2F9hznHa8QLLK9H7ehgYJ8FdTZ2yY2pEWeCfpQL4ii61XPqE7TSqsEPs7dnjdMYeeZenCb55Wa4qL7HvsvuMzKRX",
  "key31": "2FSFh6LrPV2zwuNGZzSD34NVpfNo8WAa2z7rrZwiTmLRBwvPGUhX8cAFV6jHkbECpass4TWGuAC5Qar6ggnVGKX6",
  "key32": "21h2hxVqLmPiGWJpbjHPXNjNaEqBmM711QBbpMeNoi1UUqaY88LmHc7u4UAPP5DR8fEho1nkFc36sfsuRtFqGrJd",
  "key33": "4BFF6fbLiYvDuxZwegg1BY6r3h57v2bs1ijRrsUU4LsBihPChvYYxjRd1EGMVyvu2QMUxy9DwR59ojSA34PwW5d1",
  "key34": "3wvQ39X7KGiC6PxBo4ERaPKkoRivmJqXwMGFgfnnK1doof3LW62hbbZB92PYSR4YScv9tVkYcPaR9fTDsX9DDx2U",
  "key35": "5Rbt8tvbhFgcyDzEng32yGqUTLRaZmX7LUnvQqg7Tp5DCBJ8vQxaW2HqJyempviXo3F8gy1L7FciWLUFHFk9GXW3",
  "key36": "2Kc8a9zNq3RBJqsJzpV835exzaXopJd8FJGJBR65fMzA8dtgVu8wh6XZjctSrJ6QAe6YncdBQFETQZjah3RFZrAD",
  "key37": "33ecofoJCP8MDLR2BUDPKTaXQRMVSy3KGe6x1x1gFJKuCdiLX8any2JWndVnBcJbpD2dXxbb2uq7fcFudmax53U5",
  "key38": "dYrwEyswAHfNgXB2bBFdKUgVQW4Kbr7EfwM59ukS2AZjC2ftPMx8gCXCtVTHCrJ6TNJsStjsxgmuBpCwgXjoXqE",
  "key39": "5PaSpnmPwLy3x7meTc3uewnPH8CkvLXozqSPTgWwQF35wYZvxAzoKLvXcWWEtAVtVEcHFPAww4bPQe5eCiM8amw5",
  "key40": "525KtxABRqeL3hKdtgp6teWxS6ULDRuaRCR4zZVzbASnfTQwwsq2cUCthKLSi9LjjvgdGV3iNHu2xhHquTdkSApg",
  "key41": "4ocCJmxpjohWfmAKC2Yst9kedAygh4oobBiwzH1eDHtTre9d34DoqonRh5da6Y1WkZssMZT3FvMyZ3fGnCxUucnJ",
  "key42": "2LWod43i9r3hansZPQMMcJ2utjXpeE5nySuD4rABv6hp1qHMQz3h3XeBR66gpZHoHBSF5bxniLNPQVCRf7bpkdju",
  "key43": "MfFVVNDH1BZcNwf4jVAQgdu3igGZMWQ2vTJLHNWu8mntF7Wed2ZcuABQxSwJNY1Mm9FNfERKk4LPGHsGSUkq7BK",
  "key44": "28AE6unJhR82AmjbzhgdesGmaMHrNDrh7WbtqZV3aDpY3TVAcAZTuwsjxd9tMCzbgVNQgS8gs6nJQ4xJvfdxtrXU",
  "key45": "33DCeWws1EDnhXe5fJtwnvqBGgYvuWpx2VZLgNRyhij6sVpAZsi9ruNFBsGArAeMFVppyC6miJhKbyK28uLfUgrP"
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
