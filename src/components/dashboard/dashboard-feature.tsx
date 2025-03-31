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
    "5Z9wKdHUJ947HRF3DjSuUxznx65H5YdQT2Sje4sbL1o4U3cxXj7dnFp7gwxCDLLxLhNEh34As2A1NVLj4sf4hTPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "399FEMW7QNXWMfNjGMBxibMb67fttzZTn8zzarvMbfBbUgBwM6P9ewL1PobRnuN6j5eTkepCidGDP3eF1DRPWA4K",
  "key1": "5sXWwYaBS2VF8neYX9kxyTLgAFNxg4xwRs2QVTMUgZ1no3ub6n3wNcL174SEMAwtMYRAtTUKKaJebtiinyMipv3A",
  "key2": "2P7hfJtc8nC4m5kTrDtSDTPFVXDCRVmV79k5JxCL9DPu6hC26p4cQ77QKnPtaAs2FvvpX3eUx4skCdKMui9n1vAb",
  "key3": "5sj4jNQK851fYtvuMqGNEuMZr5qCPuAwewoenyzEJrRGquDCErc37zS96b8VF8dmHDaLqewB91UXMS1NK3c5eDd4",
  "key4": "4gm1Da3MCvu95d4pa43pNvJoYg5gtrCXj5VrLUsatP5VvT4wHDjNEEFjg8BSnAm1aMa95k9GPZBCpUZe1PgDJZSr",
  "key5": "YLuJM6BCyoUJFMWTCj2mfbWpRnKftwuCp5JKahsxtKoRCtVuYeZ9iNbo7TeXDCviw2mp6oX5oFVbzyMUTrcp5pm",
  "key6": "3RVKZ2tMjLKY4yawBRyhrap9EgSyJQG9kUofohSaVGX3E6itEtzcUAQr91ZvNhdeNtZBcpdP7Q5ViBvPKSLGMR21",
  "key7": "2F3JJtzEXwqzjbRXWLJxmK2EiGBm9qAiJXkEVu2Z7deauPbDjofMqNEiamKLY9JvFTmRQq6EDkJ5poj1AvvUaByM",
  "key8": "5sbtrP8iq9gAu4tqmTMALHt79R6341grpHJ5SedwvVAxobSAawY6pfTmaZhp1EWheKTyVoTgysmLKeNrQPxo6FsJ",
  "key9": "31XbVtHeF5j3Kocn5MCJxcvbmyhc2UrHLprvPQEkz7JVBYxEFZ61oJ9cyeNVakG68VCTQC9u3zFys1badfuiho1L",
  "key10": "3KT9gRmzLk8hKhFwhKJViHvmsL3RZcMga8qdP4Vc2AfV66d3iDCtR3y9ABC6GpzJjejpwMfnVTjKVJfDbuGeazPC",
  "key11": "dqk1Rvf6BHGuCHS6r7Vwed2WP3YYntxrjEgux22oxm428TKCdu1mEaTNCUA81MNAMLByqAPuun8rqnrYJvKyyn8",
  "key12": "2BobnQbqDFhW89yaokJqh7Z7zkLG6N3e3pc5u1Qu1NNeLaEnTVMzV88ZuEdwueNy3Vn6ZJyNXicr4wKaWRnqnDmS",
  "key13": "2Uyt2pfVm1yQDUiVo6RkYFvTZuaPFNSr8cp4RYQrfW9ngtW6shat8bMj2FBhm4YohrogwAkoCV41CXDKhLEUKBn7",
  "key14": "amPGXa41NXhcTzvqnYnEbA5KJnKE68zi1S9QWZBgoLJ6CAs9UWJd1j6Zr6vU9zijyqWCgP2y59FuhiHXauyqCYp",
  "key15": "5RgZ3wmnZMRedd6m8wniGH9CU31WjakfYEZ3VYnwgJ47hiw5iLcsFxkcBLEm5X89C6gzgZtAKCabS3HqTNTa67uk",
  "key16": "22tDAM84CdQfw6JaCHdinqzMvURLHJm3Syjug7HBcUDY5VnTyHW7HoBLej4jSdHcEgrJJhSAwAXWkmxWSbK4xevP",
  "key17": "xz8KhJyAfk1r8jLT6tAog7Ef5Rs81oCXrT4aF6kTfPdnjZr2vjqS7iybN5oN3x834hVV4RBSAX4YVAkuRxPQoTD",
  "key18": "5Qw1pz8FcuHBVc8JP9U6r8DAHWrwgLJ5ViM4iQBfq37Hf7ZJ8Rv1stTN1HVpmv71Mbh7fi95o6RwXLKXpm7MQR1x",
  "key19": "5QMmrcVTpnNaGVP4sKFTf7HKDs1uf5MTnRrDzJhgSEyNAttatY2zWSEzQAoXpJqAdzYLfJeckA65oeXRJuxTMt6X",
  "key20": "5RbVjmbvceLQJkRN56u3W4R7WXsn4sP4Qm9XLMDzPDk1WB3yj3simxnqoGRbuqyn1VDTH9htjAuJkempQGgZu5cZ",
  "key21": "5PC7oT5CVXUMhFSrLQBtp782gmRowvnXipdTqcTraMkRp8qJd4TnRBXNPZru4CABuzcV7AYPbFsZdapNUXay7kXp",
  "key22": "2VuYXzMJBCSE5gCzhiv3KcXfjezUoeckFgjj9HMFqFCKVDn2UnF32DDoCRbH3M6DGDxFneK99Veja8eCEsBJwsH9",
  "key23": "55fsQZy1oiuMxm2kD74xjBRjxvfnJUhmvMhmNyDQLB3CuKTne7ygW4vgVoNbQMB5pbqsVDmnGKV7dj1gFjdeS3MD",
  "key24": "5B9EKDgdAAYkvUSK2sYDwMvM8L1KNoPZUqySDrsrvHKhTcmFxEeCx5rFqztpMUY1gNm2ZKwybr89YYmS74EYkez7",
  "key25": "3RciRWCjupEtEQaJq2kCSdMDSEygscSKNx3kHzoQLXes2ZQPH4B4cdFnNGcVbHU7x8dGmdMW5rwS2xg55qcZsf89",
  "key26": "61dJ3esfoNLSBfyP7Avsz8V9dfniC8B5gV9C5nbdEuQFqrNrK9CnCjrhXb96Bp8SNfELh32S4QMpSgzNCmnbjQ2e"
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
