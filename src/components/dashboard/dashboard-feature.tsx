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
    "4xvooowV3SGzyyoLwvpYBdAJPvo1zwcNyNRfvBY1sMxC5fvrgN3EoL9QHhscZy6K45Xd4xuW5wKZRQujLxqDT7Hp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BUMabSUXfhwtSWP6bEnGyr9xDyW9x9KvqiY4cwg5cYTtpUFXmp2N5RtYmL6kA6fbiZ6HEQN5Mzyo35eHBD8fgGL",
  "key1": "5sHuGaR4a6bQMJdFRZbb89ZgUsj16Bx9nRR9qHCVVLMhgJVxXVw8sZMpMz5CVzvHSG6Fppt8fpJWe4rRbFSbLVcL",
  "key2": "4RfiVUXAhkJ8GGqd4LmV9QWw8A9FHoo482Nbdp9u6BAFipBRdQuTzUe81jagZzq8Rka6UQQfF4Utz3iVzxSTTHRE",
  "key3": "5kBTvnUjGKQjgGpjE2RixGWEYLaYwTmeys43vkA85AyJGhaZYs7TZ64My9KwBx9X2AyGnq5CXcbzHWeSziTqyyqg",
  "key4": "4JXLLAGZ9cgKZpcZBf2EDh6Ka6oHgHC1zrV7r2zxuHwrerS2McuQCmh4nxC3FVd3G8uUz9ChMjMzGPidxika2A4u",
  "key5": "63FEpd7SzeLYozp8P81V9LWHgFZMgfLohwmUDG4gycjUFLdKdGQCryMz4jZHLuc1LAAVqjz8KHj9bPy3FPTZodp1",
  "key6": "3KCfocsvuCeynqYAhAoDDzmGTqQdr2kDqrRbAVHaDF9AYwGhwczfDT7BiuXGiGM36aKWTpJrhoQdmgDGjT5HWs4z",
  "key7": "4rQsq6XReuMsPBbNzutSWkRcK2qRDYJ4CmsfQGRzD5AJ5XG3tVJMP1FNZ7qj1CRbeH5i5Y2h9wp946mmZUb5BMLD",
  "key8": "2Kwbw2yv3sRw1TPYYK2B1j62vwdcDeBDUSTMbRsj2FA4FzjbUjQdCaYsjAqK5F5JAq8dprid6sqim956R3xaGQSg",
  "key9": "hTbHLf6wULpo3A4sn8ym1ikA67WQxCPtBWGncpzMaCtB1bb7wV1unWG1bawhgKH2qofjTPA3UTBy9gpQ3j7UAoy",
  "key10": "3dHykwRs2FRYYRR1rRzjVdbq6gvMK7ZhSLcgoPHhahF4X9cCm2FZRHWh13wtkfP7W7QNRzstsBdYN68dZ2ts6p4g",
  "key11": "411VxGZZfBcjnZJAkcPSUZErYBLEjKwFpqDL7XMVsrAXrF1HruGtYKCvWwzWVWR7jf9j3fdutCVDeWztfz8AUGks",
  "key12": "oJgHnm8h1o57ekmjxqDM1bjse1vGJHT3NAbsE193jXHkua2bMCbYvJ3rxaDCoRBdzu5M5RKA5cPou2E1jmqdjC2",
  "key13": "3kysMwtSAALzVcn7bJDrPgusVFZb7RSkYehCwjN8w7pSVzju82EEARwP75ExVZd8idnULVQTsyVLucQrXNffU1AE",
  "key14": "3BM11WGYFL7tpKtYcMB9EKncxZRZuXo4QCbH2EzxpYRmRR5EwRYHpfoggEeXAhUSXDxsRbZD3DYg6jAwgvEWcSrG",
  "key15": "48FmJ3KZjzR6RqwV3WXMeYyBMocYH5iJyfR1nUj4cJAjZ8bUZjvpDeABLXjeHLXpQbdDtXf6iaVV4ygKiLVHaLH5",
  "key16": "5opTjuwvT8ZJ1RcQTofuxZXMLSUGM4RS9ffchUDEQ7t19pynnwe8PLwZ1MdEwsA8mw2xmVWfS136DCsTqBmYcJci",
  "key17": "38FvkTza1pBoCeGmZ33zZSe1ygjz8NvoCj6xZZZRpHbja2mxth6PMuxgt9iQDYh76Vqseu9mM76RBeC5W35G12yj",
  "key18": "zWT97oerGru8Kdba8svM7exSSDiB8gRWDa9jbxcgiCDEXQV5pRu9qeaxUzZPFoVQX6F4TEYJaCXnSDX9M245M51",
  "key19": "5caxSRWHUkQbU96XLR1ZUdpdKVv3FAMfjJwr8zNoyFwuERKaUbjQbX24UFtNxKYwCrgWLdJ24RXyZhABerwQGVC1",
  "key20": "3aCeEziUKmPVqNd4U53r6xVLiPD6yZ6DXauKTfZRy16GGBy3oQgiKGsWVTQLUDaudf5rLTw5xJeJbfTZcfNGjYtX",
  "key21": "56UeAkbhowQx1RuEvGu2A4c2gEJZy827MHdSuekV3ftNYPsxVp7euGfuXRWfEqUYkyYLNrJZMU7uuEszpXkfGVAm",
  "key22": "2Ci81r2Bbf3Dauo21UjCzK16ia4K6c7i6hgbj8tky7kd7mXNZBZZCZSnDADWju1tpMdtBoVWwYeKXZC4gYCq7Pqs",
  "key23": "5kbJvEz4xeYJiHD4nvNCcfX8ne9wqbgYhTQZ6KQBdi2tUxSDU6BZQHXkt1dGULcHPKzypAqhUBDkf6bH8ZMD64h1",
  "key24": "5196jmkowjxPQZG96vwqQpkqoTrdyfZKncQwnL78UUNwpJWxQBd4RhKtw9DYpp5ur9JzSFRhA1puur1NoL3CEmUh",
  "key25": "2RwEkzWGt1iTjQMFeNLu9GQ2xS4Ngb4nx2MMYnXUZhSDac5EpALZzf4SogeunVMAMMuifuWXBh5NHcpjd1Qbzzxx",
  "key26": "sBXpNXdTz3CXYsDyWJzizyawwhkNHuBXE5ZxJgCwGRC39FWBbs8DD94pykqnzS4ygeKgZyRMW3Tt4HDjyWV4nsA",
  "key27": "4P1d28Zz8iovS4mJkQ9fWeT2Km3CtbrutYYBtiguFUpndwD2CmmJFvKdJtUfwrBi5wow2gpZsomMTkPEism5Tbk4",
  "key28": "46NrNN27bJhd6J2FAX5v7knCP2NBmH72mjB52YvjBzi2R8XUrg44kMK3qn3ENVns2x88zkTpMm1qmytABvi5mse3"
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
