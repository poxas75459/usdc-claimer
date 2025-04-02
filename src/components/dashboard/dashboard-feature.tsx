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
    "66bvxDdnSP7ohYtHPfWaxGciQGmwdkeNmXFDfcTdEYkTZUa34TA91QkN9kLfC1hdQJp1peMhPv7mpAkMfVTttoYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pu2RmbVsHYtwV1jshHUpDns2qSfDgw2Y6SkTyQFcBDGx4bybM3cXkn5tYH63MRx36JRhnw3KaVwoVDuLGsnSJee",
  "key1": "5rxpokYQn4dkfsZgdSYFumFYbZpn79kc78Rykc52VsrnRSRSWVeWv3YZE235qgY3PnwhqD2TWN2vNhN28vZtPWHq",
  "key2": "3X5Wg3euP56KGXUmvpNFAzqqpiW8qPdjJ1eSAEGLedyuhxPXJmBw5xS75LRyY1mZpMUsRCy9BVh1rjKGGCQSeDWy",
  "key3": "2HmuVeiLh58j73XMbPJ4T3Yk2YAa7ZqzCy4vTtdJGnCMRnz6pcE7M1QVmh4pD5Ry6C5vshQKfacg2tfs4Z6kJJ2t",
  "key4": "2PyPq2PfsEtnNskeQKwy6xp3vcywXTBVPswAnR3V1r9Q2Gzj463xXe2pCmNJZKBn9bkNRP1VRHoPpbQTPHfrqrMq",
  "key5": "2abqXWA5Dbj53ofRsun2ZC8H7vSkwAYrTHnJR7UEs6jpx3tdUKdrpDAGPf71FidFjBwrVJfDDMK8x2mPZdKjDKY",
  "key6": "3VqWALD4EK5uMVvRLgy8R4zYZ1SoaUx7a98PybM8BhBWc2XqUwTiozrojJvucs5biqaNmy11m8D2Zo3p8ZHVWfqW",
  "key7": "5GJy5sRWWhK675tnLu2aHiyQvntKGkMYY3C6uQDUw4fC2yRWBaDNQi4nXwnkEQp2szFchRbdqcBxsfFrrHAS9qPS",
  "key8": "33YXPgUhyYyV4edRpRSaP1rwzwr463hWdynWY4HkL358jWvwLsTFZDvBxLFyFn71MCPY8pYSbtYgYfubX3H9ZCLE",
  "key9": "3pvTkJet4ChUFczGeXX7H152E8re1XQYtcHSBwMUPECW4zEBVxTHW9cQDsbqt2CJZxJiKqozSk3qv2VJfXqsHNjQ",
  "key10": "3xKMpYGfAA6B3k99rfsZHJVMAXDHd8mXUdpgQDqJJLsmUbchwK4BPcTHM1AvydLniz9bTqTTRjbd5ySZYmScR3uN",
  "key11": "5FQNTaz1Wm9t45nLeLgYq4eCq2zfj6bVbCbk6U5oSPHfPFSGN3czqHyzboBYCoTxUz4ekG7nrEDAGyTgYMJYjrvs",
  "key12": "1rCaCdQJ1fuaofZFgRa2NTKXfwDhCxyQiCAtRoAbxPNtXDhGbHaekEVBVJQpStAst9wqqacbHv7SktopfvX2pcq",
  "key13": "4BfywyW884NkBNt4pSuZj6NgEpR1HGMW2rhNnYgVypRWx39E4PMKUHf8AnPLyabTtNdw3AN3RGyfQGTM2kwCHdzn",
  "key14": "2f83UCsRYL98YVxgemUkrod7zpZn8t6tD65JP15KVFW2f4iLuxKcYhohkNWt9C8Vkjkm8kDCtGXCwRiKLj9YFmFX",
  "key15": "2b4xkj24aLotqVzLEJqNq1BoYtvUM3CWuo2zKUk7QLFLvBjeeqnjWy9MZoPCd215Anxe3jfF91ggCCnytHyJeBYm",
  "key16": "5SdM6GBwwiD1DMZFsFQ5r7TnfihVrQqEgCZhewvQGmcVJFd7ZhK4Ergva7D977LbDydbQGShp8CBaU59RWk9B2pA",
  "key17": "4wczKewRJnj9AUMSFDHBXv1XCkwSFYJNRY5H2ivmhsf7UzZsDdtfshpYGpWFRcEYQvqXbWYY7khceoM3rwEjfRpU",
  "key18": "4mJBCCAc4w3sMzDGFLugoyjbQh1xhWqA8Q8y7EXvkh8orUbWm7rnByEVptEeZ4yE6N4b77TYwRNxE3L1UpUaYgAr",
  "key19": "27e3Qhjp57Jnpp8w3b3K727yowh2K4kELjdR3aDREMEVkaz5Mt72PrXGozFWPUYtU5uGoxyX9fqfJUtYzQNitm5x",
  "key20": "3mm4geSufP4LooUhouQs5ZERSJkuz8PfyL7zd8FuomgYLQvoepYRUD4XQL2BsboNifmMXVYfDm2GgN2aiTnjubYT",
  "key21": "4GqWC8HwovAqHMQPDGWC6jEN2uES6kTbxzQa529m2HycqsGEWUwYnd6QKvQzn8hXTp9vQesNHkZWnErDf496MFyX",
  "key22": "3Ua3KHKyv9rrtVfti1UDZcwyge62Di59JWZoNg1JDmevyVAT3FU3XuRteWrfRV7iHAJVhprLsL3jMSqMWL6uFxFF",
  "key23": "GhdnhJd3ntmPZ3NRhgAo8dr6f18tuWxke2YQuK18Ctit5nDHxWEpEyMvzxtJbR3uXte7zkz1haNzbBRjp6fiFMN",
  "key24": "4skHTZv7hY8WkudEa9FHaRLPdgSZgndkzrdGPyzJSUTrY2FHXk8EtDukLNbxjDYNdSYcQv21PuLGAhErjsyfkF4b",
  "key25": "2BpsRHo89vaVEEv2EYHDRFWFAXFtNDMDXKNwYipWnu4XTUYf2ppWyKvGk17aJoYZU5ECQxmyWmt9JqLnb1x4yZ8D",
  "key26": "5fmeDj9mnSUwZXGQGEW1rc76uUM5AdNjuhXBJZL8X6c3HF9U4cd1o7pbvpcv3c3MWXdbTDYHPJxhhf3CnpAYEKEZ",
  "key27": "oyoHMLYTuKyzrACsiAF5LsAU3f86yLzkSWXdER8AZW41B1W2XLkmiM92GkyoyBN2Xb56WLFwzf762ae7zeAeVgA",
  "key28": "3G7bTkUsQoN5T5SxxGtMKom6nBZR9h4dG9aMKNcj3diocAZT9oghk8N8D9fi35y8UigsrDeAHmT3NND8J7CLLWYC",
  "key29": "2NbWduLvqPsyGostpgqZv1TNzt4XzwSbry7eQJGxsjWCAeyi7Qrv7xo5dstJmNVsFux4iFjmKTaoy4exZgh6AEhM",
  "key30": "3jAifNdFG89reSQVkorXcjgLYJHpUuAyFGH9ieezbLF6ZYpB5T6KHMQy5rdVPAsmJDxu3MzA3X6fWXkoNSEMEnik",
  "key31": "5xwAGTRqyQvFB9qVpV7nUbbaS2Xv5N72ASBJiBPrU23sC5kVS7i71mYsN7gwHKUM6NrWoYMiV6a8UUVZ1t8pMyJ1",
  "key32": "3dDS9QUFiKbp8MyTEDVx34UUXMNzdDAX2kFoSDppq2mqMAVRTDpoE7xCdKFopY4Pk5rNaX72J5EoHLhmDUVkX7rX",
  "key33": "5VWR8Qrw3NvAu7W5t9ELN5SmkCCkjRmHps2CWsS9NkdL4z69srcgT8KAor5dKDm7BJLG6w73fVo7gjcvzMe7q5Kc",
  "key34": "4rhsRBEkBJBAoEauuJvTtnvsuCMMFEqGt6CVwnTEY8rT8SznQe2Tq99D9MnY6fit9qGGp3c5mDpAQBigTTGdbKp4",
  "key35": "9azMGNVu2T5zTpaet3JxTqTTXDzaqXBwYGgAZ7TCbGXpAy5EKZ2R3ge8E4sur77vUk835Ym1SpCpWuD7UMS39mG",
  "key36": "4oCK1Dg7PDt9AUTSBPvHQ8GL25hWugQFiZvrUFZnFeC2LmyW7jNov2K6HvrRjUZxfaJXZ4apdeqE8gH23D8Tf5UY",
  "key37": "62iynC4nmyKbVJTgmCBuzcu9N6A3EwrJfVmkCGdsrwNR1HHKdLfgUjewb9CkUFpF2JgpLTTP2zCDfCPVhAJ772tw",
  "key38": "54FGkEX4zXnJXuixPG2gkSE6gjKz96j5L6w1yKXto86SP8HWAxpHF4CcFqnB6N3od6DRaTdxh3yq22YQiJAv9X6L",
  "key39": "5U43ZTXKeibKzT2AFqnLGD27TpU7EKt7oWqmyCPoD1G7rfmFBwLXGJLBnzCiqvPRJHaWEtvkZ46Myn6PbHBqYtU8",
  "key40": "2HmizDQyvqPeb4sT4K15Q9HH2v2xNZKZS8usHypcUKj76YDmBMgvfuZ9wmbn36VcZAoxpfhCraw1trTNbQtJicGk"
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
