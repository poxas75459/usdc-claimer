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
    "4RnXRjyGuvnmqLPL4Pb6QcZ9vmA1f6o1QNHURsXbEz6Rqk2S5mAhVzKnpHUy79nPtpThoVZDV2bDpeE6yxM9yTua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wm81eEpDJedci9FdUiAbmergfTCm5AcrKB12o5TidovRPK8R4DL2hpc2RqQdZZSkW5NcrbkTcm8zmbiiBXo68UR",
  "key1": "38Grce8X2K2VGXk4VU5R2k4zSg8FoeqGW6GR7uqkQaxWnAA5ceCYnZXNWbFR5ZXkGRj6fbdtNtNWVSeq8uTJMcPY",
  "key2": "5peuYKKAkzdZpHHUWCXBPDkSy7grsfSTUBDoXzeYnFpcNzbjyavTAFeHfJ93ptzuFjES5ZsSaP811wDoeRsXczne",
  "key3": "3aWeY3p7voQqyJRvFqFb6w4unyCQKZ5amNbTffkxRVQrGZhRcAHYSQasPUjn19F7JeY7TDnFRkVVobH7JWERKggV",
  "key4": "3xt4wqwKC5chJdQYtQGyyDzukKMyDC9QWPR3iXVxdP8KmDk72C8uwXdm5dAExYmHXyJtndxC9QrBdQzRwnvrDdkP",
  "key5": "62e7YQTfXwqfJTAgCmEsx2akhfTVy5Awtk6eDwpzobEya59gwuf8r9uwWFBVWmGzR8Lnavh3aRYiV1aAECGGHswF",
  "key6": "2nbQ965SFu7B2rTYjgWauVhmxSTQBbaCXmhJo5aMyoe3D3QySzh1N3vyKzJQNjrxPPxLUEzXiuz1yjdkrgM2hSua",
  "key7": "kfvmJsPP7R7WH69KqWYQT35e7tpG9GoARh11ZuDfSW1gc2RC6xLTjduZeznLmRV1tBnebWV3cYAaMi1MvkHiczs",
  "key8": "36AA6XeUL2hohX1p5ZaBRRXtrj2xp51BCAP4cRtDk7pzdVfGm5itfwnRYUJEkFmJxD2H27TqtaXByA65fyXKmqfV",
  "key9": "63BEGYwe4XVeXUajEQAVWfyqMHUBV9FXGd4UzLYETf6gU1o5xyetHM8urUTL2dWKgVthE36Eu2RJ4ZhcbLXWYA7c",
  "key10": "66KxreQjrTz4DYxVDc8JcCGB4jFPmsHXFPW31RYHoydupjCwvVu5XSW1f5V2HC2iqECfBd9a7ZVzV14h7epbAVFs",
  "key11": "54vCMbF2EPCZDarj2J2AsZjSB2LbauvEp9qwVBLbhdzAncfQ9XHxd9EEprsMpzxs25V68YBBBCbrbzSW3BvRKwWX",
  "key12": "2PR8dvuRaTUVA5Ah7hJqypmgjD7Wi2je3gbsQpEFjxju8bnNJwoTEvT1Ntio5wvuZJkGnju3qDzk9e4mJo9jRCYm",
  "key13": "3pJua6kEFJjQGYKMhs65HCqRBkZevCHV9rgcG3PKH5b4cToJSWzJvjTaenH6cLjvbNURcn73ZYaYT7jUEQptxtJy",
  "key14": "2mPow1r9RmMig2ReG2gb3GSo4onBmdrSpMC1E999AXr2c4mmDs32AGzDyspx6NmVY67ZZyfhxPBGifUx6h2XN19r",
  "key15": "5tGwK3n9EzxhGnswRURt6mvRRuuthNiJUmhQPtCxvsXsEnRKvnKkkFrQcAwK3VGczbEXUFqFERb9rB2EGcgSE4Eb",
  "key16": "5hv8pMx12oVjip1MXxxV8QXke2BUCkuV6NAn9G4q7Wk7Sq6UByJQKRjsP2qQ1iTD7HbSPqMpJQddHfXy2DHu4MHe",
  "key17": "5dQYJ1EnszeMAWVk6TaCyeuRg57Y2RDjuLqhU8UZSgzMQ4yyhsq3MStZZFXnXX9LuKVeS8pcu96mRpYr2de5seax",
  "key18": "owfc7ULr5v9w1oTcWLH22PnuCmvK32VvztMWoXbF3exqydkC7TJedHdiNwUiXfK4F3ojGmmDAt9ZxvrXVeD56S1",
  "key19": "4eZKPhTzY7DWENRSDzMkEA1reWpafJAfLWzXvhif56GYMbJnR6e2BZ28Ee3pgpYJwmV81s9Vp4s8vZh3BuusyG3x",
  "key20": "65qjF4kfdiRKD7SgoE195GzDSaDuXdstjVSFcog69b5EitUsCp5hiz1UW2Xb43E5E8seDMMjdTk3mKPacet3NDmM",
  "key21": "nawxzEG54jQxR8SDgCsN2DLr8FjEbK12Ju5yefAV81e6JWxtDbMfjcZWVrxrm3tWgiF7GqRcgV7uNjnGJkCELjN",
  "key22": "4weh8Nd5kniSp3ahmytBjPUN5yxbrARFkTnvArnwRhQE8hbWAN45qwaVruPL3QRR7WT7f5th6P4286KBioNkNe52",
  "key23": "5VqYvnF4af5faRMTG7zKepKLJpQs8NeKD1K6B9HnTGWEEf4p8zV2zS7HVJr5A3mufQhwitjN4XWnaALtAYiJGwGD",
  "key24": "o5b2pxmPAupezppRUVPpE5vFDHaQYLvKg5FY4j28LuQAF9zyHnk49scSrhGGdhhscuGKdMevtk3HJsT225LQtZq"
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
