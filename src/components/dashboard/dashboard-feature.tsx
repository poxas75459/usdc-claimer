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
    "4EQFPyYfxWDfY8y35rLeAJFJU5YpH2ecbdHUW8p9jcCTSRjL7UuUoNHHVfAj9D2oQz9hzRJZdbgynqDxwirDvxhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uq4VtmSwDePQNHpzL2UkYERN4g9MUpU6MNDXUtiCmye8azBUUpVNUTgLrJCNzyVwSHgrPQbpP577bVsws1C1bxK",
  "key1": "5frco3oYXLrPV213pjwTfWmRqiESHfDd8VXnxJz382E4tFMCERhpGSNRXy47vMqCz17Jkf2RX1M1CNrC2dezDbkS",
  "key2": "65UnE1GXwjR1gcgRp2hJy7HNF9FZDWozBW4Zocy4x32dtmi6dRR94niDJ1fzmc1TupsRwtUBRt2jpZWyGvdjh2hD",
  "key3": "3wEeKB25HkPg6P4jyPnp23ttMqfEnTmizM2UL6v4A1EyFjfzcxDk8SskPxWgPzn8Eg5dWJFn9ABQBQ3nm2FyrYAz",
  "key4": "5D2NPL3nNteo2JJ7K5A8mMeW4dHCgBGpgcuk4Yy9izwa3GdnWmMafgse6djMDxUFHyBkDNab3LJR6wqj1KG9xuZN",
  "key5": "DwaQu5zdtoxabq57J1rYJ1wpJx5ch9bNLVHTvrq3STgLR1Rhs8tQNhV5vFhy7aX8oxkoTBfB4KSkMKhaYXMVntp",
  "key6": "t8WnBqJA4LLR31he7gG4RpGCU8orU63nPMyifjgnocpAQaSYFZbdYa3315nFP3Ve66cPf2qc64LRsTyey2Hov2e",
  "key7": "fVW5pnzPn4f3ruKTGPVXW139Qi81XESFUnG56qLFqSQYwcuJx8K8exEgXM8dyhwgCRBfp362P1Q8gbmjTYNogLD",
  "key8": "4oTcZSGZ9wNv1LZoAaewpLGnkwLCpzx3gy6wUynfLvQhK8tZvJSgXQLFe26XT4waLt7hmP6h9ZJpbjnAgp299qUn",
  "key9": "3QgvfYsctRyt6d4ewDPtbvY97vqDdDfGot3SkBFq41Xjvd4UDGFdHZrktDfqFgS5qDQN3vX6NZRaxNxi4tDaMuru",
  "key10": "4VfnV6Eqm7fLqnXLvPQQuArU9mDNP21Kvdr5hW1ynQ7UD78AQFkWp6ETPYDP7QuH4Nb17RH8MLXxt4U5MYWMADuS",
  "key11": "4zNbJ8HnFy3p1wPutNTQJRpjUarctV9GUEoh9AAqK6SZtS5tUpcJctMqpEnRFJYvKs3q3iKvpybaCy62eMFTSdnV",
  "key12": "4RsUA6ZR1UqVw5L98qzhKwAmesVf3ARA6Ty4Mpx6Pb3JZccD2DCwPutVoxuj6s6JkRXiPS9xsf1abhDnvqzQfBS5",
  "key13": "2Sa31KNtJUVdQT1D7YmQZGkJbFYHEL9FgrPMqffZvaGa4aiDy9R6HxMPfBEEVKTRwPNdwzKcXEBxg8geK9P7wrXd",
  "key14": "5v3PQdbgLuCFtEKT9ejEUC4cAmMpCYg1TpVVV2yJoTC7KaiXVVYpMwDEeBAWc4kBqQiR1pnyChCigKe2QgHfGTnP",
  "key15": "2Y8NfUFe1JFnPzPDapBMkapaytN8ZiX1PnWQCczAdC8Lq1ghXsMwZqVBUmxrVys86Hg2r6nR6YbP3WRvFZ6LJ2JJ",
  "key16": "22jmPFTyEB3NrJnTm98a9LJg7iQQMGKmw9TSgSsqDQ4ycJQmocGPJ7ShefEZeZ2boxb6YDXECqKAoej6RMbhHw5b",
  "key17": "5BCfPGqeyquVKpL16NFGffVqvjuU2kXT6VhDiYvCEver1EzJ2CbbPGJd2oCWLmHrwfHLyFWBWagWNjJ5QUJs8fk",
  "key18": "3w7iUBajUW2hCA71QJQ69HWx5pbsBdhVw9vH8XYH4H56pQVKk2pPh6ykJJmKZ2TdFoDBgik6rV4doKW7rfzLGu6A",
  "key19": "5Acm617FwzeHdFFM4ZFoQ57XvXi1mZLds8gWTnTc3myXHtEfyf77AUv6LQkvVbNTHj6gZMxkNhddiqRiGvTYWJmz",
  "key20": "4Szx6YDVNQQocbZBzGMEk77xkW4VAZuYaGaMP4NJVs7GwZSXR9RtA7EC6TjVmBbVKGJ3s4q2DvkCYJUbYEtgjtay",
  "key21": "4uuEqXyqd8eQz1zH8NX7rw16aTRfJqN7BTAowcEosL5inq5myGPuy3DhFvCdCgs755CyXuoMkpPJ2CxRHwfDrMeJ",
  "key22": "51njP7j5NHFPUfwT2sJPuahKLJf8GoJiYxP62j2e4V4KpNgQNCzwbKDoUfTuHV1GiN87BjRkvdSo4DsvuJbeEDS9",
  "key23": "63679abDr5WQsC9MNipd5p4qJyt8317M2dRtp4ZmZrwPSMm3Raz6LxwU2TyLzpForYuuUjYTPJYBxXuUK2podJW7",
  "key24": "2tqPMqcASW4xqfTx5J6jADmRawz4jZtFQzpHjFkLTXF4CvmnGq32RxXjRNQ63gPsS8qVpbUzzRnYFJ3GHKQQEzRT",
  "key25": "4tb1kQ5iVrsybVnjXiiU6D2MyKjjJSF86StiSQAr8NknA56MPzBpjcv1RFQggJQeXwLwsh1ZyAu3g6exaSbSdK8W",
  "key26": "3KtGomPrjMHFigkbH5Q5an8JyFt2g7EYW1s9Awgrz8tnipnc3v1FrjupjQwa8CsnMCb6ZazZbz9NCEBJcfzYbDx8",
  "key27": "4P3LYfPr9qccMePP6Tv8WbSixTV5BfmVZeLZGgMAkdj2kvcn6ijoJ4knxPPe6gixQhbSSUpdFschgf5kk7RjoKp4",
  "key28": "5H6ffTYzfhNA9rHgzkoy1ZQNnj3VQTtycANSRU6U9cbSeW6bFzwjPjCMJ1vyZE8k2zL2pHag8B18TW7BySrJpXg1",
  "key29": "3XgutxPhRcpQE2wyLkpFAAPm4kzKLSMZZ4N8AAkaQi7KfgRbDJQUon5Ku4S9naBK9fqmWJhhPxM1GnqpzrUqgjar",
  "key30": "3Ab4JbwBhYdJnmziRvU44TMCqV1WwU9Gxuvhs6qN1uotnhFurjL6x1MX2w3kQ52d6DE9K7jmMewL5rGcr2X9KV5J",
  "key31": "4StJUkyac9AcEW2bQjraZrme7to73LgzRxwRzYHcbQEqcyFWg4D4nWXpm8q8EXFrzt4n5TJcDmsvZRXXkYiVgnVo",
  "key32": "3DNKBzLvLW1SC75xQERifToHqbcur28PFjSCvcmx7xJzazew6Qef6t2uUyvuXaQPygWoDBaYb3WdzTGmz8tYCyYE",
  "key33": "2vrYodqmPqBt1oUFt46AkH6LniPZtKUEQXC8HpHgsybGkH6yqoMJGjQHsGX3MUZPxwexkcZHPPvZ3NZahjSQ3nBc",
  "key34": "4nFQeiwvH4AJPYNxrhHJnmEQw97zV3vwrFha9XiH3zqUWH7yNzc8JLKoZ8AWYZ1z8rr9jCdsHMv1VNXyGBf3myeK",
  "key35": "3HpVsDbxXg4HcU2UGcqib2GSQ2PomeikPXrcsZjRDmejauJEUjuzp5yE3NN8BzLiNTxeEXhC9FuSrYAC3bm59k4P",
  "key36": "3tZ9dM5cBf6wkpVFw8i83wKLhjvqaLYGQghttN3gQTumua2d994YxNqbVDovu9g7NRcDdPPhbRt4onKPnDKfSfVR",
  "key37": "5Ecs7EjnL1LdTCKb4aoJEq793B2exh6RMKRwrBLCGSjzDbd4wK6TxNsJKXhxixugwtir4zzGPSX4njHeHRDGEoCR",
  "key38": "4nSTCKyGXkoLvDAzc75bXKRR8qcRAvmUURAsbuyfzQnaBjMzgvwF8U2cT5MaBqdqam12mHDRF68bfZgUnFX7qzz7",
  "key39": "2NHKeKYKgSP2RpSrE65S5m2VeqW25XkgC4NktbKo5PuxfDsbMDDELzovsLpHtztXPbguRpLochvrirYEwK8SVGhy",
  "key40": "2BNCUAnAjUmVfT3iDmoH9oXPCcUnyXiwC4iKUqLW4VvEMi8ocCco9MzKJgjiFQJYvVMCTLCL6mye3FDXCeN2SqSL",
  "key41": "2qGhccceYv8tpXN1zSgwQYDXTCofGFMUFNP8E4nkCidW3NHssvbnsvkG3iXQW4YP8bmvhCG1fqosHehLLTSyGkxz",
  "key42": "3WKaGnqYcF35j6XZSFFHC2xpMHSxo2XqgsGwuLMwxjqyLQ3QQETHdKjGdrpTZY3kUpMWXJGJJ6u8aiGRVGGMn95e",
  "key43": "hyLrk35zXErfUUmqByoaNX2uh3vTy4ZjTUZeNWa7wLrYENpEF1xHwQAZsn2cQgDM5ivsAwRhFeoJ5bksZVpRUaF",
  "key44": "21mZAMEy7CNGQS64RtZDnCYj7UjvW2q9UEzJBRVvmCvc6KMVB7HNRkrz1GcBiQCDj7kbjUnkf3GyRcdBvCWTYPfc",
  "key45": "7ehSEh2qUuZdqfT2oJLyt3T5m8YB4JdAH9YU1oyavRMGTygRrd6DTADYB2M1xwmmhbNUBsT1e1HVEYr79L32CXB",
  "key46": "D5bE5Bi6v5WEKMPaDXepqx4Y2edHch8nySUjbxbmyC3WWFs6vmQ46dgtHZ544yA5sQZimdDABz9vy9FtyyG4S84",
  "key47": "3ywyqcF4bZndzCoKqszeGVtPogzjG18Ro9SEYtNppQ2C6jToV5b47SNfY91MUxmM8kZp33Px7KvB21WLbi1wPmbQ"
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
