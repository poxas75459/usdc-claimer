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
    "4icjnn34PDgr6bb42xTFTRTRbPh1iuE4bSZD3XcjA5wgwkgJEeyJZ8FtrY1hTSwS7XpMUsewHVzPHvCB5zdVMqFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFErZKLiQXVxsz9HTyWrRso6pGJkdCWypP7myYy3rZLmKnVkSSLXEFNJFeX3bKtKGjR5fTqFkmyF7rScPTVMNh7",
  "key1": "3FbrSUrteNgb4YvconK8tcBMd5Gyu4Rks3eA4AWRoxUtsxdjDZ5RLs3cJRXBk5AmxPvfMhhHRjMmxXdD4C1Z9Mk7",
  "key2": "49qV1u8ZZPSLFeuBnze5wYX3k7GRyqUecYfjBF4JcKgTHHKrYHSRQKTFQgkoGpnEGL3cNs5krxFsERfWt54DjQbo",
  "key3": "3GbirG9M2438BAA18u9qPQcRxygegH16ndAevtRJfFaknmF1ZfvWqWKqkhRRCNNS3FHYi1KDQz8DLinMzsk24yeV",
  "key4": "2Uq5NwzdMuYJkRzLPfKMhHoscqjaSPN7yTgw5qm7ZdeR6GkFF2WRainkZyxbwKPjAnjMqiiS6Sbw8Gvm4Mr26ukV",
  "key5": "5hmPy7XWoPBLbyAru8gxM5ZWAhSat6cg5uE2kA6eodACBHAnLs1Q8Cm36uETWBqQVkycKnK47VzkCLoqmQoS5qS",
  "key6": "2s1y6CYJh38NbvEv9gTaZr2XYMHvue1KEe5zJfA6fJs7QQmE4TqM2BhDfoxrwjPf6oKcTUh8yYqqFVhB6xurDCzH",
  "key7": "3oWPjgEwLxeV6mrn1QJXzWMLADiMH4LppdfH3mSkQ9VRqeAN2RKGHZTJynjEMPgCXRvS9RnVbzvZpMGt4H7VWFy2",
  "key8": "4ErTPc7fuwGd3nZUn8wNgbi9vpFy1GHTZ2qtcUHF5sUSnLHpeH7mLnwNyPc7byJyHiZ93bSijye3kurhG2dox9SA",
  "key9": "d32HNWKZVyh49m2f7jqLsGbDjDcPSVSoqGdyqG8xJLhJDAd4Esk9MZBfqjFSmkfaN8rNK2VSeFmW4SpkYTFFWW9",
  "key10": "4qQ2B9dc56MMvLALuj63H3xeggZ2LfR2DbR3KAqzrdok9m9PhHToV6tBYFMchoDuDUK6Lhb5N6PWpjs6EtbpaCGy",
  "key11": "3EwsdngZkyHE7L8KxXBunnnGFSvpeoYuaNxQUrpSazobTcqoCFsBX1F9a2PQ94k1zXDikzQCA42ojRUCS7vihBNe",
  "key12": "5TwjmL7HPbLoGU6Svg63zvK6T1ikUCzTDFUWPStRAMDPRa4PitH6x4Uj8gMu8CUhgbtTtLLRNQ69yHZrLNX8cvHA",
  "key13": "45hTfmBGrLGvVn8gWXxFsSNwHC775DzWcaQUQ42RJewgzPMh3ar3C88oj5jMCA6zdwmPW5fXDUJZasePQ5EiU8Gk",
  "key14": "4h5EvsSZ6RVxW5By7sSvM1VxpxR3aQA3RwjTJqat5Bt6BP7z6NFUoiAPQcXxGTHvbWUcWEeujPUpZ4StkpMhJ8SX",
  "key15": "52CrSSihwe5s4r8wwtkRA1RVCGGQrH7QV8FyjhVjJnyQA76hQ877mR2ttUMsYUeXkFn9J55AX43YAkiPs5X1ncWU",
  "key16": "66FBhUs1fiZQfvoChew1nnNCRr43m7CFPJJPgAV36FDCEjU1twgiCEFMpYdRLaRx2hGFJu6KD9suamaZVjeqH3iU",
  "key17": "3cTmqrgC3YxELUh7iTf4gMeBsEKPeFGQgPJYHMeHohAxHCrydmJ7UhdBod6aUkuueFn6zYhMuhwxyJ8Ld9Yn9V1d",
  "key18": "4kFYDRfHPcpEqgCKnm9uWiiHvo32Gabbd4X8WcP4xQXDCzaasoASzmG3v1MrVQ4QWnH4qMkjah19WX5KeyeUpjSz",
  "key19": "36PUmB2PsGv1618f4Tn2PQadoeQD8PkLz7jgDFJhGZJBQ6qm2nowE6XG61WaPq2i8ysdNLdj5dBMoBjrL8hDxsXx",
  "key20": "3dGYq4ydD7KBRtyJDu4aS35puwHwJLb3wAqHpkqq8e3h27tKnZbuNzWQaHSH9PUuGQgbm5DFVJVtKoTaPL31x88j",
  "key21": "63GYFkrmgAiGKEkZTbd8RiZLT7BJhwSHvVQMyiCVw7B5aAXKoEAUAm15BBUKutWYByQgRXSCH9PzeRwz9mZ4sPTK",
  "key22": "5YbLCrdg8TocgFSYmNTST8JpqqWEKhxs9a66JPPFw5rrb6zkhWqkq5TcToas3hmfmuKKFKg6shvVT6Cr8n7BC8ow",
  "key23": "3eXPF6rqUK79PzH1GRN12FqJwyjSX5AfPzjLC3iaXt7VBu5yvBd11PcnmxDQLLV71coLtrNGjc4tXZByq5Hj6TVc",
  "key24": "53X6hPoGTK3CW1sXqt6FYU9fMnBvdbVkNB5WEhvPZuDGKF9T4ckVE5RHotkQSKBi99QYBk4VphFaZuEtAv9ozJuY",
  "key25": "N7azMoqXi7TwsajKg1GZEMzJi2s2S3QdgQVH1wM3HvEEWGZaZjRzWpp5spx4f6ocf2NQW2EKxRN6gvehjCgfDrn",
  "key26": "dqxpL2WcDL5wWfeKZcunfm9uSWZQrnbKfgbG3LkK87tj3u6CEjGk6chz5dbgJsRdm3z6j7XWVNBmzStCa5UNBhJ",
  "key27": "5vyB4PznCdkg4bvcjvd3Ts8xUJcoJ5pXX742s9qvq3jxWubhhfwLXCBRJwBn2cVg9zB5QwWdw93krcxuCw4BH68P",
  "key28": "3GUBgJScueGAAM7dh2mVw2LEm9jVjNCME6XxxjKqdseoqHxHgi7TScdmpWFUDsYMtGqvGv5d1AjVbqdcXHJZ5irL",
  "key29": "3QVDgtmoCPJ4aqJ4gm3bzv56tA3Jd4uGf1btSC1gjjVMjPVXaDHMPQFWuvYMUDXUk4xmXBpVcn6A1H9ubPjMy73W",
  "key30": "JS3RffnNJNtFAoG7XjMgx5jNqRFh3YvNgw8UyuRYnz6ALSYw73RR19RpVwVQkjSHoVCYAVVqJt7zppFypPvBQ9M",
  "key31": "4ADBrNG2eAHk9eQLpt8LAu1qguHX7ZenhzjfLDN5EuTfPwXDtWoPb75yBjqJ9QjkWstCiZNNbXQdLptG3KhVKdAG",
  "key32": "4Fcshe1eQCD9fnQxca3gU5YnRHHScnSPva4AVzpNnN35vgD2PHatypecsfMw3nHVv15A9y7xhMHxQfRS4iEziKfP",
  "key33": "3zMAdjnYiyGw848vbv9pYXBPLV8kr6R9D36MHZWcRbtRd4Eb8C1TnDRfDtHSEkuwn6brv8S7jEtBTrUzy4d1bHAj",
  "key34": "36GTtJCfMgvWACXJFvgYqM6LnSK51CqQ1E61VEPfzA4kb6ix2eM6B2b9HwLBBZw48NQTYXM9oEG1zzRHT7CrR1sF",
  "key35": "4woiH2XyREo1MM6pjEs1LGRc3TwBfkDDEXYJ2PCjDoKfhwUBU6Eo5gzNqsrJrFPVv1pZFGJABTcMfnh7EhzENTyL",
  "key36": "5hxEGYi3Se8ctnVEtdR18zCxrsawCTTEh7mRmy73QVz4py91uztecLk2jR4qn5Y41f2SghWkPfrpYMSZUTScz4xr",
  "key37": "Z1mzpg8Z9F6RoqK5oph1PNeW8JVa6AxEtqtwr1ANxVTVq3L9bUJSADxwe1GmHsyUjomzov9zTTiCNSmjRPxbkaK",
  "key38": "4X31muXTqhEKjHfMwPyRakGdKdJqEgfpLTJV5gvfunjp3Zw3pqzKKq21GgRe5My2fMctpCd84hJ3WzGqmrkWx6aV",
  "key39": "24Hi2e7rridph4kTgtd1Vxg9JBeXEZLwqiyFTmJuiWLH1bEWa2xf2FvHDrBTCwbrLriF49QG1Ts4XYHauDtR2qJL",
  "key40": "3X6kHXDWqZoEWKpjjLS7p2SBBj795GJJVWAvbaQH3XvF23WpftbTp4tpModNmUNd8KQxk679hfNd47QVWcKTeZ4c",
  "key41": "4mXgKrSwrW1o8aTAZQf95WcUeBsW5h4r5SLCMVJcypXAD8ZxxGMQmEUYTXdVCeUxPvrQBvSWe4KTA7uktHJPhCf3",
  "key42": "3yBNkguvq5vVkrBrorhf5HmnyxrGvbPxztNoJEJCDC4e7YYx6X1WZjuqZEZz4zh4Ysus7Kx3X58tQcE5STKnnifZ",
  "key43": "4o4HnkBTU1BpLhT6yNXNXGDMFFiquNG4AW8j8ZvinmBwtDJKjZK5jmwwRvucrLCqSdnikmBtZGKW9Sva87f94cUB"
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
