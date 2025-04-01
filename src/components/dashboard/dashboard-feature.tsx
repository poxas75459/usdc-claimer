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
    "4sFARZJkdQxeaJHEhni3sNgGBxWeKr9LjC4F9Xaep9cKHYUkC3cpW5EY6Tb4yArrh4FXZp4F9PZpyqSk9MdRQFrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mB3VaquzCfGKnZVLJjtx7Y44YNgFcBCUEA4m5V1rEsqiNuchZYPucQmtXAfTRCbXvtEzbHfeDG7XN33pFCwJzgX",
  "key1": "5aoR86Nw8xcUqNLTBswdjrChrvYQPFEqaRHnko2FBJaiC1TPxy8CJwVZYjf5zzJKmSe7FA8VDh2X3ju6hmpiacVy",
  "key2": "4bke1SzGX3U1DG8ZdLz4tDEeovz2y3VFJeP76VCYVRoDysnYKCiBw4LDNpaqSSYoSNaGx5NAjD7XCyRakPQp76pF",
  "key3": "2qEjtHbvPxyZjEzpzMsH5rS7kSdyKhqWFQPeNuWdTSoD75pL6MikyDpc4PnSBDR9wvfe56bHdshr4Qh4Wnma9zvY",
  "key4": "3rzZR1mHKpSQBqPUsuwupg4wZ6BHt2FX8QLHcVrs3TWYnS23QpkNa2EJhJLAHxRgLKWcaeSpiVeFqEWCjiyr6Jwd",
  "key5": "56jd4zwAPtuJhaYhxYH6dxE1an8zdSXekWy5nr8FygYtXBhy6r2yy3VcxfbMF3mGyBEUJ2z3kTNCuPRiAWMpgYUd",
  "key6": "EY9s1cMvp1847qxkKPzUHgFP6hsiDjS1YHhjQSMFb1a49uKPsKocNNLtwW9S79L9LhvCsBYUQoi6rTPk1XrgwU3",
  "key7": "5ynnQXL5dV1CShom8VJbUVymq7TsZWuyyAQ35nggE1ywH4B47maNryYobyDD9CbvkY4DD7ocHRTxgt8wC6ApcABR",
  "key8": "3EFfAjQywtkeajSZNe5DAMUNEhJfwHFH7ty8xf2k1i25j3Tw8v8s2XEi6DSunJxoG4eU2NRr6go1zdsYJ8hFjSdV",
  "key9": "JZtWdfj5CmmJVXx2RGX4s381MLx1jqKoAsofoWWiyX2sKmCtDFTEDsK6UqLV8svj7t4fbzXefoErPHaqLpTvg2n",
  "key10": "5ZCc1xNSuHcVrKq1wGFbo5Fvjtfc9F2LTTbYevTz5NNjdQfB8MxGHsGTm1M7Vsjo63hMtHk8eDeM76gEycHJuGdq",
  "key11": "2ZXdxbuVPUVNwx5T8V7TTnL7n4VHk1PmJgZQj7Uehw9phgC3SwEZseG4KmhCrimG7fE1xAK6u2sxkJW9a8aEgRdp",
  "key12": "24yESmGa2z3deKeYtgrbhWqWeQPgUTzTFutu8Fi2xUGq9KFAzuB2XNAugsDirhrxduxWdC4JuHykcE6YBayszU2j",
  "key13": "3VB27E3zJFTjg5efCivenH7VYReHA1cvbcSv8upc5WDhRD1yBnxqRJuRdudQmt8TocviP12zezWXehH2kPVANK63",
  "key14": "2JoEAnhdVamRJ3QmbnZMrocCy7FtGP8gh9HV259bdTGgAzamcZ47Ekz8SxEa2rvHeeaHcPBeEQ8r9UVCPYEtNXU1",
  "key15": "6gsLdTZz7UiLwhXuZT4xWPFkyNW6MrfC8L1qTC9mfG2kQBabJtRNPUAqRDPEehDrBjxpYdyiGjKfcu9XYFx3JTC",
  "key16": "4bLBHEDck2hroMzSr3oMejCfMvsx3owHrQ98hXF3nTm7MNko79H8E4HiUGpg6Fkzrqwp7tktYDpJUwDbmkHawMKy",
  "key17": "36PoivzfPUuEDzufvR9N4w1yuZDro1goFT9duQUdmjQ1bcUc9ThFijMeNZvUJ848xF4Z6yZeFyK4zccHDnimVhfV",
  "key18": "2WcAaMdmGZrpEFsLPjtmjt823jmMHZv7ki2vpZDfoBwXnkPnWUpfPsQH2iYFrsfrArWpMGVcmk2oR5rdNKj95tqR",
  "key19": "3WcKoQ3EaFbHiHYa62uLBjStnCKkgFMEkxxShe5Cti5HPJmNxBDw99G3AewcBU66ZCU57Bg1BSdsNxJi4duNTNuv",
  "key20": "M8k99LexC222Y8cEDYfr1swZNxJp8oPH3BApApntfGvXUHRDczeXg8mvUbyFKvGo6Cwf78rXpAb6t2X5FrQfXSH",
  "key21": "7UV3ezanUnGeubRfZhMT9sJw9uTNQWTH6AL246G1dhmEvnGMGp8b1mb67xu7rtAwJEvFr6ZAuyq3aV6DAZfDnAy",
  "key22": "4VMfAXPbfpqiJ2gTUK1t8f7wVL9BLVHhGe46GXb8nMaFUdvme8SDnoHbECDtUtGeWYpP8sp76vyJTPAMYAKLtX3X",
  "key23": "5GEzvW6XxmH5eSnEXTWjwEwocWqtvJX9zxWjexKA8pmHiBpB3VSFtHNSgy1jSzeRf5FC9LHWqyAvL33tu8WpSs9z",
  "key24": "4eCue5zLVpfkT5kWNc6r7wGQC9BGquDg5Gb8KgWBW5ovPfUTHsH4VRCSsHEd2eM2hHk3jeV4FkKBvjYvQJhcWTR6",
  "key25": "55bfFRxFW82gCMiCkFF4CUxcVmdtkMWujW9wgKthKgJxeR3kCysqxU6atZ16xQqeDcyPeDTKFFbbq57buAHFFvv4",
  "key26": "4E45iBdjJFGMWQYpbWui4R91Kzc9ujiV4hoz2Xb5GiAqyY1hdqDiNQcQVxqmBzjaiuWbgXFe5RN4k8cnZari5cez",
  "key27": "2ChtcjQBeGpkPpe27psZaWVqxTBUweUgCCWDYrif2vbm2F7sjML3kZmZS2EziE6tjgY7y6duw2YoswpSGfGi1QLf",
  "key28": "XngK1CB5coNjSFT5fgNqKJ7k9WZAJdTAUkGYJLkXuiJQURLApt4RT8ifvuMnv8ys96XFrzLXfMyMra2Gog1eiG7",
  "key29": "2UWPriZD9rvKgKibMVmDEtRFDmzW4ArYtyfzuyH75jqnN4JLXcUPwawZuhaswGSKadhsXyM9ffJ4iqZVoXGscCXt",
  "key30": "2vD6wJngc5FqQ8Xg7fuR6i9JN919DJrkX6MvkXUp6USAer8m1wMsLN6ppKg8uqSiwyfBVwtCXpCdJkZz9QtnkWaR",
  "key31": "2XtworeQdZkyb9DvRpghufXtjnLGoBdzPmr8DgVMfVCjQ5GYb4enAvPdkBpZivdXbq1z7Wfb67oUzj1LZnoy1S8U",
  "key32": "EspC2h5i9M8fAqUJiNNyP5iCsZw8n3kvgHy4LRg4DqFd7Zb5ndtPmSv5RMXd99STxcF2EuU6fUtZH3GPowsBaF2",
  "key33": "4A5sgAwPJ1ziUsfYHptPkQj87aN4QuJwNxW5xVQvcEy8Kdo8QxdFFDKWThLmfV18KCEyuELrnNTEY6KLdscVrYs5",
  "key34": "ke99oXq54JuHjtMACqLLHsa7UpwTHTQa9kMnxwHZ1hYudJzywfB41qNg8ZVUG82uesgr2a4qige73L3RFY2imTG"
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
