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
    "2vkqVSDQCKn28DDxLfwma1hhEUQhydYH7pLSAb7WDWzr7kTrg2wTdgacUodE8MSVR7BmMT4jhqvMNw7FBhCpMWfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydfKHqJF2nBZkki2EGXARgVLuRvF4tEf9u834SN4YmsQgJwu3zQVUZRwAR5cJQnDVQda13XiJoFjVPh4nFZZVT",
  "key1": "29BomxLhyFQHQHArVrqjh7j9z2vgvP36m19Y9Yw9VcpYEmjADv3N4aQ7o4LrtqRooWNVkHMqwYkSMcrVk9BxHTWS",
  "key2": "2sZW3W4MsnREM5J5szJr2kdkwvzArNqgdbgSbX4LcCs32gUfg1sWMcXWuWHASjVc4TJpXjxHuPb72wwPdNw7CBaZ",
  "key3": "FQx8Rt5FpKRQhdUo7D2ErPtMPMbeXXCRQpo9557LEfKwLnLquUa2xD4URfxU8wuYmRHtexg78SDsCVBzZErtfjq",
  "key4": "4vYGyG6hLBHkfsEcYUmdMQopHbr7XgThar1prskHVzk1e14fiE1TVXwEGdYvWjoTW9723YBbTiLzXxsDS7uqCNon",
  "key5": "62aMXEYpgvdS27o5Qy8sJZwGRNVpcdPHAs3e5Lz7ZaCwVgspuhkih39ghcnW7pGn8YeFtyRB8nSB2g8bkxJmUK79",
  "key6": "3DUSYVR9tbfie5bNkfw3D7sJRK9U1vNh5FypQ3SPH4gxrQyv11CQVxZY61hGueGTUNTt6C1sD9BuL5tZF1zqy9wn",
  "key7": "3eT8qnJd3ZoKM1Ac1dV77pp3HfUdheuuJu3e6oU8KAbvUCdQbpboSRzDvYg93G71qEoc2AiuHCGdmfs4NcsW2cqj",
  "key8": "3R8587FUkSD5nn1u3VKEwcLb8fpAaZ5dS9na6LBAkyipaS2RoqN5DXkovvTqD9vZQP2K42LXyykHyPNcwf2VoUEV",
  "key9": "yg692khXPitPiuVLxnuLzeTyeMG8kgjTckajRFziCEP1U2siUah5zY7d6JsywLqCFErTfpidsGQGMhbQ88U9z3F",
  "key10": "3iqgAw2EyS4hHMenXjdWVBudoSMQPudvhtx2nvYZuRnjL5uVDRDfpCwmB8CYFhapqUUQVktTVbpmtoChNeBwcKK6",
  "key11": "4VoYG6zjStDZ2PLUdSHuzcDVvVNtV4rAPAaMwWApcAJAMU9JovDyAnw3kskNgYikQnKBYgS4JG5cACVhMs8LHKZ6",
  "key12": "5mn6p6cy5ckBvrhjkWBmcYdMRA6Bocb8c6ii54fAYwDpj4H9PBp7ChHsfkFvX9YREJ6M9ejg6vkJZ3bF8AMNm9LW",
  "key13": "5vrNG8kFviURjoxeuFkT7h3PzGC5QoMvGAUEAFLyeG1hkkLLUUaEZosH94jJrPRC3gpusdhoVCfbDy4iEBZW2S5b",
  "key14": "5byovoC9ZP4sufLXSLcSxGuaVpHGaCD394viQe9BPPnK2ZnC5y9NpYR7Xq1D4ZUQW7cU4TnMLG7zMkfNfNAR7tnn",
  "key15": "4ninK1HieKtb7Dhsq5qZQmpSzfid7nw3o2q7gtyvEk259zqffG36sa3kGGkw7DSucezoNFgDqSiJ259jagApoweP",
  "key16": "DLkwYp2cbQUyKzVf4YXLd59v693Bqk7PA2r5d7N7cSqVepZd9DS3dD69j4A4eQvyra6ej3tY7Hi5TCUsuDQAoVv",
  "key17": "3e3cTyufnwddqdLs3dmQtf2GkveSXqhKaT6BCFNLZ8PdrexKatTNQkqi8kuQnLiRokP2C1kE9cD28kPjsy6Y1Q43",
  "key18": "25u5ETVGJ9thDm8bYJxX5V3iUyS7MYYPrCjLhJYwuSX8iZBmr5qLdTWcNeTS6Yh6Fxn7xJBdtfomRp5Xoe8ewPfR",
  "key19": "FmtrsuEhLzqfs3qNcDUi3JmZgmkzj125y9Nx1Wm4MjUwSqULgJhc5Nf6KJAM3UgqMqSPX4SHjh35JpvYkmMfsjH",
  "key20": "3MfWFkDKQAg6Q9FWaHvKKjPBvFDyG2cco5wbbi38Eew81DQTDnabnXZSV7zv7TirGnZ5qR1GHTeVMkhHU8q8iWJC",
  "key21": "5SYt6BF3V3ndvs46citW48xME4J6CrajSd3AExbnDETyBZSVBNmEBDWfPDN7wbgnf6c61d7v8t7dYQ2oZJkfsP2p",
  "key22": "3NdeN4tiE1wT8c9DWjRWFtY9yM9qqUPBZ1iGDaSNma39zEA9YwHo55r2GwbraKtxisP7RLDzwNFRuapDT5gRJwb4",
  "key23": "2DGjaLs6LaMUE9iX5dRCUgYorDMHac5k7YHbqB43z5gjo6QfQffTuaAacJKr9yqJxTpkjum3XY21mpjiCA8YL68P",
  "key24": "4EU44NnbfYz9unjJoxA4ScgWXzPh46ogycMYzvBt8GBHSME4JNaTfYjfgtd4zSWRhypybgroF4kyJsiiTrLetWcC",
  "key25": "3EKiARrMMD4zy6Tp3aCvhQXESWoLCURBjL2qFNazqZPNKgzgRfuyEc3RJ9YoSYh7VbFiPgos3UjkWVCzHzMrWzrV",
  "key26": "3hdZphghSyiEHniJdRUMaMkWevSr8cyS76hJ33byVV9DZFa5mskodue9D1LcLDMzVoYZL7x8QMvFThdAJ9FY1JKY",
  "key27": "2XCZGbxhv4ZTEGQ7mX21fTt7pjZEoQ2QYgiyPtqGPAvo7YLhNhM5vu8tADyvM636uTR455Arg4Kb3nmd6Vuhm1V9",
  "key28": "4HmupxKsBgqsQC2LMpUY3cyNzab2Q6b5LkiJKQ4FtqNm2R3euENc79g5D9ofszSWf7xsaSGytsjguvffczFXk4nX"
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
