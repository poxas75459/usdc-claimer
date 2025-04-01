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
    "2cxS2zCYqKPgfB4qABHqjadtzrhYNeHByyuk72RCMQDUMFmSRcf99d1bviVQKZnXqkRRLEGtjpzuBkZjzJNtYkig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g591favTBGLvdbf2fMMUgB4LVrngaJWoZjxD9Pai1ACQpJpzHQVUwjiTwnZQrB5QGTZarWkPf7EUEseEvFPBfkd",
  "key1": "56MTUpFwmYBYJgU4eVy4fwTSg8MS86WqTkhhUXHrUFPQFdnFD7oSiyhwt4MZUtrCogDXxhtiJugkFwLHRH2z5XhG",
  "key2": "5DETzYzvwwT6PtdccNx8uKQAXAAmCFJLr5K7TKTXHWW3J4jN22ege8P8k2Kb6qdwdWvTN9yhgNxHb65Jr6ikXVr7",
  "key3": "32NeJS1tdjh5S7kCmKafTYWzakPFgaS35wEnf8s51baFrb9qPtsnaosnXfrNp2x8mdHcK9o8JFYVY94ioS6FnnBi",
  "key4": "4yReMX2dDZZL1FdjZFrGQfXGCzSoScebQdgBCiFE51XSHynCK8zhSPBPH8evPRzmBs3AxCnbkGj1Fa5AAhiaWYR8",
  "key5": "5PFYAKFrH3cQegpD2uV1ss5ovq5zUdvzYg4tYuxDC7C2Asne18N5Qh8K6kUov6PnQ4vzunqVqFrfJUjTRXHkYa4r",
  "key6": "49zbMW5LH8TGNrKxrV1BWB1SSonG5s9JVX1nPfEFob9JUK6JnL4Ad7ABoyvwPxcYkaUQa4N4hEKH3KDWTf5NHx9B",
  "key7": "2AfDm81D22A81JTC5AW551H6Zp78rPcFt7ZKUVvwbq5Z2qLie6MTc3nKkbawt9aYGY97UDV9YJXaaEh1TzCZXsR2",
  "key8": "3tQoWWWH72HYxVBu8ZueYsinSoyXUpvgkTecFiBkM46ASGnDrK2rMwztNJYgUt2prj8Mu1YEmTss6j2DTBfxtQta",
  "key9": "3QDCnDPo2ZkdQDwjvhJYUrnYmWaPjzLQaP6E4dHrG7V9H8mHRNFfA8T14CC2ngVNW7GYAyLPxi6fWWyY4rtaySiz",
  "key10": "4pM6sYKBiCHJ9oikCBhsuDe9h1xxZQ3RbGmftTASxjx9nyiyoXdtDQpHHsF7FH2pC1qGNAfx9KTxQZuGs2mB3d5S",
  "key11": "5SQF4SvdHxHncKQVp2jgJeviqWihBpFSYuZFTe2Xt5q6aXSQgwBFXHRkMsaUYu3qC8DkSX1gVYEfbTG7S6QmcfeM",
  "key12": "2K3U4u8DhNAkxt39HRgxtjnfNZYanvdXa87h5bMyabFDd3infJj6xBZDDW6CirHfztkk3QnNKoP4vA6EvwpFAXSr",
  "key13": "5hLyTkiktrsvT2THfjsuhMiKyLrkL8RCLbo8u2Szt9mG35GDzLxjwKUZ1VLAVYgtJxChigqfjmDRRvcQum1Ktn8g",
  "key14": "4P1mqWqV8gvFhEGbP4azAGMhrPz99RWErn3fQFwa3Dm3VdDB4kDS1gvX4UqrQiv1JzWQ6v9Kas1ELoF7sopZtkBu",
  "key15": "5eBVw6pobEDSQv2V6xdQ2tjtbaFxZNCTSPNHpbtu6zbUrREA5Thm1Tf428STy7s6K32bzmfkbZL6rYQccYSrrki8",
  "key16": "SDHhfyvgaYmNC6zp6yDQACinMWdue2QvtYTy3CYPkRydBJr8Xb9M5qacsbgN1HpC5HuNPVyDCvCGxDirGh8iV3h",
  "key17": "3rRnWoxsVcVnWwHc4KFssxTXJdwt4J67dXRKKsXZHC3iahzTsVLx9YWX4kmfiNFoxG7nZwDRUFUbEb2dkXMKNoE8",
  "key18": "3RRjftbmNbgfEjXVamViKZgAFxWcseZ2bt2eCMqX3wDDQrTT52SmWLWjSYA7QGaaaPsBWLMXnoLDQtdR3rUoxGiE",
  "key19": "5gYZE11SBY5WZpaorNn9pErqqXSE1468GFwJrcv4RbfaKjX5QV88dMKGfHMaa2SaQ5PFhkm3hqD8fC3QGmoxgnya",
  "key20": "XG141A9n7fh7Cok7CuHZiAw5wJKhisXHBv7GQDhRtUcUDRmTnHABX7kkEeSK91Yyyk4ZVR2VwfRf7tsSAnD1Y5z",
  "key21": "5nyuXdrVZQe6fwJVnLGX52rimYKsrcDUsDVyyrSBXvkdWYyfrCTUQbBRpgJwmwk6w16ViPPDhyk1yXmpnfa7cSVH",
  "key22": "65mvezPHbb8crV1FnBrY8KwdsHJZm7XmhcbpUndnSePkGp4cBfdkwy2agaPCSqC1xdvNqaMVE8b7Z3RswiU8dGyj",
  "key23": "37rAqJzrX25VsUD9mmYFi9F7jEGPEGZvhUzDxgUqagp9RyDYtjFqUoFYk2wMDNndeZXBAt7g4ep6vKuMmpzLNkdz",
  "key24": "2BGNmvMTM6WFB6uZkezcwHu3YbFJ3XFGjkvUP3bTUEP1TP1Ys9j8DDGtUN3m2SVvdHnckA1YePGBBwyGLRVnyb2j",
  "key25": "28s2LBhdNZPPmB5YzWTnoYBTxcAfUopL27195wZfwCAWaJZyzuf9Ms7VVoRfouKPK4BPUXrM4u5Ke8USTkaRvAah",
  "key26": "43jj64zT3XaN4RFnrvE58SV81eSyGu6az2LLCWn4s3BgaTDjYSQuoYkFEzQvpfAppV6gsnvYnkMwz3JNw6er2nqD",
  "key27": "3fzrC62LCoPGEPu228rjLrfRv58ki7tiy6xzezSjtfNXDZnUuQmrQVnrWjrVum21Cq8uXbtLttphVjSG23LhKgcA",
  "key28": "xJx6RqbsVRJ3TuXD6k5N4VHcVuHMdqP4CL9iG8wNKjDDGpzmVYjLfCxmxuRAXt9MvsZrZod8Jjh4oLYtWr9TqRW",
  "key29": "5nhDSWtTQQbkVHFcPeL7Z6HgsJkRXY4WbU139jZgGbDsF7VAS92kinmwuAuqKpYG9b62zmjQYp9gRbebREiYaeaV",
  "key30": "3a5W2opgtdeTWTzaz55bHqUCZwDxneLf61P3maPz9SE2zMFibzARsTXoNFsN3CsEonH1MyfmoM2PYnFgTV3nTcVg",
  "key31": "5Ab9hZ9TRH2k6B5cYescEY4ecyv5sgJvn9uyk24syDdvU7M3sepNkR516feC99czf2GtvJcsMRNixFp6uth13Jfk",
  "key32": "4VeqcWAA4ukHRAM9NJ1AepP2Uq7TLkSHtndjkEo1zHte91aV5jyaVsFkNp6WQ8ngnMsFF9nKQ7gdbqEMimKE5C6z",
  "key33": "4dQaTXR9aWxYxZjRRM94ciKJty77KzypPDrhYxL8t5MTQLV2TUcDDrCoVhCeeKbhPaUN1DzYctFrzbPsSDpRWGGm",
  "key34": "53QSmybw7H45zosfwGJXTcN8Lxcuf31YzhxoJHdcH8FbwU8jCGBRkznDmXhg3eBBS6jZSfKUsfPvwVDCJwK5Fw4z",
  "key35": "3PGCmyxydFz8mH4SuntHD8BE1hcjbVo7Qtr2BHJVGRhU6wwWJJ4N4s3n6WwPDj8AKeQNuif9cd2DZoeW7aAd7uE2",
  "key36": "4tvszzUuJGCQXU4Rqu8gApSbzdHxRc3vJnHKXJJ72ihEKJrWcgMu8ct8uprzhetcPfn3kXxUXX3PvmRek8tD6Wnp",
  "key37": "2P1EgZMEBeDJg2L42LVBLxPyFFcSSS7cm2VBN2CQfbfXgbUbxB1ydimecq88NFurbC4BmZWput56gevdKrzbdujr"
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
