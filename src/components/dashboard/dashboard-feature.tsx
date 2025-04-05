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
    "3qwr5CSepiStoFufmJCukuVMjuiHeEGUhJPWJ44c44v6voHrS4XNQiuseCcRWuCizhFS3FpRf6CTudn8dCXacuRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21s9FTDtzQ1Re5An7LhPp35nvbBjhE8BzqsvgpiAwvor6f6bkifMauQLfdEfASz4bLWx8PBh3GJSxnRHZmLbnnYo",
  "key1": "2vojtnW41PTMU3jo5qkzkiJ2eiLjCtCQQ1L3gRj66eMMVJsoc1MYejjfDY2bYLUf8u6ehSvbGW8oJRkj2b4KvZRU",
  "key2": "24UR2BcLBzDwCzF62S6XGZQXbDjQWWScvb8sHvLWz1kaiYzgAFNQPASCWtdikzmYcZhS8GbQPXHFYZqTD2ifaJKf",
  "key3": "3oAAu2iydmSPLsZbG5fK2rHmQPuPjDV7depijGLL82WYHK1XKvP1FyMs1jmp8W7fY97gJ5Rp3z9ia3PvTcbDYzZA",
  "key4": "2jBNzh2VTaPk8q2NQkYm9sL7G1SQNocvjTchQ14pAUXvd5j8Mu6faHHfkP1zVkgqVL7a1969FnGKwB7Cs3gs9HV4",
  "key5": "4Ck67YKzvUJxUF2u1jDwjByvhtp945BZr7HhjTJQK5r7z2tQTXpAYpcethHh3UPrp5dpRHupX4yf74HbLbuAr2zX",
  "key6": "2XZ1xQW9FUFrJL8qashuU7awpssfziLfhm8Kme9QbXsQK4ytcmyCW2q3VwCku9W4Bj3UKedP5TTDG55iSi2L2ZWK",
  "key7": "GHDT4S4LZxKQiADwKEqKzcDgPoAwy2WMRgkh9YgfTtkjeH8cCjCNyMJhUhi6KivVcztMvAZuQJ751v3JLkdtAJi",
  "key8": "V2Mwd8hqnG6wZM3v1SLPpKWZHLzxFZC63pd4McbcqnFTwrSho79DS5Ks4VLbCW1pg3XSuZN21v6bxAKsVHMjETp",
  "key9": "5HARMGiEQUrh8GtPcJMhqaC5Jem2xcjxGr6NZiaG8vMyVLasy2xkTY4KmRr1uC9a2RP8PDNtKSGVSMkmm6PizjoX",
  "key10": "Mfgd4K8gYPbDqSDuP549GeQ752HvNCcEi7himmodoK2ZVM32StWwsQHDBdeLHfzoHTvMnxozq4gZGMydbRdxzDc",
  "key11": "2TA27Y3j2uHnGuSyxvuRYsvJfZEERMbfeaML3EkSxwRPTCuKuG9sU5LkS6ysivpk61ZbssnRGVVkn4sQPXj5Yo93",
  "key12": "2EVJaCvUJxdGdvpdXqTYNG2yYAnShNQpnDBLSiYDsbB2gMR2WHpV5my14KTDJQWWWmTs8P2hk9Z2pBw1BFH9NEoh",
  "key13": "48K2M1in8TK3bLnNmQ3sjRJF3Jn231j9gJ7woZM4rcE5CQqorMVg8knSuecEQWCSf3kEcGDWq1qYuccFdHb7PtTx",
  "key14": "29gYLzpZo83M8G8NiKy1cxTudCYzrdUNVqQzyJ6fbf81K8Pnyvbsgv8xw2hMUb4zzLn8tYrna7xzpiCnnNe72Mtz",
  "key15": "2qVFqsrtRiBqHGtboMuN5KmcsDQavcW7meTgdj2hKArBHQ49RDnofrqFsR8iKUcoqWsiQtnL51F23nKCDhULD9Ze",
  "key16": "5HNV2mC6J7rmDtU7Aijew2rYJuGTffQXsKVCR8qJnLHseHCuvq5z7jrTugmpfqdBHfxBELgZ34p9kgbZ3zcsNvCe",
  "key17": "5o5UWNLN8ugn4vzBgHMoURMMvGtaieMMRXaALTnzEmcwUxvp1aLTAa14KkXuhL9Q5svoaSVdaRkvPi1aLQSsk55e",
  "key18": "4i25pY69d9XFH2VhjYsEV7Hbw5nKvNgxutPoauSnJ8XswRU1Y3wWsSVsxhJ5DwoSFeX8f6MPDUzuc7mXmgPPqmKj",
  "key19": "36tmdqs556Qq3yMGqCjBFHUZYgHLbhCVAjKM8LSnzV2WLRXcEPJHDsu9WG4T49PWTKMyDfcVsN29dyx68mmdsZPK",
  "key20": "4d2NLLgVroZg45ZQHK9ibitGg8HASrX8ti74NRNCpaAb5aYKZzouKSKS8TmeNEdV9QWktWfSqRwN623soa4wkkti",
  "key21": "5D7dEb7MZNCHHQxVWRpGzEj3NJAf3tWDNHVZoAwDr85goi9ZwY9He8zQ9DrofTh6qHUfbS9VVRk8qWeanLkwv9Du",
  "key22": "QwzLAYvtko3CQGpCoZ6LqdgByTDgV2auz126WHCV5drthnXUey115WQZLMTqHjJ1oVPiBbkjErRbUnWqbtXRqMz",
  "key23": "5Nwb5BsmRBKRNfWMFruQDuZo82peE7UNyXVjeUmBiZrZf55Zcp5xJKKA1BF1ysXRCFAkFixvmTADbNwDmQiKnvhi",
  "key24": "2yzUcgcU9ZECUq9bxZj8NaqFLW3x4wSarJdvxH7Tp3k61amykuEopzC68VeJ2ECm1R6TfQnwuvjjzpNuhc6S4SxK",
  "key25": "2muKEYHjxBGhuqD2SWiWZtFMJV7jsfk5qHYy2LkSB2W1M3urQQaYLLrBr743rorU9k4HkkQan7a9o6kxjG4zWVpp",
  "key26": "i7rD2QS3hYVNfFfqciHxTXGhLuBx5aYFrGt18M4U2vWnPD2sNDtvjd6L8kB5A5N7yckwkwoy9TQKq6b52RYt7Kg",
  "key27": "5cZtFkqPEdgQBBEFE3EpR1MDuevqnrGrygZTHt3G5meiBQhk1QB3dj8geJzsQXrq5SRt1cB6Y9iSeT2Mbn7jy6UR",
  "key28": "3jgiZvo4phPdCkoPgZJA63LL1kFQQjeWNExVaVLZbkQgGN91PRDRh6o5AdMRWAnzbWkHBS75gE9Bke5jBodGanmo",
  "key29": "4CGdChTxLVRhZKafNK6MXySJFY86MbGtafGGwfVjpa5kx1xyuhqvEkwoRgprEjXP8UAtsgFR3ZV9ps2SnRt8ZQht",
  "key30": "3dwPfyngKPZqfHZtgw2D6B2KKx4HpujECH5yTihn8etctoNJiZS4JhF2dmP5uJSNwf9B6CxbpZQ1dRup6usY1CiC",
  "key31": "2nQP4dkMwhU7zDQV26GBpEtPbtnmSmfdPwd1UebC4he6pxy5S56eRQs5D5GXfkyiC6cbaghyHv9avH4sxH5ubbQs",
  "key32": "4ntCCwWhXJya8BqcDg3iW5UFEFCVYoTHEfPTP2Tgsy8bJyQDQVFNeU669KouV6Sn7JoMd5U3fSywyCwyPNH1bmUX",
  "key33": "4V6vkKGo598hvkLxnzboPQrvuzBAcRonpYYUXs1HqgUPoRA7fC8UGvqxayQk1gssb616pvw1ZN2qgbXgiPj3p7ZW",
  "key34": "4QB57dDGhbRJoXtau7kC6CC1kSfUZnrDN4f7BUTp2J9bmXq6dtD6hjEXxnKBjenjs663hfE3yQnnMAQbH455rezb",
  "key35": "5kkopAcxVT5T8AxGSrVBymw43te3TABdQaYDrTSjxFYAvSQQfNHX3UUeb3oAPQXRkW5zZSz6PqDKsBVBUAt8kVJj",
  "key36": "EpKpnLa5z4rJBSvdrBzWGK4cASPpYf46xyqYWXBRttn1sAzhLwWKEFRbo1CwHKBdRQA2qAYzwEjXkmBSvR1Lrgt",
  "key37": "5rwNvwh8jwv6Rta8FxwWBXFp4uuLo887pTsptidYgaCJqMocGHcLRqEx9Bup2T52URaExp32GRSNoCvwzaLoPvet",
  "key38": "bhEyNupTkATzAuuCr1xdQ8n4ZdBCyRwARzT5p5cAGzoiPSvEnjRAEJEu4spMxXcvoyLovryeB37ihNQBbCJDnMj",
  "key39": "2kkjwzYYcA183PvJzo2EvUCzsLC2m6di26P16Sdf5cDnjZcp18Qbjo4jNzdkCAMAFEzDTLiWCE71t7pH51Nre7gG",
  "key40": "2TyJ3CB1TsR6hCoZe36C23YScpahM4fqqSkj86FWiGgrqLorqP7FNYwDhahspYEF5xf2ihmeayR7VrXGcttJqQv3",
  "key41": "4th8DiPqpZCa6zjXpe3zeeJBvnSGyMuHTAsjTRo4FEXqwuZr1orp7kJEi17666Au5YipHhn5Z5FjK5TyrwF45ZQc",
  "key42": "5tj6EuRsSKaKZy9PsyobS41WWwY1xT2H5H9W1f657ctmX51y4wLE28AdKZ4U5YzeRx1vpwXrXMSfrsSoeGkBiEH4",
  "key43": "4UXYxipB7UrTvju1GGWH4NrqABnN4szLdjUzSKB9y24oBa8ZFaXonYokHbGAijjJCK174MY9T3wZmMn4srzcRDMm"
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
