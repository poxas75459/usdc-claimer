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
    "33TrDbCs582WxxyDBqSDoXZGZqhzFj5gupB8zyMfrMMNWXxA6hXReFsBj2TgDjrPLchxameaj8eseu8x4QqV7UwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TNqf6B81MGG4KYw1SzZkRt2Q8HwKrqDootF2zpuCniGtvsUfD4xCWtP6DihJF717FrXxgrem6bCpVtRvcbMRA7q",
  "key1": "3pZVTE48N588QjJJgFPgzfAB1Eucc6K2tWeV6b8LZ1Rrz85DiPeX7tWB7r9VXFvpB29WmheWv1zorNHwsqzHcJpV",
  "key2": "2G4T85pphDh88KqqKqyjLh2y9ksHsDozRWYfRoEJCyyUW8hc5YEqvdPR4whreg5Rb4vA5ZQ8TjQCvh2H3KkJkyEC",
  "key3": "3j5P3xiW9SMjAr9MFtZChShvSqd4LjZYbvncUCjNues2XUqnYarGhx45NdKHLunswMvJZohpcgQPbgMBoUQZYME5",
  "key4": "4SmeKBLTdTXHsGMfJ1BScqMcYqGp55JeD4pMXv68sKpdJFZjWqwp5AgjmFWAuK3B6ZZ96Ubw4NzhvBX19trrhSof",
  "key5": "5Uv1KJn174tcAyf7Dep7uDHNL6Ziu7Aqqw4HcLb8n6mMfhQ6GiuZXpisv7N5ncDHbJZtc3uEEecsaf5ChNJTf6Aw",
  "key6": "5QSNWFku6GCP3MYVdHTxKFCEdHP8hiELuckcGboriHgFB9FQFrtZQMCgsMJWz2Gdu4MRqBXk5pm6ETg2ZFGtDsGJ",
  "key7": "26wbcJU3PKcE1RZgBWf7EBUQcMRTwbN7KpDh3eGGi886hjrTtBxTj6qmcLQp91PxHexwug6HYb98YUm4uStpvMuK",
  "key8": "244tuVsShA7gn9tH4BFfoCwfRKs9YmN7zYr4ug1fWX7hgFsdTM2HqnweZ9sxKrbH2ti8cYu86SHnvtBZo3bE9ELM",
  "key9": "2vJeMSYRwQMG8VptGtfV4EwJyvgYjVdTrWN7JA8zsThdjPka5JaEKVFR3HRgGQpod5SgCdFwdewHabHXKvysj3YF",
  "key10": "3EjJ1aEs9vEvH9huQsRyTompdf3xhsMHaEQj1RMfGgLZkHqEQZeUiUFPP75Z5Cdvkr7YYCH7DHr2MrVKm3965Lub",
  "key11": "5RnyVP4n6FsnWnRX3bemcbhYrA2RC8ubiNpJYAixU5oxm1av4SbwmNBL4y5vAe4neANrcuvMUUeZWjqpTu9EPjG7",
  "key12": "4TbYesEDKy3A2W45BDZnpv6551q6dPdwHz4Jhrhfqcxftz7rJ6RwASKzyY53qvJBXpqGyv464RS4aZ3BgT6P8KLE",
  "key13": "25s4UUPYkn1zdXZE3r8xCokZmfA15NQQgScqkkRSrdtudQtE8hKeUivHcArtrR8dn3ktYfS6ov2RxwRDNdCTyTy6",
  "key14": "2LJFktfDeXxF1rQsjpTFVDt4iv4GvpEwD8J7tZ42cWLyL8qiCM4uSepLArowYtCNu3tR8Wxizqu7uUwQguT7ecTW",
  "key15": "3LwS34VVQ2xSshpfzEhToHUHAmyW9YLqYLxcB39dZKwPVeiPXkQkg9RDGfvQGrfJnaTRUJZoCTfNyk332wBFU1X7",
  "key16": "3VU2R4vqsBSZFV1utwHcPoejipoa9ewXsSfUukwmJGyyc4hiEu93JWsr4xXHWNkCtpPDth1KsXHXKiKcoWbBX8AQ",
  "key17": "2f93ZEZAk7VDqepEqUhWbAkqN8fFb4KqLx3QBWPwGwx9t5f3jz1bNqRdtEEh8BbiGx7Py7cd2jcdCreFphFSH2bb",
  "key18": "Yn3DyyN8ryr9cWCPf6yG1CjabujAiZvgnP2qffW2iGebcqbiNoE5Gbcp5T6brpqdYcMtZBjX582BKMYSSjBEwkW",
  "key19": "4GWCF5gQArYyQRhi2v63okeBjkfz5R8MD8cQSUSQcVc5jgSgU8SE321BETQaeYayPjsghYmb1KPirk1tRtw4XGyp",
  "key20": "5qUcToNWFzB9pPScUtMaS38Qd4BaQatihVZGHpgufoWv95cZtYhMsNMN6S6eU3L3BShwFcVwucPQzfATxDiCU9XU",
  "key21": "3W5FQShAXeqybTzc2pBzfgor5asqEfyoN3XrtTYFCTqXT4KWmTRkzn8SQbLnrETezBUbniSYUKFPbY6q4DmK12dM",
  "key22": "2KdgB9w1y5bsioAAMFosCpRAeqKT39Efd6WQxqJckgih3rcqpp7jN4b6ChgR5QPAmi9zbZiKve9MjNLxbvynFGXk",
  "key23": "2vqa14e9Ms9gjwJrV6JXSNhTsaP8gXgGm9dtFLxhcEdWgvnBAic8utw2tcQvpAnaUt5eJM271BBXncbVBwQau7PR",
  "key24": "4gJQU8SGBsmKDmYraRJ75TKaYPhmvux5uG5dztXf43sQF2GUu4QipajouuViwPCQNpj9mJsyQurheCLEoT15cniZ",
  "key25": "33DcMKkXLtsKtFJsecYZa3sPXeuE16uGVsXGN4RNxJbmuRrhdawEis5MuFP9t57FRosabocGaEkomqoTi6im23Wu",
  "key26": "5H5LxcJfE1ZZZkpnZuxzH6rCCnBTGybbEy1t97iGH2LjFxCnszRDadoH1eeqbTHez2eTXKZnBCnzjdgJVuwrwrBB",
  "key27": "2R4MFqucnUDWHugrsxvFat83StYKtvxzhZJKJKUzBx7VBGwew2hEFVTJPsrvLc5ov5RWpbX3pcK2pm6UY68fQF6",
  "key28": "WVyYkETHE8x6XCJVbvN77bC9Mr4d7C2Np8TjNSHMbG72VjoH5f1C2qtggh4krVdW4DwZLHR3poWS6nBkaDyieB7",
  "key29": "2tS1te8urC6CNejbBbdjT65BRHBEkniTNrH2w31rZ31NVSJt39pvQ6fuDkUcsuV5xPvvY5iy8iH9ECjxfWNter24",
  "key30": "3oCtrXc8y7PZPgrriRPyLjM8bjpP5gcwyivsk9pY9wNutX4L1T1LAcwdTMMinj5sCwRtjpGn5stjAxrMpQV8kUBQ"
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
