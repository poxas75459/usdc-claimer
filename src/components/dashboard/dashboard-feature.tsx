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
    "5bqTD443ZXfqcB5KCU4GHqnzbTQoSkhbYPbbYe4bsd1jjmh1Zgne7Df6zjtdZHsscDAKuQvSyjyj7NPB542eGzz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Da2fnzJiMqzqyTZ1Lchuzo8JZhcMjaJ76mTeAyvStDf2tHjKij1ZBnFWBHTZYBXxDKpdD81iY26Jmmkw8iFY72U",
  "key1": "4rQbVXcuugWEJyMC4St9qnSxQUwQsg9D9mAkNWbR2Gm9LDuLf5SgR35kFCX7D6hVPtxVBHDi9mtwdZMQqgnfJxE8",
  "key2": "3mrLcHaATVBLNigpxd8mnugSiT4uY1FEUiziug4HBNApzKi5v7Umw82fFunnQrgMqvxRjfE3yrWmssKVxpRnWXGK",
  "key3": "2QtBiASepmxeWb75Ay3W2Fk9qcDJgsGa1vhA2JHmETTvmFR7x52ZgoyDVbDUvfDh8dfuHZfE8vYjQoVYjDkE2vSM",
  "key4": "5ZwdEf9GSizep6f3SnZUVeWbdVwkFiuyw1oD3XB7HdYWm8zU6NEuuw7zHckoeb8mhEuTa6u3x7DLMfvRAPyR1iEs",
  "key5": "41RweLRxaEEXunTEoNxZqu4tSntpZKke4TSUy9mjNDALZhQ9RZmUvUS9R5fEFt5sv76JnjDJK6EQ2ZUhz2iYAGAZ",
  "key6": "4iY6tZMy84tNgCWg5qxVFpvntWnNgKQkcsoE1dAgPxaeWsvCE738aiQRkgL6SHeL84bEx82jbG39SCTEoFkw722F",
  "key7": "KBVRsTmE4Y4wsferQpvoJE1r9pUxEnYgAih6TAhTzXBCVzVftmQEWdNTJUnBkkXHegk35i2F7vAGzurdGNiWn54",
  "key8": "425k4Y4wV5QYngxnxBMjNKnLhrR9nrMGbViNC1V1ngquGJ1hWtgFBHw4hFej6a7fCqyMyg827qmxK2Am47dUrrM8",
  "key9": "4X9d2Veb5KRxhWTet5G3QLXk6hX3AVM3ZMnatty9G2hY5wqTjUetHP2FtBs7913NTD6Dmvn1Rht8Dn53dPoeLw4Y",
  "key10": "3iSbU9KsDL8wpqbUM4PoUxRSRUccz8wQk6MDREzLUWrZQJ3mZa5ewY4mR9AYUnddrErNX53aiNQpDXTabi5UTyBT",
  "key11": "5paZCibA3f2L6KJkh1sisHkZSV1xfu7cANMHGZtHY39JZkNL84keEUV3Jn5LB1YMaKAMxTfUMhykFB3sYipGe3MM",
  "key12": "4QLMyA39tYHfHsECeg5Psp6GpoRTRvFbuQGPgKioCyrXidTmpx5qy6ghUxXf6K8n8P7qqNtufz9GK5mMMgDEr4Hu",
  "key13": "2c1dxpHZz3JRSEqNvmDHTCbHC5cDcTs1XkGcAGz78VFDExKBXz4kuBQ1fqtvURuLVLJeGkfxJE7nvDLknSEJj6Zr",
  "key14": "3qRAMHJYmnf7vdcSjZFRfTWEtECLWBUjGp71Y5QewLngTg9TN7tai2UmHRs3Ep87B8mZgEtRjuLHT7ak71LQuZj6",
  "key15": "2Utv3JpQvFc6B1ETKvArvZWxUXszLi4MC5DD3F7bRwt87XDgFruFwdujLdpTzN4bo28ExVPgGkMtsbeSGvxyTStj",
  "key16": "vNsZKZa9tzCfs3qJtkwSgw8TXJM4tA3KYubdqeD5uJHW8ZrCEciMDE6w6DrMeQR9HTJCaKfTNmbj67UJcaQNqE2",
  "key17": "2LdE6DwrTqELs2k3mgiY7AiauKM4ha5yYVyDDJ9twLwrSU5zTMTR9MfhR6vRw1EB4gdoFytoPRE147yNWCXELRFj",
  "key18": "3RgRdZZXJYDFWGr2yVp81qjKcxFsHHNRQwEGHSHwE5mFXKa51mVDQbKeA9ZKit9FXspSw34Nz6AWsTQH6VtyEmV5",
  "key19": "2uUHMA4M7xro2SWDMtHP8x1LaRK53pNCfuYuCcs8YuyTKL3zwmhsR2Pw84aSx67WXjwy7BsnZKYLSx8Y76d3Kg9B",
  "key20": "qAHrB9ybxNuLjiQ7cah21Xi5sTqRFCGPiD8D288s2HczF2u2dxrE6GXs99uizCywYhiMrkKDRnvf3RN5G5kP3Bx",
  "key21": "4eccSzLfBx5kJVHKbJiS3Wbh7GmhUeQqWsGASwXjfo1k1VQpF76XxTd54QbNXAwFfL97ghnbg4BuWYtv8eUhd7UP",
  "key22": "5fhjeWE7Wty1u34bHbq5AaBsan7ytosi9sshx6Bywjc9KB55uDjkFU2Kuc9yFi2mSMvbDvu71XauLKLHQFpPPDGP",
  "key23": "5BSLWTV6HFEaHQAx75ePz8fAJvjsvajreuhxfqxk9kFEzdekAiGuXvVx7TT6rNMHFoscTD55v8mDg8htNuAwZiPt",
  "key24": "2p1sXcpfWE4Xrvjj4qJLBRYXz47SyHKyThVxNvh6XHNyQpKNGN7RAh8WZA8d1KFcQLW599EuKRQKYRBvWjtUGWBS",
  "key25": "5S1iUmQ9FmMTLnK8Ff6dVkP2rERPNh2qkdMGEifVWGfT5a3HmZ1UagESsP8PTmwWfS1388WUCUuLPTvL11F8SzRw"
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
