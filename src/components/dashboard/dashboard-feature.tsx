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
    "2R5jancmvLxAh2P8vHbDVeRBz2ZA7xeXC9pnLEbKbML33neH49ffGmH4mG9yc3KaieXPETjP6y1cSum3S7hoo1kT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wZHEzdP7ELurydCjh77SS8DFkfyHgjZQAQvrhfdaFidN4jpw7Ra1Vf38mQdg6TtfY1e2HVN6G5peC4AcHssFZSv",
  "key1": "3E4STVQFDs9g772LF4AFW8hENV2eSqBXRjjEFyFq8KgEjJnS3E4FkN3tBsdZiHopLxdxAujg1285vqpXpyTFEtQV",
  "key2": "21jgpfMdLQApHnCrAjk7GxibVBXwqZSxcjPVmxSMYeHufdb4zco79fcUqaf4Py9msaXgtRe8CbPkCUU5vgcDyDC9",
  "key3": "2H5AMJLiRNaqBnebqrW6BTgSjNF7fa1NqhbxioyC1twyAFxeo5hRnWcbkmECDfLKihknhHAxsbqi2mFUBeMp2EsJ",
  "key4": "4jk2yWFvj8Hrkgt1VfwtdB5nmhsAofXAEEasjXVqxKR3f24xDm9BCjgT3VJc1gEdw8k2hywKcMEJVTgWej7TBs2k",
  "key5": "MrrdCBHoLpfHhzALufTPrmQeZKstEjgaAUMXeksojs5zQPt4wb8Ztwq2rCUaKuV61y7fVdfSZzjpDUSdgWihQXP",
  "key6": "4RxV8To9nccWA886nHDhKAi8yuLQniTctHwNvW5G7abzRisDc1ebNQ4Tag5oYE3Qng4zSc6R4dAKpaDuMmUL27v",
  "key7": "2AxR3Sq31pVXG1cPA1mA1uTWk9XT9oqj4MPaHQMD7gsaAQ7hPnLvAnG9awBrV9NFheiLq1Y5xwTmBW8EGA5jhEkf",
  "key8": "VsqFFcCvvFFLUrgzPLniwme5SBkEnQsQtCRyBBey1e49ZfdaaQGnRrV7hL1xN43DexumM8L2yoWQybvVoE5Nixi",
  "key9": "3WUpLBHjdeGWjJofroBX7BLyxcGqWpi2G2JZZqE9P5eBuP36WMFedSckufU42FDYtwrCqqnSNSaFzNrqBvHjdyET",
  "key10": "4saFxMQEC549MPW14PJGUVCL2fH58ZxoycLJFHaq7AgXEoSTqaTo6M5e2kW7esusGgZjaYUHWpyaHcQiqoKeGWpE",
  "key11": "sqMV2pW8pt7632h7YsaXEWDsF1DH1n9Sk36xVHUe3Syr5ZdqCEgv39wfZWLdoXivJS45DAA3yhLDmySHCDA16TM",
  "key12": "SxgAALbDE9xzyaj7RZyKoiNEVurJ6XUDBJhENfbTDNykhASsJViUA6rJSbWBhGmduhkxFkqH9quPx6CHhLTgJsi",
  "key13": "o3UkPBBxu15ejz6f7cWjkC8dZeSntvQRDjyufFebc1JqbAKMqYU7i5vmvMYfbtFjoJqTiZW54bWpb8kQf9neunt",
  "key14": "5pNXojuSQxtbKZprujCaW59UVWxbAwZ6mQEHaYitnFPp1CgkAUWNMpNoVy29CxmWm2aNcricpfetqvNxuRCoPVMz",
  "key15": "52TPMo8CxWoPrf3tdJ2FBPxHunPwnPppktGC4BZvmkMYo1X5KjFHJ8ZkKT5AvkBtCMoHp9ZzMi9bXDL4zhEvkd1F",
  "key16": "JT7BRhhn7Rwdd4HyMatLnxF9KfUmKu45UbJYo7khuaTSPjfbM7nrrkLgfR6z3WYpNx446VqWV57rfSzzeAmv7Ux",
  "key17": "4s8XDT82wxSZvAeEiuuWQPYhpAZokp7HX6KPB3ijxDWYdwoBNrFYchzeDs9fZLcLChPEuJzeWoTTUj9mdkbpKyR4",
  "key18": "3oSr4NgcWDXbH32ZBhHK6c3uSKSWnoSoN5YDcJk9aCWwLZjj2JjGrZr9jVAJ3YJwe7iDKngJNpvzjGp52QZSGo4u",
  "key19": "4eGFRCbJfaSerSJ76eRvdUmRAGRGsVK1tEBRiMmwmui3dycNSTR3QcxjtvNamcgKdDhmETdzPXcwbU2tu9jNMfY6",
  "key20": "2V2pAZzCGXqV1DmnNRLz5tSYtUyzRdzsuzVucU4mqaGB76hGja7qYYgpsobYPFKmxQUuNbPSxmaR9wvSpjQM65ch",
  "key21": "4fn6zp1hkeS6qsk6ATBTizvBbGmffrCBEYAtwzQKnrXbANGBJYdEVfaDbLq2g9UyZNx6c1cfM2aDDwTFCB7kErzt",
  "key22": "5oG2Zng9hpa5Xvt9a38JYTmEyLppVakajVgBWaTaTa8GcAGhzm4YsqdXhcidNEwQi5XymcppoKaXx4TNi184JAnD",
  "key23": "5tUdvgL2UBTtypb92uh9uzqYbgTsiutiRUSoGBBJ9kiUsNkkcD1aDK68Vsd4SctMCMGr8tvMezQfPS8yJjRdPVPa",
  "key24": "5i2GquJdYEpu2y1tDZuXvjhnBdyqb9S1AFZXu8PrQPtqFbDTv4t8tmhmMRfYBK2brx5MGiPVF7RjUAfdbTaQ3ehE",
  "key25": "YC8JSDeQWhm3GyaKe6fxaXhfZmAVrggjPADNkfaY2y2V7WTG8i53Hf5ByJtW7o6EUFUc3LMCQToZeLrNU29YNM8",
  "key26": "2eyVKcGDVcEkt6LuYKYbcY17v18LZUyAWp7LpUGHV6vJidmftrKeLUxoeAkEaEkvb8Lcp2ooxRPh9g4cxU57pTXw",
  "key27": "2bMVHzqsp1xssqm5dq6uodWYJ72MJpdQpHZ2UcFwPw5T8iEcuNDdyUKLTXZFfzKiPX6BSNsSKLDpcgSmuXXYNn2c",
  "key28": "2tsojmd8RCvqxsBXSM9u5rXXdWshKnd3TeHKGeTVfC9jyb2pAmHcqfFdyz2XqKqevg8and3nerz7pkxACn8jUaTF",
  "key29": "63HZ4g4pHLtBi5NJGHR9yf6YYGd78x87tF2y6CgjpWBdY5zsFAamhRyFc6cGsw7W5dALy71JFU6361RRPUfiTfgW",
  "key30": "3AperggEDLE2qWSZVbjCJVgwyiZ9oxHsbhae1P6YAe4Wa7YS5Pu2RTCUuFM2XhZRnc5Rz21MYwa1M7pLadhHXa92",
  "key31": "STShvwZrHtwHWipit3iQFd6fNeWSmiHeNPfP1t8XLPGcPtEK9ZVQiMumNp4QZCFD8Laag2wv8AVTbH9DVfCxzDE",
  "key32": "3VLZmpe7VUTBBdUtEJCSNquS5bL8qzsH6tCxSD74wzMcPsWpsnw7hfuXAtJuxZZan1rWddwiv1NyBvPt4mrfH6k8",
  "key33": "2ZCAELxB2BVAvVwAMgvHCRh1gpib2kPWbNP2NszfMWyYH81QA4kGHcYfZu11x599mskKmmBeY1jrNGdvTrdxAr64",
  "key34": "3AQRZkywpPfTrtsoHxkanxxPwTaiL8fBYdTb6xjgvowFnQ9YCBrTJqzq3CpvP7Zmr9zT1VYEpMTwzmBZbmVX5ez8"
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
