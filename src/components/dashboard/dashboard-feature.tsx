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
    "4dfpvKJy9PB6WzSndBLpfVm5xmwU1MMBE6qjTutKSFeeCv6LWxdowShAFSNxnuk8Fue1kXUmEvxkcM96qekU5nCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7GuFkcyti3tjqAP94WcxkYyqQjhmvXYouAqK2n7Xsrfx5zbapX12AG31KGMkg9GjtrVDY4ChBLWortiLrfYRpT",
  "key1": "2BEFGsByd7GoaPfwVjYZXz8xgc5bR7qhzf1YUSCGo6QUD6Ku1y7vKP6RcYK39V1tJFuLaD1dzsMP9Racskuvh7RF",
  "key2": "317qRvq1HEiqagg94oPuMkDYNrPzrx8Ei5u4D2kGwitdskcLC2Y6wUmPEwEXxR8kyEenzratcVQXb9WQpPvHGDfZ",
  "key3": "5Ns5JJM2Zudr5G9L3zDKSBaL5219nozuFjiAbSujFqBwzKKuQ9GV6865mF3oCJzyVkLnewKMcu7C5x6xkXwwYQFn",
  "key4": "5m42U9UYeNMbcWnaaayke1dXVcuLq8bn584FJdUzwRpsVsFc3cXs537xgT39gDqaen1pJH5kMkLNSdAGhFCV8ZXe",
  "key5": "4ufxC6ViqDohAJ4NafjDhwbeALzuUwMHKKpu6rCc9zCBCwGQGB48vZUXDtJtsWEKFeEyqbFnpnzBYyhd4gNGkWJ4",
  "key6": "3Nf8R1Gdoo2w8jjAfiH8JutNyK4Ud4HWwB6M74UL6BxJBqtsH9PD77ezCGVBoyLgh8p2RstccHSnvX4STUz5Tmmy",
  "key7": "673UtSGZxorQ1CUM3kCYKxEwRsPqUBtbFYvegg83ry58UStoAAQe6RgSeTcrSZqLs7vE1pbZ56TNNY9QyCjmvhYu",
  "key8": "2xun478hpYMYbWRTvbaqpk49RCAtHqdayaVdwG93DzQPYu1tt4SvXrRDS4oLcKxxBPYvYDaWZCwoEkwfsJ2KgmXo",
  "key9": "3LpFd1dpYChi3VnWG9x8oAx1QDmCTExSsjbS9LBSaNvSTVE94Mz5eQSuXQw5j2nqU8e7bj4RGiQiQt1jo3bmkTJz",
  "key10": "5J96GqLPb17baFGC8187wenKk7XdBoEUCem1eUJ97LdRkq41GCJZFSq4Bnn1maujRbgnofsbtttHiTvqUmn2BTsR",
  "key11": "5PT4JNqppPoyYNnAuoMDR31R55x8QvbqvxUcwi6VhQJkkKHFu8y26TXNPrdX7QcspmjoEiKDmn7RNAYYan6v29Ev",
  "key12": "523FGDienKpvJgxtNLYmhu99pLh1jCRDQU87zgXr3yUEnwHzAkwSfvn7Ls7HVyhycHZibKoABaia6imJmeDoAcgN",
  "key13": "5ML5ekdiA1kt8LXPhmjzDGCQhV4tm3HVKyEF3thzH2Hd9C4LDNg9ibtxNWZRTPzEgyyDpfx4dUV9a33m7wqVcUoy",
  "key14": "3kH36Jr448nVJhWTLUxq52Q8iiHpsgS22Rjmf5hZXtCaKBfgCcAZXNEcwppyRoNkwZpHbduxiRXyXyDrQRmFnjYk",
  "key15": "5YKenhjaZYR9zoBFWtN7oSp6uyVdVjXHSaCvvsgRxczZmU86Tjg4ktHKGXDrDNzNY1Qtrd76X88JfWoRUjkoGoPx",
  "key16": "8CpRQbb1NHVtkGRRgAARDYrMvAg2YNbxTu9EBVuVLy4SUV3WkUV1sYCyq93zqfLz3koUipF9FGXMcWXrXPusQU1",
  "key17": "qS49XZJNyMJwTFdaKJ3QJVa4dNNPtiqzzVynEBpMAtLZidHnNs9md135x476vAMDaxvvivDPu1AMZ4HhbEbrgCQ",
  "key18": "4J65jYBGJWFaJRbBG5b71KC8TNYr37Jcz6kHfi3jWfjdzrSmfKBeDP7Wm6SMzDtdHTiz9trQ7pkMEkCi2jbf2Wxu",
  "key19": "361CVv3Dmsq4MJ1q4ReVj2Pn4TyiMFChLFg2M3ZkdsNZmU4PsfK3jieoRSzq9bUQaViG7nC6iLvCJcDksPgVESrS",
  "key20": "2MDxLMUtjr6EzL3dwqiTKNReSWCrBwcMwyTS8FGRnZSC6S2FEY5CGK8iSU2aPHvGg6us4mbUwUmqy9z5bYFDhZdJ",
  "key21": "2KEJqpyWHrthvMKnGtPfBVrEZVB9vA7ocDXtGUuWG93mt3mgmZbutdrtEn81MoPMzGQuEc1GaxmHqZpEfiAMcGLL",
  "key22": "5gPR6dMmWefyEMYyH61oStgiUgdsxX4J4UBiUQMHb78yywPC3xJ75NUnN3aQUpNryTNiPbzSgqXj64oyDDvzFMZv",
  "key23": "44P5mTD3PKmPeLSnRejFksnfeCUVZUkaGYZ9axaeXrVgZxAxofFGP7UQ1vxMYMWJhDsEsJM2nS3vzktf7QDgstii",
  "key24": "3adQzSTmQvtkLBi5Kxjc8sW7HruyQm39VQG1RqnKvK6yEpAxURcfZMhstifvY4PLsz7NhEdJxaK3NSDQiKyvcLxv",
  "key25": "344xLJctE6TCgdHJAEMA2mzvtPCSh1yDaRNJrF44hXCHFLHjsZvgZSuuqerLpj7n7ff57jV1Fx22dUn5KLSiz212",
  "key26": "2DdPCsCrQYJdiCTN7VWLaQ28aRZ6wV71ZKxgmLRaLBeWgrWeWApy4UJVc9qDgfPRdgBgKq4yz6LhtQ4H1dUvMzvc",
  "key27": "2otZ6jQiKToJVq916ndjrA55txzwqeaia6CBLw3iuDJdNHzttBPX2sfWoqS4a2w1SKsyi8DoEW9oJ8dH33xgNtFs",
  "key28": "Ra5gQeD3LHG3btoCwjCXya6oQbHZ3Edt5sGNnAdGSxX5emCQaVLvCC9R7A5KkLH9TMFP7LwWnkmZiqKUqGP5HaY",
  "key29": "4TnLa56qvWrrsZfxAYxx2szvG4fZpUsupEoCCmnX8EJCngxtPUHabtMiRX85zQS6dH25WAzh8sQNB4K27ECptqYv",
  "key30": "5ThtgDBpBwC7QxzkgkDho3H27LjgJcQNFKoSBamCFUoLxdjHCHEiVtoi4Qrd7xkotFM26FTusfyVZyQBmW27VBpL",
  "key31": "5jSxaZabhpEFNjJAFWorN2mk78jDkxSkzmUTqJjqWJvzpmbAyKF24Eu1EFFprstxNkinoEC1NqtXnv3u9xemQrXA",
  "key32": "Ro9StNt3bKJGySESDEGy3MyNTVt9C8XeifZ6QQ6hhqg7nG6buWYjPDHihwwVQgrzDpPv7JcXtZ5CG8osNcXmEKf"
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
