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
    "c5SVPG2xERMCDQ9PJR5iyrMm1PYLPq81aeZeQcUfBrWnda3hJYvgZGj7E38KnodaeM9yU6m7uV2unHntwvk1Eij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DPeGNh5AdQq9w2wKEHQTZ4ZENWjREe6SUA4woWVANMdtkvncjDy8jtta1xmDJExEPydkD8conrwc92YZEa8Dhem",
  "key1": "P1tcrVechRruuDBRirvFfJXTjNsqxqAjV8erVXJ3xAcm2Yi1mD9r4rDbEcyvPxfN752S8w2uvZ3KXg2F6z4nyxE",
  "key2": "2zm9pSGB7BVCftiEZFbRxifEUQzeNwaCDaXNuy1yoLhcGgTDhReYRD1rEiptCPUXoRPa3bFoSz8xF68HdGdRjdb7",
  "key3": "537gGyEFTUnEz7r83VKMNgNonujGnBqPeSVGYoNEV6vki1BWxY6w517eaixsxVgW47X6SrWQBicsEyoEh1hJx6WA",
  "key4": "3dWabKLNFBVHFhcPWzPi3Q1YKFU1FnNcc2LZyR3sTH4ZAibYCuaDwwPrjYyiYBU8X6mQnDqYfmZTP8RzxKT59QJo",
  "key5": "5Ui8NJoEV7LTbYebKF1pamZyou81QNe1efJJ23U9boNMxixu2AkyneKVdugmLN395wm7SnM5dtzitWcSY6aMdS8S",
  "key6": "Wir6n3qqttfbaZy3uaJjJ57v6QkQZhJvoCfirGczuAU7aft6g7iD55PL6CgYwc7XBDu24opD46LnugiNsfyPXnQ",
  "key7": "45GNMEgsvmMDn5LP3aQj2HC93LrQZDvvWC246EGDXurNJaRrzWoNnH4jUvgrwGAaVysqqPQJKHvWr4RmD4yg8gvb",
  "key8": "FEcLtypA4zfZ14EXYk3cCwEhpSf3v1eu7YtEXpJtTrSAsDMwzr5WfhQg11BynGHw8EsRKoaHJGQGDdP71WvhHqZ",
  "key9": "3eBf36YAmErYL6SF4cWPBGFMTBZX7EL4DUVHJquUVhh3hewmGgR1JPjkW5rLfSLTw4bBx6WAZMchasegS5o2deWx",
  "key10": "2HxBJy94vraCfG1iR1iwwaZJjrnqoDANRCir6BTk3eaSibX5hdKgKhh8ET5dpP7rLE1LtuzbS32Tu41t59tqMPxS",
  "key11": "2izCyn5c99koA92Ntjdpqirx8nnKuJ2XAQMUdB1cXZ2xwQdN5bBwrwUB4h7Dux25aG5fiSns3m2xgQidwJDnD5As",
  "key12": "256BuKqvLwCmE9X1BQyBHTiwpU4BpcU2W6zwhR8LyBdyxdUh8prjcxskRwmdhTL3cAEn43X96e7yciyfWqTGyzf1",
  "key13": "4SHxs9Mvg8TtXrSEMJRg5SJmCTrNZsYn3vNhsBajcHCgC3n1f1D8X2KnkL1oo43erYBJzcfdKaygTtUNzyk5Pbis",
  "key14": "5sDgiXK2jeSiPPMJknQ989hpBfnSE1crtUo94NMeQ5V6RjRcnQjbV9wui57jihXgiP8kqQ4kKJweRsHh3Zmyqn7G",
  "key15": "48G1wWv4p45nYhqq3nwRFJ9pK2LecttknsvjjJ6rFFnDUdCML7pzjSALmAvZjygyBrwtTwSAUp2uR4CsVttYTgxA",
  "key16": "58yjSN4KE1AEVKKbdN82s1tMfCsjwudCaFNrPdJqaG9hTcB7PhiZdxF3v6KWWe7Gsxxy5DBNqQqWrf9h87KCi7aQ",
  "key17": "3VZ98EiuzBMRzJRscHQMvrTrtK3qPtgBNknHrToY7n42Uhphoho2YG4aFDQ7mb2NN8pZdC6CkNYSXYXdSm5oVQAw",
  "key18": "ujv7H2xxxVT6ykjGZ4utAie1S1SP8MkBuYMVWqVgzJ3p2iajiFUfMsTSUx4SMGofx8skoijXkACFWazfdExF9B5",
  "key19": "5xL6g2s1EnvYNcRpnfbfwygBS35XGcJ7L2JtcvBCsAMGBJW1QxvLkwQ3vY8H8Un2oEVwNiwA1MDDNxo1ZgYwhdun",
  "key20": "5CpQPqF5Cjxsz1ybQ1aVbnXNbynuFvRX7NdCtyAs5B7ukAtKByDaHU9hu6FJYZ56ddUicFAsvJtm75uSwgmuUVek",
  "key21": "4dBWGpsAzd5sevogDKPsaWAyhKutUb2a2TPckpFHs8bRscPgB67mn3Rf2Akk8kw2psZdRyFpEfm7nVWRxatLRfVm",
  "key22": "4nruwtFkDBAPmBNoMffd4gGu9Cbx7AJFn68N3tpviAQJG4ahpD4kHzgGsCdmQWkNYgrUxQsTn2pdNqNS2r2dCJ2d",
  "key23": "3F1AscM3T62fWV6eer9WggB9AqgC6HfFXfE1cYzzS8nVvBijn1uvGdpsMrskespMfxh1XUXwBx8A5dmJdYFXyiUb",
  "key24": "4oz21NxXnJ2hg895obKL9pktVD3FaoTC4ZrAg28uSKQH9CaBjbeFKc2KWEs6mkqaTQF3LsULN1WgLrUp7k1JBiTk",
  "key25": "3V1aDejVPGnPudiPPvZ7t63YXZHsmCcezPsDjQPrPzMATsyNRqTCJFzBVP2ps9MyE9yh9oNSYa67yiQGjNEfYcFV",
  "key26": "abunKYKxwBWsGsZ3FZqutpUDBgRvoPLx1U4VdjunuQezLnZoEQH6RbuqPYVYLqAhTA9wEEmgCNPvxCCfs7Ca8f1",
  "key27": "4cvFgZqAUBX7RiDTw32xVczw3yASL2HTFYYiFSJg33ikM4FxkDKDPdKGTPasvveLipSspKKoGQZThTvPJqnrTZ9m",
  "key28": "2rUYv9C2dfbeBoweR9TK6uhsrgYjma9J2s7SZTe4sd6c79qzYfog746vg8NgTqEi6XT8QGaMxRL5ELRrN3F6yd5r",
  "key29": "3Fi2jbCynBrvDytJkedWPZAbzAxYPaFGZcstzvRjMnpGcbTTtMBXEQh1YHYAFdiKMVuNe77kgsKtx3Q4AYFrTuWx",
  "key30": "2E1w48oLJb6xiQvkXdqp8Cm8oNKwCpQjGzSHnnsMgKqJ17u1gQ4UV9yWupiu9APc1J9Cw8Hf28vhxz6A89WFG1SH",
  "key31": "54zcwsEP4JtC2QtvdGrk4M1yAhPMSekcxK7u8KMJ84pA2Q7HDUWcmNuv962ULe7XoxkDAP6ouc82CphzW569fPsP",
  "key32": "5Ubr8djpYsv8HjaqkZxLSztdvVgRX2rQrgm6PU9C33YJNZJJTJrY4v1yN6zaubobakkMjFrpdin2fyQxeoR9Lrk2",
  "key33": "2g8JeF5Vgm7NXAib45e3Y1dU8bsKdAR449hpvyNoKY7ryGx4YGUNCnq51Tu2hdUncK3mz6vY3Q2oLUyxNRwsf7x2",
  "key34": "51PyW4Dg9rCNHHBsUFyBBFXgdHaCGhbcUR5pqhic1esUjhwYadWYzY66RmxnNEdVzkAtAkYt314kYmAbuG9VdJyr",
  "key35": "3S7Cx5jQPaLFJKUmkMnVx4mZKQqWXKVMcHNzsAy6XUWnNEJsiFnkFHCqwASkVbQGb2KSFcHqH9i2YHYeDZmzAaHZ",
  "key36": "2oneCJzWWQuP7entJNMoBDvVBRYHFxNbX5Hyc5By3Nyp1BvTzy3DSi3F8HQM2sxbbkus7XpLNkKEWRbmusEFB4PV",
  "key37": "L24ThS8xiBRUXjE1kfoa7P1pjjJK2e1EoswieYVqgaA71TWy77Y4QvvKLsk7SyHo2Qrt6dHFn5nC72pMsS1HTLH",
  "key38": "LE4bkGTg4g6beYcxqku3Pp3sLFmRzgzNRynv9m6YHG1x3Zx2yM6x3hQgcH8gwkE58X1eXDDsAMNRkLq1Wyt8UrT"
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
