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
    "2QUMgNrm4oUPXkwaNFGjknDN6AgPgKkesEuNBuhmmq8Pjd3yhQw4ZeS7vhwrtefSVaTBNkbQFLbPgnstMw7wLYhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wyhgV3ceZdQhWeZUoF45qKQA2G2tMYAoSUHb2Ju6EJ4AKdNiR44jby7ePqgZ7uyw3ozJnDTGaT4PjN2fWCTFPsY",
  "key1": "3Q1rqVuvK8sBHMBkgFm7pRTPe4BahGxApvziRxaaxSac1YB8c6t2BsLkcg1N239R14rVdKKgFi6D9LH7ZCJBiFNS",
  "key2": "23fjeKY9qyeoLtS1tk7hBwGD3h7rraBup7GfUuiSn98cxm1wEKHvpUe5sNoDaW9g4RzyLZC7ASRtPj3yBSFHKvD5",
  "key3": "Jgw1f7qAYrawgjuXTkutk6QsrpGiSqjUHSgSUFDB6nGpo48H2Uk45TSYHSpqDfoPAgG7krpxKkHwuhFgsEPGUSi",
  "key4": "4qiTZ9qXLJfmCVyD2rygrQgc66LGbESzgwopf3htaKdAcBG4qLKDrfrUmAfhAkvX9NvQ5f9hZboKmEoRgsiqfEck",
  "key5": "d7WX5SL4JUNuFxG9JePcfgWNpVVSVpx7EC7SN8dUkNKktrFnKthd4nFUL1yUvDiom2QygTLR62ZyZv3W67cfLTQ",
  "key6": "LnjfodoGmjHond8shcrtEDLkpKzjjhKYs4RkHFwwaEzQGwfKagMz8BoJiha6Dg5DRZd89XZkabbY7HfQ6WHU3wn",
  "key7": "3W7X8zriaVmcSKGiDuk9hQeJ5FW7486E8Vmk9vRR1mEV1S4TKUfgS7k6BdW92AgBH6n9TFcA4HSzUrRk5b6s8MD2",
  "key8": "2TAxc6BJsRPiJZRS3uYMeeXqMGUNqJF2poatLrr7wktJw7kpPaPkuM4N2j58vPbwkgLjjnMYpPUVKyYNVjcS5HCi",
  "key9": "5L4yh7xfN86ciyBnfCFgmaUi3euMSQtuf5kVBATCv4YBSAacfDNaeFZN8nHdc1aG4HCg8JJza3bSrsEuQGbycBWm",
  "key10": "3zo5F9dRFjhRz1KHrcEPdziSinkF7hU2EJBxm81Kb9vxHodq3BmhDmrDepAir7rKDyp6qVrNzRdPhohNPbmW2zK9",
  "key11": "7PcpyYaNDPEhyJ1ACGLTBbzu867FeKsPxRs83h7SojW9iijMS3BZfV5dgyyW7PGSfNjJmrgfhE8kCdGNqjim2JF",
  "key12": "5HL8WRMcxrcNZofmqV3U4MnrHTVFby8o8PTVUoygR5h2Ai5tFfB7LcsxJ6Ecqs5tCf3rKJpVBDz52d3qJmqenwnm",
  "key13": "5yKRG4Jjd8eigEQK7RMmwhkHXLuMwpG7yRyNzDfSukHD7QCjUsD7oaChCP8kVsoEgsYQR4vb5MYxKc5kwyZYAiop",
  "key14": "55SmvWSdFLmDSJm68mAkaUsDgRm43ZEVWhb6XyWoxxzdT6u7NaCix3mqVMkTxFTgF7mYWedDUNPXRa5p1KT8N3ES",
  "key15": "5sK7R84TbxX985ix3HBaJNhab7NJ2WNS6Hdts1bfFaFLY2SHtFFMKshFT1cJ5Srr9KRHp12PLvMcTBsXgAimnuDJ",
  "key16": "2tX3BGGVUmHdQGJW3Mh2HXHyqwesKFz6ntHG9mKtsZ9FkaoWxG7JXM5abnUEjjobV6cNasDxb9MuPYSGgDNFS5gY",
  "key17": "9EFnVXTJDi8MA1ZdqChGBBj7BxAPA4xqa5yPkMPaEtw3NvDoL86AfKege5pmV7gKrRhuhBMFS4DFhhKwf39SSja",
  "key18": "2j3grFUAcPUaixWSbUSfJA9qHZk5yGKtJuYWhtE6J9wRoQbsyFizimBqfa84kqatt9Gc1e532Hw5ke6b2UhD3Y92",
  "key19": "2QfMTukmgZLdz7VdB6faX4jWZFnKqrNg4CAo8b2swPVoH7SAYReRSdwVuWEqCRcc7gEXRdH1eHM5ybKAq145kZAF",
  "key20": "5cCPW6FxaRptYSywYouxMwofq88XhuJip2US6vzPehESMt5YyJQ1jxQ86rakyFuZbUikBcp5HGKHfouYfwxzFugs",
  "key21": "2jSvUidKJ5bGRFsmWBfnoRiSsgUqsJwwtW4NsUbbczEaZifu5QK1f7ncVX9NbANbwt724LuUxCATwH4ZgutVfpDh",
  "key22": "24XtmnZ8VcUc4h8pLXTj567Yyh2S5NQ8888F5EEaxZ6gPKbZZS7MmY3Vc5jBsSNoouti19p5A9QJNMuNMgBNu4Lz",
  "key23": "941DvhMnDymsengKTJkp5QVCXCTVtUAXyGugSVDYt9NEH8m7CA16p5jm2K2GknxZTsFbMA8Mp9jsDiRugBdP46w",
  "key24": "4esVGLMwUYoj7A6pjuy23dAMzyB6BdR4Umaqxazv7zPujzANgt6Bin73MgU1XXZSLJuoTnQgRc7pr8G61Y8JTBz1",
  "key25": "KTqrx2AxcEctUjU8uGgnLSxhVbRPVGrFQkLHXJCmLq6DBg3c2WdVFpooTjgWRAPuiy4iUufjfHLVx7G7ngmiz86",
  "key26": "67Zi73jKFeMmbMCvgjAeAz9o2tBwMEDQh9VEkSamiW1QAZig1SsyGm6h2wvb77maTH7Dxu877zepsGH8ybNZWJqx",
  "key27": "2HHCwc48ZWGbU2SL6mHALS8fMKVKgFmXwDR98vyedZdoPq9UQDeTZprD3ELm5SKs7ZE2cc3Y5PcscpZUewK529wt",
  "key28": "3YxXqmtC2E7HSbQCicrm6ZqQHcbX4qDSwssMNHtVK6mVkYDTo9CVWEPer69Byq9urJLro6Hr49WL8NudFjzpSq9g"
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
