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
    "323b3QKke3P8CM1vM9PgboTjx2oBiRNXYFHQzkPKED8SB58EAN4BZaVxzuKKS2QFkTekBFpnmouAHQ8RqxFoN94q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55T3pLPpR2BLP5QiYbzKXcQJk4CEc2BA5xHJuB2GfFMUYuEWCJcpy2LfXZ85zgMtJQyNEDRcHGsFb6wYSCVCdiLR",
  "key1": "564gBfWuDaTM68djhJmiJRKbhZ9J1gGTbwZTSNnom8q4YJ9gcoRKc3gvdUZmMBUk4vVrCkJ8CFzP8vueMY1SuG7C",
  "key2": "38D2zZJTcKgYMAm6K4mg9doSkM1f46cR2bYgXZwfYiD8xz7bCraj3qjF1PV6sgXawdtA6M8SdpmpnbbZm45ojr25",
  "key3": "41cU1bfiQxDTiKMmqtfLV1VvTqQjSpP4LGiizwK4h2J6CpqK7mdznPQCEwcnTd5zidaRY9RaWjXRMWQtHMg65unP",
  "key4": "xX2EDzL36xmJc5yM5WdqRYnrYnw4e9S11HcH2arEBKuLTkGtw9Q2FCPxtaW8LrLjQn61Z9UjJdzen1ZJwcVHspG",
  "key5": "pw9nvqVru9bibr82DqK1veGUYk9uhmk63YRN89rVNmgzifsX3hcqbKGRVCpuF3MFmnZA9Fg989hHznqoMxUHxNm",
  "key6": "3w4UtXXjbnEMpgjFW5f2auVHbcBwD6bC2Mw1VyXqYNZZYJAn5srYj758mXkatY4NStkxSt1mtC8SvLca3akAN1ZK",
  "key7": "54yg2vp7hArwuFMbSoGn2CNMw3kdnfpKduuHCdXF9oGpPntmX2fuqg1VCHiqx37psdnxrxEpC1kGGBy5nyqF2V7h",
  "key8": "wRJuRkFkUbB3G32q6dnxVhT6LjZEwSFAfRkDYrrRjifnJe4LAA15Nr3bjSZMPUd6VYnBHg887RApj7XWqYS8Sg8",
  "key9": "3ULNhvfTqEYnZKA3o81Tr84e82GuXVS73suKbt3wcDx3SrDRK4Yc5ma5LCWXgwLGvCVk9LguQVytaF74Q6H8PYn6",
  "key10": "5XumvR1vaDUofp6pXEkwyPcK3wwYPzoiZr7ZbD4Rfu2n3KRHT71BJjtg9SSfm3oKU4pAXtWGoCepBxVx9U6HDWma",
  "key11": "oG2yp5FajBwznZrpNiSHpgCvwbn7toqELimtMByn7hrAeCCqHATUo6bimaXeWK5aBdG5hmZTbMVwp9YZAHXYdwb",
  "key12": "3kMMpyW9AGvgQVgdFVGgBq8JSj1fCsziWj8f4wGj5prpcQRwbpBAp2iApD9XMkWDon6xcAvC6yZZegADhogak8G4",
  "key13": "6U2yERH4MizuojFJAvpXS1W3vsosao5ckQSi63KpdbyZ8MM8ofAqXLKz2V9nsQZedXgh4dK48dpjPK6GemAA3WQ",
  "key14": "2yfcU43B9HvFRyJnSutDK7BR6AnWeNPw5fkU5V7v2VtsP43MjTVAM8kFJecXKMTKfyMauWXrWYr3p4KSWvqpkFuq",
  "key15": "5tPQ4fTMqWSzQR5YZcWzEJoeHjrs5fSkpAhLvYuJm1JdN2pNDJshhuxn6GnPj4zE2CmJHmW6gV17Qy6V3Hb4yQCg",
  "key16": "2BT39zisv1vnoewwvSXYH5U1MTTEMweQWsVNpKm9pvHqgsrjCvPU54gVkZXNi33vxjS1m6RTTrFqWGZ2qBwrv36E",
  "key17": "vEM6fV6jgG9oMcB5k3Waf4hcTK83m5xBGj417Yvs3wSbnKEZDvy4daK2SVr3vPQNDxXx9ULzu2tHs7oBF3a4U5e",
  "key18": "AtPgupfZz1xreyfjRWDSTBhy8uB9d81CYwCURsqHt84PKrBDuTtCKc4RRnLy9YHgqk3bBQLDXZM8m16bMjhnsvf",
  "key19": "5A3tpAB9vLNcWJVEBwUggtqkyRGqazE3kjhZYFgrkvT5Kz5gcph8q69RAGGxUTpKtfm6H43jVUtdTyExWQbyEoCw",
  "key20": "5gVNHCfrUTPzy72WkiokrK97VXpL9x4gVunsz2XJwSHS9GRYS99TT5d3ARkkjxZ2W716oz4k6hLtV5V65Rh6k69x",
  "key21": "4ymTPgDyYhERWMeii42Y3hqBzpKsb6QTHxXPNP7UBkuouh7ZQGyfyoCn5opDhygsTGqE7MNWg15trwPdprUAfHHw",
  "key22": "4jFRQYDupS7rFj7VGh3sLuWyCvsQqws8F9BYvt1DHjA3YwHVrXydVYgKRKVHHZ429CZCVA83nPZ1sMkyaUBAu7T",
  "key23": "4baUHf2oYT4YZDMtA6pc31Kb6nPCrovFSbPaGEkB1PaQyXcw4NSTAZw2jHL2Go88pRKcyMUVzYVsPwo4jg3KWhKz",
  "key24": "3seSvGR2j4a4oVV4FHypRxBjXPXBvxbahY9NY87BQC9rxAw1BAsrSez7Wm8KXBubHof6GuFSp4t9zsRJjMgZeaic",
  "key25": "2mSNeJW15UCekq3kfJHH794XQHRd2sBHnkHxdioiLKDrXWyy1h59JK7TqxCtmB768zUsUjBAkwdRGq8ZWKUxoB1t",
  "key26": "bvf98igZVUaDSeyRZAxr3CokQ5vhBtDu4nkGsFTXfu69ZtxJDmP7MTPvwnbSzTHabK1FGvd8gZ9prMsfGPWNUMn"
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
