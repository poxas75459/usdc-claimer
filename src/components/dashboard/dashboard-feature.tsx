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
    "4fSGuhLY95owTRwsJwwgnE1dMPSGtLHzMwYVdJz2vVbjaHqfsvScwgVkruxmvJWVnGXJSmuQQVWXf7ext8oyBX9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fB3ep8Yg4ubgopwwVZ1HY7htSg3jEzjGMQo88vQWtsji75TS2QeHk1hFdqD2dDjSnBjaYEbEC5MgW3VpwocndEK",
  "key1": "4Nz1zXFT4D66brkfwGFEXiEzi7JqoS9NkXGtqAwtQ4hVvDs3FEyo7qbzapzsgABvekNCXNqQAuKAk3Fyn9zpY9u3",
  "key2": "29iMuuhZgcLfVoLChGg7ae78BeMRmZ56iBqtwxX97F7KC5Fv3thv1vcKsqcdwSZSpY4kmMgyx2GZqQt2Worj4Y5y",
  "key3": "Tu3jKbDNdYtfL2CsqXvTzRr2GYYeGGmrcGZyJ2AGrFukh6rb8ooSFwSbQcMT8KQcVuhXGXGVxP2gPU5fYXciFV4",
  "key4": "5wsY3whFM4VpY7Cj3HKgASFNTYmTziajVft3z1HNbcjiUgXqrkUuh4BeVFLUd2fUU1hXcUbGNjbfNfEdJknoWsw8",
  "key5": "3Fu1yxDip2kvePxGAPCsPZS65nx8vUGr6zBec6YebYkxstw5WSZWwnKKnxFCLwZoVAZvsBdg4Zo6zFzA1HmSaCUA",
  "key6": "2F36dauqgJtJ9kP6mrzHigTkgNZdb53cudELMJKGeXqjxaA2yx9URGv3Q8yAcLKuqj7hW2Phgh3nPkbAyXMWVzHh",
  "key7": "XF5LbSMt6Utcixy879MUPVpMP7iVYGyac58QSp1D6td5QtpRLeTuTGG2dirLfbVwPeQRNj1wXJyHzyBW9tYMoeQ",
  "key8": "H67EvCs8aRJecx3HDdZutabWFuLW9ddjv6M1u5uvpeTqQynq4iYeH9cLWHDP5BnzW9tvVPr5R5JXqjzXgUi3Meb",
  "key9": "9LLq5LWKkAnmkyqfmc3cD6mHTdBgxEk2zQ67YTZeyHDXpiZDkRNA93JDHJLEBWzqgDdasdRLf4noNPvnn5SuAcj",
  "key10": "345c3LJBxBBgDzQwQvPb4RYFUBftM5t1JRjrCrkpM3SwXbrJHXaGUghVWc3DByaZtFZUMxJpL4GyeTRxbXzFTXkS",
  "key11": "23uPbnQ3xYAe13kH2aob8KFPXpn15kWjtshvCYy4wxukKsZzR14icBxKFDJTJautGfJczzAkTZnh97QT5mAYF9vG",
  "key12": "5qzwdkzw38fn7NrbwMkGeSkRC8KdJCDZoiEa9QU7NqjQLUD46nD2U54aedkdjgwicxPmdkzezXvqNi9tShhLrGza",
  "key13": "3pm2mwtLgbSoKYkvAmqJsukpFegAubqg2F4yMTcaen2TaKmBSM8x6masgZhw2QEVfJ6f59PGsnifaV8SA9i88rLv",
  "key14": "ekrxds1dA48MRyQvBgC8dmvPD6hotvys8jrm1edqqzG7SY28tLZLx9iCVJmXyPkQeHH8vzhbVPmyX7uF5T6CM5M",
  "key15": "3X38RqcH3BHpvdXcZF9ySbhnYQwVW74nAe9gXdRcmMtQUjsF8ZzRFDb8HTRLkKiC8MFFym3f6ADCckqkLWVwn68s",
  "key16": "25d2JdJ5f2zY6XQtrzLRJ5Pq3d5sAnT7CrWPi3jN7fR2tvT3jn7X4gCUTpGG41b8cAsDfLEAQKopHDoSQUJVxDjL",
  "key17": "3b6w6fBMUP1CcVucQn8pNVKcCevQcZu1yGy7gFLWJtbNxP9UFYHdvcbxFdJu27tMX6BD9rYXQs3pqRA6NHLqoy2j",
  "key18": "2GUR22Vp4ERqtByiHR69hhE8WEwaugze3od8KVbAY7wrPnri8eK6KpbcwxCZi3j279VSm1BZo1VEXCLiHhe1bB8P",
  "key19": "3Fg2HCd86ppKkCb6gQXvqdUSsifDNKLk1Ls2v9UbFhknbjU61qE1s5k2qZAqQTkQVk7zpPhjh16z5gjmj31JSxap",
  "key20": "2SWdqJWvhCGLLpNpb6k4EWwCxMMYgMsvLxpvfouERtmLi174dHbF7zx8M1NoZ37nw9h7niwebCa9MGEF9pXSiEo6",
  "key21": "3ystcNLH1AwBGmAdUqvGhKwDeSund2gZkMCMHQeidv4qxFaj1ewn7Tkb4T3pEarypkgtP5K5cy4wGvi3Se4SjitQ",
  "key22": "2qub3ZUKbc7FLNsfyw8xTGqWA5FfJhHCwxD9gMBhmzjs373KSiy1NcWZD2m6vd8Dwip7XFh4Kj8Au9Jhegyr9Xrf",
  "key23": "8pkKPqRz6sG8owVpApj5HU5qc1PAbh3ofAmPdxWyo3ZbALPexfqGN6HSMF8frLZ17tC7uXZDteQKhnZDnbapMbE",
  "key24": "4hrXQ31Yzrqxc9pPwkw6zyCVH6o9MR35rLiphjBZgfxc3iUh1s5qYpS7U3T5QgrVrBWAY972TaKSFyyQmMbSF8bN",
  "key25": "5NRySgnyHPMpRFJndeHWRrjxJ9WUeNKEy6goAoGub8xpTKZJhn7XrvWfs1xWPxVJYGwe3dnnTfABPyjuqjBg4Wd5",
  "key26": "2TcXMRTma2SxVfeudmpmzsvQXbhPZDCQRMNmAWdkPnHkEcuzME5S1NNEtUujBYNCxc3uXbUFYkjmE48PFvsEq4Ty",
  "key27": "3VFftBA94LkE2ybQzoDPQyqnQwM86BMTGCtVZEkuqSgzPZEwL56c4farUxBSk3dUmcWRqNPJkqExzc3u4qm4AGFJ",
  "key28": "5GFU4uQ66viUq8GEjYT2nR4wFTRUiHC51UsvzLkVQmvbyZGBYGsQrwTcveGiWggqE1zSAktH9SsdJpaTEdHNnAK8",
  "key29": "5x1hchnDj1JjQVTWAxM3GE924b2FXF7xzyfmJZCqtYkaTGJfAQTRzsWTs9upM1DHpt1LtXqDwRWg4p6Lrxv21qKC",
  "key30": "52sR3CHm4N6wpPv7sghvNd7em5wJs7ojM9CWFid8MEeLnfxQn1TmwHbZKP5DJTvvDGjdfETjGd4XgxksJMzJiezG",
  "key31": "7LYgDfzJMnzY9wd7s8SZ7jBX5pw4aeV6Hbm7AVKX6nnYSu5XBwkKKUo4JiwD8wE6SKpirj5jD5LGi5QUwqEaion",
  "key32": "22uKtBJtYRqdxP2RJ4T7xMddKFNJNKXna6dCyHJ1VswS1KjAGtqoaydKZ7461Nirrw3SeBUizAdPfKejhvxiMC3r",
  "key33": "3FVbcmYy9ZMjoTuTPdjHD1hfo1pK3keUPUSN7rsYUDVaa1UVPP3fMSHmrkMs2UyoqjrG7Tu2wxxEToWBsKK6Zbyd",
  "key34": "52dW9GWnRyGzY1YCpR74rmpDRVqDS6txUEvtJguQLzW1o16hjhTCq2Y4B7L1dVPrSYHMBkpVjC7Rr9Z4L6ad2UWn",
  "key35": "2HVgZK5bf6MzvE6BEN3cMiarP6dSRzjNvqYsMZekgwEhDTA9XZXsPfVcs5CgDKRUjcjA5vuDWEk2ZhmF5yPTHn9V"
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
