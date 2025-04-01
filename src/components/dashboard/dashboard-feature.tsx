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
    "4EtsFh8pFVdWfFVoEkZZvPm9CS1rZvngrDecAubDmxBGGehNNTPzG4ZQ614hJFn6pxmXBWCwbwYM1mEkeE3Vzb4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vosmq1FBTj5EdFRT6CosFLRrPhxpcHVMERXsHYyy4f3vPXMd2HshjTwKoPr3TcmcAfApMJzKqVoJQqM4QaSVhM7",
  "key1": "4iFngQbzcyRG9XJasn2N9eUM9wPcPrHqNwcr9s9o3fDJp4QMKamC7FfUwXKCiL1w8yAuhvDyFkQpn8WNvGkXxLxP",
  "key2": "eG7QVBzjnGtXFjYv1qKhSGGZyVSZzgAGogsw6W4oCU79guEoBUvhpTG4LTLSQeGM6uZQr4mMAQqWAGUy6yzLFmN",
  "key3": "5SKejKVFTacv2zyTQUzHCLM6bT8fddyWrkqL19o7nbSC5NfwmaaKkbJ7hcBLjEjirhkSYkro973gEoY6xRpYGGhB",
  "key4": "35kaBVC6oq4vANjeHDdQCCCfmpuN8JkSyXMSsL475w3j6q8T79WRsiiBqwWZmEKyUwf5SxevLmP2uxshxogpSrVS",
  "key5": "4eN8oXQJCg7n8EcRFNBdskx7piWxxGLbRAfwwAabLVVzArCe7PSzaoSMp8UpvCSRpRDN92HhnqvcU4u9zi728hCr",
  "key6": "3m2spXjNRq9cGsu4TVKXM8M3ktPFnsVbMVfsKHsmFJycWEmDxqTHBjwiJ7KEQ3G3epAMRcrN46s8XZGwSdaLbzTw",
  "key7": "2xNqf8sHjB1Cy8vhKeGkNA9dPnrkWThxjQCJgNAxmn5iVFJiTU5LVHrC7LBAoRiVvXuYAZzGvHJVb36EpDCvWvVD",
  "key8": "3xPN8HfMb1Y3okVQ44bcpsnZaXZAKswj9ZmGJaKEEdQcQbTbaCxEJBkn868Zwzj8jVyzPkGGN8jQoiE1CPPCEDuP",
  "key9": "2x8FgTatwXH9M9XsP6iDRZeyAZ7pYevEftNzM1RDJXmfKDn8yD5jY29n35BVxUFA2T8wAY9boQVhsS8ST4TkDeG2",
  "key10": "5KDheWjJvyfkQ7jEzxBxvGRMcRxnbKks9CHNgVMDAMVB2wLe3Pv3XkjERzcPC6MFqjLNFSqQsnKbrHMLpq3fqu1X",
  "key11": "2Z4ANuJ7NwwrkMokCxn3tossWeCiLCFW1acKNtytRKmDYN6xKNvTmprqih7a88Y4nEknif7Mi5ARRqLDM34VhxBF",
  "key12": "2ddzAEMbH5CKZVtmHdVpoTcyyBRpTysiRYLnhsmSjTCovbsRaLRxMxfXCbpyPVve1hU6aQBu5mNMfe8PQVRXsUx4",
  "key13": "4gEeGgaDvw49UG1FPg4mZ758SaGUA7TtxG66fQCZnYd4zzVvzRknpTWXSTKcr9uz7uVcgfxuuxXAoiupMU7JT8vx",
  "key14": "2ipREdHz4bMeiXCDfwvE1PRvPQTJ49JvVovRCzDxvbTY5i6gXLem7LoCQbKYoMs9qK6F45JYwitfMQiw89CDd34n",
  "key15": "2RgNJ4etmtpFQt81M9wWjtFgTYCLH3iHYrsrWNAVqwVmxNbjMasZ83HV2Atm9yTUNms8mgMrUAvm1qGbqc3wiXkG",
  "key16": "5Q4wQ7jLse7SthWK5k8cMJ29rGzbPu3ceC9Ueds5xKzUWDMZvk8vg3j4Gm7sG64yaBZ3Q3Qofz51bVrtKsPHQy4H",
  "key17": "2ZC9kzCLziTC8F34xRv24dBQRxU6gUyHPVjrxGcFuRbKGsBLny8Miw1Ma9URkhE428PLytKpoPp11ccqrB3PXJ3w",
  "key18": "2378gqanePAq2ofx4ncetVt9qhN4EsRqQbvSYM4zGoMgkAXEB8jtsVTG922VpAr8Y88mYNbjoEePXHW4VG9tajTF",
  "key19": "66EhXJXnViTEQVtVWET6b4Jr1qRUuTZ7ENXN4NPhWECg1v5BE5Mzrmng4VsXzpUKEq26PMUiLHzSV53MDGZEXPqL",
  "key20": "2QhuJu8iL2dJsCxRcV7Jp5XudcT3nzM7nFqa8jMR2gAd3SMYPKa711yf8a2ocwVrByNc42z4CwL4B7zPKZeRnc1Q",
  "key21": "2CoRg5FHE1R5sJQW8TqSdpPxcofYffrGUidUvczFGFRtb9SXDtFWVUxMJWjmgJtHZ78NnfQsbrhH8iuHLjpdeaHA",
  "key22": "3sXxzMHmqAG8VnnKV7dkAshw5RCLU76gcSC15DcDFSrYYsbhVrSEnCpEa5Am6jJLNv14iVWX3taDvRSqPrsD7BCE",
  "key23": "3AShnzwLUNp2fNgv13rkysZakD78wCR6CabQx1ryWV6wTAtbmc6HuF5UBF3pLmXPgV3xnYoYtXGyDTjMAJQUqW8A",
  "key24": "44pthHBfc15eqfZC6hpbsFSdCKct3ieNDT1JDnD4E8wFQoxJ43YPcsTsHKRHamdFhzbQHjMWQSHX4tCD4MSZSC8M",
  "key25": "2zJTuVpAk56ZFc2hvdNTwPExzCr9mYc4xfLXfANb83iz9CED8Nu8unjSFS8BTEQbm1UZ1U981at1n7Q1bRaKXiXc",
  "key26": "4NNjiDTeQJRvW5v7qt2dq3jJSMuJuC5JWjX35cAFxP2ZziY4zrS98HpX5qbyW2dmT4r73trDFk86dpzNGakNR7om",
  "key27": "4UAnwKx83pyEx81zL7vDWbmPPjibAjtjCiuYWAVdMUzETFip3Xj6M3wVjhS9SYQPbRG1azPzTrdYhrq4puxDugpD"
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
