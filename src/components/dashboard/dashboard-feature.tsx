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
    "3UwnU1Bg9VcLQMpjL9j5bJUBuE3UUSqpnfnP7oEJsNhkZ3WgDQQFG7jrFDgXLUfyoeyh31pN2yNiXviX28sGS1Yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rDJezTEFaCVebjgfG3gxRUkzZvmb3hPYNVVVJCd4pKXGkhJD5noX6EtmDLFLq2cAwJpaMctMBJLjSUayhCWfUhU",
  "key1": "5AH2noqnkS75CMVRRCYELUPbLMLZp5b2JNwmrgjpKPuJxdp8aUodZaSpuo6F2mSpX84S1CwGHWjF6wwNcaMhDns3",
  "key2": "3KnTP4brpL93hgSTbVzGewpxCv7yL8T2ixT5e7FSVH5d5tmvUTdTnjJ1JCBCcWWt6zVFryiH6ZWwGUo5D162aSbQ",
  "key3": "4smRV9jGNxMygpmhYUUFZAxqFe8vSGAkWxmhGCRnJKwmw5jJb9eGZfBiAxNrxZbTAogsissU4tncT9BqB2Ex8g2w",
  "key4": "4v76RXbhrvgBuadsmsVeugTq3e58aM7ZkM4SoMBcuCc2aW91RwyctcNymy772j6wBrXasjr9rcpBYtTvUTczxqYk",
  "key5": "mtRZNcXRv5koZLw9a29dk7GwtLc6Zbodjz4nRrpePb4cXyYUTjEdd9SJAE1xdsmapM7WpvBzcBedSawzV6mAsoi",
  "key6": "1VPZivhbWL9ecYBbs19HzcnLkZTb1KvfrNbWGnp6RZNCsWgsLCLWyzs9RCQYwbSG1dZhAgxPEn1Ta84AYjCyvBj",
  "key7": "2FkvqNSBaYyokcxxDca5sk5X7KtX6L8rbJqVSFf2iS6V87fzkaepjtUJuVk9DHBQWsessST7pmeJTcNpDqjLmvgJ",
  "key8": "5tsX8DwYU219ULDzyLCo1mTkYRibRMBQ5JSojLJdvNwFSosf8jMn4GJ1mfgs2rVGLZK4mNFXgxQawcmN8SsaEXsF",
  "key9": "W7EpoFPRzVSpHpQ3x9z7UMoWtgcYwZxQgvr5mhfawvq2Kfqk6VujfUXe8bWtrzMnA8Zt2RmFW7rv1ABRUytVVxG",
  "key10": "2TnJMh2FbfJ5bHmS3718M4Zc9dqjxZrNihfc7A9TfguTfEifaLWvND1EZs3xp9iktjHE99VBv8BkiNPo5wDdSCnP",
  "key11": "4p61LrCpzojhmBM7RrncxTW58c98WtJEKTBq3s5NQ3qemagLLRcAcRQ5CLniacavYosfniNe7FYsyhFGBn3XmdSe",
  "key12": "3nL5fyEqxsay98ggmcXtE2627PrpAsVo4DQfXd4Di4q9GjCNyENamNEurXt8phun9QdKXUZvGa11xkaTw254UWmb",
  "key13": "5Z8iiuirkB6HxJxMKKmafau9jEhs8kWT6NKfvPhQaogMkYQrjXfEKUF6N8qLqnS1TwvDMKrefmfR2TAgvwBt1iA8",
  "key14": "2B4D1nJ6ggmYRyzHjnthYkSdqwcwyXDU654dwPzTB2ZdDc4heodQrTC9Gx18aFj3bvWNFyeLe5fe19ZPedRQJuqH",
  "key15": "4DBvNKTjR61ECFifyKyFQnMghr6Wj3gkGtaStdZzvDHY1gG6L6fidb3cMdDc64erEtNGkD4EsS1fequghT2UDvGQ",
  "key16": "5Wwwz27z9SESs1TRf15VVhjESGHJasUwPkFS1xUosSASqRnb6uuGWtXC1nm9LbKZX93ySj91orwkZQQUiwEjn8T2",
  "key17": "5y2wjwgBeKr7aAAUJzJt3H1mJ62GHJmUarih3yxmf34bxhehKXtTxAYjjTVNXSo6d8sGGoqvZJJuTaFjtUbCeNKX",
  "key18": "XynJRU6Ln3PC6BudrGkcNiSqkyXiaRftvtRpUF5LpQRjMJxmJ6FTjSernrUiKQeeTq3wmJ28ZUVCgDxaCnDB2F1",
  "key19": "pZMWoNMvgv2XftuEfuWQ1Du4FDwFE2BJZv8d3L4NMcjwJ74PSQx7hz2VvP33H9sWhNG6sPDiq8ccAmZhU9xz3Zp",
  "key20": "4ZuCQ2kMkVaMJ7UG6zdpbbE8U7VRWKayGhcNkqBwNigLoRBvWchk7VtPuo6b4vHtr9J7WstycZNxQLKddCZSmtZM",
  "key21": "4jYt3GNRCYmuchPXLgz1ddboQ8tzdJqK3dgji3aFzv2Azt21T7W8HnyyCacBDmggrMXBeoRio6S7DsKJSGohxisv",
  "key22": "2pENYiWpEUhLTn9u19uFPHUKuYZJ55YZj9Df2cCzQ5E6PDLhfoSxhpRyY8KEH361gEyUGVnmvHYjyAq2Uts1xqom",
  "key23": "3TRosFwMxuGWT3KnMBrwqfsfBJ68etgq46haJxHNKgc6ohqDyrH9tdMXi3iPvxRviqk48KvPPcvEvSCdvRjBrxHS",
  "key24": "2AZ4sHq2yC38byUExQiPoBkEwMhB5f6zrp4m3HAsU2Tkegcoa4k72oNb9D7LJgKZvVhQc3MY8JR8h4zQjwFDhTy8",
  "key25": "2tkkS1CxzADNUZ6iaXFwkgLnhBtkvfMMEHxf7BLm5UGMMogYLEh7EgkqSN4Hw5pYRxaxFXS2aR6giDenTtVpf9jF",
  "key26": "5yBv41HdoQCiJ6AkdMaZfZa8Y11BwLHy1Je3phwDGDSEW6puM4USvL2zeKv3DKVHuYakjjz691jJuLchzCcT82yB",
  "key27": "2XyZRiApPkhdkwVPRdfAab1myAa1dxhiq6gSZvaW2uDJApjD6RJBGqejW2PyXQHGUQamkYW27T6cSx5E9jbGhNDx",
  "key28": "5rtCjZPJ1WFxnhxaqXPFE5JhHMEYQJWT7uj2AErKQi8FBu69exgP4tjnMqbNPbwdHW26WWDbxttbnRJadYKRSExf",
  "key29": "2N33oYvdwKasoAKeHsYSJG6jP3HZp7txcwwf65XtYEdC4CgcuWDsK1m4KpQQgrNg7bXXTLZJdWM6rxhH8QZVxSND",
  "key30": "3NxFgpgJ75aNNLxez6dsUDtR5pkF88ZUKF6WYgWrBXHpzokTdv2eyrQLd6zvjkL5ZPAnKrVHQvJ7JeMrjhK7ypw1",
  "key31": "528sgXehjufkHSA1f2SKSz1D5J3SmJM1VN9TWtQgdDKmZL93WqMqzXUAPogN5wwCutKyXJgAS72ox167avwsWzZV",
  "key32": "3wnbiiv2cBwRrkHS7U8gee4pJBRrNUmLL576VSWPgZSP6E3gUNhb55JBz1BFPJ63eXbDBXhdiJBnJbiN27ZfrPD3",
  "key33": "1prHfNK2it5hVk1xUoXUwyZ91ZXLsPaLvF6tZgkU1ct1xiMoJij5eQ1Cb3PMNKJcK6htcrwdisZYW9JpPKxPjej",
  "key34": "564SBkHkBAqiKN4oXyy2yy4HifewfypTdok2S9eu6gWrWH5VV2CPTVn8n796MAn89rxWgGBzg5DpcTjScwxLknh6",
  "key35": "tiaomq1QkwXqrFmZ3F4XPwXhyn3w9biEGh4w17SaHGaL8nK65YAmbGpirj7N8rtS1mB5t3iT48bhEcZM8qKHjdQ",
  "key36": "dbXQHpWbPraYgz8P31h56T5PfX8GdV1SM8oSLNtTfPobyMdUHyDcWjfBr7QPX6fjM1tu9jXoK4Rcw6CWKGyAfhU",
  "key37": "3u4af3DuiE1yEW83qgE9zk3ok8tAh294CbVp6X5QUcrY99iKCkVWCKgr511vH4G8wLiDx12Q8iueydnpQLK8HSFh",
  "key38": "gD7JFWVnS5Dksby7eqoNMVGxwzFgEu2FEW1f7SdTYF8nWccoAKXxGsJd8zuPMzDNP4zDgVqwy6CsrgmbpreLG4b",
  "key39": "4CM8SFCjPd3dgVBigfKe1pC8r6eEBD6Q8dADBVJyX2K716W5TyBCchKtbvU6yPrb8y4BPZyjMBoUhtuBU3nqhcbx",
  "key40": "4T7jf5pA17xvrNoJweXUx7pE7SEhHg7AtKaf5vhPsckoB2Tp3X4UjMpT1uNfQv3fnxQnz2JrvzXdA3ZjPSDqUWT2",
  "key41": "4ofYtoa7VdSdf3H6LGf6ThSrKmKJipBaPsx8urs5LVfJtHhkyU2tbA6BkCNqdc7G3zXTMQ1EuXBgTPbusRWxymaa",
  "key42": "2Tf5GAgf5CEACaJ7429u9cvtbpdXj48tnDehUntzHVAdj8opP5dnZG4sLxQLyQKeSTwevvVcSY5tnN2wKerdMJWv",
  "key43": "Yj6kgVaco9Srvj95tFx5Ec8jFTy348BWdohxqWyD7h28FJB3TyzYoTcujWY2zQJuRRdzduYKhRw8qjE2YE2vuHK",
  "key44": "5D63ajPc1oxjJXtPyJtg5aoyY9o3DM7V7MghM9itoiiLZxjFkBWPMjmPtrADdJFv1yoF2JyaRUXxVHanzU8C27U2",
  "key45": "2Po3B1jLXprWAVpUakCaeg6cZJ7TSeQpLyMaKGKbAXtwe9FnDPTeaAJctpikXafZEsw6sPX4mBMr281bQNaQxv2t",
  "key46": "4fF2fRPspTPGVHPUvezHQ5ACc6rc2ixtGDRSboALDAn8JcWsCVbLqqsWr8UXvZcRY9BKDR11kK4ytHZ1rG4e9rf5",
  "key47": "3Kr8pdNtrXysG8yye8kpAUckxF5ZghZ2qDpAvU2N193RMieqe5HMTQzZS7PS4T3abiknec9Z81UDBpVGzbJRAv95",
  "key48": "K3Z6kf5NETmtywScsP3ZJU93BGnDxveno8fASwdjb4fCmEYcuibPkTP44L9FGRzwXLide4Gten6m9jgM3CTBS9c",
  "key49": "2GVGHuwmxFMk4UCgXWxCJ1DGBygLZ8bjvnW5cbry2CSwBmsLstudFaScEK4h4bXcSjkA4WUUZGhpwrWNAkcVUGTF"
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
