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
    "UzpnhGXXajWm8Kd2EFFDktymdpLXrRQYfKFYM7cxAk93dkzeFnCeeK6zKjHhCNWGMfhM1yBroyGa4F4YDMWfMyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y531NwaipggAGULkFnnQMjy4M2XQwE9wvZQduXdsWk1pfvmYmpsE3c9VFYsbeDj8GpSmogRe65HPtQLSkYphKDG",
  "key1": "i5DGWCSPQU8YrmV4Bg4gbCifn5irYYnAc2Q16sP8SLCwA7ixhseVYosaGNRbbg4qHpjHNcKqA1cfVdYUwj71y4g",
  "key2": "GDB58y1VwEZK1j76pGBy6uyoEoi2M5uxWcqV35Q82koEZVjkuav2fpGcb9NUiCj3JsFmMM2thZwCFtuSDsPeVKE",
  "key3": "4AeapChKcyujr238j6uhS1yPH2uTr7x37puYWK8MCXtnkiVeQZfqsUbSHDehcv4srzQYn5uNkn7bz6TAdtcfX87P",
  "key4": "4SvtQfPhuBKkMWUT1t8jiUAyiFE5fJmWdcGg9PnHp5h7tfUjFzVWbd6vs8hLeuBDFJkcXAzSztEL6ntb3R5LdkAP",
  "key5": "3JjDvVJhnTMGcAUuWH1RNYXtLoUDCcC8xc6aT9mx2Ncj6nUNuqhp7XSu3dedcVE2ueXP3eZXUd6BhuhcvY4AeJii",
  "key6": "43ukN2HrSJvkrhnvTFHpR8ysKbmABjbsGa8KsbYfhieesU7GYjH6GkpyLY628hay131vukwU5JCngyHHiW4x3s6c",
  "key7": "QHi33awQ6bFWHRRMhmAPyMezsm6mCrqkozt68apL4N1GiPaVBJG8jMK7XJ5cMAAuaZc7YBKWHj5bikGF6zUHgAE",
  "key8": "4ZPxXnLqz3pXFxCMwztQY2HcaKENzc8ydwtT8orbhDj7JFbQdtNzkfmreNfCy8U19N86ybcDYxDTgzu9V7LwpBWE",
  "key9": "BUTvQKxXFSQaGdGRoffL1VBjCGYbiNLcLp8V1mJdeP98kU6WK5WJzCftzsS4XUdUXGAswzyEPvGjM4Vkr3WcPX5",
  "key10": "44npDdmLDVyoKoHSpooMSqJiWE6jhX5kZLtLLXjq4bw1dksLJpDTKuK6X8iaevR4Q8mEbQn811K8W4VyJ9aHi6Dr",
  "key11": "5ZwtMkyphFmnz4bCCRw4tAvUc9jGugZDdrQxJ8cSwArQVW75p3iLhCBNw6G3dFu2YxmM31XkLNq5XaL9Twm5JeiF",
  "key12": "5LiKFJ8AakaedZgZziU1ZmvR7NhjfHeb3af12kMJDaegdYkLAe1y3ETqqZuztvM4cVf25TwCx2Df7Tx9oPK3aD6S",
  "key13": "5VNmrSV67CyiWUmjYhpv7wa3gNss72UXV2dXTpdXinJXA8mH5RvwL87Zqffsg8ecjk66NScjGEM7BfDefMJcesXE",
  "key14": "5rCBPMZWwdH6uVo5pjWHg2grSsGnUrK4nBu6Kz5WXENKMHnU4qoYtj38isHHqFTSUMmf9GwnUMUyJRDfQkpcbvrd",
  "key15": "3CcBRdaFbkX1LY5vrXBBnEk16Xt8WR3JQsPHk1pJmzPaJ1U9kiX8iKbgEgzqQHxh6xGMhqEmZVuQormn8v9hpJfE",
  "key16": "5yVeoN3Us3SKTJgBdzC4msEnfiQTMQxfF6f7D4KTsCPDrNH3WAsDFQVgBrJaNu5Ykzsn7xXhh2wyLgT6s2UyJtxD",
  "key17": "WoPRrPHuvEUFmmR5eE67s5H2KzjzqKj5cem1q78CPs3dnUEMYrwumnFPNHKLUZGSayYsGSFGcyhA6GdnbyCNTeY",
  "key18": "2b6xL8RLuU4Kv4iAHy69g1zB4UE7Xc3HSbhcEoxDegTEr1adhw3kwYjYTJezAwpmnQzFQPyZX4DzkHU58dd9Ez1c",
  "key19": "5EHjfv6jvPD2SiHbpiDe3C2LdEzJXMuN2kaYYoSNMk6WP6xKdvM7ut5ePtFtYsgDztLA1QaY7PJ9yk6EXUjuQedx",
  "key20": "5rRTJBwkwgm4scEL5JFgUxDqP7g3KvcfYjkz6uu9XA1aucHfM6XzLqTu9xjDohywRFfbW4vtAKtCYskrXBTGH1iz",
  "key21": "3bmmQFrtHF5h86FS7P7xxXbmEnpyhKLBssebbVKfPFwFkHnPj2SdZ5Y3rExyMZgB7xLysH1G48pDqJkUBRER2FHq",
  "key22": "ZUbx7RjHsyUj3Nx2cX6NNoeT54dM39iSTTntSY1WRGH43WU9uzmMBcohoYsmC28ft3rTJh4G2K4bNTVpDWyzvDJ",
  "key23": "2VHgFy4YhQguN6HfYkEvtN25PHdYBC5XuKRRwuz9aZsAuCju9HbzxB6UXmh65uyQyPoX2v6hmgdAZMENrjrQt9EP",
  "key24": "4X92fgCVqHk26JbyrQZ1vxWZdEH2ntG2EmAJunstxVCHom7nA6fu7niyqynCjZc1AH3CtSqABCo5xua7XZjxfahd",
  "key25": "3acdK7vWFLASTgKrhSxV4ikf2u8DcoE3qWp1tXQ3X9Mo1zDHGixiFELqENyowpVJFkNJmM8i3VxeczHQAZm91Eme",
  "key26": "2MCcu7wwdPBJiKuLDUuAo5QUKzp4tdFTJqhtfJMN65jGzvJ3UtYTRAXpdeosGGnMhL5N8NTuJjwwuCCpoHQVePwb",
  "key27": "29yfpxWgY8kCHsWDbWDPnPs1ykW1N7iTzvqDEJTgTNrteUXK8DgHdFSSaE2aHgZcMR92yVQv6XfNZBCAm79pHKJ5",
  "key28": "5tQooGfAvoGsnfnMa4GvaqEEYukm4jT66QV9U5S7rdW6Rsn4E93bM3FUURS7aELCjQqgxiU741zbaHWQjzbLAzBv",
  "key29": "ekvCND4yxS1143DVszwGFCNSVY1Lu6Y9HTFV8zB5Yqm25bP2bF4KdL1Tw9uRNXxNFK2uK98Dso8M1SUqqTsD6hg",
  "key30": "2eQ9Lvb1ehLoUq2491ixjrwq5vSijtRjUUFdE4itdZ1C7zUsu9tXWkADXNDgSPeAHWFharFPWv7m3LvU5zJ9vaka",
  "key31": "ULVii4j2shHhbJDboPQjcMc2gs8msM4tBaRk8uoyPZiczFUtjz14RXJRnncG9rdetQ9i4KDo8Qmh9ZSdb8BQ9pe",
  "key32": "Lr1rbX8dnuiQuQyViAF5fGkCRHshY3ATsACseLjjRz1PMtHZtdG1xegMjYpUuj8TPfGp6mQ9StgP8duP73dZ5UV"
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
