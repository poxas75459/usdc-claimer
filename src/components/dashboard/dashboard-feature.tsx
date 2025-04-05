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
    "2p7pf24YLb4XyMaz61Mvu3AWZjwW4aJPEK47UixGGnF5uNx69CLK7uaA1HayKZdQcre4uNA2HUn1nYg43Tk8PqAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWMWDSMWV15NvR4aFooytQwnLy1nSafCvTYDwL9XDjXUXnnBEQNWzftUBqNiJuUogrnVMbPrAs9JUBEMUAzdv1K",
  "key1": "4gnnkZ9YnyMM5cLehKXpR5R59bGUqrgzLERctwWn3DRsgFZzgcy2GFetUHKFCVrez6N6QS33gcDSA2sFuQ54XHsY",
  "key2": "2Aq5yRxBmXN2yaRYRCGTonAeABh2gba1ysYFgZiSDdSSRBjUQKe6Zup6wiQg2p6t9Qg9ZP2JYHSnM2KVBzoA8Wop",
  "key3": "5iTxMXsogypNGAeZ1ABK7RNQKKXSwMbhcxMfoYVALTySiyaJZAHrjDXvfAhGkvVkPeAopWm4r1cVzS6nJgcsNMLX",
  "key4": "4FPPGQebBct6a2zfh55moZNmPEBGRAxoJp6w2Grh81DyvNRpGjtonGyFcSbZ3th1716ngwzGGx7VJWqd79U7S3JA",
  "key5": "26aKBGi8Nf9meNpBPFqoW7T3rC1nKsgw22xW5kt6RnEW9C81RmcPSSXoe5N5rPCXwJekPhPbSEhW1XseKpM9kpya",
  "key6": "NbMaKW8Bi3LFNqNF8LoxEmKH6cVEwEGEmnqNxqUep6MDLedJreWn58bxhv4nzhmN31oygvNfZdHceadAdL9Keud",
  "key7": "1XTLjmX91QAdLaKJDSot4UPBG4ckKzQJozyM59PdHgz8JJTkQNHiCXtw6emy1vBA2kbDPvCCzGUebeVeU3jCYmQ",
  "key8": "2Uwqc9PjpwjDvvHaNxpZqxn2Z3rk3wXiNmPVjPVsAU38W35u4iKb1HqNsXgQEGDdZT4ZYBmHVZMt3hgFRGJKEz4v",
  "key9": "2AcBktXu9i5Uva7sJKtYTTzDNrK5DwGUaifx5qeyGQjFC3hZiD4X94cV6rJup7aTA5MP9KKsATeP9TPmuwVCu2tU",
  "key10": "63SYtyrDWaDKg5u6JBZpEQDvVuHY4DicghCXrPxACXgyJScEHEczr7GSqgMbw3nZQ2qrQ4xQvn8BKr4jFQkRffoy",
  "key11": "M8fe53jDvxne9AZnR1GsT5gQmh9zERcptv7hsPhhqDpzCvP3V32UQyhVmgcYZ1XWfA9AVSw9TYmP9ZsCnjiUwwC",
  "key12": "5DqLcWNTcwTcLpoDfVpKMZaPJixU93uJp8zFCefJHsQLxigyy4DiWb1bfnutHre4RS33TqvefadL6Eh4721wP8qR",
  "key13": "2J7NiVUbhVjm6tiVSEPSqMVv8Brz6YVxpN3A5R52ekMuNTSjwRgiRKFsGcKpQkhXnFMc1KrRvpQ7g3CZcTJywPKC",
  "key14": "krU8q8UnR6T1vacw3AZrZrQ1DCxMrMaFn7zxhUt4v63Dk5aumj7uitccZkFksTujV8pmsoLiKhpbtr49WeiR8U3",
  "key15": "4RGcpgTHiBFtX5jmgGQLHDu2TzC8EnyqswQWa2jCjYcHvsb2r2bMcnjACi5vJ6W1PNhfFXAMTCrDXwt8iRgiFj9z",
  "key16": "23yMKbF3jaTxCnSknA5VUXqat9xtFg7LUCPUCg3WvuJnevCH3TwZRAghkBuUACSNnjf89UxwvA8aDH3PBdG7ksrb",
  "key17": "4kjG5pCmJTShpNsEYrZudoxW1CZstpuYRyNmExzPnc5EPgPH5fwJsM8gjBQvx7VEQkuDNNQbgVcKBrNkuyBeG6RV",
  "key18": "3dLrUCAJMaAXQt5C8bZN5HBE1nocTAcGpJye1RdQ1DWkKuytR34gMfs8XBKxwxhf39YQcL429PZPZEwycfkzCBuS",
  "key19": "PHtaWxppzPtLsySHeXCFncA12WPoBY1dZ6yoZ3Tai9JeeTN6JNinNyNGCewS7uNWLVabXZGvAFkZY8h4cXvi5bF",
  "key20": "j8EitfSuop7QBVokMtwdo2akwJ7iBRZU4usftheBZFqEZrvwDsUQfuVHsuF85qQtajFtH3oo4m8eKHLmPdEprTU",
  "key21": "A9SpWzXrWCx6wppK9e8uGDFV3vsoNWYmNunp6ySdR6MzeU5o3zu1cSctEWZ13UhgLadivRU5GPgVuwz11HwCcFg",
  "key22": "4qTDoRZ8thSqotFndBZZ7yEN8VwHkf7puqUCpDgwndaqKvfQ8z7xYKXvRsJW988FT4XhgQvibzw56bJKY9mN3Se9",
  "key23": "4YGBQK6pk16tZyTjNYihzJiihdf3e4JkujRZM7u25FetV3wCgLLWWMcmrG44p86J6t9Un68Y56Qm7rcUfnfxyq4b",
  "key24": "FCk5iMykpGcCEwiSL7ErXWGEQXWzPZetv8D3n7cTSPqHzbLa8ZJ1523Aax3gMizitn3UhG2985Hu5rUiVg3Gbxw",
  "key25": "5hZ6naVQaHydRx7ngHw2fZQChyMHMid2StqScuXhLwACQ7gttFUpv15YtJUv299WSjPdnib6oWvihubxSftLU3yQ",
  "key26": "4hoJ5N3zifA5hXrqpxpFS1MQ2tDQmdNR6EWuwHNiCBCzf3SDxFuXQt42TqahvB44SEQgRg2q6vqCQd2CJcr9LNf2",
  "key27": "CxWVihH413Y6zTJe1GFct9nCYq7rGV9PpF6cvHxE8Yn3swbzmypde6Ru5kp9X3ojxqhG3jqa7GcxrFmCsgnfbQK",
  "key28": "2eW6rg1LnRyNqYY7xKfHBeeyknSdguetWVcAihVYVfCySfUhchCGthbiuRVptDksfWcbx88wmiH5NipTVRmfe1DM",
  "key29": "5KgDZu4HkcbFJpMWVufhdgfxnLcAYwhmiVYye4URgX38XFLQLqKFsYEZvsjkjHPwQrkRdPfTBoesLzmJQs3NkB9o",
  "key30": "5LnEiJ3MT3hViBWDsvA8xFXWmvr3Ks316jugF6gXwX5ATDxVtx2vahfuL5nM4qDvnoceQWmbZQsJykfrLVFBthTt",
  "key31": "Y7aqzZJ9CoUztZkhkfYtP2W95BnPruPWdJWSVZaLzefC5gGg9rg9SaftG7GJDuEqmomXaQpSGbA6i5ThEBUBHJ1",
  "key32": "3xkHsREdx8n4Vm1XHCHVW2b2TVgT2kXQCPRNaVpeXW5mLteqaCqFjac8RYaEHjNsJivXw8EtKhvZ2M1MSk21ABuo",
  "key33": "2GxvuhL6EREfe2CqqHRD4vxu6Efk6ACp6paADoJEE3fhpfXuUhjao2e1WKTdM3ZL44VeubCT48sJN94Ad7XwbCUC"
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
