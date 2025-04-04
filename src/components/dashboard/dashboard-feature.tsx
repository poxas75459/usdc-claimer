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
    "2Vvu754VoGLJY7kdNFWKsupSmcEDkSzMSVQjrfEnPAzsyjDZx89r8FMFT4DbnjRRJYYkqVvZNUkZ2zRkzDSpeqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TXzVuvoya2jJLykR8eQnUF5FkJRH89Qs1XfZAZxTV7jMZ6J56RN9XZoLsQsUJKcHYSpkqJwAWZuUJrzLvgD5FiP",
  "key1": "53DyfushBj6isPRapnikEM8F88yLqQnASbbPUwfRYJDixV3nnRgARd7ndJ2aYR4aoA3jqLUdRkvdPMhjLirxED9g",
  "key2": "zqHd7GktmCLkTFL9QTBs95Rr2mbs2Ro93TjgUW1Lh56b4DsqLhUdWfcUNdK4DjBFjoawN3QUy8JjB4KQS6SPr5Y",
  "key3": "5sYgGEarecw4LXqchcU6GaftybC94LJ2KHVX9JhzwypKw5mooMVVAiEDLX1fbCZWDHFahhZZtsBT37FSUrLcegGH",
  "key4": "4Wsz8P2RwVJwu1YY6b8ezFvvGigxEQL6tjQvVj89qBcNykuRvVR43j5ZhV6g523An2SquHu8xV374kUCT9DLZHWp",
  "key5": "3yJHHxZUr2fkz9HwY61LSRYb7CEGiNQVBUANVfJ2D5n1sQpggum3zrdoQWvFw4A9NET1XX3BSZLZxKaMs85mQ1k4",
  "key6": "f2vHXyqwKam7omei2CpHPbLSabMqvp78Dwq19HLt5kWVNkTYrKRmzZsoUKyST68uev9nsyiBqme7Pfw7mz8mx9N",
  "key7": "477soPY9GLHGRNb6pnoMPHxQi8sMDTDycZifT7B3dbNtBPYZiZoi97GPGQQjmxMFy8MStqn24MBWgonzNTFtzQsi",
  "key8": "5JhSrTE21RyT9jKQyXuiBvCyoerX2JH93mKgxQVUxoa6yU52JXjDpf69oo3pKCp4HpNLZeBR18JJuB4yZ4L7cyD6",
  "key9": "Do7Lqy2j39pDT9Vg8ZJj2dGZrR9iKiabMvyghA1Lhi242hKZkhRWTaMjiQuSruDa2L8BwqnkjcoNTMDngKmgYQt",
  "key10": "4Nd5Jw7vwag8qTsbDLR8oZpeQhcKztqz3KLR1EVWAK8WhVpNQamqPi7N7vyaL6ZbUGYbyZayCZFCRRYJkgU7oKAJ",
  "key11": "3kFwPuhy28PrnJRmSaGYXiLP7QvXK9eGaVymmePRvWXDMHSSxMNpH886p89UsEURC3jv1TnLm47sZEuyLgQ2ZvXJ",
  "key12": "5A79TdhvfkSgBTghixVN1HtTXoyfLTo9rAWgxs2Rgh6CRui4cXtZ3bkx69wbKTDhHQJLgH7EN3jwrSkgUjk6WF5x",
  "key13": "6BHkResd4sdhRoFLnWNg3vMeEc8fAKhHqYYBNJ12bbChXQfZ9sRc7XQor3vW3ZjZ6RriGaGN6XTARx8iVMgP7qU",
  "key14": "3zDhorZrC7bkwWA4ykNHgfompoDeU5sDAwHsoTqXxQBSxQWQgvzpbKyQa9riWVEzzDATGnn4Lk6vJu5as4ySVdDe",
  "key15": "3zqrCbrUKQLnirRNFZENKoVVpCUvRTqwWRRiEFQr83bsnA6QeXhBbuKswVLkHXqd5Jow4NDL51gcg6GrpphmHbyy",
  "key16": "45VpAJeUtSoyNEVLyyQGphQw78kWvsicqgqxfCptWZiNjUjHKY6Mh67j87mxSGkQDA3mBpdqfC8YMWD8PGoh7ZeW",
  "key17": "3MmXpa5TFFzFvJHJp8NoEJek5q5YyC1WZs2RrXZFBZ6PkJN47fhrhx7V9QTK8AospC7C8nCUfLVguCfrHjX2y9at",
  "key18": "2Qj6E2ELoedi7dLhCYdCoBUqGvcNsUqP7d7tK9zQYkkXbmzbMiKUjKcbDMJVtk3ZEiFCPS1Dh2ptrC1xhKXSpQzX",
  "key19": "3jUFromrjuBfvnqd73U2yNZKjNPiHtd5kE4B7zG85Ccv61t6ccJkbEtLhQgY4SgUB9Cvu9Mi3iEZBnVzHp7ey8iq",
  "key20": "3uatofa8rtF13WpTatgfwmj6XvRV92uoyBmASPtvzymfNA7sG6SgMyspw29YKoVLjcjwzA55HoAjm3sNJVPuNqBf",
  "key21": "4msB59Q4rN12C6PTYcCd7sQtmYty8ZSeRydWaqv1mPfBA7taG79kPPH2PSwDD1jngLgmkrFYEgEEKNAVsEJvBcHt",
  "key22": "567ZXTEqxWsM3sAd3RjkrcTfGUGkVR616F1Q5je17efA16oN3eRuCNr87epw7Q7savmPrZRoURD5HbNVLPEJZHUK",
  "key23": "3CdSkxY53FGYwDgsXwTaVBUm9AoxUEvSDvP1ctSx4rrzpCNEJ4giBvVU3xrqfvXoTJjuzh2iMKDVEjSDcEDFzQaY",
  "key24": "2mts4SwNvMK17XdM3aoR67oVBhRwc6SyamELFhuJrPbEBPZJBMh4Df1yteaKnzT73kH1VyA8BUPZkezEzG6fw2Vz",
  "key25": "WXwBAMfg9LPs9XQsfhnN2v6z4uwyVEhdbJ9iDq88U4GHHDU5zeJB5669Btr7ErbNq4zpcSuWwoh1wCqa3sHGtJz",
  "key26": "5DL6xiVHHU5AN7xYxKU3D9Z12HaSAww2dMWC55gar2LQGrfXEVcXeshRgTuYdtd847ioxCcEQNxAcDm673uSiMxy",
  "key27": "MKxfP2GZiRyKpHFHyLTwFJoGRnEh7DvVkpi19ZFHpzNUthFVa5mzDDrvUabKBtZnB19ya5eDchC9Sbw22Jma3ds",
  "key28": "2vmgaR5PAC4hZfVauWAzktMtJjECeaQSsz3shXKgwwUnBPu8Fz2gUMckhrSfMZS8D1RJWGrpnhY37fxqy6RCJPgi",
  "key29": "5bayuzmRpQ1zvMuyYU7yeiGkct1d9wztUKHxrRLREF99vdAYThMCwYAPjmL7UsDQAsbACusfmTx7Ge1BBt4MP4Sh"
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
