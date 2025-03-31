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
    "32Shs8dm1j7SxZw6aekDGSuy9VTsCKTzV6yyHrJyeqFCvAae1SSmPNqTn4QpS1WYQWzqXU4EQtEmcQqyMLUuhfQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4riSbbhwcnSjdB4nvs6wbKQdHkf5rSwDznctJcVWxNXEm3xXpVMJR3jrFCSuJy55g1nbkhQG5LU9myhiWUdLiM5a",
  "key1": "4E2gqaucKEZge5Z5veqDF7UPhJEQRx6g423tmoLFZk9Tek2tEprvRMjw4uL9LPRNrN6EkWQDKL8ygPoXjMdNJueW",
  "key2": "4y8Vp9173cM97kBF9whA3QEiqigWjhbaMV2C8VAR3SwF4R9DZ9qCDxCaHPE6gFwD3bFm2tnf4oDHGWyrJfH6X2hs",
  "key3": "2HtgBrzVAHJZSLrZxtqACM9nQ6hdDqxcwft4eA7W78YHh82acApDCBkpeo2wJMnMcyXQALKBGRxzQnWHxkKfbN6T",
  "key4": "dXSUB3oNuzrV4JuhmUREsAHr3GretLJfP1Lqu8tfMDVmxb7kdJAc1zbqBj39KbrRBxRc7VjrZk6fUVRaZsCeAs2",
  "key5": "W3knQ7nWjdx4veuWvWcu14WdsjKaivs9FWLmPLFo9NCMhJQXWjYwJs31tDviQhzxuGGQeQzw4coieCj6onqwsm1",
  "key6": "5DHMRJwANpbazBSoub8BXMDUmhrtDmXUNt8gCshZztZLzoQN45khd49j3zgENfWZ1Gd6iskvqLyBDY3o8JRwnm8A",
  "key7": "5Yv4RgAFdhQdS9U3M9VT556eRTyCgo1MfwBLSgaFkacUVHWJ7VTYwXEoLZnoCV1xtZ7T2dM8jumsFT4aWzKra36P",
  "key8": "62PoYvCYyKxX1TMFW72u6LkS1pRuvGp1dj3Gwv9adDfPxz7p8Lxi16ch1tBikMiy91Jy7czu3ey38DWsM4uRkqet",
  "key9": "4DQx4oPNuNbRDYumK4J8aP4NWq7GvzY5ke21AcfBcJfnvyqtum8zaZQ5esZnrfSuxonUN2hByFHtNQumgnJcVMpG",
  "key10": "5piR34E4rhh3NTzigeaWgNXumcJ9vMmgcmdFNNsaD2yExX25hfS3HxJwGC6Wbo1adrs4svKZBcdFdb4RNyLAuxFU",
  "key11": "5XTNce8uq6grUdMSxUb2e5F7pYg5NmDYWTZ4Y92mb8zfZdw1EAzDwhe4RfbuYWECKaxMEeWcWVwt7ozJTGXCZfXQ",
  "key12": "5s8x1ssoB7pd5ivc7gz3K2RFeLETYJ5TnuNrvbFV4GfMW2WqjzLNixaDLq8jSSEfnMUeyijr1fjDPhEd4fcDgz31",
  "key13": "2AQwJfsehRzrmDA3EhzhahqX2AQcngcKun5kRYYrFEPL8eWX3WL3cZvD9kBiZpGRjubBUGgUYX3FGPExsgeFBkZt",
  "key14": "3koCpvhbVaP8HyM1tJXE8EhksgRxVGtewpxGNG5r9MUs3nfE3buEyB2gxuTawtqKpEytJGp4wNXm97xiv9fyBzou",
  "key15": "4Dm5HBEDX51yDFJopnYfnJ3djygZJUA92QTaSfd7qioXM8QwseCcypoQi8Us3t2ebfAqJTebeoi2o4XykdXSSNMR",
  "key16": "4kPmSa44XsMQ6jTx5vVSuDbkRypV4EjThuWsgKS9AwnfoXu5EhCaeTyPUjtvN5uUW7P5aWGooNo4TebQoh6iwLwZ",
  "key17": "3dcaXXLo7GWXbCtfi2sCXcGZVEpgTf9fW8vDXZjfG7f1C5auWvTBrabeXsXtFMHXEW61o5hXhashNqg8qkxgnHXh",
  "key18": "2V7Y6wf6kZP7do1QJrieDfUd6emrdPAJM5ddXUxUSapqSWpjsqgEZCrRgFpUKNmvCwxtFyJmNoYJV6TCyqmfnKu2",
  "key19": "664gW4ZN4R5gnBwVFGJxDF3Qy92GtSkQk2i3BWWXi8fnhB8MyPH9YqJzV65ipj4Ta7aEXfSyN3kaFsXaiRgo4cJ7",
  "key20": "3qieUtNiTK1JZGUuEtX5eA3Z3QZpcZ3UndAA2hia5N1yW6zaQPzjP5EYZbTqU99Lfk9Jt5hEQHWudjqKfUEsL1fX",
  "key21": "3XfG5qBZU3LEQxmtseNcFFBEfUmKCbXa576XmCJJuAJELq9tWDvbx7268P7rRqDLAdoKxDAX27DKFXp2jaZMo7S3",
  "key22": "4eFn1XjUcT3HY8fVNcqoVDjX3mWM1F782zUcmgHPKBkTXBibPgsR423GQFAybvYrREq25oajhLdBnquFbacWstFd",
  "key23": "3piYyJmnCpqi8kvaG4gUsPjgwSDwsitDbTDPNprPoUCApn1iab5ADi3JEk5Zt9agRLCoxuRLfYmvLt4owSxa57bV",
  "key24": "vaiH5cq8FX543D8zyXjyJ9YGnFwj8v3kuFJXR4n7cSzyEyPxnFiaxNqEGNL1qbtmCRuDr9QtM4rxfYS8QVXo2SN",
  "key25": "5EdEWtSnU6TxkPeTK7g7ajvteycVyVnU1GR6jxaDoFppNgTSBrZWXZPNonsmH5xig7Zoc35GVLw9LsRWPtf4nCkp",
  "key26": "2PKk7kZsakKpHig8PgHbnbm5NdLUcRmChs3isxDWfShaxjy5Dh82kax1rYpH2oqTSjzfYz69n4QVwfCPs3BwuwtT",
  "key27": "2AEYN9HXga3eVUH1V1gd1s35o75xHqmV1jSFNA97BGxLYFEyuZMmX4x8MSqLudFCSYwFfthUvWa7A7FaMbQCHXXk",
  "key28": "22S6qbY7hDkAj7xpqpvP5GsTjnVtzAxHFYsenWg2bA1tbD6iUe5QLWTj8Vztb4rNVwtyJqEvZR8wLSiFubQvKBWD",
  "key29": "61a7nee5uXvPnPEtqA8EcajV6Dz5QsJ1hPUWAuA4rn6ZsoPxuTJS89HwXwdLcNCULrqUioquxpKy5vD2zU8L9uJx",
  "key30": "3YNtCXqpMQTCNRT2bPt4bTozDtKin8JN1C76U2c2cQR1TXVjn4MfPpwfy2QoVNXfBSrJoWEkJVWAupBTr41Pikb2",
  "key31": "3omk4AsNiButgwpysdkFsVNQ9wrncfBYu7ubGhTnNEHSdc3xbS5fx6TqTr7yMMbtiH13qWb4StutxFd2Hb3GiJ6r",
  "key32": "tSfTurUQKurdEqA6akHuUKRXKZM4anPeTBtvpM2MoZmifABgJxp8j1WQrHrr1Fo6z4ShcFMLdkWEWGxNZJjWGaz",
  "key33": "32giSg1Xxu6geekp6m9ZRE2r45JcFnxPtWD4tJKxNdd2viP5QBNi5Ws7vdG3oVHpdicS11exuVo9SU3c5eYRZZuk",
  "key34": "67iuZZgDw1ZxQvRpoFwrmLo1G4fi6EJ6Qomz4Jert48FA9BGkPYcF968UdZmGDWVB9ZSEfFQgATvAHTsphABHSfw",
  "key35": "53kTkxGkn8T4zmwxZofxnGcVj35sxRnvzfuFBNtqn4XqWyL97UU8s8ReoEXNfEHPQMRPCuUtfAwqgipmRYHRCYrc",
  "key36": "5xzZXD7M3hsZ4ZyrxxxDCCEVrAcfBhMy2WJcqhn6y9WQVViUcVA16e7aPjqjFPWenMgQh4Ndp5EemBQw9Zi4tWjC",
  "key37": "5XoSqAMU1rfhSq2xQ9JM1V9x3TbGBef63tz8jfASFtHLjwWGbb3pepguX16BdXtKJYy6u5kNcTmofbEsdGYXegrn",
  "key38": "2GunPv7Ww92hDNGdjzjPGNBzrVKaqBiKHdYNEN6eKvWHQuBb3mgBF2gJaL7GWQiwC6qsddSDMfpZTJR9rvXJzuw2",
  "key39": "5uErL52gMMwooA5eTD8cNmdgxjwqsJFhviMthVPvuoHWBD9i7QokjmYom46L1WqETP1ecoSpLGTB8q3eBV5vSqdw",
  "key40": "3YpHtRHB3CyWJENAfDng8TmCvWJV5rEoRhdj8WYwhdJrGt2tiEdr83gvgd6xD2v3XXtwJKZoWwFXEiWZDTPPpJYy",
  "key41": "5KVWmtuUxXr6kGr5mZH3PVhBMnS27LAprzbuyvuEzyZHpzDES6z2aPmD55Buj6HDyHBfDLNevrydYiMhc2soo4p4",
  "key42": "4z8NrdZ6BtdwkgYgGGg8z6mKnhAeiFEEVe5bZ18uGZFAvCRwbMqJg9ZrZegn4iJPsKLwpMbs4cPCu4be41etF4yJ",
  "key43": "2uv6dBJwiQHU1m3Zt5R3wLVqPrWGEpL8YBRMmHoZGern32YPAoYrettJyyi9ARGSdrBnYfZ7WhAKpKNHsaYtbYjk"
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
