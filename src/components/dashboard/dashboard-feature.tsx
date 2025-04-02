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
    "2cLtue1MJwe9qfZeEAYqrDR66CjNTDjM4wYPgPFFrBHEJ7swS4HkijMXF2pAfvEB6CTKLeWhhT15JRjMTdGuFn3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kiZEFYVY4bTkPG6Zf8z3do8LR3B5wywNAPFjS54Aex8J7G5yqRqC7QQ11BKHFxB8pKju9dLuaX3vkSKfZgdWyqW",
  "key1": "3wiHGFDrGUDuqX4BPX1AdhCNcExJytbPbEf4aJ1c7DEuXppqLroWJQXRUVgC3KFCqKDYheaXEe64gNNXgj4w2ZSJ",
  "key2": "3in2WpSemXJm5QmnJm1Pe5X4shCwVsiwJ9vLxRZ2DuxbbXrdcwGHwdhXAZFgLdE8WdxuNVfA5MFKJEXoq6q5KqvJ",
  "key3": "bjHofCcPgxkSapnVcCZtPhDngx4nfj66SJFms6tYi2iRKQagLDbpDd1QNCxSfCABiEidpy7TEtMPgpYXcsV8Djw",
  "key4": "37yJVVF2E246fwczWoYj5YKx21JUS6DEjN4R8E9vjJmdhK7DZJ9R81CoWCUxuQ4qxfjdanGpLGZRYmxNKzb75yg4",
  "key5": "5T3TLjBRgevxTVopQ6A5uqz1JGmSaKs6k7Q8KdkhUn5HFBNrZ2GCJBRVf9w9m3Jgh7k2TsLPaAzbmLkQfQpqCGhk",
  "key6": "25mJkYsSS2k4ceNDDgApFEmQn8bhgmeAN6qu2vdq4eTmbxr6oWxB591EL6PXANsjzmH6HXHZKXvUBfMZVbBpMXnw",
  "key7": "3G9gusr736hZeKLzri7ni2qqUszgAxUjUGt81GPXhuj8aFP54LBmLyKFPiAsjVTbhvvBw8C24LhwrDzRJ12uthCn",
  "key8": "rZKXiPa7r9tjp6ZhfS6CgtdmMkYAuWfzPxG6YFbRswzse2jjAEXn4ZzCMQwvvuLMVhm4QVTW14PDudBbLFZVgPX",
  "key9": "4fZgV23s4DMVKPfijhJ6xswMH7vdpQXE6UMqLNChtRD4LvjhZGdBJKW7Ybanr7sT7QRNXsEjdZaE3ubeDLNkqx4q",
  "key10": "3aXPfJmAQrrwtJGPFKY3vBcErfsKEDioKU9ueNpKQRhpVXQVQAuA5N1ubSxW9qubiUqpfz8SyRwhzpr5kA2rfFwR",
  "key11": "4JaL2PmSgcXWeeLHqufGr5xGe2P3LPZXhPUf416VViiJqpBP5mUuda9byavo1DJkpZYuBEyxkxH6W6wsVjWUqBjq",
  "key12": "5rG3v2FBxNLch5L3W7txRKKTXKUa66dfXZ7jH7NcvaCUFTy3bgvNJReqbvNrECzC7FooMVLddzLhhg1Jg3TEX255",
  "key13": "3SHTwJyCZfsCjKZTRhWJWLmWWvLCu9q9kECNYJRrNW9CtSVPbiKSSmQbNhBcdvxSMJm9XoAmq4GTsfyCYrVwoBPE",
  "key14": "3RJegM9cywnMkCfGMoaWeZhimCSaZMsvG9GSj28oRHjzzyLVZpySF4qsW4g9Sqyfrm9dwo2Sc9B9G9qDHeX2J7Ux",
  "key15": "4FSmAKJoPjBtPYymmKR2UqUNhDzqA8MzSe2E5KoVGhEaBDQcNxPG6sf7iKW9pwRr8dc21wogGp7zej2Z7sAuSDj6",
  "key16": "dpVF3Fm5Crt1b1sFoyi7gaoYEVbasdtZWjeLGW6MBwpp3PJfMMJzA7gkNn6XTHJfSLUMKioQQqCrb7nGe3ETarT",
  "key17": "YLMi6mW6x8YMAjEz6HiN12gwoPHN7at3QaBDLC74kNvS1CVdd6DXDwaRo3qXTJ5DXvyeP852zVM2Qygixorj5tD",
  "key18": "3waPT9R7h25tfQYzJ7Zwivsr1Std8xg82Qzgfb7mcibRnUvqJtWHNWjiusa9dYVFjMnQGGkKiege6C888eK9PZvC",
  "key19": "4m2NUvLgk1gpg9KgtFFDsDnxLLst8FfVu6v3fYKRyfJEroTVJ6E4f78J6yWYoVCbQtq6cTR6QnQDmJGewu3w76dj",
  "key20": "2dULUBrQCE8d1T3SQH1f4e9aS1cyfZ5ZBtcZZjFPiwcUy2E2xoeYnZEwAjJewVG7xY9ofuDwNSkmLWdqmHy41zJ5",
  "key21": "2SB59vHmybyX7ShAhNBzxnF39vGQLUv8pp4NYB3G712rhT25X5hdtmeUukCFMFR5EJP5MNk3XumjBqmvHsGtEaZp",
  "key22": "5NWtcceHoiJx3GRWEQoGGiAzsMLKiZtY97iwZWRiGvMUHBHVXp7n7WNikEk6urjWefaP9NvDFvRbarRyeEcS3N2v",
  "key23": "4VLcFALeJwJPuvNMkvaF2Gg4Db3Qcbj6Ug7HF5NDDZ9FRTzR13Cy895LCuQMpT9JbDbd1HN2T3WhGUVMWi2Y1nyZ",
  "key24": "Phz6DhntAbTfP46YfMS9mV1KPTXnCLNFqFkjYHvEHahQySD1nASeZiLCtP4xCdpfuXHRDThbp5fQt8nV3zCW32b",
  "key25": "5rNxM8CbmQDnfx1EnDcFBgF98npkYYdfaWwT51ZDGYtEbHsj71uSgbR3fFH56EGXHQGzQqp4CnwJ4iiio77ijNZt"
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
