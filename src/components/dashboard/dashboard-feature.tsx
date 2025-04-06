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
    "37nkd3pzEmVb321Kx8guYRZm7UPJsX6roJZasLBsHWZoZ2TVVQ6NFqRPsqUdbwJ2KjHm9CwqoCmJTVHGu2cntFT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AEcVfWNv1iVrQKPF1PugCr9EjWe5uqqWR7FHdFzL2AstciiuFq8D6EeGAUVnmVaDmW1QobaHWBMip4agStFGC4",
  "key1": "2wJdQmg9rNrYPc4mdyUGSTmtfSEqb1t6HmW7jLDUUnS4BTjw3d2ZXWmiahSCaDExBRnB4Y3HoGzU5RkLQVzADi71",
  "key2": "34aQpxHnX7PyaFxveYBCWKvwoPbBeoBMqetbh8VMkA5fEr1dLMszfbqxNriMECMnojkHwjUHs3VgunpinU4fPc8M",
  "key3": "2XKkjnezAahfAVpVEGjguzneWMLfaseCmSk5BqLmGx6brDhmDYEMQVx23Shb5uKZ7GRc7urGdTor32XVhzxVbonu",
  "key4": "41PyQ6NFX4LxhdUsmihouMUi2N2RKar1iXeV3e1NXBDjkvLJx2F7iBHAVMw4StUHBP67heafB3nrpBxVECMPfj75",
  "key5": "2HCpjiuQdiDfrS3kehzhhyGKpiWBMdpJi415qeqUq39t5j2zDqGU1gN5ejXSzj7Uup27DLWAtGV7xkmwmrTNNn8M",
  "key6": "5TzBPynDRDyYN5GAcBFh7hrHN7TDsGvGHuug2WMcJ5BZfF3MWnGHrbiGqKEePwcfjRJSji6DN5uBvosHhhgWURP5",
  "key7": "37wTwgDVNsUyViDzbSSLAm3QjL3NgcvZxZWANqXfr5i86eNgAbi8f7n6VyrY27AHcNy9gC5Hzp9xgjAiFCupZ7j1",
  "key8": "3QGh2n4fZBS2gCd64xxKmZneB7pZSdPVN7pVidbfpSCwSuh63HeD7UzMyH1WwWTuo1UPGcfHaALDAySVctD7uQ91",
  "key9": "49TKuj6o2cF49gchJU7jTgqA3hfpdpMUSm9W24qXyojwzo5S1goeRqyjdTD2aMcZaTQULLoRa2EEkSENDreRFtpV",
  "key10": "BLKkyaNZUGPyuZwNYM2AtUc6AKSGudgVr8HLgKykseA6dyN3Bc665SUnzMArZMQGsCw4H39An8h4b7Unbe47EZz",
  "key11": "3fLDYG5DXLPLousTkRmgQU7wPHQAvKStTEumYbdPyohe3EFUXBNd1V4QkrGoYNrSJ7yKLYHAsEcfbk1nQUwmpjAo",
  "key12": "4Xt9jgrEZQos9nLeXdmWQC2TBzSD5YoBFK8si1fCXNDBSvXDFJ65HyEWpiYkS6rSfex2hK1kMfHVDgXmJ7tNkc6b",
  "key13": "3Crqath2hFey7iMTgjJdMJUK6ZVHrKJZej6ZhXLJo1Z4MTDAveRo7rgFBRRFETZdXxurf11T1w3gsVtuWDsEeSEC",
  "key14": "3dUc2UFneBfqVt6sufYtsQ45xH6NhNRWn6xDg6apzJXCnjCGr2zJkdD1XwugT2hQKGbfh23TUDghzVBMBNQLzkdc",
  "key15": "5WVQp9vQWSF8muf84te94zX7dmKZbWiFDakofK7PFza9UzpDCjDWtpdACgB71zXTdmq2ysJEEc67gddXxBJK648U",
  "key16": "4uR1JhWJFBPvNcL9E3MbK6QCB9ET2NMrCCH1nBXKgZxpYmkWWURHYvtrs5v34dccYpZrCXbG98hJ4saPuaG2YhA8",
  "key17": "3m8PTGqH1PTonW8vFC2xHb91DFJ83gFPiqhgokd7V7XdG3j9WqyFLyB1cRY9N45TCPRg3HfrQTEnjyZFpAAMD3Gx",
  "key18": "47gmmENq9ms7jJhv8bmgin1idVjZkF83tC45o53twxhyxSqaKZpMECgAZKSRtvYmieQUV5mDzKQaVnCAxBpk1YaG",
  "key19": "2q2KCv7rTng4748hDy6yXgZnnMUBYvxrQqLXEvcrMTpKpyTFjdmPY8Dpbsy7dgAuxPhJg3DssqdeiVUmf7xf7Rq6",
  "key20": "2G2jGdzJ8vNWp1C3sWKBida8K1JeTXUB4htGbXziJhWH3jX7crhdV2Ei5EPBLqEu3VaSL61iFSugP2Q4rfHad2e1",
  "key21": "2PYGEUkzNe5MFmYVstpsNoDxTXEuTtYUr5QuP9mm98DK5BgapVpbBkYZXPAE548M3WmHdRYFbx1PbTCXC6kr6b8h",
  "key22": "5bZUeVwgk9xqTAWjDeJuPz22kCEp9VuCZZk7pMLH7iUWrZuaAVCWLGXE5csHCqAw84TuudJNuFkYU1tL9xKXB59",
  "key23": "4dU7e2xQomjdV4Bb3XK47TJPVek3s9WecyD8SVsCVKAvE5ZKVQxhtB2TuMFTKPMPKaL7R9461nS829rGykkUfaWH",
  "key24": "5jPNpN2zjac1MGFZkdQ627ZrS7vopaQ1pry1oihxdaqHDHhxrW9TWNr9rShvHHUb5QGpS2JvKQvdcvzg1FDkBM63",
  "key25": "5afcYJQgzkvZZwVBEhKaVithe3Dz5fTWmWj1jpoT3hBQKj35YPgTuPQ9RwvTpy7AxGosMaXu3M4bVVVmMEwQEFF1",
  "key26": "TrcownBGapT7ubuYJuv361LGdy8kko1VAtWB47FkTJs36mhqegTZpXZy5qc966d8xcrCXhNdZT9XMuQ3EeizZJZ",
  "key27": "4XV1xrZYUAWyMiYidtYgS5Y1UQfkta9q5qvtSsBTpMu68ZJewgR2T9Qtt3bBqG4Ym6UJBzUZwi9nVdDhiBqsorwX",
  "key28": "R2DhDEhpp1xtrVG1nL3LUydWfoCS9JXTC4abDJmJy7YmjjhBUfzWwooQ1awHudyc5kZh8eYkLvGyEZiBixJcvos",
  "key29": "4fmoxCuPeG68Gih7hNQT1BGEA9manUi4238HPyjVNUuiwtwy5pzybfp3ricsSE1aSvJJ84SSBQy7wethuwYEMSE4",
  "key30": "5xiMTCb6n7hTvav8XhFCKVXz3KHp5HpnPXDoWwFrv1JGBwRToSuBQyMKfKPAwyz42ueGxASCCDU3qwdYzunSK61v",
  "key31": "TFS4swraGqDh85M63qGWCd6X6SuQv2dQBQskb6wtSruYaBFbi2aJP1LHb5GpegRq4vtdFEkVFRBxsKJpJ3AuxxR",
  "key32": "ar6KUPASDTbezPRtcwbHaiB9AeiYpnNL4EvnAvaebRHA6TCDmWEu3mX8GnzACXNhNSbZfhZ1Mw5Qyht5C2rXEpi",
  "key33": "2C8KXmtHT2NJjosx7RChepJt6EGHnyczfnmzh8RsTpQWhpKRMrbnS6bPbgNDS5n2kJpfh2E3Mt4iZGVey6CXRw3R"
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
