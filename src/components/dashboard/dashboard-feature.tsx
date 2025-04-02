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
    "2NswsbTDW8VResrCg8ZkVbeZWjx8rH27uqqjTayc81k8UU9eQEAgkUHAK4aBve3NWxbRt8Q3sAW95NRaZPXC4hYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nYhAxjQkHy9txdSZsAzzXZ8QnpCuzKFPmNfkjkGydZbkkC1hj9S8hwo8HLriK5XTuFgWtMh3RsYiKAinmUTgdrD",
  "key1": "4z2QeUnMLEGiznePxvB3dDsRKDs93r2L47K8gpu65evA6YKzskpix2XddLBp4NyHCM9rFakacDSedHWWbPaR3PvU",
  "key2": "2tokGCxJfz7ALtdUqFMGBxHYyFk4BmtPaA3Ah3HjavXESbyaNAL24gWdBnynJGHb7PU4mub8VMntR2jXUFo5mz7d",
  "key3": "5d1FkMCgZNJ8bdaExp8T3nfbCRG6NvAUCxE5AXmLsB8ANdNmkFJSXvPjqUauN13aYNmLJEJR9JnLYufTRUFtHf6L",
  "key4": "ZLrMm4dN9boGHtXgT94oGtqu4z4oMeHzQZp4iL7dZh88naFVsemQCCv5TwGvZdcRcK8a9BXpjyunKZVLSBZkViU",
  "key5": "3FGQzsoz5x9Rt2LzEJqurfZMHdipVkGHUH362oXGvbzm3wU2kYQmZ2BWz2z5UwSghme1mZHgHAAxRzyS9oYyhzkw",
  "key6": "2JeCWQBiuuPJCaLWqHgPxDcm3aCkwScHgjMGevVk36ud7JHjv7Y3zui5mjs7WD2dyGdhbjE8FqTEvpVEsXqZRhDM",
  "key7": "5NPut8FUCgyFXQL9Wi85WRj8kRw3XA4e6HkSaKVNQHdsTPkE9vzQu2rXdaFrKTnuPswV2NqfSn1fignFVWh5DvU3",
  "key8": "ZrA3vCJr7H9e6VvE6VX79N8GpPUZRTtEWcPaF618o5UPu9CS59afhoVbn3e6kDqZyxNMJdzqSr9MmipTRCeL5Ug",
  "key9": "61A2Y5CZWTWPTxSAoKnraPUSKkaD4jn4yJymTGbxCh4LyBhmKk3HKDJ6fG5SQMEdedTWT6rKH4a4yGUvPVugLFfb",
  "key10": "4SJwpWevHsPeHgZk3i9jVXfPPVYYPoeot6Ma4jRNs8kwwRXt1N1Gih2e7ZuFScoARiTDKqUSLXiPsb8Cw6uScVHH",
  "key11": "3bAfNqi42i6E6pa9XHk66uZCrBc6cd5yUUdhsY9icMiuMeSkniMeFEZN9jozpNXu2c9cb3tYA5KVBMhDjc6q8vMX",
  "key12": "62fqZfh5GKaXsWYTr1khYN9rJjDNuVc76S6oftW8bkDfeL45gFckV612CnbT7tdVrmTxrDBUH9NuCQEchboyNrND",
  "key13": "53CqwvGQezFu3ZBGSfcwqvGbbHM63KWdwGNPVVR8diEQ1NS54ca89r6j9HnAfr3n8W9cBMyFvG3ofKHJoPxY8TR",
  "key14": "4ETMHbR7E7PAHnCV7o9AWFuQyeyVfmN6vRzfTuSR4j45tsTbLYE4tbGEQjHeLYRqEcbyBvuvvDsaM4kr6LNcRHgm",
  "key15": "2Q4YFEEmrKDPLjYjGrxX51FwyWhGfnTdzzZbtKTdTbCANV5FmHihz5jBZcQJUA1CmsZ3BmzHzrBY4f6jtzg6GPSp",
  "key16": "fc9CdtUaKYYpzsUoMxsGjjLFciZs3n2b9mwvEZTaQNfyw8qeNiDButyBFg86meW6trSrNt5XY7TP2UXebWYgJU8",
  "key17": "4taq3saR6PudNEu33wMNd84t2zfEtZ5zGu7F9bprbUAFM1NMT2bUEggqAB3diZTU8B2AWmwMm7vHU2Ka45rjEewE",
  "key18": "oo4dwkR4m2uDEJng97e6aBwmUPnYexUni8dnq3s6jimbKnBgesBksc5arNar3mqbQPBRoTkFN3iwLFQFC6xiNLu",
  "key19": "5QHGbPkpgHomrXNUWJmb594nqaNmfkQKjeryXDz3W4pHFvBan1zqork1WBuJKAZyNJ5k3PPZJa2pXFrUQqAgbE2",
  "key20": "2H739uRvCUQbuNwd5ibvQJoQZfg7KMaXZ8g85vz9oXGc5RZbQcU7Y6GYbS6xoSMdB4TP71kRGAV5bTzyrk2Pty89",
  "key21": "krSWYVFjfnXxmSVNVowz14z9Pauf9N2mNuFYiVDykCN6aiKNfcTPW1BU6ZFTyDWZmzTkSsvzYmhS2s7NjgwqTqa",
  "key22": "4oHPSo8LmAZvkm7igJYh1hcXSNFnemKQ8e7hGajnd1Svkkybq1goQo3WsiABCs4c7PQzLz9M84yU71NxB1eGxs7Y",
  "key23": "47eZvBPNbVDk8oWNQm9ehnSE7AP6z8sDqjEvbZ1eJn5sDtLUyY8CDgaVguEm4tix9CkecZWXa4NkQCUUqkB3ckYk",
  "key24": "2tqMQq3SWzKvYakjGxrpnXXS6adWJeG2oLyqRnEL1wDX11fvHFDaXkVPjMkqZDyC4bjMYBrE3ag2VZDrR9sNtrH5",
  "key25": "2Mq4GELVsKa8MzLBJn5iLaariQomDtFmLt1PaXaLVVhZ6Tz289Dt1Y6qYXbCvWwbEiLqURwa5Ru8ckuw8NWbeVRW",
  "key26": "3cz5iuMjDQZbtWPwbovRqHtahoFuf7X2mki6DzsQcG2zMRPvux8XHSzk8rGbHtjhTP3xnFFtpyCdgBrJ7TEAFKLL",
  "key27": "2xVXVwLV3HsVeMMhmo9Dqo1XnLPApSNmtQJyT8f1tYoKW2h2Xn3GVbaW7dKaGPzMCcimLMs7WmggQm7rM7goPvYv",
  "key28": "5XRotM9ZdomNHiA8kT8YyAeMbVLR8AfgRr4FkjgNmaUcZfFf3WJRWJ4KmFaHpT8XLEm3TKF8ttqwHfRvMJvmerLN",
  "key29": "bt7knxMcYBJ9BoittgtNGfqFHFdpReUJz93xPYcECnhAP26DHM1Fv2yN9b6y3qUdWc8UaobfL8sc7MudkFZhzJ5",
  "key30": "4gdnAZmv13j9LT359163rxj9qCVmiQ2k8AXLV57mBz4CtCU117hMxko2Ga4fV6cWyJHEXKbbVG3keQKL1Av9c3Co",
  "key31": "2yoJrZ9igVmy93XMuDKH2UiYtFKAeFRgKqJboerMpzDxACEDznebqt1cPtQsxvS49r286NTyrHcFPsZjwnsc42VE",
  "key32": "3WGMP6H9kQd1kybZtUUpjFpXnswsqagMBhP5wWKJqiekjbahemfbuVpRXQmv9oyNxAnihngUr3H9LggGZ7pwWESP",
  "key33": "3nirBrKZY9uFwSwH7WshZ86Q4F74S8fsu8PrEasdY9VPvcqQ1QHhao4h1bDgeCnGj26jG4rCzqktkTCqZZzRDY8r"
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
