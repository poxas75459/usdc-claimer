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
    "2yS74TG6vG1BSBwGTudr3Y92oQnoJLUFdv2WATuntsxauMYN59ar1Zanr55hRNTrRTu8NqK6sFSnLipkv66VdjPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Li6b34wrJtidTw2hwB2f6Qwk9BavL6VCSL56b1G45YZZCzp44fayXeNh1gbhSwi95KrhkrUHRLVQTiNpbareJU",
  "key1": "5QC8xTGzjDZiZB3XEE2ZSMiKk8ZCixmigBFXTQNaKFui1Wp6bHAJMhJVFFAxvSJbdWNCuDcXFhNNX3BGkNVu148t",
  "key2": "kCxYqgkqWeY5Uo5yyXbkLnDbJbtX1FXmy13HkqAQaDVhjbMaK8fhXmMQ1AMz6no9haqiVdryJxN8atnbuDJQyCt",
  "key3": "NBG4NUJdFt8wtX9ANyanBgmmS8wSiU8CXi3h6qYLqTxqCZ7sg5jjEMXwiHEbE9SQ1JcbVzk9t1NsTrEzhysM4Kk",
  "key4": "5tg8U3nHg3LWvXSmqH8bSFhoVigynS66pAtLxAsNLfeed1zqQuTQ65yWaX2Lp2CLbR3V9QpBoK8uxX9axAmBob9G",
  "key5": "kCGYgsaCEMKJjNVCuc3RBbByzDVM8V8Loju12eGCZUsiYovg4rEvVczmGMEedQpEDHWcFb9qGNGJbTkx3sVnAib",
  "key6": "2xYNCGj7V5DC2mYY8NuMAaxsBh5hmPrep9YByfnRXfy9nQqnyuAyd7ybUSx5g816q1Hu9qnAoV465XNyR3kLw76o",
  "key7": "654D6gLFvoNRuK2grNai3zUN6rmisqVGrhSnPetPUEeuknLSG2WjtanKU5sBMuyqeagGR3gwUuhZt5w16ZrSNegn",
  "key8": "hMkpZ64jcFzgPpq3hKdKhDxeasJuH8b1KD3WRNpQCsmd8pEjBSweaimH7AdbdikEn8Ck43wDgpTWzQFohsLFGv5",
  "key9": "2xL13ecBLW3j2HAKE52GRuf6dybpXQFdHsacmK2uVrN55ZvnkQX1o9SS1ZxwxxA43hScRKWfFqYweCxUjjT55ytr",
  "key10": "2KwZsN1YeUEyWpTi7HBjm4yFWwhcyXF3G6GK4sLqXfpby7RtQtfAZPpb3Q2aQdWQkqQniQMqxhpcefDJgwVAg8G7",
  "key11": "yhQefv1KqA9nzJPT6fzRrDeFzuZJ2LL194pSwsXgf56r5QqJfTVkoSyxskgVnCQwJTyEFL1zCB7p249t4A5zNZ6",
  "key12": "4chio6jQdUSjt3xi3MxvVeibcuyNDoJnUAzN7u1ieaHv27SyebN5Xq6czMRiowJ3WRkhbSefCPWKVytd29WeYduU",
  "key13": "cTtCrDyUWvAWQuazViAbqb8X3gs5Jfpad3S6TF5y1H4G2oMQiEsX4sJw6giNf6x8KkN3sAniKUVvE78EEa18haL",
  "key14": "4ZsJkcf8PpH7NHqfWZCd4hMW943Eb7Ftv1fXXUNRJmFfi1WyJB1RqAQm5U5JPzZ8Ym7UoZfJGJkrUnvSv2bt8AQv",
  "key15": "iiQJdeKL787Z8oM2MzGvrg4ttdu6J3tiiAho9XKYUfqjKk1zZc3Jm7QRECySLJLoZ4f6VfDKwAXYDXhUNivWW5c",
  "key16": "T7AU4qVc9FEDqkPLrJwtBdR34sc6DoiibCxx7vb4JYckZwRohgS41xHQ5qKY6VMKMvTvdXffHjZdPyBwB9MsdWM",
  "key17": "4V9McpA6nrzecpa8Ncdm1btxTT83QDpGFBiSYmmiAkdrZ9vQt5jUJfkiYPSUdzHAgvRc7474dV37RodR2TKmdeHb",
  "key18": "4JMQpsrAWfG6UXzDPMeZTiNx6LLtQwjCcynsGwt8AqPVMBYTfSup2RZW3jYegWr8zw1dneZf2X1tZUwBvqRdZNk3",
  "key19": "2GXE7Kpgm86AzHmfrdDs7aTiDFeAXoht8RTojs4ym4oqd3xT1ViMjs3dNn94LsTWySbKFBp5UFCQMJUf3hoRNVGz",
  "key20": "5cE1ygHPDd912wJ9JgirNxquDyjc1Mft1Y9cs8hEJD9maECxMRTXUC8vbLGp2YtC6czE8U8osqUapTnAB3MJvhFC",
  "key21": "3yzBqUeLbXpT5p9QA1wvS7gQkbAz27dRksK5ySQTBMwRxgXmro2vqQtD9FgGhh3wPj9DsZofjJqF3u5tYZGPiM8y",
  "key22": "5KfxH9r2e8ftQ4kk4Fd1XGGLodRZm73AdxTDUv6uhdUgqAeGZpvjj9QfQcX72M9yXNdYF2hjRnR58tSLSRDngeiH",
  "key23": "ZmJT1ghU9BbGmK5xWByyUiqTL1SJYLD3v3NjvW2rKXpNA4McqbAQ3VixwtyKNER4u6Wp4k4kjxUygyWAfARUcBr",
  "key24": "5FnJ1BeuP6tFfafoL8q2xPaqgwkvUJKUh4zoFdkcZWu2MX2dDkzbsuH1cUpTCKgN3KksTL2uG3gfBfSJP4xLpiGP",
  "key25": "2BuEZ5ymFePti2ajgCxKB7sbEHTjTsBbD8axQCNZy78Wti8otHeGddRui6ssnpVncnB5YZ4DpeZqJsAzNBbCEDn3",
  "key26": "5YY4GzwWue7NrF1EcDTEEHCwcEYahjSMrw4KTWExKbsH5VQYV8VixxgeM7eSymEMYEUsrBQC5PzncC7xftLwg97s",
  "key27": "xtPGbnVC9UW5LQzQLz2dB2g83DSqNfhhhptDjLSuxzxhXNtREnGdRiP8e8cKLA2J7oqT25HjoH8NFdpoBfaNfcs",
  "key28": "5j4Jp8kL4e1AgBRCyN5DweM72dBN5K66wjDoi6Nsc8s8TkQ2idaE8nCd5ncfBEMjAJ6Yk2qQa6FUHJrG2wsMEmFp",
  "key29": "3kJTLM1nheKJFifZCFWFAGJiqxvtaFxsF1dtizNrsDyvqZqUUSg8nioUHQ83yK18CNfKoXPk7LwZCiKGMXVkJ9zD",
  "key30": "2MEoBPPhPU6kqjYC7PM41RTo9VTW5oyKG5sYAA1McSzKaCq9fwSHhn9GhRHcvTZezh3nwPQkjtjyVKLyHm8KsVfH",
  "key31": "2dDbPzye6mPFgEL1v8NTJNVJpzaNEcUaGfKnYLKDbP894m57dyoKJkHZkrEVv5EbTJGJyzPeitqSv436z4o3dsgA",
  "key32": "xaWwSr3xX84xG1498ngzjju7soXM1VxU2R7Dc1TDAkWixfhWXbAN1TdpVjFKovfxdKC1ybUt9J5uXqJHzkb8jwf",
  "key33": "5SE2EPfQ9pMoEkAzL3gZ7NGipsy4Up15pFt7NsHZgyrVfRB7zMUWnkLyGTM4KyGKMdDLRGT878Xgcq8NhRL1PhNT",
  "key34": "27s2hEHikGPgPe1R8TikosdtkHom8i8WUaWvX5tc1FvtGXmKkBXmMuusSAMiX8YKHJChmTu7gTYjLwS2gLt6adq7"
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
