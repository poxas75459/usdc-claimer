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
    "KrtmvZo1opkbzt8GtZpUtycqpjjYQyYHVGvLFrZooh6tjvomSbSemcMb8ku6QWNRJqMC5ZAcRc6AkAWD2CCfMJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ry1TSgmhbsA3fSw7AJ3Tfkb8pxWdSe73FD3SXxMMiK4nDtHpNJaVV5m8YzJAZLtCqWe4RxtwPjd6HVvYQ3DxJLX",
  "key1": "5P3gDkLEnwh8fgkWNwKqNCn5kUkfemfqJzovBFkqWb5S4mQgzwRWpvui4P6ScgYZHLKQy837ufa1mzoQQpVXjr47",
  "key2": "1f8HkTfZtwgxUSNkGRp6YvnP49M2uUMZroE4itBQ7F9xapaYBAbqkqi2UJzvFw4KZhAGwJoyRZcmf1jhu6BKpKk",
  "key3": "5tZohefdgccw2o3KYmujzDLDhKm2VQ6eABwkGLqNQN3SMSV2nQDYBvTyyEp9nhcHpGvfRnEy87EfQshK4uZ9mC4M",
  "key4": "3SPwWNGA9kCbZfqQgmUkPQdVtsKXBuQLv9Td79rzD4aZZgNXsYkkNauU8mEzXsCzzx42YSZitNk4zxNnpKECyfbb",
  "key5": "ccJng3XR527UtcBwRnerffnctmAfqZmWKeqsGjBXJxK2gJZWVM8XziBixRDD7PVU5a5dFWCG9Yz4ZcaXAuoCSQf",
  "key6": "4xqDUC3ahPvwG4q3Y8VwCGqFvv8ndwdWvv8Ju41BvkcuWJUnyfUUSvXW5VwAdvQixgP1hR944fT5PW2kPmdvmEeK",
  "key7": "3jRpTBoJLJkmyvN6DhLxvY63b6ooVifPWCPtRu1TEhNu6n4WRrkSbpjrZQWvyqzN7wf1bTYMY2yUSrtaT1XhX9iZ",
  "key8": "qcsfSicuDstyEufQiTuYA6j3PF3upL8HJP5eAfUGYYUceMAxE1vkPEPTxwbZFMdDMU2UYPunsZcQrS5WJnVHrhv",
  "key9": "u8mxf4vxsFJp1uQjNVh5EmgEprNEyCHhrVxfPLTFCbtjguKPJxJ3AiaUnDryxtGLxoVSRfomXa9kTvC2UHtQCtz",
  "key10": "3guWEjdXP4QKjw7e3tQVsDNM1nxYuM3p5W7dV5mXc9pa9abwAVEu9mJASNSYwMRKgTrePVAA21izVcRamjAEdx2e",
  "key11": "5sNmZbb9Z2cuUANCR9eoB57hWkDQeC1HUJKRepgy3RjNySdT626LjNskCfFAPxKxyXaHeAsjcGUnAPGVTLZd6xkM",
  "key12": "qkmyBQVCYwsXgLdXwxVfXXp8Smn9Be6cefPF3gWSTvEvm4sRCvFvJc7nPgCMFMeddwTntn3SxKStcgQhCeherPT",
  "key13": "4vJYPFA1D4g2Vbf7AEKRq8xsrmPr4hHx1PzV9o3creRXVobZRhrAsh2EkTh5WRG99bsCfnsZj8nC6EKCCaf9a8db",
  "key14": "2xjs7nScZw3p195dE6PhV795dQ5YnJJ5ZtKsHKW51umM5iycnE43xmNv1psiknrsQe8jgGiNcT1sYqi8YXXxdy1S",
  "key15": "5Yda71GjLpgHoQ1Ua8g24MqVTnsG3EPqg71cSAwB46Z4r2vd1MHtvH2JjrpgJdYhK3fVyTdY6PLHkTtMSoELnnvG",
  "key16": "5LqWqGqe7n95c1LJ42EfKWWfxVusJ6wekmJgrG4QnPy59L1ioKGsEJ4qStY19ZMYHqcQUEPvTj7FBFqsxJHdKBtb",
  "key17": "4yLSQD3GGWXgRKtG9DTU5hsaPeguconwH7ZWA46ed1r2WAqJaew6sH6HSKmMrCznZ2vZeMDUW27BCdoHzEd6RJvv",
  "key18": "4wLMLQRjaE8WmGb4PqWVVoyzWVw5Rr4KMa1fTJQYYEsQbMFvmSbQ5dGdBYRoTn9L8JQwhRHbRRHu9h4z9o6wiGTY",
  "key19": "3mxeeYdCS2aBnebD3KEHKfcKkcazGVHqXpf9LbD2qcHfWAGTWHy8zyFS2hJmLrhhSg1zRx13bycjZw77YSFBog3u",
  "key20": "KWqZmZjzhsY7jWYrAWwmXesm31YQvzDB7LkL1LD2Awd9Q2f5shfVWkEeMKm3PBMSmtUyaxfdhKHj93cyUbbQaFc",
  "key21": "4djVzDj1Kcrqy7LPaRJsRCKBEzJjkt43efDfRQWgWynCwsQMySN5siXg2qrZEuTcanEtbW33AhsNV3a5KmGZioMZ",
  "key22": "EaLkpzXp53Yt5i4woBnaxLVdxED85kMucQRBXFtg3vykW9c1gWVuvzCRZPeqq6AJqvWdJm6gEx6YitTNtA1isP8",
  "key23": "5s4J4BueXgQDbFC3v7NyUjPn2U9g5d4zEjd6LD8oiaycjmYDkQvMSXX6yxid1h8LjDkxA3D7UgD7NPEBrGfNLUzC",
  "key24": "5w7jBm4VUERrooN2ZFhhzcvqAqehz6d3L9pxcM35WFW31CXSrRrWwy4aBAwLiYcygu2RwSExCKrkxCg3PmGfsXHz",
  "key25": "hcEqx4PgAHpyz1nJPwkW5MyD2v3NWAMrnEG5Bva5bvgqhj2qP8xPxXSFuLQYTGi5Vm3QifR8afR6URVnHqKvfMD",
  "key26": "3KsjdJB5849NAoUs8dJDrvYAHYvHGLuxYrPJ9LfFKTLEXaA85gMzXuHZi1UyAeDo5YtzXfBp6tUYuXXpfbLY1Evj",
  "key27": "2B6hpWXRb8NBmW6qBBHvAk54VZj9jeHT6tQS6Sj5E9vumt277oZhsWP9HvZH6oCZGAmrrWswgDgwUqmzrArSj95Z",
  "key28": "R1cnNCqawdWUVMTg1hSnaTiYRh6xjMvc73pRyfsoaPwhSQDoDimxCF8VvCW3Y3cw8xbWhCTLhpELkof14pPjo7Z",
  "key29": "3gaWdh6xEjC8kREhaRaGrvzGDm7gfX68oZTkFaQKeoExGXdW3k2EtJqTtA2CMCavsTRQodSysCgj4tS5WUGN3reB",
  "key30": "2LTH5424NAi46BHj6VCRExbcuG3q3usgf5LGBwWN4h9hzat3vF3ZqjMSAz4HEK2tgyocVCN7pXnyn99YWr1s9hdo",
  "key31": "2XfD4CjMynAFsBVhgXdRUfXQZkMNZCqNenVkMpurfGSBwYNf35vByvMnn7jqxAWajMgSn16ZdSBzUGF3GpvnZUUU",
  "key32": "5tS4PWgphgAbuASRvea8UqufBM8PtZDwqpwnnWFqAGB95ibQj9zmyuMYE1cvrFHqBmp4CySoiJFSorwM6uNSnsUj",
  "key33": "49KeLYhMeqfDHmbSwf5bsY3WSo5FeaiYMP1oS3RddGGkmJVUe74bE9Frr97ErQjDUPrAh3PceTGqohJQioY93zwi",
  "key34": "3mfEQFBFCZYYq2TEFh4XRQ9N1LfyiRXA1cKG7KVmvZ4yTwvCW3LVDakMqUihjPFkXqczSRZ6Wzb8KoYRkcS2NS4S",
  "key35": "2G68LQ2zbpoKzxJjtrAHm96E2fVgYiU8JsYRbm8NMKdwxf8ANY6qgV5N18G3zJxjZsfdJXYJ7SkxtR6jnYGT1kD9",
  "key36": "4oKqMJLWQ1XCrX8DMuwZYNnDkKuLVFaiVAWyQdHJ7k7nTCKkkeApTEok4mD1PYn7XFoETwhieitm47B6W8U9Lf8j",
  "key37": "5BAsYSHd7mQiCkoUWd7DgMSKwDJssDRtsMQU7TmiNzcBFmR13trWiBL4gyxmiEm6VVbTWtdYLtiXHfHLqo4nnf5m",
  "key38": "3Cx7V7UKSQYrteqeJgPMykAMQ6ZbXAT2GjBq6AXadw5AJ2LFpBUi7vviVM9heUZLVNSaC5tsaucPZ2TNjPEFzVfh",
  "key39": "JdDdP1WuedTkgoY1KDPh4xNHT7xJzv9r9JqgBbD9qpBptEpBtKuyWjWapdV1RnsEw6yAvVXp7L5P5g4ceuJFyGM",
  "key40": "2jME2WuSiZ7ybwTBjguHgqGYP14Zanv9JyAuRDUumAXjwys14Bydi9hhBQ5q4yJVMwQYdq4fcLEH73ttShS6Lheq",
  "key41": "5MKKoYs7hHxwiWgtNwQ2KaePYXPai6Mt9HJukb8GoE391rHHLfLAKP1SEbULbFBzwSSNea9EUWk4cc28i8s4w1AR"
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
