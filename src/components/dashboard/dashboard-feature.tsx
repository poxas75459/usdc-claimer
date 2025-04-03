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
    "5XJhRd3GpqceTSFk7UfxvTDXd6vgXtwj6HKRNaQA967eMXMcgrVMG8h69jxDWbikVu1ew1i1UGnZB35BTUFVMVVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPxAhVdadxVfC3B44KT8Z49tfjAoN4UFfSm7A7AVzN5wXKNDdgAc93amn4oYaBpVtonwtYeWwTmS3bqN1GXFLhX",
  "key1": "5DCGJfFXAkMU2R7FwVTf4GKLQ7arKZzBjfKJRg9SvFTGxev4CBgLHaJi9stieQVUgtDfGysJMAkPq9fLCzJVoS1e",
  "key2": "64g6MZbuhxYQfTXLfcQx5pZpnwUfCCPKVMDdDLPbVVwgWXWr5iKVgrtay2Wh17Ab9bVHmLXPMHFiC194mShKR4Em",
  "key3": "383NndPvNLZqCx8ZBpTWAb7sw1iYeoKXSaANBZoNUUSiL8zzFWQZuqek7iLBMLmBAdntkgBhk7FiRMXhDVWA5muw",
  "key4": "Ja5Tn2Y6nt5NupPm13aJx4o1fuThRgGJFo116kB2xqAQ5SrvufqVqfisNSP5BQ1NkswSDyuntNELSHuNZZZYvBA",
  "key5": "5JsLuWCiwqMLtfud354jjF4XNv8h6bLAs2Rg8NJhHNHqcvuswiEZB2dHVnjsByLLn7TchtYTRHySfR7FaeJGuLCH",
  "key6": "5LDN4xd3odRfodUuxhvdY3cQsysTDJ21ZSPRGjrxXdKTv8sPbMmjZfAF3iBBvXB7SFBtXcMM5uUWCoxUGg2gVnjm",
  "key7": "3b6UoatoAt8p8MG31sSwjrny1mM3PsVCnwWoaQTxvHUju16exyavTra6dAD5ZutQ1k9zQ5YwHbHfx7jHMmb86njy",
  "key8": "4VJi7YgNMhyfrm8dT5ApWsT8dzRoBZdk2ixAQnuF4vKvNdxqBrwD5HJYabGztcozUszdfWbjnhWwa4r6LZmXc24e",
  "key9": "5ZAQ7RSLzyTwtHeCXBd93XnijUXASDGKkvAAPeMeoNunqq1wHoB7HVmsxp7UdiLuXyQmokC4THDxqGBhFM5a6Xai",
  "key10": "4BrNPeUs9JyLZxrUfaj1Kq9wioHVeqLaCPT8LDLDqPkwu5rQBNNtkPc2jft1RijBzKGJxcn7jsqj3pRWaFGT4ywq",
  "key11": "4D2rpz583DxHvAa6GsxcgqB2yfZycATTC7yWtvDXc5oz4k1HQzBNc4xacNksBFyzL7yLXyHpGX2w998U1Pub2FcF",
  "key12": "cZKtPudGVRnyvmMkSrEpQ7FznW6u3fSZA2Z1CDiwRj2rbtB2xXt9jnwrVSV4UCDNRYbp5hUiE4RMPeqvHTwoqED",
  "key13": "2Yh78oF6veNVsTXVXDmER72Yh5Xgk6gBMQZBakg5qoAcweH7iC6FMVGJB6tsKGRghcV6b2M1azMT66C8vXabRHSw",
  "key14": "5T3XiYx17aXYpuzBv4yAFv8qum9aVynmX9j7M6uC99CWP1TDF5w74yREwptyFsv8dKFnajUw2S3SJj7oxMADgEmr",
  "key15": "2i7aUqeMnVUeadadfJYtBCB5u5vZrJz9Z5J2VPFa7a5TPyPcH8az2RJNmTQBxP53jLMDnN8VABGMee4VNVhqLVae",
  "key16": "3eRqtSnxdn5oCVwXm15ffA8RKnPwYdQq2Vv4ZvFXQCUtsL6ZgTyyRn38GStFJKVyAssarADVp1toeLqEJPKL7ZPm",
  "key17": "3fvg5HHxcWkfVRgTJf7nZduCSBSecBuSjFjFxrVnhKfXb12dnycq9Cep48hrWSWD7ojW8yraoEL6cXNj5JVLoqvi",
  "key18": "5PE9oQmsey3JiM99pej5C5wW1SdwkA1aDg1ueMg16Zdh3pdf51vH2kCBnwkNtFddf8kwDpFkjy47D26DjRPHfQ37",
  "key19": "ZaGSNNA1pkPRrN7FxvgQcjMcBLwKCvvYsnun58tvw8sfBXpqf1TYkVfoChE2KBwRFRjZpTo7qm92cLdTtAJNXAV",
  "key20": "5sn28dkiiLwasrnXZmpLutdErHiiwFxz7Ha2ZSKpbS5ECGCe2HQH39bw1GCb67e77D9YLUszYQmFtvEuff9aLpWL",
  "key21": "5iSrZTQVE5M5XrpFGxeHDBP5PqBQyLp4ZvvPiRjisUoL2PnQaSbScYe2RTtB4P2Cjtpoi4kewiCfcQp2hjHo7UfE",
  "key22": "4GixZRiJyhaEvdbdAsFGHhPE78Caarq2KkJaVpVxruu5Vg1yoh1B16m5WGeNv79fzU28MinT3bjDcSHk42bHSw9M",
  "key23": "5vL8kReLZe8FZPxkmuToKbda9FNtx4V7aTt9dosUZzmcm1cUHWSpSA3FkaSKVTZ49wYgFFwSqGN7FFy6Ryw6eMwY",
  "key24": "zTunawefb1dJtuycQMFDTohZGeFJQT1q4DRxxcboiDbzBTg5xjfS5cQn5vfa8Tnwyjc4NGQgHQNEEMzDtBgr8di",
  "key25": "5XSFBFERawg8SnPQrHGnEJAxfh6d451LBvs5f3afhu5dNk5skz54UWgdN8i4PX24ZnGfHZe6XkupT9Y3LXzihQFS",
  "key26": "3yvJuDaSs6f11LCxs7ZKxD9Xbwf8qNRWCdoRxPTez2rDGRABmNDa93cbYiUBvznATJeJRx462Pnfgp1ou6ZQCeqD",
  "key27": "2ezpTeeBTGDHuaqcamePeM4VhQLB8FukNwtdXXottQtTKDh5CKGYdV7LHawuc2xpXLdoeaj3q8yJtH4MxPw8S1PQ",
  "key28": "3qJ4NcAirEJ1wpjLhMP89USDygEz3E998wzWqPepc45RDkLWp11Yy1YGwxVk5BJYNNC2xdvHLHN8nx6K1CBVW1yf",
  "key29": "536B8WXyG15gxwKk9H5KmbqQXFKu597xEeKri8ZSUwaxMdCXAEMB58S9qmGKzEFQMzMtVEyykKQqcWFxpsFLHVDv"
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
