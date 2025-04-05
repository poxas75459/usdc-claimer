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
    "4kUMCyPBbQAYzqm814otV8NMoYGaX91MWtAxe5cGhfpqbKPifCPtMSUPWFzmP6JHRjG3JC2VSFCNAMwxuEtFqHe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DJVDeWiM8ykkX2e5ks8Xvq3KwWFwmGZhU2EyKFVw8DfEGGCCfqdFcsKAU3hBD8meSM54X5P25jj4iGKmpVQ5PHM",
  "key1": "fcVhY4tvQmS23VxyuiX4GMu1fxQ57rN5VE2251LSoWgnVHMBcdbQckwUCE33fPQSj6baqZK9vQZZmHvPrgnNS8L",
  "key2": "swWe1QNDuMLNgxKhCaGMgsx7QazpCi6vygT33qDAbfvYhD5towfkGr5hmpMYkjzZQNgCEyaGap29D9iNUm44E1E",
  "key3": "22i6A1cQsht1T3xGcsnt6VyvPbPoPty4qNxxMQVSBnjhAesADy5CNwK3SzXWtR2N58oC3CuEtiK5uffsuYZisUwH",
  "key4": "M49rW7xutmJ65JtByVesyg273JKNouDrvzn9XquTmQyP9zXecFKxoCn8uD3t5PMEKgVVwaJ9G3rKwbVCgpELRf1",
  "key5": "55ccHGBbb38zJASD26BmDZk7DWR18XjYBBDuCxvTUqqmMcWxDNRtFyroGbzvN2RDvrTcVRG36hgM8dbhmVtsC6Tu",
  "key6": "4W4yevvZpL1QpRZVxtCCEUGxhyjX7rFy6Uoeohmrc9LeaTT2kZooyAhCHidAHLDsWnZQ2D3tMx24yPUboMQmMjLF",
  "key7": "3md9DTgHMfew74167kTJc3nMDKPd6E2RuyHQgySXDgMCx4RCYbwCrGf5g2VZoVVqrZd2TrXaPjo3AbRJ7nWDpCaS",
  "key8": "4f4rD36AAdnshpWKq5Wpc1GEmkNjsTbDAqrdy5nVzgPTQqZ6GFAZGLHRGnT5s9uYfRoS7A4wgLfXGzPTzzxu4eNJ",
  "key9": "4VdyTG1cdSAQxTx4awHWc97HTwqmFQrqA3cWjWwu8d7tJfuMwQudYKrAWHnPRqv9GbxhPkkPkC3wDA9igLP2Xu8Z",
  "key10": "48i6SR9UU2S9ZibNUg3GAbGcXQY1foaRubwMcJ5cehYHNVN95Vx3B4XnFVg4CwSdf2RofVf99DuPZobFJ7hCgYUe",
  "key11": "3VuAKBZptwARqGdjBn3Fix6gZgm7cpzQxDouyK5xiSxgxXG1taSn9RZq61LtDRWU7QLDnM7YFxWjkj4HJEXnTMVn",
  "key12": "Jqct9vmrHJaSbcyTmLyotkxLbSd11LZR5oqSJW4wgsCeW2NKZYF2HE4wsGcisEZ2Cy7EYuNeF7AEj9pD2xhQYMb",
  "key13": "5HZ3xFnC2TQEEJh2EwHZVmcBoU2XEGhEqTMhDCmNfnbsYUou2yfp1CXgHrEPEEUnu3kLQrjfcdgPFix5mGZHY7Vc",
  "key14": "4QH5cVzbYq3M9RHy2hdvtqqADEPuAoakSt7uLXApMtEyW94MNqGP8ZBfFcB2NErr63eFLD7o97v2oNffBkioLauY",
  "key15": "cigg5MTu1JCTzfXfpmCbev5aFZxubP3gonR9UPZ88XLQf8bxmiTHBhsqtjhjZn82TsG2Jv3L1fCq8J2B3DWtH5t",
  "key16": "3J7Zqo8FwMBo83RUwi8NN9FPPgTRtK6iBZWfFQNXwnxNwt5vCA2CLiU7mJBQKV7YykLQEyYeDUJ6AgFBRg3fbysP",
  "key17": "37QW9pGqWdSwraidKnfWvoX7ADgRM4MSLHA7kCPmKa6rCiva7E2zueoeMrFB24RFTnpKcNXiYT7F4Svx7xP1aVc",
  "key18": "5howYSMfGmZwKZmbvjhDPnQjUDKfn6afeeH8YTGogefLzDLabS4mFZHEuvfZBQQNLQuA8JzQaAETFqFS1JTmtz9c",
  "key19": "4bVS9QWTp8AFheeP2EkSpjVioCwJuVHLjR4Yg8JNPjH2dDxetGKdrqpuzVNBM74LspSNUHpaa3MWAFN8gMMrFXAh",
  "key20": "2bQd6dJjdNSjgtV9Ysor1epMy3btmyVEGvdmrQ8AkTDVV1HzTB1EQ6pJv4QSPjF2kJQRsQGhciyYfHqt9iat6DSW",
  "key21": "2UfzySHBLgP7pHCfqP1VKsFMyfzFttG2a9rqmigZaN5Awdzi4ETWR5q72X7BzWSigdZ3srqTF7t6qPpG7JLqz61H",
  "key22": "HyT67hEumhfpTnbnWK6mDYvb55u27VYaeQUeEajTSdwxp79AjJJ2BdWuv32EchKCRdJvZSBvvehPsX5k9Eo8XKz",
  "key23": "61yLhWdavnbtYzPU9RgZUWLUoEeN1xxRyK9beapNCQZxRp2do6v3cA8EVrvjK85aBjrSRwqswbMzyPdFFeeP4iV6",
  "key24": "3Ug7n875ss3twH6uFoHzM9tEegMjCiqe3ucB3AdyFJfEsp9UNK9Mjui7D2j7Q5EcJfjzyjuzW6wyA7G7b1tu9Ef1",
  "key25": "5j3mEw8TP4ZQdVDz4Q9CRv5SdTPndjCDixDzhrPVvJTmAo9yhzLQnomSierhZbJP2Lr1HVZ8ZM26asEsoqHUCvbD",
  "key26": "2DQDaJcY53mbX5UVXBBqJzKaWaYsgSbNJrrpo3V6GWLn3VUT11tgwnhzCjkmYhUseW5btMUQUYmNzWXCbnfR9XtG",
  "key27": "3Y3ZdACciWZsefqh4jL55d4Q1Wd9fvqh9imHCNDKe79y69gMtLtb3aMMr87RdM35mM293qs9j1nEFze6jmhFPuEd",
  "key28": "4eDKvegdjrDvPgtF4Czy9rzg4xj6pqbn8xkrGwX7Buant8Q7Qzu5L8eLZwCpU76cHnUwYa2XbTEiZVbDdvjHqpw2",
  "key29": "44jjH5T8sekaob4aaXcQG3dWikRYBmQZ99qubLTughLBEdKtf8osG3DPeaj8SmeGS3QqxHt8YBCCiZW2dxrYJxze",
  "key30": "3QDSGqY731NRyAT2fnT52TUEgFh4dNWtmVeLDWCLnsp9ZkcpeCVcWes8y9K85tsVDriqw4vkwZWztLaxWeB61pZV",
  "key31": "2WkLghUDp9QHKCSze43W26Jk5bM4Th5ArApqUvmxCSRSN6HD9M6Bpb6iju91W3iwkFqZeBCsPxKa3QheZckBhQty",
  "key32": "34HoTHhRyN859B7UBa182Xs56cF4YeZ5X3c6Yet3HWW5zNWd48wCnaUwHsbwP79LD6iPBv95sN7soQJ9QuhpLaTr",
  "key33": "5aMYJPjaVRCNTWL2kNEe1MJLg2TAcxWYGV1TcvTR2RvR7B23xcTMCYwXSuaVeAHTzex5A27pnMobmooe93Knw4vx"
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
