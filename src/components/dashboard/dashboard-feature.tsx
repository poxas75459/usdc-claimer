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
    "MZD2VNucenNTXj7jy7oot67XMXhg6zEJxLh5RkgF89TNRRB3PqnqsD333wjHmtpG7TAhHm7uMGQpHsKEoZ3k5ZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LAJ6q2jBfUkrYPSD2mpnjdBJqt7e7PpDKsPgpidPgkkLQQ5n6GDt7ewYMxBCwTbtnq1UdGZfsTWushX7KcVd7Q3",
  "key1": "5yQ1YbfHna1sjSNyXwENXpEvHvGBxj5Cz1CGNyGFUwTJCMiD5kWhqt2rQyGhpcuye9xkzDNki78P72Qii82qjs3a",
  "key2": "3C8KF9YsgSE7AEXYqgUqsBbjKvYcacvCiE22sJmFnfyCvmYbqhVuZ35QwBYAWGBGFFR9A1HoK6EyyPRzZBoAaR97",
  "key3": "4YkvVRCW6qfiwAhfCR6v1wXV7c5Brt11AdEvwhJHiYTUaNyrDCzh8HdbQ8A6z5hyweQmTo411UqSGNayD7NxpB69",
  "key4": "2v7TPRFAVuapDynzD2bT4edhubH3pjaChCde778i8ZuqN9igWqpz4Tsig8U3Tyjj3LsuvK5Zr2UHJJY4xufXyF62",
  "key5": "555e9VF5skbPBGK1GasbD3rQH1CZnAfDSiZifmjV9TH5vuUxGsPD6xK4PgWjKbWr48yPSdiPqwWL9rjmoKg9x7Xm",
  "key6": "igo9XZp2BEQbJgyMe4eQEr8pfxKz1W2PHccjPUVT3pmoeFodsNAyXMCZmWv9gz2zwUcDUM2gXfkKTkBJEc9NsWY",
  "key7": "znHpWkFH8gxqXEVmfez6Gwe5dj9H5kgZdEu4HbApbLD2iiCQSy31gwEtUWJ98fZxQLZXQ23BWdxEcJf5F1gsgLW",
  "key8": "wimpT4E7GZCY84hA1BB6vNJSeZueyYcNXAMbrt9zzYgEfgacPZfUa7HnXKvo3MqapQ46V32et1PysUiMTUkUwyK",
  "key9": "2sJPQwMdCiQKQGWMsKUxM1uh3jkRXguAp5FzyyrdsVmyGpEzKn3jJXrt2VmiEz2Gkx7TEyEiqcRzr4Ng5z1G6gh2",
  "key10": "3UwQc8d1QfNwrPfiHhmQuwoSvk5qfrXWgJkxEhnKsQzz5nm2hddmLN27rx61iyJpgoo92ShKQFYpxW1ooyn6Ftq4",
  "key11": "CxdT8sVnWbTuCsUjuESS65XTaMEXRrRKTRYHBbbdyfqPQCiBMWySPaCb6P1kRbgMKwxLT56tUq16nESm2VXPeVs",
  "key12": "5xSoADAyPZVAaNo7RihTMdLiRgmkkNYFDNDEfjrDYmcGjAtJcQvET2QYBnwzoKuusmbHH2HepajCoLnFqdvscr24",
  "key13": "3vBMQfCyZLa2B1wt2rfPN8uR1UuBSyh66uGCqPUqVgwsu4BL7nRuBWDjQzaRfNC2kxn29qMvE1rtJuRNhX5HrPxj",
  "key14": "3veH8xnuDrGiur6Vo85uzZB3Mn91AZqtmWrdr7abuRWEZaEhbPwhtjxwEagLP9cVfd5ELXeqbuoQBY4gDRxVpb7D",
  "key15": "2hZaacnRyRS2UAgEVk24bjow2rzFF1DY3zQ9JqSCddsiFxkDECDrjUsdQbDePisPwMDXGS5mX5sLeAqfWHRZaQiV",
  "key16": "2Kwjc7EhxYv1TLbbbGeXav5Ym6M6UpsA7PinC3V8ZgJfDHUcwAaT4Dad3CvYraz1EFHndCVvBm6U7JM2ay41bNvs",
  "key17": "5ntAjWNtttPkVqMWgSgjChU8QH5d8LoyZkE9xKf9HSQwSRkND127RSxqidxeDGZ3S4SQzGbtLmD3fxRfVeGDh3R7",
  "key18": "2axPRS7SFPbbATowRFFuPcfcQVxzqxbC5mP3QYBU9nyzV24cPdsG3GbAZpLQJbr21wZCs9mESt9T816eikhcgLJ1",
  "key19": "5QsGUsUh1Wg4ZNC6vTBEhHerZizFhkP7jNfVHT4xe1Nar4bvsT5cg2R9Wp7P57oVhGZTpHLFBdMoQFANVKp6sGQX",
  "key20": "4xvPHNeFqwNbd3ZXeWEhbHr5u4JwpxRiZvysrJe7xCAJBJWbVoGwkYBuWgueDF78DEV1ERkTRe1p8MNMBRdHU2D7",
  "key21": "4vnNq39gKg59cBJJ4rjh5WZFk1Fr6ct9bFtWM5Z4mw3zDxN7eeiyYygy7v7xdri1iqULrmvkYtLWJ9MBDnZ6QT6C",
  "key22": "5hYDUtdE3hmf8Cmhccn3yr7G48mGypRWo9bsa25D29W9kBpFumzfXPK8LfrCrPNeQZH68nxGUed9aKEN9rQsk74J",
  "key23": "3LCc11Z6iMtDeik2W6U48wPdtmahLL8JhqNTA8HdLuXGmQo7KGQm5ZYzSNPADxSTAR9L8aqvAE7yFWb3qbGyErUf",
  "key24": "LbP2nC8zmGsMCgMEJEfja2Da36zQnBXPE7nPTYrptsCFdksFDqKWfJDZvFXgkKoc8ibmtAqD6ri4GWLWiYeYZQs",
  "key25": "3Co4oiAnumxwA1n5ZuGuoVD71g4tRyD75ARHs8hqM9w5kDEc3kvABpAvRSMTjCxihT3S7Z444kxgPJ18Q5Z6JnoG",
  "key26": "nMNyb9YBHeoMQwX87HK6ykB4XZmr859h63HuwA9GiTHmJeqaZLcGZtk1gQci36oFz5DVWdPYJMVjap6Adj8xnTy",
  "key27": "4g5omNumikR7BxAYdRYJiSKFrepehcyQP5msPNuATq5WSTeY34qhTTigYFj4BBZSPVHcfXZFsQVtdQdTMFrijo8D",
  "key28": "4Lt6WKhQZ6wcfeJAPsUxwq9kzrtLS6Gc8s1hm4W7UcdrqcP3C7ZwCUiKwhByzpKG3vjLGkP5w54tKUgN6wU7FwKB",
  "key29": "5qW2E5VX8ySkB2AQ9XDyAW4EFU2wKRX5o5KnPEQtg7cdm3UoJbiy5eYAxZ1eUhoNf3utxDf6HUeNkzhhb4usKYmS",
  "key30": "2L7i2F5Rz83iWYUt4TENVdrM912WELyymBvE5D6ZNQwdoiUpWHhuaCtMmbzFHzuqRb9zRs1wui89HWWFD6z1EX7c",
  "key31": "3Y6VEbeBjjoe52vNZD6WTRZwzbb6JJChA3Cdu1ZDCwVMEMfGQ2HrH5opz4LMShSPndm4dD1nuuGcz3RJ6DdxYG53",
  "key32": "PKpBsnB1CUEUmXTr9DpciL2kUT3KnriESaGqZ2tk6gvxkbfXWM6e8corr3DJiuJxN3MbenkeoMSsCdvabMKXM9M",
  "key33": "2bghUEsG2KnU9yjqSo8snt6SZNPN3AMLZgo59Ej6G2S7sepWUzpLHfivHk8BmmG8jsUJ5k3sa6AKvakfkvSmHhjP",
  "key34": "5RY1xC1gMCCDSZau3ZgXgx5iSFKmrW6euaGNULmZQSFZp5CfFvXpZ32wdHYKhgdCWcbteYJHN8XztpHHoDi6J7xZ",
  "key35": "3SBygctKvakv4b7hbuQKpcq2dr9vQRjzaZhkzE5m7j6xGsGSYXfZkGwJUrQ7HyuGkSawmoZabp8581XQU3Ztp1aP",
  "key36": "bb5bQ3yD6TCEgFgebBnxG7FCRvix6E215qykkepi5D2zDuNSBCJsr6wzTSR6jRaCgnuYxrM5i1tAzdrH1tifxVo",
  "key37": "29N1WQbYBUmMHBo5XqhnmaWCCrzGBu7knBGxjAj7zwsG6Lk88FkhQNzktoMfSzSGK3eMvgVmjf7SqiVMFYLaTmWr",
  "key38": "5CtDq17y2Q7y4Poib4JqiYSZKHzqB5LMb9gTMNzQp3hZmB5vPReBFF1mzHf8N8rXGDiR235jyHgV4bJz2rrMSZeY",
  "key39": "2mVnjTZxCrubn4ugFjsycVtUn7EfE6BbSASJa5ixTgWhD38YvjtiEV5cZdKNYjvRvMu5ohCw8LSbJpSj7HcGUter",
  "key40": "2irJYa1xiw2XnR1QVKmJhPVvEXkXiKdUxYNUuvaKhaEMxHZN6bvycz5FqoynwC1u3TYeGQSURyVpJwrR5QckkTQZ",
  "key41": "5j9jBwxvYLKE8Y4FJNX58aoEPVMHnb8Ki2JNMWFRSwiZH88Y7s8PPt7d2EBy7SWw1HMLMWrMUpXKHiUzL2FhxRAo",
  "key42": "5AcJv7e45DHAnZbLPWtuV716QUjcRn6UX6Z51hUKLLFaTMKC6wz4HpMVWfuxFfKBgLuJCqkyTJAW1VQsQmztTFvL",
  "key43": "3Vef36ZUNH7DFKk5oxHq7dZrYn2ntJ5QxNusfEHFL9LwbG9V7ujj3eECy6yShD36QFSb4oECNk7AwjvYcHg7RbGT",
  "key44": "4w3uTGDbTevcUHpubXnGFsh5dareR52gj9oqHRvXRNV5Kvu8UsMPQ7fZ2Na5Fox8GgkG2RrJN11Bgj1MhVqJ48KV",
  "key45": "8aG7njehtctY44MRtb34wWUcEcQSiLaAZUxxv6V8ubnxUyyREv3NoT36RM78sct6Rgftm9KNbs2kCvd5rPM2MV6",
  "key46": "57c41zcrMrVDftdmKj5YfYWyRU1mqkQuas3J23821ZoLt2vm4m2K5Xgo6MjetwdioEkj8TZPdgAuj1HD1TQHDbHg",
  "key47": "32yerXPTi3HV63DN1JVT2qmzXxXEkPTtDmtbSY5M7GHjyz56ZWzvyRb8bPshV9fCRBFsRwiFLcpAZDBdqM3Y5zrw"
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
