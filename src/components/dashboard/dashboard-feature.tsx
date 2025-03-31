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
    "5fojpsNqmiMDaByzCbvUZkRvbVVRuAc5Duows98tchWc459aUfWR8CudusWXmDwXFaWSMcHxMTNUNoGxapMdo4UQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wghb7GnPNpPKwdgFNwo3pWvNX6LQuD38ATd5JBAhC1dJSX4cFxcxBGQnjP1hyzV2iJePwUWjgz7gPimj8Xt5qB2",
  "key1": "rY96N4oUe3frAjDi3T8Z9426fgyKR6qAXuLnrxLocxieG4BTfrMD79mS6SkmgxBskGrkUzF1LkdLCYPa6iEaivh",
  "key2": "3RX8VDDvAEMrM7g23Q6uxw7ncJZ5RPezKBENj7AzW5hzQ2hJEWd4sAy9PsKMfeaKndVnYAKqpbC8HasDbeyXBouv",
  "key3": "25Hx27Wa48yTxoqZMoPsw2bLkurvXkfsHxTxrH7H9QynaMCSHHDHCxRKZh13jt7BQc2ngMAB1P4kQxgXuo9Gbk1X",
  "key4": "44k5NGKB3SAgQcp6g7UefNxJZojWs9sFq9PJoaKWB8hUrLBaBnBWptRA7a8nFrik9orP3YLKHGnQqAXnk32VQmYM",
  "key5": "66mRdksTxVtiWdWP6Bj1ipexB8vvqGNaorc2E4N89pxVzovdg3h9oqLrfjnBStpRsEjQemowGJaEUChBA66tj3eX",
  "key6": "3cbQqgckdD9TH82Lkdkg2GTXoYqkNtQMeJNkx9Qw5mPg1gsyLgPVUNBBD5ozeJm5bKxX6fe1K5y7Xx6fmn755LWE",
  "key7": "5WKtXTX21bnq9vY2KW6P9eq993sde5yi7JYqTZyc7sjQipdHUfQF7nxoJmJJXXTPnA9GKunRJHYvowQZ2Wgc8qkC",
  "key8": "3BLwvHNHeNKxoGgXAX11w5T5DK34L7Y11F7MBE5oKNKtZTtgjjPrUNdg43ckrrdi8UB9CwvvnXJYLvAWVPStG8Ew",
  "key9": "ZPYhkfh5gHMkUgTCsm8xEycJH29G8Q6JbGaMGQ2ehonwBrEqoHLQSnKhVLpCjKumV52vzWTMpN5U62F2dLnkHLR",
  "key10": "59p4FoXmLC9cgm6aEyvB97ZrbcGNvC6TiUAYFGAHL4GLRiZ6JEsThVMriRDKHteBm3NmutMZUxbsSSSxyjhAV5MB",
  "key11": "JeWMG95GseoFWtuDN5jFCZVPbcTQXSSLkiFohjf8Ut3DPWfiyPipeLrwQtztbGjttSh5nvKFgY7ud2sEDdcYbzx",
  "key12": "5fotU28jizNJdPzFeJVbEcrE3LvyU2hVT9GTm5YNMt1YjA8Q9gv6ZxeHW9nEfT3xHwwzSS5iLX1vPm2qtqZifFX3",
  "key13": "21QqW2LQMYwi25HWEiRjxRjRffn19fR1RNGsNkKGbz6jxgEMSRSVkQ92nm9ZQyNjVpkqYyDCWNPgzV1N8AeFteoG",
  "key14": "57hNgj5hE4YWQXDEmeZhYmLERqQBKSKUMJf11USocm9LtU6M6qFUqSqQLpSR8YTqXdJQeJuaDsqn2EsMAs2CPeKP",
  "key15": "5aCPyFd2SyFBeKnXQffT9bPbNG7hkSV5xGVkgzJq8DTuxeqMDsb2KgqMabiMDN1dM1xqGXeA7dJaV7r3bQnpLDtu",
  "key16": "2xHh8wjAmAtas1VgDP3RUf2DPA7dLpzdGC8r3BURxvgffN5S9SJVG13tjbw85dsAi3otgXgLFp2WZmkJ5T59QbYp",
  "key17": "3v488cHcQTKmT8t2ToaXy2brvZj3EhkYSZEyW1fLH88iDGkBk97xYm5vXoyt3AbyyKA5tais5v5QPX8oDyYz5D3v",
  "key18": "5NNVYsbLStPM2XfxE9LFYavZjp5zQBMDRVNgqRso4QqdfUcqjEo3F3VKZHvYu6SpZTJWPWXaaaD9zczqwPq4n2XL",
  "key19": "47Dw7QQHAcRiP1zgKZkVhPyusocLNpw9ERwA3BrcEu7tXVDs4ahfZ8bZdtbaUENyjn2Hh4esz4m2WYQZexhVD2UA",
  "key20": "4RXtuEBH4bXCutHLf9vVVL2cFa6fQgwtuMFjrbTzyb3piHzCbLt4TfQJJA9P6s1QTerikB5oVDYGYrAncgoqoHMc",
  "key21": "3VRJUqzjpqMXTSwAjYLPXrzoYKn33nvQKFhUJ7tpvP62whAchmfvJkzrC8d1LwXeAVXP4xxoMeuBHi84PtcWXPwH",
  "key22": "52AXT1utQoaC6t1d3JLD6QBQJWjv4UU87zGabB4Tpz3dxU4bBxAYGeQQyi9i92hQrXoUatUuGTatHFxh4oK7Krmd",
  "key23": "4RTCpoKCS7FsnjGj3reffrjgmM2mw6i3QFsEwFL3dum4N4pocou1QdBWH48eaD3KpQFgmWY7EF5oqBHKofZBhf6Q",
  "key24": "BKBHdua6SUj2g5MGy8faufkVRjoiYAdXoDDDR53yyo6Ttu8BwQMiHDjQ2MYSWoWsAn3iQodPt36TJNtXjZGwsPD",
  "key25": "35WEnEpag3UUTPDntWm9LyjVmenmAZXoerw3yMv5XjVTmFzCsr2Mvj3wa3bGsvLKZ4HjdrZcjhJTqxFDtBJyxU14",
  "key26": "38bG15CjXhZ4eoyw7nSWkUGDC9WvVyG47kMMEAq1P2fW5H8Ddjk4A1tP6LryC5v5CGD1jid4naEBa2AAjNtTejLQ",
  "key27": "nyQzLvp3DaknWDZMyyFzESjU73thPfVK6gXcd2opE4pfnCnRCn91UjJJCEYagd4jsqa7XN8MGs81zaL7Qb5FKrm",
  "key28": "2njLWJqtzsC4VXuxNYeqHN1FXMb9BHvVyrQf5dqMZoawDs4u24hBBFRSaaE6QoS4ni8so4jNbexsDWcpF98uosYx",
  "key29": "42MyfbY16Mff2oGoukuzuoPTFMegcLB7L7xeER4ysAvjy5eihEhezSGEZoVRVfRZzzmsq7sNWBnTV3ww5S9do37J",
  "key30": "4HoUL7pmrK9X72kLYe9D6n9uTF4fDUMYBTSrwP7hsSayqiWijoRbzhbVHGofgpRKnxvFMmYfvJFmSNuyahhMZGPb",
  "key31": "3vm9ffdM61HZpFaMdmU1XzRHFrxkbgH3p9ERBoT35t9eA8QfBagdMmNW8ouqUQUiAuwvXGSAvnNnsebf4Bu6kuKe",
  "key32": "siz72C9kqLVjEHW8HbAnrQwb24LNXyjHnEPpghvuUgTUuS55UN3yR3yh21j6AEm7Rux2H5EQGnE2xuRiqmAq352",
  "key33": "3GKCj3GREedgoXSDEAaxzhq4gjEM6HjQwyHMnYUwHThjAo2nnrrZZ6d4H7f6ubwP9RGxzi97xwSxKiLyFLzDaiDP",
  "key34": "2Ba47N4QrNLscMfXd2ea89oQsoRecKuzMSKgm3JEdxD9af48fgXSqEPwBkh1ULmaau2vSFAoAbiP3Mrb78nCKLae",
  "key35": "2qWg2HqDKtDy4qtF6Q8mtj5ZixRGYHnXcK1r8oFNp2yQY8cfrdTT7V5jibsWr6uWpiiAKo1Br8h53Er8MBX7bb3Z",
  "key36": "4pwsEbSaihUMNrNox65xc8imDDZHqTLuU8GrQZfRZAaSkKDHf1smP9HSsPHVXPT8SUhJbMYcFEufvQS2TaV4FBYB",
  "key37": "5LCkjZMWDjH89pTbPX7smbtDrcUbG3CvKaJp915cvA5ZmMu2TEivSmt1eKW74qfT2yjYiCVmsNoNUPXz3K5FXTbh",
  "key38": "5J5wy6dss3zSSuCiuagtQ9LjiVctJ9aMKyUeP7revLvQJdpRUs4gG7zwqaQq8b8aG2pm4M8L1jN6bjjzMHeL1H2j",
  "key39": "51fURSeHB8JzETWPaWh94WKeeSyhgDw94HR7qrfD9GQDmqSnkAKxjibeYKbsfhomZeT9AgW5C97bRcE4ghKqbEyj",
  "key40": "5vyQjMqCurgzt46PBneCHLaC49pU9d8KdmFqJ1VHY6MvTvVyqfaTicUsR6xNrMPNjZRQ22ADvu8kZynSFXZSMKHQ",
  "key41": "5UU5syNsxxx5AYAiTH6zVexywXEcLDJjPywLokskoXCfBpvWYiT1qj443SroDWFohduCDWRQVycmLDoG4yFvEaPt",
  "key42": "3Z3jQeQaNpWzw3YYPGU1tGEyhMzcqjYcuenxvMmVDVUtGdmDX2L8fVjcjQmbx9ayUF5s5FtTbeaHdKyNB5eosK3f",
  "key43": "QHQers8J4HfS9yqiEKgpCPQPdsCyXDzPF8e4fTqLx6zVqeFuxqYJv1N58d9KnLMHTcQbfDxd6S1JCKqq2Xc5ZMn",
  "key44": "3mEprQpFCVEhJZ4d6WttJvLZztCxH1qoa9UUZ4DAUoPbM2KfZGcoktTYLA3vktzGefsqnoX7qV6P2BCpD63RKAhS",
  "key45": "25Gm86wrBAmqeCroVeYeg7W6N3sPCZCfbDeT5tWwbnoniXTy95Q2PaQ86JRKvZPU7tNYDgiM2rAm7TgSLQjynm6y"
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
