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
    "2WqZoMHezyAFGkQgkRpJdeHccFRrQkzsTzBbAdwYq1qHWjgq1pSFhRtPcwk6CRpbc5kG3ZbAe817H6u9RP4HSkxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MTV8NEUtRYYAJynGfAdJPjvCRn33vUJj7aLqG74mQnYEwxSLUuAFodfBa2HLfHb85CUDbkpkR6yRHDm5YeJXfr",
  "key1": "38MJyi3MfdZLxDdfiCogDmT3wswhB7WwB1hif25hUiXvneSuyi3xBbgksZpLxKLiFpfUMTtH2tw1phnGMUjVDi1M",
  "key2": "4ohpJSBQ6P4tNgfkwDhQmPJ3ydd3BJfzBk5MWpiUXYuVPDnifzr86hQ6xdp6tcjriakxkcAHTEdg7tPUBFKS4QYo",
  "key3": "5YQdjD1PAwi2bDrxeCR8VczJf9uuaZTqGXNxpk7K3HefDEotSYPKBM54Ffmi1hAFJVg2QB67qENSQF5bb7Pqwvno",
  "key4": "4c5JTFN1TC71weck8Zy82oC1UEzaGViGVSTCvrHdPNR8pfg9BDizcyaisXLydkTLvm5cJF58RwTnbkvEbiseXEp2",
  "key5": "QTNQCUUjNZvoeMoJR44pujGZMMan74WCS8Ftpvp3YBSUFQUaWhGewJR28WxKVtK7YH8W7czXpVEXXQJT5PVXg8g",
  "key6": "5Mij62USoLofLfvBUG3bkgUFT2H4ToNJvt1Sv1PDKVeBK1V4iartUfe9xaaUJQwmZn12yhUZawaM6i5FR648E7g5",
  "key7": "4Cn28VYrB7KX1cyk3G9KzztDvwJMMN3BoRFS9SEPK5cpZHexV7cvgGSpAebUTRRWiE6JZbstKtUw4cCYhsRNge3B",
  "key8": "3NdWYLKmCGKcfN1uJnrubD9gACVi1aNBf6tamUXGbVDshkwwx1yQfY6vSV9jfJzQoYRtfDgnZ2iRWZvPKbMkdhLK",
  "key9": "2weH2iFWU6QVQr25FSgLAWfviAp6Zda3qserKpPtrT33PM4TNHQUN1EidPf1y4RJNwDWQvRXzMXX71SjnB56ZPiD",
  "key10": "61o8q9seg5P2iFUqSwKtZYZtjjZbz8e7bN98wDHVVuBWKcDEqGUWqKH4XLQvqYgMyDASaCw8MRdRyMPEoEYBYTzP",
  "key11": "66TQTnt8ZkFEvfD5P4zsPfmSvQwW1NMMAkNSCTnuytfMUo9d9Jmz8fZeB892dEg7Zvv33qkEkNejJ9pdBDUfzoQn",
  "key12": "5ed69E9fuSc6PGst8gCcWcj6u2yXubctHFcEB9m95gz6YcEF7apToc3tbaMKSvhWfX68hmZZWQuMfiXUkrUxFLrE",
  "key13": "25iixgkF3oUdYkps8Y33PfRhXcE2TAcoR65Ja42Yif1aqyiXCAfZJCSLGukTFC8fqQ1sPL4dYDADKqDcQzn1Ev7v",
  "key14": "4tu92gWrgYE5WWah7tZgAhbYWJ8Vm28Ndd9q8eZ8WmmyddjFYTr7tPVpbsPdkoAJEk6XnZMM34S7J8fYWuoP2nSS",
  "key15": "3yTUMyGz3HyoVdtqLYV4kVE4ih7QQpyvnUwz5AppfXVq34ss8bz9uqnfJjrWPCiBcapA4iNC7NwU4ydBk5CpRUEN",
  "key16": "2qQFv4Gk8XyEtXMabe1iSxQ9v4yd9G79LY2DCqeCWWLrLj7sscHofN6ohfaYLsP3VhjpvnVMsA9AXf8wHBtJZmC5",
  "key17": "4rf22fmGUr6LVAx4CbZVrZmGwKZ2fz5vGCuWJT5WzSXK42VRbLjczXfxA6xFUB2Qma5jQLmyyG6XqZgpzJXtzeRF",
  "key18": "4WFQmR2YRZTRdeNCcKrvo6jWLgvc4HaDeauLvf1Y3T3PVGssfv3Gd2q15J8p6d1jYn9haUtGXQix63xuqdwc5kEq",
  "key19": "3mx3vvrL8mfaWmheHB86nHYMnpx3jwmBnqKCV4bS4LWSEZMGEGBZBZXTtggWQXVR6eoMG46zhh88zz6fBGwvc3Gn",
  "key20": "3G2Lmcr3DTCTScd3GCme6Sr7fKu8PiFM4pwV7vwdJtVffgqun56Q21vt5S5syBMQsiKW5bsFmnRc5Q2ACJunnYad",
  "key21": "4HDfyoiN7ivREoYY4Q9ixEQNdPMrGESWZrq57V5T44FF5SCT3X5rvyERuQMbKXATeyYNptWBQCP3Kx6Rp4VJvCY1",
  "key22": "4ZKND6iPh5AAZrjAxH4i48Cs99Mvo7ZHk74Jzhi8JX331yH4iLpnyEDf7nPY3ePV1Vq2YkGXFMdjU3LH5TGQbhH8",
  "key23": "36Wgsa8qX4b6jpw6EtA87PTxErxX9PGgrB2QULdyQKV66sNEnehaitMpFan6afn4xf5aTJ4QFcLVqTzCxi9JzUfX",
  "key24": "2NmjadBchgezHnBTpxmAygCXtq2JkvH2ergkscphWv28EVYRXbEeTkty4NkBws1AeDwVoX86shGFWRAJFkXVLDvR",
  "key25": "3A1rAeL844m26XfRr2tfaKCEk6yAeb9NT2hpv15TuiFrBhQMGXwPVM1td6CBP8Vm7wYGQPXQGw4MW3fzTS8aZ2sw",
  "key26": "skXdkgydcuUg8iWtSS53SfTY4igfvqb8GoGdCcFXfBh4Ny2voxFD3u9rK2scRRB7QyweerXLxeMtzK4fmRgPSNP",
  "key27": "TPmKeGr5NPTzpEPmRx3AsJkhhoKzFM5xSoPZ3r8kB25cWxnzHQmeVh9EWXebavC8EQzr4ggDpFAuPctCvPKvKED"
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
