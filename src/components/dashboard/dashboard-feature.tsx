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
    "28XpdQZdTGP3FizA7tyDgS5qhcZF5weHVD1AizqaST9xEfVi2bq48PerC55UbQH6KKU3SZ22H3Jwq6RWJH2vdkd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fgnLMduqrA8asA5Qoy65RvmaPxG8EKCXxbNYELVazdQbEagYe3x9Uqu1z7YAMx2BKe37Ao1Q7XgsuzKA9x93iZk",
  "key1": "4qxsrYJ3CLUqbtqvjV9tZSWBs53sQfsahUXZszorzrjBVfeequksyHsKrpFd6vcpZkrZDwgJcckre7L2ZfG6PAwQ",
  "key2": "3J5fsZ86c3tAX7ZjDeTMNsC2QBcZGXD5yoMZYQqhwA65nDxqEvkLFkGVVys2zKHitJNLK5vyZckTBMRvx7cCpHPr",
  "key3": "5wx3rdCrkqYd3tmDdsUXkzWD1NRt34uvvFQynHgbYxHubfi3gcECj8WxL8YC3SFys1iU4jxCH5qDnC2safZ2sNjG",
  "key4": "3V3PqW4MEE1w9AobtJFJpn8aqCUHmZ4FeyY1xhGAgDLs7K4ZXuyyDk9ZQsCvTyCtCFJeF2bRLKdUz91EfQw8c86J",
  "key5": "kVm88y4ujv2dYAj46o5tanoxNpRBijmCGrwAFuMnKTWNfaJXjScohKqPH4Eq9G8756gxrUx6xhLaP1oi6veX4C3",
  "key6": "4EKHGqSsMQYwnMCvs5JGFZSmBaUsDHku2BARLhwMoLfttr697gK782my5p5yoe1szd3AqZPc7kmjM1wdaSsg5pK3",
  "key7": "3i5CEiaAHSgpApGrDApA3HZHsajqhLhPyL1ywtXa1gEf43xgWQ9cX5TdZhvh2QESP5zAarYGiZ9cnCUBwHFLSVPB",
  "key8": "2vxdDwASmkJLtLzN22gLYoAp9MRQuxJfkfMqCjGcspdZRPmC52ZGKXGXAnXYKDEFReT9uRx3R6mp384FUmT2SGVs",
  "key9": "3YwWHPaxacxHfP1oxC3EqytH3C1VG9HBLR4xcxjzV9pJY1B6gsFdpBzC7P3PdsyNQkA3hzGm7aibbNr5dzi67SJM",
  "key10": "3J8iGapmmnSEGXFHFoBStaTqtgYaqL4mZbEuzywa8jnMLzpC87yLrJqiEqTDL9RB9WEtqRv14rS3yK7eTsYo92u5",
  "key11": "3oYkjvKQ3bN1AsLdKFkL6iXSdCW2ydpLAJfsMfDGdAsTDLZULsxmakQKSa4KFJ1V1RYqtbSA26dBjiiCBa2m2t1L",
  "key12": "5fcjGzCPEu7vo7Phh6WDKHKrAnxji1mgCTrwZtjtykF5Rgddt7isRSzSLeGKsZRDpacRVVSvbPivyUu6BUZepKJb",
  "key13": "4TG1fLz9nMRcgmnHt6KQhR3TE5WWxofmm9NoA71BNe1f9YnCFWVsBhrfTWQQmqYpekPeXtxCijmcvtwy5EyDfnGt",
  "key14": "2WPedHNZ4w2C2K62m5VBCyyxo8kWRshXWJ7gx2sTmb9c8m5xr58Yo8ecG31rL2CSWURRcZMLt9eir3CTLmwpUfb9",
  "key15": "3eRdbY7oSezWFj6P6sKRxYDGwq8kFG2YGxVaCjzBsPSsgjJPLfZKJ4b59o5SVVTm3fu382Gr1JkLWtabvy1ZPUDP",
  "key16": "2vng7H4b4mzrGVAykQyd1PcRixPeiSNNET8xLFXGfkLmfXjYAGF9QnzT94azvxwTL4W6nZaZBEtSSNo27kAAABvi",
  "key17": "5yCJ1kgCFzsprqZ5HJTY68MFEqvNeQ8GPRTtvAbqfg661rPoUL96MKoxVQVDd2hBHujCZSg3AnSTkNsFccK61KBL",
  "key18": "2Vx72Myd19KKLoy8nvH7HLq53NCj7DirnfyaeZs5NfotRDq9BzNbRCQf1eUVopdPpRFx7drxxWPybaTtoiUAigd9",
  "key19": "44X8eEK8DkBNJ9fLe58dxy81osMrsAsZKJdC9ki8vtPdfqXAkwr5FmkvJM8oArY2KGsn7qUBxWdBsqaAnGVq83XR",
  "key20": "2b71g4x9k1XrfBu5dQM9ZRMJtWDeJmeNFBsX1pvT7Gn7wWFf1XzLaqp29xsyLtNBCFeF5fQXbdBGpLGcRskqNEtD",
  "key21": "5sXq4dyThpgfmW5FGMHePFK7qwywdui9hDtov4U51XJtEghiEv4v1qRnSL1Zfmwbkq2neTYftcYrefBiWeWx4wQy",
  "key22": "34JCfWq9kW2vKGWV1Erk2MYkRLYAzV2p4u9ohL2ftnu4m8x7W39WRFiHG9cAN2nmSEZNVFWMVVhsWBck4wkwvGXy",
  "key23": "4xzGfAqPHFG1d93DiUf74jmnW1n6tvndYxJuZnpuXETXXmN4qrAecC1rBsgRFAdjFF4CZkXwMxiyfDNAUnwWjxjJ",
  "key24": "5xMuV2RZR1EpWGCKbKWMaQ8t2RGDC7wi3uT6yo7ebd3XZpxMXHyBjRjR2ubw4zdDah578wQ41A3g2fQcVbqPoykK",
  "key25": "HpEMiiC2CaM31DpSCKsFAnwhzmvJdREy57cv5MQen6B2rSD5HY6vh1TVSACqhAmiLRZuL94ZuZZFfPaKiuLVHRa",
  "key26": "4Nbko9QtxPzJmSq9x3fky6hwJyRgZPLCSCwAps6bqWbFE9ZcVwe2VDq3bfFrMHjiFp8bYFhuHPaApgAZdX877EvN",
  "key27": "KCHZ8SF2HAKhVzqKTtNssJ9UtECpRUUhxkDxSh3iRVuzrUS1xasn1ddwFo1wn3TsecqLa5H9iwEYTYfFpChDtGE",
  "key28": "4UsAcZzTpv6sqXJ86CF5hhTpbpMVoCxPYQBfdJmJgsZhCCgQHh3ShKX2sV3v22ff29dycckXBhx6ABfe62HzEETf",
  "key29": "4c4zEVrQT1oVfhbqDdE3N89bCJghj6URRLbWG53Jqfz39aUHtEEhKKWLqijZEamgQmgbnHMvxmBpXv9zrM7D9g7W",
  "key30": "2bFqtp8TRk3jXXBwZ6ruzg6yAGzYt1n9TGVc9JgZvicN6NRhJbVxKKYBTaDrecPL8fANjFQvfkvkGQGsMyFaZrHX",
  "key31": "3G3LheJSEk1Gw855f5kARn9gVmJQxmy3JkRt9kVoHx9Zk4Btp2eA2ugjsJrn91FQqkLyZqmKM5ghqRpgMp7bRgBx",
  "key32": "4HFEpnLXyveS61dcd6X34pgUHiERpQTSj8vKGSS7CLkMA9TcK7Zsoo3G1tUHtjBwXsarY42MygwQ8U5PA3LazxUG",
  "key33": "49aEBtnUctZeYCyDqStG8yijBUVcP3WAqYH7u6iRAcChUqAWxPA4aSbQ5reSBZ1pTahMLVLhr6vrRvGEHV3CNthr",
  "key34": "5ZzpKbJZUkPvM6if1frnafQHYnTLjgGL4QSHcqN9fVXbFSfHFojCbW97CuW3Tq3At3qAGjAEo5iESkuNB1QxFEot",
  "key35": "56tooGQ9DTSgmW7RgN7anaVzrBwZQ7cmWqSh5Hwe3RUsk7ygWaonGjB9PS2wsR7F2vALBCrntk44Mi1CbNzJfZjR",
  "key36": "34au754BJ1SE4bV85fUpoWh1vZ3aUJTMFx3TNwmU5CNeYchjHscaVnH6gqWeftEU8R21ETAYgDyVRsaxWyWndM72",
  "key37": "TNdPPZDzGEo1M214WGth6XwjbKbnsbFhGotQmzUjxZedbY1sapwz23uyrrKQXVtmqtqr92ZkvdTjky7Sabi8CSm",
  "key38": "43cRobhQ3UKHCdoyUEmf3ZQ7QoBM2i73Yqe4fQuAX3hjFv9oxQUSsFon6KULQyTzKRUC3FXh72WfKRT4Nihh5C5U",
  "key39": "38CmrGMWzizZZMzSb7TCpHmiFXXxTt8hCo9EgVip4gFtXgTzzK6oLARkZRCC2wPxjMwfYgMa1qcXnJskBLaySYuM",
  "key40": "2ERjRr11LVyNr5J64buKehkjzhSHKeBv2p1M9sGWopZw6mgpQbTCp2J4JEct8udGfY5k24FEWmTMv5mYqpRWMY2g",
  "key41": "tGeGj3sKxWqYywTgpTFD98JBZRRq5o3G5TpvAkF6YLcDhMcUnF2tbTJ1Gk1zSDJ5ieDv2w86f8RWD5fbdfNC9Me",
  "key42": "4vAKUBaZq7Dou9toRKg9uscoR5AAcBtiTXntFok8iLDyr4FnnvJHYU5BVe4MjvV8HG4ee6pHrUGv7TnKRHRHchLw",
  "key43": "2gJQewuRb2yvvUuNnqT2RZVpsbhwkYoYccRVA1VQbx5mHXsX4KiGfYzH7EhKvGR5yqKY6yLKnfCzQnrwk4Uid2qx",
  "key44": "2aqtbUZgdHWLDQx1dFD1x5Au75aCk8bL9E7WLqYDUYZY6Pac3M241MzEL2jaYdu3cjb1o7USLL949TxnLpZmWLJc",
  "key45": "4aUpLZjLdgHUBWsj4MKczki7xJT1uE1ayfZT15XZ5Le1UQ5agfhwBbMpYZAs7om9MKfW2N1HP4NVyTDKy4hat3ii",
  "key46": "2A5FTJWtZM5ErEFnkEqiCY6mSuvwEgXHXNwk7BFr6xtve1w7VSkTzdw5m86Eftn6M84SuDqoFGtkF9QDox1gHGzF",
  "key47": "2Fm35P9rhi9UfbSKTgPm9rviv6mZrytYAhf11THKHrKagUP2hVUhXdmwZkNbtWBaYV98CKQMrPHxfXeGTej5Exr3"
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
