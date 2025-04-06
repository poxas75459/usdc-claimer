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
    "45GdJ8nTtGdXjCDARPzQxa3FqL1pgfFV8jsyiEMHAx5BRcD7CrZozJvK1fz8yCgtX1EpAwhfZE5fRbmY2ci8RKwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zyLfeXosk8Rmp732zHPeQ738vgmZiStTBFDuBBhrjQwp1uBT6kCLFQr7HR43qgEUauThatz3VxUerkJoRKhFXPZ",
  "key1": "57KsMQ3etQyMzYKn8w6NnP5Ud9EGYr9ajvMMcxbdAdr3kbnjhsEH3VC8YFqjMjCsJ4JwJSxLgTmqhtV97Np2cft8",
  "key2": "2nWL5Ym8DtakVtoJLdnZ8jPh4wQvZJEf5122cYLBvYH34i8aarNi4YXb9BRBbYqma2h74yvqRZL6z9qKL3TeArr3",
  "key3": "3RVBtn6AU6Juq1SMaF1jEJ3De1Bcexp87sCSaGLMMFBXzPnmkHQmjvomjoCVMPyoJxq9EWAWtFQxzgre9v9SQEHV",
  "key4": "3L7YzB21yGuqSjyUSwZgCx2hWcY9bgZWwg81hJrWnd7oovZf81yk7ch1QDvQJBJZRv8Aj5eYCmLoQB5CwETsPxoM",
  "key5": "5UR2VLb17pyL3UDkwCyFnDhDAwedX4UnrZfnTh5SRijueUGwiv112NVDSK3a2j1jRNB8opXxTZSGKMw1E6x97BBW",
  "key6": "41jG6Ys4inukN1YahQn2pepkXNZBjYLbypH5TaJLdVLkunSKS3DdCTz4eTdCump5ThNkLjsmF3wArB5FuanSfmpM",
  "key7": "44QREFFksy58i4Ans7wuWxPq9NwihiL2iFuyhUeBf3YWzoU168NQ5xGTtQCWDtao5zgEUtKeNCFm8cXAhVhitxuQ",
  "key8": "4EG3ffvzMzd56435u3YKnqLYesu4fuvSeQPcN7HmSCKBPvp9c1HCuznR5gPqNQ1ogf7MUB94fwj1bN8sM9TqSscJ",
  "key9": "62CzBT3Nd71ihUrLPdTcQJuUUheU3Jb8EDS7d8ZDERKkXL9TzrPp6eANhaVpgeqVZYbyedS1UMu2wkxpDYAFdNyi",
  "key10": "3Poa8sKkz2gLefzxTkcCbusSCFuNjc4QMmWKLuo7WguxZMiuFLbpreSpA1zV2qQdPw6UPZWceQWpoot1KmEvAyTb",
  "key11": "5s44bycvbxuZiowzPs1uyXD8DN4G5NzoF1P7BtPjUcRnaVUJGPat6vH7HVHXVNPHYN4cSrRiiE2fRfLHiqRkG1mg",
  "key12": "2pptEnXMxMaUu6ffXpBywc4QijMRfNSg4D4WeofqcRYt77Y4BX7aKJJ8pZvnFLGCNiQSBLtyYSj67n3zKvC8BsvX",
  "key13": "5SRXVeycAgfUit2Ub1wGfb7VnDqSyq6xohkEJihnfSGzruRLqPsmeAaZKarFRrqbq8MBWfjpwGfPLhM5wETYC8eL",
  "key14": "3Pxofg5FLPziBbrwNSy2HDjfHSRoAiZFm6xvt2ZNHwfayvCt3eKQQGxPHcDjgAALx9EdJrEhPBtNU1vvboB6vZUr",
  "key15": "5edZq5cFUJqH9Ss7p2wGufqkSudBrHbH3geEMb5qkPwokbjTG5XsDQKPZDVBivgpFwmHzfJfYHUdS5ogpzs9FUkd",
  "key16": "kbG4EsMg4xvrsP4jV2AfjeLsP7jvR3ecfpPv6jpUibUiNQYVobR7sn7v9TuLPw4A6PZFzxBztPzEsq6S7VPCoqB",
  "key17": "jCyFX9fQNUGwQ7MpoPz58dgi43tJ89mvunqNtuJeYHfcWCnn7E6hUEPrYxRJbVCM2sfZYsBfGuyAfYrsPV7Jw4S",
  "key18": "PyhNFSFZYFQy8K7aKf4sqkqqovkqpmumsYaDGb5Wh3DXnqUo6Qb32c7jprLd5u5F446K2oFCuNLeofQfQdHzmt8",
  "key19": "2tTETSKw9JhFgfx6ht68V6PsGPcR61ccbei34tTQ9Wp3qrG2NV7pR6tJX7bJEbetGhM6EvtKfda3GY3usVCaRBAU",
  "key20": "2nmxnyeso1VVTjSkwM4kmQYnizqooEaH1DnJBZeY4hhYBBGBb6hggKL73tDtknTrC4R8VHtQ6xmeuEW7K68zjWqH",
  "key21": "28w2i28SngQQ6od3gaQ9UBu4rbrTLDTuSxBKnDDvw6pRxTXaath8u18AyGs97Q1hC9kNA64pUjcTnribNt29HKMR",
  "key22": "U8LHWa4yMUs8EQuA822bZrVbZeZFGUQrwBUw9PhgjLK75kg8gdcUL5nVUPp5v1jB21vCxs7trV5NorB5RYaQojQ",
  "key23": "2tcxATb2ounoRpTTKReRBxeTU4p4ignHseTnPDS7y1fWgweoTNmgKqRRAiYLLL5KGfCmrbLmD3kSFb9SM8sQY8x6",
  "key24": "4MFNH8YRoBkQxmruhD3G1urV1r9T5e6MbxMkVKG2SQ4MVvKq7viE163rQjvXsH4GkpNcEDmRpwPFs4RfuK8QpGzs",
  "key25": "wBVzMY3XRJ8ZEJsZ6mt2AiHSSqWTdJczsXKR3ani3LxtHqKdjyCjSDDVJKVrSSKapV4B5QBxsfcFyqpLaZFeT1S",
  "key26": "4kBNbhzHSdcnekGTS2eqoAoT85yfDLums2Mdm5xkZse38pHDZjhsd5TgBkNXgt6DCQaXqekw4zeoQHr3wXoQ6Sr6",
  "key27": "4M7GPMUMX2kpvuGrymMuD9cRPqYuDovSXa7S5C8n1xUEMkdEA3Yoyb14tEtdGS4YTdvJRBCwoPh1oFMqQGsuHVte",
  "key28": "QKr5NmfiPwGkRM5sawMzkxyWpnp6XCvEvwN1kM3Txw58uqmLcpWkeYXsAKSxWJ1LrKUK8awm3vvnbPSod4cE7H3",
  "key29": "2kqP6ZUphWnCPtuvjh5UWMnvmnYwXijFRogebiCrqe5mYhZZExn6dKmGv6mnJY86ixqCoQfQJZAM5p1rZXgvpSey",
  "key30": "5sEBkhueCCxy64AoAVkvXkaKfVZLD6XdKbP7btrpCTEVtdw5AigRwdgZEUYcrT1eqKZqWaEhsQEEbG39ZRup1amE",
  "key31": "2aSgQnMESzUYfYtTxwpU8heimUoVriLjkXph9s2GuzFwq2jo7KcSarecH6SLCbc4ejSFiHvyTGfvWPhhhWW59wBC",
  "key32": "XETzHZTBd8fs3K35Lpm6kfttT5AjdXtkyqcDWiMm4whZT4HsSQn7XWj12QhXE4Wy4YpccAQwjn65TCZKcqNnXNP"
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
