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
    "3webQcutUpPx8vJKvEMoJK6K6cJRBf8dB5SxDEqCbjoKLA6cHgCW8dKY7XQU17dzxMfUpAGTSLhNUDz7hWUHTuUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LeLjrj36jYWse7NX5R3hMt1DwESSQFSXXHZteT49trtY4NKfk4zVxLogYyZNXJdWkzhYA5muXKfYQM6KeK4n9H9",
  "key1": "PoU3BES4XXQzDgvLzch8tLYN6kBe23ewnWaEP2Z3ZQw9tFn2LF1NKpzhrntcyyG2qvfWeYtXLtUZ8XErZzK3qnq",
  "key2": "58WLpfV8wtem9JJs4itpvKEnK3QZ7Ku34aUbtRTVnYp6AJdxWwYdAP1tbhWstpomWeZGBfatFfAoPAXdJKHYRFC5",
  "key3": "4sDqwPRTSaHJbpGDwHUn71VtDa5Xh4nqCk1s1EKu5sqG995WEfU2wrb2jmeJ7zCk2t8UgeMFaAMjzd57jskUXtg7",
  "key4": "2ramUHorFFeAbihRngUgkn1ijWyYYxrGfMwrdNBDFfEwp5RDkJqwWGsm4jtME5rVTvEjZi6iEq1jUe3ei7U7DCh9",
  "key5": "33VBK98QkKa2t4vYEmMji6ipHNwAqsGKmiXp2oqV8yUzDwcdWzX8VTmMT5sJbDxGuKqhAm41KYxAjfgyqY5SgDnU",
  "key6": "2ZhrzMFFdib6Z7wusEYTD5wa635o87nPzZW4gBtVNkm77B1aGgrYyreNqHLk3ytNTu6PXDrbctBdfgjGMnRMeJEd",
  "key7": "66tdpDUL1wgu9ECZFxdSK5MbpooiR3wTv9TWEacZd7Rs2BcSAYoQxQXvAmMCe9JASKqJXZ395rXJC3JLZUviS9Tf",
  "key8": "61KMD1PYm69KscDKM9C1oqVpFp2PUEg6CcdwKeaiGKRB4yNm7aCtK7d5KvMB2ZmkeWDj2ZE2MGC6TyrSxU2EJmC",
  "key9": "3muX5ZcZ4TkrL4osxxMTVbKuDPioYYjBCNtxeerdsEkTDS1NYBvyZgRNfZ3NX3XjFhbvf82vHHoSE2LmHNNyeSuB",
  "key10": "2EzR6XjQbg1BsLtbVxZKN2esgENQUkDzgcpPPr9X8t6mt7E6sHCghJ87tAmJzj3fY1gaJuwQWXFn9Rqkg8daTQa3",
  "key11": "3TJt9yBpv6jUuCZ8F1m9fGmNbK2r7o3MCQoYaT56GrgTJoYQqZ66hc8LWkJwtgvej2QUVgRDyhg1Pbb4mdB6S6hE",
  "key12": "49fqj6myiyeha1BQgtviC8k6Ghp9GdvoSixanXskV2n4yHSwuoS3BDAmdtZYuBcQ69RVgZqj2HGDefvQmezWyBZy",
  "key13": "5TykCMceDhQ74tFo5r2SXMFxjvj19aTaNVmLxU6Sj4vLoA1Smtei7MRkTbktfHgVc1V8FXqo8wqJendKn9VzZopz",
  "key14": "5yKpHNgv6BQ7JEqBgiqnULAUMmpC2D3ioMN7uAedJr71R8tnRj3LGFtv6GajDpY699WKvEmKQFuoSdpsHTx4k8YY",
  "key15": "J4tpunoUx1ADnV5iEYWsypdgyT4yom8pCeUzdJGahtddz6VTWAvyxfjGknbAtx3tXWNodx5KgfKXADgmwgyCYJz",
  "key16": "25829YYjp6BWXwLP4KL9xLyEsHGLypyb9oroE8sgPAHB8TLE4tKSnPRD4CYsqAxzGhFxQXuK8y1VRKw9vi882QjG",
  "key17": "4jBUPWevpiuxzCfEFxhvnaedwxsE7Ta7pSSdwAsMC4VRwzzzfWt7AHdccs145r7DzZkShqiVhpoBHKRiD5xb5kkd",
  "key18": "2TEBb14BAcZHWJWcaVtPqioWG4LzjtQoccyXrKtPSfNoSmd9U9t9JveeHaxdqye6nnxTVKJGRpAjPK318iTD6Hg",
  "key19": "2cRjLZhwFHDmTrcPz53DSSNMsCskMxrdF4JXDL9RaR3iLFBJEJaJ2PkQ7PhACvTQaLK6jQQuyvSFWruLPkjKZTVB",
  "key20": "2pCsqEBCb7yDUxqJbo5ErBMfPJBp1PepHqSdQgSB3JmMJGn53tySH4esM7H9TTEx5K9S4L3Wfa2xiJN9ah4w3FCn",
  "key21": "3ZYW1CddKKitpArDDx7ALUPiHh7e3H9uKsKf1vdp6h9xBUn1bZu3iruKNwhghoApB1jkcmwC5g2GbuWXQFHnaGH7",
  "key22": "4qufZVYvG5o8qiRLwd2bRKVsz8ZRJtKr9E1MzV9DP5yNpBU5aFYwETKVNZAzmPkcyTqT6jisqSAfqUTsjThk4PZS",
  "key23": "5GAa2idegnZniHfR2d9RpasGymshh3F1aBBzHtYGKx1vUj5B97kowD1i9s4eXn1R2qSybkqEswrpNko39gQ3nywr",
  "key24": "ti8p8rw6Ttr33HHrXQW8hN6nmG2N7X9NkTqWNqCmYcRGW3ioMWo3mbcTAY2wcz2zzg3kCoY9q8YcRdbnA9NP6zS",
  "key25": "8S9kMuc5BwT9FUK1EoRdWXCHyL9qTv2Zr1v3VvsntWiD3PXRJSbwX6fb1vJwZWSaf7JR64JtVoUDyz4CuLSoobK",
  "key26": "2jgtysY68XR2abQ5vz5h8zs1fnxnziDVham5vCuMfssmSVKjbEWWoVfHciTtAt9ueBesvLkTta2PuPZmQmruo7ZD",
  "key27": "33J6D2jPrNNFsHBtXqbtbYXnwfJUZaFcWUsfLhYwL6sArpPcCbR1q72vyptkrKhRb3vqQQMnYemMrJUs3LAABeqd"
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
