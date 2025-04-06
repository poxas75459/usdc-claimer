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
    "4cDcktMxzTSM8vP7G3UfCdyg8LXMCDmCuQtueMZbMY7GDkqiLT9zcHjTKuu2j63HUJmBSbTJYcqBW9KUemZzJ1Pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fV2hrCxbe1ovaLJ5bT23BJusLMyDAdpXCC1CDSGVDuP2X47ciKtJgypmgkpRkmXjMcTfRwZcK9uNa3JqKTp7M94",
  "key1": "5Q2ncJXztfZusJfVbxM7EEaaUgSg2eMiuKYEKVFkH3q5UCS5wTDL2c3M4GukXTZoNNEjEzjZrzDqgW4mbmVaqXzb",
  "key2": "js2msDoUus7bZcRSmYEAMdAsXo8WvTjzepe7sWHVEZ4h4w1RXATCFZ3rmn1Pn3v9ZNFtp8UqpJkGmqzG66MtL58",
  "key3": "4TpMjh5nWbEgKTtFRSXAJjGXkZKaGoH4ZFvzKv7RVMspqFqDrgQv9PP24yVdtuHg3uhZMPfZZ2P3ePwHRo1H9xYe",
  "key4": "3ZytNsasW9XrqfocCQkDTvfpNCNb6Us21rztQHK8GEsiK3LwtuaqRB1Kq8kHGzfhuiY8WfyoQfZViZhi8ya7tiCE",
  "key5": "3oAk4vG44EEWn2HFpZ6EjswezQfEeU84Vuo3nKA1LazPRVAbCGWb9TzkTrjhAEJeVcQvo4zuF9TFhXfPWSnZPdNE",
  "key6": "4e4DoHqiDoAKxeyL2mDZbYN8duBT4A4jNXsv5TfUfCGvRR4gXfrbWxaygNUip9NAMKXWhhZhMb5dmdA2p8raCPyB",
  "key7": "4kgyT9vvS8K52aEZJtdxh2Cwoc8zSS5tYEvWTkLe7Xvq6uPvvWpcKuPtaej7y9WzkmNnRJ15f4zikGuiMLH9vMhH",
  "key8": "3ZQyDa58pemrUXpQNjaaCzJfGzAfnYVoMysq4WDsomEaywkXCAGysLW2pj2ZZm5CDxxLZ4iFyt3aUWBdktspDvUa",
  "key9": "Y42i1T6S9zXLcW2y4SC2YRFQqPBmYWdKe33SYAGcBLm6wivXPdCZe6JJ8KKKyuemx1juzFtZoJJTdhpMKHsVkxo",
  "key10": "3B4Za5iErEatTmsZxRy1BcDagQvB59bjnfS27MsuH7v5eVkWzSgzU4QRDVw4u5HQYQDThjCwkhrhwHCfX4tp8brz",
  "key11": "2uzBUcm3QiNizUaEfYVkur7WwQoCxb82mVJge6mCBjXddpYgQxcWxfu1tAE34MPGov1gUZbVeV9wo1G544uC38pT",
  "key12": "Y2He2TgE33rMoKqGvkPZrFiUpwzRxfkPQdzTjysp3cN8YuBydfs9Pdfow7UeV1g4H8TM3HEMPW6Ksfvawx8xrPU",
  "key13": "55J9axeJdmcaP1pqjqMZak1ACAX6V13DBfchD7e21DBHu1JiKTShUHCYKy3D5x6Rh3ov53QrRn9s4sKobSjasPot",
  "key14": "348ypwSuUAAKwQfK7N6e9UeBbNpaDCWV4FSiMazyfLD5LPevd14Zfj9F7fd9tsqmeHBVfNQMNhQurE6i1aTtBQcc",
  "key15": "3PeZVFvJWtfyYevEzN9zB7cBMFDFbs7zL128a8DRFADNxZTegcXCDuhKVyUR58x5AaB1VqPUgpFjx3HqQ5p9vmbc",
  "key16": "5hdA224RAjzuu9WASd6hYrsKDRLtKp2qJQE2JxmLjWcKtuqHef1eRteQQUKK59QGJt8M3fsBfKhQzB2z9RB8j1H4",
  "key17": "5WvLYgobUbLxQKgE65K8kbDoQzp6VdjLB4tHJsJVNsemc73Ud6QZKkKRuJtWsHG4qVKhMKbqLHTXL98hgkRd5Gjy",
  "key18": "3tiz5t6L2NRnG1uBCX1aQtCn3gsQuc93cKXmdiqr81bnb7EWv1gEuD2YrfGkdEpzhYeEAEH2abKLf7nKWQn9Tf5H",
  "key19": "56iyxiJ26jQMCFRsxbEV98yBwAm2g696NjjqFoWpnbaaLzVERsJTMVqtSWHRdjTnWJMeELt7m5trAtnNfDNU8GLZ",
  "key20": "2ErRDAtMzH4bYPMeQ9W6DLD2m77k8fGVZ7RQSmZDPsd5kLBJnATUhxqkYYC3dSeRwuFkK2F9J4F9mJv3no1Rh8Q3",
  "key21": "4MS55aMxC5SfmirHtE3efeSoUuLLb7yjdub2uaD3FeTSBN2Bh1AXY1KiRxNZEr7HRxRh4Gph5i2TTTxaBHkWHMjK",
  "key22": "vMUQGmizz2kSuGxtDYao1psCeDgkkkVhjNXsANaEeBeAukrtpp8czSP9tpkSp7XXozugrSS2UhcKAxxsKE6MFfb",
  "key23": "4kcbKmLk2jhJ8wAQzv4Xu1G2jr8VjCKd1T1J6gnXNXCzGqcJdPEjS52Fsr4drpB8rb4SeNVjshpMaMkH6jAp8why",
  "key24": "rhLVXSx2my28gzCWuGVndtL2BdPT8ER8DnaK8hN7Gv8JVMnafwDw5P1257AoWdYA7g7QA9FMTuzWM1fYJ5LxFky",
  "key25": "5JEDo3DNxptDmDWYdnqKu23La17aMuDKGRdKBy78Q35tFZpo2mUJMCF3cjFqjEGBh6kEbTbqPaNNEFzJairf7bCG",
  "key26": "4RpZZuaeijm9eZGXKUJiEuuYpAdipP5E2ucEJK9x8VqooYtpTksRPmnUWbQX5EzsDqbSMBzfexSLC1o9WyRC6hJ7",
  "key27": "2jDbiPB7YZsCkVqFngiHFvui2oupFTEcQ6QM6eJQuPo7vfUpUujJTnD6SkynTz9f1wiCZV5dzJYti1QC5zUQkT3X",
  "key28": "4ZZB2pLob4G9dom7HXmkUcp9Fz7H7Pq2Cz1Eu2C1L8r2qkbC75S1fV8ssajR5nveV4WPb2JXjcnqaYQcrAPppMeY",
  "key29": "5z8WHk3Yk9XZL1rjoYZimr6jL7wvH2NPZBRhXD6nPmU35ctxduQFnJhX4gHk6cUWjJLiVtVaCq5uMQH3YUzY6Xvs",
  "key30": "62bVhTE6JXMxL8KUNbrgKW7nHGLYkwA2tCvPppAqjfhzHMe3fAvJg512JoHMvzuBW3EUAJi6QbNkrqzg3wzePz5K",
  "key31": "F2HRoMDWMVktU7fXaFTjrgVADBGVUxqnDtXo4MjXRHRUsMptmU2KXVmsDPYfYTf3BD2gePGg6XYj1knSCEh9noW",
  "key32": "3NHiRkRFw7V8aH1oKJgkgNAuSZBZutYwshJpsFMMzMPjNJeGpbG5qEVonWLHysNS5S8ynsWXS9f74XvpQ8mrUQX9",
  "key33": "4b8XMBuQuFEvTo6N4JrMjqAFmS8KGbqEXwC77qpQJtMNQiAk6ZgVg4eKiuP4iFyrvkvfbWvgoDnAphhbvfTgp93N",
  "key34": "39H5rfrEPs3HdkMVbZGMxLvWRo163EeszznKMF7briVzGNDjfTxdxoyihfhFwn3YSA69h5vJQyqk6SeUgqiFNJaH",
  "key35": "5RuYFo665twr2P64XqaiBsd9kHS43ifyD5NtDPA1Li9cEt2LVcJ9sJQ89C218GaB1k2ebV8nqgsY19xrHEtCNF5d",
  "key36": "taVnKFbsvPtSGud29BsC8UgoQWS1vwTUcE5iMmKqPmKXrnMnZkb7oNgWRkm7L69KzTaN6RRYfQChLYGrqiz14Bt",
  "key37": "5c7iLvTh7VE1eYAThPARAt1qBcRtnxZBAq8fCWNciiWPXfjStQKQjH6WAN5enDfykmwH1RNEuH8vNdimuv1bUy78",
  "key38": "5Dn5CeckFUKFTSH6GwSW7KSZej5CAdkqZtYKP5qZ4CED8j9cC5p7SsMQDMpLQTJwhBuJ1ERvPLGxpwyBnFZ6f1SQ",
  "key39": "m3dGL7G9yDE6oBL57sNMMbBfhWLFN2ZVfcjbjoQwF4s9p6bGaXMUcHvXaWwDtdN2azFLHXRwTw2cWqrFkERLZzQ",
  "key40": "63x6tXZaw3E3FDPhXhgkg958oEBgPodckp5UqAM7CSWKnckqx2684XqQBNEEbsRou27KtbhX1N23qheNcanZ2i3P",
  "key41": "gSRgxDZfdKcsahbHwgryBcUg9hgNfusLtpE1HZtJBaKaZQFUN9FoiUSBtJMEUvdVBL6dr4LBPnSpPu37M2PYk1X",
  "key42": "kGCmZgNHNoqJuwhJT4BzuimZfTH25KdXEhfDSXxPdiMRkVFQHa8XyAi2uf5YPrbabWrKCcnFTHL8jrHWPqtajUU",
  "key43": "2A5GbinXRYDRLnUoWHg1L9Bt9MgSKxL5ij749JixbV5zcRfZAMjhdjw1c6PDuYjRnK2DBs1s1cjnHdPzY9bt6vEZ",
  "key44": "FFZQEsXYXDLdLxcEnJCxigMcwhAbCBVMWxqHU6SB75FuQPMNAcieDHjRYek2keAaF1LdHPZUUGTDMvDnekkm62N",
  "key45": "5s75Z3yco3434NDNajtT2pSLeN4NmSozXtXHingdy3y5fsXvTrZZR8kafKeN7cxi27pEqoqtLGV3yiZLSUXW5j9U",
  "key46": "97Xrtp2J1KXVBBfTjkfcLBmGMkZteiKTsYwgCJqrHa2qH1GGrKXzqZB5wfsbgheECZfEN3VwR7NDih7LjTdZ7EK",
  "key47": "V6f4HYKh6WXwM7zFDGqLt39PLiwqVDQ1jmEmB6JKTnNtHZX9J9HexKyjJyM1CkR3iASeKNnxKgxCkbyJYoVPpFG",
  "key48": "uvP6xEfLZLjNXRGWVB82urWsgCKxGHYTTMnMmPDHVgr6NWwA2DDqqcbawhcbdrWNqCF7QHsKJ6q1uYmbgPiVqSN"
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
