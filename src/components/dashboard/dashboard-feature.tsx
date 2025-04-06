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
    "5x4BZQKWWwfByKs8hEkeT6Uxmgbtrh5Kin2spagMC1gEos2HE6Br2muRcqa1cb9Df4PueY8MkgsKmAfjM1siHNKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qki4fHpjZaTG5dg5nnjT3nv1FDy7Y54rzzZnRSn38hdRGMEn1uApsJJhpimwVdv9ZUXqxVkPV9JauTNUJAFNdWh",
  "key1": "PkwFcGS3i8DNXZkES36xeAFs8PoFPkwbjPShRgwCAoMWd2Ftx2EdycWS1LjchWJijZrVQKRRaNzHxqq7uEpnrEF",
  "key2": "4uVCLsb8HZgkxKGrUHi9HVKTQ9quHdvsoHQY8zM9YhJ9ZGzEaqSiX1fj1QznnsuZ1XXdoCmX4mLMsuZdcWgwyo8M",
  "key3": "f77L5cMG4MLSJt2rE7Rphp694NRFXBpcRsJJvhR3gYfNLixTzR9ND4Ha6zHctPeY84DQwAyKYvBYqbZP4cpg8T7",
  "key4": "3SmQRwKri4saFQUyXZ1wrKh7MSEu8dUvVnSGC9mkEdkw8obaJdVbKcxcEt8KL9a2VGQT4edNWzZzqsKd55WeqDsn",
  "key5": "3i63zZSrCMkymABx3qJV7jwTEeEnXn3SEpT8cK5dxTUJiAQ4Vhtx8F6GjiUxaKrmPxC58jE5p761x9xJ9rTVpzA9",
  "key6": "4zU9Hy7vN7FBr5wT1GZa8ndeLak6zFXzvd1KxwfYoKL6KtBAqLzkFu84ufacChxmei5odwxyGU2R2nBy4eY3FYfy",
  "key7": "4ykM22BRGYnNy7kxyoLbvPDjzWEXYKtg5zr8Av9qfYQwUCAdvkN8ma3ER6qBqhaoXm8mNDwbyyBsvUuXt5fxd74S",
  "key8": "4acY1ZYLSDwRCjE31D4UBsW37mNnebkCxz7ERjVDGr9oQx94kk1L4Y8oQTMUKJ5HLoyKCQsHqdm84hCmtRhHxS8n",
  "key9": "5FVVFYiRYhWRF25ChHKyZ59cWZWzPqeiuPNtWmWhbwkqRYVkGS23Bn9hVAcKVQjbp6QoXLdg1KPM1Bzpzc9WKXh9",
  "key10": "MjSfzhwRe2Xncv9v8RrZAfFXkCeXjZbKu2KntKj3sfUbfq3xAFwSxCAMRsjtkVh3RXiihPQLgwQjkPzrP3FBzh1",
  "key11": "aLyNGty8qLC4PyFjcqYSdgENQDPVfiuhBFNnW9Ro6x9Du3HVzz6CXCKPJ4BrVpRD8UBkgecU21R8C1aDBGqt6Pz",
  "key12": "2Rnt573xCV5Xj6Mta6e4uaDGXaBZHyj818wX79e12wZVMYRNvWpcHoLweDyarTUpNwn1YuhF8wWpqAWrRpZmfpyz",
  "key13": "3RiuD4RjfnrCeNVf6ZhzqyMBunhf4KRGnPBowXeAt1pEq8PanYkTx3sYmEQ1JCjwwdAsNNUbvP9utNsb9gxjNjmv",
  "key14": "4PecVW6KYTWkyVniDM9pmxUfe1Nj9CUQc9ikSGZFoQY6kjkBbzmmnTGeEYSb8uv1X2mBYzX85EwdsRxqULkDQjCP",
  "key15": "zHrGuzGzgu8bBMvV6b2PsK51W1uaN7Kd74NFgDTE87GQ4FWiXHgBfi3LqUXEyYUsaVhZT1rSz1R3qZWAaaGK5ey",
  "key16": "3PpE8VFT5kBb2vBJjNcyN6PfxLmf9fNYTx8z95z29dY1ovVg9wupPDr7z4FWUAg1XwCZJSzarNBmm3kfpfh1pwUK",
  "key17": "4zXYGnhzSXZiHN9brfjAsXypoBVdz5rwNmPmEGrnEdYjWmkmUmdK91Vj6UcL8eBtCJRdJmR9R4YHGvFzQ3cX3qU5",
  "key18": "3QH3d6UXAdMYUAthEHhTKDWw747R1JvTRRaboRA6dhNmqs2qsVt6gQsGjRQqxqqWYaAg9Mt5yoWZeyNuwBTBc1fH",
  "key19": "3bFzupySiqDJfHhNBrfYAMmJm8GBzkNm9Go47JuDUCtHfSJeaPCF6cFRBWQ3mQgg5YmeWZcbFLR2irWTy2auZGiv",
  "key20": "5SHsfnX3xf8ERodxSVVNvStZHstnnraxk57CM2uSyGhQEDap9QqbdPjQRdDm8THXsaGKiV2KEU16xqVZY1TXH87K",
  "key21": "QMoL6qPGT51NZHNxTpqxCA2E7FSTitjCVWYBk5ekhNk2yAjpW5WbgBvDqVpxkSUpnBkhWjNSJDQfN1BfujtGfno",
  "key22": "5yuBANWDDsfrmypQDTzDSFqRyVwE6SL7VDPuAxJ1fiocMzXWcWCE8Zoa9P6dbasNffmKV5mKGSbN7wRCTEyAMhei",
  "key23": "3WdvEH4LjB3bvrVwBn358cQHEGetXBahsGvAyyn3jVzCFy4w5EtP2nFCpRZq225g29EzkfoLn2BGQZQie4e5PtwG",
  "key24": "244MKyZeKFd1fhTTnVnAQzikiGG19XpMzFf7hxEiMdfL8tG3UY74xJRHHA8SpnBzy7WQagwx32Wj3wJDG9jXpj7J",
  "key25": "5ZfTxthJ8SJT2R9g4b6sgsKK8hDDfAiWUs2dK1A7ZwUELFzEXN68dZ1YpPTsBiKzVCVjKGLFrAXfbpe8FAPCgstD",
  "key26": "4B97ze1TJXh1FSzrYDkR4uq5zKDmNzXY56JCSgibvjyKqGxUkDgbpK2ETyTVode9JavxvXE2yTBfTR7NfUd5NSzg",
  "key27": "5T3fcY3fcTd7oupG6oyipFcaEuAj2LJNGZs6dS2pUsbiKGhS7ELW2zCNTGjfhvU9qRcmZEqCmUDuzSgMStWCxnN2",
  "key28": "7agN7yQ6gPn6kSFUHJuiaGXfrXArry5fNpuezo4Nnmbgktu1SHDFXhq2RCgL3CLh1R2a2xbqXcTmgkTivFfGwT8",
  "key29": "5FXJBnunhqXrvkffcfzqzv3hvy51LnT5bpSvdtBsbbYCg7NExsYE5hoz8DKk75oXRK8jrEK3C3S1J567yPfPqPKh",
  "key30": "45CZSLfpu6Xndu94VeHmwxV6vYVXUEUidJ4dY6dzd32t7dUdWDjZer1hrc9HgYVCDWs2sdzEDD19qdgznqVrNhYo",
  "key31": "594oukwFB7ST3gp12FVRf3Z68yivJARSs4DvvSFkWY1XjY3u9n3mKAL38T3e3jkbK1uQHE7uaVSUATkjkEcYjfRo",
  "key32": "nPQci46tiDAUJ4N9kWPcUHsEJgwbWQx41JsfmQTWd2eQGMgD5wQ4Bi63aZEZ4cb5MXCjGZxnmjYbnXB2567CSyz",
  "key33": "3Chq9y6juShCfx3WsDEc2PFbnHdvZ6iRTDovDYLc1fuKGraKNt8y1SzopmvraNsrGWyDkk2Ve43rRc1kEzX1jqm2",
  "key34": "3QtKQwqJH7s9uezsR3SiaqphjzoDtDUnvzQiCfJkXAn1uFVBxKE39pwFwcU5jSZgW4Vx5NJwU4yGeE8xDY5YiBon",
  "key35": "4qVMTrgCVCj2JBfENmorWfymVbZzrco4VsUHzivQ5DaxenqpY3UUdHksrKEHd8SL3uu1mvkKTMXyp4ZvhAL7E2Rd"
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
