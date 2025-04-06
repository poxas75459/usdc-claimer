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
    "3mvDQaozVEbkYuvEoTBjepavGC6zxy8GnWujRdvGCPckxniZgGi4WuTCvaovxDM3yYnUhnkK4VWvSx7Cnz2HwBjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v4My44amV8MzsUCMqSFb5CmMxpz14zMAJ1ShEyFP1NdLwQEGt9cCUob35PWKPn344rp4vU7omSanuMVRKn1TY9D",
  "key1": "2EZqgZfaBjUcCFGu11UWMBksPzr9A1p4qoStcZnj1tmf3wx39EjNvkZCXajPSRaMte2BwTmZcbGkNq7XSKwMHXnt",
  "key2": "2LtWSw9N8rZuXsGN4DNA6qAU5SFeRDjkvouxCk7N4ALbTgMH8P4EJKMbUXoV715rieA9Nx9wDzH8A3dmrGPHFvR",
  "key3": "Ey74ZX96LCBVvkbS1o9tGCzmw4sZzdaRxoTMCdVSUMB3UfBPtkk5toh9afMrfeeVNzj9bAcVwuzxhG7cu5HsgCu",
  "key4": "73X9GjvnQZrtKqenDaz2PAgcJU8kKp8X7LsCES3o4z8Wt5w71G3zW8x2uzoFwxggu6mGUa6srkD6St9SyxMEgEX",
  "key5": "2z3nqpRAr1SY81ARyCoQ4ojGhhHMJjvzD7TZwKocSZ2aCGHv8sNTh8waimEh8eVdX4yRaJcsePuZb9YaaBAoRJN",
  "key6": "3bRPKr9QmV1bExuFLacExz8AdTM2FzVwzGQGvSkfnwob7NUzoiNyiwUzbrtvacggCvKPHrh3ZprSDNdGEqYUcEo",
  "key7": "5mxz5JUS87cA8nqGg71FvDq1TS4DvETH3fnNcajGf8pEukmokvNRLAV6AWiSb1fsDvKYWn7qc2h4QbxiaQAbLD3C",
  "key8": "4BAPZveb3Dq1eCAFAry5i9AF1bv1AZENSekwy9aa3DUnp5ncLFA5RrGLyxnqX2BcJTzBYT7YjDYtjBTU8DRuk9dt",
  "key9": "5EARzsYEvVGkE3hK3MHHAZy5RTZ1ZuTSiFEBQk6xwM82iaeJzbZuNMYugZgwi7E1zGa8swvmQ76XWvFSVDP6p9BM",
  "key10": "64BMdEKDgZAvvcNJXChrQeWoztMyWtSRTAyzbVTboGFSmWtCPrPCeXxeseLffk6DMB2gnWxEwty2ivgeeSerM5Go",
  "key11": "3EZWQeZgFqnoF4jeJK54bcokTAhUcbtstj5MNgmh6FkAPszrnZnVMJwS51jLuQK6Tge7tTVF2DMnjGiNTYYGgesY",
  "key12": "4wrSPeE53PRSDGAucq6X7hHi6kbV4eWdU4yGWnM78rhPb4e3CGUTQnBTkBuz9rRwV4CT6RA2tj3UmPcQ7VYFVqkF",
  "key13": "3N9xAhvvVXoAKgd933ZtJQGhsK9NJEnfYPEtq3kzjQ7gQzr1R2XiAjvQw5nrjsSraQW4mGBG4yZtfDf5g6BWdWtp",
  "key14": "4yE5G7yzMmnmvEWHvzSD6vSKACSREpMWAH3Ms3avnss8u9FbpKn6ZhTeEjnqHn2AJtEhsiFDSzJcpM6a5nsWgEY4",
  "key15": "39MCKsNRgQ3JS2ghRFf1b2JvVZ94FtRWp3TQHtrJhwJxFRJiffEs38m2t2FzEQC7aUDhPpZy6HpUcdULRn3VG5cw",
  "key16": "4NpXGoecUQx3TZoDSMBgbvm3Zz3KQZFjgDXqwczjRrRxdkunp5JUXQH4zcAFjtvsohr44BRbAj3KMqmptX7vcBYU",
  "key17": "3LZaJsKmumVSGGhTDeDJrt3wJ2onNnzHHVE9asav9NUMCRrSiSyY6KRAqJYG1zUFuWhBzKinc4RNKWKLYMiKjsmh",
  "key18": "5tUb5fEYQr1C1MhRCkU5T3v6du9P2JcwC2oMesfHnu36LHxNpeFpcnUiHacYo8SRVLW63UyN6Q3kcwPs6cgS95of",
  "key19": "4yC6wuHiTsKfs5BhyofdyebUg75VHyaF5v32KCR8ZDGxYcq2TwfHHeGxYPrvjLxLqdr8TM3xE1B4SC6EVf8TdYXm",
  "key20": "3fphjLZpg1q9ogLw9SH4iVov8YorjmPdCzLvkrDSj6Ccuwx2FUGr6hydyhty1HrsMrgT1dqqQ5JwW8eMdVWWYnL7",
  "key21": "5PR6NBGF1CsEoYgw5fEFzLJixcxsazT7DtPimkgovNmwsFZsKRUzz83iEcmPdDwXJ6sppyTwvnu47d5NnY6dsbW2",
  "key22": "3rYPa8fjJo3KH8EX5xtYbzwREoMUTm4H6h8CoHdARoZX26WZKZtLVLAnvrXM77RPiknwH2Lpw24JYXu3rCRbzojE",
  "key23": "2kZuQxAvoaKeb3ASqLDLShbpL9fnqskUwdDcWw21udtsrm7ZW2SJpuaC9J8QSc3fsX48ysLsKCETazmru6RRKGC6",
  "key24": "5KeL6rsZ8Tt9Pu92o6JDAdTh2xJAE2beozmcgYPY49Fmhyo3Q4BsHqivkYVrNCkfgQ7W4AHLnQ1desmB13khsmSz",
  "key25": "3bkxUM4kJrayC6NDCDVXzZfWGEMM9EyzaM3StYvr89wwNKQdK5hKT2noKDW89LsBZNzd5iuQjFNenoqu7M5xw1XF",
  "key26": "42VA46g73EK4qLMmbk38X6UbJxZDUhi8vP2oCRqmA4MH2d31CwZuAis9bpALL4Nq4n2fEizFGqcjcsVjr2UK1BAJ",
  "key27": "yDJ7yMGUxqxjRTUCg8pkCec8t2bRTf4w8PdyTSpVzcR2qLZMNwpwjhxGnqBSorM1BnezNnDKLciKoZxFUUmFC7J",
  "key28": "5Awf6zCxwqcejJ5siKcsJTA9j7WF8zSUwHTxrd23u34f6wvcqk6u8g4mziXxgqMcG4N8JTEeY8GCubgPxNDPvfj1",
  "key29": "3LukKQYLPxxuFysMbNsdxUgxccJm5iNkLzYHGWTyij5PbwDxCkMRGuRCtfWwYDBBgQ5jELhE7v5zsdPHfnF4xbsy"
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
