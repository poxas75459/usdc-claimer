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
    "4pJ44x8cRsPmbHMqyswVt4EVE4Wvsx3PXMw88jPxceUHM89ZL5VxYLnV73i1u2W3mZaSsrH69gxbJ9cNCLrz9ML1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WUSJcKmuMn5X9Xvm3o25sMaxCDfswZ3TKE7xTsGJZnpDMpitRx57xZXkvYcg3sqcAjvRwHYyrJxtVTs15wSCvdf",
  "key1": "3RjSKmThU6aDSfp6tTbo7bn8L1C2BA4wQoU75khdjMeJttET2FKy8q7YQ11Pim8axC1ANLYJehZAEsNyRv6X8BR5",
  "key2": "2XJvaAjhV18PwWaVw1LzW3LANdC34BXZjd3Moc4bAvrGDA6oAY1UkPNTXUWKnTzCFxvZUrYXc3qbRRHpnbAxgWHc",
  "key3": "5wFeUnDfRzgP5nLKJZ3mRZbYj4pnoVenPPrEgW2y9e59CeyEJ1fPxZ74FrRF3JLd4tSpDVNpi4TPb7K6UPDay3vX",
  "key4": "4MTti1aRwXoAioYhQim63kg1v1SyKV8EsMz4W3Q1huQuLkHHTrfAg2AnTCMCRedHLdunhfCCKKSwKFSCg5Mf8krK",
  "key5": "3Y6XDPajN5aKpJL4CafhvGdHwLmaqvfi9CcvGgAEpp7KLjzUmUcU1LLH25oyfLH7ASFTjj62i6kuBiHLG69sv9QC",
  "key6": "3AEeehoH4ctsK96wrdv1oqcHsJJGeKzhT7SEFFsu7qt4NScUVoPHeAXJypj8CNuypRLicYxbMsHuaKXJZyQHCX22",
  "key7": "5ZjxnXTZeSnvA6ZengErLpxVb7DCWdaYqdBENe8Kz2DenQGJXUnE5R1QAiuUUuJyjNyMa2UvqyVByGVTno62Epnq",
  "key8": "F8zzvY5nNQmzMcGgnTGfBDSJQXAf4J2FbZjNE35gXBF7XMK8Q7NJ9kYsBrhyhAT7foi1qNfkA3bK8sjMR7ykMpx",
  "key9": "vwedYbfmbxs3PyjNffj5X2hzZspzKbSPSf2pB8tLAX4TGtphyD4b3EWna3mypxFh4x3HrwoZxpgiSXVfEs2Zgq7",
  "key10": "5pQ272CNgaixV1pfVmoTsfm3erXXe3GNJX5Se7ZJE7XUqUgnLd4aYMkwjaLsZBENYeHYSAERExhsZTo9TTieSW4d",
  "key11": "3WxK5wDwf3TVxKt84RmXPTgYaFTq9zmK2TqvjbY2EvYkHd8esj6JbuYejn6RU1eFz4P2DMQq9UwWeygqzzjiVBgj",
  "key12": "KMu8GVprTv2M7RWHKNkEx1Taaq9b44boEQCVx8pehiCe5EWfQyVUKN3Fp36te2DC51RYPGDqh3vDTF9svHUzLkT",
  "key13": "2xZJ5WZGkXUbwAf2vCg5x8JiLKtxqRdLDqauPp3FP9sxEk9AiMhQ1xysNpQS1ZfBKjqLETT9wqDzB6pQiTzG6nps",
  "key14": "3JoNd6NTj8NwvVUJ9QpVyFCuk6U3BJ6EzAKxB5DuCvF1mR1D9L8By2u9mRnG5ikXT4Fc6PpmMrpNKqcct2mXYgtC",
  "key15": "EJVFNt1vRyWUXg2kxixXwh3H9UPKkyMMuFMF6U3X9y6cwPecqeKZvCHvnV35NYDALegJYK9ffnFMK2WSSNGGuE4",
  "key16": "46psGRBMBQ8bZpH3H1LiEgeUn3SNUbfAXxojY6wXRrrwY1fq48dMboYZYYXuoC91z28j8235v31xMLqpA38sPqFp",
  "key17": "5Eei3CgeZ7Zi5ZpsatkodEWHL75HiYKY6MDG8E2x5KeV9Dh55Rpwi88kz2sJ6GjqwNUS1Ke5YU6R2x49mYcrTwc8",
  "key18": "4EUbYYhsfA2dBhtoiGvtyb1kPPuaiLc16ApJmDLg96XDUGU11BcXdTUvaj9pVZMJR8zmQgbmgYEJAdEwPVUQnGEY",
  "key19": "5Un8cuSQXSVcajhPUckyDdjZfb4jpKz2Pp3GaDdr3KUbBLG2A227jAUu4J6jU8fcQbWj9bTC6WAYEEyrkpG234Xv",
  "key20": "3JzW5t8TSqtsjcTqFtDePrh6zPZwkiJV6dk5J7VayPSM4BWqGqgT66jmH7y8kgVduYNJ8BhkQhHJA9nGwKkAh87J",
  "key21": "58zT3x7c9nDAguLzsr1NHrUDesyXmQrhSTiWujt19p9fzGqGAWmYw7eTAdS5bibJBgAgds6du18yz8tMXhMQfMDK",
  "key22": "2Xx3EoUptQyK9EdNydFV4geTaHpp2PTp1oGKREHwcVMjwPCs9bhpszgjXH5qd5HDJgDpJCTa6c6toYEsGTTCxq7e",
  "key23": "4oGgBUVDMgfmqdGXFzQtd444kmQK1gSet2kSJAKrQc4eJwaQzFsfHmkftEG3t2w2Ta9nf8vJ9EFQDYFP6npeuT77",
  "key24": "63TidaF7K5NsA45rUSH77gHpPn7bFvULTLn3MfWmNZwUZJLcY7kWNckyRiiNFyeiEWDXep2hJ9sg4Q8JRdSTzwgQ",
  "key25": "4gGR1PQmZCX7KG6hmr6krmpghS6P2vyDN1cJ1M32J7ihhVGfUAeqNBg9k3YbKVWabEUvDeVzt2rZe8gfQEbshDFs",
  "key26": "3KLW4b6139FGPjYK7oMBGi7sYFiFThgCQASiS9oxmF6HwgfrMDUh5KFbW3rUeLurs8HCVbqQvhA7duFZp8hRCSZp",
  "key27": "5Fzw8S8v7ziHjfyr9cEq8HKu1cDcKa7iANia124jDn6Y1ie63WniXgsNGNk3NVmbQ4TYtbmmJ5EDk6spxcJsLk6p",
  "key28": "5bZ2bQnwkYGSt2FBvQF6Vs1rfTKu4Fw1jhzdMiCPcBdYLAxYvoRSNiywPcs81X4TsxrYw8yogss1nDExNVX67KVb",
  "key29": "4HQ1ukTW44DpWNoviVpkEmYbGuC68ma1FHUgu9Pui9FmU8zTWpgyT7BxbL9zJuEv6PvTAh7oZFGUJMMuBw7rgvLq",
  "key30": "558ridMEZ5eLi8kVvgSGJxRJ4pjwWbwYhY5iKu4sPZ2YENcLTKwzWjig3ZNPwVcqMTnAkuWLmgWvpP3yn8QN2ngi"
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
