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
    "24MsX1GtNie28vu7aEYRkhs7g2HVmZEFbWQyw1Y2yHUYecmKySXW3qenRLEDHV4Ht4Wdxkeh4aKzTrsVBuVigLXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrNo3qVJ5bTNBqu6CgesNEoX1cXeKjHKK1y3SWRfbpHA2kaQSBZ5SQSB6sQndXxrbGQkERTG2WYj4SkkJRWouTJ",
  "key1": "65wdTY28AUaftr7GrLNP62RfqZv2ME5zk7uQNKYd1iKBis2yQ7eYhvKz2BP9auu2DgAZRq2Wwb23Zt2CEcTRimHp",
  "key2": "RguUTMTL9ZzighUAQp77tz257EX9EZYjmETkSUSJPDWjQjkvNWoP3io96CyCe7sC8HaMTTg9tsW66vWGRvqinkv",
  "key3": "2B286AXHpKwcaxvurLPdeDjryxZsC5u57Dp6FYFZ6H6HbGUozwr83WeAAfth8kgGpXrhhb45gGmntYWw6sLV4jMb",
  "key4": "45zFg7VdZ7746aRDvRn4hLSu4CpgFSGTfDKNrGeV4zNUDDxNFzUyx6yzXJzQ13G7Eg3J8Cv9h8SKKxTkanVZXhur",
  "key5": "3NhyyuvboHpmuokNpKhuD4s6G5LwkEwhwT4jnaubVMXGfGi4zihuLdt3kRnR11jtcakhNHiZdHf8T5EQosWzeT9Z",
  "key6": "3h92Esxsjo7MCF1w3NkmSvSyHcvskE7L5g664fXbGQcebit6jtdLzDg9QnfpXpQfJ6aKsTEwhGYoqvAEyVWCueAc",
  "key7": "3LLh5UJ2ehED9GDB7GRJcYeai9QRdiQvEUab8Gq413w1Mv9HUsZXa4AEAH6exkzH9n2gx8vwJJwXvDkuPCAnpuHh",
  "key8": "2AnKrhp7Tnwf5Z5qr14QvYqvHD4q41Vbn9ZdvFuaVj1jbP2EChe764WF44sJvd6aJDzn6WQBEjYkzah1GkxCX793",
  "key9": "5pLyGJdcZgfZikVBjnK5QHbEcUgECkDKUtM9mZU2PvYyW98bxdDwgYupakfsQYxiBBLFzgtsbk9WWcVsiDuKjpPy",
  "key10": "5rDrcnd9uueb2PfdUft4MWdz5ogsr7DCsvB4RLJM1ejDC7N8oxzeBr6WRpFPa7i7KB7wnLxVTEL9pcGBGM3vhvAx",
  "key11": "44KKKRMaXFJcdwWPmKxjN2rKMRmmLTD89h3CfbsH2bswV7kGHypwTQf2TSLzQs22Agz1JEAirdt1KMiuXhzoz4bt",
  "key12": "o9vsgD2XbAdc3dwumQaGXmvpA2ZpdruUYVTieHnv7RNikT524mqeGx1fuLuYaayeEaq9Y4hyqsNmkacgQUnQLmo",
  "key13": "2kPcj33SAEFSYiGZgQeVBNiq8bkP68ivvhxnAMG5CnitJAQHEuRibQKYQ9uBfMqqDHGgq1fwsPjYi62RLCEi88bf",
  "key14": "5PufEa8ziVkM62DrB1ZcaXkPBRpJCeUQpRuavudMp9swcGCZzLSCQu3TV6jcg9bBBUo7xjCZgvcXt7RWVxuAWS5o",
  "key15": "4hfa7UA9ahCvUhZ2uuMqRZZuaoQbB1gzpcR9ofqH95gBx5XJx61iizWo511npHB6u5yG3A5UwzRA3ZqHmDVqBpcJ",
  "key16": "3uVs8iFjsZcKd8BzRYL4bQ9ZM27xoogfCEtKeq2YCKrAs12QHqdj19umFz4zkzU49Luf749yToh2kproqzJyh1Zg",
  "key17": "2HujxpSFcmkYi32wjMdMvz5syL4QWyrpEt7ktWXrBLxrJuxncpXmsqQe6yQYjzFQrDyRC7Q5xRv3awAPgzy2huoR",
  "key18": "2iCK7NsoKQ7iJoT6qKf5GUrm3y9qwW73oAB9eZds24f8N5aYkKwBZ6pWHWEbswwh3gGyoURSDXPjdr6oA1dHrFvV",
  "key19": "3p5RHrFGzhGC3tPJEs5kNgGhS6To7X2uf891Ukd5JwctxYxG8peqPuPYjFVN6TUJCCALNG2sZd6VaRD72oHkfLp9",
  "key20": "3kPps7NQs9zq13Q1QnDtU4F3b3H6f2AK6wvkqyx5RCkqGc7Bw9UhgZzNz9Sm7VjMvNTFgQLTASLoKH5MsYtWVmBe",
  "key21": "4E7vqXXPtRPvC4uXUug7pjzZ1RVh5LXVqMjfRD8JNTHtDBbT4PaEqMWRmChjovHMVzm8VEXhnCiiCmbZmzRX7WZ",
  "key22": "4iP8nkRJe35m2JaKSkhaciAcAuMUAXcPUdfypmuEky9iJNsjVhDvHmTDHp1CcAyz2hCGFkPwwJVHY2nk4MFqHPT1",
  "key23": "4NPp74G3EWBNEW1x3to9ohmoMJRdkL3mTcyZtYi1Rowt2WVGyFLcAi1ZYPFnRM6jtvvkKJedrv1SL8ajHjirKSFk",
  "key24": "39kRrRvS4EseH6a9XdLBnn4Fm1gyv242sCbiGrPoZR4Vkw1SmepFTwYsn6FgMkyr8KD1TsTgupdamGejo2nM98GZ",
  "key25": "TU8kU2UbpURbN6KiZrQUuyrnXHy3HP2VN6JJ8znVn6vSkKYaTKduyftgD6HCuD9Qj5AHXcvSf5nw4GS2V6FynKa",
  "key26": "3yspSTs6NfkwxkSXSix4b5ocDaFvPtoQ8xAn2JUDFwDhX6Zg9fZKTEigibRseU6QefSxLuZbBcQBDU5eeL9jwE1x"
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
