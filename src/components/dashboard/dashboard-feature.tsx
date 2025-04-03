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
    "XVqdKLMmjv64niYtYZzfd6PFgNo4yV7qL6RUFtQL2LTQEA7Gade8k7FK3QZ4tENmgrCVK9u9d3goPkXh1QWpLQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NEgmisbsnjV9ACYWSSXuQt1a9saK2518X9ewjzkNKBqYv12dhJ7V8hirdNCHxjvpYXKabQdzyPSzVJZxhphvQye",
  "key1": "pnkEVtVEmq9t8szpMpRxkzoRePvgL7XQi1LxEFPtCRhq9AYdtHqquPBVnpHdo9kfJL6EmGtJ5YRGXaZd1CiEKxz",
  "key2": "2qcEWa4RgLa1FJ2WnfMRPP9d66FtKjdJvQ3MvANjJofKo4D3xaRiMriSVFrN3TBs5CSivUrqcSchCuE7a159mjw9",
  "key3": "5ZTBhgYmrGr4tQVx5qAGC1Ko871aF3nfkZP2KEBjfJmAfy7HhyJvHvJJWgxiWq1ut6n9ZY7jBuF1SMUEKAwCdxUk",
  "key4": "5erCmFAgu6qHstsxm75F1MdZ5LtJCKdW5CRxArZ7LiWiPVELoLdu4rnNbbaGJQXDZVryye1dhRFuzJguSapt49Tv",
  "key5": "2SQtg36KKtSf1zLDEHp76MBTYn87tqLdM22zLKUToXxmDL1uw6XZ4oNwJaCy6mtwZ34SiCfDhqu8XtVMEQ1vzMRm",
  "key6": "Ft4yUBU298bEXR5DXQNExUtQoQkYn6kQQUX7ykntHo2AHb3XjjFttG9Gc4gb96wgyyYLtP6KNNXaPVm5yzAVd5S",
  "key7": "2QNPSe23RxyMGHJGwqwqhm66vYUiu3J2sM3kfqYKaSEvsKnwgKHqhoBwFUAgDxroFyyazQD7Wd8bdrTmevxxo4Th",
  "key8": "22BXGVN4eDm7e1LL9J1tq17jojGT5TPwahnbdbNNdthz8aJBokkNUwAq2NtW3qSSoPaLj71wJtVUkHHQn5Bdg5qW",
  "key9": "3ziRCayne7d3undbtfFcovEL2Ev5YYU2ELVFHNfeyvrM7dfkUoikLa1ys2HRa4Xz9iceE9M8hq4UQn4yeaNqA8BE",
  "key10": "5u5vJHs61dujxp31Ktvf8z5yefK7vBg5PuJbn8Szf5vpZhW396qUX8tWa3ADXBzp9D1ghFzGj7it3EmAJ5cXWhXH",
  "key11": "JitPWz1KDviuVKojjuHn1iKEVYykZ28atcoBd4hjTY5RxThbHKfVJKEW8qVEsvngvisjYtvBfWq3ZPC1HkFXZH5",
  "key12": "3MonwhUyTcYGUT8g8QWHxQ33Hb6Z5JzFuwnW2d3tw4nB2PbBDg5QXciHf6UH67yB1HiFaALZrAX6sAQ5s4cgqzvW",
  "key13": "3md84BfpQeRhuacd6chAqniDD8E1vi7JF1angqHgmGutEv4VPQb7ixjaA7J8D29HmUA9RMBwybSsGHhpnzCHWCDa",
  "key14": "3D49BZyjqktsJ34m1Lr4G7846RhBDmp5bTyMqA2udQGS3HYSRfHA256eaR6MMTzjXXLZkg9djKSHAX82DQgdxRB7",
  "key15": "3rJDKDYQFztmxQcqiLkvsgVufWbX862dkvm9eyqY2NbqZjPvhBbtE92UYTY4sQ9MpkDfK14J1rw1PWgFtYQYR3zk",
  "key16": "31JwaQ9SfouvLPRiZtWHBs5HSbGVqLdjHkTHXpygNYwnRLKHXnvg8pGDv96imauZA6JnjrmGociG4iJhEzKJX35E",
  "key17": "63u77SjudCpgS8BVmG7wkjoYeM8268xZm5VCu6GffYR3gp1WXTsSCt1a84vt9FKfB8sa98Dpk4eUm7m8Sn45gqLY",
  "key18": "22my6fVTWMVzun5dktUhdciHMte7uSCKAATxJSXnGLE2YQNcnfmJSSK8STeRowb7AwedT4XLSnrAnGk7uod6sdAG",
  "key19": "5cro6tRZmp2aKnuXEcaSNJ7pevJAR4v3pLwjctR5S5DeCSetZ3G3q5BK9mwfXQJdLPLxbz7gZg31iAmBYkGKPBL6",
  "key20": "25qTJjo8eZhYbh2kTboWQ9wSiBYXS1kYXu1VYKG2bUx1TVNkUiKuSp8i7SHxpDDm7uKwqNy5gfPL9dMFnUAYaXYG",
  "key21": "2dBBgesdCxjZoYaG8kv4pZsTwEgjvb9pqfPgSwXLgfoawNJcantwJ6qi8bpDLS5BNDV3J6yoFGsywKkgZXTt3qB9",
  "key22": "Wqy2UPL14c8RdwrKA7XSDQWZBQks5yp1FKzktDJJ1SEALgRuC9VBfH2qBR3S8NWJ2LU65C5xnttyvYMM4AJXCXB",
  "key23": "XqVCf7S5bZT1daghfeoLTLEFNBEZhzDiZ9PAcJmH6yX89E89oeFeg4GvVtgv8dee7SyNpAmGLBdXCZ9ghzB3hNi",
  "key24": "5YRCpz5xyCJagbhmYw8bkp7ZzadNdpqHhS8kXTTCet5nvnKHRTFWTMDgXYwt2yLHfKSigUhFbEtKqYt2X5JXtiqa",
  "key25": "3UR3LZBUbgJnmYeTFRwBBwytTGsHH8PMTcmbY8Fhq7u2wC69ExdTK18zkoTrF5aoTX9DHCRLeoUwHjXcEbLsFJUK",
  "key26": "2igGzcW7esSfNeQToECfCZKuZnH9nbDTFCQt3LfPM9e3VtozUStP5e3zzh3sJQibQHgbmZkbQB4L7WAb2c52mTmg",
  "key27": "3XPfRhFxRqAUN5n8zzdUx9Wj2P6oWifFJeLf6QcE9gaR5SJZLmS2rGZCf3u8m7ZdV4kCYZQdmjieT1aHmCGFef1r",
  "key28": "3xCPLvLWkmDjNoAetimEwdZFK64sTRLK8MX1Pz8GNNPuD1kpZtriaYgT5ujjS9g6kPocyJtpkKd7y8QnopSW2r7c",
  "key29": "3nAV59hK1Ak9KmpvU3vMWeowVPU2qS6VEMeh1FjZDKCS6Gn1Qv1sp6xPM2aesd4hJ3TKhFbpwxYwDuny89bFLNPp",
  "key30": "2wLqgGsZDQ8uTuLWZTn7ShMwFQmttFTm1vXeWwgJMfFRRckb5SyBcPZvrpkTQCcfKGMFTtNxtmHd7LLRLDqh2nBj",
  "key31": "4wBHRE2cU2sSejP7aqbYRnvhGZbt6LQPmGnuNQC4pww4BbbfKNMja41ntLSu5ctPrDYTkn3dJGMq27VHCqRn93W",
  "key32": "2BsU12NThR4HyqQrg9qriwoJtVdZpAhbpDgWDXcRSSiBtyvvQuUebseYSZkPxT6LrFxiB4abAGBidmXMoDXbM1Ln",
  "key33": "Sn5Bz6FTF8tTB4aepexmYrs3STEcsgDeCdg2pGKH4QhCKZaPMLefEBqdJQFMP3zRhby4jwcoGSAUfr5muizTF9R",
  "key34": "85CiBxwQGb7F1Yf7aaZfKBqgQR3fZ2YpTEQQziS4MFciCngMKSgDiYJN3bR1r8778cN3qg8bPX1e6NTNN8qNAFQ",
  "key35": "38tqFgLhoCv8QeEJp7Ygs4L8yxcPa2oYYsRCKAEh9iEPGGHYi9ypNr9Ggq4nP64FdXdHK5okeHApqDd57pEd7ipu",
  "key36": "4wfee3jSL7k66kRKTD7DERswbe4v3JYHGHboNwzixU95DbGEd8QxwEpavw9VMcq4CKabGn1BHQ8zqovT2Xsj1AsU",
  "key37": "z7KQJpJ5hD7s5xUVviGgkNbQCB94Uqsa8RcJ4Kw8u5Ui3KXupwgzm9ySjByqqtfB7an6N4M5eAovQ8Y6daRxzrG",
  "key38": "vJX359SL478iAAJfPMgLUkL71Hexm5hCDx9ZQHarGJdzR43gPNWD7xxxjKVkbdeLDY17JYLN7QSFSuw28Yk7pvN",
  "key39": "2djgkhLuSGLr9vhQVZJ9aZoATWs31zQsfjdYebmjk6hNAXXPatsiwbTdcCbQrRbKSjnoWYCVaQyE8mjd5FCqrQMN",
  "key40": "636rDcBMCjsctA7yuQKhymMMyttYJCRpZ86RikHvmuGYN7SNKY7vEtzvBefYnPijpmnu3UK7H6hJzihwsAU7J9xD",
  "key41": "YDxSSmhgVtAJG6uHuNMomJ6bEYywL9VKjUGQf665iUybmQFAmyjpPcwxqnu3uAUE3uyQ23tK8r7tLKmUH6mBRCi",
  "key42": "3GVE5yDkbbTcCUhNa63ZqD4zoZqXkGtj1smRdxWWS2sDv6kRWmhdqknawLHeNQG2g6LEsbkgGXfdsWhv2i1XGrAc",
  "key43": "32RswPvPVbX9jsDu1zEvdsrU9XVyNaQD5MWp2MC8MDnzuNBkZAG5ZKS262CT34nrKp6asdTpG6witaPT8n1eaGvv",
  "key44": "64QyWTCCKY479UsF5RsxXw6yVKaX4UJLd46wMsVvQgscet1fZhmgFS8L3xmvKfspNmfL1g7BSbv6H1Wi4DBvk6DC",
  "key45": "xz2wkVM6TGTJ9bJhSkRWQs6JKtViTQnZNgP46r8kYoEh2yiXSQFNFvay7C36E2rYHRyEask2kr98RKz9vnwk1M5",
  "key46": "3ZhxmfFmiBwZcSj2Gmvf87ZNXVpQpN3vLopakDeWVA9WJ7EiEBDfF98GG79eCuvn8o8ShWdzGrZCPTSV8Vzns7Rz",
  "key47": "4UxaXHzqQPjLVof4mguovixnFzSzucFw2rLFcYQeeXGC2i8kZcLyZ7gfPNHw9PzrGuX6bdKGsLq9z67r46BNM4jG",
  "key48": "4qmQVnywbbdHJ9fRfYVwpuqanb6xiGEX8BnuzkA8SCJkaoo67EeEwEdroxy4pw28urSXPaDVdbTuARdH5n9u9wPG",
  "key49": "5SmWC3rr9Zk2UivWk2wRrwXr1A2qoum69whRGve9R6vXQa6Kuuv9t7vsnx7568zj7rCfGiBMGbc6gd3yziK4ppZB"
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
