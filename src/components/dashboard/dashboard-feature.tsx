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
    "3DwpEKCordtfJYAJwYvrKALevRkGR2KcpqmxcrCBFcoRSSC4feHHjFpd2PCZuVDn4ZEdHNukSbhnx1wxWdY6ZQmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dhL5p9jkGzocWwkHpJTyFQ5AGv1FBHYsuMVQsWhS5ftjmDNap4DsJEAK9NRtjthR3TRrDbAt3estG8HMF5wWzHs",
  "key1": "5fUhCe4AFnebPwZS7rEC4YCRvZP2ZhuamfR8tcfDeKqFxVQT8cPQWmCJnDexDvxGuBzbRZ9ZisbrPiY1btnRxnwy",
  "key2": "5X2M6UBdrCs2FDjWqNzGZEZMAawvvEWKModz5kyQRjrkD4ekmB9wFLD7j436RumLniwRnnavWF1mYsRpRkFE457M",
  "key3": "27ffyyjBg9FanW6Cw2UKCyiwbjp1WitvPm6ddKKeYbRVqrYdPqmhtqu4cmkXF99p6RFT3GkiBDuprAMYgPLBCEXz",
  "key4": "5sV4RMfTeLiJJ1xbWxA6bb6dYaFuDV3BSrXjbramiYG4CFn2bLNAN9McBpWW8bzwjsUUwFmYqohvwMTcGGCReTg7",
  "key5": "4cqKYwaXrwcBpLPzSj2dAMMbYa54mziH2GKvuLd5a6kDkX1zzopFDJuW9Te1uZCvSL7JsTQSCC22aifF363AxmPC",
  "key6": "2Fquc3B4uCAvcjs6Z8ZmUcx4gpvvWVc4ZwmxM1Hpg3Qa2Y66Aapq76vVaVrLEZeen81yZJcdZjfnVCCWC8p6mWJK",
  "key7": "CCqH7cNViecsrbY7Z7gVztB3p4qAFfjt713EpV4fFiChX4o8JdUNq9GnoVEqapR7tBx6yqhzYM5WeoZcM82DFQV",
  "key8": "2uXg88z5JdfYpY5X475odi7jRKbuC4JRVmf8nVjTf1jjuWzoQNbSk1p8TVRn3GfUgtAzLVBrB3jEWir33MxSj6Rm",
  "key9": "2eCX81tawDcWULxtgSF2jYGXKTtSTXGFuqjbaXA2Uhbzjp77eGU44dnH6Xg96P2Wm3TwpK7TrTUPPuYuQN6G2Mty",
  "key10": "3exc9xAcmM23LJLvLbwzG8K8YZadYV3ejMZT2S1EaZjj7WQNUpGCbUMaDWzdFpbr6XDpZJztwAw6RJtgGzCqUJ3p",
  "key11": "3SxzxHGSgmzYYr516aRrYXk8cqyuvS9GPAk6ENTuvUgDu1Wn42efZBLrWyjmKZk6B89AD39nA62ihd8TbvGqHeMx",
  "key12": "NAnvV1PJKF6iLkm5Xrdwq1iFnEcrgLFDvFQtPN1h2528awu81uinJniqjeazapP8DcqVxrMEYwPxsoXGMUCMs94",
  "key13": "4L8mZVgekPwgVcQsdKoSE2jo5FvbExcnFdibwgA97XTzYru1hJeksMaeXZLQRsUWHA4eDMvgt3KuX7Td4aWwiGuG",
  "key14": "4wrqASE7CsS7a4S1EGqPxDEbcCp2pc3iUvWzyBKu27e1MkVxFFtiDaxQteWMq333oQi43t4qeATjM7cL8VFdE3Tr",
  "key15": "5vLg7D4TQJNLBRWSaUHiAr24nZaP973LzDXM5s3wskGbmddGGvP296cL4T5vPNmRWEKkJniJVPQqojJ3a21iwxCe",
  "key16": "3yPQaQz6sDDYNYD3QwhNxtjdsmSHNHDv2nfYbeF8BvvzkRMNitDkRKxvtRkc6aag59C5vTyUVfxeRREnXn7ZqsAX",
  "key17": "4C29EsS8QLwvaURqPjLKK2HkWjvrWdkwrSTAztn3pxN1ooZQKPPoTLpe1MQUZuv3KZ9eF7k86x36Zp9dT7LCYSgM",
  "key18": "3cWoFoMjGva6YonEFX9LadKiCnWEMzvMFJnXGVsXrCV6uaSc5vU4ps46Ao1XEswag9PHTchM2MiiKr5CwsDEBDLr",
  "key19": "2NwH7JVxXgbwaKajbmEg4B1iwymoUJT3VWqkcTUsEN2bpE5fCH5NtRjAvJrDo6bxsWDAiPkEjhMk6AMXhrPCJucE",
  "key20": "3suKYG7RY9YEqhKTrM66zGiB8FDTXPbovhGooczJKmURqrcZHuuVPPTgnj5DME15xbnZJz6xmW8MMRgRuq1EnVyt",
  "key21": "2dotoZBhURgvFa8vfvmHHx4pSYyTF1PzMpKkZBRff3vcEMsnSs5J67qFzRUrGFb3eJ8mHQuXdyhrTZpBYhsLis8J",
  "key22": "ytL2WdgAinj19UC3tbaoYTSdMdWmuW1qfJZeBtF2Dk11osV4m35jscVUiS4AZV41wkBCf6qDTjQiEGExrhXN6y7",
  "key23": "5GtpHfXtrYyKBBLToZgEWsqShApiiU36DRPoG374kTqvWDPD8y8gKWNH28DtESXJBMYBUBh4SY8NqFC5faCrn1JZ",
  "key24": "3PK8T9MW9ybyT4PmjJdGBmZGGg8VjEiszJbpqxUZQpwHLfZrvEaugrfpRaHLnYjiWoAkY8DUFNkVoWArdyEi45K6",
  "key25": "2MtUzkvbraNAPWcvb3FmxaNwuYBBeBwi439iVAZS9JCSZ5kQ1eEH6ejpvH5JAt72Nt649oNycJLssPT8mkjT86JJ",
  "key26": "4EVYWnt16Sf3teBMVPfWKAm3KCrjVZeQ94zAVotfTqwfsMNziBL7ken4cC24xCH5rHHkjgUNuZJQ5rhQQ8n4iz2H",
  "key27": "5PVdK78135Vxk9UYbDzwdxJvHywkJ8LtNkzzDYQLsA7SvVwFi1kkuUfXyscSTM14m6U8p6EtnBcDaRbLwbzaSs2L",
  "key28": "4mjyAcN9v6QHvoWMHnDn2PMsHbe5xkw4AeTSfnG1no4ouJVb749HwpsjREVxZ7BAhqgJjPUcakodRSXPxAyCpBoP",
  "key29": "3jawHe92kGFqCZw8GLieynwNP8dA4oKMab7avXysWamgUXijn63XjqL75ZC1Rv4S7hEvtoBTzoyLKbnYGHFkn1Mk",
  "key30": "49hJHLr5RNhFChYuwYBptnWrceoQURc9eB9H7YHksrMtUnH1rWBexSe287FqXbp2oipatj8kMSPuH9bwmipdtYFH",
  "key31": "56D6ZBVzbCdXaoksU1oGzHQU5dmwiMykHrTgWmZHAYo6RPtpPm6tXVeBzhfFs33yV6iNrqpsWwZhnptUui1G2CVX",
  "key32": "3HJWka7Q9F2XitL1XHGUZ1WYzqQCuLvudB7Y3C28waf6sVDBwvWWJJ8BWEVJUUX7TUxnUnjAnHFykTYEKckmfCXD",
  "key33": "3zkJBfwGjp6hcibPXUKeAenFpNj2yDkdACdBnrV3z7cXAD6bxWmiLYgAycDjuGWeudXGYfnA6xxYcLzfsz1ChPNJ",
  "key34": "5aNT9dKcZMhnoFamfd9TTrhZhCr2weLHcSZL6iXC3gFMmkGNYUJinGhhZiFdH7sm2pZ8KwG5Sc6sojrxT1aNPKUB",
  "key35": "594ZWvaUGDXNiCeKQcnRQ1cYnwxK4GyFLXGMdn12uNjLKsr69ntKadpiYN5ieA8g71uSiFDVnz8AuzryQgQtyzgi",
  "key36": "4yBBe6JL7QKhShxfcCeUkrc1ErVGgNHih3eMpQ4vjmJbtaUB2Mq8yGpX4bCkKYLmjBknX8bBSohQhtMiaoGZh3SC",
  "key37": "25EsqNjvLABZxCQA2RcDcasukcYN141tWc8YSmyqAkrXfr5vVxAso9tou8nhWBGFFMuTeQbzWdNekBZTdkWj1aay",
  "key38": "5nbYiEj9LrNFHCmjA3jypYfbqpuWqoU2GTdjsNDC7tyssbCTjN3wyTkjxRoT6xPGTPxrD9SoXvwzYSoMNT5VexbC",
  "key39": "62gcFW8hmrbha79sS9gA4AfYREySUUh6YxFVT1Fed4BTUx4Czx87Wm5LVeMxb93eXQbru1ueVMwBiL7oMfqcguFp",
  "key40": "3SoaDMM6mm2cFjxJvN9EidNewNAfG3N7MawpWzDL3SqWCbXxPeZLkrFQLigw39hDsVPAaE7QNkkSqEfrVNxFtcg8",
  "key41": "2nfKnYs9NRw86UCHMcFnzgnJKD5nMQoXTeMSZRt4RNG563Q4fTL5JRAPDd9yLfixPHnUg8ADo9QmkR6JZoJ743pR",
  "key42": "2PEt4mCzTV2xcCgPHatzjzsyvJjxHrTcSZg5Fq6MfUPCVmZELDvWe6nGxVfDp6LWeehVMyErN19yWd4tHsxExkTz"
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
