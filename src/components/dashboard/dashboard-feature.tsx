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
    "32jjeVMY6JhQb1XEmvVfTdU6EUKPtBxgG2bRtPuDx9vFcXZvGuzxwJ9iRAuZFoYNG2riFUJe3JafBj3An4dMwvoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FyhBe5z1qmmFrT25tyLcJdJY5TEK7Wm1tPvGMoZgr8hygDqrWbL5Z7QdDZLdP3XesUSjnUcL427TggpjmWWfh8o",
  "key1": "5xbNGDs4aDXNhP2mDy4VjwDy3Bo9V1WnMt9yKEQXagXXH6zjMTemSgpfFj5byxCpY3gQy93gTiwrYpCpyDaZu9zX",
  "key2": "2JzqU3JeX9vno7ok3BCJEzWvmrrzeVViyPU3UosjTs5fxafmFmw6GU1zAbJnMSq9mtMGUY7e4dD2L1ku7x1rwDok",
  "key3": "4Emq1RG2tgPLXxKw54VahamKPwaM5T2RzJ4L5sJfkG7VWKq8SDWc3RvKqb4XufFxd6PUbQgxvpDYLB7bKnRr8hyT",
  "key4": "k7duUMc5ztXmK4r6gKC6nMkhj9g7Sm9FUp6gmKF7u1wXdEmEpMD1B87CvT3qwADSJHjFciWUP1zT37Z1sSoQhHV",
  "key5": "3gZQTrFPUo9amZforWmL7obzffEd8nMxTCPCcQLeLq9454RZva85yi6Hogrt6XDesv7Wu4XZr8sdkKmJDginwgFi",
  "key6": "56Gqr3k4xzsdpUymwRStvc6rbdYcMCwgGqd21GdJ7xucnziCEv4cNf7d5LD4thve2riJh2f1JhrK3cHsZPhWJ7CT",
  "key7": "58PkgFavgu14fB28arN4penfw2xxpt7qDGFq3puHFFDX7JoxrwxkdPkMvD2aNQ9WNeonph2JwUdkzWyZeHTRkNej",
  "key8": "5yXtxb4NVgkumCmerMsaKNSmZpo7XD6ake1eLraXFbcFZabVGjSR9DqkYZEWijfZrKR9uY2e7Ap94UBNiDs7YX92",
  "key9": "48QgqsKm16DpkmvsugDmgznTXqKbRjZtTdW58ZBU2fd4natt2eJ9yWSV2koeMDHcmMmeJqig4BqszhMPVZ3ym6Ew",
  "key10": "5Z9x3XHTaLsb9rdCb1RtDRjoZBpMnMQ4sWCM9fFYrWks1X1RNykD8TswcAGsdFcbzwB3e9xH7uCfj4GkzMXZvs7n",
  "key11": "5N1TXpmvKerw5SKooq5wfq4RoJ42xD34wQMxGYiebHx37yfff54Kw9qsfd4tNoDXTujUnzvCbYTpb3So5RoQjjAm",
  "key12": "5uHvEDFKup233aVs3fbCkAhfiFbfdXHizyLetFkHUgMUXX2xM2zJMzqkETyYiDavAAtjH3aiMDEcmJSDg2UZ59uq",
  "key13": "4rpxNsaCsvNjccZuLZGykSkqYaigwHsByHextv2sv3D6eUTHSQojMjWD3UQHBRHMYmrXxwL8DjQim2rBipe5vVLc",
  "key14": "5RhwNmoH6xxp6iLm7YsAVj2JXn8Nwq7Qxqy5zgzRCqf3yXRnLLmmYPEUP2V8cwKRQhLSGP6T6FhwEyMfcPCKAQm9",
  "key15": "5M88c3Xa9G8aG4np5u9gAuqEzQ9iMC1JMpAG8gA5MY6Md8fD1Vag1erpcg9zu8osYuvso5JbX4BRFnshByJpHHUn",
  "key16": "2ASJVFxJ3rC8cy3F6f1v356KWvNC1b5bUoLSJUKcgpjrTi6UUGcZYRR7uAn12eXseTw99Kdp55pGgwjFyeiiGTpx",
  "key17": "3QTnWkh1EPNcPKLXMVroTaE1vdHKzfoj69MSvQYVHeXp1E294x6ozVnGe74xbib2PYQUTAbSNzx4sS7362yiTURk",
  "key18": "4izH1tbFs96DjihgSDdmEi1uL6KNunD8u2TQTdGeduthQfaKxQmCnRLaa5iKyjCTQohwfMkXRBM6W2KgNgMCQ743",
  "key19": "2miovJrk97AiGc461Y17sWz8SRZBrkUrXiVCxAdvvpp7nmCVCdj5oufB9rAMfyJqzAV677TGqJrAvBEh7dDQMpsk",
  "key20": "26Woj6brbUcb3MyD6Rp4TmjXe43rTbrrab4UzbJpKcjTRkLnnzsWF7j1eNnsXrwuqFdM9Ak1CeTXRbibFYkDAEAd",
  "key21": "5VG4zhpS2y6LyLyMfkJBwZ6cQ5YgCsyEZyCMjkJaedb5KCnXHGfcn7hMbs96Yr4aNfkjQzmzZdcMMQ3MFHP2e1Zr",
  "key22": "2oT9nzjpmfPkRbpvQ4siqehJqjVx1oK7KBKWQUHz3HHtEeoCEeiCjgnBWpXiXFHovPhQL87uLRAsUqHE8gV6xZmU",
  "key23": "3XjkKsU5D3SSYseUXHF2NxMEaa1j8NDDfHzsgxTnX8WT2q1rZsgo14W8BWhs3xSzzhdHqVbEfPfS2t1JTaL5YsaM",
  "key24": "2naiHnZ2JzR3MWbraPq3NzCgaKqzjunAoP8KadDKsfSRPQKTrGU9mdA2kMtSd7su3NwUAAZu1o9Gti6VBAT7D8V4",
  "key25": "2RXkCAQhB9XFBY2JW7LYNRqb9RKehtu8BVadfh2H3sHRTLfz71t7phXBKMqNt4RTF7ZzFfA7jb22ewUNtXKV7nQQ",
  "key26": "5Mxpb8qp7vptii8rwCyooK9cj95xTpEa6jF6p9Jn2L62xvSbasUg7knaB7Kmy7wY3LYUmQ6Eo1dbB8vd6MhgPpKs",
  "key27": "5ttdBfW2SQKz79h3xQk7Kr2MEzhAQ5VTNueT7kpyFyi7Nbk9BkS5bxptDLoYpZwRUCFxHCmFqBgkiEzrkDoVyFo8",
  "key28": "4wYiSpXQkuZm662GzT6mijJ9ye8W9Lwuo8a6CbeBUJHuok19iJ6RekyT1AqA6JfKsdrhojQUmMiSZP7MAxPFMgJm",
  "key29": "3Eyv5S2r4vGF6YzxfFqHErCNUCtonurfxb9divwZzW1T5BSb5rPHnL38H8ao8Z9UxJbeyF6W824iG2yeqAUK5djo",
  "key30": "49mBGzKVLDCZX6UYP7mSFTa74xtk9yTszGaCxipUSuHN2WfjeyFnah85b6cdVCLEF2N2AUz6KbhYifLwGFkwy6vc",
  "key31": "2LZgzvWmnVuNYjCPLADuSxi3kjHjrxEhxsYafo7KPoxAhye2p3cqLkiQU4BVsynC2jYrMonkS2wHcKjvSDagM5Zr",
  "key32": "3pUf9yANx8FS3NiNUCGfe67K9iWCdYLdDG1o2wmV3cakwWZxzipbEv1iJD56FYTvpQ3n9GNZffpauGhHYh4jJcan",
  "key33": "25KXoifvvNnHuX3dh3MzUSyGQENrtHFrPchRn8co1bT2LebNhP2c7iNygFx2aAjd3y3uk2htMG8nisrQQdBG4dZo",
  "key34": "2JkY7V2CBV3eoTXHhDGansxiYzJ2ey55CHALq4qZu7FFhw2FvJfugyJnYzMVLPTarLjtMZjBi8UQrWniaLEFfqt8",
  "key35": "33W3odi3VsLJ6YRgA7zus3d3f5xvXCHy95nK38fHwC82iLwy27Uc7yXshHgmrvcDDzyQ2CwMtaL71CMeeEFYzZUb",
  "key36": "3LfTQDbG4jguYCMJ6deqKMcKG7Ja4mnoPuzHWkKPRfsyCbu6Tz13dSBfHQqNCeXd3NBoey1zPeFKSvCB6ZhmrtfG",
  "key37": "2M5QkCb8FDodqC7mdUHxKeVjjxxAF1ZZudZs12dovjyoU6eavHjpLcQjgMiSicNc29dParQRhRG4vLQVh3PiRBWi",
  "key38": "39jqTFEV6zpTxvtbgzghg2QfCyAwoEL3g91HBwrthApoDReJNsxkP4MfkzanvDmnQ97qVrDG1UZQ1ByhTWGY5gsm",
  "key39": "WpdGDk6Y2URHgJWs1ewTyt4FkTGcixBVrG6Sb9T6A9bbVw3BBvZcnLRkTogfEAGnEUbCh3j4MPXUbKEEnLQSyb6",
  "key40": "23dGN3rwmUdS9JbRAykTz9YLsadkQUqjZgDfrU3un7wewLaMt2Mv9MzbPKAKM7ioT165xMJrdffnZsvdkD9Dp3S5",
  "key41": "3J2nwUYTCNUW2B8zLe7SJ6dtZPvgeGwLSszUjrdamjYbBUdhXYW2158JEw8neLmAPs2TzRxvkKaKvGQvEF7NiEky",
  "key42": "5UHCSvrnVBpNeBSrNyPH8WuGi7LdwumCLw9GFt3WnVBQmaAfkdCdmcH9j9eWywerfBqPoZmpLMUgjv3x9kvQJu82"
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
