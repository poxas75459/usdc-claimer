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
    "5yXCYZcDHXMzZ6NZA8ewpwvAUcmPKBQG5M2qyvYwS6Si3vax5DABtNwNcse3dpALnv2qoeyFKeNdGwfidqx8iv9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ASJuztWiM9VNXuq9wkWYxXjKbvizN3F5hd4JfHW2fhVLfRNW2KEYbnZJmgyyqCbELHd2dfA4VfuVmWGQHohfQhU",
  "key1": "4p7tJthocxo4NhrLjAsE14iceuVMEGRsHo3U6N296wa4VwYTpPLtaFHKH6EnLnihtMJaUDGm8DoV5ohn2nwBCg8S",
  "key2": "2bhBe5AaoJ76Dz1naRJ1svEiMQX81zqBvbkLSyyG1fR3b638vyogDJJ7vbNWbkLL2CN8jhFtbBzeuqK39GswDvyB",
  "key3": "4oyx3HFBgQhU2Dm2tQG4mNUifgDwkGSWdj7a5nVr37BS2ctAcKepH6iQS6uBjuyBs8QVhmzxWELjLz3gfwfTF1Q9",
  "key4": "2NBZDYpaKiHafuxvCxbrMKadCxDYY9zx9VGcPymvwzGMZS4Cy5wPmTN7QdkqGqRVc26ZS7mJ5xskuaZr5vChFXpe",
  "key5": "54xCui3dxHgqV16o3s7v9V7z27FAu98u1qy221YLPLRMda54K4YHiEzqsopzG9oJ7iBh3NGFcWTmz3cB3rTpScwU",
  "key6": "2JVBRxVTgpLAPSMS2de7QZ47jBrHKKTo6zTLs98U42gSgS8NEh9EvZkoMmEodjc1Gv1RrdHYjKwwUZH5ApBqxDd7",
  "key7": "5UdNWtSQDmzTcVwipGsKEUeei49cVFX7ctUi8YUSoSrzXmdKSXwx4mVqnHpHv3z4Fc1rdajFBk46b2RQNexXzDGT",
  "key8": "8FUCRLNvV7iPqp8VfxEUvsRhMMi1BBWAEjVVSj5iDaFYadYA4nM123DZhUwqR2keFgKWqtYNwj6KuWJDzXz84QH",
  "key9": "5jYzfHQDeiiVLKbGCdN63uuxfZxkxLNcfuTQtnBf2KgeBHDcUXuUNyjvHFpryfjtik71ocwE3sYhWkXrT31mPyK6",
  "key10": "NU7Bw9fhVHBChzqVfmZQFkD1k9TeX1sBJkM3vJyTkEQ9rgFVFhuwwBH1g1JBExBRrFQHEwvsLWzpFLiwdnd8gBk",
  "key11": "5L4Txdp6FUZpdxWpLYzJjyQzGfty6Fo4RMbAuyC3RG67rKbXfdYmiqQr6gccEQQHqhoXmETPFwBbW9AcVZEL63ze",
  "key12": "dEDyZdbxmENP2cHJzRrTB4u2vtSe3m2v1Zwc88vnhVfFZyRtWYFJe1Dksa3zuBFWcwH2sK1KjmbfUw3HFn8ECxr",
  "key13": "4KV1jisQcxCeWKwUbnZiSNPCRenPC8jAugS38HiNG2729T2DfKxGzkHv5qAudjW1ViYFP11LQWSuGrm7tCBs1EK1",
  "key14": "ZdL73xsfD2YWoxjRUneY4VnrQF1CBpcHymDFyiC9CMA1LBeyNnbcbAu2DpUY2NNb1vugdUWDiejxo5R6ouZjza5",
  "key15": "5Ndy6ThaSKB66f47W6DHqAykMyCVaW1w7CNYa16qcQeZbHxiAE5kqwijxv2SjWrcbtk1i9Wh69kvmcKXnyDXJ68s",
  "key16": "4BQVv5hLQHHYPTeUKvdRqCMxhSqA9KYutu9wLmxFts9zC3JBZpFqNe9iUkPtRpSqW1bvQQ9Um3DYW5BuYVLNQSCi",
  "key17": "2WZDj9GSAwNseiP6wuvMrVVLRSEifegRSFQUgXxJ2PzuA27n5ADZKSPHtSXH1VsZzEcY2byovLVYaG4dxiqYqKhT",
  "key18": "5JxSNgVGsbE7UUaArTDtVLT1BPXAJqKYjZZXHhbustTR46oZWsDHtAeEgno3jWnptvt9gpJrP3azC6CaVXTS4LMj",
  "key19": "4tkv2fED9MtLDZ3NTEziSd1H7y8m8aMk6DFZt1rkxQ5kXLHNozj7msPd8YLGJg1xcKqsyAMzS8FDgrkKnhdSKY1W",
  "key20": "65Kz2Guu9MZLEt1x2MxBj3bBcwNAU3yDVHRKJcb5TssPeGAb24hoEZ7jf3Uq41rzKP5RWTtdxDFdj9M2NjZ7z1mH",
  "key21": "4HnycgevzG8bHQpfwES7C6x9iyQ5KiWbmM4xxgWBDcCZ7VS3bf86s3hhYEVWt4xYRa4XbsL8MEaVP4m6wrNQ8JUd",
  "key22": "5ESR35WRkAwWXcJEh9K2J2uE6xXExKqUfNMDR54rSuuxTjWvT46Ejabtk4nxtNDTf82VV9SpqbymPX5MQJ8CMFft",
  "key23": "3FqSZ9P6E6WTsWtyz7KzoqqRDrPeBsvB6pKYa8aSFtxMfB7rNH6PFExgZCrPFXhfzybxkZtf5hyCHCfmyW1j74sK",
  "key24": "3tXphdAuAitNgE3KedDJ3xy5naoGMhaxgdU5N6yK7n6h5rxzat9Ejok9xn1TUp5oCsTgppNbhJZxhVoesjmUzT7t",
  "key25": "4AXh18uv1PHYYLSFX82RxymNdK8s5LW3oMZjGqtcZEAYGPesDwjnBnWJj3VhcH8fMmrPz2YLymGeUW7UQRQUMCUh",
  "key26": "5rc9BpTwXJuXLR6tDNBKv8yiF5S7GU7V3oix8b93xioCVTuFnitMXkuW1zV3n5h8AEjfD3ahXXrfZyUj2zbjM6jk",
  "key27": "oYkd2EvVxXzN5jQQVz9KRPrAqkCN6ikRozzXrhQhHSuwVsNjQ7DzKe2A9QKxUaReCNbTYTHrbBXVg4YWF3rAXiU",
  "key28": "2hCDGH3C2m7oSSkfoXMGFL75ASM6KajcSeiyzHvGeTv8Mdy81QNLYpsUeoSnmr5yMnjL5A99E23rVDZrEGUFY48R",
  "key29": "jAHhNgDuZadJUjZ3eK2NawBNk3TJTLHHFLVA28qVFeG6PmX3zDuXWP41epHzr4URPF5VqyWQZgPkErfKgCAduGb",
  "key30": "3wJ7MaKH2u1KZRuvZHGFLCEHgJ6dBfnVTy8dDZ8P8qTXPvxyEkt9GMv1TBvJvwhCMxKqSZecY67Gjf4ZiqudWDvN",
  "key31": "kXm3JWva1QYsKDvDJv5PRZ14tEwhqWvF7pFJSWGvrVxcPR5eTaqDPtdVtAAkvEXzBnq4XPPsMAk2RJbBjaBBcqc",
  "key32": "5hv4ifrU6zSaexj3STKpgZhSZm4iiKzg8LSD4yygPa2PVN49oUwnXfaj48MGsgt98aoB9TTxGUmLvNh38FVNcYfU",
  "key33": "4rVzhJmQK2MoWr61ZnKfSX8k8tL3zb4VhfNsieYrQWy4FTWbhBdCtpRS9tFNH615ZYymJQxDfxhTTk9TeCrgEqET",
  "key34": "4uDuMLgxmqZwRBDte7A83dn8Vas9aYp18JquhvT3BKDbGD9hFTtMBs1oVm7AT7GZrCgFgbpR2z7AtQhVgCZqk1s2",
  "key35": "4p9dgBfDvUAuh5RGMCWwc5fkMHaj6oyCqSEsuFxXwBfeMXC81MHC8FiJxNDkLx1oyaSej5qPRNGuYcet9Rbs3EEo",
  "key36": "ojY1JNd1z7EHx7r2MQvDVjeGbiCiE73a6YyJZPiP239ChVk4LJDvTrfTFh5gutd8doWNDY2yrQerkYfPFYgUm8N",
  "key37": "5HGf5SgXdKbrMnk71sDLpkFyW5rMMbCZT6RTQJgKy2gTkD5Y3atKaQjHuA3joCHrj2t1YjCvgw96dSqnPbKHF19x",
  "key38": "2sEjBR7nLoZoySaGsmPqVtGmoLWHcu22TNxJD4ueeC5QVSzdsZCKs2amo92MNqgx7zK6ETgrPyTaT7NVyR5ywQNM",
  "key39": "3K9eGHgfrsfEqfpMxK3anVnXfJbFnmx2jegZ2kS6RdW8Nk5bdYxCAXgknUmKBiAT8E5C8brN3F7kJ2nmcJq97iiQ",
  "key40": "4HEBB9mc5sBZ27BAoXXiBMv4d15cAZv3CvUd3n98nkL3nNrG7xbqFMJM47SivvXuYYWA1HopxEATDdzoiXky93n6",
  "key41": "3tDm4N19qanpAL54GLi4Rfa35bbjQQV7qWks1FP5EZCNt8MeLd8bd7knkHaooekMT1yj3f1fpcG8R6Pgty74gB35",
  "key42": "5h3NMXkz8YdKVuVtsXGggUxnhZN92npdZuSckrTXaFADrYvBBTaB4ntUiiiHYFY7qhnfEKcP67V3gaJx9eVvxxXw",
  "key43": "5kq1W5hFaiS3T5FDnP2HiQumS86jQGdtVa3wRhynvn3PJrMzteZWcEvQkjBXSfLJrDET5NFJd8zcgR4cmgr75dEU",
  "key44": "25vFiJ9dBSf9NSMba1LXAF8QW7Hb1F1Krd9v94Jn2uSvZvFXTZ439VEcVVf5MnkCVHXSg5xwYQ195Hu2giML98vb",
  "key45": "4viPfQMWJduCGnAnVJcowLy74aAtWnebwm78DDCi6jNcynMoWeq9BGokhG5gDzGpDrSfU6BWPMHUEkney6hpU9YE",
  "key46": "Q84Fwkb3TLC45pMUVixqf3VbqyPcK8XdtKcJvoJynL1bgSxh6u4pEf8jkR4N6wCQymDt4vex5MUDkYJ9QodPqv2",
  "key47": "2hGgm8NurUg7rKWDwTPFZTVWN6zk1R8hKm977o9rnSPXHzFgV5YjPreV3xFGpnyZp9SgdSH6ZxYMDuBAUsKzTcbS",
  "key48": "5PhrvZjewHFzpX5j2zemNdxC3UzQWt43QKn7Mhv7xjnDcSKRBLxyqhQxBFMEUvJgLc5VbW8AMCidEoWgjr4WGgdm"
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
