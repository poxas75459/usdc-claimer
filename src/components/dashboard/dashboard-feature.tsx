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
    "3FShu3Kgp6CifiR2vFqh2RWgAYA8rJ5XUtTW6UoSZxo72jS1o2ARuKRh8ao9JrBuRTPdybUGvPZ8EkfpGCixshut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57FaBqXWRK7XPeHCvvXsa7cQEQPHV52jPBiHjN72U8nbk2VC7SP2H1Q7W3uNDWvKgPmfr7K3ujq2QuRTpVV8hvfn",
  "key1": "9VqJAGXrtDVY5FuxjSuEWpKcEyn1HqsWSK3YNviWJGKxqE5mnhM4JSGTeLPBeTxJWzh78qK2yY6EYo2KtwRs1KZ",
  "key2": "4hCQ7KnRkTZ2rxvamRvAqF2KwRm5thAducePt6zpL4JqMsMmWhgv4YHq4JHHKzDe8q7YYLC8DL1o4WoR9Qzfq2Hu",
  "key3": "2u1iwoYRqVYvP5dT64VVx6r7zstppp78E77AUj8aSe9DcjkhNur3c7kSM4zUFyGJuiXJcqVPCDQs7mCcHUZphjNb",
  "key4": "NfBiQdK76tejHh4xkAtbfvECpPVoGFUq26xg1nGXGqNtRK7rZ8xiQCNvrA9nf847R2upxpvj3gZcMkiGgNQxueU",
  "key5": "dbxC1CM8cNJUF4iL9rND4WFjABiUXdAGySbdpQCT7Cv8ho3ViSM2pRzup2oHBB9DY98yrp3ydD6GgReQvPpvawf",
  "key6": "Dt3SsNtYeyNYLFcPQ3RgmYub4ye8dYQVBEoi1HAxt6xNt9jgLW1K6cNUFoDPeiFQB3iczsdoB9i4V3q2abDCUtf",
  "key7": "2Qagfye9JsG89nvpWpM7Ua5KMWbijesJtizMxi36VQFKqeVm28mDW1fks6BJsFWmPedzwEdqLMpijDPNLkiFsSCn",
  "key8": "S9wMdWz3ge8y1cV6k5rntftmwcXzBHiGG8USCi7HesbrYZ8AR9C6ZR5AS1dZw5zcZdLUomzWFuamW2vDkSejwN7",
  "key9": "4i5qj4PHENLzt31VFizDgeZFCWS2NdEepxgWAf5SeTnn8a2G3zmrhD52aKpjxCuPGugT5Y41WX1F7E6oQuCdSnbt",
  "key10": "3zJvfsbHdZSShHbGZA5rBQcPtQScZQvRW4YLxQnufwdmNAUTH5RDQvQRMJY9pZhz3jr28aQB7dPnn1wS2xfj3Ksk",
  "key11": "2hWX7RzeMjWAgfy8sw9XYFcMyz6K2YdJJdNSJ6TPfcxKht3KXGmFNMDWdyDWosibPg3gGPZRTnKGSjLJg3KbKa2z",
  "key12": "6oqX885qPrgueFmrGqdJ5bjokXRwxFdovxMCiitrTcnag2Tt6r1XYE7QWhZCMz9be1yhkU3a1BNGfg4mXhNp5TX",
  "key13": "34udZDf7BVcnwNZoNScFYdthx8QAjDZhWHFRkocg7ehsJ8CUvoWpiKReECasBAefKeWGh1Di8TWfkkcUA9yemdNK",
  "key14": "2w1Ny56U9TP4QQBepoiWFGa1mEiKCELtKq8JqnJof7Nontjafe2y3KkEmK2BcNAjD8NrxMQYoYyqk3VnvpkAAzKh",
  "key15": "61gNDCWCh2CRnEtaj8ipevYZAZyHqU9NAu6cdCBK8TJoATcuEu5xQZ55NJGGApnWgxi2sDqeDUX5B4tbXaNgq9b6",
  "key16": "3FgWnyiGRTXT8gtnyF9STTA5rxsoVFdPLyt1KuuYFd54wVgUM4jiPUJt8fYnyBigrLQHcHdgmB2L3b96Mo4rgLwq",
  "key17": "5CrpVjYvSUMrS1Cf8DXj3J3vtiBEerjJGs9ZaSTYmFytPEppqYodbmR96B1RBqrYtLaTY6xuHPHgySzuhYFxSR2x",
  "key18": "353aRapEz9RGy5sqUdmAucpEyuiJfqPpm3qhst9tsVVkckjaQoj8jSY6jg3pz2o4jS1Vfzdgcj4xVeHma7BQT39v",
  "key19": "26Mx26Cwa6U3RJxYmKJnE5SaqfdV13Cop3s112KGEhMtfQ32S5jnaCSyH5Rbd38GGc9D8QoAXPhrEsK8Wf8cUGui",
  "key20": "orpCkCab9j4yr1tMa2jmFznN7q2TkKXJXfgr2JqUMtZCRtbFvTvnXEdSEyLwVfBxEAGhZ9RKkdcCtz9J7tCJT6v",
  "key21": "2EsZwWjXBtqd4oXpnHeSxDWV8pH2qtVuyGHrL2sSXfEyr8upPMG34f4EkbUXeZNQsddc7xq6U9kedQfFpn5d133g",
  "key22": "3Y5dR4M2gNXMdnRZjWeCnWUJexT5LZfJgusjgaD1VaAALydBh9yDmuCne54aihXjQNEm6s713t3bzE5HSANC9Htz",
  "key23": "2DZxUagE48e9DYmjxySiMkqQgb3Wbzo3y4qiDcMUcKFWtNMewBYhQio5UVPzddnrky2HC1ihFR1DG3JZNhNeN3FE",
  "key24": "xe6QEwEJ28EskcvPHKzcf5326VJ3VoYFX4tFDozWFDgKnHBUb1EgqP8DmmQ3Z1UyCVrBe8y9dzPteM1Zr9aFcYZ",
  "key25": "5rku4oZ8NxEdzrX3GsDJBfZmaWMByof13wJFJh7jRGhTkpFf9reG8ZxHcmKhaPPtaBXB2BVvqx4bW8UaFsot7UjS",
  "key26": "2ChTZK3wE2EUcLwSMaZgaSu1iTwfUdi1ZUyizEPFwGKRZorK7Fczs88Kpdp6aTbtyvrKf5tQ8L9rMyPJhoDjrRSb",
  "key27": "3wfZYyET6xE4h2jiDn6quFp2Rsc6Rmr6y7z2ZCyZ9kwGVmjcEQDpaB21miLmB3DeiprggUjdH6VBDCw2MLX14JAZ",
  "key28": "533AKrVfENNnG1RpYdfEyd1XEtLA2k18d7xt97XzyNDYNDsTGsuyMydKrH2UCdSo1Mu22RWSRPTm11ZXajveTyUW",
  "key29": "2v6vT39UFVVX9ew3VdWB93pc8YunQToF45VAxmrNHDJX673YuLRujqY7AaVTUsHHtajBsA56CMoJ2BnznKEKqbsy",
  "key30": "ygLYwFAnLbDUvnrnpqzAhUMccFUUo974WXV3SQD7EtaZjPnqeDAorUxHihTJuutyKTU1chFYeDdmKzoZ7EVN1Eq",
  "key31": "2UTqyUq3KjLtP34aoeJofnWEsCnALkAqmPqB9Ktc1u8mx91j16gStHBpk72VwvPMN9QGap4t2KKawsMGDs84bcmm",
  "key32": "YXFpexDHzpPT1w61mNaAeGzFsLdW1N4CC92aBRG1drjPeXTaHTS8Nt5MqapkiGLanNBhmj8uuz6PLa268x2dg5J",
  "key33": "4pVa9VCcxoiHJbdL3Zj9ZHkLoEsc4QX2i9DQacfjzAjDdYt3fUFSN2nUK7UjFtU3YYvFdJeaq5ihZePcCheRV35b",
  "key34": "3gqfPjn4VecddoM867KdXNyRnes1WC5yW5jeqd3ajAV9T5DwpjaUCR6eu5t1N1dBo6LZhAc8qofr3EZexU6zSF3M",
  "key35": "36ZzS4PKSXCAR71YN3MfpbXvXqdWGjUf8TDoYbVupKjSUihDv5TL7WHVBEk6DCVVeeJ3BzvmNPLnzcXFCnvpWLij",
  "key36": "4MRyE3JqbGSn3pPY1GCZHfJJiM7MubScmCEm6EgH5LeSXMnzXPJfXKfFf85ToQzkTco9tenMScdpxmzPvDBuoGgK",
  "key37": "5LB2mZfQH69iHTGHvA9YREUEWoPFsbkgAZs6FfopddKPp3PhAv3zL1fvb4ALbPjJjMKpEFeJ8UcN7YcQ6JukW9BK",
  "key38": "2uswTwKT7xzLj3jjw7ma5HkX1LwGUyUFp3GsvqcXTGwbioDMxX5AMPHqzmrUt7CkGJ82QxsmhRgp91kbFZdmXeLY",
  "key39": "65dnzL7iU9up9zS43hzpHehSNdjjcuLDwsErJVLnLpiZgQ2n5ivn4rJCykpNH9cG8Tg83YQdpYNAgxZCWAHpdsW2",
  "key40": "5SkzZD74im91Tcj4oHXXmJDjJF9naaqskDrttKm7FCdWbbywhQEPe25D1GUCU2dHvmYMHikZrW8py4pHk9P3A5dk",
  "key41": "5ZJHUxdVjbJH3Sp65MSPxHvLV8CdEEPm6awt45gtMFcRbJeVaHfZaf38VbGsPVLfZ67EjcunhbrD3W77tgov8wr",
  "key42": "2iPyri5ES6BX4h32NMWfVwx2F4XHd5N6MzgqtViZ9pCjxpLM1tKTMVSjj3efxv3JfF3VV5WbqxzXtnkxQJjKam8m",
  "key43": "kJn5fxEfNQTbkcgzT8JWTLhHwtpYkwyJg6tFMiSJNoUsEyBCL1xwjKu8ghmHP3422vks88ugw1ucG8ftiYbnqSg"
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
