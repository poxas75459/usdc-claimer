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
    "2t3GyuPp49yQKTTBVywZFTi19Nb1b6LMHAhVQ3WM3uZZHQrsZ9BWfUHRJTNq6cvwXTvWocHjxXrMTo17MHHsauKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zepe4kgDFQ5KXHxwe1Wmar27Zu42jVqeoLvMeJzfkJHuWbVPWbRBic8k8EpiHzCmQRmzfojxJDAJ6CTH7h9QsLe",
  "key1": "2wppY2XuJdyiYyX32nmRGc8Z3YQmpvZZYpkiWefKdU2Ubn1hVmtnNB7EgmC7a8ZPdJayyDmkPw6nsPaxERFSBiC6",
  "key2": "55SCsVtSB3cvaTTjvHLRKydpEB8K45DHqUfiMVa7UpCKf2uUG4wonEDNXopHtm6gqKG6C1ZpWGsqbdgR1hM6EgG7",
  "key3": "2NTFP4xad25YfxUehyeU35eLKesrsdQcWv7R8uiL545EDJ8MhvtAASaGUJu6pm1Tn6dbwrhk9HZBqT6KYHswg88m",
  "key4": "4gj8QUFoUP2bNzEcMPwepZjk736GsUxupyTBrEskpzhLgMR6Fd5BkbsesnZ49DRRDwZfEtj4xYnowZABDjvkNM83",
  "key5": "2FDRvwFf6DqKpsSLPidFyEEycLtvxxDX4ihCmQeCPFfZaNGMBk4akKPadDaEb24mcx1xpG5hVcs72qeXoSx5zSny",
  "key6": "2iYD48r4vnZPNKdBXgnn6wk3hrL5QnABX3RDLn8Xadp3jj4PGAxvV6z5uofL5onSGt14CwWsnFvEkcWkz1FyapAH",
  "key7": "4AWqr2AKUPYEju8KnrvTpDPdjufCPg76sdYTfPJkKuJXo3z2bWaHK8FanFnA2xogXkY819aUyTqNTri2TMZsHCPZ",
  "key8": "4TLXjZin2Q4xDZ1EDbY7n1gfDVQcwASc2VEGzuc6fCAdsv4oLywLUr8S7THR15uHSnmYuhLDPvUD7jGZrmA3DYE7",
  "key9": "29mUPsxxJ219YgQuqJDYVAhV41rGSZifRGSCc835S36JTBbCQUTwAmDLD1XXCftYzFiQMAMg39Yq2N7CXuvnetBS",
  "key10": "L3Nu2k7JzRKjDHx3gwR51k3VNvdH96jna3CdzNthWo6pZPaSe4evT8gBVh88nPVJJ7mqauTAEkG7d83in26HnQ2",
  "key11": "3o5iZCqnPEiMQNcavLopB38xjUD4gGKn1S9oXWMy3je14fe4m3fGKqiB9GcqBeyapY4FzLh5KnxKVSBUQM41eZw7",
  "key12": "uXBPaFveUqEhEALEwzxe3TvSMN8boXnTGALU1w7yuXY35yECpGxwUnojoihL3kAvLzx9gQJ82hJLpCGfgPxidUY",
  "key13": "2NyCi5W3pHdqdNmNwuZZvjVRHWXw2vycX7rpB2uNANGLxZfAuNZe1c9vzo2yygY4NrXLRPGAKmnqxvFK41TbrGfg",
  "key14": "2WvHdyhKHFWP5Vfvk7rHc27LeDbmhvshYRpMcgTQNXJ5u59t9o4A5AAZhVWRc39buV8fTEwkrM8Xqm4TZsdPiwZU",
  "key15": "4UNb7WCAEY36AybcGEqQYoxxU5kftpNuYzxJsEVhgCZocKc2eppe4E6byb94CEouiNwiS6uoS3jwa4PajgrAYFGD",
  "key16": "4wubcrxhu9qEJexgruda7P9g464aUTozNezMZ7FyFq4u4tpXM9vp2hWusi8FSsJYJBEPTXR2wKceBUaxmWCr9tfz",
  "key17": "rjkcMihVJ2h7fjESrzdjRaRurvRyVJ4DZHUWd8mZdPrL8M2csnBT5RQp6WWfyQDnXaD3yqvcnS4TzytHWWp3Kt6",
  "key18": "32swEHJsRwKffLwksqPfygnScc3fYwEzWjQY3WxMUmF361jsS9smuexobzTwpsBhSL2LhebD3E6nQrc7FW17sThF",
  "key19": "2kzdmFkYvsX5txEorHmpMF3DZbSEL5erZ4CmtNbLu7HGxVDJAYp1htQUXKyQ6z2b81cWjLLSQPAgXNsU7WD7aE15",
  "key20": "2hPVoUWJbJtFrq1XuPzxX18n62GNXqA1GcJKPa2YAP7asGoqeebyn1Z8wWeukhWms18zoVRmvRDLrpbMnaSbuSXW",
  "key21": "64sSDjNFochYkWUNDpMZNPBhXLv3mLS239xtGVydfKgPmRsKCnV3TeBdsXxfxbyQZJTwimnj4tzhbrGcoxT3tjD2",
  "key22": "oZCyey5HUezx73z46VNAkgFdgGqXyt7ejnM4ksShcFd9jE6Ap965zQ2YHvp9VtvVhT8aHbMonvNkoXTNzJuQqup",
  "key23": "64Nn8QZWT1rD7zZgUnsNZKkhtmRMuYZVPuDuwduX5JShTBo5YaBQAez1t3zzqCL7buGafdUn3rMxeMa6zVPcX2no",
  "key24": "56cjkxC18VNUfXC5NitbJUEJS6FTKodbfRoa1q4oChtdU4xA8GoQSu16oqSpFDBFhwL9GJija3x1Z7fQC1AJ4nca",
  "key25": "3CHE6psmCSoL4huhYcqSZ4SviFJes3zENKJe4ASv1NgJoXV6Tpwtfb5Uo1KAKf57Acrt2qUKvWkvMbYmos2vFkoH"
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
