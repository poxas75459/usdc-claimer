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
    "JdfUc3QynjCFfNeopA2xdzvD1AW3J1FhSh4b3q7D1hEhXhuweoBe83gk9SvbTRNxxqtbhwqYTHr4uHfqH8q8fGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kvGJJ6XtS8EP74ZaZjMKYJ9KeAtnRW1cF4ZV1fVYGt7paSTCbWo4Wv5mduGeyd9mRFNHxARLuptRDovUWPWC2Mh",
  "key1": "4MuBMNG8YBMFUAZzAugMSfU5qS5NZ71djGUPaGxfWzWuvVcUkZnSVds3WtRkRfuucJWK4CAE12zGQUwiGPL97BAi",
  "key2": "66REWUTp4ihGEVYAeMAYuVbiZKpL7Fow4wb8rkkPayNvDwmNJwSgMpWSzN6CFX6aZRmYPNibSxW8RwLLnVp7SsrE",
  "key3": "39hEDYNjyBXNvk3ewWMc2uZnY1WzukXscAc7GeaHDFsfKSUtNDNoSFNcTZdSEqkWZmkiQ3nkQoShH5frDakP3ViS",
  "key4": "2rPNbUC5TMRYtaCK7KQ3MTCGY4HHmhJDkpeoeMA4QC7TKHwCC6RCjmUqfXzsDo5Kw7QNWcdWDk1uLZntEYDDw11D",
  "key5": "3GQta4M8NR5Wqqs6wp1zZcSGeCkxdwXoAZZNdatE5mseeH8Y2R1bfx1rT3B2Qaab1Uu1vrZ9tuiCKP7EzepneErB",
  "key6": "47YQqfiD6xXwaaUPfKVjnRQ12eRFcXjpZ3cWETrfPRzGwwhm1oE4Eu5XQ2pNPF5mK2vEQEa5jCuBsiCdzkqMqExU",
  "key7": "2EWBLvJec1TQBvE7taWowNgadmS4HcbBFkpKoQzKaJUcXPFKgbfpbY9eVZyNURteK3HhbspS2fAys5xpFrhcGqN5",
  "key8": "458D7RySrHhXQBPA8PGbw52jkFhb9v6ae9YsULqvsieYZ4ZoNm2UGhXq8caDfgswEUoio6qyVz3Bqc1EsgY9r1RV",
  "key9": "5662jvirLeGhQd4EpDe5QyEzgN5wFdL4XEWY9LJESajVVwEdFDmT9ssGiBrA69gD37XnRoCnPwuX9rghnx3dTn7c",
  "key10": "4XjEmAhs9qdKNsbBfnuNed7rDAJ8YNHyo8UJFWgogkPu7iJekYMVp6Y65RdpPoFq4aykq9P6DoQgCmbVwGcQZHga",
  "key11": "3qNCwY9ovvwp8y6BKva2fuY3HyFwUN6ZnqKvE7gd2aZSd2em2kZSDBMDe8FzBHvkvwvHa3yVrhG5bkwWTqmqgdwD",
  "key12": "4BGqrHXivjRGFihMYwTaqzD5BrWgwgWecbHVPAXSyv5rih6kTjCwgGUqiBhBGva4vaT8NbAbK2CrQa3WDaDdKfKU",
  "key13": "N3Y4ymovieZutGtnRABnZHVDV7RgHfKoboKSW6MHefLJsridRaRNFeQY1C1BNyqmKV5MH3ndU5967hXvELxDby9",
  "key14": "fkHTdtx8uQFLxe6zkvfv2FWEeViVVUarNgv61bL7aKLLVi2Y62CL7QHrj9b1DGtvoQEUauvA8wxExkdnopud5Vj",
  "key15": "3a2BLfGYovdqobCkj6yF6weysxqJSKHnTHibnu4WxR9EBPUywm6weSMw98jEWsXNGPXhNgmsCtB5mrFXfx7NqLzX",
  "key16": "jkn4e68ghMoiG3mtquh92YDDCytWLjxf9qxgBNyZqtwqtg2DjjgjimMS79bHGc5oY17P6xDGCFhemdeqgv462Fo",
  "key17": "5MXCF2dvM5QcqBoUJPcD4T1nNdYFELy3AVEgdYbWCHGUwm4FsVg3DivzpsMJAPr1anJb3zKbHoVgykiyWCTHcbx8",
  "key18": "4adNj2aDrtMhgTTcq2XV2DWbLcGPT5i99yVSYKVmE5s4dP6vkrUFDBWwajC84k492K5ymeJwptj3fjtvvUGyf5SG",
  "key19": "4XwV2uBZ97LEgLhrkT6MEoKTcUqDUabJSx1T1ByNDhFUpmTBaMMHpUrqtDDA98AcdkVCbbPePr92RLqfeShvE2RR",
  "key20": "3LGi4JaeJj4aWsP4DDWhc84ZNTtmoYAeirsPu59GkPBX6YU1oNmqyZHHbqz9ZG4XmWXcRCJXb6p5bCPLxzH94GGa",
  "key21": "4Va8yQ6evjNJ9tY2Vy7pu4hDeHMwUjg2xjTDFmTkfEVbjjGA9Sdz6iLsYs16JC3WipxXQ4rBEJU4LhdeYUUFCjGp",
  "key22": "5byXCaac3u5psEoWhuwFzm5GJxkTAeZ4DwytB2nFjhsu9zgg8NwTTqAh3FftuZyPibWKReJx3D5d4viDmB3YJahx",
  "key23": "5yDXBzS74ErNvxxCkin5q3CMvg2cphZrwP6QUgQFbnzwFGuEsNjaJDPVxFKHJok4ZkpZ2ug7mCmo1ZyiDxxSupDC",
  "key24": "2VsqdQofS8G2NFhWp9NNP2C39xw7BLXiu6McM4MqZzzVzYWt46M4tLF4ThfJb9rwztiK1wCAcPfaRQKhYgXd8vzf",
  "key25": "4NUHJjGrDRucRrPuw2kdSoYNSKrtSfCibHoyj1oxKx434dptCbEgHKuPMRwZUMangxUm8xpC3CB8pdGuHDLm9ygG",
  "key26": "ah6hQwe1HogyfQs9AZQrv8cj23tG8LZuPzeyQmEFXjHV58DdBaUZ5YFgXok8mJPX9RrewWZrBTmMw7Y87Ravf2e",
  "key27": "5xsWJR7EG8TnsACfm1S15djn8LThuDGB8PbGKYSTNtYp6tqhNVYvig2FZQ2H7cffHLmEqDg8PnxWFFd8nsYqcMsg",
  "key28": "43yspCGye7eZc8tGm8sFkrBAHYtz8FkPJPiw9NeQm7wyxWCGQRXKAWqjrcX6XJGKP9evYwi7Z1JD1HfQxGgs1WZv",
  "key29": "5p1JfQYJsyynvJr24vnC99ksQDrNtkfAe5zKwwLqza3M71rFPbAtCda2DATPoRDFxV1j1f6A1infREjbxpniC6Jv"
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
