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
    "5LY2zwmzKZHD2zXLeB2k2bemguTSjtNzXtJMZ2fkP7uPE1j3GUHTLzMxv2fJu9MRu9aPHshQRCBPQUFQN4HSe4yo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65DJ5oHAZ89eJc9sojkGZqxN2LQsY31PnV9ztTQWJqriSuwMmkntvYBQLi59s29aYspukkgKLYgLu4f9bmFKuDJe",
  "key1": "3XTiqydvU8iPqNtpjbNaCHzFup8hgSe1SSvSLFhubKC7Ju34mBPc4ZeRVxfDuWv26yV3vuLtWCEgJGxSgGh9ggf2",
  "key2": "B14s924pcWexXfhetCkXhFu3nBWUDgYFuXmqQTxXBSccKVRrzDSbykimfvHLgA2bR5XEE2LYRPTKMmwvb8kuYZ2",
  "key3": "5ob3hxMDedwnHq6fSbDu3kppFQPX33mvmZBLvZUj5TgUSZVyAdVdtMdkLPVfig92cFVvVWvvuaCy8kV1zUjqwsrb",
  "key4": "3FPQiyTLwiWawT6XPCxLDQPaGLqHpPy27Gim2nBetXsWJCspZ1g1PJ9G949aV9JR2dk62aQFWJaZ5pd4daSRMBX7",
  "key5": "2YzmbCWwTwodb8Gxzc6nNBTr3gCDtDPDT8QyDiKeSTkuo7GHTUuFL2KAzamNNLf2BDkWeLpZZSZsUkojDwDKN7s5",
  "key6": "dXT2dXk9JvbrBgfjrhLZ4EnRTa9RJgeYCwvSDCBmMFHVysq2DtWFp8mBK3uK3Jzq9Px29ZqL52teSV6KeWDRUwS",
  "key7": "3h1tovrpDEr8iL1vmqT9dgmWSLLGuvKB387HKzreKhfAoAa47Au7x1tENZBsqi5DisUxX4zT2hDKTLmQHbxjcvJf",
  "key8": "2rLWXGxtY9iRNWevCDJTqhAWH4dHhncviFEQFixGwPSJQynp5uPDpcoZneXGEXxYgNqEe3xtBBkL1azcyLv2ZfBT",
  "key9": "3NHd6TA9UYx2kdgXob2qNYQtVmFXRtVGyeMSMZAEE8UwVJRW6gPDcyKXM2AQy1Upgc7zZ459s3Nuw6Bvu14QfRw5",
  "key10": "5dQLJvpxrcVwn75kL1h8eTtu5LCZHexDhvMrC1awqL1LiT1cLhoKSn4MwU9tzP1EYyQsU2cPxnciUhmMgVg2Px7p",
  "key11": "3wQ51mg7MAdUSYhvZ5ynjry4j7AgXScKSaWBH8vcXAPnUkbMKHp21nTq1quJBdkmCn9evKJmThYAi44xv2bqL2u3",
  "key12": "4oX3aTdX3j3gyf4tQqEyK4RViZMARiNiC6LhobVkRvC4uqtrKbMDmnh4ETNL6c1GV5b5uYUfjSvXdkHhCj4pZKif",
  "key13": "2cWXNGotViGGhs53XXpmoMgbXGaf7Xm63tp6k7gSCR9zuqHNos5i16SYrosMwGFPYDWmhXPC3Gmim61ji8s8C4iF",
  "key14": "uwTT2jW9tVenaptYEe2WTEQwwy9cy5hW9WEyLC8gEHo88ya92ebSMsyPAVVuDFhppRGB493VpafNZxxYYJd2juv",
  "key15": "2yuHPww2dibAnjg5mcVCddC9zNUZ3eWFkiadMPXiwWWCnLF2Ko76HBvyhLhyMi1PnLJt5h7P5hM2XnLyXR9bCpCf",
  "key16": "4GBEGfVRRUu3ohqyVL9vGJdP3BzvoHKAv5NP4WuQ5yaNVy9j6PtvMie9DQ7XHpeqfasy2MqUsPB1DxKQ9Do1kMVy",
  "key17": "2Uf4PH9BWhdje4h1DhnnLdmDPp1LGHEgVxfLbdDnUPp4v9xRmBHkJrAvwyZexiTpDMHWbVSwWSYMQwkyXcbqaP1L",
  "key18": "3AWR8JoYaeBfDSWKrZHzPsUhPBdSi13FdNmbaLxURZpi5CVAYFEJQ61B9zGb2VxS2EGVs6waq3Yv9oAe6p5Ua5uK",
  "key19": "5p9nygFXtDvHn1Nvw8g9TafrCoXpvADY1DLaNhs2zP1zcRgHDzPyRp2yLL8UHmWpp1yq9psueiQEoQBqLSNyJka4",
  "key20": "21A3mtrLYxv4AaszaisykpW1mzQhKx1914dyfYkaoQHv5tzf9daEdBguM41tgFmsezUJF9cKU7xZK9yiBSb3s1js",
  "key21": "3KFfKwiE1GjbrzmUhm6fEBHBPay7FUiuvg1SZ1VFzy4b8UJ3X8tXcufuKYT7f1DKo3anhAbxJ5RjCcUQbRXnfcax",
  "key22": "2ujG4R5HcLkJhTquyfKLbLn6YN3PCg73SzdnyTMJDEKgBaU6oRizxetpLmM7FZdfU82YpKtT8kKJiqttAfSuiADP",
  "key23": "2RVVMh6LS9joiivq4LHLLbkMzQoyUwKLZiYDCwncErUef68jLcLycDtwKLFRzKzgUY9oKcehuyd6zcMiozdnPfbP",
  "key24": "59FtitJTVZp4JMv6bVAhGVpQSgmLy28u8NsYnjMVMsRntycPSPooiEvwZ7FfLmsCg5nmucqbmKJFhxfX6GR28rFj",
  "key25": "5GD4RomW8bpMEQLKBqyWCqXVk5gP1gRHQvhMoo9ZYwqSyKCnDBgHKUgmwo5gda5iT8UQh9B3FGyJBCbHsC4hJVVZ",
  "key26": "4ARvcNwLhULhnLFmuduCHofMCZXgqhWpn8XGaeBetj4Dg2yJce4byomqu1ZqVbPYB6PNsnU9yWYthDftDVEj22Qh",
  "key27": "WWHHayVJrGST2HQhKd31v9QqaKy2meFMNVGihA45fjhGEeXniVEPb1mouvaMyevf8Mq7fiPSJGKhwED3bEAJJsj",
  "key28": "5N3osHBLy2KfisZtqZX2hHKWTFKMxAjrKw5C7zDESgqSvc2HKZK7233nAiJNybo4E6XbnZ4tfMy4PA3wy8DnDeJs",
  "key29": "3tmrrJmVKQDtCoTCWAV2pTnoYpTyDvhot87isdrm5coSd4vAp2bxkA279AWZTMxwBJzB3u6yhWzFuCdq16Uo4pCQ",
  "key30": "4Bx3D6erT6jiWaGazjYvX7yGDgRyE3Zwk7TsFqYur6SmBipGh53uF3sU1KYhm3iYUnq5g8u8xA3sxN9SsA831f3u",
  "key31": "3XtfkbbZbLssrWk184zr3ffASd1XqVE3zmyMx84JzzwXvLLX95HX8Wspr5YrbPkag7PJSn8Fh9mDcABwPJp1AEEZ",
  "key32": "3KgKydEs4Gyd3NV2TgBQHjcq7X2nETzHaXsatnk1CzcfHCZwTiC8ChEa7dNoZvnCW3xpexfaR5LjsdsjfYnvNkmo",
  "key33": "3xQdD5MjE8VAEW5oECxeN2GKNDPCmq3DbXFgVrMm1RPjfMUNiYRUcoXUe6Jp2tAF6UMYnEMDkm2DaXghs1bZW8FZ",
  "key34": "49V7Gg2x7NoePwkgTV6QEQNR6r4CjTsVUrX7BXSR6eBw5NhAQfYK89n81VDAYuFgorookDjzUfe3dYmbq58WHcfQ",
  "key35": "iyJwSSQfoPhfvP7AYMRuNkETN3g3NpkiqZQ83aL5re4kvUMrYx4iUztcJ6fTTrmQmZHfmvLHQe51HVhXohiNHoS",
  "key36": "4xXCBfLXfV8NNf2ssnrAufEL2Y3fG48aN1imD76j2nvbtVfd7JRKN8KSJjreriHqZgsPRasMNK8iArXhAQbWcnk6",
  "key37": "2reUrZgkhDWUDE9gqCvzg12t96SDJfM5TB7tQEQbe4fKop4QXQBAf14pmhLgKJXCkEMu8hmZt1EMuPyNnZhnGxbH",
  "key38": "QPdDnfG2cogE5nMCGNERq8dupfXh961UckfHNZivHYyg2Ad4pn7vD9TTsjVjZHA44i2vsF7xLbEEMWDidJaYgGP"
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
