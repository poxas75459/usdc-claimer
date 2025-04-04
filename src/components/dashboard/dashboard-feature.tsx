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
    "2pPsZD9RJZ1s4mugVxuh1BQ6W8PzWw6jdLC2y4KBsX1KYN3GCnUV71xCT8CToDnyGJC7N7fk56iKfPCFoiJ2J1NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QrKnEcyUNnYajizeX5nFZ1qAcBkXjUHw7WjYPEfase4MeZqzuBgu3FqBpi1TXJWPhANJ641sH1ZF48YvDBxAW4t",
  "key1": "79V4ZTn5iUbEGjMQF265PktVyYBiz3QWoouLjDoba1i2RRiX9UAWg5U6ztKdrojb1GfhjQ4PwkpsCVWywWNd8Uv",
  "key2": "49CJZqMJmhX8AGJebdsLb9RER4RyN3DZZXm4EVdGToHYzqnG3HabWctq78Tzmcr7p5zLhErYBMgYNXmqf5EsCTPX",
  "key3": "2PoGji7QktppWEXZgJKDGMpshhUHcBL5SxmAahK5QEiHKK7fvRX52rKazqaZzYyExyZqxYJnCEMG41Xxdrd7r3cz",
  "key4": "5QuGoFbqGtuRTyDsAE8Ufiy2rRg6CSKdRhTYXu1vonvmg3MeftBcQW7GgkDNqtmqe2pUzdxvkaY6hF8iEinCepHs",
  "key5": "3mRxfY4jNibvXxotJu6jXKg1bsqtNAXrjkm353mdPj2ygXZUrAf9noTt9ay93hRiJkpbzXtJ88uSiB9b2Qv5DzqP",
  "key6": "2ZEDPR9pbYta3JB37UC6tRyjKUnLHrfcSV9nyAxGiAQG6sHDvPTHYidc5uYxTL8EQpC3wwdFx5i6PgRxpSqTQfnb",
  "key7": "4sbp8fN7v6imyEXWLxcXF2qUT1v3Pjn3593jQ1XpA5LoxdTN9ZLsH8efY7GLLWcAvgwAFLELxSPwsnAG6YiB7HoQ",
  "key8": "4wVB4xwYzNbEfD3TgY3mSNsN6617xjdd91FQrXfTKyxsAvudNxezDZN2ZuHvpkF1uZ7oNAppnjCcctzcPZ7Mngba",
  "key9": "eMQtoJMXFxfq14b7poVmze9fnD1prSb92Cmok4gmftp2RsJL96JUxjSRkV1MdNVGnVsSiakZTwedBgFJ53TJUKp",
  "key10": "3CRj8JE8Ra4VZCCHzgZeZ78emsF4dzcHYUN1rfotL24dENkuvdGKRUwaSxunyn2fp572vPi25q8oHyfi925T12Hr",
  "key11": "4QfDmZBJhiXX51y6hkSqm1q3R72hLdeSxZXT3zwxFfkXx69yhiUpqMe6aBzMqVNPHT4y5RrUTLTqQmmTUSZYi1Fy",
  "key12": "5x8ZjX4M38sRVS9Q3F5oCMVbye8cgRSBhqvxWQR1jBoHkAT7GUdZWxvNy3aSLeXjAhU9S5QJkq1UgjA9HNxsvwvD",
  "key13": "53cVdg4dRBMKV6aUJS6Mk2KXogzgsuJp3BnjEtQDLBMhQmmEFrESPZ9d6zDXLZJJwBo6fJpMch2Qm2VLs7y8DQd3",
  "key14": "44qHTEtQtcvFZ3wwY73GXLS3jNoRz5BZZoYfZZFqC2KYuP6ePFtmBq6cdYiGe8bZVkgRrwsfKm7MhKqrSwaEar41",
  "key15": "4gPpsZykn45pWR2T2ZyBUKnMscYbLCmCBWS6QopM6tgh5dRA2BK1du21qR1K8b9YAmapS8bnUXC6HUVAirst4Xww",
  "key16": "bCsjmX1ybWLT9PMEYgg7p4tzRB6bneMsnxkUxBJ7K1njKJ7QRX6hqwTeAKonCTQcYBrep1jSUtCyevxXCh6CALG",
  "key17": "5tsX4ZsNdJdkEuSTzvHDNEpzfz6mnoi47umuKbByPs64xrk9d32AaL79aTY8PUFR3hGY39xuLnKxNcKMXeC9AeuP",
  "key18": "5WeGfS1zbyE2bVLPHg9zNWBUy96f3MPpJoBhwqpNtAnvDcU1ofM5UuuNkycynp9J7v7TrmRgo1P6x94bnrJGzF3d",
  "key19": "49MZ4UupntpcNaLVCcYYTAozY1Jfe3i8ec9rYF4UvmuWfqbM5CtZt6qfuwHn99adyejM12MayhFnkmC79La7HZ71",
  "key20": "2zKK6C6vhjQSa3UHPQYKugs3G1bfbdNx2LpWcAXAbECupVKfDRxY1xioWYHtmgnSHNKcBCyziQh39EtEDk94fVk8",
  "key21": "remhcYa9LqF32MsXwmMPqgZCzJMnATfG9LNA6x21dTZkDFsMYyk6DtgGsfc766SmT6hvDQbcfVjNk9mfBpKfkW7",
  "key22": "2DENeDYXtZVZNd7ZXTuiC7j2hFaFEm9GuhrVifCMd6ExcAoEXkrJKuP8vLKJk1Anz2BAMAbhoGPC4jjsXM7hWwmr",
  "key23": "2CS992mP2GwxD2oTGmMteuZUetNyw3Wx6hg5HXyEaFskZCgQ7XSW7jgp2QpM5TNdm6o65fjLc6FSFNLvq1fiY71q",
  "key24": "SHX1itcPqrwMFfMWPJLMUiYu3DHq7mQSFqb518oib6vT7tvTFACBB7pZEKs4D5QsBsZa6Ym5yB4gD3NQzYUceX7",
  "key25": "4qvnsfsSGuD6Y48jYBShtAqBb86SR8XoikPxGfzQQzv7gcJ89noe672Nfk8G8saKvSTY5eiR4PkWLzgRFy6xvE51",
  "key26": "45qDH2nsgtowUTaEawJfCVCaecyxyMW4sS86jPH7zi17LgWBZpdYKatmpmtTGvtSXFa2bT5SH6G9oXn5c1iuPFNg",
  "key27": "2xEPkKyAfLfv6bEVDhEKwNqK7udznG1ryyux2e4eKvD2Lmx1Bv2EN6JstpciknPpe5nErEH1yCdsmW1siSDkh7fG",
  "key28": "3kF9KK8LnftXebTvEaUfUyQb1EwiReye6yn7wNZUEisSEPESzk7e6XipaeZy2iVYgoXqEmjdjxg4Y5cvsQjxv2yj",
  "key29": "4uijcfsGGQrbH7q6HXPBo7kHzdB8nnNv5NcfkGemTEBgFynKPmQUrwiL4ZGwKzyN1FEcVti3kiB1Q7g8CC3KPzcK",
  "key30": "39JEEMDftGvDXd11tUdtakU568jx6hS16ZwPoS8EWuZqEW99zg5sL1uy7XBPedZFKsKuaZ73CNc1tEGFksN95LL3",
  "key31": "2WVLwru2kfAXc8iwnSuDCuSJaXAGiwpPBRVBHVsnqeAQrpmvGaAUp3WBtRdDo6Ecuixwmi89qTx9C4PFmSYBdaxE",
  "key32": "8Cn3rrKMWRSMjjWkCLFQnhSdNBuo9XyX22trXEsWweCpyveBFiBq3mfFZ81sHhaLX8jSXqwBYfz6f6M6v9vUTyN",
  "key33": "4kbhqyvRR4qUCu3JetEtJkhjxu54PoL39f8E8bJMuyM8k8Pf8QdcoYWu5JnDkgJaAyGoDNk4z9GKsaF5JM9amFZZ",
  "key34": "4PEbtGcnHFeGu28TRLracH3bjr4HBTkf4BWKiqXe7Pgvu1Kh5dy4JZf66i6HnD5VDazK7is5UQgAN63MQX9MRnhF",
  "key35": "2p7myK2ycxqexshmkMRJY18m8xb56181bs9VfLqFkKcpwPNu2PQRy1a97DSNddipEV75voqZDdiaqyYA4yDTq7nB",
  "key36": "3MWs6AdfthcwGxirD7Y9ddzz9k6fjyTEpruGMDqkeNrurhrXeX1ikWdGuZWArcCKvwY6PHpXCAtWCeWuLhxuc48v",
  "key37": "N4HytAo1AJSMLwNF1cdXZvHWvCYRyYYhcF9NxwKAJKwrrqa9cDxY5LCgvWEfBGdSueWLKhUEHHGPVVXiCt8gryQ",
  "key38": "4kCvy6GDsCAQHDdxbs9FQb4MpykdLMdFfcJJwFfSdsHKeQHr4bZ347XCFyZHW6jrdvqzdbT1qS3zghZRumiGskvV",
  "key39": "5w8W1EbP5EyrUv44adXqffCy3hxg3tujmj51hsWALpULjgoh93rzXeTTPVjm4akFTMxEjnHshaeY3zh7th9JtBP1",
  "key40": "Fd2Nk23VtKHmeX7VCTR4C6UNkBaeq1bTVhvyA4eTPjegDSdSMnMRtpR6bMW64fZJLbRNsKPxRjQi72ifS5ndsmj",
  "key41": "5XZvd26C5T4ESw1sFRHoRe99UzhZuYy7M6zuyaUuZnrsLwvgBGg1KYvCw8j9xB7wsuyDnn8d196b9We8JLbACJWs",
  "key42": "5XF7MtDDuso8MSdz6D9gxt5GGTpMxs7pS9ZSovT7mFAhpUW6qtkWAC7LRXTDL6BK9rY5daVm2e8dtc1ecMrAx2X6",
  "key43": "3LBERFbpi81KkW7QyhRArzxytGtzhDSHLE7DtTzkJh2MJzBw1ucD8JRcvKCYricHn87Rpo2ZYtGEjWyqEos89dyu",
  "key44": "5B18wn1p5PtUuugj3AwFxSVEzf5Y9dWUX3vtjVkgCnKkh9d1FBYuyPfYzFEJC1NtWQRALzFhwXPwxmAf5HypHgFG",
  "key45": "9AH69V6rETRmRo3HPyCXhaGd8gz47CVZujnBXsd9K3oyDSkbm7j4sbyqA2gu69ieYyyHeMFzN7GtHXw4fiZq2KD",
  "key46": "8W1vWhX8fKrs7iVoWRaH1tN8wrxQPkQQhkmw769rsYTLfybhtbNonTXYZbAVFwyvKjR1q6GH9BoadYQmRWUSEUr",
  "key47": "2A35uG7cSevYJHCPLnsJSvTccmspF2bawkCTpYKL8Sw6tKjAjnSYJVLG3K4o1o1nzvNoTdVXTSo4jHhp8TJdUZWD",
  "key48": "35ZUf4x1uiotGChjBMZc6GN1WetrXsAxXjpCfpfagNzjfPPHW1szZBk22MP4GBDkADQcPEvSp7TDQkeiJsVJcfiV"
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
