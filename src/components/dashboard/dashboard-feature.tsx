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
    "iMsXda3N7sK1KX1qEr4aPzPNTbYb1kqdnztKjkaffbrJrq5BkGFhktnQpFaMxZ6pvqUY53pFDdqrei6eJ9GZ4Hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWgVVNSiSFUNrDnmLu727bJhbaiFoUHwG5imxR9JURBTdeDYkfBEcuE8ebF8QmdrLr3jk9GvyvbcyzuaeU3LQg6",
  "key1": "5rNTPRZSDMTBcohspBpUqE49w85fDsk9X8LRvEpRSGTwFoAjfAMNzxr6pwoRJqv8xWMM2zTEg5Twrjmjq5EjC1G9",
  "key2": "NgFMVVzNgeRQq3AA5m7QV5sTBShUvkim9opzCjSq1N5GWA4awuqQ5h8CFRmX97Z3HJVjDZhCVqyrXRrHHQAMk9u",
  "key3": "aA8UAYmzzwr6gv2ut4FMgqewCyFgXSz8JdSyZJPxe14vbFcKWP7h9dn7WP5X8zoDgQoegKvk2dsYNxupCQL6sdM",
  "key4": "3QqY5Ap4wsNBGpdQwcJjwDXNdJ17L2wr1vvVMBWQf9qSw5Cv8ZJUM1p1qo3EaEXcZHx2rUWwVjyKoZnCf2SxCYtK",
  "key5": "3bbJ4W9DPqLdfUprox1czc69adLJce6JEaJCkBRWdxyWYGsqcDz2iCYttMfUhGSEKHugi5EAxmeijCS4niMEEWiJ",
  "key6": "4ERRW87ZUVNBpmnwEPYxZMPfMrhGr4wzXVoPE5mm2SCeEH2Sdsj8mbX8opRdSrnko9drkEoJEbA33yE9TfWHqvxa",
  "key7": "58arqNDqMU8HmWD2rQeCR7LUxKywntX7KP7cWn6yLHC1CkpJSuozRShKdgstdSKLBCdhuKV5mjArmA4cVnQ1GZb8",
  "key8": "52FDXDQxMNQXfBzADJ9kJVGFEUH3TwBpVioo4JcXk1cTnuSVH2Mi4TzooDSo3hA8VHwWDhbssJjcwxBL8UuJKDXo",
  "key9": "29mNYKeCNQPmwQLHiMtppdDnMQ1rwRmZ67gGygT7jADuhp6TKpzdZszaXzvwfHK7nCchCFjPUiLSicE2QMMC5cwt",
  "key10": "zsd8RbiLAwvbCFMMA2Lfnmh7eM8zupCF45AzQywcQXCtLhibPqtgPv4isGE4QQLsG9XB4uhF63WicsAb13Dayr5",
  "key11": "2zdoEQd6N6HHdHCqP196XXCdxL8xoNhs62VBif8ZXYZ2Ad7aC7SRNBirbEJvdtEBkkEzjhJJFkDSmXdqL5z5pfvW",
  "key12": "DiVmtNYGoV328uctz7rt5vEQKVJLy7aX87SZ2hn4CN3BpNA1CcMGaF4UqeUHYTnZShRdKwgdZkqC8x7NL3HFST7",
  "key13": "e6g2sTU1n7qQyCBG15DGhZ6c2bHY44gsxjJbEkegu8Zr35wSSHmatKY17vPRxcVbRggsjGxpQEnZ8yuGkCestVh",
  "key14": "DArntAr1HeTxWGo5TRnLRvBFg4ofhNzTpkdFF5xVqgDWEJ2rQe3Xopp5H9qvZ5dGYD2AyMSWjU898ckAR7vpLaX",
  "key15": "5ewLHGodgauE4W6VsRdzrXZixEzzRVk6AUcVfddzBXosmRUdXUZTxg2PpmzrZih8DRenJCwxjfYpjVpUm16iagsR",
  "key16": "5UV5ornnxJvzYEgSGYdXvUhYgY8ALWfT5QqHwnTkNz8e6Q7UGs3MgesHQpnMbnpoaaQYrmx8qxn4RFsTkKHSjXhn",
  "key17": "335qHByMdWjrR19DqeuNS6KdCtmegSLehFhpgazCtdW2dwRUVtJL2vw9MaoSGdGmqMuexaZJuNo4uooLVKusnA3w",
  "key18": "3pn5DbbJCGinPbx34VqY6BZ7DsLYumwEFZDjSw8wu9woqPSqSjiujPCFzJw9sDs23XjasWKEZy4vWgeRwXqW5gTA",
  "key19": "9UzZ6wbpjgBXHVdiYDzZCPLYtoDgWYxhZxD4ZgGMZYg2znpzKp7KjfptuDEqMWwRoCxo9Ewvtxa6pLQ7N591uiV",
  "key20": "22DKeu2JHE799ey8ckwkCmb34TMpWYmUD6xLMAt7nSuVerLYZLDkBU7K97JXxLv26LGw2VegtiuJmTtyTLZ4cTjp",
  "key21": "4JuC4BQaziYB5q94JCpKUz59LdQkqs2m6UKg5AhjS34Ku891wwxPxbxV5a6vvZBf36k6X532vbDNjSdmj5k19Y8V",
  "key22": "2yh5GA8Cp48mmGYVzkbnMUvMD9wYeKpwvrGMpVwx71Juum3x2WdPZ6cvpTVkZoPaJyEK39BGcyLx874x2Bpes8to",
  "key23": "3CLRVv4MrEj5vgMFLpkik4SS29SgM7sGgRENx3JW1PUQR3RDuZC2Z37K9tf24dvcVFxN5Yw995ddev4vtbyhkYR1",
  "key24": "LcxCFLkKTkwLXzmiehT1S1cf9CqrSfzvHwn9g9g1qjKvpCGVrxqE9bjWqtiK3QhbWCn4euzZomzFwgfkMHpzMM1",
  "key25": "VGNb1iGUtNp2MrSLuvZaStAADLe6wcXCjT6643KHAyf761AzKLXpAZfGQkDymBgHHbHri7Km1JpHE1n28imzUz5",
  "key26": "5NekUXyZNBEbqf5SnftyNbPbQ2KdkQEqPLGwc9vxoH91dzRMB28LEjo57xZePJhieyMY9R4XqBWKJ5whvAkPG9mi",
  "key27": "3PEpzph7ugTSZgQKMz9ZZJbKwViAtmLDE961SFG3JXMmVR8wQ1Vqb3YwZ7eDUsHEpXEUtx8yETMkBrt4jCRDqfp3",
  "key28": "4RWeAkhi8uDNwZ8TeiBSYWqEzvaEU1UWJVBM6EtVxHWp4xUkTRtAXk6HNajW5CZWNTE7z1Ts1iVoPptR9UaRdD1f",
  "key29": "u53QhSp4eaQatYRcjGMoDcJHGoT2oCxV38ypvTUFseoZkEKagBDJ4ryLCtkShXAEEQ2zzRsLf7wR3Q3FrAchErD",
  "key30": "PfUHfu4pCiKxGsGWVNFmD7zpqWrhK5SYQkjk8y52dZF64kFCmBgq9UVz4CT7i6DsDBQL5G1ntd354tKWsHx76nk",
  "key31": "ZwwK3Q1QY2yrYpmB5DbZ1FoUWWWCfUvzK5CQZUvghz7J2Fq3cdhv5yuow3oZUGvyGdqTvg2ovR931REKJMuWnrh",
  "key32": "3wBendadMS2TnGVwrHTfejavC16ZUCCQPDZpbMxcWk28orZ3euT5pCrgQL4RPwEwo1Jh7Bwh3NCLdYVqag8rv7mQ",
  "key33": "5eEaea7YWgbneJRRVnZM4oPFaekzkpigF2UphMG3eYwhqgaYDni83PMb3xpSX5xCiBpCpmFKNDqchFZF5As1ZZLK",
  "key34": "4DYuk8E3P33xAsmNbRLpoG4FeWMHfNUZBn9RYbwSrUkAv2YbCX38mD8czZorvEtk3kyVCL8Qrv7Md7rmkvnUnfwC",
  "key35": "3oJWbAKxksVaw3ZqDthR5gi8EKoTgZrZfBcrUvAmGi5GZiXpcPPWcKrJHm2jhQGDYw4HWYKRccaQRWoL2Tdtg9Vg",
  "key36": "4XgxMJgePakt4SUUGhyzxvedjLq1BZT9joM4HtZeesRG1CM8AYDZzzQGXdbySi7xPhtmDK4DwzkYkSCKdSXrWT7L",
  "key37": "29VZnffL8qBh9mKsewvjeKDpdat6UapgtU8xhqwJmrQUUH4cxoX9kuPcEkonVvdRSrzgZg5sUhwCTRWFXm5Dkrpr",
  "key38": "661B1nAPt2egPqjzouNazRAWqKhUgPdCX92rJgcWsytkvq4oPPb8eBbEVCL91T6YdDg71XFmnrHdMB629fZaRa6L"
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
