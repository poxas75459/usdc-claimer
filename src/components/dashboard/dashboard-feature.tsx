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
    "3C5YL9c4jmvngevDQH2sbdRacZ9D8DE6uNHfEAC85BQeuhYHNw619UxEr9ueTMt4ithXMvqE2ZUwr1v2Hohe5CrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBp3SPHoTA8S5A6rxKpFNtgKcwtnHnZ27BNvgpovGdNzMuqSfxN653LZPeQErGqweEfcErwgHAUkxqgmaPLgzr6",
  "key1": "EhrjSQ2hcfbycMQDnSNmViTqkLtqaQjUKAhd62SuoSq15cHvwQajADcLWenWt5VuuztBTJJ48agj4FYt5pw7N4x",
  "key2": "2tfeQuHWjrz8kBPYWuRBm3T9pm7bENixxzfWcPpue42Gcf4kkjp29EobPnVASWWnfzBacswT6nDKbUv7UuNsG4nF",
  "key3": "4hWfK2VkmNp4xy1y55LbSZkK5iChgpZT3kwzC179P6khEg3TnyCgeSG85s4jjB1KWJjYW6XKozV85MdZaVBDJuFu",
  "key4": "oB2qTDpo4pBdU7nWcwgpnQgm8rBv5Q8ccYLVEGXhMzPm6dRcq8qKD5RLpFUFVevv9BoTxYYC7cewU2zJHPaJ5Cv",
  "key5": "3weDtTq2MobC8UcPWtSSiT2WbZsNQr6Vgxka9Ru5VD2Yw2ZvkMr5WaqCi3CQFJ3CVDVJWh3nuLifJvvJAUx5mXW1",
  "key6": "3dKaqqCtwLe8WGPCUUg7HSWGtGe7Et17HefmGSNUci3SByJXkx2RPQrqEEF2iCEv86PBjGUMTt8J96Bb62Njfh9t",
  "key7": "5abxmnNF5Xj71dazHxRLp4pJZguvtUBED7SfEMwPTUdd3xsPB6qLsJU5GVngzHeH2F4qTnkJvJGctWLJ1MSuBbCf",
  "key8": "5mW8KbUUmhzzDb1NoWnbbwTBt7EVayfjSWTCHoXvWhRrcGrGiRPh2T2zMfezji4R6968Xnrfm2fhRLbRegp1D4vq",
  "key9": "RoaZp79Z2GtZXJgAzGeaVKy3WitmhN6hxsFKMG4GwXwMz8Nsj7sb8Qsiye48Q6QydWzz3szjdNDqyGiqkqZsqAe",
  "key10": "3sNzpZFSBJCnk5dcB1mU8iEAWDBcFvz8uhpuxo9rLnhooykcGtSicZhAyrkQVNCLN6FsRzQs1A498jt3NKVjbd7W",
  "key11": "j8BmA2uMi5Z1fo4RE2bBMP4GkgFxxu1tamDVvZ6tvKFLRyW1h8FoieJD1vmwKEE31t46JRy8vtRbZMWxRBDcKrU",
  "key12": "5vEHGgKZbhPKPJnERXou9d7SZjPqNVBVU76Dud8FnbjjsJ63D4zsRyq5DksYG6g6E8TRnWxjV9EZx5UbV5kR4xpc",
  "key13": "pW1ZX3939R3cCSgmoV9yGYJyAxXpDBCYTnhmtPAqTNLRnxu3EGbDkGFeXQyNHDMhLwF6QNecvFssBp1aWTYz6WB",
  "key14": "FGXvLGRGsfuCJhxXyjCKW7FuwjaKa3VUwGMBcyLMWo9YLaiYMzd3SD9VDk3SRVhJkkJvhFhFEJJU5FrcutX8kkG",
  "key15": "44RBpxGFRNrxUtsnqgL2b1kgjxjohp93Z37Uqx1PbKcJacSxaP8D9FwePYG91jtL9DcbFiPmowa4ucjFV3mjZSCK",
  "key16": "WvFXrQHgvA3frZwTZwCMfiMTrKT9WnPA47EzQ2QhE3x6ftECnr2jPvbKtTMf8ojFHAv8WVEXcFW5vgnkMgxNdpN",
  "key17": "2cudZZxaX1ZdW8Dgwqu2gYrfbiT8KbWyUQ1hSeJc5U7gzMzH72x2bo4nLYL3Yze8MupK5SuFCTHJWCEARY9Uu5An",
  "key18": "2MKq7cawydDPhiGHLVKhCKvcyTg1WiypfKzpkA1nXnPV6aDGEeUgG2nJxrTxbDHvyFCF3Rw9HGUPfmRFVs7uaHn1",
  "key19": "2nNvtGR7sv3XNirF7Q3br5U7Bm9tFeudYoWmotpd4aU7yHVfr3LN9nfwx23QSFfYv7CbnwNJZb5xSKG5m7As4qVd",
  "key20": "4XWzQADuZjUsiFrefN6c7hzF8Au79XnF5Pf3KxpFc2z73bsj3nkdDtzfYND9zLppgqw4apiKEd1hAEWgannzGdQa",
  "key21": "2B52xtXfmRZ5JyK3hqeeCyqGARGTacJKMgCghiprY1CTk3AxXboGqTwaZVp1feki9XnVYawpKE2NhAPgSPBfDUqz",
  "key22": "5wnrrhtbUmxPB8eXBKmh5Pn7vYD6W1MSK5M7oBFMxHnh5s6nk8y4jGtL1DLM56GSaRX2RLiGi9zdCF1uVv8nGLQk",
  "key23": "4yP9J2osM5eCh92ojFdSKwUgkqf83HzC8iQiyYLLRUrBUuqxm96jWh7xMhMSVJbLWambnWYLSusGL2HYncJhLFZm",
  "key24": "4vf1oPHxtRWSzamED5GHQWjhr9Bd48fZ3NcmDuoKcdJBn61ctDN9GGgyJingWUsqNTqYHn75pu9QCQqAnoZEfFD6",
  "key25": "LM1v4qPuLjTY2HhYSqmo1qZprvHeKCxXzZYzaJbCK1ssuCggUjVSJo87mC8T163TCbYaikmsvosZbW6czoCfosX",
  "key26": "5GyFUXR5UBFzdG9bUTj7qENcfLSLpJyAaSojLNbNkN6tr3ScYsGvo7eF4DZ74huKckgDyYyfoYp9fM2my6pQzaJt",
  "key27": "4WrTGqEDa46KRy3wM6x4Z3pzhcNRTdiKtXA7y2JdsVck6WLArrhT43tNmzcRBotB8DeGS3CwbUdyXYdQdTLp3Unc"
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
