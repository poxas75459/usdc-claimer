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
    "2zbGBUeUHkgFc4mcfsdPsbJuNYxpR2LKDFZ2Vjv7Uf8q7gW27XoqtdUCkwWV7DxDmUntVQGpRdRUwc8f5RsWsfLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wHNCVDB7JS7inAFcPgFUmZYcrtMEQkL1R6NkXQLDYsmpvpPerZAf5vPh3jZFfmPsLqUTyjR7WJr9ttdXwUH51hx",
  "key1": "QHm62M3o1pUtURFFWpmWrabYuJEZnT8FyLrGy3rxGtSK2R14XQCrXg6ZeYsS74jVxqCepkgbM8erL4aEfjwC7RL",
  "key2": "3vPuB9FoC7XRLQpNefoJpzeTZasH86SQvo9UGmvcqfvMfhpMoy6Um1ef9sYoyPFAmrCBThjNvp5Cfcza1xTqgRx2",
  "key3": "37QVpzGPFRJwq9vmjke52NLHr33kqzi3sDEHwLYtu2tSd3PuKwV4mbZfsVTQLLNPpodbybm5JBW5cU3bCbJx1yVk",
  "key4": "2uMhmeW3Am7zNnGvyQCSb1RdMLJBA9oGaDXdyKdH5N962dW5wzrDUzQaTWjEyNhCoyrKdsgGXicPbGfBDaX7MB8P",
  "key5": "4fQZ6ua4czCgYWp1AxyjXSydAzKCreni1a9AEsZGeCYKm3mVjscgGUY87PJTEbVqtyGH6TNSEkMWxn7PqxN6gpkc",
  "key6": "2AHzbPcBXMnCrfxdE7DQJYsc8Uu8gBURLMf55r2ozohdLtMP4qsnaWHAn3Kycv9BLEeThLGsxW3ugZnEheRJrVm8",
  "key7": "56K9KNQVYTwwFQBcefJjEugwzEsPP7RmrwSYLDwNVRGgrdGf2FzfWbJq3vMwYwKhnagF1Y7vN3SosTT92wB63cxu",
  "key8": "3rwZdrpum8LGe72R1ot9pCDwz4xeSZkj4psmPvsiUYuSfq2c5hgpdAspWuuSENT9Ma2SM2ykmrtKvd92ugrquxp9",
  "key9": "2Xsa4xk4tmtLRBRhKCooHEV1Ty5HZu2Jy3RG9xx3tZ82FqkKvjPKJyUHKgh3SPiZL7KWdCKAYwVXKM13CZa8cvxM",
  "key10": "5r5Dca17ZXvxdEbhgK4VuhWJzhW9geza4yitSzN48LU2msRknAgYdnLYHWjHGSE4AiynRtvF3kQRmJQ7aWQAvhwP",
  "key11": "3KmsbpCW8iQyY8qJzuWzqHt2pPe5zYMjZo6vds6dki2ZFkucYHL8nBGAYoomcmXmZhqbTtLQJMCX9APMCtnAYxWb",
  "key12": "XJJNDAH8WXJT3zzv8cqZS52VR7PwdrrHLGUHZEN7p1g8ezhSbGxq1ndK1brYbVWncSzyjxT8tiQdywNdeiDE23y",
  "key13": "3fYAQWSZos19aNV6JmFq3WgwK6ZGyeru84cXGKBtxf8ULjewFUfcj5mviYnvNaDSikJ1UTF5RuQCRynUTaT7mRCE",
  "key14": "2mbm8MfQk4bbDiKULRCkqkbZJrdnvdSKbLADcrSCyQnB6GZuV1ggc2VBg2yF3JL14TNUDpgZ44PSY2qLgGzcenjE",
  "key15": "2rWAWjx5urZ4UTdoEDTAHukJNqxgaq2PzFVVB9dY9KvTLMWEU36tcvH7Gz3YNFibazsAL4mQph7BdgWb71gGFzFC",
  "key16": "67QTxtZSRZJXCJCKhcNsfLVjy5aAMgozB2KSGypkj73Qf8CFVAQjG4NyXiMndyyfa42Y1PYxhZxwRdDMmhwdRXU5",
  "key17": "4cYAxGLLKZArah6KLVSbkNWfgydnr6dogoHNQMCJJX4nKao2KQEuGj3vVrjUtXVNAYoGuid4JvF3YXUwsX3GVnwv",
  "key18": "64NkCcoP2Q43kbdP2LR6Z6CpBccuudKMw4kQYuWNWDuNA1ivhxG7SBn6JptgSy1WGDFvp5f9D6vEkiyHxT1BKp2X",
  "key19": "3QMUVvkqjgZLfMiPmQaVk4caT7anqctbv4A5Btiic6CbpYtcgTc4GnJy6FChYNL51vfR61p8R7UrBVz7L36aDbnC",
  "key20": "3J4Q4GFve5tgVbHPc8QM2G7i7Kxsub5JkjGNb2ovT2L3dEb8wpFNDBuWHgqfVqPTeADazyUVmmyH3CWDwDhgEkM1",
  "key21": "5zitr6JYBNKzVCMVt7QDVMLYCKbNJyNYgqitYLsL3Eyw66SNDiuc4J6qpkJSK1zsee3REkXD86kSejrtzuQXcgvz",
  "key22": "qQQDawFxb4B49HdwBHoGBJfKtAkxfbGYMitxDWVpXzxy2PH4Z1SLhhsENrLD2iVYvPTVVffQX6hKR2kGG3WTeLN",
  "key23": "5vRr3gb3C3t3UPxJ9PJ8RQGjEXVDjDpXHsmRNGogN8buGWicbcXWwWKd5MifeZ1Z7HVB6MBzEVwzUUPQq7yogQYQ",
  "key24": "LedV2HDaLrPD41M4v8eUoaH2xbQDymGqPFGHq9jUcNwTWgkeCwa51aWKdk5G33CLmSJdPQ2M1RUpqnqE6MkNNgH",
  "key25": "5Srmau2EvK3eyaDfdDqZFwCJxDRMD3Sj7pDPRJvjdRjnhvnSVJH7oxymxvusDRE3TYpspzYA9xadXvMErjTx5Nuu",
  "key26": "3a7VK7GwaRJTmPxVVjUMQ3ECwc7wBnXBE7pyZDPUwKTFVvjjGCkMKG7AtthbvhJtWhVuc7XpBND381Qbz4vTHTU",
  "key27": "45dWYhQ6ATaF1iL7ai4EVAa3hY3Z8mpoA26ntZheuboRpjXupHmgmdo4q7sVpqJSpbV46ZitGhayte6JjKqQLFVy",
  "key28": "5LGZqWBo99b5dipahmbGUQmCciEtqmN8wWLzSmzr8AU7qfCvRPLsHhFzAiH7X7BCFqRBPiKnYr9iqLvaBD1vSiQC",
  "key29": "4jznyo5rWsHV4NjAqLmUq2TRtM1gbGtKr21QHcs6cAeMjjsxskLozDyBc8eBYHSz9ZfvdGs5t2LqPFTytqno8YKo",
  "key30": "4LARGazxkibfFTdUoRLZFx4vfE23gch3PNWmQeAVMsT8YFLhi82iU7ZndKhj5ZEHZzrMcjFLHSYdmPg11ktV4Dt2"
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
