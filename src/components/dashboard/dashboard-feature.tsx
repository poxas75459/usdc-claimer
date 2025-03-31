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
    "4wGbte3Sc2sa6GFkJNrqmdtYejBdH882jCmmQS4scuf7c1nagE4FtPjkiMRkYgHKamUe9CRkNhVZ2p4FWLxuoywF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EyfXQMbErZ5neTWCxGn29e9hoQQ1p7zBzBDPsQPdxzF6j24UnGvgwezXkQq9dW7nK4ei895oAeGPo5KHHe5p6ZS",
  "key1": "dAnjPhBBf86cMrCrDo5ijpx8MiBPv77UiPsaB93KAGwYqiiTYFyiTeMhUUDLp6X2WhCFUifeLvC6bMaAX5b3ZSC",
  "key2": "2AFeJVczUHwU2sjEAniRxJAJy9a4eoPjs8zDJ7zJKQBWp5qChnuS3VaRzE7Nb3vVcHSDUMzNBXBorNE1XuJffgcQ",
  "key3": "4apVUCMFMHVW74ETZKQHpVzqjry1Jcx5iRUeESiT3fUm1ESDMXYsKVzdCFdukN97yTorNSedmBG6MCAEnoDCb9Ne",
  "key4": "r2R5jjQhacfbBQowN1mzUK5cLCzwhcYgUtmRWAcEDnodQ3LX6W4bvrzti1cucEqKisvBjFU8ZWUogen9KCLRJjt",
  "key5": "4SPzgQMEGMHb8AghKThnE4UdiTHub5BbndPDei4VBLrAKxpXywwb7D9ikGxo1qCHiCks4VZbPZwQk9wr2x8n44rB",
  "key6": "4jZcD7kHrBevEzNeGDx1r5V6DwsTe1LpjvAAyoze2WhqXoAcoeMnQA8mzd4gEt757m1nzt8CETU3RxTQK5E9Buub",
  "key7": "5NpJXzuQp5maYqZbQPnvBg3BYPDrDVL6cixH5to8UJRj59rWpMQ5Z4AJvzbgsVUpk8RZPH2XFSTxB5Zcar4UpdRu",
  "key8": "5YH8TPUkr1VcoGuBCVGxS5XDwD84Av4xeJ3fCPb6mgrwtm2qrVi9PYYktyVYRox1rrdz9L1TJdY5fbRRM1xRRQmh",
  "key9": "2hQfcoQW44WvEmjcT7HYBD4KLZ3koz3BqBMLJfESuEDSuajHnawGTTYxJvBtF3f32p7Fg3VAxaMLyEApuUcTtoZn",
  "key10": "2huz3njUSRUj4Spo7RdzcGRxQwVKKqzK8YoiiRfdF52WcNT4K2RHT7cxhxUJDpybB7z934nf6wPYSLHxoeo5XiK8",
  "key11": "3hmauNrBhwzBJ7EW6xAYaabSBcSJ1ykhButD3GYfxmh1h2qwhjK1RkvX6ev7rKCNxaUj64ExhRvQHHCUGwsgQrZg",
  "key12": "4thxc8xoUdYcgMG1jowduA6jQz7GS3oKooVjdCTr9qGGLZgbXQ9Rw3eBQecJFKGGrA2ApZ8MCkc1S8YvrUucYtM6",
  "key13": "3r6Nn4iNLpfvBMQGrGGtdwEDrYwZy7P6Sds7PkZfefFti998FSHDqXQ9MARXbVeMNVm9tjVA7vFYwToUTJNz4CcR",
  "key14": "4RrTen5yh2tuTmhkjr38eJc3VSVPauMuTFsUVgZhApSd3YvzZ3LeWf9SGTBzXhUEuufXCtpP9UhRGVZDmVrVMevQ",
  "key15": "3Ph3dSAthMNdzQR1oADjx5k1fFMgSNpMyRQwaU3uXtzLLpKkpnLsyTT3zJQQi1vquW218ZrMQvLcyNDapa5vQhVE",
  "key16": "3TPbot9ZgGkgdZa15eXGcAAHn48Ketig1tBVQDyYZYErvrHgYFq9FUMnE71S4A6E7yxmoPpxAginjdzvMKBAj8h9",
  "key17": "2bfKvSeCxLJneahz6u6uz7nu8nW2CM1QM2MePt8iVDVdoHFHtgr1e4nFXtt23PiNg6exLnJn7d64xnPuU7WgtcDE",
  "key18": "o6umW7DcxXhhsgfn8RMewDduz3AmisFGFTzvai8ij3iiH7tS7NviHvpAhCP1TQHMMbQJBPRbR8yQ9k2idWRLX92",
  "key19": "3HePP2Su5VJb8mx1Ki7PHykfV5JdPnSASR2MZ2gZdwoFHVLqYCUnpWBvvJQA4u4W5XrT3uypQp5ifCnn7pitVzeY",
  "key20": "4g1ZiTJVbvjhgyq7yYFextJbCVFC6zXXmKni1X7wGfRyjAAy4WT6Wc6e6dngA99uRbfL2PKbq7eTNVwH3eaZ9raS",
  "key21": "3DUGJYxhkbyBFqmcTgN2fwbwEQ7gMT9j6eTNSbJTyAK7wXdzxoRPaM1xLhXGjmNrkiCntAES68AbWYEzEG3jYdQ5",
  "key22": "gjTSDP5RRs9f8tp2sU7X44gUfg96aLpaXCr6rKsY31VyCbANFvbRewb3VaavDc9RsDtQTTLu2u3gLkawzQQcb5w",
  "key23": "3HMM1gfEj2fLyniXYJWxxPACqVsxwt5uVrurGmbk3FBunEC6XFZTGkcfW423VzEWzC4HhybTEBsjy3EH2ncVyrSo",
  "key24": "4vZce6hHv65N3UpB7FFk9kF1jKrfayXbLNLWk1XEsC3uuxEL2tSb6PrUaZoZp5nkhQ1jebqH7FNrmHQ6DhZjezaP",
  "key25": "4rywKM37yuY7t4U9QzhEp7rYCnmevT8g9UH1y91wgiiRnvdQtCkUh5fNhbry2CGeqNQbY6PfmrY1ksmSA1rzYYQ7"
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
