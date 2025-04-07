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
    "3wKH7LMS7G21mzxT25211LyieNsV2LTcNHF1j2W333bdfXpvJCDXfJej1NWPaGNeacoznLKx94cSK5PxsCQh9EnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVPEhoSPsMmwQYNZDhCMrpRgm6TFFgNuGj6b5ZjEQNivDGyJ2RxBELLuMwhW9rbetLZtTixEwQjNapt6VTxJk3i",
  "key1": "4wyDi8CDb9G43V7XLZLhR37BuU9zyg9EF7zicwGJTU2Mqb92WwB3XK6Ji9WNS8hBmKorY89AkeVsEsymJxH6zeUb",
  "key2": "5W2JSya29hENFipYcLFQwKiYhgWnjRNjfk7xDVcVo5j6N8yFaFnu6WzfTJoqGs3VhwkoPQ9k2JvzhY6WLqsuZanQ",
  "key3": "tKxoVhxXAWvoFAiwGg9q1mFYtjpnmXrL5cTnvT3V6qesjFJBNoDjpHC5rMR2vDyjDX15javCCzsmYaaAhaaQXP1",
  "key4": "3vvj8cFpTBcwTDDvgVSxvwDQeM8coSNWpMTsNGqRqK4RneXUTtDhRrTjou4aDCCAgipFbG9brjnTjH4cJLYaUv9A",
  "key5": "4vinsnFz2RRahgsk3FMig63wHDKutvMGz2wBkWQPrCrjTGvExcPwbNnzEFJ95rAoWo4Ka5ReU5otJyxR9jBQxdgg",
  "key6": "52EcKBVsZM4wNuzzj6pPeVTgBHunFvEMMbpwKwZUieKh8QbwRRbiUyJDTkZ4K6KjEsBBKRyquxbjMLoVF2KuUzis",
  "key7": "3QXYGGXK4ULRpXNse81ZQxk22dS4LrxwLL6ZGibfiEh76eaS29jTU6fn6Dw9Wy95mwTUzRb5q3dRCV75jek11h4i",
  "key8": "srNGozBXxpwBtgYteYfFeVrAA7Moj6DYKDWfhKJuWtoVtsQAvxmKmuV5TQvCQgLTT6N3UnPB4K4m8P9MXAAzJFX",
  "key9": "4PVsGxhYGK2VX4NP9EURrTBg3PKshp1WvkWofmGCRCKyAehTSDBSutPB3ast64LrBLPwyQ8p9nr56MJdJZjkZrqy",
  "key10": "4hDnZ55TxMSozzfZYeBzYsG9ERokpRoCxoGDQuuH8A2CWRBEDmmyHfF3bZHyBF3nN4yVZrT8sv3ZtvT4TNEsuESb",
  "key11": "4vB6wyYEWXtq2NAcUmiHUu53jAmiuWdb5HXxBrte5bgbDaaQtqQB2QkMpXxzrppmUztThYebbKP3iheSSSvjLuzq",
  "key12": "ESGp5vx18cq8pqqaxvfLBDuqcKavNWxXrn5Y8ZJMNaENYpwbRH1cW6Hih8ziy78NFw3To8ZeimaTZP9o69SBhGP",
  "key13": "2J5TuoC8MRZ8HGX4LCAuTqrkE6j1NaLzvRkxwr4vhHiVVsyUMWwPGYJfURnYSyAArT3videWPxi8dosBXEqB8R11",
  "key14": "2miZWfZzi8phSBfDeBoHQPZGCeZPW28kR8f7C56FbUW1rkGRoQ15swmFjTcta3hgHhyMLUzUC7TrteBb4fYpbGGP",
  "key15": "2VZguxLJNwN7Wk1ebQPe1X4LraqbAa31Um6t6tyrokjKMS2Catkpa4fjCgehcByhaPcT6WVWUhPPn4mwG6zq6PNZ",
  "key16": "8fXgyQhoQnq55my8qFFWfdYPspTwGebSjQfXs6QZi7LVP4DLy5Z3KbVxSrwRnp5Lg3z1RaJE9UoNqaP5qbKoaoy",
  "key17": "2CtSuo1L45JRy3PPehGX9SMA3YpvFQepBCF2PEchUshtnmdhYbBBNrQFSaTgmwJgSQ9EYAhvC4riL4wLQZo4a9VH",
  "key18": "5qJxYYgF6wELL6bvVondUsuv1HUp69x9XNHVSYRiLYwsQpNZrF7TqB3fkYKBCddaHmxzd9M9QMuB2uVrffiGwG9w",
  "key19": "5XJdTHtpD6gaDtHgZ8E7N9Z5dHNG9GYUDiFoR3AGu9LoSQSenNUFpNZnVC31EdkiXrtE8dn6sCWQAjPCkDp4GsaD",
  "key20": "TybKVyqQjUZvxgoAu7XeR2gaPBPhg3zL3YRYhowpFkeQsEzNXhDz2DkbbEkbeG7fSegMs3BaB2XhQwaaiuMZa9r",
  "key21": "63Q2cTs5XFvtnLEhF867bZ64GAr2bXw9pmCscQMfzduk5aWSAehgnTWSSCPgfj1x4oCDhEHHkuQqLEyyxfaXLJEP",
  "key22": "W1hNaTeKYBShWncGLhjyG3n34qzBXaGUyu6v7AVHP4crobCA6XNdWamfCvbNZ5Q4AcMAf3NNAVbuBccGMJKFMv4",
  "key23": "4G28kzDEhXTyNgJzRBDiSVWW5QP3Z6Cetsb3AuYgqyPFzQNmbS7Zi5KLPxGv5NLcBVHDDVVuBcpqf5YRbswYVK17",
  "key24": "4Rki8KkVZvuXJ5zbUxeiroaaHdaHJoMJQSgMWCPV9fUEMcK7QkqiBbD5Yfds7QxDLdbY7dByWhKvDrkvXBra8KSu",
  "key25": "21Adn5P7VZwXp5veU3Jy2o3hjVRCk3E4P88hBD9a9BEwbRXTnKWDuLCpS6MPiX8vhWGcJqPZmvFa6y43dX2yFDDe",
  "key26": "3ecrWL9pnyxXLWc6YEEE3CzWtSggusmLfkJ9oaoXeBKnPeMDbeKk35wppaL928thq7UL2BR1cNusSEyiftDGFZrW",
  "key27": "w8rUyapbUfpWh2ex7AeorWzf8FBBmECsxnCqTfnM4JTqseN43ebY7se54vozQGmv1i8LbV9ZFqpG6nRc23A7U7V",
  "key28": "4mWnKeQ7j4EuGrjijpq8586rgxzGK7pKbkZ9YWQJjPqMU9XNAYk9h9nDYmcfPgeDdEt9N7E5JrXedLopRiuUEFiR",
  "key29": "3UVsNunGQtV3yHzrJCMFdFCANSfcAtgJ14wwdc3S1q3gvcQDER85HpZ5jYwrgxM5abYPX1c9HwyJg8egt9qKFPPm",
  "key30": "d99uiYJh3j5GEecFN3ia4NNRuZeiqPGpzXCu8XVGG8pBr2NNv3BPBKBFxc5SaJ5McFq4Xqb36hTBCojGaFjrpxR",
  "key31": "JYkNxpTKiyJSCaSnNhgx56DraLJSCaUXEpgQvGNcQj3SqjcZR9KDhR2dhmnczPdwvSWEmyvrsxwdPCiJsRfN5z8",
  "key32": "jRnCvXJoHhtMMCn5XG53eQ6yiz8QhaVoKwJmf28r8gkZiT9avMA1knN9iPT3K49DZ6juZysf7ntPd1NUxVS8JPM",
  "key33": "33yh7LDmDexzv9hrsz9NYLFkKPEueYRraT9AS3H1RkyY2vjWv7XRgipTA17FVAwFKfWy1dwjVzj63MvM6FLw8eMV",
  "key34": "5mHAftswSbq7bKcqJoGzza8qnYLhqJp7UYGFGFfEwxWBwJRNRv87sVbGsPtu323M7pYkvYDL97uoRfoXYk6oDvF6",
  "key35": "2buD3BQQnuNhBb5MGyMfnKj7ijAKXCdvLXt2aoBo5tS9wPDy2ogPEJWMcFnzmzSQisZUdRHQX8MVRPy5GSVTBN6Q",
  "key36": "4ZThirEcLsD886PrJjz2DdcPErpRPF6boCTfUNzHE3HRiEi8SsHDeJfRezFbnLFZPmeRGiC2XbgQzGya25fBHMVf",
  "key37": "2o2Gg7pfgzxK3RiJU69Z4nYBLebV1nyEdSPpQNKmk1UcGutmXY1tH4622ZHdbTn11fXduCo5cXRxN4xnxkNQgRet",
  "key38": "2YPv1mBW4bCkEDPKSPosn4om1C2ke22GpTN7yzP2qHZesFEcGqZS3RsKQa6vovkQnNZ3E422CTBCHHDwqBDvA2B9",
  "key39": "3ied41To5w2yPbHWaP6G4QerYZAYbe1TTud2o6EG9eEdb1sfeFBEpWF4zSXoCrz3AihdzcBPdWd9T8PbcwgNe1Mn",
  "key40": "3Y21GMjGAv7YCuV263zPE4EFBmAsVuE6SUEATNML4ipMEntx9MBESrsQsGEjpqa9G9BmRuphgFRtkB7uuxd7WuCA"
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
