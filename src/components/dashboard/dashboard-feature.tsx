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
    "5Vh9fqX9ce9Z1CK49TiDybJwxAt265Hm9oW8NcZJpZUvX8Qcjp2Jg9rdhK7QtCg7bG2XLQWspJA3Azu12by9DcUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V6k944AByD4HkNB7nZVSdAUbqxC3PtgitPo7WYyC7sjQxWpjQqJp9iRttfftKqLUxTUomEVsvetCCfzxLeP2ykx",
  "key1": "4fLzjAMr6s2Af6Hmuvu8j7ud8XiJqkp2ADp6AjPJNtvaorJWYrLqLkc915G6CBK8r6AvZ8m8bZteNAtgUfro9vur",
  "key2": "77atMvA1X7PVGYqCuPS1A2Lg82joAb7nLzndgVR8zsoZDvESumw71TSV6jAcVWrsGP4U1hzR32tZtGFSfVxhCGJ",
  "key3": "2X6d4Rt461UMNcdG2xjSxEjRgytPqgPCu5tKuLBJTHjnmtQWaTHBRVubLSdeVWYbqtTAuMY25rWEVjPVGmKKLpk4",
  "key4": "2Vs4V62BkRkfKYzMBRCKmWSDVVRDjQWWAW7kfsuc4CbSHCN3WDrbvSufW2JJzMfr7FCx71JKovfuGDzZi2cRy6UG",
  "key5": "572kv3B1VPduBKPouTDwhY24vrMPdsSorRNZdtmxDXz6KTPwXkkabSVgs9CBD6LaMWb5gDqKWqxwPVvhk4DbyCoy",
  "key6": "3z3RGAcPUJFPqjkQZrzMazRFPuY1yZRU8VA7xP2DLkgQVaRN62reSR4K9nqM15YxP1gLGL8wFUFzDJtksF2FhH8z",
  "key7": "63DuSSJbYc3Zrb77URyVLsrVYBnXhsVjc2nxrF9yA7XXenPbd5eN9kmSwpvc9JKoETxCC4D7KXnPJgruxWpAay1w",
  "key8": "3sgDXSRcj2N6VLDNyV4fcnvW5zjoxytG7q5guTKzVXgdaw1cLTV9itbxHBMoUYCqDHCqhhLxqjcK9MGkKP37Dm8M",
  "key9": "yTEgeMohcLtQfzivQDyqxcFwDwcHYkJzJCxD1ALqNbHt32Cppgio4pWV16NBh1sgNUesQPeDCEUGTB4EX8jmuAF",
  "key10": "48sBUpCn1VJTHVtKj6v3PYxKmE1kHxFukd9mwqkJdwkMDqUeuUHyDMLpsA1c4x8uveRwEKtQ4C2kpkFcWhNm5Brh",
  "key11": "5NZ6Wxi8YtkiChZaA2v2VHjPP2Ere4kyUUkx5AjV6FkQzSTvQsy9crvhbRfU7oZRE75aHr6DvgqmzAiwsg2AKuJC",
  "key12": "3oxWmNfqcNKSFuZAWoQZqXs5sZuTKxqdiCyQUiVAsL64HV2B5PaHDLLDgyrcwDFcuZQeenTamCVPCHpU16or9Sjs",
  "key13": "4KKGg77bzQEomi6aTDnGafr1Zt9MCGZ7ZWARM3uTu7TgT6HzWsZQi82gRXwMZBsvgxmSBFSRsu5XRwhpK7mMbXuN",
  "key14": "3vNw6H9HYY68iE6MgWoom7XLT3Gn8dy8KD9WqMHMC2PyaDLigRzNdnibjq4H9N3QKtWJCuXTyoR1Yxh22QagRJmi",
  "key15": "4wNeznQ9kdtzaPsq232cMjBdNLXseKcjMETmxgsmiLQ3VUo52U1So41AATD5ja9QHTQgdjArDMShtuoyYua8Qiza",
  "key16": "4vcnQqZ64T8XooJXATv4H7D9opjBw59tD9pJeZADkuZAmhcFUnnwYTBCJydPV9JwSYqZYnatSdeW1QsXTjHmgwXL",
  "key17": "34h8a3WprZwyEYX89ZoWLebq8VYgTC7tvivyQDzbQ8TV7k3uAZ3ahFzothZaLHmgKoWGSTDo4YCp9k4iiJyuTzVK",
  "key18": "3ZYKh4mtgzU2TbHBvocvME57WZGaEnoWVDBgrmXJ69gshM545CVxJNQyoDsCCfffA2Nw3Zh9AKqZ2fS1qdJmKNWP",
  "key19": "3tQu9WKx4zdsHtEC3j7FkSHTybd8LT6Ur5AURdRdCWgznJEdr1m7JgdNcuzEUmLoT4He8zVvjtwC5HNLRzWHwqAC",
  "key20": "51iabtsrztciG53haDVEUkwP89BwvTeheKC63nW4bAHsXMHxKCAoiVdpHWnRwD8PakW9WRW8e4oatWCWKnKRkfut",
  "key21": "44pzYfqiiinMf5zLvrTkERveNWYfFgPdexnVC6F7R7kX7AEh5RoexkpqLdDC74ugmtL8mLef6VdfoSGPLZQtaw8t",
  "key22": "2oRhervgM6LRQD2R6VVh4ApPXVqD2UEKrpJ6BdDpDxc2nqRhwgW46RtXzLsZfuZkGYDopQ9By1fjzVPX2HV3VGRc",
  "key23": "5S5PTGGH6DxvLqo9mZKa6Bi4owBHe3MESRrxZY7XLzTpnZ5cqeGxCFfqLJrDj8sCBRuXuafT5PuuWejNqgVahF8F",
  "key24": "2vtCTAoyQNxhJQuE4Y5VmFL1TFcHwnTtqAePUFTWfz6xvz9Dty1Yaii4puMnbXCvJRa4WPDHGAj6Wst4LAMme7Hu",
  "key25": "2mZBF8J8WGff2YmJCYwFkfJPKJ5t91ZYsweNBB1o5i8RaKDnpuoiaoiMAy4qsMm6QFXhNRLWmci5A1jCfqexcSs4",
  "key26": "3HP3V45Si1bjen37BZFHe5p7JRaECjRiM5jmrF4PtQV9CDdgWgYGqgG5RXeKGqhitrJoYk8LpW5gjkRjzWxGexWM",
  "key27": "3XjLgGKAzHcbT5EmXMHAW1hH9ig23gEfFoduBj4faVjtaE8KrouymcGSRDzWCjxuSdeeipfWGKX3hk8ZzosSE7QV",
  "key28": "2zHZhYYKNGeXYaTGbAxSeLiwsuhv6HfcjcaivGjB1mAakoQhZrPum7bQKnB4DQpmsJWZtr4biqMAXdg1a6CD42xH",
  "key29": "41xn9pzjX4tDPD4TfKLSLk8UzftiLibcMbJbR1RuRBU4JkaPakXvKhRsSLCtJUJteS5cCtEtx91NpuoA1sWLYt6V",
  "key30": "2BoAvPFouxFaWv6XEAmuqYdZ7eFL3AzGKdd5czMh37JdJFcy2aZbzPfsiwypNWrTRDEEsvjpAD1zhdeMqhsgzrVM",
  "key31": "WJViruNidG2FGafgzPry7hvFDN4REzEnkrtwK9PBZHTDYAWVpD6cAcuWAxuFUA7C7BU4w6sTPBPK8bHfu76pkmM",
  "key32": "5gcT4b4w7uf4HbpLKHF4A575mCaRfnNNzyqArKz7QgYhrYpZy2dZaVa9MDdUnDVejZzyoHtqDt24mfn2gMd39stR",
  "key33": "38XQfuLa87ZAzLf16tLNVksCqbCVmBnVAojw3mu4gfzEisswBpfCA5hQhkB1PHktAuUVTie7NoRB4jBALrtNPBN8",
  "key34": "QQkp7UFubNg8Wt8jCAqijkGDV4XCPEwP288Tn5BAg6Prh78NwMR7Vczcv2zkyUMhM1hBHAeY5osQfeeg39stiAg",
  "key35": "4JP3oMyJbckD6HLBZTvVQBeGEnEhFb8U4NcdyTaozJrjbBDkZHqutsF5UCGyBRDsPga5cqsSrx4yjrWWZE3WBAzx",
  "key36": "5E9X7osA7w8kXcrp8tzt5L2mvYzbT5aYdHswMN5qCBabiCUohWZJWUciKJ9SJYSq9UipjuT1UCVqqZntvSZVGbbs",
  "key37": "4K9VxhazQLR4fLV2oofdEXvKvT82ByeBZHoTbV2pxQKquVe3m8FzroGN4qPZWs93ErpGhwsjjNPWJroKnduhKoCq",
  "key38": "5emrYXAijNzcrGPfyasNSsJY4ep771q1SRnLZE9CNvzVkyz5PxmA2pdDFx9sUoKb22Pzzc4qtWZphkqCBvEJ51TZ",
  "key39": "4xssfK1p69febvdQBYhzXA6uyd1YGctGHYBJXKWw4dSjAWiAuVpoMP4KoRXG8Fk7qbBcKg3NWMXyf8zpdXE7Zja",
  "key40": "3uSNutbjmxPEi6WS7xvGHYK2WyCAfH7i5z1nCe2GSPjC26QfQjo5vLcGstVhFoYQiM8a5WDmXyqVxvsTMKMfUBiR",
  "key41": "G9k9FhWjaSsR9e7euAH4yv5kqqtjoVKrd4RjLz8gqKwc2NqiG4AfR8t3ZutJauLueLAPiNnuufTPYiL8q5F1v2F",
  "key42": "CYxLdJrb6as3nrkEJzgYL24njCupGkagGfAUpNLAADxhzJ56LE5pgi5NAa9hPWRu8RzPuPRfyrHs2FDksRxZ56b",
  "key43": "21x6XgSzbKMKuyRxkxsV5pfVNn66XeCmVjSGgmWbR4Dp7N47ga1p5btcedsqpSQao3sfJX1tspQx8Wyq8irdUyBd",
  "key44": "2zAhCS4ShL2qxUnpTV3NtzetkBxu2vwgmYVKeGNyj39JJqBfkeALd1RqVwH73Sd7dFTxanJSe1Rnw58zKnUtnfG1"
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
