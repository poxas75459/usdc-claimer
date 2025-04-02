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
    "uo1o4prsgAi2wUovvRvxHVNwTZY3txvMFQsMnptJGnixmC42AhGhTj3mj3L9u6e9uUV1gDJkCwR7tNBSnExjqUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "395JhuakooRXetoYZPsAEaKXG1orwToS4E4FAjyqenDBrRP4D3x4JTUV3XhJsE4ivsieohiYt5CeH3HA6vi94NDH",
  "key1": "4jo2xqfK9LYrYdFJcqrGbGYuHyidbZs53K2mu3JDNfVh88PwXhvMH1pvgWNzBt4CMakYyBwzXxvD17S4WirDVst2",
  "key2": "21eS4mgtLfi2yKa4ZdduP83Jv1E2BapQGitRhv1WP34HJ1nxwhZeFHxrswpsBWFXariPrrM7Ep6h5B3vJarpuhqU",
  "key3": "cqnNY8JReogtp7ev2CQND2FDeYGqtyV61Em8hFo7L4XvfesWo6ZKzMXV1XuKddDscsG8Vh364UeYcHnA2fw8xvJ",
  "key4": "ZPt1NmGuEYNNF2SuYM4ptwXbTncgt8GNBnZxP7SzYVbHVLGzpJQYWWfG6stEoNxgGU3RKXqDN1s21BCky3kP9Ho",
  "key5": "43it3u1iqHan5SixpzhxfZXZxsXR4SKeJmGAif9nPiWdWCmsPzgZtWXUPFCxasJcLLqTRpAyhUXGyDRR9q1bV4F2",
  "key6": "2rpK5YJgJY8zwet2DZ8k6c56Ug1AQLmwNZMUneTwsWw2cmMhdqMN2nhEr8VATUKhdvWohN2wkQ16TtpsBkpqGcYE",
  "key7": "5cEh4df2FJqsJQZKGNntHxRcikbmuCtkpyYP7NKkfb4ZBG86wKNYLLTBVPvBwKDsbYtvPzRaLFPzfxng5BwMNXHQ",
  "key8": "3Pivb2Rd55mwf32YpMuxs57XD4KMn77TddEJm5aHbKuY6NSbYnjrYWfNdjReY6UNHGfH22KExQSD2X2KLFZJHDWs",
  "key9": "6PXL8MEHgnyLdzppPKqFUm85c8eKxo6zUn8i2ADqToLJKhWM8WxMCYbzRCgQwpDm4hFD7qPcXZifRts8WWijThZ",
  "key10": "HAqDaK7WkLXEjjU7Kj93oaVJ38LiPYGd4YDgFERe2S2LQEJJ639qTbc8fTokt3sPZPB6CZyYBv2VdgVxuZXhcys",
  "key11": "YFbK46agk7qYzYmtAH6fVe76xZS4mHQJWZTrXZLiLToGG8cHJiqMswkX4MWaer2LGUSzKMdfPasHwZNgK62KW6R",
  "key12": "221UQjR45GgjvfchMoC3QX1cpg7VDd5BsUAMD6U3Y2JAYaBLr4H7JeYYiC4WdpkQcVcngydRYyLvbDAJQCdg7oju",
  "key13": "483yyzcdQattREmLWEyoWxGpgqAEEdYcNNboPoe1fG8q8hfz5T8fcpWKvCqdygjWaMmcRJ9FmM2FRS6SJc1WkQP3",
  "key14": "55fg47N6u2SsuzuDxcNFoZYnKMggY18gYgiDjUsJFWW44A4zVULqK8vqMgXCSqLyihdEvyCE5NeSA911KHscRcZP",
  "key15": "2tvf32WYcpLAV9Q4LCc5ZdgFdtYEWdDiWne4JM5xn69HxxCwxweWkfpYMFG1CB89iuTtL7PcXJLXLedsrL2gBhTF",
  "key16": "5GGETx8bEG5Hw8UmuJeBV4437G3eFof3Z96orNSa2oet2Vk4wNJWikETMWLZ5G1VtBJ7WeXC5LV3hvJM2c7nLJ3A",
  "key17": "GVVzZRtAkh25cwRiSTFmjLnL5CkcPHpfzTDDxfmVmwMDG4bpiFFQj47RmSauipzPpuYFd8XXdmJMQbaTFmU1suW",
  "key18": "3NpFiukTxpaX5MQj6JUNzxypRgRY3d3xPJyswponsPX6pYBLF86M7Wg3jysBKTxv75UqHbpD7A4pRGEY5k9V5Ey3",
  "key19": "5CHxk8rWdztPpbh2BxYrgA4jzxpjZfYt74QxC5qSFxr5FDHaaF2MewP6NA23CpjzoiqQVBqGS9FPE73MorP4RfZp",
  "key20": "4hpE6co852kSQ3vwHgZbwj9GssFsrqv5airGX3KKirP7weiusLQCiSNGfHEbYp68Mh8yxCs19TWa7nqkUKwxALyP",
  "key21": "5WnsBB8m532hj5fywymES64ZMaWgjd4x8ReNc4zC8S6feafk9MhNH5DMBCtLAh6PpkSQ318DLFwuzzZsPRrZ3xQF",
  "key22": "34spqNDEBj8CLLdpLawcU1TKNUge45YxGhLv9gg2Tvz9HnvfN9vpT9apzokjdxuXvQt8JdUQMDGDxb9g4jbPak3z",
  "key23": "86g25kwnAr3KRh4MgNWXNYFupVutBDWy8zp44n4rYcmmsmpXyqQuUkV7VfoxfpttN5UPc6W2tHxMoeCpAFyMWVS",
  "key24": "3LDe2mtJ77GEAasAog8VnzMWHyCMELLyhyYBgFzWuFTSHrYVb5kSrWbgUVNUDJmt7PyPApgnfjDNTzJGVHZyZ6fM",
  "key25": "3s5pFocA3Hwprfr6pUHekyHEtBAufsDZ7poTRrkXLoLYisdA1h7WiynJxKgmjVTX9JMx8xoDddV2WQqt1mhpMe25",
  "key26": "HqaHzztvwxYxz9qQZEBA5PV2Gjuau25dEdeDQYFqVoWRj9XDM9Y51BPiUCKF142Z77Txat99NCncV6xG9tAcXRn",
  "key27": "51EWoBs255iqHkJoh8XDDrb32QB8rstCqDXKhM3nT8JmTXudc5sx82Q1D34nyXdPV94KpzjE5Pxw3bTa8zRWccbU",
  "key28": "65PaoEGUthEdiaVQKcybrYaCbDoxtNmCYFGMw3AGrUngB2CZkqoSGHYg2bdt1YQ1DpfuioWHoYatyHoQ13kwSuk5",
  "key29": "3QKxwrSPLTcaFvDRnuiNCx8abQxuLrJj3YEyTvKfVqgMFEmc8JHC8xzyZrDhetv64wvjRuawGEuB54h9SkqPFPaT",
  "key30": "4NrHTeE6sfs6Y6AC5EBRwvjvKKVhCwdnoYNbusXzhbth56ygFN67u31fPsqcG6fSaofKV5MceVAvM5RdhvMD9F3G",
  "key31": "wYJtAhf2DUimSoeMo4Gdm7iQpBqbTzePqqVokSgwVoxK2EekQZUyDpTbekU1LkiFXQsxExycrmCFFFuYYhs6d5C",
  "key32": "3BoXXrhpQ4guvioN4v6EDm2rsfm3NoBWgRJg1bDpgVc56UaL9JwLpsHxjVwBsSQjGg91LtMpuNCstwkNo3mq2XEr",
  "key33": "3wsjungiUPrNjkY5FqPrQ7YwfRaJB4H1esjAtCXcia9bdDimfvJ7DxGwTxWeWmchUMHpiJucEtgwpkcPib2ha2VS",
  "key34": "5iWVT6QGVNTNHLdCJPoGNjrAhtZxeKydCJA46RZCC42vG93U67Vp83oyd62f6bD1R3sxaJbuNnJ7cpb1emKCw2c4",
  "key35": "39LQ46H3or4SFiGnpF6tjsdTJokyoVFPx5KNWG34TyurWM5nx1QCEWSvG8PEhuUmLqu7oC7RoBSXzBtu6EL7VBTE",
  "key36": "4fvUBMPhrGQ831RMoYHr137sqeRf9i2tbDd8ZY4Ru1tDwb9qsmoDwuXbGT9sngUhaW951G1NsGuYnZA6Hpb7KyL4",
  "key37": "2jCebAp935y824X75tHgCYNHF3bbdc3NJ54ZEyb33BPmvuPPtxeRLTuw2jA5Md4ki3AzxyPMehRyoNwFBKZGeSNd",
  "key38": "vLxztDGTFobPbj4gjJJ22CiUcTkRsEGAgdHJDW7jMgKwX9r68iB6VucKvvKTedtoAPeMyhQg1Vv1BFz9ZmsZUZs",
  "key39": "3JdQLCSjafSDxicyRCFRHPkvR6T2CwYRm4P8b5ieR1nZggP7821AZnqYXbjqaUgCTHqvcpQPQ3gjcQNLyFV5kAiP",
  "key40": "2u5jBziBK6f8Wm8r7oYH9jxVe4YFpX2sicYzCZ8E6QaPoYeXaNQxK8k31Yud1yNJDFCjGy9uFtMqAFwCXX3RagcW",
  "key41": "4SSZWUQc82e1AMYw9Sp2SZNU3ca4NDfFNxVgvMES2vhdjKQtmfn3jQgYymieam5A2u5UipD1CgikPQayaCNy4HgL",
  "key42": "5vrHCEWbHcQeYTo12jNRJMCfUoMoCDCvASbEVVxWtCoLDsef7DtBieohP9gGPVxrzDnwXcFSCExk31cSquB5cSr4"
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
