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
    "gvGshten6sQbkHcJoBgekuhcrmaL6gXFLprvDBgcyjv9FUxxksvawPaebcQGrBcHFQfLfSeATvRerD1sH97eESt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pS4HTVrvRhue8bKhgqtyvgqE48EGhaCPkh8sm5Fpj7ygPmruV1KZqGEhVm9EDxs52T4XLo42eVbUVbvMKNicug5",
  "key1": "5xhH6qzZn2wTDFt1GPyRyMnKvRoCVnyB4TBcqtBk2nBwwEyWdnY3nN6HFE86EqtaS4soGFgKYii3pCi9EPfdvzwV",
  "key2": "5VA7EvgYVpp5rnk1ZJ5L2Sjawz9vUA1PkaSwLnN1pwmVsLTLQcQsnVs6J6Dr5QqnjsNA19fXRE2yxLdofa1CpTwv",
  "key3": "2KFiPb6MZqTfNJHvUSaHesGDE2xPj9N8dykJtZDeWEQdCZhyd3R4Q1KQrH48nojzvrNQNi2zjyimfgyuzkzJEw9E",
  "key4": "5CrU9424m7k8UEg4NwatuhSS9Q8w4pHWRopWKZ1N8Rxb54ZJNZmknL4XxVHZGVVMvJKDHVTB7mRmzvbgyGmdtKPR",
  "key5": "47wjm3qwjKyK3Fw4ASad1fP5o9jZPKBqPj3N1vH4Cu9sr8AFTbEQ1eqhwCpNDEHUz8k2GaTEXnww3wLF9Z8oqXmU",
  "key6": "BSSmNxHE5SDB1WeaRWc1pcxTyQfv3XnSrc3HVo2vxFnArf2sMDkYSo71Ycz7QkaV9qwak8P8sUPhw7KoSyRYMmc",
  "key7": "2GzMDroQQaPpcHVZCxkeTXpKJLJ9RLPQwuWgKogXmVwYTUApiAvZ2xAa1VwXjELmvVKywtGDiQLRsi91UE2vSJCR",
  "key8": "4ckPNZYAq9ZrQoUNgHPDF3QhX2s1zjCj1EjtVJSBshzKcv2zxy5Pph19Ck7bY75dwG3SQ1qCv7krKCoNxwZgB2tB",
  "key9": "65gdByc9d9sPAcNV3H6uNJX4f93JrvyYMcRhA756pKnQzyXWyvuqzX3Hs3TcNzcj1kNiMyRnWtnKB8qkNN28HgFs",
  "key10": "C3sBW6zRJE4bYhziJYDG2gFvYzxVZGLVaJVsRiZnFCFivRqaAxEzH58Atc6Sf6mVNeLEsTjAqsZEjAXaBCp28sa",
  "key11": "cKjNEktPqijhRw1DBY8Z7cEH3o2N3VsFidqv6unMVeQD24LkUUMQUR15FoUgAT6uuJRWvon61dHRe2i8e3iPUPU",
  "key12": "HUZ8sq4ZYUUmTDU8FUhaghdzWUQFEMxKBe2fqBcDDuwBcttvFqKD8WMND7qKDLM1GL8Np8nK9b3mhLuqBsVnh5D",
  "key13": "45Wnhr3XeiXwW8dh1LPQ198QJQWbC8UdJWA6AR1DxSWkhxM5NzbWKJC1bwTfzr2CEhbDeN8p3ipi74HTYKxBmMFM",
  "key14": "2vvxreEkWaPDfVRbzpr2C1t9hT7UAVxqxZPCy4zNKDuHqgdQ21Rv29exKZKMa6yLB7jo7ohGFoVbDnyfKpV81z8T",
  "key15": "2CXAZvuKsbVHeT14KtxoatWMXrotPhzDjFVcDwpp9143mQFvEBLqHrMm2e5GYTMJx2Q4YEF3GfWgvSZjUdMtFX7A",
  "key16": "4zMGvce5NbrQ5bpsgcbmBAHenmU7eEQPifQA6R5RmgLpEUTz9GAn4jAajYsRJdaXbYQUZ2sgTWNC9ky4cWTEtZUA",
  "key17": "4TwCe7nebnqbDb4rXyLPCHM8G6DBH7poHGWeqJEAhSkbqgwNK9Ji5o3ujvWHRXX8DrQ5uZ3Ke4M6nh9gp3mRdbpx",
  "key18": "2YiM7cnXuU4YySAT6ujgB9iuoxgoBirCqXNe3ZD13VJEoMzwazzsa1imSvCcMtRMA6pATdHguScgnCMu3q5UNXyd",
  "key19": "2tge494c9pfrHQRjtCBPqbvnbV5EK9UCiF6kVzceY1bLJ5PctPu9GzGWgaaHo9w14TajpYQcJJU5H2PGAH2h2cfd",
  "key20": "5akHRP4pyWA3ZxkcFRuzqTZpsQuYhscs6jG95YA3LdqN4uQpCmB4HCFDk1692LHSyAcaaKXpgGJ7EqjFWjygHSg7",
  "key21": "2r1SyvcR5DfkL7VDgUcctajYkFEp9hqpxysGvjkrHrvk3BpCwgndDXkjzKqP1zyvzhkskzitXRMBS5KGDcPc83qn",
  "key22": "5zhqSVyokpHKQ18nVPAYcBQfFFsoyf4BLwF1Nnhe79ap5Aib17hDj65L25iccKfFquaZECFfVEc1tVvU5uXfKChv",
  "key23": "316ag4wjNdwoZFK1CYo4i1JCfgFF6qbdYmHp6GMErFbeknWaSK8SuLZGByvCEhKeVhJTQSnDrk21BaoGhnNmBrPQ",
  "key24": "635SSXr3M7ShhuJVgwX6gBZvUZTidupVvpKGsS74D7WpEuAC314rTLDWPtARwDg6SuWkQ6LALq2ZT7JErgd5TzWd",
  "key25": "5DMt4Hn75BQinumbt63S6ZGz8rUEcGpn1h8SdWPmBk44x9o9mX8Yj6XoBctPkA5gENqRDBzeizEwniYUXDrGMmBU",
  "key26": "u8vfQcNzmBBA5H87M2gXBcXe9aV7daSSjnpvYz6QRnN4ZMSdxGnrxRjhRWNC4XyNVV5f3VCYKQtzEKPamapFaeD",
  "key27": "2VYUMLKrPgBkgsoq9JoEKSjJ788fUrEHKjPhcPVt7n49z1hjSdCtiieUZ84K12HTRtb8aEwSipnkvdG72vgC2jGC",
  "key28": "3UhCp3M6VZvAJcspGoDFa32mSzWXKT5BiF3ZLmw7NKvzPjFiRmiRLdxQzyj89Cp7cVNn25fmP99j5uXdotGRbVv2",
  "key29": "5xXDdyA1fJAiUVC4Qtxn7m6nAvkiBV38cJh4RKb1HKf22NV5vCjwziqftsBwZocjwCoEt7MFkG6ATS8uiBSVuQRm",
  "key30": "eQ2EiwpWtYSrnJVekBvZHp32eonhQ48PifgL2JJus9ZF8Dp2sQJshL3KV7hBMsvtmiWodWSmoY2iisz53aAUdbL",
  "key31": "4w15mXTdR9ceKrXfWX9mPdQmgeAARr4jSQbuENfXF5Za2giB5cwBUd6AL3VcXRje7L7cLuFfX329h6jGN7JbkscG",
  "key32": "48ZSfNAnVFaE3whoH1WCvsn1N9Ys9SYGMejh6cnDmAnBftP2TgHd5Mu9oCwBgvgHJXvkvvK52ondnc4miD3fP73G",
  "key33": "4nSEDdWEA9AZqECU5HfqnA2fNe3oQmVngeMGnKcriHpdP3CTTaR39EfjavTMvPWMaSqzBZvN9LmLTt6MRRj2Rpik",
  "key34": "3AYhsGw6a5zaZmHEsnRq6rpuRWCd6QQmWLPK8DTZ38TrES97fXM7ejQKyTvnSY1A1hKJfb55z6PrffPUqjBrir1A"
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
