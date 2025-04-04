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
    "4UsYUmgfTmzkveioSMH6gdqVLBUYCzD7BT6GTVhmqxaqbpb4n9yADxdndco7qqwcVtKJVEYh1ELAzJLn9nGcozuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZjnKBg1VEe94HF8FvWpXYgqMJNFnn9UQMtShc5SBBYTqW2WpTk18nAqiNW1bnG6cTR4YWYC8z8QhyeoPmrepwqp",
  "key1": "4ugRCtb7fEyekgsG8yTmbKSvjwqtsVHHaDdUjaPT3ktmo5WWPaDdUz1mZFJ5jy32P9kf85worPmfowJcVrLfEcCN",
  "key2": "4gjuX8Tbdf6jGnpfjNwu3hx9omrz1wnmzgm3CP52Enzh4VwcKruGW3bTERbSeEveidDemo7E4DgPF9AxpX2yyKVp",
  "key3": "xEUjDoZ88diZWzwUZpGSr5fbp7cWEcrpAU5FYp8rroUw9uSgDwALfrUDxLs38E6jqfuDJVAMMnPh3VpPvZSZshb",
  "key4": "2pMcuWkpWGqvTxYEJ4iF9KsSvHxcj5yZGyzAeHV9DSYtymooC6HEuvzwtdZuv1j9mY4HM3YaB8UsDWQkFankQJ9j",
  "key5": "4hujuAfX7ERsSqx6HuMr1qFxxZgsfiuJeSSebQkpigWBZUESRhCDXaZ8DmtUwMxrvrVKAHSjYbGuJaZt9WFUqvEx",
  "key6": "7YgHkDeNmy3TVXMPjyntfPGugSoMQYboKA9HGsm1FpCJUD3U8PhAhiZPuYjqHZuphQdUGwqEsTyrFiyrXxvYwsH",
  "key7": "gYHoiLBWcUTpUH31doJePPSnLNZnzwqiKP74FeSzGVoAs3bEXbTawfM5Vo6nmBqjAod51ipFjpPTNMTEsj5jrEQ",
  "key8": "4jku3wkjrymEatHQm5h3FhRcJN5yfaX8wFnUXs7H97GtwDVwwuJxcWzqdXKRN9Pz9MGDq6VVJeBw3YzfgnBUZLRK",
  "key9": "59D7GmcKqbncwvnyxVHGRH6Tj6avq4xvPCBcZddoMxdEW3pwTxRg4PhGi9RKLHXArTf5bTYQwU3uysNecaYrd5d3",
  "key10": "5LoHoRnngeu7ekBQwAHfYNme9ejdbJwbbvXoWK8sXoL6fGGRTJRHRD3qKDPMVyaTQcE1C6E15NynErMEC819wzhY",
  "key11": "VGgCKXxQq2LcU3G5xTxwpV6fumQ5CSCE6xqWeboTZnTTAHbWmUiKarX3cM812aiPDgzeRk85wmaoFAeEFxYxb5Y",
  "key12": "iMLxeRm3cSHJmjPo3Ayh3vrUiKoF2A8HvwxcgJktX2akT2Ehfc4eEmqB7MtfZzeaevb3f9r2Kak2o4EaviuXxjU",
  "key13": "Cn5oTnatEP489kZpJTpXDVxLemFeQ3sL7idR4bbaAUQD7VFVDeS6hduszD5r8nknMUXhcQWqtAbm6toDRdbHhh6",
  "key14": "SbwZjcVdDPa7hvA2n2y4mHYywzj1Dzz2ScpBW8ABj6pNVUHUT7uxCLkEN5YCndLPJbmEs1ynKGZSfMRCyxj4oKq",
  "key15": "5WgFMY4v2C5VeeYsnA5Ywr7VyM1BFPnnqqS6M7u3mv4wzHeWwvzPQTvqEFCwDcnS31goiYwaX4XQJF6K5ZUB5EZe",
  "key16": "3f8UHpnyJXDxEGS21PFiKBkvNe6R3SZjPt2ww4oRnvWs9S3mzAQsRiqvdBvXQHFHrVoZcxha4kqWHpufn1mfE1Ku",
  "key17": "4v5GgDS92Hb6ktgoqPchQSugX9aEpWh7vVv3u85ekJQySQUQ8wTgCbSh2UqxJmRW7wKAN3cQEBv727w2dnCwdSmR",
  "key18": "58DjJJjC6tWU1DkeGasU5BtsgrvaK3m2eWY18KD6AMdeLufPaFbTt2dJNg8xaTNJib8muza9dvAu6fhmXvKLod1H",
  "key19": "4CN5kLxe55E6STkzETFGFhBY4zfrneB7JLdpRXo3LYhvWwbNYNAhMrDBSQQv744s6gzh3ZRQhhKni7adJNGTZQKt",
  "key20": "631ysyqvy8NS33sGsT154W2kA5UFwUwM3RfiHw4MQFigGYAwonU2Sh4qvKzYNtfyksQf2fFCZn7bfk3hn2xMaqS1",
  "key21": "4cdVvUfbCvt7xm3Y57qEtrbHtE7T1XojSpuGxiYwg9tbHaW6RzADM7gdtfQ5GafQLmaJmVcKB3FBmpRwTQkp7dMe",
  "key22": "1RWHryLuv6PGvAnFv4kZMbqSYhAmVKEL27GU69wf187JSDnt8VSLXpetFG2fy2tiGRQkNS77W5fGMFr2SNriMSE",
  "key23": "367FdVXDhkFmMfof8PL9Zt1thdBb62Dum4BjmaNdHytvuYLnZ7Vte5A72RmeTcDcBCRTuiYKpD1SJbxqm9sKF3Eh",
  "key24": "3YRLB6yKkhCb3U8Db3VU6GpBR68g4sonWzCdJuxJ9QUAdAs7izaFngFGguU9XQx2Q61VLbjxAUEf8d7Fe25yp8FG",
  "key25": "4rwyStorvQMyv4j4ZYzjzBPWC4qfvBpBGcfg4YmCqowJg3SiJWxFJFPbofTK9RSryyph8yxy6emTDELrfHp4Un5K",
  "key26": "2AsLwsa8r11UnritBuH3saoPF1kkEf8s2aTwCy9a49EMyE2vf2NbdEWeP2qWX4F5QcxSSxnp4zUjcMLURtiqkU3r",
  "key27": "3HYiuE7ysJRwhGDnY6DkS1BJ7GFhdLRRmZpmEQ1A8kmsPZKcZE3Vai7jppjfvc2vm3mA9a5vNSYVx4pj3ySSnAUo",
  "key28": "5usW2znUZwCtNJhKDonpLuncBZqVAHYJLH29zaQsmdH6sK9mHhxnYjud13AiJpMZ7bsDzbnP4gEsZYBfbcxrJEt8",
  "key29": "2P3zrGmswKKhDUzCLBJSTsC2RhF5V5ukidoSm9zF7zyYdmju8oQmve7mgXWaXRhSQ2DaGVCMCXwR1J68UfGas3wN",
  "key30": "5xZBW5wRnexdwfX6Q4YYYs7uqySqzo7KpWX3N7kQZsttern5ZPNawkPiizQJFUw5AavE4fNcBWLGKLjNCwMT853y",
  "key31": "4h3x5Xmx7dzycLdf8Z6yPhhxm2R7NxUSvb9ZsWRxnp7SLQKsDTPZ2gx1dv2hJ1dXHr2AXUU2PbaB3g3yuoLh7Ez",
  "key32": "5zeWXNLBZ5cyeMVsNkmg6K22hX5wWbLgZ76hmwEisqKZumiRr1iG3bN41RxCbeQC6N5RSprYJzWgZLrhmCCNzAau",
  "key33": "re4oZYzWXesrdYfCSAKeZaZBcXhM6K4dwWN44gSgdFWWqEN4gyWkeFq1gT4XjUXMpp5dh92VZ1oBdVq7E71Vpp9",
  "key34": "66jp6HANuwe8hdhPUeSSHWDPAnR91hnKZ2GrZuny4pShXpuv33efbw2g1pHut5ASEFPn2tPhbLS7xqStgFm5nmRZ",
  "key35": "4NBxxoeS3cap65qcepfstMYj9yLtUzMhQ1pA4R95fotHSGFFbidfbc4MGDUWGwwXHHiqisGPntChRe9EudgCsWqY",
  "key36": "4kMGBiEZLUQWWYNZNvLKtPbvKwzdVYDTfYfS4mfNGuAfU7UFU411aYeATX8XKTQXUq4DBYwP8xYi26ywwAg4Ft7N",
  "key37": "25GP31heSv5F2HidT7S5GaSP6RQsoM9iPSnguFEhyijtWeAnMAQEnZrGswkuvJxxnjxhGcLGooNHJu7iPcUpE8PJ",
  "key38": "4KVktMpEPctBPSP9VSZ2SwZx6T4wQ5bDtBTDrYakhgtCeKmjgeA7DMMBjz3X8vdBDCdG1fVAb1C146fV8Qr8NGEa"
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
