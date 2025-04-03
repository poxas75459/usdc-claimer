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
    "2vHpynPKQjvTBNwk2XVEqgY3gTkBWb9m72GgceY3wdf2nJxPBKN17n5RnqiWwurjUEWznBvt6HW8Pg9S5vq4aGJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Bfj4gcymvn8QuqmyFqFYhzNdNLWiiJWbi2PFzTZpBFoUMyzpHseSuNg8rV3B4Zi1AaB9b2pKUrXKJ677BrxV7V",
  "key1": "4x1zE1MrVmNPHKEZ1vooUcTaKTMZUQvpcSK5NZycT6jYh92E5dEhnud3QosxJByBKXKWMx97vXpYPvZakQrqCjsa",
  "key2": "2jB56WhpU5JhRDRgG9Zm9CUHwcxa61NnVvxHzg3nRciG9XkNfPBCSP9DGGGX8dmdeRxDoV6hcJaPgEjDtuUhLiDY",
  "key3": "59LwjMQhP1qWZLxdtV4xa8FYJPAErWfGwiTKDBpdA2BGb1pFT8zPvCDgUymWQyvQDUMb4aNAvB6YYz7pWxTcyrh3",
  "key4": "3NBdsGRACshciHWNnYSevG9zpvby4soXU9EMjJFz27huS2rbDaCdcYHMuMoVvBvzs9MVXFBb4vd1QecAnqUFbWFF",
  "key5": "35tsR5wsmhjcFWPTGzTR7VKJa5HUDEoWtH3uXZ2mAZMjigXDUfqZykh8u7AXkxD8ByQVQPkDjxHR3gQYzYH7mhhw",
  "key6": "swWSKqYyXvUw7retSFBJZbtuyGxoK3vF5mQmvSLpskDqwFGF4yvhwrVPYHiCGDWJZmhCQXYfyt756vC5tQfkYDu",
  "key7": "3sogxo8pqUUw1XM5ijLFEVkjt5x4b9hkQe9Fc7GTDusbgUv9q3Pe7kH3Mkvz3c6tpLiB7bhq2Tq7gC5bwaPqX33Z",
  "key8": "4vWHm4mpMNhb6BNr5SRbAz5dniap9Ntek7xQD4DMNKFMs3YpUWJsfcyYYybNQmXHDSK3N5GqEGe2vgCc3KxbxkLL",
  "key9": "43QdjFGrvahERTPXk1WWqVzY7oWxHdc9emSyhnaQGq5eukxuFYP7tqjb2JKYdnLas7ifx9umJtRbZpjFB5G1d7td",
  "key10": "3x2xoQEoYBz37qc1N9pjFseDSJrvVPnJFVei5HHDmfUkAU56JLqpEVVD6diW2sdD6riDPTQvA5iUqSiLDyVECTzH",
  "key11": "3XiA6hJDH49X8oHuRww4KvXyEQccbUKuLoh4DG7doGof5e2Jw2XNT1pqrjPFHAU46Jh35HoNfJgXYUHBfdUfoVZ2",
  "key12": "4jPpD8fR7Wtxfz6nVyH4MCYErx8a5eXn2KAxVLvFvPj4pMnXhAYL277ZzkFdgQF5hKWkPwPR46bf9joaxjRJnAco",
  "key13": "38XmeyCT532qU7RBRM5AKCnuLB1ypoz9ZyzTTnBo2QGt5bqaaF6Lax2pgrfPGNm6ge3pmz8gRKZkiDwkrFs45skd",
  "key14": "2M9foX7hq5KhufpgjXfRK96fAe2Hm9nvauLvhy6H9AyqDDs5X4zotRS6kchxNjQSoMu4zeakjtxvN5QxjWBZMQd3",
  "key15": "3hbELUUZnCXBjrTNtyiBaMo5ZppMHWZNvEsCETKKsyTWd7ePMYQ7oW57u9LqLvbB2ZZxaPgWCM7Xsbx1Cg8JP3c2",
  "key16": "5Qvps39E57iFbxfd3GDqFM1xxo2coLxYvS8UAwwzJLPabN7nCeve5LgVnW7N3XQ2hrhf6nSdBi2JqaUaWpRgMbby",
  "key17": "5ZxG2naHwQcF9q2LrDQ7STDUjRNaMPd9SndttQiKTxzTPsWbX1KGMQsTTutbn7F9j5sX39Qh9MDXvwxQHLiwzKZM",
  "key18": "2eSY72ivdYc4qWELyj5NTndNzUuuejJUFhRtbcS3UyiacLoutdKDRiXcnGahnKUZmnoJvzFpZ1jL3n5W3dVEHq4L",
  "key19": "5o4yeg2n5PPockvmRsNPrtQd9VpCWJh7VA5zWoSsyCwfDMAP5fqtnroHq7MJz66Vk5vEqjgBYVffCaG1m5231QBa",
  "key20": "3KY7gB1BPvtzHqRkLmFfPP95fqVxmpLRnf91aQUcPwZw58YXECE9Z6L8zTtvuLjA18mP9uWNrHdMtJY4FaUAf128",
  "key21": "62ZB2b9TzBskQHKFqVV29DbMMLWFCUPoncAsZfcLrUbdRvragrB18kJU3v5eTo75Qdg35KNqY7RKh5YyUWAEecP",
  "key22": "3yc4n63BQ4718ZGBxhLmNv2ut2E8uV3ZK7mTeerettbFX6vNXV5kSTjVENGSV68mhMEEdapYWYj3mPBNVmALdnWK",
  "key23": "2fGYTMwNHcbJECpEsoSWXH5R4f77ughiKLAzefJRdqhPdJRqmUR7KtGqPeJnh1fCBYq3XLwrpnH6FqUhUgiB1oqe",
  "key24": "43XeVkegPyp2ibzbEcXuELadnzoYpvohcYWMNTsh1eSChCuSkUVeXZM2b92SoE5MAtEtxqJHu5eohkrk8vUN1dtV",
  "key25": "4hePc3wTk55w3Fc3ygDShhSpbtbwi1UsnWaGLrUPH5u6GtTm7zyg7mngW2zWf8Ghsab92QGQ9GDeqKg3EgNT3kVi",
  "key26": "24ULKzCmMBLiDa3McajFDQQJkaU9pxKu1E46qQCLM237GAvJDjuBv9FavqyjdvvymR8MdJ4r6jLQUsLQK7asuwFd",
  "key27": "eaAgz4WphAh86BCJKKATSc8cHKxScirCTZZ2Kdn39auyWXJrfFagRZ4u8sgmvRS2Wk2Z1G4CVCPxy8PYT3RwNka",
  "key28": "3nat4GECfHfKJXNBKudt9gMCvCjJnr6Rb6R1fyDKQjahS92RN1vG43E83XfneJcozp8q43XcTFzjguhFqDRxha59",
  "key29": "2SBaiEs7VBMGDGhdtVadaza5NRJ3TcsAzhMixo77wxcsA9VPLWgWQoXTRJTVVRnuxi7UxRAQ78FbuEAccHHDedtJ",
  "key30": "5qag49LgT1cu8yru5FhfpjNPuKeWVQv9xEUEm2xPN9F8gGf9sRMNcYx9hNymbFse2UzUpqghg5daz7dDouyvU97v",
  "key31": "2WApi1YJpjgwG5JCUHoWV8q4sKwLGM4kKJAGyJqpC9kgFM3ZacGGs8fxorxQ34jU3kxTECrAEL2m4ygN5qXvfXw6",
  "key32": "9MiGGT8yoHnwB4xU2L4hCHB3EojqnhLHqUcQHGB5KU3EXT1H9ixm1Y1EfHeJqkGtY2csJ2EYeaEzbeA7DRQCtsH",
  "key33": "4vvtUqPU3bx2HGbK1fQznZ21qZcMmbfg114gGRbjvLkiqxmoYnQUoS7fNW3FQmstuJHXZ56Z2mNms9TEd4St6bVt",
  "key34": "3tD2SkAebwnGPxEKtkdbAzsUKWAZNzBTuWWrKciPaJefUoVYJJpx1Mmkv3rKimrZhbJWC6KFHkVUV5RLRtXsN2yV",
  "key35": "4gHaTmTtfDzZwW6MN5jhDUefbvZhaxBBbR2dNMpZuvENSBydPt18XJgBePdZ64zTMDtkfJEH2NER3ZMbZNiZUqb4",
  "key36": "2MGpsRnCeqd5qn4A4meHroRqjC22Q3Wq2ikHeNa4p8xU5h6nEVrvyGMqVJGeLpVxoAatipKbNKeTptY4Q1tLWUM3",
  "key37": "2oQpFN52iQ9UVc76jMDbAZ6Mz23v578TkdFEhPczVnoe4hv9XaVWv1focCY8GoBdsYkEUEhmyDernzggMnLAMJkr",
  "key38": "jQfgpnYgjsGSprXLvfTL2k2tpY5eC6HJHEKA2zZxZ2wtvqUMaSmAAeP7P99LcAnZkSLC75jBNiCdggRyqYqHjuX",
  "key39": "5EtzjhWBscPs3trusXspDZZGt7UpLwX7mNguN8MpEUSQtE7qMGGJqnF1UUTQfKZaZ3ggc2cqHXMG7LAnnecixkr1",
  "key40": "38hur3USWa8x7iawr3tTpESX6CyHrFVxxtKj9yS51JuTv2eM7szGfi1Gh91921x4AaTJghPrX67MfkQaMknFJLcd",
  "key41": "4M7ZPVHEiZXoR9sYQxRNaE7nEden9KotpxPZbRH17uMUGvqyRnGYPVZhvC7yjVThWmGJpbyRPggUBerMMFQc14U1",
  "key42": "2t3nVuWr9gSFGsgbQHmLi68vTxvcgRhXhZEUnUuZwXMZyf3iSMfkdQGq9WwbAqgiYiCzx5i6ehQ2xERJvzwLD4jc",
  "key43": "6UPH7Y6R32vCVVtber5ddgzVsbtvFwwDshS4VzbwoYYvL1iLuk1wHthzWvrYuUvhXN1bAcpQtH4aF6miZcYDV9C",
  "key44": "4hMYAPuAhXtyeqKfPfWQ3AhU4RHF9y7oFfhshYSjEu74HWh9m3b2uMyCGd1j8yUTuc8rdErXyXC57BBysxfn52Qf"
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
