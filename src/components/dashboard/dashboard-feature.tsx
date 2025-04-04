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
    "46pp7r8JnevP9iRjSUnAteNQgazWJQsGBy3fstvJkhceeDV3Xyb8Ak2PMaqKC7Z3R5SaD31Qy3cpnGCRKpBTYQUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mC3akKxfoa4g5uLVNvd4EAgLDXxtfCw5avqamC1eMKqPEdsFBxwHmbnNZCT1doutHuXtv3DwuDiPH1mmchuertF",
  "key1": "2M4yFNt5GJnnZF9L5KkLyQb7C2ZbX6i5cWXLGUhUH6rFh11HYHy1SZ3HBTjfpxLJYNiyxmRiWEjo87wntWumnEVq",
  "key2": "3AN2AjiyxhZdWu2swTgXT6BVDN1tH6BvCCjMjgSDFS52K3QSdNb5swiVM1MWc1USjroX5Cv5RQh4WjZ6z8k7mAgK",
  "key3": "csLum1wNA4FFionWyLcniuGQdrMVox9yiJ9wf1u2KzAXL2mkYG6TJKCc8zMFj3f3aqscY5vPygznCaALmFGTE7m",
  "key4": "DX3bF7DEK39qZPLKpCpFdhQggnPbtxaqMyb1iqHJaYWw2NcKQZYFiocZ3jH1eCwRLwJKJPTFFYLCAsZ5fbHBP7P",
  "key5": "4CYWbz4XW8f2ApEXhW3zcWL3hGwYZS55xeiv71iS2PKEJTCMpGz94zpZaLE4vsiEnsfbVRoaGfAgXP2B2L4qK5UE",
  "key6": "638A9w1JT5hvMX1uAfwqyYfG7zMP1dF7Lerqt5op2PAsZGNBGgm3s9pxf8KVocWLsVKyk59vTCDghed92w3igfKv",
  "key7": "62WRGnsUhR4Ck2oeaKsmpUvS49sSUKDJyxHXveLctkBBV7GKobn1dExt8jN44RSwW1Ljq9LeNexevjrMaF6Kcb62",
  "key8": "585AYd8q3Tbfe1JL6yw1zQHMAmRRy9qNpvbzn2njcizrf287TbpQixjTW5JXvxTg5fEm7abccyjUjk1v1HaLnFMb",
  "key9": "T4Mj3wdv65xapGyeBGGNyVFWmrTDZt68SVwbzuTEWdUUf3ZKH4JboBno7JDHYnj2Eqy9gWrwFH4xWEVWQ3ir57e",
  "key10": "49pSJNv1SaqNKaRhY9Yp6u1pQt9nttVnkB5k7esAs6e7orwWJBxejNXabsfFhHxa9P4pXepXgRAheswg9HyNZP6e",
  "key11": "fGFTnNf5QbXEh1dbg2GPkdLBxfL9qnCvD4YGhEKnmxqvtpiSVzbwtqnqpLGDhDCymSA9qAb3nUs3ch2dwf3GnP4",
  "key12": "52jjQhRsrFwGKzkmQi3m2ChwvedcsuzFcZ8si1v5AU3jbmACuVzrfa8iU9F36jWwg8k8DXe4SZqDxb2NzoRTs6dk",
  "key13": "eLqT9XL2hCbgV5yjDNnXRtZuTcrHp16V8BhBpzBR18DptgiAd1Qb1rMsJMWNehpcvs3mtYgoj2eMNLD4MBujN6o",
  "key14": "5vk9FRdUpEdVnLyVxoYsWQ6e3V9En4zngL63yPhycbBcuLy42RbHR7BmEWf1ZwX7ka23RcpRRLyTBQjNzJkTJu7d",
  "key15": "5EH5d9sCzc3AY15RqekHJQ3cS9FpuApbRQZXrjhmRkDu6d6inSzC25LEYPCxMmT1MdfncXFEuwRXPVD53XL9DCkJ",
  "key16": "2KRxHUuc2x3u4mesECtisoBNJSTRuUwyPvahA1CggzjLeRHXQcfHh1HkaovD1uyRBhtPjXwEish5iKB3BaLvLG8C",
  "key17": "55T7WbH1bMa8rVzPteUdXezy87oyhAr1pyMhTAouDmSfRLG4o8rKZRhShspggCfjCC5GQ36xhWbvoU1AB6LCU4cr",
  "key18": "5Z1khvdnS4D9HWBzHum9xVF15vgW4ndZgKRE8ZnMDLFtRPoWiSGcvpUpkPGvdPFaPYWZ7uNzjXuEDu9dF1QPyqAa",
  "key19": "4Ny9pzeqhTdFgnxwuE41JVig4nYPv86BADYrNgMFVmxBy7mDdgEvgFHLcTawmRdnhCyTwXX9fNswsdJj3SoemVPx",
  "key20": "3g8eYNrrfPsxov5GqmDuWYNC2gAPpcvzwruhW3iHuiNGCzE4XatFZn6zEHunf6bSfZ5FZbpzHuAjNYZ4nC3UfDPB",
  "key21": "vd5jYZujUCazYYKbGCt9Tjfs7uo14b5J3ft6s4LTTT7Ha2MkyYLhQjBbkQRkz1a8Tk68jkTsQKoiaoJ9Zck4Z2w",
  "key22": "3Up7dLpHKfHdvpqMrbnhHVBW8WFZ7eAWg9EyXmf4HURFtEi64yY33edXASXwHVzJnNq9ohsHD4ZqzxWD2yXdyDUn",
  "key23": "2QQFqe2CTS9RPJ7TBPYUy4YCxJTTPzfCoU35wBrsVNaqKcVjfGeBeDqdBm99VKCvWrYdg8WuUaNwfhsowS5746Sh",
  "key24": "2qfujsyh6erH2P9E6EFCWpeYhAAgZbubhP1GBgYXMPeJqRaNb1goGxZQw3QnRXe4UremVZ3rB8PZTkqPRMHKbFTY",
  "key25": "4boCiPbjbwbNr3m69SUQB7f5LhQHf9mpvkXVFi7kJeSzQxv2z3LUei1U4sH94s3T5miWSicadNx8hLUM42Ybmtiv",
  "key26": "2ekWcH6iWffcjDb4bKauXDmrh6vWe8cLG5Frt8snj84guyZDnbLUQMbL7occK9Xr4phgAiq83F7eHSUUSG8Hc1h7",
  "key27": "PwnBFtgjfK62oTy7NPopGQbioPLpbvR9syENrdvcKLWyvN1m6Px6Bip46GuCvMMHrx4Q7Z7fjbxbkEftftcgzBi",
  "key28": "5MzpfnwDur2mp3bKacKyF23qUphxFXF77BxBYMETQLA7Li9ET3gz6YP7Q3BcQoPvCzmnWhj7Q8GPoWWqyPT7aWpX",
  "key29": "33tH9S2ZacdDbs7pd7rAQzPUHap6CLgg3hReR1Co7AezS7xaEqW67AbEjPKSxWr3NxaqXpn4dZdRE3W5RPus141k"
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
