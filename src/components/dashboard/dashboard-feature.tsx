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
    "4sjhTRgCd58FZ63BptqGTGJiUM1MSAofDNuJtEMyyTHsKnEb2HXTMgEyRAmRehGwxyj2g5hoFZXWQ2rs7ujatirY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyzCZDdcEB1c4ktjh2H2nM8qViLmVrtBXXdxPGhMciedzb3SvF58SBM9tdVfvSSSuE95PHgtWRvBFEHFt9x3o5n",
  "key1": "5aQ2uXjNwckgjqbqg6PSWkRgMmwUXCajpD7i5cHBoACCaWsdFMzzGxdkjBiLFpEMtyJ3jDw1ziKr6uPQtpCzJRCo",
  "key2": "4WBwnkk4Qtz9Ms7YDudELRU8UMRxYTcry2asK7hKvVmqyHKR15TrxX8E2DHedRkcqyZsccsW6cGaer1gpS7B84q3",
  "key3": "2Bn5DXJYNTSfDmvjoExWRjo1jJ5fHRQ2Ja1UuLo9UVxTF8pDpeFBjjM7YVsjs575cCFSEFviGie1Tb3wDuQxGDrE",
  "key4": "3RhqTVVryTBFgV4F3noD8gavUS4hoG8S49oMN3mjAu21QrNBpGTfYPWKFBuL711oAGrxmuJC3Txipj1x9QiCnYT6",
  "key5": "u7syMjWFd4F2wVciN3rE6NwzkmwV3R3eEMXhWAkg7YKQG3NYQJHJRGa4Lwnd3SkSgPrWKqxz5mhLFnCM1arSmL8",
  "key6": "61tf2fHveyzP6r7Xbf6Y27Dnfa9HTaqosrYLrXXhriFrEdCa4b4kxSHBCs9ZLVY4XYfiRDiyfmmt42nu8hc2i7BH",
  "key7": "176W7XprpqP2QrDpG6UZyvqH7SrG228EG8DDefAoC1JcABZ2UGT68Ad8sRrmRL6LwKjVnMSNjrL9Jm1PCXz9AHS",
  "key8": "5PQLW3ELzjKoKfomQ4Tjx7qG5qYCiMxZDRPsusJuBYHnNwakiQnHVzA283zUXCmQE7Jjcw2NxJiz76qhMHYd1axk",
  "key9": "5YkTvtUuF1vE5EdYJhQUrga28T3GPJkdrY3KTi2dMx8BFhtxhehg7NLx316CVBsU1x3SwGQvbAPFTDNAL9WzpgoZ",
  "key10": "5ssx1o7TkeBjyjSnht76GVkKHt5Xk7B5bVv8zmeS8njkhe3FAejCZbfUTJZBBYy46xFsaezmi94BcTxwXERv4NpC",
  "key11": "33nf2d8MvksPDWX8b9kJYJBfoKj5z79GqMwWL6VcfEgwyguCdzuVSaLLGfvbo3wW4gSQjbP1qoZh4Xmf9FWUUf1M",
  "key12": "wmPC2SAVHMGE4EvUXPu7xVAnkcWGbbkY8Nu3Rh15JkfiVnc4tBmCVwvc3sPAu9JY6mh62pCVTHz6D1cLKnsDMyQ",
  "key13": "4FbqQgwx6dwzf7mJF5azarkc7HpVeuPCbazBBZomUxxZHJMnJXaNpk9A1RjoXicEuEuh7ef8PPtJ9ZfEXLiSjRYs",
  "key14": "4wcPp4Z4NVkoMBbejcyqgkSHM2WXY67DQ9szPNvbVQnfQv2AyShamWYgmR3kGgxt38N7fuN4Na89BPpafWvRxjxS",
  "key15": "4HrzBYLcqzErZNw5Eh9TeJEJssTiSEBPvE9WgJewP3h777x5VNyaxeARxpqgN2EUmq2LLUER4162i4XVGWNAi5Li",
  "key16": "38g3X2XWUhzNBJwKQHHM79pBR3pAcJnGfWDSg1crzk71BEBakV7SMxDCGmPS1YG8AsLaVj3nLugyWZEGL1MRUq8M",
  "key17": "4Z9KnqjFUrb6tL2Wce2fDqXBmqc1rnpzZmoqocgxyuocwTrkiU2SGWZ6mphiBzeD8Nk9FJCgdVZiRyBnTN7NqJAV",
  "key18": "3rdt5WPBNKxxJFe6BpTdU5UsfdgcrBRU6RW1mX3SAipDbLzykjdoZQgsKNMWtwz7HEg2s1xaFEzTYeXjWZV3aS1J",
  "key19": "4DgyvxvBCYfUUmdqPGS2DJEhacr8ANzsLaCemHA6HifnZ1NVbnEsuzyXqw9gx9bNCa52kCCU44pjdy51qWkvcdn2",
  "key20": "3JFrJ9TpBGT5J8XciCsjfMqM6XTNAGFnjRD31KULRAcWZcN3gGjk8rLQKZZHGNztm8bXrU8Gf34v52A1Hur9wUkq",
  "key21": "3WU68y4oaCrEwSpHcrE46XTV6w9HDdu16wh7XPPmGs1xWkNjFpKkuzpJSqHuzruWpzz59PVsAzEsCv6C55MVXkvE",
  "key22": "sHVnqWiZD7fxYteam489evXxDLWnRubbxYL3KkAZAjXrDoH37fVEXdef4yZKCqkVeAtr1pWfZ79PnXhZEYW3NY8",
  "key23": "cenfniv2G9fidVLQ9ioC5GKAUTq7AQPZbprQBhbR18v6E62DskNumseWdSErpojUYvrJc31GzJ12YJGPNZyFng9",
  "key24": "YKQ8NbsZeb5CgnhQ7nAFHFbVWsTJCjDbarEDMtvauTrKn16qb4g5HgCUaSnyUucDfwgxkS9tsraP5ufqFGGmAxz",
  "key25": "4B8DxAANYt9k6WRseoJiApPRYVG91emWczpt2phwgUDaeNFjka3AuBvidQ7gwHHtzkuGD3Bg81NTiF3JzLGmpreM",
  "key26": "4wqRZNKZZ35uYx9d4PtCCsgYBt4oxxgJgdzqh8igFvTDZfKxf6vt4GBmtQRTJBneuTsfQWRTYupALT3Dr3u6kBiM",
  "key27": "5DtCDjnqfa2hsncuMzM2aeZaMBAk29aB74ktpf5csQGdzCsDFWa6P1zQXFzmm8wGyuSV84mNoQQZmwGshSpJL2Um",
  "key28": "3QnDe2RzoYVxfp1c7jC523k9ZZyuXcTQLnrSwBMKSYkeMHV29eCZ7VBnQitzqXpxSna8nq9BTPff7KqPgJH4bGjW",
  "key29": "5t4izHrWNomUnFWq4sWFgBrkp4pXnRtqsFkUq8ejvhTYcnSk65UGQP5teDY2F8bMdbTMfkmskQ3GcbBGpVoyUvwY",
  "key30": "2YMh1vEpBnyHqMK8Ahb83gbT1m4bBYEgmQqGUVfpc9CTpQqpr4647gcVqoe3NUdn4ggQsg2ZgiJrysJKCbXnoc9L"
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
