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
    "3Qiv2q64aUf2aeYUtFykGQEGXRY2EDaRbEGkkuwesof8UDjgqYvqE6BNPc8w7yFvkJHXKKPejzBGnK89RPWyrVP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W3bG6ZF4J2Bjj4oHjwiSoL61PkmjrFJ4PLQRuCetz4LqqyM2oSTM8fwGcHSYEcioB7SgCZjeBX1SVETyeEenrVi",
  "key1": "46HNqditr2PHdaqPZ5VyzTKSsqQpfxHqpTm6MFRZ5WsAZhUrKezEFavqqQMWYgiwvhJv2Jz6Rpg7HjoUF6aT8hvF",
  "key2": "Bm49k5chLAs5UEmRuUbvoRnvvjNS9kPUYZXBqHDrkJ1iWMifFdd9T2c9sXxXDLtEWH4bNoad6iFCviow7UpVzkZ",
  "key3": "3xY3otRHSoJVVPAKLob8eMucKgD283GqKXANeSwZ2huMZ9Fq2iwmY3uB1VxJR9xPCjdD4wVVfjuihNAFYecpuAuQ",
  "key4": "3cxGCGi1tpBc43KQieaTf5ikirJbZ8R271oA2aynPpt7RBDu8YwPEjiEjEVx3ZMVUv5fUCZdENQXN8PR2y3aNwqG",
  "key5": "4QAWcXa2spvPPxov8R5Ln7F6XyL67ijuqEjxAcNhwwgEpHWkSxGnJSPXeURzmRpQ17UFDm65owTgmHzY8Xe52bUp",
  "key6": "2ERWsbnV3abjBQax1c5SduujgcDP7zUwLy6tUTmuq3JL3VJBzPxAGNDtFL8423CHLurSx3YoQXDKd4hMuNv3eSQp",
  "key7": "22urbtXLXM5c4aibzHieqtmqJyMH2EujANCyPVAd6hKNcXXqsMRo4ikFzS4J6598N621hs168moaViSvu4sWxf82",
  "key8": "5R2C7h3pFYnM5yHmMoTSMmez5zt9ZPHEnhSq1tdu6M4xaG4zJkhjCi3wYqafuonaT3nx82rd7EH1yu5j4SsVkhxP",
  "key9": "6261KEKjPUL55oRLQVtnL6qfLndDFEwDa48hhN9qFraZbhnE85EozehdnFffdfYcaXSyKDwXNXJQVC6St3cu2tjn",
  "key10": "2Df3K468izig3f45DyzepeaqFh7xEdruHhEqNdH5s9bSzBnXLDYWsDudPnZDDTj82qSRmcEMwZrqTBaFZRFEMRt8",
  "key11": "MpPQELQPWdTGcAinbV9wyenPNKurjjbMNWhn5Yh8zkdr34tQPaSRNxHPaSrzqFUW9h6LWK6GAM71QsuBNE6pFjA",
  "key12": "5CiZss3JEnwAo7rULCQgbRCCFgKzSegXn1RTqL2FoUGux8qyRsAwVRkhMqDU6cEkcXpBkekLPbtNgtMi3rKr86mZ",
  "key13": "3haNNVTuqz9xJRNvfYfY7qmP3KyhiyuABAApVFL4ULyezMUarrmhZNyZZzMokeM9ucaJt3aLpE7CxTJm6fEvvumS",
  "key14": "35TDowSzwa64Y2dqGNmWysFmhSWvKFGvbn1p52TfrWztcJG7xXMUKHVzYWKhMqLSqDUtr4iYt3zddNMAvkwxHbwc",
  "key15": "3AvPfz28fXftP4uG2qFLj56r1oJ96vuhQH9fi5abTKuFiKPNWtHJMw75Z1kgs7t6r4hiCvUi6Kmv52yC9UYUGVVn",
  "key16": "NeYua6DSWwzvRzq4Tsg1smuyZeHA8s2GRTeiVqGNnfgc9HmJ4cFkruYQQxXTe6V29kiA6ju1dwFK5VPwFvemdds",
  "key17": "eCEvmSiWwWoLXSk56rMYC9UDMGe4oktcqxJs62rT6TWYczX8NW4ZhbaLvxdCsgMX6fiKNFHPE9oWRi8nxBXuhB4",
  "key18": "4g8WeGZyR976fDpVyWfCrXSmTQDXfqALUvm1Qh3xtGU5goDwBnPFSBHEKEsg3EmDWvdLvNJgNbuDCaWGtP4W4DZj",
  "key19": "2VwRsig76CqQGogVnxveJckDC9B535LXoQxPTrwK6xYAWBrEEBydG9dJh23CA7YPGApwD2pDvGCWifmzsUkmG3sF",
  "key20": "QnhSaHEM5h8JmMrr34ymFHKPTgJwCa3jHCLHKo1qACbydVv5bfgQHYsXMgpPEm3hx1zNo7sWBMP94ZGR8QKPEwh",
  "key21": "481QH2vxaJYcDTn7RQcD3HbeZ78U56pn5U4GAwsoxw8LWmqpyvJT7DS6xe1jwAozoKarsMe1t2P4T6goYApQUQ8j",
  "key22": "5z3WEtq1vxT8s5ni6sM7sDRufEy9GN2s4z5XJbFfFdik7TBnA5ucbSngbtWAFJi2pCwBDQHbhvKsRYhSBeAo9KUh",
  "key23": "371U36FnNdyu47NzPyGhCWjbs8AMaHPhkDkoCK9idPGAq5Dzy4gH2pmqPzMvdGcc6WTF39wncKKamdzjspJUwfS1",
  "key24": "2wonADCDEdX4AxM1cJErjavXDT8DK71HeCVoAdhjuFmWwQNmByK6vAEaa22f2yFFZDQRwRhrJ78KtXVmWzmchDEx",
  "key25": "ZJUo36xE5QXK2BFGJNGG9AuxnhkL7aG7ux1D9pYLLhyedXVh3Z3k6jSxDKGQ8qKB6b8GWhDJMikmQjeCexk7rZu",
  "key26": "5wFLmX5BZ53Jie4gJSoJWxrPHtLrQ3ngvr6P9Fijuewf2PXQ5hHstWVgxikp5uRFNpSrCcT4gvsbyAUAMpsxtNEf",
  "key27": "58AVwLG2nxAyyyEHYmbJd5kWs3iG5TA452wntShGPUCtkAJMhYhHbFr59LZuxbLxfJCe2xTPCEc6pvtoVQR5m7Ro",
  "key28": "25a4FDkuZR14nG6N9ceesLnLaXiGtPYEeH8xp9pA6PtEwJGvpgYf24fUVCWBcVXvWjPGevSbQScsA295QURtJxPV",
  "key29": "3BstUzy8rt81uFwjz4sQZ5AwBX13q4BvV3zzUqmTnXcNm29m3DXDPhLY8oRTCgNbT3n5aLLieih2ngnLrPDRoZec",
  "key30": "5GY3Lc3hh6PVTAe8hd59TFE6BaZEhGqepi1V6AeTfQaNjCngNaWDtjXsJ1vpWMin1wUiYjyiUtesfxVCrkGjnXCK",
  "key31": "uF2feGmKjyNuqsProXirgRYUXyoTxWFmjkshkrgshcyuVqfJ7XeJ9G9YG3yjneXd9qLAWNUPxc7Y6YYJRKZHfab"
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
