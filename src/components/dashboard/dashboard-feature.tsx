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
    "47i5tuZW7oSBYHZXzimbujj8CaXpRFi7dZ93V5HW3N3bGuJMyboAoKieXzKzCxAUvqPxDYLnGeL6DEjkUVugprhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42TjY14ywsaZUwSfot6UcqxKSytBzDWMqJDde1prJcu4kgWkhkxJC4pmHEEjLhooQTXVCQWnoqQdD4F2KQTsu2vf",
  "key1": "2rvV2jEdzvijUwrPicK5GhCSqpGmhzR2yJWmdnuDSWyMYAwUAgCH5UQGWXJ5yR7Efx86J65STaCoLnCH71FxhLuR",
  "key2": "38mVUUGfydoWWjYyjfDA6vX2wYfEGfRpiDzYxdYYYDfxADLwo2zMrJHgw2iMpzoQcndr6K5ZxdHQJE1PseJC3v5u",
  "key3": "5PxfSeMx8766HrhNYA5sgjcE1J71B8bHgQedfBFy1dRHSNMqrbb4qXYvMuYGxNC3iVnjLPxWqFsp5hJadTwpCa3t",
  "key4": "2tM7SpBjKFfst4wL5ms9qZtYNnRmbDTy9qLWQ2nEoDhnBeHPtJJss3CLhmdNEKvZXjEvPnCNEhhs9BvYTZ6sST1L",
  "key5": "3qMHLU11ZdNWd6cg4yKYosHPSDgmzihAS2pjeub5sxYQ9Xp3efPcG2KkyjmT6kTJiaxvHYWs811ahUmNKa8zNqNS",
  "key6": "37j4z9vyNpkMoqMczKXVmHTYSVC3B9opDt8XLtS33mvE1jyaB5oxPuNj4Qrk3tou1NAyNpadkLYpnEFsfAEGjpJn",
  "key7": "5n4mdEjwNc6vBQPPCRXfTJKbEKbwugrRRhynYroVBksA6YvrEbc8eFMQundPB2vB1cpSc9gZSPByGbkPVFc2MnJj",
  "key8": "xPQBf7vAeDJfxRctV4mN9Xz172wL8rna6gsicu9ckF2c8JvZ9VzDtLPrFUK1H1eLR9TERpJ3uAiKEzBJU4iZCA7",
  "key9": "52CRn5H6nswJf3SXAytUj93cWYWj1CTJ6J21Yee3bCWFU46gnKryYx3gJqozY9RWieVAfFBWPLMqFwTkvnDN8mso",
  "key10": "5gALLHnsD8U1DxTnQBc17ctc41Yi2Mrxx8V32rep4mNW3MuN7twXLKAr6tNS5ub86KH9Fvc73EGTe1CGEs3tugtA",
  "key11": "3q7ASxeho3gXjpW2kHHDqLpvc2yqQAcVN4T77JNJWwWxvM7wktQu2MDkgRfM6M3yXMvM6BuPxAHatwSCaGd5ru2R",
  "key12": "3q4oURE8YdZoSyvmnLYtmJU33avDj7hE14UP5mj4kuwKnhH2ApGk71QrkPs1XvKwh6siddWMvoog1HvBkewK8kEp",
  "key13": "4Nk4PU6BaAmYVQts1ZqGCaBEHVW7okBXGs7m6MnQtJ1SZc6wQHhU195Tmvn8dC8sUv2wQGxAHHVn7i3Fk8dykY8P",
  "key14": "5JE2CQgm76CaYfFZshz2guGsz8UZWu7BnrMS5zhHTsuXpCYcNPo9hyhL2e57d8G3yaBWuhTGbkUmPLaL1R2NN818",
  "key15": "4pA9Weuoz3vb5eJb17jFfkM9C89Vw6X2UFfr8ho3WsNfiseXs23LGLeWmRnRVpsLZjAn12bXhjxz6wtT8QLpKYvd",
  "key16": "5a7LxKRZzXXeCbBMUj5wmDaPp91VDPcumQMoZZW8ijEqLwUzLLUz8owRnmkCgB2D3JLJ8cimpefDbnpdc68TcLpV",
  "key17": "56ZV3KgwM7cygm2Ye2J8hxXTYt8uMpCrqXmm2hbR3nSscH3Yp19w6unLEJjFESREETi1QzQReY42aXcdn1NRynSV",
  "key18": "4EawRDkhBTKGcqV72YZBEyNhWPjLSkqPYvWgjYuzNdovDJT4eJJufhuWBYHAkHxCPyeRATjomiGrZkFfSdbWZeex",
  "key19": "3ozrcmJDsQP1afRq7SGPknurKY6vAhmpSTP75wtYZ9CqmuBZSLD7WrmgA34uupBtYJSGKLDfe9KgEatmYHMAXAUD",
  "key20": "2Lvhkn6VQZvavbefJJwz3torf8UeiA2Z7WHFhCffEXvqBrYQQvCCTwMPRNycQ4KmmCbLJjfr2e5MuTKaB4S7Gpi7",
  "key21": "66qDsL2vpAH6rr2QSj1R9ESkERFcqd4Js5HdkV8njeJqGFapRhoeVPNE5aTW7NRes4kzXTCpLjozf4326G4TfXt1",
  "key22": "47Tb8U7WY9fBVaFkDkhpSe1KKfc6MDFwrioRb8R4DMMPkWaYL96XKU4zcG2eZ8M1r6m3rfb9vqYReMa9N2Bv4xTt",
  "key23": "2APNccEX6q2Tnpos6uuTq6HtExkdbQVTRiuqf8nkYdKzLMi4Gp99g2XqgQa6USHYf1VfhtPkbzy1MQH3d74Xcrhg",
  "key24": "5JHpNCSXWm2LRXNZJKQdSz4zZWdAL1DNZdtW5j2CbZKoVr77nkMxq6E8JcZXJVPLfiXf1qGiUP4sq9hkd5W6skuy",
  "key25": "3qpzMWs6RgKfpDK3knUBiSWZx13aycc4e3HvREBtTSRnyYsDx6jsN5V43w9hyf8dmGcpRVTZs8CC3Fc9MgDsm6kk",
  "key26": "48xSiJvjMycL5WJzLpHPktLpfXQ5XuQX5ZiYFffQBNFJ2RyYFvUnhR32H6NEeh7DtPE3VhgDtoVt1Hb6xE5L5cL7",
  "key27": "65ofhtYE1YBUQkhvPywfR5hGBN9o4P3pEQmFuuYTJkKEKhNKYyvfiWozvrYkXHk5txaHkWwEpNdBXqfvaUqdwPuk",
  "key28": "5gNy7RYHotnw3mqfxwq46m6VCoTASSkVt3QHTxCjJcX9fMm16XZ23uA2RN8MSMdUmJeG2fNULadkjZ8asTf2WFCQ",
  "key29": "61bQNxUzEfXSx7fUAWjxuFg5MeuZCU7LhgPSot4s2hq9fjsXnT5bCDdRY4fRdHyVtG25hTQ6EdrmoSHoiJEJ6HBW",
  "key30": "3zpdCkJNFpGDPxFcpF8eWczRpZQqaWS8t2SpKdN5QmfZTw6tqfgrjfR2ML3kRCHzQEFiuPYUMxkVr4Eknrm66LqE",
  "key31": "4LPYu3QMKGXfJFcA2cqShYbDQQHq6y7EhvG7EXLdEMHgkZZVYjxJ4KPxtmp9gLxM9vaVJwfhca6zrMVEiYJnmRF7",
  "key32": "2NP9F8t4X1k8AVpTFCfbPbV7FpZR86oPFfMBWr24zR2brmtU1yF4WhTyTqHJU4TQDuUTwPCBugWjM6My6nqe4mQ7"
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
