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
    "4BocvhHjQatzukiDYNKXLGiT4rcuGN3MQfJL7x6LR6wRvKNxFfs5WbMcg84JPgLVDdcj2WAV2rfifo3j47xVDnuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WypcHs3KzxCK5rdfV4kNyeAYYu5s1JDCUCPN69cMAE6c3ezmyifk5GMcVhRQLA4yGJedgX7PADcwFvvavxbNY6Q",
  "key1": "2UnAsRD3AzZewwXyU53DMgoW3DmabVPQgDB8FanNJSdY5YekTeQY6L4H1poBD1iH9PwcGTH1cEgqw7MQHQkgE4nL",
  "key2": "3ZPPFPom65AcL8DmtxHQ5x9SqaP7WncP39FNsNbWM3Msdep2rwLHVZiUo3XB71uNkdLb8VbdDD7NwR6iq8KUx1eR",
  "key3": "XU3d8DiMVag1WYeWEQoNTZwwpXatSznqqrsVJ8anT9rZEtiuE1Rb3owxbq8twdz7pJe4tyMWnRmsuCrJKPJik5E",
  "key4": "5WtTwzAsrJFfmmg162mfe85cTXm5rkBgD3FtSSMB6cFQnCWJ31gKiCdaGfs2ux8Y2RwpgcuLUSFkBwVBPfSWutCz",
  "key5": "ZWiodMyKhX6aw4xt2cQnNqoDmZRn2Xk9kwHbnNHtLGTS2czNtsAVdyvHJsYxSCi3hTbTTmVphFwq4sPi4NE6gQo",
  "key6": "2AWJZCaiCbHyH32TgA2oebYcpb3ZtBzDqAAhmqwnrTTty8kxHZRRtiNqCAksGewzZGMtXjWfJu9Vm71f7rFhhdvX",
  "key7": "4pdANDycqLPXdzEiebLnrQ9YQmHxw3mj3hCtW4z58A1oUZs9ooErBSCjmzovw6K3iRvFrDAhUeiaxtY8WB1V1GLx",
  "key8": "4J7GiKaNWsstypcsbDCWpLMyMnCnfg7uMeFSiWxyuiQ9DEwvpqGRavBk4Zvfv3yHSbgmqjeweietstom5meUqkMr",
  "key9": "2VDYF5cixB1R5jRj9spWBCbTCP1fVkzZB1nJdzxvwnUbqnhMVy84pCXJT7uNZQx9QChMZjtC2dspUzENikQT2V4o",
  "key10": "2Nfk1b2K8xeNnqakzb3CmQBWtwTksfC3xHkEwmeKTvENHz4VciHb2N3CTBc1FRaK3Jqw59ekMhkjL3S75wBrYZgP",
  "key11": "57HrcamuY3BPN2Mn3feXhnhSVq7qdHkZRq9iePCuba2UvD81wkFrHADydLZrcjTBLZ3yxccp1akuKi1y8TEhfR1h",
  "key12": "3K3bKwzh25euf4RvZgBpoSh9vGSVsVWiFykarqw129wkq33B6hiS7sZvtGq2MedTqV2YEVKu9pY3BD3A6HBeBCgM",
  "key13": "39EtYfc4Y68ttJcM9Fep7h2rc421ZoHAHwrMjZemVFGcWTWjYwPzEQWhgawbkqMyBQ2tpQLo5k16LmKCmEVwWDsk",
  "key14": "5wQSJyvCWsJT3QtR2AyaXWmPpogAutKVYQyZ9dGAM1McxWpxNcLDgQnC7VLufYxW2S1eH3iXruE2a37iGc9N4avW",
  "key15": "72opF5ESGm2CRExBQrfiU33vqkrNSX8MZHCbeghrKiRSwVUSBzHPKs2JtLphwT99jAB4jL28YNu7ntSz2zHwcqu",
  "key16": "2fzPoMCVHcgzbHTVRTr7AZUt8YLvs37JnDrDp8nM3ntTayct9UDZTda8jaJq5AHgk4Jb6rhLDFKSUiesKgm9PXFv",
  "key17": "3qZetZyR1YdGAt1rbkMiGTp5KkdePkzx8TLQeJYg6VV7v3zfqCJTqezR7ZaD8kA3RaV8DfS9tYi2WQBdJPBExkQs",
  "key18": "5MnhGDkZc9P877WFWpvYfCNcCJcTPYLJA2ep9y9NT3yXewJYCT34nZFnb8r5futbk3h2NxtHrc1pS7jXw2haFex2",
  "key19": "5rir2gm3auLLbw978x8EXmuXjX7bbtJM6mDLmAaEGcV1n1VYFYHRtPvdDo2jqjxVk1rxTJbDJ19TzLHoQG9fAipy",
  "key20": "5KMbgRvmPdfgXLvQzFvUL6spiwujTTKsku8AZXbqBoigYbtvsM9wDy6XVZc7fNPc9S9vgim1Q8nS9ffr6qPiZUpY",
  "key21": "4SxyoeTGNJiprPW6DhFYqwh3xLpN9gGmi724v3z3En45cEhLA3pNmv4xdDQhF6ehAuG5cwzBk7w3rBS12Bmp5Fxd",
  "key22": "5xZtpP9BpZMvcPPN2HcQPhdN53z4cTBEhfpaCtWN1Hr2MYXiEMcdiubBmM1xqJXoZ71t2Tb9BGubWbNnoZuLYh7R",
  "key23": "5GhL6mTYfdaY1rXCrMMwDKvct9bjvKTWc61reQYAWVEkohW1Qh3vmsCWD25RPk45EvjeULAXb4L5hQdSARFGkL1H",
  "key24": "267wvh2VRYmdAL5wxEiEgNCdH6TAQaeWyFCurC2QgK988KRoMHJhRgWMo4PetDdVMeKXjRA65QCLoT7sMev2ygMq",
  "key25": "3dt5mk28dKLbHBBrwDcjEcw2T3urzQGkHfEcNGBSdJz7bhdqGde4YBGoqxfo9szBCw2eUuGBid9rwCme4h4wUP9y",
  "key26": "5TWzgFgwwtgmNCtJCDBv6oWEm82e3AMUPSTuAfwnKU4BLcRZu3gE9NR54NzMEABfftyLSHvZMMQ4y9C3521NN75y",
  "key27": "4HXm47M1P98UimzS6JUUePmyTuQMAkrrCUdgX61V2bvGTVw7PYj3mcQp6V13k32N78xsqCUJY3HGsCZXcEjnWSAc",
  "key28": "2ozPK97hE5LmoBAewWMJdWaLDsvCwKeom9RTHmZMDxowaZ8G7Md9T2tJtQo1bc5KHpw5CbyKS4mh24cPNTmQUVex",
  "key29": "F28TrN2WUPYUTxgEvK2h8HAqeVpYk7LBKAu6q7ghipytrHF1KoXB1T5JjrDFqVdcP3XznWRqVDfw2a81CNgFQwC",
  "key30": "2eGxYNGh8jU1rLfXyqAUAzBAkSASoFqR7r375jJaStBi2xdR7XmmuYp4xTg1r2Zmr1CLnGGv2JTofEXnGUBHK3LP",
  "key31": "3JK3siWVKkF8rM12LxX9KQGpTdr7L9pcRbuEDAPeftCfujWFpd9QU8eGpUzJn8cBzmj3KrKpuoRNBhZtyRseyaEU",
  "key32": "4DM1MYAG8Lx6CQzrpe545sjRTmZ7cGWzHtNgAqn2nd5ZBRbijxjuCNQ5f3iKgMzK38PsEU67HRyxVGfM1jjcGKjD",
  "key33": "5BLb5yuYQq6YLBEHjsaWTokSjqhwawC944hEXmW8vXcjZi9xFn8HnoCWRTDnf9ECDmj3oB3RbjJ2fyJGzEjRn2pv",
  "key34": "P6WjrV3bJtco44o8EByimhHGWdiLrAAyM754dNjkVD9dFpuT493UgbJQ2WBBEt2eXAkUqZc9d86jEv1d87SKEhi",
  "key35": "5vTsobrxN1cfCN8hJWv7npZ5zMJhdPuofoQ95ySBsgjwHzYdsSj3KaFu3cBzxeNwU5ysDxdiwUc2aegvxT6Jhu7x",
  "key36": "2veiWNjm7wc7A4XxHNqSHmW4A8mgXE8ZijG97amY1Rqf1Z3WeUNtWk8BeGNLnmYEftuQ2B6WPMhZRhDrYthw7wZM"
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
