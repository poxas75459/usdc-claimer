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
    "4TzDMLPsG3yFyti52c6fVNaxjYPXVGRRPggzu2hKyafbUTqeWJ1nj1FYGqSApdoquoCmkLxpDXXFwbqZrNhQjPQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g2ZdqQ43kR8oDkRXpRHY7xDNJqZ8wPhfzP77tqb2Jj8wPLLaWkxa5YbTvZ9ruq8EuSUFYcwVzpZGLEW5EaFshYf",
  "key1": "2vrR2XoYNLr3Wg4GxRvVrzGb818oN57iuvByq8V3s6VxASuWiNWmGj72gxbAcNr8NteBNR4XZvP48NzDDYtdELWP",
  "key2": "267RGBbKRFQFR2XQR4a2QCFNFgSMDmVob6BJsLcHa8GMrVqbtRozhkEPGb8Ad48HKtEuA3FJ6fAyywAr3i7vLdfW",
  "key3": "32U2b9dtSN18j4V38D9wPv89a8QeJsZ79iddFSxz2bwhjda2MrNyBNF8J3oBYJUhtj5d1Wb3y2TfiVQwYvzL5Vs6",
  "key4": "5C9GyoKwdZT3TJhbNeDPVwmf87CZvw5rHKKUF4w8wdFJxL7piArkoxmPadApwUxUJnobkXhVaqt11NCDz16sf79Q",
  "key5": "2BWZxQpStBQQQDVpSCabHLnA9RLgWL4VcTvpW7FK1Sio8q3pcuq3W65E51bzzA5XZ55utTKVzuZY5yzqZ1oDUpgw",
  "key6": "2daE4qd3ydx9BcMyVszHgEne3joDA54zqMjz44EGSqKCKqv8Ar3Ns2Fs2yu6WJ364AZaCJmqcecF3se29CBaJJDo",
  "key7": "2Xak4qoZCTSYcArThUfJSZZTmqRPEK9LLLjdU4ViEvBYGeFbPf38Bh8NPJ725NxBgSneVTjFsqSEx29PSuMN97aY",
  "key8": "3pibM1ofpiixZhfhyFp2nEprTDBjYEgR7hytrB7DzosMcqSZLPkrkNBS3qg7Jiws9vU7By97scjjip7qtDCZMrdL",
  "key9": "2o4hcCAzUWBxX4pNduEJ88yJssVpuR7JNF9m8sLNVyUgHpXaBswuVNBQXxKBb8cGA18yEvbgFNecwWUUJRJtPedv",
  "key10": "aMRsYjyDvSMrqof7KZX9he1eRi2jwih93GUSSUKGSRS79bcKewEHdfUG6ShwG53tMFGaGEmLhJyjGWUDcL3pqBD",
  "key11": "YbsmYTCyRXxccx1LEHb3jPRLv7AtJFQsAysBPrJwy12Vmu8Eo1ysiLRVB3u4gKW8UxpDwjWT71QEXoJejkPU4QX",
  "key12": "2dY3drQrxNviM93pruwQFeoJSWEGej1BWyy9ZHrkUcKCKWS8LenQQokyD6yoyUP1xw3neHDDLKMnxDs92CFSRrET",
  "key13": "2e3sMtMko22tXCLvD9hvaWadgPMnsY2qMN2BUAF22QijoHR2HpJUMV5KrzPy2vvifUeC8gYgiJnnK4PCYm3zmGJS",
  "key14": "5MYbgLrdT8Ckc3ACGrn3SVS37NEA4vAAZe37x9VbZqZMQbrXsNmnxvoQgzXxf7zuQNmugm9NXKL6CBSaVtyf8rVr",
  "key15": "3BecKXphSi3pSxjaNZeM2ahAFRTcB5VpuDCDUztMEziXKkVQYYGX9GS7ejkeetYqjLfGUUGxrsoXUGVgueXGCqzd",
  "key16": "4tm2iudjvfZNChgqLCS1Gp8ngBUri9PaHWmJs1gRfb6ESanHX4RBwKs1pQXVTvs1ZtqUcggrF4beZRUTLDadotbX",
  "key17": "4fgd49FVFg1sP7GFpoYp4Q8sfpzQFbPbNuJTjFYyppHNANdgrWxiwiGJZp61wNce5RsF4bysWnr5qQdqzzFQau73",
  "key18": "4TpJh6RiHighDZS1PgVg7UiTK7q3G4QXm1xehjTPYacRN2eT2wF88fE6wgcc2J5eVQakoW81xpvZZHKgyuPgv1Qy",
  "key19": "4VKDBmVGZoJwZKRcDPYRG6tweieZpGeY3eSwbBS4GnjFVrZfRLAFewb7TzFfLFW78rXHNtEwdfJFMeEF4eL2V9Jq",
  "key20": "3KTS34RMe8pXb8jUCTfYdDhzHwLvKjEtFgJCS7qHXVtF4cY1AAsLScShpynQEDsFU59ojAFg5ofotez1JZTX4Q5k",
  "key21": "2dGQt1yGwPe7cTsVqptdjFuZsvmtQZTH5Z1XPfdwVhrEa8vnViUxKR212kvsC9naAEk4SeYDvTXhNLj8tF8mM3hj",
  "key22": "4tf9epa2MDdmMqfin3JWSvdjS1TnHjVKVaynd7uUeHK8hsPQyvwFzYDNfRfBkSNNwwGGR8aN7W1ex4a4a8GkqZf3",
  "key23": "3hqC97nQcBEMYA9BbPPZvpvqV8HZn2eWLn8JETspCUyeNLsDv5XmzJoS9Y2C2EdqEXzvuYgWLrvwat2eTWH2tJKC",
  "key24": "5o2Zsb5PmtNgQoT2rP6R6meHD6Ndz4x1vaJaYo2Hweo5PLrJUcTkM1xFK8RFn2utsQBbQZSPv8J7urbKtKSg5JVn",
  "key25": "1eSrQuEnuiyJjT6Pq4xL6oFeyuKo6N6D3FhwrftUt57PsawJpScXEWViyHGUj1VURtwjLZqpSDZMMgw38DvmbCa",
  "key26": "5YkUY2qTBo98Zq3TJdLy3DnE6n89ifpruuYQXmkCjGvpfegn51u2b9sUvhS45SAzDXKjnWCBMHEdPhNvR5u38jSe"
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
