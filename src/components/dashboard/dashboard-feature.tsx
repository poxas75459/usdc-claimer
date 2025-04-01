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
    "4UMLNHSVMazXkFRAhhUe1g4i9weA53VAbAfaw8bN672xgmKSaoia3HVBW95iA3zWWv4EKMNBQQV7wq8bEZxxcjts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NZanJyf39rkyMJaGsefJk34FNNe5CRJ4mMxJm3eCuU5ttjTcZNKCkGdheSUAZx1zL1a3gJHyuZnZEvHdSmDY1qj",
  "key1": "zxhY7wzxkJ3FzvfAw13YkhkJnmAXN6YPhZ2Ufu9NFNDCu9d69B7jwW8eejddmcfqVShGcTqsAY5pD8TexDyeN16",
  "key2": "jnxeJeFtENG4uqFT2q9nM2gjiiBpRPsrL5qaT4QuX71WrRoXY5LLKrqSoEjh9ZRxoKj7o4aqmrY2QGW5ruMHB5A",
  "key3": "35wBkVmQqasYULE3CLQh7SB48BYcQFaMVbVsLpSu7oTnUK5wYgEPaGEjYgdnJxnmz1Vfn6WkZZa7ZVA1edwNFL8r",
  "key4": "2CCwXNNqp4x9x56arzc6gBEZrDxVw6Y37hCnSpaALixwZkrDywvkZhpkeXCJnumnG7zwnzQUdVaFtfQwuTdwoHMM",
  "key5": "4PxMf1DPUwgxPAwS7h74fso2K4qc3SwRDWAYpY8ADB2ovvsPe8Q9HAEYFqcZ3mePRe6R1MHX54Cee5kgdm2FmfqM",
  "key6": "5u6uiYX3Cuj6hHHrBP2L4iEL9swjfRVHAer3Q9JTH32TeTL5iDUEZtfhwnR619aETUzpwBFRzRtegvUKeucXyvrX",
  "key7": "2bLVSsfrFdp6HySSKbS83mU4ix1KbCW7PcKpTFzjmhMX26vSHwXy5SEJwgFktfXiFTxE1ggRHNKEN7T59LFgppFa",
  "key8": "4nA73BdGLbxZSmvAX9ktUABbZ7CPSEnyRP96GdwdKHfwuPD79jmHYnrpxntkzFzyDshardbQ7AR3g6DmWoEqLZTW",
  "key9": "3NfTJgDiGuEUSd4wYBAUh44wgFvbLfoLjNV44YAjowNwVcfwZbm1g975pThDoVmwnBoJFe9SFwVyAh3QyA1MXVNV",
  "key10": "31q8h9WSnGhexaEfWSMdH8AVcY3K5wtpd7Uy96Bj2PguxSK92ZZj3VfFSbuV1ZJrZ7hnTCwDSyuWnhPWuza6DT8m",
  "key11": "3fETm6sD7fYj471sAJLActsRAZANaxQTzoJtUfXDk3Ei1skNEPjv3azY3K42Zjg1yQUpZaf6MFDL1o46u7eJ4Nwr",
  "key12": "51N3hQrJzhCjC4mB42YXTgFxPJrGjRBg6XFd4LaJWySJ9ZFuxjixbHjmFmkrHpANWGQEFkVkvDPwioF4pFBR9q32",
  "key13": "2NuKbHUUixsvEdA8tFMQXfYsZ23gCTH4F7ekctGSHn5Per9DQ367WUswmAPcY7td3U6kAtE4quLApmvBhFrfVKxD",
  "key14": "4Sfx6n59trPb2QnKTLvadqBTm2jKx3it7HD22aFZARqhh3ozo3rjMsR8so491Ee1QFePMLcTKVJDTHoo9bxvU2SM",
  "key15": "5ufxSw7yzeLiBaoMWHCGT5GmXxd2wfKXzSqxTFrJ3LN2AYJsdd9RSseuVkmNuuBAAtMeN1N4MTHGTNDUW7MkYDET",
  "key16": "3fxjfufh53mYzzDLtonX8TZStgKv33B6mqxHpgyCqZhPjuVvDWwdEbRA7XjnLb6fzhhpPcA264FhvnYRCgBBdsYi",
  "key17": "LURa7KU7XAtmEQyKgR8NL5aiMjrKR5fqUdF79okfbMgFNurTr5AiPJtyRg4vDQDojAwoEtoupskeeKiv8ek1XiG",
  "key18": "PH8R5ZSX48wrY2YvXKQSdTyQqXKa8RxUb2TJ6vxFkrBYsXxw9hc4oECJvPfwZiLXypmDfgg3xWvmEMyxf3t9xdw",
  "key19": "4xzCqn6H7G17V1WfPBw81aU37c1uUDjVGnn1iUZoKjMNs1JsidPGuRj1JUwXLoRwNJrCi3LY6zLTwNBC4skEW5pU",
  "key20": "24gQwisrTxbqnnSwSGJAvcx1nHFtDnjcMrfR8jreJaygnvxuRuEnm7sX68vTn6pZDJ4ZPcs9e6wgwE7kmVVwkTyb",
  "key21": "4bYXeNbiaxLDpUry1gbMhARBr7rfvEDZ6xji9R12GSU2DxezLwKY2Dc88VbosYcK5hcxFvGSM523LycxzkPoi2Ti",
  "key22": "3JMiawkjugDEfgETV8ipJUQd5q4JxL4k8vGr9MhtA8f4saVmgy9YTK3pWWDgMMPAkhyCN6TjdCXaUsSjVRWfBtwM",
  "key23": "4DyyHAkmDQVCEvKWQuoS3A8gT3Esre86TqWjLqo6ArDxmYUCiQAdQKncsbAbhsY6QEU7PF1UBu71ZpQjXwhgC5CK",
  "key24": "4tM7QBbeLHr5YphZJccercHks32z9WVktmz9TkUsou1wT6ysJrzZiiEjmvD3NfrXY9qPs6m2ts4ShBpiHwdNnXQE",
  "key25": "2koT86JjWUNmq1CLEJWugtjm8gHzxoVevzch21MWdhWRyeLaiSr7etDKL2ruLHj2TQEeWUnFrK2FRYDxHUvy7qgh",
  "key26": "4gBWFomcDBtKxKuCmfobgE6AuoKEVjEAfK3DGaaB2hzxMjCwHYma6d8VhX7DpZPyc46USCzA3A4xivGkoigT1LAX",
  "key27": "MsG6fTsv37ns45DRQbbuABW4NxX5ziwMvLpNZ73hF6LwjVKDJb5pS1Th3hCfaHrUxzQBaBbVH6bTqkCHTt4Jggp",
  "key28": "ehrZT7GmbVfto1VXq2mawSFVm4dDCL7jbJ3jPguxT8EXDNTLHeiv6djxjpBgN5Tra4hR3BrLeM4jHEWteNMHofs",
  "key29": "2TqzLkxH1qvD1oB6bzcyGJgDEvNcNwXLspKhXRdFxHNDR3SbSfV1oWA8KMWzDsWTXHemf8qq7LQJtapVvL6JB2HB"
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
