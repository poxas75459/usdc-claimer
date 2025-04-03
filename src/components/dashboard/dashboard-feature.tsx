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
    "4YwFPkAMZVE2scb6hUv7JYGJe3KsqPodU4Tq4Ly6tMLrbBUQVQQDvn5urfrhmAeRrEisqjpkFozax4BkfKeqSoQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3naeLSVvNwsKQWw8oXxbpKPKBETpX2t9c7veB8iKUYNYNXkVoK9F2Pty3zmF1MmRnGUpunGNoZcHA2yu7WaFCfW8",
  "key1": "5RRQQQj9qsdpos64LP6ymBKpjAwiw6TpjbKswpJYjA78jh5oNE7rC4QRa4kpEkC75QzFtQ4UD2U8bjGTu4gyso58",
  "key2": "35q5xNPVBwE6hMHyTUNm3pWNBq28iVYY1GbttwJnUaQUxQ8MgxcLQ76MEjoct7RjrHUW4CEbrUgFwz6bj1w9a6FW",
  "key3": "2aeFHwZazXtRuKNWRaHiSgqEDTq73Zb4W7M1MoL4r7jBQf53CopTUjTqeY1WFuAj2krxh51izVtaMarCV7bJe2JC",
  "key4": "4TBaTicxq2R9S5mG4ENes8jnaj64ytVeJfwfB3JEs2XdZFz4jGyE8NcUv3k7sHvfGHJBYcrpJRSZubiX4aWCzNSS",
  "key5": "4SpngtuKdSNgJQmum9145vgFZL7gTpcNy26tACbc4tw8mxCwX1ZJCHNi9qtEx8UzMcc1A7edkBVhi7frMvaWv275",
  "key6": "2Tsdo8yMtygrn5QoGzPZggJj7VfYdhNrVyT9YwdHF992LkrXJX3bxU4EV6JfSv6mwcFUoANRxtTGiih5JbVqbfmW",
  "key7": "5xkxoMiAYCXxt85TLrBxpTbpPmYEfFjZZ8vVpRxLpwi9RK4LnC1ASZR485vVeBjwyDebJ1xopYyyD6gyX8wtxJyM",
  "key8": "4Eurysu4U5xQfRSCYisxEsdXcN7aAf8FopaP7rBdFArD9xJorHVAykRgEAU42KoKVYjxNEzaSfvsgxped4Vkyas9",
  "key9": "3k4fzGXAhPaEaVmsAcnypHgkmxavUSdiqaifnHuoTh9eSaDyiR5YMLYcJ2rGooeea7WLxSXjBFoMS4UtEY2yMrRg",
  "key10": "3NJdMWESybLrSY8npKMXKzd9cnZYoQQqUQzLyUCWdywvUSJvEStVmsgH2s8V5wYoxA4Wm7xdXuqp8YYeHUYn37mG",
  "key11": "51vyBzkgBoeeRTTXDrSqxjZiPrF1spkmX47hj2Mxim5DukBLmdyQdmaNEBHrooYYLyGWqn71bbzm9YXbutoKyonZ",
  "key12": "39xd5Ckh4rgcRCnG1QG729eGgPfXrGhGaSjb3ZPvPCLsSRK3UFQAem2zBtZuMRWPBAzoxXvrdxwy6a5RTP736RjH",
  "key13": "6RRrmaBSQtGzcghTGLeTy2dMxNzu1vVkDchhBdsQtbQyDAqaHu78DWvTd5Nc18sLZ7k8F53Q7LjSdD7rYx8knzJ",
  "key14": "58kzDhaPQPMpPqMbxyJ4xKycC2Zjdd7sJpTqQ3XDftnWeiPFzixZ2obQeh59Fwr4kgjC8YwXN8twjMAcrFRzsT63",
  "key15": "329FFsoSyp6keUGuzuWQaG2x9JZHbakTqenQNB2fk3LvScNxNPgbGhe4cBuu1e3RTdL7a4uWGHmzj2FUSL5FRRfL",
  "key16": "44m7A7BYTnihvBneF5hUN4sLS3egsjTcNiQQwJCvG1AW2QegLt1jW8q9RzpX5aPrm1c7zAhE3D6GKN8SPCVosGzQ",
  "key17": "pXSXd7nVh19kmL1y4DSSdHrzfNAZabz9VheZ1non9veh84oeZoV3xzhrECeQsQ3DU1fxwDYRDwHskzrVu7QKsKx",
  "key18": "H1ZgenDYLPgszzYoFPD2XNYc2ewb8932FbMx8LRJpHYV3P77Z4nwX9sfudXSKsW9Evt1D8uN5Rqr3eMLDxpw5TZ",
  "key19": "d7bAchEszoUzygPkUQqvD5avtud8rH7fZqteRrWbpfdH5ytT4edjHzdYSWaKvp66ecuhaiXfWirgtn6gDJtoBBA",
  "key20": "3G7AnYL4uQ5im6yoF8BE8wQcBxELh7aihgAuRC9VZUNuzcgFF7mCFupkxzMWCNmDUAPCJAfKwLh3VGCihZQdQWtq",
  "key21": "5iLgpbAFXgSLBQqbK3vhBjFG8wdHi6mWnk5LiH6hTw426i7JvXU8rKQFrhkZAEqm9dmcE1pT3xmsFFAqZ8WvaiR",
  "key22": "4u9EkRYGC3KKv9cSyxzwfSdMsXdHUXiVCXhkjmkmaxox6Hy9iyAD2Ziz3Qg5HY8YJjqvhksoNhFJ1uMKG79eUcnb",
  "key23": "4f6BXLWvpyzncABzPT1pLLQ589V8HY3q2sbMwnjWCdB1iVp3WUe3Xc5Es1EWmwxwnHFAjid6pF5MgXQizyfg6RWu",
  "key24": "49hJzjVrsF3rbZe564AmrL94LQYiT14tC2EJoc6pAcj3X9F4QpsHve6yCBKMEZHHjzTxtguH6Sn4PLfrfUGpUNxk",
  "key25": "3YMCXcEyWpwzzyWtdDaZ8ywPK9MLNh2iJLYXHvHoN6UNieUptg5ZKbdFDyEfRriEqX3vy2SqRvy3PunHYU7VRmg6",
  "key26": "4sSEdGZymNtQpAGsjayEsHmLGzjjzwgCnvaqyMBX6fqQStmGVRfUiehCVeJ38v24cHtUDMzzpqALuTcoU5ose3bJ",
  "key27": "3ULBkNCE2WYr55jjDBztGVp6QANvrhoELQc1fAmtL6mVw4u1CDqhmyjtWhs6Abji18n2YgjMzGRB8enGmNcdLzga",
  "key28": "3bMcgwTpQ7KHJzbVAAtwNZ7ds1crRx9mtgaofCoKiY4fw4fxxJcTRNRSVZvcmgDGBgRoyZHRPd25gkxemogKTBea",
  "key29": "3AL3rXqFjnQ9caakixTbggu5CdrHR2Q1TkNDLQi523xDNPeMZ6fJW9DSKrBBQRgtMK19LKsad2NtcEJDSqtV2rhS",
  "key30": "38xcLzjBvUDjVbCynYVJDJdZZiXuzp6khK1Xh1pZLMNU5B1yptvZsn77nfhSzdW2GRACuXtZLDNhn25rSoSTukXA",
  "key31": "3gf9CLP8HkMoTnFbnSwafbf9ymSbAKE92VQDQM5T5u2oV9y47kECJUDmuryqcMbF6ZnstMekXgVjuTcDhqRsNQdm",
  "key32": "2trq9vrw4xRasSnvSsoUM1f6EpAbS1vZfk6oFL6iyazWutFNRZHVMFxnVZbN7YCxU9u34FP75Ebt2MEpyrNEX3y",
  "key33": "5MHgxReKjW15hskTR4rrVsxC7fnpJ33fknJC22UZPbqLSNWiorfgxk4qy7rs5HEfbughfza2ujpz1XZUtcR625JX",
  "key34": "BerMPYid276kCKyB8HEedktx1o4rUA8GGaaSZzPydhyfwjK6iX7jQYcuP3ufuhVqHwbcfMCohxEXc2WEMLVKenv",
  "key35": "5fhoto4gD4kao3hLRpUmo2h5wqekdN4xcAghKcghuLvKxnjk2qtojpS5ZfSSvwvSFxy3AVdxUMAZMyYX3gZTz9XA",
  "key36": "2SpvCsxwW8VSttkytR7beVRwSXuFdPt7iT5wqSZ1Leg1ms5WCpxXPnvG8CLJNmVrA9bdpfyWXAgBVuc1gSfMJy2A",
  "key37": "4Qsv3XZZvQdEBpF4Sn8VnzEC2FbsypuwmYBagmTWednBXW4WG7eQQ6B7zTYujZui2Ps9A7nxWwrT4wJDSttYaQfs"
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
