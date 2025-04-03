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
    "4J1vSKaHhJmf4JC4B55rQ2mA75fTMSHzz95e8KDzE3QvU4eSdprVjVTps4uMm7snGXJQ1Jp7wt1eVzuhPT8sK2bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDJD7azdb39F4P19pYv24CVvPKX12pqFaGDwfKyesvrfqyvZ4TUCLPtHoozJRrx2o8HefGiXWxdnvxiaeHZSJeM",
  "key1": "3Jf7tzvm9Qpik91zUanu1BhHB5jZjbrCDHiEJNL2j4o9oQBd6DzKoJMvh4nuPnricJVptjDBds68EpKTLacz1tWD",
  "key2": "3ggertwyNLKZ6JbWCD73Tq5GGzwBahtGVGRtxu5nF8EcAXPypiz3ofUTH2ZdzJmwqoGUXzMCsTuNR5CeEAkcQcvD",
  "key3": "mxoNsnSmDPPiw21Xg8Y3VqkY2PCyJymxR6DQbQs6WuQySGKeyc5PywucgbmMwYQiyUrxhtSXc1WQMGbpjeHDs1S",
  "key4": "4p5Btd1PrKrG8VRgzmyyu32aByD1XkG9bLCZiKsWDt8PdjwgQiqgsH8Jzy6Jvz7SQV2NmB7kLQDjQR7gRMYDD5rd",
  "key5": "kyzrvsp5nTXhBZzSivL8owMHr8uBaUuDJnzwuLkKyPBLDoPMLY1LEkojXcv7xdphHUacPe2wETc3dErE4o4igu5",
  "key6": "5XDbwTPBVwxBhauwcWud4dSKQAx8qMjp3MZy3ZiLQH3VhZ3hhxinpATvPb16WwLLSfikcFh1bVJVdgJDg8sEBskm",
  "key7": "PED7cPytLSjJj2NqA3Ue8pbTMT3m5ix4xm13oABanEtg4X4iiemoHizDVKf9qDbLpuinoswA4ZUAR1584DUKr7t",
  "key8": "2zxYV5FUKznuc99qufD99UDJQDb8Sp2HNWjcWqH3owFi1YdAoUbfEMG58rVnKuELnyeEzbd4hSAbTY3bdgeJBWie",
  "key9": "2RBZjpDXUZVmiB9Ld7FeWsH8wj5cKhqA3aw8RumjfJgFQZAemnBek9yaMNxWoeVAc7VovnLaEawUh2ABB8K5gzhX",
  "key10": "3QnqCySuNHdqeLmgLErfFxMsUxELamyF1k9aVFATVc7mUb3fYton3xCde296oW1NDi48nFoDXJWuwngC6R4WTtEq",
  "key11": "4tjfo4MCJB3PDS1CU8dTVbxDVoKRwsyCZNvBeq93G7DLGYXXZbQFvh2WehLQgyd9Q6WxhuD7y5ZdJJU8R72BDUSP",
  "key12": "5veEdT1PFMDaBT55sTZYqp6Ww7ToU2qJGZ3hkcdraCvrARNW1LLDtHRcrwFcmnHXhLA6VgdAUjDJB59LyL7pzMaA",
  "key13": "yVuTKYdvxhgsMAgA2SDM73mSi4Jqx1pjNXwH7oU2LAgnVSS5S9kZ1uXRr3Decfd9jwsue6E6NywMsMVcRujhNHD",
  "key14": "2Td5JQUcNkpHbeRCPBjABadqf16qU3SWNZKQzULaNqoXGLmwinw4XoxfSPEBLjspFsgDhX23FiFMwDR54taZBxdd",
  "key15": "2YMVeS7ZJpFWqABDS9sFH5CDUPgF7rwNAaxq6DG8wuCMzBKjpM5nyAg9HEv5bqwHYxg1nsefdNrzowS9ocyoi89Z",
  "key16": "4isoqQcdLvbjgw1Zoz19qVxyHyviHxuYzUNRceRXcowB8W2KvgnDgLBF65z5TwXkBMPEJeTA9qftEHuwAMvDm16L",
  "key17": "2JdULQ5wtZNQmvw4SZ3aGPXjVoaCkUtpbLiqhhsc1Gf6iU8NarSiKM6RfjYFkoHLS5K7DNUoWtnmby9gAcKEkYh4",
  "key18": "5gPTtzZEzrFRvKjVqDRkQJxmrcsfNgMaXxrNnteyqTpf9t2FCft5BL1jAqL1ENDEuStNeUk4gLWUkY13QqvKn6nc",
  "key19": "4wegsNS4Du1UNX3B3SuY729ZL2CcyxKmVuWxtGjg5wuXC2cHZjUv3odPhucqJ7UBGVea3tcVZrNs2DDTDjRKPmZZ",
  "key20": "3RS8q9EXSvdJSd6VkMjzwyRpENHduRLtgre1i4GVrAtmrJvTLDGuPxH6pPP1ymH3E7JHPiahHbCj3hxrZ7BzqwK1",
  "key21": "4meQzkx6MMNLFtBtHMpqs2SjhuYwSL3d39mFDwqxz6XM6KMFPSokSmQRRxpidgrYhsBRUhiezgafM8bmTpVgeXui",
  "key22": "38y8TvWs9yYqUGh4WLn4BAHtQAhUj36QhC5QuVUsdjnMkMydSVaFcC2Y7g7S4pqmkrcprS6VfncUfuacTu9RSDhz",
  "key23": "5HDn1pKk3wPwBeBQ83FWbCd11AjocvmZjgG6rbLAaHiK8gXcgaaKccneQErHFxdqTpZHiuMUCjWJNjSDUUpK3TEY",
  "key24": "4fn3DV5xWK9vHNyfjg54uYy7MbSvrnWEDYpR5fTBtVBPBAczjrVqMn54AVRmieQJkth9F2Shp4BS9rTFPFZoYvTd",
  "key25": "3roif2UHHHiXJyqyTdLwwskdUd1L6pAzT7hZZWVpc6zsSULEnPm2bHuNUD4iQRTAQE5DU2cnRCwBN6wR1NGu2rPk",
  "key26": "ue6m1GNWXsRxqotJMpc6m9UmeqcKot6qGQCZj8wDP1Qui4QkWnjFng8cSveBYGih3eBUDt2rjLwvRiiuGarkmHF",
  "key27": "2YzpjSABf4xxXaVB832Z5f12pNXN9hXGteueExf28Pa7zaszmAegHFMKv7PgDGJT8HDvQ3JHSNuUihkByWNZYScy",
  "key28": "56bpjugeYaNTwpvW6Aeda9LJu77d9bLtkSbtMN9NRNGiL6LnssiTrMtoju5LeQwNAb2YQBUx1Erzgn46oMJSmoTV",
  "key29": "2GVQRhwWoG8Du7QZNtWzwkAXUvvcxeyPTdA6nYDE2tgpNVi8rGp2XD7tvV9ER9tomVw6scm51RLFiKS46e6ZkNLX",
  "key30": "sADbnkcdDP7b6uyRpF4GGwjo1ACdEE6wHuCqoSasFqZn589ahS4qC7KANNH8E1JJxJHSAjNvmYGB6pc5sZ6hxwa",
  "key31": "5KBtM9aZXM13EzJb33CBtuWYwVyPmBSFoFxGW7382EVJxQh7yAgiuX9dVDyz97CWYqZCXbErCsdCBLBRhjN31dtH",
  "key32": "36T8NKP6s1TrPzy9amKjRFmJzFTuJTeDBtvJFQ5snpNd7R7r51kmDzFN6SheUd3mSrQzPw7XWZ1b9VUMXtGqj6uA",
  "key33": "5Cut6XiwdNr23gzxhY5KKihpXXs5Xdean7W8U5dkdFgMFS7fYXUYjh2xgx7ebZCqqbPvbxDB7AUA7R39xLXY385c",
  "key34": "urKxBzdnXGwzYWdguUKHz7hB46krq5MaNaeQq2Fnv6zxYHjEibLU87ZK8hYKrhWQ1bvFqw3rR7GSMXW9KxhfQj2",
  "key35": "XrJsgqbKxJZE1YPy8tYhXZNBDTMLdJVm4fwxHGYVzGxwMcqDzpJxeMQ61MTWsYFckESkhNyHUbKeZ9C2SKfbFv4"
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
