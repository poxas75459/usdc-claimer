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
    "54ayoz4qhZE95ZA6AKBnXYDa4ZBXw6DucEpsynRAHU25xcaZ7WXd4NmFJp3bFf1jcQ9EKp5xLthMECdrdzD16Kbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XXFpVXZzJKSpwgWnSCDXehMNn6cjAtWb8Er48yohkpcipUmzC5bgepuX8yfuPkqzwqjKXc1vkiehgzTU56C7Amy",
  "key1": "5UWRsou87yevqMkJWx5mRVcr9YdHhonem9jUKG6tJebwuHTBnKnstXyBPyiSe4HaTRvHTgh6F2Uu7MeF9xoqFarp",
  "key2": "5uafehx39ik75P6UoGqeZXtiqdgnfxwh2XLEb6KWRAHGd4BPjivT6bXeetbEcFiPAyjVvhJ5eBq4MsM4ApdRoixP",
  "key3": "2n9p82XQQFP1N3AxDA7NVe1x1Geh1J2sAFh5hkWGR7WBkJZH6kKrpdKFDyJViHAWyjstszd8Mxswd8jACDiDrDV3",
  "key4": "4Y189wackBQ2UJCAJv9X96nzjGDS5UThr1PUFC4VUcozjriZRTjhX43UhFgqijuMfghn61S3UY4n398VpabJNJaB",
  "key5": "3W6seUkbzPJ7FkPdpQUdxbkm1zgLGVAkAxcvuAQrBWLoH6ikoVAWmxCMjwoDBb2GRkFdwQ2F2L6yJymfP33a2NdT",
  "key6": "3rArhMzfWDdhyfiQCyFUU9Qt5EETGEwx2mibaHs8f4M5AWJ6qMvW9fXQ1jowTHaQzboQ7uLmieybz1fUmb9Gsrow",
  "key7": "4eBLMxPvAasKAbjZNsQf6iKjYCGPLeUZgNK9kapcM5WFpUYVKDkH1icGJT8Fgx9LhMYtdSP32KCut7eRVyGSukRp",
  "key8": "54V96UykgR5rGx3vNWNFSRBRJwNESaifb5MLnf4XQ4UdaKgd2fUnRvbCnGgg359nMwWY6LHfJauR1PBBieTS2cvi",
  "key9": "59YPoT8USSqvVySSKb6vrZcTuh8WTkhkFjh7TZhiSD26KgspntH4aeDhS6XQwD766h6x3ZnwwL9PZASedhLDZjJz",
  "key10": "3z74n6kdST71uyj6f7ozkfZArw2RwxYBbnUicqE5HRzJ88C8ia9QioNQrUVdsZj1wLy9V8553iwHPz1idk4VD3P7",
  "key11": "52qu5KuaEQouuK2HkdjkBMQBP3XtxPQayxNV3GDZR9Avu4ioQYAaD96cV4JwQBn2WAN3WGaLfJRsNdYa3uRURqHt",
  "key12": "EfeFWnu8xeM81vHUWYSE1bZSfTFiGZfWwN3JcCsmwdZwrAuWMu9bp7CpRghFiH6UpG5aEBmz4qPUoemixaGrTgC",
  "key13": "5T33DQ4CHYK4zE3tdhsWzLqiX12nXXTHRcYcibWiRifqqnnhxNnSzCmEVenKruxDspG5fhjBkhnfacmGaN7Cvej5",
  "key14": "4mXLHNY9N1G1NjhJSxTnNAF8EhEtzmUtea9a181ThQopkSyqG1rgAKXDZ5VFRHk5n7o44w5Nr2emusokCfuWEyDc",
  "key15": "29REXywEVjFto764JX4YNdXZuUruKeVVuPiwMG1vpLKNzHXGwohdeMhT5WkiuSd6yghdD11Z65uvKEZGiEeZmiE9",
  "key16": "kgmiYXKfrRc6VnMiaa3D8F95FjMng8NtePHd1vkn78TR1yjWMDD2YLQNSx75qPWpw8nXRAtxJDCTeADbzDibY59",
  "key17": "4pUcem119SWCunJVb3fZc3yHWM35eEz9xGYbe217CM6D6KWTnNGJipaZvk6VDed6Ga6NL9hKtPtBzGQ34Pv6wQFe",
  "key18": "2Sy4TBwCts2CPxHV8wp2poBr1EyByJ6ak2S9m52PJ5e2f5ZNYBiJvSHi5Vd9tSTyxQsEPPKbVWaHAEA7ccPHRLkE",
  "key19": "2ZdznZ53LWcWXfxkpAoAN862C1dhFaE93bRxpX1SuLCCTQQytJriwM8rfZ1SWbFUNxCU5Nhj1SKThaafPYg3ed6F",
  "key20": "4XvQEMjWAMRrJ2Y3FoT6524LGUff9JD95qQp7aumKVx4rhoypjWWfNhc1q4KC8NNbLyad5cLGdtQGvNrcxgepeGE",
  "key21": "5Edew6fkHq2v5XToCrNTYtsQGaS3gmBoAL75WugddumDWrpq9dPUcPDruJC1SkZrhWgVHffMSofaaQvQ1D6a1GF5",
  "key22": "2NSAMYbpDxrYSmqs6QnUHpZjkcCZdjnCUy9VZmdjxQcGYqhCAqsajMh5YMWPjk4zRiMVYB4yvxBRUi4ju64zNUPb",
  "key23": "3t75EpN2Cf8h1eckitTGs1egY2eJAaMoxLaFobrWvtvQoAZxKj7E3JviQS9AFepSFuatEoNoqoqGFfb9TXLx1FyK",
  "key24": "5fGsaK2RYWoDfgMvShMnMytwLD4f6KkP813UpPidvD5QickzxTLSWF8T2sJa2hfnwqAg5ZLMQxe2A2mEVfpreBNC",
  "key25": "3Hih8szcgDTHdYs7QnEbu4WSv9g7i3copjM2RDCBJot83m7Nd4dAcGFJujqUtbwVLT1BQ4Jcjhw71VoPfaXufQ1t",
  "key26": "4ufHbrwDqdUHQkHegkTMJpX46bp1XgkksiucJmPnR1E9i5ziMz1P6z9Ntv1WhTLCbtrhRMEzoZbUzzjwkj9u1AgT",
  "key27": "4uijAnDnxfQtWPFLXsiT5jgaLCuNerahLkGo7FR94R1MM331TB9igWzWrEv4WHEaoshxpwp77JR2d7HhgqdcAFVe",
  "key28": "3UVQpWsKNsZVBwaJPoeMk96VRu37FqiYquAvVYsoRRS7bJFKDo86gyTTHaSx3JXY1Wi58UtL55HJg5BPGQr6BdAL",
  "key29": "5jBywdztsmzGVTJXCvr3onCWsGGVYHbkCHk2Z2P4917HsStjAX7zAv9zwd3mZYLAebqCJwKo6oofvA8t3oFaLBT9",
  "key30": "2JnSXJQcLkSSMaaEv7HxHunrTvVQL4aMfk17aPLZyB4b8jndPo7jrKQ7kYT6dd4G3GNPyeppLHH4uDzQiEB995NK",
  "key31": "3QJ9KGmCE1TUiD2coM2mYexDQ5YdrZokqV211DZrLZbgYDf4nA1iS7S5VNhmJwqjukcEPag8YfNcb5rRKti7Remu",
  "key32": "5FxHw7fSjtiLjMtNz1tJdUEfLv7F8UJzXXsDCsb2B8TeGY8Jt5XJ5xDs11aNVCf8BcNm2HmQMtnDon5oqqDgMmq2",
  "key33": "4hzaWBQ7j4wReLyFui4r39uqm4Bwa6Xe32QcDVyv3FQBk5BBUEw1p8JRjQmtrLd7FmCxvqkuxZEsmxGHF5juQbFa",
  "key34": "2ipPCGKP5WbP9XKkkcSVSuCssDpPkAXNTVeAJkRoGwG8L2Xv8BtWciZJwgbAFKMYzhNZGpUYXK2dwMQn4KoF8wHr",
  "key35": "3g4nM4bC5A4a2XU1vfQWmy8WYGMmYt43hXaGccjewppyinuNUaX9ziEw1HrVZVqihqsPyn2eMJ1tZqy8ahb7ehx1",
  "key36": "4d9jd1qhFkK5kHic8fbe7Kt6px5yeo3b9vzVgvMrcsPufcYvj1uoKZEpKRAux5ZWL2QvF4SeoMkRiTR7VQqCjWsb",
  "key37": "3B8ySUp1V8MH8GAFXpZovPPT1JAiUy77UB6w4Nkzf2dcheN7aqxfGFQSqfxhBPnnrgTUBMcY8t4aKG4YdZQyPca2",
  "key38": "49vb26qydbcabAs77Fegqc96CQuxf2LgEDetXHZjfhygPnUXYZ4hVbiCnav1Y4e4MW6eycRD7RrDQriwxSnn1MT",
  "key39": "3FEtLpwDLk7yGhBGa6qBndArB8XUuVECvPGrav8N7xpZU68ZHXZbtrCCpXTBSZkGYqoVc1UpfHrMRLzZkm7tDhQJ"
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
