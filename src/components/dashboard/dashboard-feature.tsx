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
    "2MKbNWqdKqmDd73Pe2LmCbd5XP9WVdNdxUrPVyxPtKrRuPi8JGxoDeVM5SLr5sEcxDkoj6FTKWpDGxLtDko3qqTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJ5Y6P8fC5t18p5NQwkBE7WB9v6Hyq7o1cCBq4ofg5jKiGYP4ecb6th5pbjBpSyGe1vcUvNtAa3q3hamPRNEsMt",
  "key1": "PxJPBm7xZKEeHPrBxHSkX7g3CgHyZxX3kzLYyu2CoMUXAZzBS7KNv2c25ZfPw9bT8ps9DSsCn8Yedi78LEz7BSi",
  "key2": "5PyrKV8F19c3RzZd6B7HFvgWZ8EfUwdkatL13FLGwfpjR5nf21T891Ztp6jLzk9LZM3wbmf4FAYJk6SRj8YR1VA8",
  "key3": "5v3A7J543Y5ebpAyXcvAh3h7xcEAoHa9ugWNs4Jhf31zarQvFhj583G3CR2Fuh3KwKWZFnyfa3ur2iEDgHVZkfGa",
  "key4": "2B6jvKjXZMJPNHmLhoCdsyWyDJaSjbtk77NA82mTpL4ABuYbVmGkZGVsXuqDnE7kQcNCBz7yP2bwQTSr45rB2b6f",
  "key5": "45NmeHkHjuto5YzBgPmdmyyV47SqVKbkjXnGSUNoKcbD8CRPAMKqmx1KuaEMqodjE5UGnLqkA3ZPaAAG5kEcPiG8",
  "key6": "5TNX4fUvqkZWstpvNcr5WjK3F6Ar77NShwRPKWT8S1FgsYTFVfpEZTpswvPbpmqVccNYQRp4tKHs3NrFdPBSNqaB",
  "key7": "3LZqPaMvMCVYq8V5yvKD3MsdYLJriwjf6SzhTzGwev21DGxd1chYN99mzRdoxBRXRP9VF7WvYnB3s49dqVmxfJcD",
  "key8": "4wJXAhWmPDKU9b6za1ntLZqEqrWFHJyBYMH1wLnMVEX3Y9kCN9HtvV3WYG2cNnfmSS766RW2NXXjHUmWsxadgA99",
  "key9": "4D6rkv3hwGwJbmPbMvwgrw1ZHEu9mYwytC3YCyejk52myxdsiAsjp8SobevDsFT3j2KvBxM4nyx7cXY7v7tkErrB",
  "key10": "2q1aygDce8tuc5D7LsnLaX8uBBhT9w1NFmFU6xZ2mJRZsU95diqh6nQSqqtmddj6VccExPHiL6sJKYwn5dyY47yo",
  "key11": "Kk2JCTAbRKbwJ76cvgtfdLXsTuVbvPvuu9ZUTGSaz1MLXZchjRL72GuBJmwyuvVd7pEq5uJAsh3j7sunqqKLmav",
  "key12": "64WgbJGT9GoTTYkjpZasPcuL1kx8oNuv3tRR6a1wEzR4hknmZwJdQYXcnV9B8ffqAjPGNP58QkTx5zxFs9pRvBxs",
  "key13": "3RTExgaNQrNfWrqXzG4RKLNuZEkZvf35vC2FEVu1yvt3ZxHHwW9rnDLuwuNRhHGng1zw1BnU675D2RpDUH4aXN2V",
  "key14": "66L3tHYtrhGdCcR57ghMjAL6oXJK2Jbwuv3rsfCy8SJ97VbwTHRaH8LZZqi7sDghtvMPh8ioMeYYeNuo9NrPSeqE",
  "key15": "3o2ptyWDRybxmKJSmGHzcc31RPb7tMLdGsYnnXdB3yeqQbrGwcTYVye6sgDSEfCmqD6xpXXgoQegBUDmFdLWTWcX",
  "key16": "3V2ExMSACq9QRLX8wp6VssjDN3NWb3TuhEqWpftmYxB6dd4ZmpqR6PCuJvwwc2GRDQxuWQCELpZwsuZnErTM3yi",
  "key17": "5k7uvwBn4t1Z3p8saQvr3CAbQnNcaFrhqsHd6dMKcAs2uSJze7SJpc88E4YeMGxstWy52Awsf3fxPKAkN7jWuw2s",
  "key18": "3qLbutEXF5aANXQqjextwixaSzSZtPkVCYjJ37Nd8p7vxVN5Yq9rgaPjj7kDBvDFCovBevnB9CwvkGxGk5Qw9mnN",
  "key19": "BLgrKC8UeEv9u9qi3UHQSTFhsfX5f6d9EhpaFYNZ9iLhTvEh7n9FBnXbV2Xbr1rLgqro48pQZa4kGf8hkCLvWWc",
  "key20": "26jaxPJgxyAy8eVmabS2FW45NZz2cqcLGTuXAgsWCZ8hXQRjfJJeKkqSne2RFihbLL4symVVNU9jUGKQJt4LUDUZ",
  "key21": "3CGahABhVMwSEqDnr8JjmBh1tFRynGqZvoPY5jfmTACbgghLF7rCHPuumJcDYyCg2zQrTKYKkSLvRuArBL1zqhSy",
  "key22": "3RHzqPc1ZnGhoUg4xMLe4BBaKXf2keKGhqWLyuFrg2srY7dNfw7HzJ37LBMcBh36Cx9ABN4BpKPT1xAnw7YxcjeE",
  "key23": "21oEvsRvQBqDfZWPnRbzAv67knDTmtK4Y7xQwBAEQWZZm8jryCsWeF8yx59q6vWhMgsgQquJyDdqrgLxFf7M7gh6",
  "key24": "oNFgNBvVCKPxWa29y6btVg6GgtCFMDV1G5LNhy4d7KyCTopFaU2L2NhnwwPEJbRdMA4Xood7M4RutJVknYYZy18",
  "key25": "5C84iVs31KCdXSxGzjHQnA8zArUsvLDnqxaysMWYa3H8iy3NMpY6fjZw5zWQfR7zwa4Pr3kf2J6wR2E7JbqtxbtE",
  "key26": "wqD3ZZVmWoQLD8YrGaYSqo7GwbUcgZUG1KJPdnVLWUwt4ffjWQkGu9KdBf6GmrAkzn4WMMc11zeyukcDDBe1k6N",
  "key27": "GVWgRQ9RGu2Tyk9XMoCaFQAfp1gHiF47cStYBq6tPMa7rnA2k1BaYcKYtyJBZsjGUM2cst9fT48WTBTAxzDj7HD",
  "key28": "3JpTgrEZK9teWeKB8U5hVxuiQDcF37v6GxQDLoaFLdWCwnaEf6jMEuBLRuisd7dqw5fnQ64oHpGofCckVnjsmaQP",
  "key29": "6Sf4RrnQsSN3htWEpbocmfhxxfTnHQXL6wAydxRSCjZHVC9meyQEZuoMxH1QHaqLiTVdY79at6eUuC4dBShmHNP",
  "key30": "b8hFcUG1rDZ16NfNsLS6HQNZLtsuEqma8JfzyT1DbV46119MzEB3Y6mxQ1ujruHcKLJ5MdqsU55dzJoPESn74wT",
  "key31": "3aRXy67XbJTcBF9nE6tp8MCzkyYR1iCDHwsiQ2xZxkgBG837HgajktUYyCnmUw661w2UaJJ67cbsDTDPp8odXm1",
  "key32": "49VDPwqP5DvL5kgShsi4G1Ar7DtTUeuBxY94FDbiWqbzCzgJ3Rx2FnMHphMzTdHNL8u6mtvneHa3qZ3VqNeAUe6Q",
  "key33": "3UnriHNwb9WerF6JPzcftPczn8ueeLPRffgQ5hFXhHoQK7VdLYZ4wEV25omGYcVo3U2WdnypWtgecBsguYMPYE5t",
  "key34": "58VBH2hyKYcZnjnh4pxL3GUCvBoJ14hmXXYU82mvVw3nmE9tgzwLfpBvKS7dAezbm4JGnQ4qiAz82w4daProoYxv",
  "key35": "4VUDb2EL1p4XoGPkYBdG6U1QkARsxjgUDccMzP4cmmL52iPtGiGfS6RNXzjaKCRSdLiVxKWLrA6NPiXPY7PGzS4S",
  "key36": "2wTbCgudwLBvoHUB2nhnFxgFRGErHVi3XvrQ8ZwfCfZF5YanmAQBbWUUJvH4Zikiy6q2VNz2jDAbbd7LUzn9PjmS",
  "key37": "39Lcf7uXmsCxA2wUM4GYb7Ca8ryF3pATPStet47iJZXFytSK37eA77SX3v6DyV9hXmq7ahN9pqad3s2es7uyZ3bB",
  "key38": "5wmwFvtMUTSyYumMsVbb35BvQUp9R2Gb5RoqGU6u6f5PoJKf1TQ8HLmjpL5o6WvcXHEwRYuQ13faZjnXKWTWmoY6",
  "key39": "2v2qQ3wJ6hqCw4xtZVBuov6QXDkmLvQvkbSgGzuVD44niMCbG3ZWV8SncgTttcbsiotitLw2resq5pf3QZx1aapk",
  "key40": "3XXh5WeWiapQhkeSLrjekoCyxXgm1NoowNouanoFAm2jw2RLu5F4tagS6QufZMQqNDcgUcYyUkxXY9SKoYRWt4eb",
  "key41": "2qojSG36dvCtDxyyiyur56H6KGHuvTUN915aC4qsH15h2sEFSARVoMjkAmZbFdt4oYAjzbVW5Q3aAW6mxV3WD4XB",
  "key42": "2wTVtGBq6R1Yc8yadrhLTiU5VpbURqKoWyMyJYcA3sCfANQdgCyR1VA7KJwXMUq83aVvLhjm7d1YGz5KHKuV8mq",
  "key43": "4BGxBi8os5CwDWA1QagbQX1TEcydHtyakr6e6SVcc9zfgqMAQK4phcWUs28xxSx7cHybshJg36TUeDVHc4phKfJ",
  "key44": "37eyKXD4QtDJud9VPEMci8eiXSo36GHkYVjuZ2sESaRq3dgVghA3FUB7aT7oZbQn6hm4564Ax6WiQisCeAjsQYji",
  "key45": "3VTJcN2JesuFo5CvLMBW3vzy6kEsXbKZxpK8p8mMtjgXmHFhWpgZfVWRzE89AvgexrAGgbwAjUsPp4PEiKRPBhzN",
  "key46": "59rTdMBc8wNTivab1XNapHzK1NrmdqQHtwrZzoHsxbxkgz1nBsYK82LWb4aBW2tJvLouz7mwJ3MCZLsGqmWTHL4T",
  "key47": "2ctAPV6vZsqoXkXirCuEMomVcQxohFdNyorbuXtz4UxiRAPwuNavxgHwS7BLgXkFm3Nji7F1xXUhP1smQhugGubW",
  "key48": "5orKcyrfvZbvNt5sd9orNU6eodS2ffNLg8e5RMGHZ2WDjZzj6HaGEycGYJ9J2Xm8AXSeeWkns4MZshhvyZPLSQcb"
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
