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
    "3hr4QtXmdAYE2khoKTRix4vprvEUn8R5b4hLkr12p6S15VvuBhfuiHJpTmmv3YzPomFcPw7xbnEcfEkcFXTLBVeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zjzXzwUMWAHVzjiKatqwBpWe7PHRJ8n7qn2vdEtwFJ8f8Pc8CVd1pijhcbPmMKQSfQYiUUb25E41YBuhEAj9Cg8",
  "key1": "C9797NxoRqkQLGHKDg8obaaniaRMcWVGBDKXoNS2aNv9cU9WTkLbrb7fr3MbSBbyTAoYzFbF2pGxe57jmmhn9Ny",
  "key2": "5wMwk54xLsN4FJffaovxAuEEsUzDLa8PuMEZzXSxkzQapQrvNuVa8EjEpRi41zG84E8w4V61vZ1WHz9Jc8WLF57m",
  "key3": "56CMAAnYHvkmodgaiKVYq1it7pXkBQfZwe6TdTaLii7fAYcuW9VjQeUisphN9Sh3zmmu2rnDz62qWicckY6kGqNM",
  "key4": "nuChjieV3y72iWiroQ7znqgsjfrGbiiJYGUwKneVm3GJoLmhtbPw8JczNgymLTZEAkNVQALaseNy13iy2p3qcza",
  "key5": "28BXVzHLKpbnF8o42c7tgvUT52hD1kSNxXN7ykjJXuoDzax577A8FDC3vVMphhyyCFWHuvVHvEqPrNQZqkTqyBPc",
  "key6": "4PVmYuz1C1Jm8gnpW5YJ4RjC6EBSFQqmaX4h222WoJKsbtK1Pq5GVhN1dsjR72pMXpQDvNfYG6nRvzegtFCxcSw",
  "key7": "38ZPhcM2kLKUXtgyHAqNmqZzc92R9tjPkQXCrojmbHXFpMMbkVcvNL7yq1X7di9xRJNRs2xQ9kSJmnYAzybM5jya",
  "key8": "3xmAG8FRYh7fFcFLt25k1wPpQpDyrngqEKrSHXr8CzxAc5EXDKxsR9PMZ7KLFXUGrCj5rieC6kaukRDVnezsK2oN",
  "key9": "r5Rv8kKiWRBjDgmeko8M3izJBSSgzyHbVZGJLdswPvpwqSK2kZsEwYXeSxceMRMZN5Gxy3u5zEshW6WXt4XGqJT",
  "key10": "yGDxapwEmRHqgfdKi5imsFsZPMRYktDnnakKwETJ2o5o6myNFesQGFtTLfo7CsbCuQG2XgQXr259tLJgXy4MVNs",
  "key11": "3x3sCp1nXmoMYZ3RMABYBNsQ6wX5XPZp5c2hiKZzZXyzBW8MvucLDTJTVErKw3JiEab7QdCe4pfLARaYi5FzdYjH",
  "key12": "653BPJ3ANzdbbkWqKGiYGWvFQAuBCYbLny7nZQkizK623BEi7tdPi3Eyy4YCs8hYWxCdM67W5gdUmiEZQL7B6fZ3",
  "key13": "4wPHSAaGuRhA7BPnt1H5vYbTft21aFuNjzWiG7894vaXLvKx9AqaEJcMYDMqvcyuaSWchU48XvXwSupVdimgbNFy",
  "key14": "5ErLPfLryjPfRa4j9upE7EQZqrRbZHFw41cmgodAg4oX5au468GkKy3HgEFNhwzjBQnkWKpNKFGdKsji1JWKhgw6",
  "key15": "3gY6MvUJUAk16bKjXcoPkzjYk8hv9J8eczzWo1wfYtRyGd1bUxaN327FCnFFutxNKtLQune8iyc56uW1nL7Ud5Zh",
  "key16": "MwhUtu8ywCJR7tKZHt2oCtZgkxXJ5rAqpE1PM3F2vDwnPfKdi6N8VySUp5fnSDuDfhsx16KeV3ZiaxSVfC6z24G",
  "key17": "5XBzSvAUC9CtbWaZhD7aG5m6gAsCuWSpXimr5kkY7DhMYMUhpvFGLeZkQxiGZ4PqKCcGAiiFPT48o6hvX1LEAFGo",
  "key18": "5kX65uwSXXX7wq9Kxuj1nzPawGDuE25va6s8B7xmZMRrbQihi7kNvF2XQe5V3Du8KUtFMPYyYer8MsaVUPocDLUb",
  "key19": "5bv83zSUzBWNUr9ecfjr8rBUY4YN7UEzK2hEtLPEFAsFsBpTd9Jy9Cw6XNEgSEfB5tUdtbnvnrm7V8RXKwNq7rzG",
  "key20": "bXtwh4Vt7iPTqnyN6tdx1K9hYUkt31GK9gDWvR2JukpA6GA1Ak73cvjvxa7atdRZ9C9qDNHTMU8pGNChuTVoUrz",
  "key21": "Gm6U16MnDgFnmqmvbW8m7wH6TLdhDuHWDe3TdPzMwdFuXGFfK2PhDX2MUm1FUXw8YEvTukDQDNv6GTygLGMnFfN",
  "key22": "2UL8u3KjcdNQEzePhKFL7gF2R51utUmpenVFkEQ9FCwrvGowAEwH4iXZRsL1ahu7QYdhHT9Sw8gfHJDsT2QJatJ1",
  "key23": "3gikJLrDFqGQBx4uMLw5e3fs7HTLKhpFgqYWgxd5h4U1RvZBCPnUbHLKT7zwfgNvMdnf6e7WkhFutY9zsRMmMjct",
  "key24": "5BsQoA6BsByUZUZYHwS68xjWFXktF7me7hDQYBeNDhFuUoAqA9MbdXonbRA7tUH7x6BRNoRwptetS2ePAys5x2HX",
  "key25": "4JsSHAUu9gYsfS4zs65AfhVXmwhxzGpSD8F7ZhPSzRiYayjC3Z8Vf7YwqJBSyyeUAdY4Vki1jrMCCVky9Wii3FYJ",
  "key26": "41LKSMRp8MNuJZswzqghJ4ge6z16wMAT1Lq5rf6LS7chYy1bmeANsPKjYgDAVuhVBECogMx6mRSS14oAVPZ1CY7V",
  "key27": "2RYdxiTVNgowwZZanApd1Tr6chqvuVZzBZbtmL9EkFcWPz2sonoqxef4esJKLVSKjerFSZZDRw5XFima8sV3jmub",
  "key28": "FiafAqrc12eoDv5uMVBPZKHMjmKbwGmykC6B4XgcRUxwMwSc9pAQVSMx2RDHS4WumoytoCf5ixspy5VAwkEZPNV",
  "key29": "y3W8Si3WFEFG3RByQw3oAHbJsartWF1pynxo5BiRiQv1qhuSntA8zGab9fkt6bc6nX9RWWtKw1QKnAgs7v4KSWM",
  "key30": "3knnFgcKnXjEZQgLky917SseXrwTixTX5mB7RQz7PYj4MEvaviXwJZHSbmeouNNsH29BwGkbkJcrovpRdvwnaCNV",
  "key31": "5EkLdUn5ZW539XGTtUg894nJzDJwXjPUnpPkCM9o6kJ11RDvXZfgofeEedfbSvaeat7kYVJDfLKfTTFAwCKHkSYW",
  "key32": "2tC9BsHiMM9wdqK4nQ98ofrU8qm15HNkABtwyPShQA8uATCCz4tB3vm6CVdLK8MHLUju2EEFBEvYyUfKUHX8XX2w",
  "key33": "4docJWWA2j2WAz7a2o8pT6jiX7xcW8gRmGcXqVVEWNd1NbUy1uCbWpDv7ddptzGT26VjhcjyS3SJAK3ZQPkqwMog",
  "key34": "obWgGi6YnjZhpV7NGnK6zV42EhC2iD3gacQgUi5gVo5j8vhVqPb8YAZYELDky8xPcQbmRUneYpVBao8TaXsKxt5",
  "key35": "3cv92ix23XAZ4vjerBEE1ofUumWC4ki4rCfZLSvK7BoPX9vLdedvpKWsDrDEUnLzybtQDHMw5wuCtG5qcDwQyXJk",
  "key36": "4WUt8Kp3eCsDhDSWaTtfCoZPD7tx89jes4p75A3FutLsBKwpHuiiPQTj7Q95xsXo5CFQSFVuaHefeyVvTimT1oxu",
  "key37": "251Hfb1wdW9B9874UWoPFLivHVpRHE5Z9nSnZiuGkzQv3mq8ozKvN9aSxvVvWvVrFu5uBgffruwyHk3hxitdWRfB",
  "key38": "4vvFevdew9AbXCu74sXnz5PmKeRcjy3ehCP7mwGzt3PgNuC9kNew9ys56mNnF1EheDDyzNScPgUmXSSJBMsJ1hq5",
  "key39": "2UVrdoe3Nwhyx3HhUx6BMZyzRhdFutdnASzLbtEWRWW5CXT2ZJo3Lt2GMrjMwwawfcjpQczSqadhA3zaWdYxhh1w",
  "key40": "ssPDPE1QKjcLd1AuVp7DM94Spr8iuaneHTQHXnzwAC2KFbhzM6AViMgwr9xh2qS6VUhgnqNfJSMbmTUakTdfYjW",
  "key41": "4HdvGWESwg5Rk1wopiaXwBRMoKP6Csd4LWhJoTwnbLGiFz16bX99264DeNCXQ8Q7SsogrwPqK9oNa6V1QWKf6Xqu",
  "key42": "csnTCbkBKuPWm23y2avfDm4F9g1iy3Y8zvi5wkUiQeP5AFdmUmy13NQfghqD7hjEUPCKW6vEa8KqkAvV982cJS5",
  "key43": "2VxvNDUj7WabocDcqNaYfrLLkHtTbzMcqjHzhynvnZBx7nrnrbjUBKXn5epBsNSJTuYWNooSuBNf4tYFXJEjkndu"
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
