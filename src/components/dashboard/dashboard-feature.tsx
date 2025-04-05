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
    "5gUU3PSG9fxuqJ2GfZERRtVGozxNrR6gPTKdFBARDnBerjKuJPdJADwrvN2McRDNrYxUDkP38132o1K3QKrB3eW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Put4mDrpQHfNfgo42YN818p54kd5rA8J7uLdba6vU5H3qcnjnVJJ4fuje1T8P2VNwZNnJvcpAozdEMo5TTijpFz",
  "key1": "AvPHnxk3QW5JNvBFCsTGpNiL5VEP1jcBMPmNCS8mnA8BMTSHbbFwZkaotBpHrZaB6pQvHU4EfryiModeZeocDEE",
  "key2": "4ivc9aC9dmHnxAw4DfhqNFK5UXE2vwLTTcsUKfLyJ5BcE57qPf9H7oYN2vBoSzeKAtFBwFzFknFJxFYD6HbWEdVG",
  "key3": "3LP8NHpKr39rvrriq1mFyzb98NAU5DqFSd3qTDN5x9QXXGB9fVpCaLPuCZyaWt95b1bimwrkbczMPgeQENvoau8L",
  "key4": "4Uv6kWLX4crZAUQPZckjRzH5Q4KhKns9BSGJURNfR5rmwZLnLvWhzDHQda2QvbuHeurYFAATgXFhqY8z2bpQ7LJC",
  "key5": "4uF4ZArNoDiVV9PyDNdrdQeo23RurVyFvWaHyMCYrK8zSPfeEAHmnXf28BU3ZToTQ2Ls7HHrnUnBRpkpCXJ1UYgZ",
  "key6": "3DKU7uxvhrKAzoGQ3TwVKU6v4qDvTSKyNZGqwkGqWnDm46uSxxrPdxnNEQjk7y8nof8S4NvbZAu61RVMDd5CrS7m",
  "key7": "4YMZZSicrkem9EJjAochkypR2Yp3XExnSYczM435phKJHhMFhJSmKCjAQYViVxRL7pEyhkcHna23bFxj2XbB8Pyn",
  "key8": "yj4wL38pUHXWD9366jazEZkNn7SVzPuDbMPzCAuwtrjXvzvBx2hW6SAkCWoPBhKqgi9H3xN7cBiUEyKgWWK4EKN",
  "key9": "5PEXZocf7MtZFG8n93KtoNqbPeEW78HMGJ7Uamq3u6EPDrTjtv3YovVuSqWPFXQgipMiZkF9w6PjN2sb4igp7zsz",
  "key10": "5rX885CVTSyNBTyb4zeQL2rQh4A8d6UNUjzujVbx8wxnCucTzTA1MGscz4EV23NiSHHan6hJgU2PbLzNKWwAgJhy",
  "key11": "5M3zqWjNruM1zpwHCtddMjiQKYnFq3UPWJYAHgwmpXPszE1X8Lfnm971f5iPgDVMMpDjPkg59qAPQ2q4WDKm8eW4",
  "key12": "5Kc8JAPCB4Ljc83WHNkicWFdSUZnnDqRKGjkdmhv8yQdaAjCBse9MHeqhTrLGBDLRzQgMunBp8P11GJftP46oBrW",
  "key13": "6tkUMrcKhAkmJnAiyQzFozM3isrMcCUcyz68gw9fkoir3xzUuXpgJTLSGkQNF63d59N1jjocVUCv7QzG4y3QTfg",
  "key14": "3mcCPfeQx1NfG1DoNJse4J3TiMYk8YWLxYebzgJWWSQLQoDVdixe1Nm9WstBcRXaMCtsCAWqmJh87steoWUbXdP4",
  "key15": "2fjRLK72RM9Nv7kwNsfYhjxqFcaeBdH9UZchwqWZhzMFdvahNZdoKjY57o7ijXiGtB25MY8VBkckfw2KutedvnbM",
  "key16": "3bLTLfFmhjGofzpQRZwsDhDACX2mbMj3aSVJsBQqKqPJQesqc17DuJecQLt3QD6BW9nxmkD4Q7nJ2x2eAectTfy4",
  "key17": "6m1GhEFTmTK3EcfZjcfuJwEtGKxdW3m6qj9zhsAVAUtEZvAC7iGsrKdgsmZ4Gxp3quNssvGsKSjGFNGd1APbmSb",
  "key18": "3GkbepCYn7794eLe7giyR911CGHJs6SB4Ga8Nf3L6jHfwQWrokfTquzgBxpf46gXBjqhaJsbrVCvQXcEaoSHFH9j",
  "key19": "2Z8wKTkgSHsJGXwAvFXL2sfUxDyscHDRQNfemazXQjaLiTXPfkakeAvusoCM4QHi83GwAeHCtDA8UGeWQEKZJgq4",
  "key20": "3g7hbxNB2t3qESVikFMsr86PJyeMpjarWaoRHK5Z7UkqTapQFaJbz4opnbmvosgwu3WG5GvzVbJUic1qZAB4bPbv",
  "key21": "3HYMyStimSztw5hxup1tpucRJivEWLSCSx6HQ7Bs59BRoteg9Gk9QAg9BoT2RkodSs9K1gAMsHY15Tw4JrjNR4ga",
  "key22": "4Jdyxza1u6nKpWJSFZcCMRz1VnbaWudJghnAN7kQVCFTYfGpqem27cfqfs8zXbB6Cr91hRQsx1DYZvqmB2ybhThp",
  "key23": "21zYcBRoqP4gL9QGuwimhC9VH7fsEBSt5wKxnBfxcGzpfc4WBtfaDW5p5vBTUSj7Y3eJgdzwY5ZcsvGpXFXBSrKa",
  "key24": "2c94FKQWm8Q1byY9cgXJ6k5sqYdRbmsVjkbqFbdAE2mJ99zZLNxao1XR5NUsmHkvmozwxQrxMzxdUE5ytkY79iSD",
  "key25": "3suF17s2H2LciVpd7PLXzxck4dWCrAvpNSTRSJ8e5cgvsFH5RHUdFMN7GQWG3gjX6sCyN5J2jNgud5zMkKUy8ia7",
  "key26": "GpwZd4mx3Wwkg8VjutwWSw2azM5q5wm32nf72xi7qatDGCVjTMhLDkYsYw7vZNnMW8TaMaUYZtJpB7n6fX7q3K6",
  "key27": "3daX1oSKpn6BDEMAfrT1CgDtFjRueMQQSEmFtLx63Wnr1FG1gJS6opk6VdamhCJWi3bL2LNJUgJKFDNUEx3YQJ2K",
  "key28": "9z9hSpr11ytzCnmxvVnERKLmzBAvWXQYhM1iWSXFQaAVKthcfhXG9WyVUa1meKvXzWNDT7PKbm85nQkUZu1cN6a",
  "key29": "4ihWgqEauDoSBY5RSNxb6eU4xUb51CqiWWLsDMTVxcwHuhWKkS1N9dgLwf9hdmpwNyXgM39cxbCTvTKatqayrAEJ",
  "key30": "5fp7TU1kjB7XFfySdCWTEU66nBv8BegcpFMwvz4i6XUEsa9QZJi2FhbX76cyWskdU6taJNpNp5eWFTfDJwaAf4GW",
  "key31": "2x1TGmXtvnu2tdwGg3FSAbRLnR5i7arnpHgbFhgCaZKPEZyYXpdH5zLLB8SdnwsZdrHYhMhezV3gm1JLFi8D4Lif",
  "key32": "2acRXXFMrBJqkqVXLJByLThmzW1pPRQmUPzYSNTmLTDgBni49U7Fvqrxt6kRq5tqzXecY73MZftZaeNa5LRAxL3S",
  "key33": "2JJye3Q8fsoCpkgWihcRrzz9rYgDhb1MD1111C8xjBHDKLtfHZ84cYFFPwrgDeSHgVs4QCa9DmTxVTnjQHfbjoEN",
  "key34": "3rdAhsgMAnnC9GKzZzJuortjG8CjQt4MrD7ZpmL5JHJBCQytVjtwC6SCn3u3VZjVSUYkCzMYFaEJc894fDvFvN9z",
  "key35": "5WEDkNdsVtoRpChzjyxBeGG1rpzKQJNGxoSsySkR48GpMBw7SX3yKDobc4pTPq1bVvWqBDm3WDsjZtDok8Edpd7m",
  "key36": "4xeDtXecDDSPef5xmufEPdHoQtPNbmcV3xAvGXZi7riWXANsLsWbLzuRRCxtjfcBHV31YgyAW5CaP341PqAPP185",
  "key37": "3XDZVeLqvqwADSGxAyEsn5Cd1rsVmv2LKXbHUyaaDoTdxNEGUx3WGCqAEyBdSoF7Vc4U2SVkeh82dY6vgmLnqXf1",
  "key38": "41UEMTFvgLo3DPX7s1MitSptK5YPt1CwBoxZamuwJ3utdSyu8xjzARfrpFrzWq3crjyV2TbQCbRAp26PGBGcQT3J",
  "key39": "2eXjFZ2e6k5joV9NPT18kwexny25PU5HaoWsdAMzibnqSZcJfqvAn9evX2qDTpsfRGdpD9SC94mcadWJXr8yhT9P",
  "key40": "3ryxjmRGYWw9XZ6PvpN3CdXy5Tg5XJzCbbBQxBLA2fAwQNZrNQhny35C33KDVvj947anXCiuECG1LWqcfCvQM1nA"
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
