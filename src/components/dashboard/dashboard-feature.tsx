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
    "663oeatGRJqS7Yh7bRZRAQMsFqCyn4Ue2fNnEApY6pwysEgkPaM3ahakKGAysd2JwMpU8PeDCF7pW5pB1S6ewsyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iggegnbCXghgj2CzmJz9bnBt2TcQNh269DmTFc2yKgnqNWwMo3jY1P1pabuSoytMJfeVqHgGTnYw14co4damiiU",
  "key1": "5WQWApJq5Un6dZ3HC6a4nw8D3La8hJKQywV9YCBVFHAeHkjeNeMtND21avCHyFFBjnKiTUycU7cFxprSvT8mq5ZD",
  "key2": "4WTurWvcN1qsF1WQc2MuxGBHyDXcXBxFkgyQhhnm4zLh8vkNdr8YrYMXTNxTp6NxgU8UfQmNBRGTziTsHmusm2AM",
  "key3": "2FMRxkEwGWq9dKhhEKsFWLpFNZvmM2TNYymvPgmEkjDeZ3AVrEBLwKHkHjUU5xGCHLaYuyvzYLpA3VhKgrDoX9v6",
  "key4": "2JaTuXfGQrvxUMeJZF9yvMa1TWGWCQxxUn6DbRMkFVr9pMFk1TTNyg8ucXzQnjoQHFYhPa1g8dzG5DMERg6fL7uM",
  "key5": "3r1oPfXgApQwwpZWhmAPXRVSz76RhNrWZBUAXxyyVxuvud67LX3SMDKQLwVE5aBsj4q3C7qXoarzQeB8rstcLDdR",
  "key6": "4MKpETx8a6J9WfiEeoExG3DpnRAynNqo4PT8iy4XU2Cu3bGZamMX2CoupkWCM5P3HKjBDaYDfz4p9vpePTjPddB4",
  "key7": "124qTP4hU6CucNW32DTzQEMK2PKgMnRhZzTJecWewaMF3qBmjR15YpXk9cbifxuAKiFLWryqU8psbg5Y8DfnLiqm",
  "key8": "4YJr3c64aAEBchznohKLJyRW2ek7ga2wgTCEPAfUdm7HAPN4FnsfR5w4A5GYrVhg9Ds8wzdgNpcxKUVxshg3xPed",
  "key9": "4Ac2K2aZiS68yUa7uErXeYMAwr5ts1MJXepfz3Nus6gmAo9MV1LbMjpo57KVYjnXLHmjcoehyfpm7eoUrrW4X5du",
  "key10": "3xznm6FBCMXwfpXcA3yM8SNwiMmKfZMUGEXsLcTi3DSHf24BVWCH5cZkgyifhV78tfqsXmXazkmGNQkoKyXZiYsC",
  "key11": "VAkBvEZyTbec1MtrqdDso7i7PLqKLmxU9KfrZHK6GTJRbCLQPJL7ScU41ZQHaVJ7EYhiLHaGWSs6MvbuQbGyuTt",
  "key12": "5p7pLadBuL1dt5eUi28okFVjiYnhYCNrampMZbZ7smkFDEg6nVkUtum4akiofbBCrtHHh8Khe2EG3VQPaFBJCBTY",
  "key13": "4jgdoeJKJgNGY4cp77pWNUrESYVZnDLqRdAnWvJhKP6vCXGHbaB2U5Am3f6mqorEcHRhattXKEJk6vh3QqyS48Hy",
  "key14": "2fDS5r3UgktLP3c6wDT2akujSnqJe6ywgfmZmjJ2mRUNiUPtrpUw9oiFT2cea3Tj2bZDamzKtcsJb3jx1XTTvayD",
  "key15": "4r4CGt6tdgEQBkReMdmgWmVGyBtzvHU54r13qqi5KweuoA3EZiNNA4beiG7h3WCS6m54Rn4675SFAHaq62CBjdyS",
  "key16": "2hhHGoeoa9mPQce9mS42TuXxhFvyDbr1HRwPzfndfqJwn1T2zNuRBhuFJ9JdxJ6eeQ9zjkGcrXne2dFQ9dyBXCGV",
  "key17": "22vEXG2evkRMCdKW31bfihn6523CNCBZtJVH852FoLSkYCrrs58cdbmveEBWgC6fnCAUnc2XFo1sEZYZyEjqL1Qk",
  "key18": "4ktN5otLZTtyE5wNkLQGy6fRWRJGxu1XjaPLfaDhBYXcubuCXEcEDGcDQDwrxZ89WHKjBn6LwzxSvhXFKszH7wT6",
  "key19": "jeXGW8dkdwg96ut7vwbTPGnXMcsBuDjhZvRy6sJsfBpvYwWPsu26EgMmFstHYmtiMCHYm6SnNLZFKnK5DDwYU5r",
  "key20": "fpo3aXPZRDhUJcC1vYTMzLB4rW2aKmQY1RjsSX6xKmsCB5SKLPDz2ZYQSEuEkHYVSFnuM6LHbMTjb3vhEfAgfGC",
  "key21": "491DdiBspEwfQotLNRu8z1jytHMQJEadPjyq564UuNycDxphKkMwSBBbVHN2HqvAyhb2PoJyuN2TcPXDpnkis2b8",
  "key22": "2zPUJZctd2chZGy9gRZmmskLDWtaDN97jwbPWdoM9WoVyWfNcqJ6T7jLHrVAEaPzPQ9QeLzhx7GZFxSkEaueRBqp",
  "key23": "4fHYnDfkgk8aKMorJhChgYki5ZWTtJXcRQrm5VfeA6iUxKE4ZVGXV6jwgy9a5vDQry1zBm9B34mtyrhwJnJQLH92",
  "key24": "3HNyGjoFYKBrfjNT5UbdrTrknMWQY7jnLUTyidDJYT4JTMvdsgVM83dgP8re2xkRKqhf3NkogpnQGbigfJLosfXW",
  "key25": "49NxVCdv4p3EGgzXXN1A2eARDYTEUmBj4XFXkeckXJbwu9Pw3bMoWwZ9YtAhrPdYSKWg22AR3nqkyAFaqtmo9GH9",
  "key26": "YYKXuFHkqruHLYTvPsBbtyNmkoHMAe73LxjP48ofsG7TUVESedFFPoaqnx27LsTPw4rpxFz8RzCWmU2XTpJ1UoW",
  "key27": "5pJjtN6WcEEN8T6F6NU6Hos6B6PpG2a8NJbeGihaq7hDV4bRzBnujGRQjdjoE6kD7U1RnBk8wMLXVTpXyRZkHX2v",
  "key28": "3epz2M7k9gqMmoJwFrTbEYA5tPhimisZew2eZxwy1CdZ8JE1YHCh3xkfLN1At7gBiNzkuLfRKTb2H83fkAFrpWYu",
  "key29": "3PnjfC1yX8pkzFgA2Nzax5w8Mbj9JcPuSTZyykZWAZZsw5ovspZpnadjqwBtEx97ieu9NzVcVSNf2vraGseWKW5q",
  "key30": "4NQ7Ac5LpUhsNdrQJmpQ6dLSg8jjBs59aPgz9exT1FhQk1tgcxh1EtJVpXjSiUShDzfsKCZGXE5pfb86DRv6zWyq",
  "key31": "3N2FmEkFnkmvXvtcDxcLShRxVgPf3AWijszBV4DsYAjURaxPt1hATeJ3tbCJLvcokTc7SXfiAoQKUZWHYBaX4y7E",
  "key32": "4MtUdgpbgiBibYxwkb6fDHqoy87mqj7MP5fnQCwecGtPdCU98MuruBzcbw2mkdNELVrSLj4TTKMrV2GuxxZYNzbb",
  "key33": "4aUKUaAzAwUALWuuR9ktovLkobeT3nqNN7TXCwoC3nYF6sYFLnPisC2oHbzQ3mgcCtQK53yvCrq1cLUuGJ1uPevU",
  "key34": "37MELkLRsVhFnSZLFAxowcDhWpgCGP6NvVo1mmMgAVGCRXTRgN8CHHLtRbRhPpi5ibyvf89tMrQ19TE45GRLFStJ",
  "key35": "2WSMMeVySa9ESYbj75Wcxe2iU4s1qMR489RbAAchfsgvK7bJrSQonot6P6CfFxL3R2C763xu2QUDV2bjbW4kMKPW",
  "key36": "5gneeZwJHm9fboXwjp3oWY74xogRZog238YeBixnVNFbnB6ifKaKGTindD4PxPVCcVNyGge5fsZ8x2FQvd3rQXN8",
  "key37": "4p24TBgjQmpnJLwe8n3yuMeHpbofnQgdhxqDz9a3c56kpu7T8PNyutAVrr2vZzCNxeJMA38qx7CjnCbLSQk7dEZh",
  "key38": "3Hs9iAET4dtmmCH4uAfxzTUNbN17wkHcAXZSyCTuZB9ERFpbF3JBojgsEMKY6YQcwCUU9uBMjDs4zaUJaNQ96zB",
  "key39": "5ja9YdCriCeWJXhm5JrKVLq4LbikvXm8TzRbXfVFWtwnnnakhskqbsqTaJjCJ76WdeFzmeKZu3ecFu5eqfP3iM25",
  "key40": "4DdAvMYUYZMpaTi6vHchEens8ZBW3TAwdD4j48BhpG4ute4MLNgerEphVQ2H7XTa3V9DpnTm4uRzAxrhEtDUDwWm",
  "key41": "5K2tEm8HJgAzjFTM32Y2s8u9QtLtVnAzaY7Kku9oKgguzCdEUuowseEh5cKVvE7tyofWuS8gCdr7oF4gxy9B4bsd",
  "key42": "UaiBdDkkX53U8BFR5NXX899RVRsXhDbsvaAKWZQd6M5XPA87hnSggz59RdrEuUixHP7n527r5JQ3JDhvgwJkC1i",
  "key43": "5fmzXNH2wtHPSTmVrAERNCk8njRQEYzrGzZeEPhy7bRrvZK1hkbArSZSuF3D3hsjLP6pf8Dvi1yJbyD2MJs32nvE",
  "key44": "2UGHwucGwViwYvVuDJTxSfQLrigyjNrMGw7iwCBqXK16aaYgoXFW7Pd45Y6chnCNbLEwFgeZbodXuvRreyPBRLf7"
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
