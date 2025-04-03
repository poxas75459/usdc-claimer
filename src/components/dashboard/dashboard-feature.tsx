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
    "4F3AxYBE6XoBvPdbU6m7G2Tm3E4DuWadQ6uLw66HScw4oZHMjoJnY475GHMsmFP8zV6Hjw6H2t8mSaHmtnTP2Y7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vj2Ru1vEq3Etz5QAPSV4NwhxknHkwVm9oZ9SVHUQbq7RUpEVUMTYtVj1szj2KWzuXTpNA5NBto5TuE23UguA1fa",
  "key1": "31BnJLgqBojDztAypun1MQDjfBXjNjNzbZ3zFtTSNvVc8vvUcTFAripNDTfzzjNoBvP9voo8d7fJuqiS7AYLKnd",
  "key2": "26tncA4GAZs6mzzxa3AcPVFCBM4Gmk4qi2YhCgfTxKoGmguLsZVwXySgay6m4YoFXUvwJaY1iTSuusmvtvhysbDs",
  "key3": "4u3qRHcRwgViFjFLzXXFmEuWcVdbzuF3fwswSP5RSkApxXZoxuTW8XMLFvToBt1PTj7tfbMnwrHmacHAwbrPLpfT",
  "key4": "3bKRPvVr4pgSFAyThj57nhgSH7pqf6we6D1XL9hxGqMErn2PbuT6uiNZxoFdRj5mJJxkTGGAsWb1nHHM7bqSxQDb",
  "key5": "2oatbjoLFPKZNEEzXWyeNkJ9ke1sHDWsv99qBW7bs4ZXVNHoz2ut31WgJBJxGPNcYWkXhAoD7dAxrpAQYVsM9mhA",
  "key6": "2JVV48SiGWNyqAWJ9dwcMS1AjQZUWWF88jQH3isnMHJHZh3dHhSNZASM3ev8ZhtWPwApbecxDDSsRmujuqqBdvGY",
  "key7": "3FVqEZmicxUBAR3T6LTVQdsc7HB7RkZN79hWqgpV3r6pXWEHyG33B8RoryGH5gpLKgCBY5JXQbFhy3xzwNvdvz9X",
  "key8": "2jQsYKRyJnmGi755sdEN3GAWbHJ9BntNz9j7Rq9iqD6LWJvHj2MDRPZMBHjzLCYBSXBVHR6sKXbnJbojVbSp6mVs",
  "key9": "36ZqF5pzzJNUCBeX54v7TtfiR9M2KeJHfFdPyMDxs95wgFbquiWL2sHYBaNAdgffZHqBPMimQ38wQr47qX7hKX7L",
  "key10": "YZNRGxE4Cd3bmVK294BgCown66Fnisi3cL4x7MHK2iQ3Aj1N1i9egEaKUSNCoRaXf9PWusKu6CezskmsrTyZ9Cw",
  "key11": "2AHYFEumGU2hZpXZTkN5LDZNtnWUpkbJqkNeRsrBckuTGWgA1hdDLUz4CUnnStSV3C5vEQk6QxLBMU6nCCAXcygq",
  "key12": "2p8WSWYPjjQvxCyE2FeCf3kwSZzXNdkyimnjg54KWm5aHp2CZNHcz1MLthpZGLuUTBGUxkpLZofTqNjorc2UMHQm",
  "key13": "4JRF1f7YkZxuKEERwkq8C6AzPjGonNyqqXP5fdiU1ej2LUVC4hiUfs9n4Kf71AQjzXwVMbLkg4aBkBF4tywNiWDt",
  "key14": "2dpWE1Mgnsd9fATMfuR5Shh4jUuvZf7QUvaVU28CegDAdJS2zadrBK1AwUFhEaTkhwaCfqYHk7GX75oUzW5gPpAw",
  "key15": "3GUsWmvXSwckaiZfS3Ehjyt3yFLjw4NcCCV7FH5cKQD5WQdiY1DWRaVSSyrNEyn14ckN9AZ1Gdw8wf7p5emCkaVc",
  "key16": "rmqHBR5eMUr1LWu183meVijBCAYunqcfBRZkuyjRhvzbdPTZaVnDLxuyGW16KcrTe8haPbPUVQBhcLFBUB56Lzq",
  "key17": "3jGz7RgR1aFrqmUi3jdQE7nrZhD4b8n1wXNLZf1ZTnQDBADwe4bvH6dGWMLhCBEBQJqauUogKdndjMQCh8bdKH1V",
  "key18": "4iUxTZcASkeDaK8BXP4daRxdbsZ8gEP47Mdt24aX7Y7fsXQahiSevH1Yvndp1GLZWrJTJ8dEmM9aXttSDByfqokR",
  "key19": "4S5Ri45tKK8Dt2QxFkWNchZEFixZNyKiWAsFhy74Gsssm5LhpxQuyXUqR1HgWXh6jVfdCNqd5NeffqwYuchK768v",
  "key20": "3ZshPYHa58JgK4kGYNEPPSQc9HMk17gNjKacgAdKtf4jSgTtkkxhtZpCKxce9WHJq9CrqNsutyRJEMVSPXAVRQDe",
  "key21": "26J1NQJTrP43GFjNEYceQNw2Hb9s2RKh6PUXMQiZ1Pn3SUK58DgUEZihMLW8R4nTz5iLPvfBFWw9JckfnnReqBBF",
  "key22": "f8yn2EuTYvDQneHPHtWQEaQHPtiByMyWNmRDYQhaCyhbiTukYrseCrLbnz3DYTYB44iPe9vA22BaY4gwk3uPyjF",
  "key23": "5pdd4bhTFVzSW8SbDkFBKke3pioBBC6NCq6VSQPmSAwXVsPpFemCimV9KgooLckZiYuS7K8t7fRQG6HGj6dLSekR",
  "key24": "4qVyrVxi6oDxGHq4ZcTa4KqkDsBhogGHmL7kaB7cKSkUY8EbhtHjFB3xoU3mBEGmtbbjj7aBAqJLNC7HMCQp5MMv",
  "key25": "YEhPZj7z3z7i2kPbmfrvnBtxkpMAXaNXSiNWV8tqiP2xLnyGcGQNpKmvKyqGHUBW88ANGjy9DfMvA1t69bzmsaJ",
  "key26": "5fAL2kNgCgoDU1RT6gTpCaTMg79qmjRCETwczFQfKQeAkqGb5whFYQHpU3qq5K4aTD1qQkZF5pXiFg7H9W4Ae7zf",
  "key27": "24FJmaMNqpQToL2C3JagnN8ToYEdLZ7eDeZmmHfN3Lws5vZEYMapL1D8zC2bYADoU92yTFfyuLDumEjHcdH3QtQM",
  "key28": "uk9yPXKBw1pAVXkKmHg1FdKVgPoCGx8dkJP2N5DsY5AVafX9E6VCFRaivWc6ixaiqDkvxrwwHfdbM5CxCnVFNDb"
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
