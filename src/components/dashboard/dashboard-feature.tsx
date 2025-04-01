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
    "3rhn4faumZ5S5PSGkDXysRMjXo8xaaqHMgqGbmQQ3kNnKQiyd9Jan5bAvpkkbcxA2vjWGcvRUVDYuyVpsPz625YZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vEQbnvv5aMNp3UFRFBzgkJagSLyH9EmuP3x9o5JXcqV2xVK96g49i1Fo1ogrXPVfzHAVKZgw1PpCRtY2gGQwnAe",
  "key1": "5Na87tk21xCpCnmECNPkDeVUfA77gBiW1rVUTXUsxscb3x1HbNuihPu1KJh7gW17NCMLTmkf8EjcMnGcQTLnpfxy",
  "key2": "VjQqUMkBrATGgWePXsYZSu6wBWMN42pRr8aXaMgJYTsh169NCjG3JtbuuHwEusxFNLfTZ6UAEbL39ukpwAMA4Bi",
  "key3": "P6wD8J5k8xn5GBVoEaE3LXWtLiBJhQCn2irir3Y1gWE255mXx7cqLRRGExpubmfBRRZDm5m4GdsgqsfaNoTnds5",
  "key4": "4RWxkwsTdcDMBv3qa4jGz2KD66ikDWJGJBezzFKYVpxX63PomUmiLTJmsdcsXozg7VB5NY3GxF3yHdA6YQj3eDy6",
  "key5": "4hV6t5Fjdqh1R5dsSnu4kKZNeoRHjbXQcnwFqu1piVFsDgapqXuwdDfDXPyioxVAL4ySLwRBohxuhGwBNCuFQddn",
  "key6": "hvWtWM9WoBGSWfEmysgKecBqDwNxA9vjmyuDVhPjWsTE3ChHbu9H48t6xsjpQkpQNSAdhXnG3uUukLMfHaRgm8M",
  "key7": "363dMdo4s2pxQnoeC17zspLnVeQ5daJzfLY3fvx8e7EqwWTAbJWavP8cDcH1ZbTt7FnKHLb6gcPgtatXrLYUjVHH",
  "key8": "4WNxFc7NqMwePBg85zXJfEsF24367nQwhKjC4Sg6ywkmu66HnQkKsg7ZVKRJbCxBtnBNkscUqjomdqtK7KtxoJUP",
  "key9": "5XEt2k1LT71opsGZBfUD9ezyt76uimstB7cDi86jBrRXQZPwXdykr59s3Lunpo9D4MhDZjZ1a95HwrhmFJhRdp87",
  "key10": "4Mhn1nbgRJ4uk13adC684rdhRuGxFkM9Ycv6nRmcqwTgfrCyi6rkZtXisaN5PZt2qDfFFJJbn4ucqv1absqQ2yJA",
  "key11": "4vQK4924Vw1iXNNbd5iPtsP7AFt6asCxKUkSZwrzBUq2MiLqUcTrLwpgkKNtyVdWpHeJo5HJRLmqiUYg5UJqjWAE",
  "key12": "5WCBabHuuAQ8VicoVDop4Qrxt5KM2UAgtcQY1fF8Pq64ThWQ1gi3EqtMzqCQb15ZGxgQcKUEkqcPyb6PboHNXXtw",
  "key13": "2Vtnpe8Y7bZSSWXN8q7DKLY7wevTL9o95UTKKR7CDXMq4QJTCrdMSosESKzS1E8WkEvXQGBjVnYeBTfYZEDg7zQM",
  "key14": "3PrQTQaYTBujzF82fgWVmxJMY3n43zfAg7PXVfLRcy14yvFQQ9gfWKaZP5kKKaKsKgZygqzBTgveJiT4sF4dL4wR",
  "key15": "5GP8Y3U1CrP4vsFvQo3ehhGiqcd9phggKGPGiLwTGfWJYbpQ818fLsKjwAa85DXixUihxeycuTgbw5bTofmMV5cN",
  "key16": "63fCGGvhfbPhXzJFVcAgRkqAbi3hqgomDzoY9gWFHHaHTQtYbg3pLuzo3t1LHChmfosrD6HcSDGvFoaAEzXwSX8S",
  "key17": "64RNe4JdSF2kfUuja21gUp2AuKFMFSyZnpcPi1Mae3xZstNnbPHrBxa4HyCbm9LgbpstzMvNvixApXepG1iaw3bY",
  "key18": "4b79rPS2ougxka1eq3UqyVzqHnsqmvdC5vsCP2RYuk9dBa5otqVhvmYL71okzzxbu1jQHve9b2NVcXXgkWhN93sA",
  "key19": "2QP7kf7KxypXGGvi72u81VGpjghwpYx2MK5RnWJw6jiLdvBSVuxva1DUxsyoarDSiuzqXdspSFKLidz4f2ZSCaeN",
  "key20": "3VprhBeg7R3XEge7HyR7cHuqkj1Zes3qkWH9ppTad8A7vzbz4gfQS4UnUUmvQa5CgtSi2VeNzJuqr6JUWofSnmk2",
  "key21": "5UE3p4h5iJWdRANUtfNExxGy9ov3go3c5uHvRuFdsB6oNSsdKKogNbEnD5qZcMsMNhFXug6TvkPTCfp1g7ZBbiMm",
  "key22": "42CYxUvhgTotCKquA4sGhsRsmNychr984PFtJEvUmChFMddokpsBn6VZ34G9U7CWPupQs4gJc771Dg2ATZsXiFqP",
  "key23": "2qLapji8gC5qAxBy7aoi3jkaEPFjKYNETmfwgmpm3ZCi4cq8TfT2n1aXvwsnugTDESRRFuHBRUtJtt8mGHaKieD3",
  "key24": "CvSzrT53jXzsuBGFhbq6Q8uJ97JigBYN9YHy7k96qF45xNPL5ekUPYkQcQGy73QHaF7c1z28BHkFdrF6xruL7n1",
  "key25": "4EBX1AjVxz2AGXPbLEYYFpNQhAjEStkVq3nCiQyoSWbpZ4dBSeSewSvj3s7uLDyNiXNdyVsvUeiL2K2v5aXxo5o6",
  "key26": "4VfhP5UUdjWnt5vMRLQvbE56jWidNv8cJZqVwMisxBvFwRpe8dYfGJS1Jh92BQFxPB68Pj7tN2eezSNGFDvQRWqp",
  "key27": "3tua93nBdQUWgqRuDMTFQaKxMoe2DDFF5nPTKpSQnZGjaea45VFZqm7kFM3bVMy4gRiAMkWcX9gUSFLEMS4vid66",
  "key28": "5bD9eVKavgxqXgp4ZStJ85tyWJg8a2TmoXUWuy9EF1t1Zg1ftRZk4SUpySUuNLh2GfAeqCGQkQvGQyy7Hq2NCMgs",
  "key29": "3qs7s9NX8gn7zSA7gzrXQBbtwRzegXcUqYCBfxms8vE4dfEPrs4oRVCRvcCH71E8cXGrFhQB6BM8MqqX1Hv1mBS9",
  "key30": "5F8Dcpfip78mAcK9R2rSF6B7memnikTWxxZqzBZ7rnd5Jgn5EBDMp4r6VR3618bXTxdAmcER9PgQvLrY4YLRUjuf",
  "key31": "2x1MyFADPjybpvk4YjDcmEbQ71PLMbk56jqbzQbK6vSNo9auQHhVu4GBU8j2RdwKYnEkxDEgQEJgWNdZoFmUWDDr",
  "key32": "ggwPBczbmNAiwEmq1pvAoxXXdRDMNsF4K44mM1ZBrh5y4evmuS5qu9G8JWXHWRJhYYPXKEik2tk1EU2VdBq7vWH",
  "key33": "2AsT8V8CypMS2AeWc23NLimrjujhRUfzVn3xUUzcGxUk5Tnk4vpqzFh8NNWa5zyFhKpB9LDaKfsXPwD88xeygD7H",
  "key34": "3LtEjd16r45JdZSBYRM3ayHD4neKBKufRgmczTfG916Nn5hSW5fhEAzieXYLWx5GXfwsmygvFXJdjZ58vTfKU7rE",
  "key35": "2EDMcXz7UamLscRNDkwpGnmPqWEZxTReHD8A7Cw5TLjXEcUTjvDR2LQu4aXdvLkiySsMqigUdFGrw7j5xtQ7vxUy",
  "key36": "PJMedpHLgyKhVicvjNAUyrkfZrivFU7wUC4ySNrpR8PUjACgVfTJudMWcARHzY5GVtc2Wmo1hM3SHjTvZp6meEu",
  "key37": "2SDL5w9tErgoHSsZMADit2pUZiV7fNg8qSuqpnQFK4rswV8U1FCvz49XJi84ifarVn9Dc7GB25FcQe6XJ4HCCnic",
  "key38": "54KaQvTHqbjKMACRLL57smKXzErus1NRig6usWezmvzmdZC1yvB8W3YygGdVQkgDKtcA42wudTL3ZvqxvJK1dSEj",
  "key39": "5oYmC1sCC7MpAevQe6B3wBCynk1VgQubzAbGth6S4R27V7a7FtWZ1v1mcAZgAc38SofgFqiEhFP2JWVEP2YdX9o",
  "key40": "2yF5qdzi3ywVA7sLsxANeAkNsFVYx1PUcijp7sDPQJmxw7riHaVXScUdif2M6Suiwq4y9FfTiQRuSWzc4ndwNCkG",
  "key41": "YzjZSn5iPK1exh4gxe2XGjodZgkcnR2rntp1bb5nuGb7uQio32hWCJB8brK8LWGJEsdgBvro9K6VWGvHMafMew5",
  "key42": "2Q2Da52wJP8gC9MJ4kvu5H5G1hvKzakaskj1ZcaeZNia99rquBJbfmd4G8TCFY9LdoteiRYSTe9tku9Sa1Nz9AJd",
  "key43": "2kHFvAo9jhBWjx3FwNeTMp9N3dCD1MLCs3NM7oZiVFmLiFKDTPg9KAr7W1Y419Fb6UJjEZjrTbV7QTpmRkWB3x7g",
  "key44": "3rHUqBrWXZtZafHMrRW4ZmMsWmXxHfjj3jwwckSUX5sos6cvESFWYo18ZrytbFr3bJr8LHC6NsDj5McQqTghGgjn",
  "key45": "3UZQVW4Z68cJXkhf6dKTe1hRqJZSoqYNso8PZ6QNc4h3G3Kjw7nDC33FnN2R4GXhUn8W64QaBPtRiGKU2Qq8Jg92",
  "key46": "3w6rkkSpzKGFymB65d4gJivHWEowuaUZ6UPLsEZz1EQPd9LMq5NUzUEettdBCNrLbyWPgfQGCJSrLkpLq6yP9pjv"
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
