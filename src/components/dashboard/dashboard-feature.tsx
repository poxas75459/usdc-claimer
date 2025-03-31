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
    "2g4jpCfCSd16mhoAn2J7LBg5CBin6anEqfnbN5xxcBr95VfGMGdYYVN2JkyfCFg6W8QaeMb28uy6p2Gpy4fDK8XH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BuQSCmLrEQxsocAyWvi6sKzc66AmecSSQsLc289K1i4M3HFNPcfHPZ13f8unw3Gyz8hR2yMwgwmdc2vFugPiRVR",
  "key1": "2hqC3V26FD5zenmFmE5VGBkucuufgUj7Gc6bV7RrGVvG3TzvLkgmfjes3tvFutSjVZdCJvGwEvVqXF1J6QT97qfU",
  "key2": "3cZqMXzXTZazsRiShkyWUt4GZ5M7BCX7UjiiDLk1zxJ757UFnvDpVEBgPN2RPxu7pdZK1hrRUHfg7hFrv8NNgbry",
  "key3": "4QCnsFGgP6oHbpQ2xAzjh55mvEvNdASAgMMw2omH39H895mn63aYBDAgAxoaXc2UuG74YQQoFCS1foAAKwnJ9xsv",
  "key4": "4xbikhs63S9pbkmX4L5TAorJahF6zTG5LVZfoCuxHLeVW5KuN4pT6m7y7mngLsZHRzAYUTQVqYQu6KEXsNTXiFuJ",
  "key5": "5pVUZZGNLpzZfJYFZ7p9vpxmeYBJEw3HMuSJZMtidNbzRF3x2oukSG7h4dst8iLoC7GF9rG9pU3Vu1HJgp7oNbF",
  "key6": "4PzbspA9Wtz1N6y9t2ts8v1DDxbRdJQCLQkBxXYs9aDzoRKbjH5dBdmpBbybiaGFMoXBT2gDgZmGuhNbbVrPQeq5",
  "key7": "mjTrRruhBNMtDHwV7EZeJ8Sd5Kc6SPWJwArtmnTPidTM1L4G3sYSd9271yACcNLgJFVva6xUe8gaVXa888WcQgX",
  "key8": "4H5HHaxwbrSbUuyR8bqPqKDU5eeWjpN3qrHx3c7ZGdp7FoKferM2EuzSJZAqqq1m7w8Bo3HKZjShSZrFGMkiD6EF",
  "key9": "31jMajUyh734BnpcCCA1TSBhZ9nVbt9zbuhQNAzmnequCBe7AruS2cHWb8r2is4urvj3YRMmDwCsUxTYPwueddaM",
  "key10": "hfPCaBE9qcDLqtSo7sxF96JygcPd9mEG4AphBUdYMG5pkcrmux3BcY1YXd82cgNpXoUNQfo8Z4uqjB398rRTR5w",
  "key11": "5n4QoyjiCLSxVdgRsYZxRfjWi3TE3thjaLrdLj8jd2Zzjt4ouc6Lowi3YQuqEfKfLZZQiCcvAHdYW3HXaR4rBqC8",
  "key12": "3NtFexVrovV9YAcWVCFNSoBG2zQJAkSWk8v2vRmBjiLum8sPct1rTumFXFm2ZLAFiGhNmRjeCj4fdUgmZmmARiAg",
  "key13": "WPPaz13sw6qxnzcBqNnoSxtaFdMiZ5tV6eACru4PVzPZrgDNP4RTPxcXDnAUXoe5X2QmvLaL7abgyGcvr1d7AuQ",
  "key14": "3zhARF9amJhrihNGxrTwAKNu9UX5ZWPWfrUftALsGjNoK3ht8wxcAYB6sdbu2wXDUJC1WSTubrVehxEdQS8R3M2Y",
  "key15": "5oYkP3ZAc2SxFSLMmeqBvGycbCUFc1MphVKAoZFWGYvxDj3Q7PLVh7wmBH1nmWftkobU7YYLcrwWcQsjhj333ZU8",
  "key16": "62JpEuCvwVpF5hrDW29ZVcZTrDHQzWtytrSBiyWiyP4iHE3jNyBHp7P1cfmbf5VSu4qnAf52EwqZd2McPeUx6tku",
  "key17": "4WghMx5NpawvKSminQV3iRLb5Gj1dDEVutH1DUMbEfJHjbEnSvU95G4ztAunJnb9gXRmSBxPdiUPccHFXiJWihbg",
  "key18": "2wD7RFEzR3cyEX4h4eSRZZVhhP7XQwSrLEB88vVUMZFQ6gzRvdwtVd2Z4SBcwcgUZWWE1F39zCpBBGZJJnWxPqDg",
  "key19": "23q5UBNrUqvjDQbsaXzo3KkQW3mAEp8Re9joPghQK2E4WeHJvq2GreiAtvWEE2z67xXuUEeSYkcMMk1z2pQwkCTg",
  "key20": "53M61xA44SDfpMQVBHKPXveAZpKokvrgUgrTk5pu1J4iJjNGRbaZFH7CeGNkqDkPQ4eD3pzbm3mi2BEUx81458WZ",
  "key21": "22xJ6cBuNX721noZDP5SK3VuMyt4546adynxkpGQYrRGWEjjtm9ViDxF6Z5agxVZVivg1dqYL1hTNDWyQjovjggC",
  "key22": "4jE9oBp6xy9bLYJgy5wmfYdk1mtgchJsVB4yGQvKjhopeLe3oU5XjwsPEftCx2xQGJfejJntrKNe176FhBx91Xyk",
  "key23": "2FZirkRfDRP7VPNfdYC9gVAQ56FgxkLTSXbhE5tYB5JaH6Y6J4FoxP58DCAgdnrtRVTWBKh4SnXnuqzfM16Jgd76",
  "key24": "2VTQE1YdD4XmwwEq6Kv4sPLNv9YBU5szzaoD8R84rA22JLjGmFgDrmQz8iaug7tgDsiMJmcjvN6ZLgexBqMUg6XD",
  "key25": "gFURbFWWfeTNLR6ZLofhwmgEAWSTwA6sSXB4GBJ5BCX3QhvbRJyT7Z3UsxUw4xokou8HnnaQqofBb3YhudkhTKn",
  "key26": "wPByu2fke95DdQorjzJkJDR3tNb7uwCLF5ZExQwgADKbztjq1A3xpeBMQ4p2bgR1icUmReTEomHkkcACGbA81X7"
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
