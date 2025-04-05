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
    "q9TPM2q9Hi3QoSkDin22iMJvwMgVSqVz7Wmbtdrmi3ZZigehh3F87ie8xjKswcfc4wiTxYmjq5y9wpcEBAfCLHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RM5YxKoC1ZY99HPSxW5nwQ8JWgMmr3bskpXTCAeY15hGUyNb4qMeLxqE8EmhGwM3MYxvXwnbJJdbLUqSathQM1V",
  "key1": "7nvXxoHffxKHSkmGTzKTEmZmhCeR9B98jf6P9d1SfJaFYmv3qK371Rgf69Qm8XMxzMgmBX9NXZMV59ZE5LXsLgG",
  "key2": "443LwUHGgGhu3EhZ8Uu23bTPjvcC1tsXfNirVc2SjJ2YqNFb2tLnvqj8Cd2cMBcfmhLWHy56jiDKLSNWDEuSYzJE",
  "key3": "5kHWgAgFGfhvo3Hj96MdXoYqtuFXiPrfEbiMw8xXV1psVjiNenK6SYX2yJoMP7dX6GtWdQE6keiob67wQN7LLieF",
  "key4": "YmtGtwiSv7jXw3gbnWvm9CuWYQ2Hk3hTea1iimNZymD3udaYPCPELN5UFHKHnCZa4d1gMg7Z2AHQLLgvsZRXQ2m",
  "key5": "3v3oZKTnGcRvc7JPBViUSn1p5Ny6hFfzUydqHMfGnPg5KefiDy6sSQZZ4PjzHditjYp6VGaMf6GQttg22Bwb8gy8",
  "key6": "3WF9nyd4B7wCPTq7TdrN2GRniarjuAoU3qBs8EGyrQ4HZVmp8ixDj4KoJDGJg4RJeDtv9yG3tMTTc8LWetTTYa7K",
  "key7": "5NJyG7dqSLRb2Z1r1ti5GMPMsR7UzzC6CxCD2Tg2FTeZiuuTBrqxgDi3tq5WTEt8bn9ZJnHY5jpe55PzQbSKwBB4",
  "key8": "5xwpuMDJqZgqqddQhYFKfuZvEcoLK1FFsAZsuFUuHmWt6hvWeSbRehjwqLgduds8erSGMzmZNMiw3yQ67tb6dj2Y",
  "key9": "3susQovVG4pYbE6ZLZMe68MKPE1eXQjNnnQmVnn1P4EhPexNB6g17TPYBcFoFJJqnBJ8SR1dv9dWfD545n9Z389o",
  "key10": "4YnMe6XesbHHBtUMdu9zzXnKkAmdrG6VcrDPM1TGRabiq6U76dRRdK25b4daeEN1X9ZXZH1SY1836Vkhcke3Jk5d",
  "key11": "7BNBTpX3HgWvbyAuLuqnW8P2qziX8grG8cjjeapjXQGhyB3pwqiJfKLvdEPUzEJVYGHE14MmGZAZcwFg93p89K4",
  "key12": "536iMVBc9PBUpSgFjWKpy9dESXYu5rn9M9gnNuhbmHMjjBvx4cXRxB2KzDeDpzejaMgqMv6FmMmyyuFTGugesfpY",
  "key13": "CyiWWw7QvLhE4fbsBCsiugAhbLcKLLdS6nLK5Wrnd39PxyvMsToYSEYhU9KZB6RM8zzXiaYPdaVWouRTcAZt8f1",
  "key14": "439RyRqH9w4SkqG8edPVaZfGrfGz81cXHiWbCEFdawvVwxmDhCNqSfepVMaGyHgpaYGviWwn82zYBJiUKgiTpQaD",
  "key15": "3apwitKDwJHefgJZWSJXiaiQAY51zTW7jysewNnDGDzrEKLaTRVRqBuXK62dgyXv1TpgFYJr6CqmTeej1GoMNgLe",
  "key16": "2NV1GPcnMXcXJ4dEEgiVLf7HFdJbrGAohS5FbyhRrfUiptivALh9hTU6SJi3AzMQ8EzsGaG9xe4i7s2tpHNxWeM",
  "key17": "2v7w5vzFhDXV1Mpyjt1cVB2xHwsjE39PyvFXWVvuN7mXP13DsK7mFPoFEMicfzZb77qz7PXLkAubFJLbMKMzHAAU",
  "key18": "5mGg9aWuXuaBzgZmyAiGS6c3drwuHX8bwaFRDJkiqJhWj67SZMKmDxvJAYcQ8D7DH1VkQit2uPwcrrRwULrDB3Bj",
  "key19": "SJGBxnRsoypwVpc6Y4RW9DBzwRhnwZynzAmm5MuUat9Lvvc5pQ2iPvzYYxyFEb6khC1qsB1hynJzjrK2VB7B2Ld",
  "key20": "4ZyZUP8VTHSd49ugGxkwkLq8woX1TfJcAWJhm5XR64mEXGJXaTZ9fwzSB6MiN8BxFGuWfDgfYBsrf8jiGSrdfYNZ",
  "key21": "51Pr3YCn2bZm9GH7AzsgvSCuR6WWEvVuGDGXgxMdhBQBohUVyicsheP98EAZakdY93iJjLCEvBD9vbAeUVubvRGR",
  "key22": "2a6RpiRBGzhivgqQNxijKSH1k1gZLPRSbaKrwJToneQ57cdvp9sq7egaqnbfUWouGQv5HutnfzWaR2wevQFa3po3",
  "key23": "acy9B4vneNmMh39M66Zr93XYTV2gu3qu4LapQcZ79Qn56KByg5HUkwtueQjHkDKNaNC4HmjsinMmqw2Rptq1BMb",
  "key24": "5XSfeXJYaafPDYVtFwY7nydAP715oWr5ytZqwMR1nekPT2mmnyAbDQgBgZgoP9WnYXrTjBRPvTM7Vui5K8R3ktBD",
  "key25": "2osGPLHF7mAF3AfWzrZhSd74WTpJi4ii2jp6vboyRTAbMtmNx7C7vrgwmFfa9ofJ4EGqbaCMAX5Zm4F6yw6Xpxvt",
  "key26": "4mvpngjFGCC9hTfDJuJDriAJfGBc96BXUqcYt7fahsCdtApzyviik1BVuq4v9zXxqsqBsCGhFKVTCjVVzHWVBbcM",
  "key27": "ZnoAcTwKWz9aWDye9ignUWGGp5prAzHVGPzMNnKr3HESinm979yW5nK8CAwVW5kxsk9ctC9TYMTC5AJwqysDohj",
  "key28": "2AomfEPZHr6MJBGpQc47AkC1J7A32HSJcnm3h19CNze5xViARhQTokzSsrYq2Ciak9J9m4ESTnAan99z7j9k63y8",
  "key29": "2WGTibprmpbZU7o1RzbLDX2kc6VVAxam1GxXHoehEfJhEvdvqw1ag7jAsebjVVbwyx1rFVwTZAecUQAVSGfs5kRW",
  "key30": "2gPSQxDwjuNksyd2R6pdjKqGtAs4GSo8G9xnGi36SXTCY4rkgufuRBYNKVR6ifxg9F56fzvomyZgXRVxwwGmiaQ6",
  "key31": "LicNTrNmgZZKGkHTYWC62zHahgNeu5JhoAVMbeew2c27cUwpPmoAfNhwQrFNZjBZ3uw39BFJNHN9ZFChavNTiA4",
  "key32": "ASb7GuENwzuX1iMPVDzcKW19ZvzFbbuuupS6M4ZfvcK7NtfuZBwod3Pxd4HTWZBJDQZ8eKFJBU8YR39gakRUNma",
  "key33": "3cBJ28914EbJVKpXSxf4xVaeqwhoCRYexoeLt5gFAep3oPCKLgKRAdJ5bAGAtvAdJ9ENCN4YoibiQPCD8vsWGcWp",
  "key34": "5Kyi8HJF9dcQCAPLcsUjj2NHRqVteb8QTRPvt95YBdr7LiUVGkG72zDKUXmdcC31jxoLEVpL9EwxHSAkqHG7VJaa",
  "key35": "WrbFYoNuHwqxYyfJLGe14NUq3vCKrJPLdRymE6tJdJaisbwHqM3EnQTb3ENmLG1GtWdnqR97aHz77RnariVE9aB",
  "key36": "EzNhCZmporzQeC6wWpqAQxhDmhgvsVgCg4m6eqBp65t6JD6BxT9hNvx9HjoTP66KBGjJ78enyaCmPNS81GmgEtT",
  "key37": "5YasaZjnfgXGkfyK4rYHZSoKFAUsS4VBNZmvhuMaYvFSoM5EYF96gHzvoUeFRZQVjT2gfx1ofExh9NRKt8KmmTdx",
  "key38": "4eSmaRv3bK12SV6UdHgDQmMRVB4A5wkm97xW9QPTAWDDzhNM9m3CEGsmRQBwJPk4LzrW9uDMLNdjijZtj5aGZe3X",
  "key39": "2qqFpfV17sBBL5wux4V3myL5C7joY2fDCUg1r8ud2P9fNke7Qy9JbVwXv7kkVdnuWDmhkrH9EzqG5kSr5BsNQzKv",
  "key40": "3SFzB3QLdCVuVoLzEjUJaAPiM73qw7djE5E9mriQi2zbgXv79GHk99iKuJVAnmWGs7yzmA6raHg8YJUd6gsAsnnS",
  "key41": "3sCh6DpU4vWN85YqAuAw43sBa3w1iUb7aZVmyjpAFNtUBr33656aSRbpAUEFZzCTG8tcj4ULPwzcByzbcxdiveRc",
  "key42": "Fi2i1u5i4AoziYwF4QzeDepPAJVyvTtb6izYS2tJ43waCh6CoZwwy3MGwRUWCaAQJgfoUK6nMnjqFWd7DNCCN7D",
  "key43": "4WYzH8Bd7FSTFwKzmS98Rik1wKMGzfyw9wXDd4EPAhfLfMoQbBFGtngo1zH7E3Gx57fnwUUCDzBzAj6PgAHp4tVW",
  "key44": "2VBR88woBV3T4VPkMmi4qakmZREaw7JFqFbZdqZLqSsaUwJMwgoCR1AGk4YeqgWf5q8To9HvRr2dPNZPwxkQVX6n",
  "key45": "3qScwCW2BDSzb6uMHLHtDVU1cUtfdoiQ8zmX9J4aH3TPzFFQEf9DV5Lw4Wx16HGRvaLt53hfgoZA1p6gubx1KP6L"
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
