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
    "5ssbDAVhANSXTu9r7qigpb7vZZkSHHwJNCd6iKeynE4daMEFySnzktYLbQnSYqsGZzdxDxTrro1MqmWhGdUiVX4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PWDkMtwUe7Wd1q18e9bZr84t1juVmis4EeHrbV7VE7BnwytMtf7fmb3RZJkkJv2VQzQP4fx9Tto69sJxLHFUWGp",
  "key1": "2N8PeEFTzNA9oPNSZZSjRY7RdFfegzihKdfAQT7W6NYfUBMEAojA4nnCuFPPpRaP5GZH3sbfou494U6STWAu7zH2",
  "key2": "3TSbUv6VPUF9VcLgzpLZ3Nqa1t7ny4cyTS4tZ3Ps6hBTEaZGDSNFCUi66vUKs2gHZUJH9nAj1rCVzn3WqAi6fTp1",
  "key3": "4Av8Aur2ai12dX8HPPDcXcS99N9eJFLRh2V2ZYP593iRmm3wCqyY2fst6k3daL7SprrF9LD5NjgxK77kPLuZ2rN9",
  "key4": "njfff4DUmLL7MSvb9FdQtbLoTkX6hxxVLa6EczBA8fnaXSbDiTVidPnZwFs1o8zxe1cFe1wSkwrdNdAHBTr2uzL",
  "key5": "4mNYyQdFiYbNi3WrgrdDA41ib3cnkbu3jKEBaURNfeZp62jv6yDxwV9NQvwrMdfypyQpLMua8vW3YvV4E7ybXJhZ",
  "key6": "5Dmy7oAEaskosYU2NoBfKQ4wZrknFkqUuoow5WaRdGxGGNg6rj5Zuk1gA3YjpDVcaQ1ospfyMuvKHLEtGzCshapw",
  "key7": "3hd5e5oCz9G5KyNpWw4HowRZF2zGKRL9S6sZoqaLqbPEnKsCLfmg1HcWXeTM9FpWEUMBpypTy63CroHJbw8ejDbt",
  "key8": "2tY67qXEu1A3ELK1EU4oFTjj9nHg7YuULsyTjkzsFtrzPjehwuNFwzM6eaZVvLztyirBcHnJtDvuPsNUfXxoQpaf",
  "key9": "djk9ReRKzfiKAdfyY6sP9d9jPjzhoQ1kpfDj44E9GVZi7AfZk5V4t2ejHe8MqUkpLLiAttQ838aNZUeEnj512FM",
  "key10": "26VJ9CT3k38x6y54y8dgcv1Conf1Pm1XyjRqbZ31KHRBqhzKwGntjZ4VHr7PpvM8h5ju4bPHi8Ljj7PrczQew3Fw",
  "key11": "X42GRXRhaTXTbMmcdysoi76nk1WC3LZ484jh6n5WyEb6jnbHsnYab4XoijXsi6o4zFh33gPX2fdLDFp7yzzp5Fm",
  "key12": "4axMvnJ1jX8bw8MtQcqVcGP2HbmsMujkA2kpNyKuNAWD7sHqH1mWchjeJbTsL3rSmn2cCVomG67AmwefDkuyypmn",
  "key13": "4Qfpnjs4e7dnas3b73HEAaeURvUnHsY93wpsf5qDxWF2LDxLgHFKMhMF2ZaZ4gGGcW6qX97HaqCqKKpBKVodgPCN",
  "key14": "5NGXZ9pWPjc1ucBnfP5nXi8md3U5gk2hjjp1wjLbwrmjqKvjfpQbCtGvntQRFYmqqjWjF6fAZXtN4VbK54bEoEZ6",
  "key15": "EA7D6doGvueBv2WYXnCB4ky8CXyuVrSf4QpLtkXD9PFrKgHHACwVtfDatpDbEfVtEuGASRkvL6XrKSzuhhs95nq",
  "key16": "5ARqHZ1dUmo73sNSjhQSaWhZKTc9MBiUJMMfvksbqUgKP48wYkt1krJBwhTExovsW9iXqaqt1V2UZbaRjiYCfkj1",
  "key17": "5owrC9wB9CsgrNjki65YaPA8DSbxxDHFpFUG1G4yT5J7cdJ98PHixMRwqzs3qjMLj3ihpFHiwkGAhnxyUDfcj8DA",
  "key18": "3Z1SVpwfMN22UnsGM2mvk8eVzKCk8B39RU62ooVTWckEeVX5e6uWVUGWXkscyKq516Aq5Din1sq3mENiZtXfjRZP",
  "key19": "2g1X36sNCM2MQRzp48bLFPCATindNZLL5n7B3A9WoqYSdSMSyZRk9fSY9X79UGbQ9T2dnsuy8xpXNJHTLvhvcpVP",
  "key20": "3jKXe1budnA7nwYcYcfNzqx1gPusCSeFQ7yPXPkkEayQTmQ7a5E6dPTWWuUd9FUCKUahvwqQL7EniJT28UA9wpjg",
  "key21": "5UrTXnJmSb7ucDX4upLM9mxDJ2o3PdSCBeEYgfJAeeUo5HKzpP8YQ7LzWiqcQvWQFQ1J96jV643AX1b4NtAeE3Wh",
  "key22": "2eUBNp1zieSj2rZxsGrAzHCHLUYuXJBamkkKjLpQVustMe1myeXRPgq938jwnc8hvmSvdacmB3nCWZBBruGYRcUW",
  "key23": "46vQobMCnt8ehQinnbS4pa5Zdqs7Byc3CQSjP4RSBRjWKR7W2F9GnKXY9LhNvQBy7FEGx8rpb2yAbLMhdvCe8SiF",
  "key24": "2mr6KRqr5qzsDThYs9QEhnF8minVs9Kfbts4WHuBdMjMyVj57E5E82kt2HJ22AQgFBhZSEsacbU7zZnTLUoXYBQr",
  "key25": "2BggsWbNDKv112kExmK941PK8fGj1ZRCadBpWqKARHdd3X3qRewHTt2d5S4cE4fphw699JtYNGoJeVBfojiF3gGN"
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
