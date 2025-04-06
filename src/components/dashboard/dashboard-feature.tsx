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
    "2cNfnEL2X4KMU1xW4PEEZcPzCCipbtgzGnYEQdLg9fbfWxAv1PRTowEaV821E4G54djSZ1sY6CEU9cjQzotFm4Fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YrgQt6Esyg9CnSUfJTnDw7CK8d7xZW2QbMvtHDjPsg7jex71cS4rKWZaVW6XcGXXK2RHAQufBRKQgwrKzr4H8ft",
  "key1": "3JtmVKnUZCYrYf9bjRY1beUjWwwBH4wZ5N3jURfpy8nS87CNkg1ehqczS6v2ikNMwMJyLfE4t5qcsrrdx2rm9k3w",
  "key2": "5fFNEvrGc7Qe6k4eHCGybNmRhs6stmVRRGcpQboqiq3JNHp95LGGSArJyce1eqNr85ShE7JdDh5zgVDtyGrbK9B9",
  "key3": "2CgSEiSZbUh9y6iMBmn6mXmkg3MYoYFzb3XFbzSiFmUHyJ1c9u3vnTENHfeWdbCvTgJnadfwbSHH9cCW4cUy4K4G",
  "key4": "4PQkoTopwtqwEyArmq2WQ75nFjx1NBroDrDPGTXYVoGVnhLEhTpLrYmjj1KRwkcquTapHJquUZNmHPpmt81muJzE",
  "key5": "4rc5s6VcQASXXowSutHTHvytzFMYtgP9NU23q2p2xHcS6HPXBqFAwuZhen3FCoMaaXnF2gUUMQ9SxASPdjesYea1",
  "key6": "3s69tYfq43GejwddGPr1zWBHAWG3fzSVt9f7gBB89z5wZUs4pTXCvcxfBoizHiSiu45ZcqUgBecr6Jm1HCXSukXK",
  "key7": "2cXHQGJoL5FogLLRuMxGb9A1HypudPRLPh25S3NMxuqBsQk6SV7zJq9n9uY6La8owDRUuY3qpxPBvWWa5cFnKK9a",
  "key8": "3bBPhbA6w8hzU1gG6ptFxw3FXiP6ze8gWc2VGkkVo3Gxdedf5e9XYg2ZHhAchE1hEwznJip7X9BZXE19ctassYGW",
  "key9": "4LsGA6yABczEKiZBfo7w7E7tXHJo2p1E69d4722Ugmy8LVzU4xV63JXNwjExrJm45RYi8xEJy5RMaquK92y9Wrti",
  "key10": "5XLipp5Uux48gezEGwj1W5DzGai6CtJAKpQQY2QAxxUV1Csrqdrw9heaVV7G7Sq59RweJ7NL3sa2yDQxMu8mj8Kk",
  "key11": "5hhf53vxwY6udURxKUW8fzdP6VaKbipwdpDkWCo5JTqC7BFDhoX3PAN1bSwszt9Q7WeAKhU2GHQnZR9t3cEoNVvY",
  "key12": "4WUKHon5rAQgenUU4tAFanGU2g6GJf9ncbReUWkog43cFiFj4ou2iNCocDKNZsUz7nZdMpnDTGYAUuYTmqp4jH6g",
  "key13": "5ZK2XrfvU4tsV8BqBz8vYBDUcKmQgnXuAoFLcwrGa3KBgfJvZBdBvZmeCvxXvARphf2X6kWyQGvNURzL6hzGkdoq",
  "key14": "3Fs1DLNLpkRLPekBchzEZUQJTDEtrPWkA7pXTwCU2ACo4nV37p1nLsmBKvk2zvXJ9eaa1UZMihNs6wSV3MyQZMyN",
  "key15": "3MRrK22RxnRNKzqJUdh8z2DDzRHfEubtzGEFpWy5DUptGoWMUAbZkq19XCzEn8NYXktiN8Tt273hrQwiNnzbAZTX",
  "key16": "5QFTnytkbrEcBYNr1FNB2f9VDsq7pqi5jCcnCuiHv2jUfaznXDr1kkAyqd7Z6H9qkFwpD44gfg2wna8KcQ72nnne",
  "key17": "3rAFAh6yh9Se3Aj69a7to358bivFrvDYb4JU4azsEQ3S5VASS4qmif8Lks6Kv1GX3uCEATwoUaJz9wHjkyoGaGSG",
  "key18": "4cjz1ans7RqsfvmcvFZMzfSQTLhDd5s1Q6h8FypTiDWEVeFsV4VL9K9x6HBkkXskSRVECzuH797dCqVWDGcXcM7s",
  "key19": "5kyfKiBQYonCR7Mxm46TjmMWRbT7zS3Av7trBKg4pqo8EkuKP6j5asf9XNhkXMLvTxQiPjBzNTBbfRqeLrvuNVwr",
  "key20": "2FAcnnJyQyGUN33kuSRdzHkKqXSt4fCM2dSjgYffbxu2qmAGCG3QoCja2djGAoykS86DJsJ8ozVQTvuEru4WnGyP",
  "key21": "5LUFyaKAqt6KstkEpEjSWXZTiWkEmPqBi4xLHNyo55Wo2fzuiaevrHP6YLss4oKjo4mydrsT9XbqAWXaB77azVfw",
  "key22": "3QYzTtGyXWL8eHexWQBF97upTjRZCx75gatQomnLC8YWEkBi8wydnNM5gRV2bdK26wNKosbFiVM1tSQhVdncMUte",
  "key23": "3iYmAeLZGZwCaMkq96JcMxP7Aay5H4da5FncTWkaNQTnZ8tkCQBTmr2McXqx8VnknrY4DW4hzsqJPV1cpepJZA3y",
  "key24": "3euE9j1SxZEpaiphPuDMMzNVZMRtPzfPyS7481HwVhggEjaxJDZM1Rfrdf2CYWYNvURa4bfmzJsCAxLqhshF9Z2z",
  "key25": "2wjzWrdjJC5vbqsANstR2HM5bJ8xyCutSouUWcQF3cxqjGPNuAnCwkcToXWPVdsvZoZfrg8qfkDcHGirrgEyESto",
  "key26": "3ECRHmuYLqzuDkzFAGsXKnV4X248bUoj1XEPnHFwq6sEeadsbL3g9EHhmJZj4SpbgHDfgWGQERyDGPpDYUvoAurM",
  "key27": "58qGhJYvrjsuwyEZyMGUYvFNE2YVq7hLZNG9nNZsNL9khn98iwdEyTv9N6SniTjvz1y3sH2JeVLSoSQfNLK7hZgC",
  "key28": "67XdkqRZTDwj9h4AAdnWLAozXMyg7HdKF98wnRDSWE1RhYwsC5MTRmwSXazgA3yuicFwY9EUXzUkWLQ32rjYXiFz",
  "key29": "4mugKvAoJVyPmj72iQr7wKnU9UBbvvAfKMFHfPALembBaHw8UeK6viwkCsHaC25aBGsvcM4FwGAhySmPgNVWLU6Q",
  "key30": "3VBGzrtQsxNF13sBQj9srGRNSA8N2FSjuGakrgnMq4bZe51k3RKs9KUAM58JCbS6m2FcthrD4ANJzBkLkA8L6zSe",
  "key31": "26YL1yeq2hP2wDwthRNGDy5UfgL5v4VVMiXpCFvVSxn9VT7UFJH964vJ9YzJPL9opYqCM9RSa6fJY2qX9dNBVv84",
  "key32": "4U1a7QoZMscbhqTZ922itGGScXcW9yHh7Te6dGzHELQSeLMa5afBAHgZFLBAAu3Qiu5dDziXXXGSF3JotkVSTjuD",
  "key33": "NqiAXcBFXveEEdTrmwc996rY3QgmmA8LwzMdSfn9crsok2CmmDqV7sT6fpbPCCrps2rxKixPp33rbYZEPuWQ8nk",
  "key34": "4umff9cwNXM6DACLNcNxzEJwDwDkHdBhVjJ7iHmzTDVboPUfmVYdpBfHcxduMbWjFF9TEML46EHswA6HwyZkkEpw",
  "key35": "3cVZQ3DSbztqFReF9jzcv5kRZPRRkhEsTwKncRR54h5ykPCg9aeoh6mRxSqFLCawTJGoKMYzDdXfv9wp5jupVQqG",
  "key36": "2Bsa2R5QoBrgChCrr4Vd2M5pkBFuLgKhDuDkyatJ2U2k1dpGRYkpu6ViPwirpZZgNByQ8Dck8S3UU5CXjg7x7iyV",
  "key37": "ikjZ6dAWiUdjPFnYgkhcuBVSg9zCNBMqs8MfcGaCnY6GLZpVyaDWvcMpopfNEaLN1PsYKauzymAhr2o9yyY4Jev",
  "key38": "3YmoP1AkipArXNQ1pt8BL8gu9VwUzb3AKTkvEkKhxpbijSKGUBazXurTTUnDH39LzQP1Ag93LYgwsfGZfDameVPU",
  "key39": "ri9CX3gVG9yc1hEqD7kmKjZZW2h8kzzwAnu1ZhsivuwMnGcCjEPFgrykbdQM7D6SqrCpBc8j1htt8MJ2BerZ2F9",
  "key40": "RhL7HsdoCupur4jBfKo5pnS8b7VeuFn8QKLg7i53jtZoYdDGLBNyzZxAFeiCv1TWBMEdmdpnCDb3xNve6mLeNLM",
  "key41": "2FSDgZNkvvrEfHZumD9N8WMyKu7woCQ1FSaV9hicr1Qw5jkNBRAzvsEVSsFyWV6ftCWshSnPntxC2SFZmJV6Kdje",
  "key42": "3mZkfMYhGhHLBdzQMEFEQtVaKkYQCLjBwP6i1pdP2Qc3CXnWhqCb3gKBWDh7cHJmJScMNQRYudjcDzvZGWCtmVbs",
  "key43": "2o23KE45X1ESpbLBmJAmpNL2seoxywN3UJWUheUHbFz1bfCdx1natV3bHRFXjyaZmsZDosJs4w8mVqhq5ZR2zrVi",
  "key44": "9ThDtDezjRZnk4JRh3dSHnUobzXHuzwsK2QuP7tVax2v6LbyewKLVs28kec3V8kUEoooCg6mxmTeWefKNQ4Y9je",
  "key45": "4KDzxEWqpL2XXDe7aEKrRY3bKbRfrSGXt711j7wd37XpBURMeVLcCPRz71j5pUKh8RgTF7DW1EKajkLYSuppSpRa",
  "key46": "4MtNZgqS9w963CS9CSmdge3kuDRVESDMSReetnyeg2AkJecZFg1vBZbsXBbusPYqzihYtA6Y6eLRY4xWHqFNehKu",
  "key47": "WsaXH4AAg2S74dS3n6U7cSyNue8XU6WGoiRdKSzd7eXpjPrzbmNrWm5FQp81VWqRPFh5pvHPn566tFjQwJzQnca",
  "key48": "4nR5gfgfKCheSRZfApicFSAx5QZ71vdEq3EKyfBmP9xckMjcGLN7XBj6LcmfwUoMVgMRUr2cXBaeheEr4sRwEzpe"
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
