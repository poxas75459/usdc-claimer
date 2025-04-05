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
    "25aKdVCkjq2xaKxEJXKBJ2A7EEFKuqViYXBHcs4E5gSuk6cUQNQR92QY4tvpytd2Yin576h5y4gp9KfpcFJTNm3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26SiK4LZUqjPHZ4RGbPEUnDkF1LoYbqGJY89LRYm4heVDFQZbmiavfFsL2gTQdTvgHmuLGBbQfJaBpjzGseXhgg2",
  "key1": "3tsQmmUFqN8sKzdhGkXe1eqotuPSMzoUuiW9aFiPntooGoFA9XoVE1qgb7zuoxZouUTbLACrQxehpYBs2GMuiKo1",
  "key2": "27uAn4NGWw3C6nxbQAxJYANwEXfNn6ZsFrM9CBLaq39SQfCJHB6rnUCe6MBjmHjrYQZBGwxWS9PNBhhDRBmBq2dD",
  "key3": "3U3Fs5xgp33KoRDE2Hoa1idhgujjqfAuqu2NZV3S9NUJLQUYVjhgEssDfmALcsR1HjDsxDKSb3zbhAC4PTAbiPW",
  "key4": "2b4qFnkCh1xUmJzdPUB9n7NXKW69wC6uuN7REZbwG6RLA8PQWwmR2wuiDKpRSAeNusf448zPThL5KD5qyEJCdYRn",
  "key5": "3jjcPBGiSu6EoBdipY14LE2TWvN6jiT4PyJFNp5rHqNgSDJqVwnG4A55La1B2ozdRtaBFdzRqeX35bzMSzvah6Xm",
  "key6": "5CjkKBbTuzjoPpi1BfWjqBYtR1mhPKWeChPVTD2W32Bos5jpS8QeyaZvu2uTeJFFc6tcZAABbAyKiX33vz1gYi1o",
  "key7": "4CZhJqK6TGkAikupSUo52iASRBJYDX7k2AM9rrpt3xb4QYZkjRF5D7C2u1DjENaSMt54w1WNvxP27mRpcXydgSVA",
  "key8": "288uNehJx3xKfnuNpeQYzvN72AYCBdfxLnkn1GoTRMDNGLBizyHQ9wUWiWvFgMcJYAQYRzPji3fESUiud3ALJXbG",
  "key9": "3SUbyzvJKZURvtGAruawk5ggBqVaPVydStWmdWAtG3q3kYQUuGh3MaAvJ67cbveTw6sedunW61pVjEkuon7KXFye",
  "key10": "2bAjgxnsjhVub8zt2gMs4YBLiXW8WG1VeTRYviPCp3aH5mXNTU7DGdyZuHFF4WpokrbH96vJTiC6FDLJnzWpmPzu",
  "key11": "2rewafH7Vb196AhRTay1X6ec5hW4kJJ1SK4U5XJzJNwpr81cXLdBGTNXEeHo4aGhnpfZAEQjyA6wZFuUzCN36waU",
  "key12": "33RNQMXYUhFa5WnV9miy9VpoHJv91q2Z1fZGMENcpZkTaquhFkTpsYA9umxvo23R8LEsofX2iPth9QFQEbuMKy4G",
  "key13": "4fVL8wAEWkmGtwuowpmxXEG2KvPMrrSm82bdMaNYTABrSs4qJ4f4CGK7rGof6qkfFtAqESAKcCQAXnFhEMdeLisZ",
  "key14": "2L3HJJbLVatgdUkddcStgG4NoQxikpFJjh4SwkMga2hLbGM8BtgZeeeRVbw4QguV8U9d9mTPqzbkpYCgdXi3Ty6E",
  "key15": "42JXTBfXhHzwbPx3QJhV3YC9hbpcKjknLfPD3smXBqo1vHFpb447UvFGZWcdAFSV2WHL7U9KsPvT6AeTB6gojZJz",
  "key16": "3SkEdCGwb438zbGq2LbZqMt44yKjBiVuaXP1GkVWbgxxCdFANnZSebRtHrLR9LWcJ7d1Q4H1M7gWo6mrwBrD89PA",
  "key17": "2teQCdMTFHqPXiw1DbfoqEqQmAhnWe7CD6AhrH7oJJwb58sernZeTEvomsCgwokc7Mq2AWvJyBtE441WQ71y6prj",
  "key18": "5hwt3wKLi2rbE73v5TCGCwA26qDTNN6iFBbmjk9EM9oJfYzd2mJAJTwxxbB89xkvwFFaUwuS29NFFNZBbCK41t5R",
  "key19": "2gdqwqYkf4XESddRyxXsUS2CNFhjughcrLxq2DSNohg2yKki1DvMppQDHpeLp3xFLVMMjehok8WMBUw9BAfvtmNs",
  "key20": "3TnSNCAXtjUFSbmxoYgwSV2ywM1epHHfHfjNt7CRXE6UTJve8DhkKf1DpgvpLznYdiztQDdQEpTw8ub7KU8F8VQe",
  "key21": "CUmnSumENC66rupGJMBhKufXjANirRDBkCV2Ni623YCMGsfzq921qgguzs7AfbKabuX9dUDQbF658NzMR7D9Nnt",
  "key22": "3Hx3eypCWa7CqmJnncevnpLbCUTUm2xXjV5jvfjdVQ9WHgpP6k1Ynvzr9BiuiE3AWwweCMpGAdGUkBfmfhdrRSfg",
  "key23": "4jvxzUKA4Ks3BV66xi4JF7ALpvUG8oqnxDQymyX3eadTDB5oGUQ4Np87T5RdkcTDZ2YTpVyhQ7WoCq6z2NY3zUQ6",
  "key24": "4XyDTDR89fWKrkifLjijfTJGuBpCETvz9LCMJScve52cEu6fqYLkCuZUZR8rrYW2FpGZQAStzA4LTHbiMAzqRPb6",
  "key25": "ztgXkjGkR7wVGj296z4Yy3Q1CHbadsEMcpJVjTJ52aPFZVDYnoNebadi6wcJK8u8ewEhnb7WKDUi7Uo8gXByKi7",
  "key26": "3j2HBzHXev97gGc9zS9Y44GAdMt84nPbNtTjbcHxxPPAYWsCAJ3vo2uhyis5U837JTZrSyXrjLRErWbTQGdpq848"
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
