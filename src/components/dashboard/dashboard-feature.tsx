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
    "CwQrhidWuiUPcWLZ22fSwkFrRfWuobSm1CkmLXjFRTXS1Y2EHRDMovN9Bsq4fYDN3dkg2oPott7RQtJyjv1DHCt"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "yVuJpZT4AVWNRxHErxTYUaL4cKwRxo4ZokAGFdXeKffuR81cGSwbEsjFULsrUiF3QijeL4AynYmoXWyD3cEBbLC",
  "decoyKey1": "2bv44YTeBgCmYoq9nY7W85UdGwRZjWyNKBPS6Bk77dcUQg8Y6187iywda13JqtsPLHC9EqBakonGLiZeJcqHin74",
  "decoyKey2": "4NQFr3Wi2iThwmHHRPUdmYYMpFSCdZctnRyMVmPodgAD4MqjnQcF6GKdT46T9VC8goR9xb26SJ1AwLzGpFAGrMTb",
  "decoyKey3": "67SQxuTvM2sPJJCaReRoBxLD3iTXyaCJfe8Pr8w3QJQNHRruifL5P5ispTDeuDZhW2nQgPV5aTLntF9pwRHPubgA",
  "decoyKey4": "3sFrVZ51JQguVXrwX3jUQi9qXBftYgyvmn6yZNFTFuHrCsa6zzF6VycizMDCx8jjDqvJoirQQzufeMfaDbBAekPR",
  "decoyKey5": "An6VqFTcF83iSJHqMfDXvocSomCaZE251gx29yEC9LkMEk5J7YuVPCYf4wpPvGv5RXjxEcJpe8atqrSBnioS5Jr",
  "decoyKey6": "5Z54s3Vv5XQ7MVedaqsfJRCqo5UfLmzVm7T6ddzmX9az7Dj2t1bpHK5HkAnBkwkoEyH4d9PmD3AA1hM6ZAH83cAe",
  "decoyKey7": "xtFHz645MCGbRREiajYH5WtoRxcJhet4otPWMnSBFdNx3gGr9mgJpLppwZvYKioz6munL8ozzxDoZ7QTYYGhQrK",
  "decoyKey8": "2eV5eFXgRXW3qAgL26vakH8HHRQXL9FXoAHEm2Z2JXjDAKqM7HxFRxzTnh5iE9yB52f1uhpv4CnLxgZaC6M8WBLy",
  "decoyKey9": "3uyLbZakFLBmt8eBkPwWJUjwGL1Pey3Xg8Jfbt7uZfgfkoHQNnmnheNna5yfK77cmNo4v29i4ZctMJygMWjqqYB6",
  "decoyKey10": "x8A88mnaSfBXDfAC5ykPWdtH42KUPvgDRfe6xVcVQTekEFzB6shjWjCJSULDGPAuckLCWgD4oB3n8JuNQMmVkw6",
  "decoyKey11": "2JCZLtsRN8YWAPiqWe19KxFqMfrjPEwGJvNYhsUQw66LgDrnKb1HDBhVeTwxQhizupMBx96EBo2zkEhp7zqqCUK5",
  "decoyKey12": "9U7o534yeaY5rbSigPtzB81v2NpqVfoapFrB5TxgSXtHxLCDHFVAJ9Vc5B9oFoziUNz5XTnCsDKUWsfUqtrXRM3",
  "decoyKey13": "18rPQLoumGqLB1C53xoLFdmPpixFDP5chLWnyXkyvekjWhadPXa2aYCTJw1QqVXwvvvi4PccGqB7mSiFabQy9ts",
  "decoyKey14": "5QvgAVCmFvsXYje4sLvEMhwRXENFwR2hsAGUFnKupHhPh9NCXFUfR9DKBq3jyAov8AqM8A52u8bkQ29223BKG4Vw",
  "decoyKey15": "RziD8zdasSCsZ3Qjkwx5Dy9AibJTmX3fes5rVFNBxULTaoQ1SYY36sNbFX5QmiavrdjPqfH4bUdaahb76ZiPEaZ",
  "decoyKey16": "32iB83t1mFn4WpwdXQ3Dszr3kPpTzQRcetH2tLxnhx54k9zueuWCgFgQF46XVJRjiTBVQRoeV7wZtCWna3fdNHKa",
  "decoyKey17": "4HkqZVib3G3nnVC8AiCofJjnnwEkX5ab2X1R11YsiNdSqHKDRJDGhZWRcKbhoTTj9TkPZAy5YuFcHKRQZCzX1bqD",
  "decoyKey18": "5oZb5hramNdLLAimx3tcJ7VJ5yL4UyK4K5rAZyTZwPuYj1NpJvtuZPUH9LReFtrRMQZXp9GRZpwyMaC5crrvur1",
  "decoyKey19": "SFLprRBrCwXF7NYoN4aUsVsufAC9htcMAuTuWaydJCu8qPAYeHqTPyxCqhVMg8BYJEvRmjnEQNXguRA6ccMGj1i",
  "decoyKey20": "nmMgMLuk4C2Kbf8z25yGSDVj4ZqBLFSYYZSi5MLziA9ZTZzG8cL2QRw4A1wHeQorVLSiQFmqydav625KRXppgC2",
  "decoyKey21": "54vY6czqcUi7FdeUdPCa5fmFXxbtMFakf9wSqXj1VFJnj3u7B3QPqER9Uz4qRZHtYXmc7isZFXam7YbQ8gyhSHym",
  "decoyKey22": "5cjATQMcAmZbEhrHwks8qZE2AGq24gEqzJX8d8RqFQbrUrhqCVJHurVwN7Xv5epsVxHKo4qLtFfu9foX9qB2R3Kr",
  "decoyKey23": "gWGsbN4d5p4f7rrY9ZSP64ynkgzFiUowwKUeNzH6deqnFwyAvtDbgacHP6sVYhTpKZyVTEya9kCdBqPXZaWu8WQ",
  "decoyKey24": "2h8UaLfGyisjrnHBEkB3nnQ2qBgoXQRbNfjeXvs5uPtmRJP6Uxy91ewc2upFVvu67GoY1nJVvVE9kjkVFJ12AdFh",
  "decoyKey25": "3FKmeS1gfuMX3Bjvx2cTE62Q1XLzbEbXAATep3AkgQneZizPravdgCCGBAbAWBwcHC2oRHnmGfUaJcUX2kqYh9X4",
  "decoyKey26": "D7FoYCCjDW44suDhQ5irGCEW4ZDDPNzY6RxaNKbiNME9UQ8zLo4ZZTfUkiw4W34BuYU1Vyt29VVxUR65giaJVh4",
  "decoyKey27": "2VvjDN82KePzqkwCWSuphk754debU12TwKZU2egGkwavPmQz92KgQ2dYpW2hm9m8MKbmu4ipFjsUV5uBDcNGX3me",
  "decoyKey28": "22pUG4CSnu9To2fNgHzo5L4J6oFtKXKGnZLnbuigbUP2T6w2nyqZk4CvYqarSbapCTRBCj3ud2WBTps9J1f9TV8w",
  "decoyKey29": "wuHEst6uYYeVkR4uMsXMMyuxu81jcRmzA7uL1Aa2cduVmtDv87JaYnTHDhU9fbNZxmMTHFhytvLkXMVws5ZfvAD",
  "decoyKey30": "32ZAo91YgRquiChbB6rHEWDJsaj53xjHUn3bsp7kR33AtiD1Tdw4MhSR4pts8Myjo9mW5GU24UAK8ZvjBENMZECP",
  "decoyKey31": "4ZxE4BBjJvppyNzcUSDe7763B9qbBFHqBRtdmLuMi9YDSHeHAwCPTGvn4hek5TexqqjJVJ9eJpEucirYuQh2KnW4",
  "decoyKey32": "21Gn5EjjgrtqZauXwUYxdHAZtkdLobUDTV9Go5kAkARri1Jw7pNhPeMDzFxyDa3qf57zTLNNfH7vkN2RJYDUbKSu",
  "decoyKey33": "3jyYfJk2NrTQwGnJ189AkfnNLDrvYQrhm2c3Eu8ikfVCHnGpkTuF5quUgja2wgcznppLzbjpvV1XHDyoAnUz2wDF",
  "decoyKey34": "5t2GzAeNq4Qjo1SDTbHRRtsPJjtugMLXXsj9KMhXmTMRi8ApgAc77yZ6tGBmFSMsAapd6NAxRZjNZzcYcMaDeqFU",
  "decoyKey35": "2opzVeqQvcFLGHuNhoSFF2KK5T9c7LJYM8g9ELXVZ9fQsH5WMgQQEeReQ7YikJjyBMYt4rVX2CGRtTnP94Ua5DFe",
  "decoyKey36": "5vQ1QfCRh6NskAxhvHFaQbN8xQrGZfM2JBFs7TixwmokDJgZ4Kh9Aws1AJhevsukL9J5WsWGH7UwxoernonLqrNt",
  "decoyKey37": "2ZMfy1MdfnKbap8RiA2nd5gyYuJXbpHKP17tAqGSUXgd2oa1fExT9c1gjjgAqhjsc1uXmZq5ibLoC8F4NE2Kq8rX",
  "decoyKey38": "2Gby6DvFhRADfv5ZLzkYKEF18g7JPkBUifoBrEK9yq29my8EAK6RgiGNeQAMwaQ4MRjm9mnbhPcatwi6Ef1ttZ2H",
  "decoyKey39": "4hCrgEXMHy2hMhxtAqdiRcPVYmdWystiKYUjnkmfqgu9iErrv9D94zwiikGNdJ7E6mJ7q3BFVQkgKkUMPioJDHer",
  "decoyKey40": "33JJ4ai1hmahuJsNZZNnoUhgZ8bDCAab1nWNNdFM3kQ7r4yJo7RhrXw2N8xY5MAPSK4mK53tmmLz6E42H3JkSqE1",
  "decoyKey41": "51uBwrpBCC8CewUubZVoxTmuPyzT1Bk5qioXVWatvw4pEtHNnjeB7vLfXiuud52ywGuQ8N2L9mytjeshSY2ovZCa"
};
// DECOY_KEYS_END
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