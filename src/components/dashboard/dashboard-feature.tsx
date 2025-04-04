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
    "2AbZSp8AGrpWrewfYEGpVrBb1tGEHa26tUsQSCizZn1mb4UH9Xf7cyuVVEA7r4svv1ZBTMWTSiiAjBJkCi9PSaJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "586aFYNF28impW7gLLUyAESGVC1d5AAexWwPgCnH523K1KBUno1oQdYA8v7nhHiJvDuCo6ToRRQhqwk2Kgu5qJpL",
  "key1": "wRE3yxffu2tEPMqQBD3Nnqq8MJvv6ovp7o9FadBDp5ScK2f6VShi8akT8jkhpprHyNXQMfNupGtBETGeQPLekMp",
  "key2": "3R12YZhKbCp7drPw63vhSPe7v9MdeRSMQ45LXdubbPCP6NMSm7oy3MMQYyHQrGvVo7DMzrbwsAWA4AAHjNbzEnyn",
  "key3": "5qQZNN98F6dcSKGhjJxkZhk3Yr9FX6WvumBhMyuUrCKxdRmzugrQ9WoFhtah5CSHiX5Ns7gM8xqjMLHJqcSZgVun",
  "key4": "3qdDsEmu6SAXD2kdcDypmuC2rSSgUFV5ZY9FGgdTSDrMVYzw3f16d1U1nhA4DpS8cawBuLZFMYuErPpj7Z4KU2Qr",
  "key5": "5qRRKGgmHH9iH2nCGqQfY4eXv7HvpouwzXZJA6MtpDQu5XUHgpWsfiUEV7isMUeb7BwWWxhicfJbXXEemmBSEAwk",
  "key6": "JzTj3xvEEE7Xyqq13iSpsGsmm5dyxE6Z4h5YXN6rjFxhtFr1bNg3kSo7rwUcavXM4rKHLENa3t468swrWq8cTFh",
  "key7": "2h3oEKpxQy4gcSxbNhtRXM6erXcvRRaHQbwi9s2uWCXr1QEtEQjaie4BkDMsuTU3VcNymq8o7xyMzB3iaN62hnt",
  "key8": "37facmwgEQf93cznsBjKRppfS8mKNFh2es53BXKoFcwdkMUYqwPmjXaAb1LqXi2AkWWWEXQSqkA3Y6qNnpMaWEJt",
  "key9": "5DEVje6rShoW9Cfbu9z1Gnrq9izcdci6Yj2LUMQnvdE1QMZeJWCsEcrehKHF9eSLaoWoBZUvwC269ybgoJ75d3VE",
  "key10": "4zWoFwX9ybg198FVnyMb8THJzLLxN1VKR2WRcLJedhcoq4NBLE4ZnAPPCHBuggKp1Vk6Vsutd5xJuYiiHvdjfJTy",
  "key11": "3hNMFaqHVpL5R1Wo7Jm7DbFRQD8AkeKJpe6D7tEo3BgHpu1UwiKS8UwykHygvwT8k19SjyCKBaV4PsyEP7d6FGK5",
  "key12": "62u3v6q7K1Wig94cGXCBmZvoJMB8PCtks2iHbkgjyrnXJyyFRRjGRNizvL1n4GUvCVH8jkmpGWUFBKmZBwL78Bk6",
  "key13": "6Utt34hSbvpdiSbbj6TLUvRGBVB2Qe3QH3A1kPuGapiRq7LB3nKvrCStTJJyi3PMdCwTt3Yk2Y1K8NiXiXEdixx",
  "key14": "4FS8SX4nj7nTwTc1YeVVcFeVB8nxWaWdeG9QHgcupKDU7qJmgoqHtJe9E1fZ4mHcniG5LtHXdoMGZGxLyxWZFjMT",
  "key15": "3cnZ8zt1XuCakWZwsjd8Lc4byQ53GqP1TsPvVpmSMZ93Pp3bydsQN11pcYucTsVCdFUNqvoeKZMAw8tYoii5Jp4t",
  "key16": "2MknM1Q21dvCodesQxMxZMJv8WWzE5UWSmdRwoj5rJK7VAWAj6dweEcpucMJmSXZEShQPThdEpVdBDjtmZHTEt2p",
  "key17": "2pEmQd3fgHfGqFNaMM4GrEpkxMoJciuoectP2Gw94Qi9cfrChXG6nXYBuAkn9gA7XXGv9sv1mEiqsCpKCYjQiaLq",
  "key18": "4W9rC1LBVuia7VJ7i1g3G5pp89PkHTNnhqUwqAenSbR1SfmgsJB949P4CTCoU1sE3Jjjp6H6R28F3NegWoLBRDt8",
  "key19": "2SqUvJiDzbkZKBhs9zzGSJAnuoUkJPBcd5nqkXrYxvWNQCeJ7DPWbt4mizJboJrqegc7nv9JbdeV2DtnqHMaVnZ9",
  "key20": "2w3eQhMojwNskjofyjpkLgZPQ8k783sBnHrHYSjHbXdLQExBR4G41jpmYz7tC7nvvVDR2hrsk3byf7WXibnm6WoM",
  "key21": "3dx43hUSDVSATUsvigHBuGekyycNmKfgW9fPLHoewuf4hPwZLvkatBJ6mV4y2VGcJFPX2oNbhfhrT7fdcTXUsDnD",
  "key22": "3MDifQsJJsnxCuW1N764TH5nE44r6sUx7AM8JGLXv9MXuHEHW1GnFFrWm6bxuz2rimTuWShrcCKsRtsqHGreC9gz",
  "key23": "MNJ4XfZZWNJrtgBW1Br9U7y16X4VY8eSwYh6bv2H5LuvptSzXA2gSNDbzyKMxfg6GkNEPbBbrr9bJFLFyUTdUJM",
  "key24": "4GEMW65Eoa1T6T3VLRmfmbmVFoZBVSh982g2VcaguVuA4UzPdNf8quSXQvestVE947SoSd58oJzugcjgjcnFr1c1",
  "key25": "4e6MnoF5NnAghArsqaPMisvNFHBd1BXuB28ztBNm3r1YeERoqpQyAue4T71aAmN5jmhxqK7gutJ3uGRqzNSiEvzd",
  "key26": "2SKxAsFjXvDnkLRxhfU7vR6haiZbCLVHGgbotsvWVJyHeBELtP4SRkMyv37ce3gyM8NqE8WsZXn3YnZdpGWZSSDL",
  "key27": "5wFqN96o9u5qwfCMJW3HDpQayfdYomCwko5WGoCgxzaGSz5mTtWN8PXufkSHsh9gk7tQcyuwGcBAyXWuMNcTLohe",
  "key28": "555SDrkyNxmqRhwmMbpV5SxB9NphecVThsvGMS5eZqqErFr2tSrdAJxru2M47egLBVFPVH3QY2YaLvxfufmBKSAK",
  "key29": "4wU54AngRYH1RoQRPRHCYDn7Xr2xUG5d99wBENySvngSvxAQoBVZJmsmBPPfJLPjbDJW1Q6am8zSQvUFx8B6xyCN"
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
