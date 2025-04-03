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
    "5sdbcRZbuNmJi3XqJqnr7KDftKvy7w8RhCQYAio424MqXiqmjWdY2t6RfdSKJKNCmzdLcFwTVDCqDVoX7XAEhLRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUx79Xw9qTKwkyUDZZHtzsRzBUj35wkpWoV49W7CbMKCZ1Gea3eFZi3uGz3jyiC8HndrsKYGRAsh6iLBuFNxyzL",
  "key1": "3z3UBgdeGQc2C5BeBeLZBJZGJysTLznuuUQGwuNFsuqQEd7iXHozhVWANCyB7pmE1wmo2rBLDmz4BfgGSiVV2cKp",
  "key2": "4hgErZZYDDZfMygsxrDqyah7h2zoq7JhHuw1F3N9Mj43SWBA8zFcizLQaTMqK1Gf33JQbEgc6Utj7yUQoC2WzpJG",
  "key3": "4L5VxNxaXEV4ToMCBCUeaau6n8iQ6XCfXAgoux9W1kXxgmg3vEhMYpPHY6v6mE2xbfStvxXCrryzaMHsmFseCktH",
  "key4": "4TdiRSRi4NgcAAvgcGUMtPRh9oNLwTFLxKkiowvjwRNsf9DS59Z9x5kcUGND138pA21VGisFnNZ93EvFyobEeMFH",
  "key5": "4BwxbbeD7tGSp3FzrHkV142eGi7badNCxxSNiByu9NLJJXVnMA4bmwa5F4iqVPVVmaGfikpJNXxawpkcKBofK2Hi",
  "key6": "2MoeUx6DLoiiw3o6j11LdqhxeUZBEwcJbSb2Nizfvz4biKoCxAgus7rDY8tVuPvUy1WvChb7H4nPWwrVTW1xUN9C",
  "key7": "5sUFauRm5GXJNwU4jQZDCpfvRaxZyVo1aPBiZizehFzcEZMDGjRVVa7LGF8mpq2LU41bohJc1smNEkpz6XvFDhWx",
  "key8": "5MnG5grWZEMyUybhMep91j2D25vphDcztTY1qEXCaPM6Ry3a4JN3cVxZG6FX8xB47rBxRxcBfSCLQ4tqYMqZ4KZX",
  "key9": "3BmbrfEWEPTGX7VT6CEjt7GAimE52JoDp5Hs7oVs6GJgTgWkX8zFAqmgPUUYGJUp3GdL8bXRw2BF2u1HPDmeiLBN",
  "key10": "RG6JjuwSgSNyUvgNRYmFr4bUqqgeu5ZccAwgZ7mus89PmamyZqsmxuaBx1fCeB5s1QAa4pyfpceoYmKJ96jn3WJ",
  "key11": "24mviFJTAtFUJNetka343JkQ39fDP2cRKYt4DTcn7nY1qC7ZsSWwV5fhEnZcSF6rtt5wqW1VaEJasr2wpswwRNkJ",
  "key12": "4zmMEbgLNyrFUV5xpGFquv19bzVxHJmL8ScmQezpL9KvoF19yxieZMZamgBZxhUfsaBEBXiVoJ3x2tkqg17Y8XBp",
  "key13": "5T5g7EVfErDmQ5d9gRmQQmAawjLmm62fp72Y7peBti75B9Hg5VT16iXXsHdovArQga34JGve3itmVN9VbAXPGReM",
  "key14": "WkZbwrw6oZTouBkmEgFfE84CA4PgZxVxUnbcDF2XKN5sHEyXXDH4aFMddSuqZHawf9Gr6WLVDqiuE39wS1abU7T",
  "key15": "4SHggrQKEfRQxZ5mi9rs2zf6MB4ZArvT6cPrmbjpLNATB7ptHW45BRHW8UxC3etdw3sGbwyCbTYacYsXxanzboKQ",
  "key16": "4YDAAhXE2norX6HEBs6iuKHhG3e4kPCTg1nm8E4uUtypiKQAS4R6u3FLDpzFtBJaJXE2xRMRSEVHBC6oVcxxCB5a",
  "key17": "3mbj9gxFCVpKRT2D4uU4C7t8u9vj48UY1LMkPKAA5kTjVkAST4Hj2PfQF1LAtiaAFwyB9Pret5SLr7pWdP5QjPuc",
  "key18": "2PVfvsr2f55FgDs5zCMEdXwW3Qu9M2BeEBFYhYbPNuCDnSwK6bYumTgbziean3RtK5CUgUWPC2uKD6CHpXoFJLbJ",
  "key19": "52nGFxV6ZZB2dJtsyrqkKZM1csHzXMBKPZzFg7MGUz1cuUjAAKc7SxVLqLyQGu5r8sZXqHBPqh5sMj4bEsA4hiYR",
  "key20": "58kz1cWkRKktTvCsd38NZS66jAJ7S6fdF8vR2Nxfhfyweb43djhiePrM6MxBRh2dNCc8Tsk2bfd8cPxtpUuMQkSv",
  "key21": "4Kf9Q1p1NsK8XfpuqoX4fYNWP3dteXdWpdbsDFtnmfLRXG5uLdTAgY5n6qLEZYZu4JSsjP6QFPrd8g19FFHVwhxg",
  "key22": "uuwn3qfJXDHRDKfaiRiTcHwL5bz4wytoC36FxrKfC9PTL2zwHr1cP1VCKcNkPSbKUFNdv4z6m6utwxfTpeAoiAB",
  "key23": "3crgsq33hP99kQNpF1xX5PhSPvyv88bduebRj3ZqntxeBpQFeVtzCz2nqZuTm4tEk5ZbC564pDnB26xQUXgt9kpJ",
  "key24": "2TXjVzn4dH7jT5fCamPakg1JkRU1bweGBoyR4YusjLxXXuzE5wtkf8GevhmMBub5ZJrEvTVVveSkKRNcpgbEYuSL",
  "key25": "zYozVMswyF1CRdbpVTPxE6uswL3YR3gN3p1uHK1scwf3cdGU5aq9GWspDY2T74HDYWfveNCeoE1dyzad1g9Yoqv",
  "key26": "4Edrnav2aFy1Z7XLAy7QRso1Mp8fyuCiaiUSfAMA43YA9q5Giic7Y69ksHKvrPNYbzLzJEXqaGqqJbzHyfzsFmj8"
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
