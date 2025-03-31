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
    "5Vhj5m99ejePqJwbTPUnbbNYZSkeKti8jhCw4VamG9Tsf4SvTmonr1cobqADYhyzHAXuD4wqrWgn254cPGNYjwha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XfC4oNar1UcsGefjQ8kwcQMcZ678VaCX3vefNBjj92q2gCNUq26sivs61V2ADanhMo9CbyUtQeowyJND2DiUZ6n",
  "key1": "674s5nGX58JxAHq6uuBpt3KGxgueDrhJ3Mh7rBttMRhLxqwDS6RL7iajWG6mRCYzABkU59Kt4EGGHdfWXspWB47r",
  "key2": "37LDzdQiLTcoHstrPdYhYuB8i5kZVCJqjPbZeVTxX3pQ38q7Ly15BMikH25deMj9Z74PwFaJ4dUY5AeCxdBFFaqr",
  "key3": "4LvL7pE82Bt5JWq1dLv4Un93d1Ms5jYzonVadLszMFDHvkTXW68G9CSiByTH4bGKhDNZg1o3oKq2GQAorg6Vx3bC",
  "key4": "AnCYKJzFoYFeDGEU2ot7cvh1SmEn2PAphoNc4iB5ymjnzSiW9SXsjbUxCjPWYxXxD444ufudc2e4rZznZaUgCoN",
  "key5": "5HhjSXUzQMnPpy2WoPDuG44RwBtSizDPF4kZQBwbUiVk57jhXqjaYqeGbiU2ttyHp5MCAiLB1iHECMjTC3obM4ux",
  "key6": "1ATPXnApvYF8wuB5ZtucVZCeXCqCW49q3mJo94MmNur7kcC47ewbRts3JMskCe9b2xfrPKXK16H13jbD16iNDjf",
  "key7": "3wY57y6p5ttxyeg3omhWWARU2XaZsSGs8C1L4RfW2eF5AVicsx7CQGHE9epLAX5sKhxaM87euqzt9Qk7pQHjzzef",
  "key8": "2xFsEohzpqxs73eY4NfnmTSLvtmXmkrFQEMy2hXN4cs1GTiKS5MwRpazb3DWnejnuXdzSHoKwgznMPnmWv9VsLPw",
  "key9": "4z7tyemydeSSaNVuC7xZXvkcfR2WgsUbfnu8a88cqad3a5KnapdTY1XMN5vGKcPnTm5fSbD2R61YJ49adm65f6VA",
  "key10": "8n48PbZZ1u1UBRYAJ4ZRfHQFTg9RikLsutxcYu1J4hwXHh4gVW62Gux3ZG7Z5XuNFF13XAP99Bqy73VfbfSW6cK",
  "key11": "2uL2qNEmnCBg9aPTdocNSZXkGJCtUjiSLXrEgYfS5gZ43tmmfqaBqYFA74a7xJ9UcGin9MKPdNZf8FKagpyDtBWy",
  "key12": "4cgutFw9tRkF3ew83ivdft1yoZvvAshwB3Zrkg9rvWxgtTBaRdLMN3x3EGs9459EWhh9TuHRvLRBKaLRLdasuwUv",
  "key13": "3RepfuNf9d5ijGBqvwzegqY1NsQHhq7Jzkg877wGAUPSEZ8nXihM72Cx7x2FGSk11xEHHderW1Yn5J2zHNa9cS8C",
  "key14": "5KEk9KaDaoPEWg8oPayZMHbv7mtaJa35JuQuC5VmKysPJxqpjugmT5MLvRbgYyAsDKjLoEoZxHGddKk9REovJyji",
  "key15": "ZUgqiuJ4arMwVFYCsMPyw3ZAhKb76CrHXq8euGKWtN9CCnPYmSnBDdxW2NA6b53oto8rLVfrWMHodf2rLfNdBoG",
  "key16": "kp4rxB3hVUiTrvLmFeL4A1EfYBL8R9aCN58spDqfZJydCv2CA2gFjH9iHkryCCjT2CtjgEqYrEhHGCozz8e2KDg",
  "key17": "cVc9jGPEsEtQDhP9wCf5LaB6CnxHQvKp39dTESdys1ZVDHDYGEySBG115qxjrR7Gn33vsQp8GmvbJDoRdW7MbTB",
  "key18": "5WsJqMfPp7kCxMAuiWKLu33zowD5y3hKB6XYkRKrcZiZR2BtttAvwropPBwJtYJSmXAvGPZLShMzZXAp65HzroSY",
  "key19": "4d1W9Ws3Y3YJHMFNHNjqnXFwYYiNMsugAN9iZaGEgtBft9rxfeezfiR2KPsZBS1M4aSu4zfjP1dEDT6DhgzzJ2nR",
  "key20": "2rAwLo1eCGLe7GefhZf21xoEdW6uKvqUUUDvDtYAXzZ5NfUspQAhdkWLM2Xs5W1qL3LKpuzYL69dUuAphrzKEeCc",
  "key21": "5C6WTsHJwk7PyaUn9gPBsd5r4ibJoxRGfzLxmLJfq9BiLFFS7Hrb29NwnQG9houNxz6MAk5JFheLpGb8axGrtxeQ",
  "key22": "3CRxF5V8oW9BEyFrWXDVfy2AQRpD6tgrxvkZqZgw1Zgg3xqWJChJq8GuBJxRxzpWBgVy8B4AFZzW2Vy4PNQXvUSa",
  "key23": "4e8jQqosFwawQDZmnYVmuyUNMWjyozheFopcTVwh1hNtsbhoG3yKR6MunPNTP8S9bzAyUAdYm65FrV9dL2fkdfbT",
  "key24": "3VPZfz3FwqHvLzdbthLbRRWnb3qCY2iXsEh1xkpyubhiLA2r6gRHFx3j51CokwKJrX3rUfxcX8UW4SdJYQGFk4F6",
  "key25": "4P5GdrTSd6m4GwzC3aJhisVdvmRkhEGMdErNMj5MzyxqW1hKP2MHvxfR55SiAXp9g139gEp7NvWxpgKqJPfi9Fw1",
  "key26": "5KvmxqJKN3egpuAYkncHZnqXNttCuPMWXzixCupHRgnJZmuZkwx6mtDXdxKy7y2vAf9UZZ7WGQLv3w1FzVAi2iZ7",
  "key27": "aUTRBVRGkt66C1moLNnCGQVUzB29fbuwApn8EfegMbVeACRPP1RHVCToUwro3j31RQjUe8dYdWDzVBdwJjQ8bHu",
  "key28": "288bBx6NwtqZVdjcPCaQohtxLQ3CkMpUggKes4du5d5XDgfpbxPT91AWLUh5EAV4XccnXsAfjgJYkumxuHrGbRCe",
  "key29": "3iQZX81cUzDpathgbkggDz5XD2b6Rt6swvnF2a2sFeE13NrdUd1LUodgYDGRPuWF3MiMKrPxmyAJ2iryyhieTsVS",
  "key30": "2GznPd3N7yfy7RHWQNovv3zJAoLPfhHq5ETtrbnbH7sa7KEkq8wN5yz2z3tv1wDEuxURZ4yvEjSVGTKtU7zKTjDq",
  "key31": "47PngNg6KknkdRHcZGxibYzT1KSSTZiaDHU1C3pKyi8j7Kdqi29fxJ629vxuuDzAHYdxjDAZQGomo35ouB22WKNs",
  "key32": "3yMiWbaTKeGacxNioqkSNCQsDVC57eGZjPJNsFNnRLUWj1abFkZ3yE8PftA9v3LkDaSNgzPKHgb7pKaR6kPhKGsY",
  "key33": "4QbzTFJYnoD3vtKfSpsHukNhqanGGGzc2wEQs4bo54fuRMdkcoYHgTdjPDKqeajkVjTjukEWhKuMJmGunLwgxtLp",
  "key34": "28JEf42XuiEsQfY1QHNT8mTkXfstugRAM7AKtpUyP6xSVV6FFBrLqNfw5KDDVirqYpkQn2pc3gKCRF31KhpggfJM",
  "key35": "2AWTjzANUU5nHbzLauXUnw9Z1qBe9JYxQ792BeP8n5gBGyoFgzJcBUEjPag1xkhugRSLmzzfZtjs7AUeJ1TvnZ9v",
  "key36": "xZw4fGQ8a5pPB5jN4iSydAMZdRG6E4YcS1SYCjySMtyBoowBiYNthhaMcbqn455L66LwTv4jXyyhwxgQk7NpzZ4"
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
