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
    "3AyGEaoDvpneDeYYFVs928rg31CJeXticrZHTkbpfsK33Q4uLX4caLVxJFkzyGjJsh4C8Mpi75ffpAD3pYasL6wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pRTx6xjnBPK8otp1iKBsLFKnbPkAAhEGce6ktqNccSFREGMfEKBdpNSvTC9pp7CXeNvuatRg2QtduZPxWw3RNpM",
  "key1": "BLpmo4qJm5WwdvrCU5UZqyFnsc5k78UfpTseh18SHAf4AZs49MsE7ThkpsugyWccTsVJYWkWtqKJa8eLvPkwfoS",
  "key2": "4yajxfbW441h9uZQMQF1TDaRyW7oA7wGQE1skJVF5id9oPU7FFyJXhhS6S6haMsB61VDWGvfc7udxHD59ipnHhtz",
  "key3": "4CV4kyKKpjzR1Yfk91tXgXNyeJUHVAx3fb8SjVCMPLc5JAQzHTJJvsrEKHQjjhsofuudkxcB3GH9dUcexTMySH6q",
  "key4": "3xFcyfyMi6NyM1JeixNmWtYGiyJgSH2hTHymkSaEXTsULFch2d95GGjxXHGG9XFuJxSAz4MMQY89FEAWT8X1wGS7",
  "key5": "3UY7ALDfR92xTt2XKDrZywW8snfNWvVmmLJEtpjftdAdBrncEg2Bqrmm3kbbrjgBxM9qkf2At259TzbiZzArZyho",
  "key6": "4jq9ggt2NiX2zm9fZKwp7fyBQES8onNvg9DnFWPWydcScP6sGYzxgdkMiLojwURkRaaCmQNAzE6A7p4bE23kG3NG",
  "key7": "CvL4z1E8roTj7eCZ1nPp3tab9o5cMBFvyBnZevkq7Pd7TDALBUpgj6NweCCynJibAjdPUnxhR1fn5XDpU3DnceB",
  "key8": "yQVgQ7kcsmb5fJueAxQAJmx2wyg4zdZgNw2RwsWaWPy5tpQcqBkwp5kXBqfXWTSV41GzyHGBafuQccdRfbqWWLc",
  "key9": "4VqKyR2VYxApqtM3H94J2SKgdHyoZhfvGF9y5SLNsbBsWfCpvgg5hmyb7DZSCXwkEJDdGrsE8SB44d14i4Piux79",
  "key10": "62cKZ8GEGxMNQUnnuUJy2t6ViLRne3LRxCgq3uF9T2DVHCvwt3vpBAhgVv6gw8moDaU5Xr9TYKcPumBdAxgjyTmq",
  "key11": "CmVra5Gg2QfDGqFaDvBsoER8tfbx5UwJ2sPsBXLPgg7uXhHfK3edk2776C1HGAtyD4BCmXoNAjbZ3Vyp663RUpz",
  "key12": "VaVpE496k5zMGRgAyVz5yJ9zB92EqHfadqNREJzLmyRkCWpE8M3CvNKqW9boPtAsxKJFK5wQP1XFAfWagovpq3w",
  "key13": "DGrruiMbEYsUrEdkNrV8iVBn3MmfLna2hUvBZAHhtsHjJYE5gdDDRD5QFpBdyZ8bzhYXGCJRTEAGmcoji1Kio5v",
  "key14": "2qJwNPZTLN1P97G1nDnRsL85Ds1CFT3mT9K5TRF4a9obPCfxd8GcUB9Gvggphd4ND3X8Pc4jjtdV3gB3N33rpwcH",
  "key15": "3ZGhTVYNvps4nfpTXZKQc3nsr4XsHfN6aR61uaz7S1Bzrs7eXNEfw7LPo8VyoEqsogRQCzgirUmvKWYLyEg6HRQM",
  "key16": "2JgoxQnbFCzzbWsjtP8mTRzj2QBYAZxsVUd52faVbvN9cqEW31PvGUdQ3hapJNQzPBeeduyj7QVWik2kYZW9vPUU",
  "key17": "djatCLU4PfRQBQBEh5A3vT49Hoea5VoEn3NKuDXagE9x9JTVrEu42pfxnYrbcn5dKBjyXEaWXXx82K7FFujn8kg",
  "key18": "45WhEAj9aUwGGznBXyAuW2U3nbXYm9AKLN4DKtW9HJnRJwqc28oUfNBJW67GJsngKiBkcFH12XiUPbGwJ8DSjuN6",
  "key19": "4pfViE4u9xjNui8NZZqBhYMkHKsbkP7qSNh7QZnSvih4mRveast7798jJpoatjfhvjkzshwC4uLDANg5JfXEroYt",
  "key20": "3weeSDEmNgENLwkMTtthQGfF71h8PZEQftnkpERuabRztChUi116LefidtnDdtQzUv1RDteZYM3aHoVpTHWnn6bL",
  "key21": "pRMtPSVEttq91kWCk64nRBmnSw9DJLgVWaF8oFoX4ndrqTqErJffumq2rxuXUzyvfb8ybVf7CfkZv5cazQfNU1M",
  "key22": "2iqWFFs4jesNT7cYYfhCXYn6aFLkULK6D3kyVoFmYdwEa2gRzNQvifxfonD6QKwouPxSryqCsWwQm9WXSsrwZaaU",
  "key23": "2hKvWsLw2o63Qq2iQP318nE6tB48WjoWVBAs961fyzbpvPBrEE3xRNXDyDmsWs1MAqFWH9ivqPD6X8zhtzcx4g9Y",
  "key24": "5CR6VDzFdyqAMitX8G1KRvNoBWQsRnZQJEUhkkHAWnknnRMMNwKeUU2cedty4VCnav7kM3URPNR8DE8TTt7MQ3qE",
  "key25": "X7pbnYaGJr5Pug3D1ajKhsKUqBEQ7W2w4M2xpDSUVfZ6aFAUnjumeqKGUD94Y8DWCQXzJ2Sn9P4Q74EnhEV7SEF",
  "key26": "4wncygyoLy3q8gYzkVQM2uyYH4rTZdjY9g2eaN2Ya5AUD2ePV6WHyKUssjcJdupGj3NG6cn5T55cgoZrKo13cdyf",
  "key27": "4YLKGekFUjBPywD5ECUP7wiTW6MDURHkyU3woQgYRKbgQsGmy1wnCeba5GH92K9EcERdPZwVfAeq3RMs1aKexkWo",
  "key28": "3HVukYyPp7bweG1qJbaLHFigsBHhXkZVzVBLYJBGv9LNYicqhX5rHiyRGBK2eRYj3kTw6M7kDLcur5SKe9iXjVsp",
  "key29": "2LAaKtLvwgqKR4SkEFSuCTsDhcgnmVMzh8UsGRUgtS4dFHfaAnw2wDECoReosexwij5iE3EDuBvtPMd7tow1u7kd",
  "key30": "2JgzbQrxjdZhmS59BSniX1sXfJpxz9zpfGo3A78BXt4RFKdjUhWNdczd6d5fjrVNGde4Nq3MfXt4RfD2CsNX7W9m",
  "key31": "4hDcmRPj27NZVBirzgfE4z3uXT5q24X8yNYwDYy8RB6iLh9KR9B6GG4QCNbVT78UsPww8Wg9NQdAkceJ7tokMdP1",
  "key32": "5Ue1C27fe1QfdTxczygwXoUGWwsp3wPDw5Pcuuw5oy2NUBvEfBAv97yF6tmduaLmpCJwvazoP1ksDp2RBBezVEAG",
  "key33": "3pSb4TpVqAibaQ8FFdFMT3rdrerLVSMFtM885ESgqwXcNspTHKQeP8cQbZRAuMXJ6medRaCoZCZJP1HVs6Eh2LRw",
  "key34": "5MExWV9J1PeGTmodHMmDJ7xcWZDmqME5UN7w1U44MJE2r42AyWteRqzzcsgck41vx3nbdR1JyDQ5EUxVDRpcK3kA",
  "key35": "59GJULxinoxKxnEQovvjNiY42EEhWXWBrMbRCPQ3ndCkigfHdC1UCQVeWG2kDivhEEPt6x9FgaVvAbi8uyoPPJoN",
  "key36": "3qeRWXpasHiHriLzYodvfckaWNQnAhZ8CeWcHWbfxhmGnoWWLP8KAkrpgxfSpVL4UzrBNGvowDLAaCqSbULR5P5t",
  "key37": "2CesXRfDHKnZwDks2z5Bsmyu4RrDsp4y7g83PyTKyG1dJAgrYLrVFgAUQ4TTC1sr6hHrUrRtMZxXh9QbTksskfzd",
  "key38": "5HF9XW7ipENwyyCT4zYaLLAD53Jw9LfmgNeyiAPRWnh61SYgT7jHkqpzRtiYvNobVps7dBoXebxqt8ZtvBMVDNER",
  "key39": "2KRDSrAccv2NAJpoEdx4e4Ho2B8A3BSWonispx6hM2JiHSf1c44X8FbpuLXBrvnCYsBjWugKGsWWYHXQUGFaq3Lr",
  "key40": "5QiuwUCPnnwfSyQrKfk7gJP9ZJh1z5ufR7NTdtECm1kF4ssfHb2CiAVyGkrTJjoBffnWUNKuKKDdGPyG927BX7gz",
  "key41": "oh4bu4CSa2kmcgoKTdmSy4dNA4y1jpMUo4iUdUzrh9tSXUXW8SUt8eX2CeK7onXpjCb3BeXwB5NM1usr1qDWRt7",
  "key42": "fvR3gUBzFMC9VVUBbKbtieL5WJa2Fb6g6LSZThixPWJLABqoD7C9RJ4S94xbdihFY34Wg3Z57rPE4S38hSAJNqi",
  "key43": "56skDCZbyWTdmPrjNVDWp7UmCng2RFTbudg8qDKbkFa91YY7XEJutJULAZbWgn1SVox9FnN55W78tt1D74842LBn",
  "key44": "2WcwLUT2kGZQm5umjc3bN7z6cimM11cPG9AsmAxYeoQ5c2VUi4sy3SwoKeDo9QUTJ6u6EotbDccxgrP9CHBDxUhW",
  "key45": "5d64DuuVDnjM43yUWFsvjFWESeXS61J7xbdFMPPfutLMx6etbVUpqDPJ9WY3rv3Jpqut1CmmnHstPKCzagcyRWWa",
  "key46": "2h7dVVTBwi3aq7aa2h6yf7XrpJa23NrhzXXHG12RSemWfWurc2gNfjnQehgWdcXQV512Es1grHTtCQCMmncD2Rtv",
  "key47": "2KpuwE8PaXE8NrjKuWNSoDKtJPWJpKBbTDqj8V4ooeLA6AbBSXW8QXqw7EY9BFfZRCJP1q3fJV36owJZToTuY84A"
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
