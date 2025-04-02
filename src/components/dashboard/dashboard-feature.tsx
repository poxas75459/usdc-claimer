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
    "5LTtKNvfwJDKCxCbD5iv32t9tKcWLgURNXo7Kh6sudt12hZFDPh2EFajyUew9M8QCSfuWQTHvZTSytbni26ar6Pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kijx1qZc4oPJU5ZgsK6dxP5EbYHi613ndWnZc6ZimjApu5D7Dzhsnz8VmkQYMqSbY9AXkLzPnKkM22ZMboLAqod",
  "key1": "49At2JXasm24cZq8qj8bxaxsBPzxDnk8rnpMua9K1kPfT9bCiECrckqpgEiqAKQka5LptGxGTtByvriutgU9WHsQ",
  "key2": "4kS56HawMaYxevwdGEM7R2PAxXpvJk43juJTdkDNy8iYyLhjDfM6imAyh6UCduJQWD396bx9W1ia4KfX6vwsqoGq",
  "key3": "4rmZYWACZ5mSYKJY6eRmtCHuLz9MzJnccvj2eRd95Cm8LPKD8Uw1gAV8ifs7bvjGGMxGPHUtzWfkNFkVeCMXEaGy",
  "key4": "C4fdcpPDnB88RUjq4uNUVMwAy9Yc5vPiL6gJC63ZA62ND4QcxKoSzRYAGcHrGt3tpR4v79JKuJqs6CkgaCAxWVc",
  "key5": "3r2KsVzDRgoDWeBKkmwjS5bvjeyPBxz8CuojUSzCw7JHgnaCRZ2UpvidKkaxi5reaqRT9rKriu9MK98xv354Ufyn",
  "key6": "5LSFumg44QoDr9u2uJ2CVA6YKCtkQhjK5nfhdgHbZnbBMY4qBk5PJQNbsoukhkg4oyJYdKJm7cmEouc39VXFuyNY",
  "key7": "53igmpatwEgUu5h2o8Cm282hwwiFbxA43gVU29agQQLQ8tszqZ7HmcLTjTGSnr3ws5g9Ub5R6YrJuNkK6NDKryvZ",
  "key8": "5fbCPsBUEQ4qg5qiiFVUAGxrpdNN8kMHrXANgpARTNPTSM7Coj37T6etenTHSn1fm3pZAsvRtLFE7HxWaLm3ENAf",
  "key9": "murdLHbf47XZUyCsgxeJfjuhK9W8UqCme7DqAKcaS5CQmv1o4avSf9jzVafZYTDzvtAcMRaES1dn9Z4FKu844RA",
  "key10": "5omibZ9v4AUPN5BEEqVCn3G3TWNer8hEbqTixER1G3D799d25ps6E7CM8TWdMT8NEDMdej7qkFcTyskRU4XqXob",
  "key11": "48GUjUkjjsxHnvksxf7ZFGyb2xkXd3mUa3ytFjU582RQqnKbrtvac8YyzTLC2TEQF9iRvMy6SNDpfcQy5DfT91P1",
  "key12": "4kP5Vm1M7cwajndrYN6fZv6yNn7pG2KKw8Hkwo8s72jf1kTfpeWR84UCPiM5AYnaGyTkV5D1UmhoUyjFQMG8xSzc",
  "key13": "5RieFrZq7bwdXE4togdvEdUi17Buj7HmhqMk6X2G3ZYpR1vX3FoxB4Uy41zexyW2H49Ca3YNLxd2MZdssgpNoNL2",
  "key14": "4NEnquxMj8PdxSt2yLydZe4BS6gZeDUy8jKXk2rYwGqJ8eSGmeug198TgJ4N9UJxGQR4YTRpGYQzZpEyskibg1hy",
  "key15": "3qDhJoMDeYCPMvysYDBjS6VFuHnRfakNCMZQgyEkNXGXRXpcggqeic1SSDj5V9k7zEtLDDpzYvCfs8qKX2Tq2zsk",
  "key16": "3xtx4HyYCScmDM4xmYmpKpHKxXZaupE4deXGcDmmpwUMigh4VKSbiUEwyf9ojDJiR2aJxhgWC6P8GAgo1SEcqopZ",
  "key17": "mxx1jjxkUa9TuFGJ7RJWV2wLmZvHuHzukJJu2tXFZ9zK9XBJBAiEftGkM977G8L3UMwx8RzGd4b31rgRV2fwB6b",
  "key18": "h7Xx11nVzLXU5gAGBN1pffwGvSwskJYwCQWttkrxJi5EQdEthNiQCgrHJm7zLUVkQgpCVivBanmaT3ErtsHnC3A",
  "key19": "5byRipPv6PDz1f78QHWgJDBtaThY47e4HR4aQTvrMeWFjbRr3cx6ASnBaonsvjc6gkh2LhAaBCYz6YRvhbaRSw1S",
  "key20": "MxgufunhJR9jokWYS7K3X6eHwGE8P74gye2aUqsuf6pBQq76EurQWijEr6CAECV5UsrNXHTeq6UonLBaQVCfJ4T",
  "key21": "3oP1cTgSLCPxzV4ynSsZe4sAUn2abPCbP6dDWvcW5Bc6t1JLVSsUXfsuEt72n3AB348CRk1hmJS4F4CdEDjoxPbN",
  "key22": "37yGfEfSrbYBmRbuJScmvLX29jbNQEc3dGuvBRbTMDPnD88Qf5zVGmNWP57uxWigp7brS7JLFTDXgyA7eP5F7Uvd",
  "key23": "3DL8oUJosPYjmP9jYs1i5sMEW8K8DtRiFHoz1LGej23kBXJY3zmvhhbNKuLxbGSwSWyuFvDzR8d6SSBerenqnFQw",
  "key24": "5hDuUS4xiXk1gLapvcGFzzEkQQinKWE6mEy5Aav5TzBjc4nnQNHk3wYWToEvEv8uH8Qe4rE1Bu1fLVbBSCpw4zm6",
  "key25": "5ModBoDRhhQ2BZgJ2wh5ohga1YoJy9yUbmrwexdrFeNqPCqgcUhfUvsNuk9UX1ZvGMr7CYUv1KUzoi2MsySJN41d",
  "key26": "4cQFjUPc7xnqRrBxELCo9BzjGzboYLfBYQ7ETdzz8Pwc64Rkjqkybg3ph2p4ajz4ovRVhiGSHU28DFNe8Yj2Gxje",
  "key27": "3VHvVs85j4X9rHVm8xhMziJXmVXUEa55ANLMAKPN56NqoBMgtvwouNkmmSprhJsb6cMyfLSLWTzm63JN2fxPJjrG",
  "key28": "NCWNqJKpBs9SEJysnNZHj7JHihHbgf1rm1mMqLE8Ey7U7abGtr1Bw3FMkFkpEqcZBh9Jf1PSuoELuSoJHfaC59D",
  "key29": "C3hYJFvWXgUeRKAGN2ooLNLBVTbxXvtRsaoAymvonvySamB2nYiMHQM19sst6xdR39qinwyyw4moYi3GWik7zvd",
  "key30": "3xt9LCZvzZhHpyXnPJ1tWAZbxd3W2CtoTweekEsgtoHWnXo9PQ2Ee6Nc5qZYZvFxmVgkQv19wBFLU1nqqx3LfvDz",
  "key31": "4K8VkHY6hNroc1jkEw7CpnoonjFjjJPEfUwx41WwkdByajUZwAUz2t6aa4Ggny7zY82r5CqC5AeUfAUrinhZt92w",
  "key32": "2cy3EhFWMGj6PY4w4bEdbLRyULa4AVY6FHiuJi2wetKSjyGeeiwYHuCR4EdCxxqF6GCPUMskRzoxkYF1QFXq4vuV",
  "key33": "5tZWyLzEY3Hx8eakHvrmzyMvFNVvVhKwuXHb2MeTae8HbJox2vKMuuWuXWvDZvgygkxsiczNEwRxXAXdafSVJDD2",
  "key34": "5FitzgT9zSGR1A9uk5sEYGA6zCb5EzDHP7qjfrU59EJSwrxpWzaBurJYDKWUZrpKYAmmeDfPEHqDxWGep29sCPgC",
  "key35": "4LRDMGZcxKQHTYkedkax9VNwDrAdvkAs66ZFU9QNB2b7h8hXWcJrU8rngfsKC56caCB5CRNLcPZiwkDVr73i4vWw",
  "key36": "61qmdRN4Xv8ZTUfBMBZqTp3jdJNkgyjLoiD3c7CngeS8MEY4157pHxpCfyAN5iWSxiiyHo4UAW6ZzmLTxFZxUDap",
  "key37": "5EDAgcjGTUoWPPWU6DPujRVihA6jTmWSEG7jR87jLyoVrhXEAsWKS4sF1FzEUK1FDXfMLS6eiGtB9etYdBx8nau6",
  "key38": "5LmnQ9QWi77H4SB8AYv2yPxdXZbFwpjVkmnFWFccGb69bsc8xpgDHkzEobzTUJYrB55EkhAcs3DsBENQuxNkzxR8",
  "key39": "brzuDvL3B6m2iGXa5btZ4mDrmBzYvtjkhjUDCruDah6dMggvVx3JR3N4De5ToDiVdUqr6WW2v9qLbWveRRruXcx",
  "key40": "4iUXgxMmsxo72VkQ5MWAbvoreVTNsijY2cnPrzCLfAkdA6RmhbS63rydvgUXFwhNarqdSUnC329gaXhaCtcwrDZy",
  "key41": "d4abgU9wfwduEU9atWAaakeLvHT3GuW4a3wPHocv25S1kNEv63gErkBKu23iMsqquT8iMdVsmZBvvVAhWc1VBnq",
  "key42": "5hVriCUAYAun92uvgx6i3jsLaPGZ367drjYzNKTtG8ywpoc4HmdCZg2qiUKjRBK37bZ2RUfUB1oaYuYRL4GFSXuQ",
  "key43": "63uXuptbnGAmNsiQCiGjFpCBF1fKv9vLDCtkmwRF9Zjkj2TkDNv3a4Wfn1FKSiM2zSKutiT3BtrCSTXP39GQABB2",
  "key44": "3fpPCzuL7EBm8m2V86YBA2drBmMFmLQz1Sp6WaesBaJ5GjozSsjihTYzi64KKEJxHK6ef28c1Y3AqSdue3f1Ttwe",
  "key45": "3Pw9rboUmpwFEvqovpfJmBA6Dmibd1ZE5ykg2mciYv5i586y36JZM6u4pj6EScZtDkiVSYy8MeMLfvBCTSNmsc7g",
  "key46": "41sh1xB87ND2Uzs9V8Y3LJ714XRKrCeh5zmAAR4f1q44JG2xrkmKNahEYoEKEL5TJwr1g96W8w4ovpP2ua713BY4"
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
