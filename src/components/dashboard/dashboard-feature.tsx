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
    "3oWPAhngmRgx3UGdNXpbbYmVtcTjwaRdpLtkRsRnUsbvTE23nrJDMhJpMC2xfEoteFQh5uXJjoBSjAjGT1zZRQJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55mQjznMoqabcPZbc5iBS11Ukd9hxwvY3f8r4tosTSXzL25zQC7zo94SF82PHteY5CrDr2TA1n1NoemjFBRN1ufX",
  "key1": "FAFZt4yjaMvRCe7uGNhvH8ozo6zd8sN3oxNphpubHd2QdsoGh2yBPcfUytX9mAy7v2kpuAfXGukVxKYmr8vaXZe",
  "key2": "46bNbEXmHaaAfW32NE4TsS4fEo6hMcoXcrSLCfTdEguEkgsoyX7f9XdxwfioJmZRBcLeg3oSa16CjeUottSrZHpi",
  "key3": "4F4maRJ1bhaWdWmEmbqpPkmyKzSjoiM2a6pa3dwoGCebxMWwTn8ABvbNfffkzN8XYYNMEorPp6W2k6vxRbcXZVe6",
  "key4": "4ZaRjKp3vMfMAH24EdzLmKFdNFd2SrnqpMKJyxQF6UT14fAqa5dm9gPsNSPacFx4watuxQRsLxR1vgcpifvF2iNn",
  "key5": "5nKPTe4DhbQQxNb2zZsjyhfQE6ZdEpk7k5ntA6kfnTni3eqA7465SgGMdcQDFCiWpDkV8xmGNNocUhUHJEtD7Vpk",
  "key6": "2F7rU6bVr1rRb4HtMyJzkF51peneDP9by9rqzu1YAoXPXZHbebC9i7w9SkeiwoLcTVyVxGKy1jxxvPd9pt36W4yn",
  "key7": "3WqjM3ZB2Trq2dzcrjhFyA81mBmKD4vCu1iYAbMpCSepuXeuRubtRLAhwWEcuqHdXn5km29NRdKTtsyy16c3GABQ",
  "key8": "21r9o5oUpoaJqm17PTxVYu11iJVA2gxwosoac3uw8kVCfkimgAQke8TjXkKbiAE9y6udtBREieJU3nwj5wCLrKq5",
  "key9": "3KzrX1DeSZ1N2GSKQnmipazG9qay1Kf1hzuLcJQiwEths8CLaswh2gNNsSvKTRu8gHjqdqvtyzpPX3FsRotRE5p1",
  "key10": "2oQ7GkGc6524eiF2PQy2Tw1dw4ih6PsYJxfWm1gsHhuX17TbUanZoNQN846Nex3qGxYh9wxswRLsGSHuWGigPCUX",
  "key11": "4pTUB3h6BUWCNNnrRa7q6ygZz5KCHN4pw9eoj39CX4zZFgFpULfNLvgiBGpE3ENhcJkWC7pUpzW4WHdkE1nPXPhm",
  "key12": "K3L6ugpQF1WHiXkbnPNciSitA8wY7okCRzwZc34HMsPPnVAXN47bgPXEMBePuXB6Xn8MmUuGEqZhrQphMEdDPnG",
  "key13": "5YPjZwA2vjpwaF57SYvLRNWTaWfSzPNaiYpQpCmQEhALrAh42VfArd4S5G5XiWveDapKup2UWZJdnH27DUuCy4ya",
  "key14": "3R3B96DgA3LzXABYn3xYTc5sknVh8qRVxm63XDukXjpZ47MeVMSSmiqv4HGjK9F6H8GVBKhb1ejV4pPiWqa8vi5H",
  "key15": "fNv1VKMHd9UFkarwYJusCNDVk4NQ1kHu35qu47jh8Wwf3wr7RJDLSHJThs9wr5EQYv56ZEacFcHeWGPcy1FBADd",
  "key16": "24Kk5nxFJb1C8B6wZwjMNxhCFTnJpDBQFEb3YBnqCLFMGV1jiq5QmWwu6gHiZZgxRChhnVTCt8ciEFHtQ38F8gPo",
  "key17": "2cG6eoLEZMwH1MZkowqVP7pA8Dsnh6ZsMnsNAcmS1Gk6HXbhqj36pbDrzjejK2ghbC4Sv6WQF18LtD2jq1jUa43Y",
  "key18": "4uRWGEiLiszzTiWgSmLJctyprcC5ZD2GQ8GAcBJd6fC1VjR8JAHxfDqz3XVvuNkVoAAu8iN934GGzmQ7AbLPAAnY",
  "key19": "596noDV9PQ1tD6mbKWU2SAkYPHd7A9kLJcfs1swaxLU99eTv3DfuQ5qrnMntmEn1G9922cpQ5RQMW3DtQCyhXRmz",
  "key20": "3Z6YcyFHynjQUmUHXRF4p6mDBWwEd4yzYJQmaBDFw1pyUbX9xzQKFdZFVifQmEzcqfks7BaGFmSJsK7uUXXZmFXu",
  "key21": "54EFxCAWwzkGKrTs5JmWVZrTzKoDqpvjQjW3VnG9kZyctsmAM9ito5PLRrzERzn9NxdLkgmBnhELfZhY56gbcf8E",
  "key22": "5XYAxSipfxTfPSAJKCe2pkQ1KJE2yoXfUKnApEfruuJ3kVsqPgzK7XLNscbjfe6Zc4u3CupaZ2nctkJ2dfMGLcZz",
  "key23": "EwZzRUhbzFH8Hen7Wwddf4B9bbwqpeHCdJxkvBBJXmkjz2fZU4YNgCCcLxR9kdfJtdfQz8jQNVPE18K1kzEAgX8",
  "key24": "4Z3aqG3uJao9UhwGSAwvnUxMvEjFaxnfe1zp9XycHKkLVzwqHtUuLoKvcx79shPA3m4hywANmnxS7GdEhHpjypQ7",
  "key25": "3GuQ3j6NQdLfHhSD1Ks2HY5vvkmsrt1ktvomnvNdbdTXmrWGqKpjXCDzw5a57iTaqQD9rKvXBWqY1AVCKaZjM5ER",
  "key26": "3zxmNruo3mFoMkZYFgbfVpjBXL9bMFKqDGKVmtvce41oBhQw5RgydsBfmAGU8ZgZEd6aBHNLgN7j2AGDdbhDwbn4",
  "key27": "31m3LMBgwpqAn2UuaPJwduQu48ohZVofmqF78hr3XoRcsmi5yoTBwciChqz8MZRr7YGi4NR39Mx6gXYfU2cmXLkH",
  "key28": "5DSHXTDgDCCP3CiSKCRD3m9ifB7C7HsZxm3sXhpyFkmGJaMsjGFBnwwBMRbVqrdFywhmDFDZHg35fqGebfid8yT5",
  "key29": "3X1gsR1BRG67TF9VVBJk9djrbdcEnpxeMRsLGG1Gi62HeTFT4Fzkr8qZabv6yGGHjijkxNBRLZwnFYCPFtCFXZef",
  "key30": "ctW2hqnqzv6mdytad1sCUJibqoomqAuQqGDDYSM2x6c9DkrzyYNg6KdQQuywKpyfV7FJamKANSphZ7vEUn1KNUs",
  "key31": "4w2TdvxrPxWEhuMZaUjHuqs44FxVwjJDEboyUCkZ8tQdW15fveKZB9Dcuq4M8b71AMLKowbvdb2WFrVZBp4QHs5P",
  "key32": "q5DMRUxrBLuMoJmrpqAKmWgEAbpQhb2wLqDuxraaPA4U9b5VVnTtKkqCuXqkYRVnEZP4bTrRFejxWCZbhPp2WMe",
  "key33": "4FrZtk8kmV9RvXM7tNL4QAL8asD5EVPThKgFYEAe3kMWmprLPES69vu9AtEwWVvKTEFhjEkVmm4i5rmWaY5dbGTe",
  "key34": "jkomQsBLCM5mUNPVY9EpZKVGZ3DrixzKdAFcxLRdSpfNeEGgFhsJrdTqg5nY7GP7WbBoo3ZgFoojWNcBgo93tnP",
  "key35": "3vpg2fPvjhvv4X45HcqXE2rx55x6vb8TRTZM5w63nsshegZB5n8MDuvpy6m1LJQA9WDnKxjV5XqBp9aVkQCgwyYL",
  "key36": "2D8XJ1pA3nrQe1eev91hkkMpFSiRL74KYGKVoa9ybjxjzeczkUwMThz8Ykj8ji8zU44d7eiZS8qAo1z46ZPkTp19",
  "key37": "5CC456QiHGRaXezMAiKWUyMrUbpW8a5zumibUnmy8bNYnamGVvZ1XnapP5MrsETdhysLiM6nitsyjvANHT85kNej",
  "key38": "szHassqJeQhKQDrcqfP3poP37TvEvf9ZQKxFeBovSkkDGbofQvhBSrNcJsxNRQE3bXcbuLdke7Z58Riv6zbCVcd"
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
