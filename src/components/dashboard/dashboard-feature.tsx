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
    "NRRuVNfaxbGpMm39LxSpVsfehXDcjSHEvaXMPAYTHdcK1XTHzZNhekWTCsVGNfCD4EL2hU64VfmkaJcuHiJtdkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Z151h6McMWNKGpra5k5JEKXseFkHkuKhoCqYpyqbZ7FidZXSmLHUs3G5ngzEpcL1CToXQtr7MMwD5iRQm82q15",
  "key1": "4WKrwGZxMGTzjCujQE4ULpVPtyrjAbYUYteL4MgpHmcRGQEaWpq5aN87H4YrpJa8LGDTs2gnXhywYyGCUQkEHS14",
  "key2": "63esmnZ6iZ9YZjiNZ2ZWP56JkxM3Wv6Yj3q6ceSxnJAYbUYwx3ENMvuEdwMQ7z9xb91eSd31AbD3yMQHYR8jFJHq",
  "key3": "4pQpEdFaY1rdAWxEWFys9JzHem32BdsiZjqB8JHc297SwBn68tdVh3wVYXzWTEcKiUZjsUW6zfDWVWEQqK1sxhjq",
  "key4": "4aJFv5baXwzstcGuCHW1SreTSW4Yoz75zeaKqDNT8cKKcb8ZW6tSnSwMqHVcNCPUtSQQwQCsZ7EhcTGWULst6JUj",
  "key5": "38h3HM93Lt3WCPQYvRVHLXsmtNZMnT4pE4Km9ZDEBVapK3f4SdgPyD9A7p8YG7bAEr35z3NafCegJEYFMPW8XYYY",
  "key6": "3DKpxqJaBwyAqK5Pje9AvaQbU53RjyTpMiKrfB4XiVGW7QjqhaThiiAuyogMdmG9vHrntEtA5JivvgQvYAL4bTX8",
  "key7": "UXS4DyjfPPkkfXy5811pk8e2vNsYBPgig62McZZb31gFsiSwk9VtWQMckNL1joDXKPuKuD44ZgFEienM77DiBdm",
  "key8": "32CSEz64jxSDmJ97SaBfMsS1sxwCLzJWFRsB3Zdg3ZwEh7LHqCmvSrahrn4j3cZLuka9ND4yLqKLENVJpFxJWTy6",
  "key9": "nqgu3T8orTrsC3MdffHL2UwdxF9CQx9M3eeEeRZLQYpdnKX3Pg5rqN3cMATCre8fdmFM59x5RHJN4CWhDdThHQb",
  "key10": "3YuKeBKcMwnVBAUzvT1tgWqCrT41WVCFAUi2g84ycRYgGExLoxXPHo3ANrt6mJjN7EGo6hmyjDmVAVx6iT49VXNY",
  "key11": "2A7vBR5GcZjauWyUkMd3ZXoQVZdQHe7TCQihQXcfUYKdFuQe2t7ANfkUGnhhEurHvMimnCWPasefZsTahMijsFme",
  "key12": "57cFs8TCr2JgWpL6cwL5WBFFWMHR4JKm6fPxLiqHEyCvz1wx1BTbJ8C4JbVbDqqzkVVG3XB84LLZ56cvMi8jfQbV",
  "key13": "2Xo5xCD2xFr5ZRYoYEuaN8vq9X7gkw8y1H8CBGpTBXSRZCKkRn3vhtzDQDqkKVV2ghyRkQp5egfeHLx1E8K5riuR",
  "key14": "3sU9zLCK3pTwH5BC9XsQXs5iZ153uXuoPjpTu372sDm53WNkBxiARzipsevbpuQDwGvFLkmSZoGvZYh388ZfXNcb",
  "key15": "5BfFiTbU5KNwDmwKzPFPaiVkGw6LsJMr1ZLNDsBEKUQtRtVgJqHzxq9juKtJWmqBPCZfQzVgC2n8cP3Kv8DQnTn6",
  "key16": "4i1FW9a3kNBeSfRbjB7mzGHxE2wVhuWAnyyf6BE3yYRBkuXRFSDQFKgBY4mrikCyLWUNAJYxg5YJhJjiuKVf62F7",
  "key17": "i6un2heEJSGXmG7sNdXa7MiVWLvVTpGbuGg91du7uY9fm49cKoRF4hv4rNwdZTpTsa9FVqQQ9WeANw4Vvv5h3Zg",
  "key18": "4hekbDcCvUCkuP5Ebi6m9GFVAwHNkVo98m95X2s1A3B8uRu8fiz1Gun6izJBJU5uG6VviEpekMmeixH6YUQG8vrm",
  "key19": "5xJkf1EuDbosPKdGr3jNCcEJq489kdGdq5TwQpjwYPNiRE1yLfxiBcvo3iJefknZtSiRmfZdPio8Moozt2McpCp3",
  "key20": "2ADkqRAMBoZX5ATPYuJqKyHZydKbVaXmqTn7VsFF6BJLhgBZDMBE9GVzq8chhb69yiLd94Z7ghxa7eH75bwiUVq2",
  "key21": "5QzNiLNw59iuwYYZLUw8ohgk63tD4k1ZjbR8Ydus9hCDnXKUjvoendt68NmxhEGLxHdEHZbdUoSoDbPii7EHPYkn",
  "key22": "3AocnzCiYQ3otbGmc75tkxLFM8iZkx2NPA5Qx9BTch7dmgFdQBNAmAQRyanCUueuWURNgVqQLAkeY7BDYiAbi7YF",
  "key23": "U1EEbwx45gHdWW8k7Qt1JEfrEFXaYChqTVaLHMhCs6FXTtPzVYmasGGRx92gi7wxNErrwoWKaKSmezorNy1bUoD",
  "key24": "tuRuRs7ne6hP6LDSLALysQozGanUxK91xZe52AX3Jgd6BasHjgBGB4ySX7x8RG44Fp6Kb8qqV7YFWz6DzmwGZQ9",
  "key25": "4xP4xZ7xKmC8L2NZ2pdqx4mpAj1gaqn4uAYh6RXWutUgxSW3YwzNoFc8BdB6NJTQqY2LnEM7JyBQPDm4GhuE1Xr1",
  "key26": "5sAXyBTh1vF8jFZYdrrXSPLxiD1Zd4NHjn1mUEr9H7E4b7wHuBjqV6qiavx52dnkHzqoHAvAkCdrY6qV6E6YKaEP",
  "key27": "235emyg97nWx6fxSgtgb26sZ7MJWFTdZuJtL7AN3vQbyivQFtyhJrtjeyecb8aAFosSMfhiY17VpxkbjDUGrLDEr",
  "key28": "7by2nMr5q29AcbNMC76J6X2W7enjhjH9sFrz1zjbKGYZR3PpneFgSwaF9AkBgaC3Nhgp6Nd822QXcAiyYuprwUz",
  "key29": "4mV73VXz3zhdh27eG33YL9HssmvjxLGBrZubayLYtWLXKfFkKhgg338PRNkYck6iQjrHNLKf8uJvsLJNNgsYiomt",
  "key30": "47cVLMRiNHFaY4DF9kynbtjYYknwaF3KxQX67zk5tYrFStkdqvukcTsA2h3q7mjBqdd66sfdfzsKGQYQ33UMoa9",
  "key31": "5DhWdUP6v5VAE2bmAShS8pyMZt2c8bSrH4TFffA6wYDtvXEMm5cUdGLvHPtqXXGKF5sy1V1rapDNToQK9uiabpbG",
  "key32": "3u8v32HvZ6RtkiAN1z6ZJUDxjHRqPif8NgqTqtGd3ah5BzU5XVmSLBC79WBzqPkVd35JzEDruispaR8QE9FsHmqR",
  "key33": "3NfSf3NF8Kb1EbUWNaFMCScSzAoe4Utf5djJncrqecJwiSKH5C5oMBZmAiT8jsFY7zGXhHdA47qPZeTeRHA5Fidi",
  "key34": "3eDAKQxMfJvMdtbHcK8wAZEwk1zSGxuXBxCmUhnX4FmqvzeTYmp3BFF51h2xFinXTckY4g5DqmLfakqDjZmzn63e",
  "key35": "5qjXusotuc6iYGVv8pHVhfKTNrcsuSNotR7tH4ofkceJi3qpNCVGKaSMWxkgy1yvW2Y4mvQ4NSjCthFefnEm8HHP",
  "key36": "exsTa6pGu1hs1FeB9r5gjenw3YYGJD9vhdjPDpDK5BvRUmvJQGdvvqGQLheSffKKKAFCzJeEwPvz4M219SZcVtE",
  "key37": "5warBwkgF7iX419GMjf61DMZAvmo3cXEpWrsJMKmcxbzs2R3bPt7i44WjoPYHoPifqo7F8Y5e34seQipzJDZPtVQ",
  "key38": "46GYJmAJQZmWLQUpwWwc8dktFXupY2gyPxNMfUmBuptavEaikhv9LdGS6gm3uJUFhrwA8pEGcSgfXKDKCmawU1rq",
  "key39": "3w1XJfrGha9kgUwoSDUyWWnNRhSD3NRXAq6LfHigpEZsj16vBBsrarTWC1ZSXu49soWQMon1FGgaGh72e7WVvWty",
  "key40": "5D3FwxLLsWsKbo6WRGcDcXDAFmMoZk65QsN4YnNEA7oW2scFU82qb18hi24sFov4gmKA79QFw6fpdvNAR8wHZg5N",
  "key41": "3AD8mXbbDQCPeSgm5NPT1f13eq9hePfYNrE69ntD6vpihQWVW7SCKgBFh7kEVSBki9dZhtoJzLWtmdxdP79EinHh",
  "key42": "gw95xQMgkjDYGxDJbLtobFFSVoChm1yQNwWPRaXyoJgCcXKfAj9XvUeFWWgKJ4SkoZYfz1NG2MCWqR9yBouXAnF",
  "key43": "2pAnNKiGxaVknGFk6mmpkD3hhBpL8jVkbXZ9sRJaRC9QSQp4FB1QRCdwDSggDqKBib7MSGdezJgCy8zB86CYvfvj",
  "key44": "4JG7Un7habhqo8A6CagPQ9sHknHnRDUUgXqEzMbtRoCcUowZGMEmqaeMadP415K28BTTEnWBf5hobayYuBuoZ41A",
  "key45": "42QQhosvHuTBpUEmeAXjVR7G2pEDYWtsKvYSQkeDdfjWmqemFm6qN5cZ74U7AavRPBVCwqS3fHge6kpmGyQ6T5Z2",
  "key46": "3M5B68QF3srxkoUbWVCM6p61QrmMoDpRsbRV2r84QurdGceVWqnK7ubGr33wUPjnEX1ikf3xaynbh3ANduqMmBeJ",
  "key47": "2wiAZtHQDPm3ePGFxV3rHcRw7H9mtKGfEya7rAi19SmoXdbUpxDM15xWX7ZwYEsz3qbneYVY74T89nQGYxh8bSwo",
  "key48": "4v6bW6bmZrPYjxGDKWXAainD579JeNtvisdgtohwxy8ZP8btSUvMjfkAbSRxq3urac6iDV3n2e9kfisjejbhoRZH"
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
