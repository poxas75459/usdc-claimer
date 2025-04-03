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
    "71vDjxTJaf2mnG8ZK6yC4FgXxojJR6kE3aia3mHNL7eRt28Wkoz9Hm5zymgkxfzkw1Q6PBJATX4jePEP4dZD9Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ah5TSgR18p8teGMF1XLR6UXKuCgwCeiFNeUtNR2cPpcDeo2UyWYQGchWknrjwqVf4PhwjmkycvCghR9sVNu9RfB",
  "key1": "4g2TaQMfBFd2mSVpNCpvLfgsWsai8qKRmyzBMpZSyTkR3MwYU1nyx32zbMSz8wtpTtgRbXoKzzsJHYp37R23mCtz",
  "key2": "3gqFrd6iGeDbhi3fpcrR7qvSpgHrGKWLgiRCFnXyTyGyGqq2kUUmET1gn5JCRmpfCZraEeaPNPSamD5C6jHFnmFN",
  "key3": "4oXYfS21nnzfh6GWKGdLLMqGPLhJaL2Qp4ZGkvhktAFVxGiJ6XHDdPdKHB2mq28H79fULn6TQXNa15YBcGudqKA2",
  "key4": "3NeLdW67oxPNfTQagXhXKi4LdtHv4wg49FfZydaYGiGJRvt7zJke17jDVTNF3MnaGoZzwFqqqr3X5BiJrDV8bYNC",
  "key5": "2Nd8Rp7x3T68gL4GKvSrFCbyWjAja1FqnUhDJS1BgCJHbBBQGDmRV2eMyeShTQQy1Pd67UMohxBuMDgV31p54si7",
  "key6": "3guWjM7DHqQ2CpCRAQGYUcF3LyHPTJPK7dTE1zdgPtBgQ2ZEKUni6yrfUS7RRShrRGVXDRM4DAYmWVmP74BuD4mH",
  "key7": "35tF8szbUgjUDZPVCwE7wUAYNHdGVi34VQGx63zrxPW5mPVnPpDo9QVtbrWcQRDGq2qARm3PyWz8ASgMMQw56nCo",
  "key8": "g2ar6vJyi5MMAE71vP1LpZs9tXawAn77yjRKwFwR2SDtS2PVmT5qr9JFeeDRKoNZqkM26rrzvRmaCqzaMFhmzHY",
  "key9": "2mm2kKqfCg3X5dBeDGX97LS4HwXkS3DEUE217WNjhBZeo78qbf3KMonEfz7cydKb3QgAarHHCXC3hYWHJ63hW1SP",
  "key10": "2WwPJJxaFCCzJWZc753Yo4uuk69Jqnf8FxLqk7rHm548rN2ZYkiaxoocNERGHoxR4hSKHUA7DDHMcmofhYvnnmtr",
  "key11": "2VZXtG2Kkn9XwFz4kaYUpK5M6SXWuGNNSvxLJekFqDZsnv9vn97TujpWyX9zJ4fXSeZTzHLfSFaSY8EuvPkbad6m",
  "key12": "V8zBeFdHSLLP2jvvnjz1apag8oC2RMajLL33GEHoesgdadHJ2aQiYX8LbwbKKZj2KhPtc1EnDzrwkttwjQBf4UZ",
  "key13": "cPb8TRUX8zji1B5qHtqsAyzA9VJYui5LBVi9QXquJZDTGW6hJXRyEZ494X3f6ovy1BuSZ8FPkwnzopJG12L51LG",
  "key14": "21vD5gNmp9nuEwh6s85kVAPVMFZzM2TyjNQ4eKwx65KyirDDr2QoimTbrenXb6pNG1doEFZnZcsJ6MMgqbQKwRQp",
  "key15": "bCB95W1wGDuTVfsLZswiqoHNQV4DxvM9hDWNX2cpeqsa8bvESuKbuSQHp8MvcyWLeZNr5S4Hq4wTfmLZJXqJ4y1",
  "key16": "2rcsZ1zTuGrGSB1jM3txoqVQdwQi4C7b5uBqSxP4iHnMWvQF4YNaYoNt7eqZ4eoLzCzhZn5n3y9ker6dumdViQLA",
  "key17": "56kUatWfwvhQi4wnUbF2bhw8CrZV1oqYzErRtocYpKfdVFKjobez9br1FUUpQ1mjxK4CQxmvUiu2gaemybSHPAeq",
  "key18": "5Kwt1ymh4czfJCMiRe3kcZfoFZMMH89JEY4N6qkPxwYegTQSPixjJz7SDJdvwBnBXUavBhbeUzqzUX2un1z6sbMu",
  "key19": "4QW59ZpPAkfGvRosgYcvs5wj71xncAURNzFTXjecRC7im4KpsDdtpdpAem4o6HWJLMrFDFm3jAHKE2CtU4a4TYHz",
  "key20": "4BfEcLo7hp9pMbvbZNpt8Ft5EArnEG85bHR911g5frVihzgazpz2d11Q3fmj2nwmueLq6XvjQe2kEUvZoZ9S9bur",
  "key21": "rUiWZQDh8HRtEBJEG8DW7sfJWbE2d3PgwdqJGDfQWzqbubrSCAJFScAkb8jrjw5jYptfZPRyfGCj39APHBQ48cz",
  "key22": "euS3FfdnZjNJxR7TWxgVarhtBTUXbYzqbkeQ4nuPifJUE6ndp6tjLcHdWg9rRxbHSDWSshwcQktpExdPTDSBmLm",
  "key23": "4YoEg9B1GVkcSDyYTtzDKtsCUpSFTgytQRWSC59iTQbRVp7kF2XE9i3MuKvPKtyrVh1tu6B2D5vjNR9p2WqT5m8y",
  "key24": "2nN1YeK4oPZxjXJzvDY9ineDRLG2EuirEfyPQZPzs8owa3ythhUUhq18qQ8JuviH8VCDhP3V54bHm3DUSZWhLmDJ",
  "key25": "AHFJNNmvThBs6nWjwmhHcTyixnxXP7qnWNoFjADzpD4Q1HKph8BhML2yzGZEkycDynkGeKPN4XhA376FgYdhnY5",
  "key26": "47jT6kHamiiKBJjumWHKRHFRa8ZHxXshsoFumHAhAaHGnU6h4sd6jmjNdJwQai2NwqfNgPW4k9qXFqobqaJm8fGc",
  "key27": "34mxon83PRvAqwkQghTKxykrS1Pyq3TuNGhPhXkDRPs3eYbqaRJ25hD1e7EhbiVQm93dhi7rJpeGx5vndmkJVc9b",
  "key28": "4Mx1ushsoh6qyzHs35m2iWPj6wkFPFY2tik4hcpZJiEwGmAzNcDwVN3Y2cEaqjsPoqF1Xd7WRYAnNFbTmrjLPrsq"
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
