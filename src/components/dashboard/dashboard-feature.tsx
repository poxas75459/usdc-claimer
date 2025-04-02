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
    "3HHzXdEt7mv8pUmna5Gn652A5knwWeztBDdb78mHXFHcAJba4kdcSPwbNwJ9VxfeyiWSF62B8W2RSHpQmpRmK15r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22g1reGrKkyVSiExKfnyYTAyDhauazFXLkvZFRxrepQSmTzvFt8HgzeKowiBbfBycNNFVCFg7uiVNgKLWXyjSxiK",
  "key1": "3w2SbSWxQXmndrskfUscBdigJhJX25zMYVL6mdzj37paDRapvqCoeJ6kAjaSWaHewc7nRpth3NK2QYu2Vq8wWEPG",
  "key2": "3Rs9ezwuK3HU9vKYx2X6f5mpm8puTvqmdNVCGJoe7wgNGE3ZCSPV42Jsd5cDnnkWEn3jfQswvLyBZVPS5QGD1U7j",
  "key3": "3bF8CMFsTvHfoAmed3yd29hRBdxh1UtDoco75pPxyEvhbPbbRcAfQyL3fxetE5oVpetjK9KeF4xwSsTnv8Xhgzn9",
  "key4": "3anT2m33tGc7GdBymjNTsARGL47eEUdVQ9S3Q85Yrp4bDowsNSMGBuZ3C3iZjtbEhUhfUnoGaJcdM3vGaUYbmZFr",
  "key5": "Wk6iMkcgYHQcoBgzHzuBztnrjihhmLVa1PNKuwJJubMy9LHHVAcpf9r5K11GNzCxjkpQpwyrkUN6JTrBFzh2gmD",
  "key6": "42uKQ6FxuoMJDiWDVsnJHxSYAFuBoSbfYhwsj7NgakTuydo4ZJxFkZXMZyHP2YCuYXZTrNmwus33FWLgCFuxhhug",
  "key7": "223x3iCdxxXmUgiFAZTa7EDpqJQvnUgytTWXMh6mHSNvTfBKp46BUQhrCpHMzQDQqcxzgmrC7A8tjXZGEQVEMkSB",
  "key8": "ee788KGJM1kKvvGmF3yp72mDjJd5cbTnw8tZSsPfrNXdWYyNLTwn6c4cr46ZDuZuyhNF8n1Zyq6tBqAWrqmQS1M",
  "key9": "5H5dW9CcPXGVrZJapBBgGfWpK1CgpX1eNyRkn7D5edo3u2kwbyHDVVR9HxFRKWz78TBQ7cqXtf9ngp6o34z4HhUD",
  "key10": "4S5ADRK4Q8ybz7SnUdmMAi6A7PbW139T4ahc3tLMrxETwLSakCJiqZQnx1wXkCct85aKiJxu2LM9Z48ruMiTeuSf",
  "key11": "tiy7bkzYgSzdaF6bi45bPpDMbWhgozxcvPwXruAMa9J4bMJGzB9un77bTDwoagAZFqj32ofhXVDqMdJrDkrRVnp",
  "key12": "b8F6iGbzoJZkAYE3SurNQqe9yibLpD5HVaN8av3S19afV13BRJuEgbbtSYskg1vGFQbRWeA5QzQHzYK6J3Kz4vS",
  "key13": "5ibAdN2GoJfXbuqnp86ZQgTLrfptJK4fprKTwfoKhMyL6xKPbBiiJYemzaUuEGh5T8McuCNj5g8X2NTDishemN5N",
  "key14": "39vz4T3338jFETYFc143BnjM654TumU4maG31q76hUrpxVbudpd6NX8TGUFQFD4PJ9FZ4LYAvGP4e4EbZjUYDLpD",
  "key15": "4VrPm7gEeJ8KHfA66L3townVpib7K1yGmECUXddPprKUh7xT86vU2utJy68s9t5CYaeQHjfDRj4qC4QAsxPj4nTS",
  "key16": "3LSNSBMVVPWcEMzkif6bdgEHsYiNisKALMeZYEpHmkkbp3R4sqBpUSvgmJ7uLc5Y7nY2hqKMRZFDhB2J58x9Rhks",
  "key17": "U5ihNDq2odqUXdc9DPT4UxALLyJgXo3is2Nhe7M8cPb4Qzok5TXXshfeFD1gQSPnNZ8f3bJ3Bd6WkNBsVQcUkCi",
  "key18": "5HMYEWeEPeHTNe63dFCUmEHytuhMHFoNBwuzANtgxNgtFd22NiU8JzqfF83VrDdL8pqEeXUCaKtzRRxCmoaHhdHY",
  "key19": "3Qc56vPKby18TuSiWNFfpJuLHMaczezBi43zeHpwZWTkVRgkwgsnshrFD3oHK6ctkEVx2bd3X19rMaMtSgRLFTjK",
  "key20": "1211FGbeTuRW37JA1iLNKT4CAR5Cko8hoqjSWqmAeaqH3s77Fg7BpRSkptTiUNb82DcJDRenbA8tV2MSTi8dZbfZ",
  "key21": "3Mib8Ep1YQqAF4UQsnhL9BMwdZBiZdAJBDTt4foVTystSxzb427zeuh6o2kJjvrTUBC4pwf5C6GDTwkWXrUseyf2",
  "key22": "5oCGj6pUf8SfUWNK3UEoqoNHKT75zHazPCKqLMuRNJ5Dmo2FckdwgasBZHFy3E5L6bboN4h7G4EYSFf8pvRvwGRX",
  "key23": "4yd96e57W31Gxdoggu6yjxmygTv5uJpnZ1hMY1JQM9AAaKGZRQFoeK8WiUtTr4K2PTXmqBd53WYG3inCah182TZf",
  "key24": "4mBVDG1q7QPuKtXT1QndbuVZ7g7QDrruHYKgLDfqybseXqfFzAuAhk7XWuArzXtokywfprwoxkYubDCmjgHV4ASw",
  "key25": "22v7r7X7xa9W5bXqFZhQDKm42NBLYpr8LC1A1Eei1hpj4PyejP3kk6jNQLTii8yXiUf8STx9G1XaFQTrqqtJTHs8"
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
