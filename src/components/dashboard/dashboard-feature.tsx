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
    "5NJSKqq9r9oaykH5cNaXKJZpp1WDeBMeg4a76RNTsg2Kdqm9hS8ADTXKmbykhjQxF67nPPbRk6AkBTXZevXxtarj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5utbfL1n8tXAQV7JWCdmr4zxqzZvwE6RYAhRGPTixSjkSLjh5d3UymTXwtUcwYQm1yT9sU5Th4aWy6rq3KV6KfnZ",
  "key1": "36KM1KzyqjgsW1YGAwqykBxjYw6Ltv2smAgkot1jnScLtm4nLzbX3rTJW1kBiUZ8bbewAAy71UUFhJDwDn8w93Cp",
  "key2": "4u8uEerAoeeXzkT5MfYALv9XXZXojKEMyWtJGhTeYm9Es4HmNJXXNfeLi6jd1YVBeq8JudkrWFwfMdXUzNP7Ecbi",
  "key3": "38VRTEt1up8U55iJBDoGJhZw7N3XirQspNwU3FnuUAm94n9DoyaAKsZEDzzHYbTe5f73f8VDz3ai112u5FUGcqai",
  "key4": "5Zg2nunoBGxWinHQLNAY3ygHJPTWjzmUUcYUFoxr5BoaJogU2uef8KHvSq8GLC7D4urv5PwdcU2mdkrmv2dNAeXS",
  "key5": "7xCX7frR3N96j3ZsYdg8xwiTcq2xr6DibyZUw4jJJK2ybq9SqY3SGZ9rhyJbFQmrnFch8B6LWgCdex2MmnJ7qYK",
  "key6": "4LCSF8yQPRYCxAiqNFoPJdFpXwhdpceG1g9Kdz3GMmeUPmCRVk1A3TnG27Myg37rXBh1QHLbs7CbBbRCRWgYVJWZ",
  "key7": "4SAN2Eoy1HZL9NMsU3VWjTNrBiBwE7yU94xA7NkpQs5djsXBMFaDmTSxo1hSwAnKWiycUaDUi4gdfa7kpETFeYKi",
  "key8": "27rv4yKG12KSNknqbood8dJzrGfVPgL9D46Q8LZMvWtkhuGzbRxrg6NoGNCrqA5U9tKKaAVqhM2sio6xL44wmx6N",
  "key9": "GNHdBf5ZHVZQykKNzLM1oTUKs7Snquerj9hY6MqAcCPHeiKe6vFJQAGpwc9tGkaieBVcuRiRTnn7Lhm7WkXiYyu",
  "key10": "4RqZ53hTo7bWoNE5azkZbQnxD3a6RxzWJd1ybDdE6vHb5iLo4Awev52EwZ9kTYxQZnaEgkTasea894ixsWwdXmtA",
  "key11": "2TF7iyZght6Ta5wz2xGNQzErrFTbGZwQcWFazQCNRrviRpGTyrSDKi2wfoDxA7cnxF6phDvMXenGNzZU2ZgX9T4w",
  "key12": "3JSHNmZGcxbc4G2a5HhnauLT53cfom7xVDtv7niTxHoGuQdKEzwz7stj8YzVbwHb7MBwiLwLuMaFqxLNEaJU5Ed4",
  "key13": "2nSc8PjBW2CfoMQtokiPVAVit3tkt8pFGYe69nYx7Tzp9yFuByQo1cdrQ7CiPoXrsp7yfXWDR36w1kQynccxV5NW",
  "key14": "3JxcAEtud8rJNWR2z7myf5bUzdZ4njS3ErnYj7fe3fshE1e6DRMs7uyvPSYEkdUyNxv2Cqnpq5y85RS7osR9BAqQ",
  "key15": "oa4SoodqMRjwD3ERddJ46hx7GwGbj35hyT2XoPLJX14K3kmgkcjJXzinWiLwkeHJsQwmzcZhXynnMeiTQrX1HNR",
  "key16": "5E4xWoP7m45GasEcurkScJWgcBPs4ksrvvCDro477nUGzE3Q8YzaHsUyj1SmtBAhzadeEuEfLEtRmTvcNGekfZWY",
  "key17": "67EPhv65JuEmcHZSn2EGZmVoaa348oFVQczze57TMdeA7ootW2Z6igsDssLi2qnV3NhsBWKcZgdMPME7wcUw1iPh",
  "key18": "F56gZkh4g5iEebtohKXmYzgWGJmUdpepPNy8j9UE17XvyY6ojRhGsNYwG7rsKk7tzhDQxCmbPcugQfUCdBdC1Df",
  "key19": "4dSHmtUG9GJVPchj3uU8zFp76qebFnKu7jJQ1VsbQf5PeBkGj6oEQaV5vG6NYaXvb7WgKfQvPH2JwdDRT6pMURuU",
  "key20": "3YNZVuQ2ngX6VTNDrtDyzhMC8i1xqoqAbAFuRvGeRyL6ddZx5NqqgkEPkSAPTr9XoMGSYxoxTh9JC39y5pnbwxhF",
  "key21": "5kQGtexhV9PXbqVapoz2kBoNCSvun86Gcm1dTPyr9kmeLQ4C3coZnWrfWxTefkHyKphfkeUm8hSC8VRNFigzEbRa",
  "key22": "wVjqs85ac7RjibA98Gxa66xvm2ta6h93Eq1PMzuAfCv6SzVgUvb43nNLCC2m3qYY2rkxWYJ96yUzeHkXyMHvHot",
  "key23": "32WZuUjYFiRx4CCP78w9hW37TZG1BYfsmh3t9v4ASUMzVqZja5PeorWCFkL27TNQ1Qm4frbyuEgcmAv51T14oBan",
  "key24": "5sW2PYSds84jwUugXt5qmvguNEnHamxj7dWaafj5Nb7hJKZgrzpUUy3zQXoGphfakEwqwi7V9C91x48z49rhUN3C",
  "key25": "1t4Sa5Cq99UyiENwRF4Yr9w74nBQK8eLnALPE7rXdhJp5fRWaPz3FvLxrb5j9PzTkJ3UQ5qYaqcWx78UiYcULp5",
  "key26": "31oDyWFcZZopEWzTLXYMF6BsiMkFRL56fcFQMwaXwS6u9bt7eL5rnocpnntc8VyWe1gLM6KpmT77ZLmjd8LUBci8",
  "key27": "2Z8z1rkJ6CdjBWaRjKr9AvRfXxWv3S1ejMe4TpvNYBjtVCypZauCWdUaxMaMuGaSCWZNKkAGJrtSebiygh5R7dhh",
  "key28": "3VtpKxz8N674d9Yiw3Yh7BddYYpWaXcs3pVyfkywUdvS6Zsr4oyKyfRTQc8JmQE1rUZaoPv6YdAiPikYTnnv6S3p",
  "key29": "55azuyqQS5A9RY5RFn7J4bY21kuB684Z7Q2PiXQkX5aHVBbFgwD7jdqp8uoeHfEKpZSEWe5Yr9iScDGQ5cFvxrB4",
  "key30": "5ah6bGd3sv8w73QdozT157YdjFCKJacX7qv4vk7bR66cXKJFJjSq3GJZ6JjMR9wbnPnJcFPkSZ6cT7KDdWPkaR3Z",
  "key31": "3CKb1S8GenKSQTX1VqdbdGiKJogq4Qxj7dUovdDQ5LgmfqFUyeHbQfp6YBkKuFTfRDFDhZ98kKpKExVoSXYJHz9o",
  "key32": "4Tk3XLz7EqU8ziAyLoPHwaMDWVKRjx8a1iNMjZk3HXGoqCaLmgy4jAZvZdtGv6oiGv3LwLXiHY4mafdVeQFujt2i",
  "key33": "49BC6aLVrBbF6hEj7u36WCqvpqDTUq1b17wRfAnrmp6Sa3WwFb1jQnpiJEyFhPb5a94No4zJi7P5YzfDVt9APZNQ",
  "key34": "Lt5CWEsZnSEKx5HD6LtEXfuHdf64DXZ9V17cmtEHbAfk41ePk3gEgntiJ9Cr5HEudCMdYTHp2dMPWaoezfT3xqm",
  "key35": "4TDuXfvAva751pvdHAQuuJ7czvp3gmE4rPywB7U1A8oDX7Phr7aDc4YLzWLTqWWzaWz3Zxhcku3DjDUteuAA3Xow",
  "key36": "4cUWqvgzrXfkpxELLEcCrQkBbrH2grY9tPcsbsvfiVDd7Q52JBKo4a9VTEb34ZWiRBMQJottR1HWXh9yRdtJCwpM",
  "key37": "3UyYR75achyGE9eZt3fBXgECPUBrouTtQonQwS13dJ6dDqFWXmgixHwojeymEaz9X42Qmzm7EkMLU6KtjxNenSwK",
  "key38": "YWzsbR4uRKEodmprWqR1BFGc7aMQorHacH5tMF6GPqHeZ7mFd6eLxJqzUkLTMxnCGeAMmoatGQfD2Z71FeCMBSu",
  "key39": "xWA7iPoeXoTCdULLEB7sQdNFSEBDBqbB31THbbrUVtvhuQr95dLPGBjvDhy185kWpgnfUb8E1CPCJ8HR2GJBUPf",
  "key40": "36Fb3WApBiYaWFnU1eTtu6UnGXmStY919k37AAuc5NWCc1EtJVQdRgy7y4RNf26s6cgDYH6TBVFDduELoGQbhaje",
  "key41": "5BfAZAYCt27dhmGHaKRywUvpprCCLzZ21jRTAJbqAY8iUbwScmmMDNVDJzMd2XCTz8fwcbxuo6Hc3f3RCv1zbNQ",
  "key42": "5huhtRaDy74cMmXcXRS35EQE9o7TEKUptqadNtLYvMF2JFH1q7anTupGPN2z1A64bM6ujD4JmUovF9JdHdZjr7Kv",
  "key43": "23UWds2RLrGSQmUPhYG3yeWUyXDijZEoUuQHkzG28FkBFTr5AK3QboNbPCMPEJWFGM7Hih9UM7X8bbS3KmAc3xDy",
  "key44": "4uT9o6PzMbEe1UGdkm89LUjiFQJ5rWMTDTv1ZcA3Beu2adZG4MXdjeZhpHenqsRvHNrnVde9pkN8yckHWorvPfnu",
  "key45": "gHrhn6gHGFYbwyT44nRvocpb97oKtoN4YGQRhMySTZAymSQTFdk7UzpTTmgD9vy54WgzHNtNqW6b2U6zaRrzFwr",
  "key46": "61QhduE8i5XRLfTcsK4fQYNQrAWoq8eFPQVkf6jsuzp1VPif1nGu2rvaCcsE9og7dLbxyN7JZCHkeSnA4MLoS8uC",
  "key47": "3sK5SvBaHhR5WH2RPxXLpapjjp6Y4XaHR1KTJ3DkW8FQhAdjqtquGdtGeu4HFyjRX7LurHzsqbrJ35xN9jhyP8tF",
  "key48": "3diLSX8veycBrUZZmV9t55eZjikuCC27AjS9iUw8RuMQmZjbEDQYMJcrqunETnuNwEH6FS3Qu4k56HAG2HZsDc6D"
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
