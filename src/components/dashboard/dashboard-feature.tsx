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
    "seTTsoJoXbprsyYWfChJdmGZPqSFkghVxVVNqqr2voiethhPehwvFVF7V6RgCmhoWJwWtnH6qTJYJdPiBUmu5AL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LMXhq1bNWquepddTHavvKDWUwHqrxERVSzsmU4ESA5QtiQ4C1iU4b1KSeW723vAQ7qBUo6HnEmcw7ufsSb6ASap",
  "key1": "5g5h8wmCzH3bTogX29HQFsxo8Rh4HtHrgCgjWxwm7jCFS4LKZr4QQs5Gtet1rtMxRaKZtci3W76KeX4v28S5TAsb",
  "key2": "fi6e97BJ3cWZoywmPJ9xZLXwNQpBTkTu369jwAXYfHYZyvjNbMoHh2NPqVxrX4Qo9gHfQo1HZmUwNe61EF48YMW",
  "key3": "3vvUk3ykYFT8WtskHhiCWH2AZK4pXFJnGrkv8xkqMwUD1zwiTEChrZYMPwqQ4oMpzFf6VPKyEebSNkJscKPzenLb",
  "key4": "2aAp8R2krA59cZu6BuvMNjAmRauNhLFr4Cre7VLVNRiTj75rmo9ReWdMc2qPdM77Ct26VjR5NUbiB2cKjuLv9Kn",
  "key5": "kLbdfRnEvvGxCMgiCfrY93kWTfvjD3J9WDw2Cw4UVrhHgArWRb9RTGSpP745n1iSkpDQeQ5ab5bMhn5jSY3ZkPR",
  "key6": "3DzMowY3ow7nxzsQgdZ66U8x9K8HVDupCswkV1u597hTFrsmLHiqHiXut6XZfXCnx4C9yx6b5eQGFJA7hoSdyfHd",
  "key7": "5o2nddQV6go5oiZ7EJsZVPZDzXtFzWWidF7h8fbu6jX9URiF81ZnJWCDs2qvcVzBJxftfaLNq2QhTgpxDbUmGhdz",
  "key8": "3VBx9GDkjun6mYeBhVDFhCT7Sdxm3ukvdeMSfKWtKNi7bnwseiTPgZS8U21LRc9K9YAA7p8J6v3ubVvW6ncE2Tgh",
  "key9": "42CVT96iBefY9SZd8tzs8rWZiRXKRdGBJbspttujbB3hYMeComqnxDAMEuCSM8SisgPaHdQayJkvUoseQJKQ9kxd",
  "key10": "3TSs4YSjFRQsmqJYKhFNbNbn2cNnHq1qbvLZohP3VXqmTXXaWeBwmqQ5fzBS4uCUcCYWFWP4jqndE1DqsXiqXwvP",
  "key11": "4NLrhvD3drzn115gCfkeaG1nCXC7DDGkiMZFWFy2HmrjpQNaJTFmgCgrRM67VnP4hMyTSLZFXU2J7UE8XXVKiCTL",
  "key12": "4YeH1uwDV69g11rN8Xmpw3etv7x7JVoq2UdsXrmqXSdP62Ne556qk5aLgJAmTre1SPotkLHoiova1xsYtic5uxJ1",
  "key13": "5sKogFq7U4Evi74459PBuutuUhd3bA3xyZShMmB4EVYUL9MQAMPuzXqPXdjdA5MBVBNfqQA76Tji5QsRr8tgfKMY",
  "key14": "3VDYkq1jwpsrzzuxhzjecdVs7srVy3S7Yh1qtgg9VbUvgbT34SncusQP4idTFJPbz5Q52BLeP6weY98Xria5TQ8a",
  "key15": "3Dkk5qP6twpeWmP5niXHuWmt4mN83ipQiyERMSfMPUSVZhpbqVYmGFiKaThjjjxDozm5qbr8mo6ahNyTZdRpN2jZ",
  "key16": "45rQXgNqBRwuoMZjJ8z4Hf5H6PTzjXgyMUpNyDgNiEoyLhMuqzt7Xhs4XEcK4mzbq6shk3E9bNic53D7QHMw5Kfm",
  "key17": "3MVK2G4nQDXjgQ9mcaPJ7Pf4ifRcRvFKVMayxHWUHLgFDTdsjMghAqDZtAb9ySjYNiCCF3cRp8n2nDLPpKvx5CNS",
  "key18": "5pkjg4swhjcTwuB5ZoxBrr1vDFaX4qk2PoTeQYgVSCttmnDPkaavLPeFGMngNkgNfkJpQZbssF1E7bT8uB36wDjd",
  "key19": "2QcJ5VhuV25DJKsLTaR63YoYhuea6UBCpoiGUGntgX2s5TyujRKePzPxWHJdNBcmje6PQzfKQycXNLQDYLzcmNRA",
  "key20": "22bAD7ny8Y2MwUWnFydAhrmzJeGdEYwxzw3C4sUZEPaKHRdQe7VQ5T6oSY8yvAfcRCqTQzkgQn3Pf293NA1gVybj",
  "key21": "25yTJAeaEp9aLBwJcwuJJWvkv963xDy2D8Z7J2J7Xs9YMNxzekx3oUDZBeJLSYYV6EjyoGUZLKrtpaiKQras7QQU",
  "key22": "326AFAy6rotJmbMxnwM4ZiEBGv4sthXPcasd1aK9dmdoCgzz4PfSJubMBjhTeZN4aVRnGoupwQR33Sfdqrv7T7Tq",
  "key23": "4PYYQgePLNH67vad9sVvG8aPTahMWnnB9c3jDZF3wqYGgktfCWbq66USAmGoby2jCmZrzNn41Msjyyy17oW7nfi6",
  "key24": "2VkPi7VCKEP83vJAbxyxwM9oGAT78i9sjqYPw4ck8KZ7vtvFoFNi7HRa85CNTNWFrMMsfknrWzodZiGvdPVriR9v",
  "key25": "LPD3U1AMyvYwbE23kM5cus94fdff5UUGmmPskSye5oaCmCvBSHJ79XMqJc58sQ62jKnDQNUpCjj9N2aEGdapQFY",
  "key26": "4kvXCK92LsWpm6LyzavyMTHdXmaUEu2h7qY5rJQSJ4PnfoRqSoagEa5sKPwcspptizVVZnb6QcKwfut5K66HJ8Wh"
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
