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
    "Xn23n1aKbjYG4aDk1bns3v55T31mqDTqZRGG8qooS617vpNhipdmNoWCbhMHBZHGAH8ATndrU7sVR1j56rsAujt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H7CCsJ1FLSnvou6vXrETcSbDPdbyAz1DJwaAQ6F7Smrb2BwfrZs4YPyzPPiy6JmyEhF6MJjbo9fsgK5UvbsF7Ku",
  "key1": "21WzL25HHzqxEAHvQMk5cY2VEZPV2weMTbfd8cKyw8F1f4s1iNDWVtHXoawnsGE32r1tpDwYtLG5poGx5V7XJBip",
  "key2": "5vXL3QAyNRXtxXyHxyVb4hyXpYqC4miabwVzCR7a9jWiF9i84q1GPcWRuCnGftj85eQT9uhXsTQH2MNZibqZGHUh",
  "key3": "46asFda2685xjgwWLXwq8mZdK4S9WTFUC38ZMaWAztWYB2gpuH9i4FZmyjcTj35yr6nSqq2HtoHPHtiKLBqYSLAY",
  "key4": "3Po95HEnqnUG6ZtSE7sDBX1e17DKoJWD1adJNruTM2ghumLXMBXfR2fxkmQdgbDDAzpkzkpFknWJMYqWW1yFv1h4",
  "key5": "2nvESX6TT5xiiuLVt2GmFg4oHC3CsYtheomPRHQihK58qWg7Y8F3RrkdkJhNUnz1hQ2ZUqUTjncsDEoc1CbiUazU",
  "key6": "3BM1Y4FymxwwFaK5jL1pheV3ihhv4GkLnJWYueiSLp4bPT1DWvGXHJs5UTi9jZ98CV2bwgM1Tq284YacNn8LHdqk",
  "key7": "25t67KQR2TfQcda2vDPBzrNd7nTzsaRUPF11PUvSTBtStdz4FPjM3h2dspHAtz9ifBDD2WJZ1SfhKjYkA97bpjPg",
  "key8": "3p6fTeqR7uJ3gTGRLDVthBaJonfN97gbDtVYnkJ95GLKVbknjNSybBGtG8npTFN7cEYYTgXpPymT31XT3uxVyh51",
  "key9": "5iNfJHbR2Qj84tg6GKsFc6Q5rG9MK2ZKtGybK7BS6YypsM2DKUB7UxGnDd8zXc9HkGxTrDZavYwuDet413CQcZFf",
  "key10": "5YSVwH2muqotsxRVJyTnFUjUD1e9yq4Y4P6FrXrqKvDm2bhCgj4suwRtr1AfpgizVfxddkaRF1TeAG6n8swufdu7",
  "key11": "4webqatez31GUg8vGg4kdAaRV1hUYYVrQaagVqSbz6chNwe4yzv7yNJ9LQC9rrNGvoyZqVT38ookBqWnsXudzhTb",
  "key12": "5kPpFJerZvsdkJBNkyMNgsMJYuC1YTaBYB2v3kcuPzX4ALJ6Qw7wWeGpL7S9jqxa9ydkjnxeRQjxZn7BZdSSbGrL",
  "key13": "2y53opLLGHBBfwXL2zbQydqJ7Yg2QG6R2Ad6JV8rtwXByeYiy9oEyHUBjgXNYvzPebW78bqnceLex9SEEFQRciZH",
  "key14": "5pb4zVtMRTGKrv5L9sYwiq6LK9yaiz9iWk4aYbY2Hyrh4PE4svfwNUW4eNgxKEoVRURj8e4kkuC5cqEYHWZDU9Pr",
  "key15": "4H28rN61THNswNCLk3FWc7JJUbmYi1AF2Tq2CFENgrXmaFaF7aetEfx1Bie2qpwj2nUgyXWmaCa8xrxVp4MKaqA",
  "key16": "2G3RmknZEtEUzFoNzqaiztkcyYjoRT6eSvpRwinUP81bEwviySMyXBhvmTpVnFFAgzCcbkBHhMg2Z9RydQdUKBLd",
  "key17": "34PRLSRGjEQAeDLTsi2QSQ4sGbgJguqEHNjYeBpu1f6MpJtkaYoe5swngPbfn9tyABGRQiJ1FywywWqb1YbrkaZw",
  "key18": "5pQo5c3Ece5fBidTvwt7wRmwQBRQEXPBmKUUG12gySqi27WQBQK4eN4VFJLActXTWLXrNrbsS1NJCUuNPv22AGbB",
  "key19": "qoovk1ztsf38ZrtNkFUaxAHLmorXnsqAg2aH2fHjFXbXb7kEc4Hj5Lik3mJ6gE7drvLeVoa1CYVMTegSeJCEahj",
  "key20": "37w3iBnaoseWXFFz8tgcyd5f7jh2JVSK2h3oDcW72LSn6MQHG9Eff5inazFexdrqSmnkgnzPChe3jewxAhhtbujL",
  "key21": "TDxqXWEToEJDg6gHhWSTpkLSuMHGLNV76PCXgwuMhWdR9z36VHKmi3j24tUEstfjPJjHtWibuhJteuqGsdkf8cH",
  "key22": "2DJHB8yT8hYKzKALhEanzz1PPmYLusyhcb5AKDbhqLN44ULpPwWhMqpuvHM3ctMW6eGMdiso227zgsiUtmnD4gcG",
  "key23": "3LuvirVpsMY28Z6QUry3DczF5og1Cg3SD77bNpzxTnovPNSGJHvSKK3jnxa3yJe5p5DVKMyrPn9qH26bTya6QBUh",
  "key24": "5uvFv9q3DfjgSd5T4m4JoJkcr3kVSoJYMJDGkv4xEiqwfsChMW6xmeuka6xtsVbZUW6fFvdy8GG5Nv34Ge9731x5",
  "key25": "SKSBU1h6RUt2Dj8Fh5VsJcdFx7H8LTYbYmYUXu9vGmheExZjcRgUZcnazJquAmCj2zDG8mv73UywsGvR2E9sKoF",
  "key26": "5zqtgAsC5sL3PuAwmFrMFHikinoG3D2vtprBJXbwMCynyJTmCgyVmfA11XVfAjBHCDBRz6v1rFPrD5e2wu9RjsQe",
  "key27": "5M9ErdKs41oGngurryJ68yR2y6VosBpf8JmZtXxFgbytzrfLmihBGoti1bRkmkQhcDgt3Yj1vdoVoqWsyqFcDHw5",
  "key28": "DW9ofL6yeHmMFgn7kKjnedtrs9rtSEzwdqaC2S8RX3viB6zjkacqYm1E9Ma7tJQAsjJ4UdjYDtCEoabxLynkJmi",
  "key29": "5XQsSri27sFjhqhThmfFSTeJvKUVkd2gR2rwp6ZuAN7JtxeRYEHyrjk2SY5cchMZW1TYjLfD2CM5fRK6g7awF6yj",
  "key30": "2imemCbgvbsErwGSDZUHWG5pMeXnAUbeuCoPCJQ6baVyxFFSnzs9vLwG2PK6rkUMzDafYdauocshSfH31n8yenaB",
  "key31": "4tLxCgnADMmcKLLC5eLCUo2taY8qwAFeJKp9Pezbp56xNuQttpKiUe8kbswjgayL5rwPMWidbEixNEHpHnuQSs4C",
  "key32": "mR3kEdiYydRWqA8bxdPHm7FYAPiKhRMYbFhJZo5Lr1fj6oK2to9Ln1qrLa6qN3sJ5cZwhPoqhNkDNNMG3ykeW12",
  "key33": "56imn74AFD6gCMMW4UztJVxV9VJe1H5dYSBTWrCQFrC8FZBALzrfhy2eKZMobieEe7Wg1Wh8zY5srwKzBuPQTQUK",
  "key34": "49WneFffbE1obfj9anKjMNVPzKAtMZ7roAvqocm78Dw8ZyrRAiCAwAXGGaZQKzRbqt8PWbA2U3qoV6bGy2NpUMiK",
  "key35": "4a4o83xB3aVmRPKHCs6XiCsW3fSExfbb4hMb7SMX5evbRDXSx3z96vKt5rwYgADVen9BwwNXtZKiGdaerU17a7CP",
  "key36": "2RhKVgyMH3pSY6LNhA3akpxG54WoVS7Tk14kpGmtMXYwUN3JZCrRV9qUhMnrS8dVDUHZ7ShpZ9hPhgkS414V2dhD",
  "key37": "2KFsR7bv4cZYUvvSN7gt22ia8tAHdvHeLQncf6uuKU886xPnz5U16cmSAt2DXrCMEYHCHzLgemwvDu8yzzKWAEDQ",
  "key38": "48hrmpgomK9FgbCiPPDjLW8mn9raMDwUf74VLtVdjJHHDzNCWDcYexkng48dGuZSiXtQWhhZzC9Uo3MAZeVkph2d",
  "key39": "5kzGkFuFNeDxBt69tU9sfDPEPtHjKXULQ9LvMgcPeYHqzwmpRUXAMCxwhoEtg76HVDZS1XPp4AERxU1xshAttHfM",
  "key40": "4a7SX3tigBdct2WmPoNbQ3T3Z7N66mnbcFaD7TCYfRcw3uPGfswCjtZzNkSEWuJ2qEgFDoow6Bc9sHXuM5mN1tjQ",
  "key41": "4D4Lfvmc2G9ksUvEwX1XvHSZGfonAW9aAmSK7r5nYd1QVnt7E6pNyekayePQ6g7nEQkwa2sPepJGdWCU6CpoSWvK"
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
