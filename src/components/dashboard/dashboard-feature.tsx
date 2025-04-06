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
    "pr1AVyKFrhJkSvHRtZrfqEyfQPmZgBCsD3VXpGKT2zr36opkgWxVtTnfT4r4Hoqbq91FDnMs4c2S2ianHjDWQ7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RC7Xrg6ZfuvKgFqLpvWYYZfHMcLBFWk4jhZxtks2A1La7FQqMyevvkPvEmUoPLtkFpRHWTxMdjgqcCFuhZEj3K9",
  "key1": "46Bo8JHCiCotLAFfUNkP1nsajpFCmD2VKe4iDGmBCw2DuuPjsj8x663F1H6C2AjpeJLDgLi1UHMbrN6xZ8Lcpfvi",
  "key2": "3eWnU8u8kTE7UoXmGFEPPkqYtJNnbQokHwohVNbyTG2UMT9JsiCF5AnJTWdXrR7CrzcLQK8xEXEaKVznSua33EYg",
  "key3": "4oftzAW8hg5ECF9TcZaCLXaxTSZbRpfj1ZrtAz4MNSUptkjN6DUMUqqd8Jm2XStuq6iikBGAcSvkD4oJdQ1Aymaf",
  "key4": "4DTvp3JBh6he1EnjUH5BJD1vjpXHJPvZEKPxANATYcdRf4Sbq9ZZ8Ca1vQ9CHXYZd3z5h5zEy8ic8Nj6P9Awdtb9",
  "key5": "2mAZEwU4YFjkRQQQEXDJND22uX1huAx6T7aac5nEWxLkLgFz6UdvreiDPRDpCkpbEjYvLx5EDbWAahzYMeFWWJVa",
  "key6": "5hh87Tv9KiCWMojiyHW8EMmUFgRdyCD4esmC7d5SVEpMPhrSCTkHaGsTatF6hMM5DA1HVU8qezVeSxifqRMBXzjQ",
  "key7": "4iW2usqXcuDGFBKr9CEyAEQmzvREsySgJ86JgzANZTe9JKn2hBC3Rr2yoXDyLn6umCYfYZgNqKUsS1eiM2NditX2",
  "key8": "2Amq8C6r4wXZ8gavgQzarQZBBhNzNKZ2RXFBxLWaoyx3reifTMH142ET8WG4fr7ZGwhr5zUpYpJLRrLTH92KxZE9",
  "key9": "3ymfwPGVMWCV16cQZmdewLEkc8s1QZTprwjDorYkLxuwWHgKcyAw5amndayvVMSdMWzezjcjQDA5AoL7eA3sGpfu",
  "key10": "2McbDiyeoB1FCyeBum88DsmcPtYKBaqRaoLg8HiidJ7Mm8SmKZqQxCMe9mq1QaLH8sKtCAcL83NRQmg1tBvohb3y",
  "key11": "5VTcD8o4YN1Eu9SK92bf9zGMAvbmYsbQKcTUDfNkyY4QtzT3dNxjq75dQg3H46SNnFZi1arGfhhdCcihFyfKfir5",
  "key12": "5PkXStts1HGsTkBvAvxSX2Hw5CT5iC7QF94h63Z5veEtUszkqT8YdSq9eGvuDnVaCpkRp5LUPhsLVzGbrcdK64g5",
  "key13": "5qN1ZMNwWpw2yEFamQkP39zEykroW8UXvYbsfy1G2dmhsYNVhWfftBn3Rp4H8DTu56uay3vYb7jp3btDeBYbPh5y",
  "key14": "CcptvnxP6RqMYVdMADZGNmHirbMpYKE245R147vPbXH6RcJBLffGPEEtzhwW17CyuV5TuW2EJUW8E267RCsXzBq",
  "key15": "3emcjLNFKsqWfT9pxy2py76hZZyLfPJLWUxKc4yZmPqSQ4sqwoxDmdN3YAR4EsTbAsWsoummzCFbnFg7WEbAyWLF",
  "key16": "41kp5xVMAZTD2ZhS5sguPsGV93nAmdRT67gQiWFWShiaWzGSfDC771gLRjNHQQGDzDWu3rZHfVhp5nBgskJZ955j",
  "key17": "459p3X2yw1FF3Qeb2vcC8ZU8LZ5NaHu8wgL8jeNta8EqDu5QTNb69CkYVYM4x2UjCoob2nVkrN9crxFVqiSJ9zyk",
  "key18": "2QYkKQpTCYgPwTQSrWcVhVibyZCFZCjNtMi153eAsh5fegwiEbqUQmvDVGcTzE4EgsDSFyLAaa9j7ZLS26Fniixg",
  "key19": "3A1qpibb5ifLBp36B1isvRv2oy7WDEyBqXS4Cv7i7bVYiPmo36rBH3wcx8w64t8aB9VDc6DuzHaVxKwGubAAKQM",
  "key20": "prNXKfBuUKpLPK4b7RrpVXqYNm9Ydip4rSUvqD6guabR24N7meo1utPSPVwWSKXQMPw6Arga3csDYGikUyo7ng6",
  "key21": "3Hskjp57G52tbT9FvzCi7omvjPcS4McaDwHMLYK1qmHFUpX47eaMjzYNuu8P3a7ywLoRnYJEpwpKxNo48vP31zPB",
  "key22": "4NQx191NDBQ2TEKE3yjQVeqmhPX9ywHjY9TqQ2fTdePXi3QjQd6fpFN5sEKC9gCFr6EWLUprGiujcDFHaqtQQnjX",
  "key23": "3FDCXLJSLnbtRTqHyWYpjKEynXHprzBdSVahspAVSCBoxdvSWBcGhjnRbt8orwRTEnjkM569Pco7EUprCMZFuSpL",
  "key24": "3R8ESH3UiabV1pETFdqjLd7QMrC4A6LYSE7ADE88xYiHcKZEY5HsVXaJsx5BepQyqZTZJgoSTpvThfnaqJ2TpgQT",
  "key25": "2W1CVcNEaLMGYRnnrMwgV2wwierbZESfMB8e14dtAUQqtjs2x1ByxWfPvaNnZCCatHkYQHtJFDW4snsnbnjLzgta",
  "key26": "2jZgrqAGMrp9dXaVTzp7bZvf7PqRPiiqnDFM2vvcbuGjwEfcwz4ZKv1RA2jGpLE69dnZMV3U4fpoDQ3a1Xw9S88i",
  "key27": "3U5kzseYgW7kjiivn4ZjQVZiMsg1xraZnzpDap4DZ938vjssQqbGioc3aiJ7w8ecKVzDoYrtgvxkUcc6urVknoS9",
  "key28": "4P4XRGyBAqriBKkC69CjMotxLDaiqzJxGyWptNy7MfFnwtURr6u6PpJ5L92nBYxJzXutvSLsLqNX7CoSTxk7PtYT",
  "key29": "3WMxffH6ik8o8wbAgV7z3GdnSASKrnV2tdYsMBVjLfeRW5PVreEqQ3u86twxHc7BCZaisPuVawUYExnjC7Rgjn58",
  "key30": "4P3esLA3nngAhG5X8L94cuMFJMVgmT9EFHHaeE3dvoapie78yXj4wuDNwacpJutJ9Pu1sXZ8jsQNzmpHuGFJNAtj",
  "key31": "2RCiH4zo1g4eMhXCnR7dVVtpxWNK5B7zaosT3Ea896DXNeMX1RUSaGVoiKDUhHnBwkEU2RFHowZ2VXvKfvNWt6Gm",
  "key32": "3dV1UCWKQdqgxFCXRzaS4FaWcq5fYQd7xfDmQCZ7wXimNdUKmsQHLfC3BvqZddFWLFeVqGkybvMCXC1bjjFTVryT",
  "key33": "bkZNYMA5u4rpybLuPJhA9NdefgKdTAdFDLtGzRzqbuXpTo4sdpPNzFE2ph9xqMjXDYNpnN2Y8fGw66iCGXo8RPb",
  "key34": "443zq4ogWs69fAbKkvj4Rv5qjoWXB9hsuEMYhAi4EZuXMTm949xDAXhyZWKzZRyUwpJ9rmPa4Dndh5hnQ2SERGan",
  "key35": "3ZqB5eEaGh6BqeLrNT4FokwY6ros6tRRtkyMgEFTacdqERP8BMRVUpd3WunSQqHmQ9rJDWBnuEniyjtWuYADi8v",
  "key36": "3zUyuaFjv2GvmAYdyNNADGe5VRjkZK6E4VyEhKF39YGThaTDehEyJ2JRP1Ln4zB5hvmnBNAB3mpGoUDm6Ane3CEo",
  "key37": "49qCx3FDh41vN28d6Stei4RZaVhHd5jMfpCD4KfrTRf76QfxYwm72T9NUNTrejo3wyn3neMzyDggSkhx4YSsyRix",
  "key38": "2fSqQxfoMyjeoti6LACA2EetvRohhz9btVFaLkbirGLD9NMaRRQZH91MDnTb1gAGzbgfYoAXe8SmuU4G2wmNpx1x",
  "key39": "34rewo6hKRPaHwF41RkDbKPTpSoAJxXkSanmEEUcf4FJCdrFDEriMxpZQBdj1gyC3DQ5zHQwKd9HZcSMWD7uGM4X",
  "key40": "3yY7fz6JXwPkebPnxjevQ15HSMJYomC4DknKdYdwYvE6sPMTf5pVy5mow8yfz25B5LGiPr2AFSycfG5XnEK2rbnc",
  "key41": "bBXV25xkAQXviWgmmdMst3325rgbyfp59iM8iuB348qm4Ey2RJJnXbCmNN63Dx6a72cQLzKqc36vRD9Q9GXapz1",
  "key42": "2xbMBgKCcFafqaKadfJfrJP7HuUt1buBpfpWsbCxf1b6FLS4eEtEn9bX4sutcoCv9bri8RcWz7FkT7bMNyszc8iE"
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
