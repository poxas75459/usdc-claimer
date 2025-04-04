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
    "3nhQzWWErgBAdNA71Ct4WiTPx1NjbeVScmayRGQPdSW18pZfc4fut1bkb5XAXhrAxLZkJL3WNt8pMd6pGyAKtab4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kY1AmUvNQHS9VpQtjHWCa172XmZgpjjd7nxZVqTuZKzgNxE36yKBwKDkXH75ou64mKZGCBB6NoMzsKNm2fxcC7F",
  "key1": "2uQEnzsRHz5QH5VBBrAgZDgtMaBj1mNb81PCp8jynVgCNCLUWghFzvk2LZLdbBRVesEyEoadioAdJqEEJKkvz23z",
  "key2": "3mJAz8a3T5i2NMhw1vyC7faRQVh1LdsinXewjvhfey8ofmXU8kauA5krCfhHYF5pd1UAAtw9CRnrv9SAMwvydupB",
  "key3": "4pELVJxEwUr1qcey8MzUF5aG8EXUXfZL1cUmgGaKuwk8AisFF9YUu9Vu2G6uLv9DRV5fFUjiaTdQofqcMGzyxwCu",
  "key4": "2UnDs52mWek1NimzoDQVvpaLxucXgV2CMxUZQmsMRr1U3sS7XWuF1TLJyymfV8eUp3xqRrVbmdfheXmVhLmB3oFz",
  "key5": "2GF47i2GCaUyzXEf9qQvweGFZV9uwUZDit6h6ggkwVz2wNTNFUnXvcABFaq96U8P2KHPHGvDkCSeJgPB6SHUzqJJ",
  "key6": "2BGb7CmcFA8stQP5EMqF1vV9zwF8mWS8jLvweATZJoGNcpbZMFHvEZ9krfT9HHQMgUMRcoGg8E7HBfxc3P5aTa1v",
  "key7": "SwDhN16zMjadr77nY6sCqGoycSBufcFDdgNwVJqy8BFT1T9jbE1jcWDAGpnwV8n513SzhAK3nk6yGTuPTir5ruy",
  "key8": "2LjkEwzoVeNxkov4gxe2vn8Avf25ExZWW9Hbf88jWU4SDfq8MixthUg8TnSbozm6124uez1xqwjD7Lo1BbQM9Jj4",
  "key9": "33wiR4wRYTnccTRxPUNrnZFRSgGLE7hc3XmK7QEn1dTJzY5Tf3W2fi9Bdq8yQ8EjiqYSzLUzcpDv8BeiaXYdWiDN",
  "key10": "2gmDmMrkgu5UBSKY9kj6npsgy5ks6hAKreDn4723SZDS8RgQxZ6mToq1PAnCNeU2pRirBqpGCoUSqa4EknBVWnz2",
  "key11": "65DVUMW5vxreht2PEb4viT9QAtBe6qwLkTHDLCzxS7arAk5sz7XN898REUGcwVKarHB34923CMftLLFwmFLGYWfc",
  "key12": "f86LGZAvNFQ2YuVvNC2n13fQs5z7JU9GFWqRpXSojtPRJg8FzpXC1ykSduxmxymVsoTGKJMHPazgzaWUM7eoeda",
  "key13": "qAkBMfxi6gWnaFvdbk2vg3mgjNYvRxuafn43xMchav6JvpnRtc7J1z4BXqUbtXpHZD4m4gikiJkgLq9NkLn3jiK",
  "key14": "5nwReTQaDyxwfj3VPi1F4iLdLKBBF6PT5b8yGE1gQa2QR3fXWJHE3YeZ4QNMbs81W4bBdXs2wTFGPMy52TgdNe9J",
  "key15": "5e8z3oku8p98Smc2SUYSBumQYwFu7dFbQkjsyQsjmCj8K4MPZGWhtZfNTSe5LvccSi9kRNnbrfjh3Y8NnSfjyVvw",
  "key16": "TuSLoq4B8gT2JATEqoTieQWYDxc7GmBQjYsL82Dh6d9mnmufqjoFH1hdVYdnYVdP5XEcyRc3ec6K49Lq4YfCxZk",
  "key17": "4kQdS9TF4iqq8n7WBeLvCyE6UJruQpcY5XcstJnhwLkzzDtUQ7oa6UpNRXQHKi8BWsLDzbpt1FXkoGdFGJjUNhWd",
  "key18": "LYM9yJFSEWSMJNfR68EzAVkJf2q7MvfYvgNNHMThqrFSdvfoHewh8wcPCrTZNmyaeoKMxXk1NXagBpT9BbFzWYT",
  "key19": "4WKfkdf2jDmcZRRTCtHfLZo1cfbjeFNSYMCGRurFND2WxKYJ6RMZMwHP8wbQYbuLeCXz2859wLpJg1sAeksYCFxr",
  "key20": "kMNfDAdBkNFgsD6MtApAKPG8VoogdSzFPb6bLpZ2YTdWVzR1FKBcxRfrDta7tZgSsTAm2c7fewjcstPX6efXk1C",
  "key21": "2QLeN4fpNeP6XcSHSHQQqLqwzZBheUSXm93dU5fEnpVQPgqv2vP7YuU4iJAuTRtU13KmGm7XjDhSEVEYJro3E5Be",
  "key22": "3iT1dt3LmS61DcbALPvgpH8gtQ6NynVzfpts8a2gp79FSqLxRBxzFQsZRUyLvYHRQ2JeE1ZvLKQcR6c24ywuJSGw",
  "key23": "2rb7Kwxo9XVTDRUcLQbwkHsnVhvpCNJ25A2p9mU9R2SwL6FK4sM3VpdzKG1YvuJpUP51aQDKwUbv1VAaNrp6jsts",
  "key24": "2ixWZ77kZpxHCT3jWuGRSBN4bHbQ447qxdTzmSYDnYnY1d5noeSXxoSDFqBXqb1UTL1djTNEnLDXZtzHCEUhQLKy",
  "key25": "5aiYyN4M2CnKfkQRVfHwouPDUjRvFWG8M1bt2r8JiVKGLCNCUsCG9q7BXxsjGcyoJG1rm9hSgBAgsi7pZxjNqML8"
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
