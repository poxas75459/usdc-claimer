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
    "VyrUanvSPXaHsXY9xHsuCj6GSyhfwR3BXB7bbY6uVjDsQd2TxyVjaSFaHZDPNzkrpbUUvxwFTr4aWAzsHtgmshL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MmTXXYUaKX8YPmFVhafqey8t95cLqXbsUApqttsHh7SEtNgctxbFERVMqNiua23HuaoGShVt136jzK2mprj68GT",
  "key1": "37oz1PANYGd9WvPtxcjr2ct6CoSqBX3wZ5PC4v5BmK8nNX5LEKwqjGUttsjqBfurrmLNZR5rJ329nVkKTM5kuD5s",
  "key2": "2dsWuTqyybqNR79uxRXgsYh8WKzF9bqJ72RWhC2snLfeePfJgFREEm8MCeJRpp63RVck53AGj2mVdYk1e5vfMHT3",
  "key3": "2s2HCpgtg9XYRbk3xcpYVCtqjzfmdhbZbenB37vCqaDidTmo4mYmtg7RbVNTdMH8QxYYVuLNyb2q9nyZUYRyXmRa",
  "key4": "2ZepC26ABzLh9cFCE1rHmPRr31PSBNdXJbmHLh6dG6uKf5GPQZAhNQgvqeUCiEUVsFutCiMtzymQtdr37bepmkax",
  "key5": "2id2PDUP29ewSeTjtZuurAR6goQDUviwzBkLRBA4tLWosuAoZ4hksBhfzuyWUArnqdegmcLCAGKQxcFjtHU4sacc",
  "key6": "4u6MGjUEdVAvkUJtsyqobCPVGaPgXHqYSbfHTSA9t4e6sfdZWyxisdhm6793Avtf4qeM2gLW3LpWcvqymodhB3Kf",
  "key7": "3hykXa7Z46nq1Kui3L7tbKDmmXySQsUTuafXacceXvHT1483Yd665cqe5K7hpjxxRoALahPdp9z6NNywCbjLsBZA",
  "key8": "4fpQ1gY2bVBb3jULB9SdCsXp8RnH3vu4wLgB7628irf1PwjCG9vyRGkp3Gj5JyJmKnu7WEhUb8ah5RnLvyMNYZAh",
  "key9": "22s3sDizL6FL9BMeSrnLaNa5j9nYa1YeAmxVkrAPfQTaBkYvm9MbxdBnAaYtU2EHPL5Sb3y8Y3FYYYTp8rwWaBXk",
  "key10": "okmdMYsA5kTdi7GzFp2Jruy3gFwfD1wG4gk2g8mp1YbQBkVdDPcmFkqRu8sry5aLikKZQrd2YQqyfPbmfSHXurs",
  "key11": "3NGv1Rc9144VgyTEsfunotGf25KVUaUEsm3ncuZyE6KJ1P8AcQ7e5YGwzTrmoWEcuQ8Kj8tfzRMZ2xLY6Ne8w6SQ",
  "key12": "4Lc5KC7vMBZfNxFi6WbNSbn5FgPPTPzhCL5sfiJHBHrtEeHv8LuSxDUoYjdfbrz7fkFpnSGX5hg4qiN4C35dccVZ",
  "key13": "2XHEirSi3ZcUorY6fKLKu5D1nNThikvRG8LwdFCfEcvcggvpe9665s1rKuQCtLE5obeh5M6W2Rhiess1qsf9eoXE",
  "key14": "35MGgm8whvsepAXu8QzGBz2heKryxGXg8Te2kTmstUEL5whh7HrHevUczHzFBwpxadaVxSZwN1C6YgW83R6LQFqb",
  "key15": "2BYH9AHSakWQ5LMmLK18C3nFWPSKJLNiG7xJv9N51YrnWuQRLX1qU2DqXeSURF9as3vcgQUDafZ238BxuXGKwehn",
  "key16": "3S9JYwBe1XRAAiszpqRQRGizeas8QP84FGW3qNcWo5bChvRG2fGtZWw7GGEG1YEBevNkayoTw3WFaA3LeCLPuhNt",
  "key17": "2isiruFQMXGzLMC6PoCDQ2XqtM3WagQPhqQp2C5i5QztmbXWa7Nzp3Ya8Sz7weAtWJnhcYgT6fD1PgEtyd6ajKoD",
  "key18": "2UvWRG4gvqt9CvJrpCXtzdb5xdDrtd4NxjJNYQTprSimRRf6i8cYSJcwtm8ZsTdR6VyY18bPYdF5BCmApvNPNJo2",
  "key19": "2Z3xjawt932325x2n39c1ui5zUS3s1YqwqX3jwXZiCeJVnYpXCxoHk7WpJDAVPpynRbAadoiCKeUBUMLSYJpAk81",
  "key20": "PU6gwnfTExiWo7pcybwMiXDb1zdTo58sNoPSFJPEUpMVECcPiq9T6bLK8JhRteXXoHKWAXsyrVWrH2QZsA8KCpQ",
  "key21": "3a7Fc1Zedvyd64vPjCSbnX2hVve3BEDTEyeYHmQdyd1Mwu1A1PjuEtnW5CguL4tUkCj3ut5QmV3QaTnxZXi1t7rH",
  "key22": "8npEQ7EqTYu8DjRsG339ySC6z4ZvZiSAstzMN93VKtC6PrPGHfQrbNsMNZ2XS1MB55oMhMCj1bJXtQKZXyugeHu",
  "key23": "2dCC9WKxkfmZsFt6VRb1XBVXUKnmfTsybE5uHv6uMBRPusPfztxFUdyJi6qjrcb2P1q7nh6zbt6MK9trezhN8G5A",
  "key24": "CwsMkMxoUMQNxNSTX5ppdDY7eNC4zNkL4wRVZTorwYxEKrmShucfCz3FwZsm83dG1upF4Br5X2upZeiikY3cytE",
  "key25": "2AcJWm6MkCftCRUx4CFQbcLL9e8BumNRn8pTCPEpnDJ8xkD7m8My64SqWJsMQSH1QbEZnhw7mTYUX7TKEKhAhYHc",
  "key26": "3rubi3EngmUPBnow59LWLeK5rCURCYFokKQTDUvkVhriwQAtM2WVexwqQyVjF54kVwW7rD2WhUNLTmv9getaco6Z",
  "key27": "3GoGEhi7xexQLjsFdCMx5ivnXs7W9f9UX6TveG7gj98TtCqUtNTwnrA9HjHzHXQznHiVGkK2MkgTeKGdPsc2pJdK",
  "key28": "45m1zGDg7RZoxyQ6SdhgUFDAHpiwWxq9GQwsfpbpsrvfKNvD21tsZ6DbrM13RKq7xJZcwG7ta1SzxLGzTU3Lipu1",
  "key29": "uZukiRppFP1e6Tcb8iCgZi7uHQiQGUhauEeY5BTqtXhZusg653MreBoFgfNpFvw8max5VXTCqRBC6hDAMqCCKfR",
  "key30": "33sM95Ka7rj4urcRzS6iTEXeavp8R8rxkjxRLU9HmfEPQYuuUSQHcvKKN5SHr52GUC82dwmRcZPhKryQgKykyDDd",
  "key31": "zVNQsVo9ie6zawGm2v7bQf6hfSCsceVbzd16yiH8PFHTnTaHt8WkF85YDpUdbQ9pUhEM51jqF1LrDSscX7yzKqS",
  "key32": "5drqjdzo1Bk958Hin6Z5K4vx4LiUyFxmP42QDNSqXz2dm6WVY598ydAfmoTuNyamPfxPrhpqEDhZMdux7gzP8WSu",
  "key33": "5DdTot5htELQJ2cYmj1ff1LohFAKYDggTKfFhQSonRQ48EWzKsPxjU19SceojpuyJyoStt8hen3Q1fD5t4ZhsBDW"
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
