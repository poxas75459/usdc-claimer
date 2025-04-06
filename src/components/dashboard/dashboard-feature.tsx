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
    "3fuaayuMpmDn3HUpmPjrA6YfRbSn3KcYLeice6kDMN1YPcoV3sMJqCmbUr8A44HjkrFhPCgrA3QrZhEBE1MF7exx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZFVSQ27ki5eaJwSCuxZR4YACHiyAc6N9DScU8u48cqJg4qbf1BXXTZepmt55kLLJSFJkBGWpJXgE8TJXjbZJW5y",
  "key1": "pRDHrUJ2VaQTfAmYgKyXyEpDBBZEA41eNFbuDiJWKebT79i4m5LzMcgHUujZoests8P33KQjG8DrX3VSfshMhgP",
  "key2": "4jF9EAxiTYj7Td2oMPToftcTRSoJgqzmwBAeGezFJXvDzZdXieEcvfEYykWu9CY8QYX5QJpx6iQr45ZHo3AaaWxQ",
  "key3": "23vWpf642kuMSJ3eTFSPNq5JUxQEMqkAsQDQVCLmL91yN1CixGjShbaADvyx5eDvx7uHdFqQQqrTikapaQ9G9PfD",
  "key4": "5mm6vizzAi7qBGwhJvnMyP2gn6mewio9S9tBcMRCvo7jmdjLRGTWFHJoQqbUPfZKhS3eHfvtGYvnDakCYwUMKjsx",
  "key5": "Ujo2G9UY2XTqRRpchxQkfXqxSuHm5Y5j5NbDDagiqamoTbwsxLB1E5ybHxEtaYNPquUq55e5CUvPk32QnFUD8tb",
  "key6": "2p68UAV8XL4ZR58czWDx1DZkukuSYPMb8cu9cLCw8nA1yWhA2ab9cgBqZPt3DJdWhqWXeefvgKWGL2EvwB8T7gNZ",
  "key7": "5YvvCz7K5WguoJCFRGntBeR8pmPEv6xuoxYmkPpyGoNY7e9KTecUdpsoMkvJkMaEGPT8LT7SJ9L2ZN8U9ZnHhy4C",
  "key8": "6jhS1zcy3NLY8HtPjyXa48GgjvVy9sKND7kq4mhrHLfSL7hMSXVvbgTjVRzLiYCTuWvbk88j6UJhpdyzo4z2LWz",
  "key9": "23Qk1dzaWskGzb7UnT8WzSCpR9PK8G2GfmnSQVHQfgYVFkRnVstTK4f3GK6GcganzbZRmtQ76BPefRuCtD9WTe5X",
  "key10": "66TnLSPm2yA7NJmS6QSA9acN8JxbduifZUPCRE1wwRC11pNq1VSDo8nZV5AEfa9egApWHhcs6h8DjDYjPhc9Fw66",
  "key11": "2qMMWisJkkcfCPGxMnp39dQsLugpoAeWGHiW9BaRxDYQQpk1VhNW6j4LtobXt3gaUv6reSVSa9Af7YMsi177nrD6",
  "key12": "4z4TfQ3PRM1DYgpGxWyw1av3J3V14q9Te1gAK1Vdq7uwkbMVebWJLLMxexCXvuuAntBicGLSZcNrwwnz971vdcjP",
  "key13": "BMV9K1HTJPuoLVANAGKfsZjNWjHXBkuunXPbfC2PMHNWrqF77RyxAoRaiBaP9Q56NvGHEmn1qvqApyBRdF2uLvJ",
  "key14": "4jVruwjxqNeMhbJ8zh4XanzQKKa4bjNyJNCCxBoJtHqQiiMWAbjmhFjuPxoxZD2PFhemGdkWkDzpHonA8gafpYuU",
  "key15": "4oXktL9WRr5KZSYB3HJeVpf4oLkGaEYagNCWhSwqv8Vy8Q7trSKNQbSorvpsmCWhQ3ZVodAGgNewq3D74oBziy34",
  "key16": "2vMtMD67UUCFCSXuqAR8beA24zobiaAVYPJ3VGiNgS9FwTRJnjQegtoGL8Lu3fDjfHYZG6y2pECA5tPGwVU6h4ks",
  "key17": "PJHQbgSCssZD1HZJJEBUaHrgQ8vkxXR1zCp4aNxHgvoJaD1P1GryYxCCiDbvs8NAvJGEihPoSGnNw9ZdCTwz3K7",
  "key18": "4JtBY56aUaVScbsrFEXJc73f4Sy7G3cVx2PigegCvfCTVPQSea2vyror1St7Xj3FWHmC5fbQ3AA2iGa4aBZgH4E7",
  "key19": "4Q2Nvb43mcE8RD4BoZmXRJzWdmiVMAZQMauh2re4j9871ZmpVS5aChX2B2xGFDDjcewqkwMG7KSXjopUy1aXrQcw",
  "key20": "ypNPKvQAvf4YSe6C3bLEBJnXjcQMatix6EX1wA1QuGj8BSs46rhGj2m5Kbx43ccSoEwUUhnnF9LrCXZ3UCad5T2",
  "key21": "3WoUPmEhKVkEnqLEKrobdomA7Hz6tsrj8nJNarLJ8yJNG9XQTPH22QYqMKEwUEz16yxZgGDUXbHiuLqALL8UZiCH",
  "key22": "63cW9T5TcJKJ8aXtH5NcEt2oatKyXzVvo1Bk7RBWcBMaMSw7LcBQYYdtCghtsJaPC5Y94D59Mo2PbdEuG8FKu1ik",
  "key23": "61QRC3nU7k29VmiqfCNJHRKAHqy62KDjBnYWMoUEXQveyMWTMfUrFJb17VFTk1d12d6duGCiyPVMTtXaDtjHLCuF",
  "key24": "55nA8VS6j8VfMyd4w5E2xRdxVzmu9rmyS7rip1izP7MrujxrW2q7vLKYmN6eZ3WJSQZNzypNyB1f58adRiqJosJw",
  "key25": "5imcMZppmtds6Ck3FnkwcKGvbZ2fm5N3oi3pp5ijoqNXEKPR1HtUqe1G3QNsiUqjvLKQyrwnEopdcMgAzBGnhfsq",
  "key26": "ckNnK24D2rWWh5kR32w5EJUctnk1gP9uL3xoxLAw5GE6J72fCeThL2a4zBC3gdkPgMDqoSE3PKFTD676vMJDJoA",
  "key27": "4WfWYzeF5PQBQc6EAB7X4KGqvX2C6z5o3SfR4PF42fbibwNWkyavJT6XL59cHC8HNwzWVy3BHNZukjPz9NeSoS92",
  "key28": "3b3xiV3tXATMc4nZ46D1i3u62CsM4jq9dLWdqbhkedUMFpHWbwwtULFC5ZtgUgp6z5qTDT8FmX1hLD45jTxMaKZm",
  "key29": "5rqtvE9EaARYhMnQA3qGePziUzwya9pZQRBUu2rxG9Q1Z7oajL6a3VKLp54qFqiipuTrESc4qKWm2tuJ25Awhb6C",
  "key30": "4F2BEzXFyBjo7La8TLcbsr5KwvTZ61zDZvJTReoTX4Gm1ramwxj4yPeGshxpufDL8SwHuqGdhVSMU2mojM38DQK2",
  "key31": "55qZpGnLPNjxmRARWGK13qnkoEpUyeTHtyTwL9qZ8ci5kC7fNfJUiNq2R6G2P9xZJkTuQMSgDhaKGQ6kGrh5MAqf",
  "key32": "3ySX9UJnurSAbf1kHHduDRLrt4MvXfuEhYhhmY1ybJ22UzwZyXH3ZBabBYP1aajD7JfjG4T21vqtexaeRmyeeT3L",
  "key33": "ZtMATgv2YAEo1EVPfQE5QvWbAT61EM6pZXRsrkWuu1jqUZCBfy1cjSm71u2xqoMKfH66eFoYu5XNQKqxT8rRChc",
  "key34": "2e1zazhYAQdpZ7cHu9rnVxoNLwXtUZ7egn2pwiQ9RE3fyq7ux6A5vgBVDJjhVTVocDeA5TjsPvygzgVKVMMYDApr",
  "key35": "4qKs8WL4QYkwGiqUNwTZjVLtp4LdH6qDHg11RJVNRYq766X5Dzt52aQsHCXb3Sa9dmziQtxa6rkdyt8H2Lz5m6sW",
  "key36": "5DB2K7Me656DxgwSgYHiF4JuqFkBzKMrJ39g6sXSYMzw194dnefbbMAPc9F1rwXxkrKwkGJfmNiWfBEJ3JYHPRf7",
  "key37": "3maagve1z1WNMLMBE1eRvCKhKcgvAmtAM72MGh2vdzBh4D1X4d5XQbtTV1gtDSjEbuo4nkgub6d9K58UoUJk5yx8",
  "key38": "3viHb5DTm6vGbeM1ctfMWMWB23o357DFMc3XN8bnZPB1zMmL4w6BTBHQu5pNQaWHCXgZ2DkuJN9LcuxmpDmPRyfb",
  "key39": "3UZLy7Ng4u5eokpgCvKAQP2JMHnDfWTnuCzre4QoHzqLR691TDww2f7cEHwFo95uLSiVcJhUia2Z3jhy23D9mMvT",
  "key40": "wd9bTEYHVb23xP1QLCehkho7UERT5MmycjBXawo53ZrbEHQgLfZCoiAYKP8iUVGxokLspKos3wLojfPCXhZMNHE",
  "key41": "2qczDxNezCSosW9tEv92MfLb7vAswMSSgorqai4DACymTVmWZ4TRVg1fwWdfZdxhXEheyDhazUSaYJ5XW4BUPBns",
  "key42": "5gCmSF9EKAeGXB7Rv8vEoF2a3RRGDpMbxMGfE3oi1YPd4v9fakdz6qaSrsT2wdj1Km1TY5gfujoPDowf3yEy2SL3",
  "key43": "2med8Y564gLMvnnECcRYJekx6f3kC35jGQqWidX3SGzqvf92vWGpctwyaugqagLAe4yBhoaeuaatHmpffUDqdqU4",
  "key44": "44gngM5uMTNX1v3yybR5WRCE1c6LbYPXgw7i7AbHHk6rEauPkeCif7AiN8iVAtM8VQz71e5ZNP7FvKPuqGdg59YW",
  "key45": "4KcpAs2bW5bApsTsizmzYtsx2DPCJtymxEJCbBNG5jMBf9NQij8oUYx9hpBgoh5PsiTXiTkgnzdZpyBwU8uHti9S",
  "key46": "52jbeyXZt7UthLLp2eeHKC7oNQ4yj2oqAH7wijdtXaoZcNUHaCBgNHfVFmKVKt4D1MMttfVvthHkhuCnnR7pP2iS"
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
