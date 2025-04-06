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
    "2cB4WbsiaddQcySqE3h8XHjg8cnPnHBd6afxtMTYHPU2gYEY3sAST732LS2MdaCiRC2S3KXPZWc1cRwPpkQVoQuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wkoofvMUFShkg3vgkwmihVWRMRJ8itdc5ERmvR86ZDuKu1fAGsVANwp4LBQ6akHRKiYbEMzjzVt5hJZx2Sj72z3",
  "key1": "3up6vajTtsqXXm66GZD25gEB3rMdMbpeZmZ72jtVN1pNQoJxpUmKC4VAvxgKPfsVZGfdBQ68oYbArELwSysZh35C",
  "key2": "TQUStNgQPBhx5aUuwDGN1kN1MxjUmCc7V6d2ymiEisGsneZnfuDz9DZLBuFK1P5r4dW9iBbcrgMkW72RwsNpuSZ",
  "key3": "3AAPtaosWbSPNYqZHVKxPFrnuYse2wJSkKFDxtPnwdgq8iN96q7ZAdXWmELZeA82ajxuf5pXuYM9RpGe867C5mNf",
  "key4": "31EsyUXiX5jx4yiC4QoyYrNBwSyai8gvxqw94wTxRz4SgWoE5JvTR2pc7nXLdktCuj41HAbEqEHyy2CnEofSRFbF",
  "key5": "4gDqqZSnm5MYqfnE6tYNcUJkhTwrATTqrXiLuK3ZnMuw8MG2p1hExe5j5BztS3qEfFgvxcjNvCPKncQRX4wpwBv3",
  "key6": "3WAYYFm7PbCN9eskz4Z6qpb9PrkHpnK6Y7ZZVXa9mRxEb172BcxQtxb3KicPGT3D9kvGBK7ufkfk13ZZKfefhK84",
  "key7": "qs9gc1CxfN82opbXEahFkFwa3CjSeaNqbx12MrYdwgcrN2KBex6jrzsZFuLK1vf2SFytaQJFAQiShSgkwuUAibm",
  "key8": "4T5ZiPpWgDw8H8Y6y24GL3v8UcYMpemX7P11Swo9p8yUZDkgvz5FJTFfHfASjZXouSeihah5gZTsfdvCyeSiKezN",
  "key9": "5xBqFyWsQbNJWLnXy7ucAxj1JJsEXRmHJieG7aYdNrC5cGxYo7f5WJJhns4gcWPhNsZKdfMR8bjWNgJVBnTeYhoz",
  "key10": "LyY8eumbvsJT9e3Vjrs6vArswZEYrQhh1VXCgKrF3Bxf4C53z1AWMyHSG9XTqGaWwCsmp6uLYX2NjWB8XRZrJmQ",
  "key11": "5C7dVwWSkAaM7Xo6Xm4aCPSEneTyxY75rQWFJSH4W4AY1DANV5XbQkVzGqF61s93akv9MUNwsWXQv86TZPsr64Gf",
  "key12": "5Y7pPEJocxnWRCV2FDdBWHzHn8G8f5qvwwTPhTgAWpTAXB8r21pjwFc2JQFpmRLNqu4MHRrUAAVB4MJMq6r5mzuU",
  "key13": "uK1jcbYr575CAyzZrFNeJ7ct5Sn1VnX6kbfRHxxoqBs7JuNySN889ErV2Bjco4wb7ZqZTZq6z51WnpqruUo7Y72",
  "key14": "hsmCa1EhruVJZnDkAqx6F2AvRwzyhK2QRj8kXnRU5i8WPFx3hpBsS8H6ig1duG9Cmw3awZPhUzQxfpMiTVXYZ44",
  "key15": "2CrEPp1HEso5vhjVK3SnTyXoe5NYqxe39nsFpttxQPucQJ2YkSLSyxV8jpvHjeZWLigBsDFWGpqC8jZ9mPaHP56x",
  "key16": "5Vb59Grn6dEUGGHmkQUrWVrHx7m6iRzPHadWtpm6GEytMwxtBisakDTWhYppGzSjYsytgtyH279UAm9fH21Jwd2w",
  "key17": "5kKMKRaBtzBvy99xM3oo8j6c5woRzdtxZCjZ9rqCBEaxiQEuCa7KZ2EiXEtCDZTG8zPYLmjmPf9VRKveKfk5Ew7V",
  "key18": "2gDFg4CVgxsn1QVnuqthZBxWJFFnzqyJSkRWPnrGvATdo8355zeS4EzeYD8ZGsmvZ7yv7fmcDaJEjWGBFKEYWmTd",
  "key19": "5urjfJ3E16fK5K2YxxHRaDnGJEuoRGpkDd6wpcFpxU3cUBu9Qv1KVu25QaQ7r5qPVZiKEFdFGwYLWknNi1UX75nz",
  "key20": "5rTsuQdkmRMVpzmoaqcPe1HaKSK2qfv8HzJVSsQhhsyDZYvb6LqWWtVjuNrHTkTBoN4ncEoh3BGMpHyDdy4KFwrq",
  "key21": "3g47K8PHuLggP2MK6ZsnDxvTW87tNrvz5uKrX64SCxwa7ZXBB2wzFKbKPFgc42V2LwU6SfWDzdBZrgFToByqXmED",
  "key22": "sDxmPphy6tS5pUaqU6SVS1PHai9XMpmTCY82DMQ9P29MzWd24vDC4T5tzddsJVr1VLeq979HJCMZznBDR4FECht",
  "key23": "45fwDzv3Bdpmf9NcgiikM8GyckFTUy8n8FrTumPBt5DsCcsuQugksgWEHopXUTrob8U6kSGBqqiw9XzGsmGhuUAy",
  "key24": "4vGJSnqwgj5YRfqtLJa5BmtPTyBspRcKxc8zKixYFU77B85Sv2Z792wMYWGUf4j8r8PcZr89Jucp2Do1q518qRRk",
  "key25": "51eNfRiEZmP47Esk72MbVV584oBKPGkuQ1akg2yrSH4P4GSVUCPLK4kVYrBoqjZZuvveMNsb9LkF21GBCG3b77tE",
  "key26": "3AMeosuMQ5xqG8NmoxPHaMoHjTzNjQKfohupBmiAQigPu2wWef9dqFmAdMJMNdiAC4MKZUQanDNr1e5fgmjZ8ECk"
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
