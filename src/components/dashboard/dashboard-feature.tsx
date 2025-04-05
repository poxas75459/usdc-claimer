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
    "4C4j2Q2JKA6kMUV5HCekw1p8kg1mz5upw3NKmXVo3pC16WjzjWtHeBxrJgsKwrDovMG95f6VGkr24diA3XvThQMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45HF91Guho6bn3MmW1J96CWtCeWngqFnrVNz9uJ9cNND1S5nRp3bKDb4x7YRsXU3PmsdgiwxiHxSQtScLuYTtYdj",
  "key1": "5bB4E5wfXVgdsi9R9TBZQLBZGysboANKiNSx5ZyzCBj5PR7eYqC2AjsUaxyL7yHEcUaWzSxsTBn4KHuk9ZBUNBK7",
  "key2": "5B89gp8gdcUu46RQ3QA29TkpbMNowKgt5m4CiEMwR6exjpnhUYo2GGVosL2eaPV1mUaAY7hn7cJxXcaie7H9eiEe",
  "key3": "5VmC64XPkR4bZLFRDgG2K2rrftfi5UjsoBT8b9abRCUtzo2szaxkd6BVap9duUbD7X589vdR3wq3nJFrZYH1ESgK",
  "key4": "27ns9QKKkR5ERrYGhuQHus34noEfvmPh871GhDVh65rRG87uZT3gyEnrJEtjFxrk9i92R9s3tvUBsEyoZtQfUzzh",
  "key5": "3ScWo3LeY7s5FHXjdDPD5g35VstaGFoEDxjNMVXPbAvc1F1fqPdj59DBhebJKnenr1ep2KU9mt4H2yBM1eJS5e3w",
  "key6": "4R84Mj829kztXwr6bjXAUBtq2jjPgLFHBtnkiZSUPdz9b17VhH8XGv1z3Z4SRcBsBhynkqtpHcx1iUtca1oXee96",
  "key7": "5j4jhAbazrENgaJ6z27PGAq2ePFV6VCZ5Vk8hJePCZAren6egLFs8gWG2USBop3aV9m7KEtQdgRNJk2HYrAQXWm",
  "key8": "3MT89JPdfLzyXhBWPxqWNtnCdu2xY75FRsee8Ly4it5b4JCbmDBori92yVix6sstbdZC7BNganhvuZ2LMrCm2zeS",
  "key9": "2p3cyCmdKHAKaifCkdTN6FU2qinmiEedDHJDGGWQPaG11QfxBaVPj66XspnBYsEUU6ubnvAUs2she8HNoBHatpAx",
  "key10": "4VAcwwrgGBXdw5jLAkgzmvBhapYqfdbVNtiQddQh4xNy4AJQ1XmUaKmpSfhqT5YLW4JLFTUKNzoeUPLuKssRsBTG",
  "key11": "3CVq7jCur39ukeYKVR9wiNZoJe9XksXigQtDfVx8x5HgPzbrDYuotW8WqWUQK7sKRqHraEehSGMQBqjFQHW74Knf",
  "key12": "2fsseUppFyZKj3PrjqQaiWQ2HETHxC69GRy2YD8cwzAQ1jsvmhcr24tgYSZQ2wnVPVJ2w1hYWZWVAM9vG1WhgKNb",
  "key13": "ATdy9md6CuWbxXou1nNjH5DMkNJirpwZogPiYMEFz7SRUDiEt58uv5ZxFrVF4cPfz8FhCDmUnj1eisCq88bjd2i",
  "key14": "4vtWNryShsmVCvRbNe9vsPLzmYC1sy5C1g3yEgJ3CUxQf2BCZ7c3Yrq992aAZXJwcZT4dze9nQKbgmsgiRGTDXjo",
  "key15": "4b6AS8U4u9EXyP35EaQFhiMDc2f749pzyPPQegPFZsk5r5CvixgdnhAWX7CTigycRRNJ7wUwVGt3YftVb4AqWSF4",
  "key16": "P2HTYHHnwA8bzSZ8jPcBThm28YxYr1xm2BQVYRc4aU61rg6Ndcyuru5FV3fQgJzQRmAMNpF4mzAPiKtgxy2yV7o",
  "key17": "41sbrDHy6BnoqfYTjfqKT8aGXou6dii8ZZ1EUi6ESBAusVpGNU7PTiUtYkKsNvFHjcC79DjX9X6vsusBznS1Kk1b",
  "key18": "4JxhnWhXyXKQEboHWoiSSfrm4Sr4EKsWQRXEfmmGdA96GYboQ3gwRuUCKQxVbFCMHHFrfFC9PNPftVhULvgwqnnT",
  "key19": "3YTCqMoEJhajuEC9QqbXbzWovqUwVbNDqCMgowMCgqNpCSyiCQawHXUxnE3CH2hdtbUX2ceANpP6eZSizzezyGgZ",
  "key20": "4V8erh41d2jXL6kyjRJTaRfpe5BS4YVo1NFGAoCsw7hmF4mrLenrWRs5QZMN6SjUFk9w7eYj6QXuRvqiDsU2x33m",
  "key21": "2pNNFcY3y4nQMzxBb8if9o3Ek8zkvtsNbgUEMXH7nciLZbHEhf6BnT1LqbfiqnfM698Hx9xf6gADsbm1z2czXSAn",
  "key22": "4ZqojSwGdy74wLEeJwZjyzzj6dpfSTzWycqp9PUoTUHkwikR7Scp1jrTNYKcYw8WfHiAVWFo3dcC8tdWeC5Jd9Ad",
  "key23": "3uwBKSqQvopN1Fyht8tteTJpiUrup9pVDdeWUrwNjaG4ZfLcZQtXNDVEVC9dXh4W55MacNW6se7grtphht8DTk1s",
  "key24": "2KfQJuPYUNFDuaygFSw9cDtKPemjK6Ks5VPQ1DyopPtAq9vzF76eYWKYEurJnLfW87MzqaaZ9onaXgKv9JCy7de8",
  "key25": "5S6kVUtUAzoMRNuaMd6QD5GnUH98yZQdn1TQzyi3hFiFkLoyinADN8dKjwL4kTXvYjkvaMUzKe7qBc9GWWrhtPY3",
  "key26": "3NGjzy1pzgW9UDVX3BAM5Mgn5Fc1A4o6QAPdWnNXQ1cLkfaZkctuogVSbJ7QxpuYGF2twgqmni3G9G2fMCrZMJk",
  "key27": "fXub8zpLfiKQr2MpJEDNmF1JPQrXnrfE5JL3XzYxbdApnzwnvpcHNnd8fMHWEDQZqVHQBVY7bZHfjweo56BYNdN",
  "key28": "37PzyctY4DMWJC5J5QRGij6mPjASdE9hsRHXXZnpz62RQdq5HXNXSHMv742r9hfbFjwxe3zNJ7sBjZBJHk2Wc2a1",
  "key29": "3WFeLCR6oEAvkGpLPqjYvynMd7ueyZh4JPnP9QhGDuoSH8nXo1SBHBmD6FjatU2LEX4q611G4mH5B2eYYJXECsiQ",
  "key30": "ojRcdMagZ6NzrsNUESVWTKb3h8VumzDD5CdK1WjhcrDSuSURo5FJ5r8CRMkTAQDMDjwSTN9MpBYD7Z9tEyDZh6B",
  "key31": "3xghs3upGw8YmECPoaCgJmVCBm9sCZKMmSdvGnXUybQH49VzHvc3Y98YiufZwNVqh384bGz3kvNeEEPKucrZR3VX",
  "key32": "4gLRagds2iuMWmZCadxKJz8EVkWQMaewEJXZDBiF79Nucnw8GaYAXZ8H2ABoJ96QBUNEVWi7C5JFTGuC3gQZaJXb",
  "key33": "4KsCFRy55aguz44M4s1MJKTsefXZzTY9H8dRUe3UJtChRQwKCdocAUmWEG3TqTF4wb3fNdhBuyG56ZauR8zt4zKu",
  "key34": "3PcBg26tbMKUt6DxmY8kJUA1fH5RvRhC8gixgHjePnp4pG4kksyNJgqF7ZqYGVLWJjn48dqB9BNzfwFqVqYg9dqt",
  "key35": "4fjDbhqEEBWhES5H2c5dDQGMe8Z7xQXKWHXgupRuEuLsXP8XGenE81J4K2ooWpUuEF4MVf9HjjAnLyTtn5syApb9",
  "key36": "5BszvjMxemaPxhV2eRk3recbC97vNfW5wHb6GQmUe9rWzABAz3QdJTB5KH2TK1QNHFy43XqnN3XuwoMRzSB9nDyi",
  "key37": "3rPKGK4neXrqZysiT9AWT4q9guDqmuS777vBCKeCPCanaeye3mqKjtx3Sykxv6gkjKZeT9xkQiG5gTWYZbpy4ZiC",
  "key38": "4QdEit1a1Rt4eHzn79vCubX8YmrmrgwRxCA3hjc9jG9xVKBh3ikrG9dvP2RBnTKWkZDxXp37ek3BN9BJ11KWuRom",
  "key39": "52pLdGqAkkBPeU5vruzfix2givPzWf8RUafmXS3cwwKjC1tUgesErrHZ4wJMRJ7nnZP1mR4WDZS6CBC1SvtdiyNh",
  "key40": "3URLu45W9DAL6QCLP3cDwsJritsJXjRCjE7LW5izqTZA1m5MV8pt8rxXLPuBTeEfxfcVDBA7FrzyzsVPzZqtQWTR",
  "key41": "3zsz5h98HuuJ1YLKESQhumTBzqATuCYjR8A7DWjH8mqCsUF3wJTu3VLQAUTNFoPeLvdkuv7mnJv5ZGuRU7XcXnzK",
  "key42": "66xtgP5ix7c5uGkEr9bQrqjmeZgMLFKRTsMVBfAc8u4Cq2sFN5HDqjKRwudfSThrFQdQ6dMFVRH7k9ZLcHU7KWZ1",
  "key43": "2ZJrAsAdukSfz7bz2iEFR5y4uowrEvWCCaXKUoTnD5RwKunBg3Mw53uYxsgTMeqyPcoctprXEAB1J8m1zF4nqcJ1",
  "key44": "5T781eyBh7pCCjxXaUzeAMKSuXH8wEhyGD6fzytVz8voT7KsD3nePaGpgZb5oyrWJQuUCjf8GDgoV2EFD5dF34wB",
  "key45": "n6WWBcBwgs2yceJnC6LvevhwXUobvi2QFxPBd7VPNXCvBDemBvBLpqQNs6EseaCSGym8fZJ6SCVb9hSLByZLHmy"
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
