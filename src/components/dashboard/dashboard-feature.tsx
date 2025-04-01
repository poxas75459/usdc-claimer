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
    "gkGof8Gra14Cee2GbocXzWpNkNHEjRMroXRvJ63XC6NNEmKPZekFrTNwKx5iXnK2JnTjDo3A9ouotC5dStKEtaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M6c8Gz8tQVJXbMxoHUsKs1nyL7t1fXuUvkbGTTkAtUKyjZ4jKkx5viogCxFmVErpTVn3YijmqLNHS3ukLv4D3Dn",
  "key1": "3aMu7cVSWhfraU5zgpYKypFTzKRB3PWk8VMp6qtiCRV17obkEBUVPArRT5eSkxjs1C9gvYkyVSMjXhwMdgPzHQtU",
  "key2": "5XPF3TzrMgagVAy8roMMDdiF7k6HyY5Gxn2rvowygc5xrUQepQiTGyFzVFaAZiMYNS2QnHMNgWFn9Qebexew7iq5",
  "key3": "ZQfVCQqKJa26raVaSfUnGRh2YYV99cdNVnc7MDxAxUo8Uopy67zAqj3SHCJGT5N7TWWiCifjRfrJ821CMXjJDWX",
  "key4": "4HVdzWVAVLbGxG5sT778NmLq2rJQnAecj1Wkd4M23AuuaPXbcrpuMk5i3hX4naRd6LFNnNt72ZNVTk1ntQR7j6C",
  "key5": "WQKy9xCYbwL3c1yKot5YWZzn2Un2FhZ5LP4yudjPCfYAH7gYfcUAWLcLfn9ihHYtGKtYg5abqWkDkANvJVwDuZW",
  "key6": "4nVjiBM1UT4AHg12ahLcDFKmvRXKzJxoPFNY1VCC8wP8cJ8KrJ1NBQb3D3wFhDXYDpWMZhT7m8FBkghDZq3JCWKd",
  "key7": "52G6HVEF98AJRLZZci71Taju9fr9i8UaVBZer7UVGi6TUedvZb2XnMEhzSnpPJ8apeM9RsvAu9e4MQqEquvABBwk",
  "key8": "61eoKruX9yGzfHA2L8bPWhtC2e7pB22y7VZtpPsbhzHc7g9vJfq6wUv6YBuN5AKDgHj7QYgL8WskexXv8aD6MTBQ",
  "key9": "416V5KVf7DmGPD667D2FyRPFVDvpkpyQscVpR71RcKr3MU8tbPWC5hkvXCyG3KyPo6WfWPdLWutHq2zviAxoxeuZ",
  "key10": "4WQetjUr7oWneBemQadZar5FBw53dRHjxcBt9u6Hsbq3vGoGXEVpQ685QS91Wpq6DYsyC6FapuYgzjSqfJLLz9b4",
  "key11": "4T6ViBabxvDLDzWgMWKqG8RWp2Yf234V2NZrF5t9MzgCHuLkC4hm8W5dFUSJQRWeT7fdVJRmcKjGk3AMcczdptuW",
  "key12": "2Du9zrzp23u4kRbuN2mEQq7xF6isLqo1oRn2Bj1NrjLa8qaYuM3QTJgmFNArdcTXGDpQku3zt9AJo8SSCCba9mQs",
  "key13": "2ievs3ufmV3oxeyHr5EUgQRmKmZ8MVKSS6729QyKxarkFrQa8saUX2ZVw61YLc2zD5HAiBZgh5pm5pzj3dTVPB2G",
  "key14": "4o9psF5BDfWFZfEqn1iVcck7nYGRvBknN2WX8XfKG6sZLLrcBysodGBALZsHnzjXVPH8ELSx5HagnbGh8cBU5iwu",
  "key15": "psh9Gwe5zbMb3pkMV6DuhgCt3m2VbMbcpdJfJUvw7M9hsvx7yp7DpUW3c2PerYTpU2tysxvqEaeDXu7HjseXoJY",
  "key16": "3VuXgRpYmMNYgWpihWhaSk8tHi9qNh2j9H3PCGA6tjgKqzHrrAZeEhujnkpUyTWLsBd68cHehDdZZo42Bjje9bb4",
  "key17": "hCVjGGFpe2WAecsDGQeoZCgouELnveg8JiUKcwQ15DAHG8Rn1v3wdR7pk1Ev1aWeFMJs65Smc7JY4VGNNneLtkR",
  "key18": "4LL1uKEssQ5ibaNt1ZKkon9yfNpqRmooZeRhAAfe9hUAqNUYNQUcWvc4tZZY6FhMa3anTvpRJiWY3vwQ4DZuefW1",
  "key19": "YSPBxAVfUgn25MRS739PSbtvxDVFi5FfQKkCw1HTdSWMMZ3CkMXfdkptWyQudTQvurBSrs7T15XNZGtLNS1Cyx1",
  "key20": "42wAqnuUdAW5nMX9b4w6fcaPd2FoY8DJ6iR1fg6mSq6gooXEXt6nLDV3BpekV1XTLs8544M5Hfa7VMkVXsyDoqYz",
  "key21": "KRB5Pw1LRD2FxgcDJpzYhR9xs99qJHjYBPSVo4Wm9VvHUdHh28QNdPmZbrDPosiweuZN75XRVhiHh81AymbNbi4",
  "key22": "2pcE7uFqiVxHZpx772WwJRo1Ea32zxSeRWNKU9FC5r69EVhFNwiBwvaYdvjSJd3HBDhdpWW84kxir9VYZZca2Fv5",
  "key23": "64hUndsWdiM5zdxi9nrMCGrunjB3z4RG6uYmYaqUFcCeF1Pu8LczchUGuqpTR3scfA2hrymsz8FCCwQFTHXJqJyD",
  "key24": "2yyXZ6zu3uhpKy3ELhoh25LUtBCLoZNvDAtWozhdn89orcEfW6mbPBpoXSpstYqVEXEdsYcTNBE1oK2a3rbmVXFj",
  "key25": "3ddYNdx54tvqLkjnz5Yj6KQEZBWcZBuNFebZ2eoB4n2kQdKQWcppajpBXaDEfbMRZaYPfCJrTwHsuavJ9b6H2evx"
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
