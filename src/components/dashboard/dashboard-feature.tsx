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
    "4Zyg1ata9ffm9eDPwbHyiLhpyN9VbtpAcV8zu56EziS5cfCg1YipVTu2u48Whzg4LvLtekgsc5g9hjf7AaoCekQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GuVPYx4hAMei92v87gc6qvgqGEQKgG6wAYJg45y3PY1E7G8XhdYaRTrdS7Eqmxk4mNX7MNU5VEVpDRqXqe6Loi6",
  "key1": "JjV8VDcLSbtyTSigRaaYcF67B4vuNtXxt254LsoNyWNoacQm5nHV5fnw89JX5mQyLg7WdCrGzykqBS2BaB7ey4F",
  "key2": "5Er2trWY4NivrEUNkbQ846maQ35xXt5bfF8z2Dxz42hQshV7CoMMxmDcvFsxSxPtQGfmHZDkKhAc4FDmJEJnWu8z",
  "key3": "4s65jRHVUNbgvDpePxiPnKTWatNyxCvFm5UYAGS3zsEz2bZRTZzdXinBLbGrrmZkZd3sqGScLZgRd7FFQNYMmt8K",
  "key4": "3Raq9gEVeyYKCfahhdJqkeBB7AJtW9shcqE6hmWZGSj1TZiUc36rKRZNuzMKJmPdYGxXuVNaoo3Xp7CD65PSxCh6",
  "key5": "3FNvkPd8sdUkc2DqD7J9ep3SunUiRXybMEB3V3BiCiYevUfFbkzstqpFeGLFAideALQf9qYuT7mHB3qvBcxytMCM",
  "key6": "zz21FRWKWaBTVcj8uMPhuW17SCYyccBGeYdYSZeq44kLsvsN1D7AQKDA17gqQcLV7TttgVULtD9T4MC46FygBSe",
  "key7": "3ng81Rc9BJLLxqpcMZP32HL5aRDGGGFxYXxmqyQvMBzAmZWP8iwf9pvrovqbYfVeyHHeNkDyC4wiKQxrUuS2cqyZ",
  "key8": "3JZMasiyekPJ8xKME96eLufC7SRBYahnvm9HakNPoJtQov1eMBsbcWYy5i12XTKreD6UYiQUBQpsXHkizvkf42bf",
  "key9": "4V6gNN9gcUi1qXbnZ6V3VYzpdU7dqymgvh8sHhaAuNKGxswswYE38HC8CCp9kyy77sG6atm7CQQn2AYDLCe86HUP",
  "key10": "53GKWPwyCe4gziFnQNNpUNpBL5G1vecR36eULFk7nsGjDUA1Z7FYRsSK5mgEGcvcawALmTE29JNH7WgV3QpAbU7D",
  "key11": "3F2gfvws8qgZb512uTpxsnTyCpcyGcEegNdk2mS58arY2twsJP1TU9sQrFe2PKhSEcwxSx3aDYv3ijMuxHdJUKj2",
  "key12": "3FihTfZtXe8fasanyJ6xG2zazhrkBYzzsuLXcBMvbjkaQ2unPvfLNR1R5pCBaysuVpmATzKbSxvYRsaoFVn5kv6",
  "key13": "3aqS4kEu3yZ3pCymxMDwfha26NQzL8Z9e3cRkLZNnUUBC5pZaPs8TTf8NtFQvQqiSYvH3aMx8Ld9JLEPcXLBSxho",
  "key14": "2Pzfsr9bBU4FjUFGaxREafzSS1sZpQvYv7YXVJi6z7rcKyqsm8wg4nTzSxTp8JRLbsMrbTc3JC4LPNbpkPfdJ6MG",
  "key15": "4Q7fBH3DMiVun94934mMqYMLHZv1GpCy6C1fxAeCUWWFM4CQkWVVmZQ46Wsq7DwhmRrAX69nxpHUQ8xdAUggThZe",
  "key16": "2nUSQyrZcQtDn33kGZDiaHiDRwbX3aksA7uCkWESQJeEHH7G64dJprYHXS4bvC3onGBpRiTk2SfEQi6rJUV5kxtR",
  "key17": "31kGZ99XBLMrP2TjgtUwduEwzL7mwm6G5dKmrViovFTgnNvjkoAywdeMRY4HN3dXgd3Cnm1Z8qh6FaoLC71eVDGR",
  "key18": "4pkR2CrQivqNZDHrAg7RuJyCBtyTN7UaFjEnGu2joMNcxRuDUh7dTgF17p1NKtWiw7ywmdYwLcHo8knLT6oMx12k",
  "key19": "5rwdGdX1xTkvYbdfrbiQBsxL78Av37CmBABFnWSPDZpDLu7KshyNLiVKviujn1ae1uGsNPxXZg9QE4fZPEPkvUnV",
  "key20": "3SajzH15djXfHoDkSAoxc5ShEkuwXzFSocWBEa6ztHATdXwGRoywYppm4SJ2hNvvvvPdWwZtoEUNbE86FZaPoi7b",
  "key21": "2NYXPwaicjFBzJwwNeLPdpP5j58kp3KKyyEA2qhXCPjj7JvyPhgjKFBXb8yMPovxmHNM2AJxE3n8GuFQcKFSGr7K",
  "key22": "4LwqTrZ5XpjD2jmkEbWEN1X6wWYDipxdbsX65NWfnpBjc9FiRqrrkRy27vjCXHHf2DbmcQ2x5m6L68mJ5WYXYNRg",
  "key23": "5RDm1uKmm5cni96AmFJkczsjWcH1KvR3xapLsRTw7UkyKNcGC5Mbc34Wcd4U5qexKrAiXvekenkKieeSmxf2tr1T",
  "key24": "23DVaGYGUKgW44nzbhG6iHRoN9YizEVZVdg2zGECaiuJdZVyLxcgaaQ5NwwhMAPak4GLGvrxa95fr9SJpxxxF7ap",
  "key25": "5T7VJUPWaFLJNxo7zGm1cN3kUL4QGqooNwnQoMzdmPVksrbV2YNBm1eecW1HGtjybkiVuqoapQqN4XGM9ScQFwxm",
  "key26": "2GQBcRjhWMA1xuv8nDhxVGiT4W3KXpx943heENMeqZqPhvJNoKKnVhkk4SDChGsG7XSmR8AtauEWGctL2cLBrAb4",
  "key27": "359mQUy152Km74xGCHViSDNrXShvcJsc8aUyr1uwQFoou98oNN4GmsQm9h98yZf3XfdkygbPwFU2Tqm2VvvjLd64",
  "key28": "3ieoA92roxDXVL51HFExUnrk9W8R8jPyMLBwskijaEzxinn4zkCUT4KW3vcKBDu1yVQ6HrQhWmU3LnMQ6rC6HK2P",
  "key29": "kKyr95coVEbEto7yDs7seW2m2yVKXa3nygNXLjtjqhLovcMym9ix9bRMUAXHaS9gZe8rvMSyDxNpfD7sZKdq1bK",
  "key30": "2aW3Kio9TzsLpRZ5tQvnW1hXomjgHLmP9TQ7LFmCDHW5pSsVUSdwDpNgo7XN1AdtFDmDSFMgVvCH9o9DGpLRHWqH",
  "key31": "4RFq29y1PB86Jav5b18FkNKrqj7x2bcFGS7aaNBALYrdLc61No6s9TL3Jon59eZDgdvoeaPbidQjdvQUdDayaSut",
  "key32": "3VpzG9J1zrqW4tqvyp2PfUWpzETkMoNkCmbRsb1x2aifi6UprdsjzA3rRc92BhYA1kuHJo5Sti4UxscEpcBs8yXM",
  "key33": "3VPWrVK5Q9o83kYnoF43dgcC9nwV5LggwMtnmzDjKUz5KVz9e82TxnhX6qdW3xnfxXsHjjwDo3CZ7WxjcdLyBbiC",
  "key34": "2QRZrPZPMepDKi55r3RM6B5kAJ6nhckHmeEQLZRzVL9zLHqxXSeXFey37dY129xC2gBjsgU9sTS5Nctk5uodpUKY",
  "key35": "4oMd5qG7pGdxChD4Nwpx4M9grTF9oBzEcLK453mWc2wEzDkVY77TWwtEwyi5WRu2b1u5DB1Ke9LzqFeqbcZpvNEQ",
  "key36": "4FtUsRYpRUxrd1XdxfjXvxiib2EPaSkMQcDS5hEkcmnk3u1xxE4TBfy39re1uREoUZc3QKG15mmBpd7aJPdDxijo",
  "key37": "5PoPoFe9nTHRhv7xVB2BcCjgByNa3CWEu9gHHXs8d4eaGGgvAFBc1Cr4pVqc4GJW2Ldodorzqs3DqBkzKsWsViaG",
  "key38": "4wg2JP2zLh2n5rjdQoabVY4BUp4as15uCoJCazjjwtXZqMf2HPA1waAaStzoZ75Pph1VgmQhQc15GsXmdVpstQP2",
  "key39": "2oNN3YJQbXKYHtwB8iJAwALsfpRyw3MnsHcdW38jxvLp82HaX8vk4o9uoVXAe2QPLCDW5dRn5ZaqUwLzPnBKXZgb",
  "key40": "2XJFCmAUWxWb2UWZTKYQPjB3Ybr8vMvZn7342DNaDqDnbWtMWPJbNXPgrC71atQnumjqVd6kwJ2zZh8wKp52pVpT",
  "key41": "4QwbV5AU2H8mnYHuosFqBXJu96meKN5Uv42athJEaf5aoGmxf6mE4ZwQZF5t1qLApRKZucaJTpTs137gxKrSfpru",
  "key42": "aonAzQQNVQJF5mmgTJr83nEXTKyi4fRKyFZ93qMsVVs5BRZFRqopWQu2MT7pstJxiW7tvEAj7SAcXaYjJzhe6fQ",
  "key43": "2bHfv5rEZVGXNjQks5WNQ8JJQWFqtdN5jdTosXA9cwECRhjo2d7k5xo3rvFgX8NwNiPTE9ssjx5jWzBoPMFxbLik",
  "key44": "2KjCQX7eCrPSknCix9h4q8zfNepZrxEtG2sipgrsxD6wQcceb9tq19dUkAyupWY6BpF4o3wYR2hop1xSdE9WmfjY",
  "key45": "5YmAnFM59mTkeRUxKbrvowwEL5YWevCCQMGGa1oMG4E2Q6dboF9DiAnx7kbgxQFCBfQ7L4U8ixfoFsoLzRspKaXN",
  "key46": "5RdvwnNBFxp1X1pttPPCJbir1atrPuWN7i29oewP3HpSQCpQhF9xmqQ3aUdhxJVBazgqHciuKdt7V4MdvD5o3pUq",
  "key47": "K6vqRkt1noQwSwWecUuADCGG7bpGjJfkfezkmFSotTpvvgfARRE9GpS9tYnxFfRKMsf7MGJZzUUwypwChX5d5An",
  "key48": "26XJYzrzVP2UgDyZVSwVuGwLbnHVegFgCSo4Lprg4BQDCdwmzCBTAekHDUr8UNiurzHGEJ6iXYQyqLR4LkDGp7Pr",
  "key49": "2YafhxEVCEMH9MP7s2CBLUuCRasgBh29TKyq8hJQbXkovHUwkmhNBBCsQ8TqPJyJznknYuKD7PvtsZUg7NJkQmwz"
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
