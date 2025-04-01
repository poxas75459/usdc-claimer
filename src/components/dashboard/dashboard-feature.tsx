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
    "4d2W4B4tSotvFx11eAysDy7cjS6bEZrhF7Lnx7FgxQUMrinmaV7FNUMtuSzX16mnNwVs1gzD1rpe6TyxVHdTuTnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r7ZX5E1jtKLDEVtVqqiJCbT77AK5qFcfFkmMXSNvN8LsppAvNKbrj2pNQP62S9CtehWqXY7DNCKmLyzpQmksXCD",
  "key1": "35uQGBJJp6CxC6wrmL9PXCvLdAdFTPpishomZ1piBPoWy417qJo2knQpKDkbLLSFbWNiCdoG3KafSpytXSXtJeuF",
  "key2": "2YnSTC8pLMj4D72yNzA2UiAG2vSAFAa2tSNwLoax1Wj8ZSkw3X1aNfbX2Sebq878Lxz756K7HDoEmYqztErkKoMn",
  "key3": "4b6hzKRu2aQpQv37fG4xvPfHYyqKjEfFgZbEuCFbdWNUzyGZUoTEQh4dJqEmMAcNDh6BW85ARvj4Mbs7kteU1czK",
  "key4": "214LVGWCTe2SJeEM847kdGYMi2jpChEARiKBPcdDvYcAfvHNcstJMLev3h2jbgchQHvAazXvcVSrgqgertat6N3G",
  "key5": "7hiMJbB3N7gR55wGj2M6BYzxZzyvpjkUhEwzCgQ2T8jJ3CFJsUk6aoNJao6FefScpCEP5Pj1m1b3FzdbgSgxx5Y",
  "key6": "3PsHnWKfcPzPJkrsU8brdWxwvthqNZRsr4tKEsGEAQg1c9LPaG5Rvukic4jK1oFPmx2tHU3DtKQF2xh4obF1NZTg",
  "key7": "2Xp9wFLVrDrYfdNtWVQPotVLDMSZ6rGmCnYKpnYKgCjhP8SdWSCrKU5nAMcVX63eM4h4WbuJ4naXxbUnUx5pJEQP",
  "key8": "sWoARppfmFcD5uMDqXFUCMXgWBH6kZds95Mzj7MAeAESS5iSmzhF8R846fsGbVHUKprQapNJRjZZ5SDPEuuM9M3",
  "key9": "ftdBmYBFK3GwZs666bQ2RsULVQCWGXzMPL8fw1pW9qatzHqPDDRAMCcKWH3NwLZFBMdZCdCPAQsprtMum4Pmz82",
  "key10": "2UjX2SnDGUTu9ojpbcszG2XBiaUwBnP1LsyT7twX6Nr6wrha1MAPxeGGyHxEXKiCaYRJjJnDea7uEXKyp8jf41mv",
  "key11": "2ApZZyQP983Et1PXxoQAJuzdTcqPACFqAqo5JL5yvEc8XJggVgwacLwCy2rpDXVZLqC49XUJbJdpEi3G6Lf2PHw9",
  "key12": "kpgMf7rCVHNUak1f32F3SF1NPkgEFuTz8kbCbwiNhKXFxVbi1wJa2xRsC7tiQcCsMqWGY5DhsVrrYkM7G3QQPNu",
  "key13": "5gJ2FEDCbPxVfSMinchS8xcK1xrexBFF9ivGDzkGy9251QPDn5zeWKz3tgC4P8tep8QShPd6XuktKGdg3rDYG3ab",
  "key14": "32obiFPgfDX8Q71xLWxW7rd7tRMM6ZTc8gGz91GxW3mzfXkGLPRHYbNh8usFYz4AEJkXFJgRjN3iP9cgJNHxZNog",
  "key15": "GQ6xpeCjTpuMQkC4SxNuaFzKEEjXDanbi1BhqQMHnkDnDNuZJWsaoan8Qz519f3sCPZdsamLaP8hNMS15p6Xcq6",
  "key16": "2J5GsCUW18dvMg2yfRUVVUsJmFdR7xeUiJYGdaGiNSGfDEZZFiLg2DHyx1PQTzZpaFZfbWTQeBmT4RipiXBcgSrg",
  "key17": "tjJZJFYUPGci44rqu4oRNX2yq2yqQ8DL7WKntn7tHvSkJMJHVjMeSGgpykHoXapzcvkKZfFgMDoNSZJqPZyThtP",
  "key18": "2wAXtW17MQ3yhM9yJz1vP5eppZvGCZGRwEveq9Wkn4hb6a9ZJHUCTYyQ1xk3KzmFp4fkCvoL9mrntAdtv2sF1NtU",
  "key19": "3ANMq6Ka8P9c3QESfv2bPWvsa5MfPGx6F9TvsX2rhh3hD65P7jJCF5Qi4G6iPjn1rvZzEZoUBZ1L2MoWiYHzMcCn",
  "key20": "5QRwWfywwJCBw5oJWzkU5c6VF1quMhzmw9QN55N1E5sQ1ik4ABsWL4n5TPz3YmAmKMwDRPiqr2177QcvFbLyQ6V",
  "key21": "2HWyYSUMC6L1fRgwkUPhtxrbMRFjRXxYyV6JTWyeZYvoMeozo3VNcVQhDXV6xB9Nhzkmeeqhtx3gggrGYSb8x24D",
  "key22": "QppZinVTMoMBDFED1vAYFSQmXdQCceM6EzUhHs76V6Fx1B3rTC2XfAxP8Ln2xq76o2EgvUhwyxz7yM2qeFePAgF",
  "key23": "32UtNk3yNcLkfFz6zWKypWgqP5NDLhhSnTayZAg4zsTSJMTuoXqw8B53VigujA22rU9S5K421XDjnBHB2q8NHK15",
  "key24": "5QMbcgs4waz8JQByY6BSZJXLcCDhoau92jkCEGChHwxoqL5Y73XWotMEExaUGKgkECARV2hyn4oFf3bk7F1Rsq5B",
  "key25": "2K9FyRsHE2JMCiyh7ZMufBgQdAxq9BkfDykhdG4HFJC795crpSz9dLqnhTKHW5EQt4WL3vkzmeJ5pzqPWtKZKjXB",
  "key26": "3MtjwDumxWahwvhAj51e4MhaKViBT3iDcP5VSAc1e4rDkURjLy1eEJTr3Hcmz1aE8hYpsL14wxacQHMgKyxnvaK",
  "key27": "5EEvzPDM9sECaxab6PzKZVitgixdh8MrpaYhn4ZjoB96isDU9Az72HtnJFpYsMK3a11QrM16mt7dxVgaSAn4D9vU",
  "key28": "3UDrzciErSxM9q6pMTv97QXFzciU8wRVm9AiDBXLV7razEx1LuJ62jkpX4TfKuMspj6J5S6fKNniMqnToijHdsiw",
  "key29": "318oYLZVXzgYn3VDv6zg9gaqq9T25HcckAZBrkGTqRBKoF8uECUkLKKM5zjdaFAimQSk3g5YXyfrujBeSVwnaax4",
  "key30": "2TrX5d9cyLHgdxM52MmmnZnJMuUYp7AoRB1c4oicb894MBrEdB8NJBBMPgmddHeT4NanrFDNtb3YLZ9wnmGuor6B",
  "key31": "5FrPreBYH8Ycx3f5KUT8fFcU5PzbUaALD3R41CAYEtLTx2wVZMF5E5XiMK5BuDpC1NxNGT4ghg4p1atUpoPwCcWi",
  "key32": "4wX7pSHMQM4rPXsVD1ZbKn12GUSydWXrR8esW49mTncCVeNHKCcmXhyNVG93bTyRbt7iTgxx5bMdup69j9gfyMaD",
  "key33": "5R2eJa5cyjW8pCZSoL1D2f6RHZbDD5ebTfmUU1FYrYW3JzhvL14Cs5vkjqvGqjTpD9kjRSLZsiBr4vUbQPo1S1rL",
  "key34": "5KL8CV9abNL75afbYAKrPip5FPYJ3qHEkC9y9z9HbrQsyEZSmZiyav84uKHHLTF4v2rRMwHK9h8h6jFUwieT8vYh",
  "key35": "39swNVH2sVy9WMz3m8Rq9JaUToAW6tLasr3W7bAYCg6hzqq34pG8jzrQB2NFu1YDfcKJ2h1bG6Efp25CEVfG8AYe",
  "key36": "wRvTgfStdKKYKsgNcANT7JvqtYVzKAdW1nhGtNgg3mVydFhNWx9NWjxvSepqggNcGEbWWBs9dBLSCbVfwUCZYPf",
  "key37": "4CnfTkgpvXifuHKGN4Yp26MBM8yShH7tLq4jpqGpUjSLHTieteWCckKZpsyC8nsxqp8WLa8L9MQ3jN7oEwsTn6gQ"
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
