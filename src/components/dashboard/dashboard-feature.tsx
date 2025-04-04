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
    "4YpxoySoovCn31ARCUz7ZKeiEsmojLNB98qn5FbYvrvudmWFZRtFZco367Fye41Gwx1uQzQyAjobx3RkkiQuPTsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVjM8z9u3JVJzg8YxEHs1yt7jjRyYTZFcg4mx1saNDWgyAjviFvQerRWLxe9qbEU7X3cb3zzPyEFw2QETWDBqGw",
  "key1": "4M4To3zuhWQBf6RbEWCm4YV6Qp8Zft59ahRxf6MW3fj3TiznARbZ3J1yajLbjaDsfoLEJjygeCv3ijRcq6osCmQc",
  "key2": "2ietbF9a9RMdDA2kzGMwfQ7w9R7Mh4KYhCGnWQqbx2FDN8Pc8VdbYLS8TtVe3qbzMueMbYsQKwAQSNj8q5zSWgtZ",
  "key3": "4HxY5BKNTSxcRRqWjcmHnqJsFNpN7wqiiRSnZ3jBEFvyFpcgBpPDs43nSqbPHttpu33PZoNrdTMZBeUWwvkuJXrH",
  "key4": "3UUJzq6ZSj3j55ggTeE19wkhkBPhofW74XCpQqRxY8xsGUfQ5A9Y16bTv4qYBqMzKrspPtYEQuyPdEs6qP5GxpTB",
  "key5": "2FU8QC4bZ6qsD8QkRUz18eDTUkYjkXgQZFgohsNxeWMy341kh5hADoKbfJUXDKpxPyahjXobEjmxrS8RGZdUG9S9",
  "key6": "2tNzTBg8XN4DBqPx9xZ5Jh9ekCL7g3NhheJPGTmnczydHWQDua8KxctzFrrvGD7zhrKj23qGe9aNpWt1ZKGFfUUk",
  "key7": "5FYQbnRmFH6ZmJwbxFy4e8aQChownyqUZ6zUrS1ipFWzhMX2M63RyNXBdpkjiLW1yLLsFrE3qTo6ExzS87NuSu1f",
  "key8": "2gvTbgNsaTDjPQKwe7Mh8oVx94Br5CuoJ6o8JnJNB6Yq96rKwNEEzBn3PgcB2f5m2f3a6WNPTEogjF5dqmJtwtHY",
  "key9": "2qFTxaZDpFrXutfb5WCQuG7w4bDSt6nxvZSwBqQTYa2L9py1CT7wGgNVS3WkeHGRVfgoz6jB8x7JZCgExYWZTCoQ",
  "key10": "4JHYz5HQyfT3L7fz28UUK7KAvBrKYB3Y7YRtjCfjVNvBLpoSg6h7xioLKcJtfx2pJ3UPsWxLHgdnPKqZiYhHwcMb",
  "key11": "5PAj4P9W9TGbg42xcN8Suj3ADHopGfThxw5kDn2yCYYswMWQcvx5JsQsgGFEzYHzzHGeg6N6Gswbwv7r5pLqkue3",
  "key12": "h2bQFf5GrENmH4rj3cqSXsVPgLsnsHVmKBxRxLw5SciQj6qWKR7nqsJKFtVhAASG54sgem6RyQJnq99tgnMyY4K",
  "key13": "3snLZA3vVSXUeNdUxL8T5AUsHPSpunBWJa1NzX8Dgosu4yxSdgDF1Me1gV7xJiUr7S8Uf2DZ2XqgF3UGXCcWY5SM",
  "key14": "3ABDq3meqdE2zpKdsj78puCQRYs9zJmbyQekr6jhEyC2XkRLzNNNYTWpGJs4KDhnDMeaQQbEyMJfvhWv8Wu9FQr3",
  "key15": "4YRWH12aComB8sRRmeU6biDxTDZUEzeZ8ZFMEeX4fJxECSNWeLchG9LmKqP48dpRotEGz4KZPwKw2dotnbNDkvho",
  "key16": "4k7YpHUU7ngcegQ9pBreDLnzzBP8nDZ3fA8HqkLCrFGKTmayaAHc3fCZEt4utJyNjunpg4pEvyF5Kjf27UkZTN8W",
  "key17": "3drkrDWfAePrMLwUamkYW1wNgermTHWZkVpG9uqMV59Kx78N3TkBACRmXhRdLE3Z7tn6EffHi55zXmZRfgqsYufa",
  "key18": "4PcpDrpSoY5oGA8149USGdFbrBbc5xF5Ad2KPxEZ7kuZvfbeq8j4hRthLnV7q3fETghzNZeZnAUzGhVvX6yUGFAi",
  "key19": "3fibG6Z59RGWuDpZQP9TWag2i1icGy6QpmWvs74S4XQmPKbEpjgpBmxEmh6YH7SoE13jDVTG91sttYE4YDmJqHkG",
  "key20": "2JZ1RDfT32ZskaYMCWC7MG2AndT7YK8n4r6NCU3mbqgHipfgopCqFv1cp1Ch1W9sbu3uuZXP7zskemU7gEaVgRbS",
  "key21": "34eu3iwtU1NChZX8PKZQB4Es1QLTKPBpBMGMSmaBj6ceTx8qNo8dN3msSrk4j2Qy4nYVTmerGi1YzPd95rfsmWBa",
  "key22": "pgSHb8nhSWV5TVZrjTNoBRDNpKjJXKww9unEnFzNNxi92b1nd9q23vU3wJFqHtUXQWB4uR7xwKBFvPRVxASkX2x",
  "key23": "4qqCBtqq4i9Mcyha7Cj9Wuh7btjufgSJu6NJJcwd8fog5VSoLtVazdDhRjPaFrkb4oSGxPKMXq3ZJVz3GgcFRq86",
  "key24": "3eL4VPhkUu6PxWbg6puRDwVXNRKUwyuyxnYVbYLhvsGw4GQCTH2YngPi7VQ2cpuJfeoh8G6yCYwCbp1EWqhJJqWf",
  "key25": "5qMc4eBjkn49Ef1stdqBLmMsXZKD3jSe8RcgpoEZx1vvSgwwUBbZtg43PAKaDeimRpxe1og55fKExswyPFjzs96c",
  "key26": "4Wbg89cp4qNUqCjigEqrfj8eLc4Q78nGoyA9pA9F7aLBFXM2zsjZTXK6fAGMkzFyUH1evRvR9FXxoGZf4QjV16ig",
  "key27": "3qFpRB5GXfk5cGcdCB284X4S85HgSaEwJZ2e576qBkxzQxbvRdWKPJabGvz1xTiW161oounpbHrrwxPFvLrRZCdR",
  "key28": "3TQViD8etxkjUdcNcFzHRsrSspshUEUFvZJFAjKArT4BqrBUJhPMpwPhtMjZHij3q8HHt6fiqUWMaAdy8L8Cd5WX",
  "key29": "2oj2ZR7gbWMSUZyomUq3QpQkFWKaJ3f1KYSE6CbtRya93UoDS3oKzt7Tmfy1uBErQq4EKwk3G1X8cpiwhVd9GyEG",
  "key30": "3qvEgSnTWNVUP8h4i5Tencydzg3EndrM1kfa5wy7xkLedyJ129LgSWmqMXtM77wqxohkfRJFfNrPFRFtsokfLaRW",
  "key31": "62eBnkjtCTGodyZTQmE2FHQt7Fvmf8NYXXHjPbMAxsuzqEmMtp72FX9EkqgEdcK63cvar2egyigyuU8XXfQtq39Q",
  "key32": "4ZM7Skj1fK1JPU32t49exxS9P6qZpudkXsDP5spH2FgzBRPvcvPBykktZrjHvjNxaR48NjbRYUVrFGXNCqeArbTr",
  "key33": "3h539NHuCtqj2WxRZqfoPPssvr3fJVT51yMh12987YUbwKDyjkcwnsdxLmdzaRMLKkL469gvdzzf6WsX2NgfsRsT",
  "key34": "stAitjXL1rV3JBbxgZGBEcTiF8rB5iRzHwqCDR8jKmtSdEEsMqvvQbtRZYZQshzDWinu5mATRRfx7ybyRpqUGPA",
  "key35": "3qkq3SpYBVdCed8S1kXMHWccaJQbvAZBx319ZmjKeNQ1qrmRAirJ5zCmTA4jqhx5MZuMJhTZ689DF3FmqSvXeFrE",
  "key36": "3V91n6Xzi1aHdFLkPk1x5Dhn8JoYmMbUpAvvNdHXYcwYjuPnduSCorgU5SBCeywaBh7EeDFTUEV1V1H4zzZwDnM5",
  "key37": "5N782GmuHUnAS6V64ojvX2EeZpDNPdzSBHnigaWbY4sZAz2guZ9sdS2kW1senLi4FxiMHoAdJwrjEsdPDZFQkpGA",
  "key38": "2RzfhyEjgcePHW4dhGErwgTNxdd7Vq5BgxX9vjRWHKNMoaXhPU6rQFrMBpMDqMnQEswPDmFfJVBh58nvZ6tzJeNZ",
  "key39": "42UyWdqhT3mfz412yG1wEroFunx7RZENAJ2KdN5SUR1By94uzFCS442ZRsktBPRoHkcjh4X7165jme1ukAgcRdDz",
  "key40": "2QXixEbHMzE39ib8kKoYtwMqDUgqTA6ZTL6xZ6ED4epuX3W2hhw3mVK69cvsGAh8wvkgniuCDkQdX8ReiQFvq7Jy",
  "key41": "257cpZXX8WXM6U7Q4k978k7AQ1qvNFzNhpvTXqVeRKQCgftUtnXaAMqS3pPAYHQqLvsrPSHeGLFoq8A7q3XyAQo4",
  "key42": "5iG2zJ65QVjUFC5b9bAjLrG6ChxbFhsLwrNaW7whoiG7crR8FKP79maMamZDXrDzcWW32BFftAjtxHkw72nhdMig"
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
