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
    "RqmqEnxYWbUsKnGk6hacmb1f1BK5kLj5WXKM6n8vg5Dk98EgtJk4yfRRDwt9HXoxNTmQAhEEoVfURbkUwnrokMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bhc1bK8dvVSC8KfFNSjMpqzPvZagg3UZHXU7phSTdd7VvqPgq8mPmLGzHiz4wEjkSLyu67Kjvvh1tbdPvEBT6ao",
  "key1": "Hh6iqChuhvk7NmL4Ap91E8u6oky1eoqNDbrVTti6YY32UVLv4GekEJPRKwjq9cVkzbAh7yjaHrSVSvHSj2mr29f",
  "key2": "4jhDww5rYHMAU4KSEr13r25uRnxCaeFeMQcn8qSrgjPVrCMYHGzqHVDVsyW188A8EEtEaNAEy91GrZFwcwwu8QLL",
  "key3": "4v3BDT1dpsWezHwxJgM6Hayf7TEAtdQQGuySLVkVFT58UdvY3DH92Lw7dcuLkv73XwSwyGqJTungUY8uZMTh85RM",
  "key4": "5DF3LodifKdbKH7LfAojooGU7XVRr3D7t83YDHB2FAse6F65rmjKcGdvp63gtCnHverAJ1DgiWRSgyz5JCYbKotZ",
  "key5": "594xY6kCmmuMqjLChFi3U1eKZoKfv2oozM1VqrCMt8wBQ7dHUQK6jMyz3G9iLq625DMEJAWsxWjjRP7zmdoXMF8r",
  "key6": "3VheQXJaACzSMNAGbbEZGBePZ19jCCrk88pDLYAutvDdC6Rn4pfqjMMw6qTLBPT2uzjEoDKMMMoiLZmqxEnYKHMR",
  "key7": "jiGFRH9RcLXdSAhn94rHqvPfcQtLBvQqQymXmu42dQeHJjqv4J65L6nLLcgGxJM8p4yQjy9AeWBpzipzvmGYWip",
  "key8": "43tiQfRVxo4w8h72Q97fwvBRGwH6XQpLztHEdz688KrLZGe1f7AhNVNmAi8cTJC9xndfzTL98BfFopiLuuEFub6r",
  "key9": "4CDgExKMEYM86japonASu7mwnrMRvENpFnA6RhTgykmAVTbpjeTB2pcSKFpdRMoZsDndFHUkzFc6i3a89vS3vpBS",
  "key10": "2dRV9tEiuNmEo96DRGShhzRev2TZWRAawaNqBM435EjZqNJGYKVtyN2RjP2tYDCFzWBaDG4XKgUiDWs7PQZj6NSV",
  "key11": "3HzGeRqUpFXrwbh5QCJaAwL8tofb6MPGeifKA8pihE35VBBqanyrgnhv3n6LADjd8KDdALdbJszYxXAW7kba1GfF",
  "key12": "55W2FJZCj2JQFbbYVVwypwk5e2dJFivmqRbrw67KUD54W3enveycEPswxhP1Jyy9qmJbQjRrBuD8nurekGxtAb7e",
  "key13": "4gzMxERrvFTZnEYxAoT2Dq9hMqSNux3kMgLPcwQm6z2JKXvWfRNv6PjNj2HLFWzkW4c3CRckv1JoZW1VL8iTEbq1",
  "key14": "5joDySNZ8vkYdM3SXB23itSpKnBDN1b5vHn67FqkWVRvgvV3X6yzeCfjYm4Sc7iXyPFAnGYaAsruj7HH7iUjLRgR",
  "key15": "4wrgq9dkkNFNocp5HgvDip7xatBVWzyumEnEfueJessrg9oVKrJX98WD3Xt1Zm53kCcRRXE2SEymDuwwfJpJmAmH",
  "key16": "3qCncNU1bZwzf35ra8fK9Jn1dXtTZd5Sfo64yrgba7teWvtpkjjGPYeVyvy8jestqUAYbVgAC5LjYTsb2SsskgW3",
  "key17": "24GTAmLTDnmSJVcq4N8tUMMbU9Nyc4DPvC9P5kEBEMJDMjfR26d6ViiWiuffLFBCWcV3iUHSNhdZ8zZJZhHdwTQj",
  "key18": "PEGctyVJ4Hx6MWGKQWRuRMw7mroLBoSUwhdu3ipH1GUZr1TrruCfQ5UUeh8imovCYsJh8txz3E2nmoDoohHGkvT",
  "key19": "4LjB24aHaQ9gyo4wYtQ1dsQeFgNNgZkBuMQbnTYfGcwe38VJDR3GhPaRywGj7BnsxcLAPNRNBNhXHTG7Mw7nafuv",
  "key20": "2TUYASh1jK1H9y2jid1QqviQ1UdKwHeXmjskwVZEyAahCNu6xbdtSdsysjvEqKpKaqjkThTJGjJuzRYv82NfgPLd",
  "key21": "5nLqDcWocd3VdJ75RCYKUpg15i8DBqaMTX2BbnQVu2wtE1fuB6zwdb2yBdjkwwvr3zYy2wbQexnJQ3cBmYumzAip",
  "key22": "5sszNzvWtbgxRXekDfjZtGp62hQoS4FMDFG78pQM5XLkp8XQQ2PSH41pKZGuEPAyunzYE7aQP2mqT2pAGKqky3Jy",
  "key23": "3mepybELxYd3H1ApoX3xQPBfhZviPEHEP9i9vMaTT7HgwXFJNAUHLCJNLgg4GrWEU3c4g34Ma5iN8tvLxmAVidpk",
  "key24": "3DJuYmJNPUzjHcaRZkafyPagA764LHk2FHcmx26mdVbFJ1QMfPEyz6n1A11TnAZ2kai7uc1kBrUzUZppDyPrymmN",
  "key25": "HJKkQmG4yoSszQVZSmXRRE3TdsqQmq8RrzWSHhH7Nj6QJzeKc1X1ozrscWS7te4T5tS5vnDjB6VykJBWj3gUZ7k",
  "key26": "4CMzq8pzeM6yvAfuHDcyqSiNkV14dH7n5a5y34UEG5ResmviyLGs2BP8JR6sEgQ1QH7psBWLnstKAKj4C9kiFUha",
  "key27": "4PkLAkoAUmXfCTaid6zvn7afh6gxub82KxYFWXpb5mCDDuYpA9cSxjEoKsmFQeZj1mRzf9ATA51S5DjJXLmHaeyH"
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
