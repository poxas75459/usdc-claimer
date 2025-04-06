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
    "SLU4yXhTLfrHzhcVkfkmZEKCvHd3pp14pY7UaQgPqsdYRag71ZBtVnSxCsQQvaXLnukU9o6ixgvAekVd6zZfKAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crdCCG82z5fJVec3evB42KG3zXAiSCJvVD1NqnvvrJCQ9UYpaZsYMU1XNZp4Kj7CEQMLrViN9fzhADhVksHJmoX",
  "key1": "3pKVCC3QZopUfmGPp8YYn59WJv8PZDnLXieKTXpsGgr5E84MtsHo5uoezJy4hvbqtxjkFuL6q2EqLZdGbssQQVHf",
  "key2": "629RzzEhKLFrnFXbGBX3ykNiQLiLXF8FeqTh7MASi7riaicgDKjb6YaTU6jknTAc1dwxBDrqjGCJk9g7wVZZHRLt",
  "key3": "5ZBVovY6M5qKMXhuSt1vgadQh1YXdV9ZQF24DrAFv5dsfNwvf7mfMC5TTryn1Z3iMwChCBH9thqiKsE5kzQNSnJr",
  "key4": "47YasaZyta8uB8jXbwfrJnqntCFAQJiQe4m5vMCsfJ31vLfNnuyX2D2YL6vY7jcDtFYxCFZP1WuThB2nUPs8Qfgm",
  "key5": "2bfnZXNV6b73E6NPajr8LHzx3hfoE2ZYbmnA3WH7esCxKCk4XBoaSbt223yUc49fNLVDqRN8a5smTRAFjdNmpiiu",
  "key6": "2miwmh88859GV9WXb4GSwUB6wTD6RtRSkQq6ZJLxwahjawx4R3T8Hc2hXCgbq4EvSrjrJ6Ukf3Xh7TBfT3Nq8vx3",
  "key7": "2V4JcCQetG2hugFaWViSh8EdrSJVxUM4coSUqq48wGF6dH5SndSLQzwvgzqcfUJKsKnH2H1WzyEdwMuyiqTMhbXb",
  "key8": "43QgTYo7yTZxSGGWAfzSUpVicawhahKog1EdAJEPtqbwWSfivkw72iJrGgTJ19SP2Qx6VcN8ATvrjUCBympRupGF",
  "key9": "51iL7gmy2hN2jz8r36bxNomfXwq5xwmMMh2BcbeMu1ZaKSmBbgNxpKAAyxwctG1Fq5QK2MJ4t4eN4xK9pzhA2gua",
  "key10": "3f6xUu8WByAJmMSFv2kETLw23prUhgbXMkVVRjciRectZRoW5kBrjpVHguJJVHxVUHHoULMeMNum6Dcvf59nEdVd",
  "key11": "3H2PUJhAhaYCg8KNX5ihLnztUZPBS1EwTymwwDdkWQqVwcmR1Db66SVPSau49oTG5SrdR1k5vFs9mbuSiTc5cRwo",
  "key12": "4hqX8pN8iHQrKpDryjbjfRXsK9MyWfdULD5hvd6E6rjyFF6RdPjoXxaZPvfFpBgfkQWHvyALA5Pz44dobeazGvcZ",
  "key13": "38Hrq7dLci5riwXnjWyYnFqNcncNbGTq7JdfmsEDjbsBzCGVXecZpTb5ToY9z7C8LHSndzRmth8CoMBxYtAUCvYP",
  "key14": "34kPhqgZCmqf4qimoYLixpCLZfgDN2CerYPkM6HeTZN9kCEzy5nznB1VMQD38Z8hQ9f9iGw8X2uPuqiUQRS8AKus",
  "key15": "2jbbpAyif4Jo2DbE6hhBjbCDrnTvcNpjftEEvGLdLY26MCTN4PvHYvrLYH1QL3EdfPbmaDZHPYv5p5fE3SuMn1PU",
  "key16": "3BcNxNJrEt9a2YoWVWhfZcmLiWwqsjkp8HLKfM74xzPcWyAAZ8p1opWCS1c6BX9yccdLMc2nzEX6XdfsmZDEU6J6",
  "key17": "5FEZoUE6XVoHPpmKb9f2PizMW61sERqJLyxM55LMtGeJaJdVQGpVE4RHEec56z8sKGHdjBrT5yBhgWQ1efDqD5Vw",
  "key18": "53hG5WSmULXCB9QhCC4fCXYjxiUeqMN2CdcgZRs7oBUWnWjMDhDuqhEdJFeT9YmvBuSWMzsrBEc2ksT2geni6mFx",
  "key19": "2LKWFinFfUAsVhfu1s4EsZ3xihd5vcrBWchsds9tjEMSHPypQuWzHQ9pEEpLRjy8cxaT8GWxppqjFzv5bgmfGV4E",
  "key20": "34p48ypaE5dZKztPrGitDN8EgDahB9u6b5ipBBBzqb36ksCreouKH7sKS6L97z6GvQJrc6F1j6pwF4MkyZQ8nXC",
  "key21": "j9Ax5okbezebM27Y8uvyVBxgxRkENppoRYPfeT7RVzvezRGseB1hVmLudwxtbg36dWThC8VMtSv34ztDJi8TW74",
  "key22": "xtpZu183ZMqesvCv6w5EuknsFT6uJAEEF3PdWDUyKoJmskYgMfRzG2yPpaoULhaPSv4FMuJgBkT7JmbeJjnsoVm",
  "key23": "5Da8BEQssoE6vfC3dw5o6NsiXjTwSPMgqGr9hMpJLUpxYxewrbJEwYydm7rYZuSjzsuDEzP4Js3pzqFh7XJHMKHo",
  "key24": "3y9Su2EipWCWAGAE6vwjRvxGRjaEV3WsFXWSYVzopw6ph8mduQceHS9MXogEr7EVLtNYNZRA7BK8MQ9giDYdpKnw",
  "key25": "c7XrgP5XmddNFCwazBQmADDuJkyNURdZAxefbm8XrtZJetgxnAHVMUMKsTqeHWKF7aRr2EsMknnk6gwzwSf1rCE",
  "key26": "5qhCJX5Kr6WFjdAVXeMBT53axzzz68TSdVijVVhPmV7PozEvGb7ebcVcz1NdGVcTGFCx9TEPYYAwhCw6cF5Jtr8d",
  "key27": "4d16qFYZagRXrc8qP1y2PxivBrMiBhNy8BfjhSed1UyGARAx3k1m3H3Qokb4F3giaSyWixsjdhQ8xJMcXJBoSHUn",
  "key28": "4GoWEa9GubaD4ivfzAL9jLUet78UAzjnj4GyaB8cLJGcHsjToXD3RNhXdBphLCMDoxSYPg63XToFMiWZ7bVu3u6n",
  "key29": "5qPqRxDxMAz8CeBSTbgqDyxpsmQSwms6JpysR86miZqHSnXxUcRkBdTbwtuKavHrZXaAhLhaFuVhDQyjb7ULHsmR",
  "key30": "5PsFXaytecrzEPnySMV5Hw4apbx6zLiNa1QsbsMTydgXADsoDvbtxrEwLgQHuAx23k6CLfTEmvDgXgSaQmyTXhv6",
  "key31": "2tvr2Uj3YHKjb6jg9ydXhxFknZA7SC9KReuPVtNsQvPmjiPoV6qNAq2QQbtGJmwDyqn6B8BoWhux52ujCgvSrvDi",
  "key32": "3eLBAdH8kH6BJtWrV6uBw25K234BZLBYNSDdDXR2aTQ2BFRRd8KzY2cuM14yvPiPBZrCBRQC3mjvXaFKryVhP1v5",
  "key33": "tQVu1aDckKG48TQ3zikhFv6bXMWMwh6eP5nFDHkEEtJ5YVwTRpf6mD9n3odSVS29vtf5xRQLXf2Zyd7joS6y2h7",
  "key34": "vFYPQLz3jutEbZqxxJkBXHXS8SgTE3rL2DqsgLNhzfLxfx8gx1Jrxz5KHrxfsR2K5nrLEB5yrG182uo9RLd6RDL",
  "key35": "4Cg16qdpPrkuBhdzK6GpKfsHNMm65fv8SrBcMYkmEH3dTreK3WnnbctedKaHAzxN2jXZseEik3XyE3RKxY1RnP3B",
  "key36": "2Zn6rq68a2TC8e2L7tH4i8jQYXoYZ25YuLcuRBYyApkPGQE5qTmNoPzdcwzgY84Fqfm7CpyJARKGyjwA9ebYXQMM",
  "key37": "3iChV6N4UwNXGX3uuY63UfJnveaCS8U6HdMdiUBJ6KKC8WqX4nxQvbdUENthbX5nN5wZpzpRRCqFtUHcBdXvDd3r",
  "key38": "2hT1kHvQRvw5SbXnkcnab3iygHThHAXvNJuxbPdevd6SMzdSzsS5yS2df5LhteDnQK8N9tB3YjEo3xVBVA7qyJgJ",
  "key39": "3fPX3P4CxM5gLgU7Z2KgCUchEfvxgTR3bi3Hrc8aUYiPjP8knZkx9XQpZYznb1cKFgYAiXwuM1cbwjhtv7U4WhCv",
  "key40": "5AfgczPcYxQouSg2m2zaeJNDaRtayRvNvocn5rLH1S6qxshNzQhEnAQShwEzY6zxrGLXByA5joH2mjC2Vmbie5rk",
  "key41": "2eVQKnN1WwxXA2wuvTWr8wAe18GmGh4SQB7fGqZ1uV7xUhzVqhH84ZtSQHdT8PtDjkhDYu5Pj84J8WSCo2nPsYRd"
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
