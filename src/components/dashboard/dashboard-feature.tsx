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
    "5GaKH2VM9WLTDKPJwrUXNvgJZXA3VkmNbxrjwGeRLycVmeCVV2JnRzApH8HBGb9kEzfEzfKMkifmJ5UGHf6UEtAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nuXWgj8wMzMGW1EGbRZpKUeG5DyBKzkuZgihnRZ1mU71meAiKtvww3YVYZR7a2J1YfonvbgTo7dMrUQCmaUKzzX",
  "key1": "BFZa9wNiDQwZDPLJAYafWjhoXuARnZKa1PyWNtVwgF36MGT851XxC2Ap4mnwLzU2tKbpYWr6yxPqBt3vKMTfQgM",
  "key2": "4tiBnpshRbzVXejh81QC4BmqT35rKgQRWCULG4mPVKyfZCrL9xdER18HVpvkYvAdystpUbLM3Rr27xg8rJw7MiC3",
  "key3": "5vAc6TApahrgKAWvC1K9375X7z4YzudVMw7M5Ly4vNYpRWVTR4Pjnej7kdxW8A8XqeaiVjNawtvbirSVu2Ke21hE",
  "key4": "3rqDxXGHwaJFXQ4pa3BtAX53d6TygsbVQWyfWTozJCge21iCEKhfFif4sqSDAPT6dJPhZxSqAAp3kUY9766MZnXt",
  "key5": "3J2PdQhiwdxfuksbZfaVLGrNti5RqpNjx5BXzPL8Jah1Z712pcV7DiTYnMKkY9h9BVefCRNzCN45pnUi3sFMvscg",
  "key6": "4j7q3JLh7pc7VxLfyC8gFrmC9dLDRF9Y7RZqVVkWU14PLZS5bUSTFRRYsHtWhZz53zVZtMkoYrDo667i2PHXqjxZ",
  "key7": "GHWqryNzk2hrC4TvPBUXnUbuALxBaR8EXUmPETtFrQAjbLC5fHB4dtjrWGeQ7PJfREegTmnmT7pVQc9HcQk7iNa",
  "key8": "23GBKhuKCAwoeysuDqcWieauodhH5DjYKNBSYXgV8hQweNnY4VuTeopmsE5enNMePBoFgFhxmtPW7Em8LsvRagPC",
  "key9": "3736Q1pwdMcqex1fs5SCr4exf7242tJD3KzcYrKvzAxAMYMZ16pjbnvfY3qx5YKE5xNE241cMkWnN59ofbkzcdde",
  "key10": "5Vzm2UskxujDrQ97Rze9RHwcEbqdj9D3f14KZLmCqsbyQmRA2PGxxGwkjEoW7Rc3RGWFWVsZ5xEwAjuztNQnYUH6",
  "key11": "5Yac8PHNdvu3rotGiZ2jFrYPRERQqbi398zR5BX9qhsWroHUjPMHLT4r5qfShAHdtXHUDKhcdCXZjRkN7i8qVApf",
  "key12": "2wniYMvyK1tWj9gr1ugEb63ZJxz6v9m2dEyQRhy5G4tzJQqUaGzwBfayH6BZ6pBHs6DqerZzTkq2S4kJYxMuaNSq",
  "key13": "5j53nVSodqMAmDCAiQE8BJJBBVvm34dhWFDBpJsSsTnQUcKBr23hbV3U4SVLcdht9iRYziSsVsbzv3tuErJvZdw7",
  "key14": "3HF2ok8JMsNLFT62GbRWD762MHEEwDWWM6AD236LtsQnAVJU9iWygPn7F1b5uShs7AL5xg3WTqJLxhqkdmuVFbSJ",
  "key15": "34z3FzGtmaRn2LeQatpZuSHTVQtMXkUhgXLw1ZT26rJW8okhnfwGSSYJMgQnnh11tkhW2oCZyfz2yqnUPog4ESfo",
  "key16": "2a3XWifbjYd26KCyqxiRa7Y5fvcAmrboZhLPpofFu9nkyTivE8fXYbVycdiE7fiVprfy62qwKnurWMy5W5qPDgjG",
  "key17": "4VvCthUov1EH1dS7vfHwTmnVa8Q6rMDd3L4QNupL2hJA68s86WT7GRVWmAgzr9uF62wS6UwT14SDprRjVqEBNMLs",
  "key18": "3x3jsk9t7K3ATk5yhMwEYggjdPwcc7kaMLP7hmHWCA1g3WJEm6kGN5MsTDnTS3qHDa4zHKZ1HwP5ZzPYzJo2djdU",
  "key19": "497TQz2BfXvSdLgbxxetk9Ug4UDQdsRgcufWfphQUDBhctgTHUbgKHguYWMgFqyyiBAvoZsR5no95CkNEqW8fpMf",
  "key20": "4k6J9BV22Th8bApkyr2ChpriPGsrQ8ec46MGDuQuqh5cPN79ADv1aFwKvFmsVp3HvV4Y2GXQoCKpjEefbnLg15Ys",
  "key21": "2nVJmksTCsvQNBr2mE9sSQH1EWia42RN2jxPPaZPkqzPKEkXu9azmE1unrZGPdQoKuq6sRaNjb6f9xFJHqVsii9x",
  "key22": "TxieRARo5pE8CQ8TANxXWJTtcSpXCYMCLBuzBN96XzbdBBrEpdnpsMAcKMisN8fxXWgdaMSsoPFXi3AZk4bFTAp",
  "key23": "2qZ7XV2dUC63b6ZutSFjuceJaa674WXioB2fZcJ2J5wExCc4koxQwYaTRb2pc69KzQR2jnnecAek1woehM7g8RH1",
  "key24": "3JE65DjpfM2x89HFkWphq8eXyGbLHjLPS221fv3eQTFLu6RHF7RtUbyBp1F8pL52cHGRUCjVq6EJhegZyKR5RmdU",
  "key25": "4w87QtTDZrTuNfUPwFZYTiKWgZ2GfwysuQ5hkHWy6TSwtx5i8AR7JefgaKypnndW6ndwXFb2xQMg44xum5obxazK",
  "key26": "kJgwyuJ7h5dyDrtvUcsbR6ysmQnVzoahWQRVL4SmQ18f4sde1ZC6oqWemPkfyZfxMXddtesUR9K558g945gWqRn",
  "key27": "67UEwX59Wj1JDb5XJhy2UGfy1ZNUztaU2rD5LEcNHUQG3HNPuokN9hvJXrS6SYjhjWfqVyvFLoExf667JXN6jVgZ",
  "key28": "5aXLtwLozNHSNVdKjEchTUgemg41V2md4AikZDpVTsCfzVrNLtENL1cQJiPYHk3Yj88MWLCLzGtZWT5RByMaJWEi",
  "key29": "3AMyPzTMXXjjYqhgp1qzNr71QXF1q1woPcZGPoZ1a8Qq3e9ceMNrohzjp3GNx7SjKWewFXTrWWxi3UqhYftiw12L",
  "key30": "2r28osYPbcBGagK1tvyzEeBjNSrak8SrovtLpYfgnq3Q99nzTtGYwWPMbV1t7gHDp15acnBepaqyGSbG6J1wp6MZ",
  "key31": "5oLaiWJDF3VnxZ81XJ1dnDURcfvLTcQKKU8WqJpsgRbztntUTBjyj2gSrPs1hw6g3krYTS3YEbZEsDvdkahFZCSL",
  "key32": "2dw9Jv1rN3Mr9kfxZkwiUTSihtCSgdiyqMr6wfCK3Su9SNuK2hxWrUJgYVyJA5cCtRF4f7vBx7oShRHHh73ZxyQs",
  "key33": "4sAyaG84tuxzJ5Za5hM4qiXZn89TWZE5hBqZpMEhaGEiikg5JkJRutzjHz7hR2ihZhTMrFx4pfDQxfMeuLq187ac",
  "key34": "5xaq7zEdC8F1v2amkj2WseoMckpx6qVePKrUAXehigx7Pcay5JLg3guYD1iKeV2yaTm9HRGqH2GRWika5jpWvzrb",
  "key35": "2x1wdMaeHTfJ5kVmKdwXo45ymrS4hkEfAN3MdU4bSAQ9AWaYU91EeMNRZKNBEJhpHXBazs1HQ911vo15CE5pstVn",
  "key36": "3LLhA73HevJ2aLAtdtjxBiGQGXVSAWmtkFgN9EPmUsLqyhNahHVw25GJ4xTazSnFxzQeCawyWhipQfjcPcaozJjD",
  "key37": "3vuUWCoDk1TA1GwkKdawbk1K2FYDXTNtVh1stfAX4HpdQovP3jcoGBsSj9yYodXq62KFN19M181F1ir4T9cwi2r"
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
