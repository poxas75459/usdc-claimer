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
    "5kxAtDPYsivytptxULBHqqqMGYFB5QmCXiv3Vep7QysFWLj3NX6qCJFnoC7rkF9Y3K6eGU1E2SN9y7Ki1bbbwkBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JMuQc8ajrjuFTfreYdq2HkpngEWrbyLEwWoQQnqSojk1ZrbKmTuGyarY8cf9rLW5imxM7yU76Ve78Cds5Qu4hHh",
  "key1": "BnPBami1X3wmovUNShC47NLN6YyR8ksom5RhmftbwPZyPHUykDA9DgJP2L5DxoKYJHsMWK8caVJXYeCBdMwEhxn",
  "key2": "27JkghumHnTwcaNaeFNuDxEee34ETYhgLwnBhZfQDw8XcwigQqVQBbnhtFA3aDSE7c4kxLr1cvMig3wucBWmLZ4S",
  "key3": "4Md6P2oS3wnjkRagVPGSMwP453ixjujobjgcEsRRQSGqUKCexkchucZpmy8Ps5EHmQZCHTpDgPQ2x9DWoWK6tXm7",
  "key4": "5soZtVrxpXcDdqQBc34acptf35QfQDq4ARj5692X9D4xu1vzpsQA1g3A8iiauozpY4ZJLxvpuX1n682Zh51Xv2g",
  "key5": "qkXiyiQxxMUm2saPiGopXanU5vRk6pqWt5WL3ocHnjN11nRicxVmrLLEbrFp43V1nkSq8sGkFrkHy4PTMJThWwZ",
  "key6": "2qULjVXGL8XGQcbEJGFuay8mrrbDXLjAMPo4mRc8GonHVeNL1iUwfB3VLzBUaUXPVqMyiw5YQu59M65SprSYF671",
  "key7": "5KbLiWnBDEw5FBtZVGJzrtWQMwUgroQM9XiEh8f5DB2qC8VNedtDGnvY7v7jq7zP9hz5VtAKZFsX59s7n5uBZQ3T",
  "key8": "3dpMBc55z5J79os2Xju1iJ2S5Ed9pDHpciW7AcbwZiq716WyU2cY2z63ysdWSA3iw42TzW5KPPSa3SULjrBwwt1b",
  "key9": "3Ab4XitjRnkBfiyyXDT41fEShvHs1biYDBvaKYvbqkUyZfACYAsVWmkGuww9bPfQdUPzmWrUawfUXAPZN9DNDV6E",
  "key10": "2VhsV6kMNyx6iGNmK1XWTy8ER3uHrAN3UsXfkDJpg2rFdZ6nf7oUGWQ1tT6q92nN8mwMru4Xjqg1GQ6VtpNstK8K",
  "key11": "ArnDLLTH2JkNqgkmrx1SmQmZHemVmff15tiDhm1y12NLJ5Ywr7kMWPibmCxZGmqTwYUSpt5kzsqb2nLPZAEnzR7",
  "key12": "2s1zyPCoCSv6ggJZd1LEqKPEkZFwsWzhQ3k4ov5JoyukUhzACDAKMsbbQcjvpSx5SBMRf5f49paRY1H9YAFrAy5t",
  "key13": "32YumqiNmQCwwbr2V8ZWJ4n2k4dB7z5SRapSAqajNpPbHT7Tp646ehr9WgRSHGnwz91ESG3tVS11Xs75hmMA745A",
  "key14": "32oFAfgdzLLZiJzsXKitL6uW4QbVzzJBzBNtStf36avqPpiFG3CdDdV45THTqoxYW9wGPjMqPYY6PAx34qEJGPYL",
  "key15": "23EedsHJNZsD3AJSuHrcgSSHHtQustGm66j7FadSLGCLGurJkQ6zhXB9nmLoPrL8obrXR6okWnRN4tSY5V1PPTjR",
  "key16": "XoSh5EJ8zdxhz8r5gTm1BfNw9zp2LpWatAeuvtKY556JbZpoZwfSUaa4UMfXsY8LJY6SnVRGkFpu6dve1xtLJtf",
  "key17": "42xyt71k6vxmKBRjwh9T4JUe98YnkE3ZRE34LkHfMAEvjP6FpZ4oESifRTmKKXYq5KP2rPVHeMJPpyGKUSWDLMA5",
  "key18": "3V4x8vbz1q7EjnmW6vhjbruoBqhoVMG9DmKGU3bt4zGnPgg8jJQaixUrZLRi41fBc6DDV6gLkeTsP32T6isS3LPv",
  "key19": "q2Wis6xWPfvdUB47eVb8et1cdmAn5ENZv1YNd9AMKmNc8LNn94gfCd7G2QuohxYSNxgfjVoEV7i8C1aiHjJe8Sn",
  "key20": "39R23XEujGU3xM2RbHVkB72LWF1PYMJBFtY1zzboC1kxJcBJmJeh85pnp3gKU8icW7i9xKJ6MdWqJMT4CdDFA7Bs",
  "key21": "4dVFJYzR3YAZ5eCdzWG5BfEkNgJiu9GbSx8KkCrk64txnxZ4m1iisubQheSJayqCKLYCWwjNQYAzW1MK9ah6QGyd",
  "key22": "2snQknrmqRKrTC3ygPQxRSWC1Nv19bh5NPCxDuk56jxYRSLpQZavCG27a7b6eLJCG9Ly2s12Ji9YuptFgosWy2h4",
  "key23": "LDSs2UQPXss7GgAGd3bMxFViHAfbAgDwyuCpoKkm9BjQthKpyppYpnuRw4MoSvgdhCBtAJ7RZbXMgBMDbcRQomu",
  "key24": "64ScxyTkdkSRuNkTN4MMZ72FUjxxY6DKhcbNcGFnzTeJHhc8PteVWxMVHPvc7GmMKPFFss2DkmCtidht8MkQQnPW",
  "key25": "2a61omqkkYVc8VU4bbgrd89bJfMUqfY9tTqDJtv3DX91uf8rMykh3GCWaGaB8DBXNsLsU4FtuiyGo3TNydm81NWH",
  "key26": "4asN6g296xoV8n6zmx1z3MnDMQQsgHWQBuAWgW6mELNnoavAM2zqkyXfpexHsqhQZVC1AVDX7wiuUPaDrwaB1o73",
  "key27": "4xTSi5URmgTWnH9xFJ1SJknyoY4keLCjGBfwKzKFQVM1XgyhmxFpTAEq1xrdKa1FR26b8yoAtvjXan8pTdcAsHj3",
  "key28": "EBfSmuCVSgwCVcyAgt61VHxtuvaBTtphJzfLg4QqhJoYNmFsMEAAwxVx1SXqK418guGyBuGvcBjM37HG2cNZ9dL",
  "key29": "4CdK8ePCf6oqQAuUWfSwguEw7NKWvzmovpP5jwo4G6aVG7AL8CcBCA4tv6CCbzEJGn8KMcTVoQf9kGqzWYV7Etet",
  "key30": "4g6JKmYEuxpnt6z4sMDBT7gzYydod2XsQPp7DZntkDCm2kFDX3y5ve4QgpickdCDRkMSVFuxjRsnwmghtRzmiZwv",
  "key31": "38BeWBFuopYYH52jW9sMEFAthFVRT4AJDixwo2H61imZ7CbMJTv7s43v5zHUgHAyWQkLYRujxcV4K5D2kWebEVVd",
  "key32": "46eg2h4HqUXzERZr935zo6o8VFzjJxe6rQeB2jckyLZX5pQKvyWJLxxvba4EJ9kFGs6ZjQHEDvpFC7cJKGjgV6aU",
  "key33": "5T4DXQoTsvE1fodXuoVM8entGZbw4YvnN9wGZgTadT7PPeZ1bpzdXEHdzAG89WpFAkAVmVskbTW2qtWNVxYpWJfY",
  "key34": "5gowkWtUMFcbp4ayptdT6VcYXHPuvo756D5JkifyEpV83HbSvrrtwn7XiKgaoV6vDpj1mEnA3x1kFqZmkzr7pYFJ",
  "key35": "4tmt617zD7fGh3RSWiwvdbknUCZcVqaUmyfU8NLDV5CAWJG8u3HGmyiaYpDLGi8kLcGSE8GVeXGUBdfroe9FjR41",
  "key36": "4zwLUmP87Lz68VLFJNHCH6nFPSsHziRU7QP8nVzND91g3oS22cwhgQzQ8TFtyWKf6jWQpQpmC3HEJy9TECtx4jTV",
  "key37": "v3z3ugVnkccXnZviGN6TYxVxPJjd5XREW7KKFDjGNQHz4BGPbT7dBj7MwvEnGjx46wiAwn8oJQH2Gi3sLePpGdE",
  "key38": "3aCiiX9SzGw6UKQJ44koMWvuuyPvowWA7rE7k8icYC9b1t4QE5X8i4mn7SLV1BzASHFDoSZnwxD2RPuPi7Tf9hNT",
  "key39": "NbLgKt6xvEDZNymZFQbajBPiPcwnynz8GUyPdhSGEggxMKCnVB3JcFVGGFjAxm3CxvioeGdE4MLYPUXJJwF7Xhm",
  "key40": "MRbAtjNkYD5DXpMeUkaWTrV7XmdGTekWAwtyQRCtFjyBA9vmmzy2XtXDiJ4S4V5Z5N8h8vy3Lkaj8yoR7dwRTu8",
  "key41": "1ugJHZJwwtqzzDxiSNEg97jZHhFS5KGfCJbfZLbf2JeTP7T4LYY5sz4sUAB5cNez5WynMeAcBtPfuFybge9ibJC",
  "key42": "3pbmpXrBq1zux1a5KiaWS1egTJLH9qN8yiDgrDnAwGj1LnvuQgnPxRGFsVWkxdCVGJTR4H7ApCMSeHt5f6R4nJk2",
  "key43": "3osVChU8BmbuPTVkrb6w5v6WFqkVEiDTS3knk6PANLv5GHBD2ufsqKc6aAMuUrwznAVnTngiYANvR9YLg55zWKMB",
  "key44": "yuBQLdXMLKg2tJ7J6XLegSzg5CJN41RbEGWUmDdGGvXwW5XonCcB9f4kmxA9zhnwGzKgwpH4tjJeuhEJzWBgFwQ",
  "key45": "5bSvG6mFkQpycckA5JdaP3XmjtZd15arLeYvB4sPeYiMwoi3Y7xmgmbWESiM5Gk9cvf5E1gBA8vZ6GGWEsQqPLB4"
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
