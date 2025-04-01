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
    "gHsdPXnXvC31MPPmfxw1Q3FUXFvhE58NDWc1QLz69tWKDmePdXrxqUC1DLYHmMJUd99BwZvBToDYMDEecJy3D8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41fSovuJdaXUKM5Siifk2TBkGrwTHCjyhx4cRAMMwJCiDgEzxreXWWVftgxK3vG56jjqfcH7Bwzbzjvn4dPndLtM",
  "key1": "2PkFjyziwtBFHmZdJFLT9Frw5hUb8P6oDyjGQsdvyUVCX3RWVBZUqinNgHNg779cWAxGbttWXZisF2CVvBpod4st",
  "key2": "2eaQjHU4v6aK8Hja51k9wb4WSyqjpasExZzUjjCoJRLAPpoQ9dLnaaSy7zYgUCQnPfv2sWZQFjF8h2GkEDapkKhz",
  "key3": "2CGTbSe2rKAfWWJE1ZXUkDmvb6vQygwZTuDYD223tyAe5NK8nx7qwnzSy1p35EHoQGnGkvrgqCynW8KnKeKQoXTt",
  "key4": "2xccgUBmzKZPSiRosdyCMjTNJdQEkx2A9U6y6tiFXgVZuP1xApQyzQfXBWD75TAV7NpYPHdFtY626ycExjshe1mw",
  "key5": "2CX5v7jDZuPwxsLoGcK9grSxXchPALMfL1WaBFctbyEC1ZkrtxdpZuxioDdKAWn9ifVJ1ipGWLzonjtXYfJfKuQe",
  "key6": "EN5GMfZiu6Y7rkebRo79EMa2PUiXRdGgQS9UE6zkqLw9K1A7bB9SgBnVFyPzpKW3XZkqXjwSwj3PMs9CDG3SSqG",
  "key7": "3wCk7C7HjyMcHEF1VvmkqH8pD8GYSSUWZAMcHUcbq5EvFfsGhMZdjYQf83XgTneS5p4XiqFnFXDyz4juEfTAksr5",
  "key8": "3FUwXHT1MbChNMJjyfY3S4k8UgmXdpmhVgWo2E36Fz15Thsx4FAmjWTH68mDZyWZeeURoYS2NYRSSwpkwaSajThQ",
  "key9": "563qKpzbQrVNQd8TA5pvVKjH8Z1ohvQK3XbdVX74RsaknUap1UxJBfgncGQxoDpdCWsaT82TWLJnsTJXpYBKUrLB",
  "key10": "3Hve4TFtvk56mVCBxmHY4k48rnzLh1hVX8iUDeQBsNXMkGhinmdZzkj2d5Toks6pJjKZ1aTQronKowh4wX9HrC3D",
  "key11": "23fEqb5yBvpihWzEZJ6vkQeGNqLRrnLVkpxiN1outNBTsMbUncY96YKsdgkYsJgZNFwjRyMQzjSe5ZY5YhRxtmhm",
  "key12": "2tnQhMJnPZX3aukBKjoFrAoqDR9dEFp59oYKSC6mCpbB26xTDQbS4sMvL59CtbtCp9SdhYFknSM6x2owBYdsbyRn",
  "key13": "5oNzM8AA4jRZFMvup2Z3ouBzy7ZdrUd3nePJmLhPmn5KrqWmn3eKrZ3HYeJMt6Qhz549tbvrifHAn9P7mvbf8pND",
  "key14": "5eTHZyw2YyKtrQp4K9rSs4PWVifRFQToPJ8GzE1QLgeUb979ViBGypMXwahZWfa3uesuHViogVkF4BmnPNV8xZtB",
  "key15": "2uaHbfFoLL67b5RARdB4G1cw3MsjHgcDwWrXwmAZdhvLrHq1HxrQdKNZVjt6ouKHews5VJqoMRMCqNZRHrzqg6ZF",
  "key16": "Av5PVygeW9Je5XG3aWPvAVt9VAQ2Kbkk3DoYuYodyrqSi7iboJEpfajJigigvQJwWLoL9gch136tRxSrHwCbenP",
  "key17": "3vv9WL9RYz4hkTmeCsQkdk5RFW33BMTzp41MrdST4GeTnx25xDCTCWpCeyjYtrbfVY9cuVvXbcT3c72RqPuwrkex",
  "key18": "2G6e4wJFkYinkJm2m1fAffwnijKzKiVpTzwqUgkVbKH24nk7jxeGPEvaSBw2SUdKW3BMPrU9zwd72RQ5p2m9Ri88",
  "key19": "5LWS1DQ7tBz1AwRG2zguJR1jy8ybn2rNyquLbkEYPR5LbyS2SaTGo3hmntCtGsEcBiEaqVnjKWKrigsgu7ESjjGS",
  "key20": "4RgMi58YL37MRJLd6JLA8qsDR1WvLw9cVz2aptDTvi92EGbo6wwULQC4GqN1AJMUYDtZYZfUiFEFwMXSXZsoqU8R",
  "key21": "3AnHThVTmEBMZn6hTejVeR8gysfyXZjLaqri1mRq6KifYLDrC2GW6to3iYdzDv3dkxmHg99hEmVEkJwGP8SBo34w",
  "key22": "4eyC8YrGSqeoXDcVqVoVxGSnzSTD3zchPieKTbigXuosDQDx21fhPGYCSTWxMYz5GeseeqCTsKmq1HyWgRAtVv3i",
  "key23": "3nTKSEA7MLix9o5x4dW8f9hXQ729sWAg8SXMT3Q5pA7k7DAA7VkD8u3cZ9JWw585NetYhXf6fj6f5gbBXN5PTSGg",
  "key24": "2tuyTfxU8AWe5icKspwEBneResowxLfepQNRtezuKrUDt3gBewcTsVmccBNGoKGtBewrRQfoGxHnUo2r1QbPLtiJ",
  "key25": "FbVqFXiY8qTeVsBVqJaMFjSjUWzwwM7Q6m1nnFTcP1CFBVo1ow7hQPRjpCrbNigJgewTC3VtgdLAfzxLn9k93gr",
  "key26": "4rELPebQrYMX9FwKJyjZGjqw6Hiy3UJZG7DaVtWWguAyHLAJk7wmKR6cbJaA5N8wNdvNeY1nmyrHvDGuM5BruuSg"
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
