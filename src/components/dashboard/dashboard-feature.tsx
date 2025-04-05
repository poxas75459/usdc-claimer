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
    "4YqMJF1G3PxZGVEwQ3BGAKQpLbDJ7ZbcWbTqJjypZ7NJrba41MThJhTyjMR28a49n2e3SFyzxYgahPG33XMrGigo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BEQRyUNU2fUpRx9vLvYpv9gPwb3JvfLZAU4njcCBzUSHgNnFuTjoQeti5kcTYpQVm53iESKrQc1dyDUznBWeHME",
  "key1": "4MXQu6XXg6HtcF8piGPw7oj3YKbdR48hgQovwncVE3hAVESfUcJBnpvq45jqUEoBstrsdsPfRSMCVFFBZUafjnMz",
  "key2": "4bhY9op9NhBmcprYgdLdoREHA9r3UXsS4XZBAXbNJKTUgse4gSeiPmcp5EXdWqVXK88GfefrNEEdBG9yjYrfR8AP",
  "key3": "26WyR2Z9xHPvLrrgDMvfyLkMwZTvJByMvu8d2WiHEDhtH37T8J4bDCpCJWi8bkYL4SS6rbopK6CRgfhKSXnBMCx3",
  "key4": "sQemwbbGqxYVmbnxbSZaL5osST21xTZT92BW8yManpyuKfQkejnAAyD1XuF1KiV1LvwFWgpK5ge5BcqxL4CVBW3",
  "key5": "4pWY2M4amKC41PwtezbzepNdga6BevNdsqA4TA9NhtiEFRhXW7gwj2R86cC8V6Hq5K4ngMjMJpQhDaNvRSc7Gf6z",
  "key6": "4WV7GbtmD65FEZEjdeBMmjhLCNiuN2sdcwoGtPAhCX8XEx5BomaPFUWrVXUQ9GpQvgEBHShTgofoiJSqQUnMYYiC",
  "key7": "HN5GADsN5xuoM4vLRwv1WdK2tHetnTqQPHtHFsRMxe9sCp9ZCKiKcgNfSd9NoJ2QrwdmvoqG3UuWSiQr4iKBQq6",
  "key8": "5zvDUcxqnaLvuQGwwqWsXTMdeeA596y9nfgj5sB4SzzA3XBZmYzE1nDpFT9YhuPrqpHrRVc7kXZasrTifbmAHff4",
  "key9": "67R1tCZ1XyjL4JDvAbobL2vYFToN5WHYifxM94yeEtcR91wTAQjrPi53jeveK97Yj9XD2vacGZQFLSbKesXwoNXY",
  "key10": "66L4d7FDe7TMvSvefJhvDknxCBKcquyxp2BCT4Az9gNY9PYrW8nM4zJQDJvQKvzMuyxiqTCzDRrxZnfmmzoNZsfr",
  "key11": "3u7gHMoc9woYf6YP377193fRUjTpGCBsbzJaJnWoKYiqUUASktFMWxhHB1Ptoh9kR6K8jdB1xRAaNVZbYBzyVC5i",
  "key12": "u83HWBeuYqeYijDvtSBZtxS5BmAei6hwPbvxq3SFYqJFAczwgo6kmiGdKdkMpCLd4ySggCsfurQShtrFUsjyREY",
  "key13": "234J2buwTZtxtpLWDigpgmAa2WBgBATRccTFLRQ6hJqub5HmJCwWRxm1U5m9n9byZPh3BwkFfWKnD9fEoBtE86Pa",
  "key14": "29R7spmeKB3eCYPvh8E8nbYb28ohhiwpFv931QXg3GypThyzrTsQFFsaYHnNCw69W4MNVv5GHFTeshnMMApRdfyg",
  "key15": "4N8Fp1jkSpZCLn6uqdqWtz5xdy7UUe5DoWJKnyEPqu9nckawtuEGm5LJFNP7KcBwhyUtxVDVz88GXVKCe96KHtET",
  "key16": "5QmFfGBGUrxfzrYfQub7wuZzYCYUrjgrn9yNz7dSR4Hq143hg4aAsm5gd4nk277ccKJcUfFk5A26U12Tbf3Adtb5",
  "key17": "2gfAcfxNE7jQXumk74wP6yvxtbXwRUYSJ2ptbzaDwR6NzLbdWB565jSDp7nnFVnjXyMtfMqodmLNnQF58GJx3z2Q",
  "key18": "4QPF2s3RW1s7pGNfnUU6NDYjxe4xnC8sAzhk9GXzqjHKDXeUMMcMuH5EBVn5xwACYqoEoUhqybWitPn59cVpkAKt",
  "key19": "vFoi35TH8Ky2VYguWgVAd9eyACKcUVXLqVx8gjcT2LrK19VQ3hAdzNH35e5GvVMYZ9fFSgSnA9WBuWxqtQA4avj",
  "key20": "4pK69C4xFkGHzCjMPybum8J6PCeK64k6TwEfCBdAGWkwJLdnkXJz82Nh89V2Nvaic3a9qfsw79WRhZyJA19s2rG9",
  "key21": "61zp1psX45YdepVHgyPRq3QC5VHCZzrpV1vf2cdQmnGvAZeRzsF8SNKhcocra5Z2t2xgWVrN3SYat9NhLWBTDwBx",
  "key22": "3R8xtA1jWfWy5X2pvHtvzmAXmFD3kqngaTkQ31EfiYw5X1dS9X3kJpMDWK6pwtbC9cSb9uYRDYyJcc7cQMJa7Ak6",
  "key23": "3mrSQ6QLvLdGsxJG6wNEHEcCCK5xuh5CnpS5D5HE2XgdQoqNs9GbYq6hqJQRH4uKcrQepjvz1TAAyQwMsxH9ciF8",
  "key24": "U3GHP2t6pimGY8QmDhtfnvjcJtjmA1xJupQwMyuDeqeHHJuvyxY1ShVVyNAURe6eWhKPBTkVrVoEk1Zbzsm6vzR",
  "key25": "67mBi8cuRLfD11MVT1UKmm6ofWiwt74hCjSk6CguSb1iHRGKTnTg1VB6w7prEDXEJrLGQB617wyxDbkYXL5JgeVa",
  "key26": "224FBag74tiaqnSxawoMQNbAkRc5GCYe2bfejCgtfWGfPVu9bqtYumapn2RWYJRDbn1jvMD4VkMeG4a6fNjUgbTf",
  "key27": "5CrpbziDWTjY2nbL2mnNquwAwTomNK63epqGy9nPZXj73r5VcYoerTGNtKoKwTFDSxcZZ8W8Xn44zCKn8weipBeZ",
  "key28": "5BRUznpuohNfj5ZUmv2B9WZ4L11QAwTxGz69MWJ6Ec5yDaEHT6eRKDPTkVWRig89KwKSQscqRvpXgpYY6XCEXpLv",
  "key29": "4vSMBCFBUkwMgcZu3pDDcj4XjFPHumeRtjNuBokq8fNFa34fmhmuNRYZHYKjpguVkjA24QEx3LkzLd2ukzXJdXPp",
  "key30": "384tkv3aeRgdhQ2x1ofrs6S9U9ZvWErC17YY8fZMbBRgdkU1feDY6qkcAaXoWrKahFpzEZpnegCWW6fX172nYUvR",
  "key31": "519MbqjGJX998HZWuhtDoagFAoEenVahuggXynwHWk9XCnbspyrwdeMyn2GNzBmVhpvVqJxGE8SF8KXhqhKLnYpa",
  "key32": "5TWHoPCtrGjVWK1VTUynQLSbbWaTgVfDzQzo69X5qUHdVVmBAEJhi8NwqBCYLcqVKrXUbUaTXSTdhjp9sHpnr98b",
  "key33": "3EwXW4p9gCqgvPFcuzFvejJbiUkodbGa8Wet8MHw2kJGviZpZ2Dffy5A5fNvM88DNdCeTPT7NyCL5qikAif4YR3C",
  "key34": "yhjbvR4YSPavLEKTmkZMmDFryFTXPE2fJ4UCiHWsj5GAXbvQ6LSQFwfyTreiYQmphCjioTFPfXQ8V5pNByoyCEp",
  "key35": "uhqgrBnREHNAP4kKDBNiPhnr6qPVBqdDzxjunNruF9SAxjb5xwKuekbKkajWJhpir1FqagKs6uKoHPhyGv64XPd",
  "key36": "2sSSXEoyn3qHS5eW4dRGtKGS1sde2Hzdwqo79gRjqNUD5YMsAJ8ZoGtc9Msp64zwsVwfVHoX6fc3fBpAFZuAFHpX",
  "key37": "5oX81ovPuCiJtEd5WnHGizNum4x47ELdw1kQrdRrpxwhf2LVZGfZfH7tLrTnznhECJdEzRP7495uKuZJTqzUZoCv",
  "key38": "Byind1cuNMiJS7yXmB6PbqeYr5Z9tEivXR3CCjn6MWJjcwWGngoTKUmbCa1KpR8sqFa6dNBfdRZJZcBP4hWJ15d",
  "key39": "ymtUzKSJ96ruBffpZVyiXp1gDvnSqSn74V2p9LAGAv7yFmJU8E4MuxB11eMSLdDuQS3eqgyT7Lkz9ijUrHQG67o",
  "key40": "9Q3GTtYUwkSUwV2EHyenTG9PaaXX8b7evpxeea6fY7uZEvqMmyB6zKJMCgCvJ2sg2zsuJoC878wxBSmPdntCprF",
  "key41": "GGTiiLJ4pJEuTBu4ZfBJbjt4yskSZQqpUDwvgWipRDtfDpKaPiye9rgwyh2dumBHG71MUbKsLUcfyfBoDSTZ72V",
  "key42": "4aSfYRJfi4RHdnCXAvXgQS52JB9d5f4PYb7ttXyjWjEAGv44uFftqtS9JdJhKj76RsM7jfAcnnY4JuCybt7r74hJ",
  "key43": "qVYHWsok3TnLoigVXY7pFp7nxRzgBzN8y6Y8FTdFWMAhZxLU8us7iv47tRaUt3FgoyDEtzZr4bmrWRnCrqFA79s",
  "key44": "LpKGDcJ5nT4rMyWuUXvYJ4kdtE2rP1PzRQJgf41djCWZGDW8A3J82tKWseueQrRLJK8xod5yMe16tw64nU2byfe"
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
