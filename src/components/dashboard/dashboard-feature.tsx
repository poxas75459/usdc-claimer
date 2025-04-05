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
    "3RaxLjdzWjLChHnC2CiMSb3qjnf4SzuyH8R1zgPsJD1vX3LTYTUkWYuyFjZXxfKkg1bhwWTrDRc4e3kEeRZmnhbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HMREdGjCMSSxNY71f525hGFB4THr2WHraryUaAmJx6zLD3MhMXmM7dif9r758g4U7KHkZZ8sGmhfD9NvLbuRLG9",
  "key1": "3vBJR54KzStKxxEpBdcP3LJwFedmxXGBgiQpXu1Xe7FirkJFZFQwVmJp8z3VeF4VQ3Z41a5DFFJ6fJfoehhmoyqT",
  "key2": "5QpV1CVyAjT3NJUEZsLgDWbL9DtP95f5hyTMS3zh5dRu3EprUJWtCx4XzzUfK1svB4Pa6wHjXcjUqGt6u1v1k6b",
  "key3": "4q8nc2KJWB5NwSXXd55e1ZAUf6KcQy5itpa84gYa2YDRfMibECvT1LaCQxv1GsN8MCppyS8FLGogT143ACwwGzNb",
  "key4": "3FajRQ2A97NAeSxzrwm5uUJZzr1LZUSFhooKmEcSrFBzXmpQVJYXfgXZQQtzTLcX4jPY2fgtYLx3kriPD3AgPhoP",
  "key5": "aJTAa7CXRKJHeBcVjsDSyujdqWJFvKQGdFqk6mcav9iQbgBwuT5JrK6dGqFn1ErAP4JX7STPDpYkCGjYJnVR14q",
  "key6": "3Dejsd1sRpBaUXi8s2DX7yZewwfTouFZdVbVuDVE8JQh4tKbgrYAyYRvBsHR18sFdo4v5Un2Lf6XtYJakYV8LCAU",
  "key7": "5z99BrJYc3RYfcx4ioA4A56LXSq3KvkshYPN8BkZXEnZBVdNoD35K38RJCYMFJZMgciZ8c6FAJWuATAgdyRVMWgX",
  "key8": "3QQvcGXTtJ2CwqHwLPe1jRiBcj1aEZWzCAZJMvgF2WoearVoyyVEhMEnu8g5vnpQW98XtAW8VYfErMjVMHSw5qxh",
  "key9": "2eHkFZUBnxN3A9MGRKfabw1BkgVna26hnCyrUhXHb5n9qedX1HszzeaxeqPQLdKPmusb65WkhDL3bd76USuZqj4",
  "key10": "2rX1HVD6QYd8p1LbrbHbNoNiGB4pScFtwHrjbkdkHzd5JFddy1khG81z3FE7U1BL8Qfn8J9LzHBVFCCKMpFbTeEM",
  "key11": "2TCQQcQj2hcnQmBH1g3pB2NViecrbSUr4PZs3oABdUNKFEHaN3D3TfhcfkkSqSvERzh88uf4gjt4qEw5NqSm3n1S",
  "key12": "4iLsDyiNRS6KocGkwd1XrPmjLBXqdy5275pnmsexLYsnVSCCfS8WeFDwgRAxTWpkg3QJk4Jre2ynDxe1QqbMdFHF",
  "key13": "2yUNtUX4mYrN4QUgoquBdr7UyjP6xBfqEsSmgJnzZbgNTrvHrquDeDmMWV66dWdiQudeyNkgJiaN3k4mxckFkonm",
  "key14": "2xNv9Ye9dHu8m5YyFDiW3iaX3oJW3kZpbUiNZ3bFxDg2npmFoadsfz2DXxjJfNDAgR4UUEaDmFh62xAJdCwDDVVu",
  "key15": "4U6MuDBmoFo1hKthDwhj82hjWjDhtiNdHgCHARSeB5KXDKcvsKbAxodba1WQ2nciU5Emgx9vqnLMmZG1hy5J85Q5",
  "key16": "2Kb8AVUoapK5kAkmbKtbuHuUQw851o5yT3BiCrUG3kjWZE5km2JAmysWgFcsRroiPRDFgfa6angk2YkiqYT2vVVF",
  "key17": "5HvytjGqG1cA2NAQeWaEj3uGY9mSThLaWYGHqwfgTUkUcjxXEwK34mfMPTzeuPFBkgEWsaNwU2hUCuik6aRnz9U5",
  "key18": "5o6mScvWfAsWpTto4aUfrc5rQrpU9thKKLXgqXu5wS2F542NHs78CUWdTRwXqUfVkikhUDhNKRu6AfXx9LjeZH9K",
  "key19": "3XCyZgtEfBvZDigpbycdriG21VVKBgXRSh5EU58DZaqzcn3n5fZ4UxN5EQp2gWicJzYBTonj8GzDVn6sspQo6DH2",
  "key20": "67XcGvzpK9FkPYeuHn8o9d7ZjUWCfsRBPUMbV3Mk7FaXNdLTr1tzpE2V86YcbbC5sn7KaT98zasdNkYYwzs249Y8",
  "key21": "5en4Eu6pFuG82s8H4XHVZ4EZoYBBeBiwfpoM4zBB8mrVWvRhA8w6uB5SrewatHpfenQBbcyjGYeKG9dc8G8rghJ5",
  "key22": "3KNkLgUvdAZMvXfeJxoQXbXSswqtG581owTLo7xakrtbAx2nZpMCnWZ8DbLmhLQ9bweMfMWA3DC2MXhErpAJ7mrt",
  "key23": "5dyjL4feqvgQ1B8fzJ7bit9rMfBeCGaG7eBvUmeJVUk4MA4Psd3eaRM9gmtAkEUWWFouKmM7Q9MkP6FqqLEF51pW",
  "key24": "2Md4hcArE2r5UpE9xHm4SSXYSsn8ebn1yvZ3rfp5AyJFDK8VyGbSsTPdUNbgWRRpF9pXB2AEDmBxm4QYs7k3Yp7r",
  "key25": "5A3AcVy5NSnsDnN5pUgo61RUtpsndF1pD7fxguqA1ew6KhdzDcckAyN6u3B1emT7y1WMtABxdS47Sjq6MabWQ3BY",
  "key26": "3qErEFERN4xhJNAwau8L52WoWGeorWjA28yRPeeH6RaXwSoBDKqr7wckj7N6Rw5PPZjEhzE6h1rZpYyuUHb9RfL3",
  "key27": "UWYPopprRvC1S66eoasb5iKbtCePseaDCJDvPQKECXg68vZ1Kdy4Cp5Q6KMCEVK7djpPMwQaGmz2BMnKt1TvSx6",
  "key28": "2PkFMxzrT54PD1cigjsKV3t9bFkJgqRfWMDHqXRfgLFefa9FXms2m8D1GJcwCkhYvZkop22bNGkmAaJJvz72bmt2",
  "key29": "4k1QvmSZ334V26wbthqGkTCQ8pcPaLDV99YHCstFu3LvFwSJhbjmiZ7bDJFTFihjyYpcmAUvYS1YQrC5ynPeZ1gt",
  "key30": "W6GcMHzAYhAGTKgWs1pTNJPPXFcwyDkpYsM5Z983uw7hjkRedRR6KUsmf17MEZBSnKnKyLDCkB3CDCQJgNwdcZU",
  "key31": "Tfi1P6t1GhKCCDNeELj8c9Av5ZEzpQZYrk2bgWttbmqqfva1LroW6GtAgcf9yjBhU8J51EMBr29wTNkuUXXUNwk",
  "key32": "5u4X6gMvLqe67ESZQ7ZNRvsa6GmiRf7UsmaH7ExJM48tTQwhgLXv8BeB1duVo1wZXmPdaFoJnb1zDUT9RC1PkRfj"
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
