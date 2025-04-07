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
    "28A3c4ULWZtTUKKgn6yoiJKCNE8T3VwXV1fqgrx4FtzvawNEieZc917uh67aKgR73jq9YUX38S2dv7GKVs5r3vwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gC4UNNzYZaJQ9rC3K9iPo85rLr7RZLi92Bivp1mTizTQcFzKa5y74b9Xs6XXxn4Z4qKirfd6TcuU8m5kRZPbbM5",
  "key1": "35EzX23w4JsMLgvRBQrzftXQ1LgQnQXTxiN47BNbV8n3WCT3njdvSQVNaFirisYvudhXsJYQbgXdwinVVRrJ4BrP",
  "key2": "4urwmoM2VJqkYRxyXChJGgQfqNENhECpbd8QhzNVK3NQhqzVxcZs4CFKkYbgV3zu7ZnGZRj52TmcTo5ictQ8BBDG",
  "key3": "4L5KotCUyWiTLaiJL7qaJoqZpS1yLxWsqZ69P1e94tdcKnz5F9c8Ff5gy8LHYxAHkp3CHADDDwCL7kYBjatvCPHi",
  "key4": "3yzQTVLik8G6GRoWLP1dmdV2uJ7Ni8hLAZH7PUkaaXQtr6eCY7pXpT7ovg5jz2cYVY8Cw8QrVbWVni8dwhd9y825",
  "key5": "3HeWXrHywkSpFMBgvbQK1Z97aCXbu1ikDAzXZYEdd9cWHqDbAHD7DqrtpoXPvqLcmBWsBbuhTBTXnxbiGcAG6qA3",
  "key6": "3wX4qkK3jtLEZ9MYBbG4pL7pS1Lm1PFAT2BsafmHQR7jTpFLa87GzzamdUHBLiAhUKmtQG2kPtuVWKGQU9rr8owG",
  "key7": "5xiaH8m3JZVdQuReoeV4F6s4JyaX8TtLEcYLHNEFKSotfdBv7EGjK59XMKbMydiLppUnwQMo67FZrYB2jzbW8YHn",
  "key8": "29sfm66WkNxMuRtvxqVcjoAhdJeyTW75puRyhcfupbPkhgShqBopXi4Ysu6GTjzW8uFHsaTZb5rAxKTrQPPGZ1Lk",
  "key9": "mQUkN3xD2MezZc41Nb9cfC2t7AQVqpsKYiybJ5tgKG675iDyWep4Nd5SLTELxkNbNmMaiDuYwghsebegmqxiJSD",
  "key10": "52eKT5XFVSe9xuyo2Bj581ZhiuwXSwNTtDrAQAULpxdL9QSuNG6sfsCv42ciWC1xZ1zj2cKtCjpuTbdj4BC4C4vg",
  "key11": "2XHvESZ9LDQtgSeUa5Wt92r6dLVaupnEbgRvcTNSQ2VdXLeMESkABVF4KhsV5mUYHAa4Q3C9h9bLJwStF1DNiyE3",
  "key12": "BxCr83xa8F5BPcz2i4nG8XfbfaPnLVrzJWDnx2divGiNQLsdBHUfi19RzRp56yFpjiBRXcq9n9SXQgKJ58hmR5i",
  "key13": "mtnyYHTXVM2EYM91ogwrS7uhSi2RMRtauQSuZbRKT3GdNXtK6dPppStNcwZoPUUdiB1LM9JPjHXTWCtWcMkUgWa",
  "key14": "45UCfYgf84qeoed5PjFL8bdqLeKCiVjunMy4S1JdpHBzoj3xCXp9oBFs38hpprPs5EoEyn7CbsNWu89uBzzY3euk",
  "key15": "4pWBKxTpzTqgGmziuArXMQ9PN7oZjsbHDVqu6Tko8LdPjMvsTsoDiUmTCvX53LvrBLvapUJyRj83UNypQAFxwusk",
  "key16": "2ezvQQjYKmJECGhrNxXVqWBbqYDsHfTypTQP5u1bswG8SpjSf1WzgjR5dAP7sXFuujdoj4nUuvGHS4GsVbUswaAQ",
  "key17": "4gMah6EeeAXoxAPtRvwRWoCTKXEshkYPCDamVSjSBe31NwQe5TJPPZeenSRp1jmVVPN82dYFAuK1KhXAak6RG1fu",
  "key18": "2vJQ9h7LbFZpZAANdM9eY3Jj5rgwEytQzsQrXb6ryVQuzdMSVPnoj9DA93VSqLLJ36MKPNcP7F5zZZ56j8yCjH21",
  "key19": "33trLBYRKo6WkD6AJzJGCg9LK6h57VT9EM9FR5wKdQcP23nHCNaSab93CmaLfcdbYVLGirZuAiyoZUscATcmCPJK",
  "key20": "ZotQZedRo6H6QvP7WSuX8XwjSfpKmG3ezqRyAZhAj74nhiEzGkfvKtCY7nqvDUwmsRA63NtG8pDA9kwJUjeazi7",
  "key21": "64Xk1fVT2kVxAmZTe7FyQ1N85TdQ47jocjPt9GQPCq12yqxBCqoccB5762YQzgNvPnQMaQNbtKupo9o4UhMDRDcB",
  "key22": "3SqokaD77wXubfQWkYkHBLFWJ79rRPNNHdZkLB9Et47yanUYkgymB441zfngMMP1Umqw7YNA8sxV6W4dSggCSm7g",
  "key23": "5PjwHACZU93KQQCrsQZ4Ejz1ypGXvcsFEdiUVcbMeDvHN3gFrotji8aa6vyeoKm1AbggH5AASHjfuNkKMjWoMvRj",
  "key24": "4dfvq5GzxcrnLHN5mRJP8MtMitc5hmJx1JgJooEmXN1EMUx82CdJ7grcwoTsX7edr2mCgGvAWxmLksz1D6d6gyoh",
  "key25": "pB2KQd3vLhhV59khK2DXcBeNSgCps9cVaztqAV2QXBwUzoDrakXrhCyyG5PjECSDpgD6dmqSANruPDXd3aEsrN1",
  "key26": "3HXKowMLbuDpdNPhGd1JcAZVZeMV2vtXT4aetkRGKpa259yRCQwcR19XVa2VmR5qUCWiXSqtYsQAbG5VeZdMCPkt",
  "key27": "3EBYd3gTGKZywX6h51ES3v6zwdaoTkUNG2d4ZTnCBtwmPiHTT461RFVEny6Z1NW5QtvSZze6Srh3ydq7TpjzRDEa",
  "key28": "5v1bERFtp3F5NUvU5mLiozt4X2UgQY2miG2RndJSmLJco19dNyPWv8MQpv4rf1Z5RaYkDSySmbioHq5i4sxBNtdN",
  "key29": "4F5V3qobbhwQrWgSN1JU2YyGh6uoPqix7zJ5rvSWz1BNHP3kaEeGtuRquWwWD75GxTCSuLuMZ9tkPg1kozk2PPN2",
  "key30": "28AYnxxK1Jk1kTCD6bCKLueJc6M3iYTzJJ3ZRFDNuEMdqVfHs9bmPdNH1MkqnK3wkgkHuxuKszgmb9KbSrJapnif",
  "key31": "3kU4WHwGAd6DHU7hRDX7wSuC6mYBAyvGUPCCtXV6KkAe7ijugZnVmZ6esc47kUSoLd7wzcYWV4wy8MYbPTMn2sEJ",
  "key32": "32PFvxGPHeSe9bwJrqkBfnFwrUjz4m45zHBsY3aUXC8pphssbBH6uhHVaNGMt1x6wpztCjCSGH8LN1TWtBiSbnvC",
  "key33": "2p7aZkD3AQ77usG4GUgCWFKSPd3ES4uXR73U2shB4osmHjc8qqAjpWRgBhDkWTaqaEzKYLTpVTFGvDqYogwp4cYE",
  "key34": "8Jr5y1eYCpARzSX7YDxdvzCRcFW2hBz1fovSpWiTyLFxYLvT5n5VbZSjU6n4czk7BFpCsdT7y6EeovJTc3tG7hA",
  "key35": "633xgLuWfcL5cLe4RbsKoChCLJwLsexNoeJPv3Ysrjv73PUvk2bTcJBJS5tZ6z82yTjuB6b4wZ2AyCY654a9zqBy",
  "key36": "2Kt2qvbHyJJsYrGrBvJi4mUKPxPnpJfcZtB7RACWVZAwCktn9KQcZiiMXsZG8m1pDCMh8pJ9pe61Apt13dAkQwQF",
  "key37": "2esUDzF2qkTjtHGfYLkGpaRDHcc1BwJQKmiNfG8HsDaBxgvcZHZEPS3nn5mZYcHuxRgBjPHmEhhdGaGXbpaHeZK7",
  "key38": "3ZLkqihwumVZsMFUycxLwpKzvM83Ue6T4eqi8QyP9iXCmvMJJ8YDH9TNGrnz1bGp9mkAAkfiE7CfFtdb752Vi65m",
  "key39": "3NJfomyLBcxJUPdPjztpLbQ9msfJ9fs4p84Kojr8xNpC3pCfAn1ZAdMGzouHop1KsSfN9L4fPEfhGZgzeEE32YvB",
  "key40": "xLaCZoWZM5myuguPGoYtqPzRS1ycUUxT5Bxht8SfntzBH2PfHkys3A1hgD5mz6LT2f5fPJ7PzhnbgerznqrUXDQ",
  "key41": "Zn4WnCpaSz3RttfRyeAiRDeaF6tN4xShf41JuB4V97sknts9MTVhqJiz3mPNeNCP6wkgCERpdEKaRgo5ZSfvfj9",
  "key42": "4LGo3SG5tuMTtwPSGaBAa1zptSWJAPykTggKt3vU23kiDGedUQSnvUkExJNFn3R64rbTzvTYcD2vSoKsSPGLZ6Yh",
  "key43": "5U4YZJqcZd4tQfncuBLDG43LbRJKpcxjMLRrcHDoKTW2bYq8dN3wEQayMST4qRM3xD8bwGn2M2Vcs1dW6cCG8vCD",
  "key44": "2iMKPXrJgRoEFKg45EJF3foTXhbNN5xk9fyJvrNSCmrH5QjUMsbkeEX5Zf8XrSdFwaKMJkAMALQzJXV2NQQzH1dX"
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
