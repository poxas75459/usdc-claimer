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
    "3yavYM49yQnWNcWdNAhe8TgCMKpGozNTziQJSc7SBE5xh6pwh5rwHTaR6sN7A119WwSeFTz5V2Srh9ZzB9nKdY5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qaXpfgSsspVp1vpa31tWi8379B5Q4EYLEddq4nqEGDJqo3DNuF2Kiuqa4WadRCBZBJQf6oCzVfxkvSfnG4YTCoa",
  "key1": "5wL3246iMw8sx1b9Xsjd5jXPVtaLZF4MmBX1rc4rwRf4ThNYuzonixe6cu98Zioywpy1E9wuMM3sQXyQTN4fkEdQ",
  "key2": "3gyrvnxiDCBHXpJDwy9SkT38wzwceEeWoj1gae5Qo3UtQx3Lk5ktWqUiDysWXr1dteJGgt8cEwuMLyJHYba4hkB1",
  "key3": "2GyZrwdaZbDouNQhoYFiaXjttUurCTrtDYKumZoMCbmYDNHTCGvt1UK9QBkpmC44pwsPQqcBSKLDKwMdU8puTQby",
  "key4": "rZnaRm4E9xDZ9ryLKpZx8SF2N3gs7uHVVcLzoi3umQNGmgXug6QsF5gZbomzBQZ7kV7sycL1HN29iHXr3u7TDS3",
  "key5": "55kAVfbtM3F4NSaFYHJWXsvTvMv7MUaCVVdyN7e8UrAXcTA7miyFFy7DMGarD8e2RqHCwDCqveDpMhvcCx9W6hmn",
  "key6": "5vWRsFFRZoqS2ErbmWWuTk9w6yh9joD3aR7WS26MFAsGPkTrgwssHAhM85ikdYUwRxNZk1PgiLHFvAm61QnyGpa3",
  "key7": "eYctQowywkHgAgS1Hfub3PZ5fgrepZ541spG69RvZdPnLKAJ32rL2ikk8V7DmfRUBqU8ew65Xb4dEXNYCPwgSty",
  "key8": "cWgEwDzNtbMq3Defb6ZVL4gvN3gbCjHpMkyaDEQwGtfaf7QdmrEB4QetKC7GQHUR3BVkKVCerCmh6RK5sywQMby",
  "key9": "44rrZsQF3rpho5GCNv3JcsNgPRPPm2n3ZsAyxkeG4p61SCFGB2k5tNrXz2NjS49HjyESEDGiqPso1zgmhZ2M6tRL",
  "key10": "mTLHb4kVN1q1CQ8pDXQBHJriezyJKWrhik83aDinmuwQ7PdhpSUzMf3vJ5QnhQP7QY9wgJTXa5r6tSi6RXWaQHu",
  "key11": "3ewv9qw5ianD9xHwvdHNB8wLi5KFevpYa7AApYgwYURkrotzf1K5HZeKcrGwNDgXssqZwz3Dx1oLtL2aszbn7b6E",
  "key12": "5nmmY2kNPNUvY3kZWSA8HpyZ3bVFjFreTt73Yp8uGMKNFYowXVuFNywdnvXNvmJdREVFMzsfZcHVkPGUZaz2wveD",
  "key13": "5EhBNFBhBfVt5YVdzwvmAyyRafg3ryui7ZoQeAB7UCdo6KBX9f3xDdzyFz5gSMh8gbk6eAzPme3keRNhBToSNYV3",
  "key14": "4tzYfa1XVFkX3uUipoXzsJxBCwzMaBgfirwujAdpLTfz2fyFLVLsJ9ZJTeQudqDbJDniuMuBbpAGqNKtRRwP9s7W",
  "key15": "4qToSEqMFmX4G7uMiESFrBjnWJ5ukNHaCS7geRApKp88XYM9GQaKSEJHoYPjmsKvgGh67ZjqqzgSgR7E1i3vpobo",
  "key16": "39Veko5E5PwbfGCLz5qXiTXtYQRfCh5DT6SWktHApNnFY2FTHZqZghDMGcsZTckY7bCgpWypttBnJMWU5Zt2hsMC",
  "key17": "3mDTQkR8Q22N2aD8VF4JUqVG8ua73uxQMaFzhiynBkaNnVHPDfB6cmmm5WZdNgitV655zu9PrKUhKkdTjhv2FwCk",
  "key18": "2Q5PGaotafp5caoektotiayw27mfuhX3P3qTp2PnJ6GJDHWgz5c2RSPjFXxLGQn4Rtsv8Pvz2sRn4CUeMaZSSch",
  "key19": "37RwteQrxTHSk8NkCLfTRiHMM6B9m4xfpMubRQTeBVgkY3DTWdNLn2Vn71EPJcihg1R5t1PTQxMuRMyaQG1GPjTT",
  "key20": "3YM9fTEdUmnJJhozqUvYop6aqdco6s7mYBWZ9Bshkiutcjg5MTZNnhBHkr4GnxMR2AUVafZqrBAPpJjAvTyKs25L",
  "key21": "4DSKAvhraJBDbbjZa53tM6PqUcbbFsSCAyEpJx22cdmip31J9rorXYYy19x7cB6W7kT4oa9VJEiU88LZY1NKgiKH",
  "key22": "3BoU8Z8JAKegKLhVAm4bsu82P25zXSkhqoooY7JRjSaWyzxKxHmuigFeCxBca6bPREnshAK25TBCASdy7b5RjDtA",
  "key23": "2pi62eNGSA6VAgCprzTDiPAoUtB3wVCHHx8Xxe6dmRRsEkQ18E11PjrFXJVHifviBg2R5GPtAsXK7YKVYAf5mXXQ",
  "key24": "4R5r11zjSmMf56sVh4P7gPCuD7a3Gao8Qu7s5TwXeT1gWaNU2W6ynrnXQBxd8Qz47YALJyzvKycdRkEEQdSnD1zb",
  "key25": "SUnqiJnvXA5hF1pLG4fDE2Q93PCq6f6V2QNLHq42UwpPNLVv5bbiuKedTbMt4EZnH7MfDtm3C19NvJ7tJ6nkyPw",
  "key26": "2Zs8jnMzP5Lpx5GGHnDKZwzgu3nUFCkaMKFCc4K7iksscFXJV6qbLoceeUFK7Vhjv3T8BNdWzuHmCpesU7GaZh5V",
  "key27": "3pHq2D7yxb2goLF3KqyauvVbiAtFvsCQV7panNLzeDJa7YPxrk1f1p1ZmSRboiee4uFD4sjE3h7WFzC5yANcHs8y",
  "key28": "5uhydpa1v7Wer2JviXsX6xwxNG8mMWiA2fXSVjJULtMmtj9bPvFkJRTuEsWeGpcjxBeAvcFQ2d1RFZeaUqPiJeVA",
  "key29": "49JeYquHPoEiRPaM7zhUK54KM7MvWpWrdDmsqnWqWw9xw59EgBqTSoW1HrvkA4XRx8h78rGVkedjD282M83Gc4a5",
  "key30": "47m9mSTH8vcxcTFXm8YQG76kPVePXS9Yk5zmytreq8W79Qxov4GPthqnxvNiTwnNp1A4dCwwcTgN4pa1Pwd7Ld3r",
  "key31": "2SxVSN5LC1xBCyEvro5mW7RcWrdeHFdw9cJXV96CisEbVoGhETw3jcmjkm4ct66D5hAprA9vQtnmqiqGniJkzJ4p",
  "key32": "zjd9tjU7gVvaJva7fmkyw5k9YqnkwNcV25gWSScYGfxtQRbhzkHV45V25P467nmRUuqLkFUq57CmsS92ZSmReeo",
  "key33": "kK3mn68gdPR5wyHWmWXdbRBxB1PPzthvngjSnvE7pEfKvQZiimsQfx8fENttDpm3YiW3Zrtms1WbFyQbhqVwfTX",
  "key34": "5XPJ7iu3Lv5qKeW8PNXMS8J9wrtWbgWGp2Nrm2GA58z54fYM44TVu6j49FWgsGwvdr8U6nBBbZd1h9oC1SC1drsf",
  "key35": "2TcdDbx7K9B1eW8EW9NvHyJChcZdP5NM3NUHzhNEETaUv4oeTqSk39Arc2YNa1aD2vxm3tC2qQZraVkmwyV7Qfci",
  "key36": "3fKTtd9cTqeq3WwKRCBSa399GXy5A3mftT1UBVqXuvR2gqt8e1xpo9RLWusKWmrhqCVgEVffRNKwseTiWy1ny4dM",
  "key37": "4aoLWzUxtAHa7UknBqJ4tWy9dEJ4sMJPMfn4sMF3NMm2tWjtwY5qL4LkstkqtMFk2oQNdXm9mxGe8uoPibznMNvw",
  "key38": "3mJ6gBALK6shRjneB2TUta19kjJtnyoWfCs7PLHr1YWQRQj4kZhj9GwbuHG7bPMZGrQwbvke8EP5eKiQ5xUEyXfg",
  "key39": "4GZNkiQgaQ8YJ8mzwTxaFASV4R2oDCVznhrAz5pNvP9QnCQ8j8Qn6VoNmajEVLtEaqcLcyHXnfRviQ6Q5zeRLDdd",
  "key40": "6stm7icai1pV5uMrwBTes48YW4LAe5t2aWAUv1zzpNPtH3TBoZraVHPAyBa2UiexwZBTXaBYdGRzf4XZvkm8uB4",
  "key41": "vmjGosRs35yN2kvRizMJP7SZvaeLy2gb9VExU5PnmwBu17g9ZBNPNgiGAFuvttm22g4etbb5wiwZGxqxEtpexA5",
  "key42": "3JhHSLvp7LTKmE2Fmcd39SuY7xwHwfeP83oDvLfwRN88uF5kXqjY6ByWznWq2gQKuYy8kpxrJWKQaqypdZrUDFDY",
  "key43": "Qa9d1MgJE4cZCwhzKzNtJyVvnCttmoQYis5WSWdfYsM4bgxjaH2uJdKXFhPukdUWBFcYx82xzCPrJc9CwJjoJZh",
  "key44": "3XZ5XdZi6Lr7acFgNJhBWxQSPwyrKVcHvp15bYM4qvSATDUZEq2EpA1WtZoj6sZUqHCqc39aL6kbv5yaRZ2KfdT3",
  "key45": "Yi8fCoini4X8NpYL5RWbgKdQsNmtAAdm6dsHiqW3BWud9ExnfMqafP7upAjhptALA3bp7ehJuoKcgQkJyiAtE5D",
  "key46": "39FP9XuwvSctaYdgMzJNe3ck6HpN4KMLHXark7HLmsCfxmRpf3WWUcNgKn2bbMq2oyMyXA41LdMr2HNeyX3qMZT",
  "key47": "Nu8xEGPf6HHEDtjg6r4DsoNR97PVmXi4Y4753K5xnW6Rwvj3CvYKMjDMpAtTksd57qTvmaqKBSbwJVbtvtRFGXr"
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
