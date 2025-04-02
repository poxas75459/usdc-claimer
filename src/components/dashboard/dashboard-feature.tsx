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
    "3FyG9vXAzoLaQ15KJuX7rgGbJD4WPCgbeU8EgJzd9aenCMZ4bsMdmVfkGiaPsta2sxMNhzv5atcfxYP7h4iejLp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PXrTVVgw5GjmYSRyEmTsD7LeZdgtN9ZhCeyhTco5PtoWduzYwDSHCgwksWnkTzLJj2CQLERwNkTGkXJ5m4wE7qN",
  "key1": "JretVmZMCAQ9Mr6JJHfvVxJoh1Yb8uFVno4ZKgDouhZmKvnkaSJsow5R2oyPvYhRHDgAdkjavzBhpFjmjyFJB19",
  "key2": "56MxcGZkAu2SsSm1G8Lu2XpXMVznQxw5vGVFvcmK5rNhpz6dAbjEYGMKhGqnp9PZcnsmmv3sj9sSgKFRBgNBkAWT",
  "key3": "24z3sMgP1wAUe5gibw7RHQQ7WcNPF7VYXihCRXQnr8SaBhn9Hq4SH3Saq9sAGg8AML3Q76XhYALCo8p6WGMSxxqq",
  "key4": "3VL9hpg64FEU5ktuUkBBLrWdyZjsegJwk4AUNuvJTyRsX3zphDj5Q1ALhjcPgYVKLz7fmRcHaSn3eh9YQqzhNp6j",
  "key5": "5RpY57diF8A41uL6JeewkPLfGndyXSceLWMw9Jr11UAG5bxgzo9sypM3pCTYUV7Z4U2cici5JE8DDRHjcxRaQnjp",
  "key6": "3rq9PwU6JUCLHezvUX4Qt4CvGna1ChePpCSabnVmSriPxJXPMnTQwrokm5qhvGVW24pbqLxAhzSzaHNVBcPw7e5c",
  "key7": "22H1YyByxraGG1XkgyAS3Jc9n7rkKrTQjTJQTBdsJ46ktsbwxwbZS3XipckGctBC5VTppKdtnbSPher2fdbZ5BuJ",
  "key8": "2H9QajSf2P7CMhiyuMzNZXqG1iwfJmyGA6VDfXrp9DhW21XYyoNH5Tr8Fi5eai4aqXrenJsdvDZ9mYDVFm4DVx3r",
  "key9": "2qmQBL59vq4bpzmHGMX5Eo148K4PmdcPDMJKRuEof14uB9xBybSfCwt7vKxrFGP9FHii4N9GfuXu92jQyrUbU94b",
  "key10": "Gnyd77zKeUH2j8oBjf7LBMbsUvjf7H5xbPkJSMW1fKfP1qEtaGEpyiBoo38e2xD7opfANuZ8M12kPQFY9RMQYrc",
  "key11": "2145bthK7MXRTcBbPEUz8WF95m6UyvpPnWMp1eZgCKPRQe7Cp5wRQ6ePYDMutD2qRHEuV5Yit4VfkbU26o41FoQr",
  "key12": "4VRLyWAZ425VxAcRxtMEAEJSbTp6y5EY2W92Zt3oyp3McQTqi3GGGSYVtF3NkVQEk4j5pbbW8nfwV7JJWhgZ2ebi",
  "key13": "2ai4mDWNxRM84JJ4TU4GMry26jpJDni6ZtNVmQucU3yref455npuKmBz72v1PuNR4PwheJqcySj1q4MgrYM8j9A1",
  "key14": "3FWdvt1Utu5mYbY53qe71u1iNNgEdoEHxJEkeyxEnJNy3rbN2iVKhcdDWRo4r42GPedeJsb7EVDNomCKMznRoyRL",
  "key15": "5fGDjmA1ExirAg3ShqhEPwfWhGHYa7TqPacadEqvXgyKx97jLBE4mcbrhgzRkgSkK61n9Z56VSetq3r8gT2juBVW",
  "key16": "5f3ofVmMrNSX7MCGNqXGqghsjZcKrtrb8Rczz56CgSKN3Z3NVXgdzxk5iikxqDZVEzpXMffYdbyWKoahbojnAQDK",
  "key17": "3rnotzySR8sQ9WD29nuRagoJyGLYgqcBxGRa3dzGkKSQx654Tw1ZDER5xRGN4zDKBNezmgb3k1dqhSFJNcgq4u6n",
  "key18": "61883KzEx1xy96tmfCnu69PAm6naNQkKDUphKcQsH9uRr4o2SwAS9GPPCihxgxLYZ9vJsF5vtNCcj6FhBdRn14uG",
  "key19": "4m3cwF8QqquYLZx86DtodNSUtNixynba52VawfXG1QA4c88z9SDU5RCcV2PAei3L6F4yznQ3hdriYgbsvrR1xP7L",
  "key20": "57SkLxMXNZJ2GQLaeF3mfWTFJM4yDgiixfj4XCFD6GCpCxQj5M1h5REZj2gzoVpSXj62uW4AQh3xEABQwye7u7P7",
  "key21": "4nM15fuDz6Gd3NeZQnTbx2nKKeZGuSzZ58jH5PGUFwdwYrxPqx4TBQbweBc3oQxmksi8eBfaXsoY2Hn4P4EDxxMZ",
  "key22": "3W5pWu5mCYK1VtR13C4zFH8RQmNxbgZVBEyHvhHJLisaQJ2MYGvrgxxMq94fc22HKNpzMhefrFzTxc6YGKZawabe",
  "key23": "33rCqUSM7GWHxFCKQccRAS8MjjvNTxR7RCr9sgxTTXYZFyhxxSHuXaJsfHE483RAbQnP31g9aVxtLjBBc5DCtNwa",
  "key24": "4PNN5rXp1kydSSiQNTn4oaFNRJLK79AD8MFLoht1X589CggPVu6ceipZ6LFzAwzBqh3inYxjJWxyEzc7ykGaxwiH",
  "key25": "32G2uEA2YgTrqPAufJBdsquuWa8WDTn8PVcuyWwjjQmURaBe4E6HwfifjhxuFLNGAi4S4DY8ERBfjhyvu7EnXPvY",
  "key26": "ZNCP63Qeye2gJpRsmTk1NN1ZJASxXAzViKBYSU6tFv7hR61VouWLBmi6VZGxPrH5TZxqXuCyVVT57UYfWNF3a1Q",
  "key27": "2iJ3bk4ivMk9xX6WSvBvZD2hEXnzy7PKF4oaFLNQbEHDprGyXsm4TX3trdkJkPyJw1JZvXpMQqbN6Gfzv41ywa9d",
  "key28": "5bEk7q5GWya1EWxrEPXJc6W3dAQ8fczfdV86oKftn2zpD4bddMSDTaSrsAp9hHRecL32X6cJN6r2VejEW2ZWGkvd",
  "key29": "4jC3AdoYv9UfjrjwHNuGJqrJskUfZwrnU9VHpY5xPiC7d6K7ECMFboQEeiwR2iskGKHQPfCHw7x4CNLEeX1DH77W",
  "key30": "3ZWe6fhoY54Pn3XPuY4TSQJTpaBQkVyRrjgfBwwdJErwopVBHyr5AUeR9vpRLr2MnsAaqF3YHK1dakqN6vHmE4FY",
  "key31": "38mJnQDVNbaKFKASCmGCgm7Wc5oRrSZQWpCEJQPLb5twvmfXDt1tBHNCz9zt718YkEwZDkF1aquauTm8XaHrM982",
  "key32": "2Sr2HjsqpZqjsEPP8VdGsbsVQAgpBbk4vowRUGyyn1akzhv2PTYfsW9sTEz4T3YcnNRQ6Jdz3fwsoEuY9p5sEz5F",
  "key33": "ei4qZuzvRN1J374zoHdsAcZii3BwSJihK1rNjQizWMvtmgZ2b4epYgs6vyhY89XsQ3QmHo4xTRpk5cmUAc6DEHK"
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
