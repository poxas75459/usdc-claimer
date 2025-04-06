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
    "3StoW63aCBEpd4Sj8J2UshQswTVjaHqPrSbvSpRhboSwJzBeAKuAhRhhFqNSDgwcbhNuqL4EWBPhSdG54gSnJcHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RSTUFVF5d4LuvZUfJyTu9VU3K8hbiEEiTr35WyAv9nqFFbZHGenHg5rfEGftpwzVfskxvAVn9qk6XK9tfqWfaNG",
  "key1": "Z33jPZ5FCBC3CU3od13pmeYPiaw3oxwzVJnsirKgpBKphWWUHGZK7taNu97Vjhquacveyi3ueVTkAMd8gDJGNd9",
  "key2": "bHjsreKT8SWAoHez2Cj8QMcE92sJJnnaUbisq87h5in7HV4UmFdaSvpmf1PLqZDz9dX22Sjz5kqaqQfqHTRWLXZ",
  "key3": "2SxKzsjWS7121oAZH2K5HJf46xuwqGn8Urb31CCd5JajNA1sYRSb9F9zFq4PtXtQxzpHJhTfGazZmLygc38Y5B62",
  "key4": "5HJVt9VtGU4eisBmkNpG514yhCCA1cyaGUsARZ88kFwDS7vEQXoEcNXja4MMDd489WoEFXBHpGi9eLi7CzYr6WXF",
  "key5": "Si3NjX7KDzA75r6jdmWCU1MGtp8mYqL4rRJQRqiGrb8r3oo5eEhK6cuwSXqQoZZanCE4vVgAoty2qXryqcBFbK9",
  "key6": "3Vn9KQVniR2cEdFjAqLFdrzUFheu8MG2PWbeYFPCSpuTwxHMryiypESNexw9vEeQYyrnf6ikpZURv2LMzFfU6Khm",
  "key7": "2DMajCadzrsb9PSAd11AcFShuy88YKuMtfDLzFcpZnmdmnbWTVrvnftEQxbN7CZ1H5QiVEVAWxJdNX5rBX7xi1b1",
  "key8": "X292oTQTBWatTQsANDLUHjuxEPDYDtvBBQh7E59LboxNSV5ppEJtgoVSZ8pBSLDxSy9xBN5GNy9zFcPsU1e7QDQ",
  "key9": "fNU4K6KnWLYBwEJw11RnFaEZwdeu5F8yvqEmBuPCxKLeqm14GXisiFv5FFnUayMkga1nRKZVPjL85Ca6z9txfu6",
  "key10": "2PgizzrXwc6hQ1WkiBwkvasGDLec11CRG4abrJc3NdYT9vbRnp211ZvijnZsrMuyqBuaoeGN11nhuf1f6V2r6Ed9",
  "key11": "4GbGvgW1BbMuFFGJwh3cKQkCyL2vNpfDzcUFj6UXAjy3j9orPBtehBaDQArKMZfez939BzavsajyL2bZ1HezrrYL",
  "key12": "5rQt4vD8BufmBqYFT65wWTtUtxz2w8oPxwqkHHSPERPGF2ETbeEo2F6VQF8gHh16DPMRTNL4dpVHVp9yqnvUw8Sn",
  "key13": "5MW3J9BzjkRwzsJ3fEKGBtmJ6FgZUtWW5b53uyfiECuPBiegwmN8jfrTc7cb4KrQyhMhkmACQiEc99N4oQi9jv6F",
  "key14": "5t7MxNHp3VgXzSiv1Cp3wWDqnFXjdXTH9adCihjhDGrq5YvyVDeC2fCVUCdBCudJD64DhtFy9uN9vphuE886UuFb",
  "key15": "4nNQsuqN431tWdjD18tp2q3ZdagHNj9hwkruF721qGRPDVP1VWdqACS9DbzxhViB7EzsbyRA8VNB7ohwCB5XypT4",
  "key16": "wdPExWXVqCCP7Wu1CZj6xUJqqAYMjrKfynp4ADzkoCzW8yhWepTPddd1eMkQAKpJTMyzDxheWvtfDudYJTEKoXZ",
  "key17": "3fkk35i1oJgtdYcbXZqQPTxCuhpDYBXMRqk1wjVQTnBFPigJZ1VRJRXeZMdK6mon7ZPsLT9m1ZjKUqB197gsUCzi",
  "key18": "2BnVYTn25TDhVihK9nVgE6XRnYyUSKNmJYzLR9FtYfbFoXQW8zqb4nRwHGCM5W1GoZvQTgm4HVX86eiA4C5ibaZR",
  "key19": "5HGi8XRFALK9PeWx7Tt1s8Wza1PqxYLB4WxbBCmGTJuuX4TxBnVHE4aJ7FoFpNXEPuk1sqy8Lg9JuSNKyZFDVQPo",
  "key20": "574HMwy51P2MatQLjyrkhz5HkTcpHS3X4DLhNfr2bectMU9HSdozYnDYgcu4fqJJyU8qM26ra9xvsFKstVA1V9p5",
  "key21": "2et1GAQyzcGqvainEDYZ4DwHURorPiWgt72ZRKRHXZaKj2nwkXh3QwNhLqJE49DkAgz4TJY2Bb1U4Ai4CAz8UeZt",
  "key22": "4fzLtwDUAsALV6PjRCd2tqFgrnjcsj9xvTzjUMffA5BexP9XpRWgCVpXHm7nd9rWZwDPC7KTJHhmCwGeLvuGEwrL",
  "key23": "JYgMZKKyXCG5gYqH4SGuspLhbD8jGRwNa2Y7x8efUmLSaxAJHkK4LKUXfZ4e5VYtsw8xQXZcCKdT5Cu3igBMMFL",
  "key24": "2QMLqbuB13aPQjJP2tj41AQdEUDPKVPsZMKJBRSYKLejD4Ui9mbiqQKooUipoXbAutXk7Kvk8kvTsyS3NUYKnmYj",
  "key25": "3JXGfTVmcspVPUPtmc9hQMA57Leo1H9HSr84khC6KaD9AhBMr2VS4SQsRsF7tAEHZDZyjVLoQ1owprkG7iartcb7",
  "key26": "4ARgzkc9AyXoS4yDZNrSQzHEF94pd3HpnyY2upDx8yV9y3w45C6tDhh6TyJgkyUwYdmxYQAYX9vSZHoZtjnQwgo6",
  "key27": "45rnj4hUtZGeGxo7F8JvVA21imvHZUUvGFSJuiT5TSRHE7Hm1ARhus4UtXmDnWMFTcL2KUL3bzbp5DCqK1mC8iwi",
  "key28": "5UnPFn4RVw9bFHVY8Lw6GV39dgL7y3zsdJbZ7PPYG59FsJJHkXmDSXPJS8tS4zSwXfAf4nBVWM4xtVJVemtwEmRL",
  "key29": "5MKJpKSTVBeosh6qsQN3wwL2EMNKm3KSWGQUmGMwAqheW5XGnwiLBgYuxmfi8KUru3hNSZCRog99t2hQeaQQHU8h",
  "key30": "3eDWUFjttRkZvbrrMEFeUtB5bJuhWn4Z6KBQfB2CAV7uc6gyzrffD6SqwM3B97zEnm9Ffp1N61hbvr49B7afMsk2",
  "key31": "2j9XQJUnites226zjwFy6ADHEMZDxHdEgcvM8dvjfjn3CtR5fxoDo1gZwn88qnNciRnw9tHZNXexTYQCo88WfLNF",
  "key32": "5BznQwgwD6MJT298CmoHGgdxkJrk8Z2hhmQvbkWryupws7p7wiG816nyiF49rUUwtGjERQSnSwXriR7ceBLD8GFY",
  "key33": "362UfwGf3MnL3Jkim5Q8FCGc47fLu3yH9upiKmn6pU5NqhXfNJYAUKRarfuwjEdRkAWcUJz9aMsjfZAk1A1AYULD",
  "key34": "2Z8nX4zZuMf1dZfraZDSsq8p2hbVHkKDb3aaLKb8hUSiDUzQnLB83qr3WEjBuF62Z9xM6aRRtxUNFNPW38egHQGm"
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
