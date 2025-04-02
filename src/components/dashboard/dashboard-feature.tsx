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
    "3BNn7qnRyEMpt1fiSgYrzLas7ST7CcdBjPxgTNPFg4PSiooR6cFhDjmAubv7SNLsnU383Mzi4uLSvkk38bkgWpxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j26FXkPi6fF5NDmMi5KyK9VX7hcjktb9xZNcFGr9sVBZrPYJgDAPLTQYMuXDFTz3ns3j2w9opMg9rwTEdRehyBi",
  "key1": "4gUspkoSmmaKdGHHbCHxRgqXXHKTKYNfRCwUNDxD8g5LMxwMW8pYoWtFyBCCb6xoj7JCkWDn81rCffavUsvCzYYc",
  "key2": "SBsF7ohpwkFnZdfwLFya8vszCcibTXopeiRazM49epnD3QbHa8xRiX1NZKDdF5Hf2Nk8G6frSUg2ddYXrdDvgAb",
  "key3": "XgcaeB77XXuaBPDBv6xF4qTYCJkfMUoHSqq2hb9YdSjcXiAydCg6Kei8FK3CHQgmi24jbJ22orUsFUazjQcZmDs",
  "key4": "2PXHkSBu7f3BSBbKw6r9rzBDkT1w3rxNWC8TE5TgUWWqAPdm2KWRP5BKHSMZUGkczNPUnbbgeGmEv5EDW2rAMYFB",
  "key5": "3pA6Radosv8CmcRL23hJfo4LmpMkrDqoKaJCnNwyYsy4JHJLzhPMju8TySY2Z6DjFo4GUbyz4v68qsndkcS1XvFV",
  "key6": "5Rk2CUaDkhu3Kyrzje4MHiV5ds7XhP55WC98uAAe6SXyAVNeUshChoCeEhRDzRcVQfc6d5Z8Q76FoSBtpVoNP5C9",
  "key7": "o1x1x7Bn5k3GmyBeb9MCbpaCCNCd7QL8Df6KuVq7juSA6v5J9m2PiPpHk3hEhVXLu2DXgsiF87QJ13h2fGCYWyX",
  "key8": "36uHBsQsVbUNLXyVpeLM3553WDtfnZYDfCvdwPCp6ddcWAePJKK1VpjeHEtZ2sPm8D7jVLzjSvry6ojP664RZGsB",
  "key9": "26eLAy7fXToF98V6LYWGdSYEyTD9HgLDY9TBDepgwSNyqNq86Ya7SctwrXjm5z4xtQvHnFy9TCHon1R1LHrRv2q3",
  "key10": "2CBFf24cgPWiN6UWRjcXrXW8aUas5PeW8B7xnqb8b6u2uYZZYzPmDxvKB6GwBLDMbF2xPBP2pcCHSUVZVqnitG1G",
  "key11": "2DF73erYqLroNhtMrmgPBYoFLrY1mrcCsh757nNXPUQjD9Bsf1ZxWPRXFiT2Q6Dt7jCsAtfUyLVj6KdVe2msAtQE",
  "key12": "ycXhvZAJhhkdTfxEsZrgUiM14B15ddLTRTDWh8F4MmkLJiqnaDrNU5jt6YwDGgWaUH3mn22NkGU2jSBsiGY6ZBH",
  "key13": "4sApXpivHZkoPrVReQx2BiR2Rd9UGkF1wA9ioQYUfmFzSABxRsGjFSxfkTtgo9WHqYkAoBLiJNYCqJcBJ2cQcbMg",
  "key14": "3jN4hiayuxfKUoZi7KTENoJFDA3hkiMXimcGUvUSvsJSsFppHqdLZWip6EHmV5EARLLJ1SDh716YqtGoafS1frUE",
  "key15": "4nmPqW3DdwmwufnKg7wsLCqFnqwZzoFFt9L5hzQN9YnrGNRWmyJKDCoXonqCY2qBCk87LqkhdUe5Qtg6Y1JkeHPt",
  "key16": "2AicDLYyeZ76LCC5Vs1hpCWWTGUFaJRDa1ayXrvtbRJGcnbRE9ApjJ5759no3xmUmbNj4i8AeLpSdKzFghssZ7NS",
  "key17": "35HVEAUAM1yWgzHPT18bWUkziTv7aVr58P3RLj48kgwLQ5XJSvmBp2LknZKVsg73gUHR965AMBqUyois86wdjFx1",
  "key18": "3SWcJiK1eEbQ4jsSJdwKA8LJc1kHojJuwtXkbGqNYYgTZjTAFASpSFhUQ6DotoE46Ppxho5grGRQNfRCmKBKmu7i",
  "key19": "47guC3uxSpP5PauQ4Yc1Vmxq3n4L7x17Hu77vFsDgk1S4DrKYFWAKYZFAuhi6VAC4eSMfETK8DZ5jzCMy6Ykd83y",
  "key20": "392HmnimHwtnPhSywZstbeJjEEsWh6geDfCLYvzZxj6fK6iGjkd8B6gBtW73SkaNMm4CjLSUWnmqBDgAz5U6Fxnp",
  "key21": "2svv8toirMRhQCc4Yoj1AgfKYmg3FdubH34E68vqj6FmaavRpUen5s5va2RWRX8xpV9Gte6aWh4AGyoD6eyH75xu",
  "key22": "KgvFmLLweyedAP2oKzYLUNrJ5g7DmiM229vC5oyr2eJzaHAPW1poACo1xspMma1deDBtjPFszBA3rM1awESMmDL",
  "key23": "5pbjot555Dj9T8eiY14kSG8sm7DHF6nYBn2NCnrM82pfy4PEq2zCwUgNsR3HBm36hJBxQ3eWR2unKxu9VMJzQ65F",
  "key24": "3R17B9DpuAffShtns4fxv2DQb7RevNQCtGspB5qXbWBdoEFEmgvKU6KaGhsfQsMEjuRZ8XCduroUUXhk5fDdACKw",
  "key25": "5weXBj9fY5QSmqKinY1MDnZaY7LmoDMJrQq9CxBQAfcaqeHiCB2QVgwTPd4KXnbigyhZ6QUJd2KagMYEyo92dMsk",
  "key26": "2svc3u63M3v5DeKoBFBPcX14MkWHMCeC5Fi7XnmLpxKAzokcHN2QpnRKCSFX6bKk1pcLPWADZTKHZa5uxCNwqnZ7",
  "key27": "2Uu2ApAxzDzUfPSED66VyhYJ8tSYChyVRv4ReBDLoyRPzM7w4WxtoFhftMFEPKb2nCgEDGMKCaFfbfsWvYN1o3RE",
  "key28": "53LLhRjFvdCznCmszbJ8UC2P3wJAKK4u8hUUQ2WDEEQCW4VhzkBYw9Yks6iXMZUkuDWC47Cn8htMJAWFLPDKj1kz",
  "key29": "svuzjDVNFxW69seUJd77PetdpmFcTJQVLv4zMt4WoyPSGc9wku3V9vRCvowsbtoNBbF3MLJxFPJiASPQaydTECX",
  "key30": "4hheJSJbqKFW6EoQPwRUsio8M9mV7oyE4xdwQ69xMDCs9T41XNNhicXZzGscSdjAb5YSEEn4BhxunkoFda74JxTt",
  "key31": "4eQWzzvkPMBQheFjknntW3KmSoaovjBEH76rWiNAybSypXsi1aKMyRe33mNhQfz1jAD8iaTSxYMdwY4vKizPQH1P",
  "key32": "2ad93unMbkDUT98zsrHYyz58SXmNLKjYTwXz5GZE7hxx3p8ccVeKAzYuvPuSW5rPNRtXHy1LmpAuW4GJ2ZCEAZWU",
  "key33": "4bW5ZHLwPhcHxz8L31DmYithS1JuipAeUJxgN11hGCdGodEpJrBYMHAqUpZ1VRFayLjdCg2LzGovC17XKZLRKf1D",
  "key34": "3zunqxXJdHiYKaPDEBEPmtioCqN9oPTsqjN2tBnkeQAjK9A2dohKuNMyfxm4rtUsrYfsJ4N3vkm7nNkwtgszrS3G",
  "key35": "5J3VNfnrbSYodK5kfxjcKkh5codUSic7rzSBGcWw5PDmQ8x85Mp7LjwqKE71MbBy8Zoxuhi9kmL2TJQti1Fe4Ce4"
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
