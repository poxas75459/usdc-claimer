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
    "3uomTA7spuR22ZYWqrPiNaHTVvaAucCN6xrVNuDMjrdQV7dw6tNqf5QysCGp5aYgQvtHucrPzrD3KQ14jEiW5Zzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lcwj4L6xtN6qKCfvbP8nNjiCrfX5ZdfkwQkZ7VSkwk3ypwUZzfVa5ZEKzuH7poB8So1UtE9Zmm7U4jgcTwEwL6T",
  "key1": "4dbaBM2zGp2ZNLtgTksye4VjPZmTQGZwZDcfCbBBHx7BALPMkHwe5Zk8nuufBbjrfcgXUYfHXvF324cXNFXEt2WZ",
  "key2": "3V57CCnHGzVdji2Y9YiiRmaqRHANyqqQc5TjrGVcoXLx2dBzxC31zybu34Wga8MkcVFazjRgH4NLDmveokTKfmfX",
  "key3": "3fcFo1DuRrAgxtn3gsjG77AWiME16ma3PgvZRyqMCCeEqaRk7fwn2f56Zd3KaRRedCXkrKxYvU8YoZC9yjQ9nuj2",
  "key4": "31recBggdSRA52WxCgrWyWX9QLYi9sSTdADNbZdxjYcqyXDoHHf3uZive7uuLmujNF1wLk589LB5Mh18MHYZhpJc",
  "key5": "vTpNNBLNwMtuGYS66bWTVY49M51ERAqCPVfsgU1nJq6xsLeu6eJTj6vGmYdZcxDHcsiBN4uZyjjFUDTkrgc4vJg",
  "key6": "4ANSMngENrYY9x1BtoTsgcnyVk9autaLJ6WaV5hHuePHSpWrnBjfUvRQ6zc9hN4UsddhicwiTiFqQNmVFyTaydaZ",
  "key7": "4q4EDARYU73FYwhQH3LDDovpgidxkEHEGHB4DMftdiHCMqD8BKhRZf5nZyPrPozc8mfZXZauQQQpjNUjczYQP2C3",
  "key8": "63z2TTtoNsdDZfHz6DwXntNgNGo2rimAkzXnpqsdLTJE8pAF5dbPx847i7bNF1UCRJfJLSfsDYfo2QfXW31MoZ7k",
  "key9": "4JKEScM9HjdE6XqbhkXUjoPcJq2hcpbvUii4uLo5PE4UroaaRmLDnxFnwd48THxujCPGZFN3yRre9n5Fg3Lzt3ir",
  "key10": "4HJdpSbeyYox8YgEKY3fxg76EBHWdxQDRGFxjjrSeUhQiaQj6bkAQEg62sfLgQ9yHXfDLtQfpZGBi1HTuAHwbBSS",
  "key11": "2CqQpBJ1BgctCSTmcLDF7J8D8m13LFYDqgzHTssZbEtHsHgEnLwT6kY2DBqncLKjyXWtuenV9dxu3dF5sMtthMgh",
  "key12": "3h1RBT6TTmhZHsG2wenDrgxVe3ExMzEekJ3dHq2mS6bepXUtj5wHpjcY4Pzwg5h8zaxhtfH2U66YNvTtmnC6yN2r",
  "key13": "4X8NJRKcTtBZtbPKGsKTdSiCkLaC8Tew2znbiHaxCwu1dxVgTmWAbU7DKTghF5EyhV6FgPFMYrzyA9sQpg3HHBqp",
  "key14": "3xw63PSJ5vJhmATZFCPuoP4SViit7ibnfnU3fnrycPxUe8vfgyG7ejwHQDn33cZKFYRCehkhVGKTtknd5voxPxWQ",
  "key15": "2tSWVToAzQwufmMhMapNc44D6ZqyRyKQyJZBrgkqMmnDhcbNvfEyXyxga3satbZvDskehFLhmQzc3B3SFYpR9e1u",
  "key16": "4XaNffCdHWSZ7CgMWudgr3rsPiHVwXPepKoBxKzpnahFmfc9cRTGgMWjLQqJt41NA5AfvXgC6vPrsCPQSM4eEWe7",
  "key17": "3Fv5cMTWVQadb2DQuQ4ymZdKS92Yv9KY4XPrxK3ReZ9K6vNTFRyXJMWE54DTs1G5N6s8s5g2rKw94eaRNmXzoKkr",
  "key18": "FExwNRgRDGc4f6Lmrnc4wmUZNX9wv3xWY3TzZjECidWSugEr7dn1hDjd3Yi3BujJ2Lt6Rk1DKqpNP5yM9CqHHyD",
  "key19": "5VENRjf9i436zzFf4V71TXcLXmYyGoALMeMqpPJqzgVMeQS5y1Xzu5FmpiQUNgo3uej5zYnsa43TVgi1HeohRgos",
  "key20": "2ojXHoQN6u4AWoRPYjahZ2NnyHiZP273SWYGLCZT5cjLUzyZcvEqWKNW1FftUZK9mTBA1mKWL978pTi8f1hH2Bng",
  "key21": "4AcQqbYAsAvY3F5Q4ELVhwXocYuqNishzUnVb2MAULaadSfRvz44UC6jzZwJPxEzdRFumTzCw5svgbN1baiPhLsT",
  "key22": "496HdzEAgHFwT8YRx1aLbhY1Q3ShtHiuhEeMXij1qWskjAyb86RBVUBJBCv4Kwuda9eWJ9yNeZ7VxMQdTHQEqqRK",
  "key23": "2PSHL2KqasAMHLVfccYMh4zz1mnF3r7g9wu9vUoDzrXmU3Lu5H5xg1AaycHRcKMedtMwRWpsrJuCa2ShnaHdRs84",
  "key24": "4VREV7vZHpG3donj95M5PqYcPgVxWNzE1dHHveMMoUseePPhesDaovwJFFhxEnpFXsqWwyBT7CAo9dWDZyDzT6S8",
  "key25": "33yS8QuxifhsiabVK58p4JW2stszjET9CDYAhTNWrxHuGVGtpMcfyvRe8SbBsdTYncLhcHu2n8KfmRpb4CmaNkt3",
  "key26": "3pdtbLyACpDQ6KdkVvz5RQW4R5jYAgbJe43gobb2F8eRDHvfFr8e81fC6FX1MKp2RedZxDpBUU7WEFeuDjk7nqSF",
  "key27": "29vkkCva1upEuZJm3kTRsqXHLWD2k14e3TAoq4byowXiArttUHsMyPqkfD6KLiGA1wAxgw7ugsYJc8T8JtnLspSo",
  "key28": "4to6fgLhPeLoXVGhGRNwKS886kV2zcLZka6yXG5Y3J8PmiaKipNXFdxjrFGrZdQBeh5BniG9Vt3ZyiKmCCyonVWE",
  "key29": "5snNJb8siFokxFNe37Lbhyg3DoDY71Mb1vhWpWNBiRTSooD1KiExxSMhFKfoo8x8Z2oHj9JHmWk7WvJ8GLmbPVY7",
  "key30": "iEkqFiVF2NaWF25SGvSxgVq3AyT2UTZjqoZbryjiXRmNi4CUCuYCN57vAkuKQdMm6MnPT7TCrFiQMJzz2aebhx4",
  "key31": "4gKDZ2ogcomnHoxdcc55yu7MBkCsro3Ek6EsRfsU5pG26HzkE5xdBmk9eLNTNu2DUQdnXrCCcHHVcgwcGuYwtg7z",
  "key32": "4iezuvbqkie4PTzstypMfMdJyvRTdB8TV8A79mLv83iwCrNYjPCtjGk91vksC4YXUJ9M3xMpxr56rLMzhWrW2Qxr",
  "key33": "4U1NnXU3cP9EscE2hwexgktGucB2rDMJ36pXabWEzMfGDGJd4neqCQ6o4VSZpyYk7svgAqYG4WQnhZVVuvoZiao1"
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
