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
    "5nZ8A2KKhbk5VP5Kk3ciXww3K5KfsM3x37SXRb45nebmDqKw3dzV3qNhymFGSxTxEUSW4EJeqEghvnK59Gc4FFnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZgKjZf8giRpuqQR5v58GNDjiWC8DVijsXhx3qChKmU7NtdgrVqrDu7HW2CDzNXM5NEQosmwFGWAyaVu3LvPGAGX",
  "key1": "5T2nXZoNxqsoik1GQiH9psuFaEReAhYZd2X8h2VjM53xFrAvcnbrGwQZVJCPqY22yCm8eksDoXytTAPx8Kvyexko",
  "key2": "2M3gM3EnbmFSUR9CQ3ZAEihL4D2deiPbHSKbU4c6qxBh2ctmJBEcnHBnAbwiFBpDy4T12EpCz4TA8RAX7wZtFX4a",
  "key3": "4pypref8C4BJWHc5m9LGCFhkUTkD19QNrYFmrLwZbBSuGsEKY5DoTgZacRLKWyjevp3SosbjMZrMX4hDjAYfEJQQ",
  "key4": "31zbegfSYjhMET1F3XvreNACL7KaeHbCM6zXU5EYLd1tA5Wf4L3FgWWRRrYtorwm5BnMbnvpSxJgU3cWy1JkdJuC",
  "key5": "5VHdju7rqxAehkNBgs8rCBjRfsy7uJMf7WkeSiqtkmN9H3kn9DVrB42h8eRzA1vHx4qtW7G9RfX4bGQF68aeKepA",
  "key6": "33HSirKwaWWvWJx5ZwpnWA17seR5SdZDyN1wehiMFAiD9V9vwMLFBRW1FK97g7ybriW1NXB9s2G7mFVK1z1M8MfN",
  "key7": "5mvk3Qhv243KeQ8yQxUbmAZWYpo1oxECrujdYdtn55xswi2ZhjMWxhqePrL4su3v55M9MdazDrg4PRjhtgBVhueg",
  "key8": "358yyrz8SDnUucFy2t16io5JAyMtazAoKQ9AFC1jybmfSLydiaehqyumskmrZxu8AMiAYkVmgsPckK3xzEuWWYEz",
  "key9": "2B6UVjeq5XZUAtkyBUWdm68q19eAiLdgh3PuW7MNf9sdGqGhXKnSvYPFapKnXXEn5etkMeUtqDwvWXD9t5c1NYmj",
  "key10": "5GWJxczT2wyyH6RF4sPR93xsejU8to3xCLakwHmv1M8fkSrZxQ5RsANzh9rcuseBQkNzhQFXXK3VgB9aL6rq2AsT",
  "key11": "ccXV3Vg3YS1LBhprduN5tJHr4uQpgmJaSdEjT3kqRpi2nkhG5fjvn7nAvCrutPy6VtFpojEUp73KREk1Xj2xyEt",
  "key12": "B7r4MJjDeDfExeYHqJomBzcX7QDXMnHsAukFJdSXfVx5G6mAk1avceedtWfmSASUV5bH98smmES4Zt1ScMSb3QD",
  "key13": "4tob7Agcj4DBAce4ScEJNrX4vn1oQMFbHSos65u88Yx8oCe3qpwcgSRPR65JgTZ5pnnhHyPNv9aTFKaMesSoZXd2",
  "key14": "5h241CB6fhgGkSroeCrBAnPTj6A5Fs5ixFfmQADYw4goctZfe9jR9omqKN8MCpkqU4iC39eFbSh6r6FnW4AtRy8r",
  "key15": "36SUQa6YBn2Kj95fFAu6PxVQoMeHqSC7vmJ7BxTRCgcM5PfF87tZn2LpUMt7nri7XnE8xtb53muH6G8Y1nBbMUEe",
  "key16": "371hgyve5oEGLvxcDQ8w7wdR6PSL4VPVACMBaahxBYfs8F8GM4R2rbzTLLX1YeEKhMbgFjNEuzyVcUu17vzyP7Fc",
  "key17": "5rsY22ntz4FMMVMydAA7d3yYuVZAZ3P9GbmWeW4zea3qSYtzb5C6g2sL6JVXEdchjoFMtAG8QZq82TUugvcFCA3i",
  "key18": "o6wQ4y529btEPt8Qf9f3mZwVtX8wmouQKgizPRYeJcbJxEeMioC9hdRGfimNxDyT7YJ7NscSNTu9JJCHzokttd4",
  "key19": "3mtbHRuxjVNVP5VTVd6tjhGp9RY2quisiehdMQ4DtnQKq599E18i9X3VCaHj7PWeFfMtLn7XygDad4J9dzCV1XyR",
  "key20": "2GQ57woteszKJVX956fFehtf1bWbHP3QEX1JCLoSD8XEZYeEKHK4sjUJ9gf6RR7FoL83Fv3BAGzBcQVu6zSvG2HN",
  "key21": "bHF91PH6YbnfeJDiviBaHv9vUZPYJYySeUiTXyj36sKbaAg7u5HZYmJBotDmrFh2bo7GLYUaZ3BgQMbdLxMqPUC",
  "key22": "4aHybaZJbWhc5qikvyqjjzt59TMf9GqeNjarQx3tZdsn9qpZDqAawuq8wRp1dbTVbdCRfoCPPC5sTfgF6GYD7R7f",
  "key23": "3YBE1kBB8MLi7HAdCZDVfdHu3YownnoBT4Lvdjnkdcn6SL9f59P5Bi9uASszcbgyghfazKMkAxHgYo8yS88caF2s",
  "key24": "2Toqt4zdTwDc5DM2KJFnAopszRPXv3VCo2LSMJJYu3XfcHTHYP6p3xSFxPdj9F8jPertBkXJcuPgYKHc7VdLTqdg",
  "key25": "MBuVXWureSTXaNkNoM3o5hFPeFXvSuxssCKLN5iBpVV7BNzRa5xKqnaPXxJqvqPPt1tRwJhxotPsNyndn31MUw6",
  "key26": "3ZCo5eGRx9LugvQ51uBQWjDvhpAkBj2trXQFpJ8PTm1omgu9RcQTYJS1FkrSRikqY9TpEqJjKvxhZzoLPVfRmBLe",
  "key27": "T4r9aSdig51Ump2Cnmzg3iasDLPKsoBeYR4qoKZScHm8ddQQgYV7gjvo4Kbm9eWrSXUBvJQhmmsfeG4MVgAVZjJ",
  "key28": "46nmo22JDuHSKzsay3NSjtVRjdwaWgsySQTXjXzPo6n9uuHj7T7vAPEgrCh2DhxoV4fX7BBmcNPge8rN9xSrmnek",
  "key29": "5sKEdFF8q6nC9umxJue9v4GGtDhwGgFJfXB6HoSKSPymfTSXJXJSjx76S9AZVX35UhZdPBtkWwTM7MoUH76V9L6Y"
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
