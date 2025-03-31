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
    "3a5VBFpJTaxxPnJtUvxAhqjDZSKgqbCQcMMLDuWpqKUEMkNnNTT9Tq3t4n879KP58MUjSQFjLZ8aGUat89AceN5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bKyFG3nqtcpLN4fKw7RWJEudtfeVTU1UgL2HzsxWquYs7ifH2ss1aju97rhRp5KYp6q4NjPrFW7G3ATZXmYKgRT",
  "key1": "2rcSCzGT38QWh3Texq5BsGpMguKgMRzGf8mkMU87yt65ahJV3xRNmQAaDnYCxWJykaUbLgHxH7NpfgGyWy3LoLDF",
  "key2": "5Cs3W7wgZJv9AstzRV3wsRFJje74pRSA2Pr4ihk9NqTMftZY1YjvoYjxtuniDNpkXbXq3qsk9qWx8MYFwPKAA4Ff",
  "key3": "3R88kxrVs63vCogzszdLGj7JJU4C3sgCrkbY2LbyTR7tuQYuzatMmYRqik9tCTsT2XXYiv19TTsS9zWFqTded2B3",
  "key4": "4wtR1QorEEpnKra4hyZ4s1XjGEo8UhUSjwpYqYJuec3yyLjgfnFAgJAMMWk2eyakSHeQJSJ6ZrioA627JhTZ1m3F",
  "key5": "2h3uFUmJUYu1EZ7D35KQiFWTyQjSB523PC82Cxpk9o6ZinA3bj8aiPX12pXrWu5GA3mgibv1NVBu3Gj4GjvDkTat",
  "key6": "5CvppEkoMKWEC1KqtEgjkEFhB3rBstsvZfo1sAMxjvV1SkrcE1gTy1J1WRc5BidKb1f9J4u5FUXhapNvLNupKQf1",
  "key7": "2sQVCA2EGGgLdtC3eZeLfSt2xKo4LzB6dhwfw9veLGTAXPdbuaR1cWd8ifdvd1PeHL3ZxdLE5JwzLesMrg7Ef2bU",
  "key8": "5kPD6qti9RP6AeTwcXPfvWYC1FPjPTCX4Vj6jRQwWEz3E9yVz3NwJpgStWG2Qv4Qb65yRYeMcTHy6AYdyV24nQPE",
  "key9": "3SdiCxCRehd2bPCDUhoVMABaRuD4QgkJD4PqfmVQ1G29nnxogaUxVcZX98TqEL2TNLtyzB2RWuGcRHGoESbN6suP",
  "key10": "67kNLuNdXEp7MBxJqPixR4azxAYddAqqfz4n8gCPpPQyXAhwMVtHJWoufAmT8ryznC6qXNT4jpiyu7GeMwimyWWp",
  "key11": "61yz1iBxRps9Kc5msf4BRtTzZchjTiXxoB7PiXEvixLbq61vvBmEg774xQ3i9ZSLAysyTSjQzWhjQHoLKUJJLPsr",
  "key12": "2ZWbFn5owJBNQq4TSoTUvHDqhfrXb7ikitHy6aMgUA5GMstKeUAcuSgBaMPQa4tSm1MNoQDKunTJvnYV9rRpRD9c",
  "key13": "4RiTTxLrdWMrtxnRkkA4pX1ob7v54wPusXFpWpYLhA1TzR2EHfNH2R5kweZvQGt53MYrfNcNHVZopLJA3n6EYr1M",
  "key14": "93sS7nJFRajZKD3tEhpjtebYf4VayKE3myxKVac6ACAh6cbvvN8BUZWJMdfXb4YejbrEnMZwg1MJkrofjNJ3oed",
  "key15": "MYQ1nqdJvpd6GAuXBotz7UgEp4oBDadSVkD2FH52zRv1jETd2pot2bTuLVwX6Y8pfpGJ8Q4Zaa6SkyLiX3mnpXy",
  "key16": "3c2VZUmQDuEoeCXZ3PE8jG8GguAmFd9YzbGJS5yoXhZR7KreoM85SmDYnoEyGkvoCWhvPymx8eTdJEfcje34G7iX",
  "key17": "359TCHCH67x5eR1Xt54wkJrFxXDmcYW5wegqHsZkJ67U7t2egZQQTM8vNcYkWTeYi8B9iMf6dhkcvPn29xzSHYdM",
  "key18": "2jzF6gVhJeuJnNqr2z17Lk8JnCoPKe6kaWC6q1Q4zCKo9uz6m8k2GMxbHNwKtuBTiyH4ZAnde4yzcwmN6yZ6VU8a",
  "key19": "5LJAuJJFzAZV96Gk7CrrNoQA3Aw4GkY7SHGnqci2MbHLQFe2j3WEcvvNxy8tjGVRX8VWdmU7kW2YYUC2GcNhbgFM",
  "key20": "5KVeDXPbW1e9bbdMfxnh6RTGnW8qpoSEAE1E1rPtkqcHL2LGfGBcfYfoMmK9CBjbDR52jgD3merZoWEdsFQKzs3e",
  "key21": "2mCKeGbKoL9cSKFNPc87WZRbmGoLYNL6Cg3tcF2HNNDN5QAEW2oDv8C43LLmMNiN74jHS1ynmZPY19gBw9B7TV45",
  "key22": "w2ND14QnJAaEWzREGjsX39Rn1LZ15rE5MUFJ4W3M9BP4wJL9YBF2MhstzqxpWBUoYQpHHBYKBys8ztDcvoqsMqy",
  "key23": "5hHeDQuVBvz9NDkaALsaCie9CZkSbSyB3gqr8AkpzHjnS1f9YpMqpYoo1bE4L7DZ9TvAmiuc2mHrrEns6kCeVr6j",
  "key24": "4okumGs681e1L5XBcDyw8u9kifmPJCK5UZbitRdK33MPbwjDCsZ9bZKQEFRfZYatxVVzEofuPXawNayMVNsTZnbF",
  "key25": "3bV1jdjH2R51AJSJ82jzZppDh1vbexMxfDkSspwKVYK9UTRBFYGaaJ6Svkwp7DFYJ8x1Ux5k4kEjb8F7mBDPYnp7",
  "key26": "4Ds6cEnaDB1etNBo5wkvunjpAMFEeJp8HCfvX1rTFnNXvEtfXsvgUBBV3YSdWG5BG48GfxQ7znjFSZrZcpxZ577J",
  "key27": "5vHe22Ld5USYTDfyKbwt25ECiJGSTR68WpAyF2xEbWCw2JP96PZn3wYWjayD4WMi5zbvpJfqdEFjCvyMtV3XAdFD",
  "key28": "4GqtGEtvjhW4pnZakbrZBDeMga8HCShKLopb3tWf8zaopzUVqiKKPqkUeDPv58GaVadqi34QgR9vFeECDaLkGSry",
  "key29": "4THGREcDFsFEWWv6bg2CC9sz3ERpCWQw1JThky6x4avFiB3611pViRTnVrXqHpm3WksBrt4ifeGiwrqzMggt18SP",
  "key30": "4zSRnNmRTtV48XW6vL34cBM4T7hAfNSGXbyPNg3kSSm1NMb6TiRjNK7tavtQSwiPuftGsJqYGwL3biYjqCF9KBwm",
  "key31": "5z8NBBza4vwzp9M5zpHpLrhEPPotix5jo9yLZed5u58jQDiRcA13PArk7WbJjbmct7i4PFqP7nMa2Ad6CaFLBGH9",
  "key32": "4DEGCW7eGNMuqmLZvn9NeJdCMSfsW1jPv6FxVjrojemu7EL5axaTrCw71DRzFkm6DwRxZ31C1WHWSFvjdNzoy5A6",
  "key33": "3MK4wRKcfBccsWCPz4vv5yQeKha7oUn4egQv14gwKE2DXbTJv8ZWJMBbyMUcBqPPJYCCkQC2rwKyRyFN6VrZDhEc",
  "key34": "2aejVLtxUcUb1e7jTb5VNe5ZTCJrL4mTKK89oTP7ZDaDWrV73tzDf9GeFzUeguioBF4gHLD75kqZAVtAywZmCwK4",
  "key35": "2h2b8bsSBSqP6PBLbBDbrjBJQHebLxLjeESBTjCBB9Hqns2D2m3nkoV4HnqYoX2hBYQNgLbQVZaXQvAggdsfZuB6",
  "key36": "36hcVzY2JUiS6hESAbi9zQ8y8zVfR5Z5MPUv2rYo5GRh2mrNEvQhzVQsHb9WEPaKaFT5EJCrnUnmRfXwhA1K7wBm",
  "key37": "5u1R8nGoh9dfN7pdboQmTGVHFa7mqYrf6VQwtzby9kZMLMtzneYMQvNgCVKVD9nGm3g5YaC31WkohcHUDeoYY2Yo",
  "key38": "4M3nbknubi6uwHAdBbgT45RZKy7zM5YpJMwbdVQRkLK8QtBeZkUT7y9zVHhfLvTsQ7qdHYP29sj7DQNm3UDEuHGA",
  "key39": "4byuYbdNSuiodXYkJPjvr7e4UGhC4ffgVEJQgtoyTDnp1xYmpEeLWyB4QqXP3fKV31fnJgnziV8Yn2qFWfPkvSyc"
};
// KEYS_END


// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2aAg4HFiYwjFqa3s9dD9NkMGuoQR4xqucaGHt3GXygyQerzQyqzhdVimUfLadTpyG4dBrXw5dbKJzMdmagrpNeCZ",
  "decoyKey1": "2qGYYggnqP7xuvpSjheeH7d8xnqA6chDZtJ3Wut8y82Q9Sda7aVnFjbVoWMqK2bJWSHX5mK1uS6P3LU2zKmnyjx6",
  "decoyKey2": "FSiZdDYUhMio4SE29pkwvGXswwnp1pr8vuVZNyQm3QqCNiyTFsaWT4qTUaPnxvHUwaD2h8CC8GetwTdG1VPSthc",
  "decoyKey3": "xE6pcTuBSR2pxrXiNQLKZkAZs68BHV5mjuphbgmqTe9bwxGiSV8SHBeRZ4Zp1ZNkZmA4WHfzX22hWbLwesnhL7n",
  "decoyKey4": "5VgukLU3zcHC2AYnp9yQiWx3cMp4hApu1pzJkUa79mpPYP1cQAbB4g7zxwi9jeZLLskmXSF61wWFYKPVs5EnuYSB",
  "decoyKey5": "4UMcboXyebWhQBDiXAtmSFi3ZTbMRmvxxLTrdVzxrAxxBsRoREntXjc4j3pSGgiqJEnUgPaCR6RvxEtimXYEgsj1",
  "decoyKey6": "3Ca5yChXK92kAr7E26Fsr4QLccdYJsGk5jbtKw5ZH7zEwogZADjnZ2brVgvCVfLQhTqeMHXTRD4Tqgqv4u9WvyKn",
  "decoyKey7": "4ypDUkcGFK8tqQ9DQTNwgaAHuLYS9wg69MzoNstDmwwmWGPj92doPSo4rQfRE5xC1JLfFmDHCYyENd24PTSAvhrn",
  "decoyKey8": "2pPwTcZDYe13QcX6YXCXh8VSKjxfQokZfa1GHz29QkUDbENUHeZanKjRJMPTYe9LuAW3eVJBCZ2KwPBHrH82gU4U",
  "decoyKey9": "iCEw5tsMKvyTpyppa7UuuMhX6EqjuKruQPp1JRfz3YHDz9qeZQFhAgkBXK5bTDoqKEU7c4xDY22RxnXHbrepJSa",
  "decoyKey10": "3kpzD6xejjqnAVjm8qTDaHa94WfWgeRmk2RTkMxcq51Z3DSfjw4U21KNTkNcjUjcnkyVqcC6rRyjbDbnjiUAQ4xE",
  "decoyKey11": "3GMNPhdcLtBaCY4V32dqcojEZKoJpmtnMP1afbKV2ZgU865aea4ZMmG4UyBhkHKpBnsQLPuVKUjjPtCtuDJ2A5wT",
  "decoyKey12": "3YuGvieH3XPjHxqhCgvNDcV7poLMp9Le5cLRo68bh59hHopDHfyMPV4YVahswPMofP8itQvaMTz6kNhS8Z8rhtfT",
  "decoyKey13": "2B4QRsx47HiQANtsqqsP76SgBFQtaK6GyMvsN7XofKfgcU4voP9GxtKEpsSqGBdRXC1RVEAPTUMigscgQzSHXk84",
  "decoyKey14": "3we7v2cdZiZNiyQnUCSEfPQ4ptsvg8oP6yrQyzxpf6W8sXwJ4psWA91NYWmWY8qATxHHAATEisJRwnicxwtPTtJg",
  "decoyKey15": "3n37j2bHPCiazD7Kk9AcAHJfnefArvMgTFAAwQywRC9KTE2kXnpy2SzWc8hwFfgcvzqSoEb5s7uczk8U9aG8eEoZ",
  "decoyKey16": "5fjzCnf2LmWLGFBbsMeSYgHU1zhthxBzsSNGw7h2b7hkK3TUsTEWgFjUq3miYB3Rxf61msnF7a5pDrARf4DBcqyH",
  "decoyKey17": "4tzTHRoXdyUsfMEnV6vuaq96EGXtkoQtFXJRMc5Q5XhjNkWehWA34fBRxhvZCCLHJaicdotLT6nrK9UFJB928VJ5",
  "decoyKey18": "2puaPP89ddZUcvcMLryucaAHTsyQ53pcfPxZEF3WVBkR8F3qmmojSEtPWoeTMvy9nz864UNBDhsPL5Md43FXGytV",
  "decoyKey19": "5sBZn53SDE8chBNUvn9r1Wm7rankUt4mKQ1iwvqfxykFm9Crye8VoE42m2pSaSEvLwWRTRQEbVaePj93uExY11iu",
  "decoyKey20": "2wPAjpwVJ4kofyPCAn9d6TsLindWzkmsQ6XX4rsPebjmhSeg1wpqLQqAVGcdtqBpGja6iNwoxEus3SSADiCXeoBy",
  "decoyKey21": "2vrexyFkMn2Df8z4HZBNZjXB1XnCLkDeTEKA5CE7f18gZfGqR2JPsLyatkM8zj9n4Y2NJoGX5wFaMyVhVopTXzsU",
  "decoyKey22": "2e7SoP8bFMdi4PgbuedJxr8s76mUz9XPi2KH72oCkYJWMndADmepjSt3hisPJexpBzKQ6JvFyxhZm5k3u1bs6FEx",
  "decoyKey23": "5ZjttGDPVmiva9GoDdpUQSE7Fvri2N82yEJh6vbhwT32aJb1YSEhcJWXBjJR4qEh1qp4kGw9Wofro94TduUVtHfo",
  "decoyKey24": "2XL6GV5ztmKSzBkhfQE8fZ2ukrMteaQXDP2ZjP1mbjDad6sTuC7vsGBsMhwKZArvUmUvLicHbQa5GrXCSgWxLYWg",
  "decoyKey25": "2ShAihv9aZhcgv9ikcckyhZzCHkKhgXmxLyvZbzQmJkVZWayVfPZw1KHP9jpoSL6o8acDDT2yyatbii7PTjTyszZ",
  "decoyKey26": "5C3vfNTkfgQzzbySJcif8UsvhsDRVNhKUFZEv7YwpK7MPeHnQf96xjnqECY57DqbvGaEBW7ea2z9TTZVZQGJD7nw",
  "decoyKey27": "2UyZocKhQ7ubhqCh7dmUtNeHXrDbSHupKX9Pn14uJbuemywzQB7uQ7xAQPwPJLYvnivg4sprYJ9EPmTTdcA8sdcw",
  "decoyKey28": "MVTWFrAifuhPueHLZvD6u5LunWjb7BXZ991qA3juYY4cteLsT2jY2ZBLVx8ACVwz3TnsvpYEkuuSRdbBwnNX2AW",
  "decoyKey29": "3oqyWPdqZwsT4MURSpGsvijsMz66Uzo15tEN4LyhM29a7txXkDVQQKdrkQ7VsJvaN2k44oCogmkLttkSxdNPg3o9",
  "decoyKey30": "4EQebb7cSRZ87Z8U1cSzRfTyfNMbTvz7A3Et7oSWZfhuHJfcnWt4GLoNzHZ74WJnh1PGuoYvvGeNk79Qm1vV2W9V",
  "decoyKey31": "5Efdga37hmvBLNzqM8GsnHDds6ogqmsvjnX2hfo3x8S7tzhWQNv9uHFfnSmiFroHBSaX7Eh1KCwmLnDvvsXhztca",
  "decoyKey32": "5sK8aTiVowqzsnbmMuZpT9CvDwAqHDANDUjL8saY3nnn4TyUqboj9KB7wCgoxwGT1RKaycuprs5HeK8YnvntafW",
  "decoyKey33": "4xqjiABeDTGbvUmrG6kWev1K2MsRfQC6whP6JKpFoD6xqsm2JHwaXi1asACJmP4RVUYrKcHtqmcJDxQwcwibFhJc",
  "decoyKey34": "r7xKV3KJ1c2NmieKehjAx5zGGEKVcn1LbiDV6SXT83NvMgNhzDbUyNrFmfKjjE56bHzE2nDPHMaMA99Wpv9UF1g",
  "decoyKey35": "4YVoqxpSPLtVvsJ3qRZxsDtVjpqqGbBf8GH9WCY2SBA5PLVWuh8oQVuXcJnT5a1j41kkrTLHZppJ1X15gwuq5KDq",
  "decoyKey36": "36WrmS9qsWfzvBXeYNSe7rqp2NfuaAQdsHVcsT4LxKGGLy7NdNpw3E86szUCuAoke9EyBer5dL3AZUw9XZbsGpd7",
  "decoyKey37": "4UQwrV5eEkc7DdGwbPsVD5xFZLiubFGEBbw9bWbimpEBzD5ac6obr37ej31TVXGyGshU9dukvZEtzxsHG1mp8Fkf",
  "decoyKey38": "3A97g2TPJe8R5b19QPqsE331n1tCABriCiYkCMDZ2ZqjCpeGXXrsxgxBQprzcM6NgTaYk3AsKmT7KgZHcKruYbEZ",
  "decoyKey39": "5bDptNBL46yioWMgz4iBfiVyoULu2v8BPUvE6pG2pQ2iY8x4CXnutHbKamhqgJJGmqufJiENuwn45CXK5X6EhqBZ"
};
// DECOY_KEYS_END
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