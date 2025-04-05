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
    "4A6D9xWon1NfUz5MX8yqYqDXHoYQooqBSmAYfUSmCyNCxV1wrNAkMuT2bNDRRW6L7DFzg13Tqkj96fokUG47JNSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fm8Xqf8JcwnJAeU7Fjns8Zx2AMCoz2k1PxFYcN5XTdoTbm6ZCrAed4aJuts7XcrfqXXBspFHTK7c2U439j8XyPP",
  "key1": "5jqj5icEmP1cYXBz7bCtjhJHYz3d8oU2NT2rD9wdZopqHypFefApWvixYzKLqXZRXR7E2qtPKU8SyeMKcbRnb2Wz",
  "key2": "4tLUhTDof6ssCs7zdGeBiDdWgocR4MeC4ps5VRF5wxnSQgqLdDGrXgtwKoTqwwC28uMjw1TJVvDn1DaRRBJCyZT7",
  "key3": "45LwKWiahha2chBh18kQHkFCpD2LSQ4F8DNPEJXzEAkevmjZwF5GTxnngPBjys8yQAx83nP34Sza81uFuUqFKzdu",
  "key4": "5MiHzip1r3VeFRdPJJ6QQeBxWSABgjE5qapoEFyVfvCHExUrnJAYDU3LED9bxkr7xzi8pHGft7Um1mHgpJwVAGXQ",
  "key5": "4zVG71AxUSAJJHAjfh5cyJhcxAHQMQbJWumx3V1oPPUezjeKGSHJThxNMJo8jmeUd8JdVqB9rHVuXXCmug8rHoEH",
  "key6": "5LgjxeGqVkM7Mo8fpBggg2QKcSB3nxvz8w8WfeV2KVcG3BfiHNexCq7tTm5f3JiRqxE89QMARJ5Ff5SivMyDYNJm",
  "key7": "4373ThSE5AK1XoCEd5z76BmTdJXqQEVzp8M5PrGnCP6ixNeN5ewg3eNMmxfQuq2cP84eQUAz9hksptdnPWeSMLfZ",
  "key8": "26ugGVfh6HXwsgUjWUQsnoQ1m7v8Z1iraLgSp3rJbi8K4UZhRdP1QRtkdwy481ntd7PMUGtxPJzWmtEcR3CL59XF",
  "key9": "244wjSzEFnQrDcpyDjJaGcapnTKp8hRu6FomwwdE55HNMkCsuFngUry6sG2MTeXW1CmfD2UMz5t3UXVGBBvQ11rE",
  "key10": "4as617rusJ8XqrbkhTpEQVSpP1yFDctxZ6rcivtEkXEEVh6Gdv8Rbbt9GqR2BRt8bfHXv6RRZxvvxXACVnqRxk1e",
  "key11": "2fCx7x1TsfoY97rBjappdAsmuWUt7aZmANEaB6dYVmenniQC8ed9Qz37hQomqDRRk3nmYFExs9yQtV44F6fjmGiF",
  "key12": "mVi1cqh2qfrdpDKFU9V58GvCqP7GXm3t1adQ7gdqLQ6B7xkV46BTDdQGD7rfjjahEnjewcm6Ka3d76uT9u4cj4k",
  "key13": "5SPAC3vNe8nxxgzzFN6yZg6jPyEw1GXRz9oiQ6P43GrFuAdxH8Wuzi2qdDEnxeCzH5LuEHQiNtHnFB8kTQYuwdQe",
  "key14": "4nLQBLuU3wtYSGKiC6Mu1PtZK3jAq9c8SJ3XjbzuRNLK6b48HEAs7W2CMA6f7NgdAhap1Z1xY7kPhyj6EhZAZCwQ",
  "key15": "4RtbrpUTbFrXCRqk4SPpGSqtimebtWzgCmT3uUUWFAZfizEQNQiVFJbjQ7sGP3ew9kEaGFDVrycVbyxYRBu1dbty",
  "key16": "2EnPJNaCcrsJ2c56AF1V4ZKGrRCcLBBxDEkye797YQYntnJBcHqJC4KDscx2DBuBTgT97boGUQA3BftPqih3rCtP",
  "key17": "2EXbGHBBsYEih6YB7uG18N6YgmgzaQM99qvuXbVLCMZisPTTeQAkSokPtUJSSUo9EEovcLJnL5g58SK17ZVGPbvF",
  "key18": "GZDWhcaZgXsXPyq2P9dvg8hhL2BVh6o5Qde1kdRWUbHc8iNPCatBfUdnAo2QC5nsxNwvxtjFatKFh9KRLdpSiWY",
  "key19": "2srTVTQnaV8ukRMDs565QYg3wmmWdvziwaNfysfYUfEW8PZUcQvF3qFXSHv9hbwThwZgQbudhcAhGB4xgtzGDVfM",
  "key20": "cLzZd3NdrfBRHkMd66sCV6hqZjAwFQ3RfETpufPrNFHv19WfXXKHj7ENj2P2g7XseR4ioWUfiY9kr1WdC3GzJH2",
  "key21": "4bsYBueTRPTRZVZ9bPVksm1MYCzCoJUShyHXNBq3mznnwiedErSbS2jt6x3mhETHPtuq7hMP4MfqdncyMHKqHe7R",
  "key22": "314hWa9Ho1psjoamG5Gw8KUpTFMZTaofVtDvxvFCdMXkYqUbhdNvGNCmQAkpZd5MqBvidQKVKUvkhTQKaRPbx9Rm",
  "key23": "4SNKthTuKxh8LoLSMjdetMeb66tm7nVKzSr2Gfactfmdx7YUUHU2tDE6QGM8h3RB7vHjpsxdwSSpwqKb3q3eW2NQ",
  "key24": "22RsHjD3M2u6adBtJdYiJyLZDNTV9KQNRGYpSGnWue3zSMdwTCbyxjWgZuNZVpXuQ2Jr93E1ABNFHnfpnottC2Vm",
  "key25": "htvkPQjc8drqNAU4fUNHLFpJkFA14HU4otVTdqKczMekUdVQjBN1LhfkzNSDeQqrfrPGksq1XDrzE1SwXxa4b63",
  "key26": "5JDPKVEUUPFnYMPVxkawnPCYNUo1Ah9wo2HQqvXqt3pcEcB4LK75rvhNxvBDoqMESUdBr5HngaAtfcgLYMxPVFoD",
  "key27": "2eigpLgemkrw5ZFMrhHGkcgVUwKP4SicKW8CaK9SRHCjjfGha1FA4eQdEMBXiNocU2RemTwNBFkDwskxbwh5Xwn9",
  "key28": "3o3fk8CC64hmMRpRgsTTs12QMW71TTwbbuqv2zPJxw9jhvXWUQC1faEwWakFUL5ci6xDRvFFRHQ5Ab1EZ3QmfBGB",
  "key29": "Ep3RuFVBQhbqVkcJgEEDKbDXy1i9m5wmegzi8eTp2ZWckrffHFuatZKGQwTXb3YCbpxZNSNGgidvk4qmX5yGknu",
  "key30": "4hxsstLWmbZ46qrCXPZTNTnuLFdRapGAZGYtCS1yQM9GSPMGE3Purn56uZKyQTsRJjhctZuzUcYSzDnPsHUjDx7d",
  "key31": "4G1xU4jGSdDvm1Ju8QVTBN4YYrD9StRDz7gSq8JWgSmGtFJi5wHwCshU197sGnuRUhqD5KJUK1cTfH1813BttBoD",
  "key32": "HXyw3ZBwVpB51V2R1KH2WfVkv7tWtxUHjy7ayu9yFEVyJBC6bbsThjvLrN9jZzHWZHwEQFwY9Dc4dxPx9MgVYQJ",
  "key33": "rjzvfTTc238HKJUTvmxBu3D26YEKHfgRLrVvU89xx37Z1ZPieBTrwxniF2k2NyuYrzx5EFYF2ZpP1ZepWViPsnW",
  "key34": "3QK2FxZMudovUHPBuQ9D1w1AKcPCgi3MVPrxB9ojZU66Q2L1eDVEB4xWSYsXAgHXiZNfyeL7WLYgnWfPHAdN529N",
  "key35": "2KdejyHRFUtdkprD48hdGFNts8KkfM394EmjYcNAUfkrRFosScVa8855MNeuaoSjmYms2nDYQXVNjbaZSh1xeWo6",
  "key36": "4u5zG8aBEZksHYhnqWPe6HJKkLjXkw88eFXkEPjbGDfssgquH2NaXcTaK5gkHCCtqusFrEWBtT7BS3FAPCH9uu3A",
  "key37": "4axMPAg6VME3MsLwunLFXX4oUnTv5971Diw2gEeQ6HkW1PD1mmi2fjdQMWkBzunUGWWG4KwGVsP5gAwj4PEcnJ6C",
  "key38": "4NyxbShnA8UJQAnm5KJdrrEixYDzk18eChgj8d5ayrXvoLZ8FPNXUTwV3RWeJitaJH6fiiEd6FoyreEuF8VmUzon",
  "key39": "5kUKvkQ57c8gSAZahx2axzo3S9T4nSm6a9BaF4JM3R6srWV2s4r51GNGca8bcnxE1zJAzB1LPR4R4sXxX5YrgRw6",
  "key40": "33cVGqj5nxMffgxm37gh7BSBQFg48s4DvBoGff9ojVmZJVKXx1S5kDkVHDJ74GbM8LX9SH9ZtNdwU4BYVYhEhT1v",
  "key41": "2JuF3TfffWsc81iM3uTUrfeApqJaoZnVy7d8AQYuntgCUf68BvEJ68d1ZGTK4ECAu3WRVaanLPQ6Ag2wCE8UG7bS",
  "key42": "3Mw6LndAx5nSMzZ8q7C7f8fxnyq8ahVmYgZBdavAVRTE4vwYFoSm8ULTPxEFYM2tcpqUvT5nm8cmjMVTdcLFUMRu",
  "key43": "5ywD7MdtJKv7ohVWBqUDzY7Pg6LX4EiiQCEMdQ79TNp8wMwPKrgfmAZZAeUEeuYXicke2mH4VyCRqnVMpZnWSbuX"
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
