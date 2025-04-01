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
    "3EzHiuC3Vh2gAA7pEoTTXXFfeAZoNnA5Y5gqMwUhyHmwqZDWWwY6RMiqMMLQn4VGCG4z6TnK29EECbu6WVNknRFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZwscFkUjTwpUznVbvbsfULdoDXN6nZN1hgnknJoC1pe81YLxTmg2o1zFWZnvJuF5rjtJrdNi46qua5CLFTvS86P",
  "key1": "38YPY6TYXmzy23hhoKHWgSi5rPNfaYQJWXGcENh5C4nnsqewLjXwbGc5PyXCCN6rX2CVKp2TAsibGFuxLNkVYUdr",
  "key2": "7JuwQFit8HuePSb9wknZzYqFfboHA7makR6zxfe8LqqgBFhuPjvcfYSy9pxk6Ho4nqAnU71pUc7bKzkxkfYPc8V",
  "key3": "4CTYRH2Yr3BFhLCvi4Z54C5Pmq2ycZ2huqo3xqgn2UF1JJduUgpnhrQcnnYKDRK6cNW7mmhyq86eV4dqb6Nrx7EW",
  "key4": "JUzV7pGE3xHhzRWwFm2Du9HohPjQR1GgVjCTChEXMswQ6JQxRi48WjyoN3JvsHaZH4iPnYdBQhfNhpx1iJPNwaN",
  "key5": "5oxWN42kQ3AYH1qyesJFMLGJhmxXjHYoEjPXLcaW4hXi2tshfucj6PMSorhdEAZcSvnpD1KJsymgMdPZG5dpf3Lv",
  "key6": "5KPtzV3TeDUcYhu4QXSbA2SYUpvu3VAFDr1csKwvKuCKjnVMBSVM272mqb71AgwcU3qcVQaKoJtNW9a1Xk9WXXoK",
  "key7": "Yvdg3hrtEFFtpzPtkQRmkLw11e4CEoAM8ADoyHdCacMfusDvUL1BseyXvMpBYRvzgLLMwJzT6u6xYTcLmCSfAGb",
  "key8": "2zVdx1WfxdzqTk5yjdDgGxFdbHDiAEfUMrJ2YpBCXGY4Xp5ht6sJicHi2187SjVZzw3EndWu2ASmukgNpGGHuPkL",
  "key9": "5dwXtCMFLunnVN7xom5CRWPjDZRnBgZE8MvbbVWMmeD23pNBtA7oA5hR7GDpkKZgC7FbtF3d3heTSM1nf85GXv5b",
  "key10": "4pi9qixq61jdZjgfCBPGFpjqwqGM4jVtxUoiEJDSqggZgLDvLvdaMeUoBAw3r9xhmq9Zx4WfXqmuaBGLSsU1J8fq",
  "key11": "3TiS8kmrsGH1vBFUU1osSBgPi6RXU9GkNNtGA9PoEkQQgjc94L2XAc4K2mJYEERninLUXpZLFqVbMmxiPqBFWfQh",
  "key12": "myZiqNJmG22yEzrDE2FLMfMidoMhDTdAmwnrQ5uLTNr11yQnLrJbahrP4r59w274iSzvNsbJDJmxssXm7a6u7Ue",
  "key13": "xXq4bLXMW6Tbr5DfMXMoHP4Q9dZskGkXxMDQmXeDyhVPxQZR4GzeWQEMyQYoTePHpp9HmKpmwRbYq99bdSV86mo",
  "key14": "54sjNBhVoU7YH4uJisiCmywePcyGEqiPKG1suHsGzr6jLCJG3KtNQ7JMmyLty1J3HiUAsmePLmr8w1R2RQREiRCR",
  "key15": "4LkwPAnDHo1VjenCVyvgXWxS2E9f9o5TVXujRpsGHkj6ZuqZtBosTBBkU9zYuH2TDft8R3PkxYQhoB6mVb7GQ7T9",
  "key16": "4nisWrqrPPQJkqb3KsX7nXE76GNxj1VY44zHQLamJzs52jTd7D3d8oEhezbndSNaiAHvwT2qspDCLLFC7Yp28CqN",
  "key17": "2Z6SnuLb7A6jMniDehARfTkmQJEi28zFvvc86JjpM27bpsGQn7kz9QV5bNJ6KMzSQiLypztJBR6AdDGaer1TXsYP",
  "key18": "5tvPHrPuMry2QfLy12bnvJerDeySERPDCaAe3UJWBkH2zCr3xxtC9GRPfq4WHkZ5DE5EGVseXBi2Jqk6Ktc5UW5B",
  "key19": "5Hyh9BoxtnjujQXgziyXKqki9CSd8Ab1nVEmMYo2UwqNmAvJtvsHocUAKf7B3C4LCRTv2UtqMfMbEdHsPbZYALWU",
  "key20": "2raAsqZ67sEBEZG6crUp1oJ5EtycXV1fUXfjakRpsdWhqUsKWid3RCfvYqhfMvhsMNeS1NTdnQP3suVaxrgqpk3n",
  "key21": "2xqDvyYxM6CSwe1rFXxhrKXZgsXLhYdCo4gDYKTeoHpzpRD5n1M2J9uYbWWQyUNTh6LuCwoZR2uPC3fFydXAJKmL",
  "key22": "3iRZXmsjN66TXAKhPW8qQLxkM7NcMcC4jBikz2kaAHQKP6FP27cEHTXAFVm8dC7SwxvtVApKBqn21BHtmxY4QuRH",
  "key23": "Q6WenuWXhm9XoKtRccjpWscE87rPryPzjJvspzrwNd2hbgWsfPTxA8pxzfgfs2hgtAiLHDTpCJ6v8C8BMqBxacs",
  "key24": "kWeRWgeWgjfaPe9J5bLdC96wtRNsWKMg7AUXzKcFXfo3N55gAviKWuSsUZqh1AdToqazkNMhQFqDoDAJpt9GsnR",
  "key25": "2ARu8F4y9VRarV8MaBip75PSFGRNbqEP3529xSZxWvHZFFqLwB6aG3ZvNAtJ7GkVYpMSwsnhHsWBzKPK4MyBMPq2",
  "key26": "YL9jW74fhhcPAymjxDALuK3dJQrzja94x1L9jKF2TEpLhfKABwmoZgx5P4zG9goCBF3L9kfRhGcmwMhYDTn48PQ",
  "key27": "4GbV3a4BtneVr16uxJbQgRt4AsSyB9pBjYfHE5NZPBjYh7G2HaDBxBsE5t2Vmow3BdMXbhKjcscakeQDPDJNptvB"
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
