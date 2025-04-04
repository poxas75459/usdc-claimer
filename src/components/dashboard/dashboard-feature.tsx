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
    "3r8U6pFR8CyMMwAs2AX7dybiuRAY7cqXxqeKKg1Y6ZMsarmD8gP66eKsV3M9BMkyEEy6CJXiMCVQ7AFTrAchouEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJvKwp5kXsnaqtskH8rVr6WfuHjdNw5YKdVTzk3ssENLRNqtvhPdVBr2JXWyV3VEPo4RLZYy91tzoWNMyKpRMxi",
  "key1": "Hv28zDbCjF2nt5ecwcsGXD8DX31AiRwHQJoJFSwdFfSmb2zwa1D274iCrL9Gbxz1cBB3Vdvddr7dV7hXRUVYHp7",
  "key2": "3mhDFBwXSR4GiRpA4DjnkuW5QSXzNtTrUiP7N8NeBb4r8JK5Ra2y4fVFfR1gbJvi2KoYfuC69v46M7HeZU5hGeMT",
  "key3": "3EWuLtYpVuwjREXF3krd2354ofZBby4PkjMBuHfkbXBVfHrsbbc4UNpg6YUooVegpENWEpfRTTsuZqKPXi2xCzsT",
  "key4": "4N14X2Fkm5h8ME2b5QczRQ4gHkbJxQBWJ2mVxaMH6FznsUU2v8SeS8YAn8UL28Xv7QFW33RQrR9LpAVwQyybhjsU",
  "key5": "562DQvqhGxgvCjweaLDnsmgERFRjWVnB9d321r63VHqmhCvvStqXaSsH9wKEUbNoJfSM8SbzFxFtc5f7uXTe3xrV",
  "key6": "2pzvp8HWZmuY3zdd6sGQuYxXNAuMSn2S67jr4WGoRv1ht6MfVohZ8iaguj1uyGQHHJuuXv4Zm6NdSAxhy8V6rKzd",
  "key7": "5bVRRak1HP1fjjkT3vTE29kCAcXCdGwv8GM9Yeym6u5A88kouy2EdBWQdc1QmvE5hEZjxzyQrSYxKxPtajZVkJ1v",
  "key8": "o5CEPUdiJVKRrFZ6XyktAyX68NhtB31GtYzWoriKX7ih8j8x4tyNYARAZveHJPAc6R8ZPT2tEMhaAKs6sJU8q9U",
  "key9": "45mxykJKt8sJzQHFefE1aCP3U1G1opEXiG4P26iv1t61xoEXE4Pb5oqcazeBYYu38QVKZRurNLdU783NGiW3B9gi",
  "key10": "2bqJAVdBnvfoftcJQ39fDe4n6QoQAh8zxsG6voRwNPqzE56CkAwHTcmcJpUJLW7cC3mYJYUdL6GJjqBwNrcbASab",
  "key11": "4raNYqnZRDnrpw2d86whNseEKQxQEET1ptdZTSJHB7vz8U2W7kqhjJY3vsrRN7DonQpy85TfcCtbGCPjh9B577yr",
  "key12": "4AqkpyZDg58Y9yeLfEsQSwmGoc9GQquwVZy45zorg7C61oRLnT562cPHCoMXPWbyDgkFCjUzyM9XCsuTPMAMjPYc",
  "key13": "5fuKV87anQkEvqrXGxQGDFvaKPz8MK6Kza6rVBd1daHvjGKyvkkYdQdaxy21M8TjnNtR5DJsvDYrJ9VQmpY9YF4V",
  "key14": "36MqjJAniZJCYUMAguvWccPSFnhuUCWJ7R1MvGfKbDaanGteKPNmEHHKYjmfo2bRM6toBCgFuT3mXsnQ131Dz3MP",
  "key15": "2nq2uCyLpmZHijd21ZBzK7u323GMqbRaZWHJmwDZr67RA77R6PMdWvrNSmbdGZ3grY8BKpue8sdzffb9HFQ17ViG",
  "key16": "123K9gh4YZMUKCSkYd3wFCaYeozYBV6TQAKWXcdCjDRTGsMsgftVH2A73GL4QghEt9n8GmXT25VGhzPyeU9cYAV9",
  "key17": "5YHFApz4M6xreoSbtYQ2JuqDTVnrvAFgGjjTZWDQxQXRfEZpCSWMBtTn5zoJHX48EkpG1XQHh6FkaAN4KbQY24x6",
  "key18": "5sQZ86hCMYCwZ39TgBNvcUTwNFrLmNZx77rGawrAcr3dDodWVGJ5Lnsh46mioYZ83TWRQGbCw2HW6rx4igLK9be2",
  "key19": "5VTghAgjmDyLoqz1YQAsZ1cspmanc4pcWNCgincwtbXj3cQSKHvJ2HZjRB2aKsVmVayUzkgdw3pmu7zYmSPY3Qt1",
  "key20": "3QtEqb4qqgoPPyvsACfeFURpb3a4iaC6ipZoSDpUf3DDmsFhqjd48JjMg4Y2menZDCvnSRW67i3YdyhqaSPwXSYp",
  "key21": "5VkGmt7D1V2VqJ4NtF7muLXheooAPxfDN3GW7uQ8RoScqFtpYu8URx796opyqbtVoX1Jx79XntBjX2vVD6WjF6xw",
  "key22": "2LvTXXhKkv1eNF58XDGp6LxchfubXbeNxiqr2CpUjjJjcvhQ2dwSi37ZGhGrG8mrQy3z45GkK99EVnT3jcXt6NGF",
  "key23": "2tXykLkF8rLSCoVaGb4qMK5Px8KtXjE73NfFtsMM2iJZq1Fu7CwFZE8vWYGoGoryZQof3qKickm37iPrFurQriKy",
  "key24": "2m6e9fPQnZiDTuhdd5uEKhuCyKEE2s3R1qzZixVZaAPVktn5tziZtyBEbTRG3xbwUXWYkPMHhSChCRmBCKw6jiu2",
  "key25": "4EgEEH4Bg5VFpji4QUmdTNRyDN1nWrKw2z1NQyRdnSpwVYCuWDqCcB8Gq9ohxTJmUB1FsC67eFq3ZojwiuYswucg",
  "key26": "8hEm2ShykhvnLDPHtrMez7dyJqno1EHjX51KSJPo7xd6uF2VocpHCPx4F3GUvWTVjEEiU64LJdWXz7fNLWGGvN3"
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
