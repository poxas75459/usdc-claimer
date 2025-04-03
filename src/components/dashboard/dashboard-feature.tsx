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
    "4j8fo7rrXkeaUVPJPkbKvWWzhjB9m1UnrCuFmp5JM422L7nfSH3SS7HmXXaHa3d4pELLMVsGwGwX1RSRDzEUKpox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34kQvUSG7TTqRs3XARpLmsu8qMRfiAHiqN3pyH8kShmoDf5XDxe7rx3vqqe74cZxy7wAUYBKQDoCpNp8hjWurXwb",
  "key1": "vhFXimNTFsm7TqP6iqK45BqbXE3KEuTg6N26rST4EUF6jabQv4ahi3TFknbr2XELMDga8Rj9hv6YAsrsGxsvzZJ",
  "key2": "JSM3Hj5EypQYm9XbHtbCNnJmnw3zrq6BQxSMFuqxdkYWd2xB18vkZfjWYmQLec1nnEdBTmqWoLFxSSnjnmQhaUm",
  "key3": "5SsZYnW8WGzxuwopcwcTj5iLyaNC8LSPfhaCKLULjgtCeFGY2d3YMsKLZ6gSUghhNJF4DnV57zjnAjM5amvv35KB",
  "key4": "4yLQdu5KSKZwTUCv64CcKfzPPJLYZdMG9Jb3YcDxyB8EXwdYDJYvt4NF1mU3kRfPaQ9E6BUCCWEbnzpkd4YKRdLp",
  "key5": "4MdsdeDhSTy393Nt6bJ7sKaTUbmhVJjxfUKbXyktiM9R7E5r1FJomxnWuoxUhSdC5qortCZ4LKk69NLmezXuwajQ",
  "key6": "5vUgaNF6BqXf8pPYn4EzkbNc2SCubrPDcEcNnz7wnnL73FGEYSueQ4XxQkFGYy7QrAQ1WwGK77mqqx4PPKLXuzDb",
  "key7": "6KeU6jMggwiu2UhNjs1Xo9pwxDnWXdUP4yzxPm9J4Bzb5XiYgGLCiTZFvcWPEGuhGvKQNTUZpCjLhgZub5F1e8e",
  "key8": "3c2p5DNXimEfrJQBrnf34bvHCDTPDYTsg34hkLXP85SSmvsRxSPy2a7XTRBzGpCUAG4xxZnwKxYGzVbfFSMsRFZs",
  "key9": "5imieoHayczZeDXt1XkEacCBCeVrkdiTkeghQ2RVEQorwK55nFoVPaoXiNnBYUdyHf9o1eAaHhSmeLCcnQqHuJvM",
  "key10": "5T8qL8ghREtCqtSWLVZ3N9jpF7ErYBotDa8FmGyK9GbMurEVuYPrb1Tv8XMSR3jJhPikV24SYAnHv5KMYeskuToY",
  "key11": "5Yi192S6ZAQF4zCHo7UpJa6ZaPPXKLM3yDU4H8nmL5Sjq8CJRHXYT5ZQDtiEgUu1zE98SjXkqEdzTJ42MjG7NagP",
  "key12": "3eUP3GNDHhCtBkjpLgmHthDNHuMEdbr9VrQ1Jyy56g4h6hjCv3ZiXRUX3gL1fW7TP6ZJg4r73GRhHcWj461eZ16p",
  "key13": "2uKL5s372nTAseaZfLoo8sXKLLZt7NtofyGuDWnP81K7AVEcmAZSLSk4yvnyv798p47CnwCLYvrxhdTRb5Ng6txY",
  "key14": "3TCEaUrU7DSKCBSe8cHBfxXSRLCCDi9T4KeMVqgjzVdK4uHbiqk7zSGcWW2u5UfxBsLNDKQKRH13M9JM4FyVugvg",
  "key15": "9v6tstFKgCJvafDjgvsccKfkzEScmzu52aLvPEikatXAhjFpR9YLngWKj9coDTmLwUD55CtwrFsEh44KoTGGAjV",
  "key16": "3d2PgmAwVCrjEC9E89Kpyc6DfYMdgQ5G1QKsk2mKrCtUT3uM4wfPJo2dWS3JdY1t54EmAorseLhm5vNJrFPQzsVC",
  "key17": "3N7UFYUEJKUwjrJaMCUXL819Kz3tAjtXXajugNr4UPsbjivc4Vhk7vXJ49M2qemnY814L2LpFBS1m1NovKL2kUKQ",
  "key18": "3LXX6MR4Cta145jdSEbS9ckFQCvASak1ZcS2twi3hvWFULbSuk6z54FTtbU6kfB4G8q9WhMDwe5w3qKNjxCAyTuy",
  "key19": "47y4gkfA849yzQ7BtRgDVUBSF2hUuDGZ3awjtnRpZTkrQJNNDUSjgbyKpnataodQU5xgHjgU6Eo5yyPoE5yUWViD",
  "key20": "5CHR3G94vSp1Evp6YJJzQoe9XQqfdv4zrKogrrsxBH58GirFtAFMkKoAk16tvfqUUgFwAnWedBokQygAadhiAwwA",
  "key21": "66wWm9FpNK8HopFQ9siwENyaKqjDjWgiwo6JmxKKDbrUEyZuyGUehadQAXNo4P7UE5YxxJti9uHrZivBKXJQjddC",
  "key22": "5CutXTzXfvjU73MHBYdDRAEE3tgmrKRdztmu25BYbuJYL5S6ywpit1o8pymcd1FW26fDtjQwRcU5xQDWVhJ8VFsV",
  "key23": "CJAThERoUkFdxqJvdxNDhKAabZkJH95UGLRr1vkSmR22eetnsVuqKNcKFgLxemsSoCxuEzsoX4et3LxP7M3XrZY",
  "key24": "chtDZ54Ekf4Y8V6y7GA4TFdCELJVwHadcqNahv97mcKLRR1UbpEQtpZ7SWFHMHKCNkPcqPePifmFXXm2sKAf7UF",
  "key25": "33SxZocay9j1RgUWM2H6FSfgGChFt5QPUf7sJTKRcYnKjff6HeEo64KspeiNeZBqEyk8ssg1FiGXTjSuBrN3ZSz6",
  "key26": "2CcppG9fAGmSgaNb5vVeZNjRaubV44A2m4ZZhRftYNWhmvc7wR5ZjRYwa4XcTbC3KndaNcM291EZ5i2KoLsgG3NQ",
  "key27": "4izCu4RrcKNdGkBNBKCrMwdmXXRMuvXpkhT4PZ2U5uQASoXJuehLsp2Mv9shrXgDSacEW88KkgwpVDmosuV16HZf",
  "key28": "4pZmkfq8MLXWW6iNsEJ5B6ZLhdEmaGwGnQaxQFxxfesRTQZAAzu9YjeQwkR8K8Km3H2sSRyxwXe1tZaecoxg5woh"
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
