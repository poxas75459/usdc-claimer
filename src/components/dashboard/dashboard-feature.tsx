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
    "4NAhFbVimgxB5VBszt9QXjorVhhecXWTabWZWKtzAyDGrASn45xWRu4KPPeyzn91X8MedutrJPy55G5L6gNpnW4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42nfxNzwZonrsQVL8AFUNMdTy2Zu2UL25KPr4nb1XvfaDvERKqYXycVLs36uYjKw3qQRnrN1cmCTkrneqPvwqSmq",
  "key1": "heiNd74WT43EetaRdhgMuR2kHR4ZeTSEfDapzyNnn81HWcHmfRgCBJno82rWx9oQkkA4QQJS6WvRTuax1Fbg8ca",
  "key2": "jJ5ZYvnVRSALiGrSkYJnC9PZgvUEs94u3GJT3W9vtyNKyLpm4hgQ92wF84RLGgQhYCy7Ej2FvwUHK6aiZL8z45b",
  "key3": "4UQDHkErh2ecP5FwA2zTKZcmztKVVXYwChuC72k7EzAeFmdu9YqziiS28g4qWrefSQVP4dG7jVFArRVgsekpHFiR",
  "key4": "3tqKbDcsUeLkGJm8axZsxZ7fAcYusiaBu6JTXoYjv6kVXgRkZhgfV9vNYQGEQzNDg18s8J3Hj6Wq8A26AFztUr7B",
  "key5": "3zrCKkMCBdUL7yxDBYpazZGAMbmAoLPEmRCkgrH1VTSxZAsmLWJHY8bBThnurVJAq7ajBBVHr1zY7XZhihRT9ezV",
  "key6": "4sFCY33ne7tBiEjyQ5u7bYAsjz9KcSFc7ZUtZ4GdggiU3Mto3pV4BQ3dsHR3sNABffzrUHk7jzQvjiqdhyprjqPf",
  "key7": "3o6DjAt8whetiRniqS1BkyLULrGgcbTYTsNdxX6H3veXc8B68Xfr31Tzyh2ximK7FpKALbsdKv1ER88cXkpFvsxw",
  "key8": "4TEczS3jv2U8LuGRG98o9HZcYLUwMhNKppwt92e89Htx9T6ywUkxF9pM1tKpPsFHcYGZLorFgYyQPHHdGwa1HMgZ",
  "key9": "PGMuGd2F2Xp5PwJiLwMFkf6ZGMYnvPm9sTVKYoR9KkTb8fTJ8osGrcLDdAYjGM5z3MgmXf8k1CUsG1wFHMia4oC",
  "key10": "4EZofwduvvxMMFu9UUNJjA12brZczqoZcVwuxodufeJTXU4iAZfrcmdFDpApoaufJGSKGHSxhnoTrVpUk46pZ8Px",
  "key11": "58jfeGxEEe7Rv7cvNvrV1Sfu2Azcwgr5gWLoDitFfHmQj49DT3UW5NAve8WhwkKKo5qhNm1XVL3gXinajHVCtL1t",
  "key12": "5BnSs3VDh9ohKcxuerfUo9pYHT6hHADUWUzDpuavdq65wrHNXwN9kBfUETbKWQLRX4eYQXJC55ZF4ir5t6migwH6",
  "key13": "55VMQ2pvCyYFKpKityN1mqZjc9evWCLwZ11rEkxmewxiMGojc2if7AkQMn27MpRfUrL1JE6nDfLiQ1GvWVndXun6",
  "key14": "UBH9zkGr2A871FuDX6xQ6PRUzWM78PkNwP78oWmB5KoZjgGqZ1Hgo4FEePKcbXkhzq4fJcaRKiUViCvKCz39d35",
  "key15": "ypbftDcFBQhVaVgUG7t9Spy4jLQwi2AnTFqUR93V9FQG4nTFq5vKotxren4f8CRGVTzEUkXao26GTSZdF1yY2PX",
  "key16": "DoRJs35YEZoTwoeWoUa3dsg1i21bYX7nA7PSaC3qa9BVfBm8og1x5xtfz3t39RPgUj8Yyc6YGTiQ2accrYak8k9",
  "key17": "2nCM1kFhumZoRScwPrwgLdc7wMCcPoib1pbapAdXX7iK6aUVPvA8UZ2z8mPEJPorxXke2dkiGZQ3F6q7SvJfN2Q3",
  "key18": "3sZXzwMviuA2nVg7otB4Cs7TghZuVZQKGpH7bvSQjKYverXfwU9jiiHjBWJFLdMwhZ4MDMW1ph78hwjNfWRy86vm",
  "key19": "5ijZU7HHc39Aw2ML1QNDE5xRyyRwvMm5hJS5qgaGmMUHuUze3acbDi3cZUtNVF2gfhXTq1CnvQM5aFEt6p8YxTGX",
  "key20": "2vsbAe2kpRxtrDShy2jBfgT7o3wN4PRDx4VRNHE2qUq9ZxmnzsRNePTaP4VWiJXWAUCVoPN9inJ1tiPzLB6m61v9",
  "key21": "35Z7GyZFrUxxmWPiZ1KKhuDGUqL4EfUhQ9c4LsXmmt9TcJ3NU9TUG1wsEkm4ufQycTE6tb82XGbjSEgYRFSRbNHt",
  "key22": "5u5XeUvd6kutq3w61fPXtErhjiKZNQ7CZ5cxU1CB6UgJaSkDyn721aYWzJinZWgr6QCB77zhA3y7jo62z8zePjDW",
  "key23": "5UHtTUHBbbECPp33kGA59Na3NCwtqigVQih6BmBYGwdVkgBjwESZk4KbJkqvfzeBjfES7PgKovNtdecsKKmECKTR",
  "key24": "5FN8JhKngaFsWQPURubb5fsE2Mng4CsSMKzRHBsAcUz8RJwgwMz67fYUEnWkYW42Z9TQHTMMN67H5xrQMP1FVWM9",
  "key25": "5gudw2LR7KfKexbgvXdW9a2MbLejycttT4RGTJiTJGkAgaUZe1DBwpCmUm7i1mU2Pt9ysaotycQMVpEgguQp2GTD",
  "key26": "34YFEEMC1MJJqFipRnx56r616C9fnvC2xHmFuTDK7TZDD7MZcUA2azuBZaJk6Ddr1kXJNrvr6wyvGKuMtaYVu74F",
  "key27": "2iv7cvuxJ4FGgto3D1a7idrn6zvRpRBwC5Wu8TiMMdVDHbX3Vfzgos3dWaBLTvmWwfrcoayptZiqnQas53Sf2cyW",
  "key28": "2KsLWKHcgCBgYHiMHewxi6PGrCY7wxpGomt3b38yHebn6PYsYSC7WRC8U5guaWXTKSHGSAZSoNAFga5eA8FwVoqW",
  "key29": "2diFSBqaMdExS2JwqegRQukrPtrs87xYEP3XvLrE4DkDzdwKGQCDpDtspFk5Lx6adWUwjdqGmNwQ6N73HcsZTw5k",
  "key30": "GnDkxKBMDqCeQ8zZBkhWBj1W81rVQRtvkYt2JpsQhzYUAexYzXzXfgLqjGB8fUV95YPUX3GQvMaxUmii8vh1zDn",
  "key31": "2VwFk6iPYHYSh5txThZo9SRZWymmNCDbeTixRCVJo9VozpiF3wsyxbhbHhGfZP2BdqDwC5VKTc7ZH2EsMMUEfoHz",
  "key32": "2D4AXeW6q8A7ooA8neVasbt1hdp3pB2E55osFrheCoYjsUHHkWUhkrtFUi6UwhH7hcDWnpsqf7N7MW1rKBtW5ME4",
  "key33": "58s2bh11xQNG1MQGzzr1fLtPcPspUZMhApisw8pxwBp6u5ZtNBwaWDTZxhrgL6TrB1F4oCmrBbHkrdoHdWXPHmK9",
  "key34": "3fkjF2aT4VaqJJFV5XJaEYPoZVPmY1ZtJJAnb9UA1NojKnWBTcbGhihm9zuwMd8jiGAVVNHeCfQeQvauRG6L1iAN",
  "key35": "vfwV3bCjEEdu3yWdFtETacdLZiSHWx1TBLK4ajzDbBV4W2SDHWGjAACqdBHeXbJMHRbbjVuzcvPwnhM8j9rPRvT",
  "key36": "2t48TmHmiZtzaHVQmaGS6sHQaUpqjXfcUFq8ZydSBgc5sNhpvtzarUqBBaMxCSWVWd1XJX1vGAyPVoQQ5HsPZWKs",
  "key37": "4VqGYbA38hysHtYde7NeWEcNtARKGGmJVHiZukyVW8Yns39ge337pYymzxwxjXShwQ7tGkNLRkcbGYk62WiJPRuo",
  "key38": "26Z1hVSijfcUmMJ8xC2mWCjJu6zggUMv2gGGjUNMANA6a96dQ7mSsjzxaKM9kiFnkdmM5SgEqRsYotdCwdqDSXSd"
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
