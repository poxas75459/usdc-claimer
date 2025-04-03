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
    "4aYDYbCog574tvX3n84BWGVewyehLUc12mWh9AWxoEXu1jSjFe6qWeHnXXfHuucmcyWuk5317Knv21DLRsQ5jzvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45BJm4mAfqE5KZxL6zjm5oNJsPbwvpyzQLQMHESxwHcEJ8mLPD62nHyq3vQ3z3pAN6doLtFj5nVTUFvZhky15XzM",
  "key1": "4bEFyxJGybx8SfrT4XLp7MFcWXS5Ya6dEQTjhbwLLkZVpzFaBVy6aXuU1iqNJY3urbfzBwjyfbX1PUBHqn6ssJhn",
  "key2": "4H14hQqZBmZUXz7dtt1a9cVEiM8qjmXDckCjQgdH2EoWWbcZXrzDHwXJbuVHr7AMHjytWwYh7vgaNcM8Zxd5M7UY",
  "key3": "5cJ3NzqtAAoVU5E2jVF5aD4VByhWRsPozEF1bQNAV3RwoQuy2wFWmZKUgjJK1i7k5xsXQ438MUqAMR78UrnUEY3X",
  "key4": "3E9MhaYw64ahV3GxLSkUeEuLxMaBVJd9EAj1uhJVoxMFRNTjWkxbsedBZ51HYzJ4agMVBmpNssw1D7LLgmqSJcKY",
  "key5": "KVG8V3DkXeW7pHJqSRGkzJydkW977v9eqC3WjKCQzC1qwfDnxKVmXy4C4b9R6Ur68aYqFdNqU6o5fWs8kTvR8ij",
  "key6": "2Xdf5JcPhFPaMpBLs4M6RtDJR6y9VHf1RG9QmfLyfUmpELTSg1V2GQk7RuEZfSkKPw3Ma9Ysp2sQphcxfFeekVXA",
  "key7": "4h5RB61R4MmatKjdRK7D8D5B4bCgjVBfW9XKpy8mZXmzNWC91JCcpdPoy12sd7Tq198d2eWMwiMq13ZRLUMEWAE8",
  "key8": "2ZHEj42fWVXgPrK8swUNduS44gSrWQMEYpjyHNikxinphz2L4xEDvhaaTgUYPDnkrJfCfXw5kB6BhWUhFBDsNQfx",
  "key9": "5YwkSLuNiPFMJKFBP33gzH4uXzfohFZ8J3gEjjcQHAaVXJJZX1ynNsboDNa7iCgnKNa9byE2N8bUAxk7mB99DRQU",
  "key10": "KoXAWoK1vQHT4XjVjUEvFX2uTgA9LTdTDfFNfV9E4h9fb5hzj1zBHk66wXuAgtE1HH24DN11DHZekUjxTkjBwgw",
  "key11": "1CpSWmkoKUw5WazPwjA7tSxXmuvcBN9XWhxZf6austg3kD6VnC4QvLZS4CgS9CggMrw7XahMVgG2sFRK9u48b6c",
  "key12": "CoV4EG3vyhz5h2tANbV9iwxuCLUZc2T5jsmJW2xTUFbutbz5VxJcx4dUiysJ351Arsd13wADeMpfSnMeLDHdnm7",
  "key13": "2m9bm8EgQsM2j98a8rMt92pMeJnywnDSbMwgr3x53sqzgfuRzwuYStZgEN83tCE1mt61GuDNmeDiG3tfrdjrpNBn",
  "key14": "tMYsWrTisKFgD6rRMN6GKWVvKLHXrvT6oMegxgPg5zbkTurTYeAGPiu7nfxmvVCUCTNxWZ3yBMbbecxRwpRzUnA",
  "key15": "2ZuS57mq7LjoNrJAJNQ6SPxfMomB9hWcx32biNwDdQANmCBW6rfotFCuphJFhcgbhubnbhCAk8jyZGDDtnPqNT94",
  "key16": "61jjUQvphKaZ9mv38V5jpe2z67ivm6iYrKvKXUVagNgXJbTtSrZP7VWHvaMCky9ZmvNEVFuSPntdRTcDM91yMhWE",
  "key17": "2stfYpQ74deN3nZXewYYxENAEU2aVyEvaCWPfGGyRzsznupMFcSPmUmr1gdFxdYX8TnZaQPuEhrja2o3PxJyhkCN",
  "key18": "4EtWJnvohcNWLkmBRimFAgdg1SeJN8ZWgyJahGpX2sMgur31MecTHDULqF3cyQ4yV37GK33PLkBhutw4hrS3cEeM",
  "key19": "JVJxQ4N7fN6x2G45UAstDA4GM4jsFJffRFDg2RSnz16y2s6MbRAhf2msujxdy27Z67KkWWdi6ETy8XJrqiREcy2",
  "key20": "4tPEKMvugBQBpnXthgWuGGoeFzymuztHHMKw8vtj1rhfcdGTkeRqEydoDiiupEHmVxzdkLDriEqX9LdF3X8Gst4p",
  "key21": "4YRZWknEmzZTsfp7jtfQbN8eWNBLv2Ekjz8WmoyWjvBJR5ZHDtiWAgijn3MNDfuBGeVdonwYFPjQtob1iGPwguLJ",
  "key22": "5ef314gwXMBJFR6ZQRzRAr7Gk9WsGHqAAqT8LebCakEBdG7dfgTftoYcSz15ykb4nTCEwTFWsZEw3xANVQDxpW6b",
  "key23": "3YGXn1ndLyqLUSq4tA4pbp7uh9iiYqBdkvYiQ2LKpnBG8jn6RKXzJQn2KNpMcHZcughiZeybSVjifUimmmCVJZhP",
  "key24": "29sUTJMMuTgsdVnN4tTBTjm3NQkCyYmwRQ34PeNLDfSS2uByUdoWxGGzvCCtuq7iSGSQPvkiRpuzYgXgVzzN3Pyc",
  "key25": "2pCUj1VCEq3oSCAY9AyGWu9SQuw7p7iwLuGs2S9LGrAKq3QqnYqbGWyuwGvcg5kLCT2YMgXMjhuKmdJ8zgQSTQVf",
  "key26": "5WAb3cMhwEHaFwdzk69ccg6L84kZA2TzyEd38W9qQfFS6Tm21sxLfe8JPBP3Y1NFxBk1jxQCnUu4h6WuPmNSG8Uz",
  "key27": "25u58YAMLhBBSc3NnqD54a6HiRhH5vezomzy5DtQPYaH3oNyVyMaGwjvEK6PhALWCxfg3u1SJkTJP4DU2cCvNvLN",
  "key28": "5XEbQM2u289gF5LabQZrWhVhv2cE5uajevNaxxUXMvmUh6ALrB85yQu78P4WUA6dYBEi5XLzo2arA1N1rfAQrW3q",
  "key29": "iNShmhtrjLxFLXxChTjfAs4CWsG3482uCmwsi5QTnUMv9MnuiXdLRTjSYmS8XAhAbRVjTbVU9bXsR2BBS54Rs3N"
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
