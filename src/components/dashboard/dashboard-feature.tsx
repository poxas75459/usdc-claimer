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
    "4cRaSqt8dZiQduSyDmimrywu2j6Bzc7p1Mk7TeXjUBWFrXDLnpyAmD8dTXS79xrWbYzXkVFWEK5ZRbggCTaGyLMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ehAb9mR1p8Emx81kc5QWHtbW1Lh4yqeApzkuasYVbMCvpiy3BFQwpNp4M9TxfnQRr8d1jXq2J2xmr45NFrsomJQ",
  "key1": "5QAfun4VYXJRGUTnfJLs9fedBQExorrX8v6w6whP7PA6MtC99UYxAmP1aVE2M9Pm6tmu23At9VtgRRLNivBRTzar",
  "key2": "5j6cP4msanBkcG3qzYfiXcfsXmj18zGC3mtcHjrkPPo29oa7fMqsxesfXAVCFXXAt5CVz15EtLPv4tJAJc47FPYQ",
  "key3": "5fQEGcXKnj7AY21bQYDFY31YfhjFscSwWKzZJKPvVCV5fnkiAiY9hiz3Y8PaNdkLynZFJj4ceWnibNdwutRfjsWR",
  "key4": "5MXP98eKMvkF5S6FBqLbavDDagUDo5FJ9KJHPUY5xYaEZv9X8DJnV95MxytJYC2D8SR71hJJeL78drDgaP3xhcxd",
  "key5": "2r9Khb5rTFTp94r4R1BgYsNb3LgLg2LKkXtj81yj9uPxMERB7Edqo8DKhaq6m2s983h7rNY93NWnhGSGDVuVJZCM",
  "key6": "36iPmG7Kxnp8m3pGsG2e2ChQPazVzwAqzcPuuX12r7nGXkBf4XUfo7TQdWaciXUdU1gwjaU9xA38AscA6D7jDP5Y",
  "key7": "5itzgppSro6UADonbk7mnFz5z1vnZhzKi1aWPZ4m6FY9iTdoYgSmaNgHqEAXoVmUpAjQzerP6qJHreHvBJdX9WS",
  "key8": "4CkW5YrkGiUTdpgsUXAcmyCeSr5YGt7igwHpPw8Eo6LLXzG4oxE7x5DUpMRAyK8nCvC3Bgk9nqWHy3uMu4dMD8W1",
  "key9": "4HbqEq64hXBinUbT8WEKDdZgmbw394ZwE6UGJe16FPWoJzmFzMMyDqGNNWzswNHFvbmHTmPZmvSjS4RFAsjfZBMn",
  "key10": "5Y9mNuSvs66mdZJUcVoNm2nrYuRAdyqUZB6pFWtznF1kLf1h7bZGgHrbj3Ee5ccukqSjnNUuJPF2DMFXQgh8LTH",
  "key11": "3HDY5V28qKxsubEEMgTSBfChCpJV4vpQq4MrRccz8hn9svVveLJpGQMQYRRjeMEs3Zw2mAPnpCk1bqAxAhtUPyEC",
  "key12": "4MRA9MKaP33RRUgrJJWaW48JrSRfUBPim3W59GAwFeVpJagb1SMtECxWkMnqQtVGec8D1rEVYZ1rVm2ukbwhNbYZ",
  "key13": "3T4fLRwKM9pjhHry2oU3qQ3ZLrjyNc8MGTuSMHct65nNfWpnJAyRqQd6o6ubPbjmuH9NJFR7xQEjX4TtoEhdNay7",
  "key14": "5n1KajgEK7eCVbosRNBuJYZVPgzGFjjAPmfa1rBhFEUrW1YEsM1uGPaiQUSScLtv5hnA8qUSAS1yBGHQgaNP1SSz",
  "key15": "4tv4U6C1ES2kSxBdgsioJnJeacrY1vdZhEBmW2A57maFZFv4mxgoj81G5R7Abqobyu2iczxrNXtzfmVL8pxPJm5d",
  "key16": "g9siN3mwK3qHQg3MkXuHAuMwJVF5dV5oWhsnZXx1LNqFDzXGNRMNijzs8KDAZu42QZSonRRquLcDexKcMUQ5a74",
  "key17": "4KdGc4CHY1j5gmC8GMebMKFUWHPu3TMAVWSGYESVpbLbT9ZGa9hDF2ssee6u1vkgDDQ3CWXehwtMrb3ns1bnCyYZ",
  "key18": "4rQaAbxwrrs1BVih6q3KJJPqHTaRBuXAuxEE5ToaxaWbz8hjByz6evPoK2MsPxZi6LS3KMBDpKPPJKewEyhqUgXP",
  "key19": "3Gaj63K3swsfZHHHyfk8b8yvAGN2JU8gYk55f94DfSxjUeeLFAiwdAHptwW7hgAUs4Ls3roPuGMbMtjaLr6cfnMK",
  "key20": "33mrYk13E6dMxHTaEWPfLszrFS1YmhbKEoB7y6AHQDmGsxyzdHNUNinwZZ9VFTW3Atqh6JyUkAmmqMWzM6im2Man",
  "key21": "ep8RGvSeLmtt6GETYPuWisQvwXcvPZtmGpZXrQyv3Bmz6C9ZuHcS3FD26y5KDFXBFNe2WmuaTwvW8WgKr8F1rbt",
  "key22": "PZcJhKoTmFmxG2WyXwUek68F2Q3vPysjde9MZsZciHeNvpjoNFHeBBQ8qRCuvKH9kkMZPP9X71i5u2YNMkVGHBa",
  "key23": "3ZKmMx8m7nZKmfbJHR8an3uQkfwrALTKHRzoNuFnyGff49LJyeFwiQR3eopWSoiUfyjoMH1qmX1x2pYEXxqsbAq9",
  "key24": "5B9L6f8bC2MFjQeEJHvaYYPYkWdJMJmEfpgqGPw9xaHeDxam6Y4PtMPqCwKM3XDDB7v56V2KipAG7VbgZ5Sunfc9"
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
