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
    "5mZCx2A5SVY31NV59gJgKN8axQobhYReri5Lv3j4ku8VsTiW3DRdNY8VotMrkgRLU7z2BQrcVS7exmGknUmxGfuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21FMJxZtbN13rTicJbXqjqYJGv9fWnWEy5MoNhos1fE4YLUp3hPn4c2qZMxRjJiQToA3SEyzXkumMcvJJABqt2w8",
  "key1": "H9atANyFGxVjJKv3Tgb3qdtPWpVfaKTegsvwTiyiZNtoKywegVYHvoSLZwDWYydm11EkRofJXBjSMsxJ28LeStK",
  "key2": "bkpmRYtisxpux48GrKUnARqmHLBc1vC4c9nxWuhoCcKxkkinosEauwkVkzj684HpviLLSYUVNZ9Q8noZL1P5F3T",
  "key3": "hVYoDE5dxLKXSeduE4WNH9PQqJi4Y84ATefgCUReQ2x8MSZywZ85iaEvvcjYq19uS3WkHoHwRdjoJq4my1s8vy6",
  "key4": "379PpjzstJNtp1eP5fnmTutxu9a5oUGWm7XfjSz2Bo5qsXv85ZnHU3BumxYqQGkAa41eSYqwJxyiivp9SsCsFeEn",
  "key5": "Xbq4VsHRyGjh5Q7ZxGZD1yvf9uLHxoLk5ZXs8UjxUSTx1PXyRbyjsc2BXbs3Lkj9PGyj36EqgsDgB1kaJnbv5M9",
  "key6": "3bpjUsSShTxP3citV29aonXevHNHr4R1tdANrqk72EmsQ5sULh3tVTjq9M6biDN5Jx9YetKvgpDK3LmGzK7uWyUM",
  "key7": "ScKMXQ8yy4hfWuUt28tpA8WxwyBhUKa1fV9TtD2XxwsKRFrSdfTGKBphMKiWie9K4P2FoDosh2ENNEAAmwrKSeZ",
  "key8": "h7mwQ5Rp36xzxZZFog3ccVZwU3DRR13pj8kQG2kcsLJMxAmsPfWn9EWn7uEAa9MuNeXHjKPeAWUs3iqzEtFouMG",
  "key9": "5BNvgFXKVPDvaxeujkKqdnAzBGEByAsGnJZKopv6g2SSWWjQyez766tSbsjX1QaoG8iYPwSyxGbe5hRq7QY8LtsA",
  "key10": "3Apz6hyr822dfeh7E5JDz6jP1yqkp5XeVZJXGAq57b6DL33R71zQpKE5A6jNNkaZiQjyFEPzwoBYQQFyUwJRVoTU",
  "key11": "3FL4gA7rXni4NRmo1AXbtD4v9pYdjdJd199y1WFWiwqgXpCqquAWZK8HZhr4TSGoGaDNPpejfCxH5gwHJKSSNuwq",
  "key12": "2RmE4rtrkS2aSvXAiy9NTYwnocM2AjNnjjyVVznVUWAqdwHNKongzaoV7e83onv6sq7ndyKMmfNoi9BJ7eNJVbEK",
  "key13": "2nsRRZdVLdWXM3aEXZGEhgzZt4QdCjibWp7yCwdFU1GA33qsnBqb5zbnDLrLF9xiGQcyB5A9a15H2ew58nWy1Cn4",
  "key14": "2UJVsf3FUfAewPy8fJozb8oAUmN4McAR3ukdj26dQEyrzeCs1LUNbsfx6H56aSRVUetja8CqWiFqxrf9N1JzGdne",
  "key15": "2QnJCSYySmbhyY4WfQLcGrt7DhtThqAddPiPWhhbLTsRYVZ6GzjBvMmDErM3YJjNrdoKCW7Nx6X38ZuUnkkRqN1k",
  "key16": "5ncZxXcbTF5QiocXdeasXbLXHJueZpjDiXow7XrzfH8pXHEoUdpTKRgxZWLXB8oPXRGXCe3ityVCkQ1oo6kqryMq",
  "key17": "52W7Z9LfekEegVUnnbfNsAMBnRz9DAh93DrCXTGmVAkgq5QRrHwPpK3SkvD4vHttoaCD8FSz5CxAwuUUoyhvVphg",
  "key18": "34XAaworkAaGPk1fmgozbEJTWyw2AjqJy12Mr9bnWHGVFoisSdysoEyVBuGDpbq7rxtDy836Yqm47rjanxAjRiGR",
  "key19": "Cycz6gXbr1PxqJhvQQZoniLwDHj7wV6oZoe2sqVSoQpZWiaYFKH6x1rkRpsWkoNLgrcjjVjhkHoUK7RQoaoXja9",
  "key20": "52da4sVDbopyyu87PV2VyMgH7ighmi9LUeLKFpe1LpMXLyRPhisiSXxwsokzgbgkAJ3wa8LPVb8SQfCz82JBsQS6",
  "key21": "2Wzx3r7p9QwYCAU78ZTAiybB5hcLW3nisvABLjt7LVwdUpDAnX9ubSY7pJbnrvGmk4DVKsswmCCW56W3fspKxrZg",
  "key22": "3anRYDqobgtJYtEjTmeNx9AhnuvipAFBuEbQ3x114wuEQC5HdLEuhmU8izMe7gM9LgjzDBwmg8Aia1mrSuhyib8P",
  "key23": "2Cexd1rehEsKAk6DaQFdoWK6yaFbf1WUwcZBKsCMRohuYcHUriPc6Yh8iRPf2vx3o7dHuRRLJhNsVyFcphGG3KP9",
  "key24": "49oAZMqC1qf4wPw7pJjA1J9sKR1nTSJftLk72GZfzBEJu2G8sbsvGSbgMayPFYfTf9U71vSMBi9TtUB9AuXy4etf",
  "key25": "369akW4aacXHRbRX1ezHRP55ZJ6yhJT1bAE1xxiwKMi2tRJVVBuN8Ds5EfMa59QUcnTggD1R3rkGGAwDms5bXgz1",
  "key26": "2dTBHvLoiU328ReEWjhAJqfgg5kT6MCctcxtUVkCw6KmmsN8KYhdPt6K5TP29qMysXHc2cCfiT8AZFyBZMwE5LcM",
  "key27": "5j2jbsruJKaTGH8ouetRmQxoMXAxqv1aGFM8cJKoGGktTdzLC5WpRpD3mRM6eE3DRvEnbsMYJf4dNNMjZVioqTGb",
  "key28": "3dTiZUGkhCqNiXVn36W2LLBKzc3Uz1Ab1LFkFV1a2BZ73E138ajr4PeuAHhfKhRsFAEFLFhUigjWKES3Hcp5ZyYU",
  "key29": "3cxgVLs7CXQei111PQHYVvUHUEBCJvYsDrW1BFYYkrRcGZpAkobLQGfakix3Sv77jj1iCLekvL1uXBMLFuSui4G7",
  "key30": "63ahaoMxzTofsP6uwonV2jwgDKT8WP1Tub1yrojqoGNwY54WYi7evrdWHgtZ8DfqWNsTihnPKdJrnbDBz1FBA4zn",
  "key31": "3fG5RQUVUWY21eF4pSrvSXR7yHhy47i3HaoRt1956dENTW5kKtkP3ZRVxWa7PEo9gfRKxS5MPgb75diWeBjQyt9c",
  "key32": "5zSzEZU9i8ktBfpmGoHdMA8cpVwn5o8vjEbjFjfdGt2jrP2bouFVmTL9V4zfVqoQcwyt9cZTxf6WQ9NcbEjkw9m1",
  "key33": "2xHaDRvr2VEA8Ld1zeCpoCZHk1vPjRiq5C5b8dAu6KsCAP5aSubtYZABAh1iyNBKicpWESq7M9S6y2Pmnis9hC9p",
  "key34": "31jSviP7cmeUvEcqbWys2QizV9HUXMxEtw5NA4AKwFiZJmTSRLpFZamdoPu9hh4J4ZNZZJfnVBMWw9GkAu4CyNY4",
  "key35": "2aSTZ6ouQ5Gn5dYGAN8aViGTLDFkxjVG3sZnNvgaVGRJLRpWzgRJXXdDMz1jBAS18wza5cgna9pGZg8AZffhSeEb",
  "key36": "3KTMJSXSCKCjgqzRxmEKK4NqhUDfHMXGBVkC84VX4CWJAZc3qjBcmvb5z2bx865Z1gXVJRw9iUzdngJ6KbmGCJHb",
  "key37": "tiZpAnq9QbU99rGBS13rm5KUSvN8SszmJjb1t8j7U7dAiZNpvpMroFVLqULqfMZ9Xmu9LcFdyYJeLkZ8ufZDfVB"
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
