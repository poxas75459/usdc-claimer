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
    "4wxMPHzPtJi6GainKpscHLWbpbM7GgJjx4h1mtwPwhYT4xqLRbvoxtaB7pj8kNVjbyuBZEPz13gqXKaS9nHkVEx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "623uQamyqUquYTVfGD2udwYjMyWDihvrmbP9cGjTJk6PuC3cLuJ6qk1dXBzBX1egaED5J6R27JFdJs9p5FveB7r4",
  "key1": "3xcXdqoyTztwhqgcj6R6rriokijcDSxzAeFoRf9xhSZEfWQjnNqRJrhAYW62ynvUSu1RRJG8HmHMNZD84Vyr48yQ",
  "key2": "5xQRd3X1fvxM2HGYQTDCDXfdG1C6k1SGPd3CuBG4g7ZVJ7jGoGjRXuV7GF1QwPNbGKHmWgosykBk9QSBpWxEp9SK",
  "key3": "2BTq35V1DRymyxtbFn4eoyCpgGREYhopFYAeA1qPKQVSDE6GF5WJSN6XcVSYb5XwvpPcqWqAjrb7SLt3CA59u9uB",
  "key4": "2LbF5eoMvShJ8BMw4JUij6ZQsBRh9Zrvz1fe6utECHTcvmUnK4sPWtdsaBZhfyvs2ravqAZFKeV8tmgEJznKtQ6N",
  "key5": "2qAcQTpKAfK1DMFnRH9wLmXGSxyA2cKMVVKmQAFTn623GfE6NisvPtm8cTMx7wsRvixPUw9YTKktWKBUtQZBp25b",
  "key6": "5jWgQQXNZK4JnTxaPYWZUGPPmdBF42tb3Wbd69phbvjDAoLMV39UqMcyZKJRZr73b4WhcDyoBaBYjyiE2jLUtKX5",
  "key7": "cNdPdYrKWpBYhvzVFfY1tDqFbZEEKzyfpAV2ytHqsKoQufAYdzBMZ6rzATNW8jYShi8Xj5Cg29N2yapgSrGYX8a",
  "key8": "43GKPCZhysvgjJoKnpvELAYuzzC9xzqxSFbxKvaiZN5E7rw159RbZbR9aU6nh3JmJe8dgvWTBq9GSNqN5BSmB6sk",
  "key9": "5wA3oqbbUd1BCRWCZ21BjydZULQKm4omwkfNg8M9sEr5XVACtBrPjEaKvoyyps9p1aAZpNE1cJtGa3v4SudSpWMm",
  "key10": "3vsfps9k8YRGTyvpRpKCwARj7LWrMYoSMnTsCrex3zD6Tuze7BATwLxeAx1SafE6pTe7awtQCe2B4L4CKZuAhQid",
  "key11": "4L7Ro3uSRbp1D9TcUz1YJc3D67MEZNugoZn3dBCmsZ9SdpV1iNwWx7EFEKyLEuKVuiYWymyHH3aufNKZaQgw8DPP",
  "key12": "4AAtARwGi2Fu2vTQJzr514Wi9CTnoUuaTEKu4n5ghx47Uunmo719WCpYRRVRvWfep1FKWQAaV8oMDMYFa2Sa2Y1u",
  "key13": "4kfUE7Guz9ZGY5bxoRQr8KzQefwLJP1L81Lekt2K1VXPLMjLYuCozkFSS5MoagAjRVTbiaFkfTTqakoLxjpbYLCx",
  "key14": "5HCyPtDqd2VM4q3gxkXnVNMiTZu6enPzezapBGTqN3qymzBYQ4M5FuUmZbnXijgrpH7mpv84Uzek4kgwQFGijgaR",
  "key15": "2pX2Zw5NsX3RLpnf5iTewhyzTAW65Cv9g2Qpgj4P6GzY75yMVXcPqC493rSHUghHQN6xJY5CbCSvuUnCKCz3zwST",
  "key16": "2hZxd3i9ZEKqBsuJCEne9c1arfuFNtNYETPPiUWgXEdjA5WRQtoSsLvL9Xoq1JaSWMmykZNrgQHXznZXgqT3vQjc",
  "key17": "3RSBuZSoP86MSZh3KiRUHPwCzxfcCKnwV4MBQYaSfYmLbTwfjh2P7BtA16AFVYBDhiWZQeg2K6e7vFvP8SXNbvwF",
  "key18": "2BqyPA9rhzmuQReMJqtdjnxHzA2UzBvxoaJHpYHKD3pZbXdWpYeWiMtP3cwAnnAyqkKsNMvFkfBg2yVr2pfsEVd4",
  "key19": "5WdP7Q5f2xEP7KRcxzPZCZ7MTeJg5GiAxivdacZXsXwJawNZVtZJZNJPpKDAxN3zcEgpcNRC4YtupHgBUTcsKXDA",
  "key20": "3ApYVsSLj3iL4uk9fGhNKf52Z2nHEU6iDcUFms5zq9h3ADHhDVak21fmvQDdVkLRJFTAdL2b3yvFEMJ3xvLLM7q3",
  "key21": "4E6munwZbTzRi51SzEbcN7eP5xFviLsUqg1gDr7gTDQb2G8siXSPyHtHnoC5e6aNBYNoU8583r98TyrEeuTacSqG",
  "key22": "44jDkruivsBmhHJc96pxbmNUMVQ1LMsy1yhwwmHE2DpBnAaetRzFfizzkJMDu5jsXdA6fNhvZW6o3tWyrq4pF2Sm",
  "key23": "TjvoJgNWBbvVe4VJDHvLvUenTxZ5AJ6UekxJKWatKQ2NwW8Znm7BY6iZVuAZSkvu6inJrGh8kPkbmzS1xqDoLuX",
  "key24": "VVDkWPp5Amuxp3mD2BHNdXVZ93kbXoccwHNPkDDJ6htNKYgFTpyr1XLG1zVzbHJ6QoxpQBtrkLz7GqCXrs8g6jL",
  "key25": "4QEPBW8VeeSvJPMNeUCm8dsDYvY2s4wNgCELnndtZBtzkgz66jNEQaNBXYRoZtnt8kDPAiw8TQ24VYRU92D7AU6u",
  "key26": "AmvMZV4D3bDR9rnf9hkkDK5DAh7QBuj2e8YXo5RYQ64rsRULVbUdddRSCdpPzzmQrLQeUuefcxtMfZTWzdsSNAA",
  "key27": "MqkMdUWbbAykbs2ybV3AeFP4gchVyURUMPq3ra5TAvPUNCbFMFaUVe3dvPYsettm4fjZtUW8Pv5QG9XiBEPw5sg",
  "key28": "5uT1HUJmQiw3QzJUjjej5ER6US8643md9BHSUdAT9odoX3Z9ZJWuCvh4tdVPVXuVD4ivkG2jbXjpuFTx9Zjscksn",
  "key29": "3UD7sh65Cfx3VTbZLEasaDG3h5PyNYBNv2Ybyxtj5FL1Wxqdac6ZHGkQ2LVw9FCBeu6TtNnuX1hdgic8NG82KsFZ",
  "key30": "31QdLLLneXTqVZSw3iHrKtDzhCaLgDoMxVHtbMtd219v5zXfPRBsGkaehWy2ix9LsEQHNFA5jUhnGNGts7ENA1qt",
  "key31": "5oL2RfA8VX8fGRfMUMgEp1EnSmmj9XyasZ3iAnNYavxXCu24ar6ND4ZS7EJRTPuMwyGa2gHBdcpmTX8SRGhiuzz3",
  "key32": "5cjbC98Dv7AiNoQrrsZKcYFb8dWHj3XydgBugMEFHHKdb5KeTGPHhLFSaDvd1z8XzhxJL6Q1eFMs36QqNpYcxsHC",
  "key33": "4x8XCJyhGJSy65MRrcyCpKvuHp5Nm7pqVQEXx2369c7sYYjg3omAcR6TbJFjDKVV5ANA2icsivZV9ShZNRxX3BFL",
  "key34": "3MKmzCXYVTWoJDPyHNShEMxjWKGnHVJ7LDu94C59pYUGe5dAvaLg3uwS9qMwNvzkFkDF6Ta49wnTaGFJodtm5sBx",
  "key35": "CN5GkWWEJk3nzwcP9fBMVurVdjHxm2ZDsPVKHnMKAmK2tF99BDsfyDirpR77C28iaxbfYi1KyFhvUJ1StsNZVLA",
  "key36": "3ForeAxLBqkS87HmkPnmvWdhR3ymyzGx7465hW9Cd2xNuFf3UKqfdAeAX54xp4aaa2k92J498g831KGuCY83Lec8",
  "key37": "2z4A7gUUL9BrKYzgghkJhFTptbeajLBccMFR7H9kUqMob2LqzFagJuPn6xE5uyppF2MEVC94PeihQfLrpwYnLzwe",
  "key38": "267CCCsyKWfzeThE6UJZC6XJLpD8uRj44nQ2vQZFJw3jzPQxSLBUYgmVWR2Ub2HJEap6pmMucrdUcvU2YSD4UjMF",
  "key39": "2QrrQNGXftpAQaEFRVVrG2MWxmC8Aq21dNuYbLPixsP2xmrzQkNakKoB4MQYayG9KZjCa7jzPSDc9cCk5gPHxThX",
  "key40": "wL2yTMpWdZRptWvZApm4vM1XtjYd7fT6puGGWHHMj2u7fUKbMhTgFvyPpLA3RKCCDXnKHED9HLD9wRUX3onHyhQ",
  "key41": "2kStV77YSrpEsPw1XzbmPRv8Ji4KMgBfB9cGf673UzXCv4hVfa5z2KVqDCtqq7Wui9T39ft2xJDZScRUHds3ahs4"
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
