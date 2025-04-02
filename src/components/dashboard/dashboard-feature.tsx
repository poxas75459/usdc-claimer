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
    "2rvhBN6vbaNKsPHoUZ2DeryG6vvk8aXFRQLAQnsdacAeT9nxVzPq75PJt3ZGUqhfKHjzfVGfMEtACRqNuBxDebSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qp4mhP8FKHP2cSoAH71RVQ9WCZaNzbdLJib1kH5djFaw7ZkVJERXmbn3DCkoBUW6XxQpYXyTqBewnNFX41CHDjh",
  "key1": "5L35YLpj4aio3mJ492Fm1LqLdZTbBfpf2jmhpxtjKPxy6ypWo5dczp5mP5H3GQ2DNum8Rx9fAuK5tfWvYCNbLkUf",
  "key2": "3B2MVHmFMStkmJ7NgiQE7DXqT62am8sqMzattxYCoRiiZgTxoEa5LEzF3fVSrosdtJXtkxE4Xz9gNbW8c8SNFSja",
  "key3": "we8LyH7KNof661ko9jryeihsKRqpGfx1jYUhhT1L2zdnfydBTjipKbYNjwav92HepFjxatshPD5oCiEZFQuTrAb",
  "key4": "MaAqFeicUZGfSjygmkTRMcmyoSwWXLAchNg5vRXjFVnTxFoCNnwr3Qnun9TGVhMxcqzD3oW3hBcerQBxJP9NTNZ",
  "key5": "46gfGKxsPeB1C3yuiAfBn7CunxK6GWzi95H7kgKbfom1WjS7Fgtc5KGBLQGjz53tDS8QovLL5aCqAyEVLwb9HcXs",
  "key6": "3N7HyEJq1J3k9viD4mut3p4qNpLypEJxjomuubjVZncjiXKNpPD7s8gxpYTp7wTV7QhxVmfyRGzy5mySUga8WcsF",
  "key7": "Y6py2uZRgyufG9Lyq6p7bAS9atgm5vbBGTewyjxKZZpFzpXmrBn9VfVNZj9nWa1DPhHx73rS3nqK134RQ8d66pQ",
  "key8": "4yRmGJHbqKB7AAm4d4jFo7vtVoUqujtUfPgYa1Wxrt3Hm1FJ9j2UPX2gPjNMPsgbv4Stp5YadqVnfyPjDHuwW7SR",
  "key9": "3CS9HRgPWWbMXB2dNN16R87bJyGdf9ZX29rsQ2VuD8YsBQ9uH6n8G69GLhP3nxWfxfiQSMhAqBzapdZY9HSsAt8t",
  "key10": "TVaYY3M7cYeoxyyf2MaFdcrTmxBTyx7LvB6JWw5ijR713FBUwFyekbhHK3bogsa25AtQQkfWMYxh8HoLEq3sGqS",
  "key11": "2KD8J5iJF9EnwXuHds1m8e7Bw6pf2kBj1uTrmvn4PxKEbZ566oZBAcaQDgSyixNYmoqtrgkfMQLf7BG1BUatML2g",
  "key12": "5HFrb9WF3EcGH6x4nKGgEN7WUVVNtoBuaDrH69BTZScC7FRnKuYFHdRRtZa8DUJSb8chHCD4L8Je1XM3tESgVD29",
  "key13": "56B2Pj7qeN72Vfz4Wo1nAwvgeGUfyqJE6p9fk4c5nvcmogMia8dVgkiMmCg3pb2mgDckNnDshCtymxBdAacZ4W5Q",
  "key14": "31pNvTtuAxVB3cFD4pNJqyjT3MF4TYzso8PoVsmR7xzhnkNg6VpJA8gswNXmJgP1Zkaf1VaTXzKDNKBxkfumy7hj",
  "key15": "hbn4JyRFv3JnaYjQoBruZJMAyqKV8YtiU1nHfGxf2rVgi4w5mdTevD6zJ4kDNNxhKEKbMz8iDDBvXFUbC1ZUtox",
  "key16": "2qjabya2Fc7LHBi2roA5ERLasUJGZDUmSbSEqV9t3xCnrfJKZzXKV77NNEEtF8s9VKmEcDM2pf95CTKhow55Md7N",
  "key17": "331ZdkR12aie9FvGQMCTxarvNB1LsLyJiuTRTAhFv3DEx8iE93RJJSZsVmMzXTVL8TjzXCsi6ZzY9EoXby7gcZqy",
  "key18": "4ULG5inUtrp6VtiJXKR8BZhNxUmv93QihhpLdYibapA92xGnt6r4hLStgxTP2KSYNw9K6LUK7AuwFAGJrQe7G3yY",
  "key19": "2ZuU9DknAZ7kKxZbg3dV6SZheKwY4pthkp1o9dezZ9VbXLVE8dciF1EqZ59G4JANBX7kWMgfPDjcUChz3Z7GmGbU",
  "key20": "4fL5JqJ8i9xktgXJ7BAeZvVJVVzmADGTLCJySWyzz7VCdLp5CUNeNsLDxjSRmjSADk6WgnjKb4EUwGA5zj3t8kMb",
  "key21": "2HDonbijVNZ3bH1yacHKV16NXfTXoj874Ttj7ednWigEw2f29BgzuV338hHNpXwvi8QwVFzikqnexJdFyhHcPuHQ",
  "key22": "q7Qq9xeaenPyVgzmCukwEPWekyFBfRjD7savvTkDiUKdn858Hx5qJAvJHe7qWu8RJonskgoVSzsZLa64ACH6k8y",
  "key23": "2sXe4cBBCfaw3QMJNj2c8GTU2SUTZ9w6rb1i14n9fiAeF49X8QZ3vUpvcDbqcPwTMBHdRubK1dqr2rfPu8F1gyPu",
  "key24": "58Rck9QPAxfEXz7zWM8S6FcuQpLPP1rTCLywnSDTFPxM8BvW1j3JowyMQ2yHstL2GetB6n2TtJopwFQe986HeHmf",
  "key25": "4mcUHS9Zj5hpYW74UbZSLQdQW4J17uGNmGbfofWq3PAX89MYRHKjVXqEwwJNJdnsskUhKpzVTxJMmmRKpJhYrEox",
  "key26": "2ApPEVrAxcJcszq2XPmsjmjkdvMFZdrXWDT8Sqi9rgAjyPfy9G13jw2dF4wATQCVVFTHfkFKhiXRWNvkv3BM2zpm",
  "key27": "HKrKSH6TVCDWuSEsXVGXJT86996ko9w5sTVkZ38FMofJ3zVYBGbBmYKVh4WGuUJ1eq5ao5T8s5sgnEdPqmLAPfx",
  "key28": "3Lu5PBjXUavFhfa2TdUrppZ6brXtV8BmtWLC8Hg43jd8gi1VRfPv1RfJFSPvBuH3NL4LAWWVFDDPUgexuNEPdarq",
  "key29": "49ZhTN9GMi1Eq1RG8y5qjUDHKG8imUo95XNJhz4hedeB2eX3vZ3aUcAvNQxuEapjet8hqJBCJa1m7SGw5eYcoKwW",
  "key30": "32oh2LFGvPrV7mdy5xN9tcarmekSDu4R8g58MsE3cT7EG52FZTqy6Gd8wAG2mBiD9bq48wF9DtXyZefTKvfiWNJT",
  "key31": "XQjeG4TCy87Hs62VujHECACXARg2fKUGqPv1xUkuJM9J9BxFW1yyEFANkEKkZd4h6EeSe9sHRJ2ASB1tQjS4LFd",
  "key32": "66Jjx6aP84smgWnjq43KyF1yLKe2j9P7EsLQU1S4GrxL56uwAszZ2eiwzHLkuXn68XN3KifZskrkTGwFxJEcsxmP",
  "key33": "2N3cj4ZZvQFWdPTn2hMF1u7jwNXCAWPFztZkoiSoYDuyArJUtoVgiA7csowoLNyBHnh9xwEHwnPufgoXpu9HAevX",
  "key34": "3w37yFhrNu8CJUyi4cjm7QnCevbsT3a9wn6cQwrSqxDiEMG7qngnMu72vnTRES1fbZsGi2WicSBRjBbVFYnDFnfk",
  "key35": "2R7B6gtVsCCKyrb3xwNyLc3NAxDAGwnDfhxpQx3uyaNwR9aHmQMpgzw4mboiBQBYhzAk7p7ojrRcZuQcb2gorMZV",
  "key36": "4kdDFTp64Jb7aChFCFXKjvtHbB2wUsSfMe8SWJygjkqX9F57ZxegesLjXQRqcAURcQet4HeMqLw8dHRBRhAFGmtX",
  "key37": "5VrKRH3dqMDMzGy9hhPQWN3in9t8P2LPmerENSvna9saE284CgFUo5ZAVJgMb23NF2gq7b3JB1TFWUXmEU8Dgko4",
  "key38": "aJ4Ux3ziVj9MFkjYKsky34F9GBKzbgVcdWvajgJad8GCobf2Qp4hWE4hyBnZyeJF8FYujShEkJQiaJZbWTcR4ap",
  "key39": "2Kcg6KNjq3cszyEBK5EUUB9RnUX3U8zkycrB8cqrzH2cVy8Mooxs48apzjFoLoYehfnmJGFQ4UT2H3LwkcX4XvkV",
  "key40": "5KYBpbu8Tb4atZmfSaXMEMFi6KdrEgDWxEUSboE1LM3qKGVyyJTowPS9yMZNNLyn8MUoDq8DHB6Sq7d182WNy33y",
  "key41": "3J4PFx4TKxhrSWtSrSvYXeQJyx2d4AugSXR6kmNjHTjghLT9FUUucLedwTnT478fVfQXJnvH4K7ieQGZNGt6EAMB",
  "key42": "2XDybjUtAGPwvyNaQQR2xEGWdi1WM7ZnxLwUbnNHy6z5x43smjfoSC9u2fiho2BWpze951iYsNXHeSaJNn6oUB1H",
  "key43": "2ZGSZ8JVNtjryeUMyndzzGyY3eY8vsJKyFhZUSTkqao3K77EU3wFCcj2t3W6ZEYySBW8tkLuSLob2j5gABmt8UN8",
  "key44": "4nJagzu6TU9PPZTQGPsj7uQEpQXKCqQPNJfLFHCsdGLWgdzaUbMuJiLRYoFDHVQpAnWhroRdhNY4vstp8P9bzkeA",
  "key45": "2rpRqWurAAD4HXHKPea8WJ1XkvpBKySFRAoSatteAEogqetyTrGFJ5uwmDTEJ7g2LQagT6jUUNwGURx2PDX6MT7i",
  "key46": "BSGs59WYuCF4cgGD57jWszSfGdreeWJRviMJ2xGvga2WBH66pqTTBpqRsKhiqS7K6eXaemaiXDRtDQh9JpAiEYP",
  "key47": "gy5unTB8WsAto7wVtV1qWWcwXwGaR6wsfKmicpdsmvzdaRdko8Yvb4mnyd81SQFUecNbSdjSgpgmCj6ngAYB6Ec",
  "key48": "2QpSXWzi8JzbQeuxhpTqJ1o4KcGUe8wdWvy7DocMiAaCPVnoPZFzHJYAADNdqZkJ7csCi7yyt2WRkjsAMhU1sW2U",
  "key49": "DsDcwe65g8xhf5b1Sr1MGXrJCGRgpa5u7SU5ShppDFRQgKaUB3RHeskCxDTJvmXP8ahg1Ub2VEgdyrz857QjiMX"
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
