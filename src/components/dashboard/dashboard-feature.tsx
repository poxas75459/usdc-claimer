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
    "4oGATfY4Wzfy8kK777w6R3dJYRrDaoSCw7FRbsE7chUtR4h6ZKx4PhFNT3ebB2v3Fv25cNdHMBjTqTMsPdVewQ6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UEgX8tg8wCezaP2zdJrh8JDmJLgUtFjbb23hnPpeoJyLyT9AqYVu4UFJuFqEUnFCVhtLj7qdSH93arkRvHq9gfu",
  "key1": "C1yz9V1aMAc2RwdBCUfEoBXScRhwZ2KpApmw9sWNZMKWVoQTSw1TE4oWuQx7fVYLNCQFqDUgH8CaktrfSgp3QZL",
  "key2": "2XxuDr5JTnqbVfKh3HT9rZ8fZ3PUM3fud1TPMyumjAQxKVrjpNP6sDHoTm1LU7aDuq2HVxTg7icyrLbSkgkD1reo",
  "key3": "25GhaPdgKv1WFkktUp6xHv6xsQ5RgcDq36iLVd2cw8zELbt1LAyrmDdfDR2H7NNa23Uzs9NkEVroUzYegc6ShX1h",
  "key4": "XtFWTgwebJhN9Ju8DcDVUCo5G9xdTZkQzoUQGDj6WYoN4D9mSG8aaBEXDtQ9kngbonKUcEjiWCQZAeS3NwDcGam",
  "key5": "5dvyzkNdQFAv5yvComohf9hYrLH96WzggSk1sR1ciSJR74suC84oE3EfNqaqHK7ew3HJBBW4LeBNDBbcnTgrrj9j",
  "key6": "5Zc1mUdrGVRfjw3okVxWtGEVTTxuE4mngKD6MSXs4556tKjKTgPwiaBHZUA8giGrvoFgt3fa2nMZoxq8RxUracno",
  "key7": "nMZai3C3xapgqsWYrhMHuXXbdpoXQJ87N2EXM5EiENaHeZMAbgLCYB6xpnv1BBiPkvM2Bn93ww5A5kC2WBm3c9D",
  "key8": "frxkBvhtDDs3NsPWsZhnw9f7GaBQQJ3nG3445ZSHoJnS6znJTdXgJAzcuUCCphbPrGZjjAeYQEvMYbWP8iws86G",
  "key9": "5rDa3h8rW8A5XQ1eRrTCNFotC472X1DvAqJUHft2oYf1cVKEwAJt7PGh37UUkwS682DDvpHrpVs9naPnYUKfDDkM",
  "key10": "3B9KhuptMVEyLJF4TisDggRoSthPmcbR4hhCVQhobhHo23ZEK4hZfnG4nbBZ3XKugDExKevVF79GQG1k7J2XMtS7",
  "key11": "267FhzAvMrfqDxpf2RLf2RB5dLhugXtbb6kUbuihgvXinxtABppkZVnH51kCsoMm6byAm373keDFqX2bGndH3fGs",
  "key12": "4RA3je4ZfnBKfQe1rK8gGmYz2enfsD3Z9x8FNofo1jEnZW7TaraMuzotN1qCLfDAyQHhEcYhAVdabYg9wFejDFoF",
  "key13": "3sr5B1njdsghKSqyU2SyA98aa19oN5xgUCfMMNPGFaJQ7XKJ8ZeteYeRnbe8DSmVY5gc9cAFUBEHhhEVGTLcK8Rc",
  "key14": "fjUdsVHehxWsxipVcc6iK1hXaDD3WdSiaVy5AqBC92pWt7dby2dGNYQbSbVYMiWMbiNpK6ezWRrTma1WbJZRQmK",
  "key15": "2SBd1brZuJzFz9wr3175RGqGuzWzMMvoCeMCZkweYnjc7wcLY2YTBhhbzKtWmPm5nbyZhwqK1s6jALvcnoKhWTia",
  "key16": "245XvNcquTFZaithLUYJaJWppWoYnmUhzZ7x4Xq32CKKCw49DXeShTkm2RnC5KuvMjmkcUSCzJH8ujgDqYK4skNu",
  "key17": "52Fh6R9epb49VTtdDrM3MBxjbVpCTZoAL5q6tjFc2uM3BVEDx5yx1CEHurfHg8S8GC6VX7hyYvvcTbWPo5DXdUSL",
  "key18": "4TYKUGt4nebp18taMZN4i6GCwJworedPaXhAMq7HM5gF6JczXVRV8CnTJDiJXyht8ayfGfUdvJtPZZZW3qdeaqPV",
  "key19": "4u3AsErxkGPEbTsaiUvcG3PitJqkkBHS85zEqyFCFWYhGtiqcocMe5qfmzUAV9kVrjE83ByotVzpiNnTmv6kYXGv",
  "key20": "4Nxi8wy8jSkvDVzkYDjAZGZxhnfCqWLxaqAQ2HLd5jj53vnA5oCSRs9t7XY2dYb5HEaH6EJX1S2eoUEJeqSY5Wev",
  "key21": "3qtVEGEyPBHQkucD6rHZJtqUkxp6imeWJpTdWhrDptzRGZ4SL2aXRVcfR6NSpTe5CYErmYwcL2NfostGDWCFve9q",
  "key22": "4QRDxiUx87c2GuZ8CWvXQVtwcAGuLJG44gx8BkaibFZA8FJfd2YGxsUUVx6hhwwfFJw2CVBXSLYGR42jab5QBt6E",
  "key23": "2vj8LFMWZiRhowUPm8iVEMmDadjSujCi5uLct9NAhYXi9XYUT8eiBPkA8VX34v8cYGKWTmeEfF9VunpcTwTaUqTz",
  "key24": "5L6zHToLNihjfourVt4B3jpoR1oQi1R5ppcoRnt2yLqLoM1qNnizTTRhXz2FoVqAE8qWTmx1BMy9LjPYwt7UQLHP",
  "key25": "FYzPfA4Zd8GNKNdyPzak81VFNcuCtvunAqPq3oBdg4HRZmT4sV5JESoFuY5FkTQzprqvewZc59h96T7ExY8yKuM",
  "key26": "637RTDxs489noaM2EM5TQDX7gM7S9hMZ6tygrunkrVbRWW1Ldn8QZvvEdrX2xjgYvq3g4jU988XfsvTYGvbvpTBT",
  "key27": "3UkzvvqfqWctEFs8m5yh91pvhz6vrnDbCurCFGfk538XQ62PDnDGNNEB5YeJVHh85iFX5MPPkyWqBe6aD7BJrdc8",
  "key28": "3Rkwm17eRP1D5iGz8iQCu6cMt6A7EndBRXvG6XobcwBGstpa9upvAiBmL8Nzx9DbwwKAoPXKCiezKpYnEds3dQs2",
  "key29": "4cS5AMYXKDLAVnoKBhPXWY6xBidZNUDoSjdnit9XmDy6p1GR1VAFSJBZyGaaUyaYW3c8wZAiKJ4GFq7M87TwNXeJ",
  "key30": "2VHhQmRbU7d11T2QH3A3cLL1zY3qH7VSvGE4K3X5hE7mLTQ8L3RVhtCTxmzGKE4Y85poqbgc1D2fTMbDnpuh5o6h",
  "key31": "649sv5NhP6sEdaFLDF1AugPNvSxYX8ezaNecM5xuiDjquigKPJJ2bsGsdtRw89XTh7dJZA7vE1cuVLKK3aeACnme",
  "key32": "ofpHN78KDtM2y5YgTuwbziQm48z7f2o2L2rfBNycNJYvbVDtENatG9nCJQbWohUVsmgbvrhYwhRmAxfbhVnRyMK",
  "key33": "5vrbysbdbvxMhJAGMSNqMmBRcdKn4uK2UrxTKRMZ1JhpeYqBD66ksuJpm6JoVGZocYZomZRUGnWLbFAcDX8XzjA5",
  "key34": "2oUJdwmj46C54yyh9mFWSd9iV2hgs5awo9fSLRg76UisWwUnbKaJm3MiATRd48TsnsmXQVBh4Yc4sTLwbKDUJz9Z",
  "key35": "4TnZJzxjmMemtuTsgfhyWXfzCkBgkhweJU2T7eEMSMPhTgtKoLsxoJAgDxU5tmhZxS2TGTpaMLoeThrh2a88ujRM",
  "key36": "4peFS1otjbGeaGtVeaUQTyejhwqtDrFZfhiRmT1ecZ9t48136JjffshkBsUS3LbA19q3EtvqGfWBihYW7sFNFVDb",
  "key37": "2KqUahcJsvRG9iFXENTq9JEgDhCF3CYWHgPD3c3sPqFs3GWk7yDG14zV4Dw3ESkwwhh3TAVSCpoXjLrwo9iP712N",
  "key38": "3dvJZCedSaGdcCpxmJ7r9azBdKnASuPVTw2G8DZfbMpxctJp2BA6z98QgTD9wYyBbEaJuTM7RcudrosDJRZYiGhM",
  "key39": "2992abWmEe2T4CMSJ7sFTWVGjNFrNEwpyoYfxsGxPNgQZqrz5tBWu5X6Yjtr5pcsT43u12AeAibSL61nA2Ggfu4C",
  "key40": "4ScRZ33VKTExWMFCMAuFBdJkGa5Wb3vB3mRv82QM9PrW9zmQJAfag62aLti1KEGgYih4RmAYwR8hWvtcSNNTeYwn",
  "key41": "QQV9GyZS8PyXw4FspDaKhLGcLZK2ZMgmT29DpwbBeZuLoTaP2HqPJJimfswV2YSfzsgPJYyZwvaqFW7ZYRZaXze",
  "key42": "4bxAvb7Mmkr7qb6dwvyq26eaqywH6VLnesg7uYQSpoKBc5W4xzHMUHrmmS5LZuhpvJVyaZjG6EpMH1ehdTsLEuTs"
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
