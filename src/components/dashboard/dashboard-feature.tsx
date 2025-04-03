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
    "2N3NCgywC2yySCzC1UupD63ieQQvXQcos4KKkTMqngaQvMxQLaGozb5Th96mdVtGXajKpKCdSPYFJD1RkGrrbzso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NEfQn888NuJaxiouVwxMAvDPqxCdRAAKbthK7E4Jcxrj4PpvvgnmEEXnz8EnpM498nrS7t7hYhER7CBsvWri3Qh",
  "key1": "5Hfb9PyGPzLfeeKizeZeqFZKsagMdSbJwy3SzKLqup3PLQ18VQNhKRkWRj87WFSNfQszmVjKL24V2t2U9L9Jc5jK",
  "key2": "3iNpKe9hPcXKueSrDDkDGipf1aKW7HfuQy6PnpTZu2KSdePax7YS7KhXPmJ9dzeT9hSoRPbZE44kzZBw4oxuuf3F",
  "key3": "2JrA3Yo31aoYgabcLoSeMK6L9wkMVNS55wNDrnn1Q4VxWfivdcnQq3C8W7rbCQ8mHRAWZEAnXbtU1RiMfqTsGiQa",
  "key4": "5zXG2R9aqqsP7KrAYceKkSk1rBMGJC4hXQohGEoNmkh4m5DATgKZw8cvJQFjDiBaQsWyxp57iv2686Gz1ze8aUtL",
  "key5": "BqmrYj9Knuu3iJwzTuwncDQ9rJbRfdyLoQwiLSPWnk9VDhnPSjVATKCuhjZtVw7YPQhzmy8BssLoZ2mUQjrEYjT",
  "key6": "41iTg7suT3rW83JtYBRRkL3Fp8Fsjyz1j2Ki15XZpqhucfBtAbKA1WjG4YzNWEw6BbywmN1XQwho9PDH4EUtKFXr",
  "key7": "54eMJkkxAFdU8hUWmWqXr9NMoBCqCkNnT4YYAvL9PsQPs1vp6mpnfXyv7R1aLHQjDpnh5Y3pPDxW8pJcphUMJ3PV",
  "key8": "2uRrQHPFLrLawMTc5ojJgLJ1DHjxgLx5ZKpxVVmKc1q9f9dEUrxLkA3GAjE57ZNxZe4rVzJ9oir8ubZAG9Tbx6wQ",
  "key9": "49R7VMjZGfBS3cELUbXSFJKxdjaUE7aif69c9HAxigGLwdYaSXPY4uCP4cWFVM71eBkBa7eji65iJLN4C2L9m6UM",
  "key10": "5Fq7cj3h224ZvJpBdC7uj37sDuZwKGRpQpKFFAEyUr6BAxLb4BX6BEBz3YsqvNRKj33hymaEpddwYSUXxn5NY8FH",
  "key11": "4bAPqiQnb1gW3KceDaxmLzqinkVtAsKZm8MgRnB6xQ4JXmKyfECuiXxheBFmDXP38kBb9WDkDvsSJWcFbpSGvvMJ",
  "key12": "2T51iT7u6Lxq9yYLVpm6zbRBmoenaoRc37fPujErby2mAEMBNr8PrBnX4XKAWi61PVgv6ahRRTNqi1AtjBGNr44R",
  "key13": "63aHHCCG59CL613p7WaAEHuy1m55xoBgMDNdNy8FHk88gFUWizujYcmDo2MRBAjrvwe8zfRtXjcJvU8yDNeJt3cu",
  "key14": "oLjB1E1djrJKFBDC2rt3ndEpYoQHNKiDMYNnyfHSuSdh5pNC4pq9uS2SB7zavNhfZESv9TSLxtRWiadbTKGT6mk",
  "key15": "2mnm8X7MpYLGZcqYnygyyQvEtUh6Y1s1U21Xuko311mLiHK3PWkP4ZuLE7xdLP19AfCY6rRRpCYvqa3rmkyovBGB",
  "key16": "4o9oomLm2xoyWrrTgMWAkNvmM6aGnTvmjPpvy847D6QcoCogcT5xREufXMKcmacC8grJwjD7HWmt9ByKg5SPSero",
  "key17": "4fi5pU81yyAe5LefqTYEsQgNJy5DA3VaxTUNbdENJK62iGakJ1XXEXiZNPDKZ4eh2gMD82hzFytops3ueZtzXZKg",
  "key18": "4kmJ8yViU2dAajSpsdMp13Mg7ipohzjt7gfbsh7fiCYukBf5PVgg69TzHx47aGNNdgDUZJrKcniiZcWRbp5Vk4R7",
  "key19": "347h4WSZf1mqARqE3joq68oxfJrANPT5Wizeo9AAsQLJvMvTEZSXacrWK698c3dB757CAN5jrbVHqGzJPqj2uCSr",
  "key20": "31ELgir7ds1csrBUUkR6bmknwTfo8ZhzgjtYxDbWLntVfvEGpeY4czGBJnaaMPEpPRfDRAQ9BiJjrUB5vysk7MJL",
  "key21": "4jTJoDKAhrWRcG2ai1PzNzUSfzESNAndRNwBcLZ3FZH5ZqFYLzAXwZhaW1YrSsfXKqb5hae14dCiR3jHtbxNF8bw",
  "key22": "36SqEH98aDWuwvpbi7Hu2qcuoyNYd2ekAYozAvYzGrdQoLKQqSjczBCptq12wXXyJbqUtu5ofwcmDXF7Aq24PE28",
  "key23": "5uKHcPZZd2QSiKcgWUKyEDbGnvjMY3U9EFfffpyN7hBh3Ju3GRqoyUQkGJbufLfwsCiT8rWM97JED8JPPX2TRmvg",
  "key24": "4p87vDZHpqULnTffVTN5hcj27pRR2AseS7iyo1Xiv5FaXXpaWJoZFEFhwWiwaHxLFmTtvUBgSMZrGEXFdkzLdhUp",
  "key25": "12nroAvyE6pe7JnSi7muDtW2YGyETnNxFEqWq8pjBb8wjz9xhJdbUywQMgCnKtucSHX3B2xToTnLZqUQc3QKfsz",
  "key26": "4TAspe8XLPJVMSgVQeCkqP4THCDvNxFtfdH2gNQHmSPkr7KgeBQhadz211ULvRBRdpLnyVzJz3Xyp9zfTbJLFkHT"
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
