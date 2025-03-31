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
    "5QVmvqcx3aYdzgPVTGGCSJQt66t8UY2NFEgzYiicAiC2F3dSevsoNDBzwPNJnXMqmvQ14cumbGvZf11ZR6P9Xrru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fmW9zx5Jb3NWssQV6p15mPWcmxg9tVBQgkJt9W3gw5y5VumeRzjxCvwNZsHVWVzS6iq3TCkSP9MHBwTk6Phmxbv",
  "key1": "L6UNeoKrmexqwwyYtQLMrmwH6jeUSLc65joivgTnNpDsUTu6TA84wienc5c9GbM4mRyU4dSBbr3WnXmWf4wv3Xc",
  "key2": "536wyKDMrtpgZZKDs4Fjs8aUpLAP7rpgLsk9SGPgVXMMHdEP8jJDyJ9sB4xc8c8VcdBHQwrSezeoEWebNpvWN2P",
  "key3": "B6pSSc2cGRuAUVYHeRD6iSqeq4sxwfYApP2GyiVd92XsZsw3o988Vrqy3c28GJpyRcuTPb9hiUkzG8HZZiJWv6C",
  "key4": "5MyyRnLdLYBaiWSWpdbZ7gzpyra4yEuZs9hFjagTedJ5z7LSkzKGPmoFBswtW1CjKHFdbmPDibxKZuqaFbQk78bm",
  "key5": "3rmf2Y2gMwXxx3xvjBFjVTUu1RnY45m9G91ZPvERSf2kGdZhDXHYTN46G1FEZPDjv9Xmxv7rs1rQRLckMq2oxM9z",
  "key6": "2FtBptZTeFSEvbFnvWdosfVbYPqEVCRdxCLgRiAypKtnhzMebRagxmaZ56QJyLF7tSzFsDqSKuxtU8gaf46aERes",
  "key7": "3eGRD61hSzMMpYYyNbaaLHvBhqVbkhmUTo42mspAZnWS26LhJzqy8mKtUZ5FNyvMpxUZn37QfotZkmRzLRsBpnjY",
  "key8": "4whXbszr4SwonBY45ULcThDtLyfpCJgw4ScGGPJJgNHfG6AZH46AEQfALHrwzxDSaUwXE1z2eSXHJDSbDiqaq58i",
  "key9": "39xgs6DbHTiVTiv1hQa7rYEc7KcQvvtCGmUUHwnKPHe5JWFvQtJtbiEbahVpxAXg3RzXyqVP6jCjsXFVxsvy6fiu",
  "key10": "4UZ55DQHjedTGgErW3tXRuVMKf23Qfh3raRP4HdrC6n76u4Jq7J6y3dFkrXNjXiHusQ4nRDGvCoTgMHnZHErFbDG",
  "key11": "4FhA7TYzWPK8TCkfn61Cy8FFhbcoqAuBg4cZcp8W2vQDnzyxx9KSNguHjsJm5nPLDvcjjo9LxJVzuDCbkTkqgEZw",
  "key12": "3uymQXXaucum9XbGRebiiaAU2ge1SCr6a8XbfBvyFBz1vmZZykgGLKBGVucjPuX2cfwpgmJo3EwD5aqdKNkf1n7x",
  "key13": "W3zVVZneyfuDwboXVPpzKJHApGMZg1qMoVwPt8WxvxQGL3u6b1ENymSLG6v3PAXfRdtyLjUkqLZWWXLVUgkMzWn",
  "key14": "5ZDCEGy3K4p4ueMaRTUeMav9Xixn3vBUKUk167wqaHPYpV4YjyceJxDc8CDn8EFNeM9YY6XYGAS59pMX9oHGmVNE",
  "key15": "hcBYJQy7oBq765EJSY3jzfYzCy4bDqSuh7tLFA5g1gsU3BLgKbpdkN4Z4UPgymjib8985UvTg2PRJqLo5LBfkFS",
  "key16": "N3Rr7QGNUQzcnezQFqPBZ9ubniNsZNv9excPf6fPGkeWftHLa3SjtCPkZZpXuJjgqmj8ugWhCECS4f3uE8UMUtF",
  "key17": "2TxVFFkQR6Coyyjs777Sz6WEHZhidybdPULwhQ8iwrvE3vaLsALsUSXkhdStg5sYaRjNAFJs9qBuTW7ExMZK4V25",
  "key18": "3U9FNC7RDCXSqfCb6EAmQC5c38CYYW2mHuDE43FoGAVZaCyHyhuyU1ovexEAGEygkuXCggXUwwchHTbtxrUoq2MW",
  "key19": "2UL2YhUfLEr9TB56dKwrMmwhUjthJEcxTbuRLn1rfnrnuB5kfU4FyzsUjzKJo27yrsrJyhXWGdwMpUe2oWh15Lpw",
  "key20": "2jrc2Qbr3UcAz9CdXXsiMBULR36HUqCRJjKe8hffaEaPHU2h2Zz22156YEuRAKaAypUqTBjfhhTXRCyL3P2TBxuT",
  "key21": "2EBupdkR1LzBFCrQkbfUV1Lyc2H3mr9bunzBtZBsnW2DUY1Ht1wKbyibZEmEh5TgFUpYcPiTBZkeycLjQr9asDrr",
  "key22": "5tw5a3rFVVYpfCi6vzrwXU5YmnEUb7wgG9mvjEFFPRB75hGNDM3zY3LEEzKdr9wo3tuHabAFunmy28aa3CBZMjzg",
  "key23": "3UBiaFPQfgSNkKpmVKBEZzYjyjSdAKhHiZSBAeg52N4YFJtyVYy4vtufpXSFBnS2VEZvUEGsunrFLsUV1kzbD9hF",
  "key24": "5nSAqoi58vCs82efamB7vhPVfBmB2iM3sHgA9n11HhkQEzUqgU7YqAfyLERD5f1QGWBhy27Ad5fL5N9ws5Q4bLF2",
  "key25": "5rjnfK4Xst8CTz6ZWF5QehCa7mGEc3MCK2wyL3qnsEhR5LUCV32HiFuGL7UppNbGBLF7wC8CG5KjwepvgfyTT48j",
  "key26": "5DH61XbJcfwDpgdGuZ35jdhy6kTx7iMQ7sN9NCxybDRk59pgqo8dxLoWouWMPe9KJKJyZCUWnym6Ee3FSSGvwpMt",
  "key27": "641fLNgi5aqTjDSSpDH7ScgzN39TiimUGizrAbjvLCz9H5RT34Nq3zX46ku8QYhNewAAG27hHP2FzGwiaDebkD5A"
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
