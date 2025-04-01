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
    "3tsW1pHiHtFpKyRZbXzgKikoHb9owQEaztJHJTN4Rzt5KkRUFdbX7tTsaRmQZdtEE1CfBrpeRgoHznK8Dkmf5aPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PWSxxTjfiEtfUGerT4rNpR8ZvLxMeQT5cJmTQ51eyP5yUxRHyGxfhwhPUPLzwPaKX44CmZD64WAzCPLaTKE4EV4",
  "key1": "3rT27foXEp7egMakBxystZisSAZqpd95f2KmxCZYjT5taadaha6G6uucLdX24hz1HeLKYRemH4s5kLB9PnbsWPok",
  "key2": "2X3Qpr2qgF32LMjYZ71BtAVmMLsZi1BEMoPeYaC7BkxSpZBb6DKBSrRqNP9hBa8U2RCui6sAC5YCWdDMeRCkcuH3",
  "key3": "5F3sa6LtxDCKGv9Y2Zrhie9EoMY5CML7Q8Qv7eaArcw7Xe46P2jrAuLQrecWxwwr3Bh6GzEGaQaPngKQEouKTyAQ",
  "key4": "654VoSYdmVNFoc1c9aAh3kYpad2eQwtafjyE2tnAaguJRVpv7Gpftp42YiqZCop34JSLZaUeKahmLZuascE7A5Zc",
  "key5": "4tfd5x93tmMKLGv5ENLzkjKtHGPejin7bPnLu8X2iqjCLDYE6dDxBznbWrycH9ytaBCAYhEDqe2NsS1VB71vtFud",
  "key6": "3W6wFY5HcXh1f6QDXQpKfmwWq7LgYbHKEan2LrNnhW1MR8ksoXj3J3ouCkUGA6FrJqyD7QtXnUWgNma6XfPuivpw",
  "key7": "3scVX6GBq9drcZeYvMkBsUCY3RqvoX81QdWLVZ1g4XHkX8rjL3yGVFtCM7dgSYhfFo7ZM1s5ebXk1q6wgcYmct8b",
  "key8": "P5QtnypkyEiy2a6dps2TQRxUPMG7obQp3mffbPrVrfZ5Tt2pWjMj9xSFzdvPukJkR283RDsVkdPqWD3DH8FV13M",
  "key9": "4FW7JMwgk64wEqKbQjjN4W9YuoL8k8aMcUGrhMEykrnCKtfMxCuLnEqzzeyehQouZgHh7gzAFBdHjukWHeAqAeUU",
  "key10": "5WvmAX9APePknvvegjc5LZarHaRcBXpUMK7mTBXV2DdfebDngm7E9vHdWez53NvFsmyBUiMJ11FM8jePJQGwRznv",
  "key11": "8YeGXBtMZFhLKizqkqbeYS5AjHczbdTYXhhyD4DpQyTKf4qnb1kHGKWjACyFJhp1mPLX2nt9q5J5GzuJTFS82KX",
  "key12": "nduN2TNRtC5UG3K8VeY7affMbD3aAMD1dZusaLGCXARzHmCa5PSDbvMVuVR6CE4B6ew2htE4cqbsEgqzg6dnicB",
  "key13": "2GusVsSTmAkbV3HoWht7aLEYujzQXtpynj7cwtX6F26c4mEtgPs7KGBuEtEUSxmyz2dQHatH2BQixpFyPHuCDV5p",
  "key14": "3mzMKCVm6cVSL1eMdpMG7cLLrX3KCZQftY41rT1xoS4jf2KAk93A5Pmr58xhAPqaF1HzyysQcKpbupboBJdrZP2P",
  "key15": "tr3tTuKTyeyVkZzEatDzd2mBvtjCmbe6UAYPoacHVEtqmqWt4r7YYKgrULx9myCqnfS5d6yT9rCWbkv8dY9b1c7",
  "key16": "4RSc35W215TWhMSWSBVnxnWwtVPEP7Mwszs8odffATT8nLq9o3WP8irfD3qKyvxzgokhQ1mxc7kBJHSGvdCWfvmm",
  "key17": "2FMbvwgQEmrVLvtEvQmqHRzVqJhPx4b8Xu3tFHWvRRhjspkDFHHAk9ELB2ko6k6KvZV8Aots8vJbavBkNpoLPd5a",
  "key18": "3S1xTMwgWsbcMHkFYKcniCQTvHr16VVy48VhpEcu9vntfCKnM6szikdwW3GirR8oQgH6PnEPRzPhqTs6tovQA3s1",
  "key19": "33MuZkc9ba1vUesmq5UHGrbQsqm9waryeC3VZxtgZtH5Zfi74R4FGmR3WCNrbjhUo1ZhNUSZtMvmwLTeqCiYoqj5",
  "key20": "4PD3oaGBUohM8wXnwnrTzhLq12ELzBijzMuq11gmWo6GYVbPdR76fSxTeufWGmvbhRxNBvwMfkySJ1MXzMu7cLT3",
  "key21": "32u7AaqRn83LPbyKSFTpgYSEq7euzd6HJ3M6nXU3YxANPaqLUBp3fhZrZpTuz3SafVXE46az1T7vWGn3fhd9yB2U",
  "key22": "4J7ABfFgHCZEZR9hgCsZjuxAspqWW9qh3eeFkrFcLBFWFSeVDBEgVrLJaPArvuHuFr8aFNdhPGJBpHjUfPd2tfk9",
  "key23": "5KZUV4cneJWz4NJXZyKnqbzfxtZkufrmJjtqTpTzVgEL6L2jtUQGUn9w2SSxbtY7Bvi7AGbPEoHUkHw7W56ro6Pk",
  "key24": "T74ipdoQQk3dNJBV9HhV2QSBuortcN2hFga5bPHL1Z5ZbJjSYt3n79upAFvnQxbCUAR9BsmY2LWFtPbQY7BCDfT",
  "key25": "33u5vTh9VvwoFG8FJCt6tT3aJHiLhJf9KSSf5LTjQq2Rx45WMNvP8CjTetvTgoJvexx2xJraG9GdN6gN3iEhaT1i",
  "key26": "24bwz1Gc9rNJCSgGV5E1wUnaK6uth25q7dbZqbp4kftuxBdyn8irdoCuNwHpotwpeZWTGYRrMZzBV1E2cWzL6Nxt"
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
