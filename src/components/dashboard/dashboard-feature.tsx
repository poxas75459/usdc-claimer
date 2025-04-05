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
    "3xt3NcLHXEyv33Pabf9F4u2SP4HEQANk3MEi76trr8sBCoRct1krSxkSgFhEVFVJ6yyYgp5NZmnoC3nZ7dHxWNKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389rAYrwjYciYZeehGfA6AjEKkXe5t4CSGQ3Kp87tDmiYDqiC917t5R7DSio4eSp6H7mD9aFPJT9rbn3ogAYcVRa",
  "key1": "2AYKwCvZEEN5997kVvb6mZw7HejU9JKXzmkk2UxWTdR2ReWhS6wEqjajooFGpVM7poybeH48WH6FumKCDNmnM6aY",
  "key2": "2J8hd1bkFVTdYWeb2Ctkxp2SCtqF4jodo75M8K5WuSNmFv9ghwpmPjksMNdudwRg43pssNL4WrZer9q9mS1B9JPh",
  "key3": "5sbzpnL2tdQLjq8ywceyMWicTQEBn63V6ji7KYiTNh9PoSyxGWEZf358AxmJQagg6NeZgszUFaxCEp8Fi8E2qSju",
  "key4": "Sp411Pj587pRfMwCr8S9HLHb8GJhGL2ZRtsQ3Rv49wP5jqD8qCgLHBNhuUXrLMYVhzePpmQ3psMdEnc2RKvEUMf",
  "key5": "5z7Fu2JiyStq2Xfa3aGDyKHqr9iu3CV8hHz7HMN68AVH1cjvkAXwnTANmipoqNio1J7Mj1gfpYGKmXMEGzBrWU5p",
  "key6": "DXumFAZM4FRqPMi24e5baTsJ8NzezHyRMaeJbcC3Ki6r4xog3fnYmjzU8Zemt4BxqmsTXVTFf5JPF8JGaW9SzXE",
  "key7": "4KuLYKeFh6yh5f9sPwArowzXkNNa5N3eU1Mex5Mgd3hp6t8bEyfhySTo6SSmoXaqavCwv2jCXiZ1Y5SAuUJFf4VT",
  "key8": "5UaHzCXTuqEAtHhJeasRDsXd7GmXnMkgoDwZkvNyauoex3ir4AJ5V19wt7nJmwi3u1USfXCJe5bMgYM4arWZgL53",
  "key9": "4xYnmzp9Ff2tbjrDAZZdW81NVADsDe2K94erFqULkoa1q9GyxYGkSRFrYe3YyWnVKYbRTFYBnLL4TjXaEqXNErZ6",
  "key10": "2E4fQ4ywTYeE5NYEzXpUVbdw6kYgLEXaFVnqZFzEJdoZUwuagL8W55wXmzrX2St89abBgJy8j7cn2J9unrBxtuS7",
  "key11": "2eRiCfzfwbRFAJLfikxCaMui5PnKAWJfzJEYDjgfFvrwzXgqzzkF2GqJgr2knzf569GKtNPPk1gwetMGAPnpCwFy",
  "key12": "4A4YoKSvCpju9uiUF4fSVyiEYuSvVUS54vXryNyHz3hkBush2PKNXqvPRLfqnNPLaBE722iefR2HeJU3n7nMMFKm",
  "key13": "4KtY4X3s1UqzTidEXGfi5pAfmtCw9qDPrsyhNP4a6smvMSjQuEm7e2PBj4H35vHxB9QQuZGK9BTRqpX3ujbPLCpL",
  "key14": "57axDoCoziCqhZFiudpedpRv6Bb5weToTXeiqSc8J1wMXiXjTwHZ62wfkXX11uv2aXvTiUtt6dpm3uTLYNhWfQzs",
  "key15": "4YY14P9AkEJXVPDXe9oq6ifjrZiht1vuKZaNcWZ3EMYYGDTju8U5fvPQSBHMkR4zDN4m4cddWGAkvK7YLdnwcq16",
  "key16": "2hSP9XCsjAX8rMGVFsTWRZM93njM1ksXkhHmMis5B6mKdNXSQh2LumouDKACCessBrVB1XoL32wcAwZMgkc55tkN",
  "key17": "SrLerDAbGdZ5D7m27LjBMzj1oGhYyRjb2Bjpy4kXJAGQkQLa3mni1fwJv2z2LHaCw7p6pUomkeVPLhfnMc54Zpc",
  "key18": "3bPwFiarCCfYfakw1EnopNHd6WYRNkCwZoXCjrGT12SPnbf7FLzt58jVFxLkibkuiMmzvtcZnW5g4khsPTWSYR4k",
  "key19": "3FjXZtNVkGfhDBhKiquqAjxbBucJra3VkauwzEtqC1sv8f5wd8Y93R2s3KmXzyMUHSWHWfPpZm632kRFz8bvx3fz",
  "key20": "6dK4bDnywDdsq47TkoLUZUm49EL3s2BraDpRgEiBhp4CCxHZyBQRvF63ku9vf4VfcWRh1idXstXMDA5EibRS3Ga",
  "key21": "2CLWAHW1t2gDvKtEkKzA7EnvYq5KQnSrd4xdW2GkVcdvUmxpdVd9iubnfBLUT2GizNLWR33jQoyZjpgFD2ZpRSvy",
  "key22": "3ENikZ7Mz6STrjSZcUJfC2V7CSTofp6MxS8XmMYQMKEde8729J59PWrurUuzesWn7NYE1jAeLL8j3XA88xA3zNkQ",
  "key23": "2Rhr7ULPu7q6x2ZZQzjLG59ohTpJsQkmimMVWj22KQJzqTeohhe5nY2wf84aLLzR1k4BA3QprRMb3qjZmRsmQHDm",
  "key24": "3BRwWas7bRJvvafdLNed8aSQ9HRkc9uumCzehNUjjuCvQzARFrCiHRg3bQWn8FaoUFgZjgWT1uduA3uAFJgZUE8J",
  "key25": "3tZRR4NPmtLn9bvZumcLBptraBguDUBUxHiUJ1TcWEtrdbeBXK6g4gHewTp6ZWvrTaqF49PTz4nXKeu2m1TbmSEQ",
  "key26": "3NZV3NmzSvkV7WjC67NNHfjtL7gz5tbVZLdnNFBfdifHiQXneykPk9Uh6zWeL8tMpe5TvECJgNftbLxAMy4WVq6e",
  "key27": "49F2VDYrivJdBSaAGXZtP3RwnKXLpGjiakANdgDHt2rCkQ4EvG33QHqjcwwgWvVq6Dk16F7o4HyTBi3w4tFBsGkS",
  "key28": "61cUpGRpU3QSSGvZe3RQ3QQCHx6Z4CgC9Ly1LF5AxUPKcioRzy9kJd2f6GxTD6yPwmZtW289rtFbrtu4Swr1Eg5W",
  "key29": "3cAvb5sNGsXGyhBVoTWU2xdKtD2d8wR3iQUbP3WA8s4oLLhHwiyYUQm2PLtQmRMwfuqTJ4xBphSHNNiMxmxHjMYU",
  "key30": "4E9K7cAwVkxAUGFxquV6oMTsMyccmGcekdSHjogYocrsarQVFVE9XfZ6BdGjz1zxQf6DV2YiQkLxM7pFuFGmFZam",
  "key31": "4PQrY2F377zrevz4vAg5SvqcMKJ3uExcfSTb6eypE6CngFncEh1enUC6ddcRwWAHnbtV25is7zymVEZay4MzgPZg",
  "key32": "2AB2HcELpJcGy3pPURa5QsvXJjzhMEsFpbB8Ft6zSeFXpAfmoizF7u7woEZcK9urytsyT7Wihv2ha12y6Tc2VVNc",
  "key33": "2zcS1MYQx1fmNnX7ZcckdsNsVL4RAduMRCxvAY5QZHJnTMmXys9gDnqo5F6JjTW4S9yy4zQjeCbLCQAy2nzUTLvU",
  "key34": "4CrEM9NzrzGjxJqrZAQhcpA4STC3c1sadiTdgMwv8yXodpqTakZ7suzJBoFjQ8H3WNktQ5wAULNzdVpHVec14Yf4",
  "key35": "3Ue8EhXfKvuLZv96CMszLkLKVNo2CyNGDxjRGfTUn1h63qbe1nuuWKtwaiN5qVKgb2sDmWEFLkzAs8uvQtyBk61Y",
  "key36": "2jpF3spENnpKNXKu33YXhDRzjRrNeknhtVSZ3BR1sxQYTaPn1GBzje3icRuKbSP15kVSfMYcmuD9W1DHiodPWRcd",
  "key37": "41WdD5jZroAqJokhJBzzDDwsakFEE1Ag7uqXXpFyC9Sxf2jetBE3dczJr3a9g1EhvHd7EcdcADL6iZUDWErSNqna",
  "key38": "9fWSSKGXQzB8YiZqM1gSSqBhmvzDjLpADZ83o21JYpFpT66U8kwsMb5ZamuoQ9LU2UANMYHVpsK6SKfYZuyfBGj",
  "key39": "3iMNBibDCH1UdEXvPsKfEwX1wGWy3a3uXkDfnes4r4pz29CbAfZdTaVrCn1keDtf7MVdKPLB4wXftBoiusFvcfnn",
  "key40": "27sKm4qJgsxLbfnN2Q1bmPEjoa7dKxyTBsYzpbdWFbEYL5xU6WDocTt4Vd2XqcYqFHpvxBAMii1T2uQtQgF5T2uF",
  "key41": "5hcQgpJAQXUKdScA4LjnUcxeQ2CbMh2krjLRDdAwsLTteb1JnDZN9YUbh8HDzpw9L9Z5JyEz82wFrDZXibDS4NXb",
  "key42": "67osJt9o6tfVWCnafVATGY4dFPaReUgDM6RUQuAjN9f4BkCVtjuGKLY28jHruoM2xLtG6HjSsQCqnpdyczhDbEeb",
  "key43": "2cm6tQiVu1hBonzg9QkEgghvmCepV2M9H9C64Wj9vF5hEjVte67126sD1mZMa1vGDQpWJtyBKgsXFP52SBQZ5rSW",
  "key44": "2gAurDh6p1rkVpZCVGkfANBnBhqHq9QKxcEHUGejvPCAs4KNbGeSQuUanp2BAqaiKCJoPoyWKyWUwCTnVn3UMqB4",
  "key45": "3qxZAAfSH2G872kgrfxuxPmhgZKxTz9yjV4Gt9EASN3wV74qH3ky2EszdTFxptBotmZxQxFqYmtDXuqHUdMXC6TU",
  "key46": "33jRG5aPLZhXAqVrA1EMwpzvWVjFJKui5uYSMkTpiaShsP2gJdzPKg1zw8pXvV5SBByYcqDwMmPx9y37qt5W7toj",
  "key47": "99nyEYHBSPtnRhMPKc4s8Ac74yWSv7kRJtD5vDVszUtgQA2ZLffkEZ95ZfrXUmHqt7GqWzR42dynZpEnhZDQ9V1",
  "key48": "4ZQMfPBRB4KDWUimSx1Ap4xebRweoyZRnfkUc164oGbSqL6RjoKfMm7G86PUVdY1mpJ5joHtBM195k8GWZYWAr5A",
  "key49": "5rPQ4NxEFHeMihaL9fW1xszZyhnQGNL2pccXuJYw4YHCUk1DL8VPFwdmLwmX9C1BXoaSKCMTw5ko7djkiYkiZFWJ"
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
