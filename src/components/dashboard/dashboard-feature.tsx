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
    "4qMwzA3WQoAEmub8EKgLTaXSspBdUcgZU7H5gk9ur8qN5SVS5jbV7PVhxUt88Wd5S216FpdmE6pDfiuDuacjbASB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48niW4PGLkEJCnQFyETec6t3AG8Gr2N2HdCysVmcuPrG51NcgysJXx9bZrY1kjkWyZzdafTVrUWjbGbhcWJdPSFP",
  "key1": "4fuiydZYQ3bsigFmWPBYQgc9FMz3WWRyAJJyJYv5wPfMzjdvC54juVuUtM7R7CQ79AYDmjnen7RxJwcpwjy2gfnC",
  "key2": "3jrxv4jYbPyGzVNFcoNoG17aXPSAV5issZhfaWJQr9YT3yfpP5R5Ct7Dj6FaQLResDKpw3mkZbEVztXn5oytP8Tn",
  "key3": "41A2w4HaSoEYpEQY4hGeqfqgvs5SYiZAMFnXYNfBiV9Vb77pCpVcuuKpRXbUB58ZCW4FvhLYGmnXkZLX68Sdhwy5",
  "key4": "5LGUfN2m3kNfpKDpo63RCP3L66qtDkKUeXDrwDxFdDi5cPBouGdk7uamGsFLEdNZMSKFrsZV9TzioKqR319AFzpF",
  "key5": "pE3Bt1XzSXS7bfPBHbSsUmEGNKhAjAfV7EgVSy6DdurUFg4Fyq3hykpWrRDN1ykTY8E6ki1X4BdoTUTHs8WTJLc",
  "key6": "5dUtHGLq3rb2uPH9J5naeiQuWjPSaKPbURifLocfkEnnQr9k2SngZf44UeZH2XweTcMrR6KJ6wEwJEYgExTzAwby",
  "key7": "2ZaLGwhVdH8fs6jpGrvsZwQ2kdwmWX2g3TjfaQXiG33EJYhrnjew2EjrdJ2siJVJxH8VWJdZowSEyNhybiqNhgFy",
  "key8": "3xS485RRpD9oDoptPHJpNHoKimv6Ly3F1f7og3YJkJ7u6EANKhPf9uzgq5jtk5GmjAbbm5oJ1p9L8JnpFP4FZ8ZT",
  "key9": "5Tivt5xq7JahaX3Gy8YtCTsmHLjqjfVEGMkFiuih5daahUm5xrXwuaS5yW5U2h7LLKJAqfQjPMVi37XpVkftb7G5",
  "key10": "UxjMMd7yxMotkjh2MwEA39adUaXsSpdJ1g5c8Tqvaqux5QJojGCt9Gde5e5m9yoKjZdfEsJj29dLjEbmWWkyak5",
  "key11": "3gXPuuwR1Ek7yN5kVo3uqqRv9Um19AEPVkBGPqb7kVni5gpSNaqsz6n5TWM8rwTMzkQuZ9vgqBy6UTSducANZkTj",
  "key12": "3q5KfGpar6HfhuJ6t6hxkcbQqycMJ1Ph4s393c7g5KBVnvPLD7ySEJDhSanpGbK3tLFPGLCWGPyr3Wid2TacKUTF",
  "key13": "5i9qNmBxuMm5gavHmR42G1y84Cyo9KGRLZ8ApFCMHMLwxxKKiRaGDQWHx2TYMXcHytg7uttMAz4NxkSyCYHn1Uu",
  "key14": "3LHa7prY1DkDZcnDZJPLNyZ8GxvEvYF1Xttn9HjhNgoW7pjcxCCZmoYcDFbddG52eUtHBvncGRUdPeZP9w3rRkF7",
  "key15": "4akZy9pP6bALgp53GdBmTmErMGJo73Crf7QTBVbivLnCGAtnZjREgHd8ABBM3NGgnC7VHiS9EHifUaw1BfNa8YW1",
  "key16": "3kbeWWyigEJ7Rv4YRbbgoMBgZdfA8sjAwUteDCsu4xLMcp4oNfbsPM11S2JJ1yGkvdaPGw1aNFar8ZeUfyD87T68",
  "key17": "2p62JT3SBYesMEScKqTmFvULtBZg486dqjQ9psvHXZV3dkthrmga98E2pbTg35KcePCiYuu8RawVQWh3byvbhXEx",
  "key18": "3JkQX1ztuC5g96stxE8DrpBwyF3BfuHWjk7gAKgAizkSpNPT1Qk8U4GsLe5BbS7muRrpwSAyN5TQosR8JPvvGBGt",
  "key19": "22PmVqD6Hk7qwTz8h6j2KWEcuFbUsE33rKASwZw5gDUqYuZJSv9X5SZnmTBw9KsbXDNTrGH9xjMvfBqGP6c5uWuj",
  "key20": "5wQfAKDNxHo2PyHpL2boYJYD6NcEJzfKUJvCLoP8e7e3nQB4k5XErHYgQtUMbVDUm34T1Vd4wF7oSYxdEsFDjuvJ",
  "key21": "4X9PkPXw3A4Yu6CZASK6nmwdmDYxb39LNVYhepcq87MP4hBWvTyvGnyCNzBLdCHG12nrVvegBNiRtecd1jYXHpqw",
  "key22": "5tfXbdptJ47DLKUEgHcNvbpM5HfBFkKr8wQnhZdU96SRbuDADFPS9WjwfpFQwZLpQB6RzjfMKSBufZhgVQYCoDim",
  "key23": "2Trj74VUP8SsBWZe3j74JEQ5Eh8yjGHYsa7Mruj8jWDinHA8uetmSbKgV72hQgcPgEMtnThNi3YuRK9XSi1pRC4N",
  "key24": "8sU5ToM34LLwQze7CAMWR142VSnZw25DRsbY1NQn465o6X8LCRvViJbu4bvEk6G4wf1Fz7SdSXvsgdh67oPEKsP",
  "key25": "4PKZRjPN7AyY8TLAuqqLkHW5amrWsP4mVtcFgFYfYWaTeYnykjRDnUz9YWGH5THTyGahBKGdW2DXdxtEELVo3Gjk",
  "key26": "o8C4K6yQ8WvQsaJznED2YQgmVxECx4B7p2j3FMEB5ehZAYy3LshGPLPdycLvi6TR4DSLwFPkUso95WBUnUo3b41",
  "key27": "2GLBEragJ18AXU6HYUTemYJ2dv3vDKvzcB3xhGbzUr9Lzsfobuv4jzfVvhwYWX5QicM5wv29RhLAkSwyLBvraHWT",
  "key28": "2AWR6d8bPqUwPHf341cFYjFU4bKYyLMD1DeWLbMkws8WXP2Q44Ny96CZUV4ML5BqprvbKRRHu7eECStfdjr3eRXC",
  "key29": "2LhXL6CMfHxw7xLB1Q3C6z7o1mivrCMMuuBVx5HyFhkSoic1T59H5iitnse9uRc1kcAg4Q7E2SBF28zyCHBZGnYG",
  "key30": "3gWeJnoAuxbHFpbvyeLuhc3b2LJybRpykHtZ9PpXoY89w9g7JEezqgiQ6i32WCgUqJdmttBS1ruuqmSBAbye1oJS",
  "key31": "nu3nn6kZ5L7nqBt3FFo9xHETPVYyPKLuaf45DWgbrPdMNtVgrHpnvqQccAVCJsVHVyRzpTdfyzL1XLYUVv78YjS",
  "key32": "64PHuX4XEPHSfYU4TZB6LXvJwG3EwNSXXLWYtS92Hh7MSEBdMee191NwijTDLmE5CTvwb2n8Ww5zkFnooLXYGTbh",
  "key33": "EHrRVQ1LafgruFWMLz4TViZNwHP13oGrD4P7fRrFUUE5vWAkCiPbEByv4Gm9M5xoXmUpgEdtbecA7H3Rn4QRDmi",
  "key34": "3W8dHFXXnNF25sroXSnGU4EpMcBtwGzqeh6t6i1BgHRhYSqeLFqXLVvfWSar4AY8Z3szsAqiq9FqeE9xnqiRb2X6",
  "key35": "4c5oUyWnycALdMkz1EaTY95aHgY9yU1bzXxVbpCzvPt3FxDk5EG9SAUxbW8yXuj1xMDvkk37W6nbnzcxVCJ6spQX",
  "key36": "5qKwnq2jhWeDi9xLLBEYKERYhdRenjqhRsf3A1ZyMkL59FPT7U2JPm341Pwf2yqRJtF4v6QGgi6pDyJTCiXDNrot",
  "key37": "5B53PkjCFxxxUDj7vR1FiH5geA6v6t44xkHvM3PgNEAceQMUvNfR4rECmixkLe6pwfsJdRaS2TPxLzTTBJfBePsT",
  "key38": "22RmkUquey7opYgSvpujcd6fUig2vieba8TdPDfGkZRQNNr2dhP541nNeLFyUB1dntxcdxEFbURY4QKbMgKrgnyh",
  "key39": "dNuL183cgGQgHeyeBoUPbWkBbLq4v98Q6QsNxDWoZTbKAt38HEwmWakf3wWejWQzSQy5tQS7qHoJwJfS1LkJyHx",
  "key40": "3fYiZ8HiMGdM5dgxJK5jFFmK4BK2imLNJdcE6KmUHa19Yh8Qs8TbQyMfunxEBrToEE4emdbLd7uofKXektXiUX3N",
  "key41": "2XBHZsWD1i7PHqr9ueckE2GQo5NNRoaf46uWmpjnMt3VRijmk5srJE8sRBYFnsFNWEAYf1MitGhsNuC59wmx8utS",
  "key42": "5TDioRq6tmbjEgfg9n5Taj5prqxJdVe1DXzzipNB5qCVjzbse5vjUsp6FbMpoguGJG9dmtPofRiVncs7dC3zAskH",
  "key43": "4PfqDaRdnf7pV5hwSNXzYBkhWaSmXUxpzGm8Uwo2xFjJe9qefMhBuExSXWJtueYwTMkCHZEUdHxcumHrxD1WsvzJ",
  "key44": "4DfAZou7PxbC1mQ7RTg5v2gS2Eey2BwzBEed9XcJ66DAGdZavXJthtPJxR7koKNXc9FB36FWQqoWZtBkJZPuyfkh",
  "key45": "63mcJ4qSUAP1AjfeSb4yxnbXqMz7P9Y6KzZ43ZHqB8KSDT9Momzh1SyoSEg3TxVWzDAak3PEe4AEgdT9CXRtSY5y"
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
