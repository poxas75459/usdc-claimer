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
    "t8aLFUesrKec6N54YAkQEToP56ALtcM5tq7BURKc4hY5cEb3SzU8Lp8E2qCimBPxmCz5doEqqE3PT4tbsxQBVYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5895YNeX6A67R5tfz96rHTr4G4xZnTzeo7LTEiPXN9K8qPLQJdaa38S3Avb9Jv2p5gP5wCgjCXDjs91FumBCMAJh",
  "key1": "5eV3cY2ZTGhcV23LFHW4YwSoNFN8SK57v5EQfCFKhAjXva3Bnbk2F4hnzuq8QGjHy3xaNJWU8unQDH9MEhHSHZ8w",
  "key2": "2UGepEXwq2gKg9Mqi8LfrTjdpRy84rr1JECNfW82Fst2r2RKxFVKfSb9tenp4FRbabjmFo4M6xzz8wsBkLDnWxFW",
  "key3": "XcstDijehfgHs3NRuPh3Kgx5QMKq8g7GyTFLwNDjTxA7JXAaXAje9HMoK1gzZN6DXNGVx1pVtj42fc5gxi6N4vv",
  "key4": "5ZhabungK9wT2HUd7remUe8q4fV4MfKrXyJToJcTxs1Drk5VVX8QhKKUMpQf58souJprRX9zPd8LLGQ8cY6gVjLw",
  "key5": "5hr5xs1RiPV4q6s5TSjRncyucNsKR6pytJLjcCe4Joohj9JQ3R6myuCTchgRxWebmsRFNnVieMCxCnF3vSbgGZMB",
  "key6": "3DY4XF1znPREQ9r5TeTagh3VzsTg5YvstQPWpsesboyQSFgZGwF1AcQ783Fy5Lbipng7qZ5A1U9Ssqc4A9PxMeWm",
  "key7": "3kJP1t86PuoxW5i6T3yUkJt72MKGuLkMQoJULyEw8gWehiwTkTd8z76oKjdb1ZLWRQHsucwr2b2DNm4B8cvPRrH9",
  "key8": "62gxxRUm5cmvY7czF4ZdyJv66hKNgQYGrDodezdhUK1CqP4SHEtCgFBcY7sZh8oMHNAaqwKgDuUQ4FL32Apwtfcm",
  "key9": "3RWPo5f3yTiUHV1ZyfKp421gcKNDo4ooa7M4HPUaRQqaTXF3dtZG6tfFCdNNGMahJFYwiGsRYJjwB7vWGzQCDbXh",
  "key10": "4oSwYDq7KXDwRwF7ERyA9YewE8AHmMTQtv8nEFgFSpq7aneSMtg397jR7SV5apGr7TMvGfroRRsACz4Kb6haeHKG",
  "key11": "54NypDnK8kMd8jCSEmmCCYPibYpu3axe7GhL94W9Ft6811HH36z47MeCacBWFjiY6eZCsA1iLSYoK9x4ubyEun3n",
  "key12": "2cAEGNLrb2ReDBR4mLG2FGSMyqdGM56CpoA7kfQtALnpBcuJxi5N8pLa4CAyTTRyivqZH4nGopgnG58gWWCq3wg2",
  "key13": "t5nfi2QunzwGGm2UHWYr8QLZA5H2rSDHBsU73YAdKy78ZCB32P3yU38bjvXiHtXUKtnamzMijdQMTss1MXCRJnq",
  "key14": "3M23xMauS6mWUctvnUKPQ653SksTGcH2WarA25Tbm4Dy4odNfkcco4ePBwMgsBJiuVvDL7oH4MGTUJVpehSDdUTB",
  "key15": "4Z996FBD4urU5bghwUFXyTBRujhNdjuX3KZirf4FpUt3yBD4J8UqK7SwQrdcUmvP51rVdSGSR7s57fwkGzuD3SkX",
  "key16": "2uAXib1hx6Jqw54YPBajuxio8ybmiWRnp1NiuZ791LWXNt5yS48UBZ4ZFVVXCDQzYpAugCsdVR3EVnHMMNTg7XpR",
  "key17": "4fcQxf38FnCTsaTwYu9Jh92nGNUDCbVf62g9jiYAr6t9cjntoPNLuJoNsu8nShxXh6uKQ1vinwbJLyx8QnnH3eNz",
  "key18": "432geyNS7kLAK97MwSdVzwXpdLWBzRS99KB9Phpqo5PuSpQRYMRoFA19ssdrcWvARgSXpCaTM6Ffyhi1f8AhGp74",
  "key19": "rSCqENcuCGmWinttQhgxFhvKhTazHKBs5XAdp21u8wSVy1qByrangYSuEXBLhPGWe5YCdz62ezvvTjU8FrgvFTi",
  "key20": "NRXtBA6iumhU9jSDpyyRD64DNxiMP6WS7Fzq7g3FdHeamx6G8Cf39q4d4bgLF3vty3C2AwupXXZuYQa79J2hRwa",
  "key21": "4tPYTF1h2TJuvbQQfgfdeNx7BXmf4YgErJVzWdN6GtJUpUUPDvNBLN55UunwD6uz5zMkoxp8cDde5CiGkfKB4PKH",
  "key22": "5QaEXBJADytjPEpe1TGoNNUAxCh25tmdxc36JhDUTCBPrnd1UVUgmuEGFygbhLynPioLbQBrrPVtKnRqk5y2DXj9",
  "key23": "427BYUPBA3oGiZ8kcWxXo537aReeGMBHrCT1otpW4Jsw5uTrejbaRcyFbi2FswHik9kGC4FEaPeuNyknpkLtwLLm",
  "key24": "5BUHwKB4kPTNdDs23Eqz3FLJPVbGCA6Xea4C5KuHL1sBP8U2dsfWeavy9bXJDui3xQ9jn4C6rUaMubQnV9PnJjsh",
  "key25": "2oRAuURJNmPW9FuXP2F1Lw5teat1XYnCNYrPRErx5R471Fykjns3Ens4LL81HPbV9KEoma8gby6DF8Skmq8owfJX",
  "key26": "2dAxHYqGy71pohnPqBeE8zPgV43mEAXBGXCwUAFJCG7mN5DwxQ9v8zoqjByCacXtMBTDSEVuwgGeC1G7Mct3cRrb",
  "key27": "3x5pzoQaBwjAy1r4piHnG4mKFy1jZhXFyVbZkERbhx2HrU5NRpJoTe3xxxY6Ckw92Qw44WLNAoXMU53X4VcXVAxe",
  "key28": "61fXu1EFJCPZGnXSBqjJLpym2CWxYLKQdfgJdAUSLFy19fkpv7Bj1KmcJRaEwwNUezrpLRsPw6M2W2eUApKKoSZt",
  "key29": "3nwczLWswV7soLfNQCbUfspTh9dhRQnHXCoF8biMwh3v1KR6GpaB52qUvyiz1cjQbYm98VMzVY1UpJUrMSitZm4Q",
  "key30": "5HHrPpd7XXXLpqtwkv48yVcnQw8UTrtFXUxzSghA5DHcvweQwjwJ8Giu2Me8rmbD6RpwdPjEEvR2YxQgpTbjM2Ja",
  "key31": "2NrZN8VzcDJy1yhRMJ6hUxTibo4zrnS4MZJJmZkqVr1a7jwrytWEjqSLxKnyf2p6bz6BAvdB89S9suk6G3Vc2hfA",
  "key32": "aAu3esVbJQNfmiEamVALULuNKV9Ksw4uNNE1qz2uy4hzaVyem2ayjwuU26o3L7BsYJXpJJdWSYHoT8bBZMQQZ4X",
  "key33": "5mUKCFP7bHSeKzmXK3LFQ9QntuJRa1Ekmg75vzqXscbvAXiHPRLH3ZLhYmvFGMtFrHN4T66KGU2kdHMcLLFA4c7n",
  "key34": "5a4XPkXU6zgvj3ZW3KVdboNuJgSGVCoHyE4Wo52fjt8Mh6gQrKCpZ55Z2M6MCqiaYE7pMZrX2ZsaCK9FdYV5FjiB",
  "key35": "4vUvQVAraiKb1eQEAqxU6NfvPaMrHqz8z1Att5ZXCNhHQrH4rq8mxUEEDH43NgvASBkbxwWUmWVxbbcs6soEffc3",
  "key36": "5N9vQEXfiY1QCvZA8LzfjNge74e3oBzwWqkPKcmJZ2imXhSe5dmWVArxLUNi4vaubvKtfYCTc6FjCPss33wN1Xnt",
  "key37": "yujpGMu6Tdef2UzVXLWNFh8sGSUrd2XBK8rnuju2cbVyL3YfRNLicAiSLL63mNieEZhJcCdyZmAi41Zs5F5Qtow",
  "key38": "2DfbPo6WuHTQCicNTB3YiraPYaCmV1hB5P6YzwEfV8rCWYgvF6yTnK7yAtXEFBtbc7Th7Bx3EmVFaPXEvUeAE9HF",
  "key39": "P4mZ2z3BUSa7FBqSRcLzWDrdZypyeskKFKJs2MqPFSGcHNyp2Lp2ySU4LfPpWRr4CQadzRow5iC2a5N2ufixzyf",
  "key40": "5MF3aZ1UCaNicJWGwNCPhFpfdFEhwbHxuf1bVDxFnHzQaqg4aPxYixcBqB1qawwGDN5r5sQ9RA3XP9cSjSevQNqf",
  "key41": "31AoP5K8H5tZxmqnLR1TZfwdoWtD79vMQU9GrTokjaCNtbAPjdKxJ3FzuVkhVWha6WBq4831hY1SJVz9X575GpQP",
  "key42": "5tLXSvRCq4R5TFUPKWnQxmxtETonerHxyyQAyoahRx565ZRwCr1hcxZyKFCfdeuCafZ3TJrMfWsUK3DftYf4U1hZ",
  "key43": "4NkYhAoBdcSMy9kZ4TpkGX9tyfB8U8sJ9V3RBhAzuX3HjJK5xEBm84qQztx8vM8SEFpj9TVFcrkgYS7Me57qHQbV",
  "key44": "ro7Jc9wwVVFeEtozGwWYrdo2H2ZZJjV7WGzNPEKWpBinwpqVoRvDyUT8GNPsg8AguX5i7pVJKUNXw1RrV5LD2df",
  "key45": "3GgbdBh41VYzJJrrG4LcXiZPZBvNEwML58MdcxDFaDZEgo4vLqVDFiEM35wkGyv9qJ74DJq7fEiCnRnQBvY3xXfi",
  "key46": "VJ1GorGJxC82GJeUxg6szqYKsn1Q6RkaXs5JCuzLivde221XzMCYyoBS7SZPqFfF71rcnZXifd4KBq8cnUuCHn2",
  "key47": "5oYH1JWyLkzreVTBRrGSiRbeTc67WRyZJuCMHnLGPk9xrhf8GKDvCbGSfCgU2gyUFcEGfhEZonEvb1quGaWCE6Fz",
  "key48": "2Jwd5azdCPcECHtitKB5PydowciBi7jRV5x1KxscH1fxUG12MYziYEZW8pcnUrcmM4AAk3TnvSw4tZCRSTBBGLC3",
  "key49": "4MBVX8J2kYY61oYnVf9Z4SgF8F9ZSYFvsSTYE42tozBFoFrBgt9pirxKjWojo7N6zxMJFBbYPSGnsF8LFoGd119K"
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
