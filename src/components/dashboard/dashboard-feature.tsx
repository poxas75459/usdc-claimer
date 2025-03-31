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
    "4XuAsVhAApw3m7ALZbgvnRzcVY8dX4hpBV9t13ppZFom7BKRn2F7qkTinE1UMmoWy8cpLdNx6LyL3RxFuX3Jw1Kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kX9Y5szz9pkk2BMGgSe5M77txwS6bmnDoFDCARjcKcZXmZaVZtb3qyVWQ6pEBcXXDVEmZByLQFvJoaZxE4F7PNj",
  "key1": "4qefFpdRYMAb6AJsdWXTG7MBB6raTDSJVZ5cA46HnvuDAWry94jDLaJiy3WDCkmYPU949Sq221dGtvYKEwU7oKPj",
  "key2": "2QqcQdrXWHVEVuTMTCtUy2TBoET8SrJzpJ8YSz2B7kJg3SHiuBkEwMJp2WvCGfwCdGs6ttvfxsAsNzQ5gTQN3oUh",
  "key3": "5zkSW3G5Zs2D2jUkiU3n7i1jALrkS2Sy655DqWpBJsq6fViER5LzoNF12cT2eWoaLgkeZHy8L69vJyekMFCHvNsG",
  "key4": "5VnuxQUJTmxs5shGKxych35or6BSv7zvyDVFtZjzHgUUvk5EpRWYdNHtvYDfTgydz3AiAv6Uuuhxoz92ViXNRj7X",
  "key5": "4drYbMc8F258269QPJJQ78xkk2AydQLJD56dTKuAkN6ceqXxmaWnydaXBXHuaKebEBm9DG9rQMVYnfN6LSTkEuRz",
  "key6": "2jeg7owtUe4NKryXKLKwxFHFK9hLHBvmQ3MJMHfXSN6bYQ3T1sfJo3FdLkQ8beaCjNN5o9nHpUWAZQdNGfMo48D8",
  "key7": "4XRLTG24nmje16cJW4Rxw1zfX1iRdx8PmGaEjcix53ZdMdrGpKBnNYChZvb6GyXiaHavaLUuFiiy49iKc1j1ZQ56",
  "key8": "2Ni6XmxYbxmUWHXTpD4FQpRh9yUkK8yJbFAvETbypad4SMW1XSWL1bUgmqGe1SVivJYbRtSa1pwr1rNCPYcsyffy",
  "key9": "3GP8qYnAC6oS7sNYZSAy4Hm1uJWtbnEFHaEAsn1b84vzGRcpJYFWSNWxYy1gRrwKG2PPGc6HXhqw4zZ24aPa7iP2",
  "key10": "5cSFzJku7CxTvxMdBWgkxFqspMBZhGcfN41TPqX2mxTPmHufGdpsnRtP3tViuJV1NF68Gg3ckj7p4PCT8ajAtLNc",
  "key11": "49DRr2bEQojnJL79xRWTKrHYgFueAbmi5sfjfqb83WiPdjzktvroVntKMhJt3JasxGoMQnF5QRxERyW1NxoUYsZu",
  "key12": "2KmwyeFXc9LQcjPt8f7zoEjpj7g8U8k8NY62Jd2ZuDpPABrg2LajXtR4uYBHagUnB5ykN8nyjF6WmNoeYSmTUZrU",
  "key13": "i9Z4YE48Wtx6zgLXrAPXCPUN1LDukbbFYycYa7jT3Y2YVa4qoyAoW5x2h922PESJujHRdNjqQJjQPQWMWhzox9N",
  "key14": "4MaZKv1iBVokD7mWhPhcwjTnaZdCAUKgYjhSjZTYYyCq564zpNSgvtTfThqPEuoJ1DCHMchXbGuTV9AaHZvUPKQQ",
  "key15": "5J6rgZSNr343Rn9sU4AESzGCt6rdQgwfAr1jSUeMyNFkW5nVL69xLZASPAtiasDXdoN8kxbosL6GNu2rAvYiqVgK",
  "key16": "2GkBfEbnWEkLmG7L5MevN3kT29f3XYFrS5UENKwC4b7kWt1MqKu9kJkQ6G2NcnwAeLTs8hSR4Q8LGXYinzS5n5yG",
  "key17": "5Hv8QLvhvaypzh7dVsRvSDAweFZZWbR9kCJsSAyQJzyV4GxBWgG83RHqW7NB7akaqmRyXm6MZejS42hbigX5dMS8",
  "key18": "2pZKEMLT96ur6g4UHCnL9K5LjpYw11mdkmvsmsJa2Gf3ssQVBw3WddYh8xxe462pbb5UiBF3Bsc4gw3xxnhJePxJ",
  "key19": "41evZMVTEcEtmAMLkia6By2Hm4yhtWbBbAdutEFSFqFQxa7H6gxcoxANzv6aXo38mQS6dEAg4WkkR1Wnf1yHNJ4z",
  "key20": "4ThzEZcqbLLSEiRfPneTh73cPZtydoFKbGDY6m12X9JPqXWWoHBgbrPDFz9BXvD885gkkTynzsFpH6xQqA2Gy4ZD",
  "key21": "nAQ1QfdoaSbomNubb882UwFf8nFih2iszroC7Wz2jawJ5QbrHpjimDCdPDEKWEQBmvexNyyBA3KZusLDzKNPwFd",
  "key22": "4x47cv4C3rDPvEX83ZvJBE5Ze66HpuKKwvpc4Asu6jzUkYmDaasWw41n957oEbqc2V9pfJzF7XGaBw7yYHKvFhTi",
  "key23": "2Wcs61d7i7Vnp3vWTybe1EihFWT9wJu41CH4zWcFrFTHQg39YBCFsCyXsLct9SXiCKm2xKg7DFC7FaUkkKMunCaG",
  "key24": "4RtPwa1LPKEYbntYP8FqQfuCk4Hhu2J2XL5hassXw7uVBhK5Z9DpnLJb43nErz7qgDxuhxqqt7zRagXPgxEJeHBD",
  "key25": "3JjNKhjKFDUpsWSM6nC6zgAwupTtPGqm8TVgFdwP5hXwPmxoPuCzwt7u5hVwcZ5w4HunVTBseqn6jxUnNmU2N9t3",
  "key26": "MCbD32XvdbRc9cw6fuuFvUn6GSjJ3zJWsiGWfBnTRyofduuLPKRNZ8MT9tevcRnFeLUuzqaqzMRowEMDUDMnExZ",
  "key27": "35gckbQAkhaciy7fDJYPTMcqLjimDkGpbzKTHDoP6mSxM9pZN366f2E3wghvUxN1C6XU6V1BU2a393VZEkhwTD9q",
  "key28": "2bULKoyHF7W6RMLo4yET9btEiz4o6EyPnx2cjrMKDSzCpwzuBoLXpW1fS6D7kjj9hfQBCRSiNcicpx5Ady1bL4Qb",
  "key29": "2PjPsgrACccjLfB8dX2YZaGcho4i72nMberqs9Etnrd7bVAQZ6j6xNWzxvrLE6obNexA5Q978CfNU6s9vPyyMVWG",
  "key30": "56j7WG7XQbaq2yZ3HDkckGA4XQyeLCvycCzd6pYwckw5nopue2CvPU8jmdHmYTcYKKeTncLq1DhuGmQ4om2dXm4X",
  "key31": "3ocPEQiqmorP1iB8GrggDMi1iqF4DFJpDeAUdVDvSnuWyuxa2v8YheQGHRJmw6niSPoSs3Bg4e4AjGqZQgUAXEK6",
  "key32": "5a4RySNQvbyYXmijoYB3GGeabMPuCuAJiCEAZX3wL1LpnnwfmL1yFNibp2w7RYdtw1uibbmE9Ug3MJ9zpPMEED5C",
  "key33": "36ovsfMvSg78BLvTRNRt17C4MgUqgUHCTN6PZpX3kfF6JrVuNfPK6VX1hwTvH4GYANb2qTXwbWtxoY3MWgw2CGLs",
  "key34": "5H92akovxGip75nTjmExVxaE6x79KJrVB281kbWpTsS1Nb53GrphCreEfhKGq3rj7KF58y5Vm6C4xhu4CLSB6wBM",
  "key35": "4QNEDGZsrbHBwrM1ic9xbkkBh6PTbNMSPno9ojvKQ6sKqRGwUtRaWxKWpCcHuTkkrBPcbeawdpKNmX34UnbDmC9q",
  "key36": "2c3tvtudaX4VEVxEM4bP7FCPrh5KsLXt4EXVRyn59goLJa9y58iD5djvEw5mV8vrQrt9W66mExBLPYQKkR1GgFtq",
  "key37": "3SdKq2EdRufxRAHHYW82sXQgdZAzJJuPTqV5qmXiR6NjJrALDiAu4QGUd9WLcJ3J5LBrjUwUXuDSyztK1hoisnFt",
  "key38": "5devVdzCzSTDWTjerUCphMX1TvcSJqFpsX1XQvvU8rC4aiCgjdqkuxS8qPyR6SAZUZWAPQs54nz3RoQ7iPK2hwkS",
  "key39": "5N8Xv291FnPTLcxSQcz6d2GuJC9wJX1hp9Ez1By21g5ARdKjssDrpxq9kFdPRxL9sB6nsAy4qKBfbpL1zbdeAWcR",
  "key40": "wvo5CShmGtYySNGJa2RgKnJtSMqNkknhweCBitFvxbHyhca3hRjZkp8G4CJ1de4bjoQhpfQ9TJiGJQywxpZhF8k",
  "key41": "CdTrwakXYemdeqkqFe7CKP7nywZQXPYFyQBWqFTnYsr2qeLxn6JbNkFRYrGKNuEfaQmStiBhh6HkBsuar9aDwrT",
  "key42": "127gVantALXM5yKVrnz75gK16NEYxH6F6iou4GNMUx9DFpjDUwf57hHceWYkfzL7QuiQkmCbHiJxtTsbTj5LJfrV"
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
