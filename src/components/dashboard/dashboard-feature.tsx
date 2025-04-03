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
    "5yFD7mnz5s83kytEn5BX8zgdWyZQrUpoB2iK5NybxfHWuRbiZc6jSm2SofM89bXz4DBFSQMcdyDcYoKfs4z2zBTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XMdNuNgDCJHyEbtvGAdjVMpTjHmfmD2W1WtpcBKpvhnd96N4EarhiAVgdSfJPEBQf4psytVzdc4XiBR9cZ7JT6S",
  "key1": "37znwLuStXunoyyMPbJr6MqDddFcTD2RVHU8VnRH6DzL9EVCiiQCEtKUKdE9duqaW8zJ9gYrXaCmc1RMVAqp14kz",
  "key2": "3Ge5sbjWQkiGYBa9BbcdrL3pHg3B5Ww8y84AcFGkM5dVkruS2GEHDfgdxeHA28rKsAjserAKMBsJzkEcSFd13eHH",
  "key3": "3EofWUs6kBtDnYAyPNCG2cCaaoDfqYqCugdFkxSfuVEjht6udX6XRDdYMPoFrsvSmNgz6smhct56zefUdxg2pWvH",
  "key4": "2o4qNmCHaYM7bPH9mcfUn6Doyox7udWAJDVz4Zs3nYp9DiZ1nK2apyh4dAuaUGwvSpxvqQhgszbyikUoeP7kMgAm",
  "key5": "3d6sA3Uw6hUzczkxDeJMmi8m3hMh7jwGqvG5ThrAdejxFPKFw5ZnGd71GXV29BSCZcHHtwQsAfT49iHsDgUSkncf",
  "key6": "3agqqdgidZmSv43raEgcUR6ojA881rZA82vUNNwsj9c3khzDMbSLxKoUghuXLRQv4rFKQuRHP2S4e8LVfZhxSZdr",
  "key7": "3SkGtRJ76tFRPmhSjsgkbAbWvN3RGse49cyVPb3z6d8g3bK4uzUrShtPFSjw16xeVywTn4eSYj7F81BpqEGGeQby",
  "key8": "3g4iRNBj52KPgAsmwpWP2qS8Xi1zzyPSCVm8d7jiSKvxUHrNSwsQRPFQn4kgPsF6cRvsRBhVj3KvqBxze3Tc6Xto",
  "key9": "YKyfJHK7Yjqx6M6zry12LRzWQ6qUYXfX2C123p5SmrdsN5wN3NLssnnzFRWfFhaPK7dQrWQMk76ahVFznqi7bvN",
  "key10": "29zCWP9KGXjfyEN5pHfZBLzEqkRtVhFytbBG9Xsau76ZEmFYKTec7x9vuPjHczNnqLB3Z1coek9G1Fh9r5KwjvD1",
  "key11": "4GieXcrDTvkpjSppFMpPma5rKE9mb8MmpRzwxSSbR5SVpLr2MZDby45h1WMFjYou2hT9X5JVaZbEetcJxWFDddX",
  "key12": "3v2QqMEVGz5qv3DXhC8RuPApvD487BEmAuQtry1BkfnU1Rs5BQ5Tbb8LqKz6N7hiBH8fwYLYvsghsmuWfaStmzDa",
  "key13": "441wmop8944BUiGqmWNwdzddT5C2ASGA9R6LNKaPD8QU8S7q97peYhw5da8dVutKZrnrGEiVhJNQAYsBiLLgA9QE",
  "key14": "5c2JDXfJkuSG8hverNdUN9BBwWsSMx7mT6x8SBPVDH7DeuEfnTuGgxQ8s23ctE5rbhhXKEqgm16JBC1USbex3YMf",
  "key15": "36kHrrD5qMgQU7F7CZpjnhwqqs7jb54RmiH4LmnBBdiZ1LmsNSNE44qSMWLTaqpkivsDjVfcn975WCs7NMkK7hnh",
  "key16": "2PfNnj6S5NuZMBY5TV2ULD2WFKg2vYyZswKvRJE3DQSS1XDrmpLMWTEBR2yiKSxjJ36gQSnrz1Kmc2hsox1Ka9k2",
  "key17": "2kdgUZzM2Bu4hchegyLEVzqoeDDHMS2X8Em877LPgVPHwMEgyqACBkvqtxLawz6fwQG1JA4ZVdQRwYZ49MqXAVst",
  "key18": "62cxmNe3vbo4EqHiRfaaP113auV3tCEhboxt2YcQfBiVMWuSXtKejuSnvsJ2k4Kow8AZKJkjgBfwbmTDBQ35Argx",
  "key19": "3FzBsUYvU8o21GmiEyhGEo8spXCv2ZMM6fDsnqLYuiyS4Fs3NXo663BjQgDBNNtHhQbZMnWmqUTe5zauP69K1vUh",
  "key20": "CBS8rgofztKujLTZFkoQL1VcJGE7X4jUJFEMJexXCnuqVEMCq9NvRzb1PpiXhqGUrfrfdxAJ7Lc9Wif8wCDibPL",
  "key21": "2QfGxiGt98XWvgn5c4uXRwKAsCyeg5tQhEKZGWgM1puRDKUcGqtwvGdb1SqusaPd1ZtFUb9VwQzWiW5eTJ24YYSK",
  "key22": "PLRkC8sfVAFmfxk6KF7oNYexVjeL94eyciWXr91JjRqhM27BoHgR9oJLAiDvVbYxqEMqCifbSg8QpktKtHzs7b4",
  "key23": "94wywvWE9Y3YDHJZJqyhkhwnLSh6p8BMug84PZjDVJE6kNSo4wZtPkY7wxtBgMgAdtWuD8yt2xrf7fvTRPnXizV",
  "key24": "36feaM7hBmeRAstumJ1AzUBueLYwvDdQkG7e9M9aNR6rea1Lj9yJCWLYQshpU1dHP87kgPiyh2G1jM24YkiEscbb",
  "key25": "2b5u5zDL5nG5SrBCBawwmyyA1beEB49LaYe5Xavu6UL55pQ9knjoVFxGUokLj7QJf3yF7dHPjXNqUHTUiSpux4rM",
  "key26": "54t5x1L8aMBEPR5pNbLYnqAMMk42aPNJvQrYPBNBrMj9fNBEYCfRLTrNYMYTs7teN8sjQZfXWRdymVsqBgQRY7Jx"
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
