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
    "63uq3C4hscpT8aAwnrZRSX5nmrfZss9A98G1KNnXPWs3JKzG8xLFYso6LWmBU8iu66MwFHdhLGhiETFgj5auNXMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DTztTCU921ydteHGSUXvkdsVBxs4fGyTpiSAAEqcpbXwiEMv6Rk7hghNbk9JyMUwrXzhFnFsjGot6XPapqcbLCG",
  "key1": "bSTeuW2XpchHx769KYDFnBLXPASFRp3CtAuSLYnB2wdPFZYfWY3E4JTsVKMe24U7fuRTDPPGsiYAKBfh5Rw6dmP",
  "key2": "2LLB8uF8ahMGaMbAGkkzngKx27fkk54kJUgsTzsUkYRs7t3z1xgfxtui2Vj9NXuMdiz9VpRYrq6S4eKakFLWBm3Y",
  "key3": "5sh4ZTiSAUSa5jJMANmxc5C1CAboxGTHEmujKSMqkLTK2GYq5S8ogHzH5ashpaqjsFWEZGG2fDP2NEZcv8GsARKv",
  "key4": "3mexhHUguLgswbS6yvBh6yxq4XccdGuQ7j4P84bZ4d1DED1RDdpKwUJvH4D1nHzXM8nW8eRog56jGP7b4DcUgUYu",
  "key5": "23eMkwguGFSadkdJhQPpz5HvQK1NXNPykQ6Vx6exuo5cU6EsHusVkWsbrUa1htqCMxBJhbzZidTowZ7pNVywtnXt",
  "key6": "57bowcHgfSNimrFP9fScxhkTpmDeQgETRkQh7CJGmQX2JWZa3hCY66J1rdss5Mfq44HCt98J9rQrNnUGwkhyzuXR",
  "key7": "4Una5FwcqWBA9amZgX7fhxdNo4BhtJingb4KfEtzuCzyag9izqAaQehkPjXy6c3sQsHV2LnTNnNt7wWs1gyfTEFZ",
  "key8": "5nGwoPDUj6YewmNJdfGMogEreHku8bb1hgSWwCC1oaohVGvTumicdazRbbDaA3dPcqncQaNouDXciU2ZgKA184HU",
  "key9": "2dnoaeQhysJoncNnHfa8BJhqAbgpVMCDKpapFH3JVn3ZqhWfKhLNLYd5TWh5umeeYmACNhmyToMTBhjqfgfPV5Si",
  "key10": "5JU5zs4oG5fiMjyTeNRN8oAQHS8WfMcmit5t9L5joFPo6CQjoC8pGu29MDyRWA2knAueLrjAGvwEHYqsxw1ahk1s",
  "key11": "2gRBqMYxHycnRxBvqjsbv7AxpQPGjrX8wUn18CQ45pnpB49K6Afsk3UGgAnqx6DnewpJGefH5mKwUTFykTahxvNb",
  "key12": "5aM5rHC5RQmzPgVYD1eJtRG3g2Hh6rRmemSj6gvXsFuCrXmBL732dV5N4siuorosKzyB2MWmvG8cycVqy3jXMBEd",
  "key13": "5tZCnuBB3b9w3u5PSBDm7tAyWkJwy6qwgZ5S8jHabMDCb6usW6ZhCucMd5f3T7BYqn8tdztb2RwZQo8WzQ6UvDTC",
  "key14": "54HespLfDwB7o1BwkkT9ifiu4AbxTNJTYLiYmfBEqZLDCewupstiRzP6Thb6bhnNhxfQbXA9xW8E7z35rrKJMRHc",
  "key15": "5K2wqSGSn3roDgPMiNUSRuRvmAJkZhCFoffGkmATLwsuZrfwfaBjHMboZHLERmf93HZQm2k74ePAgqFkYSUt8c3t",
  "key16": "5GLw7uY2gqyjR7XCCMSvnLWXPW92bS6MqupmdeMVCqdfQFKNPgdvmFcoFWEZUN3xjA1Uc2douYbUpaCT9xiXcQR8",
  "key17": "3hffGyvn8a4vMPhknQzCeeFQk7iGgTFHVPLHZCHDwN5SNHhei6zwzv84xqZPMbThHitXkGgTxusUV3fAFt15ushm",
  "key18": "5Tvqepcz9KuxXHPA33fX269tpJ7JjEjER89Jw1aSkjpwEx4yBZfmHG4FmE9mKCMPjPawhZMnB8J55gwyTU8pssXx",
  "key19": "2V55LNR5oeQ9QY81gz3f2sPfMHd2HJFrCcgbRphVZdXrxfeTF9mKAHy4DP7M3SbPqEWPXPVaenS5QsmXSGJrwMyS",
  "key20": "3rGr4Qo2Vxxb7MpLg9BgCUFRtPeK1LkAr7DRMKPaRNjMHy9LeAqFxRsA3RCcdEpdQyKzF89TYjMw2maL42c8PnX",
  "key21": "3Jce9cDcGmnsRioqyiDgDui7roseBnG5PJ2hZwSJEboT5obJquhUMtGmJzouCHJvUAxB1MXaAfkMu23sL4rYAsXm",
  "key22": "2dRk7bLnisPMFkM6jdg7LHfhppZTisc4taM5aRvviPheKiG4rnEfWeSW8nwjJ5MZsfe3aczsx1fhBiKUaFpQ8dAB",
  "key23": "5ViYbsyTzyD1xyPbU79T4pSwjMMK3W9FxAcVdwLr2F3wkDSV3BFXXAqYrmnwxgsPXzXm8JWUa7MzWW7NK2vCHdeN",
  "key24": "34knzML1nLpLL4MFEBqGdmJXtpP4z9mYeL19jPoNdTx4SaRPbopfEW7JACiExWbMkjfgdNkjVBPitDerKCQXPxyU",
  "key25": "DAPxorymNwBZXbkN7FFpvqBeu5HHxc9WBVdSvpZwUGFqqnKj7D4youCWBoiy1cvyMApcjVAE2N6LPz1vxxjTgdP",
  "key26": "cmFzTxupCDxSJJ4JFatnad76iVwrvDDbEE6PXBi1RNJb1zPHBu6TLdFPe5Aut3MMzg6kZkgcAnWLRp5iykpG9SZ",
  "key27": "4qcc8Q9NexZCiu6E7A2NZ213cnd2k2ttL1uCy9zyrbjEQuxwhSSat1h3ND1qWAtBTbvvWTRAYDL9ZkJPjrhT2QGD",
  "key28": "2CJN2DnsoT3aJ6aeUy626MsTTuAuqWKdTYQvNrCHhRYr8uL7ZXmnrprERfjg5FTaXquPaxCNFTicPoCrhKVJdZ5i",
  "key29": "uRgob1CPux4d3ZRG9CDsZbRP5YXL9aoZtifGde43wQff1kmM76JujUmXTAbTvau1L48YyS28qPyDqTfn8tswkXi",
  "key30": "Z1cP5DGjG72FSPYcrTXnLTTn2YgCvEqdGgToUEnTufnMFHfKJhikuNtFEPBFkHyKkWFWAbeddztCkvjQh9aV3iQ",
  "key31": "3LyNi1uYHmxpCckZVA597Dqmr6UQjGUgeGi5Fzv7i4xdPHY6nLGbT7RYe27sfkFtRq733hsEDD5m1C43Pgp5jNGg"
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
