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
    "2HZsUAqrCZUfK8N82VtPmLYQshdMpCZnxdSyXcqXS4i7ihm5pzPRUP81tNSxnkuE2fZXcV15S2f5Lk8SsmEcgWHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zQD9uJmc8C29gW8biLaDo6jse8EcGrBbJoHFyiQmBTVWWS5uV5HniXTo2vFe8AZKPPNw7sEZWuXGpVSEdgGs4CC",
  "key1": "utMFCmqtMhrWg8Nun2Ri7rNMGZDYrbSVPTmeWTqatWm6Zp2s8emDh14QBVjMaTf79GJA6hsmTyQ3buadFTDPCBw",
  "key2": "4FW6UYYwUaxFY6dQykVt9X8gZQSsiTiuY7r5c3uf2916r6PS7YKCv9QHDRLyJaan8mSWjxZHZuvgFpgaZiWKiHVU",
  "key3": "XSoMcF5rQ15qFr1mhEG3Fjr8YqwJGfqcHQASaEUZKYUgaYKtSqc1Fx3Lc23k3wUgXy4JnNGDdyexQivnGCDte8u",
  "key4": "61hthwnCxWJ6qFYxPjLi3AWQ5Z5ryYhVVCsdbatNKapHt4fivGz1beuc5zrUMzs8yW1GU47mvzuFGtbT78eAR8NJ",
  "key5": "3UCbjR3MEYFDcoy5Be17k7nC8NRmdJ3ZBm6gsqCYBB48aSYRYFd9ASTStMkRNYi49hrg7UQ42gMwfbZ7anU5WXLF",
  "key6": "4nSrv6eg3rxi32X57N8tb95vjDMFLJLPshinwWWcmyNDxt55dfaeqLi8mFwsxGc3MjMVoDXpam8SW4DVaMcuFMiF",
  "key7": "4mEG9LbJ2k8Sfz8GHangmfaNhSZbhwAUGndGViyvpa5m2M64ddjW4CTSVL41SjZfp9V1FCXL9hH3RDVnKwjN9s6i",
  "key8": "2Kuxs8yPYjbT7ZhmrGm9HPpZEfyT7H71bxPYrYLiTas1gMruBjHDnsBjAUFgfoDCAuz9a9PbJRsUdbWfSU3KD7dF",
  "key9": "3MN4qgHn5d9hWvXArRp5ueUFZ92eDRH2mCw6aJZv1L7PaMqXoACW2aXjhwyxdZSiE5iCPcBRHKAba5fZ8YA5tRW6",
  "key10": "2RdD4FYFxdWtoFU9eEy7X4Y6zyJ2A9RYEYubHkUv3gQfJi2vPAttB2zNANNjsRVxLBgKXXcaFuwK4iBZ6dYcR7X9",
  "key11": "2btnDjTr4riBw7UGujhGLp8m9YuszuURu2BBWiNWSEAt2CVcJrRtixVCeLrsUrZRYvHsX5rgBvZW9BVkrk4rHYUu",
  "key12": "3vT2vkoDfQgFtEu2BAzcYjY7N26fmwq3wu6WAzcXCAFs8ZjMWGkf77Lmy9VEPRKNxGDdb6mSPscYf3Wkhx2XCMYE",
  "key13": "EtzZQzwWGuouyoGAymaSguYHbdQieKkg3jqejUbFJzBA6b8vRCi87hzEYfBkd2Fp7ftzX3woV3jc4uyuCbVBQxL",
  "key14": "4X2G7N6X1HfFhiupdrG9C7xabLjXadmnLivjoR7bTGKzzegs3sfYoRMD2LF9PErEdJe41sSCZTg1asu3ifzs7dZg",
  "key15": "71KP7m2nD3PDnuLL4YDTgsWaM7E4gkJBZgdMod8RT5AXuVawxZkjgpzxdgoGPW9ymXVkwoBUdUvXwe2WFVnbbz6",
  "key16": "MP6H6dP9kNBC4mSaHYTmWE8xaqTznaJJDphwL7avCReurFqBA11WZRvZRKi84rrg95zx16aAcCCtkBEnS1aUDem",
  "key17": "22C4Aw5AaCHsZzQdeg4NAhqEATVCPgJMmynA2bFn6ENZeoNaZyHmfet7dJJGD3e9shxsD3WnZrpCadEJDCVv4fFQ",
  "key18": "TQAW7YzDXA47Ea4ejpjT56UzZ7KPNnMN9WbfQJULxo2XaBAqPbWrhn4HYzVvEqXjhxG7J5PwvjFGGxgT3RDkyos",
  "key19": "5sV1TyGpy9LZ2NVKYrzu6AUFxN8ra82fpnQb96GzFnwAQT4Jd6cpjSPQbpDCNriao2a5FTn5AqZtFDUUSq11oyqv",
  "key20": "61Be8GDVXYu9B3EbX2npPLAZbG3L319ybNtJUnNpByrT56DNurWk3tPBMy59Xra8xfBGZdhXbYbiFZCNzCTDM8wi",
  "key21": "5DAqoL2BTBXyUAJUWR5JVdUf64t1FZAeTHkRVd71PXG8sqajU7b2EmUD351hdBo4gpk988yNQeXNzAmYtrezQXko",
  "key22": "3bNfK1WGJ9QZyHLZqcswnBRqoivNHJM1iXhNmYsafGeA11vXMZ3UUPYmEYB5iBTRGDC9bcMqNFE5Qa4Kghe3sFBs",
  "key23": "3ZwxS5GrHjHCxRy6gLafj74EXHoh8awG5iihwdF4uPaD5Wo21ERPkw338qC2MSZWvccAvzQZmxFTnzAMan8w4ubr",
  "key24": "3jq5E7sq19MNg36uC8qgX8m19V577qRtW998J8bRXfFPmW9sZLNw3UmZkLcxkViX8GJK3jyoXtUttPjxdkfDNFX5",
  "key25": "59avH3XUrsGb2JdQqew5gY5Jn5kmQX2zPergYR6erXHoVXUnSqd4Ts6rLzwTxAkQdaYALXCegehkxBHWtNceCKtt",
  "key26": "4V5D1hyT17HH2S6AK9wJmEiha3tYisgvWo7S3LT7Ts7EXzXU1TpUYePPAHyfnPTyZ7f4FnVgc6EZgkR3kw1Zg3HV",
  "key27": "3pTV1NQgGhqtZ4hZNsNUEFcZRbmAWfnJMA7cbfdns62XvDk45DeNVPortARF7TMM9TGUjUtxKb2h2WSUvBxMt2RU",
  "key28": "UDZFh2CVS8GmVj1Ur6vDQvQF2dfH1vFA1vWdnfkF6P3EMJmfNvsfx5rFSDhakn2nELu2JCULc9vRLWAMoBQYdsN",
  "key29": "5n5jYj6A6ucD5FVQNTdfeL5bWevZ82nR676iVsJQXnLNtNAiNepowAPMFpVZ7eKQg5LhniLuE62X5v938oxxbsK",
  "key30": "5zyR4PsmoaHAQnv3TWRS3PkurDRApv2o9QaJ8qjqunQ25QmieEfFsGFpLcbxMB19xz24xbHpf7TgfRVaRYmrhAfz",
  "key31": "65Yb6qiKk6cijHf6TcfVEecKdNXHnEAhKeroaye7n6ex1kPJWbNtc9qXdbPYCfhL86sFJHXwLAopTTHHywrw7J2y",
  "key32": "3oGJi4EZaXz6GzvXfii6E6e8hB7vQQm8xVaq14h3gBgyuiuUaboT8H6oBDZrThkK7MYDfDVo4trESs16KHvPQUee"
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
