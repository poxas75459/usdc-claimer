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
    "C4GnCeaGn68Kff5YUCVNefVXP3vgshKJMUBZEMBPq9uvKz6CJ7Ga3VjsE58ZM2WAGJjouzUDBAj2JGQQ6McaqUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cU7254po8uth14rsonGbGMQD478heuRyP4xKKK8Lr1Z421w3JfKn1kex1zTicqmSBGEvyd7kq9fN3uXMnfDcekg",
  "key1": "5ba7pdcUrF6Dt48rDHeS5jgennZVSkhp3o5A1nfHhY8Fv3PwcNkWRVndtJQvgum72rGYzujRFqhbU7Naqjck2Tyx",
  "key2": "62XhcwgNNXrXu5yikdbhzBkwBArbcWNJwXA2B8L7HTYtvbqPTMo1rHBaMqx9MMoArdidH4718qgNuLcBQaQYCU2t",
  "key3": "4CoTnPM2WgtBDsX9y4bYTRSZ7zZ9WATR5ZgVSTAmLmae4sFpcKF6j8w2EEV7FxSU3mrbdnGmYVJ6M9mpmNQX2ex2",
  "key4": "58NjNd3dToTXaw2u6daWqwVv4TR2ky4NaSQK4io1C6iXrfd3yXhPA6MMHceYUyQrmodD1hj2iMPL3qYFjk6hMZUM",
  "key5": "4bLMBenafbTrcSD4vm5dCVgv3NNuRy7inYAPC8AVcriYew8ReRbQ5roYqAqkguLvjmZUR4c2Ag34KkS7n45WNzhp",
  "key6": "5xtqaeQASayADm45aVZVtXYDSfeWLMowH8LjjT2Ghi5AzPrZrKeBkS2NtPFTyDXwhUpeMmQxEWwDoekjthj2aBGr",
  "key7": "2F4pYAx7sjGsFW9QppZDCKdVHpHxEgnEwexp19MQq56CbjWNHAeSAoD8MqrLC52KZj1T45ur43WqzP69ndqxSLDy",
  "key8": "xuJLvG7dBSxACzn1ais8uokqMnWHp7L8DLjBe1qhXbKwnCapSiFhBHnHoyJVyGrL9Y7RapKJ93JTxeREFDRmZNv",
  "key9": "4YMzN6au9ruJ3S6XcfgDm9YuogYL1sqxwuDsimq9CkWcFjHLA96bFVs6Ef1tKNhZqhUqnm7KTLtEgY1Gkh3ZdFwu",
  "key10": "5RTaUpWEcVamnNkpu3xfWsuCdrFp6LS4HRr9t2NMpmtmNkn6vH16c7kvLeCejbiajZDraF56Y6rj3hbnj77qapdM",
  "key11": "5V98ZsXxRLgW29hAuTYXjf7iecpcciczaQtha7DKbi9Gxuy9iLvsotqCg2D95aYaLgAZedQxknj4c6yVDRc8mqz4",
  "key12": "3MonvvBUTszgJ64WLdpEdant4kjGR7vrirDoz4yYzaMgc9mBd9LDrtFubpRidtAf4VRuHTwiCJ9wXz2CBn6gLfM6",
  "key13": "2eakzxB5PyBRtyDu8xNQ9UuYD8tvy3GfaH9LsLhHrvjNbQEy7VhkzdBKSH3kjawdLAZwpgaf9wFicDod2XtPnrG5",
  "key14": "sFGaQjyvM7RxZyU4TEpRMAPvBS8kWm6w3c4YtdXWFyMnqnqXnKXZyD1burwAnqdw4trWmhGyNcqDvBT6phwSDH2",
  "key15": "5tpMPxHEe494M6iM86NjzBvPkRMz3qy8tHxoPkB4QwCtdGAeHGA337jbFLfXiCJvRZ9zsb2ZgAwc1mqaF92LMzhz",
  "key16": "5ihJg4etHPjJBsCFHPd7VJqgxGT6Yvx6cASzWYjCVpkpx4dP89pMP7jMxZXJmMsb8zVm8zUZK3rGcEDA22WGJTqP",
  "key17": "dX9gch6Jjzf6ipyq7qLrKnL6HEoF2SdUpYBYssyWwTz5SJwzn2iegFRwfJDA6WB972Up6T42V3wbeUDFLcVw7c2",
  "key18": "4jjSP6UKXV5oET6v4YRYrHZ8NMiCr1Ciho5WQp8JRD3tgrhsGL1X38ZbZhgJX1Bu2Zh3Bhd2D7yWJ2fo2wWUm3or",
  "key19": "5zzG2yYaHRTQzyg51cGH1wNrNtrwRBmQgzK919LAp9Xcuxq2GYzqy39imDtwzmkNo259P2b6mUeNaY6EbNxRzvyC",
  "key20": "61Zi91jKc6ZeDanqw7RDDwTcRkGxNhWBVXzmPdhitfK1bium9Qsyv8kQ7Y7Bm8L1E5qG4c4bryH5gk3CGSPjzdXu",
  "key21": "3oqdtUUHA8k1FqGgRJvCFV6fWBJ6StbuzSFKZMKZi3YFSpNS2mULf5mwBsUUMZ5PimNXi7rQ7mchHbE8LoTXPRLo",
  "key22": "3fgjiY5szae922cX8e4WShAcjqSKh5oqRCx2MunhHRHwKPgZS69z4ijcMsZTGgsN4thtvekYHXPHB6NNbeDzA7y1",
  "key23": "3vjm3EQ8g5jgJpD1F9ZFw2KDDz2P4xA5ztP2yi2abDb6mcKV5y7YKcgYUj1QY5e2rYg7Kfo6Cb3HHv9C5C5BAedt",
  "key24": "4FbjhtXUVA9Ri5n7ft8KZn2ieJ3LNGQQJKGXfjFd6AMm1pJnW2Z9UbpQ87x5KCUPczWwSCpdoeFhyppD7xWCD27E",
  "key25": "375M2aSMMF8eS15hcs9pLqRBZGBVTjXy3XeC2NUtKpLrgTd399NPQ2u8EtqqnotNV2wu8WrqVZb4uUgpqFheB19t",
  "key26": "znasRG4TzHwDurfGQMEc45xhxc4dXSx2gZhHUA1hjHT13iNfbD2wFRmvCZxwNok63Rqb3vcPDnoGjvAX6dcTSUo",
  "key27": "5VPxC3hN38dRq9j6eKFSq9yyD8pesUJPj9rkT5JiyHU5ferKxvNfKxtuyxwMZRGjF7tWUF17bh3vbcdsSHaF2ji1",
  "key28": "LQazTFaNKt84sF3VKAAvFVx6pGhKg9uXVzLatDndwaoTk3nQSvSeJV5ViJd1HLGMYUwpQFxyPTTNHwf4Q45XV5S",
  "key29": "2cGscp5uTw41Dp78JyUmMzmE1VWM1cz7xDVb3pEZ2XeFiMEWwcg95cbzJBk5hVpPiS7dZs1sn7ezab5894tp9ZMr",
  "key30": "4YZLBCJFCumzLrN3BHj5ds7eoRLSZfeiBLx4JkrjKAysDLkJqr5P2kRAbMaK277DxKkJFHeB9fBDzFNTUKKeyabU",
  "key31": "2VGKWvmquMzC9BTE8qQMTkGLkCpNC3LRXexuGBFB7hD6sADZwbUXwm3Qwvcdx6PdaWxcKt2c1qAHWCJnFXeZpVZz",
  "key32": "Kid13rVV3twzpJuSY6V43dPJLxoKFRmksEbT5Px49pAUNJnve2CErc27NcPHvP4WvLdkcGkNcs4K83zaN9URqTp",
  "key33": "LNW2rwCnQuU8fHxHgFC8CbhtePaFyt8oKDcvXtHGfPkMM6YArbxc7BWLkELRFvLqska79ZRupC3yTZ5KCkvkHRd",
  "key34": "5oC4mFYZgMVYy14Ft6QF3ibxembrHKxZn9LXvAkjj1gbqVMunwWfBQNqSov5gbpp39tePiSP8B5nmfD9XYQXfVaf",
  "key35": "5mrLUtx28V8bCE5N1tuS7jkxLD7HkvhdRhwcoqo2LdZN1dXfUATmJuXkpiEWjPB4MdN2QkX4NMDvrCPVPCAsZtso",
  "key36": "2vRDef7kJUFHgaDfbsVyw5SbVhsTaKdhdDLv2cb29ipZzedGjfdSxASto7i8Zi5yQBXAEvXLghr1PyBaY7ZS4RQB"
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
