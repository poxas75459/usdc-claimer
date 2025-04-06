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
    "5NYBTfGhajxStVYJSNSboMYTdtmzVFSiWWNqGjBhRf7afrcZuU35B4dkGYenHyRtbhdpqerWiozL1pwqyv4mAXd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MiMnf1U7Sd8XPqbkQtjsWp7KjVNgruUrg9PpMm6kA4yG2aEnVxCxMFEwCoAjThRopeMy7bGb6FDaJk8nb9Wyow3",
  "key1": "tWvpFLwe2HJSZo2EBCJDPBa9HvCRhnajwuhrz9qcHdKcW7yjBqEi2axY2FYksJBMnxVmtN6zWivXU6DBDH5WRWq",
  "key2": "5cNoc4Zi5uBfdzoq7FHZDJC8z8VFejftqxR1secFozTafgQ2zqL2DCELbXq3VaMzXV4eWJd3PbAuQhxuAFwhx7up",
  "key3": "2eF4st5CEBf5S9AgzR2HQzmjpaGji2yF6oxybb1oHVQYgTHeeWNP9Eei79Qsvc66D9ybBAgg85ausm1ZpZVT6egF",
  "key4": "3YaRtuuQYskxNGa9vrVLBckbbGLxEpvn7fP9pShp6mthJsnaV3ezYVTdWS7b46kf8Hqh1GoNgbMuNtfHCbFeqzQ1",
  "key5": "xQfEH2LxuCMu45SsRHCPv7FzFVHHaSageXKtJ5za6sgAUju6j7S9hNpJMWL1UB2uofDTcAoGXEigWbQgJfQ7Qgb",
  "key6": "4z5AsgbgRuheSfDuabHxdTiPj3E9jCmcj2FdRuMA87tLJmFzjskc8hMCzaDBsUJ4LXzznGMf82R9f2DJ4ZSHp5Vv",
  "key7": "4DhqJxQYMSXUPYpisnBAbvDGHxr5jYEtkkj6U2utiVVPdkyXnsSzy84RQGmqxRQtRTiZqvPABnZBkJF9BKpXarjb",
  "key8": "5nadowJEzyBidNGzyTjjidB2kQdQ8EQCbJb5vY3eizFfttjZGb2KG9jbwJutDFSBug96J2r91SUCXdFdxnbXpNnw",
  "key9": "32MpJF9P5fiDecj4yiTusMMnSyPKjAi2HyYJtzn4quBsrYzakXJdSy2SpnZUujx6hU3fCW7MEPfYtBQyfeE3sTZs",
  "key10": "4A5x6cqJVAv2PagKuLkgohFsETiX6tHw8goYuuUhygMJMBMXWFRgSfk9qFd8SPDFAzgxhwcnEyooP3tCz7Ve2awv",
  "key11": "3JAQf6xupaL6gMX6wRTPnuwiWZ87KbxCXUHvEE1JTNWxyiMbSTqbHQfxamtb6texPhQwzwbFMHcJEyWGXkwA8iDv",
  "key12": "3Hp7hPW57gDzEbSLYrPUYz8EFnLeoaj2a44NEqNbcmyvJsgvwZXzfVQhbw6XqJA1XPnCG6M1FndkUwjoyqn7fih1",
  "key13": "CUWQFbJm3QUhD4BcwykSLAc69L1tTydeCAgkiQMwuTcqTWdyAf2K9KsD3q9zT5sUqc47UaRgpHqAt6imZ1j4oBX",
  "key14": "EGJwcXyDZYHKZiSsu2XJP1TThhPHgYVP6E6QeEbu2LkC3ENCGY9TVWUsAhkdhjGj648CWWfSXedRPWBPevMEqRz",
  "key15": "S5thHfPEK1Fg6n2P2VejpyFLEWmrdMH9CBTBr2JtSSz1X8AUReF8ioTQggqKfE7vvkjhNhQTZ9YK6Edc9bZMSnf",
  "key16": "3MmBNXtKKKxQudMs7ZAx1s1UA2MsFSCopHvDdeDwJj2BnEU8T53ShL2K3mBrfWGvFbdNnmRUSfcVTm6QxvPQCJs3",
  "key17": "4ozg8rD8uzn6M5oypdhebQkLDjokg6DHNAWA7RLy3TBaqxsWMJ7CdykunEP1cFkeafsp19kMwBeCyYhtpnuetBfr",
  "key18": "29HjRK3oVuR96RbXrDYvXJkRCZ6RHoWMZSkmTdbXMQbrEusybFDjyjDzUdcPWb1FpcDDxPVRbNAq4N3jkhzfHLtG",
  "key19": "53QsfHphWxwfydPQmjyjopQ1mVcwhy61bF6ioUUf4jTpbbW7LDdMxCiDkdvoGVzdebd7mnuwhfa567E3sxBEAJUQ",
  "key20": "4w1UqUPUwYoN5xRTxU9N8odCimBDpE43wBGLmXPZ8MmNYydmb1U8RqZnGDyjrhFFXqAJJYTrgUWjWPkABiSSABxZ",
  "key21": "2jWjmKXGG1vQpaSF1LuX5PjNci5cAkfPAVHDiwsZKifr5qcUgydq84ZZfQGgPkEvRLqAeeCpR9Rt4RuXMD5x3fVS",
  "key22": "3rXgYL5VAk6MwgpmuRSd3KTvQS1BFka5HVNWNZtAq7j4QruEGGeLxyN6Ah2P1fKoYh1YQngvpCabfVVULnPYAaMW",
  "key23": "bypTxreKE4kLfRY8iUMtvCfa3Vr2E2PuVRvS2MJMBX6Pp5HFBiHabZiB4DseYqHCr45gPw3pzagD7EqUL9kyxRj",
  "key24": "5xUgE7bXxgLaNXL6xzvmjM4BZ8Y9Da9RF4ALRFz3jyh1dyW3gEVF8YamUPCDTbpf5GHXu6f3M5Mzhfd9aK9sPLoU",
  "key25": "2SWpeMfss3kWijExXcyP7bFCbktPj6cRiep94GJVHmQypwb53G14JvfgMX1tnQrS1uywwZEn6LsaY9qPa5vKERxa",
  "key26": "8wtfKFCX4prZQkGiYbyJvschhueuaoogRa8hdhJGBU1kp7FqgoowjFeB2QyWMGFMc9sy2LjUW2PD8HwU4thd7yi",
  "key27": "4Bgv3x55yMTuiJW9WW3SMbA4gReQqvZH9Q8L5jWurGhbimr146tDAT8PudLVgEtyGDdidpxMoQDHZdjdHnCLxFG3",
  "key28": "2j2BZbgvtqzrFwFxCxYwWcEqPkZcVLhQBGwicxVBaxjMC3dCB3dA7o51EPNgnDy4543DYXvhaHELd3ryPvF79nhG",
  "key29": "5DkxD6th4hht9XbquAkDnviZkUUVRtmis5cqrYp8kQyEJPLhFc4WCK7sjeCLGbayJb5SWFbw3LvFF4X1JzEN3JXN"
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
