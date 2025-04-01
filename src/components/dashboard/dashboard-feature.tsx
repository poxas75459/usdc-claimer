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
    "UJQs5wvpjUdARszxAAEDAXArc3A47uAgTsskG56FNXjoYMTZJaeUasJdaxL6qzS56n4ctSwQN6LVncEhEHkJ4sK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AdKmXJy555kHeKK2Q2PfNxyBFpsZWRgZXtA4Dxr9RMGTr9cHz2h48uCraPk2rcePCM7ox3smnzAPFVFSnRNvNSi",
  "key1": "9uCC8HuXNY2tK2kAinHF7TpSRTU7SKpMjkjzFFJppNLTavo3XGzVBPymSWq96ZzB2DtVMPDhjDaUwVhhHBZivvi",
  "key2": "47XCxBGsTYGvXmE1SyXqfhUJmqQKpYDAbwAeHbpUzZaR1jhbBE9R6SmFsshXH8nr5DWa6VWUucpYcGNQnuFTrCLb",
  "key3": "3CKeeYPg435Zpbx8du3jtGuKZvHfu8XJanRdfsQAPg383XWkjxCYQW4zTZPs3YvLrPtdAYWfq1iiw7Fmo5yZsgC3",
  "key4": "3QaVeVuVo2drg2kMCL4Dhhgug5TrpFSEAwAeemFLEe5Esgy1iWYdtyWyk2kdXUJaAdJS8GTQ3TnpKwGPF5h6YmPm",
  "key5": "3Ezi8eFEDiWDxMraNsCPnPeKG9uoqtYWZZNBUF8EADBVGCvTr8F3GmAFToKArsZVPypv72VfeTbEZxSgULxBz6Ye",
  "key6": "dx1veoQcENJH2YHQ44mR3nWzf8NZ6AN5bj7wWdASKWwDuTsL5uRazRvdKNPD5dnc9oxtoyfr7CsmbemKvaiu1M8",
  "key7": "NS4BYsErSaqD2d81nnubDL8fs8kZhkvXv2nn9doHVNnrxjJ3WgbWo3Tcz7w1MRdTpep73onGXScipS5JQD1HyyD",
  "key8": "4gZA6BPPB8QCTV8CuWmhJAzjVScHpVufKXxLVF9Pr8eSe9QRpaBTyc3nnaQE21pAm7MiSXBUktF4quVwKtPyU22h",
  "key9": "5emZQyLm8admNcSzHRbDzUfhuMq5arq1DzcXctnG9uwreHnEd7iifqwDMr6eAKPXC6XKrwohd4878UPEmsy63tGj",
  "key10": "5SaLqPMBmydGaRWBuT3QNcuj1VhHz6D7AJEziVVTw1EQVv9ernqtahb4CA65LeKPzSmkbt23ee7tdRhC7j8oFFct",
  "key11": "5qk78nDAWNJkwNn2fKFh9CM4EwV7a19yi7QoBNVGahpE95EY4vEjQLVS6yKRn2hMavDW4GTpDFNLZXA1BiP4sqMa",
  "key12": "2XevnbPeVp1qxu3BAiEZeu7xjRr6gjqcvGZaUgdX2cSJXsT1oM7KK2jqFn1NmUHJLr6bUEsMBshESYPYbXL7Q7vT",
  "key13": "5o9mNeioCj8dZpW13Z5o1ntbhVCj6jU8mZFshJA691YN7JPAyFET5wNTE2TMxBQfxXkymCV42j8uscGZFRek2wNd",
  "key14": "4p8qXMgj2sfYLXgsHm6bRj4xXvYRrMuStQRAq9vQUSsHwmP6EbPd33RJhpS87fHuHbwSr8irehhr8D6va5b2bV1h",
  "key15": "rw9Y6BRbYrBKN2DmKd5oDbdwLRa36rQ6W6UFVkeQmmi9qV5AcSvwLnR3DYpCFfmoSQiyK2yx1JK8DqWqprjZHkT",
  "key16": "MCoj5f8AUQ7BwpvDCz3G53YtwfGsQyLaWSu7cJ2h3a6Dtwh3CDGFBQuPuGnAFWt9Ek7A7TF9GgYKYeMQJx1awTi",
  "key17": "3ADFw1eBfibeUr7xyHbgFAqJGVwUh5TsBz1bim6xSDt21zYkS8pfk3sG6tSxwHQhpEhtzgbhnSUyNREsp7D3hT99",
  "key18": "4gV7DP9UTNZuiyi2qSaL8dbaqVn5hLqwdTmhbdG8hUkzt9hcUdAfY9EBkYEUzC6yywKNG2YUnjtS78rDoWg77VTz",
  "key19": "28YNtcsyA4QaKEr4x4vrs8T2agxeiGkRZ1rCphdywq8WKHY4fHNExbdoyXttNJXDYQEcSczD3yHk6BSwr9vYjGpK",
  "key20": "3xRnxvRMGhWA6NLe48seWgmbjjWqn4fbyVJJYqPAzUCSWXssVjM11R7VjYn27FomVSHfnf9YYRU3RP8njL4KgwZS",
  "key21": "2p8fZYWkFALmihPkMazSGJnojmzBusAKwsBhj25YCHZmikhj5TLFhXpczNeWHszJ2GEZRxDzcZW691PfFiqdtQc3",
  "key22": "5PPWT18GnB3WMoXEC2YARC6vM4FopeZ9fqmJn4VrNLxBEJVfmUnuUjAzix1cmL5q6jGW2Fc22ZWvbRtrsNfZ1qui",
  "key23": "4ZPKyfJkfL9gFi6EMLeDeXTth9Jdx6Pdcfryx8yGLUtqnyutqSjKdr8svYBdXfmS6xFj3PZM388ecdoQiLLRDpoC",
  "key24": "5gddkFYAratfGoqEMNUKWVtvxSKBAT4umMjWJeXSTr5V7kBhJMyzrRBau1FQx26N4ttgd5EU3MNpfoAiaKmGtYMm",
  "key25": "VFxREmDCnT4aUcm8AjiR1z4bVhtDcpL78uJo5SR946abaH7v1nbCF9wiCDiWcSTodMhc9ERTLsE4wVWBjyBgGEF",
  "key26": "2mTHQtH1dVRSDv8mojTHfn1ZBBBt6zfyuLQ6n9JJoDutTyDKvmwqR4hnMUx6ogyiGXJb55dFfSKpJ8m7nL1fx38s",
  "key27": "4N5JNS1AKvoZjGeJMerCozAyY2eyHECuwZJX15YGHn3PaoDU2hToiCXLbi8p2XVsdSBVbZdiA2DbdcMQuXmZJTpn",
  "key28": "5rkQidEJQKx8jJGcJYP8FcfmkWcf7reDjmkq55HjujCP5MspLV1Xp3x5TkHfcorF2igbHy7ieBajWoC5riqKbnED",
  "key29": "4m2bZV7NPK7fwtRpx5aCeqWYRybR9K7KrfEh36DTPxmTFcTZHnGSJMmaubKwbnNitGoupheqDbHyeL3vV5g6fGiF",
  "key30": "2zeBzrBsRiG71srCRETqkT6xCNiZdRTS2EXCB2afkFtfjfvG5pKLGxiE7bprNzi7YEQmpP5kCy1s3yGTAKmvgPq9",
  "key31": "5VzDSYUG4uyLC5LZQxgKHUoEjDEwRsy5XwMpNUpGWw3XRVNCWotU4CECMRtzCiKS54Fx3ursJCuyEqeQ5qRxPhLM",
  "key32": "5S2U4B2muDUw7eyi63R5fgYst9TKAD54JdzXTnhrov8ZYRksiMh8hEojp5w627dDEaDdvCP5A9UCckAVT1dCknv9",
  "key33": "3bGfVFqTg8ny52MNkZx1LSVzZ1AggPQWXDWpiWQGaKLvXfE42oJTsJhNHnURqMnSnorLSut4u5WXmqaTxGhyyW7w",
  "key34": "LxMTFpPQycBDcftyuMVnANy1wiJQTxKnQ9n2p1XgNcGP8y35oY7yVJ4ATHJAJ6uGLa2caLwqpFfaHfLKAYsKYB4",
  "key35": "559XZYVcsg37NnE51L7db2CLkWzzGFkmbErfLZm17yzV8d3s3vCm1UVUC53E1A8oRPviwRHpfSg7nheSDg2K9KRb",
  "key36": "2GG8Aa9NsLXcPvd4TtH57c89XDE84NgFxdrhs18jLzt5hRy1pFjMvfMYzuMXbDqSsRLdKo8q6XewBkAfbkYtFENx",
  "key37": "gPCvvadee66FCdihoY4nSbEvbJDper1uoFQCzoMQpdGVpxttmqfRi4iVffSWxkr5eKPR18SdkqUsJAeu5dAfrxw",
  "key38": "4rMCPd7tADkpZ6pq49aYS1erEFAcifrYhGssLDFYfskyue6p7hNyfLFAomfgt6CkjnGdqHK39WCkdKxWsuTJ2obj",
  "key39": "3w7ogUYXBWFZXA3tLHftQDwVMKRgFX5gxz5XV6n7tJ2rdTfGLXApVhPzQK28s5F5NFjzgFzR7Gw8wvMZi9ZGoKzF",
  "key40": "58TfGrkJJPPbWKjGmm39WoKGAqtduzrz5JsRhE4p4PXQgh8oGomTDFjAG32r8Gbuv4wvUGFHFC21erKwC1Ca8ybz"
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
