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
    "WcmEcohM9YZzo3BP1cYZ9qCqeZQRQNvHDaciZ8ujX8rn4rg5cCQU2Yo7ugCBP3VhjPmy78QCa6QhBvU5nqDaeqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X6QmQXFSPvmDP3Mv4dfV5HKVF3gvMXHc291FN9auLf9A46A1t8VtLZyxUsmu4M4GoJyVribNPSx1UgVauSAvAMT",
  "key1": "3DZg23Jh3XetEiX1rVzqdEovvufnC93Bf7vkatQTZ9QhnaBksW23MggTuW6YaUSFHMtycgmQSM4zwo6XV2rCFSy4",
  "key2": "3vhrbgDWgk3ALDuMkPVAygK2N7TUzLEwAxJtqqPj3YrSRzpQJA75BGf7YwBVdtRXnfKXn7yymAYcrjL98399DU6d",
  "key3": "41qUBw3PTYAbg6hZYbd6ArY3zvHyxhshw5EF71ZevXgwXP7RHX7EzTMRpdsevUFjDdhq9fpLm6ZoEt5of5TTo5QL",
  "key4": "3czqHWpwmVRWYSsJBzV1WYvW79jFPwQrGcpiKMHZRp7VvbefozpUYeRug5ZxzyKT5URCHLwEne4sUPe7PutC7LQ5",
  "key5": "QR4JKMVKxGej7PS2MoEaXZA3rTPzQFmo3fkqod2MHwwJcVSpUPjirrY4Hj2qAgE93V6uJCzbY11waoFmAmTA94F",
  "key6": "3jw4C2cATZRbbo9DPrfyqXg9sjPeXrMiKRLNjDsNuhgdFcy7gXpqLsC7bL9RCN3HSpTydmf8ic2oEsW5hbDM4EWB",
  "key7": "3pj4RVDYmgwbraJWAQ9z8SjtTmawNjktZxjeDNicUhHZvvSr58MKG9vWLGi69bK1Sc93ZxkzZP7XiHvH4WWPHyoo",
  "key8": "RxzcQoD6a1DryFhHnuMLtq5stkZjBocbDW1tcKB8LHkjzKZMGt3H6sm4KKUuqTFvSZB6vRYvLa1jxrYDD5c988p",
  "key9": "3hQ6gyfuW2L4adhjDc443P3tJTsMKB1n637gVDv4Ey3Gr6ayRNoA7ipHBbYnVSGcDysgk76XyqGUyLeqzeRhH8RS",
  "key10": "4rozAsow7sLk98ZEMjQhsC5f1t81LKzw6MLhhy7tj7GYPD63YZ3e27Lc96PJkfMCAXLiECS2ocEL9hxGTWNv5N3Q",
  "key11": "2LyN8kbKyfQfAg35kFyQThriSgnWAPHawPQnnAEuggQ8b1dopzDLThRwEzj8uBJnaoNyzyAWHZvC3rUdomzw8PwF",
  "key12": "5tS2Lta7zXAzLXEEJcVsZUhCQSLZkpBSqorjmTG8PkJLopAyFjS1RqQ9PWR7zU4fiv8qZxDY8MQoAcqfwrBU1hhJ",
  "key13": "2S339HY7fKVTKJGDDKUvoe6ed8M984GEUwuUW9kx9SfnQKyt3T7nS7TMkcAWvTuve3FQgv3Y3Th1vQg5e5J3MmH4",
  "key14": "2p3knU9yTFMcMXYkB2yGETS8nJN1nwVPvdVXtprgzM98Sm1zkiyho34LNJAaSrifRGmih7xjp1inNYgrxEYVPchE",
  "key15": "4G4eaRGX4hbngQ2zV2sP2cfLArHhJFy9xuGn3tyivgmeSB2MY9WFFcMxpyJU3snBUKqJN3t76r1rent87unxR3PF",
  "key16": "4YPMVJRC73dmMLH2DfN9qwWJWeDmSHQC1fdYQGEEygg33Xd5FE8qYJuBs9f8eFN3vSZEQmyYuHCRnNPGLghiLCq4",
  "key17": "673dFjBN4quHVqK8ruziSjeG4fP7ymgMcieyjbGCF1EJNLRfxMZGKsxd62NcCJUPAmkvZSMrMofEmSQErGXPrBHL",
  "key18": "7a1NJU5B53uLdac4ij5wU22zg6gTBFSxG96yZtshVy5LCt7QtQsd2cArqvG1YLYmF2CzFJD9jMcZ4HzEyuKPVbR",
  "key19": "3Po2sJj1YG514o2EZacMNVY6fexBjcbQm1RUdhChmfMskXofiRx6tAiFvWrg4ULqdjM4MXQ2wNXGULxTHopwJqBf",
  "key20": "2VBrQADDrLuFDmGhMFvVFuU1Qhybu3fPSZcP4inHGSXiqzu1bPMAUwaTkAoizdru1HvPQ67QHJzN8Qnecv5Sof48",
  "key21": "6kRgpErAdLao3AZSXGckHeD1DjnNMuBwqEUdzUKUodLRMhCsaYyPRoFfgdPfh5w6ajBH2hKAdvbJayHLTXs3EHr",
  "key22": "5nAatcqQA2zLY7ykhawcHa2yZv4uCWsXuUoZbKjPEYRmrmUNTf9XguCLCyvfBN9FtVKY5GpgjKcyWkp12ATcurpg",
  "key23": "3HSY6TKNvbvbJcju9rmHWjxJrBoANHASoaSHXQGTEGgtS6EuQQ7zqFivwjEmBB4zu5C7ZDYJEQtsMZUMXDRUYqAx",
  "key24": "4ekMRWZdCG9njRwG2xSRZA3xAaiGvpeBo6ySSFyK2dYRdHfEgUxNCg7RnXeiCzbEir9gW4PqV8q6zjvFRfjWrvn1",
  "key25": "2JnZG44Nq3qyFBwWCKiEW9epndMFyit9UNp1xuGfi77M8bYQUnKaM5JyMqm1PbBMcjHWwnuNXkcqMRVBPN5gdFZu",
  "key26": "2NyhbCwqn33Pg6uhmd7AEypzn8pSjX5g3Hz3Jk7Gv9WyrtQ2sKCtyNUuuqrESJj1ZF3biZUdcZsi2gf4b3tL3VbD",
  "key27": "2omvp9JrUdsSkcdYDutMUXGQFeMa33tjTdKCd5Z4bqXs4LXZdGGMQN8PYQ2xRSwhVvESLJ85xBr8ezEiaPRpzsTe",
  "key28": "3SvL4QtpF4dSpXF8the6KzzxB53XkLUjdkFCwCsEgGLouMPELiYvx9NsjZGWuoE5RWkW4BnjEeMyAenre3UrXWfL",
  "key29": "38f8fnDavcqiqwoT5tdF4pWxogqqgPsqYCyTvk9ihVBNAaBARNgqHBEaXvFU7yydn8Qr8KfE6AQVe1ketYTLmTB1",
  "key30": "5nFeoowg5Cx6xqoGiRsHVw4RpvkpsfB9UboAnGa6QhN1UTNRHCVSi7dEeZ1BxoyXkcA6c9dvSbzFq4wkXWbCpML6",
  "key31": "4aBCq33egas3red7vamCTVsweN8Lhyxkqbcoax7z5GisyBD8L1k5EH5pbnNoPEmMjHN97W93ciQtaM4inup951r9",
  "key32": "3Lh7ftwDqBa2388Y5Av7UVZiiFLPqYaGdHQvGGuvaQebv7afk2EiwazxH2mmUZrzD5krbjazCm1dbwR9QhnsRnpC",
  "key33": "67bqKvqpQmAXQNLwzJbK4ZJsjJYJV1yZEEL9QuAUeVdZW23icf9WAKVQzoRsxzPMcKwR24jNfD23VDiDxbhMTtXs",
  "key34": "4P4N8Ubh2kXGr6RKTgZBw2yJCGJhxHXKU3PEtNi7hNV8qqTbJCBg1bkZGwUzVMRRjLRysWFn9v5psno326ysFbZk",
  "key35": "5Q4BUf7FK54VhjtyaJUbXWGb1K8Rz1UcE2o57xDTBZxJTpDpMdWWupKCvNwKHmDvp1ZEWc7NtijA6vff9k6NrKDC",
  "key36": "3Zvg9TLBbYJFFeFK2WjdVfdMxGEF8zn4coRDR4efnTiytiUdtcmg4x5o3XnAsu2ChwNVofTtyrhsnbvYHJwhzddR",
  "key37": "xE2h4kN3emoCDnxMCFoPCUkaYUeEC7ni8fYVJksmoyHRLX7Lx2j91yoAhcTgJi3RLwtB4SBfhWw1CPomV4xH5oe",
  "key38": "DjM4Z5jwqXEWxuRTbzmk4hvvGWbbHFhShWkuDPP8RSouvYni2gDp8uUH8Lmf3BQP3ULnhL7DxtmJsHpxp5UbVd2",
  "key39": "GMgFgR5BSW94D1SoXN6V8eM2DcxH7dRF5819QdzmgG2SaR7TFmf2PKDhNcCKeahZTFCfHTrJDqkgBoxTEvkk4PJ",
  "key40": "aTMRTL1gjfDzhkpxjnqooLejVi43QurjJLbh22p5MHYxoNbEDZCFVDWbuKAjCAMPdNLVNt5GkphvLxHxKb2QjKZ",
  "key41": "3gxogfmeXBLjBpaTKw55LmHdYSiFKj31WT5WuZJJYHZC7mwtjK6JP7eZHywpBdfGCiMcrvzwNo3ev6gqMJfiDtMk",
  "key42": "33KuDQ5FQDAEThAaqqvXohJHBLazrTVrtzsAFPYofY4suthKYBuvNR848U9At4tXxnZe5MYt52d2qXRG9MT9TMqr",
  "key43": "2CsPdzdw7Pbv9rYWMs7FZnaEy9Eh6VFPzSUWMnoLkWcyeqSSwwWRzPjQMNjQLA6C7FzAURamE9orpKMd7zW5K62L",
  "key44": "wtfynNMQBY1Mw8Nap5uYac7wcFqefL9xwCnTehBisosVqrdX6xDHJR1wQXjsayjRYpGvmnYsDebnDEHfCuY9rMr",
  "key45": "3H3GLfyt5Z1PUQPLCUm3KBvesbgdG1nrg1Zm9dHQ1JqhzTXfNYwUL7FhA4YgR9pDViMPfGX4FaSzoXUsFts2AQbC",
  "key46": "3phgr53nAXRF2ktbnQ8spKzWPUyGTTXU5LcWxCDwM1ePYU5fwV2MgeXgZsVYDbydbZRDicCrZc2xVknCegeBwh5m",
  "key47": "32GgYE7tVDYTAjdPaoseSMsUjENGQr4fbPWRuSy1sQZJK4pk3uiB3q6vgaWMh5zmZJg9Uz1QwPQBo8zZq3eA6UfP",
  "key48": "3Q6vMzqsmuakrpabf98sLh4cv1xHNGhN2muQAJ1aPK7zpjwbZyWe7VqdKuebTfXmUcs6EuwsCERo6HDj1HFwzNpq"
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
