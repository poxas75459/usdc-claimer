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
    "5HUZDYCLAUcehtRWRqau4GjhrwLDp2XjCEbJ5QKHMDUomeUXnxeUGsPtjF9MyAtgZKaRb4jQUUUh6cSnm3VrTtgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E4nXQwNwQYZdJvZ8CKaY8zkBucwfp3um4Hr78F2KQsig4rC9giRoECkeQP3RF7XhDKtKvxKD2ba3AhJYi77es4f",
  "key1": "299My2iXqV21TTJbDsDMFpRhV4XyYimk77ZXiTmwXFUaXJGbmXdZq2k5seGuCN83qk2K6VngGrvZDLhfzka5Scuk",
  "key2": "3uYkjZA7mMhupaq94EFNjSVVv4JAH6zL3k3vzfv675mnLdnx4eE9oNfatm41pD2nBz16NqGhR72EJ17FYBFCSTVD",
  "key3": "4eVLtNGLE1wqWCYwBfE94p8pAVYd76Y9PpniPbzXMtHWfX545BNsx9FGaQYM8vU2PsR4gp9stXoWjMq555SvU81k",
  "key4": "NXMNkTKJJ9zZiUTmfunckW1CPuJjqdLvHWjbgW5M2LDSRRVUW8sgyCBPWR8TyjxmzL7kv8BgDN9x8VrqmraBuqm",
  "key5": "4KXcm1pVz2GbCSWRBTPSeeH2eN1ZkhQBSq5sD7yqY5fA2Vyjstby68xPDbsbG5HDLHE58ChMCwocPtUsPnh4gJ9c",
  "key6": "2YfHxxfu1zAZouVLTLgDGwb6oaWxRjmhTey3BnUyT3ebWRk7YxUooHKvG8w67QX7UTYrbVNhu98GfspTwhLDQw38",
  "key7": "2e2rvnS1pcUPiakxdGQFJ2itMaZTfpdVJrzqJGcyrVwVazSHxUzPqGkLX9CXf3EmjMabdpjTV7SGhncb9uN36Vea",
  "key8": "5R4hL68JmvqRR57c24yntx4Smo7cAs9mJP73Jq8YqsKeVnxLyfyYFRuQokDq8WESM95ahJtQ5yQ6HPdGbxdtMRkJ",
  "key9": "juem2tWmyDuo4GdFpkez9QXh2WkJr8CiA76iFtHHy947nrVY4sUD2hpyDRT8S4Ytc8GnyUBDhbXid5AG3D7d1FZ",
  "key10": "3YW8xDd4deMHjKtnphc3HpjLbcxS2kzbs93ETcTK24wXtvx3BzNEooK9sNbUrfQUryo4oHKUgZbrJvykLQP4qJjW",
  "key11": "2atjdBimcGoGR7XvyE6U3c8Z9U1dH2LPLea6afAqGnfmEzdc2Fj1QJoLKEuBGbYqb4urSPAqvTw9EyPev3Y2v1FL",
  "key12": "4qzHrrApTRqPqbmGXVo5R5E4cCqoeQegCjHb2bnLUpi5xt7Q6iUFTKub81xbZtwGMEtLMq3rQ51s8CM8wtyDsKpV",
  "key13": "5qD1vr4hX4FfzxzcARwYDAsvcB6M9HGvL9mdxvHq8jkD1jrpd1mqToMSpFdZupGs7PQZ3BcUPTgU55Mrr9zCfgkG",
  "key14": "5yTykzyEo4RnPnW1Uc9zZ9ChE4tYj4XGmYSCLUQMwuxNeUyhFHchBaHDKWrD9tWQqwmsTtEbosPRUM8m4iAMfhdb",
  "key15": "5dZdSpsbUfSnPGuWPGanXgbGdao5GdSU3kkNX6pG4qpjRjSZVhrJNDKaxDuHCsGRbd8sC6XkPTPjutxgeDaunthq",
  "key16": "2hQDfNhvRrd19JjXoxgvzzvpuarX83dTJBXdpeDtmAjvnW2K1pgZzMP1UUbGYrQJDS7isbabGGgiN7N86jRqvPMo",
  "key17": "3y6XqH6F4ERzHtgw7S1xMia4kP4xbtFHskWTGNdSXYi3Fk9cScfBnU1jFiqogRiqN4TmCe8qrVVAHLKcaToNWkqH",
  "key18": "3ZD87iDb3DniLaqayUoxbnd5TbZ5j8dGEbTqgnHJn5o4gQpVfhquGPVVyCWTqEUAK41dju3Rijn3HGiYFwWu8Cea",
  "key19": "LKag17kUCneLk9VVT8JarVfBJE5rqSgnyqhXYNeCifSa1CMtLtVRxWUWNYzhcjuruhERnPSFQbTHvU555tgrBrM",
  "key20": "34dQpBaUkejTWGdUEYqrGsSmovAG3Fj2G7tWfT7y5utKpzy4Lzsz65vo8BoEtB6zjN7ieXE8Tp2ZpWStgHbrhnR1",
  "key21": "3bD6yvNW1nk6PtjxiCfm73gWet9ATTKFsr9jRUte4Pkt7k7Pa9XXbrv5svSw1Sfo5fwETA3sPQ5oXMtZegRM4tN9",
  "key22": "2cAx8TNmBWz6FoxSCokm2NGGmV7AtPgVNwF8oykyR4CwxnyudVvRrEui3V1PRiqtWz5xbSJgsC9tnbRgvCbDnK2L",
  "key23": "MfvDe3fovHRvR5QrFqbA414CpEHYz7zPt9UiY88E645E4pfPhCHgXH3JAkZSQWQhFVELDPs3LujPMGrHxv72Ja3",
  "key24": "66tDter11yGckdNhZzmURzD32sPyptwJC5eG2jUCZT4uos5PjjpzH2AbPDTSaDdE3K2FDbPzAMGeKgM2jJhhawVE",
  "key25": "rVLvmaVradYSPZ6JnMzawJWdKkLDT8kW2dkBHpJ1c9oqJwViehxSwe3xK5VkyW9nA2pFzYFZ5boQ415yyc6dWGz",
  "key26": "4Ya9vJFTnkWzy19vQ1a8GsRpFRNiAPu8ocQF8AxyRgoAszaeG2UJLXnfyYCXHuixKacmLrozhQSLLLxWyWMc1fvd",
  "key27": "2HFbuK4iLVmN7ciEDZK1zwuk3f8pQMeV7gxHUEAYEZqTEw56Q3Qtwb821H7AhcYUFTdQpNK6J36TwtKQvBRn4fWJ",
  "key28": "zNtit4jX3b6M7NFzVPveaZ2RmBtLvDFiv1DDmeCLKra8uRFNULso5DBkkLacL2UzKGEs6qSE23bxKJeHt6vj3C3",
  "key29": "5fwywb51QToKViCkBpcg22FH8ms1RS1jDn4DrgJNzi9Cqtaz6LCTyVU6kJd6wQXvm4UFPfBaRCtgnC5j8yedf7ow",
  "key30": "2nZ6P76V7G1ckX5Dxbe3g5jMaVYeShAgQeSBcShWhK7unmh4egTJiQtGvPNciNS6vmEMqFvCQcoMXp14YVjEYNFd",
  "key31": "5LtTpobLMkKjM1dRs1vSWuDspSt3q7bcUub1Ho1igxQ9AyxnvLFAYvvLLUmJauHdkWukVNheJnurxRooyiyhwPyt",
  "key32": "HYTpyyfqmnqGWB5jVoKPSVMFNjbwME3iw3NmZp1PNmhu6REaqC4pm8d6STrkgNv3oQQDHc4QYHLb8miYuYkJcjv",
  "key33": "5pixryPk8QTTZhqj95MjmrTu9kZ2m5J1MhYjrU2SV86B6Np2L3nyRjBGZfLwhkUGXME5fw3TFqj1n2MjXgtcCkV",
  "key34": "21KSsyXWiWdgW9qzD1jPEFk8kUcdduDiToCt4XQt7dxPKJ1iEWoHZjhy3YxDaJEATedQgUzedmFH45uZcXJimJNm",
  "key35": "4D6dw3xYhfkKyLhEGfZ9yMPujny4EFieFQNocJRT7mv7ErXQK5XfVXjCEg4VdghWMHdA3gfJfPWUKkGcxURTYXGa",
  "key36": "3T3v4EqmrxiHwuBG11PMTUyfiHTTU4w3ZbDy7EGTUUJDXDRGcNR2oybesfhFeRDhXGqtkXz8uMXTgzXnxDSd3iJF",
  "key37": "5D5JNWPzPHjpxMX52mHrEMeo7EBxE4NH1FzoUqv4JGrkCZzVArgTnLBy1FVaEHNtMCL3zPhRk6GgLqBr9iBJA7wv",
  "key38": "2X5Qoq3o75jTGds7xvByKcakSrticMeomoDG1gBt61YkSmXRA1DbxbnE1d32UjcXaRzm9ejNG7RmfNSHX5aoD3Wz",
  "key39": "4iroH1WLoNoPdNgyUx6GMRpVCqLtjuLSommHM79pjmSeUzEBs871VWHM3hD4ruuZP4q1iqQoCnfRFPckSFTqkFxA",
  "key40": "3WLK2SyK8LFRigPj4Mr94Fw4QdCykrGBA4Y6aW75woALsjtYDiFH7A3L7V8u9NjAkX6vaH1rnhWHFWbHhjM29Me5"
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
