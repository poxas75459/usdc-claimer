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
    "vVNMQ58MXgF16MqRxfxAqvkUWML5cHxNhuz34U69RjCkCxdWp25jB7sPzFSDGpJDXnX996iNYukEshnD2qWh9Eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P65PYLji3xC2oQWuoBMNTvxhqkMTrpPiVZ8qacjzJLUqFV48xE4MonAghvrQuvCtGbMZri5Ap86TMzc9K7XW8zf",
  "key1": "2aMEmz7oWZTsX47oECsvcfU7phY2ErxqTTvRmm44APzirGA5moVQjktgaTesdMWYk24xfyU73HSoBmiz38s9veVk",
  "key2": "655EUamkDzRNBrX8GJJNxw3NzdoHz3unLVE4FxZ8SxLhp8TFCADZYDroUudQLXKi9RVdxdXiayXKaQMg6yve9pXe",
  "key3": "571JVW5yneRGCNwcRCzv2NejwnfzevgDEC2upYQv2q3JR3HtzGksun51uddydabFd9heXwGkzcRkLUsxxaUP3bLF",
  "key4": "2FHY2RwvENQqMiuiCLeeENAUhYtaosjiEb6NRCrcK461QoPB5UPrfddJ63RRvxUY7JxgT8i1quvULaebYQoEoenD",
  "key5": "5UCnrMDSYuojg8aRNpcRavyH3YM8Ydax6yBF7oGAD1WzjxQuWZedt67jo9LR2vQpUXjA8Jczqj2HMLdJpkCeAGFL",
  "key6": "2nxDhMrV841RTfrz4ZF7f4azc98JPQyDYky8EXWFJFgBo8QWfhM5Jgqy5KgKAjtME67LfVZY9boph9UQ39u5UBEU",
  "key7": "63PMysVj9fViWD8eS3gvLytAvRA3ngx8x1VgY9wEVizMfM4mubxH6psNd49pkanpACtpKJu19Mm4jqvbxkW8ZRQd",
  "key8": "oJCJhUpBLe5cHYyn5irFoex93dUwKWbQ1TtDbDuZWcVoHybuBHpeEo1w7dmDJ8vGoFTWnRBXaY1d2n5QXZZ8RZe",
  "key9": "3JZiYnUW7Nqg9fFKrTJ6RFkJJorJpL2JAV3dmgWN5i1KGGf12YCYnQR1kkWpET6XgE1VrQWvFjw2qhxe1Gqg2we7",
  "key10": "2crgpLbtT8sLSUkpJhfGmnwbUZMYNGK2sa5xzchKD6U6oiuJs9qWxTVS1sUMdz5eMx9dhaFgQ2V8wM11u2gutmtB",
  "key11": "WRnpmsyDxLGypigSTJR2mJqCBqRqPhfFSBqSjpicjnSNq2H1BtT5ENabS1kCi7ffNY3jbHqGzcRJCvMLpcMn8bi",
  "key12": "2rwj4RdVoKx2M3VuUtaU6t1LKitcDVF9bvWdmhGYi6mCm1M5zZsm7sYvo85igGha77Xm3ia5cP29DcoHPd1TCUDH",
  "key13": "3sVGQJnJtbbZstrJBPxFprDZ5k29N87tNoucbNqS7MUMZmEXhgxkfWuKpqKeHA2uHWdCYxG49hiYYtrpRfsnusJy",
  "key14": "2RfwpihBrhSRWGsfwcijGX3UFH8qWqRqKD9Mne5WBF15SsPkL6WSSwRCESxZDLcWCnANztZZ88ADaajk7z7syp9N",
  "key15": "51Lsfiy8HCuSee7CguDLUJ7Xf35btvJsc3iU3KkTmck4qHf37L5DnLdUjdboLoKtYMPDd3JsQZaPVUL5XQCoy3wk",
  "key16": "5pt6Wx7UNug18ErCkd3mPJgtUZ22bXsr41AyahqZwKJBQq6PQuZsXvvyRiBXsgwDFyYXpUMwoRvCDiKMZPYJ4sGQ",
  "key17": "2BLzUu6usi2a5pGfds8Q31etomAzubYmArTGxnCiDBDYMyNKiXuJ5nW3w5cngBS7wHPCyrTkjGd8JS5tjNLdvTEk",
  "key18": "3i7bicDpCuXNapeBRivGk4H3tbCfCcpges4d68LTFVQfkuNHN1hhZmdUCRiWiNnuFuDrV7LtYDYhnC43d7mpsdjn",
  "key19": "6MoTTJ7aLfd1wQQQ79qMoAv84m4i9TZwrMWgprLWPXj4HDFqc9HV3TVtiSmjuirFJLNTBQxbP5xbP87zaNtr2Ww",
  "key20": "46kNB8PokmPfXboF6iYoYNghmnP8AkeK2tza2gBDhHHkmgmzjqVB9Ak72rpyHkvKB1731p1jRfnhkrViMWHKkbPJ",
  "key21": "3noNWkHdEkD62FsvvVTQMeGgmvZvwUJexX7LDyzjHZgHbyNWBJ23HnpTXZp3vLx2Y2LorkRZ6skwG1dZ6EvdMYCC",
  "key22": "2EBWvPM2P8s173befoRSDFx9ae3UpsU9vtSon2iVUYzXiqHFuGMCiSJwU2wt5hMKUzM1QY7i4Kte9UghUnN9uxrK",
  "key23": "3vCTrkxetyihEWqaejTVzC8vnKhx1VTp7xhTp7jmUbM9Vw7R2jhPrhUUVkodhvF1MmdRLpPrqFfyMurJ8FUY1EqQ",
  "key24": "2PKiTtDiXBdPvFmtspfJfHeAWHG1xsv3X7wYkNuwTh2cSgxqhrTrAWD9uiCAaoQVtzcJBBENEaVopste7Przichf",
  "key25": "2EegF4o9z7WFxhNGY1t3eW9v3k5awZyTKaxor6qFqv3Yebz1jXsSTSU8FkoYUttxN9GL9NtTWaT3W6nJ4ZUoZE9S",
  "key26": "tVHFbTeDru8jYNwGVQVrR2CwP6ZQKB8h6L2RiD5iZthP3ZxJM33YgGegJbfAieAuPiquCT888tQp9ALJ5SWu3gN",
  "key27": "4KjfSWSyJj2wxc5myLvwWfCSmS7yFvUKHRWKbnT6FfVUPtaWK25QxKQ9RTLfsjkVdaGpWzBm69D46p9riqoXRPLq",
  "key28": "3PBoeRLZcaPpkpJskMCPg29dfdZ39RJBCAbo1jqvpTrqw5QZkmM7c4AQuBFf94gbNV1mYfGf3bryxJX7TRMihhky",
  "key29": "5SvrDgoTQhPqyC5K1iqLsG9PxtZfENRQM5ZwsEgQhwyd7G5xexRPjqXRUiFUntmRNZgBGGPNHrL3iLgZp9yziArM",
  "key30": "vAgJw2WzvJBwnSkKeNEcDvpdRvZP7vk85XXNwCXxnC3XtSZ522faKXE9cZcE1FjAiow1rNX1JdTKesZJiKQMa6y",
  "key31": "2xX5pcXGVswafoKEjJppgc8MR2LK8KthGZE4GSBuaVh2XihedUsBo7hqFvMpAkBB1QykT4eXngxGAYCWmwX9gBRo",
  "key32": "4MuAdaEmuSaxQJdZW6rNya6N2jTSoyWSGQo34JLXjVFjdqfLebQmQ1ghk1LKNB14WNrE95rUJW4GCiFUiK1Sj1th",
  "key33": "v4wS1jVLVMCFqnxmyZScFXZA4JnxRrKBX5xfLyG38FrmekbT6UvQiC2wjcQqSfoyAwFmAamVePXMuadkvvud7MS",
  "key34": "2apmxRU4tbapGt8WLMUSdFFNa32VjBxWkGniQ4o9wkC1nPe2yCFKh3wR1xfLwBQg6J6vaHhysjciA32dG4dGnapS"
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
