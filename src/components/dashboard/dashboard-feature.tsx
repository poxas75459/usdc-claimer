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
    "4A9vuVPcJWtapVLQyYZaTYZoqaJVe5Lmy1pTU68MTNnoz4kHfT5KZdU4v8BGz6SyRiQyPpZziVkmeeQ9cCRuWby3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34j8D77USM4Ke7kqJ3arPh3M5TWCKpzjp7CDtFZVX7BMYxdEX3RWztgaLBbEewUsQfUKu8T42QeXZAWr9zk1v7Kt",
  "key1": "zU4kKWBirGsuNPShDh9M7tKsHfNLYjpcaKVAvYW9tLqv7BrchPjzjjbzNV7RZVJ4ztJW7aUNUS3te8JbdHSYsig",
  "key2": "5P6S6EPLEhFp1XsXcAqUNYoMvGvk635bRpyjc3DLs7npJ1s7qef3S7nsMbJcnfozNMHvBsETkNu2GPdjkjNKEm1o",
  "key3": "4ekvgsGbJm4LCTmgLzMm6gdg1r2mVhwAEt2dLH7k8ivFf7Ay5jj5w46JQSdssZ4JJwvnmbJWx4cweyko3TaezNfj",
  "key4": "3izuJUP92xtSdH3hF2xrxVcjtx8829vPDEKGrnqxxkkX4aWLhfr1Gfs9dWS4rAbVVBfymBPxFcBEAaHPBxak866W",
  "key5": "3zhv4MaXGcoNBW6YGbSDzpUUjop1o8XX4FSbH6Ev5Un2SajpjX3Q9aedR3n5UFYJqQm7iE1JdyL1UE6LmSVHb5hG",
  "key6": "372oknrjNiVEvSwUiYQwiz7LxocAjYzVsqwrHnuVcf1nZ2mGcXAKVTvf7bsevDEbFw2Q26oa4WZLbh2k4C6rahza",
  "key7": "239TttgMrVEUApuxqYxcPMeZpkLXEmDwc8KSTJCkf82YiVpgoyALDmamo9LcqPyXpaQi4mAPTLWPsf7DGuiQ7nCL",
  "key8": "5eDDx7uyNWysJ5UkkfD3BP1tresYAY4dVW1CsNyZoxwfzhT9LUpUbxRR4UnqDpSiqH1w2Zz8UUXfZ4wCpZ36VJHD",
  "key9": "64NAFwmur4gTMBRtepSxcTAeUuyKxZsJD28XRV4oivGEAQXdngQdvhyCMQ5mAy9nooPj1ERL5cNFscTJkTpUfUo4",
  "key10": "5LmMYnZ6Bp3UQQVQVmUcf71oaPGzKsyZbnm5SUH4CVL1vQHKVvtmK2QXcdHX1XpPkJjFZRpvPFGnC1WzJPn59Qr9",
  "key11": "3VEPtXLPGyrgVMfzRimRJ8S6NY1S4yJUoBG2NwUtLi9CEjsYRiiy6p3AiSZPh7yjZaCTPBJb53pp2covh2UHGe5",
  "key12": "59LAM9v8ETyb53hkJZ89mDS44zDhrmJJBi4Dty5cSbMdEef6YweH1b6d7D5hLaNzRgVbcqjK4f2k3LHcieGPV81J",
  "key13": "34S2uqgtcTtbKgnFba4MmgY8UDq1yFWSaThkfxCiaKL6xonbXw4nsCoAHFhRJUxzU99ZK13XdaSAavPEQVqvm3oK",
  "key14": "4BHTs85SnqiBbTF9FUFTGNy6UKUdWZU6CCeu3aRtGgsBYfEkGfQxo6PkXWx6opJxD6Js5GJoLa1qwGhQs66WxRpX",
  "key15": "3B6825v72RtxEgY4NLYBNmFQd2HL8LMVzHxZiyR2VRFaM5odvDUUKPzFjh6Q9K8ezzfSHU9ZF8N8duYdUqnfCmHV",
  "key16": "36TwaEpGUYCL53VBXmztqprJNuVQw2D6qen2aKxJnWcvMivzRU5mmMa8jzSsemjjFcHqbtgrfwdr5G9nBMDFhjye",
  "key17": "64H4UidVKD3FvXxXPcxhxC9rjFKGPhGmwp7kZqfnDhirDd7ZA6FrjAZ3ABSPW7wTzGoRArwptvuv61S4bAYvp22t",
  "key18": "5h6JRRn6VNTcXxpSjwTyg7L2jjrtX8t4A4fFCee6HawkrVyamfbCEcHi989CzRpyZhed3awkFrRCkWYpMNH69S4x",
  "key19": "5BKz83vDKBnMPQFKYa4mBJS165hgRrnW4i1Nb8pfK3i3DRDLPfB48tmYG7e311dYBxCCAv3DJNmWgaes7ZyxsMTH",
  "key20": "46XBkb2FfEF2Z3tiTY5EqBzLuV7QKd6jj2RWPntgWXC7XMTcE1YjgHg98owprM8S9HxHk7hN8yKB7d2VggwoxcbX",
  "key21": "2mkZPwsq9w83WGjPheNfWB6FH65KgYgpZtshPZdEULXXRfUkx3YjzyYwdaTRWToJhgviM4SzHiA8ZUThFgXoHLRc",
  "key22": "4WYxQC3RtQdFivi5MD9CnEFrcaqqFwENJSPk6A4iEv8QuMmyXAvCMmvDdqXpKGtuHfVDxuAcg7YfXXuddX4muNqP",
  "key23": "4ZPRFoKuGGt2bKS1jbqMNxN18eLPbDRfkBeFVBZWuxzvvgK5BdHzdUXBMoqDWiW8QzxicHGLXwyX3pdpYg1yjsks",
  "key24": "34BGaiBgBwfQHP5ZH9DVJofDCaYvMUaqC7c14MUFHPgQ1p1VPLjsWNjhYarWrnXPubfEHPNkFVfbGZLMnDYz1oaD",
  "key25": "3R4Xf82qodu4xoouUhYcKj4rKK8y8F1HgRGs7pg3XADdmxrHKjQp2fWL1VD4bXHmzysjgiuunw2b3SbQeXQo6ZUW",
  "key26": "5rzyrYg4qptU6QoX1qsAMo37F2tSpPDHtA885biv4zqfkdsU6iReVigdFrJy4Vb8qzesmepH3EbZgbYBejYwg8s",
  "key27": "4N3uJusrKMWTMq3SbK9oSTVFAnt9SF1eATHTJyTHqAfiv949SF1BT5RFXKkQFo9WUjNXnBU3jycB1ogMderdC1yA",
  "key28": "2Pb4Wd42TFLJbi5Kb4HFSoMheVgpPd4BHmGkxyiMeRtpDqPSRFH87x2vLSwDKsuhDinih7yAnHjpTS7G1SNV8aj2",
  "key29": "299n8hT25ZcziawQY1XocvNm9C2s4q6KtgzavViiYRmiNkL8yxwdQ5sei1DUdyED6LKs9FcRuKXE5d4fhPzQzHng"
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
