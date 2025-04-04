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
    "2i7T77aM8qz3v6BMx6NfurPpHGX1z7ZZDX1i7CxXiXwpBfiN22nSfQTaeJNQNLv1j3MYv3YscDCZRXRff5HDbR5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ueb4WMUMwxtGYd8FTUfCGA9YWbuU4gx4drZzLHHEEKNcj4Pp6R6nGpyURKUHcuL2aEXNoT35svku8iVEsS53wo5",
  "key1": "5TXbRhVLBSapKfNGtGHPCRzyozXqVSkrkg8Kv94XCWMbg9Lgw9sp6g6wHRDSRSzqtzETYW9KHaDBcAohXKrYWS27",
  "key2": "3aLChM6T9xtyqWLBCe5fPiBEt3CDhodW6qMJTrZVPcfFhA6hX8tH7UwtLmmjczFAcanZ7HLC9gjffH96fLx7bRmz",
  "key3": "2SMoiFLQsXSoc72peuL73YsyMhfZbcSNchz7f87J2zXz1HeXx5Sk2A51DoXBZZrwwtN76wHmhcyuon6JG8Wgg8FG",
  "key4": "HQTBBrZeoqT2rfcpFS9jq7tERkY2xp2QyjXg5XAn5NejQYmcwKNiy7Me6wUiHR528KBStN15W1SiZYbJYYWHGEs",
  "key5": "4Q7aMR9NERs33y2U9oqV2uNA8WUvAZVc9gG3Y4agkA4UPTWg7p5DWT4cNKjjiiDkPN5QwSmh9uuwT1xd4iEudC7f",
  "key6": "czxk7nVuqExQYuk5CC4Eh1HdpZfL1UNbbK8VWTuWE4C7egUupu6pqLKxsW29cvDyWSiQeVL1c4xAgvZyn9t84BT",
  "key7": "goHTzKzqBYRGc92CHT3rkRZh8LuethwumXrqyWDALrWPuKrDJA79UxzNYU1CdvzrsjRdb5qasPGTGgRGBBAD7q8",
  "key8": "7mt2PJUKDJKGWbGSNMiaF4B1MERJ4bsGBdhtjg1iDiLtwdiHAs38BGFcBW3m9bRxaWRuFV8FMu94iHeWpcXGToq",
  "key9": "oySpDfuLxCaXjzWLegAa4cHFnibe3RxfGTQfSfXjUb6EpjomNRnufK7xGdH2kbpymL86i1yMuQha1GcZcRe6Gk8",
  "key10": "2ou9iQzdxKsoLjqX4h1W6GaF6kE4zaDwCc7V6FTR479PWkezdiqbcE2FZad7apTzFdpkKzSL2PBPVcensY7SJkVL",
  "key11": "628QReiKWyUqv17yzBnHuY9CyYKUoE1VmdBdMcbkkHANqXwm9Rzroy1nfeEX78nGLW7K1MUVRCoXVVQjwfaG6b7x",
  "key12": "5NuvgTgKEHpAS3WynxDrqFHbKVxCYwQZdGFZvGQLPChCtZRjoTA9ovRbwJJDGYKBUiYY8rTEyuqpAYjAZPe661cs",
  "key13": "JKu7mMDBnzgWquVK5uQ17tkTtowD4Spw2Buuy1f6vDjfoerkb2zKAcAMKegVwZbeJ66CPyZETsnbGewKuMSjxSa",
  "key14": "2PSUUMP7NkYjPYXrbaaQ5pGwN7ey89xRtUgx5Ki6uaGapHzqPdTRCsLhQTgTu7oQL8DbNomr7cRRM2T8DzEPo8Yh",
  "key15": "de1YVGopcnz4edaK25k6hWeEAo3SeLYjkgTfJnJmuGXN3XeDYS65rRbij9XnV3wCqAiKZbvbXNLiksZCdvGg7Ya",
  "key16": "4za9MdGGE548S9AeYHDoUetN6RybyL39orxur2dhQoAPd6Ahs3bDEmcFQcnguxd6i8pPfY7AcSzrMJcNXQdVGQLr",
  "key17": "3baZ5JMtwCjn98ragvuvpKn8qESqSobD1eCvPKMwgDvvHd6UH5i4GwiX6pPUEXgTX9jwtdsBYgajHPcTvmng42Cy",
  "key18": "2eGivBBfB2W3vo1WcXWu1WFMx5Bh9pwVwADYBtPC3ewLJfZk6y9Hu6Vai2mDfquqAfL9oStWF3gpes2brWAJgvSd",
  "key19": "KDmPe2fThMx14avsRyr8JfJQXtpCHCThBbf4GQFJCKXEKZt7mUhun8RAPi1MT9MxDAugzjvvzy6BbA8CZheb8H9",
  "key20": "2r7goHpUxqk3FYKHfvmUZQ2eM8pqRFHsubAA255ux885EzHFaQvtDFweozF7mQHkZxXWMYsPWnJpSU1iHeiE7dxs",
  "key21": "5gWnw65QeNE2SsFgbxdYBgfnuqF9QwE3CnxK8zWKhDDgxKqNDQfJYW15VcH3iWaamZeEeCithBaLWWsbXrabF2bB",
  "key22": "3mnookEz9hxyztGpgTGNcWFZs4MWPQioPKWkbsNGKcCyZb86fpYzsZxU7fNfVV1fKFKxsYjN6FWDHyCtfJ9uPCV",
  "key23": "5bctJRgFhDs4vKfukyhhn9Q94Mcuvx75nFd1gk4MkbjcEtQfy3MGjXHAhqpTPE24JBZAKBsxcrp9EHqXs7zhLnmq",
  "key24": "4sXAV4jC6J1Sfzt1UoXGKz9kRx8nayaFFRnAFBw1NKPvsnoyht7Nc96Q8TLt8HWe36PRiVNH72GjadaXtVoaKbvc",
  "key25": "39prgo5P7vwsSZrc5gPuQN14uHBzzw6zCwbfNB17QP8Hzijww8FrMqnjM4LE1CGkwX1Z47T88ioUxjRkya5vTELv",
  "key26": "26LVKJBfL72bN5Wb7T8ZrtWZSeMngXiTB9kBQFSPbmUPcBAQqjq6evREJ5bH62HmedmpmXDGCfuHfA8AVVuDquNG",
  "key27": "tfq1K3sWQ76Yix2npJrNS1jhFQ9EagHokobaiGvjcrk5V5s18SBpF6XCdHwnJSHWu9gHvRuBB68SUCW2FeZgGBj",
  "key28": "HLQozjikoxbK42jvaKtCy4syCpVDe2qMbESbbm9PEcidfn2ioG8G54ZjrtNLN1w32nU5zyUsaYFkF29HnKY6CtU",
  "key29": "5JgdEa8uj7kXoQRJvtU6wjkP7KYUHRNHe35bXwosTwRZhRHEdjSyWDyEUFrb6nW8VV88oWFw5KJYVhwvHwkJP4gC",
  "key30": "4zDskKiMZJ6gGmSShM71smETvuhmLUdPbj4iM4XQEGoAtc3EB5C2YmRRQYuyFEQrxoHkN2ne2rn29MjP4h3pHaZ6",
  "key31": "YbcjWZdd3PgY7nuPStMPZ5ezBNd9yANkcCfcXcNUVxXvJ2hXYGmWE58efcisvP4imVDqTSWCZe2Yx3D3ChhMEVU",
  "key32": "pjyxKs9L6ytpef7HTKmabvwiUaia4aXrGnZjvCEZKhEuB19UaZcqxYjCvBEi33D36pxMAK9QyTnAiX1z8io9rC3",
  "key33": "UqzH6NiWAQxeiNaFJFUiAERAU3BskfGLnJhPAEqthKDG53Kf1a3VNpxUA6PkhiLZoJx3ng3i4TMw4TYJHemdbGL",
  "key34": "3dgjVDoBpMzTTV5QPrpqfJCBvxj6VCrVYcddgysmvQFBzaBvDHdhBniatS8kCDBvCSV2jbDzzJqPPWUyB6BJuQ8k",
  "key35": "4YpGEZPLx6x7FvGRmSsCWkukeL1fnLt6qfngZHRpe37JVYmLGzk4n6zhpkUaMBhuE5XYRDWiAwnpcKFRUtqTS8XU",
  "key36": "4qE4EDnLD7p2nX5dJnJ4voFQQNNJv4k3cGB3ZkuD57wQ1c6BNeH2XdW8TbEs7w35BtmRBaCSgcYfiZ9pkQ8w62g8",
  "key37": "3oZS8Wq6pne2QBxZJv2V5tmaBTNFzj6RJXT9kyGWXzjXNN6sxCRStQYKXTMyB5zKxWqhoEUQcuEsAoRee7TAoTC",
  "key38": "5qes1voDznkERV8ECHuy5tPXPxT1v3znmcWXLf9s9wBtVauQffw5tdjP6ZbySx4QTL3Vu1d7xfYeQSEpteDiMSaX",
  "key39": "4KAZYiHbfGniRT6nib5KFi9dMKnbG5k7HSiXJTAxkauyabkXdrWkYo3tjcUgK7xAiKpVkpkkDMq2PfqVdRkFwwZ2",
  "key40": "4r6MS7z7Lq88xzEudBKPQyrTPw6fwB8nENm1ZFABR43hUFBXxzcqCgdbaAQpcwmYr6nituPqY71oKGU76n4msdYk",
  "key41": "5zxG4HzZsj4Mbz2jZXcYFwrNo1ATaCUatcWw9Bmtc47jLpJ2mSkWSowx95DYtZ8nWc1ikWJL2CAvDX6sLpPrEiAm",
  "key42": "5bwgKjLkk1269ucNmHDMtUCzkMshLjC2oWoWqqzyjzVNaeXg6Ehw9eUsikFTHEywjU5Em4TEz35MH5adVkcMtBzJ",
  "key43": "4JPACdePq8ChrxmJWrzuxENumsRHjfepez3HUKgncHWh3PfaV1v631B9wDwZftoaFN8B5KEiRau5qXLSrs2AZtgz",
  "key44": "2TYM6JRPKEkJ9z6NDwqPqtPtY65pRf3WQsD1DHZivyvGhAZBJ7PZaeKCuyuA79R66KxBh5VVTVvCfkrDVTsCJArx"
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
