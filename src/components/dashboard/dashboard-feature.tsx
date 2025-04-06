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
    "5KMfASLdhpN2QGfSLMABmXkuGuiGw5VxeKMzqt7skg3V93Ncq4J2JHTg86YrvLmjcSPSStDrBt4Be2c4Ki5gUpVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EsJFAZ5WGR1XJRwvzDdPwHszrg3ZeiMDMaQkB9HJE46uubwLvkiZEBb6FqkazQUQqoDez9AFea6HmVopkg5FyhM",
  "key1": "3PmtAsX54MVc8v3XMGFagXgj8qwFgzzq7bkGKVPvu2v6nkHsaZ1UMCCCWSrBZiuiZ17PzPJZ2KebwZvVLuF9m3z5",
  "key2": "5ihTrYfi7yTWXWdZHCaNEi7bEhbX3kFsvU6EipwzopQZoTiWespVsmRDEL6H9Hiw8Apm3JP9vKaNuZkCFqMpWbZi",
  "key3": "5bDU2riQxE7qZ2aejUEm7eBa5P7JHhkgBRXGWs2SS5qydCMkc7ne432jhkcq7FwQnHjCAk4aPLiS9DYvF69ocEBc",
  "key4": "4CJJpY6JFhAkFpMH2V9JqYgCLPnRQpa6qb3rkQx76mnss5dohjis8V6j9STBUCAs57zxVieLnCKZbGk8TvWMFPzt",
  "key5": "eWLWtKZpTafRqEAbFTDqac7F6BwAxxokU5Fn3HT3WCASZrtxWpSQUDoTnMUc9FjmM9jLRznyqVho56EzWGJWkHA",
  "key6": "Lz5riyKkpLMMr3ufm5wVF5FhNC7XrHZP88Cothj6bNxf9pjLPafg8Q54GaU4UYzztZCkyzpYzArRECGGpqgFfgm",
  "key7": "3fkABMWyiiYLJGxF3RbedtaXMMXAf3fyXN284GDpt3tXMZCKkDFMFJmrxPuZKaTrEqmvANTqQBJUMWAm79JLL8zm",
  "key8": "gY8cBFFurxKQnpxe58KDau6Q96vs7JLMq4AVTUoPjT7pMA38acMDh3dwKsEZR4gWZAyHX2bquWTep26sLTYnPdh",
  "key9": "56zfq1wPDwK8UuurfqbaudfvVu2K31tGuw66uB4GPFm1DBUHeE6g1RJPAfnjWqFm41cBr61LCnwBhDZ3f9hdCJiK",
  "key10": "2WGsNcBJmeSLBXkbjc2xgknrNprcKPaWp4Vu8W2uivJQV9CYdAhx4L71Gc4UqsVufMGvAYfQ2onmzj2iKdXjfrm7",
  "key11": "sPnWgXugzNX9ionChNYmVPJ5k6UuDFz8op5VRXCVZPjb1kyCmwwhV5LF1DCNgfopJXBw75h7RRnhajptLMiPNUU",
  "key12": "T2WPzwrGo3XgpVXaCM1QpuiTSjBZ5up6bLGu8tCk8t6Di5Hx2tbY8dyVo97deoQGHqTkeDDWXrcQxMkyxVMgPuP",
  "key13": "59sMjaqD1bQ6yapNxGGU3xPhrNWcJXQCmK9TDPznJVCpYdSBZSsddZTcpTPL7JaanyoZVzGzGT3g3vFcUHWKx8oS",
  "key14": "2tSPDAC2octewhU2GdKteqvrgC4NzuTspMkkihpMyc3cMj5HjsCY8j81pQLb4UQPEVJZ1wryUzfoeBssx2H1UZQw",
  "key15": "x5XPvYtDyo6TDjsGGAcgcy37NMk8G4MLNKnrBrTXmrM6pT7Mmq2dMxA2YwrRg47NZBgiwAQuVeCYvtmzsGuCDHa",
  "key16": "2eNJaKpxbPdx9cr4nMdLuFnQXbzcN8kBXnfVviAVQBXFpe65op3xWcmxQk5RpViu1gY4TJvm7TLg92buGVbYZNEn",
  "key17": "5aPPetSqxLWBxo1LG1Ws9SzuT2njE8iAHL9MToroxNd5jY5XAvPeqZvFktXAGEymti7PSQ1E3wmmeNidhZwTMjdy",
  "key18": "5ibfsULQ4SyqarQHizXHtfSWDfiMfpPW9uszcy1pZKD2VakHyZjikogSugGJbmM54ANofvB6shGFgVVfB8A91T9t",
  "key19": "4qZTA1vcpSWoKgiiKsqs5XmGzceWZbTryJs1RrvBVeUMgmumMT6yJSrBSb5KrA5jThAU23xrpXa5rD14cLzZmfox",
  "key20": "3u58mEkPqfTr9JxUnQc4G2rtJLANx5XUD77HQfw3gYr9NJRSmMjeMM2Suh2wxp4rj1z3Nc5hQZ9acgpKoPUiQ8XU",
  "key21": "61HVaofoJ9eJA8wy3xbhWwW26UMuLXmDZasR71q2eTiMKhoL7fwcyqiebLgN5sQko9NGwd4Ek5xcqfdTR8MoTBxA",
  "key22": "4Avwdr2vQ4emuKqvUfY6grQZXaZjvSLNqFuyBfohPuFH6VNditqaxGYN7TnsQJob4L9WHyrJGhEYvRdoPVGzcDAt",
  "key23": "5YKUYdfc8ywN4SpDysPFMFWyCNKrmG8XBQJg5JjhjKjCGJCnKpbnecfRPHeByrk3tNy8W6ycBE94m4mWdEQBtZGp",
  "key24": "2AuQNUiwWhgPXZEV17BgPj2s12dH8WtT9C4H6s38tVVFe3DwtTDyhHC8g861qMsxKXFvSNaNdRGZyr9p6YFXAaw5",
  "key25": "4Jg44rLGAXzChKuTRneqonchSvsujBUntmUiRiSppXwEgjVyt7PrMxVr9JRQpTGNVA9yGVZnG1bRKtLSr4BbG3Ru",
  "key26": "2Zfr8TPWNiEpVqaUWBRqJ3zf3EtjyHkKoQgGerngr8Q4UTL1pyTZ2AdRuxsve31tD3QeJ22UDKSgrK1vWuyps4Lt",
  "key27": "4fAVDtBhFsiVdwouSDjpNW7gPg5P2M3fDrtE7VWGN2WSP5t9Co6Kmeuwd7tsyQJNDBBWD1j6VLHvBVrcYFfdeNvJ",
  "key28": "2beTS2YCcX8rQsA2V5E62Gh38mUTKxjYNKnG1TWB3sHDtn4qsUV3VyvXBEKNqsd2ye7hqygxDBaCZTtLYPgmQK3r",
  "key29": "3dfvyysfdEuDERNj9QWLBA5kFHzHiq73pNWjcDy8e6YSz44K5ePRkbJFnBn39AikYSrmosaAeUJ9DDTF5Z9Z4cXt",
  "key30": "32VKzJ1L2cRZnTSbE8zaFfNVW8juiSwCioKEH72CqAUhVXXUfw6shzA8eyYqQVrivta3Q9p69eApvwqauUrvP1y2",
  "key31": "eDcGCDbTTV3uYbzyfXU6ejn5bVBoCa97yUqnd8rm1kkcsj5ozemCLFJFNSYBgSmsAEqgaNHMEPD8Y78QTT729zP",
  "key32": "4JDxHX9PDivgfeRwqsPKVf4rCy1epevM4C1NmgJjndoDDWHADpPgPJeGtoYckGifePiAPScmeE8K8RX5JSwSG1H3",
  "key33": "52ghC5SJZVDM1WQH8M6XpibkswF2gMhDXvKv8w2nTGQ847dvhgVVHcuUgL4nN3JPwrx8fw4tcK9c69XMMS6esufg",
  "key34": "QMhUttSnESFmUYwa65ugUHqiKnr95UyrMNv2rBVEEv9ofFPdEcgidkvkcxPS2pBumJAfN7MfSJpaFPX1Tx1Dvyh",
  "key35": "28TaD9DMqU6RyhckqThuXvFdior9P5eLNXtjmkbVz2YZmkMu7kWb4RFvDyCqAh9LtNRKmTApvePo4RuszBENoHYz",
  "key36": "5aHsbGyhAsg8BbcQHHNwEh5e5V5JZQ4cY2HYPL1pZK6AiSxAQhqjWYz4AXCErcUqFyGnWb5mFbXy3FmVGchyy3m8",
  "key37": "8CibEScV3TJduEqn7B3RWA46V9E4CnmAshigFjWuKYszwgdYmtsGEtY7XyS2BfKH9AuEZqbEXD5ogVeoWdcB7Zu",
  "key38": "4y1iBXhyjmNmg2nAxmXUQzBWomdzVm2JtAizwhCKhR3h9GJhmPvH2WdvZpZSZHyj5EbrySNxmGLL15DdnsE3YKPk",
  "key39": "4L5pVs3jz7HjPgt6LukcmXZYcwr6JoP1h5Ap2dwQetu3myhNgkvXmRmPvFkYw1DF7Ltg72phhQkVH3tZY1w45NRh",
  "key40": "YvgPDwFFYc4axW23aaaH9TXcd2CRceeK3JkzYxNbLxucYhTP8YkSyLpMQNDFruLTS79BQ1472kYroMKVrSPL5yq",
  "key41": "3XZDFzUB6PSDFbC2zdjKRo1PUuZL12AsLw2u88HLLo7L5EsXH822LiUKBeyyRLVFAhW2yBLfok8RhqmeHMahLyzW",
  "key42": "4L67Neb8gAKQpdZmHKZfsot91dDs2ZXnm7e2x4brK68pTR1hWykap1T9aezBbLMyQsCLAXoe2EYkJFQZ7c2SDX1P",
  "key43": "ktMcghfX9CNouZc9UL9EzFBKwSrJX5hZdvUjNHXecNVCgsHmDnucZ6zLEQUmjAwEssNoRiNiH8nNCmM4Liz4owJ",
  "key44": "BfiVwdjM5hawz3VHB7EnKwzNh89MUWQdUK4w6zRk2d4DU8DCCxAGmdu9wSiMGd4nFS4uAVq8UEnG6DoGKrEbfcW",
  "key45": "4UfHcsYScAMmVuB9LGY6j8yi9JBstsPUAax8mVXSSmbwPPG3exAEhA1pfPE6osoc5A9BWFUuW8sgLD7FXmgTX31A",
  "key46": "5kwnMSbkmfquBAYBm51vqaTkVWm6esTzXZYsabMsag5hWdazMW4cs2HFqAcWbVJ5ymP8QHZNSccDzWWT43WSdnXG",
  "key47": "3RrFg8ySMhsy2dZXpYdQHzKSv9MRXD3B9uPHQjLPWWbXVXPArntKiMFZby2DLSM93FGz4SXmbyAfw3WYWHi1f9eK",
  "key48": "69cyopEKsXrWxPX85cvjdoRkiTEM8roTKdkevcVdi4CXKntibVf1B6AtfyghNsLtNFGj2cXRQmTx2Ugug2mEA1S",
  "key49": "2k8TRXREbr61kg4WgMEK6Tg4oRrSaXLJBR9moQe49uqCDYZfmsWumggtRc3DhT8Ti8SvbQD15fiFv3Sn1DB6oHyF"
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
