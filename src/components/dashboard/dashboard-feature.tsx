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
    "5dRhwaw3ifznNx7CJx4tnikzpN8pUF1GgZktNycd4k7LWSMRRZD594LCSoBki433FBegLUbd7A3Siyswuz474Caw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zbUVAT55j82oyD7QdMqAcWFhz4aJN8ysT2q16Sjo9RyxxvuPwDde1Evsi8DGkbkACH5MYjLxGUpkShpKEs868Ga",
  "key1": "4U7Z4dGYJujKu1QRpyWs5fUCEnej7JwsV8DnWous81kqozizip7dCZGjoEGxh4h8pNjrDwoiANzBiXRNVsuWppAL",
  "key2": "2TVxKaKAdkVH89ztAEPsSAwrWm5LvBBozdGJbNh8fhRpD3NNvU3JoorLNDPtDWtkYZie5j8rS3hxCvHNffDmSVdw",
  "key3": "5ncCDQfyn8B4W95VvxMiA9BMvnXfTrX3Xr25tMbnD4Uacnbc7wvab2cdVHuxGduAr7pfZ4LaHgmnZ8HxKETqqvit",
  "key4": "2NHsk7ULNq9q6X35iZkWfyPoW733yQ29WqFRtgo8pSW4mzfGvJu7BGhDvKE8mjVSHMcgKG37Sdf5SHcvL1eSjFhp",
  "key5": "2MHnQsw3ZbXZTzPFpmhYS2zfurxs1fA2ucZYYJ74tyaskwKsHfRUQa9bC7XQMgbXVH78kxU85RBY4tZRx52wT33r",
  "key6": "5f5i6Toq3m1p8eQpkPehCb7Khr5BkMP8EWsEsxZnjwWnQwRz6UZb3jp8uhLLoxc9ezEjqYy7LdECfgpbrmAUXL2f",
  "key7": "4r6c6usrgqo3vGn35NGSyZHGoAfxCSmEtaoegHM2ZtpGX2ueS2v8HJpLiWtkgZXMCEHtYoew8g4wy9KVGKhcjYi7",
  "key8": "48zvJpg8hMym2XcL5Bkfibp5cXiHKKKTMaQ1HRyYSbGH22piZn9VTyR3Hghr2wHotrioQvQkiTkE7SmrnDNs1iqf",
  "key9": "5GK6N3UFJt1gbGYQDcREV8mZxK3yYbYXxsibjJBrDM16bQrcUw2bxU4aTcHLdJGJRrfgjUVJJkpu2t51MRQUh8V2",
  "key10": "2wt7N1NyxDjqXTjtoC3AxxdGoUrKEcwFcqLo8kr8tw1bhmg4nZ1jPUWsBH3kjFFQDY94bfvcoCK6HmJrhXrVgucp",
  "key11": "4z8AgsuaHRWqnNtqKsoiP8sejYhNX6i1TzzZw4yH5Pjm2CWWqt5G4we4d62NdHeo19MaosvRfiP3ZFyDdtKUmhBM",
  "key12": "3y3eag21RudA3STg59d25s4MvtM89eer9ahvmEeU7zPLu9w4b9TfUDr6pF1nVtsEgzJF9HEf3y5g8crAEkHfWwMx",
  "key13": "2yeyQriCBNuj9mLM3HRKjcTr1px7n5Y5ZxFfM9fcWkEspcFu6WA71aqaMkb7NWALnSxfrBmtEmfpS9tmqUx8uXSZ",
  "key14": "4KqUMuG3iAND9nmaCpJurD54repKaMXMFcKop7oUukTVcMzQZTrSruHqcfdkaWxS3pt9jjvd5ZrSjy61vnUyyFfp",
  "key15": "2B7xw5du3SV2skQbNfEtGsUz4SArNGhr9fxs1TMbtHYc2VMZHXyUPsuv65WX4gGiVbRthGFa71ZUHDk95REHg8tP",
  "key16": "ZSZRzbEaaQGqyA3Zq6hUd7qmdiatB3kEHpuwrViyZ7BHUVH94PBUPCF5D7bvQj6wbGRkXnxJ5AQVqGB2pcpx4QN",
  "key17": "274pb5EWSBqYr4Gks6TP614z15L96bFgMsXzDN6ZEemdgcasrjoNMbuNtMQ9voqw2szFsbJ48cQJMMJqrBT44Gv4",
  "key18": "4XHk5BKPGMv8wZGzt3m2LGa4LiJGQoEyFk6219KEuoRWVoQaVwwRyp8hjQhWXPztpWHkhxSeJX48xLW93SnpAns5",
  "key19": "YL8iGL1Foeob7SFNUk6pRcjXa7CvheNv5WW24GjRKdSpx8q7qExJ337KojaQcnJoiWqkAbDohweRwjsy5DAa3yg",
  "key20": "5kcdj7FiSzKJovs3BYYARsq6sREU5QXNbrbVMLu6bHCEpq1B33GqdL71y255juXgQhvF6gQ4D9CNTnP5wZcHauPq",
  "key21": "x4AbWR39V8bP1DPRxTTyWVxaiBXCMNf6XU2po8iBXRq1PFTtioNmTfQCod5enPADZ85kVDUacw235HMWteZnq5K",
  "key22": "2iR9GmZ8PnxcKodBTZbPTK4XNwaNTA6kzPDfs5DA8w8YNL5HbZZ1NxHVUkxkRHRK4HpThU9Me1wdUmhscPsCJrCt",
  "key23": "2tWcTYrz8cny9jyb6jqs16nhsLBCbXficT6AbUMWCBo5dSMfnGaNc7zshFV8ZJ3cgNBawyjcKx49hZTmD4jAfGgT",
  "key24": "3xQCxdZp4kTR5dWmSm8LHFNFK89P8SY1oo5tPUFMHcYgLwQPhvqhs6LLsnu2rBnvovUHxgeURR5TfGYmN7mbep3m",
  "key25": "2ahu7zu9NHcSK9AesqdLWcrnL77DyjW1BfMw1J2nVeuyEf53qDjcKKo5XiHegiESzLpCibs3H5dvYGpdS8NNjueo",
  "key26": "44p9HGtLz7MPrGz8dBhBRWGebDFDyfzqbXwytuostwe1xCeTw5RTVisXPDLJFqpRGyCjn9uzg79NJxeSYyoWwhdE",
  "key27": "5FPAj833eeLrrrnY424Jhk3J1MsJ7WoTstv7GPCgoxxGHABvpucyiVvJie9nyBb5d4oLSdzfuecuKoV4wVdujMcz",
  "key28": "5wps3vKH1BukS3a1pbgYcu3YPS4K3B14Kdv1584oMWue8KrUqUwNn5YG9VRqLpgQnnH4n2SZhwuFtcUdwYECmxCW",
  "key29": "5stjcJbqbuj6vyAYaC7vNEcTwtKf6kwhGZTvNGWSB2hXzznwvXG2i2HNbEa1B5z6hgHy6ajr6Q5stegzDrqAgB2w",
  "key30": "3tyaHHz1BFiRdma8GA9B3CEveaFc3iGRtk9qGeUgmvKtBmrRGYRRpi8wn7NbeUb38TK2ALC1Shj3sHQwugTL3VX1",
  "key31": "42nMZ1jQ4VYu2XK9hxxyC1vkimGAFDjvUpHXj8M7JbyBi44Cs9ri8mgWK2dRQY95WreUzCydondsNRGNrmXVxTdm",
  "key32": "5FyoSPbrwbBLZkTwa5iTsunF6vmohpJW6Cz1sb5dCeJfn72bwEXG6xvidruWjmpRoZwiQMNLocSPXVqKrtayeBn2",
  "key33": "2W2bZB8Xj5TstyyW1b3aF81nduuhedDmmQk8bDk1QEer7WWuN2C5VFijp4tczuZ4EEB3JaHnhJE7An3QEcxFpcR",
  "key34": "eMjKZjUZxFQMTEoSc1uGWs2CrDi56QkEqyET3ui3qE9WtSfmXsp7mxNPJQXzY6sqsJzU86F816uayAyqtU14cZK",
  "key35": "4obvvhw2GMMBnALPjxPWzmFJky3wn5sMrGWpX5EfZ8CZpBxEiGDea2Ui4fP2khBLCQbVs4KBLPaQAXwZgc4JE9py",
  "key36": "5BHxxNGhYf6G32skt5cHs1Q6LxeiHyLD5hfNBNRcjxgyRmbLwBttC7qts7qDGweevsBxL9E5psGyzYgtU1WV4YxF",
  "key37": "EkB9rrD2vkX7MuhtKUBjWjhvzxkJ6AKWxdVV1UCTZobTcyhLK7CHUy76iys6wH1DCmdjqrghAuFCmakKPwFAQFL",
  "key38": "3cc13xtRCSD2mfxEGCs8z8SBVvCufp3KUGiyMKyXExjKk7qXiD2uyZUmWiJ3bMr1VFJL7o5nvvEUb9EzXanWayZ4",
  "key39": "ad6o8aHquZivsdXzAStYtmi54Gf2Hv5fXddjsb6s7qF59yq4KazEqEddPWQBcMdsxDn4PEn34QVN8KHsR7W3FrG",
  "key40": "2M9JtZr2sJyXw6RrjYtRYh4xVz9q5Es7G7j5Emjzb13ndauz57FTRTKRN1xn3VGdWwHNN1nM21k72UM1Lz5XwrNj",
  "key41": "myaMyYXWJ8p35FwdcvnnQiXuiJTrv3M68ek4P2R62wNGPgjjt6NC9CGPv2bbm5EH3RkgMkmwmfEWY1v5sJHsmzn",
  "key42": "SZ8kkq6gQfuXL4GM3jSNgK3K1krEBfT9L8xnqsNPnnjyTHrUQc4r1CZ1zGNG83mFSriqrbjLgRP3ptQZ5g8j8Et",
  "key43": "4VfXosTy4JbaUtCzXg1gxtNdbMC1UgHB7Mj2oTnLSvB2tMBSKcRsz21msxwFdchZzgBwi5unsF6PCBkB2Rpu4DGw",
  "key44": "42HPxZ45gJpLPuidxxv1wKa62RfhE5aAYXJ65J6EUTBzXXHBxp1aPnCYXT5mzbD72koaEwSqZbogEjNftwvTHW5j"
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
