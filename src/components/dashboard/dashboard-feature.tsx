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
    "2xhtc4DGQxwPoYQVdwfuhmchR1KEHngFNngpAdiFXdUMzdHNLzmeJ2YLABjh4cYxCWQ3A6i7mkTjgarn3w7YbQnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "383Sz9P4Vn96CiNGUVEEYbvSAT7JMFvAcpUYcpNXcB7voqUzzX4W2pBSe92yRFY4q4qYxymdENaWFVW24eVz37YB",
  "key1": "3KV5i2JdzS9Q4txRbo9xppuvmfmBXa39ZrbvPVfdM6qUHXbs2KNuV3xaiSLkseeYFDfGVugiShRs8rgKSWJ999Lm",
  "key2": "2ZrYoetXRwiHmwqJzTBYgcYz3PGcV12ZQAtQX3k4QhApS3mx1Fv8mGyNt4qmBWUTehhDFzvj81sucxZgMh7eRhz4",
  "key3": "4abEP5Qq3u4DVEioQBJm3VQvDoX9SknSvNnXWDggfp27WU96tvf2o6wMjNaU5GRDkafcews6ymFNCXBPMDptEmJP",
  "key4": "2o97d7P89ePwKeTNai3nXECB3aFwGPovgsjKn9NB7LBs6W3DBgxmQSzE1tp2k925V5bTHjmfzXJRcTpeGhib6Vvv",
  "key5": "5wJzXp1NonTs41fZ4c5QgtrXSPxZFTLZGV5Wxm1Q8BoZxb2EHnjg9skpWMpt4ruUedRa1w6oVgkDhGbPoDT167oh",
  "key6": "4RUVbkmG7CG2T9V7ZXwPvQm4ajohc9g4e2TbCTkieGDbzS6raqj2xA4yU1WBGGcYPLKEBkRojMieteWD7xigyYtv",
  "key7": "2q2kAYYSJzkjtpnc7z3438CthuFGM1pX5CD8PTrfoafZWnU28QRzQSjkPrNJbSnvSY28agv2cGM8b1Fc6EjTKFv4",
  "key8": "3eUVxHptmbHs6PqjNms8fLbGZqyHGTheaEcX4vsiDUzQFwypfjokZfRFXNCfWps7dy5EtGx2KSuHm3u1U1gkLtiJ",
  "key9": "4QWRA5bgactMhptF5u7TnrPZR1heypFQmuuzeygkDCRBYVNc2mPAv51Qi4PKDVXFh3nxPdHVrPhB8EG3kC9RZFfb",
  "key10": "4tJLPDmthKbidCiJJ2KiivyfzzESs24QLdxRis2VYUxAMf7xB5uDcdeesrc34hszDC9xSxcUH8ic2U3VYBZPmYvP",
  "key11": "4fQ5nbDyaRkgRjkmbK4JDzeHeBtuEpDbTzF82wa3upE3EaxkrCKBf1oz5A2xJeSN6zMT45NZStzN9zz1GAU5Ucyd",
  "key12": "3HboVaMo76sTFPwesE2Qk9T91WqEsZu1igtByQgEZPp1dNoDcH62yFaVgkHCEa1J8DJZ3efafk6yMgwUQHEyEeei",
  "key13": "ocbwBBsotZzrda3HvCP89TAARwDUvSqwvo63Uamjv7YH5X9Pk4ycgGPavifJQduugyKZw18YGdoyzxjibQhTBDj",
  "key14": "2MqF6dttPEbJwYH4kRJjqBqWcQvmHCDKHgsgwfkLFpkgvMtGu1tAEu7J9jQt3sWED5QDRmGmj9rvScWb99nJT7Z1",
  "key15": "3Y2s82EKSL8QV8G1gNem2VskvQFJN8tYy5uKtgREcG9JoY3wE4thmQCuj2ySbYLEMEYPLYDbbtAHskdmfZEZ61x5",
  "key16": "3AYhRVWs2ky3MhorQgbN3iuRbWA2cvNDwwLWxyPPwJTaYGaG8rWzSHB6GJRPCo6HM5sweL1Y95dXnbjt8mQoey4i",
  "key17": "262YQQvk4WzFYoRVfL2fMR43hhoQfLCjUwMyXb2W99YmeZoysMNLrgJm3JLNwBC83ksoLQmrfWwdWu4UMsg2g1qk",
  "key18": "5an9GhxrYebXS4PvRcdv6EgJaxmHu8zUcX2NHa9WPLq487s3xRXnD6iungq9PMVuTMMNdW7yryFAtjm3VwbggcCX",
  "key19": "kmixyW8qfhKiMwrNrKXGzLQdzWA4nyjULSkFP8BjkbcH3msrF2aEUvd4UyxLXmfcyYCLzNmsBwVv5FdXxzGCikP",
  "key20": "pnjH5aobiSQUqZy9L1h6X7hqc3AijVETdhZeoft4WT95mbaapAC46r55jUnxSc9BwZzjfdnUACJxcKB3DGbLAJ1",
  "key21": "U6p3Z9RYg2b3BJudpCG16yp4tf6NQ19owXB7ihPhF4wgXxn53NQcH7izj9n6bqqWNxVGs7HnUcMwHMdzm61xNSo",
  "key22": "Ym17SYEc1mj1FnPSBZzyYDahKQkmC5TrhFvtNQRKcHamD9FFmF4XcG7eeCgwqY3qJCeJMWtrHfBmTrfmQWyMLkK",
  "key23": "4GskQe7QuJc2f8ugG9e6PxFQpUKFNsJ9z6FXNfagDDfykWBXACkrkq4o9KjwA79PdH2RKM7EnFGNBWmWEYb9Db9v",
  "key24": "3xKbBWn8VUACEKA1wFhZk5jXZy8BFnbUbGJUt3RTBgac1xmgVSPACGM9B7yGUjfvANZpVy8H21oJDQyLRM8L7M2A",
  "key25": "4vpKK6YNDwwrk4MdKhBM2FTFgz11FBk46ySigZkTY2MkKyUnP2y1voo7K4WjTHUQQsfdE4ypHU6Sy3rqRFyv1EKZ",
  "key26": "53zf4i9q9K2MdCbW6bA2TPXtMjAeWmRPim6cSJBdAoFnPvRV8mZyJuB3RZrnUpLa5xfoytJHz5JMxDRW9JVpkJ3i",
  "key27": "5cr77aBjzUQQvZViBi6hdTYthZw4Ee3Gb1r67U9MgZCberpcSg7gP2gijMYLk1Jm7T9fbMGwRHqZoZmS7eGeQTSt",
  "key28": "3DHT4TzfqiVCyj1PFEcvXFoG3H2nYsXUNMuH3wWpZL5kBQSvF5YomRtdw15kpHP219sjqUdyv9DcJZHeSojfrFZY",
  "key29": "3hszWtwWbv948o6qXG9hA1mp3jA3CjcBAP49ixmHbj1CH9N8gVCeVZttLmCZwXFhpba8BFTj9W2vWhXe8HXVehzj",
  "key30": "5CkQQzGYZhdqN6HQ6xu8eVuvu2ySpUu5Amtn74uVGSbDingij2hLVxjxxERuLvkHJUuxYB7P1ifpkbgrC9skqTTZ",
  "key31": "59eXZp3uL99nvmcHZmt1BtX4WBFEuPLEzcQsj6p8xuQjoudPUW1xP4WEPB6UiTQUyAxH7Gx8YjShf1VkPHiDDy18",
  "key32": "3CWAxc16dULL9mZHC6PevUUgpaSwMDQFVUV98JxFCwPRsqaWZzWx9FwhBDn2aZ5YLpsp7ZdzgxQxHnQi41HQ8Vby",
  "key33": "4KjG24sE5m9pes7EEts6nBdB7HAzWRfpVSmtzvD95bVNMJvepDR38a9e1ofbn1UzrwuZ1517p7eNMHGzHPXzwWwR",
  "key34": "4CXBK9CypGCsDojPbMf56kPG1Yxhfyeqv3wNQ5BkE5VCztCDHAwx6Bvhm9djZpZ9SFMfRFDm6GQ3cd8h1ToSFNRd",
  "key35": "62kYpebng994jiT3JLLJBFBnp3juEjuxcBJnhC1M2w5wTdzwmjaqUVsjbvgj9ejBVNZuNxkiPPGuVmdar9Rvg12v",
  "key36": "2xfENogdaLVQgArAso8MZfUNioWefrLyqQvTzQNokJJYmABa3RMAueJgGwPLToyyXZaNWhySptbVu4fqwUa6ryjv"
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
