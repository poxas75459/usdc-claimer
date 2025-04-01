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
    "29A6bhzkZapG5nY5t8wLZBHWX2CDJZL4HqfqjTQnqPoGyR8mT9U5U835KigFBrZ1P34UpqniXZomJgz5Eym1zzbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pPyBZNdNzXPeBuzhjENXDx5kPtGCw3rRb1vQwX34kfxSn8Zrsdtkaka64pss7gcDPSoqFTxKhFfFy7LXQwwPkJQ",
  "key1": "4nQ3CCYyNjxwR4isNTb26wwYA8f7WBce45xdAUXE4EeBfathh5Hq5GCefnMUxAL1H8PUrdLCHypBiZxxPok6upU6",
  "key2": "3ubCs2tKJPULrDrZygLNfYJ6wGQgiXFpXaoXFqznLkuw4i4jpwNtWufmtu6WcT6v7Sqmj9fGSBRJmcrNgVACKpfS",
  "key3": "5GvhLFDCMvGbV8vs3GLzjMypBGw3BhUWQKKYmvBcubq1sMM1f8M1seupw2QFWSG2MMduV98ztvn7S7KNwDaZjHMQ",
  "key4": "3wsXiTqrzRcWHzTghXZYs2r1qzD6ye8D48wmU32J4FHQrgBJ5rZCZSkVCFcL5WMQS8JATquqQtzqgqMvCxuKSktJ",
  "key5": "66VbAfewxLprYye6jGY6Z9YCrtya6prVbDH8ZycKD7rehePMErbLwkMDBspFnbLfkoBScB3bgiCF6CwfdnTTPiGG",
  "key6": "2jCMeroQBcypR5Q49Kj59hasF61ab5oXirskCLYiB7uxRtrEYJS1dGYiFqcU75F9vVVxue4rGYd7JMCsiTDzBAfg",
  "key7": "3Bd7xN3xBLmBYZbFohxE3feh74CC9i9pnSevSL4Pr7Yuh7zw9ekM3QvC949i3VQwfi9VhWL2R1sjKzs74Dn3pCnB",
  "key8": "46ZwxaSLJNevu4cTzWTG893Cv1tBya7cGrrJqAh8Tw5WHhswjbj2LpGBXbf9TaUNuuXte9fBd1D8KH8tnnYdbqRm",
  "key9": "2PBVmfveXpadKpZruAP1yVAwh52nEzjcQncCyfAQ2jd4V96QBnzX6oBXCdtRzQCV8UGsN2MPW6uXXdPXdvi37Bkf",
  "key10": "5uJjTYPTq8pw4RMWJv7R8NiGjKgw36iLfY8GDmPTqD5tytv4NX7gjJqAfYij6rGfwVhEYwzoDPJKTFWdHNr3VwLc",
  "key11": "4re1vLybuyzs33jXyYtZJ7QAWKJ72tT8zhppKYHh5FvJayzXM9e5BU9B34MvebsbkfAvTYF7t6C34xKoimyY4qNV",
  "key12": "sab2U3HdqUfJLK66z8taSiS2YGJvbx93tC8hYZnacqd68KarMbjRYbvf6XMaQWjJ2j75Zm4futymHjdV8gNEQG5",
  "key13": "57Ppfbp9DLLf5NtKmCPtMghEKuD3CJwbgthTgB5XdC1idzRe6pZmZvDjTuyRzzaTrgkCKd1g83p99fAZvDuhpV6f",
  "key14": "642KBjww1sxGG7T23Gi1hW9F3YD13ztWj6vJH5zBndrrsCDSRkuhEmVRT2pttVMfRTjqB3w9EKJMEM98afgVaPLC",
  "key15": "4a18bFPzWBx8kqJBR1tMoL2rUzTzx5fQHaKvjR8G9AoYgmjLfYrSqM7qe8zSRKvL7aFyVgtL6BBvukvV5jB4E5qJ",
  "key16": "5eJtkKWfanLBtsESJQymnunWSpxVkjC227PKn3W5SqtXGfgP6W4zBawLD3njwsRb7UhDgHTzomssuUsi7fG88p1E",
  "key17": "3kJmBUEe5yjtdTktKnwyVcR6nMy2teyLkkM4cHTXRG2DVfH3VrRFqfJpcaceXYWieLszzZkqMfVEQVDHC2DeNcgf",
  "key18": "3DN3W4WSSdfFhUXoJSPH9HJ53eakBPGmeB5bsMBuoUuYe4wLrxEXS7R3zr9EUCq1BhsDeb5odV7wJnrfBEzsgFV4",
  "key19": "57uFr9EVdEMbJNR59UnTfQKMui391fuSd9Zt55SBCHeGRdiaXNHzecXFK3mE1HdZKp8ngSGnhJiU2Y48jx4oDcc1",
  "key20": "2xeB7wsHbKCiinjj4hSEqcdEKEerTuizr3HqToW8WYu9w36bDjiTswF7ZiBdHXom7F57gdFXsuhiGE4zZWM5eJ9w",
  "key21": "HVSNK7R39uVuC7reK4qU7ZfvAmMHXg8F7ot6PmffQXmqXkC75PvADLFmojbJzA2aBPSKxbUTPArkih18uudZgmK",
  "key22": "VYB1LndsAhs6WK6Wfi6rnKvcdiV1jXXmU14xnoVzViCS1u4GZ3QpB7jSNSgKQcvWyc2ghHQQ91zjVzP6p8NVkaA",
  "key23": "WaVMt8W22m1Zy7LjR4sgrHMixrqrK1Z7HXB4NVxrYURHeC1mxoYbaWDFvFxvSkwT73uodRx4hrFkQaP1xWLWYPL",
  "key24": "28ZCHXXXNRfDDWziD4XPRwWMcsyYpnc8Bqd4HmHkANvNN84ctgEwMo1JSbC6QxezCWC1W5f91ca1pm56HJxMfqSp",
  "key25": "23cna1x6frmzZdbCzobS4sCQzJiGNDZJ3c8bnaXmKBB82apQzV7Wm8DC1epK9rUJm7giEqU6rsYUXZQiTVoLbqiX",
  "key26": "ya2985tiv4jhcX4f6QNnqRAtJgSg6bnQ2LxWdhBaaCbre7binCEburry9ApzvT4NhN3FXbFgEoSYuLwih8nZC7b"
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
