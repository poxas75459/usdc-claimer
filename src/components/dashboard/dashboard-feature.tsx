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
    "5669pPtBDeNNnFGwxTb3VSKiaNTwHsVt4padjhfBATq7KXhepi8goPptXx4CQfq5gofvu7eC59VHqtaoDbgH2Sqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2un9G2Eo8JyxBvt1E5z3xhb1ZiQaGdKimajUBuuCtE7fxjs8yLgn4bjaKkx6CtNiGcmSPuC79TC9Xyy6uKqYJk1W",
  "key1": "2gtyKaQoU1X1cWWZD4TCFaX69MhsK4God5sfV5k4b8S1NiCe8DtMHK9DSWDRAv3QigimB4bJuwN52qsuzMnSnZP3",
  "key2": "2UeLQ52aMtwwadFtjH7aWNk7xJwsjVSvBwgjLeANFSZQXKre4kFBaTqpaHrb3Nf3mWM9abL3wHmam1WW6ewxAsW3",
  "key3": "YEgJy4p9F6QgAb8QBF9NnaLoxh1yeuv6PoUv6uuwt6AuDMPxVw7zc6QYCMf6DZ7pyNuLkYhkCfRmXKqCr4KV53v",
  "key4": "5XYx9Y2zDnJ7w9cye4QcUNgqGzTdbB3N39iKjwrZqAFyiCih3rUf2d29LimPtb1w63Tt2qEDXbk9aHNnGXq9wGkF",
  "key5": "3WNCUTAjFHxoSaerACqhinn5bk6okSwuX9hvGofsq5m84PZwGGVufmgeN3naUwevcAcsJ2M86JvcZnD8BneUH9U8",
  "key6": "4EtTjnzsRgfjQxJhyezQgZVvETHyzev48T5Y2azSFSUFNMLxf3PBZA75Qrxdb4FqhcFsyFZ11BYGsX84MPBZHCDg",
  "key7": "3GYiSxnKTo9gULsY4ZpifKkcRD6j8H4Eg7zJUuKZNjM3N4Mj193jwWUXHbPbWYcbA5AbFYZUcNgjXvjaWhZMHVBx",
  "key8": "2Mwx6AjzuEFc5Aqcdk3Gx3R7bduvE5pb8oP1qpsdbUnxNZctdoqRxKPCCAkhYiqYBaeVkezk7aSA7m36qdK8SfA7",
  "key9": "4LHNk1P21gmv3Wg7fC7r3mEsfKyK72K7UBUbHaHP2Jf3147dv5SLRj6JZCUUWVo4iHYhf8g7Gm2tvrSSw331N5i7",
  "key10": "fX22tYe4KGnLEVyehXs3mpkeKVrMQcmAhUCszkGEFLUtPrXzf7Yc6h7yYXBTcqHdT2X3WwAqDmkW5U7P4hkivf4",
  "key11": "2GXSYXygNbqXrcrK8GzYpNiwp7c49e7CN4nvsPFopjB5okur9LWmMXtemfXe6EMZ7RbdxAX7PyGPYEzRBvQnkC4F",
  "key12": "4AnvhyT3HM1iEPL39gWiFH4nqoUf4ZkQKLUEju8Hah6RjDe3i8o2xEkSYrWd3LEgrxU2ooEq2EB2A9EmuHPTBfMr",
  "key13": "37BDoAcsTnuXHdkgf1Cx8p9knPbnhtFKEkiSQDVA2wWZyTTRrsJz8KuiAxmPS9g2hRtLFHzHoHEYzWV2is33kPPK",
  "key14": "a6SdnEj5S94kL53ur6wUtzwMZbPrFt2VRmL9mse7w7zjdZYMVFaGuBgJzxmrh9peuFre83Var524GUjMBRnJM99",
  "key15": "3Rzb3EHaHiDkrBFHXU7yvnaJz22PukR3CRr1jCRhyKja6xGbZAgxK2vto1bM6c1Fz7WdZJFx6njDonNMbWNUmFai",
  "key16": "3v5DtT8F1n45SBjMGgSz6urgK4Va29iz8rHAB74mQwb4Wwvq7ezbZ9gcVT1ksAzfuvn6TQVw6zxBtqTQD4ACRAYE",
  "key17": "5q6YRZZcSBme5JQ6xijdsc5PdpYcN44P8dd7bEpscRVb8yVuKS1DCZqUxgs3Yob33EAan269UcZoU3PKbZcq3Wee",
  "key18": "4hHZxjab2o3dqJPwHHJzhuKC3UWAjrwNeL4tE6b492TgaYaYdeh2iGeprEXeRBi9hnQKUPnQkoyS42LqHDMvJ6Gp",
  "key19": "43tymMygj71fZkCYCpTEqStLoSa973zgGi3Ca9CcSTWVsrPT9Hmps4wWujMhksaBoFPt6TQw2Gdywjfg6cXBxw9H",
  "key20": "4WCoxRvWj6iwJumHsAzeD9fCaPNZF8gNqhk1rWw9rzxQpacHEbVzWwstKFsWBK4xoUjeoYVQ6zHfPrLxSm5Q9bCK",
  "key21": "2Qv87n2gjg8z6Dfzbq7ttPW9TNdqDw7mFqSkdNCCzeT4YKDZFq5WQAC9EJEhUwfRrNmHS38gk4nbDwCbzdcUT2p2",
  "key22": "2H5j7HeHdJmsNJSM8RgG1Pvaoe6xzns5hd1Fhg9uyR4K2gVjEApNsdHLMBHcsZgMv7dqYqRuQjyv2gpPDJtytTwv",
  "key23": "4gHJvgqb5Nnm96Xvvc2GSTaodUq23Q4SL8XU1XDi4VkPSVN8fruE38haYJ21hTksgMxKAf7frqK6whAbbBJ3zydC",
  "key24": "gBrRC6Ag3KrEMu2izp8c9kd3nTND6nCMXiDiV7tW7cp5g5yqYuBQcwLC8e9d2cBQ2X3MgJpQFAz7gn4K1MDk9Tk",
  "key25": "2crPmnrAxV8oMhPLwiyqgeJUcF476x41yHWNchWha9ep7FFkh2RHyazRBas2CdqYoryWAy2o7rC6NH3nmzskTmic",
  "key26": "2dzBHNKh8YsBPz6cwrjKg23fVvxiKbtACwzMvKz7e7FzCPrxrhJSudCb62K3NW43b9wD1faw9NX4mgsUZrxgyNR3",
  "key27": "3RWdn22REXCEGMm8igF8iDNeUaaVa73qHuHFukb3hhstmct6D1GQGeDXLEuDqA6mC6GcfmamdAzCGA5LYfn7PMBV",
  "key28": "3C7NfncUntQiCAMsyMsUBRvtJgqJJdcSzpFkbGhFqj5JqaeN9UzL3PefMq2h8NviV7MnThZCic6rEZUJSRTVSBtw",
  "key29": "3Krc4iwJw8zXmL6ZgPahj1EaEzkd6VLhJEtW1KWJQAv9uzaf9zVaVnJDczewosqrsaDdkA2HE45JnxgrsTBhT4VK",
  "key30": "sugbbsZPNKtND7EtFMDtKauvxS5qJVBjnyAXtR5oCYU8mEuBqKSURbNpoLbUGFb3PVLybTULg7DyVQM9GL9wwLp",
  "key31": "4oURrufK5MTVXFT9MhFK99icXAUpnGM8poGHzyRhjferufaQW8AMZMfdJppuEWMruGdGfLbtkLmjyoNthC8YmkPU",
  "key32": "H8wJa8rre7kZ1c7Wggw4zTe5oHS7YT3EHNy9eyRmv1WpXE927oLTWAJngkj65r1jDzMu46HSsV6CVbrkXyR8XXg",
  "key33": "5RHDndbisbRYrUpXjbY4KVQrYxQ5ejYXkndKdAFYXGZSUuRFFJgAKwV4HkQ73Jv4TRYS8hTnHazYpJeEPb1QBz8R",
  "key34": "2TSvgdqiKaDHSPME4opdHU44xEVdiLfZp5pJdouMNGZxfwjxRe6mWwvsK8GEaEBjx2M8LdXSM53V2MmKPzZSNJDx",
  "key35": "5N9XcPyHZM1sx5X6cDM2KH3FpUwy6AWEb7c8ooLZx5z4wZaLW94b69WfHY5Qu63t2viwnYkqjwj7GMuYTt1CNTpE"
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
