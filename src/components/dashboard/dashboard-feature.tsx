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
    "24HUBzcqm4pD6gGqWicMaSAV18D5PNGD7dtD7y7jr2cgGCATPZZPE7sEPUvwfZUWwrX8BBuWUYCytguquAX69cfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YxCiBBSerDPW3ndnYEGMgbngTYbrCE2GtiNJee9ft7TWjE1ew39XZ51Pyqyw4frZvAvUpvo2wUgUaZuGPwRNth4",
  "key1": "5Y4AZa3TsGF5rpSzHpmY8x49pxKds6PEc4t21HJ3vHmFBQkoUk4XNANaQGS1xs4uXQg8SgoD1Wzmu5cgpv1KgXQY",
  "key2": "4sKno6aUJYybmrjLVCVBtgx9BUwLWeaeV7vaF2ytffUARCouCYGqZR7ceWfUNBsV2sHxYUj4EepvU9rJHW2yeQyh",
  "key3": "59SezGbZsvEqC71ECk6QqZaire6ba5xGbdNWAzf5M6J4KGbGcDe1kETR5jkEzjhhE8mg1G64xgUSFkPwa9i43F5b",
  "key4": "5KX5w1wM9BHU6AWirnwgwKtwiqtTpjzLWUspXt88wAuPouQLpE2oGx4vq2Tq7RfFFByqG2S1s71iKNibCELZaDxz",
  "key5": "5KVnvjAyajgcdc2zLMmnQDva2rxBCfVtsGusdhgHB23VRvEGHidWXwDYACd7Hu1a9ATreV2fcgnsp2LUJVrPqRFH",
  "key6": "5314XZvA5tKAQ95mX3oMV1C6Fm3kbxricfa9EivMPpaA3JDDajVG8QqicsXmfAuTq7xd63uMA9JtjLyH9ykbhhWs",
  "key7": "4XtYHhtPnXGpsDSHa38XycNarJT4XheaJr6Z2cW1Q82gQBDyh5oUctuS38KD3j1ueV35Q2ufs9RFz4Jjgr2YwRo5",
  "key8": "zwnoSCg65L1igdSBf6hs9mnoWNBTB5EzvjUMn9Z8QDy5A8d5g72dbjxXRNGvbwTo2DT2zCs3gD97ynjpMk8kPKN",
  "key9": "2CQubSJUExJm5EPsoZAfKoeceLVYNbHkHTSXG98ieXcS2ZqXabiqLD7bQWXzkyTs48SDBANwuU6LEFfkjK2jTBbB",
  "key10": "2z7qerQbDQJ8wytfmbQQPsocvWHw3pk64rbhp5X8F2tW3wo57MwZ8nGvdh95oBKmo6hAtJzn2bcewZy6D1NVhhAn",
  "key11": "3AsVG8smKVC8WfzczNRgvcbSNzZHMvWBaEq7pgZdGuXMREHiPCKX6MkFWURienkM6EG8JVcuj4H1a4sSpZuixDk8",
  "key12": "5efB6CmNS59QwbepPS145UVuzHH62qRhH271tecfQm3F7xbRxHhKa5xmzTP8mKgKoP8bGenE72zK5X3avd9xiYCk",
  "key13": "nejuT7jaJ7ERVoxjgX6fqegotPVQDJNWbQDm39mBPa5VK6KG9KBhpJuv72yRsKTiWRYeSLxVCwE6HqFP5thoin3",
  "key14": "2QMi1McxvoPr89Ah1BpBXF39CyH7BXRcENCrUfxyfr6K6dr3DckQ1grjBYzvEc2dpFKBeXCCKeW9q86kGyjqCcpu",
  "key15": "25oP6ova5dk9eNFcAi2xyzJnfGHy9K46yfsjAXNgmsujHMiAyA1PbxaELpZ3H3c5C3aDkdMXt3wXuNpsBTRzX4Ux",
  "key16": "2FsnJuMV9kDULJzBPK3igDN1PVzxQwJD8m5wkH9SsRUHnLiGdpdFrMCis4yN2Amptif2THqScTmdd7z9NFUVNzDY",
  "key17": "2Lz943nG7G9CzKxaGXKpkyqaWzDo1GJVzRAU6QMAuTMuNNh1tXWSe6976FJnaCXfXjKKry7c5wcgApMArszkxxvo",
  "key18": "3JZPbRLXjyXzHXb9T2vgb4DiDAwThftrzoRK1KTXsYht6pAWmTt89N2QEv7nYFFoBemydsVtqCKLZCcW1GTUu2QD",
  "key19": "weRQJQkrVmKD3kwmHWGUL3FYQ9gLHJDYJZoo4qWG8RxE3ufxywNcXKvq5m3vvhzbUyn4tZTGDa22rgWxqdmzSqs",
  "key20": "5Bu4VkdLhv3GEYdASHAqN49h2VqpE7Mjn8muacrdCAQJfhh5CecDBrNEayxNdNNHddVGFmMzou46kr532XCTXC7R",
  "key21": "511JV2fPeq3U5iBAze8QWvJxJvXi8q83HcQD9NNgnQCPKN3SLVXioWw3aFeBKBHKTv1HABWS78aqtjmFwisCSbAf",
  "key22": "qQ4EojPoMyYFTrckHbXkd8sh7cEEFCBKfmfrz9XC5wv7EXXSUrapx9iKico9LSb6k9JfuGxm4FKKFWxeTBaoTDb",
  "key23": "5MBiZNV6c26JfG5ZddTXXiUteAqcT8hzrnmD56sgkMDmAtVEkRNMM6yEF4T1RBE27cfaVc7NPMVZmfmT1NxCxXAD",
  "key24": "2gqKioKhc6HJEbrTFreArh4a1Npjppie5QW15o9GeiKwEPV1JMoayTxuzWEs3Ec5pPLEDebpfEafLFAtShLnM1eJ",
  "key25": "4J3ewyWpm2iWwp9C76kRwPf5KGrv63PdgXJMKVV2VciUv9qwENixyFUpXE5f83jQW4o5vd4HgTpaBcBssaNSKtZd",
  "key26": "2tgDQaBbdxUjXomyECSZYGXybWJHPfdyChpJLkfkU49B5yRUgCBnpRXns4DtYC935ejLeJbaXCFYhSZpagV5ps8d",
  "key27": "MnFc1XdDn7uuUXivvvayxgymPjM5aVhpXubjVzGDiKgRdMFuv6UaKrH3HxuUA4vLcf7n7ymSKyW3pR9sxuCi7uR",
  "key28": "3odypPYjRJDtfFihX7wRa8F7Xpq4vzSi1QcVAFB56r9E7kGMWfVRf6t9Geg5Lg7DJnUVpvJ33eQCijnRHF2LZJ5n",
  "key29": "52SnJkyjE817wXDb6ydB5Szjov598xV5zXyLvUGmQsPYMUypZRAwpNvKZoXQ3VdKTpDzDScW8tKjg8jJUqn2rpaC",
  "key30": "5VoqjufuWcJCS8JQobvhoYyUtLmcnnmxuDhgpFTxoGteHo6tz6saehHdVEbVBLVAaVFC7bv6FZnLpnbxTdtCcTYQ",
  "key31": "2GZFPb8K5PNWBSzBJfqKKXvhAUhNMXFxaNAu9Xm4w4sT9sJjqAiQFeYXxt85eV9YgmNhJaGr7Wi3dnEdXCk8DpTb",
  "key32": "2AEzUtRWFPdzbzyG23gctALWe9nGgf5DvR2tGiBqFdFkiWd92m48A7HTeWna8sJv4Dwd2xKetctKUb2bLe7JVzGc",
  "key33": "3FsbE7cSJ5pjTxUjvsHuvErhYYThxEPLCwRyjFdE3FtonjYEPQ8gmqAUufa8evoUQy1tWdNT69jYJVbgr5zTgHv8",
  "key34": "4NpjFSWk3hkRBfjeUQMc11opTKLXG7ppPrhC8HjZHZhwuEcfXDsUPEpabn7523iELaCYhmG45C9RtxsBBeNuCnaD",
  "key35": "bpxugSLeU4RetLFhu2uMawdDknBAsxDN6jCPcVx1b7p2qhSWuEZKykpGNA1BRa5DvTXBhLadaow7B6B4bECTgW4",
  "key36": "vf4QgNiKSX3RuoWLWfikN5WXKm1qxXqvUvSL3E8eU5NpSKQjBjFvHr46vJkrcYTbVc7viQS14fgj9AqEGy96BA9",
  "key37": "2E3xB72jP5dy5tyUdokNRSnytsZoNf5c9LyAXFMz4PoKX7CPhBVnhUH9RjQoruEkfWgEuCE3jqiGZf89MpaBsH36",
  "key38": "YpB1fSgZY69KtN5i6Q7qXMyK1rEa4GZM3V1jcZh3Q51n4j9nTGhaLuY9jVd9CfJPD6Ak5e9hNi2DEt6EV8ZrTfx",
  "key39": "4pCwg6nx26ptBU4FHikb6t1ySVAbxEuFxPmFyHESQUaAGiP8hkp4oLMx83oEthd6jfuxgJtb5bN5KVg5mKcG3Cbo",
  "key40": "S8QjKSrzAd1jbD8bhQmSgJgzuKYWSjr7fnV5v69J1yxFNVFTwpBpe8HPfGqQhjvmTSiFcNM5Na4QLFkEibg6T8m",
  "key41": "4NmeVMvW9as466UYrwsxYYkygnVRMiw6hd9Kaw6jnQghAdX64Gkm9JXg2SKJLAhRk6nVaEQxwViGwx9KwVMEqsME"
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
