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
    "3KNnD3zFySgT6wNz5dVWcJsC3XxpoQg99HX716r4W925d1DWjpJWQohmmszcEX1UZDe9iLi4yHBfjuDhWKQSMRuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cx4E49jrCCWRsNQddsUXd5wieqjY9x7tmoi9CLfy4gS2Ys8mvekCU7rQBjk7uqqHV8bCGsoU3VZDj3FJQnLR5ZT",
  "key1": "5ygJroAu4To98rY9zos4kj4gqMPqtZPJwiqMciAsqo2VCEHALmMWZ9bH7PErAV2horgK2kcuxwMgG778AcQQ96iX",
  "key2": "3BA7x2J852JqPg3jR5yL8jPkRsrBZorxGqbnz7egEsJCKvevyNekCKims7N7ge2eaTJ7a3kJLN2ie8zDF3kKtwtE",
  "key3": "5qiq3SS6XS3PZhPBNrEyyR9mHQW9KUc38iNkFRRo4AxP7aPHzwaL3B4BVw3gwQFEgtKgscbem7dmudCjLna28Uqh",
  "key4": "2qd5f6U9ZbDy78YyjJHkKAxoERntMiJyo9bUo1X2TUuffD4Vfq3QXGAC6RNP3PHXRwXtQ9gCeK5qbsxr33XRCtL6",
  "key5": "4P3T2rnirGedtUm8TnzVuJc5E9QtEz5ZnA58zLjw11LFqYTdWRudCKdngDic4y1vx3LDarmxuCCQLtcBtuqC22Nr",
  "key6": "5UeveVdNBrS49g3oczcSphYoZRrMod4CKGa67ey3NiPWPs1MJWEYADKSoeKZbmDyNhAaV8sW48JJfXUeE4GVt7DV",
  "key7": "4wwYv4irKN1BpB2oFjicRBweZ1qDifx4veXyoAVZYwvdexDUZasvt7Dy9zd1tSRd8LJKGEFiLeXhH3unBSMezV69",
  "key8": "57o18vcn7XjKQFkQWRhyPc7YJSAWhmXr6FxyFUxn1zMt1uSo5TUtbfjDoanvX2HDw1FncSbsXzLB1YAziZorf6i8",
  "key9": "5KFAn31RSEXATo9ZpWQXmXYebrgYs7MoSCCpiW29CX5yALz6Q34SvdYh4bfKki4fjMi42v9KQdZeJWokHSSQPCaN",
  "key10": "5diGuo4EJ9YQKM3N269kkqQ7p6QEo6vAAGLZppyR2fymJDAQfEsHYKudgYge7CM8emnm62KogYzsfdzhn43EwQmU",
  "key11": "24q6ckNxsXw1pRxRguVb3s2NgpKm1Y2t8iR6buYBPFN8qeBGGxVMr5qubBSjgMQHzvKhm1MmSW12SMuvrVfng2Dt",
  "key12": "3x8rBNoxiq6gnQaqKoW5zqEr5gGLZPezviq5ZZ4ynmrbJWDza8Qe4fnvnQHuXzmbMX3uJfJDB5iqjqFZ1rnrXatL",
  "key13": "5BenHKfZEj6BTowdf68qdzNWPW958nFHAJ8hSCjib4TC8zWcT8mk3rjWHZFqCLDaZktJ5wY9xfgbq2gYTYfy8fSp",
  "key14": "5sctfvK8MhkUFnVeypdx61bKNCRpYjzW6eV4BJ5RStALWywxRgoDvahiCx4CXKPeYrLdPR8GKGFqz3qc3HpiDocy",
  "key15": "5NGsSWxNDsZwJzk6eRNNsP4b7hcavd9SCkzsKweRvDYcBCoaUdM3MABFdVZToHE7cEME7ARx7EBfDMKvJXJMACtw",
  "key16": "4YCxZunmyaGLEmBMQ5N213zJdN7darE5wAkLro8cbvgPMwotoMxa1uHkwBx1CUSm5gDmvX1c7dPnnw8JarUjcWVS",
  "key17": "3HonRGEbCeqpxuVKW8uy8vgT2bZFWgqBLgAgypS47W5QK2i4fzWaXxEmZqkUmHxEQ9S8cTnowqhgDmE7EktvU48d",
  "key18": "anvecpg4isvncarpebv3VEk6t4xPx9AznDzpdjPAYaxeYcMw5C5dAed9MFDwbW15cxqkhCu72gaM97FgBqAE7yA",
  "key19": "2uNZZtrmDc2KLzeNJ7THZJgT1Pt9sr4zLLfRz7QdCuDFWQAfVpWGqReEi8SkZAzUTFvdp33aXQVDeCe8ParhjiV3",
  "key20": "FGqy5WthAgpv8u6VGcBbX2V4uBC44MWAzzPZXeCjFoxDKsAW4d8SLcF4NtFXubpiLXJSWiURPYzkT4QUwTASciS",
  "key21": "4ZzPCJk2Y585C95FVHDt83CHcpF18gh2YTiATLqZ9VgBkvMti1UL4HwHCbX3adUbxLhV5Zkrx8nYSCRRhxixY4rU",
  "key22": "iBkAtCCCrei2ai9ik8hacCW76Fi4iAxpFfRvoSa2trUbngZKVDRZbPUUcxb3ec4ietgLmd8aZaWjQYzqrfYuUTS",
  "key23": "yefuYFAGi8QjjvhEYRikN7GB8nLf4pneQX4ymu33gNJhyfjYQw4kFoAJ3TRgaGF7BkCoGuR9JECxqeVyDr8PBkV",
  "key24": "4L8XA45FhFEMnsx11LDSP7FKvnN9upbefFEYbkKoZLr9fzq8VD3qphjRB5HLKwc3WJqR9q3DRqSA6f8ihtXqpdBx",
  "key25": "3nkPw2bw8tTzekVxLKjiTZqW6hfQpUnD5RnrmCCMDZue1ccmjSQywkXEKaQPEgVmwrXJgtsk4Dx1TTtSUgigJucg",
  "key26": "4Efmmxmp94PVfKRNx91SBGUxFkZftMUxx5wqyLPxNkpirFb6fjGTCSosvWwyrXwFaDikFgwXaqc1GxFQU36VgPtW",
  "key27": "5EG3tppybzKgkxyf3Sb3Uiv15a7yML5MEvJp1a6pA5fx8FwW26A827zpmAsLHKQKWXMvaX8CEHLPizD2VpuJU8sw",
  "key28": "5Av9nFF8qoghDb8HPfDmZhR6j6VdWRfRPsaUxdygYBe8L4JuVyB9S797sz6t2cgpqmC5iMJitKQ69BwyWreyxwXe",
  "key29": "2GHsYMDwPa76yS8dTjyEBmQE1ha8f5iLAGSjipnKL6YBZiJesgyS3AtkuUzMajJnAycwgvfRaSwTn3ycrdwyVFf",
  "key30": "357Dn4wYQEVcQsgM5zDoxAK1LKUy6w8e1P5aqH2kZmcWu891tuVfe7YMzUPg3uLQwU5c3LMGuJ5LiEWQgNCnzHbX",
  "key31": "5zYBDeEFP1wFuEPVzpZra1wYGDyPhJV9wcejV1HVGjLH5EfeumvPfeUSSxb3gUvDCd4ZRYxhzmXkPcX9RgHwDQrn",
  "key32": "4svemxaVWGacJGpmUwMvdXQyok5UzhXw6EqrRfZssSbvSyYW2SwYiiLyiZ6ZkbaSJnTCvQZdWbhDjkAbwWczuQRY"
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
