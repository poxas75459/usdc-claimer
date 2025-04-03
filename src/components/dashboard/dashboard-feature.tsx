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
    "4cN6EMBCMkKEz4uKqxWkUdSRkbPkJA8kYtrgn67j4MqTdJ38r1riASaDH9Z1YmnVc1Jq4iEaubKg2Tos8PofLM2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEkHq1uQiyKU9LUn8xtoVxJJTPPerhHjmzqHgAoYH7osMszGwf6G5ahQ4RYFAioiapBXzBSQV4xvFbdVrCaGikY",
  "key1": "2Y9mGRx2iTTdhNxybyCLVrDosXX9wFXYGDA3szmJ4Rap24hhHY56gBk68zp2wc5uh6ijxaA5Qpu5ice9XYgX821M",
  "key2": "2FAEF88uYEdcabindJMEacunsN5zRQ8MUrMsDzkP8ftgyoUECTbBvLYN5VH3dFe6VWqFrmfYzTiApeDND21pGDgb",
  "key3": "3Jd3wi8jvZNVaNn6Bz5ZdGdmzE3QrZdmRJF6HFvS48UK36uHqQKSHyRxARPvFBcQ4mp4pVWa7tNxoxxssCXBSMm4",
  "key4": "38xbP3ugJw5mkUsxZmMDuqTvdkMi4VhGiTqK3v6xh9C8cBDQgSQpvHu69EwafUdqokQzTVNwNfapq3Dgc1nNED5g",
  "key5": "59kPpfRbeUgA9sQuZhLFNcmuB7uWEeUpRCPhBnrauY5iwnVESDmXYvhHLe1NxQEBnbcHQgAKq4fCWgvLcJM2zX2o",
  "key6": "5EVN9Dbkpj8Je9yPuUtkvMttoXbHRDFeBmxZXTGdKfpPTqVqV43kEUxfite675AFac1Y8PAjQHu5xTRAv6QLPEzC",
  "key7": "2XZLuvBVPcAJkSWLZLk7jVSy3Wc6wY1UmW9Xxj7RDNP7s5wiTYCotLCWAodPp7jRJGAU2VFGAninsuLrbbL9JZhd",
  "key8": "8gQR4LmkonNKDnuom1hpdA4dto7R4EFeFtCjxWnYn6jVnQfLXZ2akzDujGGcRnehobtAUvuvZMDqd9sbc5fRKsD",
  "key9": "3FujXX5MqoH2nH23x8owWp3dyzXm6pjn4qCb9QTBeXxka2WTAMt6nJMSYT9BhZTz1njAqwB2bCrJLGQRzXhF7Kjb",
  "key10": "3naf6eiQHuaT4dhypfUbKipyi6pY7XgjacDNpY6dqvfJYvGJALcpqrhv7cYeDeJVDi5gMcNtSadBP2BSYiGUWTeH",
  "key11": "4ViGnRdvYdSDE2es4ASWdEnxye5amBBghmHHVJ6N21Npj8nN6XiYS6JQjA7QZ1n38m7BvP2oVH1NECX58QxWZ1CC",
  "key12": "2XRa7dypkgig53EZRx49GN1UQwRAaWjBvWKox8wpKC3jWor13MoLugLKsVXE8JRfupD5ZPuoYvCsLykt2fQehrXp",
  "key13": "3dPSVHHQC5WLekTtfw6cu4DPz4NreYZxbNrhgPKqGew6wT2MCqJcsqC36Aw8AmF81P5tCu2J9L5bbwiGMZYv5Boz",
  "key14": "43u7KR4g9dRRBeaL2Y7LcuNwqmUgsvZwEHbmJMm2HfL8puMxjgTq35QuCeaw2zpMoPxRQ2exUN2JFMuDyetAzMrh",
  "key15": "5SSjegjmFDK2pxMLG6duK2yDkbFoET4B1cPo5zBFM1ycM972j68312iiDSTSfqwbTisAcpwspo1m6NPNYiZDjXPr",
  "key16": "34d1KNcYbJJ747wcmoiEAoqXNBLPsBQPkEyMW2eBxn4GTd56FpQjtZoi4R3Q545Dt897kAajEjvVmEaQbBQphMb1",
  "key17": "5rHpXCyz1yVHi9sW4cQmzr5f5c2LGqbmeqKyMejbcYhddUUnkshabaqHgWefMHgicaBtzcYcJE9HDq8VPuL4sNRS",
  "key18": "2SgSuzoWT5CzUaWn8F5cGjdwHwzTEeg3FYobPG8ieekbTV9kxoJCwHxHEUnHNt28k3bszijLxxbAAPD1hBJCfmap",
  "key19": "3yGWygDrXY3goXeWzprvHMqk8ZzVRvVGEuxzrp5Hg61VhrpMX4Y3P3VTZPQNKqY3T8TQM83vNjNyzrg6Cvcs3Gus",
  "key20": "goFgD7FTK6BPDiemDBZiLRDympQaTmiPPW4N4AisWpRhD3mwLMMDuXzo8D53MLqSWmKXe9HVxtat2azvBpDYxsz",
  "key21": "2Lo764tLS1tPVRa9KZyH9rHg74NZa5btp874wkNukvshvNXDgDzDjimPFzAZerKiep4ccNUWzfVQzmZsvjXR3VGM",
  "key22": "5KPmeBpHRVh9pT8ewXBQEV1GcWFTWxvv5ZvXUDe75CMkU7zKUGkzHawQY1M9JBqmx9G4SoKUZxcXCiHkESanz9Pu",
  "key23": "JjpEbzqFeUdmBkHMHHgTzFHyPWQnWwxYnubwRWyMoeCGYrGa6T12KXsz4ZnKoh7QY7c28M7fmuwH26NF1BBWd2Q",
  "key24": "twBDb12fT78DqbCcdxRLLb7gPhc3mhkgx6w6PcyXbvkC4MFGkH7kXq1pnrpeZFkX8ZDRbNZtof3Feqjg8KwjdaL",
  "key25": "2qtNN6RgEq4vSHPDKgsg1NrNuE8vhywQk7MPncHVHQvmw5iVfiVJt2QYQasqqeoHsX9KUmx24TkudHcu6eBAN4PH",
  "key26": "2SV33htSbCRK3Eby4orvVsCQn6YpdHwXCdhWGmrPgsnihgNqNGSBqCPy5rCgxnKQN76KJd5joMSRN8sw6GhCSm6J",
  "key27": "5tmLCb1dwpvx7TiaCRipbe3ytCX5Q2LPoxdahtyDC38GQ1dGS2Bu3BAVzDfLdJaU2TKCuEVAMASTjfFEy67JgcjM",
  "key28": "3VWrrVfmW18X9T2CUEbbPMDFKswm3EKmC7EKAHq54ES6Ltydayqe635TE8fwGmBDbPw5S4fGxiZvcdrQ3txZjJFh",
  "key29": "2Wx9yLRr2d8CeACY4dBSmJ1b6NekqnTm9YvzkmHe9qbDG9NTFbnFzPDKStMGRT2prCGmT5TW8pUcVdY2nz8rEsYZ",
  "key30": "3owvpB8EpUPVYPU3Wfub2Gd4dKNK3L5yS7cYkcaqtpRc3RoQgdJLEbLPBRNyBuzF8XPeyWfjoSrdUmrPRLFgV8Cs"
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
