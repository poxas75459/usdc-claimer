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
    "4RwknUiTq6nL2GWvcRSW2Fo3sLWuaKozB4ce5mg5Sh3hX32w9pKJ91kjtfc7iXhvUhnKY7NUzUkcKQmf72QxYrrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CTJAHB72NP1UrQ61ti87ai3FPMzij4Hevma5hKKRWgAdK9Z63Zbd7pGwBLW3dBFUptjaimNa28pzfU4zb6gD8aw",
  "key1": "fK1PdBQ2DTrc2MP48gr68qHvvhpbtFUvgHR6DAo4azumcapqJJ1U3fp9zy4kpWYemAZtrDu28gajjjCihoHG9Hq",
  "key2": "3AqMQoF5e69M8x8gJ1Z7c9VgLgqE5mbMxVakvN64ZbpcBKoh2fP3KNjbbadZmC4o6C6u6F195tQKEmABJuachcCB",
  "key3": "37HnPD5Fj6VEfDvEhPuARhiZZZs37spVq9hpiub1i8GbbeDoY33Jko2VHg9Jf9EypNKWhqF9YyrgTtPDus57aGgv",
  "key4": "5BrsCsU3q5wLczT51txVRNWd4BfY3cgjNSfVq7wFeRDNWrKTSKXTsFVFCnAH1VBmcunmdDP6p5tDAp6mRUCt8Fuf",
  "key5": "3FXXctrRhM7edfBQNzAKDxh351VBmvXV1pbokdFuMPp6vX9M35GQkXnythSwiGgkSWSHuWrj1oKnQopT95AFEtxN",
  "key6": "5YUu1t1GNuAaYWsd2RCqq28U23JtiFGgWEERp63ejkFLFt3fyMYFHBYAV4ronMAngPdEYunLNzdMmHHMoD8EUeED",
  "key7": "56v8a12mXFEmHELdC1wj55ST4wBce3pYufxygWmsq1MDdNHeLtXqzwnmnkaXJNhQrXY1VipNM1vejR3TyE6zF8zv",
  "key8": "2ydHW86UUP6rCuU7QD97WR85cf5zdBsmEc2kY5mbW6P2iNspcEmJtcPJrtwc1FjZQTd6vijwCFijNo5aNPQnYuPo",
  "key9": "3JBW4MoYZngc7KhM4pSUbDGvKvCX8PKQ7kG72faHiHyREJotancoVyzJ941zERwKQQQXz9p93J4R2gviqfyf6w49",
  "key10": "2vHkqRud8o2fvM6Ww4fQnsj7imkvVjMGNewL6EPmqCRY2XQ4AEwGksoQubc5CajrehPBi9vaCZEdTv3o2bYVAveB",
  "key11": "4V1hgcvtYiDH8xbTwVp92oHgx39pkfWoYxQE2KZH6q6BvK5g8y1rWaxDTatnzCGMorLSo7JVNiVLWFUPFZoneD9b",
  "key12": "jpVVY6P4FDbnbDkSqkcHERvTdTS2gZSDyqYBukQY7MRHjfoVV7iicBdubLpqSoqJPCSo1YEbmmSY12uQ2NtRJCy",
  "key13": "49rjwDuEHq6Q3dpoX1i5oAmh6UVcr5KtJ6n5VaSisNFLrPPTkfZBXYuP4h31pYKQhr2YDURgNxHPZ1HUQv7qCBCf",
  "key14": "4QTLpDua94fjVghbh6pYoYQty6bL36uj3aWLebUwnGBEMNm7nu1Vww4qPvJJbqzSD1LFvqSTfMKusfX5QL3R6haq",
  "key15": "4qNujat7SJohBbhPkvBAVsLiAHjnhvv39dJazEL1BBoA1h4mrBEQcFGdZkfrUr7j5pCfiqwW7FDVAa6JdRmK7U6q",
  "key16": "43f48MGK48FjfeM6p2BMDUG4VBgnNLVwrVCiF4vto96H3zzdQi2FRgSqpjLzKk3iDZmQER6xYBZ3JnryVNUgb6Mt",
  "key17": "4G3RryaSKhjCbM4HYuitkLY5Lxx643i2F5RKVznXiKaAm5nwqqjMe9cvRRpwLGgo2YcVErgt1SzCyJZs1GtWfqTz",
  "key18": "2KvNxKso63oxWaPKUTvY38ZBgKp3un93tkzYu36qyr2ADdJrZu3RoLfpF8Lw8TKXDL3dpLt4beVEUjztu2t6FxGN",
  "key19": "4xfQaD88BmPSBGNcFBeexndoukcWfGVomijRUQ1jeGwRjxTBcEARcdgsUZbKLAEMVEjwxBPetRkxJVGr3jy5D3F9",
  "key20": "2pkQvNjJY4TQyHMnhwUp1uczRtxng5a8usQfGg9qKsCVmErQyjcg353shWGVeEUUaMp9ggjbDvAyuiJ5vBMzNHWb",
  "key21": "2ypZYLYmvUKtbjXcuRoU7TfSBEzHUCtXduNmi4rfgLid9e94DrJtgRhWxR5tC1n6M4UbkYQyMKmZiZZdnNdeArrN",
  "key22": "5v8jXM6w3KrW79mVeuaHbEwsBCfi2RjTaDYRduvM39UVyc5jvW6S8bFvjdfwUbA3di3SmbVWbuRXTtNYRLSGLZHa",
  "key23": "36eeCubyZzLSdZ3utvZsb319opAPDy6tHS6i1cy1ZwuKgEjA7D3PZgPrT7Zcb83Gec9LvRjfX6vD7DHSyydbhHzR",
  "key24": "MNvo8PkHQrDNHFfjK9psrLceRxMiFw4YqiDJ85dKHNZva8xdRcAsqyP8Ssr8qSjZFBxcQetZ368qMB1oGTfyZQy"
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
