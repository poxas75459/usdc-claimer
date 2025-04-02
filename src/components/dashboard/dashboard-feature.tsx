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
    "LYJa3DvCieXujHyTpTFRuYXSGCZR1aS3MYAuzC7H2Do7tqoCgaTPHn7A4yyr2S6kv5XE6PRbn4XPQDCD5yVuHeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqxRXJprxNEKGsy4ai7bR2YGfyR2e44DSAWreVC4s6rKwBoceFTh2HRwUSgVHMxw2qw6Bs8LSaKT8GuCxaB4ZNN",
  "key1": "3svtx4vAtisWPm4TgEfYAwRM2DvMCBvyXPwPonGsQGAFmSL4RCS3v4LYg9W5idpmphdMY1yoSkwwYUY5ApaSD1TF",
  "key2": "4U31EmXBAXAwUQVcWgHpfGy4XGXCb43Urb3aVj6B4cpyukcrt76FMFFQq2JFxebyLeqwd1usxytzpn1PXtKdqz6p",
  "key3": "5tHv7wmcBXnR6YAiqAc5FWeYrSQexpkvxWE3T3Ci8swDBB8uRCrfXZhg6ZXViEVBEH7RJH6itPXikD8oKY7wdYaJ",
  "key4": "5uMppNyQZpLKcLdyCnnpVoM7pGApo9znG4DmDZvcjwmWucnwttfuNTWRyEJwVtWAuK5wveigk6HZStqhSwDRxX7c",
  "key5": "3gCSLwoCak5W4u64WetWLkScD6NmxnBkgrxMSuuRGwvQjuB81irGnMFozdRYTr7usXirjXaHvEG4UDFbo3VstzSg",
  "key6": "56yknx95Zdk3KxMNtUJNimvM18JGQoHCvKej4vNXx7AiiSv85zV6QwSNdM9amPXy9roCD2uE3mHMc6UZbEwaXhFW",
  "key7": "4N3p2cYFgYmiarkZkVfMvQ3zbuYqpQWhkEDY6McwxgDTNWnteC6XRbjbemEoZb3Zzw5Fsq1e358vapn1UDdAkrBG",
  "key8": "5ZXK1jYjSGS2WrMVGw6i7VJuMkVBvGz7a3zYLCxPp1kQUXpEKszmnCL7AMMiAVRkZkbE8dHJEbyVXjNifmZhtRsB",
  "key9": "onEChQ9vQA5cjwKmaLGAmwj6t6Kii1KQQ2J8rDdKgJ7Zd8vAybThmMHGGtJHHXjMLDDhAAEoKaAHKUa4mxnixre",
  "key10": "4J7Qq3ao5JXxBbMxnn24v5TJiiAVtHm6sPFpcVMJGdSuWWbs2kgPzSbwg9xNCePxU7GJVDnoTFYReSr4sQ4h1ssh",
  "key11": "4Kj9Z72G1eDGNVNxaVa8ZvPHZjtKSA1eSvaEjcqNz7RzvVtATwwg7nYFaYdMSKKfc1S74H7p7znfnKyhZWrutJDE",
  "key12": "2MBCbYQtQR5ozELLSbexDgtnuo1KpCz9tHRm3ht2STcqrtEQoxXywVjpRuFy2SRSynSTQTF34qRMUDeykXTESd4X",
  "key13": "4UySEFK1t6N3uPRRNXcTXdjascGrrgj2grHgAkoTuQArWidyJppB5Zxj5gYY4zbUDpd84u4Cbzb3E5cvRjikf2ee",
  "key14": "3QDCjW4S47oe1Q9vsTt4zBqjLTDQburqVvE1f8S3myp1UQJLCioKEu3a6SAjPQd4V5M4Y11RC5xfrKLn4J4hgeYD",
  "key15": "k2KSG4oXYSUs8SSBcYrDsqYBXCS5exStXPEQUtPPMJWWuTcijyq6v8bbSznxuKpGyvLKRXqYDDB7no8VD8CvvDY",
  "key16": "5VTjpEUkMDA1n55dnohNcMTjeWuCGWdtzFrqoguTmcBWvzRPaAvLHTFNr7quZEu3Un7z48ZPB7EWbR8HNbuVzArC",
  "key17": "2by8Bj4CdtARVSMG9PGymUpyW2qUhQc9ScX2bPLzKSXqSUX4A8uySDwebce8a3oUSY2bj8jmTRDL4X53uV8N5Zm4",
  "key18": "5pwYycfXCjDjNuc6vMMoYZJsmhtokPRsHPRW8NL4AyRPxAWLHCDWcbhfkD15iYcWWjwaAv4eb4JHyGannCuPYgcF",
  "key19": "5YB8bpJ7droBGicwEn2PvhNg3dq8nGBk9kZsWViLtAdqTQS2EcUDDqnuuqnena9AEQ2C1BrTLY4UfeiMbWABQCqN",
  "key20": "RPZARAVX4PCEmYRbzQGTPV1FpUcVY3wRHv5w7KMvuqT6e6iDXbyLjojKS2Kv7AKMQSAFgA5XJccAPyP6fEihai8",
  "key21": "WHKX7DUWpoNuzBHEsKXDq7iSs1s1xNtZTSwW7E2Hwnw687qg4Nofj8vNqDzrDM5YKb1Eyzjsx7ZkKFoPsCdb7hk",
  "key22": "2bprhnujAPJLqcz63rhwURnP9AtZNa1Bm3yjVvh6nDHizQ5S4xTrRKEtGsorZLiXzaByEYuGDbVKJ6n31fTXwGPC",
  "key23": "43xhp6V8uvDcZV4HAB1ZV1jREhvxrrt5mVrSpiryxbGaUe4gSbxaTPew6V5SerB8MGyC9dJmZiV8Qh2FPRVsk81e",
  "key24": "3R2jJi4gTX2QEkG4tzzDoSpQVBQEeV1JVJ86YTCaEZ2mmqQ1KpNB7zLRNyfJWapPNFn3dKXkZTApwKmMFiBig2GP",
  "key25": "3evixEy5rBfzzk8wigu6VB4RtAiRaEuvFPhyxCXLZ3AXk4sLZKnJYpLZrBQ6XAwCxbR4v4JEEBXn4SynXB93WZ64",
  "key26": "NnwR9AWWePXDHuqh8qCghKdmEc54EYydn6Lftr5KnvTQJYBX5V4SG8ZG7BpDZBsLDkutHEfzHi1TpPSz9SGUVrn",
  "key27": "3r3oyPoNeaoxG8waph21xMEqPHV1MZiZs6souVXpuDMrWaqhFumxtvGggZDJt1Nan6Aso9Cxt3VxUoKBd6WGHS6N",
  "key28": "3NS8BMnVwpcVYwYz4iKS8obCWTabzNjsiS1JXZGbguhxfBrdWzPT46dpKUYbKKFF2HXXZFNcTEDRE6siyx9hqGpb",
  "key29": "27WUUMF7QFxZGaA26Y5LzuwsGKkrUknHSrdrRRrN7CyZMxJYqncZBVL1ni1CGQ4TjP9rKCyeD2QCEFBwtVwBehRN",
  "key30": "53VmALXHfC93QSdMwxpSBtxHU5DXnaSUFivusR3vQ3jQMTqCguWAKyh4NYx3XtzudThz62j2V5dDeDmbd9cRLujV",
  "key31": "4J32ibPvbVjjdzKxNmvJh9FZz59C3Hr7KZYMpvu795L5DZeQASxLC7EFBonsgSV6gqo2xX54VskBcA5sPcVgLzg8",
  "key32": "36uHxjRpTzVaDCBmbsoxRWCYF2paKAcuhfv8sQpEfxFUfx9ANuDYdvYfugJQU8dXYtWWoFsAkhAWeefcTxe8nmph",
  "key33": "4cKqdhquwp5tDXMbR1qgJrwxJUyQcFsMsn8TtPDh2aq74AgkRMgNyhr8z4EeevhoGFutwuzn813HzAeqg8WFW3Uj",
  "key34": "2T3tByUudFZetHAMXMQXkd8ZeLXARQjjutaCK6y4X8cJnDeZi8fEv2mRJim3fp4eXA3B1akBuShomoP1U6o2GpHy",
  "key35": "4tKeNufPoCdE3XjRvw7T1WNHfVDmVdQp75eWb5q6FsqSwU7cNXR8rU9hRbp5oX1YDk8EweQdLHtJyL7FpHEWPcYZ",
  "key36": "275r7Rih71SewJWoxAR31pL2toL8jVEfWuATd6cdtdUF8F5TaCaYehrp5itkZc5fuS9wySygfLMhat65Vso8VQS1",
  "key37": "2cKcz5DCVHciPMgc75gbHTnhpPR5n115cNxrc7oAPbhWa9ekTip38eLNj4uoppTxz9g5dMxfws9SS7X1yV4cwZsm",
  "key38": "cTTYUnGLjLGE2qxV7zRAEcDYNsb41AmNiqbv4iXsFM5gFykFb9PujBZY9nQL6xZnk4PaUiNdep482Y62RkpjShC",
  "key39": "2vyAerdBjXFavMwjhouw3fjf35LzqkJCCGEC3pUVU1dSKYh4MahKL7BhkLgWXD7kvLfnkXKwdCGQM41Tb3aFANcB",
  "key40": "5rFaBNgrqeMvoJ314sPjjpaCepmgmdZJhwq63PrRwvFUAaEZCeUypbx7hsfbvEWSc5jb2VgP3xUTdKQwUyFGBfwe",
  "key41": "56N2QsfHgEcGYfyHZH7rFDKV67xA7BDNqFJJ5Yc4KedN5zioSGAonALCG6iVviJev5ZNNJQ8kVziDukfAiH9UrVn",
  "key42": "34ttiDDyVjufbUBW38HFEQVw4RUivPwsN2129VeMNwLibdxEjPd41q63VdGFmrZroAVFPvjTMWMqYpGf5n9aDooP",
  "key43": "4RbZbciPs9mP36CzWBX8pqEwgvigugawLiuGevWK2Dbo3awZQzfHFyWkLxaUGz2bLyFMbMTJEsu2HTkSuvPK3J2e",
  "key44": "4oXUFJ8cX8eLSyuixxzpqUr7Cs2hTTd4Ks4AWgHHCGEyczm3goALfgNhyrD8PMSEMyMom2vk8rNiuTbpcaeNt4bu",
  "key45": "3U9wZRDCNtP6aFsTAo8MsnUXXXw2aWt5RV6h6BpQ8TS7NT68hNqasuBsYQjNMffVJrC338rEiV5kJ3PBHckF7CN7",
  "key46": "2YCPRC38vfYvecByuwqUz7sdHz2Vm3EMfFeha9KNDB3MLYHqtWFELQrdmUNtSbyDP9KBLLwj1jiFxmWcE6xigiY2",
  "key47": "5SRx9riHFwoLsQ6x6kwQeiQpueBPp5iNg9TzKhgKzWDo5FB1221LUg75iZP1gTN6sJi9Zt9ndo6CwZQHArrQ1wye"
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
