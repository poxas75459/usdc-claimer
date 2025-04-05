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
    "2UnXovF4nqDCcpFS3yy3aTACpMCGArcjL4nEroT2WPdj6S4vjB6JwX1vJLM2PYcBS2TTkFcXqRqu5KHp3SRbPuNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AMUWG7jYcXamJuCNyDoZz2SsvAjZ2H84UHpJBGFHkorW5s3tYyx6WViU6Prxoi7seW5dPCPuSF7CoF7rZmhk9uA",
  "key1": "2zCpWa8jq4YGTLYWqxrS6eNnKWTSczFCMfMxDwmCpdBuJhj4mASibC6rpFjE6am8KS5Q71NNyP7J3ydXMjdiWWJk",
  "key2": "5TYoPVFYWwr2v3YdKViLmZ8bWHmhg2edjvXCmStWkLPqE5FaPLgvejyZTPMvV7J9k1dswLpuoB6FCHKwSdrLV3Cs",
  "key3": "3opGJ61Duvnh7B2DbjZXrbskuJUUXE345fVmvrEeTRpTqiFFXt3M3MhjMUFYkQw4u4UivZUT4d9jNdThVmLEA3Hq",
  "key4": "64Ephgwhb7ViE51iQoCAnYTRsgrKmtsD8vw51Jb85NUGZnNhrM1svo49tm1cXkEnU8Bvx3WeUy9ibdvEWJVa3Mfo",
  "key5": "4r2JF8uqFk3rukuvNHrtvAPkNfLnTcHHFBFUdLeeGRhm25XcfvoTiHKHuKnaSZxevRWort2sV7mhneK58KhNS9QC",
  "key6": "GJiFUdJRaKM5Vtydf4ytDayLWi9uyzancDSaACJgCqcmVsv7AQTLui23FRBzgxeXEStHkp3TAV2xHVdhopUoWu7",
  "key7": "5JqyEqioK8AgHZBgdH8ozVAD7intEyPGEymaT1Z6XKjSeHsf81DgAkhcFnU9KkHc3s6xHAnpCN4a1B8VPT5QMuMY",
  "key8": "4uyDRtdmbaMpzaZpKeKAKabCEMsaidHiT83bMPTrYZNeigsZUM5XU1MRYGyt8WHQu9b5t8HZtZL7GLiuL1WDkPSW",
  "key9": "4PvtPHVf9GmcXNCYbt5yAnWGR2To7sDxy7fXvUgW2vAjahpf9xCZTAsrSwnG1VDtr6LyEn6XbcZM66undZL27hkT",
  "key10": "3cMxhyQ9Pea7Nd1YRAj8fCD4FUKKottKG3hndUwHuDHqnxQ1qRHP1d2b9vPeWqc1vb2LTknUYPir1CXA3spgZdK8",
  "key11": "cxfwptFpATH3vu14o17HEY5pPZXfzmmzfsoh1uzyRucs2E93HkXzEXNKgKhGk7JDgMweLFBaqwd1628YozjAqW5",
  "key12": "3QX1kQovMpyjdzXPzc6CnHBcvoAMGBuz3mhsTpJQoGdF9W6ZCoMAXQgyRoR6ehpqEp2hyUXFfjuVGggiAfDTRBpN",
  "key13": "4S2QrSFzov4GnuHyJCTF3kTY5LHUKbH29EA2VdchuzGDaHcbKpBxRjqogcH3aVe1g6uGs4agxmdkANiMRwqLfnVj",
  "key14": "2CRjZQVTrthqnXXQ3Z8BSneL2HZNS6wHRwT49CYMxQCgJcBpLpGtX5whUJia6bhLKmpHwfg1WCFbTbStkEnDg9Nc",
  "key15": "2UT69iPTV9QSxjc1ZPrQGj3t6oHSmnHywZSvNe2WQd6WwCccEQiPcGDLLG6cR6Xmm2HrUUnMTFDNTqRJE88MEPzf",
  "key16": "4zhBG58CEaKkpg1zRfdGf7mreRnrBifknCPh8Tv6JanSjxXKEUgHyzHyNbnhM5xjBQuHgrj3t1zS5BTt1NmSBJc2",
  "key17": "1Nz3ZnSGXrxBiKgyAdM9j4dgKkq4p47AWuUAUivK5XZ8aKozLS79BxbGjtqwAKbdtn1nmoTFQmYtXXvzEipauKK",
  "key18": "65YB3twvzMWt9gB2m69HnFWj4gfHt7oQNpLJZNc7qFuCqB6e8CuXCh8TeXRKvsx7ipGToGTh1aNs88g1nMXQceMS",
  "key19": "2psyfoaozsWVssbfLrXnGXWehkyMBjF95hZJ7TYQ7AVwiShGNC2oNhYxz62Xx6VhwoEVfVJ3T86w7HVUEPcWXVY7",
  "key20": "py5KA4kZxQLiuscinMSFWBErYDqAaQpuaUgzMdSZaND71ewyGxbs5zxFGrDo3jTjk8iBwUnTUqXuSYsy3cGMvbL",
  "key21": "2xH8sVkutCqT2HLJ9dAUjHmMGxFHeuNjwSY7DSGZHPScodohzo8Vkj4KRPxNxuexYQ8RYEHaMUUpHG2BF3uPiDCd",
  "key22": "4281GoroFfrdLo2S3Nje4cSf39mCrvKRsq7t3wcS8cN4cm49kpZAfJPT6oLLmXDeiMdWB58ypMWnbUiBmXhuipuX",
  "key23": "676P9deNpWoa79ZPy3tdn48GZxteM8RqG9fFKvFRoR4iSgqN7dYhQcWccqoYyHVqTFCDuH4vb5DfnMPvPkxkF9LD",
  "key24": "9ARD7TfENLsarhXkPu2crF6hSqMrijziixWeTjMadGBvGjZWrXnPFXTdy1JRc8AdpsFSJVAJ2ErSi91QGoEW8f2",
  "key25": "BGpFJXwKKieR4HLBJPaFZpvFFijmGpTN18t1YtRce2wLSfnhAUTRmUStexQCDnoSuQ3S8jWjnrHUtP4oarAABiP",
  "key26": "ftWhkMiEqSx43J9y5g9RqpAhzF8Bwi5HNzx4ujE9Lre3oJ1fZxqG1BcUHatF7GhC9HMwSSzJ99XBb59fkqM3m1i",
  "key27": "46Qhm1zrGbXz3UXS2kVuLxV6bT7LVF8ELoHUw2WDjraoTSpDJBbxUYAzWb4PtNdsWvfiRvnsnmWqy42gVq65FrxE",
  "key28": "52DUsYxTQPFG8B1Ld1ZedxsYq6Syx7kRG9Bnwgy44w453WAE1YFNJpwE5RbabHRNKnjTCqD1oZTYdDY53BWbiRR1",
  "key29": "4XmajideJjTuuTgvC4d6TMenjmbmv1da35pM3YQZiXEZBvKbYT6D1YAaxnJwmb7z8Qe34q9inSY6KZKFdfyPfgzd",
  "key30": "5pH9D4aAiUcP2EcsRNMmLw1gQLFaHLhG4TvoxqRqfw6sAdEtTojZKFvXrPjwPPASt7PDxZdFNN7PLK6dcxaS2CR",
  "key31": "4JQtTsR4xGgC3AmRG5Urnq1DFU8FEXCsMtRHz93JMXGGzH5TCcCpb5gMGdVRJX7FSwx6YMMKGWZt3Dw5ZuYNN634",
  "key32": "48PPLvmypR518XYFWapaUGNAMd8Gk6quEaXWzKbro7tLXk5h7tZZoxTrpRXaMHZjbSBV9zDpWSE9UhMtBaMATMuQ",
  "key33": "2ij5Nmiq4KeTBVvi1pAWvd5hirEZT2wwjZgyyzP3nWsYfbBussBGCCV6ahg2AUcCNygNpDh1c2BB7PUUBXnja71z",
  "key34": "4P7DD4L9Q21nU1XdbjPJYsDKgvUboFQtqYMVW2YdyevR8CegCvuVTHsP5XN3xL3d7HKobR6D62dpfrc3K6r5DxJK",
  "key35": "5tafkQifwCwUc8uBEDi7L7VHhjLBF7S2rbkojdGDQ7Q4TATVEorAJrp8wsbhD9yZbE6dp4dhGBamCynVEc7Zuijx",
  "key36": "21EqUa4C5L1uE8hHA4tvF77mv6TxFLjUQjLuH94fc5NG4wc9ikUwaPio4CWfY8bXpfWMxndserCXmH9xwizPHB1h",
  "key37": "2aRkxFzBmMQLWz7EqBSUVb9JGee7SCR5GkW3M6TBZa4aZXc6HiVfKH2tgk32NYmvahPt835ddqf6ind3WKpL3Ni6",
  "key38": "nRqSDwWL5ZynhM1pFwABdv9JGZrtDJCy3vRfFJSvXKBYoCKLjZd6REfxfHWtFq6uPLzxiTLGV2h48ZXFBnYDifp",
  "key39": "4pYMm2uavLMVVRiKcpRp18542w5yr5v5VRBhDPAHSmrrMUjhTibp5X82ZsLXtZjYqhdUYdQGNVtdaKafPt66VVTL",
  "key40": "waGQKoA7nYDBoDy1hVVZ5vwb3tBnnqqQLoXmAmLdd4f7p4NeH8YPL1GarhHBhh6Dpz1sN2FiJ6eYxZ8HkQRqtwW",
  "key41": "4VLGqW1CKQM1fnyVDzJchk6a359KYMdMfdmv7bKWVRAT6VrDn3xv6W1FCACo8MEtkaqGpGew46eNUDXiogZtemYn"
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
