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
    "2fqEo1e3SW9AGqdraSwHkqnMtwiR4hcu8wxcoqxytyTk8TT8UMY2FKNi6t4PpvfbMyHWE9Ek8JGjrx8DXEn2BeJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YnsQW7KSRnD4ypfoS5e88K6adUGtUMVFgT2Unk2ddH9VAW4niyX77BF7wQujkEpZQHfUCtvtQLHKBmjuRCFEa4s",
  "key1": "MVJeLDy1EdtiH7BqsNiGSNFeustEZ2VCnimxAe3dbe2FcGEcrcEctVFbccKTp6YkNMmUExEKBQTkhrEh2LGYurH",
  "key2": "4Ack2V1D2reoDRLcn5Svo6udkdTfDeh22uWEWG3ULVLCdjwGCeLCXaRPQ4p2ng5nsncRzaF8ShJRL19Krbw9D9zU",
  "key3": "3EK8mrGjiXzFL7rjZrpWx645gxH24gZpKSNfbYNTKAGLBDF72yFxfNBFgtaXFaYxfesK3Hhku9z3WDdp76iEDu7k",
  "key4": "5wDeiTohtKYCqnKw2z1arQdwayELEMp1WzbyLr4vBPzBnX3YQGCWfxf8x4Bo1eH1XxAgNJCy7JdsexkB3cv5KKZV",
  "key5": "3NR32oqjKWo61nsf8WEmDp8GdSTuEzxyddweh3NmARSA9Vw7KbqpuUCrp7G2kJzf1Gnr3tVuC4XWW55MgyTmcN8L",
  "key6": "5cMD8pwt1jMNwcWwTXQCDp779oZUk1JctpzbDDeHVvt1ekZdvq1cWTKyK49EJuB216RtqfRxsr19E3YzMmyRo37z",
  "key7": "4KmkqMkuCZnnDR3Gyt9UXPcgeWTvswSkJ7otqb7EgcG6RXH1tZzZG9HowcprjDcbZhLKbvKMN7RfGpm1paubUxHp",
  "key8": "5tXePgJXbsPde7UQo4epuFPu1D5Edg52xCM4GaS8XmRjdqsi4w5TW1VJfZowABLCpdtqiJv3trQG1PsNV3Fj5YNF",
  "key9": "9rVvJrUVZSJQZ1qeWp9jVgYuHokAfrFrYYRv9wExHo27eNEGfcA8krhM41VWZYf3UQmPGk3mqZvqCPrKnCfPL4M",
  "key10": "3s91JuZUqeQqA7LUvxDhZet4LyPJZnmq5ATF1uDFaxUzxQB1bH7MwpLAsnxReTw13qgUdLLfbGS7YYA548YzUjD4",
  "key11": "JPR77TgnLPnGc6bYfhVzVofh5pLyMWVu85nKGNVM9oP7NRt8EM7kvhUcUthowemBJTSvd3C1zTuQkBpGrtWnd6o",
  "key12": "5gBKrYvVjWugGW8CMzY1xbpaPTBWLRJPsJgGJc5LJ1Y7mnwGVBvhnnFWpMXQXXL2vzcVmW4gc1GYmvpVfgo8w8aV",
  "key13": "5Wr2S6v3HRqwPwwaN7Q7GRh7Mx3cCDcybcvaaxrk2BXdvJygjV8sisqZHJCdsRPoaRD3XQzhjGTzfiAoSBeav1Au",
  "key14": "2rc2g7Tqav3MzKPppDj8WhsEXWSsafokMTsPzqjHj1yh3j55Up2atDvd6MjQwPgaD6dAH7wL9amvVKCNHBMvwk42",
  "key15": "2YoboYHWME2NqKNeGHf2xD5UdqKeZtNTo16A9agSfrm3VfKdinhU5GNN5dpWWcXK2bj1KFiGzb2FkrwgamYiwRb7",
  "key16": "3FbkHiGq23r6gC9GBujNZjjLULw5iZU5Pg5AzhMcZKgoBVoHJypRWrhNvcW57N1U3oSpEzGoN7ybf1B7D1eyxmYn",
  "key17": "55yTptHD6yEfmpgdKNWxmrr7oRfWrrTyWL92rUWZpdjcx234t7EjUBeYu3q6ECvRzYjpa3t95qs8esBJifFjXWA4",
  "key18": "3dSBy2yk4iFfpzWWGH1bRf8BSEgqQuMApDTTUP2vCDqLqWR4j4yYYH8f9WR3AYXXSd8i7mDqTmCpqK8SvyUXEtEW",
  "key19": "bcN3pucujA6WqY25iE2PFvgPRiJgjv1FDknGZcyGihnk2kexcFzKwneCxo22tR9nFpAM3tZoyi169kYBPhtUP1Y",
  "key20": "5pbE7CgB2UswP9Ri4q5FaqeikQQUM2p68Km4T4hUfgrDufVC5MvwQxhzsyV1LTFSnXazkzR3Ben849HAQ4n41Vib",
  "key21": "4FGMZQjthKbSZPbb8d8tfhmpCmfjPXMNhDpcYbsLhtLQNPX5DHxixgymD9p17c9Vx5XP77Ss1ZyZssKzTy3GaF7y",
  "key22": "2GCYHjeWygMi6A2ssyyDicGgqXPgjwQR6AzCRyZgyCVMDqrQH4NjXCK4sdPSy1k7zLXpBGi9qRkqETm5S4dTn8Y1",
  "key23": "2fLCPTAEC4bXivU2711d9MD9CKw57t9Tv22uCYCh9xd5ELLZvPWWEEoVRuQAtDWdgwLBhj6gr1tFV7N5sMHJGNA8",
  "key24": "49aoSGrP494QnvBxNWeU95Pth9wWgigfbTrepDMt1wqz2BzThKDcV3gzYhB6yhhrMtENYy8xNM2A5LPPpF3YWf4D",
  "key25": "3fCvaG21SXUFYfMtVQ1DWsg1UErEp63snDPQ24ogavy9HCDyQ9eEdDDQTRQLKeaib5pPPBQYREPSeMGWhHV1PTaN",
  "key26": "4hBDSNmsu9bQt3d3LEidpjFrN1PnRE3xMGGS77NE2ydKbYDPMRtQQLcQKvj4iNCpmjzKXuezDh7NRMgX1YdSTWQ7",
  "key27": "2ZBjrqGLMjAEbXTJFBraoTuRgsWfFHBsPDWG1TKxhfumvyUuC5enaWEo2m3kE7G9qXeVS9ppaJtrwZWZTtVByR1z",
  "key28": "JUj4vYFZ83THVKWBU8MCvndgYSeY8fiPcXV26EksVVjwKXxcVVCK73k2kMojvZ5w3Ak5KvoDcY4AVYy7itvppWy",
  "key29": "3pqSsTS7HCrZN53kYXx8mMs8WT5HdvdDLek7MCvbu4TNxSFTUR1umSRq7zYHpUc6oLokvQj7vgkPUyRtmWNGy5Cu",
  "key30": "3sXUGEtENTHB2ZQwHjB2JySALVvYQ98UBJqGPoFvuHi8HQG6uMa8EZkFhVU7YCi26THgmHuBVx7Q2VwEcE74QNdH",
  "key31": "vxusk5imZzqQVmXcugX4oTL8sT8xXAjwY1BNcadFCUjx7GyxDSJ47yHQotjVQv28sJWJae9n64djBScFnjKXdCD",
  "key32": "4WGcigXjHEyUroNfYXWYB53GceCcHab6m7RCVD16YaXd7XbGZMTQe8CfHru8AvLW8wkbhi8epZMFBNyCCanx2Wpe",
  "key33": "67icrTytHdtq4ds9Pdd5k7n2fZPsRQzA5PgEnQLeyEG29M6VahB7dVnzRZkHAPpurRFWCJuTqps5ydQQ21AB9BKd"
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
