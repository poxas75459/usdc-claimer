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
    "44wegq4iL4kgniiakQXd8JhYZUopst519FNMYqyqCF68zt2vM1gvfimsTSWqgV1H8NBqEvtEWjrt2iGCxzcAxZeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ibZHJn8mCm2j6akDogPi5LAd33TP7vsZQrvCBeQZGqrxLjkidiVFsfnjTTE92Jw1hxn3gJqAtCeuJDgTq5NnBUP",
  "key1": "5U9GDoYb6XbZ5xzLtp1JYyrABaPje3NMyU9yqouVUYB8tZHMwJx8oCE7vBzTEm6tj9S5N68JufaGdttun79iiYHT",
  "key2": "3s81Z2NMr71SwyypNm2UgtbXbzX7jjcNBMt2VXjsKzpu54iVwoRz6AN1PvhG7KbFShQzH6URfi2hnA4U46fQTbJ9",
  "key3": "4cPb3yDgkzPpymA7sbba3qTVyVDp8EnbNBViW6tp46jMB69HN5E4hQwFnYYJspEG6J73CFG4XY1aHHxn4cUPaVX5",
  "key4": "31LgPXSjpsRBqPqv4bSaBG4ynCf5uK1cWFrh8WzRJ6VtPGNFTbUX1nCuAPYZPMBV7g1xyb1fjaabNcYeb1g1qSgb",
  "key5": "3iXGESQ3p5j9yPZhWBXu6ZDKX2Wze15uAPcxGU5u39k22gEiZbStt12vsaEFm73qhjkVS8CE97y6dCvWtp5NxvaS",
  "key6": "4u6XATUQhLUvTcJwop3oLCDRHQwQgbeJSsMP1WNFWsNwNt4u9nVvyqRnVQAZqLokyrQDRrvqwn6xRNkK5tFKsL2E",
  "key7": "4daxDRHNXqqLCfUEGzTyPr1ysu7t5eVnvJj6m1EC2LCVDpAvpV7XTiN11nkeVuyc8AGvkR4R9TL1FPBRr4ECV7nX",
  "key8": "488L8wwuNwh4nZ8tPdk1tsDeFVxdNGVkrANQtpzCysbpDHnceaLR2i7bNNKbL7iEyp1fGSMCEZbAg2UZLkK2P3HS",
  "key9": "4Akc1NbKBxdhP2wHZBeCNaq4oHHJuNZNhR9xGZ7ZDrwMUeC61UGUkVYBV7vkPKuSnxDtvb4iWvLCXBTsd85mDwjM",
  "key10": "2wUJeQxV3Zxav9QDZzp1mgRgy7iQNTXTJ9zRYdc53XBbFC591KVdVgocWBbMJEJwPMZJtjPm2gkSvhEzRpgnmtcW",
  "key11": "32MdBgD42Sb9M1rhnP2iBTNgpn9kWe5TjyBWwJffJuhTumwGMMypfikR43CjkcCLj5xCy9pzUV1jdM886huDWSvW",
  "key12": "5TVBioKRcttUuBR66YoCrKSgMxVDee3DV6syQq1UYEs4A6HZqKijzT9rMz7opFcsBjrTJPqmtcYs7nAm7qPwL9ii",
  "key13": "geo93LaRCN5VqpKG96USRkvSDsCHi7xjRDhisQBpni5TGUFxSsPn35hX1VF5Nw51TKAWgWLcgz512jcmLHxDeV2",
  "key14": "4fDcWhm5aCLz1v1WafBFk1CVJ2CNxb8XaGpaCoLUcgjRfir4s8KQZuj7RnN8oANg1Jd39PhkA4Z4r2NB5e2wMVy9",
  "key15": "2sCYppQimTbgrB5hRKaiKGk1JQSX6YycFrm9GHP2m2XdDvq2juk5sQnH6vyKCL3Sab3APKfvQJtZ92efp975kFMj",
  "key16": "Qiqgatyj7VbuDkqF4gcxQF4dZuqQhEgLCaFj5atwuMupuBNmmiBTWQFhBJ63UzqV7MqW1imBe9EAjvmfNs6B5Jq",
  "key17": "YH9BPEPCE97HXyzypsqa79srvbHhXKSbJStwiT84cVu5Nh64yeJeSnaMCaMBKf1TMRip78LZPkhg8ZthFHAd6yS",
  "key18": "Jsh3kwey7VWaJ649xQxKmkYhBYV2iUB27d2jJsBXp91Rg8zo8dnrAnVHwGjmUmkuMfqSxEVx32SqxtSwknW546n",
  "key19": "3yi6vSj5ADtakW6WPRpKm5fgtdZWyiRRWGyYCQUdTQgTBUnGixYDV2xUFJDcLPyFhBjuUpa42o4CAssCybNMGpgf",
  "key20": "3AFUNu8CxehjdCycgFNu6UNEbouTE3JrE1FXJfP7TrPWF8z1epHqqA8yaAkcDWv1rnKrQFeeyj1atqTJnu1xuVXa",
  "key21": "2LpHnq9YqAE32bZcBuPii5mgVfc5XStu3PKduZgi9CK7tQ8kJN1cce693rW1nupYa7vPiTLxvSNfmY6hqQZB8fLS",
  "key22": "5cykb1g7jhjbGyUDnbZeaPRvE2FyupSBeWnrppyAYQwNR8tE88ac23oHTrfeesueuakBV91qvrgTcgc2b1v3sFQw",
  "key23": "447S6kY1NT5ycAq1mVH8U2HPSajxx2zfq3XXxkCf8kqQhjKLv7eqa1u3fm93ZZ6kxcLt2mfA2xPnJ5imJp52ZBzQ",
  "key24": "4CRXRHi2Pfunro2fuw6Za2hD5HkSVm1P78GZ6LeF7K8brZtmWiudqsBuyFssDgu6tDx5c9tqXqCkFNtk99sY3yAz",
  "key25": "3yPb5nTFrQAPEJ883sbpkfT1Cje2ke9nZVziX9pJc9sff8pAcZgpDYtBmU6XZWhrSmVWWZs5oRYevtdVMauLRY8K",
  "key26": "SCyCgG1JVJrmDbKtf59J9JB6aSfooh1x9kZ27HYFJwkhwsJM6rg2QLCwybhXXgrMYagtzZhaW4qpGJbQaFE8AxF",
  "key27": "5etUaBG9zSDgdkaXviTLLk7a4XQcAH1PNTAFDHnbi8F8EZCiYf3GjuYJcEBFcoT89zAAGN8463K5Nk1LedWdjt77",
  "key28": "9i1ThxPYjkm2vcXHj3kPk4becob9V383qnrkSiwKQNC2NVUebEC74dpUARLoveC5AZ7K7GzgwKeo1cnWogPZAo3",
  "key29": "2GiGwVjvb9NLGp3eRguKTAw3gLPhiX82J93wHsmuKU2yjajLzhF7LtHjhsoJBarWa32WAweuqLTYu8oAiSZok5pT",
  "key30": "5cLHd1u8NDHbwC6U8C31kcr6gWZqv3v3C63F5sfp9cAKVt35BU4MT6aZTPwK1fTmgAZyAV3SiJpDgnEzpxFKfArW",
  "key31": "4K8vQLdSGUHsge6GZwiiTFVWQkGSKhnuKSs5kqjhMoU1vsrsa844vW1HbWbNLvrUueKTJuc2Bo5cPpXa363SC8L8",
  "key32": "4n1STWDmgod7nYD6cEWE9Y6sYMyqBdfN8T8b63vxz3ZegLcgxnLt6AUgLWCHmWBLBMRhjfSoobYaknrF7AVwjLbm",
  "key33": "56RLESymJcQoE5FHSJ93SfRehB7TgagtxnFB3UTuEREsbU3S6iztEFg3J7Mc7SiXFNL4jAm7JTtzJus3216RghWY",
  "key34": "fLTweqfnYxGqfoA9uDq6a55xGiSAJaweKj9xnpqVu2UNnD3xVuyQKJtzctMp3J8Xh1rxd2FKyHirmrpctQoybtd",
  "key35": "4HsZeiAL119HhwxH6opsMPrUekunU5op3y7sXg2ZKSZ4y6bd7uohDBqsjbvVcoLp2hNu3iNrCRdQzcKPi4kSJ6os"
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
