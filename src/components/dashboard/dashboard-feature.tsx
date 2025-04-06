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
    "4S8UJ9T8UDFQEL6PLN8t5rJU7xJBaUqaezMPT892CfGLRgT5mqLZtS1Sw1uP99uiY6mF6BD11kTDeUB2LZv73MMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "347BpUbLawY98jdhpTXPCze3dXAfJf3JboKXyJ2jdLKovg3KFEeiKuctJmfJ1nyLvbRTUHWRVtDdxq4wfKePCDHS",
  "key1": "3UHsLMVqoZY7dphPboS1GSEuwsgz7mt1QHTzvtwTszxtswLKjumYaGHFWyRHA6o24YtYB2Vivk8di19THU6oenJD",
  "key2": "2EAZrUCV8xeNLqxqT3g5MhjvSTCoWe9UtZhubFUEvUcoQcEXzG3JtSPongNSVDtYHUAazR3zZg5sCeLV2rcZsFE4",
  "key3": "5vwrP9HttpcYHp7b6f7D9WUDtNYd3xhixA7pgoJL4rUWAPD9MmSiGPHpx6hBhTtxac9XX5bH9vc9bhcMHdQGqX5y",
  "key4": "4Np5yXFgVpH72FWesGy9W6hvcB4esdXfk8CraHRTfmACipa3nMXH8kcKJFcJPLDZ7Efj1AuS2FcwVA8emnt6929H",
  "key5": "3K4DrFSQFbXuP2WhyK951oGNPuRSkXqAfJh8JB1oQVtseEakyr9mwxho85RNy9HBVfovbQASF9HdwtSGBtQTygaR",
  "key6": "5A3VbUkc8joTLTmti7Mm4tXTmrRGVUapknKDWVnwB8Pnw6VEprdDvWBWRcu4wEEm1fDQPq7pJyKA7sSYoQ5odkAP",
  "key7": "2jZ1vsW3qmGXj7yTJfnjs3Co7ejkTx87ZhKzrBmGvC98DD1M7aKX9ZXHzv4xLeUE1y3PcRMnc4fpsjHv3fPUmXkU",
  "key8": "2f1w78F1FmaGi93SD2kuMdUJx9aJcxdW34Qc5AS5fnaz1RDD6EvN3xJPPqtxWLhCdntRQ9erTBxaF2qXUAEfXtFf",
  "key9": "JKPnRvN5okhTjwhNetfoQo8ebNXPeiq2sJeVbXhiUpXMPXm9cYPJv5DNmZZcWCbU76vHpCiodH1ie5mQCyHoAqe",
  "key10": "4suA6owtV2ThKtVfqYCPM49AzDSTFLr17uk1vuf4xQYRGmrmmLdQ9PDZSfd3epPhAfEpYCgJDgQcYNV4sAMWS8DK",
  "key11": "4w3VkvVGbwHSGyKM483XGj4osvhNCmg4dCcJXzc3iWX72Sdvewu5aX6h32ojW4LvCPgMGWYP1ZpFAJFimxQrtjGF",
  "key12": "U3i5hjWuAqAceiLAH9sAJDakcVNLuf4z43NkW3zjq7qbpqAfG8SMfWJvz5sr7xW2MA73HWcbFT6tB1hPxfJkma4",
  "key13": "5XbUd8HSbHzcNFgc3B5FRJCirt2T1tLBYrfzD1LzLxsqoU2bzXDM4J1FsxWVwtfXH2W6v8w9ghVr6KyDWkewrC41",
  "key14": "45CJ2cCaATh6uJ4odziMzfE4deCdyzW5jRoKgMTKMv559oMGPir5hAPc8MjKs1XjbkhjLoePWAfZeEsv4oFAwS6B",
  "key15": "3GgXKcTmwdUeUnta2teQmSC1o86gfpWTKHwVEguNbtKPFuCm6UzBsFEJgpKqo26uA8L2fMKhTzANhZ5PdyrGDmaC",
  "key16": "5wmyEKpHDQG8NCUz3E8VvxBiN6Vud89dp1k5CdEP7FiARAe1b2Kd6xnXT7iLaSccsu7uDbTNPQbzK28FiMx3KYcZ",
  "key17": "QtYCNmHLVDT7U67Z6ZHAsXBZUTmenkuxv3ccLKvoH38zXAmqcSfaDNFT9StUxqiE45Q91NweAj7KsDV31KZ7aaz",
  "key18": "5qTvsFbo7GAty7K5Rb2zYWQ9eUW77jEUTdCUmKEhJ3f4ZSJ85X5gZH5ZLKVVmkXN6Cg7Ao7YZ2fsLdEYkHi35Hg6",
  "key19": "3unk73Z3aUDFMraLpqbMwR2ciXkqrcEtrnVjxHhurMmNMwtikvW57sACnh4uCeZL1tKjZd9W3rRjpb2svnE67wbK",
  "key20": "2cH3aig2ngQN87PiMQrT5uTjQ8ha7adci4yPawh2sf32PZaofT1ANWt6qsYfJx98BqLSLoxchu7bUyD2YCxfSqsM",
  "key21": "g64LNeY7oZ7ddWUtCeeZKDtqVp17KLtkKAHu7vm44NqmjqCzASsSKsrZAoLGyNboothP15KfexBfVhbToFuEkFU",
  "key22": "3CHvo3n1Xj52odquYSaZ3bzE1sYadYHWK8mqZKxwQteXNWhNXbqKBo2SCkt1uiKSo6BpYj7AdZK3bdpm7JCytKMm",
  "key23": "LJWu8tMgJJk3Hs5KDREgsub7FxBVm2UH9uw8uzK6ctT79VMASwPiQNFq7XUUws3Axy8fCL2Ngwdct5LAVDSdTZA",
  "key24": "2Tjdaefib765cgYNXXL5TPjw5wdGXxJi42rk1YjFPHtr9zNFeHnjVt5sL5CXn2pCZ6ipLoWYCv6r3g4ZUsf1XBYb"
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
