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
    "3hzgsf9qwzKJayaSgyMn1QcJabCnYkh2aP5LrrjQsB49xfWanfWvUAGYJPyjjdshsaU5vYEZgsZNgToDkT1xcNZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42wfYAS63NYYYLaf9vcxwo2iESK4kpJC7AL6AJzZXz1S8X5RtnhYUzUuE7kGxo2qpbyRqWbA3v3YAoCuiwfucj3j",
  "key1": "2ZKQRB2jEghXxj8Ln2MbMVQryLzGDu3vSPsrLsgjLzLSstehtstgQ6hstpK1HEf2BKud5z2ccAFRDYUVKUrvrfwz",
  "key2": "3fKvFxWVaVTAT5E74m5ARPtrfYUQyonW8j5cwSG9spusrHvkdu649S5VUWX8qnhzfxx4RvtUpU2vLbTtmzPba2i1",
  "key3": "4LkzHHeMpQBbmXFMNLUnK7j8rTGYTR7kzrauj6eQTcdoga9ksBLN69TEmJCqjK5RDgpnn9SRGtu8LJhUZeqpBLy8",
  "key4": "Pt18Dzvnb1CPoCD66RYhX3rwJ5dn7ENv3ZUyzn5176ga7KRUQ1W3nemggV3zpK2wJjPQS21NPrjFKPB73rSnE6L",
  "key5": "2NaBpMu1Uw8fJfDYJhqu5Auaicat3qax5vhpdJ7YADVpkuNgiYiTgEL4Ypmjwtz3q8TQz2oNCBvGF6Kh5SPH8g4a",
  "key6": "3dnvre1ehZuRGTL7SXXLaZ3qnNY61miJLSTfmrt44owowGfRHfQCWA57p5YuSgjCBoCNBVsgS53D1xaHW4ZjVxKm",
  "key7": "3jiqQ8SLecUUKvsJKEJFjpgjrbWqm37fFmNhDomG7bpr65Ztr9YFNHKEkysUieZuxpTbDcazFnjpwGgGLbM2thix",
  "key8": "2vPpg2LZgZVSDt7EmH8sksYokPQQ6svHomsULjahpiBFnbd8Hc6vRM33Muu5swACMBU1T2UtxM6e3NgdBVKP6Ptj",
  "key9": "46qdJwHueGsqKjzoL4AKZyEPDsFj5YtY1C9xi6TqAbHqpW1JGgT2XLb982BW4ovNXxD8FzpPQi2rAgmG1UaQKKgU",
  "key10": "5uk6e13LB6Rv3R1LJcFuYszkE6Ygs833CAjZZjGwcwKcrk178ro7BeGYJtxvcSYmrwByUEZmdvihHbU9gGEWmeQu",
  "key11": "2WtZPmM2jkCWZm8PrpexTsqVnf6rJ6vwN9DmtrhXgefxgKkbxhpVoukVD6WzGgi71f8dpckzc7MGWYdNetxPqAtJ",
  "key12": "5gfmY6DXTVdGWw1zsQ4bd51dsmKCiiqXkwfBCAaquurnmuDFToUaqhPURTNWQWgaoZELWM3NpBBSBXFy77M6pLan",
  "key13": "4zgfhf3YV9uXFRLmVSLvFmBBrHq5qbiVZ34v4P4UTpyNxJDi5LkdRsUf7Ruc6CkweLjJJZkWzYkDsAJJJb5ejaga",
  "key14": "h1sxYtDbZh6iFVpdMgTTTVJUBvsunDAjWExJuaWJNcxNYTBPxEnJ5E7884SF59vgvrLeBJicg6tifWJ2MpwFBgA",
  "key15": "2P4Ah5zi3GEdjjN5QEtb5BW8cnc2CrZmFUjh6UpUJAVCo1nJFMfDsa5efBCxXEYBjZVdwBqXZd2i3b9Z3h2Q1jUH",
  "key16": "4bSkdUUSys25ZAB3f5j5QnK1ZL1PdqeSRnSgS9TDcPMSktMVYXN9TCfztW4kS3mUKjx5nyrQ5p5GTdWtjpfNczBq",
  "key17": "4xSidvG6st3ACtS4zHy3LAUBFgkHzZEwwxXqhmsjpZ7rk8Ecy1s8E3LNvD4ZLyzGSmBWnJwzFYMFYiUrw8T7h6LK",
  "key18": "3TTbZfHgYTGPaWNmYXFX9kF8knkg1xCTGYY45378dN91DCP3uYRvWacFg7rnSX9AyA95EBtRM4nXwqLG3kfV5oTx",
  "key19": "3jxzFZy1iK9hE3u5q1iMFpW9e45YmKrAJh2hhi1YUNbN6T9GHw5q8GfGijKvGf8tv6UjgUfErd16fcLLXYk2P9SD",
  "key20": "3aFJ9Hsxn41xFTCgAisrLVY9kARGrCSPHef4cbBmaHB4nKGHfoEQuZSaMUAEHaGkTZhPYx2ZmeRAtbDvFc9gy4Ez",
  "key21": "4ZwETChpfmNqGejZexUtgm9p8UMwfkurwZpN5cNMT8VYS9BiFMpv3J6nSC1afX1SFc3gNgPeYuekHErWvP9YsKfH",
  "key22": "463wsGJdYso7wzrMhAwqkULMsjfbxQmS1j5Gp9opcjs1V2Fwra3AUWeBnuQvGF3VNh2TmiBAb8J8SvBTjTfXqhJd",
  "key23": "2eYvoFsJf2G856r48KxFfX7AfYYC4t1CGfuFNFvDU8arz3Tfhn6BJDSfuG5ZCTXwvHYZNX43NLyZFwA4Aza9pqwe",
  "key24": "61oSPzQUgt3tDNnhsHQBTw2dMknpdXLHyYjJ4hHe52PR4pA9r2x9z2E5Tdv8rPLcJ7rTxMwnkWdRDXjAizNzpq52",
  "key25": "4PJbM944W6uCpitR8iQBR1cxsJWPNokPw3B2b9AiHNCAP98N2TAWvMFMA85UhUf7Rq2grKB1ZeY2H3igyfRuD2MF",
  "key26": "LPwYWgQyxhQh9MJRi9XjPGJddNEivMKn46SVAficFrUFXrzSt89bHE4XQysJMB1iJqsm1RpqzzQrrQ6cpoKr9SZ",
  "key27": "XMZE7fFdpuMj2HDc2JE1sRvjW9uqUnzHMRt3LNHV3NXBFx25FcjRLhxeBRnQDYCzeRWzsTyAbCPTB9qbsE8Rt2X",
  "key28": "4Uoyef1SEZJrdbxG5D75szMa5k4Kygcoa6gECnYbxEkjUg2LYU28AXcfsythc8Vk8FgWjUwT8V9yjavNHd2n9eDA",
  "key29": "51ZhiGMy9dAVzbw3C8vqXvWaWnPm7QTuEESPp2A9VcuMNrbBZex6LCmY2PmnZZNtn9EZEWPHiM6PFda1bXhKbvkU",
  "key30": "4G4Gs84Kcpg3uoT51vsFvRYHBhaDWaHoiHZap4R73AcirsK5Ht1JhknfRug2yXuzTRdSk3NzUTN4MwaPWib2m2Mt"
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
