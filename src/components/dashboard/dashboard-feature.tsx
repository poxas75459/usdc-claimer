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
    "dhgKEZEWK2VuHGMPXiyzEh3U9fEnXZWcQnkR6TUXF54Y3HiUGcpcrD1E2pNYYnhHkoYQWYonCE8zxChUSkP28Bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L7EDnvHgLkp2mRs9vVztfN5MdAUhSVo7P5fHmU17U6qyeKkjbaJzc2Ekpm4DJgM5KvVFfWRfHkZ4f9SqNPY34uL",
  "key1": "3kLcKsjUm3BPbwbFHCDndG8zXD1aWeyTasy3WZZZwU1eYMUHqitebGPzuh8Vh5dSBWqy92SnPof7VCYyCcbyCC7X",
  "key2": "2dHQLZ7Qwuvy5uX47TK8RMcgsyQC48Cz4JhMf2dpULswSw5TdU1MStdVt7fn1dHR6RyHfy5QpdZZHX6g4NaFqryN",
  "key3": "57wuLLftawccPban3DAADFtZWYFd29rjfG3dMj7Yz22t4ohJapuqwZtwmUq3UzQ3hJmxaRZxKkg3iiyHRqww2SHw",
  "key4": "q1mkbSHMEBvCtE6enBXCTNHS6M1mE3ydhmX6duQHubLoRpXz7RDvPotSKApqatnRKU8iJdqECKGtV2dizsSF7qi",
  "key5": "5XDpADBwH5BPW65XREyB4j7p19PDrdgAtdou6zAqAuU69c1UbLpbSLzHdVU3b4kNy2WF4JUh8UkEbVjZdfVwzVZH",
  "key6": "3r8mVL72cPQqG3fU7ox9dy9ZKShsEz84Bx6tm4tMLCANBPaPYmrrnr5epAb1acQkThB9hYtq9bFTWAxHn8ij5dtR",
  "key7": "5E9LW6RgFinAvihrw8nia9BSMxPM8KcjXLV4FugczqY4PcWzr1vSjAPpDuA9YLXXatqnyoMzZVMZefvgQeZAAtV1",
  "key8": "4Nf43By58cGRAkRZgiYW8Hka23zo64UdUkiEPJmgHXPAYcykZjP3tUEYcXHyChAmkULxtaL5eD82aWio8xbH8TVJ",
  "key9": "V8z395isjgTETrVsTt7AGkjJ6uvR9X2Agvceg7Dsc5xUREag7Co3w9WzHpMJtwENnQQZVUNjdmwPU1Gc7QufcwU",
  "key10": "4a3pQpLc9Krcny9oX3ieKm8zC3BFzZufWEdEJVmpy7K2yTujtHGgjV9yiEgsoyngZj4wwfTgQ6Ug5T916yyyh374",
  "key11": "2KERtZJ7joTNXE3vKBrznuSdoMLej5izYarWpdZ7V9uwjgyxDivp5ipDcAEfrGrP7vQRU6JKudahRGQf851BX3rA",
  "key12": "45qFUkesRQaZFYpQdc7N2pKSRZtip9CWVwf2jHx2NZNLgLapHo8H59JFDWW67MtGTmdizmQ62jV9iHw7YhudJnm1",
  "key13": "5e82VMEir625gFUCxQLrLiYR2LVQmNjpLvrF3aNDgXFebDVJEeHy1HiqSyvzXXNUaSm16Pga9HeGoHEhRrGGpFAB",
  "key14": "4NewYUXDT1GPrXyyG6ATrDAWHf3eG6bQ31F53bLp2ZExCgVvzo8fDAmPpygg47EGqRnsQsWNH7zY7oLKnXFA2RZt",
  "key15": "3G4C7UaFUuLZPqRVcPVvwjcV6pk32NLMJUHrdfVPmavZHmxaS3mfesspEWyAm6wUdyFsTTLxTz7LE4UPpgjgaPFr",
  "key16": "5Wo2aqnMEdKEKoGr3WoqeSwVtqvG4nMuNWzBRQR8YpXBG51WhQKEANkFtyPUF4cWhyVSueE4qtVyQENmgnuug4FF",
  "key17": "52Q18feDEVpU6MWZHaJvgycqrpBZ7hZP276BswVTek4yqrpvS9xMC38gHi6cLmJDvrzgWfkZ4gGciX9Hkp41uEvg",
  "key18": "2yrVWnSNNmRunKNygLSZJGbUgw5mvvcPGPAub7usSQ8xnzvPxvFHJm733mGzeEcgu9BTssJm9qjRN2NQnW4oUUqe",
  "key19": "2HT6zzpnxTfWojms7eeJmwncWuXpb2atLH9tTFNvHRbuZCg7gePDm2T5gUaPsV5Eq22EF8U9nCjxWRRfiR43PUr4",
  "key20": "5Bg3Zf6ZuJ5AvssUESk39Q6UtLSDQozcBe6CTibwwhKRXjK6b2bgrBRwTooNYZ4NVfhfs4RnwmnDnu1K1YhuEd13",
  "key21": "5o6QpUkKdCGEqnQxfTpBodvvsrotV4yX24DuD89VM4tfqpLeDVd6ZCurKT5sZmnqmHa3D3CJw4vbLG5YKUd6DBVj",
  "key22": "4Q9zPMciGjVsFamcUb4Ni78dknDZUSukAGGnRPY8ABdvkkJBPVeJpLD8MpLyYf89UwKscZzDMhQHryExZnMvL81Q",
  "key23": "3QRZ7RUVdjz1x8xHgMwu8EPJkjzbkApppnLgcFsDqbMJLypcV6LfhNjXCvNpRpQUjy5g59b4YZHWeE3vd1jXsKGu",
  "key24": "4RTDcyjH4pBfDhdgFvmzA9u1BpenraZVvb9btaareEc1BvMjnseWyWrKchM5KgYbUwXR3GcErfK8xWPVGBckPDc8",
  "key25": "59gdzQNxyLzW3oqBrdfkEKW6GnHYqm5TNqrYyeYQfjjNdW9s5w6RgN5SJtkEkphC2xjPeHh9woWWAbMtRspGiASV",
  "key26": "2949U8AF7EhsreytPDp4uSp3k4nvatNUKhGMSeoLz1F4MU2GYzKoZjVAwjMY64qtJ8FkAS9rVjQSTjnJXF2oFcVv",
  "key27": "HrqPTLks3NjDmW1o9BuCQ7J1J7qNDpUyUq7sBqhgtdE4a2BGsg8WGZ9X1Fktwgi2imetirhvaiHpACL9qgxccfG",
  "key28": "3cQEiZG6WckgmJzxrpDZdaP7wfqfberpDrDmeDitxmhgHnXLWzZRoDhTcqAtXc9EwBKECRVFsBuPzuwHCSGMm2jw",
  "key29": "2KpeDe7m4EFSqT3245Z4pv5StUr721dGux3RZpwz6UL9NyQjExx2G1mnGpPQSfcyYJ5ze5uSE1xiYkXSwhisVAiX",
  "key30": "3WdcmuQpurowPPmFesV6dkXKoFCyfPcEBbujtbAhMejyhuDBR1WrSs7TfPCJe4LNaMnSxt5YczV6tYnZoN1HKuG3",
  "key31": "5rGbu7mnkJvYGjeniKzshmyJWauUwY3Mknpi6qnZaLKgfZKrjBL1ZbSjmD5eT1oURcvYTNWtsnqTuHXxBU4gvszP",
  "key32": "5y2wbpyDTfujssHhqnmNn7fTQ5HKG4amXU2xQZYNHm1yCXkc3kLvVo4LMv7hBkTXVUzTM1SRf5VmYKxk9Y54f9W2"
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
