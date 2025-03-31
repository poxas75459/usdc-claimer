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
    "kmRe6yvMk1QpqG6cQjqbzi9yfCggH1qpTqjqHw5F8aVD2BRvpknXEN4ZihojiB3tn5HYGDEY2ouk71HfhQqHpwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5TsySSUaM3c5fWsNKuX6Yux18g5bPGgCePMX2Q85eivk89oXnwFcDmPxsdYPL4hBn1ov3PVfuh6n6EtqKUjdoG",
  "key1": "5ZBc7hCcRn8n29PJtdK9edaN8qhM3ACWywdc5MjXS9fRoNaDLEdLhnL14Fvz4f5DqVVWHDXUFW31XQCVfv9tETs2",
  "key2": "nerGfM4EYS3VordDaCm2pbirvGB1HSzripyotjpV9JqTQo9y5SF4pAW5kDVDotzpptpCj1mWc46NGUXA63FWbrc",
  "key3": "ZA5gtWHj1WvSggVfi4pi5bQYnr1YbZUy1iwm6EEAakCds4DqERLoMgDJNj11kJCpwGw2zV6cknv6j5ZrCUvLACq",
  "key4": "4nkkhDDPbHcPvHLbe64W4NsFKRrDfjNxL7rL5bbCDgjouhfY27Dqez6DkWiG5LbGSd5jqzgwZ9qEUaXjqXXRET2f",
  "key5": "2N24XqBUMSqvJp56oBWaM9GK3HZ17s23keqH4meK6tSPRByL3capCE1if9QXBg9EXVXofqPZE9wDESAewnzMbzWN",
  "key6": "2N1V2v9p6oyXfSsHzbF1MtNd56L94xTJDEFn6ThaE8uW4K8D2fGR7SjXEmpQPboGSGTd78TzDQkix5S2QUjGMpAA",
  "key7": "3GRAbEK7N9T66oW7R35NJ4bGT6N8Hi64ghvueDFLEfdfHGPk6Xg9NopXNZjj5M6PPjujqo5cKNBSHDZN35FYvQp9",
  "key8": "3aW52HCLXS4KXdbQbVErB1iDu9yCrrN1yDqdLNx4JBbo73bGrPioShhzZk5dk6NhJwzTpZ2DLwZqCMghbYGncdpt",
  "key9": "324QcTaEwjV5nAntNE1xbZi3mqnRoCDKLDMpdqsgBipVmzgmQ4Pt7noXfB8fuicu4dBMqDUyeUu87qwdj99cgkC4",
  "key10": "aPS2XMNst26gX7DHk12y9KkfZahrV1vV7uo5NoWWA8rtDQ3Daseg8Sx4TG7BViDtA4eMaA2p3MfHTvfDCAPrUgB",
  "key11": "5kngcsDyh8c53v8drzXhhFyzfUR5DLXsKD7c3XeoCJWMj1ESSu9Mx6WiNvE2FiL8LPg1pbUW9uzdVMqVjtf6SCvf",
  "key12": "3bN328MBtcprRqhTCUr3BMMWvKzfm25ervWFhkDThTqBxVPeVNapsGMVkQkkEHgKJApErTmA2d42TSoqopTWW9YF",
  "key13": "5pFEGGCtjqRi8GhRdZcEUJ5axuZtY9wap5HDN641EvQkDoxfa8cnmR4qXs1khuMzt9D2nyfqiJKyS1ArXdGPJmcB",
  "key14": "5KGFr4XNtSwnpdX5Ed8nF977pfeL9mmxQxGm3uAtdDuFkijdrBGcYT4P1Bd9ZQzSjM5EoiQh8Khr1Vc4HeqEbkiU",
  "key15": "thcqnYb67QyjaYkzZE2hXaEmoBcuCZyxYYyoozcAzSTW71wfGudtQ9EQy3QaAizaZm4oJgeMej2A4WXwhdReLXv",
  "key16": "2HPBTvD8uw1gVrYVUfYEW9ezsJzSsDRWutaVhtGAy5Ccb31G8D9AFt5vyVbRoKAkgHNg4pCP81DQAzfjWearic28",
  "key17": "37Aenw3HBoMrDcgSyqTCZJ5eyUn4UupziRXQxPDANhsVJ7AK7Vr3oK2q7Ygmsnx82EzhCdf3QTPb6cS2EeDdLoBi",
  "key18": "5EgSMKnKbbAHX8kmU3xmM2w7ViipqTW9GUWm9uLpEfopfDbJ5GJjsj5FsQvfubXkUgjnuXr7qmRBV7M3sMjg8CED",
  "key19": "YFXkTwr2ZEKNsBsUUx2YZx96T8fxEb4UURe5cY24hatmJgbg9nYZXjwdQwu8m73biohDDYRzZqzU3P5KrNPEPgQ",
  "key20": "3DmQYr8A6zJTciE4AxfkGg3FztHQfSM9XeH2aTGTXcS5sx94GmD52sMHz5wPkBrBTpyQwfsC4oZW4Bg9sMTDGfv",
  "key21": "4bBoehn8U2vyAGdiX97qh2AKVrVhPk5nDQfdFTLTdipHm2xyXPuzNEbWvdQjPCUADQKajPvWzBRbywf1U4fCAfDF",
  "key22": "4uG9pdwkAyboTkPgKtNaNj88pYBAf3b8LGtRqADLqRmeZGc9Dveautmi7bnVxqakSdRhSqAqw9Eyzq9qPPsup7vu",
  "key23": "46bLKoSYN3domS1QoruszPMAWaBsBtZ8dKcYTuz5xrwhFksAut5XFgZx9ZRDNerkFZiutPY1tRWxq5wsNqhcQkza",
  "key24": "3jQ8PBvmn4EY2bLJLeGNq5m8B7jXgJkT62vdvVSfNr8Q2JbwnDK1mBjPhc6EWGMCPHbR1ARmjLg9tPCZvrLRTNvA",
  "key25": "35dMrfhDaEqijg49BZQfwpzKJovsTGGchHUKbHvjjnJowVYgUvDSeqUGRUQBoVHb3MuQ8cCAG4JnFEVb618YpW8h",
  "key26": "5V6Wn8tk5y3uCYQkXr6DMyHeEk39AUvCpEFdadLeXqLkBX57Q4C3yg1CAh1FHxVtxAK3TXgSFzCsgkZPMWG1QHms",
  "key27": "sJE6eKpNVrqgcGeir4rAVVr3RELHKoLESbPRfLmt1cHHtSfxuDNh6Hry7ghn1GMRjhZMRHQXJykCuVPvyrM7JwN",
  "key28": "3A3yqTPYLVeBwuAjipFeEdFqVF4KMM9aZ6eViZU4fhJTUTf8Vhm7nx4EHTiP5qdAj4w4imkrDXa1WjLAD3FNTWGk",
  "key29": "35frULGzmw6oUbDhoK7wfYbfuUWiJ8bXgZe2rF7KkfDoWfhEBV6VaGh6Fd1MzcuL5pJuPpq8tM1hY8k1crtkKwhQ",
  "key30": "26FiDsuReLkhyax8tF3q6i5GvkcJmZUKiYDs1CgiqpH338ZYr5jmpNWdAVajjx69JiXe3mQtVcj3nnzrrRQb6D47",
  "key31": "5kHG9DuJEt1rY8omv3r6hZ47ac2v8EZ2yDHivMzHCb5krazJafX55cNEgyQLfBFVMNdn7w96AMmKooJrokNU6oyR",
  "key32": "5T6TZK49gCgoqtF3mpT2Zrp3Fim1g3SubxC1DNZFcSNPvekcSZUSMVdmVrVeMjk1dnWxEkwGyDgsWvrQKpJH5JZC",
  "key33": "2KdvSZ3foRtRZfYNpWcbZRofQv6ZPZRyVzPZrnMt1jQziqMqjbDYAE1CKgexnbU9jzEqQdVU28e62UAXrZVhgJ45"
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
