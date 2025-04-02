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
    "7bv9t8u46CA3ecGyu9SKVA1evs1cm2qmeNyqyPmgfk2QGrcAZg9MhGQxuZjnXf3id6NYskRTib295mgv8ZmV2in"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vyk4ngsaN3MkKrTqUWDExJvjRokD88nDChGSUDN5C2LXXpBTLrNzQd1Y4hbjzebFsNe122Min5VxBKZqrFEaENQ",
  "key1": "4TG1N1sn7iKuNgpAnG2fZD5C4qJgtj3jbD3HHBzbyxFyCUnhfR6vrwQLZfqLUEdqHzi3hsp9GeL9dy3dLRz2voo7",
  "key2": "5nxzVexsrcEc63yWpfbSsT3XCSrQYFMQaXPAb5QXQQT8BQjrLPtpbfNsyTshyEAtibGSXSqj276LX3irAwm4drf8",
  "key3": "29HhyheiF5SZ15ipZX1HMRG6VWmkeNqnZw8tfxa3Fq2XGt9tbmeNimbwnM9hnYPSuS4hQzhEpC3o5XmTP48EuG4P",
  "key4": "2r4N7dtshikZUKBfMbzZDoiyfEh5N82QVdy6a5n4ZQaypwZ1hu9nVdNS4GHeYg1BL4tzYG5xf5Uy9TKY12wPqeV9",
  "key5": "2UMwQizBJvXJQbomoRMvfVC8DFNgGH87vL9Q89oUsxaCp3j1YwggZzkwpKQmQNt5Shwrssn5WCahWwZ6u27PgZ5P",
  "key6": "2qun8G2zacgRgEpzL3ncwsDjo7oHQ7ptoFtTsYg468S9KmjJgbSMvL5YFY8CNKdLLKEJpgWGePtsN2xGCaJTeFqa",
  "key7": "2uuqUw2GDp672wiH9YPcfdBDeFTYhtjSqQFkB6d5m35vS9sKLwnhjDPeAirH9vKpAkb48PF2Mc3N7Xm5nVanWG1B",
  "key8": "5hMmA85JbCoJf5U3Jty6m6wrfVqg2GjaNDGCU72HTxhdDQKyGHuTWkgQarXBbjb3hnR76KJcL1KdaFPAYZYWhLTN",
  "key9": "5kLiGwRGinmBrpkojuKopwmDZjoZgbtTgy35xWMNu95dHouPJrXA88CY7chZcHS22htp2RZKsn2TTXf3GTsELrJf",
  "key10": "3PzW7ZQp6wrUhDzWdyJZGHMCPgoPyBhkWQekgLSaev1YgamKKxnhNAj4NCif8wuyPEXbi7gWHTPuSyyR36b8KBnn",
  "key11": "qZqUWywmuQ55JkFapyKfMnMsqTctGTtXdcdWfXHMWxo9n14uJ71naqSZ7kXjJbozDDXBLtSdwgYsdHiMFwSGvP7",
  "key12": "3ufbNVNsivoiKec2cLQqjM6hmFSdfHEbUKTLJUKQnhP27uNF3XfxfjA4PM5W4cBxxwcxAq8UbCnyXKc9sbkxmpov",
  "key13": "CFEdVWS5FRTGwyvgJhZ7VnVJVcujhq3Ty9VJR8sCarrMnXX3KFBVHeCdtp9DJgW4eMzNgRdH6f59fuz4gTFSfWf",
  "key14": "NWZ2aBHRmJoRavoTmufgXaudCvB7LCEJ5AFrsEYgAscDXfUvTQW6W55AAZxsB3V6LVsB2V4UiQYPPjj9kfbNBhb",
  "key15": "5LJThdR945pmNBS4kLnJocR2eDqntXYNfzoE6wi7BZ8ZyBCWztdWWcd4uyewcC6KuwSmFNbYsfTKbsMA4s6VmChr",
  "key16": "4C6B6nvjaPXGyKxNL75yfdJzKbQvLbwqjUNm4qtUBWBXD7GLpRZMKvQrXAThMrrFknrHMt1RLSoYNJ6jbHtuNJXA",
  "key17": "5SbqDzA2ULFMRH2edhc5qcF5YUuXRmaT1FAac8v2A4kgZ3p2sGNW2vsi2tDsYNfDSpVChfGaoP4ATpyXpVdoZH8e",
  "key18": "3vMRQuFNwynhEyfjxLxbHAvDFD5zxMGist8ku6zjkXknfzMozavVYs77Fgse2gwC2eNzd5jt9rzSDTa5K85HnWyy",
  "key19": "4KUWriNrvaPuKKwDBtxFozK9fvLzo4rgD1fJGopDE9uY1CQBf2ph7u8nqvKbEM64d8gwkWHDMo5FzDREhJjJgfFp",
  "key20": "4MwLiis4higrnnMTR4ityZhYDwnKWPujrCNcjQts3m1RaYU7MtgjbdoeqLEonPRNJSe4nGVwUfFVH2y7qJcyro6k",
  "key21": "4yBLUqQqowbRjykrPL4321hhYMpcBG872dcE2MaYtdX9y4a3R81Df19guNtri7NSDFxwKzsy4eabKVz5MirooqRA",
  "key22": "5ANWkVZTt4ygozBs2EScMSLXJ67PfZCsZwXeQ2Ryk787MfREM5ogz4uuPNzNMTkrG6VDcSKvHEQ5SbY837ip7PxK",
  "key23": "328U21iWbtp2HxZ9yC5nd7zc9iz8QaT73VbYrQpxq5nvWhDUgkChszMN3azuSRZ65Dm4qAwfqZSSz7aJZajfhmim",
  "key24": "61jcewWjCB2jJy27XyfB7zSiyvELepUmmJoo3MwiNqZkyKoVpw5oYXeLMXaHzWwnnDY1uRc6vr5vjwED5Pgxk7Kt",
  "key25": "4wXcPttGCShFo9P6sJLb94b17awcPzc5DdufaZYJkrRH5YTopn5hG3xBtKW2Nx1tCYcykheQzZujJgVSAUAAN4pY",
  "key26": "5LiKm6798TxxM6qj2exxfGt4LSDqygHhUhBEMfMUL6ZncaPxm1hE5aiCwqWY7SbNhSQFT6rUxxxNMUG8Qn5VPJjJ",
  "key27": "4KBW1e6qwUpF1YD5CY6A2V937ApGXVUivnenBZPE5UmrowxNRcVqHM4DG6GEnDFc38AfYkmzxiweFf8z5ivfc1tm",
  "key28": "39evGxhj9oaMkFnb99tqa8DHbeKMxL93rPB6V81fxpDWnrZySJWosXxNemS93bdpZn5AqMWWxquyDMNS2L8bD8dv",
  "key29": "2ob4bwDbmaAUMyiiXeTjT6WStT4NFdrRQn3buF5ASrEFQEVE4chU5B4qu8yMdQuu82p9RE5fdCfWatGQbm16FvkP",
  "key30": "2QxPcDterjK53dff69ipi61EGozN4vD4hTwXKL7JVnC4bD2UbsdvFssFyQKtquzbyTpmNkBn3CJmpt8N9enC1sPN",
  "key31": "J5diFPGsi5hXUzAZQCMGpGWyjMuuqQ9TLhaifZxALNo8F81eJLUHmVZpHwrw6TgkYv32f9AptuThvcg7xyC394G",
  "key32": "5W9rm7K3ThMebKGjjKrbnGobafUBNqa8AZtCMv33qpA6BaVHqpf41JZ9gztcaYb5F9CxxiNNTCUGbRaDitn4ax57",
  "key33": "25gvE4zUFuZRZtvdYsKAAougF2vmCgaFfjJ2Q2UuEPcoaLqVmt89b1o9UbuT25b1U4dwmxtCkD6H7Z1VSwgwHj4n",
  "key34": "ek46FSW6EULgAW4qVptpGzaxj3syzdPD6NeLrWomwox7f2wuEjZX913uZ1A1BVyKHx1k3TeTdX5dkqw82JD4pMx",
  "key35": "5yn6hksstYyhmLkLEaK6i1azRxbwxg4FkNSoGRCea18BFxAq3Gfa7u3M1hakpfHumbL4RsuS6yx7zMRdovE1CbD1",
  "key36": "2EteTkjrxfS2qYKo1gc1WpkDjTg1ixUM3F91Ui1SrBNHCKFdGy7Gb8tLhnXg9qQnaudZt7a1PFcYdjKvZccrs3Ze",
  "key37": "2ZgYAPa9JowTadzhjJZnmdmeqhYHTjm67yNwrpo1ECqzvoN8WmFhYNSPR56LQHLGQyGgBdnQomsw6Ac3YXPbzPAR"
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
