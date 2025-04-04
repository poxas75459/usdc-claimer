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
    "zVoiCgPWPYWD7FvuGFXLvnDMAWmtadoQLxKdXpEVPenSr5eZPcAsQqnK2f4gwcdRdvoao5uo3tzjVkHmZnHZzum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5if3JskCoJVTWEkguY53FKj1jx5m1sPfXb8zWwUYFPWnkLeb33VpjyX9KnDrjvc4QJB1s8uYC9ddzBh8GRjVn6C1",
  "key1": "3P8FWzkRxnnT8jx2W7DLMBG8Nfo8wuLCHAHQaGLqv1p54VecPtKG775BNHNjDJnUL1BNdRzmy7Pefy5RFkW7y7zt",
  "key2": "4w3GhPBWSJBY4mPZkzUCxdxkaURzsFFdGGPRqQd9GdPGEpSzT7Y5jHdHEff8tvbdnHhfUFib2EgNH3NEKV271jks",
  "key3": "5S8VTgxsF5cTkMrj6Yp6EbQD88aVGMHbDjDb1ZgDqUgpj6ohHtgp6PSs2i358hcPDKsjcoV7W7SBEsAah3Cj5DVU",
  "key4": "hyWyNPG9AFygF2g8n3MwKLW7vNtZx9256KJKbgmM4tbKS96ydLonc3q3sFB44dTChd1S3hjnZEjG29AcScvZT74",
  "key5": "yTBY2mBkwT6X7DYdkEnarXi4i6et7PvRBw3MBBeCAcyotPASeYnszrX5ukzvx8f5vX2v9tcnRPhNEPxMwpd7cJJ",
  "key6": "5U5LxKpkCh65xpHv7dtBJcrJP6nuVcHDdAz74MdA7gijq9sHu8sDHPpkQjFqtFsdViKbsLAz3SfJWPmqKwD2vjeS",
  "key7": "5VwVbbxygpsWh5ceGhGFvEQPLVTwki5HDX72dUSZkqp9jfj3Nhe1Pax1x7aK2eS4btkCszLkDWE9EBDq3rKx2dAX",
  "key8": "3Voxrgm1mvU3HGy2vEhQC5fQ7yVMErkL1GggY6Qz9rcYLC3PMoZUAtN68KUeXrJaBHdxcXojbL8g6885iTr9YuHi",
  "key9": "5e8toyDL4JyRUiYXs8gqVaMhwCcKStqhv6e79bUkxvtUZHw7X9DrLRB973z9ixBubHbXSWmEJPieBb7UjZKtcP13",
  "key10": "4buULFtbsENmjkV5J27ZPobcfQguwoyFG97nE4ER6m7fP6n8kSh6hQgvfMbkQwBvjkp1NvP8VktyURoKUDv2t3bT",
  "key11": "5AiwVW6jXBL1MqcUkk7TqMjBUQHVbkyYA7WVF5hBknyYt6GPc35U3DaDAchNWb1jM7G1BhrsbQ2gtJtQXs7w3hhR",
  "key12": "3t2ykXEchUTwTtWMjGSgSLTgKRpFT3TFwfqmVDf8VE4MZ99XQiDozPJcjAwNoz3FENbyZPZRxt6XdempsjZeprZD",
  "key13": "49Ft3R4Rf3KneboDgwM41uCm9D8X7h3tXbfh62LQncou1jxi6toSSAMsxpdaDuwed4D2VAuQEawm1Nv6ByNSVZHu",
  "key14": "2vD8SakqU3X6PLMBEeANmts867azVgFD9m5YsfK4K4tRNkefU47ep6v8Jp6aH1yMmPu47TrYs7Yg62nYM4fVssTQ",
  "key15": "3T1ZQi9Uk8kKT9mgW1rhMXFkUP9DvnwKNdHJkQELNoEkeyMET76ChZ9vNGXrieKe8C9RudaT4RYEoqaQ3U5oxSMX",
  "key16": "4fTXi98KgHb12g9HVnrV6AtgTrdKFaFk7fV6pDHcdph7bRnGGo2RLiWmRddSw1ZjEs9BhBLq9NJAR5P1pcrhuyxw",
  "key17": "RxhG7FJTtwBV4zai462FPtWavRqh5goyq5c3T5Zo4sTHFuwEBd5u4qQHosFoeZhSLzgwB3R2zeFny21obojS79M",
  "key18": "5S4VTWFoFJM8F6KQiMPmPTcsCmF5t4YfzAg5xHjvgvMJaGbi77dBc21X5KWpdvzth89XcYogYAvYqwvT1dAZwGm4",
  "key19": "3MJTwxBDMUXghj5HDPFpjxgBof2Ngq2oAZfqkaj9YaaFkSY86T5NehNtFqgToZ3SbZ51GsPZBhHNaWVbihkCYhuc",
  "key20": "4Zmqj51saadeXGzt5ERrvYNcUdtZuYFvpLWLU5xfy72uBtHYoWLY4jXXJ2a63rUhx1DEQcRw2mQyfHDoyhavcHsN",
  "key21": "2unQo7AueYHkQkqEBVM8NBjwFET8Ghmdo3pwbdGMy5uw46cDfVqNhjd3KLCstp3bQDc637sjNgQJt9WqZEGYGBCz",
  "key22": "4WLZNPKizcBEmzFCivpsCX9qznKRisC9SHJsCXMnFvm1X4LTBa4tn8kgc83Dvy4QEBByqnRqWZYFCPbqQss3hTR3",
  "key23": "5A1QZtx6BG6fhTLXmCb8Xg2PuLKBP1eEvthuboad8e5o8KU86JSvqGRcCnxoLtd9cWxQKTQywoirSahtGUkY3NZT",
  "key24": "4vwhz3BXydy3z7CosxGocVuvosCAj29JkK6JwwApyuxn6BVEiwEnJ3t2CPvaipLDBdpiGH4bGoXRUx5XjRQ6zWpL",
  "key25": "3izi8RzJAu3dSUaHHrArQUvtk8QXAri6DZtSnX97QKAVeVz6UK8L97S8MjL5mx5x6T4b4Ucy9LYGG8mKhu1wudR3",
  "key26": "5be7a1W2pFB158V8vDyi87AEm5fMFScBGZCUdqhsUbhBxMCs5DgF5UkLhiMBeNqzjBLxGNbk1kjaRX9eqfMDPQEW",
  "key27": "2aXHcL9BM1B8C6s7U2Z79WPxp9YqcfwugLiPHPdHaojA7xpaV6BvcXfBRtkLWrBHLhK8WZnh1UD6T6bvrBo7Ntu4",
  "key28": "3fg5YMmxtpFqm2J7XmSHSvDPRojVzsvmZL5QX6MFibqgjFRDGHph5mi6oF7Rz2gZhGSJBS74L8bwJUZQ5qzfCa5K",
  "key29": "2zosLs5JdRqTJ4Y869f7ckz7zKtJLo3nLUaGtdyzCU3QdwA1kyHxvDbngE9vSmUGAPFtzyyP8UDucrHSuyCVC86A",
  "key30": "3Up7NwFSNyFTdNWywgY9CLDnwZz8bESGm3aUSuzuiH6RiURt6dcPuofvgjRQJJEUVsoSA5eaWBRYxrAJt35cX5hw",
  "key31": "2cctJfA6Mdoky9jchzoq2C6yfyq9miuAnpkqLgE7kotD84zRvZpZqaoTwzDCNYb5HCYpH3MrPEjQFWiTqtdUgrnR",
  "key32": "64BDdNd9TMpDC1NvWp5Np2LdtgZ1aSNZ31CPKBVghqndMvRHT13m2tPktdLsZP95CTo2vwacVX7LTyK8XDkKVwEP",
  "key33": "4haF77B7b1yKipcQFy1dDNTunLZXF2p2negNDUBUFU1TYszskntbPriHQYWb7AY5iNpCWWVbChiiyAbJadRiouHY",
  "key34": "4NTLrjAz3ioc2qLub6CCoFMPfPERqaKBA8wac4UHj6E86NuJ7FY53LWCKXZtTHRJgL6Lv8T8XcxUon6ekKcUjhp2",
  "key35": "2N2WAownAWqJieFomb4NbHQpSphE3WNSdj8PeJeoYXbVccTvMyiavQh8Pzku9DEiAQhAdFKHcBWCYGyxqXM4txDj",
  "key36": "28Aeuiw28p83LVmUYvXkFfz4iEsmXqaxe3D4fyAhiobpMADSGMonUCUZhRYTrj2wAtXRWJg4T9qJV6zN92m1ixk2",
  "key37": "2rmQZCkZbwNuGym4gobTZa9WNp7JJ5CLMWPFcUcpv467Wogs4m2wd4Z9Ptm8zwMTw9T6caNxAuu1ck3gbGvYJkYa",
  "key38": "6xKHk1GggJe53sxKxZ9ExrqanthUp1pj3GViX4mvGWwfHUm25rPAXqS89URH4qw3RWZyjU6SAPV8pTJ54dhZnLR",
  "key39": "3jWzBZdzrTMbGrruUjYfUT6tM6Jr9kf1LDJnJAHiMXKWEVXpnA2SBgXHyWDxY5rFuYRquoLuRCeEx2ua7Hv7SQmj",
  "key40": "365qiDN5VqdgJbVvcwgGZWb6szLZ2v8jX9LB76uiuuVVWnHh4E3BcB9TrxHosZq5v8odPfK2tAaBTvnRrBH9nacN",
  "key41": "3sSPmBbWsr42DWi4K9sLeL7nhtkj4JxjKp1rEBACdEGtiRAqY1surk3p3aPuRFBxZZNvShVFZ5CEdVmeNhpkK3RT",
  "key42": "5F7FGP4ZDTZz8xKqehj8rb9J4EWtxYyE4oXg88FbKUNEf52bYzdjutQSQpUXWaeY92mNLnfCe77K2wWUeavDLY96",
  "key43": "5baamswDysEEs3qfaxxxbg9aNHeXdTm8mQUwcyr6Z2UfUTpjNdzTPPzsxS5mNUni3fWm4kYKgLkj6ejxeLqdPUTz",
  "key44": "bPY9m8ntLKGvAubszrDt6uxqNqN2cmCCbUHXqbx3fcqdpgvdfXRtMWJBVC9YqaoNhpwu67C6ugaZuwEjeipp8ck",
  "key45": "2o5WSBC7rBYYJn1H4oGxMC5v9gQvR3nyc5Ubd17zvmpZ8hNeaFsNRrJm28hpTeAKgFpesyGbykWRGaN8JkoaUTS1"
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
