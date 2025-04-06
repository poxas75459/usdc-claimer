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
    "3JiQmJDHqGYh97QfEjrxSAPz2VKpawpMBJcPpkP92FzBV45Q2WAdrJTKZKFvUe8no9t7yXnFK23Z5R5UrdEqVguP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N5kePuwhDit4zeQGotsSLZGjjdGwbE6RHWCkz6ZKjm7kUWwg6UsMUkRhnLXsn9NbjDohMUBi9ZWYHV8JhJ9vSCW",
  "key1": "3USyvjvVsbNcQ72WwkYurAw2p7Ywd4NJGBSaLZgzHxnBuGxg5Lhr7Ujgx4hzKLCN2tHPZ4HWPTASdwAUgJ5TagjY",
  "key2": "sD4oZngZwPxoTbbFRNZSadG9CR6wDhujUkpEJaULAzvHzJsDukW6HMbaMYowujhs1VesDe2cmgvnwU5Y3H3yGzy",
  "key3": "2F3ijUv7QBiXBSu5Db1KuV8LAjSiKLvMGsXBZdZVAMTwMhd1YTLtmEyKJcKNqn3yWshjymQrBzSrjqukX1DXTNKP",
  "key4": "32To3MXSyyB7NoPTya7LcqTnCySaXuCVVCRt6QMGH1H57A7MFSjm1WomiamYu6bS2ThnzTGbdQnX7XpZfnJNLDuW",
  "key5": "4PLMzKmxRmr9V9uQRXtydp54xxbaiAh37owG9oWnuX3QgpwjWLE17CfWkyoRZXoanVJ9aUyeXVyMV5CrApPPr1Vu",
  "key6": "36FHjX4sZLyrjNVT1nAKE3LwekFzZhbucPNd1MCddQMcxip98AcbqBTgiHQKebkPNdpwDusTjRwkpNtSTQ4LkhKM",
  "key7": "2NGosNZA7xiWNjMvfz9tVm9YUscR2BU7ZbJvTWTM1yJQHcGZmWzGBUWRe1LMqBWtTRpNX6ZYRXbNNjoA3G3d894Q",
  "key8": "2mARoAkTV56JNjPFBReyCd7BMVMyS45sWgAqBSaspdmCGxxpsD4FRfuMW4XCsfo2ofp6AgcArawU8SMZG6z6HbYY",
  "key9": "4nQj9S6ADos2m645Jk6jLXMBo2dU2micJTQvadieC2oQYs8r79KRHf8fee1ACBY4Jj43PW7dAwn1bLQAs4Pc3sny",
  "key10": "4pSb6k3otpTPf8YUUByqSTRxx94SWpu6GUBWD5roUr439ZCD2GrxYqaMdM1BdZSnLA5943UQfwFiK1Uo6gkhYT3L",
  "key11": "3VsULvMbsBumqCHi4Nts5i4HDmtHsRE1uMxAkFo3R8fPK3JarPMP4zEFBTnEumtVNR5jU5WDhq5pqX6WEBMNcMci",
  "key12": "39uCcU3Gn1rtRrvWfD9VgotQ6qvTwvWVEQtbaTNH3ZwVYVVSCUR7N5TYjQkJEtiRRkLVR555ZaN2j7tyP7pkhwJS",
  "key13": "5DLQuWKebmgUBhDbXGo8YjkmJZmkZoxbT1TqpM4e1cgxyLURt4NTb599PjBunfakaeTpU27AQbwRiGQESEJVrS99",
  "key14": "2TDAZ5TqY69F6WLBzGAhVkNHMjhfyL45U88bXhqvLKw7hcU4urkAUHpP8xTvGv8Zte22ym7fAyrfq5p7JD56iyLD",
  "key15": "2psp7QDY6fBWFvXgUSr8e2zBMvMkkNpEZ2oToA4sZFRYSaiDTE5js4kVGEUa8NSa5AhkUXVtoVi9BhKTuaQXSYAC",
  "key16": "5ZSxJimg1iEbqJond7fu1d4xHs1HjctPkyGQuWKfFYJruGEjNQaiczkm9defbHeMgEaExreW84MnUjie6HWHTtHo",
  "key17": "51ALoGXazuBF2uhrZ78Qq7sPMi1Qs4hCHAXXLJRnctoN6E3wDBLGygo48Behszg5Q3o4rE9AUZ7SBzkFbhA1Fvaq",
  "key18": "2zNBR1Wmismxd49DFrGMCqY2y39SAPh9zoDfB43P2tB5JYjD8ssQHMsTh2kbHYCXdxXso3YrWmR1AeaxXJeL1Ytn",
  "key19": "MA5mYPEEPmqHwTivGQbGkfw4tpwbmP5PerbqhLgGTQXRr7Rx3oSPzCcaEbqiWdv9xXXLzrdju5BbgocztinWds6",
  "key20": "2Gc64ZmbqSJjEQ9hANSHcX5oF5AzVGyREgd11Zp48r6NqAz9N8nVKPHYjEHn6rjAztNofmENYcHRxm4V8SVXtnho",
  "key21": "64Bqx4DFJdfXYw9t1AUpsajhhtFar5LWipC8KnYCEcQp7mm5aMSTWbNtYn8xSoNr98hzmAHgtXDmB6uX5NAZg3gL",
  "key22": "66uqDFbqthZ7h2wyGsfW3RFz4kuiBKhXo6e2wCvP2YBvuWczg1gnGpJhQZcH2m23hgkWF3343TUtsSdJuTZxfkHo",
  "key23": "3XV6PuuQUbahpBNd2wWFhE77i17QC4szDwNF7Ez2BGL4Car9xrTevhxC5W11XwwgHbJUnHvGAm57QLiGQj1LWMxJ",
  "key24": "46cd5QPDboSnnihPKK2rkNJUR9VXqLtbBtChSt4hAD6pjp3YThNeh72DcGmXf8Rra3k6zFur3vespwaCTWM2kC7P",
  "key25": "5ZW4KbwUQ9DZ3w4yaLfYQEv43kviCprRN8gfYnzb3vPrJjVWTPrPd5atuqq5V1WTJE6zegSqzHd7kAcsTA3KL2ML"
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
