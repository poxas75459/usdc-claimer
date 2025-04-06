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
    "26q6FYts9rfHFeQq1zGrY6K82r7yfWccN7iNHqHEJ5Ro3d9hCcN4x3UWdGNtZzwFiVQudc4DHnaD3EH29gEizu7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cZMd73Akbrec2Jhz4hAZFF9MVGYZJD6Z3AsePwPY7dk13Rri5RzGGUWBLZYsR3Xewf937da94TeYmrTA4ZVNaJd",
  "key1": "5HnTfbQtUCxgqTXxgSr6webmStNDLufNaHPA3GgcW71fvJtvL6pzXbnuEjtMNuNdtRmVUFaeeeXqGNJTZhRA7tNf",
  "key2": "fds1GfFcLAiZaiUWfCa9Yk5cXuUW9UENUSUvztTbkGSN5RytEfQ9Hd1o6dEFncqvrNTfNFi9sKRny5ZwWmyBxBi",
  "key3": "DxGV5CMnRyKKw8RK33hhArQ7L1ufcSh2vXDt1Dr4uk22vTDGF3X6bT6i3jzGZWH1QxvQpYc17d8B89yu2w4ywrg",
  "key4": "2VmihhYWZPcxVqboeT21G92QRU3Sm29i6NFrQ2qsQDJxRxP67dMifqhyDJtBWSVC7uaJ2cW4KytmFJ9teMggctTG",
  "key5": "4RwGYa9KPcb1gdWaJ33CYFRf5vt9JyNvpwE9R4si2YF9peJF7p7GXsu5RbWR6Woa2mufnRCmGsLURTG21BApg6Rt",
  "key6": "2m3dksGLs4fHjVAEgNJ3vBzePiaSxJPuSEgWiYGRkCegeApxEhMg14RF59FZnoArndWYnkJVpzE3gqwf3UouRCC6",
  "key7": "2pUrgkVCcVoR7zvFnBwWyCBS9wwvH3nPi1XQaVormMFKNnmeVWND8wNBnBmcvGqtCzKSipyDL2VGVxXFP8R7gxB",
  "key8": "wKR1DwzMzGj16B4xuwEYdwigLuvHVhsNFffwkJJWZwZ1BxLksshrsyJ14zNmyZRoLjrz2vksW8Djgz5UpFBvJ5W",
  "key9": "3GCDQAujHw7N2A8zsTaGaTX3goZB9o3AazHr9vghzavvzWdL2cThz5s8rsRRbByvPhfjrF9sLN2eHAfsTrrT4w6f",
  "key10": "4c7r4jaKoZLGp2edJTnqAAHnhTCgKJBNsAdD5bPWqFYZCMJnbaj2TY5j3PDhptFrzcjsRmUNGUGKxdEUx4eRqyRL",
  "key11": "3vXoCsUM984AHNwQqVLCsxqhPu9ytunZhgBz8KwLJyXoAG39HQNL1EkW1EpmRri33mp2W6Q8veVhbRhH5484pC9U",
  "key12": "3gXPJKLGrNJtPziaarp8TNJh539Nj4r1CfHBqi7kxKLefPQcViVcXPvyaEsi9C3TybZ19QuqtZHEy1cw2tWzuf9D",
  "key13": "b3RcEotVVvKHFSs8qvsoQw3dtzzN4ij6dKELDoHbahzXepJtDhoSwEnTTWPYGvxiqRozqrZTVFTADusFrjYpAdb",
  "key14": "4z5qnPosv1tGfdfG48pi3cmxQWjb2857kRoBJd4jjcafqyvvF3xoaDK2PbuvFe9rR7u9cKn5TR5tv2MUWkub2Rs5",
  "key15": "3Gm5bSYtzquDed4sQwQiVXX5rjvgC78QTCNdfSbKiK3fEwWz18bXat8wWFj7fyKn9mmR5Bp1mJa1UKJujDfiiqLE",
  "key16": "4YF5pSFsMWQTW2KZHTVExuVgVqpm2E5JeoKdaD4RqMv4atnmrhorBk5WdUBN5NrrawyppQdVZm9fxozKBD6Q8WxA",
  "key17": "4NJsUiozmh2jbh4jbNH3rtspvrrwJHbYDkk6Jc1CmHFaqe8VnMte9UGjTYaJSNKcwGZeyH1BPU9Un8NLgKqMQrsH",
  "key18": "2jrfswqW3c1in5uPL36P4g8bcqtRP363h1Ait1MjJi6rmqFg7dYrAi4NuUGjE6sYEsjtqyUr3tNP24U1NWbsFsRn",
  "key19": "2CuuAL9n9LthcgpK5fTwkeDBfs2WCd9SvrmKqaCoN6VmSgsrzEdLqzRDShyoHTtN4bxTi4JcAv9qSizLbr3Na87d",
  "key20": "38WprPAnYUKMuhKDH5vJn1bFLA2bJVryfFf2KQiizkaLR5rqaW4WGFAa5EvrxbtnKobQp2JENFFTSvQM5VcjYins",
  "key21": "2DfiqADYwVj276rRomuP4r7xQhmKnh7uwn9cLTDQCJQ4ByyCUkUWBhupXdnvRpmbJX1BzTAfPyT18YUxYpfgbK8w",
  "key22": "3RuXV6qWzGDRo7j6B4JGjySvpEVEA3n6vFfPrawznZ2A4NXro5ywMuiEZCA9QsojdcK5UJbjt2u4r8HkxbUjPBfG",
  "key23": "5YHodfvFe4XAPyftuRQM1UH3NmJCj4i66oNTf4enVqsftxw8E1q4CNc7CNVtCfDPefLeqf8YtWWcwpcwGp7L1UHA",
  "key24": "u9vdFBMXr347aAeTvgJw17sC3cH6vYuqwnZvueLmefYgXSKGgwad5HqQi6fY76NtswGWB2RyRHqw4KZDHTMJG7T",
  "key25": "4tNVDjhNRQUchXw6i3jnQuj7hAtmTbMnzFgiB4TsrtKNZACRBgDgaxJi9MTQ3nJ9oCFFgTg5H7stQ6nhy4ws9qKA",
  "key26": "5EJUA8BMwcfbELWJ3YbfaKRF82MjVCqyCgB5w5dsRafydej21Zf7QSdmTWCouR94YdQCFHuucW8krUyNYVVsrj5S",
  "key27": "2m2S2ep6QZrWVBpvHEUpRzkTsEPeRs7MtHgfZzfJGC6xU2Kng8Qrr7iaSvcENtFHjpsf4wV1t6fZHnsHc4ezdVB7",
  "key28": "5qtotRTAUpRmKKNUyJ72qfGKmrBwai5HLxRYm94FMZxc9sy5acgqZkbvZpGkXZedC1W9GB8zTqYTGeoiAG7rvuCe",
  "key29": "3SftXYorZCv4kfG8RP7wB8C8AsbhFnVXy7zm312yWdY8hfPerBWJuMLU5sx6b5Qe6XDCxy5hDwpKNhAkcaLaTALy",
  "key30": "RXzsZguhDvC94K7YbPtfUwBUUfM9tnZoHm6xUUHDyg1gHs5nKZu1Yg3fJreR2PxXyJNtbzBustTzw6S45cKgiBu",
  "key31": "5HWXR1eZDgR96wgiGFsyNsDBjbw4Uh9AJLcYMvJuJhxPoRDuBM7UmkMPZG9kjJi4fD3G4EMsCBsLafZgaTBCRkE8",
  "key32": "4AAs9NLK5e5iNR5v1nbXFXKkncA2NBL7c4CeWym1PddnuF5ryBdgaziZUUQmHhBAjagNNisb8eAQVUfG1UELgboc",
  "key33": "JYUnCzXKZuPzCAJJpicuvZ7uvrFXrvWZTPu5LKQp8vAAFKRtKHFZzRepe4FSPPPPFqKhXF2XwQAdWd4L5JTdKPg",
  "key34": "CXESCAERkfgARC6HVHeAxjJJwDiQd9c8LeVDQZaFce4R4unsZvi1jxtWm8t52bBenxobZCuGDzPBYHpdmCyxJ1J",
  "key35": "jDmiVBLTgkQojsuUbvvNvgPKByRjW6Em2EkEjTqtZm8oAA8Zo3ezK35FPKC6ak7U2zmU4Bw9umkPo4cwqHq7vaU"
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
