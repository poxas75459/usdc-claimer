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
    "2wEeuUyvnt76cgA3Z2XRwv7ZsB78YWucZWTECUP1SE8Zkbf1LqQXsJFfMq7Axau8Eht4uZuCaTvLxpfcP16Avimz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPryatuxxRU2tBefrQSyHtBgtjy8vDQ72qQh6Sc8TwPJ44TqVCFHsUWTPQbMbbssLE2ajV1nBkt1epBMf9wbrDV",
  "key1": "3DfD43HYzWQjLCNrQLQJESqNPyk2T8xsPq6CY8mi51J7JRRFHN8poz9wzUFNdnwZXFrHyGGEUnE73vAzRcLPQfQf",
  "key2": "LASiCns9isnh714vWSCA3e6up5A5hTirFuuyfkJYyPMySgyVAS7rqyhWWyeLxtEpe9sYorGXV8gsRdvTRtuYuRH",
  "key3": "62wDpPrxxbvfn3hSzmEMKvTXz4V71ZP9h4fWvEZNMKH5EACNgKSpqfkLyyYSdwCtcgrDV6ehPW1tMNNAsypisaRU",
  "key4": "5RchrH7rQhon4WuV9ixyA9UqUmN9UBLCEiitKjVxsHrpFE4E7m9QdJKenuhcDios2Dgh9sxvEac3vGf2v4v368DU",
  "key5": "gmcDB2mGJxE3pWxXmjNwcjVcK6J2UHbY1e6w1bjUDRigyH5SpvXqZS2Pv3iVsUQS4cfdUY6vbTpHXxVVyn4kDmP",
  "key6": "6sttg2fypN6aJwSXSnMEvbN9dJ2PVCUSj7qkzm6TvryhZ8uk6ZpzZPZt3XZg1mNhGCuZd7ccNMMMdiQZfrzzhEz",
  "key7": "4s8LrYywznSqaX5PvKG9EJk37eYDBYmcUGxFGzSvioKhzQ9ZYEZJPTXu4yVi32mGU4qF3X8XsPSMmYE9oGg3bbjU",
  "key8": "2csayLByzmrwvipos6k3qqKdM57rjGxrFRK7dTwR3UK49YBhHtmaNCvHVjJpTRPtS6nmnkgGB7QXNzpKD48ozgoh",
  "key9": "hrbpfZQ2c3AD88XPeYSy2pHPnkiyiwHnKT4xVJGtjfm4dKMXmh4D7w93KHubkzX6ZQz7eF6feUaSBDqxFBRNANT",
  "key10": "4kf4D6XjKnZWSYeYPKgiezZZXi6iUXdi5VLCzCzPWYDe6PzUVEL1dvESvaUfpgHoof6x3L71P1QLqpHkb1Kw71nk",
  "key11": "P6XnuncVorgnuTc9RCwoG32MRXteqxao8bNm9ZUmvXzaqLvtZbjG8s2SedzWURZtVtvemfbKUWJm7fUrtW8YeZ1",
  "key12": "5A3QzGnHNa2pnDwECBXooBA3jTpWVbrVKKAY1cpyrBgAAKSz1NSYt7ynt2kKLSx7UgDWft5BGGxdLYBqekhVxxzD",
  "key13": "3VytnBFBnZSZm2tpxrpioyiAYshLLfgTvdZrTFRn2GBiHjTzqTCZ3LxZvRJFPDTDe37ZBYFFPBWBZaF8CfqN1dPi",
  "key14": "2xnDS2VunMzLGEad2dzxA3aAyXXwTaGJVakrcEqMGYmTFA6rVgbbxzFMGNxhb9ZLjaRtUX9zpG5NGm8DSW1ngyx7",
  "key15": "e61ngpgoX9xPxs6aoqvc6czqeGsHdmgwvDdvciozGNrsj3kuVCZ1Pies5morziLiN29TFDEWdR24qGaGWWA3ZWh",
  "key16": "2k39Hpd5Tif5J6yECgbsB2bdehkBCXPocaiHTu1jHhjYakyA4iUEpZBXL3hX7pvXvtRVQQZu48P2ozqnbPQ1dDJY",
  "key17": "25rbFzFaAgmc4AYsWvE9Zb6Fa8HuAousAqeimySuTYy8FM9oq6bcovz5N8bZZDGeNUnE899Rpe2M7xXe7dmui5Y6",
  "key18": "5L67v1bK33wQSY62uMgvm929GxdwwqNVdR9yPL4jpQdDmjoYSm7yKhJbyc7Nw8E7rMruSi1BDZmAQGe2yHA8G9oZ",
  "key19": "5ZYbamSxSQVCnBY4UVApebjZTEvS2By2SyoeLLXY3JQCkVbtLDtyh7XFrqqr3wH9uULLtFUpKdWE8QR25RsrXdCT",
  "key20": "2xKYMDcKyTwKhiK2BCSh9UVSPB4ZKvw4EzJeEQLeSXaXQPCkcoGnV6rKSdJthbbc1JZKwqQAYaWYWT9RPZLsVAaj",
  "key21": "5LPqRZBUtAgp8fthtvsRYHXAFet7GBLzGnfuT4sWsQR8iiJQs3m2g1sCATVC8Hfj5BffXHQDpyvbtZnK9Jdp2D64",
  "key22": "3ehXwgbi3vQF79ZWWqNFUogahEnhyDuAsFRfY5ggYx9ecFd2s5zMvLWKnVAGjhJn4QCrdzx7n2fyJNH1owqCSUFP",
  "key23": "25jNHrQNLzJYWgNsNwQ26q6MUTLJhiVhMD6XFjy1PtcqKMVk9NRGaUybCs9YBUs3FLfGkj4g3NxRZ4pXtcQXwHRN",
  "key24": "hTiME32anbTcUsjEmYpxrNmz6Ps1qdrMzaP2XBCepcPFPfXfTv81oeBprHiunRFkEiTVPGSgSFfpGgA8EWrV4Ly",
  "key25": "2uDbDxTPzFDPn8urmRnUXQH9WgZpuDrszSPanxzQAtid1XX16k4LPjKtsT6jywBGbQ4UDULWH9VgtoRxg9jjKLUq"
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
