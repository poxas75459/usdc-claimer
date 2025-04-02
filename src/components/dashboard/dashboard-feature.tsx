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
    "5MFbqurTUNU6n7ZsNzBnFgyUcVcSp8Wdu1HLf2hfD6wG9QRLxoawRj38e5ajox142bre96P57DfQwjhGoZyNqjFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qkWwCDSkhgWjy8n8g6n7jEF8g5CHXT2AzPoCGYnGU1wooGWPuteXhMF1tCVpKE2ExtTiN9K3UUr4ajwc9VYcoQD",
  "key1": "3gCsx1jf8e77W7k7YbD1Ud19EFUk6wtfnRFpKPSacpSvFXbgN3G7zULJMnajXsn5Bw2jVoEGpKzU71cX5MtKQVuY",
  "key2": "2TQUmRxF1T25HfHDqmcXXxrzmUJhPcC2sX4QV87qM44YPhNPMjSdzzSNGNoYDYQFumjBrLiC6FK4P1awMR2ejoGu",
  "key3": "x5pPnnSfssZAUwtgvUJ8ojLgQ16HiCAfxHi9X1r7kvT59Em8epY1yppLEkNRsLaBJAUVMCBpKqAox5JC5CWgkfL",
  "key4": "5J6pKBpSX5RG9F7MGcAjUPJHX1t4VbRs1u2rZdGhmi2YuWdw3NSqwEeNRLNJn3gVhL8ihiRLpPsYxKT4Y8s3qdMj",
  "key5": "4D91gLmPCCzTQM8wwH7FjFSc5e6RPCpx3qk3pRXtySGZwicWikyHRnAdP4po9vUs9q4xjmYYLeVSMxjmkwbwhfvv",
  "key6": "63oT6H6qsT3uswPrxyuC5uBRo2mzxgXBkTB3fRHuxwkTCudHvStLzLjZkBHaMRJ8opTNGwE9apY3tGAABoRr6HGB",
  "key7": "3GEmbhwzS53XHgWu9vP4bfPreDHzqy1tnfpbt3pf4Xa1bGBg9TBmQK4iuyd5WD3VLDUpznJ1kTWdPB81efPzFns2",
  "key8": "2Anx3q4SgzetTaRygtoaC3iJrgcdSqCPHasE47SEAmyLqDsNZ7AmmRAMko21nSbiaoiTVcuPZEfbLjmiuN72pKy4",
  "key9": "3tga129xgM5Aj6LWiCdDZKfuqyxZ8R1cx5Vi4nj6LbDGLJ4mFhRkM8SLdQbb1DfFJG4nyXNuCLRXF9mMnVqtFVVh",
  "key10": "2CyC6vhXG54eGqnuWdwriHWzbDwWCcQwTV3ERXfMKiQbrVE6nVtkkCRLy4gPjNtpJusKQF4LFheLiWxZYEsnSFw5",
  "key11": "5UdYVEY2iQWWAeEvxpjX3FLbD7RFFq2WNC13yVVFDqvYmVGxrFrC2s3VX7kRLhtPghf8WYfXxqFtGfiL72N5n5b3",
  "key12": "2MfCbFXngEhEN13Edz6txJ6AgKE2kPyTtuJV8g74u6JdCTfunuNxYL6ZeA45FXTbvzbWg2MLVzEDFCZG8bBm1nB8",
  "key13": "22YYHEYayHnxBeBcdtJwSTY1mwzu3F2Ccoq1HzXFzHZP1wScaiFBzbuvs2z5kSqeJJjeYY9wPTqxnMeVx4VM7mFu",
  "key14": "5YMqbgy8NUzYs1Je7z6WX4eeaxgYzSLLJkNn3Zz943pVahD7Z2xaPrbcfBHS7zT9hG3ayA8sbDRAv2FPfuZ3Wn37",
  "key15": "yHnsh7Zpp8AmtqEDYhH76UQWGxy88XZWdmRcoLbYJ4iTZ1ga3rCRzbp7BLGGMRHVdDonEGX5XP3WrpXr9oohKj5",
  "key16": "5atFqVTRcZwxUKr1y6VdwDmhuQiFaQ7QRnVdst4bKdbuG4DePpgvPdFrvuuJottLGAxtswLYrtnVWgZ9ed67iXTK",
  "key17": "59mfbazxd6Lf1rds8pbLo8kY8uELi2BBef1VwmBESjSzQtGmFdK3BRbbRQC6dXw7rfGcMsbKbNSgFSn4NoQNeuP6",
  "key18": "5t9xRskKDCZHds332NpXCqihiVdTdwGDX4BgfCCbymUbhHGugPVdNm4Xm84j1WTRpveRxzY2xGu5jApLkHY92xaw",
  "key19": "4shWTTR8auSK5hqao2DXX4KDXMbQ4hyTQshARFvuBmZWAkV36s9FnMf22QmJPRWGYPGcY3kxqBRxgDZLDR5vbPp",
  "key20": "3BXgxrAvnxUnkiPjmrY9qe3mm6nQEsd8rANSoAQNqxBnHTFMRFuLP1Pc7mB1VZHKfXSCxm5PSY3sKhXSpUiUsVPo",
  "key21": "5MLN823MMP7qTwgLRtUA4Q41CERsbWoSiTunewa18JL2jh26YGojeLh1XK71edLbQH9AmoZSrmf1ccYsi1GsGPE1",
  "key22": "engd6njYubeB41i1KE9jkirPpU3bSvcyTAp37bMmoydDDJqaBnmYPuonY8JBW75wk3UKkvnEKEKLtRkRdKxmbAG",
  "key23": "EVGRpJk9faSmbfv3NPShk1hqE1vk1fPm2jdXwuo84oWqtsqE62NF28ybKsE9Wi9xBwRvEZgrzEMPYuPmpKXzhsk",
  "key24": "2cGuYXnyPe1LFzxUU3qXV8TZYaNHW1A5dkmPpctKciJFxvXWZpXquRnWPHcKJzYXb4HokueEt7WwgYEbNphFyH2K"
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
