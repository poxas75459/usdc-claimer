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
    "3HU5yJGX37jq1Vg6mm19iqmMVaGrArh6mDvxpeYCvHje6BwuwMyzBRTBqVJJbsgcfFq9gzuJezWgL8GCsVFSGyUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DYGHGRhvZaipE1DeciX541T1LQADhK4t6gXA22UwnNtv8MtrwHyxdaDfuLtWjCtvCT8TFQv3w62JMZAjoEgZBbB",
  "key1": "YB9xAWtvwMhH3K7A9xaUoQYXTZbhXjo2HVgXNFeZ2Z1abMXbTTJ19dWfbRsyqN6YiSqti7uKoz7wefoQ9nFT6yy",
  "key2": "2P4o4VuLkREKyBZX8j7N38K7hPwvhcpnLrxPU2EjuauTTLL3oxjx8ETfsS5RPkM4PPQGmnGT21tm638pr9pruWYz",
  "key3": "4cp4AgQb4pZUx4asnvK3N8zQBpt8Bv6guC5V9SuGfpG89VeP7KR3YAhvmmCUi4kxwyJKYx8Ru61F4AcVBH8ePXyK",
  "key4": "MTXag15udcA9bRDiLCgp6yCdfCrZSRZA4UGiSN4ZnSZt9JBYTZcvwURiRej1LX6mefSAL2mc4EwbpAXomwmL6ye",
  "key5": "4ATep9FvUtWGqVewan3HrV7Hfvn2DubytCVpd5PMtaBF8JuxVdJyDCdy45BBf4EYXpy5CgvrYa5PK5EZbcvmw5JY",
  "key6": "3fL6ZuiEyFiV57CxN2dS2huF2i7kvo5JC8htMtKuue9bpJL9wvf1EHLxxfpxJPRNmYC7m4smoziwVnhT92qCJA1t",
  "key7": "NgR3tXdJggbyNSvD8ySw3L8nqs2wyQxYJNiuNWRz5ijTc4bX3iSoq1LHhkA1wiYMLayUkTnA9Veb5sBWTMTmJVV",
  "key8": "jzQFHBiP5GNtxmmb5ZzNwKoLpjZPPAVHtyvK5tXkKmCHQ14Nqie2zUmjCgmGpJ5fi8CwDueqBtTGbYUzyGEGqPQ",
  "key9": "LTWdhyAZuntsV8wuDzAa2f3ssjwTtaZm4kyzshRPMv55kPueWSPMQvoTPDXFUdF3cW7PPc9maF7HCLT4yjNeoyh",
  "key10": "5Q79HN5DgpjYBbV6RckmXgzfcHiroez3hQmM85VPtBkYrdAd396v4FDFtVTqefUFVgBozca1J5VhAdqQQB2JN1WS",
  "key11": "3oyQ8udAXmWywRFb5qmUHw3VL2RxM87uSWv2uKGBQHbnwXYVn798ttsPDyexzdfdV7iNNzysCuekHJL7hE2t64dF",
  "key12": "2MwPTZo8AyB6FLoF4K6xzWQnZQBqva4HQe6aeXAchr8fHRdQbNKFYdit9VpY3ERtgQUsNbX6YiRU3cgWwTRZ6qRd",
  "key13": "4wE9NxByMqDDLWvuJoD5HzLLSLNH8WkEaYUfXF28xx6Cs8SNoCg4AHYEXRDNVkGB92tMNRo2MNzbJ1QSfdY2PRck",
  "key14": "5nUySAwHNbCCGwp895hPA4tzyjEifhGtogBtkZPg9f7VFXWyyPDSqu3zXqMsTBwaiHiz7cQcDRLGJYiSGw6YcA15",
  "key15": "5VUevu6mbpDDqPAfFNBKqdUigpX7iTkSyhp2kQk7tTwdG9BSW2vG5HMAE97SV4fSRRMQ2AhHKujLHbwsQ4cmUfPG",
  "key16": "4e6UpifRFswNRkRtQ4cWL5DzKcvQ82pNTm71cJHZVK3sxAv61CYeWvQn66b3M6BxfTK6LJxjVMghbAmn9Z5yxjvC",
  "key17": "EK9wwgcoeBnn44jpSrFq1M7aJcuDdvCjNbj8T3BH68hbwB1XwXbxC8KXtfYhQywdRDNRkRkvph4HugfjotM1BdA",
  "key18": "FtkX5JPib4FijTNQTbmaeWWQEpeVusuoaC149u2vbfypML5LdA2ZvV1HXBbHFu5ST4Gt6ozgnCSxgVeJP9ZYq2u",
  "key19": "2p136LH7zJ9WXmCyzn28HeTWnsQEMac6JddbMAeGkRNcKmkV7WmmPyYTTVAAggXxSVdGc5fCL7RoLKTWt9xj8qwX",
  "key20": "m1ZxSodq2kRNec8vLAPFWeKLS6nx33sCAR5VwGWZggE1eShNFdDULg2YYAZNXjgKshwSuWPKWbD2DcJbAPwCgYz",
  "key21": "5nzpjq7PMzVpbT5vVaFdvpTDk1Ruw28biLExwyX4gU9gSL9pkWxyAFuNCv6xDMM8nUvCvuT9Jr2Pu1PGrsCUz4Ge",
  "key22": "3ECV8CrypTUjpZbifV2TJdpUcQSZR4TNvtyaN5PJ7oHFsCTrM7WxJoGBj5i2b7ymAr9nracZSK3xCMkVY9HTQDUm",
  "key23": "U9RR75jBbwWL6mEfaHiLvXituLYct63qHkHhEfq5UMUpghZovsfqwF4vsgb7zXMmT316jXC7KJBagg68XdYTetA",
  "key24": "4nQiBnGaPJ6m6WwMuFDZUJknELY9vT4Nxd2ouR5NaQbxvSHuwqaQLmKYN1J3mK2v6ZH1Jt4ejBKht6opbcf4xTqS",
  "key25": "5mkdbGdfYoP9NGZuHhKrqKEbf91HPJAa7KQaRTTuk3YPeesZsDLiBQ5iUyYRTyU44FsPuHvmzYwoVfJdA2j8pRyp",
  "key26": "5wA244ZJJH74nzwJNd6RYpp15tTYqgatfhK3Sqbh1P3JuVZaBcwVwjKk4XCV2YCUJPfWYfz3RvK2aNUMwuS5Rvw5",
  "key27": "2qhLswnQnyEMJfMTJoiTBkuQ24uDaA8ScFe6xJiLbGk2WmZsgC9mNkCMYpHdEcwNbJpDtoT1Gpd1tSoLjqVPSE46",
  "key28": "hpdKWMVYpefe5u7hVAQQ132Qa6x6RxdhJDAbWVhaKCZnrGephoqsw2Zsq1nTQfQ1r1FYSRVbcnzUM9MD2BwKVLf",
  "key29": "UfnhDJwmypEAtZvyAkNpkh2ayrtFt1sdzhQwxFTYLjeWqQCo8wbcLnTMnJAbDpQDqePA2T7e2TBBrtMarCQNCcp",
  "key30": "s5EeU7JCXMCoxkDmdrJRpNQ4VQDunNTCTwBJixAdNRLS6GgYdnvKdQWPLdosvsoE1wdYSRSJRDdAS4ZqrwHo3FW",
  "key31": "2NPWcitTNczaN4Y6xQ9nRKGyTodi2pykVNKeHFrvu5uXs5EBtyKnj3V13Z5QLgqYVZrrVwqnW3VVAkK9SVAQwMwX",
  "key32": "3H6MR36ReyB1bkHnfFzgscbg3t1usj2AKxzqDynaLkwknG7zA1rhRAvRPMPBZCRY24uHt95effyBNSmVWCXZtLfH",
  "key33": "6JHTAkhP3U5XiiznuwQfABNFXCCx4UoWGt82Qu6ZzRaREZm5i4YG3sy1BzpNaSLd4LESkRZu5N18nXmCqZjdyNn",
  "key34": "4UAVyZVBDx9NKdP25Uaa3exkfzAsgFUyijFhbDuwjUFpwBqkAQeHncirbGqx76ScgFNAjDhAEuJG2fsYTiaPU3mg",
  "key35": "2ZRkZ3r4i2E6MQJpgJvy7F6Q5E5yTiqH3BXTpPm1QFN8ScUPmRACU9qC6PFopaGVogbQeN7po3vks4FiPS1dVC6r",
  "key36": "wN54dd2TDUJTopKFsY25pTqfajvSA35EzdCXo6xJ8MSVHaetAT6kq2ix6NhdnAQ6nn65DXixfeCmxpJKhAfNPoS",
  "key37": "5na3CC5jRoP5kpov75eC8sebHamQeQM1H2jJWhaLpA4pe6RPuazyACkK9ogdaa6yJVcFMHsWxv6SWvdFn5RhWd2W",
  "key38": "53unRooqcTq5fTjbYJHhV4h9VBh16e4HCgczFbFm4CvoAkhpzSnmQ9skn1HsRSG318Nuk3FrqNmbM8JXuoPGkf9L",
  "key39": "mmSv3yExp4vhspsYmh1WP6duAs7wur47n6eX32Rf9VG2tqYLzrSzW7Sc76KyxonJWZ2Bt9dL1yDDuhZVLJhhqR3",
  "key40": "5xyZvikgwao41Nb1Wq7XoYKzJUJWaqK7mfuNeDxa9QfHwwWQ9JYGrdWo5WoKjK4m4gcde1CPvnR6CssJMVA1GqqV",
  "key41": "2WudBbLeesaK65MySKirVaw1QMRFLeBj2tZun6G8sCYpqtw6cFvX8a7nu3M1xdawDUdeNR9A4qnCAhoYfzdBhfJJ",
  "key42": "5uFJFPjwjSbR6vjqeaerTB7S4E5wNZKD4oTi5KcZP5eUcrcEnTimWDRgDtYFWhSTBq8N1Aj1b9vj8oPoSaEzfspL",
  "key43": "3N2prF7EH6Pw8P2FSZkTz4SKky3UpTCx1bmTZzBm4EmPsFmYXdm2N9b2BBcmUHKLurVDPVNFCJDmarkGkDZvrpAQ",
  "key44": "5gvqnG3FWPnJMsQZUzsFRpFFpZWCLVP6uLuWkgfQw1THe9e18f9gzwtURvYBySRACMywdUMy1t9iMnN26cRhUHeB",
  "key45": "63YFD7hZKbLBRripC4jwiPE5oKEngMWo9Gcax6FjDVXRV7jXZeGrgbo3FsfV9PXrJsrbu2WitX6sPrevdEEuYsK6",
  "key46": "3W3sgrYGcR4ats1CvYyMHCr4w6PA7fk41Z2FdYcokGCCBMTtHReAubHNCcEZbM1hzsPCA8TH2LGGN7Xqac3bvfmW",
  "key47": "33L97xmtdxkZgFbPqMHHmwxW93rN6yhAqeRh1K76STbLD84up2ieBJRpgZtZTZ6M4AUavnoPE7XaggbubaoAqcSi"
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
