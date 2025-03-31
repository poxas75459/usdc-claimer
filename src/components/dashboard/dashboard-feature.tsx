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
    "2mGDm92xuKjdXUjmMKjAM4wL1NVWrhMWPSbT2ETSDKNbNV8frjzb44yVEFN7Cv96wUijMd6ScJCB27xbKqtNF6Cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3boi6z9o6CC5BknrxY7PdMTx49pwhxtryHG88tsei8cXLk1qKkD94R1DwpYui5CyHyNPmcemeizvpEGDtf4wHebY",
  "key1": "2M7hcr6sNXijhhQSzJTjzbbsrrshHehozCUg4WCR6WMLgFVTY6tTDpdhkS7rLTFSTZfom4u4Tze22i7jkvK2g5jv",
  "key2": "fRaFr8a9kaB1DxtbnK37WhWK7KpfvaibJRzhoDfoDyXsNrKZRT69Q4FGa7Kgem1U2Z3xH2dr4Bv3akE4zopcBjt",
  "key3": "2k3KZDesv3dkzw6knt2B4DAhQEaDwziuFqB9U3iat4tPaePNQoUGdBaXbptGiULdhg8kimABHbjLEbsL9Z5Kd5Sx",
  "key4": "3vnBSup3ZSuh2gi16KXXHHGnxKAZn9Zn4dTJJh5m7VMS7BDqdU7QWBojPpkscEL7w2C5d2JiJ4DunSpNhUCkf8gx",
  "key5": "42W29LekYu5MieUPwy4bqMw94hibQg3CQN4MoLboxdy5KC3a9tcePq9MCNvDGwoBV9sZTdDPx9Wxdbazguqm4bzs",
  "key6": "2iXyKreH7rCPXAtue4gCdTaNSYWYdJjD4poNEHteW4XkYNQCmVzB76NaPRgqh7SMgUthVUUH37t8Q3G2AyVyg3SR",
  "key7": "3gmCui9cDnRb5ajdiBirKxB9YqNNhdRhR666EWTv5iCBrkH7Q9rufL5cH98nrisCwoNoWFzhRnccQpXftbE72tuT",
  "key8": "XMbmXc1n3XVD1iUdemYqLkKnKQE2HT8YdS5Hf66F3nHKvnmWRHixR3kRPH92ccRDBpnCTmwVHYn31o7SGz4x9pD",
  "key9": "2zGAztFSUHWyoFB8y64motNuRW6xfvR6n4hZGinKG67RdVsSf45ZWRGPLek6fs1CxgsutY8tRNB1CMtCe8fE4n6X",
  "key10": "dTqEXoDFv13raEfAEAPFhFRm3RL8KJq72PFHE2Pj2SembREP2hdPVShNoXLaDJpy31d1LZ7DppwhAwjdQa9Ky4z",
  "key11": "2V39tP1EyzzKvWYDDSg6AQfiaeKzunBu1gEzphYqKz2o5Qh3jLUg562M943fF6wrgLS6CSK388juqqYzgLtYByyp",
  "key12": "5Ydvr1bSv6at8NhLF5N3Ja8t5V5XfzuAHWavknUnSxB4A4DxWhhiQfgfpurQYedSzMZNvi2FMVzBLfd8fvDd7Jyg",
  "key13": "242ZRd7uvXUU2ir3TtnUAY1ybZyguL46rEUnTyV9WaabUBG13E58Z7WJYaTRn9crTY6dAYFMaxQWey46nvD9Tfmz",
  "key14": "2ei3kPFvT9sQWBa5NDbpgJzieTWTPxn3en5xcTnDUPCKEmPvPiHo3WLkL9tuCeFN1JWU3N6kXY7EDBpps6pfca3K",
  "key15": "4uiw7enVrpNPq7Nq5WmCP3xZsGVyrGeBxw1BcDCHeUB2aBJ2RUbThvi1Qeetm2cyczhCZJRcF2qdYgRvDkjevPoF",
  "key16": "2Bt7pScTYBq1sHxwhjy9xsyMQU9zYRNDRvvnkp19B7K6gwYV74jSvLPQtm4cKo42kfdxp31BrYbKCGWuYAavRoNY",
  "key17": "3rQW7dn2EuVebcZv3XAzrGj1GYv2qLvKA1o6cwvcesqM3vi5WX3zSmWFQF9uDZqH7stHBc49TGGwYNxe7eC6J2Z5",
  "key18": "4Sm2qbPTu72BwjC1nFBKuB2wBHc95XuQYFMrvoNvUBaBftX6W6313ULBQM44X8AFUYPcxEpU9fmfxXZDakqQcKhq",
  "key19": "5YFo1sU7Q5AoKGqQQVns3piWqLSx6sFTsRrWFbRBBsvRf7PRFpn13g153GV13JynWiiHDUUiKYoCeBfp6SvfusZ2",
  "key20": "4VtUpGYJ5MAAbJwBfnPHhU9q3WrZnBToCGgLwf7gpYv932ewS2HUD37Q29bu58gqiYGhjfTkL1bUwNmNYpbjRc5v",
  "key21": "3g4eh8nfrUuoJqiaABiStm4hVZuzZjeMhJqD5uTeh84jonGBKwYaYHQk71BWk3mvkQWYAsNxr4ZNNzc5kBbreyV8",
  "key22": "5sQDk9XMhkSdzxwsreQgnD8bno4suRDzbZZNN7SYeP7gWWRYxGMJx4L2A5Kx8qWUR8uczfZrNG4r9R4NkJYSz5kF",
  "key23": "2AHYQR3GqsguXZySwrPvKdPTXxCN6pHBySXcpHH4HZxb7XPseUyWg1RDuw9vEWzLLMTSCMs4y9k1Z4E74W5kb9QA",
  "key24": "2sRJbM3pQpVAUy6iJPjVaARZVAae39ifLXQ38ZUZafawSjEoUGkfx8zHFHAPTSwdUu74nqHf7ze8eAZ1coy5KBnk",
  "key25": "2DZ6nqCFr7KzLRo86L3b22AC1YgNijur2qWhGzB9bjSrajJML4HCRg76SJkoFXWift5bkHG6M9KJ8bRtaYZzLCkE",
  "key26": "ar7qvWiQXBiAFoLNA1nGmXkCkTvhHFatjZoeQVsxY5RBsyTzsDJb25P24NPdoH8mEyYq3apisopG5uPkXxcAgsu",
  "key27": "5B8qe9dehBLqiayrvpRPZigSkKwBDPRpRrMPi94qp1KB9KgMutM2ojnFBsB8nvTReNSbhDdFsRJ47fjUdcytkwLA",
  "key28": "3AjLv32jYRhma4ApCZecD4WL4FA7f4j3EnGpDuQeq75KDUfDt89g4EmmihtzzoRZhTrAtFUisZEd4j3snstsn3RX",
  "key29": "2bAMy99rqxxN1RoZuxqmDcbodNtUCMsWFcAqQ6oA8Qa7STq6MUneDPheAcQZvG5cW2V5ndjg8EYzHj9oJSwKLida",
  "key30": "2DoXaTDpqV38zUb4ZjrrWSQj4BNCPVSXC7BMfdom4wSSzWvGQoLi1LTFxshEfUWPNFwLFfn35cB3Ph2ip9EHDyMQ",
  "key31": "34BzBSvqmyBnSw8grR9tMBfBcsRJiG1turCNiZGT8cHuWrDvGM7kmdXfphgEYMZ29kPEva7k25NWHAg5a89qKLrT",
  "key32": "3W31awc44UvsnSRzrxPjXkx9jb2LPekNSxC48Lc1QsLA9eatTESevVkRtF7MBLhoqj6jLym5SyW2jPUjrd6Pf7ek",
  "key33": "mXiCeKUFbxfEsupKYakcPdBxQQ85h34xTv8hwHBn6zz9H5TUfUjX2Sh6AQ5cH7VvfhvJ3F9uSaMXMHV8wDfmmV1",
  "key34": "epTLzKU3TFijFNzfPuLPQFCbnJA8m5Myji38XMZuf1SaJ73cjQVFdxKvN7sRcVeUtd3FHiAh2j8e1fv5DxLnAuX",
  "key35": "qxCCeo8ZEKvJqoL9XCtoesMHqodUwdE8ezxYFoohvQsH2rnuFp4NFjLawRARyZAjUSBPJgNhb3BeGnctXi753xC",
  "key36": "46uzojSEXbAFJVwyPgsXcHmVJcNCB5cm4Lg197VMuFtEuNKSkDF3wpfuE3hw4Loe92dXEhxKcdBPhweU55gkGtw",
  "key37": "459aFxccMnEmthZtnBYUK7YfbszVbmFTaEqR669sgB7USF9vRQJUpV75FLGHd3MXRbpSUsAgaezrh6TPmyVHQkWr",
  "key38": "3gXokVWvvLXm2cjG7f5JhLveDoQim7KMWhKCFp8BwNUTbJxjR6dDsNkK7xn4zsi2ei2Nn9228mq1ackkEUi7KsHX",
  "key39": "qoG2vkjJE3NFWGsoh2rLq8vtndKn63SjstxL5k3PyiwKqcRHpWS7MtLEyLjjiiZfVKdSGEpY3TcBuRW34AHb276",
  "key40": "km3jVbuGstmMnRuHmXZbe5ZqLBDwz3vzxikJL6jzJ63K8JuPNKuxxB91TTnAzgFKKGD5RdybA1HEhhSp62k9eha",
  "key41": "4e87Ba3K6FrdhB98pdXDPKNRW8arJDpLaBo6PWxLDmAEb2zCC5eNx9DPE9hoMhaM7sVcu3QxKcaWEhPFZbTYJx47",
  "key42": "PRRZC5Rj2JzSoNvh1M4ammkSrMBekRbASCzHHpaGFpbJh2y4GLmamqUc62UTSkF3LThhhMJ9MT5zke7TDkhM3hC",
  "key43": "4yswKCJm39UQbtKvCwcEwWmTRQn3cPBs1ar2f925HyVkGQxHSWkpL3GgtiypPth9gq81mWpsE3Q9yXdV9mhxi8Qf",
  "key44": "3sDHAChtaptqX6h6Srn9TnhWDQCywViiMz2EZADo66zojKT5HCXRcAei2j6M5wHmxp81NcCgwfqmwXfh4GvmGaRq",
  "key45": "3kMvM9jXDZTLe9ooAWTCjqEeWGeRMDt8YbRKvUwK5njonyJZGe9gLuZtR38t6fKyaEmipdVwqekxyStfKq71V9nM",
  "key46": "61CeYZZoJeTzcwh5t7x5NQUMNmZupA3vNpkD7xRWX97iKRjAmUMaG9b4QFMaW6x6WB95a2jV9WZVB9gro3nCd57g"
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
