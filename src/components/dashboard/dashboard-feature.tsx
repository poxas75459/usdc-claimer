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
    "4BNNMgPV1GghuJuiYTh8dGWZzGNKCigbVdhHhgen9fECdQ28KM5t2UriPZSuxkg7xuXRvXLB2MTdtDXdHtjsdPbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7MkuP1DQoEZobyh8XYtfMg59FSp9b3am1dCoupPvzscfNbssmFi4XsQkEG3f8NuRceeeFmLLEvivLhUrUfHKxA",
  "key1": "cP4HUKEyqzdRLAU5FnaMXPdbgS2iNXPamr4ncnQBMvaoC1VS2v4yDumqZHE7hVa9yK7V4sitHNYwCW2b5zem6Ht",
  "key2": "4LvwfGmrFxbKxsRK5pPDW4aQW1H9cj99TEj5YRSSYdUPm7wG4YpRUzvvW8mdynDTT7FNGY22rXbMjWAmQGXNeXAX",
  "key3": "4fXy7dQzLphWfHEC2Dv1qa8kLHcjYBkKif27qnBokDERM4Zsza2UoBBLCTPdnWzjm88jyLbbLHo5Jf4YUe8krh17",
  "key4": "3dyTkQRZEtKCD6v3XkuFCV4GK2gDjK2hf2mNQeomLqpaLQQsDJX978UV79ZoLDE2EFdLs5Am9MVHFUMzDTMdPksM",
  "key5": "67MyqCTJC6siggijNCtZmixtcv3kULAVdhGT7cRUQg85FX7SFkkT4RwPpzuB794GPA6C3MrdoiT2H4Zh9L3vcEdY",
  "key6": "4ZbmE5svTBa9tvB4spcH29b9ZowVSqv8s9CBHvhTyiJsQ22eCoPzCb58zhYLurwqU7c1qsmtPTA45rnFViobNSPm",
  "key7": "4P4Ergu3EgwxvwdVHWgjSCeSsQaQ6y3tkYvRe8EeHbHMTvekQCpgaQRtPZMdr8nDAiHELXQAzBWf1z2dG9fhaVaG",
  "key8": "ek6jwKfFSKjQJnt6BXk9nZYNgHAemrBK8u3SdKjhuZ4MdmHqhjnepRenk67tU11q8c5WHdKyjJkCZSgrFXeEF41",
  "key9": "315RMTXJ7t9zjEq49THxy3W3egd9F5hECQGWZi8Kj7ZWvt885MonWDNkVDdB9am35aM6ngHkeNaqvfcsYEBmk24J",
  "key10": "3hHZt57BG1tkqfkjf663jUUMm9bJGWwhRSErC19Uq4DD26Qx84CcPhvurspbfkAaU8zFuxRFVZRcmZFaHFjsZGk9",
  "key11": "3rAodHNvSR26vKnDC4ieDhLwhfv3uw4TfSK3YHgD6wzJfhsthxWGa8KAKgntdCRoLqj4Bv2LjeebzYjBCZu3szrc",
  "key12": "NJ9nx4y4ZFP3M1vH5jK3yzs9HiHgf5c3hMTUS1M7553dDJePYNB5Chv3j33yJBNYjmsDFNaAh1FmyjNje2abfpT",
  "key13": "4hZ1imXM1boFvu9Kz8qrdMfhUw1mphSzu3ErJhSauQTR44BRmqF3Sdda48BBy1Mw6HrJnUqenCR17pj3vNggdALq",
  "key14": "4EUBXwo5kFwV6XNc4Ctxr9XL6Bk51XspNJF3ioLdLwXvhvwyzbX5cPFRTCFBGbjXWB1UDD4W8LvstLeGBuJUfKeL",
  "key15": "5qgnDkJ8fJ6zmks6J9LFfiX5PYziPcE8FuCULj1Ak1LVWxQyeTLkCP7P51T6oPLG1E3Whw6zQTqdkaBcUxSzF7RH",
  "key16": "2x7fhoRr3EujJJrhhayX2LYPGVRNTm5NQcg7LrCy9Bx6DDEy8aXeBehZnknptB8NrdpkbaK7yu3jps4Zr3p9Eh4o",
  "key17": "5c68WN361LctUomVjfWZ1r8xJcs9eMrrFJeErLsx9MhTCPerjdxwoyvNDtjA84vMjzA1MdNGFV82PCkBKKTg7NkC",
  "key18": "2DAxWouirCrCJPWuXH932csCFAFxsabzS6jPH62kRMNfy4zW4rUQ27JN34kdL9mcvipmmhadt3QPqhLNcwTm5MCG",
  "key19": "3MnXkLuSRj2dU9D8Kpf11pmYXGU3W4mXWzbFRLEzLkehzq8dVSoxkPofeyFB16ey4PfTryjfGeCVQh7yLMy3jf3F",
  "key20": "komSuEDeRaWUCSeD8uFgEJavrHWmCEiojnWZfc3ify2vVRKfvjaSBNx6qYpbifxtsm7ipyjoddrnqY9b1K276oN",
  "key21": "2CUHcqScXpYs5mJXxXe7oA1orXPTuCghRXscQvJSsJSFyKsP4mvRN4PJBDemuM1pFzK7AMV1sK8RkCHzQTQEH8DD",
  "key22": "5DDJWvNZre7mSWfkTU13tg7oLuc1nAfXgGUNzB7bwkLzsen48EmvWFodwPK5G9AWPPEyFyhoammY4gPbMvjhKXWa",
  "key23": "5RiyXWKKnZLpkH6dSNbrTkRMuhqEUkYQAoMQfmjhUYRFzT6bzvSyUwo2hp24VQGTcqDFkz7bEwN9GDopiz6WdFo1",
  "key24": "5TFoCJ4UPA6bVi3Gdn3t2L4zzW9F6wc5QwGwEmhd8hGkZ5hGNktkGzf6r2trZTDm2RPAjuUY1H9C9Uu2gq5EC8Av",
  "key25": "2M59QQuj1FkFnZVzxVjZFP9ELVdz6gVaN13EPjytZzcXARfP97VtQpejGdNiYf9gSJbFSjpzYC9zow6wfZHaPgpo",
  "key26": "5xvP464mhwuBZ3T7YWbi8cV8uBWpyyuhqYoVzN4J2eZHDuQ2UVdxSKSMJgqtaC4YtSnYSjvsgdppzEVpjdABFtJw",
  "key27": "48Be6SyrC49MQcaGMLCmEZCNkoWWbJBu23YX76AgLg9bdaYtn314SYmB12XhZ15cDj3UeGPkghePk721iXcsrP3V",
  "key28": "rtjRozTWdsXVPPSXP3FfnU1ZD3kbe7AkGF8gZyYmoLqouRUn51qruutasNr22VFw26BXdc6U4ZL3JhwWqeNgWTD",
  "key29": "3YMNYPTFbH5kr8zYZKxaWDbbY4EywJCiaCPEx5p3MGuzrhDCmHiTw3YPVdu7viohA46b9LAdnineHLbobk4QTjBU",
  "key30": "3ggTfCwCH1F3ecZvCtpV3CQasUwBryGQH6BiiAnN52gpGr2SBXQXD1FKUYxoVhNFayjkSUrmk1nDMQ85n5bmxr1x",
  "key31": "5bnZFj9jesZyFKgWrpMvRtvwVxXRZFtZAHkQ4ZRt7nodvbJTu3LyPS3oCRr5VHUk9mDrBpR64Bf6e7SJAZVFkMgD",
  "key32": "S5Be6JA38jZ1x9MDgBYjqSsK9bKhjQadPw9gYtA4k3siCesKiCpX8H9ErfY7UZ82MsvUx6Rc5MGQyjdEkPmb4rr",
  "key33": "5WUE59u4vQksqC472Cg6REz9guXYkoxCa92r1SLpR792pCRYwDXQLARc6RphnsaTVKzHkFg8s1g8YwsmFigec9UX",
  "key34": "3d364JYDUHeUaVoQ82CD8B3hbiDkFRY6CVqbwR6M4ng9Qj2LeSYW27m4vwqs92YuKcLa3Bgod7WKSmf311AVDJwJ",
  "key35": "4hBEmaNp3M3pQSwpwK2V59WuMpU5aNvspoioQy8zou1APJV8NtV8aBVQBTiZiwQvB5wX2h3pXRSMKomwKXKcUXvZ"
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
