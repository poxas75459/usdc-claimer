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
    "DeMT4jgAhUra8bmwrZ5BREjoamiZtVpHDs6GU6eceB3TopHMhW5LyRudtnwFivRfLR6Usxnfd1NJQojNSKk8crK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aimvh49gihwcR6o2HR8NaWK77oLdphnDucsUSoaBu8ur89Jm9KLHDHaHfXUmh41EBkN8daR7Cz1eWfFCfhNrhUK",
  "key1": "4ouZGtNYFEdSXBaTeAevzJ4MpYFb6avWpQR68Q7XrGhrUQFwoUvwNBiKVTjzWWPFGikZt8peoQE5JbDyHmVFwnkq",
  "key2": "65JxGadPqKG7qvDvyyHsX6AwGs4mSN1aV5F12WXveRPUkgRCCp1cyg9WpzGP3unD2tUYwxc7Gj41ykr8EqwRcVos",
  "key3": "4NBLqhWEW4UK8LHo1TMz11qaQJ9b1xzc94FHaSfiS8cwmFfDy94ai8nhuB5wUk9yicnqGKXeEPyHSeiYBtEt3ccM",
  "key4": "2jb7tiFMq8FrhCyTYXW3dysbWRTDueMxAWGKKbVLHihhxZ3qjRuG7W3PJDi9A4hN6vzZks7RSLXSi3mThtpLsQBa",
  "key5": "3TaRR5a2mpBfv3GXE9xCRGwgzK3c4yKmspstEA2fCTHE1z4cAXMgtSX931ynXTTVPtb2Yf5x3xsLgbwh4q1iyQrC",
  "key6": "Lw96Wb8UF2i48uBGq5ajsuygW3WySj5TMJbD7uQiUgo2MChrDbFgFNrdn3q3AyRFSsghfwBCEDZVjk2YxS2UAky",
  "key7": "HVtWvLJJJ9sAGo968faUXtV4qnp7zyT1w5KS3zu4KqGAgqRqniLymYobN8qasUCuDNtPoPmeootp8SM1jhkzPBZ",
  "key8": "48sAkVnGsa27dv9AmdSwGu9jYEs1ak7f8hUE1zo5cnfmgHNGADtrvXtY4eyTGED25bVPr6RKUkVhpCWsdU2FBtjj",
  "key9": "462gXSETQJWiQKd1qByKgmWE7zLpizcuYZoSckxm4JztpwkJ8dCvRNiKAtR6gt9EaF8qnB59NihmohcGgfjfVzGz",
  "key10": "5PgicbDqeBSanmsBRonS2oeUXwnCmDFc8HmVwNkqDSKgVtx9h9ThbNh7SeP2KJaWppm1UXStXKQmu3CPTUwgnTrV",
  "key11": "5d4JvZdBSFy5bygixM6t3Aa7TdjhFtTEqb2X5X2c8e63GTZ2GpKVucgHjtRU9wZRgrgPtM13hkV297ScKUJ1qs5L",
  "key12": "4Wuras4jaNCqXJABy6DUYY9M53DTQBGaqhzHSgM5sjx2fx8HpYUY8SQ6mc8e5uQvNqWdQH1uEPjGHZQXNLbtaFCY",
  "key13": "C4MPRFgFi1fD6H8ZUT4CyXDeSZrjpENVUBbL4TMci95T2hSUtjbDrWedFXNvoAZD3UnnzUoyo4P2JTuRudBot2m",
  "key14": "3fNWRcRAxTmfetmDWwVy3ZQuGECpM93EcN5jfPLN54CoCb2mD5BgwDuah5WPLYRTTnsNDjSTtNyyt8NiGC3PaRh4",
  "key15": "53kbNQkJDoRDjBQo6G2gBviSTWZv8KYzNcauzhn8xKsS1WtHToU5s7dpGiRy4EEWsvzeZxttSxCRSCay1TVtarvE",
  "key16": "2M5vUFVWQqGorNybAQ8kk5ZG8bgHSAux38sDtoghvxW8HjS4NWxRPtSsW5mSQrQdQT45aSzgqruCQK7eg5UPuKcg",
  "key17": "3Fj21vxqNWt4kVtHc916R4TfcBAaBNGBtWq3BrEEBYKTCQKxzc2jC7ncrtWP9mni58BaKRY4mpUHJjNf2vGXYAXi",
  "key18": "2CMEyPyhp7SrBATeDBSUWe4WPjh5TcZGT1kYX1pSa8UobiAY45yaGfLUcs47w2qePkqfg34B4fdcFeWe4MEyVjBb",
  "key19": "53xPxq57shN3mx1rSEysEVspsxSMcqJqW328C5ih8hVbfYEUUtnZBPa45pk61BnR8t8asmK9u2wUn4mh4nzrLVAY",
  "key20": "dqQXsn9eoJXNqjJGunELTacA3C3qdk1LefjUP8np7wzJUpXi9KAhrSaatrbW65Tj9Bu4KKSUw4sX7VME5r8G9YR",
  "key21": "37J2obB1GAFB5wmNzYMf3nFmR2WmXWRw378btkWSJ5sKiKK4ePqa7tBEqhMTnRgnyoY6qhHdgu5C6aHvUSrxHMa2",
  "key22": "3dPZSwH42DLFL8DMytXy9v2bugojBp7qBU9YSodocSLqY39JWEieYeyygDUBbofhFr5W2jwiTyt34HhYmLvvhCaw",
  "key23": "2VKokPnrHMUBcfw2ASpGSsJh9dJcUnJ6J5DCaFdCgKqWioPUhiBoQ1ggsDSGnLPwkWpJ3gBWRYpqbjMkZii425cv",
  "key24": "2GReu4V9kMo9ue8GZyUNezerJahoT4x27K76jKKpqc9ESfvtkBNnchjFu4b1njf1zgE3ETn3woLdn2sTdF5zW7id",
  "key25": "hBh7kcMSNYw3ZquHDsMSmExrhBfg5fqPj8k1LDWoPBtC2gREkQ8Ap2aLAXfWsHcfBcYunDuf6CwQVGeokQDBXaf",
  "key26": "5TdoUF5Dwhkf7WbYJ2WoFSYGL1HGQSEG33qTAUERkQ6kPjmDDowGQkZWRKADgMFbZrh7JircjE3xDHr9mQoZJogx",
  "key27": "5rN5jc9CxFJh9vU6uSeX18QPykHCprFezusCLTapvqMdN13mRT1wMrHPpJGSTGNxiSQy9z4pxppQ8vq3wkqe6WL2",
  "key28": "4UcfbrxaG6KFHvMYS7BQCij3bAjbAK2uVXgLStiCZPxwaShwMihZhArgZQAyww7t6aUes6FGhHpduzb8dP81Sgd1"
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
