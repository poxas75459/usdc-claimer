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
    "4mBsNHzhmGHm5Lh7FkfZUjZfsAiyYNDCnnKQfkETD6Cz7Td5Yqf4BLBDyRmf31kPP2hvaeH2NRvXoY7RY3oGEg5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28HNB7PuqTznFVZKdKst9rf5PocuHfFK8gJ83NDMgUyuKxipi4qWGHxHjovrfdLw4H9iAE8cM9DivG8vfckGSugD",
  "key1": "4qFeUMzoUm8U1gpypXxDuhEFYu4mRztvSCDU4s9eFEF5BMWZKfCY314hMLwVoycUGTSZ5Qm2M6tJeCeqB6UCh58w",
  "key2": "4a8gXFy4ri2Mb7tM9pnF2ZPXh3D46VSBysduYiHwaFfg36AA1UUNcTxAAFV1ebGTjm2fuJvg7WMxUn7oUwQCjRBV",
  "key3": "3g4SKg4aAd74LPEQo5eTfZMJ69k5kzyq4LrNN9HWod5AKPoN3VoTY7atY5CcbZqu8JN8toWG5nV5GZT318hGex5x",
  "key4": "2PSfnenDz5s61TAy2dUpTUKscpYLbV5Wgf581XBH9E4miHd8sZ71bk32nErrxrZ8eGosBLTof3F9k9FdA3KMGqXx",
  "key5": "kx3GLPt84aENLtchzcQVWBoxZ7mCPbAy8YKCBA25XnWidqa5hJjDvp2QmwgmCZgDnyPwTcDK2mia1CHwweKY8SH",
  "key6": "5s7AU4ARxTxfYuBj1vHerS3Wf7FjFM94QdFwZwgEeho9XWG12NEhkxs8dXCzHCZbRXHmyVViwfEazkRv9GZ1R4T3",
  "key7": "JcWXY36DE2XqzaJiNqdfADxypTPWScBc5hGWQLg8YEkgh8YSK3y43W2EiT2BXe38hKdG9p7F8PcFV6SBGsUYaTn",
  "key8": "5tpz1T7n1B37Ku9FQDhMWERkYqzeDwbEM2ExzxnbmH8tMsqjx9xV3zs1PBC3wW1DrJMEfgxAVvpiuQzYPLGCr63s",
  "key9": "4yaZrHNvzpNRkte7BqdyaS2mHdCzSYZZstLKomQTGZk4M6bG9iweJ33HhVXbnLsAkw5Q97GrZeK9ncS2BpTTPbnu",
  "key10": "36Qmg12y98b6SGM7eYiYro7QmUbfmn2JaGdykyprsQTy11tXYSGmxmb6RQ9JsmuP8LwrpDUCPaZ81493tJLrtbeF",
  "key11": "622g7VzuMJ1Hbcqt2tU8EfehyEbDAyeDG5SciGWwm3mbYgEgw23XdWBQT8FWeTyLbYDwyK4tbnGnVFT4oX7tJw8D",
  "key12": "5hVFPCYCMMLNCyGmTRZKTNgX4BupiLmksj67q4nhDoAQhy3rLo8YP2fBzaCzmoXBAeyJwhyEbZ8rYrT4C6oBqjuV",
  "key13": "5uE3e1Qik4Hm6XZon6k8kHstPJEFrmBYd7awWG3uyF1Gp7e1MugUHemiP6aZ2WreVnMCJ8mSRBVJS45F3FjtQVFn",
  "key14": "2nMAZrVR72PHHKiEjoL9YZPgBz2vH9dpATLCPPMJF8PNdbuWj3knuTeqK7gTifo23dG69j4VkbGpieFNW5NNgVSt",
  "key15": "5pxmZGC2rHfaih4weLwUn9kdzJWkWxrsW3noQqAY11W8JVtBBRzXae8MDwuGSxMSnASVeWo5SR4L9UaML7oXN9iM",
  "key16": "3VYPdgbcrXkALha5UvmYqYp5wPVFC5PNwcf12AxsA7pJpFjpF73VUyKyfMz5Fa1Lgoiwy9iRLcVMohXBVX8apFhr",
  "key17": "3LTSKXGRbt4wU9LcnNa6hQfyDcVGDxjhTHtBzHAtoDbdQuFUjxrZgnYLU3SQhUyRUhKeM4ArfHyJqjKKBwJA1fyA",
  "key18": "3Q2NxoTvzrVRWcivq7e51iBDV2DELZhGM23U4NtDQ9Qr9DFNwW4KyTxPHSPHqdUkaFmyLAesxVVd6VDEig7bYSe1",
  "key19": "5yfYv8uC2nNaGXycHuEwNnNzd5kx16PbxaRwRuHi7sHQdLZFYBakGRFXZ4Z8KVVAwiSyAgqTGmKCefXYFTSUxHvC",
  "key20": "5jJ14Gm6S93Lh5zNZma68nMtU3mzEZYUBBHGJwKTig5NTpHtSA3pvFLDcQVfHHJXxan9hx56AA7riyjWpZe6wXKa",
  "key21": "4viE3htWdwdw17uw59kdZK2qvDVPtu7Qsqnu1xshxRSQeD5TeKdSR6geNJ85esEmzwGDjdHmVQGU5rr3n6XkpqxQ",
  "key22": "3pvpTNpYo8MRCT7A1ePQmiMNJpoz7acLgQ2M1Mk8ecYodDXW59fdYgnjquNQd4ynQSr39vYZrPCp2xsj7uJ9ibyN",
  "key23": "3yqTjJa6jbSCwt76t1hU9Q1BpZ8fH52Cu1cLnzJyYZks15gNwZhUrdcbsNHmni9uhUYdewWyJ52SbYf1PwVJtBxj",
  "key24": "4n3uMaFxVDStSG6FmacUkUdtRZAgpxkwZEDfWgUFPyqgnWnyXJuhRAtNRbhtY4hNhmbxPYW6D1TQBzkwj5PNgVmE"
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
