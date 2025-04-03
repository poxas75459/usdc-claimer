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
    "2ZvEqupnDUPS1xeCRMnXQk315JEAWjqx4HK8BjFFvyJZ4TbQuczkgYCZPXehD1kWYizEBeSKGYUQbqhftxW8bPzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iFasxk42BCU9Q9Ch3ygsQST73bbFFMPiUGQoC4Frk9rhqmaWvDF7fbUuZnzbFCwmQeVwqzGtJh1ZZG2apBX2Y9H",
  "key1": "3yz6xK46qfrXtdertbMoHMM5Kwy27ogXqnZrwWBAxVtZRocw8RrMhXRS71WVSjUZPyq9T2LiZ65UF5YW5ub3J2eS",
  "key2": "3zLgSZDacvS1V3XuJoBNEQLDMyg323zRaC9obYcbpgFQ22vzs8iD9N85HWFRpeMYaUkFfbhUAQVq7GGzVmtfZ8bQ",
  "key3": "5uBk92PxQHrcGRaqwmADp48vPwu76Ukrht54HFmbhdoziuLASCczrqWf4UUvCQpSyes16KsNHHxyH9F1xkF1hVWH",
  "key4": "2VbLC2xJ34Wcw3K7ijvfQoPyKmMtggc69fnbUyNuAZh1eTLvH1FmGn8shTCao58Y5rfSY4JyENh5ZbKuAcs3jv5U",
  "key5": "dNifSZGQSthgNi8ZHJCKEpenFpK59NboCF5ye7CbNMSoZ2iN2zfCy2zeZgXxac5YWujoPU2RmS5K2CVmqT4iSrT",
  "key6": "4X5NLaeRiUCC7CwrrpsTnBmHEf5rjZ9wRWAT1EaRkCifiDMboQAPx4jqaLrDWHXUzfPapbY3KSCSG8N1fFT9G6dg",
  "key7": "3s3qKeP79F7nxkdtB9BDq2tDGdfydmPiNUJTXjeX6HPmk5JNLijAgpGZkLSoWU4azMbNmbYwGDkz7UgaPbrLCgkh",
  "key8": "3woWJ4NSawfn8nxfS1pcvQLxzkSXXotUQnXQvA1Fo3op1FizWva3EkK4En8AbTZLN3b2qEDiTHrCCyrcVBx9GVQn",
  "key9": "2QtXead1z2hbz7jycckGdag7RySnBjvQLiZJcsEDNpLJWPAC4o5wuJYNkDtpNe88GKDSoqzXzvQP3BboMpuqtfpP",
  "key10": "2J5NQe4atKCo71XWDrwvUK5U3mjDPAMnL9X9ti43ak9sHMa9EHRHzm5Xfu2FkNYJQGo6Pb9U6BKCaWpunwXzre8f",
  "key11": "59kSc1HaN28XqmeEHbtQh5kJ2Tm6aZxgLkt5RgVmxPLUg4xFaXNomBguNveLvyincypCrvhhvuukq8MDKPBFSD29",
  "key12": "2NqxxzaRbrcMwHD9QrekgP5cUhUXWcf8HaQNDMEJmaEKkfmEfMGJz2UPgbq952jjFPAs8VhYEYSZXF11MMgcfVQn",
  "key13": "DRSYBYLHKCLXUFdgUPdsjA4drP8UHVzGmxVR6xsWmWdgJCCL5dc4WL6yvzwdUEKHhxPLqUF9D1WpXchWFY4MypL",
  "key14": "ABjDq4kC94Hgr8DH2kgBa4VKnqtqqXJS4xPn3H5K3RtGcvqXCJ698ArAjSU5fJA7NoDnhH4nDnnezU4azVCkPWv",
  "key15": "2GkSyiiDAH9jHURoQe9GMMDkzNoUCCe9MwTHfoBuAUD8vrkH86KA3YyzVDMKiCueFg8KfJvsdCagxbmVxRGdZaon",
  "key16": "3jj7Hcr7wnFwEErE5a5w6qmF4nZfbtSWFrZz9MpszjwNDsWRA2ZSLU77vMCTWVMBxNrRWCyRNNhC17ravnTRtCuk",
  "key17": "2LqZbkVGKLbEpnSb2Z2GMFMLrgFXYs4EVQDjjWXwVDqCPUJ2p3rrW5DbVEYRyWyqc5rRRF3UyfXWSpGFq8REN8BG",
  "key18": "V2vy7DmxUa4aMgE5nJkY3tm4gGhhWcURwi4YqFk1SBRMApi9mHZbtmiw8zmFetCSYNdRo2zm6TgLHahLXdhPzjh",
  "key19": "4xpdq6dHsvMyzSVVC3td9hvP5FWoskBzAAdhjYmoWvJ4LnijzJ2RyJ7qFJjdVXxjH1UugcFb6D51BYqmkVXyVPmY",
  "key20": "4PYjuNdu6eGL6uBtmrXtTHyC8mcWBHaBSuXhgyp7MHUZKKq7Gpfh7gmKbygx6J14awefbhqurr7zETwaLBMyhpN4",
  "key21": "5XTJSmnfBg77HTeJmeJZeeXTgs9QuZnwx4xFbxUianXBYvWB4xSe7TS6mZJQHUnnZ8U9AP5xbT9vSHdJUQmi7C5p",
  "key22": "32tYNLMGRWqaLNimPg4PkRtZVqfnZ4G4GHBokdCsSuELHF8kWqMjDHofNW4udrzYXVi2gqtt7cpoyhxtcuGACZNU",
  "key23": "4TcyYQa9RkyAQgGPNZzvYHZuyuAXYNcxeetUoionzHqR9sdkYd2LwDZry1g4ty5Wd9KPw5r93oyA7q2qPfacF1bv",
  "key24": "2CEsBTPni58TfS9aNYPfD6zmMHss1nKcbGghgS8XawtwKCdxHUeDkFpn2BnayERomDdFuJQFdbu3KekumaSpHTtU",
  "key25": "56bmoRqkCb5C2nt6N5XEz9fiD8N1YT3jGwrJYeS8qHApBxSNJ2SPKQsArVVWnuJMwJpeQtdyFT3QSn7Sow2Zkpap",
  "key26": "4UUaYXywUwQCQe1otx2ubLBMp6nLfWv98UqnshvtTStZCEVnkSbHx4w6w7RQWjcB8HLYPWjNei2nk9U9idiVvSJ1"
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
