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
    "eEB95vu8Y9atmYXP4U6jkDZXNCzmePEv1yjGMujCdzBP7L2GsmTpG7Bp5Kw5c3Xy15MqHXPbq8YAs1HEdd4U3Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vn9vAChhwQtguPpG5fgkm3AKq6QYNrJfg7eY77UCcVPauG96SANYW3i2fpbgEd1dHPsrPThWaZAUMMDMrDe1gMb",
  "key1": "cePT188Q9uqH1apBGRoGXeib72kwYmBucaAF1qD1rUzx6fhLvAS3ro9NWq9c39gY6i3z8bFqFm3JnMqAUbkTC25",
  "key2": "f2RHvFJGfXh4tsz7djuC1goJkTnsYM48Vm8J6SJfnHAounqpNVCsFVuC6joh6SRMESnP4cSa1ZkarU1EZygi6xy",
  "key3": "LabeW3yeNPNwCsq7Adge5n2P1SK8pPEcx8QsNzjCdxe9hg6tnhCgrt69ygiqDi7z7PXKdkdkkqR4K21SNRMfnyp",
  "key4": "2ZAy7sSJjo2PkVREiN39PphJMsV9XAmyvn4isdJT6xEigDpqXNmuN4SRMep7AwLVRJ9X8dvLRVRCbhGmtdGY5N7a",
  "key5": "23taWF74PEz6roXbQakydsXbVNa65C4ktx66Li7daFSi9RQAdwWeJ8Mrjso83XSifXxaZUoubQb9UbHUzUaeVG82",
  "key6": "3Cih7vk1HXEWC9xxt1ed6yB4cvtkVK145wvVvuf4pWeJXSvKXRJzan3FL8W5mSRWQUUGiBL1B7tshJXwZWPiSFi5",
  "key7": "3QhdQ9WHqhxQRE51zrHpuTjyUPoypR5JvnxeGSEieVCvUR4vSpNveWcrgsepN57FzgLeQSVtMtX9zBaMaak2uRav",
  "key8": "4xvErUiAEQTELp1b428sqGX5DXUaQ6PeUpSbxHs1j1ukP76C4VuUNvNDCaTvgTNRFwc4pbUCRrpwWVbN1Zm4zZL8",
  "key9": "2PC7wWReeBoB3xWm8463WiGqfPKycHcRazgzNfuL7jm67MEQ5negtokjZcK73ayYr74hjYnejhWYnaC8exCAEACH",
  "key10": "5WYXK8Zf1HA2zwVwPByTcdjpjGyETxH33oKiXdAv5puSSWahLCxRqRXhFCs9qThvmeNkrhUWkV6fjJAACSEgDj6q",
  "key11": "3EEiiYTZxU9niiwKZXJ15K7QrvbxXPwJUCMniae6EhVpn5oJtHszrnQK2FxvY42mxtdaZDNyrgxVDc2eVvbecbc1",
  "key12": "2B47LsAyh2kfeYTWziPYknmj8KYRvECR9FVN2CDKZn6TSkF3wPYSUanpLsKJFsGGtH6hYhFmDsRjxY47nm9BjqTL",
  "key13": "55YvbUK724mi7NQWw6FFYtaZgWCEi6M2Tr2VxeUeamvBuGv7cSAZNxJa2Sq4LqnBSSxM5CGHjUZTXK2FxJ9aoBk3",
  "key14": "2cSe5M8BKYqkw7QNpJ3BfyqDbqTvf8kPXNoi1rywHmSXRVG2WR7Y8NVY53q4TSijYCcX9va8zaGtFU52ZgbFALp2",
  "key15": "uCEUU6utDjvEAQArAqKqQ6DAcTVcYeKcoxXsPpPt8NpbV7S7MWConogJSdsxxXSVmAdL7LS7BxR2oo8UY9Z3Sjo",
  "key16": "3kUmzURAaZzDCy2vVAMi59o9keyF4FdECMjKb6Uo21Hb1C1smdCwvuC6QyFy4mC5Vii5QbDyty9b8o3hTCZWpVTh",
  "key17": "Ec43EJwsyELLvAysxjpxMivUq4ttVJqPrXLwUqu3N8r9h2MzVtCB97G78VVC11QadLP56Pf1AY8KdZkN9oaLMLy",
  "key18": "37FdB9Bjdb9WgJ7zixGUCxKpYjbB1VFz8Sn96yrRzjsafFHtXPMGVqnbJSoF7pCtKVnVCjfYHdP6LhV5ecKj1zqU",
  "key19": "4TBUB1ThxpGeApSMwLZunm1kdyEMwDiQ2fhqv5J4gTMrmywdLdATVJcc2a2P8ha8xSCkgd6Q5jhpR9Zhiokj8gmZ",
  "key20": "29JbhGJJqfCUQVivvGyAo1bkxBsSSkanB6fnXG1AvVQTCRWkYt8icpC7g4ynP7bWCCdL9j98AyMottLqF1V4vUhN",
  "key21": "xXdo3NfjfQ6txGpvF8hKKDiNGMXHNMhiun2tAj4H5JZU7pAT6XVrixAzwzmzDFM871Vb95zoZss38bNgJDt5L4f",
  "key22": "5JsVcG4g6jQgMpVxPBqma646gEGAMSarM6PhxqNYqFBU5FNTvrpK4k83y89gc9rKtUX8xDQYkAJd1z33aYqy7Sdp",
  "key23": "3ggBNRroL38byVZQTwyV7ovE536dz8ktu2agZEgWfN7X4MedCTejHFACYz2K3X9oaWQKfVquV2udySUpM8jqY6bZ",
  "key24": "3VSMZEkKY36FB8fnumCLnAWUL9q87M4Xnn9JSECZr7WNi3V4RaE62NFoBfEpVNyszdeuFdSKFMy9rDjTxYzyjezN",
  "key25": "5dpXd8L9y4KfFH6UL6xatvuPCC5zPxt2zTC7gYi3MJjrmZyBxBBKwh8VLF48CXAN3j5pWosEDQJAkujmd7evaLY4",
  "key26": "3hbjuquLGS6JJ6P9PZ3mtW3STck5mMsgin9qwPLAKeaBkQtfqFW1vx77C4EViqtG6yeJ45s4wZ5KpA6PZewAkAze",
  "key27": "4gJ7DTCR8K7JWNDCefkP4rBx5BzCJUxTp7ora6aWm3feKJAfMqJbt1Q33uH4eDRKKkgJ8Z1H3tk7A6WeJHF8SBzg",
  "key28": "2vkFqdUY6SLx3czeabyPr78WTNBeMPgyxqgrX4XpHc36m8EEKmLJ4nLxDhWUaHGVyqa9d2ji3hgwRaTCvAfKUfza"
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
