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
    "4RJCBZnauWESxcRDu8ABnW5usWqHk6spsQYDK6rsZhbCjqb51dqngtf3Ycz3JT1JcUERadkEDLhKapL33bXdnF3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KpKG7TJBHevF2FAiRdRG51WZMqbDUuaoVgeg74Z2MPMpAz9V5vSkB8HXbSFEiTKvHUDd3rhNqsysVV78WpdvnBC",
  "key1": "2P4wWZVn4JqTt41ZA8YUnc5Ti5sPqdTS1YyfjMVYYjSbKKvvXKh1p8AvnzFpDDnwSqxZWVBocTgAvcW1MZCCPjYD",
  "key2": "R2KQUKtSevDW8uWbSNiPjPzMnVEKXR3ttpoHj2aS5MMvtadnZUY9SYu9WQiFn54EZra9qGt3y8q3y7SCj5HRLrW",
  "key3": "3s6HsKyEag2EhaGPSA6KoeZqKcThsXb2wpaqtEdkj5BKoqH4FUy7U6Yhw1ErsfqbhY7zWPLNQSRJ9DrC9C9jVRL9",
  "key4": "5ZVVGU3zMAhryaDYoww9UBCDgMt4f1Yib9BpM8MRgq4bVhjL4GQUGTb7FMJd7GV1AhvVp6CzdZeVDrhSpi1LaD8t",
  "key5": "2gEKzxDak9n17Yy2hBPi3dtmRBfTHDmq1Ya377YTUq1A8UsySVB4VCwpzsRz7bVKr2PNC1Nji5Z1kSYgvVf4VyUr",
  "key6": "URbrZyh7AQgmeUL96zykZLFeENFYVJdBS5UXmuYSAvQhMguepGbe7gUCVHf9ARRmUXCsxeSfimDotEgvRmnV4XP",
  "key7": "3Nxmx14hk554bzJZaUVfSJaVcMnMcvctLANqYVEAVusHL3ogciTBypmtTyAsmTHKRDiXsme7oK78V5xqz4c1Fd7S",
  "key8": "3z9cKmHZFA7HUWFj5NoXnSiZzNdPqHZqYobm2maHEmaQtM8aBnZt8hUmrgo2iMb3RfpdUPhvinCiCAVdfgZHm3Ub",
  "key9": "KtGp8DSBpPWaChEbsBK6aMfJFmPwMgxBbxBuoTpSxuvZpcWDVJg1839HCETB9dhaueDs7d5zErJaXVPSfApRfaX",
  "key10": "5xcuTkhs5cwMsQkMCRPwWau2oWhpAPhmhVhxUnviTZNZmZaK6EszabWQ69tHCUrBB1QFvaKkrZzbfUZkwcAxnLSh",
  "key11": "UTvDh2dnJtCPERYmXxqW9xBDiDsiGti2AC3bWXMeaiFL7eZW7JKkr6LK4DeZgV38uxCkQTkVxB3WtfZYXLZdcaR",
  "key12": "24JzoSpyeYSJuBnMTzqRvWr2ih7XVwcJj6vq4vsjwmeZpzK8KnxHcHbxrDPzLF1ASDUdXkkgHR1nFMZFdVn5YQ1U",
  "key13": "4fXmQ58LxBJJNxUvGXBn3UgX6QeCsfh3ASi8vR13u5fHws6yaH9EqWTdmbG1P3oTfFbr5dSWTHVr2CMuTsw2vryf",
  "key14": "4ToHQz9fSukjqdVwuxpoGLNXBkWeHVfdRBdrg8mCptjZhsy2Fy2AzcDhsfAXdZpjmd9ic3RpWri2HC8sP1SGaGWG",
  "key15": "4UMDqg3aNQtcXy6GnBSf7Y2nF9QgbEYZ2NfJF4RcJry5Mmm2WphGGZwiQWTPXbFPFhP2yp6Lk3aJ3j7G1mD6h16q",
  "key16": "5EwT8uUEK7h2DHeEAtxcWVL2d7GAKGT5c15mLsMgaVASjR9uVeaJwcxC3Mv6CS7TDKAJWabaBPJSXa9FrY7STfEa",
  "key17": "3xdHdogYLNfLYtFhYPJcjphYfgREwPNytNZ9oM8s9BLVUvjkJF8E3oPQ1W1ejzHFBT4MizQu84dBwsxbGdEf6Z7s",
  "key18": "4fBX14RL3jXzcixRtQUAzgb6vWBYcSJPN65YeGAFbeyqTnJ3Q1BZ6NeinFtBZdZY3FkgWaTZvxmMFaVyvYCoWFwE",
  "key19": "PhZkv3iuYu1z4AoqKtJjsqobq13uPiL5ZMJebjxDxkTVvUEqkLkjZR3cp48GFkiQ5KqyWLEXWnj834KPnGwTzHJ",
  "key20": "4YTjSby4oJea2GE9i2pLXnV189wuT3j5PGvhJv7snMcsbhpNe6c1ssi4to7FsJEbZYA5B3GP48HaTBC5MCmhLNJ9",
  "key21": "5pSK65L3EC1y44DfXEpPk5teSL1p3JaBe88vdfQKqhk5bBVbyLsTVuSj19FYK6Mynd3cvXGJ6oeQ7Uzqipv7oWmt",
  "key22": "3XZNznfg9CRDYxFzNSYxKxz24zS4qtVWn37w13gs8cV9qN3prnAb3iUyaVohy6KZEXkmqFD3hNawqmPBJcmrCh96",
  "key23": "3oR4zq2xAhftjPLsEcHQrtnGavTtKYEW2WKkUC9AgwkCZD8XDDvabKXsRhfx29DddkiXt9VJE4SQLaYiFj5V89Np",
  "key24": "22QgmYd7m2SzYfSMxdtMA4kF9Zn6v32LHRQozooc1mRa4qm8eDR3NTop4L6XGB2Q9uUjoS3EpWsjo1nUkzwo2gDY",
  "key25": "5b9PK91xfawd9uSW8NmXYPfvb63LsrSs1jaXaUHBTEwf2muSqYw8gv8uwfBZ1NEhn9rN94MULPeVB1aEvx2Kcefy"
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
