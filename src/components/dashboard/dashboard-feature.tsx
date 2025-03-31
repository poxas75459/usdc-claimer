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
    "5BE6b74dJevD4deN188RnwvmN2MiiAGXgv7VdxscxB7jCLYqtWCs67mNkivHMQMWiCQmzuGd4zFw9vLWB7EwD5tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "627NoPTc59UtDUN2cyrDSj8xV2g41scGjNju9Nee7vvwVvNzuUpboXAVdmxLx3u8Uu3D6h8c4vnzMRMZdpvaKoLS",
  "key1": "5LUiyFVDCmcfMQmomoiiwEBazhADHzJsQaNTKFx8r1uzSwqwUGYLWekDr1G5kx6rxB9bNhEUAWsVC1pdUVxTbPFj",
  "key2": "4vgFmcJArMRZ8GwoyZXannnmsE5qvZuXVgvjtUqJgFqTzF5kofBSFQdWu2G8TCxCi9X89y2wippsfZrWKTF9qM8E",
  "key3": "vB2kxBNEcVKYfFGzHrG7VR1s6imuULJaNpJYStZ2NoixMTvHcXRqUN7xN9WNohTPMSMeP7vFMyAYvmVG6bTXbpe",
  "key4": "2u6m9Cj1wVRMGFy7kKH74VQMY3Lt2E7vF8yXGMDuKMPC7Q1kd7LP3RxuxpMhH9USpvwUpgWbUi4pi4KcKqFWUNFP",
  "key5": "4V4puARBNfb4tmVd6sJdkTXx4ALk3ZpjrgabHN2teueuyhQduWTjUBK1MgTvK7pWyC8r7EYWxsZniXtxvgCnKrBW",
  "key6": "514TXNqHRk8gRMmg4pA99zD9pmY5uc8MGgpYp6kivsq4yKCYyBrEQqY3v2mbnXBn1DcnbJzkwBr7BR9oVZfGZT3v",
  "key7": "57tg3PKioTf9p3ZyARNLF9CvD423c2iARhST7ysSav1Z9hnWBQfK8an6DEuD9d99KbPn1TJEMcfHvcdV773FvTB7",
  "key8": "44btUZTmRvcTEhEDzKUT79cCkL8mSv2ZLXXEhAFvTXsYM29C844Wvk1QkXE2hNKpvkdPk8BtssUSCwHc2n1B34Pd",
  "key9": "26CDqKQRuDY7EVdorofApthH2ePsG8XpWophsUoZ4H3HrxmAamj9Ypgr91v9b6eKWr2MU3nwSGPHfC9FG3YLc8hP",
  "key10": "4koUSV3kTtc67JavKeYCi7woFSWTsNqp27qQPNX6yDrz4RKo7XETQHch5c3CpECPyVhbTsLa1i9os23bA8LYbC3V",
  "key11": "5FBdp6Axq6y72fKMnSMe3KCdPVtM3RjKdLUtcmAaarB5PfAJH7RsevSsLz5DhF9FPeR3SwubXRxRZLLJvb1t67i8",
  "key12": "2Mtrbi6udxvqitxPbxWGM7knBFjXjtShyG7uRTDPiVgKUeFcMeX335JPuLHvdWX3iULNFdR4Wg5dN4AY6i9KoV7y",
  "key13": "5FUsv3yV8KJgvSnpQz8r1WqJ92VyXnR4qbahWvoQzqk6rRZf1K3xs2874pxgHJR59ur1yUwA3dHvif9U8L14g4DP",
  "key14": "S7Ca2R5AV65BWMs1w9TwCiim2JekwZDbzNoZoEDJwXk28qRGDytWQkLREHsUC4JPswhnsfPhPipbCggYvBYx5h6",
  "key15": "5v3gVuBMWR4K6hn5UemAbsnekxSAtWMYyjT1XA8ZazqxCcWGMeTk37ALPKCZBfYqLmwikCyAcZuMZTLEEcFdJGC9",
  "key16": "4T6QfAXT4vUVJJxfCa72WHf74qxBaXte7qxx5oz75rG5zJBjrm6Ffw1Cgq7Z1RpDeo4qVbDfSLeEfiC79TW7q4aF",
  "key17": "3KuDxh9KDBzZMeuMuQQogQoiEaD6xjMPtHBovu6nLvx88q3MdfP7EzjSUqoFcYCMva1BtBcztZA1qRpywyPYNf8w",
  "key18": "39YznxGPQi4r6y5qebxJBn8B86MbVA2acnhTJxtSX2J8TQ7Gz6e2vz46pgzKsw1HnnLCCuEs9nLWAcoXHvCdsfA1",
  "key19": "5N7XT7neJMNhYJrfWotXpqbEYQLDb99zySTfBH54QrMcH8LkxjJ5njSnExQirRM7Ne3FnrRRLR2GfSGftxtfQfrV",
  "key20": "21qmsjjnLnkroWkL7ktcJVEZutzsjLXNWGF3hPsR7QV3vaZJEtfrGRBwSkNWgHubEHTJzawYogiRmB8J5tndjvPQ",
  "key21": "3oxPCaCxAC1TXA53JK9DL4pMhxeFbEKky88AWG9UseGNqPj2F2tq5D46ktD6N1ehkqCtdb8g3yCiDbauw4YTo9EA",
  "key22": "5NKHcmAMCr1QmzWawL47HsLp9ayeW8hqNwvk1eRm4cjWW5FZx68vmhrQt6wBBxdakom5v4YmEN9wMqS7H4RtikkD",
  "key23": "4vUs99zsC4qTM7MQSjGBddCdcvJiVzXnxn12nhGhSpmTFtd4SnAUQECfDJt2NDmfy8RRrjhZkUQaqY4561CZi8Re",
  "key24": "2fgXvypgse7rmvWmS7fkDz6SBRZZubEZ4JsJg6LhTxbHvDg571T6eUjL9Ucd4n7p87PvUuGikDtYk4YAcvd8nVNQ",
  "key25": "5bjLzTeLMyEJQv3tu295w9KQwvxWCzrt3CcanHATkrtuh5eGayagaUHYcCommcf37tgWkGe7yCypT4xgsUruKJMc",
  "key26": "4ES8GSbBXA1hgLE43KZkYB8kRJh2USCMzb48CJinGbJfR3V2Mwdx7uRaSGNdSiTVMQKtyvrrpiD7r8KEjsXLmpHW",
  "key27": "3JZP3tncK7eHa9Stdv62GrZJx1YAgqhzkq9F8ZyZxeopHE9hKkof2iFrpdafkZUCAFqhjqmbJwxqUt1qygresWwu",
  "key28": "553UukfnSgGwkJKGnKXQmD2NrddcrkCzsNNSSEP3XwGkWCQ8Ln7rWNmz8uD6HMNYqZxrbUm6XJEDFruB5jpBxpJP"
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
