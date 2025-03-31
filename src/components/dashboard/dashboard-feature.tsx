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
    "tRTf8N7AZWCkpWqtCadu9hsrPEjQLTXsidJ8tvxh6V48N1PZwhUbFV3155rSykqRxC7ovjzwfBhXRtG2gu37maA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x14oT1cJyugMaH7MR4Vyw9vNgUMBqiyxBnL8ddHLNiPACe83kiy3hQbPpJQR4z6R5wCYr3qCujHQKzovGbxLftj",
  "key1": "3mscSdCmbANLFKXYqLD9CZkAV2au1kStuV1F7HkRA751vH5gDtDQF11emWx4XCho9Phvt7bnJZWCoGS2SKojYKXs",
  "key2": "3g89s4tUiDRmEaa36jMQf2g4GtDDS8YnukVKg66g2mDRoy5wXmgATfiDSpr4PyaXcYnaVPwFei81dMJWYP8hDdRP",
  "key3": "WcCNZLFBWE5UJ6MrFA8fYnk68WhLWWMrKukxX6kPzwLSzcaywco9Sb5nMXqqqzMSCxhzMAxwgNQf3nD8xPiTXbs",
  "key4": "3xYYFj1VJMuyLjDY48J6wbeRBnNXycEbriji3seNM26bbpJvgoUmwcWTJf2LAGtVWS5CM9kHprJaro5x6DWruGTn",
  "key5": "kLiwd2en5oXU866jZ8U76T3Pag6kAQxUqUy9y73WooBm1GbH1BppziKALcnCcSevenRt5AsH3zmAzG5GxMXHSDM",
  "key6": "jeLJEufZVQPkZH6N97EW4cufyeSXHx1qmowKQQKB7te5szLJHZXafNR8MXH4pFuFwm3Wb7dNH4xxSuf18r6mf2p",
  "key7": "4jyW4LKbHHfrDjXcM3otfgy2c9Ro2sWW6dfVH2e3VvK3omWgjntwggTisG5bVqofb9KZY5xvj3jq9aWr5sG6v4ic",
  "key8": "K5HSkZA6csZM8rBrtPkjYvSRopK9JTsY6GjcdGSyPUshGuUqDSPxmP6kebE1vq6DVfWrdkhueeudttsnEWsjysJ",
  "key9": "4qxCqPExXkQByJuCsLPZpT15Mjg27NSu6ZBUJHgr1dmPSVaCWYwcj8CwZS2bNYahnaa8DcF4JG9snQmoxNDLHLyp",
  "key10": "5YDkuBtP52sM1chd43czf3ZEV9jJjoddBnxTbPvsi2mepmM2KsQvXPibzCipqhfGeca8pDWB8FVFKt21VwSpj7A8",
  "key11": "2vu4rNC2kZSqh9hbPKkuHWctTQqa8zspn34GCjTJV2k4RT5qAc9yVVcZ47mRSSyTZYvBdu1Gcx6empNTST599pUW",
  "key12": "3guBA9Tdtm1yWNGfLAfuPLeDFqk7Bk9BVJPWmoTfdAuALFfpZwDWM7yWexU29yygQCbcBoy1wMu2x76ervmsjJPE",
  "key13": "3Rn88oAefrwTCK9zL3viposNQj2uP4LHewTH5xKYLTaUMhKNHbFiswoAyN6s1p1nCL2Dbz71kz7Eb7UXuw7NABC7",
  "key14": "4DzqgzkUShRoaB7oD5SwKLmqaZtPe5Pn2atp2Mx2RGUBMbrFv4cUvk1r7fJ7dBFFb9gx7aVuHi6RMiRhoRxKjg6E",
  "key15": "2nJYQ8mfqnrQYnsPBsBYAWJ8cyYsBg1NSP2SykKQtRxZWH9xNnsoCDkvdmopG7FsExnjM4BDGHtfSUYXsPjxrBAj",
  "key16": "3h1j8ES5R5ZCsfsk4TALRu49ZsoxaBWKZDD2EZdcQbnLQMRx7RSP5sqHH5Zqn72q4GthwMMt4dMxdrGkfFBKBTti",
  "key17": "Gvx5y3VX4sMBaErmF3C2k7yebTZ341q21HxydVPXN9eypjisuSKyy8sr5JTD5zUjZTMaT4XEkxKyP1oEAstDfgS",
  "key18": "46aSnatvC8qjMTHYZAcErat1pLKbjgggXpaQyiaV6dtW1PexPDyQNNenVeC4dnWxLpZ8WD7LJ8LfTSTtPEALSLpU",
  "key19": "2TaDXs32iEX26e537EjTVYjgNouzvRksZuXq8Ncty93JJVehV6wSDz82cbereEtwzNsjyLb3XstBQUwBMNvMdskA",
  "key20": "MspyfikQEgqXLxriX66kc3mTFU28AgXrQxzXy77e2tTg6YNa35eQK3JyHaRViRvN2MmZ1hF6P45ZsEkZDWK6v7m",
  "key21": "4vh56LGrLF3H5w2amssTyQR42xoaXYymoyNk6L9kLSsPUzi2JWL75xfrv7tfjTKj38Za5qeCJpiqvVebqfegPUPm",
  "key22": "5rJDVwi96MdxgHQzYZrHK6bKG7ifHF9x18kk9wXiEgvx2ULVBjEKddHLiUAUMzs91SwbSNxDCvQSsakz1VUG5ru2",
  "key23": "3ecv13XTiGQtEhTeoLCSvxAUksGo5ktpjVeqk7Jo6bRRxpd2CpjMAciWt6ASHgRoaonmtUUnpefPDjYk89nsLdPM",
  "key24": "4iKJ3n7U1bDtHQScUPW73YCNnRxPV4GZRV2wzpzJeKah1XKGdALUWPcXH2sVh8S2Y5e4cgoyyFHrMNcmMRZnavn1",
  "key25": "2zigwTUYaSKBQgEtWFNyiACuofEqfHH2NpEfwS1wyPjcNepte3SkMhN4tXVKuCbXePQLkosARieCGww6W9VZWTDN",
  "key26": "4zsAwF1kfgtoejvcj9awCd934wicdJZuhstxAPxavAsoepbjcSHBsL5sUd5t1CSxZKoif6fX2n3rjjfZaRGUHhmN"
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
