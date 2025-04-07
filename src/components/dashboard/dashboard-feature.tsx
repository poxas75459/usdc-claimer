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
    "314kBQpgRvw3xTxsG6fP1b4EvDakbrZB85fLL9Wdgzu7gRcj9WPAHqm6jfd6KUjod1P7Hq26yDxvKAyEuEHud3Hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TGTPegw6qsnCzTHJzojchoNphagkLrF2hpAhp6uaSaMa9ZTD3HWX5853zeuXuwqHoXuGu2AarP8UgCqotDkRk58",
  "key1": "5i14wFr8tvPTxBiDNrkDCVwKPfbEqC5XWBinoAiY6bADJ3inHpzxspGFkJnhHPLRxPY1uLv2Y1Vxng7gSDaAKBS4",
  "key2": "2RJXHsWKQ4j2ty9UkXkqnzT4TwbyJVrbDKiGMu1t6UsKEQLKBJCZjM1qp23imUcQCrtDR76gRiT9CdpJvi4pSfRm",
  "key3": "36se81xCsg5mwyAEkbSATWChaHk1EiaSjZKi5UUQ8yutfNKryALHjnBMeHrv2E8LtVSVdj28c9c1CVUxXregr9cd",
  "key4": "2d39L6g62FW5jccix7HozwV2MoLpLTyXN2YxV5x4Ge2CostSN7p9kHx5mF1aJBDz3146k57cS5pAjBbwpmXMzQhz",
  "key5": "beV4wZkkcWBbu2EEpi7FsUxcXKRcUGxM6aJSvpyPFUgLsZww37rvRvRskHuJHYDc7Wh6bWDvqniq6wQBNpsPfsa",
  "key6": "39DVjc46Zyus4wZPsgaGtCadeiyamhhhpAenLEJ39jVtVxccu58VAccnLtC1y2figvbGktNQ9Neun6uxY478SodC",
  "key7": "5JCqFHRm4xbdjhrHimP2MFxJLLSXm6wta9E6hnruUmgQX8T3hxJp1zpKUvSFREiKx9gUXuj5tn43E5FB3pRSiLCq",
  "key8": "4B17ze8sYRgGXAwJHsSGL1ECMn9GWqh56cJpdWNQDCS1roj7oe6w9jf8MYKCHwpqGLLTgWZSmDwSWATGK5pJ2JSy",
  "key9": "5n6ZYWYXwanzGqnUFSuMTbZs3uTTfxLAT3MoXji35p1a7AcBRUmSL2UKxtzXsWbgf4VCXzAddLRn8RuB8vPTa4Gw",
  "key10": "3pyNwJeHiJUNoMbyN8KuUepa5ia2eegmTs13FkrFYVpK2wBeZQBKrXiCxvQsSM8yFEYkNxQ24BVLkWt3fLh1KPmJ",
  "key11": "3PBhmjKPnRvRjdzkt3vT22Seownv9YbnG1WSvEGj7YZEZZNMWPy2gjeiLTrQsSVt3vurXBDttatZgn4GPykphpCQ",
  "key12": "49XZwKaanxKreKKDFCRQCywSCoGGNQWJmksnBqnsBds43uU9sU8tCREPu9hKUh8oefWYtCrs8zSJo2QnipdnjT4P",
  "key13": "Vm7Y56ZWtHhcHEXrp47R53chK1DiPnZd3CPyXFZvWksC4UsZK4aZuQwz55yznnkcUhNn7xacErrB2qiRntSqiYw",
  "key14": "5sArTk4q31vt14YC8nqoxGaPpEva5oWXFpKREcU1myKYQxnTKeym3dWovMhDCq5fchY1McKAoMTHfffGeGyeZLae",
  "key15": "5hF5MF56aRyVBqrZPmKT9otYTdxRPhwsTb78s43ciwsyPVbJc4vTbJCrjuQcG6tLE6SA2HA3e93kd4SVNfct7Ufg",
  "key16": "4s47ZZNPM9fSB47c5M6jeKZ1vCsnWS2FwVSAATXisidsmWCLNFNRTERMEq2FfDHjyhdWcMWCckfz419KeK3ugCsB",
  "key17": "343aXpc5R33EqmG76DeyXwcTXNxLQiBFoXpkzsKHsXZAV64vvgKN4S2kK3JTPFf78hfJgatoapr35JKs1beJtHhg",
  "key18": "9KhbN9Bn3JrZBGBx2d8KF1FJB9iadgnAUNzfAUR5zu5CJFeoNyBYrSSZpPh7bBau9shQKoxu9i7DN4cDoc65zBE",
  "key19": "29taUfVWL6YKiREHiWL47qb3kUp8iMLbCH9H3umX1Rsyxqs8r9ghewZZYLF2CbVksz9jnvefzV1nMwx5XUxD1z6T",
  "key20": "4hheWsZJpBDD1m2gw8udcpEroExAGGvjXPNjZVcLPvaFGEL5BTqtpBXaRtjpwmtyZqMXCdLnS8JKACQ68HFJHw5X",
  "key21": "35gSTkcCsJj18Ba7pGjCB5oETucEbPxKrsVLWESYbwXCK6Lw2vBKJvxdr8awDMciVi5BXyKJVkJyMLTSzZTMYZsM",
  "key22": "54DF3AENqPf9BGLmaSYmmXKrDgPE5LuV91Pyaqdf9B4tFcnd6qonAZsanxV25r1wkmvZV5t5ERLjHymt2HkjNyYL",
  "key23": "2jp6yctLzPc5FrWSgJMUkMuuHvz7q6zBT4tCA4FYoXLWqeH84AkK1UNrtNQJkEDCEUtYsunKxuNacEA57Ds61H91",
  "key24": "38wfmKpdbdVgGX9bH6qn4Jwf4rufmEVmALY5YCUNSzg9fHGzFMiexWe7VenursmxwmVUD8V1fLycsiUXgvNd9bjD",
  "key25": "3Rs4omhuqVMejv1ZN4Ua47UjfTpCb3bbuC5r1YdRLjKnrqAfns5eF2gkisf766QMCfVTfys9udrQXK95z8KS2Bsf",
  "key26": "dUsXwtWwpjkobaVvevs8MZyuVbxTohRFKoFVqGxgVMHJG7RZSHr2tbvkapeTDHiUhJsdmH6NFnH713aU6n6pwUD",
  "key27": "2tc36zm6ar7hCT8GnomgaanQLTXrawQ66mjG2PHVCWXsqFq9wv21njLZp7qMwdd4HxdFHzsqfaouaCUGnp6AnrNN",
  "key28": "4hUG739y4vUgp5SrwNoby7FEyj7xeGJxCgbdHpsiAC2xKqvDGSRUksVxrbucGw7hP5Xrcovham3zrRGsy5eTJrLb",
  "key29": "4eFJWn5HqY5HZpJhVEU6G8D3bQJ1ANw5Dscze4wAQPoK411tfDwGaF3FAJJLY2eMammZCKAUBScUPjpa9ND9KNof",
  "key30": "4RsnKKqRWwUv1foNchj4RE8w9TLn4pusr5ki82fJHLSfBb3dtmqaT3gavgzjFtsxpS7C3naPfJPzgFAYsHbVSz5N",
  "key31": "8herQMBuB9yVkLxVEfzcCeKv1FBpqZmPb2t7wvLcANqupp42MSEMoagP3FiWZ8L3T6r1mvDSuvCC1ihJ7w8dEov"
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
