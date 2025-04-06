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
    "3BGc3Ws39SgyUyuD76shouhKQ7cJsrdTmiq7brK1eX3NvSa9ZzzRLETuuq3ZPs9zxVDW1HZ5mHLqTZa1iQDfPzRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ua9bwfv2XWwTudJ8PHHZaHuBRqCKUwZgWFkozgPf9ot49xPwBFxDji6wpj72MHMSDcMmX7kxjEzakkt6mgtjwBy",
  "key1": "mfy121Gip7eGs1sQtfPaekeJb8HyqLiiozrGj4sVZuBZLdrmUJLourT3HJTgeUQcw7KQt4pzFXneSiRN2P3JD8Z",
  "key2": "27RoaGYMFqqrA8g3ikWGpm3g2r5aSCMFuuHYBb7oRk89GwNYR28iNsMiKHvNGLCQs4bMaPrQVHi6ETqN3WN3jFcC",
  "key3": "51LkdcbazHhFitJKE1X26cnsfBEzYsQSTWL7kL4QBvfEhqEDTDCx8NEjn3kG6RDbM7Vhg8k2b6FPbomyLeJDntu6",
  "key4": "3EBg2DqnvbQT45KunATfJR36qD2YwZ5LH7i2hTXU7opBVKBtMYU1rB8ag7bPdPnhmWwfF5xfQ1TJ6uRtvXfehvQy",
  "key5": "2w3LdbVGSkaUSZb232kh4TxdojvdzdQrzP3opVaxZEAUMUhp2v7zDKdeQiNuFhbNwNXLtRRfvFvtu5Gg3rADNo7k",
  "key6": "4bCRpZzn9reSMyGZcQLzvtCmu3ZWdLUktRkLx2YAQPn94YApM7yNgALxFE4tgUhM4JTZKGJbcbUpKvvWfbj56qTy",
  "key7": "4fFrPzxj4eK2DqwdUCDMx4KJCFWmXz5u8Q6uSFoc1XG6ZpKdSVWzdnPhWVaKd2WT98m1kRhfrYmbm7MD9we7aLhU",
  "key8": "4A7nLaQVuur93a2zyUVX9kz7Nme9LZzJ6S8NF4HLTyEoj3Ciq16vHdK99SzMeik7uno1phT8ZUdN8PtkBHdTFTNy",
  "key9": "3hud9URgzK5R61WxoVGrFpkbui5z9uYX7tF4o5NQF9ey1Mg7RDKgyLSrXUWBNUn9SA43qoGEJdjepjk3281EFhab",
  "key10": "3zCZAyskGypYWxS9jju9srgirkwgk9FviD12c5BdMNGUESZQi5osppNPAwcRqGq7raugeG4txNLjQSTgEQQrr8pn",
  "key11": "nHFWpoqzh6sv4xYZ5UZkBEVQbwTAoqHDfu5wJwHPqckgtnXL4bmJhQphWTySqXws2xEuv3ihsikQJiQPocjzHsL",
  "key12": "5CCqAQJcpsg3rGDeM9KTXQtkzRAVGGx7CmN4SZAKt3FxK6jeu4wY7h9uiLuDvTtTfa37J6uyMfXJ9Sw8jiixENZx",
  "key13": "5Y213bpumrJU5zMMCaUFuqJcWQoz1PCDme6fNpgRm9AVSrUqyd3i5oH9cNxFtyL3gAfNFbumCAMMNdS4kL6TVRRq",
  "key14": "3SSNuGjwQANf8Q7sGmFjqeB6gtLjELPuT9PEnA4rfHL2TmNqrsii1TpyL9KFDzjQP4GzHYnokHxbAVgYk2SqnTmo",
  "key15": "2DCFuh2iN4RVhJ2yd71As4oK7dow3QyvwJEuWszTNnbJe3DbjGJ5y4fQ1p8gExwQ8u2gdcKxJSAe4d2nPJD61REP",
  "key16": "5vR8uFgpnx196SLjucJFsXdSiauSJKMJ2Yej1QhejxNLEqVrkQir6T4xJJW3AYosFfRMz396aVj4xkUvRjpaKyxy",
  "key17": "3pJrAQy7BC33Y2tfuKfeGoqRHMEpG73K4Bf4zuKgLGLNBjTZaucDu6uFX43GciRv7p8kjncbNDDyV5Ng4y1tmcDa",
  "key18": "Fh5CTnPULyQrP9x5GE4jvGq4bY9KbVu5gnRiL3EHbXp1nr4ydUxgcEfeM5YADugF5nqVQd9iFASsCLRHUrnkWNz",
  "key19": "p4877GeZBB3R7h7nuL9mXZ3dPnURouMB2tNLSRjA2hbheSb12imeTBZ3fxYne7W3fiKVEo6vxFUJDCmfCjGabgQ",
  "key20": "4N1kn32tLu84fm4wD3JgtyNvEQsANWvU8tKD5frxPkLaoDm8dWHdc6vLV3uNFZQioKkdDum2v2nbhEur8GmJiMcm",
  "key21": "3KB2T7rwEDLxaXE2vL25SxrkdgBtvtLHGjevXKqSXqnmJEm7u1Zm9bEbXNM1gVgSqHWvM7cQRTmjg9piwbJjxnkm",
  "key22": "YoTzHXx3cgnMUM5SkG8fqWBQTSEd539ZazjfFzn8qyrQsrKujhVyNGttJYw1sLPsnJphDa9rHtxaHazmEa5hrji",
  "key23": "27xCv51TkA78SeMqRs73Xz1NUC5BTfcRxFK8oM5Rhp6JMq6rpYJyRiCHZ2grH1BBxMTnLxEi6sjwS4PBgM4F4ngT",
  "key24": "2wJbkD8NpLoYLcWc4LAzmSSi7dm37TKrbAMiX4YoC4pLqLbikdBsBLB3pSPkEaGQ8g7QrVrJdqBVToXwFisvNgU2",
  "key25": "7xgTcARupQrrS5AEgTekafeCUzPwTKusnNpdPign6yuWX8cFFkwiuGLrWK7S4MCN69FV5S9FBri6rckcsLc6vBm",
  "key26": "ugbw7iJkr75aQnQU1DWXwGwds76uPMT7HYU9sii2WX8MJB1FgpvkFVqYbzNPMuhy5EZe7yPgK6eM2gyhxWqQwr9",
  "key27": "Z8NUmBAYoBzdzHkJgjPBMbDGDkzmCYVF1E6niHuyxUouFAJ3VmxBdqeLc1cbbdyUqNKexzgbGy6kJMkZZVd94XF",
  "key28": "6ccKcssBs4hdNYnXtiuG5KVUD6UmAbR38bTfxiX99zZdRWYMKxiXUuGraEqZNdYFX71qWBXsNagasxyysnVd9gv",
  "key29": "55ZVXTUrMGvGMwHzN9EactuRw4qUxUYcZsnRQuEcNu4ASrnjKrdJMzr98e7LhZZKehDM1GutJSCLWfsEgyKRrAwq",
  "key30": "3NjCzHfisvSjGu49tpHiWUKm4RpU8JWKNWcUPtyAAwf7gLEXuj4d3AUs5jkUrpwxhXsYPDL6pupyuP74cH8xCNKS",
  "key31": "U8MHQv1zzULaVo3PBpsi2TNEzN4AfppwwNmHNi8wtMz5X1FC8qHTGszTGV9DitfSiwoK5si7QqiKofXrCsK4gFM",
  "key32": "3oGgSgBiwFw8dtX1LjT97A1s4AwsQVgrrCt2mYa1jr1XkUEVWKhFDgVyk1NiuEDeSB9H3NfHv4WiSzs3r9gcEsXK",
  "key33": "2xGjYQRJxC8ViXsRmxbVKVLvq4vpWopvd2xKScfYwfoPACSjX9FNwYNLfYEcfTmPBBijetDpac22BErqvedqtjVN",
  "key34": "5Bx9tfXQeyeqUPVFUZfPAxnphgKpDtZ5GPDVgFjX3T9S5ssKr2GVPV9eC2Sy1nfgQvvnKUCmuLQA3dymQpA5zzUS",
  "key35": "5ABvpx3VQ4UDPnNJjHN82YPfAcmq94Z9BXrXSo9SVCuyFgzmXcRDrxwadscDsjws9fXHRA8x1LDzq6TgDDtEWiFf",
  "key36": "4Cjqt7HVQGdA465NP9ceZKvAxxFM4Pp5nZJv3e6otZDg3HkHbST5gWv1xuxYbX2LomjG7Anznk2fSjtXTWtwrfTq",
  "key37": "ZyK7m1KE9ZJJRDRTYESCSHrwVby1BujNXrZxy88B2nPypnd1oUYkn3aEN3bDM3o86c8Y4Shd5JSsC1s8b834rvN",
  "key38": "3saSzdZzLTCDA2uMpLc7WfwJ8JieChk9U4yfYPcpxXfAkNaBFbXonneh1DTKrLqf2FAtwPEQQHoZMY7LkK2VAAkE",
  "key39": "2Xb3L5CqZr89cR9L8ZFg6XxGkWVd4cMfVonozVuch8F5SoNKsXKva72CwSLTZYfd1iMVNuQYYpFUztW1S7ssm9VT",
  "key40": "4Rs1iHnFnKTgdwU4QAUEiPSUu7otKLfK238kdNu5CYWHzCEJN63gmvBu9g7SsN9WaCfuKR2WftKEPv9CCUBsp65t",
  "key41": "2MhAcSAfrgzvBEPQaskiUHjwujbcL9sfmfGZ6XWpPFXW9UFEQAyUfarqsAgNsFCv9MemykZoR1C9obpbBr5BEbAV",
  "key42": "4AAXxZYRCgKcPcUc8WiCqAZjuHXuK5xrzNcUm35qBE6bZtn4kwQNH9tisLKRVfiYV7rz1e5aUuXAa4ns3JbMEKez",
  "key43": "4r3NciamzKLETg7vzr2wrxhYEtD34CQ1qxZogXuyazmrhpmg3sbLpm8NZqr11FwjsMAfQBMXVc4FVJVBuxeLnhAR",
  "key44": "2kQfYmffCES1WnRQ36FAVGtkECWfbB18ei9TJMZZWooJWGDBGvnwkYWaTJE4a13rbjgnsywGmAyokWhMd9PK6HqF",
  "key45": "5aqjAMm44uGsSy9CjMYtnaqzcVP3nXLQN6G4VzHW9JeQFd4HazDvG939zNiDKAMX7b2QeuK9gxSifabGsm1jPBWG"
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
