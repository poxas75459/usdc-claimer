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
    "5buGqnoPHQBhkXY2MmaSThSE84A5EMEnGid9XwkDajkStC5CfL96MdmNpjxxfYu33MV1ZrwKqqtQJfvAs19DoXss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTkQQs9CGrS8uN4swYRVG5nnWj4knLm6U57qpRxYTdHWDUg83QzQKEmo43XtWim4knqY9PDieoXLaY2b7kgjbAq",
  "key1": "4ow4XdfXWi5zaQw2KCJLy5oKfAS9K19jv2GzqX2wSD5Fx8mZ6QJs5W6HJ6iFUYoZNBuAXtVGhLTNNBBpz86H9xE9",
  "key2": "5KYHirBTPHoT6UVby7iVTH6cgNFmunsVBPupZQSanFZZws5DZjr5aCwvYtQNu31Djg9UBogFdNHeKyLEXyEPEWnN",
  "key3": "URf17Sw51vLsdj2DRJnzGTrRYdM8iqCi4CKzsYXe51gWjwDMeud199aTgJoGioaq834gkXtGMe6jwSAXysPxnuE",
  "key4": "3jgtUDPpuyWuKDHxBKg58FFTJLr3dXBardRjiSUAAn6qruAt9ncYWwL7fSv9Fi4CbKqgDXzaTkCj3N2T4UqeUS6L",
  "key5": "44KWd4dgCazX7WvG8e3JLumnRU6reU4FdL1xtnSTGyFQL1se6SJuuAUBvFAYzcGmJSHpaEhZpHLETpXEtDvFHefa",
  "key6": "4wM72H8cZ3mzuq4LoiFZeyfnSwCGpBrQCL6hPtG9UGmWhhKs744L2gj5Bxm3uSU6qc2QkYBhewgtvsb5XTMCuovN",
  "key7": "2BdJVuHLDXodjgUVTvaGa4o7YR6Ypto5EJhph6EKjJiT4VsxHun85oT5y3W6VYJx316sTVMDd58wKisgArCDfodJ",
  "key8": "64TMP3R6PuA4G9JkrnWsscM3TRn2Lx3Q9mN3qYVN3WT7BNaQu2XWw17oRp5DaP1veUxtvypoAZ8ZUHbULjK69bP7",
  "key9": "qwW7LnqVkCWbfiowZmsDF4bqMseUEMgEBKwEvD7myvCxPdKHBpRXbkLBWTGWXC5TdcLkWK7KzuZpXHmKfqrLjgY",
  "key10": "2FpZgtN5pCYSJGLUrGEgSBwtWGPnqc8skHgrWgVnbzrNtMHaQqcf48CfVmZrfWu17d6AnmFyoGPDFkuiepSM7As2",
  "key11": "67JEcmtEzpic23jWpVSxkgAd9BGxRe85Ch6iC1FXSFJ3r3ZHzwZgvPUs81eW1CLfXGRL1AFLa2eQthhMev4ZYZm8",
  "key12": "5EQy1mznbe2cPi8mGUdhaqBYddzBkSvhJDNswvw8CgqAFvvqw6LNAEL8nmMTYLz9arWNBzRXbgBj394qVH1su8MP",
  "key13": "sHzpwwFAsYkZfYcevoHdeQNuXESMKjeXz5HLoVYnWxEUELc3vvvhrPRzKnuNyw9eVhGf5qRZ5TjowZbKQR5Eu2v",
  "key14": "bn6ngt8YC8tpsPaTDqhGjGx4DU4K7hHoYwCHUMrMZn4kMWnMegBR3zZ5cxdN1W1p1ftG5dEu5DwaQ3HL1Ps8xpC",
  "key15": "3QKbETVqUdgogSBjDZ8a1sC13NF3rKbDMHVrnGCjoAdQedHC6vGbctjoocnfkJNWitpbVEADCY9fRRgYbbqQULJj",
  "key16": "4LRK1zTCWMiVNNq35dtLWs9xEDAsT5fYdpVjwJGZCJrr2ZSXM6DfEzGsTCMyqzCkv3Aoa92Zq4FTUf9p82ihGeDa",
  "key17": "WSBK1wazKt8Mutm6mYQRAFxmipaWVJZCYBGzpD743V7qehRjMayEbh6r8jP41PVsUFjVK7hSxDiTNFPAdvCv7Go",
  "key18": "5bqkCrvx3hEzkHsYtpXNhSoAfvtraU4CWDSv59MxkJvAFu6h3g6pzpVa879JxarkAsqzgARaLTCcZnCQoGQvU24Q",
  "key19": "5f4Cv1EkP212uF4iPTYYRM8EZvBfZHi1BFRvUR6vxPVqeDrjryJtRhfN8dYKHeeE4KcyRRZmFQkpjq21bV8aZP27",
  "key20": "3PRPFEmssvDYeATZpMddnSkeXRFLQ9zze4WMH4uzf11RK1iXimdZ6vCpAmE5uVCu3PVUU8LCbhq1BdQmhupTt82N",
  "key21": "55v7sUqJkJTFAudFRz47hspv7N1koSXF8tUi2x5cLnJnd9sdfXHBmXy8E2rrh1j7mzi9np6qEMw9an4WCaHCwtmC",
  "key22": "533AmoqiZHaxt1Dvkfbi958KUAR2zAssDf16TyP9q8yFfHdLx7XU2eaHP42mhpTRHpnaUNhpH5zRDYcH7NoQqr3s",
  "key23": "3XoVhHRaiuarVN8YQXgxj7QF3TiGJ7XWbk1KAu26vrs2kdzfbSzWmLe8gWT1TuxXutrFeaBM1vqEzHhgU4Vw2jiw",
  "key24": "2RS1ne1M8zdgxYF8QrP9jboiQe9vg61AmDEsz6xvMv7DBUuPg8zyqJGVLg2FRipTiC1J1feMkq6xpW2xnjQ31LQF",
  "key25": "2kxJw9yisEhZZUEAjRfXUiz81ZJoPhi7bLRsqzNCbYpu4bjh5C41zxsfcLcxCt61y7jTHzN5eFidY5bp2HhomT4J",
  "key26": "5BUNJfqUMK3eApUsRsTtxDrigPhR4Sxu9CNUPeQnAAk7m8PxqQtaqhzKdxpBxVND2TQAKFqvBBs44LVfeK9BLRyw",
  "key27": "3SBTzH4qoxjH1KocPCPX2rLZJKEceF8FYHB3TvCBrRDTN9faQfxR8tec7WRevBw7exoRp8dv996hp3hzKM8F42pf",
  "key28": "3jnNX6oL4KzuPfv5BH5usxYytC3QZvA3aEzmk3GtBC3CsFVTQMAbyGThA6oakTyUKcD6HBdpHovVJv4vYKtqjTqa",
  "key29": "27At1WpexUJobYqJ6jpeM1bADDYQmPeTkHqoChh2LCBVnZXr2sSWoV1udSfbBMUJx8ANqGDhsAzkpEikBjEXcMwA",
  "key30": "21srVPzQJpmfNVniVNKuzhWc1PuLCkqC9v13uWkXj1mFFo2M1cKy2nxQabnr69Zdx9zg2aw6WgTrTMCqpGmkt7HD",
  "key31": "rdasCVw3guPePnTGkA8srbotra9VSPpJfeRd2V1qbNDKPoBQhsZNqcRAohPz5JsSVEFTMNVmXtLeGXAAuHnpGU7",
  "key32": "4gyKmaRb2iEEkMiweXkmCfvKmb1dUyq2JpQ3LdfjZWgr8EpngUt99oQT7qMTtHwZt5tr2QHaJ3Zd43UMdSxuiMqk",
  "key33": "5fppGD494hra72dPkByrcHcXUhykW8vDysjdSRLhLiLzVfSDPp3xjgWCw1Mjppp3ZE469LJytiUG7hVzLbd58ATg",
  "key34": "3BzYxpkh2gR66RokESb4iXCd6yfixeUhLLSFoSVcNG2bAjzkAQ4gK1Dvemh7jfpeGzeG46s3vhdQPvWbq2t6EuFZ",
  "key35": "35vtrb5zRKoprGvsCaSKcbnyUjxDVfPPvXXbYmc2eSivoioz2BZaAYG3ykarC9abh8SrK1krC4JFPoANJWJPMyRT",
  "key36": "2YbXUMvFtK88sZPp7dBxPgg9tZfnbVEU5z4ztZiZxJe2C3jEu2SvoQm95skWpwj69CNFGF6wamHXRDD1fYXRZdZk",
  "key37": "2EMvWw45y53KnqHDxGeaKXLMUrnEHKSQKEwHVP3BikD1zuPHsGn1LyqragENt6kcrQS3Jc563PAJHK5CrKYJJiie",
  "key38": "4jELoBB2RZnU2vS9373mk4fkKTfMch8yzVzmppAQUqoUcU788GGUTJ8hPiYzfmztQeAm3BxBTG8D5ARugKEwL3ve",
  "key39": "24mzUck1SoQjCxWpZjEfe8X5U1v8BXCFaBhMs3JTJyj9SKkcKKkTjmQE243Rnp3Kg1gP5aToWZ26npuMStHAoVj5",
  "key40": "3MuE3UbRCapZ3abJBrJCyAK1hHNAjH5VwwP8ThVt127sNiQZnSYA9ofRg1EAwQchBuUQphZ25yQZrG6gcoQpmx9F",
  "key41": "KQheeRzYEF73xzrGEPNTzeTu5DHy9BkdqquvNMmKhDfk2ULg3D9bCDjByJCMSVcKapAAysKm7sNG96Uz74H2bae",
  "key42": "491AChxn8sWfL6SZtMgnnybBZ1s6mTHU4FrzjP7ZBpM46edsdZAUFv6sZFLphaMnQAvYMugcrwGqCFfqrhjiQn1g"
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
