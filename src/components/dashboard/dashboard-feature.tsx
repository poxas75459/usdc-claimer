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
    "2dU8Reuw9c11B9uBsUwfyiaChku7Z9WkAjuBiaVqctkVfrhLvyf4JXNNUzgPQhprTcobKZ9qCSK4xbB6XcwQAWHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qqk8uVJuYnXqtq5WnnTFfN895c4F4SPVteEPBx2NzDUWMe9SLsF5F8uWSN1AM3wmLVm8WBZUw3NV2XoCnZedCoc",
  "key1": "3dgR2BZR148Fgtu7BDBJjF63QSwMVLoBKMLpVHDtSpkfCMe6wHE95kiNhDWZApxJM9ykAq1kzEeipP1UHK9EdXSJ",
  "key2": "31h5YKu2dUgoC6nDNKidwNTbSeQ3GZ3k6ugZLKRBXHJCQB4raDQNYYs4KFzCyFZ4TAv7bf4d92o7wxeJKYajJmxD",
  "key3": "52KECBJGfwEde7FebLW8D1Do3dS7YoUV5wPgg8WDM2Ky1bqCK6SBMgDrd11GHu6jppxZF7xQ4zHnGDDJcbtaa9aU",
  "key4": "3angZWro8fhqTU8boJCKmrppyaPmiBRyvXHswuTmZL864jD4MdMxy5JVEDtuEUZX3vwVGgHfEDh1jtJzoYnWARTR",
  "key5": "3KaiAEQCXGEaVC1USNvvUNJvrybQGqks9FjQDr5KytNhqptBCQuwFvgTujA118yiim9iXvBCuRRmtB7drn3fgmKk",
  "key6": "3bH8QNKzJSB9VYLNmjiSmTzw2M43M8bifjoBAQXdVnWf9Sx1PDsoKjVAajm2YCgW24SGgYtV8gNw1knHhunNQR1b",
  "key7": "Eik2EBNHyAiRBqQ3YzdCQzp3UR2219syHC8FQJQH2eC4t3AsPZ8BDe5qJunuAQSxsZTfFZKH4tgcgH3L7HmMnVS",
  "key8": "2mjAEDTRCj1cvRaBn1E3mZWAfsewjehWMQ1egp8dw8dgrWCA5T3CWuxD5bASRoMz4VFuRumWRzKu1KrUr3kYE7BA",
  "key9": "5PJDyLKLvzibufJxNXVA3qoTxC7ZBwe6zPcxX1WaiUXNffNiuB4pztf7cUfeofHzykFhAw7oQxTkTMyNDyxLmkWy",
  "key10": "3B2KXY9HpT55MnLeqBGLRDFLQZzkHStbdBL9rqoyDy1hWKt6jg9x1GVeJEMwFTRLEV59EFY3jsHzQxkzRv9HTxsr",
  "key11": "5vPRdxzmhWMFYQU2ms18ESWzPNUGudaUf9VAwHnLZ2BgLccTkm4fpr3oity9vrriJXFsPx9cttHDPQdM4ndwpMxk",
  "key12": "58YRKyWaHZ45uUzH7vNS13N3fJi4Fa6kUsA8tUHPCiDCwAVF3SEA1r6NnAa8MUm7mt2Qc8PKPGnf5tYWvAcNbG6y",
  "key13": "9gbMfnRuLo7oz7nAmknfFtXjhrNej2svVg3hTB64KSLhnPKDi3yBGX8rTZUrXhhV6n5iZ2h3EqNi1MfzBLsVrfv",
  "key14": "2viEKHtUi5Ueweh5oDbNFYGVmy6YPuhMaWeJfBr23eWGPy1MhrRYodCa4B14zUyyXWZU8ZXpnwVnFX6jBTmSu1aD",
  "key15": "hqJ4dmEi9mC6GyFmtMJPxwRkCTUJ38JEJdTKsnr2Swa9jGYGdqeV1WtCeFTEQqxmX3dw6ZPYmYsQ6oTNX8y2rEr",
  "key16": "2ShTK9jnSBUimmshgsVfcjdqwyouaDXA2kSfUtLnCZ3stDeznTvJ8FceyeNUChKgyXNinz5fGhLismJWHP7bFu7P",
  "key17": "2ZvrBo93gStetKTPKP6wCqbH45DeeS8sGX55kyEYns39BZnUty28NfASFEN2QctP2gA4CnTmavSTwBMNWmApeNx8",
  "key18": "52WZepQVNwwRyfDc7i1fHRQ4zkFepYuBMHMj3fDt95gcf2x4E4AnicP2u3hhknAHnPoKp5TwM3PWAojoEDSiHgio",
  "key19": "3jVoZmcfFQmRrNseCAruVKyjw7RR9ruk7vtctY4xGfZrpVcuSLRbpWG3VQztnLFWJGdM7nK3cZaa4YRejLX6HWCp",
  "key20": "2gFBCfqgNh7iJXmSBzjTMLYoKyrQfJ3fZP9YQUSG1iba34rD1uxYxL4CbpX2pLWBQbPHTNYkHvTFBQCQeoztavBi",
  "key21": "WCCpkr6wkzz49xt86UpPAYbymu2AM1noNxW7YKThY6HJF7eWGYq6hAMQ9rDJBDY5DDSCNHWAHzVtKFRXqhDnZMQ",
  "key22": "BLpBAjK1g5YaHWCC6Fqn4WHHnAsNfA6HyNG8VYVrKQsRo9iJKwU5ESbg7zsKBEjSz2TnSZWvAeHgb3wKp6Totkk",
  "key23": "632A1orV8DDm71PcEvpYBe7wuwm9WoqC6aNqyTWEnQYrppMGPXFcsiY4yCyCAFrS3idvCn5nprjJLs4BgPBSNoyn",
  "key24": "gaWBrg1TwD26EdNuwnoY5nv4M9GzRQWiwpw9c1mHzmDddNRfpQ1EQtrgUEwt3AhmFod7v5ZdBfpUNJ5ZB7nJxQr",
  "key25": "4NMmFpThAEaa44HTkoikXueQKw2c5YxWMJvGGQzUbqDTVQ5AYrJEmHfKsLV3Pf4t5hPugNNQGn2qkk9dkhkrQuc5",
  "key26": "sfPabJ7bjxyTX8Z93csBqVMPciHa7xCgw6D7PeLHNWTr6tS3E9WM1BFT8NTR9cyBzanz1vWqjTaDxxLycBXR47A",
  "key27": "5V6DJXtRMY4W3bbSdZW3j1WeK35nQcoxzPkbd3qjTSgSbgzSGVU2gu8mz3mkZu9ducTjrPF8S28q9kNzAu8uMShv"
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
