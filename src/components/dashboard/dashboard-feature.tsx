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
    "4ujGpSqGVF7BBzMfmGaTqLCH4WvsZBqpuNFJjZWY3o7uHtNcRuxaBAYTkZ5EQFnhM1FS4Pg14655Ns7etqTy9WVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G59sPDudsanHxSPx1Lc6BRRFtqfsSoZKN5TRXoCtTUP91AnUumq424Gs3Y6SNocgrLgnbsAqDYLAcjuUdH7d4rL",
  "key1": "3RWK8hW8sdtBs2ejdocMPBMdcZLx9fR5p3xDepKaejAm6vuARfZkEdkZWufPuodkd6HnZd6sAFqwvfTos7o2FFKC",
  "key2": "2GXyMUYXNHnpJza7KbbZehdTddKoVNWv87mftsg4kuHoqPA4uRpVB97rrFffP3zdYjjRZyNucfjP5c93Fz1UmmaS",
  "key3": "4UZPYMXpxd7knWmvzW9w8zxxokUwhxQdssfFTu5wgks4VBRCPr8LAvVeZACeCEtyR8qpzGUmSyRJudyubGi5VF2x",
  "key4": "4BSkiD2Mg7rLeDJ6zwW7SGRGiBaRwAJiC4d2kCJUFamToaoCxJwL8oCuqcrBzjN4j3xWbW2j1ULJf76NQEx1Bzun",
  "key5": "YhuCQfouW9pWGoMJo2ZUc7WqfTTNL7fgyWWAyFYiWtSJJCFA77sJuWkzQNAfzPPZuQ8Gmwx8zynPsGcihnh86ec",
  "key6": "4pKWrDVXBwFg7dQ67CD9x86dpdyTC9eGiBXoxaNzP8NUZPD58JRb7AfduEgjbni9mVtJitRrjnhAUqtQ7thp95xQ",
  "key7": "iNFKW4xYRkcyU3rA1ZC8yqMYYZWBaxX21iCoU5CJEB7EnJTJr76NYxj76rkgaShJEqfXVmkrcgounguKagG2vsw",
  "key8": "57KHjEh8HUY8Tcpccg96X836pFYnixJna7qMEhVKQfTYFoB2tSzDrYwkjNQHgPLYGuPW6QuwxN9SkNCcmzmuhbCM",
  "key9": "23oeZu38pf4fbBtDUR5brtXVws5q7QBaddCK73EPuvEpphGcCYhaygkRompCE4wVSy27fmQVsjyhPF3EBnrWkER7",
  "key10": "5aZopky1RtL1Zy8BBYKY3bZhtJXh7pnH7eeNbntoQLAk23vS8Ny3eG8qBuKWaiTuzqExWyWd5ERBSNRAyWYof9SA",
  "key11": "66T5yP6iyKbXUzWNfXDZomoDJ8rVSho4DbRPrwnDV8n1zuacPPRzU7iG44hG1x1WrWafFdNg9Zj8HA6VASXB9C9n",
  "key12": "274WxUNExDh5TgCVAg4TZfihztpftYC1hmPSZ8RjUQssUso6Dj2pdwPvTa5HKggZ9RTb9pssD1fs38T3Fz9uyh27",
  "key13": "3GrWP8fVmPrVaD498L6NqNwF9DsVykr7ScCnzT4PNn1vsyDnGk8XYLYQDyZHkgMXmEvWMLvFQkAqod9B1YAAvpxx",
  "key14": "34zSBgeBeyggxHT6yyYWqfHejKCYC9fQ6Sk9EABDvYioFUf44m9euR6xvS71myG8j52tQNJWJhsts9fKCdfP7KRy",
  "key15": "36kkFhgXDT9uXcEX1MvPArH447wwy7WA95nfUpoAbkhoZEbCsMwDiy2GJzqhBGyjFujLPycDjSYc45MhpbRSXwUH",
  "key16": "mSD3L5GBETDuJpqNfVZtiFQhwrRhLmF4BykAvNLinZLV3ZuXSp6cXXf9GyfUzFxpUiyhzh7aHPezXiXba9vmhwb",
  "key17": "3LF5n4yEiSrnVbvvW6V3xyJA9g8aB85f5a3SPwPoHberv4Puz1SLVvnFB8EKPd1bb38awW1owLK9Jmw7RvcsXA6h",
  "key18": "2JQjS9QPYdyakv6KoSjM3HtzwiXfvbwVSShZVt4dXrwzYVnin5v2adb5DvC5VCesVwYBFR2agYDe8N8ha8ebUaa7",
  "key19": "3LWjFCRD4xsobuLSaczfrkukY4X71niMwcx4xzKzsH3PMHhdjCFp9syty3P1YAZWyVKiRai1cBEDb7rw2jUzzMe7",
  "key20": "CSNvzNQ5cbCyUSv18gbJiEa1ynZ6E3XFxqatAtsM849YdV3iAosnhN16zYaEN96EKegKjgEKLWJMZPyJ91N52vR",
  "key21": "2k816KELTmNCvDg7s4EjB36ryXXkYuAuB1o4zwCXp71Y3Sn2vb2kL1nBP1TsxY3VzJH1s8t2WTNTnqxtEEMrxXiw",
  "key22": "2RVkwK4mAA6AgDauzq8BC2n7HDBE6Y79BDCtPoRmszkG2eFBb7B4gpjWEtJqA2aiZ8tbJZ8MegQVyXK58hBZ3yCF",
  "key23": "UApyJLwUw6odYHSLEkHzT6xZYZwH6oFamD7gBJ4UykmveDe4sWYvG6KWvD1dDL6fBhKNTCyZKjFyvvbYVByME7K",
  "key24": "3hG2YT2dCxiGmMxZmwHE66HjF1r3AkSssvqm3QJ2kGp6xxPMshNszLVJS8pfNRC7NGsikQYRgbEz64vGESSN8Lta",
  "key25": "4PcJKSKrund6Xwkdcp64PBPjxkfFgxwi53AzTmz8E93LY28XEEJ3U5TWVLzEpczbHvrSGXzGCUtEqBkvZb6VATh5",
  "key26": "5JVMZWYfr6gYtpiyBaHCFgsdAAaqobFNrgPd12taFabNuTxVX1wwyyMexPRUx6EGdnb3AyJXMsgbX4phtfpPDMfP",
  "key27": "GbqmvgtmsUDggt18eXkeU51Vs2FSz5Nfi2AucLZRbjuJRxuH7YyxA5s94YecUwYbZqo1ACxeh3GFz6En5DczmzA",
  "key28": "2nAiZPGe3GSXHFDxUfSgSGBup6st1Zq4UQuMqLAKfDcdNnX69cb5vrZUHMXhY6xTogxWuKukpAk26u6RQmjvtuNE",
  "key29": "2uaTYQD4vAnYLduandAFnBkUZjS7k2kopvDEr9d9zspGxmin2CbNgkxqgwDFidwsasvjVtpAMgabn9v5J5zhowxL",
  "key30": "5rd5N2hcRMwVsKRFM8wHa486n1ZwcL6dLGkAaGVYJnvDLcyHzUC7tAiBVF7oP21FApvWBLZFR7rksaBGNUMchzzn",
  "key31": "4Kg3mtN4YYxbBRNqi1tq18X1PjyAXTjZQEn6YNKwFF9orka7uaMQdfV9tdDHcHvdeVVBEsr1u7gu117eyQq4m62Q",
  "key32": "2SDniS7RoJRvB9ZEaZsmuXqb822yJQK1K4HirWmnMqThR1GSmSbcKXQAkruCcidyQ77fVCKJJTouRk1Mkomq7UaL",
  "key33": "58pMtm67UsRamCuDPUgFwiUpxjFMoScXCnMZgsfNx9f1w2HFb1GM62ydoSwWjzs8zetUUgGdRw9hurR6iHS93cd8",
  "key34": "5NDbYDSLVfrJc29kpbN7CHaMNf5R9Kko9JQKAwFwPMtHpbQiAz2LuPSFRvh6fyqPtX966aAYVGpLcxUTPUvDwKhg",
  "key35": "XBVy2xb1uFZvrYpnkyQWeYApFw23FFoURf71meH8uTMfMzmmeEFHcP4VVMAxTZidWTi5g1Kr7UnAUT5egk1aEQQ",
  "key36": "53V7FppCsY7p4QknXFCshp8SmMAbttNyvVV66o2gtFth2YyoNKwVDZQ1B1ybP6pefcrBLAw38SsKU8tpTPNWqRXQ"
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
