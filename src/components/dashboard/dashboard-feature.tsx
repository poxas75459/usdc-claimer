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
    "EmvnPo5UzqVTm8hDeDHwua7SDPdv81T9Lj9B7vuhV7eAtBJkapLqrcT3k67iDCSp6d3ACdTUpYQf88vfctQmYWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ybqxsv3e3mhswcspgnwCZKpdmwVT3sKZ9GT9J7bjNSnYoi7V2ShcoKLQtHQ9R74aZGPzaxauazKjFLorD8LMKo5",
  "key1": "2JnFNBeHwGuLKoYPPNN6KPA1tZ7VoufbL7eiZ5uHFRsJqAeKj3Jbr9yKaeVvYCM4WrYtidNZTabAovjnTKX7xhrL",
  "key2": "51jVJCvAmdDcVSqkdUgSUWGx8h3ExUYU8ZdCfPzARUnXLGCtam6s2Fh1fzpf7EPyowcPMsRudijnYdNM8S7ne4u",
  "key3": "5Rh79FiaNyvN1kbR7d6aLyNXxkCFQdgWkb5jB8wny7F7amvPJ1yvVKHE9Zo6buwQhCxAba9dKKg9w62f8oXuCqyX",
  "key4": "5MJahAHxBdPFzp9GGGzxM4pNW6KMs56JW5r5hjXZjZtv3t5KvZzxVVMMdnXRxx7L2HJaJd2SJiiC3243fNTE1smK",
  "key5": "5XZMUDT7NYsgX4kfu3fxjQUPnP2sVg4FMd3gbporcFJVskzd1vKaMjSnQr5hPGjVaD4NohAaVgzf2YPVVufGr9n",
  "key6": "4ZJSAFbe21cjA7JTb57t4JCbx4fXobaToFAak8vi17jTPVmKayuYKgE74h3Be5aNoG8zRkCfUfxFwDDe1PNs5Eza",
  "key7": "D9jLe1k4EWm5hr6WeRZRE5riS2H1whDScqPpYzHR8rdZr1FsmSyHhBnb3j6DUtzDaPr9sYCLfwdtbZFqauM5EHB",
  "key8": "53ys4ph7GMUvrPF631Q75XfNWNRVvgouizuBotDxhFLBdbZpfVz1gUUKywPSmkWDrVTWfJeiHwMVax9qKXh7MtFt",
  "key9": "5fDKGqAbsTu2V9FF18x38aaVnyPkZKuSxDCLb8qvAmqpN2BnSFtSjyGZPMcWEseVKRUgWKm7EEiEpuQCpxQAYKmD",
  "key10": "5JEZatQvW1yz17yZGzBPKsSkML3YU4s93M6F2bE9VGbqZJbR68ecqvD62fiiVbTSaPdi5CVL2cwnoh5JQJgmN68L",
  "key11": "2JgAAPx9jtGVmFhCx9ZZp71ajMUTeZVGr9pTVqT35oubcAZp5bp2vAorkyaLM1cLrrKoGurxTbY9WnDdsMGnT41K",
  "key12": "2C5tzowNWPyv2RTjmgR1ohXQ5rMcfAh5GLTmEskBKgSWENp52WvWuJVrhB7xsXiDbob27GKAwcXaQtUAuYSfjxRa",
  "key13": "sMMm7LASAsF3nuaNqmZJkijJGndLtkmnd13YDwEtNvK4aH45pd8NDTDW2rKBTcBScDK2DoVNHtjpKYSXARAqsS9",
  "key14": "394kFuBb4brBc5jRUEVhqTz3Yio1tnd3GDKGiFyShfsgotCJXN5GVSHfVdxP13RJwnrk3k7sKRGUCSJYSap1nUNj",
  "key15": "2Cj15htBdv9bftddM8gd358JEdQnex6MA8HmPz4uGoY37WYSbJWcG2aimso6YbCuy3GhAvWfLafwwDkJqY9bdibK",
  "key16": "WosQa8k2ikGsi4gewDTTdJyJiqUrbAXWndzKWnC3fFhupZYkTUpNnsJonmVKQuHVHewLhkDPtbkcGfWA3UELmQg",
  "key17": "2K4J8vjYXRxLddrNpYpuABy6yu4PuMvR6NdXzPTuoJGNBr3Tci1T5JkNP6XcHCi9tCANBE27HCtoRutBAqx3ySTd",
  "key18": "5BLvLiurMSwoSbKTj1Jk1R5wowMVM1u2sWmT6x6CwRRjKX1r6RusqJkrUNkbtUubqB1PSHdYHV6427XuzYgkpASJ",
  "key19": "LWHdpnzGhsZAzHiGNKCJ8nv9kjFAZuaagMCzEMj9g9VF49v8BqXWi3equ2UydR7G5p4W4VNnnDnPfqKPDxSavEQ",
  "key20": "3A5xTs64NvE3Pr9MntyhZ9pwPDBRFKMwUGnLyuMZ2DXRkW2dfz2EUm1TQrAFF5QoAiPHboviTyxGdc5uPQFEDp3",
  "key21": "5JpM7UvNywmvMEnd54ZM23a1YhWbjmDyGvAYmU9WuA1tSw4HJcZUdU7t3TMJDzHpS9zNBSTYPTCcMmZyJsgyocMe",
  "key22": "57zkRHr1ywPhBqMgni1AgRVKszCgi4PXuwFB6GYDH2HDQHA8oXTrVqV4hHhAveJ6snU7LjWJKfJ2aT9JUhhdC6DY",
  "key23": "3k58LduDJK2drkt95fYPutzgfaHbnnmUEoCCFru3oMLtzFqjpWPRzbzqkSZwb89DjvVDh5MKBS79JDEhPLpL1x8P",
  "key24": "3fh89wtccFju5TNSjffwQcxnLNojc26rqve8reFAgpNiu44MdckSqGNZkqeBkwxinLSxVsCuyQVpKmkkoSPSBrCL",
  "key25": "5fLsoHzN7EBSCe8HWjRvvdpSVk5Ds54jiLF5jb5JemtsxzoHqe7DB9DtCf3xG3gXTBk24oSCiu6DzQxWVH7Mdmbt",
  "key26": "FidjGdLJrvp6CybaSzG84JF9tjXRRaXQSa2guHZ4EaRZcMBxw7ZkgpTtFDQMxtX42GvGNat1hvDwmtpKb5tf6gn",
  "key27": "5zHDaJ8ewNXMFrjNH1MS3cPt8u94zsQW1oBfTGmtoZ8pAwyGVxQ5B8935FtuuJKCM7T5nzfEV93LRJwZBadqqJZV",
  "key28": "55UMpLvVRLATh8ieSrwtCjBwLyqwwrxWKXwgvUyfWJatvFYZL9qCN68QJ28jz7PFbXnUc6J8AsZXY1qV4gKMtZeP",
  "key29": "3E5JkfpcJVHM7RtwBEd1vBnbZM9c3DyrjkTwgYGXskokbGmSYLiqRUbSmRkAnc4M4AVGmSxT4QTvwwrMatpkziTi",
  "key30": "2tossky4gL4ZnpaoK4emFWNXcREWip7S5zXUacA19gM532niG1MdG9YTh8fpXza3RZDphZHs2jg9NdLTsG9XXPBM"
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
