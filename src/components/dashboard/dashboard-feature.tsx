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
    "5nmCRaHDmwp4Fc7HUfuwpkVAArND1t4RpocX5rDZbnkofZUDLgoSrcz4s3qgGmD1MHu6nMJw6LB2b6jYqoB6DoKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXrGq7jU2YCWZwchym9d2jVoY3wSnnPd5oN7AT6ixXDghXDXG6ywCU1TKCZG8KvUNDXfhY1cBhfKhABobxhxfJs",
  "key1": "5BDApAsnYw9ukg6thJPdznJo1zUzpwjo6oTZADhJTwj46Ls4yZExGaSLhcMwUJofhFnL6C9QKNsB6JE81bsSuUEe",
  "key2": "34rDQCE3whSTV8PFdJgz79ncdk21tXE7ADqyDLb3J9qE4tesR7Mr8M8D2jCDndtsbQVkDy8tLuCqiPDhJovbK3cg",
  "key3": "5JuosVV5g4yR56U5aNeUFKU3PcZ5Ed6ZG6u8mgU1C88RrSUZwZQsa36zCkgpaeqkZ1bQttzLg4UsCwYDYkfKLKfc",
  "key4": "2dm7qswmSVwrYpacuhxHeEoKtQa23VcfWJnCZunV9p6ukcmF1M5GgneMhWCDzsimidGrUrePVVmGhzKjDbSz26Y7",
  "key5": "5Ch5iPJevGVdqfFcYwb2CGAnNEQpDPV8h8VjwaYibX3d9KW7MjEP239wetcM1VsoFZbWW4gjic2TNJwNpHGZy7eb",
  "key6": "4ftu1H4sYt2cuhUwbkj2jFFApcBEYf2Z6NoeF8GDxdwMXeWzE21dbxrUupRXXwdPV6sg3haxnNFSief5UhYm1VB5",
  "key7": "1ShzcLruSd3eih4AwsoK7vh6TFxJSEaaRFs1t6MPp3WTya9HfHNpEfXeZaV2xG7X8gZwUR5rETwYKPX4m4UKKMA",
  "key8": "4QignuHoWW5o4vbe7DFGWXBGYKhX3WP5bZXpsDbVHqKr2ZYg5QqRL71e68FZeKVfoefZwZcxd6m1V6buHN21N9c5",
  "key9": "dkJVaV3ZgHD7aWdr7GPsSsKe8C2XxikyURfNrafcYNLnN7PZxKqxA6U5uAKaSoXv2yHi73Ahr84UMLWRqhhTRMN",
  "key10": "5m4PJrWLLDNXFYxgQfyfqqb5xeToGpbTX4tNnsymM8n839crFSyoReTZWh8vHE33Np4GypCfqWrigEuvvtYSbq13",
  "key11": "Xnyzzsc1buATqvbuMFdrFhJNotZKYpFYam93kcN7NGPq22RsH9LPv6YaMXsgz8QzHZBfjprsW5yqkoCvQyXykUd",
  "key12": "4u7MCCPgofwMbgUnosCfsxFs7VXAdwKqGuzRR6MmYguq3e3nXtvfFWELHmLr7mv3femLHPvumFw4i9GEumcv9shh",
  "key13": "2wd19dAoMw2Qw89pHxcg5kTSnFZsGz7629qB4yyGBvPbgKfKMYzM986bnZeWEbGbip58GzbyFha7p5vsctT5G2fk",
  "key14": "34Y9zANDNwF7gD3Zer2Wnn7vZqCgHNH7ZHznNxMm6aPsczsrmQZYgwQGeH3AbdoyMoPz8bBcqUx7vnKhnNBUeALR",
  "key15": "5vb7up6RoU91XfdjtKoZgrsKDUEmbYuqM8mqqDyzbRetFMyQEccXKePndRMZt85y55V8Rue9hRWJQLc6dPwSowGa",
  "key16": "2WAC8a6MYFFhbdQLAjRw9C2NaUdZJ9SycxAVs7nV49YshmS1WyNWMeJA2ujmcUUK5hNzvqTXS3rmrkcVVireo6ia",
  "key17": "4pev71xCn7Xi5BG6L6wy3mxjk2R1UfaB3HQx2iwP67SKXgDdZ8kvpivBozRhocBuxx8BM6ByXZeLFCu1c6eGVoST",
  "key18": "5BY6r1a7TwCkR4SXhLYojWVgxTgmqR6HHBARwqHdAVeCwJcs5ywPfQ11YKL456Vw9rAuxztLwohiAywjzEjaf9rb",
  "key19": "7RfX3ZTEJEXDCeZfcFNmcLQ1f6ThkhzPoKboPo7ztXpE79BdwqqcHzzVFudgqsVL6cVD5KkkR95cRzfJAcz3NL9",
  "key20": "53w72Ft3NCt6jdmqEj8baMS2fGEyFYJat1tSH1LMT8HsKfv26wX1ik44GPosMRzRJydpXVss51SLekN6DG89qk6t",
  "key21": "3USeka4GkoQau2QdaPZN9BED7tYAkpHvXKm5r63p4oHAdTYMhY7hKvzxkRRqMJsmjujJxkaooaa6WFutBGdpgtgB",
  "key22": "5qpB2Una43LQGHFtLVTSQC8TrMAiJYT2oGSkEnDJqbcnBhs5vQ6f6r3GgqZMYdnAzsvzm5F592NuD1CbcLdSVsGy",
  "key23": "dfn3dph3Ad3ErbhTJtQusv3szUC9EK2rA79PNPp8JGDXNthKCFeYzty9kcmVwzbVVPvzcnm4hWWyXmSXpE9CAe4",
  "key24": "3Gfm6sTBaLWmnPBc9piu88dM6h8UvGHfom1weFMbPz6mQRvCZbbhypv6Var27o8TWeFWbLQJq3qgdxBbB29ge1db",
  "key25": "67jSn5ksoEkLeqC9qmjcUiVpkRHBdMseWuHsJ4bFS3hDT6qLv8PUKarMuGZeNLaP1Nd9LaKK5oQ4fxqzUtYMcZww",
  "key26": "664UAPaKEbFyfNujwA6LuxkDW3Y9CHZYCpWJ5XEXz4HQ1YWma58FMfGX76ccvbjH7afaun5hCGcqp9d8fA8iSktE",
  "key27": "4Q4hkLVVoxgRUqAgqvtqqs5p8APLpoCzphQiu4ikFiQhBaQFdTu5dDLPLKNtUe1cwhiQ9RjdksWQsnNXPpJ4rRic",
  "key28": "5GYAEj8q8ur542jFyov65Yh8DmDtD39o4bTnQyrq7ziDGMEQUEagn7wRATYwizy6LvvSqVvK5E3MoxUtHCYa621n",
  "key29": "5YW7zWoZBrBZsutiv4TbJfPLGRpEXPQrpT3AeosKGtBHRoqeVGKj3f7THmdq3BVeXokjBZijbA451Javu3fip2uE",
  "key30": "HUzgeNwkBUtoz1Fuu8uKoVNW2TeKbCrHhjCQo8ZGcM9wPhUMTZsZLhBdavKWcdvz4EW6kjB8CDAb3433bkmsNCt",
  "key31": "4na3QU6XLfrkJ265uVRodMCg4xcJvi3CcH877KWjFBhmix9Y6PyFC8TnWaBT8vYeVT1DoN8cJ7QYLiFRQ4VHz1cA",
  "key32": "Ka9oMibpeSJdxxre5gDFaP4bE7fgP6Scy7GGERspQM5b3zi8ERbYNYYTJfCEr3xd8ohPQMiWkByBJ6yHgJZUND1",
  "key33": "2SC6GA8XSCpiLv6VPvYwd8vmXLNEBtwH5Ro5ddUGvExmcht1jPVdxgKtFrqLPSoruyBfCz2MQ9xRaxWDaVyhGHxZ",
  "key34": "23Jvo8YG9b99DTNLpmqC3QjbPEMs6M272rWXJQ68En8xUJJYvSDiAhfScMhUbU5T8bm9NinNNHpdueigPd9izSP4",
  "key35": "4bKuKSudX6meFUC6iXjkpkizwNqPTbgxA8zXPHt4ZWKdoya6JB8p5KhjkwemXnurxST79WUhdHuFcB6g89HknfyJ",
  "key36": "5EjWRhustCmoT2p7WYRYjfQ1id3tAbaCMnK7Y65hV5Ae52SpeRyXBMM5yQoUPgkrazmn7WFKm6NwhnPFbRa9XfsJ",
  "key37": "2xmHM3oJPB2jgtxEVH7h8aZtvhfyRgTk1dZHEuxKvGEgZUvrJAqaALGsnLjwmcFTpyxFcBxKyZX4xYjaFqynyW5p",
  "key38": "UdmPqiqVRrZKNTJBn3fpPd2gizCBCgoYbnLs6HUKHYDoF7zhvU7Yg8uWnCnbJQJprUBVjHbGErxPUPJgvvUGAVK",
  "key39": "BpDX4ncv6aSt8LRqk3ydkHrAvxAWRzANS3bnqWgbzhuigVKspWLDLgGyx4HMESQYPancmUD3tj21BjMQUUkTTVg",
  "key40": "3BcEdr7hSvciF6BGBiLghueYtKvcpAzF1tzkKdopbHk54rpw8w99WSNNN2EGC6ErgbPMS5Mni8hD2G1QM9Fu4q8x",
  "key41": "5bz8wYWxSwyGS8smvCVJBfbytpdjfSsLzTr5VMo4EM2e8vviej1kKBDgjiXeATr21gfSyNfxxXLp24kA3uG1ucsy",
  "key42": "51jVYu8YvPvTsXwfhUrC2MWfZDGAbQYNt3BLCwTGkbqGU5ewDEnaUnc3fZ8cnNrvamxgaSBTGhNNWmhUaqAWeJSE",
  "key43": "5odaTVAT4qfJJoVc4nkGb8rQu55qyht5AoN93bRqK9YbZE8RRCJ3P4KvinkdYGDwtdu8sXfykEUq6zSRT6wiB55T",
  "key44": "2Xjm6YEQiiYLRQjrbjcTkvNwcv8ZAMUUzHqWmXbaRaD98UgxvK6svjRqdKGYmnKh5LL2jzxeEBsq4sTuFzwAbeWu",
  "key45": "4S71yLeGQmewKNsDaukcT45rd2hZkCcNumdDcTgnzf19Y9fBFiQC3i8sCLnbYQbKps4qWjrh5XVjzpAcsVvQsPKe",
  "key46": "3PPUma1PtpZkYT1hohzW6AuX7MjoN5MvKpCVfQR2qa1Ry96m8NeEM9FsjMfCeA7MkihqcX8RTWh1KPSYFyWt6enR",
  "key47": "2WjcG3a1L5SsNyFdKyS7FDRuf4ZkJBv5ngLZbZHaEw8M7MP9x6Y4RibnSSjuygvrv3LnvUXisHKArZxQxkbabqRs",
  "key48": "67PqmEY5296D7mWuVrvQS5HAaHMZXUiHAmyKAEjZxb3eFj2kPpt6JfStGUm9UjjBrSA22VarAgdf8age7aa7UmC2",
  "key49": "2G6bJj3HABipsi9uLZk73TkSKU1w52yvSfTwUNHfBEGccsz43v9bGaGRyKtxz6SRCqwY4jxxPcKiznyEa2jcz7Pe"
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
