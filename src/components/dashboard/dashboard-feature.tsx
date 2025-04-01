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
    "3xY3BKB9YmpKYjjcdeCUzA4oZjq8s5s9jmxHMN45D14R2KuLwb5cRnjWbADnHkJXUnSTwpcWt8SPCm2kxWY2WnXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hkePBwwEMJXz4qM8BWQ7xTx3tt3g6SdavjreqW1hK4sYqLkbHrHUBVLwyhPDBoz31GouyFVgzT86zSsgvzxoW8",
  "key1": "SLKgLB4FMc5qRL7jQ6uKmk6teoCKcV68Nrig6nmWKZiw4dEFSsxQmcMuw9UGn1kxtvV5vPnrLdFroJE1pzcLSSN",
  "key2": "2DbxcA3XJg7QtdmC7jFciPDM2v1842oRSLkob448HZoesEPtBf3ToMoic9JLSo4QtX6YTgifRuaZaYNgyekKUWLj",
  "key3": "Nj9Yt3Dn7eFUR38a3xdYuBxMQPuuxenystUWpUkqbP3XbMBTeZSSvK61ESQejSRmyHjAXcSRgLPqpydAjAVbNz2",
  "key4": "4GZAc5vvBiu8iBGBiZ7gC8k9yT3q9aLDmsnV6PZFVhWBqRXHKmSrdszDr2Hjuv1RvQnL23nwFZrUR9SyCuC7F1jN",
  "key5": "5EimYeuzcgBi2HwJqCgcXC2u8CXvDKEKtHHL8GUDjq1VkCTGtk8fu93rfzUeQK7XJT7n1Jo1UcNeDnv4VWE4JebQ",
  "key6": "5V15czCpDcFxatB3cJveXnxkgHq5rFXEy7fVBAcnWq9G9YreQSCRMfNpp4co2gqK6RfDRUHziP1pHEUkRbfdxsXK",
  "key7": "KZZnB6wUS4HHxvZvTntEb92uRoHzdwszRKe9QFpSYStrEGb8y2QUNWG2yiEyhuxHvru8YwVF6j7weaL83AKtHck",
  "key8": "544c2M7Pwo8UhS9z2FRsrSSuL76APwfmfUpFk3FyRZfap6Z3HRSZmKQEnPGGXasky7qw5DoXWML413snHQ9hMVS7",
  "key9": "5VLaZv4B1RDRdpCkhRbgj7NK1o28aTBGza2LVTeLzrLKmqQWjHqPZup4TwBUtrcXPmTn7xFras2KhGqmrK3P7iDm",
  "key10": "5ULkRTG9UjPBdWWpkkftDnEGc4qWgoSU22ZDFLn5hLiZHBpwwYwySBPfmCBv6MEVc5iZKcnZ4cM4S2XDZnBZ3bu7",
  "key11": "4RwQvyBKf6jFm158bRHPdMAXUyx8MZaWZVT5LdAsks1kN4q4VkYUEZzjLSBLDuXiVmsFHCgEbTyxX2ahf6KmxXSK",
  "key12": "44aQYhmU1SbMcKMkFrQSF56YmDViqh4dsZAUh4tGRo8oEtfEeKQPoCEjaLpQdwsfDn17vrHtxuJM7M6DriD2Hb38",
  "key13": "t8fxHcUj3gW3nz46FDiRJpTCWnKgnXnebNzQAaQdG5tZiCz3h29GVL7UfQWkr4Q1Qxmgr9hmmx8JgjTvN48hTzs",
  "key14": "4bRHcrArR2xZK5HcnuN2EnMcNzA62sXRvYEafBz7czMKgvSJ9zxgE7DJcCuFTrL78uyoPtu1gaJMnLNceWdgsRWp",
  "key15": "3kYxvfzEC6TU2VFSbhANUwDeAfPB34Av1B4DQ4q35H4epqFfK1tKKrq6Pe1wfpybA41Dx7LMvEKGHF5w9F7rPRbF",
  "key16": "4Pghtrj2oYvy95TXd7YrS9ytzmJLafYC5aAr3MrWWEQfhPUGHtV1trekQYBocCUCKmQ91QEAFD6t34QusRThKTB9",
  "key17": "NxSYKjm5nztr8CR45pM8pgzSGoES5ppoCknckwLmG7cxonuYG48wnv6HqzessGX5EDTGKFnCpLQfiFHRVisemW5",
  "key18": "2LxJZpsL14u6rZW5XdgoR4prAM7qL7gBWp3yYx4Vq9RpEWVmMa1BqwYzs4uLG24vxLwEnNjEM2FmSYaZrjzUqLxH",
  "key19": "55adLfE9nubuSRnveMp38qT3YAF6p355Pt35PXU5L9c9Qj8LfGX6zvoUXvjn3xECYFquYKof7LFSRNwotz4BYwYz",
  "key20": "2p7TuyWpAojaZDFMk4fNTRi6VvqsN85WB3EWnY3ZL9vGw2kWPU2ULNABCuzuukWy1d49txSr67Wp4jvjCnVJpmB2",
  "key21": "BExhxcgErdMVQcbeCVhkFPggKTAHUvN8GpPnT4pVD3tZjXW21Bx8X3pGSQMb6SZR3XNABHHQbtLbkcdvoxw38jo",
  "key22": "4ajJdG5RzzcNmRUyAnk9CYu5fepfftxa6NvuoUYWqFy5Bn3k7bKHy4FbHXdCyydw6PmrpDVenb9szoehxzDpCVPL",
  "key23": "4MsgqGNY116k7zvda66nquniMVZMR4G3QVa17RP5xDwLbZiianN2EHddTfU7DUZx2VVr9Ear7HqtjJFeXSdcUref",
  "key24": "xAx932MhRkZYGFvaG6tgh9yx5wbSWyQhBPQBUzpUUr98Zva7NAZHhJqxnUfomQfjGgUqXHxt32cJ2kV48qqQF4u",
  "key25": "4pKaBiGEsi1WL3ULwXtEkCZhrHVordPXwZyWVk1PraEdAnjELu1apXkRpj6tF712abHgTvcT97yt8h2joSxSVfxV",
  "key26": "AXaoprJQHG8vTxsHvfAT4FZuhKTbAoY1GPbGoi91ftAJVLSd3kWx9b8xqHUbofEuqqqzqoDsfk6frWCxnPFHGdN",
  "key27": "rNADZGoHNrfq5JLtnYSXqrKUMLxVn3795s5NaAcCy6YHjYZVpvTSyHwAZYUNvQGauYgVAZ6TLFPqj8WPoHRuDmL",
  "key28": "3uzDNpPcy3VeCAWT67usTYw3kPXmQ8DXV5M6gJt3Us9qPYu2ybR3qCA4fsPP7UoVx9x2ku3KftnnT8UJpuX3JD1G",
  "key29": "58AeMQGch8mK12q3f8gxJCAJ6x3upbcnmi2hjX2MDUk6XBCpEZpdT3t13nEAJ5NS1RUf6fgnLWeeuzeRHiW69tH1",
  "key30": "tPANWRmAHYtNeqCPNBThcmAmPmRe9Zok8itXCXxqpAKuPA8dssCww6UqixD27Zh6bpkWbC1t25fSNsUo7uxYVxT"
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
