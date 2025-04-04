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
    "2Agt9Xz9bdRAPtt3Z5cHtxsAvi2BxwQcAe2V7ui3rSoGWvxMCA2t1dcqNYMyjGCkfGPu3AoPDNvsvz91YD1my2oC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xykEMP5HE2dwR5boBABsz7QM7vdN3pdeRwkVMTYwgc8EpgmQ6wRLzdayuBysCbH71WaXXFVT5XE2GD5gf4WdTCh",
  "key1": "Fmd6DLKDteqJkem2ATQmr9ZfxfbP6fHEqgA9b5yTdwsnogmQaCD9H1xvEWe4MNUzPbgNNek8MzaKHnnff6yGH3Y",
  "key2": "4C36icMS9Ui3i4qWLCWxthpRco1KTKafvfrAf3rmusFikJKr6mr26dwRgGpQySAYZ2zsmLv29ut4GsK7C5gVufui",
  "key3": "5S5ms998xJukubtdDaU4mNV8gAAdGpP3bk9A1KWJZHMykspBysHUJxSj2TSw9UKtc4CZWrKJyM7NgXsTymYt34Lz",
  "key4": "vNAJaA8YPikeDf1kKPvFgBPG2M42ohneSrH4hHGYm43cnZwXonwoKf7b1D4MAa9ttSycbmPaNkMwrAJfJ4C9F21",
  "key5": "2TZirhokCjshUHKfy1vBfQhAVJEmZvy6yKdnVf52DRceFFL8js7WvktrueJkXXYFgtKGRgpNcBDKbaXe6vPLhoW6",
  "key6": "5Ro9ieD4JsLuxMJ4BccD5U7JEUFy9FnfyMJfBi9zzA83ZKWRq487rcv2vFGa9jwraR1HtMRcSUPRub1kXeQzzjd7",
  "key7": "5ucSLDmaQfhmXmffVNDgL7HG67Rj7YSnJ9uJEt1agVGs4ZCRm5RAfKw1muGCj42oGXWnGsLmmyAmc76bYkuwEQoY",
  "key8": "34xF3x2nAHoxGxYpDSxFEw8gsZWejT5D1FbizhCBKZ2ooYGbE6ED17NkJ2vjfrqr1ChtPyCkDzfCtoUNDeTUxovy",
  "key9": "2HXeTCUpJCD5VoYfk115TxPjMtyg1BPE2S3gEKuGVaSRWcYZy1fLnShNosCbvFvQuUuivrYq5pkqkptL2QnKu5pa",
  "key10": "59vjLKHZ1cgUM4hZu37wq6BBrQEcxZAnrsRuFeMVkNqpdaZjeFBbWXAY5ey1uc82fsB5fQbH2rtDWrHyLQBnfKqz",
  "key11": "46WZWZTjr4K11ygGraai84y8TffdtvTiTj3jNxjPdSdpSL7uhTrxNbSGaNAeHoyHp2jFh5DeNFRscLuxF8DU6Ztj",
  "key12": "42hWnT1GALf2VFdkRLqf7iR3h8t4WvLAE6dErSdwPjSdM81BrwdVdT7Mbqpbkgtoa3Tw2BMCNkLweSX5o7eEmJHc",
  "key13": "4oa9rNav1KYueAkg77158CbtEWaWHUwppEqLPyfmzPAsEyD7vmhoFEBDto3bjrwCytyQ7qW34Unp2UN5eUaQEB5H",
  "key14": "2hNzccKPjMqusU7gE4wbRFFfZqDPWZfPVj4VXtDtkBuG31Ya5Fw6LQgTcU5qwi7E99tRgQURjrQhgesEieFfgT8R",
  "key15": "54ZK1vyQ2RHXmE1jZZ64VCv1eFWkdjVaLivmjj1VVFKWDKobPz1DVXb4w4bbYwXfqZfJTndSuscyWLtMybJ1Ht8Z",
  "key16": "324pAPxC5Soxei7zgvv543MBKKRbpUboXR5HEC9EvQqx8EBiiRALpbbpfiwiiogdZg24KpNeAYyb1HbyrFutZh2A",
  "key17": "2EzoSQB9u7BCojz4dtYqAPWJVMeX4fCjwy9ebepBQLFCTMSwKMCKa2sWH9x38VTt662FhAaEk8RrL7TkPggBuCAi",
  "key18": "5HGNRcFMUMWtZ3ZZFjd4fcfaUCmqmYVGLLJtTVqHEdwMc8tJBvhYsfi9GSNnhs638FrWQd7JJv8sdf5inj3zPjmB",
  "key19": "57rYQc4CadKGM12x6cZSmRFUwnHoLQP2fUtFoPUNbKPruiaWe59Zr3bmpSsxhFYkVwgwTXjnHUNDCrmgbndVRinL",
  "key20": "5qWY4hswafim2E28YAszooysQvgPTpnfLSCL5b8JmPdvia2JBHhZXs3FcBRbtocx1bBWsXRUYBZjhmDXe1V3S5hJ",
  "key21": "5vHewX94UuPrPKvQ7p3PEGMyfoX2zgNoT69B5Yo8AvMu6puqLcvWSY8pmmS3zT5EoykrrjGaF1kPezhGwZVesB1k",
  "key22": "4vDYv5tyW5mjT33WpnciLxBCU7pnFu1ZSpgXPiKhypdsKNpTLYp2XDagy4zE9hd76fL1xeiqLdU3AjPtuJ7szXJJ",
  "key23": "4DBn8DBHUM1mxd71mjMiS6BMa2PopWvgs4pUTE1erESXUFLPeSLAjVLgfcbgucpu88tryAACtWS1XUMVMHB9kuju",
  "key24": "4BUZhsbLX9wKcoAk9VqUpYqVC4GWxbyBabE1ktCUGzWYsshWFPAGVS5GDz56Ze1xSDcTh9JhcygWvCxAUhuNVz1T",
  "key25": "2fuCzjy9uBrvbARgrFHZZvqvU3sFXd898HHbRYMvt32SfpF2mpxvvALjXVBPsSzDk4kT4ygdwhYqDDo2jGZ3KCwT",
  "key26": "4mtofrhSJMk1XqftP3rFAK46KjaKGEWmH9eT2LntqvA5EXwyxkTSmGZUBVegBB2fbZnEBox38wYENPs9hwdfmxph",
  "key27": "mGwKXCwHF2HtvUBJqRvgMraZQxTkpodFhnHkD9EZLSM952sr7RgbqHMiUtpuC4NhT3KrBWDxgbnEeVUrxCjkm7f",
  "key28": "2NJMLuLQMTDstvavmd34AqEmX5k36RZZum4fRwPWhcFdGP46Yb4bP6rDfwA69WewuWavyxZTtHmDBFdykpQMGQ9B",
  "key29": "37uLJSgasfmT5oZLUMosC6pAgzHNPiL5BYYb6UqXaA9FFPNXxi6etDP8FNYvJ4CUU8a5ofgjyy4gndCxNKAYNhNj",
  "key30": "Dk1eVUcgYFzGZHpkXA3ufyUKPzBSbp5YuzEFQQiVckM3kwodbgdwBTTAt9cXixcdirRiT4T1HMUhwH6JfJSAk6Z",
  "key31": "3jiWiMACW8X4NGfdsgEZNJFFAbEAudbK9J3nGhwZU3VXSVWrZtea2cy8BPMsexsk8my2NnBfUmUWuGehkwNjzZ4d",
  "key32": "TAwCaj7pB5CqL7jqbMhZopPz5YktSJGsMwxT2PuzXbFBEiKKzHYfTRrNBMHpxx1XiT4AA7aJnJaVyLTyfCAZ3kX",
  "key33": "3FEndXg2kRNAPZcq1pyjAmfvGYPRpTAvasomAoLP3UthBQGpqWk2wwvsfoy2tBAoSk9hyLh6ypYhxb1J2qYLmNMD",
  "key34": "24JmZ52rSBZ5PTE396XbiSyDdrcyy8jJLTZMecd38FAdQpue43gqCqsDPEGV44kGHFpSiGMWzKfLzJrXwcikMsXR",
  "key35": "4JSKVDj5mJfwydnfmSP1PNjoqGCC3VV2CYL39ZEwaCLZxzvQSHQNWdbzSzEaY2aqiTK2o5LzuCqW32P4k5h3BBun",
  "key36": "2YihmztQUQzwsiXBb3B3S4cwqkNLeZWeFV5KMpfa9aYri6xSnTes2mzngWugkdc6VgSUPVDv1AYwfiEKpxCQUSQA",
  "key37": "4SnY5bvEuNYGQe6zPfg5jVopA67r4mcBaBY8AgsBxz7wd5f4ATZFcrmtA93oESjDPNEN68Qja44bkhNQnmCz5vMP",
  "key38": "4yw1MSBfS67ofgxpZRrpstM3TKCy83fvzFapum2cHELtV3ErZo1XgYxLzRQ3b8VJp3wrFrh6wFbJMErW47iLRw5A",
  "key39": "59AkYBwrVaTKF5AjGHos9Vn23Bhh61oSjgv6c9Eht8GyG71UQ49zH9em7Dk2rge9a3DD3YnsjtRzFtbqX7B79gcc",
  "key40": "2SEUxiR4Hyt5rgrHxNW9ueo9Riiw7B9Vyx3cHE9op9FhiyrUqZsgZ7BstqtsCtWnv5mdFQaSxcK1jaX3QKSQingB",
  "key41": "2EHnHhqwyUo7WnTnToKUCaSnDpoWp6Rf89RvardEzh9EGZ8FSGVpa2HaWRFMd9QKRB1xPu64DnT4VPfhAVc8oxBU",
  "key42": "22VGzgb75uS6RrnUfWzNkqnAru8g5ETD5KtV31NjSDKmqmL2CQgo2RgiqrU3w2hkrtL49Bh43FA14fzvNznTg8tE",
  "key43": "3oicHzWWjEKaWpEXJRigN9P5H1uuk8UH8Nk5dpadJ1QT15wbFRB7riQkaBsdHivKT4LFw2ijRyNsaTMer7Pn5fiG",
  "key44": "3XRVn4Mu76dsiCtZB1HRwuUZn1BUazgfaVbagTpqoLAkpDwPXjGt3KqbU7xvAWBsRxpqrYApV8YdgqgqKp1TRQi6",
  "key45": "2JUHhqLLzHtViQ6hHjvdFFinR4dnKvQBWF7mzsgrTuy2Gk9XCcsTQTyTrApbzhZyhd1FBKv92waavR3b8HMVyWQX"
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
