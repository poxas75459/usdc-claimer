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
    "5u4SnbXfAvkDd39qRz1iCGVv4VdcLXTTT4KJ2bFaGmU8qq46kwAkiHF8d8pqbaPHs9xH5vtse3HKvDzDcgXb2ZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SKKfE81kEzqmhAXyoS3U5pPZk2cgXoBTWnYdgf5EkGZ8qsrcfs3c7MtUrjD2gYHZh8JL38BTZMdZtZr7ZXK2kDj",
  "key1": "Ntuz6nkWygr782vhx5PcuGgRHsp4kuwLWyne5AcUKXZCRWBRECuWeMVLLTeYZjHVWMfQpsb9qLyDPK38tpEwm7T",
  "key2": "5F7ZWvWDVYHUWnM1UvUBDrkf6Eh42cembbDm5sHLhCoBAvZtj9Cj8EnkvAJiWdGVwVDG14A3pM9Bmytexh59tZ3b",
  "key3": "2gnRYMNSpq6Pk9W8v6xTQiRaq4XRY3x6dNEqiT4PSsWiYbu6bdxRn1MoixvEqrsQP1TbWqrZS6mNX4tTT2ZdFcuT",
  "key4": "49AUPdyYuRnLu5AmKkvsocLo2eKbadD4gRfkPzvdQT9riW7tYZ9G9f1z7SdMMf4NF8H727DHWA2Hr7AjwqHPfqB2",
  "key5": "PMZ2o9DHZNUAQcLH6ueSPw9Sj3SMcFwxfL5VQWFncgejcGZGsWbGeubhypGSXdp7BH132xyMkBgdmax2oJ4pdPT",
  "key6": "5LxqVPisgxY7yvS9HmYUpm8E1vyAnajMmGCot1eAPMHFbZi4czLfrq8UZ1ExVKRCURwtxFnyvZzqNczicyd3wCgj",
  "key7": "5DJnkVNZc7Y4fRm4cZo97QuFbxfsUBxXuFSnEsECNb826TivbebVqHDxoDUxyXKbofzdfAUCMcHtjbYvtohzPrtf",
  "key8": "5s4vCBikS78YDLd2HwxUPseNLeuLkAmk8XxeKApoesUei3o7sdPdcYnTms5MmbEkkfg7GdaJzVTkNur6JRE91Rpv",
  "key9": "5ChYgQG39UoARWRqdcxL8wFoo3xtbL1MFHbsFgEPJzqC52B6djbb7iknAt7p1P5qKRjfyLfRFyAeRWQTDV9t6Z75",
  "key10": "3AHPV5AeXueJgnfc8rsSyeAxXGnxZxCi3Mj5bPKAKTRpHP8rJvin9VhZFKudYvyXRfL92qM9ef5mjsTMXHoF8ENh",
  "key11": "3oPseSepzhNHU5VVS271BkQUb4oy4rKugE1BU29no2pkjnTwjvDT22tKKhAmjZzKk8utY6rF9gTJ5guNz6SP6z4d",
  "key12": "2UKDicqaaERt9WDRyr7HmjTwPbVP2dbshhZX2HssqMofVkmSCtVYjxtrFQ4x8EiPKLstkpVSMvZv65EsUewyE6KK",
  "key13": "4rXyGL84cUwtR1qBX9iPw1VvQ9FKGEPy9mVVqXnpdMyTYa1GvicBWsyx4FNNfqa3UpSpP1VdXw7Zk2PLUiXT8VWL",
  "key14": "4yGgXSwHQjj4GAsRJTkCVW3aJdxgVAPSGVBHMSdmXEe4hy24B23TWFreEkDTHMRT7TTCQeh1cF7NdU8Dj9A1zmPb",
  "key15": "5v6hZHN3GuVfjU8hZmrw39MKx6pSTCZrQWt5SpqUSGx537uoW3F6yk21y3Qoct1bL66KKuTAkcrC1EWyiJzUfNcN",
  "key16": "uPHeptEUbYQYzDbpC9uMzmUMfLAiRXYD5wEY8uHqxKW5zBcN6VxWncyYVsMSGre8QkWTGJzowVHd6X1guMyujtH",
  "key17": "64bnmtwHxpNTNNRFaHMTfo9wiu6HJg8QYwiksvuc35mPo7YzMQYhSZYZRpcTzjeG5GbhzQ3S4wHeKBby3NS5Jrj5",
  "key18": "4yAzNQ8uFSfSRRr5eiBZUtqENyn5RLSLsCt2iqG2ZhLuwFZKLT68inGus6dC7Gt35cWVpfeJpHAKhS5hex8K6uGP",
  "key19": "mQvRKtVTEEvY6nAz21JGFEwMQwSkNQUXdH4v7Jghhei6ECrCy8ug2abYmbNEhq6xKMnRh3BDXGrAv9CVBQCBE4B",
  "key20": "3Ek28w5SuJSHs1WicnEvFgnvyZfNrZ2oJCqkEFXLAZcbYJ37qHPVS6ticVs463sKf9xkFtxNQXY1QnHZkfkkAiWp",
  "key21": "2WtJ5i6UMgXviUBruURiYGdeGqhE6oKywPUmqyhcRLcJhyRSzgACVsHPhQWydXcw4aHQfnW9jP9UNhby6RczManm",
  "key22": "5mnzFzPsKFA591JSC5KiLSgyiYSkonx8HwNooLiDa7FGYG5omZyz9Wn2gv85mBUxBAP3CTrtJsLwFupKuQX7QuFr",
  "key23": "3DM1M3qVFdpXTSM43m7wr4Yx5dFcXMpFUk5SiZpnQUne1v8ezGfZYa9CFcaP24cr9TRHwCEG1aoyD1WA67X3mfoE",
  "key24": "3TT8NZ2LsDMhKTd3oRLZ7hX3rhnLRuoWyibi5VUgikzMuag9cAaDKPH2hj1kN18CiRNDjQKWkCtceDMZ5sMgiYEQ",
  "key25": "3RALPD6PNeFr2LJVnybxzMRvrq2UEmrTp2SJNq4AWjuQawopMChqFvGjnaT2T2B4AzpqLUQQ8UnNbLREMDmZKL4j",
  "key26": "4zebBXkf9SbzWa2CGau7wbBKciRovaigezA8rFoPq3SvLwSFawkzTaCNmDt7a8kS1T4LHn12JC2QW5ZCWPM7sYe8",
  "key27": "3Ehm58qg8km4cYSoiGa5YmrHu6rtJ7VE7vz277XNNPTToB56c7GjBJgu1dZ8fRBejSJzC81fjpjFBH23dCEWtcDx",
  "key28": "4eZNqtVrdfd4BKkQG8mgsKtoBfu77MLkoa3jVYomHrVfN9UUpeNhW2hKVKAwNTCZ9NFut64YH6Pphm3SJhHAwYPt",
  "key29": "3mubGitN7DDUT4MvbA5k2rn9fkWJuq84n5te7xYDtfE8wxFQAACeWQBu2YS9HpK9hKT8hL7tiyzZY2i9pAXifsNs",
  "key30": "zdEUjUcNL3Tz1FghBqHEkMbcGfXtpXmmjjFkDzD28ehULBRWPU5KvtvijmFKm8megkTAQqmN545t8DpcqeSp2zJ",
  "key31": "3hAPkwY1A8P2K7ZTHLjgmXyYbFw3GTvYLd9WCKcNQEASvpcjHUftjzsPeFpVTPigHtrcAkq4S9HBURvCPTaNWfZa",
  "key32": "497okddfGUoE3pZtr2YpmcYcvpg2FkMvxFNRGK8jbx7mdMXcDANbwfhnv7nv1oDB5kpTdeG3HQz1MWMicQJ2ZD3P",
  "key33": "DXobsmGcT2yNnnDWEwMVjtP5S46AMRf1KKKZP4pmGw4q9dYsYHVADsywBxURXtvZw38QyDTbfD7c4c6459f23YN",
  "key34": "2XryS7hGbymq4tjET2RYdBuvjBQ1Q7w6kSDTwf9iFBLab5XzqwbUD3eiatDityAUvqmkTmw5jvoqHLgtmB31AVWo"
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
