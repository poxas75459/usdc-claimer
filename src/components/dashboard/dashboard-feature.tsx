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
    "4BrohCMZsJ1FcWNEMvvL7WWD3rML9qodfv3KZcni2LTZDQWwrowQyy1EhCHt4MskdR3KnSzsDHZ989okXHnRADif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jtTFGCBtL6wwDPtbTkAC7RDzYxBsRCFUZgJm8RBEm4DjNV75FushaAFiAfNy6E6HLZyjEX8LiCjazoSMfMBrgBD",
  "key1": "5WdBofk9hccA7CGCPWkJ6nzhf9rtJpkTJNX67sVFDrzzBa9ckd25DiQeKpLgigFkRVi7LyFB4jYWejzaxZD6ZFWu",
  "key2": "42f3A9u92DuNPoBDE5z4MHCnfF2uDN5ezoExWnRajyXBrBn8mByLtxvTUU9ac1Z4gsUCHeBaAznhF6BK1gK1LAQx",
  "key3": "21JzpTz2Mo2snGXsePECEJqK6TPFafMDb2QnGz9ua42WqdMY3yC5wwVE8Boh4KoonKWjoqubAJwmiDQketbW5A6V",
  "key4": "3DzDRG1VJt1smAW3WHsSwxehcBybNkuk7a4TNXSse51VAjsu4UFb2vrMzWimxWTJpjNvFVHkkkKnhYSfhpM31K1t",
  "key5": "2edLwTCwEgM17C2JjwPERgwrr91vXN4dcHWvnw4JNEQ2Sq95SCX1zr9ENPEDPfuuoLJLrUrdjenHYXbVinFkC8nF",
  "key6": "2yp2rWHJ4Y47TuDPn8gebpkMC6d4yqd7tCD1uSZrNLdWFjTZRmFWUzDmgFPzE9xd5iWdk98G34iG1u9h21yWjBVx",
  "key7": "3y3WddHAmvvm3fhPkLMGCrontLWiXXJ55gx4TfbjppzTL1vdoZdfdoGNZuPH6983RU5gzdgzUjeD5KDPLyBzGcBK",
  "key8": "3niSxvgJWUbXoUbyE91YPUpxYFZ4j6epAwcWfnsAvQzLqdnLAjwMKzDgTU8QyRfvvPabYv9uYPsBRbmwLCouiuF9",
  "key9": "5cQ1tEoSuau5sptwmnu1X65zzY5SqGFnEjYNQqiZnxsNErSFMhe8v4E5rWhNm6rXz3GnhBZAF17Hp1vGw5cDNrhV",
  "key10": "4GX6FBNAY42x7UyTChUhPRoGScGo1g63sPR77QA4jPmptaPdfvAdTdyNzYNotgJMNuwBkRGBppTh3nhroE7M5U43",
  "key11": "3dBafLMMUCWLp5k8p2xgCnx5y11EsQBqQqfiP3k1P26bX4nLageKNLYkdJwPgFkTpn5gt5fse4ZXdVqDKz7pBC3z",
  "key12": "2EuFH7VRrMnxkQft6wPZZ4H4yoYVp2WdzLEvBusVEpfTNTcWHEd9m2G7vh8CUcuQPE8vQgGVQ61tBaguaM2q2kfC",
  "key13": "3XpETh9Bbx8RpDoNCE9qbq7ozcZ1Mhwv2Fts9Qi67TgV7JcTk3zxUjkhKpYtvQS7MUwpB8UcWvmEZGtwBLUgjtA",
  "key14": "3ALGZqcLDh1852VLsHJaAhfDaP9DNRiB4ZLy2q33VtKWr89eaa53vSpNrV33NUVL9ZsTQNPvajiceMNUshc6GAkt",
  "key15": "bo4jApr48fvT7kMEDnqTEsXuDTBh5XDGbXaFJKpECkbHVfGdAJAwioC4aEbdPF3TaRvkTo6675NDhseKD9xYfUS",
  "key16": "3Y3ezkbuTS6K2oDnhopCirdkLSg76zPQsxUCdJ19oRfqM3B79wiZxqWvRpcLYAt87N7hyF3tGf2s92ZgqQL9De41",
  "key17": "w9WXx16jxZktDE8UHodBJqj6WDUkLPt5u9ZVYyC9dMheYtnuaBXyuMDYhdvbszUauwQELh7XAw23zN1Xw71UKaF",
  "key18": "2PoX4fxkAMeJtWFTauSvBaq3V2Fi2PvuCMCgUrSv1tv1KEEGb31r43VmkGxJ4nyE1S857wafNopVmyaYHQ9zzgRX",
  "key19": "4YYAeM84NyhkHQXGPc6KdgTQYwpjXiWUqkKktqsDsW7aTykcs7nyNBhYtjY9K6jznatLaKX9Gy9eg2TbyayFbngo",
  "key20": "QricNu5Nh4578t1pe79gKWBFZ1Axzc1vbDcFY8XHF9ikAf4QfgpRq6fppA1QUv7womCfXRP1GQhwevSk4ZqjoSv",
  "key21": "3jyKRN5E1WUKMw1SqAmDQESp9moYVNoKmAk2LSM9Qk1MDKqNtFEsnfKKgVJn1UPyWNqqzU2nyLM546SL9mBczuvh",
  "key22": "2XaC7bqmfx2QWjz56JrPGQKVRreYyaDcRY2ycnALM8GXMiZ3nKTpPKv5vtQKuo56ZrwELGTWyeMEyYv2UY5SK5JT",
  "key23": "4cpF8eZKvjYSyVodw5p8pB2dAh2vVb4wNDpVV6hFT7BMzZWLxp1UWPRypKhnwgCA25agsZ1g8vhdgzTMNhH5DCDm",
  "key24": "WaXinkKZvuFdfWvFRTEMvPz8y7xk1myuZCpnHZfoowNA4xYxRGd7gfCXwa3NrZ419gWGjeUvUvweJVoXhtmnc2M",
  "key25": "2THt9jXD3f2SLWu2igK2UCEn1nkNjXhkTBPzwYR8yNpPTXnvsuoMy7CXw2NsqdhjNNbSUjnY6y7wRHYxfV5hmp27",
  "key26": "6s1vPNrYuhVfBuQK413fdtqF3yeBERNJY1nYTjF4qcmei7vMayxoxyNHVUC4DjXz8qCyFeHaGUEQwrP4v6zGg1V",
  "key27": "JuthhuZdVQ8qKnkcYbiaZdauc4fCKcUUhjTBLUcf7y9KynyQYqmcjM1b4EutGrUTMrDrJTWWnsFp8WkoG4gzUyQ",
  "key28": "3sM4Q6GtqPAWqbBkGAyDj99qj2zS31iny63vTdkoqhizxbWeskfYL5fLAFwHgEDckNu577Y4HWecyKx96zyk3gv8",
  "key29": "4hbSEPYbaKo4KukeZDPjrNqWPfGhoQ7gM3VCEoENDG1fxmYC2RRbe7CyuRNmAHD7A8QhUTRYsKwBYshPTtKnCEGe",
  "key30": "5vLFuQegG2RquvAe3VdNHSZKRM6zq9BXoimTVidKjAJFwi5d9J2syno6TB7UmanZsxnFxDjt7ZhWBSdmqdZSRnJZ",
  "key31": "4s49dbTRQFoX3SqKzqHvPu38fkWWPT9CVW36PfU1s5mjLGiQuoMyBAJytHgtkmnNADGfBXswPMfc8RLpL2Sp4fqE"
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
