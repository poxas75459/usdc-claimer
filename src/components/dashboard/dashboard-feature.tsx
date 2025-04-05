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
    "33231yheA3p52UnVTSC1bqMRDgJKf6xsz6Su4T5knzZxg4NqqWDWLGxZGp2oTkWULRuxJhjTHCHiEy3duYu2dmUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DbcHYF3eJL6TCxPGRTeJGm8ucBT6F8PNLV66ah9qzXyZTk6QwwtqxAGzMPRYvCjxJxiReoHyoMyH7rRoYHYVjg3",
  "key1": "4KYoHKj2hZ8XViijJKKQZzZhH1rqY3F89gaiVCHsapUoqqoRe71yQ7wmkqpdMyZNbbj9pZ7E9PxZfewC6c4cgzRz",
  "key2": "npEHpT7qpwDqFwRgFthy8kq2ZsThqZKWoszjiEv4fLAf5TGAejMU3TrPnBooTZDkF268FUVHCRxKvfDkfAvwwgN",
  "key3": "477eKVb5BLgBGAZSiS1RUvu9GA8FZxzFJaD1yJhhWZxJmMErsYvNSyfKYDX5aKJDZAtTtv4aFkUchy7nBvs2t9Gc",
  "key4": "5ffdpSd4Z4Z6ZcxruoeRf4hJ4hXmhHgmwBi6avSSVyCXEXHh51v18UFydZvPMwYzCkiE5MuzGuCADRsn6LzEnYRN",
  "key5": "3PMSZNv584DPzRXLVutX48QmvnxX6CXmCpURwGZk8PBJ3y2sp37og8dF2R1tRfa4M9AEBX6Bm6xvH6ofRW5WaSX2",
  "key6": "53NUCfcDfCigS5TwYzgkEMdZdX1DmCYpdKpnK1tfzsSuQLRrdkuGe5Z4rKyj6ybPDHE9xsUXbDPWJLuf2sMd7oEM",
  "key7": "3izf4GSJfH7gfeMEYKuCWK7unbLQw6qxaSSicBuuofFoRBL1EhL6RhM9b4JE936coKUgTacCQzeNTYZXZuGHRyDP",
  "key8": "LArW9oZjdc4bM82eqSb7GpMNW7MYmE9gmcCSSV71BsFpMJoyQnyv875L7snxYdipTVtFGSFYUJ4KPkdmh2xPW9C",
  "key9": "55L917GmZ9gH4xzsqvZ1WHP9gtdFMc3bbTZQxL3dZswgqJrncNuZfarTT36ccYojoQHSzydyjsYHuV7M12fKig2X",
  "key10": "5QmYxqTozZUsHkSZqNqLs2oKdbE2MdyTx9C4TuyST1gPDxdCi6HshMyVfBvxHzjh6gtumhaRZpzy2dQZGSkrWBHh",
  "key11": "5ovxohfTtYq1PxGeb9CgxBkPCP6fVK78Wqp35XCDqE3DkZtxZi4ETo1vkM8poEfQBGdbfWUr4Q9U1bQyqLQRat5H",
  "key12": "5ixB4VQk8jdJK81p1zA2ChKfELkoPonbkNYFTYeTTy4L3qQjN9pB7s7mYEgK28HNArsoezUQ3gp2ZFAife1WuFSc",
  "key13": "2j4JzS6pgvEmQekKTk3jM6dQqH46zwXYwQoQkFuN8tZVRYu5n48eR1sow5GWeatcQ1Tpnb38iThwTr5XXB6NkzKg",
  "key14": "G7EDC6DMXackU4r2GogrEYzXCEjrnofC6qPX3wRLFsscbzhv9pUbQuU95GHJ9vKkoZP563WXQFntaDpgVheJamp",
  "key15": "5knu1mNhexAq9UjXT7GWC4AQB9dje8FBvV3s2DkjUrw1xAYfqAugmFVV68BzVV85G9fuXG53iFkHrTV3rK1Wzkoq",
  "key16": "4AHsSci8Xkq4s9L8PDsioRyASnMFaq5EYPpg4ZFw2eoyPx1bEYd7tkQyXR53beX1H7BifdNtqYHFFUrgdYSk9A3g",
  "key17": "wd7CtsFNLYpu8GfimKcEZSV3MHK35fVc1MQduvXqsKVB9dy6N9PJ4WuTuNcD5rzrnbuPimTFmam1fJ7VSbaw1Xq",
  "key18": "2SdUC1xxS9iDXgsxSAwudPWNrL5hqveJvWexd8iWoCgwL97aaWGgRPJSPH4Mp1WHkLju3hvg6wiVJ7b6YhQKQUyD",
  "key19": "3Ai6UXUCfXcUA9AUyAyb9SuCmruhSVMn1VwpDen3XC6P59ggJoCBKWjQCYhpn5K2bcyCwgLnqTKXQoH9s8wKduqh",
  "key20": "61DAogXvhs55smhLrR1NfKmk7q9MhQLVrqRaREaTMah8jzpdqk1XuRAdZ8QuxtF8nsRZ5K28TVSudC1kRPqQo4Vr",
  "key21": "2qjzzDAXj8oFuA5tfUeeCHU7ikXaog6qQrMtrPzSPsmECT1USdgkjNueK51avAHSckLvAhX1uCUkhNMELkKdC5vX",
  "key22": "43kuY6xFV6qTPmmXi4Nv2QsMdkMC4QVifQASqe39dr6i7X51yWYQz4eQV2UZtTg5DY2HChfEQ9gN6SNSgMosQk2y",
  "key23": "2CLV7z8L2kr5pU6W5Rd67PTrCJuZyG5tPKPqEV5KS3xxeXHmuR3rd6U7nYqW7F1JCKot1foDZDhGrG84Xz3s41QH",
  "key24": "5f5Z4J2ZVV26HJuXjXXJXrHuWcCpYpk6cQu3dVjAPJTeLVhQjEmgg9D9jf4Wa8QkRGCQUP2JVHu25uAcTaHggFBk",
  "key25": "2kDpMzKEZkSEPFXRaq7oP3fWkTSCQ5jgCi6ADJ1fUqAcSW3mKhZh7bky3yMKxYt5NfuQY5jgaxnwTdpQKe14KbvD",
  "key26": "AxKN5NLa37wFgk7ptE3z4iqqKZVaEnrpSv3puRKEYUypjj4CtwG6KfW86yUJgBBeLTaYshVmYEmj7JR8KnBUYFB",
  "key27": "5KzQkWrB9rDGeYFdvBuZXY766Pq281Dxq7WDAUU1XrGupxJVNwLQwFvzPksxa89sPmijfieuehqstW8k3QvUYtBZ",
  "key28": "5RMUK7ksMWQ4e7CoBNgRNXuGz7eitWjbbrWLmCgqY8F2ifSnfLtnWFMurLXEEP7VgKU6UwHyp8YgNtjiNozmfm1v",
  "key29": "5AMKdvduAKqmGqRgwqBA1eyFS7h3u5vPiFkgSGYXTjBLotbYX6Rn837N5E5djDS989DjCx5cvX1jym7wa564g1kg",
  "key30": "4UaCiMhTDowGopabntJHS5hTCHNs5pc2B7guR63ZNCMSmrr19DFe7VSDMamRfM5PKsUGfDgLQ1ezJyLFds6rSJZP"
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
