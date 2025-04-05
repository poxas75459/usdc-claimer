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
    "222jPv2DZWRoJxTDvqpEK57GrdLGroBPkif1BhrXXDVAqZr33tTUki3XFCE11tY2q8ccGphZv6nWZKPYzYKirjhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iAzqRcWsUVT5gVCrHHrGvsAyu6JmzccJXioSMuowZkUvTyLJUHLc8DFELBk9gBTjGEwXE5RiczvhojHQDigNkj8",
  "key1": "5xfFBt2YBoFYiWh5CjcsqYkawtJYdhFvpkQZox5a2cNJYDWw89Xdx9M57zkfx4VYM3jFgKu4pmiAbYJXMs8Ggazr",
  "key2": "Lb5YYfFpWf6aGVYr34cjmmQBXnvwQTRiFMPE7A91XZ9VtTQWPhvSfcNnfYcFqZjjdMpWq3F8v7kedDqGaP9i2bS",
  "key3": "4pjTPCKEXrmJ9omELWaTNYc71JC3XwMAXfC5BtpyusSaCTy3GfcBfDn7FXdPq3Ecrq9aMKPbmvQycL7JMRQ9nBbV",
  "key4": "3EPqMAz3iA2FzzoqSwiGEnjXxEqSzCRPGZJHcRX5iAi16LAwVyAYhbsv4ZX69BNaUz7HRtdVu1WPV2t1zvaaXeao",
  "key5": "3FgwKMosabNMFmwi3jzcaXQBPCFEEwP1CYsLCZ5scJSy992HGBKvN1d8DqASYVPhvvwy2QJztyFPeiKd6XVkytyV",
  "key6": "2Z8stm4PJQEX4ZQ1BqsA5U2Tux5xigQSgwsnk2BcuuJwDL7nCFbFVsgH1LimNSsb9JBvQuDErBiQZzFLYHrRAL4e",
  "key7": "537meAurL448mfF3YuHVebk5R8riLtZcshrzPyxs67wFXwo2zU1RM3Pt6cPck9uvNd5bdm1KA1kQ67QCGyuVdmm7",
  "key8": "2meis4tEy5adbeqo2zR49zFP9S6iZpTrvj8Dq3GfxY9nK1pmL7J8hsJCgQE1AGZTbzMtwBEvmtHTwDL2Pko2MSCh",
  "key9": "2c2m7K4BRHYef2nV1CAre8HPd1XQSR5oy9zD1QNZ5yeX8SbqJiDX8UiLEe8XvUDm722NrRg19bRx2xbTmXDv1ynd",
  "key10": "3onuqXEC9CUTMdi5iq3VMgGwzVuJXCWNj5pA2c5TdJ6iTNddibMAWkUBTNjrKjgfnk1woQtigkjJqj37qv2XUSEQ",
  "key11": "45pQRdeCxwmzvhozqSayjtLTj8S9RgtCUdB7RjVg9wgVEuBPMg8gZCYyEA3KF8AysWThtfsszos5JoomHYS9onpD",
  "key12": "2TxqqfcWkFDvukQnLnda987ixB2YmRHGVg37YUmsz2fAMmd6cQ3c8GUb1rZnVJHaR9aoyTXMEto11dEqBDNGAMzA",
  "key13": "4BXmrsZ128E9tfs8pEkxt6uiHauTBf5TWswp4MqbWhQkmpnrDFSJdsAP2zRhMt973sXKrHD4jjsWbaCHttCpMdZe",
  "key14": "2oSGNee59cb7uVfwiLtZJ7TnTkpzTZSYrY3AQqPs124JV1sFJDEQKD9gnda6Kaa3mdSsDqFqTpfdUpNp4oQ7KZm2",
  "key15": "3Ev48hpcdGFwPLgWZFNaF6boQr2LrX21DfQnRPSQSFdbzSnW3CthbPs8cHf9mNfx8pvs5bxdtfVm3S9nwHyLdio7",
  "key16": "6hq1UZiTrCXvVf2pTeyzKyLQiP9SB5Z8Gz3H6FisjD2vjQr3NCHqjb9igaaZAAGo2ojSqegPh8PUT4Af1LqyPyo",
  "key17": "4H7vGjfwF1UjqN3PVgA8s19GH1PFtQXJtzjEGL2fzfvC1DjEQhfMNMjH9ZKNUS5Ysy8mpiK6ADPnPBh69G3rLVrr",
  "key18": "5NAC7yQhHm4J5PkXFTmx8sDDMbybEuZ5KEaT4Q4nBVJLCMGZXVqUtWzjZprpzDnuYkYNGbTATY3Qj47EwM4bhbDM",
  "key19": "5VjT66asbjb9DAZ4jbYDmFZDGTSfsp2Rqd3fEmtxG16nxwmn2Hu21EYbieA71KmRfaom1HfxfHacbHz5d9HBLjG6",
  "key20": "sN9xTeNDJnBbstJkXshT6t9rtCkis3jJTMC3DsWeJKroKMu4FHTymfcYzfSViKuEo4xCi47MNPfAp4WVBaA8mF4",
  "key21": "2pbGGZvFrZoy5ribDNUQJ8hXozCjhQqwzjGdiw9ChqSUeNf5ghKUBD9ABbrXkZr91WDyHFQ27czu1RjCaD8JooFe",
  "key22": "3SWHdrHWJaxCoTCyE1qC7vtQh39hz3Kx9DsAShLA1CzVRQHuymx2kxRqyvmnJ4yyeDpbyhsBNqVepwNqkppaLWkG",
  "key23": "51Z9Ucud1y9BemDH63JqyFiN8Aj8B9zyiY9erH6EVwfp94Y9UNoD2LiGYmR4QxXWsB7sVCj28PCYUTiUUx1sBZbW",
  "key24": "2skHpbLJyuyJiGAwj1Ce7HWR9JTmdosK5iQF4ygJKwTCbFkLt7DZ4EckaaV7JZCge2Ne1YaWKgq69fMsSt4JVPxD",
  "key25": "3icLfRhmfSa9sCbGefTDxzhJqou7hLiqgkB9emYV4L9wVBASewYhGJ6oXuUGw4w8sCj33QkTz8Khe16bNW2c1XH6",
  "key26": "2yykaWVGFy1MYFPs8E7sw5PoCQN3DUzi6cJXFf47ectbBYvto7vorLKQKZZSowHrScLKgy8TK9GdkQvkmEWjUvEj",
  "key27": "2mn8BXsPVYyc2Ty7wmdFApagJNHv6d78kbYxgwCyiEcxbcQfMgYoKFTm29fmEkmSbYgZjQPvQ2kDMGsqcXNdW81W",
  "key28": "4EaQ9K7v2XMUpMxXkEmcB9wEm26MjANTd96GAwjB6obUM9FSdyVadPdQgTvr363DzEwStVLyGj6rqRhdPcCQiVy7",
  "key29": "4QyeBDtptCt9vUcHw6TFpKkePsKeY37iVKqoDEoRQKdi8KykjtDT962b6cBriRpCcdiEGHXUGW9GJukbEwD8BzEy",
  "key30": "5tKZ9EruSG2Ms7fWq758BASxzu5RXwnFUr3VatUoCZFVhdbj7VA4BDKtQkHoesKZyKDqViZFWActXq3jp5ybu51U",
  "key31": "22cUCXotkoXGJy2KhCdPUqXCazwXRzW2CBTSXBg1SFcpWPz5Y7Em6wwmG4upcbGtkkbvDxuQUXofBGDUpCZCwtE4",
  "key32": "5z84dqmG9Bzh6kRvqNTwCBiyTxLXY9g684Dyn9iu3EDf4dggXQ6NU1WxkSaw6ZJErrm7W1yp7D4sbHCe5Mttu4Gg",
  "key33": "5nT1RcnSYF19wToL3pU5wYP2fsd3N8sXConoxjoBXHkUaPBHtb95FZiaM34FY831mkkMTWi4MQG5RohfEAST6HFX",
  "key34": "MJvuojAzFevLvKQgBsFvSzLuBUWWxnPCFWJQgnS9k6CRNYbk9g8WrYJ7QetyRBXgTKRnCaqw3AhncT8gexqMvvm",
  "key35": "hVCyofxChpaxxNmUNq6cKiMnpwPtr2b6Pgy7JgKquZSwNzAHJEdgAMnWmoF6GWJ4HtyHXkL4doDaX38oVy9Xq2m",
  "key36": "2sybpyjpCs3CPwK1Exqv3vLH5xXYERgFwZhaWKaX1U4Gh2Bp5JFuZqsh2171Yo1s6tjYUHnQNs2drtK4RcauvDSf"
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
