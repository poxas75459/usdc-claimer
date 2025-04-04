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
    "4tunuS8wr2BEzRDTwRT6u6cENZM8RWJWdRvhBq6Sg7CeRNGYhcW9cmpvWVFps6rM2FkGNs9boERfcPFerud8f516"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zANoFhhnXgdvz2NPfTpgGxaAyG9t49Mhb7Th9jf6eWZ487MmCTfVP1uJ5dxoUk7rAKQgqvzQKXAzyM8yxa3dGXE",
  "key1": "4b3gm1M26bf6HLXTdzKXSrpoaEDn8QGDEK64aLg5YHBpkLP6m6gh2HaJ3c8X7746rj5SeF9AdFQMEz9Dt3EsFjnv",
  "key2": "2EyaYjcvNuenjdpgSdFsT5tJpUTHJdAsVJxDZsfsd3Eaj96uybUqhDTbPQWBYuLeq9H1fKrLFSwBiXmYvgWChTch",
  "key3": "BwBEbjTezQys66ycnV9UCBrQaaPZ1dCJgccedgmKbRdA4NfeqKNsjse371X6MdpqMmA95AMCd5W55a6nLryJs32",
  "key4": "3vyTsb9YkMD56yPFKesAy3wPQxSSM2A9e19ZhGDrLBpiZXGngG95io2jYqwQtHEjUtzi4Q4V1oDiDLizCngU5Po5",
  "key5": "5afFFiFpjPAm1az9bcBHXM4s1ScKPhxGxpewea8sVcY9VDQreZDPhHnjh3gFdy33F6aGNH6Rc5mRZXgE1CT1fvEu",
  "key6": "5v518v1cqaHge7ZNeYdrRCz6GKTKw6QUxCt8a8sbAyf4MzUpRzdxFqT7c2YmzYWuHdPiHYGUX3TK6tna14Nuoy8S",
  "key7": "321Zon6Aw1jnUGzZvpRtX9KqDPaHUKMssnAwBka5vmBSowUMeJ6LTUxToAFcRJ9MFT6oy86UenBku5y2w99pVuJy",
  "key8": "41DrnefYtY2MEoCkY51PBBtmCifbyGP4Kn8WkD4msBHRtWqPQNhbUweLdUfLGzoB9cJkcsjHriMGPXf3PJbqBJEz",
  "key9": "2HdDrVze31AMTmSWF3eLzy2nob4HgpeSzmm9f6c3xN9RcsVwUjNSuoYKwUU5oiLesuyGcaLCAaqEmUv8TScFeGhd",
  "key10": "5e259WG6d1kPPygLyN66imKvtje2s9KRovh7HkKe3UaQ7cGfqJ37Ttm4tXDzLXxGfiYz5Zu6udZYpNN3nyz1evko",
  "key11": "jdtLuSijqy9UBWCrQtqZqCzhGz9gYAKNftbiDXk7FUEVeNYRaubkpJcq2WXUUcFz6wBrNHRJQUP2vFWeoDgNF7V",
  "key12": "4NEnakDLF7LFMAygPQoDc8uQiN72nZdK8wrnRBUiRjgvs9z12NEmGWutwo3pJqqNZfnMtoB8gbKaLSCgb9iHYL4g",
  "key13": "2smXHFuJTqzWLRXMSDaovdoue1A8mtTmdxXFd2NX1hpRD9Sbbzq71NdVJ9GmWxkbqqtxtesmhJqf4Lu6bey4q9sk",
  "key14": "3vFJrbG16kgyQH7fmqyBxFrLhLGLLhbz2Fky234jN6RupBEuypp8CgHUT6SHqKSz26rBm4eGcfYU8BmEtHqisAHZ",
  "key15": "4kJhz7QVHjJn1589pRcqsAzt92YF5D5epssYhRrxywuZHRPq1XFpxNTqk1w1hNV6Z336rFVnmYZtWbjoEgPQVtP2",
  "key16": "5rkQxwvo2y1DPENmYGTwpW7nuNRG7pW17u4kCxxMZQcRLg25LuhyXZMHvKYkFJPBqtAR6Y5sw6BxMhpYdvqjU63T",
  "key17": "3cgg4yE1wV42nK8YEqyLAJEdJcys8xxsEZ9wCS2GHCrLTtsmoCeiSZ79ynKBMTjyRnhGAHopGNzGs93ubnUA9eoz",
  "key18": "3XLNSR1MUbTZNiee93hpuyNiEzX32o9VCXc5NRg8hviAK5f1cfvLUmej7G45Kxzh8EBQehKkNNBqJM2zQTbbDXNC",
  "key19": "Kb9tzvYLfxsKTKGQo2LfN7nhZYb9ePxzTcKj2bqT1MEgi5Mv7y1gu4sQ8bwbf9Wz4k7vSDSbJFGhgScTdvBAk36",
  "key20": "5TNoTqRsYPKX9Sx87Q4e5zMpSAcUGCxZt12k5Dp5CgJWcFA8m9Kcuto9cn2WHKazDrwDKoEuUrGZAVztBEREirZb",
  "key21": "3PttDX5jtXfCyDJm7w3sjMhd3uWL5h5oWwutnibrvFsCDPXGNDiB2scTJsN1RMcvf4s6vG8gvkrgFCFf5qgMVxJq",
  "key22": "4DhKCZsjE271Y8CtW4Qv2JYuS5y8oi3JGH223Fjpuax2v6sxNQv4HW4rCXSaEUoWHd9pWPMGHy2AHVtiBxL7h3uJ",
  "key23": "4Nctzf3CKRYJkrNkttCfUAj2CJQbB68r1Z2yUAhCLnPRjWe84uWUMJ6Xuy3Rc64JN8EBZ6qbmEyvhfUWrRMKoMyf",
  "key24": "3R7hTF6vLVFSHm8hYfFR291jD2tvXVtwz6tE72UdFAu5UfJodCETPTe7ejpGFwTNmpfxqoy1gGJvVMXt5gR1WSum",
  "key25": "5J6Acn39cnuqxbSBMxe1gTZP9L1gesCA2HzEMoDwLghBdmerm2zaKPf4mUJVMJZLhdKuoH76R3R3A41XMD5HcR2M",
  "key26": "5Z3uXmjZETENWj6Y8uQeDwJfQn86iSaBTq3dcJcxY7mRRM1oGZr2LE4PNtN8opsz5ZT7M1F5xq6Mp6cRUQrURGQ2",
  "key27": "QFPebARMoh24UWUSKAf1msJUKNjANSCkVT6ZDFfdwcjTDkBvScUGzo1HdmkGRJfeqSe6c5uQWErtVbDa7MbpJo7",
  "key28": "3zSdjLttTPbcWQFd6sPENCCsbR2tRDts84LawLkp5sSQBHiHVPwBSzshc5GzYhFT6W3cJ4MBmZtvPFyLjqWZeHm2",
  "key29": "3VJqTBYPt8dfQE1c2nXNVfxJhaPV3SmaEPENXCSjbxGpcvryhErwGdeV5ERshrdwtsMLMsGY3VN4bZAYKBDHXidj",
  "key30": "27GBpsR2UhsBe6osfESY7hLxM4MtQj4X3XTKh1R2RKp92wErn4VG6WeL5oSvty7UZ3JukoFfm6tmvpXUvuTjtSyZ",
  "key31": "Jq6sAjmrMWrtFeVY329xot4W2mR8L6Wdz3WfwPLs3iXVP7mfoj4yPMKrPfskownVPN8Krs6FZSotzX5sGy3AaZc",
  "key32": "3jbDPQpXef9SG88ZRKDXksK4k397Ree1714hK8SLWHp4yWg1rDRiAFgDnnbrvYAkyhdFc8HMKoSG8brNUEfX6znt",
  "key33": "37EtSSHpn82zQDef3LC7qr5QAWiZK32Vi8xUS1sP9L9RGCmwFq8uXShkV28byoWcoyRQ8WtEHZn3dpuGq9ttEfQk",
  "key34": "4i61ftZ9hDhzbYmyLdnSmzigvAJ2oYsYNuQjYgdUHCd8WeHPniLwmzTQ4CgjuUDiAzEHLUwtrbxZs98vF44KTujv",
  "key35": "2oCQnfoGXcHxtDPX1iBYfrKmHy1mmhCEPA5fGJ4YzHinfdJtQTaAkeVvZw8cFWPVhRw2mFN3bsBc6E5uN8FxhpVG",
  "key36": "2D33oSUKFedXqf5m81ZL6JozZw39PAtpC59WdVSG2CBAFbSPwVm1pErArF2hmA1vScnFXkaYNoi9gGbTJ3dUp5qt",
  "key37": "5Z12udSTZ6xuDpC1xKDak848U1X21QTSfvPGEVt1awrHj2BZiK9Xj9MMSyAcSHLxdj4Ab9gTGGrhZTPnh1wWHnNF",
  "key38": "47NJ39tjjYpbhv3x4nRjwvUc4kvNBQFbEFS5fEDHMPXxWzLG1Pu7GvBDdeXNdvfSfNgTTgR1rPj6p86bghiehaQy",
  "key39": "5snvtrkGqz1tjVqWvEf35Vqps38gcZrtjgBttfpLL2LRUSEWbyryWpjFNkEzAQ4KLpRG9RiiJkkZ84Tdrr35cR3M",
  "key40": "5PtLhMGBvqDbcF8RjKfwgd8uhS5i4ZNSom4w9APJTd39A6q2Q7byMMr3tRfer5AoTCBdAeLteLHV9EeXMFyEEeD9",
  "key41": "2ZmFcCVqCcVLez9mmNpi7YLpPFax8rZKqQFs4S2PMrxAJvKcEaBKa4jE2vWNPDM55q4g8wdJmTSkgCCy1BXTRtMu",
  "key42": "3nWeLcq1X8eZyTTBfBe46AEnDuSykjeuSaFBityKNz8kejsX54zpVsFFdCRMCo6hGNhmcDh11EszV1HfncyW8Kqo",
  "key43": "3XNLyKUnkptMJcqBk7w2UxyiQxQphTH1sZoZWUL2RGCFYeHVKHr1aVndLzNjFn23asR2nHZvwVLDKPRsz1D8Tw51",
  "key44": "2Casdcq9qjiVeXwLK8RBErwqH4LW8sZ7Ap1VhCcbWT73z2PCv9bWFs1ztgYpxnLzynju1GvVbQ28MpphG61sCyWg",
  "key45": "5wtmnF7VTFwKkU2etskCr76gsTcz5rGXZqy51KAZHxcS2VbhLSjRHgM5SLuLPpuN6JApJz2S6Qc4hUjXJXGKwmzG",
  "key46": "5UbedAkbVwCQJ4fbYpC3gRao85JWD8K2g8iquH4Q987DgCbx9JWgA4KzJuX9kgPCorPtKgcYXepuSPCr41Fzt1wM",
  "key47": "5TupyCHeiGD6d82CAdDwEThNN9ZKdCzgJ3AGmjb78g8ERT2fF6uL5rqqMxEjRqwY1pDwWc8QPhLMEQ5xssdHCSRN",
  "key48": "33NNEyNRBU5mCzNLeSFdfanWHyU3FWHokWADj2GmQ5mt4vS68p5cnCX2ci4zDjrfVWGEiFh68paUK3ebBBtV61Vk"
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
