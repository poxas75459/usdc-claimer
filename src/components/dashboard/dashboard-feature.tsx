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
    "5d15SoRokc1TZSN6pTPHjkzQCMmXpabCsEJ5xYELn5uEEQeHdsTwhcoceh3u5Cv2LNbhck5LH7GDYAcjvY2qJFWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DPv37B5wNbiP4BaSKx4CWHvj7ei2KCL9pJzLnwxEjmZbrBTKkSZwQaiiLfdmgBQyc1qRpff29yXQTNeA28qkZDX",
  "key1": "4EUKk4ddTK2UE8EdPjrueZdpXFS98pYBRY3CQT5DPs2ipuLeojTzHsMf7xW96DQyAaxBS1NnhuQX4g97RA9ZxXP3",
  "key2": "3PpqZZ6uetaHTLUrFYZaQswyyqSU1jTpJP2FpHRQB7YFi4reUrjagdd2suziLauvqNQYWZqzs9TxPAyZV8i9gcac",
  "key3": "2CSSgFTU4xRxH4M5h2pBCwBwfdayUmhaJtzUeTtEpMLR54t18oUkELemfSmeAejoAGkrD3S1h7FaJ6K5RcKJpBmp",
  "key4": "2yk2hUBxJiF53ksAdX8Pr8zMuR2yPPzaU7kFXTdfX5X9kqP6adGo2vKpNiusLgPeqjve76kb1rrwsbPHcYKSvCMc",
  "key5": "2TEyWPHEP2QSoS2BpUkbTrSCWPMqxbkiQAJwZG8VDVyoYX32PhbRQec1AEKCok6GLt3oL78pjkNj7rvZq33kvi7H",
  "key6": "3YbCRqNxaJukoA1Ynno6M2BV4wHaMmgx2Ygo8tyoryRstQg8eQ9b25sNBf1RzqgQikUaC1ewyZPp2XSchx9XzQZy",
  "key7": "3QcHqu6Kz8An3nZBzL57hsB15kX4sfsggGGmJ1STUXZtwMvNj1LTRcCcZUZPWN4YsdVg2YogTCCRhjkPPHMgQDJ4",
  "key8": "2VMLGmZCqYrXUtcxGACBE6QoHfE2gqBQPDgQY3f61mMUAx2mghym5naLXr8THWszReVAKKnsDb2trFWdMU67Ta9M",
  "key9": "379V8afZtwZQ7Eh6yUtnRv5wQSwft9s2dvZrub7hRwuhYVKQTHNMNrpuP18Qn22P7Zae1n864REaZ1mzxx4iZZdG",
  "key10": "4nxjVqfYdRQpwdj4AMLmtmb5cMtgq9U2uwBDLkQNM2Cg1VHsyV928Qnzed4JWvZkUph7nKYaRZTQrBFzCaTGEpYE",
  "key11": "KHj3A9qh7ghukt8Q7t53UeCuSynHeKTfJzs2RoiDmMbtVZYNWHmxfpATbSMjRHdyH1qseQmp5zNT5rFRQk11v6u",
  "key12": "3L7Ku1ywRNRL8KtpTg4DMibXU2tnjZDuVQ4DdJ2Fbbefo9ZZtVeJJ3KjRsVLTxaXvYnuvZVH2rTYBLRgHDLNctEz",
  "key13": "2i4hx4cYzQ16fwP7W1UqrP8D5zqvBwSVzusJhdE6QrR9numWvo82RnNvaD8X2yPdmoucapA5zdg6xmbHfTyvhQiM",
  "key14": "3jc3PjDJHnifFD5hA3TQ1cTopHD1QSy1Gm19R1u3zZVLYhbdiFwdpKRw5aCLHba1zRxAcxJGrn1jbXhN8MMNGaug",
  "key15": "osNfY1eZ2fUyPSkpKaZ3nsdMVZ8r2Lbe278PWXW5yk1zRqki92U2QqfBtnSz8EjunVvDgYpTDe7q43ShxV1ZzG4",
  "key16": "52ziTvjJmuYDV5pCvymijdYrfEKvFuuQYq9p4DeChAMXdoHTsi9wzZTTYk2aLeB1Cn9afnKtNXExNCnDCbBiWGAW",
  "key17": "6pyrt3qBazb37xJrfYQjcDKbxKNLALvCXMbvToMzkA8xWGdKWfcZtzK27mgTS7hN3u93UFLqjAbYHFsdmmhZXJr",
  "key18": "4nUXoisWNu59LMUpUmaEBPFYhSzRewqctcdevimQqefj2FRhAaf5Ztpip8SWiowXhbHJygjWQuaLmFZFX5AYHRmJ",
  "key19": "4PypYwZABWSzT97vghx6cEw9162QPUQztGebt4S81K41onejJV4ZtMsrcbEtipUYPtw5y7atZapGq9gDjoJEKYYu",
  "key20": "5gcvRGsAHJqrNZar75KSsqsC71gR8sFDJtc9Xe1ZbdiQx8Nrzr3aFfGrjpcTTmjmeNMGkXa3tJSE2w3idooGvzfy",
  "key21": "4EmLBqYevMQDRLW5NehkGuajcm4eXwkTtPPdR8oq3bdEB7TqJ16mM8p6adSQQoHq71E6u1BYRdGKjYBo99mu8pQh",
  "key22": "3PXL3xnueb3BQKLutq6r5L7rVmoFfFDTm8s4ZsrBjDJyhjPJBUkghZP4VV18ipMKQUsafiFJMrjokMPYHT97oA2R",
  "key23": "2RN6R88yA6jGSLcLEoyyiYxLHNRWSMZGcPqL1u6fj5mEcFfkmx9gMxQMst4tAcdey21uVrAeLir984zVNasjEq5w",
  "key24": "4v5uLT5LWjc3qGQfuQZaBUG56JUGvsGkBRQw112f78F3B1kuDzYf2trd4vL3HF1SEd95VHjpNRJFJdG66udYrfTQ",
  "key25": "uYsXartzcRop9XKauriB7dnvejzeACv3ophhAfst8ADueJpPnsmoXpRdF4yhtQW2YXmTaR3uUd5qTKRctFyay2F",
  "key26": "KXLhEzT6M784Sidin9HA3Y59GgNNp3SaXNtQHYQPnQqmHDuThZoddssg6CAfUz4xCU15Qfn4KZbKdQorvPzjxfL",
  "key27": "CiXZSpPCi2Wu6bKZk7vn7JuMCLPZ29bPET1QiaWrA1KZGgWLyRT8EG4fa4pamUt6oB4W4mQowPhAjybnXosmnP4",
  "key28": "kRodbwYoxHLndHnpes3KWAcRK7eQTaDbuq9CZGoctM6V1qEKHDJ5ssXpX6X1o3dRzJSg2Z5c357ZN7sR1jGcHCK"
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
