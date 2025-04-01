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
    "3hW6QqHsasYzKrQQ9U5UjEittQ9zfTyg1Hv8P7YpbszhyRwdCEJ7kQcVEf7rfKAUfWqgbo2M5i5GQHcVJToVfs4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kRQPKZA1nqsfxi4vus5KfsEGtQ8u3CP9RcBJBGa5gMC3LWmkyFr3KUspd2vzVrSKWzxJX8SmkHQNRiyxiyH2fgX",
  "key1": "H7RPWzS9bdjg79tW5UZYXXq2F2QUznfb77WLx3bXHfaDD4K25Pda44kWUn9kFCjBhorm5LN7u6q2z6cUwFpH3LL",
  "key2": "2v5qAMQmzHaxt8mYxr14uHmrYJvzpH61wSwpvoH9WMCcoDajk7fEbx2yEBEpyJUkWsZHxb7zSc18XNNkeeCbrdHz",
  "key3": "bWow9io3cRyrCCQBvub85vewMH8UxurevEJaGm9xBN1gnjYL71kTzjDzb4WJbC96sfYEr7sfcG2A9c5f4D5XC3Z",
  "key4": "417vJQ4iDiwo64saD4my1f5s7acLWiHRqQwQjVupNTixtZKyB5DtEmoE5ZD7pXtrVW4mYeE3TUuiC8CZP7PdQBK1",
  "key5": "33WkTyz2pekq2jVDkdLSvNNtQXfKc25yEq4vpvLpkQrb9aSQh8d188EXFUMZhePiXiBLgENpMms5qL81sx77BuQ8",
  "key6": "5ATxJmSWysFwveNJ1SgPeyuLAWGdEUyBFki1TV6Rme7WBqUGCQt1yGv3u8S5SwRpKFWR9HaJmsnRCP47syYCXfyT",
  "key7": "389c8E1YKptacFF4oUGisi5VnWZm6suM2LLx1CT6zKAugVAkCAWxri6JJcodMhkfXNr7qg3TzvyHqr1BoxaP33J6",
  "key8": "4BenBvCP6rqhUfbRmuHSdkJRDViy2PcD9q4rH7bp81Tzhn2Asi8xeE7frSJcNGjgxyd5uwMFgYSREZHTURNvtH98",
  "key9": "5KtTtdyY5T9utWnUbedr5NZeuwbi6sV5BG9Pkurn1wpctwPttH2RFj76cMdpjFJo7AEbVDNN9eTZWRnWNee2RbkV",
  "key10": "2ZTsePEXaHhK9pVuXS5SuMK9qFBNH4ZqLgm3U5VnTXxCfmisdgnH8i4VXYZsbGEBGTcydeq5bHJw9xPnKemihh5k",
  "key11": "5N643oVctCmuyPs5iWMydfnEFL3jb5oTDyxFcUs6GpNKFWAyrfjXEoinRLPGMrfB3q1TUgdp8bRnirnJueqgvEWc",
  "key12": "5dyr8WrmQEQSfyE7ZGG4R1DU3z4ohiSdxbGvqsKrUop69wr4Yfb28z4ex6Ycu6NShES4rigCSqibnMoKXLJsHehU",
  "key13": "3xpav7XVBSucjyvg84S8sNYhrZzKGWfmwQM8jqLDFEQBham61zQqfikdftKxBjrgLA2TZK7D7jzR3VcTPD2Gk5vp",
  "key14": "58D9dvMwhB8uCqbcZiNr8D5cJSfnnaHwgoz9yXGs3qNhw6gYGtUEt34AC6oF97tLJZqtAUyYRmWQTVXCUkbNLrH6",
  "key15": "4jb9N5nTgDPertzLs8kt9SNMFTZcCd27WP9ieRR5CyEthB4YAjiZSjnxaTRTreEqF8T1qKXwiw2TGcSthbf79xTa",
  "key16": "3efyFJLb9U8RvEhvBvFVuhzuJXE2p9dktmt2mz6DfW1cwodBJfbxHgnQRwDGn2RYKJeyk1MqMRioUKRvv5BK9Zn8",
  "key17": "5k5MJZgxUW11LeCmsrRKweVMztk5JdwZeRnP3CccExAcHpVaQPkLonwADNkCmHajHK77tHS6e22EVandjuvi8Cqn",
  "key18": "29MHKaH1hCFZajqGDAckr865qZSps9Z8yrv2DQ6HuEtJ5EXaSBgYYwgyhdsA66MFwrGeNJcFdgfa3MBdT9eF2ETs",
  "key19": "pJve9NJpBTCMN5iwmYu6VFyugvggbcWhCxfxJw7SLprKtxtk4VafdUzxrQTLyPFuZrfUQKVyZr2mkAfkFaCdqWG",
  "key20": "3PQ7Utf5FPWZ7vriq8M37qxUDBHP91fdkmWpxoPvT26Tdu8aYf9xtuVK2ANircf653xFXYkoHVLGLyswBeNKSVdG",
  "key21": "2AjFHUhwdQFVELqh9gkGBv5Au4QXo2sx9EcEPwBibSeSh9fAjrVUZEPxBwbnd9RdUgCz4LTXhUtEH5ZzczmCrvqb",
  "key22": "2yTtTDWxiEAKg8GV4ZDrHE1rGQHPJzCJeD4Dc8oiR1fA1Qu49YmKzm2kqWwYuWRikFBJBHoBfcfwVXKDDPkpHXo8",
  "key23": "35ajdqofEtQ998o8nzVqviX4WkMrhzg7rcyxry6rhyNTYjtLLPKjVVoYnT4vmrj6v8uLmYNS3j14C7fv31U7E8fn",
  "key24": "7fCQST4F6eLdJJZHL7b7u7dQ3znH2XRRwUXpboKHcX28ay6SPhyAdpRoYpmz7MpH9xVct3DA8VRuFqxVp8c4VwZ",
  "key25": "4AkEMDVyy98vCU5srZ9seqQc1xLVqLq94XKFuT2r7RKSZG3nFx2kqSP9eZ5B9qMtVMEdWRhgh5uTSMbVEptpi4bJ",
  "key26": "4eTQYraaoxtz5K4wtjpPya33GRmyWTUUTVATZhvTpgsgycnxrkhbc3tox5S2L7QXydhrwF8oqdwbZdgr8QP7gdVr",
  "key27": "2hvYeT31QML3QtUNqMvi2UMGFFLTJUGHCo8As5A57aEy2DcrMLtyBRNKHGuoo8eMrg94DrZVadCrqe7k7byizTXN",
  "key28": "4QC3ZdeLwS3dyfLWHWZN1L8h8V6ktxMKLuK6DuS79XEKt47bwvEJ2xepdGtSwh3CD6Uj5ZsFisUQwbcEwe4uNcnF",
  "key29": "4AoymDt5tJUupceHAgf97xsyQxADYewY97QnxaSGM4dcYJf6oEsotS6vxPy65EyAiXZHVd2ThG5YAYnq6cY51PH9",
  "key30": "37LjbbBRazFrCknZuQtLYESBqxDpmu3Gb8Ndsj7cZp31GGUxqBvufTzENro7AC6NgqPExPTNFwyq4jczgQRgBGXr",
  "key31": "5nmo2UPCczLprMLwoVWdTnoFGP4wqahnk6RdxzSPLjejpxPjVsZFHno8AgwTwgZG44Mk283eR8KWGrMPksmDRjwY",
  "key32": "25S5B7EohdAp6FptETuaKNBURvvaoktASpi5dhhYjCYfSb1A8W4dzJi4RYQc3woUop2zahmRkSamKtvZ3B9wAyRn",
  "key33": "4HvHtisHnhCmVHdSPWGMuEKEKG5WeXogH2qkpY4QKnBjyo6xjFxkLwNwwH1dPUFp5k4XRs2RQswSJghisEEpngK4",
  "key34": "43JW4Fkme98EeU36ciAiYCoYU5AqczPDFfr3hN4xhbVHoPzwgUUCeJT9BiaMbxAyHbn9RzafFMApgiWo1J5sKtuW",
  "key35": "5zT8pWWdQ7g8tsdcZ6H7NTh8Yb6N5r7Dq7guEF8AZzuvs9HXrw9MMzN2Co8DomQu5SrmcpB2KAiTHRbhSRUykbFX",
  "key36": "2o2iyZYQQE1Mf2J2Qcohnt6SNqXkKZ3xbyCxhECRBv4JVCgDfxfaH5iUUVPQARgu9amFVLzLWdfkpUmNcpMrTEmt",
  "key37": "2H1X65gXbk33cN2vaadPi2gkupxEndHj9VT2vGPNe4fj6NBRvaEPUbG3wNNbVHAkGeJtVFeKPiLCbwEUnzKQSKdq",
  "key38": "5eQKFJKQ5a2fSbmHc25thZujg8Dabu78W998dNThDx4rQi5zfp1BirGMUFbtpwvb28oA6xkVF5jzUqDMy8SfNAj"
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
