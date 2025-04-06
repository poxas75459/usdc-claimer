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
    "4mksxm5sjTmb99c4s4E99PnKN5vp98hK4mgsmvAxK8C5DBpcPtoULFwRLL5gTb8P28Wkn7quKNsTXPucbv6HPEoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "553EYmN31Lym8Cyqz7KqWALigv4Lj3C8jrEPwGR4m9nhekB45vo1UCMsMfNgAzmmMqE8DcTqw4WrsSJyK4Vj5xmv",
  "key1": "3DhFJzPe3DAf5WkxJ1KNakmtKwAFoUG73NBtG6oyojvrgJJugYbbZBSsLGDS5gzyudAL7tswmn6m5v3ukBp44Xf6",
  "key2": "4kpBZAyF1rYQ2RLTKUg5wQQ5m6qMvMyJYv9F7LScqxJVTVmcVfkC9hviAS9DmxVgDmAyz95PZBQ3Y4Lg5PXR5Z7b",
  "key3": "2MbvgTY7Gg1h6mBQkdppMLbQgtzciKqrSvUCPH163b27uss68W3ujhc9AmjDCQjGBkdmq8bKEEuABzYxL5a6rAYe",
  "key4": "4yguweN1zx288n4u58zYj2reREmoMk32sT4C6qLYzWpi8gMQcTzTaYw59ThiXvzXtrD4r6GYk1eAcusjPQzRj34P",
  "key5": "3KvNqRRsLu47wyMZeyMKHpP8Bn1GQGPWK3iSW3LWNbQpvJMuyBzReN7cx1dFqxE6KxgLUm5bSSTuHS66eSMa4Uxd",
  "key6": "2VDpisvDU2eBY5msetsCkssGCt3FffXcFD2rHnLQaARg9TE9vEyBqPb8Tp1hhajC8XEffkgg4UxdBszLwpWmU1Vd",
  "key7": "2kbMDrEmjmHgmt8JgQ5Lz7MjggyWhwWtM3jXuQ9Z7L7YFtpr4pw92wxUgvYhiESFVNDZhZuZrY1TNfBZXwNTyzrJ",
  "key8": "495oPXCevaEgpJpYdxtZG8y63YvXECAyZgbAeGvD2zmzAHN5LbGVPvU7hPXXGTaXm614m3Yakzb1vSXr3VmeWsmV",
  "key9": "oMHL2e1b36Bz199Zde7MERrXcrQgw8pgrNdGFavsYhwD32mZgjXq3U5hzJm2eNsadHFsbDthCwJpQMWzHCWGK6s",
  "key10": "7nYypdCENJE4wtsGd7boApAaX4ZHC6Vddqdy9yK2LV5Ygr8W7cmfhaorg24C1DTU3kTYF8q7aBxXdRdcgcAzEDa",
  "key11": "r91U698RNfAQRQTXoeMFdiFXekuoqVEAJ6XRcRUKQegtMNxBa3rsy7CtwSSH8WuTCihrvoDcMeM8s48ci4tPSJt",
  "key12": "5yBnbwTS6PKQ4BJQWaVBAjekEvqjRsZsK7CksvKMGXRMTfKNZK5fv4FtnvJxEX27GZEVtfttwhvZEuHn1psr1fLm",
  "key13": "3o2XXXgdGX9zEYVwcSyjqtY67uX1PunGMmyDcxrCUYd2dt8SybaH9QQs3phcrcgPe2gnvaQmgbAH64JpFNCdJ1bd",
  "key14": "4M3mzL2qBs7ymTEmkfDeB1cXsdTUmSbgWc119PW7hu9X97Rfs2GJc9kt9gF5D93gkta8XaNh8MFrB8n6FF26pF5g",
  "key15": "5RiM1fBEfiDk7AGLvHLDotk2ir3x2kQzMiQQJy6PN335VywcHNcsVxeafyAUZVeHPJiRGuHLBMoS8AToVCfk92qA",
  "key16": "4j7LCxMVzQ5kE4597fK5SNy6d6ntmzryqgmAFf6arcUgoaxddhhkQEEzfNzoxbbRgQRr1phvFr9TjGbSeG4LZyXH",
  "key17": "kZJw9kPc3VCoSuLTYXnRWCfK3U6qprehdUAVwfC4D9bjdxFRM1XFWKRaTXgHfwUycxsgG2rSz1k7bzsES32LLVe",
  "key18": "vTmp5GjkDx6dPKQwL9R533rzm4fHtgLZTz1e8D2PQpJMhBXTUea1bGG4ejjrKzo3eV1Zo48JENpnW8KBCdUTZFF",
  "key19": "2PhEpztnd27E2PcuszBr7XpkHCDKH7UbjBhUiiK2KNSdg3zfwH1oHpHTSP6nFY11DmdcJvay3DwZ2ktuDq1o9HpV",
  "key20": "439e7CCAUWcTHiUsC7uT4JWfKWmpfmyERkt7GJzHRDg8sBXWaCCGpqSiMvs7XXLVaJLzTKAA9vSyyWhrqomfA2qt",
  "key21": "5mqr5mNmBcXupY3bnXbQ4W3D5C1BUq9cZw4R7Zo27Ka3Fx85tZMTvD6QWM6eWkEH2nUNvCs1ABStPUbqSZXuXbYJ",
  "key22": "3fZzhE9V2UK6vHKB8RD77QAXvrQoyNKwSU5E1JQgenkgH88Eb5Xcj5HpMXnDujgXkpH73kfKrjE6ZKLFYPrDdX1M",
  "key23": "3D2gK9uh2gGZYggyGKdPhKn21Ck367sLL9ZLxy6E8acNwN3cEwB74MDzZcD2fzJzYcGT7zQ7zwADGXtBJUin67zi",
  "key24": "2kfoeSPpUSJvu29WcT4H3FXTG6RvmyEuUL1S2GJGkMyZ4bEQWM851WqywdGtoJhv4HRtwaAEufT13q4wybWNR6Nh",
  "key25": "2qBk9YCV6sj6PDfn3wgCNkmC2bwsNBvf6nYv1XFbr3AuqWwe7GyAiXJABe9SdtETuhbyVAfs5NdaD263TnHjwoeL",
  "key26": "5AckcBNmE43zoMSa1fHV1tMUeVymhmkc9vg4koT5cLaUatQ93rc1znn46KBuxXqTQGcJERTNZRBe8Ft9TUVntrdE",
  "key27": "22suhFjaLsds8g4Yt1LwTHf98sd1yhfEvq5NAoBkF8XpmhGxMK4G5MB5anE1GYkeT1bwJzUuz63mNu6LxFu9tEPF",
  "key28": "JmjxHuyDPhvQRZQzA1BCNzANpa6oMhCDpUmc3sjY38ni3GCQm5vdBrxQpkGmN7zndBaaWYKpYdNr2qpcPXUWPhB",
  "key29": "4FCN3bY8byTswxpadmh3VVChFpteCvM2tE9USGS2bKZYG1j438q7xDAfGELsfXBd8SjgdfTtTDzdbUPVFZqkVb6a",
  "key30": "4KwGsshtbtKc7t2HVMz5HiQELSfjcmB1ihu8DgogobuS84zzrLg3KvwyCvt9xYo6txJnHE9ruEeV7UBqT4NNAFAT",
  "key31": "oDvuTpeG1ipgd9d5JJNkiB1q3gG67BAaFLngib5uvvhdiF1sj6WMYTS2x4CrY6ePE4vZVoJw8rENNL9GiLuxQWz",
  "key32": "4sZKPjJULdL2pGTUezQ7FAgmLdT7zcyC9H4xBN6bBwpXvJwW1zfAvd32eF6a9iM4n6gDiarvFCGpai4Khn4YWvh3",
  "key33": "ebCSdfiesRr9zqwXjZQ9WYotSkvRHGJkp1mNof7hpMTsJ7UGmk18hJodQ3E2EyhtJ5d4qdjDXSAwuYJQzKbrS7U",
  "key34": "etSunA6WMKWUxohSRR9t9fo4k4evD3K5AyCyNwpe6dE57pVEbYADQEf6386qR7omEFBBDfgavV4a2YHHUmrPV6s",
  "key35": "vouZapkwdJ4yaqiSDtyj7EFMuvFpVMJeNo1pHZsmVAa833devJEgytNVaopBwArT1JpGAcmXCwHmRgfjaF7Lzb2",
  "key36": "5j77T1j2fuesRbc4fywLd4qZQK8c1YDaAFXwHvKRMmN8fU3o2rdi6zZMBfo1V268pgJZyQXJMjTNW4gxS7EaRePa",
  "key37": "4dTb8pxw5UT2sSTykB9Buj4MEg9CEeuvrLG1q1oRJu3FcrBi8ZfX5tbbViZZXnB2AmAcnbadb3UWy7VWVGLagfsJ",
  "key38": "4YJCXL2WMN25hEAcH3LzYiQdq65uD5dHrx7JE5QVSraDvv5QN6vxzdNF4xx7ZAWqn99m1nL5zUPoxSpZ3NuieWT5",
  "key39": "52quF9byXJ2jDpMod1rWiJnzMoKtwBhPpLgSyRxbdhkdnur9m5FqEjfVw5RqhxuqKUyJRTbkftwi51PweuednqRA",
  "key40": "3MTppCGFbgR3YpDwEAdHDzMBdZQ8jjwXq5PcWtdNsAudAD6UQYeg2RTR9fy7vaJq6bBoyVa12JBTdaZBedcBuErY",
  "key41": "44QJGQPTFT24EBGQZ7cyvmPBVc3iJnPC1BfzQ9Yw3DKij1RxugVurhRBZw5iVuZmjhtu929jERTbKx2a7CQhxdKW",
  "key42": "7u4UVBQDcPxg4iUChoFPivnCupzPncS7c4vXa5hqF3KeNKN5N7chzq65BLVTEDcERr8kGZ3aefGRZ7jJhMoV2G9",
  "key43": "39bLsh5np84q4bgRpbrUR6FK9oMeUHusRQiuTKmDRVJPafD2Fnk8XGRN1J7ttx77teG3yJ1RNgmJAdjHZ1N2s33j"
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
