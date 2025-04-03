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
    "3q9BWsuoSGVHzZmDQNvaQWwJySSD5a2F5Qw4bbYVCd72FxCgAXGD9P56CCZxhpZFTbcnZDACCiShQ43Eof9jpvzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdijNzXGk1n2Vmcra3D8yAtFVdFk5temVV6mDbBRanvYhNFz3FZQTJ5gakjXA49cCsPqMStABVdAfzrhSSz15qF",
  "key1": "cbCi9V5CPz74CJYBB9BgVCc3QTn2AW8ZEs1PQyrF1kqu5c3emjgct7i5u6YsbcQ2ScThrWFmCLyyST12a2pjpoc",
  "key2": "2vVhcCaRzX4NYaMLmQo4vWV2N59Snrc3MBh8WwNu2M4Tm36n6zCd7wEUHwF542Mac5Lisjzggx17zBCHdjKReTUt",
  "key3": "4fLkDZcHnxXUVPoW3FpqgZpC1yHHRv828ET7w2cSMQZKESFKMt5Q3FFXEXptV2cCDZLcjKHdidUxhCKSCfmohJT2",
  "key4": "2psusBhPh27kiL2TTqGv4iy1GDu3oyhTxhvNefATFJyZxHbTjSH6pyLESGoRT621ayxi5uru6AaDbXdasQfDPvUk",
  "key5": "3tEuyj4Q9RzEt5iP2gEpyd7dS7tLAyQabxfXqK3Err36o3nmHyoRzR38Ecv597YHe5GM6boKGckXCM3AWpuoxZLj",
  "key6": "xJauZcBC438fJ4NTbPBKLvzxEyUYxWMyqup8x8oxBJPgPXrWpirDsHvkUMetPpjUodj4HMcbRzu5Gz2bmF2w4Qv",
  "key7": "2JnrD3uGcH16239NCgZC1Xya4oQarrAxUJznTLKXT4U5QzhioLd4T5gz1G2KTszkUciv64CbVLQCSNz4xiEDMv5R",
  "key8": "jVD8N6YRPM7WmYSnUVuAAfsuLwRmmtV22Wvy8Cm8HznMeRgGBVxm5zqZWTzC4j22vaZNjH79T6687TcW29cZ9a4",
  "key9": "4W36HgfXH7ayg8RfdegvDxXZ2pCU2zxNMquBF8vUq6vuF5Qii6qxGuRPyDB6vkAWH3RbbhSvuBnKo8epxPJHAgra",
  "key10": "3aY1Q6AguFY7KQ18JPzKsuqNok3FKuMwiQkqwXeAJbFQpE3qp6HYUThiZioi3obAVAPQV47FKznw4xQVay1SAiBF",
  "key11": "2yym6UpeFKK4Vcv2mXsXyKE16rk2dzdpzgowp2zkrPCTVx3kJe46doMLd2b3NcdfNY8gNaGTWeRZXs2YHrfTFaiW",
  "key12": "3JgMuGTXt41bD7G7hhVfiKncC5mQqHbx27yGQQ3e3r4VyFfaYrFLp62fgHHxCfmdrSQ9WcRn1FXiWnmA8AvrTbtq",
  "key13": "2KY56AJNiVWwipoj7Ww6MzGZ9J6DXHqk5g6YCDicydwXeWjEVQ9F136k5pjcduR5zyGpVPhdJofNeBzjuAh9pc6k",
  "key14": "4zd9gfcUDjbQ7KUgCn5rdxRzNvAqhUsc4ttfxfpZ1nacwRpkHEDEQsTBZSbDr4ZiXYmM6RLcJEvVr52Q38foeDHt",
  "key15": "jMwAdo4sQaBr7U5mfbdzNiAYTDwfut15QQHkN3ovCFR7CZ4cKztAm1NeLBJDsCZHkbsuXHcYsCvnBcyic2mbHuP",
  "key16": "3GrEazgbE8vHsMPK4cmrwmcdzy2uvXd3AWZa2NaUjwommnxY4so8afPfCdjFGWoQQfyznHUmz6nMC5Mk6GRSGyz1",
  "key17": "3SDnrw74btbUs3aygQjzZrG7NGWXYrWGCvXp83F2SkLpKRvUBAuya5CbU364P5ao3q7QiQm5e4yvFbSNgVtH1ZyQ",
  "key18": "fGg6BLCuWDsrBiwUBiGSY9EVSqFR4Y1g46KcEamrMsc3hpmK2zfcFabBQ8Mk2nXRvagJEBrnNHnPUDVfWitQnh3",
  "key19": "648W9n2jU4YuSvQDH9TFeUkTAJkrGgaySYf4fwRmrF7NhzURGmkkQgVQXmMvP5K3D8DwDGvg2BESLRpnPEyKEcCo",
  "key20": "4n7zdHBQ7395bmvj9ttnGFRgo94FxoweWgtfSLoj3DdLFXPEy8scoxNqCg8TnEbn5A5cQtj7S2syCh9kBF2uUePo",
  "key21": "3FU4nfYK56xUVjJZ1Z9cxBez37rsJx9Dms9NNKCKuCRYM2BGgsCp17LCa8ijE95dp3AznMdKhdLWVaYvKhmQiXkj",
  "key22": "5YxssBPK2zceGUhVVyGkrYNvLgJjGDvbUQkLqJeCQhgK39BDYJXvZpmshH8uD3yr2ciNgJzQqKBBp2rNtxM8f89J",
  "key23": "44YW5sTjNKfuQVmqc8tsTeEyTTrREfiYgWUZ4uKLzVMPpGqf4fRZdkeHk1HvWJ1C7ZGTsp9Ne3dWd6QzXR1RhY49",
  "key24": "2xoTjvudDXGu7wCaj9aT7nANUX8uD3R7RLuT9QQYV8HgH66Gsq14GyVJjdnu44K2QpPdAwtdnbigcK1XvybMDJF5",
  "key25": "4ptmkK2qnmiYzQV9LjC7zRT1nb3LcCzxJbWcU5VDsAgeSjjuUut9iKy81zSMZ6vLh6vRjTQtTjaEG8ejFdq8jFG1",
  "key26": "49xsXHZ34wUyS8DyVWDmGrb6Nr39eU7cH6wCS5jEmKWVneUJPnkT3rSdx2SRPL7eHtiWu2k9uFkDkTPLaVEB1eVF",
  "key27": "45RPvrkRttpE2AXmRYqQKQhFTzEk8oBE3vjM3U48Er1NrDywDkzTgYVRYpf8MhowxbdYTjgD5jNMGTCAhh8b7P8G",
  "key28": "4CUitMciWqRbRS9MYhaQta56oMstgwWbr9ZW85x4W2j9cJGAh4Sw18ZQz7wTaw8JVVtvhgkksxLVkrAVr9hzgTMx",
  "key29": "3ZckmkmAW9kLvwCqBujr8xJQRz24D7cfPRMuRhNrfkc67HL5VvnyQa7UAbbNURjGad9MrX61xXaezFvrRAXeciv6",
  "key30": "3VQZShbwBufBpNTnq61Ghty2yYnPr78kPVRGYdZXvdCGpA6k5gwB3vJRbm66Vc87wSti1U6uNpeyTUgtxRAB3L2F",
  "key31": "2NKegkgTprHTjEiUSyzZ3fqVGrrK4yuVXiNHPFKvyKz5ZJ9GxoqndCeFWRjJ7fK9a3pWPwFzJErZrw23yEm2MFmn",
  "key32": "3omb1ez3A3Yhafjtu1nhPFKXkoyv5ZRL6CtV3xr68JMMZSt4HtKFbZyM2yYiLdygCNvx8PjszgdjH7e32ATLdLpU",
  "key33": "21kFxXoMPKW8f3vri2D74RabAXZPKyhW88seHRPW95WqU4jC6sWXNVAj9bxTE89oPNVcGXndEYALjAH1tMz8BiE1",
  "key34": "4FrW59fkiM8RmKeePxfk3dJxsC8r1ihzoTp6JAZhegzWgD8gsZjjEE3RtwbzPW7wQXFrwzakQiFm6ULcP9nFtFSF",
  "key35": "5558GsDyMfG81gH6C4Z1D2zFVq6rDwkg93gUWb8Ea8h8g1FLyLzVHbBazJh6PprmCuxGvAtPQRc57jWwWxS8GxQh",
  "key36": "FQLSk7krWwJityab2xT2pnu5oKMwPh8fNoi1ko5MycsYtSrUTorQEfYq3zBnoFpV1UVZfJCN2XceeasqrzhdgRC",
  "key37": "39nbvHKj6t428wapXZF2YrtWNmuLtWFmXk4trBeZsDNehZE5SD2MWQXeouYGzGMUsFnEAeBkpMGyaLXNsDGxLV3r",
  "key38": "5NUhh7H3MmC3638eDimUU8cGJJg7sXYtLzCEg4PURxk3EroRDUxyR1LcZRuLyCqfdLFddziX4XZaSCU36Gdb4EHX",
  "key39": "4uZRfWbZVBzKpA6nE3hP12RUo11Vq3Zue952BuJUTtpa98yxuprv3JavjLuj8etzvMHkMLmSThZ1sfoho4i15fPY",
  "key40": "44G49n9GxA1jd6RQ9RWxrDSWKyZXA1V42pMK9QfH9TSS2bJZ5NtXEDqdM8MpBWo4raF7zUegQwzzTizyMHx3SgdD",
  "key41": "66gb2K71J7Sis2ao6MEaKgvCxzNVDiNzHkYZdcUWmS4s2qtSnNSdn1masfeRAHXXiwioHP81Qwr4o4TB3ANzXaYf",
  "key42": "49M19BEStD6aZpHziAcd6YUKukGXCnPHr48n7qrjNbG48Y2AUnJKK5ntr5r4vZoHgXJHb1B3CtjQgerDPCYpPpUa",
  "key43": "3HMioSo1k1EGB5pY6SCV8hA4XquZGzt8VSH2SbhNsURWDTXdXY3od7rPyALwLGkUYfKNsH9vJ5ngseDrsUa7B6vA"
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
