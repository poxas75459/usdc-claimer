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
    "5EC6acUq73YhjZKk3WdaxVgNXfWrYwJ3K6Zeu8cTpR4UVDS5amYRYvRbEbVpVNDp1aFyK49AbJ9k7f3pAPNeQzvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zJTwWAhDZF79hhpFkBPp1dcRuZztFxmAWAuQiBkHnA5pptnGHQt4XeYzrApMGspyPprJQs457zZo4LCrFiCbfu4",
  "key1": "5No3kypGYC8PCmB1zoDpvnxDA3nsaSL2JYMANqJEnCLGWqFMExPmNSVH9SRDQAuSd4PKrTek4gQW3ewKSHC17kHk",
  "key2": "2a2QF3AFxMb4dSZRRx6e81rTExBPET7PFL9Q97ff7L6Am3D2ZAGZEFvsto5yTq89A3yvSyx88fWyhPkBSXSC6XsL",
  "key3": "3cpvxqNM4ewHykmrG1MTLKUgS1uwTCyNgDeiw8ENjVUos9ck9jLBjese4iizB6PbPDhqcNPQD6ynfL948U3ibYqf",
  "key4": "5Qb3KZWri5jLBmEWRSPQ6ZBYJr8WmwtuZCempbf4MNZtKEKn5oA3Cuu5Jsy7Sq7iQreS65nyfTwqELNtUeFJgpRQ",
  "key5": "63nvk6J519yxJELV6TWYr3nt6TWgk4SshKq1NPpeD45FTLmYbGL79tprggS9YZQXoyYy6cXKnr5gE1UXDHATtWen",
  "key6": "29GK1XJFmcHaLwMKKYXofE9C6bCqmyisx56bkz7cZeTTEC63yX2nwbmz9jGSSoyFbW3ts6V8o46DkRErRvGmZBRR",
  "key7": "4q6agFnxKUuohpLouxjVXjjYG3cSw7AtqWEBecdm6zX4AE1V9sz4JWi7D8kkQ35MCcM6RRwiKhPDPUmCHRhtXCc1",
  "key8": "5A4Z6LSDb3o6zhUPA3QMYmwrNMaBuZwjvnUZUExSYHgLxuRGQ1F2FVc8uKqFDQNwgYgGKFKzyNSiVPhVeFn6HwGD",
  "key9": "WnPxwLZBivvuF8QCF68wmTNKsqxfjtfpKPDWzbxw3YMyKvrVDzoQ7jGz9TuFWpsvaTfzJxWCT18piPfbqbpcxoF",
  "key10": "3tWcNRw8JwwhG4NB6HJr48ZJfkUwpgv3ECRpxbUS11LY29JpNrNdm1QvJq99MEmdRMdZDoy2tmn4tBUgbXu2vQHc",
  "key11": "259nWmCuXVmhzjQNXFsxTxPb3nu8nW1q9tDuFR1DCNv85Z3P7KpxjMtS2mqFYDxz4m5ZV7Q3eMFpj2D8sXnuMrNe",
  "key12": "679dHGYq5kYZrnfFva6UE7jvuRQ25puCtbUZr3CiXN8w9KziFvyMaN8vLERSRc7rXHoHJXGSy1dCNTpyk9s8v6HP",
  "key13": "4TG93JDtPhdT7vXGLb3T19anuHxP2hPeAtCx7URdTfvgN9dGp3HCqdXqqoNSyYnGVUhCRSoJGDn5EiHmMWLrHpQC",
  "key14": "3pMAYLavvPqst9NvJaDSRZXnkutum16kFVnTKNiMoKcJfNc36zYot8GTmxgZRn8MWm3MqALm6AVAdZ7kHWbJBvF1",
  "key15": "2YPwdinzSpZbVioFrbsiMcijpf8wzJ3AyRzWtYyJ3GPo9hootMqysr6JBc87H7s7ZT7NPPEH146j9JWFKxoTkCgE",
  "key16": "2dyBxhL7pUqUhos9X39xaFMKiTehWYFK12VzTc2D3zhe7kgoJnGcFJiLLLtia4GaWwQMpB3yeBBFHhvtBWGpuiXd",
  "key17": "3s7PnZAk35w17Ji46Bnsut1vxemSHD8Xbtg12VaJHrikPnycG92z4RBVVGqSyBLdkaTAd1tTjLXZRfE7P4tSXgEG",
  "key18": "5HTGCXCYXJr4mVBcudVe2pzVK7wfusJRjsDD98tWndNsf2DD2PzhrgLPNc4ABrcz1r3W1VsDR2ivhB9dzxn3xxKp",
  "key19": "wbPDR33od3Yj1EKfQo9cxfV46gAj7tdLJhTCesognkC2nogF8DJ2qF7fpLddAG6htqvGYHkM9FgS2KgTY5tAELk",
  "key20": "3sMyYjQF45GFfDf3JdkhkFZSxdS9dTRY8EVKQo3YSRPQ4n9WrCaVcimoU9BaeNwhgkgGAZCVwF44VHDDiZrv32FV",
  "key21": "5drDDp2Mk6edKj7VHTgL4T7rTj1xsHFezbF8BVSNoxqb3nnaxjVGaRtrRuvrV2sRi2LTW6chs5iudrsq1YkZfrjK",
  "key22": "2VXfgE84KW7Vgecvw3sDseWNsCLTh2AU6swgKNBDfQ24qw2QsgDDjwP9HxCEg5ee38bpDVtPABq6qB1EKmECqHhU",
  "key23": "wjfgbtonTgVmSNtbQNRt4pA8Nb9h8c8grfe1GjM8ecwiSb2Qi2B21KsmebLhURFKLCcqpHBHBj62AiJ3gXcAVXN",
  "key24": "2NqFrPo2x6kcmiGhfiVLvVFom621YViTQL7srpc8YX4BtcDHimi4dHRPCzzv4Cy1nBbDXbxH7r7miMxeqwHTjKAs",
  "key25": "5PbTqPMeB7avX6cHC5APVsh88dUmw5ns1TNF2RFdwYVtiY4FmsgGUrjUMvBdXxuomVYcqawsUsXBhtfHkHgHWyia",
  "key26": "K6UcFMyuMVAnHsNvoZ889dqsheYitBcU6zBu5iLv5QBPMUMudBvDppQWQAgfUWeM6nWbz9n6fNRPvPbbvaZHTcu",
  "key27": "5r4SgmhemH2FUYAQzE4jNN1mt8Wxj5SDY34cabBnfo9HBcreSY82dFarkLUpGux1SWyCygZYau5ha3DDLJbHUuKr",
  "key28": "3vjowUedznN8pFoX3nhTVArJrYphH1U84T5TNrdL8DLM7NBoEwaMHsRK62BCAiLg5RhjUpkgpzEoyuiDV4wxFGAu",
  "key29": "56bggCCibJHQFYPUGocYa8DvaWppXbTC6Ud53yd5aTyMbRwJRrZnc8Jkjwoefh2zb9N2mLKx6W8Ekpmc9DnXLoZa",
  "key30": "8vQmM9hnHNdMUgf9pEUkk2pKTAJqtNWZaiFo5GPavwGxcqeA7R5J3f7v6vKeVRWPACVeQKLHZYcX4zRS745hTxb",
  "key31": "PW225ZGfeA9S7G6V8vW11cuxU12nduc5QtrJE4ESgN1KaKg6yxWEzRDkKGeB7oJHepotK3AXnnKSJWTccffm8mN",
  "key32": "5tToh5T28EncLeuEN5UgG89fVAeW6kRWPznuXoLuEJHCXeipc2pYFEcXLeei52Ruy14b2AJW9hjg552Z2shpRBHA",
  "key33": "3YqJYXXYTgWn9fYdtDaBT9FH6apJGbd2eXcnTK1Npx87qhPeezxmR5iu6fFFz2JRBfQUz1wpwATmbcSxxM4mbXon",
  "key34": "5gDVosNzmBWPDKRxVKNJneuG7DuFTyEDHbUJVbQz3qEYm9K8E8ESHdd4S4344ab8P9aCGW6hMQQPxtyFmP2Fw9XE"
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
