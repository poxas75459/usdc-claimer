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
    "3VEr7kR3uvHpmMPESSMHwC6FsQgg72QkVioFhAEqDAuWkbu2VCG6zDsYu53Cg5NWX3LpcVHTxFrr55HrV9EpeUwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zt1UaJic7wFvQ2m7ZmryXJbYSrnn8kgtb6KLtVHr3WodWa1QyC1wnNPzfMmq7bomBFPomZNoB2EoLKpZmCXnNvu",
  "key1": "38i2Xb9bWiswC9bzM8gVhrZBqf2VdH6QSeKJVPiacukZ7FitZ7FcvYmX6VJWr77H6bzsCyKV9KSithKQY8CnDMME",
  "key2": "3Wkfmqeim4GvDJ1wZjcq8mvkoCPy8x4e6GW4G9BCAtLLdWfcMtdDY9hHHMw1fW34WbZq4Uxtaqrz5sStQrF7UcBi",
  "key3": "2kTzMT5md1GLNNHiaKGWR71xHxvPWztoPZWxCzQQZGMo7NuJh4a5ujdTw4XWpCvJDAxR2UDN5KimGYdbyfXFCtAr",
  "key4": "5FJVH7KwvdW4UoT1poNapu9hrtycb3N6ZnQqxT7sGVqR5dfn5JDAWhSTNyEDHVRiRXrYJNV87FyiLaa1fc2gj7yT",
  "key5": "59ytXsHGGTKjz6wiLGe1T86uu6WcWRtqriaTcjy1k9mB3DQQttkaupUTpwU31L6ZG8T6uJ9v22prrqV575VfbCfc",
  "key6": "4ktyYtSVMVDzCjXyBKoXygUnAjjXtMbuL1oGEP2oh8VTGyUJHf7dMB8vUzYgPKiCQc6LMmXr9jBWr5YbBYeDqQca",
  "key7": "85AZ2Lv6VcPPiC5ZES2RTfJE8NKgiuLyDeTUAjSY84RWLf6Qmxr8oumzW9ZNRTxe6xGfvP4UGcZ8gpu7qeb75Qw",
  "key8": "5srM1iMVHKZfLwotmfhDZnUtiCA8C3yEWUD7aHCYAcXWebFuBu1gXLr4KiAhJRYs5u6ehY9NyZ1xhzk3NWndAjcB",
  "key9": "2izXz9fSq5dtire9LdT8qHARetPfEwFwUysiqzzCM3KXobYA4ceT1TbEQ4HoXWGBPs4LPX7SBZWdkuQc5rZd9f13",
  "key10": "5NUsnA3HMA4CsFoQC7afLqt1zNQRC6L4vNNmTciVgkDx2VdaLUZzGjad9wcCdLevo3hFQVuy1ZuJRLiwvnDstbCV",
  "key11": "3MLmhySuyidgGwcHgkaT1bPoCfwx6AcxRmqQNuxJ3wWnuvQREStqqJy9szhexiUTTn8hbwV3CT6nQ4oPevKy6Mzn",
  "key12": "g9Fr8iyfbASAxssGRjuCSpWmu2vPZNaKFjW6hWDyCUrfPHsKp4sxSf7Zf8NvQLQBqYJZxfwDKTxzmLPUZTgZPng",
  "key13": "5JEfW4mR47j2qcrVfoAb2bxDrkD7syQVEY1XZAwPgwVgeLzrX42DdrwCZEc9aHhfh39fuZyiJDMtiRQFNendDkdL",
  "key14": "2AbTLrrLoJcGJMkZuYjKANCAGieq9RL7zky6NNJdCUztU8MnLCqM237XbRzxfRb8F8dVwXsqpQJyKyLfTYWFF1p",
  "key15": "4ceowUeJ8DfAzusgskFedPYQf9G6VRK352XMD8kpMMrPQULhpfG3tC2YL3kfY1Nq5RngQfqV12hC1riVDxRPXa6K",
  "key16": "3TDrVx7AH5eKPC8wnqo4ggoJSReXKEoP7TdwVFJVnbv8UERc9WYASSXyKQ8apqpym7viHBRtgwsVaNun9Nezf3Th",
  "key17": "5LSwakJJj7a12H6gnzje1h5rE35Z89rSWGezjpRdwLSasMGfkaR7dJD4UeSPnr1HDkkR9cGQVsPFQ51RR6HH5uYZ",
  "key18": "3RrYQdr9RfZaWtDtnjYvUq9wKDrS7uyfmGAutNxhbjKNGfqYvs2djtjRZf9AorqNuJ3y2pXCKhSZ87SGW5LuK6V",
  "key19": "3uXBWYCrxQBG2aVFkBhMt38LVntKr2RDcXKPGqvi5c9rjuN217EzRvp5v1DShQoXkusjjguSpN6xBx9i7knhqRu5",
  "key20": "28XdvaCyMRHT97yCGR6Er2eMuUapGhqe44x7WgsFienmiPqgErb86JbBdRv2iWey6BCmKPT3FWNDthLyNf493LeV",
  "key21": "5GqoLkvi2yAzZkfCd8AYByRhEJv8xiTbiXbEv56e576YnsTHdFzquKo5BY86V4XSXh9jtn6h12cNA8z8gHmmuyS8",
  "key22": "46KwnwyUHLaFMSdzUYJ8BUcPfiY6Snsz5A2ck4kyopTBGYmmKPpLDWbpDPmdZzxUALBN9CqJFc7HjJSWsQwS7g2T",
  "key23": "J7qbf3M3aJaWiJCscSiMsCZtUWBM5BepQZFi5Vs5g5dw7uMt1PAX9sPwYJvwEGCApuG85CAwsmN8DRSZ3kyGfFU",
  "key24": "2rADpMLYuJgX3MsXS4hXQAx78ht2DANKjR5D68AdGRMJzXQRHZp48MrLuQB3od2HTG99tGdFfSMYP1VZHpP6di3n",
  "key25": "5nZvZZnvtXLVcbCtCZZY9ALP2HGzFNxFrJrrvCtPkZGzEPg4sVVJBAnLLTgEBwmvLTcj8cEpngxHasZUpgruCdef",
  "key26": "58XLG9htqJgJyqhUChoudok5uoJKrNYWrxNg831HbXtn8eN819nkw5wGu99rFW6iBS9uENkLZTME7K5kWxemQP4E",
  "key27": "5w44fireceycpfzccn1TxN61um4yvukc5nhpBmUrrFFohQhAZpfu2Scc1QsMXJBXRUf4ASzmToG4iVj1iGGQunXn",
  "key28": "5e9FGPQUHVNVZw9uYKfHfNExo9G1eRbqmeWNPUqzeP1QSjdSc8R8kvVVGoNUugrfyn4GHuQJh14uasSioS8s14gZ",
  "key29": "2UHu1LZ6CMgZrurfsZgfn5yf7JSJciGcZTusvrXKhBNLrHUu7nBKQenXoYnDGhb5VK7QsyXoWzU4XYddEYg7QYzN",
  "key30": "46geRakKYrrwqHqyTK4b8TAfJvpGYgQaYanHKwKwwGwNycPP3QYccSg78t4F33cardANRzVwUfCD75iCvu2EdL77",
  "key31": "3DcM8Nm1bCk2WYHqd6ucEReuth4HkGi5HtwdWB1tDmJuttJHCqRmGVBdN5gGBSFTnKsJWuaRNLX8bWqzFyvKY7DE",
  "key32": "5iWZPuq7FHHKnGifCaE5iue5BoEeMz2xVTF2ZQSigKtSAxc2cjvKnV4xCvUpDu1DFJ3PCKf3uFvZULGqKfKpRToc",
  "key33": "53HUb6GQmmfz7o5Gruu5wRsged7YhVnRRGpexcuB8oZAVePKEJebHTmBxExFM9mZQiP5GQQH48v1ECyV3X7ZbEW8",
  "key34": "4fkDNwAXWhD5oz6MGWdzzgGYFk8mHk9nJxSUHV3jAjgkoDXyCXUe4EsDshjpDPzaNgyusTqxjANLtMqW1vSa6ChH",
  "key35": "3GTjMRzMPcudcPU3RVT4kNd8RF4oNCP8zF5iALsHfMTidcZG4EWzQhMoW7ef6tFaipmKDFQKHHBF2AHe6xjxo3pP",
  "key36": "3FbweHHD5Ldd3Q2Suu7ozGPc2Yutgj8ZquQqyTpVZh6ZJGtHBp2EUdm9yCNzgZ2SX5LpRM91wthLEjyfNA2o3o4E",
  "key37": "4fQ8v9QpVqZNWHG2P5a8bTDWYo3Xirc727fLyjnvr4FfvDvh6JLjpxmBQ6938c6Vnr4UCrtpPBwUSYdPcAeeTbAQ"
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
