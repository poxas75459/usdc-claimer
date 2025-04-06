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
    "4SfPzQjYrwqx6xtrSrshR184EZpSpQNccySSAtRY6iKNL7A5Ywbo3NCFvZa8669j46ptim9u2AsbxNhwDzeBwwnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BYyVd9W1Su7By5Y56dbcZh8r88YujZ1wrPqeV6Ez35nmrtSwQCiRUdD1867cbfi7qDGTqa2fnsDQGyd71sZJDUb",
  "key1": "oHa3fc3TXMrUgvgGhAJixZNKdDgDxjs5eHtTWqGccfRH8UYtrthTrEQk1sLjaFHN9wLcaU27GZq988vmKX5PrEB",
  "key2": "BKGSryJH6JgpasESgftnfYhYp56wVsVtQSTo5PUEZ24JHdcLgBUpBXXXgK5VxEf9qTrgycipbzhyf6ui6KXsLRk",
  "key3": "5ER16w7gFsqLN9Rg39Js7FgucVmUssS2tLsdwQQVMPwZrpyadfLTzSeKsk7kbJ8wCbHHj94eyQsQaLP45PGRwpWb",
  "key4": "3X38akLCxPcDUiFGA4jYuww7Hxxwkg4cHSaiviuxAJrnvuKEP1NWsyAgjmpfiSVSbdxkNtTDrurBoeoYAMvZtaHf",
  "key5": "5qzTnVYFcsrX3adxcr4kCF7Tjbxu9VpxkhkdsKxnoAtQoWXJJ7aV7Ym6FSvr9kCViaWrAuYL6D8crcaY1envdwk3",
  "key6": "38s636NkfjXrnxranfdG42VtB9H9ujGV8LBPJfWqmJ1V9RqHhmcPqFszXYyQ6X1aRW8D5NywBETbuZGebVrC431p",
  "key7": "5jHaWeVLgJi7mBWQvFbhaA74y8SCrj4jWUDGzk57LrEMJHGn7yT5qFprJuPARE1gkbgw21gXwWjQK3epHTbQrd8y",
  "key8": "emFfYstGNYFHQKWB8ojAazjXQ2doarHMqsoNxngBMDwWA4WY5aNz4jUUMofQ827e32y9rdN7Sswc8UHsnpbEHtc",
  "key9": "4CHBPpF3xQ8oh1jRGfnMRubuih68G3gqCLxTe2SkaZePprWrBP24LfZvNx8fgD1Gdw3SeaNnRUqtCnDKALxFpthz",
  "key10": "53PxHsdpqrap9qR5FPbKaTTrKJiGff3Bmw8CCh8hCDeaGpnp9ZGNTttaZaCJr4kQzH478soaU6UYu1PD83wUYBfT",
  "key11": "3aZjzQ1Nz2sQYAkuSFq1SG2M2cMWHErftdPgNW2sviDdqBY9sAtHR13kpyW1cHvsYuS57XmH1yCQBXgLDUAwq2QM",
  "key12": "4ozAkX7YWEkbyLebcisj4dvX7dKRC6nt79mtatuoEkonYKNC8CF9Y48eit245a6Kj3KNTSx6AswsPr9k2c3Nd5Qb",
  "key13": "3uKT6MS1EyyVwscob7vskMDbXoqhaxNkENgprNQrJFmY6ezK7QMFyu2Tic7z6tPsjVdoBT7gM3gQobKsfeAwixp9",
  "key14": "2iZRPte2EWfAG94Qh4kK2VjndQU8UZwTEQsvtQxJ53FEfbpkkExycwrPsyd1PX9u59vt9XsoxV1qJ7ZoEVAvLeUw",
  "key15": "2TQ3tGAF9jGwtkuB7xXUboSpkNo2pAsbm5hTFiz7JK2NT9WVstLSb2UHEPzoZ9mWCQCuqKLcQRYWD18vh3rmZvWH",
  "key16": "cjf9CPf1xQ5LcsbGok4ed2zmFEVvcT5Jz31KnCQmN6HHSH9vCfQctUTVP25LCB7tMFNpeq6fYcSrb8zi53Cpsh6",
  "key17": "2zqXDNXSNC5qeJEWcLk7bSwTcBZEGxSVztZa9GniiNq3jcgz5jF8ouDrNGqJjns2xRJHwMvMS9abu3g1W6H9uFJ5",
  "key18": "2fMbks5p7Fh2Pq4TnephCpgoBJn9z4LWvwwvJrNXq9U6rFdMLW9dQw4msM94oeumG1qWfiPS5Ngi1mYB2YJT8pXu",
  "key19": "3r9azLhemAuLokSB1GETynkaRnd9hFsidwVhDAGCN88yQ2BYfzWjB5idb1HfGf4Ssw392JHcCkT3FiZgxma1ECjZ",
  "key20": "26Xkq7LmN1bY1zCMUCQe7brheH8PHSuE2X4EFUYerF2Ab9KcyVEqFZJtnP9BzRdSe3f846kPVRBzM8KnWkqG5wtk",
  "key21": "5SuSNLYXNevQZ6KDgFmovt8dYHvZdXNs3GPinFR1t9RXgT2PJc3wc8wnP6bu7cCXG6f8BzZ25qRGNAzwj63ZH439",
  "key22": "5rH4sxEvUZ16Zr4gpSN7usZxUQAQecR8QX5wbxcd2i3DUKKfu3VNXGy41uUp25oRwirzmMLPCx7XmTabRaLLZiTz",
  "key23": "4GBQSCvHEdSK4dYNe6sB6doES5sCgrUCV4P1112tCxwoV5krhgwDwH5T6N7dig1xwF6154TNxWuKRcYLgcBDY1aF",
  "key24": "2cKTfnxrq1X8H35XYbhLPnkmGnHM3UXz3F1LkyJY4QE45oWkzK7Uwupt9u5QcrH42nA5rLkpPDYQdpQqq2iuJPqq",
  "key25": "2LL64UjXx18fS9fB4xASD7SCWFQBFsQ1hzFzTf4Co391xkF1J9cKFi5c6treyscs1tbnZbm7Ysiwh1dYx5SAUJv9",
  "key26": "4JbWCxrDWEk5XvU8cnhdEVUs4HDXf86uC2mKTiSJuTGH2bntvwHeWr6asyusFAye7d93thRWjQ6uSXSNZrS37jcM",
  "key27": "3GJvPWSYCbEgE4TzCaUNN9j182TPfUHAsVdgpmzSVbYPsSofXVXnC4aFo4993GPxp3ZgueoPPwSQTRFefWZVkKBv",
  "key28": "4ZbqYS4S9kcybxJ6ktiiBHeTU3uf9FU3wukXdKed3MSkPPtKCoVfm3PcHWAFLpzHGzBusPEcuPjauBP3Sj36z2H6",
  "key29": "3QE1K4vnhtSvEbot6NfiBhep7Jo1LJrwsLEWHRi5KgcficuzGMnX3KxhJYUtzRmeHWJA2VZqZd9s65LfNkf5tGqg",
  "key30": "4R5rno16fZJDPKsMhW4q1gjUNZp3kyHQgHgH1MXZYFAEjbaDsXu5CeAw3h84SiMvDFu29njjfzgV2vc6LQuxXBhP"
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
