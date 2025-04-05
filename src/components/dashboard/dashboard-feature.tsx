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
    "3fJ2cpgddm7sLFNgznu1EPUbChAP1vcVKj2wNB1SRTTdp5T53NjmRFmYMMcdkqRf33fZqsKgKWGAVvs4ZzbTSTnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppjeatd1cUbXMQ3ULi1X324KYDdrWdM9izvCvvVDNheWhDmVs3qWmhEJiWkfsXeNT3PEV8Nuk4Wdy51RhrNa21s",
  "key1": "3GS1pLzsdYGfJx2BUBnYQjSQswVnDfVwSJtzVQx6penBECyKRCvXFnp462PMFr4qweAxCQWtCJ6Y5hvoz5WaoGZu",
  "key2": "2u7JgzNmewMsFFkm6K5aTFnjV1sXGFVQw9U7LnENqtYm1S2nHDUXFtj3yRJJ7MmCS3hC3xzkk5UUY3b784smwMaq",
  "key3": "3vLmoux3qT9KuxERKwm8CCo7i8RgXpL1DDUzCUw7ajSzu1GPrUjwgM2RDTESdpi5QZseGrc3WSDXVaBRG797NnQq",
  "key4": "61iGw1wURGmbR6tCd9KGUypaiw57rMJKfudGurFafCrwg4QGjKfU4gs3cC7DmqBLrqV2QaycU2SaHXJVzbkzvDAp",
  "key5": "2tZeSfo8j8xj9BV8oDU38puEM6prs9wizdsN1NJfYrcArwT8LoT7LabNAXa2Mt1RuER6rT1YJ7hvqmytT7egudbz",
  "key6": "5xiXJRY7CbjCnmTAFh3KmNTYx2vViwsWoLCHFW3DagQAXjncNsx9dbASVxwYjALgLXReEFKP8rqs3o3NQLKVPMzJ",
  "key7": "3Jzif4fTikKD4f4cyapa6PqMBjXRConp1NAmXKkwNnrCyNKTmhFvVbfuLYNBReS1cSmFpX281S7MMhyczfa92Jv3",
  "key8": "4oHxHdVj9ym1gwA6T6opKeBBJKxSSD8s2PjRLQpZ3M2gT6zLzV3i9dvDVfhS1ZtyhoP3b1HoScNLd7pjKWAq6z4",
  "key9": "234p4P1j9zUZdDiaBLrzf3FGdSsqhBzJRK1a2PCWvPpiAVDGndYKLbY4Ph2NChFGbfcRhZfu1awb172zH9zR6T6o",
  "key10": "3Zk3HreXvqRa1sWtnU2w5MTzsViFQymYrLapudbKenRzDRGvkpGV6BxbS4WykK71txEFmTERSpLoEM33nGT2secR",
  "key11": "uf8FdcZZrEZiaMQAF1657s6T7JZzVuAAkHEz4kFfzbJTbACDkMCXzy1PJ1xTpC1kRH2AzqnYZhuzm5ykPmWqUEF",
  "key12": "2ihhEg59YQnJH3KUbEhZp5AaRFSFzwtdLmQYg7ci7FmwNpY5siW36omTGnZiQhfZEx8AeTQEncqNBJV4RHuPVWV2",
  "key13": "2HDHjQ8hWFi2FvFPLFvxaRvw3jJ5UECSB4vUix5NHwH6ehxF5RXtH8mu27ZCWiCpRCi3vrY8xmexSqxrpdrCYoba",
  "key14": "3vXR1BNKmfoctXAowxq99jCeHRJzvn5zPJ223p3jHEXT3ddJVJtanCBMtfDffKMiWZqVpzMTuEaGpoGGByk34GH4",
  "key15": "ACF95ZaCiy4PdhTohE9dsVofucndqZeX9QhEN8dxwgrX1VcJfGb5YceigNKx8ydWXZNJFb23oHPhyTW64yossfx",
  "key16": "67jkxqGcnYLru5wpEopamqqxSYvCFwwf89tavJMcP21Q4z4XtJ45pcUGaWAnkQPqCXx8oWfDYbHKYMZSMUhtGJmk",
  "key17": "2769h9R8ywS8ZkutXsRZnBDVyQzZa6FFxQvjB9nc5BtR8FeXToA34J5MCz2bYHDvmVamuv7azcLTZQhsUQBJa7ix",
  "key18": "4JJhyXeF3VoJTLFZuSj6vMPgeyMU6kryTw169VK3YEtqgrVjwohshqbj7PJ9sWjSnD1hASQLYupd5LW6aueJP4PZ",
  "key19": "55nHggjEKZF2EpadvrnvKpwVBjXoByx3jccrzV2ifXiPEKNrBRWBmdFvWkkizCs9fC1RDNopdUwHCnhq8U3HFa3p",
  "key20": "377WimeheFVXxMXzmgw4dApSzx6LXvx7733svCUEbmo7Z4Uf7dHcE88rSHK1UUtCUmDkYbjC6CuKgvx1dd3skod6",
  "key21": "5LRE56KLqXUEyUpWiM4sszptV7bPqF3Au5JDj3mLUFUdj1LBEuwbXKYvnvV5XUNGCG43SSY26aeUD8gEFL57thPs",
  "key22": "zs6s6mrySEgbNyF4Hw2UfDW5quBAwtBZXy81UcC31n8mfTErGGAgzdkDMKkszr3wAkSiSrvLhWWBn29wvFoSBhp",
  "key23": "5NhSE1bkCwtFTmrg6kNTxCrkBUK6kiysQLhJACBjX7iWwXEmvbTPmj65qDVSxo8iWqF5Mhf3TyBe6hjG5ngmycsU",
  "key24": "3K7sJG7y3yJcSeG7F78x9KD7LqD56i5mZD1FHdooxUvdAvkhqir5w9fu7B4rCyfXXaMRMck2ZQ4Y4FmFC6AnWcax",
  "key25": "43AiCP5PARmpvtoVSy5DWktKmtPaEoYhF3Zkv9GKNAbpNGgr9o7VdAEqMXyJYY4DQmMMG8v5RgFnNSajgYFEart9",
  "key26": "r86XSr87VSfrVz1o8ptiM9dUxyNNb4KbWr3VrzDZWWphejDFKHeALD5Qhd17dgQxF3EZRxHyAMz1QnK8ayT5Yeo",
  "key27": "4FKabjqMH9mPC4aFTPPqPHxsw3PvRLkzU9StRSkc9VStDLsehpHQv6PPjALrN9jLynZXTMtMCJ9yNffTre8UvPGT",
  "key28": "gGXV6cKctfRtmVB7iVAVetE21Q4mN93dsuMeq8E2BpZBiWvbbpVubzUj8YeZ55E8eGiKogDbAtf4PN1wueTsL7j",
  "key29": "3B2U3LXTVGJBzhV6joGV4aKQ545AYmmrFGyt8HeCuMLumPcRyxMcyox81xm2epXpcQ6xeUGZjxJ8ECCPSKs4aQqC",
  "key30": "4NC3fasaYiMEThsFSFaBqZ8TrNevvj5niJmeDUrFyfr6eWSHv3sRKeEtkcWnS1Vma8bX6PQTuQHqt1qHvLhR7hZY",
  "key31": "2kLPNGybhtVRb1XamqkXUQKQ2W9LEKGp5K6ZCFaBDNuoL2jAHTk2s5qwXf7UvPF9K2U5dTvbXpmTS1f3dXFro723",
  "key32": "4QFHSa9wwRT3m8iiJXHqQV77Cdmjdya8vNhEEQ9bJmQXq5UUU92FNLxsohKEsJefHxS2c77XFbMijwAT9k6AkFCF",
  "key33": "3WmheCPUquKK2Y1QQ7VsYQ4KMeMf5Crat2G62cYY2mWrEZdL4fu63H4uo7NMB8HMEpRoeHcR74B9c2VCdoGScEfW",
  "key34": "5x1a2K1mjWjYYqmNfCspdwmWUZNP7a5sooCXL7hJ62A3BVKBaRQpA1DiJcUokm7hCkKdc42UEy5ogRMarkXmWLX8",
  "key35": "4Kt4c59Jr44Kq2mWwANna6RxuebdTDMyuWvE82STM1tXyWgVfiPt4bZcTkp3QaTbXCwY5JrkuhxPAxhWTjFHiZX4",
  "key36": "3gPViEsmaQndZZLVrXXVxiJ5hjS2PG3EAu11vzsyWMFzNsYrp2E1BsGoB2G8cqQzNVJKoXjUktpVKeUmwgzn8w8s",
  "key37": "3ZgXspU4DPKcCgMEg4rfvr14ycmLWthVNoAewQgKJ6CzpNpuyKJusWDyxJ2KLn4x64m9MpAH4zwanSqCJK6DrR6M",
  "key38": "5N5o5A94rkernhT96fMQ9ax6SRgECLvt7st5jB5x8UEVBvfCYJaMchJh8rgXdfRHuqhvykwyrBUcKnXrbyRMxPkP",
  "key39": "5LVc5w4K7yWNRJyueCHmGLzDqD5mm88AsZAuU7tiCFGCCQKZaEqFS7acdLsDH5Qyh7MP6w6UVVZwknzbjVBbUz37",
  "key40": "29ggvZuHwANDxohmcHabvQn9C7o3NPMaCqK56tzMFcV9By2qDXoggY185EmH4Bkm5xb2T5f2EgiFjvdsvmqSHskr"
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
