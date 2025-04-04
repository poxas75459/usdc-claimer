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
    "2KS7hCKuibeUqh1PNpp555KKAdFezSNY3F6fg1jR9Ucxg9XE3bQqJaELyFgK5zcszXQTxJ3NNYX9YrAYhFmDcAoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zmCP3cnBVEfjaQmkEQN43KseoYLUJDDcKTQbp2Ep1mi5BZ6ixCujmrSPf1DeL4KNh6zSKDm5wt6ZpPtu37ALy5x",
  "key1": "2eZHHTtDAcv9MA6NKJNi9VbosPZsdC72fvE4hpZoNF3yFfGRiebBWip6RZtPQTZDpBU5JUjxdLjj4otZBxdbYrDr",
  "key2": "4Sy4UJmwMwezSGo4oYmsbYwmhkPsXvbqVGuYSPypbDwWoCqtWAJdJJhkLt8oyryzME4fGPzsQ4TuJ8thuePX7uqa",
  "key3": "ftLFMDfgcCrqe8JZuWC12KyHnLiw7hYZEt6bK4qiNT1DM1RotYGSgdaWVCSkYrWrQ9ULakJ3V673tA52cP5nrtS",
  "key4": "AWBU2HSTwbeFZv3jHPs3sfhBChY6hoky6nHFyfNhwhnfTeh6qaTFQijrFdAoLsTQ2k9YC4amUrzKNzHo3u8jQ8E",
  "key5": "exC3CNWKTxJcvGvyK4pM4WCEAvsF9C98am2KHTxXgoTiEYbTSN2cFbUv6MVL7cPb1VRuntwNGPERCQjBy5jFhwc",
  "key6": "34dHT6o3duTLEMfzqYP4dwbejPr16eCSbJJmDiCyorxKpgbRWJ76e8CzZyaXjWqEQpkzXxodUQBFRae1emFmiAJJ",
  "key7": "49swS86vBXnq1GaH216dFARhsWs7x8J8V9X9gRdJwNmAtt8Q71hr4sy6JC7ai6CBNnaSeeRnnKizPCJdZxZUyQDm",
  "key8": "2SggdvXfRjUH8gZk86Wn7AXnRNaSJsLrjArpimKCvSsFweTs52UJRHYrMB4korbpnEP74J4hkDgfaAxdby8GPXCt",
  "key9": "d2gbEEs1exmknWrpcfBuJEsuo3iX5AScQdepPeE92U5jDLjZnCQyS3nKxUYTayK9PPMpWDR4FgYas8MUmfkVzqY",
  "key10": "4TdXDQiPxtkcKSu39ppozgvVqYvqTsDJt99B3UFtckvVgB8e6BnREzv4XHjoZcSd5R58ZBk9dXPACyJ6oL1RYdfJ",
  "key11": "63rrdudrLAm3V58Bej8i1Z2Rgug8UJW3febd45GDKNmbRfu7E8FhxrJwWtR6JVFchR4WdegkzJ1qBjKrYibkkMMs",
  "key12": "tXQHZnivxCAE4fUQ6eCfhKNMS4RtEEFN2x6AzpNkxZTJfwAppYKhdGfZtpVw3y6HxQ2qvSuuRgskXRiVWibEKhB",
  "key13": "oTooUHpmjbT5maeB32r4HFquXuCk9vqtHo8mnAoKwy6ELw8x3UTek6anGwj2Y7E8DmNpWR7WtwQGfadjJPWDBJ6",
  "key14": "4AmGsa6C1BRVFWANNk3fqGgcf1BbTYn26cFWMJSBGmio6uA9fAsuDvgZfZ5LTzppgb6nGeMrqWjEMB4bxkNNuNTQ",
  "key15": "3xDTz2uci8s5MpuKha6WUvS66tP5h8uX2nUWU3WYao8tczwSkKsBpxuphFdTgmNkNWa8AdCEozU1VYtGjv7xbBBq",
  "key16": "3mQdm6bkFKuerhB8hW86AY4J1s6mF7V5uzpmZ5SMQ3VwUPVCosH3ZYAWcMJ4z6N32iP7jBBB1BFrxsY1qgq49c2B",
  "key17": "2cB6xP3oi8f7PCTcpsYx7vYae74TwxRiQkhcqbQePWga9mYZhot228356AoNixMAEBbGbcUwHL5a1GLJ233YFLQ7",
  "key18": "3pACpc7ouBehTHCRbcKhnBdme4chYpdJyce66XHKyer7KHFZhTUwiX8fSFxv9rqYabUMyFybUer5cC5cLphYyYUD",
  "key19": "5B97Hj9rUJgyygmNBQkh6JecvGNLb5qFWn8D5WqVHfjKekCFx9SdKgYHKDBqL4A5khcuVk6FmTLwek7BCY9aTPEc",
  "key20": "3WUBZSVVVbQQSDQqeTWAuim2fRXva2yuNFbH1gcDdzeiNQdfKCAfaa9fTxMjqpxyFetY9D6uG8BXmftvEzhHqRPm",
  "key21": "51wx8gXoyQY5QuTEiPZH5C62GqQXAF96nnkwahNvtgqrfXj6LRDkUyvBEEHH6Tvyc2nrwZy1TYKnaQJSmQkzR5qc",
  "key22": "3ZuvpKpeWqKZo8f2YAGPwwjB51s6TwHJDKnBTVqsrhSr6XDDfRsREfRr3QABaSzDzMYxmMLjmTWREqdGN94kYsKW",
  "key23": "52HvgLtZRF8xoxR8nGK7hvYrt67AbAayFkXanjc724Jh8euZzjNQVsCog8tFpujGgeEAe8unm9DbvSRpcrNPMkcS",
  "key24": "5PJe1pKNDd1gqJQcV2YPX2uNWys7Az5Qdfw2LeSzDaFZGTsNg3r4rjarkYs1AfJKeBxpL5EStHwn4ZoJ5HvS5Sbd",
  "key25": "5oFiS8VBDw1MBMsYXLBhnT8V5vnhwEGwzxGhrW5XGKfZgSbPznFeoycHhhZieypyGkXHfctB1dFrR24dmJbLvpXV",
  "key26": "3nWfavo7JRZPt39L3u5FrGyrSqMrcDoudZWLKXSUgexZNTW4MfSrtijLfij4Ltbj72eMS2fxAekAaNjv9E5nZ6HD",
  "key27": "3Pjoi2EH4ShfELAqS9reXuqremz1RJ9ToBZRtT7J6T5MDb72zqUdNknhv7nPoRzwGLPc5R35M3CaVAMN1juCmK3c"
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
