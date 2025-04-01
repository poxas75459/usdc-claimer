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
    "2q51s7n26KJfPPu2Yvt4ATmPLniEKax8z6qPhsLVbzSbYwfEDWcGukDGW4HrgBVoCGfPwb6n3PRAHyBAKhcVQxyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mk1Z1fRRodtzGo9vYUe51e4TaxCStcJu6RksX7WXqHNzMHswSMNmT9ZssccRa1xkHCTrjNxsfcrNRWVHUUT9zdZ",
  "key1": "5X6y29r17XU4tob9ZtkPGGt4mbSQBy8mEDzSSVbCBA6C5XKcQXwx3p3kMUwF3NWRb9riwZDxjcntWffVu37qLYSe",
  "key2": "4Vabpx3AhatW3Kceo7sdoZoAZLGBdKXR43UZVGWrLjqbBJwubMxZP4HrKY3wHVJiZKrU2yLhvJ5rLQqkYJiSqnK8",
  "key3": "4Ht4uadWuSo2CfJTxzh2ATaoDXTJBCydsa8zqKxG6C4DnyMVJbDhYamDM96x4jHf13gi3PYwUXfpPK5Bo2vcoPPo",
  "key4": "C1UPFGnvU8jTEV26MSPMpEiTVD2LEWo8mtjKvEo8hzoE88rkqXvnRQNUgtq32wtTEg6ZCapDNzMi1ByAj8sHXjY",
  "key5": "4eVn9gRRdjR4d3Xhpj3SkdyWcgJSYfx3hP2wWT7TjVfGVtP8evFiQW2VYaWYLFTBJtDk3rChRneUuCf6d1mF7GMJ",
  "key6": "C8p93Up6CHPXEeEAJ54dVuGu8f4C649WacVL8RBBiCDPbXY3SyaDFdPeM95v8Jju1eD5W4Fx7MpNCNidUmN4b2t",
  "key7": "65L63G2FpBeMWG6QvUhtWBztrSs5WqDztweDyYgTAVKfY4oZ9Z271xgqs77pkXBuJ3A1XC7h1AEsGEjAtJXBtCBH",
  "key8": "2QwiPTJW2P1DnBGuFpVLHrbPgQTuwcE13iQPvDADLTXM1yWW33DuEFUsP9YyX2VXHkH7r7LvtxhDdFsCE52NXDnZ",
  "key9": "2Kdxs7SYtjKbGLtzwLNgNd3JQH8cUxSpMK1boFAZ5s4Ycz62YRjzqAd6nE254yPzAETSX8p29dbGkzcqU8sSJajf",
  "key10": "i1qRMktjH6BnTyKbHExmJq2Av1kPxfcXxF2A446BSukaVXp1H4JeEMws9BHirAJHmZu9EJjuG12WvNtDiEtsYpD",
  "key11": "3NSr5eDguS3b6i1F7UTc8TwDjEBMmrhf6cnQEJQYMEcHiw84oGVNtffZ5gmdaEsz5g59oAZoaEjaPvpi4nPxcnVi",
  "key12": "2TMRc6jUigfqewU8MSHYJKcDZjcD6u4XoYTwYLWar324VjuzEymJfonJUTfSNMvmPqaePy72yhLqcUF48BGWmvop",
  "key13": "285RY9rw2JjCjqbQxjkmwPrMRbRJ8o37grEt8UWv99uNHP25xX6yP6DTyLKnS8q8grokfSSwyrPpNVgeyW3XaHRj",
  "key14": "2TPbSvEEvMNkyxJNwKRc43rdgwtnjBgrhYsCbQgJjHB3fLxZSrVHoSHpiaA8ZuEmnToKy3QkKVJ91EHzzu4qbdS8",
  "key15": "3TFKuRBAkJetuh68423MdxJpPnqgskwuKtioXiNSyBDETChCbRkVixVqftjei9KLxmXzYdLyF5SnuxRPAxxV3yAo",
  "key16": "3SnLNMXJBxGKZBQQz9P4TDpfY2727Hhu4NyynoHezKXs3rKjthCwSPE6v4n8LYb3deEJUACAsvLWejKaFWfdyeT4",
  "key17": "HRk4VTEs59BeCS19xJKiDtrA5YQLW7vBoJxERKnHSP5UAQqPKLmkyoUxv2pynA5iGxcgtcTVHHZ91LuuXbkjPpv",
  "key18": "34CTVaVmANT2VYnazcR4SWbA8HvHyzdg2JAdfjikLMBktDf6J5Gd7F4GjqGg4TDrfHRgEmYqh1UUoEtqacNYaWAj",
  "key19": "3kYCMii5QqWKRAqGEZEptrcNmatNMFKS1oYwZJ8tiMEcMgvtwXPgbVNVtQkNxRdf1MjbohbK897eUvLrr3angw4G",
  "key20": "EYZHRFmFDpGL6PnCtH4S7fRA84YK8pHQebi8PH6Z1U5dd8yQQtESeqAAVun1eu34oGQRf9GA4vdxkx7wVhHqcDk",
  "key21": "2W2jMmw5GyRy2QCD6EsFLGRYatKUjdJJgT5c4rqr1jJ6cC1bEPRPnaqf4qBsf6iWbvRNomSwv8Kpx2ZA5RGNQKA8",
  "key22": "EqhMMy9RM9DpBvnfaJzwEWAUAat4S1Lmq2fpDLYAh9tUVorf59zxBRTiL6geh8CG4TjJFC1ootzk8f4kvKhtpBV",
  "key23": "5igBECSvg1XXmF8th6ZAtsDyHum1RX4qPXc8t7bufVnb3a6vdvprNiKVAwZUACXSDHfcYTxrADTbEUVXAYBGAwhw",
  "key24": "5yximvVmpJga4kzYWanP78iSEDzDrpwphDrpWM4S4t1A2VftVTxskb3L6Qd9FgCFTsywRQqZnWAwCc8fMXD7oZtn",
  "key25": "vprEJsDNi2nR7FdF9zEopgGZ492SXNMv2Cf6Ye8QV87YMGzoPtQjBS7Joj2LAwoNshHEmD2DEQWFpjww8DHfsxE",
  "key26": "3FDUT3Qbw5KHQDVEfbH4uZ3kCigedQq54qfQLciBqQEaqRDkBx8pFimwGgdme2MR1LzpWVmNjMJdyFgt3THgi7Jf",
  "key27": "4RXCopaBnHqBvinMA5zgy3X8uQZNE66SMCvZEpL1EPKiKZEmDWzsGUVzPCiZE8eN7LchYLtiBD3ie8KZSo5zhCHs",
  "key28": "2RZ47R4XG2GGoSCSjJh3GRKTAUEYaJffCdKpSug7vxYjgX8NJByocgdkureYi1EQ5YcFwLU4LkPo3n3zwqkuzCXp",
  "key29": "r63DPUfDMyqCiZHpibL8ZbWcf5ut6R98LhruKpN48s4aT2UX117qQt751gJGs7ckCB6ekhky1pUebfeNVcgD5o2",
  "key30": "21U5iQSytDbVQd7q2UjaEMoHQUr8zvcbpKjaU12ap7friHWkqyoJ3iBdJEgEVHFWz298bJfjZM8NjTGXJU4a3BLc"
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
