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
    "F1qhaNTFqLZFaBpYZZfost7X1NTffDhbWCXjuBJ5kVDKEv1oSnsDNJTaacauKCY3Vb8nLjmwnXhfrVTdBG76m8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3355ZdxaZMCDgXGe2SVLQqbzfWyFkm5BHGQNy3EW3BTwF6drq9bEU8VqmV5UsiSiWja4N4pLQHaqDr8yccu8XQMe",
  "key1": "k3WSAeLPuUBSW7Pd2Fv2gTUitq49SrGPw6iy2uLGLUiZkoBEv2VwTHTAfji8EBguxr1wvAWAVquvWrvRHNdVm4m",
  "key2": "CcPYm9yUGYu3kTg8ViPU2tbYrwjfQywB2HnNZ6sEUtrZWLn489YoTBxLoRLSG39TrThhgsWagpa7vGCiWWkZTVv",
  "key3": "YYzj73ahjaWVJ7zMYRWx9SHCpCaoCCvLJptS5roTnvshRjeoQjEYSzG6qipeMmjoGhX4D5J3bAmmbiGorcAMLv7",
  "key4": "4gMJRYSqSPBJoGjWDaDKpXwyj7p1z1N2vh3VXh5fzvTSzfioeEAqmpH6miKwedJjAS9vZSdCAnRVcmv44xY8awRn",
  "key5": "eV6GcSyQhyeiaXTwizs8C6FWt4t3LD7Y7yApGokztK51aSe3eNHUfM6tfsBiQzbpcwXV5HDZKdeDYLTm7KxuZcs",
  "key6": "25Rb6ydue8DDmhongte8oZq7HZBZ95PitSJMRp4NwqVXZPsNoY5urwEcbK7hH9TaVSaBtGPDZkfCsnaL8FWkRVg3",
  "key7": "2eW3FXXyjzo3tvG3NwWkc7HgpXXng6XGuPwQFaoYTJzd62UiEvD7wmbRXRLcqwXGfgJgVCaoiRna6dwr65wsFiKb",
  "key8": "41zZajHWPJhzS9n4w4XyRicNegjPq7xunP7CrGaxB8N6atx5e6zBRW6sPWwnpWNKCMdh1RTYwFN6n8UUuvLwbPpM",
  "key9": "35FRcxR72yjXGVNvcR8HWxr34xbfrPXqMmjtL8Gd7LG18ob19xJUw1sBSL5Yakfq2Jz3ooKUgZSuZmS76eCZpUNT",
  "key10": "66DexyCV6wMrG7qcYsttvU2Ayhqa64No4FHGGUMCry7PP3stZ94nobgUTQ7X3HAQ2S4Axw3hzTpVEApz8Q5EAyxC",
  "key11": "4kjq9ohqgNGcY4kuaXjVNkEWUSS5HAC6JjSyW8LMmiLbTEtoJmj3NFE2hvYEWqhupAwgdnAGxhg8C17nPwTqQC4B",
  "key12": "443ovM8xJbsmWxv1vHLVzJSCRGbLuQCf6AHQoADLZmR4UD9Q8b9XfR1rrNXpJCSFqo5Er23kXFW4L5adrV2maAiW",
  "key13": "2wz4FrhfiDS7E1wA3qnN9Rgs6pUZ2MaT7fKFsQmQnHDwgspia578DzDoWUAoRRpb4hfH6aA7cwG8yDL1AcqyL8FW",
  "key14": "57Fk7rA11WMvHfuoxEnAAnkMRbkfHyo7aN4Y6sfWzz4HkrKZmsBDFJfZEs6XBfj3UZ5u2Zfjkm7BFutZwcTYWjyL",
  "key15": "3swCT2yGgrBYK1odE8K94HH2YwL3Vur7MbQe4hRze8xvWByC7cG7HjfkiF3WL1cPrhhie1xQwEsx1Kt2N11XdtCz",
  "key16": "3NQP1R8awW4WvMKyFKiJJPz7qSPMTRpezt6RRTVXnZd2W4mnqV3tEBw3vchN4rjKcQF6GyVJz66hZcL4AHsuRtL6",
  "key17": "4SuZQhUTnkCmzoLcrWkxzkKr84WmoXdNtUFbqnnRGkFu4rzHbVwGLaYiL4q4CdSQ6ehkx7b5mtapqxcjAPq88YV",
  "key18": "4CyAu53Py1J2yT5HiqJzLKeYSr9WsAWJ9mXZ5dwah68PycxrFuxHodernmMi5eaojPwPWFkZ6eJdEQJbwyVvvXFy",
  "key19": "3D49m8d9mKCxmvUyVMhVNi8EmAxFRgJEZi6myAfQ7WHiQKgZdJGgoLj7XtPUrc8ujLms3rXdAmoWeFefkVvoYkbw",
  "key20": "32eZLZqBfnTXGMf7gpP9x6sBVUhk7Jz3v4x1fvZQPXzVsTyPew9x1mX2pp82GonEdEW27oUtWdjTYzyq8eQ36iiK",
  "key21": "53fAVF1K5VVv52iGFdaNM1q9qWt1YDtFRzM7WriLeUF6cCzSsQbLNddEvTToL8J47wRbUVSyU4zc7tgrJqK4tyru",
  "key22": "4UmZ7y6CdzZ22DfTWQoDK2quZz9iQBvTv8MPEi4jrkSoE2LvmQNEJfSTih2nip4hbDccTVq9Z9i2Qgaja9TvWqGm",
  "key23": "5E42SQUiTFfYfwaD3STJ2XWU7wtmmfCD2ZgQLW8W2q2xcj7FNiCrevrHCJPfe2PvtRpenaQqbH8uRwxn8j3KbzAz",
  "key24": "4UkNkXM1GEXrkZJTR9NaHCpzuSM716LChvJm5ovSQfhDCRmBfmqk5smk3a4uL5cL1XCgDVQWkiz44JYXjj4TvG5k",
  "key25": "xtS6Q88goPNVmjc9mrqkJDUns5tsAtyXfRFX1my7cWxZuUaAPtCkNtpuuwH39x9dUpBHYDn9XABv58JhjMFGJPB",
  "key26": "5BkVtnFQzD7GiBbaM3W289RTwVBoY3iS1S7nN3XkWrH18tkzuJHrFEdz91k3mR77fDk4t6dVHnYR7xp87RevLfxc",
  "key27": "5qZ35LprRsef6k3B8DEY1GUeXDHY3cqASKYDH9RmhmqT9KCSyDwqM6dv1G5U4zz7kmR6qEddCeecFzbuup34ygXs",
  "key28": "NmELehrQVDbzANsoWhVqtzWwFvgDfFqc6qZo7BiWgXTf9h5XZa6HG29ZMxfbKJpexZm36ZcxvNXtYt9yunG5JzW",
  "key29": "48rnUQaGewSHTKjGgaEwXHrBX2Cd8XdnNwi5MbDzfyYCBSvuGcXm3jmjJBnYsedDm7sNmaELk9DyK36xMXhWvi7W",
  "key30": "4v1x8Wj4rLS4cX67sP8QLQgP54499noGTJuqTkscY7g6r6knZPvGAQbr2d6rQneGNjZftJy2DpiNsKWLCGD9hdRH",
  "key31": "iviuqcQUpmhZu67otdEVh1PSmieGYJhaEjWhQ77sqCRueNrLjJC8EVN6tLbak9KznwxETg2dTWaARbpCtp3GqKG",
  "key32": "4BmZwW2y85TTBQT1knSTBfkCUSgeK1Pay8ALVdL6gjQvkAyVti6aqXYRLduo4pmzfoEwN5p6qmxRDXqUFTQvtjdq",
  "key33": "29Wu8LbZQPZZu7ZVmZQquuawdKZruBuMuW5etCXDe13SBBmvyFSdDCTksWDiZw3NWy64rSFvT7HBd1CkDhsw4i3P",
  "key34": "34jYP2r7FaZWosNvxBf2JSoEGeAcirznyLVxPmtsDqcXEDMkdpMZeSDff9BFApMsgvbkRhdFsByGwbRzNr7RYTe",
  "key35": "3nCa41GAxSaW7nTPBwE27EE8eheGwJFxJqrPjLQsCDs7JbcCU4JrjsHk5bHrtg5km3SJPdw17jcDssNdCBdRsMvw",
  "key36": "qnCGkXEVmyFHVpQUGAoEDwMhbKBtVfmYdeKeHDm11xn9w3y5GBzFdaj99tqK59ZPHWibi9ZzDsMu6hNVg7Exb7E",
  "key37": "5ndBkorXsr1qje6Fhrnnhk4P1Z61FXASsrd1uLLvuwA7Yn4q2xhEW3fviCn4iGbD6R4ZuCgSPzftxX5HvKRa53mV",
  "key38": "3BPPBxmjz5z7oNtFN8dRudAkiLe6E7vqgBTyknSoNgMDvkuKY3PJrravn88SUTgXXXu8GfYUop8H76BPPYUQg8wH",
  "key39": "2HBqfqaTwncXKJoBtSoC4VYZAquwSYC34U34LfCw1Cpb3a85pAG3WjSun85t6JzhpRkRUhtxWEY9QvKy5xWnnWVd"
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
