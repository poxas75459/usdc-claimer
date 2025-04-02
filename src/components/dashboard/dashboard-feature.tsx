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
    "4WdZSrHRVB4pSn3ttC6hkYyDiX68GwzdyiyW3VUogDjk9Zo9BBAmNzFfQFvBR4baTs4exUQGGBCyFq6neJ2PHQSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yuMcsDqoudC8mQtWyYVbSds8gv4b2C7RhNqB9Z6KaSVfrp7SqGcUKYohBsvECLN19AQiKmKUYXapHDm1ZxjbZgB",
  "key1": "2mcRXkb2KYd2EZoWCkJ87tfTHLQPcYr7p7RgvSYdCzMqLAT3Asc59EPPGU1bhyxcbVPXXrdMTZXZszAap9VVyGmY",
  "key2": "42ZSmS4qPCR2YkMAftaPJ1LwjBXzcywWvKbHEectYzr6CNbrcd6KGS2sosKPDi7gTXD3KhrQZpoCgi8gWyoeBULH",
  "key3": "3iqcTYJZyPEWk4UuSctCUNJN8sCuJm9tpJ3jAD5PyytbAx8tWArE7TpjwBjG39nsCW6je3NYQjFaK9jojjvtneBs",
  "key4": "4hexpATDXJT9PcJUgjE8JVjVtDEGwGsYXxvwHpBmH2twqQsvGJXX7V79D179dpUH7GfdDLFy5MNyJQdFUZQqoEKC",
  "key5": "4RhXoS2kArSotVPueFyZa3vRMneDRvS9Gg889RmGDcirRKavgNSVNrEkErsUfCSgJQQLefGfjV42BWcrQZXEhL6E",
  "key6": "5FeirVAN48JV1RmiWpUNPo53dMCHkTheHxBfU3FqiHtgSwtZsTfxKVUneS6YmSpCgbZZbZoqij4R3exhdJGU8ZAH",
  "key7": "4CkwfC2yF1FD28RhugcvihZEcixJNn1VcsW1CxETgCAk9KfNZdP5Bksqk47Rbytog3mr5uCrSMj6QqiFe6e9V6JM",
  "key8": "5tscNWpTznULLc4ENTfojxxgHJUsRX7mDMau1M1dsJ7LTvi4mxo7X65qL4pXkRWq4FsH4D3sdiVhQkxLYnWGxkdH",
  "key9": "5TzMvCGabHPFSkyRTJf8QdFuSoGiHizmbq7wsgqnVEyfgRHSwCYobP1QLEFYVcqJ1XsMDzJc3zztrxLnrPTewRdn",
  "key10": "2k9dRBKQJEYrweMm42VrLUAHmcEdJVf9wnN7JXZV7SyJSrq64hvxpytMrDpeD1EpQz4HiJNzfRfvntExDJEphvhq",
  "key11": "4Retrw9Bi8Mkrr8JcRimwgcb358jJGGzfATYyXQzppvuURFdVnhuF86XHkuDabyNyaKUCog8yEvJTpWbLERiv5m8",
  "key12": "eU1sChtR4Eo6s3v4QCbVQDFm9CT4XCZKjU8i6jCF98wgUoBX61b2Uuz5rte47gdmM4aVQD2k56jqqZCUwvB5dp2",
  "key13": "2UXgvsLduyvD9GUC3npckeQ6Nrp7snCVczxmw4HYY9QVNEWWM84V19sTFKeLcV2sujX3F6hwo3Ss1DNRgdv13Tpr",
  "key14": "4dKJ3LBQcPZdMwUGzjDyCoqUZ6BKNkzLUVZreswoAHgBrV3NgvnstQBUGgc4s3qqxwzBQ73WjmCaFqCBZsNrdnWo",
  "key15": "4XisYppCpTsjVFszgy53SuDSU4tU32zfresWPhz1Xp235EAE3zLk4E6nBM8cx9eiF236gEP1JWhGW1sqcAnpEskU",
  "key16": "356pXiNLqb2ovt8ZBB1J9S2r38Q3eV1cWoTiWggwDVENHWTgvk18aYDWxR7pimWEW646g4YjB9RQcmQ1zeBuvJ2",
  "key17": "5Jsa39oSjCTk2o27CqyUkYmYWqKzbSGLeYpWop1LsEgCP9YwybcjsQN8bo9xaQBKpzVL757BCTm48eH3wab8KSw1",
  "key18": "53rHgxC33kaDuKVf1P7SswfT4oYhrczV4ueT2bbWUpNbZwPHv1Vhwe2cQENiFD9HQLirGfk85eAuxoLBA8NsbGGT",
  "key19": "KAFGqxoF9wyCyhDBWzqhnhz8qNQY4ogUPnXpSNeoMY7DnoG9p2XqUtdXxaYqNuSQaGHGkkCMkpJqFVw5RRxfvSn",
  "key20": "2xeyCpD5s5HAGxEQViWzPcfVLZCAhW6okto1L9qcCSvwDZxBPRV9p4dxMQbF57A4kd25cH6gD2HP2CLhXpY1Z4BP",
  "key21": "3oLaSUrh9jXrYYPjvStMFacHPXtjgb2QwfrCuwNehXSbP7gKQKZ3xqePpbg5yr7845tcwwqsjATyfT7PqkF6u4yH",
  "key22": "5hCkzJhpqorWJ179rCwJNfkaQWGc8aNrSvhzKAQiqgYKSW2pKuCZBgWV7TNCM2JxahSD51RKpDdNXZTnvD3Bqxov",
  "key23": "4HuCeeGBe9V4xoAQ8TmeWUGMxLx3SDy3rtNKwZWdKVXtNRB4Ygi1EJmeGRN2vt2pTjt2aDExh5AB3WSM2EZRMCZ2",
  "key24": "54PjkkhQx8UudRg27C5edjteskn7TrVMoc59Cwc7MXkQvsy8Pc7gPZCY6pK6JgHz36zKCwxTQzsXWY7uSDf9arRT",
  "key25": "526C8wwpCq9N9R7YqSeAxeB4APdgY5z9d857jaZ4tKKyQ3Z1phMk74JTZFB7sCciB6YGDU4KUGeM1AAf9QVuTmAs",
  "key26": "3ESjTmnebLm2K2NQMsc62eBkxVw9xsp8GsUtSAGuk94Ni7dyya7FZ7WEGXfGSWKjwDFxm2ccBW6npfYuegCdToXB",
  "key27": "2tCg9LUpmoucaurUpjhhdXefxkWAtYXP4n5Nf6HEkwUcN7PHiswv7fJ45b71eNu76J1LWUGzPzf8twvhDowYNiWY",
  "key28": "4J481k4RkEsVqe2pG2aaf9Xiq6wzbUsuRzsAsQ8R5EaNTWeR2USwQDnyNXqEp2fTH4pcc7Rbj6qEPyTPg4twS422",
  "key29": "475q3rN35BgzeNTQd7kvJeymURDJpAK2bfr6722ghzPNFX7iLKsLRkdYTdA1gD3PcASq7TYamGDeqC1EGPjsarNx",
  "key30": "2pT71PDGtZpjJoH3YEykiGZM6YCQVqNN7qKB7dySnnbnyPcw1SrKQ1k1HShdj9iGSb9bWxJyYNVtv6H43N2VAdD7",
  "key31": "p68H6UK5Mst2TPPDPsKjpJLispkWpaYhJ89E3FMZVoaJFRs75pKjcUM2F9wYmDsrdiN6atfUUhoBA6ruNqwHVBo",
  "key32": "33JWh6zL7eg5a49aqGGWWS7keQddMKr7G1zTLXM62KQxwSUpsHDx9mrECZe4CYMiYrFTM4PZ5u6y4VJLV5ZfXLea",
  "key33": "62YTt1JdXtf9v7puA4ouemMWv9H8JTbPNb4pNk1ru4vmNAdqnyvrq6Bu7kSf3AsVko8A6wbVrxUKgWPfsrJ4Qmz8",
  "key34": "4JjpsCrsyrCrtm9QPA2LBSz1bYnjsh5rZrchvngF73YxCFEFYErNLTzMpFkd9q6ZXSTr2KaSyyiSNgTVAbyC72rA",
  "key35": "4NBN2odtyUA5SuwTL7EwJeqzMsKAqCTxsnadaZp7i6ZFtkEDM5LxP6iJJs2wyc8veHqP8PiwPhP4uq3vkjoFbSSE",
  "key36": "2higUpU9naRAb5MZ9MnUdZB1NAAzR4T7ZfJjdiRMQnFq8dHPZfGEK8uMDMiig6dFkKoDv5Yv9AAAZEzZsaZdgs9Y",
  "key37": "5EEfyRG3ZqBcrUgHzFPJY7vVhTfu6NSQW3vaeL8Kv9UXTjH97em4Wng3NARvHGwbUSxopDsGAm5N3DGWeYJApvUk",
  "key38": "4LU6SuUxMFYzqTou2w99sNJgygEhuEGnyQfNU3NDKpwwghnchv5jnUFKVNHgaoS7SZDsc9UFvPi73MdJJWBpfiAL",
  "key39": "5bRvth5gaKCD73meoocG4wfrWcpQLnUyL1S54otDfy4YkdLpVFQMyxMFDeN4HGJW5LR9Hcj1Zcurfg7h6CWgzaaz",
  "key40": "5Pke84aaXyzMmYjFDwNX8mAUNrpwgQM8CVszdhNJ7cNCXxNRvVYgdwALG49JVVhyaz8TWAp4Zdj1aFt79PjRxWcL",
  "key41": "2EyNhmcFZwST7qzg3y773mbypVP59ge14QgXZiEhfnr4kVrHa7NTTYKsogcBFd5WZExv2dzAmcPQUu87QRhqqoUB",
  "key42": "65UP3Jc2gLoY9ZitMwJpD7UxMUH1Nm87XUKpoKAMJhSNHEmjyxwfzVT6nSntA1VMJPWzeH29L1BnuKGGD615sGX6",
  "key43": "2RN75WRZHA3CzuLfc4Znem6aA5bU8JGvfCJyqWhGd6SxApL7GPZqgaVZ5sL5ruS3Q6pXHZdPFEquueFRRZ7DjQLX"
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
