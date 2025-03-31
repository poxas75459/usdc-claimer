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
    "DnbxYuFf7mB9s5u7rn63siYsZQwGNLUzSDKmqkQckxTDubbpqvjZU2acfx7y87FvacbZxWHAzkrr53aPFemXkXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aEskeyeJLrnX2xCXBBLnwHq81banw4ZnZ6qJkqaYe7EvTvHFR2dj6ny3M23hwxwmuHH8FdRs13nti3PtTui1j3p",
  "key1": "4uon7EDEJkLc2dGhwRdyWpJ6hux2Hi2icA1SSQbKfsUkFZNByPDJ76y4oQENTmqHzBMh3nbrBxrLBzrGgZ3dmri",
  "key2": "2WJpoQZSJhcrrjS1wHTmuNj2nfbgVbYnFH4BykyXyd9gGRcn6cHqSd5tsDx2WQ28N8ZbW4yKMc7nHRw4rfCFn5tZ",
  "key3": "2HYVHq7eEgR4nnATQot31wm8iCwhnNkHWqTXbHDECTws9cRJGfnrWd5Mc4YkSWh1J5uds14aDMvdhq8oyFDYmFnc",
  "key4": "48jKKQfHqWmcvPXWEKeoJ2xARoxV1NyPFg8n7xt9BWHpsaPwxXmY3yeGHZ8U3QcKQTepBZshBSYSbnYWcwTaTCkf",
  "key5": "nV2zgdzFWQqP4g2AtzcFGF9QWQhAkCzqTwkXYobzeLHuymDSPsqnJBCofyc3xqN7tEbshDA8MmzX9cNmDoae5hE",
  "key6": "2QGbhvWWJE5mh33D7P11SG9ShiotUHHKUQ5FxWVFogRPNJpA8j2VWfEKi3dvkkXwhXoEa1KjnoarRDyKMj8f9uDv",
  "key7": "2Ma8eYs9Hi6mYsLD3QUbXywKE6KaRkpwPouKdkseye8x8uKjhizzfPxYvLVqFq3FaFMpa2hintbcF6Qw6Mwz6xhM",
  "key8": "haYsFKZixpfakjVgDqT7pxC8VcwobAHdyXUNiqfQN9sR2nd15yakrvumDtVjrSRrFfmG6ak5NhtDpDPJRLoiSTX",
  "key9": "VMTobu977ijvETV5ziHP5jtg5sP2TKZp5SNpyGMCDgFP15bFGZFMuneTabRwDsxnaYoTY5qo7btcrQLQanhYvBS",
  "key10": "48BfbVi39zAjfmy543evefS4JTx6D2ghZDhPfWsqvFQcrPyrHaX6VkcW25ZNBGTCgB3Q47939nKCv3ovmm2eJ25H",
  "key11": "4tkfCcDEJ61DcDRcvZrTD6B5su7VFAWfN6jq3Zxqgd78QY2bkPsQN6WzBozobQkwvMirdHnK8HAD5fqWke2FfCN",
  "key12": "3EdUqE48KPhhdPvMH1GdHVKoiTjBvKnCJxVdLNXFYSiiXgoCmTwk7UsATKEbrWQpW2ii51as8exVvFjxq2SYhJMp",
  "key13": "55RkXSSYceyAARLgrRGJU8L7fB7iSSJaHUhRksKirudzq25yVAEveZoWBGnL3MU9rjKMQerr8wCVeR8tdVJaPVHi",
  "key14": "4HJmhwe62fFac4mmqUXJsebCcCK3RPMa7dnEwpRcr6L4ZZFcyYMWbgBjh68r75Uec7gnTy2XhsU3vic3n3S5caMY",
  "key15": "4pgx6sJte2C5UWzbdJ3PtbV8XGCGWN5bDxR13fvfpDwZAwvraWnU9DLipqnKftVggMigKXawMyxpo2FAbkRZ3NNN",
  "key16": "4SuWzGD4sqJZdZD5i9YjYZuonNXuTSVUqQF6hK9LPo5MLvS4Z9B8b2hSBNxToci7prjA4xX6NUjFSzS92vgAb5Wn",
  "key17": "54hiBfSfwg31M3uPg1gKTiGmW3cgMhRFZVRNTe55kt7jkx4R3ETS5W6HEZdH2AkVmN35oM3AviDEBeZ6PxUGA8sz",
  "key18": "adfgz3QsmhKFxRFpyUTy4rz89YgMq84z1x13sMBXZk2u9uCnuWbx3bafnFDNqtmST7XRLBdzK2QwPND2YwN16Di",
  "key19": "4XJaA8XsqaMKBGCddwVUGh6Q594zBT41QosYpfs4LfPkVK1uVJXqBdBEEerXcKgjr6v85a91ZpGhJCN3beJUBjdG",
  "key20": "4Ni2EFmtL3quwHzyFksxLy2GmJKBxpH32hU5pe2F5RZZnoDHFxsnfPsmTf7EeSJ4NEXXvmxYdpdtYMyebKdXtmyC",
  "key21": "3jh6hbVgaHB8PXigf2hm8dskKVEhCyXUi8B9Xkkc5BSavLFDb8skVHCMEFA4RtV93GB3RrMQKFFmR5jopMCAq73k",
  "key22": "7NEyiwoNZ6rxgxRNeW7abFDqAUyo3E4Mo6NUzmx8HBKFaCfyhYMom9JjhmSYruhhASHDJhXXnHgEzhKyo19XcmQ",
  "key23": "fwazEtyUjgwsAgcSJ3ZY62Qs7vZHQJEpw8h1wb1n1CsLpJbX62SXY6rUMo7MbgcvtfPHmZAkPeTKWyYAPamS8rc",
  "key24": "4jb8LxSZZBqTpqkGbzecQmBEUN1q7xzx7NRjEMSE5THKijCNEt6kdyXfSmDsef2Tm2369MD3ZDdPXe1H9LNQuHC8",
  "key25": "3eqXznUj3KkEpG7ws366n4XqLQzauQs2qHAeG493XwyBGBCre7B1hcKoCMhgJEq86A6o1LTSA1oCLnCCbGWvxqjy",
  "key26": "abx5V245LQLN3R9S7yVFcw4HsEmiY1t5Lp5HeoDdj53uAdLRxWZAYc7PrhmB7zUVh3ZQt7yeZTHPZvLp26Nr4QG",
  "key27": "5YDKRam64PGHL54oPfLKnG2cpiCCz8VjXzBSQWcX9hqX9Vv6EtnWY9BcuQo6731KUMJrzHgmJQBoFq9b9KNT6YnQ",
  "key28": "WNbxkzEdPPwAZ7AaoUBWEZPBuigrFYk7Zb75QTPw1msjWrfcfy5SQDzDBLT1ygGRAVkB3S6DwLfJstSHsvZm36T",
  "key29": "2haTgR4s1Sbi98dBV5FTQwMBK262XpeS9XCwC8pDfFdLnE3pS1jfpk87Fs17UJbKEw1Bh67DCHBYdkH2Q18LxfNj",
  "key30": "oVvtsAsK24mqq6nooNVJfK8TNECx462oEfodAbniiGkGZnxa9NLVHnyWWXHRx7waB8WuKmtTbW3eZ1pJKwMZGo4",
  "key31": "wn8R8ZQ5FEmtRuA2pSv18AWpAi784WFTghUjKZwE7LAJCXffFYfbovCxMMd6bv3jdaHQPfqAGFqX2RTnpCkpL5P",
  "key32": "9QCsycrU6A7EoYhuyeeNJzTQtYRrQX36VJZG4d3z2x4NLzsXGRotHFkZNjXHrssaGquv6tK8C4RWEn1ri4QFLms",
  "key33": "4zpt9M9vQaWX7ZG4b4mwnUJ3ivGxD85D9DoiRmQkMMopzbqfTv8MVQbjtazZStAmfVabNfZYjfxihH8X3nsNE18D",
  "key34": "RHi2z9fn5wbHMueYBa4th1iJB3w9iRr1uDiWN8Fj3St2HMqMQ9yN8XEy7uwm7HG19g55EiYFPVPURuKSuQH9QR1",
  "key35": "53QPP3ej594kCRKd7scGUpx2HfRB5tJDxTNCDKGeBYcj6gZPs67gjvG2scSyZfsqkbTBRPhWA51ibijKP2Hnt4Sj",
  "key36": "2ndtJjUowZqcnBnkNqDf6Z9sDZ9HLdZBHpnSMuUfdubXDMWMbJ9bKxXxYPfaZdA7sNPMnDeQWbhYQxSzXhAJ177x",
  "key37": "botRuYycovm6GptnQbHtNkherTBPeqDi2na5JX78tLuuWHJZwCnM54bGXEaH8GNmiouppWZEmMnP3rptcCEtuux",
  "key38": "25UHh7T57aBfY3UwcLp6jMEFakyt7sHuRt4Z8RqCcraZgU1Xxz87U7Pu4cC3xfa6WGetcA7KWnAhHpfXm8KpmwMS",
  "key39": "4HZNcync4vPXa5ehrV4Lm3DCtrhhzS1GSywg5GRMrQGDjXMab4jZWFeAYLRYbcAbdjYXC28rYzxisySfiBnoR3Si",
  "key40": "2unWTuBQYpmMfgkXvoqDAszyrys6X8LwACkAWhGmTC4sTBXeo3Dwyy5GwqKqkmZBEUCJV9yhS42NNm9VMPH2n382",
  "key41": "4ScwwMv2vvmi4zU22PQVKJRUxMxPKgD4jnR31Bx9iH7pqWyMtzG5PkN8SgDyUwGS3WNaftNnYapPF6UgaEFG1dew"
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
