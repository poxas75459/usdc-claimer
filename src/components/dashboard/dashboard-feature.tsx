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
    "654bjSz3TGtxmmQjMv3Uzd1yB1xxvrWAMFcQsn6WESGTQdeQF9QThk5PguBRyKSXmgnbhoznYLPqKhZyHY1NWm8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RedBfA9yRtdQU46LXGbPpGV7K579yC8FXg6wD9Grd3u6aUakriuHBMUwjKemPfkB1MVeWF7whRGbGsaqGPkqciS",
  "key1": "3pWtLBwSeiWvqMpq9vt4ma36rc6Dkt3rexud9oSdovF4P16qAyXwzAGo5ND9AB75cgjP7iSQCdvuGq9DfbkuLJKN",
  "key2": "tZWkfG97uwCkxRsAHfgizWeAt9c7EKQNasfFHzBVSfqTHwicTx5yBGWwXNMAU2gbbj26Pm6XmXCHFWeTpZyNaPg",
  "key3": "dkrP1emPHhcHXMU4RHNpQyqLbMDUg8fSjmG8i2AtjkR1HE9u4P6RoTdNaxy9dgQFaVP6pVm4Wxut62hdc1MDtnH",
  "key4": "4PUAPYBB3KxAVBQZfWEP566BhoVedmGsFP7TRHRNuy69UbACfR14gVCsC4mZjfCqYJUUa8DLhQnYZrroVGj2g1kX",
  "key5": "2CQZnLbvaLggn1UbN1fPQFD8WZJgFrft1jhEGQkjF5raPdt6ByK6699thtESjbc4xnzgFwoMC4pXXMyVCW6mTR5u",
  "key6": "52dhFcLjreQhzjqBCaArvDY1waptnavnC7p3v4ACPvdfQns6Pr9F35JLGjyJ61AowCkpB121A3bh7yUcS9vHK6qA",
  "key7": "2qiWQemX5gDFLQtZ12z25QArP9rQrzCmBWwVKg7c7NWxURzsFgmbaKCxRykMxp6F8JYrycKMyj8ew7VpiZLyA1XV",
  "key8": "2igLxJpCWayE7uA4Ho9YZQDLbHPaAVDZxpWciW69eoreK2Qp5Dtxwv5GDCWwrJwpdP6iHV8q8Vbet5tf5bM9T2Up",
  "key9": "mJNTyfdGEFZAcgV4ibMcFmGmA2CR7wXGDso2mnLg7cgJ2nzsT2bEU3quwJahs9ucxnJhuB1w5xEZ1iT5FeHGuMQ",
  "key10": "5qhGieniD7dzQ5Hxf56LKf4NeJr29SoAgfwp9JsbJaCBxHwgBD1Nb8X8J4Rqv7WrTQnjTVmXSBjoDecp9TusJGhp",
  "key11": "3vfQ175Fopng9r2e2J7j6vMhbum77woPJ6RounPaj12urP2vH8MGkJA3U4NPDHUAAZdHUTPz3XKvk3KoGZnnJGdp",
  "key12": "2LZUYGZNWBjaH8s9SYaQfXVsSYrZwAuGxFwhenKFLM23q2gnGX4jgbSD667AbmHJL6tKYorptJJ8NRAnnkpKq7t3",
  "key13": "4p6HbqFAi391MBgF1QbfauXdsv5PqfZVcND1jxMCYt7xgdYvXAwpGAmoyknYJsi4F91rvk4Vd7yq3h24fQNfFZcB",
  "key14": "2fRR2uVvPpiqJ1FH3qaAQx8RazcYXwXR7KSj4Xfw92uRvH8A9VSiaCA7CPXjQpkKpmdZpZvwpw8QtYzfW17M3WFV",
  "key15": "5fiXLwVoJoS76dkTFUTxLHx5sY4q9g5dQ3EzvXD2nCivVe6CQc1eehdnVEcNSQ8ZdUmhhfBhU57txdh5QGmCE1zd",
  "key16": "pkwuZnAFSyy5GFEjSxMimwfopHupXnHVRrDJAsoY1E1YEWiLzDnsLS6CqVHfzRFgESHRLpX9mzs3AaqjcGWrSf2",
  "key17": "LyrNVrsyKL2W6BxCz22Bj9hMBhd5Kw4VsfFero9teH1tLEHAnmqHi9Hrdbm8wCagjBm2xDvW9Vf8Rqbv7NpGJ4u",
  "key18": "3TxnJnzTRHDBi4wqadgP7qNEKvQbryzpNhGhkDtYihB4UQXbSbvLtWc4Ebwprq85G2pxTGCRcJuo28tXpPZNEhXJ",
  "key19": "21VTa28hSD5wjgye8ErfBo9aASZQEUwfwB6KEyijoXoeptQxEYChZn478RjLF6xQqqfn5qrS9uqoAfWaSxvpuUVm",
  "key20": "2bajQDpRD7TPNqkznU7CcLk3CPFq6Q8MBSyxVEYEHnxnSX54ftAS2hwCiLMCvj2ujdCo5MdDRJQPDKaiVcFMsrq3",
  "key21": "MmPfvVWEbEF7icf8WZhp9eKWsTR6kgQxMmEFeHGMCv3Xd56nWeRxTg2NDJLS3s2zYpboQduMCDKCC7DpesmbZAB",
  "key22": "FHk6DXZsCk3FeVRuo3CwAgThHH92WHvFng6d4T9yHEdZWTWNXzohuw7bhycmS3Te5oMVaUh7x3XpfaAafEpYSHc",
  "key23": "3DsGD3j1Qs4owZpx6z5MynwVj4dUTRW9Kj1sJoiBxLPbN5Ey2FKKBPUUxdtkn6T3BPFJgeH4DNsCVfobdz8T5P2B",
  "key24": "7mzj2N3y3DpjHo4DSCPQdUR1gk7MGbttFNMw36gY3C1XLaWTqF8TQ6U5TeMov6gKHczMV2RVuhocwqNFyFAjGMf",
  "key25": "8GBdDfVkAqPmCpG8ZyWtL3gBWDn22Zgs6c6xVnsKniypKEqWRmg1AoEbyNBUZS6iqQiBBrhapz8mZdQVtBdkkoL",
  "key26": "5KPZLigrBY8RDLCBEmj6YSTr3pPekfNT5jzLSuuov89LnxCsipheu8hmC6317tK2RZekV6eiVw5pDMWHmtwd5NnM",
  "key27": "45BeG1p6cFAVWQHRHJoPyCKPVnbdHr1EoMAzZhPtpsub7U5ea6DxtJ8sGZDnGZKSHGLRg6QdQHNfvMzdLK2a2wqK",
  "key28": "5vWx8AWfhE1ZzerhriBgKSEg1zfQtR65ZZGjtJLrPP59knwDNCX7CfwPtdHriQHdTjkpo1AoXDKuLT2Ewz7g15Lk",
  "key29": "5QjihB4c5ZwzgM1a8FWStwJtVpgxUMKbbaz4eu2UgbjU9QPnD9EK47ptUDJ3Ui9Lv4Br2dYKVDZPo4xQDKvYjWT",
  "key30": "2SD4ZX9GHvEekYMTaR9r3JfJRc2DzpnQ6BmV8NET4gbYwH5LFtY6obV5zgwCKAx8sigXs8qFuLB3KNctmiXeW9Y1",
  "key31": "kErQWZcMCPHsiQXd8TAGiYhDJuTzVUChz23XzoXSd3i2rLECYNgkZhxb3GVjTp9Zoz1xhsXvAVB39LqZVcxiC3d",
  "key32": "3JVZgR45zt98w9dJf2YWz98DJ58pDYEuEGFmMnhmY3KqbH1pbMYkmp6UJBFyLk43DZ14aG6jcmKYAZeFcAd5e3L7",
  "key33": "3bD4Veu2QHF96xQayBHXFbScWxkdwjNYY8eWgXWegNYGJmGXCH5bBdVEv5a4XeC5Lamdup7XGdQ7GUvGFqZMrgvh",
  "key34": "3urNg3X5NghvuzQKkTrVvX1MTcxxhGKYdFw9rMbEx5sGvLgKsBR384gmkbVX1V4cEBUYvB7bsW76UiQeLSMoU6Uz",
  "key35": "PcHnawmE35GHE1DBe3ZhJFuf12GGojJ9Ukc4yNVTd9jh5PNFPzQDqEGRVMFaWLdVS1ryWvV6mdJkirTSsurtEaM",
  "key36": "41KJhngUPDRUg5TD9ExHreADnSSHKqQjt3wRHfeRdJgAkcdsZPcMoYZzAWGfXCztBVvz6S9agZVex1a5AVMzpAL6",
  "key37": "5tfU2oo67t3wW9NkUce2jUMJ3oPQXcm9o6xYxSezcpxbNbcidKY9933etrUA5iP7Jxez9PagUaRqiWqBEkqL1XbB",
  "key38": "5dL5wgHDMu26oW4BphTqYsuvPhPLuJqA1GqTAH84NxXrm3kWiDgUw8kGBVRBzB5ch2o49ZnviGrN2rfsErARimuq",
  "key39": "4CeyCuz65DqjBKwYbPyd7cP4nUhWNHQ6B6YgK8cZ7FhqMqnZpTVsGoSD43gt7SF8ifXgW9fZgs32HNN5mtenSxxT"
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
