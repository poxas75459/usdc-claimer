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
    "5bLhDSq8WbEVo8KB3u99NNPAQVT9XowfPHPvAKSw948JMHyxCszzJLBbGtRouARy8B7g7ZN9gcsKKaRQarZGguk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4z62AbRkeMaLKp7CPP2B5uvcJ7tsBzMysoxBjC3QBvw9EnQ7c4hzDCc6YxdhCuRRgtPJekrEpQBJMgtrsHbcqf",
  "key1": "3v8LN18WHFFfpDXWQqiUDDNQvSSuSGmYMHaJUttf285Bj9rn8EimxaerKGJ5TQGudxbzUtb6VSAxKtSXnk1qjmuN",
  "key2": "Af4pDe3JsvgV3KXNMXxhc5WdUWByQjW6cuRqhE1SHhHh3ZYg9Twshuiyb8VEsDJFMpmsAtqKDpy317Z9peWc8kx",
  "key3": "V2sjQvr659UmAfsLgUFPBLRgcA7oBgLvNWLEkSUqnGe8bKBfm5gHatMJizRUqwXaJKcVdh3kSuPJPeTBqEbrGeR",
  "key4": "xy8HMpTkUifXs1Y6XYUjk2bg2vkScgTxYZM8zWTXVxuD6ijsAkB6giFumYvuXnxb2mGyeh7UrzPCAepFKGLM18L",
  "key5": "2du3dkduW9hAqHKDVdqUPvdsYikDoMtxFLAjWCsiJzyyxLvxCvFVx3TkvqSHtMrWdahVFnXWAT1fqwwmFDmLSvqD",
  "key6": "2yigYGrEaH1618pjyNvrjnEMxaYFFbC7eSP1AFwfS93zWaWZWcNyCvpfmbVoy5ckf3HeTWiHJGHttgcGPKujFAmY",
  "key7": "4KsenZ7X8XG6g9MbKEa6CPQpbyj26s5nFMmdbjrEDbfCvhDGgeFS5FcwCiti3bJQ9f9U8te2nGG6risdgBKiXFse",
  "key8": "2H7rmmkuqsV67SzkxtLirbJvMkDjTL592jv1jEv7qHU1FStEqitAh8FeWpUrAkh7Z4GvruoVwKEVHvsgVFCPfWhs",
  "key9": "2UyXoPvdVh5Vtg8Z71QuaVDZMdCUACTdohnK4pgLHgtFo2pZHQDk5ohNRyimqJkMHxPZFEsxNNMdgCfNAd2VXskX",
  "key10": "svpHVoPtKLYZSGu7xDedbTQu6itkUZWWe958yT2QrVyG1GuQ32LTDRLeJnhCijcYpTQE9MhmGNHkLbsvkjsT3CX",
  "key11": "3gvDaJBSoLxtvVWRd4uRaTXrZreZLhFWwawU6C7Mb5GJoG7g63gsPu5qvQEBXhKeqB4SwDFPwhqUUWTB4eBe1kwz",
  "key12": "3FtRD4jLJcYPU7tPtzU7rFd5rSbhRFn2Ehb2qviVgoq5wH6LKEwPCHXLYYibSTniNe2FCWiTcV8kUbeQrJdLcJtY",
  "key13": "5d7XhtxPFdGy45AZyw3NckSE5niZt36qNYpMGdgyoofhHakpHVdTGYhCgVHdjGu2CWdqkY4KHkz5jwdNwAat7CFv",
  "key14": "jWM3jTYhKTnReWVBFkBupTkvCeewKvVGvj8Y63RSFkScvwrnUTD3ZdiKXAonjG9jahFoUUqvuhG6pthPWjmf6sk",
  "key15": "2w5q8MWR9JHjTpobn6cJeRnov7TGXDFoQ96cvDY6HhCkMVyjnPof6PqjhStTssh3h1vX2uCvdxUM2C3rsZ375pS5",
  "key16": "2PL8WHijgZyio2HcHYn4CDeMz1jQMs5kQMtqvNqPaL6ZyjEqcLhe1mikenArF2FVrFc8obSFKjNmeEhyJx3tYNnm",
  "key17": "4NZu66ueig9KZcd8rfN4FtawYWbnk8P4jX5gogFMiZngQGRunbvkrQR7y5MNsCw9kXSGePoarBgNm8kjXPoREezy",
  "key18": "2CUqxku8pjxD6Eh1gYPx744FShRoN2x8KSAmChi5U8jZodMP1J1RHa2AVum8peR4tERD36qzZpkUhEvt4PTHRFty",
  "key19": "t5NyGoHtXuo35jyHDeGcb4xvWkL5dPLHCZReQh91w3TM83TpTibwhhJGSUcAQYsqYFbwe9X9cwiKCp3Kj5gQd1u",
  "key20": "RibuEeddKuXGKAERTstJwRXGbzFws3HFT9WD4o1fdgmXt5YeXyE25igj2SzSM1eWjrVVp28nJcDzbaSMWqwecd4",
  "key21": "3LtGYeipW39itsmv2ybJFmGwKc2kzYMqRN7FvMosUoZySn59LYDBqeg66nkCznzkKRrG6LAGxFUmbMvfcbHP7PFa",
  "key22": "4ywuoxQCWhn7FWmmLyXXkNiHHWs2CwZVnU6ximKo6abCSN2iV9pELfZTLesJEoPhLjQhVoAAdg9j13b6MBQEfRe2",
  "key23": "4QFscGi25BzMkdAyPZrUKN9nKamNdt6p12UEP5XoHnrQ4dg7USAbe68GmM4z1vYkUyHfw8JNktwJa975xgTgiyFt",
  "key24": "2nbvRFcL73DCDkVB5q1Su7or23Tn9abcshDqYaN2AAr3gRp6QEH34nw6zskD4tHaUwUo98rz6Ac39xmU69rr1zuw",
  "key25": "2TY1xcatvR1tJh9mcpeGwtNb3V4GsxCT4mNVvLh9AyMEptbTNBYD8eeUxkxf2gJxZb8qJvVXHzX6zCNhuzQ1HJZK",
  "key26": "3VdgY2rGbN2ByR25F3c9pcLAM8b4VvNcgd1QLBiHpBej2xhwK8YmJ9iACPLt2gfZpZKTvvcuFokSK257oRs6TQBY"
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
