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
    "4QCQct2MHw9MDxkSmtxurMRvWa6b4wfSz9Uzf1GQ55gXTV6qhnq2nRt2HUHBdtgYsCq1eqxknht7VSEJp2CG4JDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zhJkgRJUnyYKH5M1YM5HjPFd9eg2AmBeEcLy8FWzT9GC5AKeqwp65g3jCLgDnjnGgcUb3QaPgi51erWC4A8dxwF",
  "key1": "Wt4qAzD9CEzu2omZWwJeYTEefCQLAKZBcCBjiNJpxyZQDNu9QnMcvr581LHqQ5gMX1XDmxc3sieR56NCdjY9Skp",
  "key2": "62K57o4SS9p7Y3Uan5qg27ZKEb3FN9FoQa2J5YbVSbywgQYqe4EBasct8noWWRLsArnuWvJxVhkQ1FM5WyiFrL37",
  "key3": "5wdgLdKK8zSWyS7czoRonyQ5owsXLMgrEA5YB8f3rPgsvf3MKPC9pBRh11uYMyFtuMkUAPPVKoJxe9BF28kAbfJS",
  "key4": "3RZPc5xZwcG2Nn3H5iJUogwszBUe7Ga7sRBbNPUrxSm9MQC7fhKKMFw19AYPrqPDADc45GZYvEi3S2So5PX1TMAY",
  "key5": "39peN2K1o5i8owZhHGNWiDVbw9rfXpuDXb6VNhJ9xjmaiN95NZrfXpanytMNxsJKRJHz3LxLjKn5uzh4XNXBNDaZ",
  "key6": "59cH6vBKd3TQgHcc3BUhUppjkaeoLHB5A2geSe4FU2uFPNirgbDBkDjMjJnif3vm2FCAHNEEpjEtaTVc1rLg4FvW",
  "key7": "5inKD3BCRJyduRMmAAERiXzYRFEeKMwW6BFEaHcTWsFphKYwXv9rfCgc5Qf4jg1GuK65otdf4Hdp5nLdDXvKbvUb",
  "key8": "9GaBgxnWjrit32t4nB79PVjsLPk9zvRHaGxfQ9Fp7jKmWkMcBLTx8asfkonsHnFjA4NifbxxU2rPz3XBckiVvdw",
  "key9": "yjA23gpKCMUNkQB13xGJ5ox6nAv34kBJvGZoZT1EpxSXQjDMQiKWjmAUC2HStBbb5myyQePyjgEGzPVuMkbjSM7",
  "key10": "3yFwUaacpvsmbkgt38bRdTDUEn7n1NY8tsT1TEeTJo1vzMnSMMbthhDXFqw1PJukkBrRrkyt2rwapmvYv7BLBfuf",
  "key11": "3DU3Jg6aaAeNE3Z52o9hVaktgFtZNh6yMTc9XgBssZbbJ6fg9cMBWbebEJojbwvYK2wTMibW6V2GTJmWCGUaJbZU",
  "key12": "2F4v16Tsg1vUPpXuesff8anFKrcTFtAwa4pCyPD2UD5MwW1nM7DZyEKF3K8s61gssa1TxCyNz9AC1novVUwiz31n",
  "key13": "5KsceqWJAbEbu9LMmUwnuwCF1t5DquQMGv5zkCQHyC2hzmFju9j5XJenvUfHf4FaK9vUovcQdFvnsgKjgDfWaNYa",
  "key14": "2rakvGYgrnyJaNdFFrovfuvY4vgSgaMJrXQEMjUhXryNdMzfYVzJXonmdxE4YMKDGzPojSmuonmLPJxS2H1JgdQG",
  "key15": "oDAbzdbYQPC2NfroS68U7wFvZdpwKydXhbcbt71UCAyjEsfeDN6arDg1CquyTL1eKskRhjmtKSjRGPZPF9ZLxvP",
  "key16": "LopXosBPmd6E4YfNQ57ViT8ha5EMcDmWeBPPJfq8QzvQijSYKDmdZGFGnUKLr9abWovP3bXa5xx3gN9QtEbyEX2",
  "key17": "5epaMSyymxjsAW4TUmYonoVbc5wxfZ6DvLd6zQLV9GR3UZxNCuyvpMyvCcg1Uck8B5qbFGQ7PSxuNFgt4gmfE4VE",
  "key18": "3VfSAvwbJ66zcXs8Y5PYGs8EqtXp4k1ag1fUFsuJmxDPBZjWBtMEXhPxcG3mG5po3urS3LHbFfnvcHFmdQRSnpCt",
  "key19": "23Cexpt2rDixfPnYZQJuCpsv9LvawUJwWJUtZBxDYzvcfATPxxLqJHcF4kuXxaxqeYZ57EchYNwXkb7T2WR58rwu",
  "key20": "4oK6jVV5vxZ7W84NBkHHmHGaXtU7wqoHGKCJA7fHA5K4B9ToLnXH2ZKDqJTgcB33UE9Hh5E2TQFrzmJdnuCHwu5P",
  "key21": "29MCAVtgxEHKmUszrA5XomPKP8CdFpSxRjQ8CTBcxsbird8zFvZgAyfCiKSsig833WQaB7EJur71kXrrmoy7uTDw",
  "key22": "2SnBDm6o6Xo8QmqdVjoajjLxZwy4x3qoiUEQ75gGBED9KPjR7kGsQH94SQfBD65REH6x55knAc5ZkUavYF1HWZtG",
  "key23": "1Gq1pehDaU5Wa19ukqiGG5BCu28uuU7MjbUr1LampaT6td2HHZpX7HnK7sc3KHpuECNN4w8eLyfMjcA3GBi8vZf",
  "key24": "47gn8aTT5v3ZzDkeiiVVVrFHVaeaj1vgNhvo4uFdWyQxNbLUPpdQXt5zhpw926pMHtPFaqcN8EoV1ZnYnh1Sb91i",
  "key25": "54U9gD1tGxLAiUffXXe48d5abMzBAyTCNWyazzmyWFdeb3k8uSWfy7DzQVH5U5UyQQfzpZjXqpH6hCQCu8dwWGKs",
  "key26": "3RNpzSLsbNXgXk7s1UCxdrPxyipayqq1U63TqukkxUrM26FQP698XVmkyNvUy1Lizt6J3hUYm5ikRqeY4FJPgp31",
  "key27": "5Sbuhc8UY6s24QuC8sZ32Ek7oD3s7MbJdvHEPLXyARn8EdHGztrkXKqzxDeNT4ruaKFMjLHyyr7MvbzLRozbisiR",
  "key28": "3QxwXvUFGG6QPEnH7NnS6xFyHTzxhznqkyuMau5zP39P7CG6Y9dHWbpBDHxfea2MWK1bSfEQNGteKgSYYgk6m41Q",
  "key29": "5eo7KZuQWLbinypgEsPdjAGoEpEck9moYcAoHWs7nQiBzk1uLzBrMKmniS1NkfNKNmL2yiX1aDmFkv981UFWb9xx",
  "key30": "5ijbv9w2kUwN3FP6N8UXZJne4rxvVn1kVjLykcvsz7Nq4S5i1e7NMqooFvniAgor6DJPTLyYYBfkYCXGTVVmCG5Y",
  "key31": "4vJApvMbCwAdvAPLweDvg8EeppXp3hNg86vjxxhTTwbLWDF2cPHFRizv28uPtAm6PU1ZqYqHQbLf2WpD1KNuhtsQ"
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
