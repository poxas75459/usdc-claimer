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
    "2pmGfTyZ746DnwsKsRPSJpc1LrnbJJZFnxid7ru6jXipvGYH7VBE4ZXhmM4tHCTYUmwZuQyTYsPwkWh4NrB4YGXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aFwzqH9Q6vh5EcyxgUR6vacsueLdofWrFQjteuYdPJZUwazbv564vaHExUJdM7Szvqg8tNpbTYTafpeiHJ7ADFF",
  "key1": "Y8Cb589aXLdMA3x5LgerxeWyi4hJb3aLUdKnbAWuLkj9xBT22WXhKUMDS7YwnPi1Ddc9W1y1SuUtPd3B7PscejU",
  "key2": "2yUXiEadboz1VG5UVMQxigLae3xBioMDankoNTqwudXHvhE996E7HiXVfUX69Po5mjzcgHiYcjLcPmtFLLkaBVfN",
  "key3": "3UDy9igPdTV6mFiizB8aUdeBfiBr9LrqALakAtDCZUTcqbw45omq7YJXdjLegDkw7bK6D9stYJfhrCcKNqNbS4M6",
  "key4": "5jMB9pfT1FThJmoNNvaXYujywZziVoHjsK2ZcVCzX89UM6Qvtgp7E81X8ajNT8ySufKrMRuwe6aqqRyMbgudh1pH",
  "key5": "2c4RmwhDZWTRQEDuUxXC5wvRTydC7GNxnuy2AEyHJ7v1n7mB7EnPfbs2WvrWcq7o7FpbQv2tpyGrSihpwpQCog4a",
  "key6": "21zRfdsaUCHaZpN7ps3PCB1cZ1EwUwQrTExj7aAUCwDk1ixsURyMGJgTwXVwmzQu7Q3XhaUTpuUuB263KWbHkJ7t",
  "key7": "4r6KkpfV2JqPX4gDAgxg4dXFUJV7HMwUtGCYRKEp1HZkauGPQmTdQjnRsye2GR7J5bUisReEBgHfc9yAPv68yYSW",
  "key8": "SCzzD4ZcWRmTaTRx9R32dBLxqssNQRbMVUwBqiqo4uxqsBsHpWb7KTUNY7j7nJ3Nm7Wost3Gx4BTtYi5Q1sthEG",
  "key9": "3mZqmjKynfhqmJFVnVb5X9ppa3vrCrNaPaKobX5xgVw1jMrMBdZav1Xnn6Z6aryupkuXheZie9gcyutZdaT6PXUP",
  "key10": "WozNdgZCcyxBQ4kHE59v5oqM4djgkLGZ66nRBnbWUqWCHofRGYM4LEVATL1iaxC55nqaeSfSfqsdtRMPpQ6g6xa",
  "key11": "Dv9mRfuRhYciaD2t6dQ5GEaXXuQB4t8Wtd2BCXgZdRMKW1EBh4Her6GB2sTmGRzhZzppkn223E12HTdRhLqsAok",
  "key12": "uWNqfKoz9UTeiHexCEJKZH2b8x3dzds7saEuhD2inEG33Xk5xSiSncywbEWGtxnvVpH8gVaQccoybGYFUB4BNj4",
  "key13": "5GEsVg4vwn8aeEgcCh152JwqipEz4aunLmidVChkbZfhrMPJxaV8baSeTq9o3tiDcbd767AcAfW6dfXQ73xsMpiH",
  "key14": "f2a8kRy6qovcfy31LQrvHxfMHHhj7xiE7HSa2t3jBZMeTygtQW6gdUf49rWHyNHXBkQHs1PAAEbkPyL9L2cUViA",
  "key15": "3YAe4qfMU6TBNHugj8YCQqXEvzU8Nw7EdsTqNmDLyQ2HveP6pmSfg6mzB5jo95VViUGsAS31SQtPyF2ShRvGxXe6",
  "key16": "3Q7rE8ULqt5bN87WmXRxdv4hHnk3gUXVmHbVYnizrUNdo3sjC29USV3tU3BDTXFtfPGMt8E2BRQQm8UCMYmHT9ja",
  "key17": "VBuFCZSrBKNG8SBWgX4zDtYSoUxxrdQpEX4NRVBZnGitb6BGY1aH5ANeWBrRndKavBCe1CUfLJTzn6yncUKPPt3",
  "key18": "2Ynx85KJzxUoxTcsBQLsXKhGEmAWaehEL9h5CbMLsjEVzc9rFhgf3XVzkksvEpMB65j8jeLs1WVJMDoaeyUYRysz",
  "key19": "43K2PYhw3P72EVnHRDoJSkD9xf2ZrbMBPkZsABWrvRV1CYja5iSCLgBXBX4YT4K4eMzvrWy7RroUdZFhq94cUaAE",
  "key20": "fvgZ8ZtADF8VuzqCQy5wHfamnCAtKhiDSo7Sf8Pcp7MGUPT9QN4x4cpHipEfxGedF2SNBXnCypPk7fDpqZWkpEk",
  "key21": "4ZwdgtbcQTuvGqWgo4nwjSt344s9BTn1sxbNzXjHfKAgjCfjqwqxNtoEt1szbsbpNNbN22VCxE1MWefdDQMLoky7",
  "key22": "YGfbyRBajZoN7v7WAVWtf13xtr4hs1xYF54Qvt491agS4epyLptcRG9agXxomJWZon3RRHVCn4Z6ifNpoDS4Z3c",
  "key23": "Q7jM7Ho5FW5L1pFxyzP7ub64hG97eoWXaLMN5cD3yPQnAXvTSud7PiLCCLni4Vj5YHwmmU8ZrxvnAMcgP6M8aFS",
  "key24": "4gdvBm68oFHUnfkR5m7naifL6xbpmpxAnWHwhkEH5rWvHxVESsA2RZtN1WpwoYe2ZGihR9AXGjTub4Hh5774VFHJ",
  "key25": "2FeGfjQURuaBv3Whi3XcjodV9sSq68krQ8Cw2DHcas3oy29LP1JvCnCngrRReCdvEwksJnynX4T4XRBVEv99C8W6",
  "key26": "2gahchGCQiZ9c9RFeB6RsZ9vE7Rn7tAdL9FDDTDHmkCWv1oDqQiXmeMk7RYVf2xkPRwRrrMTL5EV53kQSHGd3r5",
  "key27": "2MeTfao9cuZwPHL6kKu65DWbwhQef5Cs69LcBZsX9vMHE9CdffV8TjASf2GfZyzjZr9wEUaXVFCPeHh4Zg2h1C7t",
  "key28": "2MMG15Z2xwDd3ygenknWB2JeBmSRFiBpRQSy5PU59Z9Xcnr6m4RAPDG7EAMBuezXK4gsRzaqf6qg4y9paNFKdqdr",
  "key29": "9wymnDLxx9nRaDW4sAtNBheMmBUcuoQ97Q2BzauU1zTF47Dnaaf7T2zvtUdRVcMVeSUMeNx9JEtqrhvkVDFcAxs",
  "key30": "GAeAPdQU71S1XumSrH5fZ9LSk4S4M6KSojSnwpfnXvwV5C4Gr5R6Kc7mhy2MwLwikSMn6K7uGsuYToQSJJcnLvd",
  "key31": "dYbrmApveEGjiaQA6jsxcBKXPxagzibAwx4QiCYPdCD8qwzghVqvcHC1FYqqCv2uESU5MApBGTzgH2DpCatmbwM",
  "key32": "435YhrjRp9TMhcq3SDMLGspBbSUAScWRzGmeYG3rEFmRwG4JE3dfy2f1okWi12NSQED5uCt9ZnMfMewMQbY4trxT",
  "key33": "5fY4YwHjvXtTq4hFnhLQpB2bpQzKLgdUKtZG1CccChToM26K3YZH73YF95RXYECvT862fpVYLfBxvjGQybxh1FeZ",
  "key34": "2EtMX2hMCBLWWFeiWamrfHed39p1dnaDTAs9X53VsT7PwDGZ7reNZNBDhqr7J6TRC89yfqcKEyTE3vUQSwShMDdW",
  "key35": "BTFZjjBn8LGJPKwqvsNQZtfAPzQ5KrAKeCYVmkyDh97nxa9N6pgUiQxN1pKva7WwEu9vjkTFZrjrrS66Cnk3y5V",
  "key36": "3Kp99ES8AEqPZF4wMkdpf6G1GAQ1WPb6kmzvcraZo1a7zwh2xbxwn3VGPArMzjKeQxM84xuQ8M9N1mF4rZkASzTZ",
  "key37": "5MumCr4VT57K2tJmKLN1QQp2aAkoTsW1wHActQLHa8zvK2ULRpBtWvW8ig8XAtfdsm5254ZMsr5uovmL3M5Xk2T7",
  "key38": "38tMhZjzL6ihYV4991jffimWj5jWr5QbJa7FP4xF1n1LqCKwLpDgzUYbNvp4X2grGJQ7U34J1NWadRczAsdBBNLP",
  "key39": "2RAjaXwU5gBGBce423e2Da5JsZAE3YBBxAYxE63AT8UwcDTHychwjvezMdZxWSw5zmuoLtUTNch77LWWKGxnQJKy",
  "key40": "24UEvY4FXbL9VCeusQFL7kCLqnsJh7HdmpM8zCnX25Dnazz7cjyaJ7D35veGBy4PkwjbZLVfHV4dExmX2aHXmgft",
  "key41": "rNQtkWR6P4nKJneexViS15gQ6MWG4iFVbCw9BQ8cNEov6BFAdKud7HFyqiXn9Kk8UPWjgkR7Da2YdzTPovYadS9",
  "key42": "2NKm2hiTLdeDH6JUvtmRhUKK2Cnk6Hy6epGKByE2oNi35GzLjMY4MoY8UFq5iqcT6NhzV7y2qnq8dXCHLw6RX8EA"
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
