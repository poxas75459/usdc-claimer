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
    "t7UfhQpoeFPHcDLybYrhQzaUHUh5ab8MHFSWybMc1ZspbqTMETybgVaHW9tFiCBCfVf5UDU1WJQfMU3gqZbkTQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsbHEB6z5DjBnf83RVUWp6QqnkWRDyLTkNZ9kPQbLvsLvfi52FyYs8EDubh4Qm5tkXD5fhaMB6ZDipKYWbAGhsD",
  "key1": "67LsuAiQYtRiuqtKdBNBfmRbgUeteyLkUDNJTEforQHbDVW1c3VJiEBaz5rdkxbnAZBys7rCaYYc8V6prUNNDmD6",
  "key2": "xZmvQrrUtNU1JypBkpRiEwTYKSfuYxzGtCcgFhegNsN6WWMN5M4yuAi6adCPfHVHWLmoydEw4s72XT7ChGnEYwQ",
  "key3": "2JRPbnjkfeL2YK5j5ZKtHCyZu9Pvp1KraqnvdwkhwdHqHLPXv78cMx75wdiUQ1C9AUSNNHwKbrTZae1gjoFttdCd",
  "key4": "VqfRGBpFCTEzKhdVr5RdqCuYLXM5g3nzDbSdSxn2Mrw3pjsaJKN4EpgVf5BXjEikwWfJnRYKsHPZqg3Tdi891PF",
  "key5": "5uUATLqeXkSgzrMHNLPWU7LizDjgazj6yC9V6vawqcv1vz9ux2heEfjuQtoi2G9UANMwiYP6CcPEJGtYBvobrXnp",
  "key6": "38AWwEWhKnyBjcfz6jhB5sMgpHXDmBiQa9L7X3fBRVCjK9z1TeWvynq1ztaUpXtbnKVKimqCLvax1VhfsURxybPG",
  "key7": "4kdoGBEuZrUC7qM5Pcu1S48otChQSCaZFR5LDF9rmSZaA4VzmE7CaxJnPiqFyMRxRq4oQdeuLrBxpYovgL7WrzAm",
  "key8": "568BUARQnDACRoT2RVw8XyMJAtGXUYTdztiJ82Ni98XmtEvpTbXdSN9mo6rpWpYavP1U2eHgrKPeQdasjFzF1yWc",
  "key9": "SdRsbUTY2tHVEHzHyVQRyw6Gs4zt3dn3PZdvykpK8z7mka1RpvbbDmTiJ3YHWV1he656pLjUCtb3tamRjdmuYis",
  "key10": "2uCB2t9rxZTu2gPg8QC8tkbPji7EDbQfxGoFTqH9xYgnAmUcz11Xdx95uZh9Zdav6iq8dNTgcTBnVAszphjkco2N",
  "key11": "3mUujdh1p2ak5KgJz3GKEYYhxpjE98YWXgy2wnvR4AHrfa264Y1BeTJuRgn6kdF2MWouSvvSax31t4fzUzkxygsY",
  "key12": "3gv3mptXzew7SWrdNs4hJQ1uAV4juMfkpexMcTue53YJgazknUbDhjN9ewox8Lj7ha8XkSmQGGq3oANT3oC1XQAq",
  "key13": "5W19rbziXz2MDP39rEJLJHFmQe88RDnr1YGSfha1erQK7Z9Nju4naJCTG57KFUP4sCkb1jbBxUtrSsTY89d7cvoJ",
  "key14": "56pr7J8FJt2cqV8UZzWt6DkVuEXkamfoueS6Bbgo2uyDHoZFrQwDfq7NUNR5eaGTwedVLZNE7StSwARfQXUfnnQg",
  "key15": "3YKsR4pbb3C4gHqbuYbzVg8WUWS5hrXiq36uneqhkfriDATvtyd5GqGsgMRjYSQU6KeChtNkfYDckp6aPfCand4b",
  "key16": "2o4w1Td6QvXzC2hMCVyQNFbnyDSKuXsMoU5TcuwhNMksY6dCZuK9anLyAuDGwUxG1wbaPLTV5xR3QTNkme27bPQ3",
  "key17": "TyXF19RRLRaTnZ4GFPWxuUtzFTfsUv3Pfa2FzzVQX4gLFqTp11Uj4RnUYuA9Nd4rC6sp39xn72xWF4w41tDy6nu",
  "key18": "2q6LfCD2KEkzBFnSHLBq55w4R2WLyzUthGfyHGhSiBcGeWryC426NcH16VRHuP2g7h5kwVnLV3nT1E1cGcwqJZi1",
  "key19": "514YaGAvmHayT4iiSxDC6qvAU3nyXQeuarwd7RimPpyWkYMXYPkx5KNmTUsE2xfJVkBh69paQeaFURPzw7nteaeB",
  "key20": "3Gafduy7NAVXDvWnXY2F6oWZxxibj4hVqjx551f9j93Nnw8oDkwJEoTy4Jax37AWSnW497TkUEHWkbtom5X9tG7z",
  "key21": "4boETSEqwJDEBZuZzNsysUW4XZEr5Pip6sYs8QU4BwRrihNexekZPuCBcxpFbFMVMc2Jh7m1KQVshADWcSrBrjAU",
  "key22": "3t7tRawXjhotGmPvmb3AfUBMLUw5ri6JWCExzN7sFEM45TyRPhy48ZdwV2LKf3xMk8z8rHS48RZiS8msHxziEsbB",
  "key23": "4GodKbKXAX4wfq1PFnkr9nj6Cjek5tgVmP5Pj5r3GjXkeU7DihkpzBDoYtsfXfRobsTxNp9vNMmva4Gj3de7H2oD",
  "key24": "8Y4GpohZtHy2bKRDsJBLdbJ9CsYfdV4ZuB4bG6y7YKRaa6LRzYKzWDzDZhQGjoyYF3QsDEFycwpktyTJHaaspzd",
  "key25": "3vbpG5aDmeB68wTwgPQqRpjUTuYE2HpBKh469EbAsmP6VBXbpkw69ErCdoNjyw24kuHC72M8vWraUTtwEJWhGnNE",
  "key26": "SxBFo1ds4i2pK25tZLTG3L9bz9ksgNTxyiiJgVLzwUZu8GvXJKGWM7VvprmLD6z7hJzEEFg4jz1Xi5Y1HBNRCLW",
  "key27": "378aExvs5xQHvxLKEsLvUZ6AfKMTpsWQGnyK1Ei5sqGYZb4kNnqYERvmX2x1CSs4fW8z8krUBz6BYprMFqnrQB9U",
  "key28": "4wQivggfw1wSt1S4J79w7LgJkt2nd8oz12wqS5W1x7rfQWHU2gT1hLyu7SW1jkGzSjqpPWMa12jjwEh2PF4LpGqz"
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
