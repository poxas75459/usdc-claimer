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
    "4UzUemZfWpoMwBqUWebgihHdSgrKTZZvqQ9JYiTNsLUcqtnyVHVsUt1YNh3MQK6rJrz5bVAZ4vBi3QC8hQeDVsZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgZ3xz4zmU9CXotbSSNiKp8kRkG7QNs39gLHeHXZtf2iuJ5Ro5VefYXmB6w4jee7h5RmfF2U3DDo78Xb2TttdUD",
  "key1": "mmCe8Mf4MAtmUHx3PqppaHpuHf45hUjp6cmbwWfEJTweMuhwAi6cCm5u9ax8sQVZV5VPXw65R4jDMSvC2rcw5X8",
  "key2": "4eXDQmjeUuvg67CG53fbsskUWZKdzZyBcqizxCntRBRt328zqycfH1kwH2mPjwfzHNZqUnopqX56ozuibwyWpC47",
  "key3": "5V3Et5N7M84CCM75j4D6oQba4WVLmBZS92r7svy4A4LKxasWYdpG9pzCdXqQgTfot1dwafWdFiDXU4co5bfKgDE4",
  "key4": "39LP4vxCHtpPo9kYCr9cGBiSrsCENHWw2MaT44dKfeXm849r9Votk2kdBe5BTn5SobNsvCvMvVuS9HWUpW3zA2hA",
  "key5": "4wwzsoZWyqNADe72nPMX9EUNXQV36UeuJtZSS5T9K7U1SPNYp9bMc32po9zzkKQh16L4Df4TtJ3uvxh25dhbJQkq",
  "key6": "5z3vHCEBtotTXFDiHfcu4cqtfSvo3EqooNtDMrbQ4Yu5AkU4E3g48L7hwvmKFGVhZpUxMp3GNu78zQ7WTgARipMb",
  "key7": "5nJDXH4Vx2t9DCixjVi1n8BiWs5H7NPVZSpm5HaZ1rvAqn4QEUQg7tAk77p12EAxj7ZFB9pxSsGHw5LkNwBG8qo3",
  "key8": "3DSAzEG66j6dBykcSBeypLQASR8GEkSRvJrmUy8PfVaWZCpPHbsM6DX9TM3riyXFYDTiTEdJaZGBQYJLG6sSw9eF",
  "key9": "53r5KXge48cKmFdLuQjCAMBAYZ5NjVUDoHvoKwCFkkTy3gpn8aLrssJDPpqxdZmbudadbFBkzjTGfAxgQrtUHfTE",
  "key10": "CHAW8omWbyXgZLRvvA71P4uf1FCMtuyPLNdyC65UbKCMjiB5hfLKdJdhiopww6o5LMNxWq4ws94cUcDAz6SxCM7",
  "key11": "2TndVah8ZatUpeViYUsWU7guow95NehmQebKwodUzzumGg2avdqRKZiBfi8rr2pwwnN24c9TwJUWUeddvjXgywF1",
  "key12": "4dDpWp6ULcbeH54yv2WJEz3UD2dyBp8TfF7jZgKxxHos7upM8aJYWkzbhkHaF2UStMgA49CJMBBSBapkonCfSEVn",
  "key13": "4zbA9E6CZMuEmM1m8X6GLe5mdSakCukKVcKqCntJ66zQV9osnKdGh7XqCcioKxYfuPeckY8ZSsbDGJUxNNyBw48w",
  "key14": "yydDYW7b9pp9bob4t4zcN4MV4FHh98bV23HyB1qy4fLadb8n4q5sFJUQoeA3xXtY9m4FV1Chz7zKD5JhUzvJhkw",
  "key15": "4WUTKzgEESrYvrSN7UoHJk6zg3QVLigJMACuPXrSVLtCkV9rphKvUYZA9ZAaXoWkUBw5An7wNTkFLbupgiEkK9GK",
  "key16": "bV6GPywUS8hynHVfZhdSV9aruBqyrjHrsUnL9a7CtypbQHQxmbnpkwuKdHPvxsFZQe91zygVwKVqSpo27tFANCw",
  "key17": "2186ou5cDdUdns5H9jChohTnsYT9gJBbGxAARrRheyYN6VwM1DxTFrin8jR2X8gUQNCi7PVhkibd9so6R4BXwtwv",
  "key18": "qKjSnaD2fxtXHnBoQxtjjMgmeFAS4kFtPqUZg4UAXtAeX9arqgPYGxpu55n8V5DXnTkS9LretomiPwBY84grR8Z",
  "key19": "54BEZBg1mjRLKyUxddgpeGtHKMbbHfuXb4gs8rEUgkM5bL8zgTVsyP7Nycju5PpcY3aV5KAb3Kd9zgR8EXnMLMLy",
  "key20": "4ryQqooWwxT4fyid7smpJUJi4q7peNJ3MmA2MNpqWSgRWuXLhFbZk2YEuQCimry84rRkLKs1tXng1obwM4u69n7",
  "key21": "5XuCEA11yPXt2cvQwu55TmdKj5MrixrYvvjqVbbEy94wE4ymftHZQqDmeyaJMhThNPZ535LzqjfcrXLFqzoGheyU",
  "key22": "P3dJiFhiDE7ZwAC3vFr86xersTT2bYMVzBF9zPEqgL3to1hiRwAMgwP3myyHVKmVo8H52TB5JFKm95URrPrpxRZ",
  "key23": "678eGEQpwekNZVKSg6jwHVrGbwgvN14LyWupykuohChfUzYUtumSQseC87iWohf5ESau2d5DFg1rdZHCjch3jaf2",
  "key24": "3tFxFu5wxLbK8vZsPXoLXziWRRMXHA7cA7NdZbubTHvy4jdFf7iWLKCNkPBWJweYqAvTMGGMSBep724gZidrtjsx",
  "key25": "5SvSH3rWU7WX7aLkeTLBjk5Ap94adD7FNFupSeAbHCJiWz9AHTjSeHXUSmpyEyF43P1j2RQNXwBr6mmQNScnMEPf",
  "key26": "4sC5f3aQM3uAgL7o6CbL6Fc6R1UkQAnBd8y6FTQGmeU5nbqj7qbH4qA3nGkECZ9RyK6CbdCaunhVmgfALTZMv4RN"
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
