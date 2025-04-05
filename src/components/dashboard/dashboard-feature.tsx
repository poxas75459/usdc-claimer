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
    "3w2SfckGtwa9LRnCFw7hXnNpZowHF9r1cJPM6UQ5b6vFwKVN14JPTi4YFwmeFg3bkxbhB4jZ8KJfBRLoezVuDZs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GKgcxSy8BCAGiPqPnEv28ZH8QyiubteiUWL2PEWGYzzRGpHPizBhQ5KETErcuDPBYJ5s5GsETasufr2mvqFitFL",
  "key1": "3LnDrkA8L2tZpfRnVNbb29QfUjpAbP5A58JpsLBk1AUNf8VQT15pyqU28uUqfHg6EwAFN45BFKwRxzojL5crwrUY",
  "key2": "NrSapwmPFZtoNAh5qvmvuqsKtUo1uoU5ZDPGaFPwnb93bCpN5aQtiqZcA8Rq12nc2NBTaqY1vgg5nJYhfcT54wY",
  "key3": "TVstFtiD8whDTeVGeHJwGs5HLXRUkpZ3tmxJkmKHGMzGPkK5Vvzu9zFTxedy9yJV3kbiYPApsYLxU2khQ6anWrV",
  "key4": "5ckPDGdkChSyVnbtbYCA95xiZFTan5D8bhmAxQWMCcb3Q9d3Gr4DRasU42hZTjJvVRc3CUXgEr5ThSzkwZ1K2nzX",
  "key5": "QU8reiPzQUMXWy9R7byCRo9zSjqPdMc9vZTDVW8SWVgFBLGqkNvXMshx6D1jnb3NJa3ZcAQTLjqRT1pDDeCEWpe",
  "key6": "4YQTbdzRWDKrg39y7KgGRCUQxhcfs3Yt5jmw8rVfigstmd8zsstxonWNHgNgzLFXdDFbwPH9mtE8URiNXbsmBHtA",
  "key7": "5ZgWwa7q6vrqne4c4zNUJiCne8JhZu8xnuFzwyJ6T7vAesxkYHJPj1VYAxBNvBDY6Pw97fqHZb8KZ1dMAKwEhdLr",
  "key8": "4BFHG411SUYeniouRoPbvApuqkzKLojjUio4NttXibpvH9DGRdkeC2ZuXXhGriFgkVd6iXMXeQQEh8Fdf2tY6aL9",
  "key9": "35MvPTa5U7qewukrCfAAL1dUkBjJnWcZWc3AeVaUD1qJCWr7rZywSsv1HjXA8Uas14dkMemDjCsphzTgDjbfNwgc",
  "key10": "3vQvT6tB7YT3dwYvaoGGEtM4NYPpdQfCTf6PDSsMiVDxFxoWsHc6hC5sK3dYv9QxBjdJfEwqDJQKLHx1u5mTavJQ",
  "key11": "61M3owFTWwAmvG3A8KRVSehcKF9AaZZf3gDqShc21Ab6QHoSVzRAxYEaMsZ6Zm9XUXfe7auytL1PbjTpHAgU48qq",
  "key12": "23pkojqtJRJcCZiPDcWY1m9q5WhcHV4WtFDViRr6hcX5CKm43it2Sx3YmUXQpYLwnHDVidCPW2H5ifUuy5UPDaRV",
  "key13": "2jHhjWNzeqrgoWivX6Wyhpu5b492hE1JfS6biCtaqVyuqNeae6fcihHJAkVbpVAMRFefXmN4f9w2MT6iqLjFfDvF",
  "key14": "agS9v4NPH4qvCTSebo3KHCiHf3pY59Fjzv5y3GRNkbG8zcgmGgg9Mz69GTnFYp7E2BaaA6ZAuZNkftfWDshqjw6",
  "key15": "5Du9gfzfLsXHGzAHditUADJuh19GVWTZg734PzfaJxeBB67AZEMMcdq8NMnmBhicgFGCWekfX1NXzhVQiLv7mGEK",
  "key16": "6nKLyDdeujUKf9KjKPWymxUWa7HZKGJSWj2FyUX3toAuZs7KVwx6GoSP7QeP5kc2WqdGAcAVs4XxU4xvmnBaM6q",
  "key17": "5xHm9X4YfC8P9cW4yej7L7PwSejzk8wK8LW9Xj7NFtB7Dufgo7aMXMCbXSEQ1aN85UQKFZtBhLQbcMgrNGvbWGjg",
  "key18": "3VEmYmg6NN5xYPbuUuaA8YsVkFZC8X6uAmmMoTcZXXuVd4h6aGNMRrgsCqzJkWycRsrucLkKQUCmD7PP83Dm33Pn",
  "key19": "5tvfHjXwCLZuWPX9vSjHT3VrsUxXjZk5ThDriX3rj3XztAT6CiR2PQZQQvbmAVZCMUtd3dCjDw7EbJhQUoneKTWr",
  "key20": "3xSNSf2sfQwLjPT76k4ZB6prAoJ2UTtEZWBSsJR6NQSyY8mDeMfegzkjgyzaoWRRe3qQutmhCF8SdMC1jqECDVWa",
  "key21": "DxMVYEE296SHYCp8Y831vorjJLHEd4bj8sXyBiTtffdgTCnv2KD7GAFN1odAQAFzeG72WYghtkSbjFZtRd5nMmU",
  "key22": "54UoGRUzb3HrtBa7CjedfKN9TJpKxws1srQDxCBawNQTNe16tmFbGfBxkfPSK9UxUZ7zpHSnSq18kfA7m8XbCzxf",
  "key23": "5VPmyPehJhZxb9rteYcSiCBSAqipcZsdvbLtZWikU8DVUS8iMwmbY9o8ZmjXtF46fAGS6ydqKpw6uciiraZVpn7i",
  "key24": "2EU5tRzHhUnThk6uRNbo5mhW1mHwi65gK9EHaEjw9NyaB7zBZbjJFEexEnWYUsjJk3mRNn2htE6cHX6MA5RyVs2m",
  "key25": "2QCzcRkQEazE7R7HYnHTpyHghiYCii7asRhARXW9JqSZMo4KATubGMjfu4dpQn48twd1wSDHyRQgzFv3LCKpGCJ8",
  "key26": "31nBiZWU9yrtsttzztXj2HLJ6bWT8aqzYtWttu5LS1gyPki5yvvvLpSDGk2RihZPCptiL7KvBNh2YhivkB6Nrr8C",
  "key27": "2jeMoecR7fWhTHrXAfmXZkEqFx6ACUQMoMttqQYSENfHj3Hx7GPJYBYfDX9zNtNSWrciagi9ZE9zsW7hFrZwX4DD",
  "key28": "5jnz5jMspUDRbDFrqzLZWCM1SLDRYaTLMSxPVJCVfKHhrBqNLPefN6R5QTM4zfYVtTXpeaus6uLMSCEeUSUnBBoT",
  "key29": "3BRpJfdsQMojf1U9KgDNXuLs3R6b4VTWLkJv2J6n1TKEXh3MX29i4DXAeqeV8waBytsNtXvJ26n1Gowjkn1pk82o",
  "key30": "1h35GsBKwfn7aU6rQqbRGDfAg92AcnCvHt1mEACJ2Mc6SPcHo518f8HTb86mTrJTW9abBeom6GV8yVsuqHGr5Up",
  "key31": "4e9pUL7ZBxPRaHTbAJkMPNeqwzAEwqsq5v8YM6UPxwW8gqhQX7PyNGS3MUEifEQL24vPvytSv59qtCm92gUSeYNP",
  "key32": "2bzaBXGzqdRLUp3xSir3ZZnP6ecSfFc9R4S2C2THM9TgZWbwNcY3uBjWgUPvxjxioFLSD5S8Gh1KFRUEmSoSx13",
  "key33": "4TnSMnuMZLqRRti4bwmQGGHZjmrjwXawZopcHQjMDx4dvgcFpMPRVF7z1hV1P7YCZdxdEQ2BirNT3UiA95d7XQxg",
  "key34": "4R7VTByLnTHMhg6v8ho8edkBzVukghh6qwEpC849EjQtZkZQjVCiLBk8gJFRwVu5kp8PoaGJLVYemFeacKgGwaYY",
  "key35": "5eb3knRzAkvCgLfxApREDEk5sLziYU8cnMMLj5agQE7KPEMvHdcuuzQEht8pLxyTa58ZPhRZAKshqkxDywWGs8Vq",
  "key36": "3MVQ7Ltpobcn6NxsuyKhm5NdNSpbjirx38xxbRJaRr4jurdFKmejm6jxHxTVZEcucwNnENejDJawjiNDZnyZwcWh",
  "key37": "5WicWBzTt8pf4ZbQ2xwNME7LUkTdcLzMakXhuaGmautwBcdDVpMsj21Ym1B2y4mMZKtvHV4s5kAnoaomTYtzqzyC",
  "key38": "4pbiZbatdD7n8WG3491M1YRbK6saLjVWFc3vyauZS1jEBLt8WnJuaRfgWgL42FWbeCernTefps2WuHXQ5zhvT6xB",
  "key39": "2g1SX93yQ7Cm2e4opy97NTeMxCj2nsUmLHyrNQRbWTDAncCmqw1t7uthGuBsTiwLpccVVYMsKo6Bd8KkqZSThzME",
  "key40": "4ZsWEY9KfSfRB8rvZHqGkaZ5FJME8G5QabDAVtNndGqJ86SQAd3nyjtKVD41Fq2qntkZaEyadDcqJ4Kpf8LD3G95",
  "key41": "3yfykh17bP6FkDFvwiaDujzPN4dpDHLbKuH6NXi8wmAnk37sbr7SrbkmCioBRQGz27SL37HGh31XGwfPWh4Rzhrk",
  "key42": "64Lzfhn9vWQZCD7Kw77snUKm8XUuhLStp2mstJs9mnpYSVCcq6uwftNaJ75K5JAt6xAB9R2onUf6rYBuGtN2pq53",
  "key43": "4V8kQ4qiRcbxvzHWSGSA1LUjSKpXSapyj23RamMWWnhJhYF4E41m6EyyoRMx2PMEhJaKXn3VxTuMjsvddukawJ2j",
  "key44": "5CquqR9KBtBXTMEhJ3wpHDBoNF4TTaSAbQNKuDmGvNsrTFQLZCrPWTtob6Tk7a4TTg2iSiujy68fAAQYULs3r3Yi",
  "key45": "kgNVawuno7LA3hTWVsAadEYn4wswvoBUij1rsxt6myVhKaeZtVtgsYxtNigbx47hB3MCZ3r127uecTVV7rpJtUB",
  "key46": "5eebUUqLw3Mc9n6x2ktBnaKSTU2ys27vFc51tHRBcM2pFuqg6ntGVEi74vmTv79cbeLy7gdAFe3GvwH8dNCX6DC6"
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
