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
    "4godvkV3wVNsmjK35DajmxVdyZxtcxUoXyYccEJaFLVTbTtCDhmVazSD3DQ8hVPMJJEGKHAPXi5h1N9yFyb8PSWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52jWfMEm96qFJnK1aJtr5pYUxe7q2E15c9pNuWMM42bqxSy31pVZVkuXwsxLVRPBh81fHyNXSKwqSAbXURRibuCH",
  "key1": "32CpX3NE26SjL2XbsVSVRoPtcNKFUU3jN1YGvEfrS4xxjKUb1uvSibQrnpm1NeNzCmBGf2j62HMrepBwm5yZvEgB",
  "key2": "4tk9wQwUJUYsUbTyhEd5JJyxvvNthB72zr8wuD8VExRDdq2Vrnf3vJkasPdtBAq6jHkTzXSqeYmxXg93j1D9DAbB",
  "key3": "3JG4i35Q5dEFmxRh6bF3cWCxexBwnRTsm4pkmsDSoiogQ4oakSezVmKzJB2bRw18eVkgiJxdhDd6AFr8YmG363Cw",
  "key4": "4TUKNcLaiNWS1qsV6KD8aGKnLqQ8M4CAkin4CaNipx7iudk1QsmpnGjsxcUTw2PwQ4HjNChrpoK8arKXX7dfC4qP",
  "key5": "Gkr1wL6yDtiNW9ihWincsdHLSryPKjnJnr7ZESbNzTEZ9b2rba9Robt19v17ZHCC9AcgahKQSawwmFyjKM5pYwk",
  "key6": "4Cs4BPQeM6g8XGsRhi4VNisZy9iYpjF7qdbSqR2m1coBcvh75wprRqdK1q8jLgvFR9iorCWsbsfRkFSyEhunCsph",
  "key7": "GPKGKEs3ZhFV8LpWHi1FpyNzbTLHbEybkPayAXxdK9Bnwe4ykg5myoGfU2vvRCcBR9h5PziTa326xSL6WmQKtNj",
  "key8": "MXHrGwVTbNDuCWwC6RjwvqFiXGtRbBtVskNCnD1qBecGBi2DGXyfYyRevXUifmaTw8Y2PftYktmksnVF4BEttQV",
  "key9": "2HgRmihdKUcZ1d67MgzxosniCdG45GzztimiTyYn4isqsm4VCj5G3MjoL7m4PXAzueBge9CZEVuho2y8LBk3iWbH",
  "key10": "5vTjs3zXx8cwP3cNaPJ3mF3MDzWtTmVfxMekL2DNo6TyWKWuGAib8p275sjEr1FD8poAtPvMULi4F8uddRif9TAz",
  "key11": "DuZd4rSa4BxY3TUSLRKH4Cgas8M9kbYdN19TpmeLdXvLadgFqj1mwh1jSk9enz2T2ha8pui1LeCmbMM7cGYt6Wd",
  "key12": "3jPKev18t7S7ifcgJiVu2jPZtF2guaekVbkVPAQCnYVUNsnaeNgohK9PDZD54bco8PrBsTCeqCkB4zP4yY74R1fy",
  "key13": "3Q1xgheqJcQbdpqG4bwWGDcyizcKABkHpk1qrNWzkCc8tbzSXt5u4Ge3xo3RcT7Tt8rSNzmixMnGZ9mbAs5HqFyA",
  "key14": "3XSHWur3DeSj9uVrakS6iaWe51Ecg77XyB953b8rLHj4coCCtTiZqsKbCSGfx1R7qowDsijj9uHqyijTErpcgUNR",
  "key15": "3xn8yzM1YVCLm1Y499fJ4H2aD1P4LeiSWiqf2GMpAFFKLkWWYvpvvUiKnLrXGq9jNKyxDsDUn2wBqpc3WM91MEKT",
  "key16": "28QFHP5EVZen28DoutG5p3BEVWch8FxjrUJXjdjajvzzdZJodm1Wz1LEg2FVe84twuvvFtu3ttqdKieP7AahARnz",
  "key17": "28BdCuJAie2TSGh9gcvgvmLYPpUYGsKK48mbSZRGL5sB8MDAYb35UwjhTGKxA4PGQA1uM83ogA8Akpe1kNDw4Xz6",
  "key18": "5TDDz7DSaDSv9FMQqJnApij8mbiqVTshnt15xZYXr3Huvd4RkpsPtRVw6x4buVFYGSjohyhYi4LpDSMoKGyeNG3B",
  "key19": "4hRRNR72FRpNyV9fshKe8AWqpLk5MdFWcop5uNHkFjYzGcKLxai6ozdY8tZgekMAniGkW1Cp2qY5SRgjcHADDPFC",
  "key20": "4kmJu2LRqqmm9qRdjqZxuRPQWFqgdrYjdp5eDwQ2xKY7A5bcGxi9xw3NCLsyKCryJHV4STFH9yrRbphJHSop1GS4",
  "key21": "4ns3Nd5HgzxjVv67ffM1u8egw91KVumt2KiqRQtE3G8k34eWf1JbLMQUAv7HspHTdNhsVcm1jPXmmuvRiZt9fbDD",
  "key22": "5nkp9Yy8xwqyw7etEDeZ8sGoCucu5G4pBVHGqpBoQ34RQ3X8CB8z6CGznUwQ82Wcei9kt2qbjKD2pJkfjX9T7cmJ",
  "key23": "2qAa3tPgPbiR8Ssmc4xQFTGGCaXq3AhRM7DUA3kB6uzKVsjkaJSvmWuHSLYso7vu4NcniHmpxcuJgqQ1Y7ccMUab",
  "key24": "4LRLkVVsGUQEtJ5v1ncMYee262DL87PWanRcr53yJ4oBTd7JgvLs6dUGT5F4aAqzZYt95a6bFMCxAjvfZ2SFxer5",
  "key25": "2ZdoQ22335twkZyPsRPkdcC6wEiBgc7mQtCZRGVyGR7FjXWkk7CS9JVYYyhdrpv7sbDexnWsng3iqD7udhcTuNUy",
  "key26": "5Csmw2NAqUMnZ4tUe5pXizTU2dWPxuXozrhaJJb39xmf5yBoFiAabVoLLTzS1QsuXQbKxTLryPGD23b4T4kpERyk",
  "key27": "3nekyCVfDPMUKsJ16wQLwd72JLsjNJbeW5qY8sSfuL2jhgAJ2fhXCy9txYb7dvdsafpsX9914nbAqKGDXYnBLwP"
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
