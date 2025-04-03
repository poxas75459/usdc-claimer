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
    "4yeRakiNLq6gmcJpEHpbdMPLkthj16arfn1KPDiwqYWcC2pPrMK2s1YgvRNzV29ajgqU9FoWR1MCwkPuUNnzfwny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mk1KzDKs2pFF4odi9aFWM7fyegf32bKx7QuL9iuKvZDvkAwHDbMzbG271soWqYo9zQzhWn4oCjvYgWuDx1JhbZ",
  "key1": "2xDnH8AWGHWEDfaYXn5UGGDGZsbP9aBBJj3SQargwMgJS3b45oxuiU6e5B7rijCwGr5qc31kcmRzU4uGL1HLvgzR",
  "key2": "jQXFgsTG1ijBGqmGYE5tBDtjw4Bz1MjatoWLuo6eAHcCo9A3bfWsQih28Bq781LzPGzaHVKXF2q9n3dEjX3zx6L",
  "key3": "2Vttm2pb4yeagxjP5YmC59B5aHBahouXAGJ32P8KmH7sBfVHDgS4fo8WDc5BvrfDFA5ZUZ5PtYyQhCdC6EQCDhWG",
  "key4": "4eJNGEQ4dN8ob5iRh6dFTQ9LyvrHwR9ud2J19RwhiNVguYS5WG4F5nEdgBYVM4ETWCcKzLFEtYtPZNgFDjSaoscA",
  "key5": "4YKHrY9KW24PruWFpzJPLB3Q9j6uPvQRrfyu1QFmQhiL5r28m3RNYXA8baMkE2MfWQvsnz3WJd6GoRAVjDNKdMFu",
  "key6": "4Kt6CjqZpmtTf2eAeQDAcWVnDk7AVmau4SZHwMDtCyxvP1E9zB1mKun6gi3b4Em7bcaWByVTvJ88BhLUWTSKyKS6",
  "key7": "2vSPjRpZCysxKgaY8nX1CLSHMWUPHfjPDKtAoScBsD7DA5rF68zJj2dUtYWenPULpE9oeoFjF3sZvPx9xqMJywZR",
  "key8": "34gqb9f1RrvUCCwiQJ7covt7C9Rut5SD1JWzNFmRsQMg95bxFcd9rt3JpdQ5D3WaUED7aZdDHZiBGSgYuxgmkWCR",
  "key9": "5zEpq3f7pQkVTVUmQ2UFyNZHQPnYV9m9nJsD7vFwXEc9PvxJbEvTyo58aBQwSUzTANdJeu7SsyyLVKYX3LB8SHJw",
  "key10": "kfv2mhPZZJcSdCHzwyxJu8V9etz2ADkUpuNssSvKDqW9zG8crmuk6w86S8imNhLVAQ69bMLqHSzp4qhuJPAUCHQ",
  "key11": "oXfTBJyHs7o632C24HmrXSba2r1UECfWURQck84Gh5AG2RvVhJY4UJsdWMMZWTZQmhmhcksvDjd3fsHhnncxDgn",
  "key12": "2ySiTSCHSwTvTqs9DMcSYayoQJsMExDC5FbLTPp8akvwTwjUVFPSekSs8yWCnPiCpn7ECpXvetHCqBPFoTB5o6Le",
  "key13": "5N2NVcwDeR1Sxs9YgsCMVeF68KBiXdMtsy7AL2j7xb55sYakT1Nsr9GoJ2sjP96wPwjvxo3173CK5dZ7opfnHwYL",
  "key14": "VcoaatKj6czvAJv55CWbbLCSUVNnSVVLb6pmdxoBTuJEk34vSDYfcuy4ztn5dTBwQSkeEZaNAvdogwVEr5C4HrE",
  "key15": "5aQ9yMMrz35RCuT2U1n9aQQfsDJSER6rwNrAbsYc2X3ihGwEVXA7V4B779fPVJWdcogRzQbXJsUxWqabjPVYaJ6x",
  "key16": "4hTcZpXf4hjhifeumapnoNbNQcW15NFEUe3qnRuDvWLHaNTTr3HzkeoijTXBjnsuivM6evCTAvz25KxXrf3FcHbi",
  "key17": "48XDrK3Vhf1WC4jvXF3WnvG52prXNsGbDLPnbgStkzNhFHRatB6SG5NGadw22EXDEbYTWoHUtV9UusFAkdadU19W",
  "key18": "61o7Dbd3LPQYnbMRU1bhEjc55GqFzWYZ3ZnyGioqhJSVgvohTQpJar9YPE3tZRnhtYazL9FhXJWHnfxDqNXKncxA",
  "key19": "5kfSkWcYDk3UXTvPjxPBGkxvePaDTf88jBVjFoHKkAonnUEmWdNHHa1YuAnnSNUGpRMphwsj6C98gCEVYN6ENdvE",
  "key20": "3kaBkvR9BPpsaz3gMSpTTR83ntzzm8nmk6U9ALjZ2bwqZKX8R2ZHBonWoRsRK88NvaJ6KXFq75jj537qgp2L9Qtf",
  "key21": "4NGJntqSXKvGfoeFiTfkvyvu8v3r8ZELbXHsB6xquJwAcHjHiPhkUb9tmBdjQP8ZzUESWDUUBHcHG1mToSmdCm14",
  "key22": "58DU1jW6kGBG4qMoa8Lay2z4KRtA4V4Zmupys3kXvLwKRSqokm2jhnM44HmMdgny2Hwdw3fYbgBjmWdGUAqkX12t",
  "key23": "2zsuKj1MgERBLmXvWSigGqZiHjiSN1z1bukFsuZhcsreQm3YmuKsp6tznXFdno83ECsjPXcnM8hxFk3bRX4jP1SP",
  "key24": "2VfcbMpBX1JxMuBfbzsiMTLn9uXhCmegvDKTUxZKT7GN8iddhK3ZzAKXd5DhcPfqQWJm1SuwchX2QxjfJr3VXwp7",
  "key25": "5maRcnjCjTCdzwLeDS9ke3z5YsvdLTauUSgjYyxKggjTVkbfjHt8PRm1TVn7RMLajdcnde9y5B2pWSgTpp3h642q",
  "key26": "2vZnQGJk1bXNq4V6QZvSFbTisg5uRcHREee1fSBNqxYzzGkCajrfmLgswpmSVzipgWLD8axE6UNt2nYzhBrQp4W7",
  "key27": "3doLjij8x9CXHf9JzEf4CfV265Dx2rMimUC4etEbqiQdeW9MqbiYfJjK5Wz9REbVC5qCChoaqXDFyCAucRhod1Hr",
  "key28": "54qt1XW6EtRuER8deE4Uj6BcYjjo7pTaob1c1aVUNQHEBetTZnuKChgBria1UP3DdHykwvPUmpUny1Kvbh39ZPrv",
  "key29": "3dzrNt7mAEAeyFkvARhp3yHJWLW54q8NzWAqu7vawjiQfq3Wp7KGcAVaw2tDSR66R4MqVamxuvGRDP4uopknDMjm",
  "key30": "3aYso2oxsQ3uPDxRomLqezLoU3gJRrfDmrBmk2kTDPzFA3FUmwDgZLV5SBERHvKkpzt4ueRQiTkNTkZVUiv9RHE2",
  "key31": "21HJCAAWcDs9YatntMDpMbRPEHKDPzSKjvdqLPSBfUqTvjVQwxMKrqCKCrpMKcahZpySmAFYKhnJP6f3nyQ5o6LY",
  "key32": "GMNRVZSDuojTftGuGp6Jn2ayMiYgnQeKedBN73FHcn4hwhnivViv12gAE7YbnjYwHZ8WxswzKU4i778PxcijeZ5",
  "key33": "2xyTKDiXt6eTqst8Yr8jetbU1t9GhcepiiP7U94Ez1G8VgxhQsCxT5iDJYEPBbyrgQYSMcoMMg2o6UPu2oeRWNzp",
  "key34": "4Uwkq7a3D5ak9x3Z8WALsyhrxFGU12eY7b9tWnTczctRUWfcPpFrKp3YXH8CZBZ8U3Z8wRixwecBQBr47PTTjD8q",
  "key35": "5U7t2REsKmf6JSUDGdbFiFUUt9LT7NHDNcFUXdk8hTUnvuRspiZvgp11jCahyACNW2TCbpgBtX9gdLLypVPH9ero",
  "key36": "4wiVgN7LEgFejEaDV23REsVfJmLjrhmxdJBnPJM6QQfjHDpowGPASx8HwgbttRnUMaWpXQbM1TTMakAXEcsCEotR",
  "key37": "3QqnQxFKKuShKNWFTY4DZoDAhjdkELgiF9mwz1KDnnZ4tfCtnJ8UMXFX8F1V18EDzYfc2bhS2bnTvo5EYSEZsarY",
  "key38": "2Ys12GqwNNvcKRnmccsWF9Q5ikYeydRcybFiyhoLXNpsMvvMDR1HVAKcaehcqmVXaMM8zYwSBcsf8dCVw9y7WDtX",
  "key39": "5SFD2hoUVLnXzYdam4o8baczPovndfXV8ewW18ag5G3YB1joMAKpWPpiJvPFjiUfYNbLLFwSncuTvsSB5vnWFrgd",
  "key40": "jCHucwKDGAVpoJ3pcPnNhYWUSE2oBxGHCYYqhbcMj57dS52pYGTsqtMEUC2UWLQNwNC8quvv556Qaaw81XByuMi",
  "key41": "3Hc6gQzoJ5xNAu4x2e78uZaQwVVUyRMpsHPwWfNw56cuChcMFuWVsQBg68JXfmNk17cpJDjuuALqaEb3gH8xPNgv",
  "key42": "3QVsmktNqc5EN8TQr6aMig4yLGxxeeefihAT8PhCukCUWQhCjwfujn6QmmutQXdbj8wgFDqgEJebRnpsZ75uqpDi",
  "key43": "5VAnUWDHS9WFRdhqSSBCQBDMAKcGvZ31EZUpgyDA7sn2oukDphbBDmBPvh5x4iRNJqK2shL9SEgpTzHmgFMetbMN",
  "key44": "4J3b333wbjn6QPR18YkEyqZFhtABz5UmfVhveEibyG6NMogkKTxkYPhhJD43G4r82deLrNJAJVviGoAx8iJNiZmm",
  "key45": "3UG527J7FCLzZejTqn1dDH11tY5187GV2fs3WTqt239vs637PQkVm2RoifLdXKiqmVTf4hm5UVwKH6xbdhCoX9A"
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
