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
    "2nuvJVUBohKp4KTszv5ejhHaKG8KnxCpvy5Rk3tME1kFzChCqDWbVaVTKiQ2kY3aSzV2Hd4QYLjjgfSzHs3bRWAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5GwVkdC5ELMXPS7EwrnHzazxzGMTDTh7D4Mg8cuoLyBWcUbDPC7Q5E8tZvW8KUPkopy9UJkYUqxf1tkPquhE3",
  "key1": "YTmK7kkUPgwxRZcYNkyFUDJk41kjwpkHxBcxf4zNxNjc4hhVYUistLjer3Lk9zfWF9dSLaB7gRTiErjEzsR1bmJ",
  "key2": "36fKk8TomawLgxv6m5JrApAJDCtgUzQ8LHBWWFTHizGRaLqXvBCSa2rzerYrWCFAqFjtQUsQjZ51uZoqj8uhocBP",
  "key3": "4y4pPwNEAU8B2PRF8cNfDJkptY2u2Lr5PGRi3ppo2BNSMkMTFdLSfzCP4x7RxY3SgWVB942rDiGxjWyFkUU6PEkR",
  "key4": "4bwsA7AU246yCJ3g6XEV2bZ4FxCLKCsAdN12yKU1zXJX3qmbd3NVoHQqpva3U2EFJWYqyHwxeFzqZyZ3r7hCtSsG",
  "key5": "3ziHouFPjQpU8cHUyDznYQzqGtodM8TQQQJFp6iQMKDZSnWu991nLPoCSJsxHFPQwDVwnTURTz1UbFN8jikAoeBY",
  "key6": "4UCi8C6FCjevSWYiGdafjDomXchzZjriPBepTtWT4UoBF3KRNXFyEhzrBGRmR2x68aP3qt3i9AMxHHfNdYaGnoYL",
  "key7": "5TmCYS6Nw3Wv8vPgLgar9BYda4bLQ4acfopSP1GVm7dLrNWpNR1CU5eYxKXWiwT1vKn3pp8bJcfFU8LtQJro9TtS",
  "key8": "2YG1jiV8mK15JEahjLZfXJ22xzWef6FWMgSDERS5rmQyeJHxNPZSFWJW4dkbiSurwVZhvzSx4q1NxUNFoHdm6Uht",
  "key9": "peLQFPyydRqoRumtanuJgpUKHT8K8jGE1BigtCkhpWWQ8S9zG4jXtyZnzhLNDnocEwDPRsG84MDYieYvcGb6eFL",
  "key10": "Mn4ktmRMXRKkepmDyW1KqnX9Lx6pxv5Wi1KRRMZDH6VCXwUqAFWRMJPVWqM9CHjqycYMZnFAkc5NRTLGNkSM6Fj",
  "key11": "bMneUxEak69mW6zLJuAYFRrjadxhMBiVDd9Y5aZJjkuQHftRYss9DbxvFNvFFx1NH5jb8jc9pYR7yhMjkNx2hMU",
  "key12": "4BBufaJckSFzYLZKEZiNaCbtjsmvExgPj41yRmVG1w7JRaJxDqReFaYLUgud95DGLtHSH6TikDSVj4ZyCjDMpC39",
  "key13": "4NkWLG9RfA3SpEbaexDBW2GK4SVTekQYnUUD1GiC2r4e5C4y759o4xViSdGdMNFKDkvD3eJymbGvqechnQH3WoNW",
  "key14": "5Qatp2GZ5aqtVy68trjrHqVCtHyDFjMfRifr4pF4YPYGMTQvd1JCUFnzFMcRR8CZ2S4J6w2Y6BYFCxRwNzvjTPoQ",
  "key15": "66j3VGbWYjdF1nr2UUgjzQiuqyEZFbChR4NsroCWDvj4udwmyBqxeb59yEFmLuXGwmiecfGjNWx1VsNRgB9X6wm2",
  "key16": "4fuVaiVwQ85Mn6mE6qziPLLQTvBXGck9y193akeTp5E9EBEWSbVuhpJXuqsyzFeg7FnydjthcQcncFzPQtezxSva",
  "key17": "2APV6k6wjgwoxocxhtew9k8CXfXTLyK3Zus7PJyuSi84NkXW83SDsmBzGcpH8h6x4G5em6Pezt2BSR6tQtiabvKd",
  "key18": "4mXyqsUzsyXx817D3BgkuGeZXgyHg2aqEP3NsqYBsNP5rJqtBPE83JdnQKmEskQNxgv7KiQUn7DPbTMBRx2QVXMB",
  "key19": "3XUhNsBcKC6jV9dJjmA2sXJqsg7XstyoBJv7adnmoGNXpNm14d52WEpSvENXMXTQkrT2wCU67B4SFXfKDxVzfcfZ",
  "key20": "4wKKKU3WyvZhKyBFDuetPg3KbjvEzBbQTErUqjWAWuUbmEZ94PJWDbU4NKZpJr3qWSNDHaM6RevAFQscdUsaHyBF",
  "key21": "29M93tVAJcDLp65N3o6TFQzmYw1ufbFeSJdAaDdZ2MaNVWG45Uw4Rk2ZK4KJ2MzF2jL7YCtTFDKdsgG1hVhFfgwS",
  "key22": "5mw6tjriZ691vwyqXMs6qZk391qKmaDz4f4FFu8Skabj97yFsXkkkxCSnASsSoiype7XErCSqxQrwvDzpRcZv9Ft",
  "key23": "YpH3rnSt6rXTYrVHGoCc6Bt8fPJsR3BcLFr9JLQ3L2qbG21Piy5ZUTcjDbYNpMVrPPNYpq94QXbxBs1rWkLozPm",
  "key24": "3NGXxqyuUnQUK483WUeEyrcks2FPEc4bgDKWJ7yzhMhFYPdeouqMa7NtY2mEXoaWugxu9iQRnYczWNMtodxSkLGQ",
  "key25": "4VMheNaA7ft12bxL8xSfWmRGkZKSp8oE1fq8Zv4Cs21n24eUoDJpiCCBZF2c4iuKjdQvwpVN485z4RiqkX6wthTk",
  "key26": "GTNjnxnmD1zitrU6WgbvKkzxvTuH6hSyQUPsq6uS4BVLeS5b639UGe11v7jaRpvLHRRfvCRefpsTZ7DACKrj7wG",
  "key27": "65NR4Spx3sSFmvWH7sRKvo9t2LQw7yB1bMJSctcEhg8vanEFSuW6xXubJkFtieA4T1CEhWo5RZGpG82WfTmnfGCe",
  "key28": "471NqWCbefDTzVYp7Q2nReNwWSFzxyyjfGtzcAvMnC1GtGGBARUTvfwrDf4xJZXMxgPzSTA9Vs9yzHEYw7j4tLeM",
  "key29": "39RaDvHZGPRE8ohACBD1pziwKvHaEanpZ25FAeWQruPYZkB5n1tkRTQiXaqJXogo5NHvhKwmkzACsNPoQ3kaMC6h",
  "key30": "3MoqyQERYbBC7kvYuQ9uMHhdYqZQoYEpF4iHEcHRtiXeZTGd9TM6pgpbSq35FfASVgk1SiHhNy9sksFboTDZdrWi",
  "key31": "5K1LTZz3WeHb2u2rTfKjC12RjKMfxqUUFXEJ1VXmtyHjn2bC8rN4QJaKRVZgTx2ZooD6a8oznCF8k6XosRgYfwED",
  "key32": "32fteKrkrz65rw27XRhXBU7Ld8CHLocJBMR5fPLWn5hkbFGCEbo8CZWNLFiTFyJDcLUZFd8jk2HA4BDyxoJq4orv",
  "key33": "3K491EvmYvMs47Yx1wdvACpCp7GUwa7akWR3mG1UR4G6zSo5ZvHjm5HctwStjLkyXGRrGQ2q5pyexhbLVZAMxKSa",
  "key34": "2YvgQPtwr8wNRfxefHTMoYqhFQVNs2TjFMwMhR7RuDhXxpZiCWmFK1vMAj7tKVUNhSxQZKwcyr6WGnqMMJmujb5Z",
  "key35": "4QTk8ejcVp5pwMeX8k8aNGbJtLoebbL9iFGTkiisemkPVQEDic64oXJEtz9oBsGYzgH7EaBFq743tduSZLVVoKik",
  "key36": "5smKwdA3GTRML7UztiMWHYjEkkQQukrBxNnUNaFiGx28jNDmRZV3KKtjbiaQvpyvrCqosbaqLajfM1oUnzQe5vr6",
  "key37": "5yrcvPSLbYRJy9yYdwu1WY361LQRZjBz5jsNvphXMmei4D1dqgXjuz41Bfm7MBpxfmUwHZMYCz3vrpNWCYiW5E5f",
  "key38": "5ZjUoWbpGw4ULVQFtsyWXB5hsZZ29RnwwwctRmdkS5SrB5DwGLrHKGaj9Dy1LU8z55G9VV6omWsyuZaea5BZ2Yog",
  "key39": "Y7WLXPADqCXyVFwrjfpbqAoww9hC4aq9PSWvNnLuhP7mg8BZJRNY3jrLYaqUNyTW9gNJGux2ADCByc6M4YSohCL",
  "key40": "5oZnEKErWN6oUU9gpMaxk3e6bVRTo9GCfW5uUkvyd6z3sAPdX5oRqZhStjh7NHRoUhAZe9pRckDtsD86DjXAiQM",
  "key41": "e2ehPkefHggsGqUPXDwZqkNkBkNhwigh5KzYYU6D5LdwZe8nxyKHAZm6nPbQTeQNz9uUzGita5fr3THo7w3knmB",
  "key42": "3kvFruGq3DA36rP9DHHeTttZYuZnqG46TDPko5VnZpkJXaLqcPokxwW2oFLR74sNAYNu5VYvzgLjWGYQD6Ass79i",
  "key43": "3tjRe2yuyxLG5Ys1pMicAeXevWsmCz4TkCaQ2R6wBpnm9bzKBQmqM5WNrdgGrnapZeHMxTeqvJYiMaYpKNL51mSo"
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
