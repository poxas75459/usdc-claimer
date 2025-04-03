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
    "4EvUWqybNfpjLyi9y1dBe5Q9FeRShS7jw1fheWPW6ujtEaTto9qCSm9BPpUhbxDZzCf7J3wwa7bdGq8ZcJoX8uaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J4WjFsLQfpGYf9p6bHg4QVPhrrNp93omZ7CDM9PSFaXtxqsy3foVYvLxVrCBmPMtXrzWcPyW3er4eAGyzvJ1Yvr",
  "key1": "4bhnSSoViCJnMiwjW8Gi3o85H2XGCd8wY11DPxrxQEtqPfo9sf18u3DeuviZHKT2X99Bnqv2tbPD44j3hLG9m5op",
  "key2": "93y9aK4vVLYHXyFDx96hSSu5tcrjTNWJHdnrYaQaV9HzMiXBqAHzCHTUeFTcf4PpEjc4i1gpSRGBDmYL597er8S",
  "key3": "3TenhmRQMcFfW4fQ9vb6CoJwtGUngtunhJpuGnsAep9sj9ijnadPQpnuPS5co1rboECsr74Qw2fnV4AmTGUYwugS",
  "key4": "2kMw6kY3c4LnWSRiEeKrkxyaf318Y674ZUUP55DVd1ofZMVHNP1ThqH9HpDdPMcjhj2TuXo4qqZmJqu5PoVrvae4",
  "key5": "3WJJhi7G973LPcVmSGVyarJ3UDo36jSDob31HduKxmzKWzyWDX87K3ZaADrYY7vLkxaaemTM4xYTY7F6oxARkSxy",
  "key6": "4kaQNJwXBc5QyLYyQ8AsWi6VjK5292JRdT1BjBMr4mYrL7x2BNiwQpkz6V36c2uWq3YWy4dRV33r7Ksif3WAARu8",
  "key7": "4srK2V4JdWif7U53sUYi4gFf7uAAcUcmenuscsk8Zf8ApaecKVCnM8Fp1mJVuYcTNeaPRQHikZyTD4K7yasSipFR",
  "key8": "3NFGfwHesEBc1CRtGcMxpLQZpwDML9wB4zbfGZdiHvgqT6TqTGFFRSwdKffETU6Zn8LB724wd1odTMyCt8dyPBYd",
  "key9": "4BLBZyRmPR9dRxY2S2JUQpEwm3haPqdgiZ5zTG3MCYeFzdWYnWRyaJ7md5rxxdPRytL2DW3Zw85Db8vhNubsb6Ro",
  "key10": "uuMteuzZQAh8dDx7z48xRBnWjxP5NJFCLYCT3MKps2SyhPSRWD56KgvZcmjKWRKUHVXYEUTofCHQdAudxDYWNns",
  "key11": "4gvCTJGKKWCQAm1b8rCEg5Q3itxEGaJqenWFbCcfFooi5XhNf7ezGnUy88Uj1jC75tehd7cJWnryjSsXxBxsTxhU",
  "key12": "4SXkQpbBQgyabomxKeDwuhrh3HromspdabeUG2Wr1LdaLYXHgdRUUuj1nqXcMbVtxxSd7WyaNDzWJNrBryJwoTqF",
  "key13": "3j6p81kqsPgYYYCm2adT9JgprJBjBuwht1kBUg25bfgxmWs8pzx6gmWM3wL4JVgtMcEQf6a6aCmNSoiiKC1CsjuV",
  "key14": "4e6LpAbPbfB1LcNRfSGMPfyNQMftzdcyC69VjkTw3zH9Tozg3vWa9s1kvhw6ws3Z8JNtCQvYh9A7PKDWRBCDj11K",
  "key15": "5tR5rmm67B8XgfuyXCn22fnqVaygScpVBXCFikdPKw9xUHydAdjsvaBzbWh7EYXJVNfBXtQP9fSEkHznZc9kL92p",
  "key16": "2xYQXHr46De3s36Dfx9odvA21AwschdTh3sWoefq7gAqF7R7nqEYGtuSmdmVNDho1gvkMnQUdgp4v5kz64zeCBYN",
  "key17": "3d7QaMCvQZUPmWxzEjeedJjscEUCBtqgPPsm9WiHbnD7UN6yTFB1VkJWhjVMAVE7qR4KtDrpMLypuZ4ENt4hTLaY",
  "key18": "27rPYEvqJC9WFZHMgbTqeoEkne6nbD9nXAmacyQocwFunnTcWBobncaYbD17eT1AHPtRxy74QxdYMLHwtw3DDe6D",
  "key19": "3dQ6xCUkpicvwnD6DdwuWmcSqhTCLCqPmigXnECN14PzWTHumHEWZ8b78YUfSpngirnQ8NxuJXbZunrAtgEDM1dm",
  "key20": "2RmXU81Wvh7BNBDBZvfw4Yq2eP7zr68SktAogG5cndAfa7R3N7HUJ5PkZGybnBZcYFAqXDV2wgQCSzCrUDWFC12h",
  "key21": "5RzGVJx8hfha5wmUnb7feBh12KSe6eZK9p8bHx6c3vCTx86FNo21AtGbFEbV7gPoCekAQQ8eQZ3LbLAX2G99MSuH",
  "key22": "2BaLxLpV8bwCzL8u7kopG1EgxYAPMPu4p1yj9voM2UNkC59dDFkSc1r9GZVmjH6akgPeZHJqMdqjxzu55qUSZMye",
  "key23": "3evr1nFt48ta5juMNqXPUyerHQZVRwsHbFx7ZZ3gVmPaVFb2G8PgGKQ3PPYwv7r37BCWwxRUA6FLchMMi31bNhM4",
  "key24": "iYnaphdQL3MT41GFQGByjtqSvMkpBSuMtDLNujMcH8HizFeuCrsE348xBfZ2YS2sS78kMaYtDG8VNngHJW1c4V9",
  "key25": "3fsJCpK9Wf2nXFkjP7rZQZhACmX5fsEB9UiYgXKcrpNJEKhrPabtEtRMQDeGpguJe1tXsRAPQEF6iMfDQ684taCM",
  "key26": "4ZxnPnydWh1rjBbGyWHMSLUHgovYD5kyDyoF22KQCLwSTzDsyvecLsHRfVRG1UvyvFNrtADTvhp2fS64cTS73bYt",
  "key27": "5aTwGN2kRpT5MvDwKwwAVxFXxHZh91oKuyE4waPF5dZ3LGSSjFG8V6iHak2mpNPtmaYGsv7KwrdhhftB778k4s6d",
  "key28": "1hQyNYeeSPg6Lkc32PGLJSLioDsJhHQvB5DcdUTwJ5qern5FmcMqhEmQSMveKju5wXcGzUrGiNqAmfbAE3oikp6",
  "key29": "2JaenHgBPbVbTjH97KLLfHB2TgLPuzftLBbCd2LfUX8UXAHuzjVMrrUBeJWxNPCKyL2FgdZcNJxTrUs1Rdhdi8G9",
  "key30": "668pSLhfyvxhLKiTu8SPmgNgczX3tXz6cuUSPFYrF8YKMUEUYM4ZtMq3nconmYte4TSbWV6e3rfbk314E1kuPrte",
  "key31": "5Xx4f5SnT67tRLfP1fgcBctdta3cuX3zBAp6wNf8hNgZLMt13hNz3t5GjfK3UFAY44RzBsb2Cfcaco8AeDkdC1JQ",
  "key32": "cpwXD8EmpUc6sxxUYAja4BQjmCHKTiUAmvj7SPY7QrwVhxYnZhJK65pC5T7K6Ma6wGXHQymUUAuv7rffuBQRZmL",
  "key33": "4yrTpeEz3nRLCLRUqwEiYMxEDPjJrm8H6ZVo73UeMxc7H5Tj6vj974rHMQkvUaHNgyzyVAeQro7wEuvWU7tHZ73X",
  "key34": "XqGoRiTpcKAK3dzniizES9weta7T79T2QpjbxEMuDDaT4Lg6TkUrq8yjW2FiSi915LharrbAfvPv8t6ycUt1zYZ",
  "key35": "3BTLnfzHf8kp6DPBVdeUrVeD7kvFUXeXp3QyCtwinRCVBWebYwFev9yw2i7s1hzPnXXSaHrGHScWvaYwbSdp9q28",
  "key36": "4koG6yBoFUoPwQmmrZEXZdGPoQ7xp6QxVkuEK9ur4jgct8G35Rm5pXybMyk8CN9JRwdaLd7pAFFw5HLEXxx4teYE",
  "key37": "2Rf5NdzQ4dujKo3F9PwSseMkZctjY8TVEHs4ZJ9JoCxVNNxgiRuKAE5xpfG7pJbABxWUpqWXJ1uPxzhocNi2sEjt",
  "key38": "5rJhsdSQzZ4qdaVjJpqHSRmbMkhRCwz8qMj2nxHLu5wBfQDnN71Rw6YD21HNHSjyvMrq9UeokWFiXFpLYun1AoeZ",
  "key39": "5gjyRCdJMR5nCkZwrTZ51jQyLFmEyhaHndLWYQcnNLxKrLe6NgjAN8nLE8J8v3eC4cAxxyMpCARG3D2NJH5Yg1Dc",
  "key40": "7ChkymSHDQD3AFbdnTboKnLtzFKAjfdqCbgHHN9DwCfodSf9kvGydzDtmirJc3HKg8fijW2q7p6dKTSZXuHjkCN",
  "key41": "3kTqimbWugMWWBhj499GfkhoFSJMp8Mt7FtxMpbjTdq5QbRSQ5ho5JFR1bsQ5k4KbHhpgKSV4T1s2MX6e8wW46yn",
  "key42": "5bhsvMYbVhSovhYjHXfhQXKjcqbn1yHVcdjfv5kJxLewdnNuGgPdKgfJuibLpgEcP5eL6QHqvnBJeoVn4Wmi2u8w",
  "key43": "28LtD2PAHhmjYatuzrLapsLixDbBsyEwx6TSzbKTEu8PFynnTwkSbPhiWVJaMY1sCAumcMxFLDpdxVdx2WVtqHMB",
  "key44": "2td88VJeAkn53WBXtCGvZZzvctDdMdP3JU5nCiHYP2QYZaneyuV6drhWnvQWVyW6jknPXEqRCfcnMHuvq4Wjk1wJ",
  "key45": "TtJD3jbFNY5hdray8Y3rHNLGuofyMSFSWCuZBummcDrwe75wi5DXJ2aWhsMxN2bs7jLZXb2neYwowU2zY1YanBQ"
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
