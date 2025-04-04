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
    "4nuyo4Eqh83aTJ1ajrjTLUJk16NuGjfXSg947HLjrLiAJVo4UvbybEXzgTC4EnUioefYNQQB8n6zp9Ay3p7KYofS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tf3gGsZGZpQkgNw1AUVgrqpxXv948zDtuXZ1HA7VP1PZJ9V4Ygb4SaaTU2SgDZZV7ymJNxkNP6epzgAMyuNjtRD",
  "key1": "3dRb4jovmzsbabpjjqK7bdkS1NHEU2gV32wCnq6amQt6qenJZA6dZ7kNoZjFmtA1ftUG8ffHgzXiueCdCyEVo3Bv",
  "key2": "62jtU8Tu7ffdovn6cXK9xnTas6Q7D55bF4NSh4FACCC2E4TFg7b2uLGs7qftKtQSgfPFSGZFENPUSPhygwDdQLCB",
  "key3": "3Y5dy2HSBRpUbzjVryRhsKzUcFVkFjePRZAtitqm5yy14UrA7mBbG4Gwbkyr6BXJLQ6qzPDpZpDdqaZHq8theX8S",
  "key4": "5TR7G7SdQp2gdtKYHqUDSriayr4Hnt58sMrWYhRGfFxt5SghkWajfAmWKwBvRy5niZHaXFvuP7EUF9DrwYzszfv8",
  "key5": "29zDioKEsn6ric34jEo8yXS65pEZ9T3RcR6MaFpc7TEAywcXooPBTnF7ypZzs9Zw5VnERDQgRmGiQTruwj6huYFL",
  "key6": "5rZpWDhSycK8hbB6mX2Z8YwqTk8EvvQSudRauLHNgxVNBeBPob4e1YzJRfqfoJH11Dpbps6B2Ke7Y5wJNJVN33JJ",
  "key7": "By24HdMYq4seneb4kwsVcRFkJamebXQ9zfVzKMvBhnGr5oGznUR1NVomxdx5ddzHfusQqDU2h5DJXyqDMCRQPVH",
  "key8": "3MXzLrp5EHpwgeSedv9JKAoFSofQ4R5y35YqKuKMcJjLv7ffXS7iA1wLg29GU9EfeRXzNAK1R2mGMYXFxp9Kub33",
  "key9": "3hDm5etdVMxiMn2muxUrBSFLqeXULanMdFaQNzF9FdAXMefwwasAFkJsTJktLL3eEET5dnvp8im6U7ct78HUmN5D",
  "key10": "5ub4TESXM4xZEtJ77mzYgLMxZGaVb23U6MmkcxzXALRVkdEFYMMEGyGgrkZx6ZNS1Yds78LVegKiV5Fo85C8CDMA",
  "key11": "oxMNFRQEyX4Z3Nt8SVM8xKjqLHyueJ6vYkCK2G4DeTVKiMKMganL2w34YADrfUr8KJAXj93fRbZ1cUmmXioeyy9",
  "key12": "2edD5SAV3xwgCVzqu2zsegFAb14RSwkScZ18uKY9RFrSA8gnJyuhBGw9J2MwdRLYeG5UZyxKWd6eXDdMdKYbcSSU",
  "key13": "5wTFV6bd4xR1Zktb2uD8dcx1MCjekmb9u87NsNg6m6BYWKeb2CH3Wog7JoCXjFTu67bLhnmwUcoVVx9gcBhw74kB",
  "key14": "3j6yy5rY36KgiTgiz1P1yeZF6KXDCxx5wuZCMTsFj2dpqdkYHxyhu8tMGuGamKYDwRi76SkP5bW9ms5yUfxU93eF",
  "key15": "49kBU2WihLsRH64MhD1xzKCpuVCkzbuZUCq2R3AkqsQtoPFP3Dk9H1eHBbu6F3xt7ThfFfjio8Ac1mEb7XXWiwPK",
  "key16": "4QJ6byZDem9AJudDi52im5Vb2J1kr5SrsELixMxFFzLjM582fQXqEYR48YnHrpLyRE91rJTbBS4RMMXUeWHzvthA",
  "key17": "3oqobmsy5KMwP4c7EQCU9AkbWnE6JndeXnp6dWDogzQa2dpD4RUpECAqZg7MoLJCvEhc91dbKRDsovLZv8WuLVJg",
  "key18": "M1EG8jfVjg4v24Dt6ryG9mfXBGb2L36utMhbiqwekPfFRN5dMH6toDCaeBNsAwnV53agvFScxQbMqY9Z4TLrqnX",
  "key19": "52YV5S1pNvjmn98ZQehgGuf1EKAKk8jDAaDqhK68R7xSj6dQQSBqrLmRoULPw5wkbho9tRBpQuvehUAWTY5x1uYD",
  "key20": "3PwxENwFS8moZDm99Dtw2PegHAWuVzvFB9ZQRSkvZkmZUKPAXhCh8m7MJNE295EkuNvfA4dCGm2Qd2UC2pD7iAZr",
  "key21": "4PFC3zTmqdf5nSHD6a3uu4SgEjkJbTky4XGMUnons3n3xbcgstARtnE4As2tUnmE3cWWSKzvryq9UuCBBEBPm84q",
  "key22": "25dLh1k43KXt5mPvvKdTeyKaNVZ9pDyvxwHQTokBTDnEvARkc73VzktmHqJiCm5NuXHa5BTCv71pJpUuo69PC6C2",
  "key23": "whPgfWiAvJwgjCb8YgYpT7ikGruGxg8Kb7AHJbjTa7zesQ8KtxMqkjHjEP6pahmnZeAKVWQS2ysGbFT4vJsPP9k",
  "key24": "4aYVCVkQSnwhF3i2u5NJwCzkTZosHeiU1d6q3p3WhH1kZLnW5AY1Uupigu5VXTU6zcafdJ48xR6Z1fpUBnHGkbec",
  "key25": "51h4sCvs54Ame2xNDD1WVsS55J6oQCw1vnj9RaE5MKMNy41CAbusHrwAYFdBtrvD3Wb5JLCk6aXFCxL1kyA4nX2w",
  "key26": "5XUsLPMYWZbfbwooFDwrBQQMWUg8JEzTWCprMXZaMtRsHKN9vDaYZcqGikNRsYgMmMgjsJFmANECjraWmFSqAFfn",
  "key27": "2bzUbK71wk57iR8D6YnNJJGatP177eSWasPtGeUV7KHQGowiAycVhVyh2iCvbTxnSa3TkveBU4ntbDqzTu2wVa93",
  "key28": "2GSmpRDNVufzbAX3bZLek9HB9vTzqR8dRZqto6LSJLDChk9DgCVHGQ7hRgKPrpmUhcMYJYyNRDYXmC779Z4jz6LF"
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
