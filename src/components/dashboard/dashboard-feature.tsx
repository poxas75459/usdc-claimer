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
    "4Y6pGcDacor7AS58tk7i5rRiex88rCaR2fWvTWGAGDx6TS9SThDjgtV7XT8mKZURk1qD9HrjMeJiFKa6EfU8xKVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JAyEq7Rx7xfFUT1cT8sCEBnTDYdPBsHFP6HdiMr5oCxE8YvK6wQyBwoLmKeDX9CRY7DErKTNzJgk5AHHwQ14QDt",
  "key1": "ShwHoRWvuBmo64D4Zh2L9T1H77vQadvX7gUXtGM5Gw9Q7GB6cP2o8kEjsnukMV66KKJQY2q5iQmEevmPpxKWtNJ",
  "key2": "4iFWjh4phAiZk54SBsde6K6wi8eGx7fcFGrcxyhj6JAWmE3xVhbvg9vV66XHaiGGWq3Cp9hA4KGm9dMcDHfJ2frh",
  "key3": "5qLpXbsUEmmJnChBF3onZH22jRHvxCHHwezxs8e2io9TCfZXz55pGsAGEtkoYPUUQRkXzqr2FHXobMP4oWGn9YNA",
  "key4": "55HYxPzL9C5DwpyACjoix1bPukb6kbt4sbcj9GToXycFx7hfSXPPMtyyKJVm8WeRUWokXV9zncTreZsRc3kCPt6C",
  "key5": "WD7bA3UXshwNvz1adnSE7m5ZeKWSgHtSdufQNUH7c3FQfpkSvmtCB7KKCtnsZ4Yt5AhQW5PgumiuSWZJLoYvtKw",
  "key6": "2bcnucv2z1ix4JD38WnmyajQxhWW9gwHU1qqrd4QsvusnUisqMwVChvB7S6FKeA7ogaNoXRzKHgzXuWfYtQMBdUf",
  "key7": "3Urp9b1dbQjnGrwiu5fuCeH5ExH3wbzmSetP1kvaYVQBMswagCkBfeaRdVdQuxMttSVdTYVUbtGS8DneGHyHnnWU",
  "key8": "3dGYd6g2gq4Srzikw2iGQzWNQrEfUmcJnrLPBwwkJq89duSX1yNoCwMwnLg1baypRj1eJzY9Cq7H27mqpnoSrGZa",
  "key9": "5GBkYPLC3m7mQyeF823YK3YQT5spbZGrJbnEPZkwHTWer3Ppd48Y5C37hSQatMrPJbmMmui4qiF8Cetci5SGRQUM",
  "key10": "RZAA4AS4VGb8uVmnoGGAEEG65kM1sm9uSoEg5ogLMDRiJzEbg8zBsfzmRM46cAEkTqS8PNEigcijuRCmWUmfAk4",
  "key11": "4AwULqaiK6GVZfiFTpn71pRbPXNGaNKs5JKUJnSPfiKEBziwdRnhmkLm74zEEDCUYGBiymz8AmMWggxZ1dnxyEkf",
  "key12": "4EU3xvfDEPYwALeBsrac5JeWeoNJq8om2TU7MidNWCYVwYaKedLRUc2wSpAhRyJkWM9JHQ9XsE1VVYapwTpeUnFM",
  "key13": "5tRsxHstycDipwu2aEgptHiifuA8zouqYeXJyARAaTK2dmEnMwVn4VtWzZqKZKF53DRABz64smQ2SNhq2GgVYUss",
  "key14": "3E2fdozPG4XvwYveacwyUoJDK68aoeY5vHKDUQbTsPm5mGahrCP4LTusW8My2a574ewUqaB5DpGJeUuS73nXyL8w",
  "key15": "4yTzx6p5LVypELCBdGu5TToTv5nJ8gqyxU9PCcKgGSb9TeV1jamkMJGGJj3REz3TeByhpoFLuhXT4SFgkNwGpx5i",
  "key16": "5emwRixJSJVRgz8zU2R8oSN2c7PrZTSd1YSsS5Tyw3rkfQC83XUjhr6PcBqRJtU4689pZDa3KGWBUzmixas6X9NU",
  "key17": "2dFg77iSExe81gwzNMqhk1nFKDKSNwQteVvpb15SRAxhbtris1NigHEgokKi7yRke8MVVmLY2ksQ1AczcE2A1T3B",
  "key18": "4UYuCiMx5cXVv6zdTN9Dz6PPDzvN5Cn4eGNpTs3auZGaru2C3n2fRPNFGhoKYqWB2qZmD6xHbpfdDseBsafLsmzA",
  "key19": "4GNBpBGV1Xudf31YB19EdEbey2GqRSKiMyMx5Lj6uWQbq1mcCJxmPjYapMeaezHznDg2D4pwxUqxLxoihPf4HqDP",
  "key20": "g3MWUdE9fCdWqN5DKYpySRMwhYpxGwkrc8WhkNVCX3EXGmnANhFh5zukVLfkGd6qdveKZfFHUGcVLw43r6Sdx8a",
  "key21": "57JesE3fnSpsqeJCcaKfvMEUBBL6YzRz5WATpL8Qh9xdpWuM2R1BBJkVy14JojCWLPXviGe9xU13NsGPLsDH6FSg",
  "key22": "586x5zcA8TWyJU5Xi3ozKstUdDceJm7SEkSyfbiAoBnRCRCSsUWuv6RuAu8uVVWR1VdauPJTufFKYUA1eZVMRMCH",
  "key23": "58UaZHBfzS7CkdFrgLaS7zmuLawUUqZTTZ5NF3qJmMfKjTvLf831bEr6E5RVVH1TuGKg8xDXAm5bXqVJxvMzhiiV",
  "key24": "jyTF6QzcbVwLarsGQTQAVEY2zmmgEagMCiVwxTuxWf9c8Jqtxqw3S7v2JHPiqXC3mTzY22o7EUNrk6EszVtWzS5",
  "key25": "5Tk8yDnwkuktorpDwjkDhshKu7en1Pui3jEF6mXpAzbVTQxoYiV2F14Bhbc7UeezSYidtNtaTKyA9RiXsgtPTSeR",
  "key26": "2QyFaood2bfCeU4BSnLdzLaimzHEvZacXzEEPJC4caz5tPUtU4oqtV8Ss9cGzMFfe5fmnhf4HoomtqYvKp7fHuM5",
  "key27": "5ym7mGFZ9cze9N1aAnfGkEp72B9JAjUf2CjLhdJGDaFyZU5ZBPViz2dXMUw8U8QdmJrskGLScy2cazozd5Af7LDJ",
  "key28": "28EUWnQ36yEJKsduaYxZgEwW7gYJo6FZfVxUx5WKHCCZWkNqRMbUkE43SJrRW3c5eh7Wcy9NKU533w2rTkU9ANdF",
  "key29": "dPJYEUS3JAbyQ8yNBjzauiRZ8GJwPH1ByRmvL8Yy68hPMUN9j2inXFwKiaMV1J4xJ2hU4Q8iHhb3EokvGenYFNe",
  "key30": "4t9PzxBkRqDY9GFNMXyANeoHZtC3KTM9EkRSMp4Rm2mchryyjXFKE9LUkTg5H94APd2Z3juK6yz1tTQpQpS8UA9C",
  "key31": "25yE8FfkAPZg2gmo3WdGYLZFvXvpVXkx2jxp2nhToJuHFN1fAjwJ3pYcdcETjGZ7YgNoteQzrxShUpt9CvEKazy8",
  "key32": "36owGfSTJ6L8XFUbc83mogvGrMUG9ZsP4kvtAjmSpgXohhFAderjqz3iAe2Rpd5vfAnRd4S6rxUHJ4akfjbuC3F9",
  "key33": "5yPvU99KyFUhs2ncjGGQ1vcGah6horC73YrME3aVWNXyz7VKHNrrJ8cEskGdnmG4zGEASD1D5MU7XNFd7nmzgCgS",
  "key34": "2cdXwbeLdb4RNUb1Tz7EzwuNfpDC5qtphTVKZ3RAu5BArX6ixoSczH8C5x7BpG6h994hFkm1se1pXHrW5x5z6rou",
  "key35": "vUQRYZbQAAE8C3TrHuyJ4uwudugCYrVh1fQPXv5ACKAXof26wzAYLX2XXeth5PrSeLVL12Kpfok1JorFzRBTKXq",
  "key36": "4F1CiHKXpuKjA6jwwN1sr1Hw6m4roRndU5Y81bbPcHoWRarxG6Q6Br7y4LJiUjLvDuBWiztZ8BnEbpMnsm5QyPKB",
  "key37": "4qcN45gz9cBFJmFv4RNztQ7Taq2fhTPaqetGA1AJ2sPScosVm2F4ZUS4EkJYEYz2bEKwMFkeC43fP7xaxFk921N5"
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
