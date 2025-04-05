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
    "3RRjFks2LcS3Lgw6QJ5wm7FSQyyN9PB6PsUMjKnTo1WNLevsYGxFCWN4tsmRgMJrGBsX4qshvWMXhdSF2RBpxBFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zGhEWoRkR7Ha1JXCWp8cvefUyqSxkfdjd19L3zMfRFkJuLRPpmgLFgCVti19BCXMtcMskntTjA9gaKiRkvQDtHp",
  "key1": "5Lvitx8ezTThKgitw3UME5PATAbjKjBcAPdG61P81tUxBWvVY9dwUMfuXUBE7Muh9nGZUTdssdRf9n3eXPyzdmLe",
  "key2": "2utBDWc5mG6uQk1oZXL9jqZ6MuvwrNckfb1YQSQWJep7wB8hPQE7yr3pKuzcRMLQfJUTsrCvgAabAvCo82XLnCPH",
  "key3": "4X2SjSfm1qvdC9qn5g4fH2FB2VJ7n3NP8xdeWoE4gAV5q75vkqpuhvL7ta46JSh9FHegmwqG5d8pcG4sbkYuxT45",
  "key4": "2yRTSS5Z4Qxu3g2JKeu2hB5amvacQnPid36ah4EZ24zFoxXnxoSmJmd7MaJrmZEC1EBm9rrW6a8LhtuxnUbdUmHD",
  "key5": "4DXWnzQvwuKr8D6LNzw7tfUz7D5cQG3MYwywB3vkmC2njqaz7Weu3GjZvSbeB68rLv2CXKtggcokWF1MBgJDYqmp",
  "key6": "44Uo5WeHifcUGkETBR3vKXcE5jVd4MkU2EqoxzJtRN9PGPmH8gP3z9AfdYBLoPkhF3pb1v82kroGGtDQ9dMkfmgP",
  "key7": "2h4HX7nShcs9e3wFnLfqBTb1J35h3oedmec4VDA3k84DgKasDJoY78TSMqom76Hhp2ZM2smWiYrj53ks8Hx9KCoF",
  "key8": "583ZA37QbRdx1PByC1AC8qK5NWKYfgF6oGxwTpCsi9simJsmCLnG2UaJwPjmau8QpzKAsBcNLG2Hs4Ygd5hpjDUY",
  "key9": "5fqc4zf1frvYuh2HaNQ5CFQb27cYfwj6WtqweKXnDiJAjj5hdT1a5e38h3NyevNUHtoHL2PuXTMYWLmoYgwuoUyr",
  "key10": "5Aion9ospKzbgr9XkS4nFxH49hoxrZv1JYYPaeZM3N6MjqtCrWyMS9j3QmKJ5RJACbEzyfVyzuU6s9wZdPemJ5x5",
  "key11": "4wfx4w4Zei1PQgef44D29f4yJuA5QnydqhucYs44C3MkWGyxcjSoEY7ttBPNvkUg4ADn5hLsyTsKx6JF4NotyvjA",
  "key12": "3BYztx9HUc75joAg9yZnGkUsfLTKUn2pVfn1YiTvuErgEzjHBDYvwcWGffC9Wph7jLVGJTDsTfpdNp2JQUZYtbJF",
  "key13": "54ac6srP5t87xZ4Bb1KWewHVcGoUkCKR32z59DjhuRtHDVQRpFWKtHPpxzYYpxgJ1K2uPWUpwKPZKNNxdG6ct69Y",
  "key14": "4Ja1R7VYauSwvUe62zj4h5e76QvnCYqZHQaqeVyrjajAmxaFiFoPAYCVLQHo7qfayxijhVm9w7YqugrVDyf2QsrN",
  "key15": "4dvz7mK82fzAbsPVjXndNP6vK7C4UeZmGfxKPcwHwfRFFwntbBKBm2vVppG1kD6kz27srvTGi9mCyeq3JDnNSLsK",
  "key16": "2PxP1eLer5W7c1nLUTn5m4x9QKD6MtvAug8YgwwMqbTHoESLA2XbJ8andnXyuPeSz9dNdnrtPzBep2SGLhNAEBvd",
  "key17": "4DWqwn7XZgzYzfgDcjx8R1P33LvepFV4j7QDoriK4fD3ibyxM9RPbvoShgTJJUAAgkeTJmPtLcctV6zDqVhT1N7p",
  "key18": "2mznvSP7o9Qwu26f9wXafCJLv7H3JYSH3cwbfvv96c1rHQpVvwwn8brhVneWDEyCAcGLJPXM7NfNnLg2M65mgEED",
  "key19": "4dvR9HcmSbXxBNswjJ1ZsJrxssRZH2tweBds36q74p8GdHTGzsERwePkFuZYaV4JBy1qNRmMvS1u1H3WPSTo5PVK",
  "key20": "hA2DWCngZvdezVXjd7L9qeiucvrQCj9yvSVN2tHZPSE1sw4PXJN2sH1vYXajiagkoxCfVYCvjfK77VaQTH71Aiy",
  "key21": "2CBRPwTXrCAc2dFXfpojU9RvQXaL35yUWPLBWzWj6Qvw4vR1zMWmRijG2cAybffenH7YjzAr12tHwUUekJAy9DgS",
  "key22": "5kv5tMpGff6FKggifFUaru9aoZRJhmET6Vbpq5xUNsf4P7nXnn26wdGtDw5wAvbSCr4sN1GE26cLbsv5XioAVy6Z",
  "key23": "4TgsjZEEWRTLnkQE8RDZj9sZ7J3QX2PAFEVF1eNhFjtKgwNeaGqGsr4jcTr9gxf6SrSVnRfkcxNQjTWhnun6sHWD",
  "key24": "NoiLmMzMcJSMLPCJyAzTTJDfxLkkJrvJ3YAiehxCYqXWFigY7XWMCqQrYKKpXo6LM1kGKvXdWaNfBT61u9ei9nS",
  "key25": "4efaRAyksx2MeohuAGpLMfJBLo4191izUZo1sDanrErJugd3U9MChem8NSjnTLfijcnUpoC7xjAQzVH9xzGpp1zo",
  "key26": "55h7VxZAxqeUS6rqhzkaahptqnYFH8qYoV9Z96Ez4onppswcP3YQF244Kih35TAS8xWQjNDQUwipBySpsSTCUtev",
  "key27": "5Ls1N5pESQJMW7GZ6DejVgBTaFzoUW2MCVunWsU5c5QKGzkpXNCWY8uzuq3qAyqD6TkCThEj1zNW1DoDuzsChDni",
  "key28": "3Dcm13a6BdwsrqJwgXJ3vMuXjWVv8r8CUMBu55dwaV6L1nVrpLihkvuppoZFkgCQ9ETzM8sNDGyk6cWNnnUMQSo9",
  "key29": "4SDyZgmZQRyuFfjEdgkooEywAoGx7mE8rp3uzFXU31fjKM36KtHDe4GSn8NyxvJ7nrBqAcymvZ9TEjHNM76vSXSD",
  "key30": "2TopahhDnf2wFB54gYggR1hgZDRf7WvxfN1CbwcgwdzUJrKRBJzgP39EWCFtxZfBXRZcUmqjgJRHLLJktfS96VyM",
  "key31": "2imLSqNde7Krsvjob8JoNJ3B6BLsLh9wXxvKQ9gnvhztsS5Rtk9AQrDEfxivZFsTg1nkzxbaveWxdvkCxBsFrikL",
  "key32": "fvopw6dbEqpZisBKyx7GJBh8qY7munA6hvRM3zdAcr3xGzKcV4BE8sQuntx7ipfL84rzXUWGqPgnrxHRnpdAsbm",
  "key33": "TvrMWjxs1129ViRSLtPG3DseVymEDCusddfxHhvQB3Gbf89gnVwihibphUgcwfP3HRZwYyK86co3jGZZEgJa6yA",
  "key34": "4wbfiSvSLBxXohMX2R7hmV7G7MvBy4GGH5otxjaqmKMkoMYayhrnoqX9AGrVFriiqqFehDVTGusNzPBHMdh6Jdr4",
  "key35": "51BHXUkPYDNPCLBVYT4a6MmtnjMPz3M1sQbX7cW8Zi6bLSCNDM4XJPdFKaFpkJjPKLApf463EU4mESEEWqHD3fwy",
  "key36": "4AZh2HEUpJsMhTrvATwy8F8Y2mKwLqbqU61hyxowp8WWY7UCAnf5m6xgm2G7H5eyzfb3e31gK1MPwSVpDUJH14qS",
  "key37": "5KwCrkXKz6uaJqPgtUqLGQEHevqLugdqoiWhyVyUCJKV8KT4SeAeGPXWGgNgRs76uvGDU3zdm8c2xXwirMSLxW8q",
  "key38": "51VCgy4HpUXWt7e4cY5Na2C5671W9SUTfmLWogGWUAnFbHM2ywovbv3nvojhrYuyceA54zTu9EHsnfqxfJ6JzN8p",
  "key39": "23w96Kx1H8m1eNj7zyMAg1FEsBTzcYiCsZ94VQ6kZKGypr8bhqKbXSjdvfsiyicg6vFLfNBwz7zcgAx5NgdS8Y4c",
  "key40": "4idvEBAFW1TvGJFMaLtmgZ4qezqyCcRW8PUASaoeuLkZYK2XMkG9qvVmcKUJdSEWtQ7z8LwpTfNHLeaqfqiY1Hd6",
  "key41": "5fVNdDXn8t1pCwD2NyDrDK4fDqXghdsAYHphJoba3b96Wpvr9FGFwbsHLKwpDz9X29Wghwyt4qtZCXtu3dfDcRa7",
  "key42": "284gPnq78s26uTDUgx4cbucxHD75DJRs6Ge2pa6vHUKxmd8teFA6fC8jC7Lh9t2gFRdSZiohtc1dz69XSqSyMMYh",
  "key43": "3KHqDuWNQ3JQYrEWtAKAXURT6qy7BmEngWJh9sCyuVf68uxqTqxhtpa3dMgHGdydo1EVJCqP5LCeNP7xGKAbDkoV",
  "key44": "5JPrJXmmN9dp3QydZLMqvLGTWRnKrY4yTX1ihfN3Ent6kmhzE1LPbgn13TAymfba7nib1DY1rLjazk1mEmRrj4PM",
  "key45": "2zAEryUf8XeN6R5ARSXamT7d32zTHb6iKYwyNBj8WrkYQDCzXzLFzUQsuoUH4rUFfK3dL1JZAFZCSAdAcJE4ubSt",
  "key46": "5hRzdXGiGyDXDuJhWg1FPYjpfHf38RK5SWxhM2MGPwbmfVzw5LZAgGJS4enKvmUdYvNkr9BKX8yE1zdcSwgQ6SRk",
  "key47": "2WexGUGEgarcV3A2iiP4oQYzzhoBG4pAzeVRvMyGngX9JQbqZ3ADJRn35FaekUBhQK7BsRs4EzEMJwuzEKxzt9K4",
  "key48": "3f5Ae3D2TovcBwRbgmFAR5JguttxrySdnpN61KCBdYkhGvQfwtLUFjzeKEVRXE9d9vWXkw2NoEd6qdfy5S3HAaFY",
  "key49": "2we3vN2T1y2ZH2SmWbuqp5RKtt3XMFWg2oy9NuGpMGF4cCHp97SVw2Rnii7ev7bKb3buVvoBfxYNRghFmMAoj4M5"
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
