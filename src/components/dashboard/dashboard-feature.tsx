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
    "yCMvMfE1zhX7k9RsJkgetz5fcUoKP9kg6A8QJDvey9DRSsJy66P7uyBq6XfhtzX9ZtdwJNCyPQqwk38zC4QFwdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62xkRGPHP8u81tbWe2UzqiMkeiWJRtWDrtfrAMjRXk5euSasjz9CCGodwwCs7Uoq2ym47SJyjUXsGGTctDJjwL2p",
  "key1": "3KStBpF1hXH5XzFvdzDTPWDBwHhP1Qs1GhfxfEYBWAUFNVWTzqL3bHnkUoLcCxfZye4TWQGJfJwFHFJNnCSdWBif",
  "key2": "3CehCiQb8CrQaBNzrCZd2yGfmJh1DvNbHbKbnbZfZ123ZFFKeGug81HJrjpv6UvtLe4HbMXNw18n51zfaJcd8JTy",
  "key3": "59TgoL3Zh1mgGqaJjHt7fJ79rTbvrRw1yZfgd4xuQ4NiFSbanXPLUxj3GfyrchtyqzDkiym6UgL7bn9f5TnWesFg",
  "key4": "BxRFe2o6mbzjcY2FopZ6PydSELVRKxjMS2abmM3jCFkMfCAe7wfGYYJBihHX1PZQv5PYAS6mhtvmuWzW7gDHzSu",
  "key5": "2qkYmzstqW452bJQzFnz8r796wSCRtbMeGMYDb4t9DR3iCVgj35ZQyBH51fiRnk12EeT97iMzSoiGyXPcFTx9j2p",
  "key6": "4khJw2GRnRgaBpc3gzavHzgppjQAuDVUqeqgFMfvPRjXoHBseHVfEEvuMWtzMjwbpn9gknavssAoYU58FmSNV5Hb",
  "key7": "4HYnMRv9Q2nT4D6pFJidkZhWGQYQumovyj5Xg7FvvVmQQRD7w3gXBZrha7wXMQQL3p5u7k2PeMddNJ2Hq3Esvrbr",
  "key8": "3yBkHCh7pEmo43an2p4jhy4GjpGQbLfVrErYXy93jp8BHe9Vbum1dBKVjaTMH9HAUJ8oAEhH2k2dxtS2kpcFi9Ge",
  "key9": "JiixRgYz58ZaWVmZ8GzKGvVELTGX3AehW8CYRGNLyakW8kWjJ2rSRQ16YBZs3kXFgEMf9i2GhtjcV9KKmp7xLbV",
  "key10": "AXQtDDkkABav8ohuUm5JaeSPQEZ3ZevbPgo2LUrQBvPAN9NpxFEKup3ieb7LhzPAb719QuT4BrZN3C3qEPZBJky",
  "key11": "3DK6QxxUy42aqaG2J4q24ibQTXWutQVzbuiFjoSURt9j8Qcrni9HYLyjbzgrmHA11vHsfBZKbtZdn4ki4fxkWEW7",
  "key12": "58BpyE5BN6LAPyKEJ4DeDS7GPen2wkgFmbXnono71mk7HnyWPQ9EUg9QP2Y4MRqcdE4ednx6HrWzmpwAsWQwMcUL",
  "key13": "3sJfdVmYPA8pc2mjtviPEnehtR7dqDzqMsNugLG1ZhZWmde2zZ2xUHHQnaejZoh1snLkQ7RVXKtoc59urU6UyXFG",
  "key14": "37KY8gyjtWYSHZUwE5VVKn74ue8X8EVWsBEEoRdwNiPgapP1Mjhr5yd9q1JxMGj9ATLCsqQVDZ9faP2EAPw6GBGG",
  "key15": "66GbsWKDSKR7juYdG346pECcfaakFBFqU73Cu973fwPbD9jYnZjS3H6KCGPHwBztbYqpuWtCVuBWFxta8PP84HBP",
  "key16": "2yEaCGhM4Gxo8oHp1VgzNx47tDLiZN6Mdjfezw4ay53mwejv1Ua3hjNQ1BxGhdNMqPWLJhzHo3ug1JP5mUHimiqZ",
  "key17": "4jZcrjTzJXxMAUxprCmAuyYiSPcFmprPLvaiPbH3Ei6ziHnQhj5T8ByMpLV43aRxyJNNE6Ki8wy2GKSvmfB5n8jH",
  "key18": "2oijhBgvMssYyZ776fzXkg4pi5Sy15n6Wgrw87rwKsr4jXiJoUBiYeM1fC4TnAf7uN2dXcNxayBSJ48vn8SYhioi",
  "key19": "4xARk6PKaqZDGQ9KUvKSuC8ZhFrkVvMub28mom8ZFFJNw98wBYfVG31pD7EcTa34kqnz2cKeU96W8dxpDSwkfVKr",
  "key20": "4AXzeAbms4eGpxVLVkTJQZ46zJxgvPdLQwWajWRrqM9f2nh6Fm67E6JZ9Q7iTQcwpJuACSK9FMqC43ZcihRinWXq",
  "key21": "5d7Ba6kX9wt7Dj3Ea2fespmgCAE7uaNXKhdxCTNEs6u2tyKvqX9nQPnAvZB53b2AZyY6LUztQ4NoXHqcuCDbFTKQ",
  "key22": "2oBAZrQTz9iJr9PYtdYBN7oUqsFsFsCWN44Zr6UvQiokJR6QXeUZsyVtxdvzYmjRVMqNAZfs6daABE58pBGDpxuP",
  "key23": "26YVUZSdwnQHAz754kHJsKPxxtdHRuotSd84zTfzoJDKGaWrihtEyJWxSzRKQmJ67dQSp6ub7T4Vs7fBMKt4Qjsa",
  "key24": "2WAa2h77MQHmnNroD2D2QEbe5peuaksXXU2kEPMuDJvbZfveZho7oqj4VfvMZ77NMpaL1JcCJnaStDrNP5zNaTzb",
  "key25": "9UX2hLnq51SFfQnzaZ2U1V3FCHTLhWeSHxaB6UANHY6UiESsdpQoWwKkENc2MLHvh6BWdumXweXR8MZ9j2RqVaR",
  "key26": "5NLDr2GUeThnLRuHGSQnb2vsr8UzCnpHEaRdUvGFKLsDBZpUG9ARzGsLtz5xQ9wis75pL535dbJKi4HESHz7zp31",
  "key27": "4jjHxnA5X6rAVLywMhKVdTFN9EDbKbwWkurjpCRaXSxUiWQmRycTwb7KQ2ey6sRJpLQLFLHcd6aij4ADyfUiQSbB",
  "key28": "3pNPcccCysY89eY49czTy6oCNUY1cEZN4boprSLmn6YPAXmRN2ADTggfQpAHFeajEm9JUqbyU2wpLNZvWD17hQhC",
  "key29": "5vntY92Bja3gRQDhgzjSKhgfYWAG9VMLzCmAVyJtdZ2ruzcRdmZfr1uD6YiRf6cGb1Ud5mXWzoiK7EhqMN3kGzhh",
  "key30": "5Habk7NPxLd9zDZBo76mozi13v9aQ8ToCgXiyRqic3CTsWxkLm2Qzf2MhmeimL5FqEMrCGz3tvmG6eHaDpHVeGUc",
  "key31": "3WAnjCVwi8xk81GKmstbnZkXQJsyEXpZEEnBxu9HDJx5eKThM6KKSGq3PV5a9AZD5YxTXaBVhgzcA2ioECjMztHF"
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
