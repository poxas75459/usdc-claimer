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
    "5CqHBhjYubfft6jLfT2oVmVjNQPCVKBXEuyEvDGu3bYcnLrpuPm1JKSD2hwDtxaRLjxdjob3Fn7FSe2mEicy4ciS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4mFifzkzfcDFXsAqkBeK6d4XBesqv22MA9vF817mb8nCTQ8yfeWC7w67ULC7eQRjKN8p6TRkqmPG6qxwK217G2",
  "key1": "2rituAWz5M4st9ezbbqeQoWoudNVxwbiGLqxRNkJoCYuvzQMEPwWw17tziCHGdgzeBnpsTucc7XYdhtx9YJknqTP",
  "key2": "4cNaLF6ZyfUX4cDA719dAA8rnwGZkSNdfy9tTtrY1hAaUzr47PQiyZV4n6DTwFVWUPU2vT5R8tQq1UwcFKEmsNbn",
  "key3": "2hzAkVeNWhtfxAd5SygdDQ6gmFGUBu7SYMH8TsKXBhas9kE9xTwnFyZ1T7PoSKxSwocutUCmJarZn6eTqcGGMvb6",
  "key4": "5H3iLfGDu8pu2DxkUC7vH1vZtwzrtMmLXrCuPPtcBCYv5J6VaHeEigaTLpKHmBMskYo5s9hajp4wrH3VVUYhYwuB",
  "key5": "3AWvypFAs4YsPM2Zwdyxsykk26gb1n5x7i8tKqa7fzTkFa4jRY7XfXu5fXZgy6cYg6epQNWhyBmXR7sZKpqYb26a",
  "key6": "2F2rzJoMMPZUNrR7ghfsZPrvnVHS2ntPpAsD1xHZgouRrFwv4p3TubRaw5v8B6w6oZLtR5RHQZhzCmoBfXyFeYoY",
  "key7": "3z3UkALYVxgxqrsZbAo8Y97y4hQRffnRtn6zyyi5CukiDNyhMnxZZiv6UyVjG3W4iAbsoph5sa3cjoP5UHPYa6Cn",
  "key8": "4bxLp3V12hdydV98F2aZVYd1CzStAYTY7zQ8qxRP3v6xqGFkg3XHXPz2ZvnqnkjFtcsMo9LUvJuy4taEs1qdRhUx",
  "key9": "2c5oMXU7A49TPAEyP7kmY9bGXDoP2TX6wvhYc9fXFRERjASnyeciLJ2o9SoyC3CfU3vCDTynMDvymbLH9oUNiwfc",
  "key10": "4Qavu3NEqkfDTzGj5XnpxMCbvX7M9WZWbf7ezvDGzMoRwbyRyLvBuhb6atVytYkvyYZzwvaC7KmSr8EjxyMSuRB6",
  "key11": "5tcsoTiSwxJi4qXszM5wYhsj5QsfGHs4H4FV4tf4Lzxmn5x5wiWExkEBXg8ArACpwHLEc7eQQcQUxJKMSrASvLZY",
  "key12": "5Zf7L1DBEFgEpcCpnutj7KAfsNVAkfVB7RdbvYTFZcespTLCHobdDCcpu691fyadtmhRXAYx7ExRmFPxn53MfN8N",
  "key13": "5XeVj9taRfv57rpoU3SU5nHyfjPoT2D7xiZ3Fi9GT39tM4GknNKCN8RdfdR2k3oBFBgSMBSPz7rPkb4vo7xP64qB",
  "key14": "5GWQASaZAJA1ZV7AbFaLhVPt3R39mA4QPH2WB3E4FuY3sSGWUKAB7fSbqjTbtf14uhQgeHSwrasnXvLRFTqbxgYb",
  "key15": "4q85kmfLngCGk8kCMs3hqR2hKqYTPWo62jyCTAbzhXXqbti61fWMAsyE2A1ZiBzfJcjHwRbuTDYnsxwdYdmKeVF5",
  "key16": "26z5boCnwRDWYPZvj3rnYHn5BxyJKySaM81UrSxjbbUuopHVhZcEmiVNKykjpexQzj3V9rGnPGYg1UdR26MHuei3",
  "key17": "3jtmzW2psYrcKUdyzG3EVAPVU5XrqtKK1TbL5dbe92pvvdzcvdoLsyg5WAdpgAWXCzhsG4uSQzW2xbDv4ZoRmuGc",
  "key18": "4geQ3MtRqTqnzcNYdCe6dA2cPP4wfx9yjbwpAdahuTRUwobCJLQ5yYdz832hEv36ZeinLpN3dfgqjdvi5RoibR5y",
  "key19": "mokUhxsWizE2BhPjiYvudqr9zyoR793h7YAATGkch1qRvQMqbSmSuSJJAaNLrbgrfVc2zW1cqNyk2ineKK9Aezb",
  "key20": "3ybXY9ppUAEDdjC9Yu9JmAu447UPaseqVdJ6x9yw9nCtfBiAfA12UucaNoi3MhgwBrKAb725b25DGbyKtwUPNeFB",
  "key21": "4hwZq158Bck8HFqe7zjqcKeckhMuJooYsR6tuYCK4hLbYRuDZ3GjF5MVD122m7CY3oYDy29957jPDTnPsknvRMf1",
  "key22": "3eBoyiuzUbfnLKfXCXMB7GwCjxS1zfHxwLDZW8Z8RN4C9JqLq2xQTgobHGqwLPKd6FgsKrWRdajGcnvHMTxHSfDn",
  "key23": "2SpQqTSVRB6DBttAhTfuCLiVJUf8sGfMNmEeCd8T7hQgb2zS4pUsQ3FK5ge3KtsjCuK28tP3q8qkjPPbXTHxryv7",
  "key24": "5jRnpQmQ5wcGujqbSLSCoTVeq3kSx3zxv2bQxieb1htcvXrbcPLauCjx2jneryAQEAbLJst3vuCuAHimJ94VEEWj",
  "key25": "51yZ5BSvC96uqGWfGodVs6GC8cw3pTWwYihEoXXd2AyTkao5RiC6pjU16QhrYRYtmEZe6gwZj1R2cxdCKTWchecD",
  "key26": "2zPZ7PJ1vUhK2FMnvPQQ8rAhUsCXtveRyMTVm25oMwyCSyotdXuqJ8C4i4Wr4ANV1gzHzEFSNovhPPs6aent3yUb",
  "key27": "3Au49omYMNN7bJriHadeDbtqJizffbEZiZCt1xRNyPbb7at245zmQY6zjHAB6P7UPn6PTSvX1wV4GVNfU6NxnTZ3",
  "key28": "3oGULHR3EivGyc5LQmhr1RZCKC562LTyJDzEH9k9Tm5n4XBGRPYycmW1VQDqgs9G5dLFUT5wnvcuScmwSYmP4hzt",
  "key29": "4yxt95FoPb8Pd5PQPx7vdLc1YXodrT2x8DpV6gDuv8hiuWiD85rUggmu3Lr83Z7kv3LbuzG1Lc8fCEqDBnGx6Td3",
  "key30": "3jf8cWsPJ8NQwYaT9L2JhQTBXftASDvM6fjMR61qE8PvBky1i4RKVsPP8LRUuzZ9pVsw68XuYxmbhTysSF8P9VxM",
  "key31": "2EAaGnZCE3uxMSfe3a4JVLbyMwvyYvPY7z2Wfp5ukwNXFg2EcEZTcskj8jvtyqjHT3Sqp2eizp5amF76y66mDwyW",
  "key32": "y6T6rvE98FDJQQm6EQtLnAx7K2WRJWqFV8HARcBijPSYtMFN6fGWKUbgV4aqvwuxWcomnW9P1j6oZkHSdxcLrnK",
  "key33": "hUu7UaZ2QXAJFL2E5CH6rmci51wmmVsGNLz54NC6Wxe5tN6tmdumaPNSTGiVnSaLfMgocoZBW75fMQMAQz3uyy3"
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
