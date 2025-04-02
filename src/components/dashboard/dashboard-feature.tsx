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
    "4kLbcwQzAgW8izAfx4MWu9mZd5hpJdiSyLtrsMkDTgzDQfSvZxkHhmxiVBS9oGyAP1siAm4A5QP7UZRDxWBmcxWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55o7Bv2wsSJhfBc4ssDjL63rC9VfWMKjGbJKbJ5ztE1KmnMU6c5whBqffXMqfYSt5genMqvqPzWUT2BRpuwA2BcB",
  "key1": "5cy2b1bqNT7resTFEyH1FKiN4W3AmmJ3sewu2anSiBRtnB3DdSHKUEPqAALPYK1oUWUY3jDjRuNkWdJ3QToduYqL",
  "key2": "5LWPJfWhN2oDEuUWoBnDAfwCSxBAtQ3JbXS735z2ZrqYfv2tep3PUhvQWhE9JxnrkkYq511NovzhUSEmasHU76GC",
  "key3": "4mhQNRXtSHjxALJjZ5Ks3TN5ohwA2hw36EJDa2M7Ue2tCj2dy1dJyNW2pJtaHs4vh1Rbv1R35SafBNFLjyBNpBwq",
  "key4": "2PYHH26dv5K5HH2b4zMNZ1qTUjV7sL6cYShtwxiafBGysdhxDLupywsQUmfXTauytSyweem8k2wQAjcfwz45698v",
  "key5": "3uqy4k8fvAPCLQAfAhLcaLSKMRan7auUzMSchrTc6VQTgdVFzcR1dhutiZpDGcU4qqMqDbNHitG9sSFLr3a1igWb",
  "key6": "2frf9UeB74kgosN6bZdk2s7mrUigKuUmVDDiaRMex65owMEeCQDop1T8tTRnPHx3ppGTAPMtfqWe7qvfeoYYK6Z3",
  "key7": "3qEvB7bi4v8wKP4TNXbNAgcQC4BRf88Vzv1tqQVg2ATVDH2sE979NV1RkoVDZXeUqo4cdcYS7s7KRA9ugdQ5FZSP",
  "key8": "4dQ9GRoqUSYSeH7hYzeM5MPbVdfT6VNgrZ751DVqMcfHfpv7ThD113tihYhe7feTVUAdrn6vx3PXkJozUD3FdeRV",
  "key9": "q44jTS5BJP5WH5W7hMYxJs1CH1KuQn8dZ9s48V3wUGxgesMbQCusg91PqERtfkJijbuw4JxDgrjUazdXmj14hJM",
  "key10": "2BD7LH6zKwYttB2q1SiLZAwvrRUxMAhUnguQYihGArVYgyFwD5EvuZaQ1WHzMGhhPLkqedm5TwoYcLTtxmhyU7T1",
  "key11": "2FSfRh2AnY7MGXddxR7s6St1UdKJepAvar5bVC3C4xiqrLoog3fDdt5ELdiC9qYtZAmb82jjGYF93vcNe9Np8xzE",
  "key12": "3dKkrvqGNks2414GqPdyyAMwoD3XxASQVZkDj8PVgpyY4XuBmCDJVYjETcCgEsQ1duzibjMK5HgXgM1ob5CLxEBk",
  "key13": "22tgkNVWw5vaKVTh4Jd467ddVPbXz6sLbnaoGQkP8EWm99168kDpPEizAhamgUx87eJ1tpGihp3JMRUaeDkqaim1",
  "key14": "2VH61oeGjNdmwGKx4swHEPKmx7QvUc2j3y77eEri1nXWHxwGXC6foyHLptB9axWMV828D3ukh5EnzpqHN8UQom9K",
  "key15": "3Jz6MU9kxciA8dEbiz6RjeV1Gb73iRGcfZiC2nKvUHjxMmkVBnjaTwZzx4Pn47qa6Er127hzb2oXUTRTB5Ly5Ghj",
  "key16": "4KckUD3yRseK5kbc2FW1Qo2yxRBrud1UvEbd8FPHbEUBYayYYEjuRjcsxVkLpngFDV6EZci2z68HgsgqD629E3US",
  "key17": "FbATGhKpciATEDc45EJTr49YhAsZdb3oEDaEbYW8njLShEUZHG4KqXvBmH1sGqohQPasmBAa8VjF5SWFe8bKfCA",
  "key18": "cmC8vYXTWptWnrdFfnz2EseCwbswqYbSsDzRCkcjgQFib5NuVntsR2YhAnRTRXpXjwtHNnHpm52cGXehSGwpYrc",
  "key19": "3Zyr5wDph2pjnQJR1yCx1FFGLAzecGD6NdBQQHF8ipDGPg3HNdn6SawUnP4qeByoHL8mt2vpVRMDXqWjSEvEBaug",
  "key20": "4s8McHas2CeUYRrRN9a45sWJx9UXRD1Xu1832k2Rcsk8XpYxpCsnYe8mCGApA1rp62yYnuHYX7F6cmuhLawqKbd2",
  "key21": "33Z8CZbWCBHPHJP1XA1YSqZsFmgZPeHSi9bLhHzp8darZiB5zYAsqzhoMWAfENKmSwAkWW2nTjywZk42vShd8RB7",
  "key22": "3MYpW8nzsj3xdUy4hJruQFUTxL9XdF1zrwi9eSpNmoHFJA7srKYoXg9dat7gi1mXUQhc2ztak33KiUUTyvzWDund",
  "key23": "xgkMypBnhEKJTNBvEadLMJjBeukmCX2yP56cBxF8UZUu6dZ5bWbmS1iceC6oHN6J5K7Wqz6QhPGxpEzoYbs4Fte",
  "key24": "4YKkDB7YMtf5aoXwU2W2MNWADaqXTUjAgFjGrmzYubzkKP2WZ4TXG57SsoSSbaYJvcRFYmhev41AnpAEgaCTNGgH",
  "key25": "QCSuchDiowbwq5MRgdzRYycZn5CifVdwNEQhjGCaNGaFCWhrp9ifs25J5q9b2mrsv28CtZN9vMHJkBb2XSFqsLJ",
  "key26": "4SMVvK95zkxoxdyArURSteWNVWya3vvskRVJAQmQemQPo148QiTgHG3CqbGSvjWracjZcicSu9vniih8nGJfhFat",
  "key27": "57t5rhviiqxP25Z3ZagZeg9mFPcTKk2mW62VF3TzBzmTHgFkXaDMpMaxxXji31M9BEqqdQHrYtjTrRa3Buru1qYg",
  "key28": "4VsQeNVuLBBuBUf9AmPMMjhjPRJ1uLYSy8n9R2Ss7FHy2tHAXHcJSYcTizGZAvGVgbBnMiV1sVsycMmQmpKRBqgj",
  "key29": "HG7cNpr7PtdqSNQzU2yQnatepiRwAA3zi1cMVjtnCWsdvBdxEASHBHowKUE2CRZmBgHQqZkdg6vQtkMVPeqPRCs",
  "key30": "63JKPfdAp5f3knHCHTz5WKtdgnZxVhK4XdCKKAdEgobkYbM3gEx65sVNUPwSCsrkDPk3DRhZLALwekA4bkSwHKbG",
  "key31": "42kP47khXvJ9x1FiyePu8URpitqYpuxc2k37PM32GyGF2DToqevHLmvXX5fvZSCKZ7bN9XRjzcdXHGSNEPQXbfFa",
  "key32": "Y6RGhVAdpZKixnLt73hq3QQtLAcFw6DKqEsuYS8oaFvNKo2ZkAPxptAuK66aHgZaSbmXFQYa8eGTHxBg9A9fqDK",
  "key33": "2npECBwoLDJYMCQzEu5obcYjMD2X2Qd8gh9wq39vFPVc3ENYWgjNzyPNWQZZK1uPCdQaXph9fxhG2Hr7hFCD9hnV",
  "key34": "4Wg8sRYsDnwZuEavKqZweR99qZmBPDkmzrtXqaHP293YMi66S3e3HqKfec3vgiQxsqth6btibQ6sksbhHe5hmQSe",
  "key35": "4AL7WUjkwZmsVdBCFrQo8vjJKgkEACBzFHKFFQFTwdzWKwnr62jV9DjWY1CqcVHKFgm8uPKVgYCQrPcfg69mu5DL",
  "key36": "3dsHNZgTT7cZ4sZXvb7ruKkidq5LgnvB9QsFDP2jq25gYqT8Rj7Wad8yLo6nCSJasXohVLtYxyyUbXkpkUtrvxfk",
  "key37": "3GJPn2qhGTETAxhabCnCBYSYxCfKUgpf2Jf8APoEibA2q12H1gZLdJbd2yvi8fjj9uwVFjvYuEFMT8gxgPGTSvg1",
  "key38": "3M2TnyiD1BQuHPcPVTrDA2axFEK4kSfyMPCeBRx2fbPf7dzpptUcwiYBv86uBpmfQyTZXjEx5aJ62Bucgo5Wx38P",
  "key39": "5PGX8u9eXtCfZ962cciYN633ToZQPkMmLiXXszfaxw6VufaVFYP38NJSPmt3oKMTShQUPAf6oc5U44fHGw4Qo1HD",
  "key40": "23d8pVeF83ddNVPVeWT9PdF8zuq1TwL8V64k2MvpvyR4Rf4AcXk395iJCqJDbNxyN3wL574rd3DETfz4ibDQjNCD",
  "key41": "2MzcSjVA6mo4kJfbpWGnZwBk8F2YzNeFGRyR2Caart1N3erVAhTSVxWPb3SerSq4zcH1KNXyTSaeqgAyzXomJQc4",
  "key42": "HHo6qmpv2ydqunCwnvBHzP11qaW1f9fmQpPEhFy5ueVt2imemvJZcGUeRR6WGbzxCZ8vtB94JXLkps2Lh2zP9Ri"
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
