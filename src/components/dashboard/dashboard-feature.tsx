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
    "24HcfyAUJhWmPCy18wYhYTniZMGUSwwWpAghdfwLdG6z5LPRJfR8zGccVCyF7VafYcUMPx2AytpUiyVFSd2Ay3Ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wALFaB41fVSPEB3zXW18hoLzkawtPrYFmDSRVjAXnc2nq9n3hhvaVWByZYa3jhH2kFa1hdNtgokFVeAJECJ9NTA",
  "key1": "nWdLQgy4HdDUwHoraRfKendmBvqCEZVU6SQdP2wJn1JPK4hnE1g9L9AJDeqW24AGV2wwhuRZMZ5igLpX6q8rGrt",
  "key2": "2oWgeXuJvPDJ4FFRSa3jfbBQQ2pEVTUHdQHLUAbtBky5XXSHBP2JVZxRJQuYaAGmoKSV6KpHpCq96fLEYnBMu8Tv",
  "key3": "DGiyGb58zQ5rqbatmDzwmQHa6uoQZd9tEYMsQ4BR4XKq22kHLkqnPfKQfgzQnPDB2rqrtLhQDqx3teeV96dj5FD",
  "key4": "5k7K5eXmpCDMFrBWZMgdh3jWzxA4dTsXVToFrZm9fSJikPuQXF9Kz13ZQGpvr7BnpwjsXUvij4X7SuRBZydHPRn7",
  "key5": "25RXZ4YQpmxHkBypoWZgixXeVNuQYnqdgwLMjCZXPj44CSmCxziECiUc83xj17o4gWWC5HA2cpUi2oD5SCg57zKk",
  "key6": "2HoxCeEJx3GWVpTyppBMHDqyFL5wGEdgKNrWsqaEyyMimUuPrY5okmu8Gfmc4JPVXSQf1wLz7QqZdqMnqnZQ7GyC",
  "key7": "VgqqcFvSpJLaVd6zXePnn8TyfGeQmAjqMTgBnfKbDUS9s8i6ZSXLCucaCNdAnZEvRuPzah379TzDpynmSMiS96y",
  "key8": "4UA8fxs1e6k8d3TQVFKEYMCu97aczXmXLhR35KqJs9KZkXFYj6iUPTDUWjLhZx9jm8ZfNNgJLVJqoz1MbwaKPRsy",
  "key9": "39kDwcrAcg28By6ad4mF5xWndXcCwW1PB4c3VFCcPsbp7TCsivWSQT5SnBuYPKfBFoAKqSsFU3nVFvwkN7omRPjU",
  "key10": "4xKRngYiUXvpx217osSdjRxNqTXzJeJkq9uYEwVg2c82E9qUKfctA9RdT8be677rxnXvgrvyjvhxxEZBfAjJq9fJ",
  "key11": "3VNMDJTssH7odJzunFcp1awiBpgKvbgUDLsT7aVAL3v9qHFB6Urp7PNX4YVdyX1dhkc1diEMqvfpnH8nMRFK7Whm",
  "key12": "5Em1CXova8ZrtiqdxSzVxqB61s39tkGLTxUTT3JvyMwtDCYNbfaLmSAso9mDuvJajKpxmiL5bLfaNYovb3ptzBVx",
  "key13": "4RhY4bVxLtZEYeynCpxcLmrzRfN23oej4Hw1JCdoyi2oZcKpY6w5BDPzbgy93sW7yVgy9zW39JkVGtiJwswhLnE2",
  "key14": "4QMMHuyg32oJvtTEGns13k5KKJuwAWAsDP7SDiMjYH4KPwHHkKgNK9xTD6SLzUWSGZKAjHRyEu2RmkxnGakDjWFF",
  "key15": "2mfiM1rKTYKUUzMpwNakXpraa3CHaafgHGmCJ8QxWoKR4Bh1sMryY4MemyyA1KBtmb3JmABZKStCe2aZvGT5qDdX",
  "key16": "3stqYLQBKocryh9aRC7ytppuRdw1qm7BGj7iz8s8CZLRR5EVmXjbSGYRZsTS3PoXRmPPyZ53fxH6neu3TJjoZwqL",
  "key17": "3PkPbNUHaTkRF9owytzkkZfvWVoSHrL2ZYrrY3cMNC3yjJcxVsiUU45hobRDMoDU2rKerXTdBLZpb9yndDHYtNdY",
  "key18": "2hvw3XsMLMH5rkkVLdLA4fSVDZ3RHnkpbpYfztFN5nkrCRJy7BMwoCswkHBsxtWLgXQUwMbdiYvGc4cwNmNQHwhz",
  "key19": "p9BgoyTPJ567ZsnRZP4HHL5LBtws5HNYsAPCSHb544zejsXVET3Svi1R2uvTSUyPz1XK8KjEmGCT13kkaXiqftr",
  "key20": "2JRZaWohegBeV9eJhJHH8mDFPH1hVVMfU1BX3FCs8s7D4gNiQTa5SHESkY6m4xa4W8epD9YwYSspptNwqkSorzj4",
  "key21": "5gvf1FsSNABVumFgQy9ZZ1i7P3mEeVQfdqKhRX871XZ1gmE7ofrM3KvjukmMBMRQsUQ2p2hTkJShrzXJnpJX6zoj",
  "key22": "5qVEMYmCdaFWAjsPwDrGsUdU9UMt5pbs7qy3LCT3uNHy1xHbfbsdKkqPNtaWZtRPBbfjSYGP49LsrocGTDPha3Uz",
  "key23": "SR5k1nuzW8kULZ9trV4FGfUMJc5gSDx2hzkFBXMuJDzVRqnmCC6qbhFX4gAYtubiB1Fnkon7w9nuj658RJ8Qm3m",
  "key24": "23Hn1vgV9wSTd9V4m6zcoz96zscyfwJ62Qf9aBwUuAsX7Kid515fZJYugyVGTLg5gMx838FVZRGAwcegyhCjRYYE",
  "key25": "3xsWYS6cvTgFM2SKyXEyDatgujwEEApcsUofbSTTZB9JGPbVpfdNfB5ApgJYfWEiGonKbQL8cQSmHY9kEGwsVXey",
  "key26": "3HmAzwotQBQYJqxfEgcAo8bQnypfGfbkC3C54BhrmkmDfBNauiWQHgqXg7ZpRKbut87yJUdDcXKmJ1A2tYFm2Fye",
  "key27": "aBWTnD8F75VKu9Vq1qkCPFgC2ust4vpqN8gtHMwxfmMzS33EjtmJaNph6TKquU9mtj2di47QE2R3N2k1cDBQvg4",
  "key28": "4R3gdwEVmHXiME2t7r8cvwvck1UwmVuHGNa3b63mT3TEwFHzrghz2NFGq85fWd1MUHnWDD9YGKcgEvXNjJUnoCz7",
  "key29": "4toThuttakXWNesDyJTeYGqG1B5i4MLFTC2nfDGLe48gCSa4WTVbi9gPcpStSmJby9zVNBsJ3pASz9FXBXzFQdKy",
  "key30": "4RSGnxYkRVau1qqEVCMV4VAKUcouX4JZQceYqU8wxbyjM2VB7gtnZxw5QHJHUYKfDrMp3Uc6QB6f7jbV5S5TmhuV",
  "key31": "3Y3nfSppn96wkskqjL5chEcXe9CgrwXQyNXqFfLYvt1dgUKvHnCWkEPT45mwW2XtXtXukonmnMbBth2Rem1RPUyB",
  "key32": "5faevxxfXeqxfk74scZ6Fx3AspXVU1NwnFvaEPhMPq5gFQ6xFmSFDdAwvrdBmVt2e57BmHtJfYME4ASSu6tpBGC2",
  "key33": "2LszbejbpMv5HoaSYnGhuyboYJP4QbHWf9ABA8mKFPxtoRhoNZDE8ftd4HubkCy6LjbXMsgmYfRi7QQ3ScUgN9ht"
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
