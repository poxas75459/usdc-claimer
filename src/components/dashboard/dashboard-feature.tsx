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
    "3iioHvwDSHC6QGPPZ931yvibJ7zrLfs1T8TgeLCYG1vbUSCWCjpERn3zLnFiaivFEezrC6kZqhvMRFgzgwHxCKmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FqVJRPd6avq4cPgb6va9YziNY6gxu48M74CcQg1sgRaRuSq5Ne5fy1yF9m3GTCeqpwXZj8qJ77AaKnH7MvtpkVD",
  "key1": "5rZJZDdFcDGVtGkAJp9qnJxCro5fPRY4CJmUk7L3bXvWzoTHZsqP8JkUKHHx6xiihPLRLR4FokFaRXdsioyjzkGT",
  "key2": "4M6xqhrAjNgZ4fv7z5y57cGmJk8CNoQa8sUBiFMJYbBMfBQ3gG2CoQdCALZyvsHjNLwkR4gwC2wnd8UwyptkR14T",
  "key3": "sU3shjihcf9am9wiybpcaVEeLrgTX3Fca2k4twZ3rgSP64ss5zpNzTbTRuj8AkCgqpwb97oHaU2jtMdyHUAiz76",
  "key4": "j15kNUmS8sn2PWTxKvayaHEXYESRPEnrzwgxQ6WdQw5u3k6b8aMs1BgDrxTCTmzgkU3foAMyubjcZWXDpFfUa7i",
  "key5": "Ap5suddgP19wYGB5Dz1AEk6G43ypk6DdzhJdSfYqSzwyw9qPmMimHy2nEuLxxaiTMzkBaqP9doSc1uh8roFtK9n",
  "key6": "5L96ejrPuD4UZmZLfrKpqjvCakYMfZ3E76xkSQUuHCyp8mDouiumzXm58cFTWD59zKYVRFEQsJMxx5CPcfUjKwQe",
  "key7": "2cJ5LarXhHof4D4AgNEiQmB6qvKUPRLghwdfjGPcdViL7LSoqg5CWsSdLSPx6ths6x8VmP6frsyPsL4fpADKbJHJ",
  "key8": "4uUjaHBguPnyvi2ivcY3kmG5XE3aQnWSCo3EMgUVH75TUKZuKVoZRUshZ7A4UeQhRPby19YiReqtgjhMKuVVpE5u",
  "key9": "k1xwsuAhkgjPiGs6Lih7HmUVgryjzZHTmHr4FJMYPa7D1gP586tUN43tKV7DAZE3xkCjK8ePF5m24hqWQ6bw3bA",
  "key10": "5S9ZASAyNR9rxMJgW5a6WmB2MXxhMAcdpruigqou3d9etauMB8REKXvB3kfDMzAdHKj744XNcpgU2ACn87VN2Mgz",
  "key11": "4p2wdFpwENRzSUMcDV2U543QEWsLiqfgBMvDmgeSKYv8BTdsQxkzZBKBk9BBxsJUbQjEAsdMnxYfJBdw5fdg4n7J",
  "key12": "2uCMwam5juXJZCGwNXUGuFKaU7QYUh4e4UFDBCXsMZTbxQurKi5CqQuMX3wVmgKGAz2HArVbKLZUcBxFPLF4nu1U",
  "key13": "2fsxaNGySAntrQMesnB36sfVeDDfmXhP2jKeGU7Q9UkYNfogok7i8u9MaR8vdQxS6YrqtRRqdi9mwSESR9Z7CLRQ",
  "key14": "4ZAXKAUizG7AX5UDSnAJGGLxjUHpgM5zsWWgwnkwQGE84FayRfqV4D7qhoJrpnCnadPMkYZTUaVbxtKE8XET5WRx",
  "key15": "tooEKFgZecAEWp1YiXqYdDS2BZ2oYm2SdgfUz9m3XcgjfaL4XkQ1EkuRVvC5K9XgCanfYuTmpnWoeUcyTsJBtoU",
  "key16": "G9ENXR8gPgyQ1ahvtLAHB4AJghDLEgq3t4qZ2qUJtYpudnRer9CMHhQZxUPXjnayjU2by1X71nJKUPDsXNn36du",
  "key17": "3EAPA3rCexy34E6YdF3dzvEqb56ckEEdvqzbEjBNjA2sT1rpHDCnEyQLjMNwwTZouUAB6aeAZMkUFFK8ukGHPQhA",
  "key18": "4xkKyTXaWQrk9KRupxr9fiJZcnpehWhmabqWudDZrKQvY5Ffb1dPxpz2cEJn8VMhi9gyhmtzi7it1yujKRHgYEt5",
  "key19": "4M3c2ypxACmaYi4MKA3H9w4mZM3nmF24eXwohs5BevcwCBWPz8J5xLnMrY769xDQBBmCgjMdcgdfDHVDPS5kivsS",
  "key20": "4Si46d45Tw9hzTmgGaKnXB3ACbHpYNPNb8TDVSqj5hFi3YGi1SNab5BmNMpPQdDAuzMpmn4RYq7EAz81xs9R93Cr",
  "key21": "3XGomtoFmtx6zunF7WEgfPtYANKcs3CRg1nkGWVB8cZwuUrZoCaVcAFyv5271FbkDM5HgSaHmAHrxZWvAXD56GF1",
  "key22": "4E35LnpWgTpwFLNBfvZbbkoQujNDzd4bsgmmE1agdirHsRPqLHy4tuL68XMbXuheXxP8Xf3qCDgouLpsbbQ7ofyz",
  "key23": "2GTWoEEEK6cbAsENtu31LbZPXcniwoKKFtjgh2wohCccsVGUy29gAiMwDJddYYnaN8RkGfuri49zjccQUzf27tiS",
  "key24": "24ZbWz3GrKunDGsitaMkEA9w4T9EE2wxRrJYkFc3msrNKByEEepSmCWCfjkWoPSmYNdMTTqDB7h8eXq3NCZFJ6oD",
  "key25": "44zXDy6S3GudWLBwW9gEm9n2iaZYHWn3Kt4NrWCMeBiUeWivw6U1XZy2Q4xsc3bnSkcT7MGuCewQvRtny2bb4Lbg"
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
