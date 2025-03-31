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
    "U7rqc9QpVifM42y1fJFbtyhm2eRe5mnCpqRYYcUje1AYJSQvfm1pqJdyN7gFWmyGMV2GxjGiy5KaxZQoXDb7asU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XpLHFCCQsj5g1kpBMmAgeoE9DoZ76nJgQKXYkSfVCoAqWUeBTDcvv67HeUYL5LBLXDBEhhWHJ1DyL5QhAycDSM5",
  "key1": "3Jxh8V2Ddw2ynNvEuFBGg8pK5dxjBKa2Z4pfm9GoSQkem9sCGd3P97XFH6eVY5spCv6oVDoDL6DaUBwiepCjk7DN",
  "key2": "qsvyFCkYm8quLqMAiD2sZyQDjRAkzGEZgwCAqNhizS82YDZjXfwfoyHy72GJHAnCjpTEqFCYE4LrKUfqkbPzZDW",
  "key3": "374ap3kXaMxSiR8cu3UTCve3zJjERpU12uEUbVVm81NVyaBeUSxCZLcXdzKi33aYBQzc3MpSuYG2bqF2gBJyD1Tj",
  "key4": "66oymzLaN5GYaAwwpaejdsNttqVDNByPnPYSFTRog8WbE5XDjiXznNT5LRRSYpgBBD467SZrMnb4q2FAW573zTyp",
  "key5": "3KoiXvVB3MYNHV69keHsyDR9SsPUWSA5g3u83t16SwdYxbA3gsHcopNfMF4cxMKzU2Cjn7dqGjz8AmJpUvifSPb1",
  "key6": "3MCn4eZbwJpzxVHEdSMjjrKH79zTo3eagWTkxKHcSgFnMkapv7AzEA6pAZxSWTiN1V8PCpPsrSadigjusziFi51j",
  "key7": "5YxukPRCvSykBbTGfFwN3bjMdQSyCgkGcPF9gVdgLLPuCmh7riMXfChLAiS7HCYCQTEkchyXy319THE3hvyUX8wD",
  "key8": "5LLkRkpbHjAThRWvPUeeJd4UKCdiZLQK16wEbVbgYuooPNX14Yr2LMV4cmAX9kdjBvjDuaHoKxgz9afCnhJqVFRj",
  "key9": "3XYSD9duxrUYQX5MseiX8YsNMGmgPgGyi3av3njobkQaEHxS615wau1eQXqbwpNyjCVBg4rDUZx7ruQBfcUY3Fxm",
  "key10": "oYksFBhE6aWcc4L3DxnCia68euCCV5oZehDVAcFqzvcU7HH3gunUg6JLxjfxK5Myw2fuaDPW9Epwr8j84RYpm5Y",
  "key11": "65zpgt8vCfY8yB592hxaxfnv8rJ1wP9JrvYekbSirb3rqbEKbCK7CNkFVKWT2UiqUomMMzHB8bdNHjLRmGyoaAim",
  "key12": "5pYUNU2RosgycFgxbeZkCPZcbHxVwx76FpSWjBoMP9du5MkugoFZ3gkCnoNyCVfnTBPL9upxq3mdYQjHB6tT2k7o",
  "key13": "kD5rBa1dsqtQMYAkuANErdFtL6ZnpPiruARcNqCMQ8oCEHvJCRNPhqyDY4rRicwy9BhavTM9bL1cXjVnWytK9Rm",
  "key14": "3LGGxU7RFuHLfCnD9gdcAMEXz1ftDzup5VujJia1fbmwFjmQ8RdXBsVPX5EEFFRB4AQJp9PMLTDzx5Me92ztFGQw",
  "key15": "3MudzEMRbqKbVFueFeCTt1anFPSosh8ZWZLwJ29uyiJYVWojhSd9WMdbxsf5XZjkDkyud9u4PAvZa1q2QT8Kchaa",
  "key16": "3FcYcfxJATKDeAikcN2gbAr2W1m8Q2Wt3KGs5DG2PgJ8Km5FddiXFV2HUZXb3THN9nrojfA9CECuSo3yvVVwAACG",
  "key17": "3qi5R9vo8Fwm28JVHx1QtoYTUETZNLTk7Hqj5JYSqkW6D5mL5xpzAvCdSiZNB3JHDUeZmFeYcsHAPgZABBQQmrAn",
  "key18": "4mBUgXgy4MVqHmBvoPSt3P6b874E4H7vg3SKs3TC99KxALikah32RLxxmFMZXabh5ocKLdm1om8NAxkHVUb8qeNk",
  "key19": "RUeCSgFVSfgimJUUFyp9TLnwMkJqkEi9dnp9BJfr2hvaqYUSSF9gnqruxBSH1P87bYRoRnLVmz5Mm4nEi6RkCYR",
  "key20": "3XFfrHyHeC3vBNGFrCXJmTGRGm9bkz37mZKUB8XfzoG9VytZsDesTaohkyWjhTaeWASFNhFFx53aurBzrAt5kcut",
  "key21": "5kcbwbWqxvJMW86AbfL5o2f6LmK6NijX7xB7d2D4jHocXCMDvQxp8TN42Eu3wHSWMtqonx1pFx9Dhbbws3q8UHzY",
  "key22": "3EcQRxCeNhxEbskCwJcSZ3vhHU7SXDf7W7Zg7TbBKG2S3e9y3YVeE1pL5js6cG6PWeJk7BKVoq82ZjQ5SzyAtHiR",
  "key23": "4G7ghQELTiKzTWDvxUKFod8MtvPo8oHCErAnuzuFz1F4QCtQL1s14wpbRZsNAv7Ls18ZP7eQRLFpfttPU9gQgZ8B",
  "key24": "5GkHcaXQEGKbRGggJCxU1PyuiGTJARSdJEKrBtirhRShJkhHJfZnpyj51e1nu8rEGnpBakadmzBW5Wsksmv2jLpa",
  "key25": "3bQ6T7nee8qn5ta64VbSLqWbEmwuBd3hjLkTbJaLJAukaKuqX6KiUk1rAc3PZhdNM1up5D5oftersQv1cUm84QKC"
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
