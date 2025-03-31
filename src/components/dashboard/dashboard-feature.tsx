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
    "x6zH45MJfJYZ5ErjzuZvMfg4hjs7RydUEDMdaEZ3FgzcFaPa2aGQdKjop5PJxbsabpsQhhT7s8bJR8Rb9tpucMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwQiXvZcyAqLJmQQvut3DFTCVo24NSv3arxeW2JnouET6oV1514DJZQ8SBMWkMH7Ys8ShQY5yqnSVTnjhqN7eLR",
  "key1": "4p8wzhT9tJZdBSM152uKCjNuThh9NUhPq7TSzLJUG5oDseuXwh466z2vaniBgdtWmpkEBgTmU5NSZzTraNzqi46c",
  "key2": "5MxsqtyUymieY3cYoEnitEgeadQqg8PW82yS3nKnRnWST65jFcnLECPTuhLYkXcxhFnStDwN2rmQ2yqdGMv3uPkf",
  "key3": "3yU6FioTmFZ467jVjDWLB6W2kpMVRTfPhQWi9BEYLB16HSXP5qsFUFEZwNLmyb3uHiPinckdh2zkWvgk162Vr6mF",
  "key4": "4RGRXdMDQZ2MrkYtwk6ukjj5zrwj1S2wnzmPcLUdGj7bfddwZ3Gjs3MRcRuBrXvzVUV93wyakcpK9Fm62Cyhcx5E",
  "key5": "4mUYbmoStN42qcabojaqQGEG7kSCfpVoe7uYZb3Nw96Xv8zGUh5wH1KfTQA5b9jaU2W52cz64XH3UoKbm9b1SxYC",
  "key6": "3GQBnUDKW4RW8YggEEmroEt3vVBJHhYXot7gPNfYXfaDCtj29aCzAqA3uAD2hLihAwbtTkHTFCheofn3yCQJXiVz",
  "key7": "2bKXJweVpQ9RakggZoBcHqZyeEwBhoNgrK3pCdPR2is3z62QhT6vnRnLt19NSDJGQLUPKHcyMbGkyowv89NTbGqq",
  "key8": "3PYPCeCqEWFARWtoczmK4E5DABDEx2RttPom8BJc4vmJUcUhgP7PJSWkCLG48AmbKALBZu8FruKMuUywNcQBDcSL",
  "key9": "56VVV5ZRg78gZn79RhLsStAvmdy6Sh6Wft9xNV7xez7HCKgGpcVeMPrrusC6ZMFFCdrrbGdzKQTjC7H8V3EHxPF4",
  "key10": "621DrwYiokKshJwtTojy9MZEr7JnWQ9fMU39As1gT5Pb2eJKSvri2mwdWNxkLNhuJegCAdvMqRYwbya4n5NJio2w",
  "key11": "6VWWgpL65owRUNV4189wqwsnTBVpUzrAXdTbakmNa2AGEWtWkQKnDjg6T9hTQAp3gJ1rfWWhbZXVvAPwUBZqF3J",
  "key12": "61eehxK1ocLJPPrYmC4ipvKjRF98hxRKAhzi1ic55ztnKes8ZWD3wJnucCNZLzX84pF7iffeNkGkeVfiucGVYWGo",
  "key13": "5pgRPYouMqrE8CpMExx8yt2ZTMqkMrZCFiqVxMj5rPaJNL9eMbL8FC2rHtCwALv529VVjaPw8Ht84unDzUpvwqRs",
  "key14": "3zMrDMH96ao8VpfndUdvyt6h1ghbqoQgPFBfKemBEYyXbzuU1SqJvi27aQDb7dY8pBuiBHDpg37AfTp1ULnTHmDb",
  "key15": "2AWR7PPepqxLpmJHwcE9FVeXDVTQfTzoUV9xHs7KtVRfio7UwTdZNAPuKmMmbRiigm2CMnk5UFyujm2Fv9zsFAU4",
  "key16": "YNvsCLdPxfBjYjiCaPP92DkkkJpwX88JK1nyfE48eDPp7YqqZEBgHzqHGaFKYFKSdkoKPSo6YUMh6HtrRBj3hZE",
  "key17": "396WDu7K6mUatWwp77WPHY2WjkuLqWZFXzt7eL8uMCCeRSvSfzT9hkPk7Gm7QYvPz3gwFZfiT6bKttxnLAdFPg9u",
  "key18": "m5kzuudZ3w6E118LVS6ywSPbooZixFUo8xiwGT8wL5GDaCJqm9kKPCpTiJPhSLjj6gM277f3kme7LjsZC1QBEso",
  "key19": "43KBd1iNK2j6tTQejdyucvnwTHuZgX28HWpbB597R1CR6SpoGzNZwXCZsd86xio65MwjTmrsvhApWgL6JLitW2ir",
  "key20": "4Nk78bsjwyp4zkNQrVKXtGk8baJqNJHuP4evABhDGs8VztA9NZysfkA14tgXdfoPvz7BGYVtnarVkjHEjGSALxTQ",
  "key21": "RAeN71ZQaNiGVWzqC2JVbFarB59UJ8ka7KiEsKRzZm4yshMoEBDJNAZUUjHTymGvbuq3ZrcUxx9skkRXWVE2CEY",
  "key22": "4L2GFGBydxPhZ3JdGAE9TkoWwAFwsRJguadip6mEGMemE48GFvn9RoMbqc1PrmHtD3Zon2GR5xnNuYWnQD4Lrsjd",
  "key23": "21Vs3EWYCcM28G4L84v9oci9Zv7rJ8HNUep2vUZVV8U6kicsHhUqu7TSxcvmM3fyNpA7F2Fqwo1egU6V2Ym2ceWx",
  "key24": "4ckt4YJ9Hh81uxqFyeG1YSh5kdzKFMnoL1vzh4HgzmwWEcX146As65GRyY3JPpwaEYNmin8H8g9v6Kf7t2juFwmw",
  "key25": "67L3X4yNfp55z1igwbfN9qmZRDi3AJcBSdwizRQQPL1pH6U2aFnn12B5ypY9RAYDnrnUhV9oQToDuN2ffqVf7GBR"
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
