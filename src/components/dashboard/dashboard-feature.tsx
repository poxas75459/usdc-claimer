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
    "3BgQQ8gp4HxpZLrGNt5aEfUuSKPKEMtLMP7Rgse7KqxCqztjKmrMobBZiPH2d1HCbB8wy6Z1ueBCu9S9Xs7gBeU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PEcBJFGzumANitopx5HJtjWW3T18w8WpzhWNEWCvfdQzEja2Vu1UptrhFupJKzDBqMDPLZ3sgaTquiXXfAd5yYn",
  "key1": "537QKJkZ3nvV4Mb8rH2G3Nby6WAVmVcT1nDCqBUxgKdjDWUb1RYnbeKUjr7Fvs9n26qRSoWcPCDCj54vtNWEP2DU",
  "key2": "TR35zBhMf159EZwiCsezo57LetCX6uRv2a77rGraKhf9cL8FduKhRtTFMM3QsVuxRoZM1AMaYZFKaFA5dHTqr51",
  "key3": "dz3q9a3HZAxUPSNg3RS4m6Gg2XPzx4rwGyWecbmcVXCRveNCnJ9BvDXJxuH2nfmk1iZdBHnQdybUJtt3juY2wc1",
  "key4": "3BgbWtYPJiHxAVMrm1GDfd1U83ntcdvMKrGCKDZpQ8tsS8VKufbAdCiRcePYR5jVNLc4C7Crgu3FgwY13QeZtyL7",
  "key5": "2nLLVe7od38WwVBw2dNeSAj3PuUYbxPefNXmxM564dV5pKwNLkLF8L4ECbgw8ZTaMnanQNtnNLrLLv4bpSw327Lc",
  "key6": "64EjG4zJmgkqgkXVQ8ow34i29QGBZK2gbfpDu4aMsGPrAY1qgaPDu2FmSAZ2HJa7m2G38FY7cQ87eHbgXhTj9MsD",
  "key7": "2tT4hSBHQ65hdao2njzvxF1rirYbC5jzAv96riYRztnQgEVaZ5pMZ4vTmnK3Jec3T7eCoDknd58HgYt5vdpE49wQ",
  "key8": "3Ykp35szUvJpgryDeRMH1ZVnrvUZE1PArr5ripvpYwb4HPhXMZdCUT7y7BwRypotLtiKY8qgd3AP8kKoJtWrN9j5",
  "key9": "5sChspAE5GgnhwhPrYCFmfTXS987oPqbnAz1JPr17h3EXtvH3qzd4Be51CaCQF31NHB27CGQuECvoGEzqvKeXPGq",
  "key10": "29RnWtoSz5GRSMq5Fr1b4R1Zuk4uGcfXnucXABvGyWQQm4PMdfjgybSdobhhdxaQLTGhMoi1Lrw9Aw2SHS8opg3Z",
  "key11": "2ZSXpeGs4uEFYmjD6wbJ1GKJLTUSSGR4gEvyFZY3xPJVJRtxKXTtEfKmpHerGwqZ85rziMWWvwLuB5p8p5se6wgM",
  "key12": "3x7b8hyd38he7Pa49CEkVRFrdyRbE7vZmzEZCh2KXYvoFXPdbQk6fTUVXFXPMGycrHKZ95b46AuXmBrLrJLPczFJ",
  "key13": "3LzqSFe7vbjJe92VxiKzsWr6MVN55jtkzFP2SBQYNueHcKnpFviKRnS8XFfmryP9wzZBgUCQhCPCiykn7GYFVKCp",
  "key14": "2YRkVWxzmBwYYhQB8SvVnUrLNGpRgskLuTxLSdcQfiC9txLRcdejT3Y6z5nKkSJ9pAiBrS58Tq26B3k4YSHn6i3Y",
  "key15": "6e6x1dBWQrq4rFYhm3BjMCxp7xiH35Rgndq4feHYskHvfrnPt1ZvrVfeCfVZpL3L7PQSkm27zh4TA36Ekax1vyJ",
  "key16": "26D2StXBVWDDPrUn2asbC8mD8hhFFedzJ279M2RWP1GQpagzgwCJfgzvnSgqRGe2GAY9T5WBWAymzGBYgD2Ap7FT",
  "key17": "2dJUHLmYN2rvz6oUSf4PuoadRzVsuvT54FpSGediQQ9GVrjKvKZ1kdq4YjwQvjEgdUwoTxEaFUqukXqfQKBsmmCU",
  "key18": "2XVYbo67tHqnso7Di2RGGP4Ss2GL2eBwq8ineu7h7mf2HYDmmUXeNZPJfvyk979hn2SE5QVWhwqbh8MzEYyfUf1Q",
  "key19": "4PRmWecGTkXWt9dgbuwq7DnryqvL4PWCCdkVRiQJjPCto6D6mEjjvSjo6sw6GqgDLNZNKfYUsFcAvo2yVZfWvjrR",
  "key20": "3yGnrB1LwQjXHfSaFSRWx5n6Ze4LMDCvbHD4UKMSfdbVV4wpvftmGCqAz79DAi2LpCtWfD9g5gyu8vs4BbvCFWe9",
  "key21": "yBMSfCijn9B2zuiJHpC8sb4HQpd22eujTHE1m3ByfYFRNBQSxLEtpzhhvGfGcS6CMVjcrEQ6J65DdyQTYbtCa7f",
  "key22": "3pw1YPgHZWbT6hQA8LBx8KwXBptnnr5woZftPjJew4oZKdmjrH855CsqTUW5KYErbR67sRvfpX1WxfpnZ3sofr3B",
  "key23": "3grJDUMsNmEqhmsJ88Euxmg8VqxrHKFLnVhNdo1ysib4h5WBoA9LCWaSBC2mNKH6w4VErQ52N2qW1TMEs8iz96kW",
  "key24": "4xYQG2kFojbMm6Ux6AG7t3NGcL8DogRgE9no4hherW2y6mNEQxTsJ6B9grLEFxQGLUsFmYesi8xDazVW9WpTGLe7",
  "key25": "3neNUSeWcWW5M5LQ42n9x68fY35FQfYpknTckhepTPAZVqXKpju9GdFKTsUpF1q8JWeAHhVuSdN615BRXvNY5TQm",
  "key26": "3Vp6Ln7iKR5R9bM8VDuQ4oAKqAVSDBmp2m7CFDabeeXeqWePwaSRnDcCgufXLF4ZSnHEgCXYiQQZ5HVdk2nBziAJ",
  "key27": "LPeTEhcDsBhorxVDHopzsNBCQYuwd2ys39cFcFPryKjnmnHbaDJUW6Vh6f4SSfvnYo5M2B1BRUNSoJxDoch1ohg",
  "key28": "4mBj29DdiAFodfS9ZAQkbWGcdNkrbRUPzQCGuUJWVyXPcPQ3wuUCxESBzLk1qJD4n5srqZzWeJw66R1HUoLF2tVw",
  "key29": "67YiD9RhUnRWviZEN7LDbnHtVBLmqYmsYvAZ3FZNyL9ZY3XhAaNt2PjdjKDzKHqQSvnLVbgdFaytokwKcWYSpuXZ",
  "key30": "5afM3qp8ZPB73SY2X7iFvuU28nTDxjTCwcwZmf56wqNm8fKjZkN71AjqvyyfxXLRaGiPsKhsuXdSaZ8Q2Lw8EVJV",
  "key31": "2dRtsWsr5gs4D7cBXDPUfnbPuLk9hothN1RYKQmNZbQNW6eEmgqGhFdgcFDpddDwnSa4XmdWXX3Cxz1bKy3fa1gu",
  "key32": "4tsUy5foyEwZvUgp2Z6dudyyJ7kKdGgXJDeZbMCAtzJhWV2ZHEsdp12UWoP8rK2vukFJpasUdiKe3vBXtX4eiLBb",
  "key33": "5wLLEpb31fdcBGzpSsjhFVuzT92NhF4dwqdGQskhP4j3LgyvA1UBYxc7rRJMKD8A16nBStbdnTrc4p7S4TWB9yYn",
  "key34": "4hFSbMe5wu73GFvYQ9H8ivZxSv3MWTR8iwuCFBudJZDgSHAKkcAK1GCMn5N5jNFFGEQtJT3FhASzwNWEtATdL6Xo",
  "key35": "44j4WEQrVSYuJDsukPGohjsryt5WTrveJZupPzbkaJEQ1vYV2C13JtidMpVSVFGTRK3SxDhgDtzawCXApkGZZvg",
  "key36": "43C3x3fjiPvg2gRwTF4dEN6BYUwBDXBuU4yU3pXpSaSSmQL8DypCYP3m8SL4xaEahvFGozCEH5a2U3iJPQRJP2dJ",
  "key37": "4buA2ja7zMasPgEsXw4kuVjRqMeiSwLyQ5RwWV32WTY6xhqrqb1NvfCEe4zG4QKPvKcYhqt6ddGxLQNJCK1gmrFW"
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
