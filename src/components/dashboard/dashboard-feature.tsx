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
    "4SupZ5XinzrqWNEU6rBqDJz8DMa4JvShz6DYkebs8sfueQuoV7q8FXwAkPPi5x5QC2KbxzrTjNsSRHG18Nex6ZAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YNdHfdtYbdfgLLWRMWsQ784EnVcHkKS1yo3UUraDeGFzow2z9C6pddDSW7a3aP4PKDDNFtTvxeroz93kCNyitRB",
  "key1": "5aJ2YXQMHSwh9FwQDoTRXDe6WUzgG5dYDJCFHNs7E2JbBRHbBwiJvAgQYpCy8wyx9yxceGGYeCn2uXP9DDDS5zcw",
  "key2": "P24H6HyQAjfwyAntWoMqXTdfRgaWMzXsLJgAHc1QVTxmwHwB2Ncsbh49YwhVpReiFZmyfJT9TJQ23YBseV7ssLw",
  "key3": "2STvKhM84qeBWieTzNri75xVs5gTRhwvrCzSwzX7f5E3HeNmsMGwwPM55uxm1AfVegGzyHqk4fWpWGx4DpAvPeAM",
  "key4": "H6LqcRxsBeowUVaTVX9JxkpiaG9dqwZHwZ8E6AkYx9xcgXksRQ4DmKu2fCh1rZTaFD3eC7kHN6USjnnJxkPk2xK",
  "key5": "oF9YcuPbGCYRKhFJUR31ypPpGjPdYrhk37xSstXa3Tq8tusWkgLwoC5H7guHoHLSPgfjoPkC1ChU5UkEpfN3zfT",
  "key6": "bkM6Cfh5EMPoc57Mo2D7mcabzbYe48S7KHMNXpRDtGAaUG6mP6YvFRzou5Tv7X2ZoR495TWaUWHcu3qZ4w4nWqh",
  "key7": "4EEN9p8iHmhZNsRfArJ2R6ByVMHEoee7W6K2zibXgoghG2soLRe48ESxRRWRYUfNVb4JtwE1YJh8ZVpp3V9gdKsk",
  "key8": "K1MArsB52D15NKT49thDqCfq8rQinPwijbEMbDba7V1JA7CDkRKTBDrmFmLhS3Hvwq3FUhtoNEazgFVhV2PjYrQ",
  "key9": "4Lo7G7jfmpdqjmZUFgWz2yWtphH65r73y49VuCS2qK8gFzJnporZaFGn3HzZxuJsCVvvQtHHTLK3T6CeS1cVfCoa",
  "key10": "3nD6xJGSt5pt9hX55oZCQUAYHL4zquYT9xKsaWo6VR9MW4ztRhqwKHfkBPMw7DogbhBL5nZKWQsU4vsAAbnTu9Yz",
  "key11": "54AcosWtCHrHmFRZbnGUhCLnxo1v481Xi9aPr2JaBSf56C6ivGqnkNMYUBj3Z9jNNY4krwgFfDKHYXnRfhvnFvfj",
  "key12": "4NATrtBFCehZHwcNrbdp3MfvwxFRvy7uWMHFKPqwX9aA2tUXEwfVWA1kDTuYyeNFAXj2hhVWkbM1v6BFaNQvBuR5",
  "key13": "3Y5UeMVixs73rkGy9g6nNqtpxCCdmaA4RQ87phVhLnukhtS8ygTsphwVPkE7PALvJBJYtsvwWJpZWcVkFx4wbxfx",
  "key14": "2XAL8Hez7hJaMA4mgnCDdoEXwuqHvrkWYGzxvZBQn4d6Fici5WhSSiCqZsV2mGqGUmnxMuqhuB2ACLLcbVZoZ1R6",
  "key15": "3V13uf5G58DheiVkAMEB2BexjQfFkPhg98pn1TtmPDiApPHV1qLYohyTDvgmkrTzeGpoD6dfbbFeC6Jc84kEwSNn",
  "key16": "41yvURTjWgnt2WUcfLNBQPEmcFnU16V5UqydFZk8cGqbVVCYs7ru2oJtXdr3FgYdnd3VX3VVXBLq4fVbwYmNpNU9",
  "key17": "5p2QSJKEApKu1C2n3rsQ89nzzwxu2RfZVHxhXhkjknLXBiPHNLukanrQv4EmKnfPfModwvogwNNPTicbUhmqY4FC",
  "key18": "31iTKNkzvp8kgHt8aMAKmXW52Fu71xdtJJAk911dLjwhTnkAeMkqGP6gdKXHzp2fRxG9Y2Z5QSPVHZZtHmyBdJJb",
  "key19": "2VBKfKpSzuWtTzvw4WXaXqFjBXjtsxPA748M1XXAZ6wZrerXmf73rtMb1xNvFpQMqjKp2Yx4JUxoheNzuVVav547",
  "key20": "66d9Mm6nkou13stjs7iJTafecycBYen63atGK1v6fUKQmNye3y7C7gfnvpBpMhF4bRzKFrmJNoLmhnK9hBynfhwN",
  "key21": "SEG9bWG92GH8VNAdSB3AGogKUpaLo2s8VczewowefnR62sd4NWWPNfs9HxozUKJ183wh2ksvw4WZmw52ECKbjRf",
  "key22": "4rRoMB5rWE5mWaoypKCi8Pz9TRFmBGZQa2wVstPP5SP4yFftQWMkuKAW3u23W5suRnaucbyXZ71FzhDFgWmFRXZD",
  "key23": "23dSnu9CFbCpEPwdhJMRPw7FpU8q9WRw7TLWbWXzUkGNvM2C7TvMRFWZ5GsdkK741rWGy33k8yensNJiwVhDwRGg",
  "key24": "3NtdQHvfKVAcgtMKq4D1rWN317chaL87aVATWrVrzEmtbxDoDTb6vrSCyvjUBrFCj36x1yxQu4YejNTFe2mVw31M",
  "key25": "5ssDUrQT56bxbPBChHVY9YXwSgASYKbrSfVGu4K8pEgzVC2bqmnfozTESgkxc7qjVveYNqW8TS4gkoeQwVjNGCyN",
  "key26": "5ZSwY95CLAezBFgVi8ow9m8nBKvY6FasUeFdivM9WWbJCzqa2Dk152DL2mdz3zbkYo9cMMyfHNtxSMYwNCKisJPP",
  "key27": "4vyoW7vcLYnub2sZe41sJyjJrZZH7tUdj7ToLgDqSkdJSFyZMSNk59Jc4gKsMdoENrRcQx71NYLmoHKdUc1f4UjT",
  "key28": "3o9Vy3K2DRtc3ruQWDUJxtLvbUkNTBjW7yMiTT49wRuEkvD6kwhvubssLEjEiWjpa5vH8UY4bXh7zP2JS7J8M4WU",
  "key29": "4k1CEebbGZCWtAt3HFzDQ3tTh44aKGbcXiFXkAmW6NDC24eEBoQcTSqLumrUpJ86jobvCQVgs8s8mc895azTrxn9",
  "key30": "2QM8rNMwpcUY3ztq62ax42tsfZrwhSC4mhc6cVWsYGeUubAKGQ2WEYmjGka1CQmuqXsooJUfHd2AZpkotDjx1G7d",
  "key31": "G6cNhbRoDkCjocUxKbx5m9kDQv6jHHTHjWHcst3zNbiNv123DcB2QosyTyA8XozBLncSdu4FKEhVSoFPYZDPp3K",
  "key32": "2ELHctnPKZRG24Cn8zFpGzQ93cW1gxPpMf2buS3sRpdhdRrQhMXYEafKBCtyetLJcpNy7nNXcdRJymVLLrfRoumu",
  "key33": "sbwuKWZhijo1YcGKJBQRuk2wLVXfZN9eYGHru6zXEmw5aSPhBH44SRpN8NnMaVf9tPUUCrSiSJXunJGYoC2f127",
  "key34": "2ZguwDTEzaud2rB8soNoWBvsA2pWnLtR3KB9oji3mphToKLtuwmSXyWoHp2Qo7C7ozf5WCQtv51DwdK62WjecX9G",
  "key35": "3qKetpFgCeNrTVCg2mh1bccZmo9CBxzZYxX65CsbmuQd3rXBwXcnRBS8AH6nN1gfuNcXwdXY9CviVPaBEEbnGWMa",
  "key36": "ds6EuPS6WgiCAQiAQJh7wzke3QStbuHuaSvv4RdjuYgbauvBe5mW6B47vonKKZT7VDeLdm8uFyKXgNDfwymFuRs"
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
