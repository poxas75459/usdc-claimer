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
    "H5tZoxBV1MRiHTMKwQBrcbzDsSntNXaiu2rKbxPnUfgnTFebH7hQw7Hgna8ehnsge7dCgvnCQryPammDCTmifvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KVKbJ72gix83BUt9AZFNZmorf3Qg4w2uakwWghmYJoXnL3LxXepj4TEJduUVKeKypnDFTv8KFZg3bASSiKYrmb3",
  "key1": "4kfQiiusWzPVPusQZ8ouVEPaQjTg2r7XxoFT2sziBZX82CziZFKg863BtAPEwBNprG653bgiYGHCtQgvDLDiNJtH",
  "key2": "223RAejffjsyhWPQpkfix965RtF1DCqXaBQR8Y7Hy8DrzPyuHNrVovHCENMWpR3fHBCkNnFTpHrRjnRfpe6jeZg6",
  "key3": "4du5dB7Gk7eJ6UyZ49b1WfU8j4RxgoG7dkxvKZ5DhJgXKt9iXi3Bwgw61tGhDJYAVGpKYLKWhHDjVa4ewQK1M5B2",
  "key4": "3UYKAp68dkB7PXeacLE4gmj2UB3qcVfguwaaDKggaszUevB97uE5B8mEHEVD4LVPWAegiJ7vkhVNMhkm9xcbkxKQ",
  "key5": "4efJL3wsFFzGBazEhGusadZRzMxZEaZNH81t9eNVSLvokbvUhdEH6PNZ7k1WDtZfLGMyv6PNKjep6ob47eZkG1Kw",
  "key6": "5CBdCFc3xSwpnB1Q5GiNac8VN5rKRQFXhjaUzcZi2yYjsojsQ8zURH1H6fXoikAbPK4tVsjecstjuzcZ63R7wig4",
  "key7": "4jWKwJmYTwYMrAeenDA1Xb9niBkmBV94EWb6Vw2toLz1KEaR6zL8iwmV8mzBWvXDdcgFcoodMiRfAft1jMRAGscj",
  "key8": "FrMBhZnoXPg7rdoDzTDKUM3NST2zqgbEppwzoGbdiireaLafdW5X6zdRkDrWxD1eiGD1eV6z9bBaspWFZBb3ywX",
  "key9": "39YPRcCJE43VZ4m66jksA7peia67c8kcRUjtdrc9jGpbn6A7BiHtAq34SJjDxXyzsp7THvXcP8V3xXBEFmXC8CpW",
  "key10": "vcxdK1CfeibXbvEuPjqBjyxmPFC2CpscWPkFLXeJMGeSY5b8dXLw8Qj24mks9kMiNc3TQoPfT7vyjRS3ozkbaov",
  "key11": "4Noukq9CdnUcMPDHzzWgoigEJ5EApFq22QD34mVStrwHBqi81DAK16S6Mmc93GRzwCzzn9t5KfqUyzuHP2MSdxj1",
  "key12": "5y5dcoiMGu43GREQ1sgrMzjK4oE7tMH4RLj8JYcCojwo22sbtxSbYQC1f54FdeJNFcvvHd4Fi4cCZhtzPCWygyaU",
  "key13": "4WBPmY7iawDqprQ94FqgMPAp5aiBkgej41JWy1SkADCfQ6vpVkGEacaBneiCgCkJtiEJkca75o5YANEuksfNkAKr",
  "key14": "6FbytaartVDSZ5WXVVGaypXbofnBN6Bg76QPjhc5j5is6FiQ8Lw8wNTr7qadRfS6akeBpZb12VDGnDWvjVEbWV7",
  "key15": "5JknZZK4zSRJ2yP5ouzXFaJzHW7Bci9pBHKv1DVb2tRM1YuB7PBQzg8vfNN99DXUS4oukXBGGKfe9q9obBLwBAcf",
  "key16": "3xTA92JwiKTNdYCnhq31EEnT8Yo4X6oE15WEtvDoS2eppZn5TXdiY33NeuWkGJGC5P3U1DepUP4WgF3sMqFacumW",
  "key17": "3iWcGqhWNSG3wtcy4LpKng2aifjovAnA71QMnWyGTBKspbxvZ53WNkapopqm8CCeTUVfCapFKcMovKHmTWHeJHrG",
  "key18": "28iufNNewet2SMpNpVKWnEChZ2Wv2FQHKxpRdb2jzMcw4py4xKWw6vDNhXGMHhSVZauGFerudYzcsMtGb9AcfVfg",
  "key19": "5TD7Q5b2oGLrKD4UFtPNmmALr3p8wLkWQQUMKTP7NiJPTiRAYYeVAZrZwr8iS7wAjEpPQfG4y9MjAm6nN83nfWwu",
  "key20": "5hWRgx6mSgf3KWyRnzncLv5sHrFyM5yK9WywmiHC8jc35855xNT86JFDFzu2YhapcViTsb2qz81xXdBZqLPrjzV3",
  "key21": "JJpsvuaYCugoqXzpuxqmv9ayhCZeGEGG3eJmrvZoqs3CHGtoqS37BVzBZd1kJH2BeqGkxTZgRjcHPGzkBEq8BAc",
  "key22": "41tGF9iLB73JxW5BjuceRtC5VsKQX4KDon1rAHorWSQio9omvy4LHeEWPofaRAFmRQNcjt6oSVvaSSkE3wR1qsKc",
  "key23": "5329b2zUqohPGnSryn1QDyr84KSZMbwWkVmiijk3ytK6PueQrcymKmPWgnDVmSgF57CWisGtpA2j6qJAtxb3mPcG",
  "key24": "EWaEqcG4aPiojCVQgca1vc4AwCPUo9qgLXXmMuwfe31KgpmD2yf5N7yEufDGkpd2XyiumeNBAgeTf998PCZeXpw"
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
