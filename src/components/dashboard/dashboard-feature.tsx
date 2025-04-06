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
    "3vnSqk4SRGFZ2pJDeo1gGYZLdjHcZVnypE1HBCKFLStGiB1e1aGnKKgiS2UWfMVg5FTg9TUNoddKrWSbZ3kr4oUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PLP3r5kztF3MTmfCDTk6y7VP5Pfvdg9uVBKHZcdhKgCv9qGziNsCpjawkAFxnKrxnJCLqBrnuGmMZQ5gmDCNHo7",
  "key1": "3C13zVdSJQEG9y7d9f9Q86SPn3NTWmUi9xXXjdVCWmvNmF5AnTjtSo6Zmb1xcuUJyvHXbknpd1hgkfmsaczCNp4F",
  "key2": "5a2TiVpqQt3bq1C2zMWBdvviqxLJqxEs4tixkRhLUAmnufQnzNjVgDMpx9VLNTtDyUT5MCRXirXwQnZ9fbAJe9Li",
  "key3": "2JF9VChmZ7PBrt23PCNqXKeLzu1ZmLD1dGQ8JBQMgiTdKDT9xcvgarEEbMSFUJNzLhumDUzbbYwoHgLmwHrTnbeJ",
  "key4": "4oey19o7BSkoaHzfnGm3pgVKpPyPQfoez19K2Y7n4LkTryLq3AvBgFraH4DRqqhwX1kPhjNb5HSi746FNw3mcfMH",
  "key5": "2LfACfRzmXnmkgbejY9wZ58Sygor6Nq6mPbn6ppTZpcdkYMJAKC76YSqKwuyHSwRDtkYvc4RdFascsnha2YvLnuv",
  "key6": "tjazH7kYvX46UPtK5xEZiUazP63YZHeY87Gcgq3oGJ176dGFDLg16NzFwhU3xwVuS7u3SBitdc7adN7iq7xUo5h",
  "key7": "3bLQGuYLPSt3W1rZ2yWUANhjwCdev7eYxek2PMmq5yP8MwUNBjHhq1YdhooDz46bcKUzLT6WRAcZY4ZCBCgSCXbo",
  "key8": "2yqT4W6qY6KtZEicinm5RKvr8GSBbifDbbVtiZg74ooCgwShQAmbo8huKXFGMGNh96jn3nbvzjq5858TuyNM8WNp",
  "key9": "5nQXefzAReErSRaNz7bv3us6pDKQgoKgcPQamPk8nneTmpUwXiczJjJ82B3ybZiBntoC6kqsZzVrMJtrt6KB49e2",
  "key10": "2LxKuQt2f3xvtSgofWGUYLMDe6Whqymsr3D2kFicLnN72qHnphW5QyRzazYh15iUXV7bb8P7yKRAW2pAEE2P4EUP",
  "key11": "2VEA7yWQjigEW3iit8MoWrPzMRT7xbJyVvkJw6cFbbaCs7nNEMDTQY1rAUPmAzCt7V2zsjxZPwZaoyjWBLQLqG2A",
  "key12": "33iwSE5sUweRTuhZEF4vjR1X1xp5JvfeM8Vq1TJoBbTTD6HRyT8frY7cmpz2QotQKNmg3LkzbgDfUbcw6CjCWMBa",
  "key13": "V3FMkwz9iN7jiwAjPup9nHpXjKxn8pL4U6PnPNMFc94kgfaG6LejREyxotmhPAyhGj9KR4f4aE887iQgJPM7HKN",
  "key14": "4LBxeudwiH4pyS1C4s3bqDCWLx1hTqKckoYuY5zhQnP3hDNMwZuaaUNnXvTcXp4JSbXMhi5mzwnLCtCuF7EHhV2w",
  "key15": "4n664Wj2hwi6uURDJ6UnEFRbginv32bajwEpeeK237bdRGd5mD9GvSwRJc8MoH33hpoBw131wuRUL6BJhmQkEna6",
  "key16": "2c1WxwXEUAMERu14ShkbyFtxrRVHxvx1NLRoidzTBLi3iQJZqUWyJZryXP9gM7X33J3VMvq7fCBoo9qJQtjaVMUp",
  "key17": "2Gi2s2Xfd8cPu8r8PaFFv1VahXLmi8s1fXEqSxv8D1geuMFKqExzyJfpBvmcVZhm5P8WigFiDeHzjafB6HQKJjVU",
  "key18": "3snTbcftGxh6ab2C67Y21xM5Y48GNiu1fjvnfEcWABmMQ9ZSDoo92Fb8owiccSFA7GHvNeUG6oAbX6uncfUrLbWL",
  "key19": "51TjcH1yasZHC74L42QBcAw77bdEpczuEfcyoCAyMtnKms13hwB6baw4UgDdKY2kJdTN4VueVZjE6uK28XsAMfMN",
  "key20": "bRMBjR7LCUPJJ51MyvgXqJzPwjEjSD71GUjRLzH6tfDRRzruDDJvKUfKhBBs5eVDKn2LnTiW6KAFGTDnuwgysuW",
  "key21": "5KDKpbUC5EBJ43mpDHXTt38voRzUz96RtFHyXsjxEqBQboABem2BYyaiDcRsHSrruKT38TTVvWVStrPXSdf21zHt",
  "key22": "4sMUozL9ct5NPRdwUHzsEbvNxvsjvGx2L6TnDXwFL98wvw1anH4otCpGsKbhAUF2ZKpCG2ZmpVtEWHiSdvRiSSdD",
  "key23": "TSWhBkzuCtypA4J8nQWvHNEqdMNc6zJmNwmARqYzpr2SGkFRmy4rM5XidYda9rVA6yzpt8TPrds8MJEGLdAwMdj",
  "key24": "51AEQSYX2TC4DwCYKBddKUKvEXZdi36KdzSnNA5aoNvQLfL3WdguELpLaz9XBvv3Q4QtuEvbRQMwCRQPic2zAhV1",
  "key25": "BpfW2g8yxajro5MC7kavdFTmD6KS1ohczbXsvpQX2eeyuSiRjLXnUyC6ByvCn2P21251HBjJ5DWHBdGaaHLnKHR",
  "key26": "5hUXBWknhKiQ9dqARBkLhZtSS5AWhEFvDfSNV1axn8rosThL4Jd8z3SUWTCnwPRhkCGhVp4cUx7qQkTV1weV8JsQ",
  "key27": "3R5yJYA1veDyqg2vchVAz9RQMQN2Yh22wZmikdiousCFJM31XDdo6BzouBygc5j5rHCmumM6mdCcbcXYsAjoi2fj",
  "key28": "3kXGkD8B6BmynUv8rh3z3TXHSDQQKWsJ2utjvm3ri2hreyeUVFs8bhaXMcYr3utdTFUqdAsxr6nTDaJ5Uq9oX5wF",
  "key29": "29mtBQ6ytvssPvwD7UGQRn4V1WqRGkqLdy3Ma1TmPLbYF3zRcS42VV4bhDHVgKdLtN9n5V3A4VTLZUNxmUF3TsMw",
  "key30": "3ee5GX1pUr2V6UiCMMKAkPcqnhjUzPb6riZ7MCeUSoAjWTEWgndQHcE6M2JXVz3XBrQ8Gajadur6qZUhkAdWgATi",
  "key31": "KdL17esPWProZP87BSFWao3DRcZy7ceYP22GfbiHoNyvehaEPxK1FQLG1w4C4dosZRaAM83rFeeTw68tCNbkeT7",
  "key32": "2N4NnU5W2XXNayqvywi8MCVJQ5qfd49AD8oKdwCX2ovXKqysKEJ5R865f2XfFYFP3N1B733kYSX2KAaivuaPXD4p",
  "key33": "3oRVt8rnohchTbSbJKSoPDdaQTFq9Jrjzib6mB6LoRuNZCsEGK7q2NxAY3qau9ZZa4wkd2JohnBSs6XaUf9YQSrM",
  "key34": "3SV3bEHvQFpgbbR8rdZ5kanBZu2XKRvoRNg5iyaFAxpUhT9YDaK3VhvugHpMSBGQ4GUzSL2XyjkujGpCTJtouDnF",
  "key35": "5E7oCUNC6sCS7rdM98ttMt2kZqupeo4N9fytVW88nPcSyN4LKZGDLmrXfuyA93xMvBGTBqhsuG7DjDbeY4xZC3qe",
  "key36": "64Fdg4DLmup5n7ewD8yPgfCHAytwbrM2T2f9TaTsd67uYfYAEiDY9tRZJBsE4AWbgZjhU5187W19Bp9RE2ZEk7CE"
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
