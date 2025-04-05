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
    "5x1UtfpscmkeBx7CMnUoghqsQr7pAyjjDshnUjQCPpnwr9AcxZS2LiGV4pDSeVTZ2RVJyFPme4JSqgP2N8aWakTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QVUnHVFhDBzpbMiwczSRQvTrsk2eKJeviyQKyVd2nZcjewWPFGKdqEzSczSvqVK3fBPLZ8w8grVYGmBrDjuuWXu",
  "key1": "6411GJJtsaorpcr9ZLbdRXdvHseZh3hcbySVojtACwLPKLc6782ysScyi6PFmiA93XPL8FZcu6WTnAMLktAJyMVw",
  "key2": "4D5VRj7cf528xvFsWrPFhup6pT3n96ZwNmTPgKxrn54iGy28EKuQAHodH9Aq5qRZPvSH8p5r9V6Cnb2RY1eCGJmm",
  "key3": "2E51NbVQxfz4UXCo9sWwv6XJxPEyGP1QBBiiy5JRWLXwXaXKwkYbApi6oBkSoYYFTT5qssoKptV9CozEXvc41mpi",
  "key4": "2GBjUmPtSFz7ZHZENypQBXBmUMRuvsoe6VubtJgsQ3ptFKexDrTTGpQdQ42Nf2J8ipeWKXnUG8nQeBJ7VDvzBBNL",
  "key5": "4Zo9tg6CLNFJsA5Td9mz8NNe3bd96Z37CpNXreCAYxz9b7nkMbatVEnEjQbDLqT3i7GstNZFvYKC5YAuResLtDWq",
  "key6": "3Bk7RuUWXgtrW7ryBSR1SwGwn1GNsm96dTaxSXk8t5UUC7P5EZNd5NkwEqykjoDvchrZifGLCcN49XCrD9rWZsq9",
  "key7": "31XHH9YYXrAfqGoWGrxmY5uJs2qpGhsi7psas9fmuxMJnkTujQBkoUUpaQmJJ1jpiLHjHHMgQ78ydzwqcHyjQWtx",
  "key8": "3rcUCSiTrBywDVSA1tfJaF1MSS95qvukvNXDKf3f1G5odksWy3Vh2C9fwmCeWySwrxKAUi5wdRiXXHduneU47NBC",
  "key9": "39sb38jXrHLq3z65mwqDtskgvrM6DQewNyqATLFASHmgpkWqFZxnb514B7EEsiGNKzuhpiKaVyXZYoDLk9Na9Nic",
  "key10": "4PrnsankVBbtSmWHTEh1vQky5E2n9ZxjZdPbN6gpZV3SFYSkt2zpA1doikWFTqA8k1GEGrGqnraa7Lv4v7TPXsxG",
  "key11": "4an53xXWBdoRFSgjKPZxDugvpmMsTPQEoy7GeehSypyWyp1EgwKKYQjUinequPj3ks1JHp6UqAKSmcRnpw9ndCYs",
  "key12": "4E42Qz45mp4kFURh3N9bk6a7zi6GNDYUpruT4o1Cn1NDbDD39UzH2GUqHrTALbnNMScfqH3DeEGJJs6rDFMNvKYk",
  "key13": "LSQALxCfMUZWzTNpGUo8Kp8yeZahpyyaXP8Q9jNwZXiVZAdx7qkKyNWwgkE1gqTSkn7ieo2NSYtHvxehm5SpVWa",
  "key14": "m7A9VgPFUFEvR89rof7oRCDThU9Sq57Cfom125SK2paYHUH8Sz9GDLJf3iBMZ9U87xaaptQtMZXQSAuadUNYVPS",
  "key15": "Vvt6HyRgvh7dad6nsyiib2RrTVY63G7vK3ZhueN2Dcvfds5ftsd18pd6tyDbgFQG29u44fgXmYcz3sRqygGi3Zy",
  "key16": "45vgv6X65os3wbVynSeMYkYAoiX2rwR9hwH9P6AHLmC58SmcoYUVSXgcxmcz87buzURFWm9NfPoVrNPX5gDUbCEg",
  "key17": "3YJMBDqYhK87drNo2Jv7c6TErYgjpESZcShod4U86duTJh8vYn6hbnXgEqJHHJwJ3HzbsonKGxVnkSXc52NmiZ4t",
  "key18": "dj6PaVxprudbvrwciATWkWTmXXZ4iURpPYA4NXwqxKC4PmXA4ztJc8HdAtECoM8tNPqymoL1qjYMtDtWdk9gPwV",
  "key19": "4mVFmbWnbzRc7aBuwydpBNtgzpXPMH1W5Vm7Y4gXfx84AbpA5JwgpAxynbBd2XY8xznoQZDxP2nSEfTKRJHmkC25",
  "key20": "3yprNkSXMLYptHa6Jmi3cAJXHGmrAa4tVyYKYSyii7kf2XU3W5QVp4H3EEyxqHE5LmoeEFRoApEFxX1KxCaX5cUS",
  "key21": "4dQHE8fSgtiunjK1ZFzjGRmavkQ5swHszxBp1H8Jh2Th8JA1e7kJ8QP8tQiwpcFyVvWqXtBis2ThxYdTfynrRV19",
  "key22": "5jbfB5nCnWMXwv6zADTgkNgvnpRS7AMZbdXvbhsvczwjTk16HsHQRmYmzTzRzS2WH2rbCmkDw7C3kAsuoD5bhVzS",
  "key23": "LiQ1kFks4zwH2uY6FzH6XokWeCqC5tk6D1wKps6NiekrZJtHGc11P3feXszBqKYnG4N93JWsiyuDTGM6zcMN8iQ",
  "key24": "2w768C1mQWuim4a2KFbL9QHo3PRmnKVdwkWJjtWBNJVySCYQdRP6UeeSWDRJLW9torNbHU6KxnVbUrUdi2ohuD1d",
  "key25": "2dwCv197avw7Ek83YFP8Ny4jCtEdhmX144TmwUksjCg9sCyavw9xnxE2c8whAv6iGtTejHyFxeXaFbaGBYn9tzps",
  "key26": "4jigNjkjTyCJSXfe4T3JiN7fTpVpqexg4TmuFSQVRgTVyk39u8CRzwN3NPkjdXspSK8F3ENsCGBudtzDoohUU89v",
  "key27": "2e7HYvN1xo7VCeyWq7xZv2WrfhqSWLf2shwegBqZQU6ARQmgrU3oCbzBfgzXu9m9mCHwX6ZCmjCNHo2w1QXfZa9j",
  "key28": "5aTUJ5Cgc5VGdgJpKsJ5gH1yQhMATh4kBJadrf1NmoNXXUYvacj3DNzCKtUuwFhGKMGtbaGyU5NtV1rjLy7rErvB",
  "key29": "4teYVMNKhzSFLvJpRWi72deKosWfv2FHZ3KWU6bMwZAcengzxoMuX4DSZkATJdVVc9hJoU4vGKjZz1TThQNymYwF",
  "key30": "uSiZBgimzkTWsTs8NT2nwVVVhWYxNF16TfY6bC2P2kZgRNadWUtQLcDDMcvLSV7sWJPv882pHKt9MLSm8XWBsqV",
  "key31": "4FCx96SQWnHAc9x71y2XeHUJUq8onH8PBknu8RhxxwoRcvictgvhT3rx4SUzDyYF1pufrEjaS3r2qYdwYgw9vi8f"
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
