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
    "wQhHHgdBPDfRiwaDXMZ638NKE3KVs2jB7prrMBZoDCq3UNtWa1rBX973HDqRkvCSjDxB5zXBpWptkXRsJxCtCgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vtLTpRe1KKZ67LbCF4jBRoMcHDnynvhEM9xX82swTuKc5XiCWGnY3xqim4nBkVNuaEDj9SwMxHy3WLyHN6yV3wL",
  "key1": "x5nfyZcen5KysrEtpf3Tx7ppQp5Yk7fdE46NQBsq5nr1kk7NfVw5f1A1x8oRFpuMUF5gQcgeBg5bPPZxCWwLiaq",
  "key2": "3iPmqC9nJEYVyXJFi9TCTZDxgdB3yNqhrQsTp6yP85uqqjwEUpZPPfsUGvfmiYut3KXHHbd8G163WUYKuqGBWmyd",
  "key3": "21D1SQnhiAj27KPibRvVtXEDaEcR5M4bKadxgBrS9cB4EMc619RZHW4WLQ9KFZahngzBLVDskx9HXxxqyqPG1V7L",
  "key4": "3Hjqbfg1sqCw1CMgcNpwp3GiMzXPmVc9zDRPRyVHPZuFPPmNGgsThtqXCp9DXsLAwCVpTfvMfnFNNFTu59Jj2rJ9",
  "key5": "2iNbVTnVGRACktmyENY7SBPjF5RwkUnAKxLQ1h68V8TTYwebTFokPdRfvdxnJfqzYEkaiupu7tQh8F8mrTmqHZKR",
  "key6": "4emVXYvTdMjMYZLy81B1rapqFM7ipUYBQBu7k9f4EME3UQYHCEQhwjzghWvbjj9NLCujLE6GAFjaXqhRZG48vpJZ",
  "key7": "5GeXHNrgQQjLkajNxjzt2jWuuwDZ9RMPMNZXDUpxsbPeaBJWur7iZpjuj1ttzxfpGyGifEFSrYzn1jzriPBKMKY3",
  "key8": "uNm1HwsCyhiryQCn4C8ENJGU6XhVNC8vPzCsKuea8zXUAVZqZ8k1Kjz9yC7dU5zRuXpExK5Urjbyei5zgZ1YgZA",
  "key9": "2zQa3ebtSbCSjetWJXV3HAG7LWRxQktgYj4D7FQhzY2xPDHsqtKDjWwUFQvBVGkxsJBJx8nrYkru8BbScSVTodT5",
  "key10": "42ofLE3FsZje57CX2tJwn1qesABRwBoWoJQ5hUpAVvRUjzwqKJCFp8kXnrumVMN8uuMqZ43yGifFEYAg3BqbsRJY",
  "key11": "4rYbrouxPFdnbU2kVmqmxJoQnSbuETJckDpv8u53ykUTNntkHARkxnqYfRf139TUr2svSeUmKMSQkbeCkzwQLtEN",
  "key12": "YxiriNamYh5xBQp5MgVvp69vxfR7bP2hTDhsBdSuroJfazHHMVehXzutbbWzVjx9fN3hwsxojpkkhBYWzWbkx3D",
  "key13": "3m4rgsJTPF6VLTU9GhR1fMyp2CWeFpnqHbVMoHZHEaCa77CZYSZw143CKnzZ2ZMNTGY5Pe342tAYcLNN7nTxPDMi",
  "key14": "5Qb3hT1DCvEvnUmbMmN2tBL6ExAeHj4ovBAcPNnHd4B6oaoKeaJ7eUCx2CDowREpEyexaKapEZNMaGkXKBUtrf1c",
  "key15": "5UeiKrDMUzzKBhXwgxrBWizZN6qjX3QU5y7PmHYdb52WugD9WbhaDkUvp2yqzcvq18oXyb1GZahNntJU3pnKyY5f",
  "key16": "5KxoWiXFS3TqkBmTZSwerXg5w4zZAgq58uGEWDB18oWtFE8AgZYW3VDJrPiqn5dNsSB98wZqZE5bCopAJpVVYX8R",
  "key17": "5RaYJvsCrhGkg2EBFnvrkT5TpkPAnAguNpn2GHt7NipYgorV1LYDzfbky3puP2UKzUb4czBk6q71Q9op317bsLfU",
  "key18": "RyMFsCVTmmZugdoDpQtF2owBXm2JrKMs1tUUmiGSfA7bofgDpvZrC8x3dbQqCvy34RgpxC9vyRncj5Fcb4S6XTK",
  "key19": "2EAe6movUZ1pV9v4tvTikWkEDKZHyhT6bATBpKutsVT3zBf1pzh4Br2w1nhEefiwsQW1kRpcarXHahWkdk2dJYVe",
  "key20": "5Qqn34bPn6vvQEYSTEqJQ4vGNiyzZV52Q1sfBm2kxRFpB78WzFTad34tEkGreteq22TasM6PTiXB9wzpozRiYC3B",
  "key21": "4m2HGTQkN8j8n2E85stg1mhKGVPbhprc2B9GQiQzQqCw17ke6cKBr5XN2tYp8vR3zh7WSmktQPqHPGMKLZbCiQN8",
  "key22": "2Qcsgft2Fd14Uy6Z6cnrRtEPWTKCNZVCJacmZpmLcBjjhd2wsTTETYFRuZtzGYzdPZ92kSLjiKzAYnj2LAciNR8h",
  "key23": "5aLy6Gy2rjaHqq96KHrwEYVHdYTzFPJbbsVZiAvPqp31bRma6W3HRoqnmvSLwHXLdJXAgVNZNZ7tKe2Tts1VFrbH",
  "key24": "F75r8seVcafzxmcphdiPiqNV7YPDDsXtCgyZDvL4XvnMoP8BPumnD8HouREJpw2iDCcDPn7meb5cfHnv2vagsho",
  "key25": "32JuHkaZ7WMXJyS3EWVGQdySSZzGSAymiuVvevdc5Bu6vE12voAeXVW5QY71zaWjx78Niqzf2bh8kJjaGC7oXscw",
  "key26": "4gJHEzz6uryhN23ZxJCxrous5Q1od5g8xPAB8B3mmAusnr5UrzrrLa6W22WK3fhy7WZa2pLqTD36ADp3cfdNjz6d",
  "key27": "3bfk2omB6FferbVqdQ7tTAjtYZuw4iUeVm8BicTsvrCydSKbiyuF5qQTufv8yuh3SuHdvVp87ABvEQPz1AtFkdi5",
  "key28": "5bSfv3RewaoGSii2gEZwYRo3fU3WcMn5gV3zzW1YaC5XKJyb9KVPZwwKp5BbKUAFvQ2i1YmDAN2T2kmHGXwQN4SG",
  "key29": "4nSpv5xXo8AC2CmY1MoptqQK8s3v7bbP4zx1PxmXmocg6g1wTnQ1SceeevGA1tGEJeuKkQ5xZafCrb1hje5itDks",
  "key30": "5gd7ZDraNC5S958bQK2ufyjmRBnCmBuhLm9e7yzz55zgijthkFdA46t37Lnh9yNC1wjUndZE1bsWVKgPMS8L1He4",
  "key31": "2EWNh1avH7veHhKzK2eeCtmsuGirH9J5P7Tr89ed9t5aqvUW1adYJ1uhjZdgYRKwdcFaUMGibWjXpYZqcSeoQ2eH",
  "key32": "n5j2KRJ5CqDC1jTopzNfvSKQv1ubTmCAwcBzsmK8B3c6uzTx4F7bSVKoRXpzx1Bbnc35suKvFLnxE6CEUyS7doc",
  "key33": "44xSVCF8TxFnhnYP8a86ZD2YVLudEiRbqUasTetDa3PXRfUF4K9hXiT1qvuzou7btNqTxWUk4Qdq5ookFQ4BNboA",
  "key34": "3kVes5wdCB9k6BWgANyY6KbQTxoCPQQs7ovczyTuKpFQUyYsUu7vdEfUdvP4hCgpUjjutGFWAHBhndxQQaxSm75G",
  "key35": "5h8TJ4pvBtj3vNfzTjPfW4Ep6yzdUJ7zYteDeSZ1w3QxFaNboUHX92XzgVF5ASp7teK1aQJ1GcZM2WwLsrigHNLs",
  "key36": "5aGSjakRXtUG7ofEtBQtCWApV8mfzPkCr8nrP4Gb6KhJJ2V6xRiFLN9VjtqLGovNuiSWq165vfKNYZvGtqTrZp1T",
  "key37": "2yAb4AKLrUECHa6HHu89XDPgt7kF8ZJEMgTb53oCcJJhXgL9zmLxCcPTf6FxaRsyCUfBv8DZo35CGKCKMZah3YQi",
  "key38": "2PE5Jgk3RLWVVfZXdjH4aQDT6JCpN2eMDBwM1ygzZ5EnaeYBdMLCBTaMa2BwuE497nk63Sxf1Dauw9xzgFqtqgVG",
  "key39": "2L1RGuEZVw8Xg7KuNVJrJ3Zjv1HHk2BEziUxHcjjMtVUVQM6nevmuUpFRN8R2LLsWJq6rdtuxhYU7ZazobsJUYT3",
  "key40": "2eiViKcri1y8bEh9fcJqsfpQLcwgSAwXVz9yakTxvaHNf6bAaWQ7pEDTvbeRZfqzLsSiEdsoJ5FEEiaPKZwMYnXy",
  "key41": "33fn1vtu3bxNZwqfMmprvtbgj9YfW4SWQSN9BCsiKJLHoETQmVLqoBeUsruSanmqvXM13yPHG27VAGkTf3XrNf8r",
  "key42": "3JUkFFG9oWoeGcEgNMJ6H2z3EeMuJpEkAPiqjr7XQKyBXtqNth1cHEZNvErSQrETKZBL1bCn6B6Fczn8YkhhygLb",
  "key43": "G2TT9KodWXG7q6Jw5XNZLBmrytxe4wWWLLVwsZrecKDt2agM4CLagWEE7zSHcSTz3NrdrbrWzPSrz2otUTvDbmB",
  "key44": "4K8WUR6adVL8yUFnrwZYwrewCMWwe5HpyxdgyxmTBdvwRNycpvaiFUyovADeUUzXH5c3p56RvEVHb5iXK81REvWC"
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
