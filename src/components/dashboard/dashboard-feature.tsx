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
    "2hYe5scuSjP1P5Ai7rMDCxLsWxh2bNk95RutViDgq4e7H8Ubgf4PME1Pkncr9VJ5F7mfUbMKVSCY5fFrtvWyVCCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhSi1xXdCpAxpCLKq44FSxvnjrTcYPTGWx86VWy2grnmvZuGhuG3mqGRJKQXJCAEvMmCyX5Yz9NvKcXmGAXXyGE",
  "key1": "3qq8mW8YzMTLzhKAmpVd8bsPft22fP1xC3iattJEAT8dqi8weCWVNKhseVrkxFWc5o5xXEMFLkBTjgSGDWzSHt9c",
  "key2": "2SD5JPohD89kKXjJYnxvWgeGmyEnepbvTqEo13waArMTn4P5BcpZZrFp5SQkfCk1cJiDSx9Bb4YDDMx9uofurUSi",
  "key3": "2YP7sL5WdxBq2fcL8e2rRRt7Tkunsmt2s75XNWoW5WCLHZXiKgkhw2mUgwEEpLSk7ZPfXmgimVHEjTeCPmNnNXoL",
  "key4": "4dN25k8HNyM4tpFTwkjwkXAgxpPfsb2AmAKC19xm5vypd96i3R9MSpfabAGj8uwbjWZoK6Fz5JTFtKHR9tG1JwqR",
  "key5": "123z2fixraGf4LQjg9foH4wF6vCYMboRGsPzNPYvMV65eUNNwJ7uYsSN2FDfMyLuyUf7YERwg1VENkuckBUDiP5J",
  "key6": "2jeH2xAW5yv4WnK4fC9yBone491Pk9qTz96BcEYsRsy34GAF7nWQSPSWRCXJGA5H1mWs8Y85WovyhEZA89AhzLUJ",
  "key7": "5ipqqKTKVLZSxLXyeijqvzwoqjmpCKDBuL5CGyfyrHPvp5uqfd8fTkVk8hHtnfp24gnhasW2gCf1N1wrZNH4MGPv",
  "key8": "zuZZ82k6rA6AoKtoSYcnLaSNSDgt8GeQxRoX5bkVyMKkLqacFmhA7Neq4dX6UoCdjNGRZQukTojok92iDSf8n5h",
  "key9": "58fpKCPoNJbXRhewFz1fBbTwQ7ApGZqCxac9bikkhVn8VMR6pe8iotgbjL2HJDo1fbxL1LpjUu55CxQNpZEAJxvx",
  "key10": "4qdoaZosWGRfSaMFDTCwvRN2PLuaX9QXo7Tk5bEhVVZ1FqHYkUaDKVfkYmSTDUgGZzSfNTy4yMYhVFrGbMaR2v5T",
  "key11": "61Y5SW6L9v5U829LZDzGCw2fGYCBxhmjxYWYSEGnwEeRZkGqKY1VqFqhLegUbiePs11rHjyFu6pKHpH5ZKEQ8McF",
  "key12": "2fC4F3fxLeMXc6sip1EcEzJXZhdzUxUWhCv2JSjKVwHWh2R5yxis7QXQNkdQMM9RGgU6mBC9in14kb5UanJwH2US",
  "key13": "2CXE9YhuNaAHCsVPwxZygSrbSpiNZq6GdDBEvcz4gkcPWho7P44VzH8XTQDSvCknfAv548EfksPPmtcQwgJgVbRb",
  "key14": "jUkYyq4kff5g7kYUZ1oHTxAK4W4EFGyHmjWj6SNLZsq9gbgxe3Uc8ydSaRnZEkScAyz6QPwkTKKJfdLDRphss4H",
  "key15": "TEuCDjtV4k8ZnqaFc589QgZgZR1uoqNK63FcqGTTGviEAejFCaR3PGaewrxFxDDFeCvE68zAu1jgk874kfqNXqm",
  "key16": "heMdd3A6F5mYmRW7X154ibz6BxED1dgiFyRUB9tdHWaR9eaPDRTm5EfSbcQ3kSGaamqZoR1Lx2gYNjaDcEBarD3",
  "key17": "FDsvxj8N351yFhyUwCM9FyNwo7qukdGcje9MUaJQKU87Y1waxc42uVEEQryZGpwWATFvYZTNTXgoZqQprkVfG4R",
  "key18": "42EUnYKbX9aFBD7x7YU9i5htMqJLTo2Er2paZ4wcB67L6d1QKPbUTcHb21YeGx3Ekav9mQnJZEKYSvMgsgcJFhEd",
  "key19": "5zAi2Zpx9DAVarnUAgjxtHcTN8xYKC8gxGsHUexf8WR81fE27sJDYxqR8XQsfcU8sYfAHBU754XsiyEQQKgHSiaa",
  "key20": "3RgRUoJ9TcdzZCh6exjfZ9AiofaTK61nsAfveCRoUCADytNvGAFwLBFMWqmre54p5d2d4tCocuq1x3N7d6szGW5J",
  "key21": "1xPnLXFGCEJGETDrnMNDs7BKmZv4XL5nwtc8kbm4AfuhE8q8pXzbWKfSURCvUuvMgtGAgS3Zod5WXnt9ah8dXoy",
  "key22": "X5HMApmvhDY8hJ1drpFjMoKsdCm9kRLsyc5ZVY1Wgk984fW1HEVzg5tfhDPxm6sB8s2rHsgVTNas8gnA9NCjaFR",
  "key23": "4WoDqU5cbXqgZTFc2jxSwMzizgZ6ssCJuaYVcu9AxTDwdji4UL4iVzcq4QngzyoCEw2bfdDPJJRps9SGGbZ1gyk5",
  "key24": "3fMpBYWv1GjRDf25zYW6cXLBaTN7TRrux38GmqVW4Rbs9GZocVSiZcgbaHbUMthMT8Cm8Ahby1rTdFfjHoznLMG3",
  "key25": "5Ck5QRYRdN4wcW15WaPDaWJKwh4cTeVuTNEHMD6VWwN6b4jQNRn95L6EGAqdnYZ2oZi4CHzkUHYX8qw9omBoehWD"
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
