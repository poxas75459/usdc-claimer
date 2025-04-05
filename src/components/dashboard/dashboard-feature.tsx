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
    "UtFmYqeUnuHxCoGyXGKq4yKnMSauwUuECBzPAsaH5nsk8xyDMqNEAHVNJziHQKPpfQCeqGGC4bF29jzortGycD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Du7Y4bEMDqL1iKUNyAH69j8apA34orQ7RSSiDQ84zFt9HPBEFdqnufYYkDAP1gzqVNf4HQ5ro5cAzrEQ6LxerSY",
  "key1": "MMiMr6AXQbq4zV7CBrMMAo3vr9iSVZF15VuFRNW4N1RvABNa9D9gue2mZbg6kqLiy2NNJtaiURXxvLHVqPxUaiH",
  "key2": "i2MBVeaEauDfUsGDxCN9m9MBrfFcrF89LYbUJt5g2FjsFXwxAXR8TbJ1edy9VYqBT1Y8bHAK6pABdVHYqys8GPH",
  "key3": "9MYQGQTLcEvJQYStx2WHMgsF7yrNVrFYMCN7deHW2n9jMfsopQ64VdCtVc83GqjG8QPYMkd1YT5ifCj3BrrcTP2",
  "key4": "enuQrcV7GcLNQ54HgWYZuauHhfH2Bnzo7TYg1konNFYvwDcupLbEsLJ1sd26rrQEthhJZV1gcEXq7MKH45W1HUc",
  "key5": "F8X24dNNyHSy1DqQ9xv4XSpQjkfAAyNdTYk2BxucS6zq1ZcmnTAsdCTBbXgXHXbxr2kFBTAtzM7RySZwqPykMWt",
  "key6": "4sfnQ99cEAEgPMFykhCiV8a91CTBqbv48BGpyJ5YTYrcxiemxjrVe24kgcXzcVRCChwo6LwuXiisKxEC7SF8UNGD",
  "key7": "3wxYkXETF8Bjz96Y3qMezjrkoDzJ9NxoMvQ5q14h6At8EPAkvmgcW1wBAbvwbJAGJndgWrUJ9CdT93CP1hvdeAsL",
  "key8": "5G5mgKazYenuAqvLMgo1CHmTMneq5QnNup45y2faXJHnVPkpNz3FkuizPCUT7528Yq7tVxNZ3Kw4v6M2ybXE4UEy",
  "key9": "4Z63bme7dAM65w5czMdZbJ6kDY89oYMqBx5JiCMfEdruGJY4SMHBNtQosqL2TRYrieTdPSsqVjJdntJNgtw52o8g",
  "key10": "5KNCvBfFsX668bcnGnnUkzA8qbxtwyTaTG4zE3hG1Lc7LmqnTdJDHovqESkdcmBRxqPVBjNFLAevx8pTq61R978o",
  "key11": "4qADMhfDEax4ZJusbQZS8HZ8Ly3kG8KjHSWRSsUByjnC4W3ikDJcRNBzKBxYtY5k8kKko9i6bo2A1Wbxs4UdGfJx",
  "key12": "5F4M5FzMZ42uEfwooPEVscM52SLHqM2gzwp3rbjb5uswK6ogL1amUb91uBqs59pDeC7EnYcPZRmYCDLE59uNYMkQ",
  "key13": "3sDbkYdewNCwBL7XwD5gUJJvxatfSUtAfzCAUE7NzkHwvygirn97JuvsEPkyfLR1QY9FbWrUzTSmVPcV5gBTCT6f",
  "key14": "54fhRW9iJN6NHjg3hkgQMsgrJtpmAo5yzDqisWohQYgzkJVQ8Xwfeg6DaaPqSnTGTVGe4KFoXYz3MaketkEguuNZ",
  "key15": "67UTqyV2b8JSY8uPyFPsMP6JYTwW9dEQZQa4jBJafb5nnctDHGTYmREL8gXpFCbCUTaCt2Zp2FfcNrMs4hifQhuq",
  "key16": "3FCMvujm8eRJm2BkUj1ZNttbYsH5p5Ur5HLHYtX9HkFkyE3ZDC2fp2nbhQ2KCxdm9Zn57xfehKCRNEsoJEzogBwF",
  "key17": "3FJiFxfaJqvjPESkV28BDQoJzTzDaHvpRStv2NHVNvHAhipwb3Z4vWvLvEGwStizTDHHf1ZrqMQ8N5EgeKk7uT62",
  "key18": "BAx9t9eSu99wT6WupqeDeTjAZ6ucSk5x2DGzaHeZcr5jTQxooViwavpqypPHuB4fTXEVsjTdcjTN1pogHScZqgX",
  "key19": "581vH1zA5Q9XhTcDTrnsD81NJMbeZJBiYhDawMooMNKSPNgwJd2YGpFHqVfmy5s8x3J7b5Tp8HMQmbX3zbFpzf9N",
  "key20": "3sXKhiTUJtosy3zT1XATZ2sgKmmZyV1KqwfjfkJsQH4Li3akqj5X5ycPAEGMzDnMf7isYSgrb6YAhs5UnZj7wpeL",
  "key21": "3axkJuXCaTcprj7e3zsg1TCey14UwEqFjoLzJYHWLnVgaEtxqcY8UEBgiegEP31XUQQQKCQ2xdgz8ZjELw5GhTBA",
  "key22": "fmmLieyP44ek8EzHYhertvu4ijThoTetM7qn2z2HKmR2hSN675ocZGJPNa3Jm1wDiFRokPk3Mt9rRQNAdhPXeqy",
  "key23": "vZriRqKP98drMo9fpmm2W8y7oA5EoUJC8rjzRq5pa2Ys33CaD4ecgxGhQsmxSTxBFZod3Vsnt4Zzd9fsrGQMWoz",
  "key24": "3Rw31T4CB8zdiDA825DKWL3vZRoiKkm6VfAKmPcX9dXtdhSa1JqnSMgfN96fD4VRV9WmRRqCpXeWpuWTJieSyQqN",
  "key25": "3E11fkuZ3DiVP3SETYyfHQNB4MUKFxd4BrUX5qNvW64LDsfW1Netm5AFdGt91KrDoJduMq29MTZM8HqPDBvrTRWH",
  "key26": "4VyDfCy2fygzV45hFL92E2zJ8WPevuo3687nnwDJxdaUA49qBq6Bntaera4wkG5Ya4tsrhAH4hSA287XspJCFzdR",
  "key27": "4XLuF3uYjbpnEmND3zJHSwKv8hipPCiviiafNTAtx4ZBxtyaQo5ZgSoB6viBB3bC6dhSgrT47iJriYiFifGV7jG6",
  "key28": "2ARaZHrdiNG81he9DrD2jANzrd8g4hXznW2qEYi3EmS4zWaKh3BJ5mVFjaGiNPjezToULadHi5ugeSgWg8Xtqw3t",
  "key29": "3Uu2JHAFoxqQ85Wsmm14BDGhMUwhWhTVaQFmcp2zWK3zH9hyE74gqmv6NVyhRaUMKJWHxaGDhoD25Vpez4XeYn3r",
  "key30": "4K78Lj26NxUDbEETv6w57BcQoc97WbC8yFwykzLMsUwLu8zxVc1grP8bkHKR8pfbj4RbLiwVV3PFCw7fsUuPyEDP",
  "key31": "2VaPVxBos8jhHk2yLpYaaWyTkgmT2LXmnYrig1atSLwNU2ARjNpja2FmrPR7WSc27aKk6CkJVSRDtBLGUqCKF1Jx",
  "key32": "ucqkPXUNRZaXouD11XNxEYtPNFwFjHY4dBvhs4m9xxDWRdAFAxpVPjdgkxjgH7RfVDJjYo1KCrKR1gSgvx3vfHE",
  "key33": "5WrgRqKq49FnpggTwPVXCJVwzpghZN1VZk1bEtBUw4ozi4hXuzdiWVhEVNFxV4c6JZPFYcwWKbeYDEoVfNrhYuG7",
  "key34": "VK91bMrvAF8n5zhJfudCgqNUkM1cAnRRa7MLmgygNni781yRDuD4DGtAyMPDUPFjm8MCFimPf9Yp7d96U4oLEsC",
  "key35": "2spLEpt8KYMi2HadEHdNSA4w3CxPbVuX1J8Q3wXawiqrQ1v5saWHB8Cm7Y3gpytzJRWZE2N6dY1pvbHx9N6eP74",
  "key36": "iQteCE1f6fhhjw9cwvRkkUcTWJCQbJ4X7D3Xn5jo4mxLzu1df2qmVChyRqbViYJ4RNdg4hwgEb8fuXJzqMvTfWC",
  "key37": "2CnJhjN9CLwCwbhv7r2hkwZvwM9fv9kJvWkDyv3w9CFCwaQtWG5NjLJfJmThwNWBm7SjQcu7NavBbTyhbwnXFJKa",
  "key38": "3xGGtigjuLquiv9HBcurdK2QwyNBqPdi6MLJ3YfER9hDUMwikmu8yyqMjLc1HvJy3FGXjeT87T31URXFsKBasYCP",
  "key39": "5yocmKBjc84ijtpuS8yk96WSbjj4CYAN7DFKn1DEGqtM9Lq14U6ie7unfWFTuv27DnRhmSXgyE1yy79e3gTNEH8h"
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
