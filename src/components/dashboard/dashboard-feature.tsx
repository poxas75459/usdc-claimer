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
    "4R86ssZWn4q9zHDLY1G8KucZDse1WszoqyRXt4ZqavNoBwWEW222cyf8kikDtvxrJjeA7xNakKv9QcjWs6UbojwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RuNa1PBmx9SzSE66wmnGmE3Xq9Qs3M8oqfjTpQGm4DpZn7V5fQkokCkaX4PonvPvWa9bjTBp6DeBmn5pUQqCTj3",
  "key1": "3yPiyJNVskAaGh9S51mwNfqMBnpWM9t1ZyCyMMBnZv8RpFLseskoPLeBud4k7fTQnQQCkaLJS8R19n8K66Z8jTBa",
  "key2": "xJFnyhort8xK8uGQwwnVS5a9NiT7qjK1yEFm3xzGBj5Zk7wirZ9ppTyH9BCYSuAH1V16BFF8yFJPFn78yYQAnJe",
  "key3": "2hwD6qf1CpWuvEPcQebBugbBXdET6Snst7ZABvGaWqefFiSrokzXCrdF5fbh3arucwz4YQYD7jH4MvJv2aZQq5gJ",
  "key4": "2z3GQGamTosHqa9NbVKUCvvSZg9CnFn6yWQ3CN3JnonvC3HdmYfqtwqV1zMGfLC7J1CNRv6vX7JJ2xN6q6H17ghi",
  "key5": "5ZNZjCk8L2fCA1oNdK5qbCwjswUbZwqaMyFQeRDNt3MHnGYUYiUg5QZapY5cdvJhhuAUF1gTDDdqhiYbzXbsQm5P",
  "key6": "2aBijpZ8byvT5h1MeFYxZRQMCHLDqaRonfxLQDwvnNwrVBe7zJfNPrdzrRFdkBTpbF2cj9qoeWYmyEHQVbsTuedp",
  "key7": "3jM62AJwxu7yMnqXnCoCCAT9qvTd4x6aMTZxFqPdznhsyZ9dw29DKKZhy1a9ibUJbHZpKAom744BBMdeSYLPNjQR",
  "key8": "xkkC796QJZgCzEcUZ66J5mxmsacepCN5SffLGXhMU5BnMckHtt8zxNJ9QqkMXD4Bw3wH8FQrmEhtvE9GLhHzWrp",
  "key9": "4us44hXpuVcWiZArSR9vHtD8nQNVpvpchbzM8mfAvuuQKxV76GWrA8YFMQQropE56q6aYXqyWL8qRoRjpqBsk35s",
  "key10": "4LF435XhXLi6m2FMEdCTrnmgxUg9za341CF3BGygM7ZEe8XTzeDVDVtQnaGqKTkWUu5D3iLViq5h1e5tEYvsXTtP",
  "key11": "4wvB7mkrLAeLCaXRU1cFKyfJZGEbrayZqtPGnREj4K9gqxBPjx8Gef9jqcaTdaLSLmAAMAgjTvuZ1LWUZVivEeB3",
  "key12": "4WTe65YSdAujPnD24B8g7NtzsWkj6Pf5bM2mY8KpZMiRoZppAtdjc5fcNaqFMMrNYFnZXVhb3Fgha5XMPvNmpk3U",
  "key13": "5tXQa9PRm8j43woV8kD11VUNnKXfU6Mkdxo8Zg8jKwPGueUWhDEy1XjS1Sn5ZAVVJbNuPikfwMCfC62rdhgZWy3F",
  "key14": "4EeoUdPuTZ3tDziXHzA5qWatzJyyBu52AsCJzk2jR9d929odJaTuzm6uKRATapkyYhSBJjDdtXTayV2mNK3G4ZUg",
  "key15": "4sq7QVzYtcux2Gqv66p15X3EboEint4Uc8NDniJu2yQZDx1VJaZe4631Rnzgwprpx2EUbeQucxezctgiWy4ecQ9B",
  "key16": "2XzcXf46YhHck9TS7LNvMrRgcRCqqpYdpFiHzYD243RJJNVC9F8W1Yxo8zc9jhktrnC4Qc3PyWt3xpcZDn1fecMS",
  "key17": "3ghFsEy4YMYHPWpVJZxdgxiiwVJYypLdt9oM2V6qAHSHmcNs9bSrpfMshCj7GS5jbiBmRc9sgEGN42NJ2uJfeqeB",
  "key18": "5vT2wDBeXxB4si2rwippDKCrrDrjoX98T88XcNXDkNLm4ZGF9UefrttyXMcrZUYBvdA1j59wa9TpgV4Kc59DxNiv",
  "key19": "2sFYct1Fq3VU5irifaxKKniDWhMaUCzWksHWd22YXfdcuLFrX2EQvW5CyBkrCc6wgBT2WCoqs28AwiKwJuaSQ8bN",
  "key20": "5wBPpWiQ5gEVNZToSbrSiy4PNdxs18TDXEPPFPYxVYcYEwk6KmjeqwNmJWwvNJo1UxQh4FE8ktLhA5CPHVMEkpU2",
  "key21": "iAuWsbhRzghbDxdN3LjRZKfetWpFVFahrtukK8T47ACurgP988PZxjAWytV8Pz51xMpFqbxe9P4nK1GEm4PihiW",
  "key22": "2tAv1zpSPstG9bqYAmnVfQGEBDdgzmkKCFUxtEDgZuCFtYcaZRc9Z3JpUYwUfiMam9Eqji9GiiyNxmFQbGrgzFaE",
  "key23": "xHAc2TP4tmRVZPyjBi9TBBJc3j31tCGTpk1BFLtoHEyQzupxgedzyzJHYN23MCBciFmpyhmewqt4e55T3HRnFav",
  "key24": "5xtBFyMtAp636fNiSL2hGDTjWvmWQapBmPkCLrtrNFRmacYgF2NgWpNy84Tfeo2sVT2436BL6uLqnVrTyFQNzMFP",
  "key25": "3pmyS89gqr5GGHBNwAJnZRup1R912txdzJYpFPsZ2DKWVQVH2c9JPbPoAciF9ktaY8oXHx8NpncHizZwtdghnSmR",
  "key26": "3icfBYhtcqfJo8nTyEAUC5dyXwH1VPnWmS2aVizq4dfgSxrwmoV2ZaqrHZ6U7Ao1JMN7jUig1JpXmcYGGze6iAtM",
  "key27": "2HbvNH8d3DuCfMWPMS8PkbK3iMRJFGbFKeLTFNM2moyi2qDuFbZRmgU9GLX1FDiwyW2NhCNXSj7fnP5r3WTg8Rby",
  "key28": "479hhAPqt2xYJwCXnM6aygv5ABWaQs1iyhVCVtMTf6Pt8yFmjQGn1iU8YFviRKiodNDbMmwAA3aZAj6nAov6pL4X",
  "key29": "4sNh5LsiAXUcTdMSBR1CaC7vyNLnqgt2cg1UNSzUKT6EMa4ZXkdX2c2wF7RzxDjJfwHZL4inj6Z2iwa3LjP6TSPz",
  "key30": "5PpRbeXNw4ZFSwpaBWqtbXwAhCY7HYaMPPGHf9XQwXg1gnrt4bRz3otqa5ypVb43f92jgQ2XYdwRcuMuaKBQbuep",
  "key31": "MbgWWjjAUR36oJbZikAVGbmFFfQ6SisvpMypLpm5Ek96Vkh1ip9Mq7TCsXstBPjUE5VcbK9fyJrc7jmB2ccsesz",
  "key32": "3b2CHqZ5P58TdbYiv2DXarbj2m8QDjFCRSWYFytcfbWGwq9otgzokKaUXGhnM7xvf8CLBPAiLdj9vexz9z2RfmkS",
  "key33": "3riWoU6Pk44rm59WNHzGECdpLtu3gRKBJkWdtP1mYSXbrHzLBHcQD2xwi6qzssFX27zprs2qaTLWxDTRDmJbPxyc",
  "key34": "3fJGKYc8PRMXrb8v7d14Js1fkWF6hrqkZfAx1wB4AYaeyCTy5GLAxXvXzUhQVtZtMdzoy7rUgJZMMarpEefA4Foi",
  "key35": "3TVsBd2GUZPz9XSR9zWWgsiKPfmLkhde63uric9yt8P6AhJZCZvJCrSc2hWLVyGCscEPeDe536dCPgqbamHMcnap",
  "key36": "uEgmjQQib88MqgYuC6NBxGMwvgqVhmZb4B9nP2ZCKU2TgSUVGCden8t7EWL4LjTH1LtD1xYfYJyzxYPYB3ZAa2m"
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
