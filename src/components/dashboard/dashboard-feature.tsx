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
    "22UgQ2duPTZAT26FDib8hd1hREKKqEPUf3iZyyfJffoJ1Ydo5wz2UNDxiHFkuXuQpSTHZBbEYAgFFjYbuAzBcvCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1EFN3bmHicsbopNAA7CR1Fawpfxkd9bojC2xtJTeb4wXmoKeVEvi5wJsydbTjQJ2459NSMgLGrQcTq5xFiiqXL",
  "key1": "H4sEqfu8id7c8BBoooKipXWyz6vBnctPVQkENwPU2iGw8ues5mPrGYQGnxUm1ToFzuXVVKyzrSFT2v5QXD5EBuw",
  "key2": "oCXWsSwruXzrFLRBxTsaiZ9CArRc39shvwX3EzmunwpftP1iZ6chez8HxfgUa8FBdLL1RBSgb1hXcnqDLnR86Mu",
  "key3": "3xRWWspsK5sWNK4iDhC46yYZKMtH6B7AV26AomRJGjan4y5y5qpMTthSdLqTFyL1v4V32RtTyF7et1xmHht6iPuR",
  "key4": "yZ4uBDxr2wsHhZ6pFooRzxsFvTHtzLr65cKX5KPjP5jFrMdvJhyTRCfEMkGQQnW5SoDsXgP9uWrp4NUFu7pNrA5",
  "key5": "4i11FG6N2AGDUXVgTrwQAqScmP9MKv82C3VG1mRqeLyyEyRoXp6rKzfVW4UBuSNSBJaBEsJoz3ptYvQboqy6mANv",
  "key6": "3aCGgun5NUJ7mWNqu9xQmr9vuyPo1vwcszdXuyUBjR2gjAC6XTPh19VwYpKNgR3NF3yue16LcRRaVRprwYpnkLHp",
  "key7": "2sL3efxFhnMFPcGzW9F3cSnPD5J6yBsoGEt9V8L1ukj46t94vK6iuRYaQZDUatYyzAZoym5jF5KEmBEwQABTzFi8",
  "key8": "5UL7zoCavJBeSXBtp2dkX9YFKZ5ExPgaBQ7RBBPzXC6Siy9yfbLZx71B6AbZNEKxygS5vcMDMB4JXERLtEe53fgX",
  "key9": "44KFbnbTC6NbXXNjqBe7ieQ4Vy8LvcwzjrkVcNd4xxLbwWaZqL45Y8HDqzwEx56w5cpt9zApDzM9rwjTv9YKigxL",
  "key10": "4bQkQWqzoeJaFDiqeMoRtYrKkTiMtKetG59JQH3wuwkwmz3GuSRQJLXrBfySiUjmctzsdcrYij36x5XF77zVQ8ha",
  "key11": "3duNvuiLbfn5YCLbSaUAWNks7TAXq6D5J5XGeBuafEJ3ZQ2ssAY45aXssZ8JUfunF4X68eoJFQKJ9W5KkPxCGyiq",
  "key12": "5S1RyBJNTGDTFwJrV1qQsA2t9nnZ3Z5TNbE5g79KHHc6Jhq9K1wEBQCLyCqrLZ3NeMcyKJKdrFS16K5wecgFqzhf",
  "key13": "2RJdRx71orS8KHKRF3kd6sKKz2kVyEwycFMf3v2CSHEUiaYt94SYrB4CHTqzv74gHeMM3UhvCKxusDb1SpBiTLVT",
  "key14": "22Cq4L4JtyFTCsHFdamoHD2bhEW1A9bka6nM5qDWodkLd49pXQdaAfZQB5D484Jdo4uAbkk3D1sn3wjvf3re1Y3X",
  "key15": "Wx2YKCumgXoDMT6ntftbxgdKvZcSND6wM4LAFkmQYWsbh9gFLDzKaaj9kt6obA6pV8AP2h53FqsMJD2LeGjxJZd",
  "key16": "cd7W4a8pJ7t8G4wDhRKS3FK6Yk3bqeNeYeEEDBQUWHfRd7vJ6WzfvczpGCqtJ9d38ufmJveR9Rs168JM8VV7zo1",
  "key17": "56t9H9gt7PMgfLxP8chhf6DCwirbnLDbsCyXqVfbts1Dje674Pqd2XmCTKdnKonPBdv9NrvnLGyPuTikfBihcPWE",
  "key18": "ft8CygNvSHJwfRKNxq6UbZr2ya7MiJLWniPxuMJNxzQ1S1BKvbcA9PHyKLweKTgWEbAJ3JRAnuQLrYNucTmEYhF",
  "key19": "5x2i26uDDvq11hNwEYmMcSJnbfn9Pi7eXwVXCk3Fj1HQUgirteEAD9vPkScXqcfyFx8X85reMbVo44uQJfKYarHw",
  "key20": "2jcTXYjwZYbNVQWLwNsuYfRSMPVLBnpzZM1C3eRVqdB3WmY82mKgvMRdxXnTJzaeDpzA5WCU6kpAFxp6m8LxEwU2",
  "key21": "3K7kY2ko7xn6xDorUnZikZBzdDKpCi1YbEovyZfMkzha9zEVT2WUHs53y3ksGL6JncZBkg52UQM3NQScBXh2VvXd",
  "key22": "5Rca8CwvX5camLS6aEcddUfSo6gHnR58NkyrpMU9Pm9WQVKWeLo5g7j2ojxjyFcTvamHWnreJGFQWMRyfiBUZci4",
  "key23": "5XnuriWNuahv4RdaF2s2S4y3ZBsbMpwXqsVej5NeBuov5wRBf5jqYGKtWGwEdkdwZLugg4sDhsMd2s4L5m26wY3C",
  "key24": "3wqEABPF8UXV8CAv6EDHnccrAU1bAPsWbvyDpL6KZYxyRKXr9hY9229YPtP7ikaQk1u8sNA9rLoWZBs79ho9qPz5",
  "key25": "2Y46bpK4vCdy5bTMCP1ofnAcSfKJYytwpmV2aGCEx7WZmQmjC9me56KUqtMtmj9o9MVfiUHdYc6VFqRsAgTDcegk",
  "key26": "5t8CkyLEmoNmaEPGTgexfjMRChKeVscnpwzW5RgqMB3qKD1jDNNb5Fwqsp4evaDDXJHnQ5hkHAVysDoxWpcxaHfW",
  "key27": "K3N1sbrH5AyirQqKRBRkbwzrJpDpPQpNUMMCMNPS3fwibHgLDec3mtQBMDAEQ7d3KH6qa6tb2NNppTTn1ahQsXe",
  "key28": "56kN5u5YeZtRHx9yX3pv587uixjxdUiSzwCQhfgiD2ex3PDRtaYfPAqf2u6iQ4vwktUAJSpTXU1YtBY28B2xVnGW",
  "key29": "3WU6XnAzH1Frd1finhTtDnQaXufXL8qDN54q8RDdjD76EYz78Umm4hnxm5LXv5xTAe5Qh9eNtwHGcvcUktvgnnf8",
  "key30": "2ZL19Tz1r4eg46L9MWXFKZmqmC3waLsWTnjXGibsTZigBeC8oR3HvCHPVL1mo9Pw3ACuMJ8ErDax5kyA4dSWQCmH",
  "key31": "2nj2KXH58qpbjxCsyx9pAuHpeN86uGQuq4gxCu4FGvLcYc5DsKmG3oLgcjfhXcpgYq3sB7L2mfjh9naCmNTkYTr1",
  "key32": "3uGwS7aSGj1DY2cMQV4zZ2p2ogr4oRQ4tcgKB8n7a7MoDZsS4iDc4DAf6AFgjcVbEYU3oVEvbQN6ou4qTEcBavsF",
  "key33": "4p2GNCUHjuCmKWVjpXr1def1eiZpzxtcaN7Zw8qPzYKFvKZJQvbcNFvKymktLaWFu38PvQgiW8d34tTsVDis3eTB",
  "key34": "4nNmwWek3D5jWD4pDWVxer6DMk1HzvjJuGQgDy1iP4R9LUZE3TJhHwwJ5tUba7VWi9Yncoh8ZdGDqkpYVJmZBoFA",
  "key35": "4683Ntg6DjyHvUR4Awune4aQLZFLtCGVc6nQnuHWpifehMpnN89xMByd7349FJamdd7KnQeasq1FWve3pcjorhuX",
  "key36": "asq4HmufhPh1rtz4UrmQjHs5dARzLveaWyNBMiXy41C6veZ6cGajTJGWnuQ3EpzDrsBFgvGNjKFDmo9Ejrr2Lh5",
  "key37": "4EgkcqqEyEhG5WwDVfXGyUmfss2ZK45Z291f2YE5BMizWYsMZM8qJ5d2k66GcrapAkvuNSp2mbJxbTsFbT3MxFmq",
  "key38": "5CYpnCyUeNpypjAoij9JGNyeZueXFs2NLSJCkN7hcBMKartYhu5peppGsYdoefJ8HDxKEH9n5ufLpnuPoxQ5iVLu",
  "key39": "4hjCBcVRNLJFSiXUfbZpZSPgvDi1fFtRFB9ZgbCypjVqUTc4m4jLo8QUEnMd42Mh5T4iwUiqD6fTaJYSx3ZWkMVn",
  "key40": "UjhtqykGMhY3mZF7SyKzvcR2Q9zeizgKo4M51sP8Aa52Ym6bE3wjz2m9sXZ5rES9DDvv4fj2ujwqDYjFm5FUV3o",
  "key41": "2HZ73eLyYRh78EHF7yxU93N8jx7FDYSQSDNsTkVE45JjPHPFS3R1Wyc7r8QAzRV7jbaw4SmsN9Bgxb3JsC8gnCrp",
  "key42": "2gehWWYGxsUN9Hk57WvVjpYAjMrpx49gqdDD8BMeoz4wJpTYqHFNQy4X84jAA8VLBmTV4H7D1XKAbP7XvgkHqMtz",
  "key43": "5XvNaGLeDhc3Jj3jo6r1HeSrBfByyS66jz1C7in9NHjrPCVpZnfhjmQj5AaETXEU6AqPJcKxJrKyw4xvU2Rjt1qD",
  "key44": "5HTWddQckupkAq9WaCKYxX9YMXGPi6ZX7HhBKUTb24q3s1tp9Lnauda8xtX8DypFX2y5WeLFTamtMFhg1T6uaq1s"
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
