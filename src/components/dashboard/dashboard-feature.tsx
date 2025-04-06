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
    "4HUDXZUnazMKmQGxcRykd2YLrtUup83HTk4vaFjvinwRi12Pe3rJ31Epq1RBihPhznbvJCGW1aSshuTxZZApft1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YJ9RBn4hLwCdyCnNSwHANcarAsUDNocKT4ZaEZaLqgoZmCa4wQQFeVgJusun83V5hnoL24UcxatZforuLGjXeeA",
  "key1": "hDYuY4sWRwJMXbGEUm8nfSeeWJ9MuqUfqaGRfQ9LWvVckoNtspuoDjGAZUDVWU1fyAZASw7hzrrVTDMqidNd4oF",
  "key2": "2EyUzqVm7doSBwwzY1i6VbXucgTQxGrwrXiaVgD1HZ2M9hppXMhWeqTNpkDJAyj87oiQy92Tfm35ujg2BdKHiekq",
  "key3": "3FznrA93FScGNSPyC8Xu4gDteNaPcfT7d4N5zKuUKXHeGv9x4P6djBJDixyVNi5NnxgMnasJFARf6kvtx6RFXs1N",
  "key4": "3ASjuwx7sxb5vrCn3WfJCbNM3M6knbuikSjaHJckqyPZM4U5myiufLa2oU6qi3p5LD3qSAqYwfzVnifL37LTDDkk",
  "key5": "4MypAoPNeJ9xwnYZvaJoovJeahTevVusvE3uoyBb1xmb1Yw6nF9WMt7dKQe6M4ZsxxCCxFFoqDXDQtxFULrt6WPg",
  "key6": "2KswYMgfztdhGSxSC9ZLGuNmPsh6N4KaPMDQrrKeqhAHRqc3nRZWzU9eGgK8CyWWex2kM7pvRTxU7iGNM7furQ1B",
  "key7": "zvC5dnqFEm94CZMSN6Z715tQJEX2eoRgcvxQFdMb4833FZTxuSgdQP4jncMgEs2wBqtRLVATjVPayykDkbsT7rT",
  "key8": "62YJosZcNZt7MGMJiyXCAYxRFMVZQ8Fu8vJLg5McaXzWedM6sjq5n2yL29BoYpwaiekd5U9Z3LhyqYM7ntMPq2sV",
  "key9": "3EbpbApUrMs7KCut1EVvSpryzt89ETPgvyef97ntznFu6B8U1ZZxT3NsWdPgSE7JfattdcQMo1oNPRzHug8haDwr",
  "key10": "32Mky6WgGwqwYYhRTDi2FfpxWjhm3j8qdUkkWNdRYMX3DR7jfpxLqPEBAXemK5vBrLVRHmMeXBJ71DGGDKu4seFr",
  "key11": "xiqNrjfHpnCjdPbYgnNNeD1VyWJjNLvXefoHWyZsQcV6daZUCMGBKsfnuhUP9ce7xCzz5XgMEkcqGm6Kyu688j5",
  "key12": "59t57bS4GZmnffZXSQCzmdr6ijUnJdRTZLxgvj2QTxs4hpUnYtaJPepEWd9GS9sDCEBhr5aA9bPibNayowtdaLHr",
  "key13": "26Ma4jtatcxNSwHCdYsaMmAn5tSwZp2gNP2Zsy7CA8ZfoQoWzy8LYD8Esd65Mf3huhA7TuweNQEAq2K63YP1Bjb4",
  "key14": "5Mxgn5kv7dmEonGDrDzWA3B4buefjFRvAKkYKQZVEEyCV1nr1evMCjdy2GNsJascv6ysn1bBTcXyWQiAadh7c7CD",
  "key15": "3rzwHnRZDqbTCPZx6yMvN1S1W65CWhkQMvN4bCZHfrhTtHJFALmUWhfvQS5HvGjwAfCGXu2rArDSrUNysRkV4drh",
  "key16": "5E63YWCHUBFsyATDPJUA9JSDvUUxtZ8E1VrPPDL8Q1Pptj98nE2AZKv388W6oFFJgKhHuiLY7nHQkHxCMt7jxT3H",
  "key17": "Lnvho9WYJZ5eyJeUvEtt1hAWv1LuBY98Zdc2yZnkiHUUSzLkPn2djZsrUN3LfCGjcgsXBaMSxfLxfVUhyfdLN7C",
  "key18": "4g9GrWch6ACyL5XLgaGTAb4nUD4FDJYcRqabBy6AmjfxVoQGcHTDdWRDSxDTkLYVqqh65QWL57XTzBJQY3UTGsKc",
  "key19": "58G31nMC9JEm8uR12ZWUmTXiivsZxHiyYC6HQwiptb9HRGHxovDRsim4ytVzass4aeah2Hq91xxj7mMoLyKDfKNm",
  "key20": "3t7x5sX7Vh7f3G6MBm66ikpEgCwQ5wo3nYnsuqHHWH1wER2vYjYFeY6p9Ch4A9254yXBbgdXh6J6jimWgLjTA9Ti",
  "key21": "4p8itgXYSPzPwZJKpasyq1Q4pfF4b5X8PZ9HNje3eXBpFeP712FT7m9xqEj8poQJbK6Dzd3jKi66Pwie9RHCwbMg",
  "key22": "9F1JAL4iTc2Z4qyFjA7kzgccUAyF9PY7inGSCShRGQdoMswMCsV3kdWVhYw6eDXMXRTf1gsU9atHj7EBGDT5DYP",
  "key23": "JkWhcZvwrw1ZHwUeAXrckdSMwyFHMbmDXi5Gm1hqpMNnNFpSzKLt9i86pJacZ7RE8gZ3n5zdgK79nmYLZV89xkQ",
  "key24": "6adxAKyrMYDBq2LRnrdi6vxifK4emnzn2iStXybYArQUKfRGWa5UJft9STPzyk5SFPFiwd9wqwBoTJwrSmtWovF",
  "key25": "5jwmKcHVtjGyzkBjJzFvRayE7Gm1u3eN2Ztiz9KBdiTUAbmEzgthEzBid73Rw9KwKKhmFQmvMurGmyTA9t3DZet7"
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
