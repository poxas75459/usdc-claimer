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
    "5zPbkdmkhwJSaZzzuuSbgwMrCkLkpwp71UxjA5CSdx7QWmZ2kmMjiQCXkU9xAC9kq1aWF1x6nzvi1k4MkFT5f4sL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LujBPGcBZ5TsChgTXccUGJ6ySHakUtmsWGQ4gDjs1HVd2nU2Wuh6DDimEBWk6hn1XRouB7f1JYcgaxTbsJNZBKo",
  "key1": "44gjG9EvrE2dNo1sbgT1oLzHyfd2BioQHsXR78D3GoruwihLzuU5xp9P1bAuKSPJnfj2YbvffQjkkPYenWtRgGiu",
  "key2": "5e1PwCWdwSqifXswz3KFX2K45KtnTsL2uyXHXL96jqUroP2ehHjmP1GKy5WfDTtbyer7VPQn12xnqfxTZT9m5bzf",
  "key3": "4FmmUBFeMQxNZhtuzSj7uAbF8Y6JeisyvQUF1xmo6iD8hsVp7ZqdvCMkAqwjSq4v5wD4G5t8YF7e7CfYa7N47X9U",
  "key4": "4Jc1QBMKYnDYknm7qfpSC5tJMZAA8nCMWrT3TyA3KQmCAsNFpkBoFD95NfgKVdk4UhNvrTekyi5JtceNt5TTuzGU",
  "key5": "3ehbhqPHpn8C1QGzsntmtQfukD5AtmEyDyzRCzpSYsRsngdnqFZbV7zYDXS2KwaK2Jz5Kj67sSjTv2mrYgGdRMzz",
  "key6": "4tYAoDujc38vmqgxLanw5VFkgMXJoTZm93RKbHaL8mxtdHUhorYWTQ2oGyj47rPwrhPUWzJTSuGugBQskVjjEKeA",
  "key7": "35EFnT8d8vDeUCiCaa8h3dUeJmFWFzwNPwujVyMGxmawuoJWMw3zfZBgi2qdGf7PxSwEKqHeP5ifYgoHgSTuaPMG",
  "key8": "3ZrfDGqVwmMwCmUGYqPE5E38VQ44v1mEp3gdW2dvT7xRu8uMubBpUV1A1YjSUQf1EAfVEZ56j282bnJQk2EoDUhr",
  "key9": "5RXKwZQ1GWeYNrinmqc8Hvvp94iMXpxtYdBxbAWZK8q5zNSm4CxdLBzMSVrwmwMYgYwk44z1XL5dNtbVoomrMyxu",
  "key10": "4gdmTZFkQbS9FiATvEv5oM9Me4dQhgomrqkm9vKceWLECqtVm5zHfmcsYkATPQsdYJhT1sCSRThJx1NjPw9KrerQ",
  "key11": "2KAQbEAJJBGz6qoXe12sTjfLf5PzjumvteH27RK7gR66bbN52jLDYQrGc3GvBx4uidhcQtwufyp5EceNK8C2VWmA",
  "key12": "GChKbHoot5AoanWaQRRrPRNqZnHLkvxZyXMpVqJGLTXUT12ZYvNB1Yfeopn3rfiD6ZogiuGL5mVsH55VqRxduuw",
  "key13": "4zYUVNfTN4hLer1TXJaMos9RiPygN7KchS41zz6nmyjnKAaskNqpevkAS4cnwYTZ2TMjFVRZC99rX5ry8etJrNmS",
  "key14": "3KuE2XFForK3WRKnmjJk4u5XWHiFFptLxhSKJPBwdxjFThfeB4CFSfo3nv9HLCVHtxH6ix8chWi4zEa7J3WxVHEB",
  "key15": "21HwvV4B7oNf7wKsynP1FEeKPz3N8akYMUoi43dLj5CuTkqnZE7mCqjZ56uC82bjnbYLk1ajRYiC8Fmi3ZB7xyfg",
  "key16": "3Rd5eGioWcP1j7cqfbAi8tMTn1JpJtDCJPCBB6neCuj9LsoLkyPBGsy9c6uLzP6KrRWYqHkXmDadXERs6KNbosfZ",
  "key17": "2A8ocuNM7ySUnto1EFSDyd59rNPdCrTiXg1HsVA8CMGoFhqPevKgKdHx7oU7usNLpaeXWkpFjmuCzaUqTXworch8",
  "key18": "5fVVBTPFTTqFoW52sEdF9qC7EDtSjsZQc172zTudUz8oKAHfTA8oeQHJ1mT1kwiSWyw8FitkNHNKc7t2bkShAAW8",
  "key19": "3Uqgxwp8mDpoen2dEmExVxnUhoPAEZoKyZ319uoDp1Lz7pcNbDWe5tWXCBvjpkvwK3aVKqNX4ecJ1iktWtMraXQj",
  "key20": "vMjBpV8JDPVaozM5aNa4CLvR16EiLzKyp5QymjT8VWyco7hhxECFCckK6RAa2xkEfvnSoUQT2GbrL5yaz8fHh8h",
  "key21": "cUvA9JPTJvsw86NAHhmsuBU9fRFnHT2VWukLXUYnG69YvhKzd2GDJPMgQ7NCnENfr7d5GBeXTUN755krQzaaSdW",
  "key22": "5xxPDHcMPZuTYECxdFx7fcbg17Ck9kR7sFAt4Y4MZJBm7RpA2VyUDxQ3W2f8V66AJi4SD7aVCaBgzUuTYfbS7cTe",
  "key23": "3Sm6WXCCfbePFF3frBRgKfntDmsHyV3JgL3xrLkCKCTCMcUsxw3mGJmkg4KvYDKxupiErrXNrwqsYRu11TjTqosV",
  "key24": "cyrcKtEdrnNwyK6fYCRKJCsFL5x7UE9dRbzc4ckJPYG539m5c8ywMgvjVWbXgzb9uuzavFMnzMUoTbdsnq1mLsq",
  "key25": "44eHc1aJzikKubTBBAGW6JnoKekSMSEd9ZRn3Vea8FpScywQwxgkGwzFNFe2SDLqc936NHuei1NB3MCUWTiipror",
  "key26": "5s49pV2eeKEimYsKApMB37kZqXXth9wL1P8y1k8Z4VSh4ocWjVe3Bn27qFE7eGhmccHDAJYaKDRSxXtzaK5s1CJU",
  "key27": "ERQtihDyfSdqsqKgpmb8qfa4WU9bzUWuKmVh43LLT27rbr9t1ZLqFhgUW3SosxX74eEvg5QFZ8Gxx52mCpc5p7B",
  "key28": "RXaTFE2YmBaCMVyoTu1u9jhSvnk2yhjYCwDaQMDskguhKATrPNJdCctNqHPZz5Mr47eXvB2PhmUfwGd7cF9VS7a",
  "key29": "4MjV6vqzAPABNzbNHxYUcT5oZQBESvJsfYNWDAB2TSuz8agttxixou7eBoVznGBBV6477rNUJKnMxU2scvxKPxS",
  "key30": "4knwzYsUFXmctmKSqsmjLR91RsFEU19zqfUS8DNyEqSYK2PbpTYapmtD44dMmdmVZhLApWDz4C5tH7pF5PQ8XVgs",
  "key31": "4FF2U7yPHmTGkLRcCZdRgL7Xor7BxmpqPCsjzt3zyXuvy3nSTdGC2GRaE4qzTFEz5eNpnKszmoS81md9Ug4cer3w",
  "key32": "56G6Jpgomv6H8NmArR8tJDM6ps3u9pXLuwtUaKe1EWGJxmpFEfEKAKE2UQM2kmZMf9PvBuhKT2mjbsYoby1erwGG",
  "key33": "18vrDPbb3QtVj5iREtyLYa1EJYtuPqT7YaMBwfnMAJVGkZv6oGjwCySxA4Zftv7neBQVMXLTSRjeEeTVaB31AGo",
  "key34": "2ADcK122nVrps4nCf8mefcdCDbBsEiYqv2iGvPUpyoQdWJV2VqhPuZppjW1eEZLNmoKSYtaSHLWScaw9NQMhFuaQ",
  "key35": "3v5iKfC8f1pza6sFZVRi5x3qDt6Gunj9rJTARTXmNgZAB7y7RByB1YYkKqUcSN2y46HZw2SSqeuzZ6mLPjcumcTm",
  "key36": "2fBFoHLarpJtUV3tQK76XGEYytTuBHYJDmhJjbBzkfabDY9cmtB2VLw11Am7Ex1jee7cDWn3aysxRXExX2HJuGrB",
  "key37": "2h54QFrN9RBkmKtoZUPBeb3GFVn9FHCZWQmBjk7ZnD6cAJERBPcHtiZanh4YJbbJ6j9tMaAZzUiW9NTGxZ8m1wAu",
  "key38": "fz5L6SvcEzvGXHXpyJXz7Jrd9XHvgrCtk8bcVkv2UTXLa4RvkewZQrQBSEe83nJf31wvhSjpkYzKwXo4e5xKg5H",
  "key39": "4tXV9XFNqxXMgS8NL1WnjBPnvFDDG7ZVtAVUmmyvCnWA2PKJLYBzUuYG8nFRdFExK5YLnk6qfa4e1uAmN1NvvKim",
  "key40": "4f719mZuRU24msJyuefzH9pSyYEXTXvEARmD63kJwixpMgy4K7nZDtsK95mroq98GmnEvdDGtST3NVqe7BctvkwZ",
  "key41": "2g9d4NJp8G8pfgXgYmNMoyvuNucj5ouGi2bQocbJdikn91Bxb84fdE83TYgebiCdL3ajrDkUnLj5mKgAQPgNTmUP",
  "key42": "4d8wqPk1EwuwqRwKWWSA55kpHbJp64XESDc1mShJnAmsWDVVc9H8UE5sDQmgfn6Wx8k8NLs6gitAwcL5TT8S6htW"
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
