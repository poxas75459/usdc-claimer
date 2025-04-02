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
    "5qHt5LTkTuPLVjWoqMzXWpDFKNp9fUJHCxpigBKnSuf1y5KX2fUpnKRGeDts8rxdhznkZfqNw6DnbfMnab5e7tKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bxerNMZYZgMqYjJ46ZsgATtese1SwxYGBCCRxk7Htbz1xofU37iC1GC8hQ4XRqUuxh7eJEc7fyo95RKpXELjQQX",
  "key1": "3NaSUFeSr8i4yJ56ebuqm13Qhg7WGUj6xzfy6vgeCw41NYDJeBtkjJjBCfrX16YhhgzitCDWcBQqVtEpLWpQ4H1E",
  "key2": "35RXfzuCqsnqwBF1gMtcXVDJBJLNUMK3ypYUgr1hGTnn39aEEjQdjSCvji9EFCQs9FxBri6cYt8oDQKmasXE14QP",
  "key3": "5imgawJ5qVejFZKwKnCR7p2bsFuGJB8rEH3amcyfrj1ZYiesjRE11xNhgqdNEe9hH3LLuPkkn3NwXypmJ4qhKSyb",
  "key4": "3nEXD4CHksCCxAYHopKCY19ioizysdM9quiPJXTM2p63eP6tF4kuXSKzCxGdfeiGUw3rFPeQZ5EebcoWGoQZN92c",
  "key5": "3KkYW3t5GRZ5LCKs61BLZsNxuf5Wf7MZgX5FFQ6TkNCT6WBep1sGt5s3LnfVuRetkJhM4CeTtjAFpZqmfb6rxBEM",
  "key6": "5iqScZgepinNffUawYVVKqLRJsnsnYYpv1uXDN1tkbywcHZGDsMCULpsG5dcYKrtQnXNoz4TL97iwXahNARZ18vR",
  "key7": "21w51kMYJnjoSfnheK2K63n1oUjpqZWh5Kbhd6RL4jZqZPgAzcWCJbEXjT2d2BrpThAPQ5X7zKxXXxbJ2tLBUdp3",
  "key8": "37AErnxrEm7KTRjyxsAUXZrzqnQ2xk6Fn94UrtANJFzrWKXkUFasLCnueeZidEjhxUvJoqmcjMGptKf8EqXxA9GR",
  "key9": "2tLT1mYyjYjDU1DzuxW8LMwf158XN6zQEiLerpdyr6UnyN2LiaadECCyd7qq1EiDw8R6ZoB3nWAv6FxzgtmWwY5W",
  "key10": "2apUqocj6Pi1zHiUr3pLD5EncEAgRSWxxesicnvfXbAQ661TqFmJ8vV7jxq3rTiGJUr5gFYMUxAPxLgt3gsNRUPU",
  "key11": "XqYNY4hbPVpsmEKiZ9mCJZhY4zCJ5CVizxHihUprGyrERyHjJ8ZAYgWGde5Bikv75BQksmCjKcEB8bc6SiYxVq5",
  "key12": "5oEWrz9s9S7qadyZwAMJRV7uAutcbwSnWEsjP857dT8SjGEcPDU73P5QoLKiE1Zr4bRowdujYtGN1hvRdL1ahBbg",
  "key13": "2Frib4N6GEoEeaBkm4MtHHw88RNJNsXPqSuoCbnJgCQ35kNcbWqtZYov73aECCKZrMtni452L2CZp4p2sUCoMFpQ",
  "key14": "5K43C3hNqE9FDBLDzwaCiZZuK3qRrivdYVjD4G5SWB7Vrmbv9dQzaBKZo2hZegSN5wZxfc4LicydTrMJ7yHfPakc",
  "key15": "5JRZqUzNHUjuXmGUD1Apj5pKo25egUAt5gk3YemTPT2hDG5991o4jykRrFcgpbPvN88JhF1VfnzNuoPYvV8TB1Rm",
  "key16": "4ZiBcnjR9oqR4eW9mmAxnV4i1VL698a6DrwFKJfHj2rff6uT6LCM8idtQ9sRzZe41zQVMnJi9CVLzZ6Y62RtRnfy",
  "key17": "2MD71DX4qRZWbZXfTDbwBgDtMz2ucqJj2ATLkfYzPejUpoThbnQtM4rV35TxwzVso7dzQCrDbsADfDbTDkCeZFV4",
  "key18": "4jUkgt7g3CBZ1HvJSMo9vvJ6X9g1ihai7YzxCj7FueGG9n4AeXJ2BA9uC8Krm7L7oQ1FZCqZunMmrgpTDqgShtzw",
  "key19": "2iZAW4T8Mp8dRUzPFofRahANwW7ybYktCwF4v6wNLNQuby6qSFtXKtzLN1QAx6ukB8DyYdtjFDRWb8dHNXSbtz5N",
  "key20": "47oLL6gpSKKjpaXxPX5AESsFauf2SDKbCQ79SimkcmuJYr8R5yz47zeW2vjdejpZyqNVA6yGDxnsUrvpGRosGEQm",
  "key21": "3pwr4R5iF1VGw5LjdPnYtpsZ5UGSWiWzemsSrBgGhxXUchLVm2NpDcDkDUqyxUSzuE9nisvYvT5BFKUgfFbzHc9V",
  "key22": "QXjABytiGibvHpd9yXk2wpDoLkPXztVVmmEMtpoLjjYuPCMoXFCZBUV9U4hRqEERzs4uPoEHPsVUiegqeKMqvNN",
  "key23": "g9c9pZcHsaqoSAz5MkTo2GQzAr1RsGhoHERg3gqLNmUMeKpmw3Ce7QfqphwQih4hG4CbECaDZq3TdbBRFJa2Ao6",
  "key24": "4WCq3m5YDSPZoLhEd7y1RKQrwi15kvy8hefWx4kG48ZMec82bFdoKYK1avxzRfak9KhJ4wRzDANfNAmDDAtgXSx2",
  "key25": "1KVRUHyNAx1z44nNrWbEW4nvkebN2wPStoahhQX471PEX2SxaDuTbY74vudUseUwgbKEWKto3pvGo2AMsTCWCZS",
  "key26": "2ex332V2aFSGFR668Kh231FQKtka3F2wcoFpFazXrRceqYMib2rDFDDAwGkDkuUNWc2hDpbw2i6dRSncV6Hu18Ks",
  "key27": "4v7CvMUtZaoruT3aUtBH9NBknanuQRvYuK1DZcJYqNwhryAQpduFxu5rpTAdCuo74tw32ELHg6fXP8p3f6Q86DyK",
  "key28": "W8UGtha75TPG3p6PpVpmkVpiR2XNga5UJ5K9tg2rBbkrGky6mwDZEsMEepVnfJstFpFVa5NjrDZRywCLNLwRXvQ",
  "key29": "5EcfPLJdkLxvWfK6tjrz7SHgmmzeRt5L73Y5d2n1J3QMcvPJxogc1GcuUNyJonzpfSKggVE9KtJejjj5NPngD98H",
  "key30": "2KEmkkDPP5UFPdvnFGkHxLeW4JTd9SekjEJwE6YXTcwHhrzTzrnL8n3k37ybuWFtCQJRNoPQEbPhzhGoqFncFgg9",
  "key31": "5K6956b4WzUjXbjnxmoyoDTPw2anABPn1D6ELuDxfMGvTyBbTyggSS5qp5i2DW7VG61X53MQoy83g4gHxDiukuV7",
  "key32": "4pv7VMENU9AoCPChChb6S69kASKh2oBW26VNDU7D5rJZkDYavq9J9hx4VWoHziLMGA5iSkAow2Z2TrHzvSxvtDZP",
  "key33": "oFDqT2FVt8wfKJekAuwqXLWE2hVNE1gZWzgc7tLxWBL3qJ27XKDJpWvAMA6EzZR3GH8oPQNyF9uD3DLpYHer91h",
  "key34": "5YB3oYq8nH3743EnXAznbVyPyW4pAXAnDmjarpBaLodk3VvAFwZ7kDqdJgkzT6AzGmmCry6bnxWPtRd36kYb1wCA",
  "key35": "3T1RTCusvCY4ipq71LwxctFw1BQw7Qu8NezYA19B3Se1kwL2NTuKAHsJCA1PcMjppYcDZnxa1kiUEAyc52nzDiNK",
  "key36": "3XJELj3WhjCBUxL4HNfVXzYhh8yQg4jLJqcVmZdon5gMYmSiwMQMUszMhuefbFG5h5qDejZSHACRQjYJzuzF5Qk",
  "key37": "3hQAAkFN7EHs6DU6st4dUWUyTAt5zFstDuoZQoaPBApF4PSyehNMF6vVNW6SWHWWMoXVgMrV6wEjZobThg3pRDMf",
  "key38": "5QhuH9TJjBGqobrQgto7tZod7aNLLbKpM6wRJ89U8N51hPaHxFaosL6oHmDQCGDv5heGQevSrBB58sjcpZCx9SHA",
  "key39": "AHqxiXutfj2tX4wYtEk4gKf3HBYgS2k6eEp3RSn2WksBEi2c8kq6R844odUwHVRoUXQY3BnbuKZBhi5Vqcg3JdR",
  "key40": "4KLN36xNRNtf4hd9Yhwwc7pC17esXnoxtsesrfd5Yyh6ERzJcAFxJeFLshgAsYw3LquduwfPrC6h6HDewQ4g4zkK",
  "key41": "4o141jGKGWGVXmidofdtVY4vcFwUkFVg8aCxrzqik5s5iG26w9qqAdt1bviK8jQQTEb2zBmtA2kV8mToxA2Q58aT",
  "key42": "2Tt9sJKZnWiVgH9K8HoQcRm1drWtMtDEdUtitrPcwCERWPzqMHDxygZQFJr7z5FiAhYfR1z76cRKw7QAxnk1L8sv",
  "key43": "2R3HSYnbYUiyqRRZH4HN263y69ZVZoTofkD1rejL3uBDmGMqBRSAVJ7hX84kiKp45NG9WU7RXZ7PHQ4Fi8qejMqs",
  "key44": "346McMAuHSkWSjDTWTSTBzM2TRwGJnHnNtQ4qZsMGbhq6D8J5dEi91CHRg4Chc5J1JtthuC1kcQ4TYNcHwg1baow",
  "key45": "5B9AGwW9stqb7BjuSuxpotB7bjmrcdd1vxdSAQRzEaaBbninwgKeTw8RfGDy45Rci7b6KEEiTeECpZoHwGnFGFzn",
  "key46": "3HXHWUDqbGLpk2gSd6C7tTRCk863GDMu5Ehgn1wKMvcaBUtUYFggV9T7PdZPd5MW7zKbAZT16A6jZFDRcpCR2aC9",
  "key47": "3trEtD2e1jGZUwH5K17vcDRvnQ6XpL1TDg8XDaQXupgp9pu1rNckBQoVpXVVz69DAkM1kcbsNUx8WY4gpXPMzcJz",
  "key48": "2kRLx8F986UWa3aMbLmpGsPC5v4snHzxPSiAv4Vnra2DTAmVeDJzqjhAAbCtjV9yj2AYkeLv9m6q3r2URHRHTnmB"
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
