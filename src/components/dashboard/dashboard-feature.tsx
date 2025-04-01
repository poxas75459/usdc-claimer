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
    "3bCH1C4xYMDT6FTsx11UJeHsZqTfbtCcxGkodTY7C72yUsRqTinS9xu4aCJz9E7ngSExRJ851FkEGT1q1s9GxZLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42RRH2hZEHUezWyQoBU13mkfe8Sh6sS4YweRE7u43k9NKpNfMtLXR8iXJkQbobp1PiGcYz5pu4tLe76qi6ba1nKp",
  "key1": "3SqB3kzHGc3Rse151aetqYetnU1UBvbr6vFvisCsHjPvf5ePgU8rXJaa1o2j98bYdw1VKVThAGqT9DeRH8PHqBk2",
  "key2": "NptG2Zg9ZF7UXxjRbgytvK4tfEXCY6EUK4KVMn9MbeY4mmioFnfWZFEkEwcpVqbhdZRPQbrUe9vXaaxRVT1p17D",
  "key3": "37Ai6LETfy8WQP5wH7t1j7BnFCEUyNWJEEVz2MLWoJQXYX1f8hxaRC4oxmxN4Lohd1jJxtPhpjWcnoxYfWCQrW1u",
  "key4": "63MyNhTnPbDShr2qGR4GyD9yXHC9FN3JUAwQZhCEdYrakePEQ1RrK34gfEBdG1hbAWNNMb4JVAmRs1No2rusLzQh",
  "key5": "2sBQVsRJtWbqRRoZPLuhsz618DtF513CwTyfQMDHgYwdS4r4LtUjam2rhoXsSmdrJLAtC8boW6hCW3dyt6SHcDQQ",
  "key6": "578pcCD24YJA61QBjFpnTzKZQUZGvaarnMZPwEqYKKmYZFE9pgAsPj8U3ZtBqsaw1yuuUhm3j8kcUzKim1dkmKML",
  "key7": "4pfFgFzYvHr2Fv7HJqsrMBo82JQHXcrdybiFs5giHytsLubnCUPnPjiBnJ3FdFHbk7fXZbX29uNbJ4HrGtgwyxTf",
  "key8": "3E2cETCzgedNw1Km3QfE5TPJq5qTZrSnk7drS6zgVhMayC5obxfhmWQUp8ykAgb39fei8HVAAWf9XNrgRYk6Nn9Q",
  "key9": "3E789YCPfdRcvMihdcvTRYDHuyjeJeTD1Z8SEeg4WcDEy6foPC2LpJTGuAJkeqhogmbUAQTUMs4Mp2X7wVCJR53n",
  "key10": "4uN2ARuYWvNar24zuFTc4RrqKPqgKjLQNNwmuZu4ctpeRP8K66MuULNT6JA7mHLNhm61ozY6kFxp3JgCH26BaHQP",
  "key11": "4HTQLg2kwz2TwK9QH9kU9tC6DP3dvagm2atVgxwDdWvfWryshRwNV1Ga5d32SMFtKx64mvTH6AxN16kogYJTNQuz",
  "key12": "5xFLyRkM1C3EM1Z2LHb69iSiuimB2jkdcXdKp5M9XCanBFccpjqcWwonnMECHPviQvWPVtsXgudKprMtzMEmxAeb",
  "key13": "2YmppPFzTpszatb1Uk9j5j3DLtpPYdAzddFKiWCLDD5GgAxzhHsG8wtHK3av7PCyVEEH6Db1T5urajWJ8jW45WUb",
  "key14": "5qXAnsPLmCFyJu6ZynpqB4kn5BL6zfanSSrBg32P3XUYyryxrRTstreYMCDkZPU7EaTzYx3UqTY4c2EmaKhVvjLT",
  "key15": "5DgFCMJj4PHSMQidG861noExE1FfvoFEpQzcYSkPH8TKZCx9GgBzPysnjBF3n2KPnG7x2dqkFqW45xFCzJZ1ey4b",
  "key16": "4qLE1AvoZziteB9bf3E3Y7j3MChjQX5L2Uc4YZ65jtD55SR9nQWxekF9wuGiMYoV7wgTuTqCVdMsSJt5GzU8yfj",
  "key17": "5r6bm2zZQEhopXAQmzazGgpdHHBGMsE2FMHZkG5n23RDmpxYiwKzrs563Pz5wM1eHutyVZR9fV2dcffbhk6GZNH9",
  "key18": "3GrD2nNE6XjTpu93YULypTAp3axafDLbyBbyyWhGsvR1GgUSbk1W3X6Lh8MEebPeyvrCNXt7wdKKtnUpXPC8jZHC",
  "key19": "2hyMv1RkvwuML28CXqco81HC1M2s91WkTQ5RUHWzuCtLAMHjBBfMJSYDbJUD85GijPwpcAJX3khScM4J34xFqn7V",
  "key20": "4vp7HhexG4RkCKek8ZAGnBifpx6kgY5wx8Xs82fLAQBPHwZPegK2N9ueLADAgjxVTbrcBk4mDgChcNXuXaqJnUyN",
  "key21": "4zR9WyAXZkEiHbWfnf8LmFZAV8gvZ92jv7sHc5hDsVmEjQfJ93PTXiEZdfQ59uUgBnnZ3pPJ2VzMGCLSD82cayya",
  "key22": "5t9tPRC421tW33gx9K5GJBtuhwjgMNiokpfCimiFC4Gsv9S6s2tRVFEJYBAsV9neEiE7ytgkuaCHEnj7hBg3sA6D",
  "key23": "5ENd4A6rAv4H9z8LK9BoLW2x1jhSrFBRMiiYSqptS4P26hsj712Fd6UiFWqrMomzzAw6wLRAjtt8HTxXAaf7PW2u",
  "key24": "5aqaqcfoUSwYPad9sNviLnP5LCu2NWGArNKap9uiBKtmHFQAkJvfQ9W4nqas89nYHNKkMuTZNre4hSt2W4E3yNBT",
  "key25": "65dg4reYWWuaMP9RDdpvtFgGzQc3CkNwwxVMM8gcRun5QxTJrHZYTTdD6DCmgTBXky4QK2gJwKcwokGAqQp61qNN"
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
