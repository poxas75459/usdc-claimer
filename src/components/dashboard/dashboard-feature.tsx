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
    "62RGwRNwQNxmm3uqWv41QATaeKKWHjaFDSCYY2yDy7G4BQECKpFyseZz7dX8dC2KaFwPwtSs2z9xrMWznRwyKj3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p26sLqdhcrU6EBQ53NXABMGMEErakztDs93kdxqcx1VhQ7jBHGzAhXmLK1itmC1WWFxMzMsFSNxgWYqZDXDocg3",
  "key1": "2cbGGrGPHkLUiytZLQU4VPvnS9BSTBHhEMwbSoNgQ9JH3LHJVa7wJjz7hw5tMRZLkqyWA1j1rJHSP9PUS7vCF8b8",
  "key2": "2vSAZ5ACZTwnhp8bXx3qp86aht86hapCLwEqZCC9N7RsAezFPpef8WcKHPE6da7TBugyyE8YrzLvobZAHQae5PHC",
  "key3": "31zMbn72CMf4WRai1Mjgw3AUbGB1CQP3xG1KFwGUv9TdL15UaBMhoF2mVjvoYE4zt1rQw6dPtG5u6d8Rx7V34fuM",
  "key4": "4KLR9KPsEx7foCcqFByz8nSjnNemFmuwhrNv63TZjhMtJxdSK8YhfMf2iHhUVjvKXz955srTm5LCuxFoD4BGNxhy",
  "key5": "N92Wp5XCH54oQCBPgGVBt4UUwDoRM14bRhgzHstD7tcXuf2vywsTo1t6dDQG118UmRFu2MHjzpQaR2jGAJYuaRS",
  "key6": "HFRHjZKRUZd22cBb1MMLgpjN76xb4KyZ9JtT8WzZyEcjKEyPdmEqejBxyKArtD7MotbzEicdJ9tXzov8s17oHfN",
  "key7": "3xWthbhBErEDrW82tRHfyG9oL69txU818quFNo6NwLSQkKfmN2tK7ooUTRLYtUanRumfgwXkQDUNrWDf7EjpUUp6",
  "key8": "bwsC6825FeBJVJSeCppLpsciQcm3oQWPRGdp2ZRunmxTFY7c2Hoq2P8bUdMHjjRMAYU8nSaozUVW8U2YMKpXzHJ",
  "key9": "4QZXawwnmR1G6821i6wEmszjQyvvhg1pPuCnNLQmrik8H561HeahBJ8Axw78Wi9oVzpz5j8MWcedQt3ewiHxEDBT",
  "key10": "4gr9VHnAzBQqcLZwjec3Y6TQBCL4LsMjkKhjhx5aqF2RfXhq8MfeYC9wCzdsAnzPLHRpGD2iTuyWDS18Mruegb8M",
  "key11": "48cGdF1UEBXiQJAC6KaZLMauLtHFqgWHX96QDtZhLfrV8QuVAGzqrehEJzJBJqkkxDPCX46WuL5faWtWGyUn6pis",
  "key12": "4LUrFRhTwsgePUxSn8NswTyoB6jN4YYMptmB14xyXUSgqCrFAhS6BPDHF3U2LVzbrQYp81SxEwi7s3RaSJc6HkjW",
  "key13": "4fTm1d1B9PfvjzQL7MqAEjq4H6heuT6HDrQUHi7tUsQbEiNMWP91gEx9UtWUFgJnPsk47mrfk7ZvkZVwxk4MhLSM",
  "key14": "5BPs2MHTZgx54p9rkJx4UUSxEoxSeWrDPbqRodFHnXRefHMPRHjWMQDRXikm8VkmSV67SDnVwRNTptoSi7WhC5RK",
  "key15": "23ouAUAmWaovohsbCAR3rfKGi26iT61t11NQMo3uYmbhzw51LvS9fwbsHTH4XRyBJfxuGUX8caGHei6Z4qvWPaLG",
  "key16": "5Sxfgsh4pnLGQWz1BcdyFuKkZ5QB3kNiBFyrHNcomq2PvUnSmWRwBuY9UrYudciTarSnwnv2E3FqWrsgo4wGP4As",
  "key17": "QXG8x9bEbajMfFdVSsgng2Ly1s4fAnXyJfgsyFLLThtGWPEmHzUB8TKiLX9hwbMCpa6rghThtvTa7r4z3CUQrJN",
  "key18": "58uvWFhXPL7cYLsf9eELdZnAcZGaXJTNdM1BJSuvozCe5cfFrcuX68dbUukmMTTaJustF3jb8vuXkAuayQ7HRMmY",
  "key19": "4mEwEgQYkfhw92jZ32wQaf35nzBXRX8M4tg7iZEa1rq9xmL8bQXMFjynbsPKoRvzVQFnaXvmjUZPobArUsrvNKbt",
  "key20": "FfScB8houaVCWe5fD2apdLzkwqWzU1dUfnuKVCJDYxg1vLpd89msobLx9HyvAiRtVZtQgJbDKtPvCbEUnjLjUWZ",
  "key21": "2mDUcaCCiEDkWTF3tSTU72nWEZ8pUGyNHmmjNF4QvPz8ji6AHWV7XeYqfUye48TMxEXijFJVeeBJDaYjnmrsN52U",
  "key22": "3ss4TMi2Xb3p6t9cE6pgCZryzdWY5JUqjXENj6myWibVoTLwfYDED9WueunRU6sN5BdQoKtBFYiety1LpgVLZpwr",
  "key23": "3RaSnY6dxsXENRF17Q5tJQo4syRbMkSB2YpiJ2yqefPk162BSyvVHe9omGMuWxGB7dSiaxac8h9VJp6ww65wz9XS",
  "key24": "5Dx4KoEKsoKmwfCFokEyGVvrcS2qRx6JJ7E4Xg3xG64fXtpRG1YVFkrWaApEeQCwpXF7eMz54o7FrpMbSPZ2irpX",
  "key25": "z2oYgnBwmxnFvomdFaVZyhPVUQJmKa7ZuCneBH7B5vRTjBo7UwBAKrDnAhMrV6jgVcHiy2aSjLAw9DnQVMGjHM5",
  "key26": "26ZUtLYrrK4Dn3J98zHoxZzqnrPzpp9dvfDG4bGLmgyo38EuVKrRm51HAUULtUC73YcAmFF3n49P597YtUf2yJic",
  "key27": "6pn1V9pYkCxfPH4nM3cYu6PY9fKRYKw7JbyPun9fFiBaqQgytuBxnYWEYGFZK7BbDZvFYC3C13G64EFv7W94boU",
  "key28": "39abpa6uT4WReomfrPRb4Z8wzNQhVEbYmD5qiG7nvR1FmKgqiCyGsisUDYc4AUkMoHKZnG8hith3UajDGoFi9hdp"
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
