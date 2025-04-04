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
    "67oxkgb7E7CuG28tidFPWtvzHpvssRTq9VFuGZ1BGGTu26AJUZsZqDYufeFLLGVhyRYBkgG5sLNnnYPh8cG3cjjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uup2jF6i7Mrk4jdfKLvGhHvNQD7VSJiSwP1qaEVuwbYzEisLen2YkCgE1pR5NVKCYPCEQH48gPejAhTeTK9gaFK",
  "key1": "3e8uXM4dKa1Revmx6cbneGFfxmg9y6zP81jiR74Yxqee6PYZyshJSM27Pn5xRPTkuuTrpugsoZXPQXSdHxRPPzXR",
  "key2": "BxNnne7ehoT5gy4VwoixRyNMTxeAKCYn1C2iYEGTyAWs2cGq1gJ2JmA1jfhVK3L32MsMjTSTwWTbjJSQpnXQ6Kq",
  "key3": "4JdQmB6Fjg23ziv4wf6NPLiho16G8afweArLMPGkko6iE42EaAno3takxYbvESL3frnYp1q2SCfMDGaEdd7ZVEAo",
  "key4": "3tt6ddvsLTNy6WJDnPM82DGrz3oEqNaRS2kdKg2RCEpEHGYCFtdTmAQVr3HvpCXAayYdH49FwRQmWq7WG1kz9mtH",
  "key5": "2vKTzHH9nmvQrmTyCcfCxckaDDN2BJjr6obchqbyRhbbyH2xyrM6o9h9dcUnBMopX2iSZaSshfidd8vDuvPKfjT5",
  "key6": "2s5meG9eaWrWPVgKrgBQihn31A8H2ojCNUpyR2PrWw3npXEn8dCWgTh7fTRA5bzWqRVVP16nod6dM7htAJshWBK1",
  "key7": "4SMAEj2gr3KSaMD5KfNbyubXXzXRDMkhwN4BoSNA5GjHA8eys9nYyHtVdwQd6U84E6wLve1NQbZsVGaZAxArsy7d",
  "key8": "4C2cdPvrPMxtgCqyCYSLsovKV4BauCqQM5PJ3xkET7Q9haESHm4Mk4s1tWriVynSuD2KPHJxPtQpro5y7Y98Pie2",
  "key9": "4A2dKNnQoFXQNgD5khVKukLiwKT5dL1TwLMHp2Rr5Qac4wAkZrCuqHPCuir768dtQ3514oiT9UyoVpNQKZ5zj6AU",
  "key10": "3dgcKGZLEzVTVAiBshrXjQqTYD9ZKwoLfyTV2tMdbvQV6aurU4yThqdaK8DQbCAgVE6SCw63AFXka9ma6aNpK6WC",
  "key11": "iegSTYPWU7vmYDHufMvy9S7QU2aG1igbBXcQd5jNxrHSj4YJVHxvye3zARysWGyayDyzoMXaHiLXkncwHt2PqtN",
  "key12": "2EYC3yazd2WQF9YxZ1VRgPqqq26BW6F6iVnRqsi1vtNRpF21gG8LjWAmLB8e16bd3DqXBYxkBrtX8UWn87oD6jBR",
  "key13": "41Bzy3XyRP2Vv6KCUJSd647pYR1bMxqvCXwP92L1ofeoNpLHTJ2U5fLmCsp7e5aanWq9zgPqGS2xVj9ZB41YRsyS",
  "key14": "2wzyfHPXdw61ryYrQawMzAtp1J1KHUbnhgkZLcWJMAb63BAWDFa2HVyWGkPBgBJxS8BTeXcKykeuHSiG8jWgzPZe",
  "key15": "VfevyHb2BJWKPJUCNWo8X9wL4J7xxWaxFi3aSHMP8gNrxRaesG24VN4DPdM61FpRbYjB4kkSqw4QKJpQpPApkTq",
  "key16": "3tsFbqpPmWpVrJ7G4ez97j6SngQNfpRWtr4wH5Kbfv8XWBrKuFUszG6ikwhGU2pdssfRk7iERHFpY3gkqJBcaTuG",
  "key17": "4uS4KvGiEPAPgycjDrbdNrtffTYk4GzKuaLyQyWWkqVHWZQZ7acYo1W6UvVfn9FDradjinXU8cJLNhcwk4cUkPxh",
  "key18": "32b5m94odTB9U6CTzZxvQofYHEhpZ9v8DJmLYqUF2FGYPAMhRLNFpbJep1QcgqFcPKK2UZ7BoSyTzLyy3yVbg8ax",
  "key19": "46jqyuo3gV7buBqVMAKAos8FF6syjqxSq5jwRKNe5Kn8QnqgXp63gMsKG1ETmVwZ5W3aHT3Gw7H1DMxdZEwf7XAh",
  "key20": "5hNaMAXCqSqaXTdgbG5ZxszvUh3zpyrwin6Gbte8xNhBo7XXvMzmCYCGKA5ohrZFcfoVo5bTGUJHDdEm85qZnqpL",
  "key21": "3Nua468CwxrHRf5YbB7ZpY4CSmS3xyiVHH4AvhSPxSSYM9rKCa5765XwMAehP7Xa4dCmhvpypMBjiRuH4MYKW24x",
  "key22": "dqj9iV7YKbrhuU77A9zdugT9juDW7ZW4RSqTTyAo7fi6m5rSetxbFA1hUcyTJcYXfJb6q2QkLjhDpBcxTnmbVEV",
  "key23": "2buD7H93gEGdsA6ySTqjdYYdXgGfD2xEpdnKiMbMM6dLY35xQwBZp2Dejgr1k9iY4Jg177D4tL7WTjRns3zfvc8q",
  "key24": "5sStAewYhDJ1Zu62wubzp5Pod2FvrCteMAUn96zAk9LCNmCPE195U2ZJKSih1r22wTWzgoEzeeRZYm5nc8VQKEFM"
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
