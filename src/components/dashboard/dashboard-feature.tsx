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
    "2BNE6PX6Z1AmhV1fzgQbVrCEwiuuK2YvDenSrLLfGp95nSMXz1XNUQrBRCpbzcvjQTXbWrTMCAV7svCy4gbEwYDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MhxKKCKvZTk44dwQmJ2E9dGNAnHD2k7UxJSAd13wkxJYx5tXXeR5tL3D42khDiMMhnWAr5NJVxoim98LJ7J9MDD",
  "key1": "3JVTaust6X8cggJpR7S1dDkuekqebEW6dRvTpXmpL32RtNy1aSL5vjC5hMx3z1pE1EYftfZdhFmnoeTXAcubLEvv",
  "key2": "3X2AWY4gAAkTzUvibFnqfVxSgBd9pD9dZ4SMpXnVFzpoDN6us3GwWDgHWcyjXPNGV6VEDkUS2ayYTdgKFRiLRHLK",
  "key3": "4yB44rKgS9cHz169fcTyHLMRzYGjpS2NbEFaP8oKbP57p79U7EVC1QrYVSANWPCQRcZ1gCZPy6yLwVGFEVQSeNvu",
  "key4": "5f5EKbXfAoumAmJfo76d3Mkt9J4YxqL3keP3Rq6oP1A47VoghmRmvB8d5BASDxEb7XJgDsPHvC7XhckyPEqPwbRr",
  "key5": "5USxh7MBxKfkywCgs1V6nw5aRL6ZsgeBDnXt9GC6zeW1pDkfxdKzze57545V9481nWoibhPocpBrePqYVqywYRVN",
  "key6": "2zPAJheCeR7Cka4iAUscF7ypwYMixXwauqkVwKQ4VEoHhehbMJguP558ddc5tCp42xbCX3yr6ykoCqsSkdu8LgEd",
  "key7": "5imLQbhhMpNsjxMuDHiArW53Sme79EdMwGFJBckgjDfJ5FgWbKWBk9ZUKWdkMeZbuqJd1fHNwVUYDrQhZrP3G4mD",
  "key8": "DuSRiWf2KBzoqD2N7ahRBUGrXBBXYzW2iBWkroxuZwVvTUw4wxW4PaktnZhX9xTs8LDAVCsYTrQGrPDUmq536vu",
  "key9": "615Utn1aPXGiEoT5MAuRtppwWVHkQVCv3mX7zV1z6GfLM45sCDdnP26GfMgCtaXbctjHCT7ETSr1RgnuHHsxHRsM",
  "key10": "2NZEQHvakpstuX9KG5aHHEXgmp3AJrNKBYWWrCGULLAEh4JxM4jcM7rEKS52F3rdrkxRBEjPP57heBfvfbA562VQ",
  "key11": "54Pzi9dnKGdNLtYyeHzResdetdkLWXAT5EbwSvNxSfBsck68Wkmh8GCZSVmWBDD7VKV1K3r8bg5WHwRBwMPUHsnY",
  "key12": "2kGiYJRDuYehbJZ1s1EYkvD3v5mxGid5NoAKHTyHbjDKsSVLan2osDMEvEigi9QRazty716Ehm7HKYdvvUqc9hx2",
  "key13": "Uuion4RgPeM9cinQmQrXTWPHdq4JKbdgHn7c2RwGbT3W4Hbrjo6KYXCKYUCuveLMd65zjCzM3f5bBGRjFK2prfr",
  "key14": "5JMiwrsYDBHwzTSdBK5C2jcSk5y7LDxqMZcM6uby7ffNWjdeowUjggrXxWGPvZKYtKVGg3aKARHmXiqynYJv95YY",
  "key15": "2AqAevtKsC4BPEtLgadep6JUzM6hdXevNnfrZWqKYtR6jBRMxjyrMPgwmMg1XK3wgRA9uSSvD6prxAcMpgCGwY3U",
  "key16": "SJVZnkM9dVL3JTCaXuddng5F7is3dveCPo8PoQimnpw1zCkoTyfmcYQXF3faXcZ6zRBBa9YthRSY6PMi4mw7Eco",
  "key17": "8zTBpKuX32JbAAkhiZg6TBttxeuFdoUUNFNadfZdbMBSz8Co8uivELnYJp2t87Ph9aGPwYwTWs3s5CUs4CJM7sW",
  "key18": "2CN6euhGGXiFTnnTEs6giw18LoFroNCnAKaapAf2gMdLmNUpCkpWrbajqgT3HVHfMjz4AD1F6hFaPoimF4pCe5Vw",
  "key19": "63CUtYVjeAT9RfrDgUc6t4JbxyMshETZj7y7h197zDZi9g4BQoiDWBKxHiZRdyrsueDcdh39F5xv1kRrEjpL9YF5",
  "key20": "4SKmf2r1vrMCKby8J3WEnqUjaYNVMNeQKPgUXiLx7xZciekFDjTwUgKnStc2Qnf5hR9GRQ1HQX1UALYfoahb1GqL",
  "key21": "3aA5muP7YxBj5JFuLUqzLseqt362Q3oZMYHafGprdb2XsM56qK4LTdEkJDHTzUGih9ep3DEpDyukHYGsyfw5vNUE",
  "key22": "teSVCa2L9ph9oQm1YZY3Q3v7nYHnHZQw64ViozDZueH7Fkw5DQH3H8ttvjfQmV3RaK2dQWg4iwzp95a6g5tWTp4",
  "key23": "56aCfttXdYKPFsHvBBvZdBTpjqJyuc1crwDFShJEiBTM2E6otw3W5KHsCzbxbWkNZfkbjWH672TnQkLGk3qohZX8",
  "key24": "uzcneTfyozrxhFsfmjmu8cRYtN6oWafLBmJWux5jqGXnNmVsUuAaLoqKC2Y7ijERVbhuP2VRjYwL4vNoEj9zg5Z",
  "key25": "4jFyiBPfuQGUs6v83mviNnV7YK1u6wv47yyydBrNishk3FLaYtYZfabz8YaSRRRH4XpPZ6wqhy2AoMo7EimBe2MV",
  "key26": "2MCGpMgFPMf3x5Zh4v3PQXiEqGBpAfby1xcapYthZKBFUzeUMxDh8ugnNW8zf5qaNbkV4c5WP1SDoQYmy6JiSda6",
  "key27": "28vYwuJAijnLy9CvSrAQ2MLCsSQidgBWLv5Qxg5dRL4GQySD9bRD1wFdegXRaAzkHVJBMUGwZFgT3jTXYxpGcUWu",
  "key28": "3NoFDEwadEJKzgMrpk2NZw8DhFVyZZAgHRGMMyQzhzTtvEG9UY418jAKV5czGee82GxLc6JB7X2mQzQAuiwPLWGD",
  "key29": "5xNyWHqK8hxsxauUgCVva7JrSpyXwS2ZLXsvpFjMpDNFE627cbQb95seGVC4WBqWThrDmfgxwv6AsZTk1cpoAYQ4",
  "key30": "64nRh6C9vswZA2ruTwh37PmdnFBxAo1VgGao2Tscj8ji8qNJUGYorXc7emgDL4oR2UxmHAabzYFNiXUdgQGdizFX",
  "key31": "44ta7ZYyDoLQNdcB35yuupzdtPGLvqyh4939QNzcX2GHMf9fhYtPg7QDk8436eawonexXV9AFAE31ipx7MFMxXFd",
  "key32": "3imiCa2HZ5kCd69ngWiW1EMncy6jQ7NcDXjgtD5y7FtiQYFgWzrvbxyPARv5zUun31vhQM15jo8KWC64fjU6De6d",
  "key33": "4utDTvLwQ63Ubd2SPmk4hmLMTXgrWDmhsD5zt1iq2v2abANLWnTfh3L3taJf4JZdUSFoKnCHDmWKgcf2zkF7k5w6",
  "key34": "SEzVU4w3R26NxEz36PSDMuVdnLsHwRmAXicCNaH6heVe7iVdvtdqNiXPobE6bJMCbNzGY66cjTsxcX11eeJNia7",
  "key35": "28L3G8Gw1eHNWBLuiT9RntZCDrubr6yx1gSqfD91p8pxjHdySrw9erzME8mALF3mYAi2eZ4LdPMNw2CyUrBqcXL1",
  "key36": "55QZh3i4rQxVFvsk49viz4pN4vJh2nwNRCZHyw5kb3VfuhQ4Dyx2fxusuCfT8UbMrbkyPNbcTtzzmkmW9fYc72dp",
  "key37": "5cFRC2QYPc6aVmUFAThrG6QjQZd9vgPPdSiLQzAF7XfNRf1tryaYQzG4fTDsTx1UA4ebRoUL2aVp5JeKy9SecYqa",
  "key38": "Zuv3SSkBuULbaZ8rHXWEfJ5AK1pJFajiNyQF5nbzpZwULAmLpq2dy4xrhQQpJ1XNNYCaWhTfqbdnAAXcGyDtL4P",
  "key39": "5qHxvFg3wkYXoNEGgxjFXHFxVJ3yd3rg56EvBf5UpLVGXHoBKoLFdZRdjSDYHEmZWw4jL8wTAsdd1Cr57M3VyBfU",
  "key40": "4uSKexpq41wcXm6Wthi5TxPYEfg4Xx5dBk3Gx1BA5EGTuNLdLVDubXHumEPRKUacxW1zveCuf4SmaVkNSh5YwXKo",
  "key41": "27jwRqsS4jXD1BD2v5wpLKTgezCX5XvmZuwkTxNyPPcHP2tfXmhqmpzv3jFxBirumo48tfCmZjcSuYLt3pUeT7aG",
  "key42": "Twc36wFjJ4PXFkbYiXSktaDKGat6yb29x9yprTddaccBhS7gTDTVncHn4Nj5TizZanNsYNou4K3LcQdHok3EsSm",
  "key43": "4ZvDj6QYedTUV678QGqRNGxa1zqT5PDXLrsN2FK3gKuaMp9EFcKCdrLyhqGUVPHay3Fg87Y8cfAQdKJtorRyMniv",
  "key44": "4EGMyXyfCMjMgf2qnW7aFsUntVANhjt2cuXiywkds5c4ikNUXgzq7TEq89zA8AyjLeUqBbyDqJc2Lro8XNX2WFwQ",
  "key45": "2DQxzKeebTXMeGxb6z6TUEeX1TYJmwfoMHRonBjbzLh5oxmRQB5sX45dVbBEppg4gkfV5uJ2rM6yUu7ngZUzkE2V",
  "key46": "2poEXKoV2PZJ1mbNY7VbUCFx1NkA1igb74RAykGZcKNneAcUW7ZdjQMZMknBbhZkxd6aY7HVG1KXbFbgSyXBnTAz",
  "key47": "XiWkQ3st11Z6B2YtgvZSMBo4QGHeG57FUjiiPGUNZuyDbA7gURRp6H31qMmMvD62VXAJi1MVDQk6SJePUb5vAUC"
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
