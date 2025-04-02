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
    "Mm3nW13Krjt9x5nWUHmz21uZ6YpTuQBRFBrcojomG8JiiGzSAL4J7iccG3J6Vci9z9WjhjXCWno5r284dZ2kYWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "411gVHPBcaTREEVDDLkZ4tq9PX49mnE3dH44R1UDhFyw6jPHnfPrB6eGHJpynReP7CQyp8qd47WFc5FHKfJ9vyt6",
  "key1": "36bf7p2AniBj9D6exYfTnrMyiU91L9yPNsJEy51JLzMHmYomRzhgEP1wu2x7tmKJfmAHcspBCMP2DKsHqbuSqmR7",
  "key2": "4wbtd8PWjSUX9xKrGCv7NDq9k3QE6MPqwfgaTNU8vyTWr2HBAYyVWPCZtQajtpcVHKQpXy4NJ2rVHhrzdn1VAYu6",
  "key3": "5aFDFTbqAaQQLwPc5SPN7TCe4keHaBMyK1JJj6D2mQpGyrtuC4Xkg7R2QmXv1i5YBGZzrvmoiATRauDhAhf2xT7n",
  "key4": "44VAJcLV7y75M5JqTSfFjkLD47uGXyJUd57UAK6TaYxUde5ieemxCxUr5PV1SGKoASSRJmgFiLS3avPUJYWx8oKK",
  "key5": "5bvuDsEzbf9LVKcq4sYsaiMEdX3sHfWQ9csoUhi3X8P6DiD5cjGRJdwjPGR2D8o81EyTczjuXTbbhzgjieoruAWP",
  "key6": "5gk39K2DX3ScuwM83jkqtWPqVmJFpcvdFxYEUnuY5gTiLySWmnNczhWp3fujQ6mx44c5aUs6fbfPEMBPFjjBbk6b",
  "key7": "3sW9xLYymMrWnKSMChwJdFzc9C7HSJnT2vpNZzv8Q1L5b8KvTrquzKHqvotxBhqTexCtxfSAMGtg85Y1nh2eNJTN",
  "key8": "eQB6Fau3BxaMVbW1ff344zBy1JFvmbc4xhCS1pWrAsnAmxwh1otPr2ztEKWrFM4RmKBLkzebn3DjUCe6R7QZ1z5",
  "key9": "42Tzg5oPB4dzLYSDdQN3hj1YuPZakLQazbWz4J557aJA74J3oWy77ke5Phbw7GeGtyfyMnyHj9Lz528MVvq51uec",
  "key10": "2fA95qZJEyVC5YFs7WaXHVLGE182nqG8NwSMhtVKhi1HJoCZvZtD21CXzFSJC4SUGWEUDyZVEWpn9HdHYwKuVSfV",
  "key11": "5djYxQG7sEGT2XeTfVsztb8QQLmckqFmStJYX4bRw8nrmTEUxXUagGRLbSAqiMWX4DKHuDxNTGfmudxT4vx6zqHj",
  "key12": "3N1d7bhx8UQRThMujx1xnyCY4ziRQbqkbC365mGFWyyizL84wJjY95LxhWkLPehbXekbjwNXVxw1RcDNJkj52mxc",
  "key13": "3cC4Bbzf9aYruasiSk631mbwK2VQV6m1Y2BvwTr4fihsHN6GTyJa3R3Fymo6e5RXLddzG7TsuDBkMFCHhYWuabc7",
  "key14": "4ww7tMkH8sifGrYMV2Ek6PVNt5Z8uBBq4ttFLvXTC3rjsr72MVrarhqLwx2M6hiwTtG3ZcMzRoZYqX9tDuRdCbtr",
  "key15": "5RPMcDhkX9giWV7TRyPLy4yQHTT4KyiBBYL5nBHjiPM3bxKGuQSyz5wjnC31And2fv8hMTLxseTLzTYoiFHRP97F",
  "key16": "4o2sYc2L9t4osbwJ5E4ZGZLCm1gcEAv5WoXEm8YH93jXtoboZS97gqkQNVZ5Zg4AHUx6HnpzPrAv5x3VxWM15HCr",
  "key17": "3FM9LKtAMzCsa2A8C4923P1BDqdaDBankad7UEUJJiqovwGPjLbhTK5ZMPCHAR3JuShp4BMmvdnWzkASGTVxPUe8",
  "key18": "5toKNzRHYk5r357KoLTyVocuQwif6NRvDA7GfsznR4X9zKcXHqUMYXdEGXvLGc9By3xyzmbrNpbGw4c6u3bL4LYi",
  "key19": "c1VhAkCpVALSRnfgWCXvMzdYxVYCnGzQura4WKM2zJrR11vaq4n1ZvrN9kc9icJKKcmkaYQLdYqs6xGZ4af3Xc3",
  "key20": "47r9wF2WX2W2KYuZcxa6d3CcSRrtuopLUkQhHptbeoLZUt5mguXahLkgPo5L1KdCW9UnvacC85Nmeub4kyg3bhBE",
  "key21": "3HZzTq247QQoo9RFrTC32gRLuwsVC4hqpJLArXqeQLkAXsvz8ST9WqnXUAA8dRYWwFMnW3jVc8to3SzYhDqg6VkY",
  "key22": "3KkmuqVBXCuPY3iPxGmSVK9FgZYKgtZyuNmrMYP9gixfrhoVsLpNy2g83v4xrr5vLrxFfheXkoXDTxCwejLnVVDr",
  "key23": "LbP56EZYAEboVTHfsHEv4sgJroC7WDEh3NCWqsUrosfpYSAGkUDLLQVcYo9cQaNtkWdA9qLXd4VbxV71MCD6xU1",
  "key24": "5EjnhnSrCHFBorF8gW7YuvLw6964BVA4LCd7WvLUu5k942PqTPfNqmuwfKbK3P3jRp7yqjvv73fXtA2oGZ3pEohc",
  "key25": "3fupTSA9nasdwC7QpQZpiGRYj1EtoHd4WGgxQ1r3LMG33HV69H89YbdJRjPr8GkozUxBMULgCP2bH6v7aWGy7P3e",
  "key26": "2QpiT9n3DbEuNL8CNks4ZP2XDNjfrf14zvxW3HA9mRhQYvJWtgzz5ANLxNVr1eqKFZUYfSvN6WcheL7N5q5GgsgV",
  "key27": "vojf9cVCcZpmKyGQ8WixFfVXk3pFar5MQMZWrKkzYDy1FV917fdSKTk5rKuCN9W5WgPt937w2A36NwMAMq1sdb9",
  "key28": "CCooyFigYhvQYgBfs9maMhjACFvSxPTcWGT4QNeSYgtmHA7ZLpDWb1TbutW32LwBtJRnAZJFW3umWEb4cMFkdz3",
  "key29": "3v1TCR6Adco9M5s4akmTSFAJfKqdP8fDhEnDEDFyqWjT9sdx7QamjyFHeVzkKbiRYSXPSjXkgAwSg9EdBQuTd8bF",
  "key30": "4yPAPDw16CTW21dLGySoXkEFfijr18sXUEbdpsBXNW2eJtrHFFUaT7izBC5ZzcYRGhqT2tFXVFrweYx8BaFwm9ZG",
  "key31": "WRBjX1P3t3d7z8RTgHkLi1cKzCJJbjtwAPAUkeZ5biLZ6THGUKZHDuqZTwacVNF2NctWaggMjnJ5aBV79AX6x1T",
  "key32": "329sKFZQvNZdgGHvAF2LSqoXUor97uxHCBYYNeENrkEq6w5A5Kqm9qHucXB4PFLFqht1u6mLPkFLRhEoz1Dtpx5"
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
