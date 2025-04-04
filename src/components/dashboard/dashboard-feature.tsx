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
    "4FaT14QSk9oUHjMMFKTNhTerJXs1dr9yHYG7dqkr8rpjjSr6THyt5P4847PTcKD4AXw3qiHx8SrAKYR54wmNR9Bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zwdC59kTs8ZkRfbA7XgyEtRjH7frm8UxU3Qi6Fjd5MNR8cuXuTyvgHUus4nQLWUdywZjZjbK9ZcB7myfwurERzM",
  "key1": "jX4dikVYEiVfW6Ne4Et4HmQQHQy51nNKEpJK5rWvKvvTzPbYYehYmqG3sW88wYmfTqGXMQfy2D5rcTVq525WWND",
  "key2": "3uEkxA61Hv7TprRoAe82ioRSGMV7oFr1iYbC8rEqiAZhnq9sBnthuaEuvD7vSsi55uwtaVjeSH1fbMw9Qwcff6Rc",
  "key3": "4S3daAkrQ5jKf88zwGm8sPNN5ZRP3rp8cQLrKcDTeZhXLKjsh8VEiQEg5E1LnFQZvr1R4gySVRtmsXXj9kQnLUYs",
  "key4": "64Y7RmcfLvjr4hLg3uLgfHs2PBmcZqUFx8YfGMcF1jvV8cNxswDuxJee4LHjNRhZcybEQSVKRWwh7bHiW4zA4f2E",
  "key5": "611iDtyfNsgVVuUErWdMCJr74VVpLkRot51FcKz6G5nCoyRGp5pGZtpEU32eA83Hko5UpUML9RMWuatq8v6dSykj",
  "key6": "3u4w1ect33JjZ89DKR2N8HkrEu71L7ncJcz2NWMPC3DrTDKWCB4js6Ygd8FRBaqMMhzYh5mtgaaLmk82gV7Uax3P",
  "key7": "487aozPd6AUZeVWaKrTwxo5diHZvsHTKN4zg7FTD6ye6veajcM57jnchmJy4Z1RDHpci1DQV2SXuJi7fwwYGM5wd",
  "key8": "5hT4cMCviZzfo6uk1LdmkmwN9XbSE1pwxLcrzLup21FytGexDuE72PoyCRDL5TjFfxRvfkq6i9juHR18QE14W3g9",
  "key9": "DRqnpCwmDcB9FjfzCuCzW8vrjetqVNjyZ3TjSPvvCKumfbo75ZJTZ1RsHXLcWG7fAVTg1X97C5JGoRGptUv1T8M",
  "key10": "5iUXWQ3X1fpWuzdCsTRxFuz3bc84BCeBKfPSRCAtXTmPh2PpMitQDp7ri6mTdnLfucHTMGmX4inJdjRufhdAb1vZ",
  "key11": "abSMmtaYJhEtaMaGW4qR4PQf2kiyD1fwBHLuNUVqAogaC5knHc1ek9BRdhFkkwvXuqtbK2KdbH7JttiKfoD8Lo8",
  "key12": "5j6dHegBGcP7VbLNYT6o3yRmc9wQWHHTPdM3mFyrDKTPaCAMAbYRfPv5zPcXjBApxScDne9H7PDUehC2o6SMcUhz",
  "key13": "3imeQNZuQnUy1Wx7zBrsHmCkddraUhMZT4NsoJdwrv76CdRrMXiHNwd31bDWjyEdLE7XDko3GpeAN2iJ7GLdTNxK",
  "key14": "pcjGTq5PtFHhVXRgfSWFX59U531uSfdWGhLWCmMJgq8Qe7eGL3f9oDQ6kM2yR6CfoVDboFJAVbsubKbXfrgHEWe",
  "key15": "3pbrD4esRKu7JungTmZnWDVXRSkhgWJ1CUeUFVA14KwcTUadRJf9jiWYyzknK8XXVHzne7Yy53PmXCZ8uguQBeJE",
  "key16": "MJfQybfZAspTyTct5Peab2ncnm5UaxMEH6hvvKNVMhk8yffgHiRGLiKfDwarxstDfyoHmaxJoc6RWmjQt2AUvHj",
  "key17": "3EbsNV5RWpsQEkkQrgvrDFTaD6vrL3UZ67wDvSXYuKTFsRAUUHBkDsHdnwubt8y9hVPcNjLrvPvLMttEWqAoCywM",
  "key18": "5ZWK1fZ7AqC6AzzTG2x4X5nbg8NyL3gJqqSZEBqfxhpYF14Gt9i9NPafRGgWvXZuVv1iyCZEdmfmYy1MMqtsuD5j",
  "key19": "17s9DpJbNgqB5eXZPtLsp4icgZjJCJYjXFm8bLkvwQAzU6g7V3DXNh7VsjXYgKA5xMXbSvwueqVBKhQLo6h6Xsg",
  "key20": "3HZJMLFNMwAQi9pmT7cWBRcyxrLjbJYMqkR2gXfisLmDR5SMP4xwp6YoZhGup6eVVW2Snj5StPqFckiEBMQPM6zP",
  "key21": "3bjQCTAf1c3TcHq7VY9ADov5SBTFxMA49ghSwVHuwUAAT5vEn3jyWQrbzpvtck54YWGr8aj6youDfX4MtNHvsuPx",
  "key22": "39tvRhWtnDMGS6mQUpVwzYYC6e1doS1tXugW4mx7UW9nBuiCw4sCBm254bbhMJHuiif4aLZxhFGtPo9GNBpipzk8",
  "key23": "BCvqX5qdfvmrsLHA97WWkH9nXkT9fb5wCjjnpFTrV9ZEB8iMPaBjgW4djuC8b7Ucd9J9nW7pir5xSzip1FXXWCc",
  "key24": "588Y6AjvyL5Mq3wEn2syTVbkUeAfEGJiGTGYFmMqE9b89DLxd4d6ut8Wr8uL2FXDH5CkDuz2SAMNoUeXpAguddSZ",
  "key25": "2zMrKJt7hmp9UDxteSLHKog8Qgy2sf51pvRkMFRNSmxExoXXwcGSavdJvfabqQnk5NLH2g9TmPmyYAAZuN6NgcKa",
  "key26": "3wfc9MZRao3RWA3N2GFVxsVtz6RHWZEUZ2eTau4GSVrtN9LQ7gGtft3VYsDYwkhosyqpbZ1iRyvZoWCrcqMQfi2e",
  "key27": "2gMNtJy6pvgHSzuVBMTHobGTZgUmg1Acnda1SHQMWi8CZkT6tYTLnzN9wj1pMpumRJvB5khhLuY95VNAWVXE7mmN",
  "key28": "6EkCjzw81CSLkDLQPQaT5dZFxFbpx7D956dn8YEqJyaRudsSMBMtLd3mmfdiP5tV8FQhSuNqgrr4b8zxYUEFHbm",
  "key29": "4u8VFzcK5mWTevCxAn1oRTohheg4xS97QyJN7TiGSdt4gNodmHKMpKNVD4ioaXLk4NU92LAFZSWNY88J9DXCf2xA",
  "key30": "5k6ZhzNVSbwezG32ESCJxPQtmV6CQ7ABEUCrPYjNEWEbLAL5HV8UUmrKwmWBdph9DV33XyMkHiYjcgQDQUnne9P5",
  "key31": "22dPhuZsLwpm5AxnJgFSpsvKDnGfP1AcETJE8adG5g2dCF3BxkFyjKjYSdsYE48QRYaKHv1ZpnspzGF8MP74WEbU",
  "key32": "5f3PnKZRJwSHVFuQ59eFTpamSaKxDVAjjpMG4BGEKj6CKFkDGx5s2VMDdZqSqdhaTfXQDgtw17gfwSQiSA6eGjry",
  "key33": "5kBbjUbAQogH2sTGDTF7Sf4Z9YFBpVBgnpT25fQoAtjMrWgaAKYNscDNgUN8DcQcxk2cvst5hRN4Jue1xC3SAPw1"
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
