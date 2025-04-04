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
    "4JQ7EoeP6qjrRndEx3mUmbmANFaN1u4EaWu5BV5aErPy8EoTytSR1qynAwHxrsy83Hyo2QizgyackgF4fFrqatKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55KRJQ4rLysCqZdPQ8BimE9c9wq3zLZaskwjNjpQDexMFNZwVvM7wtHVBk3ErS7KjHvLeT67Fa6CixtMZivcmJ93",
  "key1": "2E2s4w2uLv8bETQwJK539GaG5FgMCDqdc2G39seLodjBFj2H8pyRgpfEKYgGTFoCLjUKjprPJYbNSmdwmSUsExSo",
  "key2": "5UGeTUineH85zaN57ujX2wHPebiYZodoPHrzAYideFsL1n2Sxjd8rmkd7C8TTWYQ4BhZQ35pn985nYGE7sgB7wQj",
  "key3": "4HCzCpLwMHh6uqn5GkJgDNqHmq2gE7cLWsh64UB3Uks5m4ndenyG7fv3W7VPXGCmLAjrYp4xNh96dGLqRBtM5SD6",
  "key4": "4HtemHtcz5tP8U2HCEZuUYfarGWgHnhiDB6Hzu2JCZPN2Q2Gevfsd37jQ9ksPyYEch4agi1J2QMdUBZyw68UzRxv",
  "key5": "Kw36bPN5SZsRWBsyM6cTsV71UEtndFkPNCGrLGXmuWVCi8R8C4bLL8XQh7qWdPchipAUW9qvxceeX8wdcohzhpC",
  "key6": "2WRFEhXsDkuZ4edfukLQ29nPL87UtGo3DUKEX18CemBiFwVLR3r7puJKNseNC9Srpq5viysS2bQtMb2HWRZmC7M9",
  "key7": "L9zjxuX6mdNHUvo5wAv4ccSi1gEfnFtTfnuiDXHd7YHgg92hu35fCqmnZ1JTDXwMGYAszH278EsMoatR3c8J7LF",
  "key8": "3D7vrJJS8sAUoFqt758S8rtDAYcGXh1My54RdUzPDKCr3zeYq8yRdSH3C9jZb16DzjmgGJarLDA1KHgpJr2H2rvE",
  "key9": "3DRZh78gyiKr2JW6h3TTX4bFGxNJG53WsJit7p6dFovdTMqiXKKaWat72SkUvegcx9PKpJoEeuFdYkvkDNdhwgoL",
  "key10": "SH66UajmhGxtKbPv3mJR2EKX1cPLQKfGyopnEZH34mBWaiKdgmt3zHDheYotvwgaMyE1jFjKxjsnQv5H2SVSgzV",
  "key11": "VQPRQDTkXq2NzudjkJRfhv216Q2mett5rbPphysAf7EJ75Nqqks2nH7kEuaQVx7vbddW4s6UN6g29VdQzRY98Qr",
  "key12": "2DU6D21gbSvcGzFGZ7S6CUUjz2efC9AohHcTqFf4r7mmm3HLLCKiUhWWMskCYPZ6NpFRgMZmPm5PGQMf6bdDnFxf",
  "key13": "iSxUZZZSZHNW4seiW9ef1kXNAjbqE6Bd9xM1p3krqPycmTSw9BsHxPa3du8pp7JUcyUkwSJ8p8YNoeGophpCKMc",
  "key14": "2uT7PT8sV2BnkRuG2pn7n71U9HsGbarrq88Le9bCATsGmU9kd284cAJpFBZHd67kPDRGgTxwaPfrTM9CjCkAsYmx",
  "key15": "4oLhzwNfs99wsitWWkw4qEWkKet2FavyCYCSNxiasCDGir5UBkLqKw62p3eYW3L8bMdGQUWBU51X4ME5yufp28fm",
  "key16": "48MxKbAEmux3jVKZyeSdnjFsfxJQHpqaLssFa9oFq6dWbsQSg4PCWDpz4buziBtPqDwpbRYdoLyUcYfah1xnWJ8P",
  "key17": "2wL629kycAVKiQ6gNSMDSK8wocNUvjurcHb4eXXbcyxewF2P3MNiNiNKiwhKGSuEvNPxneCFPxKr1eBMPJikcj5M",
  "key18": "4RhYpV7JT6RPUc3Asdor5BEGripuo65LSdWfPhZKV9Wh4vfYkCeXkquGpDH2wSDkwzfjBPSmDXgS46WnjpP24diU",
  "key19": "4SnzMKQCn8rWsV9G43FWUka6Xkgcw7E66H4CUh7tC2PdsrNjEnLUyvNyuhgRwaxTCiqG5JvidxZUMQxYrjrQFUnt",
  "key20": "4j9z8Y8fp9Et7ErCwvd81DjqwMaYJQk7RnTWBprB69GfkcZ3sMcwMjJDx1scNqcJTSmTHEhwdsae467UX8bBubHN",
  "key21": "um2HCoVZHB1mKfBpSvvy4s1jWdCSLabq9ZnEDtP6pZ5Yh3K3qPdkGftJHcJMKMPmwnsexcRKXwfXJ5JrkPMgTVj",
  "key22": "46CegwC2w3cPkda3ZM4MG93Z6rkz8zQK9Rdw18JXkRvdSa7zP5Bqy9XvX4HZAX1QaUQtB1ehdbjH4jTNt3AZF8dx",
  "key23": "2SM1E41abEj8KgkBgDcWhYrpSHQ34aNd75Ww15HtjBQoSQnnvdMGGCR3K42742tzHZ4C8eY7tthzEGu6unJNJiWR",
  "key24": "368UN2LA3USts5XNfXcwxBfyTaJW8ENsSaYdJkWT6H9r4PUEvoxCPdSRGNrMaMejjD2m1jaoEXQQZPotVvcQ4ric",
  "key25": "2BwppZT649zdTkAbypSLi9QAzWXVK77YJ4F55DRQhQhC4e4cVJS47SA3dJFEfvWB6PUKTpNsJvpGNsgv81HaiYFT",
  "key26": "3y3ze8CVZj6ZkjpACQcG7MNZd7aYSvp6VsMCPzc1fFzo4Rb8xCSi3nW3PGGYcj36T6uHuUVkp9435SfZJeY69m8A"
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
