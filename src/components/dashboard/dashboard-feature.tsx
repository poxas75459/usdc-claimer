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
    "DhR9mVoMxqpFuz7x7gqDPfmuJzEEgnqyw29F5vKrhgC1p1Dm1fgn2b4BLJdPampVWmtAuji6xA885RPXR7AG1P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wFp1Mx4YNi1RLKFc5AibNp4iKmDLhVN6VTwGYQhLekMh9pWYYX82uzVWDdpU8RLqFp2K3cVxydnfnkRuBiw93w",
  "key1": "3464xPrPCATTE89cgw2qgTCAAt57oSfEjDvmbynvEvhr5yLFJYfNF3X7ufoZSsWyD2omaNBAu9iVsW5vVhknbWt5",
  "key2": "4T6AM3K255vYZep3Ef72tQz3EPPAThkiWyKhVK8gnt7aLoMxDgFNWaetQ2r1eioTGaQia2TsxY7FKor6AZdsLxc7",
  "key3": "5MJ6wHLTZbJEQWPBicBrDsvZcMU5FoMZG35SwZqChfvwFwjL2U7icSQckvR2pLMraHVkf2q3Hi3wQeSGMNBAwyBf",
  "key4": "67YJHqgrPE4nHL5mt58gwbfFZ9pZtbZ4Q9gGwBmMaJq8ECzWbFkbf9bQ5wbXedjCNrgniMQztpN7PdG2znNnajbP",
  "key5": "3zku42HnvD3U5g3rYAzG666H9CBNFK68jBcWh2GAgnaMxfoL9fopCXztXG6qnWhhTp7wMZE7UeKBGgetxWaH2754",
  "key6": "5xVJh4ZMuD35mDorctAoTtzHPohX5uAigmokxX1oQe8Q8yhdw1bh2VvfbwE1LVNFY8jBpmHwDYJVjaDxAQTTu6nP",
  "key7": "5SxPjFUBgC4sVnV5tMnJ49oUBzsJiYhXyh3PaCNvXq7tg3d5evRBgEho9Zo3kDXWPGbv7c3RFnWUyyWCLMEvxzjy",
  "key8": "3iE9yYzzoWbLhkjrMaz1voq5ruFGdyvxrbEBsYG5uiUYBDiXLqN7EQy3e8vH6ndDa8NrucJcxKhYr8uf4iETde1J",
  "key9": "3JFkdKiR8PCKDFxscaqoPXdQU487fUPkjCK6zJNVPjSXiuBntG2snMRbWzF4TNoomebyXYrksamDBu5SCxA9XiK9",
  "key10": "5fTpdPJc8wBYhMTZbTKHiqmWphQML3eFQYZKFVqCNsr3cqx3WXt7E2AZnphKcAeURzekmnELyTCVCRDnNsS93mUe",
  "key11": "MDZmVY1hjsk9nmFvwg9kzf25XiwfoJPxw9MhRC2KmWPdULEwnKypeWfKQRNRdbWTHdCSzw9Bj8hhBRwqHikadwt",
  "key12": "4aLNFnTmQAcEaA9McArLW8DEA5NXhVWqo4xPUkrjoNDbEq1FMFp57xM1dpSubk9SpoDc56AWWJTGpqZZ4EREwVsH",
  "key13": "2z3JfCodytESH9muTJJ73mYuKwrrBniG6pbVnzxXnU4h7VRMMDHnDSmR23Wvfg9rpy9cUKC1B3mAus4Lpk7MLX8B",
  "key14": "3t8AoEEMAsRfJFCAkDRxMq6fz7njV3nEu8sB2Pb65NAbKiRFqkoA29EpEjc4GP2ocRMHnXB8h2dxbj3HLqKq8x8E",
  "key15": "5B64tDaKbFCKhtNNdYBoYczMzHUMcB8YrtorS1oE1ZjFPSrGSsAx6uSAZDDkgKUkv6Mgm512MaAxzM6ogJpbT86V",
  "key16": "3GX8dbT7AbYqtiPvDMhpe4pcAde5vWc11y986YydHMsLznVKDvJkAJVXbVfj53fNFMyGEyC1W6t9VgYem6BLEghf",
  "key17": "5DUpLj2TU5UapxosMDBEZ5XNPe2Xv4HJV8FdHepdcxgZ3CcfUamXLwh9pF3GWbJwNWDefZdvhLtEXGiPp5hUSs11",
  "key18": "3Dvh2rwXoh6zYqLEWphauRhwAcN311RibdFXs43Q5RU7DfBTxW8kbBX6hqNR4p2dnrNmfxN3gctDSEJjse7EqgCJ",
  "key19": "2ZSymTwvQAPufBi8t4BUby4VW8BvpzqURc1eQwKybaVpoBDDRV8hioWfw5EG4fLT6TG8NbkJgSBfXYLnaMXYK7xu",
  "key20": "4JEcCRa5eEpD9DNp69WW9XijCYfVZDw2vHEJpVTuV8HTVKCsntE5AytRNiwpd6cvowhzeNYRQFJGAbyzY24upZj3",
  "key21": "2W5PRr9xCEVrjhfyv4zB8yEzRE2MQSni3b367Z7HZvNZ2qcTKv4wV3LxVQDfpyzydYjG3HeCdeHMCjqBTo6WeKJ4",
  "key22": "CNPXDSrQ1THJAbJ3GTH46T7mEkAcaBTEgv5njdAeWXp55w2LRNomod9gtwTsVNK6MKVrbhuGjTGV5fqnmwqxsEN",
  "key23": "4PdPUciBN1NBmuZP2edf88HSNvksgnJRUdRg5tP48yAcVXcc5ELFiVomz7jFyHhrRZHFutEwsBtN2Eks6jAgaMdc",
  "key24": "4yxG4j3BCWB5a7hs31bBeZ9g1MRQR9kPAX3NAQ3QcRne71hpwjSVAbd9ZwTknCPbQNZZT9t3UbeRhaGEm5GxH71L",
  "key25": "2jMNb45gPHtGPGBLEPwAgBdLqxiBMfvrCpVSCu9goSG3utpc8JG5y66EVMRaf2UwAMNQsLqmSY6HdEGMa1Lqhb2V"
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
