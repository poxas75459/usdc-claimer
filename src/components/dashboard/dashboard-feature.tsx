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
    "2sz5VBdkMzGk8r4HBHE1LiDeQPtscdt1ywU8iqCjbinMYMUuLHk5R9k7CX8z41upHBv2auZLQeh3wrdwWo4Y3Z9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Y7SM3ABSJ2tcBrRw6Tin3CyUqmfCUmAh6udNZmUcGBzygfPeFbFf3XNBb5BjFBe5dYB8DuohpBTCPcFVfsyqcv",
  "key1": "ByafdaTDF1h7mq3bygvc1S1gv3w692cR7Cbm6MVdXKv5AePFKjhzMyCKiSi2ANDyPHZNQwPfWuJpzoqipeEcgxQ",
  "key2": "3ScyA2Ghv5toJVFzPQBuoYopYGaK6GbkAcKFt8JkikefVtXtHfkPAsYjiMCXQr1K1EUdfbKNmp4b9KXNVJ9tyxfz",
  "key3": "4oCTVPG4swpfoHLBShn2Y5o9hSBDsp5YswNVd6N8qmKWBxeK8YMjeVYag8h1CoTP7M5oydSaeXRy211HvcpbQQUc",
  "key4": "31JJxCBEpngMPjWvCrJ9tWP4W7kJsW3RHL6S21ommNT4qndqhbSaAsGeNRCNNWxLz1ZLAupDwFmA9xiGfF6eRNdT",
  "key5": "5oNzWUS8tKzk9mQDBjQfGXJYMxmBxxinkkFv22B39vsxbBc3abQrBWgx5r9zS8FjrrXitAU47eLXS7gDrSmjyRTX",
  "key6": "5dN4wipHNs4vpHgqFH33gMoc98tANbsRaiLKnLJFAkB7Y7UFWj7JdJ4wfrQMKiPjZU82XJ42gWMioAgxZfLTZBDE",
  "key7": "4H1ur9feLQVEYnYradndqUNim8w2CwP5DhvGJvnuQDUe1KuNRJ6bUu46PHftjLk4WJgJHAxjXmP1L4pCdtrBiZXb",
  "key8": "45ajwAYWkY9ZuUjbPCZNgwK6akaLxW5KaNXga6EtGR9PZpYB2b9NfhpnhDDFgfTTHwo4D1HYNmwGjsjAeFiDbFUS",
  "key9": "2BoUhAv5SXZBhSD8LD3VXKxACnXwG1XYMmQ7Jr4bTmQ84AhRKuUMMagpFrMBgsVvkBCECyyRUVrctbaPoQVnLXZc",
  "key10": "67KopVQo4aD1sm3U4776nLGrYhzYDj4Ja7SmkU5LDBmgyzJYxke3jz1i7Rhsxotsct6iNhYpckMMEyQPwAKTYNir",
  "key11": "4FQMR3LL3AKf2vYrz7wNXJLZWSnoc8gNkfxaFoFhkQX1hXyJGBDkP5M93M9z58eMSvPgdudJddqoogerZs7d6cKk",
  "key12": "3VH4Exqg9nZ2Bdx2dLefuVXRAE4hT6WYzdrYs1bpKtyQMLXXrMuCcgJm2cCHyPoFLSDqMnyhmczJ5op5LVrix4Qb",
  "key13": "3WXALAKANKKoiJLd1vTjUwyL5nXL37AfJVPhoTqzhw9Tgkk5fJU71u6jKWFf5eXNxvB8MQUnkuPCU7qHqXZ1knSm",
  "key14": "3iWWadtd9vzNBXbS415ZAkATCb3Y3iaX4wFUUZ4uZ9S5mwLKCcYg5XLAtcHrcuwLngBrataFE45xvEWtyHmDTp86",
  "key15": "3rxiH5KSah2jppPDLdV1mKPnoGFnDm63jHuBpnuQAuUcJmBCxyVJ4c7YN6VzTewMb7LyfdA24ETTcoy4tPiVsMMU",
  "key16": "3bbhukPQWqbGZyoXC5a1e1nv9zap8PRJbxQFKed1VF1pBerczCvKtoqLHxSYwQiZoRcNtkfDfMrgThyu26zKoKp7",
  "key17": "3LuYYLWGjC8CaJGedsLuuhkLgpy6Dapn65sToh6YG7ogioBwhDA5HiRZm4nXfsrUy7nLUYjWyXLMwRYibYHX68We",
  "key18": "DH8pcd1w7KWK1xtqSx5SPYY3DzBwtukVnterfF3DgQ18K3BhESdStxXwWSoEeRUbwA1ru2tFxAB9s3Cc92Wpm8n",
  "key19": "4gNzKCy9WQgKWnm1GTn7YKswNXB2fSTRyMqE9DgiyjFRU6HnWVrPFnk1nYAKdnun5zdf6iy9SFeiMPezANqnqv5j",
  "key20": "Hv4uGyqSsrzKq4os34BTLgpAwJzug7hi1bKkwdGsuj15kwT71nEVw6DfX2R3UsT17Cd561BU24PMEWosm4YXQqW",
  "key21": "3VP2mE9aJXeeMpDumxnSMw7PTYY97AgBNzWsW8vWrVrzaxT4PpTsfhjMfbFWZBzakL3irwVCYPJB33ZioPHPLgR2",
  "key22": "5ffciV7SSTgtKdu4ot2h5xMLjjHXFVtwm3UromeShYjSXugvo2WmeMXcwag6fJjE5w8Cjs1ewgiHpPNqvQUXYxhV",
  "key23": "3yrxH4yVgwCZk4qgMD4SdAXA9SVHt1QSjS6qdMFdG5b3Mm9crBJ51swdTBVyjfpoJ954dKN4YMVHcEK4Pd9MvG2E",
  "key24": "4erqHFL1cyfrnjTY2Q3te3GQp6RoJesiU9jDy166UMV1EpGRtDiBFVJtMgL4PQwH5vd8ye7PfqFfqQMdsBB2LFY",
  "key25": "3q3shEL5TmoEiCmVzbYuyAcou6K5VQ7MUCvBLR2ABFsX63wqRq1vQNJoX4VgHiQtSDnKB7EauZ365BswWp4ctb7G",
  "key26": "36HpHrJxGemmuwfDAbZPKx8opoDMo3jye8uHn8BXSmoBM88QvGdAKTFQL3sag9CzGnjBqJrnUL4YN6afqw5qMovd",
  "key27": "52vvmc3ovJaihsPStXjo1j1J62EqN5ixVB4xyaBqPxou9aeVD418en3zcYoPD3LTjAKfkSNAPPdpNErZcMZLQW2Y",
  "key28": "5DJDLCTfnYxkFYHoCGaYyWiRypRqtwGWyR1VbuLRUJs63euXV6YQABpYXZLPijQ5TEUaV2fmK6GVwxLYk3nzPZdD",
  "key29": "44uYxko3EPicyVwTMwJrdP1tiR94CdMU8bki4iK1RCvMUyuC6N9N2YrbMe9AF1ZuK6LKi3R12tvnY1BhiKJVgmP3",
  "key30": "62oSzKCcyCf1WpMrkUWL2jJL4rG6vbrwkx7fmyNQjhiTu6zuhPdJ9qdkRvqgXHuKoHs2vZ2DLVAfwXJpvwsPYQMZ",
  "key31": "5pNx6WESLhoSTVWZoz2w1oakXP7rVeePQA4hTbiRFzDZAPsPj5WSX7syWtJAS11PSzAC74VoLcQWHGGPDfU7mqM8",
  "key32": "gF7NWSeGdpZFdGxy1pKd2kNjT62BLcQaQq3pQ12KBeGi33gqNMLws5LV3XyUyUQis4TWvJaLPNJXgVeg1ZP63uL",
  "key33": "2Bg31Dbxy7MnCKPgafUWNLfuBddwnnGtSmpMxZWZu8JaMn2JqCc5m2MuHsZQrJGJMTtPFcdFuq77ryYHErFXFY9o",
  "key34": "SKHEAHtRmuAm9zuS2kwR7g5LoetVVzKX6HsKHTPrXeAkYdGJDVj3CuCG5kb4HgeXKGWqjndWYhoX5hPi8CnJzwS",
  "key35": "5Xyx6PBVhjUDE93wce9eHkHArM73FifTL4Xoxznite6Hmm8noa5PBrCfZ1gH7SVQ27GP2gLVTAdfcR2dro898gnA",
  "key36": "5Dq5Znn2iVPcuy2s4esk6Gybi849nXWpiYNkuxDWPZSGEZvfQQtfGtTjWN5Q2vwSWCQRYdNLvuyjief1VNh5YTqr",
  "key37": "4gwf3osxrEaRPA6TJ9RfZXEMHyv1fvW777WGGiR21oUFtT7NaHsNmVLsvhhDFy42youXqGYmJjUjiHhtkGuHrR4t",
  "key38": "4EtwhwALyWPE9uxAqA7DwPYjCDDzvvftLhSNfmKhrz41vFRwUptpqCr7VfufGuwAKvyW4PxPhSM8z3mJmuarz5mQ",
  "key39": "KZnhMaBifMZKcd1FztKrwkiHZAB8u7xA1KkPy57t7Nfdjd7LRbZmmQXXLGmojbJ8U1G7MzHQkYE1Q1xoCD8Eo4C",
  "key40": "2WHj2fvE67muB1igV64RS6NE49pYfEJdPqgH2E1LyRq1r1GkrUPSYz1kPDrYzSCw3QvK1BtM3EJGMNVRU8wdVhoQ"
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
