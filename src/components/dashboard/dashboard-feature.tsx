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
    "3yvuUN3tii3Xrj6fiVoTWCJXWfsEmfU1SCM7CxmPEm1Y7Qa1z2K9X4QLnMJqPBAZa9ACDrec6QJ5undv4ErjCJBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMSZRXCkbMJQJihMdqnx5Q9eZpnqmHVPFubA8epN8jChQoDYNjW9kscoYK8QMhprWiVG1UxGRe3MRhP2yZcGeev",
  "key1": "4dLh753yFQHubum9He1DUPSUr6LuiAn9ucTqihmUUEeMFXf3Qho3ze3weqTghNL422WCwQh1GyYoGkM8vUAFxhgS",
  "key2": "4oZcwVQpnFJvTkjRPjMdoFnAsq6MHSr3yE9NqrxeBXNypPdnfpn4iJGgfroSw34aSTRRdn8aRnqjByv2CyjryTLG",
  "key3": "Rq6vg93WnB6FtCDUMGMS8neGg25eCUXDwaWyhiUwGVqiTjxqeVrPMRd3QTDUk6DymwvXpGXQBJPpJV22uDNCZ18",
  "key4": "4M6ozxp26ocRQy6TpbH5yFfLfpZpfiBeKdZbVTpPUVEzbFky6rZV8H1oUJ8ErUJxsee1qcBdRe2J2KMCSEjL99PR",
  "key5": "2Cf9m7kTq4XQ3tdkxqSnp88e3Vm7f3brVyyhvpYstpzmXg6MTmjxqkgRRAHCuwHhAehETJga9yQKeSajsfcuERr",
  "key6": "2BdcH4n4wHHdDL97qTniCbReoSwj9FiMahcPQ9odZ1eDkofYmk8jaQuhA4PFHY9mqfAvVH4gNVTyh4QtiML4K7u4",
  "key7": "4iFtxTEvWuT1AVk41KGP2sCCQCayCZpwHm97tkzymqLFjRVMUK8htCZh5pqLX2R7xDq7c2Xjtg9BiY2JHTgCupL2",
  "key8": "3U8ZU6DQJibfqeE3beqV4UgPLKKccaX5tnqZ85Y5UhQ729CfAkZ1vqJ6yFtSS9UYMt9w4vrMbo1wHmnQkGpTqB2Z",
  "key9": "2M4Ye11EKViLo4xMTh6GRQ2M22Tfy5ixxZzkj7yCUt244v5nnh4pbfHqrvTMMztccgzhqzovL5banTHevBerrkwU",
  "key10": "4CwGyDmY54a8kb1wbgX2tBL3YQyLYJ7n6kEVSGmXwzUSx4CSYjuzq37iJqwW8WJFEhgrBB45LC4vRyDaWACn1fUS",
  "key11": "gPnkVLY3HRYVZmjyn1UwGXitxLjjEa5HNe57bca25hVAM3RNZaUotKp7GzNTXuxYKyHBcLCyen5TWKybXSzXs4g",
  "key12": "4rQjLevN2d4eTNN3vU7X8ACMgK19fXoxpHdg6zVoCbuvF39LpAi9fZRYWSVGpRSqwy3wihjjtPWK4iZxWD9expVY",
  "key13": "26NLW6eX3TNEh2fh5Sycq6oUHXwxHteFwX8e8f4DCgXnwFDw9Ma832Gr8fQ4aCruF9Z6qfRkt9yN8e2Crzb4Qrey",
  "key14": "3W46Yh7DkpxQPiE35vwsQCs67hBCiLqdo9dsTueBqnZtsPRvtUAksZ867nAHGp7mPXUvvZUg2cp3XTM3sDbaSNqt",
  "key15": "2MkvFi3dLT4m8vWmNwQNQ2J4xVDx66R8GfYqE84Kwe6ToLpWymow6C3Mz9Wvmvf6w5cvWhs9zeYKrzZf87JVxQP3",
  "key16": "S44ZNuPZ29xdD4yo3U46EF9U9HEgpvDWUocKUMp52ga9CEx81Crjdpa1TPN1R9rq4hKu6GJ62WDRVUWTAvg4VE2",
  "key17": "5wn7SPwgsdX62UkvLrpnKrphh5qXcZfjo6wMCQtHGUU89ud1oTjGEdQxspCveLo8bUc1utsnjc9WiwVDYPnixshv",
  "key18": "65gJuvAw9Vr1Zf9ognFXBDzMB19bU8vTmdKUa29CW5XdMgmmfbiWKSxCAEuY49whgA4gm626pbdFYddBc6d9rQpf",
  "key19": "5qL5mfBHoDA9ByGbNyWS1KMsJT799mTehayGrhu9itot2w2rvK8zsq8sC1RrPyAZ4f4VG2ZwE46rpUC5axVrnrLX",
  "key20": "2xjxoRjC14BC8FbDgw1tLUHgWinuWzUNRaK4G7sdpKM51eQufa6RsHs2wYTtsX2tL2tuD39zAH3yncnuEfTPY4WG",
  "key21": "48ZcDpxhiaTGL9DhQ1QP8dNouUnvkgiuMCZrPz5bEtDV7nshLWpYupGAyZHkrLTzYzKxUSnohBPqKPvd3YXZGdTi",
  "key22": "5nYLwtpgJMhSjjWMSXukZ46KKWmxCdVWshYqgnQGs9TkeNBvtg3pGYpnf5AiAGPwjFhs4mvBmPRCoEPXpwSfico2",
  "key23": "4YLCamE4A4MYT8pd7imMzFtZ6HxaA2QGAyEjJeVNtKNhgYw3Nb7e5Co5mDkQtRQ2ad7oP58T3bWeEJx3bX8f8yj6",
  "key24": "dcjMgj6kpcakeMtHxviTZTLuE5Q8PvaKBhvKiWoxK5xazrecKuE7c72WCWAkxsVYuTW8VVZwgqJ9cADZm8GNSVo",
  "key25": "3L9WjGsGKwZQ9jKq4E72t4gJUeRUrwouHbmaiU4he2fie3U5EpmmTqeA44cvo8HDUQjLeGdfxYzfkgq5Nn1XRkcw",
  "key26": "2DpbMb9qyKSDy98DaLngiyuteH7Fg3ZqBHb73ZY53La4XTttzQ5otyyZUwg7c44sUesFN2ifwBPo38K4Vv15mYT",
  "key27": "66VTCdN52DeHyNGU5LJequzipoEa5bM6Ne4Zc3S7gjpyEvX3CqERHGRAN9sBGM9dQd7NDcifK7uiz1eZsaYoX86U",
  "key28": "4haAJgQG5p5DemGDdCsK9LE4K21ti6SsHNwyWG5PNf7Z1uRF72pC1wiiNXKiJuiqjzedSWgTASewnmskeBis914r",
  "key29": "3Z7pgKwcZXCQG256A4w7LZW28WxhsKg9JbDhXATLnUf9UdyKtS5VnJbwUr41y72gahv4kyeSbA8g8tdbaT4ytubP",
  "key30": "4YxUHUAwCN69DZdCgfyCwabA9WdMRebTRvnP8h6Ukx6KV1cgDZJXuJDj8FjcJfg1dYKpRNQvXed5743c69Cg73H9",
  "key31": "52jCZenGeF9jqZs5it3muU2rDUz6j984xBAWaAQUh3oePZdBtaLkZmtin8yKtvPvZuiTA5vo6fZxcaDm4Dvw7MBR",
  "key32": "2BgwKFXpDkGcBwEDPP7fSefc6JyoxnTcDtJ3YzWrDr3nrYoRzZUXQphg3WBZEVJYmNAaRmHL7RDduVJgrpSkDiuz",
  "key33": "3HxZt4N4QDCviPDGJLMvXJNjovKv5nCWbGbXQmfHHJ2FJTYFvMDkrmwriKMMpVKapRUhLWESVfa7e1y9MCF3bN2G",
  "key34": "4kbaJv3nCazE72e7LWWaKTvCWkajMcWR9Kj11kNJcKRCM8JXKCFTVjRwRA8k2XP1W2QCPt9hB4MLwgeTZeZdPitA"
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
