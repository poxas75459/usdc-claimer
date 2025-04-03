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
    "57Tmx9ETyxN58JCtNsMGuxS5U5gmreRqUfHgjsU1fUognJwARVSnETR7waVsrbLnQbJmaZ3TLgQv9vMFHxzForKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WX1TUauNXWxET8QdC8cX1uF1D8w82gsnTsnrE423gWfTE637Wy6NAVtff9bCC5CMxAZAbFUTiLLjVySvQQp4L1N",
  "key1": "3EDaGfFmn1MtoTL4GswT86L1LTftgMzzjLstorFFutAepFPTpc4U99rR1WZWAR6HJkfMfUcSsE7ivtaYPJqoZ32t",
  "key2": "4ayY4gWjZhoyEGDZge4iD8KtNNa7AzHXKVpQVfrT5AASKQyJUH5E5orm1ePsY43zUvFja7xqoGrKoKdCFFD781QZ",
  "key3": "2DUEqgkcuWP28g2fQJRBnGHaCEzyJKJgfmZdSi4FGgMR3aXRmhtJ7bCf2G2EmWvnfwNqLJCTuheBsnqRqv4ZXqZu",
  "key4": "Cd5zhzWaL5PFD43iEbs4cog9Qogh9sMtMSQzy7yMSScc5gDXTWqTN1wZ9ZS61EfLoUkT1RNAS2sGnYvfBsCZXtJ",
  "key5": "4RsX5TFiDBMEoiMbLpMQJroFD3V1vuDn7pAfvu7NvJFg8qQ5YFtmKKxMRGAKhf5qpuwN7WVix7JAdiYtShqpRYpE",
  "key6": "KWgy15okgPx7Gp6fE6dartExZYNwwpe1qbGfj8DqEJ6ty7beB2RzFWJZaGCnYiZAZjZZJYWMYv9H6j9iM83HsVD",
  "key7": "5JLvPtou8XPwSb4Xy7TyKuiCBSb3vyJZpFq2R3aJDXxxTEB1m556oPB8Vb9eWKDUYXFPQsZXDWdcWqBtpS6LbCfr",
  "key8": "3ZQsKsgZ5Wp3rMDxiCCQ3nU8vuG2qCzwRNcNXfCBYRoCo5ttsAdJkhsfriyCMzrGBLNTc8V1LvDcJbg5eW5xsUEe",
  "key9": "Nfu4qJUMcdQLeaRJMfUcPdTNtaw8rqRYzHR5AjdeuPUznbAEkTiRJ4FBzFJ5KysAZY5FYa5YyxDwQh7HTCbJgbM",
  "key10": "2BZiCTnnzisyJrhY17vmdev9R7F5BwAFHwszTCqgfSA9zNzpCT1gyka8LfL25h3wFBXc1DbELpMV5XgpmGH1qY3U",
  "key11": "2NvZP9xByD74FvUiV4XuerAYhEQ58fRBFdrhVEtRHiCteSWZgMYgYPudgSihKei4a4bi6gz5eBuZa28FZneu21k1",
  "key12": "5Y3EwwzsAgf45h9PkQvbqnETgCE3ThM44XjdeRD2sBbi86Ff7S2scpf5hC3FpSR2SQsfermmndqiBKfogP9gvaTm",
  "key13": "5W3JgnUdatznZhoTU73k6Wp2wGX4EAooptnNEWj8bahYfKSsmDQekG9tJ9PoBBTJfw9XDik1vduBxAVtkMgznaBd",
  "key14": "5YBNMJimKSPyL2vJgLgqnQiXXtbHtFQNVYdx5gg4aR2buqTrAnYZQGwahnmWmwhAkkXP8V4WrXWoY79ijUtAyEU1",
  "key15": "5UEqbWEVocewJvbFp8emZkqjXLVoPCqEwyrTSCyYggBqT1J5L6U7wQUHrq6ERKashCeCdJpGzfPpzg5Kn5tRAapn",
  "key16": "GA8c1wm6pBPeB9LCxjJCFQJwPWTDdJyyycBJioWoJ8FLNdBgRafNWWSoB2xp7ktCNmdRvx5ndfCmak2ypmV1Z5w",
  "key17": "5bUapUYpgFW1wYCejiWw3PZcgqZkqMfn7azeuzQMeMFZu87Dw8NvQmf39uV56qenz1AXjBkjAQrjZtt5f4w92AwB",
  "key18": "3SSUgQ6D9t5fA5NY3cG4iaTZ4KPCvHmb6RfFKLcJsDQTYDUJ6ReNqMbJRqrUnfWxYKRhLrbwQ18PFtKsiK9mCFqD",
  "key19": "35dGfwLvVYjqrt6CvJqdjiLHKfjsMWqhigSCmK1qbUXvMs1BubvbMxmrM7kLR2zCFUYQpMeRgYGsPvxxbMm31jou",
  "key20": "3c4L3oJ4hqRJ7mUgsJT1erJL46nCiSBpZAcMZcEmJFsav7UoMfnegCagnhiz8SMifizBqZSKw88P1reJ6qEYiaLJ",
  "key21": "2XuUFYhknfPwBwrv8eTBFdSHxLSAw46Drdfk4hvvjKwpa1r1gNwhneqeRSYeN8KdD4mbZEQnJYZe2WfUFeZNqCue",
  "key22": "61wcwPZZ4MCv5JeAA65YdEBH3TSW51VfCzMSKDa3hiPNYczmjVty1WNipPgs4DBr7ZwB4YrL9zkNgs4WQQvtZzZg",
  "key23": "3xBMMWxp6ZD35grzQik45Lcts4JVwMdbEmFzJXvNkKEr3VTG36wV7W12m7vJGQpqgRfa7erEu3ax8Q3dQtqpbdqM",
  "key24": "3LoUo6VayNK7vb4SQSjovS11JcKS61HJ9GjcekoFQtt8SBeWTgCeexgbmEtH7h1JRf85fn7eoD9VACVVRV7GfgLm",
  "key25": "3krvzCHZPszmsS7bCg9dKdJkkhktNdmZFkENQZ9r5ByQ1qjPin5Q16ZAD9jFNnvzShVEK8GF4FbQbk7916gN27iG",
  "key26": "4ZEkGws3mgn8nAhJX6qvKimMyQRPYfkLe7CSUQqU87s28GficGTz1HttU3agJkknhj7DJiqTHhsEMEr3BECYMMb7",
  "key27": "5vXwxLVxoTuN2xg7qH4ujUxGF5SA7vWEsmUmWJdKEubj29DXTrRy3FxyrUpE1wjvTVYv3syZTJYB498hybqAYBYH",
  "key28": "e6vsnBWiMtnaKhRA11TAV6tHpivwvWKJH9JFJGzQCo2hKAAMRP1RMciMijSb1jXHpNkS4Yc3zSg31P1B7GiWKSq"
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
