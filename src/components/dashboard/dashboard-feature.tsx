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
    "TxDDcC6CXX7FNTt57UJCSZs28kh4wBFEDqa7XdZERTj37atBR9gmhfSBBJd3HWK5JPeuerrtSekG9TNTbzhJqB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dDZBUuAcZGMQ2i1DgZMhHc3orYV1gdXGKwajd28VhV5RDsXzW5F4PhC43DGGG9qdBX4W9FNiKUAQPjKwqgVG2UQ",
  "key1": "4xRMgsFNGMyzhdQjJ8FYBr5ijfGeGVnwW8kXezqkcFfQgJXR6wPkXMCHRJzkXucMRFXBAGusAtpCaQxshYGTqU1J",
  "key2": "3x1CVWGqQRo9X33FxpEwJZ4hNdtLG54tDcku8yhy9DKxYCvboDJvXq3VqSNa44SXntSbmbvuMbTNCKYKcXHwZruQ",
  "key3": "3rsjuXCSzDKN1BGSmiWJ8APRCrDxR95buvEofr1fgUdkN1ErHto3icWSsVw6rD7ee42PtfJRHAUwmfUDeauioRqU",
  "key4": "4eJpEWv31HcBfz7Zfug2J7k28ozejdxGCHGgsG8UDhk7JdKCWtcxdMJZ4Kqwrew7JY4YmgbBSWw9rNc7AhwCW9WS",
  "key5": "3dJ4CJx3AwKkDk1ziajoCUR73NquvxVMFErLdoUTYo1ajQjouqfmDo7TXfbgKJpCbgwCCLbRC4d7H2V22N2p9c8u",
  "key6": "UqBHpd2DaBUk55kh5KGAiu23FQtRbcGmUuf2vktWhKd3Qx2QcHehsYn7QKStb1efgMZNojP6CGLwEB54X8Aj8g1",
  "key7": "jusqybz62gTe86BNXbNUavrogfyqvkGSwMrK7HcXb86bnrCwwdqSzqRnrV9weumrcmCEoJaSgbVT8efeLPhjFbp",
  "key8": "3Evqor6H48g64FFTvzyPNPjm9KSGErAngLSrQ84BzwCPGGNKgPrQZCWZpvNQDD4wcJjRALMujjWZGKFun3TQ7Tak",
  "key9": "5sJYtMkCMv9CXRR6s5DN9PugzW3WAaN97vSTCrfNqRVHPyWeGQBBChMCFNGRdBRNuPEWkiZknc77TCeU7M47UoVY",
  "key10": "oaeQEzR7jLNBPQXdCKfKyGjiEcQJJGdrGqpXa4Rh9joyRwM5mZ7SZy3ZmzwHFncc9QXTRcZAYbV7rPCCAypSczX",
  "key11": "3xDtgxgG9wTkyCwYdPyjLkApxxHbf8heoeE6jkkQQ9U3R93VdjXC3tzHCp4fWr63UFno92AB6MFztQNaQW5gz9uq",
  "key12": "5fXFW2TcQBaHu8U7pUTEzhcz1DZk9BsreSuLeJAcA3dmgsrsVFZbYGEgCDALHtTkN4pVdh3v2KJvancSiJFmeyFP",
  "key13": "4DzbhoMrmkiYydyx3JLjMSRyse3CXgPvT7HhbiDML5BmT9EiJ3d4nE244uP7EtB7VvJUCEDQpcajNjFXwF4gxBdC",
  "key14": "4co5EZ58TCcqqSdtqkUUq76vUK4TApDY7ESv6zT7qmfYRzU7jW8B4wQRRhjFTdMCRyuFD9GJdQX3EDdKTaFcrLv8",
  "key15": "4y9TnEKgDpXyRPS4anayN5ptNRksPLVqc3koexetiNA6xEaPRNSDSpVMswsqt6VcGj6z9n6N3SP9yZx4Q7C8KFgB",
  "key16": "3q323KHLi1Ct1sjzmC5sYafbD13N1SXxLzuUos1h5mZpReQSQKHLPTKN2hefiJgitzDVRmKVQ2Zh7a2VBqtX33oF",
  "key17": "5uXZ69kk9K4GXpyy9yC84eizc5wNkdXLuQ35d2pYoUE18ez4v2GTFKSSr8yu3kiw9svtKHnzMVN4frZoMzcLULCo",
  "key18": "9TeaiRJYVhiCV6Kvd3UzmS1GaaNmcVHw3XBeRPvLiNxrPcAMqUyyrkfqRBK4bqpAHf3VanusSTbB6LhTWQoUCv9",
  "key19": "23fuYZ2bdGqcaZcAHgUB8rtfWfAfrdpt1wCwpd1YWChwiggfQA2H8PGvhPyDfZJK8jEoe2BJbkvt5E5AWQoqdiNB",
  "key20": "5adhC1i1UYgAsA6r7J9Ym1BqUL9jbZuCUbi6RkSYGgBZZ6QmGJbZ7iWk6ei5kza3kZXCmJV5zaupUN7pgMb3Vz5n",
  "key21": "27kN6hyvEpLJ1sLT8acDKbzz8uVMovbDYgMBDq4fgic1ZNtdhZFRWY8opvbgnvV2bbkMe13kRi5rwUsr6Prbfzsi",
  "key22": "2HGn2aejpACi4EoMJWg2EteMuU6SBfkMCiMf2oQCmcAJme5fgFwrzGXZ8PMShen2CuXieFhXo2fmBvmkZviFQZ7T",
  "key23": "5eDa41ayP3MQaoxXJMf4KbE9XcWPB3kq2MiNWjStjUxBqA2d1Za4uEAoiQFv8x1vi2m5nnRGUTgwPS29JwmApjq2",
  "key24": "5DeRLoGRRHe3Rixbc8h76whyEBp4wf5sukxyzx83s5ojV9ZLLLYvaQAVPT6E2ENs6XCnZFtfsQ9h7F7HhaMZQtFP",
  "key25": "5STH4VBBejwbfEFHnTRmhdeN1T4J1iMLvn9Y9UqHGU58BHtP9poBbs9qKZmQgKf7FQhfqAd9ApUHqCwm9FqPok8C",
  "key26": "4JZBJw9Q82kVkpJMua6Jdo6ds7BHVe8Fff84ixXYU26B43ZjwwLzeWQ27QkPcGoUT6e2m61WmhaT7F8AFaTZ8yea",
  "key27": "5UGPTN8uW1cY7JmFY4xy1yb5UftPPH4gxQdV82AWVzYD8jj9WyMrDrenpmqmKLxWWYnkBVmn4f5nSRadB8quvpGE",
  "key28": "5c6g2cWuRXNAcwxga8xdSnBjnxrNKQ5CZVxNSJpUjBgkta1kmX2jzfyBj54yAvhbwVKWPM7VF1HX1BT3nxAGyx9z",
  "key29": "mZJoKfne2r9qMj8WUuGaqi2hVAw7vKzTn7H4dLYDNmtvSJ3pWZX6y3X97XWGNN97RpnYQsjQwBGx671RkqRmFQb",
  "key30": "Jhozm1qyoVPyi7a6PuqXwc4BdAjTsmB1NAt1uKs2Xov3qvGtQb367P6AReymT8JoWVmfVanxJ3SVoKwt653k7xj",
  "key31": "MRT1aqFipSTQLZHwz3uCe84WkcwGoUjtHJXLzDRh2U9qJbBSa9qA4CPSEYZRrKvDMPYFEjWZuiVuANAk5zdZ3LP",
  "key32": "2g4hfN4vKGE4hR6HY9kWq7CnkpdqG6Y3QzL19MLKhGiLT3HrmAHifPdXTfkd4AmuCKaQf36P6Dkytz2xGdMgRmBv",
  "key33": "fQgaURp33NDFaK17fxVqn9kDh32KXZJuLJ3VGL2apWT18uEe2S6HptuJxWDgASWAHkNrrctquptE8diy1EeJeVX",
  "key34": "4AeWKEFRMcDuegU5YmWMP4MYHM62mVfuLkyw52fWdbxn3uNBBG4GHdi8S1xrbfuWPMnSnS7kJoeHZxR5Gd4j9ymv",
  "key35": "2eALoFuWeoyyzjYcU9AKdiciEHN15ajHUZ4J7Sb3hyijoq2QWSmbaW1a4sDwcXnsSu3aZtLdYRi3F8MA7PSwjFTb",
  "key36": "57Usicwj8b8Xha5oG5N5PPwmVsEPvpThzjom1Efs1JqAcpGQvsWUjVYvpbxeSMqy7xwk89HZjFeSKsKMCfDtc6oE",
  "key37": "42t5qiGvpQRuq3Q9L63kiKL1nYEk1fex1zyjGzGVqAmwumC5Vn4MQg6WMELrzneV3tECysFXKzNJ6rL36vdDPtw3"
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
