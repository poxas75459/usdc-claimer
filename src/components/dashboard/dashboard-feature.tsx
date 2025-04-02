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
    "3oECd8L2oNGKgrK6s2HHqVyQnWcV2G95ogKwS6gyBFSK5fzZmukR8eGu2osW7qHrg5QzF3rRNKBxSzSi1JjLDJrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365MbaxJsKCb2LQv2Q54KcccDujfYd3UZQass6zbmC2mNhSyUD7dcq19TuLvTZVupto6ntmEM2sHFQEVa8AFatDL",
  "key1": "3jUjAMzG3w9Dzg7b34eSfugxXMPMx56a4tungszdZHFwbWbd45aB6gqQcQHSvThQV7nywFafJoZsfDvAyTWyGay2",
  "key2": "5oh7KpnxnP7sjWVt5RL9ejtnsF5GHrj4WKDrVSxpEniPhn3pEd8KL1fPBWHrVyo5fY565Q9REvUjYgKV5TiP4uTX",
  "key3": "4UX95ACVRanNgNYUbx8FhnkRso7cnAEzF3wkS4mFPCAcmGaJn4ohAfd9YQ78uJ438DjYwBNQxnRBSJQ1FgyHyyqH",
  "key4": "3g6szcBdkeQBgxi3a4QFFuAT35itf9CBoNFEfANv34w738JF1hT4eiMUzEgU4mEynTqivRcB4C7bLgsGLkTbhpLL",
  "key5": "3q4L6bk9ym4NaZfhGsU1ip2gtJC6Yif5AUBY3deT4Ysbp7kggzBNpaMkAA65459SjL2ABW3eV4iY9kW67YTAxyKn",
  "key6": "25jonBhkLsUfodwrRipw7JWwXhZyU2EfQJyhfcKJZER4QWHVCy5aUPAzp9Gg1wurVG4cHqbesXLYdu89AZpcJhzg",
  "key7": "3B2FxbWaFMXR2HBGYzk5Bu4DDASRShmPLafjdLoGchfjSUNV1WrPAKvM271JC5iEvLka1SYsVdTVTrsKVsE1wEh1",
  "key8": "2rRbQaiWow12wJkkYXU9qNS4RNuHVMKQJnCCFPZcW2DmDMiw9TABwncX7qST6TC1CMuzdCDgjnWJjzktEkNp6o7D",
  "key9": "4RD451WWDMXY4xnCWaC95aR7tiGeDKWUjGXLWwWKDXhgmp4ATyHniP5VXvLVyU7gHuTcZL863AgZNXZfo3GxtoL3",
  "key10": "5twDqSBJq4fgCudHcgdciaHhsLL7779y2AhGyxgoFoZNKTReJPHWGWHFKE9TwEu71hiY1GrvkZpyxhU6ynGMd6KM",
  "key11": "3LDwtxTKAmoLaNYS1xf14dztKATYCwhKm673zVZMqwqWQag2ozWbdi1V9uE9mquZkA84LTku4TthmpLk8854pgSX",
  "key12": "5RtasweeLu1PaV8tfCCuvqMZj8sc12LpLvY9sFgHv25owBUZwLdFfWpqDUxLKPVScDoKLZJugtAZQP85cVgPWjyM",
  "key13": "4fgGzxgJ7iyxYhiZkexefE5g36sGF1upLHa9P6GM6bCxWDZ6wBd4ds3MMpgtxHebxgq3bDB3rVpG1YdLPrurLjSx",
  "key14": "3BDU6AMQASZbC7WF29oYRuAYABCY4ABwHkeUn4U7mRR2frvmPQ2q1GBQsTvqUQCnFxJC3bKoGYvvH2HBGBj74cff",
  "key15": "5kuYAYppvCNaAm571yChVoTdF76K5cbT7YXg7sLzZagK16yLUiMkCbiQ7s26coNe7DM9LCsPs8Fkih5umSNaSDuK",
  "key16": "57eCvXvJpTGqhSnP3z1BibyUEjRKbm1ykyUZ4VwZLkbKbrwhRLNGRvQsLk7D8HKB2oxcL9CN3hg1uf3uR83vKAib",
  "key17": "388QyxyGGJcJJsMMqx2yUdN6tupyowgQ88n1xTpL9S9Kck1QzJWFwUvhBgBfJ84u78q2PE5kAAU2jd9rsXkEhzwk",
  "key18": "3gPdeXABMAxHyizgB1AF7xBVg4vfrgSPH19gqBtb1tviNywMa2ZRzd7fkdVqFNdavNdrW5dFZ3Dg3B6tCJKFDdhd",
  "key19": "JPJMWvETu59G58PSKBoe3vd5RQ9kT3veepG3rhuMLSi8pD3VQVXKUGndVihnTpyV8ongN1qAdB2mroeEthsbrKn",
  "key20": "4ZhDCHy2uWvPLM8aw4bZbDFC5DSCg4cnsTmPcFfadrnD11xB9ruWt8LesEh7SSQPXistc5e8f1ADPPBX7ruGCjWS",
  "key21": "qdNKbmBjw7A78nhHdWKiVbLpnjnfodf7sSVnavioVgd9iJ28XpuNSvuM3cvWozEHLeKYTFqg2MwvwBzVfJsqyeJ",
  "key22": "4Nm3EFHt1H8oUo7dV5GBD2WobGAetNTbWsu5kVAHRuJMULx88tZnGUxHV8hJFybQ5Q1Xd6rkKoFfSrQLCnGA7CPn",
  "key23": "5kWGHfNQmRGERHL563wgrRLZhVYfSPuTfLkJQGeuxFjoGnYVbc5TLwQycfYdzjTHJq4h4nkpaAvPegrZXuHcfpS7",
  "key24": "fyqEqapx7o9LYiLgNdphWVBa6DWGhxJJyzyPgiejgoE4RR8GRo91jKbC1v25FYTyNtfYcX4HhwGuVAURF9HuPMk",
  "key25": "2wpYTstP88ufLxfi6rwqcu6sY9DjkE7HSeRU1MfsqENF7RD9dqwnbZCfFB4ZJrfVMpLz2zFp9hQ6AZ1eRDtSsGZ",
  "key26": "4TPYteDw4z24kqWRZq1mfqQWzftFJieS3URHUPwG8L7u8y8FivxzTtVjbtmb5XNxDNUbMVwmzjKMDMBEKpeALrso",
  "key27": "GApaBLR6BPxk4mptcwEbQfvYmUaqZDbg7BgYerrwLZbNEDomaYBBuGDh1iLyrFx68xYYohZMVBx78rDNqj3gP7Q",
  "key28": "2CrdbgS2qTQy48f6T6EccjzvWbZXR8kR6MDX6TujAew4TUQdAVJTKoi2zGjFoC3krtinXgycbssJ6RahUmM75RHw",
  "key29": "4uLXMhZCenJ6jSAJdWoE5ctLbQstr2KVaA23SaLHUHB58MEgdZZ8APKeqZhnnttKaCkq28URscRViFQ2puttiJ3M",
  "key30": "575qhooaJNN1HzD7TayUKYwzSWFL6SpJ2RiVSpUVBtSfx2qv9Ai9653KciP4GXdFbuE4hPchdqsz6oAnBbYxw8CK",
  "key31": "3gaBDgY69FSYyUd44LVvZmHvDkAoeop7r6ENX3fZsE5ZmECG6G4xqinSFQyAXzCZBgHr7jAL2pnZA67RzCkoQYSr",
  "key32": "4yoE8nk7EQS3PoDSuidt8yph7BWRvTxYYzZdDEYngbskKGcFakjFBtXCrduBd1MME1uBwjmCy4pUm7ADwD85M8fU",
  "key33": "3iPp39V7ZoDxbGyKSaGe8hZko62U2ADnZaJrx9gu6r4jew1VudTCUsw6AyRFTYeUdGBzEkVZ9bSUnLQGnHQYUcuk",
  "key34": "4r7xfVkPEutFXo74QZCWLzSPQX7ttEGpfDmLyoZdruMABKRwLrfxWSnXP6ZRG42Cfst76Ud7pBE4g77hwAbmMAxF",
  "key35": "3cY6iHjrJnL6WA9Md8kqQ56EoR5bUoFmBMJWKe7rvnwK3oozExp8L9LrMiNHDhMrzjBaCoevQzXdTnm714EzvqaT",
  "key36": "48s3NscPUdf1kus4PZKjVvFuQkb4o1ukbESuoPLnU2ZPBcAqHYabN1QM7JfdXjiXHXuop5PrfH7Jys1e452f8Hq3",
  "key37": "5UFGcaamZEVXsF7GWrVcf9wrQwfb5py4txcazG6o7nGgQC79G1cfmQQL1Byu9gKhSh5evU62i5mgCzhPQSvJ84Qw",
  "key38": "37bYTeBDhtkthQSaoF5RG2b4jivnxha7K48Q2CQedhyP2K925GxnYbFo5DUTubjp1woYHRs9cCzL5P1rpRQ4AEZf",
  "key39": "MrqvtyTzxQFUJ9FXCkgHE2iViBjnqkXcvPdwc66SA9JtmH4vcN6hMBygAAUgFfwHB6hz64pZgS42RJ3WNse21ee",
  "key40": "38dZMvG6U6Jn3wErCwoce6uTEx8TUoyxV76p8ode27KhNZRkM671mx6xXdjDSuaAHuJyuH1Kan4DHBLKCtgJaHDS",
  "key41": "3WvTirdsuacnisEhgqLyfGytcrX6RDRHnTUkzXKaK4XQajHanftv7hzZKE1k3DU4pVVcvGZRh1FBm79Q22pBemam",
  "key42": "4Frdf7Z5iwGhzozMecAvpiSMrHqmqXkp1Bs2JaH2Cgz7STGhfCgUMMQPFuFbDAkR7y4UPs4kxyDNskZfQKvyR5pv",
  "key43": "5FSUsW32eEm5xvdYJi4YYXeLgA7iAXTgzR5fVqMjxH6nPwsKKLEYm4bgQ8yG1sPrVAARyZMobxH5CRhjjy2XWp8D",
  "key44": "29TF8wWCtA49zsfc7QHCzsXdkC6WhCdp2S1Jnn9y2Z9EMxX2PeUmR7mBT3tNifuiBWgejNBdg2U31j1euiUgCuQz",
  "key45": "4vMupFSZ1wuriao4RKhKf1HY2Y1nW6Zr7cVL9rHjUReb7WNSeT6Pkpr2ErKoCReYDFFTrQZkymTvSHmwYkcjcAaQ",
  "key46": "2AsBC9pU1pWFRs1U5tvEDmY3byw5G6aidBHS5C7G2ySrxxKcxNffEDACU5aMoyjJ1wDoH8uQk5DJaypyhZjb49uV",
  "key47": "3VwNQ2D5K8Yk4D9LrdkpnDaVYp29GjhiZAakEYsoYUgTHPYumUR9sZuDCyxvHKanMbdukUxcgtgdVpZ5th1X6Ha8",
  "key48": "44YA1cDz9fetczBBQC8qp5CDSshxkjTUjtkbvj788mkZp2KBY2ugAAD1b4pAqYLVA8VYE9QidxjbZ1pgUYnaJKM9",
  "key49": "5GUbmx7CW5QCqpGMwPuytGXnjQpix3vLTiRcgozFTtfvMHYVFX5Gh6GWAjz1bF8p1LEqDPgxRPNLnNoMDkRnBBJw"
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
