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
    "5VCECSSufGKFdtTYrxi2SyTrqD18d2USoVfpdaGaGzhKyR9wjrCGx2kv3VndMdnPva998BT7s4WXfJR5QKRBEwEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cyg6QXBB43Cf1VYDgo988Hrm1snwo9qkufqxX3CH1mxsR6CTH8QCbmVLCdaU2eWgFr5PmRk4w8MUzC7caLxJyDQ",
  "key1": "5rt1Sjo7UmxqSbmTk9PpZoJMPGKZcb2pu15MQk3t8vfhEgd2fMVUyDgmUTanXgQzeETWzbXF8m9KKpNRgySgPBeK",
  "key2": "4SWoxsTJG61tbxhaErp6N2roUvvBsH5FxYycnLx5HtynVzDot8Z9NskdewfVNLYVifdfh6vrrXfySktES2SH7iRq",
  "key3": "3uujt8JsM7Nv962UXNzTca7gkhR9gz7b6cGQ4qPw24gLMtswC3ijqo9QBFaVCFJivwpkpM6DUTNqgYuK6UyjQVtT",
  "key4": "5d7NdPxfuSHnj9hZqidzWDF4roZrbfMVFcEKLr1NN3MpPpyR4GL31L5aCoqePn4jtGWf97SzoJnG4G8gJ16Eqvak",
  "key5": "24DR7p6H22VN7itwvMoQsjaWctWLhnjZL8crBu3VkNN18mQK7aiR16a6tcit4qtaVCGz9TfMNMmqeWW9jXs4ZuW3",
  "key6": "2Hyi2V2ef5hjvtpKfPMSFGgX7SBbxHERU2RpufwADbVnP6Dgitb1hTBDvTnMcHwD3dhtB61NZ1CXQYSfmiGWZScu",
  "key7": "fvtrqiWixvNmpL6yf799MPB45YH4Ns2gJaXYNkTPTKmGVo2uNzF22nL5NV9MS3y1tf2iTKc84jBFywgXYTTAeqp",
  "key8": "5CmQqq2v113YW9USD23evvxJm32GcYR2YczCEJYam5Z1enGZBZTQu2nNo1ansMqF6kFe9GXoRzuvPSxaVsKbDysJ",
  "key9": "2xJaQwcn3dEKJJdjBBb1hsdSoZ1vECxVUh5iiBvsCtNLkU12zUCy8zzHeYXQn1haFG3oGQvWBVMfEK87xiui8DWt",
  "key10": "2uMrj4CHMN9gwvmLgehF9ZYNTFtaTugpcJJ9HRZPiGb3fMiPTehgS9iJxsQMfY6YRQHfTUwVn3QefEzC6bbP4SPJ",
  "key11": "2gHarE72AjBFrAADZM5NRsay3MV7Vgn3fVEd9efjJtN7uSv5pmWGeCjgVGGdD14XwR9LtQHGN392XhzQqPxFh49t",
  "key12": "yXTqQLJHGSR4BrUmFm49jNhd1rKypQmcy3yzMtSKaJiugufftumSGvrSzPTnhmEzhcngNEG6RHgniShjw1rEEYw",
  "key13": "5otbCNGbWKJPdp3R1uqgdfLcx4xYjBXbtZggPihAZf72ZvGQverHQcMbcdSBsrsaFJ7aeFsDFLQDMdGhRpC9WtXC",
  "key14": "5hGhKni3BDfcLMUvgWbsuH37zSQD3ZiR3W46Lb5G5X7QxTruRMwxLhJJuXAwoJtmFpKWnDMEZ3A3zNuojPVfFgyZ",
  "key15": "2k8yHqeFq69cAJnsVi6ZdCJ7AYhq17dQCmziDtT8vSf56kfPsipBUM5hjVHKxQPGprb2iYCvZ8SdkVoFB1Hs2Fjc",
  "key16": "5TrXXxXaMuog2AieVm8UizsfFXZLanWrNMW5RpvTNFNta9zckbxseumvFdHK6UXYLNFXzQdGgEXCpCz4PkT6vHuT",
  "key17": "4ZDE3H6ky4eo1xriEwNS4AjBc2nqWj65Z1qWrqizKiFPVLJTMHugjsDdcFvgMAtGTkkG2J3P2EhuGqbyX4goQ7c2",
  "key18": "3TY3CMdMXRgfphPqD8SSWeXcTw1ktJbp9WyaNZtSDwnWP46dXuZAUvjUA3StUu8iZbhnvcCpgs294KvWG1LujSKv",
  "key19": "4msUGx82u1nf1JGduMf3sAb7vtxui9WVr1NMwTL123HcCG6abHSGSi1HBAAFgyd4dCuDDzLC33axcXZyMQZS2LFi",
  "key20": "ANfWxtVBCHbkRH9oQJRQ34mhMCE9rkXfERzY4Ed6svFmsA6zMP3mxttPfawdfXYfaHGCJL6Ed9weevRdVPKbW17",
  "key21": "4phc4rwEdzLxymUfCJkTVc2fJLPyE2YPGfysbGyXstXyQfNsdMphSD2o32hPG1CVhfVVCC8ADUKxa6YCEQ2UXjRQ",
  "key22": "38KyYwNMwHatcNZC46jYskXCzY4PMCsrRmpzgFKmaG1KDMV3jfrPmWjCHSCU9C23EtkHHsiRAsAeJB8UBdaKJyik",
  "key23": "L2TJVfc71ri8kbuau3nmpGcPrUSi4EfyFHe2nedffTp6EvGVj1mu1CtLVUDGaQu86SyJpB53mD9hUWu1uXnLzA4",
  "key24": "41pY98rk3QJpTKzFJJNbNhmcHcdMXtKdYm8gmSCTvQnnTCbaMphVCBci8VTSjtCzknDb3uDQsE7ZgjQjWF5qEvjc",
  "key25": "62JK46CKrHDGSocH8qFcaeMu5JtJVdsfEAPyeaPn7W3rTiQSFGig1KQffRuqPpG2F4Vi474X71N1YqoiVxa8xdAd",
  "key26": "2ocGKgkmZ4FRB7XfNPujLZ3L81gbSK3uePdNUjchHGauNpf5asgsHwrEpwf812DoD8Xq49bHnh6C6ku7w1LFLcAv",
  "key27": "4DcDgzN456ektX4boK2kgNmRKrPn9XYLQ5huNejCbuQtAWsGd3QDnQB7vmjVXbSzL9Q694RXATrai72DyD9GL4gj",
  "key28": "4t8iWnyrEzrRqSv47iPdRopKR3V8dncM8E7oUhqRuGtq3Ta9WNHcFufBDwhetZhxDW9kzsYES7WoX5FA31d6cGeR",
  "key29": "5EAQZAv1MVcq4EDmyndy2hWiY8vsJbR45WF3otGvNQ8y9fU6EW8hgASk6riBpDAHkq5DEQCnCAeHHRrHBCB5yxaf",
  "key30": "4Q7cR6RsCL8BCXkcuFcb7mSaB2rRykCLcvNsai8vkdQFvQXPr1uuvVZqA8YVbZbTEapSkXZNKiUqgNJs7zV5i6s7"
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
