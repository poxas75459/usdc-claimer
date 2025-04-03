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
    "5HZZPX5oVhcxLTZA8PagWWD59XVrQf8wXMtXUkjFHUx8Pyzer7DndeZ5V4y5hukeofka8qXU3k8ateaQWHXukYXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sD53yffZg7h9L9Jh1mzg1AvzVsoWERYPjmfp1Q8z2jDpvgoG2SzK4GDStFGGyxqqbPBLoTvWu4Nv15A2PYCQB4n",
  "key1": "43dAJQB1cbGCmsozyMYrzTvcDgyATFVjToDhzAptgxf9YpphmX9eVx5uXYipvfCeL2uh5j69ttKMKYjfUQyurf2p",
  "key2": "b2yhxK3ii3urSne2sGjRR8NtkMzSS7c8jpkxman8wMtJpvzAVPg6EJrCN8aAiyirQD7FhekjH3bAMu5hVzwPQvt",
  "key3": "61FoZzE269MHWEkYaSRq79n2JLiH2GLvT44Zf16NVXJtbcyH1D3joEm3mzshotKGC2DNRe79ujra4VMYbFT5CdFr",
  "key4": "qt6WAxwiXr9WE3eXHXWJLf5fvBmwgfzs8D2pWt57RiyTVjSywxGr9zGKa8yVjqefYhP2r4cZ21aLHFxGXmDoQDq",
  "key5": "5PE9GSgv2DmPruRPkKRoR3wxxuMkDpimkeGkqPfSpBR7Sa3UP4dXb4GMCTc81LCcN3dDkDYhGcGZeDzWWsQ1rikB",
  "key6": "5pTjnS9L5kpoFu1j7GpBRGxcdWHnigdbDDhYibA25tu6B3eaPHeGNVtu2N3fo4uPSz3GhThDiMFPc9EgoHaFvZg3",
  "key7": "2T3nDUfersCzDLTLRfUPcbjsczzLofqrLsSL32FbmNizGJL8YLtVJGCJVj8dwo923qhH7VvkNyGZA8FoH1Z5gJcY",
  "key8": "2Upn4ZvtKc5bs7dHVU1dL9MsuHDMCuHPW6nTZ6i2UHaSf7eXFQYpqQZ5TDHaZrtiHcbsYDEaGPcrMomVCmYvGH2X",
  "key9": "59zbGXRR92YwpCVyujGER2GmgQxTXVgE8FjTzVregh72yTcivCuaLMtNJZMinWARm3hLMrMcc4kCZxuv2i6RUBNQ",
  "key10": "2ARdNW9QBKwULYEVjT5SRpUCTi8Avw7SkbnwCu85o8QbzJJmC3Yc2j5rueZKke8YTTwfNqcehB8bmRLFmDVUkMoj",
  "key11": "9BHd7UpNoPjKTEemJDbPmMKBWdnpno7edmFEEv5xUKRs3Jqog7KQQkws94J9fvNfmfpAHNRFERAa4BX9YyHF88E",
  "key12": "2HPg9aWkRTEh5wcWdALP7EUkT4D8UwFJdzJPZLyu4R7S1iY63fhuPCq7ETmv3itpzf6mG1ryzzFTgVrEqbGfGtbY",
  "key13": "5dP3UvbcJL6qjKpC9Ycr1C2b8cU1Nr5Pwobkic521QTTGxho8nv8yH5jjBYP3VfQPrKCzDGzVvUpbYu1iXWaGo97",
  "key14": "4ExLqWpCDZd7EG8dzmqrevLxfBD7tKNSaXWaf5ReJgKfZ8W8w1tQEZXo7agLGnuks9fLCPm4VFrjwQncXdLhVeLq",
  "key15": "4xkxzY34orynvQcwWuTDB2knUxmEoQUX9evrQLZZnrBFAcFtSARyF4Uw887GNHyeoi2qHHChZ2CGeLYfPPj26Fhz",
  "key16": "HMjG51DhnPT8x6mKKwogMfo1BmZsKkJVjtdPrtUeC8VVVhy5FNPZZeuuHyPqzo5J9xmU6whLLud2WT56n1iSMY2",
  "key17": "CSNqu7vkfn85nz7e2Q4msfZYNDRQ4GtCeem9TQGxzkpami5wT6u6bWx5jjVAmrvP2YfdgLdoJKFJhdZBTeuphJt",
  "key18": "536CNoHsM7g3FccKMvfx394qL5is89UrManRLPdNfdTDiFaR1xbME2eZun6RUC8uyuoci4uDhnxSuSkQHPHyhk9S",
  "key19": "5XKccHijcCaZZg6ScmLHJs45iWEV7RzTtgvmK5krz3LiCsAusbEMe9z4JubA9NdDpBJtTiUhnGFyNmGoAoTwSrb",
  "key20": "agPRGkYM9cGnn6n3BKuzmRtf4PX8zdkwwiU2E3Z4VrUyKFBrZkdJ4KktLtSXRCEvMWd5xtitD1UPHgZVsWLcvx2",
  "key21": "43xCyEeqigtgEdMyRjYwVwYGqpzjgWrzpvgaVHXsaXZC4HM37nMjtkMbLBTvqkZbPJcpELMUdptV2cmfFnZYcvAL",
  "key22": "2rTmZAY2TcEGSL9firPDeQPXYDzPwMhoPug9D7cfX5bG1mxN6dbLDuf7JPmS8oN5h1nYFy3V7FnrVwdd2LxwKFpY",
  "key23": "3T1kw2QaAxTbhpBNvFUyocfzCid6vEUxZtG7HifbzVmyriEhFN8w2osJdpTGnjm1jQhFgoGh5Tcm7oHeEUEzYrgE",
  "key24": "3Ln1EecW892ajhSsaZNEzzpF7vWX2Z71bGEvDerXvzSFpmuhdakeE58Y5NP8X5h17Lv6kLX7oJSA3tZtsBFsxykx",
  "key25": "5ev2VTkoodGHCe1i9m67CAhEACS9c9uxj6aKvobWfZLc2D1R7gnjw9rkHAwpPwj9E5Nqte7zGfntPcS4zYk1tQAM",
  "key26": "429L4f3Ro4xqvbfQvKo6YJNtDmhyqusjFodMqieViHWSudyDtWvo5xFp8pGgmVxFzEphCasa4L2vSNn66YvVYFz4",
  "key27": "4V4MuXpxNwDmxywEtKRiQopXMCWoGP5rzbXWkVfVYHeTLxz4NDC7z6yoss1Vr48kf6xSzdpTtBLT4nanvTcetiW9",
  "key28": "xn1oSyDqr4bECQWLKqj8LevB4pKSwXr6Qf4nDmiAMDvpSuh27DyYHMpEAL2cr2zKsGTJXdp28yawtcLPQzd7Rzw",
  "key29": "VtV41M15ckHjK1THfRwD6CKsxW5X9DdXbaekmRbQ1w1i5q2z15SYKjRPgpZGhKqox7bGoRBE3zopcYGfhFhwq5r",
  "key30": "5V63ErMpggZwqyW1u2rwNRPrwgupdfvvSExQexwm9u3hMDQq7KU44MTLPEYXo4J1UJmHHN9jPXvywek1u67JNbrn",
  "key31": "BnqT5npZ5gwnPrQcCsSLsqJnXBVf4q22mLcELgEBoQteLy5SDBQwwdVx6NA6AF8CpWdg6Gy1oMMvdVRcACduLuX",
  "key32": "2iL7oGsh6QZXmLKMiZRPCU1dXiSitqPP7mgQAsNspJjSUv6QTLV7xdhVZNtSnzrUzdwpCQBz282eecHw72VyPL5X",
  "key33": "5diqW8iDiLuHpXh67JFmzuBYuyxoVEg2uuDhn3jcwvMxtcDVTxSc52bSJoV98cnAgwRn1cb7QSSPRoh8e8WJG6Ve",
  "key34": "MwjCnUsLMryWftxDjcs8v64ygRYb1P6njpSKybJaBP2Wg7GtThJjo3YPgx7MmuHDUgN7WiLJHquq79xqmoGHjAy",
  "key35": "49CWNC1bEE2gyy4AUGU2GabuSwxqV5DwFmgnd4ctqzV4Ps8VmNUiSR5jheYqf93Y3CZKrLBuJhM27otkGRwGQRvJ",
  "key36": "DhGRLKTikjSp9pLPfb1CBCJqXYg9UEin2nnuGgrBXrcXjbPYfAkkRyJuPHHixTkZJb4NwXMY14JCMQpsarbUZGz",
  "key37": "3SegDcxMBoYU8Wt76QQPKASF45EVgZbHuFuHbt5CyBwFxBtMkJ78QMXSqRJcGac4wCPmKm7wm51ifKH2UN4QzMue"
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
