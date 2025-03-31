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
    "2q3qM9TR3hrryPcui4KmKRnyFziueKn7kZpHP1ZReVUuhrsCuSrbAJCAcXAc7U6rjRyLXQskWsRWKgzzW2eecs96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZjwG3vgW1gBFPzQUs8kQhDSyk53SJKsnkd8FtE7uF6qaMyujvk8htZUjPFKwz34gdK5v9QPitVmrdvJtKrLtr7",
  "key1": "31EJxzs5fBFDHWYaho5oowYaAjYGg5SVCS3K3wVMoETCBDvCRGUE3ncXiRLbMXsJtmv5vtJKV1rLygMQgRzgSTF3",
  "key2": "HgtRQVBzxrtFiKFAGQhWFq3ms6qFJs3RTXSoGdGzkaNZbLCst4K584VkREi7YRyAmpBbV1dxQDugjkSf4vpKsJf",
  "key3": "3gPFmtRQpcPq12LxNgWvvKFFi93iPRnGhVso5f2z9e29nqQRNnyuGPf8agJh5So29HY68LSygz6Y2seGw9en9GYQ",
  "key4": "kq4tRV1wtobRbkcT82ddcAckMuc4mgzgVp6hritJTMUUTHWnw16C2jKMyY8gSJ57eJ9cTFcr3zDtGjJsjtnCHrj",
  "key5": "2LBnQqRUHEkavKRHbZWcKdBaxJVzMosnXtWFqesNmFRG8b3ZpmWMjf6ZUgtg5Pj5Hsg91ctTt6eFWpge1Mnifh2E",
  "key6": "2ewPR1uvddhCZypUXMLXTeLPaqXd2WgJ2ESwDi3cVb87XqFsPJ1skFjJ3ScKPDa8Kaf76XEfNi6vEmsJuQP7M4sk",
  "key7": "4SQpXEwC5bTAPwMuJh7iCHnTPBuw9srmWLiACx4kDHJZ22HDPkAPtfNFWaij7Hw5vCFrraPo65WRuA6bySgqpNvq",
  "key8": "5vWz4UPdCTeyJP6fQYjAfysEYTxbyF6wtVf8C1tzd4nt4Le6Vbu5raKrhQUbUmYcHfDUQCs6cQLn6dp9Tc1u7qtU",
  "key9": "65rv7grqJqagkNtvzsfB2zzfU4ocvvEt3t6uW49ji6mdjzR5Kwe9ZGkzUUkNHY3XSEE88KLiKp21o9UPcJECW41e",
  "key10": "5vJ6i5sWeZjpHRHJTMa7o7KwmnPsRagQtpJbPNRn9fCQkZqikT5jfu7avoWEXPgEELFk6jozXXXbi9jfjsQm5Kt3",
  "key11": "y92hGZmjdcjjffntpz5492Yowt9kUmXgfrGQLis3vceCWC6A4ACkTJ52XpxL13U7EtuM1s8aRSH5GunrDxPxacH",
  "key12": "18Ynzs3BYNYy4vpLnfNipQjKKFLhbojNq3UTQD8Skb1rz7tshQvKN3D3C8pjmXBCwDpM7GL2VFqEJUJs5i8JAiX",
  "key13": "5wAzViz1HNLvjEndAwYJahDRGQt3bLyXLWCxPHDs5RA5F5CQ1RToLi9h3RCqgFqUFtCiVxnKRDEtobwME9KEYrsX",
  "key14": "5pchG5nfEth5hZn9HECL8LwS9H66fdHWX8GpwpXADfxNTZYoPgMNdif4Fj3WRLhp4QMTxQYaKJ2U8id3uG1Ujs9R",
  "key15": "64yZM6DqzispZfJCRKbi6Ygin7ELa86USt6BfA1Qr7tW2rMW6jsxUzmjmAqaxxyLxuV6og2j7PJe6VwZfeLKBadA",
  "key16": "YBEsdzBG1wrGVo1Bdfx6ySgvUdvPzsSjcGkPtGd241wxJck9nckKD8tbPuqPDmJ3QTXzgcLKZYdNrse5j8jzRuk",
  "key17": "2vDfX8wDtUA4z6SZjcZ85VMDNc6CySDEgwtiTbzkTHCkUanDT2522qTCGLQxHa842QR9jGHV5YB1jLgWJgLU9nGj",
  "key18": "1V3yU8roA3e3WHWqr3nKmPEJ3YiDScv9uqi2WPMkRN1oHMmntBNnkGagHRocuoPjs1KBvZDJBrcHCDikuk8eAGB",
  "key19": "StzLbL1Het3bvuHBnxwC4oQKpUaAeeheJyqcUeazaqYPp4eTswED1t1JgmXTsebwoAmBFSiVcxTTko6zMzFD7nA",
  "key20": "5uXfg2ityQgt2EzJ5dwodsGRci6B2HY7smaq91cBSVP13gEuezVAyHvmfsgKxEPNyBzQ1yoZ6osgQ1E1iMitNcAK",
  "key21": "2f3idPGyVzADxQ8kVPL4A3rwZRkEiz7aqpyG9DXmd5t18HDcGD6auJJrE61nj8k2iS6SuxBoQniLH6ZtdFWpFTWS",
  "key22": "2HJXUnbJtpfHFqTShjmvPDe3mo95NpntF4kUhScHMUUf1Rr96gLrdAgbpnwK3cc7oQNL2Q1LWrPoHbTu7HDNNtHx",
  "key23": "4W4pCx4tZ3Mnaz4gwV6DkkJ2aQcExJBwr92Sks7zGXFBtxFMTv2tPtfudxTu33gW9VGnnFRFHmKmSj3yZgfXcqeG",
  "key24": "5VasR3mAW4XiYoGHorX56vbYP1LehsYZpjsBdLnAfC2QwBKZz593om5XiQHHJ9dMcBPJZHEB765MxXWDRDpUhzx9",
  "key25": "2L4avvhQKojhfTg34GLgu2rbw3HQA7MnRr83Jj9ggb1EfzVHNAkDweiKrjU5y7Hrgnem5cxcQ1YpycAw7nkaeU4R",
  "key26": "3EATUJgyPKVK2ftNmhdev9a1q8Xkt6sghizEQQwYCSyawVfjCngPeytHeeCuUZXnyjXjUQRoqkeF34ex7VNzD1VJ",
  "key27": "zbg4u16AsppatBhfaitMMkmE7bT5DzDDim27PttG6h3wTk4tkRYKHH8DzaSoB5d5iEGo7uxvmr88LcuyqsmKqqP",
  "key28": "4Tvh8sBoZP8CoebmeJkgf99oncMgu1RzKC9mZhViDRbLybE6XNpuPzbhCHFzr2ZYkA7H9oNopgEF6Au1NmeQT6LR",
  "key29": "3oE64QjaUPwRbLVwNGvCLUHDqWF2e3cJM8PffKCz7rxNrcypW7BEArzkANUW8hKdq7dq2xcisdWddvXkG8aoTCxG",
  "key30": "58MieCEbe1ghYRAAgrHXuYYXHJtzLP4HFXzSX48PiiEb5bx6NSJVANDEaZf44orqcgg6PcsQUXviZZXBikyvVam6",
  "key31": "322Rh3XYcqdsZVegVRMRUaS2ZL2kgcZmP46fhgeWzCF8WSvivnmmR2zsJV9y3i54PKTvajakVrZeyZcpFaWEc7es",
  "key32": "r82YgryRHU6HmXSZf6o7wjRwf5rHbC9pwU9xY9TNwTjemcSLwGriEJF3gn5sFCZZgo8C9L6Ar51exZrVGV8fGso",
  "key33": "2yw5hijUKxbPbNdGzueutNAX8hYdimnpchM4eCovUJWsGBJQb1chwriU22GSdWj4gv5vnHKm9rj8ZaPTbQZSAzki",
  "key34": "4o4dnusM9CBeLnKSc3Z1y4RKhA2z3zG9ipuE5GbzJRtCnghUUgDM8UWLwYJTr8ZXdvcNGpGxjitzWZ8equzXx9zL",
  "key35": "2ycutUVeWccwnRnWngHvAbfF61A8MU8Q9u2sgJiAmbdWSWs5gpcJstrTsm33aqCdCGS29AscDS9rKEb1ZruRi3iL",
  "key36": "2zYpwKe1U2duAucByr6vz6ZfxnW1U1QXmdiUZVhBG3bwQET8gEuHfafJtHKf8MH2ZsKzhxzTc8hhKuGncdq5BgW3"
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
