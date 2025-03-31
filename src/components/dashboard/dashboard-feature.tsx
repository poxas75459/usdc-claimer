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
    "5VYR3o613iiLdtE6icNQxhFTZUXTCcr2zztvN9dp2Z7AEANmYj6KLoFuvh37RJ4RGzzK6hE3Per3LGWeWDcvdPgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bgE1ZhyPh1rYWVpTXLWs8tF13pfQ4Xh64WqCtQFPgba3Jq8rbZ5C2YcRMc4vW7mmBnjzzquo6e7FWNgwgPx6Si3",
  "key1": "41qKxosW3WwGjPwGyaPcbn55PiQFmp7i63zsugvfhWFM7VQAo1yJNAKw5VqTQ5UQU2dphEykiSgVuCn6wGiPJEc9",
  "key2": "221CiK3HWKAzc9KHhqc9cfx4V92t9T7YTLTWiwnaPnKmAxstZzFFuqtb4VbXD6XHxs2czKhm18vkdZTaViJ9ZdWG",
  "key3": "2ayt4GiqRwdnp1DpDfqv4pbTozm7u2p5bhkMfE7UKqNVcBnBurTeQ8DBjxrxHkm3LEFyqx8USVtURPkc3pQijm8F",
  "key4": "xb8rerDX4EzBLdRvr4iRVvNWo4RN51bog9QQyWpeyuyvW4TW9euAXhHhYnDJTdjTiFpYn1tVBi39t1Rjuh9aFpy",
  "key5": "36fEPDEmX85qtUYGxr2iXqFoWeG65Z8rr52h7ggxFWfddvVrn3eDrf6vJpg7vbxAmf9KQDSQJLKdS6krdQewyLWq",
  "key6": "2qiqujj77Lik4jHh251kssjQmBxiXWmktrDgBAbwAVFnNtY2XW6G9xoVZsejWD7bMHt7g83JrKmHhVuT2AKTVAhG",
  "key7": "VjvuzhgkHNcJjKk64n1pAc12w1JwKj9qnnwEdwg96rS8SmH6s1T3YJzBHmR6aVSUkvCdxL6LeXdWQ1n7WJU8Axa",
  "key8": "3pYCAMcSTdqYCNsAmEzwgLHog7jLASftyYHhphLd6qzGQXKQg7fBZickgRw8adFYF5h4M1LGMYNwjJ2fAgkhTG8M",
  "key9": "473wWMxzecjM8mjxcR8HGMmNKMvHudJ1KCkesETooB6PS3NPKfBsbAPxia41qFx46KXyRcfAkTPPJDr4LE8CAedq",
  "key10": "5SqEzxsZuX6dKrxa8cTTWWhwFJXK8siz54hoMHaXy2piSuTASonmqHbwLYKaMKLKS4XxjnDZaiy4od71i6vMATex",
  "key11": "676PBRYBBoXoBRP823TaVz74H7wju8yBRYUpbtsp8HceBwwJfTEBwndKR2SuQwRXqVfdsQynTWGfBgG8VJLe8dfN",
  "key12": "5eRpkqKhmLN9j56ofc1pxW1QHFw96c6gc5Jbua6ZWgh9TFYN5ESkJ4yoBVoGgwdhPRbvWzYV1oA4yRCsqqDehY6Q",
  "key13": "127iCsFYznBUYzGL2nSuvA1kXy7nD7ZrATBtT9YeuwmkpkxxRsA4NURmoeE6Zn4DXZUqrErmJDsAsPwwBW4vHLus",
  "key14": "2Ub7w8m1b9WMD9JAxptTr57BtfcCTy5PtuHwbyrJaUmduwjktCuEdX5y4BDmJqtcRz4NEPFZodpS5Qskh96E3fGx",
  "key15": "58X3HrzsMYY5djKKHmoMS7jBw22dE71kpk82aUJSWGKhpyu5vU52KdvprctgJ91Dunp3oj93DQ4CDepiEKBeKtzm",
  "key16": "4sSmigFisJAgpAJT3eQiK9mPWwq916ok2vU5WMk8HZSDMo9seSjCsMWt3kf8TuWV3XfPtLZKRDN6oKZy25FgDAQH",
  "key17": "saZNiiuLPJQBRQEcYJnyjJSZcUhw9xTgnAgPgP6GTR9ZBULiHwAu9EXMsc5WhpATW6XSPjDE8XwoNzD9C4UQzvS",
  "key18": "42Zm3Kt9KRrzGvsww3vwF3mYTBzYacRAYfY8EJVhcmShf5pvcCiFX9QmQdUGcC6bkXuCSGXxWJy5TQhY4JTjvjYb",
  "key19": "3xoSTzZyCJouKtqCNGcP79fX582GeYYpurqaS7v1pEuFN8GZjpo9eYd37nHNNNjDaiReVLwfGhLyA6T2RMZz7dJt",
  "key20": "3UHGygDQvLLMXqEKDfAh3g2uee4KmcSqX1aYBA1Dmb5LW2JHBbKE2g8iNSLZbe9XP8XYDk7ohJ6gn2FcQmXPaQi8",
  "key21": "41U5QSk1mgsuKTKt8KGt1FXAsk1oaAMqbNxBbVXXyDxWoQpBcv7e2U9fkzw5BLSEUy85Ni797jZXR1i6jQjoZMnd",
  "key22": "5MHpSZkqBCA7pqF38L7h3RjUPLQXSvnZ2vbZ3ULsV8W5ghoZFC6k9C7zGbwHLcnuttGvYzsiRMBvCsJfieWc1z4N",
  "key23": "57QfkKTdL1RZNxaKJsyaEcHAtVDPvSukTGUpirenedfxZAvCnu9K2bveqNLuhDW9YzFJSKub86EVBL4EYXL1XuyN",
  "key24": "2Jb6vbPRH6ws4qpbUPPTk6Bw99KER6N9EdeHrckBGypUGDErtqsY9Zyg6YdAcccSwDfd2e5bVXcZcv9p2Eb8uxUb",
  "key25": "4jzdwX2X7cB9ePFR9qbYod34awQafiWCwJE9oWtD1bHtJFp4zWVszFPqd6uBNNcntkwLmc82tgNiQBGQk44gBytV",
  "key26": "KzjRJpGfsRJqqtzNrSPrTgHT7BHQxquL2kVQTpz8DsJUqzDPcyESDYjN1yHfvXXS37gGCty3J3mxZeX33aWtB5L",
  "key27": "3awj3UJb2mhhbLuSQ2Mifw6gt7ETZoSSW3TSzpyfza1r6W8puXF2EuySqwgDntj4TnWagsu98UjuZ8WE6AtS2nZf",
  "key28": "2bjBmV1J2wDzK7LToB464Mw7yUs81YD1DAi3fV5Rbd93EQxNt5AoyDisSyNyks14DKCFKsViyqkwSRDCjG9LJkSV",
  "key29": "4KZB9rY99PJThcFreAPL8coNgH6VNeaZ8r6Rm1UZKBDK6GnaFtgwp572i6bKjARLkJNxWDF1y8rxhmMqzmttNNsE",
  "key30": "2HcogFxfwExAoewwst9ZdbmBqSrpn56oyRtXL8CwzkYFMwXDrueepEdX4Quh5WgsAbE2gLFP3aHpm1bEzoqEKEQp",
  "key31": "5f4XeyMUC2k38CmK85nXT2c9oMkW5fyC9YC1tviaEujSptBnQa24nrfJ9N2zkKzU63zFzb1cd3UPkNcYksF54SXs",
  "key32": "2M4MpiTqzK7Pe98W9kGeGN1iADzonMHkvQENespTdFpL3sGuQkqocrSXVZNnYmhWQiW7i6eNcbbmLePWGHT4wC5m",
  "key33": "2oA35Q5kifPAoFsB8MQLFnPgkFMtPmf6X8GruP3su2gEFRgWT1cirN1JUk1EoCSY8isgUdpQMk4sgByRpen5uLia",
  "key34": "5GwJuMAarbqGQeU5DWPGxiL55aRW9u53NYJ81A2qWeCb3E7URfzybLqcRdqer6yUepG3GyXZkcGP2uDvmn94s4ZT",
  "key35": "31qrXWv2KLjQiX5hj7LKCjrtutD66Tc8uHfbzLDbfBctakcxUvvz7swZNtCbLeXpyoFWD5JsBuoWCa6xHqrLixRy",
  "key36": "5T4B8zqsF41vFTeczatFPKP6TkSsoV8CLG3cUjQt3RsDvEfcPUqCGcsKxVL1SnKhWqQruoWk5xY2rZ1wvHJWDhCB"
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
