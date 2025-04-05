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
    "21zEkdsLYF2Y5sYtGYev3gNUKwuDQ5W443dgmRg3xp8b5T6bdBt8xdk5Y1sL1ywrSMR7tRc6RiCgzvcEsDneeT94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKVzsmcosHJYTQ6jSvJ3Yjt1GBLkum57YBq1G2N7vNfgiJyX6zMKeWaxwSdFZWweS2zucknXV3CEehp19iWfbna",
  "key1": "34NqQvrfgdAR1mgaQyZ3v8sikx5GYrRnBJ1v29dhDSr3GwD5apfHkzGXKpQQt89Jxfuqtgpyn54qojjQMRUorpEz",
  "key2": "37CNT56FxWA1QihpzkR4QAB9RtjLUFXHT3uoVZwBc3CCbUrWShwu6y1T4rE3EXRtbKHPksh122UeSjMHgpDKZR9E",
  "key3": "51CXh82bJHDKot2iVgHybhgMTibfwhKLk9rGDWJxEZ2GeF25L6ih5VGtvrmVUzDPv55ABEPgWR6xPXXb4ZbrcS1Q",
  "key4": "2Q37BZZCcbM1StfqoHSn1QTdXjiZ11TcPCUdBiEUV4jLbEDdTe57WbCNn513jz7e8yvsMpargUS5XLgLpBTQs6jr",
  "key5": "4brXdUGg2K7GFGqxkA2sPM8RJnjr9s9oMFwaA6BGQCPLgdWDEmq2PbyzpvhGPChUuFau6Q1JTCLwLJ8L2oZKGVfM",
  "key6": "3dfZHV9mwCiyX9ekiZN16qzGU8162EXLoQXcBNVFxYejXJ45Yr4xLwvT8YTHtkvSXXhyHno1dKXCcoch95t7MUSv",
  "key7": "5Zre8X6gumQ2BNw4H4PkgQWNFy8FPdHSE257KaYaGDtumAWeR2e1MSDRNwniMCiQMDMUxQPro7yKbrjDmxn8TKqX",
  "key8": "2jcwYDLa3ZTxXrxEcMmfnTaUoYigGrt8P6rciWsxC6vW4tfByPSMSZJgnbJGSJS9qSF5RVChtxV6XeKSgL9x9Lm7",
  "key9": "cf5brLgWUM9di1agGW3XvDkVugogfDxVgnyy7f28w41KQZudWn7Du74aK8LGp7NMeKzvaZ4YqaB6ZhByE3joEjA",
  "key10": "2QdcsfWxkBPfFSqyi6cpbbA44W9YHEn8JAyRNm7h1zXYRuoNjoeKysaHJxbtXyUMHB6tAvtipQpu5KocZQf7gSU",
  "key11": "3YjCWiLpVYaMpAhUj1PTQCk8jfb2GnmdaVnsBLdiNUdxRD6ciRHLzp9hd3aFc2ZR72vSXvc9PKm6ujwJHRcX8xfd",
  "key12": "91LaqjuSi4enEF6AeMcixzuWjiNwYmW2J4bPfYDoDXZy2UHsywBHFee5TXqAoByg4mx2GGb6taGgG2dx1fDFzCu",
  "key13": "5T3w9GKXSW3ehAdX18sYS66BE4XusMo8c7zBTbjn5Vy4r6TEwMVbNYdN3ceG8q2wA3GyF1URpcaVxfoUvh9rMs1n",
  "key14": "4bJ1iRbG7s4b1h7wNiavcVJACpRi2hV6MbYa7Y6xXC8HMyA9ZcfYWpPPhAe5uFrN4zs5kmtcHbnssk8Z2vhVcgrY",
  "key15": "25dqH3bxvMwAoZzvtuBH2rKboRD8yie5LgBcqPTLEHTpE1cVAdQmuNhnL2YPWA8Brm26muGJYQ5bRvACJKRRVLH2",
  "key16": "WJKaDfVDkfmTFKZQ3fypj19LWZQ8gtwRz4DwKJyFVaC7VEPH3kqUvv1cP2mAphiBj2wFk1VqxQ4yiNufCrhqM8K",
  "key17": "48yS8HUk5cU9pqxvXeU5eeK55FJnA7Dv3rFKcKWGsozvipqdoginKChnsuxGSJjR3vFyTChRAnA72b91ocLfmkL7",
  "key18": "3f1KrEUQSMLsRmEgitrGYhLttHSNJ9BeCPNPTKxCAHzsEVAog7knwFJvRo7i5aPKGfTSAnT2uZmESEQJzoWqMHpZ",
  "key19": "3FhZjMivryWR3MgvnFXNozfQSff6TSSfZq618akp6uwRYqHJhdHFd2KsNkVUNf1girm6XWazgKTvHWqMB51dgYwe",
  "key20": "3aCJHg9rLkj4vnKpsnFVagt7ihitvU2hh4vG8QhnWNhY7anvr3sKthMjy6zoyaQdvMrav2iSW6cBMuY2qvEhjS23",
  "key21": "4kRKtqwnJirSB5CW6MKAV6nkG3LdKZXpU1DpUECYH5siQJFmwgQ4C3mD2GFsJjf4kE2mPTtxxfRrRf3xNgnJLHuS",
  "key22": "5djWhHCpWGBTzZriUmkrtYzeyjcPNsH83PXS3kM6cfp6fskKSf7x9ptXwAYn6LctP73Fdx4jBeNbWHGgmjD7JyDT",
  "key23": "3DpkxyHSpNpYQSYfcA6tedzqyhJ6ZRVb7B8qGatiBE3dgSDhfz86Z9J97ZzyUEoY775WLd2UPyzo1DQNmd1d7ftg",
  "key24": "3RpN9WMZcMcokejsWoAQPs3JULQ3oyqZbxAJaiHt4cjarJhFR6WsBzAgnWyEoUwun9orkuQaYuDRjPw64snTGHJ8",
  "key25": "2dXs1LrikXAXYjJUJvyH17xRzwoVZXF1eexxgPyGEpctQEkAhZpkaUGFmVGoHhkSGA7oRt2KcPFWe7ZVFkp22ksy",
  "key26": "SerPPg4KF2WARctGYrpfJYpix5WEaKapHB7rnLSzGU7AGMPjJAgEQigNDgq7hSnJs2vHB58TM7cHEcTmvtAFxKf",
  "key27": "2FH8uchk8wttuftio4WCaZcSjgabBfGp9nZMPJawgqfNDddqEV3vYDA48CkzkecGeNf5D1SycEyWQsoak6TfABk",
  "key28": "4ZMuc4NcMqi9vYJpAr3aHXh3CsE1SCJgFjtSqR6pUKuFDNhs369FQKVEhMg66nsRxXUFCX86oaG3VTVMP3LySSE4",
  "key29": "3k734D952y24JM55QHWyK2tBtzwtezAJvw7zYH2YPi4sX4zjXVjvtVLp2NDLynyje7LXSH8uiHXGDusnD57xCjUi",
  "key30": "2EJvvwMChyQs3RVS4NSozHy9rrY5oAV1BrZsPmx5aUMPVbsyLs6M9X7w9zXzRQ6YRRiMBq7BVY8K9yaqs1msGSeA",
  "key31": "2aoDqQxGoHXCjcW7ip6tNC7NYMfH1FZCtzvhQyMhywLkjDTqKGVB8GhuAz9Mo2J64JLqm5ekZyGDdMYpFzA6JKju",
  "key32": "2AUR4McJy7bVFH63n5GCMZP4LSYaMhZpsJsnXbBsezmaaTsdtFAuwuAQXZh2AQCEhSQW85SDMrRxE7Lb5WQxgBct",
  "key33": "4eNsjJcz5ChzieBRNyarVQRqV85abnyDS5UQFT643mT3Lvo62MFMBR7zBtHsgzqmSRLkh2A8SiLMnZg5wb2SDV92",
  "key34": "Gp9ABisPcARVSiqBXRyQdKHQVKu6cL5mZgbG5fphhA68FT1MTkXNfQtGgxFtNbzaebEPMt7kRy1pZPQ4eKfP4Af",
  "key35": "2a6DU1ieXq79BzYg7rSFC19f4sitXM59vyx8EUFosgyNLoz743k32nZRNZ97qbm5T16Vomkbnv19FvU4v93XBFiB",
  "key36": "3G7jXNqn1oFP2PEbMRQiEp6iR1HavrVsr7Q8Ca1cC7o1yK5Qa2GaxEcT3wC8rVr9EGzXjyy3KfD6DftVdc1Vfe6r",
  "key37": "5jCqYDE45pKRdZ8MQPG1iJPwHWRb55rrVwVQuhNLCT7dnvsqKsDDuccxKU9fppjDjkFLxxvGYZYfMhVAkqWsYqKu",
  "key38": "4XKDFGL3cU2tEvaLv7nJM74fgeHBKpiYtH6EfpvT3jRGrUViGWiQwkGMxoH849n42pKcBnpDpFM8B7cyT1qYZceL",
  "key39": "4o5dk4zG1RwjS9eZL4JbwfS3qjpazRWnupG74PuMcpmvjhFWZ5f5CuPXRRpEW1nnZKDcnyH94LNBRfgyNhznAxdn"
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
