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
    "5K9xqkDosX6sYpr9nZpFQBnkFvc6XiAgY8dsnaaVTwmBzUcRfagkba79a8AzCY6Dpjy79pzCqwyXGnhb9UjvZhZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gJnA7K1F65E21xGsVHmYG2V54Dq65iFm83Ea4WnukpY6kCxTWsXKNKBCnxK62tMWKhmGw9cbsM36fbXzPSoNQJ",
  "key1": "3aJBcmnXFizc6FzDRtRcPJCKb6bNyQzB4WWxsqXCnHLcALck51fZnXyHczg4q6zk8b3qZGZogebFT2TiBAVZ5Uj9",
  "key2": "4CMxtJ7UtEHnP2qHfZ9Vsa7CB9667pWiGor9mYg3dW5qAEqjBpqN2SKyUFxbeh96myxx7oFUBGf6o9XJEniouDdR",
  "key3": "5rNE3Rrb6Pg5yLVevDyRLQY6NafCeCaVc75sash9cmLMyiMcYyGWDzkG8XFQ7mKWWVzBUJ5PU9GB84LahFi2P989",
  "key4": "2LsjAJmved76D1M53GALWQYyt7xQYZ1Fnjj2QNqUTGmacHZU3NPzLhvhRnUg8dqZPdGTGsNXLi592o56XZpzVe1Q",
  "key5": "31qCtdw7wTXSmwq8cncWGe3dSDnNi5ipe6f6cNKJrU8qWGVKPqiWszSB6Dr36ZWEwKnoowTwzBSvqg1XCPSDHmf2",
  "key6": "kb3UUiv5Ldsadw993RjuQHJH48HKN74NkDw42DcpzSKVy8VK7NMqksugpAMqtxbN25cVr7GnwNxmXuy4jFxdZc9",
  "key7": "2zmriym84fBzVqDzBodnYFhpgMothJsom6qK36ZSSDa7qfqZWYoMuF9h67B3ab1ZCJfvLVp6jEeD8CtSGe8XXvHR",
  "key8": "4XuXskCgSy4DL4oaDGGS1MJAZegg5CSBvwHN37Ssvwuwm4QJrNswTnpwxfK1YBVandb2VVEPfFX9d1Q7n7EMfG2k",
  "key9": "2Sw66W2DwqaXXEswGdd4JLrVxnLSVN9bzJpY473dZYdy921AVYsaMmRFss7p9YBY7HH249sgUMAuk19vYU3Tnkv1",
  "key10": "4A3a2e8vypihEgYproEwsWrQW8VetS1mzPThnvX1i6anpUY14epbHt69QXLEp6NpNoiDVU48bhC69wG62rFQMAts",
  "key11": "539MigUiux9VHMHwjQ2P3DUPwZi1T4ZHQR6BUjQQi7e1f5FJwfigpGqv3eVhXk9DXFPaAUxCCKBoBNwAR1wFiHqN",
  "key12": "3SEPBApvSp2nWmC3Ai5XPcN9oxg9zH9WxvsDae51JWQaKafRUnjoVKHH3mLBfAJP76wYg7VKeRd4BG2AwTWGF39Z",
  "key13": "5p62vrBcpiaHKNQMWrEXcP996KYDpppvzpLGvW85jpJusQje5q56QroXUMEeTT5A1tuPr88EFnSo8ZCjGwJNzQn5",
  "key14": "5cVgjyyHgAdzhtiWrfCQwxxV4zkwr2zLEfajYzcgBgP2yYGm6qXzQTcSpyMM3PwZgzZ2qPMeYkbm5y5zEbLbk8cp",
  "key15": "U4QUMATVCXLaTMMDPYnUu311ayMrhGAcqpUA6mg5AfLHFRCvgjdsbNgunzz8ipMLA9bAWDKjYgstSm97GCtoaCo",
  "key16": "2je3K9Q5yB9kEyEgSUgSE4p9CtV7JkwRpAM8JDHfe7VNfTPX7y3MvhF1hzYDqYJJQVLdo8Q4tH9BYJj3jyPGgP9i",
  "key17": "3jRjj9VucjJTA99XnK5Ftk3AvTTQwsePP6ZbhxKphrroYnhLjG8UmMjgJvWD839vyH1akwDukdkz3iwdDf7LYx2R",
  "key18": "353zPyxczUotgoQpi2va8XZ6d5pkZzK31nT9Wt7NSK9B3mKNBERteMMEx5uLX3ZXDjAvQXBoGFwXVRRtnaiUunUw",
  "key19": "588cpRLBfHo6cXqmENKgahFaE8U8GnKLn4Q6dFyNit4a55Jc87iyamHaUD2Zy9uLCppTiorPsW5mVjADUVSghmWD",
  "key20": "3a6z7VKT7DgLsTNhyCNcwAk9AHi8sXWx3Gfn5QZYzUeChysbdwbfmaivXwrvy9dYLFN2RPcE4rxo1CS92VKb46f3",
  "key21": "qSDyHSTanKSL9KcjSsh9MSeiDyBz58uxF3tJ3Wn6Cob8zDSjGRXZyLvvPRqwETqAH3ujbrBf9kn24tUXk1zkcwL",
  "key22": "2yEYxQans4AqEB8aHjyKnEDUnVLkFfGkRhHJ8mcT34ASQG1AgbNL9FAVjCSCo3ARGYb4fUTPQj7e6v3Jep4pKCJG",
  "key23": "2kS7C5GNEj5xjn2FheFDyRDis8i4RBVSP39SkXXJc2DEtMnRgdBwqpANZhksyHHLX98c27HzaaYWWJ25ZEj9q2qs",
  "key24": "xFggTpVSwePHqjJAyPe8dXfhR6yiKEuYHwXjmnvwd7dVbtRaYCWgv1aENQZx7AW2vH2uqchwSAd8EFtj8AFPntR"
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
