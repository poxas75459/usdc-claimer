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
    "4T64zA1FDr3QJXLvLkkj8JzfFjANMmoNAphC4vE6Rgm9u2Lqe3AeWbrPjPUMfEqpqTBpfih2nTNMonMWEsPPDpDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SsE5KhSWGrrAPfgkyYEq9KFfqMDrkK7Q6WJH9wv8trpYYcqVwR9hFNEi1mFvFY2tMPQSNM4jsXmBpKaKo4fa9W3",
  "key1": "5ATtwjK3gmY9V3M9wTUyYfwK3KbnJ5mVZ43o1ih7AF86SsuCSYFhoWkveN9EVZ7mDcznLo1SVvYBT9zqLLMgnTr2",
  "key2": "61b8Gn6N46CzBWEoz4q2Wix7GBgUbS5Qzc4sFVmj6tNF6jjUVdC4RQF7hWJaTUzsSace3b7cUromnUFsoZ7d93x9",
  "key3": "4Q7GciH1vW3LGsDepiRDfRNidCSFKqXaCFVKHSjDLRfERNiL5PNai1T8ez8VfDeQPnifgeMQWAnAGPHXsA8XChtj",
  "key4": "36J3w85ax43wi3Cf71NMPRzbBBNiSCkRZqBkd4tpDtbXgg6ti27gLxPQWmdtSjXroqDnHoJ9PT1EZ9dsZWipgWod",
  "key5": "5wqF7EbBqvnwrsdF4aKaX6q1uVxtSnBzZoDnLnA6smVt4ofS1SQm4Y2J1iv45Djn6DNn1vyvsBSLeibCkVRRrKfD",
  "key6": "22xihfj1epwivpZd7jHtMtinoqR3GjZmy7hMC8PPySqJrr9sNWqbfT9oiUHQUeskx1arRmSiGTeiiX55mw2yAJZr",
  "key7": "NrChWL3mgB9L3PuU3jtjo1bFYy86Rf2SdEyrkU8U59nHB257xpbBNHyppYzJNwrMz9uw4J16PUAgWMhkwf7Ww7J",
  "key8": "47Z3QDdFJCp6TD7NrKL8ZgFHNrXq1uFN8sYGXML3SHnSHGRpvZdXo7wcBck8xijoK28ZdpTfQ7aARAT1Bpk6k3xJ",
  "key9": "CZzgTqda93wfCpKp9TfcsSp6KECgnw7mbZ7kuiKNnBR3P66hvPYkWJYtR6s62izVrbonx5f6Y4SGCdAFwMFHRdX",
  "key10": "3QSzzCfkB1dofTtEofnhbbJvquNzFWet7w7TGx9U8rdaERhDogs1UMA8gFi12hTNT5FRW8rHWrFXHnXdA4NXN8k",
  "key11": "DXWPK5tU71twgfk6EsaKo5YUKWuY2dXaXP1bRq7txXwBe2MSbTpq1ZXJhpcDZq7BebbB4bS8XdCCtNd9N41dnRU",
  "key12": "394zP4spsiXLeaaAEADRmx45rUTYVa8ivdbvhnby2KgFmf27Yn78jTdAsE1jAdxAahiMdFGjCS3Jf3hEDK64EHXt",
  "key13": "3kNNSs5vtAnAtrGt3RWZ12RSJxQyzh42TwS3X2J8EsXUxF21ygMvvsE1v69wJAsTBFjD1s2wCuGqqQqNWTDLqVdK",
  "key14": "uPe9Rb7TmJfaCJTgUa3LArgCcocjJ8vRDmnddH1bvTyWPJUCTunM1HABKzxz1tLvbhWixXcrGzroNJYQCgG7Uqt",
  "key15": "x9tjHmTvGQE5cqr259es4hcpGjK5NUAmegqJ9ufboUZziT9LWmgfDDWcNCSSg2kFPmfam1rQT9qf8bGrzcesBbi",
  "key16": "59oN3Lp3zXJwzsUe2VUCP4ebgX7kTZEN5YVBhAM6owJMDuNxrHq8WqAQtBJa7yT8LDMUqqQAbjk2R52rGqjeo2No",
  "key17": "2AdaFEg4FuyC3AoKfZ4AqhYr6KW2Y2cRTW6p1j7Zcs6ukgRBtXxVxbk4bx3kAE1HG7y5BhW6UayypE4apqJHUBMZ",
  "key18": "5MNxKqcnU26BFXALntzaH4tk84QGENu4K2VB7Dw83whVZbrjtJtM1rtks3i3ypZ2tzf3qj1P9qBdox7ChffFSgi2",
  "key19": "214SX4BwkGMvcWjJg885DZbEDk8cnWucHt2kydQY7p5gXcZ3Wc2h2RHuWQfzo4Fqojhvx3vdKvFpRLB3EEE3QzpB",
  "key20": "3nPiAG3rXLrffHaFwm7Be62tuV6aZTZcu8Cr7GFk1tqxuXVk42TrFYvYPCN7N9FU14LeNGHXbm9bce4D67Zp96Pv",
  "key21": "4BHwkZ8BGzNTQCkNYweVizWNJyi6S7srf8TbKTK8PKvGP4L8CwWa4s57rgpjdZV2L2w6UfrQqorQpPcpmXXMHCaf",
  "key22": "2LVbct1hzp5WHU8iPJ48Td5erTcjSfejyKTWZeJ2mTrmLMazH2nfddARUeEBfnjvgcndQifB2q1pKeky5g4muLdz",
  "key23": "4mqF87ftSe4YH9KyhAdTZ5LUYTkJeR69vVYG8HaWYqnvxRfbtoo4Cx8JU3A4VHAGFUbZkfRBPCix9vrRPatCNwy3",
  "key24": "4MkU8bVKkD4GY12qi5RQTr2j2wxQxcwHQQivQUtrNLNbLtCyKA16RTJXFTySmhP6Xci15LCrcyPkjKoNbaujHF73",
  "key25": "4HeerPhBB341UzHBwMrZCKiHmV3vC1rcK3QuswBmnUwuCzVKS9pgemZsaLwzDsAGFTvgfH3MegC3GhTD66BpU5TR",
  "key26": "2cSmxnBiCYq6zoCXSxgBQVxctkJR5z3nrHmvcSerZ7jr1SQvdxYFRxfudAhPkdhiAUAJAsngff9qbFCRx3iZi4bs",
  "key27": "5fDhWmv5fVKES6Aag4YUDwYzbmGzCSdbGNCt5to4DNa6xUQNxjNNTsrdA8vns6irZGXfQSTa2sQmyzjcz1fikB3n",
  "key28": "7k1EaJPbt1tbtKdrCUp6ppTrznJZCwq2uRxJJxZMnNQQL7Jf7UdGwtMYBLkoL5whMnfLsMibWFiN3GuogVbuRyq",
  "key29": "XP5af6GZFgiN88Y4za3kNdcgV2MfMoB5KxqvvpyJdtfNUEm3Njb33ACUUyGPdrbKY3ggYhKizUk5W8aBz7SV99S",
  "key30": "57tWQon9mukcUbGP7igkw9BSsNqeRcVcy7ujDu9kyGy9KYSKRCHsHZw4E6AHCCFidW14GQKaJRkhNi7iQpbCzyTt",
  "key31": "3dzHZ1H4wSTmRQuWmKekRzn89PMSp8DtQv6pgZFhSTETGdecVWtAwPR6sA1sciRjec2mETKqTfQQAQhzjCPAFrZ"
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
