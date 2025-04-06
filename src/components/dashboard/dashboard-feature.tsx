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
    "q2A7SFPAXFuGwkTgXr21aif5ffWX48dkNga8KZ4rb8XeNMxe9PNHsQufDMLUZpDzjrBdE3noKUeVuqm2FfraMxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "364qzx3j6FNPtzQbYrNjCWP2xkuwKKwwKqv7ytvmwVJiPNZ35TsWu9AV9uzGLaUhaBJmmntyMYGzozbvUMUyfWY7",
  "key1": "33g79EA2Wuu8gdPU6uYSyNATDJSkbhSdarVG6pnCk9QwcjWANgr8d1YZVbN2XJvfvZ7Tfgs5ki8pDsURumLhnGau",
  "key2": "2hzrRMcm8vnUtyRw7DXZCKx7vpozz8QTiLyGE3NkNBhR7cv3RbqaTPVTBEC5QwizwqL68iHkzm2ejiWJ5GiyxwWD",
  "key3": "2BKZK3BTT7n99z25GA8a9nYbeDUUsWmkN16VLj93G7hk3b8z77tRLNYNQQaKrdAUA8T7De8UtRkL227RBjArShyL",
  "key4": "3cKNA8SK56vLoWdvyNrDCpnLArErpz4vrXsccBQNmVL8aVrv47UxN9zpY2iubTmh8Ggmr5WyKRMbYE2mq8oneB5c",
  "key5": "X3Gmnae19XRYHKs8qrmabq16i4WDc3DtdM7wd9K3cFsgoA1QbdEsui387Z3GdnEWrMbuhT9DoceBSutpfBHY3gA",
  "key6": "3hhmXpiAC4Tep8azjDRdUwvkFQLZcQnYGA2NqdwwPFQKsseo1DZswrcFCjdqfcxxxWX7XRVAFYCbcjPSPCFsShSS",
  "key7": "Zwe7fthrj6kbjg6QLxz2MRNr1Srincx5qUsya9GZV2Jd1YiUmXwmsQrBdoAmX9yPZLYmY4LojVt4XGfT9aNW5Sb",
  "key8": "4smqZ6y6BvRcRWNrcJ2YRgmrki6wHXeuf9x7Ejvq7ybEexpPLjDzEZDMZauuP75GLAar6Wvjgx9eYjgBYTNsURvk",
  "key9": "2pGVitZgziiHEJsfPyJPqauc6PNA7HyqPByGdjdTyMu4N91xmNSiqH67u2erRFv9jyDSAA9h4Ts8TjCiko1f7TQD",
  "key10": "5wow6dsM63Xj6NY798XdAHV4Xys56dHrZp3XFTNJTUVLvGS3inaM1T8n7RVtjzGXbdEFTVGrV5at2PLb4xH36jhQ",
  "key11": "65aqfudF9Kx69NcbN7KmXaFBdfabLD2bmGC7LaQZyh4xjZ1pjxuCtdC4UhaVLZAcTjbtgYNWkKudSdmAHJscXPKW",
  "key12": "31tnLKvmBDsyhbyzQrs4zwgddXixkKDDJ6HbuerU44xBjVQNXDkYHTbZeVC9cHGjPLsV8gNR1c8zwQXGvRLmAQEF",
  "key13": "3QVuH2X5X2GuR78HT5jHAdxXnKd5ZBbxwvhtz9NyPhNcnuBehEqd7pUyXXcBvf5zQ7QGYNQddbWutoARaWj9Z9ZP",
  "key14": "WEwD7qRA5E4xHJEZFPmsM1RWgA5jcp84ULqze6te68ZArmxmNtnrLr5FSXKk8CMVg3PG4bRQTyBbrVLkY2E76gd",
  "key15": "5Tkh51U33FtE61vVXnzqVSrna3efvFFmFbdtzPzBUpUAp69rMJYULUVSrWrShXDriqBUh7N5XBUa3SSw4DaCMsmR",
  "key16": "4gjV1iuwdzE7dReS8jmqs2w4b1JEm8XTZX5KWNztUacqgF753mbWQvjSc4VibweVt65UMfCcpp4DWC6x1mt72wxX",
  "key17": "2NgCv2LT2UDpFrhAkycZF7LEqrXhtNdonxgYQCxCoxUMbqrNLmHy1278csAEr8FU3HLNLz9cWuAC7i1oeXdLLXLf",
  "key18": "3ffumrbUdjjaavRpUwchyYFmMFiWf4Js5B2fS2jcnVbr5d6JRC8NA8sZ34RHjKEfktL5StxeLPSgvtuHinhG2CVY",
  "key19": "HhTg32ghVqaCqmH8NoywY8bpNs8dDyCC8YeanGojEtkKnptNYTBd5FDprCf65sdvVr3PxYXY4iYhGKfhhScAmGc",
  "key20": "5J3B5bi8cdhpTJyNQYqhLjGQHGdTG75yVD78wRwzkafVsEBqeAp5oz8e2EgpPfdSxZHzjyo1XtEkToi5oyvogMhz",
  "key21": "4xvTiC7APyA4RnWhP5MKnwCnV5ZxXiTzjzMCHi1DVVDo6yBnTZ4kwL6Vu5PQfhDGiQVuhAkCASJJgva4SHTCL3DC",
  "key22": "qYTzWgu24ejK1bhdebuwF3juZ2W7XJrxttEqQkbgR2UsgV7rFyPyjYNKZqHNbzmc1KY8cQCtbCsrNwgBJLmoCEm",
  "key23": "cjeYiYtgRb9JURmyLu75Ui13pbxRgm6RDCAh6ZhmXgE4PJQixiXwJy6Bp2ymzfH31N2GGv7K4ejs8WT8AngKdtG",
  "key24": "5tvcwcbqNPGhSW5ZCUtc3ZevCKdPEe4h6puJTvGTWgxAcikzuyanrsuqv9NJQnAv3z9j5wixgqJwcWnq7ohYa2hY",
  "key25": "WEqhkzVRsZVvqnCRn7nD1jyhfJtacPtjcrN98HFVnDtPXuEW37FgLAdEGojksSiJr21HVmb93DzQA5xF42ZoSFX",
  "key26": "4g3GKMRx11BVPw4KjopPWbiaT1zZekPYYiSKBqZ7SFZhCdir4a1vUx5TxgXgkeMT29CUQVfMsRhDSRAhBveDywoD",
  "key27": "KQ2eU5GdEAfUM5PQWJ79CCWcr6EpmBscKAJu4yWL8gtFurdY33twTCyeKQK1NJT13KyRCSj9de3c8enbRnYWN7f",
  "key28": "5Fh11budHXLNrE5tUrmQveNvxcRgkwTLDH81ZHatPSAwJX6VZtyDmhaRRMsJ4hpCJYoUpiDXkQRthMSy4UNsm5H2",
  "key29": "2qs6xoVbda5ubjWWZNYLLCj9c214dJdvrRXATwey337YVRUXeCRatGY9SioYijHXKpfxZaTcosTBDJUeTFEMVrns",
  "key30": "5ZbLfQ4oYgXjXF1fcLR2GwbXB5NMQueAFouDN48QdsbrYrJvDRMvguXignLyG9aBUSvrf5yAvg7xpKtXE3CKWPNF",
  "key31": "FLH8pzYm94a4y6xuq7eoCbjs13Yz1Wqe5HB3h7B8eZ6CS8UJqkrkV7eQdxMvR9jgCbKrihdwvVwiQ2PiZYUTEwN",
  "key32": "4U5A3epjEvjLK27zKrFhnMULGvL6mSEV6C8nXDs9vnuALJHqusTAY3HvBQ7rnrsadE3AkuuBAwEwYQybmdxswbVt",
  "key33": "3D3UaWLCLEosUjFgWRe4r8WLJFcFdWf5GvX71WeKruxYjitjyQAs34AsWtNNDHWLJZuyfrdfBjF2bpzQwTsXoqCC",
  "key34": "5eg5LoiKKo6VNBskb5Lp5A8PWmzmiUoF1acQGMgnukoqwZiFbQyFBdxNTGj8RW1pv8L9iRU1gzoUF6cf1EuPsNer",
  "key35": "2pKt929mM991K5juH7oMsFS5yTGBARjZWdKhQ413rFKSDqp5nqHtvRNxxQ43hhmS2KvVe5ZfLjGzUNLUvbuNexb7",
  "key36": "5Zms1dPxbr3r6qRL5F9Z3MdqsmK1jrk2QswWyGswWHdN7zfHJAaGDNXp2RBKyWgnHAXKEGfcqxzcWLYjVxf99PG7",
  "key37": "BCdZBcwxb8YCAaMYQiadoW3ecc3s3NH6YTwiqPN4EPRcTqmRPD2ac6R9EmWGZmrVryi3H6DgfCYQBeptvKCRh9p",
  "key38": "2BDtYdaM1zvNVYKxBNjk6zQ3TmAqeApSUjGXz2YhyFk41yfuCxd6DLEoDFzEEgsqdLd3cDz6rMFKxWP81rnxC3Uh",
  "key39": "hj6o8mzuqp4xXayzWtow3Txr9cQxgjrJfRr5q9H2CPcFwJ9jSVhTYAhXKrHDJEsb5W26UyJW8wqH7U23QcaEDy1",
  "key40": "5VjD7DviLxzBbcoZRhtRV91Xixz6AXGm3Wco8NmMAES5uciNig1UGCr5NuDgAZuSUX969tmjHShGXu5tMVFtJ8Hb",
  "key41": "3Q5Fvf2Xr2A3qLUcTUMrV9uJ1G7hYj6kGQjtBHxvYKD3XUoyGBbpXQUd3eDgee8mHGTev59JvSzcbGXgQWzTmWA8"
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
