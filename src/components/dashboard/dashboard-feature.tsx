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
    "5mPuemjNEmetBxa7o53csQBeJadah8Tx6G21Q2DP5dbRpRzGsJbAzUkxz3oPM3n3gFeCre2fJR4HV3nuosqgyKYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZm7JT6qejEEcbEJidEAxFsHgo5aYrEXBShCTzoRD2xo3zKgStnZZRfJddDNdjHDwePcn3DxVtFEyu9ExWuyyxU",
  "key1": "3z5oDxx6F9axLJtK4BC4HkaeU76F6KF1KLi7uh4S5o7gyn7Co8dFFycWDRY4X66dVCPGNTSH1DeUaggtSbg5NWkE",
  "key2": "4ncAYTWEXK4efj9qU9NWQp5Rbytt7QC4i464aarSPweeRXLrPzLHuZUoRq5xcaXe9nWoUsPw1cnwdMUo24wtfyRM",
  "key3": "CP1KLAoZmJSHYZshHKb1ifkqTDCWdBeXWcoavojDJrwSXXGcERhuVX41THAteHUY1WybQYWtsakD4DFCm9bVjff",
  "key4": "3YT7MSLpCRBmtcTajBQ7r61RPBHrrxWRnT8Be7dRT1F8ZDrN5mjaCH2k4aVmNRDvfNKazpbFXAwdzqfckZ17J9Sr",
  "key5": "GuSYF9URBRPDdeZGEV4VWGvRUyyD69QqzoB5b16uoYbfxmKvCrSfqH8KLr1HJePAaMzG5h47jjJ2CbWaBGJdm2w",
  "key6": "48fVDGiLYcFHWw82Hw5qEXzZyKpLerKmpfw7e7cps8kGVYKZ9uaRQQ4P5HDPLwwT7ERqTfjMKFJuwtkxLEZPGMhU",
  "key7": "3jevNSPds17FZ58agVMnsK44EdcbPGDiuyp5xxvBEGnGfdj4vaNmAodDaJyCUeQFnMMdyKWr7wLyGWGaBpb5HpeY",
  "key8": "4MDTPqFmTRb7XTAEq7DDiLj7qdRqdmzmybUfyc8GjFpaHBYdPvZyFUSSgH86geiFLHdF12qu7zU4rRbYShH3o4hz",
  "key9": "4oXDKPhpvpV6HPjBZ3c1qJLYAqwHf7rMxZuQXWZBKnto6hUesT3WZykQCajNMbNuC7LKmmCWspDPK5W5UEZNBV4N",
  "key10": "2dxmNE3qPyknmWQLrSbN2EF1cNjjgsgE2MzegAXbEsBuZJaVLHioPPE7MSk7odSR4DaSnQ2Rk35fACvKgHPPjLck",
  "key11": "ZtMsDp3So3T6vzmdnQLv7oJRBE43xmmWhG2qBAUvTzebrA83r8V35At7GyCpVBsBftkY2nbfvmkd4N5Kk28yCUF",
  "key12": "56FyQPLLMrA8ynDvUjuhjfJWZTeVug2anKj3DGjB6NSwWTdvnaRg7JjA9TiyKqTGYtiutaDgbBmygnW1H23vBonA",
  "key13": "58d1e8Aq7kg8rwYAEh7oHAr68idPw2PZgyLhP5zoTh7Ai2UMZ3vpKJvGqmfETMbpnTQKGFpL4qP1NkgfBUqNW1q2",
  "key14": "4pTN29Pb4aCaWSSejfaRvwi8XT5mjBnSREvKvrbxAb1ao6rXZWbMQbc28cnKn9ay4BBsVEEtee65p7jrXm8BMAX9",
  "key15": "2Qx12hzyyR9ghZNf2rr5LshmWRAq6DWBNMhYjPVq576LkFfS3Jr2ELXAHrGDrt6tTzwK4CW76pvgdGNsng3rZ9qj",
  "key16": "3E3BPmqytqGVQHN7WqtvDq32gFqbRAaJL7f7BWg1319EngaqPJzTNcYzdMz5oNqX6PRReeQxTKSP8tAxjH85Ac65",
  "key17": "384kJQirfovqwiq9m7Hk9gjnZsMBqbBCq8FzwxQxTPuSY9vSEJfcizeWGRDeqUiRuFrVxT77nV8hNrFEDui1DxDD",
  "key18": "3zmEibFBSMsuZMmKsuQBXV8H1HzvnUcyoiQUrdhYSHUndQTTPMSkYJhxLd5RvWUDwHdSDvZYvw1Q7AzoomRAikvk",
  "key19": "4QPm3nWUz4GV6648PA3n6LVSF6thxi9bRjERXrN2x1MusprDPFFMuXqSKLzyTqNC22SrQPvYj6wPnW896cdRYiEd",
  "key20": "3Sro5ZbrXJFN2QwL3eb4RQqjWXy65wdAJGr4Ajid6CWVN9L87odRgQ4xCmRfjS629XMoBvTQV5AR3rRJwpJ3Nnyk",
  "key21": "4nNSjedvguQxU574mgHLoZCBRcAkexCjU2f2bLYUMz5jWv8BStHDRCFth461Amwj4Ug9GqrKWrMCwedKsmYF1ucE",
  "key22": "3JMhFo796ci3u746JbH9YQ1GiBZgWhiqNPTpV44mqikUjpAKa8QEUnPWH5SrvjukE8FZhcR3kpa8CmyGANUxi6PT",
  "key23": "2np5rCLR85fM7WRMM1QHRwSnYjJ4E7GMw5YphonFQxjQGdGzhDaxeiPPcfE3Prav2CMdygqRaHV6H3CTnUWVod4X",
  "key24": "59DRM7M5Q3U85jHdZq5qzT4uLEfrLanr33Fau2Uid2AEqiknhq2BYfaBs289VFiaeYkmKdx6etCyYSrCbQYAn9n9",
  "key25": "3X8ZFyNeJqypry2HAPHB62d3n99EWXpzEk4CRq8SWjqYdjYmh1JugPfDF5KYE8kvw9ztMiZ9akvzJhmrujgSzMJ",
  "key26": "2gE4nBCsgGpFMpifLDy5FjqCmvZf92PDrAEX35qXfvCgX9bk4MEvN8XpqkmygvhLMsLAncjCR48hG3WW3Re3vVuC",
  "key27": "2kUCUcghLhyLjFwJB9zJTq1xXnvHoKqFLTZpHvkWEwEUZiQqaD9tDQwdVzFNtF6UTP6a1Fotuk9uMa7JE8K9oPw2",
  "key28": "51nB61FT7xAeKSP2imTB2Z6PYSJhaJ32CyPsVjmvzJM5MmvsHvL3t7e2vFncRc37J219A6kigDdTLNTDzXyATn3h",
  "key29": "4GDcoS6DFUNSCnzaRB6TGVvt4yFv5MeD75GSjYxvuDS9XXsrrA9GH4dvaV1DoFWvgnz65yzzbtBaMnKpM8XycQVx",
  "key30": "mowACRu1PnAKP5DiyZzZeaUHD8XrhAAt2KAd9u86hPumHUgcJhFjJvBzriQwBdTBU5mQ4uCyRSHYprfq8bZHZHR",
  "key31": "oKY1526HshfSCar6yngEed8pZQaZ1buXk7MGgjKJtL7F4wU3KPCyM2F1PXy9SMTdks9m4QZoX1HBKWcP6Q323da",
  "key32": "4hiDaG14T7T4w7eD1nBmtiJ721uyqvgpNYdaL2Ljm8ndgojNNSRFZ595DzkR6FJ4xUvmj5ytaBFUDW6cfoCVZMbY",
  "key33": "2A3usAqvjavXf5GkYe7ZRH7gkoA4WmHuTj1397r84dErRdYstRspdoiA3kBLXp5x7vPyVPyoPudCN4xgFm9VLihn",
  "key34": "3c23T8cChvLno2oDrFfBKcTSHFriY4DwM5yAjwenc9Df5vaLtXLBngvBctPdMxeLuMukWzet6K8qrKcg2gbHoXb7",
  "key35": "CTptMqv57qbom6f4woY9gbhadwYLfDceRbGWk6yoqN5RPHwTTy6wAjPMRBVbmcZRzzbGYKEppqsFnHEVfVfPUQu",
  "key36": "yyPGNVjEprwpzhNFiq2PsZTKf5DpaZnE2PPyD26wUu4BFudMX9vHHk4u2BZtbSfTfH3zvHHGtjNDzB7RXdRpdWo",
  "key37": "3Vy4Em7TswXYfYUziV7fjTV3e77djW79u67D5wj3yqMAriuvXABD2eYoiGpVVdiAwzDeoK8ZHcfm6mxyjV8Z1j4f"
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
