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
    "55TmvMtjq8rVJ96gVxptXhfbCNV4SB4wdvBKHZM8FyoHbc7jir3FhQwd3oNt7Rmj9PdW4L7uACTPZjkiXuk5YrVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tk7rV7ZGmRTNjrLJJRKoTn7WUz3vGMd9c4MkpuWzXh6t87X7PvEyL9n4aYq7F8tbZn8sV6rvSrtG8ehcyJtt7nt",
  "key1": "5db1ijLNAyqbDPgu9L3QMKgfpw69SvEkNeLyaxeb7n8MRmBu4ntYszS4o4HnXZmH898cKdBAfcX9rn8eqAbtuMD8",
  "key2": "2XWQiYmSxMt9BvcJiJ3Jo5pEL3NPsjZ6p4ESqRPTML7c2UgtxfNZKAVE7hPSf5E67HQh5yugJALN56Tkuz2mbibr",
  "key3": "2Vqthb5txP21E5MuM1rikVVL46Dt84tYAgqYw7Lkqqwk3LFJKj3rbez8pSNK1AuousmJVqsLaNzyy3SnuTFhPJNj",
  "key4": "4TJQXJEPPYigxTxKtoNuJRaqXacKUKEoTXRygiCP8d2yN1SUcgNnCoGpahy4Sn3uEB3BVumamTYosW9SV8Hdp99D",
  "key5": "5SJPV46J8ykMYrGy97t8swsiwg8hxYyY8io1vYwBFwDGAnCEEBysthnS3E4FTyzqDRqAZpmAn2aXPdEAwXNRf4xm",
  "key6": "4GaZe9GvizNs9jx5nTwax6FNcRhMcy7F2atPymAsLPHyYGjbWZzYRV2UaBQrYm54AtE21U3Xhp3kKADMFaDye6ag",
  "key7": "36abv3hpnQd12o5ybN8A6XUFwb6XgUYNdcE6erMz3yov2TpjHqEtYZYb2Ms9iChGp1NA9UJ3o67yZe6oFXMmymmp",
  "key8": "3yhQRkt7WJMVHKurFu6ZzAhppJsSWnpW4oBEshxAUxGDAMnqUYB4QfPCkNKFLCsYzrb71jZHonxu8cQ2NH154bgz",
  "key9": "24t3kjaRFDGo2ZCj2CZe9Yib18zpcGRz1PU3JT9BZ7T8ob5gnLWZ2PBMpRDLzDjiP13QXSzg9bPjqe89vpXdoNXc",
  "key10": "5jwrWfh1KzVXKVrqyCZWJvuhQDiG43Ex9Xv7faUB389Zjwf9o4CXt4cq9urX1aVmSJJAd76cvb1t2X4QKuZJspXY",
  "key11": "5tnjN2cPvVgjGsj7jHkdKKctz9GmEuN4xAqop5VysA9d2p3D2T4bw2CQkPJ8PyifWrWd7ESdTwJYZD5qtNQggUY8",
  "key12": "3zwx2LptCm8mkgSr9tdWBjAJbLNp3y2pLKrhEXoAAL8zUF6w4C2UGUfcUVmkWN1fKfSM87gJNga5MaRWKAGKKYPE",
  "key13": "4jLMBYnMgJwKKZ4SCMufAECsZbcoU251ck4YEwv5YFWUaFg8nHX6fQkzmJjybvQqpQp5qDyvDZeHjbwYEYbWBE49",
  "key14": "2ZULnsAHUb7KPV5zum7doGtyjRuPhWvY4h37SwNncnLVhcfWhWwwqTAz2cBwx6B9M2bp73h26B5aMKNUojYr3iMr",
  "key15": "4pe1S5co9k3Qr1JhyUJDeoN95ihYB14C3CpuA3pfg1subBLYdzZAGCmt6wq9LXqNRmGJ2nrAKPLfaDpEZrrwesvd",
  "key16": "3foKw9ep2YDgdSemSrfXJd6FVGQqzkP4AayGQCmXKTiQie5QZ84YF1W8GZwHGzewcL836Sd4yLUZKmYh1TTAgCPY",
  "key17": "sWNkF8KmrzyrtuNbCBQLkf4jzGG8ydtSTgR8Q439uAth9gjMeNdzRxtD2mgL4VRdLJJhskRgJHvvG8vH9wtuh7P",
  "key18": "ZeLsrUNbK3jQsaLFPBM1MUVWAWwdGsWvtbmyQnGSudkxazR1AeHsEBrU29cWjMC1L1m6inN3qPRdf9Zn6WWxBWs",
  "key19": "2sCUwi4D7i34jUu8isayiVa6d6KsiLNEdgpYxkwPdheBzKrPfb2SCoFjqmQbwWNubM9Uy3prkasibVAzHejwPYkL",
  "key20": "3VvhHrhmZpMtdHPYeabYTfsfzKsZXoBwKgNU3smi231oAz1hkdg27JctdT33eKTCkJrsSBUkMHastHjBguT7MMA3",
  "key21": "5QmxCQ1TF8aNfthcgq5bQDz36P7qXNoaGX2t8ezugTqw7Qgss1e1YVpPtY6ykmwQgshV9RUy6x4Z42EhUPXUcFRk",
  "key22": "3wCv3CP1C5nBe2Eu64cfu3WxYB9JrjrHvycvLu1f5BMnkeboNcX4cJZXU1S2ZRXMe15mFXLvMSKoVCagZhsEB2EM",
  "key23": "3wx5Hui2VDYXgr4bh6EukXm1r7bsZciKcwpZErXFh1dyvVSMRvHLuSa8wVndDsbucs2a9Tcv6bNFw5uapiFfGceC",
  "key24": "4Z1CaAcgGRuoFZv2bxP1egEHSFYqbP9kUxkUzfSAGqReNhMBXRfNanxtovmhXBTGWXKsqr4ERQMnwLiarViU3c6n",
  "key25": "5J5PM37HFmhAgARb4mScUgPYLHPJq5UrBrkd6Qmc1yVjGDgAziTZ38doo41sEeBGf7DHLMKK2vFACta7C5hDax35",
  "key26": "5BUJqXzcK6SGapwHMNJMPsgKvBfBUNtfXuR4t7MBCJMWo1aSHxx1X7DmF71xq5bCZ2nQUjbCq37DFAKc57QpxyGG"
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
