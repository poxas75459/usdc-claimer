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
    "2g7EhSsciw6MTrrRYPAtTBf9kTpuKaWd8CfhQ7r8Zv78Fu4pjRB8Wuh8Rh3Edh7AbXA5Z19ixgzVwsyLMpjofF3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rbcjevsJPgY8aPrTxRehCfGz39AMJrQeGnh4Xez7VLJGqrQcrxF7HETx9ZLKo12gCLeLxEgkzsYLMWTFiMSCqbJ",
  "key1": "25tLR72qSsZpmFaRL2e9uoMPwcxYw9SKpvmmhJFYPP73zEsgTvYW4o2DMKxGCJX4h2zRypNPH7DpoRaXD2e5FPGU",
  "key2": "3PQ69JXjvt1C7MVHKcZxJg17vAsUmuYPrKSHAFAqXQJFqj5z7JdsTAnD6ABrK8dzqm6Lh9zroq7JGqhZKwZMjZMM",
  "key3": "3AHq73Gjf4Rw8R72SBZ1ARxTHRyTM5X63kgQ2i64HaZmiEXK4W3vgqKF1mAdPRhP3Y5CffoPZ6qmwceV8bQR4GoJ",
  "key4": "3y22x1cC7k6gFEj3K33KPsuFwWwi1VKFMU5B6RotwCYCGgpXt6NPv1MaKaKziUyyAEwh3BxcJ6hv4XRcRWRx2cT5",
  "key5": "33Uuibk4RYnNZXSY1KyyV15rB2uA7FrfRmxPG6s129aLRSecRuj6w7h8oFmH198MkvaaE8UbibN8f4jPfwgs5v49",
  "key6": "2JRdhZcGTNEivKdv99t4JLM5vH376B77oRGcvp1K9iAaY7BXE2RBp2FKhTFPAUpektyU4hwhpdaP2ekb71HJAd3Q",
  "key7": "5fp19uFHu3x1uGodUvqzJLFMkuSn6xN9YPt4b2oNXAek5bnUGLogPeNHR7oT6C7wU8rbgtbMLVtHs2fBuGGsdysg",
  "key8": "2gQVhaVsxE6KZtVNC4ZF7LfWyR55GVPJps23EgFuUDnBLKD2CcFh7r7nRHJUoSWHYrJGzQyJ4AxmNwPWtGAQiK13",
  "key9": "2KpQ8sp1ciFn3D3qMSUySh8ST3RZHrBpsZSeTKZcvewNmToiqBJop5pbLSSzh5iaTvvRV3fDBCjV9AURsGFmUCWn",
  "key10": "2AJdm9U47gF1r4hSSLbYBMfPHpPEkoWcYbqe2KHJCN1xgSXTSqPA41HVrMJcxAAZXYk8oFKpXqszjCQ8aXWDpbTb",
  "key11": "4Ermj2osNzQeUEPHGhhDQaQGB141xGkNuaDL9guAPdtNabNymSZ8ww22p9hNVYBZZ4wUJPiakoKA72pozgKknyjG",
  "key12": "4bMgY1Hqqe869qVv1fVLeonyPjviCnFWhiAfuv39DyfqKdGFXhG2uMUen1s7fMxt6ymDsSGz6smgniK57KBQRuaU",
  "key13": "SZYvkafCRNhSd5cKFjjjjjDs7YPFqtuybqCe2jhuoKnyFGTHJCDG2dG6hTUky5k59wABBoFnq5kCVyfAAvwtJ5N",
  "key14": "39j97fGVnhEEq1KVKicuQ9vgAyPAMBvgV6Wiq7P9udHf3TPeByWGJG6WFZ1i1Nfh5pKCtQJ7zXGTrbvcifjsp4vJ",
  "key15": "4Tox5ciQ4vyx6wpgaPNwdPf21CzwLFpiEXWvzyaP1KCCJNcXCTnk1qMYX1TERhCuC8QnebA2wDc23973Qg9KEJ3Z",
  "key16": "4aYZCqj9wiAsDTVnxqQcRriDsqxKhkz2SMCp7CvSRwbp2ngBKnysnMc7aN7k89jdT4ciwJcs2EZFp5ugZmixcih7",
  "key17": "2oDfXGdbxpQ9gbZdu3HnhbMWpDHPmxVNtfbRaRJH7jf5bbt6KEczzVohKQ4ptomFjd9TqFEk1KvWeazdNkxXLqDs",
  "key18": "4o9pwaSZ96JqsmAYDiwo1WCzm8SMY32TL6sMvwZ4vWS4SuRKK14XirpSiZ3yXGamVioJy3CuD4oQa6farNmCwHD9",
  "key19": "4Y6Hi7rK2hUvtAprPxKgBDwR7BtnttDcrLrWSGe4tZroNqZkniqWtnMB3ruJucbwDij7ch4A5Yt5PA7MkEn6ntSw",
  "key20": "3obdCz8bNFQ7LyFvKr8tgsLEKTuft1M4YpM1jUU4Sd5jhiB2ZMX7zFfUupxArRVfDghnbrchVEhcWUp7RjVr7CDs",
  "key21": "5dQwwLXGHHEziquWwFqCuHp4P6okBETnR3sciy99X2EvSEVv7QK34oSBjGuQEJ6w3fLGEoH2q8wMYqVrG27uBHVj",
  "key22": "5C8HoA8MiVxHSZTTu4MFaUqxS17M8xTb8nw3BAKqbVn56bap87wfaG6HgjhbtYacZXcKavLcumP6ordKkqjBohVG",
  "key23": "ckRjRCfR5omEB8SQ89J35CDdAdX7wfnE6r6Zs2PR875TBmsJP3xRjeQLdU2yvq39YDjceWxC116N1w1L93nWQne",
  "key24": "3eCTqoTaa3FsknpZShhKyrUgrQyAf4XE41si8fCjjHRv4767jz4KeFUdPznXTKncQCnudxttoNFatCtGtQwvE4st",
  "key25": "3JjH6x6w5pTJxATdzGYuW69m22u2MXXqCWaavNTHVihYV2GjcBUAxVL2qG7MPgfAEUkQA5taV4nQSq7ECyZVCLZH",
  "key26": "3ezwC3neDf4J6ojVB8hdXHMhxwfpPD7Fu2UYPGw5WXnwhFzueqMLaxSUXtTuk8e2AnkcUkksVeMpoTaHarAyt4Ks",
  "key27": "2tNhZAySxkLg3coRXpCbbcxVWHAEs694UwMCDoE671Q4n8NDxa2KsmneocmpUgBZehEieGg9GrCqsKoXw8vmvPgn",
  "key28": "3DMmZxuKYMDtD2tXbgicDzyTVqeGxxtQxWwp5KtSH5Lb2qtNfVMfAFthqarziTHBJ5BC4ubXVetFyxEn2BfFFjoR",
  "key29": "3WKiLVPFxSTW5w2Rt3ZkexxCkjvvjiFVDBJhVycJhjrNdvqgPKT4XjEJGEnpkbwbBmfUaaPfSLzVogyCeZnx4pF9",
  "key30": "4k9f9hjT65PX3QhbMa3pTdbQWWkkWXhQy45xX2PfXLSDRNwDhviYisKhzD7LJuTnJDUxWA3U3ME9ncm7w6y4UPwm",
  "key31": "3TxTTSUKGUrdoWmW9ZjV14kXgVP7GT7DucaceVJRKSXSw94qLDfuf5GJrv2UjTkvxK5qJF8aQQBocDwHQrosx1Ln",
  "key32": "39uceHu14GrGisjsa5RoBH2FogksuYGx86iC3McdtqMEKHncehGDw25FeCHu3kPP2oUazk5SMPiKEjQ6CGkuYD9t",
  "key33": "2rVF1exLzb7WzfhstiS8f9k9ks4kuYG7zcpTori5bZGLCzwjfwNyPrFT5vR9JPSaMUbLWKHRzsNsBBTB8sXMmfxK",
  "key34": "4BbcfJc3dZ4fTrpuUF61yxkNWjwLFeEoqA5qUvRjfH2XVZvuCi5tMXuku8ETZpRZaSZxwgxdh9AE55ueN1Bg2ZME",
  "key35": "6twnKDb6k3crbH6J8E4uASePXfNmTqePVp3ubDr61PSigR3sGqcebYDq68ZgZuBJJw1ZvAxgZJwPq4sZgYAyYJN",
  "key36": "5EXEFQBKgCTRFPTjV7aEjjic4oqSxNjtQN9aRke6z4UaocVHTZq7XxPd7UkCtGWbidBaYvphNPfPJmVcNuBGUtQr",
  "key37": "2Ld3DmPqVXrEKiPabgMQB3Fked4ktep9yGxt3cEBo8jUej7njbj6qyQ5JEk5RT7qsxVZcAML73SwrSzZ1BP3yvao"
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
