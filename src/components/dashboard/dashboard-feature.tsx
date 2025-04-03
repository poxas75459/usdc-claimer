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
    "BewVkngWscgoJ1bvNXmWetwFTFdFRyqNvjgupjic6bwULUsPjuHN5BpPidr6FQFMuW9RxDmcn2DudVMbzPiJFSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aiC13NkM9Kaj8gchZdXaNUxcx7A2aQnyhdSLGRhUHCFtMuY9HzTSrH7UQ5xESjFSzj7SLyF1qoVvh98GDBkqm4A",
  "key1": "3Lx5m59oksQauoGsfsPrReRPkuyMKL6QB2w44xxoBQd5tdGnLTDMLmvrkrvirCcc3236ipWL3eSj4oKNaoqMm2aD",
  "key2": "3YFePtevTqQWN57DoTebwjViVeC77rKBuKk9dLUUf6mrSTCLS4iasAifY3gbY8HGX7DArvcum73ZWzitksu3usKF",
  "key3": "2drxPh8Bih4kiqMkL1waX9SGrDxTZXdv3DruHArMxaLtcyJ2yd3mDbYAVuR4igR9GVD4bd3K3BvTucMtgr6tiUhP",
  "key4": "3bsp9QcwFoZ9VUGVBd33qnCeDWda4uSYLdPdq1ogZbuwrUpjVyxbwFP1cfFAKVmuWDczR1kXJw8QXLp5VDcVtQgg",
  "key5": "Kner5LseLwagUXk4ChQfukyWLvC2Jst7u6qdgE4xTsDngj8q9isgmAn7M35NGq2xdeEFQqfLve3TVGbiVeqTeA6",
  "key6": "4A44mjo4u2WHr7uNixwxzTmg74fSpVVpoiR387nJGMvTrNd1f6JGGSLkt428ybWPABNJYFGnkxawTke1V7EqE9ur",
  "key7": "sazAKVPkGWyH7mEvsnMExA4FDnifhvGHkXPETstQX1h1aq26hq6fengMRkpUbav1QhqmqFFZWMAcmediaWL6hH9",
  "key8": "3zZzPmGko5mtkADPyYmK3AzbKrUoCuQeXoeKpZYCqfgoTkmGbhxKGytfq4QoQChvQMWPgAQfjUFxdekCFQ9TuFV9",
  "key9": "5oNw5BndTGkKBmuRWdA3AhHrgtAxE6Gpv8RobXFzxuf1qDxFM65YmbXgqHW5DShe6ESRwwL9i3rWN2kGr9NJVthw",
  "key10": "RgGFETt6dYSuAyWYjbk5hf8Tpd1Q2x4WxVDj9hK5hg3y2A8RdAYc4qbdSUCqPFToWJpixE1wcTA9kx6aTtaPSCd",
  "key11": "2dy7XqqKCUG6FLbrrPAt1iHAeXNAwnkcQGKpy5ijZa7sEB3w86YPAGFV6eXuWMRTmoLag8nomuBsaUpW5CtAKwfX",
  "key12": "393UWrFJiLn3FHQ8LnwAZKqjVGoaAkmNcHBE8mZVWcQCRr8FFCZZZM6M9dHnqicB8G1DYAxCefcAjenTsP5sB4Ky",
  "key13": "Jm27iFj3AhL4zZTvft3517w1RK21u8W3WKKQHgWcrd9goGDdy5TP3GtLJh2FsrBq3mqLwV5gyasrAxUj4DPSdEK",
  "key14": "67Xfriwp3RXfAzsF63mTEL76aSipSTXEg7eRnN8Z3Rin7Zt6pZd1LWXUkm5bVRrMYSgNPbBYYcqnF3Ef7UXr8w4",
  "key15": "46zmXyUn368wz4q4Zdt5vm8GuognripV5CGHpRXDV6uw6fPGLcPNWrboEaDAU1VWFcg4LNphfvorQLPb52Nf7e1K",
  "key16": "2ivxehL7mFKkXNJ936y1JEFrpkGGVv91rJhdaQjQjRJhVt78qFTnuKkPVJ2RPvGVenjZ8ATjiDFsJpQHzzJz5RTG",
  "key17": "4rUX9BMEjyBMiv41VoWuAbRWamjhRyTcmDcN6UdJwZdaJdvdk1RHNrnvfpjpWeVtEEbtvxi7YwL4QH5qrHCdH5eV",
  "key18": "DZkTo6SgbLMvSd7xb8rJn4fepuFiW7D8V65e8J1VdWU23AiaHAmMDmpQeiwiPZ6f5c6JksYwRED62btqCiyA6gN",
  "key19": "FBLPy6TXYrYharpstF7H1gGQPP9YmZCNTd6atnr72sCD5uSGoq7P5BaRyvFY72545MNDGiaTWPvo3xghbe5sNgg",
  "key20": "U3TP1cuaULfBa7qCzD2Hhr4SzXqdvFPFwUb1VmYZV4TFiTHr6vS1jeSymPvfyJ9WjMbcVDYPHUMggNouUNwWbx5",
  "key21": "U3NsVDGGEmzQjpsxTVW5u4T9PPZW9rJ5RuiBn3EGnzVrtWj5iqwpr9R3AZaAf2B1aZxdk8NUyiFxe3o4g8kWcbw",
  "key22": "rMmuySiLQCUdAgGiKTWmPMR9J3KFTs4BSV26TrUStEPgmEcYCk2ahiRXZ7hZrhCVVjGosTud7L6mVuucgeE4DAB",
  "key23": "YJTZ5tRzvRzTRsoCnfpZsCjQ1qc9TDLFGSX1zrzuz5yVMsz265D8TJGL1zjqZqtuWy8sZxvZAPiTMEd72G9RmqD",
  "key24": "2eKbCaHV76DVjMe7N5CCyYaHTu8JgxFc7am6wmzv5XMCu5n2pi9Bh6GHJvRTuWZGXudMDMDZdgUAb5AyATuqRGJh",
  "key25": "3fcdA1pB3S27DfzJcqTSzFVEAc3ewRgPisSYXYWGpm9EXt9Ga8uG7eYkP5B9SotMQrGsqFR978US5qAmZdDhXtFF",
  "key26": "AoQkvBbaeRKcE482F7frxJHZHais51FQPF4VapavEhyMPRAZ3RerHsnuNccjtBUVnWkVwioSJ3uaLm543TsBrRk",
  "key27": "3ABXLjB8dW61mq9vmux3RhrM8yMDJsC24oTHBsFJiZWowQp7m7tJVFGTaEDQftnudjyxz9qNESyPAMv9SDJWzj4b",
  "key28": "34aaXVWy4ur9K2DPT86KxRYd3kEStMFHbgYrYJy5qhqkfDVMHpDcY6jFWnTmKiQwCfU3ARJtZ57cVydaV14GMt28",
  "key29": "4GqjDLMnBLzyp5vNdHBr7pSoTdv9tLE5U1Urob9Nv9nLUkqy2AYwu1mBZfSktMW1h2BmSAtwovmFsiKgiJnggvKk",
  "key30": "2c9cVL9C7meKTgjKTqzUJnaEfu9su8URYHFk1z39jBVzNMEYMd5pLgtuFvKDhoz7EzbHeGKpD2ucfLNEYtuqnxbm",
  "key31": "2HHaEeRWC2UPNrhTPBpD2c3f3TysdbuzRipSivsAtwLncJYxtwsuFQyaaL6KEpruj6HM83ULDTWSDAkMU1aTuh51",
  "key32": "5ZjDohKMBsy2k5wUnEd7i5i5PHmTEvzQXjM2k6J6HYvmTYVKLfTxJ3qmzZHBfCaK7Yg79pBGf9Txu2siZtMm25wL",
  "key33": "346fQKgs7YHuF4vNXDb9xZZHTRQkc7Uigtm5JcYMzkZWGrxuLmfFbS6jp1p91VqG1HAyj46fj5VUQ755VJj7YheG",
  "key34": "5tAGhQsqkfXnaqUFxxC2FTwstk9QAZtYaAhEDJEtqSS2mpaywPfJ7qedWC2ymQhZNZNaok5xnzv79NpqXTTPo17"
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
