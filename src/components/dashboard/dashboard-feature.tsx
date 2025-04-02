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
    "53XmivTVHbfB1J3cHn23EnykADMVYznABGLR56JTQhFTxCFGLneNapGK1E8L9eg3dSYcJttUSkFZLgDGd783xAcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37E4SD58GaRXcYxk2iDVXfPtaKpJCnpDJuSVgsjVuKb5HPXs5zYUjCAYiXjPTWmQvEqB5f63kJMDk7H8i5Wg8CK6",
  "key1": "GxfVqJf78gsR978bXKEjafCQfpjMJejmnugQjPd1donf14tcUfGG6cyAbaaqBi2rb7mrhUG8fxRdZkfYAycwPUt",
  "key2": "3b4GShoJCDftJvE6bvfV4W3oneXemXswdyUtgBmsEJtzRZzm3tSrn5ELycg1AoWZTVfgtaNGtcY38w1ZKdpGeJfn",
  "key3": "4YmMVUkjUZF3xfnnVufUfMLZ2nwP37KKMyNxSoxE9zRMFG1j47AuYVpEtgU6DBbHDAULFYoxq5stSHWGfmxaZ8mr",
  "key4": "39DfwyMG9Utsa1J42u27CMzvjzF4KpwyrwQJRMc9FonBMDbPTp53Ptm3USZLBVaf9pzjX7NZVK92p1hy6J5VjDs1",
  "key5": "3Li3Niv9Eax5xo998XEuPnhqUr1k8Vbg8112CM6jyqmQvuiNDxytiAjTXhjVnAFXHEwPFCDyZtiwWHXDDJJnsQkE",
  "key6": "56C82cYR8Fc22hj8rNju2SCwn77EJASi92H6WU8rHBbjPXLfAkW2hp68SPbaaXozLgLzhDQcNfi3iaACq8D2ibUA",
  "key7": "4MJGTxDCebGMH1yicS216N6wKUeFewdW8a4hxNsPeCLRxrprG6p8RTmHMx7KNmP9q8qJFRkQnvxnN21Pn5VwDmco",
  "key8": "4oMVTCy5dhWbUaJuCwPxxqYhcFmVQYMy74yvCYh6BJA7o8HSQxWbkocmTicz3WRkSxfEbdxF8NV5yXuVe2m1SsYT",
  "key9": "5nHhmF34FXkwh7afTmoj2MPaHEpmXdAU6KMgMnmYiZU2zVPXevXtHyPxuYbSVF1jWp1uaJvud4ADwBRARW1siVn8",
  "key10": "479U4Kvs8CYxnDMKMZVc2cGU5Fn8sdXvhpfUv67pMWHtdCM67TNTuNgD1WKwa5W3aQneKdCxkxxAQEkD7AqbMNbW",
  "key11": "2268FenSeXxRMuUy8aWZMe57dTxNFuLgRwDUv9mjWcMkdZCVmGKNtSD1nc4Qcj2hZ1KAFAu5bgC2g3Rytb36ZoRA",
  "key12": "yGzN7gih3m5YU1Xxh2et5cPaJnpNvyLDrNqLbk1PxKF5htFck9BusPMgzFZertXSUjbrrYdpDeB3YhtCn5ERwjg",
  "key13": "3AvARJY6EZ96jbrDwfhW13nAJyCtiVTLzBm74myATsREV4vQzY9mP4bnHvyi3n2GJu9Favqxy5PXVRZKyoQjhnLg",
  "key14": "NDNmGR8HtGJ3EJkAUVGVVmcpsvSchGkk6vqeLzPNbZHhQgANG4dsxF2gWutQcvaqgd4AGTVwce2WdVXZ3WXBpZP",
  "key15": "2BAyMcjQ1KJX3DWr2JWR6arkYg5sxv2DSKSCzmedgjSQvHCyDpyZbGN8MLoeAU4eNXAGEg7qer4L1ebhX5XsV4pT",
  "key16": "yanGpKwa6xxcYYoMmTAjE8xa7FU8UHDturbfcpa5Nh6rtErd992ZdwiFZ8DV1K5j2cG2DnpDZcKbQffvPo8XfiB",
  "key17": "3kD5nThkrAJsJPyMjwXeaa3tY6W82TeRjFFXmSMU1Pugnvv5ncD83NvjecNzXeqQ42e3jTJhhunnAERuWmagTiDM",
  "key18": "3WV8NvW3HeVuaLUHJSzpXR9sDL1MAxgvvHuZzEV8jVLWzNRknN7C8nRdSWnaSC1RvhMqQUiCgAGFW9ugXKJstQWr",
  "key19": "4VqPcE1DjhRXZdrveVLzNWtMT4x9PdSgAxhKamES4ABGFu3DzQncJSF5gDeVecFAf79dX1V2ESXWFrccU288U8Sn",
  "key20": "5rKR3rMmvzUoPvqgBQaDM5bSVrAQvkqcYp4sDFG1JDx1RmAEJhrR6iVQUKomXEDTpTSDDdN6cNyXUGA4Y5aPhbmY",
  "key21": "3Gk87pB6uUpe73DTP1xRaNmmg3cxv2SnwSCPAxtxBGWbCQXGyc7EMfdD1WSLgBsvZDkTBjzaz3GZqfp3HgFDFt59",
  "key22": "5K4RXxHU9dAatcZv88cJPxgQtAA4k176fhwJqq8GpTBzdvwYyCUBa31cK9HfyjBC3Fc3LZRnARSN1ZKcfVL3SELF",
  "key23": "3TLnV3R4gFPoeEPRyBZcwV11TveGoaGRgNb6dsxKzUd2huUDKFYPEwHuiogYC4E9azn1dnfM7j8NtethWgn4sB78",
  "key24": "V5ERoeiQxV96TwaNNAyBrnTsaAx9fF7NbffiuZokd5am1HmQbmnJGmgRxUBaVfabZV4NwVVCu64EmDezrh5whxE",
  "key25": "3vBsqg7ojoqgv9omQ96gQt8oHi4mVokYGesHn8MieFSYTc5NWcPUGEHGn2p1whdXbkCTGPnRfrw7sQpU1RYMZeGt",
  "key26": "3fAW9jMsZTe1UUMFV4NcxWgGjTTVs7wgmX66mgtbmhuZgxBCahv1gEKptWwRUc7hYgPLXmiatxrs8RWEayJ8qg1a",
  "key27": "DUqEEMBSwvPDBe5EyVMNJUnS8xxEY63ZF2hRnuShaj5VbZP1JrFC9oK136o4TX5WBMGaeeYNpeBjRt1iUjYFZ8U",
  "key28": "5XMf3qLz8Yb3an15oymMgBduKg91NHTNmJae68bo3eruaUdaJru7MhQymqu4qQHNtuDs9Yjyh4etVwxJdoN7cT7E",
  "key29": "4RdEfiGqSTAcL22f8LdgqWRQp8Rg1Q8ybJryvUyA3LMF2SKZSEYvhSaRrJez35VnAKiKXaFEgJ87rXNjgvRa8mSJ",
  "key30": "enyUyBQyASo4f6Wyds3UpL19hjWfCuiCCB1vCYiM3ntfNxp1gYysoHpDDCoZ5sECbH8hsn4GLJXudy5BqT3Z48y",
  "key31": "2gU7ZBvxFDpzpN3TXQhuz9VezoKQeWbUkkrrrVyGMVMxia8dd93c9k6j9Wv79j4K2ZKnCvnqWvU4bMTVNY8gg2qf",
  "key32": "3x9Ta9SNjQtYRRcBRaUXCBTisFewcr34JVdg6qPfBA8n3mFX4HdavXn4ZiBSuCR4eDSSsUJuxpjrYuDEUEpMfYnf",
  "key33": "3p4d4F7aZNZ6LYPerMiviCZYbLhn6HA84ThU6bNAQWxQryMftgTvvGHGDJUWguspH1bffSKh2hu29gRuri1WxwY9",
  "key34": "TAraGpoNUe2SeeW7DKjs5iN3CVXz1FW63937ZBGrG4tumT6DqfXCSiUw5DaYArufgdMHVLhjujscTzWgCc9wskY",
  "key35": "2btT8Q84b2rBntU7AMFpzfoaDHrxd9wjmWPum57XoGmUD1pndQ6jbnStQdnnXHHvVC45aTQFKgAVkYBkRm4z4J4h"
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
