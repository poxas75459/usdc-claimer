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
    "2qHdqn4uL4HK9aewTjaoqoQFQrgtyNbSqxU5JwtceZUEb6w5rpayHm6QrbAWuo3VGUvRLau4FELKQr3exWRZiiaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d7KgtrV7cRyTbthkHNXb6iCuSBuy8F1akMsDKqbKJPhFeyg7DvJ6WPPJ9QzkEfU1XwHKUcRY6cPe4eWhr6LscuS",
  "key1": "61xxDyt3U3cjaWL6MPGRKZf4rAr3kTh1dobTRAm5MCZrUwwQjWga2YG8nruuBtdMb8nrjyxjWHrA3Gq1vb7iTuaR",
  "key2": "2CPVjFmDfQYvSzqHp318qeycpuvYaVQopXn8VGRNyzgAjQqwVfEQTBYEG5Whg691fTfA2LGtaTcziNd4Z3TJLLVS",
  "key3": "56mS212kAVwCo7XsSj23g487x8e8UBskdfnGcrSkwi5J4F9GpoxJTjhJcTNZogu7ahouwpFCjA3fCMivGAJGeyo4",
  "key4": "2JieApn6xkS5rpHbPXvAUvRqAK8FZckXFLMQ2A2n43HBeC8maDASVTgkB5UGYrc7vSEYPA41js7WtCCVFWYAi27N",
  "key5": "PiWuWbJL6snh8GJCwDSZmAFdX2aZ6Wo4GGNmMqYJbGgLHV6syGh46CtTME6joUhuLCjSk5845MuEykA9cBr1Wd8",
  "key6": "3BdNpnAPMpSmmUx9QPBm3fDNdYEsQJhmz2rWiQAXDDNXPUiqbLSX5okF3LLscU1KWxmopJpbfVZFyAMZ4WnfsUeK",
  "key7": "2YUaxPDZh2qRpcgahbcUmVmuDBSfxzR2qdcEniFwhiqQHHEr7iPqUnbnAkXakG1hh4Jhv4h69Qkuhj7sg8oo7qUE",
  "key8": "FuR1dX2u7MKXZQtxCw436KCKVRVvmmiwhz3bAhTkKCjjki2vBeNUgrNkH21mz3mg3dv6wu1HYXbSc4FT5XkAjJa",
  "key9": "LpCGBi3FidAwFjGA1qqRtuUG7QN3KSajNVQcnQUqCzkBsHFmPGUZrMAbqvVrbmqJNBsVysD9Z8hmmwGmwc4yQsf",
  "key10": "5tUXPCNSS2yMXYHrA6FwgyUcFo2dJRygdvpecm3bLR6jEX9Z5jwu4owumsSNGgDPvxEBWs3DGrWvGqw3uSsXpDDY",
  "key11": "5pULrVhrBYZFcwB9K6CyDvZpjdCAKV2mJXnAJChw5YrfkBD4Ao42ZKhdXB3dURVThN9f3pvvSiE75LUX59H9HzPR",
  "key12": "5NqgeEUxL928yUU1ibwbWWdfPUepBsr6LJWcTozh7wS8gpJNpDEaX5mHNuXxdjZfbhLKvq6RRSujkKs4nVDikUXD",
  "key13": "31SSqSsiawKkWQ8nDfnf5sucYgpac2b8WxzeKBqxScH9DWp7iDEpvcW6FTRpX1U6zENyPDiiPS9RpaxiVMWBqwto",
  "key14": "quZJq82DmhiC84cCA98ueXiDxNNjg8WtedcV22Hdssq5bkaQG8djEbxZhUi2a6tSEhiW3HXs3L8UcCTCLR2irpq",
  "key15": "mRve5KZ8YNvhfWLkByJjaM4WknDw4aHygehigbZf6KPGY1TupmuweabMspvck8mWi88RmsnRGLP32yrCLgwxNFg",
  "key16": "62NHqTtoY7ferbk1bmZfZcqZBZhYiv1C3Wb6zRsm2P2wkAyN5gULHXamqt4A6BLEF8Yg3Y2QNnspTi2GqoKbUjsD",
  "key17": "3tv4iocnc9xBYW6h1QBv1x2R7t3CYqdUnVwoTGjY4s4DN83yPzeYxxjVVGJQF4dpUF7RmmocJgWeVitXvpgwLsks",
  "key18": "4AMMcyT29YTKsKJgXMQEoYp2wxWuLca3MZYp78JXeEjcnkZwofDETWL3FtLF6Vxx1AWhKspGY7qokj8Jwp3xNaM9",
  "key19": "2rNqkMhGDeffJKLwUuyJVg4q24YWpoT525khak5iYbyNRJs5Zj7uNaKCj1MReE1BmNi29rFzGKBe4JmHGU4pkkEs",
  "key20": "21usFWpMvz5fT8VtuYtXqtSSWWdR8vzwTmLrCJ8MsL9BrycazuzZuoTcBMq7tVR9zkXjaDNJ8BENqRpcSMu7Aa86",
  "key21": "3ZqmT1e6w7vmrN8T5F8vvW7Y6iQ4jQDRdbhjU1fcKzhmV2oedDDwmgMybXxMbQ6r7aA2PaE47aKqQDrkpEnCvKEM",
  "key22": "4t1DgngpZkMAHJcwE948suwksVBzEGiXWieh7hX7Zi5Zwy2DKzEEDLW9ZhGJQsCPRhR36Zz2pjHkcyHiKh4SkCv1",
  "key23": "2X3xFugSA56y35pMDxYVeMgbBwgnxPrPJLqN8DAFqvh38bQgc4ScyQHnrYgXhdg8sjJsNMNXGZZkG7TnDoFkfFFw",
  "key24": "3iri4vEbJ5pWCJWnrdNDPK4EMrxoEhqGyHEtW2862Ja8pPJuJHHhxUeNhupoTuBjF5aDHaNtrfmFF4dGYDX2DJUW",
  "key25": "K39SCVqTDgyXa4eYWauJSBHVQoqgDsA7K2LKmAmo453JcHr7PbJPthF87xmLP6dYaWdjkPC2443uDx9yATA7Tfw",
  "key26": "yLcKwrZFvv8WkGy98kdUAF9RyKBsrR5hpAgsgsEeEzhuZy3Q5MJSvRo8RU4oHmFC8TQkRrM7avJUiT1GXsvFhYM",
  "key27": "4phxAYJ9dsB2cYobwEKfagzMTfTtpVQ1sexFv2NESYnfJt5KU15hMfekvVCZdGiYHCzgMmSD6hJz2HhwtxUmnqMa",
  "key28": "3ENXJZ848KqWqpvwGZ9hZAUCvKeecsk1ZgrqNg76wUhRcMTQyfzDt3kmcYQB3sgJuYL5KQyWWu93VnPJNy82Eiju",
  "key29": "45ssKhNMdUBFtiqdySynSMe7d4g4NwcPHP7eoGbU9M6LR6RuzvRFMCtAVqpoPMvGT3PmKCU6mLcRy2FtLnWmHGUo",
  "key30": "5TetriZ49bAiB57uaeTSzHSyVcnuhthpkEVBfXuLr9Q1gNGyyd3aJTNZWqEpwtDJ1ynkN6oDJxkrKNipUhS3eciL",
  "key31": "2pq8BNQMuMhszwr2ZR5X7sEWrjmg9uEatqibxW6B9XX1pHw3c5qJTWifsxW2bP4Fnj9SWUCycswVBp1pjZUWjHmj",
  "key32": "3r471Sr6KK1LbzNZwvkNRWxx1119SFUfr8e2ydGH2mYPZDDfNCQyFwmSnKUHJpSCbnrCEhXQurqGEmKWvsABCQm8",
  "key33": "5GthefbQTnKm5m6Jz6N5ERPwxSrkpnywK2jcP5QJQKTYyB82WbRggDgEoV46uKQCt96zZgBEo9i7Rh8DTvb382SY",
  "key34": "4pYcerdKrWZm575bufXUGFE4VvCUGQpgmCKVGGya4EsCHEYem7NQDZBn81r88E6zMXMCZPpiZXTYDaZkgJLtEHAt",
  "key35": "5DT9A92AceL95WcfL7ZW2vQftuTMtxeNAw47QzRPFFRbRvSRRDewDt9tsrWSBmdQ7MXh3A9AVc3w2v2tqvhBtafd",
  "key36": "4iFDGfExkzdKwvnfzwzKTm78WUwKq2akZUfdn86yv9EPERZxJS5T79nCnP34sweGoP87gHPCgkRc5dGUgZ4dETsM",
  "key37": "2B2NGwvCzsYy5LBzysWRbVHv7FPniEfHLyVMovfNfg8zb4CyRC6v1nXeJ1cYiD3VAq3qGs5jsEBmv3GMXTYi2Ss4",
  "key38": "2MpA7YmJv9iZUA51S1GWnRhiicuSackMaPweneTNxBPBMQw8E9VHJwd9qpSLeAm7edqGj47S8YDNkb7y2NJQFHvn",
  "key39": "3dibsG5odLEonu2eR6PKxu1G9LcyFzKzQUCxXLS4Hj742tBJXLLPoUSZ51Ky4rLUVQAFb5BTQb3iQxsgLCbFufSE",
  "key40": "5GXxjk1RWEwpiBSFit7VtoF2cTMmdrUBrpxtN3coAXo9UkGNSKYxEWSjpYyuRSgcwQ4xGMwzzfC6N3r5bpTGFuyu",
  "key41": "4eVAmc9DkB14mFMzhE7gV9sZBkRGvtCymTyNhhRDCtF1xyXRwB4i3uSCBfa92waHGVccbhM42FCgr6cNzFPJfAZq",
  "key42": "5Lr8qUTbbgpgTnw7CSsDgy6nyz6GgoEhpKHsPG7vA6QRdaFRHvXoLxT3SbA93ySBaqZedQpBLrhBVTArjhamNJkN",
  "key43": "6zUbeg1DpEzKpwnMoyRhmYMzFsSQCQbDN5zfd2UvgEA8Ya9ZmqeDUqndttfydk4tAcX4xyrCfgt6c8Axeufr6aR",
  "key44": "4CNB2sXHTxgCktURqzrmmDeLsemKzgHGwqAmHTbic3iqYGn658TMzzgmjxiFYGjeN6TYC41ktjWC8UjMBpQo962x",
  "key45": "28YfzcZ8KLYa2JgRBrb4NfnQCTAtLyqhN5BqmCPYAo9jfYJbjrpkZdCtsS65QfeCKRXFmEXtdTZN1LmcAxmCQ9sN",
  "key46": "5wZQZWseuNRK2oTjC84k5RwY91oMGX9PsiFdKD77545sqPfRhGG9YUA1wa4fonoCSkNETzaNDSMQ6PVaNaJu1MZm",
  "key47": "2T55tncKV54JayMb57SzDfDUwzqz9v5MyXnFi29wHfSix4kV7fSDe318FyyXH3V5SorWSsJuMVxuCE4PCHRjPBAR",
  "key48": "2TJLB3optP3wsfSKybB7G91rHss7R8j2VuWa7shW2oZhjp4fgeU4y7Nf7d3MwqoYYikfguwymkCGmpNmJp3b1DjH"
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
