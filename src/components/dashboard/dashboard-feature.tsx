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
    "3hW3FJAn9JnQNnvamYAkaWPNp1VuiGk8mQQj78kaBun3GsAaL71aZYnEqZ4ZW9zVpnZWJkCdgjKLiMzgsywugz76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKggt5dvpcsqp2FwVjpxmLAuk8WwQRn6KwjVXwoHMSUXXkkZZytVuFN3VYutC5Pm8H3fSSHV6ZFJoxR26WDTq3c",
  "key1": "cvDEj2Bo6PgGPUXvVGLPy4ezYBsSftmaTUEKdNLHMxXWcjxgBLbaSGBj4ddbzXbNfAdjx8ixcH9kW8yVdfj8WPv",
  "key2": "4f1Dny1zJQXVX3JPo4JJRWMp2BxemxcsXSM1auZ9QGpCZcC6cc4ZeB1uov1goB2P8pNe1aXCMaWgLv9kdsrJB3tg",
  "key3": "AgqZ2xKKzewDmQvbzgSe9aKcTj12xvQWoXAdsgtAaP1Y1qopFjWcus2gZz7CEcyeyhb2jjYqVn2ixz3wgJRxhbV",
  "key4": "2ehUNb5KnpgpfYq41T7ZbqJM2XJgfj1iTms8FYnR116tgToirb8tbidXCxE3DpY8ixHjweUVUt3AGvyjEodgi7TU",
  "key5": "3WgePBBW2QfyFS6uND8JNUw22r88aP71dAZayT1cnvVXFstMLZYSEYYKLW47t2ACn1Rem8gSvCc8ixWBb2DATJAi",
  "key6": "2EqfT5RZcEAXzhLQmfFicRYFvmKfGftLbCuZP7KyFeBX3NBiYdLdbmX78338gvTPvYBd8yqcVGrsLfWQkNMsm8fJ",
  "key7": "NH2UNVESNwztr9pcQFiDXCWKsaZ4FsPA3sgZF3uirUS1zJh6fMyVN2J8PkB6wtcjaw6jaYNvEdALVXJb2QuyAyd",
  "key8": "3h2Zr9vwBfTBj3wA1ds74tCymEFU5GMFUSwKeKCENkgh4dK2dH3SNd7scLFcx4HSrxvNQhKzqtEHDEov82Hkfsy2",
  "key9": "55hagz78YuTfhuWUL8v4XuKNGjwRAt4rjYRnC4RfAx6gYVzEHA3NqzTvrVV9vFyYyLYRRUfZYihFq2cVz9rLpiF9",
  "key10": "4ASi4niKz4J8mqCpxJqAaJR8GrmMFZ7Whw5h2syyayqtk3KuzuD9teXZDANVJ4c2tS7dcpFsA9BhgwChXB2mSTVY",
  "key11": "3yjqd9zKWWDdgQLPucRTxxRWNKjwhD3kh36siVHU69UhatHDTZ66dn9zU6YqGwgrVLTdq4tPoaRjma8fDShSNqPf",
  "key12": "3MX9fgBzRrkWXiGK1n3guPy2GCN75ctiwycKgijR9sJgRZqEd2acRotHsu4ygnr3BKvEouYH5QXUN7x8r6WjjXuY",
  "key13": "44tJnb6DTZ3r9ANAFDJsJS1MtPbD1Bsy87DgLUFMrWHHcA3J3GxhZYvgdPXCYVkLadTWvxqqU6DdriXvKuTaXmaV",
  "key14": "viEwLz49d1XSPd6t5sFHuqNnp4T3cR8j5LzsLvtSbJ7M6yG9irGwz5AibpFa11Q4r9kBg1c2UojJxyAcu75efsc",
  "key15": "4qJg4czGYUtkTiDAZcFWEGPDUrbaXSCwbbZ7iXFvN3WjtDGKNs9bYTHZhCXQihEvDnofpiHyEtYE8rtzsuQF8Y9K",
  "key16": "2MEZedyPQQNF9RHiTkyawDKPQUKXB1niTviqNz2v44w2PMT3iPS5BPBp5sUjbb8pVc4RnmmPCrFx9sq3n5U9muXc",
  "key17": "sLiWgS4KPPqVDRQoc3SAgrJ5cYbC1zapAVj6XdMU88WWSdZPawnNHMTWYjEhZo5aCYxSSRAvS4ooG55K73L177b",
  "key18": "2A2csRf88Hg4GR6uMeVdQyFTjt2tmLRuQWRfRMVhZXfjnKHSdmT6qpAmJqaLrytbemtG4zBMGme2S5C5EovtusVw",
  "key19": "3TphhECn9y3nyCjSPu8zEqRyrVbtnbbBxqDxtM5HPs1U5xpfKGQzBhVFdoF3xwKCf2BRWMRM6he5y5ogaAp5WGG9",
  "key20": "2QuPiAvww8KnGnXKk731o34UUzt9c1wMNXBpjNKsw52LZNFS9kFwpvio44Cp5YRtpsx9JifeWzZ6NaZLRxhszPLF",
  "key21": "2452B5ZDYmpGFAPEPbvzaoSg6iyFDNLbZ7BMNrVNBEnDRUGjMxxjbQz3AFx56t5oQdjNiVxkZLFbgDNdaeCAtdQS",
  "key22": "2oDmVhd26fD2PBSrCuor33jscorErNuApdkTeBexJtK6tMZ5nXUJNEGHqjoucRPyxaGitd5YHgUHX6TuweaXo8zN",
  "key23": "7wQRWR5ArhbLqu8rxCb8ESrVSXXMg8ukpqgTLJmQ1ypMBXMq2Zcx13ujxBZP5f3np8zcCQGf3jRnGHMGKa5mBwD",
  "key24": "5KCx9qSDh9coQpGtZtPXmkRXPtox9S7HS4PHp5Xd1mCipYHtQARyioQZxyMJMuEERSh5bc8GvNXnLr9sU4gRXfB7",
  "key25": "4N633dezLGXC5gd14Zsm7DZu9zA5aN9n98gYHynbj84Q3FXKdRb9ppHhhGSx8D1UrJduASFhdhyBohS4ePnxwZKq",
  "key26": "5JMRXxmiyvbNkHsw4fEQKkUih3x4CYhYUcnBFKKCQDMoAKigGsqhAXU3RdUR1TvzBymPVuJVSABdWj2r8kg3MFjk"
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
