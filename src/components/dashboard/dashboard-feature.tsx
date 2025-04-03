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
    "2agpMC4EQe1Ninwzn2ZBiY8zr3FXtZMHd9P2XoRdrYPneSHTuW6EdXPVByWUBYmV5TYiqwrhcVo1AMdNhFuuinsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24LS8tGze73ADmwR4P5upoWdZA7o93PRjjxe5ZT5g2LqgxLAdnzcBQ3ieFjWFsXFKk6U9J7qn81UHyBrutFDwwD7",
  "key1": "58Hr4LbG8nHqPyCscQAzRMSqmnvCdXahpeRnLjSQUrKW8wW2obSs89GGt1Q8NF9xYshsfygFKY17SVfJTEVqss7p",
  "key2": "5B7duf5ELreKzNYJx8BgEcubPNbtL3sZGQXRKSjKtpJrebF4eCNRd5X9pfb3npeFqD8DLQZ7evkdNT6vARd4iC7J",
  "key3": "3FGwsTXUKkLTdhPMRzwKZNUTiLtgB2MSEpfDyFKfaw7oqNkcifqX7tvJLUTTPBLVv6i9oeYeF7EULW7vXf2j4ykd",
  "key4": "rfqBQzuNFwpNVcaL1Ps86N5XRJCAGzNwtDfHhAJsFnhMKvsNkQ1DPf75d7dCKsiUwoC4GjgKx7v889hqzvuJKRQ",
  "key5": "2yTSwKWmdQ4oJqSgEM4bb3oHS2Xnpoudgfaan9Sk8izCfLMaeCf5gFJRVGWKPQNXBVR5kv6Q46kDte5gLxm7QkWK",
  "key6": "33CbaLxCVsm9Nm7B2e1D6LNv3Fuxai2TDgqVtxaPajAa6JbNer6EH6j5LoSJZrt6yg2cMJYt5TUjtPn71sW9uaiM",
  "key7": "3oSUhMQtzPTQJi4n1Bh7LCZPWyvGAPHzRAULm7PDggaGt8tJ3fLZzk8JbmxnAgjktYkpCzDwwirKsVR5qfnkLgk8",
  "key8": "2Pmqx1jE5zkJzWTfzbutNjWKuzi3EB2hwM1Ngviy6YNcpvzGnwZvZgEp99YtFhHWawVBZhBvW24kDihZBnUqnqr",
  "key9": "5KKesC1wXaMqrAV3WtSjD9LjoUfEnwx29ofq6C2o2idnnbGRe3dhoLEcYc8ihP1NchT7kqESis6yxDeFgZK5hpKN",
  "key10": "6qVPD4dvrhZm8PMLCkHsmjnAmtRvccYeER5zhPyv82Riw8fgHFQxvGTEpkWMxdNhZmU9YeAKk5ezVNALtEmym7r",
  "key11": "5gWa5A1CHhMU7mP9b81yAPKAoNvmoRy8gdfqY2keNrP1NxCiSfEUUUU2prXXKcZ1QYHDfhoag4sysE58RHnjrU7K",
  "key12": "5C9xPE2CFxVuzpziZo52XqaUE1evbFc2yeM3fH28QHsJwJefSHfVkce4EkcQ2DASoSupmPf3aVRLdaFJDRHiuZPG",
  "key13": "2cm3nndwoSXiHhtnXAmc9t5M19DiEEJ6iSkpzynCVnPmKTPYgEVFLi1pmTw3RM77jnanKXSiKcVcDy5FX5ZvjbRg",
  "key14": "27CbDsL8DCQZ7jdauA5X1GVREWncD9MPFtKDDifVfkSaNohhyr7M3k1QUqEjaLzvieSAWyQRyoUConjiWkxiEwGD",
  "key15": "Y2UcPB7Y7A4SiHqxJHCxUaWS39K5SQm2HwuDUd1VuHhaMtALYV45V27ncEgitH7irsE2bpgrerMgwGY3va7snwu",
  "key16": "2gkafm5HUnQgPdF5PziuEedZd68k9jExMHGqzdnHVMYxmFKMUvz3eC4DEYZpSXRPUc2pzvveTq1AzuW27BBUfg4h",
  "key17": "E7LZh9pt16WR2nxvaKEicHGqmZ9KkKoYknoSCwyW2WJgyios5Fhkre6Bgu9FZR9VcudTGwEipv9BNdRJLFkaFLB",
  "key18": "4QxxcXQXok4S9J2QEXS1VerS3y5WUBhcu9bknNsiTajHo121GURLQD64LgHZTKRmYoAYqafGF6arU8B96EiKDeDm",
  "key19": "3h12TEvkWqYpxmAcs2uaGNoKTDGRUp4nFqGEgHEUhXasPY8kHjApiU9Q3miafRuuGboL3brJKfx9he81SaeFqBC",
  "key20": "4bVdhYMBnZTEA6WjQVmAeLw8XdT6oMzsaHLLfXfLJFZSPBgMrZirRZbxg3vDG66PfvLd75pwTB74AijYYoAAGbv5",
  "key21": "5QZTB4v3mSjgYvopEgvC7fLBg7FoLuZabd4yf3fqhHV3mcHgRh86Y7Za7AfFgJ53iBFUfnYbdhjWM56Nnb8mazYm",
  "key22": "5BTJRWt8yHXdRNXp4TS4oSqfTiZSuhofNpVryyDuh6o1MrZQf1VPQUpPf5Qh7SL2J5YxSo5VPCnMoqgVuGmxYR71",
  "key23": "43MvfrFNA3v1qW514NnjeWkPvZMqLRKLcpezPT3UQenUHhpa3fRF2dPf5cSEebVTrmURcFsPCTCMkvijjeBPjmP7",
  "key24": "23uutU5T3kKNCwqJV46nAXVoqLe3VKp1TmT4YSXiw7B7jmAAitXvPH33GNCmeMtdXcqe7HFhPzWmpQAfTYDQ6o7D",
  "key25": "3etGpfwhBnasv9hiGKj8ZVjY3TPKPJXf4j1azYmNYyzQkFdE6gUdsLsM9CFcx8KYJc7H39Z5hmJVnySXY1jXoFRw",
  "key26": "4hksbzAD8awMXSjoVR3T73JSLrMigfe4PyhFuvJEXPcR3nRUbgLe7PrRkB83r4a9fwmzDE6DfrbAyh7QuauJzmZL",
  "key27": "QUBTsk2tMHrwhtZZcnsFYre8QorKVfohAFX5cnEwVWYSTiJRKZfKmC1Js83SSVY6t9CL79PvYJVBXCaX4rkhDik",
  "key28": "3iGhEYdQyCzhd79itNbgsya6BajU2Mo64pubyjzDiN5x5NbdKatAgNbknmXrKNNLP1D62Td4sokPmPUvSv9opHiz",
  "key29": "5vy8VM6L7yKcMRaz5tSUxJnZKozEtavDNpLpRo1ZyRQ2tWJBkmwqTsigtSP62qppaZ3wVNahFMawQEEHqBkwAQZU",
  "key30": "295bnv9pjH74rVV2fhuQfjKekH8gMZLx3VdtopNBpeG8AAFGQaGfGjidFcvV2TQhyVzb8BRADn9enopNBcEncwcb",
  "key31": "5Mtz6LUNeZamzQgsyLdPsUYJ1bgbM74LcbGYXXXRNRE22h2GcWWM5SW2R8tjkT9We5eJsu8kXRz8jaMrNCUe3zaC",
  "key32": "2Rc7Gfnb4w7EgP3dRzHpFJyzV4TfZy84q1JP6UTTzrMRGanR9oqZbDeHM1KGPaTzd81U9AbVwjz6c8dCQTHZ52CP",
  "key33": "66pVCyvYDc7jHqct72kKtGV2Ej6ttng6161y8S9dQM4C32MyBvTFB4czXWJDbbKfZq2JjkbddAu4RPJsHuo8UzGb",
  "key34": "32Vxwvbwkh5gkK8DwhV1FmBENbA2ZGdqKuNCKYhLcoFxm5D9jwuBfQQ7aGJzXL8GTk2SK34Fb3sug6AJ8eaNWvAx",
  "key35": "4cUPQpa6zz96buLvfQiW6u9nQhSpoTpZ6v8uQhQQP6vpLS6yquFz6RJrWKFMNJW18Jmgx7FgBedHsS9yh47L8g3u",
  "key36": "427eAPQ8yTdCdFcdivi62nJtpyaZC5SW2A4zphZAne9RBuEeV7GEQBJVmdCMv9q9NPyGxyw6zWsMVdTPFnGaxeZY",
  "key37": "2hCA2a9zFmhfL73J4BQEAXL85mLFYLNfEvEjZS2zZpoaNv2wfTiMWQfibq9fJtg7uo4CynAUXo1mQNb9hvAm3koH",
  "key38": "2Mg1cwt7BT6ndnF4G7ZPh7VyivETejyzX9DqRyBAEnxhUFCHKm2TzW2ayzhihbo3y4SRZqQubTJhm3oWUU56PECa",
  "key39": "64t1JXoSSDAWDtW3kyhi1bFEwsfHNNUrZH62G9vF7nBRVE6H8FvbwFwNALF96hk2a8MfrAKtNJoYijUW9E4C2XVA",
  "key40": "3YZpkpCAGER7FFPA8tDikbgSTQRLr3boda2xs2ubS48KC48ftt92diBKjLKrLTfVd7TtaywVjguUEHt3x4yxnpmn",
  "key41": "5W7aN3BxLxfUWxYdpu8Rt69ZQ9u12fBxSZKLHuNvbbZ6cRti2oCHFzBFfYgy2fmjCTTfBhnMJb69soMxdneVyZ5F",
  "key42": "31aJ8yCpZSz7P9c6Q2aB8QMjWKw8mLqZrW7c9PVFB2b3W6djqaPaCMrH7DZPqxuxCU3tjVkLSd3PKZGP8dMZuJiv"
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
