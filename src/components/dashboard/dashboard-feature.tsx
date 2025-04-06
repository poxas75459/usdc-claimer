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
    "kzLW1J3equeY8C17e33QNhz6j1B9HRhp6cauPJg8gnb537nff7jeHwDb2aUvfVqvoXQb8eDWE2MPT1Cnzr12WPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CNjS1yUpjkN4mCh6mMGpXQ8J5uoLGvfGXWxgmmFuYAD44drubjtfwCu3HUt6ju22stJpFXs9Qguy6mNawg37tGK",
  "key1": "32FbeHexKa5w26BRZeu97U7A3nkiMRq4nqV3vToS9uoNxjTNDJBN9s9BrzPKmcVFTA3Xf8ZGK8evqoVbU6tVgNxZ",
  "key2": "4mGuJJVD9norj4629YMQ3ecAfnppQgUitw2GZTqJWXxCTQmg2WrQ4yBBtzGYWxQ5vyYQMak7TKLJb4o7sNTKobcG",
  "key3": "59YSjEWNEoC48mki2tgiLdn5915nZuNJ9K2tyHy7BfxoQGMJd2z9C6usQqV8Jn9yj7eo18tDrQNoBPcykzzcmaDu",
  "key4": "2aYmvzT8cpCQECVpwjYBWSqFYcwjYcS8A45vNg5umEzcBKvCLXv5VRqLB4ZQ4kyzfvqUbAvgvUhHevgJMUGov37y",
  "key5": "2r459Lok7Le8zHAwrVC8ZNWKCFNjz889H73MxvF1XQBxpXX6bmxwowDD7H6oLEXUVsLjrNfChUrAxDWnMovCDyeQ",
  "key6": "2MhuXADVSu3CvkjdtH34F2cma2JCbuPeWiuTJQHrdCFD4AkW4PUbgnzFT243jkZzgTnPuh4kFkCuAVcaVvQHW1u7",
  "key7": "fUN2cDWGdEJ4wAL76gVTU4GYyaLdo4DZUfteqZ9zmcKERHVGrTroVKvXok7dXDboQ3yBJ5F6pJBNYd14BRhP1Lf",
  "key8": "CPXau6qJt2HFNCeFCzd8HeT92dVLMnvNdYPYkXwza92n2D3u6Z8dPJQ2HxW1kNkkePke8hZVpwdPvxKavtX6HKt",
  "key9": "4hLzuq4WVsn54FYDQahcdbXTXm36zbyNGh3M28ipDb82aQ6eWZTfxNoMUFiMBNZPVvLyK4nyA37mjyudNbGA5wgj",
  "key10": "5xvLWhCSri5MMh1dtK4buPZP2ospas3WgJnQmk2fCn6KCCquBipSkpCTp7ptACKPX18s775eB4qnm5579LCTmHCq",
  "key11": "2iXi9V2MkJeVpES4CrazjLkfnttZvTD2ULEA71W1BvCsgqsH2SHhX51dPaYjPwPS4UPgkNpjpQ8jrmA6aQk4nTpP",
  "key12": "2U5JLYMnL4ukp5KZ1dguXvmyi5C5y96RUdpEtzVBgM2kZRTcCLidrFf1gpyQPJzNsiXc7jLNZQ7xv59xi8xLE7ko",
  "key13": "4obaaFBuh85y1Y8NFiixg46m6XfqeDzfFLYLSxLGh5RSudWCVKPNRtzwPSX3a6Un8b3EVNww2qhQ84LsU5GPj5QS",
  "key14": "49DXUn4gVScqfRZf1rRmxjRTtTxWkjDRmZppu4v1HoFktbAs8ft5TaeME68GW7u8cYRGNwCdBVwA9QKWwpzgrLn",
  "key15": "5fZ3t7nURm3R54uQDKYEGQpPJLkKRiUwhL2QKCQZWQTjKotjfnx27NyqfBmzv9RL1TWp3iwoBdiDZGNPubaouLfz",
  "key16": "o9GCvWswRSzQjAuWeraUfjW8ZPjnkrAx8Nzu52Nd6fCkx8n4bzPoQDEbLEspYdiNf2ien78apSV1NPfusU2NpFM",
  "key17": "m1iAv6oAWBJcKWxJkMPhCr9NcNZShC5ddYxntPNEy7qQjDjhXQQqDwHjYBmPREt6Shz7tAqGX5f4giykFMKMFJo",
  "key18": "2QSbXh8PqKBnNVtyQZv8zjR4Noe4YM2DEjEDg6xRWHc35LWFeHb5xRgPnamBT4dE8SAEA2KL1bRB3tY6xHaQJcG6",
  "key19": "4pFP5GK3tiAwuG3q9JPfRNtd1H2NmMYYFKxTrEUWTsjjLGmnEQEabRBmhjJLvo3f9pW7cvvAm6CfN4EAj9vdLt5t",
  "key20": "XrH54UfrUYnFNkhrKjKasB3YpNLeHfEigiL55GEAsrWD7p9mxdZUTQJszRDb4VKXeqGga77KbxTGxGkxH3zGHsr",
  "key21": "3yx56yRKc4429Z1UEm3n8wC9h5E6LhXJ7qUKcd8kwpuzvjMtxEsDBt6V8LK9C7daKxe78WXcTjNva3aVKBgnRndK",
  "key22": "4h4cS56Hqf9gs71pHWcAgfvUSK7WcScRzWggn7nYEmVgqQ7Vds7LZ4rFxt9igGG6huGef1A4zYnVHi8YyJnCxuQH",
  "key23": "2dGAhWpcobKwXTNkGQFCDh1MLjXdAnmyVWFsPHFnH8SfSaXSxGxXcE3apea9nn9VmFyWe1mhAWrRqQHecUfCJqoG",
  "key24": "247fDpzzsrsnoKUADg65cPD4oCwSYa4rdA3WGmVVS6DAyeEFAMYtbZe8nHih8KxLn2A68t99sQdetRX5WcLyo8Zh",
  "key25": "56XtJoRmC2kGabzNQPH4QtKS1q3NY2FijEmSBG11vH4xZ9bNTFWCP4QwxMnDtWUz6XcpXke3R5WsCbq8eamymnjr",
  "key26": "2WQ8Dj6Q64AkQeQ6PpHNou5os76VboLfWzXvMsd9pkdMNB89kYpmXMZsYQSpnYy337NGytmBpV7BVVxB6ADAEzRC",
  "key27": "tb3LU797aEJhzR44F1gZgmwTqjXpa4Bisea41n5NjE99zU6X6jMvSsW9CcAqdwycR6gUjAs5RtaueuaqkGwJBmi",
  "key28": "nKz54SiU1HAv8BqTAPct3tGTSe8uwiXbnJoWSnoFwjYXNPDiJMX2AYLt5Kr7y5UqN6eTp97m9Kkki2YFhDkWrXd"
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
