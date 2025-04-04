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
    "39HwgAmV4fZX5TQjuFFJV4EqEawWfurLuF8X9giFFRpZ9cEunFfqQQ9sP2EyXmho3NMPQuHxjAJEi59aJG5u38cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HpfyG4yKtkKNWQTRVTt7yYEq4pTkPPDBKP49aYMzTiRoZaJsSwdDacTpAyt4fG4fFuEs5KX4QyKukEvYGXcQmi3",
  "key1": "2dhXg4eVG41aHMEvY7xTeXsBfrhzXnRMHKectGxMxYDRsxgnUzLy9uE4EdtEQZkR3sDXv1SZ4NYp6Gvdf2vP9pQi",
  "key2": "5eo4GyDVzPQRyTihTf5ESup1mjsWNc4m8ziTrxgmMLskN66YR1YaPqWGuVo79v52LXSodZU5eivb5ky3BRCY4ihL",
  "key3": "4YmqYGeCxqrgyRaofspBEQkCTPQH8HJQ57jRKoxcRrL2R4rzyB8xCzQmsuzFhwDJMkjN4SjaaDHGZhJz1SeGYc2f",
  "key4": "5LmCcwJbaTkadhVKDufjSyZnQXYmBgGquCa5VndzoRigL6Z3aqjYwrU52VPAmuTSLdU5xK23TVixpvCL6gmxroZm",
  "key5": "2jNyQQREQjxakxzgm4BCujXVjZifrwU9RbRyBtqi1VRMBvANuFHaxVS2GFkDBATM8fk6weJQ1Bwk3G2VHLL15ttw",
  "key6": "4nWoyAZz2i5dJdVSQ2CUJ7ypfGZUvfRAmNZVtPLneyRLk33zKE16WKtCkGddtWounSzssJ76gLALox7Cc82vE6q5",
  "key7": "iyvZMT7Uv4F4rYuE5d3rif6K69YTHxuUoT6nBzWGP3bKDRsqpNs6QEWNrhm4cGArUGkAcip9dBYtbETfmWcaNTc",
  "key8": "5T6RM1XPoAM2zWqWSTVakvrBtigdBBp9vAaRHjapD7yUpxcsvLdfah4WTRDGKZMsTpwGQe7U9qb2CDjRCf2qh6Sm",
  "key9": "DDe2fXGrVUBYhcv5LMfohu4x3UtRXxbk6NSPTiTqFmpuexAhWF2scSCZof4muNqpWK8oumvnBWbxxBcuPZ6RAK4",
  "key10": "357GTT7gFNZg7NUcjvEs9NtZS2cECXMYWsjQvmA4Y9nstXeJkdSdFyP3nr3Qu3Ypcv1pZZmRxv2oTcRePQAD3Ao3",
  "key11": "3nxHpXgj8JngXTLVU1qKobSVG74f2CXNKXmTvs9SrjEqfNV2pxyVE3vph6HvEyTZqUd8S2RMLtpDUiJr4vddrhjA",
  "key12": "ytpPqa7UpzcZuTYoRmsu5BgmT39N3A3vEGrnxJ6gtmeWYpnNY5Pn4eNC4tK1qGMQtwAy3Yph4Ys7eW3heCXVWQM",
  "key13": "5Ahdb3bVLPFD96smb7cDoWkvbjgm1NS4ciHgSQtZf81CbPGAmNCixgsdnPvH2Uq3TUGzbGCMgw6MK8bmcPHM4D37",
  "key14": "52hWnPt7pvy1ncRjRsRz4ScqyFGMUyBnd1EbbK6jqf9uZK7QrWer58hQHkCQGGd3hXAhyhQ22M3ffe5Tfz7EfzoS",
  "key15": "273GVDnepDEKJANF5VJwm6S8KuLB4bx3pLdAQ5hEGaoB8bozVTGGDKDWcFZvt3bPJnzLVyzYnZgSUQ6JASjuP5Gt",
  "key16": "32X8bDisBKnZX5RpZ5QP3rWczuPmLsFjLHrUxwPqmKE9rtAYBsgVXdyhi1zXzeAe7asgUr9mvskwL5XBx9W8xB1K",
  "key17": "2heps5QJRs3p8W2kuAfqGSkp92CVkoGftryodJsum1YLBMfbi8yFSrBZqcG84YSBxk5VNAtrHKCEPgMB14WtmVLD",
  "key18": "2WB7TeTsPP2uZohAUhkqxuA7y8hrRJfQTVpq8bGc3D3y6kUZXUaXz3hjpKaRysiJQ4LZNmyHqgRnHFY9Tq6TLTFA",
  "key19": "51rQbMk7NBvof9noWQjkdPEeroWGYabvdCDkaHbbkvqCVZFJvCwTSX9MYjBWGvmmYeDSgTw4K6RH3oKyAkBqmm33",
  "key20": "4SzBsPeUbaDrFUu76FASLvmAU9eMumkfkenLL5wAFXLpDsCaYLRwZwtAGhCrN9cvGi47gNeideVULVbQ6mzPHBhH",
  "key21": "2fNZv7Kc8w5Vn1rWxJ5bF2PEhk87tJwVEbyPTdWTjx7ncS8eNP9hFDs6pMGXLcvbnce76LNGTwV1SkBuAv3cqSEd",
  "key22": "YEtzXewZ5riwqfKcGdQkSCQi4dQc3vZ169ZpxSPrr9LZXWtaa8CP6hCuB5F58bR5uD8My8bornUVrMeAUZR3X33",
  "key23": "56Q6Hwh54NXH8kZhQKMwAXhHxhRT4mddbrruFa1FiEubZQAybGGzJ9UFx3hpMsGQvMVPxdoxtkQVuFHYHFoHBCr8",
  "key24": "5KdSWsxHob6VXmWDsaa6cZE1iG7p4W2P2i8E9WCpuZSiwfPaxHtkKSGidtBXvZufZJfJou1CmxfYGWwcN3bY4331",
  "key25": "2wsSvCqeE67USnfmNKaCpAFbpoiuBqc6Zi4aWkKVZw2J8k4rMdBdFV6aX2Fuc37dKT4bwmUZ5wqhUWX1sAUbKqxG",
  "key26": "XJ1zTEEzzQAKgzF8cbFtfpKvtuqC5fPCdrSMfB4CCX7QmNgvquoTHt1DZJwXNaSvwgLCYKcu97mwN5vsqUucyPT",
  "key27": "67f1dceqREPREst2Ed8KNnzUKxm6zrsdqmwvc8ZWTuJ8xingToMereA3x8EVSUHZBCHuTHxDKr94LGcvvb3UdNec",
  "key28": "41osTgBLY3RCmsPWiTf6QSBR3XYFFUfDJaBfep8wKL7YKBFKTp6jrdGTW9DY8BRh1Qz29TH7NbJdzKynW8yYU8kq",
  "key29": "3YC9n5QzPFAbTj3i59nJsvR2jrqZqqGZQSee3Jzm8bkJHji1pJRCLcYUWCHLx6ffrHNXFRaRBGZYLEKqTZjrNeDC",
  "key30": "2M1rmAUr25SN8DzkboWVJwpSzg6zRrHZuBnkqv3qe8tYc9kJq5bQQEiZp2UZLzm6qsx39Rurcc8x8GnzxaHE2enJ",
  "key31": "5qSbSvxGN3WLMLTGFQ5f2d7A2aYMjoExXm5EqHmMRXqr427ebGoUL6x9Yt32VHZrtEyCBDz6WuK8duTTHLdVZ99n",
  "key32": "4FV1ronCCdPmQdE8V3mSPj7zTrxzvnNAqu7AiAZKFGaqKTYemqwEBoCgtwWdpuUy4oM36UcayiStr5ohfCABVnPY",
  "key33": "4XC8oQXbYfhT7VmTgDj9xLjc9w9mzLnXwqoXJLSj6fSF8Bk8DdqZe2jckCXCsrNXfyUx8sMszJdsEnqNkR2hqtiD",
  "key34": "4hoaDBYVYr1UkZQmA6kfj5E1ifU9C9HT4NuwuHyZb4q3JrxtKEAVmEf32AUCyrA3dqujTo5pVVqEPpbyBLDuDkXY"
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
