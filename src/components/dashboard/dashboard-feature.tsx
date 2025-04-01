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
    "2kycizwcKykZffYG3TxS6EuJjPSyKPuUsU4D3Jky1DFQxotF5DkigJWdLgsUeFGnukGb9qxuZXkuPYKrhX4muh5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCYJgLFDWttasVHJhSgEC9za6D6VuMX4wVjbnB19YMoLn8mMsC145cme1Au1GRTTsK2zkmbYY1E3VZYWX4DbYNz",
  "key1": "4EjUcVbycKR4Js5Uh96smz5cgypnXSN6QtTbpLy7CTtyan1xSBbnTd98yw7fUCH7ku5Ve2tidxJqq18mvreVyK5i",
  "key2": "AKNscs7TVJmdW2mZP45oNib3JdAYWHoyk8kvRXs3aFQYnBWA2HLuuBwwmpRSzv41DX2aWceTbq7Z6zAYkWT2V7o",
  "key3": "814BGCAExR7aSkUhcKXc2ajrwM3LYnB2LWvzuTotLQsm9cTrek4cKaTNLfi2d6FWjYH7zjQwzYkB6zpRwnC3gpK",
  "key4": "1UZn8qxbCTvtn1mehz5iT1XGbjsP772VQ2ZU1MucLwwb3eoWmmBYXent6oMdKoNQ7tjj1geG2z36odrY3kUsLYK",
  "key5": "gmZmxYRC43a3YEAJS7jaP4k447hJzJ3BauSTKZ4ctjxP68HWpp2oTDGL8g9awUA8LQrraLKTGcbcmeEp3jcsePV",
  "key6": "32cTMGe6Sz7ejVdz7mXk5bn4KdvvHJ1gxbZoK9Ym6AbTvzaGnNY2KaXdBCNnFBdhHccQsDktpvhABz9Ud1vwt5aD",
  "key7": "4Repe33CGpxf1eYDLx6zct893PKhJKvggvc2ubZAw8FsrgLSSZkek5AcKUSVspSYPh9jkkf13AdLknNdsJYPxYF5",
  "key8": "3FZy7Y4yQ6mhZ8oV9gn5fVVX7nHZvmgYBtGaERmWzMrFqFTnqhoiTFiRavWU8ebdB7sgzfHXkcbScGMt4LFsiu8m",
  "key9": "346hih4Ha7MG9rh5Eos8fKSdRYWU58h6FN84c21X2RdLNcE4KgwpBgWaDSUDR9AU74WttZL436QVbHZs7PHBYhav",
  "key10": "3YZFG6KLyU3U9nVaKFpURpAjR53YqMk12rNFectfZ5nNXqhBCD4s9mprKuXfPNovvaCXs7Rg99mbL5Gm3FvnsvJi",
  "key11": "613GpaN2NuXUUjRxWReiCSecTMW7to8uczvc72goULsk77jSq2cgmugJbEe21FQ2vhRQLyUH4A6veLqRgVexJunk",
  "key12": "4iMz7Rbbk2V2ApM4ZD1qqe9rPkUgE6o2QqRUAeBW1utoXeCaMhSfQ3es8i1qXEY6fqWdncTUbskh2KZ72SbKf1aL",
  "key13": "Ez1KPA9cSHjYkG9iaxRP2w2ybf3uVwLWE9bWTfGWXT3uY7vs1tyYhygfKbDeHHk4jaNioBw17abTwSFjbTcetC4",
  "key14": "37F53ycVtXUrF5ABwwhpEUd4CiJptHSfcjxMzvJCqtcfssFJTsHfvzjPNTpAKB3s36CWvSVnbN3Xc3jJ6fErnMyB",
  "key15": "2z7hVXx34d6bUguRCWZFjB43cXAZNFQWPaFpspFbusSLKHBVQKeiqnPv1SWAtbgYTwwAq9xdongZX1qMVyBKA6eX",
  "key16": "3FzdnCEG1aAojWQmReGmaRGN23d28zE2mzg1ZQEC9iuHYYKK8UsxgSNKyGTyaZKPo6LHVjcpxPuWrudF2Cb1itr3",
  "key17": "2oehtyhU33BzGsod8UG9Zn8UB47cw7istuHqSgFj671TZMrXpKLfWvSkia7gGLUyYR13NNPn2312Q4rGFZmF6vJx",
  "key18": "2EwRkfesfQSAtnadjuNidykoo1f4wgfZ2tPnc4Bf5ZBUNNwu3HnpWhLCrzpJnvvmTfggRa3WMqKdteJ3vNT8CkGB",
  "key19": "59BzeJekAycaCYx3QsPH6kfNWH1sHwURatixd6avj38UYqE4ovv3VrCuMQWyqQjhR2Wbf7icfrtgVz2zjMuhNUYF",
  "key20": "41KFqirDU1hpwM32aZ191Q26X8cQHZrQM18vhohNYfMwAwLc2bgAFT1cuszDbpNkZVtGYiHHNgriAdtymyPaeKB1",
  "key21": "QsvV7SdQVnRXfnNNEqyEbAR9j9WK3XxBu69PKrKajmqNTun6mDbdtCrYdQo6qgwWDoaCrSgnu5JvShc9kD1D58C",
  "key22": "2wasQdbFChqXezqwK7k5yuRgYQsY24jw4fvQdaSZr11sBp31HMVEWkCwob89hLDkGC3d7Xf9Bh8Xux9Eo9aftCKh",
  "key23": "3NZNqR7cBLfnn3Jo44J94TKt25qjKLfarryTj27DSyQh1fYRs4ynZVLbKYwWd3mzGmT1s5MdxYypDDtLfHC2ZvPF",
  "key24": "4gc784N9xZDDcLBQxEqHEaRXXJur1cZ24fozp94ERDr9g51T2joTXzRv9wVk6x7s3hdMvmaptoYBvQeGZNzxwwRc",
  "key25": "4tyWuA6c4PynMUwcFkV9USZS9q3WRiygP43UqwwQaXm9neueMs1WoTSfkg954cg1FvirVsg3xx9kSSdV1jz7ktCp",
  "key26": "acWkjwNpcHsL8tyXiGdaCMPNGZfq8JMNWXDuWZHQoqXEx9LAXt5LkrFdKFpkKymQdMBZEjyx9bCu7kaX6Y29cGu",
  "key27": "5wEpqHHuj1BA3AgNLepX3MX8yS5tXaBE7WyeRqs4TXd9jacY8QbfYc6DYDvRYjxuWZJp9ho9sQAx7CER19kQ79Tv",
  "key28": "JTteEX5Xio7Cg9zGNxVH5fEpry24YzAhpt2wkbkS2JVe9SkWityAFiS1i4tgpRFQmuTv1WPE36aQW57MLoht5MQ",
  "key29": "5VdbTQJcRMhmotfawAr2kUkeho7WDKcGASdh8zhN6r35pyP6dGkZ91tJKrnfWUqGmytAcrvuCih7vqxmPRwH8djF",
  "key30": "2EY9XvWhKHGYRs7C8Ek4J4DmStwFAvNRS2RkHyGMQWRQgmr94xRNk2TcGY7cfB3uM9LQjcky5Xr57iRYBroWNTdm",
  "key31": "2HpoQ2FqvjccssSCVy3A1LCCfW48U8tZNQWwK2j2eWtXAJQSV3MB2AJXJZjjiqoKNG45eT98K3QQp2E6cZu3oALM"
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
