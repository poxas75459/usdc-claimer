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
    "64CNQJ3mkhWFnjUiDzEnHjVEytdBGmbj5hnwVWKyuMYmUUarQcxDfzdN6ZFxTm3ujnxeJALPQbxhXCCBiRSDN4sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PcAf9Rf2MoJJUbYeKaqjzxVBnfgM9Gj2pfSMwiw6ifRMG7bQ3M7FNoGGYkRFCHbHxGViMievG6QqBgUHHv8EXhb",
  "key1": "3GvHHu24QrNdZhHTRcy9JpKwiuiWVaxM1vV92W2rWZv8fUwN9eQESLVF5Eu31mjcZM78iNK1m57UNbX95mr1rur5",
  "key2": "3V8v2tVeVsHtiRw6irk7sk9jDcfbUZQTz7c7hmLZLZPx2g17CkgfgFfs8yL1STGpSa9ZSNgh76tZx4DcgjKb7CzQ",
  "key3": "5sikvN8idwd8AQjUYkgKYVQU5L3y2Ehq6hAnhA92SAxHqoDpWZUTfykzoNAY2TpRMKAFV8RvWr2Tq1u7zsnyVSuF",
  "key4": "2b1tz2w54A2p1kbdcxDxu81eivdQMGkfvGM57u8XNmMP355xtQvB9ViNkoAUZmbABJPXe6WxQc2u9eqhJNJt3UTY",
  "key5": "22d69Bis27GB8nLWqjXQxD3RRBvyZJdcwNVrn2YQBPPfgdoN9x64fkCRVR4HRSNrzmFqBPtZVaYgDvxgxzxSYrVT",
  "key6": "5N14YBei4ufTA5HyBEPYgJd7mtCXwT5YaFhmApnjyV4aMq9iiopVNcFuHgwevGFF61ZjtZKxtG3dXpdkkDd2NWge",
  "key7": "4kbzxxbm6KKmUwcTmripytjPV8SmBmBbNcv79Zw8rkBB257VS7oYkLBhbXFwG4ic9rnK5SsYtMzpHw6fk888FRrZ",
  "key8": "2kVgx4eZewb5ogyH17fUBCmvjbVQjq7U1fd2ZBAhgwkWRQExBBGEEqYGbPthso9yDwqiLaLdrWQ9qKvGAGzGHUzh",
  "key9": "2G7MuLVTn87vyTTN2wFjSNhb8MCdLoh1xWtsYVdhRSRZMQ1hbCGDdCd5iWVrL6vMBch1JZFggXoWQokdvXrTS284",
  "key10": "jTw34SyHY1cRxbueuE8EVAJ1AdMzEySCCdihowNgXXe9vpg2WomQLjqnSa6JB2AMioDvqbquJeCh7xaztdV6gLY",
  "key11": "5BNsY7kEeJBdRURf68twG2vG8PLcDfoYJBoJrwJvrghf78oAfynie5RWWa45oers8gAq5nQbCMUGfHpXVuE9ZUXt",
  "key12": "GvfdHnmYjSDX2oki3kS14VG1QQaR9znS2chMt12z6LKkv3useNDc6gy1W82wsb2eoNVuoWPQiTnB8VxYBSKB5sN",
  "key13": "THPFM4qCZykxwrgouhvU7aKtbVvPiCqMYuERpeai6UpzBQbfEy1tgH59tdUtna1GSNBxAhbuiNL3spVDkMbASrs",
  "key14": "5omot4WPrnSbxYibBgdhiHZMjL7i9qfsgmoqPQyPHDXWasFD6GiBEPLAv3gHwSjBqJyAAvEm9QMWjqmAJKXWK2jJ",
  "key15": "5AEV1pNWSGgc3NPnmbhDWuLeLCNBfgzcgBfBpX3oq5pzqqUa2PiqGEkJxcwsRQ6GprQJ6Sm9id6UKy1NJvVkPhYn",
  "key16": "pA6QYQnTFU8SN4yGHm9nLzpqWgwJJKFGRfaXWq4b5d6uvkwKCKEbCnxccpL51PChy1WV1V8GJ8Lxs6NdbB4HCfc",
  "key17": "5ENzbHHRzn9z83DSywtqofhRGZEPPTop7DPtZFoXecZRwd7Dy8hYpSCy9vBFPhPtuVG4UmqYHtyyVay2HPrgDRJL",
  "key18": "5pY4UYk49KmijQP1ppxBQEXtEvWzbH9fvSQF8RmjJ9XzhcfxKnDLsz7PnD5YF1ENmAxP1uHhJwGzTtr5asrTLbnD",
  "key19": "5F3sZj5XqQpEx4s2qxKVRjCPs8KF6inG7xWdY1fWthkxEcJXCfUEgf5H5LAXzK1Bq2Le8NEp9C7vcA25hYUfNoVn",
  "key20": "5dNf8ESEUNPW1PmUiMKzpmbeeVzSoXeZCgtGJ1yFJFC3Lso9JHcTYyWZBg5kgWGBVsX7vnn6pCg2B8EamKRoKjFz",
  "key21": "5fxECtm5CQw7xpmEV2sfcb1Km4yxS3p5yFoN4MvYZQrVc74eqKaca5Cak6Z6zjdfCKXEmLJZaXPmX2yTBAzmP1nE",
  "key22": "66U21Jt19zUpWWaUQXoebht3s9FznVK6yNdy1xVHHzJ6FysS6FuMgBL5hHkRgx1FEd6tx5VSm4MsiNbPdN34jBdL",
  "key23": "ZrCP9D13oyyBdHfGt2ednq71W2d6gSqA44Rw1LkRUzqrafuBarEFnbgyHUyPXXT7m6zJm2jgjNAsyLpvqqT2MeY",
  "key24": "25JDpdRmE2sq8o74kARWf8XL1KtGFbvCtWUQa4sKdnRqC2TMy4ZKd7EzrWJJfbYnARa42hWAdEqXeHe9gSvJ3rkN",
  "key25": "5w1Rc8omvPgQZqFdu3STfW9Nva8eauuUpT9e1szDTxZDXytCivZc74hBvKc7py2nyvA87PcZ1gyVsKbntEnsrHCf",
  "key26": "4VJc5QWE6c2yp6fpCb5F8rGvKNQEef5D9ZhBuRJJ2EAe2hbmBWc1o8QydWxpHBZ7r5uYKJtVEktN7stnH59JmVvS",
  "key27": "5tL1vcYHKqo2dzGRv4qug4LeUFnN1DCTKQJ5krrDamnhdbie4nVjYStpy8fwXk82K6MSnvyHa67KoCZ3cv1jRhoj",
  "key28": "2g42kk17uaYzWCzS5UH6kq6vFGV7w5cfPx3946f5Aer4Jh2PKjw3SHqMXgHFb8w88kW5RfZT6cPQa3Ko5NnxkmFq",
  "key29": "46q2F6ToKFUQStLEic5u38Z8SYVUBPFURZZbGcUNm6AvHs9jDSXPv2o69N2BxtJgcXAAkXDsQ83hT9sUXE7dhuuX",
  "key30": "3sCuFgcyNzzdRMhaXBhbHQeJYDr7e8sZxWuv8TE6ZJL66hrxArUq2wpS8ncyBp13AEQrrgxSv99QHfrbS7RjwAeJ",
  "key31": "37BtgeNbeQesn5vKgdmMKfD4EfJGWtGJH6A1bMRWfsu7DyLgXrNGw9NV8yCN2961Zgd4NoH2UipM8zQBtZTcTNfU",
  "key32": "5cMkwEAamW11c5kNktqv33yUm5z4yXWTWmT1uQSrNJm2ZTks6D3bNnseBTTcB2Y6iEg9bPeVVw61yMr3k48aAR6A"
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
