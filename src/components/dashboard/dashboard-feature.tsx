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
    "5ahunuiceGQ2cuX6cp7aiGmMQiZvffyfNT89DpaxefNKAWYdr8EcT8SpHeifM3kFkfeWVoyNCX32jZXQGHahSWUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oPpinDdmbr7UGAvAizWQCEekKyeDkYw3TBdJ5i4WQ1sX2pUCe3vSrkxRGjRefrg3H3kSf595UcNsQ3mCLU65vbr",
  "key1": "wBz8z9UJDd5s6DG6LftTqg7PUXBCLH2gXhdizt3qyzgAwEFtKANg4vH4ggtpvVKHeNJNvB9tN1nCW71GQei1Xd9",
  "key2": "4drP1ZHYgoeKJ69mDRhHhMrqF254MUZtrjNcnoRcKeDmiti2xRHsPia8RBSbhJ6LTvayBNbuY5cUP6UTNppiwcZa",
  "key3": "67Yzdfr4qocPtDWry5V7xhpbMvH4rj9x9caPZFuRE5yvDpcSJ5fuFobwUUFu4WM4UrWXVQSuTGNgJEwnUsqBmF2v",
  "key4": "1qE74nDtjPn8vowzXepB8F7cQ2RjkvdJFayu8Per9dEcFipXhxQRbqoriJszwkZByFKbBbUDYLkdjHACPz8GHk5",
  "key5": "34GM39L3zkg8MKWcJnmDkCJtX6yK8tL5BoXLWEVrnpaEK3UFtmgKTJsHheDeEMC36pyscxFwzc7Dw3w5A4TnNa3P",
  "key6": "4EttwxuAqpNKod5pC5fzeBxrp4diwVS2URCePitL4Bz4FtLiA7WVJuUX4h2GitU2TiN9Z4nf75XZRzVjSwERtdSp",
  "key7": "3F6Aj9gt1YiKtEF8HePMMDXvJS8mjDxTYK5wQPePVxybVonmRbXoMTzUm4aj3eBGmzzaHDM1HUG4poma7TtBPbKW",
  "key8": "1pp4viz1bUDgEGbAtTJkHYHh8jEWst5rcbHPeLbeedQ5sGmXDvwXrtCKrrbHq2qkAwGJAczRRpSme7tSYRj4zV7",
  "key9": "4TGzwMXA2LB78jfe29hhJKU5guPUGDjXhtNX97bSrE7uxgSgL4zHSdbZ33CVZMiUKUXcqq6J9f7tVh1PLwkMnUjm",
  "key10": "5J2KQtXRtJw62scwfKEaMHHn8B4VL7WBZqiLT9oRgH7n5jPE26L7nPuZK4pzc6M2pGXue5WuumDdsCNPHye3ZaSP",
  "key11": "2sVeQYt3YvEyUto1hHgoRZMtFxwyunQr2d11fAjuYEPMehbqPJD7Q39cusDATDwScEYVWXVaw5qh8E19VMs5YvAB",
  "key12": "5Mi9QeLjk7cPWRQDJyKTA7NT1hsR9mj8Vr27isbmxxEqze1m2P6kXRoS8QNKd96qAsmAWhtXXfDCKgaNNJWLStZm",
  "key13": "23DYfCiik1T1Q3vxvR9pqoXcGM1M47nFeQdk9bgDBK4LGpa2NHjxu2NKipVMAJ3avxYrqZeey7WpBviuoYCQYc1s",
  "key14": "5Jc6Woud6Jn9FTLz1CXNbckWhLmGog9NpJxMKLM4KkWT5ZLoMRZRRYxcWVV2dH3mFXrVzM7TfCgeFiXuxRbCEDaX",
  "key15": "49if8EvSHumKxdanQPV5L32wzVMJDie1wnpRgzUGEwT897Km3gh6bimQnLnmwa8Leak9Z3C8XZk2fXNCx5WGnqmq",
  "key16": "iu5GA69X2JdaQxMoLseogeQ2PgQhXtjL2fCzcrMB4vLoymUjf8kF7EyecFPf5AXDFGofpuGorR9sq5HUAD8M3Wu",
  "key17": "4chjHWstq3ur1bnyb5C76qkMyAUHwrMFraTRPqP2p5Wa7fNEsqkuJh618KvPLUeDQtM1oxtQqAXZUAaQcXPpb7tH",
  "key18": "2H8zfJePWF1e3KNaq4AVjbJTDRf3AhmzpkYR3nUk6QKPtt44fmdAAXLppPoh7kQKF56V3VqNovqcfq9K9HN35tSi",
  "key19": "3VxBCK7Uka3ndajgJRnZfE38iPd6Ayo13yTPLiHyghZQGE2qPdD1nRtgM7sVfCayZSKuDWSvSfcUgKg27LBwmULJ",
  "key20": "5mmhfFMNu2TGdfbcJnrbxiVpoywovSuDJoY5VkeSfSKGnPfienx6K1gFBMrhW1eNVgeCMip3Dar5yuD4Ukri17ub",
  "key21": "3vRQJY7gX5EDrexGycpFjTPrUGYLbiSjsu65QB6Pe894hUXjMhTYVhgpKYAW7isa8vjZRsw7hDvkNFa7e7c9dRYZ",
  "key22": "2yWGpVzZxatXYC21rZ8ms2GPt3wqNvo7StxbeQcnrY3CKBeJXvYfsm7Gu5ztPZPXuKMZBF4qjVm3sJhkY8qkEWAG",
  "key23": "4PC81sVryFJ5bftuDYfqr5aUX575t2QWuxa7SiH9ZUbEAMDg89tH8XuzwzGxt23mPqDgrEN1UWuejSU5Q7exJZN5",
  "key24": "38Dv7xGFq1jyxLHFJZhB1woUg23QEkFfWi98dC5oXg9dnmagu6w7PQ2CHYyoGcz1DcQV8zTPRAaZz3BaK2CA9G7D",
  "key25": "5VBybCFAUegLHWjAg9sGwb9EtrBCivZz9pmKHTdpzccdmbwyYc3j7Fh3MpjPUCACXcyK1ugmTusvLiNnUvMTcGt4",
  "key26": "56yun3S8SktDZRRGXQo3ry24tcTumv3HydQuqtNspU8PpEkKBHtSZ7feg8mgiHWUU4Kwr3cZhNXGzMWuxRWEaZwK",
  "key27": "4ofSHxu8MoqfiM5BtdkqLXg1za2Cb7hXvVSi8DRX6Beyr77tvQSEJjprshb3gPGqux1BAyTTjcnU5ZZsD26Dbx8F",
  "key28": "39BKE9H2YjUNtjy3DvtfMSSNTjGErsZw8JE1KLFo7gv5ieQRkpurKPQW4hQf47XSj3ThdQ3XZzemWQmqmVgBYspe",
  "key29": "2qxD4cFQcrJixgWnsbcea3zJ4fFvddbG6mMnJP6wj77jGdhhvbLxGJbarPEXajVcN4MuRvisTXmeUQFwBJs6ni48",
  "key30": "2xNvrTnvwihxXSn4fiuW4U4jQfqiq8iz8nhJdDAcwQrLHUWMexgomZ5KA3tsFzAWPQtbCBFC6NXfnMLiE3EekwXF",
  "key31": "5HamDE1DeL4SBmkpYX9jmJm8TXD3Hnw68qWwqwBzwfg9YyaHk6pYnzdtU3sqEpmgiVyAq8griZHVbcUPq3FzpJZQ",
  "key32": "4YbAusnMyvr7brVmnbfAtXHYXM3mPjNv9jGWk6Y6NuZ8Rkacd6B439zRvkUmmWtto8hxuGzBpYEHVDpcWc8WotW3",
  "key33": "3QmQQgZrzrFC7bqJHWumbACGsEUxrXuodPRGAryuBAHYnozhGDR6ZLZGNKmnj5E7SxyWrmaYXT8QxmzqgEaKwghb"
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
