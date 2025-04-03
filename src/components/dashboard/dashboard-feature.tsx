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
    "3REbcnSuz2777XCsL9Qwg5voyG4nbazFKhrzKng5Pknoxjeza7LsFwyxS3U9GRy8Jb9FYGNB35WPbwTfw6VZUnZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kyrqtSM69VwGtabWKWfYmQsZ95PxsPpgZyX9yrJp6BMWFHZu6Vki33xfvQQhtJn9iJxwKjkMC3FufNBa31xqbJy",
  "key1": "2KEiRi1yrok3mvQvB4zBhVxoHxQgwr4RRjyyhfqmGyJmUYT5nRfqVDh3xqjrhd6C4AVFjvx4ArQsk4FTC4rsh3uZ",
  "key2": "5xwMZBhpwBAXgn713X5Houp64YFvvLQnmFGGn5CobzAGhTVZJzWfcp8XwggxbtCgpAZqMVcGNNmDeV28vhD6QQjH",
  "key3": "3AgPdUVAa5pt7Jf4ppRVVfhZsjKDkyAUGMSCkd1Fscq8MtUHENTDpaccXEpL3shX1qDw4LVeBh9H2i1cZ1fSfqms",
  "key4": "56W2Crbbu6GZH6VRN6m21HVVraJxUvFw2c8sqq6P9Hg3g29K8Pc3oqwp7e2KvKQmk8wd3jvhEWFf71fVZf5PEqKx",
  "key5": "HT7ERb2sRNtGxBBdxwgr6XXsVM6CpaSGRcnLuq2CV99hbDWw2ERa8DFmSLcdBKx3hmi5aTr9c2TBBVwdXvSoHHE",
  "key6": "UXu5zAtZbUZJzz8H6BMxg4jxWFyf3mfGn1GMPxz3hjWNzioiRPbGrip4vTXPuhH6uGLDSHSqwDAGHth5XjUXtTA",
  "key7": "Ays6wWF45GqXPwhG2V7bV4DbUoSJo4eEgzd51ukHFisfswRQMJHMLCYRtHrmDW57XJnbB2uCb2jsDqKrhPYj1Yw",
  "key8": "54nfM8CNgV1gDMBnZaLNDmrzxtuNXgES9sjxqPouVAyg6PPcpGqVNHhhMWRWwwAV26fXZGDs6bg59yXDN65dqYKi",
  "key9": "2q8tUTT86vcYUdzPUz1RYSo6C3KDUu7sKbt69pGmXNZFzh8Eytb6VWLna4wDdNHKwBFM7vR2YSmwmsfr7fdhAifx",
  "key10": "4yEZnRpSoDMH3zS9obas3rLyscYfuwZvnrf3UYhznNV15Ea8pnRzzRfWJmvVgtdGnRUydrsV4EVCmd3FZFYXkbmr",
  "key11": "3YS8ccakLLQ5SDvrqMoCnm1SvQGkShH5FBUusMUFnBCAe31uoUurob8y2yyiw5PiTX6gv9715LfGQymtZWRFHAoY",
  "key12": "4z6G4j49jYiknfQqGhguocyvuGsMcK3pACnn19z6RZ9rn3PGnRsnRT2cfMrYkGVCsHSBqVavzakmMHQMVsu7vCvj",
  "key13": "xLmgtqaDpZNWy5tVq6BwUrsUMrgcA6xH5PY5ePRfM6U9fgV22exsQryZbLKrjTNBwrMGFUPsm1yWtUwenkMz1qo",
  "key14": "4611ZXhRcccRoGA2g1Zer2whq4JwFg586z9NqdvbhgsRwDHG4vMD4HdZw7cBxFEMeJjo2tPFP472DJoatjPqgRDo",
  "key15": "3iCv7tdg9dcXcR8Pai3BcPfARsBie9yReg9MaZkwfEMggHM4qwTrJkQrgUqk8aBCbFQs1nYsVMx54pwAcguKcNpZ",
  "key16": "34xb61Fk2KRQwW1fEe9y1fF6o5qAbzaq3B47eyphyiTT3XqPksHXNJrr1jU5Y5gdoTLvCKdJo6zorbNo5L7W46hQ",
  "key17": "24sAay2i7yyaXP1yzyTypn3rtgiGzQZqStSSFyToUgxATgUFC2Wpf73FykJGLTQccAJzLW8fXxtVEZHXXmCewZQb",
  "key18": "5jizoGxx18wFWq1sUXkbfERh7vdeAYVct8vArxjUkj6HBwbGaMD2NaMUuBnCpsKBAfFt7Sh94HVm5DwSgkrrT4Qz",
  "key19": "2LirqsaCKc9U9KNdQJtmCi7nuKhiJDy7QCea8TDq9eHtfK27Miheo8hmEXHSfFuTFBpftK4sMCNSezQsC3NGKWu8",
  "key20": "4rrAE7qpNeXjNYeGgDatrJEN1Atc3gS38qAN9yacVDsuLujHaDaF4Ru1UuatKwQ3GkToBBh58Y61zMbQchPy25m3",
  "key21": "3CjUBecADv3xtqa64yPKPJfpFNxrdFWUFRNEmw3pCoytxPSG4M1UPwvesp2U8FQK3RFsjLSHrVXsy4Pr73CDQi6d",
  "key22": "5PCtM9mLGG49J1bqUu7dffvKughUeGDA22EnKN5kbwXezStUKcVSpU2FawUqfuL7971MNXuYYQx288z4UqdPQaq8",
  "key23": "5aCufGjvXaW9WvoryCsk7xaGhLGL1Y2dPudxwciJJq8CnNXWoXUpxSaUvLs4VG6zDZkay3sEjyTzjFzJeKXp1cB7",
  "key24": "55J1sVMEXvUYyicwkdcx97s1U15TdYDc7kHEkGXjMNjbhRAXTjHz4qt6URozLVQQ6ifv9LcpPsWzZc7EA3uzqoD9",
  "key25": "331XiWaKF8V6N1oXDQVWknD6nx4p7aMQ3khGJFGpwkZ9nc84H29ExQvxioWxKTzqWvUHxzmkgVmuWsCmAeDmgHHZ"
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
