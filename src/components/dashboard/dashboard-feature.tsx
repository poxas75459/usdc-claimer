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
    "5KrcJMa9vG3GbFGYastK4vmDrNauAzLmu1G1ERoVSNm3gDp54v1CjMvS8nRh5UJ3NUNYtJwbCibXwyG1Z5EAEKou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g5BLcv7Ej3Rj8FLjVMUTRsovxD93BJEQrq2nYaYrkAcpuSWrCjtjTQx4nrgtXbgNcTkKpvwwRvNipvJgZKYkZWB",
  "key1": "29UtqphNxMwtKFx5yhABF8stcEPYECe2s7xKXNXgvG4Z9FNNmReGGjCQSGJ2Gg24WqcqNt3EufBr8mLhYwKXFsTR",
  "key2": "5GSENQY6jv5Y1vkcN6LsFq4Zx2zccbopP38GRiaJu7Gf1doVYWa7h5SC56yYCC8CiU6jg4sMYHXYN1CRQxWUqnPL",
  "key3": "5LqQ72SCcqkkwdGJECoyP21scpLNwKFWKHzy4KCQbnSRVi8zeMNGPbgmG4F9tGsc6WgSHUiWWsaWu5V5is6Y8qvL",
  "key4": "2SC2PnGRsNp59eNSwRzdz8HY3HAn7dSf2J1vD1s5MMH8Ydgk6sCE6AGReokC9tdmToxdtfjisSLtFqcbriNLzBHs",
  "key5": "53joZXJe9iJTwcwSATZPj5FDy2RQNH2SkgoXTEREqNMGNfCp4pLD7JReobWWBUzfEUFM69Wu5SmZEpAtf9dec3EH",
  "key6": "33KxL5ePGgn2iFqi8TWazB9yiKqHPhaowFpiFRLCGXy6PA6nqrMJvTgWvNCW1RLLiazVsd7PoFgJ8WLLtXVZrBZD",
  "key7": "2GDkMihp46qaR73bfpC6xB45wUJrDbKqAt7PFRZKULfZ4UHxSGC14TbyRKuz6RcJXUJjHWkT6bY7kKwdjHncmWZm",
  "key8": "2hZm6dtR8wynTobePjwCm5RaW2HwuhqpsUqn9vDbtwqVE87EKScDi49QHyxgrWWzFEi5dbVUPXVNq5DznBzd2HKY",
  "key9": "3CbqMGJeL32MqE7sx5jjAwZEiErTv2gaUaH1hjQpDbmb3q4xzmPkbzVZxca4RDJQgbgSthciw61oaT8JAajhf5Rh",
  "key10": "zewg5zwoqA8kqvEk6zRCCArWqbWgJQedhdbUkzj3BeDxLicm2jCHoGnbXqzTZhuFwGm69o2Kz2wzWcJd6kQoNaW",
  "key11": "5hL2s9yNuwPdiJouBFDcUrAmXP7Uo7ByjQ2cJj5eCLh3vRdQJohpPycLz4aeUmgVdTir6dJnzB3JXKCbwmiAbtZK",
  "key12": "4Rma2zw8bvrjiZ1txqCjEjypBLPgjZG23FFrgQJf2sg83d6K6jzctTohMmD4rDrXhAnT46zdpFysnkD2brHLE7Lg",
  "key13": "4JpUTGkakAWrfKjoACe2Esj128fbV4Qq4GBohYTam81nmQ3HN9o9Mj5fsBdNCyYbqRQ8W3Q9Gm57KWFPoRipxUhQ",
  "key14": "23zXF4E9yMjfkJ384pR1z9C94Bo8DDFYpJB7GX3YZMNoXM6FG4sHBfzSY1FLsUn6KR7Cj5LifVt5PQyDy67PzAGi",
  "key15": "FnxTLnNWu7Dxg8DAfqn3C9yHqWHhSupdDSJwKfZnSWnxtASEFDQ2q3B7WwhABVnWGHFt4ob4CyCpD3QiP7zK8mn",
  "key16": "4oJU1A3HGpYo3vA7otYwEfcBxq5c9pf6j4jFVwHRmsNN3GvDxrXgzwNwH1fcsrTuRVvXMcmdNwPYTm8tjALL3dAs",
  "key17": "3FgACeAWbN4kYTaPMtLriLUujN5gbMghPSn3LgNye89NnQJzyLaZLFBEbHnkHD4c9M5bGnPFkWXtTauh9JGP2Kb6",
  "key18": "45ynUcUrtcRZTxYw2f4q8WiPgKF92eHnhLoVDvHbq3YzSd9jcxbma1DnNnWQ28THMQyh6Utq2tJuVswxf3w1sd4a",
  "key19": "5E8AiT87mKRVuBzpLg97qnbhsAQLgM8HzVfjmUVbRAmZxvPx4kYyQJHsdh4GULbNACP1K918hei8Nj3B2qFkEQwt",
  "key20": "2Fc52pR71AfsXCTH2X9CkyPaFuxFPvMJKKW5ULQgRfv6uzoJCrDDnbykCqFvUL6W4UwMUjYvAD6yw866Y3RKtRTe",
  "key21": "5ezTH1qwsPKuj84Ra3dt8xoZzMBHe3YvNm8iWm4aELBV8tm4FcmrVEX6MZbe69DG8rX44ibEigrgPUTtMA69cxsr",
  "key22": "vfVh1tj9paNmG4zfsFf47qDJVkRUJjcH88yseCUoa5Y477JnXfCAb95uVcMzDFUNaAjHXBRuuiby2rXKibYm9Fw",
  "key23": "58bBFs8Acfwex5SwbFkbbvvPwx8R7zdjVBYK7gpfNwqDXimyVPPVGNTXsidrZh8wJfwnFx1QguQiEJoze9oj7ys9",
  "key24": "3TjYxMBfdjVanaiDH8D1MJ2cq1XjdbDos4L8a6cdcdRVZA8fjBu6xfoMem1aqtn8FsTYQNZW9YMSMRDFZGwgVvLp",
  "key25": "3nuVHXcuPyTmZ9H9EbgUz9eL9MwLPmPv8RV5u3ckSCK6uP3QRHLfPNpWqZdaCEUDaDrozqJo4ue8VzKdis4XDy2j",
  "key26": "4zcVkycetUCSyK32B56bttQEGJgm963bCFHagqaY53DRzMd44jPANBvm72yyFCdK4G7yCRF4R5doTSdfuvsB6SRS",
  "key27": "5L1E6L1PxPCzonZWsmAqmRfFPAfD28ezSRYPaxZ1LLnqJUiJJ89SLwrjPMJmkjAXNFpSxgE3PX1MhF3UeiEwUVfL",
  "key28": "3B7N6inBQW9roSBrtXMeacDAqjehcLEQgioqXmxNTWcdrRC6f9vYqm8fH5kPxiFGCcqe5D2RoCpfzUTBC3iNfrW4",
  "key29": "4nJdNHqCMt2SQtLpML2z39uREhFkgMeoXm2weW2h7JdthezET4pzvoC6K8oj2NiWYm2sFZkuCAJfFQDf9wx6scGy",
  "key30": "641aFyNrH1e8Z6aACkQcGfSQksmESczSJrT5kBNMLah7s1Cpjvrgxu2CnRbEbvKZM9DJhLFP1Ym9vNk71SvYKBHV",
  "key31": "52xHY7R2UaujiXJRD5QzeR554VqMj33s4KBZPXn8HBc16wQtrMiMj1eKTB9frurRXBUqy8t8YnHcEMTABBPySTq7"
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
