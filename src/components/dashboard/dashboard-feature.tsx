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
    "PbiE2w2ecds8wGxP2JjmGojHNM98gYtNgegxVjygtTtqUofLnddi6WmLLRgGYhJPAfPRUuhjJddehwhhHVVrTLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22AtS4DDo6GzzqwkfxPBSfkqXG22BpHzdqhAN12jnycVpUaHwSTkrzJJ39GbZH8Yr1Nci2yWFwkcaVTK8hyCo76x",
  "key1": "4sMwk4HaaAKYDq3kBVXzQiTJPmUkgJyHHM361DpAmD3hqDLuB4NAW2FYA5p6CksoeqtLGCshvLqafupf5mDsPx6r",
  "key2": "2L1katn8eTji1JhyVntzJREaNrvGjY6gyqntMLRHbMKoV8f6hwhfd3SRXbyK1GyViMzCx7jZe9fxC1SeBRGtS18Q",
  "key3": "2YfQUpPrXkShe6wRnxwCaS1ohwMCoMHBq9Yx6AryMoAYjNibHmXS8EfLmx7CNDaJinYXvn2HwfsmB8528fn44UiL",
  "key4": "4gA1mqKodp3umL2TUP5nDZZv6TtS67DsamAcDoCxZmW66ANCiUUvTTyLidiRRdQmZ8NzsnD7h3msYrxM88hcBK3Z",
  "key5": "2hmNK1UzeeKow4LSDGdbNTAhtqM9SZC6mqm9MBaRgdVxrL9vLn5rV67DBhcMArYGfopTLbN7F3UBVPTsFP83ZUbR",
  "key6": "2Q64X4cL2btbzzHrKhcGeudJMbMbEsWtJwqz6Eds7AyVJESSw9Rh73CQ3L2pmbZFGdNoBhsGnksVTNJPUqHVq4tU",
  "key7": "5MWgDAhsxmAb68aneB7r53W989cF8XGd5vNYyeAmwpgFydbLdM9VWsPRHQUf2ubKZWGB1JG5g3mnL1QX4ceawDf5",
  "key8": "3Gp4bCTA54eK5ayJC687SAyssfaKUPERF3hQ1YUJBtUP8HhRu7M9udbBt7SWCGHekvBXntqsdVLQ4NvjQn9ghZbM",
  "key9": "2sgjKnLsKGEFM5DTX7EhvGSDRHQoU9d3PyMpjafpS9WMFkrUHCEY6aLa22NB5RVN65XGCYNh5gNS2C6ihwNYh6Dj",
  "key10": "3kn7o7RMpUSuY28JAAjwcyRvHU6zUxJhkZP8P4wPhdeKMNHk7QkxFS52tFm6LBCktKmZzMAXk9iUtBoF5aL4cwXz",
  "key11": "MQfdHLSXtudFZdwWVvxurp4MVyUdQydeFin2zSMUXTshskpus2qbQoqv8ZiXTCLCxKqnxUmSUaGLC1kxDERjj9n",
  "key12": "64NT3AB6G415MZ8itXtguMgypbaaY2LN1FYcuTydqpWYTLtuhGp3N1wHrhyvbMhGBEFeBRhUrBjD9wizDHu2DJpJ",
  "key13": "5XFtE2vH4vSAiN9xbpHzUKmk6L6kaBapvqjdHdPUcn23gVBs26a8qk1wphdrhXEgSDnLnT6AH3PV65jzt2rucF22",
  "key14": "4UrKofSevKYLcjFchyE5LDAzFnTY2DmJi6rNrWnC4QHoFaFS6dneGUBT464uYJBYPX5PttWPuGbkd61si4eiiwpN",
  "key15": "2f5H1xKHrLpRU7YmxduQN9AQcidqVq2STA41sTGCE8jDbwzVdSTAS7aMrt9HiscNJwrv48FYCqFuYJ8y9xrfQQV5",
  "key16": "3KaJbBb8zrXvfzxTk4YwRduQXxYKtMYa8N29MJTFoPcmjEXSgKgy6FXMcmeg7Pj4SUSwNKYS7xmCAgB5tauhy3xf",
  "key17": "2YPeULRCdGyEcBpWqyuCKdPadfAX6TyuR2eaQGAnmCiMFEut9BhgkQ7qaAu4GoK4kqv9JNKpp4ZkhnCmh2dvNFs5",
  "key18": "4Zwr4h6u4GEQhdHhuJX6H65WtZ8SbDckYAA9JUb7LWxwtyqhBVsBPb8WwKqSFQhsaB8D1xT4sMy1Jf3ZmcKagtUk",
  "key19": "FEnrfmsh9JdAcdS8pKcmp7XvQso6imxDAiwFSWVRbkLRg7RLuTt97SRVn7FxwkmGNWfgZAP9V6g8rpN7kmah8Nx",
  "key20": "4nqbTdgmo6Vq6LAdNPsS7DEmPAGdoHg21Gf9nm6CaK3XBQokgneNiWjEVo8GT9uoZpnRz6DcLuVV2dvAMyA3SfAF",
  "key21": "3odfK4VZ3Muc6DfYKqRrxqSxpiGVZyQA6PU6XxNZQdfLN7gXgmBSAvcFT5ZXQZnbU8RVe34fnpNJ2nvpndCSyx4t",
  "key22": "4eoyVp6DXikDgyCaBDnR9Lg6aDrw88J5Yq6gBTbJ4fhguE6n7vQnuwAVgzu77gGBTgWovcqLjQrWVUJrDRm3xC4R",
  "key23": "23YV7eHLRB6BoRZYancV1wte6SepAs3h7cUZqjJeZs397Nf4QjAoLKsiQACqoPXP9Ru39y3R29uT5AHdpUkRqdsn",
  "key24": "2K6b6xMApSoBEYA5GeW9rD99dCVkKUuc2uSYjkdZ7fkkZWf685nGAP361yaEiXKWj3pHWDqT8V7PCNG3hUmLw46v",
  "key25": "5YNUNt3EKEAnPFKpWkYLn6mwX6Cy5PVvryN7S3RWeG5vE9i2S2xVqTZYZamEVf6BrE7uwXFuvK1KdrrsUfL3jwsu",
  "key26": "3NtiNhuFTKRaEysay79ED5cJCGYQja1z8N7S6ncuVnC99V4FAQSEjshRVYtYDHGxYhqbeAiY5bxsc4kZyiznWzz3",
  "key27": "4xCGyCznX4n7pbfkd25mvpoP79zhzqYZ6Cb4nCzXfbRSeVAHK7uFQNDM1sCeDBLbBeYsrdDuEK4HKEBB5PcnzxAk",
  "key28": "3ifB7D1vNeHYPoKvJcsXqEr8cyHs7y3qLk44qnKd6qcxAiRi8dXBad867RHRYazKWiKevifuURHj5a2DjDnpyzvK",
  "key29": "2oZqiXmBV8Wk2t5BbHgDAfsVyzVUKVGi54b93u64heWYBNJqKihFfg3MFUsBSV8g4DkXVtBSBfmLupgDLdjcchYh",
  "key30": "4VpzvWFTKm4s46dQJrDA7E6gxR5qGs9rgvxD8g1ZPx4r2zAx9JY7kLbSV4aRW9czcvada14prczb7Xv6LhDVP7Pn",
  "key31": "QHzTCHXvpm78UCx3iCEA1Jtd9ZXdpmio1e7XmM5xapP3msGNQ7fFhbMStpuW3fdGG7hUkrfhWMvkEUBRmuNDXdX",
  "key32": "dRjNgttEtkr6Ufv2VfTsnYVjthVJSiTSFPq7xg5Ubs2uwDaNhxYkyqhAD7WPBPkJNityDHohbED4DVmRRfRbEEa",
  "key33": "4ViFUqsEoQHbVbiYar1BjNH6uBLkqnxsM2qypkMTsrYDRGuUNhLms8R7dwjPb7oVF4KTMTJqbRHXcjqxnh8Qm74D",
  "key34": "3Fockg2rmXEByJtbRzd4zpMDQpKLTpU2Ghjon4bLxGtj7Nwf1oJhDV7tWAUdw9tAYAXY44Vfqav62YAwiG14cvr8",
  "key35": "5mbZvgpM673sDo2eXkgCNoEKyXp5FtbNNg7eA6jzEGygDkPqXt5hBFM3Xti2c4jHha2Xob85SwRM5AyDZYRQEvo6",
  "key36": "5Cyf4X9sorq16ofg2j2S6UAuU9y975AjZ2hMrkPwz9DaWhT7wbv44Q6rU6ve1fswU1JESPyeKRkzQ7FG3V6DezhC",
  "key37": "2efHAZAJxxJkTyCWja9aUJxDEGnYZfSK6Yd6t8rdu3ewbs4nMYvWbv4yzxBjQjsJizWUoxQtJk98q2pJcPaQjpu1",
  "key38": "3uvyRmdNwtsdWr2hbB4tZkGGH9wnoof6re2Ubho8uYtaXiaHBjQxK2dKRdtg6HDYTucdKo4WgNty1AcfwEKUmzKz"
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
