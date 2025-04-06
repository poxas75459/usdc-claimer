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
    "4jbDvmhwK7DKBtDwxCLp3Zko56ZTttfcqFmUQ2whx15XcQXmSSnva1nFn3YuB681zTKScwfDETxY29jRRAXscvJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4utqSNqVZPBKLm2SS6gfBsbW9kiPQDZng17nvoYHaoEjWKRtucUWmHQ8oeDwRaELLQvBp9vmkeSd18EL787VurC6",
  "key1": "23Yhvwnhav3MMaUW8CUiD4eyLRS83m7QvSL5bawDGyAzH2GkQNnFUqSzqzDRsfxyUW9WZwCEuC8nqqgzE4V7zr8K",
  "key2": "2VpzLrJntqM2kCMDVjS4BTaRwrFRVKy34mK5tgSJyLpwAj3mwU2gzMXfPEsMgSb2EWRtwj4r8T5pJ8AURXADJ7KR",
  "key3": "5oXo7WfSobv8at5yzotDYiDTx8N3GQqeoK9tfAC3ad6hXfENY436z5c6QAfRUZ4zAPydSb4vtXhy1nEq5SAc1P6W",
  "key4": "Nr1F9CXMMQaCKSFh4z29ScqgFLpRomTP2tXZ2XtKrEdrmNcx6oZrEoYZe4QkohKvjww2fudh18sawRxTu5ggRfC",
  "key5": "w94GBEkRb4VYqea7S2tLwCDLRooQnQ14GHiKKXktCPX6YHYMhiWSURCVQpqP69GgC6PoCVVPHE4Pc6PaNuzvWKw",
  "key6": "2BJyf9CnZHVh6MCGXDwRpfTWHtw5F3Ryp8MwAVxkPuzjN6rmp9aQoiwVjYCrrYqc3Ko643jvSpRuJurLiBgR5zTW",
  "key7": "3HgHtHXfj1d3e27jrZuK7kzGZDCWZmUGFLPDYpwK2j3XR8tPkURnQmqYuNDvGsXhkydpZN1dcv7wfBUpRA7PSiH4",
  "key8": "3hSLWUmTGfhMtikK5AuhZB2QhEy9DeSXaJ9HVewuk9AJza974ZJt99zmGHtqzPiXeYqkn2uMcNvbHCiiuzWcPXH2",
  "key9": "5yKKH2TmgtxGwNmiKYtzBs4hdomiM9MgmYJhB9LrnznZS3PpgjJPfq66KdUq8ng166ZWvavMsJXAXreb5NLmcS8v",
  "key10": "2u8J31bEMnE5xFjPdSgLZneF8qo43RyxfvK1QaNYWTkxAcxUHuGqf5SRVnRbxVBGYEbVCxERSCUfKtJUV4vpgEyC",
  "key11": "5E6bks7yg8srL29kLLgVRE71756kHvDaNdLBBS59NKCaWUBRNUh1uHYcPdF5dge5zDPMR9AV7NQUWWqKumEDLySy",
  "key12": "L2AbnrkeevFh7Nmn5uand9Ne4m3FrY5r3BbcnEo2bDEiDH6Su3QenoCkXGD3C18BYvaYcMLeEbDTQMDHNWNKHCG",
  "key13": "5Dxe8JkXNxMSeUuwiHodt1oc6Vyck23s3XiFJx16bbDTQ18drTTRskE8ksYTiLk3tYQ6Lnd9FpLxUfwbsLo8FR1r",
  "key14": "47Zq9W2Mbqoyw74KwTtKaUiAaZeW38U9tRdnyXM9aTg47U3NQx5VzSVDn12fdiP6JtXzUAoog4Su49SwuvfXyyRp",
  "key15": "3SBr2K5MdvbsktcizViBc1puL89doh94ymwVeFrSHPYhSpA9GRGzDKXHxiaAYWrgVGRWTKqbq3oF3cMscEaLvzZw",
  "key16": "45spBW9Tta5ZZEj6UG4pKGSw6JuQb6wGSBywV5vxRPR4c3aMyhJ7P5Rs9bC48tvCWrrmL33T5xedDw86mhgN3aYG",
  "key17": "3UzuD3BTz4vTXQ8HSEWzbDNa3zePxfniji76QJnXPYXdZwp5QK27t7BrpqBKRGcEScou8NGc5Nh1i4ykkWrfQWNL",
  "key18": "3emQYgccrBjrDtBjUM2ucsM8WGqXCKoa3NdcTvxENr9Ez6hoxCF3qsL7proJeeWqGjcf3AbhLrynVCxdC8QYa8JK",
  "key19": "4rahH8iMFkxafHSr3bsEygatqSLuqCo9i2nasc9Nz1TvykoBPJFcRMTw9WQ53ct3Zvvgovhrr5JnwnrShXRtHiut",
  "key20": "bSMnAp7EShTtyrqn8brGzU6cfvu3Ho6jzuoq4xZcZ18NQfDJjUNTUEZUfYCBZiz7AsJsW63dbNwhW7CibqxTAAP",
  "key21": "4Hn54S5KZrmDXCJ4jERfdxm2hQ6UQp5f6GTTUWSN9jQMaKin9ixmuoYejDAdmzKrt83k4ZSW915dUuAbuuqhVXRg",
  "key22": "k9KLfZApdFCzY8emt9GZVo7TWrv5Upt6knzYsXN5aDfGGKhULfAfCPrUtYTfxfaayNQxJpiwAZZGHh6xRyF4uKh",
  "key23": "3YVJGDqWRdfkBdQK9pUVVpFxfVHm2b6RyRxk77zb3bC82FHbgw2VT13VYFuSmu41YieR7E4zPH4eMrm5CDZ1ajxg",
  "key24": "5exBqh9b7vtQWyeto79LSG7ygCuyoexWQSYQYDTTfk9rLo4GaUXyAJQ68P8tZAwMF4kvnagjNgreoyS4YQ3BeESQ",
  "key25": "26EJTvCZDVwkUgeBhoNSHuQqZRewevHyVvHTjqXpJKQEhMMNmBuQSp2TYXiEWdvVgfz5z6Sro6kkKGVjTF46aoEN",
  "key26": "3iBCjbbZC1t2AoBhQRk42kA1s1FD3VbknuvSFUVDzCmMt4ePHsyVDeU6Hkx26g7KWUCzLXgfpia2qSGEp6zcA9VC",
  "key27": "4U7LqNr4QNhmCnhpBEYQuRBUWFi8tAqx3qwDrepan8KVp7CAXrzSTg2q7GJzRAh5CkvwEHDzxQcJoJveoYJoAsPp",
  "key28": "71CKXK4dXTaBr6WZPx2qVQmYnQ52xuZGapxs1TZtFpnLPoNFyC37R3nAHKAr3LJvZRxYkq9MV49tcnsUSkWv4sY",
  "key29": "3Rd7pfhHLgjeGPW117etQznFNGRZLbz7SXRPGMApX8zfMZsm5ExQ89VTgsqiLfduAWWYzynuUphk6eXtFquDLwK3",
  "key30": "wPhwGMi6Z3JAzPJYCowtbzghnGAym21a6KGdaq496i6HQAnjvANyuwG1ZTr6iyaqamnekZPf7XJw8UFKBfhREWU",
  "key31": "28PKxGg4pyVD9VLwiK3dcnMsfhg9ZqQXQVLxsmMYBeR2fJ3D3yvmQomD4WVoetZLaiixpanASYvJCDtNDdXh8EQk",
  "key32": "4gfKiZZak2dAFwDvsRCJYQGo2AV3XL8xicmcYkMK1eceW8zxZ6MxUm4BGqt2XPLmstx9sKEvBv99N1MGgPawPPpF",
  "key33": "5Qe4TjfqtvjFcTZbUieKszzrPZ3jr75Pp8VGMsbB1HZA3Y2atS1s7mGHJCfxdsj2At1436v9WTUZc64srKJosHiB",
  "key34": "4H7RhfVGJLUbPbdWmDhKmuDUYVcKS4SDeaM2k4YMYPnxPF3R2WU5yRqu5uR1zq8e63pbEXVV8rS1k33MhocxGJXk",
  "key35": "5wQZmLzxHpCbws92rxyxgbJub2vnCRkqbHemJkFZvpJahJ8W9JZQCaPGQ2vbWAmNhqYVUYqtPCkPd2DqBMa2eoZs",
  "key36": "35ftVBq4LTsYG9ZxzBKfovXoGtE6fy9MEkCitjUgeobbaEApBWs7bZH3uGa6GafsWNKbo2pjb8HJcm77GtpHTCAN",
  "key37": "3HDNghcxW4aLKEqcYSJyedTQadDtkBtvSmWNadm1jNbGnR7N2QmSHaiTx9bvFNmLpLxPUWaaxzvzbqKXPwRTRgbD",
  "key38": "5BHciZRxdbzTMkvUy7xh8kVVKxDWJ591qQodsQtcdA4hTc2tfT4WnmoQnAomstx7FZFLFguLaBNiFVR2jkQBfcEe",
  "key39": "5MQzBWJ8aFDSYM8t8fzS1CtjzSB2t1LAJQng6ywdJ9UxzQWcZVg2xpCLLSGrR7MRBvghkr7GWhuPkzfTtfLai4a6",
  "key40": "c9R6BsDytAfqanQFCGtmFUXTWxjwR9gbtXZwKcbD3cPWokgAF74ijyZ8di9kTE5QQQ6wdS4KC6YK9XfcSsCS3oN",
  "key41": "3vJJ6wMjkpM7F1LQH1VQMGnGqFyfQEJ8icNigskzZhdKvBombZx322RqX9KYqjN5XRwQwArw8ddrDCEg1BWJuHfE",
  "key42": "5Bj1FfFKsTyrfgccDnRhFHZBt8GnMf1fvKPThhBKj88dmpPVVht5g4g9b1B3ePtYXAhFqZGPDXUBEDHJiBRzr7LZ",
  "key43": "42qpudVG1ZSeLbojUpmeFaUw67FkwVQpLEQdeT5SrEW6kDK21Fa8yBKCgr3i8bamfpBjgooHpZCzGJz26jkCU2f9",
  "key44": "3dKMjzrHjrszFSKobeqGjPeiCxD7XiHp3nzDKWTkS5pisDsBSrNiMLWHeUa3mUdrXjSADE6NGqnhCo2P2QbHq7AX",
  "key45": "3newquXCwWRkoNvfya29fpwBNsofuq3KdNmj1uhQbaDT2xtBibYmZP76fEp9aEBNjGAQ69rMD9QnrfFkNeHhswUC",
  "key46": "3P3aKTzFgz5FbEsMztsbkGpJEBtPTnAcVZcBAH5hdcV9PHrtupHnpehxyp6JLNexTbnCJawwhg3WhYvqoz9HideT",
  "key47": "3Pkwq1ZR6AH8RRRBrSP1pTGgFGKkMiGNXsjWgRmMUJam4oDfGXcu1qqKb9qjQXZtNKyYYq1HHWK4ud92h4DvCTvq",
  "key48": "5LLL2soPx8gY5nAdg1kCgZ5T16CuXQdTknY1z4Rve4H9uhpUb2u53ryFyEfK7tmRRUZiqFzXqER3txtjtwivU9y7",
  "key49": "Hnch58WgYgBmmrBCTuPiXGMY4H3o3afFNzKD7c6D2o91DvnZwqt6kSGNNAHqvA3KmuWGYmrnpH7Q6161R1eFdY2"
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
