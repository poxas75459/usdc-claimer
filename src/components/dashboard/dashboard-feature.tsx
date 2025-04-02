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
    "4MHvFxrbDWzvMdmXkVW585kunGmAkEwm7qXhkRQ1s6AbkFCBU7GupLxKSK1ab2mK2wb6oeGcFFhnCK8UvBttbj9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65AiuX4REsBcSKpZvYdBCaQokugh1UVNwCd4mcitgKtKKVmj9afvBvzLRnYJdELdv6zu916YuCExwpG8YLcmVZCM",
  "key1": "ibgSZCaKjxJc4zSwLVP9Rpfbee4VmUs3fbuDN6WVx6XPMYXGQDmMocPPtvn7dLUHXtMYPwR3zEZB5rNwEdXX6MT",
  "key2": "T6c6DAzjXzXzuk6WAr1zjbhBkAXR5ML1dR8nQu5ka8D8AGg8BbGHF3DKVFFJ3earu3RUCuM7ynZGW3Ti6b8NKsD",
  "key3": "2mh5UaczxrBwhPxjBfevB2tBLWGTaSWQRfZCqUZ7t6MW3hk2VZL5XdEPUV1aioR2mUNx7cvaGNTd6JH6oQajiH54",
  "key4": "5j7YUP3PodQ3sHJ5bUgJWQjyThoDf3U5yptA2FFCQcqRNYZaJ9jTuHgxw5mMtwcCEx74TWxWSHvSJCiuXGJz1PH",
  "key5": "5Eo93madrRU6YBoGUnX1ddYYemDMEEwb1JUv3sBj1tSnCr315Vphq1hHb5praUjVxwQM4AWuGcyS9DJPtC1XpRHk",
  "key6": "5YxWrQTCk74aD5eszwWNSPipJbui4vcVGVdH5ephjbrKb3YUUFKeiXB61PJxjwZUpHsFegApgUJgohmwgPmzh9na",
  "key7": "24dDnumJeHZ3d3PcHDHx2HVS6VPKako52FbVWDc3xf2nnbJRXmSd3rh1ViDwu8eW5KpigJSPc1bV116JG6TTiuJY",
  "key8": "zcH4DTcqR7dvFmqHHYZjKM6U9HbPAYkpnjhEVYUHGwGsnHwMr9SBppq5P2vZMVoQDfPXcKZDY2HDnZ2yxGGynSz",
  "key9": "FF1kz2bV9gkymVaUoPhxq9WUudDkH6KCwvPRHNWiprwRQcHzvZ3jZFpLgJ2AAvTvjcbsuAZdtfsj1wHux6qnpVQ",
  "key10": "54GnCACmVKZSTpgpSgXK52DbMFEymHR31TtjVaBu6bhjkP4Y2H2KpH3c62Zsranj7PE2NQQG9NYL7rDZFaynkYnz",
  "key11": "2iU35MHgGzCANcwT8wWpnGTF6vYmgor4ekpY6YpEPHU2xdK8sCRsw5KXEcYxZqxHvep7KuirKLDMTezbokHYNFrb",
  "key12": "4KNv1db2BmA9YwN2y1j5oM9q96hpGmcPRG6WCinBkSX4TCujuvwsePLWffrwU7Z2GpNsNM4RPzGNhix87mWNLt1B",
  "key13": "5mcpjnErBF1Vt76kbm8DCTGKsFuWATpsN5ScQs9A1hPf2KxVi9JJSYAbDMUqUVKkqP4kRG44En64GTUqWb5EG8Tj",
  "key14": "U2hFf4g3AVzoFDNvxJFxUFGuoPmJPWHh7G6nRJPtwkaZ2kk1711scMa99vv6yqp1WaRHvBoxcSfTe3GC76DakAE",
  "key15": "3Y55rwAijNCisKgDjjuaD9MhycDHLfse9GHBazZ6TktU1gKYGRSrSFdpbx5Zfqc4MSxPhzMUpjWFM55jRGttZ2x3",
  "key16": "F3gt1Fidu2VT9YDjW7B9b4nPtgK1SgAD3ncWTU1Li5bDVsVteg4ZN96mcR2HgzPYG9Gs2fvKiyV3Axx7CURtdYj",
  "key17": "XZsA9TWDKvLKw6jCCFEQCJE9yDPqkQZM6YkT8f2jcqignMJyK289Hdf1jAEYHvMgAfDRoJ8ncFiSk39RS4yMvUm",
  "key18": "3gwAsv4gciMbqGc9GNxFH8D8hjCPr4qNcS4zANhBHWUywabE8LJ68b3GBs6a4auxAhJXAHVWfYv6pTHpNWyMGWzS",
  "key19": "5R7EnZmG1UrFc2XHeTE5JLpGhiHhdq9EpgDUGgqDhybianqTGpbw5YpXoc7jVLCMvPg5HnKaEHGD7r6rZj82t8X8",
  "key20": "2ec32LMn6pxZXyByGZRd4tWCKkLdcL2YBttwG7rZP1yGa7rpq5JrEYRYGh8A4HRrXVA6uMDbTVkQumohwY7abmWk",
  "key21": "23kSSKAqwLXQw51X6v7NLFP5ZURC96bN757W2d4fq2LKBc43UMciz4R73uU4zeRNC68b3G9FgSQ8kCgGxDA7jQTt",
  "key22": "3thmPQjoiDxWBSngtYbVu7swAPrvU7uCNG5hB2x3PaYd2hAT93SjpdVWT3Zwt66fKMZRV1Rn2dXqEGjkG68shPWD",
  "key23": "65d57gjW3ufNg6pS7rwSpRyybmWhjkWTx5fy7rkAEPvDBjSFQaaoeFsZHBAAd7B5194ySdL6esjNx1fut7XcSqgF",
  "key24": "2jDKqWpvR3dt2cQA4oNEH7UnGJeRX5C3JiQEypfgcBTnMWM9yr63t7pdy8fvJ86Vsz8LjrstZQUb3Ue7DzD9e4uW",
  "key25": "2mH71iN4KEJHXDibF1fUA1MMcUamMH6ZeQMSCg1XjmFCteUoxf4trYnS3qS7HTn175rtyZ3NDSJwBjAk4QDBtzzo",
  "key26": "4HRRE1ERdxFwZ4BhFCF2e3Gk5nDGrmRCacNs9nrf72jRX3Eij5ezEtgrn3LPNjkiFb4H3VhZmGHd5bQGFsREZebY",
  "key27": "5ofmGcgGYHejGzTGuFMa3g2rjMQqHmebFNFJ1v9grLu5BefrzYiwUGZkw2GMWLnw147gTCw6icLQ7v8xqNZ17qMc",
  "key28": "wGYHqsT8GJvXEYaoaQvScszQCBfb8Ro7K3ARJhjMeaVaTVuXzNSnzMCLcezWhQNXogNHfLExxhiAT4iLko3EUYQ",
  "key29": "55qgqqgM3erh2egNEZrJjoZUDjweshUwPEenBXopn7X1RvnmCL2fxTidJBNVZ6zWt5BEotSAmpUSv9HP5WWYN4N4",
  "key30": "GTKjFwYFAqQyJsufGF5gFBLp1YA2UkkVvA1tYT45jqfrdpSPi2Z31QzVt5EbgBJHP1jy7A8goPdQnrRQwewG4E7",
  "key31": "2skDf5nTcsUWdi4YfFdUtW6beGi2ZAPYRytJW9PrZZpXyBxJvBjDXvGsox9XKTbWGPf4GakNiqkJNqPE5WjAPQ1Z",
  "key32": "2RT51ZmieNy36sCfQMMYMKu8bKzQjdVijRbwty9xgQqVYDQMGVDURfK529KonDxwUe8aJ3kSnea9WZgk2gNxSBbS",
  "key33": "3Wkaa9x3yz2sqa1G6HRvSpeo6auNzEsQ4mzFjdWTP89kipjXfcqDst5UQ4nFamzHKtaVkjCeeT3MqibBLey83Bgk",
  "key34": "3weGRMtv6njx5ajF9PaEEeYymC7beMiYbKrzfnAtZe3E7KvtdtHSFHp8vcM6xoujeeDNZfnpVaXGPYwHeHLFc4AX",
  "key35": "65D4AtG1y8aYAkiAoLRKufTG2hBNnbGg6DmJVRA9Kd9Dgj1mN2Si9q6FGdSyDBcTbUzqMoFmjs5aBKUVkBCoBLry",
  "key36": "4bFAcenuk8KcDP9WyGZKfiBPn76LdwaAfNZn7pZHCwBe5YifksFysHq4xvufXZFmmm79RKrVK73qCdNkVwrwc7NY",
  "key37": "5ZeGGPHMsndScecPboNWri8MCRri9riZnU9a9KcQfWEuQAUvwmWERFNci3vWmATL4xhxo41BHUhkQ3f67vCLsq5Y",
  "key38": "5eRuwVPfizhwxdbmtHQvYogaTnpUvPFNstbpLihwLNVaCBRqfrLngz36h9oD2TnVxbsFvRJ47Jhw61ZBkhJTJaa7",
  "key39": "4Zjuga8qTS1w2EpnWaRxcoL12JCr7AUTKz8HzVWbEkFxgVjJGq2NSjfUhHTaRHMPQE3ApcyaKPa7siMDLGrrJsyM",
  "key40": "41ziGJXCNmMwmJP5iw9xp3y867dFV7sLhjhxue8ZmJqwjGpAJWSDCLGFV3VGFUvJytd4WxnhNVnFMpcasDoyw2eg",
  "key41": "yxuTtmaJK4R9ybDNvm9E8rXZQ9PLwRxv83hDZ6nogW2pNDd7uqMyPcXhqM3TiXtadC1r3kH265QReyS3RbvPi5s",
  "key42": "47P4sMAExJ2vxzCJBN9X6b9x171n2mB3AyedQK6M1TwFymD35YmRdXbSUb46umHNUnncitFr3fzZyHtMJ2QPmHSD",
  "key43": "4mJAmmK2Ku2auPcQXxyqBhXmTa96BzDYThQuUbxvVaWhmXRDSNsHJi26V92cW8GyVHBNXeGyK7TunecvaZqiWaD1",
  "key44": "2dNuSNp84W8FtM2vBbKp6rzVhidbDSNfZ5bFoZNpMmMkUgAtc5ybogkwXi2Tb98XzHD6kYFT8sprHzcHEJSJFJSM",
  "key45": "i3kKLTp8h7gu6Kvu7sgLzSVu9T27ZT4zqeJcD1YenWpbZEnEusJ9FsGvu89EbLdXQer4WMSb9eA8tWnRiovE9L8"
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
