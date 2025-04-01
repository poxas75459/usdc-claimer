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
    "5vmriaY3sQr2QHmxQnaZXQz6yhnkR3Ex4647sADHtD5rMtFKed6cBKThnF1pGv45SiTzC6iih3rpHvZDGgXECvgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7fJ9hXnYGDTpUnL7sCHiPJ8i3q26ihMfMAzgatdydDL4rBfu7d6cjrGiKnu3figYAP8E5RhDNqx2ycZLEsPh59L",
  "key1": "2A84iJJm2ra2SkccXNZK6DTbKay9So5BZU75ajD3WoAXYQzLhCPhK51Vwx7mbZ8w6mDxVhQ8zBQb6E4fTgnrVq6d",
  "key2": "4Pf7aGpd83DVScLpRQJYTW7gKFba3MAEEDXmmxryfEY5nfdqtHxcL4aQubqsmWG67VBWFECN3YjBaKqXXxBbWyAx",
  "key3": "2LhMpspjfCHEDafKo88fX7PnofwPKyNDGbVose5Ff9qXPeu3Hk74R3RqyW3cVjNp6JWHAsGeQ2v5G3NWLzpgwKsd",
  "key4": "3Uscbx3GvTcsj2EsFrY1oK7whUxFghWRMhk93GXt2firdEUkv4g9RD6vHDdA8LTwkyerSNdAxPPAShNQnBCksykK",
  "key5": "2kfurHsaskRQELntZCLcDQvfG4eQLx3BXHAXpQV4gpRDxQMFWm9wbjG4oye55pEsZraWXQNixtS96qmcxcYwSyfq",
  "key6": "4p23swrZtExspFGGnzRP4fgyTPbiAH5vpEoLoNFypeqRT94EBNZ7qsb3YrgjP4Z8fjbgL6miwKPzZ2jXgvyJ6qR9",
  "key7": "4aWHkWaVPFroCgeYz8DV1MoVboaMrHsBCPWDpJVymUBRetVGGPGXM73JajMToJRHdZTCaHJ8V2f8z7E6LRQULzYK",
  "key8": "21cstVBnhKJfivdM5kRhRMAZZ5S2qy9naqRxj1bJoFpttA5Ru7yFHLPcHGPNBxvTuNbcvthqufLHBvmFseNXC7qT",
  "key9": "3bieSQgaf6xCyuzVoYunVrERYPYQzFv2rxuhvQpN9mTsQSyz5S8jzb9hi4i3JAsRNZMLA2QxrbEBa3oyqMQM2Q58",
  "key10": "3rtCt7Aa82Rk1o1fLyYepsRcRqKcuBLsR7LN61WYQeSt1NoxFqN2M6tKpEYBA4cLC7qGjW9QpboyxaYxEwJCj4CS",
  "key11": "2uGL2Bmh85R5qbf2WitV3YF9qyCZtLovG7EsznL1ST3dCaCFwCKSLyyxQ76TopCrrbM7ERYNAWtsSZJw93Pxrz3f",
  "key12": "5FGtwzg2yXSTGonAwQ84TtVc1CXprJ9Rb62wXHeSTSXQ6AsUDJW7oWxbabTmyaMmttzh6QHQTqizLEhLCN39gUT9",
  "key13": "51RtErMJ5PzEmCiL6fwChhoJmYJqQbsYYAq8hJqSDsJpPL7XvGna9Jb5vwSg1AruCe8Gja17Fht7LRy3MDyF8VAt",
  "key14": "BTdgNCSpsVSNkeXaCWNpqn4tFXL9zhjTz1KW5HF5PU7j4Ztj9SQaqgS1ga35Hoc2oVuaSmarrbRpes5ckeG36tw",
  "key15": "3h2jhNMDnNuzd9oQUGJA3b96XKCEVsyg4mjNUjXxQ3RMbM7qWwEHyiCob9w58LDNvHXNxo4Qa2biBDT1k34rDY7d",
  "key16": "5yQEzK45YRxtngjk18H8W7vuze98hicbUcA1G2BRpZew5qJ6cp4yVwF5ZS8a7pNFZ1NSzWbQ8P8qMvJ8nNmR4rAq",
  "key17": "3R3WPZSmk547UzikyXggDJaAG6kfS3AE9UEAPjxTRuLyGzDKxUxVX9sgihYZSpCxD1fdNqRuTUPtdxnZuz8w9mXK",
  "key18": "vdHSPMZFPU4eABDKB3uhBDvkAC8zKceMLV6gjXQ4vCvQqj3TV4zGiFEoKJsvunkwT2C3t55P3UoPMfMZ82R4xUK",
  "key19": "4arrkLVdnRBU33NCZXvhxeZ7vNnM7pHRv72MnhMVXkecLdWSa6nPUMNmEZkTeJsEP6oTRipyHe4U67WjhwcdDTep",
  "key20": "4JtgTtmyKpcPguFbSxgSiFDcZi3kExfuLgXEAG5NfQuAd89RzMCe18daPxSXUJ3VhkTvauXsH9Sv6Lc6MKkaoTUA",
  "key21": "BUmUk52R7LoHfGxKbvovjeYuDg9DFhP45GEbeDT8SKwkQgmW26McXSCyvUrnWZC6bLvFiBYMYaRdVb6JMTZutVq",
  "key22": "3ZUuTyqpmnrTSYf8DSTbNusbozFj526G46dPks5PHbmsiBSnzPX7yDtdZCvdmCKJ891MDqjsqo77gC1a6nUY7fsb",
  "key23": "3nJoz65jUzdFDvqsHCLZm1KEDrqjFRvem3BJP8XG44VxMuCoMb44AU3QxE2M9x5KLXsaLhR4ZKY8YePiJe5CwA9Y",
  "key24": "2GdyvQ536YW6tiSRWMFrSxAUwJAdTKRb4xYb67ozXejBnd64E54ydFsXo123GPa7FRX6HJ1uzq8Ze5Ugq4oek8pr",
  "key25": "keep1MMyjW3ojLV7msf2FcJ5BAtPUotJP8ZkYiyfVCCb5CzeFm3CEei4ww4qzGstpXV5pXqqSPPWhmBvMnp5EiZ",
  "key26": "3WDcjgZaHPVxRfnJxxLJpMVZuWL5CPjnkxUcLiiMnhkXRWjXeK8imkrpQrkwTCFogA6WHsVLZ8J4G7nVYZJVQGh6",
  "key27": "65uUpSkeWMpaL3GtV995GmCFedmh3Vy7yHCAJNPpUKLyPLzk7u1GrkhFZ6iGHecSJtrE4hmvb3SwVRdHzqPxCtks",
  "key28": "22orChnioVnrJF3qk29K5Gf423JFnqWzo9Cpu7RgDkRRT1pFZHYNaxgHDEWqwkcaHmq9cw8PvALcFoxhn8xErWzQ"
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
