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
    "58zCL3T24nQ2EExTwXhKWTJvr61VFdK83E8hNzpGyq1fP8X83M9fNs9XzxEr67WC5mQjMd3yWCmsNzRrZCemejxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y8761WxTF3JVBYuAdYkKPZLKbQHG1aCXmgiEUdJKC9etcEaoD6hUYxeX6m8XZm8VUd5FjkxDSA9ApCodHDk7qvE",
  "key1": "2yDgwZ8Z7rNG8piq9nag2aeUMz2N5cwNMycHVjNDVdFxB2nw8a7xZeZFXQ9ULqXviRabu6AZoExouyQLhrHJ3mVH",
  "key2": "7vkwJScofdAbG7mYdWQDUuABsBaKZAUuy9VSEze5cwLtseXno3RwBAkoPcrbijdict9cB6irerzchFDrYbayn3R",
  "key3": "47iD96jjK9v5TFZmpn8QdgXji8CCvZu5ksXWUUUobn2a9yfENUFNcwkXcmQdinpUdSn8pt7HoCWaooFoAySyyL2Z",
  "key4": "5tZJNyVcKu8jLYf625F6xU2LFr41Bjj6hbCPLnEYsrWF59GS4AwBQ2RB6AGcr3baoDKhj1S1tzysU4L7xkmZnLji",
  "key5": "55Y8kL6M4exdUveMFRPbuSeqkscdRG71XDU3AHMFausuFAGa6dpBrjTyiLHkzDBsroCjBQYZ2xbYVZA51eBxFLA5",
  "key6": "3XpYDC1dfgFAyrBQFqVsWrYVKS5XSs5s1cu4YWgEBWAeg84iW8gUH6ALX6MNJGHM2tTZ83nXGwfvG6UWa6Eav2Gr",
  "key7": "4DGnW9vn9AACdppo1GxpDGNA8Lp1x9VhkoedE7dcL7h7vjwUPpx9X2KrR2PWuqD9ogzNsy9jZPk1Vt6MBThQDnL3",
  "key8": "386AkrShopoYd77JMQv1DCe2AEJbH4bMXoVg3PGhasfjHkgaLufSa4ybNKRkQ3yZCdBjjQqcUAyWyNGZvTT6JEmH",
  "key9": "5NF7HQVd7uQFDLXquDdUUr6JKrK1wZMhRQftGHj47hHZ7hW3o3kGW9XAB91d9VgY45ttPvYfb1dTKgghXJPF9CDQ",
  "key10": "KunD8pyKY8hiErJpjak1d8draavqDvsfB77twcCwEnZymkeeJrtZ4g5rJDDcETteX6QNnTk2MQzFXvoavXjj6tb",
  "key11": "4w6hPfu6wxFLWGaye6xHQBBCGF17iiceMVnoQoQsYwaennTE9zMqkXDYFL1jM3Vjvxu65kWixqfwchvkniE4zdXf",
  "key12": "QcxfVHp1tCMeMsQ6FRyo4nZ7fSyRYzc5upcZYW72U9Ru8UGqj2EXVBgg3xqmQDLSS2uRFAH7E8WPFJSwq1wzNtb",
  "key13": "4NPaCZ82FSzaVZycUiZPWahz7kge23b7zPsDZMWuvFHurffUNiPU84kpYN66widEZZzaJQENwdJCr2DCuTPaiHF9",
  "key14": "593FevJWuUw9aDpVCES1f1USVQgAv9rgtL2hSxQsPaZr5Szt4K48sumwpqWWpWn5wsUrz5LjZLuj613HyqEG1kHB",
  "key15": "5xxGp4fRytgRGPvvdVfgTGhq1GVveBRXepujmjukf5JLGbvGUVBKaPdVj2qaMjtfg2pfxTNrvW1fjGrzFLZmJerT",
  "key16": "5XLkiXv7DcKmf5nxzv8fx49a3wB3iATTPChm16wFn1CJTiVirFHBBnjd7Bob4p9kgfvAWR3usctuQgB9JcDKbKww",
  "key17": "1y5a7UfiP27E98ku6tjt5AeLixYkJnKeWdBRu3es9BhMpqpt6yAkf9dU6XgWxnGqELWQjjV5cg3U4j2nh7Ng9Mi",
  "key18": "2tKcU8APy4gnHQz4hhRLgRwQ8yLAnG8k7zX3uU11NiCftYZUpUEnpsdBeh2sZQS4A8STerKbTfXyEumz94wYqeZj",
  "key19": "2ExiDJmxu1eXnzaQKTPanQgUhsRZB5yHm2XDs4aRtg92hVb3fqz3Vo3Hk1HGRZFTPba4pAHpKkePSDNvo6AQRAhr",
  "key20": "2ZDM5N92rniXHZgd43jNq1yUw5S5hdcndYz6hHLNJfCENGnBVqrJj5SWYEKUR1bHzDMjd8rfyEnDWLNiM2oTt4g1",
  "key21": "22sYELHAvCZT4dpL3g8asXJy3w3eWZqas4tqDyuNxaNyVk1Dn8JhQ371Ke9F243Q61h7bsoxA9o9vMuaAWMVR7Kh",
  "key22": "FaVt8bo4eL8JZyBzE4vYHnsfNJTyfYFYu57wxKUQxXBoNYpBGxByb5akfWd5Gt3B9VsgWWfcvFbZqoeiZPMJN8d",
  "key23": "3njVT593NjbYUPQ6erVXDHE15WbRJJTDA8nL8bXRCUCXk1Y7WmBAmNkNeGJRfB9oe1uXS22VweKVviMhQtk2TkEy",
  "key24": "57oAGB1BD28eXHdQg9CToXjbaenoeE9n2T1H99n3qg48JTJHqS7HUm6nFzb1fzuPWkKvrowAMfoeqQJrt3iLCraL",
  "key25": "5Hj9BujtR3min4HmLvH42td7dtYY3kxwjY8i8pn92NYDeAujjiXMTvgYUVSfE7XBa2dQwjbX4M9PiYozE4hUXcpu",
  "key26": "4r2aDuJAuUyD4U1ijJ8KEfyhRgsGjLmyLenJZdBMrsQfv7ZaY7vgu3ZQ5Yc7uZuhrHf3JjLUiBug8ryNmSDgMF3S",
  "key27": "2aT5NkrEbSq1KJhc39dc1BZU5RGysmFQZ2diyBwabDsgkqQyCzW5rwJ95o9c3oMBLEtzW4ytFUDnub3VBppkxikW",
  "key28": "2bYCdSD83dxKTThFVHA9Rbugu96FpyJk16ZUatFaPzUVMDYeMYeKBXcyovoD5A32mSmBXE2YtWYyzAnbwQpfVUaF",
  "key29": "EqzyL6gVRiusVH7CyxGXCV4ezhm2VviC3kjTLrVAPHG5R1NE8nfhy49o59kntqXCEhEtmr8ypmgvBBVytSzKAHS",
  "key30": "3HcgeLeBNtUfyRrNEr3dQ9J1kbuRmM2dgiFE8WnRHqbPNatYhTKm1zqsXZgjLWktU3ivqKKUAys6B4sYQriXUezg",
  "key31": "32r7swt8oY9nM1FqMiDTAPKB23aLEhqgA6NA5eiUVtUJu91c2Qggm3s4dfqynVZf3mQ2jFGN1zrPbkntu2spL1sk",
  "key32": "2721kryfmFNkZFZAidwtEHdbP8dSMjBgKrSA4H9PYBBccAmQGhwzXQC4i592cnPwtWQoHXascz1Hi53tV2JHjXqC",
  "key33": "3kZEdGBRENLyV2ToA7sGmujdGXDosfHxPjXzZQjQ2YthFDLoypZ264zHZDXwqEGHbD95NMq97SrYK9WvEKtDfiFW",
  "key34": "35u8X5Q35Q7hQ8hbPesAZTJknXwupfo1248CQ5e2BPxjQaahND3oDwDmZdYjejrRpbjmYhf2n2ubJfjXFbQ2DGRD",
  "key35": "2S6QLUAFH5Na1jHnWqU5Smmi96zVSE5EFLideSTPAcqaF1AnvtYPuFgFP2DHKkjawJZ9qcUeuwkSrXaRMpxvuxEm",
  "key36": "2M9R8YHu5G2q7gtwEaDqfZpCYHceUw1uxPbR5qs6RVaB5UfndZF54QyJGKJVd8tAcsenHwtRpUHGZD2oRfumkxL3",
  "key37": "57VyCTdFxt6c6XNTGtvnEfTkmzfLGcosdfrAuSTGeBsLFWJtb2cGRTCa4p9digRdbG5RgA9BqjWoaTbNPDxbe9sY",
  "key38": "3sMCyRcSXmz1wZ9VfcvkVrYBCPQYzwhTR6hw3usJMLWzLF4NSL6zaixeX8k1Ww4qw6d3aL7Jb5sBxPwZ7eMqvuVD",
  "key39": "66qeDhKPxB93tkSwZ9PpCoJL6ZYiWzTDoxYYGoaz7g6pfEsZQC13KmMAWcCfa9MbwZv8iJBA3R7CW6zjbqQraU97",
  "key40": "3aEvpP4nuJ9qP3DTd3dx74JasH8mKtKrknpqGVsjnKGNfoipCeXudyGaRs6A5uJ5v44h89wsPTDrDPFM18xT6eXF",
  "key41": "3jJdV5bvcqH8MoukzwTveMgQfXTo4oeNkq41giMih1S9sR4Sj2qJiGgDm3D1vRTP4YeDCCbNnBnT4xMWpHQF9PoS",
  "key42": "MrjREqYJVGfKF3A14X8njRFX1Hs3jcKA3BMN7GoVPygxkvt6J1r7Ywd3ZzAFWHyqjhEP4YKv63MW77GgaeqaSjg",
  "key43": "cxf4tazFQSgw6EeVkPEx4pwbt2SEVqV3XPJeHo6VPBhvwmTW4pezgz7vASCmUTsxwLCdADh4epvQiw73T8UHZoY",
  "key44": "Lt6AJhSHcpoiTJWArHVUc43DfeJsGbVyM84KbJpinK2WETdzhKSs9wiSjtMuFFRV4yB4XWWdKi51QtuKHau3w4A",
  "key45": "Hmj6ULUvnViSoe5fzp7f63JcRkFuKq2WhtQG9cv5Xoh96DANXwD28Kw3G86hSbgZ4UvNLzE2iYrSALfoaSWkkgb"
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
