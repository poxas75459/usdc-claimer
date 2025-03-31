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
    "2JLR1z3q9ZKcMuemTgmm1hsUz5bEdK8t1ssko2u8qBKfrTcz77nLLqix1RzqaeMNz8rERSJY4rQwubmSxUTcqkQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KbZYkmo4qXnJfRKYMZr4sLwKYFYvco3hev99C7e47VBF5JiSMRFL5nCnBG292XP3FtWwEwPRMuwLMvsLGvTYPZW",
  "key1": "4eDpKKHUEhRyyL8bQxyP1iEFJLwikT4PCJfPw4KbcttvEsBX3bMdoiruYg2rz2A1HmDxgg3ZXTQUL7XzfuSTiiKX",
  "key2": "46CVfQwZdk3XDc74DstMDznwpR64X2ECd6H65Q8WcfYKy38otej15FRand3zosMdRV1TNi3jNGtExyVcH7Mqm1K1",
  "key3": "29CFAwCcCgj2TgdQSe3AU5xLKN5WsaNMqHTMAAWJCnhGJ3pDRMD7NYpW7qqrmVgazznWiv1Yve7Tfjr6KVcbZcuT",
  "key4": "5oaKinnNPWoLULRwuVMEt1H9qwUrfDPk8iUH5zFVdLKjsrxLiot6mGoavVhkDsNaeC3umN1cCSfGWkQk28W7VGpR",
  "key5": "23475Ev65USXHgunm8NXMDMNnj8LkTNhuVfWXnu91xKe7aScGNDDbdQFiVoeND3dhubZHj416PAsSP7NNPqfgk8r",
  "key6": "2UTiB2gu6jKv4XS73Yh9qxQoMkP1ykcATn5rPvPCXueyp6QG3VesMZy1JX4KMp5pYc9EnXft8vqmgc4ACNtST5G",
  "key7": "2Ht1Njee9EZP2bxvGiSXj7fwkxd56AK2e8o5qXFPdePwTxZCXh4BHswMD3Buf9svN5puRbGP9mY8X5dgXi4Y7a8E",
  "key8": "4WtTdmNhBSZst73ic2w3unrneEGnnLABiLcb1yBWpYK5Tghgu47jnPfJqgEs3dSbyktLMWPoxDStv2SLcaXXrEg8",
  "key9": "5k78tKkJnh7STBJF5H9vp6CT5xpDMPDQP8U4RVkbpawR1h84E4uTcAzV8HSs56o2M6CnrCcKFwiqR5cWXf9cHqjs",
  "key10": "4XvUd1QqjbKE8jPfKTrLUpGePrXtNj4CpSyEKnHZXjoD4VtA5QcgyLWFMmc368veTUztyQJRSXim7suKX9fPJtRp",
  "key11": "3DXLxjrdp1QkLWYFyymUP3vGsysaq8nz5NKvG5nTDjLUNpXJLwVfsmwdzY9iqTVA9nEziBfxJB22uhEaoQiRnZ5K",
  "key12": "5hhWbgLpJML2dLu4DHgEcHAoVemqovCBtRM2CGrKR2jBjRjfHSchzseuwiQBnrc9U7uxfn8wHcFcnaV41ULtKYGs",
  "key13": "4A4mPNczDXqyH99qEoVC35yx6EY8FcyLd77maSnnzDGFyaUSGVgpr9TWP4XNo9Wu7Qu8wRPKgtrghv7nkGqwxWuJ",
  "key14": "2siuTiWUmQryH112SdpZaZACE38CwBqE5XXu4pVSP1Vqiu2iVeJCwx2zSqp6bVkbmpDcYNmZwXyXsTnTBf2tTWdB",
  "key15": "2wP7qHBATuLBXKgzAhF7uqjxYZqy3Rnjb6DwayodPRdSrh1CqJ19vZKS3bu4cH3KyVtqapoVur5KjTabrPzBnc3d",
  "key16": "2gXndtuhYJYW3LgAiQ3z5Bac9juZjAMDYbuoRSCNheRGCAZpaGcaR3o2YEXUicHJAD6GMVhRAJ5PYU7QYsLsX9un",
  "key17": "4fkP3ae7ACtw7fQ6hSYJXRPcqP3u11KarYWjmZZGbwV7ttaPTLvAeYskDBg4s8SvwYmpoQtSfb12nswquybjVoW2",
  "key18": "2CapyuPiMpaXJRBgSe5TGTMyt6uSNf71zQe2VC9edp5uHL7Au24ebnUMcykyZPJ5hSXe4kpwwnmeABBXuDca2p1G",
  "key19": "CN2mQarFn2yCA9tbLBSdywVcsuuZywHQHrzd3jySPAhNT9JxbdDhGdCP5WUg5BTYnDwQx7KgZDRtffvChSkkZ3p",
  "key20": "3x9SrGVAVgiXMWADjBc8JC8M3Vxx2sBUL2kvNwbXCCYuNCyRW1diajFCymVgVCin6kEFiKrWFVmkuAewx7Nkxy1K",
  "key21": "5YCnnsfhiMBetDSbDhi6jtiBvbdvzqm4GvGcQqPbJ4Arkufg9i4jexGBbHrw9hZeFiZtc3zTkQw21wTWBKbAMwut",
  "key22": "Z6V6qddMKpRcDrs5wRzEntEfDjix8U4ued63CAgyRNGmX7kBu2ANoQtLyfuZf67mSnRH9iYncx9RJPwDSiHAPUC",
  "key23": "4YSmrJrodL7DcyVp7WD7PDw8av5tZkjbHGVYTWNAgrPJoPbPZRG24MVmU8Gzt5HVwWhUf6gnNSvVpURXFrXfJ9eW",
  "key24": "2NCwMfzi3aBejcfnado1hcLcvGQZdYpadMuvMw739azAtQNWzFqTxva7QT98M8f2ir2Sm9A6FDhPSz3Nw1qdZVtt",
  "key25": "3yYQWCAS93AhLqm4Hq44QHhXqs58fTWMeeEuav315fdL89htRcoehwpX1n3yXrd25W5A2injscW5NZMRrtNx51NE",
  "key26": "2DQAs7T7hG4n5mwLffTqpKNLxhdiYjyDycpnKwYpNZsh9TrjYEUUmz9zRQBqtLSk72QnMS3TXWPowM2uV82weWMK",
  "key27": "UcK4tXiUfH91KPo2cx2TKxKk2SzWJ5cyjGv7kS4gmLP7pzBB2gAQFBBEszbMbCpTpEa2tg2h153pWEU19tDfFP7",
  "key28": "619QhqeLBz2o99Gj9GP4nsEEt9ibYPBTrUB5CenRKLsgh33emwxDaGCBRx7YhtkQnHJcfdHjwRmhr4BTTeHPDEZS",
  "key29": "4G3s6gaLoML8wPsfw4326vHmTty1e4PdwNKeTdyd7hc7sRDThVgyWPBFJuxEDBLrkHGpvfunNubGnquR7g7kF7p",
  "key30": "5si115orzfaU9jiB61CjnRTzfNSkztEWMUS616xdZ4wNzjYjrWHmwX6xUSmKkQ2rv5uhxUMoePJaeLf2NDNeiWcY"
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
