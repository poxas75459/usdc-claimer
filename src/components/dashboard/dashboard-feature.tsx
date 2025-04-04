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
    "4HeNChKK6HVQGGZzs2caCbnzA8jSH9tEds2FZCtZBPoBe9gsdQGRro1kVHabRn1Gdbg7uZuDHwP6xVndQyzPUJC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bmfa2pCK9XPP44B9gWGTiEafnyuLBz9MYDcpy1dLD6Y1rUaVBaybnUainNrzJug6ss9T9Fc7BR9BEQCcfthRnUf",
  "key1": "5Vq1BtHSQagy3cNxTfFeWok3d6faXAPCs3cavWXjhLUvjug5k3NuY69BTxupjKToRrV8EvTRyvKM3b5GNYz6SBuJ",
  "key2": "3PMR87i1oNeFiS2Epns7MBdz4rWG62WmnL8W89LuUiZSfH8cUszhotBZqzjL6dxKqF1Xy8qT8dyER7URnq8ziG8A",
  "key3": "5WG3mdHiyTmfXC1LTcucwn2YKVUfnQVx6ACdkm5JZxitcXkWVGxMADg1CYEbfZKBkgGiCL2QW2qUgPLyg5jZ2CWp",
  "key4": "4TVcdheZLb3C81vkHCVvzcTJzuzwh64CpAc4zTEpuNERjT5rbid8tNcBUZXmCT6ZWn2BTS8JNU3EuSjvsmskxk5o",
  "key5": "5K9qnvYKgohYk9vNVk8rGNcX6sUs7f3q5Aptjth96SapL36CijAAwqDYmBHJRRaF4vkXpx4uKX6UnKxS6NYWN5fn",
  "key6": "4iDiTtHmi7Jp6NZvhCwpeCwSkmZWbKrk6afVP8shhdJa74Gp3TLL8yaCsW8ddy2DHBib2e1ZSUkAtiFbBBwwYTu7",
  "key7": "5vorxfZW2SAUG8zFoegH5DdSL9bJL2nP7dPvYpFEx3LTsPDQSqD7GUnxC5mXNATVrdhvMAQKWkqiSh4LnYgRTKzf",
  "key8": "3W3s8P9uCoxDX4WPthcJ5Q9CDhCY72XYp8m6ZFaLV1Hs8nmCPsVheaxf9CJQJ4GC7UzPBziCwDJxC2WPBHuyu16c",
  "key9": "3JLK6GyqfTVizrxw4uSu6KssXYiDbtuBJ7YJuLZU7n5K5xtW77FUeLXG8hkWjbNftJtKQK51xUWJTMTfbTuCtJoH",
  "key10": "5m2oAEbHDgVFXZ4qsdkJhGJrnjByJawkMx9QToQjYTtra4Tn8whkeEDeqGq7YqtGhU6qE5ZXWMD8Bg6LcBU8JZ6e",
  "key11": "iTRs1od3yDeqdkLga4g9uZqAgJsvtuDN2BPLLy4rxWaqmGoPJvZ46KL9DKzXkTRPE1L55e4Bj85VrjVy8PDRw6F",
  "key12": "2JZmR56MwCj1S257Sf9Me89T9TNj8NeXB4U3eMZr8GBhXEhaxfPh1h8G7TyZKcwBSKPvWQromVJrVRxq7gnk56r5",
  "key13": "4Mvv9LqKUkCPe28hiNxycWixHT2RuXWxprqc17R5wfLEHSTJ1bBSe7zfMvnwZKzKDcHN5LAJWTLixdxeonRbBjau",
  "key14": "3UtZNqHAes8J1VRB3ycT2zPJfG5mK2PhF5BCcQXQVE1QD6CeWkADZoncNKY9RCLw1HCmt1P9vSdDsudu2TC4W63i",
  "key15": "4cBEWBbtXV6LahG11bPHoceHVaRJ11CFH7zHagc2tBQcoy7ijnHLqnEkPWhipczmFEuTaZTMLcEkt1WhCTfW6ebs",
  "key16": "5jfLpDEfFFeX7b4bvrkTBySKEqWDmsvk6VKxAQ1vYTsWZRM4HkBH3sQ4JLwLn5vqhVA2WpXDTJGJmb3ERZzzFjmh",
  "key17": "3zKGwdFoEvgNEYxhj1kVs47aLVmBHhcVoJ9SVQATqwdXu7U6oystiy6ofdMUyTVrHu9BBNR7nsPr2XuXVswbEDLa",
  "key18": "2tniMYhjjnzUpVUitXkEskvUFfgnBDDHJeUTfc4ebvSVx8trrzPgTPvXMuyRz6YU1iSyvWsVhp2YPsF12rWp2a3N",
  "key19": "5V1nWD8f98tnDNgjqj8Dk9abXPGPZtTurEfKbcQxVCBckAVuxD8ENgT8eKknjvQvhhoqueTvSbt2Zy7ybjSH7zh7",
  "key20": "2xsKE83UfEuSgHchEYb4p9cFkE49wpUzJGgJZQ7SFRGm8YLYPLVT2NYaULAPPURrNFCBR944USWanaqgcDvgtwhj",
  "key21": "2bA3CwSrAtEjPmWC9PZyNL5CshunGb8wDDcQUe8E4cLdAUN6ZGLfrbaQj7UWvDARjQifzdYTNZUS4jFdKkB5KPoj",
  "key22": "5a2GxguGJYwmxzfsoLnqvPATSruXmRuXCwt9Tqdpyqz13D48nBFo9NYmCmn2JcSP2Xc14VZKJsFvH8C1VeDhSyfv",
  "key23": "jXze243cB7t1Paiu9XPPFsov1mbnMmUeZJzYaAYLT92gTjJ2nFDZFV8z6drK8dpVFmQDi2Rd55UJfmtq4WaZYpL",
  "key24": "53DDWMkdoWjPehXr8o67xxTYzVUMCFGbnJAURhDQ7ZfYXxpciWGGonCv5wpN4QZr7B7LiDyUu3zdrg3ZERwrXbYf",
  "key25": "2vfQj6p3NBQ2McSBTsN9kkzqNZ5gb1q2YatVyZ8AnBJgrFVdeqQoHKYEH83WUWmc3MUMt95eudVGWktm1W3nKh9j",
  "key26": "5GdYsaDUBVCZ3WyT3ZJJknLyi3FStJA2KQutg6SKfRh5nySoWaGnJK8UhKGcDrGoo5tFQneNGWvinL8fThsk1ucT",
  "key27": "39q7YkRjLT79SbaPR3HfXsnjQ75oTRbzF3ApSednSXfGPTa1mftVxw9hsB5h72NLsbD7JF3FENgzNebZJP8mAEdZ",
  "key28": "2xXt1bNu7YnX8dGF77MTyXBTdqnwm4qYK5hnPNhjBpknbGCjRU3BBrighHCV1jZ9owU6RUKiTNfhbe63bEfV8h2j",
  "key29": "44G1Mxgc8er6dYHM4bt6bjmAnJBSXkVfpxn4vPnwidLEP3t8VkuBBAh2sAZmBfm7szV8SjcBvyWTsKdq5FWbMKzT",
  "key30": "4TK7qhHfEPbv53isx9yEsUKnWXYf3YkNSpWXQNwMPsS48GPsjZ7nRbiEypuSbmjkqrdykaCMfMh6Aak1UA91qoE1",
  "key31": "4FMTgUbDnSUYPNBLqe2NQXPMTxPrpX5Nc2p8jtws7Sv2HnMhXje81338T6nsETX5zL7FLtKTJfXzRLDkj6pEmqFi",
  "key32": "ZfjS5qd3VLN85shMMVdBB3ShAmc1cistn3cCh1zm2acQPuGyGhGgqbDxzuQCkzMzSXpQqQJSZc7dU98V371uWxR",
  "key33": "5pG6MAu1b7CT7LthVxPSgJXYuYtGRAyhn7iSy1aiRrDPcu2WCudDGYMDkHR3inyiYaShnQJ5WwwAGe1VD6n6QihN",
  "key34": "38Kh5WFRJ7MnQaWksLXoEsCXBbqDTcimpHAWEPXzjtMFp1dk8jv1Z88p1WdXSN9FHGJWKqyFbUXzvV8T5JUJwEH4",
  "key35": "4WjXR2oBKiWQMmRTpLFr8ZCdo5G3hKLGqzcmZEAaNjmFzU3N4mAWopf6FoU46NAqf9E6fFoq2KphmfHrxd61HLYp",
  "key36": "3Qisf32hmg9Yjv6TiFDtN5CiG5oaft6keSfccfqnWKoLn8N6EGs3f1UUzwQ8UVasXVVogpT4rHoQyjLwbY1Bc3Fw",
  "key37": "2nfxxm47FTeH8B53uF3m7kPXjQNHdNYkPVVraSbwVS5zzMJR39PCkDv8FqcPK36S2e7M52H9oj7k6apmNE1MdsYh",
  "key38": "Q4LH7N4im7KwdoFk9rqqPVaYrhTRgCGrHaEhoTHSaYwxGUvoCdhfHMaFVwbGeb9nqwkxJ7eunteCNLJJ2jnAfyN",
  "key39": "5ijxbNb9sCuSAgczZ3Q5dXHXqEVDZNYgaqPyB3L3emAC6GZ1WTNSHEhacduiWVcnhsX4Va44BQ2ERqLN7W6gRPfv",
  "key40": "5XueEJN2zXTsi5tizwG1FyLxRTRtsW3uiPzyWJPvjGmg78ejbvR1df43M9c1zSoKs66Rpu9X7MFBMr22cPdGny6f"
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
