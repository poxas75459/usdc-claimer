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
    "5vgSS4k5J3iZkdPaSctAoMLGYTa7oAfsUzgDwv7atoRmpcmJMHXe5Tacih18Dwj9v3gMWXMYL3288h7S6eMNJcqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYhvdNBaKCbSCusYL1wz4qhQLrEC2DWebaqjUCp6RumQ3yvCEMJkuxnrwbdzGZw97o77YCoJZDeE7jJCVhxWzcB",
  "key1": "3PEkGrUj1LrPhLAoeDHsWT7wJvGTu45oTMDZbQnikP8fB7x95488t1g9bqWgm1AnyGNnjwbM3FRjdFZ33RHXKAjM",
  "key2": "4zVTe2kSZmuke3jDoqzHbxLcEYR5GSyKd3SZudjc9XeWWjTkVD2vZEZEodDuSA89g6LHVMVw3PxWa1hGcfk1c413",
  "key3": "5FSq8NGJSNfZ9yPNPU8tkiZJoXaQ3bnWMSdMzK3UPUeEcaAkw6WUV2BguU8rUiWRv95hFiUqTWc7moR8yXEPbRbS",
  "key4": "3uzARiT8XqSpayVQxE1gauQ1gbvjuStcGWiasCTfsq6ccNueG64g2s1kVemb7RGhCNdF8VD9yn2MQJx7KgbfhEB6",
  "key5": "3B7zrq3HJpT3nK8TAdpMHNwMYp82kD2jqGG3JNVtpZ8PrGBSRk2S8E7zBivohzAeo6sUF4FCmYvg9GZoimt5stW4",
  "key6": "3cAvtexN7GjTvTZFDTm4AGs46xAjoytnTK6jTojj9dsLhri12MH5XJ61crDkFWTiZf85vih1WaH9dtRZ6unVr23A",
  "key7": "2wHyXuYxD8VtNmST9AyvoLjUrJZuoQSDFxf3XYpbohbmyGd639JaY94K9VLLsRYCNyYiDXzJWeN5nDYpqaaLq4Q2",
  "key8": "3tok9F3XvBcs7Po9b5kAZ9CmdPbS6WSbXmJJHsLxqerPNaPYVpomnxKScuhs6ypu6xeJj2Yoss3EcZPPnntWfSsf",
  "key9": "4tQYLwRdtpm3ZyyLa96FHDXxtQdmYQAHq2p7Z4srcCdLXyU7asdRLecSDjXzGx6vuRwtSE9fYHmVzrZwgS9ysRH3",
  "key10": "2DxmqaopFGxbzSNiqRebM44T8NAWdQ4umdxJY2qra1K1xaU2m9fd7cbyJinAkmkBybjfWYhKXuFwKw463Fttfjwc",
  "key11": "64gZHczyejJJ3wPeuuSYhJ3Fo1cqTU3KK7t9qwKyCjCnA2vn5ZXDxoTmnfnnWb2CUa57EHL5CcEkqGDMt89R3NLL",
  "key12": "4G1vt5ZFxacGifk4Lo25wK1bhadXRpXAAeVCUrMgjPVmDpceAHPHtXYujwzErhjEsqTvh7aHEbUwWcS1nsB1wzh6",
  "key13": "2DfWQLpSTA6ymW9R13JEcNeY4BXTGVrx9YWigLapakuwFpdqH78FG3QKq9RmxhsZbKAkKgLfM75c5u1FCVMADAPh",
  "key14": "51rWGd3jvk1XWRA5qL2FEnjwoJCRruFZ6uwthR8CMWDaV2Ti9nRR97NFAXbad27nxr8wQSCmgXcx4XqXWPSaTLPZ",
  "key15": "2opLstnpVrEfMQt3VZLUBb9U3rkh8jotDJ8snmPmP8rE58KhLRGmn8Xzkt1peJnHKUofTsRURdXHoZM8g4s2pNWj",
  "key16": "5pQGYvkqr8qGajVccPtACEXkVrqzeGycEya2nG4oxpK9wntCwCnh8xAXqRiEVGWkAREHYpgPy1awfzBuRePSWapZ",
  "key17": "563Tk4Et9ucwYKyPjnpV7kVZiywFuV3565eUWPsxKqnMifuVJVWTwsPVcoApTGfRFde8iPb8PQ5jWzH567W8Fhpq",
  "key18": "4EFHZQtTYgbNGXbYF4bNDAnxFPzumjDXwKeWhbHLLRBt75jT98wHY3rtraFH4UW2bBv2u4Yp4uq7VsWf3zMNDyXK",
  "key19": "sTfattDq2j1zGrAnZgUbLeQVxrTTRUtSbV7hvgzgd224ZR3vCqnDJPm6K8Lkgx9uRUrKfrp9eaqNLvRC9NC1Rn1",
  "key20": "4pFCXSuzmw5GoCAEz7RFZJLiKZjLZ2gi677JjEVf1hLWh3FAsjbwFgcwhrzDCB6Tq4FQs7r3wGzWDyXAhit5pDm3",
  "key21": "Y31CiZARmzMejVwwb2tURXKeK2WzZEX7AdMmTz2ubuSgq3kSPt92Mwu32jmG4jSC9DVp218KEJaJUFoNEigWrwD",
  "key22": "5jDx2LwrAqvtwtowcKq6cnoqburwmyryXJ76JDnnUN9wYJQUvkBywWEwRngFNJhupZ32RwSJpQ4wUkArCk87B1ra",
  "key23": "35sH4tBytPVPduJnx9MEB5yL5FDVjucSaEN8kXLDhS4MHiSKuFKmp7t7FGbGXG4wQQ6W1AxygNurvxo8WAnieuaN",
  "key24": "5tJDRqYrZvBK9QRUcY8zE5txCEQ7TCkHi2yHiTkq2kkWJ37wMVRoCWG6PVtUjpXsUqgM6CApohFAEcVS1tobyhUF",
  "key25": "2fiAZvNA78bU6JpYeSsfeyVUAK75Q3A7c8nXys7W3rFt8evYfuyMjgYCdWcfVp63vpnrQ1rWjrLTT7NL1AhhzY3X",
  "key26": "3WRm2PxD58rQNSPFG8ahF6ziS7fcuG78aoFT7JvcQYjeKaZF5g9wxGd995tAEu8V4znnYLfooDEBki6z9GqXbtsF",
  "key27": "2XZQp4yMZd1Q4L6hnGxJ5eoAELfg9e18NXCHkV9FALmENYHygM8z152KPmof5t9CdMrMdg9s3VfzevfP9jUYZuvg",
  "key28": "3gDjNTkm5nMFxvrBcnb9GiUU6AD1y8MCfLkbADT8nttz7vLgy6ZNfTwzhK5VQTih7XuZ6SgGBhRsMZWtim3NedvJ",
  "key29": "CWVUYJ9ZSM2baniZQ3Miw9CHUpjPbqD6XrZJyiSJermSSyx1AoiwoK8J3wPDE7Us6bzkXJb6qsmNpxP3G89roSU",
  "key30": "28sj439XTXWaBXuVEkGFP7MMEAf232kbrFfXukmtXiZCaLRNPTVM1wBiykhExUXjwBZLAaz1S8yLgwntnVyqF8P9",
  "key31": "p3qCar8ho7n4ZSZEneXgbpzdZHGjzpP7mKXT3KjsaH1dF3imoCH1XUJWRikB2AugvgL5AfRKRRdNzdZ8t1tgGrf",
  "key32": "5hpjVUMxQvaTNYo8syhbUPca8fM3yv36htg2kMxHYipQp9igZt5Ae6whXQz8DJkfuuK7uCXyrQ4xT9kKuKrZPWWE",
  "key33": "4vKh4k3SUgNN3AJ2wSTcZhSU1mBX1Pzn7SdM1VjR7w7oC7vZXBxatjcjoaJyDnAknudgcR8uYf8YuuLjyjxPTPNg",
  "key34": "wY8R1XBtF2krZ45axogWcmnA9uFx6C1W7Ld8HJbbJTLD2Jea2WBDzk3N9QjsMiPowX2dbziHkfBschJM4hCGr11",
  "key35": "3tuiCRpLFFB15LqgLkUccUeap6q1dXvZLsjNTUQVtybuDVqzJcastidsPuJxEkN6aEPz5ATJTTa48RuQ7aYyeCuk",
  "key36": "5ESv1ifYSxe1vH8pM6hxdowtN53DLVijH86pdEppcYWyR2xghXHQQ3D2yUdxHfDTwAgXNg33fQcY8swCvHCMJ6bA",
  "key37": "3Tar24xSpaYg9XdCo5ncUsibku8keaTAakupvSGyLjz4QLDt2CSbykdBntnZPy9rD78Zdrd554ZmDPXww3TdiTc4",
  "key38": "3viRsHgjZAgyot4prxtBfGrefTUkUcHxSKXpRa3EJ9TdM2uUQuVuP6ESDtGz8ECHwDQYEMmnt32TeJLsWJSzYsNw",
  "key39": "64VVwfpD3DfiQLhzSnFYy9VJAyQ1uSwwahf9waGVLgdcZdM6LqmcVuU3HrK42UHyegzwsn3Zpp8DJaHFUwdhNifu",
  "key40": "3cZkghv6WhZG1Gk5n8D8w51JhrJfSnGzq3GDHBE4yrXqGTFhk9RREqLs9vg7ejDYTQiTfoz6eULUWwXDhWbnznj4",
  "key41": "3RuoHFAq7grseMwJmnBAvgTjTvGs866eHSQ5RMcUPgnJkyCdxCfPoyjK7wobTMuZwNpn7fT7EprEhhgmPevwKMSU",
  "key42": "5BQzJFeDzEEjSzrxw1BQuNQW7dprsQiDsG9XHqM7fkyjzKzKpZC4nyby4xDNx3MobHzPbQS5m62rhc9jo3Bort7w",
  "key43": "3UH7bGVKDeNpjACo9AKvqR36VgFMgCyzRoY5ZEStpVQNWSpuhUsmqdV6cWfaMeXxCLCL4wayJX7NxoxJFDcQRA5c"
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
