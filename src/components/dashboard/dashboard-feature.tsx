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
    "2B1yyErYdiEaJq34gKdocUMasunAHXywpBKvvzUZp69TeHkeRcXjRYdDsK3uvzMPBt4QXBS95KAhnPS654pCwrXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qtc75udWMfpvA5zGAsGJgvMMcrDgqmLkZ8sxbL4cEEF5pZdqkHR2LcHUnfCEh4TcbFLJohJy87h4z9Udg4Cazz2",
  "key1": "3VcLGV8UKAErai28ak1Mzc8JTYQvTwezHLDyq56JBJ3nyFdyJff1t8AYLg4UR5H7wRBakHs2akxq3YtFi857UnZK",
  "key2": "2FrU3AUdP1DuPxX5qxRyqg5iSBGJo3o4sdP8R8sxzbDzEriu383Scb6wXyHNmyerFEA4AEcBmDuT6wbwUiQ99HRs",
  "key3": "4iGShpMSCC8v5kD7BbdHNZXGrmhuC2HQvKUu1G9ymTQdvDzbbP5G4pRk3yRefZSttJqLjGbDdHGa3eWwWSFRWm9M",
  "key4": "4ZkRMmhT9tUkWZzugDzLe3CcJf9kaTAeW5Dr8W5q5jDSCo3Xjmm1hngPqdyjNYfPPAh73Zwhmy2kbuLx7pZ26i7S",
  "key5": "61WLaQTyxSgFfJgckMdhuzDa44o89vzJkMpK8AMrWe55tgarK4ggcewn2AWVLv5zq1RbY97oBPi8oTdZvW3qqY9a",
  "key6": "dQRRBiN53KUggWxHsntYgu96ciAHgzBg1eg8YKnp68iPPAqX7NkPGFrtaUUVwbZBMU3iDxYvzSSRd7zwcufaZ83",
  "key7": "4SFRz3Z6j6uBstiWmH8A6WFqMXXULNsZynmFFjxWLcHLbdYgBcaxFnwtqKGyEFvfzBu3Bra4qxnqPguF8jr11N3b",
  "key8": "3bYRhHaxjRBgL4n6cX9K7psBTFMW46eg2TtRCcXU8ypYN9y7jaz2SFE83GvheJAXLt9fzViwd2JqgSMgBXECKg8o",
  "key9": "37RSCwo7gi6HAsqJjbyNGBffM5YAYXTZzpFBpEUCwqJ7TakUbWnRUbxHVt2nQy2tLhe8A6G27VduKNsnnmppWqB6",
  "key10": "2w9zc5PiaabbK5R4d5BSu1GPF1ws5YG6pmQrAepMZVvWPoADCiN1pfGEzscGwCj6crNB92kPiy6XUovW6KLVdQri",
  "key11": "2Tsdq9XabwqLHEd3Gz9FmyGo8qEUqKsYwvmdMciCJfUoFTvnXGEpoSthUb4mcN9oo4xHC6RECB7TTgKphyx8gGng",
  "key12": "ZUPDh6Ztoq1tRezrdXcstMHdYUQZH7mKTi2z1LAMRS7XeHAhM33L2Zr6XD9Gge5xM8NSa5UJUSEtnfAczSxdzko",
  "key13": "3dtQwya5x9AK9YuZabyme2HCmcHrNbg67dwZynf177A6ZDcr2essnSZYh1Ey8QiLpcWijZ4N47FMbNanXEFcjd7F",
  "key14": "3MfbRakoxQR7AjBof5mZCrJwGv6sDM7NuNSgXbCzDt63G12YdC8cCdttZEGAGMnfHuLJbomFqhmw4pVdDGXZWx3k",
  "key15": "61rzD4hxry4ehvdHsWcagG1WUuMHv2NaUTnWYpUh2rgPufFRvSVjzzfShRrV9imexTe1wotV68w6XJRzcuQzZ9UH",
  "key16": "H5AXSvATmRhk165bsjvUoYFav6bwoduMBstnCTeFUtktD6nMJrUEpfXMwwXJy1kSC6ntcg7bmfA3Bmv5UePYwwK",
  "key17": "4bdhLsY8qMcfRJPSAM8YoN1M3T8Hqda1fZPQbgpm59mqU28gvmBhBzdvPhPVWis1Nbyysophuo6cZjvbkvQvAoQq",
  "key18": "3zT1tXNUQkrVzixDsnmdTSbTu8enoXbf1u2bYcQrEYDnDXJswEe8n7oU3FeXS3MvUoBdPDcJtFHtc7nbSus2gRkD",
  "key19": "2gKaQodseKns5pp2iX8ufQ95mU8m7dKPe3usvEYof2E1Ms9vyLupVWmhDYo6h7Aiq864TaozYijvLkEBQBDqXpB8",
  "key20": "5UNFKTqHbAmqTnXVowptfC3JwPsrkhJ8TCJjFaXMPWncHbnQxLvSBkFkSTa1qwjkYqWfVKwWjJzh1FTvT6dfTATD",
  "key21": "3otxddqpUdpT1fKHDRpVowst4pBNycysV2GEz18BKy34kJ7r5WdX4AUT7SUgMB3RVt1t1ZPxdYMTZ6exKfc8HVnN",
  "key22": "3wvaAAZpgK5RrrHQmYqvWV5fAxsSAjSxCpGc9hN91kY5PFyLEN5MmpABW6nSaC8x1MEXCsr76N3brWpNrGB3VX8V",
  "key23": "2VSSF5fHWuLJvAiZygTa698a79ypcWqhsSVjSQpBNUNALitaCMWEwUgbgDd3Wyhdv7wx9oBRUc5hCKUCZsP8wxMe",
  "key24": "5EpzboEZBsymL7r2goXXb5V6o9tdbp5WB427X4E6Md5B2QKpw8JR3Nn1Rbu1wDMqXUuyAWcMY3iVaEDjTYG4v9nv",
  "key25": "4Jdph42da76P7L4EpYPeNU5RKe7H29j1jAwfHzS5Gt335rj7rcS8UTgRx5f3L8yMFJ7MaqhpzPFiHXjQk5MLXL8m",
  "key26": "56p9VdvAbtyA77Yc2KLh65sU15ZaWREJqE7EJ6ZXBywdu9tJiDUE8L8PhurZFnj4qSpG874KRaAHYNSXQubiaBr1",
  "key27": "4yGDXwrVAaZ5GPBt8bf2Th9hqUJL2quD4jDJSZH8nuafDQXAuZqwxP3MXGcQmi82d3h58w4WUBqve3uXF4etrGht",
  "key28": "3JmRUBerDbC7JhsEeVRyk74PW7gB46HkvP2tgX7RwZWeVBPPfRPKxXi7z1ehBJUCkLMZ4DfijiyopQ6w61dd4GPv",
  "key29": "5CjosjwYPuMauQMkTHLjMvpsxV97nJiLD1cQ6bsf4XJ7YfP6y1K7tAJJbM8hftXrdRt6espZpoWaDHyMqTwfsCYY",
  "key30": "pSqnMx6dF8wRUH3vrrjcvcprvCumvsYZTPk52GwK2dGtrFR4FE1XyoP9BZb2cUCVZFmzicixkUTMWDNEcMG9FLW",
  "key31": "5HxZ8okYjVDsW9kvv6QuCcsBj7t6LUPR89gaTokx6mDNCHStabXU3Scd2fSSNZ2pc4yy9FU2idETkpt6Lrcnd8fp",
  "key32": "475gtEMEX84VNNYPNQB2ufirVTw1sQRYjAX57HizVEdvQbQSPyKsyRXwZy2q2EXz2rrsG6mXxfYdgzKo8jEsDu54",
  "key33": "66PUjS1AFRKiCHc237ghW3k3dyuVjH1Sw76g6encTBYertmndfHQA3THcLBmvC9g4B2Z4SAYrYtgreSFwSysQphz",
  "key34": "4f9tBcG22HLAPEgNSW7wAy5P8thrVudNpieLhnEYeUh1wSQFUdzrhyhhLLxKXF7MMzqFndp3sAofi1h2q2pG76ps",
  "key35": "2Uf4Xrpaif3zNsstNtvoCrTvDxueEmHTq2GnzQ4TZY4DweA5nwV85y6C4mz874drfuGSUHwhUuF3BWqZJysz3cBE",
  "key36": "2CY6mSLafqXY697V4qvxgPMu8cRWGDgVnU6HsNvQYudVzkCiNBHv1QzMdfAHRRNJGWyp6dkRDCzjgwoXan7G5CGw",
  "key37": "3XKzxhiNrNAq2Nhe1eXYM4QmtC69faN6kjqXebJ1GaPPMJdLNns3wiX5KNnVzGxFxf9PUjNKsuTvXLTDD4bAzb5X",
  "key38": "2jcpXoPGh86rXDEKjzTqR5DZBj6PGHGuS8Ck1JnNNGvzMcqpg3LrA8pYFEw2xJzsjgECSArFYT874NSApGQkmbhz",
  "key39": "2Gw9AKA4FhxHsPERwgBw6pQbzyUvid27pmpfE2oV7QBmomMvPH4FarDBhopsY4kyMzLABhTtrAtBWcpTeEYYb2sX",
  "key40": "4BKzdrv2fe7PqsCkHZ56URxSfoDNgKnnCYmjFHDZGHqAWM9oTgYizkCyVdgQp76zFu4T3AS3gGMxVWVwjNKfkoKA",
  "key41": "26zMi5h9QM6bZZAYU8VPqpsT85BphxN3oroujZKrppwwcRjCzSPKUneufZ7YceHFxMyMdGUrLXEffX9dDE4ksF81",
  "key42": "5itoMXjRt7L9sxdVMJ8xcc5ZntcJpCPMBx97jqbn9DZENYcjxoH1WvtuuVTLmRnKS9SmzJaQREb9jXspswFkT9Uv",
  "key43": "5ucEuQJfrHMK2gV7f7mvTmUv9GpKmBzELdcYBqoeYMSHYoz7HRXybAoSwckdWfZMZeSAGkZTP69Mf4kn4XVWzVa2",
  "key44": "2S6LLuNFFp9suDyjaghATipUfGcUYC9RgHmQPQtS6yzXt368rhdse1cDHnosG8oqwpR77m2ANe8h75HfiVP1p6N9",
  "key45": "66hVm18i1DmdK1sYk4GFzDADuFpKqE35SddXUzWUSXj6UUAwCaqVAJJShWH6PuurDKBfrTLEKokDxUBtEfSQB2K4",
  "key46": "2CNCu4zjQhLHEDNrXpCy2nZASq8X1ASfVfv5G5662yqPxLGyeka9XCpW2yKKQLv7idpcUk4dZgNtjkCDxAqdAYHf"
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
