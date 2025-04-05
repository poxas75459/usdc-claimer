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
    "3NtxDC1WVuNBEsUvaB6Hvo5ZJdnctUPLPVyUsPr3WXNLiC7jNionVFX8B9H4mV1v3sbRHpDd4VzTb3mXq6SxiXoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u97YnbmZqZP1CwZQc12QfXiPUPNAeGdE1K1SQTxF6abAJ5B6poeeXJtMwvf6Mf1WUKpfpNqFMXBACjJCD2mFmi2",
  "key1": "b2vR3TQ5CspDBhb8zbb4WggVMryQi75RGyrVjhJQRtM1drWELCVKeqBSsUdrFsh8WQen2To9PzPWdpc3czLpnLD",
  "key2": "3LAeXsYc35o2rBbz2Qz8X1pC1ksYNTcTzWwb8gwxa2Wd1xSLSZvC5167b3RU7RbFuRHfEbA1FtAZGhfGquq9SPHc",
  "key3": "575qY4oq5QPh5kqq7vqyw95oSB7hHLFt8AEDkGwgeAbKNVSmRyTqvYDsJ4bnTDNbGJ6q2qEqVjZhT5r6xqv6wHoe",
  "key4": "3XXUn6qEPzy55xoPF4c4AQ6nPTBgSBRLRpiVNHkAioDuYFJeX9uLHUxFphf2ajk9uN5f6veHhWGhDCa6EPxNWLuv",
  "key5": "4nL4jMpYrhFqohH2zNXy1B6iSWmCn7C8SfNEZbhmX98Rs5mpWdPJEJhpZaj7yyTpoSyTJXpdK3gqR6XcUBXtyPTo",
  "key6": "4qAi276iQnXFoy9AMT2Zp63rChyhj8HRMyDJSu8ZdHE3c1ikqmbN1Q7k9ry2vDW5PMSurLUDfxNMNiY2DYW2XpYd",
  "key7": "4rDZgP7pifa8TZKVhJBJaPJcXpm6J3R3MiYkkJhwxqDwn3uPY6XmX9KoKAgj8dZDJ2jfyH8peSVvC8e6hUpbwHzr",
  "key8": "5QW91YnVRiPbsR5Ni5CBybkzMakjm2RBrcrgXqhK1HPYx4Q1LrQp7CD1p1zpTGsma1asLF3mETp9e585C712eduy",
  "key9": "86GKAGxz28uWdoWyGuqecGAoUobBsq2a7GsdftRE8JCZUFmMnVhKr6F5gAZGEP2FEhDuaYMQfVVGJfKYxjUXEfu",
  "key10": "3cmxPuKLauxddgdUvcYLiFiiEwZbzmkdtoQYe6eqoq61XLnrLfuXqAfkHTm5PMaXUPkq2TQvDMpghJpXZGDuXfTJ",
  "key11": "5iDEt3gUuV5hCN1HxWruyNsJ35Ym1aVj5MxPtbX8ELjPLa4Z5CSQyAWN6dggKHiGQdEbJ89uUbUwgkX28cZeeQmk",
  "key12": "56DAY8Gm1RQvevDH4MAjUiMR6f8eKTYUUB8QN7j6iVp4T9NzYy7sCKzUgEj5KkGr5RrdnyXTRgErb2cfdfrvxcjn",
  "key13": "2FraW2btMnfrDo8VG7XgtydCBa1XCHPiS98zMQGKgd3DWHG3bzNiX4wCywhdZFGad8dy9JnbaXxBZDLYSTrZvZY9",
  "key14": "5vuMAJsgMFgTcgDSr171fTwextDcjumXRiu2gBsPz8CLfKhQS7RhtZJVvBgk8TYJXxtrAQDMSmwQYnqj4bqVXJLT",
  "key15": "3jHTYRBricCdCghe24qT7a8QHxRBXqS6NM1kE558ck9gswnRX7E9vsYDuyQmdzXHBKYy33SMgZ9mgwC7GcW2LhS8",
  "key16": "3rFixLx9ZkdEQQjFd7Mwt9KZPaum5GLkdSPBdSZmivYkvAxBT8dGABvAXQVKmnY7FHJmEFbNYbkdDud1x9cdJAos",
  "key17": "PC629sUnXLnwWa8N3aGYZKv7HQMYwL2D1FdbGvHh5HzRcbEsZ2nAL6MuGDd5qPdNX6ESkAwm5RkyDEg8jMbSKvV",
  "key18": "4oBUVMpwHRdyfaWAykyf52wYLNXnjFUWcwodSyfHYLLJeU9TysfUvRFjHZDH6Kbx7w49XgozHAB69o2Mzd2HKL36",
  "key19": "4ZaC4HZZVb2j24dWDswr42oKvLVSUTUUDqEMWbHSeK8Q6ydfp152QNbRb5D1kXtJ92Rd8v8mVuAB5ajJrn32eEsZ",
  "key20": "6ikoTfCPzuWPsDjwufwauGrv42uE7X8g5cQyJNRAHxmsmvmECwd94JKKjrvXVTsPnBxe8c7AChoUMvxQuEBdDW2",
  "key21": "4x2cYRK9cCdsGh4LmUq8m9dVassEjFjxv4ZvYN8whJ3sdgoqbsPt8dzVQsSim21uHucH7aBxXwhCv2vpMVfiV8Dj",
  "key22": "3Uboiu4nybKfXVGzcMd5sT3T6dDeUSwjJ1vAEbDNPLnke8LDS2NUrVxNiqbridTAMfVs2DwExCCFM6DahBXtrqiX",
  "key23": "3t7hgMT323ztN1MnSP3wHkXicaTbwbzCKocU8t6Qt1SXCmmckTijCLzsYqzPBZ6zhRXfk1LqS3xLcfe8NM6WqiZa",
  "key24": "5sgNd2XUKtPE3TY2z5Jjyp13gMCmrbSt7DeC4DEdzwY5qibgof2GqJG8Z2DKnmdSYfzj9mtDz4RWuXyBryPzJ7Cg",
  "key25": "5YBBX7bu75U3geiaMmMM7MPFZXhqjnpCSxExLjLKqR8eQ9J4FBRetGKH7k5Td8bYAwtDyAnwzo7p2ApmnPGDBWZK",
  "key26": "z6STL3LafrCExxGBBiDbqPBiU8bsTPetnxazfWqEFR2euNQ2Rvzt2xUPayDeZQRpm2NFf98D6S1yLPyxTk8qsMc"
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
