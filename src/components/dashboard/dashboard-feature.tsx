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
    "2zpdkWb1uHU2Q56gubtFxeF4Dtxq6RjjnFwCKc2CqopSDHBL4zMYyVXmg1SiAReTZ8DwSuppyKxpasFWsc11Zpir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47uuasbJfJKQALNNTo8hhaytLTEfctws1dVJfPiBjtozo2ctyUpFtPYuxaTjunHdkHEGExPNDmu4Dbauzc9Ndzwg",
  "key1": "5CpT3XJJDvMhFoY4AagHSXcM3jGSKmxFMxdrF8spGuPdJZp7hH3qhDARtMt98xXbr4M293VmgvjL41wBX1omFWJa",
  "key2": "2ci73YJsku3vdx6dVQRwMFJwMrysrrqY5qwGWahJo8anvRnmXMqSgT2FZQqbyhTxGddGQ8Qr2FELWVuWEsH24vhg",
  "key3": "3rFUxe9LdyJ3KMG7htsVVXn87Y68uhPWQvjYEAQeBkbqH3qriuUAnt22G7H4BFXYky2DzGHxZCz1w4moL9UxSskg",
  "key4": "2faz63nq2UwQcEH8gkUqEXqEL2o6K1JYSDUzNUHyMQJrjDgePAQn5LxKs6Kry1X89cPASiXwUTZGVpsAFTcbGjP1",
  "key5": "3qQqWScgPJ4j3Vzxh69pgycYSiiAAtHHf5voAVaCoxZML4dhXDA8n2maUCYkZwPvKW3zLK3y2TdRDNLQf7Ayn1eH",
  "key6": "qwZbD8DirDy1N8m51a2oKtNdz9mEEffjiLdhxnkSNQ2oLNr3hCQbMTG8vXW6MhbY51bcptNT9gSJjLEAu6Gro3n",
  "key7": "3W335AG5EQyPbdyA4ZBgGQfCmg6bQZ1PhR9zvt9E61WampQ33q7SkG7eZdxHhjFWu3wrKD1eGPcoQHHYhBYaTXrL",
  "key8": "8VFpb1NuwX5AZxANN2kvW4LUb1v7uyGYZKFoBqUTRbAc7BjsT84gbWYEDnumAigN4wkSpvpjM8qvWrAtVVrJ8GQ",
  "key9": "4QhzNmqg4QUJDL8ripwWBkWngjsskVpnqEm1DDf8zP3JbTa1MR2ydn17AKTFxkLjb54B6HTZ5gPNT467gfheVX4B",
  "key10": "G8KhudxE2fDFnW9KmpcY6HHiKLoimvsihYndXSmqsanZTiQgpgC8eMNym832d4DFfJLpRk9n2f43B5SJLrCtbSD",
  "key11": "3a5v3nVp1sWcdghhbH4doQqZSYVaG7NmiR8aTZ4pSrQUVLuhgDG85aXu9ksgnpDJFLqBYiKJPfjLK6UpkyvcSDif",
  "key12": "2QhD52obdpPRGu5BhvkxLyNSHxvs1rBJyiKhZ81Gmnc8q9vLUBqKqWfNVwRu2n6f88UVLwnTAU3uVgJzF9X1pBCZ",
  "key13": "54KAzKeYRqWuBQ4RGvQHs94ebAjaLh9hcWJkFc9J9UHqYNzzfXj638CcHXTFLhUv6671CVfNAnqqdsiBkGqC5oxf",
  "key14": "2cXNJwdqi6K9DX74DX8ETKWyucV6wzZWZBWs31HBpJprTJJc6FcEBZEx46cJaB3kJohxGakLqkmcbjDvgGGAnBfq",
  "key15": "61SaGsaTiwmuZyJsLPREgAeD2RkEBJGudEKGfv3p6UreSNb7vzfXHGvyDH37vAR7TS9PkwJWBNQ2x97VmBKyvGJ7",
  "key16": "49PMMSnGVHRhGLEbwc3iNwYZzqYZsoLBJaDbyhbZr3Adpix4KPishtEECi1MM29zHeJZYfVaTCTNffef1UmYMR9X",
  "key17": "3C87i34Pve82VFANwhAp9tUgnyguJVcgMRenD6eQHTftCZb2A4CrG8HWC1rWPCKonN7Db3aS4i2a3fR2jeM5Tu5d",
  "key18": "2oSKKeKHTWvTRZShCjjwvRXYBccSS4TVQ9sAasetEM5mD3KM63Loh3yEZaeVUNDzfXcBV5PKCAFfEHiMDaXivAym",
  "key19": "3zEgywaVj3DgKt4EJaZcotoCgd3eKfoLJucd2VvNU7ZNaKfFKA4YDa4g4UA9TndbAPA7EY3gPkd7biUY1nLmHSbu",
  "key20": "rs4oRPPkZi4JPZSsZdkJqYVbDVKEJDAM1NmSCECAsfjp9p7ha6rxKQJwymn1c4YqTaYrge3H4a4sFMLQo2VEmC1",
  "key21": "1b69T8poKfJG5SJMEnYHpuaqd3DbWjKmGRsgXbYmcauukMDxpDTuENbncdtQyWCKuijzEMW7bMqd7PkUmBqNmJt",
  "key22": "5cU4qC5JWRzUeNeRskHUjBHaFNVgXzn2fMQL33zSTStdhRbCRW4Awuu6CHbACXyhz4cu8mNomRQPr9WzuxoyRh27",
  "key23": "3FKiSZRZabhTm3SihL5ryXVmrtxdUQd6aku77GFb8FhJ7gVN6eS95k9cGa3XRego9LHqKS3QLGDyxB7Leij1ZfQQ",
  "key24": "EjQq9nvjzGAZaVnNkApT32uqcuHkDrxtnPA8kFVBufgbsxC82GhSWjEtoK1mngLNRuS5hQfPGogMy3fUUrRhp74",
  "key25": "NiZV3qvZVFgrphfmYapHZkNCap4X4wcAC9BUMf68vsNG1w64GWap7qrBYgkBQwG7mjiG7yEGY45Dm73syi4xRex",
  "key26": "4NdVhWASVTnUgptUGan1PUcrZtSK8y4iK3RVHTnWgA1dsPJUDTQrtco3WJ4hXXatwaKdukdfTmZyZRm9bjBMibzy",
  "key27": "65f54oBfL15EWe1s2UQF9KnGMsxzfzT9QLWSNTUaM94Q7TMccCLYXg6Ax63NTp4QD5NX74MtjK2kK82hBiQ7GauV",
  "key28": "4C2S96L4YxXjZAU2zLwemzss1RUS8wT8gwdhqUqBe63E3ratUfdyJtoYqTgFc1C7wUW9sSKWR961kKS4y6D8NKaK",
  "key29": "4nMP9eGUaEfc5E15gd7XoA3WVEipQEuoFdidBMxjRkM6bkKcdigYnMTij8HCWkR1gjVWPKQ8NbVeR4q7UmMhbZFH",
  "key30": "4HdSac5KdZrGax3CmXQ9bwyw1ERKz3LqU7KvEmGWnnevuUtZkx9QfgEDkg2hCddS8tqzZsoKJRiNb9jVn2KnaCad",
  "key31": "yuvUtrccYjp6kAD4JNRToeB41syQ7aVCyKfLX6CuNMZ6Hd2wddcvL5mX1DRaJ2tiKsA9aYEP6ZN15txyxF4LiX2",
  "key32": "4faqbsznVnLshw8s8muRgAh8hhQQByL7Q3FKyjU2urud9AmgdpZPf8b3BRmZCB4zXzD69HfuVc9DR9NKsSpBBJQN",
  "key33": "4av2kfwG6jrUBX9q8g4vZVoiUrWhhkhzr2u4Q6q11PvNsBfyMz751mR1WaR1Ctvm6aDLLmHX8S3Bw5SoTWMN4Arf",
  "key34": "5CMHBG5WgRfdQHvfmbeCjty4KXPp9RuqJ2SH31ybf6RykCnEFRCrbmqscPTCP7EDQV9LtPGpdV2pyXcy3x6ffP3r",
  "key35": "5gViFAbDvAZLSpWQdsJCnPQ7pNyeGdx8UKYwp6NNPkzZDNibbgK8xyVCpWsDv3GFw72QRD2VmeQ63tg7ubTPpCA7",
  "key36": "2ZBVrTmeWNLWGmFiHSc5YnwZV8YMtBVtBo4FNAY3vz3ZQEhNjh3nsSq7pgqmBpnBKxVAt44TseKicVwMVtzMYaB5",
  "key37": "21C4DS6Dzn7SDSwhgfecBfqevRAWK7ySBS6kzwpzrkAyTdb3Fu2hNhyhQiN8eGvgE5vtSs5pvRvd3WrCtGp7SXkG",
  "key38": "bV4WrWQ1UuzxXzGfVkbzpR1YXjN7WdkydKcXmiKUyJa4WyknybG5XmgTqLcr4pe42jSAbmHGhkVU1fCMaSvKRvB",
  "key39": "upKJBCnr5LaWHrQwMZSGpWahiL3Q2yfAi25dvddnW4xCopzvWiFvoiPgAWce4FJHPcfv7Sso1XqZpqM8UMmfUND",
  "key40": "MT8Y7hyjfEPDE1D44J4DTuupSr5a8kxZGbN5wDLLgN2WaTYg4k4eiFRiU1kHbh77GH6o3bcq9KfYRyEAirzJSxv",
  "key41": "2N9vQq1nuS8qfdKfi8AkeDF25tNCM5vgEUPha9o1sqsBwEi7ywDJALgC2drh9GPB29eDdogCu8SzuvDBYSWVL1En",
  "key42": "2X3cZgZtRh4DJ44kA3gd1ZpUs9PK77PcXRZRnkLUVeqjht8GGGLeFuBnXjTpEbEdb2EL5PH7UnuYwqi4QQFbksvv",
  "key43": "X7kq9rsYdS7TYJpUybrxWeYCbZSk7oapiEhrwD9T17wCjvvd2KU4wMXQ21xnHzzhbtYkGb1zcaKpH5w497TMH4y",
  "key44": "5FjfcdYP5rJnuUWcRA16GSUYZxtTV9wBHAwdrEBmR5jY7fNb9m8oKK1FmfzyMrFdai8YvYAofAh3YiBTaarQRijG",
  "key45": "4pFnjKevrTZp9HqxKFGn7Zj7JTsgnxMbFKPBtSzhpjuCYB9asADeWptcqg1x6tAskg1ionePQmWQJS9EgFb4NF9k",
  "key46": "34XKWzQdm15h5QZHoUBDCdJ8AUuT5NpzpiXnc2iYM6ZsDkSd5Bk3R851v6k47vo6BcxGjnj15ig3QuLzX28CCM3P",
  "key47": "2o4zcuVyFt8ccRimhtV2KzRWohea8oJJyjmcCMudaZc8MEAAkjemXJdHFpLML2TXepaTdcA5CuAA68iCCtVm3nHU"
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
