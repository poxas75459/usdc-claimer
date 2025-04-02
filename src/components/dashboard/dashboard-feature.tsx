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
    "S2PZKDWFHpR4hyJcjpye9LY8ubuhSaw8GkASrhcuqRsn2hadKRKYWxCDEoZa4d6kzMPbWnvNvUXfQx2uq3buZAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4264UUs5H2hhEz4UW2s2gQyrNEZ6fgPRn3SkA7PdzW7JamejcvFdsXzaW4dhhaQVABWJBRQXZxKqTP1PWJSX7Edr",
  "key1": "7LLA35xi8ogWq1uhNETKZG4WFtJ9exsP82tzKmphtJsdxJ5JSPCcHPxxQ9viEUdL9iMCZXd5LKcnPnyUAXy9hsz",
  "key2": "3pVucUCcH78rrievY62qjsvypk7PVgeDRNQabrqyWiD4e1qoCphassYhJGGWGDBHbo2DheP7PgyVFbtKrrbXF9nQ",
  "key3": "4YK5QKaDUPbXmarp7JebdzJQsngrtxjaXtuo3Uc2asEAfJhAxHSdKvGhtgWVsRQ154mWXW8UqxNoV7knbMnydwup",
  "key4": "4Wd6hdG7XTw1aNDfoku6St1xJZ8QJ2UNLPUBHEyyMmyvST8WQrxE5h98vJfdD5X2qqZqsk2StE49AgmfLgrMssnL",
  "key5": "2vyDXpQGY4R7onyjzcfMdor4VwH5PaagECgYrA9Mt74mu3J5YgJDA1Lccb98dDjkNWwaB4iSxaBhg7EmX2buhZrB",
  "key6": "4PZ8cGqCtcRj7druw4oEwVambiHEcSLCqtaaAB2gQeR2CcRq8Qa9dfuPkJ2Aqd7VEEtnJfZ1feN1QmhkmK4NmfJ8",
  "key7": "2CBSmzgMJCcAEub1sHdv4bSH2x89Sx4PdMBsVhpUpz2HkA5gSjfie3h9vdmPsx5iN7ghunkLGYs4JRBChN6JtwXK",
  "key8": "63LLEsHPHFDdDzv33n4NQThSXMjstUASafiP4VsZm48sBkP4eH5pMSnNJQMTEuHF2fXYLc8SpYgykR12GQyzEPwR",
  "key9": "GZ9SzpmbE1iTvFy81FgXh3wJGaRggA89X1K8YDnAKizAap1DDKyZjUzqpBNVo1pw8JFXC25VjCBdZDHwwAMJZNN",
  "key10": "Uw3JyLv9iiUB3o6qCeFH3EnnNiC1D2E8eEwQvxyx2piAHHmMCywzToqnZEBoN1GFBTpZZgHyn1EfHw7CdCid9PW",
  "key11": "4HmB5kEnTA9VX8uLLPvbzg28KuEscH8ZCUyCkhbV1Rn2M48Y59WPEMJAAd3YQnXPdu844ZnVUYriH1uTzE6pyQDj",
  "key12": "3CRWnnpHsmUZ6BxYDpbHtuahbtPhPWJqMhwMPga2VG5DZagaqejHzxbv9zhzwAYysoDk5ZoK1XgHZiD1LTBCCt7m",
  "key13": "5FmXTtcPUo6jJD2MNVzXTtRdEC6XQa2WuJ1u4LgaoEB7Pc7hRYapn1FmwgP4MzVNkseCtEJNqktod2oLokix5Uhs",
  "key14": "4GobS6dhLWw2fziCxURJ6sXmjziVCk2RAJyrWePzMYjAEtxwk2mxVgmoKr9WqLDnwj6wARqVcKYiXDjKNVBHY5tq",
  "key15": "4xqp5nsuV3PX3iVij7KgDmKERGSJHLYfznbRD9U55HngqtS7wsUqpGibCdPcDxZGSjJGqFJiMaUBaQcZM3sE1MzJ",
  "key16": "4YPzVGikDBNePaXWZPkL79jNU6xvZ7CcGAaU76Zz6qrpVY9qP3oCwMifg28cpGkje6RMfGNpHNvuhT26A6he3KKd",
  "key17": "3Pa7yethA9AEE3Qk1NVJt211xNsMLtfEtsUbD7oofgHbQsVgMXA613XC9Z1E6y28rEVQCDPq3u8ASVqbMNvg87B9",
  "key18": "2fftJewR9gj3QGv9aA2in96E8EgFta9fcbvKxmvWVDZoRxfVWhNr2AjnrRKrwTBjDsypcXwcGdf394hzuQbvsT4h",
  "key19": "Mvc4us6VAGdG7nsYRdJUKYXCuM3FGRhAgwr6EGVHRLyiPLExKeDRs3uBXFHMFqyYVDn3ffSyoN9S9X1NjwVmJXu",
  "key20": "4UHaiStQweLNLF4aqqUz6ARznpjCLPv8iH6SUmMQ7SKocd3wiKEdzdzURtbyzEXBwsddCncCRYw3nAHZ2ZvWBnPo",
  "key21": "4KY1cSfE5Ng6gxeowaTQbpy8jdAWwZeCQW7KCT38NJwdXNWEei76oT59NwdoSyizFDhTmm2EAeXKcDzBDnvuaL39",
  "key22": "zvpicaV2MoUFmzg8vmbr4zyh8sMvXtinH3xywqFuw657qeSYbYjcngQJh7HESyxHTCKWS3GBcMFiZYMn4CJrBSK",
  "key23": "3Po7a7DCvsUHqvyk49bnd25XtWJ9g4dqNRWtdtQ6ktqrWEf6cvogn86VMucEiAeHcPS6gWZ9fqkjHaddiMHZXazJ",
  "key24": "bRsQSMjdm48fjjovXkcGdRR5Zqya3KGRdRLG4Uh6WshJF259SuzuxsPoH66rgW8u335x2izyDvMWHaBhnXXNpKa",
  "key25": "2HRgwTWPGV7AFVkrZ8vBTUyJVYAiQxevnfPJZim4Ws5qtLaYBBEVxDpP8Re4bem7kWKNAG6qBJa2KRcWVA4vMW7r",
  "key26": "wuTmej6q7XktFPxt9ED88reAKUqWrbF5vMXwfj6F2vtxdS7zruoXHWG4DCQVvA6wWWVfGhfuPnKbYW7tj7SqBR5",
  "key27": "3FHU8253RNroySMMe5u3k2aQx9VNcwX5EFwCdx8vuYiJQZNjie8j2EkAAAwX7CS7vUc8eGLPVi1V5CSjSh4pNSYE",
  "key28": "2vJYvmz9RKeEXcjBCa2tQ1xYNE3tNbcUSs5fWX9wSD5f1GoBcPYg2JkjVMML2FXZRXggQtMfCAcXH7LZtq4b5iuZ",
  "key29": "5yiWsUB135zKyqkPc47HTkWd5cUcepB2rUJnLCMmapthtYw3WbjYSzsmMPYLpSwthaVXXCLt9DAyFPNbxTWTF4d6",
  "key30": "2DLwcGJL1yJE3gMAyWm35D42435ERpfc1n9aW7SvesgfKXU5JcS1VRierMwnsWFZEJg8Zw2HCEt8kTNGXATtbWnu",
  "key31": "3GbFwB4k3dud1pHRbUSYaWyoH3cdM5dVXDGuuME34niXAb2SZeXzpJegwubFSzqwnXgBg6gsm7ohSQ8GkV7dteHf",
  "key32": "4GfDERrRzmvWTNBLXk61qnRphbaBTavoqk7tedwBaXMrszVXZZ7rUgYBXnRCffZ63Y1nx9qnV7iYWJLVsCKKeWZo",
  "key33": "59D3nxcaPaVs4x1n9eYLWZZFUDabWhSxg8SRZ82wF6XMEw48ud6u4B6uN1VoZWpwKEu4XDit34o1kKMw7vLhoexE",
  "key34": "3D4PQzTTZ8fYSRCh9QBpyxiGevBPBSS7YLGBTUvzTHZrHTz2qe1UrgcYMR3YreP6QUPq3TjTN7FMBxUVMGPp3E8P"
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
