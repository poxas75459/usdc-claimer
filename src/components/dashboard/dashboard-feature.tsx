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
    "4EV5GCMEXfjTivMKXxwDjQSFNvcEL2Ei6syJ4E8KxjEu3mW7ipSbVyjBPqX2wWVYjTyxzqVQ2YmVDV3aEnGS3Prb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BjZi41XYmBjhuR1SWarPQt7VkGvp8e8xk8KxndFhJSrrSo8JPaitdFtz96j3o7xfppNvUeE7vHwcQnVf1ANn44",
  "key1": "2U1ipiGgVcvQVHrFuV1dVzb9teRMEofEox4BjAGCZh6rpYkSYf3f6NtXyE1H4YDLWq4po42hS8FoSdhS8Edxe4hS",
  "key2": "2DV6WtuaU3fGkQaXo6ryxu5avfV5LNeuhL6JHRYPGgMWDNDYvS9DoJtWDh5YnGFxxpiR3tEhKykqJ6qFQGbTzNjD",
  "key3": "5wd1sxRPx9crj6riehXK7X9uJEpHs9CcdWjHtAuA5WwdhqKqB6hgNBMfppYqMn3Mmn1odiUZj7j2bviJAgXxh39U",
  "key4": "5cwFu9YHoCobA92dUr2ExmiRnJHCexNZEkUCzpLRX9tD33dToAkQhDt4UcRwuLXaKChRBF1xb4Pau62BsjwuVKGF",
  "key5": "h4R46FiUSqLtqXEPPq71b5T6xjGGGEHdSKEks5FLEbVebTXTPnbbDd3s8VSRb1n6HWra57RHkx4VwJA8iissWSN",
  "key6": "2eY1pUnBtTobihdMxVyjr95rQtVhpa9oLBKvFTiJSFQ1NENJMmDopukDVaqFs6uMnjeTXmQjKesT9tCQ6nEvtXyQ",
  "key7": "5oUNH9stj6xg5f4L7i3e926TxN1X4L6UwDZq1CE8tCe1Ro52SprD858AHsBAGX6bdijikfVaaYrpnMKNK3DPTS82",
  "key8": "3mkADAAHp9G49QmYy3KFTBKmtHesGsMoADhnpKp2G7rWY33P8PaHdUNwd9qaNCHQYuFaDMZRDrLF82dWPiE9fYns",
  "key9": "2r7sYYRtifEsHMp3qCbX6dt3jahKY1SjZczShJbkyrrx3CoLxkD4YkVrKX3qvipQJNgDyQagUkwyj53eiNTmjTKb",
  "key10": "4WHFCcJfmRpDnDHkQTUsZzWLRUhYvepG6DvKr3aNAnrRjkL4YMK3Qb7b9mwRpDWowJcF9gnzrYpJVZb5whS1F8c7",
  "key11": "THpMUcBMk8cqfAGpkcLPSCR72j7Q8ffGyFzsTZCiF3v2TM62r5fV6Y5CB1LobG8q37HuoBqqTyMbNFxPbmczotD",
  "key12": "2x5y6fgkX29AkHzTxc6dwq3Udpa9gXduHSUk2Y95JmgfpeF66ntXRjas8L9DByuCKwu1dx9gMt25GBWrynp87RTJ",
  "key13": "5s9yZKxLZ6RCJvVaLhwrgogi62BCeXhRpgboKmvHpKPitPmABXc6EwurEzPXt39Czx5rGTRY9aWyE5uRhvBHcEHh",
  "key14": "4eJnzAxBqqHVUBxE4meHXqkwc1gCq3eRfosiAx4mG2TQgV545HmvRWy3kx4bPJMH1FgvCQbsinbYfJMCKaFjebfy",
  "key15": "4DSWvEiCgq7nGUMCUCZerjHZ4Fq5Br2fzDRC7ZVy8ikfRAWc7GR1Q1Vy9Tf3ZEXNpZiuTajU4CdccDwVgZaidmMq",
  "key16": "5qv4m9caNndCWEoPk3A1XeZERe6kQeTT6pg11PPyr56y4kP8vArWn9q4oJxWWRemtZox6Lgf6qNtmhbHJs8cdHAT",
  "key17": "2vxLdYwV7rjKxEhTKzdN2VVSZZwK28XHKSk9wxhNxfwwK2T1BNhCa5avGLMgzeZGjhbDN2RNFdu3P2jDc2JWRGk5",
  "key18": "3tUW3fE7yUCdc1rjPCb57N2SGvTH1y957j9iobS9E6deNRMExFpMgt5RHrSDpCDunJwTRG4mt1pb6jWaaMDSzX1v",
  "key19": "3zg1XxBg2JmKQcytSZDyVzv1iuhFeGcd5MNmwGYjyTJ2TBT5WvvxfJCaakN4h9ure3vH9dyDsDKn8eLw8qzo3GW2",
  "key20": "htajijxZcbYEQqKHGUNkJhLMUNUQPZrfSxdb8ZWssdVDx42BtjSWqzWaBNvjtvxQ3n5ciQCia7BTamUn85zFxJd",
  "key21": "CYNGznojwgQftbPr9LnrJSySZgrF8PM4q5ZK5icBpMat3qXByUNN4z2dHym5nLrMRGeZCcNp7wmtHh8NyiHAycb",
  "key22": "5NNi5f2yyeRjKEH8DMvAwZupguAA4dypGWTmVrXdcJpMe5NdrcNpV3tnZvVWWW4qHKasoYXd8vEzLHoKCryPALhn",
  "key23": "65DtJnBcsYHmJAoJuLdePJL688urGbA6eqYVn1Ugg5MyyHnwmTtJXUxEqS9ZPPCVoDDAGJezMZmWfhnjHkrXdq9Q",
  "key24": "3bRCSLFmX3FAhwNCZfeHExR4h8NVgVBCPtSTukgGQXHiA8dxANPsJrbdDuChi5JUDGnP2bF7Qm2JQ63nCoBp9fXX",
  "key25": "66ioKQen8TbtSxyZyHiUb9pcEZ5RTmffFPv1xwWEB1GWZ5WvZ7uiM6HeurpT2aMu8nC31pi1BtMcJ3PEw2YxAdVg",
  "key26": "5KLV2Rf2V47SEXBAKGhd4zKPdwBoCKNFzTRHxfCL2bxiM9wcqQfDA58A3pZcPHsqEiyGDpitdUNA63toeA6r9HCj",
  "key27": "3HydwJkQLytLUD4qzg8H12pMxwaTqbwy7qiVEzeEUDELPxwg2FDgn6dn4XTTW5nWWYmTtJAsVhC4ZAY32qjmuLBZ",
  "key28": "3MkSiRM3UmoWCfCtkjHr2Fg7U65NauekSEmc8PuhR1KV8hFcJnCczhNXSNbpneEd4xWcDfaQB2sC2Feac2F8inmq",
  "key29": "4g7pP8hTC6yU5BZfsW7Q91FqJC2WR3ZYELWtAeqbd1Q15ZxFsR96fAjCHENbJxv2D1TxXEb8NSVMLqacJhGpjj2m",
  "key30": "3AX3fC3EGwfPrHcutww8BaqYgjaPu3on8ZbUYX8ZNLU7YsZQvXsSN3LbVccMg9iMhhxkPHvAg5a2FG74AtfMLHh2",
  "key31": "5yM6NUzDKrxQRmdTEG8cTxiyBwVwBbeskgS9TzHETBqRhV3d2RQBcpgEzYUaJ3ucXsX5RgJGzacpqq3ivPpGtp8c"
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
