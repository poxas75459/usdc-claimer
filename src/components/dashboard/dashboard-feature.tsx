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
    "464jDvMWRKBtxscCdqPTwW3UrNU2rkx5Y6hN1V8Es91Goihp8CcnwmLB3L6QNjX48E5rzsFNVHJeemBWMGM24Kki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xF4s6XpipBoTZMZJJ39wupBzmCKLs7gNydgoSdrPQaMMFKAuCEJwuLbzrqKeAF3y6cF1BVG9Rf3w2GHpZw5pZCm",
  "key1": "5b5vWoBMFZ6iEwsyXccgd1tGww87KpxGQMjg6f7We1YZ7ZDxCUsnmBmcGW9X7VyMznP1A3rzvST8kC4T4YcWhngk",
  "key2": "2EqGWZqn6VKUjN9va3BctgRoUPBZ9d9nybZfrYW7GeHSCya3Kvd6wKKV8dCzR2Tu2sd4ASWQur474H4FZxvmc4SM",
  "key3": "YBZ2fkzbBJBnBbCu99eZE7zmmztsiky5xohwLR9MrVPLY6Trn6mYjPLdQzJwj99Mxn36oofhxVR2Ca4BP6fKBuF",
  "key4": "8EVV1vd4fq9eU2SfyER8aC35tTJjWoCsZnL8VmeggyMr7D47PimCsGX94xhJq5i4tRqXxduURKGGpk6h22i9ebU",
  "key5": "241SDj15oaoHRj4txTDR7dfFHtCRkgS6befaoEyxHDc62zTDPcUNm7zv8ootnVBApVna26UhzdsnAMwT4t5rHgRv",
  "key6": "5LeRyGYo2iB8v2iLKCoXkqnGzZMwDYqeq26v5E2p4zEnmpdYmnDPcangWsDVtUb3RX7VJE5WcSTKA8yK2L93Q3Va",
  "key7": "KJjbVAbVNSNE1h1zdVJM3hnXTL4M8aid8oSYmGSZ1iRVQhRxjoSvadtkJpAHNQ5LHxdXBjUP5dWhGgKb5ZM1gL8",
  "key8": "3YeHxHzeS5jWrvYVDwm3RWbVbcvQ1aGJtuVb9DSiWd9DCJRsLVX78CARPVU9WbpfHoziTrNReq7xqB3GVFfhbDuW",
  "key9": "mQmeLqkQstmf3aXmafAqEwnE9r62mENE8fBrzZwjeeuabvoAQLYe7SArdQTJNiXnw1yVs4UNaaeWJYsPkfmWKyT",
  "key10": "4Rbb3D2UcQTjBwykRiMVbSs4rXTmcx6FWYi5S9jNoRo1rEMJjedZs8Vqx2fXgdNZZfjUgEe761HADPR3NLWWpBru",
  "key11": "42PyxrfhgkwFa7adQZXFR1PbQGYvH77HNt1A2eR63j1FqaEdSchoDqMtjoQgM3SeyxiXdHE22gTe2icmToadhzks",
  "key12": "2vg2TBLJMgN8CHahqY4oiETDJ1jaGD8ht1hEJYFQJeC1PGsuTXuGt2eBMR6gjijGAyzbWSX7qhzGXfjPmsmVnWFP",
  "key13": "4xpVSbDhxLgVGr1J8QBfgC6eaD1mXDekwfw4apu4KLaYz6AzY1xRyhAxb3UegX4chnENX1u8xuemrjZ4WCrBt6Lw",
  "key14": "2Pty47U5Bmm2nVjvMNKLDbadw3Z8Kyf3LxUUEvJTj4WCR8FF7tQLuUjLYVeGwpgprCQWhitNNjYScMmcorZ3PRDT",
  "key15": "3VfhnQ8iAbQBugeG4jSjX3jZQKTzTsKkGCiy9ki1Sh3HH84n8gJG6rLPassRyp4RH8GjadyZK4dYP7nMdKk4MPHS",
  "key16": "3rABNMqr84NwUjSsy9emXJUhehsFN1cQmznY9pAuQShVsszF2T3qJfkjKQchC9Lc1Prnem7gDomSQVhYbjskpfzR",
  "key17": "2KjZ19pGDiW9ST9AzD5QPBVuK2by6uheWzyFm5qGCM9TZEFiqZ3cz36at4sRs5Hz23GECScKzJfuvZPpzR7Wrus6",
  "key18": "3Gj28RkqwhG4CX85vgVPvfopoLWBeCiNdxCv7d56uNbb1MKFJRi5A71odpanNLAAEyYqrbxzzDt9Kyk2sURDPLBj",
  "key19": "uEKYdDenSoafC7ohXm1xfwDsdw9u74GHfhiW6tL43rdesYckPS2J3exUtmFT95dRLGhFZNw6UXDnAAPVWruz8Lg",
  "key20": "51Zzm9ijhmDzDnG1fWz6msbHsUnaeu7q5ZqVbfeZnpe2T724LJRLEaEwPc6mtRDchAH4VPpsHGfkiwALCQswm6VM",
  "key21": "4UWv4rs3jTd5efmu945Vnevp3P7XpUuqpmCgkVeesVKCPhU1hoie1tAqNSp36rvKsbzDLcrwRexisGGfLZNE7uyu",
  "key22": "kArWNWZohyjqaMLCQowCSEJywRefaaGhnfZQsNszNkchLNMKoWhoeuA9VRMjqiDyMCZd9y5dpQCv76vtjMCEebd",
  "key23": "3kgUs3tkGaewFotAgupJ4zvPo8oUtktgqkCcg6vExwDaRundvV8PreRzYoAHR6eDqte17bJ9kvHigzTARVvoXj8g",
  "key24": "4uQnHdMVNwHSYFEwEtCLeWgh4JTZAK1gLLPsSxBCRbvWdzKu7NKihAdcpG89oA4grMnV6vKcMd51QUQYzVcb7SFM",
  "key25": "4WcFmBj1hVBEDFDwrK7j7hV6jRunop9KsMtdyHwFv7JNPd5M4BzaH8CTHP2NdSyhTx5coKJNJaYxDiPDZfhk5nmW",
  "key26": "5tZ13cxL9YQibxSPWH9nmgYCMJfk5R5y37P75fjhndgGs82BYGd4xeTpdDHHHwhphrSWdErdBXMNtAYKkenkwRe3",
  "key27": "3AWJGRcW6YQimRYW3YN3YHo32Bhtohvz21xSryMpsSWn5HhcNesHSbAb5TSRy99GCAYVt1eZjT7BiAb4GPWVMRN4",
  "key28": "RRyDrpZsAqcxvUUYEZUW8YHDwEG2nftHdC4A3QuyPFtQvH9kb3CTAMrsf3LhQEgUjKrRhvjHS8mjicQHqsTAuSi",
  "key29": "2ySzxcs9d8qSr3F9SFAEoKeu46qVHQYtfDeDwqQiPLpETwnrNZWWUPdrPjRmwaAFhiRWbhTWwTXWQnzZ6NqVCHTP",
  "key30": "3K7c1DuYyKrzvLr2jsVdTTJBkwUAdLQGXBPTqKchYSmJH9t4vuPp9M8zvfXpench7BsecWWwGn1WBVips77yPfEA",
  "key31": "2NHXJB9WnF1zA9FG5rj5C2GQLQ32NdxycQif4csFKWsKkFqwMRb8iSLW74BgeZometaHuGcnWJn1wWpkgjECv9AR",
  "key32": "ksu8HUE9ZmbAhKhSrUSbXc54KCauppR5ZgQPUkEnnMivQ1r9k4y5EfwzuuAcpSY4xjJKxGKP8xkFqxP4ZZXc1wh",
  "key33": "5SfNoxNLoD3kRSMpCdNQctCFWP6GVEJLR7H6vvyXHrWXC7KXcu6nAJyDeHDvCaZV7UvrgNS764DyJpGyLAhs4N2i",
  "key34": "2xyySH8YQcb4amSehrHYViF8GoGw5HqstgwUtcuFFE8Y16jy3Vxib64L4yUB4JTLC596zgB1PgvyhmxXhaNeHqRW",
  "key35": "4o15U48EJRnqaCge8DfvfNSNgGmuMd8zpugkyUZZfCCk1vaornJfsZ3cVSq1fi2mcXWr4gP6RLjy87vmiMSGUroD",
  "key36": "2QRb98SQE8zDCLttsUEus13f5bTYF4NgV1QUZwncQc2C3NuzoQ5XfvzbpxiULF4iZT2Hy7aBE5dt4iaL7Ng9ifL1",
  "key37": "5G11uC4ZQc1ngqTLQjDHzzVBTDSX9LohKLfGq8LnkhtQkABnYkH2sN3Ecobr6wTNh9vgRx5cLjdmefFUbjoNPqsY",
  "key38": "3iisg6A566kMv7kDtGH4RFjHraLgXVb31bNAtM1DDPQ73hYgMZutw5ogBkcdnXfa7w2zyCbnw2b2NR25jGzQPqjm",
  "key39": "2CXKu98tYc2zKLJYRJfMZAXSZshTLcWaxBRqoaJXopGQzpEf9r3XLBrqjhTi6XStyytsyYeUUoggJHrcqD15t5qY",
  "key40": "4qUAM6Df9PXAxh4BRcWyyM6p49epJLwEeAmfgJ4z7JhjEUeFbYQLqYHRzEzQDzYkipLeq3asVgZ9iiB3JsUkusrU",
  "key41": "2zf4HEM8mo5433Ry4b17EyfBNxe37rkrau76csCvmRyMkBRYTmjajuMJNFufD7fVtrQH8btgZxSDgPwYyzjWM16P",
  "key42": "44WpwpMaicph59A2twSam4bCoZp71GXot6ke1fKTuykyJV1yt3cc9HGQuG6j5CuSLz2ZwBmt26ZVR7qerDcvvTRf",
  "key43": "35xbQtkxuWPUBW3cPQKgNDDVKBFjTHJLhyfVtmcLXi7t1Fg9zABe2HS9DCXxpsK8fux5us6YmtTJmmi7YoeySLdD"
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
