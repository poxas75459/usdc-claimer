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
    "5x1mLXr1HTuoGmjy5i5fFRsAnQKjsQEtap1HgcnJ62BpnTwCYo6MH6MbCLq6pJrmbiFcf2YZfdEczBrdNwj68sVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JJjQfndUHk7MjWLMUbH1brku1nezEZ2QrQMfuRj1qQSEpYAqPcVhLmpeTgBF81u3aCCE4W7uGfPMkr99odyovz6",
  "key1": "3mgd4cVa3G8k518CirNzzXwkvgZxUL4xP2GqRAWZ5zHE16cJjVuWFLzqhSnKtGziuKmsbrK88Gv81ERwNdLSZTGK",
  "key2": "4RDgHWNEtejb3JnDPZfzUvaLoPXLewS2Z8PdipcU3MD1KLxwMfw64icWZ5CRwjDFzvGizoaZYpYbdxzXwiBLZRoe",
  "key3": "3w9Ryw2AEpE2bjbQ1Gi3RhELFTQchtknWf5n5Zt23bStmyVBWj9Sty6DQy68hk4Ekco1RKfRtWkmnLffEsvLoZV7",
  "key4": "csveNj5gH2wFK8DrEtuVhAv8mrvTfqpLyHfbF1USg9MRdwjKrePnmMjbCcyfc81xwfVpB6kmVY2TNydMraGfUMn",
  "key5": "4tN7ZgW7AZmbg5EjdpuHfsgXZ75o76Q5z4MC4egSgL8Zxaw2yJhwS17EGJsNxUBLHttbbssCcgLKgh3msykmY3UF",
  "key6": "4bdWpmMJigYny9MiyJaFLvufDSqyV3q1whH7nt5SUfWY9isVEyBDvkRbYHsaFFjc3XiSkxeDfh1U8s1XvES81eW9",
  "key7": "4Z8wbsj98kesbTtTcixEPT295sBBrgy2EZCqqEGC6ZyQpj9njYroAUifDaTDFSXzsHiraZDyaxfWiMaY6jwQSC1q",
  "key8": "3aQCEhTZguMWf1nERjmnj2rtdYwkKBTfXHmhAUazjtu3QLokd2Da4Xie5r8SnyVxFQFjpqs2rAitgLT3vVvDZnF4",
  "key9": "3tGc2x6Z1AJq19vr4wZg5BQDVr5a6nUacKeNZXEDWxRdbykeo1bxvdqYpqHyNRwmeNTooRCvP6oqcpH2yAXCz3tN",
  "key10": "xKq5tTE51JWbRoQT7JcjF19yGtGq5fks3w72bA9GL2jvX9DPqmQdTi5pvfdUsJTn3YQE5V1dJoC2kRc1BhzTZ4j",
  "key11": "2ijEccqKMFLwMvGPTxZEF12phfKiWa56vA3rvczu27PaZNdCQtUG5Q9acKWtEwgQaUhVEGR37GLHWdjvqjHC6SV8",
  "key12": "3vwxak741bMeMp7gALdvau1YkXY8kwkWXmHiUsdJinMG3qttiDeL6ngZrvSiu1UdHYKtBbfJ7zbhZoFLkNRCik7z",
  "key13": "rdWhBSS88qKy8WmgFnTLnay8NycTbHJkLr6QvrmmntWbFrpUJGjscSc7gwUi5LDzjorKjyFfFjwh93mHoC8thPV",
  "key14": "4HyzVupFsVzVhTYZsN7C8VNxog6arCt2nnypZdQV6SA2y9PDhce8xjerN7GaHkVh2Dn6rU9iwhVotxYNG95w44Vz",
  "key15": "3pSti3uptsy58j8YzZ2hsrcCSyeLQoc9AxJVZaJkexHiFaVSEtMpnPDuLJynEUDGmtnMEjhpAaJ2in3fUHgCuQ4x",
  "key16": "4kXCVaKL7kuYN2FFyE4tu6nicPCdaQd9vbWtvWgsvz5eVtq7Lq3tjPDMix7yJUx4suR82PwzHPs5Vj1gY9sytJoq",
  "key17": "4AKToVccGyP38TbYBSVNEdwePfrTHEf25XSP1rLgqAqL6crT3WxFtkLRjHbYViwqSNCmaHaMEnc9ib5ns8RnuXKC",
  "key18": "vL469yN13mDhL2AFRVMubnNyspRtw2b6JunYR9AzU6NBPTi9fbMUDUVVBcoadm72aUnGzHDxHKLFKRPMg2Yi2BY",
  "key19": "531MVTr7igY4RLZbApygXcXRvAQVcvdZzeGWkD1hWXpQe339KT6gQ2ncmrt1vZPAUvCgjEFdSPEo3qHmUgAKUJBC",
  "key20": "4fGLjaKR3KdwnQSGAoiV6DoqTYPziZN8gREaHwZ28ab8nAKDz3c64fcqyuhqzsC9GXGNtuJazwyrrXByiMU77aGL",
  "key21": "2a1uajvQPGQihdjzfjtLRukM8xFo4Mi8rcwBqCCfMD6ibW86nk7hMfozYm34YFcT1Y8tt5AGTGJJqUz5Y487r55f",
  "key22": "4kq5RUx4MPQf8Tj498EFh15mrsiS3NPwtPrxQqoSvzXWDS9TXcU94p3mPV4GuPD1gMCodqP1KuqWpm7tLnz9S4ze",
  "key23": "29A4tYyyPm8Bz1sZUJESNbKgAYg7fPnmMPcTCk1Co9bZtCR7veYqWaijcNXyeFedHHkn37iUxQq1S4GzEtK9mieo",
  "key24": "5hNA3F9e6e4ciyBajvhwZCG85EwAgifSgdEt4yKvrEF3XAEc2aoizd6ufRVRq4Ds7dPgsFf5HLTDG8w8iBsKtBgt",
  "key25": "4ER31XnQkE1Jy4F4BJk9gjuFVkf1Ugkd5Y1dXHbTv9TiYNJWiFQsroyqsY1qXfsxM5WCByTZ2Gnps1rhi4goFr47",
  "key26": "58GoUujUoSEKD2KYYQmJqamL1KQuq4pSWrhx4khyHY3Wkb7HeAXfyKHtn5oaqNMoNrTdgZBDAXpBdUzuNeHkvvzs",
  "key27": "5YzCRPbztnjE1gWbsiK3wnb42ehVUWAriAp7wpy6ipx3jS2t8Uo4s6RLsW33CnQdRHpSuSMbaKsux9P7rJ74TA85",
  "key28": "2bp79CXdt8jTpLuQPQk6vFujc8u2YoqdCXTDrpaW1dYy1KGfEBb7vcdxUUf6VM3EpWFKYHWxyQ59Zt4k9R9NTJkP",
  "key29": "23f1kNeHmv63zFbFPGLvEoYmi6zzuHNT9U2KtGyyw4hqnhq1pkKS3AJmtCaJWr4y1A7NBzBuXcGdFDgRsrjJzyuy",
  "key30": "4XM7eDEaWzYSFRTPw5tVKpu6Jfd7BxJXE7mfgnuZJJZUzbBUbgrBVApkbjxbwG1rQFcpjtPwhnBQTVz7dR6s2huq",
  "key31": "2dS8Cz13jyD6Ris2gmc4H7oPxEtWFbHuvVgnsWwyUDhqqdGe18YX755KeJtjFKk1eYUf34ZP1yzcmuTXu3SVZS7E",
  "key32": "59E5hx4z9rFbbcL94pbZSVHH1mhxvy8LBEwG5Sr68s9rHG1WMpj4j1Z5HVamJEtrN9Ft55krd3vHW3XHDB21XtHn",
  "key33": "2YtQUDkE9dJQJEcfG1wHL3dNfPi6iqSV9YbNHsjpo6knPJEcZadw8xuZXzLdyV8bCowsGwx8yUirB2AH6iTirJP2",
  "key34": "21EpV2TDDnhaGznpChA7BUpNxSDps4uP7rNFmW3ZwHzMiHxQpQrkGZruWdWJyVCNKucb5BnPw5cPKBNYnyR3opMT",
  "key35": "2hEtsvenEUwFgVWd5ej7U38e5WseFeaWaFxKCx5bAzd3BBnjKFHEsKDhEm3oraxtqcyEHVgjEHDVPqHiMRAZ7rr7",
  "key36": "ADpUwKTAF48PKNz3DiTRu5hVWdnhvn87eCbk5xCH7S13MtVbqw9rgHKTqQuPHB6UKXUYCD38qF2hjtpS4bYPSyw",
  "key37": "3UomgKn5eKpJ3eVLL27UhXDdiuT9ZZDfqBWfhJ6aUM6oLZyJdj9YhhdUJVk8jdNT7M97X7G1ZKRGbez4dsDkWSGA",
  "key38": "5EXBYWyZYxrLakL8HyUTo9NqSqhhKCcg2BLHisJq8PtjxRz2PSnQdJFSP1dM9ncUXb9No62JmKS5jWu4R7sSzh7L",
  "key39": "2dU9MXe2asa5VKPvUcKjCx9P8P7UEggbwQegHdKLKdsnmPd8RUHCT1h1GwyyKGdesyNVwwpG8fJNbGGf9hMgE14U"
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
