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
    "3CHs7LBvEftMXPVL4dNoQbYq51cGwPk1u1FhMFJtZTWJbFAyHdQ1F5N8TCpRA5SMPpv3sFYDU1hnT6w8XqqfxQma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJT76FvKgmQp5RJGKrVzs1SwarmMBBbKxAbPj4ohJ4Gc4M7jE22xz3hGfVvUQyTQt8UXVL33dYyDX8qutbZqgox",
  "key1": "4AtiQMMtHamyTiiMGBTvE6HQEiurXwxitxdNBXsy4bfD1vJYeudM8F6xEJUBLsP1yvs19mbFMgNNKgwwsC31DqD3",
  "key2": "2ADbJneZhzvWS7ESrYQMTZZaBbZR5nxbpy73W3oiviY3yyZfRfUUstrbacrwBZvEAbfG51zKcgAmJ8sjdKTw8RGa",
  "key3": "5kE1pLjqrmXtDYjuE4S1dWkL8ftDLuDrfEHwq7vrvPpCKR7pGW8PoU4FDjz7FRqoZVEYhkrTfT7hdKX6cHodzyLX",
  "key4": "2Do7YdRoxjDUBTejaBmxvmWtWB2JRMUbP6aDdZtG1vZYiNDUqpbHxXdDjLNqPVGbqQboAwtjYygfK4x2MHepvuUT",
  "key5": "4S45uommpYWnQjoYh1SR9itn1qkKQQCdrjmLp5MfVMLTiRxuV3B4zUpVGhJJjzvqDH4WzubQoFYDL2x8nRmMj174",
  "key6": "5pGsM2iZQztm6NhKzdEeZ7fqiADCdMkNXx7uyBFoYBYV7KdbV6BaPTUXt1SoYQZtgZqNNjuLTGwCfGcGFeu13G2u",
  "key7": "5g6pY1Vyk9Vr4AxLSRBRYwBt2BRAukbhVDp78wFZvrLFzGpbF5kpTp3hA6chZhUoWmS9wccz58t2DAVm8TbHM7pf",
  "key8": "2uET4PwDYvA7GypJrBxZEq92WGQZNmCWbZCuiCsXLnUmgDNu57GX4ZkhrDfDdoG1SuPufk3QTPBPUsNQo1wg4nJq",
  "key9": "4E7v2kSouEY2eD64GL5BcAJREy3zSYYnuToWmEfBbZ5AooQf7bQx1LCzgq3yFWow6uR8vF4LZu9iwFRH2Z4Vqbhg",
  "key10": "37gWU84nHd6pZ6QMvFf6qJ9uPMX5uVb5SxHWas9gfTHzeLMbfCrdRjKf9ydi7pAa4atB7GsCdkWAcuB6g3UffQbB",
  "key11": "2bymWYPcdj66YHUxdjwFuzyHzRsRUjAvEf8bPkFCpFJpLYdZL7thjtwc92Z31uR19dBbpdEekT9YJvSeqDEngfpv",
  "key12": "2DEW8zjwuKX8w8JwadfDbBkk6FmKPV6to9NxSHNQt7Hqc2Y5JSiwH9dDb6gme3eDpSXu3V1cnPcZFV2bknNX8JQy",
  "key13": "1rqfjaUANiajMTHCYtzAdipaQpNBCtAepsW8xToqwShbwGbHTNRP896nMxKRBJuNYZMcM2QrjLDsDDjthGtfunf",
  "key14": "4DfuA2KLpK1ZMDexRnu4bjHJfDCvc3PctFGxLG25JGve6xbp9JRFpcpVUu8gugeW29y1TNPNf6qPqsGQiX6SVmyg",
  "key15": "3Jc38iQyDRz5GDWgeA6Wc92F8G2dxvyx5TuCZYgB1NgJFAxWx9WpJrqJWR5GAyT3th7RmWsFbyVznhu7QPof4twD",
  "key16": "3gedgsdTUeV5s8zTEP15FRN2e3hop5xzHgM5JnuHuGPDD6VJFU1AY7ii41ePwVLg1cjR5A7re2iecsGynsZoFQgu",
  "key17": "58ukBK9J2J4EGbLERKckigBFzSKLCr9BaJiwnq8T2EoEJ6A9hGAHiGgvam9gMGK8GpwCSaxARXGgEvJrgweCBJiR",
  "key18": "5DyZHCmLZQgcivnN9psvKcjmxEV2Zbyhbzx3XcvJHJXLNNFzFGPPJfC6Pud3Gn8F2TjLtHdcTqifwGxR7RgBry6y",
  "key19": "cpbhsnY7heTuxTLUd1g9sidHKETjS8zocX1zWnsmwHDxgSYECpguowPjgwoVcNiF8jBhQyqtHqypGHn3QZPzQFx",
  "key20": "gX6ELX9QeM98FgUhVjU4rRG2DKMRmpdrKWbPab28EEPEPUyGPcsmQkZ8dknaaFjTL6wcytY2KBohnVPErB1yjCm",
  "key21": "nkYNkvNuwicziY7oHYbjyqZNpmaNJhtrY6WypKh7UAjVXu5StzPT4WzmkzbYm9ntsKqEKBf4wreojgZnGWt9UpD",
  "key22": "5w3HUj49Rrsb9u1nCk2x3xa3hJKSbhrAkWcqUXzajubxZfLPP6KjSvrWrK8z2ULD4PxBqWRf6e8t3oxPjH34QScx",
  "key23": "38DDeCP4egDut1hvqTUfNQGiB5o9xn7uKB9d8iJ1qBaW6ZkHAktaNcsaPvbY3Ymn2vJGPiL2ujZz44Ede6vTZeFV",
  "key24": "3nuXAtoAsCXayshdpSrBrTq4GcGgok3vbWPAqL9vvRyi3gQgdVJnW7FdXGn8n737xBABa3LwJNuE8T2oSskdGbqa",
  "key25": "2JkTF5Lv5djha8nVL9k9CXYHskB6N1KNjGWradtbUHcPJEnRnX5UnLK4KD16piV8bAsgt5NS6xhCSiKxT2vW7Wbo",
  "key26": "2vE69nxexVcxSM9TjZoehPjfqKRRLXrvHwZm6HSvSBmECP5N3GxtdkvhwBTjk3BjcajhQmZroMphGi6GfoSw7tyS",
  "key27": "53P1ECm5arnyD9scDmSv3Voov13zinaqRJioDEDcLUvGwaiAu214VhT3eNjtkUQvzUWxeGFZkkn1fCxgK8sDRPTc",
  "key28": "2crZxHHZ93aBvPTV5aKYeqWoy6DYmTRfH4wt8Pfp4FSztYZ69CYD5RDK6hRodLjD1uCaM9FoCg4FvXjxfnfiEE4T",
  "key29": "27LLc1Uts9QL38ULMC17B95TeQaatdpAAVinZ9Pni39vV4Mz7bX39mseBA6gzB5VHs3Rnza55d7iVh5AtDUndVBz",
  "key30": "5hM8nxoJZvZwj86MccKXrm9wK13Q8w4Mdx6crvpaZ9neBy1GACdhyRUcqc7M6JACqVeskhbhdRB1qZEF7Pv38HMT",
  "key31": "53qrByNMvTwf5Cznnm2NeXXe1msxpNML2SvRYB9yKEwMfP7zbnmefYa5XLuGCC8533rDVkjQCH6WazPYhAzoqaxE",
  "key32": "5mCGZef23cgi2z7kf2ehkbh1YrDtnWGLUgga971enf61P3R4Eutddkjicb1azkDa1oqtjUXMMUtGUEcjTRfjqsSY",
  "key33": "2JSdt8MgP1bd4RWdFJayDCqitMCTck3pzL4VxkPUEXTDUU5r9TNGm2isPikZRQ5m3uhXuuNPdkYpUQGJgvBKVZw5",
  "key34": "4MKTrnftbSA4pESYYYcfHgizB4habbuEPXFTPvKhm48oJ1eeq33WnksdPpqjvmDKqti7MTXbVHCkv4X1xqstF5bP",
  "key35": "5T8yBUmKzXSUk1UX4CJnvrfo6mgsY88MYtTocqnqsiPkmEDpxWcw2CQfwPDDeP6FLPouDPXUxaFyXA8s7sxYYRs4",
  "key36": "u3NgcsxPghrgcmgiQWgYbfgjTo5z8dC5gLekehbyJ951wbvnHgpjM3aJk4hStoC8SufMujRLtBGyj83ssEMKEnT"
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
