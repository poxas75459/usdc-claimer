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
    "37D4JWChTyzY4EVdaPnkssE6vHFsqjU3eMpDUYMgRWwY7MorM466bHg4gnvXsCRhAnV4sgkhksAVTA2EfU2yCgjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P6BifiHqvkqD7K7Tp1SpVAnpEzqUqpYuZCoJFeEq4wVoDptUha5LteWXNytS6S9knZxoFC2B5Vedw7FFJjhjKNp",
  "key1": "fBqLnoWQBPfBGMgD24heepw36FbC3GdJERuZRA6GTtG4u9eg4jaRDNh4gayt3Ex9vLK8rqCTD7sfitrk66XRJ27",
  "key2": "5M3wfQAAJY6WvEDn6aH4pBcutAJ7hB5nafR22kKCJ2c3XN8HLUcdkvEWRHKqWwhrj4gwdAp84d5poSoVANYYgdAS",
  "key3": "67SZnjaVyjutf5ipP9y2sfRqFNHKNjftVm8L4joyyTn2X6vBYR1btnaaxs3kSyPJ4CBk3YsEoR1J2TnziRgiSc7m",
  "key4": "541C8w4FfSDJmLaS1n7xx9gN6Z98bKie5oPSdyuzsrqm9dGMnE88DqrdGnf2WFBfNcZ7tT3Gn5j4MrBWnketYv5K",
  "key5": "85A5MtdZcJGM7wvNpnfbgPL3g5N95caCxhgq2pnF3Bj1iPXC7rUvD178TyGWf78o8dhQ189KVGjYYE9es23kyRX",
  "key6": "2z6LQGfZXBPbvVTGNyx9AyW1feTqj3N69gLqJk6czqSNUZRB2a1HS2VExe2rhzMG52gYoQR91WWKF2oyfyPUgUCh",
  "key7": "4RWMCqhoYR5Cz1hMijZ6CSEoN69mcLw1XRUxUPkSB3jTvy7crS94TyZF86m7mYbX5rfT468Hjv7QEXAoNVEKHpem",
  "key8": "3QV1rJWAgkBQZGWZAk27LV1ofcR7uuJqgjPTT8DaXoYy2DzD7ecec9WZu2BPG5S5FxkkkpyUe1UiLfjQYNJ1ZPjs",
  "key9": "28bHnjL9G4M1j9frgRoYEy4W8XdaQqKUdr769CZGVcn8kABFrJEVefaYWkHjoNuxA3ho1phb2a5QUmkyjPUnKWaa",
  "key10": "36N17cKzjwh7qiSGSBQ7nHmCiJuvdfp9edQytdWGatFquvjYDZnkxYYg5QE6uZBy6obUMVxn4w95cTmSarufwgSv",
  "key11": "37RPxShM1ocd6eMqUyZEcfhFzLdimswoHNsHaZjdaD2nzYLFYHd4GTW7LE6AQ4CDE9oUdLVaDmnQqRiheSktLpbz",
  "key12": "238m12ZQT5wx7TCSokACFjvU86y9RQnHcyFjknwjGrESzgsSxKwamqRbveLT8RiCf1s8igyNQmcPU7FFkmtqyNhS",
  "key13": "2Kr5a2h7qRCkphEquhqWDuky7a1oMzVFitLhXZx7TWpogJ39HPbyNfdjW7puoHGWkXSHvmvqiVC2J5GGrEULAmTu",
  "key14": "KmY4KUbbBEovdThL9RWPoZGwUnhB3uu5SU8BHdEkJjeoyfYY3XV1tz7Fwv1TZyD9jx8RqCz1P8vLMFMeGNTi2Ux",
  "key15": "3dBFFMnATEx8fg175aC6twwtVZzpJRAha2tJeXLWBMonxABs7CNN5WJa6r2Ma7NCR9d9GUZaVB9jAF99i1mrZ6AJ",
  "key16": "5TNncUH2Eu5kdRjhQPLpPnvE7SpK4fUDFbocTsVERHQCPfbs4A6h2zudGMqfoUzz4LRtpGsXf5ZVZKCX8x4UWwGR",
  "key17": "4Q5D3JkDihXMadWUhLqPXmAyv9pWry6VLmCPH7PTtzMaLZeCFD2TYPUjhpssziidQpNkpdJyx2MRqGh73wVKdzC1",
  "key18": "414ReQuTZJ5Tbr3PzDBBAu9oPpMK6bHscsHEYdD1e1qt5ukq5uCDAS986UADkNAhL6WaeaGxiFY8PPMFPcK1qUid",
  "key19": "37BfBFStY1W7mGtiWj4f4QHiJ3sTWB4iZj3WouHpawr8pNUzawesiWF5mczQDSpGFjsaLucr55NL4HN9aFs9Arfd",
  "key20": "3bagh3KsEWtsiWdkVHCfZxv7zaR7sovueCWkMvaj7mWUpDYFRxJQosyutHpzK7yfbThiu4AwiUonLB5CDebPQRvj",
  "key21": "4kBJwKmoDytoC16ooV9bhMuxwQ58DhxzSjnDoVwNipNM9255u3Qffe5vwjGedoJRyQhPptZXRKLowaRWJzCahJFt",
  "key22": "4VGUGXh7TqFofcix18otcZ4td8xhMkNXrggW63uGjRmT92sfXeGND5nybowGFYy9KgPUPfSrXNvENqriuYwpGcC1",
  "key23": "5sSytRBCTjeBYCyVRwU1Z8LhEzo48CY5kfsfTGMkN19gtVBA1Uq7TLL3bQ4esdPDHeUMHJNyocascqVvbz9RPNyr",
  "key24": "zaiW5aUHnquzPX3zdxtLUxsAbUwRUDCnvt2qPbrpMDLLiqYCJS2XJJfvf1eoxyAgJBi3dhXqm2Mc3GsJGFXMsLi",
  "key25": "2EdHqUknbT9LoCQ8NMKUmMrmq43UTSrkHNUyyu4a62C9VCKnTbuUB1HZYYKdJVcjzuQhrT1XbRpMKy6d6wXVeutw",
  "key26": "QeWTGcGn5BP81fW9hbdkxQJBiHaQWDfw4AXPNqqVkHjEUwzqr1JX51d5tWzuurhSuaeRky1fcGCWhT9WnntSXDa",
  "key27": "4rPjamcYh3kLKsJtduYdMf47rbpiqHDTZkdabPfe6mLrmHyFdfwuNhaBMdjuirNkBe8pM6KzcRWsS69BqjwwoZgf",
  "key28": "4bDR4nP9YHJD4Bh9rrx2JPYYQbN4YYXjkBUJyVqQuHfVrxXdfx73qRnSXGBdL1X4UwY9zMXNHso2WWYZFKhEQytS",
  "key29": "xsHiTekYukRXE3ECqEukrUqunswRXNCRdc7uYVdUv3ambjhMLpqevni7HmerLby5BnsoVscVftwiGua46QhinHg",
  "key30": "5N6sHFuhGjVnmsM3oM2TGUpdYjeLzhSXBnWe3WiKJjtFVJ2woz1yvBFiK4MYQk849WjcV1WaTjyBsKChr14hunAK",
  "key31": "xcUg8GGj3XRV7qzxSMAXu9vNhuEv76EATgNZNRgNmXvU7em3hYXCHq7Y3S5kukFKfTHtDRz29F8nfBbRceEV33G",
  "key32": "2SWp9LBhuKckR7D4ZxfUzy2RP1jMYwAgzCmbQsyCPNr5Cy7BUX4K8dC9s57ySMrkSkHtSqjjB18r64nZoKsGvCM8"
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
