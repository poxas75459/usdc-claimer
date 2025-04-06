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
    "5CM4UMfTUGuxYvPpj8uraYJygqNB8GpiCWzkXUxzWL96B4bSnHtXqCce7wsKHSkqPu6GNtcMZwtMJGq4LDvwEeMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3riiEAkfQkqrxq1mQ7bSw8bxz6ocSPoSAjuW1HTrYdqCsroEX1KHLRA5ixKX5a6WAGcJUck6Lu2xaQJQQnc2tL3M",
  "key1": "4g98xxRbzzMhTEtmpGofigTNR7Dnz8FzQ5aotKBgL1YBBcoyKvYy4eK7BqXijXBU4iV1MH1yRHgrhRWroEmRTyyq",
  "key2": "EGb7Prmx6TikC1Xz6d5ZDka7H9q1y8b1bRvnaWNufvLAsdURsuD83ax6LhcG1CGdRvAMkC9nmJJhroJW1uq98QC",
  "key3": "3FnasHnPfoNyovwWsHwPU8kV6KNqDvEu6RBTVtivSqmXndcwHTq2ZFVVjDScJd4LcdpExaLLPMhmdrgDaHW98Y8",
  "key4": "47ZLCDJ4tRsiqovXJ1eYJtXaLLHkgqbq6BXeLEk4eoB7BSqtzu8e8FHnJHVpPZqkaBjY91Pmtw1GZWLjDTFF65k1",
  "key5": "JrcQS1EAetMTM1PhX4o2WcjoKemM77CJNpW2p6KsGjQrnwAfxydeZKw5FGM78G5jx1kRNDjsFXV5VEDvrUwLsEH",
  "key6": "3j7gdBjpqTHPuA2JVrQBW2BD9MjFhTjn8xNABD84krwJnZd5RwsgLQgKbyAB93SHxqS9qwjx5hymL6nt7REup7ZW",
  "key7": "vov1R8GSNmtno7Ea9uDuf5PD39DWps7jwfZ7RvQPwwS8NjUTWnPAdfq3Q5uY5D1fcY8t7KTu8FCUhBjvVcd9ukd",
  "key8": "5H2C1j14z4uFRknEnTSH9yWNH5e7CQ4tvqwCjFc5pYVCsRnjzGJfNjrxm8PpknmSQcXso7z3NgJWHsswZbsm5qVU",
  "key9": "3ZGwrwe5AXFjpSqXoUxjZmgQzjqZC5YK9twXZMFzpNDeRJqBxmJhqu18dB9PibpeJ9v3Fj3XdsWaedv4bUDaHRhT",
  "key10": "4XjaER2QvdpUdTP8pxZh2qDqdE81VdWb9gCRsspk9dAFagdFscvJfDr8cyoZxLQe8dQ5pYi5nfdN5UWChfEVQ3PZ",
  "key11": "3sjvdvagdLpYQ42hbsn53vcno8tt97CbnTc7B8p4h9mYXyRisQQsnMkED4j1NEM6QoUHFJ4EjZsHuWsSEzk2w6hz",
  "key12": "469trA43Z6KjjEvCuqm1VrC1WZVsAv2YJ2hfdqnw7KLZ3H6g8jFHamVtZZ7my41moiTvxW1Qw7o1zHFrexf9gKe8",
  "key13": "REKqHsYERGSuPakeXxzGwcs7gBXq9GNw4rXR19DNS9GB9BYLYez4wBVyBtABf74iwEi4fqUNMNavqebTTHc2VZw",
  "key14": "5ayzxKakh8Ph7pEiBYSxMoNqzwUksxeyUk9rGiMpQXAsQVSTRpYAnBfq1JNgqG4CrCzwRT2aRVygVNHuXVEAf6jz",
  "key15": "5Tfywf9s3CuWUADV5vqFoBuSwX1LzJrnNG8aXXTanreohujDudyMg6mDrk7KHzvq2yPsrRry66kgpwuW1C9GxcKu",
  "key16": "vpNQFHx3fCWeVDd2iBsKcrsCvxUD4xjoHyokqaTQMVnrCtMTdjQdLJt7VtfFUthe3tHxj8i28wn8GZsjA8rBGiw",
  "key17": "5GB1kXs4sTNZA3cemADWgSMJHViVxjNmfiK1RH6sM9SC9xDrHbykFkgKtAvimKM2xNgrq52zHy5dC2qqBYBcJBzo",
  "key18": "3Jk7tcdxSD1QyTBoVk13qboVG6xMBJcS25xNMvDxVXSc2Dov5ZPwYwZfjyPXn4enypQ8Bk78Pod2HatJ9XAzH9Et",
  "key19": "4qymtTMPg5dpsxLuaXFpLF9N6J6ccSqxWSyfobeNR1f1fWVrdxvRsXF1VBVg9tQjHdPoRJnJBsm1dyq7Wcx2T26f",
  "key20": "65t5wEfVuZU5aGUdRzj6rByiuxjo8r74LppRo47Ujct3wB6apeKqiJFcpBqRbWk3dyYkSsihmYCMytQfck71CXmi",
  "key21": "2jxiLkNN8m8e6J5ZRTowDpmWNmYPAZ6zqtkxxXxHVYqLey1r3WoVKswkot9HuXFPNXrLsZvFmTEdD869ZR1CmdQg",
  "key22": "hoL4295gmCvTk5EeMQKuCGYGVyaMVdbbn7U3YUffKy7Zqe7ygjBi6SQZ7RAsnYJK862yWYvBu9BEoa5EWtsYTwY",
  "key23": "3QhUYTB8uF7nEVcTHgGhgzNEstYkJTwzMhcqN5rDrbu3uySiSr12LC57ZGtdjDoq3zHtDctCFB4EbQwRtrmrYUpg",
  "key24": "4MxiziZJi14UuNprSu3gsocDe7UsgpAqW58anpke37xzqfZAuQPFYUYuzuyHkNKcFZuebZJJG1hWxm4wwjbutGxm",
  "key25": "4cRLppKMbJkXziwKP5K1ScCbVypRUFYdfTpeh7iTCUV4tTXzqnuC3ei7pCEC9vqeYWVcR937q2JXbibSk2RcbiXj",
  "key26": "5pHfF5b1dKPCjLRd8gFbivtVT7RhgKjGbo1pEXfH3rChSDAqzMviqVuSQRo4TCePy2E4bNYu8jAjoHGpzmuy5orF",
  "key27": "iYC1na4f6cGHDa6zzVNLgbDhRg2uCiVH6iDV1sRT2zsVcj1yG3xvCuvCPSwstKZ8yMs5kVY7LsSZrbTXMzT7VUT",
  "key28": "FoWHUAPR5kRs8gsmAgipkG885QccgYLMAvNwhWUEmZPxHjU8KbYuuqBo2ozj49QaoGH2pgzY4FjKD3nrjZtH5ik",
  "key29": "3JA69gFHBUPf7zqhFwgC2REC6weSobeMsmYZrZY4LDoYWWDz6gADSc3DkrWc1R9WRGRj2ZLffnqSeTRhwetp27bo",
  "key30": "3hpVCvgFisAc94KkiiuvRi4fNo6iG6kU8nGij6fNmzeHDwVLnLb3nzGeAu9bdoVTWeaDBAmjWDxR8dzWTU2d922x",
  "key31": "5JHFUSzTHN12A9i9Gbj2Z2Gjd7MDpYYmiDz2wSFJ4bJYtHE6Zz2NmJbhGCVYRGDuUQEqs8PuZKjR7iWGhiFMcS3o",
  "key32": "cpnvtLMQQa5ujDRsWU2MRxJ2HdSaguEQSqwzo2WEDUQBoEqKAANhVRYr5N9Z59DgKxwY8KUrMALWadDrNWnuCTX",
  "key33": "5pHop8Qx5pwvGJnHZZebZ1mJ1GPqkySJ5ddftKLG3rRnzeavEJuwcQF6CFo3e76oLGb3TPypaZGJUA6YtBKBiPx7",
  "key34": "37MssAFmFVEVen4WNQtC9g6H7UaZgvCjCenNBeaBeYuzZB4mKm5ESquY6G8jNieRuWaDnYCqrZntTVEFCzuWMYo5",
  "key35": "21zDY74waP24bJd7zy35VJhmEtTNU9eHfhcvXxQsN54sMtWNrzHrLBmMFnz9cxiat5XRcUF7y94KU6avywerT5ka",
  "key36": "49MHxdAQK6gfEsN9pEAkEwUH6CRdPeJCsor1J4BYMiqWC7teVTXaztgcPRYVFdqLQG5Rvk9hkfCctCiNiQmPUzFD",
  "key37": "2cvb5apUdTQqnCuhoiSVRickGJQwiMbkKSVLEyTmiRoHwVxEAtyK4P6tzuqfdWtdKLYba9Dzbpy6UGQvDJQjyfr3",
  "key38": "46QaPL2DeotAjERuxHksMPJkcLN9wYGc8X1vcvV27RVyVsDQXQmTZ35n52GnFFbe4pfShPLdLSqy4w28XVVMCzJf",
  "key39": "5BSFrNeaT4B3b1QWUB8f1zN9Qdcw3x6gDYtNBEuEteiZBDWNDwboA11kw17BFVvaZAkubGgVNrLYrJtqyBF3dA5o",
  "key40": "2vnQWWovf4gYKfscuYrqwHtEcs9trC5dmcKUB5XyqT78pMEUXnLWLwEQxJ2cA2ZfYUty27XeCKruZkbtbPh8BtY8",
  "key41": "4QnmYzt8PMCnHwjmoxQZUrQdCFWnUA78wZcWjqm7z5hNudvcNA5eYrAC56KRjXECtMQvzVT78ZZkBVfTJYNdCWZC",
  "key42": "3KdFT5AHakX9LUMQjEgvtHZnYjKZ2ST1XDiK1oaU62P457KKuGUVVVNHd3NM9c97N1H472JNKeCxho44pmQj2oR",
  "key43": "488Jym3swhcYNNDEvtg3hjQtbJ4cqfyHx4swPHFrjfQPkwWC6jAmusarp3A89cjxWGufg7EYD7azDhAx4sghxfnW",
  "key44": "4J8pAWq9xthWeDCgGvpbZ2FF5o2QxnKe6uETZcMYiT4874eNtw5Awr5CXWwr1ww4gYfTgMhFtj4MLs5fscB8kMeP",
  "key45": "2mXaF2CBjMtq4PCV2Wq6D5Mc1iErj14p2PCg9fx57arQnV3fLJ3JNbv4DAwt96rRJqQT3E7gfBxLQ35EAHNGUPLx",
  "key46": "2HLibR8NuJiDV8HxzgkE5Zd7MdWiuXRdai3zTuTr2fMwcx9gAh3mEGkWCnEDkSY4axo68ThXjgtyGYgiaV7RRphZ",
  "key47": "2519vtStXWPGmNSkQjmmSvYJf1f8vsuSdtWehQUDxFrWNLwLQs7hQU8PqXFYKsTrPKP3mK31bf5TG7wWu6KaVcXz",
  "key48": "5AjN3Ngn9Wmyo3gAtgx1ASVYs9Q2hDCRnaSSENdJNakN6iAf9xcxqBQBLiE8UDDy3QpgQtGmKZ3gi54Vw1Dqgb9z",
  "key49": "4xQg7GvxL5Hz3k37kPEpg254kcR9nEwEm2L6WzQDXmMngo5a41K6HxXszB2tpfMnw6Co8pgRiCbog2LQuo2mHyVj"
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
