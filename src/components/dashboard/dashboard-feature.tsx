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
    "5vXqA4n6s1BdgqtCKdgRMbq5pejdHiKZ8W3fvpK49KL15hKy9rM9xrnKkT2maLzxW2AnjraoywjjRwh3a94WnNtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NgF3YQ5Nu5gk36pRnMZrxqhSscWfUYPtujsbcv943MW8GUdyMvAZKP2hyhAAYSJ1pte65UsqaAnY7VKEAEaRKaZ",
  "key1": "4ahtPVyjEXK4DuqozTpneghmeS4aeG3HKHpABMruYSFf4Rxxp394FiW5ee3YXgCYRGJfJrYCeLi7bbWLqAK3SYo2",
  "key2": "4U2YDzMCfRzGQe2XLn3ZZ7E7RgK5VZEdW37WVGU3117Xg7kE3zzWanebyRbUMNw3PMVvuAuzGBeqMSNx5WxwUPTR",
  "key3": "4CK66f2PAjC3wmDkm5wfZhzHZccBkfPEZzTBn8Ans48JpTKek9CANNQGDxnm7idLYvoJoA5vhNEfb5sk8n7LGV4r",
  "key4": "4gs3uaoMuCeEmwDxYXp3DAbUaMnfPR81Q3828Bo2przFDr883MSnGjBzNzWM1zT34MjTdNXVNLasxNhiEVGK5Jbw",
  "key5": "4rUm72i1mQvHVWZYHTuiHVBEsC5Rpn2u4HLt9MB6zzczsUe1kTycpKLUDFKSQX4Xzwd2WDzR6bDJFbW9ectBdW6t",
  "key6": "33PiDjgzGrTBr57ECqPoSovK2gusc5KkLchsixgnp9KPcXMAxPbM4ToFud3VhqNqq5B1orzLKZe7dWygep8Zi6HM",
  "key7": "4nyy7toRHhphaFdTZowCjAnib22XNcgynhjdYo6HwMzXiYwXShFk6KxKQ7fUEXXTcSN8y2Ld6a1AqrfSTasX68Xm",
  "key8": "pmV5e5jnKpRGxmeXKWm2GUXByPEcAi3qfVVU7Q23riTmvxvQqdPPAJm3Y6uypVkbbJ6NYuZgBZbF3EfCGJYgJ1Y",
  "key9": "5JgeidXqXg8VdcPiBtPbf3gJwkKWQe3Vj4yokwYWvZUovLRrRDfWWwi6zkxLG1jAhDqAr3vaXeCRauG9Ddjh8i5j",
  "key10": "5iM4ZYcZoN7M1J1h7iBr655pfKTZkDMi3m3QVnBMJEYT592BvpGUGeKrxxLiMw2F4EiXEZYUh9PHb61amYqKStbi",
  "key11": "5aGz7JzhETt79BLVvRi7cZBhiZaBhWRj1HF3Ewaj59mxEdsMyBdhPAoAcJqW181bm7tKMT1rWuSype6RHFEuvU9f",
  "key12": "5tpnMMyz2VkaezJbAcdHPFKSk7URE6VtXpqwCwmWgLtX7cPQXDZwDJdaMELbRzyAUeDPesk8zvv31iznhjLEALsu",
  "key13": "21M4q2qU8B4WgMUKnWkucKQ6B3nRjgjt52jh7HoywV7WEz9HYCC64kyKspAob7T7PfDAvNfHznZgUt79YXFTNwgB",
  "key14": "MYnwp13qwfwEebMAxzfpAPPVuZSsF63pgB5bDgmbLZQ4YQkaML7bUWFqxiz5MeTLuC1VC1VAqKdsU8o6ZvuzA7M",
  "key15": "5wZ4MWFrecjRerR8q8dJ6727AnT2vQdrEacx1hdKKqa7TRMNYD9chQgumLLTaKyBPUGfKAQJPUikLjTvzJ6L84Ho",
  "key16": "t7uw1G8CQxmLpJYrWcsLinQFCp2JbQB1Eb8Dzaz7NqDbPC9zvKx3uppyM4r8zCNQ9JMNhckbUUesTHmDygRaMDj",
  "key17": "3JdDnLN41u1pqpgtBbkdBhBgCgWG1DyfWg2DftGPy7f7zdYHKVUqLMmXs64prjbLdLVoqikobVfn9pMVqLPLRSHW",
  "key18": "59mXYMKACoqmXtDrYXdHt8TwANDrn11ths1hqbYP5Ds4gc2nTEvuK4Pq7CYdmDSRP4Ved1RR5ACKFb3g2nZSCvjB",
  "key19": "4KPgqDhHFmRma5J56nH3ZzqpJq5eARerEoASsuGkuf39YsP89zhhM8GLRS9A2HKC9Xhggh3SZ5n9D46F4V3wPDZe",
  "key20": "5n2miRE4pYBWGsx1xjESFDMbKgcsxmnD2iL2EQB1N9JM4f2ivGVFJJdcnJDqkGPprgUUNK5uN3ahz4EzKaiNqDVG",
  "key21": "63fLz12SPeQ3PbkTff4snbepsByUE9uwCUHQLEmigtKvPUkoJoayCyZyfRQoGNn4VLedWa77zgnCKUUxBxTvb25c",
  "key22": "5jQjEcbAneSfEuqQcdue16rwXRmRpfkmzSxdztH6t2PWgvRJ8Udn7q73GES7CweQ9L4jQxy2yvwDTmGQSSpeD5pc",
  "key23": "4tZgHBq9chzfBaYiM9RnDxVQPQACtT1njpvf2xkiL9SvZzmjpAq6xDqwprrJgTcEi6xETjwHvp2mHP7eRGuAPTQL",
  "key24": "4Qrcw2UnFpHzTTPwxtHsXDU7eAzm77ZPCgmkAUCpt4YpsUpY6zH6rs5UwQ9pezEzoVvR3yV3iG7x4LuAER7JXbof",
  "key25": "nXXbEZDFZpobSPxMMjEt95L39gf3NTBLBNxe6hf8kcaHJgbgYYJAe7FiuqeNFzfCVxSnin44D1uhmNi7cybo1R2",
  "key26": "5pw3WwxgC7cWsLxoYVFViiMDdyEiXyXUuYBuXLSXQgmPy8Cq9MNz2Sx5QCd3RpWrBD16opRFC5zUkFVhbtHKKLoS",
  "key27": "VhX6c71HwFWUJgLVoQjeAC1QRaX7QSiU1MjssJusqndkvyp8nTB85qRjZSZ8ateBKDLz71XkRvv2B4YEuBAgUJx",
  "key28": "2eax1nbMaSnB2YJYJi2Nx9VPgNKf9p83y96JWuyKCj6EdZpp75YtnwnXNvj3rYWjvgo8sd2LABc5faSuXHdkKd1H",
  "key29": "2gSERxsgc9Ft4XyuhGHjqobsctzPdBamdoQNxo1vUdhYnFnLkGrX6xpUGJDPsiJYeKJac9ELg2XkajmqnEZKwGRX",
  "key30": "jKfHDoxj6qLGkTrR89t7zzELKwbpnyDGuKXCDCWuKnFcWzBqM8QcLs9bEjw3CkUW9KPd2zjHvG3zar2SwDH6KgT",
  "key31": "UyNeC9qgpbmWCMMtYkHYRSZumUCYVmg1Z95BRn25PommhMjdpqGdPk1h1fEPkntC7DwEa3FhByWxLhivVY1qamr",
  "key32": "23LoXp31y7XJxTApW5sLHxZDajHVBLx72pndSKLLEcpwt2zuqiQtyTZTnTTBLP96QQZjJFGEkecKhp5VCQREtsbw",
  "key33": "dQdxSdV5nQTwigadKaw7b8wbWxhieNR8hyps7P3yHuyvaAceyHxViBa7F6kptbf2MZj2xKu2SqMc9LWZ1UbMbL3",
  "key34": "3LNuy3SvkJC8v9isME3PcakXaZQMd6jzXTY3zmwRmwtBitH9qcQSAcuw2CJxsE4pbjhwqddiY14ubVcEHYMsCjHW",
  "key35": "2xhfuY4Pus98i7nFHSDmVLd8SeRSeYJbPwF2C6pH9n2NXofc1rU2hmbTsFcteSgXD1SEstJo2qCo1AyQTu3JtzRs",
  "key36": "5gHXdj3k2HArrr7oWta3ez3RwU2yFWRtr8qqgMwYDq4NyYNRexGdsLM7MMzEUcpcHy3qjFLQqDyg1E1ZaNXNUmM4",
  "key37": "5mpGFraGSmwLp8w8B3s2gLGEyv6RaHfGeKGgGWd3QNALieXhhvvDKkG5Wrv5WB7xGH5SvHCQr2zjaP4mqhj5Sy37",
  "key38": "4Hm6EyHSAWghfvgNgenwjdCaqwXKLdr9tFVvyQgqwxt8oSFphoh3hizBQCasNY3Mc2PBS77Zshbs8pAVmPD34iJh",
  "key39": "4yufc6xLqjq9N5TWTKC7epu2xiadwbQw8H4E61PeB2vmvHts2LnuK1Jngdtv47tcMCs1qNGB35Qr6qkMQJoVndBr",
  "key40": "5EHESUXZDTmFx9zcze8vhUJamr4JtwHGjAEQL1qivJigKcqToZUk9maaSWuYfyoiSZGL8C5dybt32nhmBtFnYggt",
  "key41": "9kT5z5SFRGCrXAoHpUJoZZNSW7qoufMnVT7tqWrvFPzq7xQ3NhRG8euYWZLfFNXtmc2Z6KgkMMgxoK7RnvqdzCs",
  "key42": "4Hs48TvZfopBYCZdKq8tdSNatgwX9FgX6VsTQW88w5HCXVARunoDoDVG1EEJDJ1uPpEfVzZonZiZhjaTyhHzqEwe",
  "key43": "5zTDxDbPqzvEyCVkXktKnzFEN91WDZoRUejDMsie2s6dCYrFjG3Q2U7aRyim64FQnLYph2x4yxsgM6wb6LjMchHM"
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
