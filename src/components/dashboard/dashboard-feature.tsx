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
    "2vd2i65Vv2psazFQKNkr8W8mwJDTBMtg2BAazp94KCfnSdkeEXMTcATP1odShubRahuhJzM9BPjRVVTCzNneErTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ubpLzSW61zq4hZ8naVZ7NaYTYpnqiLRA9xDqazJ7zziHcsyWTRQLx6fbQYYuvZnNT88rrp1pSKMzQ7tX36DJxoS",
  "key1": "3eKerkB356Znkazi5WQRT8NUCNjpZpwBcy5VDFMB6JrTRYG46DGpgRaxU4jfRTfTeMNkSEq65TSWKM3kHLcw46qe",
  "key2": "4DqWUEtkxvSgmegXpGgkpiUriW9vmL98u7XA4eCYH9XyRkek4dbnQo6eoKgFGb1V45Zmue9MXkvXNdnQ4z9rh9Uj",
  "key3": "YwcpZyt4NsrqJbPbhEPufsxRKGqHU4cc27weHvufzS4wDuH38gwUD6wrDAbkeP3K3WHa86ZbPKwC8Q5BPhnxbZq",
  "key4": "3o76b5bjWGtWsSxLKs5zdGDDimxq9QRiXkqXwHB67HHSgpJepF6gP1wphegcNyAEq3EDAKQdSozmSnX9XpyfZR3R",
  "key5": "5miB3oWnhQBMSbwMUDL3XmPvzL4tJVZjeG2oA7RWPi8yyAASNfv4MwNBG3rQWT4bZLG9vax4g3X9UFDmhBirHaHc",
  "key6": "2BzLAkJKDPfbM6YMdFeN8nd7S6U8F5AoYUck5UNBTitaDPX2fQnJiJgycB3ZXoFyw27KXdM4xnC9gQWjF9j4UCvz",
  "key7": "5TFzjtjarhQYcLgCS4tFWPk6xDvq6CyEbfEPmwLmZD8UWRqVAXbVBC5N71D1rUjHmCV8Zvy3gecfvxisqQJJuCEv",
  "key8": "243fVFEHjbd2jojfAGRjQBS4TgR9WbARQwZxT1z6peAsygjcFvKBndDwB6sga15m3CEd1vq1sLa1XmE5m3BtgM4v",
  "key9": "2Qtf1dVYEuQWvgYKf1F6ctA3wBosd3JRxQtjKCs9j5NF1E6NwqKPskDL2cgMQj3J7xc5JXGp3cW9FEhG9B9MgwEQ",
  "key10": "5w638rosGmygFzmdWBTJavVXeG8LuwkVXXb5BLTC6UCMi7PsZzBeB4giGVV9zfmcahtpTnX8T2Sgz65ST4KvT3M7",
  "key11": "FUck7h4yUjxkMLbcvSJ2EeXDqLiECqxfmDz8rvYkSVmV9ji5GQik2szVD4R4ryEBJvxhHMa3xs9i3Vr86YGkSoN",
  "key12": "53MFJFr2nmqcetTtS5KThRUEVF1dLUcfC8Do57BxNuaacX3upnMyUUjbM5q2x2aj8D8T6wQc54JHRQu2AQhiG6tS",
  "key13": "YYffqccUHosvBzYzLRxQjKArpeNx8L4wcLPNErEJGVKN8R9pM2EAifz2tL5tBQLi3aU74oLvYCwLaLrPYdsLQVZ",
  "key14": "4kYpWVvv2MxEdA9z6EJPypYuWDCnsAgsYhVk9auEg6Zn5actYzsTCXQLYB6WP6hzFoExcZKYpxJABVNZPPkWWXWA",
  "key15": "3dL7X334VwQh9AR9qtmyhD2vaTWXqR1JDvMg2SRe8PRArb6xT51s6YZ7HZBoejgiwR4H4j7Wm6WZyEKqHFBwbQ5P",
  "key16": "56hm3as19h84huVrhSf1nvBvLmwD5nYrHZXoCcHE1YH3Xg5tyZqiEcv6Bdp3KYFqiTb8VDbaQ1Y3q6DduKWUMgcy",
  "key17": "3yWL5LVZc8ZsaKCLXfZCyVurdtWNuQijUjejQTHtpZx64zXsZ1BYSS9A4PYr1Hi1zTypr94XGwM3GkUCVMErbgbG",
  "key18": "4pLgzCrAuEfotmJziD9zu7NZMV6MtdPGXzyCMvsdWGkYRNZL7McPm3objvvA6ZFDVeM6u2AYB619SvF2e1ttfXdQ",
  "key19": "5ekwYAJsLk1vVxk3A82rELCoMW1cKn6GkU6yCMjG7ZNEr3pGZtmXrdVGQP2N5mWDBYvwadZJTAfeK8Bcp2k6wgMj",
  "key20": "2NhcEfY968Bc6288LkFnK3wXDDdiE84yTbdLBzWG1MxaZccmMrGC9qiqwCaxxEodiz8q9Za5ByNZAXTQ4YgdgDaZ",
  "key21": "4cyDTBYPv1QvibYSXWxXrL8NPwjdenzqaim7vtTjsz1zEpAkxpifeWtZ9G1bgPQk9JVobkR3UnWEpRTEMupNkYvC",
  "key22": "N515eZ3YoJjKx7V9tPLS4732zEnKoquhxyni3wFYWaat7JSrahbig18d3dz5DBanVKRjPSkxMZF7sVFYtftsvTw",
  "key23": "EcpJ22DTck3xJJzGidJGgzA8eRFq87ZeR88TxLNhJ4H5FLu7vp8dQp6bBrLiCiVYCCi4RomigcHCoydLTH5ABTq",
  "key24": "5UDtM76rCvYJ2k63pdq3zkPFjKpJa93xCY52F5svo3fUYh12hmSxsWvzL1chWq3eMjVRn7U7Voq7K3rbSdPqDdwy",
  "key25": "4tPNkrJyWM6BftzgJsKwkezeesLBmc2BHa6NUXBcYGXaPho96QCwqrsrfbsb28xZPLap9EaMqjxSooPWPMzoFYRo",
  "key26": "4eLWnSXpEahpBWT2vTmkT4zzQvSSuFRb5QkDzAWPu6tmMbaxVxumfeb6bKzW9VtNgHaWSot7Kbxv2UF2KqvGz8Gp",
  "key27": "28oNzuiQjPDq62MAG8zd8PzbmpV5bM1Zm6ByVWNv1kixdZECLAe1CN7MduCfHMAJWa797B1JZ7Qyqykg8GWRZazr",
  "key28": "5zFYd6Q3iK7gA5CBtTD3dAtfSF8Ns3BNuzJe3pt1SkXpqzT8YaCLkfh52RJU6XqebDZP9D8BrBLcDv5AH1Uo8KXs",
  "key29": "Q1m6EKkPsoK8y2QGgMPJsiB8qLrsJi6U5SiT1FrnXmAGBPQn3irDY6oi9SEMLHwcQcUKrcj7K6yLYEassreZfYS",
  "key30": "3pNfzs9kNxxBUuRoy77xuaXygDVufggfaztS2ht9tEmeNsTwpfrxajJL1pDupRVqDHtvL5MDJm8VHg4PdeGnDdb7",
  "key31": "2hdYpyc1jRyqX7t2nCJcixiYmztgS2YL6L3bMB3tNun3haskHTbMWi62nSwFPDAe4V7QhhZwukv5g7CexpsEFdGs",
  "key32": "5m5sEykRjCgu5Yrpi6yKSEoBFQuxZYaro7FkuvQEVMfnDcGi8XtnkTf9yBErjy9SucVbGVN79RFo9EMeQV5AmvaU",
  "key33": "57U5PpGqr1Ewo7MdCuRmR3Xq7qbKcenvq3pdQxU2HVaH6HEHeUS1QBUPF9HayXWXwq9bafVdKmrJgX42XzxooENf",
  "key34": "Cb3ByKSpHHziDqEDPvNq8hE6e3cHGcKeo7TND3S9wzWhMhkVy6R2qCEhdUDZ3JrsJZShJQEr2sEizKaGZzf6Etg",
  "key35": "3wuoZm37QAB8d5FfB7ETwxYGr4SQGYgV64wEqdu2zuhS4zhkNq4hD4mRXjX6QEM5drYc4GyWgTn4JaCirqsC3bzq",
  "key36": "4yANAqDZbYFNr3C82VRXhKkqo7yAcbv2y4jPEPMncrjXQahgarxbn9CGzHQUGb3Gehtje59tRu8ZapfS1cBpPhqy",
  "key37": "5YLkBSZLRC3DbZmCjTWG1pi5KzGCWRunDmRoxaeYam3z7MhUWo97xZpCAmmfdAyQF2Da99jdVEzfahss3fNpYm56",
  "key38": "4HFLXdvQn9oxczWLWpfvUrwLKn364dZzFFAfRuX1V1WdEfN5xGMu4HDPtk48TLNF9JxrvGq6jYQzcHMAJqMGPYKD",
  "key39": "5LBRmuNij9yogj9VWsey45qbWe2CER7TKtugG3AUVpxrxFaMNhDWrG5yzyfuPKrvYWF27LEbNqc38ZS4hD2fRYiE",
  "key40": "4MvCgusXNhhZSpjFhb7W7DcAJbMRoT7L4iHiFrXyVBN9bT1R9MdvtbcxcsGFN2CHdfiMHiGhPNhvh1b85b1vkFsD",
  "key41": "4yf8oSktxDoQsAvQMG6nqdgP3YywWZQHXBwax2m1csKxNPoiQfvqfFWtnLytqBU7tnkQo96dcbLqcKbXAEd8w4zb",
  "key42": "5ieTozdvRhbz6fVUnU1y1f2yzPHuyxUS5AwoUVoRAYhPekwJSW3LDNuZcUEninutB5DDZX9NJ2YCK9haSDoxRwVr",
  "key43": "4dcb4Q9YGr5953qDjFqcuJwp3UxdxF9C5NrzwSWgs8ZiKiZm1LYsck1JFaPbPc7jz5uGEzYULDLH7HF9EW1MFhtQ"
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
