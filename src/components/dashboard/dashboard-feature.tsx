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
    "2EiYSTeox6sxnCZNtwnc39JhnwDvXCpbBTSiSuK9sSqfqPLoaw9TjVyuMyifGqTDFdGP8X35YcrnNW9VqvCPzdGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "594MKYbGUDJz7eAP9qjispLDW9Wj3U2hZhiCGweJZngeJMWC32DF6vagyFAeAWGgwgQMiqjCUizqwCLsLr6yLfq8",
  "key1": "536bYnPgsnsHkn84DoTvAaQ19Jjy2B9xgWwDqATGtmHpJ78JEXMjWkNtxHBqJxjsvJESVehrbrSNdBEPV28hrJW9",
  "key2": "33BmhigWndGoYnH3bWV7fMuYwRmQiPJrvdgSvBK99e9PkvutVkTZjrVsPx87vjTN4gEoG4nBfyTc1P4UEDPevnb3",
  "key3": "4WL2RCAqkLbgPHTrn6uceCqvxWJttiKUVX5VrVCTiSEYMDwnA5Z5srEGNB6q71u4Z9tdV35mRCLZka16VsrSikcA",
  "key4": "4tTJAra6sK3b2Vv4YV6GYFj1rLjJMWsNvwD66ZonbYxL7bUJXH4qMAkbtHfTgdSpLX9yMU5N4YfQ6KK5Xr92fRsE",
  "key5": "3FdRgWMk6zwA9nA5SsgxBcPCy5xrwsysTLBxUyXXCmfJKk9sxpRnL5zctKoYCjCrdtfw5JxW8KFMME6kHb3CDxVA",
  "key6": "32NswGxzgJKDYHXBQQ6fbiEAkF44fvR1JtFvJhdG88GiRzip3TsyN6b8GbeSjBGSUrGbgyqoC9B2vsxoZfFE6T3y",
  "key7": "nvjBQ5JKqYrV2mFAFfQKDVkvmh3xBsF9ftwCmtf2cXf2Lrds2LJmZxCDUeQ6C1ssmF1hFJSWfPw7BGhm51YbCB8",
  "key8": "5xNPnKfLkAnvT5yBPfdydhTipdwkzhKHvhZ6MmXozzxDN9zKGqoLJKJ8qsS9kaPS4u4mLdapfiJ63XZwi9xBF5FS",
  "key9": "545a5YR1ux3mhLLFxnLsyZy3o5uCFWQX5s1MQkLdaFXXCuci9A7tdu3qAp4V7QkPnaYktnA8JdLSpdbNnyvVXYuL",
  "key10": "3KnkW9viFD8GQos3gTdWfCdcB85CxtpbdrzA6nqLxag6bAe71cCh4wJ7yHhM4HwL6AxpQSjFHvV7J14sFsJqtE2Q",
  "key11": "HuTCVTrnXn5tLcPiWUvTYokR8SYZ6JgdLznMzRV4b4eShfbKQWfwLwqthjbYKFCrhK6eVnTAGLyjBx7qQy5LaqU",
  "key12": "5nkscac89r6VkqCzgzsAkNRM7QjUZbTDXkNczXMNmxmsjY4cZgraT5Y2LfknSe6d3Tp7ysGHPqxoLKmcjEnUYwxR",
  "key13": "4X9Dp7mdXVQGhWcrVQiiW4bAKats7RpvhHTUtRcJhXiLdDKN261bD4YfJ53hNTcjHEgwQAWkRamKrk6x1yFp5Uyg",
  "key14": "5NmekoKakMWipzjFyZ74gp5NMa6ufFDtHeSeHXg5SurxxnyPcSXSEjygafqMXoPRBqBzYaSMwTHfYZ8Kg7KQJgM1",
  "key15": "67pCgPPZYoX8d92JX1jeF3EJ3dbZ9xECT2vppUuUch4fsvbfd49MKYZhXUqfGGNQFLpPNPARZ1gimpg5Ci4ZNuzj",
  "key16": "oRbSwArAe8BieVZKmv6SDJ31EtnHHHTp86E3xL9Z2R1V8zg2KrofhPWD7kiAfowj4hkEUixqpAjM5AJhibbhih1",
  "key17": "5w6oPYVrkLPf9rZnqD8cxapqNjskvpWtL5xHXbrgsKL4URKt4x7syqEu455ZxWxsVHQq8FpKxQDWqHuJikbup2Zh",
  "key18": "5Q5nXwvop6rxYsBmp8KLRqt7J1eX64NskmCSB8ssZpJkRUWpV3MH1NXRBwV6kK2oKBzv7FFcy75qnHUxoWAEiz5T",
  "key19": "2ZJ5zddZ1MotiiiCtd4p8AF8cp5zVCnU3FQhKsgLvHQgVMZNFMBYzGtvMhNRScgfuGHaf29izH3gBf2BdyxaYZdJ",
  "key20": "5JxrxkKBbmuupHFPQTomkwQA4SsVfEYRbZzLTaL3DLRgKXgTtJQdVTTbkRBTxPz1RzoYbwAcVwZPDDMAyocsYNT8",
  "key21": "5b5hoKdaVnptKcJZiSTvs4Ab5nSt7VuTxhAwQZN8BrYU4xM82HBZeKfBrvY19FbexN2TmV916DqQZJNLXW4jAvh2",
  "key22": "3JCNSaBZti3uR9W3sh5YJai66Bboce8S3e4wyXCnCBxeX2hNzz9PGNndYwSzHGu7Jy5R1qVPCez2tpTqp7ZnoTBC",
  "key23": "2547NjDhUhvvM7huQfUFcNHUqP2kRCxAvvLL9xsb77MXnP1avcPinQWwtMhu83ritrdPQVoUqwfbktNm3ho57tb4",
  "key24": "5oNE2SWoSsvxFvStD2HAevSTojLCrnhkw1SFUKMJatj6gcJ8X4CHJr2yzcRx4F7G3EkpEEaCXvwQjii3t7XctkZq",
  "key25": "3XzL1ZqytRcVMT5Nfh16Ts189AzvsCRvJW6mUFNwTUCsoPziYW2Ex8W1iabjxksDvmX8yAqhmqdA6VCnhNDA4LqC",
  "key26": "3xhPBHqMkdir2jBxPuzYn8U4BmSzfiy1gFLHqKSAvLaRuZsSz25BCkuD4ouQs1TyKhHXHtg2QuWg2z8VdguhgKyt",
  "key27": "5ZBzribWbhjNPdHERkaWoFDgNHLGkk4U8Bak5EKsqbNdEdbDA4vUEknDysTsvdfZfY77v9LdAj5EgrDuB8W5Sg5P",
  "key28": "5EmyDZpjCMtr6ahit2FmhXkZNFG1nFmfGFo3tZjh5KksegMXjTL6t2kZfr2YevDYkK8zrJkGtWjsUuNH4oVEUMYL"
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
