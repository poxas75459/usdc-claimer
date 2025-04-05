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
    "38kw15ExxP8CzXrMyJhjXpXisrB53YAbd9kAefe6SgUQLVoUuVuFSdDod4k8PVX35nmTT4EAptr4dt5bAbqA5muE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UudQuY5dP34EGpsDLJseK5VEzkKn4Q4iFRWHVDNzuj5CV1U144VJEy58V9hcaw2F5FfZvgcJ2hYjTbdUPNC7j2p",
  "key1": "3ioamvfDsqU5WBUorWZPHYH92nv8VbdYs3ZgkfsU21vX2ebgdwHMjwLcNGifBHVc29Gi5wAG87V9v6KXoQAdp7Jn",
  "key2": "43z79nHyBKugAaTEByrp789SFA7wGZwmeq2RZgwySK6K3n7dmMFMbeZpDfmX65oYrjQvkipzPmTRKmEjR8YWhHM5",
  "key3": "5a9SCcXWmK3ZYtEADW2T3ghXUgw3broJzF9Wa3RR1afvhBZBiWs6hTXVt5ZiTo4fPoefxRnfE4ea9KYC222dZsnD",
  "key4": "3PSfvwDSGAxtYUqmDg6MKbqKQsoEELiy9RPmJfP1WLiFkSJU7Ch21A3fSVaeYjvjFX9tcSu873xt8BK6WLr2qoG6",
  "key5": "5C6Yar71SZiLhduqup75A6dxauhpbBVukj9nzy2ArTHW4zQMCL2qXqdD5iksFsoDBPqwpaHWUQBq3aFjHjx8csqB",
  "key6": "SiDn354JdwXRQ21S4kZmt7RSCXZSyYNPEg2f4ysakozCZTypuYb6eBbUaPujhhHgmd3AQxxatAFbmWatpSzVVjx",
  "key7": "5prs7E8fsDg9ncJbvihTBdWSZqUq9S2iFgXwNrcEqac6jQmmagyw9ZgsisANmHVWFAxFZXJug9B2rYmHTqEpzUdo",
  "key8": "NciLs11LmyJ9MGut9tPtP17upYTjG3BBGs4mx7JhnnfoLB6L8RDo2G5RGU4x4uccyRjmVyd7e7bBtpFuC9PDNKR",
  "key9": "LipjDu4qZeRLE2zhWr8xMro9NthcMGmqDyfTHx5kydXoFrQtkff88dWbPK56XSeCtRuJUhPVapjCjfCNFRUqVfe",
  "key10": "ska1By7UUvQpARKSLY1KtEAnTov7JrTg8KatNt15jDJ1LZ7N8qHASMkGXaL7TiRt8hZ8f64iuae1kTtZnitW4C7",
  "key11": "2SGJ6cFwpKXAKmPGEQvdhhffbeW6DrucvfVp9gJEypcXQmJM8sD4icbZM7M6bbjdRw6v2rinEF8NcuPPTESKuUeb",
  "key12": "5N1bfbg8SQL46rSdVfV7BZJyr8KbJn8QiYBD3VoK9RGaBX4dcfXeDxK57KcKyboDGc1fE8ds8YEYaZbPsubYbtyV",
  "key13": "2oDPCArk4HFcQTG7VwHVocBN2aXBxtSVj9uf2F9CPmqwi9dke18nrrH4GHdHVnQ1pc8W66oFHsRgd8dpzLn4gj32",
  "key14": "64ZCaKHNJS1DhtSzfeiNg12jVGpNAsKfseS5WAzHWABy5Pn1MeBumTKxxusGe8Vg8dM3NoAvvEPemwhhzmy3C18B",
  "key15": "4oND28WpkXBNaA281mriRCgUiqs3uRwVwLcy2sXe16PYZYdCZNQVnc1hYkBTxi6nhpUpdsqjyqTG48ppawYjMHbZ",
  "key16": "xZV5bGG7MMYk1BBPihFKx9ZvkCB6ymd9wuhMyShVM5oN2fhbxjQ1D1eAB81DnSQcbCzavhChmWePgyYrBrqsNv4",
  "key17": "5MkL4Wu3GepYWFC1PXJe2EZgUP4FM4BojLawFWajT39vGANviqtFjQU2R5zGLqY8ibWAsAPMUQCgiCXT7YEvAbkV",
  "key18": "5CebJ6DWCHtBaNKqwiZTtTRNbBYB5CyaQr6kv32fmxq2qoNKwaRd5V8kkooengWDFLxQzCCqLg9YtDDwGUxikmqi",
  "key19": "4TUCJdtG74kVdSNMXLBd2VRQk8ajeSZxnh4LDhTPRv1AHS1w28Ki2c6r1gs8YokojrqaUzWN6TYdBfHLaLDoCD2k",
  "key20": "19Rh6gRbdc9m8ALHHqouW1AcrBxtZSWtj8oXRZM4ThFXpdgKKYZZSmJTevUfzyLEkigijZ6CKhV2HRAT3Ro7dZW",
  "key21": "5w4h7V5Xd8CsZY5foHv7FBMe5h61mEoi4BWyXRTTrc9agyoJoXbKyUgiFLwk2GgjAn76ueqjQ5QefahWDLzFAfom",
  "key22": "bLA6Psa4odVaTDPxBfYsBkBjPuDt8JreDc4QqZ2g3po5AbJDfGqkhWN4paBhzNWpU4DtFbU8hwxpgmai6vgtWZC",
  "key23": "PhQzAZyRTcxHomv2H2YtYWBHhANdKZStbQB7HUAvemS8MyhGuNtF5v1GP76uNDKncshP8tqw34F4kcHkzMcdWLC",
  "key24": "59YJmhcB666Ny6HTQqE4ZWLg8YT3g659Pok7ccuZpzYuXvRUUtc1MCTc31aovrFHMtfmiUZT8JcFS6aM89v2WEnn",
  "key25": "jTQBcYamXuZcc2t9SqLn2CuiN8JDK7PzcAYn5BN6K7sjSJPidGGqJZwVmoHBndG7eDpR7fx2jX8jkDukfKdAS4P"
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
