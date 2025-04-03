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
    "Huk5CUZBuo8XqRdHPS1oomg6x4Gmyp2213WqX2x77y8Vdk1kaAx9Qap7ZjvYpjg15aLTmochUeSBCrfCu4G8LZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34UH4vxQ5uVKmWuxNkWMm4grPNPHTdCgfqbDsPgXhSBtohkkDazJnHPHLTEFbBgvAvA916aNnoALgrkAN7C2gqBj",
  "key1": "2MUaHr1Z39xf1QNbxuej3qzYVEU2RzHzdT9hH67bR93RLzoanuTmuc9QyB64Fi9Yf1iStLEbtVa8AdjDovz6dEMU",
  "key2": "4CvRpJpL9k7tmKTF1aakrGzQkvgmsiKRRrxAXRoRXPj8xadf3UuhRXs4YSt58tUVgWxoN85ztaiuAX83kpRMT6ca",
  "key3": "4D1j56XVdGNukUp2WBJbiUdn6FaUAkLbvEtcD4q2wrtnzBABtr2dw5jeGaFv1Uzb3MJGmeiZv2Hqh7ZhxhyW4E2a",
  "key4": "5CGWxkbeqxYTHWisbBUVaMoX2qHfPhEWtub3w8Uxm38rFxG9BSSJnNgeQ1XHNE22PPmvaAYduWgMkvrt65kNba6J",
  "key5": "3o2Xvqus5iSZeo3zaB2HguZ84ZYwLTnnqzb9ZEe8S1NLn9n2nVz5CypsuFaPSavXr9sSnwFy5iY5ozzGUEFyjdrb",
  "key6": "2Tcecc986VK6hzFgG9a1ZnJVgqGD5koSS3e9K6STHHHvz6WQ5UD3iXa3VUM47KLuc4PjP7G9XexAS51nDCMbK7nY",
  "key7": "67GeMGmbw8VdTQoAZhHxR1MyLj166EcrVhtWnnoCCXSFPRc9zFcJJHVSQsVyWd5VKF8YEWVHuLxmqNCPthfaS3KK",
  "key8": "3edrg9LL8Cp2Da9c7dXdJ8x6yni2BK8BXiQXW1WBTzzspYwFA4nE9fATqPsCHuRefEidtkzRaEvevaDc9Dg1g1iD",
  "key9": "5AGRXsexBtoCSB5n2bUn5kaGts1PD9xnHSi2RobV1QfKA9JRUkce7jbzCfk7giSFThAnLQGGhe1svkgvJR9rPKHw",
  "key10": "UTchotfqRNWGsBybzZvngrrhtSPy3EDZYfZ3a3JftNZiqC3eXWfpbENszeXwNipMez9vcR91graAmgX4GJdMU18",
  "key11": "52UsSssYfi1kUWUsW4mRWvHFjFPwTLJJqMbi1zaoCnedLWHn8nDVuY5KaisyVsrFRWZL2bRsrtpnB9ii8UURFTGC",
  "key12": "5S7LFyFruguc79w3wJaRWNzdu4cGuzCzQaSzgZ8deSBRneNLwWdh52xodEoRC27pbgTNXwt8ajhQKRPo7cTjKeEo",
  "key13": "2x7xGC6uzXNcyNtTsTQz127aejQ9uZzqHuuRSDasCXXHQg9p5uN3DQWBgrzxVYdX6fD7EXehBys4MzpKTwoeaEkB",
  "key14": "4oTDU6XPyJy7hUPwVKv2BnHFW7k9akf4nnYCAZ4vQ74Zb7wVa8n3Rx1qNLckfqSwyFuguVxhcqyy3AWRNuDw8SFh",
  "key15": "sQ8UNqn6j4yJR9fLBdXVMETFrgu1ooY2j7ygzmtQMujV5g1AxXGnWPTEdP9sdcxmRUZGArA8vx4f3q1Rkz8vmjM",
  "key16": "3so4n81QzJXVDS4mF29xCS5PueAhc66h3oFanmwU6FmYYXoTNH3trzLLLp2sXbtsU8hFQQ9DMhxMgsByRXcGgcNq",
  "key17": "3R2F25icTA9sya7KrkezVDNBtC79gjW2jtCTXzaEtES7eMmeMQ39tCjo2VoQcrb8ANX3f7u2MceTfdudbbjdzm3d",
  "key18": "3VtWhSbBKsaSYHqe2tHeCmFLfGF9oStbXPuQ1XSRPREZv7GzfouxWpy1rgvKMoiHQo8Lv7ugKYkv4NPe6vWFRNpq",
  "key19": "46kiG1LTubYtx5ApqFByqppRu7qAPwWp1QLUQRooHj4nXeT4aDcYkrMbRNLozKuUDREGTL9ytMoxsKwiWedYHJMo",
  "key20": "64WnSoZRVVe97vZJ8jomD1XZTD88snAmHcKQProMXFq33D9EDmeKtZMJ7AXvq39J5jQ7BAQTP7c9WMhHoxubiKPh",
  "key21": "3EU64Gdwzy9PS6BcQ3j2ikXL4vcQWyiXsfJWTu9unpMbtXZA6fNUyD8tnqjBk5qnjztsKN9HavsTwXYDLo4akqGb",
  "key22": "3yi9FQpga2iqwR45rvhnoVad5jNmTkUA9MNQfeDauDjU87wvHn6o9GTdngULQXfs8VPuQR7uzbZDitG7nXqmDxAP",
  "key23": "4Rf8xpoC6PY27i4pjdRR4HU9VKR57fg2YSttRKWyHTwCwZKZe6X1pq1DNwikzqHpfuReH1FtJNG3hYZZ69YkZu4f",
  "key24": "48SaqiM6XUmgWhig7jU7Q9WLzwgFSdYvsc8rejs8NA2qx5d11som3Nn6GaAaV6Mc4iMJqKbURZ76qHALQE13JRN4"
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
