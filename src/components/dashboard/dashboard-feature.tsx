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
    "5chSpRoZngJ2Jb9CQ9RKA37spAoGumut7wjxSWhG3N3zD1RAX1jT8c4UxH59dGarJAczUcwyW6quCJd9n5Ld2NrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y5RvaibMF1211svgtXhw1Cz5TE6fwTSJHDnFwHYBiPRKVAHUYarZwobtWU7u576R7dmvqTCKt2xE7PfYp1shTg9",
  "key1": "3JNd7XiczXGcuPyKigwZnB93wWAiPAX7FdbM8b7aKK9qHUFoFH6HCJMGR7dimejLzfTkrn9srMm8rUoio2beNMqu",
  "key2": "21MEWLDkLS9uGyUS34Qd1k96zfh2qYRYJrnCDXdoqdGEteGg9Cgor1QYQN7SV2dZSGbPHU21eKpJfznb66xina57",
  "key3": "4KJgG522imxLBN4hy4BNvsSym7pscTzcPnFcovdTsu2Qwi9drWs4obGQpeDPr9ZEqsX1r6DZGRivLkfy7zzf37yS",
  "key4": "63ixHbUB8XGGT99pukSu7ftxiAUkAKpUoHwHrz8UwVs3eoXvUa7SWMCy3vAn7RskX9k42pTynLn3WFoP6PMvJWbS",
  "key5": "5hwTkfQrFsvweYaENWdr5KNJMt9wUdFWH2pVBrgLSagbRFF53piVKo8tGa6yoihnWQJVnqQVroq1ggwwpJNytPQX",
  "key6": "sj1bRcC1nXYEYyZnNi2WQiz23viRfVHAvy9na32nWBvu7ddhYVp5eqqGawf6UpNh7Vj15JG96LB6mvr2GtYn17S",
  "key7": "4metKjQffqy8TtjuF6if6GwcfvBCM1NK2cAjXgfBrevhPc19S9KemB7NKT1oQjrrTybdNBsVaWpwmJRbbFDRqaoF",
  "key8": "4yfcCKoiAywS4uR7uvmhJmAmyUawuuU8uD39kWhgVeBQeWU7yVvLANdEYcuNhxJmByib3tbLzQb6iRvZCVNYPy67",
  "key9": "ELoQ4TEnqdB51NMA41DUipxK7q6K9gUi4kiWxHw15zE5So7cTwUR5N3avXQZm5u95p7WSL89cf5rs9G1mH8QVrr",
  "key10": "2afAMQg4T4egDEJZKiHqsGD8swCyZFixQs833RWVFs3opPMhPQghmQQTsXgy16uLrSk8JcqjH89oCMm3yorhdLvc",
  "key11": "4dAztdBoHXDaAtnAEKPHKJAReuMmuUyduYCZiMguwTeKVrSfwALzNhh4HQqsPiCZZLvBZ37m42WZmwnVYpYmtrzR",
  "key12": "3KrLbkHiUkos8GBpvVjb5yNnu9f3spEG4g7WYvXajjc33rG29md6FUCd5ksYTLFBYtQuZCiXU5ZTwd5cPyFDK33R",
  "key13": "5Hvs8jK6UF7oyr1QF2TWtqpvnufZq3bqiJiHxUCncahDidz7SUtiQztHVxhUQSV1dPnDSM6eYNjmkXKi1qhfw9Us",
  "key14": "wxjJfykBrSMsXcTLMNuqxvbHkBcvZdW79Zwbv93mbPFP7A62Qy33dWbNBJ2koaSG27biCG9z6bRSj6iB9NWHspd",
  "key15": "65F4Z2FN8XFzdCtoC3YdQ168yt6DFH1hoLfyWzEDTFq1yYVFvfkkZkTgz8xZRSFmvgqCs84FXZhuVm1je6t1jrYf",
  "key16": "4FhPNd7stDuvnRDtf4u1E7xNNAGFhMGMQcfWuj6RqD6moVPJqTZCRn9gK6vBCexj23LqiBHwQKUhieY1aasRkp4p",
  "key17": "3xJbHdq4ddZxUhyCHmC2VnAvL9qScmtoqe3raWQGGiVriCn7EDrKAzQtjBN2v9cuNwwiyVvuHrd33W9Y63sueLvk",
  "key18": "2Qipb8NsYwdYWi9CKgxAwyihCrUQEhPeZXPbCfLWcdmJVh9M1qSvMd3YwWpzgbyUzdx3L5qMoXygVgAb5sx9Cg4K",
  "key19": "536pzoJ1eQTyMqJPQTB3dfUm2jBSn2zGHvTe9KtqRCRFxJB1xr6sGC5qHKdfYjk7fa6VgPNdWGvoXyBZHmNdGaJC",
  "key20": "3gzZWpyy7ev9zJHTLB5MBdABYjLRNY3FT5xfd9aKK9k93FJB15ds3RPuhkRQRi93yCKydZw4G2fXHxLUQCi1widw",
  "key21": "22N8LMTqar6SjFExF8uz8GQiMdYyo27kBRydV3anm313XAwLUhqRtyMczxWMXbuRqWGxSPqUVyfGBTyKxtcBzk3y",
  "key22": "2B1aCdL7ApzFdsuqtEGh9MjkD3HzqZztig8AZVCyQoihVQWKp19BZizyU97uf2PH7xtnUQCkMppUTRLPJXtWtfH",
  "key23": "5V6BdnVgt3X1XuPjPEARbSATDCHbYvcT5EfNFPS6CFuGXud7AXvF74PHwV1SaMYRcC3jxm7krmmQJ1CV8fZfMd6u",
  "key24": "5Wpwz7XzkWvLkVR2XmsBBfKRg9Zanvi3y8tPYYjWufNWBrJPxPiMxBorbLzHF1HDs7Rnd3qAgLXuDE7Q9QRKGs45",
  "key25": "2mScFHSwAFybsfH9xgFDHsvhheshUpLQe37TzVvbZoAHityuc8SA6ucJHH9mAHRDqJ4m2dJsZvqJNKQKtjK8SWW9",
  "key26": "5oxRtD2LVuLz9wEqcQLkmHFqGkP18VLwoCxKg8kYEeA4XmpWAh4rnmiaJDa58N8PgbXQnJMBdSKxAMaXaiwukKo1",
  "key27": "5sYa66Juc3WZasS5iP8k5pNsU4LPzxU218svetk17V5C3T6iYFkYPBamxNrgbymmf8TSoirJ1SPTtPvRCh4vBmMw"
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
