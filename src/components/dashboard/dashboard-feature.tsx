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
    "5yckgqZyGsddWVXfcJ78QXvqZvt2EBCpHHoQMN8feKbSiQpkev4tFJ5f2nfssuJ7n5B4efP5NTvnKwo1KDADcpmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KuaBCXgAAsnGx1T65K2JRnmQw5RK4rttQvGHA6rW2mHUyBPFnwyuZ14SfQ7VGeUeEnLJxQVNMiJQwEn9eNwkcgp",
  "key1": "5DNaa2g3rHpRNW4N5j2xJE9YqTtPSoW2ejtTh2HRGmkfbpDvDmS1P9ePHWSc6JgpX3x5hnf6BjzHFdReGuWCNyAG",
  "key2": "3yGuevNGAYV2N3NUmqvsXbi4GgvRCHsifcnwPEZnyATpEpVBm4s8JqEcGCAMgwKZAEGkxCDtQCMjebP4XpgjBMJB",
  "key3": "48YZQBGUmrEs9yAYCeX74RthiP4p1r761s8gDHZWtyXmGjHZSzTZWDn6zdQx1hiQc31Qmo6VnXPkJLQ4HgT1RAXs",
  "key4": "5StJ7HTY1mXQERrNoT2KxNDCLcYzSAXpivqwZAxJt4jZjG3PEiW8u43Qn6VN7cK37UoA1GFsM5x6xUkNWCK6ioJX",
  "key5": "65r38WYLBkhHZ1gXSvB599BfgXC4X12p7hiRCpRs3BTW8Z1ysEwXH1NKTjcn1juLsGj9fGX46in5MrsUL7id6rwm",
  "key6": "625SiKvgxbDDQRmGXTmcwrYWAm2zmhb62mUyAxEvbQqCu4Xt72NiP6zRbowvWAmvZmrLTfa1d7sEnSiN9Q6WuiJQ",
  "key7": "2rrD6KkY6mRK3q9xz2pYXd2ePfTVsJZ4w2FZKrUqTfmFBSbS4CC7yDgzXgWbASZ3cDS4W9kpUWWgyQcJgYUxD4Uk",
  "key8": "4GZ4sgqhKjcRVAZqrJVmpAwxi81arXwiftMrXroRgufGTBRLCNYR7moW7bwCy5YHjNyXJAxSNbjepo9N7nUCFZmR",
  "key9": "3ndQ4bsCT9YU1rEPSu7LZwovgYxE79oVGka8QCEg1ek3qJN2ovnZTx2HuK6KS4A5igm7kmHAFwQTrp5PVMhkEqaf",
  "key10": "3t4gt5uLppuXpTAYKCKxwYWVN7QSjnFWtj4r58WNL9u4M9Lz1d8ytjFk8HXRVvyrm7tZkP8DgMKRjNuv87RsU28j",
  "key11": "2sz7u17DaT8xBxmWZLS6KKP4PfXGYpdtBLwqDH5pVmxK1sG3tptBhTJLF2N3HeBX4DoR1Aqy5qFYQd6FJCcEjAGo",
  "key12": "55opXybTXfHzZZJyvkr4NK2ZtnUkyLr6YuX48Zz36bkmyz2LVKnboSzSSC48bKXvtv2d2j7JHRKky6xtkYwNiyVo",
  "key13": "vg52uQrZozEBpffNordqNDe7jx7qHXzpNvd1fYwLx8Tx6qHMoqpvjKLYZFf5rV4QUwR31zwHdPvKLvJXCrcZxbL",
  "key14": "3ZabT6W8P6pPHBWiQa9N2J5cVg9zfyzRcMnCEiVpafUJ2RGTTSrPpLJtDjNJoy9wEUkvUatV52JMz7MgfdvBfQYQ",
  "key15": "2uH7fukMULNZTkzGxKNNDx3pvHgSWMmXaBCup7wz5NqfuKuzhFotoF84uy9UgGzqn4LrqoEV7KfiXBrnKAjBgchD",
  "key16": "3qFZyZzQejhMcQzPL5suigoiDfZj9UJDDn85C79ZuN3mmXkmv4tWSEvvDddkDhKCVEWJs4FcNyJ7XGL4jK2RShE",
  "key17": "2qpcWVun9dZJPLnaxFfqAvVNABzN5375tuwRNMwAyLWKKMhDVvW3wcbGfHhZJazpGmr6jVyhEd6CqfYPGXPMGhP6",
  "key18": "3ZkapCxxub3L3CPXQdCmghE94j1Lmzqn1scqFjrWmk9K4bqJfcGgwP61LddGqsdvBKKyqyCZDSLTX3PdkMqtQJxr",
  "key19": "WtVXNbcBoHDY3KSo592H49JDuwQ8wCD4wi8XcqxRkfC7q3ApJeyhXe6qV4NhghXf9SnE83PoxC5gLLxR2bh4QjL",
  "key20": "2Qu8GeUjrgrKuvCy4z5GA4AA2BTK9FzUgN7iXxgxHvymcUqaNDBxv3EdegWhPAtXanrFHriXZNbVdFUyxVcXSimE",
  "key21": "Ud9HLUXELArBv46CMnTXQioYT5S5S5idmS3XmsyGb3BfZrZhdtreeRrjARivLsvqBMr3rsDLGUxZZGinTBVWwnH",
  "key22": "5J1g2GUoyo2dhwENDmTvh2ocPTFX7wiGCEtJZLP1eUcHgfXP4D1ePadVBN88bgRE6RPe1ct9Mz2xS7ycfHDEEnzY",
  "key23": "5xaUiJMcXu6DhUMi9rJeoZK7kuaz723CmgFaS1ZyvesDHhha58RHWgEMC2Bk7yHSq8roM2oL4FAnSowmiUzqh8d3",
  "key24": "2D8XhbcdvszUejDfveXEMJeEXwPgpXKhKJkjzzDytXqC7mE3g2uFJHBorZaJdHuBmp3CryAzvhBYCPyNiuxBVGR5",
  "key25": "4CbXrejLyrRehSMXM5h98JjJMVKbx6cZrTHfFMCaXsrPEaRCAbu55GLupq5wUu4wCGBwhTz2srtNoUP56Bnwi9BM",
  "key26": "F7WTsAqJKxyYEikdVPt9hPxMZ7NJerDQtMFvRzvRH1pfJSeuZ8xWjcoZgYGyApmURus6ZrPqR2ZqE85rSTGNM7Y",
  "key27": "57w1EFY6Nx9j6g2jm7GR3XtozUd39xzv9kXBbRCrrfhsQf9XTd5NzzAkVCHL5sMRuGSVzzosbE8Hmt2BcLXprKxE",
  "key28": "48arN3ZRXCsi3G7UH7z6P4qPpH5KXtPZwszQB9tAZUewXv48U8zmJoBs9kNf1FK6jWqvoehdSssqFUk6QGZgS51u",
  "key29": "2BciPkAcLXxQ3juokoR5kDVDxKMMfF4GAaA5fsyQvNzxQUksS7z7Cj86iFgLhZBR47HcMrhAg5eZmrWPAkXKh1FK",
  "key30": "ohVYUn1CVoVjWhFS7y5B2hg2omUNTNJBgDmdsTBavKxgr6SzKQaNQwEV9EB9Bk4Rronbs7Bbxh2xAzrrZfppzRV",
  "key31": "4WQE5ukbpD35YcHsRvsnRotDeCLAry8RAwe78s8pcAqPfmwcmQW1WiescwRKqcwhq3NuBn4rW8pDjagTaMnL5NUx",
  "key32": "42Wgtj6MXyvQ7bP9d5YT4WqsHzSHcRae7EHcnKogJNd8n1eQS55Eqsjn4m9o1NqZroH6YLPcdGdAB3s3PbGVDNm7",
  "key33": "yrd3voCvUKbtehW3jceTxaxAy5iFGB4rZY56c1t4e5G1py43uMkysPj15CL6Gd8rGSPYcr8XfLah4fUbyNuahwn",
  "key34": "3KNVG64kuwm8A4vnSC6jC4rzMRaPomNKGyX9Efsws3tUkAReWRPpkCkXKobDD47MeQZoDuSc9FnAayUtmEr6dER",
  "key35": "GiJr74XEfa9c7HvcKufmQqNHXbAaUp9ARWuDQuTK2PFUb3EL8P2HHtskEKMEWK5JW7at6Cq1i21iT2U78MXmB35",
  "key36": "3Si6tJjJ5iHdSC5ZVhu9qqaNGPGsyYpCDoTH3ZPinwWjM7kN3W7jcG7XGPmgwmBZWakKGQaTkPxbQrxbVZTbuG7a"
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
