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
    "23jVhuZropmnzQ9kidciRqL4iZBV1JLKw2Fm7DBKpr4qLafp8SE1TaAWAFEqN3G4J8MJqWMkhrGyK9GCrAeJVUmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qFJgKoA6nJQwDQmgQGkDL3McoFi4nuCjAMNjicmYiAv7vNu2EYczHk1mUXP5cS2Q9ytD9q1PdumbwCFVF9wHzeh",
  "key1": "fVNrGyujRWFt2V2RezbBQXdezvWVCxw8MaXAZTcqMBQZCHy4fHoBDei7RxwtHEQCVq1DfwYeT1ZfMWVdhnuutnp",
  "key2": "ZhhY5RQ4v3ce2dbSqqrn685z7HcK1FjnomFQMKKdUboib8joH64PB3Rjmpr49fwZ6tiTjVQJkDYFy8Tpdgs3Dg9",
  "key3": "MzrbZKLMyB5ixkPYRuGZVbtcguJY1NbfW9hZXp6YwcpSZAWBo7Pjhu6CTyYgpKq1ANb8JDLXudPzSLmGbJXPf7B",
  "key4": "37n45SAGoNziR9gy2dER7v93S28ZNnZrVEjmK3zfSuet6ZVse1N5h885nezVMZNCp19Jyv6VXgxuCsCBT2HR3cai",
  "key5": "5uqSemiVeo268m6iFGq8oa4UbWT1Fd32Ddr6CdqXpe2A39EsNGacZptsL5e1DsniGdUUopTevMr4WcUxLpYLHEwM",
  "key6": "fHYzUUGNQUUe4xi7jCr6sYrgEr8JZ3fxUuYiu1gcocu88PyraiMNnm9RqUggkUfU6GYLkNK8CU7m6rdipdP4MrT",
  "key7": "3djogDQJJJyXGragh1R2EzeqQoGcEJyubv5QBeaCDxb5PU4a4p9FU3fvYtEE7dB8BaE8Amkhga1rXeW1UuJsh62a",
  "key8": "5WhpiqJCJ7KHPa7iuPHF1NLvEq149o4H4WKNDvuZRGxXn1MgMm5kqULWfqJz97faDxVQv2Bh9aGb3eGPf4VzFRJt",
  "key9": "sEq9HGMsVj51n7bsWwRhfH35BCgVn6QsL8mzCRQqZGYFDAvzY4PbDPtRcn4VvPHCyD5oZAVfjgwZJWe9oSuVkws",
  "key10": "2wJUbFGfvh1NPTRH2btE57WRwPC7GJZtmsdwC859nw5hNv3Xd8TEhL4NZyrXNm4nYC6xVAf5oPMVnZH4PvJTaZVt",
  "key11": "5C5EcJQ7czAiiQPpVvdWxGvmv8M2HpsBCKmJutgcQbksT6KKALmLwyUEgRTrS3BJhWuBogQqZmSyb7JfGYgToi1c",
  "key12": "22gYsVitdqt8jV8ifLLyALxe1UxcY2puYFbe6nZqfuLwDQHgTzi276YfYBzc2B17MoFbDL8REDWPWK4jWGF3UGie",
  "key13": "gLdzH4avj4kNxtQgfPxnyVuFNxsMjvG4NeDEKxVUXxDyWFjJpkiPKhx2zHtqNdLoqowHpy65N4CjxN2H9h6zdAn",
  "key14": "5yiroTHTzP5sBBZWnXMTQG6C44gNVSTrjYmU9JAw4rD6rv7SH5Tm4XnYtbxXqmLCyFf959pPLRHnRVar8rQGSboG",
  "key15": "2VB4qCCnGqtG349rTa3vQn5KumcrMo8h2j7TREWCe51iicsrwMFC51Lsg3MX5epbTBcUZx2Ln9tYJNEYWncduoJA",
  "key16": "4XzQCJ4Sh1mhPwtccTo5NYPJQeFgo359k2qFjhCj5aYGHuvcJh3tGbG2NT3aiBZtNiSCzp7bXwjZ24jYctzFYhbY",
  "key17": "3kyYoNrAuicMhnd5n8TMyx4KyYf5AEWkbPdrNfNBFDtV4oTJReFRB78sTGEhRuxKemULUt95ZomWdSBzkjqP6kDY",
  "key18": "XMC4F46JiuzFFSNTKZzjnfBYtHFRdbg7Ujd4BEjwLBPkB1V9SEwWDTaPMzEQmohTRfQ4AFMFZgJUmB6NGQ9aDgv",
  "key19": "4zZ9XVyjMSVr64BNVcbmsc1kNUVYUD3V2PvcLgbqxpWZFuAeqPai7nSKhUR9RvCDH2kqotMYJLVwPsBA1aaYRJnE",
  "key20": "4opu7dtEPNedPzxbrVek3hCPE1aSCNt3vpGKj2LKNBkcPh1t1hcSTiLd81LQFXzYbwEMoQo4qLmP18RuMp49jPt7",
  "key21": "3ao46Ssq338G3P6P21qCCnJpaDzJGcgrZ3GbPazgravaKqQmgML3JeJtmbRN4N7PXAsZiSrfaBn8D1YMUSabhvqh",
  "key22": "GgTLTzpnJGrcHK9SgafzNbuW8i6jeP55JxLVbivwAJ2uimBseuY7B9rEbevcupRfENc9din6CFhqWtx8udrofRP",
  "key23": "5Mu7Tci8k4KSSbyajj99ZeNU68C63SCjQeFD1aMoBserDkb8ME2E7tQ4yHt3pz3XeTu2zYbzLcLz4jEcKGTaRmeK",
  "key24": "4X4KiTe6wKzK7Jcxto3abtcJZvMsweTNbswvMiP2BauSaQcfmCLwuP2rkFpdGSFXUFqJkMwWHBwkoWAJoNrjgwJQ",
  "key25": "4JUi5MwuJ8oqebGouaXzUhBhQK2tXNKYZtqhP1vYK9uXHuLTPpc8Yd5is8dft2uKdfRZ3efqK2VQF59RhEF1WSmL",
  "key26": "4FyPU8542cHzzfUBEjmXb3h5MZEffe8kPkEJHxZpUCLUa4pLTs8goeXiTJM3uWrevVenxRTcxnL13R8pMo3sZU2S",
  "key27": "4qDodNvG2G9Ha5R73RoKKdrhqPCdSf4dq6pMTpNA6Sm2Vp3AuCuCvVtYyGADQL1DJii9F9FPJ4qjVcMZyFA8q2E1",
  "key28": "27Z6iQzgxkyB25itWfuNeVbviPy5DMaYsc9hEXnpvaNo5Mvi5q2mz5TTyPjsYjaLvmj2kgkgfk6swXreprMCsXzE",
  "key29": "3HFjdfFCFJRNQ29PvUhPsMMeqU7qMgSDHFhBirLYpUp7WwknMwz4UEj7onHWG81rfDw88BtfQx8LuKdSERoV3JgB",
  "key30": "18iMVqJk5ztThLaKRmiJ1rQjmdpdHoZ3xM1koh4Lj4QKT64xTGG4eAsVETiJXaJS8R5XXyDckfJyJFAm6w4X9ut"
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
