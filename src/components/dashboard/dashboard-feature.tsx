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
    "44DjBQgYPaS2EFGycUN5BEPXvjZX6XWFrEfdH17jbjcPWLAqKSUeVneT7V2oALXBPvX29vdNmhpqsR5W9vxNzwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vy72h1oqPnjMjLyNJfiumCgKJF4KbkYzhrc5f4qGxtALaxM5ZerNe8coMGpSu25y7TbQzP8U1M8JfMe5CF8tGkT",
  "key1": "4BP6tSSQQxGFMmAkZ4MZoJH4eo3nei2HWGd9BtpvGuUM7kmAzQZ2ofhoe8eM28eXVHSB5QP5xzFpPeGjyFskrWwL",
  "key2": "46RpaGbdGsPR4VUDAPkK8pcwp2R8vkM5N3YgWNBYjWUKrkmwxgdCAZmmpp58GgqXD7Xxf8dEKWFs2bWe2w54pA4W",
  "key3": "39qVbJQn5TbVnRs2xgv1oo93v3HzRKiNqBMw4RtF1cbCpJe5UBc2nYsMHq4hKUBWtVXYLfUkF4spV6FmExNNmVj7",
  "key4": "378EmNDWZSCUTGVLcuWPst4U9fRkQv8PMLdNS8PwBaGVntGvLnw3aKK1kkss1XCj6LL2cBAQPR4214Yv1e6JhcUp",
  "key5": "5MBRSFwGUEmym7EkWzsHotMxcwZGf5zQaYYgjat5HzwzfWdg3Pnx8FtD3Umv5WN7qtPWnpLoJkdKXQDrt5NGDP7C",
  "key6": "2n8aynp6G2ggTqEQZWWj9wicT1G92BcU3oVVwt8esV6dvw4M8hWM5YeTNTwozpr4NrRfGLFFD83BNti4kmG9MmLV",
  "key7": "25GGaZRrBjV72vwBpTJMiDodaTMjQwzL8CRR57DMHWBbm3b67wcsrposVdhSB5wf1NDehn3ofdEHQnRJkg8wAzop",
  "key8": "23C8gqZaAUmZGfGudrEQkhMKhQQh3DyJ8xdeGGVQVSCYC9SQ8YKLuVbg1LdjapbuF2g21kGwqwANFBZuwmp1reRQ",
  "key9": "5kC8YBr6uSq92p1RzKyWSdmkG5XaUL9dkbkZjeBvR4t5xMaGGLmwNRRPQd62bhuMGuHfpxQMe7J144tXxwAYHhTH",
  "key10": "3vDEpohAcDuDCCaRZ7Fix54bdVE4HeejXeCeTzRMdSoLakMn2VXXV4rLEAF7sGwsWfb5PLQLVxUtFfchEatJ8tL5",
  "key11": "61DUDvoujaf1QMzZiCz8CzhMkZrK7J2znzp7PNLeY2axXMeZK4NJwYsx933rk2ibGxWwGUxedoCrjRJQL1Yqiin7",
  "key12": "4nk1MNXQi5q6QC2NNiyX3vmxTkzsEMt7aqehzX5dRDLtQjoFk1jhVzz9fSvx6UwC7BA8wueSthWYLP7GamzSpLYB",
  "key13": "2PhnwLLCyDjN5pRV6qqYwzBpwhQXSV9o5LzVjh7PMjVVGeqPpLLnymXkJ9BHM8pquGHhcN5Ux3zzNjbFid6LdHK8",
  "key14": "5kHGp83JfNuqUvV7CXncYK1gz9PBqTkfNuJCMYS58v5fGyBAqPpAXR5KtxLJj36uPJcdjUVKBFePVEZBBexZovw9",
  "key15": "3BDbYiDnSz2bAbbNaJ1G84RXonCsgisdWyvyxET51HgJmQuRqsuUaxvUBAZAsXU6MkozFShdgXUsLMBgdsrzWuBn",
  "key16": "3xdc9aAgLGd5ESUq8FRnPKsN88HDa2BrJSVvb2sHE8tiB951WMwP54Rr5YHuwQSthGw3MH239XUUzegc7GiReBWf",
  "key17": "2bsVrLzqZqee22vJAb4NsNCURrYDYpvuVvHLppDixfNBBE7xF4Zh9itwiYKD7zjQTiLk8SUpes9t7Gmkc879Mw8t",
  "key18": "5PLUSm7Jb3uP7RKDPEt8dJHfwiupKHuKQpshWgco8VcLzVLyZ8rp7okWhbW7gQAS5WAgKfUbm8ziUx4TEfydFNaG",
  "key19": "5NJBRkuiYbZNNc51DeLcvfKB97TSH2ipFF4hBvD473yUUSEK3RwypAQAHecLTfPTmvSnfe7GBgXF6STGWBfhoKkS",
  "key20": "3MZAP8AoQLwvsgCq2ip8s8sgTfmX6wZKyjbRLR8vBRLvtfebma64fWfKyHtEsW5B1T6MT94JcMTEjyUe1rxekT42",
  "key21": "3ND5bMYZTQiDSgXYD3XAc7bEwdLXoujqJwHgGxrfqXZfP3RP6n3U5z3iDmi3zAUULn4kPdzKrK9ujVVwqVem28Bi",
  "key22": "5jCgQgiNVU4fKT97jVV79LgHGETDmCAbzKQnuMjr2kFJ5SM3weKKxQFFxw7TLdRAYXnPSDyW18UAVPehUqeWYZgd",
  "key23": "2yDH987bKpLPkZ6Wc2aKZxU5BhQYHWM4RQvcZqRgfa2E7YyzAHDSEUwN2hBH81BpDwuhB6Tmb3cDZY3uodyzEcs1",
  "key24": "2fzUjbPvamNjuyah4fZUssvL6ayP9u6w48jEMpKnWNvjpkYg7GY6mRTT5tk2taA1SrMrccSAbx39tzi18ivsrryJ",
  "key25": "2LXGayKryFffpsN1jy91o3dtB2PRzcddiQ1zCZ9gbFziTFE3k7R73BvkBePzm6iHZR7Lto1cPSVD2QixnsmCGxCd",
  "key26": "21kR7KiM4p8QqpcR7J8qMXrh8tw5LHsgYnKHrLA8JUVmcXk2jU5SjQVMz7NC1yfmAhY88sDid2VcetFuK1nLQb11",
  "key27": "fzyMLr6UTxshKHoRXzVpZwdDVWdZPqoRnXXR4L2iBPQhrDdmGNre3z2Ba7vKp73V3FJa2KCXmDf7uMjmLsUmBU4",
  "key28": "383pjkqKcrb1dUPpbuZFJkhqpj4BNm4dykt3LCxeoSqY67NuPPJJmBhSQxPMH5fHzNMp9mTEWist3qSQqBrwu8GB",
  "key29": "kVNekJJJmkDEacJRjyUfAVczMBuy9APPE9y3LjyaMh6b5h7QFaU972TuU8D8rgyFm5a5Rp2mQiWXeu4Sc1F2ffQ",
  "key30": "5LyfTnegdSeGD95wkSyVyKtzKevtepjH5nFftX59zsskugZ3L6H5JtkeHZPbrF9LhGLYyTaoYPb9hUjDxj1Re8s8",
  "key31": "2wueFwJ6Pt6vzmjoSbV5eELeYgu5K4JuDgBQ1ZsPfZBcTiruFPkANHTyAEkjW92BGGiQsVTEv6uk3h45RYzDKJQf",
  "key32": "DmujHep7KkqqeVuT15PmVMnRHbJRXpG326jDj2oKQ3pEYf9zHU67C2Fcn5GKvBpMbMRdpJWZRiutL1HAeHaftZW",
  "key33": "5FGnDPZRpDduxHDKWp4y3bebw7iNnntFBikTW6p4JZ4G3PuNLzRNzaeAXyWZcWT6N13RBtpnQgNEmEbqnfNKvCPP",
  "key34": "2CSpYFPM4DuD7VYFY8jx6bZHJXo63wLdjBZfT7rVAMmqhFHei1FW6BPdWG4vTuY5ebRQvEe4wpXEZHpv6keiF4fG",
  "key35": "46zHFis4RkEj1pB2NWwdR1XNnRf1y3JAR3Y9UFVP7dqGKnoFJvjnxa5TzZTtbBeuuiqs1U3XgiLSmGvrTZacsvKh",
  "key36": "53DuAap7MCQoF1tXmVSAUh51mC2F1j2rWXboXJJixaKVBtsv3GADuuA8HLSQRDpv52P2KvfMHPHt3wPLe3e22hgb",
  "key37": "nWSadUpCvGifTo25SpgGEP8fpGjkGDPXDY2xH7e8ECjXKBEisDK2RGd6kSuPrh67hju7wYc1VHnHbgNodPrVyiy",
  "key38": "3RNKjuCU1KytAnu8rG5a5bsTop2zoQPpUpdNuzMVwCkq9HsiGuE3qokahxGz3mD5WS54Tue4Xvg3Rnt5Vts5ssVe",
  "key39": "4BHQsnsdGcervJk32H15wiAWkhwVkj2yvx8c1qb6cAkewxQjwZzA1MgMzvGpZ2a3W846b7XKHFWZ7hnEfqU2e6Bs",
  "key40": "5srhq9U33aJPac2xFK4xKpobPEXBiMHT953HCnx8pniwcuumkP74L2mgKH6pGUkUoxgVdoLnhms83YSJ5y5r15f4",
  "key41": "3X4DjTm3R6BPy8DqRG6DtZHe9bh1Dt9C9D2CSfaKNYjyhgWkLsZiJ6NLEhT9jE9TSi5g2puQHDM6pdqxn6xSnCvK",
  "key42": "p9b3d5ppG6KNBRdMNsroJQt56dJuspjLpKxe4u5rLd3sPJvbdpM4nYutTHKREi1bF8ZBWJqpfnvNRLfjgU8hMiz",
  "key43": "5Z17vhJYkqrhJqvzWKv6VJy4mzETNo3wmSK2Z8vZCKGnnpN22C81FAz2pZkLtjhs9sh49NB9BMWyRN4pZK4EU859",
  "key44": "bgCoeLd7YZnLpamcwJHCAogDxrM6jFCCswZ7DRio1BjRGCeH3GwdJejtgHYXkqyKgtw2xNqsxBgbuu93k3iekTC",
  "key45": "4XqUM7i4hjMDHxsU87bCafXgcZACGJScR3JftNKMfqBMAL1kXh6h4byKDRTF5HhXTHo7z5nAmFhvppGcxxPAh1mZ",
  "key46": "2DviYUR9ALugyoywEiN3T3jRdsK9e34V7Eqn6fcbL36tSmQ1JGGWcNCu212ZuFgh7DFz23bbmYzqiLJizDjC2oB",
  "key47": "4BAe6vo1nJK1eqGG8o6vKt6EUhNUH9ZfZQ2yiie2L5EVRyvkuNnQMLzvduv8rNwrNaNe3AwVRUsbm6DgPW2qTGE3",
  "key48": "4WfT4Zxb9goktNwt4jvavA3G4u3pMehTnNB8BwWu1sPEWJgggX3dChhr34tzn4dHYb4xAgZyKwUWehSRLEQYmuV3"
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
