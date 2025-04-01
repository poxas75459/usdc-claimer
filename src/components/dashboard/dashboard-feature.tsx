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
    "4MbMHS417PFK1AECQf9bSpNXsww5mpBLKKuD6bcvJi3urVPBvXUKkFnTnJeEEwBifLRGQP8KS4QS6ink4qT3NeVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZgvyb1MWRrWHY2qwVaC7TE5ttiHc4zcDRL1bs8pafu3UVQ6uQ7SL1n1ThgQmUac6cbvx74he4wUFjGNH62e2Bj",
  "key1": "3PGHJgc5sEcLwygKdd4SE7Df9GPLME8ykkhCbqvohWVKiSPimYMZ5jJ9adf5hdaXs58BfMdLoqcF1mM8HbF6m5W3",
  "key2": "4GwubdkUDz7tJd5xasNsMFXxSMGbkhXAmKcada24QhM6B1cmEzs739KtEcDDVFpG1yCudL4tFpxJdk1vCzaBKhp5",
  "key3": "5Nk48F1WfKvCWRN6KYNtoVNBW725XJjpEwaFhKejaP4ZFqcStySdWyeJ2A52gh98v2wzioZt64DEx8wQLKS5V8Zg",
  "key4": "8PnfsuxE8guBPMhu2dy2awt7L3srajnkHJ4Ekds7vFbA9RJjNCB4zNXfFejHpgYFjtsUcXNm9FUuQajTYd15LVH",
  "key5": "5Zoq5Eamr44M8vcTyW5kmy3jxkm5epZyEAdPEUkt7Mqw2RhfRbjSU8fZDz7dkjZRD3csFWFPcMHNHd47N3GbPKdr",
  "key6": "2seCfZTunkUKvhP6GqZXZ8v7vg3TxEnLirCwpFf6KzmJnWqdiSe3KttTVR5zAQWux1NMXZ9hmsfrtxyh3qRnPpnW",
  "key7": "4AH4wUmznuQR6tHvmBnuuz46ThhcQAYAyemWimYogF44dB11GqsvrXBVv2NQ2Ut9WXqswKHznrYWoCx4j9FGrSwh",
  "key8": "64qaiafRJRQgVbKCwUELxQzMqUezJKEZgDD6xxBxaBLxeE9odvUU8qTXbEBfE637w1k7iNZip8d8ysZUh5HyREQc",
  "key9": "5cSVJATMHx7cqUWJnzxAcd22ULFZ4Yyig11aJYST19HF49cwbrA3AcfHMPgJqi3mdArv5Q4VofTQ5auuMAP7kDP",
  "key10": "3W4U3q9xshaQiPUQjAiJHFiB3ekG2runyudSv1FSV5rxK6RhLxis5r6QcE7WwpoNr9nwPj1ZkJegsJ9pK7DFPy1d",
  "key11": "xKwQf2Np7DoCdFBNrB4VwYmsRi6hbXqZFbVhpEB8YNCNpvRGc3gwRXBEUioGxgdTJBKBMoo1CYdFp7gMkFFfcKn",
  "key12": "5Yw7a6gZRbZhdgau2znEipe4cuXvSipCxmgKxsS8Wsucy4EPDUvT7unLnK2CJuaUcYh4xFgF8EGz9o9Cvky8MQba",
  "key13": "3DxG5ufzzQmhAcMz7r8SHVCG1js2SMKjVSyqU95Rqqn7NkVL2rDWkuJ2t7BmXSy87t8fmJUoHJMW4HL2unX4RgZb",
  "key14": "3fE6AwTUxjyFXewpN4mNQ8uKoBFeApwTCP9N4owZprpvthZo2b3rxqqe634we7PFgRL9UjjJPvw8vv7kKKjmXmY5",
  "key15": "2BEUxDPZdreBVyEcJLv8kFGBZDKBPhRGVw7oWjZHXpnynEddmGqF4qUXoS6pBKSi5ccZJuV8mXEpwZtErTXVFw7d",
  "key16": "5Sdm4g9MM1XAp6fZQ9qEzwuU2iwEAjegjNqY9Yd81RcgCW6vsYnA2SrRLkgs4sNUVMQgHnjtjWYaRWCaZdeG4fUh",
  "key17": "4VZCHvvzTLUnw9oUZGMZjvmLQAdjqK53wN3PsHQrQ7iWDJYdFctArreQcT9EDSE5KVgNA8X9LWZLQ6YfDssiGwof",
  "key18": "36sdMiVBou99qVXMFttE6sDY7eVzQtmoNxyu2GJCQbNWqKSuURFF3Voi6ii4iRGJBHuwUbHZXYRRUo97fD2zVVY2",
  "key19": "sVgVB4YTTnqzQJyieEb63hSdY2Lmb6WMfqEUmG9BwwpddchsTJ7FMz4jvbeMUZBpmEVpidVZazZ74U4YeATwNfs",
  "key20": "4DgXK1WgnrFCx6mAmRa9XogMy6wYqV2YmUosdFeMosdG8s83rKihoDVqRfCxGW9jRCimr1fyybgcTmNAU8n2Np8N",
  "key21": "tqTfcNfPkmqqWDK7m3XqatjEEvkNcsodNwH7haJEVBXNsi1prMLwotk41rNdCAgmgFEy4pPp9FxvMyU3ynuZjy6",
  "key22": "7RsKoxQmpgmXym6n31MCFwv4iqVhGd4WEUcZCx6gMKxsfyeS8UdXPKGKPQzArnz37vVAiLQmKab4tLt9EfC3teb",
  "key23": "dYhFgnErG6ipsKzPfkbUuCyKik5ppgkprpyLebU3N5ffUaE3UTSBmQvoJfCAd2RKquiAncPRJ5SsjqN959i5C3q",
  "key24": "4YLKtC6g4HfH8SYECBPGQY3kqe2yFhZE1sgQxytyaDN25hzTR9Jsm8cYCpHRTxMSgPa1GzPPGD9Urcqt7gpzyzQq",
  "key25": "2h1bWEW3b8FzJfnfMkHTJ5pbjf8XzV5NpNkjgLUTwLxaY9wu5QGXNKfd6CfiTksFdc9BzpG74LRXjpks3P9NA23K",
  "key26": "GGAsKNriYsdUmBkSPN2CbLuRGAydTbERmakHjhWdGUXcu2D3Cvqdy6oyiBef3iXoWqoWpLcbVEYrSMJygogJB8u",
  "key27": "3uDjtnXV5UqFdYkgd1FXzbn6V3GgCMgvaatdKiL4BWi6u3ZLXzVm1xHCEsog5mBq69USsMX3o9ADr1D3fxTeUxWL",
  "key28": "5sr5kJUwR1975CTJQftPctzxZLsLSP3KMv2zG9AQx1zuJtuxWnSYnooLcNMh8s74MJ7w7244LARYaB95CWxcEDVT",
  "key29": "4FcEpLLCT8cHhs9FM6ZUYVzysrgDDPgah8k3rY7Aa254VZMfvaLRQeMadzkPSH2qhXvRUG4qxobWHwuLJPyZXYvY",
  "key30": "5bx6Pp5S8u3cHs4RsmSai8DohmGFdTd1saWofwm3S3KkVnKuYNR34TDoFciH9gXBrqkTVeopE8nEUnnfx3wKsM6L",
  "key31": "fUQtbntGWTQmWvxzaVyh7bzc1ykcbKtV1SaoBMCw2WGPSca3Gz8WiKekDBFcSXkq1wE9jUzfU2tPZX6z2uAzzYA",
  "key32": "5acLLgDzHh3uTmujVYXPShAtyAqJdRAQb51vQquPHa6KdygxXN3MdXm2mPHH8SACBzJr6CXD5nsB29gRb5yMpKda",
  "key33": "3R3ZndcJAvHfN2Ly6Sz19wEy8N7WARfikub3Myye7sx8mhkCcVVR7aWBxEerJYQo4SN5iFQxQ6De5bCc3njVY99t",
  "key34": "4dm1JX92cbAHSyyEkLsKeMVdiearhQChZRZruGcYULnDsQVG5oDoizTSJcqjAn7EhXW1Ck6CXZbiYguisvHV1XoU",
  "key35": "3nhY1eCJPBWeKnuoQ6YfxnUbTEZYKNXzeJebQUWHQpeA27W8N35KHzqq8J3hpVRQT1B74kft3bBmZEPkJwJDcyPg",
  "key36": "nEBj5o61RkEfoBo65gkakmhUjRZ4kAC5JdbVXYxA4EaCuwXdzA2AQJovozoAjYu9kwcaiEA1zHG1wRZTMJEzuzP",
  "key37": "3mNMFzEg9YKhJqepcfXEsuwyFjpoKsSvnmsmyUKMKxqFMRDio4jeK97PKkRTRheVzL6j93aS1GpbGuFyGYfMmis9",
  "key38": "4Z68pbr3Cxcia6XeKpeVGYoGnsiYsXK49btB8WLLGax135HJ2t4EtffoYVcRXJ8HJgEawte9TSQhUAsoaTX7FXxf"
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
