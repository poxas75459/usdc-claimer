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
    "45huviuVPMbF5TiKeN1ajBwxLNPCpFuKoPoaMMPrHG75TmCugCdzzKGjL2vhPUB3Zko1gjCupgQj1VENj9USPw7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kCh13e58ypcD2LhYCeuf61hKeaTYbCLEc1HQ4iMzfdugyo6J8y2rggLgWtoDpSgFvExnMqbM1dhLSetxX3rGLat",
  "key1": "PEGdJk1AADsX7zpGyhDj3KVuuVYsicFmNmj8uD2aAxTkL1iFxVari372D1jedXnvfvrmJjAgPMBjNVskJp1fHcr",
  "key2": "54SN7HGBfK7JAuCHiMYvjmXDjmhVanpxYoZnTCaL1YJDFfHChP2i4fjyKXysongoKvpV1J52YdZixFjzJSCqfGa6",
  "key3": "5oxh3k35kYWGBVzgfDMP53SnmmdxmKmaxd6fAdhY7r6zkzWLYA7LhspSN1U9A8cNcZ2bXnBKuum9GdTUL8281sZa",
  "key4": "4EJ8oBDrGv8dVmhtQ5JA8PdsLqVSxQ5BGryH6C1QdMMrRb55LpcjWDQrjZynYXVkwZrYCuPuJZ9YmATakqS5NSzQ",
  "key5": "4zbUKoXv1sLzp626jFUJmxL4XghkVVfEZeaK7daijYu3N4PyVnjQ6psc2ujFZn6zFbjJke9j1qMQgoTXNcnJ4y69",
  "key6": "4VP3cFcroiiabeeYWduv9xgCzgEM1GaPySpkg5Vn2vPapBKbQqhH7NBezBrAzF8awxQSy36Epc2nyurNgUU4UVWn",
  "key7": "2utXc9SgG1Tbd4ozejhoEbfVddBNXfLyJnHhd1QMfB3ee8TSfJUvwBZkQcPgaD1pYrrmzfYjKqhFk3Q6UhCAj7t5",
  "key8": "4UCYDxKCAHvgiC5TqonW5XdYCS5YmQwLaNdnJQuW6rApSgiYGBmrpwfXYkg6NTrqpJhhprvXHaSB5fTTcv4Vg3dP",
  "key9": "3bVWihU8eNVps1TTPEbpA4XvAd4LfQkQjwzYqRXWkcN5BtJMKPui9cYiF7J96pGLtjZTHgWhSJeHTbb247LGpw3",
  "key10": "2To1Wjep2dS7r522Wv8VZ2HfUKRs3GTCahWFWPjqxCYFVETB85X9Q7yFdcdTxBc1z547GbSzMnwpfXvWgJ1ibQj7",
  "key11": "5YcKiMZzhMCk6gnzB7KhFUX62iZQzjAXbzV66UVvy3EPLBF3bnpzxz5BAQ2kg2zQeg9eSKh6TERUbzamW6uS3yp4",
  "key12": "31JL4fwD3etHYTb72Sw7KdKkD43P7L8DxwQyhwFnbhD3ZwfWfEvrMYj8AvyPocw2G2Gejj9PVVY3eLPhx55ehQAa",
  "key13": "5UdavTBev7cPTWy8TX18DpeehgiuMdws3VTDdw7JGJPSWGNo6SbbGFbs8jfTGXUqcHM2kryvKF34f13MQJQZQbkj",
  "key14": "3V2ADQqn5989YAGfEYgy6yt2XPT8pcyxT5imttfvjeA9pq4xCpCvGHcGeVBQeGkNjQPWmBF3rW18S4dJmv2uLvKb",
  "key15": "2UHeAGmteD7T4XBVizibWvBBR68L8ocUjhYb3H8fKhuWzZmMRFYuzen6v7PPtaifQzdQHEAbBfWpRa9kpQ8eTXMD",
  "key16": "baDHT1msyPJuydqPWeKht6bp8A8C3xJcxVAsov1KZxQuDcGwAm1pVxa5mP1t12DuFwMGN1wGE76FL7X2NiKau1H",
  "key17": "5VChFjHP6MM4Zo5gsfB1oKRh8ShwmL7cCdKehS9aGkz18saWHPQb8JgbdBDbRBjtSsP9348DiKgyyfLdDvxcsHk2",
  "key18": "5yvox7xfUCYR5PgtTkeGKq6PGxzHhgiyrQuScjsv44cdUSKC45fC8ybLEupKqejeoAw4TJrLtWyVKWKyHWiTRM9s",
  "key19": "4B5vmmtpWfLXgTXykhkDpjzwn1rxBYpNiviDePkny1786zzVTHY56Hf4KzvU81wY2yeokADo773ex8S4og2uVop1",
  "key20": "2Fa8xTS3dRwsK3t2zFnezJMDvbmGLQi8ZLisbYx4318NR9vjdSi9paCBbJZ2nZHn6DZYQjcYKhDaPpEtX8oxtFpA",
  "key21": "xwozBsJmQYREzkASai7LDTUzuknd2z6YjPbcRcpL3Z2LvbMmCSP8cxgLN5JgtLUnUA5BKc2gHGKHGH2qqhPzwWj",
  "key22": "2ReAfSDDcpX7QdsZqQWvCo91YbpZzp8QTXrtfsaLBjgcszmE3vgj64Zx4bEWaCar2FxudGGjNfe8dfp4X5CAGyHt",
  "key23": "2boBFC46AQAj9hqkjRQdRNUtEo2RFzZNXmQ4MmkYTVRdzaMg5kTT1vvhmRtfEmQ6QrB2TVGykuPqCuZZvo89Ua7f",
  "key24": "7WkSVbECpEupqcmmrwV7PSXY36TuyND6j65MafujC6ktyKvJsvFEdWLw2tCoJAXrwG6sDHDntCbk2Lo9jFY5spF",
  "key25": "5Gwy2coQcaLKeE4Ha93t3m8K2Qbm7dtkcMQvC7jnRLmswMRjN9aLKwzUbLmTFpVJB848vUBqFT3xcfP1hvBQLX1C",
  "key26": "5g5BpqZiNZFZNFTHvTH2V7nxsn1Sao9ss5gjqcimSJ9C2yZqoiczfkygrn7Yj7EJFStekqGAfDs3N9xJsrLVJgEB",
  "key27": "463Bdwu4j4zKJEkGCtAAwXrTzAVVaitZS7dPqhhN7HFJEqNo3sF8fhchnQ2NuG2zXnSggDwxigEYyQNbv23StNtN",
  "key28": "2PxoeKLe5REXFDpALa7Y2nZDAtzP4GGdersjgwjURG2nvvNGxc5Ty7GSeUswQ8Yc6AiZsBA5bEqQgPhCckJQeMJ6",
  "key29": "4iXULRzAApRrzXWRCd5ZqDnfh3YqmxBhBL2gcyL5QkNSqZRKhVepqsEeKuB6eE15y9xwVG3VLz89uNhDAQJzymzg",
  "key30": "yLcu5qrPp7C2VepXYymBGDgF4f8bpuaMGymDVKTqhqZUmLw9XqXKYCLCKC9p1zte7NfB7vLNyxFaQFkcJtUbPDa",
  "key31": "2UTRYNDRxMCCe7WtBScdUgMU4t4HKkhcp59QN2dQGkFhu9H3s7AtojhjnEP3aD18X1uxZ1doabHoNWbbW9tUZcZV",
  "key32": "EqvrqwtEjAPY6QYnhuhMw8yFJpFdvPBz26y5sSezjZiEctooG1NDdawDLyTEpZTKq7ZTDdqt1kNTrLBHW4gWkWc",
  "key33": "2R1iCvuLjmnHW15Mo4Rp4jkRLf3uVV2qtSSnrkSdNLAs6YFEm9oeKxoX43qkGfFKiRVNf3oKiw1ag5GKdHW3Bmp",
  "key34": "7TH8J8rjhmTwuD5xK6X8Z3XE2mWKV1JR8gsS6jWhrK9Mko6EToPbz2gGgmg9GgMGFVaUQdBxN8umhhgTgEFDZfi",
  "key35": "zMmR5fDc91xPZCVhJUFGaiTc47QbUpFho6bEt13vgNZkS5qGdMoKmsrXqMjtatzLZQCuJE3wMYPdWMpQmdppVz3",
  "key36": "2DRoGLea4Q8yntKLWnLJ1qeEPJeUPdzC6Qu8Sw9cTYjFQWqcJXLBVAhp4yDjWdwmKQ8NQaP2CMyGPCENaZwAEJW6",
  "key37": "3vuztTuemKfiy3ByKZGkZGRDuxhVH9see6FZc3Qv2NFp8T3RB5H6C2M1aevqUtrWaEFcAfNHfxZywUkJuD23LMXP",
  "key38": "4AEZUy6uuUqRTTV9mKAgfdHo5H7E5yCXB8MSqtGpPYQnPi76QpRQBpyxVRRD2i3mju1uNnCYRoBbYpVBE5QbuVLE",
  "key39": "uHHUKRaqjLhN6erqRDKwTsPt6sGEfv7LEsno2db2grmZupP88mxg6zJVm86CeBnCZTEJP2Mygg215R4NnW7FwJu"
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
