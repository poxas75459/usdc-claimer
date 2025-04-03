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
    "iTupgia1LWDuMRLWLupKjkHDcYHNYT3Y6RkY6k29wcA1RXRcbC1MJvRBs3cJgViryxXPfSyDMYYqajqe5ThiAdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pcbtFTJxGrhEjmzV25GyQm1myeBkevYYERX5ib2qionBKYLbCQsK86cKsp4Ldf9Nm5jvKE73LqZ9wB1bUHtArex",
  "key1": "3EykbMQsYaDnz2mRRSD9in5YSWUjjJ3U7VxNxBStvtP7BfmgN96FkNXBNTWahTBWisR8t8oWvW8rbxi64E1VQ1LJ",
  "key2": "4nWPTd9ajLR2YCHs7v5v419a99cCzN8kUNnsSYQyVrE4x4D218yrjuoJmxMFkZDMcwS7PpduSHjFL5nneUj9pC4V",
  "key3": "2DAC7cV3MeABsGzi3hdRUD7ssG7VhrkecmDkbAAw7rKi5ReuVNaRPehNRqfhttU5FWPitzaZmrTmjAtdvQZeepWn",
  "key4": "2ueijn5RiouvsBAd9P64QMLoozQB5LoFoTmyfikyqFgkL242FFCbM2QqBrNzUtDtBwpcf3TYJDM2mGLkuxgvzHHr",
  "key5": "KAwj8QVJAb3xumo14SyCEXgT8nwan6LXc8tDnb9k6aMhxJoT7pTAF3nbmNQYJNKVvLcE8pSZhEr3F4WLzFkkfFJ",
  "key6": "55gm9r8QK6Z59E2UWmU8H5ozCNEperWuek1kdfts1FKLNYr6TgoFoJAyJrmiDqkecQGVAEjQcfyAHsDcm6ML14Xn",
  "key7": "2G7S1nNw589pNK74UEadWAnq5nsyYGqr7p1iGQYgMFhCfqmADTFMSaPduUN2WNdZkBe8DrsSRnusDSncWwxo4C7Y",
  "key8": "32aaGhbu3S2eTi5z1BtNtFygecttccj4zqjt4GnbXh76KFxnuRfycZtMvb3tERKcwoKH9mJhxcMANunsa3arfZXe",
  "key9": "2AuZXLGYFvy2DBPQJfFcCSQA3FfT33MTAbCUsf6PvsSWyXyekB7i55XaMHPDxxFG17ok1K6868XX786kQ3CjLBAc",
  "key10": "GbuDWMMSkXuRy4d4dDX3tsH2CwToismKS1GjJs2kbh37DSFKUiBxZgFtZMof1HX3NhE1tb1ABMr8yar2pKkjvEJ",
  "key11": "rvEGURvXDWg96rgGQJaWSX2B9GaCbWY3QeJq6TPZZ4Ej85h5a5kwq4bcSwmUiJeSTgX5K9BVuWM2M1zwSNvV6H1",
  "key12": "5bspeV5JJoSg9gcLx2dMEbAmRmkZv8MLhVQGQ5CuJgjxW9BHeaPfRLbzxGtCoJSj4GrWwGaY5xrWyD3Krq8rBjuL",
  "key13": "5yzs5n7JoRDBTKAcWzhoLKmEeqGDFdBARP5tMEF97K7ot5VHeEM8sABKtXhPAZZ3oKzzgX19sgqhtaE2cLHjPwf8",
  "key14": "Tsd78JHvFfGxYPRaZFxB26Lp52DV66wC944z2EDtGDLgfeDPCppXSdJCJDk6hsaJRFCWqgan5SZX1VYrm8hTQH9",
  "key15": "QCh6YC4vSFkUyiLxSpv8iSP3TMEbJHkBy5t6DNUt5oKfTcUNgzAtWfsQRzTavPK8w8SF991eXayv5iyAoiyJyJd",
  "key16": "eDAa4cf3U78pwfpcGYuBSKsZHatP8YrZNeaSJ8p4qNmbM6PjGdLsU4yAaAbAmHFaAYBhtyGWNRQxxzABNehG5pF",
  "key17": "2pPaRmFDiB5HtpDKRRuNSVuq6v65kTKKh1VHv3s9HAhzVfoKKzsvXNhZWM5hLX6WeCAno6yFUdLpUkvYrCBLm3o3",
  "key18": "3mGXbjbqg9ZgVo7yZv32uQfNhTfApnS2u8SvxXDEYAzmmZ9JZuaT44trvo4hp5SdbTFGkuAgkqDpHn4LJq7FZiw3",
  "key19": "4FtJL2x5BgJjhJkQ5rQHiyMsLjKhrJgye2mXfz5M7EcmsbiNhCK3tRs2wUzgVotZmR14ni1Eej72m4Dhh8ueeNUz",
  "key20": "4iUx4uZXvykGrp1ZweCNWUrPspaACmQEdcfd6xxB1ixQ3QEosHJqYLZZQ5ZCYSLDzJPWa9PXTuUjDFJkUCTY2dTP",
  "key21": "3jVHpReZpATanTW2W59R5ehAMWmG42hQtYX5j7EzffPkFkYV2Fxy7JLPB1z559LdpMEuEeaW8Jh7p78WnHpR16xy",
  "key22": "5B1gDSGs4tupritFfsrKL553L7PoJtyhGQ61T5wyedYdZmMMQS9PDz2oFvxAupcuCzi97cqH96bMQywHreTLwnnd",
  "key23": "7cUhKGVBGz8upHUMd4SHZfz26DkVhwbifQEFTRAY74JiodtMWkeyB9ymFdEqVrbc17hgGyfrVHczPdhUdZZFjQm",
  "key24": "2NKRHMT8FTXdNLhKTgoJELuL1CoRC1D5Civkaqo3yLkcU4i1bZ2AgRj57eHEtjqhW5vPvX4JkA88c1MY6Ju7bvLF",
  "key25": "4dD2Hsi2GrWG3K2LnrHYADkfhzZakYL1XJhnDQ8eD37DsJTMUvyFYELvtwzzL6MjAKuQJU49tdtH5hmKFXt2AdLd",
  "key26": "5aohkwFjDHUob1zuhKPtaQgG4XwHAMwRrrACzPdbNw7qk2f2LEacY4iHMXkoftpoCTkCSo3jvdNCwvx58Y9XPT8P",
  "key27": "S6fb9Yj3PQLAMrAWtF1Kt2Ts7N8sX5JF2vKXkN4sb8uuSUQGEhmEHQv5rAVjsvkgKXDqbiEwb8GrS7bf7Wk2QNX",
  "key28": "3JwExJVeDcouJ2VnYX2hG9PGkCd8R3G4ouaC82CqbU2B9QLTr43is2pxKP2h4dtRjMa6MSJkfjdMoJ7BkTP8gUfc",
  "key29": "XF3vQJpFh2NQeXsTav3YMmbFgGnNFzzirZkhdtpKHiNV45svXVaLbChn5kqse7YwDEMTMUrVNCctktC7U7oZVMz",
  "key30": "25bCqzqRNdnb5LNhsHPrdezC6UnQww9EJP4N4Z8E5TyCr2GwhnCYn3BBv3ZiS8xZq5jeANf3QkX5ycXbsGhz6to7",
  "key31": "38Dt3mdxv6mWxEm2AhyULAbVQMWoBm2t8Z7k7rPt3HRvmJBZvvvQmPTH4YCmDS98xiudREz7SjPK5oui6GDnpsPH",
  "key32": "2aAHY3Dx1wmUoBVghRxD1yDmQS4cxnHjYfkCfWJRed5WKTrz4Zgq3ZbRauvUESH35kpyAFR5gWj3TVjMtB89UdSN",
  "key33": "2mLQukp75rqRwXx3VWgyExWp5LBo8PgQo1gbeerZL9TYdyGKXLHbquNPNCUEUsgzRzqPDfTVh5HAw2vjUchYZh4j",
  "key34": "3QHNyUwdvd93pY4qHTbcaXrfVatFceUwKwfBjukKn6niB5zLkr1Jhnm4Cx19cbgAnp3qywZ24Ygdm8HnfVrPAYML"
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
