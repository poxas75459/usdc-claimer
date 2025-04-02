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
    "1MyyrcsupE2Tq6n2FQtbD4GnSxC2Ny8sdAxEC699xgZgJdpryfohGC9aHSYL1c1DpfejRTVjw2b7N88bHhVMrvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4sm5gHLDmQygPq4Cg94i2q1A5mC26896hHd1TPKhPQ1VHfT1Nmx2VP5oaEuZSbgZexi3wbZHg8L2KyaeAndxiz",
  "key1": "5mJeodyV523AhKjofNp2Jmka5rWvQZf6BH5WzGnKCLnmp4A5NNofojcNxpRBKP2c67ytsn35u8FrUPsR8ji9Xc6D",
  "key2": "2iUNc2nzrKCbXEfavifXwN7s4ioJ2mSsWwStTjZyMh5uUXsJiNZAh7DJYuwsvW4bJtTHgc7CPhnsjZLtQcY262oQ",
  "key3": "vNf37p9ayJqAP6iDB9GoYvyBp9QzMeQr18oDR1N7EffYzcztT5PJoKHDCQZwVFBVPUoCV5zuoxJYRNS4Ffod2Tw",
  "key4": "3RL4vR4R75kms5LeSM56EtSN6Es8hc4o7eGseUkQq1e2xrZ3Yg7ww7vrWNUz9iQ43HzHqRPrJpihGiZC3Q8Dugar",
  "key5": "4KjCD8zzcWSEcxrYPGAJmLyApxKoqKXtNn4bnmePJdknFb6ei3WC59yzq2KhukoVC1eQWECTUndjawugcFo25aix",
  "key6": "5EEENe2JbyMEcTZ5WCWa7FucHFnedbGunJTfjDhntf8gZSHAGr3yjmJF1Dk2C6y5i99gFqRc8NNEbPhGztNPMRGL",
  "key7": "3794E4vn2WxXZ1ZBu4RTU1HsPKMW7UhBRnpfReRE3o6SRt79vgftqvxjfkTR6qtcmCsxwX5xKDo7AC59yeXUGwxP",
  "key8": "2mPeSi4w2vXq7xhR1sh9UgJJ9bYhF4hzuNJLG9BkRi8xjU2NzqpvmV6ZpDfgAdf648hPsMgnuUXeMyJXa2i9RzMD",
  "key9": "468Wib7d6yWBoUA9ukNJD22dg2WGeaSehsTswQtugXhekg2BhXkotqNc6gsAtsf5yn89MGMoCjZ1xf75t6SiQgPr",
  "key10": "391irJ6w2p6AbCmCpX8fPp8s9cVgfzmmEUdv7ZWC4LDRc967NtZ3q9xiQ3shp8NhVGCTsYqZrUMb6eryqyxiXTuE",
  "key11": "3LUNYpaEmaiJE18PRE3ibNP5LsHiZ3ygVUUTkAGkyfYEti41yHCcsgXS84GL9MWsLuh8AFZV51BtjrwLUAZzg4Ei",
  "key12": "2C9WyjrabJ8zyVCegZ5euFTH3mffKTWTDwDKtZiv3bC6RnV9j4F6q4gCD2pAJaTHcWb2AkPxtrHmSnEaWDWbL7KS",
  "key13": "2dmQbUeWRANmkMSkhZYSj7hjmUBGaduxy4a9CxPw8vmZw3aQY4av8bQeTyW3w7EF7ktNRVPbypHXafgboNsSGkfg",
  "key14": "3oUragACSSNgtWtifL538SrjFAMEavu9t5Z3ppnEX8ZXtFgJPb11JRUR7ofFwJYDgxJKLyqvNBVtLJR5Zo2av76a",
  "key15": "vbvgbChkRdMHdCbXUY65ovstRGSK2fpKw93FfHNuE3MDncTLK15iL7ee8UoYWYqoDtzWd355xKJu5rTd5XnG2E7",
  "key16": "4pzb338JrcV5hA6AYczWfTZrM7RsNZzq3tS21ijHV2v9eGn6BQ79XHNDqoxTw3ERQ5tRST7xQUoSpeuMFdyg4NHX",
  "key17": "4K9wn1U1Vq77Z7nQZ56tHHdPHD9k4AKsoKRYwsDeHJkCto1wkELeS6wckJwNSiCdtVSoC6ySMy2pvHn7vYxVP3Et",
  "key18": "2nDigYWVuyRJFf1M5yVCaAnD5H7mA7RVwJJ3Wy8f2PZ9ozqjkAXQkhq73MC4AX9H8JuKVB1DqDKSYSkVvyA5iDZ7",
  "key19": "ccUDxcBLMLnzcqbrWL6xsqhbqjzVa1rDb5UFm6wKgNu4ykJKYko8c7YbckwjpJT6pW5hsYHpoy1EuvTxJPr6uSp",
  "key20": "64h3j1xbJV8z9R7Jr6qQBwnbbjcPbk1unvJF81hK6RgdAXV3me1nh43yG6eg1A3nD8AY964FWv9Pnj8pXDCviqjf",
  "key21": "2qZGxWmSnv4CsU44wbZnLGLcjxTe4hXyHePW16HYDfgxJxPEWn8FGWEBrXBpSiVVvncGEPgzSeJQwakpLRh2s8qd",
  "key22": "4ZyjMXtT8upqy6dHsn2vemTEFkzbqA6gPoD8bHQ1J86HuPrQLNeWeW2yF62pa7kzEz6jAj71M4T2DMJBQPJJ6QJN",
  "key23": "3GuXRPc2RnMFT4BXBg56HeSeQRD4AieXsnvV3KWu57Dw1AniShHvBWNeCfha9uxH4gVCXcMX1crXw9jcWQ8RM2nz",
  "key24": "3rpx2ctnpRFXEk23xCQH7HGymgrrvn47MRp24GPnaMLDj9kmdkrHyG5JHQqkR4azd1GVKtrAPt2UzXQKPvAEwjE",
  "key25": "Rai4Zq7hmTXZ7z2MAwfJNCJdzGmyLU1W3PDYt4LE838Fepq9TuqGa21CftAya1UdPeEJXqsciAJZ3SUKrus1qJE",
  "key26": "3wrQmEcrxj6bnf15qZiiTq5LXq46JBpRAX5qCqAxMwutBeRZ8pdeJoMJS5wkLyzRKcEk4eB64iPqnWAdpDsthC5Q",
  "key27": "3oPvFViBCFYoEieFXaBeSXpX5xXHLCovpb4JHjyJF6TSMwXhLH3k75BJt9GnuR7aH8mQnYeTX1yuirC9e2XFMT2A"
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
