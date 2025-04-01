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
    "3Wg3fBNP8Bttb1xuRZy2yk2ryoxDmcs7oVj77tEKGVim4G7Cc5qu47H1X2v4GtNxakQezCPwkSQPfQtuCKCfVBGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oLD7gFzPjKNWfgucEiyopYK4td8Ts91zmPeAePLJvRyYKKmVbzq3czRt9b2NS3v12tSHexmxuRiUPFr243en2m",
  "key1": "5kkbTHDMdjJFA1HEjjVpNZMfCaCdtx2WBUMVmZjXnFTUdh5iy5EJPn1BjuPFZu8SfEnAh8FsZd1RxrvjBru4FAXb",
  "key2": "3m8aGKj95ZhpQrNgrRp3xqSgz7TF3po9xjd9KP4NqsPtnzArmqU6sCkRikMD1QJSGMtrGBssXCdKVce1xMmndXL1",
  "key3": "2NjFXqfXcPgo71DVXUHPfUkZBEBgLW3cLwiYrUNLBZWbsScmvDYyuDa72uEzGetHVKKR7EPLyUPk4FwuJ467vtms",
  "key4": "42WeTG79AW2FJUwswk528rvgFVS4yaw8NC3rV8uVgQfrAuB9sABQ7RUMVyFhm2GP2kZqsRCruuCe2VRB6BV8pEic",
  "key5": "4n4P8McNwYGEgGNoqvctJFjgwzF1zrX16sEJzrMNGquDb3L9Dv1pF3BrSgdfJNTp4WtxWyNCdWhUrKyN5WbGVFok",
  "key6": "keJBntbKQfZt73duY2pM8LctVRc6vnseb4ULVkqmdS9HKafvXVPdE7xrkJnL5Jtr4LRjvoXzqbnW6Q8YKCoiiSp",
  "key7": "51PJuihw3SL85QM9w6bv9GqabHTwh7cshSjLNf6p6E19dzLZmEpPaG63863tJY6USTRsHxK688shYPWwmUqTaXpp",
  "key8": "367ZqgfV4uwMf7KaUjcKyVAH5kM8rUyrzF1dMw6b6XZfrrPb6Vn5nAKGX8x21TucoUGFa9aGXs1kDCnkTSEesvLT",
  "key9": "4rakaU1kKTHCNU4LkckBjyx4xEmBuew5pPfZgTZoQjJHUhg3soGSR3xd2KvhhuxiCArK9idBDZQNKErpc5cz8Sok",
  "key10": "4bSZSrzbnLbtmXC6f91rCoF1pr596JaDn3BhZ66tKszZ25rUYkBC5JtCRm49jYFH6avyfQ7Xf1KG2oszXEnpWEqa",
  "key11": "2eqMBTbRqr54dZhBoNLJUe4NmXzrnASPdKnWeJ1GN5Xt6ARRRTXTiQ9msyXTGZR6RoXFFbKM18whssrtRxYVqXtb",
  "key12": "5PK6YMP8FH2uuyLRW2xRkUPuF8hzRTg3PDEPwu2cb1aEfdojJ44DQDjreCrmgC3agnkXsQdeVraVD4erbvs2eLhp",
  "key13": "3wjKf87ZMdkQzdHsS2XnU9zwY4C72VSZQnfZrXxpuwjkUPAg94KemtRNkBUuKuJipsxHVX7j7bmxLGMrEzJaEr7V",
  "key14": "5MhK1NwVxrAGwwgh7RDrnF68Aa95JhY9ffqJUxi9MTCNrnkDxZjaF7e5geSiut5VFEm8EGryvsCDU2v9KzasiDqx",
  "key15": "3GHsTd7xUWn8WMAGyyNMMvL8VeFfBwPhp2i5Ndx5A95nHHq759m3BvTbgU6rTyUsbu95QmcASgcpc9DNb3VZCBre",
  "key16": "2fWmPi5ZakJB8hhL3r7tCegtxF4Ff1yXey5tADj5gsiGEiZf7GaZerWqdGKqadSkM7tKBEsydkLVD2zPsVHeCDKk",
  "key17": "4gJWMyTksbZVHWaQFVNURp8ir8sAHygjH7TLoWb5JbkUK5pfd6t9t8hVZDYNpkqWED9jYgh5udzmqoNRKDuHgpqe",
  "key18": "5WzfxHtFPJXwRhPk6iHaKT4q8SPiHoH9TqxkQYLXs5KdH6GQruw6Kkk8YVdy8xyFZh5eqFuP74u8wyEN63ojsz94",
  "key19": "FHMLJFsf4M19L1uYmyxNXoCVVoydJk7WQySERksxDEJSyxuhj7SZ7E7T63eRy1XZTUKbDUYWbyh2XqUYmTKkPTM",
  "key20": "2oEMaoqnLpCp3AekMKSNviMahuPdxwM3V1dfLUpDJ1TjgocHwJM6Geu8bYmur65CsCpWxxrmyCJzgJWYhW72nGaY",
  "key21": "4g98Wjym2NJuiAmCsz6F9xCNg8qWSYeaCXwq8vATQP7YYeBVKfg26EoQYH7UBCEGcQwYyUBmPNUDMmFJxYBThMzk",
  "key22": "4qDa2GoxqRT4JjBJ3u8szMaduQuNJPEXuF6CM9cpAZxEpJYWEZpTvN6ffooEggVKnauBtT3fDunPHpZ1MNYXuzsc",
  "key23": "nJrJ9CCxdDFZ5h3Nf3bAwXRjULkTP7p9ffV8khRaF2AkmF5KhFo8oKXRepg1yjiwR3Xgt7LuEAVsRz2dNAcTijX",
  "key24": "QRCpqr7a1F9mhLYLDbtUvHNgCPkuBcyboXZx6c67cgqvMdmfig1oMTqwCF6a1azMvD2poGsPvTnE8Ja1N2z7378",
  "key25": "5sdpStnNdnUggMwYo64MCu3Qqnm15VGiWL59eeBLtqvQsRNsF5MiwWxKiDW9XVQ3NcptD3cxuudQ8QquKSgnehfU",
  "key26": "4BMKzYdFs4yewBLT6pC5o4V4LwcSunLKrDq7HBDLgqLxPf4wymufSzTfbwCNotFQfZqAaBKg3d7D6WpwLVcn5yrc",
  "key27": "5x3L1KQsMiQb3hvXPgVxvypTXEHRX7gQM1zwnbP4kC7vLFgQvUFxheYpnTKH1UFn4ut2HWDXdPQDpCYYGyEz9oAU",
  "key28": "5b2K8nJZmgMVs9a734ULKy7rjGMvH7QcSeyfsVfTx4w3NfRz1ELixE1YcgbNWh38wu8WEXqmqdueAzbxXwHMhHyd",
  "key29": "2Bf5gijDJMhi2rPpcyRFgiUVZwfwoTAMBAtdTHRGbbBvcaVh4kEcmgSqoGKh1dXV6L1DEQpABT4YiLac7WS8La4b",
  "key30": "oKo1mXHCYURdh1WbGHKm5C46L4GBMnY2A7DnF42TP1qmyTPRhSRnHTrruXo1Q1XXBirfWXoxThPWGqz1ixhSSD6",
  "key31": "2A1jPx3tCk6zUZb2FdT9P7Tdia8YVmZCuMS2EkNBQcYokxirSoRk3GTVCJDn7D2AN8JUjVSRWPCkR2ySuHi2Q2Yo",
  "key32": "49gVuRJCqLisTQyeb4CM5p4t81EqvJuyNPuMbELf3TatmBwJR8YKNan8UPC3bjSbNhw1K5WzzNJchZFRRRopFMcd",
  "key33": "52Rze1SBQMqa9dTFDKY7Qw8i8kCBhzdEUGGSRW62wiQMyFGLwqrrFzgFcznVQZM8mVeDsNf6aiLBsVmZNSCpx1R1",
  "key34": "3Bq8N5A9j8BUJ8JWuYPVrvJbqx4DDoyeUdB4LWBxyzFzWLCXRyaiCMcUz6feHYEkaLdqNVXkoPJaMKNRaVQsynat",
  "key35": "4j9JLropfUCCVfbeDqqfpsv2fsFpADUA7yi9dCYAeKkbV2df5zziRXFQUxqRob6KaDF9JsVoWnSNBHZsZit5TVct",
  "key36": "2fj2yiBz1jcNELpchDhp4x4uovbRs6pPRvSf4fNU5WeAP6cVnhLd4Lb22KvUvLzMZttbjAZegtiprEyYPSEvif2W",
  "key37": "63Sb6iokPuC256JZfCUSM1crP6B4rPomWSr7aYmPTVZkVecGfdFSCD7c3Zwc9LGkDs9fPkq6o89a429AhQqMNdj5",
  "key38": "R4j7AK6WmJrUamECqrhpTUCUz1cei1Ag1aehan7DJtUPY2furD2yV526z8qbVHzFpSWYDJsyZkNvFZFoSWTptj2",
  "key39": "4E1fyEZWXwjRusTYcKjSJXtxucRzp78JucxvmQYz7Ts4Eyr9x6fVLMTNzRfKd8SwHjh7CAhNc66m18gnQyKKiPMj",
  "key40": "2jN4dTFTA65MnZ1mqsY4wmWyk6GHM3kDcfnA26v2ymgUAbRmYoYYkRCwKc9jZvmXsYHm8H8QLkLaoWyio5ADLHNF",
  "key41": "5U4VwFd14F4W15EDi8i7Q5vH4neCJ8QDio5cQwQjbYJwGKmbkyTbv7dhYgixj1jwJzEdfaH4McnfrV89snmFQ1hm",
  "key42": "4W1JbyEovWNMBQ2PN1wGU2D5FUkeEqR11UzAjYZiSjEdFamvWdE83873vdxFJr7LvBgpzxhowyffpdDTwK38bVEC",
  "key43": "3gZEDjiV9yNeA2qqzQQtSeaSEZoWAafLHBWb4Aj8hanvTH9Smsvt6ZfMnz9oJiTHpZ1ULqgQmn8L5rTfUAQPbeDB",
  "key44": "Fhnb4ghY6mc6KyF5BeX2Hh9zuhhMBnxZcS78aaut7yrTwaamgTSjnQhKBHGraH33iEib3Z7y6Hh3GG3zfAAptKo",
  "key45": "5KGYifBV7iRXW7H7PLcCE4nKhwaWJuBz4M62wkHYyGbD5pHZkHbKosZE8M8qgZkYvcUunmUWacJFgNRBko6U9Nfp",
  "key46": "2tym1U1YiTMbQN2QXAPzuuRFiqhf3uBRqXGWsnVPsoYK87CqTtUx8kNV19Tkg1StMZMRPptcDiNn3dUoVVyD3epT",
  "key47": "2yrXGsfC6pF1PmRgNyUeQPN3mLe1GprGAGd5kUzCanJktjJuAJpe6NQvQXDpFvH1fXGH7gEG3rQUPCQs9sA8NXAt",
  "key48": "4KCypYU2Pd2X4AAVwvwRePE5WWNqExJKTgBY5gThN1Fs9KmFLqi3HLNw4vEBFRKeeMRL97TZRScxCSR6rXKygjqy",
  "key49": "2GiTABauT2Q9KrVArsKY9urawXE6MhRvFpXLWMmP6d5LQpBb4kvmc67eaJDcNqYEGSNeG8M49m1zpLNbmyJPvdPD"
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
