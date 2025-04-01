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
    "2xhm2BBLzbtXiu99Lxze9ZaErtLKyvHovs9CbpscgQPs58nyDZYzXpUMeND2oe5uzFzVmYWkeFVHZ3rbP4R42246"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZnzTBDaqmMWdxVMto4dagiKSQvFkUZXCcNwDWa6GC6fA5DhpHuHT3YuNGg5djgm2gdLR4ixWxXFLAonB4cJxP2",
  "key1": "5CSpNyPKfUTWevZ3oTMHnCzLQP8RnL8YmZ1cgjamw6A2DJCKDu2PRZFijN4XqkWGi7uaH2QJ8znJBUCz5f4yg8by",
  "key2": "5EviV8rz8kqFophEAWgpAumkeH2wWrvLwHwvtwRXA7mvzJ4o9552QJ8S8aTkqARdn2QgNMDdjtdPwNS5A4jT8NHi",
  "key3": "3Md8DYwzBAqf4wd779b1xGhEz8LmEJhp2cqeDu4iicGsDRMNKv8dVLFAaRXoZs15sWzEPoCi5iHweDxZoKwHtuv7",
  "key4": "3WFaWMaFhqwzWMLrc51QvjEjiAPE451kenaiasB2inJ4RobmcWthKBcXuzg4dTFUU44LGCUttcGzT1gmSaoZyiJq",
  "key5": "2Yi38XLusLD5z7HQpfwjnVY1CyhGPppRbjcSPndJXQdj1NwgfMFPCmVSEdshH6CX3Dkisa1xrgr6bmsM9SCh2yvU",
  "key6": "5bGLtrsUpYZppnBMHSH5B36zxgFB74k8h35v3LkgdcaoK4VidzU9zQzukwbZSfNbZK9429LgXvYegiFdEC8yRpAa",
  "key7": "45eDuprkAUCfUoF4ywmYGnVK8s2cnPT6JLHxFeUPBKw8dJUULzfhHdqhQvNGM2WQHEqiGGgUzPkPMFUMkTbVpD9X",
  "key8": "36e1Qqu5AtpCyJbvHBTqG8p9Px5bMtuJajDMoDaVez7CxanUvkEpp3MPQatfp8fj1LhQZ125iWXpLPXGFm7LiWpZ",
  "key9": "RZSdU3uWM253EmBHsarTS87tQJxrWnbadX6uYjmNATftovcNdfHyuTuCtnUYAiFJokjVE8PGwVKUVNjkiU9thvq",
  "key10": "4eZJXNtvK53YtnG4c6SNk4cMmssEV8RhRPpD8NsKPwFRmUPqms1FKLpeNtaMnmE5GMbJxommeUaqZ3ZUnKsB9F6o",
  "key11": "5ia8V2ia9LTq9Rdq9oBH1KpsA6DDeEAdnF1N19P988ZUeQo5cGGBnxqNigCkMv5akydgDQK67wPDREDaQx1FrE5u",
  "key12": "5tsUUnw21Xzih5SXpgLAjjpaTWKbKnz35ydqduA3Sd6pnhjsr8QixSm6Zh3hC1PeHf2jhX5oBYwaSexzMvttZ8Ef",
  "key13": "m77XV1otjRov2pYPx5cskv8j1YUro37PNtfkfKYzNFtqR4ViZAetRjBR26RthGgbrV7NQPA5CWAjUGoGFhBhkQU",
  "key14": "56fAcaXi6qAKcunrE4QirvbRnovrJhSPZb6vcjLxWRYbsesSRNVRoAQERbegBqf3x7uBLY1PakoVn3TyNy6rivTb",
  "key15": "3MCMYfRqg6WWKdBwHrbixN9CL9JQg4ySbjtgTCoAM15wTj2TUcVD2UXdvbqoMuFj1PTouB2zphiZUNXUjwgPmgoY",
  "key16": "3abmqj9F6Ybj1YLPLwXYnKpLUvCag9c3Woveq23k6h2sy6WXV5YS5sshhCJtsckUDd4mrmD2RAWwb5qLXdfJai8q",
  "key17": "2nGnp8KFeHyvfwshNNhr2je6zeKkNw9d5HTpBnkZJvdT7wke1HAaHcdNjhWtL8pKHPWUn8rT4N5wHkhcmepQsaEj",
  "key18": "fCYyBoY2dMTgjNN5Q8Jvmc31RJJDx1xHUGCC3LXPLCR9GfR46pKE9f5qibADxAQS1dVcPJX2HeQ3Fdd8BLMzLCj",
  "key19": "VKNR9PJoccr8PoU4jpVbZv8MVCgHufEvN8mYbm1kVManj4eUk4no6Bwbbu34d1wGeWD1EiazT5n91TZooLAe5FV",
  "key20": "228wXkJiY4dg8p8rWHuMDsUojEp3zfKpz5aUfr6eK5jNGjUDFjC1dwXhX9e768pGPAxz8yu37gFeZ4YhF3VBctjD",
  "key21": "3gDSJSmdgAgEaVKtWt1RDRpQmBdWm3BcDP6pQkxdfi8R2fWyxyPUZVGVTfsw5xcQ8pt3NXbPD6gRi3ZxDfdTkZsx",
  "key22": "284VdxD8dbT7LRxLrYmZr1bex2sZqbP3R95nJuinN2Rcbd5qVbj9k4irD11P8HnhRm8xqV9Eg4xRS4CXW8EeBf5x",
  "key23": "3sK9FgBar4RWgs4THzjwANDvBD8u8xqDVSfFZ8KcbxLyBWY937ppGeRRKDVg6v5YiS8LMW2ttDEVYouWN7A5cEi4",
  "key24": "4t3VQhyYXksQs2WmRp4SUsV2HM4U3iJH5kXzanwhVHjRfwc6YchNXzGJLWXip1hNat766YsXjWnCTRv3PWrmiZt7",
  "key25": "23Ph15fgpFLhNdyxLmZduxq8DXjwoAJ7jb8bqA2mkPjfDR5sX61H1D3kkaks6UustYg3ysdMz2SPiuLTvjiszxfU",
  "key26": "4V5cxZD1uAGo1fiwKUUrLzMBSwkv4T575hj42ePZ4wALQTtwYykt19ayGYthPDNYh3n8GXTTfsGmzvbgus3HTQRM",
  "key27": "5jxmJUbibJ27UgAbB3CDRi5vSm7RF2PAhjQ4nCQpLJvq47ASotC2SbgR53dg472WqQx772a9JYwxANHMSyhVk5Jx",
  "key28": "55xaGF3PypvsY2JT9spj2BR1TNPztUGXWRXNLp7DW6ZLbWr9xmy9eP6k96hM2uXQVjEHwEA4g98mxys2ns6Lzb1w",
  "key29": "Qj8fg8iPWrbGzPERFYuTpm34Tq7CzuSBUT7NWj8uBETnPud1ww73CHEaCx1JyserQw7195njFmcKPHEwbcnXNZi",
  "key30": "35UiMnT6PiwGdCcsqGgDdZ62Z6ZQKRPA5W4aLDSf2pJKGgS6dz5pD8xumgprGUkrConcE2b8VJbYnbryXhmcEhLp",
  "key31": "2m2qPP1qJ3XvwUnWyNf2G4nfcUdneqoeTagwYq3uGouhLpjNjeks5XrZdzBSPmHrT5snuqdxrTMGiLBf8bfow4H7",
  "key32": "5yEDRb9q7zKfmLGo6gj9qikko2QKtnwA4c7xv9vwBMf58gdhkbbDnkoDuazUEiG3oL3cY73q88Nio7tBQmE9kmf7",
  "key33": "3DYDMgrvWU6MVYCWXgu8QjiRvY7Pq4uxHgjnUhbobUoQrRPCpjzhAr8hJzYiNK6dYyaCKehkRJZ1aEkT1eCiThJh",
  "key34": "3a7VWDXedikHkNv3S6PDeyg2fLScix9NtCiTsydTqFuqBCRFPBggpwEZrGZyDhQTgnriWkwTa7WWFf6zXLSec4eY",
  "key35": "5vESEr9Cea7qHQFydasozpMFVxUf4jW6ssrjPtKxzdmHYJmVxSuxkxXmuyZq9uC9UM3SRM7Rq1TFYu2ynekZjoD7",
  "key36": "zYSX2AfCf5svmpxVsa9Kwv1BmGzkNg2yUpHKbQa1eyoVuBmR7LyzGz2mGTnUXEQ3bZuz4mkbpAaCzj5rTYhpzQH",
  "key37": "2PLgCgaj4crAMomonwvoncc4pGy6FRaAcvVUyUWoJKNazEy34XBpiL83B6gtzKnncgAU95oDYVtxu8w1xNQhJXJs",
  "key38": "vA4czh5FyCHFshmF8sUsCC2S7dkDSYsAmbqGgpn4MJAY9ZUy5yBL23neATUKg6Nt5jXsEMnEaCPc8fQpm7EqE5B",
  "key39": "3FVuax2Wks3XKR4H3Zw5xWPmqFQQiQ69LzRCFL2fytwsPAFtvLPr5NzePVEX5tg7Jcng9NMUVdKYWtjoyyRD58n8",
  "key40": "2u6BMJBQ4Nh7JR4DnPZ1A1v5kyiXDBsscLnkS7NtoAgDmfQXMgdRHxoWFoLggUJU522eeaGjnDfHY2RaoiqDvb6U",
  "key41": "21RcAVzLkrHfMz29wm8qdDhrVqDVA4AxzWt1yY6aYGxg2eBgLGXn5vbv71nJWovUobq3D4in52fq9xQwmj547Avc",
  "key42": "5RnM5CQsSSpPU1LUbuTTaYoKD4DKX53Lv66s7HUcbNdKWPFGnqAxiiX9Lgd7r1UsNokdDv962dDRPPkom2S8Ts3c",
  "key43": "xnVnWFPEV7J3JJCMTFJnHmkq6hWJ7ogPTGUFw89omzdFpGx8NxNuKTX1xMWB1o4oN9PLwuVvcxZV6UisRFLPa9y",
  "key44": "3RWkyc2fevhgbkdLDEno7uHLeFquHiUKrMrbnuEgTbwXm7neELgSBcdQZgmRfyDzrSA1EwadNqyoiBqUFbARZUov"
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
