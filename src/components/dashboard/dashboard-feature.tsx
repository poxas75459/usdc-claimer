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
    "5NLEzrguY6ccEhH5jPBYekfdgs6htYunqSdPC3AZ4B8rc62PMFag7ddoHQHmQiVPdcYqjm9nvcbXpwGiLiW7iTKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFMdRbwqvYBzCLtfmm3wYJUjtDLbqp2A7n5jzM3xiMKQnUWoTH2SYs3PQRD4tyQpRsXh396sxjtdWpSCxpX9BoK",
  "key1": "4hKQUWtkNHb5e8rBEcn2v27CcJdfFJ5inzLkAzHwiFBpQMW1TrvpJvReY1cfyV9tURFNF9cGbCqED9auJRRs7zea",
  "key2": "21qQrpy9AirxcrEPmi9L3Xtjfvif2ULE2ozApHPQNY8rMhSwm7RfK3jpmVBJMYusj9KP9HngwcQ4J7HzdYCxdu2f",
  "key3": "4K5JAsdj2Wu6C6T69usiW1YJVee7ojMumbzuPC8Fy8SVvM1AeDoYm2RWkWwGn6XNmyhdpE62dKk8cT6etKjDoTin",
  "key4": "4TRDUeZjgA4vgHcBaAk1HS5ZaG2aEUtXdZY4yEkVmUoSwEFSstZLv81qwCWRTA5g2qvLtf8Wqy17rCnujZd8cN96",
  "key5": "3dd4KfYDaJwuJgsh4R86wbfQj2krQXJSFNoqEHHxVxe5y8BPUmbzDktoopTZex7uW4E2Mkz9GSksnwp64Y4baaF5",
  "key6": "5d9S3Mv9nFco3a6qNgNFth1ud1JgrfjeuKxMWQJpVX8tZHoEK1zBGGCdyqitHTs9kyqRMgUMSVvGd2cMa9fm3r18",
  "key7": "cVfxBBNGV7n2Ydxtq1JrgQosRS8JGJ3EUD9FKjzv72dQqY7L7ev4cD2EVvevALhHBweFvsktXsKzSP91FBZXkz7",
  "key8": "47PRDAzzcYMhXPgsZvTGBPv1QYyyKb5SyL53sT8nYThpzKaKYu5qzkNH7XehwaKpUjXix9JoAQAuuWdsXfVVteA",
  "key9": "2WaTJBaRvWNy33EqQ438rKHTBCLDZNJQBN2som6fSf5znNZ8NbKkmR8HCCEyJRZzYNhvPo885aDJmdsZg3xqNbfY",
  "key10": "5XtQF6x1TYimHbz8ZiXHbY8XVkWBASqgDgo7auJUBWm8nAYRSFNUh4EZt2jHoZ9NSJfLxpfMKWBKmcV8HcwxJ15x",
  "key11": "5Bx9zAY4G7z1tVoavZxizDXyiQ1RUY2gezkVRWtDF2dZB453Bi7D38UFJGjZKV12rGeedYToFpbEGbHP9aeREGV5",
  "key12": "5GSGkqeWzEYbNTFKTh8VtmSRSbvnSmXCEbZbdCYssEG62CoD3pAhwjDuMEvPreCMVwHoR1xcuC84GgMi76eHtmhw",
  "key13": "5L1D8NxT9ghCTXJPMRMAisnREHp9KTQhdUq9QjYTxDfhgfD8UNrur2eyJAsbAGQoqS9yc9SKpuko8ihMUgobgKv6",
  "key14": "64xDumQXVHZdgyHfSvC4RC3GQUcNRwtTSCsAxhVWucHnA7S1ymzvFF1XAVin7G96s1gx6bU1vyNMurTp3TaUZVwo",
  "key15": "4i3DKvPF9FpJFaR3vnXxbZYyVntcPiy6C6gxYgoLEvigAQyYMM2EHWy6Jzm56NNfsXVPBYBctfYPKr9ytLWBPvJk",
  "key16": "614qB3Pg4qm6ntcwkTJF5jhdmejb8r7LQYPrWPpSyaRxWxw18WyruLKpV3NvNkPuDgQdc9aa53zivWcvSaseH7rn",
  "key17": "MPe3KTv9NzrRSoNx76PcA1vuiVYftNbyRvELMBt3oKJ3GZawPv6AYiY37Dtz8DNCc8aR3CxALQuMwjjpfrWCZuB",
  "key18": "4AxKuvRmt4kojyW3BN2g6Qk77YNWEDu4V2JRDxmWtwLVNDkG1eMwECpA4WaStHEqZqqhT1KMQjfAE7Y7rNcAw2jr",
  "key19": "2pzLiwmhUij8naCKTHpNhyRT2ysu7iRPWadG4kZQCWJ7HkpcvmySw5GwiSgHY34xirkuLJ2Qb4i3mDQmwz7zwpkk",
  "key20": "LRroidGzYBYoQeDPgPabadLbydQgksxNVAy7k9VdQaPJLANqu182W7HjJ4fuNoLjttx5Pq7MV45kV8K3Vjpn3FZ",
  "key21": "4GgYSBC68Fpj5CWdnyaieWEfovucYzXLitYeJWaFkXt59JrWFftcxnJDqiSAXwa6ebEJcpQf8Quw3g6Fn734x4MP",
  "key22": "3hSSdtU7cnYgJZ9CHPpm5FcwX541kAptfxnerfPZj76bWDWNYHDBRtdf1pdr94Ppqq8cFaSFjBn1cR2tJQEDbzer",
  "key23": "3wQjKa9k8YcsGgEs3eB6KjF69s2KQRyw3TkcnnFvHJ6NZhFYe8tYx9AYVVu9uQVdxTiyM3g5Xqj66cQYavSRe355",
  "key24": "4m4wbpvmVtcHJwMFBcPKqijTQcBmrw3ty7Cm1E4vebYyXpdLBrJWLY2wbzAxUw7fwsGZUUcBgWP88bcsGUwxUmax",
  "key25": "23HZwzugNEGa6D7tydWqD5xEu4F2EFXywWEfwTLVvjB1ysRq9Zh6conRnXoV7qEaYz6h2RYesWBZGV626DGm5nV6",
  "key26": "NoBUwCH2DJH8avWSutGEuKf9hQLb4vF1NLpvfqnRAyT1X8myVrxJYBsgc2owwKjzvPpEpWy5JEWftJ4cJahdHiL",
  "key27": "49CoSuzTsxpK7sHu1ta17SkpTr6Wonn2WU69afti84jEAHmJbA7LYDrgKJpPuscQabpirxgF94GbPV7mxKucy7zv",
  "key28": "37NQrM2DmPbMbt16XLrXFZG2mZfZD7B1nJv5YGLncPnC7zCYFA3kuV9jZdJmjaJXgy2uJYwwzm1zLiE7Aet86AuM",
  "key29": "2fCda95mavcqYT7jT15gYkYXyCZdW8oezqJoRcoNcjDGSqyiFtu9W3GLmv1X12sB7dwBGymnqGSwnGtEXVxwSR1D",
  "key30": "39MGbgDh2n1oTQ18VnCXbSsRMMvmPZeqPDccNWzQwPQrykRh4yE6QT8wsuRgMTj1KXdYv53k2azfXRKHqPDz6dsH",
  "key31": "4c8AmLb7SQiT9SfYF6nWcZRZGrueyif7MwchwNq29oREKDQPpVfZfxBy7zfJ37pzRe35afiVKkNAGYLzdSt1Akxu"
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
