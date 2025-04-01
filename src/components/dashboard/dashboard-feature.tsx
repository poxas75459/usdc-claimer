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
    "5CE2a5zMvDurJ8RchXcw4MoBk7cFTCWKzzvfo4BSbisMb2ZUTLGV2uZJE4oNS5T9vQ1y7PKHrPPZWCQqzPvNCB6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbzixhqoJCnbTx8EvoFuVzJjeZdpSMWCNu3W2xhtcty8PxVboVSLinEHuXRnngtjUjRd2d1dRnmMC9173eZ5Q32",
  "key1": "3fm5g2KkrNH8Jain44xXWx9HgXwMrggeYd8eN52jaYDjS1tiwiyS7RzTac2yrbvF78jE91kwPyDJJiakj6SgYqNn",
  "key2": "4wnpjpUQ7MKrpVgcTCNd6KWLNn1bHPnuoUUGJeBmdgS6XGybXFKt4FgLrzmh2AsmctBaRetVyEVnSQASwMXgd5a5",
  "key3": "4L9HHstVjFVEjMLdxwZBRbpvaiv4pabPrQr9AWtmwaV19eJGVMufJtkXCWB56xsqfSS5SSgdSwEhfywZemyBPPGq",
  "key4": "3T6qBxLEZshuGg6HRbDnMKMTdFRXbnKiJBconCV4EoHFfwKpXKgDK6tT1STfatJYV9nZHDZSivU8ckx2vpAuyzWU",
  "key5": "5VAXZygpi3Hd7JTszetZpyV67TQbNFbGXURphxD1hfuBh87u5xSwqVFKAaurGH5hfzP7sXAyU9dUeb4jE1Zyqy9u",
  "key6": "HmPBU4gKiVPcYChgzC6wZCeqGZSYWcyY5LXw5xFanjb5EnLzg6vArWM8drRseAfLD2bN1vbLpm7WKxrLtG3GRm6",
  "key7": "8L9mP32nd46WFZrHkeb9BKHdyV9sX3Wex934PyEKWiA1cMzPX1KG92zzFXYqQKr9CCGffQ4rQGEJfx1gFMynfZA",
  "key8": "2Lb5atKibyDzrhiY5QqKFgrNgRdLWdhvzMiCs4oXwzYiUtjyDHfXdR8AtRHxk4P7fpZZdjqacihTdAc9XnBcR5Y5",
  "key9": "2ouvzsp6xWEc8ia91s2stapjaxh2UEbcnxWkMTjoWoZVzFobxPaENJA9A6eWEzevMFXk92mKmkqDP2Zd8xV1cSbF",
  "key10": "3KS4NYd8ZVxyWDgiAw3iMrfmaLLaGWF1a1KRtwXrnVXXf1AZwUZNdyP8gz9SER7zMW7beZFfvoKGTix5nd9jS5iX",
  "key11": "4Tcr1hGnck5emnAZHHqtvguxXUHo32o7TicsVkpJmoMQepm1igKxop1MKJZ548FJ4ytEHVk2jw9KqusY4yTUocgr",
  "key12": "ShstcDwLK3cK8LYFf2VbxRiWi7AJaarUCBwPMssi6fzFjccFqnxNhH7cPvKR9ytWst5BEGNFXn4uU62qS1SGUhm",
  "key13": "4xvSyssTrMmB9mLK4ii251P4zmkqkJwcDe9kGbkMH6KXHsFbcWMp9Uwjxdj5H8ZZ2LP22GTf6woCerShRU75kMib",
  "key14": "3QEE5E6FsXGBWkWvMFLDBrNeKWugQaWmkS4vCSm4CDNsPUE2XUpHBzKZPCawkv7o8pwbLofWPgxWCMjoKjKzYisQ",
  "key15": "3aPUtptxQf6ngkL1qQp8NRi4WFXg58CYPg2MRrdReECqNJAdWwiV5CRYZaUAci9ph5i9uuAUTBJoFrPZWhub5QJw",
  "key16": "cFXSZkyEUsfd5SFXeXHWnryPefn4eZr2rFZTVfhRqZfaEAmUL2Lbw71XcJ7TfNrVo8cHN8t6Hqaw829Gu3Qw69V",
  "key17": "3KaZQ9GdigxVW6KporqkLvMEQsLvAd6PvV3XzaUy5W2T47zCRoyNpucqAS82btEX8XbfmCwWzeZos8rxTkog8Qns",
  "key18": "23PSaeC6ymfCm5RL3KAGTY8sD6sayDQhs2F7j2CVxjvC5kBwHcEnXM3ZBXFRyQfm1f7WC2phV1XGVMAWyzbuR4UD",
  "key19": "yy8mho8gfu8Feawf8vfd5kUv1XWSbMWo5PY4m8FwBqfwW2HRB6xJfMu3vpdiEZi57etVq1x58KvT3tokV6KZ9MJ",
  "key20": "3dJBRsTADRWMcJoqyrnJ6xe1xMXfhxW2VekKCatkAYxv47FFYkTfTBvy691nTh46pjdV5FwhbGWE9xrMXjE3MQwu",
  "key21": "5AWirnqTbe2TezNkiFsrMioQjw29XCwwCoy2Ffjm7xschdNT4jvFhoDnMXopv5e5wgZ966cgrP5ZJkpkkyiyqeB9",
  "key22": "1mcDiTmwZjPXwUGb4dDqCtnnV9k6uTM3un5QPZ8TxDtUf1sks9ZNSQTrS93g2qE24TUVq1vguXthAKmHAjFP7y2",
  "key23": "TdmKvfseXw21MWKbAoCax3jVHmaYgwr5LDXUSDq8M4UZGnebRPZBA7YLe7HGtoYZP2ah2dzRZfWVimaPhVTjLQB",
  "key24": "eryWugtNoi1mbz3XQ2SJNqNoz9vvE9VNkCZHZ8vZytnx4YKXJ1S1snD51iiGdcEoqzJH53cWEAC3cbq1mDqy9qg",
  "key25": "3PD4vm6xTMGw15t65zCMxPGZeqNUBoCxwDp8tU2YbbZqHAZnDZB9gBwzN3vhABHbPvkasFqzenebBLPfTEnUJ6RP",
  "key26": "4YefTmTro3F4PNZBpn6fgTFTNjXnwpyJS3gNetkXZQTpTPpLL48odpmB4ByuvPxp4aLkL8ACwYEgWBHpxc4J65zW",
  "key27": "Cx1urFioRygnpjcyBfKxYENmQNjY8oRqZs2FBa8bFsXRM6tUagwfzRUscaG16zx4xtG84FmJ6HcYYvNfXAgnmwp",
  "key28": "4dmDUafpe8ahKoiXSioHmXM1SPXqkJ5BNNZF6R9QJEVeYbgpVwEj61YE1jpPS2wFTLLMHCgS1TvbAE6y6YiFF67K",
  "key29": "5s4FVc4vPHVry2rcydLq4fPoncwmA1hCn49KRqZSBLnQPnqPwZs7WSS5djshKXg7NdXCHBi7vPhg2wY6qWpdz3ob"
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
