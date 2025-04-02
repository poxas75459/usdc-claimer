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
    "fZWBaug9CorP6TWGHsCsMzY18jEKYRvs5ihB1Dw5yDsci4KWn2XP5bfht9tEF3ik1Jz4LC1JJfnJipfa1hwGuCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqs8sNvDrBhgGcyf3HiKW4MWwxgbRpAwTnZfEvjw8YbCPEmg3uJ4XQXYo8WrAmV8YihXPTe2irErAYTAgi2kTLc",
  "key1": "4XzCBAc2C5cMpGf8g4ZiJDvNra2DYaGC2zZHBDRmaEK3VBfTgNKPEyUTxSLPTA3Na1JU9dq31BtD3sFXwmegzPfe",
  "key2": "4tikkzhxuWoFA1USksiyBzUi3QPfEZU4rnwJBjvZihNYzTvbU9JbkbURAc1YWXedxcC2ixVRnCPYBGEG1qFqwf6Z",
  "key3": "3ZQMDc7hAxjThHpMxqbxgyCpXERmtNM8qunne99FUxDWFWEAzvEmksNQs64yJfWKJP8XvyC9o8EZeJ1RbmQKjvLB",
  "key4": "2xo4u911uzyxev5mhTKPRuuukNBk1SB8GfGf9zj8TTTCwmy4UswpXCcekp9xMEzkBTMkeSR8F5kv9t1RgnGbmTVx",
  "key5": "4QtJLZPH8sk3rsQVy1QRWG6f6HEn65JpNnVxounmRJztdFwJRjmoQV7LeLELPpRtbjFGTr3fRC6nhFs1sQDDqu4Q",
  "key6": "4n3NBBFh3MirauHwTQeqjbJfzLNVikKtpMpy7vqfUZmuxmnc73ZpKQfwNXoiigAmzzKpyKayNTJ38ZYu3cxjF4zW",
  "key7": "2JcDSz8nT4souk931AnsPjbJtS6GQ8hRAC1C7fQnWNYx5Qa6tPBGcefGgngzQeb7P1rq4AmgVehGVszYWZQf63V5",
  "key8": "4Xdp5AwS3SBs1vdrBRAcgigu1pTH8DnBmJPq3uS2tvFiKtBYZ6EXSerFdDL42V3SS99ujchXDHr2aG6sC96JJ8iK",
  "key9": "4LDtSUPUh3p2w18gkJ5hTkh3TQxx8bqmjsPYH2D5Wc1egUnXL7kuPGUcDEG7wXcoZCGw3UxYp5HDVEjbUfPAzhXy",
  "key10": "4CQmhPzqFF87SfzmGZct62XWW7jTUBuhQX6KkqSmRSGF7o1H4jfGbVE9cyZSArk94BwbVb7W7WWp1QJiWjnHQoKW",
  "key11": "5TJRZnzcCoNnCEikkKMZgBWdTiT3byCsjA24jtR1zr8GgQhdBXicc3oEgaoW5caoAf3rukoZu3argSGsawzZXpBT",
  "key12": "3ZpDxhuLrWfh525N5xdM7GnMPpwdJNbeR3DnBwMS5cyzxWZ7CtN5tP1CgDcgBdsqbfzTpWePyiWEqKyHWPC4aySC",
  "key13": "nLzytZAuUVWCvsUbLh4erg2b3asdVG3cXe6CrxswWsoG6WQe1pfzKC4g6DqitwtbfJTGVTAFaCFa5yo3mNsch8V",
  "key14": "2X5GYcjThoz61LBBFPseEB7TUHJL5sK8a5WTszgwdyGUEydP15VDyEjTUDxS7NuD6esJuspD4ZCyasXvCHiDp4p",
  "key15": "F1A8JrzuFRz1T1F8HEV3kMZfL7rtFqcsf9pX4T5NkweEKmF9gMajpQtmSzpgefL7p7deWrFLfTwEh7WvFNQZHF5",
  "key16": "4UgrgFkFjU2FtmgWvAvfVbY4Hc1enVYDqPtiortbLLiJKYH5A7NkMKes4s3tH7hnNjyHYbZh2KNcSbCQCqaExohA",
  "key17": "3Wtj82NPqJ1YNV24GCKTomQh8GuUtuBtShTbaX9cj8ALRbRSznP82whJ8NX9EhyEvg3hrFuj5rdqbYJmMsy7fxN7",
  "key18": "5Ziej2BfjfMvd7KjVW4Tw6t9pxwzUcpfA1o1bSAjgQHDPkL6DoMBUwFEgb1AUPhYi9LpviKpKBkiz32tE68Fg5Gf",
  "key19": "5E9Ds74LmVNZYXPiCfvs4f999hLa2cSoZw2jJTLynNttrKxv4Ya4DVJwh3zqNNkx4FpPBe5DeF5vjdYEj3P82F7x",
  "key20": "4ACMAvWqzkUTmhzaXMHe3Fo3pKLFXJTicjyM7xqL5hzk8kpuuoNyKNz22ctJ1i41YnkgpoTupA5qSry7Gw6aWNWV",
  "key21": "4NxKMGhQzP8DCH81sEkeyUVPLqfeTb8pUfcwyYiiaA6gAc3vxKoiQXjGesLmhJFXcv6GH8TixVrnTcxNF3MuaMLH",
  "key22": "2YRD86JR4Aj3Miuhv42GngnyGvCKbyMopDWpS8hRdXZEuegGgJEyCzDwcPnauPNDbG5FcnVM1hsF92MZ9BXZhtnB",
  "key23": "5hoXFAudkac7e3Vb7NRs6PCwpdFgVh6QgMJ94y4D4zQNWrLzTaQepGcYKQiBtFYagardCHp6DrXt64ZKdGmJCn2t",
  "key24": "3e3Jp1nHTknS5hjwQLtzMRgDV8tT17EWsZJ32wdbyq9YwEG8SjBnEGDiSRfeB6kAsWyUFRo3e5c2hYE3YNeHRWyP",
  "key25": "3LHwMyQnJBPyAApnXFUunaCxpbi1wcmNhhZdnLJpexLs4iVhBPmZYzYm4zfPXx5B4zRTEcsSsKveQi2Er8q7ehez"
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
