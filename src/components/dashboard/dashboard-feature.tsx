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
    "2WcQUBoZQXZiPHTaMNS5i2Pbovg3mocbMBLdbxmxreKtau4kZgMAeiFawXhpEd7ce6NuqKJtLQ6RLWkbq7tnQhJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "442a3Qcf1ozjVyEQFP2nBinWoDED42mXn7BhwUwC97zszfKZpbif7nR559yc4neMuoNXK8HCKvr25uZF8gTQ1c21",
  "key1": "494n2aUs7KGSyFzptYW2s7xsJXF6Nt17NQhsfV2QSLysWecSTuU4QhMKbG96T8cQESNNr4NNyaWknmd42yggHMjD",
  "key2": "2HNcADNnmd8X8ncqyATafs4hH7qveCoJA5tEtHbH6s5A6cjkp2qhWp2YFCmtgdDLvEQhaB3k7F9RVkGH9XDfmCss",
  "key3": "41TR2P63zvUMgcriqJEFXf5S7AfMbVptPZcgP7MpTJpvnt5QJb6pV1BTTHEFpbBcMq3mrLJobnYZTQTjz7xL9KNB",
  "key4": "3G6Kqipqq71yi5JBuc41m5Thb9Cs5dZmbBvRqS8LTUtFj8WjtrS3bV8gBSKZSsT8rF9drXduvXywuQsm978Um3BP",
  "key5": "5VeRvZPCpV2zJL4DaSm3Fv8xSZkTFdBQNwUfuifUjEpvXLDJE7YnbiQ3pH4gnnpWfAcwKoX8Nz1BABNhPn3r6WFM",
  "key6": "5LAvpDz7N1X8HwkDKXVPePNY8ev7ikhFTaUdDqFXGNZzM8m5c7xujeFHVFe5xe4VoJf1Maawkhi4yFaQVdRF9eE5",
  "key7": "oWfyQa2EMz3hmGGrANpYJoj1Cm5DvhNDNpwF2Q9P1xV2msJpKyQ5fnhZiXwHvsRSDhcfV9Lh1aej6dNaanwAjrH",
  "key8": "5Pu8GqiQpvRYFEchsyM67bS4PA3S4pfRGmuRR4SeHSahwa8cx7sfEPbE2gQRsZCTNxkvhAhg4EHWokjjf64TbC5r",
  "key9": "4r7qXAThjG639QJDdbFtWyzubCxwoCJy5ZCZv1CGxhEjZypp5sHjuuD8snPV6GM1WQ29CcrQ32oExHQ6KuDiUeA9",
  "key10": "2DrF25dzJWGELsnsH9vsVzME4wjQZMp618rs3n8kxJDMxAgYjnSjmtvcpYuQgKCwHE6jqetJZCZtRdAn9CgMN5J3",
  "key11": "NF5ib2zAfdfs5g92dQdooRbhFyjjzXnHoUCyk4BqmSRZ3STCscDuPtKWFRDpJk5rYZ75fyUTY6ej2YSVkFUxhpr",
  "key12": "4W7SWChZakcHQHAxmoEQnb311CAzAScKYKiSyXPs66U7bTV25vshio9na89r5cqDtPpjA3pmRBx9zxscmMxanU7G",
  "key13": "43wMudqchzN8cBzViiUrbCV6U6LXCf4CLunUVo3GLFmxJuVqK6UefKqJfr2exPy1kVcozpQinDpCo4ssm3UhQkps",
  "key14": "5Gnt9ksBN1jE4id7yB5a9QKWASdafG38cmSopbDWN3P9K2dcQbk3FyFByE57bf9u4jX7rrAotxSLEuYueduwKQCG",
  "key15": "9AjhkPKP4oD8auksEBkZbJx1P26FfCQjyWKgLGGbh61izsvto3TiEPvcceS1q6Eza7GdyCB7GxH5gk7xow8JMcF",
  "key16": "2Atb1vov3Kcc2AafPy3CCogzAmib6FGEfX1Ec8Fm21KvF6sRGuJtq4PadgdpYbsds8E6yxeSrxVZMp6g4UF5DtKf",
  "key17": "3ACZYrcm4pyTgbdg7Y9mhggE1umeyAqkbR84fPVqVK1cCBFr9Y5XJF38ynEzHRrdc747JSZoftsvLqUdzJcpdSwW",
  "key18": "2KYvRDFEqNP1JdmofXHRmDQrG8Wz4ux8jHgNg2gJTQZCgRZVQWJpSeXNmLQaTVQViQRt5gZ2q4igyE4vnMzBYns3",
  "key19": "44XC4UVbAKU6Uwu36zJzSVfzppZ6xpmzctrjJywVUuTaRi3w7c64kBobMwHupWHZEx8R2hBRoVAE1Ez1s4Er2Kpc",
  "key20": "2yHxDADxhGFWqsCyTn1VTNzCCFMaXjaPg7ProH4wdJi8xrpL9YHYibisQxkoyrvKkzSfNqDvmN5aTUECV8YfyAtt",
  "key21": "5aBBuwiudDmFTjBYfk3PY9UQZr1TuDQxNmKhi9t7RzL4RGSbb3H3E7vXs2ibDiHCZR9gXVanRUrC3KQoi7DfF5Yx",
  "key22": "59XEqChLZ96RGQhYh5P9vUugLSGonvho6jUtRRSX7wzJTMYtCU3DLXpo4QjPBoCYNpw4zup9HrVmE4d523jUHN43",
  "key23": "5vaDXV43axP6EaqiVANR6Ez1fAMkBsgUUCVCkZQhtgmh9JHhuwiBFq8ZqdDiQkpoadBSKxupJP5toXaP1o7PQSFj",
  "key24": "3xw4sJJ9g62eULyN8MgZtz2WcLVHzeB9LXVSYvSbtgrigE6Yg1LRFYapjhqqe8X6UiYzqbyethFS2S4VLYqyPc5K",
  "key25": "4kMAihWCcxLQLLaeYNxmftrPb1G8MfdwhbePmhgsre7xhJ83HJRJR8mQWNqbF6dbmkyPjjiTbhWhK4PJzh9rbv4N",
  "key26": "5LCBZzZVLLNHxp96fmdJvpx9PHGAjXDkfTByfooU31f6H7krjvDaVdKRwWcUsYPqCgNjG86RreByCQkzkUhzeKey",
  "key27": "TNx6vy2CYsCofzqsgHJx1TTRSGE1KHGH2WNEAjCQgRg12NDz23axsU8QtMNDpovFb44VVbvjuJc292egv5RsELV",
  "key28": "3wkjNFR3sc2C9Mex4418mdwwQuptJ3PLhLsutW8SPBBNq3W9cLUkTPM3GV9c1WGvdFUNqBcvBD12b9iRYAbeW5B9",
  "key29": "51og9wF6GM2uv2Sbi8aMLwYEukFFGMnhVWVAZ4YpR4n2Xf5FY7o7MLskJ7Wc4dGxK1dbwGP3hbSb3vseC7NAgUaZ",
  "key30": "3UmMe2wbwHew6JRqw2zLQ1wou5XwZ7v2zpQ3XbfomXx65VPRwga5ETYZskDkC583wSizYUP47JjL6tKWUvgVAzcr",
  "key31": "3k5fv7bQD8sJXaTuKURJcSEtxjrV7VGNFd6heZgYskkk7EQiHNRZWkxqrd22QKvcCxJunn8M6VgZ9srqoiPNhL2M",
  "key32": "5HJDe9eQYFVhs1GEYBKTByuHakjZLM4iPXL3GSkKrtNvTp5sRqAFfBfhzHBFaU6MAU839x5Jaeht9yqDcTcoBwjX",
  "key33": "3wLfELt4qb4LDoqZH1sn9ZMh2eGCPpDtwiECef3kZu5tXw4BJg9BphkvbDKExGstQtETqrR2Spy4Ue2WRC8CV7DA",
  "key34": "5f6peQV9xZLzsFchRzduPjiwxwT9eebda6g8ojgpdwoCcrNWitNMFvnRbZewXor3gs4gSvZZog19WubNFMWyv5em",
  "key35": "4kMWQq5c2PjXt7cG5uZGr97w1YGXYxvs7pi6aWjMzsVVofanCx6Tzz2GERo41VTxXYHUFvaKnvx1yyiLEbykraHf",
  "key36": "3AZbSw73Wih8m3JycR4KwzyqZSnfwMnYniSKTwvxukNsFY22V4mHGWmurbqeFSbcrNKQnWx5yBcNbCQmfnNT5wpp",
  "key37": "4uHYhgDnxvmCSRScddKXi6VGpiDutDAS5cMp3VdSxEaGcVmL1M9vLfSKSBV1P6C9Wc4aYC5WxjfAkS2Yq6mtE9HC",
  "key38": "3TSuD5ogAKT7ZyH7aYoaqa3sPLVBm1k63jwHCUT9Z9PpwAZ1yRuT8NgN8qhar3sYu4rtKLVsCadgKzafWxoEBDMR",
  "key39": "57A3AVfmYcGFGwB2GpumGNwhAKQn3MSfvwTXP93aoWb3caVMUVFUwfTYHgxMtZsaA3gvK5PYBkEsxb5mYswG1CRx",
  "key40": "o4KNoPTgtijWjMdkHE8bg9BeLNZtX84zFKo6M4Y8oCa4iq756qGrnSUi6ei76suv89w4YuRHjj8ZTctdDY4fUzy",
  "key41": "5EBnVHcDc9kiv2GahwCTxRi5cjQMdjSJKja3H8tzndM6QSnejAoN6zfhYKVqfTeNpvS8KrQaAauZrjyLPXGFbxHT",
  "key42": "2mgv3Urnc4mZGSrgGGasLF7cHid7NLR4MkA7gQpDqB6yvkhGgJDWiBd3e4h7CiQnCCWdC3oSBTRqXKpB2vohUoCB",
  "key43": "Je6TbvEC25rPYvNCpN64ZLXA8m1mE42D4yvjFKV3TqHSK1LA9Hy2cc27xCVdwwGmByvumDiSFCfRqLbeEiJrM1a"
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
