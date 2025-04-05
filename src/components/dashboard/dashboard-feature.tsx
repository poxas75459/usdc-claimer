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
    "5gvb5v84bcrNZqPhrUWB9qTjyWrvXc48RHjkxSfGaVAQhrqu3x2W35k6c1WNqy9JuYHVV19d7Hv9qdeH9KwSHEwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z9HpMonaYWCZbsKgSWLmHhvUQEDT1GRoRaQDhNVB7vHgomszBCBGhaVQgRie6JmHyFDuS1YxahmnTTEvyV4K1P7",
  "key1": "Sf4fPsoikhF3nGW3tbcT1gUexfbHPYkGqFWHoU5fmXUPCpzJMropt8Sc5GLNSPDurMXDPb3yPrY19ghgaiAqjZ7",
  "key2": "3qsnpyMWJgdE7TtyZJRHxkE4D5KxS7XmgdkKgYf41jeLA9mCuNwqhU4wEAvtUVMV9tEdNug5A3gVf25WQ1GbQmc3",
  "key3": "3hkSs7CFVz4FNbEpW2CDgY8HM7pJiAgVHAmsaN3RZHQUf4Qw9zyrw69Pamqwt6Ejdy2ajzMMjs982xkf29xxk4tU",
  "key4": "85Bn9UFJRG84as8kEbiMHrVSeyQpuMa82hxwFNXAM9eTqqZJsbWGQoimRZeyKuMmijLna3GWZdV9EiJG1gaiUSX",
  "key5": "3oZdxsYq4ErCSKcgCYNS9v75mCWXgVVZf355LdA7SUFyNuR35giMd3SwPuAcFkZRq6QGJEGPHWJJiG3pivjguHJ2",
  "key6": "4asGTy4YZLubGn1PYDHFJzcsBpVVFADhtfz4dFMyynXUDnnPQhByPNLYxQpfwABPtGKuc7tQmKSQFUG1mAo4S8p2",
  "key7": "3Htpwvf2Uizdyd7Jyej38gLqPHNvaxbrjf7BJkMRgo1TP7xUy21hKk9me8ojHLmCmVsQmzYsrbNE5wuopZ6ZfetN",
  "key8": "4vr9DwMcZE2HpDMaZ7mdC1U6nWL5En68TaheqXGMm6qu2Y67zE4g1n5UJB5t654y2hP8h8VLARpvhHxfUEwWphXv",
  "key9": "61Us5s5TZwbs7yYG1EzkB9QDTcKPXw32Xg6LVZ3wohuvmpqxvwT7BcichvZF1wp1vEKaJCDcLFBrYR9wSbheULGd",
  "key10": "4MnGwaG7Bt44Zq3HE4LdMz34cpvEtxSYXVQM7m27oM3BoGoryQh2j9JcMnDP1VTFhPMmiEawCKi2NN2srCjZ9QH6",
  "key11": "4ehQDms3yP5MT3MxbYYzvHSnFENgj7GL5YSzMKropGiyBZSzehH4dHMgjWVkyre5T3JbSFjntJL4Ew9t6LoU6Cuc",
  "key12": "BgQvZh5DMSt66KKfD1f8qiXGYRrUtrfNpQpdvXQM19bG1x7pvixErxvLfZfZ6DeTDEE7Cscu1zWNhh5zpqZL8fJ",
  "key13": "4YXixPczp3oqkiNzpPdQpPvQCVB5kDk4QHiLY6aquqyUf1Zrw8Uudby62xkxwy1jXmUHwAKgpfHDi8QuE4Y3uPU6",
  "key14": "mMQeh8uchXuP17vEGERgFqqQ8NiuFcuNZHFFM3JTwCWcwYGabyM4yrcXJAHUwqpq7WCqcGeg4wSQgYc8dDmynAk",
  "key15": "2wzaAY1CHFhR1Djj66pnWT6dPtf26SnmwWxyPBvg9LaziRH7PMwfbSgUosnLAoAARukKvF7p5hsBE2LRjnmC83Re",
  "key16": "23eGV65C41s1gonDxiMHPkmdfYriGDgFREifaEFQKwPBWK4RCMPEcNVCQ3LcvkTfpK7hnyAqnGWJibTDMG7VkGab",
  "key17": "3MyppxtE5YFqh8oxhS9gM5yspURAmYznRycXohKNEp6gyhmUd7rbmqbutiHZ89rUuYMeqGh91MjsoeobGejKZ8WH",
  "key18": "EYmYWcYJMFdiwc5czhz9MhFKRweHHDmstfCStRacm1MJraz7tfKZ4G9QPXo6fQiqH6YA7ULsCvGDBwABJjB6SRs",
  "key19": "4pbnbJ5nMb7xNgKJz3QQW41cuiXvvJEzBHPAds5sGCacogWDX8dkzVSW225ns8zhNsQtjmgAprXpP5H4Mo3LJacp",
  "key20": "4sphGwioLmAMznRYmVu5MWgqYjxfrKyDSUAJ5ey7ZmX5nxY7m8yBCpBbV8TPvfk9ZFZZm1acDVchUojtpUP4cp8x",
  "key21": "42vdHXWEAHpDCz2E3VTVkWgNc5UhB3QdoEngDqLa3trStPi3tYvUfoiwXUQmYRQN7YFPqKtg2jBULgLRJRzhWC9E",
  "key22": "5XGfxVb5hwNgCEmmMXsb2bx5GuKdHwrxfBSC9XATxNYF4aqvyVNe5AKiBA8KgZ8qaYqSYdAT1yWEwhpD7FnUSaFv",
  "key23": "5gRrvpaVqs2W7fRwScfTMvNvS7MEbRbSBZzUkaTPyVEajBkKRoYeqXAapWLbBDVtAsyu62X6yDABMg3UN5tHAQP4",
  "key24": "5zPtf62QLCiohmRYJb82SxqpPafSorJ3tTRyuDpMmhb6Wk3kJKS2Fwy5YrZPC6DgAujWsmBW5PZ32rinBmmaoSmP",
  "key25": "4yY87pLRLjseshhkoqE3wuWfFCKrMezXwsbr4L9qgaTZkBxKD7jKPeAAd9XAn5xp5ZEw8tDwNXXMwXL4ge7yHHGf",
  "key26": "cpNbi2YmeLsDVNsWx2PCYkgnGJVwUQFa73qJoNveK5ayseCVgJqdMp2NduEtsw9yC8kKPdYE94YjYg1DKVAyQEV",
  "key27": "3S2HYsHCQjif5GakTruS2ZbMgYnbrxmeBMUrrNQopQoVQoDdSJQzkgnnDK4A2rSm2QT88ThWKGmMDfDGennnvt8e",
  "key28": "45uSdg5B878NYLusEsj1oG4Vo9nj9nytXbgJE78yB2tdDK8Dwa3xKATEopqJbsCgdRbq7z8jxZT6hQzv63ayWz6r",
  "key29": "4iqYZRYnoA426Q8Ve7gBWXcPdMuPEdU2JcjEfZE22jjDKaseBicUTuWEGDJtPfYyFQfgFdrYz3Fhdw8fELurr3Pu",
  "key30": "3HAviZsZ2ayQjfYxnxpJV6Dg1xLAH2H6EMjZqSBYRzqaDG3GV2zVH1sGkCFbSeFBwRAQ9rx6c2LavxtTZEjjuE79",
  "key31": "4AVZ41a5pVD9aERn2izqYrT6P5rKwb2YjvtmHRPootVuoEEe9EsEFVP3aXWL6zHxPKiyuV3ie6y9vG1RUXxo3vNk",
  "key32": "4u6DjTmMGpdMHdUTBsSLsDxsAjyP15wwuQjEneT2j6oH6jdvpBDAnwX1RKDTMdzjJb2RYUu2Abs7DcGCVfHjsrns",
  "key33": "47V64CEyM3YRtYpCfjRTjNL9u3EkHBLuxAgx5nFH9J3hQGiHeabVNbRxMDgg4fEJds6phPRA88NyDRmLhwqMqD5x",
  "key34": "4TWYQbdFivUnwwHM8D9NkgSBU8QYdvfaFCtFPLipREMLvLiYxQAPprb5moXKsJaKE7me8egQ9czVxxBUM2ckZi1J",
  "key35": "3X5kMW6f2PybPewTXgT9ZBe2b7mQ875GdG49P5AJat4DyhFnKqny9esxzQqL3uWkP1zLAqDF35VhsTG2cQRa7p7J",
  "key36": "23ben7BgCynSACYA264aAERmvCQbMAJqghrFuWsepUsPmnmsms9czvgNS2ebSWmG8ev2V1BbqHJuCmdB9Df8SRdz",
  "key37": "4wiqtJgkeX4RKW7k3Jnzk326NSQ3wxMbGjJQmQ3bd6KzUP85mJ8PD9rV737prg9wAoS35KeEaLQftuuFq2s1fVKc",
  "key38": "3DVeCKNLsuYMuqbLK1vYd97mikU3cv9nuDFuHL4sRxBF29kkwWnNFPaSi26VXiGcaRjsYJKNFcmihjyCPfq7fdxi",
  "key39": "NuD5NJmWLv6jMtGxfgPGjCYiuKj3cuopix5xuhTgJk1gA2orZFi6Uap25dpwi7fPiePchLJ12ocQE8AfoRwKRDZ",
  "key40": "3WNYoT17YAXFwQGePSF7U6DVaQtU3NCekLvEhz1RMQ6HKtTDKYFQydAzKBin4ddS2xiWpH1Mit8BzEFoMA74LbYZ",
  "key41": "MAjtQaF8upWkpEz3vnwyusWRVBwg4P3rtxVJtSv88oQ9N81YgdAYReVfuxvgZ2BGsdm3CEuHvG4bfYuAu7b2cgz",
  "key42": "4qV2ZbKEyoy2xsdfTnekopRXoDyL6HKi6tqUYe9KQimE3VWKMMdsmqT7unzHPNALumyMgwunnRnpmNtnzMqJdGUW",
  "key43": "5ProCkUBeJMcncZ1QReeQCLmC9uKB7wVUuetY5Dvy7dg5JfGhMC8n2C2SXvkDTYqLWcDY55LK3W8TV9ES8r7cuKZ"
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
