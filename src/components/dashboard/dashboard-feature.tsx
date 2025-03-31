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
    "5vD8Yz3HFv4sCcuakTLEJW3x5sX9xw9CQysQwZwpUKXvTaBtS4WhLJrcqXUCFLyRjnc8DXwqqywWsqNCRJZSwraP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495C3tPyUxoCN85A7GQNiWSZ6kwmq3fHtrtqmsiWtyE6o6UCkvqnZwe4YkMdDq4wofpftp6Y3fVmVVePxwA2gTh8",
  "key1": "5iHqeYyGMjNkB4mngESivf4WrdMp8fkq4LBmhkX68wk8q5pZeVndaA1Wo9xoSKforVzuRAZ3dFDyLdQAbguRhdn6",
  "key2": "5SxknoZ2RM7rKjfTkNVhDXR7HBxTXi5VBXfzhQrzVhY11c9C9GAhUt8os1ikxDjpuhNjNzG59y9oTn26hLN12hjm",
  "key3": "5ZcH7wmdygQ29rgBk1o1aasXCcZw4knaMZxfLLPCAnKnodGaLreeu9K5AXEPHrgCiQ7G7tRGoU5ftEqcofB4K7U4",
  "key4": "2xpoXbgaoP5pRHMZP3FDxHKdaxNxTJ2Snwct5Zkcj1RKSKEgmuXZsvs35ZHX9DKd8xL99zBWWZrmTAzzQuYfLQxz",
  "key5": "43NTM3VmpXZP164REZ11N1tCd8Ay8wpuxzU6FWFG6ZUDDsoQq4DzDHtABqACaYTwhHC5ehE1armF6wrmXoXCpn71",
  "key6": "3uHkaUB2wZfNZNkbT6LYdmaKix6zZtKRP9RgvopeVrQcxJVNuZhudkJZ7iZ7kWv2ey9Q5pt2rsUgfn8vTUReof3Q",
  "key7": "3gydmvGXQDkfNDZWhjRAGAnzimG7dY6LhAqgVZJNb4NdbFkS3CrfuFGUFugFd4h94r2dXcqePGBzqgS7nLswTSMo",
  "key8": "39Pm1AC6SEnFCwiL4fhrRGQVv1Q8gs8KXX3w86wu6GvQuorioWjvNHqdtWBrNmrCMSNjv1hhH49PYkU6w9gn815C",
  "key9": "3rr6g4CSYUf5kSYG9iM2miG2bxPb6PfwM7M7dePKLDNjyNZtNEEiXJYVXnZxFMomRe4hkhhQMv2NoVDbzaN1FFXh",
  "key10": "4JNEZobZD5HzdcAcxNwWEfnFRGqWjFGrcj2TpZc1RZoDytC39w5kF7bPNwURkQNiPuFgahpTHnFxCkGwzoaQVca9",
  "key11": "2aowAyJ2ndahcpM9vnVm1u2PKbEm8EzCCaEZ3yQSnBYgv5eXXHuNSkh6RvrcJPR38c72SPmK4Ax9detzPTi1fq7w",
  "key12": "5TxLBRmEjHjrrLeJQR3CwaBfADrn6VNNN4EFxmQoRzmVcjRGVTujtT4Whpmx9mbnbMJwxeJosC1ot1zJr1mnqmVF",
  "key13": "3XMYu15rzUrN1Rn8smroi2asqy76uUBMpeBN6CiGadrd1QqQQjvQuSdrCrFCGKNd5Y1ZJejPHJZ8NtxsWZgnbe2K",
  "key14": "2wy19T4vmj4u1CBVRYqH8rGjCC5rXVzJjtebeDoxKkC4xjVNrWf8sBqAstLxoC63S5yHtEp9ka9o8N5v9j5edTAV",
  "key15": "5rMxmUcJbZvC4QnX5GsmQQacqMJf9NvxWLsE6dswdDcPjDJpNwPLisVvdA2z74CXd2ZhkNe8fn6GFC7UdYyZYkcE",
  "key16": "2MC89D71q6fKphE2EQjWKubZtwosfLhgorJSHwZVe8WujtvceWsg76vsTsmfrTjLdepyazvCcKJCzJTTxosjtToP",
  "key17": "44sf6UfU82byDfZrQLu87mksenncC7fUfYMJU7cTtbaKnNdCn9D5ZQ4gcNMbx9ywd6RN9qRyP3y6H4EoeKFwEVr7",
  "key18": "5hsRXuWb5DQWQqprN3jbzzFXJMoyHpb7UggvPBj8hjgvnNbGUvKFpJ9A8wpaiYnNmUVsjzcm1PCQK4YJ8tM3XAD6",
  "key19": "K4mhfFKwvKRiihiBonTU8woyiz7HP6z4ykAhHpNeLaFtZmnqci2WhapSXsyJuuZQwP1T9ZmJmq6Bj3VLu8yENnD",
  "key20": "2Ur5JJ4sFqKZr7PJZt3MXLWnZCyaVw7N7rurpaiqYMeWZpfEwswozY31duWg2SjAnK6ZPqnp6zRPDoq9rUN8YSLB",
  "key21": "2hPMAch4EE7sUpbo5hxpEXSTjugYeFYHuLKyPkvpJc5aYbXMQR8MTBTinAJxPifov9hEfmzGuZv9gaAfnSpyoSbz",
  "key22": "5SWiFKCQcT6JAqXiHwBhwWMSvR7eou5Ts9i4hQSmiMmN1JydYS93J7VPBshtoDmKfr6QAyRGgiovQHeAgseXshYg",
  "key23": "2AL4Y39DSZ15VXUFVgZKUuHxkTSYsk34RtkUV9EnjAEkKNChifSZcuyEtsfA8uQo2riGD1ftNt3KbeZeaCJgghjT",
  "key24": "3cwP1pkTfJULu7nXj7G9tjdGzuiUwBadsVJeUc9AzvZ5NwFF8C3T2QsbhYd6Qgnstoxdsj7iut35gBQYviWPMw9K",
  "key25": "3TdvDwx78ByYRr84fPmx7161CUUSpdLKKpfDm77WowUYdSxi3sY3b2GoycZNEhWbxFrYNFAMKwgz291tHzP6rV4v",
  "key26": "2xs8qLrRa8WCFbe6hX5JXr64Va5w6zUBd9E5jXA6qRPVU38E5k9aRX8HWPhY5vXFFay9rStGcszjxY3zp9H2WiGQ",
  "key27": "2jcEiDWaejrHMQvQHJztadkLMbpGLvHM7QwEhfXp7MsxxPCJyWUSJsJAqrZ3tYeKJP2Xfx6E1Cz5epECwgHmfHbN",
  "key28": "QdYZz2hHztAyLZDUGgSLh77xCYLGP9SSvdBzZ7xsjVUbGLB9DLUmZzgLMZ4i1oJnKnshLmDybfDXakCvk5Duw1a",
  "key29": "58SctCzUMJuSgmQZ1jYKb9y6JrGsKcKMFYHduVdqjWQH2qu469PTKBnPQ5vSu23D2gQjNsjyctLVtgVwRPCFFD91",
  "key30": "2Vb8jxoibm4jyBesEPyVqphJwNzJwggcH2cf23dU8FgbRLzwMDJo7YVbpRUzuUqm49vCGn4a5vApHeMsLZsHhcxt",
  "key31": "2NfbimChGjuqCMzx2DXLCwHugRR5LSUeCB5v6vc9rNfPfJALTrxrbqWf7P6DC5uTkds1ZMh23oaasKjLpEPaArdv",
  "key32": "4h7PmiRgVbTLRx6tYE7TBzbKHtJximP2AvWjfexXuhKwsg5MgBQXVwa2Tg8951N328tfSZP5JtPRiDSr8c1MURYa",
  "key33": "4mJ7vyNZqdoEhGDciMTSSrJXBVZNV9f8RwkiHpBzkCtzLZ7yn9Us8n99RXCj1xMpZRpqEaTyLWLb2P4rL7qGLtAr",
  "key34": "3HS7oHptVSuFGisb2UfDZjSQgYdDJwJXYJ1kSVBfVf9BFjH8kcciVnMn16rxsWa2sz8zDfjZHqWCfuhVBtCFdXg3",
  "key35": "CepxK9A6RJejMvd9dSFxauG7CauA7z8d125UbWE7aLRaqmPdbQXjFQiXLyH4w1zbByyQMjcdLketWvNvdBaLsxn",
  "key36": "5qTjhVyBs72KjfFBD7AaJTe1KvRNKEoHkHFTLYBhx5dpxn4jM8iyyymvBPYhosKnVAEntru3ctTxrhgn8LFb3d2n",
  "key37": "565UXZZDuiLmgaVUCkpB6eJ2i6agqsnd5UT4419FPFdL8SKF5VYHwXhndv6E8k3HJH952uRLHmp1c4L3NNLvZQ83",
  "key38": "67EAivtoT9Pm9xgMVaJby9SoXwk6iZSRs2juNgVzrWmBbjhqZhMWTAx7UTwwD5wrtwrsdJbjhXzhmbgg3uShGCFx",
  "key39": "4MLt7P6AEWXCrsAXrMh36Q4xrA2W91dR3w3opSYBbuwZ81C23QqhK7QNiGBzq2fAPS9TqQWEEySuiwrS29UPtxan",
  "key40": "3Gt2FNg9hfs86Guw6i8KwTuHim9QqjYbEaNDJavkGfMATzrL72SdC9ra7Yi2PLEi8oDu2ihJ37voAvScRumu2FnH",
  "key41": "VfbPqafgUhNCqZLHhYnwzYyr1b1SL9eM5JNhWTHZ2uUMqccFDHRekdiZDR6KBXhvUH7EYezq7Ugatt9E7pzGy9c",
  "key42": "44d9GgzG8VmqatiGaPaVxAjZxwnUE8bzXakEWB8y5NYDWg7zsNwwTULcasEVv6tqu7HJaahtwwQp8r3JL8m5nXP4",
  "key43": "4VVnhkRezotBjg8H2QajxdtqdJJv7rCUKLV3RJ2uM3Knuwz3jfk3fb2EWFZwnEG9PfmjvxJpszHK5G7xcsijD8GD",
  "key44": "5UH8iV2LPZeMk2jteFena5qwmYeeJ2PQWBoqET1P6VT73at9L1Qs9Yusqkxok1Q4DwWV8YQ1JLveSckHMSHYEJuA"
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
