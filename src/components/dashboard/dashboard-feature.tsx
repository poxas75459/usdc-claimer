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
    "43YAstZE6w7nUBT2ZSu9FAc1d5mYXM4WFGwjhxRPkezxypFHqftESMQBvn3aCDskB6q3AURuoKxN8yV5YXKEMZKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKMKSK5tfQx538NxpYEtKityrXMkKWyn9cKznTurV6LyWq6nSEEFLETLvf4ddA8dUXZSHSUHsieGGrEHHSWtZsb",
  "key1": "5vSH5dTGikfRG557dxHa6XmLgXHpHmThY88KLRnYCdioRFn9cLv7p75ywZvvdjk96VK52rMUhTLYT3Dny8MNyKqu",
  "key2": "2EHdmUsspHdMunANT8iUttE81Ke7j5SfNffS8ZcqxyhMeXCUqmNiFXUNgQEWEuNR2ihaK53abXPpebuiW1KnBUYH",
  "key3": "28YswyvievU8E8m3DMvLfY1mDBZzfx1Wafe8iZonZ8SLa6p1rs5LUmnYM597RWJ6TF5VqUPC9XAwmucCsHgi8ui3",
  "key4": "36VwstUbh3mmK4dsB5cbX8Y4vPVkqT7VwSdCRGFN1zBeC9qBSLnkm7AGYyXJpqEAhP7jnZ747PWkXhvBmGvk5XtZ",
  "key5": "5ivQ2shDW6cAzrgzcPQe2WAQzMqEK7HvDfhfhwQk5vBRuWfBw4bWuuCzgSvaP4PFPXLYLEixjmmYMD7jd9vj7F1",
  "key6": "3uk6uT6b9ZuY2URkczdXUvvRkUgHuWaRJ4gY7PewgFFVzgBfpvJ1ddSPKNureuMb1Rc2nrngUVJD1yGGHtVLUxaj",
  "key7": "3G7S2xShFvDCPKfmZhN5HNVMXdCvnV6wp4FXiX1ZgfWhHKV7T58G9whNbPRsouSqAU5o8ptxPADbXxNfsjYWeXHT",
  "key8": "5sRo1H2JqyX87mi493yZPwADJQm6fZxdXjjwSfTm3RUsh1K4Zcp1jfprPpwbXq4823erqyzBW4w8DGd1QNfeZDUE",
  "key9": "5reENdu4bX9EJeyHq9M853J5Nf2xhsAToSHUmuCEiLiKtGTFZ25MZXyBAfBWcmmozAm6kvPKnEsgQKG5YEGSRNF2",
  "key10": "3Ry3qyrJJjiBFXXtc354HxEXHXknc8WDaMSbhXD6b5JmfYFG8ATd7MHwirmBCrQuwmmYdQgANajfrDArjNLTAEkF",
  "key11": "3DcsxcfkqsNBqPuzH5JhE8s1TYii3Vb8hWncYymzMBZPTJFWF3r6Sj7nkZqLFCGvDk4ACEgX5TPTqJZZ3sYth17R",
  "key12": "4gvyjAo8sfsyyfmGoTe11jnXByLU23GEVL3qaGZqvAnMWH1DxGuvsE6gxyt9S8iswz1BGqKw4mDqQwtH1oJn87oi",
  "key13": "Eczyh8v2W9GdcmTYLQBDKHKpTk9vNWURtLokskXmgjmcpzqBd3jeAoDM3imtEZD1mj9VAzzheGQGL9jczm4semU",
  "key14": "2N1fKngHQdsdZuXLWvns7KAusBwbgKHnp2AMHcRwwEn9cukt7DDNNDhEudREnhjZzSdpEEnBUM4kxqsDUrA78C7i",
  "key15": "2QkUjPH6VbUnkRB1zMPyGoqAi5Cif7p1d64kcyo1L5HgKiZirHyGDVj2HJAfGjfRyEWZef5RpLMpKb2DBcX2mCez",
  "key16": "382mkS62FbwjN61mqWPrpggdDNzQYgAraReZncNoLM7L2oAxAT8VAffbEBhm5sGNsKo5on2V9cvZp1B5JYoSxZPB",
  "key17": "4dNXQYtthuXUCm1cN8kkvJrzeY94SarTGXgUiw1tUVkBmwfcpLsoZjAfr6mfVRzxE1P1hnZbLVU9hDVo5mNuyJwt",
  "key18": "4ufWAeAQ3kso41tyARxdDy1TxPsn8gZNoszyNLC5gR7yUoxc7mTtqCF3GzmGPYeZbH8cRpUSYcx91rBR2YHrp6zM",
  "key19": "5Pq39EDPGceJsTMiaxdN4sm1GZzHgN2PPiQ6mX1Riderko5QWhswFMLzicE4thmczjuCTnBBgQ1A6Y8zMXqVmhQe",
  "key20": "26aHT8k9w9E8G2VmKVayHxnPvokU8P2f4doSsFQYPEuixDoVwQLqGKNrQp76tnY7i78uAeUfuyMaCwhWMDJzpkyr",
  "key21": "2eBza23NLYSameCzj5YRSm83vaZskt3BPnP2aXTfW79Z759Y4dX1iCndZ57eKnUZ11zJ97GrM3WsWQDU4ZeEzu2B",
  "key22": "R1CXXffHFTcWvRqoMnarK3sYtZUW3R11tb1ws1TLk2Qf4ZYBieeXkrQxRifxDFSrywvcXpbRXmjy2W3b1rrGB9t",
  "key23": "4w2JUBETDCACq77h9idm7qPCESSwb3wPnwiPHzmshsCWoxtSFKfsxd7Jm8ZzxDJ1KA8jyY89x91yQJMGYmKQR6cK",
  "key24": "5MTQc2qFWqNmTj3vgaZh6zHaC7Skx5ScAU3RcEBUQxc8X8regjPi83uBhBMSjJFgL4f7TjCGjX5ktjPPrd4ZrRkY",
  "key25": "4uRtokkwu3XsCStVo11pdwexGTPyu7vWTMcHC2NiBmqZFVd58Rg8UMVXjeViK8f4QGdkC8hcRG3wdMmFZzXLcAGM",
  "key26": "5pnP7CKocEpMAKyPhVok1NauTTG1tecmvUkgRTfXhENhS7uJP7KQ81sK6iruo1Vdw9f2tkkVszL5bdGEvdqeCvDR",
  "key27": "5zGgrqcxZCyGRnfGobt6vwBwgRJDVxcQkwPvwbLFq4qhqJahcsieeUzWVZGAjFDiEyat7bbqK1AANwnTCc2iM4uE",
  "key28": "QbV3cgo172R1QKgca7H3U1tGei6ZBgAwKzfdjkD6xwQ7BP64Zn1F3rsTfsmaJ22ViSdZRZq9DTTvQkZCm6XRPH7",
  "key29": "NNyi4BVX1knp43dLVBXVDSzJUtVS5tukmsLVGWqyumpXQepYegBUGib6oZ8sCQ7eN7uUHxVLMNbb6w8HqJD6XJP",
  "key30": "4sVHFcyfPNVt2xuy2eevrrT4mdD97EK55eeAFaabWkvPgsoYGyCMbu2A4ZmSz4gnf1RuwEuZgCynt2XUsD4ENxw4",
  "key31": "3SzaF4WoiraYv8bwBHMfetWYb6T3cBvLye2DTG3rqqrEsRYSTtdoatTrbQYyVm1mLfXMNKGYoenETkMFYXzeJ9ZA",
  "key32": "3EV9oX1e56jxa6Zca6VBSEccbwtcsRSw3MzAPS44UJ3mreGGYrhrfBddXGcxV8dwaZuJs1rFYouE1XLQqP6VX9MA",
  "key33": "5Ak3nbhvn3JUCtGrfM7534KhyQdSfDeMpVbGcy6RXj8VxkYnBvAeiEjVbNUQwBpe3Tv5XvF4kbsBmmqaHCZhXHhi",
  "key34": "4qYETNvEm4BJVykH7xbGFZpZrXaWSMccugiLHpjrM68EzjF7qztpNw4cZs9hUPdKH3yLwSNzYVErYvCfZNsifpoL",
  "key35": "5MKA4MzbwYA9TUEvLmozTNZCMHPek63fUUnZaAc6mVYVNpdms7DSD6pfYn2scsbmEPLXQLYNM9oV2LEuYtGCT1Cz",
  "key36": "4uc3QcVDrNsS3KnnM2XEeV8u5edocxPnjZ8aEANv5qoQn7uz7WZD7jdGRGC7eX6nXToLE96VfSD8QvTmEY4DDeNi",
  "key37": "4BsjTL2sstuD4a13Bsozmt5HpL6R7YMp5Uv9AwoMrgVq3aGW6uCbAZb7Xh3JgXMyQf5WjK5NxCpicLMsCaAFvQ7B",
  "key38": "2JT5DksuujXLog8NVaHymjrbWJwATdSdAfVx6jYZfxJupZmoik5G2RfktxDXPEz47wScQ3aGLArjvGub8AKEdyJA",
  "key39": "2zCSAsuFijEHCrZbSRxaMU2dxqtv1DVpbgazq3Ai9o4P1m9RpFgzkUqF6XjVBVTxg5Upspu1ibQADaA2AxcFeXqd",
  "key40": "Hw16Z8P6s7VFjvHdwapJDHQVTUZu8wDteyiMDWeTk9RrpJpQ2tPdXnbxfeNufYAs1RSLmTA3nhkCa3smMuZQq3t",
  "key41": "4KthPDhZUkjwu2RCCQAWL1CexKZTU289pFUTPw23Bf1wqx5ksNqH7VzKZZjLe9GLrGJUq8HqeKLphiyiaS2bngWq",
  "key42": "45cmEQ9Sj8eavSmdPRQLgsmRLvACmFB9YSxM8y6C6aWgeoeGxXf2u6RwxGMykmTfKubKbtvd9ngZstW4xB9mrFqJ",
  "key43": "5zkPyYZc6eustaYfk8p9BMNbtvp9m76GPYtzChyx9jUQKfATF8k5r26DQmCwtFS34t2LatpU4JUBUvfBUNQBQFnx",
  "key44": "4fJXafc3CAYdYUEeb2cHthxpK2eQ2P2mZqKK17WfdHGL6YeEpPRP3jLVeBTybQdtZsdCfKCXANsFZ4Rn6bvL6GnP",
  "key45": "4JfiTS5fQxEphc5RvrV32zAGZcdrmtZGtJ1YEFvxEDPWZ9D4T2jKCt3SF78dbyimybir7R7KjuiWVokznhiuqgGd"
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
