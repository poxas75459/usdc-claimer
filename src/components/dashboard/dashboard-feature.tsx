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
    "2khuca5Sq3ijarvpKeP2UUWVcLJWictXAWXtZ1rFbhWC32vW1rYoBLLo95mMV3m7TnV71yTGGKRaXjt9BMQLcxar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uoY1DbiUjBUQ4dpbv2L4Y6wWqYxSNjP1Ewm8CN5AAFywL4jtuJWUEh276QJp1WyYnYEJJXRQ9w2SJaQrsp7pizk",
  "key1": "4fewmA6oCoz3gF7aVshiU1hX5D6Ahp2uS9V7zT244CqogmUQXvva7Tx65XyVdiBgQGc1FEFuB7qp4yYxms4Vv7XW",
  "key2": "5xWghMDZmeTsUvwxdajezJifsBGaGAPkkWsuASG4yYHNcAfhmsWrEcjxjmJPvL5zJFBSNotN7yDf1LLE8K9VRRbG",
  "key3": "42JTuVNuVVfEREuoqoV1LbWBCEUmrzA8hX3Sf29GqmjLeKAwSgi4Svd1YY7pTHQvAPnfers89vYN3s9Dy4BoH3Zg",
  "key4": "4ENJv8rrriCwxztM4SDcWy18aneu3EZ4TyJjK2yphYFq3W28J3rPknrqAXXSkbKAcHtq6Q9p4daPcArKtAifTeAU",
  "key5": "NXnGGoWwey22X6W2CfLWPqAeBjML1B78JxN37S5HeYVwpuTwPEoitHkcSubq9CSo9Hk193uLHttt26BiHYcof96",
  "key6": "yGWDZ3MnW3A8963mH7Z1eg6wd3Mcog2sMvhPVxck6RTYcUzgXJyV2UTLgX3mEV2a7Mz8w4edqsph1reGRivJ8GD",
  "key7": "5T16o5RsqsebLkbg5HogFkktXb39jq4NKqXEqu6SMtA6z62PXUc4oqRhnJt9Fd9KAh1HT719j7AGQEma7FnTtSVm",
  "key8": "3fkoGDpmxSrfEDgkbXS3M2mL2zUSnFXFo3VW6ndzMwq8Y7btgsniyd4tkfGiTfc4fcbpWBMESAafNH41EbU1xZxG",
  "key9": "gdqxGYM7MAVmmJccU1x4yLcvWVDeDntsfkHtYgSac7Jq4FTgvHAmD1L9tPHX5LfkRWQvyRKymiAdhQogW1DR1KG",
  "key10": "2XB2kLuxX43UgU49Gco6xgg6CYEmM8i98xD63ordg45tiwHjwdYPs82jmPgDovy9niDWrfByaFjdnvSupk3oWzXN",
  "key11": "56LVmpvTj2K5bT4mNxYrKsmTZNg3j9AcqASrjB8TWuSDtXAdaKcLhXtHUZEt3hnnf62XypSbxcMHJDRpBBzhFJEH",
  "key12": "4dHHReVK64WjWSybfHmy4L5s67d37L6SuCdzr7PT7N7E19ZgZsAMt9NEujFUx56zmWwhVcKmavD2Ai5DUthDL818",
  "key13": "5cQxt7WBEgrt8kwsAJdyaKLEjxeEF1VTh7EM5DYdZCNSZhf9gbB2QknmdZkCtqGMX732hmoTcwtB1gfFs4EufeuG",
  "key14": "2gp9uyxu35169DgGUwsVCrThYvNAx58GBUaB7qX4tAB4TCwD7SQNR3Y1vqasDqP2jXa4fuqYH38bRd7H3xbsRWxW",
  "key15": "27oU8YSdtzB77e6JKgUVHW1xCUNVjS5BrcwkQfgJBb7udp1JNt9Hv1wbT6z19UwvUyJS1uAAPtGmuTC2PzUyu1Jm",
  "key16": "Fftk8C7dAobpx6dWtQKKitFgw87z6vQw94CcmxnmiwocHfK2PzhWQJTMpxnWQV8Q7hoxF8wBmGSKzYaBqcCEwDM",
  "key17": "5SF3tNec1sf4fzti4Bo2cPg7pHC1iSo4u1jMx4iDQDZ9rzMXMY5Zt3VuMLv3KLysM4VZdX5hYVwyrrA1w7BxCie",
  "key18": "2Zjuu5FgpPBz8FrdevF1QZkgTTK4grWkYYiVKuRcVFbsNnuaCCgBPTz7ED4f2GmRmYggAxwfthErmoPunvYgqw5o",
  "key19": "2SAuwvpWXqpNHMXHYHCTLGVUogfPb9U7wBcNatDHa31L3fwacfyBYLA3r14N8Faxt47qdUdAXRNySLS1SW2LatSt",
  "key20": "fKSoTrL67Ao6Kk633i2GFiHf9szJRhfBLmvx7d41WQH8jATuCo1BGyd7UH2af7W2sLnbxZtGG37wCGcSwjQ865v",
  "key21": "nt4891yKm1HBzsx6Fkb9T1u4PhJDzer27Qt149nhCgxstaGLcZtgXnkVyS4QwcBGwWbzxMDD8Ets3W9KXW6RP2g",
  "key22": "3gQN1S1GSEvLVerwQTWvWB4Tgn1cazyTRG3qzetH1Qvnm18gCu5d16umPfCRrx63UCTXUqvaWG1FkKUW7woBoTtC",
  "key23": "5AD2MQArBMF6XgxVP7SVWV6rFuskKLswcT5p4zumh12k81GcjcY4tZbvrDxnGW85cbbV1VGtiNxuttWXAwxjqKWN",
  "key24": "ACMYNTgYBU3xYHDi9RuSV5G76HUyFagKJVGxajowtFDW1SqZxGUBpf5JjPodUgy4CEGi6cpv9cTGxDqdsgGe3ZD",
  "key25": "H5UHvrr943FWHqobUXZ2X88vBUGaYabwEroZinHncJqzoyG9tM6frdKGYMGLdqMJY2CoUqKU839PQQ1ZaaMJd9a",
  "key26": "4U53kesC8ZMRpWcHCN3RC1AuBXnHMjJVMkZHCqkowRjB9NWxJ4aL3WXMCemez35VigdBcAt9TkzEZzqSL7AVWQkp",
  "key27": "WZrStHYeL7jW5wcUETk2tH8VuhL4psAQN4iwTdGsJw9iPJDCb92HF4xYT9WVwqW49FBbWkZkLFXTHoAEu2hhUcA",
  "key28": "3eojpfQhzwcN1Ps92495nEH7CDJKbmtPqPct1TkxsjdwFMjzTbY4iduGTYTn1kdof3duDtZ7Hid16b65sF3Ds3iv",
  "key29": "3xsh3phLh7AA8gTVebbZc94ndMAaRJtQSfEFT1AxTsfHz7YxaRkfW5vp3SzxXbC2sJSh4cwhSz5RkvJa37YignU9",
  "key30": "5GCKbi392Hhofc1AQ6EQcJS8PsQkknnnT4f6xWy2D1zEhzngvZaAMC3B9dmTLRJ4PAjVE7B1Aa1T1AoRdLHdXYU7",
  "key31": "3UUJNv8VcZvRCrfK8hbxqxVBeeuR9YAU8iyaK5UJDXLaLt7FkXbBzs4194Bx3gLabouKE9PCS3gXvKqcsZDWnyRi",
  "key32": "2tnapZuHQR12zR9K5txcETp97tLvQm8PQXkykf1hFFNFBJypH3YAiC1KwvB8t7RbMWAE2Niz6RhvfamWUCeMVLiT",
  "key33": "4Bpxaw3jAEMgM18qA8ZfABXLpkdS2fent1y9Yu8HmyrBxNXE5XBsghCi6F3iddCiaRfPVUTzKmHBuZ9WySCbWU6u",
  "key34": "4oRhCNBgFda3ahg7fcuo3az736N9zLSTK5eHozZARK2Gv87dW3nLiuUTuJdAC94iBCru3fGbmVoMoeFdQYPjKQYj",
  "key35": "5w7Gia7tpBSHoxvb4MeRUFkak9KnkQzeKDEZZ1XsMwPLdXujwdWYnYBjuorDYSt8Qx2BHkMGpWBsFmVD7EsNJo3f",
  "key36": "38tgW7J2b2AHooj7uJmLsdcqTNimcYUK17VtjQADnxy7FLXVXb1NK3F1uWcWKUo4ajBC5KJEEpSir2NTmaN1VtD1",
  "key37": "5tXf7GL66dVZTpgpDQ1r5SvF5eENBSRDKb939TVDwbFxR4UQCbhZKzZ1cVMGhUukDDKXx9JSLPNr84fvTA1J8oA1",
  "key38": "5LPFjUbZBvLeU3Sr3k1hJcULpWigkyWBi2sW4Nfjrjb4ST3dHjDqEKhynQ8pRMDckHsw9XTwDHFEyDn4NoFXJ3Yy",
  "key39": "3A1pc9o3B1M6PwYxrydFDdseHAfMKQr6H3qoVYZwfhJvi4aK9RHqWxcDKScCKk1Z163KLna6FkwsFeAmVzXX4aF6"
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
