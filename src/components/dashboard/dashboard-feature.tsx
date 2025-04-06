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
    "5zVuKPH3n3sPYxPsmuUSHxgzkFMDgaC2RHAEmv9gxZKnEDD8Pu7Wh7qfpBxxQ4wti8HPLikPGuKFxBgsfcdcgpEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fcPXjX4dadXbXQaLxR6dwgAwY3KuE4wxwekvonnJoUMA8RtY8w4ywUQnLKoPAFDqpEoRXf6Pb6Lfpj6erZWfzFk",
  "key1": "4xiHdWvMgx3qhnUuovUcnAh6AXpHHT32EE2dREAFqLNvPbNthYRmr3XHkaQ4pR9pkfd7XuAT3onMu3HApRgDUR3c",
  "key2": "boDkwMf8dBhz371iXZeLbww9r5GRxt9gYRbhkK8DRDP5wMzoypAExbguTSJRcMG1rdDV9MrBD2tTHZkXAS5xg8q",
  "key3": "gxMUzT6cVxXHHpWhcBhqZLR4FTVWfDEdaeSMdeoHSTTRrLXeQ9cMjmwgFNhsdPajFJoxrtUKXofVU9QLNrMzJrt",
  "key4": "5eRBuVnq8J8k34SJ8JUwxK19C3VQjoKNqj6xTEQENUfhRQXMLJWBqcGZ1BnF9RJAvnk9AqJ8f8XkZGvQN3N56Mir",
  "key5": "3BboDXsuYGv2YimnujrUJexKjq1j4Ge8WkCuG1FZZtRoo2KXYdbkKUYyjgsppqEGeWwB8XViEQtiMn9YzgBRMwgx",
  "key6": "469oMiFYAf7uSpy7zdf8sppJCwV2S9MFE761K5SWe7jLmKcjMowDfnwCGTxEP2WKbC4d3itqbjneoSuVUwzdXrBu",
  "key7": "3suzDeJ13GFWYRcxK5SGq5h3Z98LtbfenTXQgTWAkNrSzdSAhL29ThFvdzf6najpagsvDmGfcnXLMwTBK6TB3B2s",
  "key8": "518j57ebwdFWnZybtQ8r9uhgKgJLwUy79bmZegyBGM6aHWBNH4E1vPrPEwxbbSurZa3vziR6ppsZLnQSvi8Vp1us",
  "key9": "5xWRszbzQAf2XJ8k9Ei9t88rqtZkefnvwMrN2fJFxnM2r5Qu1n6GXWKdz4v3rCDYsxrE1Tp1gqoPQfsf7pAYjb1y",
  "key10": "4ue7dgvzpW4Rh8EGFydB78L14YC41KWG9FSHQwcEXdaRnFWDCTkfcjknzb6gRA4v3isC7vfVyCHboNuJA1pAoogp",
  "key11": "2JeY2n1WWB8RiUMgKoMNHKouRfueTrtBnxMTQrgUgTBrHjYKR7ePWXTtVmVQQAwSDfPxSiAokVBh7SofqnTFeUsL",
  "key12": "3WBnGW7We1x5vyaf6Qo7RQmvo8BMtBUxDHmdP4P5K9d3SPQ7BGpEAFJYKhZGYHKTA4S5eYZKFqFwZvA9J2AU8vY8",
  "key13": "2iddfnDRgcoFpkdeF4V2Rv1qTmerGhMFmKX5qwS1Xy87stVj67Rus4LQgSoobrE2XWWC9NNctr2jZzxC6UxY1qvD",
  "key14": "3KaboGa4HpEW4RUNMAmCnDShCBZDpA7iF8nRthDvVdDttN5MD85EHpRG3SSnuAPcuBaH9v1qsojx24mqvgvWCgsD",
  "key15": "YcJ7rKfEjAZM6JNeukjfYuFspRJhAremxWbP3o6KSMQq9md2Behq4mVVhx2ZnTmJJmKaXgaC1ZUsDRdPBSq7hQ4",
  "key16": "45zg8f31ouV5sPU9Fzh1PPMDaViWcPR66YbPxPxB5CF8ZQWCrtKhEbtux8Ntqgx4v3wDYij6VKJyk94neSy73G8K",
  "key17": "34jHGqpkipdqdCL1S3Z4oNKC8FKQ1G3UJARenZjwJhvLmAGp9ELSR5Ynn7ST7M6uw8nZqFY3yxwo4qUs2NZyfeTr",
  "key18": "3QktQZ6JuunsHWHgktVNtYXvZpB3PZFdUhkxG5MvRfA4DgwBhkpfXaXwQgUH9go3HPK7o46fZt1Kyi1tiDshJ8iF",
  "key19": "29Md3GN4RcGYzuyTCHLz8sMSXYvSiyDpuLicH7eTwPabnjE6CtTL7pw3DnyGe2TA8KKWPNrTaFv1saqNurwFrHmp",
  "key20": "3hLpv2ovhZR7HUtsVYKipmqp63kMxCLbQj5Ds7v4T3tn1UnE9wuZAASTurt2xhBndkcRWgvueJFsUA3g6XDZ5VuX",
  "key21": "2yFeWJpi2oDYgTrZJLEbEa7kJCa8TqeZJQhMrCuyGY8MhVUExPhDCUm1XKscb9Mcp9ABP8pL8L1b8uP6Bo9LNgLi",
  "key22": "3KEWHYbT8DqetdpATGBfzPLMLoWqV8aK1KAtMUzFxyiEePD3nhrUScUFPra9mx5FwDrf1vERyLv58Ao7YV2gjiuG",
  "key23": "677u8BxwbkvVtCUfu7FjGtPK3fLUCJttSPXfrC1p2vn8RDZH3xUudt8pomPE9YjeH33KnzgJuNHizKtVqW8nFFpR",
  "key24": "5Wpf7bDLNiWB6fxxmSWftLmb2Aqx9WotMFkVBTd5pE3F4Xz5qakvpTXv49RyapwoU5h2M7dqn6B6M2mVSdS9TT4u",
  "key25": "533YC3NuQ5BooGXj4zpwNFdHaemjWYUQKZSQmXtBRkT41wW7z6ropbUTf4wZVZYAwEoR3QH7iv3P7uv43ideDRdP",
  "key26": "dSqZ83YqtvnL6c8aW4S3eDCcVC5CUt58KZdzexSxGRsWH9KhDUfjYnebm8bMfKzenHFWJuzwspjKXUBaCSmWJmd",
  "key27": "3ZQP9c2wZfVgdXQmT5Ng1Rt6QJ7KXr28Jf1ifonuWjeEJMTYMe5xkjagsMcCb8Bshqh7Xop3xXmbEqU8zzpnREAw",
  "key28": "5on3EGVLKofGrHmpFP4gDAi5ahAJfH2LKCNJLBnptfQovbvBE4bdmGbcDfcEhvp4hf8EdryLzhQxkLpey5hj8c5Z",
  "key29": "4n5NachFjmE5XPAc1Cd2jvKh8ehJYHPFY15E5XirNYfkmWhRJc7nXN3L7TAUyjiQPEq8v1x7w3ykimbdMud4Q5yq",
  "key30": "c57omKcfHMrTFivBknF4cwYDh9UGw7SsuQUz8XR6xD9knmJAc6v9yzeQoqhgEAokrxFhC75h774kr4Kd4tuSZyW",
  "key31": "2AKxkZ1VfPCCz9Jdv6oBBQmHMWZsnznXsxekzUQRKxj3cx6vMGjh3BRLd7PvUS5BpVe882xSCaNo4bGRkLDzgFuW",
  "key32": "4CzZL5hxxjNJzrAxWc2CuD4Ytg2M7cDmERM5pwA4oX8tjSdJKLm72j2GMo6mwG2whkbjzUPyaLfQ2T8dx2YCg8GG",
  "key33": "3vw7uFwcfnfa6tAjg9TwpFGGQ6mZv4PTFkxe1cnU3VexWXJUtajVS1xnMpDCvYZ6zkjtCwWXCe12PfqghNgryKCa",
  "key34": "SeAPVskiMKyy5Ng1GUGSnLgk7LXFhA2p2PpLVVBCYQ2jCvh57Ht61QcuFJ4esrGtogtiRVD3KHWcSLVQ3UXkUR2",
  "key35": "59yhAGraFaEmYYUYi2vM42UMFhQuTaSFgzpP8rVaRKw9W6zQ6osTUMd1XUZseLodN2LtPUhzfSgbs4j9d9kC8Rp2",
  "key36": "4hEU6ZH7BN1xQwB768ma42Sp5Fwf1HECayZRLBWQsb3xQNqqvVkHtprivn9qhcmAxq61DGhxLqyjttQmLue2gqqx",
  "key37": "yp32cbvHc2RFxtKxNJYoCCh9GJ3Q9hXKaTuWgc8QSnsRZzGo5xeRz5qToC1v19bjRMDB6dHvjE2NmY15tfVeH2L"
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
