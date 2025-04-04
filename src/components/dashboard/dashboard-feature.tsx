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
    "49hCB3WEriZJLjf3tzKL1fa6pMXkdcN3tteG4rm3mYBWYxX4LrMTnrZk8TmSZacYqAEctQrNPvpAeLVEo3ZbsVTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VDwPQfeTzYLUBzttfpb4TikYwMYuWs8vQx3LyUSqqnMMqarK4ExePX9cVuV5YxUADucfiGkNi2FAHwCpcHhAd8r",
  "key1": "5C17qFTjFd6bPrRHhFodiPVroMeP4sQoMQjQVWT9cgcU8DHN9xzDcrZSq2qHNJScPA3mG9P3n5tQRTyscmxvwnnm",
  "key2": "3C76Roo7iACz78dZdnFzrEHntKSPZXggmzCb85JwUZnLHqR5Vnr2hdY8sbG6i4iKqexmzhgUhDXtx2Mgwvg12WSo",
  "key3": "2h4JpuKD4E3PNX7JQKrEmvKF3gM4gtMd1vwf8Sgj5YCyqbPSN2z6EAQC6VtB9U4bGM99eZnV8fqT3aXqsg8L4CEb",
  "key4": "3HSC1qgyd9Aw4LEE2C3gbvRfqGC76voja2QLdGZZD5V5rVPSLmmaTjS6WHSS2sA3hvEFrbPbjJ3cuXk4XFrJJdDs",
  "key5": "5odgMSpQ7n6CATCpihPQs45VULEBPupm48pWPwiuzCj6CHHo95zaJK2LZxWCFVAAC4uHLW5qjvHD2hZW56iYXtV8",
  "key6": "5xGKjnYVmd6PuRHRCiJj5mAJy7bHT9qC1SXzjHAjHckfPKRqts8vaG4uSFH58PopuGPMGTyLL14Aw3qGuhccYViW",
  "key7": "1A6K3XtHjCE5s5kUMr1Sydr1CtgPyPBTYe7UGTM6v8XPP5adrSQBwKEEH7tyzBHXDnFYLrf3mfRwwUXg18JNSkw",
  "key8": "sehWh3Apcy5zBTvgPsagbGbC2CY9KnPctbJg5QA2yEfu2QJ1anBDQTPZUwbqR76qUUgRnohkzwS6ah3XNtdcCv2",
  "key9": "3LVdiUnfqbLakPw1mtRRHwfGxA4YpQidE162rA8koLadUCCDebb4ino51nsvFvZeDk5k39V5cr8ymFBLJBA6H6Vn",
  "key10": "2JFipdBq8g1p6rSAe7eVZdXppfWSjsQg6Hh4yTThcUxmKy3cAKaZk44FazNKEGe2tWcGPXJa6ncc5kQ4ZY6QomKj",
  "key11": "2VNtHVQna6ofh3oHVmsn69frG8cFXpQu1mDMAkHZb48aSAq6LS1xzEDAaVkPxBdAeB8voj2VRU1BuRym1qegvPz3",
  "key12": "3UqkfYNDhGvqiA5hNcdv4hGEZRozYjQpVD3J9bYHLZh4eqz58mR6bsxiZVNKrYaY5cQKn6vsZo4n61XewWbFPc3Q",
  "key13": "2jXc2y74uZX1MVU59WUDJEpBq2vvbcbiPvBpkhP16AUfnNcPbFHD9TpZBLviZ5gmRs7XM5FAETfjLDm398dJYXFr",
  "key14": "35PmxmTCDWGckk8jjNobeLHeFiGW6KsVYq6MGX7kE1Ct27u61FYVXi1aAoopRirnNkq5p3X2tRFgQYc9FVAwwpAG",
  "key15": "5zjETB8aMFYoU3kxqjK3rQxdHucnPkAiU3pQATe1pzen475D8Srs2jc8Qjg91RCo8f9CCTKQMFuFCD2Fg3C8wGY5",
  "key16": "2xsgyNvc8zbcXJXpNxkQvDUGQxRUmY3uHyLkWtmdD4rDwFA7py7p9X1fqihq774vapqiUGzPVVWgxgiTnY14Q2bj",
  "key17": "366hCK2tSPAafwqrTdkKY2vfhxMV7tSG9P7B9dYyKWXcRMx8HxoStwrFN1r1Cpy4HArNuiK6UQkmqHWDCR4L9S4s",
  "key18": "bSBEGokrgX7k6FGXKmEwbAV2EoGQjPS7XyeGq9dHUctnmnvs8hnCk2rg8nkWMajAm9rnLsuktutGPymDAW57qFi",
  "key19": "5gvBZ1gHTdX4ua412YHCqK82Jp7qxHwe1T7ezLZRn69Ac1q6zQ3dJ67ZgSsgMaAxFPW8Z1njdQwwiP7xNrnvNitH",
  "key20": "3Dwheb8F4ZGFftoQSL3gTBu6qspoV5vDUpSVpJR9J7H3ypVmrrAuzpiHrgz9WRDkbMcNAyD8LvVN6PvRDMhQ6zsg",
  "key21": "5LYCaHW4usznx9ZSk2EABJKAMm8PMQtzNxmdmwb4XfiYuQwhYBHoRauRdgYFjt2fkZDX2VQ6CTuMETfoSjuudbA2",
  "key22": "5CeogBihRkr8jH57KG8ttcHtMMiis3iKc9oB4Qe1Cd5GsuivNNvz8JK7kU6jR8HX8FSaZrxrRrZ71oeD7UMnWAPS",
  "key23": "5JQL7i6qY45mBNohozWVoF8Q1CUkrLQ1AfYKEdzHSz5cx2eDdcze1zwAuwgVJUGNtSFxZHF2sgAr5t9unGgMhHPy",
  "key24": "3kZVkyGLgMu6NYEGJHet6JcSfHezwhVtJnZf9K6q12uX4oN8B3A5JH6mfCg8Q82hXFgVzqKTAcf6P2ykotUizji3",
  "key25": "4jJdVvAG9kYzMnnWW71ehWJ5vPoMR8NYYbLb9Hz9vor6c3w6XQotyZ2ZX8XjKEqo1CyuWPzHLxgWTRbqeCnu5n7t",
  "key26": "2VHv1DwqbBvxLp4GREQnhe9VX1aGbuNWN4fSMjtwrFJoCH4qWgGjoC1dnnSjMHzhcvFKVAKXi6TndXMXWKdsUJ6j",
  "key27": "3GEZs3WsTukkBBqq9LaZJPGVa5oHzBNfsmZyTBmhHvGkZ8c5HkUGULZmEfyXvGMyYzXD8ihL2ZXJb4cVtx5bAKCn",
  "key28": "UnmnxsH6RprXW9W3euY5H7nUdi54zPqeiDrzLnhbfhrmKhSfWB2Mhvw7JUuJ9MQDX9SDvdKBtJ5c4DjcAL5Tz1p",
  "key29": "2uHrh4QNYcvRE16nsW64GEb2xc2Dpkq7v5hoQmGorYKwZepim3gQoWFHWWnpy86Ymdw6fhZaUm9LXnBydK624Nbp",
  "key30": "QNbxRaHBYgzgAWH5VGruMfgRgoCvg5v3XnCoepBCTo83b4vj4Wbgw2G41JTgoaGXFsM1HrUELMm2W74WoKFSAMT",
  "key31": "4vUC63MpydMzG7sXQ3gqoG7maV6oxPEMG6zto3hTaSHXG2VVue4RUFsjF8kBDU47FLdyy5HtdL7bNQRwXvssFowB",
  "key32": "5aV5sNSxz4ytEA2Hynn5Q6uEmE836J6fLqpNCf7XWBUTgoUmV6HBd9zzzFVuVq6vBtgczmeWEwM5iH8kunbDGbxi",
  "key33": "5Tsbss8T6NjrYkHZBbCP4jFxbhQXUx8U3c6FjuQaWkN4h7msjumgmtexb3TsTpeWW5FTUbTxckFURoCQATBpSQ6u",
  "key34": "3vyeQf3wrgzVWoffWhysQGtuQNwp3p87iKq2qLMFrAjoJPBFdegsJM7s5noGG9ooCWNp2yB3XMstgcd5zv5xR1wN",
  "key35": "3ejpiq49KDyxX9NrqfJUbxB9ADthQMsDpdymbPoioqz6ut6mdea2w5LV1jYtWJRzHhwqYrEZ73j86hsqwFSzb2bt",
  "key36": "3hBa9qLGfuGCb9szFaWQQoYN73Dxg2Fsm6WZFbMtNxWZPE5rRVnBRhJ4oZpdaMKMPHkyvimzdcf7UpDPHMPdBPKq",
  "key37": "294LhaZJiUwYtQ3cJ64s7SCiy8hjbXHrkDFvNs6AncFxtajcPjbnGfqv22bMDt5Ues6aNqmTDnQREKCnKYJbKHuU",
  "key38": "deduuzWFoFQBbhfAn2RewGV4RvZT55kxbSBut2CGgVd6g9PjyMnpzSXPMMQeiA94or7XSp9tVijokRghsp25iCX"
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
