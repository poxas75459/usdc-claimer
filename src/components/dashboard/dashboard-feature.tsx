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
    "znowN2fjkrtyG9ULnYN3EYY5MtqVuf8wce9FfFEHcMd5CeDc4gT8LKzczFWcgXrU2jVRMbn1hDbHeK4wT3v3hm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hQsGT4ntRTuehzx7rndFbRXVc67oKHzAVsRPoPdhFsiwvoTnhEE6Hak1sKfhx2ezdiUzHuJ2fRZsaUA2rrkxuD",
  "key1": "3gm18YMKVkYCpvy59A7VqdDs5ZngmuQhA571NhN8N3Bni4ev5yJgnbHod7tN15xqr5jL92eoz1r22wTSLT9gacnn",
  "key2": "w6pdupQf58vVRVpQjRrFFQKQ1mhDextmekipb98L9Ku35xPWpCXQpy4mXY6oLo11JiEZU6eW78Hrsph7cfQBzey",
  "key3": "3gQU2dtesc4ct8EyG2qEifeEJjFgJVGUEwPVy9oQGrZG9b91yNS8F97er8FwTViZ9zrABWY4RmY1mgm7fJuUXYWM",
  "key4": "5UazUN527ZfCqxMeBrFGiMpw4XxyB3MzAsSRNuQWLo1DTWdzVbKnjNmLe3sPq4aAWgobwCxEPqSFm6NxM1P8xRSH",
  "key5": "4k2883CdD2rPjk4qCmq8yjz8aFDku3u7d8P5HFjewmbjVwEBzgbJwBpQCFhQr6ijxsDg89zo9HTwMcXe26bdyM36",
  "key6": "jw5uHhu8dZL8j139FU9DKL7hgqGacGHCVhNuP1MeqXvmesDWZ4kErYZisZtwXn9Dnnui5wkHz2nVvHzHiixCL3y",
  "key7": "LyPiD6HSyfQnYNHxfiSXxmSiB55ka5bL6xFmFJ9jTDfp1Q6mvbDLBDPuwiHhGqE1WsYxZt5yJQpcYGZPZSTJYa4",
  "key8": "5hPiEudqgt9z9aYk2RGVpcVQX4nZwBgTV8MctkSSSkKnqRdpbu5gj29h6hFu4wPXBCJ3qSNmNBVkAm1FZhNxfHL2",
  "key9": "246sNxBaxgJ9pSGRx7Br3H42rJpLpe8Y6wBLQetc5uXVkYSG5cxGeRsSu9ncL5GNTaEq7VVmLuwRjqeKXzhxp9HQ",
  "key10": "3B6Fm4u3152zL5yorBzJ7pxxwJoeqhDK1mVBGjoqA1SY6CXudYX1A3VCUKqdT4ntZjxrNrvELfs1AiUapS5CQDGn",
  "key11": "TRFpf3c1h1hHyX7G3Lt73JshnwM3yHJyBdbKVgfcgommeZ1VzUS2aMZ9LLHgJ4MLWXDHuu92jiETthpLWgkKVcY",
  "key12": "2CTNs4hGY8sdkmfgpxZ8BPuLBdWoJ9YbyQxPxpugFD2cwCz5jUrgGEXDCqwqyauZtZ71TRwvW19Lsj53HRzNFYnX",
  "key13": "2R5EWuyEzLckPzFxZkN8bEJ8Da5FDcP1J8CKPCoUGz3szN1fPZcpXv87SeFt3Hf78eMjhsN2ctxJeMbzifwW3bGD",
  "key14": "3FyE2jFQzWN6qGVYvJfwKopRDgRUNHnAo69qjrffuJktjcPxRhcD9hTzBaVDHx6HqtMePJC6qknVgFfQKzb5G7kM",
  "key15": "2BuxfYfV5VM7daaAYF4dKLf4hrAtsd1B8SpJ1TkFeVvmNDt8vYzG1CaC8jSJgCrDBXXqHgfoTNi1Uniz9s62ntxP",
  "key16": "5Sz8x7jUrhVhWEPayA2tFr3fq6V5qbQZtGYFHne69WWFZcHhNTUHEvyg5DeRtm9dRoRaFGwrMZKBF2kkkTFzvqrZ",
  "key17": "5HLhJHYL5pceNDoHRtwLuqmbgnAZFitcwV6YtW7ti4YVG4jiJTofQQ1KqzcgJxZdQnT2R4ddP3NGcnepbiYyWgX9",
  "key18": "29U3oJhLNYEecXK7TaoHB9oMiVzd6h41ccd9vhsQVdM3kAFgEk6c2mAmDMiNf8rBTtEtXMN7RAD5DA5Xwc87yCdW",
  "key19": "2Bh52j7A5M5buCHyBX7rFW9WNPghM6YDX7JoDUQs3XPQ5G99BZqRr4DGQCbjqzBEiFBwS86EVhiK4dbKajEf5KxH",
  "key20": "2Ekrm9ghkVNBksxL3Lm1xF9wwPeShyuxorXLbWi1fT457HW8jtDkETgEwCyEUDTyZ56fH8yBTci9TDUMfQKBwUAi",
  "key21": "67QUkUrASA5ThFAKGX168jvtArJmNp2kaLdg4PqTSYUUUUw9gNFLZWQdVT2viYHnYeourXBpuxghS8GNoSfpz2T8",
  "key22": "5jRxJNiGePUVzYMAwpEbgTKmuzgjnQJgWMb4quceDEpY74JcfNAZcXuo8hJfLjdD1NKkKHVKLwMAeEv6Nh2RH3eg",
  "key23": "56DfSzbLCzXgKSxJrRbmVC9JudSfJcywJ6J3DcKbsqMndnsFrQ3KG6Dnwn3e3z1t7rj8ohD6DJBKxJhSH1pmrEaq",
  "key24": "3B2dzdfK5CM8h7PgFxwNvjqUscMCQN9Uhd1769cWcGDAEsiQb6vMuSC7RonUj8fRjzsPG7ie9NXEcetqad1Tqg2L",
  "key25": "5yaKcpH4H5Mhc4w27fJSZkdyWUgXVrgwnfMPTxcey5UKJkVNokBP25grw5s5QRuTEPaMVjpaooV6jtHUf3sVBmQs",
  "key26": "33N72zRffS41UaPocgb1pnigxSTkiY4NMVXEzcVaUVz4NXXx3edpa821L4t9nw33xZ46rkrnLtU4mPhXnK3d7CqK",
  "key27": "25Ef7Awrr6wBExzmtvscRcf7of94VsqBSac93vgnR4UPTbxcYEt7c4TVvch7MRhEg5Yqpbt6vyeEke1foZFSWeMm",
  "key28": "5N4GZA4TwmA9r2HBYmGAuyvh9KTiTSCuGTiXYTT5rH6NcmFU9PjWGTB89YJBYKmvquqSYz3Nxxg9wMsJ1NwNqdmu",
  "key29": "gxkpGuTazPkRpLxngCibcCoc2B8ho1h6iUZ3uthcbLUwu7hdBtn4YMeZbvoFvSUwpwpRQ1789X4vYdJa7AZqJwB",
  "key30": "21WrcFTghFZh2YaYChoE6mQqAVMbFmMHYrwjsj1Kdcr8n1pLfoEZyNV9wmXKybbw3gNkYWAd6YpQ63KYYdQmrNX4"
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
