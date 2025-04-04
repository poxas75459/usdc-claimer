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
    "3u9zJdS58agmLEheXdYgRrYskEejrLh14Aq5t5BgoFhc7Weexrym4brw5UjkPKhM2bpDhKca3StzwG4cg8Q9SWpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2FXDWv6mVYf4rMwHWWawLbBmkx6dR8k6Xvh2U1jZeoymKQkT3Bnn1VXcYLen5AN8ptk3oHN2LZXS8oJF3TBdah",
  "key1": "26QvnKcFAEZmTY1red5278nHPx4yNxDWPspYEmBnw96jjqzDz1PhK7Surn97MkjWqowevrwXBx5DM7FMBpNrx2Td",
  "key2": "5eH5ZZiX4LFajH1N9yxFiYpMCXxYqN79t3jYrTLXbimaV6dJSivM4EpxqTNBFALv9QwpKW7TmGYt1MiVDH7RjGUx",
  "key3": "4NTfVUAkTJThotc8m6N4vbohKSdDbbCtySSzp5g8ppNb2xEG2JbwMyvrsyjidYRk2MJGuPZqMH9QAQCMB82DbJ2N",
  "key4": "3GqqogAuumf3zU4WPLZWbW3sx31YtP53tRiENUqFE5Tsc1yMUQ8nQioCvcLu3aBC5CERec8R3DfJarjfD9C9DchQ",
  "key5": "gNAHzHUQ7E9xPn6Tv1H28xGcMnLVSmuxGbGYbX92W4EPBz3xuLAouzpQ54esCMchtdmj6NiqtfeZYoz1bbnQAuK",
  "key6": "5cvXNr1PR5yEC1fcfez2AXtd4T9HTH2238SPnDaFspuJap55b4urnrdTUEe179yAKEPsjNUX7yFW2t2UyMyuZqd6",
  "key7": "5eNZm8vaRJGt7rSNozemnwVgFgyqFEShd4c2k14JGerYUUrxK2mBUxHiwdYXBwjr3BbMcHSUfMtTAnjC5cBVSiTH",
  "key8": "7TBod8G2A7hwJVqXNf1FGZcRtacbq4ZxJrtmdwHtKNmnHnv7r7sm9raG24MAE851nQamCVsVbfcWnBX9kb6pKL6",
  "key9": "xYiUwETYjaqp64ZcCZ1SnGs3ofwvsnCx773gpbJofPXMwCB5Nt77Fac8sYcYFDPdjUDtAGmvWVcG51GfpaTGc1t",
  "key10": "3hmJ8CRv9L2CgFpgCbJzbLyqCdyxRiRw7EHRsqJSnrLoXLyGtiMo478PdpAEEwFL4a2hMNQeHLvcZgt3C87h5Ewm",
  "key11": "55Y9xKNJwrxMDhfS9bTytMJHRBJhWHEpUii2jjk6CsaowQ8cWf2GifNS4oAvFvQoALu4LzA9YvtGtYG1K6rwAZ3H",
  "key12": "5UC1CsaVRKeRc5LsYJRVCEXAc3KuBfNBjibpKBBDfeNRbd1kZAdtSY7w2dDAaYb3ZBG2Sp1RjynuDbmkqKgncW18",
  "key13": "3MxkuDGjQvHub9cZCtYmAomvEgUrmsdHUywA8KmwwFEfaTKyVB49RaSauKm4JvK76253RFGdVyLiRqBrhdSohSAF",
  "key14": "25L2RKa16CQWP9qZAcBPWUX7t6q67e9PyxHHMKJSSXy9Te2JmNDQe3nUR7JTeUP3GuZyfZoeg1eU7PHcTyz93mZA",
  "key15": "3QfKpGav3K2MG4TYX8iH4hxysHMCudcyGJ5BJSs3ggb9R3Vq3GiYV5c611JYqCwpQ7V44uBymc1z87V1eTSeN6Mu",
  "key16": "4ydP2AKCcV4dKXokCJKX8nYSpZqyZqdQ9sCf848JVrZt6HXjigRYdgeHukEE7YXfiadvcPyJiiMs9TAjsprMMKLF",
  "key17": "4zPzqtRqfo8GECB8ZyYsyN8dcyuwBzmCAsWUU3eHEvWhgMMbcHrkqhG8xst2HLcWNSyA2vu6qVnzYt8BJUyjxdyx",
  "key18": "2FuK7c1aK562EYJ2zQgPhMZUbhe4VfeBdFHn5u2WpRBHFJKLuvhxdSiGELYHoTB3vzNF6BbL3m3Zv3VvgVSZtg8X",
  "key19": "2uFkgsrguBcBUhG6VU9LL9drwm3jHy5isjKcenMpkYVfHYcRdTPJVa5q3Lx91DkzqAzpzRR9uABV1gF4MJfbiLsL",
  "key20": "63c3r8Dyr5iXdoXjsZF54F69SMf3UqKBu24vUNQgFtCWKrdrhQRpeW8ePSYA48DVyR9mCZ9vFoJBoo5jZXqiyNQY",
  "key21": "2fbtaEAWfeuNTNZmxSrZ2XmEVadFki8rLzHPuyFWMPg4STBNpNScj56YWcfbTQx4wc8iKWNKMQxzBW9aTDWdMXSu",
  "key22": "21VkYYn2cVBK9tSdYvhPWckPGrK9V8UXug6qMHQKW6NJLnwMpKo9DZqaWLucQ13sEeS48Gxx58k4TxmEcosLqXjp",
  "key23": "2Y5PGijqPTEbztiAnmQBMrs9MdkTAi73cmrPgWgGrHJatcV32bjpPg6aPqjfZKrZuQ2gxYotmYETtYBCzqtHzqpb",
  "key24": "5Pfb15twYPJwcMqKJ6WoebV61P1FgaJurzsCCNsNKEGbaHV3zxsNKtJsD1zpn7VL5ZAs3xMUdShdV48u5tPJyQRF",
  "key25": "3vbyFa3pZunNKaURBvikWsPMBw1Ah86XJa7UC218r5PUPnMtzhyNBxaMtaYiooaTsca2WJcfhT1etno8vrzagexp",
  "key26": "2ghVLK1MMFdfjPXcWaE9MsToivcTcBmArzAzXSMoueqCFAxkZaFhuCKc7o9MY3zHRkpfWEWiCjAp6M6fEZcpzo9c",
  "key27": "5ptrnzWayR7GjquMCtBcUpfguKWQ722rfPvCMwhxAid5HwfyfuYAqCZjQhcFJV4GH5gPA4UKEWUb71UQeWd9z4Zw",
  "key28": "3iw3iDBmKYRkDsdwsN5mSYb5ZPHyCi4WcgCfKQRU13HxP8GwpUkuKQ3EuVdPSGADMwUagPsVa17kaSBbb1ujF6o9",
  "key29": "34hVkantns6SHv6WTXcEuRLnuW7zs775PGMDz2uvxpoqbPfiTfz1DCCfHzbCV5fKvHUUTDyz26uRZC7b21EEoQky",
  "key30": "1Vg1kHRbvk3DxhPysztVLcQ7ipQuGdvFppBJucRWKkSGgzGFNciA4o39d6xjowZkKJwu6NgwvRBE582Eo2Y2VcE",
  "key31": "5cHW3SutyfjzqHX4tEVzJJxasVezZqc1s5pfDv9oZ9ZEj6v4Rj87qRxDqd8wbMBb5J7omUgsYuqz8hTPJMmwoAAh",
  "key32": "21E8VNo1ZDDWryQfsk6YfCx41ScLpNixr9sf3KKHuJG9iZx8Uc5BKioH37YzjYn1j2KHKtHRJC2ycsrtcfWDYydQ"
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
