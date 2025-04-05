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
    "3h5JsKyTTFscF8GcDLvsQ4zp3BEAVSZd7VGfNWMiBAHAWSu5XnQm4YxukkuksXeXeyQcwdZ1vcQtWtkJoo44R5wZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3revjUgLiasu6SMwqTQz1Q1wVfThELxtQwDCExM3V53A83D771xX88Xuq7Nn7sWMsTADpsRiM6RuEuiUv1oC6NKx",
  "key1": "23BgwkTNRW6UJZknWwTCwAhm64a8At9fq64CyFexUsNKm8QSY1XBuZ1tK22ZerWsu6UqnbGnM5uLAwMo7wYnf5Sb",
  "key2": "28W8kmk4RwAAPPAAKSj2JfueRg1Q5RnQBTgdSShS7AkKP3m2TAJe56ZvDKJRCYyXWZiyY2krfikQkkVFqjALSefB",
  "key3": "4t1cc5pgJLrkyHjZYy5HpZSexCaHzHPAxuTdHkGr1gZxdRFvAFE3ot9fT7NkA9RVkyjB4wqFGA12i2J2doR5bRNV",
  "key4": "5fodkDv88ZwoSu2oxqVokx2HaXdojB4Jt4nNV5vHXMkcWrmDXGguhjK8UtWmxiD4c8ndAbTuYupvr1WBjxovzHcj",
  "key5": "5MFCsF3FU6Zo9MdFsyvGX2Cxjr2sw4A7yCUnw8GNQ3SmhrpnBi8fmyGCNaX2tAWWFacK7DzwACH8ew85Luc8Lbep",
  "key6": "3DSKv2MJYMKSrv46CxjBRWruVaCKv8AgAjdPE25iprT6H4GgW8ZtFokApASir4GAbYe5B5CrPd7aPmUNfqdoVLUr",
  "key7": "2jfEbL1wRrbhvBABR579Z2bmX5Q2AEf7mMxto314YJK6HJAiCGS2WqziXF4iMJgbefaGYkAXUCwShrRD4iopyvnu",
  "key8": "26WjTLiLD5WXyhfgb4R2bAg3K1ie9gxnT8bPaBRgWfDn5wqG7tGKVdRJ2MdRLKTGcmSpNniMX89wmgL6NPs2jrAf",
  "key9": "2gpwtpfq4tmU8E9WhuJntd5nNymfCW6sFcvXid6c7u1pCeCD13R4EY8fmiBPUJjLLQdwwt3LPmnoS6QSrCKCVF5B",
  "key10": "3cEKhK9kLuMCHqVyEvPT6FKBH1wvgU3g2WhYP9tKJKfzHSx94EGALG96z2Bv15Y1CMLr3cbQn3TczcL81sJUxsEq",
  "key11": "67Wnr9tYjCB2ndZWmYJgUsNJNCNfSU1TjjSGaTv6HvEm7eHwKP8njiHkTyNwbygcfaiLNfysEFG3g8PYon4Tp3BZ",
  "key12": "3s8BG2KSFyuSJmhU2KNvVBrDKSk1kLsAjvtDzB5G86Vp1JBpg4tKu7b5mn5PGtffF1t4W2QSrAXWEwDYrNRru9tc",
  "key13": "4M8bvmGtRfupKah8vd7VintQGW8p4dduTgq7R8tYG6h3WbzynVNfMdjz2K1dBLHyBNP1FWDUqEieNcVjnBsRS4R2",
  "key14": "42AFZq2fBZyzdDhJccrHYKwUkNpuWAcaN9Y1Cdwup9XicFYUApJdUY8VkjRAwHYw5bJwYtAYZ2hW5KrBHRwQ5M1T",
  "key15": "5NAij7TJZhpz4XeTUoypX1wZZA9HQ2Chrv6h9r6g8amBsYY4akfHiyfCsuVNAV61wsBEbqApdLeZHEZXJqgNf7m2",
  "key16": "4GJbosmDqtFQA5u2DRo91wmACT99oyEcKk6Hcq3r6u3b1WbmLkb4SQjDyeMLwk6adyVhfe9i29m1rK2N83nWvdtF",
  "key17": "3LxVeTaW6wNTaLN4XhAGfZJfFwnruXp18PcdHQmrnU8Pcu4UREJfEjA2ppAAQy42ndFrsot8WTcHNzcmWieuiu7c",
  "key18": "43yMbDgtGZ46xDqFLpDv52LBcZvxWnJFPkCYapxwgFmTZfTmGHLnKpCC37vGBf35rdCyZBBRphHZvJauWtgMDNoP",
  "key19": "2N6SVp3M8zuckSJP2xLeyE9SXkwfBDz3vSX6jnMtpZ2zuwgjR7wDQZjRpFexWyk8KsoCny2GEvPs4FsNPPnQvFh3",
  "key20": "3tYL6FbbETtda2g1m7MLtm5baQdiN7tnCH8JG8aPi2uKj9uqECnm1GbEvr57Sa5ofj3rKjkBCpbY2iB4f2UCCjVo",
  "key21": "2n8iyM9AmFXR5Hz4sRQU79gUrrBWrS3dZ83jdnxfDwzWumwDcCXts83sdCbc2v3VD4xVJgrnWfZE6kXmVF7cdVXJ",
  "key22": "3GCgWf3wHZPwbXFVuyjNewtB55dcHoT97w5X5enC6dAR4cS8iMXKtEUH2emTVK2qq1bYRGgV9oevtAVLJpMLXsm6",
  "key23": "D85ctncmLEbdZqUbfAVUqPXEHXbisK2ajRYZEcrZ7KWqov6X5jw9nqdn3EiqgQYt4yVTzXSwQiUDQnS5Nz5G8kt",
  "key24": "3rtMpjmzSauejc53XfQRnEnPaGP92J4uXCds8W2qq3gZkhUJdY2tb4cgf3REdbhQwN2zhBaNCmWLH2y7UXvQJP7F",
  "key25": "4Sspyv2PSgF9srJ8VoqHPMjPHeHhcmq4DW4fnpDcq9N4HdkvETqH3mU7KPVyqWis5W44R5jtk46SWwhNBzQWSFaw",
  "key26": "517aNZ1iAbC5LCNwdkLqa3Z1pz1Fjyxz6omkN5FvyUG48a65CUjqVFAa7YQLYtzDn3VkSvyEHWrhtzEHSk5xmmpt",
  "key27": "2rGRBLjkyTSdLUcGUsiUgsW9BA9Ku9J4dUjcXWeCTzu6MDy8T5MX2XBSczo34fPAGfoiVD7NG9hobJrvoqn1kYVV",
  "key28": "3yYXg1jZ6xpnMwarMBon31fvWZ5nWzM94m132b2Z9hRNCvaeRNxRzFH5dcD1LC7xKymkfCqkjrfqoVYih3xB8BHB",
  "key29": "2pWn86zq4jNCE4MaNGU4sMFiPestt6MhJSqtgRAggLAtDSQZqThecr2pjorkw8oMDGTxQ7Xxt25ELY5roQFrVqKe",
  "key30": "526k6SsGKbH7g281J2GYrSfK1WJwFkgqw5gAMgxTU4BY1ERHwjJD4gZa24bHu6ngCTRhLKug87rbnNQ2oEMDZWrC",
  "key31": "5gBeDa6VmYy4XB9GhAtaSQ2hR8jWu21UkLrAmmsxaudAmRuaNkY8YvCwPx42LEeX2w97Gc45jxPMUwmNrPTobhd8",
  "key32": "3qycU9x3exs5byZVUqG5B81CQZ9AK5CsV357wSERfnPi4uWGQ76zECftQDk15o3StsJzqfiGDpbyaMTDe2Ezy1NR",
  "key33": "5kPrEiebHGBNbcaHqnuJEGAfBFp4UrhxmGGhiwjhaueociuxi99LDufQ2448zBL9U8VKcyVk5yxJeXncEUfqWgm5",
  "key34": "5EEzyrnyGy4K8rFxhmUdRoQ3tm58YDG8rWwUm4PDTEi9Y3z2MckuumtvSDSoinnpzx9wRhthGK5xjCPRh4oXMqvJ",
  "key35": "2Vtoj9mCvz2g85bEE6r8qYbTVQctoKaBcA2gSsnJUP5ebR38CjtDVwiQ1a3YHxx3hzY53eWcHpcMpSTHVojxYLhv"
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
