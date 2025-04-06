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
    "2R5oSMSyZDoXkzkutgsVseoznoLY9PPQnEmLy8DzdBdH67ULudWf954bjDe4cV7WdjNUrbNK9mQCxta9R5p1qyXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m4NgZK3fFUCL5CUbcEQDW4JE4eZV5ZKTwjbcJYPqbXPstK1nYRrFJeB51StYHJnXfULqL3hwmjufYgoufDH86yE",
  "key1": "MJS2LKmmaMZPdEHor5Twgd3y1Bo1PAJf5D4wP2AXaLkLz2rNRqy37rXUXpsqrGKQicTYzZTtLN6fX4BzkihJ2Bs",
  "key2": "3NcXfj6MafQw9sGCU7UDMihPjRTNnMiKCkY9VBWt3kJkx3Yj3rM6JL4hvZKAZQWiYt4s41cCvoLrp5K81XhbfSZy",
  "key3": "2yGBj3Tnmk9hWQk92BnECo9iL4WpH7QeMWBQ2BxpzQ1VXrTs5vEtygUo7oC43mBn8YejYCLmQ5dAHB9v2X8b4rC2",
  "key4": "tHWiYSNNGp597352NJfjdodsGnb9TWwVJ8i47FBLB4R3NHxSmt8JsHHdzCpZ2bLn9AaUfndow1ASeoBbcMgvX3o",
  "key5": "3ExxfUhL5YWnkuFQr5MMUkih87VSWN5Jrqs9Gx8C5B1kEFxVyqDC5Y49feUq3Y9t2Fn5omuxz41hdhs8NoK7D39Z",
  "key6": "3kfRehNS8xvUFaeayXkxju3tt5n9q57Rp1QBEmWb5mviMoPr7hwpDwqJE41mM2yLJH3smP9sLtgot2jsFsyjrRzv",
  "key7": "FhjSnJts4GNHm4AVMsTqoifREkkhnCVWDLJadTfmE9uvfnMfgkC9mdrVJd2m4HRo7UktPWFuvb3jpV3j6x2SDJz",
  "key8": "3kQCmEemGt8p6hAtJGmFqtZvbRWQ4epPJy4wW1u32SFZjSE6md5htqLjew8Uk8AmNHcdncUrQYnH29yUarbok45o",
  "key9": "4snUtqVXfMuAez2N4dzFCAUdPmSGSh25FsmbKwWekXeCLW6tV2jjens9odoRJu7b5wQ4Nmxu6woBSK1GrNhatmm6",
  "key10": "3Ux9HmPvPt3ekKXmvqU46QqHDUfiQ3MHc1egXxN2AWf4Hj3YmhhWrQ4auSL2tSM1sgUkFEbg4s1mDug7DcCKpCCd",
  "key11": "5oJSgHJJmRMbcThJz4ioMZmAMBCikFMrKZUAS4c2w86JaFpsbRWkm4ikUCfzjUx6SrYt6nfEdfp5ib8QDsyDHcqo",
  "key12": "3xiKD6EGsXZummVcrQ8hLtTB9twn1RRBXWKPG6wGZJ8RCnt2wo82ifwJSmMH3fmoCCFPmg5g8WjyQcpW3cCsPDqJ",
  "key13": "3c7Fs1EGmXjcone2HZB6a1r1ngDE917X4NT8cVPCQgVJcr5PQtGEebU5fQzCeZqxcTXDtQNNNjbKG5kFy6bqSiCT",
  "key14": "KGR3YWNNFTHkUqFRZZDX6ZLb2AthT7ap8CruUsTHsdssHvs9vhDUHyUg3tQLByGLsVzK6zkRHkQ2YHuyLj8Cbcm",
  "key15": "jUztrDZvEKtXB6JVUSKRZQU1hAiGNYJema13YTSqQsXLkebviHBA7epNECVsvpwj4SaCAWHnEL3ykmwU712RP8F",
  "key16": "3zjYdB8yzJn9WuqSBtMkWnFqSbbQneQ879oDJFo3xrBeuBuFjuL6LmjAZb8iPeS3ajAGYxSRR8gcoh1uFCtXQWfb",
  "key17": "3aRBAJRSeo7GD9irTBa8nhHSNZu567uyZxsS89ThuGrDH9hmwQkyNNDUQFtM6gJ7xndfGhs2n5ub7zRoq7uagXCK",
  "key18": "5qmzj8mL9WK9n2QPi4g2mtZMdB3YA7qA66FdoHKghata5eG1YbXqRjihUrY3i9vUwdLAwtZwUSYMn13S45uwhw8L",
  "key19": "oncJ9Zg9juzPKEqkzr6kUW5Vhx25ibjkykAfrWeLFXKPKio1EgrYzBEgbxFKzBbP1fVBYPGcVdV57gsHyeFghc5",
  "key20": "4TcjfrXw19wWmyPjxMeeifyGyuLKpwAD2XVDTBNREvAZjdcCFMUH28HhQTt1Wgbyw7TqDrj6C5QP9mDGJDouRUAc",
  "key21": "28w46RdAnori23NH9Tc8BkpWkwFUARUW2nEMPG5ggm6t7TwK7QhLDiyTTyM9hsMAxb6fm6gK3fyyvjG7avCDoPnn",
  "key22": "3anbVyWkjkgFNCd3voJTe5xUfzvxzVmoKNPxBsZVogGWzYdUfFesPAP88SwTp9z8mjZuDC5HwBh2phGP6fn8WpmG",
  "key23": "fgqQU69Jmp74LAEBsyafRWRSyNAjqwvzuyZpLGL6UJbGjcDY1KY9sVoeEX2ziFh2CxGZhFzp2PsGztUdHNtbT4V",
  "key24": "3eZ8jiSsUw3hUgjKfbWTuRjvVkKwYVUk4FD656JCSHiJRg7bazUxzzmb4QTpPMeTbQ1nW7Sz1opJvXMeuxgMwGzJ",
  "key25": "UCJt11Nuz13TpMqPxAumehqf7JLe73jtTpGUcKiziNAY7uk1Nwy94yfhwkmWnR8LGMcqxg7cqBiuT1WD96KmvT5",
  "key26": "2cbjr3dwSUCThCmmYud6Vh6a5Bt3VeFhoLr87GnN9eNwg9ZZPHZB9Dp5yiuxxmuxiUVTkwfai3Fv1JzsY2PSfiDw",
  "key27": "4Rq2JMfBy5GHV4gWjDULG7r8ZLY9hW94gyuRc61ukfjCzsCox6pa8ogiqsRCm8tCGjqHJxv7kHZh5MbZJXGxsiMa",
  "key28": "4cdSjwNkZx4xTEqqMBLvCZrZP5tC4aqUB9jYckWXWeCJo8fE41t88xfCJ2U2zFUNXTYwz2jWybUBov6z8wtQfJoy",
  "key29": "59FqZZRzHhxvZb4j4mjzSiKj8qerLeBbZQfoZGPXuJ4mPEujbQ2RnEFtaQcJE9gHnYuZ89L8BbG8xPKW38oFxjET",
  "key30": "nv7mjaNhy5kvcXj6zQT7ytK9XPDY3VswJbZTGrPfCSWUiNR2KqxZPpRg9NjNjeDhr49XkqDai56tZivzdfttazK"
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
