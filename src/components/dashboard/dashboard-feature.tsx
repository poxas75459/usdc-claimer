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
    "5i9EVdUJUeYFHDdphLLgUgAXcNFrwies13oiAbtXGjf3wZyYmgKeRY6VecFXX7Bvw8HBKty3sYLHwyM1mvmneSTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TvQQrn1X23khWv8LpaKYLFryC5ZNimNmFe2UVJikTk69mwyuC9jxiC6fdeprCJTbvMrA4yWe8vvr8VrT9fZFbxg",
  "key1": "5bH2wkQvWe5FbVUvbmFncqShafDeGSzMtVfn8nDoqX2SSKC5btkqXKWXNctFtdrnmKYbkvaHyxS16G4cd3kBb7Ut",
  "key2": "3a9MUMZsnF1KXLCSRFWPJdw9sHUVudQGNxsgMpNnwowALdYzT1sxnUioiMiF6j87XhqRUFSre5cSiV9VZgBfWjPS",
  "key3": "ndtwSWV91GrwfXG9yCHnKktPK2r24rgdbBhs2tAokde9zzZxJLqTQRMfGUgX43LDd2s7sbDfdrpDdL7XRq5dSw8",
  "key4": "5RudJYgbrXigLJnacaSu5YxdQLVY1VjGJtjpBTd9a8rohUaUYgAf398mXmAyTi4u51izuDdqd1qwXEkLgZbzRkwK",
  "key5": "5Q3Kk3Xm3TMFxr6NqmDB34JdV4X11kDQZCgiXMqJyA6VnCvcM9acxV1UZ8kutv2ThprAES1LaCr3GH6c3uFXC2VJ",
  "key6": "2rMhy7qCDBnBkLwRSc9o2dELhKCZe9qJVM5hbefghThZtiGHtoMNrxNntqTAbXjudLDUUbcJuwBjpSFRrNxZjkx8",
  "key7": "5nKond1mveUQb2or8tjSqJMY5xbChPm66iay41Rz4neJUgt8tptGVJKr4Te7FNr2NfkdHmAn6Kdx4WbsoZYmT2RR",
  "key8": "YbkuMCEa4AaoWufsDSNyLz7PdvXxUgTDAvPjoq9yyHAnjicSnyK15xWVzXo4U3p2Yn5QvXX1uaXFkpUC3BK81Ra",
  "key9": "5GwjbkRCRHLFFobFcQG9789oUteFBRiLo5SBgz2nuemBDTzSkGo734UaVFUmnBWZ4eqpiAayNPn99PpM68EdX4FT",
  "key10": "4zj1sB66Lvxzw4kMMf2CX2nyCEqGwVckb5ZcnrYEtMAazZhYDEzStj8nziV1si18b741UinVmyaGkPrYrFuByEw",
  "key11": "YEVytjPYYWus2C8zY3y5eTsjgV4xdG1whEN9sUZK8HdPmPBKtWPkM6BVi4ERFbB9WYbhxup4NKHtQKqnjME5aD4",
  "key12": "AsiQjHvAe9GG4f36vJmgYge7GzHaT18HWkBchUGxwSLtNZ2smP9nqy6t9HEu1T7d6iihWhVLSTg6CY7wNd2gceK",
  "key13": "4bFVnCf2wN7gpZ2Zkthp1iUE2zLwNFGPMyTLEBKkpQooKix2HTTL4V9P9X4Fs43pLBFGSr2NV3BgM24sJKxoriqe",
  "key14": "5YVVDUzBiuieWq6BsAfEXAuYz8L2eZnG2q6nASFJ1yYSu8YKDaiEyLcYsKdjMfdUeUqafegJJxp7FHJxDwYrof1L",
  "key15": "4611xxGq6utCPAqk3wdJs6pm6SAS45dVvNDxXzyuw71dwD17XHkctiYV9RUuCAMu1pQUWxCByemkQFiGnuJXPxTr",
  "key16": "61t5671LjmFRFTooEEgQVnqvtN7nPWPTcbHKrDQdRSMCqYynfFowsc2uTUzjdoYe3xgdvrpYX1w3nyMkLN7vUfVh",
  "key17": "4sd7y5yc85XZw6kcm8yJvLAZ1ZJEYV6JdJGnPyQrdsjKxQHUrs2W6yBojZLNejwhwo5BorGki2dfsUrfP4i8H7DU",
  "key18": "5XJoeDG5HrRRBLdoW2JjAKRE89xCG77x4fKJzbWDbYtkEyfVQBRjfqARMMPstDHCQgEFDMeSiieoCKeQXR6rJmLU",
  "key19": "5i5YZpLaeA7CT73hwrmTxJeguBBUKesSyLcWY9BoZBVXutB7t7pCoqTnuvSeMqD6gECQqitb335UDW9h7tCSkUYR",
  "key20": "2QQn3D6PV9b4mDHc17osuVrwZTk1WgmBTAK9KYpMsxmdVAfoFhkGpUZyyRpg8Q9HdZEFaptKYuidcQuLdNcLwPUJ",
  "key21": "592WKs3f2TaLVb4AkXy6RKHybyzmtBoU7ESZyXkB83WmDQRA1VKcKFCLBPUT7o19ykspENLL3fbJ34iLv5jJKCwe",
  "key22": "5uCHiMQn3qDdmxduDqiiBZeaw8cqxJVKYSq8pkXDkUqcmT9RXt1nMkiyJVWWSJwWpc8JsLAEtJPLLyL3KepBAdrH",
  "key23": "2YhardEsDVceQ7ciMppqq4TnNs1BuCy1QaQVjrtHRVvsvCMnUqcgXZXbs2PKoY2td9sGmxQzx4Zo1A9x2vNJcxSs",
  "key24": "42Uzk73SBMrvE84Nu1Hf8925iTCeMv8SPCM7cnFRHA2e7XFbxEfZn8ghvfXr1d7XrHXL2UArjDgkWmwhcGH2L77q",
  "key25": "3hu5PYRtZwPaUvcEGJLSYd2BsNEhqei4F3mKTtkC41BwPEjFkcrgx5vttHKbzz64qQppzabvWaq2trS59kjfTpa6",
  "key26": "2dhYFwqa3e84SnX7tSNJWuMYLMFFiVejcbnXUzCknyJ188SM27dE1GKL2vvd2NuqcKk8b8MHNBuFKPwe1FYXnJxx"
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
