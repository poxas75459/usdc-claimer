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
    "5dTg2uRjsLYkyHm1hHvAYzwEmGQHpNwus5VN3WujN4epxf557fFkyHutqSukqw4pLjdhYYg81M7mxSPoKxmEAgQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63J1afQep8rESdo2jGR2AaAe9dFmDVMoyTBMPqDYmoVUGYSqRVNFH3rpRAQs75j5N2Snswv7Hux75s9WLNcxaKyF",
  "key1": "3BozzCMdVo9R6kSdk2RcywYVhkKDNuLkQU7yx4S4F8Ey9rxaFr34JQU9Md5LsMcX1tcz1auyJHjcDzBSHAE2Un5w",
  "key2": "43FVu948HuTM9p2Nu8M7vPtn8wom8NQeE5M2kjFMWY1KFuzvMVR7fxe2GxkjLGaU1y2wtZg76ya7bpvwSxfgWfXh",
  "key3": "id9UUAUo4NEKeyZsboE7vh1kGxhXXq6CVV7h56ErC89pB3L6tguraZzpxBPCk3xb2AWqxLHiDDvxpJjY3E63vkz",
  "key4": "23kqakLKkv3eg8kMWcBeRgbuumzLn8YXdoCkDrn3NkjfeMvzA3W8sDC41cfnYwrfGxq9TbYj2vaBAUbFqjwDuXAg",
  "key5": "2SvEq333AvwPy8MZ5hmhFHjE4u41dwJAy2fZ8uZVzBJVEiFRJaPXxwJFsxD5zaARCJxwQRBEdNPzXY6HnRgUWwVM",
  "key6": "4Ujtom4eY1oshEK5amYVBBKz7ceSFi314bCmRAwbY4xyPGgiynTRq5o56oRAq9WeYUMHCQ14xjKGZbeKmwM3DJLr",
  "key7": "2NTgB8ZAiK4x4PxUHCxrAy3UGVDrgTtDdYVVfLSx1XXkHsEEVVvwg1rP3igJBbiE1qFo8W6vvqn9P3eCfVKKiuam",
  "key8": "5H7Za4beZNpGN5tUFs1BLh36MaKuNzmGFMXZz3AJnyEpJwPK4Aaai3e3n7UfKndP2hgDZUTM3kMdKuMa1UkDRRQ1",
  "key9": "3zJfQxMDLHTGT5skxaWUv1qTJg3f1yJYGA72iB9CfTpLQQoGT3aNzoD781EWCdWkTevopN9Jp6mk9dtP5FTyQGqN",
  "key10": "25Y7ZzwQKPiVLBGdGtmbxwNcsefQnD8tmYd7ZUur7edU6wGE69gGNEC6fUodkUHEJ4ATpZzCrS28k7QByieG1fMf",
  "key11": "5e7TBrhB8GyzRvLoecd3o83jUU4mRYsAvMVDSDQXv42cmNpmyW8pPrPjsw9ZopRzB2BKEDkv3ejpJcgbDAvv1x5z",
  "key12": "xMfdFnDe2ydXaWugCYRK7K4AWRVx63KsFPJHb1DQxaXJfPa8oucKfdNGDh8zcQkvhTeS7S78QwTyFeyuzKeLjtM",
  "key13": "4djieoRC3HeWbWtGTqWfHsMqmHAysoaVneLrfHfvYAAovQXQ2CGuWeaibMddbHay39exBurMwfeS8p9GxRWroc8L",
  "key14": "31LNabDaYWkbMn8EhfRcyEL6wh5n4TLADTuTj1wXNNTiWQsLhDP3JMA3dWubAPu6DfneYsTZzCUR4pmuom9dHTy",
  "key15": "2xcssQYxrr3CcpRFMwH7B3ngkRwvWnYNzeVGADjrKHWQty9TowcX83dBdAyuM79mEeCJwtMmKwDSdEpXjp7JB6YG",
  "key16": "4tVQymaX7EpFbrHBKADZ44yvxdrB7rJzVng6eYGpJYbFd1sw2cxWqcVWGXKRVfcQdokAfs6MfZeGYgPc3cjicYka",
  "key17": "3hJnKavgGJ9pvdUx59j3ftT3dxr7q5fczNcrcgjNdVsqEjiCY9q6KCAPUVzAvx1RmyxEiauHo9vpQYq5oUcypjtR",
  "key18": "v69Lcvf6ENRjrVCSXwmEAdPGgysbXLc6Pbb6hahqtV61UjwcNGPjiMb3nuXFUFnPaSUC8uxzKBfV88iM6PrupyX",
  "key19": "276n62qQjgrpEztzC6F2Mbtyuw47JkFwquZ7zvrmP7HD49qstN6ZsSHxk4uNSXtX6yiWHsJTENn7hCD3CntEf99g",
  "key20": "4v9bisZT4e2p5yxLmXaudNoCdDW448FkcLrt1xhm8FvcKRhSXSvJGfdsM57BFy1HQrdxzWUJMbkKtZuvdjaqypE2",
  "key21": "5ih4Bz8SZ18ab4qNufWUhokprYxkLrs8ymCFr8RvcrfL61RSTjfXk7MZrqXNdWKfkTbLfE8z1EWRUwEbRtzt6sR6",
  "key22": "3NvZX1q6GrUn7hJSkcXWuDcMJZe9bvVVr4QqWn4SGuammc8MQ8ibnekpLmGFWmyqKi2bTxNEAjTnAv5FepwnrvoD",
  "key23": "4siCKg4VLgB4N31HP2LPUPggYppogdpy3UUdYRc6D5Nrutg74Jikhedw16mBPaUCRFzL9FqNVJJxLvJ89FresDFY",
  "key24": "2EVaJDA9uc254Q6ArBB4YCj2U6PC7YnAwvRP4Nb6juknbu3cavehhrFcd3GGpyLbqG1aXN6zrpEmGzD4PDEw4jds",
  "key25": "5hWPcVtrGMQ1APs1HZUeLui5X76Cc2R2DZuUu6EdGSifwXAJ5FfxrauVxDJS94ioLCztXXSd8jbdm1nGRHT5FZe7",
  "key26": "29c87XnBcZLJ4rd7MWWQn5qGWEB1qAjuiusXVynbNQUbV1t9hWurCC6pt2tot6z6C73bjYEGDxi3ZBBYXpGivuep",
  "key27": "p76BFizL4NKMAXTMwFSUqYZjPBe5ZWQUcwZiAcKpC5D2awU3QLvbvw4TLdWoBpQsDmvrPLqqV14daVKTFSzGjxv",
  "key28": "3gqBKXkPv5Fuuf6HrDPB9ZDRMa1BcWFvms4qYmWeTWeFBhZFPBdYW3chyzNqbn5wys4C2TMmgayLxtsoyFj9iZsT",
  "key29": "4yp24QyhPVEvXjMPuDhE3xCeFm7NQEmvU5hSWJ4JVFw3KMHXrExjiWfYoB6QHfGsKtDtroLc2wcsdzowyzFkHSx4",
  "key30": "45rDJ8cJS9JKijLYNcAR39DvtbCagUdqeSeiTbDXKq7EW9EVH6AmUbhFCxsFP46C5ocGTbQPiD2iUxk2tGLtXMQe",
  "key31": "4hJVHGsVAuQxs5Nr6qeLsvAnZeVNo2cALzpwBgthUzhToR5yJgNJqMjjz1N6Z61ELUDsJSXp3LS9GAGN7DFSZFGv",
  "key32": "4GLiX3NhkbxeC3hYVD3JWhK7TDkZWRNu6EjsdifCsR2HzYzm3tHhNoniCSACRv9emXiudtqiFLz6ZpMQWK1Sc3jG",
  "key33": "2NJ95nYhWDa3bk35DFQjzpVJAKZJdAHeBBuhoyxRED2CcUs1DZmK5AuqdBr8h7MAZ1pn1skvBX1vpo3CLd9Y6tZy",
  "key34": "5HT87214pZz8knDxu8u9zkRtzLcPGdELbrqkCPf9XRPbCMaSgkhLmwwA8xZ8vxfLVzK3rhYN2QqJ6aeKk7MVYU7k",
  "key35": "5KoSiNMUDLjJuuy6ZcMscm5xH6U9uYFEk6pdQoUKiaEVeqUiJYiXDmRqhM4DEjD6HwDtiWeMuJWE1qVXiAL8T3NC",
  "key36": "4aUZHVDfiXUNhQMhTJmJGQhUoAmBJ6iKef4uzY2RqDNb4dJkN8SpynZDLHt6BkGMwM3MbkCVNAhnErQGkup6PbdT",
  "key37": "5Qocdz61kSEAvR4JMBsA7e3CyB1FLAF5Sk7Vf2d7krtjTiNVDLriPxiAQcaETYTpvY2aKYwmfEip7JMACzxEBGv7",
  "key38": "2e7P6Y2JLN7wkipa4zGJ82pE8q5LnGpa4SNLGFNpf8Bt9FTQKNNYbVEcD5LSBotgQpZejHBnVCtRmUWh9J8e2xaG",
  "key39": "2cVTNTrXDhbK8wp8dqJ5HX2k9b9Y6bMwavYjBsS2ARRAhp7P8CEAxr9uPFPRQqL7LEPGGj71nzBKNhNo4xNvzm2W",
  "key40": "5pEtMu5bDJ3n2kzbuuhgg2UyVPwGm3nxc2GpgHKvj9vGXGDL7Q8wY2a1cqBYV2wn4yWDKvsZRfGxN1o2kaBSx7tP",
  "key41": "2inSUmU3mYsNSmYx6Rx8rGWE9ra2PJsjy14FbPCuXVoM7ZYHzzETfybNaa9tw8Ayv2TeGihjQjEQ3PZbdrukRoLC",
  "key42": "5pmweaz9CA6ar6VK22aUBdFkL4F6buqZWExuLvb7TZd3VpjL3mUeX7RKADDUdvaXFHQ8UnEwVbSuqLgeE8XjjVnj",
  "key43": "4PLF7QJFX4fkSzAwa21DQToauCCghFcQqTdLoB45npfgLmx5Msy9zhZ8tfGve6DJCeGkjB58C22o5McWqRV2gynq",
  "key44": "4ES91vPkWTLJxPDcGLFFCLBZvE62hUWqdrqygxJtXFC1rHzzB4qwWCEtKNZ6NYvfXCxdjwQ8F39EfY489exTPhHp",
  "key45": "5zFwGVMECFbcmuJj265YrzD1n1aAQVhfJa8YnGfvLqc1hpLoUJTvtYbh9YGVrAzjzfLivbruLZsTY7ysZeM62R8z"
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
