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
    "2ZD9BQf8fMhAVSSfHVccve8vSjSKshkazVEkoEoeMnbYmXcD1odh93mr1w1AE8A3K97M7kNtZufZFEoXZGCBt9jU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jpLwNZ2tRr6L9v6vkf77RsAPvtKH8QRTjtrsRCToKCFrwMYs7SMXjLZC5JpSHLADwa4bXNpNiLBjy2s3UMZfDW6",
  "key1": "3bckbmMvDza4FkWea6fRgiidoW8NqPdmE3vjb92R1RvC56BjuHmYcB9RdCytaEbFcsmNvnarjfjqBCaFNzqMtaW6",
  "key2": "48xUHjEAysHf4Fm6iS3uinv4H3tDkuCahLXgctApq7EmKU3V6NUwjbfj2YXyBKbhq7gwPcTH79JgDYzNoc9RFeuc",
  "key3": "4SWXiyrUnKKPRaeQCFuvo7pJZVWeANoKjpAUNCjFXjLMiKwsVGJqzv2Q2Z4e2L7Q5ibNGUsrPdtGWfv6fVJYvgf3",
  "key4": "5as7FawwXZRHPDgBp9xEG9mEKXdadvoeQ9EgzQ1UB1fdon1Mm6iAi9kJ4SpL4CAJraWTw75puvqxNWikNmxWtX24",
  "key5": "3AXyBaTGeKXwRfoozaDUZUHgugEJaftvXXDgaQxSmyZCCj4YATMF3Jwsn4SLP7fQXqrGDKijK23QSNRn9HaQyBnK",
  "key6": "4dwmLDwFicAs4e5vD9aRmQE1bWzAce4cYwLkQkiaQzDq78V9AYPLERZMEA6g7AvNbgKJnJVXrReP3EUvWcXwbtX3",
  "key7": "e4Hb1iMHgJAhJakcUJU2dbw5CU8hqqkkjMZ225UVvzBiMvURHt9GfTsyuPLTGg1kxZdD7wTPkwQ4c4Si4wgSJqP",
  "key8": "4N3zAZZ7hsQuqj2FjULFj4HfbBeykguYgzzyXT66hRdSDPF1qJ6RgkSBRhRTBDDyTJaM4qA5ieZGG1hTcf26p55U",
  "key9": "62QHPGFdVQ8gw9B9eM7XT3tKa4mjeUR49SXAnNekxrvsnbxursh4duEM6gzK5wuA4U7QE3SdE9bgqey2CNCpx57e",
  "key10": "39LcLotmjAZGcQfKSvAg8mRAvFWW1T1TnEnQdhNXFEwuT7mDgTYzTMbrJeC37M3PU46cdh9XCQ3uExL33K7fWdyD",
  "key11": "vbJyXNj4e9L3EvkYJxnqbvPex3apgrQRxx5PeiSFye1cjuAstJ6z1kkjBa3xbmxB1vmttPXWUZDYsKhasRzMbDj",
  "key12": "3BTr1wGtCGPB2SjY8LVJhi1dCDG31ifyMNbQujdyTkr6xC49ugVv8tZe7XTJfjGk5JAwAeSg3vZGDmSLHEL43dgF",
  "key13": "3gbfeGar23SZeXSgNERkEWZcZgWxa36FeZCfUEo4761BsnKdrp6M7BzLrU7KVmAniQTAYb4mGsqwR7Hm4rQVpxyZ",
  "key14": "iKhgSdbCwLvmzUercNxEoR9vKZee71GoR1iATQo2NpqPzdCWsmXqPoniE7ZTW23MFtEJKiuevxxYx9icV4tYkhN",
  "key15": "2sy1n7cfFdw9UofWtzmS6j4iuFF6ry1q2zBfwTB4VijtmLARBpjzspEQX8LYU8Y2caQKp6EZqdCCRHjbPjxneTVC",
  "key16": "3CGNwgWEGp3cfKZe2pvrxTrxfcLVHshCcRU6Gj2fVeSDxdbHALRMpBoJWGbV6sSyCgAVSw7H1fJsRgFBHp9PW1pR",
  "key17": "5si5N4RgWBBHTnnC1irZr8Lefc8f2xjqjK2TPgP8MnDEWZDXdTeLhQQFBpwa7GbkyQQBZkNEM94jbJudjqRxR9rC",
  "key18": "3ZjVLDSTSueAv7r8p3yhEKnGqTBSXQsYWWcGgVYCiHHyWwZKM3qE7gN6NwGwQiXCBot8bpoQYi4GsrtBDPAPteHs",
  "key19": "rSDtpmKn4dVibNaVLWCMNm3WiuUFhJ8vmuxDT1a1eHaxP29QNhRBHQnZt2SwFs8K9LNe5P27An6bASxX94jRQKh",
  "key20": "5CiMtWuG7QefLp6WbtT4qRd5SP6Cn9d5BGJCJ3qYCb6ZoMN3Cff1gMtqjkhqASu8yqRdaHfGe5ZmuopK5C456V2h",
  "key21": "sjWtMrNyt9SHkMNXUjt9Ny7wB8s1NxMJSSEMqmmL8HyV5KFigTBCvbuUVZWxU2s23RoBZCf4fNHDW4JxbADeKpy",
  "key22": "bTUisHrvt5e84WjJXc9NPmjDVKeDAwLPfQ8L6x6sVwZ3bLfMuFHo1ES4KnvcEC9xzGnZn43ixMBGpRYfhyBW1j4",
  "key23": "3hhQq2pnZHEXHXtyZDSamcEHmfVh8VqqMGYpjP9a2p7J2FWhaswfH3PqyqT2td474dL3bTRbX4ML1BfD9BFUr4Kv",
  "key24": "4ExzzuSoRATrjnFJzrbn6ZmvKKdc2kYRCQ1J3oEi2DPfQqTQxRitNUmdovuoXSDiYjgX7zCAu33EpfYoGdVFD5nB",
  "key25": "4AXLPFy8f6PsfrgtG9WdpkhhaYzvC82WNtf6Nv4fwTMiNJVWwGDqzpCds11mrbXT4fhcwRodxa8VVdf4br8Tq5aZ",
  "key26": "WZDQK6DnGUggG7QP7MnxuCe76Eiu6JwxPXG47ULi9ctivHTeMcbtYKutiSoTGQxX6X9g17VMuC3SQcGkdevh8gu",
  "key27": "4vSFTxDzesHELLw5HDaR4JmUuYiM8iBADQMEfie9tJUMHgUhKPCE16waKfvjRovoz3baUyRcVo5BPciqzdMmFeyN",
  "key28": "3MFckWdw8oTLquDkwm18KDUbnN2Ew6cCYD3c48D8vamgxwHELGMhjUrnd1ovvqSXPrm1h2K5tCPsCSZeUuDTf1qA",
  "key29": "4dSUDfcLwb273QcrZf44Mh6oX8UpNGZhEC6Pwwx9NbSdDwnaExTLkF8134HXZjVWqnnBMq8vHiU2FDMvNqKta7wr",
  "key30": "5gjNy9jwkLg23uugc4CzcXbRWByWZwivC6nonhc4EwwkPG45kS4HwtE6VkLJpoJktUDCmVJcNkp8BPfG3ygzBFK9",
  "key31": "66Ew8VjApzcbspfm1MWL35BzvVFU2avSM9DH4MMoK5E1TjRbin3DQuMUnrj8ALUPcqe5xuJURw41g7ys5yntUgqQ",
  "key32": "2yt64mDq3j1KeeeygpcVNF8rq2XM42HrUkARyDbEBNHdT4fNZnBZ2k9NwgVf7kAEmEsSgPd5LZYs1RSbimCpoU5N",
  "key33": "BHjmbUGS1USStbjRfchG2Eqi2xUGtyoY6KYqoAfntDMGgNS62kVKQRh2D6i3WME6LdhK9Jni2UMkjhG4HRuDX2w",
  "key34": "2S7xykaQmUd2r65YdLE7NEiy7Jp1QwKgLwjoUFwcTGkuLqECaAqveGBd9Hdx7nVoMuHs9jioqC31gu4Bh4yWRRvA",
  "key35": "33PoUDBP6sCUTmKosrWaEy2B1HdWwecxgoKsqs7BhiKogNTUVX49Z7cNWxPJUF1Nb4tiCR1hNg48WEajvKdwTP8W",
  "key36": "2qS4fjdV4hgSB4dPDUfAPmsdwVg1ru9LEqsryAg4mNnyjRX2d31w5WezE1EY9VNBRK3X4VGzfcC2oBSzXn5pVHvQ",
  "key37": "fAcm715xC18YgCZ1hZZifrMZMQMUkYqmzYGwe45rLgPJpyd7HCrEi5G9c31Vf8n9ajT4sJmHen7qWeny7ZfR6nE",
  "key38": "3NremUxUdjeai36TtK1t23R27Ap3eqHzkUNTPcjZL3VmpovkDb5YyhKyZafQNzq8Qs8Q7vzymJ33Wm3Cd6kxFE4k",
  "key39": "38pTH7XYA53gh6WA6QXbSUGh5jLHa7mJ2Ho2k6gccTURdt8y37LzwJBRxywi5q3qmGYX5UgtvJwHuhqUDZ85tYrJ",
  "key40": "ZveUmrRPvED8DfV2JkfSsEKSpfACA3ry7f9N1D89YYn1PnAfL1H2eKQpHrc7UGmD4UMQ5cyJv5Jf2N7yB8miZNF",
  "key41": "2FCS95zV2uRKhvbdoGSyr1zwChohE2UCmMqpXXYRBVzAsYFyEtndjGBprAA7CEjuwbpsLR1AsMBrmUPGcEC4s3pZ",
  "key42": "219ySCdWBeLTA6QoSMHhuzCwzABekPdJ7Fd5mMWPbFdq39V4RvNhD9kAGXEmKq7JDihkKzvhdm79abimVq66Mmf9",
  "key43": "2bCKmKZVTdU63FpwFMWV5CeJBDqFuUJ8iLzvS5DGMeSEm3qmVJd86biu46pSjzGX8U2RyptKFMBmMtiBf1NcjTqH",
  "key44": "3gfRsmLzqZfVFHVbzsiTSV28Exhxy14xZMeuCfgUSEW4ugYoJPRXTMRUQ7iz8sYE7uMYwL9MPGogQpYNxnGjS9rb"
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
