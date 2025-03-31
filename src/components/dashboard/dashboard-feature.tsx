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
    "5zk3vovQk5D4CcTvn6YZxWzxvGBdhVqhB5Z8YHjMDmF2ZWNpVdnB6UdyBgq9NT1bPPANnMXKzbsUrh6crGGbXC5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9zkTsWojsTuBvwnRBia4QgSVLUkZKZ6BBfadtWRkWKew4ovF12iuw4uzNk3eMEAuggZkZeRLuHnwCdSE9DDa7E",
  "key1": "22p4SKrnRZz77shd61jQJcnJaarEi4qxL1VCn8f9TUZMHuStKYVjQhWKDaTpM2AY6eEa1YfFDZPnjGMZfQMQRA1D",
  "key2": "46jqsWhERPCqjS2b25E9ENqrqVhdrpxD6EFj5kiDLUuHRmWYX9zkTf6ECoTiyHQUS5vT55dk4ps8ARd83Cm9WsYU",
  "key3": "kief4vmDPnJCCMW8qtD8fxGzd8xHrgk4uTe3qTHHveczN28HcPXz6SsS5xwqBCYU3X732iHBE73AfBJ786YUhhx",
  "key4": "2D3cTdjJNDAhSu7TEvDvKfGU8YxrbHCV2akpUSdWVRA12FFg4VQdt68SjdDd6s2PkJQHsYiFDvqifjinduJnEdx5",
  "key5": "4H43qnGSw379c1vmtCWHhcVzX9bhWSTcErbpgVetXCSJ6SfshZ1QvAbZsvMMCmoGnBsLLvbiLCxC1LfuWeVYiWj5",
  "key6": "3Z3XeVQ2mbHHDoUtKd18Xb4ksYcQvQhPa5aaP7XokXQTLmnf29NeXKFYRQvkCfYZtyBuMaLxCqCGqk5DKUhkHJqL",
  "key7": "3EL4M8dbA2yuMo2iVUhRmjbQEU1XeGWcHRini1JwnVKML288idwboxVcSy98dT1vt82yUgQCfhggGZJKR9dXooAx",
  "key8": "4hqU9CtEZ7Xs9MJPv6aMeBg1kGbBjTdQTkYAbja3Ma9KaQjtHxXhA1P1KDmiHgvSHcqoQsmvPrtkXfCLFv2mDUTT",
  "key9": "383y3VP5XE1PnGR6rnPgKB1GdLzYiJas78bVcDfTYH2DcWN1zn5aiz1iPENemEFyKo34iUHR9D76BDv4Evx9Fr8X",
  "key10": "Wmeqto8RqtjbxSvHcFUsgSyuqjwYMu5jxrGsskYycyZ3ityh59K2PVF2LWA2G8wCri5bjfygPCiAfYovbdFeXdo",
  "key11": "3TJmmKwZfG77iErTKzHWc7GJSrMNdYzvMBiaRkDnd3HQhmvW1QwFcJaVR6wbKpkmV6miYVGDioeXdGDAbMf9cuV5",
  "key12": "5CaAb5YPqLzzERhGyxYT8q8X9SrNsfFmPfJeGs8uDkrS1HMwDTozWNntDFG3WmZewLrHaTkmmwdjf33A1ngpYd5s",
  "key13": "66vMhkjqP6hW9cosdQftx6HFUdL6g69GK2Gdsn2kxDMTGjtNuyjsKvyFsnRcNWE483AnzhgAA3BgqAJJumvPVRFV",
  "key14": "2FAyZRXtRCHAckgmhwYkbuhCQTaUvZ4tCyvz2mnNRtBhnpiWquSo5SGY5Xyk8ykHemtpgwkhPw57eePi3jTqCAaZ",
  "key15": "2sfSEEa7ovpxnWVL6BA6JtfPFNfg71q9wQjnjbSK2trBRdkRVpfAznjuies17FHmUZ75r1p7CeeWsGotq7aFM4PS",
  "key16": "p2jcza4SdGpT3s3N7LGD5ukHDqzh1stVW8VdA72mPzcdrnjXUBDsR1SRP6da243ErkKLqUTR3dkcJeZGbzeWUv1",
  "key17": "5n3SbgpmDyRLKpuxXd9pjXtnSag3zFLLaAwxMnHJ4ES31NrS5SK49aDsAtEXFEvccHRaQJErVaHjQbpmXjMaGvbX",
  "key18": "2rnHmmmhPWuD2o723kFz2TTZ6fdKM8MacHBSxuRgY7mnRfyYaLqMmLfqeFtD4BmmKDqBM1Acz6kvRtN4kC2HZpS3",
  "key19": "KYf8K1ePaAGF2dmU5ydGyh7yvZy3k5o4BQLM4byUkmuWRZBv98Gagj8by2hB3yVxB3DC1UEW9L7jJwutEhoLYkq",
  "key20": "4PXdWmMHMFLAav7CbkYdVTrQxjmibajz28TQPwoy9DgibRA6Kaz2evFsJX4QyR2jdhidtSLGiDcCVPbdkhsFUwHk",
  "key21": "5QKbGF41te2uPhZhTBr5znHZywbnLxcKG6x1vfg5KojkGysp9AbhonYQY2nQmN352wzF8EZAujBKj3MscfNUNxq9",
  "key22": "3J8xR9LdCaLPpGsViV32qHohhtNCcwYnda3u3M2b6oU3EZztPyKhsoaXRKqmc9MjmdSGdv2EkDik16oaumPDRHPr",
  "key23": "54JxfQaRdLGPpR5XKzSA2AertGSBoxM47qmhTaec7franqEfuNwXXr4Q7G6S5RTSwqPhZD8rzxqMZqbCu1pQFez6",
  "key24": "3heP84U3EziYUgRVHwzK483VSLkvLEWMjsRYDwCJi2cpr8RPhHUPQ3FptPvjnaarmt13dNgc79NoV1xgSRLtGYNX",
  "key25": "2gK9qTvZm31ockWXzAzGZRTBXcLxLYfJBsRuumxD96MRz4PUn7F43Tpt6YX1bFAgVRtd1m18goFJgA5ATWF86P64",
  "key26": "hgpenmjpg9WoMSgXC895jFCWe9GY8YQ7cXoEUvKHgJQ5sBNUcrnSvZAraeWqfKoL36WqdERbwx7xcFe2jATiBxv",
  "key27": "4NRF44t5YNpz7CB9zKt69xpvQ3icV74Nb6WNg4SoFkaw8pPqrmfUwgnXatvC569z75iLbyRf9ng3aX7ShAx7uFhz",
  "key28": "4fv6u9uzUro5voBMgJVQjajtPAYiBstA1jjnPTfTfrWsiomnj3fJHfrW1eW4gd4XUACVJVEZxHKz1ghakbSSLa9Z",
  "key29": "5x2XbgDbS1Lj4crQFEmpuxpxEXjmBvEW3cfnyUZYxeHbiqhc8yzfZXbB4z3jEidF4KzMtoUaj1TLVBmLE4feiyXG",
  "key30": "52QTuXP7bMZrkoGQPah57Zd6Ztbi7BjN92w7ZELgyMgnBrua2NJW5AV58ccPS791qEdW1cP52SaPeAdDLmzFZChP",
  "key31": "3uAbkWKML3apK4DeVGJpMpARv7oXQkK8dP6gQFsTg6xQK79AYZYAH1CRRzPABKqDiyXN9sDqVCPSYXtcs4Ftb4ER",
  "key32": "dDpdUzKKytsNoe5RDvYY9kCUAQknnmEsCcEVELB7D1QhaJEXd4uFdjZyLoq8sz8rW79yPXNPLuRxHvCRwKtojg9",
  "key33": "9BChD1ER8ePzVp5HF6tk23WnTMKi8gbAYc2x3NaP7svJRw6mcUsqiF3LFCrq4BWAWATPfeKSpQXucQx5fAXk1K2"
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
