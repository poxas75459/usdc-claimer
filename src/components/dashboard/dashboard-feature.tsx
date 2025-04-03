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
    "quMVf2SsfwAcnsbjpyHY4Df8JsqVNvJ95gniWebdpq5VvtciRYGfrRwYNn4SSf4dSMgoK7x7hqypZtMXnman7uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54KUmfJGR7SkMoXhn9fzb6qZyXdizQyQdyLCuyVJj4x7dgtngirEjNVVAjawsvsABZFv7tRbHeiMx5SocZAykkgC",
  "key1": "ZnWM5afUiGQeYLBM6REx8fhqyHxU2MEaGkvD7Juqfx1ECUyqHxfr32oA8nYP1SiWNGLo2VyfeiMfmoYozzaU51B",
  "key2": "7TvZ5RuRixNArtiwaraga1wmCrFcM7gGXFdw9Qshn3eK22Sf3PopFaxZkUfv27fMJsJtxsG5NcXKW5D8zzjgDUu",
  "key3": "keh6Ee3SGiWfe2hAufyi1zUU9f5w1rGG6HoYUg6uhg7vMA2ueasRFQ9eBV2zXhfae1JRoXHKodVzxZqACSQjwae",
  "key4": "29LyRvw2rdsSRhYFAf6oQbv169foC61w64b5BYvd5rAz4T9t875SXmhoouFCtnu2cg79JkQaMkGypT1M6nPMEZqB",
  "key5": "3N5xfxTYMwfwBu6vgukt2MMKBjUpA662k2beQ9sTd54SAUp54uLBxxeQETEjRJJN9AsXjW9amw76yCUXJrPCF6oC",
  "key6": "Fj99MTLTwn6kzpHHc9Y2FLyD7ResMs5bVUa2WRWP9DQCUpHbSu4x7gx7nAjSTwvdb38HWWWGF2ma9QABD3LKNT2",
  "key7": "3s8N7Bg5FPkxqpi8YbdLVEFhwaQ6UQ4XYGA4hSKSvGTRRr16kYSKxYDL7FNmn2H4Xc9iXWeU4SfmihMCzBij51wz",
  "key8": "65AUyvuPFp2j3zhHf63KGrM4374ezB4hpLSh3bBoh4fcczJjXu18Hn94CB8zL1HXvi9T4QVj69oxqZ3awjGrtcPw",
  "key9": "4pNhU2brd1SfBjkeGTrTD34SK17baWso5eN9aSXst9ujePwAf4smWwSPduWbGXkEaLaMvQfgpRaDGSzy2dQf8Ke3",
  "key10": "52HHKYsotz8FTPYRzgzj34nA3fyivdvf3KCgQgedAB2Y1WS2YCXqGFYjFsM2CjpBf4ex6sDnLjsJDjrDDqhGAuJA",
  "key11": "3osGu2PQPNQ7QMEcTPZaXMF75KMpXUmGNKmBkzDGVLDnS3356KThG45jXnWSHyENEpRtff5fVWySbvo5m4PZyRmB",
  "key12": "4Z6WqDADE3cyU9tnRfsEQNthpw2jREBSd7de2MZt8BYD6c1P9k9Nv9VF4SC5uLQWCPowYj8TFAhEJD5jKDmLzFHc",
  "key13": "WpzsosHqMWB82RdsBqrqxyS666Vdd1ULqdW3ffN3pzr6VwNGxrPW1AS2asDM4t6goknzHxXEUCwv1XHTnx8W2j8",
  "key14": "EHYVLqJs3k6v6h8Ut92a6iThjCwYBiznGzqA6ume3oRpim8mhGWudfEaMe5mboY9s5dCgJ1LmUstj1zMGDSFZEE",
  "key15": "5uJCJQ5oPYyCnzsokGPLuhpDa1x49oBHqGDUAYWqR1zkeKFPTtFLxVb7Mq5ZS3QsZNbWRAN6JcDnxE6ssb84ptTf",
  "key16": "2AuUTjyy6KRRzpoGRhfhtsQSJwZ4VNpJxruffGgE8e2vj9Bn8cxYpuijM5QDpMZRa8kptLYJ6U7ksoU2SPxtai7j",
  "key17": "JkMUXL6QouyhxPnPXNpp91Joxbe35KbRHE3borynrtm386BRwGkthFcULptgvuSZVAorLbKivWGN2SAt6jo4Ad9",
  "key18": "ahqHwiATkw2VpzwsgPpF8kuhsagi2qFWkB9K5BDs3dRz5gpmhAmBQsCns1NmxqjjENxAv2ZU2Q5itgzHu2m6qcG",
  "key19": "2K35AxhXvbG7TzBR1yyWLChSARwdiYWHevC2pZxuFz9QQQxyrKwewG9YYbcGyHdsAzaHchf19tNXF6QseeqrbyzF",
  "key20": "3R5a7jW4h3F3hntd9tvzu8EHrSEtBsbQKwFDzevuVfi5uYD4WHeQfWuPvW8y16uptCqvkFE5pYLSZaGRnsT6pmGD",
  "key21": "55YyiPzt9jiWBFxXVojm5CW9VMjFbV3imojDdBZPW3UWnoGA3QH7VoYnJ7WkQEA6P8gjBrNWtv86dA9iM1kmoT9o",
  "key22": "fMNePM6xDaUCBboaQEzPCeFMgd9McvgGN1fN72kd5BxJPsZfpbJjBWoAen6aggLRbDrqQZU55dfVa9oL559aRpb",
  "key23": "5M2vidpQaC6Gd9Db62qqX9YBispAHE9ZicTGdQFChLRZDroTxiKJh6HK8jmtpsia7yT1tiK3eBacUW4MmcXaMz4h",
  "key24": "2Em5teeKuLCLXznHy2CJc6fohnaKiL5cHg4gfgyDZDM1SF1ZiEBz7rPGVmucjhMth6KctL8dx9SgAGR7PkVqDWEg",
  "key25": "4SkoCfxgC8vaYyEzV9ykdfGZdLAnuE3UYiYrjiBQdKjRwgWmNeCASe3ibMshXwLQ1RaGoVJTxWQyswZL8qM7yQSB",
  "key26": "5Nvv3LBWPEBwE8Z1vcC3te25NYk9rdEWecZjKeuvkAiBK4WpBqwhKx4Av4vuGK4Za7T9X3C1TuznTzc8E6mQENtB",
  "key27": "aG8seL6gHaoPLXQDZknwVV878Yf3eSG2u9cXBJaouquNmC1atCgcqBkySz6VP1A18JUDqNn9DigcVjb52zvW2Yt",
  "key28": "38KK3MweCAqad247r6YWp28jfeZrciKLovUNBR6weTJjcPRX8Zcm7jmPDbuJvUZjmD8iEw1fgFMhRnk9HBewpmxf",
  "key29": "2RHMBaYz3dkiLetSbeh35FdojdXwXJRduyh3vot2bkBXXtoKwVCY1ibrbmDx9nUtD9vJ3iYBaoCwZuqAgHzc6g7Y",
  "key30": "3WWKk1PeaYFwTYrsFZgmA16RVtMkWhtBkdbMeyuwXJuQoTep6twNaw9mojjvDRKSJ93PZ9Jzyuq3QPnYYHw46mJP",
  "key31": "3fpkQXiU7BEwZz2aejGYuiidqFuu2tAR5a6zhhWkp4szVTAS8rPEjY2r2EEKYQuVxenUiPnnD2eDrXQ7TU1gMgBF",
  "key32": "2xp81JqZdhjVHemBHJ6eNXR2qsGbChSnJAWqMX7hdnYb4mxYN4PeqZVLmmByS9Ze3xBphVCPc4gfqB4WPjVCcp6t",
  "key33": "3xq8rCP6jz7BUCUbopfPujf7KBvudBY1Q7QRV7VcGroNzMxJxAnNmB1JJEffFhuqwjz2Mi148bDDBj6ot8N8mik6",
  "key34": "2C74BMkUoKBJUXm4BbnrrN66S8qZB8BWWGrqoWNLDNxcLJqcZuiZS4UWmpwsgdXZHe6PTioMdeMbas1c54sgGgKa"
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
