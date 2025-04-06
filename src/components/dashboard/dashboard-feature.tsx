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
    "CrGp1xX7SUHaFyFU8ZgN3otQ1Zyjnd3HcFvYocQ6fX6rTBhjkkgrpXPaoCHW3RgUwzD5aLJfwAAwLRgmMDwsvcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MsCs9qNk2d1UfwKVxcvis8nucchv2tctgrVbktQ2vTw2V7aCRkeTrw8rEXyNmEL1H9VaYkQzx4BeeakjevZraVi",
  "key1": "2uoSRRkykiTYyiVryA6YwbaKDqTrqSYATZoUKJFUCY9EMCaGPDE8ryiysKzmtJotwrMVByhaEcKssJzkhthPwJQg",
  "key2": "2Asj7uF2L9fkXvhYvUnDw4DGYoMgX3ZZ8dTixGmGLybDMZd5zZLQAKeYhQUN7tbkdYKrT2VsUoZBDAPSHXsX9d4z",
  "key3": "5TLj7V4wYuUNTJDAXWmfNGqpA1K6xx3nYeuwkt89ydQHKxwVArZCMQMbxLHmgg1YpQ1tGo915DKGzMehf2MohwYh",
  "key4": "5cGvhM5RCUAU9KZkcesJ3NgbgPoHTnj2zQ3EUio58BQ8tkcrNvXqQotXE5EeoC3cZhkNwx6mmwQCs4EfWejwVeuJ",
  "key5": "5GWmnnALhRrPEcpW9crMK1EyZo7Y1Ts5Kk9yHqGfU5ttG6kEWfro8kpdYendLfH4aUxr3UsPsEK63GMdKo14dqfp",
  "key6": "5Mfvo4A48XaEYzZjB9zSVLbn6bBfvKLVGPsze88qoZwzJ8yc19XsUbGwbL88RMp8aJ4WoG987t1kWPkpbhihQYhK",
  "key7": "2Bz9eCSjtRL4HcJDxEwg9jCYTkoqF4r8ZTtcdnwvKNoFcNqQQmTjsa5cdb84jeHPMQyNRjA5t6phPSRJ75MBtgzQ",
  "key8": "3qXuCRtHyWMbCrBjQv86Mktk6TwCPv8D5JyZuNtTUjq9oP4DrSS2V3aH4GHiCgHzZMw8C6EMgVXc4p5zQkG4KQvJ",
  "key9": "283gHMCNrHdKYuwypscBvsmUE3buiLWcX6kGx6huufMUDfV15mskSM8mRdXUEKCwUoyWHs5KhQK2wgHuDpQRq9pW",
  "key10": "5apimhoxdepu13qSftBf3aK7nKP6Gq65cySWH8Po4szirpWRK2A2RyabQXdkP4UyVYSjYWBmQg3ZpvepF9j3ks6B",
  "key11": "3MFZ2spVw5VJYmTVwaU9kELku96TLB4VvHWYs2bxLhR8RnREi65TWRU8dF7EuPDZ946W7csJ1NfgqXBWdSX4UbLg",
  "key12": "5VWNadj46ZabQGGCymZVEe242MpmT32XKU3yei9U74tmWNy9shdXZjeRAN2x9iytCbmQztHryBnFBCPMkYj48GLE",
  "key13": "4BQ6Frz6o5WGN1xdU9jpnpTGSpC4TKvEAwEnQqRsVM3rzYm3dg9DyMxQi4KGLmFzQHM7rNXr4Xni7QYsAdV3J2nT",
  "key14": "5P38AroDYqbEjbyy32wUwSHsGeeB1n7CLX9ZMyKGV41P7s4X3V7fzWfRRcZpGEKAcu6e6oNa2YkeCQPTz6wUX6v8",
  "key15": "3JravLUZPB8H7amKckECgMq2bVUUoXG5HbaC88XUqtmqJunZJCqSte61ZnfPMYU1whRrHowiVVFEZ3GgVjUFWb2j",
  "key16": "eu3r8toEKjtEFqyWXzawC5nLabJThit5ffW9RuF3GgyRshwZbMzawVy7MKJUf8UKbzP34TdMZrKVMC6ZViwEEJB",
  "key17": "29vsdTRL63kbEk9R5L6B9Huc4sGhQnfGveHxYwVtrHNkzajv5niG4gvv9kDiodiiZuwRCzgmDJhFKv9VS26QMdJT",
  "key18": "2pwaVsADjNEYqp1Mm9MeXcYcHH62Urg335ryLbdwBiJNLftetVfsK17TeWTgfyZLBrwYZjwYH9Cu8aWwjVh3XYNA",
  "key19": "4pZyp3UxBN66hdf52T5bK8FHpMtxTM9m7REtUwc8coDjQpedKs8EdcEB5Ug7uzLTKzqwp4JyjiGq5vWnWPgq83qi",
  "key20": "5BD2WPrRKMxmF41MvdpbuJXKy6rELLHDB23pVcWxN63RA6v2Bfzhvbz3vffJg4hPrmyxZZ4Et1ViwtC9yRbgvbKc",
  "key21": "5tFiJfi2PwmrvSsgtg251hz62sD5YMuQYHPxxwfQT9AWxFjfCyXzePGF2dzbmuVHS9hnTyY5snn6ymCdyCbso1Bp",
  "key22": "3pZz2CpL9pzLAYv6mtTM8LgiijNxbchNauNcn41ZcsYj4fZ8PkrPMX4jYcxDZwtaZTaztga9xEGoDE4JvnVaNYni",
  "key23": "23JPkgpaJ9QX9Z2HshQJJrR1ZT8QG58PTPq6z81Cm7usGjHPwMnCmFrEJHtFoxqP94sEtn5qtbkyFkFP7uGYenca",
  "key24": "28SgKAKTiEgsJU2fcpYCxfaxUWjfdZMXWooAe6K7Pp5L4Ahzd9TVjc165qDSU7A56b3Qi4AcEKWQAYc6gza7zswj",
  "key25": "4fQX5rBrsB9tZNWXQPdBvLD99f9iQjwvainhuXF2q9iXASUpMf4wYwVyxQeHk271NBKvbNg4ka73bFBfoLXKAEaL",
  "key26": "T2xKnt7n9zkjBV6RY3dUT5shELaWPP29bfhu6ThniY5eFnbzyKpDWkHCy8R8Npmbg47ZnX3tTew1KS6WCJiyCTz",
  "key27": "298fZwTvirmiruRH3WVCMNGrys8KgKZWTBYZs5tN4VwXo1NXxxCFjzJ2T9pq8waBRjByoXKy9hWzLFjg9U7yqfMs",
  "key28": "k6XzUrynGQxMyiYyLivRM5mpa6oAqqSmrNAfnkHjXgTvHxMvvoHM2FBsAvopQMPnJhHuHDsn2wNGotojTK22MgN",
  "key29": "3KCGwqNWb11vc4SjvUeBzKUqRC8hyYH8BVrLhX48L6BZMGJg7sHpyML81x3zsSjnyAWMZDBabB9i6bmFLrdtErVZ",
  "key30": "g2QdN4vJbgSj1tCijs5q62xC2L8TmXxe4AyS1TLjXdv83vo75GRdBZfMmjsJTP13Wf4N3RuKgexPRbx3XXfUJrn",
  "key31": "55LftaZPQb8iPp9yWhTaZsnSMd8o9jwukptMnDjijgVqTAF6Ngqpr9iJ7uG8WKWpMiYF5uviJcAhnwExw4ud4bnZ",
  "key32": "3xLgteNJ8kLDuzQ66U2vKr8Qt1QFqz3EaBpGAwK2igpBHNDUtbfGB45YLWxuN5eKVpTCSCGVPFsH3tMQiNWQ3HMi",
  "key33": "61c9RDzmDacCetpt4k9bSFGtQtjtRZ6PSVuLuAYjabLUQJR2CTyNxhRoDYAXyVzne1rmn8BHaC2qzpRQRAtRSjxe",
  "key34": "gcn2b7FWfJ8yp4gmGyEbZ7e4NAFPxiBYAdLJcgWWcqC5Go2XpYJV9sQedw51BBYm2AW9reY8nLo2m7CwC5i4bUX",
  "key35": "4WXacC23WDRtLcFkzd4rnJzvHGcLCiHweVT8VcRFnyeZRga91Cm9trpFgZeNPa8VYBvYVnz3P2o4QCApKYH2nAWR",
  "key36": "3fSRKNQCkAY28uvDn2eE95ifgodCzWe1PoBYNnx1KAk4JbpCcbvWkhYMBThTAkaW9AijHYY1wBxsFYbURQmNKJDE",
  "key37": "2r4rTJy5K6K5C87efbzeDsoYEkpL455G1gpq4TdcDMEu7vZMXSYuKSRqWQF97cUVoyKW86xzLJnhtF4UoEj2tWQn",
  "key38": "4Vyubw9PYvGbBanyfxgSiA6ZiVZZAjuURkWNn57iWaXwDA2MsPAT6Kr3N6ajs4FfYaN5Kph6UnwhLuVHyhfssYWq",
  "key39": "2ujU9qsXwWfRvvgy2FCSeLtJMGtErmb6M5m9h72ewef7vugDUXyyxhefuFX5x4YsYkNtganz4NALTdy3HoNivmKJ",
  "key40": "bSxe8E957mkMvsDnLLjD7PwfBvnCnKoQnaCiKeisCwxyhtmJggtSRTEEFHbC6vShr7dTPquxPCG6zzT49joprhV",
  "key41": "3nnNKHazMzVkiCXFkZBWuPZkfPpuY67EPQD7Dd7HSTVTC9gyjkpP29KLCPtYuVcgSubXeb9v9ii81zeducr2ojTk",
  "key42": "2KW1XNWhQSYBVy2P9hFGJ7NTejbGPJmzMDhte8gb2EUjxpkqVoTteGjgxAXw1xXYyCVnX5wok12qELFmxZVFKmGB",
  "key43": "2n29UnK7z3ZtsQ2Vxgqe5ymT2h69VqNTVSZofr5yjohe2sUavDeRArZjuvkWgufFYq7iTxLvBD91MHtYs7NU3BsZ",
  "key44": "2nydi3HV87PySRiDq3STrM2aVxFys32S2g73VTUqbpt8rMNgwes1jgHLNQvYTKTGGu15o1uko9oWH3B128G5Bg9K",
  "key45": "wduARQwjqkqXaatkAHHGNXHMzGjzJpYy42pAuKTEREAbJ7GjfUJpBHEuq3wTRDRG3v8oVtsnPPy85G8kPYNwrhM"
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
