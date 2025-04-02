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
    "Kp4S12c2rhCy8hPNdiQRnAayxFLJHCdPJpvQzp1wpBkc8rGnfqsjfcJyCZSnyGHakR7z4b6yYxZmg3jPbAALJ65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Se5GGrVau9qXqLw6qPKHLHhA9sTsGRuhTqjfHW3DNm8picHuT8URJCtxS6jALNVUS22uQ23r2jb6UDcpLpVCwYh",
  "key1": "27HmNZGysGt2rHvwmYZbfNRor54W84DZ6mNY39bCAa2TEsp6ZbspKySsN9fCNXcU1LGcTcpZ5iRh8595Z7GeFt1N",
  "key2": "2CbmWKodFoRJriLU5V5r4wbV3cp3VhABogwCxVeTpcJ9x2rDoEQm2jFxSeEMFpq8FnFCZJsq4kSJh4XVZKBxZuks",
  "key3": "64S3X53EYV8Rfiu3zcyCVo2RDe1wu3FhZit5cmanMNjP9QLVeNGFYWZeyoJNxcBxvcDo2KH7HkQPYqUgmJbHwdTS",
  "key4": "3M8qRoD7PZkhiBj7dVQZZeeCkq4h6m8CBxVPv7gzNx5DZWWJ2D5tANp9rDMywEkWYrHufLq8BMgpQvhGP5cdPTJG",
  "key5": "4A4pxTsVJVXtPcYK5AQWNA26Lexxm3hWzg9LXcscWJAjgRhGfLeibogvq6jR7CNJJUyp15gkHZLpm6J81h5bWCQi",
  "key6": "2wy6bdY95gWwvFBggYBDGWJUQXJuc4yVjEYBYGP75AH1Zw5y4k7WrnKDSWzthvKVmT8hQb3FaEUV33nDySGwGoGw",
  "key7": "2vG1nXzrTyF9dQ4WAb1ik8FdkU1nDNKXEUAsiq8txUYnzvpvdr8LzVAvghQEYXgUeHNNComA9VLE4p4EftsNjCQY",
  "key8": "3MNxJFPcLBNi3L7uhAnYRGALzkcjLzCTH2Pc2uXrQFLN6TH84ZHvZyakDqx6MfwCi8NqUt2Eig4kwuXBebuy6HZR",
  "key9": "3R4L2SkdzLiJo24dzPypQ1ivSkKnpBwZbEQMz4FvaJBTfb5aWWXd736YyvTekezbqwKvQ1HvCsmpdfkksBFgPPcS",
  "key10": "2C4vjZZd4F7w8gE4HSTfgfgihy8BBfSK71o5tYyPEsF7nfEh3fgpvPg2pM6mGwS6kdqAarUxYG4u3NEz68f9RuZN",
  "key11": "2TAygotXboZtPewN4ntewhZAACd3fyFSAcE1hPtnd2K5oj7c8Ev6xu3geeEkv5xLaPZRKciDdqALH31XmLaoFu5Z",
  "key12": "2dabcoYaz7X6US4Y3jAGqcSXmejDA1WUwVLmJUkGSKi5cQgW7Y6CzyzPG7YewDperxp5mNJ3A6CdQxShJ2HHCXd3",
  "key13": "48AJmPRDi9Hjr5JA2sj31xM5Du7UcB5g3erX3UkeCbx5Dfe49n6QS2mQikc1pwADAXKkYa8MeQAAQR4bDWbpmL25",
  "key14": "5BuVtC5C7uqKwXcGpxdV41Cgh1HXRw3HsQ8UGTr6u7NFR6eh8hQwDXEZmhtfBbbfCuCrC7yym2VNh4E87RarJaVT",
  "key15": "4p1j4m4kouSrhjJq2xvQ85vg3DwqZU3o2jkUYni5zVM8A2foC26nC121CBdSSD4EYC31jvxavhmzkixZhHG5MgUJ",
  "key16": "62FQ78UoiahKcVopK9qauqt13P1skaDYhV6VH8vFgKHJFKsg5gPiGatvh33egQdLFbyErrExxXjefS6YPkS2m4Cp",
  "key17": "thUFdTSipuVw39w5L275mibG2W4Cj4vomQqYn1h6Fo8EpnUTUzvZ2YzmiYHvGByGhi7Vi7aigax3JRaQr8Ps7Y7",
  "key18": "2BvjQ9sNGtbwpdoozCNy9ymVhMBdqvqZuxQ3yrutYsVf9xYQwN3MM8Zn9aQUf67sUxAYTd2PzrV1V2rmmfkr5s9H",
  "key19": "3BN5mmb8ryX1zCdstYrUFEJqD6Cr67UFSExyL8cTwxbjxUVRNvmdSKtHmwiSr6AwcNEMBwnKTR8JL8oVXa9dmt5z",
  "key20": "2CFTB8SjUXi7DdhwB3YTezkfVfwqUftpiWDscdhLB81d7pKaV2QfzMX5zGXS4CtUkLphhVeTU3xyNHvwzrma3DkE",
  "key21": "3w1bdP9jJyhzWCTtdQpqM5Skz1y2buzyZ2K4QZJQ4qxKR9NXuBwxSHQMU57zZuo12ypAX3krk273UE5qPReqZwS2",
  "key22": "2jEGEFZDbmGrpYdoajRn7uDw9H9FGzc2XYtM7CVfznGcQ6nuhXpgLc1njimabRnWnGKrwew8cu63kPrX3K2AFjM7",
  "key23": "42TGDY6YFaQMtJKsekY9a25KETNEfghR25SbDkntAkpV7ghY32MVHAqqLvq6nPgEs8xBdHMk75gnXFUY1bU3Rarz",
  "key24": "4fH2R92m3sCuscM4FswAjTuWPALpY5u6PDVdksPLGQmx1wMd4AME9HxAr7PnnmRndjGYGKypn9VKr3nj2cuWtN4Q",
  "key25": "4fadfaB9wmvNcSv1PeESHxSjqJkxQD8fBAx3AQMkiAQoyS7SUrthtT2rAnYXQeRPUs7gUDa4UMqxiX7dYLCGubMa",
  "key26": "361mdpUn9gKXwawcC7K7qizNgM8biofxW62jbaEb4xq4rVREcS4sRJYBoA1dqouEPWnvcJPQUWwdiKrm47aBvhxy"
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
