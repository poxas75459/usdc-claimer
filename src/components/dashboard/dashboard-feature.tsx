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
    "WYtwnEXy1LdsGthAfR1rJQy6kvmKYyG2d4EarRBvwDTN1cF8J8XKgqt9SpEaRFxRLoQADsLEotGhyWTesXz7ZgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CcrYx44Lt22wWwbtnnDSvVU9CsFetkjjQ1iCa8UA1VfX6DBtU5EdMgBjZRK1YU8aqwxuPGVH6oECLF41NZiAphZ",
  "key1": "JQuSU5NofUzkEPHd7ZNjTp58BkRowwEkrugy67csRqkuyZJPbgyrxcAaBg5RGggYoRATgxSGmijVJNcmPwrKMQD",
  "key2": "9vrxHmWf8qS1S54qHeVEfcgKQk7mpduu2nJ5GMLKD3sjgFiRUL5cyg8Mu7USZ4N3FgSWqvgqGrWFpHZwt9BAYV8",
  "key3": "5AffLZkUfu1Rrb9av6d822PcsYWmYQsfmYqfUyBYSoBRmBGrP19UZSsRVf6EojacwRdY9SxZhJ19zZmoiEPGGSBg",
  "key4": "3RcW3Dmtp7pwHXMd5FHAMU31nwsXi3VzdvJ5ACK7d7YJgAbhBH55UN1tHKLvkV6Ti86vPWaqJXxQQarig4KYUvqT",
  "key5": "4y9oeY4jCLt6f1c5DibKJcPw5jVvfBoBWguYR48wJGRcn3LA3WBwTrbF1AGsRS8WDk662eu16xTTmywsEivB43hN",
  "key6": "59PTevyosrjR9v35zyaCwNNQweMg5SjUipUdeU5uYMuZiCXPwvEHB8veEjnHjUb4R5VmzEVgohBXdgC7uhx61Hi1",
  "key7": "5iwRm6K4GgH4E1ywoK99bp372QuyFnemUMYaJ95Xk1xk3vRkmzHYYAD6KwNCGYBiYoiCCd9fwd4izZ32LbckdRNs",
  "key8": "5dyeTw8Qyb4wQQwUrMz3DfpYJ3uJ5ttDD4pzRDxxZha9NxR5kPiyxSxtwgR3jdkTvA5E5XYccMmfxesWqKzH1vgQ",
  "key9": "2nkYU7VA92p6KVrpMcnDDfkQQJfmRtKFoV6LanDRZ6QnsXnkhn2mN6C3C2b3yDRmuFG2n7xZVMNx7g7B7NgUay6P",
  "key10": "528eCVcDzG7ZQRqkayDVLM6YqCVzAzfSHWxpeZ3GabfDDHm9NxTrUcE9sQgTkoefojvqJ54YvwtDHFCkpxoqKMbz",
  "key11": "3mjDutPxr5ZKtHASf56VixenGCQGYJRSzuynRznCpjHp1Doz3NHYgzEdTzrTkHzxvrP7uWScaoeYTpMKBpadrwWp",
  "key12": "5f7ya4CsjSvqXTmWWiS7MRGBNeAvp5Ssso8HAAo3SD7XRo9xPdvekxWT8crZ4Y1wLTnQr6eB6aXxijfJFcgq85JK",
  "key13": "tHVsJUS7nmiSF9hkBfWDvb1yXvbQsFZWj5Zf4BKRCuPoF42MSnDdsFdxCxWLHVQkxboZzQDLZQmkXuwKWCwKZfB",
  "key14": "3LWPnDQeyVhqQiwTionFhf3ZrdMNC2PUh6xjoLpEkR7ChysPVoE4WrHtcVqF8bgYvs3vL66nJwMZ9zLHrdRaUTqb",
  "key15": "5rhnVsUrUNf93aeckkP88TH4zxsd1vvvJprLCne1RR6UwJ6sQ1eQ5QjR9zf9mq4oRb4uXC4rwupCVqRY6b3A6Upg",
  "key16": "2pLe4bZYfmwmfbbkxoANhFQcjaKYrqEGjhjQMUWSSQH44es9xdt9DPhXDxtEX3geAXeZW6dDLjvGrb4JatiCqDYU",
  "key17": "ybMSQzmZXPTpwEMbiPMJhRuFjAefPi68UA825XLeFKZjnKyJbisEFiCzebdFNs7nBmrqcktmwMWcwoLSBcYMdy8",
  "key18": "4uTSDcpr8L3emWLUq2tjL2xxpHHKzVT8Lc25SKXxupZjDn59hnsFCTzrDLdXe3tJUou8MMtgWdLjQG5gxduREotr",
  "key19": "4BiEfHtuL8sDaTZTgthBKJgMB3tXef6LPK11tS1miFganDNHNBsYqsvWsuHJzRAdH7QF1Y4rCxDLfi4CDao7VweR",
  "key20": "3RPoxbKhvwYrjaP2hvFhtLDPSjZqLg6yWDwiYvspe2bFiYgdi4gNE6aoBVdTP5zQZS5FgsivsV9qm5exrNNS4E9Q",
  "key21": "4RLPK5FXWqUQWTErWrrEVEjTM8wPA46xV2it7HHXVW8oV7snp5iLncbkWM8n4qrLfdufcdJ4xLPDJz3cGUBWa3Ew",
  "key22": "2goKnqmodeWzpQ2tHoHHoP2hi9svm5CjytKuFh8BCjfNJrrmj3WGitkvDVC7T3twxuBY9fyGTRt8X2bFfLvshLjD",
  "key23": "3Q7pFtFU4Ugvyiu86DdHFQHL1bCpX5qBAKAyLVphJeJzDg5GRinpeaacapZGD2zW4ZwJzxuoAsbQQtBXgrJRpXZL",
  "key24": "3KUv9REEADGUMcU3b43JFPU5sS9sencp3cM6vwtb9wVRNimCByWjXVdRZVd58Pk6Wf18ywnze29WXbhyJzDEkfAG",
  "key25": "2RoKyi1TGEKKzLiU4x6nV1jBk1LMGbSQtuvkmHSb5931AsN5GQFjUQjWKwTKdRQko8dkXqJx866p9JYrRy61cAh9",
  "key26": "ed97g9CHissrUSdfM1h4ngakYJcfMuFEug7pUHBmJdDVD6NMc5uEsU9xUGULrf31pEYc5skYN6FJoX1BL8PGnrp",
  "key27": "3R2j5hYEXhrE8Bpoq75jP7awo9YGHNmZTYARjAXmpW2p1KUGk8y92reUwEZ4YHzESZdWQnMeBSQUuKB2FemPdHJ7",
  "key28": "2Xg3b5JFJcoQJsAEQjzNnWCLUkiMhCsxDAQLEALoiZtUVdXY98WTfvMbNT2kh8ComfFPFEM665NV6xErwmSupwq2",
  "key29": "5qWCUZzDYwFP6RVh2f6gjWi1JFMaMp1ALdkFszPJTi1UZECGs1b2cze6wa51NdB6EjvbYcsePEghVkH3GuLqAmvW",
  "key30": "422UkfVnxEebAByzfaPcAUx2tqz5fXcrn38kstsmdoiEjYmGAByvmc6UQPjvb4SsMQ4S4vNuBtBGeanK1mbYaP5u",
  "key31": "4tBVCFihYYLMixLnRkZduYfKpo8qTEoHWr2eZ2ZGgGNmZaazKT6UHnrVqZCMcFvy2RnPfDuTW8r9jsFwkLvfM6t9",
  "key32": "4gTqaXWhewB2aVnbdvrgQPKyVWZpR6qyGhvJ69wLfhxd4YGLMt3NtdPt3dxQ7F6KexM5ssqKosThBRqfdCCsTuf1",
  "key33": "2ib9X5VipivRZeQDLdX4SWBdpj1Y29vAmJRdTC3b98RnfqSwvumhD21gkeeouvzspsEDuuBnJeHPPfKamtythDK5",
  "key34": "2eGRbxwna33vEMCpZDGTniupLZmh8mc4Ydcs7RfEM6ZMstb19Vveq9j1pkrmMqSHcSQb27mvEyDhzPKbeUkQKR9C",
  "key35": "q6tDN2pX4ZF76YPWK7uiG8sNasGQZWNaUupnpcM4PMWh79vqu6kcoLNBBwcxwadhjmRyycDg47uLxJih3QMJ8TW",
  "key36": "2fVg4yMNkEjgWnm614yhVXzmEQhHJjV8wQw7hXdGU2kYySyMyaVfQnMAqx1yDkadfctmCgSm1UkJ64XSs5wGcB1B",
  "key37": "4kwfdvps3xo8Ew4yzAp9hLphY2xVE6saRgQmpHQHXt7DphcpJzDMEPtRw8E15uj5eSF1z169rLXqCufyUJKkwWT9",
  "key38": "3QAqf2wDYckEYYuoENPqHxiEdhj2U1Mjdhb3ddMfr7MoMCB1855Y1SLv8QqBTFnKQmHKUX2q4RYMipKmGc176Ju8",
  "key39": "c1b3kd5BN4JRT4kbg36NbNuYion9Dvob5zobYvrsHZJdc6rvHSKwpnWxvqqEUqScNFrXnDaRgiPKUqV9PZPqUmU",
  "key40": "35r8ehuerZ6iej16Xc3BtjmvMirEpVUMxV1u3xHa1TeM7ZSmeN5dUeKBBbJk7fLbz9ZM8GoQtzzUgnK4LnDnPnex"
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
