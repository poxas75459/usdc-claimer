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
    "CS6WLDCFzEoB4jtee2nFJPcQhs3aH8r5s3m9675Xg74X16AVbDtjXaBB2ZBB9AK5gMvYmAxfUn97yiCjXAjBud7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLQpQQCfmrvG4euMxANE818Uan12rVdQjUr5xxo461UvJJRZAYovfLkDDM6vtQbPwnG4biRe6A36KqoAmQFyTnD",
  "key1": "THm2ndSzLZWHdDRZbYb3K1RxdK7VRSBqYMJtQeEZsS3fy1zTqzVawJnMitegQsArS6VhY4vBf71bCJjDnepPPRy",
  "key2": "4hgfRCfWxVuVDqPcy5QEGk1DonAfCRV9HASd4dTATFBUpfHr2YoPKEvE26B2CrCsXznC4jUHU4Mne1sjEBQY61Rn",
  "key3": "4a1YUZF9jsrAU9vSynMiBEyLTPonys8GBU9nE6vdya7JeE4gVbxbvMaLDPrrSBoAowD5wXMQNxbrZVcqcZmKxnnN",
  "key4": "2Xgr11v87LarGCPMD6WXsczdueQpBMfmCuNhjxMmUVuhXcGBBWtwU3upqtANp3s1oPjXRTQbzWdFuMdr8umHgQur",
  "key5": "3u8C3L5segihizyYbTybmWEabztmcisUuUWtcUi1EqQERVJxEQgm6YX976DojRMiaRqAepaKeFut9XkJTsQQ8nez",
  "key6": "sLYe4139E5Ej6tt4ZZWDZGnp4EozGn28L1naBYwNoaZH4B2R2qu6uwV4KwydN7wZmSSvHei3VjfqeHx9UKHZ724",
  "key7": "3x2suTcP8M3uum2rURAQ6ksfMy4XdxDxAQK35xpjdMdtsBC7MNHDSFTgVNa7oGJP4Wz7f4BM5CchU3cberbzXGGS",
  "key8": "5KYMrtuSTbM3rWYdw9hK33NHqVPLruDZ2LFzTmro811LaEGFysSxPKEjwtKynbCY14qeFAkAsNxqDv5RbcK7LN8X",
  "key9": "3kn5YXuYjtbRGa48ENotAGZ1GJ4fn6hggqnmANe6qmVVMHGgiCALTVyVDLCMQjVTFe9xPqcDjDM8oSr8VpctCTrp",
  "key10": "5EpANnzeTw2piWaQeTDURvsJAsuCbGt2GPkPUF3iiybkhmtVnBeWYnFo36Wgf76U91S4acs7d8vUZp2oboZgKCC8",
  "key11": "5NcoQDYWTDVkPN6Ffbu5Hty8GR6MBBDox19rpAghkGiS7JVfbEoKefK75VmMKRQdbCyyX6R5y9rTryVU5WemfPG2",
  "key12": "ewigqBoe5PRHKcntJEEMhCyXYa8X4DTAUTkstNgYkbGS5v3MJmDqxt88q598Fy4jrbtWmWeitwCHDqr9269x9gi",
  "key13": "634nWS1x65kgcQ5jihWtT5zFZiNAP4m3sxRR6Wx1HjXWgZ1kSP14vYkUE76hAJoNUzoARnEacqDsrEbWcfHw3CZ7",
  "key14": "552eGUEY1AuzpdaFxSi81CDkYDMxp1LYuho3Hp2DD4nuQpRGXoicFnvGwTjBVY5vbDwDko6GHdDoDdKDYmMhLrJN",
  "key15": "V6qa76imkVaiDtW9rVfEEZjr12DmBfVWJ4ykc6mEuUX6EHvTJ41rsjtTgDpWSgMuC7Z4iU8UeTx8Q9KHQTqZn59",
  "key16": "3o8WJj7k2VLNRJyjCPh2dWR9ybYW5NrVCuHb7AHgmhEi2UGx5ChSYQaoTWXEj6bSpqRyxdDh5NaAdc9Fw3kWvLPk",
  "key17": "5sLVk2U3dRhuMVdYMp13JBeXX1Nw84Qn1gDYR8xg12HKzQvbQGvvvLZYBsD6mdjCQt4YyHPDJMUuZ3JKtPCyhpe5",
  "key18": "59o383HBKUN9PBgekt6zjWfSau5y61KEfrqhBdR3rEzEF3FHWKQ8264KYQ2LWq6ppUXoKeoMi5yKDg1LG2wRmsA9",
  "key19": "51yGLbSMrj9AdvN57wjGZFgpnJwUmKEawx1FLe28eF52GzDWCfrbwkNzqS1BdiWNToZ1eA13Rgq8ra3mz5K3mTtv",
  "key20": "3PRJY7Rzb7E1H4ezmpH4hNShZ7YfnmN2WntWBdQCaSsax4mvieFy3b4z8Us6squePMjXf2hLPa8jqGfU1MXjADJo",
  "key21": "2TsDuPVShFmr8ZhgoQbt1q39STtKGT1GxSS5dftig3oJCxdzgiRvTzUUUjkZ7X8KptGRYmuSzRUrvXSTJxe3EEhH",
  "key22": "2sNKca8R7BePYAPzoQ7gas9PHQfUJkbY1gYXUSViNb9BkJSs7dGZTUcPip2vA87P8N3Cq97CaQERUJxEBoWH3Aar",
  "key23": "gxQfMPiykBpAHMrK927d7k1B5vjdGQortwt54mpb8EVbQUEdk5UQkYsVv7UtZUy5Xh2vELT1hCiUR47MoRM8nQU",
  "key24": "25aeeYx2Zu6dpPr7sQHLE26XcftJ2ULsUq6Mz5ePadp6rZGACkx5dSpHZJps1H7bvbi95bcv6cEbAMzVXbNK7JLF",
  "key25": "sPjoCDB4zQpFzZTsvS53UDrQnbxCfVAyaRe35R3y2MUBdFQX5jVTT9t2qchtt2jWLTCBb3FtoV4Vhzk8f7XCdFC",
  "key26": "42NW13HuD2a7eZ4FhyEpbFNKedGPCm1coo9QHs3XJu11P3BpWjjt3bFM2TEZEELABHE8tkB9Lqq9dcDg6uWLMShv",
  "key27": "fykwmLB5phRXYGC5tuHi8asAJXU1yNNV1RVEx85tCyWcQboANouuMgdomkdkQ4rsyuGyG8eLfCXeSmDcQ4Hx8RY",
  "key28": "55zisE5wiWCwzroXrJzKs1AE6gTQv8rRwmikd2SxntM1uekyTtANQ8zdd4N9PdJdTs3PGG3HxLQeFQhYWZR59TRo",
  "key29": "3Y5AQE2EPvioX59BgazcZmsivqR4iCPpcSWb2GkWev3DnKS3jAkHK7smLbR5u5mshxAXquAcCygLh7K8VtpoYZd1",
  "key30": "4YcAsKR9Tr1Tz3wCDaE8BvH7TnHxerKpfKq8ed9zYBmz6sXHW2Fe23wzMDeA3SpSSrMJTFwGvLoPvFFmyV8G1iiY",
  "key31": "3PTvxmLs9976dhHG5GHGx7xAwyRvQwX1nHsnmWz5aUPyKteiAzKkPTRZuPrBFVf8w261VPW8h66b4YQ3GHmHXJk3",
  "key32": "4ywpqSyKyLh9odytgeeVww2TxsQtVJTqkhyRBYBS3ehZmUQUx1fV1RsFC6Ua6aFhMRmky1uNCDpgMb6kosrUBrWK",
  "key33": "4soxXJXPPnZ8PJQFBGX3AX6Z1m6h4n2qgKoqyrriT5a62tY1gG3qm2WPbUDpyp2vByB5eCv5kHAGXi4D3776aRfU",
  "key34": "4q5iB8ZgE5guDPo1Mb6GwdNZcopJGua4u3U2rT48piVciswpkiFeDqFxWpkU5oAZeS77zRAvKd5Pkd8uuUWAphRG",
  "key35": "4NX8nfmZxvA9eFRcRkdr8e8tnXtLLCEWxbQV4CAFrwwNJpDzLYEJ9FB5VnH4jJ45aWzDqKuVZFM5uHg5LDWAJVno",
  "key36": "D3Sp5hwEaD1kxKEu3j7YMrLgTgmMXKmYDTBAu8Nzoh4mE6p8KsuyTMRKeMv7APXzAzqFrTse3ti1fFp2QyanFg6",
  "key37": "5LkFgWNnd7nm62984JCY5CszVDTpxzZk9rXWCVUsLz2SUL4rrR9K111wxw9Kpc2By6DxDFYYrDTYKhehtPWqC7KK",
  "key38": "5Xa2XfvxM5Q6vHrLfmjYkQx5eGsWkGEZyj7NbqcPZKjuknDrjfzkJtWm6oGf7H5b6jACoSnPZ2vHe2QFFyGkpK9Q",
  "key39": "4RW5bqLP6T4icfXTLujjrAaFsAr9KcEsY2g4cusPyovjZh27P9fV8mqbDVeyFzLpTgvtgomkWUp8dVKXJegjtjLJ"
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
