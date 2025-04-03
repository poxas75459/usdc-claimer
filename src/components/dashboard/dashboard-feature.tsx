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
    "5SvDkUzzydfquEcBbx7fx77uAnsgMKUQ1iSC8vM29fauwXyvYZ8YLm36GRJvbj8pPE2Rzwj87MAU3Uzmswmu2REC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vitJp4o6dCZsJxcnAe1usm1ANGngbUency8P47xSsVKKL4nQw7uYQGhm8i3gAztXg2N7NMh4mCnzT2RhsztaB7",
  "key1": "2ypaAfhYaUaPsGn25nBZXNRHsSSAsWi63m4YzymaggukmY7L9sPGx9APngm4cCTw3d9yffQ7G31zdP3MrpiXwK7M",
  "key2": "2eYNqx3XzK7LcqjVBxMBBJFFgerhWYDUWvj73Nk4sPAAn3Yuo1Yp8nBFrJSJGfZd9Y3TUxewiTwxKQuDj9iY9UYq",
  "key3": "GkiJx98PLnyeyCPAfsu4YoY1QKKz5Z7p7AcHPKrnBZYWTVAXM67K9vBgXgdZjs7NuaecpKEebNGx3hiy1MGjyVS",
  "key4": "5kk2HFggWT8T2NYY98c8EoAXozcJHLTJHJnqddSGRmzhfDP1yKPkQnY7SJiF9pAWZ2sWAwfZXjhvuxfycSm1rziL",
  "key5": "NwUyQFoS9EBvKjKGicEBwgKQWMWw4ahcvBeTnAWCpMtHpEGQ41uVP7C2VikCz6H9L9nsrEmNsn8Rx4MGf915beD",
  "key6": "52s5tkt7oRhp64qmyLESs3YHMm6GVT1crPbDi9RDk3RnoTfBBT3zC8ZHQNdSAY5UE5W81zEnZbu5xwNxShGBx23B",
  "key7": "5aSei17oUL4HKuEoHtxjNWkCHEpTpPLJMQQrFzCPMtSsWUucbUYvTFqoNyWJU26ijapKxPvQ2XdFWjqHdfY61dn1",
  "key8": "WY8LRXuTiE7X4NknaRRUqFdGUHk6tHLxYLrN5KJgYUXhUkVx3nTq18FmMPBMp7YF72ijyuUSpiipJT3urgi4xpb",
  "key9": "4bqRYUSSxMneiMnbME46ST9rWFrPR61KSq5vcNX9URHT79gpTsRr32dWWQwGcDru7PdMo7wWcHECpz1R6DaiN1Wd",
  "key10": "3ewoyZjgEmVVtgYSjTnr9WiA17gJDzVZfZtuvBSHRkv8PGYaChKYBRNXF9Yc271zHoWj5pNfEmiW2ZmHhUbCtAdU",
  "key11": "4nfC4arDikCovjVFLepUb2gx39rMrMBeNq865PUBoBkfqcNQjTUyQ9q3r4B5z7V9fQ6VYtTsEXyY73hD1kMSEst2",
  "key12": "5eyWsxyeXBgC636eZas26woAEDF4uEGA9kiptWbc68m91cX39ZrPLyxkYAGYWtJcM3mFirtQvHVcT14gcDueEpDz",
  "key13": "5uk5MF54buwabFz9UzGMBevqoxvopJfRbVxU7J6pVoTNPtms3S6TLRt75G7YaG1wyiXAM2LLTAyD2mDY4LTyBUWG",
  "key14": "2qfo4LfEz5RDHJfg8U58WYHWGo6dPLvYyT6XwQX53HGcsAtJgKPym2Ba3EGZC6uhHhbnQyDsgSJbMaYfBekNd2iN",
  "key15": "62X9Ut35AfhyQWnY86S1CMi5mqUAx14zuNh1Sx5urTwC7E2zLTkvTZh5LzsWmLESWuDkGtacbyfjnTLNRKVmGQHJ",
  "key16": "2aRmvMsNvDBCsY5AaoZdngqMVnoV1QxQhPFMPLk4gdcQFmQ7UaPf7Tn863poghkKLTXbKF7pnvsyeqY9mu8xbm4x",
  "key17": "2TbhrajfGcprMFCpwHrPFLp24fqydx2U1atw614FyiTygM6o5TyZCeEvEvCw4hCrzv3PDsEdRT3T8hNjUZ5biWdV",
  "key18": "2Xxx4eE5vU45VrgP5X6qod7Su8EENZPAdPNWkUoaZxJWpYdxtbQqkLesN9DCooHa5mrymKa4oUAZqHKg1VbYzjPX",
  "key19": "57PzTt4RgYSaHQ3Stq8VXXvcXA42fY6949G7geqSAomgKcjCje2eGNQYxAg7XC8856oiL9Pfhyocpsbu4PnEo9TX",
  "key20": "5QFKEXaxUQi9aGkqTFcwY3PWGKoooaEFFyyJBNLZnVdiPWwcQcYZxq48kMBPoMauLWfb7X4GRUVyGgtPjwrYuxs8",
  "key21": "r4Q45x8iW3etarStv6pouD4Ky5K6A7sk2DrLNLyPgA9Sjrr3VojjiX2irmEE2vJ5YkrDiibJg9pntYxt2MbUt1W",
  "key22": "4VdYWqLTbWSguSVoSTRVWctYQK8cEr6tHdBgtYXqrSKziNqJUbdNpTyfh1kvdqFgdoJgBoVW3H7vUvWTZsF5y6MP",
  "key23": "64BrNtbYv8fgrZuyNW2jAaLYxQ7SAERb2eSEeYakskW2i97BNgkjfv6GRfcFcD4N6eqHczCr2M2zqLdqVBcuokcS",
  "key24": "4Q1EFM95qJvfbNKxFBBA5GSu3R4Xp57EaPmhwsinW3MSgdZQXKxDd73u8qJrvGKmMJevxDPMtBzpYpmEt7uZCwhQ",
  "key25": "2PvWT3dB499ZScMJT1e4NvhSufEmxpmpVzxcbURRif6uruyNXDAxF6uaKEzpqpDwHoiYCjvBEjLWanxeyQ9xwSuV",
  "key26": "3tKo243Sw1jZPpaJgUzDgrQrhpXeHd9dX526AUUvRUX2PyEk8Ns1WKkGNvna7Ne5qhVEtXoZE2cumFvnAfznzXrL",
  "key27": "2a7sVBex2LbrkaMsgSMuCrABp5TjCmgf2euTp41VCbAcKSyeZ8efCBjZKwawb3mnvjb275tKZw3nb5ZPJDcuEpyY",
  "key28": "3HFrrGxUH2AwkKZmvfcYP46iY4NpCF4QQwNo6rGX8ETDawcHDc6NwM1274P3mk9e4Pqboyo2FmCVvp247ozGDbZr",
  "key29": "4GHicCrezBzEDW1JsHyyVDYf6r4CnRrjfXLQdchkZVv6JGAVCTwbGWziVyNCDP1c3qvmsrBDYegsw49GCxM71CVo",
  "key30": "58AnQvvk9rMhUUY9L24JU3faH7UE469VVD5HvBjUvx8j5LCoArqp7KUdG4FGrbLjZELCe3uuEQ4fxBRw3oDcM3zc",
  "key31": "2Eprmpuevn4vzRowEzS9gHau3i1WzFX6MZHZHhmSsGxUtRLJeLkY5Fveek6PFR3cR4xrr2Psw2fuRrZwMTQgZbnS",
  "key32": "4F4ogB91hfXdghQrd3KZ9yydnjFEsNE6Smnvy2VNuJU1iBbdPYHjr8tXLe75LmVKpwXU5TPHxPb9WdSL4Mawhte",
  "key33": "5iaCJ6F11aoiShodaLFZNhjrX12PNcgRMhQd2KrZazoyCsQo1XvRdCXj1T2SubAk4JWx9AhDHtxz6T5xsFRDJYmY",
  "key34": "3Z8swRKyTfidpRMrWtw1ZbdRXfEeYSgpFBEVrg9K3TeCPim619jgqpc2qxaxwJcieVRrdbg8UdbrjMgxQBsoUEp8",
  "key35": "2KJYFRKbFznH6xLjfiBxhD1ZGhSnJMpQfCLM7hcasuADRmtsnLjGP9vYT4Jr9B6a3LoBHa9FzsMzvGCTynW9chaa"
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
