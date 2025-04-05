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
    "3769A5DWzKpkG6GDPeQfGwVRi9tnwo73YzXp2ST9AwJPhweuhbDCYXLdpVogx5vTHAoEPf94abe1L8afrEZpKi42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kSLTqiccCCFbqYwEP5mV6VhctezCjaZ5m6uxmHKQecs6tPt1Qn8zXVn17Fb7LiZrf25uCDWYTCNQKo2tyAJwdXA",
  "key1": "5Taap2pGqVsPF8G1NttefcCiiBXw2wa2dVW2wsXd9C8KwLFShqipZc1a6JoTtsD7U5B7RakcxTNAaaYx9TkjxFrA",
  "key2": "2nB6ZYHDRD9jkzLoo2zowWk5wXXSP4bqN81upamwuYFLS74GxQoVAcS2rPbNLLRXC9gk18W4RwHETjtYhgCsY5ZJ",
  "key3": "3WvHd8DDPtWURyRPdayEvSQ3f9CQpwwNFAWkkEQeNPfM4SZzrApBUxkBsqcPmMAYDwNuqMTETMKdtg4vErRB6WoQ",
  "key4": "2RmPUJMaf9EZqquVhgUo13utqFeMBhBEynmbEPqpkDhk2qSvUn9KkWmYJQHULydiyut5bSyEFx9FSZwhwknudraf",
  "key5": "5SGCgrM3nFqPMnWokD2M22bdmVvhcMCUqp4Vdbw1e8Q1gBCZHUPHtQtq8kXonrS9MJwnd29fd1fX6qFNzy5ppaaE",
  "key6": "nT6eTsZGC4ybBHXnBnrZ6QNAhfLTmgqKE4q2wdHHKZx8vhkanPUyMPDhYvgAgsGViDo8J89NxssHWZCPRkNbjTW",
  "key7": "226P1HJPjYn9S5416NNXyRx2G9ywGJxZC6dAZ1ShE6xRPdJT9568NMfvL2CBXkmo8Qg8xC4XzDiHoE181Z6b1HKK",
  "key8": "4YdqeMDow4B13hvd2aUpB2fxdRkRJRcafg9wy8sSstFMySWGDH6Q9wE28gEcPqkiNf1WsyKQYnWpnPx98jSXhcaS",
  "key9": "eUJ1S4nChPoR5faE1HjgQFLnnNWyuuwJsXXCLZWWyAYn5LZkxGiR8pX6ieozHWVtbbnzf4wKYAqvtfhuZHgSZnH",
  "key10": "43Ru6Qq3cqyHFQDiMeLd2ArUnTeseFPBuYNwtjjC6SenMF35pLYcm445wG2Xr2GCS5LoE4rVVUXbonJ622zgk4WT",
  "key11": "56Zo8z8JdZpqeH65pMksLerskqP3WcksRHECphBpqcFgx5NCT9yoCh5SUhrsYeA9VdqN1F6GsGPviTrHzy6dga39",
  "key12": "5yspR7b2fZoYHvywYn9stQtuCsWg7kLtYtyp6JHpjhs43mCPnVqebjupVJj4zj6HS8NJGwVSCb9N5aXh3womnY93",
  "key13": "voufxuc7ouW8pEP1k69giJr3xGUo5RzZeEq8YLvZVNF7Ama59smksNVp9jRvNatngaZW6p52QKge7G6r6PX5s8n",
  "key14": "3f7KZ5dVTPBTUec8eG4DGv7uFQFi93y5i6VsMMDoPyXbhHrXY6utb5rjwkv7ekp7uJgctNjqoVzwA5ADPvK5FLGJ",
  "key15": "3eJuSg4ph5YT284pNWrDEVdARNjHFNwqq1KgtG7KSMG61QQEexTHc95KT4jociDMJCRurhBcxwC3oVjkvsR5HkDB",
  "key16": "3vdVjWfDVDRWUH8xHvFyYHvg42hLQUmvXBRjscaX5BbSConFfvj1KhqgnbELq6kb52zgHdYikDAbje77XtomcakX",
  "key17": "3BXKM9E4mD3HYjXkMigWLNytbfjeTmBXp4FT3Q9jwrfaSSQ1HdzCKbTDtFvmEVZzkXyFDfYNf87EfaRrK5LWiTeG",
  "key18": "5HYXo6BjqusuBiCcx7Zk6TSavJ81PPptxxbNzwrXdidii2qxW1eTVVCXqumYz339iXcexxUbWgB8FhYxB29KhQTk",
  "key19": "4YqE7Hv9RoEtZXiebsjb4rko1UvfP36SqcYDtQfQFnPcYTFV9TmLUasiZ8zanp5Xiod1th53cspMDse1Qz5kRjz8",
  "key20": "4GYSfYHrRLYQdbXc8UpR6gxEPakjKw9QctEMW7ktuiw2wVkF3MqxvGiXyfLGCSrAeeXmeP3diSB6tUfQAoPwtcpe",
  "key21": "4QcJG4cU1TnqmAUKWA8aJfA9tHuA6XeYT3QfoR7o7bTSikMsUsqgKkSWvPnF3xcMw1Q3pcHLLnRiUvtW2Qp9cg5d",
  "key22": "CC6TqqLgREhxeyocwBWtg7w9zz9ZcvVU7QRs2KK5bLSTJ8GKA16agwBAFEqCvyLzCBpEUSxaavEY49W5LfcCHAD",
  "key23": "X6CBcDNn72hTagM5c3S1ysHx1unL3iSk1bYzYCTpv89YZAYhQ3oTVDVbbZcmK2Z7bZTwz2AUAzFtrzD6baz9Nan",
  "key24": "34R4usm9r2siwwnoU3VPWHntGTpCbqAqaNmhSEB5nRcKdzmzhi61M3YNsGTREZ58i7FWKXXi65SvtW9Gh9HPxA7Z",
  "key25": "3dkQB7QpPkRmNEYH6gpzzcxg8A5hCM4iQNoXYiEWLeLu7A5Mim3dHC4wYeg8HSgwqQGBXR68Qmmoa8M3c8XyzsQr",
  "key26": "Poy1Qx8aznLkC6Bn5zzREDS6ETHYurtizM9mV2npvJahHLesLsgGSTmbrJFMikCzVaWXGoNExP2Hz4146zZwvCT",
  "key27": "3uZJSAgRkVXsPuM8XcvP2tntjpr5oCGXHzC24eZncPRVgX1LoLp9HJTQDoR2jbKqLpsAWZiHUVRAzg5qJUj2aYaM",
  "key28": "hAY3SQASKXxJ9fke5BGZKpRYpC9dPfmkeEDuC6b8Rt3ya7aDgNf2dEDdWGovK7qKqjrnKqNkyHqgvVTofJdrwS2",
  "key29": "48dmY9Ctdua5Y8GayFvLMnayM7S7J56GQ34uQu8jW2UVZzTZ5mNTbk4xZ14FYmXCD9cXukM19qDb2xheGjEqEwap",
  "key30": "3CBmLj5vSjWUsw4w9s5iSpxtAXfxaVjmpRucX7iXcX7NbNwiFp4o1gZjZiTX1nG55U1VzKahf48pL8o7BnPgXyH",
  "key31": "4fs4BUL8owqLJ9U3pBYWfgfAiTpnTWHQuYoKx7tCgtdJSboZhLs7sU5MF4m7MWRaJZHiB243kJ5dLAgbKy5bhcsX",
  "key32": "8LxAMyK1fYcRnUwE7vd7aNLW2TcL8P7bpaXxdgaoGL9m7ULPJgmgDuQnkFfNveTWJTfyTjJb2grv7oLB9UPC6ZV",
  "key33": "yLH6e7wtLnaromM3ecbw7aZTegA51VJNVf19NtFzyYGNPg5eaz65sg5BxXJKgvBkTWZW8vFiZQqiPXNopEub5GE",
  "key34": "5ARzWiunSg3cRAXHR7ihBjxYCnmDsReUeN2TmXVqW6iftyB4pwntcePbDTK1Qjc781m5k4ArfxrYJ26gzhKonwxQ",
  "key35": "63FoywbYCNwTeFXtdSN2k5L4Dt25Xqc8MS9Ff98ddMtxTtiUWNR6VW2DJLFJCGi8VQh3QMwCA3HF7mguaBpt5kuE",
  "key36": "3q7aZk1sFAbZbcdxYwrMMhWNhknNTLytHLLoU23QuMH43XAveBTKrfyGC93xWYfGHi3FPZ1Ptbh2MHt6Ui4raC66",
  "key37": "5m8vLoM2oZT6onJFbXvRxggu3StJFBCjiUHm8VzvMSdMUTYftMaNW2bNTR28Fp4Rg1Y9b48mX1i1QHy4DnP3eTRJ",
  "key38": "Qpa5s5ginxyNcuUD2vMmN1QvR35HDRCYaPqg5jzaXBMq29yxgRfrE5hA75ysMpvoqyRKNdXdnZWeVYbsRsJmRpE",
  "key39": "37739ZrD7Tgr7ns8KYqkWBaUXA9jBspkcML1kj3cvDuZjqDQZAHRBBppsPnyn6z5BkzCAezEo8ijpAXUSEnzrEEm",
  "key40": "5HtzarHF5MaQc2NSFfvRMj4aKbHSjKj5NrHbRSiHGFFBn1mqfcgqiKN4A98tm11HdVCMqjThraYAdUmGbwvjwU9z",
  "key41": "CppNGL4ZyK78XeTadJTMdGy8f3tfuEw4j22jpER1E1Ssue4jQes17NPYUmQxLkG73gcLvsH6o7cwb5Vf8spZE2D",
  "key42": "55iaK9axLxgsFzULw4XKPLjYGGeGvZczP4WjGVAz6iiMajUAEcbcdfwx9buj9NmPipx5bcjZvHiM7XGdtZRk8jtH",
  "key43": "2muVbTEey4oNYsj89YjxkwbJsBDNFFaRDNeU4arsbMJGYdkT7P13QZvwkJVdHCFy6VC75NUV7hvfNExTkK8QuaXZ",
  "key44": "5GYT2NY6MdKtu6H2qDAPtArYDn9yGj6wBfzZMrznSNJRXPw6Av5Qb8XB8dmbQmfTF4hDKpa4MbtQcBkv9eDCX6b5",
  "key45": "4sVr9fmVZriJs18HkuXKbAzBHege4QbK9au8xYHN9VGMrNR92UCAP2JG5fQXET4M7KEiMKm3PCuJsXYZ4VdquZeA",
  "key46": "3sTcg1GTfdAkYLbAnNiy5ma4LpUUXe84rD7dTK58QHa5mYd4PCH5bwwEDBVhdyLHdien4w5iFntcX4T6DaufyyQs"
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
