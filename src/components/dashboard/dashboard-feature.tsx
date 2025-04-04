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
    "2BuC7eqfqnBLSwZqUV2VaFT3PhXsLVnqmhuQzVyb48qPo5ohfAuHKsCwtgkXguoHrJEVqeEysCVKXVX8DSQgPEhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R14nB51Su2rBbCFrCibFseE7n2uQejPR6bfBDi2FcjjGzAnshV7vvDUG3gEPR7FBz3QQx8jmatoDyuRtuoobK3c",
  "key1": "2k3SXtJXdfMvLedNh3riRZm3WNUB4WAK7WjxRe8RFspSadGTm9Ucx1XW4qDwYkVat7B8u9oQeXDgjnVnSp4ESTNQ",
  "key2": "yK5oVx4PjrWp3sCbwdSVt1Abk5Wucrar1REyhJnKqUT4CzMnGnDUUoYqSRaJjBiVKTvFxZmHPTfmnJ9uMyAAfrR",
  "key3": "5B73JGkPtuxAm8f1mVgyud2CcA9697wUFH1SzVjGRhkm9hFk3PnRoKbkuUbTSsbpgnF5bE96apAqPhRoVkD998CL",
  "key4": "4DTogow7tABh7Xjt59eaYNEtREaJoePMKvLGNpyeotA88NredEdtGngNgH9dVEiUYEaQHo62rQSiNjG9zQPt9ji5",
  "key5": "4ccx36cDbtmcLjHsKry3YdmAU61qtNh4hPT9jGuu3hSaQsbUFC9E4yTMykVqLLBUQ4SMSddLfWZdAj13PtgirDzP",
  "key6": "w3rAYg3EuQJ9YEqPYWBuzuDco5SfaZSKjFHRvajVxQXKAvpJc15CKd7A8t4Fqa9p64YFyKSndnASV4W1NVNwzBq",
  "key7": "2C5PQ6Q7qRnSoeqJhnzfU3pG9XCG6Jifj26E1oAt1Kzg8ZTe1oziHUjxZ1k42S476wsVqZ4WHfVoJRZQPeZWqLkX",
  "key8": "5kzqKVX7NL8xnk488TxCx1mkRyVW2KLgHetmTuS5LDT2EHV617VbWNyUszecrHtgNUCcVc4FjdjJx8CTXZC2m67q",
  "key9": "5vvE6LsnoKBktPnFrs2NRAS1Yvkx8PhdzLe8h7EEdXTaiyk4kTJx6vKsHzXvPG9wxN23oCcFD4MNyHjdbU6doSZe",
  "key10": "2EdLz5p4Pnu8EnLtdWQ1fijb6fsCzcZkBPTX9PQsKtqNZUkk7AJXLN9qdCR2kpq6Pu9hAZsM9r6nZ2GQFfkLhgSn",
  "key11": "3AvbxohsvubK37VBAb5nJjYvfMGhQDxqzCbTKZx5iQvQT4bTH9fkpPSk3wk3QMF9dTGAkgG2cE5cn1Geyy7uHftM",
  "key12": "2Cp6HbrAY57auNdJXsJLTpnCXk6zSoSgnRex8B4L4Dn78WzkLktZN8G8UvFKrP8DpdnqXnx1cU73hFeaK1MSCCNF",
  "key13": "4wFGRWq5vaecc1ZgYzwLdxAGiaUnzQBYD1zqpRKFJcYmgyNwVUexRrXauf5AmfPEjSu66EqJCCGd81Crimsdf4UB",
  "key14": "4gNpAMUPcpTHJ6Pc7mS4JE1TzGo19KrdXXjb9SeB8JzhaYKNL1QQ6U5yM5KNnBKkCzAszzWASfU4Q7ZcY6BmzLze",
  "key15": "5rtJAPAio6KGZ8XTT42EkY4jYb5xAoFJ8cB5cjCCPTfSHWdiTAFoZ9UdXkDzpp9NZSRoK7tpL8gM2w2WimfU6XGZ",
  "key16": "5CCP65YJAMVUb6H2696BUUERWmySU4m7xA84mejeMrEZ93h8Upshng74AQAzXi4DFGktVTTavQREUPmR8pQUiZrz",
  "key17": "v1Ze1fX7yNzTMZ6KUzStAYKkgXYqu76uaKr5WMsfbforXmqPeZr16fpgCznq3JbPMNoR9a5odp1FRcuB8qTeS4x",
  "key18": "89Nzd4NcRtaNdhu2NDhFMdus8Dodm4TKAiVnD6S4g25nUCoRncoXjj2TjyTfDhGTvqZH9L3kwi7VwK4E8L11db7",
  "key19": "32Z5xCPLewT6TgkxvuLrDLDYPWgvQH9AJ7ZMBgrifABTH3FXR2d5DqabPK2FXiwddZksBnKBTgSD7fJDzvekQRbp",
  "key20": "4R5NMKqrR3uuktouFnvRJTJziRGrhWdokKmsanj1hj2i4HF9miV1Fr9sY1YETsRfupcrADxLKcyoQ12TkYW7ouL8",
  "key21": "2PZqoUAEBctX78VbAmT8kP1VBf7tJWxjfvKk1ZTTnhxf6EJmDTKxF8pYRp6bJu922m9xzqaeU99zqXqziHRB7uJq",
  "key22": "4KBshpSsQ9Hdia6BMHpYC2xdf3xZYNzwgXypwgmuwsBmTY6wFg8bp7sTGSpSx5bKiXUKRVWDq6QFGk45dyV4Tttv",
  "key23": "3YKEM1z9nSEr5BQ8Wq9QWBSENUbGB5QNUGvkjPm7a3NfGJeYDftHy6yBmUKe4NxBWBNgXnoFLHQncJcUZWDo7y77",
  "key24": "4YRz9EWS7iVWWzrB1Nagnid1jDTKQUTPBGRPiB2mSUxUwQtJmqn23GNNnWFzs6vgzRJb4Dn91JSXLstQvGgDSX6w",
  "key25": "4DDqabF4GGFHnAhRtKtmoy9eA5t7DSUo8UczuJVUsZW9XJg1B3w2LqpCwe3FB8aJKrtGwDBpuRi1LSpq8e2pHsaW"
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
