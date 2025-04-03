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
    "4319675McC6J7rS1Ci4vy5rfEYA7RYWXHDtVkmZfHAxCyQZXAjjDzDmfN85zwu5z1Ar1PHn48nASHVsA45NgtNbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6KhyTiZUwAh9jwaX74iNKmg8DeLQfaiA7b9GexEUKZS2TWxY9Bhg4KWeVHJ1yNwLKK6ueQHhZnNBrzsL8382uk",
  "key1": "BWTQ89MvmEQswGwDQGkTVor28gg3WN6zQvcGVJzHY7pWY64tWhJC4UWxN3h5BYn285S2A9xaGBcZeJbKb8YxfJ2",
  "key2": "5Uvx31ZvSvZqsQaTFWuWzuc2583LbYVNR4cvzTyScAYwzV7is2t3bW5wP7fVqXG3cKPEzHmGf7DyYB2qbYxQUjYZ",
  "key3": "5BjwfmXL2ZUFaWLRrm3sSr5zg95WA1EXVM8ssBrHUvVEphLSEEtSuDEt6d3snnkGbMvP1BkGRx3mdYU6pL88ez9h",
  "key4": "3Gz7EbrV7GZznmw3co2Fq6z2koBp7fvMyAT7uH7Z196StevuF5anjvM1tGEEjivXGeCqknU1pvHhxfav3DGRAS3L",
  "key5": "3qRFxKfxNw88BiC75bFoL85B44vj1bVNxUoHfTzqficR454gHznSYVjiQbpLWs4PxxHGbxvWgxTpMtYcVoPzh8fm",
  "key6": "UPgsv6VUGT26RfgkUXqFT7sk9wtdw3eGFgM9FrBELoYBXkH6pJAggVynQLAvP12G4nsbBpCPL75mJAEXDMyM9yW",
  "key7": "2gELEUMhqHk14AT1V7ssPdSp7se5LGsMcR5uj9mzq71Eq4e9Hu5U5bBwkLGuzw1KdeFFJaYiGXLMKWe74LcyQdR6",
  "key8": "2tfAejqQUinMQA9a39UwZb3e46JfbwWzh67EuNrqp4igK4wkn1iLQApGpHCM3fi9rpdJrwAwn1UxyeY2PrGM8Q1m",
  "key9": "3ndRvrsiJ2uXtdTfQ4Ut5MjG6Vk6Ab7K213iNdzZBnvwPAH9ZjcbSnyU2WVNCy9dHDhFdGLFTVtCd3XJyzg6oePn",
  "key10": "4Qjoh7TiQVX8CcMgZJTwBSjqdZci5iRihUvJkP7gjvVrAWqZ4syXnwrVNU4LZGcXVg3kFNA2FwkNCXUEyDMH9Q34",
  "key11": "3hbPmcm1VPwZfDRiHWHHDWrfgGDCSRq9o2vZatQhYqCeFcedFh3zLcwsZZLeZZMUPe1zTSY3BcDwCKYJkG6wQ8Nw",
  "key12": "4SNNuN4TUj4xjQhApvKmGGEDofRAY7PtvWJxrQCz8jS7wGPNGfgkTPsvp5uC2MgaeoJUUf7wYTQxzL6hJLNRLy4V",
  "key13": "31FwqkTe5xJqW48ydvUAggLh9TFfupr8SXZqVXxSxpVWm7KsbWKuW7Dx4HxRFfvdcETngZCdc7AgggHTZQdtgpMS",
  "key14": "39pzUQ73srAbucL1FTB4M3ksY8hjhzEa9mwUZKch5mreBzQHNAGcQBwyP1zatpZYMDwHjr7mn2spmv9aWm59tKvE",
  "key15": "3zB8PApHr7KTbDHEVp76a7Jw9EAEnX2FyTuBY5GvpePMWXHC6TshJvdnXNVpS2DcS8JTCrKSq61uv8g6R3bC7zAu",
  "key16": "5JLpeBNgErTXto19ZkTcCst1AhZU8BHiQLi5tdSkGMYs6Uj8TMpT6s3TGGGpVt32XzR7KZyY7tkmmS5gbpiEdNaU",
  "key17": "5Heto2jqhkRRqEaiGyk7DNsLMiSYLu8jBSYbUSAL1i4ytKtFJeMkcBog6vfgzte4mV7fNgJsPPbeKLwkzp4c9Cbu",
  "key18": "5PwueHq7x75m9ZAs7SYs8bYVXKEjifZ1vFuDfAJrAQ2D23o6zqovZxrrsR1u6Dja1o2AGjNHndR3rjyhWu76Ssnu",
  "key19": "duYdJKTdB2WZQPPX6Wi3ezazJ7YycddvM3sBLan4f3qo29bPj52bJ7pQ3L8gZTiixa9YuVJctTRFuxWGrt3ogpW",
  "key20": "LUwYQfwZPKTZfSFT4ZcQZwYLQk1FR4tgsmYDJ6xyRb1Gu97D4A8EocBjLTNbEAqo7jETq1wv6FgL2Gsu4Ne1UvD",
  "key21": "ZxLDp66RFPqHNxfMDLhsGEHFEyPsGj1BLprc3cJj4L8N9upjpXRJ2NNPv2RuPMQfbV9Y9DMuBNV2ywNZYEwQsWb",
  "key22": "62FpLwU25XgebMZMJAK1PudSGcBBn3JGs2YUGJVj394x9BDjzfkBcZu37tiVc1Td5Vg4hEHJX1JYWBqgqN85SKnc",
  "key23": "4aPcABvZv8qxyRRRdK5JS9Q14ja6ijwwuGqxUxpP1sMm8PprmTGjNZXaf5eHwG9LB2CrhSXzVqBpZay3SNExgaJv",
  "key24": "2ypf2HpahG8AwQrUDyJtP2heRRGBWVuADAwnd9RfWDRdAh5coUR74bouwe1YT82vhLwWBgRvx1vyk94jqSt2A46K",
  "key25": "4oenrpfoiPDHSjkPdzmkXQTbw6hYemo2ktsc9fn8DNpMyXpe4fE4BWqdy9Xr6wjyvgDKanURMRJhuYvUApTuvgnZ",
  "key26": "4p14q4zkYUbvSvX4ocPFxHAjFKmufsNonNMcFEDB3vhvmSreQzsbGNJLbhNAmqxEPznjr912ZBkm5gnvUghA81AH",
  "key27": "455iUhFcNDSRVnwiWwJi826Yd3EoBgVu3mksAeUjdKGCBvXb58gv2Kv7jWUo6JLBGr4eSoNwKsR8iFht2bXiDF4M",
  "key28": "77uHFrYiwTsWhaANstNRTTuM12M2E5Fe14T3wkY6RMbe4nAxWaPXWYaqLdGcXpS5m6jRPMCr4dfZTRi5aXmsjFT",
  "key29": "3fnEavxoXnNhyQZHPHVuZzjvmTNsbXZoGjWiXwnQDRjmSBJEN9nKQF1L45jNGuxKSeX1jpTTgPTEwow4qY6i1UGL",
  "key30": "4bEipRQfiGmMqHXtJx3T3sPKS9Dnf4MsmwuBV2key81GL2WMEB8Be2aJwg1pxxwSj78g5D2AsaPZQqEJ7b7shiaR",
  "key31": "2rQAB4GEJCtPketzeD9Hq2h8fjb2thx6RQ7Wn3BjkmVHQ9dEEVbFTQ6kSbC8U2g4fNbbybRZfN8Kj1MpehdYHcMT",
  "key32": "2NnQsw1QgcTnrFF5M16ohSSxTd815Fk2P9Fn7j1Vo6XH4hqp4kbhZbqmSTJ5hswJ6DG1CQ8nM3ugwtijzifBfRYp",
  "key33": "59x68c4bLyAqkM6CCG4azPFh18FKwJCfC3mPM9FWbqeeHWkGcp7ecpwYmuifU2SqkB48ivtRdyCY6HbLuHzHMNgt",
  "key34": "USN6EBP59SwCR7qaPpksXrxbx6vHxKNaYhxEYP7fTP7LKft3VyMeC9dgJV8VapR3hQ1Ez1MrXZkKvaDMXKrYkjj",
  "key35": "bku5iW2xJWh6gTgxyF7mhqoWreypB1Uh5Hnx88DU4KSWPWqTN4x1ZGFUsiSopiGpY5zC9q3rezovC93rgNobGVY",
  "key36": "46V9ZJvUUgvRPoBaTH2wa54EUdwXR53Zwnw3KEWoe95t2FLKvqoTNSKVMorWa59xorH4r9qVPP3WSSj3g1479gxH",
  "key37": "3SP69ERWwSQTU4PBV1pey22D7237Ar4JJK4TBepR3NnMvxA2TaGsuF4RZ36PuTyiHU7ypwymPwFxuhZ9mAodB3em",
  "key38": "3Ttd9je9EdwAeV4YG7EdWVJEjtRVC8njYbvcWjV9uxCh8mbSQBtfKxMWp1tmfNVK8Qgv7JSjXu8zEVsGxLHFm4Ng",
  "key39": "2dHt8GCYgkpbGii9Rbw11DD6SdNjpYLuoV55L1eCo2fZMhEaszJuKZZSNHNociEjfvmEcqPcDkwxbBPgLudPrFa5",
  "key40": "2GEAXWZCjh33NBFL5vHpYynMCwsAejb2XPd8ms4u2sTmKfj6ur5VnaCksX6bSGesp22pprPLCSNeEvjjzF3pVaeu",
  "key41": "21KC2B7h3UXY4ga7k1QWBFunMxTi3KFSB3L2KNkYzgKGiBTcdVFBjs8j4BnQScYbvxDR64r8cK8qxNpupUzhAg5z",
  "key42": "3BTruucsS8hQRN6HJ7g3Gyy4g7vCCEZxLeuJCQcgYJAeTEsr87FJ7fWVCQo3PSuX2hzV1BcC4SEKL99WxpbF5oCx",
  "key43": "3v1BLVitxJgTpkPxzL7wMhoGAvcW4kU1jAFau6VgVJkm3n1z7q2GtG4gXo1rSNutKXsLyszZq4eJUDDB4jZmT5hF",
  "key44": "W7TFT58mDnUD4yNW13n669tHM5dau8R8FrskL9VB27crG4KRmqydmBcfQpeHV9RGUeKfMq6tn1GeQNEDrWxFHH3",
  "key45": "2yTykwcekYwg4LGseLGdekhYvAnGsv4wJwriNKYwn4dZ5RtX46npKdfMH9xtUnXJoAAwseGrTJ1EVdygcyuDpxGK",
  "key46": "4MAMSdK3dua2ntnuE8G761KsvcyT2JMyFvue4ww8kgQ6uktoidtmyQPw6iD61w88WtV5oyQZjqDcQkEXu92zKqtS"
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
