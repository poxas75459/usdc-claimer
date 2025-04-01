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
    "38jyskkqL8zmzQAuvBEiAYiLpMNGqTigeo4ASZVpZiTEjnwwgS5ZD1Szifhu4uNhvUrvsVZxSsZvMUZvCuo29Rza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46vQMkG42KTvRacdqFUmzwHmT5ZDdwA9TzapRMbV46spMDffxE7MDXmbTbKXCcrxbkyEFRKrTKPSCVftx5wyaekq",
  "key1": "ekqwCTLAiUVXWESgqjgDDnDjswoxnTXoR2QyVTjh6Gjd3y4zucKHmYsJBwtTC1ARgARHSNs42w1yzq5TJYnqTA7",
  "key2": "26fzR7kpXvztLpVcxTv2Z4MnXrSDpYaX9JEexse5j4WR2xLhTp8aVvD432u84Q2Z7NCH4rpGe1QXhfQRL3DXcrDN",
  "key3": "5EHtB2LcyypsmGeFwV6DnDkmoSvrWGBH3GChDuU71NfLth9Cy7juVvX1GJDm5fTD2N7HjD6fHqt6xYbpbjqohoU8",
  "key4": "vouDJiJJ7AtV4x1kPt6Xfd34a3cYXNpbg6U34GGh3fZ31p9uk3orzt6CsUy4cJzDbboRZN4hGA6Wg3eroREwsae",
  "key5": "4K914PfvDAdB2JkZhFoBBoaiC9rEMbnT5ESvCsvapRZtEivw3q1U4kC9YtzTtoa6nLHUraroewKEq4dguweyquqf",
  "key6": "2LuueCaftbcTWwLB99sqz2ZLHBwzKCt1DrefRr8P35TC9ZUq9Ue2H8KxjfnHi7ny26UwF6Rqik9qAnvtbm5dZbhq",
  "key7": "5tXY4TwiwGd7jZfGrieyo9BFWvJdjbZHRhquvUK3QBi4Z5WZCmxPC8axoABvEvgo8xQ16SCX4ZbCHqHnMJ7Df7uP",
  "key8": "4d4NjeWtADrT2zWzUy5xu6NbTUdYGE6UP8y64SR9ECUFUxVRBGturJjfv2wui8hM5HLHDuS7SCTKMN2nrWrQnbgz",
  "key9": "2YstbVBizDX1f5E2cf2LrKkpiNmbXq16zSmfmHyFdAsqR412WjijiEMGZ1XVMWcT2MLnQwixPBvujP5UQcuJEgb",
  "key10": "3RW6iLBkpf5akEQnEPRuoqKA4gBb5S1bnJpeG1cUpPSTRLJeVo5J1iC9GTGtvgSmrWpEWKpddjfQArVg56E1HVGK",
  "key11": "38DctabefyHdGHyRST8VVBMG7XDK5NJDf7j2fK9sPwmucmTRbU9436r5g6nNWhGPPm2XiDDDsDbVUkPHkwD8eRq3",
  "key12": "4sZnvh6kW4URPpNQJTJkUfNVWv4N3e9jtSGxAfhXj8RPB63GxwmM3NHoTb5Z7224sgj4CZXb9hzWk5yNTbQ68FyE",
  "key13": "2eaPb5N9TmaaGCikX86oJGUh2uucPczJMozvqjw3rviLQLc5ZybkrCkB48nYFtJkdp2d26Ab1dwGNXC8mtegVuCT",
  "key14": "4ezdkxUL3hT6H7MNb6ipvPvtRRX45JYAtNVhVbc62L2V4e5rLG5xXrEifvjGk2RyapMDfAYZGWh122z3wWdW7JpZ",
  "key15": "5ZVNXtCagX14zcbRr7z72kbxkaps5odVHES25aisxTLCJZkbJzD8FQH6u8PYL57QYbmEJbkf8hvU1J28qFxvcSR1",
  "key16": "nDnupFFLa7uFU8Bs1PpvSSQGvr5o1nvsRf8X4K4jpUXi6urJv2ZmzzfvSjco2k1iTSiSyttEKBuHiP9ibE6wVto",
  "key17": "5HHthtjEWuaWZDMmro4HRFaM4xaUZvo5vV1EqAtfZNx8qyeyWGsnfVbMyzF1DiafXCc9eRZZsW7xed5dpLXDKe91",
  "key18": "4i1277h4beAxZVQMR7oRFpm6cTXDUHnNSkE88vHAmp68gSxd3DPP6ac2AcwdFS4KLFNjjHC98tqXeMcYAzioAQpJ",
  "key19": "4FjvKC6Y8nStwSugr8up6VVxP18i8ePPTgmW4hcYNWNHXmUvLy3LzwMXpFedYAyGXMox8qPLhwUrPLbhcZ3ggpx2",
  "key20": "4b9gFFNXpuyJPRvipuwiKkg4HeGYpWdbVDtgLNmxkPLvjsYaeM8HSyotitxqFN6684Rt4vgAMJ8xEXCyypmMYwfr",
  "key21": "4zaNYM8nUFT3sQPbvuX39J6iYU4zfhYMY7sJA6ZJBiNTbAovYnWcmmmVHN991Lad94DUEMh6QJfxnuVsc5MCsckz",
  "key22": "iKFSVRBEZqJdmH8Z7qwy8jLDfDc4TXDCt1NPx7wrzqr9kkwZ1mGvJdyikb71o1oVexFYec21zqS1zP47jBD75C6",
  "key23": "5LrG8uTfrFiemgu9mMi3KCcYLwYK9yCn1n4LqzdJHZx4nfhuYGLy5x8csmHfeKQJhgE8TcydPste8JbCqZNNPVMf",
  "key24": "4ejfWBXCxhKBsTC5VBHfRVLvpMtp1btfZHLP7v3FpUSEboaHLWoFhm3vHRM6LVFQurFqoKJMsnyNUgmQtpkiD6MH",
  "key25": "3T71A8GRXPajhqXTc2EjVtNm2fTUAqdqjz9oFRYpfCcGoiChVrzBtgHLhZ1iX2ofsV2kWDnyJVPHELLzCRpVFyWi",
  "key26": "4R5JNqeZTEi4HBY8tPmY65o7WpYcpb2YEygp83fKLs2nx69VdtjuGb4hvrNwCnWA2in8e6ndjfFANGo2eCzNtURL",
  "key27": "ULQvaehD5C7gLiEuQh78WvusyCTqCs198n8exxQ8ZqfEcHjmhaZhXaBjMH7ZuEfLZ6wNNkuroGaG3Apw2AN5wtW",
  "key28": "MJb7g9cHUNzoUyFCHdJZ8bvY97SV9SL4Z2U3MRmJFhpEqeXxDN9g7yMQNPwrELZAWxHcpLY5GwxwyEeS8N1rYdZ"
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
