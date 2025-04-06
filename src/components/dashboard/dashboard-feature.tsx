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
    "37tTNuNCY5NWKCppdA8Qe9cb2XvakFGCijGCVBVZcAJxmyFUPJJvhenREB5BNuB4GdMny6VgTYz5jNbLpBLxGKeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GqHeMgedmLFLnYvnmLKZ4jBGcVvYAZQzk3Piz18t6vW5Qs9k68JAXR9GRBoDegASJJW6aPuzQgw6cStbL7vRSTn",
  "key1": "2Ev76VDUQDygryeGCehTkLXFUfweXdg1suDwpNzc8jNiqpknJdxc3mU8ytxj3mv5RKSkLTXfTT1dMLQb5vdE43Ry",
  "key2": "3uCa6DAJiyyLWpnaS6cLU4gQZeBWiwfF5gQ8gYMZpQMkN7LJD9aYE6aMUjW9LmJUCSrty3t8CPJuYQqc9vWnG1GL",
  "key3": "5AtLHcsbiYHVCETNP2Yu3HKjxW6VctD1BbnfY9QLfNgWKk5PkGKPr6vXS8mmqEiQAtiyz447yKnjgfbTbBRXPYvG",
  "key4": "3wSiYHpzkY6VQ6KnBVF342UuHNV7u3sWH7RGe8112aXRMYjxRjQvEigUGoYNq39YMbvEKrQasB6edXRokGVxcWGZ",
  "key5": "3gLUurPTwDFsJsDPzG2Pyj2Jvy5883x96rurJGnVBKH4hsVHsQ5BJougkq1493gZm3md2F1iyY9E6VcDk8K7kiM7",
  "key6": "4XZbXsDoU5odEDpEsoRznxj9MVSjszidKeKG5L4YdUMU2PFEA3DKCdAtKmcobeFKFCgxrh9zjgWSBzbVtzAAh2jq",
  "key7": "652oTXkERzkygjWYCVr2oNsZxGhCvZyuEU9Ti4LybRssTn29RnsSwuyMgmi9KpWWokTBZ7AnqZ2mMgFd1fYhqXiT",
  "key8": "2hMUo4Tv68VXgLZ58HW5KMiXAdkZduUpAt5EDKYzgwAv8SufVtCBgq7NNBzpDP92E7piQ7Am2UNDuhMuHvgPdqwN",
  "key9": "5TtCQJ2xsesMo7Px3aPY936uF5nptfwEuQDfLzbtssgLNenQDN9ruWfciAdKZVLH1JwHQAJaJSvu6qbwqyQ5phAV",
  "key10": "3tYDTRwabUs7oN41HGWeGf7KNYDxt1rfaFekfitPHDpwS5KfvyQaCZX3vPnatpsGVnjd2Bq4YbXmwB5Mwqa4tk1s",
  "key11": "2RKvhDZLsebzUNjGetNip2h2RAkCHzv6kbyUizGU1VtAS3386Ukh9d9Li7a1y6vdSCJ2LeWfHBknWCR1EM1NmDmE",
  "key12": "43fuj3hsT2niaF2MV2it9PVPsKQXZ12fgu1qT37Lk81nCoEc4QuKhUBLVCW1HRCZ1caV3vn25bno5jqjayHoSkn2",
  "key13": "3YA4MYXxHvzTLQBji9SueTGW9dTeDvBofReGXBLjaPThwWz5vHiMrhShxQRXPUenT9h97eEJLMgoeGDQGYdeSsSH",
  "key14": "5GgyWdDUyAhMjNiVw5wag4tQUETeMqomDmX9Vf6yfqjEhU7YKGdZfDtq9292fxpCPF3DGqEVhHLDdzuMAKZR9daJ",
  "key15": "3zbLUeS1HMZExvqSdfTzM4AqM8MH89ECUUD7EhBge9cUsLHVfaDTuUTT66oxktfT3jSJmnxsaC7grxX6N7gVncUt",
  "key16": "dh3dVuvv1rFQTvAcn72qTcnFAKRPXjfFMrrDLVrSM5MT12r6wLp8wbDcEad4wXabEvksy7UuPMwgXikourNhjCN",
  "key17": "53jKobzUBq6ZJRxhKY2Dd1P2WLaHETESdFLsqbyLAD3DEihVUjqLuZnXP1S5wSHsJSPtN6eMhM9bfLEQuWwNn8Sx",
  "key18": "5AGJUwTdA3eDT8SnSWRdXrENpCZeF25ZPygzPPhCUdcoUv2cEGhKRxBRzJhByaWQC2wdXxCg2cVk34tQsNwPiu4U",
  "key19": "4uaqGEmoXdJabL9mGMRNhqD451srRK87L69qjCft8Q3PapTZCXBr3mi8wcXXjDaXcWubw6gAj4iuKcYnS5KYdiX1",
  "key20": "37cHDr5i5qHkRsRMu1LdQ6PdHfRhNrNdcA4KpKBcUdsRBgxmvBNUZyhF1VqANXx1YnfkvXB1Cj85vHHFWDnyGiP6",
  "key21": "XLGfbtELEUmgbfAg99aAMm7pWYqYM9JGmkV4U6upBwQd9PnXCPzwwBfgPwADiKkEyh1AcZ7sV8F79jfGFqbHuD2",
  "key22": "v6fmp2hYTJ2A9Hcg8tBHgjKbu9fMb3XXmL2QGjTSzzbVRhLjqRq8C65cCkvuRrFoukXrWr3nrk56RQhmcmxAqtW",
  "key23": "zZG3UMYzbG47ibfmqEK2NgHy44nZzKtysv9jfzKCYgr7RGokDB5gnLXhX4qND4Pbhj97LBZLdnJCA8XPjcc2EQU",
  "key24": "58m3R7JTG5xpfVuMebf8pt3ZMhEY7qttaUDexAjo7RZur3Lhvg9XThQAYVkMwfVtjWcW6XdWBoN31oJrj9sFTztR",
  "key25": "3EBrgDU2FnXrmVCz6AjbK35vKqwDmZQfwTV3pMsfYkxu1JeRvMNjPe6C3jDxcALZoypknSX5r3E3kk2FdwNxPjzu",
  "key26": "mQDnynkDq4nkKiKwkanaW7Eg6SQRbtRT55ZA81pk8u8bQUn5TdBdTRjyrV1SwE6qWGf3YKMZELxmYViuWnGiTDW",
  "key27": "3Z9gFMUTC7ffQMuPYrzPS9nv1Hy2RzoUVxVDLCUgwthK1ohrjvK49WdbV7JPNMFu9rebpeYkdcuhv8YDGy5L63We",
  "key28": "3Cfrb6J8q2kr76VugvYqLEp82r2KzD5T9WUHDDkjCqXtuPR7EsgU7NbaYZP1B9C2ezon7ZmPBpdumfC13x6sGvHp",
  "key29": "5tyrjo8DMzJ4bwaK1VmHhJrFFBRw3Ts1GpsfFM9Y9uP7icKaDoWq7yrmXiJ7KxT4jGP79WuNpKW5TZgF6K32bAUu",
  "key30": "48eJ6vUQGe2MYDpxAp3TRUr222NAtD9L4Ybc14oCrC9fwos5e6C8jHMh7SfrcFZgtKohR2p9yjxKRKQi8RY7Jmci",
  "key31": "5Ykd1AuRVTeXNYMhPui6KY3e7296kvzLLfhtVJy3ejLQLLHEKq6wM1UjSydbk6bSUAZ54DXwyN6vuaKyadMEMecr",
  "key32": "45pgF1ZMDwqoAAaQ7TNerzEdJj2baRN7P8waZ17vehxt4zAq1ejQTZia9vE2SQKSHYaABXbvoif7ynDmFsetUEQ3",
  "key33": "2Q9zYop4LXpFn9vsjYdbJ1Ppcs1ZvRHgpBz1y7AQvvwfmCqKJiVj3Ud7TrDULgNR41fQkUDk9QCQAjXiwzs9pqVi",
  "key34": "4VFzsipN1heRErUxmt66f2u3WSbhEaLyaE1odwxJWdGs85oHQvN7vVPvqJZkN5SrFHRGVWgdP1bon7FW39kdyXvd",
  "key35": "5CLyRiqpmGg1P72mcCAsq7bakAmHdAshgAohoGEKNhYt5PCphkQGQXKJdbs5KadY2k1Dy1rnB7zRSUvBpwKFddTW",
  "key36": "4d3s7EzcVUdFYUeDtE1GdZomPvjBkhrYHZe2k3MRuv2GuKbJiaKrSYvnBKkpB5JRBsjn9E9rdyRxvXR3vqoo4mrg",
  "key37": "4CKxyTvQHwYBXnGvxGVA5RzeyCcANbrzM6VjyDtYXejW47v5q1guZNyav78n4wrRWqV44u9zWVmZufTK3nX3dPJA",
  "key38": "3EXa34UvqfnYRxwNKGPGhYUhhPZXkbJr3NeDMcVyHXEFTWTChogd941FJXKsDdesaWgPGZR7E5RbTULSzEkw4eiN",
  "key39": "7pWgVYo4scMFfnUWr7C3UwPHCaKFjnwqUYLdbaKjp44ZkcExx9DyhhiYdPjskjyYmGhyzcGAXKbBLkWkcaumgoo",
  "key40": "UDQs8sgJmJHc8k3wszvRQVnm7G1r4wVYQXtfh4f64E6yLb3j4qQZWFxZhHZVnQzfNiUKDHtrapJLp2cuPpKHB1j",
  "key41": "quPgcfPJzaC41LqW5tor9X1actS124ujPme7s1HiZ86h8pWdf8qpfhqkrnC71Z7hiHKeTaDf1i2BPfcUiKYyH2w",
  "key42": "474vQDib6cdBnzg4AWzRLbGsphTAzvK8FC9uEogAjeFPmrGAG7po5B1mumKcr8VG9E4mM91sBgsj19ZFunNEURK6",
  "key43": "2EaLmRpCwSgApK4AQhvtG5hrKuWtq7KsWg96UYeGYsNS4vZTiz7GxqvAgyQuU28urUoaBZ1FrhDGdXCeyVLPCTY7",
  "key44": "5RKPJ6GpWrbGn23d1vPgKnYtqefkLyWSaG4zygwFFqncKvJwQDe5KZ3iJen24HXa9BmfNff4En5sBRz3iLHQEf94",
  "key45": "5LV984g1u3JjHrvFqzsKkr5j2eFs5DeJBM8XHYidsnxvcsQtYfWhRRS4JBD8cooHFYx2RPbZHFEBWFv1VakJ1u3E",
  "key46": "5awxFe9NcXQ9SV4ewwtYXxEkqUouspa4FiVNTefkYQVkniQyBfMGuM1odUfyZKVZbDno5YEnoaStfE71CwMakWdU"
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
