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
    "3Ha6bLy9GF2Y4ujSn3DQVbihsPpN6rUhvzMSG1pDxjekvsLSDRcwdXwJ21QNMjRaiDYqzkKPuk1v4tBXMGV4nMwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32U4j8kXaZfsgkWr27yEkQuQJpVhLgVK1AjYkd4jNT38kvKqdvMQmVnsnMwoYECTGB52nhXhKR9Y5T8ijvqkh4vE",
  "key1": "Q5tT6uuj4sFBXUtySC1dSuGL3j8oBh5fVqKkaawUT7tSVvi9BxXAJ8zYpoKu2dnLcbzW5HopJgFo1GKHWkzSpUb",
  "key2": "5AgqsDJaENKX5YNQ2JpPTd3QCsyZMh7CTE9nAWuCrgAhCzyjMumDcTanw2WzpPCj3ZyQoGoAkHU6YSE4bDYn67fW",
  "key3": "HtB4E2XQqsY1JonJMJ3Zp3Uuz5NZ8VnuA5yoy5S73ugSVfuTmQ7iWWrm8oYgx1vHpK2DDJ4C51K5S1f16c8sGQe",
  "key4": "yJDwYLU4rmQVdWjbxqWQjKxdu16vH8SWncqCekNp3N7qi4WQpX7VSrysw4LhZe61BsiEE6ibfXNiVGNHr9D95sD",
  "key5": "32uo7C6J9VXpDt2yvFAGe92Tz8HrVJ7cxNaydoKKbDTKi53hpddcqhHmDjtNuMajRAQ6VUWeVsbAyKBY6j1kwHWw",
  "key6": "5YEvoEb32H8rLXnYgHD6J64gYszipjrLQHSUXdgohbSbA461WstjqLF9E3kHfjf73J6yHrkD5yLGdxSoMNc3ae3h",
  "key7": "58PoiHuYQrTj3bRqAcHki3ak7SFcXkZiDRnGwcMip6B8VZBGGAuxZMEXp2tYDADZMEuUtotDRQ5mriW2D7H8URSf",
  "key8": "2gRbaWhq4EXqKyjt7n39yZVpQ7P4yKYDDU6fVzKMnKgetgyuLTAPBrwFgnUWq1dHPRT2eSvTWUN94gm2p1se79gT",
  "key9": "3dNLRxWRBbsu9hCZkLzc4RWFMq9tim5CFcsaoaXKc5pomrybGY6LrUqwXz9aS8QPpzbXFZWVdSFwAnkJLF4M9rEg",
  "key10": "r5xFvMoVRDTxSMFT8XedFx2gi6Vq45dNDkZiwTPYaaieXWjPTGvzAQGUoYxFedxSeToFRvQLjwWfst9HeMZiEPb",
  "key11": "9vmLHmfDEPuMNjd3QoHzTwNccM7ADKXJA7XuS2aKz4MFuhjudrZW25fCoJwayNRKW45ZkiEzYpmwKhGQczHtAMZ",
  "key12": "3h1g3UGBqsWF2HMFH2pNH4iHVePqAiTRD2YfLFCqZ34PHFT5RcMU5TnH36Tr2i7ry9k7pXuoxrQWG2FGm1dyw6H3",
  "key13": "26HX518cPB7LR4aCieAGUFVNJiPdtRvum1yH2VRqsp26qb6UDGGHqWyM8q1nQwLgW5VPuknkFwiJ54taSX3hKdMK",
  "key14": "aLAC3tqzrWXpWdXLYtjh5grB4hCoJb4ioG5gpPi5Gby6Kod8BmsyZ2R1ESCEWzS96vCv8MaHdhEWZEdKpYsovc9",
  "key15": "4c7cZMwhFQr2DgJwPLy2CwXtQTeoEuz8FHnjfxDpTQmqQYHPV2PucTnXSsSabP22aizBxqJykMtgfn1k7Kcc1Adk",
  "key16": "3AyYob3ZrWpAJFTE7GNrZ7uVXyvr8cpBdtZwdh4unQdkQAB9PQhw6nC95vdVVq8Lpwmz7eMzNtmyHtDHxLQC3nA8",
  "key17": "4apE2Tk1aABBfVWaegEfiCPFiPtoJE9EDQU9evWvUd9BwLR5Ae7hoR2HsnjFhtp4u4djxYQHGihskZpTYV3buA4o",
  "key18": "5KFoHcLKXuriiTPFcGYGkzr2rN84HjxwVdKFHj22AK37ZyjPTrmTXUdsBnkbpVzYrppby2PC5ydotkqtjbtkg4Gw",
  "key19": "4TeeDtgJL4Gz3wb2RRsS8TVJsg84uZRrXM3qHPAuifaeQK6NyXYm5ECTyaS2Pfwrt3miPnogBGzYds6qgU2zrFtL",
  "key20": "53mPUYP8Ur1LwPrfEkgR35HQ64bUgj6aEofVrca4gTx8qqjtYhhseA6MtAh14mh8zAnpjAojZNpb6fFUyH6JvUD1",
  "key21": "2hZg28FkPfzUdVV8Q2k6S5G1DP6PmUKMvo12Q41f3UHyBAQVBU8e3dXZroM2eZ2HWMwRGCMsozKikQASE2Lqcs3w",
  "key22": "3H1b8vmnQFSxqpfhCsrsHVpDcwfJ1b4RdRkxqsukVfqWFnCaGEmQJC7xgcjuJzaAQbCDnmhgS95SramBqH9LPQMr",
  "key23": "2FYENzPxGiAiRQJngobw6z7sU59egcsDyYwHbzi5v1X4Erfw4y1dfjVrhHdRdDy6biphywcjuVkuVkWGYyBgZCZA",
  "key24": "2jFmWZaxcfA4m6uSy9YAEeKshs3P1XH54HoUvpkAqGJqDXQtTeMzGamTWZkxEVCtuJxC8ENNiJd9PiT2dfqLzaQw",
  "key25": "yVRnjoE5zvUTdeXXBCZz3mknUZDYrRxX115UpiMiWoL5WV1yYvXuonb8ktZxFLynbiV79Ra8TjdF4LYTXY4FjKS",
  "key26": "3JeQ55PwUfEuoouYtD5GVVoCHkEbA9ivuTsE5Q6et8BPBPV4VDf74YZ1SEZzmdAJnnWJTDB7KYsG7Q5gR5E4dHr6",
  "key27": "5YWpRYQtawY2t23zYucqnBQfk3BnY7Sy88TGoJ4gnPCnyWPx6NTdLjWh3RFySsLmoVeTJt62LEAPrY42atPzprby",
  "key28": "NExqATgM9ryGiLEKUWHM6jpeNX2haLp4DJHwsGRFzTRniBN7MpKVtS9FmHYV42QrLPcsuqNr3PWyCL5bAz9Pq2V",
  "key29": "2Mm7xPJFUtLz3j215dJkR9hwKBCHkHaX96pvzMhJg2mNbNzP62TegnPMSBmMHVki9d2SzJdZ8i7eHUYFK8QFNGga",
  "key30": "3vCysxbgNtFGcqieQGMnjpT8nhrdUxCdkGfySyPkQ6isgzeei7HSAbW8RRu3TUDqQocV6A83nj97AYxNhjQVTRRb",
  "key31": "2x8ze9FYK4Dox1ahy1s4P96WQSAkC1WCBMP5gyuiHTdaMQpz4TbtfD3gJoc1ajXoM23hYHWKzVQurfajdUVL4aE2",
  "key32": "3LAgR3u7nTvqragJ93btZtVJvPAFgDgmfpeHDZUinzY6KJq1KnaksQZy72U4ctUWLDKtqBF98Vj6zcabiQ7cdAFF",
  "key33": "2ibJig35xmpZeTK6R5jPMunqoQS3CqxX58GtDDHkt8XBazh2VygtofKuyDhK2EBzsKEXGKNsdoqeMn1QAdjTu8o6",
  "key34": "4sPDHRYQnRUoNpwNvmN27Tcg2LHsH8T7T7gM9Nkhx7SbmRv38LJsaiLkQjGBLcXbWdxUyjVzT7JiKWYBBzmLRvgp",
  "key35": "5AwiApFJZ18T3vkqkPhuecHXSveKa1una2bUTzT3g2kCDvqALkeH1715aZuwwu8LhSCJjSLvwj6rhFgmCazjLmpn",
  "key36": "Sk72iobzK25GMFfAqPDkZ7BSKocqxmYDvQKrfimBCoKJ7qbPS4mn19QBYV5PBezbHnjEywubQ5T48qHzJFSEgDE",
  "key37": "3voDPBxYFTUU1zLZJ9FoUv81uJ48wU2wHgD4xv4UqUwvDV9ssbnVa57rkQSKC7Mcc96KG6YX5LP9iT3s2Pij6kzd",
  "key38": "yNJ73f48d6YBYmAJJnp6kKgtUT9JsDg5E1DPuv2LicnSji1zaCrZBu3CEyh5Uej3rf6G15UmVY1eByYu76xVJuZ",
  "key39": "4XZyowZnHmkj4oYhS2V9VkNMzMrvTQWoFpY7vPrit3AHj9LtsrZFVXbJP8DP1w5HPrBwBBBodL7mFdUFnNin9W3S"
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
