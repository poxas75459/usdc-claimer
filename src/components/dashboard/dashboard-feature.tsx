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
    "XLgHjwjR2aJ2is9Uam1jCJPyK5fRvjNnufPa4R44wXJ3L6Siu7ddMTiTZVT1zFinpAUy9cM96jUrQupN83KnVDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evGAeHDRnaT8hzGjLgUrGUvnwH9H7seHmrRAjvaeBBZsr3TYrUtPW6CGLQsn9retomMhcc7AFLc3fGmD3md4MLS",
  "key1": "3P2Cprx11MG5SueSCxejoNczzV5AyS8GeugQ7ix9Jpyt7TNGMyfn1Nvk9vt6kHksQcHeybcDQaQ1Rx1VTqu68We1",
  "key2": "Uj3bejuwpLoTeKzdCvXMFQWyd3LAyZRaVmGxukfNY88MvPqG3KfGTYK2m4oqpMsWxShjdCtrzyqqWTnmM23sXSf",
  "key3": "4ZR9zyZNUrH4qYvRWuqSEbcHK3yZCE4ALV6DPuQCnTii5nKnfMckiP3Y9y7wfhBNAhCtvqVLg2LbF3Yp1HHaAoWi",
  "key4": "2Xfh3ns8cyQtCPfNjitwTSuZiEDoRRmqedBPmXdnDVUNJYHAkwUSQ6TuWnxg8vRF6RJCXYLJgLFNmQwEejJFdFcy",
  "key5": "3s77MTzUbs93nrCsaEUHQdT4fiKrDFzquCDCFNuA54uCXrjcbnS6vsDoZYnqiHqEN8tYmNHXGTRHJWzTgVMQymwQ",
  "key6": "3KhEKovQwc1Z3pREDCJsgxKPGaGvPR3DVMnUvpqW2NxNGDLYwZ4FqEBWbAv7Vmr7zSk9cXdaD1pyZZtBXZjSm9Sc",
  "key7": "KzThrZPFSitiUDudfDBUnQfwYZ1SyVrQXYKQKcTgK9mJeZsLSrByxe5uTpRPATW37YphRd2howRGgqYUTqCD2yt",
  "key8": "2AKUeAqajzA3DphiN3rn3AEKrqoUC5optoJxAfRn2wfE9GrSictxFRia8eXedS3tuDdn9FzXsc6UpJWB6oWa4K4v",
  "key9": "5eBRSamB5Kg5cD46eNE2mXgXeBHYnmBeYKf4Qdcqs58hWKUz7Lr9VMtvW3JSF6AYbrSfryyo4iJzZshHYkxzF69A",
  "key10": "4vCUqYMEhM4xHKFVWWnzvSgimw4GqUgs53NT1AFVJGrKLMJiWdSvKmKiNFNVB6fyB8MnS38EKqL6ECPMdXTVFub8",
  "key11": "5LHDXKzvyR6fPVGAn9Yx1NrZSCffo2qJDvdgAqotyApowviMatvSwn9Lpt1pTAkRs4vL5qqdcq2d9cKbWESh94e1",
  "key12": "34cFgxX6WnnHTxLpmeWBy1ZrR7hctqwq2gdR3SiVNgP6QspWqPhsPqkeEXFWTFGaydFuGxvrvZj8padjEUfWYaqe",
  "key13": "R6Re7sLEudq1ZpoeVH1rgnuZkJxsttPC6stE8i9bbKSXBKD6YCx5H3pJtnE6cvwMMANyg5pVj7rcYyT9RgWV6Nw",
  "key14": "2hxPsyzBmuexbGQnBwjmhTWbbz1C5Q9Qtf56BQWncykWznwwRp5xSj5YNifov6yq5AV6PZVN9knsrM9KMss9LqRt",
  "key15": "aWuiXa2bvSGvXFysZh5oGbJ68Bs7WHYuUCwhWHVzZBgh87DK8pDuBLi6PkopRBsRFumaAy4s4wTjpGZut7Mofin",
  "key16": "4D8prw7GmGESzkkUuhHqTWTyJnoJsmkJ467QSeocPCQpTEXsQLr2sRaC4JY5nygTD6JkNx91Yaawj7j3EHky2gNL",
  "key17": "41shBAf2qP211m3theMZUL8qVs2a3nk7ZkHVzLXG3z7sqF5xeWbzvioEoAMNxE1XngZFN7Kr86rmGTSvHbn8fAfF",
  "key18": "5p9SgcPNxJwd57F47XYdqQLsjnD3aVDrMzDBBWHrgScwEp2grgeWWeAQpt3a38xBinkNXnoZN6uvb2x4Lg3XU9cE",
  "key19": "3Dtb3E8ZP2GUQmWfRKhTbjj8bWCWzv4kgQTF1sL3bdcw3AUVh6a7L8zDLXetnBg74AmfYnjPfyoG4g5zZauqy6iT",
  "key20": "3jf8NYW4bQDVxXko4d9EjMrNEHLZ57bWQyEe9un1wYx65MSmwFsQrSfor1dsXS9puSq2mkcJ7eQAJ9X1yVsi2Atg",
  "key21": "2jV1QwHSANcE3CofJkN3Em2iVMVkyzp8cv3Dyr8AkYGRE2PDihgKQ1pbVsQy6ALVkUW5LKtZb1JEKwSCbdn6eE5r",
  "key22": "5WfaTFMzhVuwVBWrZLoiYpXHVJyicDGRM6ZnHtRg4HZEp2urcmgJK1RcWpobrycWaVjUyHgZC8E5ALMfAmPmCvdj",
  "key23": "eGUjVFksC8DJMc7q8CrxKs5Vdn3VhF34gSboTEG8gbqwnxurWEXZNYWX2KaioEzW8jwo72nfAhMEjmFt5UhgdaV",
  "key24": "46TQZDhNuJHmiCFswppdNkZHDLHzXXoTtDBkL33wVzdefWw4rKGpEMpUDiJiZw3bpame5vDmeZn4zVREpWRh8DoC",
  "key25": "5QTR5arGzu67w49oxc8c46Y4y2NiGrPjdi6Uy9TEoi5WwV3BGDyddLFoHtvN5Y5T4N2XQ9tEQ4X52QB7CMtWbGnV",
  "key26": "2NMufBRZAwH3zRcMpB8xiSJChzwxFr4znBBUcWb1apEDKPrjL5EMgfwsKPW5Jy5nwtbc3dSSUnFx4cVQP27xGZj5",
  "key27": "2LpuE2JzxuFL3ErnW4z4g3xuay5aUmwy7t7hLhUyHkzd528CBv2ZSgd5dEGcywK56FsKskepkXr34rEYgkYobFxY",
  "key28": "4bBagaxz4u8ND3N13qrB5Lv5fcKD73TydALd9421PQgiX1dbUHgfEN6YFbawiLV1xcfu2H4Dy8hJRoGvyYLGZKE6",
  "key29": "5WKyrccRZ1FZw7DP6QSrmweomL48QTdu5zddSLKFzLa3i3WBoAsBoz5xMw1DBj5ChyLjLaD9YVxUjz9My5ACAD7r",
  "key30": "DG7DEXbBSzepddSENbs99SjF6WgoF1BVZcHKn8gs4sYKJyejDjcYaZzLvZi3i4zGh5mQGogvFNTpXJMRX31BFi6",
  "key31": "yAaehA1DZ5ZQfxbmwoxL2baAGzW6vSrgLbtdrcydmREh4VKtob5TMmLs1DYeCTvD1YzW7X9qTAFbvkRSYNxsKK1",
  "key32": "3SqtbsGo3gcQt8qSkUX6j3sZ9L6dDKijRrX7GSSJttkaDoja9GqkdcsNfpuRHkyP1LKv5SpbCimSWhJbV4a5boQP",
  "key33": "sfahJsxFWxwtAgRGVppbuy7Dkk5CkpRwFqy96H1ByhC53BVeNRoqKC2tCs9JRpGES4HhjqHKNTSA6kihTD6urLW",
  "key34": "2Yccr7L8xmukRv1BhDrifjut42UYwsgr3Z7knZ7kGAUcLrLPYGdyVSZQgUScxKrJnwGrnRSHExytHBdWdUwoJ9nL",
  "key35": "4mUNnKGCVKGvjFgKRe85eHWTqXa9vBSTiCsDxiN1UTMfxZjQMbYCeiBvmEkGeSYzaBbD9J8nXYzZxFxGNNdpZ2fm",
  "key36": "5yACdjnbHLxR2Mgw5KYKuB8oJw6neFNQ96mbt2F4JJ8XJLsvpxoy5DHp734pX7Wy5y1ezmkjByZanvhmiSBRapAx",
  "key37": "SKWKYfsURsXUkz85LAseDUbuB48pe5u8dSSctLuqCkAtsCGocivrnvL6wBE3VfJTGFSfh2B8C5SZ7dY4ACd21iF",
  "key38": "5eRiSZ2saA6hidTbBJYCKrBqWaz2MtguDr81CZYTS9KzuNaWUFYBGLK6nqBrL6pCG1V8hoRiXxYcUoE4Bp95EVW",
  "key39": "tA3suNhtqq2FGvitbAiqws3R2EY5LrTXeQ2cQ1a3CuHptyjiZPw4QKZZkhwXXEYKZkjB4Syd3fjsvS1P31x9isx",
  "key40": "GYfye1UGnwgQgMHm2k9Cky6uwoERkjaC3LE39wLucVDX65VJCuPrDa1s7xejKvgFebYUK18MRALPo2jGV2wxdvq",
  "key41": "2RMvCgLg28cBsRENxoQ4BkVahHpBTEnwkaFzo1T9wfjzA4k3tmj49Vcd2jPrqvV4aaVKXnHqSxAquQhVwUozivyQ",
  "key42": "5MTRzgzsZyrZbHM3g5u8GUQfPWwVzJomnGPvZf3QZEUDuoyBPp1Ny12En2ir9Z7AwgwLj1ynXh4rrYkLQSWQL6p8",
  "key43": "ceogSGa8TdhAhrfgPGA9xs7Kb7MZCBHkWR2UqCeKkwxbsnZdRKQRsaTeexRKonjFUXUEWrvuPPMv7rnAvUohpUJ"
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
