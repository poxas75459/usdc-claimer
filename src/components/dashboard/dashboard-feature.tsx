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
    "4GPKqpf5PdzS7fZ2yLBshML272Zk5zMXxBt2Z1fteSvF3W7y1MMR2hkfMNETQpKRdUNNMiQoMvxpDDTAQLu3sVLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T9Npf5Fppb71jDZsZPUwV4MZ15kuri1BniW629ph1JuT4WoGHmyM8CBRAvBQwkmhCJAiiKkLfCc8763Yqf59Vm2",
  "key1": "3KGs9MMKkMuPGuJqwpxVDuQD5Fpz3JE5646sFFbHLP55LBCsVJ6bwPwFZ8s1ykFMYThL49ZuXnNhWxiPc3ENaJEP",
  "key2": "2n3UvHxwLtEGwBhTpNHrbMhMnfsWhqjW91wNw21NVfoSZYxvJo7wMaFAUREEy1sdPESX387PuDkAkJJpY4QqQPD5",
  "key3": "3xefLwRQ75DCbtafvHjvVPJZbPWtWiGwsfbPPpUZajBtCVuMvzDVZeCZF5CyYWLLR2oytnq4akyQ8movoSJbBzzr",
  "key4": "37qM3z2QNpHm6gfJpEZnc9KY39LjXLso2MGUQbnrJv7LUidKom3Wz97NdVqujzNn1btAfasez9cBNcLQ1NipFJVV",
  "key5": "29kmbeLxU1u5Ey5Mdn3PXVfCsLC5cvpxz3ZW9xMdM4PdJ3VXucLXBeiBVrkiEyKWiAgWcxwDXXVwRgmvfGEA8cLn",
  "key6": "3Y6hCE2WHAzkdvH9ZRGwudnrbehuiCtemyUeWcCCKjg54MxajGeoxAEhtZzK5HRC8qBqrs9PYHkjNMJU8Q4Y7ezN",
  "key7": "58qoLfcL5oLX2V1UEsR3zdW5JV7VwufhRWDPHb8etYUDMAXRb91EesnJnt1Kd598v3Tz4zP4ZKDRMN77DR1aSUEb",
  "key8": "5Xk6RLK92FEUpmn2rKsZRAqwx4kjvnvMTWZaYvEJe7ai6WXop4Mg4iuESty2aJCYULjUbvc1sYjMavGUuz743Doh",
  "key9": "zk3diAH61zec19nmcz1oDPRQHyPgPczoQzAETAiNoQbC7j9qhnVVNduhaRmGGHsLbg7gz25rGEMu2kNDmeZwEEw",
  "key10": "4UjBVmihHYnb4TqH25GShk76SpGUuTNUv31yV4UsuqymbzPyGMpcCxk9fPy85qZ5LkjHzREqSVhq537UYhe8Wy4",
  "key11": "FxkUZ7HjVwCb5d9iiVxeQ575KpAA8MQ4cqN4CggANHLUq8HfrxHAwmoWLWvEi7oQNzYbEC6KCxP7Up2Xjxw4Zj6",
  "key12": "AJ6j6CVjiGieZJ5fcWQnYmrTZ8hJ8NhHRvHQeXJ5TWB2m51fWPwE7SJCFZgmdvGwXjARCt2WhLc37x4oG4uAQ2k",
  "key13": "akHyQnuxsS49F4sdMsqMareaAtJCXw17XriJYWPHS8E2KLm4MVC5a8kDafSt3kvgMRQefjs7osciNxCdvuAwXnP",
  "key14": "2WjCu3sH12Rmr2ZEkSfMPixzmwBx6QeFnmRNMfrUcuvxXdLEYPndqfG71GW17hM34vNpp4fJVrFcxMoupYkpCrXM",
  "key15": "2qLVxQB5NMYjsQMWn5AQRexgafU5tNEyEe36UYWbV6nnthnUKj8xMR7Chq8cFCJ4NDXg3uLUW333nM5ujimm3jJ5",
  "key16": "2zPqFePa2VdqnSiR7YEiKz6nGA3kaGm3Uvg8A7DbsvAQQn5siCT4fizq1mvVtk3DZ17TbNciZSToepD2dYTv59WX",
  "key17": "HeLfLKCHwR1DaGRfqomcy7VH5a9aMWCAG4QPRqdgNDYKDdvnBVYBvm41i9LcmsaZtiSAST4TV37F3tP4DdQ6iwz",
  "key18": "iG2KsYEJLW5sq7PpmdRwPzBVGghxeraRaCczwGYPrjsTvdPjCPzebr1hs73Fek2BWZPHBzYfQTeq2kmJ7utvpiu",
  "key19": "3ewUd99mirruEAYrRhS44uUW8cD3V8g8yejRRoxtJdPeSkwWYYBd7hiZcFgZFsdBPoxXo49nrXspR58qCacsf7v",
  "key20": "3yESxoUfFckWD4YYCAdxDZKSHvt8B8tmUqQT5zpeqNiY6Ty7diDkEafTU29LKMsfkf5TSyA25j365EP38LWaXVip",
  "key21": "545JijDwHdef4QDqqaTGE4RQiT4F5z2aN2SwpCcdXpgLKBbsVJBJgw6r3JxXsRjmt6HwQcgYZhuurbnqMUURdF8T",
  "key22": "499gVhDUtwH4fmp3tyrjF2THcctzyPr6euSm3tunN29qX22kbRUeLwoUgjj4zEpNXzPh4zihhNPHZTQYTnnsoLZ3",
  "key23": "RowuXoPwKRCS65yFUrhMfPj8QzVn8XSnEDMpWtYEX9TwMiUfVnYAkYA59B1xnRFDwBwhu7ehvRVzE3DZCydpx4i",
  "key24": "5dAhaQfr1pXk3PC5U4JRDvWNpUeWiueGuquQTxA11tavsMPjE3gDUKchjbo9Cp8BfgHCWpLuJ2G356nVV1GjHBeC",
  "key25": "2Z9JbdfXkYUt3yBFmPL4UXnXuBLHUYC3yMR5MJXwA3WzsmmtEamiqNxAinHmTPGpLmgufh8MRG3F7jJh1Rp9f4WY",
  "key26": "5KJa4E4JxMy5tcjxEDKVHkpehoTfC3ec7d7vYzGiFYkkgAWsCPnBeNycEVZqbma5SvknkBEGgFg79JPdEze5UavE",
  "key27": "5Epk39oPAGVeo42vd6A4766rjRdPsvQsyPUvtLsvojkSUUzkoyiSjMU64oEujYRBEbk1CRKSY9t3gpSeRhMkDP4N",
  "key28": "3y8kkaZgLyrHbZrZnxnQ5AsrUzseSnkos3RVaLMSpHt9eoK1FQyBNStn4yZiMgM88L4F2HpPToFvRHTfVdM2UnKg",
  "key29": "26avZmQS9Sb8LPcBeCRz3s1RkApKhpyM2RLsz4mgeXDQkLNXYTdKzEFCoUMWj2CsFhFhmAcUwZqrB6SPGHYoCKyc",
  "key30": "4oTiwHPXDVK9AKZjWCrNgGi3cMstukV4zV5C9oraph9FEoB3H2RWPQRgtumiDU7Ty4ZM5pdwi9eLaW5xuyiY127w",
  "key31": "5CcV4xFhLTKDJWUDh8B93WYU4zCBcxixUFTxw63iktGovQ2in92z3C84j2ZRmAds3wfkHxyFgZy7CS4cvfJrNo5i",
  "key32": "4xupTS1DF2chV41m4faQmNUZ6W3GthEqP5Wtu9LwHgbeQQ3n2y5v9PoaJDDYyxjy4PNNqc1eAwwV78x6EcH5H4NX",
  "key33": "n361Tm6gN42SofXFShXJUS2XwV1UT7itupbBYWo3AmFTFdM7YVxtS5YcgmKA9WrrzJH45ehYvYEtwoxxXXbzsMs"
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
