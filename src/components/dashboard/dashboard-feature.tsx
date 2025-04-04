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
    "3jaAJu7X41xkaWB9Ms49wdNTfQvqX4LP4wFXHW6jYDZiz3j2nEc7jq1VVb1vmWtMBEfYxLkmDjupXei1pSfZ6kZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pzcgS8QQHDciHqvPA7DKckGTW5pwYa5JttXuGWCwwniNdN15fekqjR2FPUZSt8a9ymQfjUvNTFptax6Ppm7q6RQ",
  "key1": "2oRtm1bW8ryizYXt8KXFHMBHHLvKnwbzsAvXRbSVy8iKXwdvRAMF4CFFH3MQvntKeyFzJcDgGLm4fRJbyZogEaqn",
  "key2": "2vFdmKRKqgaVhmmNfaK1faPvEBsTCK5WR4VPg1Tv989zwULVCEeteYt1TvCBMM4E9z5RXvYFSNUt8dzyfVBaAwhd",
  "key3": "5JiBS6CEmC4FXyNen6zn3DgfuxpKDp5NCK7m7BoZHR4PWwseUiPL7zqSTGVHnVVtBYNL12ZnojxC15BVcL9o1xVm",
  "key4": "52mFhATASbHEB4J61txzF1p7YeXCqkSdgaACVFv62qxnvXJr3KhzEtRk1r7s5TB4aDJywRv52HKiNeSte1Bn1tce",
  "key5": "5JXhABh9ohEYLKzLExP6wZKCcBHRMLR9yQqoMz7zviowuo17ABbb9bXKWMAEyURjZqrusKVd3pR3BFNaabFFmKt8",
  "key6": "3zuN2t6Ky9drvTSvJrkVvKvNcc2LjqUjsvg4y4hv48tdyqs8G5kZ6DhsyBKaZvmuRGTznDEQkKK56s4SPbzpmSDV",
  "key7": "5U3zcjGbocKpLJr5EpxbbgozkyWhb7nhyWtaVDv4CWT7gfnta9xR2yTWDSLt67ptNwpm3jY9iZTBzzApNuZnJ12T",
  "key8": "3Hn65FLwXyjGQ1eoKEQrZzRWo2Zgu7Rhr17W5gByBbBPByoiQnATJqViLNfj4v2ULNz63qpDkefdJb5fk9twA8NP",
  "key9": "2WM4bxnsXamgWWARQ4ejt8uz68xR8Fr9rYG1poToA8rG7zafwBXET7farPpJRgVGR8sXp7pWbxv67J9EJrM8dLz1",
  "key10": "2LHZUbprCecs2XQsXdfPKgx93DaRz3D4CNAJYuubx2i7u8XkEmuSFFbtzBtKANhyGggqiw2y33LWJb2krqD5eDGf",
  "key11": "5Czu7RfuQHG2WjNmyPYCJqx58EH2jwCDAuzvjKSN7E6ammD5X24bm8YoHUci6tqtHv2N5M2NEB2j1xGYhk653rPq",
  "key12": "5csXxVkNhvavi2dD6WL7FUxHKpdoneZ1aPwD7ZHbqWDtMsnHK1rxWax5DA7Yy2c6dJMKcwkzvcL2XPqpaJsV5Xuh",
  "key13": "619tY1Hg5xSy4YEzZNhjaLuQ76Fhz2g2D9W5sbhYXwRfmCPKf4UZdJbpgVVhkRZkxoBCajmL27fsTqWSvEx2GqjL",
  "key14": "4Ae1jYoByzxxM2QouqEynt6txZ68nDTf2Gsp4HipJHKxJ8A7xyutBqe6K3NyNsFKUNAabdRYkQE72ap2QzypUvkS",
  "key15": "5yuHamAmrQEHeknEQAbjdmqM8Um5GbfSUYjHfgohYpJNS5VmbNur7ywjYTMDx2CEYXBWKcBoDY4AgXaGqUD6F1JR",
  "key16": "DNbWDzh6DK225wo4kMgSXYcgMd6kTz3mHBkrUYHuvG5szp4wkAFeMiwtF4V8MEgpVsAudM9XtuBNZirv39T5NLm",
  "key17": "hEv4dLdfGdcMrQPGGDWUkw8WXek3gfwfoMRQXEjurdPauEV7eDTKj3EPxsvBn1718pq2a2TuHovDETJh3pVrywX",
  "key18": "kZuRDG78K2DjHEhg8o9JsHvkEhw34tkftk12wTK4u4vgXVoVDcZftLeHzTyPmTWVLqQJGiUy5cXu4zRUw7ffVnh",
  "key19": "2PeXt3SDT5EhXeUpsZsvfatrYazL6Y3LyZEjB2wW1HfARU1i3565EYydnuHwq3fG3KUzHzKAKMno6b66VXTymD4e",
  "key20": "2mmfxrCL7NNK7Az3SmD6ujUdwhyDtQ3EALvtFbvY2ekZqFuwAtMLrS83LHwMwDsBeceZr55bWjMp4fwuWGdn6Wav",
  "key21": "26CR8DkxRsBM7z9NTRRfdUGG4isZX3sGmBqKFoJpJZSU2TcaMEhhTZeh6Nw3BAeCnPPP8CkrAYsjVZzgvY11HL8e",
  "key22": "hSFhktpkknm9dr3w2zaG8BqbPir5JkChtvFdwvFNNTcRWbywCWB3GBGQffTSiwLvmY9wj3jKkTDAMtf2NHaXAvT",
  "key23": "4abEz84JyEfYPrpashAvfE1Gt7mAuS2JfMj5KX7fVhgJfVLtDFfjy5bG1h2MBwcsLWTV816FTZi6A8KmiWHjkKKa",
  "key24": "5jkauJznAcjGw8h3aL5AVeJwDuFDfia8KLHHtpkEESGm3844m8XJFBL7Ywqv5hponEueDdQ6xsihKbrVntUcaPb8",
  "key25": "4qYWiokgjQferYv8iEpF3jn4rHxPu9P7FBV2EbiH57NFUDRXtBysb7b3XmArSwXnmttgEUVd82jDwqpPuPTM2rq4",
  "key26": "5bd7rs6FLatnx3qK5xLh3BxQJkdE9ueCsrwagxmU1xygS5i7CXg8x4WtE7e5Lyt5RyFCVtnjFRauDcHBJQLqJcoj",
  "key27": "3TGadBbu7hYRdDM8DxqU7FxgNNPTfK9zL6VQc74ubFGC44HofiRQfHEDxu4AnwcB9LjjVkVfL2MByN6sYiegzXHK",
  "key28": "3Yn94sPE1i2C5NesGmTU5P67e64TDwX89QwA769bidQt9U5T2U8DNcoK7Scv2tEQRbKGnEtQt6BgKMw22kbXsgoj",
  "key29": "4RFqbvuPA9PrFFa3pkpT7Tgdcgh6bCks88KJMvxnKar4FgB5vN9o64Yw6R8D3XkdnUkMiMMuoFy1Pd48vZtG63AT"
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
