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
    "4B5ZfVzk6HTyDhoMBQfk3kcptW9YFAtJrq4ZqfRjZnCFdnGgW7984DiAZoN8M38hRWrsikzogAHgroPCauWTeqCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZpJUWToSeyLH7uat43kpBPkXA5snXr6nR3io4pGT1yn2vf7JnS8wpXCr8SSkVzUEnsLKcVL9XndYzrWTZRtPH4R",
  "key1": "2zAKybFzAbmQnrHt1PqQkvbTGtN9RYeYQ4ZGXJ3ptd973ysTjyc6cSMaH3i3oFV1nq7H2xdMo5qSUK1Tapw56P45",
  "key2": "5ZVnRFYd8Yyhiu6zfgezVLT8MCydTmqmyFm2YsfLAhYJBq9XYLSUBHyh7tNR273Nsxtc7TwQANaVBzTRjZ6SspE3",
  "key3": "3zuPCb5KF6xv1S3w9Sg6pG1VH3zMc1rTFa2osTMB1Lf8vFu1kgpiQY8nGZkG58aMHg5h1EW8SSnQmcHqY7cB2pKn",
  "key4": "3ZJUxL8zWGU8UMFSD5F2yako7txrS1vbghMhvmpgQFCit2nkf17ypTbBuVpZSgCVhc22bWwBjKdFbDyDaDGJTCCA",
  "key5": "3wN9XQqQjKas5pb9BSnrbDWJPsrXyoe4nUXUfpARQL45B9oKdbfkkFys2RDJmH58HDTtq3Q4TCAqmsVkGBQ8en94",
  "key6": "3WEqctWnYVjT7GWGAHqjopvWGhWWAmLPHx7kP8eAWKd3MWr7Q73Ff5VqCNA4e9zwRDU896BB5L2MKoCmHJfwCxoC",
  "key7": "5jP9GkbsLYxEJ6s2MK83FVSNNQ3tE51MycmojUix4JT9WkY9sG2kkWc9BPd9oVgZoMdp132BvtWaH1bTd7FxhTc",
  "key8": "5nWUcWRStK4qQ9VmwZ5ySpbHbmyansGqpqxrsYBgZvkiJhWRscm2tifHR5MWpMmDzxfW1YSH4nuY3KAxNiFyDfs5",
  "key9": "4tBM8AHZQuduxDyVhhfZEUqwTdQEzFK3JnEbKCjg8yWhiXzqdV5wr4pjtpMgHb8vB3XfWKy4SRaULAMQe52TDyUf",
  "key10": "3AtHdeZBGCNFQpbtUY26hhHn3Kd6o9s38nGWzfppQYQmFBusp3cbWNssmTQsyke3B5nmMdgfv8e9dFy4d8Jf1XQ1",
  "key11": "3GFLMH1XSKp1bDDp277ueFxahGBR5VX5g9iWsK9zSjXrqRMv9nGcABKpSSVuZ7JukrpDx6DiUaoFMCVuyGe6YCG2",
  "key12": "3PKGr4NcHBtSmHqCXEHFkWYrn4haTneMfFv78MPzoYjG8JohygnNQ1J686bec6GKeUP4XiJ2vFNd2U9CGv9rX3Qc",
  "key13": "4gr31rnFNoHke4Gc7PtE4Zgbcipxo7Ejs6MLVV3kLdNJ3VsJNMXHs62Chh7wpu5VSqnsXV7JPnCoPPE761XLHFni",
  "key14": "3stFuvy58SPHQHXmb2hkJBL7xQUexNDCUDKofwKhJtA7j2bEtsdrjuRLRncJigPBHfVqcPjT8tDUA5vhJm3FcY1w",
  "key15": "31PXBazsXXL94qBf6SKExXKGMvEZsS5md1vgAPR7vk9suKptsqPJQiiQ1MeJpFJ8ipcssGneoEEkoKvTrCmbDN4w",
  "key16": "63cYaYLW295t7y94m3qRCh4oA25UUbDTPvQXp8v249VPwK2LfoxjUeb3nz38c6WHiPqLprak7Jqp6yEVsssBbHoM",
  "key17": "3Lk62nDMVuf2t4rgvjVJDhuYxFjHvDkFnUMpLNm5j15dHQCKz94pNHRNB6qLwXKS6XXjCj3PTVBaHsEgnAEEtgou",
  "key18": "2EG2dfaSAP8kjRCrVvnuwW2S3NzaxRj3Q4AaXtf7ZvfUG9R6i2cszGDdfHuFLwe41nijTWw8BvtufbLfjp9Dq99b",
  "key19": "nHhVHPy44bMEwqwhGeQJBHr4GT85g6MmpFgX9iV9D7zBy4SzHs4g6n7Wa9swmKMmyLRfH1QXMsDtuGBE6sRBuxU",
  "key20": "5kVKMoTHFrzPSJ6z2BgP5rHBZBBmH6bmDkbxQfcfKkAMgYAPE7gpUJX2cTmQ1rZHY8F5E7oQxwEScrZfNveQ551V",
  "key21": "5kfqaHt7Z92wWjqpm5NzADwvQRcboyWDBY2bsJtB356SL832Xr7ZxhKmybJALMF9tCJhFS6WQHDzEnD3EJr4X2yr",
  "key22": "to9iYwa1DYT3gyNojbgfht5aTmJqCGaaja2DSDKoECQAprEzAG1MD8KKMTQaw6fEseHXwx9NDPDbV3v72kQ5Ht8",
  "key23": "DTC44nzwWJbpNLmdAnS4pWhRrmDNChedGxZWwdBfhSc6atseeSTQ8rdrowmyy8zeU1ea2qJr1S8XeUbFNgmgSEm",
  "key24": "dLcWaoyhizhzaftKWw1EFadiKANX2ohg5jTMmdYEw8PGhJAP1GG82ZY5LDri4d6Y9nLGJupVVgVRZz2iaYQuk8n",
  "key25": "3kBaLEDnJ85wfpvU2vC2uWrbxkmZXxkQWo2B2x4D3W4VafWxtv84LuryYMe3PmHZ5M1NUWT19nvdoM51AexYESrL",
  "key26": "yZ2gz1HNhxBho96JPFDgaieoV1w8xhawsHnvDCdLDt9tSUBU2bxKbdRpNUTGEUmEZ73ZsiSmEhQPQfADxiRaZwn",
  "key27": "4ensBarL9vSqYqLhyErjfJWgCQGs86BZFBdnNbA925ijPRsd8CDapbX6bpyPpTuvfhVwRTe8ZmbWvDdKgxrVjiuP",
  "key28": "4JFUBrDFx9kuy8ToWcTx2L2dHw7epScPNDvoxrKEZTG6kCdgddzb9YSoJyeZDiSRjmK7esd4AaZsagSFRwG1c24R",
  "key29": "5Py9MtWzJ5b9DeHMx3TnKpWPXek8hXUrPwazPCxVYkNrekRKprTcEZcyFLhiztqjEfHx1yoMg9ywAgnauQMG7Zua",
  "key30": "2h33iAgPdZsWCZzaTx31HF5bFgCQCjpFKFA4Gv8cYrjN5nocTRaqDXazcfqP3hye28MveD3Ne7nRZy74ECJYneUw",
  "key31": "2ELLYAwEYvm8kJvSA2gsEehxeqmfxNavW5hxKoEtGMX99kPXVBp3g2zMdg93CbYgxKqNjbqTCEBUXgtjHgrfjFVf",
  "key32": "4YLcPfbPn51zhFJke7dk2jZjXY8U3nxvzEf6GArNdKXE9nmqcpyCnVhVWVRd9mArW5xNCDb3t78BMhW3K79CdcoC",
  "key33": "3UtmaMPtLbWACiZHvUH6TaMccrhszpMRVbXWXQkANx3pjoDAc51xV3B1WYF712ddY63jrnyx4MpDe288VLsWZn4Y"
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
