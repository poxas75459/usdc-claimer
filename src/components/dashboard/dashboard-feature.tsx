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
    "3KVV84mMU3NQyXCY5NJUgtJhR5C9eo1zJsa8vPj8jz4dgDiraHzdrtYJRyeoJyuwna5BYmwjpwRWdBWoLMMdWEBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "afHL4vtufozTW8W1PHy2d5DaKFnCGdQHSToFYNePD1ZLzXDMwfdoUm39v7XqzGRToF3y4zATuxGTL2NWQ1VDFkz",
  "key1": "MAH7RW2sdvAZgKXzjFLuqYeLfwLfAYraFuBE4voRqH6UQFkT3rddRJKh7k3S1txgCWrAXngZP4n5EgwWEUxf6oX",
  "key2": "27JTLB8wTiGSvhAMgVHtTuyJ2wNb1VDT9rwgihGo821v3WLRT3pXYF5xY9kkm5FmXdDzKAnFt4FKQhUUNaMRvv3u",
  "key3": "52jQnxb9TZCACfsCJgYqUjUmL6aw294agdcNx3ExpT7mW1UQEXGenkyV9oRq8JkDg1FfnQcNxr6oUMEQjGAep21j",
  "key4": "2nXKarmzcsnXavhFaYXvEWj8ANNbm79YJCwtbFdw9h5VjWfy2v16jLN68ward3TQvCKzgj1Dn9HrUiVNaUYXbt8S",
  "key5": "5rE7CHiX3TX86xYQ7G7yKhg1GpGpQJ6xt2Y6y59DurgbEiEx8Np1Eg6S9ZHo3hU6rPSyCTwprkBfAqrVhtgT8z3R",
  "key6": "5c3ShHLxTHhc92Rq6z2tPpNmCjemG3Gu56twNtJ1H3Adc1goDe8Nj2EBmoHy5x26jUGY276K9FkB328qdtZvHLWg",
  "key7": "5EFryeep4VqQFgLRFnBqmbyYUp87TSGXsF6jedo7Zsy5wSJ8qFRURmth5eSAfzD5GVk2AwxECcZKJAsMGYCu98CA",
  "key8": "3bk1cadwKrvogTqxh3ny3p5AJAsC37VBMCntDAntVkfGnhp7y9PvxW7cVYQuLcoNopXHVL3PKYGugaicYtEaLjHY",
  "key9": "48uXtFH9HKzhYPvSJPk5ufc4HQn2KS7DnjuyWbqezRHcbrzQb8jeAyv9d6rrDkPjox6AAeq3VEL8AbuTtyVetj3X",
  "key10": "4FfT3d8Rqcei5RcWaPCdiFhiE2rnEZALYAScC4CBFqUs4eBnhx8ovcuqPLRFk4b6FHZCXLVXJk1FrVnWUfueYRdg",
  "key11": "2SZS5dqpx5pDvSnnsfyNbRUTutoAK8KXgwmefefVJzHoZbcKTxEHhkCEeokG7LJ1ysHi7J8j2XGNDxorBbFmxz1Q",
  "key12": "67rULUoJnVQtAVm8zRE9fwMxWj8RhwUcjPGKQTHMGKLZGvn5c3ZC5zoAAFSi7VTPAZedmjVNEKMaMMPERptYyqE3",
  "key13": "S6RdmqUtuiYWrtToCmXnnUJ3QNdWC1Y3VSZZ6nMC3QGgEPxuHBifhzGN1zKYgibcqkeNmy6rq53yyEkg4TDy6XA",
  "key14": "5RrwGpg7H92EeyZR9EP13sKAWpoqpWRsHLxJMpC8kUY6wwsLvDXBPwfLp2H2wAR1hvNh62VSR64JeWmYdpCbutDS",
  "key15": "3GSABPnk8vxkDWdveGQpmfeuC1qNjpPJnTxrPLtrDdxnUr7mx8pGjjypLw3t9unGjTXLCshDEncdFsmmNwmFPMBa",
  "key16": "5Qo9W1nB6yULGLSsMjAZ8zTgnBMTJRsQviApP5jUXkQhccU7kxu4jjMyAtyHnk4oQ4V9rWiHw3GKUnX1BnJnFdfh",
  "key17": "65VHAscqkeRnxrXj3YvPr558Ca2R5jcxKD5z5vpPz1j4Za561L1ZsM2uK2r9pD4kh7Pqe2NhbecKYziW5RQ68HAD",
  "key18": "4trXhMddETqPXUi3ycywGM5PrR3owaEo5rnAqKGjsbET8w1Arms1JYsy764rZ5bbmEzSxAEoDezggVPk3JmbeM3S",
  "key19": "4epkzvfMbpp5NmmWuvZZXtZsbbfUGMypVg2zMYiEVe6Na7WpAVMN3CYxaMugnohkW9tCUcpr2PeYLVDaprHiNnTx",
  "key20": "2SjKdSrRa424T8Uw3KePhxi9ieXax5k2YjxnKTGWW4GH8DRhjUzPkHNk1b89V7mjw28rsNQNGBv5DkX988jFcGHq",
  "key21": "5Gy6BsP2YHp5QXc4GZPM4TrNHXzKVumjzSDh8Ts86iVeQo7Qr4nQjbdUsi42KkGtnnKZwEn7RYqsMBraMvndhaQA",
  "key22": "44YitKTwuaiHuqReCHmZETeBHzPSH4PqB5JN9vVVCyhoaHhmv6RtdtZaL5jXRCWWbdLPnkPMvQbYS3ko3tG2qiKm",
  "key23": "5Sypybc42nSnuo1VxzFd1QsVYxwXEN5asXRRNL17Jf1L8HzXyNAjG5wyjKEyhT5UcRSxLrWTZtQuozHefqb74n4",
  "key24": "XKHGGbwAEcWTSM1xKHmHm3KA94ax5ucLuYm4P5vkkReV4VwR7fXQ9VmbQX1QFXkV97DNxN7TNmWQxtoPTJYCmjE",
  "key25": "3pzQMCLztx9KVQwf8DqHwnBiqr5Wa1b8ThjNkpXzihHGxyroMA2PfXaD6YdSVBUgf8hqHPoYRsoEcQfa6pHtWEHy",
  "key26": "4fYnE2xXpVcvSporjsfDrgvo8TXWPKYMPpK4cY4EYQNaQH84YapyYtNnygVgHDSuPtjZjcbDQQmvj8KZAoc9vzxh",
  "key27": "2TtbjrJr3BGahZQ65LrFmVvVE3WHSfh7NtqEirn2m6rS93fcXS8ryxD7d97FLkcWrw2kTpnehBqmwdyWP1UHR1Yz",
  "key28": "2Jyp2uj1XhWF57SR6gLd61b6CuzXd3cgZMz5D14cLZJ1KuoFohrPrqHdzPst63wsG6ed4EcaGsojguLJ7cZvJfNc",
  "key29": "5Wj4dRar6ecRwL6NHN2a7zasQsXkzUWRU2uBVyvCD7wmeP9cPZUCxjKqEsFdCr2oz46t2XBoZSY7N2LYziDpwYuj",
  "key30": "2LbuqNjAjWPAPk5pC18xBPMyv2e5ohqbYYQ1CBp1XSagjJKsKFsfwqdT2CdUdHKybS3sZP7yFUam1KqEMitvma8b",
  "key31": "2uGcEc5gFsXGTAo6riDE9FHWLx3XcQudPC8uFhHMNVZHxReA6F1RFTLSrExexyggJAsaGHoNbyZGvizKxiPmfWnr",
  "key32": "3pEEhf4KwTDZB5cm6okpbU6pMMpCY3EKdWXwQJrEL7y6NMYbVCdMeFsLiuXfCkAe77gaUCTosvcwSDTBL1KkmNU4",
  "key33": "4m6DtfPhfyp2jfT26a5aKBCUQaXZck6q8TkWJkheWkxESk7DaCXjMsuXBGGz6fkdbDcpQ4d1LZMQTG4ioEhJfjYm"
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
