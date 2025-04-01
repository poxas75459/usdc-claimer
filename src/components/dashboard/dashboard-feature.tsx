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
    "39KDVyDHXaGWbLgrd6jtJwo68dWxw8dCCpZLxUS6vKw6eKg9eyQ2ao8Kn2LZP3JQdBADwJ6hk1v96P8NFxutcXzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y5TURhXCDmppYfbmbGKqZD2sVt93vqCK6DD63U8J4a4zcTJJQFUKXnyKhonesQMdcvA596arBK4EMaEt15PNEiH",
  "key1": "3htUgqTxhf5uaYNb2Lvd2yw8xTe9yf6ZmZgUFqSte3bK8R6CTwZEEpz9nqMzSR2VkZpYr1pcfRydegx7r6zMD7Qe",
  "key2": "26hXzhUZsFwAGSNRREjcGAdZYjfctHDGVrdo9oNRFpewHs3Pu6ScLyZf9oMFSC3NrdaR2wQEJAiez6pJbGju4Lga",
  "key3": "4oYcoJ4dGF5BDUZ9wvT76EjbDsC2VtsZR1rruW5yxadjU7Qv7DsjtRRjMo93i3Ce351FKcgEt2Mow5gibZSQ5xKb",
  "key4": "37n7rUx2fTobp2K4HGm1GnAU6PSiAi98aHKg6fNXGSnQWtUJaxsuWdaXuYHFaWWy34pGRrZPgadXyuCd3irDMqjS",
  "key5": "3Y4pnXtjfvZ5JDJsyHUi9ND5kdVSZXeruNo5hBN9HB37UcK86DfCs2NRFNjcj7iVY3ftgSMMiC969nWdt7z9nbfP",
  "key6": "3bueg6FQETkmDBj7jfxHL2fF1vBnoC3Goz1ynF2M4x2sY9vGvpvyhSxkVHSe1DCS3uMmbKwMKnhmro8p4vvLeDyC",
  "key7": "3MmF1JTRx1D2wEQJZiCv5N82oWYKzJAk3BStqimtqGc5qdg2xCwb2rupLgwCF7FfaEuEjMXh6DieW1gjdY9GERGk",
  "key8": "2z6wAVBErmitnPArZzyhgoFppR2iZBUedJEXhoYLLq6mSkpj8EFBG5PJRmDaoHeAe5S2Lweec7H75M3QL7pFRGke",
  "key9": "5ASzJNJH5PTDr6dXeu8KUif9kfcNHCGp67zqB6ZrhegeDjrANVUx99z8v1Pz1ZTeqXjjrQ4SWzEcZFgm5szYmZJj",
  "key10": "3DQXkd9WCZ1bjNUwgUZAHiXEzY9BQM4MsA8RLtso9q3pp4dQmHPChG7RYzfD8Dkbtos7HJGQVweExiEZRrtie1oF",
  "key11": "2XoqxemZjwwpdvAbEBaWxz9pVNPtC1eT3B1AuHjJUtvvQVNeBxE7qoug2HFSWWihyjrw6KdDRNfPWbtbyhpTKMvR",
  "key12": "5TorTH9Ea9rryCKrzUxfUAhQXuEEYGrr869j9LZwb7v2446UKAuNSQ3H9kQczMyZiemPoiZAUZWZpsS2o1Ya38FC",
  "key13": "25tmDreuGLpuvC5XyzckYq4BXUk8YcnA9TRDtHEDpUfiPNqd5EMAQtvgDbgcMDYoK9sXNMUiXyejBePxxVWTqrXL",
  "key14": "5PeRagFLoBJ7xhApqESHdYAsvm4g4yp2446yX4EmSAMpCHphutHsnVkLv8WD5UsdCWiUq9tmzPXnDeBgDEKkGQCn",
  "key15": "4BcsDrVkEwaqtvffCzEb3z7c8hCv42UFtdE1a6JANpDVoasbzGBHU7H9L7gCeodrJ2YQbMu3GL6LADDkvME7WxQR",
  "key16": "3LQidfG3FFaeSd6j2akNXd4i14frZ9dFjATceyqqSrwfhRsLjhuf9qkup2d3oA6dmm58aUaU2scXf9Y733qJSPY1",
  "key17": "5v4WVVM6sY5FY6oHWWrWGPn8fMACsJwiCaHmuWbJbBShLKgGwR5EqQUuFR4iZyAiYL68vXjrLKAetZPLLS2PMQX5",
  "key18": "3xmgo3ihEbseV8BBeoy5ohRkr6NEgAi1gW7EGpycaFNLP38sbLVVEJ6ag75gs1NSqPqxPduQgBrueVePUjhy5jrb",
  "key19": "3G2gjhv6XLd1dnNF2scmRunyczaDzDXUfCwXAwfgMCdPTx7ixUQ3eoumUwCQxzHA1cTdtV8PvdrQqqbMYuiLSUaT",
  "key20": "29wj7m2fNRFRafcwQUEJASnUPDRkTmBnTCdwq6aH4ZsUtcxXJAeCRppx1ZidqyPKnkZHRbgS87LsiDFsmGpsG9gG",
  "key21": "DftBDNANDnqzatKBgFkHdMMdW6UvVEKEMxTiSrEYnoPYUHvB19Gn2ZyXdt8p2ACRFwm6hgqf4NzaCBmFtCc1pBH",
  "key22": "576x7WBaYQGmDbP6jqCKm9A7ao8D6KcNA7FkatmBNgGAhA9U17DAyE2B5uWt4QvwUT7xt9TZSQ1ruRz9SuLi8kp5",
  "key23": "2g8KK39fiBmo3v6Reg48zzXcnZxNu9Z9fFsscp1XD9nzR6TCSrTPg7VoeiwJX1jMt7ivcCBsPzmqofyd99sRuovM",
  "key24": "5rVMcW3TbeqwetSyFijGR1mULMXGPSrLYhf162y2vWZzYuTRbrLzS41dbVYRvejy75HvnufHP9XF8jKKaS7o9tei",
  "key25": "61nrVd1imtRax4cKyJyccn7HLULQdjevWPWzJVrYYfC5DZxDmkuzZ4ThSMEUiyrvgKWLftmMZcmmDkjVLUc7TMPo",
  "key26": "5peDMh7Ahx7zwfr35vR8evGJAdHjd7sXqt1zKBWXiiAvVsKfenRns7vTY5CznvLD6sePWdHoGK371yPJqmJ8sHnv",
  "key27": "66uXZ2Svqv86MqRtuAz2k3BXFNTgvha1knqMn8GMwyov6i5dNfsEaPw6TVgJLB4irnQ3AfJPX9sHDrxDFjfGpSsv",
  "key28": "3J3bCWsB1iN87EY4Zuckn2NptGTVLS6ejc1dx34TbYRxRdVtmAvnj5VY4ZtQozgSrMVsVouSSim53WKGk7CY3ef7",
  "key29": "2xsKtUE4mSkA1syZu95eZK27rhhD2z22RxBppw3mRG12Jw921VbQXYoJjrk5qCZNeU1aejcDjzH8VuchCiRZeBHR",
  "key30": "EgajdpAAT1zz1fUgZ7tZCCortkHzkvFQPxvY95DFN2sexFCa4bgm9hfRm97FfJScgqNQDxPoQ4MXoJd69sBPbzS"
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
