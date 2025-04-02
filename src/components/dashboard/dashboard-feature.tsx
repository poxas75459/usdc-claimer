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
    "31BtTcHFmFzJdsZTLFgKp1T5fFm6bExBoHc9MHUjrZjCH7rMoFBUDPyu7pQG7ELqTeQfDt7M5uj1WuoPLHAyYZjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49qq8CDPXo3Xqk1kXvsnNviJbhdp1inmHuMSydryzW7DarQNB2hBCPfnd9RfjrF9mXM9Q6fiH9ksPP1nGniiUZku",
  "key1": "rYuEmXvZv3bAtn9EaC69sMRb3bEiCyUdAjZPfPfjq6gZmg9zSsq1H1FQfiXBsjS5d1N1DFXCZZ6vJwzDucHdSLq",
  "key2": "2kpQgoTUpG49M2ASQxpzsr9buwnYtNK6Rvvmx5RaRyVgt6oGofRtpY26xGySzR8Q6PuW7kJMvfHLi74wUY1XaeqQ",
  "key3": "3wZNu4Yb7P55D8jHM4Sw4KBSEAgd8m6CMQKxud8RJqQsYKsgxQZMBYs6PM5QohGqGiGkuXNcZDGx91QMNCG3Jo4t",
  "key4": "224dPV6XnGyebnpdjfV71KtGLtmSkWpxBuKkaF5v9MQvRk2VAiewpB5FrExbNHC5t77mdQAs8Hac5oMd7dpVqbKj",
  "key5": "4LrUAHWATVwg2gmnXtBi6c8Kvm41MgVUb2ZDa94QjXJTYpZEWZ3Wf657mr4SwA9A8TvCfgfUqVbyHvLXWN848Jqx",
  "key6": "MNe9yfx8JkJiWFpGPReHwqnJPbDGZE3xngFdbLgGbFKFd4qQTMqoYJ6Czwictt9gECTPVYyMPL35vwRhtg1V6yK",
  "key7": "4C6wwUxKsKmCF2LU7WChsxoTVi3ULhqxcYFQuPsbxLUh8QbB1tfv13cbfgHAM3RB3AbBB3Nr2Qs5DhfMznRsyv4R",
  "key8": "4r7ECt4aJLgNAEs28WcVLFLyQjY2RccMPJLeVKgjpg16EwxYYESKkyVECLhp4FSARwFZv9HqmSqAGhQyXchCtEoP",
  "key9": "5Qk8yoR8J93QDuYbNRLVBNvBwV4gfhZ9G4nhKuPLy7KHQafbnpsWWcTZY8hPntitYpUut4sS2zpRsGdegh92keAQ",
  "key10": "3vqyV2nALZjoBZNbQitLbpvTHgQ8ngN8WuKkEG7PaQQ7Z9Dc5WXBvcj7NeEEojnqCFTK5QUsuHsAG318D7fp89u4",
  "key11": "4kkXfDwgMmxa17zUinA8oLtsLPvxjP8a9JJ3kGsU5eFKZgge3RqmkDJXQnhfFFfgKLJtxnE1fMKf2wayDEueLafN",
  "key12": "3UkEEZstuNHLqHjAGgG2mQeAbL7tC2KnjkM3ZoUobhtcqd5oWWrYzGyYvSRdtJekE4n9ZV7My9eDxiG7Peuydakc",
  "key13": "oJBLradotR5mRL4KiSiGRc7EyoxMtZUVL3nnrmKpfDu43VB9SenMfxqYYEUw4tNNwC3Ces7NTcgimuaUHE6iJby",
  "key14": "2zWzwJZyx4LTJ1DXdGik52uo7iTF7rFBHPdXKg6BqcWeqfd3cegKeMLE5phQbsQk1YDMRZi27obXFS6kQqjeVhAq",
  "key15": "tUN5W4rBycA2qtvoWrBiAyPrL3fNdAhEVrnNnhELVoez5waYjrv6543fGYD5hkycZAyWeg7XiNZJFNEJrDYK4Ft",
  "key16": "51cPjAHvFUonCMzmhbQLBKoK3nvk3XbHF8GHkNf15kBUZtTtdYmuzB8G3MSks5F5XJ67sB4CmpMTgqYsanHgTeKC",
  "key17": "2NHdbNiHa3VMMp4q58JCPs5HyLE98PJsnDDncLUhba5DBypXRVFjvCfwumcZ1hANn1Y4QQJDSv55Gap52Efiya1r",
  "key18": "4Xajp5bBA1BuHrfhKNNQoVxpmAtUY5HR77o8nkt3ucWf3STQWsLnxK3g4jtHmMPLNWhGBqNutesRHud2TkWnde3q",
  "key19": "2V6ay3EpK2WRYcy388HohrkzqkswdD2agR2Ls4QLdqs5ZzyDDJWz9Lig6iGZdGj1ccbp6HmGUAjJnZv6G6D6h3fw",
  "key20": "2B9SviVfgJyyNCmAMz1s3gBLKMEviPJEQARsuQikgK6Ps3qhCfS329PEovRZvxGXDacxyr9MvQ6nXR1xX3mno6hf",
  "key21": "2PGGpCfvXgoFvfmyECV3sdXrBDampbX6uhorQUSeaLxhGtcxTx2rBTsbbASKhwHgDW66Kek68sLfUsNbDiyVPkop",
  "key22": "48uzaECf8pi31YKkVfhW24C7DeuLsdVc7gcEa7r6TK6MHKVXwqwLFVRvmWBhm4nSMLQxK15ZC8UEmmyxUQJDsGZy",
  "key23": "5v5EoCFzGvq5ALbdVsnidjTygw37XaeqXuLR3zqTDUpeNoiBDouLtdgAwJQnsEif1fV3A9Dd2z5sdL2bhA2i8qY4",
  "key24": "5asTfX1AivBYnnohjE5b4VsLoUdSyJvbGj1LsFuymG7QGZB7DXGByaAmTUoVy1DtjoFuenTwhh944pNHv3xcS9hN",
  "key25": "5E7ACkm44vzVfBnABozreCbew696g9o8FHf6YigXqhPEhH647qPFcg8McQQBDuTtxK9gE4Bf6YxbANU8V7XExrey",
  "key26": "32hubjg7WUP4w8cWaSVjQS9GMKrVGNqZY75WuJ7Rc9ZiMHv6m9GrcHZiQUiJjGcmojAyLCe3GbyVC1nS1X4fPvzy",
  "key27": "5sUWVhTo6HK31vauaQK9gp3DikphQo2o7TFyXfsALf9VFB2Kt3QBUTbRzABWchwpyZFAGS5A8SMGrvySPmBu9HKp",
  "key28": "223Hc7orHWXsaZ4Jd1YonMCzd3EtiLEstGogVi5mw6PJ8pxZPn7nHyknwyKNMD8wTrc9vWM7JnGZEy2psXDzsWRp",
  "key29": "5o5VvzA4b3bfjwJaMJv3VfFkd4Zav34a445PPSGnYWatqPihaT6NCGD9xZPdFBs7CKirB1PJZJVgUc3jzon7P4JZ",
  "key30": "2crRdt9BoNCe5pfwWCjBQTW7bhxPrTEfgdVGRSiNcM6p9S7MV63n2gq2HPDUGQ48c8VPykVZgqDBw1wiETEcFDuV",
  "key31": "23b79XGFYd7LYyCM1WgZu6WVsQCUqkDgu297BeeQmLmMoEcNkMZs64RpnamvkjaspHCq8BDCGfno71RFrcb62VTt",
  "key32": "zdEHKYeNYjR6Zgjew3NUW3sGEKiucGQrRBJyjeRERwi8929vbLQYCpFLG9oquYVo7fFVUKx4zzKpj6kofErtgcE",
  "key33": "2YGNZk97YkXaGZd4BFiVhvagxsy2AUwvQ1DA3HDhxo4GTZ5hAsg9xvKRgiraRWvtma3CDiZ37HvELrv3vuMpkGmk",
  "key34": "XNZMajYvVigy7p9ZPegaCrxGoxH9h2K5gt6NpGVCY1UN5W67g9KBt2DkiWZBZLm48d2arYg8ihP7g47eD4cDTQC",
  "key35": "rz9HgiEkBHLWGP3TLw4w15FoMVfktRZ7sM2sXXwzm7FvbF3cfyrDCL4GbVD6NaCfWTdvb4Xe2C58bmtBULUW8UB",
  "key36": "KJcQ3nJMJzrCfLKRn1kRx7uD1kZpfBfDsCKAzyQRTryLqG36yTb7PK9oxAyMk9NQnXpLoFFXxpUt8zpDBePgzz3",
  "key37": "2GQaZEhWU1sHgqttbVRqmAiqFMmnpASAp8HGWv3UkwTqGvw4NmQnxN8L62F5BvuoQanTLiMiLiaww2wafdpQShBG",
  "key38": "2yaQAfjtrC8aoc2Ww8TgmgAefM1hEi5tSDxnEFmFnwUg5ua7DdrkekMifXazNiU9bB4CTPyjjPoNKJ7oeggsYCQY",
  "key39": "2BVZs9wV6DTfhdopeqri9f3FHLJsJhnn99bjyrUso38ENxZaUtzp23tyHUtLRUh7pqtxhrEac1bpDvdiyC3KwKeJ",
  "key40": "65DzQTRYKuLKzT4wZonPV1JQ9YKE3GXqD6ZkCotz9AhnCKsNQh6Mof8MKmRNF6u1QeFDcb7p4s4G4dSv3XGA3Mdx",
  "key41": "2AfhUEmJxYQnf4m64k9Q5weW2v1jACMGKYxxFPnv1d1k6j5E5Rpsbi3rsATgf1rgTQdtW7i4yrDbbg28aH6XThTm",
  "key42": "35sHHK5SEruEBSMjw4nM9wmUEqQKFrSfWZLFkMqbE8nNRrBQ1VypLDv4ye1aDi3Q46vhVfBcLsMqKN2URrnSiM6S",
  "key43": "4mbdFo3zLwqkwgjAoyYQbhXrRf7NskeyzVemARgwwzMuCwHeysAcNknZdUHRAMKbETihSBbVbjC8Ny7SKJbQTsGK",
  "key44": "YX8eFQ1FjHcucEaC8UxZMhumA35TNqqiCLKVDUFnu7aDNaXainXDF97aVXjdEkvxtaRRpWKJXHBcrvkbWhKUCaP",
  "key45": "5NHuoJNS3HXwAd1rg44CRLsQ4iezd719eA74FFzPxLK2ieb7u3vpZsCJX3SysVwez4omBt5pa7gzbCJsFTXLzx9c",
  "key46": "4xggbN4mQruFpT4e2H6RKfa96zoYKd2LQN1uMaRrTJaoU8tPaGpxRCiXF1reCuwnxtswZocBhv3G76bjimbd6ucc",
  "key47": "3zYq98SrcgtNzdbubov9wqmjfcHQgxqfjRYEixgCCQd8rkENbTdbDSdrHmBreBnJpvMH5eDExaZsbgeTCtGKNxvG",
  "key48": "5hLY6XBLdoSbBonMdDrzwhyUbn9H3csMotwNwrqY6QexrAqPX4VAXyrFB2hbsbi85fnF4axeE8vQmpfZSxY9Bcfn",
  "key49": "29nkkwYZys3sFwYAFCigYFYj4XWxxzJBzLGwcfV3fHPrmoZ6jkoCPcBP5LU1fGFHHx7Mb1wF88JqoN9yxsQ3Z1g7"
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
