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
    "2mwBSdagm5eEtpgaJDF2yVCZdzc6saA1Ei8FZjKav4nyWiwHZrYQ3FcTUoGQgHghwfjgB9jw5K7ion6kyHpS8uFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23UyWUeRcrMuvJAXn6iS1BPeCw8qNCVuEyxF16xj5PkEDn46gEbPweerAmtt3jgSJnkBEwdmUG5GCxWCwPZiVPBo",
  "key1": "2WnSZnYFckj9RAucMp7UciMYFGcHsvqVfL8pHfBgZdMB6VXBeh7w4T4C24NaxmYSTVtHP3WLqK1kskySatL3x67v",
  "key2": "24WhW2oWEAhREby4ffRGG9TJxVkrqESZVtADz9NJxh4UVNgiSZhgd3kTjP5D8kLaYtKKUMJPt1CD4aF5NEQMbqaK",
  "key3": "QZ3tvnKJjVgzZshWtXb5JrZHtJgVnyokHmBjBqAUNHduQysQB7sA9FSkyA36EybvCYyysfDkUVJPfyWbSM7MSG5",
  "key4": "5zcYq7ek3FUbrZQAV1Ace6Qo7Bt41Q8C87NudzfWU1toHsXkTmktaVUq3fCpQBzxNLnZ966bNdcs9GGQ1FenM1je",
  "key5": "5wSuFYd6pA22NV3jCipePxpxtP6Dtm8jXHTbeMjATpmkmaKDhhibMTjfMqv3R7fPNUenSeLASQuqynjG2W5QprfP",
  "key6": "35EkxY2GSJxQejALkZVqLQb2QUnkHJTPP5Uq9gk9nPKfAUsLdEdUp2x7Emcmp8VjRcG4xe75jM8aib7C2Eux6FfH",
  "key7": "4U6xp2HnXUroqrpv18DorA8YxREKp6wB4PvF1vzQ28yPEFTESjaDVA6yd9rp53C9k7baohswjq4pcRu9AHDEgb5x",
  "key8": "45qridiUdVTx2LLBoxVKvv33H3pNtpMr5fqj54VGA4n66wTukgGb8mTYfAzUvzhqH5FEHkpCrsYiJdhV3HAXmGMe",
  "key9": "rpCVhfdDRtGmzYBh9Sq9vj2ALUBqABQRZhfnuMCaAtyieDk9yNzskM9uS84xi6Rp87TNT7b5XDuJGEiKYxhUJW2",
  "key10": "4n3Ds1uYjPyevGWgwhM5wn6QTRZGzhJDe2MPAhvV17mJqBN6XEQVLob5rPDBM6R5AbT8bpSYpyfxpzMe1HM4xp4q",
  "key11": "4RUjmaGPErbZNTUyxTJVPWHcRTzroGKKx83g7Erf4jJhpgNJZumBP9Jgt2o6hDHza6HPhyCD51KH4VwYDzCD3cN2",
  "key12": "5bEtwNHcdxjjAGmdCdJ1oK9efzhwwURfEH8jZ5JmPvDoA4hmEvH5MKY7XAb1LNugpZUcDFyBc2RCixvEKLrKko7H",
  "key13": "27Evz4xg9grUGZsSbenMxNpmsMQPxJY83XQQQYCFbuC8USjXtKtVMpTRG5gtVcJq4qjKeRQdy7LUkTzyVKS4Pw4K",
  "key14": "3q5x1f4G5AFD1vXhCNbE53Zq81WvFeqnycztTpaFwKBpCfhGBfSDVsPN8VtM7wyGSJzt4hjL22zUUv7WPHYez7sE",
  "key15": "xiQxAnyqPdKcb4BuBtGu2a6EcuD9TesCNTjkcNhqS8ryiNjVFPLt1uyBsxsETsKyVVj2SaQufvDKsoPeM54MZdj",
  "key16": "5EXoqDMLYXLBjiSKXNvJ4ao1JYQDW44arE3XeijUqUWWgqBZBQXsCwCBZvrRNhXymChqBDwjJHd9U8tTRf3fxamr",
  "key17": "4p9ZvATGaCfw8ihHS6oWMbjoYAgu5wvgy8TDQ25pTGqngFEGxFzZj24QHJ4rRfmTQzT1aX96RD3QUTxa31aLqA8f",
  "key18": "2cgZG7V2FTKxPopvreSr5mheNiGyGm6tTgVAMphjjNzv5aFc1r1bLPAdrtEgSF7ozmraqXV69vni4krrW5aDH2yd",
  "key19": "34f6a7CMWSRigW2acuH76iADW84MdgEGTdSki1Td1xBLpeDvLE2TpDWHvj9tmErRj8viMJBv6qe4TLvrDbeJxcac",
  "key20": "tkfsRvdEpSafFfhtchG6AoiX7b8cN1ypAHKJUzsUpVjKNdfGVC2wLN9nR7B2SE1kYPfPKNy3LKio19ZUKVNorJr",
  "key21": "2n4WSzQn3kDC5zXtvgSLAAdyjMtwgDay9vdf1aKPu2iBdgXWNbFSRZUCQ2WygmjNgkpMervxHX5n39CiP68Ge4nR",
  "key22": "2v548av4njiU6YkSDp3HPzYMaSpTaS4qgqq2GVUxxxyJKxhEaHTe76FQ2454wuv59JKHqRKw7Td6Za6pdqnGx3mJ",
  "key23": "4moVdu7mJaC7mvFsAYFTQZDgHHgJzMwmboo21tsS7jX1xdrcUdwdgiwJF7Wk34Zvk6B5LVjF3fkRZcszXfYW6aMm",
  "key24": "PFrMrLrGTDbTHmZecEPFAXRXQWMS9NZyYVwE7HitpBez9orea4ExfMqjYruSNC64ycAWSxBiL7jRYw2MvMQJHQu",
  "key25": "XGUDSMxzbCjCE1aJiTNTgY78NTvMXQqHwM4oz6tsPGRYm4y1YBbdjFJcUcfRBDbZpNVAteVS1HhhaPoh91pv125"
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
