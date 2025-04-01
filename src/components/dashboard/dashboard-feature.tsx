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
    "53a5hBSbadswaaoGoKRq8WTWCe1pEH8P1Ce1icchv19GNc7Vj1ZiFgEud9UhgsykwYsHp46fkEtnkbxLaAzhw7ie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvsQpUCjwsRp1WwJXZA2KKwLXh9VZYzPpWcRyMe1BwpQt3CZCCG27ye8dqx6ZuzGbLzSp25gHnvXijGfbW7fLQb",
  "key1": "5QbBMxkGvcx41aiWn2NSHTzZo9FyBWGY9zuEbTrYXCSkkTmMR93g1xXivsWZR31HaV1jrNXMXJTaMa4NLLCGWVNr",
  "key2": "56Fkg5D39Eq2YzAsASmgwbbbY6DHZ782BYTMD8Uhdvb2jKnt9FJXeinkDqU9Jxfej1Cy6aKGpS8hhcFYbJBsHkix",
  "key3": "5f2x2Dcjo7whQEzuffCPajVj4esUmU1Pts7N2ScWrfxByQaBGPMRqvXxfwZccN2u1DV41yNoCoAZ2HGChpg1f87q",
  "key4": "5vbH7CMWrXexZ2CcsbZgjEEAHoVJtZMor3RVpHhDV7d3WoLMG7u1Q4bg8926ChDkgN65ZCHYn62Ei7YrkqcVAbZL",
  "key5": "4XEQGJHFWkp9uuKzeb3LLuTrX3ag3qTaLX2N5Pib5Q5ZbQCwtvWhnxj4M9VeYD2y8aRRtgdtVPsUacD4Pnt84hGk",
  "key6": "4aM4x1Pf68bnpjKkPCGjQKKJ8Rep8m5bcTQCbybVsQZQJuUVyM2MUf5AgiyMCKpqXVT6qPuKzWWrpX3PhbBbNh6x",
  "key7": "2x4G5kCwLbr5hvajLxVZWGjzouKk5hYehFgAKnsWCPzvMCZxdX1iU9aSmTM1ep1yfq1JeLuetWpDTy6b7T4EcRdi",
  "key8": "DduuXVo8xXmZpS745cnHJYj6WVVoHHQ2yDMeDcxU8TyREYdVgfxPdadeRE7LFHTkLtctPmQLXfj1QCPhzkecmN4",
  "key9": "2Rxv8qT7NY5YGWKnK5yJwQ2VozD8d1kxk2vduXM3HNmm2n3qVGtgwGo1bzynzCyN2FrHLaNEyxpCqcyPmNYxesxC",
  "key10": "g32KpQjTBimrb7xy8tRjxLq48uvgL4j9dZ3RKPGW6PjCDwo54xFQULHoPYbikBzsgwXKiiv2mza8S2z21vzVJHq",
  "key11": "4WmVzNDzqmQRberJZXAXfBDCm1uBzCjzAMvESi4qVLA4xWusrdwkfkseRoUHdVuaMnz9Un3wKU7twpK8uwf41f7h",
  "key12": "3ugZYEhsnCdnjZnQNdfi2unkxcAEpEtnGxEkef3gQnRMqAshkUpHyvRea97A8xAXdN8RG6FUvCGdhjaoDMWGNkPF",
  "key13": "67L9wUfnspLdCwd7LFsit95Sn9u35NZxVRdZkq79GWc3UZ1soZyjiLSHMHiSHi3zNJN2jdPu6u2smFmHWivkmAYo",
  "key14": "MskFZNpCjmy4PBMgheSs524NTgRigufiyz7HRiEzVS8BXScRyvkSN8v68ysDBTxAdZuBGqPCpWS4dJXp9p7r9kE",
  "key15": "2DYUBcQ6ZtBNYRnmwKmJfXbwUv54rWVymEBFXndo7jnVCjRfisMkQbyUw6dou2xk6CbyqbZnUwCRLKbkJ8wZ1wMT",
  "key16": "2VXuje7ULs2FJSsH19RNeLUaTVUWxPEFisoe8UKXXVEn1uxzxZarHrcqxAb9PZQiAth52bbdE5vCiVz24qYuw7M2",
  "key17": "3RYfMPzcbv21dQUUX864Pp4KY7GcbjFjq5LY9MVH7C1vMaDm73DuQT2r31SJ43zmxcLYhhN2c6jN3qGdDn99HpKx",
  "key18": "4iaLEBHmtdhtiKAkcYLSL4aS98c2NzH3qrwL5LBMES2y4ZR6qGzaapRFr4j7iGsKBXkKMe3N9ujsL2d2KiE1twRw",
  "key19": "4YEvNDq3fVULyqQbbhmLrxk3xKy6uNvEe8MJ4CDpK5HFa6C5CAL7tQ1bZovqPwWq8sjUqLWR2oKgjDtpA3RX814t",
  "key20": "3PNw4tiANwLarHv6Tfp14vrnfXGmH2J9B1xhRa2NRX6S3MFRao56ifMtPjTiGXiuEayQHymAkJoEkPjLAeP53DMK",
  "key21": "444BZ8QTqMdqBDAHr8wBqrMrVPGjWXunw8Z2GfKczVL5AmiikC5mQbtPaavAnTQsToHt22e3n9qPAKZ912agkRTQ",
  "key22": "5VfjFy2MTjDzLRw7BKoTJyFMK5CPLgURa4f3989Z6T9LAsmF5YSrcrNwJyVZYMWgeUZX3GaNwciQHn6DkKHac2sD",
  "key23": "3t1FgZCKeBSQsNmemCUXXxGFiBZbNBmNSkuAcsZnRT8MDezuM3Litk34BtpZiioMqJRHhYcHKMeZRjU7j3KSPDcP",
  "key24": "327AJdZp9EEP5BSAP5BvZWudzERwSxHQSyptT7gzibbp9xWDSknCMGNTLLTcQbarPa1uPoYpogz4Hf7jDSFjEmbn",
  "key25": "3HFdRgZEk3GnRRbHkiBcCWXEwnM7jagEb6b6E8div6LNcXC8MejsiAsrXbwwDDz6hHYepwH3nz6EgpcWis1pBN3U",
  "key26": "tRCukEbwZGmHWUtoAj4NygwdJSnTkR5g2RdErSCo5Xqc9tPYghvuEznibEW4d5pLGV8EDP757eaaVmT3Y4FCi5K",
  "key27": "NWYkrjNEon1SZ9pGN5MdXKoZH6CnwDccgSeTzaT43DMyXHzHjLFXCAUfYHBcAMLdqzcVsCyo7eqwpeuGSAMG2L8",
  "key28": "4udgizUH5zH3SPFxBrNBxUJkb3z8GpxUHLW4YmpsyvcCzmPqcfK23BnnL6PV2MdjmTroHgab3Ym1tmYb4wFmnFZn",
  "key29": "3hNBanegDSU5ytRCRbqR6LwC38Tccwm7PLiFdhjAcXR1tpTNZN9fGKXc3PeKFxPCmVHMmiBCPhQfigMXL7DcFRvb",
  "key30": "4EXJ9xom6npUa82X5Xc9ZayhsK3BGEfD3X7CrkAw2xYqNrciSDEec4oSNEeoh3pQcgCvzFV1kL8HmKovXFirx4ay"
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
