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
    "5FQTMP5eyU8qY9Cf2gENVwW1DrvPa5mXjFUeETyPR56Lnm6DLSy8ndQLq7DXjc2ErSivinbRro5mX826fDvvntnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4De5DAa8Sdp7W869iEAVMoid6Wb2vtYGNX72sndNi3uvazkD9f6TJymkDy1FgTgzTht48Xx85iTg2xVnBhK1JRYE",
  "key1": "j9Q9zaaigdja6RzD1d91Voxc5dnhGNVNksR8K84PYc1Ecxryvy1B9VGqAYqKAhBicNxQ6ZniXxhR6VqUm2GWEHh",
  "key2": "4oFitewJBKMLV8sq3J7cWJQePpibGXHgETnA3pA1r2WaQM1V4Uh4hvhC2mjQwLtrvbUgt8TKzFMgdMSukLJj7z87",
  "key3": "521WRSLksbbLA4DqJFo3BnZjyVkbS8CCoLNw8QK5hEfwCjjkdzbX28qFchNY5LMnrivJD3j47KFsKMKcS4KTiagd",
  "key4": "VBkY7oDmkbH4KXbAhs7qqWVLnmbfWoi1KKkzJRcRy4eTcBh4fJsaV1qb94dsYJNkA5mgsA97YBoji8WfyPSyfua",
  "key5": "3oJgG3q6tiVBy1mS7gzBbWVg525ytDi1MmSM7ej71YN7hhnEGoCCBVxuPNwfmk481LwxCmKojSmBuXAg9758AyEy",
  "key6": "2trWfvAWZ6sRNT9Y9iiUGXMwXQg8UQZpNVV9bx9Nbkt1jjyKVDuWjCiHgxwE2NhBntx3GCtVKotZaFNdjGQJbabz",
  "key7": "vzCsPgpb7jqtsYtMXHD4BMpn9PkkZ8MEYKq1LShw3rMmhZMj83nAHsdWW8auCm19UwPgHwWyRdMXVyRByqGPZvz",
  "key8": "4koWmSiT4zkkjcXmfKnZr49j6HwTG9YoGA6r7y6YzFMjLfwjhoHNBLh1kHztxLKvkoTM24eKtYbqqkfv4jc6uWi8",
  "key9": "9f3KuAXCQ5quxPvYS97Si4AtLVfiUAKcEm3aTA37GatPsYFC9wZtETJkx4EewjVfZrMvGx9WEB1om1bq5J6p7UZ",
  "key10": "4gBr4WzfQMYDuinTC2ty5Xa3ufKGn8fmCiewsXXUSBhZknCNpEUQHUAGA4FZspN1UmTWS5Fsg2MgRyu19qBUbiet",
  "key11": "4cRMqPkBR1cxJGdNw3z1Ms7XDSSD8c4yhFyqsNLJoniKNitb6GpHfG6MabdwgEvLHbGmJ7WFq41z97ckoFVKGhCt",
  "key12": "NWiJAqNgauAWjdazQyarKwV3K8ap54aiAhxNMpXWUn711yJTvFEwUH4gNeULYpCF4opBB3AcXRMa4GiEEebf3t1",
  "key13": "5yxXz7e8PCRJvZPD4jkgpswvCGuR8ufddQ94zwopRRKvS21W9x735hBxSnUV8EQXfPgUtEySSqGGU2hVDqhXDrAL",
  "key14": "2h2xSn7HkzrGNkG2skMUMPjxmwXB744GHYUnBY7dFwvnBSEkBE56qcMURtgLQwFWcnzue7tDm1nSywVv8ZDRwLpg",
  "key15": "34kBb6VJvmcCMAZkymbhBtrf9oRbhtx8UR257fxm76eYmnhUBevyL4aX2R93t3rQgBZDbvLaM26sGMtVpJkLJYp9",
  "key16": "Je16PEAYHyUz6hem5d7ePhYAP8Y8Dj7uspsETuZ63MWNsygahqPVWJgfyNFZSqaMAhvF2hPMr1aZk9CZ6uh9ePR",
  "key17": "gyKumn5BMBbNemU6U5JwbwEULBihpXKi19eBhM92s3bWKB6A4AUeDFNyuyEoLnKTH5frWELcpUaACc42knutwWX",
  "key18": "aiFWPEUKLDaaKWECZs7TD8i6YwNX4m8PFnoj7L475jLrUPdXKSgxZYQiTWYB3sTw5MJoMYzWdeVpVpzb94Qc9Td",
  "key19": "5DrS9wsguEQTNtYsamRDtBifmcZ4TvkWpw6PBPFmHjEZH6abYr71TUkcvQCRTEQ89sjdAjtAJmpDWX81VkSEMGK",
  "key20": "22fHzFyX9d5ESyyTaDTGoKcqsGVMxNBKLjLJ6szmSEo6q9UfbVNJi2Tv5vPeBHCzqEckozHTHdhvyHWxrnFkPH1Q",
  "key21": "4cNcFLoLAXHvQ9KbBQqAM362U7LbjzzShkBRnMYtsxQ1bUU5Y93gYemMJBMuNGkTMayg1kGX259fkvGXzyT47AqR",
  "key22": "4nwNF7Xfbst34JGv6Qagt6nK1wCRxNg6UmJbwBYMVztVd5ikamWiSxLUZ23TbyQT6j3cmABncQTZqdfQ5fc2ASjw",
  "key23": "2SGVDvRdKsJPTwrzybHfVVvsy6m6LMEABe72KYmko7BbA8REA9MSo6WTCprVHcpAECDUkLaioFGmQ9xBr28d4jyK",
  "key24": "4V4cdLZAzu9bfo7gYrcd7PeiUn3WwwKGAzzVKHJQ9t8e2UEGtHyh8ckFWLNTM9CtQwRBn4kAoYhzNb6wmBM2EuSW",
  "key25": "3Ta9yCNfT6ohZSqVboG25XCerGntNfbo9PfHUR8ajRRkL6Dv7CoZesEMX9siZc26asZ6Gk1pG8QNdA1tDoC84cJb",
  "key26": "5AruPYcwxA2cHmmGDEZTMwKS6q9iDNTbcCbV9HGQjbL1p64aYccVx3fhwWSudut3ixhF9efhFmuZMDcZRnX1kpCa",
  "key27": "2ZhvJkH1UdEfStivRFYEq9jwUn7zJFYEc6gBZ7ERTzhvskCRjrZtm6e61Up6ocq1jY2f4yE1ZEPwEomd5go33G3a",
  "key28": "G17MkJFTvbea8r3xqPnxBzZxyT9vL88xkmS4sLfyxWYWmMbwmUMFXaA6KujTD95n4ZFNQpVa9j7efGvtNtncrnC",
  "key29": "5BZ2ZJrLyHLqW1n5TF8dQgPA5tH2xM9Hok4mu1ppi3C5m6viGY9oKxqR953ki8sA6TTLhu8zAhH9YEEPdoePziWT",
  "key30": "2JiqB6NMpiwmp125i76C5zYttEAjq1vt9VX8eCyGhdgBAooXJNikMiwsPHkqneXLhSudL4o6ZJTapzajDCupuTcs",
  "key31": "FxLH14EU6hFPrv9u6r8twXTh6NUTSvrz9qYS97CPDsD5YqWmnWDeq9NXLj3WphmBUbPcVo8DVCDPzPKhGeVU9Lj",
  "key32": "3hXqB28gv64UpBAdVgkddwtNpoV2YHMiXGd8irUsq71cPB8M9EvomxEUDL6Yznm5biH5aXZ9fpL43dDXtRN68FMR",
  "key33": "QUQjiz48H76w5QkmYqbg7WnLdXnan7KsknPxfJMtzYhKx9BqbicLrjAyCmvN7q7CCrLbEcG8EMLWX1Fj4BpUaTE",
  "key34": "3uUPW3bB3kBx8MvD9Gss7ir8Cd9fRG6KbESDr1WHZnmvuDGoJvamNd4r1HUhXKKqEkABxzprsgKQM9Vexo6sN6YR",
  "key35": "jVHv6LMGUaR9r3LZyMMiW88iAeYnEQNtpVGC1UGnCtEjXYZqiKUeN582tghRjnJzBZ11jkAiLEiaGA4t8Q7etD8",
  "key36": "yHgWNLoKTJwZVHG7Qejf5R4zBRoCjFHVdAkLNZDPvSQM5xEYkWPFGtyYSzh1YazSPedXzUDvcBq1Qk7k4vGLWrd",
  "key37": "3CYoYSo7es83MKePPjpLYRqQHrxV3iNwoTagH5TaeogNfrG55XpZNd2d8ELfRdjKcbFk2MMrABH7UCnD5VNKnYZN",
  "key38": "Vmo2K2QTDX9xjvdtHtD7VSKwtfexvGvJiPPq44hzLW3SJvu1555fyV1V5saYd961axUU5xfiWH3neMSWAeYX52x",
  "key39": "5xJejjJdRH5ah5x9F8wh7rHr2CnWHibfNxMN1eZVEUafMWwdJ6h8EcRyqEzdWPMcysVz4AZhWVfBWAD3svLiG1fP",
  "key40": "2UnQpQAD52EAF4TYz6Yz1YfiWjy4ioM4KbSRKqNesRj1Tq3k4BCVAYjch8tXw6QsRdDmEzLfP35qeVApLAsfv3ZS",
  "key41": "5u1DH37YAYFZQ8JH9x3MT8dkA9y39rs4aKptx7QzzjQJmjexW9uU8GQq5AKMvt66jZD2NZ7DCdLeCmFB2F2Wuh2F",
  "key42": "99M3SpcLTZa7ogdz446ciWqpsXP8QTxnTuhWX5WKL3iRqiqiebvzQ96rddEHR77FDhRv5sdwMFVQspknoyCZCYf",
  "key43": "5qMCBneNQYuZKEk6kwF87whLm4Lr3MrboqGNkjhUthto9Sz4Yo5kqhJegd3PdAYcMoGEvKcNCdy1K123DT5ry8sa",
  "key44": "4wE1pC3Bhey76K1HMHdLUCykMdQ2MT7gJ8DJj93jdEWqavqS5XWKfWghtMfWv2818SS2nu82fPw4cJavfkG3BEJQ",
  "key45": "4zJcHcLETbENgErHbEPGcGw1Y4XJ5P11Gr7mcQvNDFJQuJQFHSZ1ieweLnuuiP4dcyc6vazzZy7HtPsPPoaYEVvz"
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
