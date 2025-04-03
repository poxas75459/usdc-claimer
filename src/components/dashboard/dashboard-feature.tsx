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
    "34KcNHmQboRvSZNnH7WMfeft5Gsyvt4vT5VkQ4JWYtbbdAj9mEd7V1P2o24U9xzyR6afhzQVGAQ2bidKFjXtcnNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "393xrgTCn5bwvUo5kjFEMe9njtN99epYCKZNQaKc21KrA1NaFsZECdVutwQastawWSGaNjtEkpB77uAMienSQhsC",
  "key1": "5E51buZKT9RBurReUwGBSbYFz9DuDh28SSqk33s58xcBjVvufymDbMdHY3VxUr7BWhYCLdmCMspGmF7jCLE2tYQf",
  "key2": "5PjEgyzKh8uhgTZXqiCDBToz4zBjkD8DVa14ow5p4NMTjxq87naLGkrJMG9Gponub6QYkwwGwK8wzgJ2cZgxDdtH",
  "key3": "2ztZPeRb4EE6b4Zo4GWCPPinuZbYMCCHh7EfM8ksQFMLDaAEcC1bBN3cvgC7DkNhFzRmm1HyYMg9ZuLdv4BoVfJE",
  "key4": "4fVhgTGv7FUPfyNgN16ybE7Q6jMpgmVH6m2HPdn8aSREe6KWJwoFEPhjEYfL2bQTbQY249ov4rnhKRKK194Xbi9i",
  "key5": "4EKXw9yVJZh8ev948B6BaJcxhiMzdgkWtg8Mkd7xd4NQPoBhFXf1SDU5nHML3LGyrdCjeADC57ABEfS8r2kZbosz",
  "key6": "41HWeemd32os4rPJ31kDnzBa6xUcjySkVBC2GSvSqf32N75CPJ1Dg29NWaVmEa3opo2JR9L7drkgmwCC1CzK5JNg",
  "key7": "24mZKc9J1ed1Fvk2e98RVCWtLi5zFnkKkaRS3d3W4BJSvp7T44onz7aMu2hHaKBMF68eKduvHEggHcnCNjbrtLuq",
  "key8": "57HTGRUQkKSh5Tios5Rjxacr6f8j4Q7eYR9bghUUgBzDsKWyHL5LtxeyqU9LT9b9TNp9W5ZNRQYMkcTcC9Pj5GCX",
  "key9": "5QGEvPy7y6RA5WjGZzA33xTkSC8rWsHJVWjFtmG9cvEtvMbgbKQJVAnKH1vFhuU9gPKrSJEvHy6waT3scpAmLGXE",
  "key10": "44FBVibLTXBXgBpHKPXGsmpi51dSREFNYvmSDwC4qsffcMtApEsksP358oPnZ99qo2hD6yYjd2ogNj8YH7p4dxBB",
  "key11": "4TPjCuXPfZ75E2xgCbaFRviantr2jstXHqK8sKWHqyFnuDLtBnNyL9te53B5gDPEwCPkm8ZHLpk27wkdS5Dk6RaX",
  "key12": "5zsVfPqa7LMwsx6PR2S9JaVUB9zgok3sHwR6sx1oSPMzwaBPSszLiF7RqukDw6kUU8PrVenVoKwg5fLY9p5Ri5J5",
  "key13": "35n7ScNhzpKamnptSmf1DfbWwHx1diXGHgV1h91Unb5pF5b6rhhY2tSShCFe8rGH3SZqVUgPCfsosc51CmvSZvPV",
  "key14": "5uF4jcv8xeRg7K8jWUbM4PA9trCYcireb9VxwDAwbTJNn9DuWqnx8PqkLSbK49CtFRWaEHfzqSk22kaQuD5wxT3G",
  "key15": "B5ButWYWrPk67kHBKg3WrL3WFtqDRXTyUbG3kXnFvkCY7AjRUBDp7tnNPfnQHtHPbbfHX7apKu1WFckzdDAe1Nv",
  "key16": "5A2icToGQzbHUmSShuvvfUUV2EyjYDznGE6d7Rg4GxDq6Rx7yAUR5SPueci8ahQnJHUrCfrcUuu9jADiEZgYLuVC",
  "key17": "5kQa1HffJLxakqwcW7mas84XeWUdFBDPTNM6K5nFGNzHwRusBSegQfseVGMkbFJtxDdc641ExpPW1pGxXB68ZStT",
  "key18": "3v2jg2cxmxCMGPzujDUkJ4di6BqbjPwo6qZA91VUAwTsjMbBduGyWbgoZ5iitb8x78tXFBfxM61KTf3N8H8gvGm",
  "key19": "3p1yc7XURsw8NJWSSSgL8DkjWhBkGPgekcBhMYU4erppnZHofJz4Q7Xfip6iZxUJdMYQrJECmrupAGf1SWdtdSZi",
  "key20": "5xtiRrGrMoKWzYNJuGzuzMtAwvLpFWvjs85344asq6yzRedFfQJ2ng6Ub1tGKaybVhqZmMf7DUik8mNUhAciqcGC",
  "key21": "QBqZC2K3ccej94G8WDkjV6rCaV9FHsZRFZBWvrYWemi3cwWrAxBym61r9wqB6tePUV1m69mHVehhAXUhNahw9Xq",
  "key22": "2rtXw1wXKT6bgAVkXN34nn6CgLdtyMcQfDxg7RicF8YDBYaxx7SZVoCWCSzpa32oaX69cbZbAAHcyd3VMDs2tR91",
  "key23": "3XUBBYEobaB9bbFCVUfsi3LBbLAgWHKdou3uvYGucKjbserpLokTHeXjwWi3tfudpunKeCFDJ7c5jKrfNkd2xBbj",
  "key24": "bJ5xz5DrKUPhGhJSQFPorrkBoqwGPxZmB5s6BZT7oGfs9XvjZsnG4PmsriHUhhBC9ed34ijs61heKdekGt8fiFo",
  "key25": "213haC1DBfoHGgUCyExkxDa2v4jHreyc7KdfqzNtYkNdkiDywAegU7bjp552tbYffj7Ar5458EK8Z5jb7rSdqa1Q",
  "key26": "557e4RZ6y5XNXefkBXD4HcqNbEg4V7oyjsrfafkfxW6T2ySTPcLnQTs8t6a6Zi1Tohw5rgrJAowDpCzSnS9QAJu",
  "key27": "33RjRedyViW2JySYtAdGLiwhm7LKT616FgFanj6RtGi3ZxEgvpmazM5GZehhzA1YWjReDag98P7w1tn5i9Q16q4",
  "key28": "ryJkGhC397SnxfUmN5ZrouLur6SzU4Bumn5dy6aWwMtLhXmNXbAd8sMjLSALf4yJ8M7ViK9coAwYR6DzphNnTZ6"
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
