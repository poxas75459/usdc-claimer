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
    "4SjDiTq6YtkCLooVBs6XSdnxL2433nvNfbnZ2sg1uFg9V4Ks787qch9RnEVdSFzG7yAvDSNqE68yBXL2k7YWLGVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjCFa9vGHkAgYTsWz5yuuaP2fYZRcHxchpsjzb7E8pBTxu6fCqosta18AuDfZJQdMJFtPGbn2cjVrVxyCg4T1NJ",
  "key1": "366Ja7vDojzdqDYJ6VDP6rPQ72DGK6EugRqEgAMY66GEUbFW4Hft7gAZwzqtq5stib6ejSXN3Nb3joyrkp92VgNW",
  "key2": "5ZgbiW8Nr2Mnu9RBWc33skgLHUXg32sotKMesUSbbhf4ThwMcWu19BUG2KPnXitJnpJYBgM1CbXdqai2rEbpXUZH",
  "key3": "2brXTRCyuXKsDQvygssGi6ZLuo9HFL5gJsdxRZBMgEkQMLNeiLA2nHNgLo93Sg1MSz4wHr39mfhdauZdFBCyVtPm",
  "key4": "4vZNwSbuCbGpaw2JpWcZMiUzTgJfLnDnrQN5cYAXSBVDpnfFvfUaC6L3wAPgSrYRZh8YpEann5VMKbw86QNd6YvR",
  "key5": "56ZP2NPZgeeT5y2rRtBeudohdREVm9swosVg6jewZZqa7xcCLNW1Uyb84o9aHNvBtFvkoUJhC3cpdE2CWXn6FCUm",
  "key6": "25NWL95mDBg66tUrWyNTcfMgPNCLEaUoZ7ffnidBmN8mm6Qs7ptgcevHz7y9w7i6BFL1kGK7iTpFNjDkfNLEJeEE",
  "key7": "37YSKgna6QqpjnCuGAMSiLkPusBoeRz6EHNWSeHskMTXV5eusEKdFr8L1ZAvYYcMkrQVTu6sNemFXU4F7urcptpj",
  "key8": "4pz7Qfj2GQMoNUaQFaWufGsGMGozFH1NEmCUGsWQQJDsD51RP1E7uCBmiyjKuNH28S2tePTSxeToVwJLKppSA6DV",
  "key9": "3JYcRbSriqq8jpViQ7yFZVBVricLRkArzXxbTepLTyvpwbHEump65hohWnYkTcRxs3ucjBFmboPsVw1oKfJhDUz2",
  "key10": "AaKZ4ZrsvhrhXQvV34SjQuik19sfM6rGbxcTBNXoM5oybiSV2U2yhPPrwQMqHzTU2AjenyDYrTu6Mj6sZjzhmUH",
  "key11": "3Vtw1NskMhDCvAiSUxhdrcKaVDhV3onzAVrik82mirERknxgvmEpdpoSxJnCrqNmTKDjKwz7hJXcMZtsDMgFCsVz",
  "key12": "vBAxEoAbee2PwPdA3RMbHnRoCQsbzZFhEsgYpM9t5mxCPk5B93kdmefEPQTNW8uBiHyGSsmrrB35U2LANcxD4Gq",
  "key13": "2k9u73E5ZahpYq468G3tLQTsgbGNW7Wbw7exiEbCSDLRjYkF4G4ygCnA2mv6A49PgzdKRpMEYbRSJh251xiMN846",
  "key14": "5NujKAGdu2gYR33of63Stg2xay8RnmvArirz9rfsWhwvM83s1KmJHDy8BhGSV9rqAn6ur36xnWfKa5isLE7pKK4Z",
  "key15": "2NyNX94dxUNSoMjd6UF4mnZwK4hEfw3v66sxYD213vybfPa2NLbWwc6QP4xPXY2iLPctShZ3TxKAiqpQdJ8FtMfa",
  "key16": "5Pw5Q8YiYpHAous556HAeg55K3iKDyQHHxFHiA8iumo9Z4tsqLAmsg3fLhQWNZrDD3LWybSkYStGDwtd9gzaW1AW",
  "key17": "5Gz9tgVrcRsH1ZSZL8VtqnuTogQFR6D7GBCtxXufsHMsCMaknSKMmT2oQbkmCuPeze3Ah83Dr9eSJYjB7ueS2nyE",
  "key18": "2d54Ek1p1k1vjg7uchVvAPKyETDKjffh5sFfMaDhVDeSbD63KCc1DyqqZcspD8ESsQBnLaFDQEqf7TdB9bXMa84d",
  "key19": "3x3WRZ4nw4UDa1kh4z3XspVfjJ172gYzyEgL9iHqtaFGRb2iU6yUbWTTnjQG5rWvzW2Ud7MQJ4jKG21ZRiPuQ9V6",
  "key20": "2hgLBT7ubpPvupe54RJ6Am3Hkdmf9XSBsfrs3Qny7viaznMCAr43oMcN7TKutfWjcDxdD3jyHAKUQeskceWLY1TX",
  "key21": "2UTBpcFg3GpSdcE38Q7Kz31bP1HfYzfv3a6yXmBCmaXpXsurf8Jh7Pq598Mv6BHnjeMBM1okAx39toj8QoEGLoJA",
  "key22": "2915jcADovgmKBZ85eKkXnUvxjYRjYrb2WHyVeDtTkxpfAVKGdDT7QDTUSrZg2pXeKRsbFGXpmm1q9svTusuxEhf",
  "key23": "3ZDnJimEBGQHwxC7QGgcXerLRvidHvudVFB27fs9fntjFKZ81szPmsDejFyJ7nq7e8Mw3Hgw7QStgYRNYZsD7jp1",
  "key24": "5UgVeTe9gjAmC3E24AyGCnJbwPsdmsSCMB55qLwRSA4MDsXnMCFZpUoky7NoSHJpVngQ3R8d9u6TQjzAV8bsZ8zy",
  "key25": "2Pdy7bAJ6Jhwg2wtkRfBCbU7RtWM9PNxK9VkbzBbXgeKBttAzKkoYQLJBjwWndy5FxHJFvpJ7h7Fqr28H6paZ9M2",
  "key26": "4B962wskUEmYXvULA3vV9EGi7dFkvK64dVkkHNaST8yd6CDJkGfs6ngxg9ymoAYNXkHADYDHK5Qwwy3QCDWkEUPo",
  "key27": "LS8Pb4XHSPpDQgZbjZDWR4zDWchBbn9mEVE5YjV3esjV6ipuFdc1Bkg9s3KGVaEgGAqoPwSZouo9LW89GuvfUD3",
  "key28": "4aGXWU5M8UnBQaYutvJSr3rZS8W5cYhBHidxk6PtUii1kXBN6bZxwCJs9U4bYN1pdGVrzFPTKLEgocKHp9bAJkxs",
  "key29": "5y6y1LB2FUbZzBdutUjXtC1iMWpVnrfjfESB113ecAT7SnqK6XG3p1qTDgXW8Pjn9ffZ5Fk25CYHaNkkQbR13C89",
  "key30": "49P8pZ8dE7MRD6HrruULYAyGTRUYJkoXi1h83BLQ3KajvuVky9NJ2GMpGWRvknxhy3aLqn6FYeB52bT64gmzmSps",
  "key31": "5sfu7xkxuPiQ3xQ8minhXeEaBTYeE4PiftF1Wg3FH5aPTgUQyy7sRy4aY7qEEcvBUJnrNKstJpjdnvnrBEDwrpof"
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
