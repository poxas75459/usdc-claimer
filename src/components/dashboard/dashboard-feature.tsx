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
    "355qrSx46wmTmbaNaWj2KcvwQ8PdB3PA3KN5dkFgwEHbfqJXjzUzYBv8Pm1wrQg3RLTr7iY1cAYJBjzqdrE8PKix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wpWFVy4g7267pRb2qC9bB6D5pKpNehQyh7iNVjigLaa1TWmFJPeRKjdLtsWZhUWki9K7NeZ991uQzFZTfxmcA6J",
  "key1": "3z1QAWFz4hPXQqnzmGkUaQ5ABn7nL1m72hLJhgR3KMH4MYmcidwqYcSD5wgLpf89MFFE9qwUNasd8iixHWpMgTcB",
  "key2": "DD5f79MGydM5LPstKFW9vxFGKCARsA9xm88U1GJHi4JF5nSMBkTqdYvCcXMLuvxSaFNUDLxSjvKcwRebvt5KzRf",
  "key3": "33nA5emxKpiu9ydXFsyCtAb2GrHXGzGFU5NLK5StgQ1CQPpH95R3tsFYyme7JRWphVot3rEd1kcQA9sZiDKX3P2b",
  "key4": "3ArU5cPAYJ7LvVPDAUNwVRrKZdVSDpcToWf2iDZavJahJwq6V2pfntJiaBHfhXp2D5v839DX2rtAoWtQqcX2htJU",
  "key5": "5BfkNenbr6FCgHVCqf48c4ZJXYaa6Cs8BVTprZuVhn9ZRbiPsGzg4vmebMy1ANydUF82J7jxETmpzNgWxj1iF6rG",
  "key6": "5Zy2nhgZuMHypKe8hJT1dSBXmbRBQ4zxR1L1Lv1xC1SUrGDhR2jqqieNoE3NjpyGShjuUuXT9L9GYdidtVzJgmMS",
  "key7": "5otBCkqrxmXjavoTT3GC4sSCSgK7oACQxSFf8D2cDf6nX88Wze9Ra47MJ8x1Zsjb8NiDzwua4HSP5diwLoVjhMp5",
  "key8": "5WqJ6B1zGUs4prFWH3wyDF8xgx8Y7NSjPe2ekfraV24oWxAfeVb8PBpw46GpRC7cLEJRwFUXH2yBRxQaMB7KBwgM",
  "key9": "mJ7vKwDz81UAy9eYsqqFz2BKTRN6TGaZSMxGtK4fqKaDP2sim23FcyDeoJBmEqTEGrZCFpuysFuUdMVFdoWMSGd",
  "key10": "cu3wdgxxQ2CDurKVragLAMQ59tzd63tRcRvmCTBUbeMqo1jZs2mUjeBrYDqukbH5mz1hWBoYB8NQ3wajBwt4XC1",
  "key11": "5AMkCC8hT4LvQhKoe9S88Wgj1nahWirqWqnHWxVfcJPWux7US1ihPsLdQQXYBYZbPq2oM9DLuihkbVQopn9K8bCJ",
  "key12": "5xpVaWqxXHAFukxibw3Vk8b3hWvagEn1mirNUqm4faFCpTfCbidMkSU919kBHzjLA7E8mr9xv2YqPYgwhzBSnd58",
  "key13": "4ySRB8XMyHeVZi6GH9tC7CH4TLWQMfweR2wk9NQUmS4eZ5Ly1Tozrh54raW2ACZbL26i9ZeqWEZXwdbS9gkeo8zP",
  "key14": "5Gmzq6VUn6ovch4U2xVf4uiRbzXnbEoBvARdxer8Yzy9xfWukYzjCd1WzpY2QQvu8cSkEATyRWxG6itocamUUsbq",
  "key15": "7C2AzERWfqwu5a6VaPza3G6s61xxQ9QXJhbAwPQeJfeePB9teNVawQZ6gTNeuJFVitb26Gva6Dkq1ra2qZ9vhH1",
  "key16": "3p256ebZyjUb23x5SeDqeVGy2rS16kQXXhnkDhiAmjUReW5SGkVq4AtoKC1RUSby4WPR7S5iGTsXDpNP774hGLxA",
  "key17": "9jSv5xeiGxoQCk1PPidGrJhJAMuJaSwHaeCT5zoGaN5sJJZteHPHHW9kMS6AuZDTNSpbeKedAjixzMf98nGGBu3",
  "key18": "4QHUTya56ebyaN8Gv6SPi49kLKtuH9WAREismroffPPdMM875RvxAZFr62mbrHG54TGpeh3b37PFaVcJVo4zfgsj",
  "key19": "4tpgBkMV2uSmsSmTwEFr7fSa74dfKsdoBxjF6oJXAYUVurXH4qaeoBkVEUYajjjYFzvQxptrNGbfSpbwP4wVGjea",
  "key20": "3vp8hrXQfZnYLVEbtdBVyeCk9s8YU2fFyxd5fDmLyKDNgMUPuT4KybbX8ueYVCNxjpW1AhGc2TRFV4RSFr1S2e8N",
  "key21": "49TpkT5DGpNfmsC1kRpQidb69VNGJCiv97nF3eTFjaVS3gnxP4vKbGdXRfFFsf13j8LfBz6W2UVruNQZpocPt3vY",
  "key22": "2u3pFQ82j8mNYadamJqaeNWMq383x2MzpCgASN8icBuN37zL2ksfVZKUet5rZr7Sp1sfN9QcpDAGTK5HzekmYyN1",
  "key23": "2ieebBER2qScySvNEMe1Nu4MkDz829mo6H7pmfYNgEmzAH7Rnd2HXaKA4Zn2mR9VBQjBtuuvmDzbAhC2KFHv4NW3",
  "key24": "4eAqorD8Sk9Yd4DmHWZ8WZz7VpwKe5sezkpiMpt2w5MokbypaaDASeS6gPEpCg1RmQ4kk9Gepwc875RCjLoRgT8e",
  "key25": "3qB5jhRWM9iBZqmEB19VqxZKmBNNKcNLvRJwDVhP1WmyZBH19TqbuN96mopgtPtSE48pCprHymBQGAjmCptAgkNN",
  "key26": "3wnnuqB2q6wsFr1bkrxzUbke6vFdffuGvdKnWCz5UWezw4xwgtwBD9RSHkHuiUqzXYMEmzoM2oaxaMZfu64fgBct",
  "key27": "2azvf2EmrSXqK6D6pWMQwQzPhj6a2y17iTVFi8ZAzVLTyHy6cJHdaso5SmevD4E2iGBmHgv2siz1CUWRggiYzHe",
  "key28": "37b362R31BcLKfNvbixK8nrZ9dwJAmyebs8HyNi6Lz7d8MWXcDrCFrMQHkfCnZYmDb2kb4BmFqV1d34DE9Em8pfB",
  "key29": "39CUK2Jqk5HdUdNFnZDjDRr4vFuUqTkq5dhZunDTXLutLwumvGpoPVjrNS9KJKwZ2WhkvHwn5MxXByWaxKv2PqEf",
  "key30": "MrvQkvNVuQgEewZ1aYC4c4GApHYoeFpn4QEyE11wrmZLdwm4gjJ8sH6GnskPMN8sWoEzVK41VbrGNAFB2P8PjLF",
  "key31": "SXuS9uQDR8R9G9AsniJJ298Px6fmYQvsEJDqXwBZVjgrHSsdjCvfUL5vbn9U3WvgR1iBCToXSs3U1qnBwouPWXj",
  "key32": "W9W5PumskfHixWmyPY2A5eJEs4XErfGnQDroLXyD4rjvGinNmpdDgQDzAtawniWuLWwX5JJG6L1dvwbBiYHeuC6",
  "key33": "4MfC8xEwEPt6b3FMBAHnzqJ3LZfeCrTwvWFPwUBgp2UZ4hybajEbecWXMUrsQCVyrgmurd39dS5WEypuNT54w1Q3",
  "key34": "5ejFyvSLzmCfNMioeygFpucsvNJfmUU1c4sXh55wZ4pP9qFFViKox7MhZeWqzn4kuuB8guxVUmQwLhx9HTk5FNjf",
  "key35": "2ChXRJdBC8Ar1Jrq2rasx5qo8Exfx1TrwrdTTcNHzWwYgELeqgNnAJFB5CLPg7dNVdxpbYsLwJUr1vHSv28DPk2R",
  "key36": "4W68TjNJGsVgeH925KpjHSBhDNB7K1wcN16m3jmkny3HQBhSA9NVpTy9YX6vQtnXkeVgirFSMg5z5o9CHXA8PwPf"
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
