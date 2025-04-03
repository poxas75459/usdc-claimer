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
    "2L2o1XofXEvCvcX4wYuStLXKgFvSE7X1w4KSb3iseazZ8z9D1YpNHsvgv7NfCYGEzSzgpBk5gbXNzfAojWzV5Ka2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zBgwUosKByxEbRPRhNA1kAaqU21Zs9NfKitZ911wDgt4s7te5ap11qQWyM7WfpHv1abxLvPpM6qr2Bwr5HSR5nv",
  "key1": "46gfg1BM64ozVR2XQUwRAgLBXVabzXfHTzP9kGH66sL2dME5NFmnmetgXMhEe6rjapgQghcBi95Hg9e8mFGKZLa8",
  "key2": "3azs2rkV6LdAme2Jixmh9hZVFJy64L3CE5BZ4KRsEFku2c61mi1X32RuapcE6STatiAjJMuechs6UWgUvvbn7EDf",
  "key3": "3ZwQWrGXnDWExqpuKHdqSPKHMBaGdGYTBNQnDHpmJTsnqppDvdQ6bZ6JWCLpKbVQHvtNXvEE6UY4jPPztkL3x8Wt",
  "key4": "2aTcAS5uJvJauoW61zE2jtdRRvhsoxFvBhWBpeiSwQzT5CKtKCNQAgfQ87FK8XAYbtDTdvB6TLR68ffEmv7WqRG5",
  "key5": "5v5SqKAMpYejH9XLuF84ysmX5U4sRPc3ADycwYHXJ1idknb9o1VC4xvXitsEfqAgo93rvsLtXqrafVZXaaJkxVaX",
  "key6": "AeKthHznRoAZXiQgrNqqGjXidJtZqwEWySYDnEgbMtLbfCNk8Sp8EYUFWg9XmNZpiGcoUnW8sF8BER2SfymiWwB",
  "key7": "3SwFtuouoCxyKU57MesGYUGRHSMqbryyDXduUccWejwdrRNApcLJnVie2zMsDYyuCY3qkw2cxHiQUzK1wxze3Umc",
  "key8": "3NTjFMLzjo16BEob68Sc5knfsqB6c2HqYKcAjE6zT1aTcukgZ59Phc4qxWpQNFNpgQb3hUef6fWAVZTdBpW8T6Z6",
  "key9": "5JXgtP94SGwEjLEm7V6KWdnTeFGgz8mcXUiaGx5QCMGD6pmM63xYRkEfcroFTfyKPLjsfo7rBPw1JgdNRwdb7HNd",
  "key10": "rx1vfnVAC9TuJ9LqduPcNsoS5FK1UdQdDuMxvw1STPqeNSiF1AuMZVmcY3QBE9fbNYrv3ekzH673xFzaPzZNfQZ",
  "key11": "2WMRTKgEuCujNM9XmCv3cYqe9DnCsJEaEkaq2CqMayZhzxqyfC4CEPNy9NnnkCEHfjAqct7fmqf3fvctduNLNJ2F",
  "key12": "3xpCVAGQhGwc7XbXmp489JQ7bFsMacHTeHw1jgST13mNrMGXfHRG3S7Q1pjyqC9iVZcwTidxGdCz3G7Bnp9nPr3U",
  "key13": "5x5g84GXUttY6Mf6vf1bCJ2mmJLZANSLWWBRQpaqbwXCDe1DXMcRMGf74XyDRMXy51NPrJ8R243kk1EptMQwCC5w",
  "key14": "4hWeiArHBBEDbmaUUnQRvYzbyeWyJxpEP4gVkoVzCAeTK6hHdaJJkqM4sQru2vPs3niaQviphXr6AFbNc1ZmvTu9",
  "key15": "3wVwo6PrcCP3muYfd57K8GJ11iHhnYamTvsmi9gAzWnKkjqxgR5qe4Xo55ByySpHK2WN2x2duCScEzYZUmJ33Lr9",
  "key16": "2uDw9xkYv6MaFDxNSrWXdMGzSbGBVdw8wxt6Nt59FhjcktC1j8d6tEJ4FgTjTzapGkmNUZfhE2QoV5CiGVCPFac",
  "key17": "3mD6ZQHnhdUZvMar4VomJsRSfpxh8b9RKn1n7VabhTm5uyAqBAWKjY5HhPwKmnasT6zpEv4n1nvKVPBu9BWKzNcy",
  "key18": "2fJUiGgaPVLx86PLX9dDBSATnRMPeYk3QGwWB54998xG3aTDC6JAnNxcvnkZRCcGL8RivSqWUrHLo9JgUeBbwyT6",
  "key19": "7GAKJFm446L4PrU46JL1h8M1ZXEefviEJaprDPDomnsJUAmKnacWvP7iTZfxstL1s9kDzYEgPaEqJQRkELYspY4",
  "key20": "2AUmoGmcrTiypsfYYioLrgMc84c1AvHtpT98KJ8FuC9MeZUF2FsDLv4E2vyFG4n8SBCnbjkDcoo61U9Lyh9NULc3",
  "key21": "44bELxfjWLB41DDTkEHabkM5a6ZQQEofwDiFravKuycaA5C2S137fi5zC27xPbXjSBNkJXAiK6KRNzsVR8JCFumv",
  "key22": "2e2jPDjLyiFwh3R4o7p5WSgCVZSZ11m8dQBfZgXYDyXVHmy93u4o47zVd47jJKstxrkhDmDifgf6i7HXobo4qwHc",
  "key23": "2MKQBA8CBFuk96Vi8W2WeQfxcBWpCRKj2VReTqdF2deEpAnCkrY9eWuwBKFAJpaPMuoWhHXM24JUaGiGCvFsknaY",
  "key24": "85cma4CNjXE4KKB5JoEpXe1gizUMgwqUxE3qS5K3CWtCFJhLTGk92mCguD4FZNmmoJ2WxJWgiUN2hu4TJk4TbME",
  "key25": "47YQ3YzA1SUhDZtjcrE8moL2SqXLfBATehuAvqeNZyt1cwB6D4AUgTrwjBAiZopGQkb6pHecqebusBYvDEJytF3e",
  "key26": "WzseHN6zoBiXmFy7ZuYWt4PcXQAPv5AdmAJPknVdkRJnVtNgk5AcGgzQRHNH78HqWgKLy8RMCRvjYBAjT8cQbZb",
  "key27": "3duPnhQwy8HTCetH7AYwZWU1oW4deMz4vNTBcS3y3xrPac1TmDQbH342vr9JTwroPGTQKWM5Hd9P7yvMmuxsLbpM",
  "key28": "5E6WAipEyuxgggouV6A3aJNQ2xV7Gm1evtbGJBZFefJ6QmfzExiNoMKLENrtWhd1e8B6JDvdmrxgUHi7UiEi2Ymh",
  "key29": "4wWL17iJT3AJRCEBvo3kPigwYjXkVRG3Zx21cyiEvHDVB3B2KQquUvMiKMvY3xoCJ7T4uJ7ahYStgXQKVahTwwBy",
  "key30": "5MqxGjpXBNSsU7duDRE7PC8rQejF2b7wcdsuaB2sQTsDNME6AobMC4E41nxogDcNnudJfg6WB53xLxD2CfopkDJV",
  "key31": "5hfdwTVnnGoLp9w4JiRATZdwS48knKucE482Hcf6XsyfU1fcZAZYTZ922xo4aRZFQPmfqrvDmusqZ6KHWSVTHcKu",
  "key32": "2nUabS9fdVQ3UQKwoXuWQ6LXG6Uqtr3tJVzbSxG6t8otfVKC4vzVE5bHJ4QrU3etP8WQAN8GwJi7n2doybxft1Uy",
  "key33": "4fJAQa7RESe9jBtx1PkL6zG2xuqjctmNvqSXWjEDefh5ziZE1VAvQGkHJ2xRGdZ1KVAZzxGXoonwka18V9ATEtds",
  "key34": "XRr93jczcT4SHNNr1jjZfqQ6K8XwzreZYpV3wrsH5viUz7buDJbUhGj317CipszuJWbZeAVkztw965oBzrGmcPG",
  "key35": "2PeAvuPzUbqdMNLUq9YoSaJrUE8pUMwWvczrzrTzZT9BJkkRiQVfbKF3fYFqBnwz7hdynbzJ1rrBCvV1zcWaFEK9",
  "key36": "2JMhjv7LzeomC6Bpm37oaes2d5tCKpRBK64wN6TPpH3wzrsN7x3X21945PAueQZJaM4WMCoQhH37t1soMfgsEt5q",
  "key37": "e938jSkLkucKZ34zAQEb9QmN1rVPVeCn1XVTPvnnBiXsHppPkYRZykQDKCEhXMSb7UfzukLJVJeRkFcWCwr38gh",
  "key38": "4Tg9cXnxiWw8A9Ri2NQEKWmMJstHZetXXraPmDfxdtki19gEPbM5UyjPQ5dMnk5Fgz9SV2xwB8ymbbc9kAnipLLF",
  "key39": "2oqCLaeRwt1VJcmMW9So4XtgpqoF1zTg6BZ3fzeUBMDyXQQUukAZCD34Xms2KadKCsfDcaGP9rPfaX72mbABw1pZ"
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
