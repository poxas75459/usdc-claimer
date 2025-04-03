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
    "51afmvQd7W5XhfbWHehFksC1jFufhyr2Gm3qZ5y1UNRgNryoVAXGwurEYvfCXNT86vUBJgVbZoAM9hcKZs3autzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7FQwRFuRHsegyvU6ENHz4JSVUgQXiB7TLiBcc2vnuc9xzUW4uQWJrMtS3uUmKWd375tsDKmXP27LarBJi4MrNS",
  "key1": "5HpJZDC8VpUz4rdUHr2DZRozHWYKBcmRvQpiVZxiCSJaDPbqrg9MKJK63caS4u859to5mJiA7KSVv6hDXXoqTyPT",
  "key2": "38UgCXHHFPuuhBujuJTcHh98hJwtPV9hmYd8A9hUJcuhHfyDSgaGNqaw8Fi41qEnmpXFTq2YhgJDQnh9RxiNpGL9",
  "key3": "4UjuCHvdGYKv4DXd3v1QvwEnLYLKpdzGnsQJUQ18EwJMJmBXdb3Y5tAj6rEgA3ToU3EyfvbTT4tgRp3JQvm2vDLT",
  "key4": "611NDH5KkjUSQB3t79Veo1LacTETR4ReGuTFch4Hg5pNvZzMeB4BeALbmuVZwS89fBfBbAGae6beNzRdycZCbkvV",
  "key5": "5CCvXYseJ4Y2oQvzMz28QLAhd8aKBWQNcLf7PZGLRA1dDQxiTJPQUp2cxXkXjvSHBYP6ogYPXqXksDxASBVZfk1X",
  "key6": "2eecn8Sacn3er3mED7KDjJz7rCYjVJ9CR8gEpKBN7GRcb6TZF3EvtCtGaaadntyLxeWU3LqRnM9hCmQbsd3NrLKC",
  "key7": "3mvpes6CQA4YCUqKmM1NQxkBDwDjSsDqMNGCen9VyhEVZqg9c9HNLrRKsU4HL7hYYRztuDtUxWSpoQrm54R711xb",
  "key8": "3gG93u6xBHtiyWRjHYA3DGNUz4ZN43cuYAm8VpDUpJ79pXVJM449t5pSJUVg9aSN6vAwTteCY6JV1DSo95C9FBVT",
  "key9": "4fggCKJzYvzpi8u7PDkwwzCY8SDpFPr9JZEhuzvjsvgKPkUcoSCnUGRaBgpZoXRJdHFpa57ebiopk2HQFijySX4p",
  "key10": "2J7NgAqzbQdkAwzXxyjCV71FpQp2r3zVecKSsGB8Zn4bgX3rrwJUZMC8xw5ebScyNNS2Aq9L4SxNYyP9iXf1pMKM",
  "key11": "c8mRRVrPFyK27Ph1cd1bXk4nP6ErF18uuBGLe98PqMekoxyEEho8bUuCfG9ymbosRXEcocuyi33h1yAQNSZs4T8",
  "key12": "jNpbVXdiu2TZzVCs7wHEaoXrgMjLpVxtWgadVQMQdpf1xH8xGvkpJcdeCFMYAVCWcysE6dFDmRnFmVVdXucN8HU",
  "key13": "2mXyivWkDG33neQJ1g4DuA2P13mJ8goaxRCnWkhhXLdNBG9NZcErt2GVHNbHBcFBDT185buzcWoDn2q8ECxXZ5oS",
  "key14": "3fftgxZt1sPLtszBjJmiT1grNVdohmCxtoefVMVUi8qo8s8S8rUz57xJvGSb7pAw9Y1YjtuZbrqxaJrgYiRVFKzH",
  "key15": "3QgL2GKbR25A6dqKsuJagjNzBWpxaze5n8EJwa2MCdoDojnDF9DPutEwzkXuNjFTqm9bJgvySowJQG1B45Y8S5du",
  "key16": "3gC2L6Xj367xeGx9TcJmq5TAzeo1Nr18CKsgx2zueuryWUwPqGQnhwXdbUyF6pLph7tjFCEAm3BWbcjjt8wVRWJW",
  "key17": "4Uck7XUDt3bH7yX6jK4hLyLMm5bcjKwrktPgWeyEJBaCwi1bA6rPcEiiUMfJaZgy7eVyskDqZDU9yiDrHNVNYyju",
  "key18": "4qWcmvMPiFREQxGrGX1FAWw8Du5E2aUeAwQ8y1FRHNmMYYVu73FA9Fhhm9oTQFKQLVe8YmXCAJkmz5ArPuR8woSE",
  "key19": "2XGRempzG5XpvFCmuv8V31YGk4BMsmLedEcxHzZE1Vx88P7MbMzSHfDnfoHMzGirdTNAcZAfaJqy9dCyW1VcqHsU",
  "key20": "4czbLrhkJ6wsShCAdP66dALJUKwW9TqiBTjvMC8kC4EmQTbXqPxtYJzH1xwqQRvtgQvFXyufC1xQ3GHZvoTphYjJ",
  "key21": "5ADMnjujbbraDcmk7iRobogc3qk2gEcU8WXSxoERScA3z9CPEv5k4rXMNhSdgs6cwsvVBZzyES8WwAt31NgGwzHS",
  "key22": "5KN7CM9V1uRk67jWEXmCPpGHqZYwGrbJFJapfPy6Gq8oeYF3GsMhM7LbjrYvYCoDomeoxpbQri5ft9w8NgZhZ8mF",
  "key23": "owgzqr4UP2GVWcuhffnZX3FGYkCpiHkvKeykx8tnbaLq3PRwmM9Ltt2zykcwipYv7CnWLAwdS6pUBqUxS8uSmrr",
  "key24": "56jtgdPgkLBJGvZLMz6LbjYn6eTUxD9mHATnSTeKWZQ5eGjAUCqdAkydiYRvArdaJEtCdsE5enZMFwnDiNn4v4PD",
  "key25": "2C87YfLCLqopUz4Hx75M4mHavx61wjLfLNAFVyNWWVDGXFN48zhMNozWK2Y8F6Q8ceoJgjKPYPaPsfkF3iEdxAkC",
  "key26": "5kSLh9rEcvnnRAxunpxiKrtUGagbpv1YarFUvK8djdDv5uo9VtaWxykFt7JCmc1JkZ7o9VAwNMho4j6dnGg7CqKe",
  "key27": "21s48yEpsLy8zvDwtYDPGmNU853ee8jtyE8gaD95DTBM2J6bRL8WBjrGec2XGKExp7qq87zdue4hM33i3excrB8o",
  "key28": "368t17JiSuVFyLsW5rCUzpvEofEfYsUebSJrmurAHe7hYdKNk7aHyju1hciwNrLA5Bk6VqwSnyhAEKBUocrTDzg2",
  "key29": "5ijB6984PTMyAaUfKN1ciqyCVhof5mrykn1sFTMzfysNMzeBEuiz5tm3aLEurJreuUsuPpDaiZFBCymBCTBDqtnN",
  "key30": "3NAjYRthQtxacGjn9uSGJkNTmYX769RQZwKvW6tGgHGYaifc85RASf9bqrnMnL6K6LwJrq6UmErdaZTtgLEYPmhB",
  "key31": "oDA28WrvNKfL9hVXRVAFpc5iMtxmVudejMHkq2HbhRFHZJypKwj6CLV1qowJ9ChaiTDGyvs9LsyPm2kpb95nvHq",
  "key32": "4eYFg2fEEQgzESXWJC5HCc9vEoHE2M9vwcBsTJRpcg5wN4LeWEAaCt5LiUs3D5ph4QVYu9Nf11qGQfpqZGETd8VC",
  "key33": "36ANSPDQECnpAzXvmnvKNy5CXHnn4sdT1b4VSoHS9bowfUAFoRGczH2ujSBsuxVau3JhpAA9YpzwM825XAuzytUR",
  "key34": "3QGbLBdQ8K3Tu8GJwoDgsVtqxYtUuTZn6AYfEmgvMhwisockC6DcXgbzsQmahVJBzk2fvRtfKD3MYkFYcRzdFF2B",
  "key35": "5VAgkPz8n7gAcJVg9Y8oWH98YtvuD5byCLwTbanpUAvisbLiLp1pud5LtzNitRqA9bA4XuuFidJiSA2K9vngd9er",
  "key36": "2dtV3NR3ZfHZBEqkN1mspYYGMdjAFwzriH4TU1NJrxjtPMad264bKdrkFWaAavbuL2co8MTDzxP5u1TL6rjrnEe7",
  "key37": "5nFNJdZn5A3gzP8iacPJ2LRat9sbWp4SMQcrYicPD3igAeqd7Boz3evZYtkW1M5nGPGeAgBdEYXwt9NacryLa3Jn",
  "key38": "5ZMKxD2zi4WgEK1F8gyuLrosrtMWEp9NUgyRdPzLwPbHbqLKhyPrnRoXMnp3xfJtB3eARPLf6LNM5HiHEqaaPpbn",
  "key39": "5CGQFoCQjDudWCdqRzy4JEqQ7TCN6G5n1zYHN3Zh8r6Epc8WnKm545XvSq5iHn7g8Ehz4gxHZwUvCakY1ZKL4dNp",
  "key40": "5njSNf2DQv1HZPTct2am4pmpnC1HovqrBiVJS9cYTxHrfSUPj6mCQF67XLMcivuuZkCgztKHgZ5nTdSpwGU9ivaf"
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
