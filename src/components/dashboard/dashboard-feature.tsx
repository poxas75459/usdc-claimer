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
    "3W2wkq6GDUQA2oVr75TJ6SgJFRft9JR1DPDccT7vNzSde2Uct8djZMh7Ldb1byqhXqJCw4FsKDVqnvzzy2mPLKVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8qzvBQAsC1fJ3aCsEHNBaR5Dge8oVJhjLaFCF5Ce5Lq9ksr6JWaxUtbw89YXAcxKaFKocURmRWng9U5jtDPj3b",
  "key1": "56au5tEjKbGsRdAthdpLTS9EuVDjyM4FNNiwzPowD4WxtkmQbGkRr98qG3qBJ9vWDzMS48mug24xLJKmUSv6WFhe",
  "key2": "cVS5iPK9KtYuQrgYeK6PpmnVVed27k8woKi7bhZDNuDXddv8HayYPevmmckXSq2YyfzhowiYBYdt4AG5wQjN6zF",
  "key3": "5urSPecw4rAZjLB9oGbm6vJSNU7LiBSS2fvvqGvcBFm6GbiCCtiGzdEFhURHMqDNsHDak5MDVpPTSaFVL1AHBhkw",
  "key4": "5T9aKXFg9N3jGFKjQdTXNxJqCGLHt5WLiMhtz37jaF5yze6ZXfWhvWbUhTV7QS9XzcSk62akqnKUpqztwVG4zzc3",
  "key5": "5PZCUqJCdVqJtrLXHTifW1dF7DMXWnQZxAw1F2mTQoQEFyAUwgLQhjiqTu8fgQkSYhP5pZ3f2XaEEgue74oZfXEi",
  "key6": "3kzqvcQYo9GjbKbxfoJr5E5AVJ22eWSx9ir3GGeAY89q1DfEQoSwKq6J3gNVG2TxZyDmc1sdaNrKAUZKj3c4i7wQ",
  "key7": "3T6M23ULFbW26qi7JHYGU2ZhtpfZKr9WqHn13rLGZU8Un48WfWykFornWqzwXDw1ooiNpcxXhq3CgWUnuBrFUyTx",
  "key8": "4hV5ZiQhLFPKLAjJWVJEtRxB9SwL69unF4B8pP6UHnWyLrdWFcbQtkxsysE9VeRYyPuatVPhUhmUw1JLEePvtG6H",
  "key9": "5FKi7TspMzVWssgMcHRbjLXgZSSks2mzX7LvXFDb58XHnMfNLZMCQmX1p86otVsArQAVat4dxFXRzheZ6QVtiwQd",
  "key10": "2s2Vdf6teEuzgRHpStuVcDDXEA9d1hHGU4VNtWYHnxT6XhunFjzxo4xqG5FUp6rziFcfHwnR3ukhMDZtokqcLYkq",
  "key11": "5D2jRVcvurr1b2o5EjGmSALbVsfUJMgLt3RczAqogHD3XqMR2ZcatcAxsALQwnDUbsnTES7n46XXCvYifchGHsHw",
  "key12": "MTcdwJWkUB9RQmHJ3rvc4SWp9X1yKTzW8qcEJMCfnmzJE9WtMy8F6g4mFQWh47KiCHRbd9LwrsLJp85zm9WYAeD",
  "key13": "3mKihD1xhAT68ZbAYESTgmjCucyP8eipdHYkJRhmrbCzdgPufU9TcNvZtLcemTSd7maLjigVnD8Kz15wpCzN9rsj",
  "key14": "npsvE1a8bgWVxLDgxA3mbVZSnA1vGR9wML2QEL14SP9U7MrtyfkyjovGatk5zTPeGEtdpyzk68sNFEUnUFgZcVn",
  "key15": "38Qmt4diMKJAfk1tG29c8vJPeGNqmvn43SnXinkeZqzBbvSgbgT7sqKzMunK3QPJoQEDu9e7TMiB9zTANgpzLgQ9",
  "key16": "2vssfYXZ82zkAquDuzvJtfccX9MxQBF3JG7nRKjoygaZZCjvN3GMXYoU2uPvkMVEwzHfJhUYk5q1XBn4sBnykpqd",
  "key17": "3g9EV2NSXtBqQ2idgxd2jSuJkBX6GFkbB6Qe99wyfb2TyyuzQKBVDnRPfQCXE7zkyntDHiGFSN224Wb7UWTTMKMY",
  "key18": "4h46XNahh5bzbUCoD4nDz11kdgrbnpYUnKyBTSAHJTgpxbFWHbCrt5h9tCD1utdCziVfgrwRfwVRnx9JrqKt8cib",
  "key19": "5mJPkVUs94jD5NJTHm9gsnU17Y6KhaAUfjvJGaRnvbW4EoS23y3J9ZfegyEpyjrsZoJY8PbXqDme4iuD5YV4t35G",
  "key20": "4umUyRrDq4LmqLPYMErQkkgNtzyVBZDXEJPkpNifQU88ipLfSJsyLLsyxD9FwdtqU4Ba3cpZgGEyX2gcgtvagYvL",
  "key21": "4Mj2mcV456xnCZ1E6k67SG8pxmkMfavPApMGz1fAMoUWn9Q7oF49aBhKnaGTVz1KmaL88ehDvxKSxgYFtyptad9n",
  "key22": "62pDkbvvasq7ckKRG2RgJYXtA8XE8FBEjbXd9gku2ZdKwzVYdsJ3EfvhrCo4V46z1YDravFqUtab4AvptADcVtCP",
  "key23": "57gRwCrDvM3bfDBums5bvUyFeNDRgrMvn9nqD4dfYUu7rxuTZzEkdd37MNdGc5qb4Z1nbxRozZbFf4Pm2xp7PHjF",
  "key24": "NFYs4xEexV63f7PJTbV1QZALaa5hQeaC5JzpD3kSH26TRHrdVcavKvwBjNvfb2KRiewckkhqh8JGcfqRo6j2Zix",
  "key25": "Ds52bcbPh397bntyPNFaVr63stTiLzxu47VZ9B1Kek2eZ6tKmLXkjaqHWjBynsn18fNUFikw5hfoytS6nz1gmH9",
  "key26": "5LyzcaqMqQiEWGzhzbf72JBxsh4pkjfbS3QKXwPxwkmEJjLTgSdaQXrzUPKhqoYi6sxj6xEQmb4rqSgA587GzQJZ",
  "key27": "62enEfM3bmoB2XiSoiX67rfUcQNHgDpHqGVSLi5cC8aaq4VZtPeYHTbJZYjDRrd5kQPXgvjncFUqcAz8mFMJYEL7",
  "key28": "25HSb1qxpFNtVeKrVW1iiQYd2kvx8sSavviq8jnnfgKZeUQPWivXzhor81faYzU1AVBivPuoHsoAJLmudg4w13en",
  "key29": "22bFPCJUr4bBaxwBgy3XsnF2pjrqiVQxxbm9hNPXtU2eWK3hVu8qdoQaYhzDsPgp8pNmkAURHQytXVGy1tAN5at6",
  "key30": "5v3s4QQfmAqMdVSPsKNxsm6jtbmm2xM5GkvS2a8bsNAQjdwRW1hmZ3JeEF2coy66iekRwMEX7tUEZ9UfQg3MZYZV",
  "key31": "5UkD3fXh7GLCn8QsuW1sCSMrSRRi3LYP3e7YDkCXzj5cgkx42p6CwNJ7brrVxxbb3MUV9Q4J3T6h23QaeHexGfJP",
  "key32": "2o1EADSb9yqvXTJifCwE7tkQTEZFWH5z1xcWkcxHUAMhXgfffoX9zWBCmxKFaR86VieSAXdbMHdr4hCG23Zqq9CX",
  "key33": "52QMbEmFHCd9ftNRpKUijfdozo3ipXMCY51ffirjzPLrbDwoHyZJ5hax56QzF2YKhDBmwCGTB1HqZ4Lih8YYUAKk",
  "key34": "3FqT7qrUKrDKzU1qFfFcz5Luun2g4TDeNnKnAAEj2yez7uq7HBtwmKMsvbDWCDvZRNVD1Lon8e9zqMN79Fq6U1ks",
  "key35": "5Qt39twhDmaqWpiswi9RckqVvM5RDv7azNPrxpQvdRwMFRA9qAuFi7EU21g538T9zHndoxRxisxVgNdkMkkqNPDk",
  "key36": "48GoFxNg8bZRoTWmFeN2LQvDLxb3yz8xgrCq5PbN6AaRjhnUyhuivxTVcEK3i11AKDsMpwWTD8WRWPt9Gcg3PpDZ",
  "key37": "5eKb3NzEcS4y6jc2ut8qF5fJznXcvXVD1LPQeBBxjKREqg11yUgkLRQNasykoLD1TDrvctL85vZF3eBBAzJ9GaeV",
  "key38": "5B6jjyURKmt67FjjeHxx8uWQgXafWfjE9d7uVfrqY13aytJuTg92rCjKhVkQwPLC1fCkDZxaDHPVMtMkTQFX7kXu",
  "key39": "33VPs3VWHzoPk7cbKUsZAWusYeW8Dx2JVAC1RrKs7hGmUCMH8tdEH33gW1Q5cNN8TrPoizdXqM17vDVpX3QuodZm"
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
