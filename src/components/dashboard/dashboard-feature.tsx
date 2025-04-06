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
    "46a5xM21pc1Fvs4dn7maoYyGm51hLvamm9z47eniaKjxwkffzSxTo211oUeAPyjrWAjZeMy7PzoYac8QxLcLJvK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmP7TdMdRZ6rgeRxaxMYNXMDMghNx5pn5XpeSdjucSuWq5Hsbxfpjw1y8VReHNY1gqd6c8enmUJsgdBBfuqGxaH",
  "key1": "3csr3uSULcHgxtnwwm6LnZ9bwCChwEuZyGLoKgxE6UxchgaP9yTPW242Cdd2updeQckr4xgazN7mB8B95NEtKGUU",
  "key2": "mLq8GbmzKnfwWzkR55CrEojgieVdspouHKHQ761PYT1b7pwzcrmdx4jDgPXTTAVHyaRAK1dxY5c55iiu9RtvR4G",
  "key3": "3tBXHTBRsuS3PRuxD3mWdyjcsgc5tQeQihEdBMBXp5DFSr4FFAn1PgPagQm4ZY81xvV6tb9qwkBJidGV8nEgDbz9",
  "key4": "3LNj54AD3BMfKWqjcH39FxAY7CMuyDQeHtU5YQ8TRagxDaPV7KJxmZUp17wcdoDU9pXGtWtYt6aEog7HhvtJUMfz",
  "key5": "9nFwD7BjG4sEVrqMs28eJCtLxy4MT8KYz9TsB2eRpbK4Tbm2HfMbuaMLnxzGxCLE2F1bRBbpEDyY2x6pgvG5Z1B",
  "key6": "evaMWFkEi5WHBSUtYvbtPjS7xukb7eBEY5UuYKxpAFJtfv8A6Rr4EiQjDrkp1v7ADSdV4reFRaGGthhjxRC215u",
  "key7": "65HMcJNM6j5R3iPdYa11GSeTA1CVtuq9C44eUJ1cnWFkRU8Dpm8zrNeyNF5eGwRzKquiFhXzwfbQ9xf7MRCUMGPh",
  "key8": "hUhM3WRybBpRC4akyqsK5xuYaQBKUYJKXpAVUc4PyJHCDU56er8hHuVTHmEf2dmex6sn5D2jYo7bsgRiF1J7rJf",
  "key9": "2HPpJXT6WwSGU6pcqhvv2nHzeZiE3CubEWfFPTD8j6vqsbbLFAjwH5FssEytvgodSL3DC3AMP6RixUhHDGN7u6h9",
  "key10": "5pAxv8BTNJtrk4kTp3mh1KV1VhpapdGRYyrPZUEnTdDhjJLcXbEqRWMqvcmqFWGPFc44erbd9BU4m8oQU2Rk64GE",
  "key11": "2FSrRwxjnXCEBjRJem1exSRZojtZLuaUHFZfFjYCWdrasf2BZ3hGiR4HHLdWVYsBG3CM4WsYpNxALqb3snTjZY1H",
  "key12": "33F5NpcZUazX3VpAHcu8MwntbQ6KBkwD3gUN9JKaDQ2fgEBeTvdhFsjMhjGwydY8qE9b68GvAmd6FE4HmmkxRmuP",
  "key13": "1coxTeEmXYLvHuE8i8WwUrSejBnxxoMyehhm6U8YdaD542pGB9cgG1kKqfkLotjps3rWsMYrGYBYJJUwwX2Hf8q",
  "key14": "2FkKqK9b32mfTDWjcHbneYY6KcRKY9QouDVbVVCcczLit5nksZRcx8Gf7mzkosN8YyQWcEgjhsUfuCJnkBtYCRLb",
  "key15": "ibdp3PoKskPfU2RUCAUNJ37nYb2SuR3yE32iNc2LyqnmA63wwhRRVivP8vt7XRH4Mj2fYjFQqpwvsFvgKVpi83o",
  "key16": "5HrZvwkspL27fjyD4Q6khWeRtyyrrURkwiBSYByEQRzzLmENL5ezMoAfUjZ5ZbrGbXatbSmuqWtFE4fsfXdTkZri",
  "key17": "5UqiVgoE52pyioUhCb2QsvXyvMZD6H6u3jFzNKRhgVZCRsxtb2ggj2YGDUe8fMhY1qeVBcLrRjj2h9XpTcuxQi11",
  "key18": "5WkLq6ZAoQ4rxzp1ETVQp5uGjXpzB8aCkYtipRSGgdc9ScSNcXkigPtZxBZNj5zby3d2Nq3r7aSmq6aHtU18Bo4h",
  "key19": "2hqVtsdGsy7FbCGakoc3NmtMCsvr9qQdwt7GMXKevRSUK6ZHdbc6pRgejq9Bkg72rvSn6jdPNVaJu5UK32mPPswa",
  "key20": "a2eMNEib4xM6mKkkuE74TgUd75iY7FvWNr5FmXWbQha4AQXM6RE6392C4yNNHhpREQhHeRMaHzw54xPHhJWMSUg",
  "key21": "gxxaNAHUEBAbJDraeoe61dZKZaFS5r1YR2mm5XUtb9i3XLfFqWe7VTP4W8sBsS7pXi6tuWe4Kx87dY7grnP54RQ",
  "key22": "5Se95GEer6ELWNhj38U7Z91WPHeHiNDN2CzYDseQWT7YUAaYUhebPxgMSJcTXUJt8LtVHJkkv2Y9eoRVAiHgcca3",
  "key23": "QniYddPRYqvNEEW2KRDpauJR7cKrxW1zYzAR9MepVzFDCyeKrNHHBPWLPjfNsd1YiPucjBhKQrbkekmtRWEGqFk",
  "key24": "2WE5sBDEQ4ohH25ZPW33FHL4Rg5LKc5J1fRY9ZojMK6ewv7dPdWSPN6AFrzRxbLoxjWsMGkzvj5yS672SfHvarVG",
  "key25": "3RnGwrVsPKy9YUe5S83ac8Nmvi3tfrCnnhyWp556w41TMYXyHSKJxRVGjvJqJS6dDvi6hccFDUzmn9EBnGwComKM",
  "key26": "38cXSVDkCxfos7kt5JQCpXvZysgE2HZ8rmwcp7FtAjW1ZLMZ5xaenXPbavNhdPLhHqaqcs7EBY63Jj3CEkuS3d69",
  "key27": "61qJ5X3kjZyuvRGoZ8BnWjahStUtb9K5qgSms2KHeUhcFuMyCmCqMWJ5WCumU3WdJ84i5qbUBiDxATRNj7GFdH9t",
  "key28": "2B6brQQkKmd5smGxB5FmCL8mtpknNWr7ZRwwuXP5yySUREXY6FzGjryrUrqgPt8duVgBPaTr2BLa1AcvuF5JXVeD",
  "key29": "4gNhGHP6SRGHRcksbz58VySDrpWceqhdBVaEeRG9hpRSVA4bcD81ZhcjiQsDbyGbupBrS9ydcCvEU2Ybm1a92hND",
  "key30": "5FymqhPbDbyA791DPxBqfKiBRNuBD8fetXpAnkAAjt5NqTeEYKjpUgBtdJuczWFnrgw5ZTCrS2LpEQZ3Qbj2pmiU",
  "key31": "3q1cGsVKBat1x2MA5A712ckqxKverXZAR6VANBozYSJ2VEjkgkvTEJorXFDdpLijXAnaGA9jo24tCpwc8SyLoiFk",
  "key32": "x2YXD1WKEWJcbKFdv1zBSFfFG2qJwL8cArDR4qsjYjZyh2Yj2dHwEyGrfSGqryDbbSEp1KLLHoFuJKh39egwKrW",
  "key33": "2eyeS7iakWLx3Vc5neMevZKT2sjT9a8TNtzshGmfj79wp7gfZBJNqHraUvAiRdCQdHzmYxqGS4SUoMGBKMRVzrRc",
  "key34": "tkpzKT8CmyHhJyzuNMrK8MP3vPoYkTdrh6vRZsh7fUqWVxoAwZKivdMfbGrH4CFVtXwkhh4ZEpreFNDJ86EAC37",
  "key35": "4y5RjHaYYFGSqJvsSFhhydgedzaR7pyFZD8LVcYAQBPHHTwfZy9SuCKNfYXEfELyM1VyrgJqF7kmGXG35EJYSEd",
  "key36": "3yb1GDss5ZsaeC2yYLmRwJokXo2UaX2YJUjxWt29g29qo4ZNurd1eW9fyY3wqpzv924pJky15gdPZsnbhyX8Fzw1",
  "key37": "4SxaqR8x4PKKJe4jgyLKcMKSqA55ekEbcq9u2Wo1QeZGC3CDM6CNbDsRTuGq9DSpGV2EsepKMEgD138AV6z6cajK",
  "key38": "5AgcXWiC2Zku937sKJmYFvvGSqyJmuGp79o2He5C6RT1Ww8CMPWtVutEH8cJRVBQy9fvzsueDa76CgtSspf8EKh4",
  "key39": "3GMKDVhko3xigmwhMMQRXys7kDzWpWnEbKZ3W9mmtWHUQYgGeNQ728um5YD5XrxacEPv3tvJJyhpb3pVxcxKxXkL",
  "key40": "5MQ21zpPDT7kQxpG2VunrjndX53PQ8qzyYHQ69jhLFJdDedRabrPcFpuxzPDXFhRWtB1iUoMRtEDkLaqkudzBCYo",
  "key41": "5BZYEp9SnQKZEErBzeWupsyg4r9AXJ1pMf5cBw64Bm5oq4nxjJGb4u3X1h8E1qTNEnKz7iCUDG5vG4iwGQxD3jra",
  "key42": "44H2ETPdsDh7E81mD1BQKZNiwJTd9zWhCGEPgyKRpDWwfH5imECr32dZjv1umunnHpQfJPyV6S4ZDbz3YdkhXi3v",
  "key43": "46dBJVGwETPVaJZSng25CM6ptqCNSd2Cg4BABLg4aMyPXz5cvQfwhFPB5ZXx8VePqiRg7f9pdxHMvXYsvKYgidYH",
  "key44": "56meTjCM2na1SqEShMTYRhgoJJogoMoJiuc1ETbPYQvRZksNFxmU6AGnKXPmjgHRNAiKutLpxm3iw1JWvTy8bgu7"
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
