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
    "5w5uNErHuyENn1biHc6vBusjnJagvWdnY3rRyzFqMocPEmFuGfxPBmcYteUzbjJvBNqmY9igTtKJA9zzADwKj3ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nrTxN9j31VZDbi4kPKmawMfEBTMJTaV9B3dJWKY41tBQnXvKCpBscQsHmNk566beTt3fEHkhkSBxt791hf9nhiB",
  "key1": "5WJC9iR1Wqxf5dPKQkKC2hd9SM3gp1tZs4wuvhG3FhutDZ1avHHBrwWCGVxusvuFe3e92Y4xeNe1mDm1GpDfivNs",
  "key2": "wrasYbuWQVof1iGeWDEMDGGRsMP8QYucXxSCdMTr6VuyMW6p5eKcKVJp8GVHmP2da1YKKDPLUs3MAouNBdzj9ri",
  "key3": "2qdysPJM94LukvtNJ2VoSRX64cfn2CFmT1f1j89UG4qeAWA5fsTWTAmbSkuzrTb1uzyQs6CoA7yBzjfFi2NUCpCG",
  "key4": "2Lmq9EgtWy6n3UTGX4aCNo16JSJbYWfDMawPEr3euV3vitYQ924ss1AAifdBcmKXX3sYx9829oHk4ou4obNg3A7Q",
  "key5": "42v74iq5KsKPo4UvxhBr5PysFuQPaYENkuVgNLJhNAQN2k9RQdeUuMTv6GAzuty4rgVVjBQw9248X1SCbmVUAU4s",
  "key6": "2Szu3Bp9hQqi75a8SYBFAbzCrbPzeaMdTbiEd12BDvsbUGU8w5K3KAxzB62sCZGx4V25nRA66mLXxdPHSTMrNNW",
  "key7": "2QKF9hK8hE97PRvA7VF1qwFsf6rWxpyWdKfR6G8DfqZgWfC746k1x9qMjmKhgkhJJ5TijvRs6E3hxoAKCnvHfnWb",
  "key8": "5HD6o2G8nQD4aAmEY7LERf5jLiWsE49C7CLLjofsU5PoyRq74EoH2daQ4VTX3kGTfYtXtfdoh6LAikX9sJZmADi6",
  "key9": "FqtmMweWXBM4QpmuMSuvZrAbjE7jAtthDtye1LBWUDLvuJ91H4JTbM9zjXV9S4qKonkkn25vg5k6VJdVkste4MR",
  "key10": "38YAVhhademMfmtWkCFQBdzrdg7oFNYQ2CjikEScLznZUmiVumx236s1Vz554VhB7FUoLRFCmZysTYWAUVDuzBkm",
  "key11": "5tRawUowhWYQttiGZFHmyqEeAuUFPkLy9MM2ZWSMLsDxjHNH6PdrdWaknYwbhQWUhJn1NpoBfaKspQ5YFjCr77Jw",
  "key12": "5pdHj7TEMAB1ufhT7MFzenpG5dVcEhrumRJD2cib9oxKrmx3Rr8Bhbj41H4ctJyXaQnPn6KuF5cFiF5D7qdDqKRo",
  "key13": "5UfH6GNB3ixYKpHmHjEsdvguue3rkVEqhWiAC8sz26wnYc9nFCfRMbm7TMnwFxevcm8s7jXk98E4Fdp4RBgi5ECb",
  "key14": "3MVdpkAyGjwpkZ81eD19KUDo5BxNPnQ9Q84oH2Ld7HJDeQLU2Y4UZ4V8oBEnESXqYMEaiEMwDhBDTeLkTs1FA4Wj",
  "key15": "5dhQUVFDqkAx9c2dBFvBJ7D24Z5qZYZu62teWfVZeUihdRWsdh3fPqzSjWr6siBNJ1SvXSj8HpFEbCwRjoXfxN1T",
  "key16": "zCN7crMLyQNhumvN4xX4dfZeuxUZdz9jqwin59tu1WghSuuP2db4L9pwcAzqVBe3HdCas5DGtgw88MYWVDUmMbg",
  "key17": "2XWx6YG22Hpuj63NHq3kA8Gp1VpNCzfePRvPQ9Bj72AdJPK1pmiwTLfa2cL43YdPzwjFwheq1hvmrb3E2mTZHSiD",
  "key18": "31Vc5jKRSJSysBsBF5vowpCti194URMcQVYptVym2jb89Mi1tXKLUR5F5A5kszdxS7Mmtruxj7wLMoGYyrFJALea",
  "key19": "35epmZKwqJy7zWdXQwapx3hCztUmxNUBfgB1iKjqRUkN1cNtGgda8JJJWGvpKosshHStp1Nvx4WsVqX7PyJ1XbZj",
  "key20": "2sbxV7BrhQJQXddpp6YP3zbQPJnZLZiV6CtpL91iSfb3YS2JzR7zMbicDKXLe4Zi7CfzSNzFVig85emxErw4nzVb",
  "key21": "s54gvmibU9k4UuWmgRzCUhh35jHT4pJyFW5Eoe7bM69vp9JAkkQsk7eDbzbjzWPYycwknpGeKbkFcK4oynwK6Xk",
  "key22": "5t3rnrQ17H35ESXao53SVjw2gVPfTgQ7HD5YHqNKjxZC4gk2XBTwPj6Y9eDbz6SPT8jTsh4rWrYewTUr8CULmG8d",
  "key23": "tTky3Uz2XgwFGCFpo22peZ6sfYyxtSbbHqKHbFHDbGGiV8JnfzQfrwTXkAdb7rK1z1PWLdsVhNk8gFHEGuhyKAm",
  "key24": "2S8PQwowhK3yutFiTBrQoZbD3tcHNxQ3gUdkAAhc53mbusqZaoALCYqHDutybefwLZ3yfz5yM7KxAjGUsfYGun5a",
  "key25": "2W2AA2gki7w6emRdr92aGBHxEqrvrBsKcceV3gMJ1KZRPdj6mwjkkTJMh74a7fC27jWJAiXL5hRX5B7LbPmjLuoF",
  "key26": "2znsacFgcJUMkNS9PJn1Gb3KZyLUhqKPaExLmaiEqt8HCH3j9ULz1YkYdXSvsia3c8WA36RVuQkH8mnLuwdGsRE2",
  "key27": "2mZayhju3oNY8Q6KCYygjjXR3KQCgdxxCmzbK8vNEErMC3V3Uzo2vLNx1oCB4zowR7oTv1PHCPKwgpU3c1rgJwm4",
  "key28": "3hLLcZJkeqWLVggAtuGtDToHqF1weyviGQKHoanw9LmxjsAuBjcPyMaB6w7sXndkejymQBiFFTdzh3kFo1Xtwvk5",
  "key29": "2GYe1Ga8xBdMraU7MCvP8XwVMJ1pnTAF44ihhWypT5eeXnWK37iAXshDCnthDGfHw7XECVnKhhhv6fEKUGRuiyLb",
  "key30": "4rNBc4nwBHUbGG4QdxECnZzSPvVgHBpEZq6NpiUVPiK2iefGQbgduzY6t7MprpzG6DQ3h7FNKYdkKsPNEWCE9UFW",
  "key31": "5SGXHkBisLzXgPLYkRtXKMG1mqYAoT29y9WSLey1LzV9VQ2omiryGA4Q7K47qwV4EbwLKVvPL5hBSuUqedVMTqcZ",
  "key32": "3wMrP8KNYvvTScpvhoy4gdbCU9GtEHRV26yd3Ja6qFNfE4KNwSJwMigQ26oFRbh1kzxQ2FLZgCyDQFakp2jAvqSR",
  "key33": "4p3S8BfHdDX1EzFJvtRkoWdbudXaRvPcnYpxTsVgkdg8kzpC9nAsWtgwD5guF9Ep1wMJnc8A7GaBeLLPv4jutRXd",
  "key34": "5XApRi9jLAtyxAua4ff58EJwyVFAsHL52s8PzKADz3tuJLuzuPY2wtm6NAFUy7AXhfVam4wtK51trtMiJA11uTwA",
  "key35": "3Js9cX5DCLaWmzCrtudiQebBtBiBRa3d6iq1jbzxeEVZYymSwF2eSHGuNmvxxx3sbg8ZoguMtArmKeodzQsKGsVA",
  "key36": "4iDEhbTDUNtAd1efrb9Vr4TQVf5G1Xq1Pp5AV91n4VCfK5sAm8cDG5aADLHmJ2i2kNcprLQMgY4Pbvs969z4JYEu",
  "key37": "uhB4V4iZRYMtJoPZV1aYES2w8wa9Jmjr98ZEUFELR7HztM2qbMKFCANVGmk5DrQwbNifbfUTz7KEYc4Ls9kvgnf",
  "key38": "3QtHffKn9EmHAeMUwxkGbUFPubTjPE3mcs8VFsALRGYzKoWSmJzD889KzKnVj6H1AjMbaES2KgKkw2bUzCyHLQy8",
  "key39": "guEQquHaATEWPZYyoTo9X4ddL8ES14n7ryBWxSu9noU52NehqRPjfDqUEM6rP5nF7NjUatFNLkmzYaRe3Lrzqmw",
  "key40": "3a3MGxRsQpRbSnECf6EDTam6Z143RJ7yPG6YuXQyQde8zUaGszd78EXjWvz5RgeHPRWW5ZhpcXtHrkrkAA2xK2es",
  "key41": "5KGvfoot7RQBBWvvQMQNgoyWJbjwHjMgpAH1d5CoZwTgpVSFZkSwAM3tbcZnWCZekiGr7fkkS5STfe95aeuZkZeD",
  "key42": "2bMWjS27iKLwS1RZ6zYPG4PXnCPFgGaYE7Jh82TW1gz6wo4mweoL79DeMwWcexHnG7XdyA6JMmSkUpUZLP9XoSu2",
  "key43": "JL9ow2XdspKHwsJqYNEb7tKgfBzGpnA6vupWYP6ma7hGKzupGhScUokkP1mk2z8Y41HjhDvb3C4MCWK2StDAe8K"
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
