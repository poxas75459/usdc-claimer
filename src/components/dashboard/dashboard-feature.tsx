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
    "4TPRi597fj5g33wwnaQBEMwtuaW3Y2oamQh7Gu9Kp2xyNLggUbFuPP97RX5DNvjQCdxiVjynBu5TKn6gBCHmTsHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TK7dfpnX8Y1uWSRKn1g5uDhzBrSTokzD3FMyTrpf1cCHbQ2AviCz7uH4XMYMQc3UpRegr9cMW1AKgxprnwjY82P",
  "key1": "4gyCPQzfwwX4GeVaWtLzjbvAett8hStUV69fhPafqV7ezTbVeyrNQ6LFcqCJzK8zz4PyACWeqXsrWLrtqzDBojow",
  "key2": "5cQYuKjxXqmd6wAjGZbmfHkft94K1WGWkAwqh1Nqg5GtDfKNPubE9h36TN3bTpTv27Zx3jaAuHy9d5yNmrQMjMhh",
  "key3": "4BDJJ4NfuCpgm3RyeUMPpBp8GWo1QZG7F6kywSPa464XbhppMTkJfhttYYmxMtutngZjUDfdTcNVZ1wG4z7QTNNC",
  "key4": "SwBipyESm6rcC2DhHT93chut4vcsbafazY1RAef7ahmSJLrhFY1MtJvzwiv5i6bcUsR5CD99RHEEuxJWgxa1QuC",
  "key5": "41B51vfTAorKBFsezDysmrCpePyppnTTQXCL18dTZ8gPZujaut6mufv8iJUZcnas3JNq3PG33r7FjKpjr6pScWxA",
  "key6": "h3QDEUWij8TjB5UCRnFAb6Ffe9TcKV7AUUMApk2LYcFEXYwfQynUuTbYSDFnDZLiD9ub196nYf6Yh7RoTcGEJwH",
  "key7": "4VmYujaCWDUcyBnnSeWMUvcPmfLpRfc5znPq1cmTA5CErbxAGNEwRFreZfVZX4h82mep3dPwi1Ngtzd5hQWyvjBt",
  "key8": "RRbSzacYv4pg3XZKT7Axu88YSrhvBva4XkHHBJqXCT5xLtH53V8nfpa5co52xTFx3QSGegfRiqACzh7wxhV6qqa",
  "key9": "5DYRpR59fpWH4igkTLcW5EiBTGSpdoLdQzSh1zqaftYRgC9mVH9USkyzzWm9sabL2T28EvngzZi4AsCg5Ztqxkjf",
  "key10": "3CnthHzus33cA5z5vTE55n1jmtWeJDFkAbcnpeqf9SobnFyQy6mKEdzbTB6bHfbHdn3uodLgD8GFh8rriDCyVhus",
  "key11": "2xGxPzxDfGq6AWjUmBe8m9RTzTzF7oNSYkeoWYrdQhWyt9vHd2H9kv55AmW3d95vDscjs9ZpDAbAx9WQ8vEC6YPD",
  "key12": "4L9H1DKuv8v9D1YhYV7iYPos98KD3XYYkT1N3q2BFA7CtnA52F4jqaPNSJXMwvC7HAd898BwCHFVrPpkQG2Ee32K",
  "key13": "5QyvbCiEUPfFbsSmHuHGtpnvSevFptjpCEEwfmnxfdHFTuAp8fVjLxDhSGxgy1KLx1xikQrR1YdLrb6gi9RukgzN",
  "key14": "3f15C8a5KC1wgZcKrdZ2uSvLgvf3opvoQLejCUByP9MFN18xSnf75s7TqXXWApNxZ3S98vtDEcbsZKuLh7Z4SzrE",
  "key15": "tpuMZ4FNYbb8JtbZF1qiYF6Nx9cXPy4NUGXHUH2dtmniR3BzF8bQdb7ifn9ceDXwEXAcxM2T4aw7M1BkJd65aTP",
  "key16": "62EBaZSVXEdiz24MDU9SBdaXKLSzUNxJz1KhcAhsS45Vu74Ks5Kwu9Ehmmw6Cn1aZ7zzUatHyZLqPotMBtfnKnd9",
  "key17": "3tC4c6oFjHyPWe1hgbmUvyYNsLTTPdVvbtJccme2VhoArK9AAKhvf9YaEVaRQasSH9kxme9A4yKJ8dDPR84F6hvk",
  "key18": "5Kmv8UpATYhmskia2sWUHDKN8k7nwQPUUYTs6qtg8otreDDTNLwh8zhJDVXAZbkxKkPpQzCYStMj1ANVsuRSFex6",
  "key19": "33Hf7iheLwybCPeCqjbPdhuVZsUdcArLp6kiKtiasqS7LGUdaMg7rg2dje2uJBJ4JWaQ9QdCqxJ15kiiKGxnqg2x",
  "key20": "4L33NV241ZzvFeKvt92zYSr4JGE1bxH9mkuw1bGdragX7XHvnuQZuB1uGavuYYUvWZ4GEzS1LBinoBsMCX9bZEzx",
  "key21": "3gY3sZsGNhDq1tfxD2jmCsk9uo6YY1jpFbJtmhX6XWvN3GuQqstMa9359SavDRwhFLpqhe1Psw3YZd6zauJNCSc4",
  "key22": "44Zkir7pWUn1RqyopF2wYkYnFwRx8hd6SqBUB6JPHECM3T5z7dDC44rK62wTVmqYzsTTRHDQR9bV2XrbTNEy2kwN",
  "key23": "2LsJrv2zgw3Kd4FZHtFTbwJxbTMVDfhwcJx2hP6Ewjrghs2tqzqx85er1by3CQroXpn4T6sAdDjacdHyM7MWzmRc",
  "key24": "3otcNURToHWXcXWd1M1NtqE4gBFScsvMooYFPesBXBFiyL8patWah9vDhPTobvnAmNnLEsJx32524gQyfueqwDBZ",
  "key25": "3waGa5X86L4yauyxU5cfYKNZRvzA5TbwNiuaDqD4qb8yzTpGrfXdKhXioXCFnYfr86SMZrMUB8gKgHCqsAZpwrd",
  "key26": "5P5WzZxPG7vFFwxCRQr1gSe9SuU1ddKqCt29iRDxGHfuZEYHcLFg48cAKmX25UQfBVCqDMSAuzrdaJqMRJGBrSD1",
  "key27": "1Cpn3xm5jHuwisvyxYxFvWT46QSKdM3w3KoJdccvZGBx2CYTXrcJW54cFYTW3eTvLZudRCgXZ85BjAsyApgGkS5",
  "key28": "5tW1HfXuYKXpjRJa8L53XQPS2E44q5n5mWpCMnU4wt1mcCAcyY9r3EoKENxBjkoFUhbMhuBwwaT2u3Syek7dmY8W"
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
