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
    "5pZgwornTnYa5A4wQRA9hSUnXpP5Ki7CFAAUrqVjvq424dfRPYtL7URsbCkgukyG7zgrKdNhtRYcddGEhytGcPPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NviFRJdk1p7xEe8puE7UpUJTt5VmBhPXbAF2ugBNcDP1jbCUg4bbs2PWYGg8heePyQShPfrZ9Uww5VeQuA68z73",
  "key1": "5vTJ6MDQwVJ2ptSFthg7fPw7ebUjv5dwDfUB3TxKENUBAZSYjV97rZEFoVcyxvBqD4VfJshME3bVcpu3VBeYMPJm",
  "key2": "2C1KwuPjECQkxYDoYEFYWNmkC6gq35Nc1WnyHTYFTfSk4EHiyrFzd2pa94DjBiU34uYpyEgwaRTqzhrRhKUa7Kxe",
  "key3": "gHe1s1yRanHHcEEXWe9hWYGQQqn82xdjtiYL4WDSv5a3WGgFeYKA8to7SzL8dqTwyayjDzfpKE7Sfbf1YHow6Qx",
  "key4": "2Z7pHCxvSEKrcm1gz1yJnMaSMWMQyEbzchQpJ1AsTfjgx4UKsT9E6xg3JM49UTjjKmydZ1S24LVUA8nL9WDyJ2CZ",
  "key5": "2ZpYk19GXEzfpFWNBAhREiRYgEUzuoFcfreG4xPD2F4SfdTcP8BzbezsEMazbsCRbGA9C9hd88CCQeiGWLpHfjta",
  "key6": "2gZbMRCDoCmR5owR4k1zk7GkvKMMx2Qr8rVmLwhrkyT88VBoMM76CMgggBYjTULPd5PLkxNtn4PzAvjuVo5MpP8z",
  "key7": "2guUf4KVaimPpdoPZMUyxsmCjaWMXRN3C7MoEHZiXACeb4rwRPzPeVqzh3czGgCyTpgreNPPEK61Rvwwycm9LXqd",
  "key8": "54hxstE4y3KrVPdSGtAJ6qpxDy9v8aJJxDwnidXwdp7WTqUV55dAqwSWFxT6ykwgTqkWwEeqogRpY1oHQxikeebY",
  "key9": "5UArEzKkrUqxUovf9UnaW6xWPExWGTSg7Xgk5wz81YAAVh74JSr3ysjYFQuUxxXA5WqW2EeZbdzj3CENQtGbuBST",
  "key10": "45v7x5GTQPkYemz57fyZ1dkzHASsJ2Ursg79GQaQKQJ7yijFMRbCRkxaZkitjqAAL44Do2Sd2Yk2jCYaBfVkdfpz",
  "key11": "5uepJQbBvvT2GohAbeWnBrqamTRYuAumnYPZ4f4RLTTPQSCRg9DuAQRFpjVWXbK16zkTcaageBGAUKNZk1Nvbqtn",
  "key12": "4p9MMGxu5PNWCLd27w3Le1JxiqWSARzgCSQSY1eLGqC3ipRoq2629raKucbmQL6io1bMLhBZUGRBcE698GrG7CJn",
  "key13": "2BuPmL1k5dFFAjPGkiiWtPecAGdvLEFbKfx1kpFjrMcLLNTQWqid4g5DhWjj3jLJPXxUiMhjtstiBWuF62bgMY7d",
  "key14": "5HuqR8oDKkqa8Q54DxZNxn98i7qwtSv3Deahe85hGiBRgvMfwSQ36VGf5hLVMHFY37RoUkz1QxudHUhZ1QdB36nR",
  "key15": "pZp8YyPS6E73bfz1iFysHkzc2Hss9u1W7jfZX8nFrcXR9Ddq7PB5LfaqmT36n57aHMnqdjoMsQXR7t2bJhdTtHD",
  "key16": "5xToyFRQfDg3huWrVM2numHhgpWAqefo9jfjmTfc2QcmavqWizWz4BVwARHDnZKeJdhQ8MJnbWLDTPazsjmMw2xL",
  "key17": "ndV5EJaq5tS4V5BZCL7NMwtFTRJthbtfiEF2xv68Xy5YKsf5c2MQAN2t78Dkv9E7x2toobJzFzCs1d5SFg4ayYq",
  "key18": "5WN6YxY3qtQqRo49AeJ5AVFYm8pRqnY2ZiLL5Koreu9zszbGX1e7K9JXnLNjX2MYDXE5H2bRUvDYR6PN3iTeP8CH",
  "key19": "4pzjLMRcjm3S58AjFviUJH35UfkMHoRT4Amej6HjdxZPq8n4twyqcDn5Zapi47sugUQDUnGmYPG3YEuvqzPTwDNB",
  "key20": "5ujyAxZL4WRWgfzg1dwaMwndrkxwwQ6NsZp4m1ktMxUrzfpT5ypeyb8DJjb2nD82Loumg6He1ndq67Sirrf7B7s2",
  "key21": "2m5WJWWrSn6G7uv6tjBYtRk5sXsFNoMmcud5zq6fHmpHP39KwjoaAuPkFdUYoZDrjpDwPquYWHSNdTCQhFtHyiN2",
  "key22": "59EVZXQ8QULrdPGM41ZSXmQpWPKwnvTCxLePWknAmPdxCXrQmqkx3ZFHkADnQMW9PY2Tk1jhfshP8XVb4f35SyK2",
  "key23": "4bjDXCG4hNsqLK7eY6NWaQBqS6U27H8f4FP1Fs5Hf95x3gRXnWXGswW7sBjbasQZkbm8Ce4n1keKhURPavkE4CDS",
  "key24": "5TMud53x21yy1v67CPx4aSsPZPEe2RivqPLAox7SDonqL7gTcZ2DwYrqPFzVq5RxsQRN7fmJQB9UBJviHpfMDJ3n",
  "key25": "2nVobh8umH3mPPrScceN9Hw2ozkNKgojmGqpMCFsKNLeeBWzZBHtTQ2jQhUzwRSiwehLzGarGrijCG5MmwSFkxr8",
  "key26": "5RvqmB4ZxkchWB96S8r8LC1EoFwMEeNYzzLb2KQhr9SSkFtQzckMUHNxF8pEveuLrvsBJM65zNjYK2CoEu9ZKe7x",
  "key27": "bmmCtWH8rqWbYYopuafc3yVPsRtpd8yHcEurtsN3Kar6GJMraWPQxEVsuZEXFfNj6d4rVLp6NgdWt1ZGwL4NcXY",
  "key28": "55UnCFi5o7jEwdkxmUCWjjADo63pBYP5Fbxaj4qU6hfKM7yqTXLoZascWtBNFryPH67fPgbAV8p6ejAZyLm7rzHD",
  "key29": "4FayJy5Uiweq6WVPHi7uveQMYh5TCUV4jZwG2rWAgBZTSaLe2zS9wJ16AE71AtvYqVWb8o4wzJVGR3dJLxcqVcnF",
  "key30": "3YXqmrXjVpf4eW3RwQoQwHby8xv9xQWSBcnizfwwe92nNASS3F8zLxpgzSjLQEzkekBHnc3FNfjvdSzsvgVGPfXs",
  "key31": "4vshvqAmpuNcbN5Lw8eJPSUg35kcUTmitQGrpyzohBcWMcaCJXWSCmWhQazNU2zxZWVse1NBGr9h8ZmmspmPTSP9",
  "key32": "izTtCQ8NPGU77vkJ1ykb9hJm3JGVoamJXeDs5WG9b5fYmmiQyBW11s7oC7rv7qbKyRNFqwWp9G7tbaCFnKKMGkK"
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
