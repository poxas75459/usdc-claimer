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
    "66Fo9NZ5aDrveYzEwMgcyUWQaVxcQVxovqunhchyEeyWRmqkTGaSBLmSNeRvTx1L1voQt6d3EcPDqYJv9za3WAkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BswfbP4d4xj1xTH6iXBf2sMwWdtmyBGbmDSZSH6Zq8jAXZKqU8eLjdSFPthbMi5Yb9EjUsoUkqhSigVyEkme4PR",
  "key1": "3R5adQsTxGDg5FSygGhXnCgiV9fo9UZUvh5MXZasDPfynKN3GMtXJSyyP6u1HsFdd7nCvwMUYUuk7An7ffYZoexV",
  "key2": "2rxSjaECcv422XgHWq68MMV96xc9LFMDLZZ5eYY31hJp1gvPkHebqz1QYDMDawxFBv9vHaft3UUNFBHPEfAJYi3C",
  "key3": "yy34HCRepojSUoDFMuhkVuqJNLfk2CvQiMHnAhqpmvBA1E6pdC8FbLbwnhKSX9U5d2S3wXpVGNAVqNHzBRezDkJ",
  "key4": "2P7funvK8VvQLFfWaSmhv235bnc2AQqfK37Awa3nvK2XaPLxcPAihZQKT1cnv6QesBL2vrCGjSUJmmRtAVCMTcsM",
  "key5": "873B4GC4NjMQMBrev6m2SwLbVntWb7bBwepmd5ajwqpDDk6pFrqT9bjdk5dSECVntstRo85MBqwJaghWxNYPsL5",
  "key6": "2PPTxos9Ae5ggyxVNz7R7awWtu1hyqbH941DKbayJ3ETqWisW9XTSSD2NdFMwctbUp3DTkrxBg9KWmWc4EP42HaM",
  "key7": "4Vx7pZQsUypS6Z94LrEJmQuPRRTsDf1qzQqS8gU7K1beMoPzRhicZM4Mof6ZmDdn8gH8Pw2KPtU6u5AyG9PN9kXA",
  "key8": "sA8UoqW7U3S2W1gtu6dvmN1h5MVbT68bWWFLa1hpKd6BS3hgGeEGCcNHLGdHxCuCFs2aRhcyePeC4xyfRJk4CdN",
  "key9": "4C9hzmUQbzsTPKrivpEwNGdJxwZEqwUEmHjhPgoiV6dC5oFRnopc4RuMq9f5m2f6eWvMUYGnTDZ45GkYTvqXbYjX",
  "key10": "2eCdEUPMihq1UuJ5X2MbGY68r8S8dZ8x26Uign1z2RnghgY4giweSKihMev56meyFrNPqUgxsQLqt7hGq2MsEq4m",
  "key11": "9TxVNVUeT8bgvjTArAUX6mE7jaSizAkPXPerjx155ti4cB4xZWfcJjKiVaWxqLsoZd3rtXVAfCxJB6MazCu4Ac3",
  "key12": "4co5CSKCiht3AQYQnJviaeHFhPgKWUYpBGpwv6HUt8syqjP8hTTfCdi48ERzeENf3TwrBK4V5cd2idDTgYLAHQCD",
  "key13": "4P2zbrorTW3kgzhgeDPCxFaadcr7tN6dUKtHnazoJis2ZbqpvEQ1n4krPuTCj2WSUGMWX5RW9y1TkbP3ZYsnEBHk",
  "key14": "59fEfjbR953r2iW5CfrwwQmKMJTW25qgwyML7FEVkkBdTia3RzYrSKTUyzRWXQD5f1FX8n21Hir2khJNF2T37bnY",
  "key15": "5EwkhB2DYXgo4fKeZnhYFG9vBfR6qUf7bxmaVktobbxZxeuCqAHP6BrVRFtAqbFUN3QgwVEHcRsEE1aTJxjcEe2n",
  "key16": "49P6M3dKqKzMpjB3JRtJzTJ4viVezgxxEp1hhxJq6Pm8k12JNYtu5HEaUeP8tdDrFTL3d8WW72pacQozviebHMtf",
  "key17": "3AELuBznFWYHeLsa9nZE2VQ6yaSvYF2fSoqpK9pjwTQZSEDAsJfhiud4pVJiRchTCekhGAW7NrMgi66Zoi5daJEc",
  "key18": "3wkwhCqJtj1nniJQ9DEb3Z1VHJ6hpsHXjYZFBFUomqvW2VxoMnrZ3SqRwLaFdCZC91YmDe9wf2xkNzQtwh78hJCY",
  "key19": "5p6WwQVfSu7rJvKQMvFMqUhSnGwDeCRfjFp4YogyGtBwwtRk6VyRYJ5D3TrA1xq5Z1t4PwwZAzeUR5eS8Ur7C2Qa",
  "key20": "4AYx2bWFMgAda2cduzv1ippSLdp5yuiCnFEcnWNHuEqE8RtjEhVqL43U4pQwUEFQAqbGyGhYFRufPtVFmWkLi55E",
  "key21": "45Fjzqh5jwBJQ22y7qUy1H1kdGJTEUK12AHcKUdzrSVmTFZ4dkEzXAKDgdJCStpssnXRhqJ7wsDQr5586F8GDrrr",
  "key22": "2sDHgnNDEhXmhYX15LDQCxBnzBSe1umQGimTjF5Nx857xu6n327TeEUhRzgtAePzE1EkZA7kDdwQVpRZ1ALAkJdP",
  "key23": "3E3nMpqqu8YeHaGkU94b5ZbwGRJmpWgFcCTSKMrBv3iTfGQwRB1BHQjtyZNwe8jctQ84nt8gNFq4jfBK3dj19za6",
  "key24": "5ukQFn58EQ2GacrjAyaJWxFKV4eXZhH1ZKcqEx96JKZTeJ93NVU6135rA5FsvZv8xrZwJ5VkVmnnkyUPK8XeBUAr",
  "key25": "4w7vg3mBh1P2nRNmHvEtTwg2C3htAWHqQLkPDb3iJqay3bTAQGgwHZ3r9sB3tHUjJAYtDBu6XoshGvcSnvp88avD",
  "key26": "4FfkYLznw9yEwfFU8odRiQ6bi5wuR8NduX85eD4wdwFuJPWJrJUa8WpYSUVBi8JhwXYwAkVVDaj8uLRkKnwHDyFj",
  "key27": "dfkUfsTpHyru9UPeDMzCaAovNo3xfVGQ7RCLUU7aDX562piput1eCf1i6VSS8qpp6CixsUggxsRGc8s687HpViZ",
  "key28": "4r238Eht1LW2fcrKujzgouzW4nBerAcZXrJcGsYWQ1iZ6MLEYUFwLLC6rRwvreti4KR9M2nU5Jz7dZved2eF6zYg",
  "key29": "52BXAUK25qLn1SQJ9cDb3W2q46EJfpR41NzGu6BsoQdwBFwGSheSQXe8LEcVfKKDfpr4YhqFX9FH5aZ4k6zTttMv",
  "key30": "5Mse2VDSCT6X8ooD4pAS4X2hMgRbQmFjmXqe8MkH9JbnTBq41WzdTEkVb9vnJo1CJe4tJveftJb6qFYN3cy5qApj",
  "key31": "bC4fABKKpR4Sw3iJp8U4CAFQWC87cNJzgHX1k4NcajAAB55hEZTkv3N4uaxro4wf6qvvsZfe6dJ15u963yaXbFQ",
  "key32": "2371ZuFAakjjAjjkKusozz4wctCCCpNBL9fDmnubcmcTPHNeeFEW9DWRQKagLUSwb4SxQjZRGUX7HVAZdgG3TxjD",
  "key33": "F8gmiMzkV45Jms8HTgo6AyRL4WcYuEL4uwgWxJXaTJe9YJA2i7WHMW6FUVVCJkbKjgQnbwZoRRmGUpzYdwHkGqc",
  "key34": "4oGrhoaQk1YgPTVCzUwKiztH2m1jK8q8EQA89VxpwDXSLyfnvq9KHKx7uK7Akm784GVGnWTAXK3THANDJMThiq7F",
  "key35": "5CrQnhtZCn7qBUFMtv5z4SSDHj8aqFTDxphPdHHzP9ogafmNZAnfo1uETPb4v2KHRsRGc7QrQ6uexo8jo8ygZFFJ",
  "key36": "1DNda65A1RdMHN1m6TJMsYLSe55c5pg3aMSHUER8ZPQdFP1yBp8n8CVzSoV1ScQ2kcwZJ7SGAgQdDBNYmCXp77t",
  "key37": "MJxTVCX5BxnUNtLqGhxgGJ3XtYnbS62YcmH8VPMVAASs3HQcanLwhekwBBXmYMJ9JWpmsABHwSea72t3W67GwQt",
  "key38": "4obeBhmK59Ko1VJQJE2gamvYgwWvpfwskkfgCt6PAAzFrmxLvKCYSZcmV1XgveWkjGuw7MxR2RTKNoJKtkL4pYxN",
  "key39": "27Td2ikUH3oL5BpaqbPinCkmbDV4CBZbSHCsviQxJXi7opQzxqMZoLHCuuR6EMG64V9rNUJGvUPTLr67XeQx6qJB",
  "key40": "4mQWY5gRy1exdrXnM4rd7ZV9gqsw98iK6iELYf4TuonY8iUREUkzdeX1kvYuJK4nzcUtNwEWbC5vbBHJpGfTLr7a",
  "key41": "46xkMZSoh1tWPatLHVYxusJGerNUutNXbd2eMqEZFauABpPiVrRVPPwtEzRYyzEagZvW7x1gJP6CBioGU1Een6qd",
  "key42": "TnVn925W78MzjdidD6vD1JahXq74wnZsLUq18QkhiDyc4ZtvtNivdzQbMoQWQ2GjKniCHpZhCNdWZjmGDvTDbuw",
  "key43": "5DwMvvhGnvEGGB2pQW5p4H3P3mxfRXzYcYigmuhZgxeSgBq36YcR44AymDpXnmQmcJSic64dVmtoamKs7N6KQo5n",
  "key44": "4aZjmDHCTAzs2Th72wcg2yPGVbym7HNx7e1wyjkEFnzCgbGB1LXTiBxrJoYce4gnmKKfadyJbEqEWwKLf1XRpR19",
  "key45": "oNADdGxoGyMhGzyXeBGBySPeHYo5VBcrrggVq57BCbuoTYqbXeT1DnVfkzg47HtJZj1kxnDgdjKcMUdcyzkjLRZ",
  "key46": "eGJmWU3BE22cGdgH2Aav9t85EioPoASBWP8EDdUNNXw4G1nvb8qLWH5FjGzvBywNXHwto2meNFweXReeAcGV11i"
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
