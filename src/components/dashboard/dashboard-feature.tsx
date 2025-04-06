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
    "3Pg35RRv1THuenCYSGorPGcXjeq1TaPgguLBwvnPSJnLBJWcPsNfTzC3GzwjNdJC6znhZrCm3oPQ4TSvyMEDD24v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wkxuNV2dFXtX8tLSLTehfvNiQJEvJidq6hpK3YcbbETTeoBNGhn1DYMGAUSXvasutHYhwDMR5QeBXYJQwX4JTdd",
  "key1": "3ZoZvT4GYKFW7CZEHvKXKZDHSAyDiPPuGQGNYQLXefuU5BUNzvmTmojCn9JXXgMeJuohbp179QCahWsLvv9MjhtS",
  "key2": "39Xo5iBnik472qLkZPVw4BbT8KjSDJowori9xf6cCZ7f6Gv2qfN9spTLFwRtzbExX1iEoHtkrBshdazXfFGqXQNm",
  "key3": "3adHQK9bixLwuuP5Jkp3Z14QCdMcGL4aFBNZ3xx3YN3vCietEZPU2CDzWWfE3os2tj8DiYkEHvYsbKVNVtrRRxN2",
  "key4": "2YmQ2ZAmhcpyGVbs3pxHVkFJu73Q6y29npccRMSE16eLTEeSWhqgJrVHRBLTo2kM5az4VGhr9LhXefbRSC3w8Hsw",
  "key5": "4MUBp4i7UNjCQr9Hk9im38vYVkFVyeVrDRthCdcbHzAeUeGTcfEhRgfLo94kVm9S9e2cGzuwDe25R75a62aCfJGd",
  "key6": "49aM4F2cgYfDM97jqZ7SgwvnN5kUvR3qesgz77KTyeAua7aHknt6wrisKbJhZsCEM9CL6JKLPeGGBZVrMKVbMX2p",
  "key7": "4Hb1ZJMjE3pDKhR2LMz9HA1pwiaFT5yMC7KZmhy3njmkEo1PyBUo2KUrFoivXq2U8NFfFMpe2dRX6nfSdTth2Mny",
  "key8": "5KVBAYZJEKEnGYEMTetEM9Wt3r3VRPgyaZaWCbPvuT2SFYtpXFHDPAJDn9DGXSvxi4d7dyzqUi2aUgkyFkLsrUrN",
  "key9": "3geju5E1UKfS29y9LxWvk82woJKULqWoDviztaxFNMnn2vqtwsPWoQohw1G45a2nGVV97JzY2wrYicWN2RWFCNxB",
  "key10": "45gyy4Xiw89eyXYyevgkdVyekmUGus2Nnq3vfC8L7E7ZPb6k6SAMeKwcMt29ksRrNw7Xv5dgdveHkxW9qVoW4dHs",
  "key11": "XqEFXhkQsz2Qj8Um9WUCLLLFnk8hNEfwMqsga5zSFqzRNhnRY5oHzw6ZHWjAMpqQxNVTXekP8d3Ms7d1pTCEcAM",
  "key12": "3Y5H8EDZsjCd6KDtfZzyYLkyiYDRHpVUt5Sa13MFxUNgWvq6JSkoGfqczp4Vx9EJwBdU5BdjVJVASjwb53wvJPo8",
  "key13": "5Jhw1EYXWifUCHm288axUaSjbEgBFQiCMk1ZtkUf5dumezF88dPD6FzKircsyvfT7uC24A74VKzyvuEMz9gbezYC",
  "key14": "5UVow5NyWuqiN7TcoNCWLhKfago7J4gKSQyXiJAokxQM5stEKkYVvGWHuE2JR9mYPUtsTjFJuqkyNN5Mj2uypbco",
  "key15": "3WXLZSAvUmZ5BwepMPaYMbTShVCsapTmP2mfPQ6LjDZ1nnAxuer7gcUrZnEJEr3Rrxt9JzrF4eNLQQyVECoRUP9Q",
  "key16": "2dg7fbbu9rDzBQoEtms6m9bteJcKV4KCTA2TJNMUCxZ27o5ftAfzAKf9i2vGfmtGYW69W926MWZjj3Aovx6nhdio",
  "key17": "26mVRfETbj96vZpT8WuU2mKHfHnggwZWVQ6HMFrcSsJZKUmpbbd7wcvJFmByW2GzAwnKrnKUjG5zzrmU7gGEV7E6",
  "key18": "4mi7DU5GnosWjHehtpYn9BiZW5EMKF7XngZgpYZxwGVH9WzfAStbQ8p3PkJrfdU2oKfHBvH6rrmz969DjxxFkJ3M",
  "key19": "4Sw8H1BkQC3svoFJGcPTU3Pgv3V5P24xryMnucTb5YXLQ4jSTuMUCVHLqtJjdiQeBRpFAeXfLx8kjZC1Z7Yc41Sf",
  "key20": "4dHn97yzAARsirJdVxBEstVoXaFW2APsBoewfy6j7tAck9soDpu8iLWVD2PLHVbsym5TCQwRXcZoAekHw5UP4cvP",
  "key21": "LTmq6cr1w5LHaFbhMZzdT4jrNkTeEMfLSHDa8WG4b82uvWPWqn2WaUDsmaH9mCT8k66WuLBbWMK46SEvRDTksJp",
  "key22": "3EwX4wWBm19cTd3b3M52TRzcNd3XLED5v9yT1WzXemD5ttfLKhA12drfSUTzU2p2QyZk2QyA5CzkTubGrj1kBuiP",
  "key23": "3eX4uPVdqRPVFRv4ggUNr98BjSXKAe9L99iJ85GJ6bpqnVnRLzfDXTteE3FArJVpQAnvFDxmeGVng8UNUvz9p2RR",
  "key24": "4ci3fD6oAM7nNDz9wKMqDRz6nUZwdu8VGrWWzTGLotbkKjMRxeece4rXCFE1AkoYQ7GyqGn71DAiapagJLWGZTmd",
  "key25": "4exceieWSNKsuynYrHqExkeUUt4ccevz8umUXzmXRVPJUgfNTHNTWAS1e5n2kP4FCAnMwU481QKAmkFAzPSUV6hZ",
  "key26": "4KiTziDqPUCWZzxuCMViJuNe4PWA2UpAkMZXVaX7RE4o6M7oJCi52sqN2kcypnSrUAH4EZqeJ8pdsjc1B8MPgNro",
  "key27": "3HMEtuaX7J3YSTD8egKRm7npva8qz69erhidaA7kWj5LHhLzFQKCecDTYxZypiEzyU5knMCkiYNNMJmka9zBNtyp",
  "key28": "5oGy3haE2994UwFTjdLBWXnRuSxbeH7jCHpZ3Fv85VRrkmTmSLDCSeCJt89fCV78UdrDNoxFJWXBETKhXJ3k1nYy",
  "key29": "5fm4cvLmPRdBK1sfsWoD9tfauFrYBTrcUH8mxf1ojVEUa9cEChLL5Aqg3sd3KocFwWXCRsbVsek8pnCe41sLikzJ",
  "key30": "3z4ypLaV8bmJzfeWmix3TW2k83ZHFntwsoTRbuVxGnr4QBUx1MHPEbtHaGXEeud6ewwr4XvfDqztqqJ1tVRHPRdG",
  "key31": "2gAGCA2VMCCpRezvGRMo3dkSxCxDsCMxmKtKyunzpm9f6eGtzvsRmMV1VyYdigSLCusR1yWDfCenWdvLwQNHMtvd",
  "key32": "2E7rhsFooTKdBQxzJn6KbCyWtzRJDr93GCZc6M5sKe8H6tXo6sRHyheBG5JywRS5RLkNiXv9985ZmWk3Cu9kjRvP",
  "key33": "4gfc7EEBcjVK5MQdZPnnj4cFjbRpWMeoikbR49TAbCmVgMio2yoE5mnJH1zYvCYJjgCTBPV2rhBhtzyWjDMWv3mS",
  "key34": "3s8TykfMzjGp8pLquP1zeQDQaskSLvu9Xi8392gmtRj2fPWLJJMLcEjBhBEtx5dzxUqKUn9HDqQgbNs3mcderWun"
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
