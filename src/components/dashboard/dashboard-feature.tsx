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
    "2M83ZrSFKmeqkWKW1kSxrw9ZF8YC8NNMiQppvriyYc16bnFDztvxC5FYj4dLnyW2X4qk7YBJSkgbSn32S6qKWYCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45bzfRtZXa898kBr67LbxzQoFcYyjSCvAGTRTtzQ8xwRVhEvd1Du7ArALLm2UMzPwyJGuEGTWGM3BxkeA5sQoVJB",
  "key1": "4FAm8MzZ5arGBLkps9FnQaWzjLefjYSTPojmrk7WFUkRKSxDYgEzBkYK8VacKQCQxujCFiUGK9K3jm3vdQrhfWBn",
  "key2": "26nmF24KPhMSVZSBcNmyMtwG53xp4hWRGhuhcRDdHm59DDac6Q4jZk6EXy3cVya6geKrLsUM42FTdSkP6Ca9Bd9j",
  "key3": "2YzHTRiFFF7eQjBZACAY4X72b6HNzcXpARZitoywqxBmL1j1zMhtetMZ6apo82NNfzMvr1YpqydoNqJQZjvoxPBi",
  "key4": "3j97WAPMobVHooYGwq8CfJjSPnvh3hwzH3EzJe5jeMUyKqyiKJpQBKEQZxdNGupmP1N2PM3Kj7o4KBaGvaa2wBMd",
  "key5": "2jo1NSDPb8xvXiU6YphRZF9xh7h6KqYnVpidVuzfHPJ9XNMKwqr7iAEHUpRCJAxSqtTXk6Kz5mEJrQRDaHrCSDTj",
  "key6": "3JD3xFzLe7K2G4ed3z1h4VHVTiyrRu13gFCVUJc7zAG7KdB5oDvxgyUkRpNBBgLyBZoFJvz79phbkTgYJENJMbDD",
  "key7": "252N6iNjmASBtTNphkxYuaT2pHZ2cx2vyWfaUoqQ1QvmdLvqdKfKc1DAdpruATiEmtBqpjtbeUxBzUk2khb6s5RG",
  "key8": "3naMTucreg29WgfQ7bt5R8KNUWx5z2NwTNoDupysZKs248MBaKuiRSii8bS2UFYKeLX9YUAw2bVBoT3wM89H4GNn",
  "key9": "4snvAoim7j7eZR3QNV3Mqp46dyctsq7pryLfk7xT66KCou96qFQSshgtsVKrUFE5juA6fVwtyQgPXzEMifwScwF",
  "key10": "49mkuBqyZZ259r63DVKR6PvFbYuW35jruhJYHKUHuGMYmNgdM8xms4paYaxihYwpJfFNGz7uWask3BjFJdVvNT2r",
  "key11": "3JKP4YYBBDhj4nmUxkUjSdQNbVqvygsWhtJejv88FJRnTzrsH5wUk1kwaWanWVgzhEsmKHaU4WiBps8q6Go27eE",
  "key12": "5Y8kpTP9sV6mNCuYm8AgUZaVQxwbaimGvf5g6GTJafzVKEd1sGfVFPBjqLCiicjqfj6PeB9rExJF3fASo3QuXAsE",
  "key13": "64YfJECeapHDq1MbM5CHBg5qp3398zWH3Uw51JLWQ6mJkekVnCKwfmThgJnNVDmnP19w8Bvcf4nAyqbjRYL9oLD6",
  "key14": "5BE7af8oaHZjBqv9XdF1XT4dgBsoqof9vXy7qiezuCLfSgYpJNjnoX6nsUWQ4F29RKs7G3vTqhmQ6LG1N9RuHUDu",
  "key15": "4EjyzimDWy5WRH964r8wLBPyxs94k8rMSiCZBUN1gHkisCUjamtJQv4mAUN8VvXF2AYx4zjwWCX8to28jm6ktb3J",
  "key16": "bUTVKnLpHHRNEtBDGRSR9bdWUMguiaBccWf4PHKocJM9qiFKbfVSTyge4MiNERdF7eve2bQ9d75HcHfqZAA8B2F",
  "key17": "3uXcvjQzCynGHvCALpBytmMBW43ZGG3ro52YmGFPTiFDgueUj8rdcgaKdhgutSajoTTVmHtF9c4cwX4vEhX5xtcx",
  "key18": "4hQbySEMaELVrxGzaBNJ28M1g2nogmmQk5WngBVB78x9282siHkCpstbXAT61eShAkjhF6qfr5S9GAWmGDuQodF8",
  "key19": "8kPjBHwokRKSXjX12RDmabAhp4iwc3FuFktRyvivWt4ydN6g1aYVhfbLyv5swmdWK3KNhKMPytdaw2LWcqjWEhA",
  "key20": "5wLw6q6Fxzt4LyH5dhmYJuFGVULryUexEQD11VxNqUW3cKXxYyXs98JagULS8XnA1dThbc1f2ir1XVr9a398Mb3q",
  "key21": "66x97nF8xt6Ff1xGAF2A1muDjWsP4dfr4siubSbfmyNz71okuZgNhwFqz6zv8oPFxkK6BbdJakT9m5XJCmNTer8j",
  "key22": "4UjGJSY8LEuxTu2yRP7KyHT5N8cyPauSzfsFPmYRLGN7fMSorytpHqXnQw62hwa3iH3F7HhYQaLuux5rdHamNQKW",
  "key23": "5YcRoBxuf27m6BNqSpXzfQuvLnH8GUwVkaP1wbEC74yKCfaL4aCFrgCg1ntP1o53HMJ3hAjYyano8QhrM1JWNzho",
  "key24": "eJeCWCNzoxsoyAyiHy5n7FhBBob4rjsxfsCvbp35dT1ZasMofWV82EV9mLF6WxJoySnExrKhP8W6155KWiUBpV5",
  "key25": "4oHyb5yCqYn3YyiYP2FNBezm7wKGD4gw1DynwXwesXcqu1iuU8vTX1cBKpZWccndFtVmRwiJyg4SviiKRZc8TwLE",
  "key26": "DCWpn12zKj7vJb59JPqvrjNp7ZKk2uaYVSA6Hwzf1bSQvTo4Gi6yRb5oHnBJhFCYreZ1uYYZqkv62Mppm9yzdDa",
  "key27": "4PvxGU6Hhc4LJQu7VanoANtC1bboHFFSkLvgLTqExmxtAgLCrCJsGHJNnf1S2r16LA8QDs39xQSkiuTLjF8DPh1R",
  "key28": "5tNeQWF4J2gUNxNoDgEo7nGsGJcYG8uNUj8J9PS4R8PdQxuKYhSczJae2qhZkB9q9xCUaznARnQRndV3npy4YCbA"
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
