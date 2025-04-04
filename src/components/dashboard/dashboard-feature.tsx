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
    "z8KmHetcSfjsesHPj84rLz9eGdRjX1wBgX8NMRehPWmju8rnSTMtJFnmzSxyw8969HQAfgHXFyeWnVA3LUYDhV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x6RUWKRvX1pUs3dcEY2KEnvthC3wKSBFvNW7oSgiAUUVnc5tkRNSEAAnzVWejZHWcVmce4VWLrHQNGe3gzN5RSS",
  "key1": "3ae1WSeWwALUHW8dgNhWWenJbuuSoKN9oGJBEmncVSUY8isbw9PLbiDCS2F3ELyQaNPcir2ouwshJMb221NBzmdN",
  "key2": "42FNv9GGkKn6ZQGw7yi7PpVKCN26sGsqQC1RnGuGVbttYzwza3qyb8va33jHHYC5k5AFeAjmJTS7bNy4wNpytDBM",
  "key3": "wyx8zdihJcvy3xnAkAUdhje3MDGzkecYNFywmmB5HoLpJYAoDSrRimZ6piqSwc58b6VBr46T3fSyTxZbUGvE7vx",
  "key4": "3sWviMwkXVY73y4ifexZtubsJdj6XwToSFtQqeDQsmnF12ELtghzmN6t8rAqEfBhrv6ZuyT4znvFmcWkDkgBM8tE",
  "key5": "rXoUjWjme2nvEJ8kQvUfGHFqQ2v6wmebeZab41Ng76GKd5MbS5NXKbJWHcyZfkQwjxUcF7p3pfan4fyoFDXeLz6",
  "key6": "4V1w5Wfgs82e7qR2Xs8kVqKFNyXJiDKupR8Hw6y3j1MjsKp2u25pgCzprWBeizNtq3y6TLT1fmXoK2UgyoMQx3go",
  "key7": "4DkHjv8MwStbmPuBMejrpKisVZnzMhyYkevXLnMJ37mW2pxshTwwRBAxXbEFavtSm7Z8BcFVB1FaQojwKn9XcGHP",
  "key8": "4sBajxgEuzcpFR2EViurSCfdrmvxL4fuRQWsNJ2F1idqFWemV9t9ji9S5f2bpSSnjACKLpWu4QJWojn3MFcpaC5T",
  "key9": "2tKWWwdz3zvGC7PbewKh3tuRbrwQdJc3uotTYq5sxCtTTavdxjzMwc6wJtHd2gkKHjG3yPyj83sC3fDbDqxSzAfk",
  "key10": "5cno92FmZmezRHYjdWeNNmteDuc824wyaJFjSBJe4VTx7nQmWntJKCBmS5Nt9FFTjSy51pZKQKbHZqW2UREcLwnY",
  "key11": "4xFR781NcV4we549DAYhJA67KNZc8TSejEdCB1fTafjfS5YVGAFGPkcnZZRjiL4CKxEGqFSeGKosQvF1ZNQsurQn",
  "key12": "3MVRxK3Zsbhs7C1F5SkjjGQjc7j7WS87KvBqkjvZSggkiwDW3DCZESvsZWpvgpjDAiYEjQxZAq55mha3TiSV2x7A",
  "key13": "3Rew5yuGShWWpuoJ4rHwGL1cfatStnwkrQnv7Ynzbkyc93RLgiEHbD1cyGZF3cRotonpc2auDMRTcMfAUTkcpRk8",
  "key14": "4CwT95grfU1AnqDXJbnt41TKzEU5Z61R1LqBCGFKFapa3YgfCsdHejuNDe7QHxWPhb2BTqp7d3bGJH5d7A9Mrjwc",
  "key15": "2Q7LjFikRACcPXajb6xXtmQLmZyrWLZ3Lgph3YYDZTFRdLVpStkPQbZ1AHhX8pqgneBAZrbsxq9dCsKoXqEnB3Z3",
  "key16": "2YbDSTNDv4qQ7gVvjGEhg5pzNMf2ocRS1kdtcw9Aro9WJinoAx4HSJcX6uogSpPrzqTA3HdwL8ecu8ok9Vs5qnwS",
  "key17": "2Awi2d4bQXotA92FXuRkvF6UXcugumcjuvqMNCkrZmENjPCxjfubusFCD3TJdwmAHRV5TyMdK7vzi6bVcksCC7yq",
  "key18": "4Yxp7W6vGpnJQ7qSomDjzXsaQ4Sh7mjf2nvhDE4r2RAoSUvAf2WTULSre82JPWcyb31AXPAt4omGr9F56LRwCMSW",
  "key19": "uCESm93JjEchFAfya7LKk4Cieo8Z24xLZYUNFcQCY59po2dKDZmhiBLN1ZXGkoxzNCUuqmtUbNdR1SZn2YoZoP5",
  "key20": "GtLvrkRXUoLooCWSjtotkM73VbDEZqQ23RecmeJz2Y8ywH6zSFxfwumfjeyUgcM2BzbBugkpSH6dNcw51RXNe71",
  "key21": "5moxfgEjM78VY93ppQArkrjmaoHCka1jkjxWvNBa7J3mjpiLDYD7B5qtFqmGtn4ffeDPk2TtLzGgf8P7eKphiud8",
  "key22": "5Rip28onwgUoK8jax9dVkTt4xFW3ZTeviGmDxjtNgStxFh1hMyvixHk1UsbT3PtjvcbY5WRm2a5CoCKK2jVW9syD",
  "key23": "3N4Kt3NLDeroPVJriuCPFGVWJPFryUqj1FVKf2eATRxdQMcn8kS2jJv7rQLRu1dcAt1rZUwPwQ6PtrpNs2N86tup",
  "key24": "YfQKGSZzXofHTumGgDHV9ur5dh3sT1NANV3nAWGbLMrRew85Y1hqywXRMT8nAmBmtzWGMZinfKV9SDMgod74QYt",
  "key25": "5P9eGbmXnzSKe5PRn5moXXWc9rjEZ6oEC2K6UCqS45uTpDQjMqcLse5e6towgahfPmbC6HRMnwDnFKTgndMWoCaZ",
  "key26": "56eqGMpscfxQivmKjmCzW3J8otD32SXoAUeaNJZayjoKdR8kg1nCGX49GzE7wZjLSHtDE9XjeMF59kpzk1qqnJqy",
  "key27": "2n3a7wb6iQw5WT9PbkyQC6yoLr6ruMRCNm7WnGKdywn7mY3LZKZLBS5oiDZHmMifjEwrWUSDvpvqLEsp5vqPSkdk",
  "key28": "4xC6tym8MNzmb2WKCzx3zUE2W7esEeDEiprN86JDEG131c5oZekZ96ddX8H4EyHuyunnLgiL7a9nBgpfT4A8DVQa",
  "key29": "kzM4PSfRa8RXuCtEewoDYJct12KuBNJ6DERDMvsxJDpE7MqUBmz6pcYiz1gUBXHq48d9YeszHhfmRnRYaTjM5zb",
  "key30": "5uDKZsHQhtJRVzcBN2YaogtC4DMwzZqFCY4PdvtyTZBS9Yw75L9yHg3cvzKk5GzPVnwBMJnDVHKSAcBcC82EMq1h",
  "key31": "4dEVgcDHjVR2mGSfpNm14UzjiTDRBzMMjUeWfKiSY8SB9XmRRCLv1jVZi7uYPYicMhiAhhDtfiGcGuCkGBU4bece",
  "key32": "4AksbT2b9ZcsGXitjP8W1S9uj8qeC38XMPkgR2xLAuYmTB6biL1RhB2LLbQDnveYzGMtc2rnaJ4akFHXCLEnvEds",
  "key33": "5aSwNqpvk6D6gjCCn5WFAFNpW4UEJZ6u6abXS7ndDav9qmX41LoHBaQNU4nTTDCH6hhrGpTgaRnoVjo6GRZzqk1b",
  "key34": "3uzZvFiEPP3Qg4G14HT2ZQahcGNAL3hu3c61ffggwpP6VR8zcyP54PcSFVwVMYUupEknx418GSjCYw9U9yZAmHsb",
  "key35": "4H557T9KMcdn29YACiZkE8D8wK6ng5N2ZwfbXVM7rdegdLDKeEkzNBdRcaCKQVUp4E9fb3DUq7AYnrVJXvKUsWn6",
  "key36": "2v9jFYAPneBficJK41aRfButgpt34Bc1D7Zcj1YW3m7kCwKeiExsTUTvviNGfrdDxSqfeZpPDH4Vxv2VfhUazgBo",
  "key37": "4zwdcxCjTKZHnpWN45rMyVqtMK7B59dmP2uiX2NxJ3QZpVQbVCLZJpUN17iBJwaoEgKyYSLDg3N7DG1FDi2L4R1n",
  "key38": "2nznBNjNs6755SaQbQESM127o35BTbCxbabRsD4kcxgrcREq3nzypxjpTT1nxhJDPXni2yjr1zUUfcY9d9q1oDoX",
  "key39": "2yR1VBpTYp18yjSSbnRtasjwzCGzNbPeFTeSLfeB1NZn6a4DPqYL1QKdsGTyLUDQHtPepzLyCb6PGaqfZSQ7vu9Z",
  "key40": "4q48ugfqVTPbEw73SJYYWG7vVT1LuUPo17Ld9qSHo3c7omfuLNaEGkDDnU5Erj5DaVqp3Zjd2KczYZMKfd1C6GQv",
  "key41": "4C8gbw8bL52uTepyVVVrHirhV6yzureFSDxoKKUXwoXniBNyoys2E1hfE1HL1ukk7wiSQrXWzDEvFfbj5cJTT8RF"
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
