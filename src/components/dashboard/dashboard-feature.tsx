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
    "2VYNTivLj3L8S8C1esL3xRWmtQP3mHjempfLUzTmT6qSJ6sqXPPFnBfCxEgEXCBmkrjBGkyJckLDZtraTC7HrwPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NDvA6Nqi34WmRV1tSHpD9Z1Y9DodhPiEzzRcfgYM6vj5HSArzrtNZ2TsBkzwrfba8M3RRTzTprpTti3bVucSUfK",
  "key1": "utyygx3cbr8bEbp1YRpY1ytiHDhkAnXRdumTQdzsBFNvPhesMTaD38hF6p8EED6aUUEdeRKWkXsgp8YvqR1SEKq",
  "key2": "5cu41WSyLQqersVxK9rxu1fwmCSVrAfxLKhqgg7cSFnFheexx47DK8Rcyj3sAieQGdZGLKcUE5GtmT8nwjdsEvGy",
  "key3": "ghEvSxHuZm5iQFz3UHAUwPvj7yAeu2pL9XhzuKWasyxxjExEPY9q24ktMTgu4Z9Yxj99mi6G9LqiwqhfQW1yj9L",
  "key4": "2hLj7Sv7XHCedaAECBbWnwnWx6AsFiBGvhUgTrWZ65cqS5pqNPCzs1jKy6NhRrTCiuEguqRTxkakWqTUrbezd4kP",
  "key5": "5QhvBCDoZSGEyny5oMBysARnZ9kDV5FE1EJkADKCmqKs1h5ibowKt1teAf7R1i14R29j1vi1XJW4jxYQWcNLX5Gq",
  "key6": "ntrqi3MfijUBhyRJ47HE4R7Fhw9ivv7FjsCN4f9bxwtop2sqELQS7wQLGqr5ToLV8GXuFBcgTCuUEo4KEAadRPg",
  "key7": "XU5XUbHkZYcfkMmquTbrbuZpudESz5nuXYCJCt6kHzhoxdD6yG9UVM9Z86XRwwTSX7woWPj2L6SDyZNH2JFJTL2",
  "key8": "5RKYP2EsV3HXph1KFCaJW1fd8jUpRxyibpTBQTUbBYXj8hRz1qkj7hn2JXrb87acHfBpVPXLaqVCJQLetoSGY1eQ",
  "key9": "24MxjQb7jTKqcKG7YThUU7NVptVgpcT6i6JEXR653j3KMrJgc5nDJ7keE8JooyxbeF2eMF93YJZqCACnCy1smCML",
  "key10": "4wZqbpG7AeLg7VzQCD6xS6BRnh1yWQtuQggbeeaXzRBRge1S6W71PSMwQWSFfjGiheSGi4WKMaTjKX3dfNhomECD",
  "key11": "36YPHBJRtQVH1Dbxdr1dz4KCJs333VJBHv422nsKza7LoSnWTtvh98v6FXAqkf98jjTcosQpZmFGY47SPNMArdA1",
  "key12": "4ESyHyWQEjZbp7Pp6pYT3TN3phTLqWwPxsvMyYpL1VCuCSNQ7uGcC8VetNoyXJiYt9xpFtX4esJDxUKNcrGvxmK4",
  "key13": "2wLrfVSdXKzgK1mfRVSW6rVnP1UP22nzr4EmyA4j5qStZr32P7YjkQHTCR4L8KUCKM8EpDo7EqjzNfsBq2cwjeJD",
  "key14": "5T3p7shppwPEarK3edakVHYD2thEe15xv7hgUgKh12FZd4YnjEzRVJjAFgnExMoc4RF6VkBdsbVgnoBNEb93dEQ7",
  "key15": "3Sn4pH2orNdUJzDhdCJoBzgu5AyRvs4Aio7gZnGeEYV4XVMz3rvBZAYcCmcrKoSJ8Y8562AwXC8J77q2PyZMH2F2",
  "key16": "9FRvr5zh4EQyjvStgfibUyNS1N96keS4hwBJbcqQzHe2mji6dTRQp8fx81fSiPj6gXjbrPGwvPaR5QBzVLk2xgt",
  "key17": "cQS26SfSyNsJxsCEMZBbC5EXMRZHfLgBChDiqNnpTHekSy8axSLJcbF4yVLGUUWAaBDjzKVLPH3dEB3DZXH6hJy",
  "key18": "3KD13ZefqCwzDyiPoAkJ6i7edFkjds43BY3yYX6fyCHnNP4BhdRQsh9uXKGvPrzuBGm9PaeLvCtYs8Uw6UZRfdqo",
  "key19": "3uRjPQGJJfCwJBfc2VTXaAQ5duWyca2TEqpCRUbfKeMU7e2svG7ARFg77p1m8tw5SiXZv5xDfgGVSLwDuoLv7ftd",
  "key20": "eL2L67bxEyHhcYKgRPyPMxfr9EQRzSKbp4DVNP53AvS5UgoKorGnYzDGeBnCQJbvgs9KqdRfy53Urj1ayDAy9up",
  "key21": "2kmMaqWqKp1mcoPDFH97h2zzAqDPiV832ftesmCbQnz92iBQWapXAbMXEaDmVC5f4GjnS9LgxADRh6nJb7iPBzwb",
  "key22": "42rtFcSPJht7mH94LqzZf8CtBUVsCbDtcNaAS1ZC693R1rQJShoCwwefQXU25gaiWdr3kaJ1D3MG93HeNKofbAXY",
  "key23": "4ijxx5hAxU48MBJL6566cWq8SE7Wr7R4YiYKWoiUvqgQnGEEzAQXKcK2bBabWLQzNLNSv2XFixjwDVKjGfktveHi",
  "key24": "2PyZwZ4gS7EKEM7NuX2EWQRYNT6a2zopz4JSQ4xXb5yrCtG3tinuNeV9EwbeyYzMqBpq6juacuaU2uqnssovbEEq",
  "key25": "26Ag1XQYjsJy2E2PSEq13LR3Q8UKqCUE16ZFZRXVvYvtajh8HXBHfkUi5XL4W72cYAZ8apMGqNwxdwLeQkSmYmcF",
  "key26": "5iEPGFnoB6byLfRbAMhQTTP5GtutwzSosYn2iB3xC9wad3ejnhCor7nKNVvKtP5ubvR96C7b4Utwq4S6NmU5Gxz5",
  "key27": "4c1TLuWKN1jtxVao3H7KbcvmNCHwD4YJeZeXjBmozNrqukTD8KYLfJ1c2B5LkqoUx95ySX6CVxuV18dSneDC7G6e",
  "key28": "xvKrn5UcuD2kJFevHWjTRdc9mWRWxQ3tvFEBU4YypoeV6cLcGwg2xq1p34QtqHbWp3Nq48j6DFTjzVV9yAqG7tA",
  "key29": "K1z1HTBqtS1JA7VVzeR4DWccGh96hfg1X9gGgwpD9GQiK4DUYKTw3R9eBqxmwt1XS6eGkdcoLpKP3QQSJV9wLDU",
  "key30": "26VLof3GfdQ1NM2Feih3oxYaUbNLxBsEQ4Gj41fA8np2hNMdWhPdidVqGXtU7QvTsLPBg6t3CegSSQcrXdupzNcZ"
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
