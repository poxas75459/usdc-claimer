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
    "2Yy6Aj5xRQmakCcY6E26qSdvnvHk3Zu4QBSK2JGJz7hLtcA5Rq3RgXzBNmp3Lp1qa1Ky7qK3Fu3FmJLoqpSc7Epo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kx265d6kZrHH2bDr9GryLq8y13nqtZeQEdwuN4ZJ44pVJ4ANZQt9pL7JXjHkHExsZrkJKFHY6mzPRAr2YmWbtLm",
  "key1": "3eGDcDvSui6q5wmq3W8i3aMSPEaGBcivFbYLvEdgKDQXaUSsDzyZUFVKHN84VUvQvxphqQ9AkbuCJitnmXhtsRAn",
  "key2": "37omp7WTNkQrFiyfTwyZET5UCGT48vJe6mgSykdCPvtcM4BQhUHhMmLaDcyKb3NCgREpeZtCpRCba3mdD9YEYQgG",
  "key3": "hus16RqMa6YbbEY26eCi5DSb8NVe6rbixYpaFaywtNLwd7hptspYrbgCQUTgXgWWRnzhpXMnvZtVPN5VndFgYzK",
  "key4": "2sWLBdWzLaCzNzpzWJkrm4x4q4iiisQ6xYcUKusCCn8y6VJG6yNRwnoJYsjpVXM9KKAG782VoxpBUHJBek67Kcdt",
  "key5": "2FFbWxrm4xgQU5SvJjiJKYYELhjJxr7N4gLb9AMwtdXw12RvbECBEp6XhAPPvBQZmYxx4kNszF9gUeUFsmwk5Hd1",
  "key6": "5aAskcqq1y6zmGDzZANP2DDbpA6wyaL9K2P8755XZFuTCKsfUj9xQCNWpVe4Su3NEZb7yg66BPJ89Sf7HDMuNemm",
  "key7": "4Go2P1Q2hSPW71yrT7xwdpW7nFZqBH9WwGSB376EqR8KzQ3FcAhNy5QeE7ZUJiEVq9XVadz2EQxSjKy2VuFqvqKn",
  "key8": "5SnTSj192zw9E1V5DbKjHHs4zABW24K3adwG8nneZDEgHeEQnr9y4hhAGAun3Srx6wVypB4hS7Hw9UDVAFJpYSwK",
  "key9": "2SBsT81FpTWLR6jZamJQ9mxMSFDieqia8DvcVWwLte5XZCBiufNcRyhX22bj46vpzekRNF2tdZaSXNBbqxFLLYLQ",
  "key10": "2ri1mL26aTuTKfBSsfAkW2giey8ohdhmMhr5rD1DCjeN8zgrdMhF9xYUcfujYuuPLGGJt18513czmtKtQ7Rbtjpo",
  "key11": "3f6HQWuArU51MpiexEtUjAUbFWSLt9ajd1gQ2Y2pvHybJxFFvF3txZpPoDsd9RCQAnMiMfSS2fTtM2gfnBmoNFYb",
  "key12": "XiWsN6E8ow9Y1VrCJPpUHSMNPC8iDwiUYALYgnTFuKrRts3gP4WkBAD3D4vamB2SBAYTzHZQGWdgDGtLP94neL1",
  "key13": "5vEaxqrCDE5udAzZov86dUkwYiPJucWgruzM2Ld9Riu3Houiei7PCs915gFZCqXWqzFqio8uximfkeiQM4XpQrvT",
  "key14": "2Jx3YHfL45j5ViYWN85791Z9myrD6Rxn4vuJBJMawu8WzfzQtgYKuyoitUi7HU11wrBCrr8uhGVcqeW7tZYqJDCC",
  "key15": "cNTWP2m5UxkQsUtYvx8AWWToXtVH5fZjRM3fG57MkiFwc79nPkj1VPTcAfNbvnNBzhgFjHgojmzzRNJWST42SgW",
  "key16": "5yk9929dZMfpT6zzSbaMhjVc9TR7KmgDWLAE9KgUSPySS7BSLqFGxzv9poVrxvHUmiD8hx8or1uPUMBoryB9n3sZ",
  "key17": "2TFqiNW7VESZkeFX87jrZ29yks3aWbpgfXGjNi8oLdqMdeYSA6mBk3ov7bRtzoFPSi1fjnaqSKpDQyT5kj9rH24p",
  "key18": "4E2PfTDGgt76ChAnxDCGGUYz4ytydtFhA2PuKQC71iF6EcsNpfcwpTSogD7MGJdvWxuCMkjQgZhQ6htPhgik98xo",
  "key19": "RuJFrbGyVD6K674CxG23a6At976HEtB3FK9iaRJfJZdJkgA2Augp2y71FqqHuDwThXfedsfTVa7KPcXEUofaBn8",
  "key20": "Vwvi7tYUq6Pzj4t7HWNDEwQisgQDr2Gf7FnUo3hvjWR5jmfNhJv8U2ZVY5ZkNA78oNTnYuiA2VP9NpisRqchAkV",
  "key21": "3X4X9YPU5wEyXkjQCDRKqi9Sib2C2LeqFQxxiWPwg4SFim6NcwXLc481itAPrP4vSHjqD4CNFGoVNSZuUGaFBK2y",
  "key22": "4U1qoXjMALMa9rpgTGW7jwSwMm951fQHuDsAm3mhriy3TEhbD8BvQ9AqZ383xSMLJiQYF5Hempv6LRV5R6g3A4Zz",
  "key23": "2ocsMdgPcAJBj14Dv63iTBcavkUNsG3qgGTJWCaRW4PPorck1JJH193c38f19FBAvktzv7jYsQBxRYT85xQGUMf3",
  "key24": "4Jb3bLu8nBC88vTsAMWPDKZNqy73KBshnkbKjBqSnxv6ocbBRK1GfRDnroUZtPbi61CcWjepvBGRHCcKsnDr5Uxi",
  "key25": "5MrXt1xZqRhvjKigUekpJ5KNLbnkza8qnaDdyofnBZwFoV9oPaKUe3Ce7FHfZ4asHxQCWtChtJJWGmr6ikRhDwbP",
  "key26": "4j1taGB622xcCU3XG3QY1gTsb3UvCZi2erHxyLspq4xv3MW63ynCxV2ev16A8ZN9odWuzW3c3WuXhZHScRcz79vc",
  "key27": "74pLxmj3TxzjuKyw3bsiUNFkym3up4PggRtSZ3vGTXy4ymip2QBKveXQxpndG45moHtTZr1shuXhnig9pPAWUoL",
  "key28": "QS47CTTkqjDLLMuER9ypoPc1MvpsyykgzmusxcTovLKigV4GxFAXc6oaLQFPmfcCfKsSvoqcotkrGDw1i8taP6P",
  "key29": "3ofpMXM58PHgu1busuSUMRE23Bk7UpeTg8BsbXCwv7t7mciZ8UQJVrpnfcrkqzi3Ngmw6EkCNWrhr7GS6Q3rS7rE"
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
