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
    "4HCJK3J2bM9k823XyxCzbqJvyPQ42QGoWzBYyeu2ZhcMJZgs2xSbpwgzfUejiVcspbV7QswtnP4cg1K51Jfoip3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XtoAM4r3JFZaHgRJaJCsYLUkKYGYCw8uB7xE4PXCUZ4Khp8PWR8Htm5i3qizRvXLmjepm9k1kcjDvAH7jPcjiiw",
  "key1": "44rSXrcWabzTKfA7Bni1DpU5ELM1ZDcGzoraw98xRYa6J3fL9y4RCY6fJFVzHj8oELiKeb1TmUWjizbvdqorguVz",
  "key2": "5VZ8eigG6MUpiAhUJZhaWMiSrQ3rJjhhRpaaYrgnRQ6Avd9eST6vhSXUSYrELRraZ7VPZ1j6PCQ2QeZmw3tu5Y6r",
  "key3": "3WzPwDoS3jbpwhu1fbLR48D5ox2vSH2pPBtCd7uZx7str65iuDmb3dQmSiG3vMHd4DAmfRZGQDZWvMozVfcLZpBw",
  "key4": "5xFPjDTXdTYZ58eMYF5T73ASrzJyTJdp6Hq8waNowfFnVk2d5KzBVTScVrma7doHQFEPZVjCZc6wdkStoktpYiNX",
  "key5": "54U3BaWehzw7GSHqa3xzBoBjJds4H8k8fz5Q2HDZLu85z9JM5ukXMAFjZTEoNVEj89d7TA4mndsRRUeEziSuznjc",
  "key6": "31dfmPz92XjfqNSDm9zeNDufVPcs5ZTpxKZBAZLyMLwAyveApVGGYYEdT9C8SvWHcWwoiZK56hD2Wch4ndz5HLrT",
  "key7": "NPAk6LCMKHxu6povY7pbA7E4RKqKPvSvCSj4PCCsF2GsoSUVinQYoEC9rCEv8GmYVV6StQQhLuBfa7uQxxxoVfg",
  "key8": "5BbARKJ6L1XHtBiPMJtc67haPmoKEQDuufUX1AVGWJBPCgBpL4ZuRfRqgusuqPzYYxzhb2zrNQXxM4f9P3phpW7t",
  "key9": "2JYZ8qLuW5H11taZWbbaZBKeDKKPZphMirJwUL9dGUr5ET8wJ4i3FmUgzkubHCqLhL4d1Nfxfg9KM7dUBDoBEDQf",
  "key10": "34mFdqyfbuyo6h13BWGaogJM8fYmHDysbNp3i1edht4U8PJiVEQSpB6ZfiNUaza7JDeuR9ubXbS8intB7oPpAqTE",
  "key11": "39rwseRUByfnwcn9iPMtHLdrLVtk1kfaRtTdeeuaPTnZ6cshyzMf1WQMk1BVJgkusMcTPgDhRkM2x8oRMeMRtQRY",
  "key12": "2FYwr7gsyhGapXYnteMLUw8W2E7S6HyP1B7jjkcRaxHAPyAp84Phs4B7m6LH7476iX59KmLDh7PvduGxTHwvAaf8",
  "key13": "1bMVJFV7b4eCecz7ofM8RthfLqjS7RieybNoPogZEFPXQQwrgGVYzMoPEX8T95vSaDYpDfDVLf8xHgQcbbythgq",
  "key14": "4f6TrzgXs1Q4PqoyTfFgXNtcNMMvvUKdCCwkMdj7PVGGFhDHWQ3oysgirZbFzMwfmmxqp1i7poa6SrWFgRigrv4e",
  "key15": "mYwUK9xAuWk5cPgUhQfnNB5YipCKtsoUaQ1UR9RoDmK3qHEL1zwPVqj6MC5ModME5ohqijsBzG9Hr5ZgJzz4a5U",
  "key16": "2ZvaGaRY7mQFeDRVZrBLdKhsSScGAvWbM8xqf2M6kRg2LXzx4aPmDKCEMW4m2pDFgxUkuvvcVFNnmvP9Ci7CYde3",
  "key17": "236u7zQNyGE2wJJaBqb6sfabxy3FsYy9KsYvzDdNnY9WMqjtPok8WNpd2kCgPG2dJp9AdiMeoJA2L6xU9iPbJxrp",
  "key18": "zBWxHNBpAP9siHXDJE8Q2116xtQvkeb5r7iNmFro5JgtrPCChFBqR89quS5bxyLNQNbVVRwXnay93zKw9LvWf1j",
  "key19": "48Rdz5aiw5tMxjY2w4ZLuzmR16szfwD5z1YeLqncGtai6qfrnLckWRbSCXAv8GYGTRpwMtwUJgW3pRScCNV6FqR3",
  "key20": "2mv2TamNnUcPVP5SWZFao4PEEhkHsSt3t2kE2VfJXtZT2ARVLptBGFMfQsggMQXLsUkBwwfsCsVQdaen5dZBidu6",
  "key21": "jEXf7kxd3sdzYA5zSoB4hC2c8dVkMcWN1RVEz3eQ6NTBAEih9sAqPfynXGTZu7qMHF2qrPp7NWZ6Gvc6rUUo1nD",
  "key22": "3XbdaJukBjjGHfhZimJVYk4gobs4duwwWkacY9NLQsgHJtsRFkfXrx1LXsDB8GUH4XiTTXXEebrrJpfxe1y5yDWR",
  "key23": "2E4it7T5gPTv1NTMn2JX3r4MSw4X3DkncNvizCqKX96J7cR1WSy27UVjE3LubTXgxbTYtEgh2uTwDKkvzexebmSs",
  "key24": "VNPU1QCA3D5NSd5N6yqcmsr87rjvuNzp5CaW2d5qLMd4WyJLPw3iVcoZxHXmB3mw5ht13H6DX89sqpU6SyYxPHa",
  "key25": "bD6yXW8ZVkLb38rbsKfBrirPn8wDy6r4Y2kpkVdfrC5sKG6UkVC4xQUbkz22Dj1UaAHzuP9yqei9PNNVzVCjemx",
  "key26": "4CWJtx9Wcm69fHX3zwp5wBEByk1haf5Z63MViirmYJugyhsAkC8DweZDEkRCpu8cboLufVKzJs4x4NBA89hskdU6",
  "key27": "36js5K4jAysJe82Khe1mKWJcnzdKKqJxnbU9YyHYgecHKdsdTY4j6d6aYPEMZMQ1AgqRTxUyV9Uct3yF84KTeszP",
  "key28": "4fyR4rufZo7t7RHGjREXF7mr24GgxUrvffBLQXmDp9i1ZkCJ1XTdDCr4sSuYH3HkugEhArfbcFExxdccJkDahWad",
  "key29": "4CQ3jWXn46YiMkUNHceZBQBm8qu6zTkreiTgfaNR6YpWFyrsxz4zXPonDVuNDZRtK3LE2fVJyjmbsufmgtGb6e6p",
  "key30": "4TtNoNM9DYwkg9mi9PhMR2Z395eKTuqg5MAxw26ypws37nDx5BoXR5RnrMst3da1i2QXh6jdHHTNVMRTR6GBDSfp",
  "key31": "2m6vXWDNXpg9XF9NAgTfuiZyh4ZRMEuPhyNKbqfaTvoP7i6dvyhnUEazDv79erkAJZZqs5dgCZBiGioua9QDNAE4",
  "key32": "5kLzReaWWgrDMeL76MTQaD73km1YWLAtc5zbM3gxGigDymCz2Ja6pkAXLSi4xtkve35g6VC3QXqykx3j3GpgWPSy",
  "key33": "g3zdkKgcLHvSzTLHLwwjskhSRNRrjCPTzWyjer3Zh1DcdAhM5Ch1gUkt5ZwvQkBk3agyAYcmAPnuhmXYhQynJGf",
  "key34": "4Y5Me9yeKxRNTWrR6wejFqq92T62bsGdBy21zo23YUXFbYzRsMg2UyGjMf8T2DiHCbhUv9JqdMgnVrkH9NDB6SzQ",
  "key35": "3HoQNSLAGyjSZfhUCrXP8q3Pgh5oioWBKSW5woAjz4znjHgvHGoWWrGdpEMDsFKJ14PKbfFeBZRZoopnSeSrptWu",
  "key36": "knyitsZKZaHAmfg9w6mG6xtDvvtuTV1MWPcKip2sRJ5MmAs1VDQYTz1ohw5Bb4UJKMroMT247nWbs62TV12ggmT"
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
