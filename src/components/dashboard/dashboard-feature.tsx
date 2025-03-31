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
    "3dQa6QgweXgme2R6bByvNXwEAprDpRFdjNVKCuj1AVu5ogYbD3zvbcscFJmJ4ZB66ggYVU1dmtgGNHUjgNR2ArYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B2euooqJtajXhCUk5UD7JzY1EH2x7QMKVw3vY4p8uDd8vcd93T7wi1LN8nL76FqzdPYKNAXA8QvPM5ZeLWyCA5w",
  "key1": "51XPRV4iBEWrACvDtZT9TQPHyaetfhJXjJpuJFeuaztwFsagiuatXcaXBDFZfwzGRRDQNqAozDu2sr73uBT9pDgp",
  "key2": "4LmWhHm7SWqXtBRH7wYrQg293Kih9BF8BpehvVptaKRkFrJNHfwTHRrVsWphRSTS86WBaL2apZBpc1KrK4mTXpc6",
  "key3": "6iHyEjieqKx5w5AcPGzWp9TJLHfh7SUs6TKhFY2rnhdmn3LzyxQFEpKeWimMr49vaiiLvU9Lk5deVnzeWSrcdzJ",
  "key4": "5893o3T6FG8YUJSVAv25nNSi3GGY9XP7CtqoN1Am8d35Vd2m37GZf3rUMykwtvff8UfAFZuFtGMVQCxfCZwWj1u2",
  "key5": "2SaMaxbYo9bZT1mrhk5MWDTdPgsxGxdTGeiQek33bTUKqBZcTmuSSgNbid5xCXVpwvDnco9W3sPiEVaK5Q893g1p",
  "key6": "3jS8b3nxvHW345WMZTs5EzpcJX5zSt9qVKX4oJ6ToU6SqGQPQfAJeYULcMiiGwoJPspCqZnbpRhipEQ5MXTgNMYT",
  "key7": "28h9ionYv83M4PQh92QtWa7B9viQTKCBw7M22C3Xc2QY1zbmEiS95T5cG4pyBzmXdxYU6AAuxKzPyzoYorLgCcZo",
  "key8": "23c3pmdtrrPuU6Dxa6Aeo2f2JoY6gUkckdwCZDwpBEsXxqaePNbmWTdEiQm7EYzrJf9HMwW76yTtp3NAkt6bxcJb",
  "key9": "3MBXTWBb35adNjtv6AXaHHbmHo5npq8MueMbfR1R2uug7V3PDjNNQhtmS5JM4HSmfCjCY6C966CBcXBp9qA7SRhK",
  "key10": "2TFtdfA3CmR8REvEoWDybumy4pPkZP2jWd3dK1N8HV5K8BFJecEfg1ue4Uxxi4PPU783J9M72dmCpxR7A9Wt2UdR",
  "key11": "5TsY8DWCLnJLbDMkkZBEVoWJua8Xc5hHLfZuExqpjs8F2q6qT7fhP3DWATdqHbSpq2NG9NiD9HTqDRA7MZrtZgci",
  "key12": "3ysy39n6GYGw4Co6mvrjVjXLD9KcU8XwpxD359L3tER2QMQTDdYYfJLc5SsijFzRhZT33vhkLpst9ua4cajMq2rr",
  "key13": "4wmvyLgXSfVet4iBzobuV4tZhjTir6qW4y6uYXxCq21TMEdXYvzsx9nf628KrM1pNjtMx2JiZpRymkvC5wYQfKy4",
  "key14": "57sNtomhRcEQ27umQmpPf4TjzvEw38YhmMMENgqs8EEZtsm7D9CGszfGMWhzPipo36tVyGVbgjcnXZN9rowJQjTR",
  "key15": "63AVJuyFH4ztAhLuFsjAmCKTwBGjY4B5U2TcfYWwpMrMK2Urrm64jTf1EWCsBZaDg2C7ZLk2E5c6595v2Ruh7rym",
  "key16": "4zn1s1ARSrfgtw6ixi4dnZxVydnMeFuakQsGgL8PJkqz2Zg3iqP6iQqgUU5cFzTji5U4FX1k22UdQ8KPms5jhvg1",
  "key17": "55bg5kHn2MtDBX39h4Le8T3MX5TwD5VypdgxMRaffKfFDrrEQGYLy8knB23juxZgDsueDvmfjpt2xfaCD7DtjCD3",
  "key18": "55eikoJeobtduYAkj1UBB1ZTsv8c9P5TMZSBFifoJVn3kjJqahdQCGd5HhQJSKU69vBivWJzb9tWWVnh9tmTV24E",
  "key19": "3gEDNokDU25j6sK621EaZ6w4vwtDoWvX55XMWLHnDqDddHoJZixbuZW7eHrn1rTUb57dp9NfGZFPRGLk5C7Wxuh4",
  "key20": "5nJTzYETL9EehumS36ZhiybTg8tsPuh2Sf5uCpb6NgucpdmLjZ6uWPkJpfVa2yZ4xiv62Td36sZTXMbvXeWb8aVv",
  "key21": "2d3d9pkRsUkaUcd7qUY8QdbDFC45mp1hKVqzpfbuL91ZT3MDi4vMUbQdFrXDSWZAH3cAKvLG6y8ww8Li7aqY1QG8",
  "key22": "2hQMtdTfg5FyrvuXANjrQzLJqiCyeDeaMU3sN2yULpbkaT6aPtscD3jbgftoTQuZ77sZDGti9U6sPK5zWfctFJDE",
  "key23": "4f6LvTMDGFyd9RegUyS5RK3TDtFZPmAGPgf6HpMRAaftZHxsXAPCfpTaeb6wd4qTkyhPS68jsuTJuvCFDMMxMfyx",
  "key24": "ukFPN8s2cqGUmMvMtnBuvhrH6Fx1syMamhVdtwMnhHX4jaoxdfMWiUuc42hn3WAycWxvoaPpR2Qo9N5stUe69FY",
  "key25": "4L3LwDSYe6YeVKvxj6qDtcAJtPh9f2ouP7Ga7CiKod6n9dt4YKK4n64ciRoKtVoaDkTU9rVVJBQLbYHcqwqjUKzk",
  "key26": "d6Ax9q9Cp768KiEUbBC8ts4isXvcHDE4VNwa5fguN59sYNRncH9zUTU5NiZ5vvRoSKzAFFCas8DHwWF7dDMLQjf",
  "key27": "4r8VSg4rJ8xZchw1DAWCx2RNRq8fgubYiM66JRF6dkXZFTGRa4DEfk1m5D2VuRUarTQNxzyb8EdAYcQ1rSh1zgc4",
  "key28": "43BUc7s5h4EyYyb8RYMWo2H4NQcuZeRUEkwcYUx5QbRFTAeMUhUP7mAHbsMUWu4wEYcaqcuTU1LJac6GeQ7oZ84m",
  "key29": "63iZWNQ9W85qq6sKwnktAmk6DUsmCQLCMMxqAFmAjBRUSj1xp6EsZFJSvE63TtkvT8owGrspHPtuUHm6kxFudQ47",
  "key30": "UDCFwcZRqaDVAmwCDg1xakSp7YhH4imSgEQDg7PCuWqcWMGJoa93gbg8cqWt1NwZ1szQAbjFPshhA96JJw3f9Yy",
  "key31": "2U8ceqQgsWPiMum9hck8oBRGpiGks6eM6kdvqzokAoVU9wPeEFn5K3981dkFhHQZX3QE1DLZ69iTH4EjpFE9fTiY",
  "key32": "3AVNuYgPKZZiVtNH5rion97PHYN8NV3XiNVcVsvqWmgQ6fiaVDd13GTnrGKMkXovvNNDJZEqcZbEbzv4CSqJ9hk",
  "key33": "5suGLDRySf5iYLeZvmMKa8jNgX2eBMA3koXGUuJexE5dxfAh4C9LcFLbgAY3WnQD24z4Hcjjo4SpD6ZmLP65qhhU",
  "key34": "2ShLdH8ap8BWTV45JbJicfaVvb1p7KP6DadAGZVXZyMNMxZvVW6imioAm84UM3pDL9BfFZKs1kmtpdNfmZzMDxeX",
  "key35": "en88fCMk5tsa99JwEZFDf91JRGyDogc5G9xsZfZDfwbx1xLn9uBQhkgoPJ4FfgD29bR1yvF2x9e2koUk1TwRuCK",
  "key36": "2BRLrPRodREwxZo4obKPKTG1nJVDrbVti62KUK2Lqrs548B5eqMCjaXzm1e3aqU5ic9FTLM7gh3yb8s9gZmiVJCA",
  "key37": "49DaEHeUtEk8ibJLNR355DH6xSgMp4KZhaQp2nSdRQrN95BBejxa2XVpNuD1uk9tWrNhqTscZ3qy1kvYc6VJF6q2",
  "key38": "PissX6YVahLbEMqUfMSk8Z3rFnEy9dNai23hcbveUktWfkChwYw1RAHVS9v5uUFmXAjdswWHGRFWi2boJniASQ2"
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
