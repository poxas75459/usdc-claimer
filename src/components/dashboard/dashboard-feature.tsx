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
    "5c61jJjuCDQzkFVYxSQ2mF31Z2FoNeGMEHEpj2i2vTX1M21VUiRURvqVfpN2SCMjb7p9YQQqHU7RtnCpwFhoGKoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMX5C1BF4fxgLakVjbr3bERvSrEC3kzhKoiJGGNBKC4C1hV53qfgJFw2H5ndxqLi3yPHomKcTy7RVS1882SHDd9",
  "key1": "FvURmaRhF98bxZwzggqKK4ZQQ4r34w9kxXCzTC8FsLFmWtj11ftHHryJGQZspA4jAygHSSUGVyWZRpCT81bZQcY",
  "key2": "2antRE2PuUddNQ4d2aEsdeHcuBbm2NbbSgbnvtpLHwNJwnHFRNcgFYSHhZ7yABbSAUgaLhwM91LdRGVg93EZji9B",
  "key3": "teu1zS7xhnoKnEMwkPpiKKo5T7Vtkh3uxt2TCCkaUHsrBsfevtAcLST7h4wfaMNsbRrHHK1GxBorGMZpjco564o",
  "key4": "2m5Uzn6J8cHAtv2G2cQjHTNJGQyxFQ3WRpqsW3KRg8JtVHGr3Z5MT52ck9umNiXpdqoYZUKuXNUpHW9fBsocUibN",
  "key5": "5MCQLpL3dDwYKfdbjVQm6Wkasod5Xnk8xCiFaEjD1wHJuRD8aUL5D2ziMB5waXcpZfz1XLbnmyX2p1m91ptAQgyU",
  "key6": "3jwJACRLxt4GGQaEkbzcNE9k6GRVp821nBz9SL2xn8PiyU6yPDvMSYN5fQ39UbZAtjac6sAfuVAvHNSepzq9KzZN",
  "key7": "AFWdVw5ESiq1f3kh4dcBLLWbo1NHwMw8213oT34pD5DFAzmXVaz6bqSUz24w6etMzRgHqF5jo1z1LuEvcnCDDX3",
  "key8": "42yiLxhnUuMPiMUCgDkycLWAXPS6yhoftWSAjKrzfKAFes7bDn6jr58hZfprSorUE67EA2LBfzRwSBcmqQFfs9GP",
  "key9": "2DXrVb9D7C43xyw7zMQGhBmUNvgWAWWKRQ8aKSWR2qxqy58Aq1SZX18Xn6GEYtRJgm9yJSknnsft4g8CmPuJgHfS",
  "key10": "4qwkZhEFuHPYp2tcEdShttaZxB1aw1y95Szf3RvVLqhiEhC4PQw1PZsHYR2PFD4oisg7Np1FS2pKz5snRefhyExY",
  "key11": "5w4vE7zCMvYpseVnk5pbWwibazDyG4XVsmWo377yMiHB1gAHqHE5XCtqZs7eyNDyjb5ag6mvycK8i3WSzueJnt7P",
  "key12": "3GELVtfiZW88NZasJmicLzAvMrWDc2Jy75a3LvGKyGogUrDdsYjr8pC8UW577prTKghftgoBfXnoRTFWwMna4uec",
  "key13": "3uACqnJskBbx9dLD1K9DTVTTkTc7fNrNNqxLcVKcev2bnowJWmMs63uybKRzwZwLB2D5dwisq3o2SRhfhqaGsy7Z",
  "key14": "4yTLfxww6TpipESFBUUr3Xk73jTqLJ7HVKw5d6S3bWx59dNByXomr7iLeWuGBFX4kVpaBVvvHz33G8Lv2FRpYN1y",
  "key15": "4DsVjySBLfupwZkisusUi5a7bA8f78ztD25EE9eugjF2QD5TrJhrGHNQCYuwVjzqqSq7kdd2PQZpLdTGRdNqyaJp",
  "key16": "2GXXFzahFA8phAP7NW5y9S5Mrrauvus83GUiqNMcHMcWp5FuZ392BgdTtyyv2i9GU27BiuAUUk86EVwpFeehGMMJ",
  "key17": "38sPHH3sBvVbdjWqddCCEGeRR8gxWxzcb1qpyhGnXBfXkYQ68p6vJN5Tx1pREB4TB34MCvtw8kVdva4HErUBepoX",
  "key18": "5R3AdFERwSLjUWuMg52w4gJUZWHRFLrmRFPePE8uychUQd5dH9FpBykXF5uAojVXAnPpW8ZTDWrb2CD9Rd6FQiCU",
  "key19": "2P5oqH8gcEfP1uSpfxRmT1ZFP6AdXyAs3TRTQXgCwMCs1Bf1tZLgSmFmWZXvZvBBDpmDGpZpWzEutieghF93go54",
  "key20": "2V9aA2vjE6yyyTLBvMs77Mvb1JvpotxEibv7MBE4u3oXepRAvB63MMzL4StUc2ZWHPGpWjViejXoRrD1JiZUj94u",
  "key21": "4FyjRxRFcgs1Y6h1eNjgfL5pxBZTH4iwKh5v3f2BmUm933hm4GV54j2PgU3LUEXZrygByXrc3xNpKBXvM5sbKq73",
  "key22": "4wEJ6TNja42SxJMrCinnnxMQWfiopaGMrhg9e1Ly6TJsUr716FJuQ2ZxYAFnqkmvUsANwZm3FndQ4Tx1ECvoaJoF",
  "key23": "66EGaQxdRMshCbdEMTco4YVcKEboDeS1MqdqTL84LVHrvH1XribmA67PCouygmqWaWrWjS7zqUAMt3sigKbg3d92",
  "key24": "21N9ztp65hw86y6Xz5uryopMD8No7A6hG8iCiVGdTYSnLAsejab6haC97A5ErAN1NmE7kLzb21jqcLWrZiEvxsuc",
  "key25": "2RJNiEBrmtbNWw8HsjMz3z39NW1xrVkCPbGGygTKAcMj3jzL1TnU8caSpyBdgYmtemC6JPU1bAE2bBDHprWSEo3s",
  "key26": "p15HtdLu9keNTJMiAKEcnGyaPDpcJkm2tAinBcDMafWC9EYP2HHYqbXf1TdTLg611kFmpxYbXpoEBKT3L4kvA5r",
  "key27": "3DEMNg6be1hN3xXcCchevY6DRpjPR1CdJvUjboomRyo5suVFotjEeSYHySZtpQbmuLZjBeDHYiRcdPcsnVd8B886",
  "key28": "2rU1kLU5DDjddxPGvUwftd7dnK2g3kKN5QbBYBrnohSmFDUyPAH1PSnz7eNHgxyGP7xmtQi9YSUe1sShqGLpB28s",
  "key29": "5CkgS4CS7QJDne3J4PdSXLwiQJ7gcovoSKJK22sJ7uqzF7dmmiC9LNUyG9Ms5ZKadmGisX3hbyZVBsyfo14CR1Qp",
  "key30": "5jsW64E9TS3s6ShzMZNupj1FzTXA8HkXFK6m1Hef1YMBmWEmRv1YK6kJnPBEtGuVykRhTTLKmLMGh7QW7wVa3S5p",
  "key31": "3tLPJbwqDNPmEuQ4pNExyeMjSXTBAZ9dEZYB77G3ufvsSHP9bBqy64UtPj4bFGfdLhGHy6Ep5YLJg5vFVXwRSp2Q",
  "key32": "2WnoU8TyrBjE7HT5Da5bU5tEggNCZAVv2hQpepT3p4zmQRxqubNtsGrC1L2vMn6kbEuUqYNFbMwBzrmvydmf7SuB",
  "key33": "GVq2MGLjSXwS4L8yoiZK8sSDXg38rHbWYzYwtGYaNZpak7rekFmxNZSHCUrBXF74TfFpXFNHAKPJJhESeQHFCwJ",
  "key34": "3iko5eJnLkVSWkgQCDKR8BRSpgPVEkCnqo5onB3JtUu2KctRT1arT8T6ip78jdQGSXnWzt7VW9CRBfj7EaaGrfEh",
  "key35": "24eVLoTtBBrGqHvuKbGgekmExRsknVvUKCGexZRZLqqMC2U1mRuChjGhAxSmo9r8EUDdLAoy7Ym5cVSFjntDccp2"
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
