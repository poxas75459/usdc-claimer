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
    "4bVtRK4FLc1TB4riAKCTetiMFJ8kjuJ1UPeRoeqrmXrhHMBFU3DKcDdWss396o3eaJuydiATzerXonTeF5wqyDvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31zLCYYjJ9DE6vzTVmtnQQvg2sQgMFEPsFA8ABtP3mhqwb5U74kZgrYGCZpTetNHpk3UezEe2pcxSrRZffFJdNDs",
  "key1": "3TZT3EQNGc6hhbbVLNr1RKNE7MSbVY8r1pvKWHwvsicxjKnEoxHrxstWXm3HJ2Rkkjn9dVEyvbJt7wPtMfo8wCjj",
  "key2": "35seyExUgiQsQvXszyZU47qEshYyYrbBi9x4eYEimttSXhpkZzw4FQf2Whpx8SD46Y3PywywSb7aNrjfqnQXN9U5",
  "key3": "4rjCRqWMVGNwxX2mMNeeakEtMbCi78D2iqn1CPJzUPnkTEiixQss2L6PJa2SuNfB29Gzu7TwBJvSnvwMXZR6fcRk",
  "key4": "5NbXEK6oNjcN9ErTmLr2L6eEwqqBJsCaxWHNoHt7VyscDfpLPFpwRqVb5THDtd3qsZE7Mcrs7kN4x2CxVqhvaNTJ",
  "key5": "5YLbGQZ1yaC7oU5TzHtzbPeEZKgrot6G3dxy6QTM8fwZoNSJDhxwYVqMLudqNAfiHRwyGpXLYGfGxYrA3qRU8Dhv",
  "key6": "5UfHFpMSpxhnbA1ChQo91vHCFV9vd6bVWkvkHoQ5U96ZjBTwUmy5H1eDAxRKAMRHgGdXSi4gD5724xvjX3h7gFxw",
  "key7": "2v8JDbusVeEXqUvNVqaDg5cdqPj9Ki1kn4rrSbGiZavpz2ZfP21MRGdr9jASLd88XCZD3T5ggykLSXFoRiUV7rpS",
  "key8": "2twjLwVKi8qdDDUEx37aPxGBuw52XhWxtKWrWNe486ngWrcRX2noquUdwHrZXwGhitB2bRZbxnYkHbrPQ33LZtTq",
  "key9": "qAZufj5M8Squocgipc1CUCxppsz3NUT7NoMkcTNwPHXngJbzi55AXWJcAPZzhwWuZV6joVNVLFWMrgRDYPpegNv",
  "key10": "5jdgoykGv4qcTz3PPkZw6yqoQ4FToGUQxahEr2fkLMURqoFi4CRUgkXbcedh8Vu1JSVjntfUQ8EN8b9nJ6m28cou",
  "key11": "29gtGnW6L5tJsyd7abYcaCdvjXjff313jNSpZ7Ei7JV2ngLEKA2iTrxAXvRNQdwHC5BdnG6w2oPneQDUCjCKVzoN",
  "key12": "5r7CVPd2tuLwp79nGjw9eikfagJkdoZANTB8tuuZDPHr9NF3b3XDZiq4djjDVUKVCMdtMacmGbH7uoyS4u5fe3wa",
  "key13": "3s9pjyR3ysxGUN9Xei9BuMrBzqxYa9ftv4rnurptkmfDAPwoDdVrY6vtBPKZY3843NBZDAjBiHbjftugK77aGDy1",
  "key14": "4nQgCPRbcxK2xMeFX86nCwRcs67xSmVjtUfkJL79SQodz5sM5qya9EZUJQKNTdKpk4y8rx2cnNpHqozU3EGWGx9W",
  "key15": "2uy54d323YhnJmSo3eM9CqFNY95e9bL9ArR29J2rg3pJtTfin6x1RBorRFXJ6ruB3p2KDW6tLC3F6EBa1NaWAQj",
  "key16": "SRY8KxEiLdAcZHZvegzYbgWAbqbQPuYvJnkf3f93ZdSW7A81fr9YXAd8SnwNNJWqz48ctWdBHSvEW52Ms4zF5LZ",
  "key17": "4Ny9FnUQyoVCQAUT1UcCTs3gyr7djGKUDkiFAXfWnY5Mn25caTpPD3uJcqxPrwYrmJYhJ27rJaZ2KAkXZBgBW9sL",
  "key18": "4f2K4K7FJ75F5iYBNdKBeTD7UZj5VKFeiRb9xi89t9NdCKK4mwD6YvqRQuNEy5ExHYaAmtgFHgqjtRp9ZSb949Uo",
  "key19": "oSfPHZzVbiEoyxYdAYw7mrQJaG7HBGbM24mHDThw73wh3LTMfU64L7YASUUTRwebF1NGCAGoNbykrZtD7nKH342",
  "key20": "5kZF4vZAzqnQPvoZHHZWCBn2n8do5owmVP1rwQQytYxkbRuLURu9dUnnebUAXPAUMLiWBYL5mBfursdKheg5t2t4",
  "key21": "4sFP5Az1kFSfvXkNFgQz1F9SUU87H9h5vSv64H7hADEX3pBUj5HG153mpsF5VYtb79qqf5c5D4TgNHocRGVFQ65K",
  "key22": "5gVyFHZjCK6ZA5wobcdwNnK8KeaTgcxtmuiVyyoSaB26X5ycjfavXpZ6koyXK2SknJy2icBsg9WUSZPPRHwVMmgN",
  "key23": "Lu57d3fhWMwAwNzjzYjoXu7mLrhEU5jrHuZia6oeriHRYSdXU7pV3j5EonoJEf9RyYNJUMZFRqEjfUUF1hKoGRj",
  "key24": "4umZ5F9XzygKPMSkt9kNeauBQbhF84ire3M4KJSpUVhdfsVyJgdAmAz8EPEpEMnsSyQMvRuuiKFPMkf1iZH1RBdz",
  "key25": "5E3Y8qXTGmyqHEgb2MNrtAQtQrpKXj9csFiR92NKQ3jiq4a6GBFgd2KJdemT4s1t888UaHqwS6rfevPgrkdst3X1",
  "key26": "5ms76Ztd3TYdDCrXxew5H3uoASYDGzQFvPv4Cvnjq3HLQntuN697k49pVd6Kg6B4msqyvdwZHn16HwhWW8i7GcaF",
  "key27": "5R19pXKB7ez97ekhsUVNvizvVrVhpFiEtq7ZFZmPnM4epbyD3nUCSjATUodnAS76c5wMGoY3w9iriYBCKvJHPkSt",
  "key28": "5Ao9n2UcxKbHaXtYA4N2xdeunAj6yipkV6rzbR35YbEzJTaqJF5JL3A7rYzjztjiJy3DMp1t2NkxtVzLvr9Tmysk",
  "key29": "2yJ5aAbNJQVp1aZJsW9nhKzEMsPhuhe13QXLTo5br9Wwyc8SfWyznaYtvj2UZi2kKL1fcPHa7NrjZSh3cgS5VxgP",
  "key30": "3HNiEcxmbrUiu3gfMMPWTkdkssmocqnzEedavf46EJG1tVtWK1CPLjJV83YJMfriHEZhGD788d91Q8wiRhHRSxDY",
  "key31": "3jis6GVVdyJ29ajX3g75FZPaAcjaVgpen7Cp2ZFaFJ3AX3gsruZpiv8m7779q8KkRKU8RzTX7wf8ujMBLoecTndB"
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
