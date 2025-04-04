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
    "2MMsZJxMzeDkNvtf8zbTqYqCtckRFCajMD1Ye9VAPARDEDqV63XUnQNg8c32occ8Sfp2UQXKdBtTaZK6uZgkUxLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yRT2ZiyQWHCzfJZCs3TaUwF5PCWmAcpT4tYfDNRgcfpgAGpxzSAKTqqWd8W7rBcxLspFyYAavHJCuP2JV4dRwPK",
  "key1": "2teX84cnCu8Yre4VcKBXYcMFgx575an2eSX7xbofhDZwJk4YsbzWZkmCVwB9yj5xDXHyPe4y72ffNrrWQ4qJQAHW",
  "key2": "3XTPL9QyVkf6paW6wTHR12b7z61gJk3txaGKXgTwXEKact8Nm7m65GuZaS9xyaqN77bUJbxdMJjs53wnHqntzjby",
  "key3": "KpkqeqqCPdshfUuhRxizMRZZKzz5AaWkYoj5GHAYWLRynt21kKrXStyApvLEpaqpWWugD4GrmDtsTpVtNqQGDcv",
  "key4": "2ToQDzHJpuZ4zRhu5sSv59ebgCy4WB1YFDFr5yZ8gZ6Mv2VSLCi7uD2bRvjG11J1EddVvPTXrdEAaieazhJHvrKN",
  "key5": "2xGZBiwEhr326YLUNFChAv7ZLdXCQJNdd2McqNJ5zqjdPJmVjJ5GQKaBSej7gkG3XwQmqDPzkifbsx5yfr2tzHrK",
  "key6": "5eRWxgci6y6XeqFc3rCj1d6vAJfwh9ePh79PcMkdZWjtqqoPuRAakeRNhpXburKsKR8L8inTyMMJChC8tKYcPY2s",
  "key7": "t2Y5TA28stk28MzHKQVYrv1zuYADshed9QVePb48qm98eA8K1RtT2vRhNPeM5fPsWNC1CMVTBPtoRCpaTq2VSeB",
  "key8": "FyiCyJ1fgRrRXtM7jX89CR6RFaNGQNsWZZx1j76FvYHCarR87R6oM37oEV5cqjkzNuUq9PXSFdUWPNGdsuK4Ckc",
  "key9": "5GMRHH2s99P2ixWMcFX9Ju6C8bKhpjjDLoDwRy7kTfH4thKR4Znus94jCA5T4Xt6D2p8ayH9km2ZvA1uF7zUFrxo",
  "key10": "54pCwYXin7kKQE2AxBzwVrQtLBZcfsYa7f9v6RmnpNWvrqVLwo26QGRuApsc1iq8NkqJUQaDuAp6n46fbi7Lb2oW",
  "key11": "5a8wQ4GCYeZ8of85Po9vua9kmnyp4qYkkD9cX8HCAmkgxquvaEPVNTDS4gue3TuhkiRckGK6dDsmWUhq3f2V4NSv",
  "key12": "N24AF3vUu8h77CWSFLwUqgA343gcnbiVodq4gcWrYSrA3rpTt8j4KWLH6rsbWYC7avadbTD97Hfwdqku9G8cN9L",
  "key13": "FSWwT9AgiR8Mr1GjJsH95SVynF3dQF7x5Bxj4cuGiwcJo1aVhL5nj1CM5hvEybUdhCetYYzNyapdyAMgdeJ1DAY",
  "key14": "54L9NHRVcCppGmCCvMCHENbdMEE93xTtcVv3F3mAAQ9rLNugLmWujscNMZzzFGjWLtaxZPZAL4zaaSDVq3SwdiY4",
  "key15": "3YkcTJtdWDvPz4y3gg59cfVVBn1PrQCBgW7MVumFZUGDzPt6z3Ue5fNDvJEK88XP6e8DiL3CcixijeEUdpADi3wn",
  "key16": "3kEHsCZt4ZGCBdktfSzjoYGJPFPprqFniRhW16Ev9nxkKXrrcmnBbpLMQS6iDwBpKSLpunv3LPFE9JHxUFuMZ5uX",
  "key17": "wb1wHyNK6p5hfxzkRqH6x7SWmi1qHhrPpEZ9reQz8TTpqKYhr2ifVnfFdDm2ACeNsQUaJpgsZGVij61F29ZNA4T",
  "key18": "5A5iHNbhw5zbC718SxcyT459Ag3buCQkYe3ZpHhwmsqmNbgqsKxaCT49GsW3xjd953cxu12LbR7BYjLMyodCRyfm",
  "key19": "4GLtiLsYJuj6ijJtyvFojbCoRGEb8BwcTJ72QiddbDeUhJTZbT4iZJb9EdbWQx3NUg663kbyJ4LWP8xjt4PcmT2X",
  "key20": "5j3ehY46RAWqKSRCyMjuWJA8KMjfvHy3xbJroxNTBLQ7VyYxt8f1fANmdDnTngSafKVr8E4KrjAA9juoeB2PnGa1",
  "key21": "4eN9E3kQ1E9XygtCtehK21umGP6nFsnSA5M46PcsUKNiQpepxo1jNCT4HvdhjsWwTtwTDmSRN9fJBiiBgSL3heHU",
  "key22": "5fpJDAbzBVd1z49kNUavLwLub1JWfTxosfMLAxqLjC55BgeC1wTKLyp2UB56NU7a4K2MCR4e9EVhH5ohp8pFhdcQ",
  "key23": "G5aKD8KBDeNVcjmRqa6sWGKE6iU8vGVULKqdY9ktMZc5hrUXJgEvEnsJwGhuHTiVLr9t5up6wSUKWE1PzrCviBy",
  "key24": "5muAhwSHde5iftrksNC5HTKzynKJkHZmhphYLXcsAKuWtszg1FZDxfFQ7BPcywdTHzFPrRAP7on7bsopCt87pwPU",
  "key25": "4dgSBvRQjpdxsYRC5N1VKsCBBEjbqS1SobpApACEwVoMMiENgiXt57aGVvrda1rSACzemhAa16yNmQFGNJRvLB22",
  "key26": "ohRW4nnb2nVuAtxUdh2DAxra1157foQnxPTSNTwHVbnDo2nrfcU2LBVpjMdN83YPtUZpN7C4eW1nBDtsDNZxnDe",
  "key27": "5DXYLDqDUZRzL8KjaLRbGCgCPk3o38KtBqFd2AmhTGHpS5xM2EjUrxyeQsXdUCuZ8R4cmpfrPz2ihW3sVeTCcwDN",
  "key28": "2bAm8XoLB6VS1Ae22zTQCBxciFUzo3qQYypsofQWawGHMp71S9Q8ZWKuG9os82ueYo1tV3myEWkCKs7KuaZYZVFA",
  "key29": "3wwwkAaaXxP3aiTTRUxYTHjE2fNHwYmcTZTpsX52ujbVTPCEJ4whkk4BmmzHHBSyCLUw2ar7sA7ZDfwrN4rQt9sV",
  "key30": "4DFc5v4VPgqJb8V64gVSbitEKdfWD751rvMKssTH4GBEisR4CBocHWXRR5ECWr1G2KxkMFPRawznWvUKgyE9WhNw",
  "key31": "4qugyNBtEvkiJhcJ8cbZrDBUQ4zUzLzX1vnzjPNiFw4P6oM3mvBoK7dAb6nUZo3hmorNnn5rtjobQa7uwGTc5z2V"
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
